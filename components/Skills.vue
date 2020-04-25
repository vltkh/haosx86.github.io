<template>
  <section class="skills">
    <h2 class="section-title" v-text="skillsLabel" />
    <h3 class="skill-type">
      Frontend
    </h3>
    <ul class="skills-list">
      <li
        v-for="(skill, index) in skills.frontend"
        :key="index"
        class="skill-list-elem"
      >
        <span class="skill-name" v-text="skill.technology" />
        <ProgressBar :progress="skill.level" />
      </li>
    </ul>

    <h3 class="skill-type">
      Backend
    </h3>
    <ul class="skills-list">
      <li
        v-for="(skill, index) in skills.backend"
        :key="index"
        class="skill-list-elem"
      >
        <span class="skill-name" v-text="skill.technology" />
        <ProgressBar :progress="skill.level" />
      </li>
    </ul>

    <h3 class="skill-type" v-text="otherSkillsLabel" />
    <ul class="other-skills">
      <li
        v-for="(skill, index) in skills.other"
        :key="index"
        class="other-skills__elem"
        v-text="skill"
      />
    </ul>
  </section>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import content from '../content'
import ProgressBar from './ProgressBar.vue'

type contentType = { [key: string]: Object | Array<any> }

export default Vue.extend({
  components: {
    ProgressBar
  },
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
.skills {
  display: flex;
  flex-direction: column;
  grid-area: skill;
  min-height: 200px;
  margin: 0 0 3rem 0;
}

.skills-list {
  list-style: none;
  padding-left: 0;
  margin-bottom: 1.5rem;

  &-elem {
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
  }
}

.skills-type {
  font-size: 1rem;
  color: var(--section-title-color);
  font-weight: 700;
}

.skill-name {
  font-size: 0.8125rem;
  color: var(--section-title-color);
}

.other-skills {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0.5rem 0 0 0;

  &__elem {
    display: inline-block;
    padding: 0.25em 0.4em;
    margin: 0 0.3rem 0.3rem 0;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    background-color: #e8e9ea;
  }
}
</style>
