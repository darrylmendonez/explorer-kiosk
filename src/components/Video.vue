<template>
  <div class="video-container">
    <video :ref="video.ref" class="therapy-vid" :src="require(`@/assets/video/${video.src}`)" :poster="require(`@/assets/thumb/${video.thumb}`)" controls controlsList="nodownload nofullscreen"  disablepictureinpicture height="773" width="1375" autoplay></video>
  </div>
</template>

<script>
import { store } from '@/store.js';
import { TouchTimerService } from '@/services/TouchTimerService';

export default {
  name: 'Video',
  props: ['video', 'index', 'totalVideos', 'tabs'],
  data: function() {
    return {
      state: store.state,
      nextIndex: this.index,
    };
  },
  computed: {
    isLastVideo: function() {
      return this.index === this.totalVideos - 1;
    },
  },
  mounted() {
    let video = document.querySelector('video');
    video.addEventListener('ended', () => {
      if (this.isLastVideo) {
        TouchTimerService.resetVideoTimeout();
      } else {
        this.nextIndex++;
        this.$emit('set-tab', {
          tab: this.tabs[this.nextIndex],
          index: this.nextIndex,
        });
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.video-thumb {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

video {
  position: absolute;
  z-index: 0;
}
</style>


