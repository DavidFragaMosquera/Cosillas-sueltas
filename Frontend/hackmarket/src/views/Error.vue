<template>
    <div>
      <vue-headful title="ERROR" />
        <h1>
          ERROR
        </h1>
        <h2>404</h2>
        <p>
          Esta pagina no existe :(
        </p>
        <footercustom></footercustom>
    </div>
    
</template>

<script>
import footercustom from '@/components/FooterCustomTab.vue'
export default {
    name:'Error',
    components: { footercustom }
};
</script>

<style scoped>
div{
  padding-top: 3rem;
  background: black;
  color: white;
  padding-bottom: 20rem;
}
h2{
  font-size: 3rem;
}
p{
  font-size: 2rem;
}
</style>