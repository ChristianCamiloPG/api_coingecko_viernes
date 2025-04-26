let criptos = [];
let favoritos = [];

async function conexionLista() {
  const loader = document.getElementById('loader');
  loader.classList.remove('hide');

  try {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1');
    const data = await res.json();
    criptos = data;

    setTimeout(() => {
      loader.classList.add('hide');
      mostrarLista(criptos);
    }, 2000);

  } catch (error) {
    console.error('Error cargando datos:', error);
    document.getElementById('app').innerHTML = '<p>Error cargando datos de la API.</p>';
  }
}

conexionLista();
