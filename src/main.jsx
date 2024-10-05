import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React from 'react'
// import * as Sentry from "@sentry/react"

// Sentry.init({
//   dsn: "https://fcac04853352ef16c40108785981f908@o4508009590816768.ingest.us.sentry.io/4508009592324096",
//   integrations: [
//     Sentry.browserTracingIntegration(),
//     Sentry.reactRouterV6BrowserTracingIntegration(
//       {
//         useEffect:useEffect,
//       }
//     ),
//     Sentry.replayIntegration(),
//   ],
//   // Tracing
//   tracesSampleRate: 1.0,
//   tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
//   // Session Replay
//   replaysSessionSampleRate: 0.1,
//   replaysOnErrorSampleRate: 1.0,
// });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
