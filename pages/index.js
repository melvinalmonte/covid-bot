import Head from "next/head";

const Home = () => (
  <div className="app">
    <Head>
      <title>CoviBOT</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="column has-text-centered">
      <section className="hero custom-header">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Talk to CoviBOT! </h1>
          </div>
        </div>
      </section>
      <div>
        <div>
          <iframe
            width="500"
            height="500"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/3787d70f-39b6-4424-a333-b2bdee4f0da0"
          ></iframe>
        </div>
      </div>
    </main>

    <footer className="column has-text-centered custom-footer is-mobile">
      <p>
        Built with data from <strong>mathdroid </strong>{" "}
        <a href="https://github.com/mathdroid/covid-19-api" target="_blank">
          COVID-19 API
        </a>
      </p>
      <p>
        Powered by Google's{" "}
        <a href="https://dialogflow.com/" target="_blank">
          DialogFlow
        </a>
      </p>
    </footer>
  </div>
);

export default Home;
