<template>
  <div class="pt-2">
    <div class="row row-equal">
      <div class="flex xs12">
        <div
          class="title text-dark mb-3 medium-title"
          :style="{color: $themes.primary,}"
        >{{$t('dashboard.data.primary')}}</div>
        <va-input
          type="textarea"
          autosize
          minRows="6"
          :label="$t('dashboard.data.title')"
          v-model.trim="form.title"
        />

        <div class="flex xs12 row row-equal justify-content-center">
          <va-card
            v-for="(image,i) of images"
            :key="i"
            class="flex xs3 w-100 mx-auto"
            style="height:20rem;"
            :image="image"
            square
            titleOnImage
          >
            <template slot="header">
              <va-button
                :color="form.images.includes(image)?'success':'danger'"
                @click="form.images.includes(image)?form.images.splice(form.images.findIndex(it=>it===image),1):form.images.push(image)"
                class="ma-0 mb-3"
              >{{ form.images.includes(image)?'✔':'✗' }}</va-button>
            </template>
          </va-card>
        </div>

        <VbCard class="flex row">
          <a
            :href="form.url"
            class="link large-title flex xs-6"
            :style="`color:${$themes.primary}`"
          >{{$t('dashboard.data.url')}}</a>

          <p class="flex xs-6"></p>
        </VbCard>
      </div>
    </div>
    <div class="row justify--center">
      <va-button class="flex xs3 py-3 mx-4" color="danger">{{$t('dashboard.data.skip')}}</va-button>
      <va-button class="flex xs3 py-3 mx-4" color="success">{{$t('dashboard.data.add')}}</va-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "billing-address-tab",
  data() {
    return {
      form: {
        images: [],
        url: "https://ru.aliexpress.com/item/33035919784.html",
        title:
          "Детская футболка с рисунком медведя, мамы, папы, медведя, сестры, брата, медведя; женская футболка с короткими рукавами и принтом; хлопковая Футболка с графическим принтом; футболки"
      },
      images: [
        "https://ae01.alicdn.com/kf/HTB1o2AHbEKF3KVjSZFEq6xExFXa3/-.jpg",
        "https://ae01.alicdn.com/kf/HTB1KJoJbBGE3KVjSZFhq6AkaFXaa/-.jpg",
        "https://ae01.alicdn.com/kf/HTB1I3NiRwHqK1RjSZFPq6AwapXaC/-.jpg"
      ]
    };
  }
};
</script> 