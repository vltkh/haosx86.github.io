<template>
  <nuxt />
</template>

<style lang="less">
:root {
  --text-color: #58677c;
  --section-title-color: #434e5e;
  --h1-color: #fff;
  --h2-color: rgba(255, 255, 255, 0.9);
  --link-color: rgba(255, 255, 255, 0.6);
  --link-hover-color: #fff;
  --delimiter-color: #8d9aad;
}

a {
  color: var(--link-color);
  text-decoration: none;

  & svg path {
    fill: var(--link-color);
  }

  &:hover {
    color: var(--link-hover-color);

    & svg path {
      fill: var(--link-hover-color);
    }
  }
}

html,
body {
  font-family: monospace;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #f7f8fa;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

@-ms-viewport {
  width: device-width;
}

.aside-title {
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  color: var(--section-title-color);
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1.5px;
    background: var(--delimiter-color);
  }
}
</style>
