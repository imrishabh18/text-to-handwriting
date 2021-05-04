//Read the font uploaded by the user
export default function addFontFromFile(fileObj) {
  const pageContent = document.querySelectorAll(".contentPage")[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    const newFont = new FontFace("temp-font", e.target.result);
    newFont.load().then((loadedFace) => {
      document.fonts.add(loadedFace);
      pageContent.style.fontFamily = "temp-font";
    });
  };
  reader.readAsArrayBuffer(fileObj);
}
