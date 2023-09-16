import Button from "./Button/Button";
import useSummary from "../hooks/summeryDataStore";
import { useCallback } from "react";

const ResetButton = () => {
  const summery = useSummary();
  const reset_values = useCallback(() => {
    summery.setSummaryData({
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
    });
  }, [summery]);
  return <Button label="Reset" onClick={() => reset_values()} />;
};

export default ResetButton;
