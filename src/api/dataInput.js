import request from '@/utils/request'

export function uploadFile(data){
  return request({
    url:'/multistep/uploadFile',
    method:'post',
    data,
    // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  })
}

export function getContext(params){
  return request({
    url:'/multistep/getContext',
    method:'get',
    params
  })
}

export function updateContext(data){
  return request({
    url:'/multistep/updateContext',
    method:'post',
    data
  })
}

export function deleteContext(params){
  return request({
    url:'/multistep/deleteContext',
    method:'delete',
    params
  })
}
