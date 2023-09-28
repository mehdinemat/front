import React, { useEffect, useState } from 'react'
import PanelLayout from '../components/sidebar/layouts/panel-layout'
import { withLayout } from '@moxy/next-layout'
import axios from 'axios';
import { baseUrl } from '../components/lib/api'
import useMutation from 'swr/mutation'
import useSWR from 'swr'
import formatTime from '../components/utils/jalili';
import { CiCalendarDate } from "react-icons/ci";

const fetcherGetMission = async (url) => {
  console.log('start')
  const res = await axios.get(baseUrl + url, { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1pc3Npb25fbWFuYWdlciIsInJvbGUiOiJOOGFKVURqa0pVIiwidXNlcl9pZCI6Il9GaTF4WWtCcjR3dVotcUFLOTVmIiwiZXhwaXJlIjoxNjk4MzExMjEzLjM0MzUxOTd9.pSiuE2Nz5CTeDDo6NAEIyOpwmzyF146aidhp1xZpFUY' } })
  return res.data
}
const ActiveService = () => {

  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  const { data: serviceData, isLoading: isLoadingData, mutate: mutateData, error: errorData } = useSWR(`services?page=${page}&size=10&status=running`, fetcherGetMission)


  useEffect(() => {
    console.log(serviceData, 'thjsi is data')
  }, [serviceData])

  return (
    <div class="m-2 mx-6" style={{
      width
        : '100%', height: '50vh'
    }}>

      <div class=" rounded overflow-hidden shadow-lg bg-white " style={{
        width
          : '100%', height: '98vh'
      }}>

        <section class="container px-4 mx-auto  m-2">

          <div class="sm:flex sm:items-center sm:justify-between">

            <div class="sm:flex sm:items-center py-2 sm:justify-between">
              <div>
                <div class="flex items-center gap-x-3">
                  <h2 class="text-lg font-medium text-gray-800 ">سرویس های فعال</h2>

                  <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full  ">240 سرویس</span>
                </div>

              </div>


            </div>

          </div>

          <div class="mt-6 md:flex md:items-center justify-end align-baseline text-end">
            <div>

            </div>
            <div class=" bg-white  divide-x rounded-lg  rtl:flex-row-reverse   text-end">

              <div
                data-te-modal-init
                class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalCenteredScrollableLabel"
                aria-modal="true"
                role="dialog">
                <div
                  data-te-modal-dialog-ref
                  class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
                  <div
                    class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none ">




                    <div
                      class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50" style={{ justifyContent: 'right' }}>
                      <button
                        type="button"
                        class="ml-1 inline-block bg-blue-500 rounded bg-primary text-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                        data-te-ripple-init>
                        ایجاد
                      </button>
                      <button
                        type="button"
                        class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase border leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                        data-te-modal-dismiss
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        بازنشانی
                      </button>

                    </div>
                  </div>
                </div>

              </div>

              {/* <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300">
                View all
            </button>

            <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                Monitored
            </button>

            <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
                Unmonitored
            </button> */}

            </div>

            <div class="relative flex items-center mt-4 md:mt-0" style={{ direction: 'ltr' }}>

              <input style={{ direction: 'rtl' }} type="text" placeholder="جست و جو ..." class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5   focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
              <span class="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400 ">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </span>

            </div>
            <div class="flex items-center gap-x-3 mr-2">
              <a href='/lists/add_active_service'>
                <button class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 " data-te-toggle="modal"
                  data-te-target="#exampleModal"
                  data-te-ripple-init>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

                  <span  >افزودن سرویس های جدید</span>
                </button>
              </a>
            </div>
          </div>



          <div class="flex flex-col mt-6">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden border border-gray-200  md:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200  overflow-scroll">
                    <thead class="bg-gray-50 " style={{ direction: 'rtl' }}>
                      <tr>
                        <th scope="col" class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 text-right">
                          عنوان
                        </th>
                        <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                          <button class="flex items-center gap-x-3 focus:outline-none">
                            <span>نوع</span>

                          </button>
                        </th>


                        <th scope="col" style={{ direction: 'rtl', textAlign: 'right' }} class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                          موضوع
                        </th>

                        <th scope="col" class="px-4 flex py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 text-right">شروع </th>

                        <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500  text-right">پایان</th>
                        <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500  text-right">انتشار خودکار</th>
                        <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500  text-right">نام دسته بندی</th>
                        <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500  text-right">عملیات</th>


                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 " style={{ direction: 'rtl' }}>


                      {
                        serviceData?.map((item) => (

                          <tr>
                            <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                            <div>
                                <h2 class="font-medium text-gray-800 dark:text-white ">{item?.mission_name}</h2>
                              </div>
                            </td>
                            <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                              <div>
                                <h2 class="font-medium text-gray-800 dark:text-white ">{item?.type}</h2>
                              </div>
                            </td>
                            <td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
                              <div class="inline px-3 py-1 text-sm font-normal text-gray-500 bg-gray-100 rounded-full  gap-x-2 dark:bg-gray-800">
                                دارد
                              </div>
                            </td>

                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                              <div class="flex items-center" style={{direction:'ltr' , textAlign:'right' , width:'100%' , justifyContent:'right'}}>
                              {formatTime(item?.from_datetime)}<CiCalendarDate fontSize={'16px'} />
                              </div>
                            </td>



                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                              <div class="flex items-center" style={{direction:'ltr' , textAlign:'right' , width:'100%' , justifyContent:'right'}}>
                              {formatTime(item?.to_datatime)}<CiCalendarDate fontSize={'16px'} />
                              </div>
                            </td>
                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                              <div class="flex items-center" style={{direction:'ltr' , textAlign:'right' , width:'100%' , justifyContent:'right'}}>
                              
                              </div>
                            </td>
                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                              <div class='flex flex-row'>
                             {item?.mission_group}

                              </div>

                            </td>
                            <td class="px-4 py-4 text-sm whitespace-nowrap">
                          <div class='flex flex-row'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-5 h-5">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                           

                          </div>

                        </td>
                          </tr>

                        ))
                      }


                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 sm:flex sm:items-center sm:justify-between ">
            <div class="text-sm text-gray-500 dark:text-gray-400">
              صفحه <span class="font-medium text-gray-700 dark:text-gray-100">{page} از 10</span>
            </div>

            <div class="flex items-center mt-4 gap-x-4 sm:mt-0">
              <button onClick={() => setPage(page - 1)} href="#" class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                <span>
                  قبلی
                </span>

              </button>
              <button onClick={() => setPage(page + 1)} href="#" class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">

                <span>
                  بعدی
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
              </button>


            </div>
          </div>
        </section>


      </div>



    </div>
  )
}

export default withLayout(<PanelLayout />)(ActiveService)
