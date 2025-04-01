import { useState } from 'react';
 
function CounterVote() {
  const [votesMountains, setVotesMountains] = useState(0);
  const [votesBeach, setVotesBeach] = useState(0);
 
  const voteForMountains = () => setVotesMountains(votesMountains + 1);
  const voteForBeach = () => setVotesBeach(votesBeach + 1);
 
  return (
    <>
      <section className="p-3">
        <div className="container">
           <div className="card shadow-sm p-3">
                <div className="card-body text-center">
                <h2 className="text-primary text-center mb-4 fw-semibold">Where Would You Go?</h2>
 
                <p className="mb-3">Vote for the best vacation destination!</p>
                <div className="mb-4">
                    <h4 className='border border-success-subtle border-3'>Votes for Mountains: {votesMountains}</h4>
                    <h4 className='border border-primary border-3'>Votes for Beach: {votesBeach}</h4>
                </div>

                <div className="row gap-0 text-center">

                  <div className="col">
                    <button
                    onClick={voteForMountains}
                    className="btn btn-success w-100 mb-3"
                    >
                    Mountains
                    </button>
                  </div>

                  <div className="col">
                  <button
                    onClick={voteForBeach}
                    className="btn btn-primary w-100"
                    >
                    Beach
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
 
export default CounterVote;