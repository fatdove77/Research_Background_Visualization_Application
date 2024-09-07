import toast from "react-hot-toast";
import service from "./index";
import axios from "axios";


const proxyUrl = 'https://thingproxy.freeboard.io/fetch/';
const apiUrl = 'https://serpapi.com/search';
//传送照片
export async function PassImg(photo){
  console.log(photo);
  toast.success(photo)
  const response = await service.post('/uploadImg',{photo:photo})
  toast.success("传给后端")
  return response;
}

export async function SearchScholar (query){
  // const apiKey = '45157b0e5933ddb546971e35028ec8c92f8e296cf23dbe4d5f379747dbb7b11e';  // 替换为你的 API 密钥
  // const params = {
  //   engine: 'google_scholar',
  //   q: "Sun Lin",  // 搜索查询
  //   api_key: apiKey
  // };
  const params={
    name:query
  }
  try {
    const response = await service.get("/person",{params});
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Google Scholar API:', error);
    toast.error(error.message);
    return null;
  }
}

export async function SearchScholarById (query){
  try {
    const response = await service.get(`/person/${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Google Scholar API:', error);
    return null;
  }
}


//登录
export async function LoginPost(formData){
  try {
    console.log("账号密码",formData);
    const response = await service.post(`/login`,formData);
    return response;
  } catch (error) {
    console.error('login error', error);
    return null;
    
  }
  
}



//拿到所有会议信息
export async function GetAllSchedules (){
  try {
    const response = await service.get(`/schedules`);
    return response.data;
  } catch (error) {
    console.error('Error :', error);
    return null;
  }
}

//给用户添加会议日程
export async function AddUserSchedule (scheduleId){
  try {
    const response = await service.post(`/schedules/add`,{scheduleId});
    return response.data
  } catch (error) {
    console.error('Error adding event:', error);
  }
}


//得到用户参加的会议
export async function GetUserSchedules(){
  try {
    const response = await service.get(`/users/getSchedules`);
    return response.data
  } catch (error) {
    console.error('Error adding event:', error);
  }
}

//删除用户预约会议
export async function DeleteUserSchedule (scheduleId){
  try {
    const response = await service.post(`/users/deleteSchedule`,{scheduleId});
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

