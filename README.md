# ShaneYu

> 🤖 **AI 协作开发** — 本主题由 AI 辅助完成全部开发工作，包括架构设计、模板编写、样式开发、国际化、构建配置等。旨在为 Halo 主题开发提供一份完整的 AI 协作实践参考。

一款为开发者打造的现代博客主题，关于专注与极致的分享空间。

## 功能特性

- 🌙 **深色/浅色主题切换** - 支持自动切换和手动切换，可设置默认配色方案
- 🎨 **主题背景个性化** - 支持图片/视频壁纸作为主题背景，可分别设置亮色/暗色模式壁纸
- 🪟 **毛玻璃效果** - 壁纸模式下全站元素添加半透明磨砂效果
- 📱 **响应式设计** - 完美适配大屏幕、中等屏幕和移动端
- 📊 **文章数据统计** - 标签页面支持数据统计图表
- 🔍 **搜索功能** - 支持独立搜索页面和快捷键搜索（Ctrl+K）
- 📤 **分享功能** - 支持微信、微博、QQ空间分享
- 🌐 **多语言支持** - 内置简体中文、繁体中文、English、Español 四种语言
- 🎯 **SEO 友好** - 语义化 HTML 结构，支持自定义标题和描述
- ⚡ **高性能** - 基于 Vite 构建，资源自动压缩和优化
- 🔐 **安全认证** - 支持 TOTP 两步验证登录
- 🎨 **自定义主色调** - 可自定义主题主色调，影响全站配色
- 📝 **社交链接** - 支持 GitHub、QQ、Email、微博、微信、知乎、CSDN、Gitee 等图标
- 🎭 **Iconify 图标** - 社交链接支持 Iconify 图标库，可自定义任意图标
- 📌 **侧边栏组件** - 博主展示、标签云、分类导航、近期更新、公众号二维码
- 📖 **阅读体验** - 文章详情页支持目录、阅读进度条、回到顶部
- 🏷️ **分类/标签** - 完善的分类和标签系统，支持数据统计
- 📅 **文章归档** - 按时间线展示文章归档

## 页面展示

主题包含以下精心设计的页面模板：

### 首页

- 最新文章列表展示
- 侧边栏组件（博主展示、标签云、分类导航、近期更新）
- 分页导航

### 文章详情页

- 文章封面图展示
- 文章元信息（作者、发布时间、分类、标签、字数统计、阅读时间）
- 文章目录（TOC）
- 阅读进度条
- 回到顶部按钮
- 上一篇/下一篇导航
- 文章分享功能

### 分类页面

- 分类列表展示
- 分类下文章列表
- 分类数据统计

### 标签页面

- 标签云展示
- 标签下文章列表
- 标签数据统计

### 归档页面

- 按时间线展示文章归档
- 年月分组展示

### 搜索页面

- 独立搜索页面（`/search`）
- 实时搜索文章
- 搜索结果分页
- 快捷键搜索（Ctrl+K）

### 登录页面

- 精美的登录界面
- 支持 TOTP 两步验证
- 社交登录集成
- 忘记密码入口

### 找回密码页面

- 邮箱找回密码流程
- 发送重置链接

### 独立页面

- 支持自定义独立页面（如关于、友链等）

### 错误页面

- 404 页面未找到
- 500 服务器错误
- 通用错误页面

## 安装

### 方式一：后台安装（推荐）

1. 下载主题包 `dist/halo-theme-ShaneYu.zip`
2. 登录 Halo 后台管理界面
3. 进入 **外观** -> **主题**
4. 点击 **安装主题** 按钮
5. 上传下载的主题包
6. 安装完成后点击 **启用** 按钮

### 方式二：直接上传

1. 将主题目录重命名为 `theme-ShaneYu`
2. 上传到 Halo 的 `themes/` 目录下
3. 在 Halo 后台启用主题

## 配置指南

主题设置位于 Halo 后台的 **外观** -> **主题** -> **设置** 中。

### 基础设置

