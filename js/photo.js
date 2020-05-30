(() => {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        video = document.querySelector('#video'),
        img = document.querySelector("#myImage");
    
    
    navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: "user" } })
    .then(function (stream) {
        video.srcObject = stream;
        video.onloadedmetadata = function (e) {
            video.play();
        };
    })
    .catch(function (err) {
        alert("Aucune autorisation accordé : " + err);
    });

    document.getElementById("capture").addEventListener("click", (e) => {
        e.preventDefault();

        context.drawImage(video, 0, 0, 400, 300);
        window.localStorage.setItem("aaa", canvas.toDataURL('image/png'));
        img.setAttribute('src', canvas.toDataURL('image/png'))
    })

    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
        alert("Let's get this party started")
      }else {
          alert("ouff")
      }

})();