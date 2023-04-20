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
		'Intro': [
			{ text: 'Introduction', link: 'en/intro/introduction' }
		],
		"API Docs": [
			{ text: 'API One Pager', link: 'en/api/api-one-pager' }
		],
		"SDK Docs": [
			{ text: 'SDK One Pager', link: 'en/sdk/sdk-one-pager' }
		],
		"Mini Program": [
			{ text: 'Mini One Pager', link: 'en/mini/mini-one-pager' }
		]
	},
	'zh-cn': {
		'概述': [
			{ text: '概述', link: 'zh-cn/intro/introduction' },
		],
		"API文档": [
			{ text: 'API文档', link: 'zh-cn/api/api-one-pager' }
		],
		"SDK文档": [
			{ text: 'SDK文档', link: 'zh-cn/sdk/sdk-one-pager' }
		],
		"小程序": [
			{ text: '小程序接入文档', link: 'zh-cn/mini/mini-one-pager' },
		]
	}
};
