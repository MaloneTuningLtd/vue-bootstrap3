import { configure } from '@storybook/vue';

import Vue from 'vue';

import 'bootstrap/dist/css/bootstrap.min.css';

// Import your custom components.
// import Button from '../src/components/Button.jsx';

// Register custom components.
// Vue.component('my-button', MyButton);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories/button');
  require('../src/stories/form');
  require('../src/stories/pagination');
}

configure(loadStories, module);
