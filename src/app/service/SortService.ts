import { Room } from '../models/room.model';
import { SORT_FIELDS } from '../utils/SortFields';

enum SORT_DIRECTION {
    ASC = 'asc',
    DESC = 'desc',
}

export class SortService {
    constructor() {}

    sort(collection: Room[], sortingAttribute: string) {
        switch (sortingAttribute) {
            case SORT_FIELDS.RELEVANCY.value:
                return this.sortDefault(collection, sortingAttribute, SORT_DIRECTION.DESC);
            case SORT_FIELDS.MAJOR_PRICE.value:
                return this.sortPrice(collection, false);
            case SORT_FIELDS.MINOR_PRICE.value:
                return this.sortPrice(collection, true);
            default:
                return collection.sort();
        }
    }

    private sortPrice(collection: Room[], isMinor: boolean) {
        const sorted = collection.sort((a: Room, b: Room) => {
            const priceToCheckA = a.promotionalPrice || a.price;
            const priceToCheckB = b.promotionalPrice || b.price;

            return isMinor ? priceToCheckA - priceToCheckB : priceToCheckB - priceToCheckA;
        });

        return sorted;
    }

    private sortDefault(collection: Room[], attrb: string, direction: string) {
        return collection.sort((a: Room, b: Room) => {
            return direction === SORT_DIRECTION.DESC ? b[attrb] - a[attrb] : a[attrb] - b[attrb];
        });
    }
}
