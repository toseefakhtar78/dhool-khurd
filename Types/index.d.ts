declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };
  export interface Post {
    id: number;
    title: string;
    excerpt: string;
    content?: string; // Optional if used in detail view
  }
  
  export interface FetchPostsResponse extends Array<Post> {}