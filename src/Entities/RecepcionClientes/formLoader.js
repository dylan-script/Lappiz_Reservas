setTimeout(() => {
  // Método encargado de retornar el id de la vista del formulario
  debugger
  console.clear()
  var appViewId = getAppViewId();
  console.log(appViewId);
  if (appViewId == 'da587085-4398-4565-96e7-19114eba4a9b') {
    var campoId = 'c8cee7d9-4907-4c16-bf4a-566a300bb92f'
    visibilityParams(false, false, false)

    if (e.isNew) {
      alert('Bienvenid@s')

      //requireField(campoId, true);
      $(".client").click(function () {
        debugger
        changeType('Natural')
        displayParams('none', 'inline', 'inline', 'inline')
      });

      $(".enterprise").click(function () {
        debugger
        changeType('Juridica')
        displayParams('inline', 'none', 'inline', 'inline')
      });

      $("#search-btn").click(function () {
        debugger
        if (sessionStorage.Type == 'Juridica') {
          visibilityParams(false, false, true)
        }
        if (sessionStorage.Type == 'Natural') {
          visibilityParams(false, true, false)
        }
        changeOption(1)
        requireFields(0)
        visibilityFields()
      });

      $("#register-btn").click(function () {
        debugger
        visibilityParams(true, false, false)
        visibilityFields()
        changeOption(0)
        requireFields(1)
      });

    } else {
      var viewSection = '0977cfba-62cf-49cf-87eb-daa8f7286b10';
      visibilitySection(viewSection, false);
      visibilitySection(registerSection, true);
    }
  }
  /**
   * 
   * @param {*} dClient: Display del botón Cliente 
   * @param {*} dEnterprise: Display del botón Empresa  
   * @param {*} dS: Display del botón Buscar  
   * @param {*} dR: Display del botón Registrar
   */
  function displayParams(dClient, dEnterprise, dS, dR) {
    debugger
    textParams()
    visibilityParams(false, false, false)
    changeOption(-1)
    requireFields(0)
    $('.client').css("display", dClient)
    $('.enterprise').css("display", dEnterprise)
    $('#search-btn').css("display", dS)
    $('#register-btn').css("display", dR)
  }

  /**
   * Función encargada de cambiarle el texto a los dos principales botones: Cliente y Empresa 
   */
  function textParams() {
    $(".enterprise").text("Cambiar a Empresa");
    $(".client").text("Cambiar a Cliente");

    if (sessionStorage.Type == 'Natural') {
      $("#register-btn").text("Registrar Cliente");
      $("#search-btn").text("Buscar Cliente");
    }
    if (sessionStorage.Type == 'Juridica') {
      $("#register-btn").text("Registrar Empresa");
      $("#search-btn").text("Buscar Empresa");
    }
  }
  /**
   * Función encargada de darle visibilidad a las siguientes secciones
   * @param {*} register : Sección de Registro  
   * @param {*} searchC : Sección de Búsqueda del Cliente
   * @param {*} searchE : Sección de Búsqueda de la Empresa
   */
  function visibilityParams(register, searchC, searchE) {
    var registerSection = '9015e84f-43a4-4f4c-844a-c1ce3679be59'
    var searchClient = '31acd8df-fe41-405e-94ad-f4e0c49f50b5'
    var searchEnterprise = '1d799903-7520-43eb-880f-1eac85e567e9'
    visibilitySection(registerSection, register);
    visibilitySection(searchClient, searchC);
    visibilitySection(searchEnterprise, searchE);
  }

  /**
   * 
   * @param {*} type : Tipo de Persona
   * Natural : Cliente
   * Juridica : Empresa 
   */
  function changeType(type) {
    sessionStorage.Type = type
    console.log(sessionStorage.Type)
  }

  /**
   * 
   * @param {*} option: Tipo de transacción a realizar.
   * 0 : Registro
   * 1 : Búsqueda
   */
  function changeOption(option) {
    sessionStorage.Option = option
    console.log(sessionStorage.Option)
  }

  /**
   * Función encargada de darle obligatoriedad a determinados campos
   * @param {*} option : 1 para proceder con los campos obligatorios, 0 para indicar que todos los campos no son obligatorios por defecto
   */
  function requireFields(option) {
    var Numero_id = "995e4748-1fe8-43ac-9cbc-d32d60172da3"
    var Correo_id = "c8cee7d9-4907-4c16-bf4a-566a300bb92f"
    var Empresa_id = "86aea3a8-45df-4e45-bc4f-c6421a1b25d9"
    var Tipo_identificacion_id = "b81ec10e-c213-483a-9ecf-64137479bcd5"
    var Nombre_id = "373fc4c4-47bc-4797-99c7-2f8d941042f9"
    var Apellido_id = "12af9eea-52a4-4887-ab39-6cdb037bb4a6"
    if (option == 1) {
      requireField(Numero_id, true)
      requireField(Correo_id, true)
      if (sessionStorage.Type == 'Juridica') {
        requireField(Empresa_id, true)
        requireField(Tipo_identificacion_id, false)
        requireField(Nombre_id, false)
        requireField(Apellido_id, false)

      }

      if (sessionStorage.Type == 'Natural') {
        requireField(Empresa_id, false)

        requireField(Tipo_identificacion_id, true)
        requireField(Nombre_id, true)
        requireField(Apellido_id, true)

      }
    } else {
      requireField(Numero_id, false)
      requireField(Correo_id, false)
      requireField(Empresa_id, false)
      requireField(Tipo_identificacion_id, false)
      requireField(Nombre_id, false)
      requireField(Apellido_id, false)

    }

  }

  /**
   * Función encargada de darle visibilidad a determinados campos
   */
  function visibilityFields() {
    var Empresa_id = "86aea3a8-45df-4e45-bc4f-c6421a1b25d9"
    var Tipo_identificacion_id = "b81ec10e-c213-483a-9ecf-64137479bcd5"
    var Nombre_id = "373fc4c4-47bc-4797-99c7-2f8d941042f9"
    var Apellido_id = "12af9eea-52a4-4887-ab39-6cdb037bb4a6"

    if (sessionStorage.Type == 'Juridica') {
      visibilityField(Empresa_id, true)
      visibilityField(Tipo_identificacion_id, false)
      visibilityField(Nombre_id, false)
      visibilityField(Apellido_id, false)
    }

    if (sessionStorage.Type == 'Natural') {
      visibilityField(Empresa_id, false)

      visibilityField(Tipo_identificacion_id, true)
      visibilityField(Nombre_id, true)
      visibilityField(Apellido_id, true)

    }
  }

}, 3000);