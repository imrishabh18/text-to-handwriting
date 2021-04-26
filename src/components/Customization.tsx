import React from 'react';

interface Props{
    styles: {
        fontSize: number;
        effect: string;
    }
    setStyles: React.Dispatch<React.SetStateAction<any>>;
}

const Customization: React.FC<Props> = ({ styles, setStyles }) => {

    return(
        <div className="flex justify-between w-1/2">
           <input type="number" className="fontSize" placeholder="10" onChange={e => setStyles({...styles, fontSize: e.target.value })} />
           <select className="effect" defaultValue="shadow" onChange={e => setStyles({...styles, effect: e.target.value })} >
               <option value="shadow" >Shadow</option>
               <option value="scanned">Scanned</option>
               <option value="no-effect">No-effect</option>
           </select>
        </div>
    )
}

export default Customization;