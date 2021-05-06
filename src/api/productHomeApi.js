import axiosClient from "./axiosClient";


const productHomeApi = {
   async getAll(params){
       const newParams = { ...params};
       newParams._start = !params._page || params <=1 ? 0 : (params._page -1) * (params._limit || 50);
       delete newParams._page;
       const producthomeList = await axiosClient.get('/homes',{params: newParams});
       const count = await axiosClient.get('/homes/count', {params: newParams});
       return{
           data: producthomeList,
           pagination: {
               page: params._page,
               limit: params._limit,
               total: count,
           },
       };
    },

    // get(id){
    //     const url =`/categories/${id}`;
    //     return axiosClient.get(url);
    // },

    // add(data){
    //     const url ='/categories';
    //     return axiosClient.post(url, data);
    // },

    // update(data){
    //     const url =`/categories/${data.id}`;
    //     return axiosClient.patch(url, data);
    // },

    // remove(id){
    //     const url =`/categories/${id}`;
    //     return axiosClient.delete(url);

    // }
};

export default  productHomeApi;