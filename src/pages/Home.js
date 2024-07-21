import React from 'react';
import MoveDetails from '../components/MoveDetails';

const Home = ({ loading, error, moveDetails }) => (
    <div>
        <h1 className="text-2xl font-bold">My Moves</h1>
        {loading ? (
            <p>Loading...</p>
        ) : error ? (
            <p>Error: {error}</p>
        ) : (
            <div>
                {moveDetails.length > 0 ? (
                    moveDetails.map((move) => (
                        <MoveDetails key={move.estimate_id} move={move} />
                    ))
                ) : (
                    <p>No moves found</p>
                )}
            </div>
        )}
    </div>
);

export default Home;
