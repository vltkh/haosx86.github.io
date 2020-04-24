<template>
  <div class="education">
    <h2 class="aside-title">
      {{ educationLabel }}
    </h2>
    <div
      v-for="(item, index) in education"
      :key="index"
      class="education-element"
    >
      <h3 class="education-element__place">
        {{ item.place }}
      </h3>
      <p class="education-element__specialization">
        {{ item.specialization }}
      </p>
      <p class="education-element__years">
        {{ item.years }}
      </p>
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

<style scoped lang="less">
.education {
  display: flex;
  flex-direction: column;
  grid-area: educ;
  margin: 0 0 3rem 0;
}

.education-element {
  display: flex;
  flex-direction: column;

  &__place {
    font-size: 1rem;
    color: var(--section-title-color);
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
