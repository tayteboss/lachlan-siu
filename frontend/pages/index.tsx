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
import { useEffect, useRef, useState } from 'react';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import MobileMenu from '../components/elements/MobileMenu';
import throttle from 'lodash.throttle';
import useViewportWidth from '../hooks/useViewportWidth';

type Props = {
	data: HomePageType;
	siteSettings: SiteSettingsType;
	projects: ProjectType[];
	pageTransitionVariants: TransitionsType;
	infoPage: InfoPageType;
	setAppCursorRefresh: (refresh: number) => void;
	appCursorRefresh: number;
};

const PageWrapper = styled(motion.div)``;

const Page = (props: Props) => {
	const {
		data,
		siteSettings,
		projects,
		infoPage,
		pageTransitionVariants,
		setAppCursorRefresh,
		appCursorRefresh
	} = props;

	const [projectsModalIsActive, setProjectsModalIsActive] = useState(false);
	const [infoModalIsActive, setInfoModalIsActive] = useState(false);
	const [activeProject, setActiveProject] = useState<boolean | number>(false);
	const [isHeaderActive, setHeaderIsActive] = useState(true);
	const [scrollToProject, setScrollToProject] = useState(0);

	const prevScrollPosRef = useRef(0);
	const viewportWidth = useViewportWidth();

	const handleScroll = () => {
		const currentScrollPos = window.pageYOffset;

		if (currentScrollPos < 30) {
			setHeaderIsActive(true);
			return;
		}

		const isScrollingDown = currentScrollPos > prevScrollPosRef.current;

		setHeaderIsActive(!isScrollingDown);
		prevScrollPosRef.current = currentScrollPos;
	};

	useEffect(() => {
		const throttledHandleScroll = throttle(handleScroll, 100);
		window.addEventListener('scroll', throttledHandleScroll);

		return () => {
			window.removeEventListener('scroll', throttledHandleScroll);
		};
	}, []);

	const lenis = useLenis(({ scroll }) => {});

	useEffect(() => {
		if (projectsModalIsActive || infoModalIsActive) {
			lenis?.stop();
		} else {
			lenis?.start();
		}

		setAppCursorRefresh(appCursorRefresh + 1);

		const timer = setTimeout(() => {
			setAppCursorRefresh(appCursorRefresh + 1);
		}, 250);

		return () => clearTimeout(timer);
	}, [lenis, projectsModalIsActive, infoModalIsActive]);

	useEffect(() => {
		if (activeProject) {
			setHeaderIsActive(false);
		}

		setAppCursorRefresh(appCursorRefresh + 1);

		const timer = setTimeout(() => {
			setAppCursorRefresh(appCursorRefresh + 1);
		}, 500);

		return () => clearTimeout(timer);
	}, [activeProject]);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (viewportWidth === 'mobile') {
				lenis?.scrollTo(`#project-${activeProject}-content`);
			} else {
				lenis?.scrollTo(`#project-${activeProject}`);
			}
		}, 250);

		return () => clearTimeout(timer);
	}, [scrollToProject]);

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
				isActive={isHeaderActive}
			/>
			{/* <MobileMenu
				projectsModalIsActive={projectsModalIsActive}
				infoModalIsActive={infoModalIsActive}
				setProjectsModalIsActive={setProjectsModalIsActive}
				setInfoModalIsActive={setInfoModalIsActive}
			/> */}
			<ReactLenis root>
				<HomeIntro data={data?.introContent} />
				<ProjectsList
					data={projects}
					activeProject={activeProject}
					setActiveProject={setActiveProject}
				/>
				<Footer
					email={siteSettings?.email}
					acknowledgementOfCountry={
						siteSettings?.acknowledgementOfCountry
					}
				/>
				<InfoModal
					isActive={infoModalIsActive}
					instagramUrl={siteSettings?.instagramUrl}
					linkedInUrl={siteSettings?.linkedInUrl}
					clientList={infoPage?.clientList}
					pastList={infoPage?.pastList}
					introContent={data?.introContent}
					email={siteSettings?.email}
				/>
				<ProjectsModal
					isActive={projectsModalIsActive}
					data={projects}
					activeProject={activeProject}
					scrollToProject={scrollToProject}
					setActiveProject={setActiveProject}
					setProjectsModalIsActive={setProjectsModalIsActive}
					setScrollToProject={setScrollToProject}
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
