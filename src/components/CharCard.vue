<template>
  <div>
    <div class="card">
      <div class="logo_card">
        <img class="logo" alt="Vue logo" src="../assets/logo.png" />
      </div>
      <div class="card_item" v-for="item in chars" :key="item.id">
        <div class="card_header">
          <img :src="item.image" alt="" />
          <h3>
            {{ item.name }}
          </h3>
        </div>
        <div class="card_body">
          <p><span class="colorOne">ID:</span> {{ item.id }}</p>
          <p><span class="colorTwo">Especie:</span> {{ item.species }}</p>
          <p><span class="colorTwo">Genero:</span> {{ item.gender }}</p>
          <p>
            <span class="colorTwo">Estado:</span>
            <span
              :class="{
                green: item.status === 'Alive',
                red: item.status === 'Dead',
                orange: item.status === 'unknown',
              }"
            >
              {{ item.status }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharCard",
  props: {
    chars: Array,
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
.card_item {
  border: 2px solid black;
  border-radius: 6px;
  text-align: left;
}

.card_header {
  background: #f0f0f0;
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
}

.card_header img {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  border: 4px solid #594fff;
  align-self: center;
}

.card_header h3 {
  align-self: center;
}

.card_body {
  padding: 1rem;
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

.colorOne {
  color: #594fff;
  font-weight: 700;
}

.colorTwo {
  color: #161617;
  font-weight: 700;
}

.green {
  background-color: #00bfa6;
  font-weight: 400;
  color: #fff;
  border-radius: 10px;
  padding: 0.1rem 0.25rem 0.1rem 0.1rem;
  margin-left: 0.25rem;
}

.red {
  background-color: #f50057;
  font-weight: 400;
  color: #fff;
  border-radius: 10px;
  padding: 0.1rem 0.25rem 0.1rem 0.1rem;
  margin-left: 0.25rem;
}

.orange {
  color: #f9a826;
  font-weight: 700;
}
</style>
