import request from './request'

export function getDetailInfos(houseId){
    return request({
        method:'get',
        url:'detail/infos',
        params:{
            houseId
        }
    })
}