export function onRemove(id, setCart) {
  setCart((prev) => {
    const next = { ...prev };
    delete next[id];
    return next;
  });
}
