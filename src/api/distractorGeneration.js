import request from "@/utils/request";

export function getDistractors(params){
    return request({
      url:'/multistep/distractors',
      method:'get',
      params
    })
  }