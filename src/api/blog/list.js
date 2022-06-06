import request from '../../utils/request'
import * as blog from '../../utils/moduleHandler/blog';


export function getColobuList(data) {
    return request({
        url: blog.getBlogUrlPrefix() + '/list',
        method: 'get'
    })
}