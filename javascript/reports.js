const PUBS = [
  // ── INPRS ANNUAL REPORTS ──────────────────────────────────
  { fund: "INPRS", type: "Annual Report", title: "INPRS Annual Comprehensive Financial Report", year: "2025", url: "https://www.in.gov/inprs/files/annual-reports/INPRS-Annual-Report-FY25.pdf" },
  { fund: "INPRS", type: "Annual Report", title: "INPRS Annual Comprehensive Financial Report", year: "2024", url: "https://www.in.gov/inprs/files/INPRSAnnualReportBook_FY24.pdf" },
  { fund: "INPRS", type: "Annual Report", title: "INPRS Annual Comprehensive Financial Report", year: "2023", url: "https://www.in.gov/inprs/files/INPRSAnnualReportBook_FY23.pdf" },
  { fund: "INPRS", type: "Annual Report", title: "INPRS Annual Comprehensive Financial Report", year: "2022", url: "https://www.in.gov/inprs/files/INPRSAnnualReportBook_FY22.pdf" },
  { fund: "INPRS", type: "Annual Report", title: "INPRS Annual Comprehensive Financial Report", year: "2021", url: "https://www.in.gov/inprs/files/INPRSAnnualReportBook2021.pdf" },
  { fund: "INPRS", type: "Annual Report", title: "INPRS Annual Comprehensive Financial Report", year: "2020", url: "https://www.in.gov/inprs/files/INPRSConsolidatedAR_FY20.pdf" },
  { fund: "INPRS", type: "Annual Report", title: "INPRS Annual Comprehensive Financial Report", year: "2019", url: "https://www.in.gov/inprs/files/2019_INPRSAnnualReportBook.pdf" },
  { fund: "INPRS", type: "Annual Report", title: "INPRS Annual Comprehensive Financial Report", year: "2018", url: "https://www.in.gov/inprs/files/2018_INPRSAnnualReportBook.pdf" },
  { fund: "INPRS", type: "Annual Report", title: "INPRS Annual Comprehensive Financial Report", year: "2017", url: "https://www.in.gov/inprs/files/2017_INPRSARBookWeb.pdf" },
  { fund: "INPRS", type: "Annual Report", title: "INPRS Annual Comprehensive Financial Report", year: "2016", url: "https://www.in.gov/inprs/files/2016INPRSARBook.pdf" },
  { fund: "INPRS", type: "Annual Report", title: "INPRS Annual Comprehensive Financial Report", year: "2015", url: "https://www.in.gov/inprs/files/2015INPRSARBook.pdf" },
  { fund: "INPRS", type: "Annual Report", title: "INPRS Annual Comprehensive Financial Report", year: "2014", url: "https://www.in.gov/inprs/files/2014INPRSARBook_Web.pdf" },
  { fund: "INPRS", type: "Annual Report", title: "INPRS Annual Comprehensive Financial Report", year: "2013", url: "https://www.in.gov/inprs/files/2013INPRSARBook.pdf" },
  { fund: "INPRS", type: "Annual Report", title: "INPRS Annual Comprehensive Financial Report", year: "2012", url: "https://www.in.gov/inprs/files/2012INPRSAnnualReport.pdf" },

  // ── PERF ──────────────────────────────────────────────────
  { fund: "PERF", type: "Annual Report", title: "PERF Annual Comprehensive Financial Report", year: "2011", url: "https://www.in.gov/inprs/files/2011PERFARBook.pdf" },
  { fund: "PERF", type: "Annual Report", title: "PERF Annual Comprehensive Financial Report", year: "2010", url: "https://www.in.gov/inprs/files/2010PERFAnnualReport.pdf" },
  { fund: "PERF", type: "Annual Report", title: "PERF Annual Comprehensive Financial Report", year: "2009", url: "https://www.in.gov/inprs/files/2009PERFAnnualReport.pdf" },
  { fund: "PERF", type: "Annual Report", title: "PERF Annual Comprehensive Financial Report", year: "2008", url: "https://www.in.gov/inprs/files/2008PERFAnnualReport.pdf" },
  { fund: "PERF", type: "Annual Report", title: "PERF Annual Comprehensive Financial Report", year: "2007", url: "https://www.in.gov/inprs/files/2007PERFAnnualReport.pdf" },
  { fund: "PERF", type: "Annual Report", title: "PERF Annual Comprehensive Financial Report", year: "2006", url: "https://www.in.gov/inprs/files/2006PERFAnnualReport.pdf" },
  { fund: "PERF", type: "Annual Report", title: "PERF Annual Comprehensive Financial Report", year: "2005", url: "https://www.in.gov/inprs/files/2005PERFAnnualReport.pdf" },
  { fund: "PERF", type: "Annual Report", title: "PERF Annual Comprehensive Financial Report", year: "2004", url: "https://www.in.gov/inprs/files/2004PERFAnnualReport.pdf" },
  { fund: "PERF", type: "Annual Report", title: "PERF Annual Comprehensive Financial Report", year: "2003", url: "https://www.in.gov/inprs/files/2003PERFAnnualReport.pdf" },
  { fund: "PERF", type: "Annual Report", title: "PERF Annual Comprehensive Financial Report", year: "2002", url: "https://www.in.gov/inprs/files/2002PERFAnnualReport.pdf" },
  { fund: "PERF", type: "Annual Report", title: "PERF Annual Comprehensive Financial Report", year: "2000", url: "https://www.in.gov/inprs/files/2000PERFAnnualReport.pdf" },
  { fund: "PERF", type: "Actuarial Valuation Report", title: "PERF Actuarial Valuation Report", year: "2025", url: "https://www.in.gov/inprs/files/actuarial-valuation-reports/2025ActuarialValuationPERF.pdf" },
  { fund: "PERF", type: "Actuarial Valuation Report", title: "PERF Actuarial Valuation Report", year: "2024", url: "https://www.in.gov/inprs/files/2024ActuarialValuation_PERF.pdf" },
  { fund: "PERF", type: "Actuarial Valuation Report", title: "PERF Actuarial Valuation Report", year: "2023", url: "https://www.in.gov/inprs/files/2023ActuarialValuation_PERF.pdf" },
  { fund: "PERF", type: "Actuarial Valuation Report", title: "PERF Actuarial Valuation Report", year: "2022", url: "https://www.in.gov/inprs/files/2022ActuarialValuationReport_PERF.pdf" },
  { fund: "PERF", type: "Actuarial Valuation Report", title: "PERF Actuarial Valuation Report", year: "2021", url: "https://www.in.gov/inprs/files/2021INPRSActuarialValuationRpt_PERF.pdf" },
  { fund: "PERF", type: "Actuarial Valuation Report", title: "PERF Actuarial Valuation Report", year: "2020", url: "https://www.in.gov/inprs/files/2020ActuarialReport_PERF.pdf" },
  { fund: "PERF", type: "Actuarial Valuation Report", title: "PERF Actuarial Valuation Report", year: "2019", url: "https://www.in.gov/inprs/files/2019ActuarialReport_PERF.pdf" },
  { fund: "PERF", type: "Actuarial Valuation Report", title: "PERF Actuarial Valuation Report", year: "2018", url: "https://www.in.gov/inprs/files/2018-Actuarial-Report-PERF.PDF" },
  { fund: "PERF", type: "Actuarial Valuation Report", title: "PERF Actuarial Valuation Report", year: "2017", url: "https://www.in.gov/inprs/files/2017PERFActuarialReport.pdf" },
  { fund: "PERF", type: "Actuarial Valuation Report", title: "PERF Actuarial Valuation Report", year: "2016", url: "https://www.in.gov/inprs/files/2016PERFActuarialReport.pdf" },
  { fund: "PERF", type: "Actuarial Valuation Report", title: "PERF Actuarial Valuation Report", year: "2015", url: "https://www.in.gov/inprs/files/2015PERFActuarialValuationReport.pdf" },
  { fund: "PERF", type: "Actuarial Valuation Report", title: "PERF Actuarial Valuation Report", year: "2014", url: "https://www.in.gov/inprs/files/FY2014PERFActuarialValuationReport.pdf" },
  { fund: "PERF", type: "Actuarial Valuation Report", title: "PERF Actuarial Valuation Report", year: "2013", url: "https://www.in.gov/inprs/files/Actuarial_Valuation_Report_2013_PERF_-_FINAL_12-17-13.pdf" },
  { fund: "PERF", type: "GASB 68 Allocation Report", title: "PERF GASB 68 Allocation Report", year: "2025", url: "https://www.in.gov/inprs/files/2025PERFGASB68AllocationReport.pdf" },
  { fund: "PERF", type: "GASB 68 Allocation Report", title: "PERF GASB 68 Allocation Report", year: "2024", url: "https://www.in.gov/inprs/files/2024PERFGASB68AllocationReport.pdf" },
  { fund: "PERF", type: "GASB 68 Allocation Report", title: "PERF GASB 68 Allocation Report", year: "2023", url: "https://www.in.gov/inprs/files/INPRS-2023-PERF-GASB-68-Allocation-Report_Final.pdf" },
  { fund: "PERF", type: "GASB 68 Allocation Report", title: "PERF GASB 68 Allocation Report", year: "2022", url: "https://www.in.gov/inprs/files/2022PERFGASB68AllocationReport.pdf" },
  { fund: "PERF", type: "GASB 68 Allocation Report", title: "PERF GASB 68 Allocation Report", year: "2021", url: "https://www.in.gov/inprs/files/PERF2021GASB68Report.pdf" },
  { fund: "PERF", type: "GASB 68 Allocation Report", title: "PERF GASB 68 Allocation Report", year: "2020", url: "https://www.in.gov/inprs/files/2020GASB68Report_PERF.pdf" },
  { fund: "PERF", type: "GASB 68 Allocation Report", title: "PERF GASB 68 Allocation Report", year: "2019", url: "https://www.in.gov/inprs/files/2019PERFGASB68AllocationReport_FINAL.pdf" },
  { fund: "PERF", type: "GASB 68 Allocation Report", title: "PERF GASB 68 Allocation Report", year: "2018", url: "https://www.in.gov/inprs/files/INPRS2018PERFGASB68Report.PDF" },
  { fund: "PERF", type: "GASB 68 Allocation Report", title: "PERF GASB 68 Allocation Report", year: "2017", url: "https://www.in.gov/inprs/files/INPRS-2017-PERF-GASB-68-Allocation-Report-FINAL.PDF" },
  { fund: "PERF", type: "GASB 68 Allocation Report", title: "PERF GASB 68 Allocation Report", year: "2016", url: "https://www.in.gov/inprs/files/2016PERFGASB68Report.pdf" },
  { fund: "PERF", type: "GASB 68 Allocation Report", title: "PERF GASB 68 Allocation Report", year: "2015", url: "https://www.in.gov/inprs/files/2015PERFGASB68Report.pdf" },
  { fund: "PERF", type: "GASB 68 Allocation Report", title: "PERF GASB 68 Allocation Report", year: "2014", url: "https://www.in.gov/inprs/files/2014PERFGASB68Report.pdf" },
  { fund: "PERF", type: "Unaudited Employer-Specific GASB 68 Schedule", title: "PERF Unaudited Employer-Specific GASB 68 Schedule", year: "2025", url: "https://www.in.gov/inprs/files/PERFUnauditedGASB682025.pdf" },
  { fund: "PERF", type: "Unaudited Employer-Specific GASB 68 Schedule", title: "PERF Unaudited Employer-Specific GASB 68 Schedule", year: "2024", url: "https://www.in.gov/inprs/files/2024PERFUnauditedEmployer-specificGASB68Schedule.pdf" },
  { fund: "PERF", type: "Unaudited Employer-Specific GASB 68 Schedule", title: "PERF Unaudited Employer-Specific GASB 68 Schedule", year: "2023", url: "https://www.in.gov/inprs/files/PERF-Unaudited-Employer-specific-GASB-68-Schedules.pdf" },
  { fund: "PERF", type: "Unaudited Employer-Specific GASB 68 Schedule", title: "PERF Unaudited Employer-Specific GASB 68 Schedule", year: "2022", url: "https://www.in.gov/inprs/files/2022PERFUnauditedScheduleERAllocation.pdf" },
  { fund: "PERF", type: "Unaudited Employer-Specific GASB 68 Schedule", title: "PERF Unaudited Employer-Specific GASB 68 Schedule", year: "2021", url: "https://www.in.gov/inprs/files/2021UnauditedEmployer-SpecificGASB68Schedules_PERF.pdf" },
  { fund: "PERF", type: "Unaudited Employer-Specific GASB 68 Schedule", title: "PERF Unaudited Employer-Specific GASB 68 Schedule", year: "2020", url: "https://www.in.gov/inprs/files/2020UnauditedEmployer-specificGASB68Schedules_PERF.pdf" },
  { fund: "PERF", type: "Unaudited Employer-Specific GASB 68 Schedule", title: "PERF Unaudited Employer-Specific GASB 68 Schedule", year: "2019", url: "https://www.in.gov/inprs/files/PERFUnauditedEmployer-specificGASB68Schedules.pdf" },
  { fund: "PERF", type: "Unaudited Employer-Specific GASB 68 Schedule", title: "PERF Unaudited Employer-Specific GASB 68 Schedule", year: "2018", url: "https://www.in.gov/inprs/files/PERFUnauditedEmployerSpecificGASB68Schedule.pdf" },

  // ── TRF PRE-1996 ──────────────────────────────────────────
  { fund: "TRF Pre-1996", type: "Actuarial Valuation Report", title: "TRF Pre-1996 Actuarial Valuation Report", year: "2025", url: "https://www.in.gov/inprs/files/actuarial-valuation-reports/2025-ActuarialValuationTRF-Pre-96.pdf" },
  { fund: "TRF Pre-1996", type: "Actuarial Valuation Report", title: "TRF Pre-1996 Actuarial Valuation Report", year: "2024", url: "https://www.in.gov/inprs/files/2024ActuarialValuation_TRFPre-96.pdf" },
  { fund: "TRF Pre-1996", type: "Actuarial Valuation Report", title: "TRF Pre-1996 Actuarial Valuation Report", year: "2023", url: "https://www.in.gov/inprs/files/2023ActuarialValuation_TRFPre-96.pdf" },
  { fund: "TRF Pre-1996", type: "Actuarial Valuation Report", title: "TRF Pre-1996 Actuarial Valuation Report", year: "2022", url: "https://www.in.gov/inprs/files/2022ActuarialValuationReport_TRFPre-96.pdf" },
  { fund: "TRF Pre-1996", type: "Actuarial Valuation Report", title: "TRF Pre-1996 Actuarial Valuation Report", year: "2021", url: "https://www.in.gov/inprs/files/2021INPRSActuarialValuationRpt_TRFPre96.pdf" },
  { fund: "TRF Pre-1996", type: "Actuarial Valuation Report", title: "TRF Pre-1996 Actuarial Valuation Report", year: "2020", url: "https://www.in.gov/inprs/files/2020ActuarialReport_TRFPre-96.pdf" },
  { fund: "TRF Pre-1996", type: "Actuarial Valuation Report", title: "TRF Pre-1996 Actuarial Valuation Report", year: "2019", url: "https://www.in.gov/inprs/files/2019ActuarialReport_TRFPre-96.pdf" },
  { fund: "TRF Pre-1996", type: "Actuarial Valuation Report", title: "TRF Pre-1996 Actuarial Valuation Report", year: "2018", url: "https://www.in.gov/inprs/files/2018-Actuarial-Report-TRF-Pre-96.pdf" },
  { fund: "TRF Pre-1996", type: "Actuarial Valuation Report", title: "TRF Pre-1996 Actuarial Valuation Report", year: "2017", url: "https://www.in.gov/inprs/files/2017TRFPre-1996AccountActuarialReport.pdf" },
  { fund: "TRF Pre-1996", type: "Actuarial Valuation Report", title: "TRF Pre-1996 Actuarial Valuation Report", year: "2016", url: "https://www.in.gov/inprs/files/2016TRFPre-1996AccountValuationReport.pdf" },
  { fund: "TRF Pre-1996", type: "Actuarial Valuation Report", title: "TRF Pre-1996 Actuarial Valuation Report", year: "2015", url: "https://www.in.gov/inprs/files/2015TRFPre1996AccountActuarialValuationReport.pdf" },
  { fund: "TRF Pre-1996", type: "Actuarial Valuation Report", title: "TRF Pre-1996 Actuarial Valuation Report", year: "2014", url: "https://www.in.gov/inprs/files/FY2014TRFGASB67-68ActuarialValuationReport.pdf" },
  { fund: "TRF Pre-1996", type: "GASB 68 Allocation Report", title: "TRF Pre-1996 GASB 68 Allocation Report", year: "2025", url: "https://www.in.gov/inprs/files/2025TRFPre-96GASB68AllocationReport.pdf" },
  { fund: "TRF Pre-1996", type: "GASB 68 Allocation Report", title: "TRF Pre-1996 GASB 68 Allocation Report", year: "2024", url: "https://www.in.gov/inprs/files/2024TRFPre-1996GASB68AllocationReport.pdf" },
  { fund: "TRF Pre-1996", type: "GASB 68 Allocation Report", title: "TRF Pre-1996 GASB 68 Allocation Report", year: "2023", url: "https://www.in.gov/inprs/files/INPRS-2023-TRF-Pre-1996-GASB-68-Allocation-Report_Final.pdf" },
  { fund: "TRF Pre-1996", type: "GASB 68 Allocation Report", title: "TRF Pre-1996 GASB 68 Allocation Report", year: "2022", url: "https://www.in.gov/inprs/files/2022TRFPre-1996GASB68AllocationReport.pdf" },
  { fund: "TRF Pre-1996", type: "GASB 68 Allocation Report", title: "TRF Pre-1996 GASB 68 Allocation Report", year: "2021", url: "https://www.in.gov/inprs/files/TRFPre19962021GASB68Report.pdf" },
  { fund: "TRF Pre-1996", type: "GASB 68 Allocation Report", title: "TRF Pre-1996 GASB 68 Allocation Report", year: "2020", url: "https://www.in.gov/inprs/files/2020GASB68Report_TRFPre96.pdf" },
  { fund: "TRF Pre-1996", type: "GASB 68 Allocation Report", title: "TRF Pre-1996 GASB 68 Allocation Report", year: "2019", url: "https://www.in.gov/inprs/files/2019TRFPre-1996GASB68AllocationReport_FINAL.pdf" },
  { fund: "TRF Pre-1996", type: "GASB 68 Allocation Report", title: "TRF Pre-1996 GASB 68 Allocation Report", year: "2018", url: "https://www.in.gov/inprs/files/INPRS2018TRFPre1996GASB68Report.PDF" },
  { fund: "TRF Pre-1996", type: "GASB 68 Allocation Report", title: "TRF Pre-1996 GASB 68 Allocation Report", year: "2017", url: "https://www.in.gov/inprs/files/INPRS2017TRFPre1996GASB68Report.PDF" },
  { fund: "TRF Pre-1996", type: "GASB 68 Allocation Report", title: "TRF Pre-1996 GASB 68 Allocation Report", year: "2016", url: "https://www.in.gov/inprs/files/2016TRFPre-96GASB68Report.pdf" },
  { fund: "TRF Pre-1996", type: "GASB 68 Allocation Report", title: "TRF Pre-1996 GASB 68 Allocation Report", year: "2015", url: "https://www.in.gov/inprs/files/2015TRFPre-96GASB68Report.pdf" },
  { fund: "TRF Pre-1996", type: "GASB 68 Allocation Report", title: "TRF Pre-1996 GASB 68 Allocation Report", year: "2014", url: "https://www.in.gov/inprs/files/2014TRFPre-96GASB68Report.pdf" },
  { fund: "TRF Pre-1996", type: "GASB 68 Special Funding Situation", title: "TRF Pre-1996 GASB 68 Special Funding Situation Schedule", year: "2019", url: "https://www.in.gov/inprs/files/2019GASB68ReportSpecialFundingSituation_TRFPre96.pdf" },

  // ── TRF 1996 ──────────────────────────────────────────────
  { fund: "TRF 1996", type: "Annual Report", title: "TRF Annual Comprehensive Financial Report", year: "2011", url: "https://www.in.gov/inprs/files/2011TRFARBook.pdf" },
  { fund: "TRF 1996", type: "Annual Report", title: "TRF Annual Comprehensive Financial Report", year: "2010", url: "https://www.in.gov/inprs/files/2010TRFAnnualReport.pdf" },
  { fund: "TRF 1996", type: "Annual Report", title: "TRF Annual Comprehensive Financial Report", year: "2009", url: "https://www.in.gov/inprs/files/2009TRFAnnualReport.pdf" },
  { fund: "TRF 1996", type: "Annual Report", title: "TRF Annual Comprehensive Financial Report", year: "2008", url: "https://www.in.gov/inprs/files/2008TRFAnnualReport.pdf" },
  { fund: "TRF 1996", type: "Annual Report", title: "TRF Annual Comprehensive Financial Report", year: "2007", url: "https://www.in.gov/inprs/files/AnnualReport2007.pdf" },
  { fund: "TRF 1996", type: "Annual Report", title: "TRF Annual Comprehensive Financial Report", year: "2006", url: "https://www.in.gov/inprs/files/annualreport2006.pdf" },
  { fund: "TRF 1996", type: "Annual Report", title: "TRF Annual Comprehensive Financial Report", year: "2005", url: "https://www.in.gov/inprs/files/annualreport2005.pdf" },
  { fund: "TRF 1996", type: "Annual Report", title: "TRF Annual Comprehensive Financial Report", year: "2004", url: "https://www.in.gov/inprs/files/annualreport2004.pdf" },
  { fund: "TRF 1996", type: "Annual Report", title: "TRF Annual Comprehensive Financial Report", year: "2003", url: "https://www.in.gov/inprs/files/annualreport2003.pdf" },
  { fund: "TRF 1996", type: "Annual Report", title: "TRF Annual Comprehensive Financial Report", year: "2002", url: "https://www.in.gov/inprs/files/TRFannualreport2002.pdf" },
  { fund: "TRF 1996", type: "Annual Report", title: "TRF Annual Comprehensive Financial Report", year: "2001", url: "https://www.in.gov/inprs/files/TRFannualreport2001.pdf" },
  { fund: "TRF 1996", type: "Actuarial Valuation Report", title: "TRF 1996 Actuarial Valuation Report", year: "2025", url: "https://www.in.gov/inprs/files/actuarial-valuation-reports/2025ActuarialValuationTRF-Post-96.pdf" },
  { fund: "TRF 1996", type: "Actuarial Valuation Report", title: "TRF 1996 Actuarial Valuation Report", year: "2024", url: "https://www.in.gov/inprs/files/2024ActuarialValuation_TRF96.pdf" },
  { fund: "TRF 1996", type: "Actuarial Valuation Report", title: "TRF 1996 Actuarial Valuation Report", year: "2023", url: "https://www.in.gov/inprs/files/2023ActuarialValuation_TRF96.pdf" },
  { fund: "TRF 1996", type: "Actuarial Valuation Report", title: "TRF 1996 Actuarial Valuation Report", year: "2022", url: "https://www.in.gov/inprs/files/2022ActuarialValuationReport_TRF96.pdf" },
  { fund: "TRF 1996", type: "Actuarial Valuation Report", title: "TRF 1996 Actuarial Valuation Report", year: "2021", url: "https://www.in.gov/inprs/files/2021INPRSActuarialValuationRpt_TRF96.pdf" },
  { fund: "TRF 1996", type: "Actuarial Valuation Report", title: "TRF 1996 Actuarial Valuation Report", year: "2020", url: "https://www.in.gov/inprs/files/2020Actuarial-ReportTRF96.pdf" },
  { fund: "TRF 1996", type: "Actuarial Valuation Report", title: "TRF 1996 Actuarial Valuation Report", year: "2019", url: "https://www.in.gov/inprs/files/2019ActuarialReport_TRF96.pdf" },
  { fund: "TRF 1996", type: "Actuarial Valuation Report", title: "TRF 1996 Actuarial Valuation Report", year: "2018", url: "https://www.in.gov/inprs/files/2018-Actuarial-Report-TRF-96.pdf" },
  { fund: "TRF 1996", type: "Actuarial Valuation Report", title: "TRF 1996 Actuarial Valuation Report", year: "2017", url: "https://www.in.gov/inprs/files/2017TRF1996AccountActuarialReport.pdf" },
  { fund: "TRF 1996", type: "Actuarial Valuation Report", title: "TRF 1996 Actuarial Valuation Report", year: "2016", url: "https://www.in.gov/inprs/files/2016TRF1996AccountValuationReport.pdf" },
  { fund: "TRF 1996", type: "Actuarial Valuation Report", title: "TRF 1996 Actuarial Valuation Report", year: "2015", url: "https://www.in.gov/inprs/files/2015TRF1996AccountActuarialValuationReport.pdf" },
  { fund: "TRF 1996", type: "Actuarial Valuation Report", title: "TRF 1996 Actuarial Valuation Report", year: "2014", url: "https://www.in.gov/inprs/files/FY2014TRFActuarialValuationReport.pdf" },
  { fund: "TRF 1996", type: "Actuarial Valuation Report", title: "TRF 1996 Actuarial Valuation Report", year: "2013", url: "https://www.in.gov/inprs/files/Actuarial_Valuation_Report_2013_TRF_-_FINAL_12-17-13.pdf" },
  { fund: "TRF 1996", type: "GASB 68 Allocation Report", title: "TRF 1996 GASB 68 Allocation Report", year: "2025", url: "https://www.in.gov/inprs/files/2025TRFPostGASB68AllocationReport.pdf" },
  { fund: "TRF 1996", type: "GASB 68 Allocation Report", title: "TRF 1996 GASB 68 Allocation Report", year: "2024", url: "https://www.in.gov/inprs/files/INPRS_24-TRF-1996-GASB-68-Allocation-Report.pdf" },
  { fund: "TRF 1996", type: "GASB 68 Allocation Report", title: "TRF 1996 GASB 68 Allocation Report", year: "2023", url: "https://www.in.gov/inprs/files/INPRS-2023-TRF-Post-1996-GASB-68-Allocation-Report_Final.pdf" },
  { fund: "TRF 1996", type: "GASB 68 Allocation Report", title: "TRF 1996 GASB 68 Allocation Report", year: "2022", url: "https://www.in.gov/inprs/files/2022TRF1996GASB68AllocationReport.pdf" },
  { fund: "TRF 1996", type: "GASB 68 Allocation Report", title: "TRF 1996 GASB 68 Allocation Report", year: "2021", url: "https://www.in.gov/inprs/files/TRF19962021GASB68Report.pdf" },
  { fund: "TRF 1996", type: "GASB 68 Allocation Report", title: "TRF 1996 GASB 68 Allocation Report", year: "2020", url: "https://www.in.gov/inprs/files/2020GASB68Report_TRF96.pdf" },
  { fund: "TRF 1996", type: "GASB 68 Allocation Report", title: "TRF 1996 GASB 68 Allocation Report", year: "2019", url: "https://www.in.gov/inprs/files/TRF1996GASB68AllocationReport_FINAL.pdf" },
  { fund: "TRF 1996", type: "GASB 68 Allocation Report", title: "TRF 1996 GASB 68 Allocation Report", year: "2018", url: "https://www.in.gov/inprs/files/INPRS2018TRFFund1996GASB68Report.PDF" },
  { fund: "TRF 1996", type: "GASB 68 Allocation Report", title: "TRF 1996 GASB 68 Allocation Report", year: "2017", url: "https://www.in.gov/inprs/files/INPRS-2017-TRF-1996-GASB-68-Allocation-Report-FINAL.PDF" },
  { fund: "TRF 1996", type: "GASB 68 Allocation Report", title: "TRF 1996 GASB 68 Allocation Report", year: "2016", url: "https://www.in.gov/inprs/files/2016TRF1996GASB68Report.pdf" },
  { fund: "TRF 1996", type: "GASB 68 Allocation Report", title: "TRF 1996 GASB 68 Allocation Report", year: "2015", url: "https://www.in.gov/inprs/files/2015TRF1996GASB68Report.pdf" },
  { fund: "TRF 1996", type: "GASB 68 Allocation Report", title: "TRF 1996 GASB 68 Allocation Report", year: "2014", url: "https://www.in.gov/inprs/files/2014TRF1996GASB68Report.pdf" },
  { fund: "TRF 1996", type: "Unaudited Employer-Specific GASB 68 Schedule", title: "TRF 1996 Unaudited Employer-Specific GASB 68 Schedule", year: "2025", url: "https://www.in.gov/inprs/files/2025TRF1996UnauditedGASB68.pdf" },
  { fund: "TRF 1996", type: "Unaudited Employer-Specific GASB 68 Schedule", title: "TRF 1996 Unaudited Employer-Specific GASB 68 Schedule", year: "2024", url: "https://www.in.gov/inprs/files/2024TRF1996UnauditedEmployer-specificGASB68Schedule.pdf" },
  { fund: "TRF 1996", type: "Unaudited Employer-Specific GASB 68 Schedule", title: "TRF 1996 Unaudited Employer-Specific GASB 68 Schedule", year: "2023", url: "https://www.in.gov/inprs/files/TRF-1996-Unaudited-Employer-specific-GASB-68-Schedules.pdf" },
  { fund: "TRF 1996", type: "Unaudited Employer-Specific GASB 68 Schedule", title: "TRF 1996 Unaudited Employer-Specific GASB 68 Schedule", year: "2022", url: "https://www.in.gov/inprs/files/2022TRF1996UnauditedScheduleERAllocation.pdf" },
  { fund: "TRF 1996", type: "Unaudited Employer-Specific GASB 68 Schedule", title: "TRF 1996 Unaudited Employer-Specific GASB 68 Schedule", year: "2021", url: "https://www.in.gov/inprs/files/2021UnauditedEmployer-SpecificGASB68Schedules_TRF1996.pdf" },
  { fund: "TRF 1996", type: "Unaudited Employer-Specific GASB 68 Schedule", title: "TRF 1996 Unaudited Employer-Specific GASB 68 Schedule", year: "2020", url: "https://www.in.gov/inprs/files/2020UnauditedEmployer-specificGASB68Schedules_TRF96.pdf" },
  { fund: "TRF 1996", type: "Unaudited Employer-Specific GASB 68 Schedule", title: "TRF 1996 Unaudited Employer-Specific GASB 68 Schedule", year: "2019", url: "https://www.in.gov/inprs/files/TRF1996UnauditedEmployer-specificGASB68Schedule.pdf" },
  { fund: "TRF 1996", type: "Unaudited Employer-Specific GASB 68 Schedule", title: "TRF 1996 Unaudited Employer-Specific GASB 68 Schedule", year: "2018", url: "https://www.in.gov/inprs/files/TRF1996UnauditedEmployerSpecificGASB68Schedule.pdf" },

  // ── 1977 FUND ─────────────────────────────────────────────
  { fund: "1977 Fund", type: "Actuarial Valuation Report", title: "1977 Fund Actuarial Valuation Report", year: "2025", url: "https://www.in.gov/inprs/files/actuarial-valuation-reports/2025ActuarialValuation1977Fund.pdf" },
  { fund: "1977 Fund", type: "Actuarial Valuation Report", title: "1977 Fund Actuarial Valuation Report", year: "2024", url: "https://www.in.gov/inprs/files/2024ActuarialValuation_77Fund.pdf" },
  { fund: "1977 Fund", type: "Actuarial Valuation Report", title: "1977 Fund Actuarial Valuation Report", year: "2023", url: "https://www.in.gov/inprs/files/2023ActuarialValuation_77Fund.pdf" },
  { fund: "1977 Fund", type: "Actuarial Valuation Report", title: "1977 Fund Actuarial Valuation Report", year: "2022", url: "https://www.in.gov/inprs/files/2022ActuarialValuationReport_77Fund.pdf" },
  { fund: "1977 Fund", type: "Actuarial Valuation Report", title: "1977 Fund Actuarial Valuation Report", year: "2021", url: "https://www.in.gov/inprs/files/2021INPRSActuarialValuationRpt_77Fund.pdf" },
  { fund: "1977 Fund", type: "Actuarial Valuation Report", title: "1977 Fund Actuarial Valuation Report", year: "2020", url: "https://www.in.gov/inprs/files/2020ActuarialReport_77Fund.pdf" },
  { fund: "1977 Fund", type: "Actuarial Valuation Report", title: "1977 Fund Actuarial Valuation Report", year: "2019", url: "https://www.in.gov/inprs/files/2019ActuarialReport_77Fund.pdf" },
  { fund: "1977 Fund", type: "Actuarial Valuation Report", title: "1977 Fund Actuarial Valuation Report", year: "2018", url: "https://www.in.gov/inprs/files/2018-Actuarial-Report-77-FUND.PDF" },
  { fund: "1977 Fund", type: "Actuarial Valuation Report", title: "1977 Fund Actuarial Valuation Report", year: "2017", url: "https://www.in.gov/inprs/files/20171977FundActuarialReport.pdf" },
  { fund: "1977 Fund", type: "Actuarial Valuation Report", title: "1977 Fund Actuarial Valuation Report", year: "2016", url: "https://www.in.gov/inprs/files/20161977FundActuarialReport.pdf" },
  { fund: "1977 Fund", type: "Actuarial Valuation Report", title: "1977 Fund Actuarial Valuation Report", year: "2015", url: "https://www.in.gov/inprs/files/20151977FundActuarialValuationReport.pdf" },
  { fund: "1977 Fund", type: "Actuarial Valuation Report", title: "1977 Fund Actuarial Valuation Report", year: "2014", url: "https://www.in.gov/inprs/files/FY20141977FundActuarialValuationReport.pdf" },
  { fund: "1977 Fund", type: "Actuarial Valuation Report", title: "1977 Fund Actuarial Valuation Report", year: "2013", url: "https://www.in.gov/inprs/files/Actuarial_Valuation_Report_2013_1977_Fund_-_FINAL_12-17-13.pdf" },
  { fund: "1977 Fund", type: "GASB 68 Allocation Report", title: "1977 Fund GASB 68 Allocation Report", year: "2025", url: "https://www.in.gov/inprs/files/20251977-FundGASB68AllocationReport.pdf" },
  { fund: "1977 Fund", type: "GASB 68 Allocation Report", title: "1977 Fund GASB 68 Allocation Report", year: "2024", url: "https://www.in.gov/inprs/files/2024-1977FundGASB68AllocationReport.pdf" },
  { fund: "1977 Fund", type: "GASB 68 Allocation Report", title: "1977 Fund GASB 68 Allocation Report", year: "2023", url: "https://www.in.gov/inprs/files/INPRS-2023-1977-Fund-GASB-68-Allocation-Report_Final.pdf" },
  { fund: "1977 Fund", type: "GASB 68 Allocation Report", title: "1977 Fund GASB 68 Allocation Report", year: "2022", url: "https://www.in.gov/inprs/files/20221977FundGASB68AllocationReport.pdf" },
  { fund: "1977 Fund", type: "GASB 68 Allocation Report", title: "1977 Fund GASB 68 Allocation Report", year: "2021", url: "https://www.in.gov/inprs/files/1977Fund2021GASB68Report.pdf" },
  { fund: "1977 Fund", type: "GASB 68 Allocation Report", title: "1977 Fund GASB 68 Allocation Report", year: "2020", url: "https://www.in.gov/inprs/files/2020GASB68Report_1977Fund.pdf" },
  { fund: "1977 Fund", type: "GASB 68 Allocation Report", title: "1977 Fund GASB 68 Allocation Report", year: "2019", url: "https://www.in.gov/inprs/files/1977GASB68AllocationReport_FINAL.pdf" },
  { fund: "1977 Fund", type: "GASB 68 Allocation Report", title: "1977 Fund GASB 68 Allocation Report", year: "2018", url: "https://www.in.gov/inprs/files/INPRS20181977FundGASB68Report.PDF" },
  { fund: "1977 Fund", type: "GASB 68 Allocation Report", title: "1977 Fund GASB 68 Allocation Report", year: "2017", url: "https://www.in.gov/inprs/files/INPRS-2017-1977-Fund-GASB-68-Allocation-Report-FINAL.PDF" },
  { fund: "1977 Fund", type: "GASB 68 Allocation Report", title: "1977 Fund GASB 68 Allocation Report", year: "2016", url: "https://www.in.gov/inprs/files/20161977FundGASB68Report.pdf" },
  { fund: "1977 Fund", type: "GASB 68 Allocation Report", title: "1977 Fund GASB 68 Allocation Report", year: "2015", url: "https://www.in.gov/inprs/files/20151977FundGASB68Report.pdf" },
  { fund: "1977 Fund", type: "GASB 68 Allocation Report", title: "1977 Fund GASB 68 Allocation Report", year: "2014", url: "https://www.in.gov/inprs/files/20141977FundGASB68Report.pdf" },
  { fund: "1977 Fund", type: "Unaudited Employer-Specific GASB 68 Schedule", title: "1977 Fund Unaudited Employer-Specific GASB 68 Schedule", year: "2025", url: "https://www.in.gov/inprs/files/20251977FundUnauditedGASB68.pdf" },
  { fund: "1977 Fund", type: "Unaudited Employer-Specific GASB 68 Schedule", title: "1977 Fund Unaudited Employer-Specific GASB 68 Schedule", year: "2024", url: "https://www.in.gov/inprs/files/2024-77FundUnauditedEmployer-specificGASB68Schedule.pdf" },
  { fund: "1977 Fund", type: "Unaudited Employer-Specific GASB 68 Schedule", title: "1977 Fund Unaudited Employer-Specific GASB 68 Schedule", year: "2023", url: "https://www.in.gov/inprs/files/77-Fund-Unaudited-Employer-specific-GASB-68-Schedules.pdf" },
  { fund: "1977 Fund", type: "Unaudited Employer-Specific GASB 68 Schedule", title: "1977 Fund Unaudited Employer-Specific GASB 68 Schedule", year: "2022", url: "https://www.in.gov/inprs/files/2022_77FundUnauditedScheduleERAllocation.pdf" },
  { fund: "1977 Fund", type: "Unaudited Employer-Specific GASB 68 Schedule", title: "1977 Fund Unaudited Employer-Specific GASB 68 Schedule", year: "2021", url: "https://www.in.gov/inprs/files/2021UnauditedEmployer-SpecificGASB68Schedules_77Fund.pdf" },
  { fund: "1977 Fund", type: "Unaudited Employer-Specific GASB 68 Schedule", title: "1977 Fund Unaudited Employer-Specific GASB 68 Schedule", year: "2020", url: "https://www.in.gov/inprs/files/2020UnauditedEmployer-specificGASB68Schedules_77Fund.pdf" },
  { fund: "1977 Fund", type: "Unaudited Employer-Specific GASB 68 Schedule", title: "1977 Fund Unaudited Employer-Specific GASB 68 Schedule", year: "2019", url: "https://www.in.gov/inprs/files/1977FundUnauditedEmployer-specificGASB68Schedules.pdf" },
  { fund: "1977 Fund", type: "Unaudited Employer-Specific GASB 68 Schedule", title: "1977 Fund Unaudited Employer-Specific GASB 68 Schedule", year: "2018", url: "https://www.in.gov/inprs/files/1977FundUnauditedEmployerSpecificGASB68Schedule.pdf" },

  // ── JRS ───────────────────────────────────────────────────
  { fund: "JRS", type: "Actuarial Valuation Report", title: "JRS Actuarial Valuation Report", year: "2025", url: "https://www.in.gov/inprs/files/actuarial-valuation-reports/2025ActuarialValuationJRS.pdf" },
  { fund: "JRS", type: "Actuarial Valuation Report", title: "JRS Actuarial Valuation Report", year: "2024", url: "https://www.in.gov/inprs/files/2024ActuarialValuation_JRS.pdf" },
  { fund: "JRS", type: "Actuarial Valuation Report", title: "JRS Actuarial Valuation Report", year: "2023", url: "https://www.in.gov/inprs/files/2023ActuarialValuation_JRS.pdf" },
  { fund: "JRS", type: "Actuarial Valuation Report", title: "JRS Actuarial Valuation Report", year: "2022", url: "https://www.in.gov/inprs/files/2022ActuarialValuationReport_JRS.pdf" },
  { fund: "JRS", type: "Actuarial Valuation Report", title: "JRS Actuarial Valuation Report", year: "2021", url: "https://www.in.gov/inprs/files/2021INPRSActuarialValuationRpt_JRS.pdf" },
  { fund: "JRS", type: "Actuarial Valuation Report", title: "JRS Actuarial Valuation Report", year: "2020", url: "https://www.in.gov/inprs/files/2020ActuarialReport_JRS.pdf" },
  { fund: "JRS", type: "Actuarial Valuation Report", title: "JRS Actuarial Valuation Report", year: "2019", url: "https://www.in.gov/inprs/files/2019ActuarialReport_JRS.pdf" },
  { fund: "JRS", type: "Actuarial Valuation Report", title: "JRS Actuarial Valuation Report", year: "2018", url: "https://www.in.gov/inprs/files/2018-Actuarial-Report-JRS.PDF" },
  { fund: "JRS", type: "Actuarial Valuation Report", title: "JRS Actuarial Valuation Report", year: "2017", url: "https://www.in.gov/inprs/files/2017JRSActuarialReport.pdf" },
  { fund: "JRS", type: "Actuarial Valuation Report", title: "JRS Actuarial Valuation Report", year: "2016", url: "https://www.in.gov/inprs/files/2016JRSActuarialReport.pdf" },
  { fund: "JRS", type: "Actuarial Valuation Report", title: "JRS Actuarial Valuation Report", year: "2015", url: "https://www.in.gov/inprs/files/2015JudgesActuarialValuationReport.pdf" },
  { fund: "JRS", type: "Actuarial Valuation Report", title: "JRS Actuarial Valuation Report", year: "2014", url: "https://www.in.gov/inprs/files/FY2014JRSActuarialValuationReport.pdf" },
  { fund: "JRS", type: "Actuarial Valuation Report", title: "JRS Actuarial Valuation Report", year: "2013", url: "https://www.in.gov/inprs/files/Actuarial_Valuation_Report_2013_Judges_-_FINAL_12-17-13.pdf" },

  // ── LE DB ─────────────────────────────────────────────────
  { fund: "LE DB", type: "Actuarial Valuation Report", title: "LE DB Actuarial Valuation Report", year: "2025", url: "https://www.in.gov/inprs/files/actuarial-valuation-reports/2025ActuarialValuationLEDB.pdf" },
  { fund: "LE DB", type: "Actuarial Valuation Report", title: "LE DB Actuarial Valuation Report", year: "2024", url: "https://www.in.gov/inprs/files/2024ActuarialValuation_LEDB.pdf" },
  { fund: "LE DB", type: "Actuarial Valuation Report", title: "LE DB Actuarial Valuation Report", year: "2023", url: "https://www.in.gov/inprs/files/2023ActuarialValuation_LEDB.pdf" },
  { fund: "LE DB", type: "Actuarial Valuation Report", title: "LE DB Actuarial Valuation Report", year: "2022", url: "https://www.in.gov/inprs/files/2022ActuarialValuationReport_LEDB.pdf" },
  { fund: "LE DB", type: "Actuarial Valuation Report", title: "LE DB Actuarial Valuation Report", year: "2021", url: "https://www.in.gov/inprs/files/2021INPRSActuarialValuationRpt_LEDB.pdf" },
  { fund: "LE DB", type: "Actuarial Valuation Report", title: "LE DB Actuarial Valuation Report", year: "2020", url: "https://www.in.gov/inprs/files/2020ActuarialReport_LEDB.pdf" },
  { fund: "LE DB", type: "Actuarial Valuation Report", title: "LE DB Actuarial Valuation Report", year: "2019", url: "https://www.in.gov/inprs/files/2019ActuarialReport_LEDB.pdf" },
  { fund: "LE DB", type: "Actuarial Valuation Report", title: "LE DB Actuarial Valuation Report", year: "2018", url: "https://www.in.gov/inprs/files/2018-Actuarial-Report-LE-DB-Revised.pdf" },
  { fund: "LE DB", type: "Actuarial Valuation Report", title: "LE DB Actuarial Valuation Report", year: "2017", url: "https://www.in.gov/inprs/files/2017LEDBActuarialReport.pdf" },
  { fund: "LE DB", type: "Actuarial Valuation Report", title: "LE DB Actuarial Valuation Report", year: "2016", url: "https://www.in.gov/inprs/files/2016LegislatorsDBActuarialReport.pdf" },
  { fund: "LE DB", type: "Actuarial Valuation Report", title: "LE DB Actuarial Valuation Report", year: "2015", url: "https://www.in.gov/inprs/files/2015LEDBActuarialValuationReport.pdf" },
  { fund: "LE DB", type: "Actuarial Valuation Report", title: "LE DB Actuarial Valuation Report", year: "2014", url: "https://www.in.gov/inprs/files/FY2014LEDBPlanActuarialValuationReport.pdf" },
  { fund: "LE DB", type: "Actuarial Valuation Report", title: "LE DB Actuarial Valuation Report", year: "2013", url: "https://www.in.gov/inprs/files/Actuarial_Valuation_Report_2013_LEDB_-_FINAL_12-17-13.pdf" },

  // ── PARF ──────────────────────────────────────────────────
  { fund: "PARF", type: "Actuarial Valuation Report", title: "PARF Actuarial Valuation Report", year: "2025", url: "https://www.in.gov/inprs/files/actuarial-valuation-reports/2025ActuarialValuationPARF.pdf" },
  { fund: "PARF", type: "Actuarial Valuation Report", title: "PARF Actuarial Valuation Report", year: "2024", url: "https://www.in.gov/inprs/files/2024ActuarialValuation_PARF.pdf" },
  { fund: "PARF", type: "Actuarial Valuation Report", title: "PARF Actuarial Valuation Report", year: "2023", url: "https://www.in.gov/inprs/files/2023ActuarialValuation_PARF.pdf" },
  { fund: "PARF", type: "Actuarial Valuation Report", title: "PARF Actuarial Valuation Report", year: "2022", url: "https://www.in.gov/inprs/files/2022ActuarialValuationReport_PARF.pdf" },
  { fund: "PARF", type: "Actuarial Valuation Report", title: "PARF Actuarial Valuation Report", year: "2021", url: "https://www.in.gov/inprs/files/2021INPRSActuarialValuationRpt_PARF.pdf" },
  { fund: "PARF", type: "Actuarial Valuation Report", title: "PARF Actuarial Valuation Report", year: "2020", url: "https://www.in.gov/inprs/files/2020ActuarialReport_PARF.pdf" },
  { fund: "PARF", type: "Actuarial Valuation Report", title: "PARF Actuarial Valuation Report", year: "2019", url: "https://www.in.gov/inprs/files/2019ActuarialReport_PARF.pdf" },
  { fund: "PARF", type: "Actuarial Valuation Report", title: "PARF Actuarial Valuation Report", year: "2018", url: "https://www.in.gov/inprs/files/2018-Actuarial-Report-PARF.PDF" },
  { fund: "PARF", type: "Actuarial Valuation Report", title: "PARF Actuarial Valuation Report", year: "2017", url: "https://www.in.gov/inprs/files/2017PARFActuarialReport.pdf" },
  { fund: "PARF", type: "Actuarial Valuation Report", title: "PARF Actuarial Valuation Report", year: "2016", url: "https://www.in.gov/inprs/files/2016PARFActuarialReport.pdf" },
  { fund: "PARF", type: "Actuarial Valuation Report", title: "PARF Actuarial Valuation Report", year: "2015", url: "https://www.in.gov/inprs/files/2015PARFActuarialValuationReport.pdf" },
  { fund: "PARF", type: "Actuarial Valuation Report", title: "PARF Actuarial Valuation Report", year: "2014", url: "https://www.in.gov/inprs/files/FY2014PARFActuarialValuationReport.pdf" },
  { fund: "PARF", type: "Actuarial Valuation Report", title: "PARF Actuarial Valuation Report", year: "2013", url: "https://www.in.gov/inprs/files/Actuarial_Valuation_Report_2013_PARF_-_FINAL_12-17-13.pdf" },

  // ── EG&C ──────────────────────────────────────────────────
  { fund: "EG&C Fund", type: "Actuarial Valuation Report", title: "EG&C Fund Actuarial Valuation Report", year: "2025", url: "https://www.in.gov/inprs/files/actuarial-valuation-reports/2025ActuarialValuationEG-and-C.pdf" },
  { fund: "EG&C Fund", type: "Actuarial Valuation Report", title: "EG&C Fund Actuarial Valuation Report", year: "2024", url: "https://www.in.gov/inprs/files/2024ActuarialValuation_EG-and-C.pdf" },
  { fund: "EG&C Fund", type: "Actuarial Valuation Report", title: "EG&C Fund Actuarial Valuation Report", year: "2023", url: "https://www.in.gov/inprs/files/2023ActuarialValuation_EG-and-C.pdf" },
  { fund: "EG&C Fund", type: "Actuarial Valuation Report", title: "EG&C Fund Actuarial Valuation Report", year: "2022", url: "https://www.in.gov/inprs/files/2022ActuarialValuationReportEG-and-C.pdf" },
  { fund: "EG&C Fund", type: "Actuarial Valuation Report", title: "EG&C Fund Actuarial Valuation Report", year: "2021", url: "https://www.in.gov/inprs/files/2021INPRSActuarialValuationRpt_EGC.pdf" },
  { fund: "EG&C Fund", type: "Actuarial Valuation Report", title: "EG&C Fund Actuarial Valuation Report", year: "2020", url: "https://www.in.gov/inprs/files/2020ActuarialReport_EGC.pdf" },
  { fund: "EG&C Fund", type: "Actuarial Valuation Report", title: "EG&C Fund Actuarial Valuation Report", year: "2019", url: "https://www.in.gov/inprs/files/2019_Actuarial_Report_EGC.pdf" },
  { fund: "EG&C Fund", type: "Actuarial Valuation Report", title: "EG&C Fund Actuarial Valuation Report", year: "2018", url: "https://www.in.gov/inprs/files/2018-Actuarial-Report-Excise.PDF" },
  { fund: "EG&C Fund", type: "Actuarial Valuation Report", title: "EG&C Fund Actuarial Valuation Report", year: "2017", url: "https://www.in.gov/inprs/files/2017ExcisePlanActuarialReport.pdf" },
  { fund: "EG&C Fund", type: "Actuarial Valuation Report", title: "EG&C Fund Actuarial Valuation Report", year: "2016", url: "https://www.in.gov/inprs/files/2016ExciseActuarialReport.pdf" },
  { fund: "EG&C Fund", type: "Actuarial Valuation Report", title: "EG&C Fund Actuarial Valuation Report", year: "2015", url: "https://www.in.gov/inprs/files/2015ExciseActuarialValuationReport.pdf" },
  { fund: "EG&C Fund", type: "Actuarial Valuation Report", title: "EG&C Fund Actuarial Valuation Report", year: "2014", url: "https://www.in.gov/inprs/files/FY2014EGCPlanActuarialValuationReport.pdf" },
  { fund: "EG&C Fund", type: "Actuarial Valuation Report", title: "EG&C Fund Actuarial Valuation Report", year: "2013", url: "https://www.in.gov/inprs/files/Actuarial_Valuation_Report_2013_EGC_-_FINAL_12-17-13.pdf" },

  // ── LOCAL PUBLIC SAFETY PENSION RELIEF FUND ───────────────
  { fund: "Local Public Safety Pension Relief Fund", type: "LPS Pension Relief Fund Report", title: "LPS Pension Relief Fund Report", year: "2025", url: "https://www.in.gov/inprs/files/2025-Pension-Relief-Fund-Report.pdf" },
  { fund: "Local Public Safety Pension Relief Fund", type: "LPS Pension Relief Fund Report", title: "LPS Pension Relief Fund Report", year: "2024", url: "https://www.in.gov/inprs/files/2024Valuation_IndianaPensionReliefFund.pdf" },
  { fund: "Local Public Safety Pension Relief Fund", type: "LPS Pension Relief Fund Report", title: "LPS Pension Relief Fund Report", year: "2023", url: "https://www.in.gov/inprs/files/2023Valuation_IndianaPensionReliefFund.pdf" },
  { fund: "Local Public Safety Pension Relief Fund", type: "LPS Pension Relief Fund Report", title: "LPS Pension Relief Fund Report", year: "2022", url: "https://www.in.gov/inprs/files/2022Valuation_IndianaPensionReliefFund.pdf" },
  { fund: "Local Public Safety Pension Relief Fund", type: "LPS Pension Relief Fund Report", title: "LPS Pension Relief Fund Report", year: "2021", url: "https://www.in.gov/inprs/files/2021Valuation_IndianaPensionReliefFund.pdf" },
  { fund: "Local Public Safety Pension Relief Fund", type: "LPS Pension Relief Fund Report", title: "LPS Pension Relief Fund Report", year: "2020", url: "https://www.in.gov/inprs/files/2020ValuationIndianaPensionReliefFund.pdf" },
  { fund: "Local Public Safety Pension Relief Fund", type: "LPS Pension Relief Fund Report", title: "LPS Pension Relief Fund Report", year: "2019", url: "https://www.in.gov/inprs/files/010112019Valuation_LPSPRF.pdf" },
  { fund: "Local Public Safety Pension Relief Fund", type: "LPS Pension Relief Fund Report", title: "LPS Pension Relief Fund Report", year: "2018", url: "https://www.in.gov/inprs/files/2018_Valuation_-_Indiana_Pension_Relief_Fund_-_Final1.pdf" },
  { fund: "Local Public Safety Pension Relief Fund", type: "LPS Pension Relief Fund Report", title: "LPS Pension Relief Fund Report", year: "2017", url: "https://www.in.gov/inprs/files/Pension_Relief_Fund_Report_-_01_01_20171.pdf" },
  { fund: "Local Public Safety Pension Relief Fund", type: "LPS Pension Relief Fund Report", title: "LPS Pension Relief Fund Report", year: "2016", url: "https://www.in.gov/inprs/files/Pension_Relief_Fund_Report_-_01_01_20161.pdf" },
  { fund: "Local Public Safety Pension Relief Fund", type: "LPS Pension Relief Fund Report", title: "LPS Pension Relief Fund Report", year: "2015", url: "https://www.in.gov/inprs/files/Pension_Relief_Fund_Report_-_01_01_20151.pdf" },
  { fund: "Local Public Safety Pension Relief Fund", type: "LPS Pension Relief Fund Report", title: "LPS Pension Relief Fund Report", year: "2014", url: "https://www.in.gov/inprs/files/Pension_Relief_Fund_Report_-_01_01_20141.pdf" },
  { fund: "Local Public Safety Pension Relief Fund", type: "LPS Pension Relief Fund Report", title: "LPS Pension Relief Fund Report", year: "2013", url: "https://www.in.gov/inprs/files/2013_PensionReliefReport.pdf" },

  // ── OPEB ──────────────────────────────────────────────────
  { fund: "Other Post-Employment Benefits (OPEB)", type: "OPEB Report", title: "State Personnel OPEB Report",      year: "2025", url: "https://www.in.gov/inprs/files/GASB74-75ReportState-Personnel.pdf" },
  { fund: "Other Post-Employment Benefits (OPEB)", type: "OPEB Report", title: "Indiana State Police OPEB Report", year: "2025", url: "https://www.in.gov/inprs/files/GASB-74-75-ReportISP.pdf" },
  { fund: "Other Post-Employment Benefits (OPEB)", type: "OPEB Report", title: "Excise Fund OPEB Report",          year: "2025", url: "https://www.in.gov/inprs/files/GASB74-75ReportCEPDNR.pdf" },
  { fund: "Other Post-Employment Benefits (OPEB)", type: "OPEB Report", title: "Legislature OPEB Report",          year: "2025", url: "https://www.in.gov/inprs/files/GASB74-75ReportLegislature.pdf" },
  { fund: "Other Post-Employment Benefits (OPEB)", type: "OPEB Report", title: "State Personnel OPEB Report",      year: "2024", url: "https://www.in.gov/inprs/files/2024ActuarialValuationReportSOI_OPEB.pdf" },
  { fund: "Other Post-Employment Benefits (OPEB)", type: "OPEB Report", title: "Indiana State Police OPEB Report", year: "2024", url: "https://www.in.gov/inprs/files/2024ActuarialValuationReportStatePolice_OPEB.pdf" },
  { fund: "Other Post-Employment Benefits (OPEB)", type: "OPEB Report", title: "Excise Fund OPEB Report",          year: "2024", url: "https://www.in.gov/inprs/files/2024ActuarialValuationReportEGC_OPEB.pdf" },
  { fund: "Other Post-Employment Benefits (OPEB)", type: "OPEB Report", title: "Legislature OPEB Report",          year: "2024", url: "https://www.in.gov/inprs/files/2024ActuarialValuationReportLegislature_OPEB.pdf" },
  { fund: "Other Post-Employment Benefits (OPEB)", type: "OPEB Report", title: "State Personnel OPEB Report",      year: "2023", url: "https://www.in.gov/inprs/files/2023ActuarialValuationReportSOI_OPEB.pdf" },
  { fund: "Other Post-Employment Benefits (OPEB)", type: "OPEB Report", title: "Indiana State Police OPEB Report", year: "2023", url: "https://www.in.gov/inprs/files/2023ActuarialValuationReportStatePolice_OPEB.pdf" },
  { fund: "Other Post-Employment Benefits (OPEB)", type: "OPEB Report", title: "Excise Fund OPEB Report",          year: "2023", url: "https://www.in.gov/inprs/files/2023ActuarialValuationReportEGC_OPEB.pdf" },
  { fund: "Other Post-Employment Benefits (OPEB)", type: "OPEB Report", title: "Legislature OPEB Report",          year: "2023", url: "https://www.in.gov/inprs/files/2023ActuarialValuationReportLegislature_OPEB.pdf" },
  { fund: "Other Post-Employment Benefits (OPEB)", type: "OPEB Report", title: "State Personnel OPEB Report",      year: "2022", url: "https://www.in.gov/inprs/files/2022ActuarialValuationReportSOI_OPEB.pdf" },
  { fund: "Other Post-Employment Benefits (OPEB)", type: "OPEB Report", title: "Indiana State Police OPEB Report", year: "2022", url: "https://www.in.gov/inprs/files/2022ActuarialValuationReportStatePolice_OPEB.pdf" },
  { fund: "Other Post-Employment Benefits (OPEB)", type: "OPEB Report", title: "Excise Fund OPEB Report",          year: "2022", url: "https://www.in.gov/inprs/files/2022ActuarialValuationReportEGC_OPEB.pdf" },
  { fund: "Other Post-Employment Benefits (OPEB)", type: "OPEB Report", title: "Legislature OPEB Report",          year: "2022", url: "https://www.in.gov/inprs/files/2022ActuarialValuationReportLegislature_OPEB.pdf" },
  { fund: "Other Post-Employment Benefits (OPEB)", type: "OPEB Report", title: "OPEB GASB 74-75 Report",           year: "2021", url: "https://www.in.gov/inprs/files/2021GASB74-75Report.pdf" },
  { fund: "Other Post-Employment Benefits (OPEB)", type: "OPEB Report", title: "OPEB GASB 74-75 Report",           year: "2020", url: "https://www.in.gov/inprs/files/2020GASB74-75Report.pdf" },
  { fund: "Other Post-Employment Benefits (OPEB)", type: "OPEB Report", title: "OPEB GASB 74-75 Report",           year: "2019", url: "https://www.in.gov/inprs/files/2019GASB74-75Report.pdf" },
  { fund: "Other Post-Employment Benefits (OPEB)", type: "OPEB Report", title: "OPEB GASB 74-75 Report",           year: "2018", url: "https://www.in.gov/inprs/files/2018GASB74-75Report.pdf" },
  { fund: "Other Post-Employment Benefits (OPEB)", type: "OPEB Report", title: "OPEB GASB 74-75 Report",           year: "2017", url: "https://www.in.gov/inprs/files/2017GASB74-75Report.pdf" },
  { fund: "Other Post-Employment Benefits (OPEB)", type: "OPEB Report", title: "OPEB GASB 45 Report",              year: "2017", url: "https://www.in.gov/inprs/files/2017GASB45Report.pdf" },

  // ── OTHER ACTUARIAL ───────────────────────────────────────
  { fund: "Other", type: "Other Actuarial Report", title: "Actuarial Risk Analysis Report",    year: "2024",      url: "https://www.in.gov/inprs/files/ActuarialRiskAnalysisReport_2024.pdf" },
  { fund: "Other", type: "Other Actuarial Report", title: "Actuarial Experience Study Report", year: "2019–2024", url: "https://www.in.gov/inprs/files/INPRS-2019-2024-Experience-Study.pdf" },
  { fund: "Other", type: "Other Actuarial Report", title: "Actuarial Experience Study Report", year: "2020",      url: "https://www.in.gov/inprs/files/INPRSExperienceStudy_2020.pdf" },
  { fund: "Other", type: "Other Actuarial Report", title: "Actuarial Risk Analysis Report",    year: "2019",      url: "https://www.in.gov/inprs/files/ActuarialRiskAnalysisReport_2019.pdf" },
];


