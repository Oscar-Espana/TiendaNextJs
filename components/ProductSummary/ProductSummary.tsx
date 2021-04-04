import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductAttributes from './ProductAttributes'

type ProductSummaryProps = {
    product: TProduct
  }  

const ProductSummary = ({product}: ProductSummaryProps) => {
    return (
        <div>
            <Row>
              <Col xs={12} md={6}>
              <img src={product.image} alt={product.name} />
              </Col> 
              <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
                  <h1>{product.name}</h1>
                  <p>${product.price}</p>
                  <label>SKU: <b>{product.sku}</b></label>
              </Col>  
            </Row>
            <ProductAttributes {...product} />


        </div>
    )
}

export default ProductSummary
