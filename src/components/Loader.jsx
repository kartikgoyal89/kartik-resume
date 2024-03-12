import React from "react";

function Loader() {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-primary">
      <div className="flex gap-5 text-3xl sm:text-2xl">
        <h1 className="text-5xl font-semibold k text-secondary">K</h1>
        <h1 className="text-5xl font-semibold g text-tertiary">G</h1>
      </div>
    </div>
  );
}

export default Loader;
