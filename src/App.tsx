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
    // var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    // if(isMobile){
    //   console.log("mobile")
    // }
  }, []);
  

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
      <div className="App">
        <Header />
        <hr />
        <div className="flex middle">
          <Page styles={styles} />
          <Customization styles={styles} setStyles={setStyles} />
        </div>
      </div>
    </>
  );
};

export default App;
