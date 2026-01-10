export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: 'smooth', block: 'start' });

  try {
    window.history.replaceState(null, '', `#${id}`);
  } catch {
    window.location.hash = `#${id}`;
  }
};

