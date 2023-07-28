import {ReactNode} from "react";
import {Footer, HeaderMainPage} from "@/components";

const MainPageLayout = ({children}: {children:ReactNode} ) => {

  return (
    <>
        <HeaderMainPage />
        <main>
            {children}
        </main>
        <Footer />
    </>
  );
};

export default MainPageLayout;
