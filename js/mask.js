function mask(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmask()",1)
    }
    
    function execmask(){
        v_obj.value=v_fun(v_obj.value)
    }
    
    function masktel(v){
    v=v.replace(/\D/g,"");
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2");
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");
    return v;
    }
    
    function maskcpf(v){ 
    v=v.replace(/\D/g,"");
    v=v.replace(/(\d{3})(\d)/,"$1.$2");
    v=v.replace(/(\d{3})(\d)/,"$1.$2");
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
    return v;
    }

    /*
    MASCARA CNPJ
    
     function maskcnpj(v){
        v=v.replace(/\D/g,"");                        
        v=v.replace(/^(\d{2})(\d)/,"$1.$2");          
        v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3");
        v=v.replace(/\.(\d{3})(\d)/,".$1/$2");       
        v=v.replace(/(\d{4})(\d)/,"$1-$2");
        return v;
        }
    
    */
    
    function idcss( el ){
        return document.getElementById( el );
    }
    
    window.onload = function(){
        
        
        //TEL FIXO -------
        idcss('fixo').setAttribute('maxlength', 14);
        idcss('fixo').onkeyup = function(){
            mask( this, masktel );
        }
        //-------------
        
        
        //CELULAR -------
        idcss('celular').setAttribute('maxlength', 15);
        idcss('celular').onkeyup = function(){
            mask( this, masktel );
        }
        //-------------
        
        
        //CPF ---------
        idcss('cpf').setAttribute('maxlength', 14);
        idcss('cpf').onkeyup = function(){
            mask( this, maskcpf );
        }
        //-------------
    }
    
        