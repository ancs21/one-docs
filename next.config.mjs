/**
 * @type {import('next').NextConfig}
 */
// import { remarkCodeHike } from '@code-hike/mdx'
import nextra from 'nextra'
// import theme from 'shiki/themes/material-theme.json' assert { type: 'json' }

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  mdxOptions: {
    remarkPlugins: [],
  },
  codeHighlight: true,
  defaultShowCopyCode: true,
})

export default withNextra()
