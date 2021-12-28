<template>
  <div id="app">
    <AppLayout>
      <router-view/>
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from "./layouts/AppLayout";

export default {
  name: 'App',
  components: {
    AppLayout
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Manrope';
  src: url('webfonts/Manrope-Medium.woff2') format('woff2');
}

:root {
  --primary-color: #2563eb;
  --link-active-color: #60a5fa;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Manrope',serif;
}


body {
  font-family: 'Manrope',serif;
}

.router-link-active,
.router-link-exact-active {
  background: #60a5fa;
  border-radius: 8px;
  color: #FFFFFF;
  text-decoration: none;
}

.display__block {
  display: block;
}

.flex__column-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.flex__row-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.width-full {
  width: 100%;
}

.pagination{
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 58px;
  padding: 14px 0 14px 14px;
  font-size: 16px;
  line-height: 24px;

  &__item,
  &__prev-button,
  &__next-button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    border: 0.1px solid #d1d5db;
  }

  &__item{
    border-right: none;
  }

  &__item.active{
    background-color: var(--primary-color);
    color: white;
  }

  &__prev-button{
    border-right: none;
    border-bottom-left-radius: 5px;
    border-top-left-radius:5px ;

    a p{
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }
  }

  &__next-button{
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    a p{
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }
  }
}
</style>
