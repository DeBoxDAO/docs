# DeBoxDAO 文档

## 🧞 命令

所有命令都从项目的根目录运行，从终端：

| 命令 | 行动 |
| :-------------------- | :-------------------------------------------- |
| `npm 安装` | 安装依赖项 |
| `npm run dev` | 在 localhost:3000 启动本地开发服务器 |
| `npm 运行构建` | 将您的生产站点构建到 `./dist/` |
| `npm 运行预览` | 在部署之前在本地预览您的构建 |
| `npm run astro ...` | 运行 CLI 命令，如 astro add、astro check |
| `npm run astro --help` | 使用 Astro CLI 获得帮助 |

要将您的站点部署到生产环境，请查看我们的[部署 Astro 网站](https://docs.astro.build/guides/deploy) 指南。

## 👀 想了解更多？

请随时查看 [我们的文档](https://docs.astro.build) 或跳转到我们的 [Discord 服务器](https://astro.build/chat)。

## 页面元数据

Astro 在 Markdown 页面中使用 frontmatter 来选择布局并将属性传递给这些布局。 如果您使用默认布局，您可以通过多种不同方式自定义页面以优化 SEO 和其他方面。 例如，您可以使用 `title` 和 `description` 属性来设置文档标题、元标题、元描述和 Open Graph 描述。

```markdown
---
title: Example title
description: Really cool docs example that uses Astro
---
```

请注意顶级的“en”键：这是多语言支持所必需的。 您可以将其更改为您喜欢的任何语言，或随时添加新语言。 下面有更多详细信息。

### 多语言支持

Astro 文档模板开箱即用地支持多种语言。 默认主题仅显示“en”文档，但您可以通过向项目添加第二种语言来启用多语言支持功能。

要向项目添加新语言，您需要扩展当前的 `src/content/docs/[lang]/...` 布局：

```diff
 📂 src/content/docs
  ┣ 📂 zh-cn
  ┃ ┣ 📜 page-1.md
  ┃ ┣ 📜 page-2.md
  ┃ ┣ 📜 page-3.astro
+ ┣ 📂 en
+ ┃ ┣ 📜 page-1.md
+ ┃ ┣ 📜 page-2.md
+ ┃ ┣ 📜 page-3.astro
```

最后一步：您需要在边栏中添加一个新条目，以创建该语言的目录。 虽然复制每个页面对每个人来说可能听起来并不理想，但这种额外的控制允许您为每种语言创建完全自定义的内容。

> 确保侧边栏的“链接”值指向正确的语言！

```diff
// src/config.ts
export const SIDEBAR = {
   zh-cn: [
     { text: 'Section Header', header: true, },
     { text: 'Introduction', link: 'en/introduction' },
     // ...
   ],
+ en: [
+ { text: 'Encabezado de sección', header: true, },
+ { text: 'Introducción', link: 'es/introduction' },
+ // ...
+ ],
};

// ...
```
