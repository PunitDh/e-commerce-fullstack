import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
	height: 30px;
	background-color: teal;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bolder;
`

function Accouncement() {
	return (
		<Container>
			Super Deal! Free Shipping on Orders Over $50
		</Container>
	)
}

export default Accouncement;