# 网站与文档系统构建手册

这是一份给非开发者看的操作手册。

你不需要理解 Astro、Docusaurus、Node.js 的原理，只要按步骤操作，就可以：

- 在本地打开整个网站
- 单独打开 Notes 文档系统
- 一起预览主站和文档站
- 构建可部署的静态文件

---

## 1. 这个项目由两部分组成

这个网站不是一个单独项目，而是两个站点配合在一起：

### 1. 主站

位置：

`/Users/lizhicheng/Desktop/PersonalWebsite`

技术：

`Astro`

负责内容：

- 首页
- Research
- Papers
- Essays
- Blog
- About
- Notes 入口页

### 2. 文档站

位置：

`/Users/lizhicheng/Desktop/PersonalWebsite/notes-docs`

技术：

`Docusaurus`

负责内容：

- Economics notes
- Mathematics notes
- Programming notes

也就是说：

- 主站是“网站外壳”
- `notes-docs` 是“笔记文档系统”

---

## 2. 你需要提前准备什么

在开始之前，请确认电脑里已经安装：

- `Node.js`
- `npm`

建议使用：

- `Node.js 22`

如果你不知道自己有没有安装，可以在终端输入：

```bash
node -v
npm -v
```

如果屏幕上能看到版本号，就说明已经安装好了。

---

## 3. 第一次使用时要做什么

第一次使用，或者别人刚把项目发给你时，要先安装依赖。

### 3.1 安装主站依赖

打开终端，输入：

```bash
cd /Users/lizhicheng/Desktop/PersonalWebsite
npm install
```

### 3.2 安装文档站依赖

继续输入：

```bash
cd /Users/lizhicheng/Desktop/PersonalWebsite/notes-docs
npm install
```

看到安装完成即可。

这一步通常只需要做一次。

---

## 4. 平时本地预览网站怎么做

如果你想在自己电脑上看整个网站效果，需要开两个终端窗口。

原因很简单：

- 一个终端负责主站
- 一个终端负责 Notes 文档站

### 4.1 第一个终端：启动主站

打开第一个终端，输入：

```bash
cd /Users/lizhicheng/Desktop/PersonalWebsite
PUBLIC_NOTES_DOCS_URL=http://127.0.0.1:3000/ ASTRO_TELEMETRY_DISABLED=1 npm run dev -- --host 127.0.0.1 --port 4321
```

启动后，主站地址是：

`http://127.0.0.1:4321`

### 4.2 第二个终端：启动 Notes 文档站

打开第二个终端，输入：

```bash
cd /Users/lizhicheng/Desktop/PersonalWebsite/notes-docs
MAIN_SITE_URL=http://127.0.0.1:4321/ npm run start -- --host 127.0.0.1 --port 3000
```

启动后，文档站地址是：

`http://127.0.0.1:3000`

### 4.3 现在怎么查看

在浏览器打开：

- 主站：`http://127.0.0.1:4321`
- 文档站：`http://127.0.0.1:3000`

这时：

- 主站里的 Notes 分类链接会自动跳到本地文档站
- 文档站右上角的回主站按钮会跳回本地主站

---

## 5. 如果你只想看主站怎么办

如果你只是改首页、Research、Papers、Blog 这些内容，不看 Notes 文档系统，也可以只开主站。

命令：

```bash
cd /Users/lizhicheng/Desktop/PersonalWebsite
npm run dev -- --host 127.0.0.1 --port 4321
```

但是要注意：

- 这样打开后，Notes 相关链接会按默认配置跳到线上地址或预设地址
- 如果你正在改 Notes，还是建议用“两个终端”的方式

---

## 6. 如果你只想看文档站怎么办

如果你只是改 Notes 文档，也可以只开文档站。

命令：

```bash
cd /Users/lizhicheng/Desktop/PersonalWebsite/notes-docs
npm run start -- --host 127.0.0.1 --port 3000
```

然后打开：

`http://127.0.0.1:3000`

---

## 7. 如何正式构建整个网站

