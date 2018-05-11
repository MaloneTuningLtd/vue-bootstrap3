import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import Container from '../common/Container.jsx';
import BsForm from '../components/BsForm.jsx';
import BsInputSelect from '../components/BsInputSelect.jsx';
import BsInputText from '../components/BsInputText.jsx';
import BsInputTextarea from '../components/BsInputTextarea';

storiesOf('Bootstrap Form', module)
  .add('With InputSelect', () => ({
    components: {
      Container,
      BsForm,
      BsInputSelect,
    },
    data() {
      return {
        items: [
          { name: 'Car or Truck', value: 'car-truck' },
          { name: 'Birth Stone', value: 'birth-stone' },
        ],
      }
    },
    template: `
      <container>
        <bs-form>
          <bs-input-select :label="'Some Items'" :size=10 :options="items" :value="''" />
        </bs-form>
      </container>
    `
  }))
  .add('With InputText', () => ({
    components: {
      Container,
      BsForm,
      BsInputText,
    },
    data() {
      return {
        text: 'Default',
      }
    },
    template: `
      <container>
        <bs-form>
          <bs-input-text v-model="text" :label="'Some Text'" :size=10 />
        </bs-form>
      </container>
    `
  }))
  .add('With InputTextarea', () => ({
    components: {
      Container,
      BsForm,
      BsInputTextarea,
    },
    data() {
      return {
        text: 'Default Lorem Ipsum? No.',
      }
    },
    template: `
      <container>
        <bs-form>
          <bs-input-textarea v-model="text" :label="'Basic Textarea'" :size=10 :rows="5" />
        </bs-form>
      </container>
    `
  }))