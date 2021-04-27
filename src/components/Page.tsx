import React, { useRef } from "react";
import html2canvas from "html2canvas";

interface Props {
  styles: {
    fontSize: number;
    effect: string;
  };
}

const Page: React.FC<Props> = (styles) => {
  const pageElement: HTMLElement = document.querySelectorAll(
    ".pinkMarginedLines"
  )[0] as HTMLElement;
  let pageContent: HTMLElement = document.getElementsByClassName(
    "contentPage"
  )[0] as HTMLElement;
  const pageOverlay: HTMLElement = document.querySelectorAll(
    ".overlay"
  )[0] as HTMLElement;
  const outputImages: HTMLElement = document.querySelectorAll(
    ".output"
  )[0] as HTMLElement;

  //Page styling for the image to give real paper effect.
  const applyPageStyles = () => {
    pageElement.style.border = "none";
    pageElement.style.overflowY = "hidden";
    pageOverlay.style.display = "block";

    if (styles.styles.effect == "scanned") {
      pageOverlay.style.background = `linear-gradient(${
        Math.floor(Math.random() * (120 - 50 + 1)) + 50
      }deg, #0008, #0000`;
    } else if (styles.styles.effect == "shadow") {
      pageOverlay.style.background = `linear-gradient(${
        Math.random() * 360
      }deg, #0008, #0000)`;
    }
  };

  const removePageStyles = () => {
    pageElement.style.border = "1px solid var(--elevation-background)";
    pageElement.style.overflowY = "auto";
    pageOverlay.style.display = "none";
  };

  // To generate the canvas image of the page.
  const generateCanvas = async () => {
    applyPageStyles();
    const element: HTMLElement = document.querySelectorAll("#capture")[0] as HTMLElement;
    await html2canvas(element, { windowHeight: 100, windowWidth: 100 }).then(
      (canvas) => {
        // document.body.appendChild(canvas);
        outputImages.innerHTML = `
          <div>
            <img src=${canvas.toDataURL("image/png")} className="outputImage"/>
          </div>
        `
        const image = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/oct");
        // window.location.href = image;
      }
    );
    removePageStyles();
  };

  return (
    <div className="w-full h-full flex-1">
      <div className="pageContainer flex-1">
      <h4 className="pb-2 text-sm">Type/paste text here</h4>
        <div className="pinkMarginedLines" id="capture">
          <div className="topMargin"></div>
          <div className="midPage flex-col">
            <div className="leftMargin"></div>
            <div
              contentEditable="true"
              className="contentPage"
              style={{ fontSize: `${styles.styles.fontSize}pt` }}
            >
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
        className="generateButton p-3"
        onClick={generateCanvas}
      >
        Generate Image
      </button>

      <div className="output">
      </div>
    </div>
  );
};

export default Page;
