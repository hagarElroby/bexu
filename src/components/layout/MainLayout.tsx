"use client";

import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-[100vh] w-[100vw] p-6">
      <div className="mx-auto w-full max-w-[1620px]">
        <Header />
      </div>
      <div className="flex flex-grow flex-col w-full h-full overflow-y-auto no-scrollbar max-w-[1620px] mx-auto">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
