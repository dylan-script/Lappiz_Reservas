setTimeout(() => {
  // Método encargado de retornar el id de la vista del formulario
  debugger
  console.clear()
  var appViewId = getAppViewId();
  console.log(appViewId);
  if (appViewId == 'da587085-4398-4565-96e7-19114eba4a9b') {
    alert('Bienvenid@s')
    //
    // Método encargado de dar visibilidad a una sección específica
    // True para mostrar - False para ocultar
    var registerSection = '9015e84f-43a4-4f4c-844a-c1ce3679be59'
    var searchSection = '31acd8df-fe41-405e-94ad-f4e0c49f50b5'
    visibilitySection(registerSection, true);
    visibilitySection(searchSection, false);



    $("#register-btn").click(function () {
      debugger
      visibilitySection(registerSection, true);
      visibilitySection(searchSection, false);
    });

    $("#search-btn").click(function () {
      debugger
      visibilitySection(registerSection, false);
      visibilitySection(searchSection, true);
    });
  }
}, 1000);