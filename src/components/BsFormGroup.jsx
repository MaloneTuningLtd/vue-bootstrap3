export default {
  functional: true,
  props: {
    label: {
      type: String,
      required: false,
    },
    size: {
      type: [String, Number],
      required: false,
    },
  },
  render(h, context) {
    const label = context.props.label;
    const size = context.props.size;

    const classes = () => {
      if (!size) {
        return {
          control: [],
          label: [],
        };
      }

      // ['col', 'sm', '12']
      let raw;

      if (size.constructor !== String) {
        raw = ['col', 'sm', parseInt(size, 10)];
      } else {
        raw = size.split('-');
        raw[2] = parseInt(raw[2], 10);
      }

      return {
        control: raw.join('-'),
        label: [...raw.slice(0, 2), 12 - raw[2]].join('-'),
      };
    };

    const renderLabel = () => (
      <label class={[classes().label, 'control-label']}>{label}</label>
    );

    const renderControl = () => ((size !== undefined)
      ? (<div class={classes().control}>{context.children}</div>)
      : (context.children));

    return (
      <div class="form-group">
        {label !== undefined && renderLabel()}
        {renderControl()}
      </div>
    );
  },
};
