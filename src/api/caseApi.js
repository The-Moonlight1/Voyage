import request from './request'

function caseGetInfo(data){
    return request({
        method:get,
        url:'/userInfo',
        params:data
    })
}

export default {
    caseGetInfo
}