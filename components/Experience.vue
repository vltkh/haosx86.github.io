<template>
  <div class="experience"></div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import content from '../content'

type contentType = { [key: string]: Object | Array<any> }

export default Vue.extend({
  props: {
    lang: {
      type: String,
      required: true,
      default: 'en'
    } as PropOptions<string>
  },
  data() {
    return {
      ...(content as contentType)[this.lang]
    }
  }
})
</script>

<style>
.experience {
  display: flex;
  grid-area: main;
}
</style>
