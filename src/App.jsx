import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  pageSize={5}
                  key="general"
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  pageSize={5}
                  key="business"
                  country="in"
                  category="business"
                  heading="Top headlines in Business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  pageSize={5}
                  key="entertainment"
                  country="in"
                  category="entertainment"
                  heading="Top Headlines in Entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  pageSize={5}
                  key="general2"
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  pageSize={5}
                  key="health"
                  country="in"
                  category="health"
                  heading="Top Headlines in Health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  pageSize={5}
                  key="science"
                  country="in"
                  category="science"
                  heading="Top Headlines in Science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  pageSize={5}
                  key="sports"
                  country="in"
                  category="sports"
                  heading="Top Headlines in Sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  pageSize={5}
                  key="technology"
                  country="in"
                  category="technology"
                  heading="Top Headline in Tech"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
