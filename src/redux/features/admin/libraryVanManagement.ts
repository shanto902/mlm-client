import { baseApi } from "../../api/baseApi";

const libraryVanApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllLibraryVans: builder.query({
      query: () => ({
        url: "/library-vans",
        method: "GET",
      }),
      providesTags: ["libraryVan"],
    }),
    addVan: builder.mutation({
      query: (data) => ({
        url: "/library-vans/add-van",
        method: "POST",
        body: data,
      }),
    }),
    updateVanStatus: builder.mutation({
      query: (args) => ({
        url: `/library-vans/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["libraryVan"],
    }),
  }),
});

export const {
  useGetAllLibraryVansQuery,
  useAddVanMutation,
  useUpdateVanStatusMutation,
} = libraryVanApi;
