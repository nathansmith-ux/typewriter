const typewritter = function(string) {
  for (let i = 0; i < string.length; i++) {
    setTimeout(() => {
      process.stdout.write(string[i]);
      if (i === string.length - 1) {
        process.stdout.write('\n')
      }
    }, i * 50);
  }
}

typewritter("hello there from lighthouse labs");
