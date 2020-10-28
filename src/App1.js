import React, { useEffect, useState } from 'react';
import './App1.css';

/**
* @author Biky Mandal
* @function App1
**/

const App1 = (props) => {

    const [count, setCount] = useState(0);
    const [isActive, SetActive] = useState(false);

    const toggle = () => {
        SetActive(!isActive);
    }

    const reset_ = () => {
        SetActive(false);
        setCount(0);
    }

    useEffect(() => {
        let interval_id = null
        if(isActive){
            interval_id = setInterval(() => {
                setCount(count => count + 1);
            }, 1000);
        }else if(!isActive && count !== 0 ){
            clearInterval(interval_id);
        }
        return () => clearInterval(interval_id);
    }, [count, isActive]);


    return (
        <div className="main-div">
            <div className="Number">
                {
                    count !== 0 ? 
                        <label className="count-lbl">{count}</label>
                        :
                        <label className="count-lbl2">Start Timer</label>
                }
            </div>
            <div className="btns_div">
                <button className="Start-btn" onClick={toggle}>
                    {isActive? 'Pause' : 'Start'}
                </button>   
                <button className="reset-btn" onClick={reset_}>
                    Reset
                </button>
            </div>
        </div>
    )

}

export default App1