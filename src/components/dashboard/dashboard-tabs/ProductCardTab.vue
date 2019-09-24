<template>
  <div class="pt-2">
    <div class="row row-equal">
      <div class="flex xs12 md6">
        <div
          class="title text-dark mb-3"
          :style="{color: $themes.primary}"
        >{{$t('dashboard.tabs.billingAddress.personalInfo')}}</div>
        <va-input
          type="textarea"
          autosize
          :label="$t('dashboard.tabs.billingAddress.firstName')"
          v-model="form.name"
        />
        <va-input :label="$t('dashboard.tabs.billingAddress.email')" v-model="form.email" />
        <va-input :label="$t('dashboard.tabs.billingAddress.address')" v-model="form.address" />
      </div>
      <div class="flex xs12 md6">
        <div
          class="title text-dark mb-3"
          :style="{color: $themes.primary}"
        >{{$t('dashboard.tabs.billingAddress.companyInfo')}}</div>
        <va-input :label="$t('dashboard.tabs.billingAddress.city')" v-model="form.city" />
        <va-input :label="$t('dashboard.tabs.billingAddress.country')" v-model="form.country" />
        <va-checkbox
          :label="$t('dashboard.tabs.billingAddress.infiniteConnections')"
          v-model="form.connection"
        />
      </div>
    </div>
    <div class="flex xs12 row row-equal">
      <va-card
        v-for="i of 10"
        :key="i"
        class="flex xs3 w-100"
        style="height:15em;"
        image="https://i.imgur.com/qSykGko.jpg"
        square
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
    <div class="row justify--center">
      <va-button>Add Connection</va-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'billing-address-tab',
  data () {
    return {
      form: {
        name: 'John Smith',
        email: 'smith@gmail.com',
        address: '93  Guild Street',
        city: 'London',
        country: 'United Kingdom',
        connection: true,
      },
      images: [],
    }
  },
}
</script>
