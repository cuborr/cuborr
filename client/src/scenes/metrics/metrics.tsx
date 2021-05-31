import React from 'react';
import styled from 'styled-components';
import { Container, Footer, Navbar } from 'src/components'


const StyledContainer = styled(Container)`
  min-height: 80vh;
  padding-top: var(--margin-l);
`;

const Title = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--color-text-dark);
  margin-bottom: var(--margin-s);
`;

const Text = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    color: var(--color-text-light);
    margin-bottom: var(--margin-l);
`

const AssignmentTitle = styled.h4`
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--color-text-light);
    margin-top: var(--margin-l);
    margin-bottom: var(--margin-l);
`

const AssignmentText = styled.p`
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-text-light);
    margin-bottom: var(--margin-l);
    cursor: pointer;
`

export const Metrics = () => {
  const [assignments, setAssignments] = React.useState([])
  const [assignmentsCount, setAssignmentsCount] = React.useState()
  const [pageVisits, setPageVisitsCount] = React.useState()
  const [contractorsCount, setContractorsCount] = React.useState()
  const [clientsCount, setClientsCount] = React.useState()

  React.useEffect(() => {
    let pw = localStorage.getItem("master_key")
    if (!pw) {
      pw = prompt("Please enter the master key");
      if (pw) {
        localStorage.setItem("master_key", pw)
      }
    }
    const retrieveMetrics = async (key) => {
      // get all restricted endpoints
      let res = await fetch(`/api/admin/assignments`, {
        method: 'GET',
        headers: { 'X-Master-Key': key }
      });
      if (res.status === 200) {
        const data = await res.json()
        console.log(data)
        setAssignments(data)
      }
      res = await fetch(`/api/admin/assignments/count`, {
        method: 'GET',
        headers: { 'X-Master-Key': key }
      });
      if (res.status === 200) {
        const data = await res.json()
        setAssignmentsCount(data)
      }
      res = await fetch(`/api/admin/page-visits/count`, {
        method: 'GET',
        headers: { 'X-Master-Key': key }
      });
      if (res.status === 200) {
        const data = await res.json()
        setPageVisitsCount(data)
      }
      res = await fetch(`/api/admin/contractors/count`, {
        method: 'GET',
        headers: { 'X-Master-Key': key }
      });
      if (res.status === 200) {
        const data = await res.json()
        setContractorsCount(data)
      }
      res = await fetch(`/api/admin/clients/count`, {
        method: 'GET',
        headers: { 'X-Master-Key': key }
      });
      if (res.status === 200) {
        const data = await res.json()
        setClientsCount(data)
      }
    }
    retrieveMetrics(pw)
  }, [])

  const onClickDelete = async (item) => {
    const message = "Are you sure you would like to delete the assignment "
    if (window.confirm(message + item.title)) {
      const key = localStorage.getItem("master_key")
      const res = await fetch(`/api/admin/assignment/${item._id.$oid}`, {
        method: 'DELETE',
        headers: { 'X-Master-Key': key ?? "" }
      });
      if (res.status === 204) {
        // deleted
        window.alert(`${item.title} has been successfully deleted, please refresh the page`);
      } else {
        window.alert("Item could not be deleted please try again");
      }
    }
  }

  return (
    <div>
      <Navbar />
      <StyledContainer>
        {
          pageVisits && (
            <>
              <Title>PAGE VISITS</Title>
              <Text>{pageVisits}</Text>
            </>
          )
        }
        {
          assignmentsCount && (
            <>
              <Title>NUMBER OF ASSIGNMENTS</Title>
              <Text>{assignmentsCount}</Text>
            </>
          )
        }
        {
          contractorsCount && (
            <>
              <Title>NUMBER OF CONTRACTORS</Title>
              <Text>{contractorsCount}</Text>
            </>
          )
        }
        {
          clientsCount && (
            <>
              <Title>NUMBER OF CLIENTS</Title>
              <Text>{clientsCount}</Text>
            </>
          )
        }
        {
          assignments.length > 0 && (
            <>
              <AssignmentTitle>Assignments</AssignmentTitle>
              {
                assignments.map((item: any) => (
                  <AssignmentText onClick={() => onClickDelete(item)}>{"DELETE  " + item.title}</AssignmentText>
                ))
              }
            </>
          )
        }


      </StyledContainer>
      <Footer />
    </div>
  );
};
