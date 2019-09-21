(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/@angular/cdk/esm5/accordion.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/accordion.es5.js ***!
  \*********************************************************/
/*! exports provided: CdkAccordionItem, CdkAccordion, CdkAccordionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordionItem", function() { return CdkAccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordion", function() { return CdkAccordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAccordionModule", function() { return CdkAccordionModule; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
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
 * Used to generate unique ID for each accordion.
 * @type {?}
 */
var nextId = 0;
/**
 * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
 */
var CdkAccordion = /** @class */ (function () {
    function CdkAccordion() {
        /**
         * Emits when the state of the accordion changes
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Stream that emits true/false when openAll/closeAll is triggered.
         */
        this._openCloseAllActions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * A readonly id value to use for unique selection coordination.
         */
        this.id = "cdk-accordion-" + nextId++;
        this._multi = false;
    }
    Object.defineProperty(CdkAccordion.prototype, "multi", {
        /** Whether the accordion should allow multiple expanded accordion items simultaneously. */
        get: /**
         * Whether the accordion should allow multiple expanded accordion items simultaneously.
         * @return {?}
         */
        function () { return this._multi; },
        set: /**
         * @param {?} multi
         * @return {?}
         */
        function (multi) { this._multi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(multi); },
        enumerable: true,
        configurable: true
    });
    /** Opens all enabled accordion items in an accordion where multi is enabled. */
    /**
     * Opens all enabled accordion items in an accordion where multi is enabled.
     * @return {?}
     */
    CdkAccordion.prototype.openAll = /**
     * Opens all enabled accordion items in an accordion where multi is enabled.
     * @return {?}
     */
    function () {
        this._openCloseAll(true);
    };
    /** Closes all enabled accordion items in an accordion where multi is enabled. */
    /**
     * Closes all enabled accordion items in an accordion where multi is enabled.
     * @return {?}
     */
    CdkAccordion.prototype.closeAll = /**
     * Closes all enabled accordion items in an accordion where multi is enabled.
     * @return {?}
     */
    function () {
        this._openCloseAll(false);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CdkAccordion.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this._stateChanges.next(changes);
    };
    /**
     * @return {?}
     */
    CdkAccordion.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._stateChanges.complete();
    };
    /**
     * @private
     * @param {?} expanded
     * @return {?}
     */
    CdkAccordion.prototype._openCloseAll = /**
     * @private
     * @param {?} expanded
     * @return {?}
     */
    function (expanded) {
        if (this.multi) {
            this._openCloseAllActions.next(expanded);
        }
    };
    CdkAccordion.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'cdk-accordion, [cdkAccordion]',
                    exportAs: 'cdkAccordion',
                },] },
    ];
    CdkAccordion.propDecorators = {
        multi: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return CdkAccordion;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used to generate unique ID for each accordion item.
 * @type {?}
 */
var nextId$1 = 0;
var ɵ0 = undefined;
/**
 * An basic directive expected to be extended and decorated as a component.  Sets up all
 * events and attributes needed to be managed by a CdkAccordion parent.
 */
var CdkAccordionItem = /** @class */ (function () {
    function CdkAccordionItem(accordion, _changeDetectorRef, _expansionDispatcher) {
        var _this = this;
        this.accordion = accordion;
        this._changeDetectorRef = _changeDetectorRef;
        this._expansionDispatcher = _expansionDispatcher;
        /**
         * Subscription to openAll/closeAll events.
         */
        this._openCloseAllSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Event emitted every time the AccordionItem is closed.
         */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event emitted every time the AccordionItem is opened.
         */
        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Event emitted when the AccordionItem is destroyed.
         */
        this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits whenever the expanded state of the accordion changes.
         * Primarily used to facilitate two-way binding.
         * \@docs-private
         */
        this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The unique AccordionItem id.
         */
        this.id = "cdk-accordion-child-" + nextId$1++;
        this._expanded = false;
        this._disabled = false;
        /**
         * Unregister function for _expansionDispatcher.
         */
        this._removeUniqueSelectionListener = (/**
         * @return {?}
         */
        function () { });
        this._removeUniqueSelectionListener =
            _expansionDispatcher.listen((/**
             * @param {?} id
             * @param {?} accordionId
             * @return {?}
             */
            function (id, accordionId) {
                if (_this.accordion && !_this.accordion.multi &&
                    _this.accordion.id === accordionId && _this.id !== id) {
                    _this.expanded = false;
                }
            }));
        // When an accordion item is hosted in an accordion, subscribe to open/close events.
        if (this.accordion) {
            this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
        }
    }
    Object.defineProperty(CdkAccordionItem.prototype, "expanded", {
        /** Whether the AccordionItem is expanded. */
        get: /**
         * Whether the AccordionItem is expanded.
         * @return {?}
         */
        function () { return this._expanded; },
        set: /**
         * @param {?} expanded
         * @return {?}
         */
        function (expanded) {
            expanded = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(expanded);
            // Only emit events and update the internal value if the value changes.
            if (this._expanded !== expanded) {
                this._expanded = expanded;
                this.expandedChange.emit(expanded);
                if (expanded) {
                    this.opened.emit();
                    /**
                     * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
                     * the name value is the id of the accordion.
                     * @type {?}
                     */
                    var accordionId = this.accordion ? this.accordion.id : this.id;
                    this._expansionDispatcher.notify(this.id, accordionId);
                }
                else {
                    this.closed.emit();
                }
                // Ensures that the animation will run when the value is set outside of an `@Input`.
                // This includes cases like the open, close and toggle methods.
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkAccordionItem.prototype, "disabled", {
        /** Whether the AccordionItem is disabled. */
        get: /**
         * Whether the AccordionItem is disabled.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(disabled); },
        enumerable: true,
        configurable: true
    });
    /** Emits an event for the accordion item being destroyed. */
    /**
     * Emits an event for the accordion item being destroyed.
     * @return {?}
     */
    CdkAccordionItem.prototype.ngOnDestroy = /**
     * Emits an event for the accordion item being destroyed.
     * @return {?}
     */
    function () {
        this.opened.complete();
        this.closed.complete();
        this.destroyed.emit();
        this.destroyed.complete();
        this._removeUniqueSelectionListener();
        this._openCloseAllSubscription.unsubscribe();
    };
    /** Toggles the expanded state of the accordion item. */
    /**
     * Toggles the expanded state of the accordion item.
     * @return {?}
     */
    CdkAccordionItem.prototype.toggle = /**
     * Toggles the expanded state of the accordion item.
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.expanded = !this.expanded;
        }
    };
    /** Sets the expanded state of the accordion item to false. */
    /**
     * Sets the expanded state of the accordion item to false.
     * @return {?}
     */
    CdkAccordionItem.prototype.close = /**
     * Sets the expanded state of the accordion item to false.
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.expanded = false;
        }
    };
    /** Sets the expanded state of the accordion item to true. */
    /**
     * Sets the expanded state of the accordion item to true.
     * @return {?}
     */
    CdkAccordionItem.prototype.open = /**
     * Sets the expanded state of the accordion item to true.
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.expanded = true;
        }
    };
    /**
     * @private
     * @return {?}
     */
    CdkAccordionItem.prototype._subscribeToOpenCloseAllActions = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return this.accordion._openCloseAllActions.subscribe((/**
         * @param {?} expanded
         * @return {?}
         */
        function (expanded) {
            // Only change expanded state if item is enabled
            if (!_this.disabled) {
                _this.expanded = expanded;
            }
        }));
    };
    CdkAccordionItem.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'cdk-accordion-item, [cdkAccordionItem]',
                    exportAs: 'cdkAccordionItem',
                    providers: [
                        // Provide CdkAccordion as undefined to prevent nested accordion items from registering
                        // to the same accordion.
                        { provide: CdkAccordion, useValue: ɵ0 },
                    ],
                },] },
    ];
    /** @nocollapse */
    CdkAccordionItem.ctorParameters = function () { return [
        { type: CdkAccordion, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["UniqueSelectionDispatcher"] }
    ]; };
    CdkAccordionItem.propDecorators = {
        closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        destroyed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        expandedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return CdkAccordionItem;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CdkAccordionModule = /** @class */ (function () {
    function CdkAccordionModule() {
    }
    CdkAccordionModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    exports: [CdkAccordion, CdkAccordionItem],
                    declarations: [CdkAccordion, CdkAccordionItem],
                },] },
    ];
    return CdkAccordionModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=accordion.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/portal.es5.js":
/*!******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/portal.es5.js ***!
  \******************************************************/
/*! exports provided: DomPortalHost, PortalHostDirective, TemplatePortalDirective, BasePortalHost, Portal, ComponentPortal, TemplatePortal, BasePortalOutlet, DomPortalOutlet, CdkPortal, CdkPortalOutlet, PortalModule, PortalInjector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomPortalHost", function() { return DomPortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalHostDirective", function() { return CdkPortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePortalDirective", function() { return CdkPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePortalHost", function() { return BasePortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return Portal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentPortal", function() { return ComponentPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePortal", function() { return TemplatePortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePortalOutlet", function() { return BasePortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomPortalOutlet", function() { return DomPortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkPortal", function() { return CdkPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkPortalOutlet", function() { return CdkPortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalModule", function() { return PortalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalInjector", function() { return PortalInjector; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
 * Throws an exception when attempting to attach a null portal to a host.
 * \@docs-private
 * @return {?}
 */
function throwNullPortalError() {
    throw Error('Must provide a portal to attach');
}
/**
 * Throws an exception when attempting to attach a portal to a host that is already attached.
 * \@docs-private
 * @return {?}
 */
function throwPortalAlreadyAttachedError() {
    throw Error('Host already has a portal attached');
}
/**
 * Throws an exception when attempting to attach a portal to an already-disposed host.
 * \@docs-private
 * @return {?}
 */
function throwPortalOutletAlreadyDisposedError() {
    throw Error('This PortalOutlet has already been disposed');
}
/**
 * Throws an exception when attempting to attach an unknown portal type.
 * \@docs-private
 * @return {?}
 */
function throwUnknownPortalTypeError() {
    throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' +
        'a ComponentPortal or a TemplatePortal.');
}
/**
 * Throws an exception when attempting to attach a portal to a null host.
 * \@docs-private
 * @return {?}
 */
function throwNullPortalOutletError() {
    throw Error('Attempting to attach a portal to a null PortalOutlet');
}
/**
 * Throws an exception when attempting to detach a portal that is not attached.
 * \@docs-private
 * @return {?}
 */
function throwNoPortalAttachedError() {
    throw Error('Attempting to detach a portal that is not attached to a host');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalOutlet`.
 * @abstract
 * @template T
 */
var  /**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalOutlet`.
 * @abstract
 * @template T
 */
Portal = /** @class */ (function () {
    function Portal() {
    }
    /** Attach this portal to a host. */
    /**
     * Attach this portal to a host.
     * @param {?} host
     * @return {?}
     */
    Portal.prototype.attach = /**
     * Attach this portal to a host.
     * @param {?} host
     * @return {?}
     */
    function (host) {
        if (host == null) {
            throwNullPortalOutletError();
        }
        if (host.hasAttached()) {
            throwPortalAlreadyAttachedError();
        }
        this._attachedHost = host;
        return (/** @type {?} */ (host.attach(this)));
    };
    /** Detach this portal from its host */
    /**
     * Detach this portal from its host
     * @return {?}
     */
    Portal.prototype.detach = /**
     * Detach this portal from its host
     * @return {?}
     */
    function () {
        /** @type {?} */
        var host = this._attachedHost;
        if (host == null) {
            throwNoPortalAttachedError();
        }
        else {
            this._attachedHost = null;
            host.detach();
        }
    };
    Object.defineProperty(Portal.prototype, "isAttached", {
        /** Whether this portal is attached to a host. */
        get: /**
         * Whether this portal is attached to a host.
         * @return {?}
         */
        function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     */
    /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    Portal.prototype.setAttachedHost = /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    function (host) {
        this._attachedHost = host;
    };
    return Portal;
}());
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
var  /**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
ComponentPortal = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ComponentPortal, _super);
    function ComponentPortal(component, viewContainerRef, injector, componentFactoryResolver) {
        var _this = _super.call(this) || this;
        _this.component = component;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        _this.componentFactoryResolver = componentFactoryResolver;
        return _this;
    }
    return ComponentPortal;
}(Portal));
/**
 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
 * @template C
 */
var  /**
 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
 * @template C
 */
TemplatePortal = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TemplatePortal, _super);
    function TemplatePortal(template, viewContainerRef, context) {
        var _this = _super.call(this) || this;
        _this.templateRef = template;
        _this.viewContainerRef = viewContainerRef;
        _this.context = context;
        return _this;
    }
    Object.defineProperty(TemplatePortal.prototype, "origin", {
        get: /**
         * @return {?}
         */
        function () {
            return this.templateRef.elementRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Attach the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     */
    /**
     * Attach the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     * @param {?} host
     * @param {?=} context
     * @return {?}
     */
    TemplatePortal.prototype.attach = /**
     * Attach the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     * @param {?} host
     * @param {?=} context
     * @return {?}
     */
    function (host, context) {
        if (context === void 0) { context = this.context; }
        this.context = context;
        return _super.prototype.attach.call(this, host);
    };
    /**
     * @return {?}
     */
    TemplatePortal.prototype.detach = /**
     * @return {?}
     */
    function () {
        this.context = undefined;
        return _super.prototype.detach.call(this);
    };
    return TemplatePortal;
}(Portal));
/**
 * Partial implementation of PortalOutlet that handles attaching
 * ComponentPortal and TemplatePortal.
 * @abstract
 */
var  /**
 * Partial implementation of PortalOutlet that handles attaching
 * ComponentPortal and TemplatePortal.
 * @abstract
 */
BasePortalOutlet = /** @class */ (function () {
    function BasePortalOutlet() {
        /**
         * Whether this host has already been permanently disposed.
         */
        this._isDisposed = false;
    }
    /** Whether this host has an attached portal. */
    /**
     * Whether this host has an attached portal.
     * @return {?}
     */
    BasePortalOutlet.prototype.hasAttached = /**
     * Whether this host has an attached portal.
     * @return {?}
     */
    function () {
        return !!this._attachedPortal;
    };
    /** Attaches a portal. */
    /**
     * Attaches a portal.
     * @param {?} portal
     * @return {?}
     */
    BasePortalOutlet.prototype.attach = /**
     * Attaches a portal.
     * @param {?} portal
     * @return {?}
     */
    function (portal) {
        if (!portal) {
            throwNullPortalError();
        }
        if (this.hasAttached()) {
            throwPortalAlreadyAttachedError();
        }
        if (this._isDisposed) {
            throwPortalOutletAlreadyDisposedError();
        }
        if (portal instanceof ComponentPortal) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal);
        }
        else if (portal instanceof TemplatePortal) {
            this._attachedPortal = portal;
            return this.attachTemplatePortal(portal);
        }
        throwUnknownPortalTypeError();
    };
    /** Detaches a previously attached portal. */
    /**
     * Detaches a previously attached portal.
     * @return {?}
     */
    BasePortalOutlet.prototype.detach = /**
     * Detaches a previously attached portal.
     * @return {?}
     */
    function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
            this._attachedPortal = null;
        }
        this._invokeDisposeFn();
    };
    /** Permanently dispose of this portal host. */
    /**
     * Permanently dispose of this portal host.
     * @return {?}
     */
    BasePortalOutlet.prototype.dispose = /**
     * Permanently dispose of this portal host.
     * @return {?}
     */
    function () {
        if (this.hasAttached()) {
            this.detach();
        }
        this._invokeDisposeFn();
        this._isDisposed = true;
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    BasePortalOutlet.prototype.setDisposeFn = /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._disposeFn = fn;
    };
    /**
     * @private
     * @return {?}
     */
    BasePortalOutlet.prototype._invokeDisposeFn = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._disposeFn) {
            this._disposeFn();
            this._disposeFn = null;
        }
    };
    return BasePortalOutlet;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 */
