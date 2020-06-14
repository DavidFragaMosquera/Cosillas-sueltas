<template>
  <div>
    <vue-headful title="About" />
    <menucustom></menucustom>
    <div class="about">
      <h2> HackaMarket</h2>
      <p>
        Ultimo proyecto del modulo frontend para hackaboss.
      </p>
      <p>Si quieres saber más sobre mi trabajo:</p>
      <button>
        <a href="https://es.linkedin.com/in/david-fraga-mosquera-07b73888">Pulsa aqui</a> 
      </button>
    </div>
  </div>
</template>

<script>
import menucustom from "@/components/MenuCustom.vue";
export default {
  name: "About",
  components: { menucustom },
};
</script>

<style scoped>
  .about{
    text-decoration: none;
  }
</style>