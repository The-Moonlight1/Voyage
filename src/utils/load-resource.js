/**
 * 
 * @param {*} image 
 * @returns 资源的路径
 * 参数一 ： 相对路径
 * 参数二 ： 当前路径的URL
 */

const getAssetURL = (image) =>{
    return new URL(image,import.meta.url).href
}