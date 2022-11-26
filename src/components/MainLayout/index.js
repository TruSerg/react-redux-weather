import Header from "../Header";
import Footer from "../Footer";

import style from "./styles.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={style.mainWrapper}>
      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default MainLayout;
