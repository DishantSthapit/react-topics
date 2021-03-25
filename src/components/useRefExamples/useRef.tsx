import "./useRef.css";
import React from "react";


const ChildComponent = React.forwardRef<HTMLInputElement, {name:string}>(({ name }, childRef) => (
  <input placeholder={name} ref={childRef}></input>
));

export default function UseRef() {
  const node = React.useRef<HTMLButtonElement | null>(null);
  const ref = React.useRef<HTMLInputElement | null>(null);
  const childRef = React.useRef<HTMLInputElement | null>(null);
  const [visible, setVisible] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClick = (e:MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    if (node.current && !node?.current?.contains(target)) {
      return setVisible(false);
    }
    return;
  };
  const onClick = () => {
    if (ref.current) {
      ref.current?.select();
    }
  };

  const onVisiblecClick = () => {
    setOpen(!open);
  };

  const childClick = () => {
    childRef.current?.select();
  };

  const callbackRef = (node: HTMLInputElement) => {
    if (node) {
      node.focus();
    }
  };

  React.useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="App">
      <h2>useRef Examples</h2>
      <div className="wrapper">
        <button className='useref-button' ref={node} onClick={() => setVisible(!visible)}>
          Open
        </button>
        {visible && (
          <div className="inner">
            <div className="item">Item 1</div>
            <div className="item">Item 2</div>
            <div className="item">Item 3</div>
          </div>
        )}
      </div>

      <div className="wrapper">
        <input ref={ref}></input>
        <button className='useref-button' onClick={onClick}>Select</button>
      </div>

      <h2>Callback Ref Examples</h2>
      <div className="wrapper">
        <input></input>
        <button className='useref-button' onClick={onVisiblecClick}>Visible</button>
        {open && (
          <div className="inner">
            <input ref={callbackRef}></input>
          </div>
        )}
      </div>

      <h2>Ref Forward Examples</h2>
      <div className="wrapper">
        <ChildComponent name="Child" ref={childRef} />
        <button className='useref-button' onClick={childClick}>Child Ref</button>
      </div>
    </div>
  );
}
