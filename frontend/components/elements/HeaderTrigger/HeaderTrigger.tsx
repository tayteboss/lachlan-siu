import styled from 'styled-components';

type StyledProps = {
	$align: string;
	removeOnMobile?: boolean;
};

type Props = {
	children: React.ReactNode;
	handleClick: () => void;
	align: string;
};

const HeaderTriggerWrapper = styled.button<StyledProps>`
	flex: 1;
	text-align: ${(props) => props.$align};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: ${(props) => (props.removeOnMobile ? 'none' : 'block')};
	}
`;

const HeaderTrigger = (props: Props) => {
	const { children, handleClick, align } = props;

	return (
		<HeaderTriggerWrapper
			onClick={() => handleClick()}
			$align={align}
			removeOnMobile={align === 'left'}
		>
			{children}
		</HeaderTriggerWrapper>
	);
};

export default HeaderTrigger;
