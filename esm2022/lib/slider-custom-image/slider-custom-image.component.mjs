import { Component, Input, Inject, } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "./../rm-image-slider.service";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/common";
const youtubeRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/, validFileExtensions = ['jpeg', 'jpg', 'gif', 'png'], validVideoExtensions = ['mp4'];
export class SliderCustomImageComponent {
    constructor(imageSliderService, sanitizer, document) {
        this.imageSliderService = imageSliderService;
        this.sanitizer = sanitizer;
        this.YOUTUBE = 'youtube';
        this.IMAGE = 'image';
        this.VIDEO = 'video';
        this.fileUrl = '';
        this.fileExtension = '';
        this.type = this.IMAGE;
        this.imageLoading = true;
        // @inputs
        this.showVideo = false;
        this.videoAutoPlay = false;
        this.showVideoControls = 1;
        this.speed = 1;
        this.isVideo = false;
        this.alt = '';
        this.title = '';
        this.direction = 'ltr';
        this.ratio = false;
        this.lazy = false;
    }
    ngOnChanges(changes) {
        if (this['imageUrl'] &&
            typeof this['imageUrl'] === 'string' &&
            ((changes['imageUrl'] && changes['imageUrl'].firstChange) ||
                this.videoAutoPlay)) {
            this.setUrl();
        }
    }
    setUrl() {
        const url = this.imageUrl;
        this.imageLoading = true;
        this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        this.fileExtension = url.split('.').pop().split(/\#|\?/)[0];
        if (this.imageSliderService.base64FileExtension(url) &&
            (validFileExtensions.indexOf(this.imageSliderService.base64FileExtension(url).toLowerCase()) > -1 ||
                validVideoExtensions.indexOf(this.imageSliderService.base64FileExtension(url).toLowerCase()) > -1)) {
            this.fileExtension = this.imageSliderService.base64FileExtension(url);
        }
        // verify for youtube url
        const match = url.match(youtubeRegExp);
        if (match && match[2].length === 11) {
            if (this.showVideo) {
                this.type = this.YOUTUBE;
                this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${'https://www.youtube.com/embed/'}${match[2]}${this.videoAutoPlay
                    ? '?autoplay=1&enablejsapi=1'
                    : '?autoplay=0&enablejsapi=1'}${'&controls='}${this.showVideoControls}`);
            }
            else {
                this.type = this.IMAGE;
                this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://img.youtube.com/vi/${match[2]}/0.jpg`);
            }
        }
        else if (this.fileExtension &&
            validFileExtensions.indexOf(this.fileExtension.toLowerCase()) > -1) {
            this.type = this.IMAGE;
        }
        else if (this.fileExtension &&
            validVideoExtensions.indexOf(this.fileExtension.toLowerCase()) > -1) {
            this.type = this.VIDEO;
            if (this.videoAutoPlay &&
                document.getElementById(`video_${this.imageIndex}`)) {
                const videoObj = document.getElementById(`video_${this.imageIndex}`);
                setTimeout(() => {
                    videoObj.play();
                }, this.speed * 1000);
            }
        }
    }
    videoClickHandler(event) {
        if (event && event.srcElement && !this.showVideoControls) {
            if (event.srcElement.paused) {
                event.srcElement.play();
            }
            else {
                event.srcElement.pause();
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.0", ngImport: i0, type: SliderCustomImageComponent, deps: [{ token: i1.RmImageSliderService }, { token: i2.DomSanitizer }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.0", type: SliderCustomImageComponent, isStandalone: true, selector: "custom-img", inputs: { showVideo: "showVideo", videoAutoPlay: "videoAutoPlay", showVideoControls: "showVideoControls", currentImageIndex: "currentImageIndex", imageIndex: "imageIndex", speed: "speed", imageUrl: "imageUrl", isVideo: "isVideo", alt: "alt", title: "title", direction: "direction", ratio: "ratio", lazy: "lazy" }, usesOnChanges: true, ngImport: i0, template: "<div *ngIf=\"fileUrl\" class=\"custom-image-main\" [ngClass]=\"{'ng-fullimage-loading': imageLoading}\">\r\n  <img class=\"image\" (load)=\"imageLoading = false\" [ngClass]=\"{'ratio': ratio}\" *ngIf=\"type === IMAGE && fileUrl\"\r\n    [src]=\"fileUrl\" [alt]=\"alt\" [title]=\"title\" [attr.loading]=\"lazy == true ? 'lazy' : null\">\r\n  <iframe class=\"youtube\" *ngIf=\"type === YOUTUBE && fileUrl\" [src]=\"fileUrl\"\r\n    [attr.loading]=\"lazy == true ? 'lazy' : null\" frameborder=\"0\" allow=\"autoplay\" allowfullscreen></iframe>\r\n  <video class=\"video\" [id]=\"'video_' + imageIndex\" [ngClass]=\"{'ratio': ratio}\" (click)=\"videoClickHandler($event)\"\r\n    [autoplay]=\"videoAutoPlay\" *ngIf=\"type === VIDEO\" type=\"video/mp4\"\r\n    [attr.controls]=\"showVideoControls ? showVideoControls : null\" controlsList=\"nodownload\">\r\n    <source [src]=\"fileUrl\" type=\"video/mp4\">\r\n    Your browser does not support the video tag.\r\n  </video>\r\n  <div [dir]=\"direction\" *ngIf=\"!fileUrl\" class=\"invalid-msg\">Invalid file format</div>\r\n  <span *ngIf=\"type === YOUTUBE || type === VIDEO || isVideo\" class=\"youtube-icon\"></span>\r\n</div>", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.0", ngImport: i0, type: SliderCustomImageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'custom-img', standalone: true, imports: [CommonModule], template: "<div *ngIf=\"fileUrl\" class=\"custom-image-main\" [ngClass]=\"{'ng-fullimage-loading': imageLoading}\">\r\n  <img class=\"image\" (load)=\"imageLoading = false\" [ngClass]=\"{'ratio': ratio}\" *ngIf=\"type === IMAGE && fileUrl\"\r\n    [src]=\"fileUrl\" [alt]=\"alt\" [title]=\"title\" [attr.loading]=\"lazy == true ? 'lazy' : null\">\r\n  <iframe class=\"youtube\" *ngIf=\"type === YOUTUBE && fileUrl\" [src]=\"fileUrl\"\r\n    [attr.loading]=\"lazy == true ? 'lazy' : null\" frameborder=\"0\" allow=\"autoplay\" allowfullscreen></iframe>\r\n  <video class=\"video\" [id]=\"'video_' + imageIndex\" [ngClass]=\"{'ratio': ratio}\" (click)=\"videoClickHandler($event)\"\r\n    [autoplay]=\"videoAutoPlay\" *ngIf=\"type === VIDEO\" type=\"video/mp4\"\r\n    [attr.controls]=\"showVideoControls ? showVideoControls : null\" controlsList=\"nodownload\">\r\n    <source [src]=\"fileUrl\" type=\"video/mp4\">\r\n    Your browser does not support the video tag.\r\n  </video>\r\n  <div [dir]=\"direction\" *ngIf=\"!fileUrl\" class=\"invalid-msg\">Invalid file format</div>\r\n  <span *ngIf=\"type === YOUTUBE || type === VIDEO || isVideo\" class=\"youtube-icon\"></span>\r\n</div>" }]
        }], ctorParameters: () => [{ type: i1.RmImageSliderService }, { type: i2.DomSanitizer }, { type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }], propDecorators: { showVideo: [{
                type: Input
            }], videoAutoPlay: [{
                type: Input
            }], showVideoControls: [{
                type: Input
            }], currentImageIndex: [{
                type: Input
            }], imageIndex: [{
                type: Input
            }], speed: [{
                type: Input
            }], imageUrl: [{
                type: Input
            }], isVideo: [{
                type: Input
            }], alt: [{
                type: Input
            }], title: [{
                type: Input
            }], direction: [{
                type: Input
            }], ratio: [{
                type: Input
            }], lazy: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWN1c3RvbS1pbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ybS1pbWFnZS1zbGlkZXIvc3JjL2xpYi9zbGlkZXItY3VzdG9tLWltYWdlL3NsaWRlci1jdXN0b20taW1hZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcm0taW1hZ2Utc2xpZGVyL3NyYy9saWIvc2xpZGVyLWN1c3RvbS1pbWFnZS9zbGlkZXItY3VzdG9tLWltYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7OztBQUl6RCxNQUFNLGFBQWEsR0FDZixzRUFBc0UsRUFDeEUsbUJBQW1CLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsRUFDbkQsb0JBQW9CLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQVNqQyxNQUFNLE9BQU8sMEJBQTBCO0lBd0JyQyxZQUNTLGtCQUF3QyxFQUN2QyxTQUF1QixFQUNiLFFBQWtCO1FBRjdCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBc0I7UUFDdkMsY0FBUyxHQUFULFNBQVMsQ0FBYztRQXpCakMsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQUNwQixVQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2hCLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsWUFBTyxHQUFvQixFQUFFLENBQUM7UUFDOUIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsU0FBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbEIsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsVUFBVTtRQUNELGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0Isa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0Isc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBRzlCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixRQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ2pCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUMxQixVQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLFNBQUksR0FBWSxLQUFLLENBQUM7SUFNNUIsQ0FBQztJQUVKLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUNFLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssUUFBUTtZQUNwQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxXQUFXLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxhQUFhLENBQUMsRUFDckIsQ0FBQztZQUNELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU07UUFDSixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQztZQUNoRCxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FDMUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUMvRCxHQUFHLENBQUMsQ0FBQztnQkFDSixvQkFBb0IsQ0FBQyxPQUFPLENBQzFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FDL0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNULENBQUM7WUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4RSxDQUFDO1FBQ0QseUJBQXlCO1FBQ3pCLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdkMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUNwQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsOEJBQThCLENBQzFELEdBQUcsZ0NBQWdDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUM1QyxJQUFJLENBQUMsYUFBYTtvQkFDaEIsQ0FBQyxDQUFDLDJCQUEyQjtvQkFDN0IsQ0FBQyxDQUFDLDJCQUNOLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUMzQyxDQUFDO1lBQ0osQ0FBQztpQkFBTSxDQUFDO2dCQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUMxRCw4QkFBOEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQy9DLENBQUM7WUFDSixDQUFDO1FBQ0gsQ0FBQzthQUFNLElBQ0wsSUFBSSxDQUFDLGFBQWE7WUFDbEIsbUJBQW1CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDbEUsQ0FBQztZQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixDQUFDO2FBQU0sSUFDTCxJQUFJLENBQUMsYUFBYTtZQUNsQixvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNuRSxDQUFDO1lBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLElBQ0UsSUFBSSxDQUFDLGFBQWE7Z0JBQ2xCLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsRUFDbkQsQ0FBQztnQkFDRCxNQUFNLFFBQVEsR0FBUSxRQUFRLENBQUMsY0FBYyxDQUMzQyxTQUFTLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FDM0IsQ0FBQztnQkFDRixVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNkLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDeEIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBVTtRQUMxQixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDekQsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUM1QixLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFCLENBQUM7aUJBQU0sQ0FBQztnQkFDTixLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzNCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQzs4R0EzR1UsMEJBQTBCLGtGQTJCM0IsUUFBUTtrR0EzQlAsMEJBQTBCLHFaQ3ZCdkMsdXBDQWFNLHlERE1NLFlBQVk7OzJGQUlYLDBCQUEwQjtrQkFQdEMsU0FBUzsrQkFDRSxZQUFZLGNBQ1YsSUFBSSxXQUNQLENBQUMsWUFBWSxDQUFDOzswQkErQnBCLE1BQU07MkJBQUMsUUFBUTt5Q0FqQlQsU0FBUztzQkFBakIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFDRyxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBJbmplY3QsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVSZXNvdXJjZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBSbUltYWdlU2xpZGVyU2VydmljZSB9IGZyb20gJy4vLi4vcm0taW1hZ2Utc2xpZGVyLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgeW91dHViZVJlZ0V4cCA9XHJcbiAgICAvXi4qKHlvdXR1LmJlXFwvfHZcXC98dVxcL1xcd1xcL3xlbWJlZFxcL3x3YXRjaFxcP3Y9fFxcJnY9fFxcP3Y9KShbXiNcXCZcXD9dKikuKi8sXHJcbiAgdmFsaWRGaWxlRXh0ZW5zaW9ucyA9IFsnanBlZycsICdqcGcnLCAnZ2lmJywgJ3BuZyddLFxyXG4gIHZhbGlkVmlkZW9FeHRlbnNpb25zID0gWydtcDQnXTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY3VzdG9tLWltZycsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2xpZGVyLWN1c3RvbS1pbWFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL3NsaWRlci1jdXN0b20taW1hZ2UuY29tcG9uZW50LmNzcycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTbGlkZXJDdXN0b21JbWFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgWU9VVFVCRSA9ICd5b3V0dWJlJztcclxuICBJTUFHRSA9ICdpbWFnZSc7XHJcbiAgVklERU8gPSAndmlkZW8nO1xyXG4gIGZpbGVVcmw6IFNhZmVSZXNvdXJjZVVybCA9ICcnO1xyXG4gIGZpbGVFeHRlbnNpb24gPSAnJztcclxuICB0eXBlID0gdGhpcy5JTUFHRTtcclxuICBpbWFnZUxvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvLyBAaW5wdXRzXHJcbiAgQElucHV0KCkgc2hvd1ZpZGVvOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdmlkZW9BdXRvUGxheTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dWaWRlb0NvbnRyb2xzOiBudW1iZXIgPSAxO1xyXG4gIEBJbnB1dCgpIGN1cnJlbnRJbWFnZUluZGV4ITogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGltYWdlSW5kZXghOiBudW1iZXI7XHJcbiAgQElucHV0KCkgc3BlZWQ6IG51bWJlciA9IDE7XHJcbiAgQElucHV0KCkgaW1hZ2VVcmw6IGFueTtcclxuICBASW5wdXQoKSBpc1ZpZGVvID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYWx0OiBTdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSB0aXRsZTogU3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgZGlyZWN0aW9uOiBzdHJpbmcgPSAnbHRyJztcclxuICBASW5wdXQoKSByYXRpbzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGxhenk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgaW1hZ2VTbGlkZXJTZXJ2aWNlOiBSbUltYWdlU2xpZGVyU2VydmljZSxcclxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogRG9jdW1lbnRcclxuICApIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpc1snaW1hZ2VVcmwnXSAmJlxyXG4gICAgICB0eXBlb2YgdGhpc1snaW1hZ2VVcmwnXSA9PT0gJ3N0cmluZycgJiZcclxuICAgICAgKChjaGFuZ2VzWydpbWFnZVVybCddICYmIGNoYW5nZXNbJ2ltYWdlVXJsJ10uZmlyc3RDaGFuZ2UpIHx8XHJcbiAgICAgICAgdGhpcy52aWRlb0F1dG9QbGF5KVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuc2V0VXJsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRVcmwoKSB7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLmltYWdlVXJsO1xyXG4gICAgdGhpcy5pbWFnZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5maWxlVXJsID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHVybCk7XHJcbiAgICB0aGlzLmZpbGVFeHRlbnNpb24gPSB1cmwuc3BsaXQoJy4nKS5wb3AoKS5zcGxpdCgvXFwjfFxcPy8pWzBdO1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmltYWdlU2xpZGVyU2VydmljZS5iYXNlNjRGaWxlRXh0ZW5zaW9uKHVybCkgJiZcclxuICAgICAgKHZhbGlkRmlsZUV4dGVuc2lvbnMuaW5kZXhPZihcclxuICAgICAgICB0aGlzLmltYWdlU2xpZGVyU2VydmljZS5iYXNlNjRGaWxlRXh0ZW5zaW9uKHVybCkudG9Mb3dlckNhc2UoKVxyXG4gICAgICApID4gLTEgfHxcclxuICAgICAgICB2YWxpZFZpZGVvRXh0ZW5zaW9ucy5pbmRleE9mKFxyXG4gICAgICAgICAgdGhpcy5pbWFnZVNsaWRlclNlcnZpY2UuYmFzZTY0RmlsZUV4dGVuc2lvbih1cmwpLnRvTG93ZXJDYXNlKClcclxuICAgICAgICApID4gLTEpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5maWxlRXh0ZW5zaW9uID0gdGhpcy5pbWFnZVNsaWRlclNlcnZpY2UuYmFzZTY0RmlsZUV4dGVuc2lvbih1cmwpO1xyXG4gICAgfVxyXG4gICAgLy8gdmVyaWZ5IGZvciB5b3V0dWJlIHVybFxyXG4gICAgY29uc3QgbWF0Y2ggPSB1cmwubWF0Y2goeW91dHViZVJlZ0V4cCk7XHJcbiAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMl0ubGVuZ3RoID09PSAxMSkge1xyXG4gICAgICBpZiAodGhpcy5zaG93VmlkZW8pIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLllPVVRVQkU7XHJcbiAgICAgICAgdGhpcy5maWxlVXJsID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKFxyXG4gICAgICAgICAgYCR7J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyd9JHttYXRjaFsyXX0ke1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQXV0b1BsYXlcclxuICAgICAgICAgICAgICA/ICc/YXV0b3BsYXk9MSZlbmFibGVqc2FwaT0xJ1xyXG4gICAgICAgICAgICAgIDogJz9hdXRvcGxheT0wJmVuYWJsZWpzYXBpPTEnXHJcbiAgICAgICAgICB9JHsnJmNvbnRyb2xzPSd9JHt0aGlzLnNob3dWaWRlb0NvbnRyb2xzfWBcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMuSU1BR0U7XHJcbiAgICAgICAgdGhpcy5maWxlVXJsID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKFxyXG4gICAgICAgICAgYGh0dHBzOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7bWF0Y2hbMl19LzAuanBnYFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHRoaXMuZmlsZUV4dGVuc2lvbiAmJlxyXG4gICAgICB2YWxpZEZpbGVFeHRlbnNpb25zLmluZGV4T2YodGhpcy5maWxlRXh0ZW5zaW9uLnRvTG93ZXJDYXNlKCkpID4gLTFcclxuICAgICkge1xyXG4gICAgICB0aGlzLnR5cGUgPSB0aGlzLklNQUdFO1xyXG4gICAgfSBlbHNlIGlmIChcclxuICAgICAgdGhpcy5maWxlRXh0ZW5zaW9uICYmXHJcbiAgICAgIHZhbGlkVmlkZW9FeHRlbnNpb25zLmluZGV4T2YodGhpcy5maWxlRXh0ZW5zaW9uLnRvTG93ZXJDYXNlKCkpID4gLTFcclxuICAgICkge1xyXG4gICAgICB0aGlzLnR5cGUgPSB0aGlzLlZJREVPO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy52aWRlb0F1dG9QbGF5ICYmXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHZpZGVvXyR7dGhpcy5pbWFnZUluZGV4fWApXHJcbiAgICAgICkge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvT2JqOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgIGB2aWRlb18ke3RoaXMuaW1hZ2VJbmRleH1gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHZpZGVvT2JqLnBsYXkoKTtcclxuICAgICAgICB9LCB0aGlzLnNwZWVkICogMTAwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZpZGVvQ2xpY2tIYW5kbGVyKGV2ZW50OiBhbnkpIHtcclxuICAgIGlmIChldmVudCAmJiBldmVudC5zcmNFbGVtZW50ICYmICF0aGlzLnNob3dWaWRlb0NvbnRyb2xzKSB7XHJcbiAgICAgIGlmIChldmVudC5zcmNFbGVtZW50LnBhdXNlZCkge1xyXG4gICAgICAgIGV2ZW50LnNyY0VsZW1lbnQucGxheSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV2ZW50LnNyY0VsZW1lbnQucGF1c2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2ICpuZ0lmPVwiZmlsZVVybFwiIGNsYXNzPVwiY3VzdG9tLWltYWdlLW1haW5cIiBbbmdDbGFzc109XCJ7J25nLWZ1bGxpbWFnZS1sb2FkaW5nJzogaW1hZ2VMb2FkaW5nfVwiPlxyXG4gIDxpbWcgY2xhc3M9XCJpbWFnZVwiIChsb2FkKT1cImltYWdlTG9hZGluZyA9IGZhbHNlXCIgW25nQ2xhc3NdPVwieydyYXRpbyc6IHJhdGlvfVwiICpuZ0lmPVwidHlwZSA9PT0gSU1BR0UgJiYgZmlsZVVybFwiXHJcbiAgICBbc3JjXT1cImZpbGVVcmxcIiBbYWx0XT1cImFsdFwiIFt0aXRsZV09XCJ0aXRsZVwiIFthdHRyLmxvYWRpbmddPVwibGF6eSA9PSB0cnVlID8gJ2xhenknIDogbnVsbFwiPlxyXG4gIDxpZnJhbWUgY2xhc3M9XCJ5b3V0dWJlXCIgKm5nSWY9XCJ0eXBlID09PSBZT1VUVUJFICYmIGZpbGVVcmxcIiBbc3JjXT1cImZpbGVVcmxcIlxyXG4gICAgW2F0dHIubG9hZGluZ109XCJsYXp5ID09IHRydWUgPyAnbGF6eScgOiBudWxsXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhdXRvcGxheVwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cclxuICA8dmlkZW8gY2xhc3M9XCJ2aWRlb1wiIFtpZF09XCIndmlkZW9fJyArIGltYWdlSW5kZXhcIiBbbmdDbGFzc109XCJ7J3JhdGlvJzogcmF0aW99XCIgKGNsaWNrKT1cInZpZGVvQ2xpY2tIYW5kbGVyKCRldmVudClcIlxyXG4gICAgW2F1dG9wbGF5XT1cInZpZGVvQXV0b1BsYXlcIiAqbmdJZj1cInR5cGUgPT09IFZJREVPXCIgdHlwZT1cInZpZGVvL21wNFwiXHJcbiAgICBbYXR0ci5jb250cm9sc109XCJzaG93VmlkZW9Db250cm9scyA/IHNob3dWaWRlb0NvbnRyb2xzIDogbnVsbFwiIGNvbnRyb2xzTGlzdD1cIm5vZG93bmxvYWRcIj5cclxuICAgIDxzb3VyY2UgW3NyY109XCJmaWxlVXJsXCIgdHlwZT1cInZpZGVvL21wNFwiPlxyXG4gICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIHRhZy5cclxuICA8L3ZpZGVvPlxyXG4gIDxkaXYgW2Rpcl09XCJkaXJlY3Rpb25cIiAqbmdJZj1cIiFmaWxlVXJsXCIgY2xhc3M9XCJpbnZhbGlkLW1zZ1wiPkludmFsaWQgZmlsZSBmb3JtYXQ8L2Rpdj5cclxuICA8c3BhbiAqbmdJZj1cInR5cGUgPT09IFlPVVRVQkUgfHwgdHlwZSA9PT0gVklERU8gfHwgaXNWaWRlb1wiIGNsYXNzPVwieW91dHViZS1pY29uXCI+PC9zcGFuPlxyXG48L2Rpdj4iXX0=