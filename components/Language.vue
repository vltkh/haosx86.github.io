<template>
  <div class="language">
    <h2 class="aside-title">
      {{ languageLabel }}
    </h2>
    <div
      v-for="(item, index) in language"
      :key="index"
      class="language-element"
    >
      <h3 class="language-element__language">
        {{ item.language }}
        <span class="language-element__level"> ({{ item.level }}) </span>
      </h3>
    </div>
  </div>
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

<style lang="less" scoped>
.language {
  display: flex;
  flex-direction: column;
  grid-area: lang;
}

.language-element {
  display: flex;

  &__language {
    font-size: 1rem;
    color: var(--section-title-color);
    font-weight: 700;
  }

  &__level {
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.6);
  }
}
</style>