var  /**
 * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 */
DomPortalOutlet = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DomPortalOutlet, _super);
    function DomPortalOutlet(outletElement, _componentFactoryResolver, _appRef, _defaultInjector) {
        var _this = _super.call(this) || this;
        _this.outletElement = outletElement;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._appRef = _appRef;
        _this._defaultInjector = _defaultInjector;
        return _this;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     * @returns Reference to the created component.
     */
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @return {?} Reference to the created component.
     */
    DomPortalOutlet.prototype.attachComponentPortal = /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @return {?} Reference to the created component.
     */
    function (portal) {
        var _this = this;
        /** @type {?} */
        var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
        /** @type {?} */
        var componentFactory = resolver.resolveComponentFactory(portal.component);
        /** @type {?} */
        var componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the view to the application.
        if (portal.viewContainerRef) {
            componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector);
            this.setDisposeFn((/**
             * @return {?}
             */
            function () { return componentRef.destroy(); }));
        }
        else {
            componentRef = componentFactory.create(portal.injector || this._defaultInjector);
            this._appRef.attachView(componentRef.hostView);
            this.setDisposeFn((/**
             * @return {?}
             */
            function () {
                _this._appRef.detachView(componentRef.hostView);
                componentRef.destroy();
            }));
        }
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        this.outletElement.appendChild(this._getComponentRootNode(componentRef));
        return componentRef;
    };
    /**
     * Attaches a template portal to the DOM as an embedded view.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    /**
     * Attaches a template portal to the DOM as an embedded view.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    DomPortalOutlet.prototype.attachTemplatePortal = /**
     * Attaches a template portal to the DOM as an embedded view.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    function (portal) {
        var _this = this;
        /** @type {?} */
        var viewContainer = portal.viewContainerRef;
        /** @type {?} */
        var viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context);
        viewRef.detectChanges();
        // The method `createEmbeddedView` will add the view as a child of the viewContainer.
        // But for the DomPortalOutlet the view can be added everywhere in the DOM
        // (e.g Overlay Container) To move the view to the specified host element. We just
        // re-append the existing root nodes.
        viewRef.rootNodes.forEach((/**
         * @param {?} rootNode
         * @return {?}
         */
        function (rootNode) { return _this.outletElement.appendChild(rootNode); }));
        this.setDisposeFn(((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var index = viewContainer.indexOf(viewRef);
            if (index !== -1) {
                viewContainer.remove(index);
            }
        })));
        // TODO(jelbourn): Return locals from view.
        return viewRef;
    };
    /**
     * Clears out a portal from the DOM.
     */
    /**
     * Clears out a portal from the DOM.
     * @return {?}
     */
    DomPortalOutlet.prototype.dispose = /**
     * Clears out a portal from the DOM.
     * @return {?}
     */
    function () {
        _super.prototype.dispose.call(this);
        if (this.outletElement.parentNode != null) {
            this.outletElement.parentNode.removeChild(this.outletElement);
        }
    };
    /** Gets the root HTMLElement for an instantiated component. */
    /**
     * Gets the root HTMLElement for an instantiated component.
     * @private
     * @param {?} componentRef
     * @return {?}
     */
    DomPortalOutlet.prototype._getComponentRootNode = /**
     * Gets the root HTMLElement for an instantiated component.
     * @private
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        return (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView))).rootNodes[0]));
    };
    return DomPortalOutlet;
}(BasePortalOutlet));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
 * the directive instance itself can be attached to a host, enabling declarative use of portals.
 */
var CdkPortal = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkPortal, _super);
    function CdkPortal(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    CdkPortal.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdk-portal], [cdkPortal], [portal]',
                    exportAs: 'cdkPortal',
                },] },
    ];
    /** @nocollapse */
    CdkPortal.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
    ]; };
    return CdkPortal;
}(TemplatePortal));
/**
 * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
 * directly attached to it, enabling declarative use.
 *
 * Usage:
 * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
 */
var CdkPortalOutlet = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkPortalOutlet, _super);
    function CdkPortalOutlet(_componentFactoryResolver, _viewContainerRef) {
        var _this = _super.call(this) || this;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._viewContainerRef = _viewContainerRef;
        /**
         * Whether the portal component is initialized.
         */
        _this._isInitialized = false;
        /**
         * Emits when a portal is attached to the outlet.
         */
        _this.attached = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    Object.defineProperty(CdkPortalOutlet.prototype, "portal", {
        /** Portal associated with the Portal outlet. */
        get: /**
         * Portal associated with the Portal outlet.
         * @return {?}
         */
        function () {
            return this._attachedPortal;
        },
        set: /**
         * @param {?} portal
         * @return {?}
         */
        function (portal) {
            // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
            // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
            // and attach a portal programmatically in the parent component. When Angular does the first CD
            // round, it will fire the setter with empty string, causing the user's content to be cleared.
            if (this.hasAttached() && !portal && !this._isInitialized) {
                return;
            }
            if (this.hasAttached()) {
                _super.prototype.detach.call(this);
            }
            if (portal) {
                _super.prototype.attach.call(this, portal);
            }
            this._attachedPortal = portal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkPortalOutlet.prototype, "attachedRef", {
        /** Component or view reference that is attached to the portal. */
        get: /**
         * Component or view reference that is attached to the portal.
         * @return {?}
         */
        function () {
            return this._attachedRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkPortalOutlet.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._isInitialized = true;
    };
    /**
     * @return {?}
     */
    CdkPortalOutlet.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.dispose.call(this);
        this._attachedPortal = null;
        this._attachedRef = null;
    };
    /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @param portal Portal to be attached to the portal outlet.
     * @returns Reference to the created component.
     */
    /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @template T
     * @param {?} portal Portal to be attached to the portal outlet.
     * @return {?} Reference to the created component.
     */
    CdkPortalOutlet.prototype.attachComponentPortal = /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @template T
     * @param {?} portal Portal to be attached to the portal outlet.
     * @return {?} Reference to the created component.
     */
    function (portal) {
        portal.setAttachedHost(this);
        // If the portal specifies an origin, use that as the logical location of the component
        // in the application tree. Otherwise use the location of this PortalOutlet.
        /** @type {?} */
        var viewContainerRef = portal.viewContainerRef != null ?
            portal.viewContainerRef :
            this._viewContainerRef;
        /** @type {?} */
        var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
        /** @type {?} */
        var componentFactory = resolver.resolveComponentFactory(portal.component);
        /** @type {?} */
        var ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector);
        _super.prototype.setDisposeFn.call(this, (/**
         * @return {?}
         */
        function () { return ref.destroy(); }));
        this._attachedPortal = portal;
        this._attachedRef = ref;
        this.attached.emit(ref);
        return ref;
    };
    /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    CdkPortalOutlet.prototype.attachTemplatePortal = /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    function (portal) {
        var _this = this;
        portal.setAttachedHost(this);
        /** @type {?} */
        var viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);
        _super.prototype.setDisposeFn.call(this, (/**
         * @return {?}
         */
        function () { return _this._viewContainerRef.clear(); }));
        this._attachedPortal = portal;
        this._attachedRef = viewRef;
        this.attached.emit(viewRef);
        return viewRef;
    };
    CdkPortalOutlet.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdkPortalOutlet], [cdkPortalHost], [portalHost]',
                    exportAs: 'cdkPortalOutlet, cdkPortalHost',
                    inputs: ['portal: cdkPortalOutlet']
                },] },
    ];
    /** @nocollapse */
    CdkPortalOutlet.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
    ]; };
    CdkPortalOutlet.propDecorators = {
        attached: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return CdkPortalOutlet;
}(BasePortalOutlet));
var PortalModule = /** @class */ (function () {
    function PortalModule() {
    }
    PortalModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    exports: [CdkPortal, CdkPortalOutlet],
                    declarations: [CdkPortal, CdkPortalOutlet],
                },] },
    ];
    return PortalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Custom injector to be used when providing custom
 * injection tokens to components inside a portal.
 * \@docs-private
 */
var  /**
 * Custom injector to be used when providing custom
 * injection tokens to components inside a portal.
 * \@docs-private
 */
