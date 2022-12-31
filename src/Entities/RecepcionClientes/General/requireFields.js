function requireFields(option, entity) {
  let ClienteFK = 'c55fb258-0c76-46f0-9d92-edf32be48e6d';
  let id = '995e4748-1fe8-43ac-9cbc-d32d60172da3';
  let tipoId = 'b81ec10e-c213-483a-9ecf-64137479bcd5';
  let nombre = '373fc4c4-47bc-4797-99c7-2f8d941042f9';
  let apellido = '12af9eea-52a4-4887-ab39-6cdb037bb4a6';
  let telefonoCliente = '0a2b443b-1ed5-4700-b289-6f9c0ab150df';
  let emailCliente = '88237b69-c770-4f92-9e50-a1cca3aa0c4c';
  let geoCliente = '2b467975-fec8-41f5-ae56-ee971a0f3d41';
  let direccionCliente = '081cf556-c6b2-45f1-8f05-fd20e51f24f2';
  let EmpresaFK = '29846fc9-0c60-4741-8a5b-cbc133071b23';
  let nit = 'f42ef38d-20a7-40e6-90f0-5d85d78e3300';
  let razonSocial = '8b9c45db-5c74-48e2-954c-1232819182f3';
  let telefonoEmpresa = '97d4682e-5379-4198-8a3b-2f9cd040319d';
  let emailEmpresa = '597c8107-98d3-4f90-994f-85181327efb8';
  let geoEmpresa = '2f2b83d4-1033-4389-a10c-1f9d26b4e9f8';
  let direccionEmpresa = 'b1aecf41-b903-408b-a07e-3124662965d5';
  if (option == 0) {
    debugger
    if (entity = 'client') {
      requireField(id, true);
      requireField(tipoId, true);
      requireField(nombre, true);
      requireField(apellido, true);
      requireField(telefonoCliente, true);
      requireField(ClienteFK, false);
    } else if(entity = 'enterprise'){
      requireField(nit, true);
      requireField(razonSocial, true);
      requireField(emailEmpresa, true);
      requireField(telefonoCliente, true);
      requireField(EmpresaFK, false);
    }
    return 'register';
  } else if (option == 1) {
    if (entity = 'client') {
      requireField(id, false);
      requireField(tipoId, false);
      requireField(nombre, false);
      requireField(apellido, false);
      requireField(telefonoCliente, false);
      requireField(ClienteFK, true);
    } else if(entity = 'enterprise'){
      requireField(nit, false);
      requireField(razonSocial, false);
      requireField(emailEmpresa, false);
      requireField(telefonoCliente, false);
      requireField(EmpresaFK, true);
    }
    return 'search';
  } else {
    requireField(nit, false);
    requireField(razonSocial, false);
    requireField(emailEmpresa, false);
    requireField(telefonoCliente, false);
    requireField(EmpresaFK, false);
    return 'None'
  }
}