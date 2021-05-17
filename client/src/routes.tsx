import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Home } from 'src/scenes/home/home';
import { ClientAssignment } from 'src/scenes/client-assignment';
import { ContractorAssignment } from 'src/scenes/contractor-assignment';
import { Root } from 'src/scenes/root/root';
import { NotFound, UnexpectedError } from 'src/scenes/error';
import { PrivacyPolicy, CompanyDetails } from 'src/scenes/legal';

export const Router = () => {
  return (
    <BrowserRouter>
      <Root>
        <Switch>
          <Redirect exact from="/" to="/beta" />
          <Route exact path="/beta" component={Home} />
          <Route path="/beta/client/assignments" component={ClientAssignment} />
          <Route path="/beta/contractor/assignments" component={ContractorAssignment} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/company-details" component={CompanyDetails} />
          <Route path="/unexpected-error" component={UnexpectedError} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Root>
    </BrowserRouter>
  );
};
