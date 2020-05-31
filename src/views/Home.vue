<template>
  <div>
    <div class="search">
      <label for="bySearch">Busca tu personaje</label>
      <input
        v-model="search"
        id="search"
        name="bySearch"
        type="search"
        placeholder="Busqueda..."
      />
      <button class="buttonOverlay" @click="seeAll">Buscar</button>
    </div>
    <!-- <div class="logo_card">
        <img class="logo" alt="Vue logo" src="../assets/logo.png" />
      </div> -->
    <charCard :chars="filteredChars" v-show="seeAll"></charCard>
  </div>
</template>

<script>
// @ is an alias to /src
import api from "@/api/api.js";
import CharCard from "@/components/CharCard.vue";

export default {
  name: "Home",
  components: {
    CharCard,
  },
  data() {
    return {
      chars: [],
      search: "",
      seeAll: true,
    };
  },
  computed: {
    filteredChars() {
      //SI NO ESCRIBIMOS NADA
      if (!this.search) {
        return this.chars;
      }
      //  FILTER PARA FILTRAR LAS BUSQUEDAS DEL ARRAY
      return this.chars.filter(
        (char) =>
          char.name.toLowerCase().includes(this.search.toLowerCase()) ||
          char.gender.toLowerCase().includes(this.search.toLowerCase()) ||
          char.status.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  created() {
    api.getAll().then((response) => (this.chars = response.data.results));
  },
};
</script>

<style scoped>
.search {
  margin-bottom: 3rem;
}

label {
  margin-right: 1rem;
  color: #161617;
  font-weight: 700;
}

input {
  padding: 0.25rem;
}

button {
  margin-left: 1.25rem;
  border: none;
  font-family: "Muli", sans-serif;
  font-weight: 700;
  cursor: pointer;
  background: transparent;
}

.buttonOverlay {
  padding: 10px 25px;
  position: relative;
  color: #fff;
}

.buttonOverlay::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  top: 5px;
  right: 5px;
  background-color: #5778f3;
  z-index: -1;
  transition: transform 0.2s ease-in-out;
}

.buttonOverlay::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 1px solid #474e51;
}

.buttonOverlay:hover::before {
  transform: translate(6px, -4px);
}
</style>
