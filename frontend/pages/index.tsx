import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import {
	HomePageType,
	ProjectType,
	SiteSettingsType,
	TransitionsType
} from '../shared/types/types';
import { motion } from 'framer-motion';
import client from '../client';
import {
	homePageQueryString,
	projectsQueryString,
	siteSettingsQueryString
} from '../lib/sanityQueries';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import InfoModal from '../components/blocks/InfoModal';
import ProjectsModal from '../components/blocks/ProjectsModal';
import ProjectsList from '../components/blocks/ProjectsList';
import HomeIntro from '../components/blocks/HomeIntro';

const PageWrapper = styled(motion.div)``;

type Props = {
	data: HomePageType;
	siteSettings: SiteSettingsType;
	projects: ProjectType[];
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
			<NextSeo
				title={siteSettings?.siteTitle || ''}
				description={siteSettings?.siteDescription || ''}
			/>
			<Header />
			<HomeIntro />
			<ProjectsList />
			<ProjectsModal />
			<InfoModal />
			<Footer />
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
