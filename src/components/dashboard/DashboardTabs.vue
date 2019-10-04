<template>
  <va-card class="gray">
    <va-tabs class="hidden-tab-line" grow v-model="tabsState">
      <va-tab>{{$t('dashboard.tabs.productCardTab.title')}}</va-tab>
    </va-tabs>
    <va-separator />
    <component :is="tabs[tabsState]" />
  </va-card>
</template>

<script>
import ProductCardTab from './dashboard-tabs/ProductCardTab';

export default {
  name: 'DashboardTab',
  components: {
    ProductCardTab,
  },
  data() {
    return {
      tabsState: 0,
      tabs: ['ProductCardTab'],
    };
  },
};
</script>
