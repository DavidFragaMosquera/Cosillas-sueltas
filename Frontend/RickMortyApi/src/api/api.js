// INICIANDO EL USO DE AXIOS PARA LA API
const axios = require('axios').default;

// BASE URL DE LA API
const apiUrl = 'https://rickandmortyapi.com/api';

// FUNCION PARA COHER TODOS LOS CHARS(PERSONAJES)
function getAll(){
    return axios
    .get(`${apiUrl}/character`)
}

export default{
    getAll
}