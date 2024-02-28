export type NavItem = {
	label: string;
	link?: string;
	children?: NavItem[];
}

export const footerNavItems1: NavItem[] = [
	{
		label:"Research",
		children: [
			{
				label: "Overview",
				link: '#'
			},
			{
				label: "Index",
				link: '#'
			},
			{
				label: "GPT-4",
				link: '#'
			},
			{
				label: "DAL.E 3",
				link: '#'
			},
		]
	},
]

export const footerNavItems2: NavItem[] = [
	{
		label:"API",
		link: "#",
		children: [
			{
				label: "Overview",
				link: '#'
			},
			{
				label: "Pricing",
				link: '#'
			},
			{
				label: "Docs",
				link: '#'
			},
		]
	},
]

export const footerNavItems3: NavItem[] = [
	{
		label:"ChatGPT",
		link: "#",
		children: [
			{
				label: "Overview",
				link: '#'
			},
			{
				label: "Team",
				link: '#'
			},
			{
				label: "Enterprise",
				link: '#'
			},
			{
				label: "Pricing",
				link: '#'
			},
			{
				label: "Try ChatGPT",
				link: '#'
			},
		]
	},
]

export const footerNavItems4: NavItem[] = [
	
	{
		label:"Company",
		link: "#",
		children: [
			{
				label: "About",
				link: '#'
			},
			{
				label: "Blog",
				link: '#'
			},
			{
				label: "Careers",
				link: '#'
			},
			{
				label: "Residency",
				link: '#'
			},
			{
				label: "Charter",
				link: '#'
			},
			{
				label: "Security",
				link: '#'
			},
			{
				label: "Customer stories",
				link: '#'
			},
		]
	},
]