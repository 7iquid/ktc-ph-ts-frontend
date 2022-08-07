
export const getFromLocal = (key:string) => {
    const data:any = localStorage.getItem(key);
    if(data==undefined){return data}
    return JSON.parse(data);
};

export const saveToLocal = (key:string, data:any) => {
    console.log(data)
    if(data){
        localStorage.setItem(key, JSON.stringify(data));
    }else{return {error:'error'}}
};

export const removeFromLocal = (key:string) => {
    localStorage.removeItem(key);
};