import React from 'react';


export default function Usecallabck () {

    const [theme,setTheme] = React.useState<boolean>(true);
    const [value, setValue] = React.useState<number>(1);

    const [items,setItems] = React.useState<Array<number>>([value,value+1]);


    const styles ={
        backgroundColor: theme ? 'black' : 'white',
        color: theme ? 'white' : 'black'
    }
   

    const handleChange = React.useCallback((e:React.ChangeEvent<HTMLInputElement>) =>{
            console.log('test')
            setValue(parseInt(e.target.value));
            setItems([parseInt(e.target.value),parseInt(e.target.value)+1])
        },[])

    return (
        
        <div className="callback-wrapper">
            <h1>
                useCallback use cases
            </h1>
            <ul>
            <div>useCallback is quite similar to useMemo but the major difference is that useMemo returns an array/objects/value which can be used whereas useCallback returns a function which can be consumed</div>
            </ul>

            <div>
                <input type="number" onChange={handleChange}></input>
                <button onClick={(()=> setTheme(!theme))}>Change Theme</button>
                <div style={styles}>Test</div>
                <Child items={items} />
            </div>
        </div>
    )
} 


type TProps = {
    items: Array<number>
}

const Child = ({items}:TProps) => {

    const [dataItems, setDataItems] = React.useState<Array<number>>([])

    React.useEffect(() => {
        setDataItems(items)
    },[items])


    return (
        <div>
            {dataItems.map((item) => (
                <li>{item}</li>
            ))}
        </div>
    )
}