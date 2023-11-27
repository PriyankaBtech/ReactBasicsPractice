import { useEffect } from "react";

function ComponentLifecycle() {
  useEffect(() => {
    console.log('Component did mount!')

    return () => {
        console.log('Component will unmount!');
    }
    }, []) // The empty dependency array means this effect will only run once (on mount)

    useEffect(() => {    
    console.log('Component did update!');
    })

  return <h1>LifeCycle</h1>
}

export default ComponentLifecycle;
