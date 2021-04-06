import React, {useState, useEffect} from "react";
import { GetStaticProps } from "next";
import ProductSummary from "@components/ProductSummary/ProductSummary";

export const getStaticPaths= async()=>{

  const response = await fetch('https://catalogo-productos.vercel.app/api/avo')
  const {data:productList}: TAPIAvoResponse = await response.json()

  const paths=productList.map(({id})=>({
    params:{
      id
    }
  }))

  return {
    paths,
    fallback:false
  }
}

export const getStaticProps:GetStaticProps = async({params})=>{
  
  const id=params?.id as string
  const response = await fetch(`https://catalogo-productos.vercel.app/api/avo/${id}`)
  const product:TProduct = await response.json()

  return {
    props:{
      product
    }
  }
}

const ProductItem = ({product}:{product:TProduct}) => {

  return (
    <>
      {product == null ? null : <ProductSummary product={product} /> }
    </>
  )
};

export default ProductItem;
