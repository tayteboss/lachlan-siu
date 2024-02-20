import styled from 'styled-components';

type Props = {
	scope?: string;
};

const ScopeIntroContentWrapper = styled.div``;

const ScopeIntroContent = (props: Props) => {
	const { scope } = props;

	return (
		<ScopeIntroContentWrapper>
			Scope: {scope || ''}
		</ScopeIntroContentWrapper>
	);
};

export default ScopeIntroContent;
