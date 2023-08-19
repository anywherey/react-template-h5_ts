import request from '@/http'
export function getTestApi(){
    return request({
        url:'/test',
        method:'get'
    })
}
