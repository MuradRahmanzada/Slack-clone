import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";
import Chat from "./component/Chat/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue()

  

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login/>
        ) : (
          <>
            <Header />
            <div className="app_body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
              {/* React-Router -> Chat screen  */}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
