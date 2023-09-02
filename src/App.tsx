import React from "react";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages";
import { UserProvider } from "./context/UserContext";
import { UserPanel } from "./components/UserPanel/UserPanel";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:id" element={<UserPanel />}>
            <Route
              path="/user/:id/profile"
              element={<h1>This is profile section</h1>}
            />
            <Route
              path="/user/:id/posts"
              element={<h1>This is posts section</h1>}
            />
            <Route
              path="/user/:id/gallery"
              element={<h1>This is gallery section</h1>}
            />
            <Route
              path="/user/:id/todo"
              element={<h1>This is todo section</h1>}
            />
          </Route>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
