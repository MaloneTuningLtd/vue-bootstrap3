import colors from '../common/colors';

const tagTypes = [
  'a',
  'button',
  'input',
];

export default {
  props: {
    color: {
      type: String,
      required: false,
      default: 'default',
      validator: (value) => (colors.indexOf(value !== -1))
    },
    tag: {
      type: String,
      required: false,
      default: 'button',
      validator: (value) => (tagTypes.indexOf(value) !== -1)
    },
    text: {
      type: String,
      required: true,
    },
  },
  render(h) {
    const tag = this.tag;
    const classList = ['btn', `btn-${this.color}`];
    const text = this.text;

    const data = {
      class: classList,
    };

    return h(
      tag,
      data,
      [
        text
      ]
    );
  }
};
