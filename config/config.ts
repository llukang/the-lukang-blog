import path from 'path';
import { IConfig } from 'umi-types';

import routes from './routes';
import plugins from './plugins';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  routes: routes,
  plugins: plugins,
  alias: {
    '@': path.join(__dirname, '../src'),
  },
};

export default config;
