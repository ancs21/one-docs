import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>One Docs</span>,
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://one-docs.vercel.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'One Docs'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'The next site builder'}
        />
        <title>{frontMatter.title || 'One Docs'}</title>
      </>
    )
  },
  project: {
    link: 'https://github.com/ancs21/one-docs',
  },
  docsRepositoryBase: 'https://github.com/ancs21/one-docs',
  footer: {
    text: 'One Docs Template',
  },
}

export default config
