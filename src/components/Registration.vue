<template>
  <div class="form">
    <v-alert v-show="succes" prominent type="error">
      <v-row align="center">
        <v-col class="grow">Такого пользователя не существует <ButtonRegister /></v-col>
      </v-row>
    </v-alert>
    <v-app id="inspire">
      <form method="POST">
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
          type="password"
          v-model="password"
          :error-messages="passwordErrors"
          :counter="12"
          label="Password"
          required
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        ></v-text-field>

        <v-btn class="mr-4" @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </form>
    </v-app>
  </div>
</template>

<script>
import ButtonRegister from './ButtonRegister.vue';
import { validationMixin } from 'vuelidate';
import gql from 'graphql-tag';
import { Base64 } from 'js-base64';
import { required, maxLength, email } from 'vuelidate/lib/validators';

export default {
  components: {
    ButtonRegister,
  },
  mixins: [validationMixin],

  validations: {
    password: { required, maxLength: maxLength(12) },
    email: { required, email },
  },

  data: () => ({
    password: '',
    email: '',
    me: null,
    pesponse: '',
    succes: false,
  }),

  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.maxLength && errors.push('Name must be at most 10 characters long');
      !this.$v.password.required && errors.push('Name is required.');
      return errors;
    },

    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('Must be valid e-mail');
      !this.$v.email.required && errors.push('E-mail is required');
      return errors;
    },
  },

  methods: {
    // setLocalStorage(id) {
    //   localStorage.setItem('token', `Basic ${id}`);
    // },

    submit() {
      this.pesponse = Base64.encode(`${this.email}:${this.password}`);
      console.log(this.pesponse);

      this.$v.$touch();

      if (this.$v.email.email && this.$v.email.required && this.$v.password.required) {
        const result = this.$apollo
          .query({
            query: gql`
              query {
                me {
                  id
                }
              }
            `,
            context: {
              headers: {
                authorization: `Basic ${this.pesponse}`,
              },
            },
          })
          .then(
            (result) => {
              console.log(result.data.me.id);
              localStorage.id = this.pesponse;
              this.succes = true;
              this.$router.push('/protected');
            },
            () => (this.succes = true),
          );
        this.result = result;
      }
    },

    clear() {
      this.$v.$reset();
      this.password = '';
      this.email = '';
      this.succes = false;
      // this.addTag();
    },
  },

  mounted() {
    if (localStorage.getItem('id')) {
      this.$router.push('/protected');
    }
  },
};
</script>

<style>
.form {
  margin: 0 auto;
  width: 30%;
}
</style>
