setTimeout(() => {
  // Método encargado de retornar el id de la vista del formulario
  debugger
  console.clear()
  var appViewId = getAppViewId();
  console.log(appViewId);
  if (appViewId == 'da587085-4398-4565-96e7-19114eba4a9b') {
    var registerSection = '9015e84f-43a4-4f4c-844a-c1ce3679be59'
    var searchSection = '31acd8df-fe41-405e-94ad-f4e0c49f50b5'
    var campoId = 'c8cee7d9-4907-4c16-bf4a-566a300bb92f'
    visibilitySection(registerSection, false);
    visibilitySection(searchSection, false);
    if (e.isNew) {
    alert('Bienvenid@s')

      requireField(campoId, true);



      $(".register").click(function () {
        debugger
        visibilitySection(registerSection, true);
        visibilitySection(searchSection, false);
        sessionStorage.Option = 0
        console.log(sessionStorage.Option)
      });

      $(".search").click(function () {
        debugger
        visibilitySection(registerSection, false);
        visibilitySection(searchSection, true);
        sessionStorage.Option = 1
        console.log(sessionStorage.Option)
      });
    }else {
      var viewSection = '0977cfba-62cf-49cf-87eb-daa8f7286b10';
      visibilitySection(viewSection, false);
      visibilitySection(registerSection, true);
    }
  }
}, 3000);