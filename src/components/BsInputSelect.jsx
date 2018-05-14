import BsFormMixin from '@/mixins/bsFormMixin';
import BsOption from '@/components/BsOption';

export default {
  components: {
    BsOption,
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    options: {
      type: Array,
      required: true,
      validator: value => value.every(i =>
        Object.keys(i).indexOf('name') !== -1 &&
        Object.keys(i).indexOf('value') !== -1),
    },
    value: {
      type: String,
      required: true,
    },
  },
  mixins: [BsFormMixin],
  methods: {
    updateValue: function (event) {
      if (event.target !== event.currentTarget) return;

      this.$emit('change', event.target.value);
    }
  },
  render(h) {
    const options = this.options.map(item => (
      <bs-option
        name={item.name}
        value={item.value}>
      </bs-option>
    ))
    
    const inputSelect =
      <select
        class="form-control"
        value={this.value}
        onChange={this.updateValue}>
        {options}
      </select>

    return (this.group)
      ? <bs-form-group label={this.label} size={this.size}>{inputSelect}</bs-form-group>
      : inputSelect
  }
}
