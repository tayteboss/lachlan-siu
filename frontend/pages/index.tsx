import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import {
	HomePageType,
	InfoPageType,
	ProjectType,
	SiteSettingsType,
	TransitionsType
} from '../shared/types/types';
import { motion } from 'framer-motion';
import client from '../client';
import {
	homePageQueryString,
	infoPageQueryString,
	projectsQueryString,
	siteSettingsQueryString
} from '../lib/sanityQueries';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import InfoModal from '../components/blocks/InfoModal';
import ProjectsModal from '../components/blocks/ProjectsModal';
import ProjectsList from '../components/blocks/ProjectsList';
import HomeIntro from '../components/blocks/HomeIntro';
import { useState } from 'react';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import MobileMenu from '../components/elements/MobileMenu';

type StyledProps = {
	$isActive: boolean;
};

const PageWrapper = styled(motion.div)``;

const ZoomWrapper = styled.div<StyledProps>`
	transform: ${(props) => (props.$isActive ? 'scale(0.997)' : 'scale(1)')};
	opacity: ${(props) => (props.$isActive ? 0.5 : 1)};

	transition: all 500ms var(--transition-ease);
`;

type Props = {
	data: HomePageType;
	siteSettings: SiteSettingsType;
	projects: ProjectType[];
	pageTransitionVariants: TransitionsType;
	infoPage: InfoPageType;
};

const Page = (props: Props) => {
	const { data, siteSettings, projects, infoPage, pageTransitionVariants } =
		props;

	const [projectsModalIsActive, setProjectsModalIsActive] = useState(false);
	const [infoModalIsActive, setInfoModalIsActive] = useState(false);

	const lenis = useLenis(({ scroll }) => {});

	// useEffect(() => {
	// 	if (projectsModalIsActive || infoModalIsActive) {
	// 		lenis?.stop();
	// 	} else {
	// 		lenis?.start();
	// 	}
	// }, [lenis, projectsModalIsActive, infoModalIsActive]);

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
			<Header
				projectsModalIsActive={projectsModalIsActive}
				infoModalIsActive={infoModalIsActive}
				setProjectsModalIsActive={setProjectsModalIsActive}
				setInfoModalIsActive={setInfoModalIsActive}
			/>
			<MobileMenu
				projectsModalIsActive={projectsModalIsActive}
				infoModalIsActive={infoModalIsActive}
				setProjectsModalIsActive={setProjectsModalIsActive}
				setInfoModalIsActive={setInfoModalIsActive}
			/>
			<ReactLenis root>
				<ZoomWrapper
					$isActive={projectsModalIsActive || infoModalIsActive}
				>
					<HomeIntro data={data?.introContent} />
					<ProjectsList data={projects} />
					<Footer
						email={siteSettings?.email}
						acknowledgementOfCountry={
							siteSettings?.acknowledgementOfCountry
						}
					/>
				</ZoomWrapper>
				<InfoModal
					isActive={infoModalIsActive}
					instagramUrl={siteSettings?.instagramUrl}
					linkedInUrl={siteSettings?.linkedInUrl}
					clientList={infoPage?.clientList}
					pastList={infoPage?.pastList}
					introContent={infoPage?.introContent}
					email={siteSettings?.email}
				/>
				<ProjectsModal
					isActive={projectsModalIsActive}
					data={projects}
				/>
			</ReactLenis>
		</PageWrapper>
	);
};

export async function getStaticProps() {
	const siteSettings = await client.fetch(siteSettingsQueryString);
	const data = await client.fetch(homePageQueryString);
	const projects = await client.fetch(projectsQueryString);
	const infoPage = await client.fetch(infoPageQueryString);

	return {
		props: {
			siteSettings,
			data,
			projects,
			infoPage
		}
	};
}

export default Page;
