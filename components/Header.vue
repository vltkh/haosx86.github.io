<template>
  <header class="header">
    <PhotoPlaceholder />
    <div class="header__info">
      <h1 class="name">
        {{ name }}
      </h1>
      <h2 class="specialization">
        {{ specialization }}
      </h2>
      <a
        class="email-link"
        :href="`mailto:${email}`"
        target="_blank"
        rel="noreferrer"
      >
        <EmailIcon />
        {{ emailLabel }}
      </a>
    </div>
    <nav class="links-nav">
      <ul class="links-list" :aria-label="headerNavLabel">
        <li class="links-list__elem">
          <a
            :href="github"
            target="_blank"
            rel="noreferrer"
            class="links-list__link"
          >
            <GithubIcon />
            <span class="links-list__link-text" v-text="github" />
          </a>
        </li>
        <li class="links-list-elem">
          <a
            :href="vk"
            target="_blank"
            class="links-list__link"
            rel="noreferrer"
          >
            <VkIcon />
            <span class="links-list__link-text" v-text="vk" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import content from '../content'
import GithubIcon from './GithubIcon.vue'
import EmailIcon from './EmailIcon.vue'
import PhotoPlaceholder from './PhotoPlaceholder.vue'
import VkIcon from './VkIcon.vue'

type contentType = { [key: string]: Object | Array<any> }

export default Vue.extend({
  components: {
    GithubIcon,
    EmailIcon,
    PhotoPlaceholder,
    VkIcon
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
.header {
  width: 100%;
  display: grid;
  padding: 1.5rem;
  grid-template-columns: 178px auto 275px;
  background: #434e5e;

  &__info {
    display: flex;
    flex-direction: column;
    padding: 0 0 0 1rem;
  }
}

.links-nav {
  display: flex;
  flex-direction: column;
}

.links-list {
  list-style: none;
  padding-left: 0;

  &__elem {
    display: flex;
    margin-bottom: 0.7rem;
  }

  &__link {
    display: flex;
    flex-direction: row;
    align-items: center;
    &-text {
      margin-left: 0.5rem;
    }
  }
}

.name {
  color: var(--h1-color);
  font-size: 2.25rem;
  letter-spacing: 0.175rem;
  font-weight: 900;
}

.specialization {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--h2-color);
}

.email-link {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: auto;
}
</style>
