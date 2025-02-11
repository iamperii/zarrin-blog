import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import SingleBlog from './pages/SingleBlog';
import Blogs from './pages/Blogs';
import About from './pages/About';
import NotFound from './pages/NotFound';
import UserLayout from './Layouts/UserLayout';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route element={<UserLayout />}>
						<Route path="/" element={<Home />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/blogs" element={<Blogs />} />
						<Route path="/blog/:id" element={<SingleBlog />} />
						<Route path="/about" element={<About />} />
						<Route path="/notFound" element={<NotFound />} />
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
