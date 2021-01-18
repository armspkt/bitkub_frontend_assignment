import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdminPage from "../pages/Admin";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
