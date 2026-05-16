# frozen_string_literal: true

# rubocop:disable Style/Documentation

module Jekyll
  class TagPage < Page
    # rubocop:disable Lint/MissingSuper
    def initialize(site, tag, posts)
      @site = site
      @base = site.source
      @dir  = File.join('writing', 'tags', tag.downcase.gsub(/\s+/, '-'))
      @name = 'index.html'

      process(@name)
      read_yaml(File.join(@base, '_layouts'), 'tag_archive.html')

      data['tag']   = tag
      data['posts'] = posts
      data['title'] = "Tag: #{tag}"
    end
    # rubocop:enable Lint/MissingSuper
  end

  class TagGenerator < Generator
    safe true

    def generate(site)
      tag_posts = collect_tag_posts(site)

      tag_posts.each do |tag, posts|
        posts.sort_by! { |p| p.data['date'] || Time.new(0) }.reverse!
        site.pages << TagPage.new(site, tag, posts)
      end
    end

    private

    def doc_tags(doc)
      tags = doc.data['tags'] || doc.data['tag'] || []
      tags.is_a?(Array) ? tags : [tags]
    end

    def collect_tag_posts(site)
      tag_posts = Hash.new { |h, k| h[k] = [] }

      %w[logs notebook].each do |coll_name|
        next unless site.collections[coll_name]

        site.collections[coll_name].docs.each do |doc|
          doc_tags(doc).each { |t| tag_posts[t] << doc }
        end
      end

      tag_posts
    end
  end
end

# rubocop:enable Style/Documentation
