export default {
  props: {
    current: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  computed: {
    numOfPages() {
      return Math.ceil(this.total / this.perPage);
    }
  },
  methods: {
    previous(event) {
      event.preventDefault();

      if (this.current !== 1) {
        this.$emit('to', this.current - 1);
      }
    },
    next(event) {
      event.preventDefault();

      if (this.current !== this.total) {
        this.$emit('to', this.current + 1);
      }
    },
    navigateToPage(event) {
      event.preventDefault();
      
      const page = event.target.dataset.page;
      
      if (!!page) {
        this.$emit('to', page);
      }
    },
  },
  render(h) {
    const pages = [...Array(this.numOfPages).keys()].map(page => (
      <li><a onClick={this.navigateToPage} href="#" data-page={page + 1}>{page + 1}</a></li>
    ));

    return (
      <ul class="pagination">
        <li class={{ disabled: this.current === 1 }}><a onClick={this.previous} href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
          {pages}
        <li class={{ disabled: this.current === this.total }}><a onClick={this.next} href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
      </ul>
    );
  },
};
