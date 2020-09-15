import _ from 'lodash';

export function paginate(items, pageSize, pageNumber) {
    const startIndex = (pageNumber - 1) * pageSize;
    /// e7na 5lena el item fe lodash obj 3shan n2dr n3ml fluent api 
    /// we value de btrg3hom array 3ady
    return _(items).slice(startIndex).take(pageSize).value();
}