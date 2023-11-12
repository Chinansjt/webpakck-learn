import Vue from 'vue';
import App from './App.vue';
import _ from 'lodash'

const object1 = { 'a': 1, 'b': 2 };
const object2 = { 'a': 1, 'b': 2 };

console.log('_.isEqual(object1, object2) :>> ', _.isEqual(object1, object2));
new Vue({
    'el': '#app',
    render: (h) => h(App)
})