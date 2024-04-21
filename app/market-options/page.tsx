"use client";

import Image from "next/image";
import Link from "next/link";
import { useReducer, useState } from "react";

// Test data
const planets = [];
const countries = [];
const cities = [];
for (let i = 0; i < 6; i++) {
  planets.push({ id: `planet-${i}`, name: `planet-${i}` });
}
planets.forEach((item) => {
  for (let i = 0; i < 3; i++) {
    countries.push({
      id: `${item.id}-country-${i}`,
      name: `${item.id}-country-${i}`,
      planet: item.id,
    });
  }
});
countries.forEach((item) => {
  for (let i = 0; i < 3; i++) {
    cities.push({
      id: `${item.id}-city-${i}`,
      name: `${item.id}-city-${i}`,
      country: item.id,
    });
  }
});
const record = {
  planet: planets[0].id,
  country: countries[0].id,
  city: cities[0].id,
};

// Updated to use a common structure for reducer, also kept it pure so it can be moved out of component
const selectsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "update_planet": {
      const newCountry = payload.countries.find(
        (c) => c.planet === payload.value,
      ).id;
      return {
        planet: payload.value,
        country: newCountry,
        city: payload.cities.find((c) => c.country === newCountry).id,
      };
    }
    case "update_country": {
      return {
        ...state,
        country: payload.value,
        city: payload.cities.find((c) => c.country === payload.value).id,
      };
    }
    case "update_city": {
      return {
        ...state,
        city: payload.value,
      };
    }
    default:
      return { ...state };
  }
};

// Selects component
export const SelectList = ({ record, onSave, planets, countries, cities }) => {
  const [selects, dispatchSelects] = useReducer(selectsReducer, record);
  const filteredCountries = countries.filter(
    (c) => c.planet === selects.planet,
  );
  const filteredCities = cities.filter((c) => c.country === selects.country);

  return (
    <div>
      <select
        value={selects.planet}
        onChange={(e) =>
          dispatchSelects({
            type: "update_planet",
            payload: { value: e.target.value, countries, cities },
          })
        }
      >
        {planets.map((p) => (
          <option key={p.id} value={p.id} name={p.name}>
            {p.name}
          </option>
        ))}
      </select>

      <select
        value={selects.country}
        onChange={(e) =>
          dispatchSelects({
            type: "update_country",
            payload: { value: e.target.value, cities },
          })
        }
      >
        {filteredCountries.map((c) => (
          <option key={c.id} value={c.id} name={c.name}>
            {c.name}
          </option>
        ))}
      </select>

      <select
        value={selects.city}
        onChange={(e) =>
          dispatchSelects({
            type: "update_city",
            payload: { value: e.target.value },
          })
        }
      >
        {filteredCities.map((c) => (
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
          planets={planets}
          countries={countries}
          cities={cities}
        />
        {saved ? (
          <div>
            {saved?.planet && <p>{`Saved planet: ${saved.planet}`}</p>}
            {saved?.country && <p>{`Saved country: ${saved.country}`}</p>}
            {saved?.city && <p>{`Saved city: ${saved.city}`}</p>}
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
