import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Header/Navbar";

const Layouts = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="h-[60px]">
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layouts;
