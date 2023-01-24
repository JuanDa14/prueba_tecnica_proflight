import { FC } from 'react';

interface Props {
	isActive: boolean;
	src: string;
	alt: string;
}

export const Image: FC<Props> = ({ isActive, src, alt }) => {
	return <img className={`image ${isActive ? 'active' : 'inactive'}`} src={src} alt={alt} />;
};
