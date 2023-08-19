declare namespace pxToRemInlineStyle {
    interface Options {
        rootValue?: number | ((pixelValue: number) => number);
        unitPrecision?: number;
        propList?: string[];
        selectorBlackList?: Array<string | RegExp>;
        replace?: boolean;
        mediaQuery?: boolean;
        minPixelValue?: number;
        exclude?: string | RegExp | ((file: string) => boolean);
    }
}