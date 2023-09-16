import useSummary from "../../hooks/summeryDataStore";
import Container from "../Container";
import ResetButton from "../ResetButton";
import Binary_info from "./Binary_info";
import Card from "./Card";

const Seo_info = () => {
  const summary = useSummary();

  return (
    <Container>
      <div className="flex flex-col gap-4 min-h-[screen] justify-start">
        {/* SCREENSHOT */}
        <div className="w-full h-[60vh] overflow-hidden rounded-xl relative p-2">
          <img
            src={summary.summaryData.page_screenshot}
            alt="Website screenshot"
            className="object-cover w-full"
          />
        </div>
        {/* HEADING AND SUB-HEADING */}
        <div className="text-2xl font-bold text-neutral-900">
          {summary.summaryData.domain_name}
          <div className="font-light text-neutral-500 text-xl mt-2">
            {summary.summaryData.domain_ip}
          </div>
        </div>
        {/* Binary Data */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Binary_info
            value={summary.summaryData.ssl_certificate}
            title="SSL Certificate"
          />
          <Binary_info value={summary.summaryData.sitemap} title="Sitemap" />
          <Binary_info
            value={summary.summaryData.robots_txt}
            title="Robots Txt"
          />
          <Binary_info value={summary.summaryData.http2} title="HTTP2" />
        </div>
        {/* CRAWLING INFO */}
        <div className="flex flex-row gap-4 p-2 justify-center">
          <div>{summary.summaryData.started_crawling}</div>
          <div>{summary.summaryData.crawled_pages}</div>
        </div>
        {/* Cards */}
        <div
          className="grid grid-cols-1
         sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 place-items-center p-2 "
        >
          <Card
            value={summary.summaryData.links_internal}
            title="Internal Links"
            info="Internal links help search engine find, index and understand all of the pages on your site"
          />
          <Card
            value={summary.summaryData.links_external}
            title="External links"
            info="External links may help search engines understand your topic and niche."
          />
          <Card
            value={summary.summaryData.duplicate_content}
            title="Duplicate Content"
            info="Due to this search engines don't know which URL to show in the search results."
          />
          <Card
            value={summary.summaryData.duplicate_title}
            title="Duplicate Title"
            info="They can easily confuse search engines and make it difficult for them to determine which page is the most relevant result"
          />
          <Card
            value={summary.summaryData.duplicate_meta_tags}
            title="Duplicate Meta Tags"
            info="Particular page wont be rank better than another as they have same meta description"
          />
          <Card
            value={summary.summaryData.broken_links}
            title="Broken Links"
            info="Having too many broken outgoing links can lead to a poor user experience for your visitor"
          />
          <Card
            value={summary.summaryData.broken_resources}
            title="Broken Resources"
            info="These indirectly harm SEO by affecting bounce rate, time on site."
          />
          <Card
            value={summary.summaryData.non_indexable}
            title="Non-indexable pages"
            info="Pages closed from search engine indexation for any reason might cause issues for your website"
          />
          <Card
            value={summary.summaryData.canonical}
            title="Canonical"
            info="Canonical tags are used to let earch engine know which version of the page you want to appear in search results"
          />
          <Card
            value={summary.summaryData.irrelevant_meta_keywords}
            title="Irrelevent meta keywords"
            info="They could be seen as a spam signal by some search engines."
          />
          <Card
            value={summary.summaryData.no_favicon}
            title="No Favicon"
            info="If you don't have a favicon serach engine will see as many 404 errors as you have pages on your website."
          />
          <Card
            value={summary.summaryData.no_image_alt}
            title="No Image Alt"
            info="Images with no alt text represent poor accessibility, and a missed SEO opportunity"
          />
          <Card
            value={summary.summaryData.no_image_title}
            title="No Image title"
            info="It only appears when a mouse hovers over the image"
          />
          <Card
            value={summary.summaryData.seo_friendly_url}
            title="Seo friendly url"
            info="Keep your URLs short and sweet, and use keywords near the front"
          />
          <Card
            value={summary.summaryData.lorem_ipsum}
            title="Lorem Ipsum"
            info="Search engines may consider the resource irrelevant or duplicate."
          />
          <Card
            value={summary.summaryData.is_orphan_page}
            title="Orphan Page"
            info="Website pages that are not linked to from any other page or section of your site"
          />
          <Card
            value={summary.summaryData.has_render_blocking_resources}
            title="Render blocking resources"
            info="These resources can block web page rendering if certain conditions are met"
          />
        </div>
        <div className="w-[100%] min-h-[20vh] flex justify-center items-center">
          <div className="w-[50%]">
            <ResetButton />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Seo_info;
