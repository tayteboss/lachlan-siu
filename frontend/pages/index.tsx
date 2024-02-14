import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import { TransitionsType } from '../shared/types/types';
import { motion } from 'framer-motion';
import client from '../client';
import {
	homePageQueryString,
	projectsQueryString,
	siteSettingsQueryString
} from '../lib/sanityQueries';

const PageWrapper = styled(motion.div)``;

type Props = {
	data: {};
	siteSettings: {};
	projects: {};
	pageTransitionVariants: TransitionsType;
};

const Page = (props: Props) => {
	const { data, siteSettings, projects, pageTransitionVariants } = props;

	console.log('data', data);
	console.log('siteSettings', siteSettings);
	console.log('projects', projects);

	return (
		<PageWrapper
			variants={pageTransitionVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
		>
			<NextSeo title="Boiler" description="Boiler Plate" />
			Home
		</PageWrapper>
	);
};

export async function getStaticProps() {
	const siteSettings = await client.fetch(siteSettingsQueryString);
	const data = await client.fetch(homePageQueryString);
	const projects = await client.fetch(projectsQueryString);

	return {
		props: {
			siteSettings,
			data,
			projects
		}
	};
}

export default Page;
