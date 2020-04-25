<template>
  <section class="education">
    <h2 class="section-title">
      {{ educationLabel }}
    </h2>
    <ul class="education-list">
      <li
        v-for="(item, index) in education"
        :key="index"
        class="education-list__elem"
      >
        <span class="education-list__place">
          {{ item.place }}
        </span>
        <span class="education-list__specialization">
          {{ item.specialization }}
        </span>
        <span class="education-list__years">
          {{ item.years }}
        </span>
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

.education {
  display: flex;
  flex-direction: column;
  grid-area: educ;
  margin: 0 0 3rem 0;
}

.education-list {
  list-style: none;
  padding-left: 0;

  &__elem {
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }

  &__place {
    font-size: 1rem;
    font-weight: 700;
  }

  &__specialization {
    font-size: 0.8rem;
    font-weight: 700;
  }

  &__years {
    font-size: 0.85rem;
    color: rgba(0, 0, 0, 0.7);
  }
}
</style>
