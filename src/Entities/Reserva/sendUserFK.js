setTimeout(() => {
  var StringQuery = `UPDATE Reservas_Lappiz_Reserva SET UserFK = '${e.dataItem.Id}'`;
  execQuery(StringQuery).then(function (response) {
    var dataResult = response[0];
    //imprimir resultado de la consulta
    console.log(dataResult);
  }, function (error) {
    console.log(error);
  });
}, 1000);