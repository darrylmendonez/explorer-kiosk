<template>
  <!-- If modal isn't necessary -->
  <div class="hotspot-admin" v-longpress="goToAdmin"></div>

  <!-- If modal is necessary -->
  <!-- <div class="hotspot-admin" v-longpress="showAdminWarning"></div> -->
</template>

<script>
import Router from "@/router";
import { LongpressDirective } from "@/directives/LongpressDirective.js";

export default {
  name: "App",
  directives: {
    LongpressDirective
  },
  data: function() {
    return {
      router: Router
    };
  },
  methods: {
    // If modal isn't necessary
    goToAdmin: function() {
      this.router.push("/admin");
    }

    // If modal is necessary
    // showAdminWarning: function() {
    //   this.$emit("toggle-modal", "admin");
    // }
  }
};
</script>


<style lang="scss" scoped>
.hotspot-admin {
  position: absolute;
  top: 0;
  right: 0;
  width: 5rem;
  height: 5rem;
  padding: 0;
  background: none;
  z-index: 10000; // todo: make a z-index object lol
}
</style>

