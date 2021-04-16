import * as moment from 'moment';

enum FilterType {
    TEXT = 'text',
    DATE = 'date',
}

const CHECK_IN_AVAILABLE_FILTER = 'checkInAvailable';
const CHECK_OUT_AVAILABLE_FILTER = 'checkOutAvailable';

export class FilterService {
    static filters: any[];
    
    static filterCollection(collection: any[], paramMap: any, cb: any): any {
        const filters = this.extractFilters(paramMap);
        const collectionFiltered = collection.filter((item) => {
            return this.doFilterLogic(filters, item);
        });
        cb(collectionFiltered);
    }

    static doFilterLogic(filters, item) {
        const conditions = filters.map((filter, index) => {
            let condition = '';
            if (Array.isArray(filter.attrb)) {
                condition = item[filter.attrb[0]][filter.attrb[1]];
                return condition === filter.value;
            } else {
                if (filter.type === FilterType.DATE) {
                    if (
                        filter.attrb === CHECK_IN_AVAILABLE_FILTER &&
                        filters[index + 1].attrb === CHECK_OUT_AVAILABLE_FILTER
                    ) {
                        return this.filterCheckOutDate(
                            filter.value,
                            filters[index + 1].value,
                            item[CHECK_IN_AVAILABLE_FILTER],
                            item[CHECK_OUT_AVAILABLE_FILTER]
                        );
                    }
                } else if (filter.type == FilterType.TEXT) {
                    return this.filterText(item[filter.attrb], filter.value);
                }
            }
        });

        return conditions.every((bool) => {
            if (bool === undefined) {
                return true;
            }

            return bool;
        });
    }

    static filterCheckOutDate(filterInitialDate, filterFinalDate, itemInitial, itemFinal) {
        return moment(filterInitialDate) >= itemInitial && moment(filterFinalDate) <= itemFinal;
    }

    static filterText(itemAttrb, value) {
        return itemAttrb === value;
    }

    static extractFilters(paramMap: any) {
        return paramMap.keys.map((key) => {
            let filterType = FilterType.TEXT;
            const filterValue = paramMap.params[key];
            if (key.includes('.')) {
                const keyArray = key.split('.');
                key = keyArray.map((key) => {
                    return key;
                });
            } else {
                if (key.includes('Date')) {
                    filterType = FilterType.DATE;
                    key = key.substring(0, key.length - 4);
                }
            }

            return {
                attrb: key,
                value: filterValue,
                type: filterType,
            };
        });
    }
}
