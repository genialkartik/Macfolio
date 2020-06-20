function cData() {}

var cdata_ar = []

cData.prototype = {
    cDataContainer: (data, callback)=>{
        cdata_ar.push(data)
        callback(cdata_ar)
        
        
    }
}

module.exports = cData