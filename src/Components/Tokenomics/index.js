import TokenomicsImg from "../Images/Tokenomics.jpg"; //Tekenomics img

const Tokenomics = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5 p-5">
      <h1 className="text-white text-3xl font-bold">Tokenomics</h1>
      <div className=" w-full flex flex-col items-center gap-5 sm:flex-row sm:justify-between ">
        <img
          src={TokenomicsImg}
          alt="Tokenomics"
          className="w-80 h-100 rounded-xl"
        />
        <div className="w-full flex flex-col gap-3 sm:w-6/12 lg:w-5/12">
          <div className="bg-cardbg w-full text-white flex  gap-3  pl-5 py-3 rounded-2xl ">
            <ul className="w-2/5">
              <li>Name</li>
              <li>Token Name</li>
              <li>Token standared</li>
              <li>Blockchain</li>
              <li>Total Supply</li>
              <li>Tax</li>
            </ul>
            <ul>
              <li>: EthAi</li>
              <li>: $EthAi</li>
              <li>: ERC20</li>
              <li>: Ethereum</li>
              <li>: 100 Million</li>
              <li>: 5%/5%</li>
            </ul>
          </div>
          <div className="bg-cardbg w-full text-white flex  gap-3 pl-5 py-3 rounded-2xl">
            <ul className="w-2/5">
              <li>Team</li>
              <li>Marketing</li>
              <li>Liquidity Pool</li>
            </ul>
            <ul>
              <li>: 35%</li>
              <li>: 5%</li>
              <li>: 90%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
