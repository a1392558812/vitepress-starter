---
title: Docs with VitePress
editLink: true
sidebar: auto
head:
  - - meta
    - name: description
      content: hello
  - - meta
    - name: keywords
      content: super duper SEO
---

{{ $frontmatter }}
 
## 我的fa

<img :src="withBase('static/images/test1.jpg')" />

:tada: :100:

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: danger STOP
Danger zone, do not proceed
:::

```js
export default {
  name: 'MyComponent',
  // ...
}
```

## heading

[跳转到根目录的index.md](/index.html)

[跳转到 foo 文件夹的 index](/foo/index.html)

[跳转到 foo 文件夹下的one](/foo/one.html)

[跳转到 bar 文件夹的 index](/bar/index.html)

[跳转到 bar 文件夹下的one](/bar/one.html)

[跳转到当前页面#heading锚点](./#heading) 
## test
<span v-for="i in 3">{{ i }}-for<br/></span>

## test
```js-vue
{{ pageData }}
 ```



## test

<headerComponents />

## test

```js-vue
Hello {{ 1 + 1 }}
```

## test

```yaml

language: node_js
node_js:
  - lts/*
install:
  - yarn install # npm ci
script:
  - yarn docs:build # npm run docs:build
deploy:
  provider: pages
  skip_cleanup: true
  local_dir: docs/.vitepress/dist
  # 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable
  github_token: $GITHUB_TOKEN
  keep_history: true
  on:
    branch: master

```

## test

```yml
# Sample workflow for building and deploying a VitePress site to GitHub Pages
#
name: Deploy VitePress site to Pages

on:
  # Runs on pushes targeting the `main` branch. Change this to `master` if you're
  # using the `master` branch as the default branch.
  push:
    branches: [master]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0 # Not needed if lastUpdated is not enabled
      # - uses: pnpm/action-setup@v2 # Uncomment this if you're using pnpm
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm # or pnpm / yarn
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Install dependencies
        run: npm ci # or pnpm install / yarn install
      - name: Build with VitePress
        run: npm run docs:build # or pnpm docs:build / yarn docs:build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: docs/.vitepress/dist

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

## end

<script setup>
import headerComponents from './components/header/index.vue'
import { withBase, useData  } from 'vitepress'
const pageData = useData()
</script>