export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://tech-test-two.vercel.app/sitemap.xml',
    }
  }