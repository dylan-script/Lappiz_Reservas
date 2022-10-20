var StringQuery = `UPDATE `;
execQuery(StringQuery).then(function(response){
    var dataResult = response[0];
    //imprimir resultado de la consulta
    console.log(dataResult);
},function(error){
    console.log(error);
});