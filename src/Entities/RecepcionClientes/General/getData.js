function getData(entity) {
  debugger
  //console.log(e.dataItem)
  if (entity == 'client') {
    //Identificación
    sessionStorage.Identificacion = e.dataItem.Identificacion;
    console.log(sessionStorage.Identificacion);
    //Tipo de Identificación
    sessionStorage.TipodeIdentificacin = e.dataItem.TipodeIdentificacin;
    console.log(sessionStorage.TipodeIdentificacin);
    //Nombre
    sessionStorage.Nombre = e.dataItem.Nombre;
    console.log(sessionStorage.Nombre);
    //Apellido
    sessionStorage.Apellido = e.dataItem.Apellido;
    console.log(sessionStorage.Apellido);
  }

  if (entity == 'enterprise') {
    //NIT
    sessionStorage.Nit = e.dataItem.Nit;
    console.log(sessionStorage.Nit);
    //Razón Social
    sessionStorage.RazonSocial = e.dataItem.RazonSocial;
    console.log(sessionStorage.RazonSocial);
  }
  //Email
  sessionStorage.CorreoElectronico = e.dataItem.CorreoElectronico;
  console.log(sessionStorage.CorreoElectronico);
  //Dirección de Residencia
  sessionStorage.Direccion = e.dataItem.Direccion;
  console.log(sessionStorage.Direccion);
  //Lugar de Residencia
  sessionStorage.Geolocalizacion = e.dataItem.Geolocalizacion;
  console.log(sessionStorage.Geolocalizacion);
  //Número Telefónico
  sessionStorage.Telefono = e.dataItem.Telefono;
  console.log(sessionStorage.Telefono);
}