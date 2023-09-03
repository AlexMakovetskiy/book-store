import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { RouteList } from './services/router/RouteList';

import './index.scss';
import './App.scss';

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <RouteList/>
            <Footer/>
        </div>
    );
}

export default App;
