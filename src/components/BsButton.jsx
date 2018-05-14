import colors from '../common/colors';
import handleClassList from '../common/handleClassList';

const tagTypes = [
  'a',
  'button',
  'input',
];

export default {
  functional: true,
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
  render(h, context) {
    const tag = context.props.tag;
    const classList = handleClassList(
      context.data.staticClass,
      context.data.class,
      ['btn', `btn-${context.props.color}`]
    );
    const text = context.props.text;

    const data = {
      attr: context.data.attr,
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
