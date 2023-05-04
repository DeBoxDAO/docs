export const SITE = {
	title: 'DeBoxDAO Docs',
	description: 'DeBoxDAO docs.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://avatars.githubusercontent.com/u/126640407?s=200&v=4',
		alt:
			'DeBoxDAO logo,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'DeBoxDAO',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
	简体中文: 'zh-cn',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/DeBoxDAO/docs/tree/main`;

export const COMMUNITY_INVITE_URL = `https://debox.space/dao/XxARAjJH`;

export const OFFICIAL_WEBSITE_URL = `https://deboxdao.xyz`

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'docs',
	appId: '',
	apiKey: '',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;

export const SIDEBAR: Sidebar = {
	en: {
		'Nav': [
			{ text: 'Introduction', link: 'en/intro/introduction' }
		],
		"Content EDU": [
			{ text: 'Getting Started Web3 Tutorial', link: 'en/edu/web3-tutorial' },
			{ text: 'DeBox Tutorial', link: 'en/edu/debox-tutorial' },
			{ text: 'Web3 community operation', link: 'en/edu/community-operation' },
			{ text: 'Governance tools', link: 'en/edu/governance-tools' }
		],
		"DeBox Open API": [
			{ text: 'API One Pager', link: 'en/debox-open-api/api-one-pager' },
			{ text: 'Golang Open SDK', link: 'en/debox-open-api/golang-open-sdk' },
			{ text: 'Nodejs Open SDK', link: 'en/debox-open-api/nodejs-open-sdk' },
			{ text: 'Rust Open SDK', link: 'en/debox-open-api/rust-open-sdk' },
			{ text: 'Mini One Pager', link: 'en/debox-open-api/mini-one-pager' }
		]
	},
	'zh-cn': {
		'导航': [
			{ text: '导航', link: 'zh-cn/intro/introduction' },
		],
		"内容学院": [
			{ text: '小白入门Web3系列教程', link: 'zh-cn/edu/web3-tutorial' },
			{ text: '新手玩转DeBox教程', link: 'zh-cn/edu/debox-tutorial' },
			{ text: 'Web3社区运营内容', link: 'zh-cn/edu/community-operation' },
			{ text: '治理工具', link: 'zh-cn/edu/governance-tools' }
		],
		"DeBox开放API": [
			{ text: 'API文档', link: 'zh-cn/debox-open-api/api-one-pager' },
			{ text: 'Golang开放SDK', link: 'zh-cn/debox-open-api/golang-open-sdk' },
			{ text: 'Nodejs开放SDK', link: 'zh-cn/debox-open-api/nodejs-open-sdk' },
			{ text: 'Rust开放SDK', link: 'zh-cn/debox-open-api/rust-open-sdk' },
			{ text: '小程序接入文档', link: 'zh-cn/debox-open-api/mini-one-pager' }
		]
	}
};