当你准备部署，或者只是想确认“能不能成功编译”，就要做 build。

同样建议分成主站和文档站两部分。

### 7.1 构建主站

```bash
cd /Users/lizhicheng/Desktop/PersonalWebsite
ASTRO_TELEMETRY_DISABLED=1 npm run build
```

构建成功后，主站静态文件会出现在：

`/Users/lizhicheng/Desktop/PersonalWebsite/dist`

### 7.2 构建文档站

```bash
cd /Users/lizhicheng/Desktop/PersonalWebsite/notes-docs
MAIN_SITE_URL=https://example.com/ npm run build
```

构建成功后，文档站静态文件会出现在：

`/Users/lizhicheng/Desktop/PersonalWebsite/notes-docs/build`

---

## 8. 如果你想本地预览 build 之后的结果

有时候开发模式没问题，但你还是想看“真正构建后”的效果。

### 8.1 主站 build 后预览

```bash
cd /Users/lizhicheng/Desktop/PersonalWebsite
PUBLIC_NOTES_DOCS_URL=http://127.0.0.1:3000/ ASTRO_TELEMETRY_DISABLED=1 npm run preview -- --host 127.0.0.1 --port 4321
```

### 8.2 文档站 build 后预览

```bash
cd /Users/lizhicheng/Desktop/PersonalWebsite/notes-docs
npm run serve
```

文档站默认会告诉你本地访问地址。

---

## 9. 内容应该改哪里

### 9.1 主站内容

主站内容主要在：

`/Users/lizhicheng/Desktop/PersonalWebsite/src/content`

例如：

- `research`
- `papers`
- `essays`
- `blog`

### 9.2 Notes 文档内容

文档内容主要在：

`/Users/lizhicheng/Desktop/PersonalWebsite/notes-docs`

你现在主要会用到这些目录：

- `economics-docs`
- `mathematics-docs`
- `programming-docs`

如果你要新增笔记，一般就是在这些目录里新增 `.md` 或 `.mdx` 文件。
---

## 10. 最常用的 4 条命令

如果你只想记最核心的内容，记住下面 4 条就够了。

### 启动主站

```bash
cd /Users/lizhicheng/Desktop/PersonalWebsite
PUBLIC_NOTES_DOCS_URL=http://127.0.0.1:3000/ ASTRO_TELEMETRY_DISABLED=1 npm run dev -- --host 127.0.0.1 --port 4321
```

### 启动 Notes 文档站

```bash
cd /Users/lizhicheng/Desktop/PersonalWebsite/notes-docs
MAIN_SITE_URL=http://127.0.0.1:4321/ npm run start -- --host 127.0.0.1 --port 3000
```

### 构建主站

```bash
cd /Users/lizhicheng/Desktop/PersonalWebsite
ASTRO_TELEMETRY_DISABLED=1 npm run build
```

### 构建文档站

```bash
cd /Users/lizhicheng/Desktop/PersonalWebsite/notes-docs
MAIN_SITE_URL=https://example.com/ npm run build
```

---

## 11. 常见问题

### 1. 为什么要开两个终端？

因为这是两个站：

- 一个是主站
- 一个是 Notes 文档站

### 2. 为什么主站里点 Notes 会跳到另一个地址？

因为 Notes 不是主站内部页面，而是独立文档系统。

### 3. `npm install` 需要每次都跑吗？

不需要。

通常只有这几种情况才需要重新跑：

- 第一次拿到项目
- 依赖被删了
- 项目升级了依赖

### 4. 怎么判断 build 成功了？

你会看到类似这种提示：

- 主站：`build Complete`
- 文档站：`Generated static files in "build"`

### 5. 如果命令卡住不动怎么办？

先等一会儿。

如果长时间没有反应，可以：

- 按 `Ctrl + C` 停止
- 重新执行命令

---

## 12. 一句话记忆版

这个项目的工作方式就是：

先开主站，再开文档站；  
平时用 `dev/start` 看效果，准备上线时用 `build` 生成静态文件。
