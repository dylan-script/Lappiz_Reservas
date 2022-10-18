let Nombre = e.dataItem.Nombre;
let Apellido = e.dataItem.Apellido
let TipoIdenti = e.dataItem.TipoIdentificacin
let NumeroIdenti = e.dataItem.Numerodedocumento
let Empresa = e.dataItem.Empresa
let direcci = e.dataItem.Direccion
let ciudad = e.dataItem.Ciudad
let correo = e.dataItem.CorreoElectronico
let pais = e.dataItem.Pais
let celular = e.dataItem.Celular
let telefono = e.dataItem.Telefono
let fechaIngreso = e.dataItem.FechaIngreso
let FechaIda = e.dataItem.FechaSalida
let observaciones = e.dataItem.Observaciones
let nuevoCliente = `insert into Reservas_Lappiz_RecepcionClientes (Nombre,Apellido, TipoIdentificacin,Empresa, Dereccion,Ciudad, Correoelectrnico, Pais, Celular, Telefono,Observaciones,FechaRecepcion, Fechadeida,Identificacion) 
                     values ('${Nombre}','${Apellido}','${TipoIdenti}','${Empresa}','${direcci}','${ciudad}','${celular}','${telefono}','${observaciones}','${fechaIngreso}','${FechaIda}','${NumeroIdenti}')
                 `;
execQuery(nuevoCliente).then(success => {
  alert("La reserva fue registrada exitosamente");
});