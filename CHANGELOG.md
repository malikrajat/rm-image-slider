# Changelog

All notable changes to the `rm-image-slider` library will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [22.0.0] - 2026-07-04
### Added
- **Angular 22 Support**: Added official compatibility for Angular 22.x.
- **Dependency Upgrades**: Upgraded build toolchain to TypeScript `~6.0.3` and Angular CLI `^22.0.1`.
- **Peer Dependency Ranges**: Broadened peer dependency limits (`@angular/core: ^20.0.0 || ^26.0.0`) to provide developers with maximum integration flexibility.

### Fixed
- Modernized unit testing utilities, transitioning setup profiles for Karma/Vitest and workspace compatibility.

---

## [21.0.0] - 2025-11-20
### Added
- **GIF Animation Support**: Added native support for rendering animated GIF formats inside both the main slider and lightbox display modules.
- **Improved Build Assets**: Configured the build pipeline to properly bundle auxiliary asset files alongside the library output.

### Fixed
- Fixed broken asset/demo path references in the documentation and README.
- Resolved build compilation warnings regarding missing assets.

---

## [20.0.0] - 2025-05-15
### Added
- **Angular 20 Support**: Fully upgraded the library build output to conform to the Angular 20 standard.
- **Package Manager Optimization**: Migrated project lockfiles to `pnpm@9` for faster installation pipelines and safer dependency trees.

---

## [19.0.1] - 2024-11-28
### Added
- **Angular 19 Support**: Updated peer dependency ranges and core compilers to support Angular 19 features.

### Changed
- Expanded the library documentation with modern standalone usage instructions and code-sandbox links.

---

## [18.2.10] - 2024-09-12
### Changed
- Upgraded the package dependencies and peer specifications to Angular 18.2.10.
- Enhanced rendering checks when updating lists dynamically at runtime.

---

## [18.1.5] - 2024-07-22
### Fixed
- Fixed an issue with autoplay cycles running after components were unmounted.
- General bug fixes in the custom-image slider wrapper.

---

## [18.1.4] - 2024-07-02
### Added
- **Modern Angular Control Flow**: Migrated all component templates from standard structural directives (`*ngIf` and `*ngFor`) to Angular 18's new native control flow syntax (`@if` and `@for`). This delivers significant runtime rendering performance boosts.
- **Angular 18 Support**: Initial upgrade step targeting the Angular 18 framework core.

---

## [17.1.3] - 2024-02-10
### Added
- **Initial Stable Release**: Standard release of the standalone image & video slider for Angular 17.
- **Lightbox Overlay**: Included built-in lightbox viewer supporting keyboard-based (`ArrowLeft`/`ArrowRight`/`Escape`) navigation.
- **Multi-Format Media Support**: Out-of-the-box support for JPEG, PNG, Base64 strings, YouTube links, and native MP4 videos.
- **Touch Gesture Integration**: Implemented responsive swipe gesture tracking on mobile and tablet displays.
