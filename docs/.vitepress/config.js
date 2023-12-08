module.exports = {
    title: 'Awen VitePress',
    description: 'Just playing around.',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/guide' },
            {
              text: 'Dropdown Menu',
              items: [
                { text: 'Item A', link: '/item-1' },
                { text: 'Item B', link: '/item-2' },
                { text: 'Item C', link: '/item-3' }
              ]
            }
        ],
        footer: {
            message: '????????????????????',
            copyright: 'Copyright © xxxxxxxxxxxxxxxxxxxxxx'
        },
        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        search: {
            provider: 'local'
        },
        sidebar: {
            '/': [{
                text: '导航试试',
                items: [
                    { text: 'bar-index页面', link: '/bar/index'},
                    { text: 'for-index页面', link: '/for/index'},
                ]
            }],
            '/bar/': [{
                text: '/bar页面专属',
                items: [
                    { text: 'bar-index', link: '/bar/index'},
                    { text: 'bar-one', link: '/bar/one'},
                ]
            }],
            '/foo/': [{
                text: '/foo页专属',
                items: [
                    { text: 'foo-index', link: '/foo/index'},
                    { text: 'foo-one', link: '/foo/one'},
                ]
            }]
        }
    },
    lang: 'zh',
    srcDir: './src',
    base: '/' // 例如，如果你计划部署你的站点到https://foo.github.io/bar/，base选项就应该设置为'/bar/'(始终以/开始和结尾)。
}