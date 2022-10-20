let nuevoCliente = `insert into Reservas_Lappiz_RecepcionClientes (Nombre,Apellido, TipoIdentificacin,Empresa, Dereccion,Ciudad, Correoelectrnico, Pais, Celular, Telefono,Observaciones,FechaRecepcion, Fechadeida,Identificacion) 
                     values ('${sessionStorage.Nombre}','${sessionStorage.Apellido}','${sessionStorage.Ciudad}','${e.dataItem.Empresa}','${sessionStorage.Direccion}','${sessionStorage.Ciudad}','${sessionStorage.Celular}','${sessionStorage.Telefono}','${sessionStorage.Identificacion}')
                 `;
execQuery(nuevoCliente).then(success => {
  alert("La reserva fue registrada exitosamente");
});