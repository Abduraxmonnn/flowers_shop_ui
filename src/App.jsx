import Home from './pages/Home'
import './App.css';
import { Route, Routes } from 'react-router-dom'

import AOS from 'aos'
import 'aos/dist/aos.css'

// init AOS animation
AOS.init({
	duration: 1000,
	offset: 100,
})

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
		</Routes>
	)
}

export default App;
