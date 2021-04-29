import { useEffect, useState } from "react";
import Customization from "./components/Customization";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Page from "./components/Page";

interface pageStyle {
  fontSize: number;
  effect: string;
  inkColor: string;
  fontFamily: string;
  verticalSpacing: number;
  margin: boolean;
  lines: boolean;
}

const App: React.FC = () => {
  useEffect(() => {
    const checkBoxAuto: HTMLInputElement = document.querySelectorAll(
      ".checkbox"
    )[0] as HTMLInputElement;
    setTimeout(() => {
      checkBoxAuto.click();
      console.log("clicked");
    }, 200);
  }, []);
  const mobile = window.innerWidth < 800 ? true : false;
  console.log(window.innerWidth)
  const [styles, setStyles] = useState<pageStyle>({
    fontSize: 10,
    effect: "shadow",
    inkColor: "#000f55",
    fontFamily: "Homemade apple",
    verticalSpacing: 3,
    margin: true,
    lines: false,
  });

  return (
    <>
      {!mobile ? (
        <div className="App">
          <Header />
          <hr />
          <div className="flex middle">
            <Page styles={styles} />
            <Customization styles={styles} setStyles={setStyles} />
          </div>
        </div>
      ) : (
        <div className="h-screen w-screen flex items-center justify-center px-10 font-sans">
          <h1>Please open this website in your PC or Laptop 🙏. Currently, not supported for mobile browsers</h1>
        </div>
      )}
    </>
  );
};

export default App;
