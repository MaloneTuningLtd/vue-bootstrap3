export default {
  functional: true,
  props: {
    inline: {
      type: Boolean,
      required: false,
    },
    horizontal: {
      type: Boolean,
      required: false,
    },
  },
  render(h, context) {
    const formClass = Object.keys(context.props)
      .filter(c => (context.props[c]))
      .map(f => `form-${f}`)
    
    return (
      <form class={formClass} {...context.data}>
        {context.children}
      </form>
    )
  }
}
