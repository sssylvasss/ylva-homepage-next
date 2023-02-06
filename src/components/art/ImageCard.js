import React from 'react';
import { any } from 'prop-types';
import MediaQuery from 'react-responsive';

import {
	CardDivMain,
	CollageImage,
	TitleH2,
	TextP,
	TextDiv,
	TextDiv1,
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

				<MediaQuery maxWidth={991}>
					<TextDiv1>
						<TitleH2>{collage.collageTitle},</TitleH2>
						{collage.size ? <TextP>{collage.size}cm.</TextP> : null}
					</TextDiv1>
				</MediaQuery>
				<MediaQuery minWidth={992}>
					<TextDiv>
						<TitleH2>{collage.collageTitle}</TitleH2>
						{collage.size ? <TextP>{collage.size}cm.</TextP> : null}

						{collage.serie ? (
							<>
								<TextP>
									From the serie "{collage.serie}", {collage.year}
								</TextP>
							</>
						) : (
							<TextP>{collage.year}</TextP>
						)}
					</TextDiv>
				</MediaQuery>
			</CardDivMain>
		</>
	);
};

ImageCard.propTypes = {
	collage: any,
	openModal: any,
};
