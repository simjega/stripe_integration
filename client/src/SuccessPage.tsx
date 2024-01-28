import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { DefaultService, SessionStatusResponse } from './server';

const SuccessPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('sessionId');
  const [status, setStatus] = useState<string | null>(null);
  const [customerEmail, setCustomerEmail] = useState<string | null>(null);

  useEffect(() => {
    if (sessionId === null) {
      return;
    }
    DefaultService.sessionStatusSessionStatusGet(sessionId).then((data: SessionStatusResponse) => {
      console.log("got session status: ", data)
      setStatus(data.status);
      setCustomerEmail(data.customerEmail);
    });
  }, [sessionId, setStatus, setCustomerEmail]);

  return (
    <div>
      <h1>Success!</h1>
      <p>Your payment was successful.</p>
      <p>Session ID: {sessionId}</p>
      <p>Customer email: {customerEmail}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default SuccessPage;
