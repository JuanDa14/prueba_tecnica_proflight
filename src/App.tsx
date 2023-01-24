import { useCounter } from './hooks';
import { Button, Image } from './components';

import logo from './assets/logo.svg';
import arrow_right from './assets/arrow_right.svg';
import arrow_left from './assets/arrow_left.svg';

const images = Array.from({ length: 4 }, (_, i) => ({ id: i, src: logo }));

function App() {
	const { increment, decrement, counter } = useCounter(0, images.length, 1);

	return (
		<div className='container'>
			<div className='content'>
				<Button onClick={decrement} alt='button_left' image={arrow_left} />

				<div className='image_container'>
					{images.map((image, i) => (
						<Image
							isActive={counter === i}
							alt={`${image.src} - ${i}`}
							key={image.id}
							src={image.src}
						/>
					))}
				</div>

				<Button onClick={increment} alt='button_right' image={arrow_right} />
			</div>
		</div>
	);
}

export default App;
