import styled from 'styled-components';
import { ClientType } from '../../../shared/types/types';

type Props = {
	list: ClientType[];
	title: string;
};

const ClientListWrapper = styled.div`
	grid-column: span 6;
`;

const Title = styled.h3``;

const ListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const LinkTag = styled.a`
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

const ListItem = styled.p``;

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
