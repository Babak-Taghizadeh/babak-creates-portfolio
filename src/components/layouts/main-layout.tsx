import Footer from "./footer";
import Header from "./header";
import { memo } from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = memo(({ children }: MainLayoutProps) => {
  return (
    <div className="bg-background grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="relative isolate">
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 xl:px-12">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
});

MainLayout.displayName = "MainLayout";

export default MainLayout;
