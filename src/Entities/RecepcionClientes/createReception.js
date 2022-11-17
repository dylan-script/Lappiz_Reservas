setTimeout(() => {
  debugger
  console.log(e.dataItem)
  var fi = new Date(e.dataItem.FechaRecepcion)
  console.log(fi.getTime())

  var ff = new Date(e.dataItem.Fechadeida)
  console.log(ff.getTime())
  var email = e.dataItem.CorreoElectronico;
  var message;
  var subject = 'Recepción';
  var text = 'Recpción';
  var HTML = `<h1>Recepción confirmada de la fecha ${e.dataItem.FechaRecepcion} a la fecha ${e.dataItem.Fechadeida}</h1>`;
  var attachments = [
  ]
  var cc = [""]
  var bcc = [""]
  var update;
  if(sessionStorage.Type == 'Juridica'){
    if(sessionStorage.Option == '0'){
      
    }
    if(sessionStorage.Option == '1'){
      
    }
  }
  if (sessionStorage.Option == '0') {
    update = e.dataItem.Identificacion;
    var StringQuery = `INSERT INTO Reservas_Lappiz_Cliente 
  (Nombre,Apellido,Direccion, Telefono, Celular, Pais, Ciudad, TipodeIdentificacin, Identificacion, TipoPersona, Empresa, CorreoElectronico) 
  VALUES ('${e.dataItem.Nombre}',
          '${e.dataItem.Apellido}',
          '${e.dataItem.Direccion}',
          '${e.dataItem.Telefono}',
          '${e.dataItem.Celular}',
          '${e.dataItem.Pais}',
          '${e.dataItem.Ciudad}', 
          '${e.dataItem.TipodeIdentificacin}', 
          '${e.dataItem.Identificacion}', 
          '${e.dataItem.TipoPersona}',
          '${e.dataItem.Empresa}',
          '${e.dataItem.CorreoElectronico}')`;
    execQuery(StringQuery).then(function (response) {
      var dataResult = response[0];
      //imprimir resultado de la consulta
      console.log(dataResult);
    }, function (error) {
      console.log(error);
    });

    message = `Se registró el cliente: ${e.dataItem.Nombre} ${e.dataItem.Apellido} en la base de datos`;

  } else if (sessionStorage.Option == '1') {
    update = sessionStorage.Identificacion;

    email = sessionStorage.CorreoElectronico;
    var StringQuery = `UPDATE Reservas_Lappiz_RecepcionClientes
    SET Nombre = '${sessionStorage.Nombre}', 
    Apellido = '${sessionStorage.Apellido}', 
    Celular = '${sessionStorage.Celular}', 
    Ciudad = '${sessionStorage.Ciudad}',
    CorreoElectronico = '${sessionStorage.CorreoElectronico}',
    Direccion = '${sessionStorage.Direccion}',
    Empresa = '${sessionStorage.Empresa}', 
    Identificacion = '${sessionStorage.Identificacion}', 
    Pais = '${sessionStorage.Pais}', 
    Telefono = '${sessionStorage.Telefono}', 
    TipoPersona = '${sessionStorage.TipoPersona}',
    TipodeIdentificacin = '${sessionStorage.TipodeIdentificacin}'
    WHERE Id = '${e.dataItem.Id}'`;
    execQuery(StringQuery).then(function (response) {
      var dataResult = response[0];
      //imprimir resultado de la consulta
      console.log(dataResult);
    }, function (error) {
      console.log(error);
    });
    message = `Recepción registrada al cliente: ${sessionStorage.Nombre} ${sessionStorage.Apellido}`;
  }
  debugger
  setTimeout(() => {
    var query2 = `SELECT Id FROM Reservas_Lappiz_Cliente WHERE
    Identificacion = '${update}'`
    execQuery(query2).then(function (response) {
      var dataResult = response[0];
      //imprimir resultado de la consulta
      console.log(dataResult[0].Id);
      sessionStorage.ClienteID = dataResult[0].Id;
      console.log(sessionStorage.ClienteID)
    }, function (error) {
      console.log(error);
    });
  }, 1000);

  setTimeout(() => {
    var query3 = `UPDATE Reservas_Lappiz_RecepcionClientes
  SET ClienteFK = '${sessionStorage.ClienteID}' WHERE Id = '${e.dataItem.Id}'`;
    execQuery(query3).then(function (response) {
      var dataResult = response[0];
      //imprimir resultado de la consulta
      console.log(dataResult);
    }, function (error) {
      console.log(error);
    });
  }, 2000);

  sendEmail(email, subject, text, HTML, attachments, cc, bcc).then(function (response) {
    toastr.info(`Registro de la recepción enviada al correo: ${email}`);
    toastr.info(message);

  }, function (error) {
    toastr.warning('Ha ocurrido un error al enviar el correo');
  });

}, 1000);