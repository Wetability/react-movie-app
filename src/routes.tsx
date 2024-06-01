import { createBrowserRouter } from 'react-router-dom';

// * Components
import { Suspense, lazy } from 'react';
import App from './App';
import Loading from './components/Loading/Loading';

const Home = lazy(() => import('./pages/Home/Home'));

// * Interface
interface ElementProps {
	component: React.ReactNode;
}

// * Element
function Element({ component }: ElementProps) {
	return <Suspense fallback={<Loading />}>{component}</Suspense>;
}

const routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Element component={<Home />} />,
				children: [],
			},
		],
	},
]);

export default routes;
