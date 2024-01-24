import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Home from '../pages/Home';


const router = createBrowserRouter([
    {
        element: <App />,
        path: "/",
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    },    
])

export default router;