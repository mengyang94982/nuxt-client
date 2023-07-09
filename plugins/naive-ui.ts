import { setup } from '@css-render/vue3-ssr'

export default defineNuxtPlugin(nuxtApp => {
  if (process.server) {
    const { collect } = setup(nuxtApp.vueApp)
    const originalRenderMeta = nuxtApp.ssrContext?.renderMeta
    // nuxtApp.ssrContext = nuxtApp.ssrContext // 这两行不一样，我没有把空对象赋值上去
    if (nuxtApp.ssrContext) {
      // 加了一个nuxtApp.ssrContext有值的判断
      nuxtApp.ssrContext.renderMeta = () => {
        if (!originalRenderMeta) {
          return {
            headTags: collect()
          }
        }
        const originalMeta = originalRenderMeta()
        if ('then' in originalMeta) {
          return originalMeta.then(resolvedOriginalMeta => {
            return {
              ...resolvedOriginalMeta,
              headTags: resolvedOriginalMeta.headTags + collect()
            }
          })
        }
        return {
          ...originalMeta,
          headTags: originalMeta.headTags + collect()
        }
      }
    }
  }
})
