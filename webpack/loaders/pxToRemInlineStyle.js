module.exports = function (source) {
    const options = this.getOptions();
    console.log(options);
    const rootValue = options.rootValue || 0.0625; // 1px转换为rem的比例，默认为1/16 (1px = 0.0625rem)
    console.log(this.resourcePath);
    if (
        this.resourcePath.endsWith('.tsx') ||
        this.resourcePath.endsWith('.jsx') ||
        this.resourcePath.endsWith('.vue')
    ) {
        // 正则表达式匹配style属性中含有px的样式值
        const pxRegExp = /(?<=style\s*=\s*{[^}]*?)(\d+)px/g;

        // 替换px值为rem值
        const remSource = source.replace(pxRegExp, (match, pxValue) => {
            const remValue = parseFloat(pxValue) * rootValue;
            return remValue + 'rem';
        });
        return remSource;
    }
    return source;
};
