# Change Log
All notable changes to this project will be documented in this file.

## [Unreleased]
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

[Unreleased]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.2...HEAD
[0.0.2]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.1...v0.0.2
