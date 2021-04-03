import React from 'react';
import { useDispatch } from 'react-redux';
import { HelloWorldInterface } from './types';
import { useHistory } from 'react-router-dom';
import * as logger from 'src/services/log';

const getConfig = (access, method = 'GET') => ({
  method,
  headers: { Authorization: 'Token ' + access },
});

export const useAssignments = () => {
  const history = useHistory()
  const [assignments, setAssignments] = React.useState<any>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const retrieveAssignments = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('/api/assignments');
        setIsLoading(false);
        if (res.status === 200) {
          const data = await res.json();
          setAssignments(data)
        } else {
          logger.error(`GET "/api/assignments" `);
          history.push('/unexpected-error');
        }
      } catch (e) {
        logger.error(`GET "/api/assignments" `);
        history.push('/unexpected-error');
      }
    };
    retrieveAssignments();
  }, []);
  return { assignments, isLoading };
};
