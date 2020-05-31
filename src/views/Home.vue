<template>
  <div>
    <div class="search">
      <label for="search">Busca tu personaje</label>
      <input
        v-model="search"
        id="search"
        name="search"
        type="search"
        placeholder="Busqueda..."
      />
    </div>
    <div class="card">
      <div class="logo_card">
        <img class="logo" alt="Vue logo" src="../assets/logo.png" />
      </div>
      <CharCard
        v-for="item in chars"
        :key="item.id"
        :charName="item.name"
        :charId="item.id"
        :charSpecie="item.species"
        :charGender="item.gender"
        :charStatus="item.status"
        :charImage="item.image"
      ></CharCard>
    </div>
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
    };
  },
  created() {
    api.getAll().then((response) => (this.chars = response.data.results));
  },
};
</script>

<style scoped>
.card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: auto;
  gap: 2rem;
}

.logo_card {
  background: #594fff;
  border: 2px solid #594fff;
  border-radius: 6px;
  display: grid;
  justify-content: center;
  align-content: center;
}

.logo {
  width: 200px;
  height: 150px;
}

.search {
  margin-bottom: 2rem;
}

label {
  margin-right: 1rem;
  color: #161617;
  font-weight: 700;
}

input {
  padding: 0.25rem;
}
</style>
