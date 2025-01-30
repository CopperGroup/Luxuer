import Test from '@/components/shared/Test';
import { fetchAllProducts } from '@/lib/actions/product.actions';
import React from 'react'

const page = async ({searchParams}:any) => {
    console.log('sd',searchParams)
    let filtredProducts = await fetchAllProducts();
    
  return (
    <Test product={filtredProducts}/>
  )
}

export default page