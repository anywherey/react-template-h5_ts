const pxtorem = require('postcss-pxtorem');
const {isProduction} = require('./webpack/env');
module.exports = {
    plugins: [
        require('postcss-flexbugs-fixes'), // 用于修复一些和 flex 布局相关的 bug
        isProduction && [
            'postcss-preset-env', // 最新的 CSS 语法转换为目标环境的浏览器能够理解的 CSS 语法，目的是使开发者不用考虑浏览器兼容问题。
            {
                // 使用 autoprefixer 来自动添加浏览器头
                autoprefixer: {
                    grid: true,
                    flexbox: 'no-2009'
                },
                stage: 3
            }
        ],
        // rem方案
        pxtorem({
            rootValue({file}) {
                // 修改rootValue
                if (file && file.indexOf('vant') > -1) {
                    return 37.5;
                } else {
                    // 按照设计稿宽/10决定
                    return 37.5;
                }
            }, //（数字，函数） 根元素字体大小
            propList: ['*'],// 可以从px转换为rem的属性，匹配正则
            exclude: /node_modules/i,// （字符串，正则表达式，函数）要忽略并保留为px的文件路径
            mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 12, // px小于12的不会被转换
            replace: false // （布尔值）替换包含rems的规则，而不添加后备
            // selectorBlackList  : [], // 忽略转换正则匹配项
            // unitPrecision: 5, //（数字）允许REM单位增长的十进制数字
        })
        // vw方案
        // 'postcss-px-to-viewport-8-plugin': {
        //     unitToConvert: 'px', // 需要转换的单位，默认为"px"
        //     viewportWidth: 750, // 设计稿的视口宽度
        //     unitPrecision: 5, // 单位转换后保留的精度
        //     propList: ['*','!font-size'], // 能转化为vw的属性列表,!font-size表示font-size后面的单位不会被转换
        //     viewportUnit: 'vw', // 希望使用的视口单位
        //     fontViewportUnit: 'vw', // 字体使用的视口单位
        //     // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
        //     // 下面配置表示类名中含有'keep-px'都不会被转换
        //     selectorBlackList: ['keep-px'], 
        //     minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
        //     mediaQuery: false, // 媒体查询里的单位是否需要转换单位
        //     replace: true, //  是否直接更换属性值，而不添加备用属性
        //     exclude: [/node_modules/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
        //     include: [/src/], // 如果设置了include，那将只有匹配到的文件才会被转换
        //     landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
        //     landscapeUnit: 'vw', // 横屏时使用的单位
        //     landscapeWidth: 1338, // 横屏时使用的视口宽度
        //   },
    ].filter(Boolean)
};
