import { QueryParams, createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
})

export async function sanityFetch<QueryResponse>({
    query,
    qParams,
    tags,
}: {
    query: string;
    qParams?: QueryParams;
    tags: string[];
  }): Promise<QueryResponse> {
    return client.fetch<QueryResponse>(query, qParams as any, {
        cache: "no-store",
        next: { tags },
    });
}