import axios from "axios"


const api = axios.create({baseURL: 'https://portfolio-news-api.onrender.com/api'})
export const config={
  params:{
    limit: 10,
    page: 1
  }
}

export const getAllArticles = (page)=>{
return api.get(`/articles?page=${page}`,)
.then(res =>{
  console.log(res.request.responseURL)
  return res.data
}).catch(err =>{
  console.log(err,'<<<<error');
})

}