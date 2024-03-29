import React, { useEffect, useState } from "react";
import { getData } from "./axios";
import "./App.css";
const Bai1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from an API or perform any side effects here
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getData();

      setData(response.data.slice(0, 5));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="cover">
      {data &&
        data.map((country) => (
          <div className="bai1" key={country.name.common}>
            <div className="name">{country.name.common}</div>
            <img
              className="bai1"
              src={country.flags.svg}
              alt={country.name.common}
            />
          </div>
        ))}
    </div>
  );
};
export default Bai1;
