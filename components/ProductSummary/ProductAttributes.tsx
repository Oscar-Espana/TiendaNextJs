import React from 'react'
import { Row, Table} from 'react-bootstrap'

const ProductAttributes = ({name, attributes:{description, ...otherAttributes}}:TProduct) => {

    return (
        <Row>
            <h2>Acerca de {name}</h2>
            <p>{description}</p>
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
        </Row>
    )
}

export default ProductAttributes
