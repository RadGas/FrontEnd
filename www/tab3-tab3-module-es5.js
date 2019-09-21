(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/@angular/material/esm5/button-toggle.es5.js":
/*!******************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/button-toggle.es5.js ***!
  \******************************************************************/
/*! exports provided: MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, MatButtonToggleGroupMultiple, MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggle, MatButtonToggleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", function() { return MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR", function() { return MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroupMultiple", function() { return MatButtonToggleGroupMultiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleChange", function() { return MatButtonToggleChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroup", function() { return MatButtonToggleGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggle", function() { return MatButtonToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleModule", function() { return MatButtonToggleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to configure the
 * default options for all button toggles within an app.
 * @type {?}
 */
var MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS');
/**
 * Provider Expression that allows mat-button-toggle-group to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * \@docs-private
 * @type {?}
 */
var MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])((/**
     * @return {?}
     */
    function () { return MatButtonToggleGroup; })),
    multi: true
};
/**
 * @deprecated Use `MatButtonToggleGroup` instead.
 * \@breaking-change 8.0.0
 */
var  /**
 * @deprecated Use `MatButtonToggleGroup` instead.
 * \@breaking-change 8.0.0
 */
MatButtonToggleGroupMultiple = /** @class */ (function () {
    function MatButtonToggleGroupMultiple() {
    }
    return MatButtonToggleGroupMultiple;
}());
/** @type {?} */
var _uniqueIdCounter = 0;
/**
 * Change event object emitted by MatButtonToggle.
 */
var  /**
 * Change event object emitted by MatButtonToggle.
 */
MatButtonToggleChange = /** @class */ (function () {
    function MatButtonToggleChange(source, value) {
        this.source = source;
        this.value = value;
    }
    return MatButtonToggleChange;
}());
/**
 * Exclusive selection button toggle group that behaves like a radio-button group.
 */
var MatButtonToggleGroup = /** @class */ (function () {
    function MatButtonToggleGroup(_changeDetector, defaultOptions) {
        this._changeDetector = _changeDetector;
        this._vertical = false;
        this._multiple = false;
        this._disabled = false;
        /**
         * The method to be called in order to update ngModel.
         * Now `ngModel` binding is not supported in multiple selection mode.
         */
        this._controlValueAccessorChangeFn = (/**
         * @return {?}
         */
        function () { });
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         */
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
        this._name = "mat-button-toggle-group-" + _uniqueIdCounter++;
        /**
         * Event that emits whenever the value of the group changes.
         * Used to facilitate two-way data binding.
         * \@docs-private
         */
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event emitted when the group's value changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.appearance =
            defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
    }
    Object.defineProperty(MatButtonToggleGroup.prototype, "name", {
        /** `name` attribute for the underlying `input` element. */
        get: /**
         * `name` attribute for the underlying `input` element.
         * @return {?}
         */
        function () { return this._name; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._name = value;
            if (this._buttonToggles) {
                this._buttonToggles.forEach((/**
                 * @param {?} toggle
                 * @return {?}
                 */
                function (toggle) {
                    toggle.name = _this._name;
                    toggle._markForCheck();
                }));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggleGroup.prototype, "vertical", {
        /** Whether the toggle group is vertical. */
        get: /**
         * Whether the toggle group is vertical.
         * @return {?}
         */
        function () { return this._vertical; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggleGroup.prototype, "value", {
        /** Value of the toggle group. */
        get: /**
         * Value of the toggle group.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var selected = this._selectionModel ? this._selectionModel.selected : [];
            if (this.multiple) {
                return selected.map((/**
                 * @param {?} toggle
                 * @return {?}
                 */
                function (toggle) { return toggle.value; }));
            }
            return selected[0] ? selected[0].value : undefined;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this._setSelectionByValue(newValue);
            this.valueChange.emit(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggleGroup.prototype, "selected", {
        /** Selected button toggles in the group. */
        get: /**
         * Selected button toggles in the group.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var selected = this._selectionModel ? this._selectionModel.selected : [];
            return this.multiple ? selected : (selected[0] || null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggleGroup.prototype, "multiple", {
        /** Whether multiple button toggles can be selected. */
        get: /**
         * Whether multiple button toggles can be selected.
         * @return {?}
         */
        function () { return this._multiple; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggleGroup.prototype, "disabled", {
        /** Whether multiple button toggle group is disabled. */
        get: /**
         * Whether multiple button toggle group is disabled.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
            if (this._buttonToggles) {
                this._buttonToggles.forEach((/**
                 * @param {?} toggle
                 * @return {?}
                 */
                function (toggle) { return toggle._markForCheck(); }));
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatButtonToggleGroup.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](this.multiple, undefined, false);
    };
    /**
     * @return {?}
     */
    MatButtonToggleGroup.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _a;
        (_a = this._selectionModel).select.apply(_a, this._buttonToggles.filter((/**
         * @param {?} toggle
         * @return {?}
         */
        function (toggle) { return toggle.checked; })));
    };
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value Value to be set to the model.
     */
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param {?} value Value to be set to the model.
     * @return {?}
     */
    MatButtonToggleGroup.prototype.writeValue = /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param {?} value Value to be set to the model.
     * @return {?}
     */
    function (value) {
        this.value = value;
        this._changeDetector.markForCheck();
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    MatButtonToggleGroup.prototype.registerOnChange = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    MatButtonToggleGroup.prototype.registerOnTouched = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    MatButtonToggleGroup.prototype.setDisabledState = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /** Dispatch change event with current selection and group value. */
    /**
     * Dispatch change event with current selection and group value.
     * @return {?}
     */
    MatButtonToggleGroup.prototype._emitChangeEvent = /**
     * Dispatch change event with current selection and group value.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selected = this.selected;
        /** @type {?} */
        var source = Array.isArray(selected) ? selected[selected.length - 1] : selected;
        /** @type {?} */
        var event = new MatButtonToggleChange((/** @type {?} */ (source)), this.value);
        this._controlValueAccessorChangeFn(event.value);
        this.change.emit(event);
    };
    /**
     * Syncs a button toggle's selected state with the model value.
     * @param toggle Toggle to be synced.
     * @param select Whether the toggle should be selected.
     * @param isUserInput Whether the change was a result of a user interaction.
     * @param deferEvents Whether to defer emitting the change events.
     */
    /**
     * Syncs a button toggle's selected state with the model value.
     * @param {?} toggle Toggle to be synced.
     * @param {?} select Whether the toggle should be selected.
     * @param {?=} isUserInput Whether the change was a result of a user interaction.
     * @param {?=} deferEvents Whether to defer emitting the change events.
     * @return {?}
     */
    MatButtonToggleGroup.prototype._syncButtonToggle = /**
     * Syncs a button toggle's selected state with the model value.
     * @param {?} toggle Toggle to be synced.
     * @param {?} select Whether the toggle should be selected.
     * @param {?=} isUserInput Whether the change was a result of a user interaction.
     * @param {?=} deferEvents Whether to defer emitting the change events.
     * @return {?}
     */
    function (toggle, select, isUserInput, deferEvents) {
        if (isUserInput === void 0) { isUserInput = false; }
        if (deferEvents === void 0) { deferEvents = false; }
        // Deselect the currently-selected toggle, if we're in single-selection
        // mode and the button being toggled isn't selected at the moment.
        if (!this.multiple && this.selected && !toggle.checked) {
            ((/** @type {?} */ (this.selected))).checked = false;
        }
        if (this._selectionModel) {
            if (select) {
                this._selectionModel.select(toggle);
            }
            else {
                this._selectionModel.deselect(toggle);
            }
        }
        else {
            deferEvents = true;
        }
        // We need to defer in some cases in order to avoid "changed after checked errors", however
        // the side-effect is that we may end up updating the model value out of sequence in others
        // The `deferEvents` flag allows us to decide whether to do it on a case-by-case basis.
        if (deferEvents) {
        }
        else {
            this._updateModelValue(isUserInput);
        }
    };
    /** Checks whether a button toggle is selected. */
    /**
     * Checks whether a button toggle is selected.
     * @param {?} toggle
     * @return {?}
     */
    MatButtonToggleGroup.prototype._isSelected = /**
     * Checks whether a button toggle is selected.
     * @param {?} toggle
     * @return {?}
     */
    function (toggle) {
        return this._selectionModel && this._selectionModel.isSelected(toggle);
    };
    /** Determines whether a button toggle should be checked on init. */
    /**
     * Determines whether a button toggle should be checked on init.
     * @param {?} toggle
     * @return {?}
     */
    MatButtonToggleGroup.prototype._isPrechecked = /**
     * Determines whether a button toggle should be checked on init.
     * @param {?} toggle
     * @return {?}
     */
    function (toggle) {
        if (typeof this._rawValue === 'undefined') {
            return false;
        }
        if (this.multiple && Array.isArray(this._rawValue)) {
            return this._rawValue.some((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return toggle.value != null && value === toggle.value; }));
        }
        return toggle.value === this._rawValue;
    };
    /** Updates the selection state of the toggles in the group based on a value. */
    /**
     * Updates the selection state of the toggles in the group based on a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    MatButtonToggleGroup.prototype._setSelectionByValue = /**
     * Updates the selection state of the toggles in the group based on a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this._rawValue = value;
        if (!this._buttonToggles) {
            return;
        }
        if (this.multiple && value) {
            if (!Array.isArray(value)) {
                throw Error('Value must be an array in multiple-selection mode.');
            }
            this._clearSelection();
            value.forEach((/**
             * @param {?} currentValue
             * @return {?}
             */
            function (currentValue) { return _this._selectValue(currentValue); }));
        }
        else {
            this._clearSelection();
            this._selectValue(value);
        }
    };
    /** Clears the selected toggles. */
    /**
     * Clears the selected toggles.
     * @private
     * @return {?}
     */
    MatButtonToggleGroup.prototype._clearSelection = /**
     * Clears the selected toggles.
     * @private
     * @return {?}
     */
    function () {
        this._selectionModel.clear();
        this._buttonToggles.forEach((/**
         * @param {?} toggle
         * @return {?}
         */
        function (toggle) { return toggle.checked = false; }));
    };
    /** Selects a value if there's a toggle that corresponds to it. */
    /**
     * Selects a value if there's a toggle that corresponds to it.
     * @private
     * @param {?} value
     * @return {?}
     */
    MatButtonToggleGroup.prototype._selectValue = /**
     * Selects a value if there's a toggle that corresponds to it.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var correspondingOption = this._buttonToggles.find((/**
         * @param {?} toggle
         * @return {?}
         */
        function (toggle) {
            return toggle.value != null && toggle.value === value;
        }));
        if (correspondingOption) {
            correspondingOption.checked = true;
            this._selectionModel.select(correspondingOption);
        }
    };
    /** Syncs up the group's value with the model and emits the change event. */
    /**
     * Syncs up the group's value with the model and emits the change event.
     * @private
     * @param {?} isUserInput
     * @return {?}
     */
    MatButtonToggleGroup.prototype._updateModelValue = /**
     * Syncs up the group's value with the model and emits the change event.
     * @private
     * @param {?} isUserInput
     * @return {?}
     */
    function (isUserInput) {
        // Only emit the change event for user input.
        if (isUserInput) {
            this._emitChangeEvent();
        }
        // Note: we emit this one no matter whether it was a user interaction, because
        // it is used by Angular to sync up the two-way data binding.
        this.valueChange.emit(this.value);
    };
    MatButtonToggleGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: 'mat-button-toggle-group',
                    providers: [
                        MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR,
                        { provide: MatButtonToggleGroupMultiple, useExisting: MatButtonToggleGroup },
                    ],
                    host: {
                        'role': 'group',
                        'class': 'mat-button-toggle-group',
                        '[attr.aria-disabled]': 'disabled',
                        '[class.mat-button-toggle-vertical]': 'vertical',
                        '[class.mat-button-toggle-group-appearance-standard]': 'appearance === "standard"',
                    },
                    exportAs: 'matButtonToggleGroup',
                },] },
    ];
    /** @nocollapse */
    MatButtonToggleGroup.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS,] }] }
    ]; };
    MatButtonToggleGroup.propDecorators = {
        _buttonToggles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])((/**
                     * @return {?}
                     */
                    function () { return MatButtonToggle; })),] }],
        appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
    };
    return MatButtonToggleGroup;
}());
// Boilerplate for applying mixins to the MatButtonToggle class.
/**
 * \@docs-private
 */
var 
// Boilerplate for applying mixins to the MatButtonToggle class.
/**
 * \@docs-private
 */
MatButtonToggleBase = /** @class */ (function () {
    function MatButtonToggleBase() {
    }
    return MatButtonToggleBase;
}());
/** @type {?} */
var _MatButtonToggleMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinDisableRipple"])(MatButtonToggleBase);
/**
 * Single button inside of a toggle group.
 */
