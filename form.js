function checkCorreo(valor){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valor))
    {
        return (true)
    }
    
    return (false)
}

module.exports = checkCorreo;