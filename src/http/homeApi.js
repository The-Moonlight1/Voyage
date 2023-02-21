import request from './request'

function homeGetInfo(data){
    return request({
        method:get,
        url:'/userInfo',
        params:data
    })
}

export default {
    homeGetInfo
}