PortalInjector = /** @class */ (function () {
    function PortalInjector(_parentInjector, _customTokens) {
        this._parentInjector = _parentInjector;
        this._customTokens = _customTokens;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    PortalInjector.prototype.get = /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    function (token, notFoundValue) {
        /** @type {?} */
        var value = this._customTokens.get(token);
        if (typeof value !== 'undefined') {
            return value;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return PortalInjector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=portal.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/expansion.es5.js":
/*!**************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/expansion.es5.js ***!
  \**************************************************************/
/*! exports provided: MatExpansionModule, MatAccordion, MAT_ACCORDION, MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelDescription, MatExpansionPanelTitle, MatExpansionPanelContent, EXPANSION_PANEL_ANIMATION_TIMING, matExpansionAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionModule", function() { return MatExpansionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatAccordion", function() { return MatAccordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ACCORDION", function() { return MAT_ACCORDION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_EXPANSION_PANEL_DEFAULT_OPTIONS", function() { return MAT_EXPANSION_PANEL_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanel", function() { return MatExpansionPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelActionRow", function() { return MatExpansionPanelActionRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelHeader", function() { return MatExpansionPanelHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelDescription", function() { return MatExpansionPanelDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelTitle", function() { return MatExpansionPanelTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatExpansionPanelContent", function() { return MatExpansionPanelContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPANSION_PANEL_ANIMATION_TIMING", function() { return EXPANSION_PANEL_ANIMATION_TIMING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matExpansionAnimations", function() { return matExpansionAnimations; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/esm5/accordion.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
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
 * Token used to provide a `MatAccordion` to `MatExpansionPanel`.
 * Used primarily to avoid circular imports between `MatAccordion` and `MatExpansionPanel`.
 * @type {?}
 */
var MAT_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_ACCORDION');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Time and timing curve for expansion panel animations.
 * @type {?}
 */
var EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
/**
 * Animations used by the Material expansion panel.
 *
 * A bug in angular animation's `state` when ViewContainers are moved using ViewContainerRef.move()
 * causes the animation state of moved components to become `void` upon exit, and not update again
 * upon reentry into the DOM.  This can lead a to situation for the expansion panel where the state
 * of the panel is `expanded` or `collapsed` but the animation state is `void`.
 *
 * To correctly handle animating to the next state, we animate between `void` and `collapsed` which
 * are defined to have the same styles. Since angular animates from the current styles to the
 * destination state's style definition, in situations where we are moving from `void`'s styles to
 * `collapsed` this acts a noop since no style values change.
 *
 * In the case where angular's animation state is out of sync with the expansion panel's state, the
 * expansion panel being `expanded` and angular animations being `void`, the animation from the
 * `expanded`'s effective styles (though in a `void` animation state) to the collapsed state will
 * occur as expected.
 *
 * Angular Bug: https://github.com/angular/angular/issues/18847
 *
 * \@docs-private
 * @type {?}
 */
var matExpansionAnimations = {
    /**
     * Animation that rotates the indicator arrow.
     */
    indicatorRotate: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('indicatorRotate', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate(0deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate(180deg)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING)),
    ]),
    /**
     * Animation that expands and collapses the panel header height.
     */
    expansionHeaderHeight: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('expansionHeight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '{{collapsedHeight}}',
        }), {
            params: { collapsedHeight: '48px' },
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '{{expandedHeight}}'
        }), {
            params: { expandedHeight: '64px' }
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@indicatorRotate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])(), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING),
        ])),
    ]),
    /**
     * Animation that expands and collapses the panel content.
     */
    bodyExpansion: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('bodyExpansion', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px', visibility: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*', visibility: 'visible' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed, void => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(EXPANSION_PANEL_ANIMATION_TIMING)),
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Expansion panel content that will be rendered lazily
 * after the panel is opened for the first time.
 */
var MatExpansionPanelContent = /** @class */ (function () {
    function MatExpansionPanelContent(_template) {
        this._template = _template;
    }
    MatExpansionPanelContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'ng-template[matExpansionPanelContent]'
                },] },
    ];
    /** @nocollapse */
    MatExpansionPanelContent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return MatExpansionPanelContent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter for generating unique element ids.
 * @type {?}
 */
var uniqueId = 0;
/**
 * Injection token that can be used to configure the defalt
 * options for the expansion panel component.
 * @type {?}
 */
var MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_EXPANSION_PANEL_DEFAULT_OPTIONS');
var ɵ0 = undefined;
/**
 * `<mat-expansion-panel>`
 *
 * This component can be used as a single element to show expandable content, or as one of
 * multiple children of an element with the MatAccordion directive attached.
 */
var MatExpansionPanel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(MatExpansionPanel, _super);
    function MatExpansionPanel(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, _document, _animationMode, defaultOptions) {
        var _this = _super.call(this, accordion, _changeDetectorRef, _uniqueSelectionDispatcher) || this;
        _this._viewContainerRef = _viewContainerRef;
        _this._animationMode = _animationMode;
        _this._hideToggle = false;
        /**
         * An event emitted after the body's expansion animation happens.
         */
        _this.afterExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An event emitted after the body's collapse animation happens.
         */
        _this.afterCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Stream that emits for changes in `\@Input` properties.
         */
        _this._inputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /**
         * ID for the associated header element. Used for a11y labelling.
         */
        _this._headerId = "mat-expansion-panel-header-" + uniqueId++;
        /**
         * Stream of body animation done events.
         */
        _this._bodyAnimationDone = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        _this.accordion = accordion;
        _this._document = _document;
        // We need a Subject with distinctUntilChanged, because the `done` event
        // fires twice on some browsers. See https://github.com/angular/angular/issues/24084
        _this._bodyAnimationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])((/**
         * @param {?} x
         * @param {?} y
         * @return {?}
         */
        function (x, y) {
            return x.fromState === y.fromState && x.toState === y.toState;
        }))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.fromState !== 'void') {
                if (event.toState === 'expanded') {
                    _this.afterExpand.emit();
                }
                else if (event.toState === 'collapsed') {
                    _this.afterCollapse.emit();
                }
            }
        }));
        if (defaultOptions) {
            _this.hideToggle = defaultOptions.hideToggle;
        }
        return _this;
    }
    Object.defineProperty(MatExpansionPanel.prototype, "hideToggle", {
        /** Whether the toggle indicator should be hidden. */
        get: /**
         * Whether the toggle indicator should be hidden.
         * @return {?}
         */
        function () {
            return this._hideToggle || (this.accordion && this.accordion.hideToggle);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatExpansionPanel.prototype, "togglePosition", {
        /** The position of the expansion indicator. */
        get: /**
         * The position of the expansion indicator.
         * @return {?}
         */
        function () {
            return this._togglePosition || (this.accordion && this.accordion.togglePosition);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._togglePosition = value;
        },
        enumerable: true,
        configurable: true
    });
    /** Determines whether the expansion panel should have spacing between it and its siblings. */
    /**
     * Determines whether the expansion panel should have spacing between it and its siblings.
     * @return {?}
     */
    MatExpansionPanel.prototype._hasSpacing = /**
     * Determines whether the expansion panel should have spacing between it and its siblings.
     * @return {?}
     */
    function () {
        if (this.accordion) {
            // We don't need to subscribe to the `stateChanges` of the parent accordion because each time
            // the [displayMode] input changes, the change detection will also cover the host bindings
            // of this expansion panel.
            return (this.expanded ? this.accordion.displayMode : this._getExpandedState()) === 'default';
        }
        return false;
    };
    /** Gets the expanded state string. */
    /**
     * Gets the expanded state string.
     * @return {?}
     */
    MatExpansionPanel.prototype._getExpandedState = /**
     * Gets the expanded state string.
     * @return {?}
     */
    function () {
        return this.expanded ? 'expanded' : 'collapsed';
    };
    /**
     * @return {?}
     */
    MatExpansionPanel.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._lazyContent) {
            // Render the content as soon as the panel becomes open.
            this.opened.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])((/** @type {?} */ (null))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])((/**
             * @return {?}
             */
            function () { return _this.expanded && !_this._portal; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe((/**
             * @return {?}
             */
            function () {
                _this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["TemplatePortal"](_this._lazyContent._template, _this._viewContainerRef);
            }));
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MatExpansionPanel.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this._inputChanges.next(changes);
    };
    /**
     * @return {?}
     */
    MatExpansionPanel.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        this._bodyAnimationDone.complete();
        this._inputChanges.complete();
    };
    /** Checks whether the expansion panel's content contains the currently-focused element. */
    /**
     * Checks whether the expansion panel's content contains the currently-focused element.
     * @return {?}
     */
    MatExpansionPanel.prototype._containsFocus = /**
     * Checks whether the expansion panel's content contains the currently-focused element.
     * @return {?}
     */
    function () {
        if (this._body) {
            /** @type {?} */
            var focusedElement = this._document.activeElement;
            /** @type {?} */
            var bodyElement = this._body.nativeElement;
            return focusedElement === bodyElement || bodyElement.contains(focusedElement);
        }
        return false;
    };
    MatExpansionPanel.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(.4,0,.2,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}@media (-ms-high-contrast:active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel._mat-animation-noopable,.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button{margin-left:0;margin-right:8px}"],
                    selector: 'mat-expansion-panel',
                    exportAs: 'matExpansionPanel',
                    template: "<ng-content select=\"mat-expansion-panel-header\"></ng-content><div class=\"mat-expansion-panel-content\" role=\"region\" [@bodyExpansion]=\"_getExpandedState()\" (@bodyExpansion.done)=\"_bodyAnimationDone.next($event)\" [attr.aria-labelledby]=\"_headerId\" [id]=\"id\" #body><div class=\"mat-expansion-panel-body\"><ng-content></ng-content><ng-template [cdkPortalOutlet]=\"_portal\"></ng-template></div><ng-content select=\"mat-action-row\"></ng-content></div>",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    inputs: ['disabled', 'expanded'],
                    outputs: ['opened', 'closed', 'expandedChange'],
                    animations: [matExpansionAnimations.bodyExpansion],
                    providers: [
                        // Provide MatAccordion as undefined to prevent nested expansion panels from registering
                        // to the same accordion.
                        { provide: MAT_ACCORDION, useValue: ɵ0 },
                    ],
                    host: {
                        'class': 'mat-expansion-panel',
                        '[class.mat-expanded]': 'expanded',
                        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
                        '[class.mat-expansion-panel-spacing]': '_hasSpacing()',
                    }
                },] },
    ];
    /** @nocollapse */
    MatExpansionPanel.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_ACCORDION,] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["UniqueSelectionDispatcher"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"],] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    MatExpansionPanel.propDecorators = {
        hideToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        togglePosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        afterExpand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        afterCollapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        _lazyContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatExpansionPanelContent, { static: false },] }],
        _body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['body', { static: false },] }]
    };
    return MatExpansionPanel;
}(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__["CdkAccordionItem"]));
var MatExpansionPanelActionRow = /** @class */ (function () {
    function MatExpansionPanelActionRow() {
    }
    MatExpansionPanelActionRow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'mat-action-row',
                    host: {
                        class: 'mat-action-row'
                    }
                },] },
    ];
    return MatExpansionPanelActionRow;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * `<mat-expansion-panel-header>`
 *
 * This component corresponds to the header element of an `<mat-expansion-panel>`.
 */
