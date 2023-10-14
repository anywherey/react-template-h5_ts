import Cookies from "js-cookie";
const TokenKey = "mytoken";
export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token: string, expires?: expires) {
  if (expires) {
    const newExpires = parseExpires(expires);
    return Cookies.set(TokenKey, token, { expires: newExpires });
  } else {
    return Cookies.set(TokenKey, token);
  }
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

function parseExpires(str: expires) {
  const num = parseInt(str.substring(0, str.length - 1));
  const unit = str.charAt(str.length - 1).toLowerCase();
  let days;

  if (unit === "h") {
    days = num / 24;
  } else if (unit === "m") {
    days = num / 1440; // 1440 = 24 * 60
  } else if (unit === "s") {
    days = num / 86400; // 86400 = 24 * 60 * 60
  } else {
    throw new Error("有错误的时间格式！");
  }

  return days;
}

type expires = `${number}${"h" | "H" | "m" | "M" | "s" | "S"}`;
