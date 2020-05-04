
const createCaptions = () => {
    let articles = document.getElementsByTagName('article');
    if (!articles.length) return;
    let images = articles[0].getElementsByTagName('img');
    for (let image of images) {
        let alt = image.getAttribute('alt');
        console.log(alt);
        let caption = document.createElement('figcaption');
        var node = document.createTextNode(alt);
        caption.appendChild(node);
        caption.classList.add('image-caption');
        image.after(caption);
    }
};


createCaptions();