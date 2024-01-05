import {PurgeCSS} from 'purgecss';

/**
 * purgeCSS插件
 * @param {object} options 
 * @returns {import('vite').PluginOption}
 */
export default function myPlugin(options) {
    return {
        name: 'vite-plugin-purgeCSS',
        async generateBundle(_, bundle) {
            const content = [];
            const css = [];
            Object.entries(bundle).forEach(([filename, options]) => {
                if (/\.(js|html)$/.test(filename)) {
                    content.push({ filename, code: options.code });
                    return;
                }
                if (/\.(css)$/.test(filename)) {
                    css.push({ filename, code: options.source });
                }
            });

            await Promise.all(
                css.map(async item => {
                    const purgeCSSResult = await new PurgeCSS().purge({
                        content: ['./index.html'].concat(content.map(item => ({ raw: item.code }))),
                        css: [{ raw: item.code }],
                    });
                    bundle[item.filename].source = purgeCSSResult[0].css;
                })
            );
        }
    };
}