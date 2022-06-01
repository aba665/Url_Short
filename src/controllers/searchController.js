export function newHash(){
    return Math.random().toString(32).substring(2);
}

export function existOrigin(file, url){
    let exist;

    for (let i = 0; i < file.length; i++){
        exist = file[i].originUrl == url; 
        
    }
    
    return exist;
   
    
}

export function existHash(file, hash){
    let element;

    for (let i = 0; i < file.length; i++){
         if(file[i].id == hash){
              element = file[i].originUrl
         }; 
        
    }
    
    return element;
   
    
}