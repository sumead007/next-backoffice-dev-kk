import React from 'react'

type Props = {}

export default function Index({}: Props) {
  return (
    <div>Index</div>
  )
}

//server side
Index.getInitialProps = async ({ res, err }) => {
  res.writeHead(301, { Location: "/home" });
  res.end();
  return {};
};