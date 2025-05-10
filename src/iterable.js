let range = {from : 0, to: 5};
range[Symbol.iterator] = function () {
    let current = this.from;
    const end = this.to;

    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      }
    };
}

for (let num of range) {
  console.log(num); // 0 1 2 3 4 5
}