import React, { useEffect, useState } from 'react'
import useMutation from 'swr/mutation'
import axios from 'axios';
import { baseUrl } from '../components/lib/api';
import useSWR from 'swr';
import { useRouter } from "next/router"
import PanelLayout from '../components/sidebar/layouts/panel-layout';
import { withLayout } from '@moxy/next-layout';
import { RiDeleteBin7Line } from "react-icons/ri";

const fetcherGetMission = async (url) => {
  console.log('start')
  const res = await axios.get(baseUrl + url , { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1pc3Npb25fbWFuYWdlciIsInJvbGUiOiJOOGFKVURqa0pVIiwidXNlcl9pZCI6Il9GaTF4WWtCcjR3dVotcUFLOTVmIiwiZXhwaXJlIjoxNjk4MzExMjEzLjM0MzUxOTd9.pSiuE2Nz5CTeDDo6NAEIyOpwmzyF146aidhp1xZpFUY' } })
  return res.data
}

const updatePost = async (url ,{ arg } = {}) =>

  axios.patch(baseUrl + url, arg  ,{ headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1pc3Npb25fbWFuYWdlciIsInJvbGUiOiJOOGFKVURqa0pVIiwidXNlcl9pZCI6Il9GaTF4WWtCcjR3dVotcUFLOTVmIiwiZXhwaXJlIjoxNjk4MzExMjEzLjM0MzUxOTd9.pSiuE2Nz5CTeDDo6NAEIyOpwmzyF146aidhp1xZpFUY' } })

  
  
  
  const EditAgentGroup = () => {
    const router = useRouter()
    
    const { data: dataAgent, isLoading: isLoadingAgent, mutate: mutateAgent, error: errorAgent } = useSWR(router.query.id && `amel_group?id=${router.query.id}`, fetcherGetMission,[router.query.id])
    const { trigger: editAmelGroup, isMutating: isAddingAmelGroup} = useMutation(router.query.id && `amel_group/${router.query.id}`, updatePost ,[router.query.id])

  const [username, setUsername] = useState('')
  const [usernames, setUsernames] = useState([])
  const [tag, setTag] = useState('')
  const [tags, setTags] = useState([])
  const [yekta, setYekta] = useState('')
  const [name, setName] = useState('')
 
  // const { data: dataAgentGroup, isLoading: isLoadingAgentGroup, mutate: mutateAgentGroup, error: errorAgentGroup } = useSWR(`label?id=${router.query.id}`, fetcherGetMission)

  useEffect(()=>{
    console.log(dataAgent?.message?.[0]?._source )
    setName(dataAgent?.message?.[0]?._source?.name)
    setYekta(dataAgent?.message?.[0]?._source?.yekta)
    setTags(dataAgent?.message?.[0]?._source?.keys)
    setUsernames(dataAgent?.message?.[0]?._source?.usernames)
  },[dataAgent])

  const handleAddUsername = () => {
    console.log(username)
    setUsernames([username, ...usernames])
    setUsername('')
  }

  const handleRemoveUsername = (e) => {
    setUsernames(usernames?.filter((name) => (name !== e)))
  }

  const handleAddLabel = () => {
    setTags([tag, ...tags])
    setTag('')
  }
  const handleRemoveTag = (e) => {
    setTags(tags?.filter((tag) => (tag !== e)))
  }

  const handleSubmitForm = ()=>{
    editAmelGroup({yekta ,name , keys:tags , usernames})
  }

  return (
    <form class="w-full p-40 m-2 mx-6  pt-20 rounded overflow-hidden shadow-lg bg-white font-adelia">
      <div class='mb-10'>
        <div class="flex items-center gap-x-3 ">
          <h2 class="text-lg font-medium text-gray-800 ">مشخصات</h2>
        </div>

      </div>
      <div class='mb-4 border p-8 rounded bg-slate-50 rounded p-8'>
        <div class='mb-10'>
          <div class="flex items-center gap-x-3 ">
            <h2 class="text-lg font-medium text-gray-800 ">اطلاعات عمومی</h2>
          </div>

        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="relative mb-8 w-full px-3">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary  [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingInput"
              placeholder="name@example.com" />
            <label
              for="floatingInput"
              class="pointer-events-none absolute right-3 top-1 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
            >نام</label
            >
          </div>
          <div class="relative mb-3 w-full px-3">
            <input
            value={yekta}
              onChange={(e) => setYekta(e.target.value)}
              type="text"
              class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary  [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingInput"
              placeholder="name@example.com" />
            <label
              for="floatingInput"
              class="pointer-events-none absolute right-3 top-1 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
            >نام یکتا</label
            >
          </div>

          <text class='mr-4 mb-2 text-gray-500'>نام های کاربری</text>
          <div class="flex w-full mx-3 mb-4  items-center border border-gray-300 bg-white">
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              class="peer m-0 block h-[58px] w-full rounded  border-solid border-neutral-300 bg-white bg-clip-padding px-3  text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary  [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingInput"
              placeholder="name@example.com" />
            {
              usernames?.map((name) => (
                <span style={{ minWidth: '80px' }} class=" items-center mx-1  rounded-md bg-blue-50 px-2 my-1 py-2 text-xs font-medium text-sm text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  <RiDeleteBin7Line color='black' style={{ cursor: 'pointer' }} onClick={() => handleRemoveUsername(name)} />
                  <text style={{ whiteSpace: 'normal' }} width={'100px'}>{name}</text>
                </span>
              ))
            }
            <span onClick={handleAddUsername} class=" items-center  mx-1  rounded-md bg-gray-50 px-2 py-2 text-xs font-medium text-sm text-gray-600 ring-1 ring-inset ring-gray-500/10" style={{ cursor: 'pointer' }} >افزودن</span>

            {/* <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
              Cancel
            </button> */}

            {/* <label
              for="floatingInput"
              class="pointer-events-none absolute right-3 top-1 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
            >کلید واژه ها</label
            > */}
          </div>
          <text class='mr-4 mb-2 text-gray-500'>برچسب ها</text>
          <div class="flex w-full mx-3 mb-4  items-center border border-gray-300 bg-white">
            <input
              onChange={(e) => setTag(e.target.value)}
              value={tag}
              type="text"
              class="peer m-0 block h-[58px] w-full rounded  border-solid border-neutral-300 bg-white bg-clip-padding px-3  text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary  [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingInput"
              placeholder="name@example.com" />
            {
              tags?.map((tag) => (
                <span style={{ minWidth: '80px' }} class=" items-center mx-1  rounded-md bg-blue-50 px-2 my-1 py-2 text-xs font-medium text-sm text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  <RiDeleteBin7Line color='black' style={{ cursor: 'pointer' }} onClick={() => handleRemoveTag(tag)} />
                  <text>{tag}</text>
                </span>
              ))
            }

            <span onClick={handleAddLabel} class=" items-center  mx-1  rounded-md bg-gray-50 px-2 py-2 text-xs font-medium text-sm text-gray-600 ring-1 ring-inset ring-gray-500/10" style={{ cursor: 'pointer' }}>افزودن</span>

            {/* <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
              Cancel
            </button> */}

            {/* <label
              for="floatingInput"
              class="pointer-events-none absolute right-3 top-1 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
            >کلید واژه ها</label
            > */}
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

export default withLayout(<PanelLayout />)(EditAgentGroup)
