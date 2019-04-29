import React from 'react';

import styles from './EventItem.module.css';

const EventItem = ({ data }) => {
  const { name, dateText, address, link } = data.node;
  // console.log(data);
  return (
    <div className={styles.eventItem}>
      <span className={styles.eventItemHead}>{name}</span>
      {dateText && <span>{dateText}</span>}
      {address && <span>{address}</span>}
      {link && <a href={link}>{link}</a>}
    </div>
  )
};

export default EventItem;