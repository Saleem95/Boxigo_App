import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './components/Sidebar';
import { fetchMoveDetails } from './redux/moveDetailsSlice';
import { fetchMoreDetails } from './redux/moreDetailsslice';
import Profiles from './pages/Profiles';
import Quotes from './pages/Quotes';
import Home from './pages/Home';
import MoreDetails from './components/MoreDetails';
import './App.css';
import Logout from './pages/Logout';

const App = () => {
  const dispatch = useDispatch();
  const moveDetails = useSelector((state) => state.moveDetails.data);
  const loading = useSelector((state) => state.moveDetails.loading);
  const error = useSelector((state) => state.moveDetails.error);
  const moreDetails = useSelector((state) => state.moreDetails.data);
  const loading1 = useSelector((state) => state.moreDetails.loading);
  const error1 = useSelector((state) => state.moreDetails.error);

  useEffect(() => {
    dispatch(fetchMoveDetails());
    dispatch(fetchMoreDetails());
  }, [dispatch]);

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-10">
          <Routes>
            <Route path="/" element={<Home loading={loading} error={error} moveDetails={moveDetails} />} />
            <Route path="/profile" element={<Profiles />} />
            <Route path="/quote" element={<Quotes />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/move-details/:id" element={<MoreDetails loading={loading1} error={error1} moreDetails={moreDetails} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
