import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chat from './Components/chat/Chat';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/Chat" component={Chat} />
      {/* Add more routes as needed */}
    </Switch>
  </BrowserRouter>
);

export default routes;