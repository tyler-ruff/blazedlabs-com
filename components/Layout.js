import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ navigation, settings, children }) => {
  return (
    <div id="Top" className="text-slate-800">
      <Header navigation={navigation} settings={settings} />
      <main>{children}</main>
      <Footer settings={settings}></Footer>
    </div>
  );
};
