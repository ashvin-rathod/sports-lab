import axios from "axios"
const isToken = localStorage.getItem('admin-login');

  const baseUrl = 'http://18.171.24.247:3000/'
  const token = isToken ?  isToken : '';
  const header = {
    headers: { 
      "Content-Type": 'application/x-www-form-urlencoded',
      "auth": token
     }
  }

  // axios get 
  // export  const getaxios =  async(url)=>{
  //   return (await axios.get(`${baseUrl}${url}`,header))
  // }
 
  // // axios post   
  // export  const postaxios = async(url,bodyData)=>{
  //   return (await axios.post(`${baseUrl}${url}`,bodyData,header))
  // }
 
  const instence = axios.create({
         baseURL:baseUrl,
         headers: header.headers
  })
 
export default instence;