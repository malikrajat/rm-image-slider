import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
const DESC = 'DESC', ASC = 'ASC';
export class RmImageSliderService {
    constructor() { }
    isBase64(str) {
        var base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
        return base64regex.test(str);
    }
    base64FileExtension(str) {
        return str.substring('data:image/'.length, str.indexOf(';base64'));
    }
    // orderArray(arr = [], orderType = ASC) {
    //   if (arr?.length && orderType) {
    //     return arr.sort((ob1: any, ob2: any) => {
    //       if (ob1['order'] === null || !ob1['order']) {
    //         return 1;
    //       } else if (ob2['order'] === null || !ob2['order']) {
    //         return -1;
    //       } else if (ob1['order'] > ob2['order']) {
    //         if (orderType === DESC) {
    //           return -1;
    //         } else {
    //           return 1;
    //         }
    //       } else if (ob1['order'] < ob2['order']) {
    //         if (orderType === DESC) {
    //           return 1;
    //         } else {
    //           return -1;
    //         }
    //       }
    //     });
    //   }
    //   return arr;
    // }
    orderArray(arr = [], orderType = ASC) {
        if (arr?.length && orderType) {
            return arr.sort((ob1, ob2) => {
                // Handle potential undefined 'order' properties
                const order1 = ob1['order'];
                const order2 = ob2['order'];
                // Ensure consistent sorting for undefined/null 'order' values
                if (order1 === null || order1 === undefined) {
                    return 1; // Place elements with undefined or null 'order' at the end
                }
                else if (order2 === null || order2 === undefined) {
                    return -1; // Place elements with undefined or null 'order' at the beginning
                }
                else {
                    // Apply ascending or descending order based on 'orderType'
                    return orderType === DESC
                        ? order2 - order1 // Reverse for descending order
                        : order1 - order2; // Maintain for ascending order
                }
            });
        }
        return arr; // Return the original array if conditions are not met
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: RmImageSliderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: RmImageSliderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.4", ngImport: i0, type: RmImageSliderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm0taW1hZ2Utc2xpZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ybS1pbWFnZS1zbGlkZXIvc3JjL2xpYi9ybS1pbWFnZS1zbGlkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQyxNQUFNLElBQUksR0FBRyxNQUFNLEVBQ2pCLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFLZCxNQUFNLE9BQU8sb0JBQW9CO0lBQy9CLGdCQUFlLENBQUM7SUFFaEIsUUFBUSxDQUFDLEdBQVc7UUFDbEIsSUFBSSxXQUFXLEdBQ2Isa0VBQWtFLENBQUM7UUFDckUsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxHQUFXO1FBQzdCLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsMENBQTBDO0lBQzFDLG9DQUFvQztJQUNwQyxnREFBZ0Q7SUFDaEQsc0RBQXNEO0lBQ3RELG9CQUFvQjtJQUNwQiw2REFBNkQ7SUFDN0QscUJBQXFCO0lBQ3JCLGtEQUFrRDtJQUNsRCxvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtEQUFrRDtJQUNsRCxvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFVBQVU7SUFDVixVQUFVO0lBQ1YsTUFBTTtJQUNOLGdCQUFnQjtJQUNoQixJQUFJO0lBRUosVUFBVSxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsU0FBUyxHQUFHLEdBQUc7UUFDbEMsSUFBSSxHQUFHLEVBQUUsTUFBTSxJQUFJLFNBQVMsRUFBRSxDQUFDO1lBQzdCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQVEsRUFBRSxHQUFRLEVBQUUsRUFBRTtnQkFDckMsZ0RBQWdEO2dCQUNoRCxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzVCLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFNUIsOERBQThEO2dCQUM5RCxJQUFJLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRSxDQUFDO29CQUM1QyxPQUFPLENBQUMsQ0FBQyxDQUFDLDJEQUEyRDtnQkFDdkUsQ0FBQztxQkFBTSxJQUFJLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRSxDQUFDO29CQUNuRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsaUVBQWlFO2dCQUM5RSxDQUFDO3FCQUFNLENBQUM7b0JBQ04sMkRBQTJEO29CQUMzRCxPQUFPLFNBQVMsS0FBSyxJQUFJO3dCQUN2QixDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQywrQkFBK0I7d0JBQ2pELENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsK0JBQStCO2dCQUN0RCxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsT0FBTyxHQUFHLENBQUMsQ0FBQyxzREFBc0Q7SUFDcEUsQ0FBQzs4R0E1RFUsb0JBQW9CO2tIQUFwQixvQkFBb0IsY0FGbkIsTUFBTTs7MkZBRVAsb0JBQW9CO2tCQUhoQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmNvbnN0IERFU0MgPSAnREVTQycsXHJcbiAgQVNDID0gJ0FTQyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm1JbWFnZVNsaWRlclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgaXNCYXNlNjQoc3RyOiBzdHJpbmcpIHtcclxuICAgIHZhciBiYXNlNjRyZWdleCA9XHJcbiAgICAgIC9eKFswLTlhLXpBLVorL117NH0pKigoWzAtOWEtekEtWisvXXsyfT09KXwoWzAtOWEtekEtWisvXXszfT0pKT8kLztcclxuICAgIHJldHVybiBiYXNlNjRyZWdleC50ZXN0KHN0cik7XHJcbiAgfVxyXG5cclxuICBiYXNlNjRGaWxlRXh0ZW5zaW9uKHN0cjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc3RyLnN1YnN0cmluZygnZGF0YTppbWFnZS8nLmxlbmd0aCwgc3RyLmluZGV4T2YoJztiYXNlNjQnKSk7XHJcbiAgfVxyXG5cclxuICAvLyBvcmRlckFycmF5KGFyciA9IFtdLCBvcmRlclR5cGUgPSBBU0MpIHtcclxuICAvLyAgIGlmIChhcnI/Lmxlbmd0aCAmJiBvcmRlclR5cGUpIHtcclxuICAvLyAgICAgcmV0dXJuIGFyci5zb3J0KChvYjE6IGFueSwgb2IyOiBhbnkpID0+IHtcclxuICAvLyAgICAgICBpZiAob2IxWydvcmRlciddID09PSBudWxsIHx8ICFvYjFbJ29yZGVyJ10pIHtcclxuICAvLyAgICAgICAgIHJldHVybiAxO1xyXG4gIC8vICAgICAgIH0gZWxzZSBpZiAob2IyWydvcmRlciddID09PSBudWxsIHx8ICFvYjJbJ29yZGVyJ10pIHtcclxuICAvLyAgICAgICAgIHJldHVybiAtMTtcclxuICAvLyAgICAgICB9IGVsc2UgaWYgKG9iMVsnb3JkZXInXSA+IG9iMlsnb3JkZXInXSkge1xyXG4gIC8vICAgICAgICAgaWYgKG9yZGVyVHlwZSA9PT0gREVTQykge1xyXG4gIC8vICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gIC8vICAgICAgICAgICByZXR1cm4gMTtcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICB9IGVsc2UgaWYgKG9iMVsnb3JkZXInXSA8IG9iMlsnb3JkZXInXSkge1xyXG4gIC8vICAgICAgICAgaWYgKG9yZGVyVHlwZSA9PT0gREVTQykge1xyXG4gIC8vICAgICAgICAgICByZXR1cm4gMTtcclxuICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICAgICAgIHJldHVybiAtMTtcclxuICAvLyAgICAgICAgIH1cclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgcmV0dXJuIGFycjtcclxuICAvLyB9XHJcblxyXG4gIG9yZGVyQXJyYXkoYXJyID0gW10sIG9yZGVyVHlwZSA9IEFTQykge1xyXG4gICAgaWYgKGFycj8ubGVuZ3RoICYmIG9yZGVyVHlwZSkge1xyXG4gICAgICByZXR1cm4gYXJyLnNvcnQoKG9iMTogYW55LCBvYjI6IGFueSkgPT4ge1xyXG4gICAgICAgIC8vIEhhbmRsZSBwb3RlbnRpYWwgdW5kZWZpbmVkICdvcmRlcicgcHJvcGVydGllc1xyXG4gICAgICAgIGNvbnN0IG9yZGVyMSA9IG9iMVsnb3JkZXInXTtcclxuICAgICAgICBjb25zdCBvcmRlcjIgPSBvYjJbJ29yZGVyJ107XHJcblxyXG4gICAgICAgIC8vIEVuc3VyZSBjb25zaXN0ZW50IHNvcnRpbmcgZm9yIHVuZGVmaW5lZC9udWxsICdvcmRlcicgdmFsdWVzXHJcbiAgICAgICAgaWYgKG9yZGVyMSA9PT0gbnVsbCB8fCBvcmRlcjEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmV0dXJuIDE7IC8vIFBsYWNlIGVsZW1lbnRzIHdpdGggdW5kZWZpbmVkIG9yIG51bGwgJ29yZGVyJyBhdCB0aGUgZW5kXHJcbiAgICAgICAgfSBlbHNlIGlmIChvcmRlcjIgPT09IG51bGwgfHwgb3JkZXIyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJldHVybiAtMTsgLy8gUGxhY2UgZWxlbWVudHMgd2l0aCB1bmRlZmluZWQgb3IgbnVsbCAnb3JkZXInIGF0IHRoZSBiZWdpbm5pbmdcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gQXBwbHkgYXNjZW5kaW5nIG9yIGRlc2NlbmRpbmcgb3JkZXIgYmFzZWQgb24gJ29yZGVyVHlwZSdcclxuICAgICAgICAgIHJldHVybiBvcmRlclR5cGUgPT09IERFU0NcclxuICAgICAgICAgICAgPyBvcmRlcjIgLSBvcmRlcjEgLy8gUmV2ZXJzZSBmb3IgZGVzY2VuZGluZyBvcmRlclxyXG4gICAgICAgICAgICA6IG9yZGVyMSAtIG9yZGVyMjsgLy8gTWFpbnRhaW4gZm9yIGFzY2VuZGluZyBvcmRlclxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycjsgLy8gUmV0dXJuIHRoZSBvcmlnaW5hbCBhcnJheSBpZiBjb25kaXRpb25zIGFyZSBub3QgbWV0XHJcbiAgfVxyXG59XHJcbiJdfQ==