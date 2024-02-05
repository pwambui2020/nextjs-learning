import React from 'react'

export default function ProductId( {params}: {params: {productId:string}}) {
  return (
    <div>
      <h1>list of things {params.productId}</h1>
    </div>
  )
}
