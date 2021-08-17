import { request } from './requset'


//主提
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

// 主题详情
export function getTopicDetial(id) {
    return request({
        url: '/topic/' + id,
        method: 'get',

    })
}

// 用户详情
export function getUserInfo(name) {
    return request({
        url: '/user/' + name,
        method: 'get',

    })
}