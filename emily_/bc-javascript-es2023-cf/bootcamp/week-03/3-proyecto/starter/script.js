// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Adapta este archivo a tu dominio asignado.
//
// Ejemplos con dominios no asignables:
// - Planetario    → calcular ingresos por función, capacidad disponible
// - Acuario       → calcular costo de alimentación, volumen total de tanques
// - Museo         → calcular valor de exhibición, costo de entrada
// - Zoológico     → calcular gasto diario por especie, total de visitantes
// - Observatorio  → calcular duración total de eventos, aforo restante
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define las constantes base de tu dominio
// Ejemplos con dominios no asignables:
//   Planetario:   TICKET_PRICE = 12_000, MAX_CAPACITY = 45
//   Acuario:      DAILY_FEEDING_KG = 150, ENTRY_PRICE = 35_000
//   Museo:        ADULT_TICKET = 20_000, GUIDED_TOUR = 15_000
//   Zoológico:    FOOD_COST_PER_DAY = 500_000, MAX_VISITORS = 800
//   Observatorio: SESSION_DURATION = 90, TICKET_PRICE = 18_000

// const EXAMPLE_CONSTANT = 0; // TODO: Reemplazar con tus constantes
    
// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// TODO: Calcula totales, subtotales o valores clave de tu dominio
// Usa: +, -, *, /, %, **
// Etiqueta cada resultado con console.log()
 const preciopasajes=3000;
const cantidaddepasajeros=200000;
 const ingresosTotales=preciopasajes*cantidaddepasajeros;
 console.log("ingresos totales ",ingresosTotales )
 const cantidaddeBusesintermunicipales=50;
 const cantidaddeBusesurbanos=100;
 const totaldeBuses=cantidaddeBusesintermunicipales+cantidaddeBuesesurbanos;
 console.log("total de buses",totaldeBuses)
const capacidadBus = 25;
const pasajerosdelBus=23;
const asientosDisponibles = capacidadBus -pasajerosdelbus ;
console.log("Asientos disponibles:", asientosDisponibles);
const cantidadTotaldebuses=150;
const Totaldetrabajadores=125;
const promediodetrabajadoresporcadabus=Totaldetrabajadores/cantidadTotaldebuses;
console.log("promedio de trabajadores por cada bus:",promediodetrabajadoresporcadabus);
const totaldepasejesalmes=18000000000;
const invercionesalmes=6000000000;
const porcentajedeganancia=totaldepasejesalmes/invercionesalmes*100;
console.log("procentaje de ganacia:",porcentajedeganacia + "%")

console.log("");


// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// TODO: Usa +=, -=, *=, /= para actualizar valores acumulados
// Muestra el valor antes y después de cada operación
let pasajeros= 10;
console.log("pasajeros iniciales:",pasajerps);
pasajjeros += 5;
console.log("pasajeros actualizados cada mes:",pasajeros);
pasajeros-=2;
CSSConditionRule.log("pasajeros actualizados cada mes ",pasajeros );
pasajeros *=3;
console.log("pasajeros actualizados cada mes:",pasajeros);
pasajeros/=2;
console.log("pasajeros actualizados cada mes ",pasajeros );

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// TODO: Valida condiciones usando === y operadores de orden
// NUNCA uses == (penalización en la rúbrica)

const totaldepasajeros=30;
const capacidaddelbusdesalida=25;
const buslleno=totaldepasajeros===capacidaddelbusdesalida;
console.log("¿el bus esta lleno?",busestalleno);

const hayespacio=totaldepasajeros>capacidaddelbusdesalida;
console.log("¿hay espacio en el bus?",hayespacio)



console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

// TODO: Combina condiciones con &&, ||, !
// Al menos una condición con && y una con ||
const pasajerosactuales=200000;
const capacidadesdelosbuses=25;
const busEnServicio = true;
const puedeSubirPasajero = busEnServicio && pasajeros < capacidadBus;
console.log("¿Puede subir un pasajero?", puedeSubirPasajero);

const busLlenoOInactivo = pasajeros === capacidadBus || !busEnServicio;
console.log("¿Bus lleno o fuera de servicio?", busLlenoOInactivo);
console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

// TODO: Muestra un resumen con los valores más importantes
console.log("ingresos totales:",ingresostotales)
console.log("procentaje de ganacia:",porcentajedeganacia + "%")
console.log("ingresos totales ",ingresosTotales )


console.log("");
