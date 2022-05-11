// This file is part of My Users App
// Copyright (C) 2020-2022 Sentry Club
//
// My Users App is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import { SortableTable } from "./SortableTable";

export const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // side-effects calling
      const result = await axios(import.meta.env.VITE_SERVICE_ADDRESS);

      console.log(result.data.results);
      setUsers(result.data.results);
    };

    fetchData();
  });

  // preparing the users table
  const tableColumns = useMemo(() => {
    return [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Username",
        accessor: "username",
      },
      {
        Header: "Email",
        accessor: "email",
      },
    ];
  });

  const tableData = useMemo(() => users, [users]);

  return <SortableTable columnsConfiguration={tableColumns} data={tableData} />;
};
