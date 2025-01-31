import DashboardWrapper from "@/components/DashboardWrapper";
import Sidebar from "@/components/Sidebar";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <div>
        <Sidebar />
      </div>
      <div className="min-h-screen">
        <DashboardWrapper>{children}</DashboardWrapper>
      </div>
    </div>
  );
};

export default Layout;
