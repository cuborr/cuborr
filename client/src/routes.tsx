import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from 'src/scenes/home/home';
import { AssignmentDetail } from 'src/scenes/assignment'
import { ClientAssignment } from 'src/scenes/client-assignment';
import { ContractorAssignment } from 'src/scenes/contractor-assignment';
import { Root } from 'src/scenes/root/root';
import { NotFound, UnexpectedError } from 'src/scenes/error';

export const Router = () => {
  return (
    <BrowserRouter>
      <Root>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/unexpected-error" component={UnexpectedError} />
          <Route path="/assignment/:uid" component={AssignmentDetail} />
          <Route path="/client/assignments" component={ClientAssignment} />
          <Route path="/contractor/assignments" component={ContractorAssignment} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Root>
    </BrowserRouter>
  );
};
