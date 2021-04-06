import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductAttributes from './ProductAttributes'
import Image from 'next/image'

type ProductSummaryProps = {
    product: TProduct
  }  

const ProductSummary = ({product}: ProductSummaryProps) => {
    return (
        <section>
            <Row>
              <Col xs={12} md={6} className="d-flex flex-column align-items-center align-items-md-start">
                <Image src={product.image} alt={product.name} width={340} height={340} /> 
              </Col> 
              <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center align-items-md-start">
                  <h1>{product.name}</h1>
                  <h3 className="text-primary font-weight-bold py-2" >${product.price}</h3>
                  <label>SKU: <b>{product.sku}</b></label>
              </Col>  
            </Row>
            <ProductAttributes {...product} />
        </section>
    )
}

export default ProductSummary
