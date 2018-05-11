export default {
  functional: true,
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  render(h, context) {
    return (
      <option value={context.props.value}>
        {context.props.name}
      </option>
    )
  }
}
