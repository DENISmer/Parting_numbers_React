import './App.css';
import {useEffect, useMemo, useState} from "react";
import './App.css';

const variants = [0, 1, 2];
function Radio() {

     const [value, setValue] = useState(0);
     const [text, setText] = useState();

    function getFiltered() {

        if (value === variants[0]) {
            let array = ('' + text).split(' ');
             return array.filter(elem => elem % 2 === 0);
        }

        else if (value === variants[1]) {
            let array = (""+text).split(" ").map(Number)
            return array.filter(elem => elem % 2 !== 0);

        }
        else if (value === variants[2]){
            let array = (""+text).split(" ").map(Number)
            return array;
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
            even
        </label>
        <label>
            <input
                type="radio"
                name="radioName"
                checked={value === 1}
                onChange={() => setValue(1)} />
            not even
        </label>
        <label>
            <input
                type="radio"
                name="radioName"
                checked={value === 2}
                onChange={() => setValue(2)} />
            all
        </label>

        <br/>Numbers:<br/>{getFiltered().join(', ')}
    </>;
}

export default Radio;

