"use client";

import { useEffect, useState } from "react";

const adHtml = `<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <base target="_blank" />
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
    <script>
      document.addEventListener("click", function (event) {
        var link = event.target && event.target.closest ? event.target.closest("a[href]") : null;

        if (!link) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        parent.postMessage({ type: "external-link", url: link.href }, "*");
      }, true);
    </script>
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
