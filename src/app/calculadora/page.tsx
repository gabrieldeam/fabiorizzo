// app/calculadora/page.tsx

import React from 'react';
import Script from 'next/script';

export const metadata = {
  title: 'Calculadora de Tempo de Contribuição',
};

export default function Calculadora() {
  return (
    <section style={{ padding: '5px 80px', textAlign: 'center', height: '100vh',backgroundColor: 'white' }}>
      <div
        id="cj-widget"
        data-src="https://app.calculojuridico.com.br/embedded/contribution_time_calculation_widgets/start?rel=lp"
        style={{ margin: '20px 0' }}
      ></div>
      <Script
        src="https://app.calculojuridico.com.br/script/contribution_time_widget.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
