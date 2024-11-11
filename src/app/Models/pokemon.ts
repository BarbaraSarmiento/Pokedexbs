
export class lokemon { /*REPRESENTACIÓN DE UN OBJETO EXISTENTE*/ 
/*No movs no habs*/ 
/*ATRIBUTOS*/
private id: number;
private nombre:string;
private vida:number;
private defensa: number;
private ataques:number;
private tipo:string;
/*🧡🧡🧡🧡🧡*/ 
constructor(id_recibido:number, nombre_recibido:string,vida_recibido:number,defensa_recibido:number,ataques_recibido:number,tipo_recibido:string){
    //Definir un atributo
    this.id=id_recibido; // RECIBIENDO EL ID COMO PARAMETRO DE MI CLASE
    this.nombre=nombre_recibido;// RECIBIENDO EL NOMBRE COMO PARAMETRO DE MI CLASE
    this.ataques=ataques_recibido;// RECIBIENDO EL ATAQUES COMO PARAMETRO DE MI CLASE
    this.vida=vida_recibido;// RECIBIENDO LA VIDA COMO PARAMETRO DE MI CLASE
    this.defensa=defensa_recibido;// RECIBIENDO LA DEFENSA COMO PARAMETRO DE MI CLASE
    this.tipo=tipo_recibido;// RECIBIENDO EL TIPO COMO PARAMETRO DE MI CLASE
}
/*❤️❤️❤️❤️❤️*/
//MÉTODOS
/*❤️❤️❤️❤️❤️*/
public atacar(){
    console.log("ESTOY ATACANDO ⚔️");
}
public defender(){
    console.log("ESTOY DEFENDIENDO 🛡️");
}
public quitarvida(cantidad_quitar:number){
    this.vida=this.vida-cantidad_quitar;
}
public agregarvida(cantidad_agregar:number){
    this.vida=this.vida+cantidad_agregar;
}

 /**/  public mostrar (){
    console.log(`ID: ${this.id} Nombre: ${this.nombre} Ataques: ${this.ataques} 
    Defensa: ${this.defensa} Tipo: ${this.tipo} Vida: ${this.vida}`);
}

}
