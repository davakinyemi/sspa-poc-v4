import { registerApplication, start } from "single-spa";

/* import { showWhenAnyOf, showWhenPrefix, showExcept } from './UrlRouteUtils';

registerApplication(
  'sspa-poc-auth',
  () => System.import('sspa-poc-auth'),
  (location) => location.pathname === '/login'
);

registerApplication(
  'sspa-poc-layout',
  () => System.import('sspa-poc-layout'),
  (location) => location.pathname !== '/login'
);

registerApplication(
  'sspa-poc-home',
  () => System.import('sspa-poc-home'),
  (location) => location.pathname === '/home' || location.pathname === '/home/detail'
);

start(); */

import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();