import {ReactNode} from "react";
import {Footer, HeaderMainPage, Up} from "@/components";

const MainPageLayout = ({children}: {children:ReactNode} ) => {

  return (
    <>
        <HeaderMainPage />
        <main>
            {children}
        </main>
        <Footer />
        <Up/>
    </>
  );
};

export default MainPageLayout;
