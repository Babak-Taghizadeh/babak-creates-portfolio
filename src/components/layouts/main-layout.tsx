import Footer from "./footer";
import Header from "./header/header";
import { memo } from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = memo(({ children }: MainLayoutProps) => {
  return (
    <div className="bg-background grid min-h-dvh grid-rows-[auto_1fr_auto] bg-[radial-gradient(var(--dot-bg)_1px,transparent_1px)] [background-size:30px_30px]">
      <Header />
      <main className="relative isolate">
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-12 sm:px-6 md:space-y-8 lg:px-8 lg:py-14 xl:px-12">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
});

MainLayout.displayName = "MainLayout";

export default MainLayout;
