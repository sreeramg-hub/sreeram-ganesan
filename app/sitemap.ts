import type { MetadataRoute } from 'next'

const BASE = 'https://www.sreeramganesan.dev'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                          lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/lab/how-web-works`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/lab/ai-lab`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/lab/performance`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