var MatExpansionPanelHeader = /** @class */ (function () {
    function MatExpansionPanelHeader(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions) {
        var _this = this;
        this.panel = panel;
        this._element = _element;
        this._focusMonitor = _focusMonitor;
        this._changeDetectorRef = _changeDetectorRef;
        this._parentChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        /**
         * Whether Angular animations in the panel header should be disabled.
         */
        this._animationsDisabled = true;
        /** @type {?} */
        var accordionHideToggleChange = panel.accordion ?
            panel.accordion._stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])((/**
             * @param {?} changes
             * @return {?}
             */
            function (changes) { return !!(changes['hideToggle'] || changes['togglePosition']); }))) :
            rxjs__WEBPACK_IMPORTED_MODULE_9__["EMPTY"];
        // Since the toggle state depends on an @Input on the panel, we
        // need to subscribe and trigger change detection manually.
        this._parentChangeSubscription =
            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])((/**
             * @param {?} changes
             * @return {?}
             */
            function (changes) {
                return !!(changes['hideToggle'] ||
                    changes['disabled'] ||
                    changes['togglePosition']);
            }))))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this._changeDetectorRef.markForCheck(); }));
        // Avoids focus being lost if the panel contained the focused element and was closed.
        panel.closed
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])((/**
         * @return {?}
         */
        function () { return panel._containsFocus(); })))
            .subscribe((/**
         * @return {?}
         */
        function () { return _focusMonitor.focusVia(_element, 'program'); }));
        _focusMonitor.monitor(_element).subscribe((/**
         * @param {?} origin
         * @return {?}
         */
        function (origin) {
            if (origin && panel.accordion) {
                panel.accordion._handleHeaderFocus(_this);
            }
        }));
        if (defaultOptions) {
            this.expandedHeight = defaultOptions.expandedHeight;
            this.collapsedHeight = defaultOptions.collapsedHeight;
        }
    }
    /**
     * @return {?}
     */
    MatExpansionPanelHeader.prototype._animationStarted = /**
     * @return {?}
     */
    function () {
        // Currently the `expansionHeight` animation has a `void => collapsed` transition which is
        // there to work around a bug in Angular (see #13088), however this introduces a different
        // issue. The new transition will cause the header to animate in on init (see #16067), if the
        // consumer has set a header height that is different from the default one. We work around it
        // by disabling animations on the header and re-enabling them after the first animation has run.
        // Note that Angular dispatches animation events even if animations are disabled. Ideally this
        // wouldn't be necessary if we remove the `void => collapsed` transition, but we have to wait
        // for https://github.com/angular/angular/issues/18847 to be resolved.
        this._animationsDisabled = false;
    };
    Object.defineProperty(MatExpansionPanelHeader.prototype, "disabled", {
        /**
         * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
         * @docs-private
         */
        get: /**
         * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.panel.disabled;
        },
        enumerable: true,
        configurable: true
    });
    /** Toggles the expanded state of the panel. */
    /**
     * Toggles the expanded state of the panel.
     * @return {?}
     */
    MatExpansionPanelHeader.prototype._toggle = /**
     * Toggles the expanded state of the panel.
     * @return {?}
     */
    function () {
        this.panel.toggle();
    };
    /** Gets whether the panel is expanded. */
    /**
     * Gets whether the panel is expanded.
     * @return {?}
     */
    MatExpansionPanelHeader.prototype._isExpanded = /**
     * Gets whether the panel is expanded.
     * @return {?}
     */
    function () {
        return this.panel.expanded;
    };
    /** Gets the expanded state string of the panel. */
    /**
     * Gets the expanded state string of the panel.
     * @return {?}
     */
    MatExpansionPanelHeader.prototype._getExpandedState = /**
     * Gets the expanded state string of the panel.
     * @return {?}
     */
    function () {
        return this.panel._getExpandedState();
    };
    /** Gets the panel id. */
    /**
     * Gets the panel id.
     * @return {?}
     */
    MatExpansionPanelHeader.prototype._getPanelId = /**
     * Gets the panel id.
     * @return {?}
     */
    function () {
        return this.panel.id;
    };
    /** Gets the toggle position for the header. */
    /**
     * Gets the toggle position for the header.
     * @return {?}
     */
    MatExpansionPanelHeader.prototype._getTogglePosition = /**
     * Gets the toggle position for the header.
     * @return {?}
     */
    function () {
        return this.panel.togglePosition;
    };
    /** Gets whether the expand indicator should be shown. */
    /**
     * Gets whether the expand indicator should be shown.
     * @return {?}
     */
    MatExpansionPanelHeader.prototype._showToggle = /**
     * Gets whether the expand indicator should be shown.
     * @return {?}
     */
    function () {
        return !this.panel.hideToggle && !this.panel.disabled;
    };
    /** Handle keydown event calling to toggle() if appropriate. */
    /**
     * Handle keydown event calling to toggle() if appropriate.
     * @param {?} event
     * @return {?}
     */
    MatExpansionPanelHeader.prototype._keydown = /**
     * Handle keydown event calling to toggle() if appropriate.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        switch (event.keyCode) {
            // Toggle for space and enter keys.
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["SPACE"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["ENTER"]:
                if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["hasModifierKey"])(event)) {
                    event.preventDefault();
                    this._toggle();
                }
                break;
            default:
                if (this.panel.accordion) {
                    this.panel.accordion._handleHeaderKeydown(event);
                }
                return;
        }
    };
    /**
     * Focuses the panel header. Implemented as a part of `FocusableOption`.
     * @param origin Origin of the action that triggered the focus.
     * @docs-private
     */
    /**
     * Focuses the panel header. Implemented as a part of `FocusableOption`.
     * \@docs-private
     * @param {?=} origin Origin of the action that triggered the focus.
     * @param {?=} options
     * @return {?}
     */
    MatExpansionPanelHeader.prototype.focus = /**
     * Focuses the panel header. Implemented as a part of `FocusableOption`.
     * \@docs-private
     * @param {?=} origin Origin of the action that triggered the focus.
     * @param {?=} options
     * @return {?}
     */
    function (origin, options) {
        if (origin === void 0) { origin = 'program'; }
        this._focusMonitor.focusVia(this._element, origin, options);
    };
    /**
     * @return {?}
     */
    MatExpansionPanelHeader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._parentChangeSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._element);
    };
    MatExpansionPanelHeader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-expansion-panel-header',
                    styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:0}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-description,.mat-expansion-panel-header-title{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-description,[dir=rtl] .mat-expansion-panel-header-title{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:'';display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}"],
                    template: "<span class=\"mat-content\"><ng-content select=\"mat-panel-title\"></ng-content><ng-content select=\"mat-panel-description\"></ng-content><ng-content></ng-content></span><span [@indicatorRotate]=\"_getExpandedState()\" *ngIf=\"_showToggle()\" class=\"mat-expansion-indicator\"></span>",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    animations: [
                        matExpansionAnimations.indicatorRotate,
                        matExpansionAnimations.expansionHeaderHeight
                    ],
                    host: {
                        'class': 'mat-expansion-panel-header',
                        'role': 'button',
                        '[attr.id]': 'panel._headerId',
                        '[attr.tabindex]': 'disabled ? -1 : 0',
                        '[attr.aria-controls]': '_getPanelId()',
                        '[attr.aria-expanded]': '_isExpanded()',
                        '[attr.aria-disabled]': 'panel.disabled',
                        '[class.mat-expanded]': '_isExpanded()',
                        '[class.mat-expansion-toggle-indicator-after]': "_getTogglePosition() === 'after'",
                        '[class.mat-expansion-toggle-indicator-before]': "_getTogglePosition() === 'before'",
                        '(click)': '_toggle()',
                        '(keydown)': '_keydown($event)',
                        '[@.disabled]': '_animationsDisabled',
                        '(@expansionHeight.start)': '_animationStarted()',
                        '[@expansionHeight]': "{\n        value: _getExpandedState(),\n        params: {\n          collapsedHeight: collapsedHeight,\n          expandedHeight: expandedHeight\n        }\n    }",
                    },
                },] },
    ];
    /** @nocollapse */
    MatExpansionPanelHeader.ctorParameters = function () { return [
        { type: MatExpansionPanel, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    MatExpansionPanelHeader.propDecorators = {
        expandedHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        collapsedHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return MatExpansionPanelHeader;
}());
/**
 * `<mat-panel-description>`
 *
 * This directive is to be used inside of the MatExpansionPanelHeader component.
 */
var MatExpansionPanelDescription = /** @class */ (function () {
    function MatExpansionPanelDescription() {
    }
    MatExpansionPanelDescription.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'mat-panel-description',
                    host: {
                        class: 'mat-expansion-panel-header-description'
                    }
                },] },
    ];
    return MatExpansionPanelDescription;
}());
/**
 * `<mat-panel-title>`
 *
 * This directive is to be used inside of the MatExpansionPanelHeader component.
 */
var MatExpansionPanelTitle = /** @class */ (function () {
    function MatExpansionPanelTitle() {
    }
    MatExpansionPanelTitle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'mat-panel-title',
                    host: {
                        class: 'mat-expansion-panel-header-title'
                    }
                },] },
    ];
    return MatExpansionPanelTitle;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive for a Material Design Accordion.
 */
var MatAccordion = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(MatAccordion, _super);
    function MatAccordion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._hideToggle = false;
        /**
         * Display mode used for all expansion panels in the accordion. Currently two display
         * modes exist:
         *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
         *     panel at a different elevation from the rest of the accordion.
         *  flat - no spacing is placed around expanded panels, showing all panels at the same
         *     elevation.
         */
        _this.displayMode = 'default';
        /**
         * The position of the expansion indicator.
         */
        _this.togglePosition = 'after';
        return _this;
    }
    Object.defineProperty(MatAccordion.prototype, "hideToggle", {
        /** Whether the expansion indicator should be hidden. */
        get: /**
         * Whether the expansion indicator should be hidden.
         * @return {?}
         */
        function () { return this._hideToggle; },
        set: /**
         * @param {?} show
         * @return {?}
         */
        function (show) { this._hideToggle = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(show); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatAccordion.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusKeyManager"](this._headers).withWrap();
    };
    /** Handles keyboard events coming in from the panel headers. */
    /**
     * Handles keyboard events coming in from the panel headers.
     * @param {?} event
     * @return {?}
     */
    MatAccordion.prototype._handleHeaderKeydown = /**
     * Handles keyboard events coming in from the panel headers.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var keyCode = event.keyCode;
        /** @type {?} */
        var manager = this._keyManager;
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["HOME"]) {
            if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["hasModifierKey"])(event)) {
                manager.setFirstItemActive();
                event.preventDefault();
            }
        }
        else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["END"]) {
            if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["hasModifierKey"])(event)) {
                manager.setLastItemActive();
                event.preventDefault();
            }
        }
        else {
            this._keyManager.onKeydown(event);
        }
    };
    /**
     * @param {?} header
     * @return {?}
     */
    MatAccordion.prototype._handleHeaderFocus = /**
     * @param {?} header
     * @return {?}
     */
    function (header) {
        this._keyManager.updateActiveItem(header);
    };
    MatAccordion.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'mat-accordion',
                    exportAs: 'matAccordion',
                    inputs: ['multi'],
                    providers: [{
                            provide: MAT_ACCORDION,
                            useExisting: MatAccordion
                        }],
                    host: {
                        class: 'mat-accordion'
                    }
                },] },
    ];
    MatAccordion.propDecorators = {
        _headers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatExpansionPanelHeader, { descendants: true },] }],
        hideToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        displayMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        togglePosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return MatAccordion;
}(_angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__["CdkAccordion"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatExpansionModule = /** @class */ (function () {
    function MatExpansionModule() {
    }
    MatExpansionModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__["CdkAccordionModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"]],
                    exports: [
                        MatAccordion,
                        MatExpansionPanel,
                        MatExpansionPanelActionRow,
                        MatExpansionPanelHeader,
                        MatExpansionPanelTitle,
                        MatExpansionPanelDescription,
                        MatExpansionPanelContent,
                    ],
                    declarations: [
                        MatAccordion,
                        MatExpansionPanel,
                        MatExpansionPanelActionRow,
                        MatExpansionPanelHeader,
                        MatExpansionPanelTitle,
                        MatExpansionPanelDescription,
                        MatExpansionPanelContent,
                    ],
                },] },
    ];
    return MatExpansionModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=expansion.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/icon.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/icon.es5.js ***!
  \*********************************************************/
/*! exports provided: MatIconModule, MAT_ICON_LOCATION_FACTORY, MAT_ICON_LOCATION, MatIcon, getMatIconNameNotFoundError, getMatIconNoHttpProviderError, getMatIconFailedToSanitizeUrlError, getMatIconFailedToSanitizeLiteralError, ICON_REGISTRY_PROVIDER_FACTORY, MatIconRegistry, ICON_REGISTRY_PROVIDER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIconModule", function() { return MatIconModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION_FACTORY", function() { return MAT_ICON_LOCATION_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION", function() { return MAT_ICON_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIcon", function() { return MatIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconNameNotFoundError", function() { return getMatIconNameNotFoundError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconNoHttpProviderError", function() { return getMatIconNoHttpProviderError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeUrlError", function() { return getMatIconFailedToSanitizeUrlError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeLiteralError", function() { return getMatIconFailedToSanitizeLiteralError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER_FACTORY", function() { return ICON_REGISTRY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatIconRegistry", function() { return MatIconRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER", function() { return ICON_REGISTRY_PROVIDER; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
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
 * Returns an exception to be thrown in the case when attempting to
 * load an icon with a name that cannot be found.
 * \@docs-private
 * @param {?} iconName
 * @return {?}
 */
