window.onload = function () {

  var bettingModalBtns = document.querySelectorAll('.betting_modal');
  var matchId = 0;
  var bettingBtns = document.querySelectorAll('.betting');
  var sendCloseBtns = document.querySelectorAll('.betting_form_close');

  var receiveModalBtn = document.getElementById('receive_modal');
  var receiveCloseBtns = document.querySelectorAll('.receive_form_close');
  
  // Get the dialogs.
  var bettingModal = document.getElementById('betting_form');
  var receiveModal = document.getElementById('receive_form');

  // Setup Event Listeners
  for (var i = 0; i < bettingModalBtns.length; i++){
    //여기서 어떤 토너먼트를 선택했는지 저장해야한다.
    bettingModalBtns[i].addEventListener('click', function(e) {
    e.preventDefault();
    //이 다음 문장에서 해당 경기의 자세한 정보를 불러와야한다. 서버사이드와 연계할 부분.
    document.getElementById("match_detail_box").innerHTML = "경기 정보<br> - matchId: " + this.value;
    document.getElementById('match_id').value = this.value;
    bettingModal.showModal();
    });
  }
  
  for (var i = 0; i < sendCloseBtns.length; i++) {
    sendCloseBtns[i].addEventListener('click', function(e) {
      this.parentNode.close();
    });
  }

  for (var i = 0; i < bettingBtns.length; i++) {
    bettingBtns[i].addEventListener('click', function(e) {
            //document.getElementById('tournament_id').value = tournamentId;
            //if(tournamentId.search(/0x[a-zA-Z0-9]{40}/) != -1) {

              // window.contractInstance.sendMsg(address, document.getElementById('receive_contents').value, {gasPrice:web3.toWei(2, 'Gwei')}, function(e,r) {

              //   //alert("TXID Copy to clipboard: Ctrl+C, Enter\n" + r);
                
              // });
              matchId = document.getElementById('match_id').value;
              alert("Betting ... <br>{match_ID: " + matchId + ", <br>team: " + this.value+"}");
              //document.getElementById('tournament_id').value = "";
              //ythis.parentNode.close();

            // }
            // else {
        
            //     alert('Please, recheck your sending address.');

            //  }
        });
    }

    receiveModalBtn.addEventListener('click', function(e) {

      var contractAddress = '0xb20083039a3b7b76c0dc3884c6e5f41c3784671d';
      var abi = [{"constant":false,"inputs":[{"name":"_receiver","type":"address"},{"name":"_message","type":"string"}],"name":"sendMsg","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getMsg","outputs":[{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"bool"}],"payable":false,"type":"function"}];
      var message;

      window.web3 = new Web3(web3.currentProvider);
      message = web3.eth.contract(abi).at(contractAddress);

      message.getMsg(function(e,r) {

        document.getElementById('send_address').value = r[1];
        document.getElementById('send_contents').value = r[2];

      });

      e.preventDefault();
      receiveModal.showModal();

    });
  
  for (var i = 0; i < receiveCloseBtns.length; i++) {
    receiveCloseBtns[i].addEventListener('click', function(e) {
        document.getElementById('receive_new_img').style.display = "none";
        this.parentNode.close();
    });
  }
  
};

