import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer'

export const config: ScullyConfig = {
   handle404: 'index',
  projectRoot: "./src",
  projectName: "my-blog",
  // add spsModulePath when using de Scully Platform Server,
  outDir: './dist/static',
  routes: {
    
    '/posts/:id': {
      type: 'contentFolder',
      id: {
        folder: "./mdfiles"
      }
    },
    
  }
};