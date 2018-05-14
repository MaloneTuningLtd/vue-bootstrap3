import BsFormMixin from '@/mixins/bsFormMixin'

export default {
  props: {
    placeholder: {
      type: String,
      required: false
    },
    rows: {
      type: [Number, String],
      required: false,
      default: 3,
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
    const inputTextarea =
      <textarea
        class="form-control"
        placeholder={this.placeholder}
        rows={this.rows}
        value={this.value}
        onInput={this.updateValue}>
      </textarea>
    
    return (this.group)
      ? <bs-form-group label={this.label} size={this.size}>{inputTextarea}</bs-form-group>
      : inputTextarea
  }
}
