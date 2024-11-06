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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: SliderCustomImageComponent, deps: [{ token: i1.RmImageSliderService }, { token: i2.DomSanitizer }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.10", type: SliderCustomImageComponent, isStandalone: true, selector: "custom-img", inputs: { showVideo: "showVideo", videoAutoPlay: "videoAutoPlay", showVideoControls: "showVideoControls", currentImageIndex: "currentImageIndex", imageIndex: "imageIndex", speed: "speed", imageUrl: "imageUrl", isVideo: "isVideo", alt: "alt", title: "title", direction: "direction", ratio: "ratio", lazy: "lazy" }, usesOnChanges: true, ngImport: i0, template: "@if (fileUrl) {\r\n  <div class=\"custom-image-main\" [ngClass]=\"{'ng-fullimage-loading': imageLoading}\">\r\n    @if (type === IMAGE && fileUrl) {\r\n      <img class=\"image\" (load)=\"imageLoading = false\" [ngClass]=\"{'ratio': ratio}\"\r\n        [src]=\"fileUrl\" [alt]=\"alt\" [title]=\"title\" [attr.loading]=\"lazy == true ? 'lazy' : null\">\r\n    }\r\n    @if (type === YOUTUBE && fileUrl) {\r\n      <iframe class=\"youtube\" [src]=\"fileUrl\"\r\n      [attr.loading]=\"lazy == true ? 'lazy' : null\" frameborder=\"0\" allow=\"autoplay\" allowfullscreen></iframe>\r\n    }\r\n    @if (type === VIDEO) {\r\n      <video class=\"video\" [id]=\"'video_' + imageIndex\" [ngClass]=\"{'ratio': ratio}\" (click)=\"videoClickHandler($event)\"\r\n        [autoplay]=\"videoAutoPlay\" type=\"video/mp4\"\r\n        [attr.controls]=\"showVideoControls ? showVideoControls : null\" controlsList=\"nodownload\">\r\n        <source [src]=\"fileUrl\" type=\"video/mp4\">\r\n        Your browser does not support the video tag.\r\n      </video>\r\n    }\r\n    @if (!fileUrl) {\r\n      <div [dir]=\"direction\" class=\"invalid-msg\">Invalid file format</div>\r\n    }\r\n    @if (type === YOUTUBE || type === VIDEO || isVideo) {\r\n      <span class=\"youtube-icon\"></span>\r\n    }\r\n  </div>\r\n}", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.10", ngImport: i0, type: SliderCustomImageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'custom-img', standalone: true, imports: [CommonModule], template: "@if (fileUrl) {\r\n  <div class=\"custom-image-main\" [ngClass]=\"{'ng-fullimage-loading': imageLoading}\">\r\n    @if (type === IMAGE && fileUrl) {\r\n      <img class=\"image\" (load)=\"imageLoading = false\" [ngClass]=\"{'ratio': ratio}\"\r\n        [src]=\"fileUrl\" [alt]=\"alt\" [title]=\"title\" [attr.loading]=\"lazy == true ? 'lazy' : null\">\r\n    }\r\n    @if (type === YOUTUBE && fileUrl) {\r\n      <iframe class=\"youtube\" [src]=\"fileUrl\"\r\n      [attr.loading]=\"lazy == true ? 'lazy' : null\" frameborder=\"0\" allow=\"autoplay\" allowfullscreen></iframe>\r\n    }\r\n    @if (type === VIDEO) {\r\n      <video class=\"video\" [id]=\"'video_' + imageIndex\" [ngClass]=\"{'ratio': ratio}\" (click)=\"videoClickHandler($event)\"\r\n        [autoplay]=\"videoAutoPlay\" type=\"video/mp4\"\r\n        [attr.controls]=\"showVideoControls ? showVideoControls : null\" controlsList=\"nodownload\">\r\n        <source [src]=\"fileUrl\" type=\"video/mp4\">\r\n        Your browser does not support the video tag.\r\n      </video>\r\n    }\r\n    @if (!fileUrl) {\r\n      <div [dir]=\"direction\" class=\"invalid-msg\">Invalid file format</div>\r\n    }\r\n    @if (type === YOUTUBE || type === VIDEO || isVideo) {\r\n      <span class=\"youtube-icon\"></span>\r\n    }\r\n  </div>\r\n}" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWN1c3RvbS1pbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9ybS1pbWFnZS1zbGlkZXIvc3JjL2xpYi9zbGlkZXItY3VzdG9tLWltYWdlL3NsaWRlci1jdXN0b20taW1hZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcm0taW1hZ2Utc2xpZGVyL3NyYy9saWIvc2xpZGVyLWN1c3RvbS1pbWFnZS9zbGlkZXItY3VzdG9tLWltYWdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7OztBQUl6RCxNQUFNLGFBQWEsR0FDZixzRUFBc0UsRUFDeEUsbUJBQW1CLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsRUFDbkQsb0JBQW9CLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQVNqQyxNQUFNLE9BQU8sMEJBQTBCO0lBd0JyQyxZQUNTLGtCQUF3QyxFQUN2QyxTQUF1QixFQUNiLFFBQWtCO1FBRjdCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBc0I7UUFDdkMsY0FBUyxHQUFULFNBQVMsQ0FBYztRQXpCakMsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQUNwQixVQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2hCLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsWUFBTyxHQUFvQixFQUFFLENBQUM7UUFDOUIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsU0FBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbEIsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsVUFBVTtRQUNELGNBQVMs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SCxDQUFDO0lBQ0gsQ0FBQzsrR0EzR1UsMEJBQTBCLGtGQTJCM0IsUUFBUTttR0EzQlAsMEJBQTBCLHFaQ3ZCdkMscXhDQXlCQyx5REROVyxZQUFZOzs0RkFJWCwwQkFBMEI7a0JBUHRDLFNBQVM7K0JBQ0UsWUFBWSxjQUNWLElBQUksV0FDUCxDQUFDLFlBQVksQ0FBQzs7MEJBK0JwQixNQUFNOzJCQUFDLFFBQVE7eUNBakJULFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBQ0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgSW5qZWN0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlUmVzb3VyY2VVcmwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgUm1JbWFnZVNsaWRlclNlcnZpY2UgfSBmcm9tICcuLy4uL3JtLWltYWdlLXNsaWRlci5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IHlvdXR1YmVSZWdFeHAgPVxyXG4gICAgL14uKih5b3V0dS5iZVxcL3x2XFwvfHVcXC9cXHdcXC98ZW1iZWRcXC98d2F0Y2hcXD92PXxcXCZ2PXxcXD92PSkoW14jXFwmXFw/XSopLiovLFxyXG4gIHZhbGlkRmlsZUV4dGVuc2lvbnMgPSBbJ2pwZWcnLCAnanBnJywgJ2dpZicsICdwbmcnXSxcclxuICB2YWxpZFZpZGVvRXh0ZW5zaW9ucyA9IFsnbXA0J107XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2N1c3RvbS1pbWcnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NsaWRlci1jdXN0b20taW1hZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9zbGlkZXItY3VzdG9tLWltYWdlLmNvbXBvbmVudC5jc3MnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2xpZGVyQ3VzdG9tSW1hZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIFlPVVRVQkUgPSAneW91dHViZSc7XHJcbiAgSU1BR0UgPSAnaW1hZ2UnO1xyXG4gIFZJREVPID0gJ3ZpZGVvJztcclxuICBmaWxlVXJsOiBTYWZlUmVzb3VyY2VVcmwgPSAnJztcclxuICBmaWxlRXh0ZW5zaW9uID0gJyc7XHJcbiAgdHlwZSA9IHRoaXMuSU1BR0U7XHJcbiAgaW1hZ2VMb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLy8gQGlucHV0c1xyXG4gIEBJbnB1dCgpIHNob3dWaWRlbzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHZpZGVvQXV0b1BsYXk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93VmlkZW9Db250cm9sczogbnVtYmVyID0gMTtcclxuICBASW5wdXQoKSBjdXJyZW50SW1hZ2VJbmRleCE6IG51bWJlcjtcclxuICBASW5wdXQoKSBpbWFnZUluZGV4ITogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHNwZWVkOiBudW1iZXIgPSAxO1xyXG4gIEBJbnB1dCgpIGltYWdlVXJsOiBhbnk7XHJcbiAgQElucHV0KCkgaXNWaWRlbyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGFsdDogU3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgdGl0bGU6IFN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGRpcmVjdGlvbjogc3RyaW5nID0gJ2x0cic7XHJcbiAgQElucHV0KCkgcmF0aW86IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBsYXp5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGltYWdlU2xpZGVyU2VydmljZTogUm1JbWFnZVNsaWRlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQ6IERvY3VtZW50XHJcbiAgKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXNbJ2ltYWdlVXJsJ10gJiZcclxuICAgICAgdHlwZW9mIHRoaXNbJ2ltYWdlVXJsJ10gPT09ICdzdHJpbmcnICYmXHJcbiAgICAgICgoY2hhbmdlc1snaW1hZ2VVcmwnXSAmJiBjaGFuZ2VzWydpbWFnZVVybCddLmZpcnN0Q2hhbmdlKSB8fFxyXG4gICAgICAgIHRoaXMudmlkZW9BdXRvUGxheSlcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNldFVybCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VXJsKCkge1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5pbWFnZVVybDtcclxuICAgIHRoaXMuaW1hZ2VMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuZmlsZVVybCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh1cmwpO1xyXG4gICAgdGhpcy5maWxlRXh0ZW5zaW9uID0gdXJsLnNwbGl0KCcuJykucG9wKCkuc3BsaXQoL1xcI3xcXD8vKVswXTtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5pbWFnZVNsaWRlclNlcnZpY2UuYmFzZTY0RmlsZUV4dGVuc2lvbih1cmwpICYmXHJcbiAgICAgICh2YWxpZEZpbGVFeHRlbnNpb25zLmluZGV4T2YoXHJcbiAgICAgICAgdGhpcy5pbWFnZVNsaWRlclNlcnZpY2UuYmFzZTY0RmlsZUV4dGVuc2lvbih1cmwpLnRvTG93ZXJDYXNlKClcclxuICAgICAgKSA+IC0xIHx8XHJcbiAgICAgICAgdmFsaWRWaWRlb0V4dGVuc2lvbnMuaW5kZXhPZihcclxuICAgICAgICAgIHRoaXMuaW1hZ2VTbGlkZXJTZXJ2aWNlLmJhc2U2NEZpbGVFeHRlbnNpb24odXJsKS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgKSA+IC0xKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuZmlsZUV4dGVuc2lvbiA9IHRoaXMuaW1hZ2VTbGlkZXJTZXJ2aWNlLmJhc2U2NEZpbGVFeHRlbnNpb24odXJsKTtcclxuICAgIH1cclxuICAgIC8vIHZlcmlmeSBmb3IgeW91dHViZSB1cmxcclxuICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKHlvdXR1YmVSZWdFeHApO1xyXG4gICAgaWYgKG1hdGNoICYmIG1hdGNoWzJdLmxlbmd0aCA9PT0gMTEpIHtcclxuICAgICAgaWYgKHRoaXMuc2hvd1ZpZGVvKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy5ZT1VUVUJFO1xyXG4gICAgICAgIHRoaXMuZmlsZVVybCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChcclxuICAgICAgICAgIGAkeydodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nfSR7bWF0Y2hbMl19JHtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0F1dG9QbGF5XHJcbiAgICAgICAgICAgICAgPyAnP2F1dG9wbGF5PTEmZW5hYmxlanNhcGk9MSdcclxuICAgICAgICAgICAgICA6ICc/YXV0b3BsYXk9MCZlbmFibGVqc2FwaT0xJ1xyXG4gICAgICAgICAgfSR7JyZjb250cm9scz0nfSR7dGhpcy5zaG93VmlkZW9Db250cm9sc31gXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLklNQUdFO1xyXG4gICAgICAgIHRoaXMuZmlsZVVybCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChcclxuICAgICAgICAgIGBodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8ke21hdGNoWzJdfS8wLmpwZ2BcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICB0aGlzLmZpbGVFeHRlbnNpb24gJiZcclxuICAgICAgdmFsaWRGaWxlRXh0ZW5zaW9ucy5pbmRleE9mKHRoaXMuZmlsZUV4dGVuc2lvbi50b0xvd2VyQ2FzZSgpKSA+IC0xXHJcbiAgICApIHtcclxuICAgICAgdGhpcy50eXBlID0gdGhpcy5JTUFHRTtcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHRoaXMuZmlsZUV4dGVuc2lvbiAmJlxyXG4gICAgICB2YWxpZFZpZGVvRXh0ZW5zaW9ucy5pbmRleE9mKHRoaXMuZmlsZUV4dGVuc2lvbi50b0xvd2VyQ2FzZSgpKSA+IC0xXHJcbiAgICApIHtcclxuICAgICAgdGhpcy50eXBlID0gdGhpcy5WSURFTztcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMudmlkZW9BdXRvUGxheSAmJlxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB2aWRlb18ke3RoaXMuaW1hZ2VJbmRleH1gKVxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zdCB2aWRlb09iajogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICBgdmlkZW9fJHt0aGlzLmltYWdlSW5kZXh9YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB2aWRlb09iai5wbGF5KCk7XHJcbiAgICAgICAgfSwgdGhpcy5zcGVlZCAqIDEwMDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2aWRlb0NsaWNrSGFuZGxlcihldmVudDogYW55KSB7XHJcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQuc3JjRWxlbWVudCAmJiAhdGhpcy5zaG93VmlkZW9Db250cm9scykge1xyXG4gICAgICBpZiAoZXZlbnQuc3JjRWxlbWVudC5wYXVzZWQpIHtcclxuICAgICAgICBldmVudC5zcmNFbGVtZW50LnBsYXkoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBldmVudC5zcmNFbGVtZW50LnBhdXNlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQGlmIChmaWxlVXJsKSB7XHJcbiAgPGRpdiBjbGFzcz1cImN1c3RvbS1pbWFnZS1tYWluXCIgW25nQ2xhc3NdPVwieyduZy1mdWxsaW1hZ2UtbG9hZGluZyc6IGltYWdlTG9hZGluZ31cIj5cclxuICAgIEBpZiAodHlwZSA9PT0gSU1BR0UgJiYgZmlsZVVybCkge1xyXG4gICAgICA8aW1nIGNsYXNzPVwiaW1hZ2VcIiAobG9hZCk9XCJpbWFnZUxvYWRpbmcgPSBmYWxzZVwiIFtuZ0NsYXNzXT1cInsncmF0aW8nOiByYXRpb31cIlxyXG4gICAgICAgIFtzcmNdPVwiZmlsZVVybFwiIFthbHRdPVwiYWx0XCIgW3RpdGxlXT1cInRpdGxlXCIgW2F0dHIubG9hZGluZ109XCJsYXp5ID09IHRydWUgPyAnbGF6eScgOiBudWxsXCI+XHJcbiAgICB9XHJcbiAgICBAaWYgKHR5cGUgPT09IFlPVVRVQkUgJiYgZmlsZVVybCkge1xyXG4gICAgICA8aWZyYW1lIGNsYXNzPVwieW91dHViZVwiIFtzcmNdPVwiZmlsZVVybFwiXHJcbiAgICAgIFthdHRyLmxvYWRpbmddPVwibGF6eSA9PSB0cnVlID8gJ2xhenknIDogbnVsbFwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYXV0b3BsYXlcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+XHJcbiAgICB9XHJcbiAgICBAaWYgKHR5cGUgPT09IFZJREVPKSB7XHJcbiAgICAgIDx2aWRlbyBjbGFzcz1cInZpZGVvXCIgW2lkXT1cIid2aWRlb18nICsgaW1hZ2VJbmRleFwiIFtuZ0NsYXNzXT1cInsncmF0aW8nOiByYXRpb31cIiAoY2xpY2spPVwidmlkZW9DbGlja0hhbmRsZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgW2F1dG9wbGF5XT1cInZpZGVvQXV0b1BsYXlcIiB0eXBlPVwidmlkZW8vbXA0XCJcclxuICAgICAgICBbYXR0ci5jb250cm9sc109XCJzaG93VmlkZW9Db250cm9scyA/IHNob3dWaWRlb0NvbnRyb2xzIDogbnVsbFwiIGNvbnRyb2xzTGlzdD1cIm5vZG93bmxvYWRcIj5cclxuICAgICAgICA8c291cmNlIFtzcmNdPVwiZmlsZVVybFwiIHR5cGU9XCJ2aWRlby9tcDRcIj5cclxuICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgdmlkZW8gdGFnLlxyXG4gICAgICA8L3ZpZGVvPlxyXG4gICAgfVxyXG4gICAgQGlmICghZmlsZVVybCkge1xyXG4gICAgICA8ZGl2IFtkaXJdPVwiZGlyZWN0aW9uXCIgY2xhc3M9XCJpbnZhbGlkLW1zZ1wiPkludmFsaWQgZmlsZSBmb3JtYXQ8L2Rpdj5cclxuICAgIH1cclxuICAgIEBpZiAodHlwZSA9PT0gWU9VVFVCRSB8fCB0eXBlID09PSBWSURFTyB8fCBpc1ZpZGVvKSB7XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwieW91dHViZS1pY29uXCI+PC9zcGFuPlxyXG4gICAgfVxyXG4gIDwvZGl2PlxyXG59Il19