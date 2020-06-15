function cData() {}

var cdata_ar = []

cData.prototype = {
    cDataContainer: (data)=>{
        cdata_ar.push(data);
    },

    getcdata : (callback)=>{
        callback(cdata_ar)
    }
}

module.exports = cData