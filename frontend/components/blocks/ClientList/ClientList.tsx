import styled from 'styled-components';
import { ClientType } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	list: ClientType[];
	title: string;
};

const ClientListWrapper = styled.div`
	grid-column: span 6;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		&:first-child {
			margin-bottom: ${pxToRem(32)};
		}
	}
`;

const Title = styled.h3`
	font-family: var(--font-medium) !important;
	letter-spacing: 0.02em;
`;

const ListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const LinkTag = styled.a`
	text-decoration: none;
	font-family: var(--font-medium) !important;
	letter-spacing: 0.02em;

	&:hover {
		text-decoration: underline;
	}
`;

const ListItem = styled.p`
	font-family: var(--font-medium) !important;
	letter-spacing: 0.02em;
`;

const ClientList = (props: Props) => {
	const { list, title } = props;
	const hasList = list.length > 0;

	return (
		<ClientListWrapper>
			<Title className="type-h1">{title}</Title>
			<ListWrapper>
				{hasList &&
					list.map((item, i) =>
						item.url ? (
							<LinkTag
								className="type-h1"
								href={item?.url}
								target="_blank"
								key={i}
							>
								{item?.title || ''}
							</LinkTag>
						) : (
							<ListItem className="type-h1" key={i}>
								{item.title}
							</ListItem>
						)
					)}
			</ListWrapper>
		</ClientListWrapper>
	);
};

export default ClientList;
