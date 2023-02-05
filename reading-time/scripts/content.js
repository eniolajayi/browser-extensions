const article = document.querySelector("article");

if(article){
    const text = article.textContent;
    /*
    a regular expression pattern in JavaScript that searches for non-whitespace characters ([^\s]) and matches them globally (/g). The regular expression will return all non-whitespace substrings found in the string being searched. 
    */
    const wordMatchRegExp = /[^\s]+/g;
    const words = text.matchAll(wordMatchRegExp);
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount / 200);
    const badge = document.createElement("p");
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTime} min read`;

    const heading = article.querySelector("h1");
    const date = article.querySelector("time")?.parentNode;

    (date ?? heading).insertAdjacentElement("afterend", badge);
}