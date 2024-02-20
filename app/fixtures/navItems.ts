export type NavItem = {
	label: string;
	link?: string;
	children?: NavItem[];
}

export const navItems: NavItem[] = [
	{
		label:"Research",
		link: "#",
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
	{
		label:"Safety",
		link: "#"
	},
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