"use client";

import Image from "next/image";
import Link from "next/link";
import { useReducer, useState } from "react";

// our own options
const marketOptions = ["Stock market", "Cryptocurrency", "Bond market "];
const companyOptions = [
  ["Tesla", "Apple", "Microsoft"],
  ["Bitcoin", "Etherium", "Solana"],
  ["United States 10-year bond yield", "Total world"],
];
const timescaleOptions = ["24 hours", "7 days", "14 days"];

const markets = [];
const companies = [];
const timescales = [];

for (let i = 0; i < marketOptions.length; i++) {
  markets.push({ id: `market-${i}`, index: i, name: marketOptions[i] });
}

markets.forEach((item) => {
  for (let i = 0; i < companyOptions.length; i++) {
    companies.push({
      id: `${item.id}-company-${i}`,
      name: companyOptions[item.index][i],
      index: i,
      market: item.name,
    });
  }
});

for (let i = 0; i < timescaleOptions.length; i++) {
  timescales.push({ id: `timescale-${i}`, name: timescaleOptions[i] });
}

const record = {
  market: markets[0].name,
  company: companies[0].name,
  timescale: timescales[0].name,
};

// Updated to use a common structure for reducer, also kept it pure so it can be moved out of component
const selectsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "update_market": {
      const newcompany = payload.companies.find(
        (c) => c.market === payload.value,
      ).name;
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
    case "update_timescale": {
      return {
        ...state,
        timescale: payload.value,
      };
    }

    default:
      return { ...state };
  }
};

// Selects component
export const SelectList = ({
  record,
  onSave,
  markets,
  companies,
  timescales,
}) => {
  const [selects, dispatchSelects] = useReducer(selectsReducer, record);

  const filteredCompanies = companies.filter(
    (c) => c.market === selects.market,
  );

  return (
    <div className="bg-white my-8 p-6 mb-0">
      <div>
        <h2 className="process-text">Step 1</h2>
        <label htmlFor="market" className="boldtitle text-primary">
          {" "}
          What market are you interested in finding out about?
        </label>
        <select
          className="x-xl bf-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          value={selects.market}
          onChange={(e) =>
            dispatchSelects({
              type: "update_market",
              payload: { value: e.target.value, companies },
            })
          }
        >
          {markets.map((p) => (
            <option key={p.id} value={p.name} name={p.name}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h2 className="process-text">Step 2</h2>
        <label htmlFor="market" className="boldtitle text-primary">
          {" "}
          Which companies are you interested in finding out about?
        </label>
        <select
          className="x-xl bf-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          value={selects.company}
          onChange={(e) =>
            dispatchSelects({
              type: "update_company",
              payload: { value: e.target.value },
            })
          }
        >
          {filteredCompanies.map((c) => (
            <option key={c.id} value={c.name} name={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h2 className="process-text">Step 3</h2>
        <label htmlFor="timescale" className="boldtitle text-primary">
          {" "}
          What timescale are you interested in finding out about?
        </label>
        <select
          className="x-xl bf-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          value={selects.timescale}
          onChange={(e) =>
            dispatchSelects({
              type: "update_timescale",
              payload: { value: e.target.value },
            })
          }
        >
          {timescales.map((g) => (
            <option key={g.id} value={g.name} name={g.name}>
              {g.name}
            </option>
          ))}
        </select>
      </div>

      {/* <button onClick={() => onSave(selects)}>SAVE</button> */}
    </div>
  );
};

export default function Home() {
  //   const [saved, setSaved] = useState(null);

  return (
    <main>
      <form>
        <SelectList
          record={record}
          //   onSave={(savedObj) => setSaved(savedObj)}
          markets={markets}
          companies={companies}
          timescales={timescales}
        />
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

//to call market state(name) - saved.maket
//to call company state(name) - saved.company
//to call timescale state(name) - saved.timescale
