import * as moment from 'moment';

enum FilterType {
  TEXT = 'text',
  DATE = 'date',
  PRICE = 'price'
}

const CHECK_IN_AVAILABLE_FILTER = 'initial';
const CHECK_OUT_AVAILABLE_FILTER = 'final';

export class FilterService {

  static filterCollection(collection: any[], paramMap: any, cb: any): any {
    if (Object.keys(paramMap).length === 0) {
      cb(collection);
    }

    const filters = this.extractFilters(paramMap);
    const collectionFiltered = collection.filter((item) => {
      return this.doFilterLogic(filters, item);
    });
    cb(collectionFiltered);
  }

  private static doFilterLogic(filters, item) {
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
              item.checkInAvailable,
              item.checkOutAvailable
            );
          }
        } else if (filter.type === FilterType.TEXT) {
          return this.filterText(item[filter.attrb], filter.value);
        } else if (filter.type === FilterType.PRICE) {
          const values = Array.isArray(filter.value) ? filter.value : filter.value.split(',');
          return this.filterPrice(item.promotionalPrice !== 0 ? item.promotionalPrice : item.price, values);
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

  private static filterCheckOutDate(filterInitialDate, filterFinalDate, itemInitial, itemFinal) {
    return moment(filterInitialDate) >= moment(itemInitial) && moment(filterFinalDate) <= moment(itemFinal);
  }

  private static filterText(itemAttrb, value) {
    return itemAttrb === value;
  }

  private static filterPrice(price, values) {
    if (price >= parseFloat(values[0]) && price <= parseFloat(values[1])) {
      return true;
    }

    return false;
  }

  private static extractFilters(paramMap: any) {
    return paramMap.keys.map((key) => {
      let filterType = FilterType.TEXT;
      const filterValue = paramMap.params[key];
      if (key.includes('.')) {
        const keyArray = key.split('.');
        key = keyArray.map((k: any) => {
          return k;
        });
      } else {
        if (key.toLowerCase().includes('date')) {
          filterType = FilterType.DATE;
          key = key.substring(0, key.length - 4);
        } else if (key.toLowerCase().includes('price')) {
          filterType = FilterType.PRICE;
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
