export default {
  functional: true,
  render(h, context) {
    return (
      <div class="container" style="margin-top: 2rem; margin-left: auto; margin-right: auto;">
        {context.children}
      </div>
    )
  }
}