function getMatIconNameNotFoundError(iconName) {
    return Error("Unable to find icon with the name \"" + iconName + "\"");
}
/**
 * Returns an exception to be thrown when the consumer attempts to use
 * `<mat-icon>` without including \@angular/common/http.
 * \@docs-private
 * @return {?}
 */
function getMatIconNoHttpProviderError() {
    return Error('Could not find HttpClient provider for use with Angular Material icons. ' +
        'Please include the HttpClientModule from @angular/common/http in your ' +
        'app imports.');
}
/**
 * Returns an exception to be thrown when a URL couldn't be sanitized.
 * \@docs-private
 * @param {?} url URL that was attempted to be sanitized.
 * @return {?}
 */
function getMatIconFailedToSanitizeUrlError(url) {
    return Error("The URL provided to MatIconRegistry was not trusted as a resource URL " +
        ("via Angular's DomSanitizer. Attempted URL was \"" + url + "\"."));
}
/**
 * Returns an exception to be thrown when a HTML string couldn't be sanitized.
 * \@docs-private
 * @param {?} literal HTML that was attempted to be sanitized.
 * @return {?}
 */
function getMatIconFailedToSanitizeLiteralError(literal) {
    return Error("The literal provided to MatIconRegistry was not trusted as safe HTML by " +
        ("Angular's DomSanitizer. Attempted literal was \"" + literal + "\"."));
}
/**
 * Configuration for an icon, including the URL and possibly the cached SVG element.
 * \@docs-private
 */
var /**
 * Configuration for an icon, including the URL and possibly the cached SVG element.
 * \@docs-private
 */
SvgIconConfig = /** @class */ (function () {
    function SvgIconConfig(data) {
        // Note that we can't use `instanceof SVGElement` here,
        // because it'll break during server-side rendering.
        if (!!((/** @type {?} */ (data))).nodeName) {
            this.svgElement = (/** @type {?} */ (data));
        }
        else {
            this.url = (/** @type {?} */ (data));
        }
    }
    return SvgIconConfig;
}());
/**
 * Service to register and display icons used by the `<mat-icon>` component.
 * - Registers icon URLs by namespace and name.
 * - Registers icon set URLs by namespace.
 * - Registers aliases for CSS classes, for use with icon fonts.
 * - Loads icons from URLs and extracts individual icons from icon sets.
 */
