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

export default plugin;

// TODO: export individual components /shrug
