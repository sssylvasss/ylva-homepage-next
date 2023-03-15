import React from 'react';
import { any } from 'prop-types';
import { NavBar } from './header/NavBar';
import { Footer } from './footer/Footer';
import styled from 'styled-components';

const Main = styled.div`
	width: 90%;
	max-width: 2000px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 0 auto;
	@media (min-width: 820px) {
	}
`;

export default function Layout({ children }) {
	return (
		<Main>
			<NavBar />
			<main>{children}</main>
			<Footer />
		</Main>
	);
}

Layout.propTypes = {
	children: any,
};
