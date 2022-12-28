import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    // styled div which is whole screen
    <div className="flex flex-col justify-between min-h-screen">
      {/* nav component is wrapped around everything else so it is always displayed */}
      <NavBar />

      <main>
        {/* all main content  */}
        {children}
      </main>

      {/* same as nav */}
      <Footer />
    </div>
  );
}
