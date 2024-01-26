function Parent(props) {
  const myCallback = (e) => {
    console.log("a child sent this up", e);
  };
  return <Child parentCallback={myCallback} />;
}

function Child(props) {
  return <button onClick={props.parentCallback}>Click Me</button>;
}