var MatButtonToggle = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatButtonToggle, _super);
    function MatButtonToggle(toggleGroup, _changeDetectorRef, _elementRef, _focusMonitor, 
    // @breaking-change 8.0.0 `defaultTabIndex` to be made a required parameter.
    defaultTabIndex, defaultOptions) {
        var _this = _super.call(this) || this;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._elementRef = _elementRef;
        _this._focusMonitor = _focusMonitor;
        _this._isSingleSelector = false;
        _this._checked = false;
        /**
         * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
         */
        _this.ariaLabelledby = null;
        _this._disabled = false;
        /**
         * Event emitted when the group value changes.
         */
        _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** @type {?} */
        var parsedTabIndex = Number(defaultTabIndex);
        _this.tabIndex = (parsedTabIndex || parsedTabIndex === 0) ? parsedTabIndex : null;
        _this.buttonToggleGroup = toggleGroup;
        _this.appearance =
            defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
        return _this;
    }
    Object.defineProperty(MatButtonToggle.prototype, "buttonId", {
        /** Unique ID for the underlying `button` element. */
        get: /**
         * Unique ID for the underlying `button` element.
         * @return {?}
         */
        function () { return this.id + "-button"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggle.prototype, "appearance", {
        /** The appearance style of the button. */
        get: /**
         * The appearance style of the button.
         * @return {?}
         */
        function () {
            return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._appearance = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggle.prototype, "checked", {
        /** Whether the button is checked. */
        get: /**
         * Whether the button is checked.
         * @return {?}
         */
        function () {
            return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
            if (newValue !== this._checked) {
                this._checked = newValue;
                if (this.buttonToggleGroup) {
                    this.buttonToggleGroup._syncButtonToggle(this, this._checked);
                }
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggle.prototype, "disabled", {
        /** Whether the button is disabled. */
        get: /**
         * Whether the button is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || (this.buttonToggleGroup && this.buttonToggleGroup.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatButtonToggle.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._isSingleSelector = this.buttonToggleGroup && !this.buttonToggleGroup.multiple;
        this._type = this._isSingleSelector ? 'radio' : 'checkbox';
        this.id = this.id || "mat-button-toggle-" + _uniqueIdCounter++;
        if (this._isSingleSelector) {
            this.name = this.buttonToggleGroup.name;
        }
        if (this.buttonToggleGroup && this.buttonToggleGroup._isPrechecked(this)) {
            this.checked = true;
        }
        this._focusMonitor.monitor(this._elementRef, true);
    };
    /**
     * @return {?}
     */
    MatButtonToggle.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var group = this.buttonToggleGroup;
        this._focusMonitor.stopMonitoring(this._elementRef);
        // Remove the toggle from the selection once it's destroyed. Needs to happen
        // on the next tick in order to avoid "changed after checked" errors.
        if (group && group._isSelected(this)) {
            group._syncButtonToggle(this, false, false, true);
        }
    };
    /** Focuses the button. */
    /**
     * Focuses the button.
     * @param {?=} options
     * @return {?}
     */
    MatButtonToggle.prototype.focus = /**
     * Focuses the button.
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this._buttonElement.nativeElement.focus(options);
    };
    /** Checks the button toggle due to an interaction with the underlying native button. */
    /**
     * Checks the button toggle due to an interaction with the underlying native button.
     * @return {?}
     */
    MatButtonToggle.prototype._onButtonClick = /**
     * Checks the button toggle due to an interaction with the underlying native button.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var newChecked = this._isSingleSelector ? true : !this._checked;
        if (newChecked !== this._checked) {
            this._checked = newChecked;
            if (this.buttonToggleGroup) {
                this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);
                this.buttonToggleGroup._onTouched();
            }
        }
        // Emit a change event when it's the single selector
        this.change.emit(new MatButtonToggleChange(this, this.value));
    };
    /**
     * Marks the button toggle as needing checking for change detection.
     * This method is exposed because the parent button toggle group will directly
     * update bound properties of the radio button.
     */
    /**
     * Marks the button toggle as needing checking for change detection.
     * This method is exposed because the parent button toggle group will directly
     * update bound properties of the radio button.
     * @return {?}
     */
    MatButtonToggle.prototype._markForCheck = /**
     * Marks the button toggle as needing checking for change detection.
     * This method is exposed because the parent button toggle group will directly
     * update bound properties of the radio button.
     * @return {?}
     */
    function () {
        // When the group value changes, the button will not be notified.
        // Use `markForCheck` to explicit update button toggle's status.
        this._changeDetectorRef.markForCheck();
    };
    MatButtonToggle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{selector: 'mat-button-toggle',
                    template: "<button #button class=\"mat-button-toggle-button\" type=\"button\" [id]=\"buttonId\" [attr.tabindex]=\"disabled ? -1 : tabIndex\" [attr.aria-pressed]=\"checked\" [disabled]=\"disabled || null\" [attr.name]=\"name || null\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\" (click)=\"_onButtonClick()\"><div class=\"mat-button-toggle-label-content\"><ng-content></ng-content></div></button><div class=\"mat-button-toggle-focus-overlay\"></div><div class=\"mat-button-toggle-ripple\" matRipple [matRippleTrigger]=\"button\" [matRippleDisabled]=\"this.disableRipple || this.disabled\"></div>",
                    styles: [".mat-button-toggle-group,.mat-button-toggle-standalone{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}@media (-ms-high-contrast:active){.mat-button-toggle-group,.mat-button-toggle-standalone{outline:solid 1px}}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{border-radius:4px}@media (-ms-high-contrast:active){.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}@media (-ms-high-contrast:active){.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}@media (-ms-high-contrast:active){.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}}@media (hover:none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:48px;padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}@media (-ms-high-contrast:active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}}@media (-ms-high-contrast:active){.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 48px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:0 0;color:inherit;padding:0;margin:0;font:inherit;outline:0;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}"],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    exportAs: 'matButtonToggle',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                    inputs: ['disableRipple'],
                    host: {
                        '[class.mat-button-toggle-standalone]': '!buttonToggleGroup',
                        '[class.mat-button-toggle-checked]': 'checked',
                        '[class.mat-button-toggle-disabled]': 'disabled',
                        '[class.mat-button-toggle-appearance-standard]': 'appearance === "standard"',
                        'class': 'mat-button-toggle',
                        // Always reset the tabindex to -1 so it doesn't conflict with the one on the `button`,
                        // but can still receive focus from things like cdkFocusInitial.
                        '[attr.tabindex]': '-1',
                        '[attr.id]': 'id',
                        '[attr.name]': 'null',
                        '(focus)': 'focus()',
                    }
                },] },
    ];
    /** @nocollapse */
    MatButtonToggle.ctorParameters = function () { return [
        { type: MatButtonToggleGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"], args: ['tabindex',] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS,] }] }
    ]; };
    MatButtonToggle.propDecorators = {
        ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['aria-label',] }],
        ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['aria-labelledby',] }],
        _buttonElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['button', { static: false },] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
    };
    return MatButtonToggle;
}(_MatButtonToggleMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatButtonToggleModule = /** @class */ (function () {
    function MatButtonToggleModule() {
    }
    MatButtonToggleModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"]],
                    exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"], MatButtonToggleGroup, MatButtonToggle],
                    declarations: [MatButtonToggleGroup, MatButtonToggle],
                },] },
    ];
    return MatButtonToggleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=button-toggle.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/checkbox.es5.js":
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/checkbox.es5.js ***!
  \*************************************************************/
/*! exports provided: MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, TransitionCheckState, MatCheckboxChange, MatCheckbox, MAT_CHECKBOX_CLICK_ACTION, _MatCheckboxRequiredValidatorModule, MatCheckboxModule, MAT_CHECKBOX_REQUIRED_VALIDATOR, MatCheckboxRequiredValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR", function() { return MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionCheckState", function() { return TransitionCheckState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxChange", function() { return MatCheckboxChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCheckbox", function() { return MatCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_CLICK_ACTION", function() { return MAT_CHECKBOX_CLICK_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatCheckboxRequiredValidatorModule", function() { return _MatCheckboxRequiredValidatorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxModule", function() { return MatCheckboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_REQUIRED_VALIDATOR", function() { return MAT_CHECKBOX_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxRequiredValidator", function() { return MatCheckboxRequiredValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */










/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to specify the checkbox click behavior.
 * @type {?}
 */
var MAT_CHECKBOX_CLICK_ACTION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-checkbox-click-action');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Increasing integer for generating unique ids for checkbox components.
/** @type {?} */
var nextUniqueId = 0;
/**
 * Provider Expression that allows mat-checkbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * \@docs-private
 * @type {?}
 */
var MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return MatCheckbox; })),
    multi: true
};
/** @enum {number} */
var TransitionCheckState = {
    /** The initial state of the component before any user interaction. */
    Init: 0,
    /** The state representing the component when it's becoming checked. */
    Checked: 1,
    /** The state representing the component when it's becoming unchecked. */
    Unchecked: 2,
    /** The state representing the component when it's becoming indeterminate. */
    Indeterminate: 3,
};
TransitionCheckState[TransitionCheckState.Init] = 'Init';
TransitionCheckState[TransitionCheckState.Checked] = 'Checked';
TransitionCheckState[TransitionCheckState.Unchecked] = 'Unchecked';
TransitionCheckState[TransitionCheckState.Indeterminate] = 'Indeterminate';
/**
 * Change event object emitted by MatCheckbox.
 */
var  /**
 * Change event object emitted by MatCheckbox.
 */
MatCheckboxChange = /** @class */ (function () {
    function MatCheckboxChange() {
    }
    return MatCheckboxChange;
}());
// Boilerplate for applying mixins to MatCheckbox.
/**
 * \@docs-private
 */
var 
// Boilerplate for applying mixins to MatCheckbox.
/**
 * \@docs-private
 */
MatCheckboxBase = /** @class */ (function () {
    function MatCheckboxBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatCheckboxBase;
}());
/** @type {?} */
var _MatCheckboxMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatCheckboxBase)), 'accent'));
/**
 * A material design checkbox component. Supports all of the functionality of an HTML5 checkbox,
 * and exposes a similar API. A MatCheckbox can be either checked, unchecked, indeterminate, or
 * disabled. Note that all additional accessibility attributes are taken care of by the component,
 * so there is no need to provide them yourself. However, if you want to omit a label and still
 * have the checkbox be accessible, you may supply an [aria-label] input.
 * See: https://material.io/design/components/selection-controls.html
 */
