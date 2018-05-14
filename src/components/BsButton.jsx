import colors from '@/common/colors';
import handleListeners from '@/lib/handleListeners';

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
    const ElementTag = this.tag;
    const text = this.text;

    const classList = ['btn', `btn-${this.color}`];
    const listeners = handleListeners(this.$listeners);

    return (
      <ElementTag class={classList} {...listeners}>
        {text}
      </ElementTag>
    )
  }
};
