import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
