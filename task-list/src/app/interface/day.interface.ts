import { taskInterface } from "./task.interface";

export interface dayInterface {
    day_date: String,
    completion_level: number,
    tasks: Array<taskInterface>
}

