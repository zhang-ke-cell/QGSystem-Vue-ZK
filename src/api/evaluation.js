import request from '@/utils/request'

export function getFirstUnchecked(params) {
  return request({
    url: '/question/unchecked',
    method: 'get',
    params
  })
}

export function getRandom() {
  return request({
    url: '/question/random',
    method: 'get',
  })
}

export function getRandomByCondition(params) {
  return request({
    // url: `/question/randomByCondition/${params.cSubject}/${params.cLanguage}/${params.cSource}`,
    url: `/question/randomByCondition`,
    method: 'get',
    params
  })
}

// http://47.95.145.72:8089/qg-server/question/update
export function updateQuestion(data) {
  return request({
    url: '/question/update',
    method: 'post',
    data
  })
}

export function rateQuestion(params) {
  return request({
    url: '/question/rate',
    method: 'post',
    params
  })
}

export function deleteQuestion(params) {
  return request({
    url: `/question/delete/${params.qId}`,
    method: 'delete',
  })
}


