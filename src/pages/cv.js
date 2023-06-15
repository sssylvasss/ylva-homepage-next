import React, { useState, useEffect, Fragment } from 'react';
import { Main, CvP, Cvh2 } from '../components/StyleCv';
import { useContentful } from '../useContentful';

export const Cv = () => {
	const [cv, setCv] = useState([]);
	const { getCv } = useContentful();

	useEffect(() => {
		getCv().then((response) => {
			setCv(response);
		});
	}, []);

	return (
		<Main>
			<CvP>Contact:</CvP>
			<CvP>+46 704 92 44 75</CvP>

			<a href='mailto:mail@ylvalandofflindberg.com'>
				mail@ylvalandofflindberg.com
			</a>

			{cv?.map((text, i) => (
				<Fragment key={i}>
					<Cvh2>{text.publicCollections}</Cvh2>
					<CvP>{text.publicCollectionsText}</CvP>
					<Cvh2>{text.soloExhibitions}</Cvh2>
					<CvP>{text.soloExhibitionsText}</CvP>
					<Cvh2>{text.groupExhibitions}</Cvh2>
					<CvP>{text.groupExhibitionsText}</CvP>
					<Cvh2>{text.screeningsAndFilmFestivals}</Cvh2>
					<CvP>{text.screeningsAndFilmFestivalsText}</CvP>
					<Cvh2>{text.grants}</Cvh2>
					<CvP>{text.grantsText}</CvP>
					<Cvh2>{text.publications}</Cvh2>
					<CvP>{text.publicationsText}</CvP>
					<Cvh2>{text.educations}</Cvh2>
					<CvP>{text.educationsText}</CvP>
				</Fragment>
			))}
		</Main>
	);
};

export default Cv;
