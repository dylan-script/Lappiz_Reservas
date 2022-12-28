setTimeout(() => {
  // Método encargado de retornar el id de la vista del formulario
  debugger
  console.clear()
  var appViewId = getAppViewId();
  console.log(appViewId);
  if (appViewId == 'da587085-4398-4565-96e7-19114eba4a9b') {
    sessionStorage.EstadoHabitacion = 'Disponible';
    console.log(sessionStorage.EstadoHabitacion);
    visibilityClientSection(false, true);
    sessionStorage.clientQuery = requireFields(1, 'client');
    console.log(sessionStorage.clientQuery);
    sessionStorage.enterpriseQuery = 'None';
    console.log(sessionStorage.enterpriseQuery);
    visibilityEnterpriseSection(false, false);
    $('#btnEnt').hide();
    if (e.isNew) {
      $("body > app-root > app-base > div > div > div > div > app-forms > div > div > div > div > form > ul > li:nth-child(4)").hide()
      //requireField(campoId, true);
      $("#search-client-btn").click(function () {
        debugger
        console.clear()
        visibilityClientSection(false, true)
        sessionStorage.clientQuery = requireFields(1, 'client');
        console.log(sessionStorage.clientQuery)
      });

      $("#register-client-btn").click(function () {
        debugger
        console.clear()
        visibilityClientSection(true, false)
        sessionStorage.clientQuery = requireFields(0, 'client');
        console.log(sessionStorage.clientQuery)
      });

      $("#search-enterprise-btn").click(function () {
        debugger
        console.clear()
        visibilityEnterpriseSection(false, true)
        sessionStorage.enterpriseQuery = requireFields(1, 'enterprise');
        console.log(sessionStorage.enterpriseQuery)
      });

      $("#register-enterprise-btn").click(function () {
        debugger
        console.clear()
        visibilityEnterpriseSection(true, false)
        sessionStorage.enterpriseQuery = requireFields(0, 'enterprise');
        console.log(sessionStorage.enterpriseQuery)
      });
    } else {
      visibilityEnterpriseSection(true, false)
      if(e.ClienteFK == NULL){
        debugger
        console.clear()
        visibilityClientSection(true, false)
        sessionStorage.clientQuery = requireFields(0, 'client');
        console.log(sessionStorage.clientQuery)
      }else{
        debugger
        console.clear()
        visibilityClientSection(false, true)
        sessionStorage.clientQuery = requireFields(1, 'client');
        console.log(sessionStorage.clientQuery)
      }
    }
  }
  /**
   * Función encargada de darle visibilidad a las siguientes secciones
   * @param {*} registerC : Sección de Registro del Cliente  
   * @param {*} searchC : Sección de Búsqueda del Cliente
   */
  function visibilityClientSection(registerC, searchC) {
    let registerClient = '9015e84f-43a4-4f4c-844a-c1ce3679be59'
    let searchClient = '31acd8df-fe41-405e-94ad-f4e0c49f50b5'
    visibilitySection(registerClient, registerC);
    visibilitySection(searchClient, searchC);
  }
}, 3000);