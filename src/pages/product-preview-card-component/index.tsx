import styles from '@styles/ProductCard.module.scss';
import { NextPage } from 'next';
import Head from 'next/head';
import ProductCard from 'src/modules/product-preview-card-component/components/ProductCard';

type Props = {};

const ProductCardPage: NextPage<Props> = ({}) => {
	console.log(styles);
	return (
		<>
			<Head>
				<title>Frontend Mentor | Product preview card component</title>
				<link
					rel="icon"
					type="image/png"
					href="/product-preview-card-component/favicon-32x32.png"
				/>
			</Head>
			<ProductCard />
			<style global jsx>{`
				body {
					background: ${styles.backgroundColor};
					height: 100vh;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			`}</style>
		</>
	);
};

export default ProductCardPage;
