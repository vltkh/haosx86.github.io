<template>
  <div
    role="progressbar"
    :aria-valuenow="progress"
    aria-valuemin="0"
    aria-valuemax="100"
    class="progress-bar-bg"
  >
    <div
      class="progress-bar"
      :style="{ transform: `translate3d(${progress - 100}%, 0, 0)` }"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  props: {
    progress: {
      type: Number,
      required: true,
      default: 0
    } as PropOptions<Number>
  }
})
</script>

<style lang="less">
.progress-bar {
  height: 100%;
  background-color: #434e5e;
  width: 100%;
  animation: progress-bar 2s;
  &-bg {
    display: flex;
    height: 0.6rem;
    overflow: hidden;
    background-color: #e9ecef;
    position: relative;
    border-radius: 3px;
  }
}

@keyframes progress-bar {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
