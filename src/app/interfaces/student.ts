export interface Istudent{
    fname : string
    lname : string;
    email : string;
    contact : number
}

export type productCatg = 'product' | 'catalog';
//union of literals

export interface Iproduct{
    prodName : string;
    prodDesc : string;
    category : productCatg;
    img : string;
}