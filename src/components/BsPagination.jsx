const range = (start, end) => [...Array(1 + end - start).keys()].map(v => start + v);

export default {
  props: {
    range: {
      type: Boolean,
      required: false,
    },
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
    },
    pageRange() {
      const slidingPages = 4;

      // start with page1
      // or start with the last ${slidingPages} (4) from the current page
      let min = Math.max(1, this.current - slidingPages)

      // if there's less pages on the left
      // have more pages on the right...
      const rightFloat = Math.max(0, slidingPages - (min - 1))
      const max = Math.min(this.numOfPages, this.current + slidingPages + rightFloat)

      // if there's less pages on the right (nearing the end)
      // have more pages on the left
      const leftFloat = Math.max(0, slidingPages - (this.numOfPages - max))
      min = Math.max(1, this.current - slidingPages - leftFloat)

      return {
        min,
        max,
      };
    },
    pages() {
      const isRange = this.range;
      const { min, max } = this.pageRange;

      const pages = (!isRange)
        ? range(0, this.numOfPages)
        : range(min - 1, max);

      return pages;
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
    const pages = this.pages.map(page => (
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
