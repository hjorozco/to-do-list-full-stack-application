import Tasks from './components/Tasks';
// import AddStudent from './components/AddStudent';
// import UpdateStudent from './components/UpdateStudent';
// import DeleteStudent from './components/DeleteStudent';
// import ViewStudent from './components/ViewStudent';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route path="/" exact component={Tasks}></Route>
          <Route path="/tasks" component={Tasks}></Route>
          {/* <Route path="/add-student" component={AddStudent}></Route>
          <Route path="/update-student/:id" component={UpdateStudent}></Route>
          <Route path="/delete-student/:id" component={DeleteStudent}></Route>
          <Route path="/view-student/:id" component={ViewStudent}></Route> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
