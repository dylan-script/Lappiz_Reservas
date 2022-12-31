setTimeout(() => {
  debugger
  console.log(e.dataItem)
  var rooms = e.dataItem.Reservas_Lappiz_Habitacionporcliente
  .length;
  debugger
  for (let i = 0; i < rooms; i++) {
    console.log(e.dataItem.Reservas_Lappiz_Habitacionporcliente[i].Reservas_Lappiz_Habitacion[i])
    console.log(e.dataItem.Reservas_Lappiz_Habitacionporcliente[i].Reservas_Lappiz_Habitacion[i].Id)
    console.log(e.dataItem.Reservas_Lappiz_Habitacionporcliente[i].Reservas_Lappiz_Habitacion[i].NombreHabitacion)
    console.log(e.dataItem.Reservas_Lappiz_Habitacionporcliente[i].Reservas_Lappiz_Habitacion[i].TipodeHabitacion)
    //Room's Data
    debugger
    var roomId = e.dataItem.Reservas_Lappiz_Habitacionporcliente[i].Reservas_Lappiz_Habitacion[i].Id;
    console.log(roomId)
    var roomName = e.dataItem.Reservas_Lappiz_Habitacionporcliente[i].Reservas_Lappiz_Habitacion[i].NombreHabitacion;
    console.log(roomName)
    var roomType = e.dataItem.Reservas_Lappiz_Habitacionporcliente[i].Reservas_Lappiz_Habitacion[i].TipodeHabitacion;
    console.log(roomType)
    //Queries
    debugger
    var updateRoomStatus = `UPDATE Reservas_Lappiz_Habitacion SET Disponibilidad = 'No Disponible', OData = 'Rojo' WHERE Id = '${roomId}'`;
    execQuery(updateRoomStatus).then(function (response) {
      var dataResult = response[0];
      //imprimir resultado de la consulta
      console.log(dataResult);
      toastr.success(`La habitación ${roomName} del tipo ${roomType} se encuentra ahora reservada.`);
    }, function (error) {
      console.log(error);
      toastr.error('Ocurrió un error.');
    });
    debugger
    var roomService = `INSERT INTO Reservas_Lappiz_ServicioHabitacion (Habitacion) VALUES ('${roomId}')`;
    execQuery(roomService).then(function (response) {
      var dataResult = response[0];
      //imprimir resultado de la consulta
      console.log(dataResult);
      toastr.success(`Se creó el roomservice a la habitación ${roomName}`);
    }, function (error) {
      console.log(error);
      toastr.error('Ocurrió un error.');
    });
  }
}, 1000);