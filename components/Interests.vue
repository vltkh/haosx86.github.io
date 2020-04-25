<template>
  <section class="interests">
    <h2 class="section-title" v-text="interestsLabel" />
    <ul class="interests-list">
      <li
        v-for="(interest, index) in interests"
        :key="index"
        class="interests-list__elem"
        v-text="interest"
      />
    </ul>
  </section>
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
@import '~assets/global.less';

.interests {
  display: flex;
  flex-direction: column;
  grid-area: ints;
}

.interests-list {
  list-style: none;
  padding-left: 0;

  &__elem {
    margin-bottom: 0.25rem;
    font-size: 1rem;
    font-weight: 700;
  }
}
</style>
