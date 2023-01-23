import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useContext } from "react";
import { NonceContext } from "./components/nonce-context";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const nonce = useContext(NonceContext);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
        <LiveReload nonce={nonce} />
        {/* Uncomment the `<script>` below to ensure the CSP policy prevented
            an inline script without nonce
        */}
        {/* <script
          dangerouslySetInnerHTML={{ __html: "alert('Should be prevented')" }}
        /> */}
      </body>
    </html>
  );
}
