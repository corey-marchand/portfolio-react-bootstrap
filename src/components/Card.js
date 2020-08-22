import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import CardGroup from 'react-bootstrap/CardGroup';
import Carasoul from './Carasoul';

const Styles = styled.div`
    .card {

    }
`;

const PortfolioCard = () => (
    <CardGroup className="container">
      <Card className="mr-5 px-4 py-4">
        <Carasoul variant="top" />
        <Card.Body>
          <Card.Title>E-commerce-store</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <br />
      <Card className="mr-5 px-4 py-4">
        <Carasoul variant="top" />
        <Card.Body>
          <Card.Title>Small Scale Twitter Clone</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional
            content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="mr-5 px-4 py-4 border-left solid">
        <Carasoul variant="top" />
        <Card.Body>
          <Card.Title>Foodie Journals</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
)

export default PortfolioCard;