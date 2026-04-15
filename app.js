async function connectWallet() {

  if (!window.ethereum) {
    alert("Install MetaMask");
    return;
  }

  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const address = accounts[0];

    document.getElementById("address").innerText =
      "Address: " + address;

    const balance = await window.ethereum.request({
      method: "eth_getBalance",
      params: [address, "latest"],
    });

    const eth = parseInt(balance, 16) / 1e18;

    document.getElementById("balance").innerText =
      "Balance: " + eth.toFixed(4) + " ETH";

  } catch (err) {
    console.log(err);
  }
}
