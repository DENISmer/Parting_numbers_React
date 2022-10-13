import './App.css';
import {useEffect, useMemo, useState} from "react";
import './App.css';

const variants = [0, 1];
function Radio() {

     const [value, setValue] = useState(0);
     const [text, setText] = useState();

    function getFiltered() {

        if (value === variants[0]) {
            let array = ('' + text).split('');
             return array.filter(elem => elem % 2 === 0);
        }

        if (value === variants[1]) {
            let array = (""+text).split("").map(Number)
            return array.filter(elem => elem % 2 !== 0);

        }
    }

    return <>
        <input
            type="number"
            name="input"
            value={text}
            onChange={(event) => setText(event.target.value)}
        />
        <label>
            <input
                type="radio"
                name="radioName"
                checked={value === 0}
                onChange={() => setValue(0)} />
            To be
        </label>
        <label>
            <input
                type="radio"
                name="radioName"
                checked={value === 1}
                onChange={() => setValue(1)} />
            or not to be
        </label>
        You selected: {value}
        <br/><br/>{getFiltered().join(', ')}
    </>;
}

export default Radio;