var MatCheckbox = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(MatCheckbox, _super);
    function MatCheckbox(elementRef, _changeDetectorRef, _focusMonitor, _ngZone, tabIndex, _clickAction, _animationMode) {
        var _this = _super.call(this, elementRef) || this;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._focusMonitor = _focusMonitor;
        _this._ngZone = _ngZone;
        _this._clickAction = _clickAction;
        _this._animationMode = _animationMode;
        /**
         * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
         * take precedence so this may be omitted.
         */
        _this.ariaLabel = '';
        /**
         * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
         */
        _this.ariaLabelledby = null;
        _this._uniqueId = "mat-checkbox-" + ++nextUniqueId;
        /**
         * A unique id for the checkbox input. If none is supplied, it will be auto-generated.
         */
        _this.id = _this._uniqueId;
        /**
         * Whether the label should appear after or before the checkbox. Defaults to 'after'
         */
        _this.labelPosition = 'after';
        /**
         * Name value will be applied to the input element if present
         */
        _this.name = null;
        /**
         * Event emitted when the checkbox's `checked` value changes.
         */
        _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when the checkbox's `indeterminate` value changes.
         */
        _this.indeterminateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
         * \@docs-private
         */
        _this._onTouched = (/**
         * @return {?}
         */
        function () { });
        _this._currentAnimationClass = '';
        _this._currentCheckState = TransitionCheckState.Init;
        _this._controlValueAccessorChangeFn = (/**
         * @return {?}
         */
        function () { });
        _this._checked = false;
        _this._disabled = false;
        _this._indeterminate = false;
        _this.tabIndex = parseInt(tabIndex) || 0;
        _this._focusMonitor.monitor(elementRef, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        function (focusOrigin) {
            if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state change
                // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
                // See https://github.com/angular/angular/issues/17793. To work around this, we defer
                // telling the form control it has been touched until the next tick.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () {
                    _this._onTouched();
                    _changeDetectorRef.markForCheck();
                }));
            }
        }));
        return _this;
    }
    Object.defineProperty(MatCheckbox.prototype, "inputId", {
        /** Returns the unique id for the visual hidden input. */
        get: /**
         * Returns the unique id for the visual hidden input.
         * @return {?}
         */
        function () { return (this.id || this._uniqueId) + "-input"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCheckbox.prototype, "required", {
        /** Whether the checkbox is required. */
        get: /**
         * Whether the checkbox is required.
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    // TODO: Delete next major revision.
    // TODO: Delete next major revision.
    /**
     * @return {?}
     */
    MatCheckbox.prototype.ngAfterViewChecked = 
    // TODO: Delete next major revision.
    /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    MatCheckbox.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._focusMonitor.stopMonitoring(this._elementRef);
    };
    Object.defineProperty(MatCheckbox.prototype, "checked", {
        /**
         * Whether the checkbox is checked.
         */
        get: /**
         * Whether the checkbox is checked.
         * @return {?}
         */
        function () { return this._checked; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value != this.checked) {
                this._checked = value;
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCheckbox.prototype, "disabled", {
        /**
         * Whether the checkbox is disabled. This fully overrides the implementation provided by
         * mixinDisabled, but the mixin is still required because mixinTabIndex requires it.
         */
        get: /**
         * Whether the checkbox is disabled. This fully overrides the implementation provided by
         * mixinDisabled, but the mixin is still required because mixinTabIndex requires it.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
            if (newValue !== this.disabled) {
                this._disabled = newValue;
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCheckbox.prototype, "indeterminate", {
        /**
         * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
         * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
         * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
         * set to false.
         */
        get: /**
         * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
         * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
         * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
         * set to false.
         * @return {?}
         */
        function () { return this._indeterminate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var changed = value != this._indeterminate;
            this._indeterminate = value;
            if (changed) {
                if (this._indeterminate) {
                    this._transitionCheckState(TransitionCheckState.Indeterminate);
                }
                else {
                    this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
                }
                this.indeterminateChange.emit(this._indeterminate);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatCheckbox.prototype._isRippleDisabled = /**
     * @return {?}
     */
    function () {
        return this.disableRipple || this.disabled;
    };
    /** Method being called whenever the label text changes. */
    /**
     * Method being called whenever the label text changes.
     * @return {?}
     */
    MatCheckbox.prototype._onLabelTextChange = /**
     * Method being called whenever the label text changes.
     * @return {?}
     */
    function () {
        // Since the event of the `cdkObserveContent` directive runs outside of the zone, the checkbox
        // component will be only marked for check, but no actual change detection runs automatically.
        // Instead of going back into the zone in order to trigger a change detection which causes
        // *all* components to be checked (if explicitly marked or not using OnPush), we only trigger
        // an explicit change detection for the checkbox view and it's children.
        this._changeDetectorRef.detectChanges();
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} value
     * @return {?}
     */
    MatCheckbox.prototype.writeValue = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checked = !!value;
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    MatCheckbox.prototype.registerOnChange = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    MatCheckbox.prototype.registerOnTouched = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    MatCheckbox.prototype.setDisabledState = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * @return {?}
     */
    MatCheckbox.prototype._getAriaChecked = /**
     * @return {?}
     */
    function () {
        return this.checked ? 'true' : (this.indeterminate ? 'mixed' : 'false');
    };
    /**
     * @private
     * @param {?} newState
     * @return {?}
     */
    MatCheckbox.prototype._transitionCheckState = /**
     * @private
     * @param {?} newState
     * @return {?}
     */
    function (newState) {
        /** @type {?} */
        var oldState = this._currentCheckState;
        /** @type {?} */
        var element = this._elementRef.nativeElement;
        if (oldState === newState) {
            return;
        }
        if (this._currentAnimationClass.length > 0) {
            element.classList.remove(this._currentAnimationClass);
        }
        this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
        this._currentCheckState = newState;
        if (this._currentAnimationClass.length > 0) {
            element.classList.add(this._currentAnimationClass);
            // Remove the animation class to avoid animation when the checkbox is moved between containers
            /** @type {?} */
            var animationClass_1 = this._currentAnimationClass;
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    element.classList.remove(animationClass_1);
                }), 1000);
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    MatCheckbox.prototype._emitChangeEvent = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var event = new MatCheckboxChange();
        event.source = this;
        event.checked = this.checked;
        this._controlValueAccessorChangeFn(this.checked);
        this.change.emit(event);
    };
    /** Toggles the `checked` state of the checkbox. */
    /**
     * Toggles the `checked` state of the checkbox.
     * @return {?}
     */
    MatCheckbox.prototype.toggle = /**
     * Toggles the `checked` state of the checkbox.
     * @return {?}
     */
    function () {
        this.checked = !this.checked;
    };
    /**
     * Event handler for checkbox input element.
     * Toggles checked state if element is not disabled.
     * Do not toggle on (change) event since IE doesn't fire change event when
     *   indeterminate checkbox is clicked.
     * @param event
     */
    /**
     * Event handler for checkbox input element.
     * Toggles checked state if element is not disabled.
     * Do not toggle on (change) event since IE doesn't fire change event when
     *   indeterminate checkbox is clicked.
     * @param {?} event
     * @return {?}
     */
    MatCheckbox.prototype._onInputClick = /**
     * Event handler for checkbox input element.
     * Toggles checked state if element is not disabled.
     * Do not toggle on (change) event since IE doesn't fire change event when
     *   indeterminate checkbox is clicked.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `checkbox` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
        // If resetIndeterminate is false, and the current state is indeterminate, do nothing on click
        if (!this.disabled && this._clickAction !== 'noop') {
            // When user manually click on the checkbox, `indeterminate` is set to false.
            if (this.indeterminate && this._clickAction !== 'check') {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () {
                    _this._indeterminate = false;
                    _this.indeterminateChange.emit(_this._indeterminate);
                }));
            }
            this.toggle();
            this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
            // Emit our custom change event if the native input emitted one.
            // It is important to only emit it, if the native input triggered one, because
            // we don't want to trigger a change event, when the `checked` variable changes for example.
            this._emitChangeEvent();
        }
        else if (!this.disabled && this._clickAction === 'noop') {
            // Reset native input when clicked with noop. The native checkbox becomes checked after
            // click, reset it to be align with `checked` value of `mat-checkbox`.
            this._inputElement.nativeElement.checked = this.checked;
            this._inputElement.nativeElement.indeterminate = this.indeterminate;
        }
    };
    /** Focuses the checkbox. */
    /**
     * Focuses the checkbox.
     * @param {?=} origin
     * @param {?=} options
     * @return {?}
     */
    MatCheckbox.prototype.focus = /**
     * Focuses the checkbox.
     * @param {?=} origin
     * @param {?=} options
     * @return {?}
     */
    function (origin, options) {
        if (origin === void 0) { origin = 'keyboard'; }
        this._focusMonitor.focusVia(this._inputElement, origin, options);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatCheckbox.prototype._onInteractionEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the `change` output.
        event.stopPropagation();
    };
    /**
     * @private
     * @param {?} oldState
     * @param {?} newState
     * @return {?}
     */
    MatCheckbox.prototype._getAnimationClassForCheckStateTransition = /**
     * @private
     * @param {?} oldState
     * @param {?} newState
     * @return {?}
     */
    function (oldState, newState) {
        // Don't transition if animations are disabled.
        if (this._animationMode === 'NoopAnimations') {
            return '';
        }
        /** @type {?} */
        var animSuffix = '';
        switch (oldState) {
            case TransitionCheckState.Init:
                // Handle edge case where user interacts with checkbox that does not have [(ngModel)] or
                // [checked] bound to it.
                if (newState === TransitionCheckState.Checked) {
                    animSuffix = 'unchecked-checked';
                }
                else if (newState == TransitionCheckState.Indeterminate) {
                    animSuffix = 'unchecked-indeterminate';
                }
                else {
                    return '';
                }
                break;
            case TransitionCheckState.Unchecked:
                animSuffix = newState === TransitionCheckState.Checked ?
                    'unchecked-checked' : 'unchecked-indeterminate';
                break;
            case TransitionCheckState.Checked:
                animSuffix = newState === TransitionCheckState.Unchecked ?
                    'checked-unchecked' : 'checked-indeterminate';
                break;
            case TransitionCheckState.Indeterminate:
                animSuffix = newState === TransitionCheckState.Checked ?
                    'indeterminate-checked' : 'indeterminate-unchecked';
                break;
        }
        return "mat-checkbox-anim-" + animSuffix;
    };
    MatCheckbox.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-checkbox',
                    template: "<label [attr.for]=\"inputId\" class=\"mat-checkbox-layout\" #label><div class=\"mat-checkbox-inner-container\" [class.mat-checkbox-inner-container-no-side-margin]=\"!checkboxLabel.textContent || !checkboxLabel.textContent.trim()\"><input #input class=\"mat-checkbox-input cdk-visually-hidden\" type=\"checkbox\" [id]=\"inputId\" [required]=\"required\" [checked]=\"checked\" [attr.value]=\"value\" [disabled]=\"disabled\" [attr.name]=\"name\" [tabIndex]=\"tabIndex\" [indeterminate]=\"indeterminate\" [attr.aria-label]=\"ariaLabel || null\" [attr.aria-labelledby]=\"ariaLabelledby\" [attr.aria-checked]=\"_getAriaChecked()\" (change)=\"_onInteractionEvent($event)\" (click)=\"_onInputClick($event)\"><div matRipple class=\"mat-checkbox-ripple\" [matRippleTrigger]=\"label\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleRadius]=\"20\" [matRippleCentered]=\"true\" [matRippleAnimation]=\"{enterDuration: 150}\"><div class=\"mat-ripple-element mat-checkbox-persistent-ripple\"></div></div><div class=\"mat-checkbox-frame\"></div><div class=\"mat-checkbox-background\"><svg version=\"1.1\" focusable=\"false\" class=\"mat-checkbox-checkmark\" viewBox=\"0 0 24 24\" xml:space=\"preserve\"><path class=\"mat-checkbox-checkmark-path\" fill=\"none\" stroke=\"white\" d=\"M4.1,12.7 9,17.6 20.3,6.3\"/></svg><div class=\"mat-checkbox-mixedmark\"></div></div></div><span class=\"mat-checkbox-label\" #checkboxLabel (cdkObserveContent)=\"_onLabelTextChange()\"><span style=\"display:none\">&nbsp;</span><ng-content></ng-content></span></label>",
                    styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.91026}50%{animation-timing-function:cubic-bezier(0,0,.2,.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0,0,0,1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(.4,0,1,1);stroke-dashoffset:0}to{stroke-dashoffset:-22.91026}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}100%,32.8%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0,0,.2,.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}@media (-ms-high-contrast:active){.mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0,0,.2,.1),opacity 90ms cubic-bezier(0,0,.2,.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media (hover:none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.91026;stroke-dasharray:22.91026;stroke-width:2.13333px}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0);border-radius:2px}@media (-ms-high-contrast:active){.mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0s mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0s mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:.3s linear 0s mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}"],
                    exportAs: 'matCheckbox',
                    host: {
                        'class': 'mat-checkbox',
                        '[id]': 'id',
                        '[attr.tabindex]': 'null',
                        '[class.mat-checkbox-indeterminate]': 'indeterminate',
                        '[class.mat-checkbox-checked]': 'checked',
                        '[class.mat-checkbox-disabled]': 'disabled',
                        '[class.mat-checkbox-label-before]': 'labelPosition == "before"',
                        '[class._mat-animation-noopable]': "_animationMode === 'NoopAnimations'",
                    },
                    providers: [MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR],
                    inputs: ['disableRipple', 'color', 'tabIndex'],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    MatCheckbox.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['tabindex',] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_CHECKBOX_CLICK_ACTION,] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"],] }] }
    ]; };
    MatCheckbox.propDecorators = {
        ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-label',] }],
        ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-labelledby',] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        indeterminateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        _inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['input', { static: false },] }],
        ripple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], { static: false },] }],
        checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        indeterminate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return MatCheckbox;
}(_MatCheckboxMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MAT_CHECKBOX_REQUIRED_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return MatCheckboxRequiredValidator; })),
    multi: true
};
/**
 * Validator for Material checkbox's required attribute in template-driven checkbox.
 * Current CheckboxRequiredValidator only work with `input type=checkbox` and does not
 * work with `mat-checkbox`.
 */
var MatCheckboxRequiredValidator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(MatCheckboxRequiredValidator, _super);
    function MatCheckboxRequiredValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatCheckboxRequiredValidator.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: "mat-checkbox[required][formControlName],\n             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]",
                    providers: [MAT_CHECKBOX_REQUIRED_VALIDATOR],
                },] },
    ];
    return MatCheckboxRequiredValidator;
}(_angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxRequiredValidator"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This module is used by both original and MDC-based checkbox implementations.
 */
var _MatCheckboxRequiredValidatorModule = /** @class */ (function () {
    function _MatCheckboxRequiredValidatorModule() {
    }
    _MatCheckboxRequiredValidatorModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    exports: [MatCheckboxRequiredValidator],
                    declarations: [MatCheckboxRequiredValidator],
                },] },
    ];
    return _MatCheckboxRequiredValidatorModule;
}());
var MatCheckboxModule = /** @class */ (function () {
    function MatCheckboxModule() {
    }
    MatCheckboxModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"],
                        _MatCheckboxRequiredValidatorModule
                    ],
                    exports: [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _MatCheckboxRequiredValidatorModule],
                    declarations: [MatCheckbox],
                },] },
    ];
    return MatCheckboxModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=checkbox.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/form-field.es5.js":
/*!***************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/form-field.es5.js ***!
  \***************************************************************/
/*! exports provided: MatFormFieldModule, MatError, MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormField, MatFormFieldControl, getMatFormFieldPlaceholderConflictError, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, MatHint, MatPlaceholder, MatPrefix, MatSuffix, MatLabel, matFormFieldAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function() { return MatFormFieldModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatError", function() { return MatError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function() { return MAT_FORM_FIELD_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormField", function() { return MatFormField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function() { return MatFormFieldControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function() { return getMatFormFieldPlaceholderConflictError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function() { return getMatFormFieldDuplicatedHintError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function() { return getMatFormFieldMissingControlError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHint", function() { return MatHint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function() { return MatPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPrefix", function() { return MatPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSuffix", function() { return MatSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLabel", function() { return MatLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function() { return matFormFieldAnimations; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var nextUniqueId = 0;
/**
 * Single error message to be shown underneath the form field.
 */
