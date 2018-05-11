import BsFormMixin from '../mixins/bsFormMixin';

export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    value: {
      type: String,
      required: true,
    },
  },
  mixins: [BsFormMixin],
  methods: {
    updateValue(event) {
      if (event.target !== event.currentTarget) return;

      this.$emit('input', event.target.value);
    }
  },
  render(h) {
    const inputText =
      <input
        class="form-control"
        type={this.type}
        value={this.value}
        onInput={this.updateValue}
      />
    
      return (this.group)
        ? <bs-form-group label={this.label} size={this.size}>{inputText}</bs-form-group>
        : inputText
  }
}
