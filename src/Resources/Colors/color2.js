if (location.href.includes('appViewId=36c9c0b2-8d25-457b-b3b2-4393d7ba5953')) {
  setTimeout(() => {
    debugger;
    sessionStorage.intervalo = setInterval(colorgrid, 600)
  }, 1000);
}

function colorgrid() {

  if (!location.href.includes('appViewId=36c9c0b2-8d25-457b-b3b2-4393d7ba5953')) {
    clearInterval(sessionStorage.intervalo);
  } else {
    var data = kendo.jQuery("#grid1").data('kendoGrid').dataSource._data;
    var estados = {
      Finalizada: '#B2DFDB',
      'Próxima a vencer': '#FFF9C4',
      'En proceso': '#AAC4FF',
      Pendiente: '#FFCDD2',
      Vencida: '#e25858'
    }
    for (let i = 0; i < data.length; i++) {

      $(`#grid1 div.k-grid-content.k-auto-scrollable > table > tbody > tr:nth-child(${i + 1}) > td:nth-child(6)`)[0].style.background = estados[data[i].Estado]
    }
  }
}