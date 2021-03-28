import React from 'react';
import { useDispatch } from 'react-redux';
import { HelloWorldInterface } from './types';
import { useHistory } from 'react-router-dom';
import * as logger from 'src/services/log';

const getConfig = (access, method = 'GET') => ({
  method,
  headers: { Authorization: 'Bearer ' + access },
});

export const useHelloWorld = () => {
  const [value, setValue] = React.useState<HelloWorldInterface>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    const retrieveHelloWorld = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('/api/hello-world');
        setIsLoading(false);
        if (res.status === 200) {
          const data = await res.json();
          setValue(data)
        } else {
          logger.error(`GET "/api/hello-world" `);
          history.push('/unexpected-error');
        }
      } catch (e) {
        logger.error(`GET "/api/hello-world" `);
        history.push('/unexpected-error');
      }
    };
    retrieveHelloWorld();
  }, []);
  return { value, isLoading };
};
