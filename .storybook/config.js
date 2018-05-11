import { configure } from '@storybook/vue';

import Vue from 'vue';

import 'bootstrap/dist/css/bootstrap.min.css';

// Import your custom components.
import Container from '../src/common/Container.jsx';
import BsButton from '../src/components/BsButton.jsx';

// Register custom components.
Vue.component('container', Container);
Vue.component('bs-button', BsButton);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories/button');
}

configure(loadStories, module);
