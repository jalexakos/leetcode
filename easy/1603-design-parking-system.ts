// Design Parking System
// from https://leetcode.com/problems/design-parking-system/description/

class ParkingSystem {
    constructor(private big: number, private medium: number, private small: number) {
        this.big = big;
        this.medium = medium;
        this.small = small;
    }

    addCar(carType: number): boolean {
        switch (carType) {
            case 1:
                if (this.big > 0){
                    this.big--;
                    return true;
                }
                return false;
                break;
            case 2:
                if (this.medium > 0){
                    this.medium--;
                    return true;
                }
                return false;
                break;
            case 3:
                if (this.small > 0){
                    this.small--;
                    return true;
                }
                return false;
                break;
            default:
                return false;
        }
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

// runtime 42nd percentile
// memory 30th percentile