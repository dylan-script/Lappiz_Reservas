setTimeout(() => {
    var ProductoServicioFK = `SELECT dps.CENombre, dps.DescripcionServicio, dps.Id
FROM Kuiper_Lappiz_DetalleProductoServicios AS dps
INNER JOIN Kuiper_Lappiz_ProductoServicios AS ps
  ON dps.ProductoServicioFK = ps.Id
INNER JOIN Kuiper_Lappiz_Clientes AS c
  ON ps.ClienteFK = c.Id
WHERE c.Id = '${sessionStorage.ClienteFK}'`;
execQuery(ProductoServicioFK).then((response) => {
    let dataResult = response[0];
    //imprimir resultado de la consulta
    console.log(dataResult);
    //console.log(response)
	//Campo Tipo Relación
    $('#66151047-4d0c-4b5c-bfe5-834f709baa21').data('kendoDropDownList').setDataSource(dataResult);
}, (error) => {
    console.log(error);
});
}, 1000);
