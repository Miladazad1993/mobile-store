export const CategoriesReducer = (state=[], action) =>{
    switch(action.type){
        case "GET_CATEGORIES" :
            return[...action.payload] ;
        default :
            return state;
    }

}