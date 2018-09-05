import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import Container from '../common/Container.jsx';
import BsPagination from '../components/BsPagination';

storiesOf('Bootstrap Pagination', module)
  .add('Default Mode', () => ({
    components: {
      Container,
      BsPagination,
    },
    data() {
      return {
        pagination: {
          current: 1,
          perPage: 15,
          total: 65
        },
      }
    },
    template: `
      <container>
        <bs-pagination v-bind="pagination" />
      </container>
    `
  }))
  .add('Range Mode', () => ({
    components: {
      Container,
      BsPagination,
    },
    data() {
      return {
        pagination: {
          current: 1,
          perPage: 15,
          total: 380
        },
      }
    },
    template: `
      <container>
        <bs-pagination range v-bind="pagination" />
      </container>
    `
  }));
