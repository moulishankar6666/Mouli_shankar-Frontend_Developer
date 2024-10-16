import Header from "../Header";

const Home = () => {
  return (
    <div className="sm:relative  w-full h-screen">
      <div className=" hidden h-full  sm:flex">
        <video loop autoPlay className=" object-cover object-left-top">
          <source
            src="https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/c4f4/4749/-c85c-4755-a1c0-4646ee276bd5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i1z3asm5klJaqOfw-UxCFvUZLAX35F11cGWF3zdtg-DSW5CX9k2CfqdMlBgIRX4nHWv94jDiZdTQw9otP5kyGdQiPolaPbctoGu~J4tB15IzrRxOhTyz5HtTjC0aXTkLojSqW-TxS0zLDdmtMQ7ie3FNXSw5DA4QttPHgFbbC5P~c7wgCRe7wrjiWob9uUHhNtpc4fqARZc2O59Y49dbvTOSbqcCsO5hO7vJ2fhlX2accEpzK8BQvgsynWZA0wKb~jeJbY3Wm61V6EmDaamWy4j8JwsGiYG1OCCuMQzHgDedk0ponjVdyiaH0F0cR~DZk3puPM3LPbUOQqDu39a4PQ__"
            type="video/mp4"
          />
        </video>
      </div>
      <div className=" sm:absolute top-0 left-0 w-full h-full z-100 bg-transparent">
        <Header />
        <div className="flex flex-col justify-center items-center w-full  pt-20 gap-3">
          <h1 className="w-40 text-3xl text-center text-white font-semibold  flex-wrap leading-9 sm:w-2/5">
            When Innovation Meets{"  "}
            <span className="bg-skyblue rounded-full px-2  text-black text-2xl ">
              Investment
            </span>
          </h1>

          <p className="w-60 text-skyblue text-center ">
            Empowering Trading Through Advanced Technology
          </p>
          <button
            type="button"
            className="cursor-pointer border w-30 bg-skyblue px-2 py-1 rounded-lg font-semibold  hover:-translate-y-2 transition shadow-lg hover:shadow-sky-900 sm:bg-black sm:text-white"
          >
            Open dApp
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
