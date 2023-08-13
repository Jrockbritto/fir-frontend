import fetchJson from "@lib/fetchJson";

import { Time } from "@models/time";

import { getTimes } from "@api/services/time/getTimes";
import { GetTimeResponse } from "@api/services/time/getTimes/typings";

import { TimeListingProps } from "./typings";

import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";

export function TimeListing(props: TimeListingProps) {
  const { user } = props;

  const [data, setData] = useState({ times: [], total: 0 } as GetTimeResponse);

  const handleData = async (page: number = 1) => {
    const data = await getTimes({
      userId: user.userData.id,
      token: user.token,
      queryParams: { page },
    });

    setData(data);
  };

  const handleValues = ({ times }: GetTimeResponse) =>
    times.map((value: Time, key) => {
      return (
        <h3 key={key}>
          {value.time.hours}H {value.time.minutes}M {value.time.seconds}S
        </h3>
      );
    });

  useEffect(() => {
    async function fetchData() {
      const data: GetTimeResponse = await fetchJson(
        `/api/time?page=1&token=${user.token}&userId=${user.userData.id}`,
        {
          method: "GET",
        },
      );
      console.log("i fire once");
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <h2>Histórico de registros</h2>
      <p>Exibindo 5 de 76 registros</p>
      {handleValues(data)}
      <Pagination
        onChange={(_, page) => handleData(page)}
        count={Math.ceil(data.total / 5)}
        variant="outlined"
        shape="rounded"
      />
    </>
  );
}
