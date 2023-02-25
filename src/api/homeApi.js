import request from './request'
export function getHotSuggestsApi() {
    return request({
        method: 'get',
        url: '/home/hotSuggests',
    })
}

export function getHomeCategories() {
    return request({
        method: 'get',
        url: '/home/categories'
    })
}

export function getHouseList(page) {
    return request({
        method: 'get',
        url: "/home/houselist",
        params: {
            page
        }
    })
}