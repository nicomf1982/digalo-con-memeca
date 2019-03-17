$(document).ready(function () {
  const sendButton = $("#sendButton").click(() => {
    const form = $("#movieSearch").val()
    giveMeaCat()
    // const pic1 = $("#pic1").prepend($('<img>', {
    //   id: 'theImg',
    //   src: `${giveMeaCat()}`
    // }))
    // alert(form);
  })
});


const giveMeaCat = (picNumber) => {
  var url = 'https://source.unsplash.com/random';
  var headers = new Headers({
    'X-Mashape-Key': 'API_KEY'
  });
  var options = {
    method: 'GET',
    headers: headers,
    mode: 'cors',
    cache: 'default'
  };
  var request = new Request(url);

  fetch(request, options).then((response) => {
    response.arrayBuffer().then((buffer) => {
      var base64Flag = 'data:image/jpeg;base64,';
      var imageStr = arrayBufferToBase64(buffer);

      document.querySelector('#pic1').src = base64Flag + imageStr;
    });
  });

  function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));

    bytes.forEach((b) => binary += String.fromCharCode(b));

    return window.btoa(binary);
  };
}