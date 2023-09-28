import React from 'react'
import PanelLayout from '../components/sidebar/layouts/panel-layout'
import { withLayout } from '@moxy/next-layout'

const addTypeService = () => {
  return (
    <form class="w-full p-40 m-2 mx-6  pt-20 rounded overflow-hidden shadow-lg bg-white ">
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
        <div class="flex flex-wrap -mx-2 mb-6">

          <div class="w-full md:w-1/2  mb-6 md:mb-0">
          <div class="relative mb-3 w-full px-3">
            <input
          
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
          </div>
          <div class="w-full md:w-1/2 px-2 mb-6 md:mb-0">
          <div class="relative mb-3 w-full px-3">
            <input
          
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
          </div>

          <text class='mr-4 mb-2 text-gray-500'>توضیحات</text>
          <div class="flex w-full mx-3 mb-4  items-center border border-gray-300 bg-white">
            <input
              type="text"
              class="peer m-0 block h-[58px] w-full rounded  border-solid border-neutral-300 bg-white bg-clip-padding px-3  text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary  [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingInput"
              placeholder="name@example.com" />
            {/* {
              usernames?.map((name) => (
                <span style={{ minWidth: '80px' }} class=" items-center mx-1  rounded-md bg-blue-50 px-2 my-1 py-2 text-xs font-medium text-sm text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  <RiDeleteBin7Line color='black' style={{ cursor: 'pointer' }} onClick={() => handleRemoveUsername(name)} />
                  <text style={{ whiteSpace: 'normal' }} width={'100px'}>{name}</text>
                </span>
              ))
            } */}
            <span  class=" items-center  mx-1  rounded-md bg-gray-50 px-2 py-2 text-xs font-medium text-sm text-gray-600 ring-1 ring-inset ring-gray-500/10" style={{ cursor: 'pointer' }} >افزودن</span>

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
            <button  class="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              ایجاد
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default withLayout(<PanelLayout />)(addTypeService)
