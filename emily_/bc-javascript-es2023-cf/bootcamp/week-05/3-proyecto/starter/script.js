// ============================================
// PROYECTO SEMANA 05: Clasificador
// Condicionales — if/else, ternario, switch, ??, ?.
// ============================================
//
// NOTA PARA EL APRENDIZ:
// Adapta este script a tu dominio asignado.
// Reemplaza los comentarios TODO con tu propia implementación.
// Usa los conceptos aprendidos esta semana.
//
// Ejecuta con: node starter/script.js
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

// TODO: Define al menos 5 variables con datos de un elemento de tu dominio.
// Ejemplos orientativos:
// - Un libro, medicamento, miembro, estudiante, producto, etc.
// - Incluye: nombre, estado, valor numérico, tipo (string), y alguna propiedad opcional

const elementName = "bus-urbano";           // TODO: nombre del elemento (string)
const elementStatus = "active";         // TODO: estado actual (string: "active", "inactive", etc.)
const elementValue = 25;          // TODO: valor numérico para clasificar (ocupación, stock, puntaje…)
const elementType = "ruta-H26";           // TODO: tipo o categoría (string)
const elementInfo = {conductor:"cesar",
    placa_del_bus:"boq890",
    año_mes:"2026-03"
};           // TODO: objeto con información adicional opcional (puede ser null)

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

// TODO: Clasifica el elemento en al menos 3 niveles según elementValue.
// Ejemplo de estructura:
// let classification;
// if (elementValue >= ...) {
//   classification = "...";
// } else if (elementValue >= ...) {
//   classification = "...";
// } else {
//   classification = "...";
// }

let classification ; 
if (elementValue>=30){
    classification="capacidad media "}
    else if (elementValue>= 25)
        {classification =" capacidad baja "}
    else{ classification = "capacidad alta "}
    // TODO: implementar if/else if/else

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

// TODO: Usa el ternario para determinar un estado de dos opciones.
// Ejemplo: const statusLabel = elementStatus === "active" ? "Activo" : "Inactivo";

const statusLabel = elementStatus=== "active"? "activo": "inactivo";
const statusInfo = elementInfo  === "en mantenimiento "? "en mantenimiento": "en trancito ";
 // TODO: implementar con ternario

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

// TODO: Usa switch sobre elementType para asignar una etiqueta.
// Ejemplo:
// switch (elementType) {
//   case "typeA": typeLabel = "..."; break;
//   case "typeB": typeLabel = "..."; break;
//   default: typeLabel = "Tipo desconocido";
// }

let typeLabel;
switch (elementType){
    case "bus":typeLabel="bus troncal";break;
    case "alimentador " :trypelabel="bus alimentador ";break;
    case "zonal":typeLabel="bus zonal";break;
    case "metro":typeLabel="bus metro";break;
      default:
    typeLabel = "tipo de transporte desconocido";
 } // TODO: implementar con switch

// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

// TODO: Usa ?? para obtener un valor de fallback cuando sea null o undefined.
// Ejemplo: const displayName = elementName ?? "Sin nombre";

const displayName = elementName ?? "Sin nombre";
const infoDetail = elementInfo?.placa_del_bus ?? "Sin información adicional";       // TODO: elementInfo?.detail ?? "Sin información adicional"

// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

// TODO: Accede de forma segura a una propiedad de elementInfo.
// Ejemplo: const location = elementInfo?.location ?? "Ubicación no especificada";
const safeProperty = elementInfo?.conductor ?? "Conductor no especificado";
// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

// TODO: Muestra la ficha en consola con template literals (sin concatenación +)
// Incluye todos los resultados de las secciones anteriores

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));


console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Propiedad adicional: ${safeProperty}`);

console.log("=".repeat(40));
