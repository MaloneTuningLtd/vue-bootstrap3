import colors from '../common/colors';

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
    const element = context.props.tag;
    const classes = ['btn', `btn-${context.props.color}`];

    const text = context.props.text;

    return (
      <element class={classes} {...context.data}>
        {{text}}
      </element>
    );
  }
};
