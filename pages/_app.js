import '@/styles/globals.css'
import { QueryParamProvider } from 'use-query-params'
import { NextAdapter } from 'next-query-params'

import { LayoutTree } from '@moxy/next-layout'

const Adapter = (props) => <NextAdapter {...props} shallow={true} />


export default function App({ Component, pageProps }) {
  return (
    <QueryParamProvider adapter={Adapter} options={{ enableBatching: true }}>

      <LayoutTree Component={Component} pageProps={pageProps} />
    </QueryParamProvider>


  )
}
