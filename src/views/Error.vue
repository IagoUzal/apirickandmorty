<template>
  <div class="error">
    <h1>
      Upsss...😱
    </h1>
    <p @click="goHome()">No hay nada aquí vuelve al home</p>
  </div>
</template>

<script>
export default {
  name: "Error",
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.error p {
  font-size: 1.2rem;
  margin-top: 2rem;
  cursor: pointer;
  color: #594fff !important;
}
</style>
