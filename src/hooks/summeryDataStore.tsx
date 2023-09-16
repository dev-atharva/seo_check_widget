import { create } from "zustand";

interface SummaryStateProps {
  summaryData: {
    summary_data_retrieved: string;
    domain_name: string;
    domain_ip: string;
    started_crawling: string;
    crawled_pages: number;
    page_screenshot: string;
    ssl_certificate: boolean;
    sitemap: boolean;
    robots_txt: boolean;
    http2: boolean;
    links_external: number;
    links_internal: number;
    duplicate_title: number;
    duplicate_content: number;
    broken_links: number;
    broken_resources: number;
    onpage_score: number;
    non_indexable: number;
    canonical: number;
    duplicate_meta_tags: number;
    irrelevant_meta_keywords: number;
    no_favicon: number;
    no_image_alt: number;
    no_image_title: number;
    seo_friendly_url: number;
    lorem_ipsum: number;
    is_orphan_page: number;
    has_render_blocking_resources: number;
  };
  setSummaryData: (data: Partial<SummaryStateProps["summaryData"]>) => void;
}

const useSummary = create<SummaryStateProps>((set) => ({
  summaryData: {
    summary_data_retrieved: "not ready",
    domain_name: "",
    domain_ip: "",
    started_crawling: "",
    crawled_pages: 0,
    page_screenshot: "",
    ssl_certificate: false,
    sitemap: false,
    robots_txt: false,
    http2: false,
    links_external: 0,
    links_internal: 0,
    duplicate_title: 0,
    duplicate_content: 0,
    broken_links: 0,
    broken_resources: 0,
    onpage_score: 0,
    non_indexable: 0,
    canonical: 0,
    duplicate_meta_tags: 0,
    irrelevant_meta_keywords: 0,
    no_favicon: 0,
    no_image_alt: 0,
    no_image_title: 0,
    seo_friendly_url: 0,
    lorem_ipsum: 0,
    is_orphan_page: 0,
    has_render_blocking_resources: 0,
  },
  setSummaryData: (data) =>
    set((state) => ({ summaryData: { ...state.summaryData, ...data } })),
}));

export default useSummary;
