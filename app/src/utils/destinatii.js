// ===== Exercițiul 1 =====
// a) Listă cu numele orașelor (.map)
export const getOrase = (list) => list.map((d) => d.oras);

// b) Destinațiile nevizitate (.filter)
export const getNevizitate = (list) => list.filter((d) => !d.vizitat);

// c) Totalul zilelor (.reduce cu valoare inițială 0)
export const totalZile = (list) => list.reduce((total, d) => total + d.zile, 0);

// d) Formatarea unei singure destinații
export const formatDestinatie = ({ oras, tara, zile, vizitat }) =>
  `[${vizitat ? 'x' : ' '}] ${oras}, ${tara} (${zile} zile)`;

// e) Numărul de destinații pe fiecare țară (.reduce)
export const numarPeTara = (list) =>
  list.reduce((acc, { tara }) => ({
    ...acc,
    [tara]: (acc[tara] ?? 0) + 1
  }), {});

// f) Lista ordonată descrescător după zile pe o copie a listei
export const sortDupaZile = (list) => [...list].sort((a, b) => b.zile - a.zile);

// ===== Exercițiul 2 =====
// Inversare proprietate vizitat pe baza id-ului
export const marcheazaVizitat = (list, id) =>
  list.map((d) => (d.id === id ? { ...d, vizitat: !d.vizitat } : d));

// Adăugare destinație la final fără mutarea listei inițiale
export const adaugaDestinatie = (list, d) => [...list, d];

// Ștergere destinație după id
export const stergeDestinatie = (list, id) => list.filter((d) => d.id !== id);