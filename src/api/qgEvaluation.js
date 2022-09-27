import request from "@/utils/request";

export function selectAlgo(params){
  return request({
    url:'/multistep/selectAlgo',
    method:'get',
    params
  })
}

export function getQuestions(params){
  return request({
    url:'/multistep/getQuestions',
    method:'get',
    params
  })
}

export function updateQustion(data){
  return request({
    url:'/multistep/updateQuestion',
    method:'post',
    data
  })
}

export function deleteQuestion(params){
  return request({
    url:'/multistep/deleteQuestion',
    method:'delete',
    params
  })
}
