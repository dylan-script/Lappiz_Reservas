let Registro = $('#819177d8-2fbe-4325-8e89-24af0f201b1e').val();
debugger;
let HabitacionExistente = `SELECT * from Reservas_Lappiz_Habitacion where NombreHabitacion = '${Registro}'`;
execQuery(HabitacionExistente).then(function (Respuesta) {
  var Data = Respuesta[0];
  if (Data.length === 0) {
    let tipodisponibilidad = e.dataItem.Disponibilidad;
    let modificacionregistro = `UPDATE Reservas_Lappiz_Habitacion  SET Disponibilidad = '${tipodisponibilidad}' where Id = '${Registro}'`;
    execQuery(modificacionregistro).then(success => {
      alert("el estado de la habitacion paso a: " + e.dataItem.Disponibilidad);
    });
  } else {
    // confirm('Desea continuar');
    e.cancel = false;
  }
});