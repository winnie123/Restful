import * as file from 'fs';

function readFile(dirPath : string ,fileName : string):string{
    if(!dirPath|| !fileName){// 输入内容校验
        // TODO:
        throw new Error('');
    }
    let path = dirPath +'/'+ fileName;
    if(!file.existsSync(path)){// 地址校验
        // TODO:
        throw new Error('');
    }
    try{
        return  file.readFileSync(path,{encoding:'utf-8'});// 读取内容
    }
    catch(ex){
        throw ex;
    }
}

function saveFile(dirPath:string,fileName:string,data: string):boolean{
    let result = false;
    if(!dirPath|| !fileName){// 输入内容校验
        // TODO:
        throw new Error('');
    }
    let path = dirPath + fileName;
    try{
        file.writeFileSync(path,data);
        result = true;
    }
    catch(ex){
        throw ex;
    }
    return result;
}

export{
    readFile,
    saveFile
}