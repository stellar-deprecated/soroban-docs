import React, { useState } from "react";
import useIsBrowser from '@docusaurus/useIsBrowser';

import IconThumbsUp from '../../../static/icons/thumbs-up.svg';
import IconThumbsDown from '../../../static/icons/thumbs-down.svg';

const ReaderFeedback = ({ pageId }) => {
  const [feedbackGiven, setFeedbackGiven] = useState(false);
  const isBrowser = useIsBrowser();
  if (!isBrowser) {
    return null;
  }

  const giveFeedback = (value) => {
    if (window.ga) {
      console.log('i am sending the event to ga')
      window.ga('send', {
        hitType: 'event',
        eventCategory: 'button',
        eventAction: 'feedback',
        eventLabel: pageId,
        eventValue: value,
      });
    } else {
      console.log('window.ga is not available')
    }
    setFeedbackGiven(true);
  };

  return (
    <div className="readerFeedback">
      {feedbackGiven ? (
        'Thanks for your feedback!'
      ) : (
        <>
          Did you find this page helpful?
          <IconThumbsUp
            className="feedback_thumbsup"
            alt="Like"
            onClick={() => giveFeedback(1)}
          />
          <IconThumbsDown
            className="feedback_thumbsdown"
            alt="Dislike"
            onClick={() => giveFeedback(0)}
          />
        </>
      )}
    </div>
  );
};

export default ReaderFeedback;
