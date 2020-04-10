<template>
  <div class="selection-box">
    <h3 class="area-title">{{area.title}}</h3>
    <div class="selections-container">
      <div class="selection-item" v-for="(selection, index) of area.therapies" :key="index">
        <input
          type="checkbox"
          :id="`check-${selection}`"
          class="checkbox"
          :value="selection"
          v-model="state[area.id]"
        >
        <label :for="`check-${selection}`" v-html="therapy[selection].checkboxLabel"></label>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '@/store.js';

export default {
  name: 'AdminSelection',
  props: ['area', 'therapy'],
  data: function() {
    return {
      state: store.state,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.area-title {
  font-size: 56px;
  font-weight: $font-weight-light;
}

.selections-container {
  display: flex;
  margin-top: 3rem;
  flex-wrap: wrap;
  width: 50%;
}

.selection-item {
  margin-bottom: 3rem;
}

label {
  border: 1px solid $blue-dark;
  background: $blue-dark;
  color: $white;
  padding: 1rem 3rem;
  border-radius: 25px;
  margin-left: -4rem;
  margin-right: 1.5rem;
  font-size: 40px;
  line-height: 1;
}

input[type='checkbox'] {
  visibility: hidden;
  position: absolute;
  pointer-events: none;
}

.checkbox:checked + label {
  border: 1px solid $grey-dark;
  color: $blue-dark;
  background: none;
}

#admin {
  label {
    color: $blue-dark;
    padding: 1rem 4rem;
    background-color: transparent;
    border: none;
    position: relative;

    &:before {
      content: '';
      width: 24px;
      height: 24px;
      border: 2px solid $blue-dark;
      border-radius: 3px;
      position: absolute;
      left: 0;
      top: 55%;
      transform: translateY(-50%);
    }
  }

  .checkbox:checked + label {
    &:before {
      content: '';
      background-color: $blue-dark;
    }
  }
}
</style>


