const FORMS = [
  // ── ALL FUNDS ──────────────────────────────────────────────
  { fund: "All Funds", category: "Account Management",   title: "Change Your Member Account Data",                                       applies: "All Funds",                              url: "https://forms.in.gov/Download.aspx?id=5069" },
  { fund: "All Funds", category: "Account Management",   title: "Submit a Forgery Affidavit",                                           applies: "All Funds",                              url: "https://forms.in.gov/Download.aspx?id=6501" },
  { fund: "All Funds", category: "Account Management",   title: "Authorize Fund to Release Your Confidential Information",               applies: "All Funds",                              url: "https://forms.in.gov/Download.aspx?id=8505" },
  { fund: "All Funds", category: "Administrative / Legal", title: "Member Petition for Administrative Review – Step 1",                  applies: "All Funds",                              url: "https://www.in.gov/inprs/files/Step1MemberPetitionforAdministrativeReview.pdf" },
  { fund: "All Funds", category: "Administrative / Legal", title: "Petition for Review to Administrative Law Judge – Step 2",            applies: "All Funds",                              url: "https://www.in.gov/inprs/files/Step2PetitionforReviewtoAdminstrativeLawJudge.pdf" },

  // ── SHARED – MULTIPLE FUNDS ────────────────────────────────
  { fund: "Shared – Multiple Funds", category: "Service Credit",            title: "Request a Review of Your Service Credit",                              applies: "PERF, TRF, 77 Fund, JRS, PARF, LRS",    url: "https://forms.in.gov/Download.aspx?id=10813" },
  { fund: "Shared – Multiple Funds", category: "Service Credit",            title: "Purchase Prior Military Service Credit",                               applies: "PERF, TRF",                              url: "https://forms.in.gov/Download.aspx?id=7417" },
  { fund: "Shared – Multiple Funds", category: "Service Credit",            title: "Purchase Prior Non-Vested 77 Fund Service Credit",                     applies: "PERF, 77 Fund",                          url: "https://forms.in.gov/Download.aspx?id=14879" },
  { fund: "Shared – Multiple Funds", category: "Personal Information",      title: "Verify Date of Birth for Members, Beneficiaries, and Survivors",       applies: "PERF, TRF",                              url: "https://forms.in.gov/Download.aspx?id=7109" },
  { fund: "Shared – Multiple Funds", category: "Personal Information",      title: "Submit Your Spouse's Data",                                            applies: "77 Fund, JRS, PARF, EG&C, LRS",          url: "https://forms.in.gov/Download.aspx?id=7425" },
  { fund: "Shared – Multiple Funds", category: "Defined Contribution Account", title: "Begin or Change POST-TAX Contributions to Defined Contribution Account", applies: "PERF, TRF",                           url: "https://forms.in.gov/Download.aspx?id=8271" },
  { fund: "Shared – Multiple Funds", category: "Retirement Benefits",       title: "Preliminary Estimate If You Change Survivor Beneficiary / Retirement Option (Retirees)", applies: "PERF, TRF",              url: "https://forms.in.gov/Download.aspx?id=8298" },
  { fund: "Shared – Multiple Funds", category: "Retirement Benefits",       title: "For Retirees: Change Beneficiary, Survivor Beneficiary, and/or Retirement Option",       applies: "PERF, TRF",              url: "https://forms.in.gov/Download.aspx?id=5586" },
  { fund: "Shared – Multiple Funds", category: "Retirement Benefits",       title: "Elect to Begin / Continue / Discontinue Benefits as Elected Official", applies: "PERF, TRF",                              url: "https://forms.in.gov/Download.aspx?id=7108" },
  { fund: "Shared – Multiple Funds", category: "Retirement Benefits",       title: "Apply for Public Safety Officer Line of Duty Death Benefit",           applies: "77 Fund, EG&C",                          url: "https://forms.in.gov/Download.aspx?id=7412" },
  { fund: "Shared – Multiple Funds", category: "DROP Benefits",             title: "Apply for DROP Disability Benefit",                                     applies: "77 Fund, EG&C",                          url: "https://forms.in.gov/Download.aspx?id=15605" },
  { fund: "Shared – Multiple Funds", category: "DROP Benefits",             title: "Apply for DROP Survivor Benefits",                                      applies: "77 Fund, EG&C",                          url: "https://forms.in.gov/Download.aspx?id=15604" },
  { fund: "Shared – Multiple Funds", category: "Survivor / Death Benefits", title: "Report a Member's Death",                                              applies: "PERF, TRF",                              url: "https://forms.in.gov/Download.aspx?id=5851" },
  { fund: "Shared – Multiple Funds", category: "Survivor / Death Benefits", title: "Apply for State Employees' Death Benefit",                             applies: "PERF, TRF, PARF, LRS",                   url: "https://forms.in.gov/Download.aspx?id=12187" },
  { fund: "Shared – Multiple Funds", category: "Survivor / Death Benefits", title: "Submit Affidavit for Small Estate",                                    applies: "PERF, TRF, 77 Fund, JRS, PARF, EG&C",    url: "https://forms.in.gov/Download.aspx?id=10041" },
  { fund: "Shared – Multiple Funds", category: "Survivor / Death Benefits", title: "Disclaim a Benefit (as a beneficiary)",                                applies: "PERF, TRF, 77 Fund, JRS, PARF, EG&C",    url: "https://forms.in.gov/Download.aspx?id=11060" },
  { fund: "Shared – Multiple Funds", category: "Tax / Legal",               title: "Get Information About Taxes on INPRS Benefits (Special Tax Notice)",   applies: "PERF, TRF, 77 Fund, JRS",                url: "https://www.in.gov/inprs/files/SpecialTaxNotice.pdf" },
  { fund: "Shared – Multiple Funds", category: "Tax / Legal",               title: "Request Public Records",                                               applies: "PERF, TRF",                              url: "https://www.in.gov/inprs/files/INPRSRequestForPublicRecordsForm.pdf" },

  // ── PERF ──────────────────────────────────────────────────
  { fund: "PERF", category: "Beneficiary",             title: "Change Your Beneficiary – Active Member (Hybrid Plan)",                 applies: "PERF",  url: "https://forms.in.gov/Download.aspx?id=7379" },
  { fund: "PERF", category: "Beneficiary",             title: "Change Your Beneficiary – Active Member (My Choice Plan)",             applies: "PERF",  url: "https://forms.in.gov/Download.aspx?id=10992" },
  { fund: "PERF", category: "Beneficiary",             title: "Change Your Beneficiary (GSSP)",                                       applies: "PERF",  url: "https://forms.in.gov/Download.aspx?id=14748" },
  { fund: "PERF", category: "Service Credit",          title: "Purchase Additional Service Credit",                                   applies: "PERF",  url: "https://forms.in.gov/Download.aspx?id=7409" },
  { fund: "PERF", category: "Service Credit",          title: "Purchase Out of State Service Credit",                                 applies: "PERF",  url: "https://forms.in.gov/Download.aspx?id=7397" },
  { fund: "PERF", category: "Rollover Savings Account (RSA)", title: "Transfer Funds from Outside Account into PERF Hybrid RSA",      applies: "PERF",  url: "https://forms.in.gov/Download.aspx?id=7410" },
  { fund: "PERF", category: "Rollover Savings Account (RSA)", title: "Transfer Funds from Outside Account into PERF My Choice RSA",   applies: "PERF",  url: "https://www.in.gov/inprs/files/51003-fill-in.pdf" },
  { fund: "PERF", category: "Retirement Benefits",     title: "Get an Estimate of Your Retirement Benefits",                         applies: "PERF",  url: "https://forms.in.gov/Download.aspx?id=7390" },
  { fund: "PERF", category: "Legal / Other",           title: "Limited Power of Attorney for Working Members and Benefit Recipients", applies: "PERF",  url: "https://forms.in.gov/Download.aspx?id=5620" },
  { fund: "PERF", category: "Legal / Other",           title: "Sample IRS Determination Letter",                                     applies: "PERF",  url: "https://www.in.gov/inprs/files/PERFDeterminationLetter.pdf" },

  // ── TRF ───────────────────────────────────────────────────
  { fund: "TRF", category: "Beneficiary",              title: "Change Your Beneficiary – Active Member (Hybrid Plan)",                applies: "TRF",   url: "https://forms.in.gov/Download.aspx?id=6296" },
  { fund: "TRF", category: "Beneficiary",              title: "Change Your Beneficiary – Active Member (My Choice Plan)",            applies: "TRF",   url: "https://forms.in.gov/Download.aspx?id=14534" },
  { fund: "TRF", category: "Service Credit",           title: "Purchase Additional Service Credit",                                  applies: "TRF",   url: "https://forms.in.gov/Download.aspx?id=14106" },
  { fund: "TRF", category: "Service Credit",           title: "Verify Your Out-of-State Teaching Service Credit",                    applies: "TRF",   url: "https://forms.in.gov/Download.aspx?id=5594" },
  { fund: "TRF", category: "Service Credit",           title: "Verify Your Private School Service Credit",                          applies: "TRF",   url: "https://forms.in.gov/Download.aspx?id=5524" },
  { fund: "TRF", category: "Service Credit",           title: "Verify Your Prior Indiana Service Credit",                           applies: "TRF",   url: "https://forms.in.gov/Download.aspx?id=15940" },
  { fund: "TRF", category: "Rollover Savings Account (RSA)", title: "Transfer Funds from Outside Account into TRF Hybrid RSA",       applies: "TRF",   url: "https://forms.in.gov/Download.aspx?id=6294" },
  { fund: "TRF", category: "Rollover Savings Account (RSA)", title: "Transfer Funds from Outside Account into TRF My Choice RSA",    applies: "TRF",   url: "https://forms.in.gov/Download.aspx?id=14550" },
  { fund: "TRF", category: "Disability Benefits",      title: "Physician's Statement for Classroom Disability Benefit",             applies: "TRF",   url: "https://forms.in.gov/Download.aspx?id=4772" },
  { fund: "TRF", category: "Disability Benefits",      title: "Superintendent's Statement for Classroom Disability Application",    applies: "TRF",   url: "https://forms.in.gov/Download.aspx?id=4770" },
  { fund: "TRF", category: "Disability Benefits",      title: "Affidavit of Applicant for Classroom Disability Benefit",            applies: "TRF",   url: "https://forms.in.gov/Download.aspx?id=4821" },
  { fund: "TRF", category: "Survivor / Death Benefits", title: "Apply for Surviving Dependent Pension Benefit",                     applies: "TRF",   url: "https://forms.in.gov/Download.aspx?id=8294" },
  { fund: "TRF", category: "Survivor / Death Benefits", title: "Affidavit for Court-Appointed Guardian of Surviving Dependent Pension Benefit", applies: "TRF", url: "https://forms.in.gov/Download.aspx?id=15961" },
  { fund: "TRF", category: "Legal / Other",            title: "Sample IRS Determination Letter – Pre-1996 Plan",                   applies: "TRF",   url: "https://www.in.gov/inprs/files/TRFPre1996PlanIRSDeterminationLetter.pdf" },
  { fund: "TRF", category: "Legal / Other",            title: "Sample IRS Determination Letter – 1996 Plan",                       applies: "TRF",   url: "https://www.in.gov/inprs/files/TRF1996PlanIRSDeterminationLetter.pdf" },

  // ── 1977 FUND ─────────────────────────────────────────────
  { fund: "1977 Fund", category: "Membership & Beneficiary", title: "Enroll in the '77 Fund",                                        applies: "1977 Fund", url: "https://forms.in.gov/Download.aspx?id=7382" },
  { fund: "1977 Fund", category: "Membership & Beneficiary", title: "Change Your Beneficiary (Active Members)",                      applies: "1977 Fund", url: "https://forms.in.gov/Download.aspx?id=8385" },
  { fund: "1977 Fund", category: "Service Credit",           title: "Purchase Prior In-State Service Credit",                        applies: "1977 Fund", url: "https://forms.in.gov/Download.aspx?id=13762" },
  { fund: "1977 Fund", category: "Service Credit",           title: "Purchase Out of State Service Credit",                          applies: "1977 Fund", url: "https://forms.in.gov/Download.aspx?id=8832" },
  { fund: "1977 Fund", category: "Service Credit",           title: "Purchase Prior Military Service Credit",                        applies: "1977 Fund", url: "https://forms.in.gov/Download.aspx?id=7246" },
  { fund: "1977 Fund", category: "Service Credit",           title: "Purchase Service Credit in Other Indiana Funds",                 applies: "1977 Fund", url: "https://forms.in.gov/Download.aspx?id=8920" },
  { fund: "1977 Fund", category: "Service Credit",           title: "Rollover Acceptance Form for Service Purchase Payments",         applies: "1977 Fund", url: "https://forms.in.gov/Download.aspx?id=13377" },
  { fund: "1977 Fund", category: "DROP Benefits",            title: "Request an Estimate for DROP",                                  applies: "1977 Fund", url: "https://forms.in.gov/Download.aspx?id=10466" },
  { fund: "1977 Fund", category: "DROP Benefits",            title: "Apply for the 1977 Fund DROP",                                  applies: "1977 Fund", url: "https://forms.in.gov/Download.aspx?id=16116" },
  { fund: "1977 Fund", category: "DROP Benefits",            title: "Apply for Extension of 1977 Fund DROP Retirement Date",          applies: "1977 Fund", url: "https://forms.in.gov/Download.aspx?id=16016" },
  { fund: "1977 Fund", category: "Retirement Benefits",      title: "Request an Estimate for 1977 Fund Benefits",                    applies: "1977 Fund", url: "https://forms.in.gov/Download.aspx?id=10467" },
  { fund: "1977 Fund", category: "Retirement Benefits",      title: "Apply for a 1977 Fund Regular Disability Benefit",              applies: "1977 Fund", url: "https://forms.in.gov/Download.aspx?id=7386" },
  { fund: "1977 Fund", category: "Survivor / Death Benefits", title: "Apply for 1977 Fund Regular Survivor Benefits",                applies: "1977 Fund", url: "https://forms.in.gov/Download.aspx?id=7383" },
  { fund: "1977 Fund", category: "Survivor / Death Benefits", title: "Apply for a Lump Sum Death Benefit (Small Estate Affidavit Heir)", applies: "1977 Fund", url: "https://forms.in.gov/Download.aspx?id=7464" },
  { fund: "1977 Fund", category: "Survivor / Death Benefits", title: "Apply for a Lump Sum Death Benefit (Estate Administrator / Executor)", applies: "1977 Fund", url: "https://forms.in.gov/Download.aspx?id=7441" },
  { fund: "1977 Fund", category: "Survivor / Death Benefits", title: "Apply for Transfer Under IN Uniform Transfers to Minors Act",  applies: "1977 Fund", url: "https://forms.in.gov/Download.aspx?id=7439" },
  { fund: "1977 Fund", category: "Survivor / Death Benefits", title: "Full-Time Student Confirmation Form",                          applies: "1977 Fund", url: "https://forms.in.gov/Download.aspx?id=12505" },
  { fund: "1977 Fund", category: "Insurance",                title: "Authorization for an Insurance Premium Deduction",              applies: "1977 Fund", url: "https://forms.in.gov/Download.aspx?id=10554" },
  { fund: "1977 Fund", category: "Insurance",                title: "Insurance Carrier Agreement",                                   applies: "1977 Fund", url: "https://forms.in.gov/Download.aspx?id=10555" },
  { fund: "1977 Fund", category: "Other",                    title: "Authorize Deduction of Dues to a Labor Organization",           applies: "1977 Fund", url: "https://forms.in.gov/Download.aspx?id=13420" },

  // ── JRS ───────────────────────────────────────────────────
  { fund: "JRS", category: "Beneficiary",             title: "Submit a Beneficiary Application",                                     applies: "JRS",  url: "https://forms.in.gov/Download.aspx?id=13172" },
  { fund: "JRS", category: "Service Credit",          title: "Purchase Service Credit",                                              applies: "JRS",  url: "https://forms.in.gov/Download.aspx?id=7426" },
  { fund: "JRS", category: "Disability Benefits",     title: "Apply for JRS Disability Benefits",                                    applies: "JRS",  url: "https://forms.in.gov/Download.aspx?id=15338" },
  { fund: "JRS", category: "Survivor / Death Benefits", title: "Apply for Survivor Benefits",                                        applies: "JRS",  url: "https://forms.in.gov/Download.aspx?id=7384" },

  // ── PARF ──────────────────────────────────────────────────
  { fund: "PARF", category: "Beneficiary",            title: "Submit a Beneficiary Application",                                     applies: "PARF", url: "https://forms.in.gov/Download.aspx?id=13173" },
  { fund: "PARF", category: "Disability Benefits",    title: "Apply for PARF Disability Benefits",                                   applies: "PARF", url: "https://forms.in.gov/Download.aspx?id=15336" },
  { fund: "PARF", category: "Survivor / Death Benefits", title: "Apply for Survivor Benefits",                                       applies: "PARF", url: "https://forms.in.gov/Download.aspx?id=7437" },

  // ── EG&C ──────────────────────────────────────────────────
  { fund: "EG&C Fund", category: "Beneficiary",           title: "Change Your Beneficiary (Active Members)",                         applies: "EG&C Fund", url: "https://forms.in.gov/Download.aspx?id=7424" },
  { fund: "EG&C Fund", category: "Service Credit",        title: "Purchase Prior Military Service Credit",                           applies: "EG&C Fund", url: "https://forms.in.gov/Download.aspx?id=7604" },
  { fund: "EG&C Fund", category: "DROP Benefits",         title: "Apply for the EG&C DROP",                                         applies: "EG&C Fund", url: "https://forms.in.gov/Download.aspx?id=16117" },
  { fund: "EG&C Fund", category: "DROP Benefits",         title: "Apply for Extension of EG&C DROP Retirement Date",                 applies: "EG&C Fund", url: "https://forms.in.gov/Download.aspx?id=16017" },
  { fund: "EG&C Fund", category: "DROP Benefits",         title: "Apply for EG&C DROP Disability Benefits",                         applies: "EG&C Fund", url: "https://forms.in.gov/Download.aspx?id=15605" },
  { fund: "EG&C Fund", category: "Disability Benefits",   title: "Apply for EG&C Regular Disability Benefits",                      applies: "EG&C Fund", url: "https://forms.in.gov/Download.aspx?id=15337" },
  { fund: "EG&C Fund", category: "Survivor / Death Benefits", title: "Apply for EG&C Regular Survivor Benefits",                    applies: "EG&C Fund", url: "https://forms.in.gov/Download.aspx?id=7436" },
  { fund: "EG&C Fund", category: "Other",                 title: "Authorize Deductions for Payment of Labor Organization Dues",      applies: "EG&C Fund", url: "https://forms.in.gov/Download.aspx?id=13381" },

  // ── LRS ───────────────────────────────────────────────────
  { fund: "LRS", category: "Beneficiary",             title: "Update Your Beneficiary Information",                                  applies: "LRS",  url: "https://forms.in.gov/Download.aspx?id=14527" },
  { fund: "LRS", category: "Rollover / Account",      title: "Transfer Funds from Outside Account into LRS",                        applies: "LRS",  url: "https://forms.in.gov/Download.aspx?id=14551" },
  { fund: "LRS", category: "Survivor / Death Benefits", title: "Legislators' Defined Benefit Plan Survivor Benefit",                applies: "LRS",  url: "https://forms.in.gov/Download.aspx?id=7438" },
];


