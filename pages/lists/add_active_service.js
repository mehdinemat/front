import React, { useState } from 'react'
import PanelLayout from '../components/sidebar/layouts/panel-layout'
import { withLayout } from '@moxy/next-layout'
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/analog_time_picker";
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from '@hassanmojab/react-modern-calendar-datepicker';
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import { CiCalendarDate } from "react-icons/ci";
import Select from 'react-select';
import { PiArrowsMergeThin } from "react-icons/pi";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const options2 = [
  { value: 'دستی', label: 'دستی' },
  { value: 'فایل اکسل', label: 'فایل اکسل' }
]
const options3 = [
  { value: 'publishingContent', label: 'انتشار محتوا' },
  { value: 'GroupLikeExcel', label: 'لایک گروهی با اکسل' },
  { value: 'retwitteExcel', label: 'ریتوئیت گروهی با اکسل' },
  { value: 'followGroupExcel', label: 'فالو گروهی با اکسل' },
  { value: 'publishingSource', label: 'انتشار محتوا از مخزن' },
  { value: 'publishingFastSource', label: 'انتشار سریع محتوا از مخزن' },
  { value: 'groupLikeFastSource', label: 'لایک سریع گروهی با اکسل' },
  { value: 'retwitteFastExcel', label: 'ریتوئیت سریع گروهی با اکسل' },
  { value: 'followFastExcel', label: 'فالو سریع گروهی با اکسل' },
  { value: 'onfollowGroup', label: 'آنفالو گروهی' },
  { value: 'groupReport', label: 'ریپورت گروهی' },
]

