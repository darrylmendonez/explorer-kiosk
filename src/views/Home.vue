<template>
  <div id="home">
    <div class="inner-wrapper">
      <div
        class="home-content"
        :class="(this.state.myeloma.length >= 1 && this.state.lymphoma.length === 0) || (this.state.lymphoma.length >= 1 && this.state.myeloma.length === 0) ? 'single-area' : 'multi-area'"
      >
        <div class="app-title">
          <h1>
            Car T
            <br>
            <span class="thin-text">Explorer</span>
          </h1>
        </div>

        <div class="selections-container">
          <!-- Variation 1: If multiple therapies of the same area are selected -->
          <template v-if="this.state.myeloma.length >= 1 && this.state.lymphoma.length === 0">
            <p class="instruction-copy">Select a cell therapy to begin</p>
            <div class="same-therapy">
              <router-link
                v-for="(selection, index) of this.state.myeloma"
                :key="index"
                :to="`/therapy/${selection}`"
              >
                <TherapyButton
                  v-html="copy.therapy[selection].buttonLabel"
                  @click.native="clickTracker(selection)"
                />
              </router-link>
            </div>
          </template>

          <!-- NOTE: There's only one Lymphoma therapy atm in the build rn, but leaving this here in case -->
          <template v-if="this.state.lymphoma.length >= 1 && this.state.myeloma.length === 0">
            <p class="instruction-copy">Select a cell therapy to begin</p>
            <router-link
              v-for="(selection, index) of this.state.lymphoma"
              :key="index"
              :to="`/therapy/${selection}`"
            >
              <TherapyButton
                v-html="copy.therapy[selection].buttonLabel"
                @click.native="clickTracker(selection)"
              />
            </router-link>
          </template>

          <!-- Variation 2: If therapies of both therapeutic areas are selected -->
          <template v-if="this.state.myeloma.length >= 1 && this.state.lymphoma.length >= 1">
            <p class="instruction-copy">Select a therapeutic area to begin</p>
            <div class="menu-container var-2">
              <TherapyDropdown
                v-for="(area, index) of copy.areas"
                :key="index"
                :area="area.title"
                :therapy="copy.therapy"
                :selections="state[area.id]"
              />
            </div>
          </template>
        </div>
      </div>
      <Logo/>
      <ProjectCode/>
      <FooterDisclaimer/>
    </div>
    <!-- end of inner-wrapper -->

    <LandingBg/>
  </div>
</template>

<script>
import { store } from '@/store.js';
import copy from '@/data/copy.json';
import TherapyButton from '@/components/TherapyButton.vue';
import TherapyDropdown from '@/components/TherapyDropdown.vue';
import Logo from '@/components/Logo.vue';
import ProjectCode from '@/components/ProjectCode.vue';
import LandingBg from '@/components/LandingBg.vue';
import FooterDisclaimer from '@/components/FooterDisclaimer.vue';
import { TouchTimerService } from '@/services/TouchTimerService';
export default {
  name: 'Home',
  components: {
    TherapyButton,
    TherapyDropdown,
    Logo,
    ProjectCode,
    LandingBg,
    FooterDisclaimer,
  },
  data: function() {
    return {
      state: store.state,
      copy: copy,
    };
  },
  methods: {
    clickTracker: function(selection) {
      this.resetTouchTimeout();
    },
    resetTouchTimeout: function() {
      TouchTimerService.resetTouchTimeout();
    },
  },
};
</script>

<style lang="scss" scoped>
#home {
  position: relative;
  height: 1080px;
  width: 1920px;

  .inner-wrapper {
    background: none;
    position: relative;
    height: inherit;
    z-index: 2;
    display: flex;
    align-items: center;
  }

  .app-title {
    text-transform: uppercase;
    position: relative;
    margin-left: 185px;
    margin-top: 9px;

    &:after {
      content: '';
      width: 160px;
      border: 1px solid $blue-dark;
      position: absolute;
      top: 42%;
      right: -175px;
    }

    h1 {
      font-size: 106px;
      line-height: 98px;
      text-align: right;
    }

    .thin-text {
      font-weight: $font-weight-light;
    }
  }

  .home-content {
    .selections-container {
      position: relative;
      top: 40px;
      left: 200px;
      width: 1045px;
    }

    &.single-area {
      display: flex;
      align-items: flex-start;

      // .selections-container {
      //   position: relative;
      //   top: 40px;
      //   left: 200px;
      // }
    }

    &.multi-area {
      display: flex;
      align-items: flex-start;
      position: relative;
      top: 45px;
      height: 325px;

      // .selections-container {
      //   position: relative;
      //   top: 40px;
      //   left: 200px;
      // }
    }
  }

  .instruction-copy {
    font-size: 56px;
    margin-bottom: 2rem;
    font-weight: $font-weight-light;
  }

  .menu-container {
    &.var-2 {
      display: flex;
      justify-content: center;
    }
  }

  .project-code {
    position: absolute;
    bottom: 4rem;
    right: 4rem;
    color: #fff;
    font-size: 2rem;
  }

  .same-therapy {
    .btn-therapy {
      margin: 1rem 0.5rem;
    }
  }
}
</style>

