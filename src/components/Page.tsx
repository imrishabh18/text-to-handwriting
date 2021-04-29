import React, { useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import { image } from "html2canvas/dist/types/css/types/image";
import { backgroundSize } from "html2canvas/dist/types/css/property-descriptors/background-size";

interface Props {
  styles: {
    fontSize: number;
    effect: string;
    inkColor: string;
    fontFamily: string;
    verticalSpacing: number;
    margin: boolean;
    lines: boolean;
  };
}

const Page: React.FC<Props> = (styles) => {
  const pageElement: HTMLElement = document.querySelectorAll(
    ".pinkMarginedLines"
  )[0] as HTMLElement;
  const pageContent: HTMLElement = document.querySelectorAll(
    ".contentPage"
  )[0] as HTMLElement;
  const pageOverlay: HTMLElement = document.querySelectorAll(
    ".overlay"
  )[0] as HTMLElement;
  const outputImages: HTMLElement = document.querySelectorAll(
    ".array"
  )[0] as HTMLElement;
  const topMargin: HTMLElement = document.querySelectorAll(
    ".topMargin"
  )[0] as HTMLElement;
  const leftMargin: HTMLElement = document.querySelectorAll(
    ".leftMargin"
  )[0] as HTMLElement;
  const tm: HTMLElement = document.querySelectorAll(".tm")[0] as HTMLElement;
  const lm: HTMLElement = document.querySelectorAll(".lm")[0] as HTMLElement;

  //Page styling for the image to give real paper effect.
  const applyPageStyles = () => {
    if (pageElement) {
      pageElement.style.border = "none";
      pageElement.style.overflowY = "hidden";
      pageOverlay.style.display = "block";
    }

    if (styles.styles.effect == "scanned" && pageOverlay) {
      pageOverlay.style.background = `linear-gradient(${
        Math.floor(Math.random() * (120 - 50 + 1)) + 50
      }deg, #0008, #0000`;
    } else if (styles.styles.effect == "shadow" && pageOverlay) {
      pageOverlay.style.background = `linear-gradient(${
        Math.random() * 360
      }deg, #0008, #0000)`;
    }
  };

  const removePageStyles = () => {
    pageElement.style.border = "1px solid var(--elevation-background)";
    pageElement.style.overflowY = "hidden";
    pageOverlay.style.display = "none";
  };

  // To generate the canvas image of the page.
  const generateCanvas = async () => {
    console.log("here")
    applyPageStyles();
    const element: HTMLElement = document.querySelectorAll(
      "#capture"
    )[0] as HTMLElement;
    const options = {
      scrollX: 0,
      scrollY: -window.scrollY,
      useCORS: true,
    };
    await html2canvas(element, options).then((canvas) => {
      if (outputImages) {
        outputImages.innerHTML = `
            <img src=${canvas.toDataURL("image/png")} class="outputImage"/>
            <a
            download="image.png"
          class="downloadButton"
          style="position: absolute;background-color: #006eb8 !important;border-radius: 20px;padding: 15px;color: white; top: 120% !important;"
          href=${canvas
            .toDataURL("image/png")
            .replace("image/png", "image/oct")}
        >
          Download Image
        </a>
        `;
      }
    });
    removePageStyles();
  };

  useEffect(() => {
    //margin style removal
    if (styles.styles.margin == false && pageContent) {
      setTimeout(() => {
        pageContent.style.paddingLeft = "15px";
        tm.classList.remove("topMargin");
        lm.classList.remove("leftMargin");
      }, 300);
    } else if (styles.styles.margin && pageContent) {
      setTimeout(() => {
        pageContent.style.paddingLeft = "55px";
        tm.classList.add("topMargin");
        lm.classList.add("leftMargin");
      }, 300);
    }

    //lines style removal
    if (styles.styles.lines == false && pageContent) {
      setTimeout(() => (pageContent.style.backgroundImage = "none"), 300);
    } else if (styles.styles.lines && pageContent) {
      setTimeout(
        () =>
          (pageContent.style.backgroundImage =
            "linear-gradient(#999 0.05em, transparent 0.1em)"),
        300
      );
    }
  }, [styles.styles.margin, styles.styles.lines]);

  return (
    <div className="w-full flex-1 pl-32 pt-20">
      <div className="pageContainer flex-1">
        <h4 className="pb-2 text-sm">Type/paste text here</h4>
        <div className="pinkMarginedLines" id="capture">
          <div className="topMargin tm"></div>
          <div className="midPage flex-col">
            <div className="leftMargin lm"></div>
            <div
              contentEditable="true"
              className="contentPage cp"
              style={{
                fontSize: `${styles.styles.fontSize}pt`,
                color: styles.styles.inkColor,
                fontFamily: `${styles.styles.fontFamily}`,
                paddingTop: `${styles.styles.verticalSpacing}pt`,
                // backgroundSize: `100% `
              }}
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
      <div className="w-full flex items-center">
        <button
          className="generateButton mt-10 p-3 text-white rounded-2xl z-10"
          onClick={generateCanvas}
        >
          Generate Image
        </button>
      </div>
      <div className="output relative w-full">
        <h1 className="text-4xl pt-10">Output</h1>
        <div className="array"></div>
      </div>
    </div>
  );
};

export default Page;
