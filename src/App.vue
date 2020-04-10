<template>
  <div id="app">
    <AdminHotspot @toggle-modal="toggleModal" v-if="this.router.currentRoute.name !== 'Admin'"/>
    <router-view/>
    <Modal
      @toggle-modal="toggleModal"
      name="admin"
      v-show="state.modalIsOpen && state.showModal === 'admin'"
    />
  </div>
</template>

<script>
import { store } from '@/store.js';
import Router from '@/router';
import AdminHotspot from '@/components/AdminHotspot';
import Modal from '@/components/Modal.vue';

export default {
  name: 'app',
  components: {
    Modal,
    AdminHotspot,
  },
  data: function() {
    return {
      state: store.state,
      router: Router,
    };
  },
  methods: {
    toggleModal: function(id) {
      this.state.modalIsOpen = !this.state.modalIsOpen;
      this.state.showModal = id || '';
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/global.scss';

#app {
  position: relative;
  overflow: hidden;
  width: 1920px;
  height: 1080px;
  background-color: $grey-light;

  .corner {
    background-color: $blue-dark;
    width: 480px;
    height: 480px;
    position: absolute;
    top: -320px;
    right: -320px;
    transform: rotate(45deg);
  }
}
</style>
