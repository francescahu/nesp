function showDD(div) {
    div.getElementsByTagName('dd')[0].style.display = 'block';
}

function hideDD(div) {
    div.getElementsByTagName('dd')[0].style.display = 'none';
}

function toggleDD(div) {
    var dd = div.getElementsByTagName('dd')[0];
    var status = dd.style.display;
    if (status == 'block')
        dd.style.display = 'none';
    else
        dd.style.display = 'block';
}


function toggleImage(im){
    let i = document.getElementById('im');
    i.width = 500;
    i.height = 500;
    im.width = i.width;
    im.height = i.height;
    //let foto = document.getElementById('im').width.value = i.width;
    var status = image.style.display;
    if ( status == 'block' ) 
        im.style.display = 'none';
    else
        im.style.display = 'block';
}

/*
function toggleImage(im, block) {
    let i = document.getElementById('im');

    var status = image.style.display;
    if (block == 'block') {
        i.width = 500;
        i.height = 500;
        im.width = i.width;
        im.height = i.height;
        //let foto = document.getElementById('im').width.value = i.width;
    } else { 
        im.width = 210;
    im.height = 220;
    }
    

}

function show(im) {
    im.style.display = 'block';
}

function hide(im) {
    im.width = 210;
    im.height = 220;
}*/
