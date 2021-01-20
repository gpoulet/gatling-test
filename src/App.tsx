import React from 'react';
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import store from "./store";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Home, AppBar, Stats} from "./components";
import {ROUTE_HOME, ROUTE_STATS} from "./constants";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <AppBar/>
                <Switch>
                    <Route path={ROUTE_STATS}>
                        <Stats/>
                    </Route>
                    <Route path={ROUTE_HOME}>
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
