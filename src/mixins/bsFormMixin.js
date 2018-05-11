import BsFormGroup from '../components/BsFormGroup';

export default {
  components: {
    BsFormGroup,
  },
  props: {
    group: {
      type: Boolean,
      required: false,
      default: true,
    },
    label: {
      type: String,
      required: false,
    },
    size: {
      type: [String, Number],
      required: false,
    },
  },
};
