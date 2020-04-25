<template>
  <section class="experience">
    <h2 class="section-title" v-text="experienceLabel" />
    <div class="experience-timeline">
      <article
        v-for="(experienceElem, index) in experience"
        :key="index"
        class="experience-article"
      >
        <header class="experience-article__header">
          <h2
            class="experience-article__position"
            v-text="experienceElem.position"
          />
          <span
            class="experience-article__company"
            v-text="experienceElem.company"
          />
          <span class="experience-article__dates">
            {{ experienceElem.startDate }} - {{ experienceElem.tillDate }}
          </span>
        </header>
        <h3
          class="experience-article__subheader"
          v-text="keyResponsobilitiesLabel"
        />
        <ul class="experience-article__responsobilities-list">
          <li
            v-for="(resp, respIdx) in experienceElem.keyResponsobilities"
            :key="respIdx"
            class="experience-article__responsobility"
            v-text="resp"
          />
        </ul>
      </article>
    </div>
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
.experience {
  display: flex;
  flex-direction: column;
  grid-area: main;
  padding-right: 30px;
}

.experience-timeline {
  padding-left: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  &:before {
    content: '';
    display: inline-block;
    width: 3px;
    height: 100%;
    background: #aab4c3;
    left: 6px;
    top: 4px;
    position: absolute;
  }
}

.experience-article {
  padding-bottom: 3rem;
  &:last-child {
    padding-bottom: 1rem;
  }
  position: relative;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    left: -2rem;
    top: 3px;
    width: 15px;
    height: 15px;
    border: 4px solid #58677c;
    background: white;
    border-radius: 50%;
  }

  &__header {
    display: grid;
    grid-template:
      'title company' auto
      'dates dates  ' auto / auto auto;
    margin-bottom: 0.5rem;
  }

  &__position {
    grid-area: title;
    font-size: 1.125rem;
    color: #434e5e;
    line-height: 1;
    margin-bottom: 0.3rem;
  }

  &__company {
    grid-area: company;
    text-align: right;
    color: #58677c;
    font-size: 0.875rem;
    font-weight: 500;
  }

  &__dates {
    grid-area: dates;
    font-size: 0.875rem;
    font-style: italic;
  }
}
</style>
