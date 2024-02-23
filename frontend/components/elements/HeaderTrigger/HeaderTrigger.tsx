import styled from 'styled-components';

type StyledProps = {
	$align: string;
};

type Props = {
	children: React.ReactNode;
	handleClick: () => void;
	align: string;
};

const HeaderTriggerWrapper = styled.button<StyledProps>`
	flex: 1;
	text-align: ${(props) => props.$align};
`;

const HeaderTrigger = (props: Props) => {
	const { children, handleClick, align } = props;

	return (
		<HeaderTriggerWrapper onClick={() => handleClick()} $align={align}>
			{children}
		</HeaderTriggerWrapper>
	);
};

export default HeaderTrigger;
