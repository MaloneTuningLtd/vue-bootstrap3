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
    placeholder: {
      type: String,
      required: false
    }
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
        placeholder={this.placeholder}
        type={this.type}
        value={this.value}
        onInput={this.updateValue}
      />
    
      return (this.group)
        ? <bs-form-group label={this.label} size={this.size}>{inputText}</bs-form-group>
        : inputText
  }
}
