setTimeout(() => {
  var appViewId = getAppViewId();
  console.log(appViewId);
  if (appViewId == 'e8daca5e-068c-4381-a647-aeca744ec163') {
    $("#Disponible").click(function () {
      debugger
      console.clear()

      sessionStorage.EstadoHabitacion = 'Disponible';
      console.log(sessionStorage.EstadoHabitacion)
      updateForm()
    });
    $("#Ocupada").click(function () {
      debugger
      console.clear()

      sessionStorage.EstadoHabitacion = 'Ocupada';
      console.log(sessionStorage.EstadoHabitacion)
      updateForm()
    });
    $("#Sucia").click(function () {
      debugger
      console.clear()

      sessionStorage.EstadoHabitacion = 'Sucia';
      console.log(sessionStorage.EstadoHabitacion)
      updateForm()
    });
    $("#OcupadaLimpia").click(function () {
      debugger
      console.clear()

      sessionStorage.EstadoHabitacion = 'Ocupada Limpia';
      console.log(sessionStorage.EstadoHabitacion)
      updateForm()
    });
    $("#Mantenimiento").click(function () {
      debugger
      console.clear()

      sessionStorage.EstadoHabitacion = 'Mantenimiento';
      console.log(sessionStorage.EstadoHabitacion)
      updateForm()
    });
    $("#Pendiente").click(function () {
      debugger
      console.clear()

      sessionStorage.EstadoHabitacion = 'Pendiente';
      console.log(sessionStorage.EstadoHabitacion)
      updateForm()
    });


  }
}, 1500);

function updateForm() {
  let urlForm = '#/forms?viewName=Reservas_Lappiz_Habitacion&entityId=1d952623-ffae-4317-9491-cf5fad79a24c&viewMenu=true&appViewId=e8daca5e-068c-4381-a647-aeca744ec163';
  goLocation(urlForm);
}