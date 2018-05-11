export default {
  functional: true,
  props: {
    heading: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: 'default',
    },
  },
  render(h, context) {
    const classList = ['panel', `panel-${context.props.type}`];

    return (
      <div class={classList}>
        {!!context.props.heading &&
          <div class="panel-heading">{context.props.heading}</div>
        }
        <div class="panel-body">
          {context.children}
        </div>
      </div>
    );
  }
};
