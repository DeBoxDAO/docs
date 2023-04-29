export const SITE = {
	title: 'OPENAPI Docs',
	description: 'DeBoxDAO OPENAPI docs.',
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

export const GITHUB_EDIT_URL = `https://github.com/DeBoxDAO/openapi-docs/tree/main`;

export const COMMUNITY_INVITE_URL = `https://debox.space/dao/XxARAjJH`;

export const OFFICIAL_WEBSITE_URL = `https://debox.pro`

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'openapi-docs',
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
		"Open API": [
			{ text: 'API One Pager', link: 'en/openapi/api-one-pager' },
			{ text: 'SDK One Pager', link: 'en/openapi/sdk-one-pager' },
			{ text: 'Mini One Pager', link: 'en/openapi/mini-one-pager' }
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
		"开发API": [
			{ text: 'API文档', link: 'zh-cn/openapi/api-one-pager' },
			{ text: 'SDK文档', link: 'zh-cn/openapi/sdk-one-pager' },
			{ text: '小程序接入文档', link: 'zh-cn/openapi/mini-one-pager' }
		]
	}
};
