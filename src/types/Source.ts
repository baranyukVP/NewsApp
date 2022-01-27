export interface ISourceDto {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

export interface ISourceResponse {
  sources: ISourceDto[];
  status: string;
}
