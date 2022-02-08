
const reproducir = (() =>{
    recibir = (url,iframeId) => document.getElementById(iframeId).setAttribute("src",url);
    return{
          mostrar:(url,iframeId) => recibir(url,iframeId)
    };
})();

class Multimedia {
    constructor(url){
        let _url = url;
        this.getUrl = () => _url;    
        this.SetUrl = (urlProtegida) => _url = urlProtegida;  
    }

get obtenerUrl() {
   return this.getUrl();
} 
setInicio(){
return "Este método es para realizar un cambio en la URL del video";
}
}

class Reproductor extends Multimedia{
    constructor(url,id){
        super(url)
        let _id =id;
        this.getId = () =>_id;
        this.setID = (idProtegida) => this._id = idProtegida;
    }

 get obtenerId() {
     return this.getId();
 }
 playMultimedia = () => {
 reproducir.mostrar(this.obtenerUrl,this.obtenerId);
 }   
 setInicio = (start) => {
 document.getElementById(this.obtenerId).setAttribute("src",this.obtenerUrl + start)
 }

}



let musica = new Reproductor("https://www.youtube.com/embed/ePuwDZvLOeY","musica");
let peliculas =new Reproductor("https://www.youtube.com/embed/s_b-zpSnoHs","peliculas")
let series = new Reproductor("https://www.youtube.com/embed/GXD0Q5KHux0","series")

musica.playMultimedia();
musica.setInicio("?start=90");
peliculas.playMultimedia();
peliculas.setInicio("?start=44");
series.playMultimedia();
series.setInicio("?start=10");
