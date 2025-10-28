export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: "Enrique",
};

const passenger2: Passenger = {
    name: "Fernando",
    children: ["Natalia", "Gabriel"],
};

const printChildren = (passenger: Passenger) => {
    // Si existe la propiedad children entonces accedemos a length
    // aqui es donde utilizamos el optional chaining
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, howManyChildren);
};

printChildren(passenger1);
printChildren(passenger2);
