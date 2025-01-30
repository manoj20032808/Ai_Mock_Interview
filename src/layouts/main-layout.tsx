import { Container } from "@/components/container";
import { Header } from "@/components/header";
//import Contact from "@/views/contact";
import { Footer } from "@/views/footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Container className="flex-grow">
        <main className="flex-grow">
          <Outlet />
          {/* <Contact/> */}
        </main>
      </Container>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;