import Vue from 'vue';

Vue.filter(
  'formatDate',
  val => new Intl.DateTimeFormat('en-GB').format(new Date(val))
);
