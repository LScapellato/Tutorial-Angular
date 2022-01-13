export interface Task {
    id?: number;         //definimos el id?   para que no  sea exigible el campo
    text: string;
    day?: Date;
    reminder: boolean;

}

/*export class Task{

    constructor(
    public id: number,
    public text: string,
    public day: string,
    public reminder: boolean,
    ){}
}*/