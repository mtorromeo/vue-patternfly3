# Change Log
All notable changes to this project will be documented in this file.

## [0.3.9] - 2024-03-13
### Fixed
- fix(tooltip): cleanup containers properly (Contributed by [@MrDeerly]).

## [0.3.8] - 2023-05-15
### Fixed
- fix(DrawerGroupAction): bind click event to the button element

## [0.3.7] - 2023-05-12
### Fixed
- fix(ts): added types for main import in package.json

## [0.3.6] - 2022-09-29
### Fixed
- fix(Modal): fixed body scrollbars disappearing by simply including a modal in the page (even if not shown)

## [0.3.5] - 2022-06-25
### Added
- feat(OUIA): te `pf-dropdown` component assigns ouia attributes to the menu dropdown element.

## [0.3.4] - 2022-04-29
### Fixed
- fix(OUIA): restored ouia type `V-PF3/` prefix.

## [0.3.3] - 2022-04-29
### Fixed
- fix: changed typescript types to correctly handle null/undefined.

## [0.3.2] - 2022-03-18
### Fixed
- fix(Modal): disabled implicit attr inheritance in modals.
- fix(ListView): do not assume a specific typescript type for pf-list-view rows.

## [0.3.1] - 2022-02-08
### Fixed
- fix(Layout): never pass undefined|null to emitted event update:collapsed.
- fix(OUIA): reverted ouia component names to use V-PF3/ prefix.

## [0.3.0] - 2022-02-03
### Added
- refactor: converted the whole codebase to typescript.
- feat(typescript): exported type definitions for all components.
- feat(Combobox): the dropdown trigger element is now slotted (slot name is `dropdownTrigger`) for better customization.

### Fixed
- fix(Dropdown): fixed removal of event listeners on umount.

### Changed
- **BACKWARD INCOMPATIBLE CHANGE**: All components are now exported with the name matching the component name (eg. `PfButton` instead of `Button`). The old exports are maintained for backwards compatibility but importing `* from 'vue-patternfly'` will now include the same components exported twice.
- **BACKWARD INCOMPATIBLE CHANGE**: All sort direction properties have been normalized as `'asc' | 'desc'` instead of a mix of `'asc' | 'desc'` and `'ascending' | 'descending'`.

## [0.2.11] - 2021-12-31
### Fixed
- fix(Dropdown): avoided possible access to undefined $refs while destructing the component.

## [0.2.10] - 2021-12-22
### Fixed
- fix(Popover, ColumnPicker): restored popover trigger element functionality.
- fix(Option): incorrect usage of composition api.

## [0.2.9] - 2021-12-17
### Added
- added compatibility with vue 3 configured in compat mode.
- feat: exported ouia utilities.

### Fixed
- fix(Combobox): do not emit null value when clearing the filter while still editing.
- fix: exported Popover, TableRow and Void components.

## [0.2.8] - 2021-12-09
### Fixed
- fix(Tooltip): fixed component name

## [0.2.7] - 2021-12-06
### Fixed
- fix(Notification): Re-register `pf-notification` as `pf-toast-notification` for backward compatibility.