var MatIconRegistry = /** @class */ (function () {
    function MatIconRegistry(_httpClient, _sanitizer, document) {
        this._httpClient = _httpClient;
        this._sanitizer = _sanitizer;
        /**
         * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
         */
        this._svgIconConfigs = new Map();
        /**
         * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
         * Multiple icon sets can be registered under the same namespace.
         */
        this._iconSetConfigs = new Map();
        /**
         * Cache for icons loaded by direct URLs.
         */
        this._cachedIconsByUrl = new Map();
        /**
         * In-progress icon fetches. Used to coalesce multiple requests to the same URL.
         */
        this._inProgressUrlFetches = new Map();
        /**
         * Map from font identifiers to their CSS class names. Used for icon fonts.
         */
        this._fontCssClassesByAlias = new Map();
        /**
         * The CSS class to apply when an `<mat-icon>` component has no icon name, url, or font specified.
         * The default 'material-icons' value assumes that the material icon font has been loaded as
         * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
         */
        this._defaultFontSetClass = 'material-icons';
        this._document = document;
    }
    /**
     * Registers an icon by URL in the default namespace.
     * @param iconName Name under which the icon should be registered.
     * @param url
     */
    /**
     * Registers an icon by URL in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} url
     * @return {THIS}
     */
    MatIconRegistry.prototype.addSvgIcon = /**
     * Registers an icon by URL in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} url
     * @return {THIS}
     */
    function (iconName, url) {
        return (/** @type {?} */ (this)).addSvgIconInNamespace('', iconName, url);
    };
    /**
     * Registers an icon using an HTML string in the default namespace.
     * @param iconName Name under which the icon should be registered.
     * @param literal SVG source of the icon.
     */
    /**
     * Registers an icon using an HTML string in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} literal SVG source of the icon.
     * @return {THIS}
     */
    MatIconRegistry.prototype.addSvgIconLiteral = /**
     * Registers an icon using an HTML string in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} literal SVG source of the icon.
     * @return {THIS}
     */
    function (iconName, literal) {
        return (/** @type {?} */ (this)).addSvgIconLiteralInNamespace('', iconName, literal);
    };
    /**
     * Registers an icon by URL in the specified namespace.
     * @param namespace Namespace in which the icon should be registered.
     * @param iconName Name under which the icon should be registered.
     * @param url
     */
    /**
     * Registers an icon by URL in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which the icon should be registered.
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} url
     * @return {THIS}
     */
    MatIconRegistry.prototype.addSvgIconInNamespace = /**
     * Registers an icon by URL in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which the icon should be registered.
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} url
     * @return {THIS}
     */
    function (namespace, iconName, url) {
        return (/** @type {?} */ (this))._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url));
    };
    /**
     * Registers an icon using an HTML string in the specified namespace.
     * @param namespace Namespace in which the icon should be registered.
     * @param iconName Name under which the icon should be registered.
     * @param literal SVG source of the icon.
     */
    /**
     * Registers an icon using an HTML string in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which the icon should be registered.
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} literal SVG source of the icon.
     * @return {THIS}
     */
    MatIconRegistry.prototype.addSvgIconLiteralInNamespace = /**
     * Registers an icon using an HTML string in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which the icon should be registered.
     * @param {?} iconName Name under which the icon should be registered.
     * @param {?} literal SVG source of the icon.
     * @return {THIS}
     */
    function (namespace, iconName, literal) {
        /** @type {?} */
        var sanitizedLiteral = (/** @type {?} */ (this))._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].HTML, literal);
        if (!sanitizedLiteral) {
            throw getMatIconFailedToSanitizeLiteralError(literal);
        }
        /** @type {?} */
        var svgElement = (/** @type {?} */ (this))._createSvgElementForSingleIcon(sanitizedLiteral);
        return (/** @type {?} */ (this))._addSvgIconConfig(namespace, iconName, new SvgIconConfig(svgElement));
    };
    /**
     * Registers an icon set by URL in the default namespace.
     * @param url
     */
    /**
     * Registers an icon set by URL in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} url
     * @return {THIS}
     */
    MatIconRegistry.prototype.addSvgIconSet = /**
     * Registers an icon set by URL in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} url
     * @return {THIS}
     */
    function (url) {
        return (/** @type {?} */ (this)).addSvgIconSetInNamespace('', url);
    };
    /**
     * Registers an icon set using an HTML string in the default namespace.
     * @param literal SVG source of the icon set.
     */
    /**
     * Registers an icon set using an HTML string in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} literal SVG source of the icon set.
     * @return {THIS}
     */
    MatIconRegistry.prototype.addSvgIconSetLiteral = /**
     * Registers an icon set using an HTML string in the default namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} literal SVG source of the icon set.
     * @return {THIS}
     */
    function (literal) {
        return (/** @type {?} */ (this)).addSvgIconSetLiteralInNamespace('', literal);
    };
    /**
     * Registers an icon set by URL in the specified namespace.
     * @param namespace Namespace in which to register the icon set.
     * @param url
     */
    /**
     * Registers an icon set by URL in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon set.
     * @param {?} url
     * @return {THIS}
     */
    MatIconRegistry.prototype.addSvgIconSetInNamespace = /**
     * Registers an icon set by URL in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon set.
     * @param {?} url
     * @return {THIS}
     */
    function (namespace, url) {
        return (/** @type {?} */ (this))._addSvgIconSetConfig(namespace, new SvgIconConfig(url));
    };
    /**
     * Registers an icon set using an HTML string in the specified namespace.
     * @param namespace Namespace in which to register the icon set.
     * @param literal SVG source of the icon set.
     */
    /**
     * Registers an icon set using an HTML string in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon set.
     * @param {?} literal SVG source of the icon set.
     * @return {THIS}
     */
    MatIconRegistry.prototype.addSvgIconSetLiteralInNamespace = /**
     * Registers an icon set using an HTML string in the specified namespace.
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon set.
     * @param {?} literal SVG source of the icon set.
     * @return {THIS}
     */
    function (namespace, literal) {
        /** @type {?} */
        var sanitizedLiteral = (/** @type {?} */ (this))._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].HTML, literal);
        if (!sanitizedLiteral) {
            throw getMatIconFailedToSanitizeLiteralError(literal);
        }
        /** @type {?} */
        var svgElement = (/** @type {?} */ (this))._svgElementFromString(sanitizedLiteral);
        return (/** @type {?} */ (this))._addSvgIconSetConfig(namespace, new SvgIconConfig(svgElement));
    };
    /**
     * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
     * component with the alias as the fontSet input will cause the class name to be applied
     * to the `<mat-icon>` element.
     *
     * @param alias Alias for the font.
     * @param className Class name override to be used instead of the alias.
     */
    /**
     * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
     * component with the alias as the fontSet input will cause the class name to be applied
     * to the `<mat-icon>` element.
     *
     * @template THIS
     * @this {THIS}
     * @param {?} alias Alias for the font.
     * @param {?=} className Class name override to be used instead of the alias.
     * @return {THIS}
     */
    MatIconRegistry.prototype.registerFontClassAlias = /**
     * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
     * component with the alias as the fontSet input will cause the class name to be applied
     * to the `<mat-icon>` element.
     *
     * @template THIS
     * @this {THIS}
     * @param {?} alias Alias for the font.
     * @param {?=} className Class name override to be used instead of the alias.
     * @return {THIS}
     */
    function (alias, className) {
        if (className === void 0) { className = alias; }
        (/** @type {?} */ (this))._fontCssClassesByAlias.set(alias, className);
        return (/** @type {?} */ (this));
    };
    /**
     * Returns the CSS class name associated with the alias by a previous call to
     * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
     */
    /**
     * Returns the CSS class name associated with the alias by a previous call to
     * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
     * @param {?} alias
     * @return {?}
     */
    MatIconRegistry.prototype.classNameForFontAlias = /**
     * Returns the CSS class name associated with the alias by a previous call to
     * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        return this._fontCssClassesByAlias.get(alias) || alias;
    };
    /**
     * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     *
     * @param className
     */
    /**
     * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     *
     * @template THIS
     * @this {THIS}
     * @param {?} className
     * @return {THIS}
     */
    MatIconRegistry.prototype.setDefaultFontSetClass = /**
     * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     *
     * @template THIS
     * @this {THIS}
     * @param {?} className
     * @return {THIS}
     */
    function (className) {
        (/** @type {?} */ (this))._defaultFontSetClass = className;
        return (/** @type {?} */ (this));
    };
    /**
     * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     */
    /**
     * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     * @return {?}
     */
    MatIconRegistry.prototype.getDefaultFontSetClass = /**
     * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     * @return {?}
     */
    function () {
        return this._defaultFontSetClass;
    };
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
     * The response from the URL may be cached so this will not always cause an HTTP request, but
     * the produced element will always be a new copy of the originally fetched icon. (That is,
     * it will not contain any modifications made to elements previously returned).
     *
     * @param safeUrl URL from which to fetch the SVG icon.
     */
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
     * The response from the URL may be cached so this will not always cause an HTTP request, but
     * the produced element will always be a new copy of the originally fetched icon. (That is,
     * it will not contain any modifications made to elements previously returned).
     *
     * @param {?} safeUrl URL from which to fetch the SVG icon.
     * @return {?}
     */
    MatIconRegistry.prototype.getSvgIconFromUrl = /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
     * The response from the URL may be cached so this will not always cause an HTTP request, but
     * the produced element will always be a new copy of the originally fetched icon. (That is,
     * it will not contain any modifications made to elements previously returned).
     *
     * @param {?} safeUrl URL from which to fetch the SVG icon.
     * @return {?}
     */
    function (safeUrl) {
        var _this = this;
        /** @type {?} */
        var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].RESOURCE_URL, safeUrl);
        if (!url) {
            throw getMatIconFailedToSanitizeUrlError(safeUrl);
        }
        /** @type {?} */
        var cachedIcon = this._cachedIconsByUrl.get(url);
        if (cachedIcon) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(cachedIcon));
        }
        return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((/**
         * @param {?} svg
         * @return {?}
         */
        function (svg) { return _this._cachedIconsByUrl.set((/** @type {?} */ (url)), svg); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} svg
         * @return {?}
         */
        function (svg) { return cloneSvg(svg); })));
    };
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
     * if not, the Observable will throw an error.
     *
     * @param name Name of the icon to be retrieved.
     * @param namespace Namespace in which to look for the icon.
     */
    /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
     * if not, the Observable will throw an error.
     *
     * @param {?} name Name of the icon to be retrieved.
     * @param {?=} namespace Namespace in which to look for the icon.
     * @return {?}
     */
    MatIconRegistry.prototype.getNamedSvgIcon = /**
     * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
     * if not, the Observable will throw an error.
     *
     * @param {?} name Name of the icon to be retrieved.
     * @param {?=} namespace Namespace in which to look for the icon.
     * @return {?}
     */
    function (name, namespace) {
        if (namespace === void 0) { namespace = ''; }
        // Return (copy of) cached icon if possible.
        /** @type {?} */
        var key = iconKey(namespace, name);
        /** @type {?} */
        var config = this._svgIconConfigs.get(key);
        if (config) {
            return this._getSvgFromConfig(config);
        }
        // See if we have any icon sets registered for the namespace.
        /** @type {?} */
        var iconSetConfigs = this._iconSetConfigs.get(namespace);
        if (iconSetConfigs) {
            return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(getMatIconNameNotFoundError(key));
    };
    /**
     * @return {?}
     */
    MatIconRegistry.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._svgIconConfigs.clear();
        this._iconSetConfigs.clear();
        this._cachedIconsByUrl.clear();
    };
    /**
     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
     */
    /**
     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
     * @private
     * @param {?} config
     * @return {?}
     */
    MatIconRegistry.prototype._getSvgFromConfig = /**
     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (config.svgElement) {
            // We already have the SVG element for this icon, return a copy.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(config.svgElement));
        }
        else {
            // Fetch the icon from the config's URL, cache it, and return a copy.
            return this._loadSvgIconFromConfig(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((/**
             * @param {?} svg
             * @return {?}
             */
            function (svg) { return config.svgElement = svg; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
             * @param {?} svg
             * @return {?}
             */
            function (svg) { return cloneSvg(svg); })));
        }
    };
    /**
     * Attempts to find an icon with the specified name in any of the SVG icon sets.
     * First searches the available cached icons for a nested element with a matching name, and
     * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
     * that have not been cached, and searches again after all fetches are completed.
     * The returned Observable produces the SVG element if possible, and throws
     * an error if no icon with the specified name can be found.
     */
    /**
     * Attempts to find an icon with the specified name in any of the SVG icon sets.
     * First searches the available cached icons for a nested element with a matching name, and
     * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
     * that have not been cached, and searches again after all fetches are completed.
     * The returned Observable produces the SVG element if possible, and throws
     * an error if no icon with the specified name can be found.
     * @private
     * @param {?} name
     * @param {?} iconSetConfigs
     * @return {?}
     */
    MatIconRegistry.prototype._getSvgFromIconSetConfigs = /**
     * Attempts to find an icon with the specified name in any of the SVG icon sets.
     * First searches the available cached icons for a nested element with a matching name, and
     * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
     * that have not been cached, and searches again after all fetches are completed.
     * The returned Observable produces the SVG element if possible, and throws
     * an error if no icon with the specified name can be found.
     * @private
     * @param {?} name
     * @param {?} iconSetConfigs
     * @return {?}
     */
    function (name, iconSetConfigs) {
        var _this = this;
        // For all the icon set SVG elements we've fetched, see if any contain an icon with the
        // requested name.
        /** @type {?} */
        var namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
        if (namedIcon) {
            // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
            // time anyway, there's probably not much advantage compared to just always extracting
            // it from the icon set.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(namedIcon);
        }
        // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
        // fetched, fetch them now and look for iconName in the results.
        /** @type {?} */
        var iconSetFetchRequests = iconSetConfigs
            .filter((/**
         * @param {?} iconSetConfig
         * @return {?}
         */
        function (iconSetConfig) { return !iconSetConfig.svgElement; }))
            .map((/**
         * @param {?} iconSetConfig
         * @return {?}
         */
        function (iconSetConfig) {
            return _this._loadSvgIconSetFromConfig(iconSetConfig).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                /** @type {?} */
                var url = _this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].RESOURCE_URL, iconSetConfig.url);
                // Swallow errors fetching individual URLs so the
                // combined Observable won't necessarily fail.
                console.error("Loading icon set URL: " + url + " failed: " + err.message);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            })));
        }));
        // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
        // cached SVG element (unless the request failed), and we can check again for the icon.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(iconSetFetchRequests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var foundIcon = _this._extractIconWithNameFromAnySet(name, iconSetConfigs);
            if (!foundIcon) {
                throw getMatIconNameNotFoundError(name);
            }
            return foundIcon;
        })));
    };
    /**
     * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     */
    /**
     * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     * @private
     * @param {?} iconName
     * @param {?} iconSetConfigs
     * @return {?}
     */
    MatIconRegistry.prototype._extractIconWithNameFromAnySet = /**
     * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     * @private
     * @param {?} iconName
     * @param {?} iconSetConfigs
     * @return {?}
     */
    function (iconName, iconSetConfigs) {
        // Iterate backwards, so icon sets added later have precedence.
        for (var i = iconSetConfigs.length - 1; i >= 0; i--) {
            /** @type {?} */
            var config = iconSetConfigs[i];
            if (config.svgElement) {
                /** @type {?} */
                var foundIcon = this._extractSvgIconFromSet(config.svgElement, iconName);
                if (foundIcon) {
                    return foundIcon;
                }
            }
        }
        return null;
    };
    /**
     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     */
    /**
     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     * @private
     * @param {?} config
     * @return {?}
     */
    MatIconRegistry.prototype._loadSvgIconFromConfig = /**
     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        return this._fetchUrl(config.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} svgText
         * @return {?}
         */
        function (svgText) { return _this._createSvgElementForSingleIcon(svgText); })));
    };
    /**
     * Loads the content of the icon set URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     */
    /**
     * Loads the content of the icon set URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     * @private
     * @param {?} config
     * @return {?}
     */
    MatIconRegistry.prototype._loadSvgIconSetFromConfig = /**
     * Loads the content of the icon set URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var _this = this;
        // If the SVG for this icon set has already been parsed, do nothing.
        if (config.svgElement) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(config.svgElement);
        }
        return this._fetchUrl(config.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
         * @param {?} svgText
         * @return {?}
         */
        function (svgText) {
            // It is possible that the icon set was parsed and cached by an earlier request, so parsing
            // only needs to occur if the cache is yet unset.
            if (!config.svgElement) {
                config.svgElement = _this._svgElementFromString(svgText);
            }
            return config.svgElement;
        })));
    };
    /**
     * Creates a DOM element from the given SVG string, and adds default attributes.
     */
    /**
     * Creates a DOM element from the given SVG string, and adds default attributes.
     * @private
     * @param {?} responseText
     * @return {?}
     */
    MatIconRegistry.prototype._createSvgElementForSingleIcon = /**
     * Creates a DOM element from the given SVG string, and adds default attributes.
     * @private
     * @param {?} responseText
     * @return {?}
     */
    function (responseText) {
        /** @type {?} */
        var svg = this._svgElementFromString(responseText);
        this._setSvgAttributes(svg);
        return svg;
    };
    /**
     * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     */
    /**
     * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     * @private
     * @param {?} iconSet
     * @param {?} iconName
     * @return {?}
     */
    MatIconRegistry.prototype._extractSvgIconFromSet = /**
     * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     * @private
     * @param {?} iconSet
     * @param {?} iconName
     * @return {?}
     */
    function (iconSet, iconName) {
        // Use the `id="iconName"` syntax in order to escape special
        // characters in the ID (versus using the #iconName syntax).
        /** @type {?} */
        var iconSource = iconSet.querySelector("[id=\"" + iconName + "\"]");
        if (!iconSource) {
            return null;
        }
        // Clone the element and remove the ID to prevent multiple elements from being added
        // to the page with the same ID.
        /** @type {?} */
        var iconElement = (/** @type {?} */ (iconSource.cloneNode(true)));
        iconElement.removeAttribute('id');
        // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
        // the content of a new <svg> node.
        if (iconElement.nodeName.toLowerCase() === 'svg') {
            return this._setSvgAttributes((/** @type {?} */ (iconElement)));
        }
        // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
        // that the same could be achieved by referring to it via <use href="#id">, however the <use>
        // tag is problematic on Firefox, because it needs to include the current page path.
        if (iconElement.nodeName.toLowerCase() === 'symbol') {
            return this._setSvgAttributes(this._toSvgElement(iconElement));
        }
        // createElement('SVG') doesn't work as expected; the DOM ends up with
        // the correct nodes, but the SVG content doesn't render. Instead we
        // have to create an empty SVG node using innerHTML and append its content.
        // Elements created using DOMParser.parseFromString have the same problem.
        // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display
        /** @type {?} */
        var svg = this._svgElementFromString('<svg></svg>');
        // Clone the node so we don't remove it from the parent icon set element.
        svg.appendChild(iconElement);
        return this._setSvgAttributes(svg);
    };
    /**
     * Creates a DOM element from the given SVG string.
     */
    /**
     * Creates a DOM element from the given SVG string.
     * @private
     * @param {?} str
     * @return {?}
     */
    MatIconRegistry.prototype._svgElementFromString = /**
     * Creates a DOM element from the given SVG string.
     * @private
     * @param {?} str
     * @return {?}
     */
    function (str) {
        /** @type {?} */
        var div = this._document.createElement('DIV');
        div.innerHTML = str;
        /** @type {?} */
        var svg = (/** @type {?} */ (div.querySelector('svg')));
        if (!svg) {
            throw Error('<svg> tag not found');
        }
        return svg;
    };
    /**
     * Converts an element into an SVG node by cloning all of its children.
     */
    /**
     * Converts an element into an SVG node by cloning all of its children.
     * @private
     * @param {?} element
     * @return {?}
     */
    MatIconRegistry.prototype._toSvgElement = /**
     * Converts an element into an SVG node by cloning all of its children.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var svg = this._svgElementFromString('<svg></svg>');
        for (var i = 0; i < element.childNodes.length; i++) {
            if (element.childNodes[i].nodeType === this._document.ELEMENT_NODE) {
                svg.appendChild(element.childNodes[i].cloneNode(true));
            }
        }
        return svg;
    };
    /**
     * Sets the default attributes for an SVG element to be used as an icon.
     */
    /**
     * Sets the default attributes for an SVG element to be used as an icon.
     * @private
     * @param {?} svg
     * @return {?}
     */
    MatIconRegistry.prototype._setSvgAttributes = /**
     * Sets the default attributes for an SVG element to be used as an icon.
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        svg.setAttribute('fit', '');
        svg.setAttribute('height', '100%');
        svg.setAttribute('width', '100%');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.
        return svg;
    };
    /**
     * Returns an Observable which produces the string contents of the given URL. Results may be
     * cached, so future calls with the same URL may not cause another HTTP request.
     */
    /**
     * Returns an Observable which produces the string contents of the given URL. Results may be
     * cached, so future calls with the same URL may not cause another HTTP request.
     * @private
     * @param {?} safeUrl
     * @return {?}
     */
    MatIconRegistry.prototype._fetchUrl = /**
     * Returns an Observable which produces the string contents of the given URL. Results may be
     * cached, so future calls with the same URL may not cause another HTTP request.
     * @private
     * @param {?} safeUrl
     * @return {?}
     */
    function (safeUrl) {
        var _this = this;
        if (!this._httpClient) {
            throw getMatIconNoHttpProviderError();
        }
        if (safeUrl == null) {
            throw Error("Cannot fetch icon from URL \"" + safeUrl + "\".");
        }
        /** @type {?} */
        var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].RESOURCE_URL, safeUrl);
        if (!url) {
            throw getMatIconFailedToSanitizeUrlError(safeUrl);
        }
        // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
        // already a request in progress for that URL. It's necessary to call share() on the
        // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.
        /** @type {?} */
        var inProgressFetch = this._inProgressUrlFetches.get(url);
        if (inProgressFetch) {
            return inProgressFetch;
        }
        // TODO(jelbourn): for some reason, the `finalize` operator "loses" the generic type on the
        // Observable. Figure out why and fix it.
        /** @type {?} */
        var req = this._httpClient.get(url, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])((/**
         * @return {?}
         */
        function () { return _this._inProgressUrlFetches.delete(url); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
        this._inProgressUrlFetches.set(url, req);
        return req;
    };
    /**
     * Registers an icon config by name in the specified namespace.
     * @param namespace Namespace in which to register the icon config.
     * @param iconName Name under which to register the config.
     * @param config Config to be registered.
     */
    /**
     * Registers an icon config by name in the specified namespace.
     * @private
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon config.
     * @param {?} iconName Name under which to register the config.
     * @param {?} config Config to be registered.
     * @return {THIS}
     */
    MatIconRegistry.prototype._addSvgIconConfig = /**
     * Registers an icon config by name in the specified namespace.
     * @private
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon config.
     * @param {?} iconName Name under which to register the config.
     * @param {?} config Config to be registered.
     * @return {THIS}
     */
    function (namespace, iconName, config) {
        (/** @type {?} */ (this))._svgIconConfigs.set(iconKey(namespace, iconName), config);
        return (/** @type {?} */ (this));
    };
    /**
     * Registers an icon set config in the specified namespace.
     * @param namespace Namespace in which to register the icon config.
     * @param config Config to be registered.
     */
    /**
     * Registers an icon set config in the specified namespace.
     * @private
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon config.
     * @param {?} config Config to be registered.
     * @return {THIS}
     */
    MatIconRegistry.prototype._addSvgIconSetConfig = /**
     * Registers an icon set config in the specified namespace.
     * @private
     * @template THIS
     * @this {THIS}
     * @param {?} namespace Namespace in which to register the icon config.
     * @param {?} config Config to be registered.
     * @return {THIS}
     */
    function (namespace, config) {
        /** @type {?} */
        var configNamespace = (/** @type {?} */ (this))._iconSetConfigs.get(namespace);
        if (configNamespace) {
            configNamespace.push(config);
        }
        else {
            (/** @type {?} */ (this))._iconSetConfigs.set(namespace, [config]);
        }
        return (/** @type {?} */ (this));
    };
    MatIconRegistry.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    MatIconRegistry.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ MatIconRegistry.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({ factory: function MatIconRegistry_Factory() { return new MatIconRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"], 8)); }, token: MatIconRegistry, providedIn: "root" });
    return MatIconRegistry;
}());
/**
 * \@docs-private
 * @param {?} parentRegistry
 * @param {?} httpClient
 * @param {?} sanitizer
 * @param {?=} document
 * @return {?}
 */
function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, document) {
    return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document);
}
/**
 * \@docs-private
 * @type {?}
 */
var ICON_REGISTRY_PROVIDER = {
    // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
    provide: MatIconRegistry,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"](), MatIconRegistry],
        [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
        [new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), (/** @type {?} */ (_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]))],
    ],
    useFactory: ICON_REGISTRY_PROVIDER_FACTORY,
};
/**
 * Clones an SVGElement while preserving type information.
 * @param {?} svg
 * @return {?}
 */
