import http from "../utils/http/index";

// get 请求
export function get(api, params) {
    return http.get(api, params);
  }
  
  // post 请求
  export function post(api, params) {
    return http.post(api, params);
  }
//   const host = "/data";

export function getStudent() {
    return get(`/School/student.json`) ;
}

export function getStudentTeacher(params) {
    return get(`/School/${params}.json`) ;
}

export function getNenghao() {
    return get(`/School/nenghao.json`) ;
}

export function getAfgj() {
    return get(`/School/afgjdata.json`) ;
}
export function getGaojing() {
    return get(`/School/gaojing.json`) ;
}
export function getGaojingAll() {
    return get(`/school/All_list`) ;
}
//安防态势页面
export function getAfsj() {
    return get(`/afts/allAfts.json`) ;
}
export function getAfsjChartData() {
    return get(`/afts/AftaChartData.json`) ;
}
export function getAfgjtableData() {
    return get(`/afts/AfsjtableData.json`) ;
}
export function getAfsbData() {
    return get(`/afts/ShebeiData.json`) ;
}
export function gettxssData() {
    return get(`/bxtx/txss.json`) ;
}
