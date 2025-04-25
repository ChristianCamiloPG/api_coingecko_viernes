let criptos = [];

async function conexionLista() {
  const loader = document.getElementById('loader');
  loader.classList.remove('hide'); // Mostrar el loader

  try {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1');
    const data = await res.json();
    criptos = data;
    mostrarLista(criptos);
  } catch (error) {
    console.error('Error cargando datos:', error);
    document.getElementById('app').innerHTML = '<p>Error cargando datos de la API.</p>';
  } finally {
    loader.classList.add('hide'); // Ocultar el loader
  }
}

conexionLista();
