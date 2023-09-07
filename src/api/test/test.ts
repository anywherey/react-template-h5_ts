import request from "@/http";
export function getTestApi() {
  return request({
    url: "/test",
    method: "get",
  });
}
export function getTestApi2() {
  return request({
    url: "/test2",
    method: "get",
  });
}
export function getMockApi() {
  return request({
    url: "/mock",
    method: "get",
  });
}
