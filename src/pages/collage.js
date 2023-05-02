import React, { useState, useEffect, Fragment } from 'react';
import { useContentful } from '../useContentful';
import { ImageCard } from '../components/art/ImageCard';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import {
	Main,
	ImageSectionDiv,
	TitleH1,
	ImageSectionInnerDiv,
	ModalImage,
	ArrowForward,
	ArrowBack,
	ModalDiv,
	LaptopDiv,
	TableDiv,
} from '../components/art/StylingArt';
import { Modal } from '@/components/modal/Modal';

export const Collage = () => {
	const [collages, setCollages] = useState([]);
	const { getCollage } = useContentful();
	const [showModal, setShowModal] = useState(false);
	const [activeCollage, setActiveCollage] = useState();

	useEffect(() => {
		getCollage().then((response) => {
			setCollages(response?.sort((a, b) => a.collageId - b.collageId));
		});
	}, []);

	// acc= acumilera(ansamla). reduce kan ha upp till 4 parametrar, index är nr 3
	const newImageArray = collages
		.sort((a, b) => b.collageId - a.collageId)
		.reduce((acc, curr) => {
			if (acc.some(({ serie }) => serie === curr.serie)) {
				acc.map((accElement) => {
					if (accElement.serie === curr.serie) {
						accElement.collages.push(curr);
					}
				});
				return acc;
			} else {
				const obj = {
					serie: curr.serie ? curr.serie : curr.year,
					year: curr.serie ? curr.year : null,
					collages: [curr],
				};
				return [...acc, obj];
			}
			// initial value nedan
		}, []);

	const openModal = (id) => {
		const activeCollageIndex = collages.findIndex((co) => co.collageId === id);
		setActiveCollage(collages[activeCollageIndex]);
		console.log('id', id);
		setShowModal(true);
	};

	const imageSlide = (next) => {
		const imageIndex = collages.findIndex(
			(co) => co.collageId === activeCollage.collageId
		);
		if (next) {
			if (imageIndex === collages.length - 1) {
				setActiveCollage(collages[0]);
			} else {
				setActiveCollage(collages[imageIndex + 1]);
			}
		} else {
			if (imageIndex === 0) {
				setActiveCollage(collages[collages.length - 1]);
			} else {
				setActiveCollage(collages[imageIndex - 1]);
			}
		}
	};

	return (
		<Main>
			<LaptopDiv>
				<ImageList variant='masonry' cols={3} gap={8}>
					{collages.map((collage, index) => (
						<ImageListItem key={index}>
							<ImageCard key={index} collage={collage} openModal={openModal} />
						</ImageListItem>
					))}
				</ImageList>
			</LaptopDiv>
			<TableDiv>
				{newImageArray.map((imageSerie) => (
					<Fragment key={imageSerie.serie}>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<TitleH1>
								{imageSerie.serie}, <span> </span>
								{imageSerie.year}
							</TitleH1>
						</div>
						<ImageSectionDiv>
							<ImageSectionInnerDiv>
								{imageSerie.collages?.map((collage, index) => (
									<>
										<ImageCard
											key={index}
											collage={collage}
											openModal={openModal}
										/>
									</>
								))}
							</ImageSectionInnerDiv>
						</ImageSectionDiv>
					</Fragment>
				))}
			</TableDiv>

			{showModal ? (
				<Modal setShowModal={setShowModal} setActiveCollage={setActiveCollage}>
					<ModalDiv>
						<ArrowBack onClick={() => imageSlide(false)} />

						<ModalImage
							alt='collage'
							src={activeCollage?.collageImage?.file.url}
						/>

						<ArrowForward onClick={() => imageSlide(true)} />
					</ModalDiv>
				</Modal>
			) : (
				<></>
			)}
		</Main>
	);
};

export default Collage;
