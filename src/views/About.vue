<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <InfoCard :info="info"></InfoCard>
  </div>
</template>

<script>
import InfoCard from "@/components/InfoCard.vue";

export default {
  name: "About",
  components: {
    InfoCard,
  },
  data() {
    return {
      title: "Mini taller Api Rick and Morty con Vue y Axios",
      info: [
        {
          name: "Desire M Carmona",
          img: "https://desiremcarmona.com/img/me.6e9e45a6.png",
          web: "https://desiremcarmona.com",
          linkedin:
            "https://www.linkedin.com/in/desir%C3%A9-m-carmona-040438145/",
          tag: "My Teacher! 👩‍💻",
        },
        {
          name: "Iago Uzal",
          img:
            "https://lh3.googleusercontent.com/a-/AOh14GiFajwUDbo2eKByEeP217XY4gJfbQfqU_Fq_n7dgmM=s96-c-rg-br100",
          web: "Estamos en ello",
          linkedin: "https://www.linkedin.com/in/iago-alvarez-uzal-907a4728/",
          tag: "Student 👨‍🎓",
        },
      ],
    };
  },
};
</script>
