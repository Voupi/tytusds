var checkBoxHashCerradaSimple = false;
var checkBoxHashCerradaLineal = false;
var checkBoxHashCerradaInt = false;
var checkBoxHashCerradaString = false;
var checkBoxCerradaDivision = false;
var checkBoxCerradaCuadratica = false;
function checkCerradaSimple(){
    if(checkBoxHashCerradaSimple == true){
        checkBoxHashCerradaSimple = false;
        console.log("cambiando chek "+ checkBoxHashCerradaSimple);
    }else{
        checkBoxHashCerradaSimple = true;
        console.log("cambioando chek "+ checkBoxHashCerradaSimple);
    }  
}
function checkCerradaLineal(){
    if(checkBoxHashCerradaLineal == true){
        checkBoxHashCerradaLineal = false;
        console.log("cambiando chek "+ checkBoxHashCerradaLineal);
    }else{
        checkBoxHashCerradaLineal = true;
        console.log("cambioando chek "+ checkBoxHashCerradaLineal);
    }  
}
function checkCerradaInt(){
    if(checkBoxHashCerradaInt == true){
        checkBoxHashCerradaInt = false;
        console.log("cambiando chek "+ checkBoxHashCerradaInt);
    }else{
        checkBoxHashCerradaInt = true;
        console.log("cambioando chek "+ checkBoxHashCerradaInt);
    }  
}
function checkCerradaDivision(){
    if(checkBoxCerradaDivision == true){
        checkBoxCerradaDivision = false;
        console.log("cambiando chek "+ checkBoxCerradaDivision);
    }else{
        checkBoxCerradaDivision = true;
        console.log("cambioando chek "+ checkBoxCerradaDivision);
    }  
}
function checkCerradaCuadratica(){
    if(checkBoxCerradaCuadratica == true){
        checkBoxCerradaCuadratica = false;
        console.log("cambiando chek "+ checkBoxCerradaCuadratica);
    }else{
        checkBoxCerradaCuadratica = true;
        console.log("cambioando chek "+ checkBoxCerradaCuadratica);
    }  

}
function checkCerradaString(){
    if(checkBoxHashCerradaString == true){
        checkBoxHashCerradaString = false;
        console.log("cambiando chek "+ checkBoxHashCerradaString);
    }else{
        checkBoxHashCerradaString = true;
        console.log("cambioando chek "+ checkBoxHashCerradaString);
    }  
}

class hash {
    hash(m, min,max) {
      this.m = m;
      this.min = min;
      this.max = max;
      this.areglo = []
      this.n = 0
      this.init()
    }

  init(){
      this.areglo = [this.m] //tendria que declarar INT
      //console.log("en init");
      for(var i=0; i<this.m; i++){
          this.areglo[i] = -1;
          //console.log(this.areglo[i])
      }
   }
   insertar(k){
    let i = this.funcionHash(k)
    //let i = this.division(k);
    //console.log(i);
    let contador = 0;
    while(this.areglo[i] != -1){
        contador++
        i = this.pruebaHash(i,contador);
        console.log(i)
    }
    //console.log(i)
    this.areglo[i] = k
    //console.log(this.areglo[i])
    console.log(this.areglo)
    this.n++; //numero de valores de la tabla hash hasta el momento
    //console.log(this.n)
    this.rehashing()
    
  }
    rehashing(){
        console.log("entrando a rehashinkg")
        console.log(this.areglo+"  "+ this.n/this.m)
        if((this.n*100/this.m)>=this.max){  
         console.log(this.n*100/this.m)
         var temp = this.areglo
         console.log(temp)
         var mprev = this.m
         console.log(this.n)
         console.log(this.min)
         this.m = this.n*100/this.min
         this.init()
         this.n = 0
         console.log(mprev)
         for(var i=0; i<mprev; i++){
             if(temp[i]!=-1){
                 this.insertar(temp[i])
             }
        }
        }
 
     } 
     insertarString(y){
        let i = this.funcionHashString(y); 
        console.log(y)
        //let i = this.divisionString(y);
        console.log(i)
        
        while(this.areglo[i] != -1){
           i = this.linear(i); 
        }
        this.areglo[i] = y
        console.log(this.areglo)
        this.n++
        this.rehashingString()
       }
    
   rehashingString(){
       console.log(this.areglo+"  "+ this.n/this.m)
       if((this.n*100/this.m)>=this.max){  
        console.log(this.n*100/this.m)
        var temp = this.areglo
        console.log(temp)
        var mprev = this.m
        console.log(this.n)
        console.log(this.min)
        this.m = this.n*100/this.min
        this.init()
        this.n = 0
        console.log(mprev)
        for(var i=0; i<mprev; i++){
            if(temp[i]!=-1){
                this.insertarString(temp[i])
            }
       }
       }

    }     
    funcionHash(k){
        if(checkBoxCerradaDivision==true){
            return (k%(this.m))
        }
    }
    funcionHashString(y){
        if(checkBoxCerradaDivision==true){
            var contador = 0;
            for(var h in y){
            // console.log(data.charCodeAt(k));
                contador = contador + y.charCodeAt(h);
            }
            return contador%this.m
        }
        
    }
   ///disvion
    pruebaHash(k,c){
        if(checkBoxHashCerradaLineal===true){
            return ((k+1)%this.m)
        }
        if(checkBoxCerradaCuadratica===true){
            let o = k+c*c
            return ((o)%this.m)
        }
       
       
    }
    linear(k){
    return ((k+1)%this.m)
    }
    
    cuadratica(k){
        console.log(k) 
        k = k * k
        console.log(k) 
        return ((k+1)%this.m)
    }
}

let p = new hash();
p.hash(20,20,80);
//p.insertar(5);
//p.insertar(5);
//p.insertar(5);




function insertarHashCerrada(data){
    if(checkBoxHashCerradaInt==true){
        p.insertar(data)
    }
    if(checkBoxHashCerradaString==true){
       p.insertarString(data)
    }
}




