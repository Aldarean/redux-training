export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS';
export const getCities = () => {
	return {
		type: FETCH_CITIES_SUCCESS,
		payload: {
			cities: [
				{
					id: 1,
					cityName: 'London',
					summary: `Looking to break into London's burgeoning tech scene but not sure where to start, what to read or what events to attend? In this thought-provoking and inspiring session, we'll give you the inside scoop on how to make your name in the exciting startup world in London. We'll highlight the key events to attend, tell you all about the "who's who", explain the role of venture capitalists and accelerators and fill you in on key players such as Tech City UK and Google Campus.`,
					image: 'london.png'
				},
				{
					id: 2,
					cityName: 'Shenzhen',
					summary: `If you still think China is only about manufacturing cheap stuff and scaling production, you are terribly wrong. In recent years, a handful of innovative Chinese tech companies grew to a massive scale with digital products and crafted user experience. We all know giants like Alibaba, Tencent or Baidu, but PionierGarage decided to go on a mission to meet young Chinese entrepreneurs, explore the startup environment and find the next unicorn.`,
					image: 'shenzhen.png'
				},
				{
					id: 3,
					cityName: 'Sacramento',
					summary: `Sacramento, California. For the longest time, those from the Bay Area identified it as a stop on the way to Lake Tahoe. And millions of fifth graders, meanwhile, failed to identify it as the capital of California. However over the last decade the once semi-quiet government city has transformed itself, spurred by an economic renaissance and the no longer far-fetched conviction of Sacramento’s leaders that their city is an emerging tech hub.`,
					image: 'sacramento.png'
				},
				{
					id: 4,
					cityName: 'Mumbai',
					summary: `What’s the startup scene like in Mumbai, India? How much funding is available? What about coworking spaces and startup events? Here’s Teleport’s overview of the startup scene inMumbai, India, including details on startup funding, coworking spaces, startup events and meetups.`,
					image: 'sacramento.png'
				},
				{
					id: 5,
					cityName: 'Amsterdam',
					summary: `There’s a reason tech talent chooses Amsterdam. The city’s continued acumen for innovation, its world-class digital infrastructure and its roster of cutting-edge companies and events make it a haven for any tech professional.`,
					image: 'amsterdam.png'
				}
			]
		}
	};
};
