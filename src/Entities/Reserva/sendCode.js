setTimeout(() => {
  if (e.isNew){
      function aleatorio(inferior, superior) {
      var numPosibilidades = superior - inferior;
      var aleatorio = Math.random() * (numPosibilidades + 1);
      aleatorio = Math.floor(aleatorio);
      return inferior + aleatorio;
    }

    var codigo =
      new Date().toLocaleDateString("en-GB") + aleatorio(1000, 9999);
    var codigo2 = codigo.replaceAll("/", "");

    setFieldValue("ec81be95-00cc-4bca-a1d5-285a41b85d52", codigo2);
  }else if (!e.isNew){
      $('#ec81be95-00cc-4bca-a1d5-285a41b85d52').val() = e.dataItem.Numeroreserva}
}, 500);