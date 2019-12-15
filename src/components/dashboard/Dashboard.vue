<template>
  <div class="dashboard">
    <dashboard-info-block :info="info" />
    <div class="row" v-if="!visibleCard">
      <va-button
        :disabled="info.getQ===0"
        class="flex xs10 mx-auto"
        @click="()=>{getProduct();visibleCard=true}"
      >{{$t('btn.getProduct')}}</va-button>
    </div>
    <va-card v-else class="flex xs12 md10 mx-auto gray">
      <ProductCardTab ref="tabsRef" @sendProduct="sendProduct" @skipProduct="getProduct()" />
    </va-card>

    <!-- <dashboard-tabs
      v-else
      
    />-->
  </div>
</template>

<script>
import DashboardInfoBlock from './DashboardInfoBlock';
import DashboardTabs from './DashboardTabs';
import ProductCardTab from './dashboard-tabs/ProductCardTab';
import ProductService from '../../services/network/ProductService';

export default {
  name: 'dashboard',
  components: {
    DashboardInfoBlock,
    DashboardTabs,
    ProductCardTab,
  },
  created() {
    this.getInfo();
  },

  methods: {
    launchEpicmaxToast() {
      this.showToast(`Let's work together!`, {
        icon: 'fa-star-o',
        position: 'top-right',
        duration: Infinity,
        action: {
          text: 'Hire us',
          href: 'http://epicmax.co/#/contact',
          class: 'vuestic-toasted-link',
        },
      });
    },
    getInfo() {
      ProductService.dashboard().then(resp => {
        this.info.sendQ = resp.sendQ;
        this.info.getQ = resp.getQ;
      });
    },
    getProduct() {
      ProductService.get().then(response => {
        this.product = response;
        console.log('TCL: getProduct -> response', response);
        this.$refs.tabsRef.updateForm(response);
        this.getInfo();
      });
    },
    sendProduct(data) {
      ProductService.send(data).then(_ => {
        if (confirm('Продолжить?')) {
          this.getProduct();
        } else {
          this.shouldLeave = true;
          this.visibleCard = false;
        }
      });
    },
  },
  data() {
    return {
      visibleCard: false,
      info: {
        sendQ: 0,
        getQ: 0,
      },
    };
  },
};
</script>

<style lang="scss">
.row-equal .flex {
  .va-card {
    height: 100%;
  }
}
.dashboard {
  .va-card {
    margin-bottom: 0 !important;
  }
}
</style>
