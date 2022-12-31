setTimeout(() => {
  $('[title="Guardar"').hide()
  $('[title="Guardar y nuevo"').hide()
}, 1000);

//Evento FormLoader
setTimeout(() => {
	let procesofk = '2b2c6538-c812-4868-be4a-52200567bfc2';
	let subprocesofk = 'dad1b9ea-8aa9-4b51-9b89-1b67b67ff18b';
	visibilityField(procesofk, false);
	visibilityField(subprocesofk, false);
});

	console.clear();
	//Obtener ID del campo ClienteFK
    sessionStorage.ClienteFK = getFieldValue('d2fde306-15b3-4083-9ca8-25add33e811f');
    console.log(`ID del Cliente: ${sessionStorage.ClienteFK}`);