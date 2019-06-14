
export interface IOrganization{
    hr:string[];
    operations:string[]
    management:string[]
    admin:string[]
    employes
}
export interface IEmployee{
    firstName:string;
    lastName:string;
}
export interface Sample{

}
export class Organization implements IOrganization{
    hr 
    operations
    management
    admin
    employes:IEmployee[];
}
export class Departments{

}