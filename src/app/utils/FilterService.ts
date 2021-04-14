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
    return filters.some((filter) => {
      let condition = "";
      if (Array.isArray(filter.attrb)) {
        condition = item[filter.attrb[0]][filter.attrb[1]];
        return condition === filter.value;
      } else {
        condition = item[filter.attrb];
        return condition === filter.value;
      }
    });
  }

  static extractFilters(paramMap: any) {
    return paramMap.keys.map((key) => {
      const filterValue = paramMap.params[key];
      if (key.includes(".")) {
        const keyArray = key.split(".");
        key = keyArray.map((key) => {
          return key;
        });
      }
      return {
        attrb: key,
        value: filterValue,
      };
    });
  }
}
