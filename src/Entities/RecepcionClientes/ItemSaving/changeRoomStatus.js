setTimeout(() => {
  let updateRoomQuery = `UPDATE Reservas_Lappiz_Habitacion SET Disponibilidad = 'Ocupada' WHERE Id = '${e.dataItem.HabitacionFk}'`;
  execQuery(updateRoomQuery).then(function (response) {
    var dataResult = response[0];
    //imprimir resultado de la consulta
    console.log(dataResult);
  }, function (error) {
    console.log(error);
  });
}, 1000);