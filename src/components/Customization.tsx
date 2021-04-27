import React from "react";

interface Props {
  styles: {
    fontSize: number;
    effect: string;
  };
  setStyles: React.Dispatch<React.SetStateAction<any>>;
}

const Customization: React.FC<Props> = ({ styles, setStyles }) => {
  return (
    <div className="customization flex-1 w-1/2 -ml-40">
      <h2 className="text-2xl font-bold pl-40 mb-10">Customizations</h2>
      <div className="flex justify-around">
        <div className="flex-col">
          <h4>Font Size :</h4>
          <input
            type="number"
            className="rounded-full fontSize py-1 px-2 mt-2"
            placeholder="10"
            onChange={(e) => setStyles({ ...styles, fontSize: e.target.value })}
          />
        </div>
        <div className="flex-col">
          <h4>Ink color :</h4>
          <select
            className="ink rounded-full py-1 px-2 mt-2"
            defaultValue="blue"
            onChange={(e) => setStyles({ ...styles, effect: e.target.value })}
          >
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
            <option value="Black">Black</option>
          </select>
        </div>
      </div>
      <div className="flex justify-around pt-10">
        <div className="flex-col">
          <h4>Letter Spacing :</h4>
          <input
            type="number"
            className="rounded-full fontSize py-1 px-2 mt-2"
            placeholder="10"
            onChange={(e) => setStyles({ ...styles, fontSize: e.target.value })}
          />
        </div>
        <div className="flex-col">
          <h4>Effects :</h4>
          <select
            className="effect rounded-full py-1 px-2 mt-2"
            defaultValue="shadow"
            onChange={(e) => setStyles({ ...styles, effect: e.target.value })}
          >
            <option value="shadow">Shadow</option>
            <option value="scanner">Scanner</option>
            <option value="no-effect">No-effect</option>
          </select>
        </div>
      </div>
      <div className="flex justify-around pt-10 -ml-14">
        <div className="flex-col">
          <h4>Font Family :</h4>
          <select
            className="fontFamily rounded-full py-1 px-2 mt-2"
            defaultValue="Heleav"
            onChange={(e) => setStyles({ ...styles, effect: e.target.value })}
          >
            <option value="shadow">one</option>
            <option value="scanner">two</option>
            <option value="no-effect">three</option>
          </select>
        </div>
        <div className="upload flex-col -ml-28">
          <h4>Upload :</h4>
          <input className="mt-2 rounded-full bg-transparent text-white" type="file" value="" title=" " />
        </div>
      </div>
      <div className="flex justify-around pt-10 -ml-16">
        <div className="flex-col pr-2">
          <h4>Paper Margin: </h4>
          <label className="switch mt-2">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="flex-col -ml-20">
          <h4>Paper Lines: </h4>
          <label className="switch mt-2">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      
    </div>
  );
};

export default Customization;
