import { 
    Route, 
    Link, 
    Routes
} 
from 'react-router-dom';
import Home from './Home';
import Resources from './Resources';

const Sidebar = () => {
    return (
    <div className='sidebar'>
        <div className='sidebar-list-styling'>
            <ul className='sidebar-list list-unstyled'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/resources'>Resources</Link>
                </li>
                <li>
                    <Link to='/functionalcomponent'>Functional Component</Link>
                </li>
            </ul>
        </div>
        <div className='sidebar-route'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    </div>
    );
};
export default Sidebar;


