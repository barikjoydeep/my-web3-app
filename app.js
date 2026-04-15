const contractAddress = "0x7E44dCADE31707393B0E2c3bcFB052ddB3bECfE6"
async function connectWallet() {

  if (!window.ethereum) {
    alert("Install MetaMask");
    return;
  }

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  document.getElementById("status").innerText =
    "Connected: " + accounts[0];
}
