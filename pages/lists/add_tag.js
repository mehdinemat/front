import { withLayout } from '@moxy/next-layout'
import React, { useEffect, useState } from 'react'
import PanelLayout from '../components/sidebar/layouts/panel-layout'
import InputColor from 'react-input-color';
import axios from 'axios';
import { baseUrl } from '../components/lib/api'
import useMutation from 'swr/mutation'

const createPost = (url ,{ arg } = {})=>{
  return axios.post(baseUrl + url  ,arg, { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1pc3Npb25fbWFuYWdlciIsInJvbGUiOiJOOGFKVURqa0pVIiwidXNlcl9pZCI6Il9GaTF4WWtCcjR3dVotcUFLOTVmIiwiZXhwaXJlIjoxNjk4MzExMjEzLjM0MzUxOTd9.pSiuE2Nz5CTeDDo6NAEIyOpwmzyF146aidhp1xZpFUY' } } )
}

const Tag = () => {

  const { trigger: addTag, isMutating: isAddingTag } = useMutation(`label`, createPost)


  const [color, setColor] = React.useState({});
  const [title , setTitle] = useState('')
  const [category , setCategory ] = useState('')
  const [ value , setValue] = useState('')

  useEffect(()=>{
    console.log(color.hex , 'color')
    
  },[color])

  const handleSubmitForm = ()=>{
    addTag({color:color.hex,category,title,value})
  }

  return (

    <form class="w-full p-40 m-2 mx-6  pt-20 rounded overflow-hidden shadow-lg bg-white font-adelia ">
        <div class='mb-10'>
        <div class="flex items-center gap-x-3 ">
          <h2 class="text-lg font-medium text-gray-800 ">مشخصات</h2>
        </div>

      </div>
      <div class='mb-4 border p-8 bg-slate-50 rounded'>
        <div class='mb-10'>
        <div class="flex items-center gap-x-3 ">
          <h2 class="text-lg font-medium text-gray-800 ">اطلاعات عمومی</h2>
        </div>

      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
      <div class="relative mb-3 w-full px-3">
            <input
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
              type="text"
              class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary  [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingInput"
              placeholder="name@example.com" />
            <label
              for="floatingInput"
              class="pointer-events-none absolute right-3 top-1 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
            >عنوان</label
            >
           
          </div>
          <div class="relative mb-3 mr-2 w-full px-3 ">
          <div class="flex flex-rows w-100 items-center">
            <label
              for="floatingInput"
              style={{marginLeft:'20px'}}
            >رنگ</label
            >
      <InputColor
        initialValue="#5e72e4"
        onChange={setColor}
        placement="left"
      />

    
      <div
     
      />
    </div>
          </div>
          <div class="relative mb-3 w-full px-3">
            <input
            onChange={(e)=>setCategory(e.target.value)}
            value={category}
              type="text"
              class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary  [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingInput"
              placeholder="name@example.com" />
            <label
              for="floatingInput"
              class="pointer-events-none absolute right-3 top-1 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
            >دسته بندی</label
            >
          </div>
          <div class="relative mb-3 w-full px-3">
            <input
            onChange={(e)=>setValue(e.target.value)}
            value={value}
              type="text"
              class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary  [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingInput"
              placeholder="name@example.com" />
            <label
              for="floatingInput"
              class="pointer-events-none absolute right-3 top-1 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
            >مقدار</label
            >
          </div>
          <div class="flex items-center justify-between">
            <button onClick={handleSubmitForm} class="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              ایجاد
            </button>
          </div>
      </div>
        </div>
    </form>
  )
}

export default withLayout(<PanelLayout />)(Tag)
