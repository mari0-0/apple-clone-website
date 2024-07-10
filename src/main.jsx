import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import * as Sentry from "@sentry/react";

Sentry.init({
	dsn: "https://c730b2b1475a49d320273941ffef3eb3@o4507577476251648.ingest.de.sentry.io/4507577497223248",
	integrations: [
		Sentry.browserTracingIntegration(),

		Sentry.reactRouterV6BrowserTracingIntegration({
			useEffect: React.useEffect,
		}),
		Sentry.replayIntegration(),
	],
	tracesSampleRate: 1.0,
	tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0,
});

Sentry.metrics.increment("my_metric"),


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
