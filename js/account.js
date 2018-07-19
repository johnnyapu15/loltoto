var blockNumber = 0;
var savedAddress = "";
var savedBalances = 0;

setInterval(function() {

  var message;
  console.log(window.isProvided);
  if (window.isProvided){  
    //window.web3.instance = web3.eth.contract(abi).at(contractAddress);
    //로그인시 새 메세지있나 확인.
    
    window.contractInstance.getMsg(function(e,r) {

        if(Number(blockNumber) != r[0]) {

            document.getElementById('receive_new_img').style.display = "block";
            blockNumber = r[0];

        }

    });

    if (document.getElementById('betting_modal').style.visibility == "") {

      document.getElementById('betting_modal').style.visibility = "visible";
      document.getElementById('betting_form').style.visibility = "visible";
      document.getElementById('receive_modal').style.visibility = "visible";
      document.getElementById('receive_form').style.visibility = "visible";

    }

    web3.eth.getCoinbase(function(e, address) {

        web3.eth.getBalance(address, function(e, balances) {

          if (((address != null) && (savedAddress != address)) || (savedBalances != balances)) {

            document.getElementsByTagName("div")[2].innerHTML = "<input type='button' id='account_address' onclick='copy(this.value)' value='" + address + "' readonly />";
            document.getElementsByTagName("div")[2].innerHTML += "<span id='account_balances'>" + Number(web3.fromWei(Number(balances), 'ether')).toFixed(2) + "&nbsp;ETH</span>";

            savedAddress = address;
            savedBalances = balances;
            
          }

        });

    });

  }

}, 1000);