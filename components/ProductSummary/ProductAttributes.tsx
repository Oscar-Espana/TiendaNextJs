import React from 'react'
import { Row, Col, Table} from 'react-bootstrap'

const ProductAttributes = ({name, attributes:{description, ...otherAttributes}}:TProduct) => {

    return (
        <Row className="mt-5 mt-md-3" >
            <Col>
                <h2 className="text-center text-md-left" >Acerca de {name}</h2>
                <p className="text-justify py-2" >{description}</p>
                <Table striped bordered hover> 
                    <thead>
                        <tr>
                            <th colSpan={2}>Atributos</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Object.keys(otherAttributes).map((attribute, key)=>(
                        <tr key={key}>
                            <td>{attribute}</td>
                            <td>{otherAttributes[attribute as keyof typeof otherAttributes]}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default ProductAttributes
