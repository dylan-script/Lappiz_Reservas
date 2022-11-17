//Id Macro Proceso:a1968437-a26d-428c-8374-ab69b8f84f6e
//Id Proceso:2b2c6538-c812-4868-be4a-52200567bfc2
//Id Sub Proceso:dad1b9ea-8aa9-4b51-9b89-1b67b67ff18b
//Evento tipo ValueChanged

//Obtener MacroProceso
setTimeout(function() {
    var StringQuery = `SELECT macro.Macro
FROM Kuiper_Lappiz_MacroProceso AS macro
INNER JOIN Kuiper_Lappiz_MapaProcesos AS mapa
  ON macro.CEMapaProcesoFK = mapa.Id
INNER JOIN Kuiper_Lappiz_Clientes AS cliente
  ON cliente.Id = mapa.ClienteFK
WHERE cliente.Id = '${sessionStorage.ClienteFK}'`;
execQuery(StringQuery).then(function(response){
    var dataResult = response[0];
    //imprimir resultado de la consulta
    console.log(dataResult);
    //console.log(response)
    $('#a1968437-a26d-428c-8374-ab69b8f84f6e').data('kendoDropDownList').setDataSource(dataResult);
},function(error){
    console.log(error);
});
}, 1000);
SELECT 
   OBJECT_NAME(f.parent_object_id) TableName,
   COL_NAME(fc.parent_object_id,fc.parent_column_id) ColName
FROM 
   sys.foreign_keys AS f
INNER JOIN 
   sys.foreign_key_columns AS fc 
      ON f.OBJECT_ID = fc.constraint_object_id
INNER JOIN 
   sys.tables t 
      ON t.OBJECT_ID = fc.referenced_object_id
WHERE 
   OBJECT_NAME (f.referenced_object_id) = 'Kuiper_Lappiz_MacroProceso'



//Obtener Proceso
setTimeout(function() {
    var StringQuery = `SELECT pro.CEProceso
FROM Kuiper_Lappiz_Procesos AS pro
INNER JOIN Kuiper_Lappiz_MacroProceso AS macro
  ON macro.Id = pro.MacroProceso
INNER JOIN Kuiper_Lappiz_MapaProcesos AS mapa
  ON macro.CEMapaProcesoFK = mapa.Id
INNER JOIN Kuiper_Lappiz_Clientes AS cliente
  ON cliente.Id = mapa.ClienteFK
WHERE cliente.Id = '${sessionStorage.ClienteFK}'`;
execQuery(StringQuery).then(function(response){
    var dataResult = response[0];
    //imprimir resultado de la consulta
    console.log(dataResult);
    //console.log(response)
	let procesofk = '2b2c6538-c812-4868-be4a-52200567bfc2';
	visibilityField(procesofk, true);
    $('#2b2c6538-c812-4868-be4a-52200567bfc2').data('kendoDropDownList').setDataSource(dataResult);
},function(error){
    console.log(error);
});
}, 1000);


//Sub Proceso
setTimeout(function() {
    var StringQuery = `SELECT sub.Sub
FROM Kuiper_Lappiz_SubProceso AS sub
INNER JOIN Kuiper_Lappiz_Procesos AS pro
  ON pro.Id = sub.CEProcesoFK
INNER JOIN Kuiper_Lappiz_MacroProceso AS macro
  ON macro.Id = pro.MacroProceso
INNER JOIN Kuiper_Lappiz_MapaProcesos AS mapa
  ON macro.CEMapaProcesoFK = mapa.Id
INNER JOIN Kuiper_Lappiz_Clientes AS cliente
  ON cliente.Id = mapa.ClienteFK
WHERE cliente.Id = '${sessionStorage.ClienteFK}'`;
execQuery(StringQuery).then(function(response){
    var dataResult = response[0];
    //imprimir resultado de la consulta
    console.log(dataResult);
    //console.log(response)
	let subprocesofk = 'dad1b9ea-8aa9-4b51-9b89-1b67b67ff18b';
	visibilityField(subprocesofk, true);
    $('#dad1b9ea-8aa9-4b51-9b89-1b67b67ff18b').data('kendoDropDownList').setDataSource(dataResult);
},function(error){
    console.log(error);
});
}, 1000);