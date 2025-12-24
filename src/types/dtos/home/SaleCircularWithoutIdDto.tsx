export interface SaleCircularWithoutIdDto {
    code: string;
    title: string;
    subTitle: string;
    creationDate: string;
    documents: SaleCircularDocumentWithoutIdDto[];
}
export interface SaleCircularDocumentWithoutIdDto {
    title: string;
    fileId: string;
}