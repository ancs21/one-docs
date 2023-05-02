/**
 * @type {import('next').NextConfig}
 */
// import { remarkCodeHike } from '@code-hike/mdx'
import nextra from 'nextra'
import { remarkMermaid } from 'remark-mermaid-nextra'
// import theme from 'shiki/themes/material-theme.json' assert { type: 'json' }

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  mdxOptions: {
    remarkPlugins: [remarkMermaid],
  },
  codeHighlight: true,
  defaultShowCopyCode: true,
})

export default withNextra()
