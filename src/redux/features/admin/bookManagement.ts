import { TQueryParam, TResponseRedux } from "../../../types";
import { TBook } from "../../../types/book.type";
import { baseApi } from "../../api/baseApi";

const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/books",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TBook[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllBooksQuery, useAddBookMutation } = bookApi;
