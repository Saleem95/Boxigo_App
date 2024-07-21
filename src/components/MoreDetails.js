import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { FaRoute, FaTruck, FaExclamationTriangle } from 'react-icons/fa';
import { IoCheckbox } from 'react-icons/io5';
import { FaTimeline } from 'react-icons/fa6';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const MoreDetails = ({ loading, error, moreDetails, move }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const moveDetail = moreDetails.find(detail => detail.estimate_id === id);
  console.log(moveDetail ? moveDetail.items.inventory : 'No inventory details');
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  const handleViewMoveDetails = (id) => {
    navigate(`/move-details/${id}`);
  };

  return (
    <div className='container'>
      <h1 className="text-2xl font-bold">Move Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : moveDetail ? (
        <div>
          <div className="flex justify-between items-center dtl1">
            <p className="pr"><strong>From:</strong><br /> {moveDetail.moving_from}</p>
            <p className='pr m-auto flex text-center justify-center '><p className=' rounded-full text-red-500'><FaArrowRight /></p></p>
            <p className="pr"><strong>To:</strong><br /> {moveDetail.moving_to}</p>
            <p className="pr"><strong>Request#:</strong><br /> {moveDetail.estimate_id}</p>
          </div>
          <div className="flex dtl2 mt-5">
            <p className="text-sm"><AiFillHome className="text-red-500" /> {moveDetail.property_size}</p>
            <p className="text-sm"><FaTimeline className="text-red-500" /> {moveDetail.total_items}</p>
            <p className="text-sm"><FaRoute className="text-red-500" /> {moveDetail.distance}</p>
            <p className="text-sm"><FaTruck className="text-red-500" /> {moveDetail.moving_on}</p>
            <p className="flex"><IoCheckbox className="text-red-500" /> Is flexible: {moveDetail.is_flexible ? 'Yes' : 'No'}</p>
            <button className="px-4 py-1 border-4 text-red-500 border-red-500 rounded hover:bg-sky-100" onClick={() => handleViewMoveDetails(moveDetail.estimate_id)}>
              View Move Details
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-black">
              Quotes Awaiting
            </button>
          </div>
          <div className="mt-4">
            <p className='flex items-center'><FaExclamationTriangle className="text-red-500 mr-2" /> <strong>Disclaimer:</strong> Please update your move date before two days of shifting.</p>
          </div>
          <div className='flex items-center'>
            <h2 className="text-xl font-bold mt-4">Inventory Details</h2>
            <h2 className='text-x font-bold mt-4 ml-6 p-2 bg-black text-white hover:bg-red-700 rounded-md'>
              <button type="button">Edit Details</button>
            </h2>
          </div>
          <div className='mt-3'>
            <p
              className="px-4 py-2 bg-gray-200 rounded flex justify-between items-center"
              onClick={toggleDetails}
            >
              Living Room
              <i className='text-right'>{isExpanded ? (
                <IoIosArrowUp className="ml-2" />
              ) : (
                <IoIosArrowDown className="ml-2" />
              )}</i>
            </p>
            {isExpanded && moveDetail.items && moveDetail.items.inventory && (
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-bold">Furniture Details</h3>
                  <div className="p-2 box-dtl">
                    <div className='my-5'>
                      <p className='flex justify-between'>1 Seater Sofa  <p>2</p></p>
                      <strong>Wooden</strong>
                    </div>
                    <div className='my-5'>
                      <p className='flex justify-between'>3 Seater Sofa  <p>1</p></p>
                      <strong>Wooden</strong>
                    </div>
                    <div className='my-5'>
                      <p className='flex justify-between'>TV Cabinent  <p>1</p></p>
                    </div>
                    <div className='my-5'>
                      <p className='flex justify-between'>Study table <p>1</p></p>
                      <strong>medium</strong>
                    </div>
                    <div className='my-5'>
                      <p className='flex justify-between'>Teapoy  <p>1</p></p>
                      <strong>class top</strong>
                    </div>
                    <div className='my-5'>
                      <p className='flex justify-between'>Shoe Rack  <p>1</p></p>
                      <strong>small</strong>
                    </div>
                    <div className='my-5'>
                      <p className='flex justify-between'>Plastic Chair  <p>2</p></p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold">Electricals</h3>
                  <div className="p-2 box-dtl">
                    <div className='my-5'>
                      <p className='flex justify-between'>LCD TV <p>1</p></p>
                      <strong>30-40 inch</strong>
                    </div>
                    <div className='my-5'>
                      <p className='flex justify-between'>Home Theatro <p>1</p></p>
                      <strong>3+1 Speakers</strong>
                    </div>
                    <div className='my-5'>
                      <p className='flex justify-between'>Ceiling Fan <p>1</p></p>
                      <strong></strong>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold">Fragile</h3>
                  <div className="p-2 box-dtl">
                    <div className='my-5'>
                      <p className='flex justify-between'>Bulb  <p>1</p></p>
                      <strong>.</strong>
                    </div>
                    <div className='my-5'>
                      <p className='flex justify-between'>Picture/Poster/Painting <p>1</p></p>
                      <strong>small</strong>
                    </div>
                    <div className='my-5'>
                      <p className='flex justify-between'>clock  <p>1</p></p>
                      <strong>small</strong>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='mt-3'>
            <p
              className="px-4 py-2 bg-gray-200 rounded flex justify-between items-center"
              onClick={toggleDetails}
            >
              Bed Room
              <i className='text-right'>{isExpanded ? (
                <IoIosArrowUp className="ml-2" />
              ) : (
                <IoIosArrowDown className="ml-2" />
              )}</i>
            </p>
            {isExpanded && moveDetail.items && moveDetail.items.inventory && (
              <div className="mt-4">
              </div>
            )}
          </div>
          <div className='mt-3'>
            <p
              className="px-4 py-2 bg-gray-200 rounded flex justify-between items-center"
              onClick={toggleDetails}
            >
              Khichen
              <i className='text-right'>{isExpanded ? (
                <IoIosArrowUp className="ml-2" />
              ) : (
                <IoIosArrowDown className="ml-2" />
              )}</i>
            </p>
            {isExpanded && moveDetail.items && moveDetail.items.inventory && (
              <div className="mt-4">
              </div>
            )}
          </div>
          <div className='mt-3'>
            <p
              className="px-4 py-2 bg-gray-200 rounded flex justify-between items-center"
              onClick={toggleDetails}
            >
              Bathroom
              <i className='text-right'>{isExpanded ? (
                <IoIosArrowUp className="ml-2" />
              ) : (
                <IoIosArrowDown className="ml-2" />
              )}</i>
            </p>
            {isExpanded && moveDetail.items && moveDetail.items.inventory && (
              <div className="mt-4">
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>No details found</p>
      )}
      <div className='flex items-center'>
        <h2 className="text-xl font-bold mt-4">Hoiuse Details</h2>
        <h2 className='text-x font-bold mt-4 ml-6 p-2 bg-black text-white hover:bg-red-700 rounded-md'>
          <button type="button">Edit House Details</button>
        </h2>
      </div>
      <div className='border-b-2'>
        <h2 className="text-xl font-bold mt-4 text-red-600">House Details</h2>

        <div key={moveDetail.estimate_id} className="p-2 flex	justify-between flex-wrap">
          <div className='my-5'>
            <strong>Floor No</strong>
            <p className='flex justify-between'>{moveDetail.new_floor_no} </p>
          </div>
          <div className='my-5'>
            <strong>Elevator Avaliable</strong>
            <p className='flex justify-between'>{moveDetail.packing_service}</p>
          </div>
          <div className='my-5'>
            <strong>Packing Required</strong>
            <p className='flex justify-between'>{moveDetail.new_elevator_availability}</p>
          </div>
          <div className='my-5'>
            <strong>Distance From truck to door</strong>
            <p className='flex justify-between'>1 meters</p>
          </div>
          <div className='my-5'>
            <strong> Additional information</strong>
            <p className='flex justify-between'>No Additional info</p>
          </div>

        </div>
      </div>
      <div className='border-b-2'>
        <h2 className="text-xl font-bold mt-4 text-red-600">House Details</h2>
        <div key={moveDetail.estimate_id} className="p-2 flex	justify-between flex-wrap">
          <div className='my-5'>
            <strong>Floor No</strong>
            <p className='flex justify-between'>{moveDetail.old_floor_no} </p>
          </div>
          <div className='my-5'>
            <strong>Elevator Avaliable</strong>
            <p className='flex justify-between'>{moveDetail.packing_service}</p>
          </div>
          <div className='my-5'>
            <strong>Packing Required</strong>
            <p className='flex justify-between'>{moveDetail.old_elevator_availability}</p>
          </div>
          <div className='my-5'>
            <strong>Distance From truck to door</strong>
            <p className='flex justify-between'>1 meters</p>
          </div>
          <div className='my-5'>
            <strong> Additional information</strong>
            <p className='flex justify-between'>No Additional info</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
