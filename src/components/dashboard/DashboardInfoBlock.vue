<template>
  <div class="row row-equal">
    <div class="flex xl6 xs12 mx-auto">
      <div class="row">
        <div class="flex xs12 sm6">
          <va-card class="mb-4" color="secondary">
            <p class="display-2 mb-0" style="color: white">{{ info.getQ }}</p>
            <p style="color: white">{{$t('dashboard.info.parsed')}}</p>
          </va-card>
        </div>
        <div class="flex xs12 sm6">
          <va-card class="mb-4" color="info">
            <p class="display-2 mb-0" style="color: white">{{ info.sendQ }}</p>
            <p style="color: white">{{$t('dashboard.info.waitPost')}}</p>
          </va-card>
        </div>
      </div>

      <!-- <div class="row">
        <div class="flex xs12 md6">
          <va-card class="gray">
            <p class="display-2 mb-1" :style="{color: this.$themes.success}">118$</p>
            <p class="no-wrap">{{$t('dashboard.info.earned')}}</p>
          </va-card>
        </div>
        <div class="flex xs12 md6">
          <va-card class="gray">
            <div class="row row-separated">
              <div class="flex xs4">
                <p class="display-2 mb-1 text--center" :style="{color: this.$themes.info}">3$</p>
                <p class="text--center mb-1">{{$t('dashboard.info.lowCost')}}</p>
              </div>
              <div class="flex xs4">
                <p class="display-2 mb-1 text--center" :style="{color: this.$themes.warning}">24$</p>
                <p class="text--center no-wrap mb-1">{{$t('dashboard.info.mediumCost')}}</p>
              </div>
              <div class="flex xs4">
                <p class="display-2 mb-1 text--center" :style="{color: this.$themes.danger}">91$</p>
                <p class="text--center mb-1">{{$t('dashboard.info.highCost')}}</p>
              </div>
            </div>
          </va-card>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardInfoBlock',
  props: ['info'],
  data() {
    return {
      infoTiles: [
        {
          color: 'secondary',
          value: this.info.getQ,
          text: 'parsed',
          icon: '',
        },
        {
          color: 'info',
          value: this.info.sendQ,
          text: 'waitPost',
          icon: '',
        },
        // {
        //   color: 'success',
        //   value: '5',
        //   text: 'posted',
        //   icon: '',
        // },
      ],
    };
  },
};
</script>

<style lang="scss">
.row-separated {
  .flex + .flex {
    border-left: 1px solid #e3eaeb;
  }

  @include media-breakpoint-down(xs) {
    p:not(.display-2) {
      font-size: 0.875rem;
    }
  }
}

.dashboard {
  .va-card__header--over {
    @include media-breakpoint-up(md) {
      padding-top: 0 !important;
    }
  }

  .va-card__image {
    @include media-breakpoint-up(md) {
      padding-bottom: 0 !important;
    }
  }
}
</style>
