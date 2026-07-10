import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: string }) {
  const logs = await getCollection('logs');
  const notebook = await getCollection('notebook');
  const allPosts = [...logs, ...notebook].sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  return rss({
    title: 'yatharthx',
    description: 'a general purpose programmer',
    site: context.site,
    items: allPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.body?.slice(0, 300),
      link: `/writing/${post.collection === 'logs' ? 'weblog' : 'notebook'}/${post.id}/`,
      categories: post.data.tags,
    })),
  });
}