var MatError = /** @class */ (function () {
    function MatError() {
        this.id = "mat-error-" + nextUniqueId++;
    }
    MatError.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'mat-error',
                    host: {
                        'class': 'mat-error',
                        'role': 'alert',
                        '[attr.id]': 'id',
                    }
                },] },
    ];
    MatError.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return MatError;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Animations used by the MatFormField.
 * \@docs-private
 * @type {?}
 */
var matFormFieldAnimations = {
    /**
     * Animation that transitions the form field's error and hint messages.
     */
    transitionMessages: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('transitionMessages', [
        // TODO(mmalerba): Use angular animations for label animation as well.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(0%)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
        ]),
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * An interface which allows a control to work inside of a `MatFormField`.
 * @abstract
 * @template T
 */
var  /**
 * An interface which allows a control to work inside of a `MatFormField`.
 * @abstract
 * @template T
 */
MatFormFieldControl = /** @class */ (function () {
    function MatFormFieldControl() {
    }
    return MatFormFieldControl;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * \@docs-private
 * @return {?}
 */
function getMatFormFieldPlaceholderConflictError() {
    return Error('Placeholder attribute and child element were both specified.');
}
/**
 * \@docs-private
 * @param {?} align
 * @return {?}
 */
function getMatFormFieldDuplicatedHintError(align) {
    return Error("A hint was already declared for 'align=\"" + align + "\"'.");
}
/**
 * \@docs-private
 * @return {?}
 */
function getMatFormFieldMissingControlError() {
    return Error('mat-form-field must contain a MatFormFieldControl.');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var nextUniqueId$1 = 0;
/**
 * Hint text to be shown underneath the form field control.
 */
var MatHint = /** @class */ (function () {
    function MatHint() {
        /**
         * Whether to align the hint label at the start or end of the line.
         */
        this.align = 'start';
        /**
         * Unique ID for the hint. Used for the aria-describedby on the form field control.
         */
        this.id = "mat-hint-" + nextUniqueId$1++;
    }
    MatHint.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'mat-hint',
                    host: {
                        'class': 'mat-hint',
                        '[class.mat-right]': 'align == "end"',
                        '[attr.id]': 'id',
                        // Remove align attribute to prevent it from interfering with layout.
                        '[attr.align]': 'null',
                    }
                },] },
    ];
    MatHint.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return MatHint;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The floating label for a `mat-form-field`.
 */
var MatLabel = /** @class */ (function () {
    function MatLabel() {
    }
    MatLabel.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'mat-label'
                },] },
    ];
    return MatLabel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The placeholder text for an `MatFormField`.
 * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
 *     placeholder.
 * \@breaking-change 8.0.0
 */
var MatPlaceholder = /** @class */ (function () {
    function MatPlaceholder() {
    }
    MatPlaceholder.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'mat-placeholder'
                },] },
    ];
    return MatPlaceholder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Prefix to be placed in front of the form field.
 */
var MatPrefix = /** @class */ (function () {
    function MatPrefix() {
    }
    MatPrefix.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[matPrefix]',
                },] },
    ];
    return MatPrefix;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Suffix to be placed at the end of the form field.
 */
var MatSuffix = /** @class */ (function () {
    function MatSuffix() {
    }
    MatSuffix.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[matSuffix]',
                },] },
    ];
    return MatSuffix;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var nextUniqueId$2 = 0;
/** @type {?} */
var floatingLabelScale = 0.75;
/** @type {?} */
var outlineGapPadding = 5;
/**
 * Boilerplate for applying mixins to MatFormField.
 * \@docs-private
 */
var /**
 * Boilerplate for applying mixins to MatFormField.
 * \@docs-private
 */
MatFormFieldBase = /** @class */ (function () {
    function MatFormFieldBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatFormFieldBase;
}());
/**
 * Base class to which we're applying the form field mixins.
 * \@docs-private
 * @type {?}
 */
var _MatFormFieldMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinColor"])(MatFormFieldBase, 'primary');
/**
 * Injection token that can be used to configure the
 * default options for all form field within an app.
 * @type {?}
 */
var MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_FORM_FIELD_DEFAULT_OPTIONS');
/**
 * Container for form controls that applies Material Design styling and behavior.
 */
