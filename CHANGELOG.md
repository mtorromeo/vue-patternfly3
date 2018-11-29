# Change Log
All notable changes to this project will be documented in this file.

## [Unreleased]
### Added
- Pass all attributes, listeners, classes and styles to the dom elements defined in all functional components.
- Added style for labels with remove button.

### Changed
- Styled thin scrollbars.
- **BACKWARD INCOMPATIBLE CHANGE**: Removed `v-tooltip` directive since a similar directive and wrapper component is [already present in uiv](https://uiv.wxsm.space/tooltip/).
- Updated c3 library with support for more chart options.

### Fixed
- Disabled extra container in `pf-list-item-additional-info` that broke the stacked layout.
- Fixed expandable `pf-list-item-additional-info` items not appearing as links.

## [0.0.19] - 2018-11-02
### Added
- The key for the iteration performed by `pf-list-view` on its items is now passed to the `pf-list-item`'s slot scope in the `index` property.

### Fixed
- Fixed multiple `pf-list-item-additional-info` in the same `pf-list-item` that when expanded would always show the content of the last `pf-list-item-additional-info` slot.
- Fixed screen-reader label of the selection checkbox of `pf-list-group-item`.

## [0.0.18] - 2018-10-24
### Added
- `pf-expand-collapse` component.
- `pf-vertical-nav-divider` component.
- Added ecmascript module build in `dist/vue-patternfly.esm.js` using rollup.
- Included minimized css in `dist/`.
- New `src` property of `pf-icon` that allows to use any image as an icon.
- New `icon-src` property of `pf-list-item` to specify an image as an icon.
- Implemented empty state for `pf-drawer-group`.
- Added close button inside `pf-drawer` with ability to bind the `hidden` prop using `v-model` or `hidden.sync`.
- Allow `v-model` as an alternative to `open.sync` in `pf-application-launcher`.

### Changed
- Allowed non persistent toast notifications.

### Fixed
- Corrected source map association.
- Fixed behavior of the `persistent` prop of `pf-notification` which should disable the auto-dismiss timer and show a close button.
- Fixed non-working `titleWidth` and `footerWidth` properties of `pf-utilization-bar-chart`.

## [0.0.17] - 2018-10-19
### Added
- Added `pf-dropdown` component with is a very small functional wrapper around uiv's dropdown, to provide DRYer dropdown for the most common usage pattern.

### Changed
- **BACKWARD INCOMPATIBLE CHANGE**: Removed vue-strap, which is unmantained and deprecated and replace it with uiv.
- **BACKWARD INCOMPATIBLE CHANGE**: Bootstrap components are now registered without the `bs-` prefix to stay consistent with uiv's own documentation.

## [0.0.16] - 2018-04-13
### Fixed
- Fixed flex layout.

## [0.0.15] - 2018-04-13
### Fixed
- Prevent custom layout distruption when not `pf-layout` is disabled.
- Removed bottom padding on `pf-table`.

## [0.0.14] - 2018-04-13
### Added
- Implemented `pf-menu-item` as a functional component with vue-router integration.
- Implemented secondary and tertiary vertical navigation.
- Implemented grid layout on `pf-layout`.
- Implemented modal overlay pattern with `pf-modal` (Contributed by [@pebri86]).
- Implemented `pf-list-view` (Contributed by [@pebri86]).
- Implemented `pf-icon` functional component with automatic class configuration for FontAwesome, Glyphicons and Patternfly icons.
- Implemented secondary and tertiary navigation.
- Upgraded build to webpack 4.

### Changed
- Converted `pf-empty-chart`, `pf-aggregate-status-card`, `pf-card-notification` and `pf-notification-bell` to functional components.
- When a `pf-c3-chart` has empty data a `pf-empty-chart` component is shown instead.
- **BACKWARD INCOMPATIBLE CHANGE**: The `flex` property of `pf-layout` has been removed. The same layout can be applied using the `flex` value on the new `display` property.
- **BACKWARD INCOMPATIBLE CHANGE**: Renamed all `icon-class` properties to simply `icon`. The icon family classname is not needed anymore (instead of `fa fa-bell` you can just use `fa-bell`).

### Fixed
- Fixed issue with dropdown filters by removing vue-strap's select and option components.
- Fixed offset of `pf-application-launcher`.
- Fixed href property of `pf-launcher-item`s.
- Fixed various linting errors/warnings.

## [0.0.13] - 2017-09-11
### Added
- Implemented `v-model` on the page property `pf-paginate-control` components.
- Implemented two-way syncing of `sort-by` and `sort-direction` properties in `pf-table` and `pf-toolbar`.
- Implemented `pf-application-launcher` and `pf-launcher-item`.
- Implemented `pf-notification-bell` as a toggler for the `pf-drawer`.
- Added `navbar-brand-name` CSS class to correctly style text-only brand titles.
- Documented `v-tooltip` directive
- Implemented `data-placement` attribute as an alternative way to specify the tooltip positions.

### Changed
- **BACKWARD INCOMPATIBLE CHANGE**: The `page` property of `pf-table` components can now be synced with `:page.sync="mypagenr"`. As a result of this change the `change-page` event has now been renamed to `update:page`.
- **BACKWARD INCOMPATIBLE CHANGE**: The `view`, `filters` and `picked-columns` properties of `pf-toolbar` components can now be synced with the `.sync` `v-bind` modifier. As a result of this change the `view` event has now been renamed to `update:view`; the `filters` event has been renamed to `update:filters` and the `columns` event to `update:pickedColumns`.

## [0.0.12] - 2017-05-07
### Added
- Implemented `pf-drawer`, `pf-drawer-group` and `pf-drawer-notification` which together compose the notification drawer pattern.
- Modified vue-strap's dropdown to allow to manually define a list-item dropdown.

### Changed
- Switched `navbar-utility` to `navbar-right` when using the vertical layout.

### Fixed
- Fixed position of the caret and the dropdown of style `dropdown-kebab-pf`.
- Fixed display of dropdown actions set on `pf-notification`.

## [0.0.11] - 2017-04-09
### Fixed
- Fixed infinite loop in `pf-notification` dismiss code.

## [0.0.10] - 2017-01-31
### Added
- Added action slots for `pf-table`'s rows.

### Fixed
- Corrected invalid markup in `card-notification`.

### Changed
- Vue-strap's dropdowns in `pf-table`'s action columns are styled to use the ellipsis icon as per patternfly's design.

## [0.0.9] - 2017-01-25
### Fixed
- Removed incorrect fixed height in scrollable tables.
- Enabled flex layout on `container-flex`.
- Refactored syncronization of `pf-table`'s fixed headers. Should be more consistent.

## [0.0.8] - 2017-01-25
### Added
- Implemented the scrollable property on `pf-table` which allows for fixed header and footer with scrollable rows.

### Fixed
- Fixed the `pf-table` footer colspan when the selectable property is enabled.
- Fixed runtime errors in IE.

### Changed
- Moved build to webpack to fix runtime errors in IE.

## [0.0.7] - 2017-01-05
### Added
- Implemented the `pf-table` component.
- Implemented the flex property on `pf-layout`.

### Fixed
- Fixed display of column picker in the `pf-toolbar` when the sort and/or list controls are disabled.

### Changed
- `pf-column-picker` emits picked columns in the same order as they are listed.

## [0.0.6] - 2017-01-02
### Fixed
- Rebuild with Vue 2.1.8.

## [0.0.5] - 2016-12-28
### Added
- Implemented the "nomargin" property on `pf-layout`.
- Implemented `v-tooltip` directive using `tether-tooltip`.

### Fixed
- Display the filter label instead of the filter name in the active filters view.
- The view controls in the `pf-toolbar` were not correctly hidden in some cases.

## [0.0.4] - 2016-12-22
### Added
- Bundled a VueStrap build since there is no working distribution available at this moment. Every VueStrap component is installed together with VuePatternfly but using the "bs-" prefix.
- Implemented the "attached" property on `pf-toolbar` so that it can be displayed attached to an adjacient table view.
- Implemented a column picker for the table layout on the `pf-toolbar`.

### Changed
- Refactored pf-sort component and renamed sorting properties on `pf-toolbar`
- Refactored the `filter-fields` and `filters` properties of `pf-toolbar`.

### Fixed
- Fixed appearance of the additional actions dropdown menu on the `pf-toolbar`.
- Fixed click on layout controls of `pf-toolbar`
- The input is properly cleared after adding a filter in the `pf-toolbar`.

## [0.0.3] - 2016-12-10
### Added
- The `pf-notification` dropdown is now slotted so that it can be customized.
- The `pf-notification` action button can now be displayed as a button instead of a link.
- The `pf-aggregate-status-card` and `pf-card-notification` components now also accept value of type `Number` for their count property.

### Changed
- `pf-toolbar` actions are aligned to the right if the layout controls are
disabled, as per PatternFly design guidelines.
- Changed icons for the `pf-toolbar` view control buttons.
- The result count indication is now inlined inside the toolbar if there are no active filters.
- The `pf-notification` will now emit an `action` event by default if no other name is specified.

### Fixed
- The `pf-notifications` container should be able to correctly display "slotted" notifications when present.
- The externalized dependencies are now being resolved correctly when using the library with ES6 imports.

## [0.0.2] - 2016-12-08
### Added
- The `pf-layout` component can be disabled, removing all layout classed from the html element e displaying only the default slot content

## 0.0.1 - 2016-12-07
### Added
- `pf-aggregate-status-card` component
- `pf-c3-chart` component
- `pf-card` component
- `pf-card-notification` component
- `pf-empty-chart` component
- `pf-filter-fields` component
- `pf-filter-results` component
- `pf-layout` component
- `pf-notification` component
- `pf-notifications` component
- `pf-sort` component
- `pf-toolbar` component
- `pf-utilization-bar-chart` component

[Unreleased]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.19...HEAD
[0.0.19]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.18...v0.0.19
[0.0.18]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.17...v0.0.18
[0.0.17]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.16...v0.0.17
[0.0.16]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.15...v0.0.16
[0.0.15]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.14...v0.0.15
[0.0.14]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.13...v0.0.14
[0.0.13]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.12...v0.0.13
[0.0.12]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.11...v0.0.12
[0.0.11]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.10...v0.0.11
[0.0.10]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.9...v0.0.10
[0.0.9]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.8...v0.0.9
[0.0.8]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.7...v0.0.8
[0.0.7]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.6...v0.0.7
[0.0.6]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.5...v0.0.6
[0.0.5]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.1...v0.0.2

[@pebri86]: https://github.com/pebri86
