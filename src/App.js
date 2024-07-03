import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ContactList from './components/contacts/ContactList/ContactList';
import AddContact from './components/contacts/AddContact/AddContact';
import EditContact from './components/contacts/EditContact/EditContact';
import ViewContact from './components/contacts/ViewContact/ViewContact';
import NavBar from './components/NavBar/NavBar';
import './index.css'


function App() {
  return (
   <>
     <NavBar/>
     <Routes>
       <Route path='/' element={<Navigate to={'/contacts/list'}/>}/>
       <Route path='/contacts/list' element={<ContactList/>}/>
       <Route path='/contacts/add' element={<AddContact/>}/>
       <Route path='/contacts/edit/:contactID' element={<EditContact/>}/>
       <Route path='/contacts/view/:contactID' element={<ViewContact/>}/>
     </Routes>
   </>
  );
}

export default App;
