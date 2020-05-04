
const createCaptions = () => {
    let articles = document.getElementsByTagName('article');
    if (!articles.length) return;
    let images = articles[0].getElementsByTagName('img');
    for (let image of images) {
        let text = image.getAttribute('title');
        if (!text) continue;

        let caption = document.createElement('figcaption');
        caption.appendChild(document.createTextNode(text));
        caption.classList.add('image-caption');
        image.after(caption);
    }
};

createCaptions();