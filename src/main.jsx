// This file is part of My Users App
// Copyright (C) 2020-2022 Sentry Club
//
// My Users App is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import ReactDOM from "react-dom/client";

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

import "semantic-ui-css/semantic.min.css";

import { App } from "./App";

Sentry.init({
  dsn: "",
  integrations: [new BrowserTracing()],

  beforeSend(event, hint) {
    // Check if it is an exception, and if so, show the report dialog
    if (event.exception) {
      Sentry.showReportDialog({ eventId: event.event_id });
    }
    return event;
  },

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
