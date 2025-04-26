function mostrarAcerca() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <h1>Acerca de</h1>
    <p>App de criptomonedas usando CoinGecko API.</p>
    <p>Desarrollador: <strong>Tu Nombre</strong></p>
    <p>Versión: <strong>1.0.0</strong></p>
    <img src="img/coingecko.png" alt="Logo" width="100">
  `;
}
