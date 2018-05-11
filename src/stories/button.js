import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import Container from '../common/Container.jsx';
import BsButton from '../components/BsButton.jsx';

storiesOf('Bootstrap Button', module)
  .add('Default', () => ({
    components: {
      Container,
      BsButton
    },
    template: `
      <container>
        <bs-button :tag="'a'" :text="'Link'"></bs-button>
        <bs-button :tag="button" :text="'Button'"></bs-button>
        <bs-button :tag="input" :text="'Input'" type="button"></bs-button>
        <bs-button :tag="input" :text="'Submit'" type="submit"></bs-button>
      </container>
    `
  }))
  .add('With Color (Primary)', () => ({
    components: {
      Container,
      BsButton
    },
    template: `
      <container>
        <bs-button :tag="'a'" :color="'primary'" :text="'Link'"></bs-button>
        <bs-button :tag="button" :color="'primary'" :text="'Button'"></bs-button>
        <bs-button :tag="input" :color="'primary'" :text="'Input'" type="button"></bs-button>
        <bs-button :tag="input" :color="'primary'" :text="'Submit'" type="submit"></bs-button>
      </container>
    `
  }));
