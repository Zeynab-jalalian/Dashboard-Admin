import SectionTitle from "../../components/common/SectionTitle";

function Home() {
  const CTAButton = () => {
    const clickHandler = () => {
      console.log("clicked");
    };
    return (
      <button
        onClick={clickHandler}
        className="primary-bg px-4 py-2 text-sm rounded-md cursor-pointer hover:opacity-90 text-white"
      >
        ایجاد محصول
      </button>
    );
  };
  return (
    <>
      <SectionTitle title="داشبورد" Buttons={<CTAButton />} />
      {/* <Summaries /> */}
      <div className="">
        {/* <DetailsCharts />
        <ProductsTable />
        <QuickOverview /> */}
      </div>
    </>
  );
}

export default Home;
