import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { TITLE_SITE, DESCRIPTION } from '../consts'

export async function get(context) {
  const posts = await getCollection("blog")
  return rss ({
    title: TITLE_SITE,
    description: `${DESCRIPTION} falando sobre desenvolvimento Full Stack, tech, e mais...`,
    site: context.site,
    items: posts.map((post)=>({
      ...post.data,
      link: `/blog/${post.slug}/`
    }))
  })
}