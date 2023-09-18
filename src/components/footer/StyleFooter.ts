import styled from 'styled-components';

export const Main = styled.div`
	border-top: solid 2px #fc4103;
	margin: 10px 20px 10px 20px;
	width: 100%;
	flex-direction: column;

	@media (min-width: 520px) {
		flex-direction: row;
	}
`;
export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	@media (min-width: 520px) {
		flex-direction: row;
	}
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    margin 20px;
`;
export const Icon = styled.img`
	width: 50px;
	margin: 5px;
	opacity: 0.9;
`;
export const BottomTextWrapper = styled.div`
    width: 100%;
    justify-content: center;
    text-align: center;
    margin 80px 0 0 0;
`;

export const Text = styled.p`
	font-size: 20px;
	font-weight: 200;
`;
