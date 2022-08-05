
export const saveToLocal = (key:string, data:any) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocal = (key:string) => {
    const data:any = localStorage.getItem(key);
    if(data==undefined){return data}
    return JSON.parse(data);
};

export const removeFromLocal = (key:string) => {
    localStorage.removeItem(key);
};