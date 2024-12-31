import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define interfaces for API responses
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface SuccessResponse<T = any> {
	status: number;
	message: string;
	data?: T;
}

const baseQuery = fetchBaseQuery({
	baseUrl: 'https://portfolio-api-i69x.onrender.com/api',
});

// Create API slice
export const api = createApi({
	reducerPath: 'api',
	baseQuery,
	endpoints: (builder) => ({
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		getUserData: builder.query<SuccessResponse<any>, void>({
			query: () => '/user',
		}),

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		getSkills: builder.query<SuccessResponse<any>, void>({
			query: () => '/skills',
		}),
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		getCertificates: builder.query<SuccessResponse<any>, void>({
			query: () => '/certificates',
		}),
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		getResume: builder.query<SuccessResponse<any>, void>({
			query: () => '/resume',
		}),
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		getAbout: builder.query<SuccessResponse<any>, void>({
			query: () => '/about',
		}),
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		getProjects: builder.query<SuccessResponse<any>, void>({
			query: () => '/project',
		}),

	}),
});

export const { useGetUserDataQuery, useGetSkillsQuery, useGetCertificatesQuery, useGetResumeQuery, useGetAboutQuery, useGetProjectsQuery } = api;
