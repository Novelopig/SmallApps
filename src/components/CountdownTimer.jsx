import React, { useState } from "react";

const CountdownTimer = () => {

    const [count, setCount] = useState(10);
    const [intervalId, setIntervalId] = useState(null);

    // Start the countdown timer
    const handleStart = () => {
    if (intervalId || count === 0) return;

    const id = setInterval(() => {
        setCount((prevCount) => {
        if (prevCount <= 1) {
            clearInterval(id);
            return 0;
        }
        return prevCount - 1;
        });
    }, 1000);

    setIntervalId(id);
    };

    return (
    <>
    <section className="CountdownTimer p-3">
        <div className="container text-center">
            <div className="card shadow-sm p-4">
                <h2 className="mb-2 text-primary text-center fw-semibold">Countdown Timer</h2>
                <div
                className={`count fw-bold mb-2 ${
                    count === 0 ? "text-danger" : "text-dark"
                }`}
                >
                {count}
                </div>
                <button
                onClick={handleStart}
                className="btn btn-outline-primary btn-lg"
                disabled={count === 0} // Disable if countdown reaches 0
                >
                Start Countdown
                </button>
            </div>
        </div>
    </section>
    </>
    );
};

export default CountdownTimer;
