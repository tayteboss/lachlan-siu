import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

type StyledProps = {
	$isActive: boolean | undefined;
};

type Props = {
	isActive: boolean | undefined;
	pageBuilderIsActive: boolean | undefined;
	setPageBuilderIsActive: (isActive: boolean) => void;
};

const PageBuilderTriggerWrapper = styled.button`
	position: relative;
	width: ${pxToRem(72)};
	height: ${pxToRem(72)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: ${pxToRem(30)};
		height: ${pxToRem(30)};
	}
`;

const Base = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	height: 100%;
	width: 1px;
	background: var(--colour-black);
	transform: translate(-50%, -50%);
`;

const Left = styled.div<StyledProps>`
	position: absolute;
	top: ${(props) => (props.$isActive ? '100%' : '50%')};
	right: 50%;
	height: 1px;
	width: 50%;
	background: var(--colour-black);
	transform-origin: right;
	transform: ${(props) => (props.$isActive ? 'rotate(45deg)' : 'rotate(0)')};

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const Right = styled.div<StyledProps>`
	position: absolute;
	top: ${(props) => (props.$isActive ? '100%' : '50%')};
	left: 50%;
	height: 1px;
	width: 50%;
	background: var(--colour-black);
	transform-origin: left;
	transform: ${(props) => (props.$isActive ? 'rotate(-45deg)' : 'rotate(0)')};

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const PageBuilderTrigger = (props: Props) => {
	const { isActive, pageBuilderIsActive, setPageBuilderIsActive } = props;

	return (
		<PageBuilderTriggerWrapper
			onClick={() => setPageBuilderIsActive(!isActive)}
			className={pageBuilderIsActive ? 'text-link-close' : 'text-link'}
		>
			<Base />
			<Left $isActive={isActive} />
			<Right $isActive={isActive} />
		</PageBuilderTriggerWrapper>
	);
};

export default PageBuilderTrigger;
