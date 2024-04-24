import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <article className="h-68 flex flex-col p-10 justify-center items-center rounded-md my-8 bg-primary ">
        <h1 className="text-white text-4xl ">
          Select the market and company, Ai-driven investment buddy helps you
          identify the market reaction
        </h1>

        <Image
          alt="process-horizontal"
          src="/process_3_icon.png"
          width={300}
          quality={100}
          height={50}
        />
      </article>

      <div className="bg-white my-8 p-6 mb-0">
        <h2 className="boldtitle">Process</h2>
        <div className="grid grid-cols-6">
          <div className="col-span-1 p-8">
            <Image
              alt="process-verticle"
              src="/process_3_verticle.png"
              width={80}
              quality={100}
              height={15}
            />
          </div>
          <div className="col-span-5 grid grid-rows-3 items-center">
            <p className="process-text">
              {" "}
              Pick a market, company and time-scale
            </p>
            <p className="process-text">
              Choose the report or stock-picking suggestion through AI sentiment
              analysis
            </p>
            <p className="process-text"> Get your result!</p>
          </div>
        </div>
      </div>
      <div className="p-6 bg-white">
        <Link href="/market-options">
          <button className="btn-large p-0 m-0">
            Yup, I'm ready to start!
          </button>
        </Link>
      </div>
    </main>
  );
}
