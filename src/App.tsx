import './App.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Documentation from './pages/Documentation';
import Home from './pages/Home';

function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/docs" element={<Documentation />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
