import React, { useEffect } from "react";

interface Props {
  array: Array<any>;
}

const Output: React.FC<Props> = ({ array }) => {
  useEffect(() => {
    if( array.length > 0 && array.length <= 4){
        const outputImages: HTMLElement = document.querySelectorAll(
            ".array"
          )[0] as HTMLElement;
          var list = `<div class="here" style="display: flex; justify-content: space-between;" >`;
          array.forEach((image: any) => {
            list += `
                  <div style="height: 100px !important; position: relative;">
                    <img src=${image.toDataURL(
                      "image/png"
                    )} class="outputImage" style="height: 250px; width: 175px;" />
                    <a
                    download="image.png"
                    class="downloadButton"
                    style="position: absolute;top: 270px;background-color: #006eb8 !important;border-radius: 20px;padding: 15px;color: white;"
                    href=${image
                      .toDataURL("image/png")
                      .replace("image/png", "image/oct")}
                    >
                      Download Image
                    </a>
                  </div>
              `;
          });
          list += `</div>`;
          outputImages.innerHTML = list;
    }else if (array.length > 4){
        alert("Sorry, reload the browser to render more images")
    }
  }, [array]);
  return (
    <div className="output relative w-4/6 mx-32">
      <h1 className="text-4xl pt-10 pb-4">Output</h1>
      { array.length > 0 ? <div className="array"></div> : <div className="noOutput mt-10 border-gray-100 border-2 text-gray-400 text-2xl flex justify-center items-center h-4/6">
          No output
      </div> }
    </div>
  );
};

export default Output;
