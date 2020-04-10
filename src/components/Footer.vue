<template>
  <footer>
    <div class="logo">
      <Logo/>
    </div>
    <div class="video-button" @click="$emit('toggle-section', 'videos')" v-if="videos">
      <button :class="state.activeSection === 'videos' ? 'active': ''">Video</button>
    </div>
    <div class="clinical-trials-button" @click="$emit('toggle-section', 'trials')">
      <button :class="state.activeSection === 'trials' ? 'active': ''">Clinical Trials</button>
    </div>
    <div class="refs-home">
      <FooterButton @click.native="$emit('toggle-modal','references')">
        <img class="icon-refs" src="@/assets/ref_icon.svg" alt="">
      </FooterButton>
      <router-link to="/home">
        <FooterButton>
          <img class="icon-home" src="@/assets/home-icon.svg" alt="">
        </FooterButton>
      </router-link>
    </div>
    <div style="color:#000;">
      <ProjectCode/>
    </div>
  </footer>
</template>

<script>
import { store } from "@/store.js";
import Logo from "@/components/Logo.vue";
import FooterButton from "@/components/FooterButton.vue";
import ProjectCode from "@/components/ProjectCode.vue";

export default {
  name: "Footer",
  props: ["videos"],
  components: {
    Logo,
    FooterButton,
    ProjectCode
  },
  data: function() {
    return {
      state: store.state
    };
  }
};
</script>

<style lang="scss" scoped>
footer {
  height: 100px;
  margin-top: 36px;
  background-color: $white;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  font-size: 36px;
  position: absolute;
  width: 100%;
  bottom: 0;

  & > div {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 25%;
    margin-left: 40px;
  }

  .video-button {
    width: 25%;
    justify-content: center;
  }

  .clinical-trials-button {
    width: 25%;
    justify-content: center;
  }

  .video-button,
  .clinical-trials-button {
    button {
      background: none;
      line-height: 84px;
      text-align: center;
      border-top: 12px solid transparent;
      border-left: 0;
      border-right: 0;
      border-bottom: 0;
      text-transform: uppercase;
      color: $blue-dark;
      font-weight: $font-weight-bold;

      &.active {
        min-width: 212px;
        border-top: 12px solid $money-bag;
        color: $money-bag;
        font-weight: bold;
      }
    }
  }

  .refs-home {
    width: 25%;
    margin-right: 40px;
    text-align: right;
    justify-content: flex-end;

    a {
      margin-left: 25px;
      background: lightgrey;
      display: inline-flex;
      width: 5.5rem;
      height: 5.5rem;
      border: none;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      -webkit-user-select: none;
    }
  }

  .project-code {
    position: absolute;
    top: -4rem;
    right: 4rem;
    font-size: 1.5rem;
  }
}
</style>
