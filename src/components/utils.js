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

export const getCommentsByArticleId = (id)=>{
  return api.get(`/articles/${id}/comments`)
  .then(res =>{
    return res.data
  }).catch(err =>{console.log(err);})
}

export const patchVotes = (id, num)=> {
  return api.patch(`/articles/${id}`, {inc_votes: num}).then((res)=>{return res.data}
)}

export const getAllUsers = ()=>{
  return api.get('/users').then((res)=>{return res.data})
}

export const postComment =(id, username, commentText) =>{
  const body = {
    username: username,
    body: commentText
  }
  return api.post(`/articles/${id}/comments`, body).then((res)=>{return res.data}
  )
}

export const deleteCommentById= (id)=>{
  return api.delete(`/comments/${id}`)
}

export function formatDate(dateString) {
  const options = { year: "numeric", month: "short", day: "numeric", hour: 'numeric', minute: 'numeric'};
  return new Date(dateString).toLocaleDateString([], options);
}



