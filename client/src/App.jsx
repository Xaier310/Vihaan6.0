import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar, Loader } from './components';
import { CampaignDetails, CreateCampaign, Home, AllCampaigns, LoginPage } from './pages';
import { useAuth0 } from '@auth0/auth0-react';
import StartingLoader from './components/startingLoader';
import ProtectedRoute from './components/ProtectedRoute';


const App = () => {
  const { isLoading, isAuthenticated } = useAuth0();
  return (
      <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
        <div className="sm:flex hidden mr-10 relative">
          <Sidebar />
        </div>

        <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
          <Navbar />

          <Routes>
            <Route exact path ="/" element = {<ProtectedRoute/>}>
              <Route exact path="/" element={<Home />} />
            </Route>
            <Route exact path ="/allcampaigns" element = {<ProtectedRoute/>}>
              <Route exact path="/allcampaigns" element={<AllCampaigns />} />
            </Route>
            <Route exact path ="/create-campaign" element = {<ProtectedRoute/>}>
              <Route exact path="/create-campaign" element={<CreateCampaign />} />
            </Route>
            <Route exact path ="/campaign-details/:id" element = {<ProtectedRoute/>}>
              <Route exact path="/campaign-details/:id" element={<CampaignDetails />} />
            </Route>
            <Route path="/login" element={isLoading ? <StartingLoader /> : <LoginPage />} />
          </Routes>
        </div>
      </div>
  )
}

export default App