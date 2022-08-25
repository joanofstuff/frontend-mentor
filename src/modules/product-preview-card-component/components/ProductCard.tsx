import styles from '@styles/ProductCard.module.scss';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import icon from '~/public/product-preview-card-component/icon-cart.svg';
import imageDesktop from '~/public/product-preview-card-component/image-product-desktop.jpg';
import imageMobile from '~/public/product-preview-card-component/image-product-mobile.jpg';

const ProductCard = () => {
	const [image, setImage] = useState<StaticImageData>(imageMobile);

	useEffect(() => {
		const handleResize = () => {
			if (image === imageDesktop && window.innerWidth < 600)
				setImage(imageMobile);
			else if (image === imageMobile && window.innerWidth >= 600)
				setImage(imageDesktop);
		};
		handleResize();

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [image]);

	return (
		<div className={styles.card}>
			<Image className={styles.image} src={image} alt="Product image" />
			<div className={styles.info}>
				<p className={styles.category}>Perfume</p>
				<h1 className={styles.name}>Gabrielle Essence Eau De Parfum</h1>
				<p className={styles.description}>
					A floral, solar and voluptuous interpretation composed by Olivier
					Polge, Perfumer-Creator for the House of CHANEL.
				</p>
				<p className={styles.price}>
					<span className={styles.price__large}>$149.99</span>{' '}
					<span className={styles.price__small}>$169.99</span>
				</p>
				<button className={styles.button} onClick={() => {}}>
					{/*eslint-disable-next-line @next/next/no-img-element*/}
					<img src={icon.src} alt="" /> Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
