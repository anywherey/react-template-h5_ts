/* 设计稿是750,采用1：100的比例,font-size为100 * (docEl.clientWidth * dpr / 750) */
const docEl = document.documentElement;
const fontEl = document.createElement("style");
const metaEl = document.querySelector('meta[name="viewport"]');
const dpr = window.devicePixelRatio || 1;
const rem = 50 * ((docEl.clientWidth * dpr) / 375);
const scale = 1 / dpr;
// 设置viewport，进行缩放，达到高清效果
metaEl.setAttribute(
  "content",
  "width=" +
    dpr * docEl.clientWidth +
    ",initial-scale=" +
    scale +
    ",maximum-scale=" +
    scale +
    ", minimum-scale=" +
    scale +
    ",user-scalable=no",
);
// 设置data-dpr属性，留作的css hack之用，解决图片模糊问题和1px细线问题
docEl.setAttribute("data-dpr", dpr.toString());
// 动态写入样式
docEl.firstElementChild.appendChild(fontEl);
fontEl.innerHTML = "html{font-size:" + rem + "px!important;}";
