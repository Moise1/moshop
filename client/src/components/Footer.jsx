import {Container, Row, Col} from 'react-bootstrap';

export const Footer = () => {
  return (
    <div>
      <footer>
        <Container>
          <Row>
            <Col className="text-center py-3">Copyright &copy; Propshop</Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};
