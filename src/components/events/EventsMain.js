import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

import EventItem from './EventItem';

import styles from './EventsMain.module.css';

class EventsMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }
  
  render() {
    const { data } = this.props;
    const filteredEvents = data.allContentfulEvent.edges.filter(event => {
      return Date.parse(event.node.date) > Date.now();
    });

    return (
      <Container className="text-dark mb-5 pt-5">
        <Row>
          <Col>
            <div className={styles.eventsContainer}>
              <h1 className="mb-5">
                Upcoming Events
              </h1>
              <div className={styles.eventItems}>
                {filteredEvents.map(event => (
                  <EventItem key={event.node.name} data={event} />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EventsMain;