<template>
  <div class="wrapper">
    <Header :lang="lang" />
    <main class="main-grid">
      <Experience :lang="lang" />
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

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin: 0;
}

@media screen and (min-width: 1000px) {
  .wrapper {
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.2);
    max-width: 1000px;
    margin: 30px auto;
  }
}

.main-grid {
  display: grid;
  padding: 3rem;
  grid-template:
    'main skill' auto
    'main educ' auto
    'main lang' auto
    'main ints' auto
    'proj proj' auto / auto 225px;
  background: #fff;
}
</style>
