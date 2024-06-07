import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DiaryEntries from './components/DiaryEntries';
import NewEntry from './components/NewEntry';
import Highlights from './components/Highlights';
import './App.css';

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/new-entry">New Entry</Link>
                    <Link to="/highlights">Highlights</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<DiaryEntries />} />
                    <Route path="/new-entry" element={<NewEntry />} />
                    <Route path="/highlights" element={<Highlights />} />
                </Routes>
            </div>
        </Router>
    );
}