var MatFormField = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(MatFormField, _super);
    function MatFormField(_elementRef, _changeDetectorRef, labelOptions, _dir, _defaults, _platform, _ngZone, _animationMode) {
        var _this = _super.call(this, _elementRef) || this;
        _this._elementRef = _elementRef;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._dir = _dir;
        _this._defaults = _defaults;
        _this._platform = _platform;
        _this._ngZone = _ngZone;
        /**
         * Whether the outline gap needs to be calculated
         * immediately on the next change detection run.
         */
        _this._outlineGapCalculationNeededImmediately = false;
        /**
         * Whether the outline gap needs to be calculated next time the zone has stabilized.
         */
        _this._outlineGapCalculationNeededOnStable = false;
        _this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Override for the logic that disables the label animation in certain cases.
         */
        _this._showAlwaysAnimate = false;
        /**
         * State of the mat-hint and mat-error animations.
         */
        _this._subscriptAnimationState = '';
        _this._hintLabel = '';
        // Unique id for the hint label.
        _this._hintLabelId = "mat-hint-" + nextUniqueId$2++;
        // Unique id for the internal form field label.
        _this._labelId = "mat-form-field-label-" + nextUniqueId$2++;
        _this._labelOptions = labelOptions ? labelOptions : {};
        _this.floatLabel = _this._labelOptions.float || 'auto';
        _this._animationsEnabled = _animationMode !== 'NoopAnimations';
        // Set the default through here so we invoke the setter on the first run.
        _this.appearance = (_defaults && _defaults.appearance) ? _defaults.appearance : 'legacy';
        return _this;
    }
    Object.defineProperty(MatFormField.prototype, "appearance", {
        /** The form-field appearance style. */
        get: /**
         * The form-field appearance style.
         * @return {?}
         */
        function () { return this._appearance; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var oldValue = this._appearance;
            this._appearance = value || (this._defaults && this._defaults.appearance) || 'legacy';
            if (this._appearance === 'outline' && oldValue !== value) {
                this._outlineGapCalculationNeededOnStable = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatFormField.prototype, "hideRequiredMarker", {
        /** Whether the required marker should be hidden. */
        get: /**
         * Whether the required marker should be hidden.
         * @return {?}
         */
        function () { return this._hideRequiredMarker; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hideRequiredMarker = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatFormField.prototype, "_shouldAlwaysFloat", {
        /** Whether the floating label should always float or not. */
        get: /**
         * Whether the floating label should always float or not.
         * @return {?}
         */
        function () {
            return this.floatLabel === 'always' && !this._showAlwaysAnimate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatFormField.prototype, "_canLabelFloat", {
        /** Whether the label can float or not. */
        get: /**
         * Whether the label can float or not.
         * @return {?}
         */
        function () { return this.floatLabel !== 'never'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatFormField.prototype, "hintLabel", {
        /** Text for the form field hint. */
        get: /**
         * Text for the form field hint.
         * @return {?}
         */
        function () { return this._hintLabel; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hintLabel = value;
            this._processHints();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatFormField.prototype, "floatLabel", {
        /**
         * Whether the label should always float, never float or float as the user types.
         *
         * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
         * way to make the floating label emulate the behavior of a standard input placeholder. However
         * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
         * appearances the `never` option has been disabled in favor of just using the placeholder.
         */
        get: /**
         * Whether the label should always float, never float or float as the user types.
         *
         * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
         * way to make the floating label emulate the behavior of a standard input placeholder. However
         * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
         * appearances the `never` option has been disabled in favor of just using the placeholder.
         * @return {?}
         */
        function () {
            return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._floatLabel) {
                this._floatLabel = value || this._labelOptions.float || 'auto';
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatFormField.prototype, "_control", {
        get: /**
         * @return {?}
         */
        function () {
            // TODO(crisbeto): we need this hacky workaround in order to support both Ivy
            // and ViewEngine. We should clean this up once Ivy is the default renderer.
            return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._explicitFormFieldControl = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatFormField.prototype, "_labelChild", {
        get: /**
         * @return {?}
         */
        function () {
            return this._labelChildNonStatic || this._labelChildStatic;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets an ElementRef for the element that a overlay attached to the form-field should be
     * positioned relative to.
     */
    /**
     * Gets an ElementRef for the element that a overlay attached to the form-field should be
     * positioned relative to.
     * @return {?}
     */
    MatFormField.prototype.getConnectedOverlayOrigin = /**
     * Gets an ElementRef for the element that a overlay attached to the form-field should be
     * positioned relative to.
     * @return {?}
     */
    function () {
        return this._connectionContainerRef || this._elementRef;
    };
    /**
     * @return {?}
     */
    MatFormField.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._validateControlChild();
        /** @type {?} */
        var control = this._control;
        if (control.controlType) {
            this._elementRef.nativeElement.classList.add("mat-form-field-type-" + control.controlType);
        }
        // Subscribe to changes in the child control state in order to update the form field UI.
        control.stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])((/** @type {?} */ (null)))).subscribe((/**
         * @return {?}
         */
        function () {
            _this._validatePlaceholders();
            _this._syncDescribedByIds();
            _this._changeDetectorRef.markForCheck();
        }));
        // Run change detection if the value changes.
        if (control.ngControl && control.ngControl.valueChanges) {
            control.ngControl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this._changeDetectorRef.markForCheck(); }));
        }
        // Note that we have to run outside of the `NgZone` explicitly,
        // in order to avoid throwing users into an infinite loop
        // if `zone-patch-rxjs` is included.
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this._destroyed)).subscribe((/**
             * @return {?}
             */
            function () {
                if (_this._outlineGapCalculationNeededOnStable) {
                    _this.updateOutlineGap();
                }
            }));
        }));
        // Run change detection and update the outline if the suffix or prefix changes.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this._prefixChildren.changes, this._suffixChildren.changes).subscribe((/**
         * @return {?}
         */
        function () {
            _this._outlineGapCalculationNeededOnStable = true;
            _this._changeDetectorRef.markForCheck();
        }));
        // Re-validate when the number of hints changes.
        this._hintChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe((/**
         * @return {?}
         */
        function () {
            _this._processHints();
            _this._changeDetectorRef.markForCheck();
        }));
        // Update the aria-described by when the number of errors changes.
        this._errorChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe((/**
         * @return {?}
         */
        function () {
            _this._syncDescribedByIds();
            _this._changeDetectorRef.markForCheck();
        }));
        if (this._dir) {
            this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe((/**
             * @return {?}
             */
            function () { return _this.updateOutlineGap(); }));
        }
    };
    /**
     * @return {?}
     */
    MatFormField.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        this._validateControlChild();
        if (this._outlineGapCalculationNeededImmediately) {
            this.updateOutlineGap();
        }
    };
    /**
     * @return {?}
     */
    MatFormField.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // Avoid animations on load.
        this._subscriptAnimationState = 'enter';
        this._changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    MatFormField.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Determines whether a class from the NgControl should be forwarded to the host element. */
    /**
     * Determines whether a class from the NgControl should be forwarded to the host element.
     * @param {?} prop
     * @return {?}
     */
    MatFormField.prototype._shouldForward = /**
     * Determines whether a class from the NgControl should be forwarded to the host element.
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        /** @type {?} */
        var ngControl = this._control ? this._control.ngControl : null;
        return ngControl && ngControl[prop];
    };
    /**
     * @return {?}
     */
    MatFormField.prototype._hasPlaceholder = /**
     * @return {?}
     */
    function () {
        return !!(this._control && this._control.placeholder || this._placeholderChild);
    };
    /**
     * @return {?}
     */
    MatFormField.prototype._hasLabel = /**
     * @return {?}
     */
    function () {
        return !!this._labelChild;
    };
    /**
     * @return {?}
     */
    MatFormField.prototype._shouldLabelFloat = /**
     * @return {?}
     */
    function () {
        return this._canLabelFloat && (this._control.shouldLabelFloat || this._shouldAlwaysFloat);
    };
    /**
     * @return {?}
     */
    MatFormField.prototype._hideControlPlaceholder = /**
     * @return {?}
     */
    function () {
        // In the legacy appearance the placeholder is promoted to a label if no label is given.
        return this.appearance === 'legacy' && !this._hasLabel() ||
            this._hasLabel() && !this._shouldLabelFloat();
    };
    /**
     * @return {?}
     */
    MatFormField.prototype._hasFloatingLabel = /**
     * @return {?}
     */
    function () {
        // In the legacy appearance the placeholder is promoted to a label if no label is given.
        return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
    };
    /** Determines whether to display hints or errors. */
    /**
     * Determines whether to display hints or errors.
     * @return {?}
     */
    MatFormField.prototype._getDisplayedMessages = /**
     * Determines whether to display hints or errors.
     * @return {?}
     */
    function () {
        return (this._errorChildren && this._errorChildren.length > 0 &&
            this._control.errorState) ? 'error' : 'hint';
    };
    /** Animates the placeholder up and locks it in position. */
    /**
     * Animates the placeholder up and locks it in position.
     * @return {?}
     */
    MatFormField.prototype._animateAndLockLabel = /**
     * Animates the placeholder up and locks it in position.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._hasFloatingLabel() && this._canLabelFloat) {
            // If animations are disabled, we shouldn't go in here,
            // because the `transitionend` will never fire.
            if (this._animationsEnabled) {
                this._showAlwaysAnimate = true;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this._label.nativeElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this._showAlwaysAnimate = false;
                }));
            }
            this.floatLabel = 'always';
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
     * or child element with the `mat-placeholder` directive).
     */
    /**
     * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
     * or child element with the `mat-placeholder` directive).
     * @private
     * @return {?}
     */
    MatFormField.prototype._validatePlaceholders = /**
     * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
     * or child element with the `mat-placeholder` directive).
     * @private
     * @return {?}
     */
    function () {
        if (this._control.placeholder && this._placeholderChild) {
            throw getMatFormFieldPlaceholderConflictError();
        }
    };
    /** Does any extra processing that is required when handling the hints. */
    /**
     * Does any extra processing that is required when handling the hints.
     * @private
     * @return {?}
     */
    MatFormField.prototype._processHints = /**
     * Does any extra processing that is required when handling the hints.
     * @private
     * @return {?}
     */
    function () {
        this._validateHints();
        this._syncDescribedByIds();
    };
    /**
     * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
     * attribute being considered as `align="start"`.
     */
    /**
     * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
     * attribute being considered as `align="start"`.
     * @private
     * @return {?}
     */
    MatFormField.prototype._validateHints = /**
     * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
     * attribute being considered as `align="start"`.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._hintChildren) {
            /** @type {?} */
            var startHint_1;
            /** @type {?} */
            var endHint_1;
            this._hintChildren.forEach((/**
             * @param {?} hint
             * @return {?}
             */
            function (hint) {
                if (hint.align === 'start') {
                    if (startHint_1 || _this.hintLabel) {
                        throw getMatFormFieldDuplicatedHintError('start');
                    }
                    startHint_1 = hint;
                }
                else if (hint.align === 'end') {
                    if (endHint_1) {
                        throw getMatFormFieldDuplicatedHintError('end');
                    }
                    endHint_1 = hint;
                }
            }));
        }
    };
    /**
     * Sets the list of element IDs that describe the child control. This allows the control to update
     * its `aria-describedby` attribute accordingly.
     */
    /**
     * Sets the list of element IDs that describe the child control. This allows the control to update
     * its `aria-describedby` attribute accordingly.
     * @private
     * @return {?}
     */
    MatFormField.prototype._syncDescribedByIds = /**
     * Sets the list of element IDs that describe the child control. This allows the control to update
     * its `aria-describedby` attribute accordingly.
     * @private
     * @return {?}
     */
    function () {
        if (this._control) {
            /** @type {?} */
            var ids = [];
            if (this._getDisplayedMessages() === 'hint') {
                /** @type {?} */
                var startHint = this._hintChildren ?
                    this._hintChildren.find((/**
                     * @param {?} hint
                     * @return {?}
                     */
                    function (hint) { return hint.align === 'start'; })) : null;
                /** @type {?} */
                var endHint = this._hintChildren ?
                    this._hintChildren.find((/**
                     * @param {?} hint
                     * @return {?}
                     */
                    function (hint) { return hint.align === 'end'; })) : null;
                if (startHint) {
                    ids.push(startHint.id);
                }
                else if (this._hintLabel) {
                    ids.push(this._hintLabelId);
                }
                if (endHint) {
                    ids.push(endHint.id);
                }
            }
            else if (this._errorChildren) {
                ids = this._errorChildren.map((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return error.id; }));
            }
            this._control.setDescribedByIds(ids);
        }
    };
    /** Throws an error if the form field's control is missing. */
    /**
     * Throws an error if the form field's control is missing.
     * @protected
     * @return {?}
     */
    MatFormField.prototype._validateControlChild = /**
     * Throws an error if the form field's control is missing.
     * @protected
     * @return {?}
     */
    function () {
        if (!this._control) {
            throw getMatFormFieldMissingControlError();
        }
    };
    /**
     * Updates the width and position of the gap in the outline. Only relevant for the outline
     * appearance.
     */
    /**
     * Updates the width and position of the gap in the outline. Only relevant for the outline
     * appearance.
     * @return {?}
     */
    MatFormField.prototype.updateOutlineGap = /**
     * Updates the width and position of the gap in the outline. Only relevant for the outline
     * appearance.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var labelEl = this._label ? this._label.nativeElement : null;
        if (this.appearance !== 'outline' || !labelEl || !labelEl.children.length ||
            !labelEl.textContent.trim()) {
            return;
        }
        if (!this._platform.isBrowser) {
            // getBoundingClientRect isn't available on the server.
            return;
        }
        // If the element is not present in the DOM, the outline gap will need to be calculated
        // the next time it is checked and in the DOM.
        if (!(/** @type {?} */ (document.documentElement)).contains(this._elementRef.nativeElement)) {
            this._outlineGapCalculationNeededImmediately = true;
            return;
        }
        /** @type {?} */
        var startWidth = 0;
        /** @type {?} */
        var gapWidth = 0;
        /** @type {?} */
        var container = this._connectionContainerRef.nativeElement;
        /** @type {?} */
        var startEls = container.querySelectorAll('.mat-form-field-outline-start');
        /** @type {?} */
        var gapEls = container.querySelectorAll('.mat-form-field-outline-gap');
        if (this._label && this._label.nativeElement.children.length) {
            /** @type {?} */
            var containerRect = container.getBoundingClientRect();
            // If the container's width and height are zero, it means that the element is
            // invisible and we can't calculate the outline gap. Mark the element as needing
            // to be checked the next time the zone stabilizes. We can't do this immediately
            // on the next change detection, because even if the element becomes visible,
            // the `ClientRect` won't be reclaculated immediately. We reset the
            // `_outlineGapCalculationNeededImmediately` flag some we don't run the checks twice.
            if (containerRect.width === 0 && containerRect.height === 0) {
                this._outlineGapCalculationNeededOnStable = true;
                this._outlineGapCalculationNeededImmediately = false;
                return;
            }
            /** @type {?} */
            var containerStart = this._getStartEnd(containerRect);
            /** @type {?} */
            var labelStart = this._getStartEnd(labelEl.children[0].getBoundingClientRect());
            /** @type {?} */
            var labelWidth = 0;
            for (var _i = 0, _a = labelEl.children; _i < _a.length; _i++) {
                var child = _a[_i];
                labelWidth += child.offsetWidth;
            }
            startWidth = labelStart - containerStart - outlineGapPadding;
            gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
        }
        for (var i = 0; i < startEls.length; i++) {
            startEls.item(i).style.width = startWidth + "px";
        }
        for (var i = 0; i < gapEls.length; i++) {
            gapEls.item(i).style.width = gapWidth + "px";
        }
        this._outlineGapCalculationNeededOnStable =
            this._outlineGapCalculationNeededImmediately = false;
    };
    /** Gets the start end of the rect considering the current directionality. */
    /**
     * Gets the start end of the rect considering the current directionality.
     * @private
     * @param {?} rect
     * @return {?}
     */
    MatFormField.prototype._getStartEnd = /**
     * Gets the start end of the rect considering the current directionality.
     * @private
     * @param {?} rect
     * @return {?}
     */
    function (rect) {
        return this._dir && this._dir.value === 'rtl' ? rect.right : rect.left;
    };
    MatFormField.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-form-field',
                    exportAs: 'matFormField',
                    template: "<div class=\"mat-form-field-wrapper\"><div class=\"mat-form-field-flex\" #connectionContainer (click)=\"_control.onContainerClick && _control.onContainerClick($event)\"><ng-container *ngIf=\"appearance == 'outline'\"><div class=\"mat-form-field-outline\"><div class=\"mat-form-field-outline-start\"></div><div class=\"mat-form-field-outline-gap\"></div><div class=\"mat-form-field-outline-end\"></div></div><div class=\"mat-form-field-outline mat-form-field-outline-thick\"><div class=\"mat-form-field-outline-start\"></div><div class=\"mat-form-field-outline-gap\"></div><div class=\"mat-form-field-outline-end\"></div></div></ng-container><div class=\"mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\"><ng-content select=\"[matPrefix]\"></ng-content></div><div class=\"mat-form-field-infix\" #inputContainer><ng-content></ng-content><span class=\"mat-form-field-label-wrapper\"><label class=\"mat-form-field-label\" (cdkObserveContent)=\"updateOutlineGap()\" [cdkObserveContentDisabled]=\"appearance != 'outline'\" [id]=\"_labelId\" [attr.for]=\"_control.id\" [attr.aria-owns]=\"_control.id\" [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat\" [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat\" [class.mat-accent]=\"color == 'accent'\" [class.mat-warn]=\"color == 'warn'\" #label *ngIf=\"_hasFloatingLabel()\" [ngSwitch]=\"_hasLabel()\"><ng-container *ngSwitchCase=\"false\"><ng-content select=\"mat-placeholder\"></ng-content><span>{{_control.placeholder}}</span></ng-container><ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content><span class=\"mat-placeholder-required mat-form-field-required-marker\" aria-hidden=\"true\" *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span></label></span></div><div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\"><ng-content select=\"[matSuffix]\"></ng-content></div></div><div class=\"mat-form-field-underline\" #underline *ngIf=\"appearance != 'outline'\"><span class=\"mat-form-field-ripple\" [class.mat-accent]=\"color == 'accent'\" [class.mat-warn]=\"color == 'warn'\"></span></div><div class=\"mat-form-field-subscript-wrapper\" [ngSwitch]=\"_getDisplayedMessages()\"><div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\"><ng-content select=\"mat-error\"></ng-content></div><div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\" [@transitionMessages]=\"_subscriptAnimationState\"><div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div><ng-content select=\"mat-hint:not([align='end'])\"></ng-content><div class=\"mat-form-field-hint-spacer\"></div><ng-content select=\"mat-hint[align='end']\"></ng-content></div></div></div>",
                    // MatInput is a directive and can't have styles, so we need to include its styles here
                    // in form-field-input.css. The MatInput styles are fairly minimal so it shouldn't be a
                    // big deal for people who aren't using MatInput.
                    styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}@media (-ms-high-contrast:active){.mat-form-field-infix{border-image:linear-gradient(transparent,transparent)}}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform .4s cubic-bezier(.25,.8,.25,1),color .4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-empty.mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scaleY(1.0001)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform .3s cubic-bezier(.25,.8,.25,1),opacity .1s cubic-bezier(.25,.8,.25,1),background-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-label-wrapper .mat-icon,.mat-form-field-subscript-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none} .mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}@media (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:'';display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}@media (-ms-high-contrast:active){.mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em} .mat-input-element{font:inherit;background:0 0;color:currentColor;border:none;outline:0;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=month]::after,.mat-input-element[type=time]::after,.mat-input-element[type=week]::after{content:' ';white-space:pre;width:1px}.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button,.mat-input-element::-webkit-inner-spin-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent!important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:0 0}@media (-ms-high-contrast:active){.mat-focused select.mat-input-element::-ms-value{color:inherit}}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:'';width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px} .mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media (-ms-high-contrast:active){.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px} .mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-start{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start{border-width:2px;transition:border-color .3s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity .1s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline{transition:none} .mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}@media (-ms-high-contrast:active){.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.25,.8,.25,1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}"],
                    animations: [matFormFieldAnimations.transitionMessages],
                    host: {
                        'class': 'mat-form-field',
                        '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
                        '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
                        '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
                        '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
                        '[class.mat-form-field-invalid]': '_control.errorState',
                        '[class.mat-form-field-can-float]': '_canLabelFloat',
                        '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
                        '[class.mat-form-field-has-label]': '_hasFloatingLabel()',
                        '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
                        '[class.mat-form-field-disabled]': '_control.disabled',
                        '[class.mat-form-field-autofilled]': '_control.autofilled',
                        '[class.mat-focused]': '_control.focused',
                        '[class.mat-accent]': 'color == "accent"',
                        '[class.mat-warn]': 'color == "warn"',
                        '[class.ng-untouched]': '_shouldForward("untouched")',
                        '[class.ng-touched]': '_shouldForward("touched")',
                        '[class.ng-pristine]': '_shouldForward("pristine")',
                        '[class.ng-dirty]': '_shouldForward("dirty")',
                        '[class.ng-valid]': '_shouldForward("valid")',
                        '[class.ng-invalid]': '_shouldForward("invalid")',
                        '[class.ng-pending]': '_shouldForward("pending")',
                        '[class._mat-animation-noopable]': '!_animationsEnabled',
                    },
                    inputs: ['color'],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatFormField.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_LABEL_GLOBAL_OPTIONS"],] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_FORM_FIELD_DEFAULT_OPTIONS,] }] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"],] }] }
    ]; };
    MatFormField.propDecorators = {
        appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hideRequiredMarker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hintLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        floatLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        underlineRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['underline', { static: false },] }],
        _connectionContainerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['connectionContainer', { static: true },] }],
        _inputContainerRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['inputContainer', { static: false },] }],
        _label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['label', { static: false },] }],
        _controlNonStatic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatFormFieldControl, { static: false },] }],
        _controlStatic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatFormFieldControl, { static: true },] }],
        _labelChildNonStatic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatLabel, { static: false },] }],
        _labelChildStatic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatLabel, { static: true },] }],
        _placeholderChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatPlaceholder, { static: false },] }],
        _errorChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatError,] }],
        _hintChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatHint,] }],
        _prefixChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatPrefix,] }],
        _suffixChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatSuffix,] }]
    };
    return MatFormField;
}(_MatFormFieldMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatFormFieldModule = /** @class */ (function () {
    function MatFormFieldModule() {
    }
    MatFormFieldModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        MatError,
                        MatFormField,
                        MatHint,
                        MatLabel,
                        MatPlaceholder,
                        MatPrefix,
                        MatSuffix,
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_11__["ObserversModule"],
                    ],
                    exports: [
                        MatError,
                        MatFormField,
                        MatHint,
                        MatLabel,
                        MatPlaceholder,
                        MatPrefix,
                        MatSuffix,
                    ],
                },] },
    ];
    return MatFormFieldModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=form-field.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/slider.es5.js":
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/slider.es5.js ***!
  \***********************************************************/
