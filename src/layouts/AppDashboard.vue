<template>
  <div class="container__layout">
    <SideBarNavigation class="sidebar__navigation"/>
    <div class="layout__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import SideBarNavigation from "../components/SideBarNavigation";
export default {
  name: "desktop",
  components: {
    SideBarNavigation
  }
};
</script>

<style lang="scss" scoped>
.container__layout {
  display: grid;
  grid-template-columns: 264px 1fr;
  height: 100vh;
  overflow: hidden;

  .sidebar__navigation {
    background: var(--primary-color);
    padding-top: 32px;
  }

  .layout__content {
    background: #f7f7f7;
    height: 100%;
    overflow-y: auto;
  }
}
</style>
