import Router from '@/router';
import { store } from '@/store';

export const TouchTimerService = {
  touchTimeout: 120,
  touchTimeRemaining: null,
  touchInterval: null,
  videoTimeout: 30,
  videoTimeRemaining: null,
  videoInterval: null,
  resetTouchTimeout() {
     // console.log("reset touch timeout");
    this.clearTouchTimeout();
    this.clearVideoTimeout();
    // start new countdown
    this.touchInterval = setInterval(() => {
      if (store.state.activeSection === 'videos') return;
      if (this.touchTimeRemaining > 0) {
        this.touchTimeRemaining = this.touchTimeRemaining - 1;
         // console.log(this.touchTimeRemaining);
      } else {
        // Close any open references modals
        store.state.showModal = '';
        store.state.modalIsOpen = false;
        // navigate back to home screen
        Router.push('/home');
        this.clearTouchTimeout();
      }
    }, 1000);
  },
  clearTouchTimeout() {
    // clear existing countdown
    clearInterval(this.touchInterval);
    // reset time remaining
    this.touchTimeRemaining = this.touchTimeout;
  },
  resetVideoTimeout() {
    this.clearVideoTimeout();

    this.videoInterval = setInterval(() => {
      if (this.videoTimeRemaining > 0) {
        if (this.videoTimeRemaining === 10) {
          // show countdown modal
          store.state.showModal = 'timeout';
          store.state.modalIsOpen = true;
        }
        this.videoTimeRemaining = this.videoTimeRemaining - 1;
         // console.log('video ' + this.videoTimeRemaining);
      } else {
        store.state.showModal = '';
        store.state.modalIsOpen = false;
        Router.push('/home');
        this.clearVideoTimeout();
      }
    }, 1000);
  },
  clearVideoTimeout() {
    clearInterval(this.videoInterval);
    this.videoTimeRemaining = this.videoTimeout;
  },
};
