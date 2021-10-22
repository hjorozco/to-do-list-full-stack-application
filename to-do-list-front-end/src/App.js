import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import AddTask from './components/AddTask';
import DeleteTask from './components/DeleteTask';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route path="/" exact component={Tasks}></Route>
          <Route path="/tasks" component={Tasks}></Route>
          <Route path="/add-task" component={AddTask}></Route>
          {/*<Route path="/update-student/:id" component={UpdateStudent}></Route>
          <Route path="/view-student/:id" component={ViewStudent}></Route> */}
          <Route path="/delete-task/:id" component={DeleteTask}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
