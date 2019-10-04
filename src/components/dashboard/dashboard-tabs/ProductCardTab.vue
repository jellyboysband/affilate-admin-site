<template>
  <div class="pt-2 row row-equal" style="overflow: hidden;">
    <va-card
      class="flex xs12 title title-dark mb-3 gray"
      :style="{color: $themes.primary}"
      :title="$t('dashboard.tabs.productCardTab.info')"
    >
      <va-input
        type="textarea"
        autosize
        :label="$t('dashboard.tabs.productCardTab.description')"
        v-model="form.title"
      />
      <p>{{form.cost}}</p>
      <div class="flex xs12 row row-equal">
        <va-card
          v-for="i of 10"
          :key="i"
          class="flex xs3 w-100"
          style="height:15em;"
          image="https://i.imgur.com/qSykGko.jpg"
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
    <div class="row justify--center">
      <va-button>Add Connection</va-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'billing-address-tab',
  data() {
    return {
      form: {
        title:
          'John Smith John Smith John Smith John Smith John Smith John Smith ' +
          'John Smith John Smith John Smith John Smith John Smith John Smith ' +
          'John Smith John Smith John Smith John Smith John Smith John Smith ' +
          'John Smith John Smith John Smith John Smith John Smith John Smith ' +
          'John Smith John Smith John Smith John Smith John Smith John Smith ' +
          'John Smith John Smith John Smith John Smith John Smith John Smith ' +
          'John Smith John Smith John Smith John Smith ',
        costMin: 'smith@gmail.com',
        costMax: '93  Guild Street',
        cost: 321,
        url: 'United Kingdom',
        images: [],
      },
      images: [],
    };
  },
};
</script>
