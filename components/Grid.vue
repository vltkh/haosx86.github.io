<template>
  <div class="wrapper wrapper_shadow">
    <Header :lang="lang" />
    <main class="main-grid">
      <div class="wrapper">
        <Experience :lang="lang" />
      </div>
      <Skills :lang="lang" />
      <Education :lang="lang" />
      <Language :lang="lang" />
      <Interests :lang="lang" />
      <PetProjects :lang="lang" />
    </main>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import Header from './Header.vue'
import Experience from './Experience.vue'
import Skills from './Skills.vue'
import Education from './Education.vue'
import Language from './Language.vue'
import Interests from './Interests.vue'
import PetProjects from './PetProjects.vue'

export default Vue.extend({
  components: {
    Header,
    Experience,
    Skills,
    Education,
    Language,
    Interests,
    PetProjects
  },
  props: {
    lang: {
      type: String,
      required: true,
      default: 'en'
    } as PropOptions<string>
  }
})
</script>

<style lang="less">
@import '~assets/global.less';

.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;

  &_shadow {
    // prettier-ignore
    .desktop({
      box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
      max-width: 1000px;
      margin: 5px auto 30px auto;
    });
  }
}

.main-grid {
  display: grid;
  padding: 3rem;
  grid-template:
    'main skill' auto
    'proj educ' auto
    'proj lang' auto
    'proj ints' auto / auto 225px;
  background: #fff;

  // prettier-ignore
  .mobile({
    padding: 1.5rem;
    grid-template:
    'main' auto
    'proj' auto
    'skill' auto
    'educ' auto
    'lang' auto
    'ints' auto / auto;
  });
}
</style>
