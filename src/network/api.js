import { request } from './requset'


//主体
export function getTopic(page, tab = 'all', limit = 20, mdrender = true) {
    return request({
        url: '/topics',
        method: 'get',
        params: {
            page,
            tab,
            limit,
            mdrender
        }
    })
}