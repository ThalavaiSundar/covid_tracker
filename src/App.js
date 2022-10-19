import logo from './logo.svg';
import './App.css';
import React from "react";
// import CovidInfo from './components/TableView';
import CardView from './components/cardview.jsx';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import TopBar from './components/TopBar.jsx';
import ViewDetail from './components/viewdetail.jsx';
import CovidInfo from './components/TableView.jsx';
import { TableView } from '@mui/icons-material';

function App() {
  return (
    <>
      <BrowserRouter>
          <TopBar/>
          <Routes>
            <Route path="TableView" element={<TableView/>}/>
            <Route path="cardView" element={<CardView/>}/>
            <Route path="button" element={<ViewDetail/>}/>
          </Routes>   
      </BrowserRouter>
    </>
  );
}

export default App;
