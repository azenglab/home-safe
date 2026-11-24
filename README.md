# home-safe

全家平安守护中心：一个面向家庭出行的平安工具站 —— 家庭应急求助、平安出行清单、学生安全知识、平安工具箱。纯静态多页网页，无需后端，双击即用。

🔗 在线访问：https://azenglab.github.io/home-safe/

## 模块

| 模块 | 文件 | 说明 |
| --- | --- | --- |
| 家庭应急求助（首页） | `index.html` | 一键呼救、紧急号码宫格、三大工具入口、场景快捷导航 |
| 平安出行清单 | `family-trip.html` | 机长/副驾双人确认链、出发通行证、机长知情卡、语音朗读、长辈大字模式、紧急救援中心；平安上上签（图片底卡 + 遮罩换文案）已做但**暂时停用**，恢复方式见文件内 `FORTUNE_ENABLED` 开关 |
| 学生安全知识 | `student-safety.html` | 面向学生群体的六大安全课堂：上学交通、校园内外、防溺水（六不 + 叫找伸抛）、消防用电、防拐防骗与网络安全、常见小伤自救 |
| 平安工具箱 | `tools.html` | 8 个紧急号码速查、10 张保命技能卡（内嵌 B 站官方教学视频）、家庭隐患自查清单、家庭应急信息卡生成器、气象预警四色速查、急救包配置指南 |

## 站点架构

- 全站顶部导航与页脚由 [assets/layout.js](assets/layout.js) 统一注入，页面只需两个占位符 + 一行 `<script>`，保证所有页面 head/footer 一致
- 共享设计系统 [assets/site.css](assets/site.css) 统一设计令牌、导航、横幅、卡片、按钮、胶囊与响应式规则
- 新增页面三步：复制现有页面 → 保留占位符改 `data-page` → 在 layout.js 的 `NAV` 数组登记

## 设计规范

整站按「家庭平安手册」一个方向收敛：米白纸底、墨色文字、每页一个安静的模块色。

**设计令牌**（`site.css` 的 `:root`，页面内不要再重复定义）

| 类别 | 令牌 | 说明 |
| --- | --- | --- |
| 墨色 | `--ink` / `--ink-2` / `--ink-3` / `--ink-4` | 正文、次级、辅助、占位四级 |
| 纸面 | `--paper` / `--paper-2` / `--surface` | 页面底、浅底、卡片白 |
| 线 | `--line` / `--line-strong` | 统一 1px 分隔线 |
| 模块色 | `--accent` / `--accent-ink` / `--accent-soft` | 由 `body.page-*` 决定，页面里只引用不重定义 |
| 圆角 | `--radius-xs/sm/radius/lg/pill` | 8 / 10 / 14 / 20 / 999px |
| 阴影 | `--shadow-1` / `--shadow-2` | 静置 / 悬浮 |
| 字号 | `--fs-display` / `--fs-h2` / `--fs-body` / `--fs-sm` / `--fs-xs` | 页面级标题到辅助文字 |

**模块色**：首页红 `#b42318`、出行琥珀 `#b45309`、学生绿 `#047857`、工具箱蓝 `#1d4ed8`。`layout.js` 会自动给 `body` 加 `page-home|trip|kids|tools` 类，色值只在 `site.css` 一处维护。

**页面骨架**：`站点导航（吸顶 52px）→ site-hero 横幅（随页滚动）→ site-subbar 快捷条（吸顶）→ 内容`。只保留一层次级吸顶条，避免双层吸顶压屏。

**通用组件**：`.site-hero`、`.site-card`、`.site-btn`、`.site-chip`、`.site-sec-title`、`.site-subbar`，颜色与圆角全部走令牌。

改动样式后请给 `site.css` / `layout.js` 的引用加版本号（如 `?v=20261125`），避免浏览器命中旧缓存导致破版。

## 特性

- 📄 纯静态 HTML / CSS / JS，无构建、无后端、无数据库，本地双击即用
- 📱 手机优先自适应（375px 无溢出），桌面端同样友好
- 🔍 出行清单勾选进度、家庭档案、工具箱自查记录均存于浏览器本地（localStorage），不上传服务器
- 🔊 Web Speech API 语音朗读清单与口诀，辅助长辈与儿童使用
- 📺 保命技能卡内嵌哔哩哔哩官方科普视频（红十字会、央视网、消防官方账号）

## 使用

直接打开 `index.html`，或部署到 GitHub Pages / Vercel / 任意静态托管。本地预览无需安装依赖（也可 `python -m http.server` 起本地服务）。

## 目录结构

```
home-safe/
├── index.html           # 家庭应急求助（首页）
├── family-trip.html     # 平安出行清单
├── student-safety.html  # 学生安全知识
├── tools.html           # 平安工具箱
└── assets/
    ├── layout.js        # 全站导航/页脚骨架
    ├── site.css         # 设计令牌与全站共享样式
    ├── fortune-card.jpg # 平安上上签底卡（已裁掉生成水印）
    └── fortune-seal.png # 平安上上签红章（圆形外透明）
```

## 免责提示

遇火情、险情、突发疾病或治安事件，请第一时间直接拨打 119 / 110 / 120。本工具仅用于辅助报清位置、整理话术与家庭安全教育。

## License

MIT

> （注：部分内容由 AI 生成）
