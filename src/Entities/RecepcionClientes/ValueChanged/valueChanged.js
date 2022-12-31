debugger
var fieldId = '8890e71e-d583-42c4-aca8-30edd104f10e';
var result = getFieldValue(fieldId);
console.log(result);
if (!result) {
  $('#btnEnt').hide();
  visibilityEnterpriseSection(false, false)
  sessionStorage.enterpriseQuery = requireFields(-1, 'enterprise');
  console.log(sessionStorage.enterpriseQuery)
} else {
  $('#btnEnt').show();
  visibilityEnterpriseSection(false, true);
  sessionStorage.enterpriseQuery = requireFields(1, 'enterprise');
  console.log(sessionStorage.enterpriseQuery)
}