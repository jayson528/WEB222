// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.ogg", type: "audio/ogg"}
    ]
};
window.onload = function() {
var audioContainer = document.querySelector('#audioDiv')

var completedString = '<figure>' + 
                            '<audio controls>' +
                                '<source src="' + audio.source[0].src + '" type="' + audio.source[0].type + '" />' +
                                '<source src="' + audio.source[1].src + '" type="' + audio.source[1].type + '" />' +
                                'Sorry your browser does not support the audio format.' +
                            '</audio>' + 
                      '</figure>'

audioContainer.innerHTML = completedString

}