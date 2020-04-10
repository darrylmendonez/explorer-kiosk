<template>
  <div id="admin">
    <div class="inner-wrapper">
      <header class="admin-header">
        <h1>
          Administrator
          <span class="thin-text">Settings</span>
        </h1>
      </header>

      <div class="selection-container">
        <AdminSelection v-for="(area, index) of areas" :key="index" :area="area" :therapy="therapy"></AdminSelection>
      </div>
      <button
        class="btn-start"
        :disabled="state.myeloma.length === 0 && state.lymphoma.length === 0"
        @click="startApp"
      >
        Start
        <span class="icon-triangle"></span>
      </button>
    </div>
    <Logo/>
    <ProjectCode/>
    <FooterDisclaimer/>
    <LandingBg/>
    <div class="quit-hotspot" v-longpress="() => toggleModal('confirm')"></div>

    <Modal
      @toggle-modal="toggleModal"
      name="confirm"
      v-show="state.modalIsOpen && state.showModal === 'confirm'"
    />
  </div>
</template>

<script>
import Router from '@/router';
import copy from '@/data/copy.json';
import { store } from '@/store.js';
import AdminSelection from '@/components/AdminSelection.vue';
import Logo from '@/components/Logo.vue';
import ProjectCode from '@/components/ProjectCode.vue';
import LandingBg from '@/components/LandingBg.vue';
import { LongpressDirective } from '@/directives/LongpressDirective';
import Modal from '@/components/Modal.vue';
import FooterDisclaimer from '@/components/FooterDisclaimer.vue';
export default {
  name: 'Admin',
  components: {
    AdminSelection,
    LandingBg,
    ProjectCode,
    Logo,
    LongpressDirective,
    Modal,
    FooterDisclaimer,
  },
  data: function() {
    return {
      router: Router,
      therapy: copy.therapy,
      areas: copy.areas,
      state: store.state,
    };
  },
  watch: {},
  methods: {
    startApp: function() {
      this.$router.push('/home');
    },
    toggleModal: function(id) {
      this.state.modalIsOpen = !this.state.modalIsOpen;
      this.state.showModal = id || '';
    },
  },
};
</script>

<style lang="scss" scoped>
#admin {
  position: relative;
  height: inherit;
  width: inherit;
}

.inner-wrapper {
  z-index: 2;
  height: 900px;
  background-image: linear-gradient(
    to right bottom,
    rgba($grey-light, 0.65),
    rgba($grey-light2, 0.65)
  );
  padding: 76px 105px 105px;
}
.admin-header {
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 106px;
    text-transform: uppercase;

    .thin-text {
      font-weight: $font-weight-light;
    }
  }
}

.selection-box {
  // width: 50%;
  position: relative;
  left: 44%;
  top: 40px;
  margin-bottom: 60px;
}

.btn-start {
  border: none;
  background: none;
  font-size: 56px;
  color: $blue-dark;
  font-weight: $font-weight-light;
  position: absolute;
  bottom: 65px;
  right: 65px;
  display: flex;
  align-items: center;

  .icon-triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 45px 0 45px 45px;
    border-color: transparent transparent transparent $blue-dark;
    margin-left: 2.5rem;
  }

  &[disabled] {
    color: $grey-dark;

    .icon-triangle {
      border-color: transparent transparent transparent $grey-dark;
    }
  }
}

.project-code {
  position: absolute;
  bottom: 4rem;
  right: 4rem;
  color: #fff;
  font-size: 2rem;
  z-index: 25;
}

.quit-hotspot {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 5rem;
  height: 5rem;
  z-index: 10000;
}
</style>