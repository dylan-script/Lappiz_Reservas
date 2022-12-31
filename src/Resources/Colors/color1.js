setTimeout(() => {

  debugger;

  if (location.href.includes('appViewId=be2349ca-0b48-495f-a75a-cb551ca9e6f7')) {
    var intervalo = setInterval(colorgrid, 600);
  }

  function colorgrid() {

    if (!location.href.includes('appViewId=be2349ca-0b48-495f-a75a-cb551ca9e6f7')) {
      clearInterval(intervalo);
    } else {

      var data = kendo.jQuery("#grid1").data('kendoGrid').dataSource._data;

      for (let i = 0; i < data.length; i++) {

        var fechaActual = new Date().getTime();
        var fechaLimite = new Date(data[i].FechaLimite).getTime();

        var diff = fechaLimite - fechaActual;

        var dias = diff / (1000 * 60 * 60 * 24);
        dias = parseInt(dias.toFixed()) + 1;

        if (dias <= 5) {
          $("#grid1").find('tr')[i + 1].style.background = '#FFCDD2';
        } else if (dias >= 6 && dias < 10) {
          $("#grid1").find('tr')[i + 1].style.background = '#FFF9C4';
        } else if (dias >= 10) {
          $("#grid1").find('tr')[i + 1].style.background = '#B2DFDB';
        }
      }
    }
    clearInterval(sessionStorage.setIntervalNotificacion);
  }
}, 500);