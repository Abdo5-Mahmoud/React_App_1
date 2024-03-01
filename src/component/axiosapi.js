import axios from "axios";
import React, { useEffect, useState } from "react";

export function Axiosapi(data) {
  const [users, setusers] = useState([]);
  const [load, setload] = useState(null);
  const [error, seterror] = useState(null);

  useEffect(() => {
    setload(true);
    axios
      .get(data)
      .then((da) => {
        setload(false);
        setusers(da.data);
      })
      .catch((err) => {
        setload(false);
        seterror(err);
      });
  }, []);

  return { users, error, load };
}
