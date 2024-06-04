import React from 'react'
import ReactDOM from 'react-dom/client'
import LayOut from './components/layout.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LoginComponent from './components/login.jsx'
import SignUpComponent from './components/signup.jsx'
import ProfileComponent from './components/profile.jsx'
import NotificationCompo from './components/Notification.jsx'
import FetchNearBloodBank from './components/nearerBloodBank.jsx'
import BloodBankDetailsComponent from './components/ownerBloodBank.jsx'
import RegisterBloodBankComponent from './components/registerBloodBank.jsx'
import SearchBloodBankCompo from './components/searchBloodBank.jsx'
import HomeComponent from './components/Home.jsx'
import AboutComponent from './components/About.jsx'
import BloodBankDetail from './components/searchBloodBankDetails.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
       <Route path='/' element={<LayOut/>}>
          <Route index element={<HomeComponent />}/>
          <Route path='login' element={<LoginComponent />}/>
          <Route path='signup' element={<SignUpComponent />}/>
          <Route path='about' element={<AboutComponent />}/>
          <Route path='profile'>
            <Route index element={<ProfileComponent />}/>
            <Route path='notification' element={<NotificationCompo />} />
          </Route>
            <Route path='bloodbank/nearbloodbank' element={<FetchNearBloodBank />}/>
            <Route path='bloodbank/ownerbloodbank' element={<BloodBankDetailsComponent />} />
            <Route path='bloodbank/registerbloodbank' element={<RegisterBloodBankComponent />} />
            <Route path='bloodbank/searchbloodbank' element={<SearchBloodBankCompo />}/>
            <Route path='bloodbank/:id' element={<BloodBankDetail />}/>
          </Route>
    </Routes>
  </BrowserRouter>
  
)
