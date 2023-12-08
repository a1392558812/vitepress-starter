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
language: node_js
node_js:
  - lts/*
install:
  - npm install # npm ci
script:
  - npm run docs:build # npm run docs:build
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

## end

<script setup>
import headerComponents from './components/header/index.vue'
import { withBase, useData  } from 'vitepress'
const pageData = useData()
</script>