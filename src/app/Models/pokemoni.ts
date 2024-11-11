export class PokemonModel{
    private id:number;
    private nombre:string;
    private imagen:string;
    private vida:number;
    private ataque:number;
    private defensa:number;
    private tipo:string;

    constructor(id:number,nombre:string,imagen:string,vida:number,ataque:number,defensa:number,tipo:string){
        this.id=id;
        this.nombre=nombre;
        this.imagen=imagen;
        this.vida=vida;
        this.ataque=ataque;
        this.defensa=defensa;
        this.tipo=tipo;
    }
    /*Getter*/
    getId():number{
        return this.id;
    }
    getNombre():string{
        return this.nombre;
    }
    getImagen():string{
        return this.imagen;
    }
    getVida():number{
        return this.vida;
    }
    getAtaque():number{
        return this.ataque;
    }
    getDefensa():number{
        return this.defensa;
    }
    getTipo():string{
        return this.tipo;
    }


    /*Setters */
    setId(id:number):void{
        this.id=id;
    }
    setNombre(nombre:string):void{
    this.nombre=nombre;
    }
    setImagen(imagen:string):void{
         this.imagen;
    }
    setVida(vida:number):void{
         this.vida;
    }
    setAtaque(ataque:number):void{
         this.ataque;
    }
    setDefensa(defensa:number):void{
         this.defensa;
    }
    setTipo(tipo:number):void{
         this.tipo;
    }

    /*Metodos clase */
    mostrarPokemon():string{
        return "ID: " + this.id +"Nombre" + this.nombre + "Imagen: " + this.imagen
    }

    calcularDaño (pokemonAtacante:PokemonModel):number{
        if (pokemonAtacante.getAtaque() > this.defensa){
        return pokemonAtacante.getAtaque() - this.defensa;
        }
        else{
            return 0;
        }
    }
}