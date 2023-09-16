import Seo_modal from "./components/Modal/Seo_modal";
import Button from "./components/Button/Button";
import useModal from "./hooks/useModalOpen";
import Seo_info from "./components/SEO_INFO";
import useSummary from "./hooks/summeryDataStore";

function App() {
  const useModalstate = useModal();
  const summery = useSummary();
  return (
    <>
      <Seo_modal />
      {summery.summaryData.summary_data_retrieved === "loading" ? (
        <div className="h-screen flex items-center justify-center">
          <img src="/src/assets/loader.gif" alt="Loading animation" />
        </div>
      ) : (
        <></>
      )}
      {summery.summaryData.summary_data_retrieved === "ready" ? (
        <Seo_info />
      ) : (
        <div className=" h-screen flex items-center justify-center  ">
          <div className="w-[30%]">
            <Button label="Seo Score" onClick={() => useModalstate.onOpen()} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
