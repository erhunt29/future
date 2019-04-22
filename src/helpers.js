export const splitArr = (arr, lengthOfChunk) => {
    let chunks = [];

    for(let i = 0; i < arr.length; i += lengthOfChunk) {
        if(i+lengthOfChunk <= arr.length) {
            chunks.push(arr.slice(i, i + lengthOfChunk));
        } else {
            chunks.push(arr.slice(i, arr.length));
        }
    }

    return chunks
};

export const sortArrayByField = (arr, field, sort) => {
    const sortableArray = [...arr];
    const direction = !sort? 'down'
        : field !== sort.field? 'down'
        : sort.direction === 'down'? 'up'
        : 'down';

   if (!sort || field !== sort.field ) {
       sortableArray.sort((a,b) => {
           const current = a[field] ;
           const next = b[field] ;

           if (current > next) {
               return 1;
           }
           if (current < next) {
               return -1;
           }
           return 0;
       });
   } else {
       sortableArray.reverse();
   }

    return {sortableArray, direction}
};

export const searchInArray = (arr, string) => {
    return (
        arr.filter(item => {
            let result = false;
            for(let key in item) {
                if( item[key].toString().indexOf(string) !== -1) result = true;
            }
            return result
        })
    )
};