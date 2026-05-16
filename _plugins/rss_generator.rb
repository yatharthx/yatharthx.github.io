# frozen_string_literal: true

# rubocop:disable Style/Documentation

require 'nokogiri'

module Jekyll
  class RssPage < PageWithoutAFile
    def initialize(site)
      @site = site
      @base = site.source
      @dir  = ''
      @name = 'rss.xml'
      super(site, site.source, '', 'rss.xml')

      content = build_rss(site)
      self.content = content
      data['layout'] = nil
      data['sitemap'] = false
    end

    private

    # rubocop:disable Metrics/AbcSize, Metrics/MethodLength, Metrics/BlockLength
    def build_rss(site)
      builder = Nokogiri::XML::Builder.new(encoding: 'UTF-8') do |xml|
        xml.rss('version' => '2.0',
                'xmlns:atom' => 'http://www.w3.org/2005/Atom',
                'xmlns:content' => 'http://purl.org/rss/1.0/modules/content/') do
          xml.channel do
            xml.title site.config['title']
            xml.description site.config['description']
            xml.link site.config['url']
            xml.language 'en'
            xml.lastBuildDate Time.now.rfc2822
            xml['atom'].link href: "#{site.config['url']}/rss.xml",
                             rel: 'self',
                             type: 'application/rss+xml'

            docs = collect_docs(site)
            docs.each do |doc|
              xml.item do
                xml.title doc.data['title']
                xml.link "#{site.config['url']}#{doc.url}"
                xml.guid "#{site.config['url']}#{doc.url}", isPermaLink: true
                xml.pubDate doc.data['date'].rfc2822 if doc.data['date']
                xml.description doc.content&.strip&.slice(0, 300)
                xml['content'].encoded do
                  xml.cdata doc.content
                end
                Array(doc.data['tags']).each { |t| xml.category t }
              end
            end
          end
        end
      end

      builder.to_xml
    end
    # rubocop:enable Metrics/AbcSize, Metrics/MethodLength, Metrics/BlockLength

    def collect_docs(site)
      docs = []
      %w[logs notebook].each do |coll_name|
        next unless site.collections[coll_name]

        docs.concat(site.collections[coll_name].docs)
      end
      docs.sort_by! { |d| d.data['date'] || Time.new(0) }.reverse!
      docs
    end
  end

  class RssGenerator < Generator
    safe true
    priority :lowest

    def generate(site)
      site.pages << RssPage.new(site)
    end
  end
end

# rubocop:enable Style/Documentation
