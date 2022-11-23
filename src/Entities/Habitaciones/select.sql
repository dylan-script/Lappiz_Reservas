SELECT
  hab.Disponibilidad,
  hab.TipodeHabitacion AS Tipo_Habitacion,
  hab.NombreHabitacion AS Nombre,
  hab.CamaSencilla AS Camas_Sencilla,
  hab.Camadoble AS Camas_Doble,
  hab.CamaAuxilliar AS Camas_Auxilliar,
  hab.Camarote AS Tipo_Camarote,
  hab.Adicional1 AS Servicio_Adcional,
  hab.Caracteristicas AS Caracteristicas_Adicionales,
  hab.Bano AS Tipo_Inodoro,
  hab.Climatizacion AS Ambiente,
  hab.Entretenimiento
FROM Reservas_Lappiz_Habitacion AS hab
WHERE hab.TipodeHabitacion = 'Estándar'