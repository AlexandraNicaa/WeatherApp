/**
 * Functie pentru a face o cerere catre un endpoint si transformam raspunsul in json.
 * @param {*} input URL catre cererea noastra
 * @returns datele de la cererea noastra, transformate in obiect
 */


async function fetchAndParse(input, init) {
    const response = await fetch(input, init);
    return response.json();
}