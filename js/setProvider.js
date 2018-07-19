var contractAddress = '0xb20083039a3b7b76c0dc3884c6e5f41c3784671d';
var abi = [{"constant":false,"inputs":[{"name":"_receiver","type":"address"},{"name":"_message","type":"string"}],"name":"sendMsg","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getMsg","outputs":[{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"bool"}],"payable":false,"type":"function"}];
var loginBoolean = false;
window.isProvided = false;


window.addEventListener('load', function(){
    console.log("gg " + window.isProvided);
    if (typeof web3 !== 'undefined'){
        window.web3 = new Web3(web3.currentProvider);
        window.account = web3.eth.accounts[0];
        loginBoolean = true;
    }
    else {
       
    }
})

setInterval(function(){
    if (loginBoolean){
            if (typeof web3.eth.accounts[0] !== 'undefined'){
                window.web3.instance = web3.eth.contract(abi).at(contractAddress);
                window.account = web3.eth.accounts[0];
                window.isProvided = true;
                alert("login!");
            }
            else {
                alert("logout!");
            }
        }
}, 1000)