import axios from 'axios'
import React, { useState , useEffect } from 'react'
import useMutation from 'swr/mutation'
import { baseUrl } from '../components/lib/api'
import { useRouter } from 'next/router'


const createPost = (url, { arg } = {}) => {
  return axios.post(baseUrl + url, arg)
}


const Index = () => {



  const router = useRouter()
  const { trigger:loginTrigger , isMutating:isMutatingLogin , data , error } = useMutation(`users/login` , createPost)

  const [username , setUsername] = useState('')
  const [password , setPassword] = useState('')



  const handleSubmitForm = (e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('username',username)
    formData.append('password',password)
    loginTrigger({username , password})

  }
  useEffect(() => {
    if (error) {
      console.log('username or password incorrect')
    } else if (data) {
      localStorage.setItem('accessagenttoken', data.access_token)
      router.replace('/agents/list')
    }
  }, [data, error])

  

  return (
    <section class="bg-gray-50 dark:bg-gray-900 font-adelia">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
      <img class="w-auto h-12" src="/logo.png" alt=""/>           
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700" style={{direction:'rtl'}}>
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 ورود به پنل
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام کاربری</label>
                      <input onChange={(e)=>setUsername(e.target.value)} type="text" name="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رمز عبور</label>
                      <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
              
                  <button onClick={handleSubmitForm} type="submit" class="w-full bg-blue-400 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">ورود</button>
                
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default Index
