<template>
  <div class="my-2">
    <v-btn @click="openHomePage" text large color="primary">На главную страницу</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    openHomePage() {
      this.$router.push('/');
    },
  },
};
</script>

<style></style>
