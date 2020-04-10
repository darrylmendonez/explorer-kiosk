<template>
  <div class="trial-info" :class="trial.id">
    <div class="flex-container">
      <div class="left">
        <div v-if="trial.phase" class="info-item">
          <h3 class="item-title">Phase:&nbsp;</h3>
          <p class="item-copy" v-html="trial.phase"></p>
        </div>

        <div class="info-item">
          <h3 class="item-title">Status:&nbsp;</h3>
          <p class="item-copy" v-html="trial.status"></p>
        </div>

        <div class="info-item">
          <h3 class="item-title">Clinicaltrials.gov Identifier:&nbsp;</h3>
          <p class="item-copy" v-html="trial.govId"></p>
        </div>
      </div>

      <div class="right">
        <div class="info-item">
          <h3 class="item-title">Primary Endpoints:</h3>
          <p class="item-copy" v-html="trial.primaryEndpts"></p>
        </div>
        <div class="info-item">
          <h3 class="item-title">Secondary Endpoints:</h3>
          <p class="item-copy" v-html="trial.secondaryEndpts"></p>
        </div>
        <div class="info-item" v-if="trial.contact">
          <h3 class="item-title">Contact:&nbsp;</h3>
          <p class="item-copy" v-html="trial.contact"></p>
        </div>
      </div>
    </div>

    <div class="trial-visual">
      <img :src="require(`@/assets/schematics/${trial.schematic}`)" alt>
    </div>

    <div class="footnotes">
      <p
        class="footnote-copy"
        v-for="(footnote, index) of trial.footnotes"
        :key="index"
        v-html="footnote"
      ></p>
      <p class="footnote-copy">
        <span v-for="(abbreviation, index) of trial.abbreviations" :key="index">
          <span class="footnote-copy">
          <strong v-html="abbreviation.name"></strong>, <span v-html="abbreviation.definition"></span><span v-if="index < trial.abbreviations.length - 1">; </span><span v-else>.</span>
          </span>
        </span>
      </p>
      <p class="footnote-copy" v-html="trial.accessData"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrialInfo',
  props: ['trial'],
  methods: {},
};
</script>


<style lang="scss" scoped>
.trial-info {
  margin-top: 3rem;
  padding: 1.5rem 3rem;
  background: $grey-light;

  .flex-container {
    display: flex;
    justify-content: space-between;

    &.three-col {
      .info-item {
        width: 33%;
      }
    }

    &.two-col {
      .info-item:first-child {
        width: 33%;
      }

      .info-item:nth-child(2) {
        width: 66.7%;
      }
    }
  }

  .left {
    width: 33.3%;
  }

  .right {
    width: 66.7%;
  }

  .info-item {
    margin-bottom: 1.2rem;
  }

  .item-title {
    font-weight: $font-weight-bold;
    font-size: 18px;
    text-transform: uppercase;
  }

  .item-copy {
    font-size: 20px;
    color: $grey-dark;
  }
}

.trial-visual img {
  width: 100%;
}

.footnotes {
  margin-top: 1rem;

  .footnote-copy {
    color: $grey-dark;
    font-size: 14px;
  }
}
</style>


