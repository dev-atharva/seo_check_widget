import { useState, useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Input from "../Input";
import axios from "axios";
import useModal from "../../hooks/useModalOpen";
import useSummary from "../../hooks/summeryDataStore";

const Seo_modal = () => {
  const summery_data = useSummary();
  const [loading, setloading] = useState(false);
  const [taskId, SettaskId] = useState("");
  const modalstate = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      url: "",
    },
  });

  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    setloading(true);
    const post_array = [];
    post_array.push({
      target: data.url,
      max_crawl_pages: 5,
      load_resources: true,
      enable_javascript: true,
      enable_browser_rendering: true,
    });
    axios({
      method: "post",
      url: "https://api.dataforseo.com/v3/on_page/task_post",
      auth: {
        username: import.meta.env.VITE_API_USERNAME,
        password: import.meta.env.VITE_API_PASSWORD,
      },
      data: post_array,
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        const task_id = response["data"]["tasks"][0]["id"];
        SettaskId(task_id);
        summery_data.setSummaryData({ summary_data_retrieved: "loading" });
        modalstate.onClose();
      })
      .catch((err) => {
        console.log(err);
      });

    const screenshot_post_array = [];
    screenshot_post_array.push({ url: data.url });
    axios({
      method: "post",
      url: "https://api.dataforseo.com/v3/on_page/page_screenshot",
      auth: {
        username: import.meta.env.VITE_API_USERNAME,
        password: import.meta.env.VITE_API_PASSWORD,
      },
      data: screenshot_post_array,
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        summery_data.setSummaryData({
          page_screenshot:
            response["data"]["tasks"][0]["result"][0]["items"][0]["image"],
        });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    const fetchSummary = async () => {
      if (taskId === "") return;

      try {
        axios({
          method: "get",
          url: `https://api.dataforseo.com/v3/on_page/summary/${taskId}`,
          auth: {
            username: import.meta.env.VITE_API_USERNAME,
            password: import.meta.env.VITE_API_PASSWORD,
          },
          headers: {
            "content-type": "application/json",
          },
        }).then((response) => {
          if (
            response &&
            response.data &&
            response.data.tasks &&
            response.data.tasks.length > 0 &&
            response.data.tasks[0].result &&
            response["data"]["tasks"][0]["result"][0]["crawl_progress"] !==
              "finished"
          ) {
            setTimeout(fetchSummary, 15000);
          } else {
            summery_data.setSummaryData({
              summary_data_retrieved: "ready",
              domain_name:
                response["data"]["tasks"][0]["result"][0]["domain_info"][
                  "name"
                ],
              domain_ip:
                response["data"]["tasks"][0]["result"][0]["domain_info"]["ip"],
              started_crawling:
                response["data"]["tasks"][0]["result"][0]["domain_info"][
                  "crawl_start"
                ],
              crawled_pages:
                response["data"]["tasks"][0]["result"][0]["crawl_status"][
                  "pages_crawled"
                ],
              ssl_certificate:
                response["data"]["tasks"][0]["result"][0]["domain_info"][
                  "checks"
                ]["ssl"],
              sitemap:
                response["data"]["tasks"][0]["result"][0]["domain_info"][
                  "checks"
                ]["sitemap"],
              robots_txt:
                response["data"]["tasks"][0]["result"][0]["domain_info"][
                  "checks"
                ]["robots_txt"],
              http2:
                response["data"]["tasks"][0]["result"][0]["domain_info"][
                  "checks"
                ]["http2"],
              links_internal:
                response["data"]["tasks"][0]["result"][0]["page_metrics"][
                  "links_internal"
                ],
              links_external:
                response["data"]["tasks"][0]["result"][0]["page_metrics"][
                  "links_external"
                ],
              duplicate_title:
                response["data"]["tasks"][0]["result"][0]["page_metrics"][
                  "duplicate_title"
                ],
              duplicate_content:
                response["data"]["tasks"][0]["result"][0]["page_metrics"][
                  "duplicate_content"
                ],
              broken_links:
                response["data"]["tasks"][0]["result"][0]["page_metrics"][
                  "broken_links"
                ],
              broken_resources:
                response["data"]["tasks"][0]["result"][0]["page_metrics"][
                  "broken_resources"
                ],
              onpage_score:
                response["data"]["tasks"][0]["result"][0]["page_metrics"][
                  "onpage_score"
                ],
              non_indexable:
                response["data"]["tasks"][0]["result"][0]["page_metrics"][
                  "non_indexable"
                ],
              canonical:
                response["data"]["tasks"][0]["result"][0]["page_metrics"][
                  "checks"
                ]["canonical"],
              duplicate_meta_tags:
                response["data"]["tasks"][0]["result"][0]["page_metrics"][
                  "checks"
                ]["duplicate_meta_tags"],
              irrelevant_meta_keywords:
                response["data"]["tasks"][0]["result"][0]["page_metrics"][
                  "checks"
                ]["irrelevant_meta_keywords"],
              no_favicon:
                response["data"]["tasks"][0]["result"][0]["page_metrics"][
                  "checks"
                ]["no_favicon"],
              no_image_alt:
                response["data"]["tasks"][0]["result"][0]["page_metrics"][
                  "checks"
                ]["no_image_alt"],
              no_image_title:
                response["data"]["tasks"][0]["result"][0]["page_metrics"][
                  "checks"
                ]["no_image_title"],
              seo_friendly_url:
                response["data"]["tasks"][0]["result"][0]["page_metrics"][
                  "checks"
                ]["seo_friendly_url"],
              lorem_ipsum:
                response["data"]["tasks"][0]["result"][0]["page_metrics"][
                  "checks"
                ]["lorem_ipsum"],
              is_orphan_page:
                response["data"]["tasks"][0]["result"][0]["page_metrics"][
                  "checks"
                ]["is_orphan_page"],
              has_render_blocking_resources:
                response["data"]["tasks"][0]["result"][0]["page_metrics"][
                  "checks"
                ]["has_render_blocking_resources"],
            });
            SettaskId("");
          }
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchSummary();
  }, [taskId, summery_data]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="text-start">
        <div className="font-light text-white text-xl mt-2">
          Check the SEO Performance
        </div>
      </div>
      <Input
        id="url"
        type="text"
        label="URL"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  return (
    <Modal
      disabled={loading}
      isOpen={modalstate.isOpen}
      title="SEO"
      actionLabel="Continue"
      onclose={modalstate.onClose}
      body={bodyContent}
      onSubmit={handleSubmit(onsubmit)}
    />
  );
};

export default Seo_modal;
