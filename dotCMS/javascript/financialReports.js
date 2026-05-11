const CSV_PATH = '/inprs-sandbox/files/csv/financialReports.csv';

const typeSel = document.getElementById('type-filter');
const fundSel = document.getElementById('fund-filter');
const yearSel = document.getElementById('year-filter');
const tbody = document.getElementById('table-body');
const countEl = document.getElementById('result-count');
const resetBtn = document.getElementById('reset-btn');

// ── CSV parser ────────────────────────────────────────────────
// Handles quoted fields containing commas (e.g. "EG&C Fund, Other")
function parseCSV(text) {
    const lines = text.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));

    return lines.slice(1).map(line => {
        const fields = [];
        let current = '';
        let inQuotes = false;

        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                fields.push(current.trim());
                current = '';
            } else {
                current += char;
            }
        }
        fields.push(current.trim());

        return headers.reduce((obj, header, i) => {
            obj[header] = fields[i] || '';
            return obj;
        }, {});
    });
}

// ── Render ────────────────────────────────────────────────────
function render(PUBS) {
    const type = typeSel.value;
    const fund = fundSel.value;
    const year = yearSel.value;

    const filtered = PUBS.filter(p =>
        (!type || p.type === type) &&
        (!fund || p.fund === fund) &&
        (!year || p.year === year)
    );

    tbody.innerHTML = '';

    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" class="text-center empty-state">No publications match the selected filters.</td></tr>';
    } else {
        filtered.forEach(p => {
            const row = document.createElement('tr');
            row.innerHTML = `
        <td>${p.title}</td>
        <td>${p.fund}</td>
        <td>${p.year}</td>
        <td>
          <a class="doc-link" href="${p.url}" target="_blank" rel="noopener">
            <i class="ph ph-file-arrow-down"></i>
            View
          </a>
        </td>
      `;
            tbody.appendChild(row);
        });
    }

    countEl.innerHTML = `Showing <strong>${filtered.length}</strong> of ${PUBS.length} publications`;
}

// ── Init ──────────────────────────────────────────────────────
function init(PUBS) {
    typeSel.addEventListener('change', () => render(PUBS));
    fundSel.addEventListener('change', () => render(PUBS));
    yearSel.addEventListener('change', () => render(PUBS));

    resetBtn.addEventListener('click', () => {
        typeSel.value = '';
        fundSel.value = '';
        yearSel.value = '';
        render(PUBS);
    });

    // Read URL params and pre-select filters
    const params = new URLSearchParams(window.location.search);
    const paramType = params.get('type');
    const paramFund = params.get('fund');
    const paramYear = params.get('year');

    if (paramType && [...typeSel.options].some(o => o.value === paramType)) typeSel.value = paramType;
    if (paramFund && [...fundSel.options].some(o => o.value === paramFund)) fundSel.value = paramFund;
    if (paramYear && [...yearSel.options].some(o => o.value === paramYear)) yearSel.value = paramYear;

    render(PUBS);
}

// ── Fetch CSV ─────────────────────────────────────────────────
tbody.innerHTML = '<tr><td colspan="4" class="text-center">Loading...</td></tr>';

fetch(CSV_PATH)
    .then(res => {
        if (!res.ok) throw new Error(`Could not load publications data (${res.status})`);
        return res.text();
    })
    .then(csv => {
        const PUBS = parseCSV(csv);
        init(PUBS);
    })
    .catch(err => {
        console.error(err);
        tbody.innerHTML = '<tr><td colspan="4" class="text-center empty-state">Unable to load publications. Please try again later.</td></tr>';
    });