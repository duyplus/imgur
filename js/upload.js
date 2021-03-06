function reportInfo(vars, showType = false) {
    if (showType === true) console.log(typeof vars);
    console.log(vars);
}

function addImg(ele, content) {
    var myDIV = document.querySelector(ele);
    var newContent = document.createElement('div');
    newContent.innerHTML = content;

    while (newContent.firstChild) {
        myDIV.appendChild(newContent.firstChild);
    }
}
var feedback = function(res) {
    reportInfo(res, true);
    if (res.success === true) {
        var get_link = res.data.link.replace(/^http:\/\//i, 'https://');
        document.querySelector('.status').classList.add('bg-success', 'center');
        var content = `<div style="width: 70%;">
                       <p>Link: <input class="image" value="${get_link}" onclick="this.select();"/></p>
                       <p>Bbcode: <input class="image" value="\[img\]${get_link}\[\/img\]" onclick="this.select();"/></p>
                       <p>Markdown: <input class="image" value="![](${get_link})" onclick="this.select();"/></p>
                       <hr><p><img class="img" alt="Imgur-Upload" src="${get_link}"/></p>
                       </div>`;
        addImg('.status', content);
    }
};

new Imgur({
    clientid: '146def7f79c7a87', //You can change this ClientID
    callback: feedback
});