export default function ThirdContent() {
  return (
    <div className="relative bg-[url('/kitchen-pics/k7.jpg')] bg-cover bg-center h-96 w-full px-7 pt-16">
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative flex flex-col gap-5 justify-center items-center z-10">
        <div className="text-center font-extrabold text-3xl text-white font-jost">
          <h1>OUR COMMITMENT</h1>
        </div>

        <div className="text-center text-lg text-white font-jost leading-loose">
          <p>
            Cras et egestas justo. Integer egestas nibh nisi, sit amet hendrerit
            neque consequat ac. Nulla eu rhoncus ligula. Ut eget semper purus.
          </p>
        </div>
        <div>
          <button className="border text-xl uppercase text-white border-white w-48 h-12 hover:bg-white hover:text-black transition-all duration-300 ease-in-out font-semibold">
            <a href="#">Our process</a>
          </button>
        </div>
      </div>
    </div>
  );
}
