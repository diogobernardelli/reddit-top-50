import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    sidebar: {
      title: 'Top 50 Reddit Posts',
      submitted: 'submitted',
      comments: 'comments',
      dismiss_single: 'Dismiss Post',
      dismiss_all: 'Dismiss All',
    },
    message: {
      hello: 'hello world',
    },
  },
  pt: {
    message: {
      hello: 'Olá Mundo!',
    },
  },
};

const i18n = new VueI18n({
  locale: 'en',
  messages,
});

export default i18n;
