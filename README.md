# rm-image-slider

<p align="left">
  <img src="https://img.shields.io/npm/v/rm-image-slider.svg" alt="npm version">
  <img src="https://img.shields.io/badge/Stability-production--ready-success" alt="Production ready">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license">
  <img src="https://img.shields.io/badge/Angular-14%20to%2022-blue" alt="Angular support range">
  <img src="https://img.shields.io/badge/Ivy-compatible-blue" alt="Ivy compatible">
  <img src="https://img.shields.io/badge/Standalone-supported-success" alt="Standalone API">
  <img src="https://img.shields.io/badge/AOT-compatible-blue" alt="AOT compatible">
  <img src="https://img.shields.io/badge/SSR-compatible-success" alt="SSR compatible">
  <img src="https://img.shields.io/badge/TypeScript-strict-blue" alt="Strict TS">
  <img src="https://img.shields.io/badge/tree--shaking-supported-success" alt="Tree-shakable">
  <img src="https://img.shields.io/badge/Side%20Effects-none-blue" alt="No side effects">
  <img src="https://img.shields.io/badge/Linting-enabled-success" alt="Linting">
  <img src="https://img.shields.io/badge/Tests-covered-blue" alt="Tests">
  <img src="https://img.shields.io/badge/Coverage-90%25-success" alt="Coverage">
  <img src="https://img.shields.io/badge/A11y-WCAG%202.1-success" alt="Accessibility compliant">
  <img src="https://img.shields.io/badge/API-documented-blue" alt="API docs">
  <img src="https://img.shields.io/badge/Examples-available-success" alt="Examples">
  <img src="https://img.shields.io/badge/Dependencies-none-success" alt="No dependencies">
  <img src="https://img.shields.io/npm/dt/rm-image-slider" alt="total downloads">
  <img src="https://img.shields.io/npm/last-update/rm-image-slider" alt="Last update">
  <img src="https://img.shields.io/badge/Maintained-yes-success" alt="Maintained">
  <img src="https://img.shields.io/badge/SemVer-compliant-blue" alt="SemVer">
</p>



## See It In Action

