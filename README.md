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

## 截图预览

### 亮色模式

![亮色模式首页](public/assets/images/light.png)

### 暗色模式

![暗色模式首页](public/assets/images/dark.png)

## 页面展示

主题包含以下精心设计的页面模板：

| 模板            | 功能亮点                                                                                                                                           |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **首页**        | 最新文章列表 · 侧边栏组件（博主展示、标签云、分类导航、近期更新） · 分页导航                                                                       |
| 📖 **文章详情** | 封面图展示 · 文章元信息（作者、发布时间、分类、标签、字数统计、阅读时间） · 文章目录（TOC） · 阅读进度条 · 回到顶部 · 上一篇/下一篇导航 · 社交分享 |
| 🗂️ **分类**     | 分类列表展示 · 分类下文章列表 · 分类数据统计                                                                                                       |
| 🏷️ **标签**     | 标签云展示 · 标签下文章列表 · 标签数据统计                                                                                                         |
| 📅 **归档**     | 按时间线展示文章归档 · 年月分组展示                                                                                                                |
| 🔍 **搜索**     | 独立搜索页面（`/search`） · 实时搜索文章 · 搜索结果分页 · 快捷键搜索（Ctrl+K）                                                                     |
| 💬 **瞬间**     | 时间线展示瞬间动态 · 支持图片/视频/音频媒体 · 图片灯箱预览 · 点赞与评论互动 · 分页导航                                                             |
| 🔐 **登录**     | 精美的登录界面 · 支持 TOTP 两步验证 · 社交登录集成 · 忘记密码入口                                                                                  |
| 📧 **找回密码** | 邮箱找回密码流程 · 发送重置链接                                                                                                                    |
| ️ **错误页面**   | 404 页面未找到 · 500 服务器错误 · 通用错误页面                                                                                                     |

## 安装

### 方式一：后台安装（推荐）

1. 下载主题包 `dist/halo-theme-ShaneYu.zip`
2. 登录 Halo 后台管理界面
3. 进入 **外观** -> **主题**
4. 点击 **安装主题** 按钮
5. 上传下载的主题包
6. 安装完成后点击 **启用** 按钮

### 方式二：直接上传

1. 前往 [Releases](https://github.com/ZIANGU/ShaneYu/releases) 下载最新版本的 `.zip` 文件
2. 在 Halo 后台「外观 → 主题」中上传安装
3. 启用主题并进入「主题设置」进行个性化配置

## 配置指南

主题设置位于 Halo 后台的 **外观** -> **主题** -> **设置** 中。

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
