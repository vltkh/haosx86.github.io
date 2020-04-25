<template>
  <section class="language">
    <h2 class="section-title">
      {{ languageLabel }}
    </h2>
    <ul class="language-list">
      <li
        v-for="(item, index) in language"
        :key="index"
        class="language-list__item"
      >
        <span class="language-list__language" v-text="item.language" />
        <span class="language-list__level" v-text="`(${item.level})`" />
      </li>
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

.language {
  display: flex;
  flex-direction: column;
  grid-area: lang;
  margin: 0 0 3rem 0;
}

.language-list {
  list-style: none;
  padding-left: 0;

  &__item {
    margin-bottom: 0.5rem;
  }

  &__language {
    font-size: 1rem;
    font-weight: 700;
  }

  &__level {
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.6);
  }
}
</style>