| 设置项           | 说明                                                        | 默认值             |
| ---------------- | ----------------------------------------------------------- | ------------------ |
| Logo 图片        | 上传 Logo 图片，留空则显示默认代码图标                      | 空                 |
| Logo 文字        | 显示在 Logo 图片右侧的站点名称                              | 顾子鞍             |
| 站点标语         | 显示在 Logo 文字下方的小字标语                              | 源于禹州，面向世界 |
| 默认配色方案     | 跟随系统/浅色/暗色                                          | 跟随系统           |
| 主题主色调       | 设置全站的主题主色调                                        | #4A90E2            |
| 显示主题名称     | 在页脚底部显示主题名称                                      | 开启               |
| 页脚版权文字     | 显示在页脚底部的版权信息                                    | Shane Yu           |
| ICP 备案号       | 如：京ICP备XXXXXXXX号                                       | 空                 |
| 公安备案号       | 如：京公网安备XXXXXXXX号                                    | 空                 |
| 亮色模式背景壁纸 | 支持图片和视频格式（jpg/png/webp/mp4/webm/mov/avi/flv/3gp） | 空                 |
| 暗色模式背景壁纸 | 支持图片和视频格式                                          | 空                 |

### 社交链接

| 设置项       | 说明                                    | 默认值             |
| ------------ | --------------------------------------- | ------------------ |
| 博主昵称     | 博主昵称，用于侧边栏展示                | 顾子鞍             |
| 博主头像     | 显示在侧边栏的头像图片，建议 1:1 方形图 | 空                 |
| 博主简介     | 显示在侧边栏的一句话简介                | 源于禹州\|面向世界 |
| 社交链接列表 | 添加你的社交媒体链接                    | 空                 |

#### 社交链接配置

每个社交链接包含以下字段：

- **名称**：社交平台名称，如 GitHub、Twitter 等
- **链接**：完整的链接地址，Email 请填写邮箱地址
- **内置图标**：快速选择常见社交图标
  - GitHub
  - QQ
  - Email
  - 微博
  - 微信
  - 知乎
  - CSDN
  - Gitee
