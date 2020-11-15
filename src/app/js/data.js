/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/**
 * La función recibe varios parámetros y llama la función callback después de
 * realizar la consulta a la API y le pasa los resultados como parámetro.
 * @param {*} rUrl Dirección donde se va a conectar para recibir los datos
 * @param {*} callback Función a la que va a llamar y pasarle los datos
 * @param {*} clear True or False, indica a la función callback si debe limpiar
 * @param {*} order True or False, indica si debe hacer búsqueda ordenada
 */
function httpRequest(rUrl, callback, clear = false, order = true) {
    order ? (ordering ? rUrl += '&ordering=' + ordering : null) : null;

    fetch(rUrl).then((response) => response.json()).then((myJson) =>
        callback(myJson, clear)).catch((e) => console.log(e));
}
