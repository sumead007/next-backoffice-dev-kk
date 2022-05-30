import Router from 'next/router';
import React from 'react'
import {useEffect} from "react";

type Props = {}

export default function Index({}: Props) {
  useEffect(()=>{
    Router.push("/login");
})
  return (
    <div>Loading</div>
  )
}

// //server side
// Index.getInitialProps = async ({ res, err }:any) => {
//   res.writeHead(301, { Location: "/login" });
//   res.end();
//   // console.log(`Building slug: ${slug}`)

//   return {};
// };

