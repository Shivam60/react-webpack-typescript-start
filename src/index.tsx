import * as H from "history";
import * as React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, match, Switch } from "react-router-dom";

export interface RouteComponentProps<P> {
  match: match<P>;
  location: H.Location;
  history: H.History;
  staticContext?: unknown;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AppRouteProps {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ReactRouterDomProps
  extends RouteComponentProps<AppRouteProps> {}

// URL format
const Root: React.FC<unknown> = () => {
  return (
    <BrowserRouter>
      <Switch></Switch>
    </BrowserRouter>
  );
};

export default hot(module)(Root);
