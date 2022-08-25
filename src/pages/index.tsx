import { getAllProjects } from '@lib/pages';
import type { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async (): Promise<
	GetStaticPropsResult<Props>
> => {
	return {
		props: {
			pages: await getAllProjects(),
		},
	};
};

type Props = {
	pages: string[];
};

const Home: NextPage<Props> = ({ pages }) => {
	return (
		<>
			<Head>
				<title>joanofstuff | Frontend Mentor</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<ul>
					{pages.map((path) => (
						<li key={path}>
							<Link href={path}>
								<a>{path}</a>
							</Link>
						</li>
					))}
				</ul>
			</main>
		</>
	);
};

export default Home;
