



export class Usuario {
    
    constructor(
         public nombre: string,
         public correo: string,
         public contrasenia: string,
         public img?: string,
         public role?: string,
         public google?: boolean,
         public _id?: string
        ) { }
}