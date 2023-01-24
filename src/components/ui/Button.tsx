import { FC } from 'react';

interface Props {
	onClick: () => void;
	image: string;
	alt: string;
}

export const Button: FC<Props> = ({ onClick, image, alt }) => {
	return (
		<button onClick={onClick}>
			<img src={image} alt={alt} />
		</button>
	);
};