const typeSel  = document.getElementById('type-filter');
const fundSel  = document.getElementById('fund-filter');
const yearSel  = document.getElementById('year-filter');
const tbody    = document.getElementById('table-body');
const countEl  = document.getElementById('result-count');
const resetBtn = document.getElementById('reset-btn');

function render() {
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
    tbody.innerHTML = '<div class="empty-state">No publications match the selected filters.</div>';
  } else {
    filtered.forEach(p => {
      const row = document.createElement('div');
      row.className = 'table-row';
      row.innerHTML = `
        <div class="table-cell col-title">
          <p class="bodyS">${p.title}</p>
        </div>
        <div class="table-cell col-fund">
          <p class="bodyS" style="color:var(--text-label)">${p.fund}</p>
        </div>
        <div class="table-cell col-year">
          <p class="bodyS" style="color:var(--text-label)">${p.year}</p>
        </div>
        <div class="table-cell col-doc">
          <a class="doc-link" href="${p.url}" target="_blank" rel="noopener">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            View
          </a>
        </div>
      `;
      tbody.appendChild(row);
    });
  }

  countEl.innerHTML = `Showing <strong>${filtered.length}</strong> of ${PUBS.length} publications`;
}

typeSel.addEventListener('change', render);
fundSel.addEventListener('change', render);
yearSel.addEventListener('change', render);

resetBtn.addEventListener('click', () => {
  typeSel.value = '';
  fundSel.value = '';
  yearSel.value = '';
  render();
});

// Read URL params and pre-select filters
const params   = new URLSearchParams(window.location.search);
const paramType = params.get('type');
const paramFund = params.get('fund');
const paramYear = params.get('year');

if (paramType && [...typeSel.options].some(o => o.value === paramType)) typeSel.value = paramType;
if (paramFund && [...fundSel.options].some(o => o.value === paramFund)) fundSel.value = paramFund;
if (paramYear && [...yearSel.options].some(o => o.value === paramYear)) yearSel.value = paramYear;

render();