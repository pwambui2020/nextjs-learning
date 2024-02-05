import React from 'react';
import { notFound } from 'next/navigation';

export default function ReviewsId({params}: {params:
    {
        reviewsId: string; 
        productId: string
    };
  } ){
      if (parseInt(params.reviewsId)> 1000 ) {
        notFound();
      }
  return (
    <div>
      <h1>Reviews {params.reviewsId} for each product {params.productId} </h1>
    </div>
  )
}

