<template>
  <div class="about">
    <vue-headful title="About" />
    <h1>A B O U T</h1>
    <h2>¿ QUIERES ESCUCHAR MUSICA MÁS ALLA DE LOS GUSTOS DE LA MASA ?</h2>
    <p>Para escuchar música fuera de la matrix chekea:  </p>
    <a href="https://open.spotify.com/user/doutax?si=zWznSzFmSCmY_eDyrbVllg">🤜 Listas spotify  🤛</a>
    <p>

    <p>
      Para este proyecto he utilizado:
    </p>
    <p>
    <a href="https://www.last.fm/api/?lang=es&">API Last FM</a>
    </p>
    <p>
    <a href="https://www.npmjs.com/package/axios">Axios</a>
    </p>
    <p>
      <a href="https://www.npmjs.com/package/vue-headful">Vue-Headful</a>
    </p>
    <footercustom></footercustom>
  </div>
</template>

<script>
import footercustom from '@/components/FooterCustomTab'

export default {
  name: 'About',
  components: { footercustom }
};
</script>

<style scoped>
h2{
  color: rgb(58, 14, 100);
  text-decoration: underline ;
}

.about{
    padding-bottom: 10rem;
}

</style>