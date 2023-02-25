import request from './request'

// 城市
function getCityAll() {
    return request({
      method:'get',
      url: "/city/all"
    })
    // return request.get("/city/all")
}

export default {
    getCityAll
}