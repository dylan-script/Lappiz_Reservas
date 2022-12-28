setTimeout(() => {
  debugger
  console.log(e.dataItem)

  if (sessionStorage.clientQuery == 'register') {
    debugger
    update = e.dataItem.Identificacion;
    let clientQuery = `INSERT INTO Reservas_Lappiz_Cliente 
      (TipodeIdentificacin,
      Identificacion,
      Nombre,
      Apellido,
      Direccion,
      Geolocalizacion,
      CorreoElectronico,
      Telefono) 
      VALUES ('${e.dataItem.TipodeIdentificacin}', 
              '${e.dataItem.Identificacion}', 
              '${e.dataItem.Nombre}',
              '${e.dataItem.Apellido}',
              '${e.dataItem.Direccion}',
              '${e.dataItem.Geolocalizacion}',
              '${e.dataItem.CorreoElectronico}',
              '${e.dataItem.Telefono}')`;
    execQuery(clientQuery).then(function (response) {
      debugger
      var dataResult = response[0];
      //imprimir resultado de la consulta
      console.log(dataResult);
      message = `Se registró el huésped: ${e.dataItem.Nombre} ${e.dataItem.Apellido} con número de Identificación ${e.dataItem.Identificacion} en la base de datos `;

    }, function (error) {
      console.log(error);
    });
    let getClientQuery = `SELECT Id FROM Reservas_Lappiz_RecepcionClientes WHERE Identificacion = '${e.dataItem.Identificacion}'`;
    execQuery(getClientQuery).then(function (response) {
      debugger
      var dataResult = response[0];
      //imprimir resultado de la consulta
      console.log(dataResult);
      sessionStorage.Id = dataResult[0].Id;
      console.log(sessionStorage.Id)
    }, function (error) {
      console.log(error);
    });
    execQuery(setForeignKeyClientQuery).then(function (response) {
      debugger
      var dataResult = response[0];
      //imprimir resultado de la consulta
      console.log(dataResult);
      sessionStorage.Id = dataResult[0].Id;
      console.log(sessionStorage.Id)
    }, function (error) {
      console.log(error);
    });
    let setForeignKeyClientQuery = `UPDATE Reservas_Lappiz_RecepcionClientes SET ClienteFK = '${sessionStorage.Id}' WHERE Id = '${e.dataItem.Id}'`;
  }

  if (sessionStorage.clientQuery == 'search') {
    update = sessionStorage.Identificacion;

    let searchClientQuery = `UPDATE Reservas_Lappiz_RecepcionClientes
      SET Nombre = '${sessionStorage.Nombre}', 
      Apellido = '${sessionStorage.Apellido}', 
      Telefono = '${sessionStorage.Telefono}', 
      CorreoElectronico = '${sessionStorage.CorreoElectronico}',
      Identificacion = '${sessionStorage.Identificacion}', 
      Geolocalizacion = '${sessionStorage.Geolocalizacion}', 
      Direccion = '${sessionStorage.Direccion}',
      TipodeIdentificacin = '${sessionStorage.TipodeIdentificacin}'
      WHERE Id = '${e.dataItem.Id}'`;
    execQuery(searchClientQuery).then(function (response) {
      debugger
      var dataResult = response[0];
      //imprimir resultado de la consulta
      console.log(dataResult);
    }, function (error) {
      console.log(error);
    });
    message = `Recepción registrada al huésped: ${sessionStorage.Nombre} ${sessionStorage.Apellido}`;
  }

  if (sessionStorage.enterpriseQuery != 'None') {
    if (sessionStorage.enterpriseQuery == 'register') {
      debugger
      let enterpriseQuery = `INSERT INTO Reservas_Lappiz_Empresas 
      (RazonSocial,Direccion, Telefono, Geolocalizacion, Nit, CorreoElectronico) 
      VALUES ('${e.dataItem.RazonSocial}',
              '${e.dataItem.Direccion}',
              '${e.dataItem.Telefono}',
              '${e.dataItem.Geolocalizacion}',
              '${e.dataItem.Nit}', 
              '${e.dataItem.CorreoElectronico}')`;
      execQuery(enterpriseQuery).then(function (response) {
        debugger
        var dataResult = response[0];
        //imprimir resultado de la consulta
        console.log(dataResult);
      }, function (error) {
        console.log(error);
      });

      message = `Se registró la empresa: ${e.dataItem.Empresa} en la base de datos`;

      let getEnterpriseQuery = `SELECT Id FROM Reservas_Lappiz_Empresas WHERE Nit = '${e.dataItem.Nit}'`;
    execQuery(getEnterpriseQuery).then(function (response) {
      debugger
      var dataResult = response[0];
      //imprimir resultado de la consulta
      console.log(dataResult);
      sessionStorage.Nit = dataResult[0].Nit;
      console.log(sessionStorage.Nit)
    }, function (error) {
      console.log(error);
    });
    execQuery(setForeignKeyEntQuery).then(function (response) {
      debugger
      var dataResult = response[0];
      //imprimir resultado de la consulta
      console.log(dataResult);
      sessionStorage.Id = dataResult[0].Id;
      console.log(sessionStorage.Id)
    }, function (error) {
      console.log(error);
    });
    let setForeignKeyEntQuery = `UPDATE Reservas_Lappiz_RecepcionClientes SET EmpresasFk = '${sessionStorage.Nit}' WHERE Id = '${e.dataItem.Nit}'`;
    }
    if (sessionStorage.enterpriseQuery == 'search') {
      debugger
      let searchEnterpriseQuery = `UPDATE Reservas_Lappiz_Empresas SET 
      RazonSocial = '${e.dataItem.RazonSocial}',
      Direccion = '${e.dataItem.Direccion}',
      Telefono = '${e.dataItem.Telefono}',
      Geolocalizacion = '${e.dataItem.Geolocalizacion}',
      Nit = '${e.dataItem.Nit}',
      CorreoElectronico = '${e.dataItem.CorreoElectronico}' 
      WHERE Id = '${e.dataItem.EmpresasFk}'`;
      execQuery(searchEnterpriseQuery).then(function (response) {
        debugger
        var dataResult = response[0];
        //imprimir resultado de la consulta
        console.log(dataResult);
      }, function (error) {
        console.log(error);
      });
      
      message = `Se registró la recepción a la empresa: ${e.dataItem.Empresa}`;
    }
  }
}, 1000);