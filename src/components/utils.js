import axios from "axios"


const api = axios.create({baseURL: 'https://portfolio-news-api.onrender.com/api'})
export const config={
  params:{
    limit: 10,
    page: 1
  }
}

export const getAllArticles = (page)=>{
return api.get(`/articles?page=${page}`)
.then(res =>{
  return res.data
})
}

export const getArticleById= (id) =>{
  return api.get(`/articles/${id}`)
  .then(res =>{
    return res.data
  })
}

export function formatDate(dateString) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString([], options);
}