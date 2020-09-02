<template>
  <div>
    <h1 class="title">Congratulation</h1>

    <div @click="clearStorege" class="my-2">
      <v-btn x-large color="success" dark>Log out</v-btn>
    </div>
  </div>
</template>

<script>
// import { apolloClient as apollo } from '@/apollo/client';
// import { stateLink } from '@/apollo/link/state';

export default {
  name: 'Succsess',
  methods: {
    clearStorege() {
      localStorage.clear();
      this.$router.push('/');
    },
  },
  mounted() {
    if (!localStorage.getItem('id')) {
      // console.log(localStorage.getItem('id'));
      this.$router.push('/');
    }
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1%;
}
</style>
