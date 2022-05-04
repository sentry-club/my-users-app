// This file is part of My Users App
// Copyright (C) 2020-2022 Sentry Club
//
// My Users App is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import { Button, Container, Dropdown, Header, Menu } from "semantic-ui-react";

import { UsersTable } from "./components";

export const App = () => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          My Users App | Example
        </Menu.Item>
        <Menu.Item as="a" href={"#"}>
          Home
        </Menu.Item>

        <Dropdown item simple text="Projects">
          <Dropdown.Menu>
            <Dropdown.Item
              as="a"
              href={"https://github.com/sentry-club/my-users-api"}
              target={"_blank"}
            >
              My Users API
            </Dropdown.Item>
            <Dropdown.Item
              as="a"
              href={"https://github.com/sentry-club/flask-example-basic"}
              target={"_blank"}
            >
              Flask Sentry Example
            </Dropdown.Item>
            <Dropdown.Item
              as="a"
              href={"https://github.com/sentry-club/my-site"}
              target={"_blank"}
            >
              InvenioRDM Sentry Instance
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

    <Container text style={{ marginTop: "7em" }}>
      <Header as="h1">My Users App | Sentry example</Header>
      <Button
        onClick={() => {
          return methodDoesNotExist();
        }}
      >
        Update table
      </Button>

      <UsersTable />
    </Container>
  </div>
);
