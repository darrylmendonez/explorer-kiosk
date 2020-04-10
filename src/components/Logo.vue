<template>
  <div class="logos">
    <p class="footnote" v-if="$route.params.id === 'jcarh125'">
      <sup>a</sup> Being developed by a company.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style lang="scss" scoped>
#admin,
#home {

  // Hide this for now
  .bluebird-logo {
    display: none;
  }
  .visual-container {
    width: 175px;
  }
}

.therapy-pg {
  .logos {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .bluebird-logo {
    align-items: center;
    justify-content: center;
  }

  .footnote {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
}
</style>

