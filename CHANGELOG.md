# Change Log
All notable changes to this project will be documented in this file.

## [0.0.12] - 2017-05-07
### Added
- Implemented pf-drawer, pf-drawer-group and pf-drawer-notification which together compose the notification drawer pattern.
- Modified vue-strap's dropdown to allow to manually define a list-item dropdown

### Changed
- Switched navbar-utility to navbar-right when using the vertical layout.

### Fixed
- Fixed position of the caret and the dropdown of style dropdown-kebab-pf.
- Fixed display of dropdown actions set on pf-notification.

## [0.0.11] - 2017-04-09
### Fixed
- Fixed infinite loop in pf-notification dismiss code.

## [0.0.10] - 2017-01-31
### Added
- Added action slots for pf-table's rows.

### Fixed
- Corrected invalid markup in card-notification.

### Changed
- Vue-strap's dropdowns in pf-table's action columns are styled to use the ellipsis icon as per patternfly's design.

## [0.0.9] - 2017-01-25
### Fixed
- Removed incorrect fixed height in scrollable tables.
- Enabled flex-layout on container-flex.
- Refactored syncronization of pf-table's fixed headers. Should be more consistent.

## [0.0.8] - 2017-01-25
### Added
- Implemented the scrollable property on pf-table which allows for fixed header and footer with scrollable rows.

### Fixed
- Fixed the pf-table footer colspan when the selectable property is enabled.
- Fixed runtime errors in IE.

### Changed
- Moved build to webpack to fix runtime errors in IE.

## [0.0.7] - 2017-01-05
### Added
- Implemented the pf-table component.
- Implemented the flex property on pf-layout.

### Fixed
- Fixed display of column picker in the pf-toolbar when the sort and/or list controls are disabled.

### Changed
- pf-column-picker emits picked columns in the same order as they are listed.

## [0.0.6] - 2017-01-02
### Fixed
- Rebuild with Vue 2.1.8.

## [0.0.5] - 2016-12-28
### Added
- Implemented the "nomargin" property on pf-layout.
- Implemented v-tooltip directive using tether-tooltip.

### Fixed
- Display the filter label instead of the filter name in the active filters view.
- The view controls in the pf-toolbar were not correctly hidden in some cases.

## [0.0.4] - 2016-12-22
### Added
- Bundled a VueStrap build since there is no working distribution available at this moment. Every VueStrap component is installed together with VuePatternfly but using the "bs-" prefix.
- Implemented the "attached" property on pf-toolbar so that it can be displayed attached to an adjacient table view.
- Implemented a column picker for the table layout on the pf-toolbar.

### Changed
- Refactored pf-sort component and renamed sorting properties on pf-toolbar
- Refactored the filter-fields and filters properties of pf-toolbar.

### Fixed
- Fixed appearance of the additional actions dropdown menu on the pf-toolbar.
- Fixed click on layout controls of pf-toolbar
- The input is properly cleared after adding a filter in the pf-toolbar.

## [0.0.3] - 2016-12-10
### Added
- The pf-notification dropdown is now slotted so that it can be customized.
- The pf-notification action button can now be displayed as a button instead of a link.
- The pf-aggregate-status-card and pf-card-notification components now also accept value of type Number for their count property.

### Changed
- pf-toolbar actions are aligned to the right if the layout controls are
disabled, as per PatternFly design guidelines.
- Changed icons for the pf-toolbar view control buttons.
- The result count indication is now inlined inside the toolbar if there are no active filters.
- The pf-notification will now emit an 'action' event by default if no other name is specified.

### Fixed
- The pf-notifications container should be able to correctly display "slotted" notifications when present.
- The externalized dependencies are now being resolved correctly when using the library with ES6 imports.

## [0.0.2] - 2016-12-08
### Added
- The pf-layout component can be disabled, removing all layout classed from the html element e displaying only the default slot content

## 0.0.1 - 2016-12-07
### Added
- pf-aggregate-status-card component
- pf-c3-chart component
- pf-card component
- pf-card-notification component
- pf-empty-chart component
- pf-filter-fields component
- pf-filter-results component
- pf-layout component
- pf-notification component
- pf-notifications component
- pf-sort component
- pf-toolbar component
- pf-utilization-bar-chart component

[Unreleased]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.12...HEAD
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
