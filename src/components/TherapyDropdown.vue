<template>
  <div class="dropdown-container">
    <TherapyButton
      :class="showDropdown ? 'active' : ''"
      v-html="area"
      @click.native="toggleDropdown"
    />
    <div class="dropdown" :class="showDropdown ? 'active' : ''">
      <ul>
        <li
          class="therapy-item"
          :class="selection"
          v-for="(selection, index) of selections"
          :key="index"
          v-html="therapy[selection].buttonLabel"
          @click="goToTherapy(selection)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Router from '@/router';
import TherapyButton from '@/components/TherapyButton.vue';

export default {
  name: 'TherapyDropdown',
  components: {
    TherapyButton,
  },
  props: ['area', 'therapy', 'selections'],
  data: function() {
    return {
      router: Router,
      showDropdown: false,
    };
  },
  methods: {
    goToTherapy: function(therapy) {
      this.$router.push(`/therapy/${therapy}`);
    },
    toggleDropdown: function() {
      this.showDropdown = !this.showDropdown;
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown-container {
  background: none;
  margin-right: 1.5rem;
  display: inline-block;
  position: relative;
}

.btn-therapy {
  margin-right: 0;
  width: 100%;
}

.btn-dropdown,
.therapy-item {
  background: none;
  display: inline-block;
}

.therapy-item {
  display: block;
  text-align: center;
  padding: 1.8rem;
  width: 77%;
  margin: 0 auto;

  &:nth-child(1) {
    background: rgba($dropdown-bg, 0.33);
  }
  &:nth-child(2) {
    background: rgba($dropdown-bg, 0.67);
  }
  &:nth-child(3) {
    background: rgba($dropdown-bg, 1);
  }
}

.dropdown {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s;

  &.active {
    max-height: 100%;
  }

  ul {
    padding: 0;
    margin: 0;
  }
}
</style>
