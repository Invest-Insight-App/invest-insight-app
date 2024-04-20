import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <form>
        <div className="bg-white my-8 p-6 mb-0">
          <div>
            <h2 className="process-text">Step 1</h2>
            <label htmlFor="market" className="boldtitle text-primary">
              {" "}
              What market are you interested in finding out about?
            </label>
            <div className="px-16 py-8">
              <select
                id="market"
                className="x-xl bf-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option selected>Choose a market</option>
                <option value="stock">Stock market</option>
                <option value="bond">Bond market</option>
                <option value="crypto">Cryptocurrency</option>
              </select>
            </div>
          </div>

          <div>
            <h2 className="process-text">Step 1</h2>
            <label htmlFor="market" className="boldtitle text-primary">
              {" "}
              What market are you interested in finding out about?
            </label>
            <div className="px-16 py-8">
              <select
                id="market"
                className="x-xl bf-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option selected>Choose a market</option>
                <option value="stock">Stock market</option>
                <option value="bond">Bond market</option>
                <option value="crypto">Cryptocurrency</option>
              </select>
            </div>
          </div>

          <div>
            <h2 className="process-text">Step 1</h2>
            <label htmlFor="market" className="boldtitle text-primary">
              {" "}
              What market are you interested in finding out about?
            </label>
            <div className="px-16 py-8">
              <select
                id="market"
                className="x-xl bf-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option selected>Choose a market</option>
                <option value="stock">Stock market</option>
                <option value="bond">Bond market</option>
                <option value="crypto">Cryptocurrency</option>
              </select>
            </div>
          </div>
        </div>
      </form>
      <div className="p-6 bg-white grid grid-cols-5">
        <Link href="/" className="col-start-1 col-end-3">
          <button className="btn-large p-0 m-0 col-start-1 col-end-2">
            {" "}
            Previous{" "}
          </button>
        </Link>

        <Link href="/type-options" className="col-start-4 col-end-6">
          <button className="btn-large p-0 m-0  "> Next </button>
        </Link>
      </div>
    </main>
  );
}
