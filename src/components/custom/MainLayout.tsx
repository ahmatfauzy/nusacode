import type { ReactNode } from "react";
import { NavBar } from "./NavBar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";
import ChatBot from "./ChatBot";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
      <ChatBot />
      <ScrollToTopButton />
    </>
  );
};

export default MainLayout;
