function mostrarLista(lista) {
  const app = document.getElementById('app');
  app.innerHTML = `
    <h1>Top 50 Criptomonedas</h1>
    <ul>
      ${lista.map(coin => `<li>${coin.name} - $${coin.current_price.toLocaleString()}</li>`).join('')}
    </ul>
  `;
}
