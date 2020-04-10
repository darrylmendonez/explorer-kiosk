<template>
  <div id="therapy" class="therapy-pg" @click="resetTouchTimeout">
    <div class="corner"></div>
    <div class="header">
      <h1 v-html="copy.heading"></h1>
      <p v-html="copy.subheading"></p>
    </div>
    <div class="content">
      <div class="content-box">
        <div v-if="copy.videos && copy.videos.length > 0">
          <div class="video-content" v-for="(video, index) in copy.videos" :key="index">
            
            <div v-if="state.activeSection === 'videos' && state.activeTab === video.id">
              
              <Video
                :video="video"
                :index="index"
                :totalVideos="copy.videos.length"
                :tabs="tabs"
                @set-tab="setTab"
              />

              <PageArrows
                @prev-tab="prevTab"
                @next-tab="nextTab"
                :counter="counter"
                :tabsLength="copy.videos.length"
              />
            </div>
          </div>
        </div>

        <div v-if="copy.trials && copy.trials.length > 0">
          <div  class="trial-content"
          v-for="(trial, index) in copy.trials"
          :key="index">
          <div class="scrollable"  v-if="state.activeSection === 'trials' && state.activeTab === trial.id">
            <h2 v-html="trial.heading"></h2>
            <p class="trial-subheading">
              <strong v-html="trial.trialCode"></strong>&nbsp;
              <span v-html="trial.subheading"></span>
            </p>

            <TrialInfo :trial="trial" />

            <PageArrows
              @prev-tab="prevTab"
              @next-tab="nextTab"
              :counter="counter"
              :tabsLength="copy.trials.length"
            />
          </div>

        </div>

        </div>


      </div>

      <Sidebar
        :videos="copy.videos"
        :trials="copy.trials"
        @set-tab="setTab"
        :therapy="copy.sidebarTitle"
      />
    </div>

    <Footer
      @toggle-section="toggleSection"
      @toggle-modal="toggleModal"
      :videos="copy.videos ? true : false"
    />

    <Modal
      @toggle-modal="toggleModal"
      name="references"
      :references="copy.references"
      v-show="state.modalIsOpen && state.showModal === 'references'"
    />

    <Modal
      @toggle-modal="toggleModal"
      name="timeout"
      v-show="state.modalIsOpen && state.showModal === 'timeout'"
    />
  </div>
</template>

<script>
import { store } from "@/store.js";
import copy from "@/data/copy.json";
import Modal from "@/components/Modal.vue";
import Footer from "@/components/Footer.vue";
import Video from "@/components/Video.vue";
import TrialInfo from "@/components/TrialInfo.vue";
import Sidebar from "@/components/Sidebar.vue";
import PageArrows from "@/components/PageArrows.vue";
import { TouchTimerService } from "@/services/TouchTimerService";
export default {
  name: "Therapy",
  components: {
    Modal,
    Footer,
    Video,
    TrialInfo,
    Sidebar,
    PageArrows
  },
  data: function() {
    return {
      state: store.state,
      copy: copy.therapy[this.$route.params.id],
      tabs: [],
      counter: 0
    };
  },
  methods: {
    toggleModal: function(id) {
      this.state.modalIsOpen = !this.state.modalIsOpen;
      this.state.showModal = id || "";
      let modalState = (this.state.showModal = id || "close");
      this.writeEvent(
        `ModalPopup.${modalState}.Section-${this.state.activeSection}.${this.copy.buttonLabel}`,
        1
      );
    },
    toggleSection: function(id) {
      // toggle between "video" or "trials" content
      this.state.activeSection = id;
      this.resetSection();
      this.getAllTabs();
    },
    resetSection: function() {
      // Empty tabs array + set tab to the first tab of active section
      this.tabs.length = 0;
      this.state.activeTab = this.copy[this.state.activeSection][0].id;
      this.counter = 0;
    },
    setTab: function(data) {
      // set active sidebar tab for the active section

      this.state.activeTab = data.tab;
      this.counter = data.index;
      this.writeEvent(
        `SidebarTab.Clicked.${this.copy.buttonLabel}.${this.state.activeSection}`
      );
    },
    nextTab: function() {
      this.counter++;
      this.state.activeTab = this.tabs[this.counter];
      this.writeEvent(
        `NextTab.Clicked.${this.copy.buttonLabel}.${this.state.activeSection}`,
        1
      );
    },
    prevTab: function() {
      this.counter--;
      this.state.activeTab = this.tabs[this.counter];
      this.writeEvent(
        `PrevTab.Clicked.${this.copy.buttonLabel}.${this.state.activeSection}`,
        1
      );
    },
    getAllTabs: function() {
      // get tabs for current active section
      for (let i = 0; i < this.copy[this.state.activeSection].length; i++) {
        this.tabs.push(this.copy[this.state.activeSection][i].id);
      }
    },
    writeEvent: function(BucketName, Value) {
    },
    resetTouchTimeout: function() {
      TouchTimerService.resetTouchTimeout();
    }
  },
  mounted() {
    this.resetTouchTimeout();
    this.state.currentTherapy = this.$route.params.id;

    // videos will always be first active section
    this.toggleSection(this.copy.videos ? "videos" : "trials");
    // set active tab on mount
    this.state.activeTab = this.copy[this.state.activeSection][0].id;
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 80%;
  margin: 24px 36px;
  position: relative;

  h1 {
    font-size: 75px;
    line-height: 1;
  }

  p {
    width: 89%;
    font-size: 26px;
  }
}

.content {
  display: flex;
  justify-items: stretch;
  margin: 0 40px;

  .content-box {
    position: relative;
    padding: 22px 28px;
    height: 773px;
    width: 1375px;
    background-color: $white;
    float: left;

    h2 {
      font-size: 32px;
    }

    .trial-subheading {
      font-size: 24px;
      color: $money-bag;
    }
  }
}
</style>