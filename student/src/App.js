import {BrowserRouter, BrowserRouting, Route, Switch } from 'react-router-dom';

import Header from './Components/Header';
import Search from './Components/Search';
import AddStudent from './Components/AddStudent';
import Students from './Components/Students';
import NotFound from './Components/NotFound';
import UpdateStudent from './Components/UpdateStudent';
import Front from './Components/Front';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
      <Route exact path="/" component={Front}/>
        <Route exact path="/Students" component={Students}/>
        <Route exact path="/AddStudent" component={AddStudent}/>
        <Route exact path="/Search" component={Search}/>
        <Route exact path="/Update/:id" component={UpdateStudent}/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
