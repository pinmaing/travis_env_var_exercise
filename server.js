
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const architecture = process.env.ARCHITECTURE;
  while(true) {
    console.log(`${architecture} rock!`);
    await sleep(5000);
  }
}

main();
