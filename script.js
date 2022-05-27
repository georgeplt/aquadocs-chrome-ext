function buildDocLinks(json) {
    let docsList;
    json.forEach(element => {
        docsList += `<li><a href="${element.url}" target="_blank">${element.name}</a></li>`;
    });
    return docsList;
}

async function fetchData() {
    const jsonData = chrome.runtime.getURL('data/docs.json');
    console.log(jsonData);
    
    fetch(jsonData)
    .then(res => res.json())
    .then(json => {
        const docsList = buildDocLinks(json);
        document.getElementById("docz").innerHTML=docsList;
    })
    .catch(err => console.log(err));


    // const url = "https://api.coronavirus.data.gov.uk/v1/data";
    // // const url = "https://s3.eu-west-1.amazonaws.com/plt-george.aquadocsjson/aqua-docs.json?cacheblock=true";
    
    // fetch(url)
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(err => console.log(err))
    // // const docsJson = await docs.json();
    // // console.log(docs);
    // // const record = await res.json();
    // // console.log(record);
    // // document.getElementById("date").innerHTML=record.data[0].date;            
    // // document.getElementById("areaName").innerHTML=record.data[0].areaName;
    // // document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
    // // document.getElementById("deathNew").innerHTML=docs; //record.data[0].deathNew;
}
fetchData();
