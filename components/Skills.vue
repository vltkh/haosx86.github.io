<template>
  <div class="skills">
    <h2 class="aside-title">
      {{ skillsLabel }}
    </h2>
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
  </div>
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

<style lang="less" scoped>
.skills {
  display: flex;
  flex-direction: column;
  grid-area: skill;
  min-height: 200px;
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
</style>
