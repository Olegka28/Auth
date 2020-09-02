import Vue from 'vue';
import App from './App.vue';
import router from '@/router.js';
import vuetify from './plugins/vuetify';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';

Vue.use(VueApollo);

const link = new HttpLink({
  uri: 'https://neo-teric-platform-staging.platform.neoteric.dev/graphql',
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link,
  cache,
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'no-cache',
    },
  },
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  apolloProvider,
  router,
  render: (h) => h(App),
}).$mount('#app');
