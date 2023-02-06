import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
	return (
		<Main>
			<Wrapper>
				<TextContainer>
					<Text>Contact</Text>
					<Text>Ylva Landoff Lindberg</Text>
					<Text>+46 704 92 44 75</Text>
					<Text>mail@ylvalandofflindberg.com</Text>
				</TextContainer>
				<Nav>
					<Link>
						<Icon src='../assets/github_black.svg' alt='Github linked icon' />
					</Link>
					<Link>
						<Icon
							src='../assets/linkedin_black.svg'
							alt='Linkdin linked icon'
						/>
					</Link>
					<Link>
						<Icon src='../assets/email_black.svg' alt='Mail linked icon' />
					</Link>
				</Nav>
			</Wrapper>
			<BottomTextWrapper>
				<Text> Website Developed by Ylva Landoff Lindberg</Text>
			</BottomTextWrapper>
		</Main>
	);
};

const Link = styled.a``;

const Main = styled.div`
	border-top: solid 2px #fc4103;
	margin: 10px 20px 10px 20px;
	width: 100%;
	flex-direction: column;

	@media (min-width: 520px) {
		flex-direction: row;
	}
`;
const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	@media (min-width: 520px) {
		flex-direction: row;
	}
`;
const TextContainer = styled.div``;
const Nav = styled.nav`
    display: flex;
    justify-content: center;
    margin 20px;
`;
const Icon = styled.img`
	width: 50px;
	margin: 5px;
	opacity: 0.9;
`;
const BottomTextWrapper = styled.div`
    width: 100%;
    justify-content: center;
    text-align: center;
    margin 80px 0 0 0;
`;

const Text = styled.p`
	font-size: 20px;
	font-weight: 200;
`;
