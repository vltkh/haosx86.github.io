<template>
  <section class="projects"></section>
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

<style lang="less">
.projects {
  display: flex;
  grid-area: proj;
  min-height: 200px;
}
</style>
