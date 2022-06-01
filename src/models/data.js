let allUrl =  [];

export function getAll(){
    return allUrl;
}

export function newData(id, originUrl, shortUrl){
    return allUrl.push({id, originUrl, shortUrl})
}