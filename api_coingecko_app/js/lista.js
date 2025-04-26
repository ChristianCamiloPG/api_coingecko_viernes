function mostrarLista(lista) {
  const app = document.getElementById('app');
  app.innerHTML = `
    <h1>Lista Criptomonedas</h1>
    <ul>
      ${lista.map(coin => `
        <li>
          ${coin.name} - $${coin.current_price.toLocaleString()}
          <button onclick="toggleFavorito('${coin.id}')">
            ${favoritos.includes(coin.id) ? '★' : '☆'}
          </button>
        </li>`).join('')}
    </ul>
  `;
}

function toggleFavorito(id) {
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter(f => f !== id);
  } else {
    favoritos.push(id);
  }
  mostrarLista(criptos);
}

function mostrarFavoritos() {
  const favs = criptos.filter(c => favoritos.includes(c.id));
  mostrarLista(favs);
}

function mostrarGanadoras() {
  const ganadoras = [...criptos].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h).slice(0, 10);
  mostrarLista(ganadoras);
}

function mostrarPerdedoras() {
  const perdedoras = [...criptos].sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h).slice(0, 10);
  mostrarLista(perdedoras);
}

function mostrarEstables() {
  const estables = criptos.filter(c => 
    ["tether", "usd-coin", "binance-usd", "dai"].includes(c.id)
  );
  mostrarLista(estables);
}