<div align="center">
  
  ![rm-image-slider Demo](https://github.com/malikrajat/rm-image-slider/blob/main/assets/rm-image-slider-demo.gif)
  
  Experience the power: Image carousel, lightbox popup, video support, and touch gestures - all in one lightweight component!

</div>

---

<p align="center">
  An Angular responsive image slider with lightbox popup.
  Also support youtube and mp4 video urls. It is lazy loading and highly optimized with standalone component.
</p>

---

## Features!

- Responsive (support images width and height in both % and px)
- captures swipes from phones and tablets
- Compatible with Angular Universal
- Image lightbox popup
- captures keyboard next/previous arrow key event for lightbox image move
- Support Images (jpeg, jpg, gif, png and Base64-String), Youtube url and MP4 video (url and Base64-String)
- Handling runtime image arraylist changes

---

## Live Demo & Playground

<div align="center">

  <table>
  <tr>
    <td align="center" width="50%">
      <a href="https://stackblitz.com/edit/stackblitz-starters-3kmpe6u9" target="_blank">
        <img src="https://img.shields.io/badge/StackBlitz_Demo-1976D2?style=for-the-badge&logo=stackblitz&logoColor=white" alt="StackBlitz Demo"/>
      </a>
      <br/><br/>
      <sub><b>Interactive Playground</b></sub><br/>
      <sub>Try all features live in your browser</sub>
    </td>
    <td align="center" width="50%">
      <a href="https://github.com/malikrajat/rm-image-slider/main#quick-start" target="_blank">
        <img src="https://img.shields.io/badge/Code_Examples-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Examples"/>
      </a>
      <br/><br/>
      <sub><b>Complete Examples</b></sub><br/>
      <sub>Copy-paste ready code samples</sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <a href="https://www.npmjs.com/package/rm-image-slider" target="_blank">
        <img src="https://img.shields.io/badge/npm_Package-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm Package"/>
      </a>
      <br/><br/>
      <sub><b>npm Registry</b></sub><br/>
      <sub>Install and view package details</sub>
    </td>
    <td align="center" width="50%">
      <a href="https://github.com/malikrajat/rm-image-slider" target="_blank">
        <img src="https://img.shields.io/badge/GitHub_Repo-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository"/>
      </a>
      <br/><br/>
      <sub><b>Source Code</b></sub><br/>
      <sub>Star, fork, and contribute</sub>
    </td>
  </tr>
</table>

</div>

---

# Quick Start

Install rm-image-slider with npm and yarn

```bash

  npm: npm install rm-image-slider --save 

  yarn: yarn add rm-image-slider

```

# Setup :

**Import module in your component:**

```typescript
import { RmImageSliderComponent, ImageObject } from 'rm-image-slider';
...
@Component({
  selector: '',
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

### Development Setup

```bash
git clone https://github.com/malikrajat/rm-image-slider.git
cd rm-rm-image-slider
pnpm install
pnpm start  # Serves test app on localhost:4200

```

---

## Changelog

See [CHANGELOG.md](https://github.com/malikrajat/rm-image-slider/blob/master/CHANGELOG.md) for release history and updates.

---

### Latest Release

Check the [releases page](https://github.com/malikrajat/rm-image-slider/releases) for the most recent version and updates.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**TL;DR:** You can use this library freely in commercial and personal projects.

### MIT License Summary

**You can:**
- Use commercially
- Modify the code
- Distribute
- Use privately

**You must:**
- Include the license and copyright notice

**You cannot:**
- Hold the author liable

---

## FAQ

### General

**Q: How do I install rm-image-slider?**

A: Install via npm or yarn:
```bash
npm install rm-image-slider --save
# or
yarn add rm-image-slider
```

**Q: What Angular versions are supported?**

A: Angular 14 to 18+ are supported. The component is standalone and works with Ivy.

**Q: Does it work with SSR (Angular Universal)?**

A: Yes, rm-image-slider is fully compatible with Angular Universal.

### Images & Media

**Q: What image formats are supported?**

A: Images (jpeg, jpg, gif, png) and Base64-encoded strings are supported.

**Q: Can I use YouTube videos?**

A: Yes, pass a YouTube URL in the `video` property of the image object.

**Q: How do I add MP4 videos?**

A: Use the `video` property for MP4 URLs. You can also set a `posterImage` to show a thumbnail in the slider.

**Q: How do I enable lazy loading?**

A: Set `[lazyLoading]="true"` on the component. Images will load only when they come into view.

### Lightbox & Navigation

**Q: How do I disable the lightbox popup?**

A: Set `[imagePopup]="false"` to disable the lightbox on image click.

**Q: Can I navigate slides programmatically?**

A: Yes, use `@ViewChild` to get a reference and call `.prev()` or `.next()` methods.

**Q: How do I change the arrow key behavior?**

A: Set `[arrowKeyMove]="false"` to disable keyboard navigation.

### Customization

**Q: How do I change the slider direction (RTL/LTR)?**

A: Use the `direction` input: `[direction]="'rtl'"` or `"ltr"`. Default is `"ltr"`.

**Q: How do I set custom image dimensions?**

A: Use the `imageSize` input: `[imageSize]="{width: '400px', height: '300px', space: 4}"`.

**Q: How do I enable infinite looping?**

A: Set `[infinite]="true"`. Note: auto-slide only works when infinite is enabled.

**Q: How do I arrange images in a specific order?**

A: Add an `order` property to each image object and set `[slideOrderType]="'ASC'"` or `"DESC"`.


---

## Browser Compatibility

### Supported Browsers

| Browser | Version | Support Level | Notes |
|---------|---------|---------------|-------|
| Chrome | 80+ | Full Support | Recommended browser |
| Firefox | 75+ | Full Support | Works perfectly |
| Safari | 13+ | Full Support | iOS and macOS |
| Edge | 80+ | Full Support | Chromium-based |
| Opera | 67+ | Full Support | Works well |
| Samsung Internet | 12+ | Full Support | Mobile support |

### Mobile Support

- iOS Safari 13+
- Chrome for Android 80+
- Samsung Internet
- All mobile browsers with modern JavaScript support

### Download Behavior by Platform

| Platform | Behavior |
|----------|----------|
| Desktop Chrome/Firefox/Edge | Direct download to Downloads folder |
| Desktop Safari | May prompt for download location |
| iOS Safari | Opens download manager |
| Android Chrome | Downloads to Downloads folder |
| Mobile Safari | Shows share sheet with save option |

### Not Supported

- Internet Explorer (all old versions)
- Very old mobile browsers (pre-2019)

---

## Statistics

[![npm downloads](https://img.shields.io/npm/dt/rm-image-slider.svg)](https://www.npmjs.com/package/rm-image-slider)
[![npm version](https://img.shields.io/npm/v/rm-image-slider.svg)](https://www.npmjs.com/package/rm-image-slider)
[![GitHub issues](https://img.shields.io/github/issues/malikrajat/rm-image-slider.svg)](https://github.com/malikrajat/rm-image-slider/issues)
[![GitHub stars](https://img.shields.io/github/stars/malikrajat/rm-image-slider.svg?style=social)](https://github.com/malikrajat/rm-image-slider/stargazers)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/malikrajat/rm-image-slider/blob/main/LICENSE)

---


## Support This Project

If **rm-image-slider** has helped you build better Angular applications, please consider:

If this library has saved you development time and helped create amazing image sliders in your projects, **please consider giving it a  star!** 

 **Why star this repo?**
- Help other developers discover this lightweight, optimized solution
- Support continued development and improvements
- Show appreciation for free, quality tools
- Boost visibility in the Angular community
- Increases visibility in the Angular community
- Supports ongoing development and maintenance
- Encourages more open-source contributions
- Helps other developers find quality tools

###  **Want More Quality Libraries?**

This is just one of several useful libraries I've created. **[Explore my other Angular & web development libraries](https://github.com/malikrajat?tab=repositories)** that might solve your next challenge:

-  **Utility libraries** for common development tasks
-  **UI components** for better user experiences  
-  **Performance tools** for optimization
-  **Mobile-friendly solutions** for responsive apps

**Found them helpful?** A star on each repo you find useful helps tremendously! It takes just one click but means the world to open-source maintainers.

[![GitHub](https://img.shields.io/badge/View_All_Repositories-181717?logo=github)](https://github.com/malikrajat?tab=repositories)
[![GitHub followers](https://img.shields.io/github/followers/malikrajat?style=social)](https://github.com/malikrajat)
[![GitHub stars](https://img.shields.io/github/stars/malikrajat/rm-image-slider?style=social)](https://github.com/malikrajat/rm-image-slider/stargazers)

---

## Support and Community

### Getting Help

Need assistance? We're here to help!

| Support Channel | Link | Best For |
|----------------|------|----------|
| Bug Reports | [Report Bug](https://github.com/malikrajat/rm-image-slider/issues/new?template=bug_report.md) | Technical issues |
| Feature Requests | [Request Feature](https://github.com/malikrajat/rm-image-slider/issues/new?template=feature_request.md) | New features |
| Discussions | [Join Discussion](https://github.com/malikrajat/rm-image-slider/discussions) | General questions |
| Email | [mr.rajatmalik@gmail.com](mailto:mr.rajatmalik@gmail.com?subject=rm-image-slider%20Support) | Direct support |

### Documentation

- [GitHub Repository](https://github.com/malikrajat/rm-image-slider)
- [npm Package](https://www.npmjs.com/package/rm-image-slider)
- [Live Demo](https://stackblitz.com/edit/stackblitz-starters-3kmpe6u9)
- [Changelog](https://github.com/malikrajat/rm-image-slider/blob/master/CHANGELOG.md)

### Community

- Star the repository to show support
- Watch for updates and new releases
- Share your use cases and feedback
- Contribute code or documentation

### Stay Updated

- Follow the project on [GitHub](https://github.com/malikrajat/rm-image-slider)
- Star the repository for updates
- Watch for new releases
- 

---

## Acknowledgments

This library was created to provide a simple, lightweight solution for Image slider in Angular applications. Special thanks to the Angular community for their feedback and contributions.

Special thanks to:
- **[Angular Team](https://angular.dev/)** - Amazing framework and ecosystem
- **Contributors** - Thank you for making this library better
- **Community** - For feedback and feature requests

---


## Other Libraries

### UI Components

| Library                           | Description                                                              | npm Link                                                                                                        |
|-----------------------------------| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| **rm-range-slider**               | Lightweight two-thumb range slider with tooltips and color customization | [![npm](https://img.shields.io/npm/v/rm-range-slider.svg)](https://www.npmjs.com/package/rm-range-slider)       |
| **rm-ng-range-slider**            | Angular-specific version of the dual range slider                        | [![npm](https://img.shields.io/npm/v/rm-ng-range-slider.svg)](https://www.npmjs.com/package/rm-ng-range-slider) |
| **rm-carousel**                   | Simple, responsive carousel component                                    | [![npm](https://img.shields.io/npm/v/rm-carousel.svg)](https://www.npmjs.com/package/rm-carousel)               |
| **rm-image-slider**               | Minimal image slider with smooth transitions                             | [![npm](https://img.shields.io/npm/v/rm-image-slider.svg)](https://www.npmjs.com/package/rm-image-slider)       |
| **rm-ng-star-rating**             | Configurable Angular star rating component with readonly mode            | [![npm](https://img.shields.io/npm/v/rm-ng-star-rating.svg)](https://www.npmjs.com/package/rm-ng-star-rating)   |
| **@codewithrajat/rm-ng-typeahead** | Angular autocomplete/typeahead component with search suggestions and keyboard navigation | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/rm-ng-typeahead) |
| **@codewithrajat/rm-ng-editor**                  | Rich text editor component for Angular applications with customizable toolbar support | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/rm-ng-editor) |

---

### PDF & Export Libraries

| Library                                | Description                                                  | npm Link                                                                                                                                        |
| -------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **rm-ng-export-to-csv**                | Export JSON data to CSV with zero dependencies               | [![npm](https://img.shields.io/npm/v/rm-ng-export-to-csv.svg)](https://www.npmjs.com/package/rm-ng-export-to-csv)                               |
| **@codewithrajat/rm-ng-pdf-export**    | Image-based PDF export tool for Angular applications         | [![npm](https://img.shields.io/npm/v/@codewithrajat/rm-ng-pdf-export.svg)](https://www.npmjs.com/package/@codewithrajat/rm-ng-pdf-export)       |
| **@codewithrajat/rm-ng-structure-pdf** | Generate structured PDFs for reports, invoices, or documents | [![npm](https://img.shields.io/npm/v/@codewithrajat/rm-ng-structure-pdf.svg)](https://www.npmjs.com/package/@codewithrajat/rm-ng-structure-pdf) |
| **@codewithrajat/rm-ng-pdf-viewer** | Angular PDF viewer component with zoom, navigation, and document rendering support | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/rm-ng-pdf-viewer) |

---

### Chrome Extension

| Library | Description | Link                                                                                                                                    |
|----------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| **quickocr** | Chrome extension that extracts text from images using OCR technology | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/quickocr/releases)                                     |
| **readLoude** | Chrome extension that read you web page loude e.g article etc. | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/readLoude/releases)                            |
| **ai-assistant-reply** | AI Chrome extension to auto generate reply on linked in posts. | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/ai-assistant-reply/releases) |

---

### VS Code Extension

| Library | Description | Link                                                                                                                                      |
|----------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| **dead-css-cleaner** | VS Code extension for identifying and cleaning unused CSS styles | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/dead-css-cleaner/releases)      |
| **file-coverage-insight** | VS Code extension for auto generated component file coverage automatelly on open. | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/file-coverage-insight/releases) |

---

### Desktop Applications - All Plateform

| Library | Description | Link                                                                                                                           |
|----------|-------------|--------------------------------------------------------------------------------------------------------------------------------|
| **deepwork** | Cross-platform productivity application for focus sessions and deep work tracking | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/deepwork/releases)          |
| **JsSandbox** | Cross-platform JavaScript playground and code execution environment | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/JsSandbox/releases) |

---

### Device Detection

| Library                        | Description                                             | npm Link                                                                                                                        |
| ------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **rm-ng-device-detection**     | Detect device type, OS, and browser in Angular          | [![npm](https://img.shields.io/npm/v/rm-ng-device-detection.svg)](https://www.npmjs.com/package/rm-ng-device-detection)         |

---

### Notifications

| Library           | Description                                       | npm Link                                                                                              |
| ----------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **rm-pushnotify** | Lightweight push-style toast notification utility | [![npm](https://img.shields.io/npm/v/rm-pushnotify.svg)](https://www.npmjs.com/package/rm-pushnotify) |
| **rm-toast-notification** | Cross-platform toast and desktop notification library for web, Angular, and desktop applications | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/rm-toast-notification) |


---

### Layout & Dynamic Rendering

| Library | Description | Link |
|----------|-------------|------|
| **rm-ng-dynamic-layout** | Dynamic layout rendering engine for Angular applications using JSON-driven UI configuration | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/rm-ng-dynamic-layout) |

---

### Developer Tools & Extensions

| Library | Description | Link                                                                                                                            |
|----------|-------------|---------------------------------------------------------------------------------------------------------------------------------|
| **rm-colorful-console-logger** | Structured and colorized console logging utility for developers | [![npm](https://img.shields.io/npm/v/rm-colorful-console-logger.svg)](https://www.npmjs.com/package/rm-colorful-console-logger) |

---

### Meta & Personal Branding

| Library         | Description                                                      | npm Link                                                                                          |
| --------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **about-rajat** | Developer portfolio package for branding and quick personal info | [![npm](https://img.shields.io/npm/v/about-rajat.svg)](https://www.npmjs.com/package/about-rajat) |

---

### All Packages

Browse all my packages:
- [npm: @codewithrajat](https://www.npmjs.com/settings/codewithrajat/packages)
- [npm: rajatmalik](https://www.npmjs.com/settings/rajatmalik/packages)
- [GitHub: @malikrajat](https://github.com/malikrajat?tab=repositories)

---


## Author

**Rajat Malik**

Full‑Stack Developer and Frontend Architect at Siemens with 14+ years building scalable enterprise platforms, specializing in micro‑frontends, AI‑native development, React, and Angular.  
Author of 10+ open‑source libraries and 100+ technical articles, driving innovation through developer‑friendly tools, performance optimization, and AI‑assisted workflows.

### GET IN TOUCH

- Portfolio:  [rajatmalik.dev](https://rajatmalik.dev)
- Email:      [mr.rajatmalik@gmail.com](mailto:mr.rajatmalik@gmail.com)
- LinkedIn:   [errajatmalik](https://linkedin.com/in/errajatmalik)
- GitHub:     [@malikrajat](https://github.com/malikrajat)
- npm:        [rajatmalik](https://www.npmjs.com/~rajatmalik)

### SOCIAL PRESENCE
- Threads:    [Threads: rajatmalik](https://www.threads.net/@er.rajatmalik)
- Twitter/X:  [Twitter/X: rajatmalik](https://twitter.com/er_rajatmalik)
- BlueSky:    [BlueSky: rajatmalik](http://devrajat.bsky.social)

### CONTENT & WRITING

- Medium:    [Medium: rajatmalik]( https://medium.com/@codewithrajat)
- Dev.to:    [Dev.to: rajatmalik]( https://dev.to/codewithrajat)
- Substack:   [Substack: rajatmalik](https://codewithrajat.substack.com)
- Hashnode:   [Hashnode: rajatmalik](https://hashnode.com/@codeswithrajat)

---

<p align="center">
  <p align="center">Made with care and love  by <a href="https://rajatmalik.dev">Rajat Malik</a> for the Angular community</p>
</p>

<p align="center">
  <a href="https://github.com/malikrajat/rm-image-slider/stargazers">Star on GitHub</a> •
  <a href="https://www.npmjs.com/package/rm-image-slider">View on npm</a> •
  <a href="https://github.com/malikrajat/rm-image-slider/issues">Report Issue</a>
</p>


<p align="center">
  Made with dedication by <a href="https://rajatmalik.dev">Rajat Malik</a>
</p>

