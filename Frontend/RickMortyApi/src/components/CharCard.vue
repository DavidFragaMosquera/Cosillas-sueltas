<template>
<div class="gral">
  <div class="card" v-for="char in chars" :key="char.id"
  >
      <p>
        <img width="95%" :src="char.image">
      </p>

      <p class="id">
        {{char.id }}
      </p>

      <h2 >
          {{ char.name }}
      </h2>

      <p class="estado" :class="{green: char.status === 'Alive', red: status !== 'Alive'}">
          {{ char.status }}
      </p>
  
      <p  class="gend"> 
        <b style="color:rgb(78, 90, 100)">Gender:</b>
        {{ char.gender }} 
      </p>

        <b style="color:rgb(78, 90, 100)"> Specie:</b>
          {{ char.species }} 
      <p>
        <b style="color:rgb(78, 90, 100)"> Origin:</b>
          {{ char.origin.name }}
      </p>

      <p>
        <b style="color:rgb(78, 90, 100)"> Last location:</b>
         {{ char.location.name }}
      </p> 
     
</div>
  </div>
</template>

<script>
export default {
  name: 'ChardCard',
  props: {
    chars: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap');

.red{
  
  color: red;
}
.green{
  
 color:rgb(76, 211, 23);
}
div{
background: rgb(24, 22, 22);
margin: 0 auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
 
}
.gral{
  padding: 3rem;


}
.card{
    width: 20%;
    margin: 1rem;
    padding: 2rem; 
    background: rgb(32, 24, 24);
    color: rgb(76, 211, 23); 
    box-shadow: 3px 3px 4px 5px  rgb(78, 90, 100);
    border-radius: 2%;
    display: inline-block; 
    padding: 2rem;
    font-size: 1.2rem; 
}
img{
  transition: transform .9s ease;
  border-radius:5% ;
  box-shadow: 0px 8px 6px -6px rgb(78, 90, 100);  

}
img:hover{
  transform: scale(1.15);
  border-radius: 5%;
  object-fit: cover;
  width: 100%;
  box-shadow: 0px 8px 6px -6px rgb(78, 90, 100);  
}

h2{
  font-size: 2rem;
  font-weight: bold;
  color: #01B4C6;
  font-family: 'Chelsea Market', sans-serif;
  
}
.id{
  color:#01B4C6;
  text-decoration: overline;
  font-size: 1.5rem;
}

.estado{
  font-size: 1.3rem;
  font-weight: bold;
  text-decoration: underline;
}

</style>