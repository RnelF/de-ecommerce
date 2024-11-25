import Image from "next/image";

export default function SecondContent() {
  return (
    <div className=" relative flex flex-col gap-8 justify-center items-center w-full px-9">
      <div className="w-[320px] h-[210px] overflow-hidden flex items-center justify-center -mt-10 mb-20 rounded-3xl ">
        <Image
          src="/kitchen-pics/k10.jpg"
          alt="img"
          width={600}
          height={400}
          objectFit="cover"
        />
      </div>
      <div className="w-64">
        <h1 className="text-charcoal text-2xl font-jost font-extrabold uppercase text-center">
          Lorem ipsum dolor sit amet, consectetur.
        </h1>
      </div>
      <div>
        <p className="text-center text-charcoal text-lg font-jost leading-loose">
          Mauris ullamcorper sapien metus, in luctus enim consequat sit amet.
          Vivamus congue ut erat at dictum. Proin ultricies elit in leo aliquet
          rhoncus. Duis eu auctor eros. Fusce euismod faucibus enim, in
          scelerisque arcu egestas sit amet. Morbi viverra sem non vestibulum
          imperdiet. Phasellus enim metus, porttitor et neque gravida, ultrices
          rhoncus orci. Duis pellentesque eget urna sit amet sollicitudin.
        </p>
      </div>

      <div className="w-[320px] h-[210px] overflow-hidden flex items-center justify-center mb-20 rounded-3xl ">
        <Image
          src="/kitchen-pics/k11.jpg"
          alt="img"
          width={600}
          height={400}
          objectFit="cover"
        />
      </div>
    </div>
  );
}
