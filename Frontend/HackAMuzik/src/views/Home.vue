<template>
<div>
  <vue-headful title="Home" />
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
<footercustom></footercustom>
</div>
</template>

<script>
import api from '@/api/index.js'
import toptagstab from '@/components/TopTagsTab'
import footercustom from '@/components/FooterCustomTab'

export default {
  name: 'Home',
  components: { toptagstab,
                footercustom },
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

