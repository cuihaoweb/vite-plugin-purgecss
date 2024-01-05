# what is vite-plugin-purgecss-v2
vite-plugin-purgecss-v2 is a plugin of vite，to tree shaking css.

**support for any framework!!!**

> the name of `vite-plugin-purgecss-v2` and `vite-plugin-purgecss` is very similar，but `vite-plugin-purgecss` can not fit my expect and `vite-plugin-purgecss` discontinued updates，so create a new plugin `vite-plugin-purgecss-v2` to replace `vite-plugin-purgecss`.



# usage
1. install: `npm i vite-plugin-purgecss-v2 -D`

2. usage:
    ```js
    // vite.config.js
    import { defineConfig } from 'vite'
    import purgecss from 'vite-plugin-purgecss-v2';

    // https://vitejs.dev/config/
    export default defineConfig({
        // ...
        plugins: [
            purgecss()
        ]
    });
    ```