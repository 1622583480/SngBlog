import { createI18n } from "vue-i18n"
import elementEnLocale from 'element-plus/lib/locale/lang/en'
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn'
import enLocale from './lang_en.json'
import zhLocale from './lang_zh.json'
import { getLanguage } from '../../../utils/cookies'

// const modelsFile = require.context(
//     './', //组件所在目录的相对路径
//     false, //是否查询其子目录
//     /^lang\_\w+\.json$/ //匹配基础组件文件名的正则表达式
// )
// const languageList = modelsFile.keys().map(item => {
//     return modelsFile(item)[Object.keys(modelsFile(item)).filter((i: any) => i.includes('Saga'))[0]];
// })
// console.log(languageList)
// 创建 messages 语言配置项 配置两种 语言配置
// 自定义语言包和element语言包解构到 当前语言配置中 
let messages = {
    en: {
        ...elementEnLocale,
        ...enLocale

    },
    "zh-cn": {
        ...elementZhLocale,
        ...zhLocale
    }
}
// 暴露getLocale函数 读取当前语言状态
export const getLocale = function () {
    // 读取cookie存入的当前语言
    const cookieLanguage = getLanguage()
    // 如果有返回当前语言
    if (cookieLanguage) {
        return cookieLanguage
    }
    // 如果没有，获取系统语言并且转换小写
    const language = navigator.language.toLowerCase()
    // 获取messages 语言 遍历
    const locales = Object.keys(messages)
    for (const locale of locales) { //for ... of直接可以拿到属性值
        // 如果messsage 包里面有系统语言返回
        if (language.indexOf(locale) > -1) {
            return locale
        }
    }
    // 否则默认返回中文
    // 默认语言 简体中文
    return 'zh-cn'
}


// 构建i18n国际化语言对象
const languageDefault = {
    locale: getLocale(),
    fallbackLocale: elementEnLocale.name,
    messages
}
const i18n = createI18n(languageDefault)

// 默认暴露i18n对象
export default i18n