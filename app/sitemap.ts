import type { MetadataRoute } from 'next'
import { practiceAreas, siteConfig } from '@/lib/site'
import { insights } from '@/lib/insights'
import { routes } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const pages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: route.path === '/' ? siteConfig.url : `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const practicePages: MetadataRoute.Sitemap = practiceAreas.map((area) => ({
    url: `${siteConfig.url}/services/${area.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: area.slug === 'mineral-law' ? 0.9 : 0.8,
  }))

  const insightPages: MetadataRoute.Sitemap = insights.map((item) => ({
    url: `${siteConfig.url}/insights/${item.slug}`,
    lastModified: new Date(item.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...pages, ...practicePages, ...insightPages]
}
