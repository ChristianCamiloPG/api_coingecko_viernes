function renderLista() {
  const searchValue = document.getElementById('search')?.value.toLowerCase() || "";
  const priceValue = document.getElementById('priceFilter')?.value || "all";

  let listaFiltrada = listaActual.filter(coin => 
    coin.name.toLowerCase().includes(searchValue)
  );

  if (priceValue !== "all") {
    listaFiltrada = listaFiltrada.filter(coin => coin.current_price >= Number(priceValue));
  }

  mostrarLista(listaFiltrada);
}

function mostrarLista(lista) {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div id="controls" class="controls">
      <input type="text" id="search" placeholder="Buscar criptomoneda..." value="${document.getElementById('search')?.value || ''}">
      <select id="priceFilter">
        <option value="all">Todos los precios</option>
        <option value="1000">Mayor a $1000</option>
        <option value="100">Mayor a $100</option>
        <option value="10">Mayor a $10</option>
      </select>
    </div>
    <h1>Criptomonedas</h1>
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

  document.getElementById('search').addEventListener('input', renderLista);
  document.getElementById('priceFilter').addEventListener('change', renderLista);
}

function toggleFavorito(id) {
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter(f => f !== id);
  } else {
    favoritos.push(id);
  }
  renderLista();
}

function renderTop() {
  listaActual = [...criptos];
  renderLista();
}

function renderFavoritos() {
  listaActual = criptos.filter(c => favoritos.includes(c.id));
  renderLista();
}

function renderGanadoras() {
  listaActual = [...criptos].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h).slice(0, 10);
  renderLista();
}

function renderPerdedoras() {
  listaActual = [...criptos].sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h).slice(0, 10);
  renderLista();
}

function renderEstables() {
  listaActual = criptos.filter(c => 
    ["tether", "usd-coin", "binance-usd", "dai"].includes(c.id)
  );
  renderLista();
}
