<template>
  <component :is="layout">
    <slot/>
  </component>
</template>

<script>
import AppLayoutDefault from "./AppLayoutDefault";
import AppDashboard from "./AppDashboard";

export default {
  name: "AppLayout",
  components: {
    AppLayoutDefault,
    AppDashboard,
  },
  computed: {
    layout() {
      if (this.$route.meta?.layout) {
        return this.$route.meta.layout
      }
      return 'AppLayoutDefault'
    }
  }
};
</script>
