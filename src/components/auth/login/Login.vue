<template>
  <form @submit.prevent="onsubmit">
    <va-input
      v-model="password"
      type="password"
      :label="$t('auth.password')"
      :error="!!passwordErrors.length"
      :error-messages="passwordErrors.join('; ')"
      style="color:white !important;"
    />

    <div class="d-flex justify--center mt-3">
      <va-button type="submit" class="my-0">{{ $t('auth.login') }}</va-button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      password: '',
      passwordErrors: [],
    };
  },
  computed: {
    formReady() {
      if (!this.password) {
        this.$set(this.passwordErrors, this.passwordErrors.length, 'Password is required');
      }
      return !this.passwordErrors.length;
    },
  },
  methods: {
    onsubmit() {
      this.passwordErrors = [];
      if (!this.formReady) {
        return;
      }
      this.$store
        .dispatch('login', { password: this.password })
        .then(response => {
          this.$router.push({ name: 'dashboard' });
        })
        .catch(err => {
          this.$set(this.passwordErrors, this.passwordErrors.length, err.message);
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss">
</style>
