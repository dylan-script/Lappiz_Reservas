//Id del formulario 
let appViewId = getAppViewId();
console.log(appViewId);

if (appViewId == 'e8daca5e-068c-4381-a647-aeca744ec163') {

  var query = `SELECT 
   room.NombreHabitacion [NombreHabitacion]
    FROM  Reservas_Lappiz_Habitacion AS room WHERE room.Disponibilidad = '${sessionStorage.EstadoHabitacion}'`;

  setTimeout(function () {
    debugger;


    var data = ajaxQuery(query);
    if (data.length > 0) {
      kendo.jQuery('#Grid1').kendoGrid({
        dataSource: {
          data: data,
          autoSync: true,
          schema: {
            model: {
              fields: {
                NombreHabitacion: { type: "string", editable: false },
              },
            },
          },
          //sort: [{ field: "Reserva", dir: "asc" }],
        },
        height: 450,
        scrollable: true,
        sortable: true,
        filterable: true,
        resizable: true,
        pageable: {
          pageable: true,
          previousNext: false,
          pageSize: 10,
          alwaysVisible: true,
          numeric: true,
          buttonCount: 5
        },
        dataBound: function () {
          for (var i = 0; i < this.columns.length; i++) {
            this.autoFitColumn(i);
          }
        },
        columns: [
          { field: "NombreHabitacion", title: "Nombre" },
        ],
        editable: true,
      });

    }

    function ajaxQuery(query) {
      let data
      let newquery = {
        "query": query,
        "parameters": {
          "aType": "execTx",
          "environment": `${backandGlobal.environment}`
        }
      }

      $.ajax({
        async: false,
        url: `${backandGlobal.api2}/${sessionStorage.workspace}.api/api/lappiz/sp/query`,
        type: 'POST',
        data: JSON.stringify(newquery),
        beforeSend: function (xhr) {
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.setRequestHeader('Authorization', localStorage.Authorization);
        },
        success: function (result) {
          data = result[0]
        },
        error: function (error) {
          console.log(error)
        }
      })
      return data
    }

  }, 500);

}