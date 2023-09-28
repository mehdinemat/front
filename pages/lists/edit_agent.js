import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useSWR from 'swr'
import PanelLayout from '../components/sidebar/layouts/panel-layout';
import { withLayout } from '@moxy/next-layout';
import { baseUrl } from '../components/lib/api';
import { useRouter } from "next/router"
import useMutation from 'swr/mutation'
import { AiFillAliwangwang } from "react-icons/ai";
import Select from 'react-select';

const fetcherGetMission = async (url) => {
  console.log('start')
  const res = await axios.get(baseUrl + url , { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1pc3Npb25fbWFuYWdlciIsInJvbGUiOiJOOGFKVURqa0pVIiwidXNlcl9pZCI6Il9GaTF4WWtCcjR3dVotcUFLOTVmIiwiZXhwaXJlIjoxNjk4MzExMjEzLjM0MzUxOTd9.pSiuE2Nz5CTeDDo6NAEIyOpwmzyF146aidhp1xZpFUY' } })
  return res.data
}

const updatePost = async (url ,{ arg } = {}) =>
  axios.patch(baseUrl + url , arg, { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1pc3Npb25fbWFuYWdlciIsInJvbGUiOiJOOGFKVURqa0pVIiwidXNlcl9pZCI6Il9GaTF4WWtCcjR3dVotcUFLOTVmIiwiZXhwaXJlIjoxNjk4MzExMjEzLjM0MzUxOTd9.pSiuE2Nz5CTeDDo6NAEIyOpwmzyF146aidhp1xZpFUY' } })


const EditAgent = () => {
  const router = useRouter()

  const [twitterName , setTwitterName] = useState('')
  const [twitterPass , setTwitterPass] = useState('')
  const [twitterEmail , setTwitterEmail] = useState('')
  const [twitterEmailPass , setTwitterEmailPass] = useState('')
  const [label , setLabel] = useState('')
  const [amelGroup , setAmelGroup] = useState('')
  const [situation , setSituation] = useState('')
  const [options , setOptions] = useState([])

  const { data: dataAmelGroup, isLoading: isLoadingAmelGroup, mutate: mutateAmelGroup, error: errorAmelGroup } = useSWR(`amel_group`, fetcherGetMission)
  const { data: dataTags, isLoading: isLoadingTags, mutate: mutateTags, error: errorTags } = useSWR(`label`, fetcherGetMission)



  const { data: dataAgent, isLoading: isLoadingAgent, mutate: mutateAgent, error: errorAgent } = useSWR(router.query.id && `amel?id=${router.query.id}`, fetcherGetMission ,[router.query.id])
  const { trigger: editAgent, isMutating: isAddingAgent} = useMutation(router.query.id && `amel/${router.query.id}`, updatePost ,[router.query.id])


  useEffect(()=>{
    console.log(dataAgent?.message?.[0]?._source)
    console.log(dataAgent?.message?.[0]?._source?.situation)
    setSituation(dataAgent?.message?.[0]?._source?.situation)
    setAmelGroup(dataAgent?.message?.[0]?._source?.amel_group)
    setLabel(dataAgent?.message?.[0]?._source?.labels)
    setTwitterName(dataAgent?.message?.[0]?._source?.twitter_username)
    setTwitterPass(dataAgent?.message?.[0]?._source?.twitter_pass)
    setTwitterEmail(dataAgent?.message?.[0]?._source?.twitter_email)
    setTwitterEmailPass(dataAgent?.message?.[0]?._source?.twitter_email_password)
    console.log(dataAgent?.message?.[0]?._source?.labels?.map((v)=>({value:v , label:v})) , 'thisis ssss')
  },[dataAgent])

  const handleSubmitForm = ()=>{
    editAgent({twitter_email_password:twitterEmailPass , twitter_email:twitterEmail , twitter_pass:twitterPass , twitter_username:twitterName , labels:label , amel_group:amelGroup , situation})
  }

  useEffect(()=>{
    setOptions(dataTags?.message?.map((item)=>({value:item?._source?.title , label:item?._source?.title})))
  },[dataTags])

  return (
    <form class="w-full p-40 m-2 mx-6 pt-20 rounded overflow-hidden shadow-lg bg-white font-adelia">
      <div class='mb-10'>
        <div class="flex items-center gap-x-3 ">
          <h2 class="text-lg font-medium text-gray-800  ">مشخصات</h2>
        </div>

      </div>
      <div class='mb-4 border bg-slate-50 p-8 rounded'>
        <div class='mb-10'>
          <div class="flex items-center gap-x-3 ">
            <h2 class="text-lg font-medium text-gray-800 ">اطلاعات عمومی</h2>
          </div>

        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-state">
              وضعیت
            </label>
            <div class="relative">
             { situation && <select onChange={(e)=>setSituation(e.target.value)} class="block appearance-none w-full  bg-white  border border-gray-200 py-3 px-4 pr-8 rounded  focus:outline-none focus:bg-white " id="grid-state" defaultValue={situation}>
             
                  
                    <option >یک گزینه را انتخاب کنید</option>
                    <option value={'فعال'}>فعال</option>
                    <option value={'غیرفعال'}>غیرفعال</option>
                    <option value={'بازبینی'}>بازبینی</option>
                
               
              </select>}
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
              گروه های عامل
            </label>
            {
              amelGroup && <div class="relative">
              <select class="block appearance-none w-full bg-white   border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded  focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={(e)=>{setAmelGroup(e.target.value)}} defaultValue={amelGroup}>
                {
                  dataAmelGroup?.message?.map((item)=>(
                    
                    <option value={item?._source?.name}>{item?._source?.name}</option>
                  ))
                }
               
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
            }
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
              برچسب ها
            </label>
            {  options && dataAgent?.message &&
            <Select options={options} isRtl={true} isMulti defaultValue={dataAgent?.message?.[0]?._source?.labels?.map((v)=>({value:v , label:v}))}   onChange={(e)=>{setLabel(e?.map((v)=>(v.value)))}}
              />
              }
           {/* {
            label && <div class="relative">
             <select onChange={(e)=>{setLabel([e.target.value])}} class="block appearance-none w-full  border border-gray-200 bg-white py-3 px-4 pr-8 rounded  focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" defaultChecked={label[0]} >
             {
               dataTags?.message?.map((item)=>(

                 <option   value={item?._source?.title}>{item?._source?.title}</option>
               ))
             }
            
             </select>
             <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
               <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
             </div>
           </div>
           } */}
          </div>
        </div>
      </div>
      <div class='mb-4 border p-8 rounded bg-slate-50'>
        <div class={'mb-10'}>
          <div class="flex items-center gap-x-3">
            <h2 class="text-lg font-medium text-gray-800 ">اطلاعات توئیتر</h2>
          </div>

        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="relative mb-3 w-full px-3">
            <input
            onChange={(e)=>setTwitterName(e.target.value)}
            value={twitterName}
              type="text"
              class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary  [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingInput"
              placeholder="name@example.com" />
            <label
              for="floatingInput"
              class="pointer-events-none absolute right-3 top-1 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
            >نام کاربری توییتر (twitter username)</label
            >
          </div>
          <div class="relative mb-3 w-full px-3">
            <input
            onChange={(e)=>setTwitterPass(e.target.value)}
            value={twitterPass}
              type="text"
              class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary  [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingInput"
              placeholder="name@example.com" />
            <label
              for="floatingInput"
              class="pointer-events-none absolute right-3 top-1 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
            >رمز عبور توییتر (twitter password)</label
            >
          </div>
          <div class="relative mb-3 w-full px-3">
            <input
            onChange={(e)=>setTwitterEmail(e.target.value)}
            value={twitterEmail}
              type="text"
              class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary  [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingInput"
              placeholder="name@example.com" />
            <label
              for="floatingInput"
              class="pointer-events-none absolute right-3 top-1 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
            >ایمیل توییتر (twitter email)</label
            >
          </div>
          <div class="relative mb-3 w-full px-3">
            <input
            onChange={(e)=>setTwitterEmailPass(e.target.value)}
            value={twitterEmailPass}
              type="text"
              class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary  [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingInput"
              placeholder="name@example.com" />
            <label
              for="floatingInput"
              class="pointer-events-none absolute right-3 top-1 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
            >رمز عبور ایمیل توییتر (twitter email password)</label
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

export default withLayout(<PanelLayout />)(EditAgent)
