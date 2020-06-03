<template>
  <div class="infoCard">
    <div class="container_infocard" v-for="item in info" :key="item.id">
      <div class="card_header">
        <img :src="item.img" alt="" />
        <h3>{{ item.name }}</h3>
      </div>
      <div class="card_body">
        <p><a :href="item.web">Visita su web</a></p>
        <p><a :href="item.linkedin">Ver perfil en linkedin</a></p>
        <p>{{ item.tag }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    info: Array,
  },
};
</script>

<style scoped>
.infoCard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  max-width: 600px;
  margin: 4rem auto;
  gap: 2rem;
}

.container_infocard {
  background: #f0f0f0;
  padding: 2rem;
  border-radius: 6px;
  border: 2px solid #594fff;
}

.card_header {
  margin-bottom: 1rem;
}

.card_header img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
}
</style>
