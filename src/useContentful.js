import { createClient } from 'contentful';

export const useContentful = () => {
	// const client = createClient({
	//   space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
	//   accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_API,
	//   host: process.env.NEXT_PUBLIC_CONTENTFUL_URL,
	// });
	const client = createClient({
		space: process.env.NEXT_CONTENTFUL_SPACE_ID,
		accessToken: process.env.NEXT_CONTENTFUL_DELIVERY_TOKEN,
	});

	const getCollage = async () => {
		try {
			const entries = await client.getEntries({
				content_type: 'spiritOfVietnam',
				select: 'fields',
			});
			const filteredEntries = entries.items.map((item) => {
				const collageImage = item.fields.image.fields;

				return {
					...item.fields,
					collageImage,
				};
			});
			return filteredEntries;
		} catch (err) {
			console.log(`error fetching data": ${err}`);
		}
	};

	const getCv = async () => {
		try {
			const entries = await client.getEntries({
				content_type: 'cv',
				select: 'fields',
			});
			const filteredEntries = entries.items.map((item) => {
				return {
					...item.fields,
				};
			});
			return filteredEntries;
		} catch (err) {
			console.log(`error fetching data": ${err}`);
		}
	};
	const getVideo = async () => {
		try {
			const entries = await client.getEntries({
				content_type: 'video',
				select: 'fields',
			});
			const filteredEntries = entries.items.map((item) => {
				const videoImage = item.fields.videoImage.fields;
				return {
					...item.fields,
					videoImage,
				};
			});
			return filteredEntries;
		} catch (err) {
			console.log(`error fetching data": ${err}`);
		}
	};

	return { getCollage, getCv, getVideo };
};
