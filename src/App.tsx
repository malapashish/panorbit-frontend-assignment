import React from "react";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages";
import { UserProvider } from "./context/UserContext";
import { UserPanel } from "./components/UserPanel/UserPanel";
import { ComingSoonScreen } from "./components";
import { UserProfile } from "./components/UserProfilePanel/UserProfilePanel";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:id" element={<UserPanel />}>
            <Route path="/user/:id/profile" element={<UserProfile />} />
            <Route path="/user/:id/posts" element={<ComingSoonScreen />} />
            <Route path="/user/:id/gallery" element={<ComingSoonScreen />} />
            <Route path="/user/:id/todo" element={<ComingSoonScreen />} />
          </Route>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
