const ipfsAPI = require('ipfs-api');
const ipfs = ipfsAPI('ipfs.infura.io', '5001', { protocol: 'https' });

async function deploy() {
  const result = await ipfs.util.addFromFs('./build', { recursive: true });
  const rootObject = result[result.length - 1];
  await ipfs.pin.add(rootObject.hash, { recursive: true } );

  console.log('Application deployed and pinned succesfully on hash: ' + rootObject.hash);
  console.log(`You can browse it now on: \n - http://localhost:8080/ipfs/${rootObject.hash} \n - https://ipfs.infura.io/ipfs/${rootObject.hash}`);
}

deploy();
