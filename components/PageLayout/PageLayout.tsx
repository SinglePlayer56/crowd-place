import {ReactNode} from "react";
import {Footer, Header, Up} from "@/components";

const PageLayout = ({children}: {children:ReactNode}) => {

  return (
      <>
          <Header/>
          <main>
              {children}
          </main>
          <Footer/>
          <Up/>
      </>
  );
};

export default PageLayout;
