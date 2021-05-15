export class PagingParams {
    orderBy: string;
    orderByPropertyName: string;
    pageNumber: number = 1;
    pageSize: number = 10;
    search!: string;
}