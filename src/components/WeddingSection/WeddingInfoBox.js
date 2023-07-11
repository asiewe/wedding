import React from 'react';
import { string } from 'prop-types';

function WeddingInfoBox({ title, date, time, location,  description }) {
  return (
    <div className="col-md-6 col-sm-6 text-center">
      <div className="event-wrap" style={{marginBottom: "10px"}}>
        <h3>{title}</h3>
        <div className="event-col">
          <i className="icon-clock"></i>
          <span>{time}</span>
        </div>
        <div className="event-col">
          <i className="icon-calendar"></i>
          <span>{date}</span>
        </div>
        <div className="event-col">
          <i className="icon-location-pin"></i>
          <span>{location}</span>
        </div>
        {description && (
          <div className="event-col">
            <span dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        )}
      </div>
    </div>
  );
}

WeddingInfoBox.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  time: string.isRequired,
  description: string.isRequired,
};

export default React.memo(WeddingInfoBox);