- **Iconify 图标**：从 Iconify 图标库输入图标名称（如 `mdi:github`、`ri:twitter-x-fill`），可在 [Iconify 图标集](https://icon-sets.iconify.design) 查找。优先级高于内置图标，留空则使用内置图标

### 侧边栏设置

| 设置项           | 说明                                                     | 默认值 |
| ---------------- | -------------------------------------------------------- | ------ |
| 显示侧边栏       | 在所有页面显示左侧侧边栏                                 | 开启   |
| 显示博主展示     | 在侧边栏顶部显示博主个人信息卡片                         | 开启   |
| 显示热门标签     | 以词云形式展示标签，标签大小随文章数自动变化             | 开启   |
| 热门标签数量     | 标签云中最多显示的标签数量                               | 20     |
| 显示公众号二维码 | 在侧边栏显示微信公众号二维码图片                         | 关闭   |
| 公众号二维码图片 | 上传微信公众号二维码图片，建议 1:1 正方形                | 空     |
| 公众号名称       | 显示在二维码下方的公众号名称，留空则显示"期待你的关注！" | 空     |
| 显示分类导航     | 在侧边栏显示分类导航                                     | 开启   |
| 分类显示数量     | 侧边栏分类导航最多显示的分类数量                         | 6      |
| 显示近期更新     | 在侧边栏显示近期更新文章                                 | 开启   |
| 近期更新数量     | 近期更新最多显示的文章数量                               | 4      |

## 多语言支持

主题内置四种语言：

- 🇨🇳 **简体中文** (zh-CN)
- 🇹🇼 **繁体中文** (zh-TW)
- 🇬🇧 **English** (en)
- 🇪🇸 **Español** (es)

### 切换语言

- **主站页面**：点击顶部导航栏的语言切换按钮
- **登录/找回密码页面**：通过 URL 参数 `?language=zh-CN` 切换

语言选择会自动保存到浏览器本地存储，下次访问自动应用。

## 开发指南

详细的开发指南请查看 [docs/开发指南.md](docs/开发指南.md)，包含：

- 环境准备与依赖安装
- 模板开发（布局系统、Thymeleaf 语法）
- 样式与脚本开发
- 构建与打包流程
- 部署到 Halo
- Git 版本管理
- 开发规范与注意事项

### 快速开始

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建打包
pnpm build
```

构建完成后，主题包位于 `dist/halo-theme-ShaneYu.zip`。

## 技术栈

| 技术                                                                          | 说明                                               | 版本     |
| ----------------------------------------------------------------------------- | -------------------------------------------------- | -------- |
| [Halo](https://www.halo.run/)                                                 | 强大的开源建站系统                                 | ≥ 2.20.0 |
| [Thymeleaf](https://www.thymeleaf.org/)                                       | 服务端模板引擎（`th:if`、`th:each`、`th:text` 等） | -        |
| [TypeScript](https://www.typescriptlang.org/)                                 | 类型安全的 JavaScript                              | 5.9.3    |
| [Vite](https://vite.dev/) (vite-plus)                                         | 下一代前端构建工具，通过 `vite-plus` 增强          | latest   |
| [vite-plugin-halo-theme](https://github.com/halo-sigs/vite-plugin-halo-theme) | Halo 主题专用 Vite 插件，处理 HTML/CSS/JS 资源引用 | 1.0.3    |
| [theme-package-cli](https://github.com/halo-dev/theme-package-cli)            | Halo 主题打包工具                                  | 1.0.1    |
| CSS Variables                                                                 | 原生 CSS 变量，支持亮色/暗色主题切换               | -        |
| [Iconify](https://iconify.design/)                                            | 统一图标框架，支持 20 万+ 开源图标                 | -        |
| [pnpm](https://pnpm.io/)                                                      | 快速、节省磁盘空间的包管理器                       | 10.33.0  |

## 项目结构与开发路径

以下是主题完整的文件结构和各文件的职责说明，适合学习和参考：

```
ShaneYu/
├── theme.yaml                    # 主题元数据（名称、版本、作者、许可证等）
├── settings.yaml                 # Halo 后台「主题设置」表单定义
├── vite.config.ts                # Vite 构建配置 + 格式化/lint 规则
├── tsconfig.json                 # TypeScript 编译配置
├── package.json                  # 依赖与脚本定义
├── build-zip.sh                  # 构建打包脚本（版本号递增 + 重命名）
│
├── src/                          # ===== 源代码目录 =====
│   │
│   ├── partials/                 # 【主站布局】所有主站页面共享的模板组件
│   │   ├── layout.html           #   主布局：header + 导航 + footer + 语言切换 + 主题切换
│   │   ├── sidebar.html          #   侧边栏：博主展示、标签云、分类导航、近期更新
│   │   ├── post-card.html        #   文章卡片组件（首页列表复用）
│   │   └── pagination.html       #   分页组件
│   │
│   ├── gateway_fragments/        # 【Gateway 布局】登录/找回密码等独立页面的布局
│   │   └── layout.html           #   Gateway 主布局，引用 i18n.ts 实现国际化
│   │
│   ├── css/                      # 【样式文件】每个页面/组件的样式
│   │   ├── main.css              #   全局基础样式 + CSS 变量体系（亮色/暗色）
│   │   ├── header.css            #   顶部导航栏样式
│   │   ├── sidebar.css           #   侧边栏样式
│   │   ├── footer.css            #   页脚样式
│   │   ├── index.css             #   首页样式
│   │   ├── post.css              #   文章详情页样式（目录、进度条、代码块等）
│   │   ├── archives.css          #   归档页时间轴样式
│   │   ├── category.css          #   分类页样式
│   │   ├── tags.css              #   标签页样式（含统计图表）
│   │   ├── search.css            #   搜索页样式
│   │   ├── page.css              #   独立页面样式
│   │   └── login.css             #   登录/找回密码/退出登录样式
│   │
│   ├── js/                       # 【脚本文件】TypeScript 编写，构建时编译
│   │   ├── i18n.ts               #   国际化翻译模块（统一翻译中心，四种语言）
│   │   ├── main.ts               #   全局脚本：导航、主题切换、语言切换、搜索快捷键
│   │   ├── index.ts              #   首页脚本
│   │   ├── post.ts               #   文章页脚本：目录、阅读进度、回到顶部
│   │   ├── search.ts             #   搜索逻辑：调用 Halo API、分页、结果渲染
│   │   └── login.ts              #   登录页脚本
│   │
│   ├── assets/icons/             # 【社交图标】SVG 源文件
│   │   ├── github.svg / qq.svg / email.svg / weibo.svg
│   │   ├── wechat.svg / zhihu.svg / csdn.svg / gitee.svg
│   │   └── youtube.svg / qqkongjian.svg
│   │
│   ├── error/                    # 【错误页面】
│   │   ├── 404.html              #   页面未找到
│   │   ├── 500.html              #   服务器错误
│   │   └── error.html            #   通用错误
│   │
│   ├── challenges/two-factor/    # 【认证挑战】
│   │   └── totp.html             #   TOTP 两步验证页面
│   │
│   ├── password-reset/email/     # 【密码重置】
│   │   ├── send.html             #   发送重置链接
│   │   └── reset.html            #   设置新密码
│   │
│   ├── index.html                # 首页：最新文章列表 + 侧边栏 + 分页
│   ├── post.html                 # 文章详情：封面 + 元信息 + TOC + 正文 + 分享
│   ├── categories.html           # 分类列表
│   ├── category.html             # 分类下文章列表
│   ├── tags.html                 # 标签云
│   ├── tag.html                  # 标签下文章列表
│   ├── archives.html             # 文章归档时间轴
│   ├── search.html               # 搜索页面
│   ├── login.html                # 登录页（Gateway 页面）
│   ├── logout.html               # 退出登录页
│   └── page.html                 # 独立页面（关于、友链等）
│
├── public/                       # 【静态资源】构建时直接复制到输出
│   └── assets/
│       ├── icons/                #   社交图标 SVG（必须与 src/assets/icons/ 同步）
│       └── images/               #   默认图片（logo.png、avatar.png）
│
└── docs/                         # 【开发文档】
    └── 开发指南.md               #   完整开发指南（环境、模板、构建、部署等）
```

### 核心开发流程

```
1. 编辑 src/ 下的模板/样式/脚本
2. pnpm run check          ← 格式检查 + 自动修复
3. pnpm run build          ← TypeScript 编译 → Vite 构建 → 打包 zip
4. 上传 dist/halo-theme-ShaneYu.zip 到 Halo 后台
5. 刷新页面预览效果
```

### 关键设计决策

| 决策                   | 说明                                                                       |
| ---------------------- | -------------------------------------------------------------------------- |
| CSS Variables 管理配色 | 不使用 CSS 预处理器，原生变量支持亮色/暗色切换                             |
| TypeScript 编写脚本    | 类型安全，构建时编译为 JS，开发体验更好                                    |
| i18n 统一管理          | 所有翻译集中在 `i18n.ts`，主站和 Gateway 页面共用                          |
| Gateway 页面分离       | 登录/找回密码使用独立布局，不加载主站 header/footer                        |
| SVG 图标双目录         | `src/assets/icons/` + `public/assets/icons/` 确保构建输出正确              |
| vite-plus 替代 vite    | 通过 pnpm overrides 使用 vite-plus，支持 Halo 主题特有的 HTML include 语法 |

### 学习资源

- [Halo 主题开发文档](https://docs.halo.run/developer-guide/theme) - Halo 官方主题开发指南
- [vite-plugin-halo-theme](https://github.com/halo-sigs/vite-plugin-halo-theme) - Halo 主题 Vite 插件源码
- [Thymeleaf 语法参考](https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.html) - Thymeleaf 官方教程
- [Iconify 图标集](https://icon-sets.iconify.design) - 20 万+ 开源图标搜索
- [CSS Variables 指南](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) - MDN CSS 变量教程

## 常见问题

### 壁纸不显示？

- 检查图片/视频链接是否有效
- 确认文件格式是否支持（jpg/png/webp/mp4/webm/mov/avi/flv/3gp）
- 清除浏览器缓存后重试

### 侧边栏不显示？

- 在主题设置中确认"显示侧边栏"选项已开启
- 检查浏览器控制台是否有错误

### 搜索功能不工作？

- 搜索功能依赖 Halo 的公开 API，请确保文章已发布
- 快捷键搜索需要按下 `Ctrl+K`（Mac 为 `Cmd+K`）

### 如何自定义图标？

- 在社交链接设置中，填写 Iconify 图标名称（如 `mdi:github`）
- 访问 [Iconify 图标集](https://icon-sets.iconify.design) 查找更多图标

## License

[GPL-3.0 license](LICENSE)
