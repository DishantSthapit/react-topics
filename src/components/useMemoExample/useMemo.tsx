import React from 'react';
import './useMemo.css';

export function UseMemo() {
const [theme,setTheme] = React.useState<boolean>(true);
const [value, setValue] = React.useState<number>(1);


const styles = React.useMemo(()=>{
    return {
        backgroundColor: theme ? 'black' : 'white',
        color: theme ? 'white' : 'black'
    }
},[theme])

React.useEffect(()=>{
    console.log('Run')   
},[styles])


const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setValue(parseInt(e.target.value));
}

const data = React.useMemo(() => {
    return slowFunction(value);
},[value])

    return (
        <div className="memo-wrapper">
            <h1>
                useMemo use cases
            </h1>
            <ul>
                <li>useMemo is useful when we don't want a slow function to be updated every single time and only update if the dependencies/input passed to the funtion changes which leads to change the return value</li>
                <li>Referencal equality - The idea here is to prevent an array/object to rerender if the values of the object or array has not changed and only rerender if those values are changed. By wrapping it in memo it gurantees that the reference is not changed(In JS objects and arrays have different reference on each render) on each rerender and only changed when the dependencies is changed.
                </li>
            </ul>

            <div>
                <input type="number" onChange={handleChange}></input>
                <button onClick={(()=> setTheme(!theme))}>Change Theme</button>
                <div style={styles}>{data}</div>
            </div>
        </div>
    )
}

function slowFunction(number:number) {
    for (var i=0; i<=1000000000; i++) {
    }
    console.log('called')
    return number*2;
}