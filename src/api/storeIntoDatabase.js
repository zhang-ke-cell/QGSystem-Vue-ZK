import request from "@/utils/request";

export function saveData(params){
    return request({
      url:'/multistep/upload',
      method:'post',
      params
    })
  }