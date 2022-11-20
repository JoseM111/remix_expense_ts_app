import type { LinksFunction, MetaFunction } from '@remix-run/node';
import type { ReactElement } from 'react';
// =========================================================

// link to the dynamic route for notesId
export const links: LinksFunction = () => {
	return [{ rel: 'stylesheet', href: '' }];
};

export const meta: MetaFunction = () => ({
	title: 'PLACE_HOLDER',
	description: 'PLACE_HOLDER'
});
// =========================================================

/// ==== <> styles <> ====
const customStyles = {
	backgroundColor: "#2f323a",
	marginTop: "5rem",
	padding: "0",
	width: "100%",
	borderRadius: "15px",
	
	h1: {
		padding: "55px",
		fontFamily: "Liberation Mono for Powerline",
		color: "mediumpurple",
		fontSize: "2.2rem",
		display: "grid",
		placeItems: "center",
	},
}

function ExpensesRawPage(): ReactElement {
	return (
		<main style={ customStyles }>
      <h1 style={ customStyles.h1 }>
        ExpensesRawPage
      </h1>
    </main>
	);
}

export default ExpensesRawPage;
// ########################################################
