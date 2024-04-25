import { useState } from 'react';

function useDate() {
  const [date, setDate] = useState("YYYY-MM-DD");
  const [dateObject, setDateObject] = useState(new Date());

  const formatDate = (date: any) => {
    const dateObject = new Date(date);
    setDateObject(dateObject)

    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    setDate(formattedDate)
  }

  return {
    formatDate,
    setDate,
    date,
    setDateObject,
    dateObject
  };
}

export default useDate;