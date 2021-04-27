import { useState } from "react";
import Customization from "./components/Customization";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import Page from "./components/Page";

interface pageStyle {
  fontSize: number;
  effect: string;
}

const App: React.FC = () => {
  const [styles, setStyles] = useState<pageStyle>({
    fontSize: 10,
    effect: 'shadow',
  })

  return (
    <div className="App">
      <Header />
      <hr />
      <div className="flex">
        <Page styles={styles} />
        <Customization styles={styles} setStyles={setStyles} />
      </div>
    </div>
  );
};

export default App;
