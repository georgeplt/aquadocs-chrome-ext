function buildDocLinks(json) {
    let docsList = '';
    json.forEach(element => {
        docsList += `<li class="list-group-item"><a href="${element.url}" target="_blank">${element.name}</a> <i>${element.desc}</i></li>`;
    });
    return docsList;
}

async function fetchData() {
    const jsonData = chrome.runtime.getURL('data/docs.json');
    
    fetch(jsonData)
    .then(res => res.json())
    .then(json => {
        const docsList = buildDocLinks(json);
        document.getElementById("docz").innerHTML=docsList;
    })
    .catch(err => console.log(err));
}
fetchData();
