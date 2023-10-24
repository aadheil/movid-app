import { BASE_URL } from './baseUrl';
import { commonAPI } from './commonApi';

// post a blog

export const uploadAMovie = async (movie)=>{
    // post to http://localhost:4000/blog for adding blog in json server and return response 
    return await commonAPI("POST",`${BASE_URL}/movie`,movie)
}


export const getAllMovies = async ()=>{
    // http get request to http://localhost:4000/videos for getting videos from json server and return response to view component
    return await commonAPI("GET",`${BASE_URL}/movie`,"")
}


export const rateAMovie = async (ratings)=>{
    // post to http://localhost:4000/blog for adding blog in json server and return response 
    return await commonAPI("POST",`${BASE_URL}/ratings`,ratings)
}

export const getMovieRating = async ()=>{
    // http get request to http://localhost:4000/videos for getting videos from json server and return response to view component
    return await commonAPI("GET",`${BASE_URL}/ratings`,"")
}


export const uploadReview = async (review)=>{
    // post to http://localhost:4000/blog for adding blog in json server and return response 
    return await commonAPI("POST",`${BASE_URL}/reviews`,review)
}

export const getReviews = async ()=>{
    // http get request to http://localhost:4000/videos for getting videos from json server and return response to view component
    return await commonAPI("GET",`${BASE_URL}/reviews/`,"")
}


export const deleteAReview = async (id)=>{
    // http get request to http://localhost:4000/videos for getting videos from json server and return response to vidoe card component
    return await commonAPI("DELETE",`${BASE_URL}/reviews/${id}`,{})
}