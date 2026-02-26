function* roundRobinGenerator(items) {
  if (items.length === 0) return;
  
  let index = 0;
  while (true) {
    yield items[index];
    index = (index + 1) % items.length;
  }
}

function consumeWithTimeout(iterator, timeoutSec) {
  const startTime = Date.now();
  const endTime = startTime + (timeoutSec);
  let iteration = 0;

  console.log(`Обровка (ліміт: ${timeoutSec} мс)`);

  while (Date.now() < endTime) {
    const value = iterator.next().value;
    iteration++;
    const currentTime = new Date().toLocaleTimeString();
    console.log(`[%s] Ітерація N%d: Значення - %s`, currentTime, iteration, value);
  }
  console.log(`Всього ітерацій: ${iteration} (${timeoutSec} мс)`);
}

const colors = ["Red", "Green", "Blue", "Yellow"];
const colorIterator = roundRobinGenerator(colors);
consumeWithTimeout(colorIterator, 100);