/*! exports provided: MatSliderModule, MAT_SLIDER_VALUE_ACCESSOR, MatSliderChange, MatSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSliderModule", function() { return MatSliderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SLIDER_VALUE_ACCESSOR", function() { return MAT_SLIDER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSliderChange", function() { return MatSliderChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSlider", function() { return MatSlider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Visually, a 30px separation between tick marks looks best. This is very subjective but it is
 * the default separation we chose.
 * @type {?}
 */
var MIN_AUTO_TICK_SEPARATION = 30;
/**
 * The thumb gap size for a disabled slider.
 * @type {?}
 */
var DISABLED_THUMB_GAP = 7;
/**
 * The thumb gap size for a non-active slider at its minimum value.
 * @type {?}
 */
var MIN_VALUE_NONACTIVE_THUMB_GAP = 7;
/**
 * The thumb gap size for an active slider at its minimum value.
 * @type {?}
 */
var MIN_VALUE_ACTIVE_THUMB_GAP = 10;
/**
 * Provider Expression that allows mat-slider to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)] and [formControl].
 * \@docs-private
 * @type {?}
 */
var MAT_SLIDER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])((/**
     * @return {?}
     */
    function () { return MatSlider; })),
    multi: true
};
/**
 * A simple change event emitted by the MatSlider component.
 */
var  /**
 * A simple change event emitted by the MatSlider component.
 */
MatSliderChange = /** @class */ (function () {
    function MatSliderChange() {
    }
    return MatSliderChange;
}());
// Boilerplate for applying mixins to MatSlider.
/**
 * \@docs-private
 */
var 
// Boilerplate for applying mixins to MatSlider.
/**
 * \@docs-private
 */
MatSliderBase = /** @class */ (function () {
    function MatSliderBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatSliderBase;
}());
/** @type {?} */
var _MatSliderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinDisabled"])(MatSliderBase), 'accent'));
/**
 * Allows users to select from a range of values by moving the slider thumb. It is similar in
 * behavior to the native `<input type="range">` element.
 */
