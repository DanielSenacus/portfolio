import React from "react";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar, Loader } from "./components";
import "./App.scss";

const App = () => {
  const [loading, setLoading] = React.useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div className='app'>
      {loading && <Loader></Loader>}
      <Navbar />
      <Header />
      <About />
      {/* <Work /> */}
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
