import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
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
