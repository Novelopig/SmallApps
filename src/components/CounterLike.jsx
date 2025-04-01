import React, { useState } from 'react';
 
function CounterLike() {
  const [counter, setCounter] = useState(0);
 
  // function for the PLUS button
  function btnPlus() {
    setCounter(counter + 1);
  }
 
  // function for the MINUS button
  function btnMinus() {
    if (counter > 0) {
      setCounter(Math.max(0, counter - 1));
    }
  }
 
  return (
    <>
      <section className="CounterLike p-3">
        <div className="container">
          <div className="card shadow-sm p-2">
            <div className="card-body">
              <h2 className="text-primary text-center fw-semibold">Dislikes & Likes</h2>
 
              <h3 className="card-title text-center fw-bold">{counter}</h3>
              <p>COUNTER</p>

              <div className="row gap-0 text-center">

                <div className="col">
                  <button onClick={btnPlus} className="btn btn-dark w-100 mb-3">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                </div>

                <div className="col">
                  <button onClick={btnMinus} className="btn btn-danger w-100">
                    <i className="fa-regular fa-thumbs-down"></i>
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 
export default CounterLike;