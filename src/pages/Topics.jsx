import { useEffect, useState } from "react"
import { getTopics } from "../components/utils"


export const Topics=()=>{
const [topics, setTopics]=useState([])
const [isLoading, setIsLoading] =useState(true)
useEffect(()=>{
getTopics().then((data)=>{
  console.log(data);
})
})

}