const greeting = (delay, counter) =>
  setInterval(() => {
    console.log('Hello World. ' + delay);
    counter += 1
    if(counter === 5) {
        delay += 100
        counter = 0
    }
  }, delay);

greeting(100, 0);

