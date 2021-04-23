import React from 'react';

interface Props{
    fontSize: number,
    effects: string,
    setStyles: React.Dispatch<React.SetStateAction<any>>;
}

const Customization: React.FC<Props> = ({ fontSize, effects, setStyles }) => {
    function update(){
        setStyles({ ...setStyles, fontSize: fontSize + 1 })
    }
    return(
        <div>
            <div className="text-red-600">{fontSize}</div>
            <button className="bg-green-400" onClick={update}>Here</button>
        </div>
    )
}

export default Customization;