import Link from 'next/link';

const Footer = () => {
	return (
		<>
			<footer>
				by{' '}
				<Link
					href="https://www.frontendmentor.io/profile/joanofstuff?ref=challenge"
					target="_blank"
					passHref
				>
					<a>joanofstuff</a>
				</Link>
			</footer>
			<style jsx>
				{`
					footer {
						position: fixed;
						margin: 0;
						right: 0px;
						bottom: 0px;
						padding: 3px 6px;
						font-size: 11px;
						text-align: right;
						color: #fff;
						background-color: #444;
						border-top-left-radius: 12px;
						opacity: 33%;
					}
					footer a {
						color: #fd2;
					}
				`}
			</style>
		</>
	);
};

export default Footer;
