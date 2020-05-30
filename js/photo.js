(() => {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        video = document.querySelector('#video'),
        img = document.querySelector("#myImage");

        var front = false;
        document.getElementById('flip-button').onclick = function() { front = !front; };

        //add constraints object
        var constraints = { audio: false,
                            video: { facingMode: (front? "user" : "environment") } };
    
        navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream){
            video.srcObject = mediaStream;
            video.play();
        }).catch(function(err){
            console.log("yikes, and err!" + err.message);
        });

        document.getElementById("capture").addEventListener("click", (e) => {
            e.preventDefault();
        
            context.drawImage(video, 0, 0, 400, 300);
            window.localStorage.setItem("aaa", canvas.toDataURL('image/png'));
            img.setAttribute('src', canvas.toDataURL('image/png'))
        })

})();