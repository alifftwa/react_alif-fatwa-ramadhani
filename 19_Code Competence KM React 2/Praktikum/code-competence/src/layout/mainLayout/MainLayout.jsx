import React from "react";

export default function MainLayout({ children }) {
  return (
    <div>
      <main>
        <div className="container mx-auto">
          <div className="px-3.5">{children}</div>
        </div>
      </main>
    </div>
  );
}
