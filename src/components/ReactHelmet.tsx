import { Helmet } from "react-helmet";

export default function ReactHelmet() {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="icon" href="/logo-icon.svg" />
      <title>SciBridge</title>
    </Helmet>
  );
}
