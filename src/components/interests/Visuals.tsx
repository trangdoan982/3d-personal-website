import Gallery, { GalleryItem } from "../Gallery";

// Sample gallery data
const galleryData: GalleryItem[] = [
	{
		id: 6,
		title: "THE HAT THAT EATS EVERYTHING (stop motion)",
		imageUrl: "https://i.imgur.com/zECU9rp.png",
		href: "https://www.instagram.com/p/C3V9zRnBsLH/",
	},
	{
		id: 7,
		title: "DANCE CHOREOGRAPHY (in progress)",
		imageUrl: "https://i.imgur.com/I4Lnr4J.png",
		href: "https://trangdoan.substack.com/i/142301985/more-dance-choreography",
	},
	{
		id: 1,
		title: "MURAL",
		imageUrl: "https://i.imgur.com/bt1ney6.jpeg",
		href: "https://trangdoan.substack.com/i/136934132/just-the-door-mural",
	},
	{
		id: 2,
		title: "HALF SALMON SKIN, HALF SALMON SKINNED (clay work)",
		imageUrl:
			"https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe7659a25-9f3e-4140-8c01-a4705fd2542f_2000x2667.png",
		href: "https://trangdoan.substack.com/i/141051799/painting-my-fish",
	},
	{
		id: 3,
		title: "FOR PHUONG (comic)",
		imageUrl:
			"https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4c504b2f-031f-41aa-83be-fc7762fc6579_905x1280.jpeg",
		href: "https://trangdoan.substack.com/i/134800389/comic-day",
	},
	{
		id: 4,
		title: "SLOWER",
		imageUrl:
			"https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F23c4cda0-f60d-4188-a967-caac87ccf044_600x403.gif",
		href: "https://trangdoan.substack.com/i/134800389/day",
	},
	{
		id: 5,
		title: "ILLUSTRATION FOR THE LOTUS POEM BY Bi Zixuan",
		imageUrl:
			"https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdcefb705-97cc-488e-8a6b-123579c69b71_2000x2000.jpeg",
		href: "https://trangdoan.substack.com/i/136027846/day-comic",
	},
	{
		id: 6,
		title: "COCKROACH HUNTER DOCUMENTARY (Produce assistant with Rice Production)",
		imageUrl: "https://i.imgur.com/hVmckxq.png",
		href: "https://www.facebook.com/watch/?v=340052270329828",
	},
	{
		id: 7,
		title: "THE LOTTERY SINGER DOCUMENTARY (Produce assistant with Rice Production)",
		imageUrl: "https://i.imgur.com/A17naHH.png",
		href: "https://www.youtube.com/watch?v=34QymJyq1OM&t=14s&ab_channel=RICE",
	},
];

interface VisualsProps {
	onClose: () => void;
}
const Visuals: React.FC<VisualsProps> = ({ onClose }) => {
	const intro = <div></div>;
	return (
		<Gallery onClose={onClose} galleryData={galleryData} intro={intro} />
	);
};

export default Visuals;
