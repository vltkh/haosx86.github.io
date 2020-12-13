<template>
  <section class="projects">
    <h2 class="section-title" v-text="petProjectsTitle" />
    <article
      v-for="(petProjectElem, index) in petProjects"
      :key="index"
      class="projects__project"
    >
      <h3 v-text="petProjectElem.name" />
      <p
        v-for="(description, descriptionIndex) in petProjectElem.description"
        :key="descriptionIndex"
        class="projects__description-p"
        v-text="description"
      />
      <ul>
        <li
          v-for="(petProjectLink, linkIndex) in petProjectElem.links"
          :key="linkIndex"
        >
          <a
            class="projects__link"
            target="_blank"
            :href="petProjectLink.url"
            v-text="petProjectLink.text"
          />
        </li>
      </ul>
    </article>
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
.projects {
  display: flex;
  flex-direction: column;
  grid-area: proj;
  min-height: 200px;
  padding-right: 30px;
  margin: 0 0 3rem 0;

  &__project {
    margin: 0 0 1rem 0;
  }

  &__link {
    color: #315d9e;
  }

  &__description-p {
    text-indent: 1rem;

    &:last-of-type {
      margin: 0 0 16px 0;
    }
  }
}
</style>
