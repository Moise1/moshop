import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Row, Col } from 'react-bootstrap'
import { Product } from '../components/Product';
import { listProducts } from '../redux/actions/productActions';

export const Home = () => {
  const {products} = useSelector(state => state.productList)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  },[listProducts])

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
