import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pxtovm from "postcss-px-to-viewport"
import { resolve } from "path"
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  css: {
    postcss: {
      plugins: [
        new pxtovm({
          // px转vm vh 插件配置项  参考文档 ：
          // https://github.com/evrone/postcss-px-to-viewport/blob/master/  README_CN.md
          // /* px-to-viewport-ignore-next */ —在单独的一行上，以防止在下一行上进行转换
          // /* px-to-viewport-ignore */ — 在右边的属性之后，防止在同一行上进行转换
          unitToConvert: 'px',
          viewportWidth: 1920,
          unitPrecision: 5,
          propList: ['*'],
          viewportUnit: 'vw',
          fontViewportUnit: 'vw',
          selectorBlackList: [],
          minPixelValue: 1,
          mediaQuery: true, // 在媒体查询中开启 转换 viewport单位
          replace: true,
          exclude: undefined,
          include: undefined,
          landscape: false,
          landscapeUnit: 'vw',
          landscapeWidth: 568
        })
      ]
    }
  },
  plugins: [vue()
  ]
})
