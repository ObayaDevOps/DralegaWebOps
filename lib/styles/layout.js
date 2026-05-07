export function grid12(extra) {
  return {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: 24,
    ...extra,
  };
}
