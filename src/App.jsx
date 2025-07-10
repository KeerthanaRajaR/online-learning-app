import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/courses" component={Courses} />
        <Route path="/courses/:id" component={CourseDetails} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;