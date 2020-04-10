<template>
  <div class="sidebar">
    <template  v-if="state.activeSection === 'videos'">
      <h3>Video Chapters</h3>
      <p class="instruction-copy">Select a video below to learn more</p>
      <ul class="content-nav video">
        <li v-for="(video, index) in videos" :key="index" :class="state.activeTab === video.id ? 'active' : ''" @click="$emit('set-tab', { tab: video.id, index: index})">
        {{ video.title }}
        </li>
      </ul>
    </template>

    <template  v-if="state.activeSection === 'trials'">
      <h3>{{therapy}} Clinical Trials</h3>
      <p class="instruction-copy" v-show="trials.length > 1">Select a trial below to learn more</p>
      <ul class="content-nav trial">
        <li v-for="(trial, index) in trials" :key="index" :class="state.activeTab === trial.id ? 'active' : ''" @click="$emit('set-tab', { tab: trial.id, index: index})">
        {{ trial.tab }}
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import { store } from '@/store.js';

export default {
  name: 'Sidebar',
  props: ['videos', 'trials', 'therapy'],
  data: function() {
    return {
      state: store.state,
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  margin-left: 20px;
  padding-top: 22px;
  width: 443px;
  float: left;
  position: relative;

  h3 {
    font-size: 32px;
    font-weight: $font-weight-bold;
  }

  .instruction-copy {
    font-size: 24px;
    color: $money-bag;
  }

  .content-nav {
    list-style-type: none;
    padding: 0;

    li {
      height: 62px;
      line-height: 62px;
      font-size: 27px;
      padding-left: 13px;
      border-left: 12px solid transparent;
      margin-bottom: 50px;

      &.active {
        border-left: 12px solid $money-bag;
        color: $money-bag;
        font-weight: bold;
      }
    }

    &.video {
      li {
        line-height: initial;
        display: flex;
        align-items: center;
      }
    }
  }
}

#liso-cel {
  .content-nav.trial li {
    margin-bottom: 20px;
  }
}
</style>

