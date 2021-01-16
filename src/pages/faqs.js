import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'gatsby';

import Nav from '../components/nav';

export default () => (
  <React.Fragment>
    <Nav />
    <Container as="section" className="text-center py-5">
      <Row className="py-lg-5">
        <Col className="mx-auto">
          <h1 className="font-weight-light">FAQs</h1>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                How does this work?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Many delivery apps take 30% of the order as a commission. Additionally, with delivery apps you'll
                  notice service fees. By ordering directly, the restaurant can keep more of the money and
                  eliminate service fees. This puts more money directly into your local restaurants and saving
                  you money to boot!
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                How do I add my restaurant?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Click <Link to="/submit-business">here.</Link>{' '}
                  The more details you can add the faster we can get your submission up as we do this in our spare time
                  :).
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                Do you make any money off the site?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  Nada. We are completely non-profit. We really want this to be a community initiative. Restaurants have
                  been hard hit and we're trying to do what we can so that, hopefully, we can enjoy them in person after
                  the pandemic.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                How can I add restaurants in my city?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  We're looking for volunteers to help catalog restaurants in their city. If you think you can come up
                  with a list of restaurants(at least 50) for your city contact us <Link to="/about">here.</Link> Please
                  be patient as we do have full-time jobs outside of this.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);
