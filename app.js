const cardsEl = document.getElementById('cards');
const searchEl = document.getElementById('search');
const catEl = document.getElementById('filter-category');
const statusEl = document.getElementById('filter-status');
const countEl = document.getElementById('results-count');
const emptyEl = document.getElementById('empty');

// Build filters dynamically
const categories = ['All', ...new Set(DAPPS.map(d => d.category).filter(Boolean))];
const statuses   = ['All', ...new Set(DAPPS.map(d => d.status).filter(Boolean))];

catEl.innerHTML = categories.map(c => `<option value="${c}">${c}</option>`).join('');
statusEl.innerHTML = statuses.map(s => `<option value="${s}">${s}</option>`).join('');

function makeCard(d) {
  const card = document.createElement('div');
  card.className = 'card';

  const top = document.createElement('div');
  top.className = 'top';
  const img = document.createElement('img');
  img.className = 'logo';
  img.src = d.logoUrl;
  img.alt = d.name + " logo";

  const titleWrap = document.createElement('div');
  const h = document.createElement('h3');
  h.className = 'name';
  h.textContent = d.name;
  const meta = document.createElement('div');
  meta.className = 'meta';
  meta.textContent = `${d.category} • ${d.status}`;

  titleWrap.appendChild(h);
  titleWrap.appendChild(meta);
  top.appendChild(img);
  top.appendChild(titleWrap);

  const desc = document.createElement('p');
  desc.className = 'desc';
  desc.textContent = d.description;

  const chips = document.createElement('div');
  chips.className = 'chips';
  (d.tags || []).forEach(tag => {
    const span = document.createElement('span');
    span.className = 'chip';
    span.textContent = tag;
    chips.appendChild(span);
  });

  const link = document.createElement('a');
  link.href = d.websiteUrl;
  link.target = "_blank";
  link.className = 'btn';
  link.textContent = "Launch dApp";

  card.appendChild(top);
  card.appendChild(desc);
  card.appendChild(chips);
  card.appendChild(link);

  return card;
}

function render() {
  const q = searchEl.value.toLowerCase();
  const cat = catEl.value;
  const status = statusEl.value;

  const filtered = DAPPS.filter(d => {
    const matchesText = [d.name, d.description, ...(d.tags||[])].join(' ').toLowerCase().includes(q);
    const matchesCat = cat === 'All' || d.category === cat;
    const matchesStatus = status === 'All' || d.status === status;
    return matchesText && matchesCat && matchesStatus;
  });

  cardsEl.innerHTML = '';
  if(filtered.length === 0) {
    emptyEl.style.display = 'block';
  } else {
    emptyEl.style.display = 'none';
    filtered.forEach(d => cardsEl.appendChild(makeCard(d)));
  }

  countEl.innerHTML = `<span class="count">${filtered.length}</span> project${filtered.length === 1 ? '' : 's'} shown`;
}

searchEl.addEventListener('input', render);
catEl.addEventListener('change', render);
statusEl.addEventListener('change', render);

render();
