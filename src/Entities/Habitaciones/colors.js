var appViewId = getAppViewId();
console.log(appViewId);

if (appViewId == 'e8daca5e-068c-4381-a647-aeca744ec163') {
  setTimeout(() => {
    debugger;
    sessionStorage.intervalo = setInterval(colorgrid, 600)
  }, 1000);
}

function colorgrid() {

  if (appViewId != 'e8daca5e-068c-4381-a647-aeca744ec163') {
    clearInterval(sessionStorage.intervalo);
  } else {
    debugger
    var data = kendo.jQuery("#Grid1").data('kendoGrid').dataSource._data;
    var estados = {Disponible: '#2ecc71',
      Ocupada: '#e74c3c',
      Sucia: '#f1c40f',
      'Ocupada Limpia': '#3498db',
      Mantenimiento: '#7f8c8d',
      Pendiente: '#e67e22'
    }
    for (let i = 0; i < data.length; i++) {

      $(`#Grid1 > div.k-grid-content.k-auto-scrollable > table > tbody > tr:nth-child(${i + 1}) > td:nth-child(1)`)[0].style.background = estados[data[i].Disponibilidad]
    }
  }
}