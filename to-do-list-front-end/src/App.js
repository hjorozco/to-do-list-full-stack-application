import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import ViewTask from './components/ViewTask';
import EditTask from './components/EditTask';
import DeleteTask from './components/DeleteTask';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route path="/" exact component={Tasks}></Route>
          <Route path="/tasks" component={Tasks}></Route>
          <Route path="/add-task" component={AddTask}></Route>
          <Route path="/view-task/:id" component={ViewTask}></Route>
          <Route path="/edit-task/:id" component={EditTask}></Route>
          <Route path="/delete-task/:id" component={DeleteTask}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
