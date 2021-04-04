import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import ProductSummary from "@components/ProductSummary/ProductSummary";

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();
  const [product, setProduct] = useState<TProduct>()

  useEffect(() => {
    if (id) {
      window
        .fetch(`/api/avo/${id}`)
        .then((response) => response.json())
        .then((data: TProduct) => {
          setProduct(data)
        })
    }
  }, [id])

  return (
    <>
      {product == null ? null : <ProductSummary product={product} /> }
    </>
  )
};

export default ProductItem;
