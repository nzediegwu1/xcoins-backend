import { Paginated, PaginatedArgs } from './types';

/**
 * @description Retrieves paginated data from a collection
 * @param {PaginatedArgs} {
 *   page,
 *   limit,
 *   model,
 *   message,
 *   query = {},
 * }
 * @returns {Paginated}
 */
export async function findPaginated({
  page,
  limit,
  model,
  message,
  query = {},
}: PaginatedArgs): Paginated {
  const [result] = await model.aggregate([
    { $match: query },
    {
      $facet: {
        total: [{ $count: 'count' }],
        data: [
          { $sort: { updatedAt: -1 } },
          { $skip: (+page - 1) * +limit },
          { $limit: +limit },
        ],
      },
    },
  ]);

  const { total, data } = result;
  return {
    message,
    data: { total: total[0]?.count || 0, data },
  };
}
