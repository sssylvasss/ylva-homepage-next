import React from 'react';
import { any } from 'prop-types';

import {
	CardDivMain,
	CollageImage,
	TitleH2,
	TextP,
	TextDiv,
	TextDiv1,
	TableDiv,
	LaptopDiv,
} from './StylingArt';

export const ImageCard = ({ collage, openModal }) => {
	return (
		<>
			<CardDivMain
				key={collage?.collageId}
				onClick={() => openModal(collage?.collageId)}
			>
				<CollageImage
					alt={collage.collageTitle}
					src={collage.collageImage?.file.url}
				/>
				<TableDiv>
					<TextDiv1>
						<TitleH2>{collage.collageTitle},</TitleH2>
						{collage.size ? <TextP>{collage.size}cm.</TextP> : null}
					</TextDiv1>
				</TableDiv>
				<LaptopDiv>
					<TextDiv>
						<TitleH2>{collage.collageTitle}</TitleH2>
						{collage.size ? <TextP>{collage.size}cm.</TextP> : null}

						{collage.serie ? (
							<>
								<TextP>
									From the serie {collage.serie}, {collage.year}
								</TextP>
							</>
						) : (
							<TextP>{collage.year}</TextP>
						)}
					</TextDiv>
				</LaptopDiv>
			</CardDivMain>
		</>
	);
};

ImageCard.propTypes = {
	collage: any,
	openModal: any,
};
