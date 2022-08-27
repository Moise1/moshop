import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Row, Col } from 'react-bootstrap'
import { Product } from '../components/Product';
import { listProducts } from '../redux/actions/productActions';
// import products from '../products';

export const Home = () => {
  const [products, setProducts] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
  (async () =>{
    const results = await dispatch(listProducts())
    setProducts(results)
  })()
  }, [])

  console.log('PRODUCTS', products);
  return (
    <div>
        <h>Latest Products</h>
        <Row>
            {products?.map(p => (
                <Col key={p.name} sm={12} md={6} lg={4} xl={3}>
                    <Product product={p}/>
                </Col>
            ))}
        </Row>

    </div>
  )
}
