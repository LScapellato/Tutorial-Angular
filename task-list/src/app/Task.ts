export interface Task {
    id: number;
    text: string;
<<<<<<< Updated upstream
    day:string;
    reminder:boolean;
=======
    day?: Date;
    reminder: boolean;
>>>>>>> Stashed changes
}

/*export class Task{

    constructor(
    public id: number,
    public text: string,
    public day: string,
    public reminder: boolean,
    ){}
}*/