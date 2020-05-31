const axios = require("axios");
const apiUrl = "https://rickandmortyapi.com/api";

function getAll() {
  return axios.get(`${apiUrl}/character`);
}

export default { getAll };
