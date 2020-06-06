<template>
    <toptagstab
    :tags="tags">
    </toptagstab>
 <!--    <ul>
      <li
      v-for="tag in tags" :key="tag.id">
        ESTILO: {{ tag.name }}
        SEGUIDORES: {{ tag.reach }}
        URL: {{ tag.url }}
        TAGS USADOS: {{ tag.taggings }}
      </li>
    </ul> -->
 
</template>

<script>
import api from '@/api/index.js'
import toptagstab from '@/components/TopTagsTab'

export default {
  name: 'Home',
  components: { toptagstab },
  created(){
  api.getTopTags().then(response => (this.tags = response.data.tags.tag))
},
  data(){
    return {
      tags: []
    }
  }

}

</script>
<style scoped>

</style>
