<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" :class="name">
        <div class="modal-container">
          <div class="modal-body">
            <div class="modal-content">
              <div class="inner-wrapper">
                <template v-if="name === 'references'">
                  <div class="btn-close" @click="$emit('toggle-modal', '')">
                    <img src="@/assets/icon-x.svg" alt="">
                  </div>
                  <h1>References</h1>
                  <div class="refs-container" v-for="(refs, index) of references" :key="index">
                    <h2 class="vid-title" v-if="refs.type === 'video'">Additional References from Video:</h2>
                    <div class="list-container columns" v-if="refs.columns">
                      <ol class="modal-list" :start="refs.leftIndex ? refs.leftIndex : 1">
                         <li v-for="(ref, index) of refs.left" :key="index"><span v-html="ref"></span></li>
                      </ol>

                      <ol class="modal-list" :start="refs.rightIndex">
                         <li v-for="(ref, index) of refs.right" :key="index"><span v-html="ref"></span></li>
                      </ol>
                    </div>

                    <div class="list-container" v-else>
                      <ol class="modal-list">
                        <li v-for="(ref, index) of refs" :key="index"><span v-html="ref"></span></li>
                      </ol>
                    </div>
                  </div>   
                </template>

                <template v-if="name === 'admin'">
                  <p class="warning-copy">Are you sure you want to leave the app?</p>
                  <div class="buttons-container">
                    <BlueButton class="btn-warning" @click.native="$emit('toggle-modal', '')">No</BlueButton>
                    <BlueButton class="btn-warning"  @click.native="goToAdmin">Yes</BlueButton>
                  </div>
                </template>

                <template v-if="name === 'timeout'">
                  <p>{{touchTimerService.videoTimeRemaining === touchTimerService.videoTimeout ? '&nbsp;' : touchTimerService.videoTimeRemaining + 1}}</p>
                  <p>Are you still there?</p>
                  <div class="buttons-container">
                    <button @click="dismissTimeout">Continue</button>
                    <router-link tag="button" to="/home">Back to home</router-link>
                  </div>
                </template>

                <template v-if="name === 'confirm'">
                  <p>Are you sure you want to close the application?</p>
                  <div class="buttons-container">
                    <button @click="quitApp">Yes</button>
                    <button @click="$emit('toggle-modal', '')">No</button>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-overlay" @click="$emit('toggle-modal', '')"></div>
    </div>
  </transition>
</template>

<script>
import BlueButton from "@/components/BlueButton.vue";
import Router from "@/router";
import { TouchTimerService } from '@/services/TouchTimerService';

export default {
  name: "Modal",
  components: {
    BlueButton
  },
  props: ["name", "references"],
  data: function() {
    return {
      router: Router,
      touchTimerService: TouchTimerService
    };
  },
  methods: {
    dismissTimeout: function() {
      this.touchTimerService.clearVideoTimeout();
      this.$emit('toggle-modal', '');
    },
    goToAdmin: function() {
      this.$emit("toggle-modal", "");
      this.router.push("/admin");
    },
    quitApp: function() {
      if (window && window.process && window.process.type) {
        const { ipcRenderer } = require("electron");
        ipcRenderer.send("quitApp");
      } else {
        this.$emit('toggle-modal', '');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.admin .modal-container {
  width: 70rem;
  height: 20rem;

  .warning-copy {
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
  }
}

.timeout,
.confirm {
  .modal-container {
    width: 70rem;
    font-size: 40px;
  }

  .modal-content {
    height: auto;
  }

  .inner-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  button {
    border: 1px solid $blue-dark;
    background: $blue-dark;
    color: $white;
    padding: 1.5rem 3rem;
    border-radius: 25px;
    margin: 0 1.5rem;
    line-height: 1;
    &:last-child {
      background: $white;
      color: $blue-dark;
    }
  }
}

.buttons-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
}

.inner-wrapper {
  height: auto;
  padding: 4rem;
}

h1 {
  font-size: 8rem;
}

.list-container {
  display: flex;
  justify-content: space-between;

  &.columns {
    .modal-list {
      width: 48%;
    }
  }
}

.vid-title {
  font-size: 2.8rem;
}

.modal-overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 1920px;
  height: 1080px;
  background-color: rgba($black, 0.14);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-list {
  font-size: 2.1rem;

  li {
    font-size: 28px;
    margin-bottom: 1.5rem;
    position: relative;
  }
}

.btn-close {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
  border: none;
  border-radius: 50%;
  background: $blue-dark;
  color: $white;
  font-size: 5rem;

  img {
    display: block;
    width: 50%;
    margin: 0 auto;
  }
}

.modal-content {
  height: 1020px;
}

// The styles below are from Vue's own example Modal component:
// https://vuejs.org/v2/examples/modal.html
.modal-mask {
  position: fixed;
  z-index: 9997;
  top: 0;
  left: 0;
  width: 1920px;
  height: 1080px;
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 97%;
  margin: 0px auto;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  position: relative;
  z-index: 9999;
}

.modal-body {
  margin: 2rem 0;
}

.modal-default-button {
  float: right;
}

/*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>