import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h2>Desenvolvimento Front-End com Frameworks</h2>
      <h3>Mobile-First UI com React</h3>
      <h4>Diferença entre responsividade e adaptabilidade</h4>
      <p>
        A responsividade se refere à capacidade de um layout de se ajustar automaticamente a diferentes tamanhos de tela, garantindo que o conteúdo seja exibido de maneira ideal em qualquer dispositivo, seja desktop, tablet ou smartphone. Isso é geralmente alcançado com media queries e o uso de unidades de medida flexíveis.
      </p>
      <p>
        Por outro lado, a adaptabilidade envolve a criação de diferentes layouts ou versões específicas para cada tipo de dispositivo. Enquanto a responsividade se ajusta de forma contínua e fluida, a adaptabilidade prevê mudanças discretas e específicas dependendo do dispositivo, como um design específico para mobile e outro para desktop.
      </p>
      <p>
        A responsividade visa uma experiência mais fluida e universal, onde o conteúdo se reorganiza conforme o espaço disponível, enquanto a adaptabilidade pode resultar em experiências mais otimizadas, mas com a necessidade de manter mais de uma versão do layout.
      </p>
    </div>
  );
}

export default App;