function cloneSvg(svg) {
    return (/** @type {?} */ (svg.cloneNode(true)));
}
/**
 * Returns the cache key to use for an icon namespace and name.
 * @param {?} namespace
 * @param {?} name
 * @return {?}
 */
function iconKey(namespace, name) {
    return namespace + ':' + name;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Boilerplate for applying mixins to MatIcon.
/**
 * \@docs-private
 */
var 
// Boilerplate for applying mixins to MatIcon.
/**
 * \@docs-private
 */
MatIconBase = /** @class */ (function () {
    function MatIconBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatIconBase;
}());
/** @type {?} */
var _MatIconMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinColor"])(MatIconBase);
/**
 * Injection token used to provide the current location to `MatIcon`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * \@docs-private
 * @type {?}
 */
var MAT_ICON_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-icon-location', {
    providedIn: 'root',
    factory: MAT_ICON_LOCATION_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_ICON_LOCATION_FACTORY() {
    /** @type {?} */
    var _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);
    /** @type {?} */
    var _location = _document ? _document.location : null;
    return {
        // Note that this needs to be a function, rather than a property, because Angular
        // will only resolve it once, but we want the current path on each call.
        getPathname: (/**
         * @return {?}
         */
        function () { return _location ? (_location.pathname + _location.search) : ''; })
    };
}
/**
 * SVG attributes that accept a FuncIRI (e.g. `url(<something>)`).
 * @type {?}
 */
var funcIriAttributes = [
    'clip-path',
    'color-profile',
    'src',
    'cursor',
    'fill',
    'filter',
    'marker',
    'marker-start',
    'marker-mid',
    'marker-end',
    'mask',
    'stroke'
];
var ɵ0 = /**
 * @param {?} attr
 * @return {?}
 */
function (attr) { return "[" + attr + "]"; };
/**
 * Selector that can be used to find all elements that are using a `FuncIRI`.
 * @type {?}
 */
var funcIriAttributeSelector = funcIriAttributes.map((ɵ0)).join(', ');
/**
 * Regex that can be used to extract the id out of a FuncIRI.
 * @type {?}
 */
var funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
/**
 * Component to display an icon. It can be used in the following ways:
 *
 * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
 *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
 *   MatIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
 *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
 *   Examples:
 *     `<mat-icon svgIcon="left-arrow"></mat-icon>
 *     <mat-icon svgIcon="animals:cat"></mat-icon>`
 *
 * - Use a font ligature as an icon by putting the ligature text in the content of the `<mat-icon>`
 *   component. By default the Material icons font is used as described at
 *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
 *   alternate font by setting the fontSet input to either the CSS class to apply to use the
 *   desired font, or to an alias previously registered with MatIconRegistry.registerFontClassAlias.
 *   Examples:
 *     `<mat-icon>home</mat-icon>
 *     <mat-icon fontSet="myfont">sun</mat-icon>`
 *
 * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
 *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
 *   CSS class which causes the glyph to be displayed via a :before selector, as in
 *   https://fortawesome.github.io/Font-Awesome/examples/
 *   Example:
 *     `<mat-icon fontSet="fa" fontIcon="alarm"></mat-icon>`
 */
