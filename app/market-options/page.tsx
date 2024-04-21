"use client";

import Image from "next/image";
import Link from "next/link";
import { useReducer, useState } from "react";

// our own options
const marketOptions = ["Stock market", "Cryptocurrency", "Bond market "];
const companyOptions = [
  ["Tesla", "Apple", "Microsoft"],
  ["Bitcoin", "Etherium", "Solana"],
  ["United States 10-year bond yield", "Total world bond"],
];
const timescaleOptions = ["24 hours", "7 days", "14 days"];

const markets = [];
const companies = [];

for (let i = 0; i < marketOptions.length; i++) {
  markets.push({ id: `market-${i}`, index: i, name: marketOptions[i] });
}
markets.forEach((item) => {
  for (let i = 0; i < companyOptions.length; i++) {
    companies.push({
      id: `${item.id}-company-${i}`,
      name: companyOptions[item.index][i],
      index: i,
      market: item.id,
    });
  }
});

const record = {
  market: markets[0].name,
  company: companies[0].name,
};

// Updated to use a common structure for reducer, also kept it pure so it can be moved out of component
const selectsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "update_market": {
      const newcompany = payload.companies.find(
        (c) => c.market === payload.value,
      ).id;
      return {
        market: payload.value,
        company: newcompany,
      };
    }
    case "update_company": {
      return {
        ...state,
        company: payload.value,
      };
    }

    default:
      return { ...state };
  }
};

// Selects component
export const SelectList = ({ record, onSave, markets, companies }) => {
  const [selects, dispatchSelects] = useReducer(selectsReducer, record);
  const filteredCompanies = companies.filter(
    (c) => c.market === selects.market,
  );

  return (
    <div>
      <select
        value={selects.market}
        onChange={(e) =>
          dispatchSelects({
            type: "update_market",
            payload: { value: e.target.value, companies },
          })
        }
      >
        {markets.map((p) => (
          <option key={p.id} value={p.id} name={p.name}>
            {p.name}
          </option>
        ))}
      </select>

      <select
        value={selects.company}
        onChange={(e) =>
          dispatchSelects({
            type: "update_company",
            payload: { value: e.target.value },
          })
        }
      >
        {filteredCompanies.map((c) => (
          <option key={c.id} value={c.id} name={c.name}>
            {c.name}
          </option>
        ))}
      </select>

      <button onClick={() => onSave(selects)}>SAVE</button>
    </div>
  );
};

export default function Home() {
  const [saved, setSaved] = useState(null);

  return (
    <main>
      <div>
        <SelectList
          record={record}
          onSave={(savedObj) => setSaved(savedObj)}
          markets={markets}
          companies={companies}
        />
        {saved ? (
          <div>
            {saved?.market && <p>{`Saved market: ${saved.market}`}</p>}
            {saved?.company && <p>{`Saved company: ${saved.company}`}</p>}
          </div>
        ) : (
          <p>No saved result yet</p>
        )}
      </div>

      <form>
        <div className="bg-white my-8 p-6 mb-0">
          <div>
            <h2 className="process-text">Step 1</h2>
            <label htmlFor="market" className="boldtitle text-primary">
              {" "}
              What market are you interested in?
            </label>
            <div className="px-16 py-8">
              <select
                id="market"
                className="x-xl bf-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option selected>Choose a market</option>
                <option value="stock">FTSE100</option>
                <option value="bond">S&P500</option>
                <option value="crypto">Cryptocurrency</option>
              </select>
            </div>
          </div>

          <div>
            <h2 className="process-text">Step 2</h2>
            <label htmlFor="company" className="boldtitle text-primary">
              {" "}
              What company are you interested in?
            </label>
            <div className="px-16 py-8">
              <select
                id="market"
                className="x-xl bf-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option selected>Choose a company</option>
                <option value="stock">Barclays</option>
                <option value="bond">ARM Holdings</option>
                <option value="crypto">BAE Systems</option>
              </select>
            </div>
          </div>

          <div>
            <h2 className="process-text">Step 3</h2>
            <label htmlFor="market" className="boldtitle text-primary">
              {" "}
              What time-period are you interested in?
            </label>
            <div className="px-16 py-8">
              <select
                id="market"
                className="x-xl bf-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option selected>Select Time Period</option>
                <option value="day">Last 24 hrs </option>
                <option value="week">Last 7 days</option>
                <option value="month">Last month</option>
                <option value="quarter">Last quarter</option>
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
