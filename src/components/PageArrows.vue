<template>
  <div class="arrow-pagination">
    <button class="arrow-left" @click="$emit('prev-tab')" :disabled="counter === 0">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="59.5px" height="137.5px" viewBox="0 0 59.5 137.5" enable-background="new 0 0 59.5 137.5" xml:space="preserve">
      <g>
        <path opacity="0.2" d="M0,68.8c0,35,25.9,63.9,59.5,68.8V0C25.9,4.8,0,33.8,0,68.8z"/>
        <polyline fill="none" stroke="#22205F" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" points="29,46.2 
          51.6,68.8 29,91.3 	"/>
      </g>
      </svg>
    </button>
  
    <button class="arrow-right" @click="$emit('next-tab')" :disabled="counter === (tabsLength - 1)">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="59.5px" height="137.5px" viewBox="0 0 59.5 137.5" enable-background="new 0 0 59.5 137.5" xml:space="preserve">
      <g>
        <path opacity="0.2" d="M0,68.8c0,35,25.9,63.9,59.5,68.8V0C25.9,4.8,0,33.8,0,68.8z"/>
        <polyline fill="none" stroke="#22205F" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" points="29,46.2 
          51.6,68.8 29,91.3 	"/>
      </g>
      </svg>
    </button>           
  </div>
</template>

<script>
export default {
  name: "PageArrows",
  props: ["counter", "tabsLength"]
};
</script>

<style lang="scss" scoped>
.arrow-pagination {
  .arrow-left,
  .arrow-right {
    position: absolute;
    top: 50%;
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    z-index: 2;

    &[disabled] {
      svg {
        opacity: 0.5;
      }

      polyline {
        stroke: $grey-dark;
      }
    }
  }

  .arrow-left {
    left: 0;
    transform: scale(-1, 1) translateY(-50%);
  }

  .arrow-right {
    right: 0;
    transform: translateY(-50%);
  }
}
</style>


