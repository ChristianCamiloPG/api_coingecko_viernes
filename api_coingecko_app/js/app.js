let criptos = [];
let favoritos = [];
let listaActual = [];

async function conexionLista() {
  const loader = document.getElementById('loader');
  loader.classList.remove('hide');

  try {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1');
    const data = await res.json();
    criptos = data;
    listaActual = criptos;

    setTimeout(() => {
      loader.classList.add('hide');
      mostrarControles();
      renderLista();
    }, 2000);

  } catch (error) {
    console.error('Error cargando datos:', error);
    document.getElementById('app').innerHTML = '<p>Error cargando datos de la API.</p>';
  }
}

conexionLista();

function mostrarControles() {
  document.getElementById('controls').style.display = 'flex';
  document.getElementById('search').addEventListener('input', renderLista);
  document.getElementById('priceFilter').addEventListener('change', renderLista);
}
