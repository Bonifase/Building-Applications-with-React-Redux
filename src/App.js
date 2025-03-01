import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/Header";
import PageNotFound from "./components/PageNotFound";
import CoursesPage from "./components/courses/CoursesPage";

function App() {
  return (
    <div className="container mt-4">
      <div className="row mt-4">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <Header/>
          <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}

export default App;
