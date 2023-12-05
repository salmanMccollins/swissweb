// JobApplicationForm.js

import React, { useEffect } from 'react';

const JobApplicationForm = () => {
  useEffect(() => {
    const handleIFrameMessage = (e) => {
      // Your existing handleIFrameMessage logic here
      // ...

      // Example: Log the message data
      console.log('Received message:', e.data);
    };

    if (window.addEventListener) {
      window.addEventListener('message', handleIFrameMessage, false);
    } else if (window.attachEvent) {
      window.attachEvent('onmessage', handleIFrameMessage);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (window.removeEventListener) {
        window.removeEventListener('message', handleIFrameMessage);
      } else if (window.detachEvent) {
        window.detachEvent('onmessage', handleIFrameMessage);
      }
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <iframe
      id="JotFormIFrame-233381171205447"
      title="Online Job Application Form"
      // Your existing iframe attributes here
      src="https://form.jotform.com/233381171205447"
      style={{ minWidth: '100%', maxWidth: '100%', height: '1000px', border: 'none' }}
      scrolling="no"
    />
  );
};

export default JobApplicationForm;
