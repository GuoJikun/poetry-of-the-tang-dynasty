function open(name, path) {
    return new Promise((resolve, reject) => {
        plus.sqlite.openDatabase({
            name: name,  
            path: path,  
            success: function() {  
                resolve()
            },  
            fail: (e) => {  
                reject(e)
            }  
        })  
    })
    
}  

function executeSQL(name, sql) {
    return new Promise((resolve, reject) => {
        plus.sqlite.selectSql({
            name: name,  
            sql: sql,  
            success: function(data) {   
                resolve(data)
            },  
            fail: function(e) {
                reject(e)
            }  
        })  
    })
}

function select(name, sql) {
    return new Promise((resolve, reject) => {
        plus.sqlite.selectSql({
            name: name,  
            sql: sql,  
            success: function(data) {   
                resolve(data)
            },  
            fail: function(e) {
                reject(e)
            }  
        })  
    })
}

function close(name) {
    return new Promise((resolve, reject) => {
        plus.sqlite.closeDatabase({
            name,
            success() {
                resolve()
            },
            fail(e) {
                reject(e)
            }
        })
    })
}


export{  
    open,  
    executeSQL,
    close,
    select
}