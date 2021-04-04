import React, { useEffect, useState } from "react";
import {Row, Col, Card, Button} from 'react-bootstrap'
import Link from 'next/link'

const Home = () => {

  const [productList, setProductList] = useState <TProduct[]>([])

  useEffect(() => {
    window
    .fetch('api/avo')
    .then(response => response.json())
    .then(({data, length}) =>{
      setProductList(data)
    })
  }, [])

  return (
    <div>
      <h1>Hola Mundo</h1>
      <Row>
      {
        productList.map( (product, key)=>(
          <Col xs={12} md={6} lg={4} key={key} className="d-flex justify-content-center">
            <Card className="mb-4" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
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
