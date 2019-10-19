<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    this.$http.interceptors.request.use(
      config => {
        this.$store.dispatch('AJAX_REQUEST_START');
        return config;
      },
      err => {
        this.showToast(err.response.data.message, {
          icon: 'fa-exclamation-circle',
          position: 'top-right',
          duration: 3000,
          type: 'error',
          fullWidth: false,
          // action: {
          //   text: 'Hire us',
          //   href: 'http://epicmax.co/#/contact',
          //   class: 'vuestic-toasted-link',
          // },
        });
      }
    );

    this.$http.interceptors.response.use(
      config => {
        this.$store.dispatch('AJAX_REQUEST_END');
        return config;
      },
      err => {
        return new Promise((resolve, reject) => {
          const isNotAuthorized =
            err.response.status === 401 && err.config && !err.config.__isRetryRequest;
          const isAccessDenied =
            err.response.status === 403 && err.config && !err.config.__isRetryRequest;

          if (isNotAuthorized) {
            this.$store.commit('logout');
            this.$router.push({ name: 'login' });
          }
          if (isAccessDenied) {
            // TODO: кидать на партнерский\админский
            // this.$router.replace({ name: 'admin__products' });
          }
          if (err.response.data.error) {
            this.showToast(err.response.data.error, {
              icon: 'fa-exclamation-circle',
              position: 'top-right',
              duration: 3000,
              type: 'error',
              fullWidth: false,
              // action: {
              //   text: 'Hire us',
              //   href: 'http://epicmax.co/#/contact',
              //   class: 'vuestic-toasted-link',
              // },
            });
          }
          if (err.response.data.message) {
            this.showToast(err.response.data.message, {
              icon: 'fa-exclamation-circle',
              position: 'top-right',
              duration: 3000,
              type: 'error',
              fullWidth: false,
            });
          }
          if (err.response.data.errors) {
            for (const err of err.response.data.errors) {
              this.showToast(err.message, {
                icon: 'fa-exclamation-circle',
                position: 'top-right',
                duration: 3000,
                type: 'error',
                fullWidth: false,
              });
            }
          }
          this.$store.dispatch('AJAX_REQUEST_END');
          throw err;
        });
      }
    );
  },
};
</script>
 
<style lang="scss">
@import '../sass/main.scss';

body {
  height: 100%;

  #app {
    height: 100%;
  }
}
</style>
