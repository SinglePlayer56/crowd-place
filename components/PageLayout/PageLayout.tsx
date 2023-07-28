import {ReactNode} from "react";
import {Footer, Header} from "@/components";

const PageLayout = ({children}: {children:ReactNode}) => {

  return (
      <>
          <Header/>
          <main>
              {children}
          </main>
          <Footer/>
      </>
  );
};

export default PageLayout;
