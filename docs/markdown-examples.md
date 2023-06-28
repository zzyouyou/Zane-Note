# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## 语法高亮显示

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 自定义容器

**Input**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## 代码块组

::: code-group

```sh [npm]
$ npx vitepress init
```

```sh [pnpm]
$ pnpm exec vitepress init
```

## 折叠面板

::: details Getting missing peer deps warnings?
If using PNPM, you will notice a missing peer warning for `@docsearch/js`. This does not prevent VitePress from working. If you wish to suppress this warning, add the following to your `package.json`:

```json
"pnpm": {
  "peerDependencyRules": {
    "ignoreMissing": [
      "@algolia/client-search",
      "search-insights"
    ]
  }
}
```

:::

## 右上角标

lastUpdated <Badge type="info" text="default theme only" />

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
