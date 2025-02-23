import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import Home from "../src/components/Home";
import RecipeDetails from "../src/components/RecipeDetails";
import Navbar from "../src/components/Navbar";
import { ThemeProvider } from "../src/components/ThemeContext";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const App = () => {
  return (
    <ThemeProvider>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </Router>
      </ClerkProvider>
    </ThemeProvider>
  );
};

export default App;
