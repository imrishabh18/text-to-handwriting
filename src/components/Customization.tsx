import { parse } from "node:path";
import React from "react";

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
  setStyles: React.Dispatch<React.SetStateAction<any>>;
}

const Customization: React.FC<Props> = ({ styles, setStyles }) => {
  return (
    <div className="customization flex-1 w-1/2">
      <h2 className="text-2xl font-bold pl-28 mb-10">Customizations</h2>
      <div className="flex justify-around">
        <div className="flex-col">
          <h4>Font Size :</h4>
          <input
            type="number"
            min={0}
            defaultValue={10}
            className="rounded-full fontSize py-1 px-2 mt-2"
            placeholder="10"
            onChange={(e) => {
              if (parseInt(e.target.value) < 25) {
                e.preventDefault();
                setStyles({ ...styles, fontSize: e.target.value });
              }
            }}
          />
        </div>
        <div className="flex-col">
          <h4>Ink color :</h4>
          <select
            className="ink rounded-full py-1 px-2 mt-2"
            defaultValue="#000f55"
            onChange={(e) => setStyles({ ...styles, inkColor: e.target.value })}
          >
            <option value="#000f55">Blue</option>
            <option value="red">Red</option>
            <option value="black">Black</option>
          </select>
        </div>
      </div>
      <div className="flex justify-around pt-10">
        <div className="flex-col">
          <h4>Vertical Spacing :</h4>
          <input
            type="number"
            defaultValue={3}
            className="rounded-full verticalSpacing py-1 px-2 mt-2"
            placeholder="3"
            onChange={(e) =>
              setStyles({ ...styles, verticalSpacing: e.target.value })
            }
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
            defaultValue="Homemade apple"
            onChange={(e) =>
              setStyles({ ...styles, fontFamily: e.target.value })
            }
          >
            <option value="Homemade apple">Homemade apple</option>
            <option value="Caveat">Caveat</option>
            {/* <option value="">three</option> */}
          </select>
        </div>
        <div className="upload flex-col -ml-28">
          <h4>Upload :</h4>
          <input
            className="mt-2 rounded-full bg-transparent text-white"
            type="file"
            value=""
            title=" "
          />
        </div>
      </div>
      <div className="flex justify-around pt-10 -ml-16">
        <div className="flex-col pr-2">
          <h4>Paper Margin: </h4>
          <label className="switch mt-2">
            <input
              type="checkbox"
              defaultChecked={true}
              checked={styles.margin}
              onClick={(e) => setStyles({ ...styles, margin: !styles.margin })}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="flex-col -ml-20">
          <h4>Paper Lines: </h4>
          <label className="switch mt-2">
            <input
              className="checkbox"
              type="checkbox"
              defaultChecked={true}
              checked={styles.lines}
              onClick={(e) => setStyles({ ...styles, lines: !styles.lines })}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Customization;
