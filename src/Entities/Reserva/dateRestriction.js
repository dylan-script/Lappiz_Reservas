debugger;
$('body > app-root > app-base > div > div > div > div > app-forms > div > div > div > div > div.header-section > div.title-section').css('margin-left', '30%')
setTimeout(function () {
    // Método encargado de retornar el id de la vista del formulario
    var appViewId = getAppViewId();
    console.log(appViewId);
    if (appViewId == 'ca963172-6540-44c9-b808-2a4a4a05d43f' && sessionStorage.rolesId == '049c3968-0c3c-45e7-8798-63aed0be976a') {
        let query = `SELECT Nombre, Apellido, Direccion, Telefono, Celular, Pais, Ciudad, TipodeIdentificacin, Identificacion FROM Reservas_Lappiz_Cliente WHERE
        UserFK = '${JSON.parse(sessionStorage.LappizUser).Id}'`

        execQuery(query).then(function (response) {
            var dataResult = response[0];
            //imprimir resultado de la consulta
            sessionStorage.Nombre = dataResult[0].Nombre;
            console.log(sessionStorage.Nombre);
            sessionStorage.Apellido = dataResult[0].Apellido;
            console.log(sessionStorage.Apellido);
            sessionStorage.Direccion = dataResult[0].Direccion;
            console.log(sessionStorage.Direccion);
            sessionStorage.Telefono = dataResult[0].Telefono;
            console.log(sessionStorage.Telefono);
            sessionStorage.Celular = dataResult[0].Celular;
            console.log(sessionStorage.Celular);
            sessionStorage.Pais = dataResult[0].Pais;
            console.log(sessionStorage.Pais);
            sessionStorage.Ciudad = dataResult[0].Ciudad;
            console.log(sessionStorage.Ciudad);
            sessionStorage.TipodeIdentificacin = dataResult[0].TipodeIdentificacin;
            console.log(sessionStorage.TipodeIdentificacin);
            sessionStorage.Identificacion = dataResult[0].Identificacion;
            console.log(sessionStorage.Identificacion);


            console.log(dataResult[0]);
        }, function (error) {
            console.log(error);
        });
    }
    $("#128ac82a-8845-4ad1-8dea-4d66a66a609c").dxDateBox({
        'type': "date",
        'min': new Date()
    });
}, 1000);