setTimeout(() => {
  debugger
  var StringQuery = `UPDATE Reservas_Lappiz_Reserva SET UserFK = '${SON.parse(sessionStorage.LappizUser).Id}' WHERE Id = '${e.dataItem.Id}'`;
  execQuery(StringQuery).then(function (response) {
    var dataResult = response[0];
    //imprimir resultado de la consulta
    console.log(dataResult);
  }, function (error) {
    console.log(error);
  });
}, 1000);