import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

const useResponsiveImage = (
	imageDesktop: StaticImageData,
	imageMobile: StaticImageData,
	threshold: number,
): StaticImageData => {
	const [image, setImage] = useState<StaticImageData>(imageDesktop);

	useEffect(() => {
		const handleResize = () => {
			if (image === imageDesktop && window.innerWidth < threshold)
				setImage(imageMobile);
			else if (image === imageMobile && window.innerWidth >= threshold)
				setImage(imageDesktop);
		};
		handleResize();

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [image, imageDesktop, imageMobile, threshold]);

	return image;
};

export default useResponsiveImage;
