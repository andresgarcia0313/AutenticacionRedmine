const getData = async () => {
  try {
    const res = await fetch('https://gestionar.ingeniumcodex.com/issues.json?key=');
    if (!res.ok) throw new Error(`Error en la solicitud: ${res.statusText}`);
    console.log((await res.json()));
  } catch (err) { console.error(err); }
}
getData();