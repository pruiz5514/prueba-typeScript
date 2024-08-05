export interface IPost {
    id?:                       number;
    title:                    string;
    body:                     string;
    creationDate:             string;
    creator:                   string
    estimatedPublicationDate?: string;
    status?:                   string;
    approvalPercentage?:       number;
    corrections?:              string;
    platform:                 string;
    postUrl:                  string;
    multimediaUrl:            string;
    deletedAt?:                null;
}
