"use client";

import { useEffect, useState } from "react";

const adHtml = `<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      html,
      body {
        margin: 0;
        min-height: 100%;
        overflow: hidden;
        background: transparent;
      }

      body {
        display: flex;
        justify-content: center;
        align-items: flex-start;
      }

      a,
      img {
        display: block;
      }

      img {
        width: min(100vw, 500px);
        height: auto;
        border: 0;
      }
    </style>
  </head>
  <body>
    <script type="text/javascript" src="https://js.thrncdn1.com/javascript.php?prefix=EtgF4_wjobVutv7iXV6HvmNd7ZgqdRLk&amp;media=695&amp;campaign=1"></script>
  </body>
</html>`;

export default function RexbetAdBanner() {
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    setSrcDoc(adHtml);
  }, []);

  return (
    <iframe
      title="Rexbet advertisement"
      srcDoc={srcDoc}
      className="h-full min-h-[250px] w-full max-w-[500px] border-0"
      sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
    />
  );
}
