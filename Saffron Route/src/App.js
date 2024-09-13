import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chat from './Components/chat/Chat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the Chat component */}
        <Route path="/Chat" element={<Chat />} />

        {/* Default route for other components */}
        <Route
          path="*"
          element={
            <div className="App">
              <Home />
              <About />
              <Work />
              <Contact />
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;