const fundSel   = document.getElementById('fund-filter');
const catSel    = document.getElementById('cat-filter');
const tbody     = document.getElementById('table-body');
const countEl   = document.getElementById('result-count');
const resetBtn  = document.getElementById('reset-btn');

// Populate category dropdown (all unique categories, sorted)
const allCategories = [...new Set(FORMS.map(f => f.category))].sort();
allCategories.forEach(cat => {
  const opt = document.createElement('option');
  opt.value = cat;
  opt.textContent = cat;
  catSel.appendChild(opt);
});

function updateCategoryOptions(selectedFund) {
  const current = catSel.value;
  while (catSel.options.length > 1) catSel.remove(1);

  const available = [...new Set(
    FORMS
      .filter(f => !selectedFund || f.fund === selectedFund)
      .map(f => f.category)
  )].sort();

  available.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    if (cat === current) opt.selected = true;
    catSel.appendChild(opt);
  });
}

function render() {
  const fund = fundSel.value;
  const cat  = catSel.value;

  const filtered = FORMS.filter(f =>
    (!fund || f.fund === fund) &&
    (!cat  || f.category === cat)
  );

  tbody.innerHTML = '';

  if (filtered.length === 0) {
    tbody.innerHTML = '<div class="empty-state">No forms match the selected filters.</div>';
  } else {
    filtered.forEach(f => {
      const row = document.createElement('div');
      row.className = 'table-row';
      const isDoc = f.url.includes('.pdf') || f.url.includes('Download.aspx');
      row.innerHTML = `
        <div class="table-cell col-title">
          <p class="bodyS">${f.title}</p>
        </div>
        <div class="table-cell col-category">
          <p class="bodyS category-label">${f.category}</p>
        </div>
        <div class="table-cell col-applies">
          <p class="bodyS">${f.applies}</p>
        </div>
        <div class="table-cell col-doc">
          <a class="doc-link" href="${f.url}" target="_blank" rel="noopener">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
            </svg>
            View
          </a>
        </div>
      `;
      tbody.appendChild(row);
    });
  }

  const total = FORMS.length;
  const shown = filtered.length;
  countEl.innerHTML = (fund || cat)
    ? `Showing <strong>${shown}</strong> of ${total} forms`
    : `Showing all <strong>${total}</strong> forms`;
}

fundSel.addEventListener('change', () => {
  updateCategoryOptions(fundSel.value);
  // reset category if it's no longer available
  const opts = [...catSel.options].map(o => o.value);
  if (!opts.includes(catSel.value)) catSel.value = '';
  render();
});

catSel.addEventListener('change', render);

resetBtn.addEventListener('click', () => {
  fundSel.value = '';
  updateCategoryOptions('');
  catSel.value = '';
  render();
});

// Init
updateCategoryOptions('');
render();

console.log("test");