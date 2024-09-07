import './Queue.css';
import React, { useState } from 'react';

function Queue() {
    const [number, setNumber] = useState('');
    const [Queue, setQueue] = useState([]);
    const [frontElement, setFrontElement] = useState(null);

    const pushQueue = () => {
        if (number === '' || Queue.length >= 5) return;
        
        setQueue(Queue => [...Queue, number]);
        console.log('Pushed:', number);
        setNumber('');
        setFrontElement(Queue[0] || number);
    };

    const popQueue = () => {
        if (Queue.length === 0) return;

        const newQueue = [...Queue];
        const removedElement = newQueue.shift();
        setQueue(newQueue);
        console.log('Popped:', removedElement);
        setFrontElement(newQueue[0] || null);
    };

    let displayContent;

    if (Queue.length === 0) {
        displayContent = <div className="message" style={{textAlign:"center"}}>Queue is empty</div>;
    } else if (Queue.length >= 5) {
        displayContent = <div className="message" style={{textAlign:"center"}}>Queue is full</div>;
    } else {
        displayContent = (
            <div className="Queue-display">
                {Queue.map((item, index) => (
                    <div key={index} className="Queue-item">
                        {item}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <>
            <div className="frame1">
                <input
                    type="number"
                    placeholder="Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <button onClick={pushQueue}>Push</button>
                <button style={{ backgroundColor: 'red' }} onClick={popQueue}>Pop</button>
                {/* <button onClick={frontEle}>Front Element</button> */}
            </div>
            <div className="Queue-box">
                <h2 style={{textAlign:"center"}}>Queue:</h2>
                {displayContent}
                {frontElement !== null && (
                    <div className="front-element" style={{textAlign:"center", marginTop: "10px"}}>
                        <strong>Front Element:</strong> {frontElement}
                    </div>
                )}
            </div>
        </>
    );
}

export default Queue;
