<template>
  <div class="pt-2 row row-equal" style="overflow: hidden;">
    <va-card class="row title-dark my gray" :style="{color: $themes.primary}">
      <!-- INPUTS -->
      <div class="row">
        <va-input
          type="textarea"
          autosize
          :label="$t('dashboard.tabs.productCardTab.description')"
          v-model="form.title"
          class="flex xs12"
        />

        <va-input
          class="flex xs6"
          type="text"
          autosize
          :label="$t('dashboard.tabs.productCardTab.minCost') +' '+form.min.currency"
          v-model.number="form.min.cost"
          pattern="\d+(\.\d{2})?"
        />
        <va-input
          class="flex xs6"
          type="text"
          autosize
          :label="$t('dashboard.tabs.productCardTab.maxCost') +' '+form.max.currency"
          v-model.number="form.max.cost"
          pattern="\d+(\.\d{2})?"
        />
      </div>
      <!-- OPTIONAL -->
      <div class="row">
        <a
          class="underline h3 flex xs2"
          :href="form.url"
        >{{$t('dashboard.tabs.productCardTab.link')}}</a>

        <p class="h3 gray mb-3 flex xs2" :href="form.url">
          {{$t('dashboard.tabs.productCardTab.rate')}}:
          <span
            class="underline"
          >{{form.our_rating*100}}%</span>
        </p>
      </div>
      <hr class="mb-2" />

      <div class="row">
        <va-card
          v-for="(url,i) of form.images"
          :key="i"
          class="flex xs2 w-100"
          style="height:15em;"
          :image="url"
          titleOnImage
        >
          <template slot="header">
            <va-button
              :color="images.includes(i)?'success':'danger'"
              @click="images.includes(i)?images.splice(images.findIndex(it=>it===i),1):images.push(i)"
              class="ma-0 mb-3"
            >{{ images.includes(i)?'✔':'✗' }}</va-button>
          </template>
        </va-card>
      </div>
    </va-card>

    <!-- BUTTONS -->
    <div class="flex xs12">
      <va-button
        color="danger"
        class="flex xs3 float-left"
        @click="getProduct()"
      >{{$t('dashboard.tabs.productCardTab.skip')}}</va-button>
      <va-button
        color="success"
        class="flex xs3 float-right"
        @click="sendProduct(form)"
      >{{$t('dashboard.tabs.productCardTab.confirm')}}</va-button>
    </div>
  </div>
</template>

<script>
import ProductService from '../../../services/network/ProductService';
export default {
  name: 'billing-address-tab',
  created() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      ProductService.get().then(response => {
        this.form = response;
      });
    },
    sendProduct() {
      ProductService.send({
        ...this.form,
        images: this.images.map(it => this.form.images[it]),
      }).then(_ => {
        this.getProduct();
      });
    },
  },
  data() {
    return {
      form: {
        title:
          'Милый мультяшный складной стенд для мобильного телефона держатель для iPhone X 8 7 6 Plus IPAD для samsung для huawei Чехол ручка Kichstand',
        our_rating: 0.65,
        id: 33035922085,
        url: 'https://ru.aliexpress.com/item/33035922085.html',
        total_sales: 2496,
        rating_product: 4.7,
        total_comment: 482,
        images: [
          'https://ae01.alicdn.com/kf/H6750177997234b2ea2d3492850d233fdu/-.jpg',
          'https://ae01.alicdn.com/kf/He55a1130d0cf4c4db919e77c8ec1e014N/-.jpg',
          'https://ae01.alicdn.com/kf/H094356dcd8a04a3d9cc2cca8bd66f17ey/-.jpg',
          'https://ae01.alicdn.com/kf/Ha34eb4fb7fe8401e85a8a38b36ef58b7O/-.jpg',
        ],
        discount: 0,
        max: { currency: 'RUB', cost: 61.84 },
        min: { currency: '', cost: 0 },
        shop: { id: 3003020, name: 'woyang Store', followers: 6843, positive_rate: 96 },
      },
      images: [],
    };
  },
};
</script>
