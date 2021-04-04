import React, { useEffect, useState } from "react";
import {Row, Col, Card, Button} from 'react-bootstrap'
import Link from 'next/link'

const Home = () => {

  const [productList, setProductList] = useState <TProduct[]>([])

  useEffect(() => {
    window
    .fetch('api/avo')
    .then(response => response.json())
    .then(({data}) =>{
      setProductList(data)
    })
  }, [])

  return (
    <div>
      <h1 className="text-center mb-5" >Todos los productos</h1>
      <Row>
      {
        productList.map( (product, key)=>(
          <Col xs={12} md={6} lg={4} key={key} className="d-flex justify-content-center">
            <Card className="mb-4" style={{ width: '18rem' }} >
              <Card.Img variant="top" src={product.image} />
              <Card.Body className="d-flex flex-column justify-content-center">
                <Card.Title className="text-center">{product.name}</Card.Title>
                <Card.Text className="text-center h4 font-weight-bold text-primary py-1" >
                  ${product.price}
                </Card.Text>
                <Link href={`/product/${product.id}`}>
                  <Button as='a' variant="primary">Seleccionar</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))
      }
      </Row>
    </div>
  );
};

export default Home;
