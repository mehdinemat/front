import React, { useEffect } from 'react'
import Menu from '../menu'
import useSWR from 'swr'
import axios from 'axios';
import useMutation from 'swr/mutation'
import { baseUrl } from '../../lib/api';
import { useRouter } from 'next/router';
const fetcherGetMission = async (url) => {
  console.log('start')
  const res = await axios.get(baseUrl + url, { headers: { Authorization: 'Bearer ' + localStorage.getItem('access') } })
  return res.data
}

const createPost = (url)=>{
   return axios.post(baseUrl + url , {  
    username :'mission_manager',
    password :'mission_manager'

   })
}

const PanelLayout = ({ children, ...props }) => {
  const router = useRouter()
  const { trigger: login, isMutating: loginMutate } = useMutation(`users/login`, createPost , [])

  
  useEffect(()=>{
    const token = localStorage.getItem('accessagenttoken')
    if(!token){
      router.replace(`/login`)
    }
  },[router])
  

  return (
    <div style={{ direction: 'rtl' }} class="flex font-sans flex-row bg-slate-50">
      <Menu />

      {children}
    </div>
  )
}

export default PanelLayout
