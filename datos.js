/* ============================================================
   DATOS DEL VIAJE — este es el único archivo que hay que editar.
   Editalo desde GitHub (lápiz) y guardá con "Commit changes".
   En ~1 minuto se actualiza la página.

   Reglas:
   - Respetá las comillas, las comas y las llaves.
   - Fechas: "2026-11-21". Horas: "07:00" (24 h).
   - Evento: tipo = vuelo | bus | hotel | partido | vip | traslado | nota
             estado = confirmado | a confirmar | pendiente
             fin_dia_siguiente = true si llega al otro día (muestra +1)
   - Los eventos se ordenan por fecha y por "orden".
   - La página es pública: no cargues pasaportes, DNI ni códigos de reserva.
   ============================================================ */
window.DATOS = {

  /* ---------- Encabezado ---------- */
  config: {
    titulo: "La Sudaca es mi obsesión",
    subtitulo: "Colombia, del 16 al 25 de noviembre de 2026",
    fecha_final: "2026-11-21",
    final_titulo: "Boca vs Atlético Mineiro",
    final_lugar: "Estadio Metropolitano Roberto Meléndez, Barranquilla"
  },

  /* ---------- Quiénes van ---------- */
  personas: [
    { nombre: "Gabriel", detalle: "Todo el viaje, del 16 al 25 de noviembre." },
    { nombre: "Ayrton", detalle: "Todo el viaje, junto a Gabriel." },
    { nombre: "Leandro", detalle: "Llega el 18 y se va el 22. Sus vuelos todavía no están cargados." }
  ],

  /* ---------- Días (encabezado de cada día) ---------- */
  dias: [
    { fecha: "2026-11-16", ciudad: "Rosario → Córdoba", titulo: "Bus nocturno a Córdoba", resumen: "Sale a las 20:00 desde Rosario." },
    { fecha: "2026-11-17", ciudad: "Córdoba → Cartagena", titulo: "Vuelo a Colombia", resumen: "Córdoba, Panamá, Bogotá y Cartagena en un solo día." },
    { fecha: "2026-11-18", ciudad: "Cartagena", titulo: "Llega Leandro", resumen: "Primer día completo en Cartagena." },
    { fecha: "2026-11-19", ciudad: "Cartagena", titulo: "Día en Cartagena", resumen: "Sin actividades cargadas todavía." },
    { fecha: "2026-11-20", ciudad: "Cartagena → Barranquilla", titulo: "Bus a Barranquilla", resumen: "Bus de las 07:00, hotel en Barranquilla." },
    { fecha: "2026-11-21", ciudad: "Barranquilla", titulo: "La final", resumen: "Boca juega la final de la Sudamericana." },
    { fecha: "2026-11-22", ciudad: "Barranquilla → Santa Marta", titulo: "Santa Marta", resumen: "Leandro vuelve; siguen Gabriel y Ayrton." },
    { fecha: "2026-11-23", ciudad: "Santa Marta → Bogotá", titulo: "Último día en Santa Marta", resumen: "Vuelo a Bogotá a las 21:00." },
    { fecha: "2026-11-24", ciudad: "Bogotá → Panamá → Córdoba", titulo: "Vuelta a Argentina", resumen: "Dos vuelos con una escala larga en Panamá." },
    { fecha: "2026-11-25", ciudad: "Córdoba", titulo: "Llegada de madrugada", resumen: "Aterrizan a las 02:42." }
  ],

  /* ---------- Actividades de cada día ---------- */
  eventos: [
    { fecha: "2026-11-16", orden: 1, hora: "20:00", hora_fin: "01:30", fin_dia_siguiente: true, tipo: "bus", estado: "confirmado",
      titulo: "Bus Rosario → Córdoba",
      lugar: "Terminal Rosario (Cafferata 702) → Terminal Córdoba (Bv. Perón 380)",
      detalle: "Empresa General Urquiza, semicama. Butaca 19 Ayrton, butaca 20 Gabriel. Llegada estimada 01:30 del 17/11. Llevar DNI.",
      personas: "Gabriel, Ayrton" },

    { fecha: "2026-11-17", orden: 1, hora: "01:30", hora_fin: null, fin_dia_siguiente: false, tipo: "vip", estado: "a confirmar",
      titulo: "Espera en Córdoba hasta el vuelo",
      lugar: "Aeropuerto de Córdoba",
      detalle: "Llegan a las 01:30 y el vuelo sale a las 06:31. El AMAE Lounge del aeropuerto abre las 24 h, está antes de seguridad y migraciones, y permite estadía de hasta 3 h (según Priority Pass). Falta resolver el traslado de la terminal al aeropuerto.",
      personas: "Gabriel, Ayrton" },
    { fecha: "2026-11-17", orden: 2, hora: "06:31", hora_fin: "11:10", fin_dia_siguiente: false, tipo: "vuelo", estado: "confirmado",
      titulo: "Córdoba → Panamá · Copa CM169",
      lugar: "COR → PTY",
      detalle: "Llegan a Panamá a las 11:10 (hora local). La conexión con el CM415 es de solo 38 minutos. Ayrton: falta cargar su comprobante.",
      personas: "Gabriel" },
    { fecha: "2026-11-17", orden: 3, hora: "11:48", hora_fin: "13:29", fin_dia_siguiente: false, tipo: "vuelo", estado: "confirmado",
      titulo: "Panamá → Bogotá · Copa CM415",
      lugar: "PTY → BOG",
      detalle: "Misma reserva que el tramo anterior.",
      personas: "Gabriel" },
    { fecha: "2026-11-17", orden: 4, hora: "13:29", hora_fin: "19:35", fin_dia_siguiente: false, tipo: "vip", estado: "a confirmar",
      titulo: "Escala en Bogotá (unas 6 h)",
      lugar: "Aeropuerto El Dorado",
      detalle: "Salas en El Dorado, todas en Terminal 1: The Lounge (muelle D, 24 h), El Dorado Lounge (muelle internacional, 24 h) y Copa Club (3:30 a 21:30), con Priority Pass, LoungeKey o Diners. Las salas Avianca piden business o estatus. Son reservas separadas (Copa y Avianca): contemplar migración y un nuevo check-in.",
      personas: "Gabriel, Ayrton" },
    { fecha: "2026-11-17", orden: 5, hora: "19:35", hora_fin: "21:05", fin_dia_siguiente: false, tipo: "vuelo", estado: "confirmado",
      titulo: "Bogotá → Cartagena · Avianca AV8556",
      lugar: "BOG → CTG",
      detalle: "Tarifa BASIC: no incluye equipaje de mano ni de bodega (0PC). Sale de la Terminal 1.",
      personas: "Gabriel, Ayrton" },
    { fecha: "2026-11-17", orden: 6, hora: null, hora_fin: null, fin_dia_siguiente: false, tipo: "hotel", estado: "confirmado",
      titulo: "Check-in Hostal Badillo SV",
      lugar: "Calle Segunda Badillo 36-58, San Diego, Cartagena",
      detalle: "Recepción abierta de 15:00 a 00:00. Avisar la hora de llegada al hostal. Habitación familiar con baño privado, 3 noches.",
      personas: "Gabriel, Ayrton" },

    { fecha: "2026-11-18", orden: 1, hora: null, hora_fin: null, fin_dia_siguiente: false, tipo: "vuelo", estado: "a confirmar",
      titulo: "Llega Leandro",
      lugar: null,
      detalle: "Falta cargar su vuelo: ciudad y hora de llegada.",
      personas: "Leandro" },

    { fecha: "2026-11-20", orden: 1, hora: "07:00", hora_fin: "10:00", fin_dia_siguiente: false, tipo: "bus", estado: "confirmado",
      titulo: "Bus Cartagena → Barranquilla · Copetran",
      lugar: "Terminal de Cartagena → Terminal de Barranquilla",
      detalle: "Bus Preferencial de Lujo. Sillas: 18 Leandro, 19 Gabriel, 20 Ayrton. Presentarse en taquilla 60 minutos antes (06:00) con el comprobante.",
      personas: "Gabriel, Ayrton, Leandro" },
    { fecha: "2026-11-20", orden: 2, hora: null, hora_fin: null, fin_dia_siguiente: false, tipo: "hotel", estado: "confirmado",
      titulo: "Check-out Hostal Badillo SV",
      lugar: "Cartagena",
      detalle: "Hasta las 12:00. Como el bus sale a las 07:00, se hace antes de salir.",
      personas: "Gabriel, Ayrton, Leandro" },
    { fecha: "2026-11-20", orden: 3, hora: null, hora_fin: null, fin_dia_siguiente: false, tipo: "hotel", estado: "confirmado",
      titulo: "Check-in Hotel Intersuites",
      lugar: "Carrera 43 N° 79-73, Barranquilla",
      detalle: "Recepción de 11:00 a 23:00. Cuádruple con baño privado, 2 noches, desayuno incluido.",
      personas: "Gabriel, Ayrton, Leandro" },

    { fecha: "2026-11-21", orden: 1, hora: null, hora_fin: null, fin_dia_siguiente: false, tipo: "partido", estado: "a confirmar",
      titulo: "Final Copa Sudamericana: Boca vs Atlético Mineiro",
      lugar: "Estadio Metropolitano Roberto Meléndez, Barranquilla",
      detalle: "Sábado 21/11 en el Estadio Metropolitano Roberto Meléndez. El horario no estaba anunciado en las notas que leí. Entradas: sin cargar.",
      personas: "Gabriel, Ayrton, Leandro" },

    { fecha: "2026-11-22", orden: 1, hora: null, hora_fin: null, fin_dia_siguiente: false, tipo: "vuelo", estado: "a confirmar",
      titulo: "Se va Leandro",
      lugar: null,
      detalle: "Falta cargar su vuelo de regreso.",
      personas: "Leandro" },
    { fecha: "2026-11-22", orden: 2, hora: null, hora_fin: null, fin_dia_siguiente: false, tipo: "hotel", estado: "confirmado",
      titulo: "Check-out Hotel Intersuites",
      lugar: "Barranquilla",
      detalle: "Entre las 13:00 y las 14:00.",
      personas: "Gabriel, Ayrton, Leandro" },
    { fecha: "2026-11-22", orden: 3, hora: null, hora_fin: null, fin_dia_siguiente: false, tipo: "traslado", estado: "pendiente",
      titulo: "Barranquilla → Santa Marta",
      lugar: "Barranquilla → Santa Marta",
      detalle: "Sin pasaje ni traslado cargado.",
      personas: "Gabriel, Ayrton" },
    { fecha: "2026-11-22", orden: 4, hora: null, hora_fin: null, fin_dia_siguiente: false, tipo: "hotel", estado: "confirmado",
      titulo: "Check-in Soy Local Santa Marta",
      lugar: "814 Calle 18, Santa Marta",
      detalle: "Recepción de 15:00 a 00:00. Loft, 1 noche, sin parking ni comidas.",
      personas: "Gabriel, Ayrton" },

    { fecha: "2026-11-23", orden: 1, hora: null, hora_fin: null, fin_dia_siguiente: false, tipo: "hotel", estado: "confirmado",
      titulo: "Check-out Soy Local Santa Marta",
      lugar: "Santa Marta",
      detalle: "Hasta las 11:00. El vuelo sale a las 21:00: pensar dónde dejar el equipaje.",
      personas: "Gabriel, Ayrton" },
    { fecha: "2026-11-23", orden: 2, hora: "21:00", hora_fin: "22:35", fin_dia_siguiente: false, tipo: "vuelo", estado: "confirmado",
      titulo: "Santa Marta → Bogotá · Avianca AV9237",
      lugar: "SMR → BOG",
      detalle: "Tarifa BASIC: no incluye equipaje de mano ni de bodega (0PC).",
      personas: "Gabriel, Ayrton" },
    { fecha: "2026-11-23", orden: 3, hora: "22:35", hora_fin: null, fin_dia_siguiente: false, tipo: "hotel", estado: "pendiente",
      titulo: "Noche en Bogotá",
      lugar: "Bogotá",
      detalle: "Sin alojamiento cargado. El vuelo a Panamá sale a las 10:40.",
      personas: "Gabriel, Ayrton" },

    { fecha: "2026-11-24", orden: 1, hora: "10:40", hora_fin: "12:31", fin_dia_siguiente: false, tipo: "vuelo", estado: "confirmado",
      titulo: "Bogotá → Panamá · Copa CM416",
      lugar: "BOG → PTY",
      detalle: "Ayrton: falta cargar su comprobante.",
      personas: "Gabriel" },
    { fecha: "2026-11-24", orden: 2, hora: "12:31", hora_fin: "18:11", fin_dia_siguiente: false, tipo: "vip", estado: "a confirmar",
      titulo: "Escala en Panamá (5 h 40)",
      lugar: "Aeropuerto de Tocumen",
      detalle: "En Tocumen: Copa Club (5:30 a 22:15; Star Alliance, Priority Pass, LoungeKey o Diners), The Lounge (24 h; Priority Pass, LoungeKey, Diners o pago en la puerta, aprox. USD 38, máx. 3 h) y Tocumen Royal Saloon (6:00 a 21:00; aprox. USD 37, máx. 4 h, antes de seguridad). Hay que ver desde qué terminal sale el CM788.",
      personas: "Gabriel, Ayrton" },
    { fecha: "2026-11-24", orden: 3, hora: "18:11", hora_fin: "02:42", fin_dia_siguiente: true, tipo: "vuelo", estado: "confirmado",
      titulo: "Panamá → Córdoba · Copa CM788",
      lugar: "PTY → COR",
      detalle: "Llegan a Córdoba a las 02:42 del miércoles 25/11.",
      personas: "Gabriel" },

    { fecha: "2026-11-25", orden: 1, hora: "02:42", hora_fin: null, fin_dia_siguiente: false, tipo: "nota", estado: "pendiente",
      titulo: "Llegada a Córdoba",
      lugar: "Aeropuerto de Córdoba",
      detalle: "Falta resolver el regreso a Rosario: no hay pasaje cargado.",
      personas: "Gabriel, Ayrton" }
  ],

  /* ---------- Reservas (categoria = alojamiento | transporte | vuelo) ---------- */
  reservas: [
    { categoria: "alojamiento", nombre: "Hostal Badillo SV", ciudad: "Cartagena",
      direccion: "Calle Segunda Badillo 36-58, Piso 2, Casa Republicana, San Diego", telefono: "+57 605 6652808",
      desde: "2026-11-17", hasta: "2026-11-20", personas: "4 adultos", monto: "COP 549.480 (3 noches)",
      pago: "El 50% se paga por adelantado en los 5 días previos a la llegada; el resto en el hostal.",
      cancelacion: "Gratis hasta el 11/11 a las 23:59. Desde el 12/11: COP 274.740. Desde el 18/11: COP 549.480.",
      notas: "Habitación familiar con baño privado. Check-in 15:00 a 00:00, check-out hasta 12:00. Sin comidas. Reserva en Booking.com a nombre de Gabriel." },
    { categoria: "alojamiento", nombre: "Hotel Intersuites", ciudad: "Barranquilla",
      direccion: "Carrera 43 N° 79-73", telefono: "+57 300 2611386",
      desde: "2026-11-20", hasta: "2026-11-22", personas: "4 adultos", monto: "COP 612.000 (2 noches)",
      pago: "Sin prepago: se paga en el hotel.",
      cancelacion: "Gratis hasta el 18/11 a las 23:59. Desde el 19/11: COP 612.000.",
      notas: "Cuádruple con baño privado, desayuno incluido, parking gratis. Check-in 11:00 a 23:00, check-out 13:00 a 14:00. Pedido: 4 camas individuales." },
    { categoria: "alojamiento", nombre: "Soy Local Santa Marta", ciudad: "Santa Marta",
      direccion: "814 Calle 18", telefono: "+57 310 5930485",
      desde: "2026-11-22", hasta: "2026-11-23", personas: "2 adultos", monto: "COP 110.380 (1 noche)",
      pago: "Cobro anticipado del total.",
      cancelacion: "No reembolsable.",
      notas: "Loft. Check-in 15:00 a 00:00, check-out hasta 11:00. Sin parking ni comidas." },
    { categoria: "transporte", nombre: "Bus Copetran Cartagena → Barranquilla", ciudad: "Cartagena",
      direccion: "Terminal de Cartagena", telefono: null,
      desde: "2026-11-20", hasta: null, personas: "3 pasajeros", monto: "COP 70.200 los 3 pasajes (con descuento Pinbus de COP 7.800)",
      pago: null, cancelacion: null,
      notas: "Sale 07:00, llega 10:00. Presentarse 60 minutos antes." },
    { categoria: "transporte", nombre: "Bus General Urquiza Rosario → Córdoba", ciudad: "Rosario",
      direccion: "Terminal Rosario, Cafferata 702", telefono: null,
      desde: "2026-11-16", hasta: null, personas: "Gabriel, Ayrton", monto: "$ 37.300 por pasaje (ARS)",
      pago: null, cancelacion: "Devolución con retención según el plazo (ver condiciones del boleto).",
      notas: "Sale 20:00 del 16/11, llega 01:30 del 17/11 (estimado)." },
    { categoria: "vuelo", nombre: "Avianca BOG → CTG (AV8556)", ciudad: "Bogotá",
      direccion: null, telefono: null,
      desde: "2026-11-17", hasta: null, personas: "Gabriel, Ayrton", monto: "COP 216.480 por pasajero",
      pago: null, cancelacion: "Tarifa BASIC: no reembolsable, cambios restringidos.",
      notas: "Sin equipaje de mano ni de bodega (0PC)." },
    { categoria: "vuelo", nombre: "Avianca SMR → BOG (AV9237)", ciudad: "Santa Marta",
      direccion: null, telefono: null,
      desde: "2026-11-23", hasta: null, personas: "Gabriel, Ayrton", monto: "COP 217.480 por pasajero",
      pago: null, cancelacion: "Tarifa BASIC: no reembolsable, cambios restringidos.",
      notas: "Sin equipaje de mano ni de bodega (0PC)." },
    { categoria: "vuelo", nombre: "Copa Airlines Córdoba ↔ Bogotá vía Panamá", ciudad: "Córdoba",
      direccion: null, telefono: null,
      desde: "2026-11-17", hasta: "2026-11-24", personas: "Gabriel", monto: null,
      pago: null, cancelacion: null,
      notas: "Ida: CM169 y CM415 el 17/11. Vuelta: CM416 y CM788 el 24/11. Solo está cargada la reserva de Gabriel; falta la de Ayrton." }
  ],

  /* ---------- Lo que falta resolver (resuelto: true lo tacha) ---------- */
  pendientes: [
    { texto: "Comprobante de Copa de Ayrton: solo tengo el de Gabriel.", resuelto: false },
    { texto: "Vuelos de Leandro: llegada el 18 y salida el 22 (ciudad y horarios).", resuelto: false },
    { texto: "Cartagena y Barranquilla están reservadas para 4 adultos y el viaje es de 3: confirmar si viene una cuarta persona o ajustar la reserva.", resuelto: false },
    { texto: "Entradas de la final y horario del partido.", resuelto: false },
    { texto: "Transporte de Barranquilla a Santa Marta el 22/11.", resuelto: false },
    { texto: "Alojamiento en Bogotá la noche del 23/11: llegan 22:35 y el vuelo sale 10:40.", resuelto: false },
    { texto: "Regreso de Córdoba a Rosario el 25/11: aterrizan 02:42.", resuelto: false },
    { texto: "Traslado de la terminal de Córdoba al aeropuerto el 17/11: llegan 01:30 y el vuelo sale 06:31.", resuelto: false },
    { texto: "Equipaje: los dos tramos de Avianca son BASIC y no incluyen equipaje; decidir si lo compran antes.", resuelto: false },
    { texto: "Salas VIP: confirmar con qué tarjeta o membresía entran (Priority Pass, LoungeKey, Diners u otra) y revisar horarios antes de viajar.", resuelto: false },
    { texto: "Conexión en Panamá el 17/11: solo 38 minutos entre CM169 y CM415.", resuelto: false },
    { texto: "Pagar el 50% del Hostal Badillo entre el 12 y el 17/11; cancelación gratis hasta el 11/11.", resuelto: false },
    { texto: "Cancelación gratis del Hotel Intersuites hasta el 18/11 a las 23:59.", resuelto: false }
  ]
};
