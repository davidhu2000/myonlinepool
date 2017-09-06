import React from 'react';
import { faqs } from './faqs.json';

class Faq extends React.Component {

  render() {
    return (
      <div className="faq">
        { faqs.map(item => (
          <div className="faq-item">
            <div className="title">
              {item.title}
            </div>
            <div className="info">
              {item.info}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Faq;
