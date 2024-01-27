import { images } from '../../../constants';
import { Link } from 'react-router-dom';
import './Header.css';
import AntTest from '../../AntTest';

const Header = () => (
	<nav className='app__header' data-aos='fade-down'>
		<div className='app__header-logo'>
			<img src={images.logo} alt='logo' />
		</div>

		<ul className='app__header-links'>
			<li className='p_quicksand'>Home</li>
			<li className='p_quicksand'>About Us</li>
			<li className='p_quicksand'>Services</li>
			<Link to="/ant">
				<li className='p_quicksand'>Shop</li>
			</Link>
			<li className='p_quicksand'>Contact Us</li>
		</ul>

		<div className='app__header_lang-switcher'>
			<p className='app__header-switcher'>Eng</p>
			<img src={images.arrow_down} alt='arrow' />
		</div>
	</nav>
)
export default Header
