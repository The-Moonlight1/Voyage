import request from './request'

// 城市
function getCityAll() {
    return request.get({
      url: "/city/all"
    })
}

export  {
    getCityAll
}