var MatIcon = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(MatIcon, _super);
    function MatIcon(elementRef, _iconRegistry, ariaHidden, _location) {
        var _this = _super.call(this, elementRef) || this;
        _this._iconRegistry = _iconRegistry;
        _this._location = _location;
        _this._inline = false;
        // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
        // the right thing to do for the majority of icon use-cases.
        if (!ariaHidden) {
            elementRef.nativeElement.setAttribute('aria-hidden', 'true');
        }
        return _this;
    }
    Object.defineProperty(MatIcon.prototype, "inline", {
        /**
         * Whether the icon should be inlined, automatically sizing the icon to match the font size of
         * the element the icon is contained in.
         */
        get: /**
         * Whether the icon should be inlined, automatically sizing the icon to match the font size of
         * the element the icon is contained in.
         * @return {?}
         */
        function () {
            return this._inline;
        },
        set: /**
         * @param {?} inline
         * @return {?}
         */
        function (inline) {
            this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(inline);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatIcon.prototype, "fontSet", {
        /** Font set that the icon is a part of. */
        get: /**
         * Font set that the icon is a part of.
         * @return {?}
         */
        function () { return this._fontSet; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._fontSet = this._cleanupFontValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatIcon.prototype, "fontIcon", {
        /** Name of an icon within a font set. */
        get: /**
         * Name of an icon within a font set.
         * @return {?}
         */
        function () { return this._fontIcon; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._fontIcon = this._cleanupFontValue(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Splits an svgIcon binding value into its icon set and icon name components.
     * Returns a 2-element array of [(icon set), (icon name)].
     * The separator for the two fields is ':'. If there is no separator, an empty
     * string is returned for the icon set and the entire value is returned for
     * the icon name. If the argument is falsy, returns an array of two empty strings.
     * Throws an error if the name contains two or more ':' separators.
     * Examples:
     *   `'social:cake' -> ['social', 'cake']
     *   'penguin' -> ['', 'penguin']
     *   null -> ['', '']
     *   'a:b:c' -> (throws Error)`
     */
    /**
     * Splits an svgIcon binding value into its icon set and icon name components.
     * Returns a 2-element array of [(icon set), (icon name)].
     * The separator for the two fields is ':'. If there is no separator, an empty
     * string is returned for the icon set and the entire value is returned for
     * the icon name. If the argument is falsy, returns an array of two empty strings.
     * Throws an error if the name contains two or more ':' separators.
     * Examples:
     *   `'social:cake' -> ['social', 'cake']
     *   'penguin' -> ['', 'penguin']
     *   null -> ['', '']
     *   'a:b:c' -> (throws Error)`
     * @private
     * @param {?} iconName
     * @return {?}
     */
    MatIcon.prototype._splitIconName = /**
     * Splits an svgIcon binding value into its icon set and icon name components.
     * Returns a 2-element array of [(icon set), (icon name)].
     * The separator for the two fields is ':'. If there is no separator, an empty
     * string is returned for the icon set and the entire value is returned for
     * the icon name. If the argument is falsy, returns an array of two empty strings.
     * Throws an error if the name contains two or more ':' separators.
     * Examples:
     *   `'social:cake' -> ['social', 'cake']
     *   'penguin' -> ['', 'penguin']
     *   null -> ['', '']
     *   'a:b:c' -> (throws Error)`
     * @private
     * @param {?} iconName
     * @return {?}
     */
    function (iconName) {
        if (!iconName) {
            return ['', ''];
        }
        /** @type {?} */
        var parts = iconName.split(':');
        switch (parts.length) {
            case 1: return ['', parts[0]]; // Use default namespace.
            case 2: return (/** @type {?} */ (parts));
            default: throw Error("Invalid icon name: \"" + iconName + "\"");
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MatIcon.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        // Only update the inline SVG icon if the inputs changed, to avoid unnecessary DOM operations.
        /** @type {?} */
        var svgIconChanges = changes['svgIcon'];
        if (svgIconChanges) {
            if (this.svgIcon) {
                var _a = this._splitIconName(this.svgIcon), namespace = _a[0], iconName = _a[1];
                this._iconRegistry.getNamedSvgIcon(iconName, namespace).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe((/**
                 * @param {?} svg
                 * @return {?}
                 */
                function (svg) { return _this._setSvgElement(svg); }), (/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) { return console.log("Error retrieving icon: " + err.message); }));
            }
            else if (svgIconChanges.previousValue) {
                this._clearSvgElement();
            }
        }
        if (this._usingFontIcon()) {
            this._updateFontIconClasses();
        }
    };
    /**
     * @return {?}
     */
    MatIcon.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // Update font classes because ngOnChanges won't be called if none of the inputs are present,
        // e.g. <mat-icon>arrow</mat-icon> In this case we need to add a CSS class for the default font.
        if (this._usingFontIcon()) {
            this._updateFontIconClasses();
        }
    };
    /**
     * @return {?}
     */
    MatIcon.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cachedElements = this._elementsWithExternalReferences;
        if (cachedElements && this._location && cachedElements.size) {
            /** @type {?} */
            var newPath = this._location.getPathname();
            // We need to check whether the URL has changed on each change detection since
            // the browser doesn't have an API that will let us react on link clicks and
            // we can't depend on the Angular router. The references need to be updated,
            // because while most browsers don't care whether the URL is correct after
            // the first render, Safari will break if the user navigates to a different
            // page and the SVG isn't re-rendered.
            if (newPath !== this._previousPath) {
                this._previousPath = newPath;
                this._prependPathToReferences(newPath);
            }
        }
    };
    /**
     * @return {?}
     */
    MatIcon.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._elementsWithExternalReferences) {
            this._elementsWithExternalReferences.clear();
        }
    };
    /**
     * @private
     * @return {?}
     */
    MatIcon.prototype._usingFontIcon = /**
     * @private
     * @return {?}
     */
    function () {
        return !this.svgIcon;
    };
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    MatIcon.prototype._setSvgElement = /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        this._clearSvgElement();
        // Workaround for IE11 and Edge ignoring `style` tags inside dynamically-created SVGs.
        // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
        // Do this before inserting the element into the DOM, in order to avoid a style recalculation.
        /** @type {?} */
        var styleTags = (/** @type {?} */ (svg.querySelectorAll('style')));
        for (var i = 0; i < styleTags.length; i++) {
            styleTags[i].textContent += ' ';
        }
        // Note: we do this fix here, rather than the icon registry, because the
        // references have to point to the URL at the time that the icon was created.
        if (this._location) {
            /** @type {?} */
            var path = this._location.getPathname();
            this._previousPath = path;
            this._cacheChildrenWithExternalReferences(svg);
            this._prependPathToReferences(path);
        }
        this._elementRef.nativeElement.appendChild(svg);
    };
    /**
     * @private
     * @return {?}
     */
    MatIcon.prototype._clearSvgElement = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var layoutElement = this._elementRef.nativeElement;
        /** @type {?} */
        var childCount = layoutElement.childNodes.length;
        if (this._elementsWithExternalReferences) {
            this._elementsWithExternalReferences.clear();
        }
        // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
        // we can't use innerHTML, because IE will throw if the element has a data binding.
        while (childCount--) {
            /** @type {?} */
            var child = layoutElement.childNodes[childCount];
            // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
            // of any loose text nodes, as well as any SVG elements in order to remove any old icons.
            if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
                layoutElement.removeChild(child);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    MatIcon.prototype._updateFontIconClasses = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this._usingFontIcon()) {
            return;
        }
        /** @type {?} */
        var elem = this._elementRef.nativeElement;
        /** @type {?} */
        var fontSetClass = this.fontSet ?
            this._iconRegistry.classNameForFontAlias(this.fontSet) :
            this._iconRegistry.getDefaultFontSetClass();
        if (fontSetClass != this._previousFontSetClass) {
            if (this._previousFontSetClass) {
                elem.classList.remove(this._previousFontSetClass);
            }
            if (fontSetClass) {
                elem.classList.add(fontSetClass);
            }
            this._previousFontSetClass = fontSetClass;
        }
        if (this.fontIcon != this._previousFontIconClass) {
            if (this._previousFontIconClass) {
                elem.classList.remove(this._previousFontIconClass);
            }
            if (this.fontIcon) {
                elem.classList.add(this.fontIcon);
            }
            this._previousFontIconClass = this.fontIcon;
        }
    };
    /**
     * Cleans up a value to be used as a fontIcon or fontSet.
     * Since the value ends up being assigned as a CSS class, we
     * have to trim the value and omit space-separated values.
     */
    /**
     * Cleans up a value to be used as a fontIcon or fontSet.
     * Since the value ends up being assigned as a CSS class, we
     * have to trim the value and omit space-separated values.
     * @private
     * @param {?} value
     * @return {?}
     */
    MatIcon.prototype._cleanupFontValue = /**
     * Cleans up a value to be used as a fontIcon or fontSet.
     * Since the value ends up being assigned as a CSS class, we
     * have to trim the value and omit space-separated values.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return typeof value === 'string' ? value.trim().split(' ')[0] : value;
    };
    /**
     * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
     * reference. This is required because WebKit browsers require references to be prefixed with
     * the current path, if the page has a `base` tag.
     */
    /**
     * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
     * reference. This is required because WebKit browsers require references to be prefixed with
     * the current path, if the page has a `base` tag.
     * @private
     * @param {?} path
     * @return {?}
     */
    MatIcon.prototype._prependPathToReferences = /**
     * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
     * reference. This is required because WebKit browsers require references to be prefixed with
     * the current path, if the page has a `base` tag.
     * @private
     * @param {?} path
     * @return {?}
     */
    function (path) {
        /** @type {?} */
        var elements = this._elementsWithExternalReferences;
        if (elements) {
            elements.forEach((/**
             * @param {?} attrs
             * @param {?} element
             * @return {?}
             */
            function (attrs, element) {
                attrs.forEach((/**
                 * @param {?} attr
                 * @return {?}
                 */
                function (attr) {
                    element.setAttribute(attr.name, "url('" + path + "#" + attr.value + "')");
                }));
            }));
        }
    };
    /**
     * Caches the children of an SVG element that have `url()`
     * references that we need to prefix with the current path.
     */
    /**
     * Caches the children of an SVG element that have `url()`
     * references that we need to prefix with the current path.
     * @private
     * @param {?} element
     * @return {?}
     */
    MatIcon.prototype._cacheChildrenWithExternalReferences = /**
     * Caches the children of an SVG element that have `url()`
     * references that we need to prefix with the current path.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
        /** @type {?} */
        var elements = this._elementsWithExternalReferences =
            this._elementsWithExternalReferences || new Map();
        var _loop_1 = function (i) {
            funcIriAttributes.forEach((/**
             * @param {?} attr
             * @return {?}
             */
            function (attr) {
                /** @type {?} */
                var elementWithReference = elementsWithFuncIri[i];
                /** @type {?} */
                var value = elementWithReference.getAttribute(attr);
                /** @type {?} */
                var match = value ? value.match(funcIriPattern) : null;
                if (match) {
                    /** @type {?} */
                    var attributes = elements.get(elementWithReference);
                    if (!attributes) {
                        attributes = [];
                        elements.set(elementWithReference, attributes);
                    }
                    (/** @type {?} */ (attributes)).push({ name: attr, value: match[1] });
                }
            }));
        };
        for (var i = 0; i < elementsWithFuncIri.length; i++) {
            _loop_1(i);
        }
    };
    MatIcon.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{template: '<ng-content></ng-content>',
                    selector: 'mat-icon',
                    exportAs: 'matIcon',
                    styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1,1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],
                    inputs: ['color'],
                    host: {
                        'role': 'img',
                        'class': 'mat-icon notranslate',
                        '[class.mat-icon-inline]': 'inline',
                        '[class.mat-icon-no-color]': 'color !== "primary" && color !== "accent" && color !== "warn"',
                    },
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatIcon.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: MatIconRegistry },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"], args: ['aria-hidden',] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_ICON_LOCATION,] }] }
    ]; };
    MatIcon.propDecorators = {
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        svgIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        fontSet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        fontIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    return MatIcon;
}(_MatIconMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatIconModule = /** @class */ (function () {
    function MatIconModule() {
    }
    MatIconModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
                    exports: [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
                    declarations: [MatIcon],
                },] },
    ];
    return MatIconModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=icon.es5.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"top-card\">\n    <mat-card-actions>\n       <button class=\"filter\" mat-raised-button color=\"primary\" (click)=\"collapsed=!collapsed\">Filter</button>\n    </mat-card-actions>\n      <mat-card-content *ngIf=\"!collapsed\">\n      <p>This is some example text.</p>\n       <p>This text will disappear when you use the action button in the actions bar below.</p>\n    </mat-card-content>\n    <ion-button class=\"location\" shape=\"round\"><ion-icon name=\"pin\"></ion-icon></ion-button>\n  </mat-card>\n\n\n<ion-content>\n  \n  <mat-accordion class=\"cards\" *ngFor=\"let result of results ; let i = index\">\n      <mat-expansion-panel>\n        <mat-expansion-panel-header class=\"gas-cards\">\n            <ion-card-title color=\"primary\"><b>{{result.name}}</b></ion-card-title>\n        </mat-expansion-panel-header> \n        <!-- need to include: miles to station, price, ratings with stars, amenities, type gas -->\n        <section class=\"address\">\n          Address: \n          <p>{{result.address?.line_1}}</p>\n          <p>{{result.address?.locality}}, {{result.address?.region}} {{result.address?.postal_code}}</p>\n        </section>\n        <section class=\"phone\">\n          <p>Phone Number:  {{result.phone}}</p>\n        </section>\n        </mat-expansion-panel>\n  </mat-accordion>  \n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");











var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0), 0 2px 2px 0 rgba(0, 0, 0, 0), 0 1px 5px 0 rgba(0, 0, 0, 0);\n}\n\n.top-card {\n  display: inline-block;\n}\n\n.address p {\n  margin: 0;\n}\n\n.phone p {\n  margin: 5px 0;\n}\n\n.example-button-row {\n  margin: 25px;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.filter, .location {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n\nmat-expansion-panel-header.gas-cards {\n  font-family: \"PT Sans\", sans-serif;\n  font-weight: bold;\n}\n\nmat-expansion-panel-header.gas-cards:hover {\n  background-color: white !important;\n}\n\nmat-expansion-panel-header.gas-cards {\n  margin: 20px 0 20px 0;\n}\n\nmat-expansion-panel.mat-expansion-panel {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbmlzdHJhdG9yL0Rlc2t0b3AvRnJvbnRFbmQvc3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsdUdBQUE7QUNBRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxTQUFBO0FDRUY7O0FEQUE7RUFDRSxhQUFBO0FDR0Y7O0FEREE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDSUY7O0FEREE7RUFDRSwyQkFBQTtFQUFBLG9CQUFBO0FDSUY7O0FEREE7RUFDRSxrQ0FBQTtFQUNBLGlCQUFBO0FDSUY7O0FERkE7RUFDRSxrQ0FBQTtBQ0tGOztBREhBO0VBQ0UscUJBQUE7QUNNRjs7QURKQTtFQUNFLFdBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKXtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwwKSwgMCAycHggMnB4IDAgcmdiYSgwLDAsMCwwKSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwwKTtcbn1cbi50b3AtY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5hZGRyZXNzIHAge1xuICBtYXJnaW46IDA7XG59XG4ucGhvbmUgcCB7XG4gIG1hcmdpbjogNXB4IDA7XG59XG4uZXhhbXBsZS1idXR0b24tcm93IHtcbiAgbWFyZ2luOiAyNXB4O1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5maWx0ZXIgLCAubG9jYXRpb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuZ2FzLWNhcmRzIHtcbiAgZm9udC1mYW1pbHk6ICdQVCBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5nYXMtY2FyZHM6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5nYXMtY2FyZHMgIHtcbiAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xufVxubWF0LWV4cGFuc2lvbi1wYW5lbC5tYXQtZXhwYW5zaW9uLXBhbmVse1xuICBtYXJnaW46IDVweDtcbn0iLCIubWF0LWNhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDApLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDApLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4udG9wLWNhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5hZGRyZXNzIHAge1xuICBtYXJnaW46IDA7XG59XG5cbi5waG9uZSBwIHtcbiAgbWFyZ2luOiA1cHggMDtcbn1cblxuLmV4YW1wbGUtYnV0dG9uLXJvdyB7XG4gIG1hcmdpbjogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZpbHRlciwgLmxvY2F0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmdhcy1jYXJkcyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmdhcy1jYXJkczpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmdhcy1jYXJkcyB7XG4gIG1hcmdpbjogMjBweCAwIDIwcHggMDtcbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgbWFyZ2luOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var Tab2Page = /** @class */ (function () {
    function Tab2Page(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.collapsed = true;
        this.results = [];
        this.results = [
            {
                "Name": " Exxon",
                "Address": "123 new 12321 "
            },
            {
                "Name": " Shell",
                "Address": "123 new 12321 "
            }, {
                "Name": " Something",
                "Address": "123 new 12321 "
            }, {
                "Name": " Mobil",
                "Address": "123 new 12321 "
            }
        ];
        this.getGasStations(33174, 1);
    }
    Tab2Page.prototype.getGasStations = function (zipCode, gasType) {
        var _this = this;
        return this.http.get("https://secret-fortress-69641.herokuapp.com/api/zipcode/" + zipCode + "?fuel=" + gasType).subscribe(function (val) {
            var stations = val.stations;
            return _this.results = stations;
        });
    };
    Tab2Page.prototype.ionViewLoad = function () {
    };
    Tab2Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map