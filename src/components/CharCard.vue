<template>
  <div class="card_item">
    <div class="card_header">
      <img :src="charImage" alt="" />
      <h3>
        {{ charName }}
      </h3>
    </div>
    <div class="card_body">
      <p><span class="colorOne">ID:</span> {{ charId }}</p>
      <p><span class="colorTwo">Especie:</span> {{ charSpecie }}</p>
      <p><span class="colorTwo">Genero:</span> {{ charGender }}</p>
      <p>
        <span class="colorTwo">Estado:</span>
        <span
          :class="{
            green: charStatus === 'Alive',
            red: charStatus === 'Dead',
            orange: charStatus === 'unknown',
          }"
        >
          {{ charStatus }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharCard",
  props: {
    charName: String,
    charId: Number,
    charStatus: String,
    charSpecie: String,
    charGender: String,
    charImage: String,
  },
};
</script>

<style scoped>
.card_item {
  border: 2px solid black;
  border-radius: 6px;
  text-align: left;
}

.card_header {
  background: #f0f0f0;
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
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
