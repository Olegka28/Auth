<template>
  <div class="my-2">
    <v-btn @click="openFormRegistration" text large color="primary">Зарегистрироваться</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    openFormRegistration() {
      this.$router.push('/register');
    },
  },
};
</script>

<style></style>
