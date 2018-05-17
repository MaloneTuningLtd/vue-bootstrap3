import slugify from '@sindresorhus/slugify';
import * as components from './components';

function plugin (Vue) {
  Object.keys(components).forEach(component => {
    Vue.component(
      slugify(component),
      components[component]
    );
  });
};

// install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;

const version = '__VERSION__';

export {
  version,
  components,
};
