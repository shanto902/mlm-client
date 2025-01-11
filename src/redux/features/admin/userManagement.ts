import { TQueryParam, TResponseRedux } from "../../../types";
import { TLibrarian } from "../../../types/userManagement.type";

import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllLibrarians: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/librarians",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TLibrarian[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    addLibrarian: builder.mutation({
      query: (data) => {
        console.log("Adding librarian with data:", { body: data }); // Log the data received
        return {
          url: "/users/create-librarian",
          method: "POST",
          body: data,
        };
      },
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllLibrariansQuery,
  useAddLibrarianMutation,
  useChangePasswordMutation,
} = userManagementApi;
