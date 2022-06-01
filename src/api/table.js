import request from '@/utils/request'

export function getList(params) {
  // // MOCK
  // return request({
  //   url: '/vue-admin-template/DataPresentation/list',
  //   method: 'get',
  //   params
  // })
  return request({
    url: '/question/all/' + params.pageNumber,
    method: 'get',
    params
  })
}

export function getListByToken(params) {
  // // MOCK
  // return request({
  //   url: '/vue-admin-template/DataPresentation/list',
  //   method: 'get',
  //   params
  // })
  return request({
    url: '/question/all/' + params.token + '/' + params.pageNumber,
    method: 'get',
    params
  })
}

export function getListByCondition(data){
  return request({
    url:'/question/findbycondition',
    method:'post',
    data
  })
}
