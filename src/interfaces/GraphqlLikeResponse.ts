export interface GraphqlLikeResponse<DataType> {
    count: number;
    results: DataType[];
}