## [0.2.6] - 2021-12-06
### Added
- feat: Implemented [OUIA](https://ouia.readthedocs.io/en/latest/README.html#metadata) data attributes on all components.

## [0.2.5] - 2021-10-22
### Fixed
- fix(Tooltip): exported `pf-tooltip` component.
- fix(Button): fixed error when using `pf-button` without a `router-link`.

## [0.2.4] - 2021-10-19
### Fixed
- Set href of the link when using the `pf-menu-item` as a `router-link`.

### Added
- New `pf-button` component.

## [0.2.3] - 2021-10-18
### Fixed
- Add missing `selectable` prop to `tipf-list-group-item` (Contributed by [@MrDeerly]).
- Fixed layout of `pf-toolbar` with no filters by not rendering the filter slot (Contributed by [@MrDeerly]).
- Do not disable `pf-select` components by default (Contributed by [@MrDeerly]).
- Fixed disabled attribute of inputs in `pf-radio-button` (Contributed by [@MrDeerly]).
- Fixed filters not working for the `pf-select` component (Contributed by [@MrDeerly]).
- Extra attributes on `pf-menu-item` are not passed to `router-link`s.

## [0.2.2]  - 2021-09-29
### Fixed
- Fixed forwarding of the page number event from `pf-list-view` (Contributed by [@MrDeerly]).

## [0.2.1] - 2021-09-29
### Fixed
- Fixed event propagation of the `update:page` event in `pf-list-view` (Contributed by [@MrDeerly]).

## [0.2.1] - 2021-09-21
### Fixed
- Fixed event unbinding in `pf-popup` and tooltips (Contributed by [@MrDeerly]).
- Fixed default trigger event for tooltips (Contributed by [@MrDeerly]).

## [0.2.0] - 2021-09-07
### Changed
- **BACKWARD INCOMPATIBLE CHANGE**: Migrated the whole library to Vue 3. The project is now in **passive maintenance** mode. Only bug fixes will be applied to this library and development has moved to [vue-patternfly4](https://github.com/mtorromeo/vue-patternfly4).
- **BACKWARD INCOMPATIBLE CHANGE**: The c3 library dependency and the chart components have been removed as part of the migration to Vue 3.
- **BACKWARD INCOMPATIBLE CHANGE**: The `value` props of `pf-column-picker`, `pf-combobox`, `pf-dropdown`, `pf-option`, `pf-radio-button` and `pf-toggle` have been renamed to `model-value`. You can still bind with `v-model`.
- **BACKWARD INCOMPATIBLE CHANGE**: `pf-application-launcher` cannot be controlled by `v-model`. Use `v-model:open ` instead.
- **BACKWARD INCOMPATIBLE CHANGE**: `pf-drawer` cannot be controlled by `v-model`. Use `v-model:hidden ` instead.
- **BACKWARD INCOMPATIBLE CHANGE**: `pf-expand-collapse` and `pf-list-group-item` cannot be controlled by `v-model`. Use `v-model:expanded ` instead.
- **BACKWARD INCOMPATIBLE CHANGE**: Dist files are now built with vite and some form of imports might not work anymore. Valid imports are `import 'vue-patternfly'`, `import 'vue-patternfly/vue-patternfly.css'` and `import { Component } from 'vue-patternfly'`.
- **BACKWARD INCOMPATIBLE CHANGE**: The uiv library dependency has been removed and consequently its components are no longer automatically recognized.

## [0.1.7] - 2020-07-15
- Included a static patternfly palette instead of requiring weird webpack loader's tricks to read id from patternfly. Fixes some import issues of the esm build.
- Updated dependencies.

## [0.1.6] - 2020-06-11
### Added
- `pf-card`s can now override the content of the header and footer using the new slots named `header` and `footer`.
- Updated dependencies.

## [0.1.5] - 2019-11-27
### Fixed
- Let `pf-group-item` auto-expand like before v0.1.4 if the `expanded` prop is not bound.

## [0.1.4] - 2019-11-27
### Added
- `pf-group-item` now have a new `expanded` prop that can be used as `v-model` for 2 way binding to control the expanded/collapsed state.

### Fixed
- Fixed non working click on a `pf-combobox` option from a filtered list.

## [0.1.3] - 2019-11-26
### Added
- New `pf-combobox` component.

### Fixed
- `pf-modal`s do not stop event click events from falling through anymore so that other components like `pf-dropdown` can detect outer clicks.

## [0.1.2] - 2019-07-26
### Added
- `pf-radio-button` and `pf-toggle` can choose if a loose value match should count as checked/on using the `loose` prop.

### Changed
- `pf-toggle`'s default `on-value` is now `true` and `off-value` is now `false`.
- `pf-toggle` without an `off-value` are now required to use the `no-off` prop instead of `off-value=false`.

## [0.1.1] - 2019-07-26
### Added
- New `#footer` slot of `pf-table` which directly maps to the `#default` slot of `pf-paginate-control`.
- New `pf-radio-button` and `pf-toggle` components.

## [0.1.0] - 2019-07-11
### Added
- `pf-table` and `pf-list-view` components now have a new `key-name` prop to specify the name of a property of each row to use as index for the `v-for` directive.

## [0.0.25] - 2019-05-29
### Added
- `pf-dropdown` components can now inject the dropdown menu inside any element, with the `append-to` prop, to circumvent issues with clipped containers (e.g. `overflow:hidden`).
- Addeed `pf-drawer-group-action` functional component to use inside the new `pf-drawer-group` `#actions` slot.

### Changed
- **BACKWARD INCOMPATIBLE CHANGE**: Removed the `action` prop of `pf-drawer-group` and added an `#actions` slot so that any number of actions can be applied.

### Fixed
- Added missing `type="button"` attribute to the buttons in `pf-toolbar` and `pf-sort` so that they won't trigger a submit event when inside a form.
- Fixed clipped dropdowns in `pf-notification-drawer`.

## [0.0.24] - 2019-05-06
### Added
- The `pf-filter-fields` inside `pf-toolbar` is now slotted so that it can be replaced with a custom input.

### Changed
- The dropdown on `pf-filter-fields` is now hidden when there's only one field available.
- Removed dropdown arrow from `pf-application-launcher` per patternfly design.
- Updated dependencies.

### Fixed
- Unwatched scrollable property on `pf-table` destruction.
- The `pf-paginate-control` component correctly fires change of page event every time the input value changes.

## [0.0.23] - 2019-03-15
### Fixed
- Reverted slot syntax for uiv's dropdown which is incompatible with the latest Vue release.

## [0.0.22] - 2019-02-20
### Fixed
- Hide items—per-page select from pagination controls if the `itemsPerPage` prop is empty.
- Reverted removal of portal-target import as it was mis-reported as unused by the linter.
- Fixed navbar-brand alignment.
- Fixed left margin with flex layout when the vertical sidebar is expanded.

## [0.0.21] - 2019-02-13
### Added
- Implemented interpratation of `pf-toolbar` and `pf-column-picker` columns as array of objects or object with nested objects/strings.

### Changed
- Updated dependencies. Changed the slots to use the new syntax introduced in Vue 2.6.
- Refactored all the checks for the presence of slots to use a new mixin that makes it reactive.

### Fixed
- Fixed incorrect lang on the style tags of some components.
- Some smaller style fixes and additions.

## [0.0.20] - 2018-11-29
### Added
- Pass all attributes, listeners, classes and styles to the dom elements defined in all functional components.
- Added style for labels with remove button.
- Exposed `pf-list-group-item`.

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

[Unreleased]: https://github.com/mtorromeo/vue-patternfly/compare/v0.3.9...HEAD
[0.3.9]: https://github.com/mtorromeo/vue-patternfly/compare/v0.3.8...v0.3.9
[0.3.8]: https://github.com/mtorromeo/vue-patternfly/compare/v0.3.7...v0.3.8
[0.3.7]: https://github.com/mtorromeo/vue-patternfly/compare/v0.3.6...v0.3.7
[0.3.6]: https://github.com/mtorromeo/vue-patternfly/compare/v0.3.5...v0.3.6
[0.3.5]: https://github.com/mtorromeo/vue-patternfly/compare/v0.3.4...v0.3.5
[0.3.4]: https://github.com/mtorromeo/vue-patternfly/compare/v0.3.3...v0.3.4
[0.3.3]: https://github.com/mtorromeo/vue-patternfly/compare/v0.3.2...v0.3.3
[0.3.2]: https://github.com/mtorromeo/vue-patternfly/compare/v0.3.1...v0.3.2
[0.3.1]: https://github.com/mtorromeo/vue-patternfly/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/mtorromeo/vue-patternfly/compare/v0.2.11...v0.3.0
[0.2.11]: https://github.com/mtorromeo/vue-patternfly/compare/v0.2.10...v0.2.11
[0.2.10]: https://github.com/mtorromeo/vue-patternfly/compare/v0.2.9...v0.2.10
[0.2.9]: https://github.com/mtorromeo/vue-patternfly/compare/v0.2.8...v0.2.9
[0.2.8]: https://github.com/mtorromeo/vue-patternfly/compare/v0.2.7...v0.2.8
[0.2.7]: https://github.com/mtorromeo/vue-patternfly/compare/v0.2.6...v0.2.7
[0.2.6]: https://github.com/mtorromeo/vue-patternfly/compare/v0.2.5...v0.2.6
[0.2.5]: https://github.com/mtorromeo/vue-patternfly/compare/v0.2.4...v0.2.5
[0.2.4]: https://github.com/mtorromeo/vue-patternfly/compare/v0.2.3...v0.2.4
[0.2.3]: https://github.com/mtorromeo/vue-patternfly/compare/v0.2.2...v0.2.3
[0.2.2]: https://github.com/mtorromeo/vue-patternfly/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/mtorromeo/vue-patternfly/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/mtorromeo/vue-patternfly/compare/v0.1.7...v0.2.0
[0.1.7]: https://github.com/mtorromeo/vue-patternfly/compare/v0.1.6...v0.1.7
[0.1.6]: https://github.com/mtorromeo/vue-patternfly/compare/v0.1.5...v0.1.6
[0.1.5]: https://github.com/mtorromeo/vue-patternfly/compare/v0.1.4...v0.1.5
[0.1.4]: https://github.com/mtorromeo/vue-patternfly/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/mtorromeo/vue-patternfly/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/mtorromeo/vue-patternfly/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/mtorromeo/vue-patternfly/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.25...v0.1.0
[0.0.25]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.24...v0.0.25
[0.0.24]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.23...v0.0.24
[0.0.23]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.22...v0.0.23
[0.0.22]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.21...v0.0.22
[0.0.21]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.20...v0.0.21
[0.0.20]: https://github.com/mtorromeo/vue-patternfly/compare/v0.0.19...v0.0.20
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

[@MrDeerly]: https://github.com/MrDeerly
[@pebri86]: https://github.com/pebri86
