import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as logger from 'src/services/log';
import { RootState } from 'src/store';

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


export const useClientAssignments = () => {
  const history = useHistory()
  const [assignments, setAssignments] = React.useState<any>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const { clientID } = useSelector((state: RootState) => state.user);

  React.useEffect(() => {
    const retrieveAssignments = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('/api/client/assignments', getConfig(clientID));
        setIsLoading(false);
        if (res.status === 200) {
          const data = await res.json();
          setAssignments(data)
        } else {
          logger.error(`GET "/api/client/assignments" `);
          history.push('/unexpected-error');
        }
      } catch (e) {
        logger.error(`GET "/api/client/assignments" `);
        history.push('/unexpected-error');
      }
    };
    if (clientID) {
      retrieveAssignments();
    }
  }, [clientID]);

  return { assignments, isLoading };
};


export const useContractorAssignments = () => {
  const history = useHistory()
  const [assignments, setAssignments] = React.useState<any>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const { contractorID } = useSelector((state: RootState) => state.user);

  React.useEffect(() => {
    const retrieveAssignments = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('/api/contractor/assignments', getConfig(contractorID));
        setIsLoading(false);
        if (res.status === 200) {
          const data = await res.json();
          setAssignments(data)
        } else {
          logger.error(`GET "/api/contractor/assignments" `);
          history.push('/unexpected-error');
        }
      } catch (e) {
        logger.error(`GET "/api/contractor/assignments" `);
        history.push('/unexpected-error');
      }
    };
    if (contractorID) {
      retrieveAssignments();
    }
  }, [contractorID]);

  return { assignments, isLoading };
};
