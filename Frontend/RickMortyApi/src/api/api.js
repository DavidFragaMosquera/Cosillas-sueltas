// INICIANDO EL USO DE AXIOS PARA LA API
const axios = require('axios').default;

// BASE URL DE LA API
const apiUrl = 'https://rickandmortyapi.com/api';

// FUNCION PARA COHER TODOS LOS CHARS(PERSONAJES)
function getAll(){
    return axios
    .get(`${apiUrl}/character`)
}

function getChar(id){
    return axios
    .get(`${apiUrl}/character/`+id)
}

export default{
    getAll,
    getChar
}