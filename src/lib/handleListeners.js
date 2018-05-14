export default function (...listeners) {
  let events = { on: {} }

  for (const listenerList of listeners) {
    // ignore arrays
    if (Array.isArray(listenerList)) {
      continue;
    }

    // ignore if not an object
    if (typeof listenerList !== 'object') {
      continue;
    }

    Object.entries(listenerList).forEach(([name, listener]) => {
      events.on[name] = listener;
    })
  }

  return events;
}