const AddActiveService = () => {


  const [label, setLabel] = useState('')

  return (
    <form class="w-full p-40 m-2 mx-6  pt-20 rounded overflow-hidden shadow-lg bg-white  font-adelia">
      <div class='mb-10'>
        <div class="flex items-center gap-x-3 ">
          <h2 class="text-lg font-medium text-gray-800 ">مشخصات</h2>
        </div>

      </div>
      <div class='mb-4 border p-8 rounded bg-slate-50 rounded p-8'>
        <div class='mb-10'>
          <div class="flex items-center gap-x-3 ">
            <h2 class="text-lg font-medium text-gray-800 ">مشخصات</h2>
          </div>

        </div>
        <div class="flex flex-wrap -mx-2 mb-6">
          <div class="w-full md:w-1/2 px-2 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide  text-xs  mb-2" for="grid-state">
              عنوان سرویس
            </label>
            <div class="relative">
              <div class="relative mb-3 w-full px-3">
                <input

                  type="text"
                  class="peer m-0 block h-[44px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700  focus:outline-none peer-focus:text-primary  "
                  id="floatingInput"
                   />
             
              </div>
              {/* <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div> */}
            </div>
          </div>
          <div class="w-full m- md:w-1/2 px-5 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs  mb-2" for="grid-state">
              نوع سرویس
            </label>
            <div class="relative">
            <Select options={options3} isRtl={true} onChange={(e) => { setLabel(e?.map((v) => (v.value))) }}
                />
              
            </div>

          </div>
        </div>
        <div class="flex flex-wrap -mx-2 mb-6">
          <div class="w-full md:w-1/2 px-2 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide  text-xs  mb-2" for="grid-state">
              تاریخ شروع
            </label>
            <Popover>
              <PopoverHandler>
                <div class="relative">
                  <div class="relative mb-3 w-full px-3">
                    <input
                      type="text"
                      class="peer m-0 block h-[44px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary  [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                      id="floatingInput"
                      placeholder="name@example.com" />
                    <label
                      for="floatingInput"
                      class="pointer-events-none absolute right-3 top-0 origin-[0_0] border border-solid border-transparent px-3 py-2 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
                    ><CiCalendarDate fontSize={'24px'} /></label
                    >
                  </div>
                </div>
              </PopoverHandler>
              <PopoverContent>
                <Calendar

                  shouldHighlightWeekends
                  locale={'fa'}
                />
              </PopoverContent>
            </Popover>

          </div>

          <div class="w-full md:w-1/2 px-2 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide  text-xs  mb-2" for="grid-state">
              تاریخ پایان
            </label>
            <Popover>
              <PopoverHandler>
                <div class="relative">
                  <div class="relative mb-3 w-full px-3">
                    <input
                      type="text"
                      class="peer m-0 block h-[44px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary  [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                      id="floatingInput"
                      placeholder="name@example.com" />
                    <label
                      for="floatingInput"
                      class="pointer-events-none absolute right-3 top-0 origin-[0_0] border border-solid border-transparent px-3 py-2 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
                    ><CiCalendarDate fontSize={'24px'} /></label
                    >
                  </div>
                </div>
              </PopoverHandler>
              <PopoverContent>
                <Calendar

                  shouldHighlightWeekends
                  locale={'fa'}
                />
              </PopoverContent>
            </Popover>

          </div>



        </div>
        <div class="flex flex-wrap -mx-2 mb-6">
          <div class="w-full md:w-1/2 px-5 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs  mb-2" for="grid-state">
              کاربران مجازی
            </label>
            <div class="relative">
              {options &&
                <Select options={options} isMulti isRtl={true} onChange={(e) => { setLabel(e?.map((v) => (v.value))) }}
                />
              }

              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">

              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 px-5 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs  mb-2" for="grid-state">
              وارد کردن محتوا به صورت
            </label>
            <div class="relative">
              {options &&
                <Select options={options2} isRtl={true} onChange={(e) => { setLabel(e) }}
                />
              }

              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">

              </div>
            </div>
          </div>
        </div>


        <div class="flex flex-wrap -mx-2 mb-6">
          <div class="w-full md:w-1/2 px-2 mb-6 md:mb-0">

            <div class="relative">
              <div class="relative mb-3 w-full px-3">
                <input

                  type="text"
                  class="peer m-0 block h-[44px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary  [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                  id="floatingInput"
                  placeholder="name@example.com" />
                <label
                  for="floatingInput"
                  class="pointer-events-none absolute right-3 top-0 origin-[0_0] border border-solid border-transparent px-3 py-2 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
                > نام کاربری مجری
                </label
                >
              </div>
              {/* <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div> */}
            </div>
          </div>
          <div class="w-full md:w-1/2 px-5 mb-6 md:mb-0">

            <div class="relative">
              <input

                type="text"
                class="peer m-0 block h-[44px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary  [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                id="floatingInput"
                placeholder="name@example.com" />
              <label
                for="floatingInput"
                class="pointer-events-none absolute right-3 top-0 origin-[0_0] border border-solid border-transparent px-3 py-2 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
              > نام کاربری مجری
              </label
              >
            </div>

          </div>
        </div>
        <table class="min-w-full divide-y divide-gray-200  overflow-scroll">
          <thead class="bg-gray-50 " style={{ direction: 'rtl' }}>
            <tr>

              <th scope="col" class="px-4 py-3.5 text-sm font-normal text-right rtl:text-right text-gray-500 ">کاربر مجری</th>

              <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 " style={{ textAlign: 'right' }}>محتوای عملیات</th>
              <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500  text-right">اقدامات</th>


            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200 " style={{ direction: 'rtl' }}>


            <tr>
              <td class="px-4 py-4 text-sm font-medium whitespace-nowrap ">
                <div class="inline px-3 py-1 text-sm font-normal text-gray-500 bg-gray-100 rounded-full text-right  gap-x-2 dark:bg-gray-800">
                  دارد
                </div>
              </td>

              <td class="px-4 py-4 text-sm whitespace-nowrap">
                <div class="flex items-center">
                  <div class="object-cover text-white p-2  -mx-1  bg-blue-400 border-white rounded-full dark:border-gray-700 shrink-0" alt="" >label</div>
                </div>
              </td>

              <td class="px-4 py-4 text-sm whitespace-nowrap">
                <div class='flex flex-row'>
                  <svg style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </div>

              </td>
            </tr>





          </tbody>
        </table>

        <div class="flex flex-wrap -mx-2 mb-6">
          <div class="w-full md:w-1/2 px-2 mb-6 md:mb-0">

            <div class="flex items-center mt-4 gap-x-3">
              <button class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto  hover:bg-gray-100  ">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_3098_154395)">
                    <path d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_3098_154395">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <input  type='file' />لیست کاربران
              </button>

              <a href='/lists/add_agent'>
                <button class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 " data-te-toggle="modal"
                  data-te-target="#exampleModal"
                  data-te-ripple-init>
                  <PiArrowsMergeThin/>

                  <span  >دانلود فایل نمونه</span>
                </button>
              </a>
            </div>
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">

          <div class="flex items-center mt-4 gap-x-3">
                            <button class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto  hover:bg-gray-100  ">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3098_154395)">
                                        <path d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3098_154395">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <input  type='file' />لیست لینک ها
                            </button>

                            <a href='/lists/add_agent'>
                                <button class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 " data-te-toggle="modal"
                                    data-te-target="#exampleModal"
                                    data-te-ripple-init>
                                                     <PiArrowsMergeThin/>

                                    <span  >دانلود فایل نمونه</span>
                                </button>
                            </a>
                        </div>

          </div>
        </div>


      </div>
    </form>
  )
}

export default withLayout(<PanelLayout />)(AddActiveService)
