 
 <template>
  <div>
    <p>{{ copyright }}</p>
  </div>
</template>

<script>
export default {
  name: "footercustom",
  data() {
    return {
      copyright: "🔵 David Fraga Mosquera, 1990 || 2020 🔵" ,
    };
  },
};
</script>

<style scoped>
p {
  font-family: sans-serif;
  font-size: 0.8rem;
  margin-top: 2rem;
  color: grey;
}
</style>