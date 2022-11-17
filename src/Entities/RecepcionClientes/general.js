function getData() {
  debugger
  //console.log(e.dataItem)
  if (sessionStorage.Type == 'Natural') {
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

  if (sessionStorage.Type == 'Juridica') {
    //NIT
    sessionStorage.CENit = e.dataItem.CENit;
    console.log(sessionStorage.CENit);
    //Razón Social
    sessionStorage.RazonSocial = e.dataItem.RazonSocial;
    console.log(sessionStorage.RazonSocial);
  }

  //Número Celular
  sessionStorage.Celular = e.dataItem.Celular;
  console.log(sessionStorage.Celular);
  //Ciudad de Residencia
  sessionStorage.Ciudad = e.dataItem.Ciudad;
  console.log(sessionStorage.Ciudad);
  //Email
  sessionStorage.CorreoElectronico = e.dataItem.CorreoElectronico;
  console.log(sessionStorage.CorreoElectronico);
  //Dirección de Residencia
  sessionStorage.Direccion = e.dataItem.Direccion;
  console.log(sessionStorage.Direccion);
  //País de Residencia
  sessionStorage.Pais = e.dataItem.Pais;
  console.log(sessionStorage.Pais);
  //Número Telefónico
  sessionStorage.Telefono = e.dataItem.Telefono;
  console.log(sessionStorage.Telefono);
}