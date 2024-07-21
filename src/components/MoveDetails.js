import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaRoute, FaTruck, FaExclamationTriangle } from "react-icons/fa";
import { IoCheckbox } from "react-icons/io5";
import { FaTimeline } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import MoreDetails from './MoreDetails';

const MoveDetails = ({ move }) => {
    const navigate = useNavigate();

    const toggleDetails = (id) => {
        const details = document.getElementById(`details-${id}`);
        if (details.classList.contains('hidden')) {
            details.classList.remove('hidden');
        } else {
            details.classList.add('hidden');
        }
    };
    const handleViewMoveDetails = (id) => {
        toggleDetails(id);
        navigate(`/move-details/${id}`)
        return <MoreDetails />
    };
    
    return (
        <div key={move.estimate_id} className="mb-4 p-4 border-b-2 rounded">
            <div className="">
                <div className='flex dtl1 justify-between'>
                    <p className='pr'><strong>From:</strong> <br /> {move.moving_from}</p>
                    <p className='pr m-auto flex text-center justify-center '><p className=' rounded-full text-red-500'><FaArrowRight /></p></p>
                    <p className='pr'><strong>To:</strong> <br />{move.moving_to}</p>
                    <p className='pr '><strong>Request#:</strong><br /> {move.estimate_id}</p>
                </div>
            </div>
            <div className='flex dtl2 mt-5'>
                <p className='text-sm'><AiFillHome className='text-red-500' /> {move.property_size}</p>
                <p className='text-sm'><FaTimeline className='text-red-500' /> {move.total_items}</p>
                <p className='text-sm'><FaRoute className='text-red-500' /> {move.distance}</p>
                <p className='text-sm'><FaTruck className='text-red-500' /> {move.moving_on}</p>
                <p className='flex'><IoCheckbox className='text-red-500' /> Is flexible</p>
                <button className="px-4 py-1 border-4 text-red-500 border-red-500 rounded" onClick={() => handleViewMoveDetails(move.estimate_id)}>
                    View Move Details
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => toggleDetails(move.estimate_id)}>
                    Quotes Awaiting
                </button>
            </div>
            <div className='mt-4'>
                <p className='flex items-center'><FaExclamationTriangle className="text-red-500 mr-2" /> <strong>Disclaimer:</strong> Please update your move date before two days of shifting.</p>
            </div>
            <div id={`details-${move.estimate_id}`} className="hidden mt-4">
                <h3 className="text-lg font-bold">Inventory Details</h3>
                <div>
                    {Array.isArray(move.items?.inventory) && move.items.inventory.length > 0 ? (
                        move.items.inventory.map((item, index) => (
                            <div key={index} className="border p-2 rounded">
                                <p>{item.item_name}</p>
                                <p><strong>{item.type}</strong></p>
                                <p>{item.quantity}</p>
                            </div>
                        ))
                    ) : (
                        <p>No items found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MoveDetails;
