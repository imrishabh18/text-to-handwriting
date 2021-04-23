import React, { useRef } from "react";
import html2canvas from "html2canvas";

interface Props {
  fontSize: number;
  effects: string;
}

const Page: React.FC<Props> = ({ fontSize, effects }) => {
  console.log(fontSize);
  const generateCanvas = () => {
    const element = document.getElementById("capture")!;
    html2canvas(element).then((canvas) => {
      document.body.appendChild(canvas);
    });
  };

  return (
    <>
      <div className="pageContainer flex-1" id="capture">
        <div className="pinkMarginedLines">
          <div className="topMargin"></div>
          <div className="midPage flex-col">
            <div className="leftMargin"></div>
            <div contentEditable="true" className="contentPage">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              rhoncus dui eget tortor feugiat iaculis. Morbi et dolor in felis
              viverra efficitur. Integer id laoreet arcu. Mauris turpis nibh,
              scelerisque sed tristique non, hendrerit in erat. Duis interdum
              nisl risus, ac ultrices ipsum auctor at. Aliquam faucibus iaculis
              metus sit amet tincidunt. Vestibulum cursus urna vel nunc
              imperdiet suscipit. Ut eu augue egestas, porta orci lobortis,
              pharetra orci. Morbi eu tellus quis nisi tempor accumsan nec eu
              urna. empor, ullamcorper tortor. Mauris quis fermentum augue.
              Phasellus ac nisl hendrerit, fringilla enim aliquam, placerat
              odio. Ut tortor nisi, pellentesque sed nisi at, hendrerit
              imperdiet turpis. Proin interdum porttitor metus at hendrerit.
              Proin ipsum nisl, lacinia vitae purus ullamcorper, maximus
              convallis sem. Sed nec lacinia lorem. Duis arcu metus, cursus non
              odio quis, tincidunt tempor augue. Donec eget vestibulum risus.
              Nullam blandit quis est vitae feugiat.
            </div>
          </div>
          <div className="overlay"></div>
        </div>
      </div>
      <button
        className="button bg-yellow-100 rounded-2xl p-2"
        onClick={generateCanvas}
      >
        Generate Imgae
      </button>
    </>
  );
};

export default Page;
