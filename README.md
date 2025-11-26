<a href="https://github.com/malikrajat/rm-image-slider">
  <h1 align="center">Image Slider/ carousel</h1>
<p align="center">Advanced, customizable, Optimized ,Minimal, light-weight and fully customizable pure angular component for carousel.</p>
</a>

[![npm](https://img.shields.io/npm/v/ngx-bar-rating.svg)](https://www.npmjs.com/package/rm-image-slider)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/malikrajat/rm-image-slider)


# Angular Image Slider with Lightbox

An Angular responsive image slider with lightbox popup.
Also support youtube and mp4 video urls. It is leazy loading and heigly optimized with standalone component.


## 🎬 Demo in Action

<div align="center">
  
  ![rm-image-slider Demo](https://github.com/malikrajat/rm-image-slider/assets/rm-image-slider-demo.giff)
  
  *Experience the power: Image carousel, lightbox popup, video support, and touch gestures - all in one lightweight component!*

</div>

> **✨ What you're seeing:** Smooth transitions, responsive touch controls, lightbox with keyboard navigation, video playback support, and customizable styling - everything working seamlessly together.




## Features!

- Responsive (support images width and height in both % and px)
- captures swipes from phones and tablets
- Compatible with Angular Universal
- Image lightbox popup
- captures keyboard next/previous arrow key event for lightbox image move
- Support Images (jpeg, jpg, gif, png and Base64-String), Youtube url and MP4 video (url and Base64-String)
- Handling runtime image arraylist changes


<div align="left">

## 🚀 Live Demo & Examples

### Try it out now! See all features in action 👇

<table>
<tr>
<td align="">
<a href="https://stackblitz.com/edit/stackblitz-starters-3kmpe6u9" target="_blank">
<img src="https://img.shields.io/badge/⚡_StackBlitz-1976D2?style=for-the-badge&logo=stackblitz&logoColor=white" alt="StackBlitz"/>
</a>
</td>
</tr>
</table>

### 🎯 What you'll see:
• **Image Carousel** with smooth transitions  
• **Lightbox Popup** with keyboard navigation  
• **Video Support** (YouTube & MP4)  
• **Mobile Responsive** touch/swipe gestures  
• **Customization Options** - size, speed, autoplay

</div>

---

# Installation

Install rm-image-slider with npm amd yarn

```bash

  npm: npm install rm-image-slider--save 

  yarn: yarn add rm-image-slider

```

# Setup :

**Import module in your component:**

```typescript
import { RmImageSliderComponent, ImageObject } from 'rm-image-slider';
...
@Component({
  selector: '',
  standalone: true,
  imports: [RmImageSliderComponent],
  templateUrl: '',
  styleUrl: '',
})

```

**Add component in your template file.**

```html
<rm-image-slider [images]="imageObject" #nav></rm-image-slider>
```

**ImageObject format**

```js
imageObject: Array<ImageObject> = [{
  image: 'assets/img/slider/1.jpg',
  thumbImage: 'assets/img/slider/1_min.jpeg',
  alt: 'alt of image',
  title: 'title of image',
  index: 1
}, {
  image: '.../iOe/xHHf4nf8AE75h3j1x64ZmZ//Z==', // Support base64 image
  thumbImage: '.../iOe/xHHf4nf8AE75h3j1x64ZmZ//Z==', // Support base64 image
  title: 'Image title', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1, //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  index: 2
}
];
```

**Image, Youtube and MP4 url's object format**

```js
imageObject: Array<ImageObject> = [{
  video: 'https://youtu.be/....' // Youtube url
  index: 1
},
  {
    video: 'assets/video/********.mp4', // MP4 Video url
    index: 2
  },
  {
    video: 'assets/video/movie2.mp4',
    posterImage: 'assets/img/slider/2_min.jpeg', //Optional: You can use this key if you want to show video poster image in slider
    title: 'Image title',
    index: 3
  },
  {
    image: 'assets/img/slider/1.jpg',
    thumbImage: 'assets/img/slider/1_min.jpeg',
    alt: 'Image alt',
    index: 4
  }
  ...
];
```

## API Reference (optional) :

| Name               | Type    | Data Type             | Description                                                                                                                                                                                                                                                                                                         | Default                               |
| ------------------ | ------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| infinite           | @Input  | boolean               | Infinite sliding images if value is **true**.                                                                                                                                                                                                                                                                       | false                                 |
| imagePopup         | @Input  | boolean               | Enable image lightBox popup option on slider image click.                                                                                                                                                                                                                                                           | true                                  |
| animationSpeed     | @Input  | number                | By this user can set slider animation speed. Minimum value is **0.1 second** and Maximum value is **5 second**.                                                                                                                                                                                                     | 1                                     |
| slideImage         | @Input  | number                | Set how many images will move on left/right arrow click.                                                                                                                                                                                                                                                            | 1                                     |
| imageSize          | @Input  | object                | Set slider images width, height and space. space is use for set space between slider images. Pass object like `{width: '400px', height: '300px', space: 4}` or you can pass value in percentage `{width: '20%', height: '20%'}` OR set only space `{space: 4}`                                                      | `{width: 205, height: 200, space: 3}` |
| manageImageRatio   | @Input  | boolean               | Show images with aspect ratio if value is `true` and set imageSize width and height on parent div                                                                                                                                                                                                                   | false                                 |
| autoSlide          | @Input  | number/boolean/object | Auto slide images according provided time interval. Option will work only if **infinite** option is **true**. For number data type minimum value is 1 second and Maximum value is 5 second. By object data type you can prevent auto slide stop behaviour on mouse hover event. `{interval: 2, stopOnHover: false}` | 0                                     |
| showArrow          | @Input  | boolean               | Hide/Show slider arrow buttons                                                                                                                                                                                                                                                                                      | true                                  |
| arrowKeyMove       | @Input  | boolean               | Disable slider and popup image left/right move on arrow key press event, if value is `false`                                                                                                                                                                                                                        | true                                  |
| videoAutoPlay      | @Input  | boolean               | Auto play popup video                                                                                                                                                                                                                                                                                               | false                                 |
| showVideoControls  | @Input  | boolean               | Hide video control if value is `false`                                                                                                                                                                                                                                                                              | true                                  |
| direction          | @Input  | string                | Set text direction. You can pass **rtl** / **ltr** / **auto**                                                                                                                                                                                                                                                       | ltr                                   |
| slideOrderType     | @Input  | string                | Arrange slider images in Ascending order by `ASC` and in Descending order by `DESC`. `order` key must be exist with image object.                                                                                                                                                                                   | ASC                                   |
| lazyLoading        | @Input  | boolean               | Lazy load images and Iframe if true.                                                                                                                                                                                                                                                                                | false                                 |
| defaultActiveImage | @Input  | number                | Set image as selected on load.                                                                                                                                                                                                                                                                                      | null                                  |
| imageClick         | @Output | n/a                   | Executes when click event on slider image. Return image index.                                                                                                                                                                                                                                                      | n/a                                   |
| arrowClick         | @Output | n/a                   | Executes when click on slider left/right arrow. Returns current event name and next/previous button disabled status.                                                                                                                                                                                                | n/a                                   |
| lightboxClose      | @Output | n/a                   | Executes when lightbox close.                                                                                                                                                                                                                                                                                       | n/a                                   |
| lightboxArrowClick | @Output | n/a                   | Executes when click on lightbox next/previous arrow.                                                                                                                                                                                                                                                                | n/a                                   |

## Add custom navigation button

```typescript
import { Component, ViewChild } from '@angular/core';
import { RmImageSliderComponent } from 'rm-image-slider';

@Component({
  selector: 'sample',
  standalone: true,
  imports: [RmImageSliderComponent],
  template:`
        <rm-image-slider [images]="imageObject" #nav>
        </rm-image-slider>
        <button (click)="prevImageClick()">Prev</button>
        <button (click)="nextImageClick()">Next</button>
        `
})
class Sample {
  @ViewChild('nav') slider: RmImageSliderComponent;
  imageObject = [{...}]

  prevImageClick() {
    this.slider.prev();
  }

  nextImageClick() {
    this.slider.next();
  }
}
```

---

## 🧭 Compatibility

| Angular Version | Support | Standalone | Notes |
|-----------------|---------|------------|-------|
| 14.x | ✅ Full | ✅ Yes | Minimum required |
| 15.x | ✅ Full | ✅ Yes | Recommended |
| 16.x | ✅ Full | ✅ Yes | Recommended |
| 17.x | ✅ Full | ✅ Yes | Latest tested |
| 18.x+ | ✅ Expected | ✅ Yes | Should work |

---

### 🧭 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 80+ | ✅ Full |
| Firefox | 75+ | ✅ Full |
| Safari | 13+ | ✅ Full |
| Edge | 80+ | ✅ Full |

---

## 🌳 Tree-Shaking and Optimization

-   The library is marked as `sideEffects: false` to support advanced tree-shaking.
-   The service-based API is inherently tree-shakable; it won\'t be included in your bundle if it\'s not imported and used.

---

### Development Setup

```bash
git clone https://github.com/malikrajat/rm-image-slider.git
cd rm-rm-image-slider
pnpm install
pnpm start  # Serves test app on localhost:4200

```

---

## 🐛 Issues & Support

- 🐛 [Report Bug](https://github.com/malikrajat/rm-image-slider/issues/new?template=bug_report.md)
- 💡 [Request Feature](https://github.com/malikrajat/rm-image-slider/issues/new?template=feature_request.md)
- 💬 [Discussions](https://github.com/malikrajat/rm-image-slider/discussions)
- 📧 [Email Support](mailto:mr.rajatmalik@gmail.com?subject=rm-image-slider%20Support)

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Rajat Malik**
- 🌐 Website: [rajatmalik.dev](https://rajatmalik.dev)
- 📧 Email: [mr.rajatmalik@gmail.com](mailto:mr.rajatmalik@gmail.com)
- 💼 LinkedIn: [Connect with me](https://linkedin.com/in/errajatmalik)

---

## 💝 Show Your Support

If this library has saved you development time and helped create amazing image sliders in your projects, **please consider giving it a ⭐ star!** 

🌟 **Why star this repo?**
- Help other developers discover this lightweight, optimized solution
- Support continued development and improvements
- Show appreciation for free, quality tools
- Boost visibility in the Angular community

### 🚀 **Want More Quality Libraries?**

This is just one of several useful libraries I've created. **[Explore my other Angular & web development libraries](https://github.com/malikrajat?tab=repositories)** that might solve your next challenge:

- 🔧 **Utility libraries** for common development tasks
- 🎨 **UI components** for better user experiences  
- ⚡ **Performance tools** for optimization
- 📱 **Mobile-friendly solutions** for responsive apps

**Found them helpful?** A star on each repo you find useful helps tremendously! It takes just one click but means the world to open-source maintainers.

[![GitHub followers](https://img.shields.io/github/followers/malikrajat?style=social)](https://github.com/malikrajat)
[![GitHub stars](https://img.shields.io/github/stars/malikrajat/rm-image-slider?style=social)](https://github.com/malikrajat/rm-image-slider/stargazers)

---

## Credits

The library is inspired by one other library.