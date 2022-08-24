import { Row, Col } from 'react-bootstrap'
import { Product } from '../components/Product'
import products from '../products';

export const Home = () => {
  return (
    <div>
        <h>Latest Products</h>
        <Row>
            {products.map(p => (
                <Col key={p.name} sm={12} md={6} lg={4} xl={3}>
                    <Product product={p}/>
                </Col>
            ))}
        </Row>

    </div>
  )
}
