import styled from 'styled-components';

type Props = {
	studio?: string;
	link?: string;
};

const StudioIntroContentWrapper = styled.div``;

const Link = styled.a`
	text-decoration: none;

	&:hover {
		text-decoration: underline;
		color: var(--colour-black);
	}
`;

const StudioIntroContent = (props: Props) => {
	const { studio, link } = props;

	return (
		<StudioIntroContentWrapper>
			Studio:{' '}
			{link ? (
				<Link href={link} target="_blank">
					{studio || ''}
				</Link>
			) : (
				studio || ''
			)}
		</StudioIntroContentWrapper>
	);
};

export default StudioIntroContent;
