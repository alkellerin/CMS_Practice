const CSV_PATH = '/inprs-sandbox/files/csv/memberForms.csv';

document.addEventListener('DOMContentLoaded', () => {

  const fundSel = document.getElementById('fund-filter');
  const catSel = document.getElementById('cat-filter');
  const tbody = document.getElementById('table-body');
  const countEl = document.getElementById('result-count');
  const resetBtn = document.getElementById('reset-btn');

  function parseCSV(text) {
    const lines = text.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
    return lines.slice(1).map(line => {
      const fields = [];
      let current = '';
      let inQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') { inQuotes = !inQuotes; }
        else if (char === ',' && !inQuotes) { fields.push(current.trim()); current = ''; }
        else { current += char; }
      }
      fields.push(current.trim());
      return headers.reduce((obj, header, i) => { obj[header] = fields[i] || ''; return obj; }, {});
    });
  }

  const FUND_ALIASES = {
    '1977 Fund': ['1977 Fund', '77 Fund'],
    'EG&C Fund': ['EG&C Fund', 'EGC Fund', 'EG&C'],
  };

  function fundInApplies(applies, fund) {
    const aliases = FUND_ALIASES[fund] || [fund];
    return aliases.some(alias => applies.includes(alias));
  }

  function formMatchesFund(f, fund) {
    if (!fund || fund === 'All Funds') return true;
    if (f.fund === 'All Funds') return true;
    if (f.fund === fund) return true;
    if (f.fund === 'Shared - Multiple Funds' && fundInApplies(f.applies, fund)) return true;
    return false;
  }

  function updateCategoryOptions(FORMS, selectedFund) {
    const current = catSel.value;
    while (catSel.options.length > 1) catSel.remove(1);
    const available = [...new Set(
      FORMS.filter(f => formMatchesFund(f, selectedFund)).map(f => f.category)
    )].sort();
    available.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat;
      opt.textContent = cat;
      if (cat === current) opt.selected = true;
      catSel.appendChild(opt);
    });
  }

  function render(FORMS) {
    const fund = fundSel.value;
    const cat = catSel.value;
    const filtered = FORMS.filter(f =>
      formMatchesFund(f, fund) && (!cat || f.category === cat)
    );
    tbody.innerHTML = '';
    if (filtered.length === 0) {
      tbody.innerHTML = '<tr><td colspan="4" class="text-center empty-state">No forms match the selected filters.</td></tr>';
    } else {
      filtered.forEach(f => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${f.title}</td>
        <td>${f.category}</td>
        <td>${f.applies}</td>
        <td>
          <a class="doc-link" href="${f.url}" target="_blank" rel="noopener">
            <i class="ph ph-file-arrow-down"></i>
            View
          </a>
        </td>
      `;
        tbody.appendChild(row);
      });
    }
    countEl.innerHTML = `Showing <strong>${filtered.length}</strong> of ${FORMS.length} forms`;
  }

  function init(FORMS) {
    updateCategoryOptions(FORMS, fundSel.value);
    fundSel.addEventListener('change', () => {
      updateCategoryOptions(FORMS, fundSel.value);
      const opts = [...catSel.options].map(o => o.value);
      if (!opts.includes(catSel.value)) catSel.value = '';
      render(FORMS);
    });
    catSel.addEventListener('change', () => render(FORMS));
    resetBtn.addEventListener('click', () => {
      fundSel.value = 'All Funds';
      updateCategoryOptions(FORMS, 'All Funds');
      catSel.value = '';
      render(FORMS);
    });
    const params = new URLSearchParams(window.location.search);
    const paramFund = params.get('fund');
    const paramCat = params.get('category');
    const initialFund = paramFund && [...fundSel.options].some(o => o.value === paramFund) ? paramFund : 'All Funds';
    fundSel.value = initialFund;
    updateCategoryOptions(FORMS, initialFund);
    if (paramCat && [...catSel.options].some(o => o.value === paramCat)) catSel.value = paramCat;
    render(FORMS);
  }

  tbody.innerHTML = '<tr><td colspan="4" class="text-center">Loading...</td></tr>';

  fetch(CSV_PATH)
    .then(res => {
      if (!res.ok) throw new Error(`Could not load forms data (${res.status})`);
      return res.text();
    })
    .then(csv => { const FORMS = parseCSV(csv); init(FORMS); })
    .catch(err => {
      console.error(err);
      tbody.innerHTML = '<tr><td colspan="4" class="text-center empty-state">Unable to load forms. Please try again later.</td></tr>';
    });

}); // end DOMContentLoaded