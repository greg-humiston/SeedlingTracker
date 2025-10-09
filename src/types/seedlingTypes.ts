export type SeedlingTray = {
    id: number;
    title: string;
    width: number;
    length: number;
    // createdOn: Date;
    // lastModified: Date;
    seedlings: SeedlingTrayItem[]; 
};


export type SeedlingTrayItem = {
    id: number;
    rowNumber: number;
    columnNumber: number;
    seedling: Seedling;
};

export type Seedling = {
    id: number;
    name: string;
    // latinName: string;
    imageURL: string;
    // sunRequirement: string; // partial vs full shade 
    // minTemperature: number; // 30
    // maxTemperature: number; // 103
    // wateringSchedule: string;   // every 5 days
    plantType: string;  // herb 
    // lifespan: string;   // perennial vs annual   
    // TODO: expand this
};


export type SeedlingTrackerUser = {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    seedlingTrayList: SeedlingTray[];
}
