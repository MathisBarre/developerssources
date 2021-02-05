import {useEffect, useState} from 'react'

export default function FaunaDB(props) {
  return (
    <>
      <h2>Hey !</h2>
      <pre>

      </pre>
    </>
  )
}

export async function getStaticProps({params, preview, previewData}) {
  


  return {
    props : {

    },
    revalidate : 86400
  }
}