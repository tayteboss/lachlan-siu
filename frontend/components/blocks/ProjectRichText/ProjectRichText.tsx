import { PortableText } from '@portabletext/react';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

type Props = {
	content: [];
};

const ProjectRichTextWrapper = styled.div`
	padding: ${pxToRem(36)} 0;
`;

const Inner = styled.div`
	text-align: center;
	max-width: ${pxToRem(720)};
	margin: 0 auto;
`;

const ProjectRichText = (props: Props) => {
	const { content } = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
		rootMargin: '-50px'
	});

	return (
		<ProjectRichTextWrapper
			ref={ref}
			className={`view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
		>
			<Inner className="rich-text">
				<PortableText value={content} />
			</Inner>
		</ProjectRichTextWrapper>
	);
};

export default ProjectRichText;