var MatSlider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatSlider, _super);
    function MatSlider(elementRef, _focusMonitor, _changeDetectorRef, _dir, tabIndex, _animationMode) {
        var _this = _super.call(this, elementRef) || this;
        _this._focusMonitor = _focusMonitor;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._dir = _dir;
        _this._animationMode = _animationMode;
        _this._invert = false;
        _this._max = 100;
        _this._min = 0;
        _this._step = 1;
        _this._thumbLabel = false;
        _this._tickInterval = 0;
        _this._value = null;
        _this._vertical = false;
        /**
         * Event emitted when the slider value has changed.
         */
        _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Event emitted when the slider thumb moves.
         */
        _this.input = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Emits when the raw value of the slider changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * \@docs-private
         */
        _this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         */
        _this.onTouched = (/**
         * @return {?}
         */
        function () { });
        _this._percent = 0;
        /**
         * Whether or not the thumb is sliding.
         * Used to determine if there should be a transition for the thumb and fill track.
         */
        _this._isSliding = false;
        /**
         * Whether or not the slider is active (clicked or sliding).
         * Used to shrink and grow the thumb as according to the Material Design spec.
         */
        _this._isActive = false;
        /**
         * The size of a tick interval as a percentage of the size of the track.
         */
        _this._tickIntervalPercent = 0;
        /**
         * The dimensions of the slider.
         */
        _this._sliderDimensions = null;
        _this._controlValueAccessorChangeFn = (/**
         * @return {?}
         */
        function () { });
        /**
         * Subscription to the Directionality change EventEmitter.
         */
        _this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        _this.tabIndex = parseInt(tabIndex) || 0;
        return _this;
    }
    Object.defineProperty(MatSlider.prototype, "invert", {
        /** Whether the slider is inverted. */
        get: /**
         * Whether the slider is inverted.
         * @return {?}
         */
        function () { return this._invert; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._invert = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlider.prototype, "max", {
        /** The maximum value that the slider can have. */
        get: /**
         * The maximum value that the slider can have.
         * @return {?}
         */
        function () { return this._max; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._max = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(v, this._max);
            this._percent = this._calculatePercentage(this._value);
            // Since this also modifies the percentage, we need to let the change detection know.
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlider.prototype, "min", {
        /** The minimum value that the slider can have. */
        get: /**
         * The minimum value that the slider can have.
         * @return {?}
         */
        function () { return this._min; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._min = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(v, this._min);
            // If the value wasn't explicitly set by the user, set it to the min.
            if (this._value === null) {
                this.value = this._min;
            }
            this._percent = this._calculatePercentage(this._value);
            // Since this also modifies the percentage, we need to let the change detection know.
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlider.prototype, "step", {
        /** The values at which the thumb will snap. */
        get: /**
         * The values at which the thumb will snap.
         * @return {?}
         */
        function () { return this._step; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._step = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(v, this._step);
            if (this._step % 1 !== 0) {
                this._roundToDecimal = (/** @type {?} */ (this._step.toString().split('.').pop())).length;
            }
            // Since this could modify the label, we need to notify the change detection.
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlider.prototype, "thumbLabel", {
        /** Whether or not to show the thumb label. */
        get: /**
         * Whether or not to show the thumb label.
         * @return {?}
         */
        function () { return this._thumbLabel; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._thumbLabel = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlider.prototype, "tickInterval", {
        /**
         * How often to show ticks. Relative to the step so that a tick always appears on a step.
         * Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).
         */
        get: /**
         * How often to show ticks. Relative to the step so that a tick always appears on a step.
         * Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).
         * @return {?}
         */
        function () { return this._tickInterval; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value === 'auto') {
                this._tickInterval = 'auto';
            }
            else if (typeof value === 'number' || typeof value === 'string') {
                this._tickInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(value, (/** @type {?} */ (this._tickInterval)));
            }
            else {
                this._tickInterval = 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlider.prototype, "value", {
        /** Value of the slider. */
        get: /**
         * Value of the slider.
         * @return {?}
         */
        function () {
            // If the value needs to be read and it is still uninitialized, initialize it to the min.
            if (this._value === null) {
                this.value = this._min;
            }
            return this._value;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v !== this._value) {
                /** @type {?} */
                var value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(v);
                // While incrementing by a decimal we can end up with values like 33.300000000000004.
                // Truncate it to ensure that it matches the label and to make it easier to work with.
                if (this._roundToDecimal) {
                    value = parseFloat(value.toFixed(this._roundToDecimal));
                }
                this._value = value;
                this._percent = this._calculatePercentage(this._value);
                // Since this also modifies the percentage, we need to let the change detection know.
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlider.prototype, "vertical", {
        /** Whether the slider is vertical. */
        get: /**
         * Whether the slider is vertical.
         * @return {?}
         */
        function () { return this._vertical; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlider.prototype, "displayValue", {
        /** The value to be used for display purposes. */
        get: /**
         * The value to be used for display purposes.
         * @return {?}
         */
        function () {
            if (this.displayWith) {
                return this.displayWith(this.value);
            }
            // Note that this could be improved further by rounding something like 0.999 to 1 or
            // 0.899 to 0.9, however it is very performance sensitive, because it gets called on
            // every change detection cycle.
            if (this._roundToDecimal && this.value && this.value % 1 !== 0) {
                return this.value.toFixed(this._roundToDecimal);
            }
            return this.value || 0;
        },
        enumerable: true,
        configurable: true
    });
    /** set focus to the host element */
    /**
     * set focus to the host element
     * @param {?=} options
     * @return {?}
     */
    MatSlider.prototype.focus = /**
     * set focus to the host element
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this._focusHostElement(options);
    };
    /** blur the host element */
    /**
     * blur the host element
     * @return {?}
     */
    MatSlider.prototype.blur = /**
     * blur the host element
     * @return {?}
     */
    function () {
        this._blurHostElement();
    };
    Object.defineProperty(MatSlider.prototype, "percent", {
        /** The percentage of the slider that coincides with the value. */
        get: /**
         * The percentage of the slider that coincides with the value.
         * @return {?}
         */
        function () { return this._clamp(this._percent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlider.prototype, "_invertAxis", {
        /**
         * Whether the axis of the slider is inverted.
         * (i.e. whether moving the thumb in the positive x or y direction decreases the slider's value).
         */
        get: /**
         * Whether the axis of the slider is inverted.
         * (i.e. whether moving the thumb in the positive x or y direction decreases the slider's value).
         * @return {?}
         */
        function () {
            // Standard non-inverted mode for a vertical slider should be dragging the thumb from bottom to
            // top. However from a y-axis standpoint this is inverted.
            return this.vertical ? !this.invert : this.invert;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlider.prototype, "_isMinValue", {
        /** Whether the slider is at its minimum value. */
        get: /**
         * Whether the slider is at its minimum value.
         * @return {?}
         */
        function () {
            return this.percent === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlider.prototype, "_thumbGap", {
        /**
         * The amount of space to leave between the slider thumb and the track fill & track background
         * elements.
         */
        get: /**
         * The amount of space to leave between the slider thumb and the track fill & track background
         * elements.
         * @return {?}
         */
        function () {
            if (this.disabled) {
                return DISABLED_THUMB_GAP;
            }
            if (this._isMinValue && !this.thumbLabel) {
                return this._isActive ? MIN_VALUE_ACTIVE_THUMB_GAP : MIN_VALUE_NONACTIVE_THUMB_GAP;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlider.prototype, "_trackBackgroundStyles", {
        /** CSS styles for the track background element. */
        get: /**
         * CSS styles for the track background element.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var axis = this.vertical ? 'Y' : 'X';
            /** @type {?} */
            var scale = this.vertical ? "1, " + (1 - this.percent) + ", 1" : 1 - this.percent + ", 1, 1";
            /** @type {?} */
            var sign = this._shouldInvertMouseCoords() ? '-' : '';
            return {
                // scale3d avoids some rendering issues in Chrome. See #12071.
                transform: "translate" + axis + "(" + sign + this._thumbGap + "px) scale3d(" + scale + ")"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlider.prototype, "_trackFillStyles", {
        /** CSS styles for the track fill element. */
        get: /**
         * CSS styles for the track fill element.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var axis = this.vertical ? 'Y' : 'X';
            /** @type {?} */
            var scale = this.vertical ? "1, " + this.percent + ", 1" : this.percent + ", 1, 1";
            /** @type {?} */
            var sign = this._shouldInvertMouseCoords() ? '' : '-';
            return {
                // scale3d avoids some rendering issues in Chrome. See #12071.
                transform: "translate" + axis + "(" + sign + this._thumbGap + "px) scale3d(" + scale + ")"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlider.prototype, "_ticksContainerStyles", {
        /** CSS styles for the ticks container element. */
        get: /**
         * CSS styles for the ticks container element.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var axis = this.vertical ? 'Y' : 'X';
            // For a horizontal slider in RTL languages we push the ticks container off the left edge
            // instead of the right edge to avoid causing a horizontal scrollbar to appear.
            /** @type {?} */
            var sign = !this.vertical && this._getDirection() == 'rtl' ? '' : '-';
            /** @type {?} */
            var offset = this._tickIntervalPercent / 2 * 100;
            return {
                'transform': "translate" + axis + "(" + sign + offset + "%)"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlider.prototype, "_ticksStyles", {
        /** CSS styles for the ticks element. */
        get: /**
         * CSS styles for the ticks element.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var tickSize = this._tickIntervalPercent * 100;
            /** @type {?} */
            var backgroundSize = this.vertical ? "2px " + tickSize + "%" : tickSize + "% 2px";
            /** @type {?} */
            var axis = this.vertical ? 'Y' : 'X';
            // Depending on the direction we pushed the ticks container, push the ticks the opposite
            // direction to re-center them but clip off the end edge. In RTL languages we need to flip the
            // ticks 180 degrees so we're really cutting off the end edge abd not the start.
            /** @type {?} */
            var sign = !this.vertical && this._getDirection() == 'rtl' ? '-' : '';
            /** @type {?} */
            var rotate = !this.vertical && this._getDirection() == 'rtl' ? ' rotate(180deg)' : '';
            /** @type {?} */
            var styles = {
                'backgroundSize': backgroundSize,
                // Without translateZ ticks sometimes jitter as the slider moves on Chrome & Firefox.
                'transform': "translateZ(0) translate" + axis + "(" + sign + tickSize / 2 + "%)" + rotate
            };
            if (this._isMinValue && this._thumbGap) {
                /** @type {?} */
                var side = this.vertical ?
                    (this._invertAxis ? 'Bottom' : 'Top') :
                    (this._invertAxis ? 'Right' : 'Left');
                styles["padding" + side] = this._thumbGap + "px";
            }
            return styles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSlider.prototype, "_thumbContainerStyles", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var axis = this.vertical ? 'Y' : 'X';
            // For a horizontal slider in RTL languages we push the thumb container off the left edge
            // instead of the right edge to avoid causing a horizontal scrollbar to appear.
            /** @type {?} */
            var invertOffset = (this._getDirection() == 'rtl' && !this.vertical) ? !this._invertAxis : this._invertAxis;
            /** @type {?} */
            var offset = (invertOffset ? this.percent : 1 - this.percent) * 100;
            return {
                'transform': "translate" + axis + "(-" + offset + "%)"
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Whether mouse events should be converted to a slider position by calculating their distance
     * from the right or bottom edge of the slider as opposed to the top or left.
     */
    /**
     * Whether mouse events should be converted to a slider position by calculating their distance
     * from the right or bottom edge of the slider as opposed to the top or left.
     * @private
     * @return {?}
     */
    MatSlider.prototype._shouldInvertMouseCoords = /**
     * Whether mouse events should be converted to a slider position by calculating their distance
     * from the right or bottom edge of the slider as opposed to the top or left.
     * @private
     * @return {?}
     */
    function () {
        return (this._getDirection() == 'rtl' && !this.vertical) ? !this._invertAxis : this._invertAxis;
    };
    /** The language direction for this slider element. */
    /**
     * The language direction for this slider element.
     * @private
     * @return {?}
     */
    MatSlider.prototype._getDirection = /**
     * The language direction for this slider element.
     * @private
     * @return {?}
     */
    function () {
        return (this._dir && this._dir.value == 'rtl') ? 'rtl' : 'ltr';
    };
    /**
     * @return {?}
     */
    MatSlider.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._focusMonitor
            .monitor(this._elementRef, true)
            .subscribe((/**
         * @param {?} origin
         * @return {?}
         */
        function (origin) {
            _this._isActive = !!origin && origin !== 'keyboard';
            _this._changeDetectorRef.detectChanges();
        }));
        if (this._dir) {
            this._dirChangeSubscription = this._dir.change.subscribe((/**
             * @return {?}
             */
            function () {
                _this._changeDetectorRef.markForCheck();
            }));
        }
    };
    /**
     * @return {?}
     */
    MatSlider.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._focusMonitor.stopMonitoring(this._elementRef);
        this._dirChangeSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    MatSlider.prototype._onMouseenter = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        // We save the dimensions of the slider here so we can use them to update the spacing of the
        // ticks and determine where on the slider click and slide events happen.
        this._sliderDimensions = this._getSliderDimensions();
        this._updateTickIntervalPercent();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatSlider.prototype._onMousedown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Don't do anything if the slider is disabled or the
        // user is using anything other than the main mouse button.
        if (this.disabled || event.button !== 0) {
            return;
        }
        /** @type {?} */
        var oldValue = this.value;
        this._isSliding = false;
        this._focusHostElement();
        this._updateValueFromPosition({ x: event.clientX, y: event.clientY });
        // Emit a change and input event if the value changed.
        if (oldValue != this.value) {
            this._emitInputEvent();
            this._emitChangeEvent();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatSlider.prototype._onSlide = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.disabled) {
            return;
        }
        // The slide start event sometimes fails to fire on iOS, so if we're not already in the sliding
        // state, call the slide start handler manually.
        if (!this._isSliding) {
            this._onSlideStart(null);
        }
        // Prevent the slide from selecting anything else.
        event.preventDefault();
        /** @type {?} */
        var oldValue = this.value;
        this._updateValueFromPosition({ x: event.center.x, y: event.center.y });
        // Native range elements always emit `input` events when the value changed while sliding.
        if (oldValue != this.value) {
            this._emitInputEvent();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatSlider.prototype._onSlideStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.disabled || this._isSliding) {
            return;
        }
        // Simulate mouseenter in case this is a mobile device.
        this._onMouseenter();
        this._isSliding = true;
        this._focusHostElement();
        this._valueOnSlideStart = this.value;
        if (event) {
            this._updateValueFromPosition({ x: event.center.x, y: event.center.y });
            event.preventDefault();
        }
    };
    /**
     * @return {?}
     */
    MatSlider.prototype._onSlideEnd = /**
     * @return {?}
     */
    function () {
        this._isSliding = false;
        if (this._valueOnSlideStart != this.value && !this.disabled) {
            this._emitChangeEvent();
        }
        this._valueOnSlideStart = null;
    };
    /**
     * @return {?}
     */
    MatSlider.prototype._onFocus = /**
     * @return {?}
     */
    function () {
        // We save the dimensions of the slider here so we can use them to update the spacing of the
        // ticks and determine where on the slider click and slide events happen.
        this._sliderDimensions = this._getSliderDimensions();
        this._updateTickIntervalPercent();
    };
    /**
     * @return {?}
     */
    MatSlider.prototype._onBlur = /**
     * @return {?}
     */
    function () {
        this.onTouched();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatSlider.prototype._onKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.disabled || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["hasModifierKey"])(event)) {
            return;
        }
        /** @type {?} */
        var oldValue = this.value;
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["PAGE_UP"]:
                this._increment(10);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["PAGE_DOWN"]:
                this._increment(-10);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["END"]:
                this.value = this.max;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["HOME"]:
                this.value = this.min;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["LEFT_ARROW"]:
                // NOTE: For a sighted user it would make more sense that when they press an arrow key on an
                // inverted slider the thumb moves in that direction. However for a blind user, nothing
                // about the slider indicates that it is inverted. They will expect left to be decrement,
                // regardless of how it appears on the screen. For speakers ofRTL languages, they probably
                // expect left to mean increment. Therefore we flip the meaning of the side arrow keys for
                // RTL. For inverted sliders we prefer a good a11y experience to having it "look right" for
                // sighted users, therefore we do not swap the meaning.
                this._increment(this._getDirection() == 'rtl' ? 1 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["UP_ARROW"]:
                this._increment(1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["RIGHT_ARROW"]:
                // See comment on LEFT_ARROW about the conditions under which we flip the meaning.
                this._increment(this._getDirection() == 'rtl' ? -1 : 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["DOWN_ARROW"]:
                this._increment(-1);
                break;
            default:
                // Return if the key is not one that we explicitly handle to avoid calling preventDefault on
                // it.
                return;
        }
        if (oldValue != this.value) {
            this._emitInputEvent();
            this._emitChangeEvent();
        }
        this._isSliding = true;
        event.preventDefault();
    };
    /**
     * @return {?}
     */
    MatSlider.prototype._onKeyup = /**
     * @return {?}
     */
    function () {
        this._isSliding = false;
    };
    /** Increments the slider by the given number of steps (negative number decrements). */
    /**
     * Increments the slider by the given number of steps (negative number decrements).
     * @private
     * @param {?} numSteps
     * @return {?}
     */
    MatSlider.prototype._increment = /**
     * Increments the slider by the given number of steps (negative number decrements).
     * @private
     * @param {?} numSteps
     * @return {?}
     */
    function (numSteps) {
        this.value = this._clamp((this.value || 0) + this.step * numSteps, this.min, this.max);
    };
    /** Calculate the new value from the new physical location. The value will always be snapped. */
    /**
     * Calculate the new value from the new physical location. The value will always be snapped.
     * @private
     * @param {?} pos
     * @return {?}
     */
    MatSlider.prototype._updateValueFromPosition = /**
     * Calculate the new value from the new physical location. The value will always be snapped.
     * @private
     * @param {?} pos
     * @return {?}
     */
    function (pos) {
        if (!this._sliderDimensions) {
            return;
        }
        /** @type {?} */
        var offset = this.vertical ? this._sliderDimensions.top : this._sliderDimensions.left;
        /** @type {?} */
        var size = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
        /** @type {?} */
        var posComponent = this.vertical ? pos.y : pos.x;
        // The exact value is calculated from the event and used to find the closest snap value.
        /** @type {?} */
        var percent = this._clamp((posComponent - offset) / size);
        if (this._shouldInvertMouseCoords()) {
            percent = 1 - percent;
        }
        // Since the steps may not divide cleanly into the max value, if the user
        // slid to 0 or 100 percent, we jump to the min/max value. This approach
        // is slightly more intuitive than using `Math.ceil` below, because it
        // follows the user's pointer closer.
        if (percent === 0) {
            this.value = this.min;
        }
        else if (percent === 1) {
            this.value = this.max;
        }
        else {
            /** @type {?} */
            var exactValue = this._calculateValue(percent);
            // This calculation finds the closest step by finding the closest
            // whole number divisible by the step relative to the min.
            /** @type {?} */
            var closestValue = Math.round((exactValue - this.min) / this.step) * this.step + this.min;
            // The value needs to snap to the min and max.
            this.value = this._clamp(closestValue, this.min, this.max);
        }
    };
    /** Emits a change event if the current value is different from the last emitted value. */
    /**
     * Emits a change event if the current value is different from the last emitted value.
     * @private
     * @return {?}
     */
    MatSlider.prototype._emitChangeEvent = /**
     * Emits a change event if the current value is different from the last emitted value.
     * @private
     * @return {?}
     */
    function () {
        this._controlValueAccessorChangeFn(this.value);
        this.valueChange.emit(this.value);
        this.change.emit(this._createChangeEvent());
    };
    /** Emits an input event when the current value is different from the last emitted value. */
    /**
     * Emits an input event when the current value is different from the last emitted value.
     * @private
     * @return {?}
     */
    MatSlider.prototype._emitInputEvent = /**
     * Emits an input event when the current value is different from the last emitted value.
     * @private
     * @return {?}
     */
    function () {
        this.input.emit(this._createChangeEvent());
    };
    /** Updates the amount of space between ticks as a percentage of the width of the slider. */
    /**
     * Updates the amount of space between ticks as a percentage of the width of the slider.
     * @private
     * @return {?}
     */
    MatSlider.prototype._updateTickIntervalPercent = /**
     * Updates the amount of space between ticks as a percentage of the width of the slider.
     * @private
     * @return {?}
     */
    function () {
        if (!this.tickInterval || !this._sliderDimensions) {
            return;
        }
        if (this.tickInterval == 'auto') {
            /** @type {?} */
            var trackSize = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
            /** @type {?} */
            var pixelsPerStep = trackSize * this.step / (this.max - this.min);
            /** @type {?} */
            var stepsPerTick = Math.ceil(MIN_AUTO_TICK_SEPARATION / pixelsPerStep);
            /** @type {?} */
            var pixelsPerTick = stepsPerTick * this.step;
            this._tickIntervalPercent = pixelsPerTick / trackSize;
        }
        else {
            this._tickIntervalPercent = this.tickInterval * this.step / (this.max - this.min);
        }
    };
    /** Creates a slider change object from the specified value. */
    /**
     * Creates a slider change object from the specified value.
     * @private
     * @param {?=} value
     * @return {?}
     */
    MatSlider.prototype._createChangeEvent = /**
     * Creates a slider change object from the specified value.
     * @private
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = this.value; }
        /** @type {?} */
        var event = new MatSliderChange();
        event.source = this;
        event.value = value;
        return event;
    };
    /** Calculates the percentage of the slider that a value is. */
    /**
     * Calculates the percentage of the slider that a value is.
     * @private
     * @param {?} value
     * @return {?}
     */
    MatSlider.prototype._calculatePercentage = /**
     * Calculates the percentage of the slider that a value is.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return ((value || 0) - this.min) / (this.max - this.min);
    };
    /** Calculates the value a percentage of the slider corresponds to. */
    /**
     * Calculates the value a percentage of the slider corresponds to.
     * @private
     * @param {?} percentage
     * @return {?}
     */
    MatSlider.prototype._calculateValue = /**
     * Calculates the value a percentage of the slider corresponds to.
     * @private
     * @param {?} percentage
     * @return {?}
     */
    function (percentage) {
        return this.min + percentage * (this.max - this.min);
    };
    /** Return a number between two numbers. */
    /**
     * Return a number between two numbers.
     * @private
     * @param {?} value
     * @param {?=} min
     * @param {?=} max
     * @return {?}
     */
    MatSlider.prototype._clamp = /**
     * Return a number between two numbers.
     * @private
     * @param {?} value
     * @param {?=} min
     * @param {?=} max
     * @return {?}
     */
    function (value, min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 1; }
        return Math.max(min, Math.min(value, max));
    };
    /**
     * Get the bounding client rect of the slider track element.
     * The track is used rather than the native element to ignore the extra space that the thumb can
     * take up.
     */
    /**
     * Get the bounding client rect of the slider track element.
     * The track is used rather than the native element to ignore the extra space that the thumb can
     * take up.
     * @private
     * @return {?}
     */
    MatSlider.prototype._getSliderDimensions = /**
     * Get the bounding client rect of the slider track element.
     * The track is used rather than the native element to ignore the extra space that the thumb can
     * take up.
     * @private
     * @return {?}
     */
    function () {
        return this._sliderWrapper ? this._sliderWrapper.nativeElement.getBoundingClientRect() : null;
    };
    /**
     * Focuses the native element.
     * Currently only used to allow a blur event to fire but will be used with keyboard input later.
     */
    /**
     * Focuses the native element.
     * Currently only used to allow a blur event to fire but will be used with keyboard input later.
     * @private
     * @param {?=} options
     * @return {?}
     */
    MatSlider.prototype._focusHostElement = /**
     * Focuses the native element.
     * Currently only used to allow a blur event to fire but will be used with keyboard input later.
     * @private
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this._elementRef.nativeElement.focus(options);
    };
    /** Blurs the native element. */
    /**
     * Blurs the native element.
     * @private
     * @return {?}
     */
    MatSlider.prototype._blurHostElement = /**
     * Blurs the native element.
     * @private
     * @return {?}
     */
    function () {
        this._elementRef.nativeElement.blur();
    };
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value
     */
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param {?} value
     * @return {?}
     */
    MatSlider.prototype.writeValue = /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * Registers a callback to be triggered when the value has changed.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    /**
     * Registers a callback to be triggered when the value has changed.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    MatSlider.prototype.registerOnChange = /**
     * Registers a callback to be triggered when the value has changed.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    /**
     * Registers a callback to be triggered when the component is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    /**
     * Registers a callback to be triggered when the component is touched.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    MatSlider.prototype.registerOnTouched = /**
     * Registers a callback to be triggered when the component is touched.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * Sets whether the component should be disabled.
     * Implemented as part of ControlValueAccessor.
     * @param isDisabled
     */
    /**
     * Sets whether the component should be disabled.
     * Implemented as part of ControlValueAccessor.
     * @param {?} isDisabled
     * @return {?}
     */
    MatSlider.prototype.setDisabledState = /**
     * Sets whether the component should be disabled.
     * Implemented as part of ControlValueAccessor.
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    MatSlider.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"], args: [{selector: 'mat-slider',
                    exportAs: 'matSlider',
                    providers: [MAT_SLIDER_VALUE_ACCESSOR],
                    host: {
                        '(focus)': '_onFocus()',
                        '(blur)': '_onBlur()',
                        '(mousedown)': '_onMousedown($event)',
                        '(keydown)': '_onKeydown($event)',
                        '(keyup)': '_onKeyup()',
                        '(mouseenter)': '_onMouseenter()',
                        '(slide)': '_onSlide($event)',
                        '(slideend)': '_onSlideEnd()',
                        '(slidestart)': '_onSlideStart($event)',
                        'class': 'mat-slider',
                        'role': 'slider',
                        '[tabIndex]': 'tabIndex',
                        '[attr.aria-disabled]': 'disabled',
                        '[attr.aria-valuemax]': 'max',
                        '[attr.aria-valuemin]': 'min',
                        '[attr.aria-valuenow]': 'value',
                        '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
                        '[class.mat-slider-disabled]': 'disabled',
                        '[class.mat-slider-has-ticks]': 'tickInterval',
                        '[class.mat-slider-horizontal]': '!vertical',
                        '[class.mat-slider-axis-inverted]': '_invertAxis',
                        '[class.mat-slider-sliding]': '_isSliding',
                        '[class.mat-slider-thumb-label-showing]': 'thumbLabel',
                        '[class.mat-slider-vertical]': 'vertical',
                        '[class.mat-slider-min-value]': '_isMinValue',
                        '[class.mat-slider-hide-last-tick]': 'disabled || _isMinValue && _thumbGap && _invertAxis',
                        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                    },
                    template: "<div class=\"mat-slider-wrapper\" #sliderWrapper><div class=\"mat-slider-track-wrapper\"><div class=\"mat-slider-track-background\" [ngStyle]=\"_trackBackgroundStyles\"></div><div class=\"mat-slider-track-fill\" [ngStyle]=\"_trackFillStyles\"></div></div><div class=\"mat-slider-ticks-container\" [ngStyle]=\"_ticksContainerStyles\"><div class=\"mat-slider-ticks\" [ngStyle]=\"_ticksStyles\"></div></div><div class=\"mat-slider-thumb-container\" [ngStyle]=\"_thumbContainerStyles\"><div class=\"mat-slider-focus-ring\"></div><div class=\"mat-slider-thumb\"></div><div class=\"mat-slider-thumb-label\"><span class=\"mat-slider-thumb-label-text\">{{displayValue}}</span></div></div></div>",
                    styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:0;vertical-align:middle}.mat-slider-wrapper{position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1),opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled) .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled) .mat-slider-thumb-label{cursor:-webkit-grab;cursor:grab}.mat-slider-sliding:not(.mat-slider-disabled) .mat-slider-thumb,.mat-slider-sliding:not(.mat-slider-disabled) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled) .mat-slider-thumb-label:active,.mat-slider:not(.mat-slider-disabled) .mat-slider-thumb:active{cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(.7);transition:transform .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1),border-color .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform .4s cubic-bezier(.25,.8,.25,1),border-radius .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1)}@media (-ms-high-contrast:active){.mat-slider-thumb-label{outline:solid 1px}}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-sliding .mat-slider-thumb-container,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-track-fill{transition-duration:0s}.mat-slider-has-ticks .mat-slider-wrapper::after{content:'';position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}@media (-ms-high-contrast:active){.mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}@media (-ms-high-contrast:active){.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}@media (-ms-high-contrast:active){.mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-track-fill{transition:none}"],
                    inputs: ['disabled', 'color', 'tabIndex'],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatSlider.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Attribute"], args: ['tabindex',] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"],] }] }
    ]; };
    MatSlider.propDecorators = {
        invert: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        step: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        thumbLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        tickInterval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        displayWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        _sliderWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['sliderWrapper', { static: false },] }]
    };
    return MatSlider;
}(_MatSliderMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatSliderModule = /** @class */ (function () {
    function MatSliderModule() {
    }
    MatSliderModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
                    exports: [MatSlider, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
                    declarations: [MatSlider],
                    providers: [{ provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_GESTURE_CONFIG"], useClass: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["GestureConfig"] }]
                },] },
    ];
    return MatSliderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=slider.es5.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <mat-card>\n      <mat-card-content>\n          <h2 class=\"example-h2\">Distance (mi)</h2> \n          <section class=\"datetime-example-section\" >\n            <ion-datetime displayFormat=\"M\" monthValues=\"1,2,3,4,5,6,7,8\" placeholder=\"Tap Here\"></ion-datetime>\n          </section>\n      </mat-card-content>\n  </mat-card>\n\n  <mat-card>\n    <mat-card-content>\n        <h2 class=\"example-h2\">Gas Type</h2>\n        <section class=\"example-section\" >\n            <!-- <ion-checkbox color=\"secondary\"></ion-checkbox><ion-label>Pepperoni</ion-label> -->\n          <mat-checkbox class=\"example-margin\" [(ngModel)]=\"regular\">Regular</mat-checkbox>\n          <mat-checkbox class=\"example-margin\" [(ngModel)]=\"mid\">Mid</mat-checkbox>\n          <mat-checkbox class=\"example-margin\" [(ngModel)]=\"premium\">Premium</mat-checkbox>\n          <mat-checkbox class=\"example-margin\" [(ngModel)]=\"diesel\">Diesel</mat-checkbox>\n        </section>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card class=\"amenities\">\n    <mat-card-content>\n      <h2 class=\"example-h2\">Amenities</h2>\n      <section class=\"a-example-section\" >\n        <section class=\"amenities-example-section\" >\n          <mat-button-toggle class=\"chipable\" value=\"wendys\">Wendys</mat-button-toggle>\n        </section>\n        <section class=\"amenities-example-section\" >\n          <mat-button-toggle class=\"chipable\" value=\"wendys\">Food</mat-button-toggle>\n        </section>\n        <section class=\"amenities-example-section\" >\n          <mat-button-toggle class=\"chipable\" value=\"wendys\">Restroom</mat-button-toggle>\n        </section>\n        <section class=\"amenities-example-section\" >\n          <mat-button-toggle class=\"chipable\" value=\"wendys\">Clean</mat-button-toggle>\n        </section>\n        <section class=\"amenities-example-section\" >\n          <mat-button-toggle class=\"chipable\" value=\"wendys\">Safe</mat-button-toggle>\n        </section>\n        <section class=\"amenities-example-section\" >\n          <mat-button-toggle class=\"chipable\" value=\"wendys\">Quick</mat-button-toggle>\n        </section>\n      </section>\n    </mat-card-content>\n  </mat-card>\n\n    <mat-card class=\"price\">\n      <mat-card-content>\n        <h2 class=\"example-h2\">Price</h2>\n        <section class=\"example-section\" >\n          <mat-slider [max]=5 [thumbLabel]=true [step]= 0.5></mat-slider>\n        </section>\n      </mat-card-content>\n    </mat-card>\n    <div class=\"example-button-row\">\n      <ion-button color=\"primary\" shape=\"round\" fill=\"outline\" routerLink=\"/tabs/tab3\">Clear</ion-button>\n      <ion-button color=\"primary\" shape=\"round\" routerLink=\"/tabs/tab2\">Done</ion-button>      \n    </div>          \n</ion-content>"

/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");












var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
        this.customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
        this.customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
        this.customPickerOptions = {
            buttons: [{
                    text: 'Save',
                    handler: function () { return console.log('Clicked Save!'); }
                }, {
                    text: 'Log',
                    handler: function () {
                        console.log('Clicked Log. Do not Dismiss.');
                        return false;
                    }
                }]
        };
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outside-chip {\n  padding: 0px !important;\n  color: white !important;\n}\n\nmat-slider.mat-slider.mat-accent.mat-slider-horizontal.mat-slider-thumb-label-showing {\n  margin-left: 5px;\n}\n\n.mat-accent.mat-slider-thumb, .mat-accent.mat-slider-thumb-label, .mat-accent.mat-slider-track-fill {\n  background-color: #3037A4 !important;\n}\n\nion-datetime {\n  font-size: 15px;\n}\n\n.chipable {\n  color: white;\n  border: none;\n}\n\n.example-h2 {\n  margin: 10px;\n  color: #3037A4;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-weight: bold;\n}\n\n.example-button-row {\n  margin: 25px;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.example-section {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  padding-left: 9px;\n}\n\n.amenities-example-section {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  padding-left: 9px;\n  margin: 5px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbmlzdHJhdG9yL0Rlc2t0b3AvRnJvbnRFbmQvc3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLG9DQUFBO0FDRUY7O0FEQ0E7RUFDRSxlQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0dGOztBREFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlCQUFBO0FDR0o7O0FEREE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDSUY7O0FERkE7RUFDRSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsaUJBQUE7QUNLRjs7QURIQTtFQUNFLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNNRjs7QURKQTtFQUNFLGNBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0c2lkZS1jaGlwe1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1zbGlkZXIubWF0LXNsaWRlci5tYXQtYWNjZW50Lm1hdC1zbGlkZXItaG9yaXpvbnRhbC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmd7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ubWF0LWFjY2VudC5tYXQtc2xpZGVyLXRodW1iLCAubWF0LWFjY2VudC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLCAubWF0LWFjY2VudC5tYXQtc2xpZGVyLXRyYWNrLWZpbGx7XG4gIGJhY2tncm91bmQtY29sb3I6IzMwMzdBNCAhaW1wb3J0YW50O1xufVxuXG5pb24tZGF0ZXRpbWV7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5jaGlwYWJsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBcbn1cbi5leGFtcGxlLWgyIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgY29sb3I6ICMzMDM3QTQ7XG4gICAgZm9udC1mYW1pbHk6XCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbi5leGFtcGxlLWJ1dHRvbi1yb3cge1xuICBtYXJnaW46IDI1cHg7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5leGFtcGxlLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZy1sZWZ0OiA5cHg7XG59XG4uYW1lbml0aWVzLWV4YW1wbGUtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDlweDtcbiAgbWFyZ2luOiA1cHg7XG59XG4uZXhhbXBsZS1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cbiIsIi5vdXRzaWRlLWNoaXAge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1zbGlkZXIubWF0LXNsaWRlci5tYXQtYWNjZW50Lm1hdC1zbGlkZXItaG9yaXpvbnRhbC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubWF0LWFjY2VudC5tYXQtc2xpZGVyLXRodW1iLCAubWF0LWFjY2VudC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLCAubWF0LWFjY2VudC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzN0E0ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmNoaXBhYmxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5leGFtcGxlLWgyIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBjb2xvcjogIzMwMzdBNDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5leGFtcGxlLWJ1dHRvbi1yb3cge1xuICBtYXJnaW46IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZy1sZWZ0OiA5cHg7XG59XG5cbi5hbWVuaXRpZXMtZXhhbXBsZS1zZWN0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmctbGVmdDogOXB4O1xuICBtYXJnaW46IDVweDtcbn1cblxuLmV4YW1wbGUtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Tab3Page = /** @class */ (function () {
    function Tab3Page() {
    }
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map