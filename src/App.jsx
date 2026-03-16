import React from "react";
import Header from "./assets/components/Header/Header";
import SobreMi from "./assets/components/SobreMi/SobreMi";

const App = () => {
  return (
    <div className="bg-gray-900">
      <Header />
      <section className="grid grid-cols-3 gap-4 max-w-7xl mx-auto px-4 py-10 text-white">
        <div className="col-span-2">
          <SobreMi />
        </div>
      </section>
    </div>
  );
};

export default App;
