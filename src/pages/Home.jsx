import React from 'react';

import { MainPage } from '../partials/MainPage';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Page content */}
      <main className="grow">
        <MainPage />
      </main>

    </div>
  );
}

