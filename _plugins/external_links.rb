# frozen_string_literal: true

require 'nokogiri'

Jekyll::Hooks.register :posts, :post_render do |post|
  process_links(post)
end

Jekyll::Hooks.register :documents, :post_render do |doc|
  process_links(doc) if doc.data['layout'] == 'post'
end

def process_links(doc)
  html = Nokogiri::HTML.fragment(doc.output)
  html.css('a[href]').each do |a|
    next if a['target']

    href = a['href']

    next if href.start_with?('#', '/', '.') || href =~ %r{\A[a-zA-Z][a-zA-Z0-9+\-.]*:(?!//)}

    a['target'] = '_blank'
    a['rel'] = 'noopener noreferrer'
  end
  doc.output = html.to_html
end
