import { visit } from 'unist-util-visit';
import type { Root, Element } from 'hast';

export function externalLinks() {
  return (tree: Root) => {
    visit(tree, 'element', (node: Element) => {
      if (node.tagName === 'a' && node.properties?.href) {
        const href = String(node.properties.href);
        if (
          !href.startsWith('#') &&
          !href.startsWith('/') &&
          !href.startsWith('.') &&
          !/^[a-zA-Z][a-zA-Z0-9+\-.]*:(?!\/\/)/.test(href)
        ) {
          node.properties = {
            ...node.properties,
            target: '_blank',
            rel: 'noopener noreferrer',
          };
        }
      }
    });
  };
}
