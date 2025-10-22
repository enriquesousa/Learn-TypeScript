    
    // Declarar variable
    // let name = 'Enrique';

    // Si la variable nunca va a cambiar la declaramos como
    const name: string = "Enrique";

    // Varuable tipo numerica
    // let hpPoints: number = 95;
    // hpPoints = 123;

    //  Si queremos que soporte tambien string
    // let hpPoints: number | string = 95;
    // hpPoints = 'FULL';

    //  Si queremos que solo acepte un string determinado
    let hpPoints: number | 'FULL' = 95;
    // hpPoints = "FULL";

    // Variable Booleana
    const isAlive: boolean = true;


    // Imprimir variables a la consola
    console.log({
        name,hpPoints,isAlive
    });




    // Por lo pronto para que no falle el Vite!
    export {};
