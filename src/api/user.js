import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login?' + 'username=' + data.username + '&' + 'password=' + data.password,
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/' + token ,
    // url: '/user',
    method: 'get',
    // params: { token }
    // data: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
