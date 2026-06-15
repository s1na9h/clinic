(function () {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const u of document.querySelectorAll('link[rel="modulepreload"]')) a(u);
    new MutationObserver(u => {
        for (const f of u) if (f.type === "childList") for (const d of f.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && a(d)
    }).observe(document, {childList: !0, subtree: !0});

    function s(u) {
        const f = {};
        return u.integrity && (f.integrity = u.integrity), u.referrerPolicy && (f.referrerPolicy = u.referrerPolicy), u.crossOrigin === "use-credentials" ? f.credentials = "include" : u.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f
    }

    function a(u) {
        if (u.ep) return;
        u.ep = !0;
        const f = s(u);
        fetch(u.href, f)
    }
})();
var dl = {exports: {}}, ci = {}, fl = {exports: {}}, ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Af;

function ty() {
    if (Af) return ue;
    Af = 1;
    var n = Symbol.for("react.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"),
        a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"),
        d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"),
        v = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.iterator;

    function S(C) {
        return C === null || typeof C != "object" ? null : (C = x && C[x] || C["@@iterator"], typeof C == "function" ? C : null)
    }

    var N = {
        isMounted: function () {
            return !1
        }, enqueueForceUpdate: function () {
        }, enqueueReplaceState: function () {
        }, enqueueSetState: function () {
        }
    }, b = Object.assign, A = {};

    function z(C, D, le) {
        this.props = C, this.context = D, this.refs = A, this.updater = le || N
    }

    z.prototype.isReactComponent = {}, z.prototype.setState = function (C, D) {
        if (typeof C != "object" && typeof C != "function" && C != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, C, D, "setState")
    }, z.prototype.forceUpdate = function (C) {
        this.updater.enqueueForceUpdate(this, C, "forceUpdate")
    };

    function R() {
    }

    R.prototype = z.prototype;

    function U(C, D, le) {
        this.props = C, this.context = D, this.refs = A, this.updater = le || N
    }

    var I = U.prototype = new R;
    I.constructor = U, b(I, z.prototype), I.isPureReactComponent = !0;
    var F = Array.isArray, X = Object.prototype.hasOwnProperty, P = {current: null},
        K = {key: !0, ref: !0, __self: !0, __source: !0};

    function $(C, D, le) {
        var ce, he = {}, pe = null, we = null;
        if (D != null) for (ce in D.ref !== void 0 && (we = D.ref), D.key !== void 0 && (pe = "" + D.key), D) X.call(D, ce) && !K.hasOwnProperty(ce) && (he[ce] = D[ce]);
        var ge = arguments.length - 2;
        if (ge === 1) he.children = le; else if (1 < ge) {
            for (var Te = Array(ge), ct = 0; ct < ge; ct++) Te[ct] = arguments[ct + 2];
            he.children = Te
        }
        if (C && C.defaultProps) for (ce in ge = C.defaultProps, ge) he[ce] === void 0 && (he[ce] = ge[ce]);
        return {$$typeof: n, type: C, key: pe, ref: we, props: he, _owner: P.current}
    }

    function se(C, D) {
        return {$$typeof: n, type: C.type, key: D, ref: C.ref, props: C.props, _owner: C._owner}
    }

    function Z(C) {
        return typeof C == "object" && C !== null && C.$$typeof === n
    }

    function O(C) {
        var D = {"=": "=0", ":": "=2"};
        return "$" + C.replace(/[=:]/g, function (le) {
            return D[le]
        })
    }

    var ae = /\/+/g;

    function ke(C, D) {
        return typeof C == "object" && C !== null && C.key != null ? O("" + C.key) : D.toString(36)
    }

    function ze(C, D, le, ce, he) {
        var pe = typeof C;
        (pe === "undefined" || pe === "boolean") && (C = null);
        var we = !1;
        if (C === null) we = !0; else switch (pe) {
            case"string":
            case"number":
                we = !0;
                break;
            case"object":
                switch (C.$$typeof) {
                    case n:
                    case r:
                        we = !0
                }
        }
        if (we) return we = C, he = he(we), C = ce === "" ? "." + ke(we, 0) : ce, F(he) ? (le = "", C != null && (le = C.replace(ae, "$&/") + "/"), ze(he, D, le, "", function (ct) {
            return ct
        })) : he != null && (Z(he) && (he = se(he, le + (!he.key || we && we.key === he.key ? "" : ("" + he.key).replace(ae, "$&/") + "/") + C)), D.push(he)), 1;
        if (we = 0, ce = ce === "" ? "." : ce + ":", F(C)) for (var ge = 0; ge < C.length; ge++) {
            pe = C[ge];
            var Te = ce + ke(pe, ge);
            we += ze(pe, D, le, Te, he)
        } else if (Te = S(C), typeof Te == "function") for (C = Te.call(C), ge = 0; !(pe = C.next()).done;) pe = pe.value, Te = ce + ke(pe, ge++), we += ze(pe, D, le, Te, he); else if (pe === "object") throw D = String(C), Error("Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead.");
        return we
    }

    function Le(C, D, le) {
        if (C == null) return C;
        var ce = [], he = 0;
        return ze(C, ce, "", "", function (pe) {
            return D.call(le, pe, he++)
        }), ce
    }

    function je(C) {
        if (C._status === -1) {
            var D = C._result;
            D = D(), D.then(function (le) {
                (C._status === 0 || C._status === -1) && (C._status = 1, C._result = le)
            }, function (le) {
                (C._status === 0 || C._status === -1) && (C._status = 2, C._result = le)
            }), C._status === -1 && (C._status = 0, C._result = D)
        }
        if (C._status === 1) return C._result.default;
        throw C._result
    }

    var Ee = {current: null}, B = {transition: null},
        ee = {ReactCurrentDispatcher: Ee, ReactCurrentBatchConfig: B, ReactCurrentOwner: P};

    function G() {
        throw Error("act(...) is not supported in production builds of React.")
    }

    return ue.Children = {
        map: Le, forEach: function (C, D, le) {
            Le(C, function () {
                D.apply(this, arguments)
            }, le)
        }, count: function (C) {
            var D = 0;
            return Le(C, function () {
                D++
            }), D
        }, toArray: function (C) {
            return Le(C, function (D) {
                return D
            }) || []
        }, only: function (C) {
            if (!Z(C)) throw Error("React.Children.only expected to receive a single React element child.");
            return C
        }
    }, ue.Component = z, ue.Fragment = s, ue.Profiler = u, ue.PureComponent = U, ue.StrictMode = a, ue.Suspense = g, ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ee, ue.act = G, ue.cloneElement = function (C, D, le) {
        if (C == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + C + ".");
        var ce = b({}, C.props), he = C.key, pe = C.ref, we = C._owner;
        if (D != null) {
            if (D.ref !== void 0 && (pe = D.ref, we = P.current), D.key !== void 0 && (he = "" + D.key), C.type && C.type.defaultProps) var ge = C.type.defaultProps;
            for (Te in D) X.call(D, Te) && !K.hasOwnProperty(Te) && (ce[Te] = D[Te] === void 0 && ge !== void 0 ? ge[Te] : D[Te])
        }
        var Te = arguments.length - 2;
        if (Te === 1) ce.children = le; else if (1 < Te) {
            ge = Array(Te);
            for (var ct = 0; ct < Te; ct++) ge[ct] = arguments[ct + 2];
            ce.children = ge
        }
        return {$$typeof: n, type: C.type, key: he, ref: pe, props: ce, _owner: we}
    }, ue.createContext = function (C) {
        return C = {
            $$typeof: d,
            _currentValue: C,
            _currentValue2: C,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, C.Provider = {$$typeof: f, _context: C}, C.Consumer = C
    }, ue.createElement = $, ue.createFactory = function (C) {
        var D = $.bind(null, C);
        return D.type = C, D
    }, ue.createRef = function () {
        return {current: null}
    }, ue.forwardRef = function (C) {
        return {$$typeof: p, render: C}
    }, ue.isValidElement = Z, ue.lazy = function (C) {
        return {$$typeof: y, _payload: {_status: -1, _result: C}, _init: je}
    }, ue.memo = function (C, D) {
        return {$$typeof: v, type: C, compare: D === void 0 ? null : D}
    }, ue.startTransition = function (C) {
        var D = B.transition;
        B.transition = {};
        try {
            C()
        } finally {
            B.transition = D
        }
    }, ue.unstable_act = G, ue.useCallback = function (C, D) {
        return Ee.current.useCallback(C, D)
    }, ue.useContext = function (C) {
        return Ee.current.useContext(C)
    }, ue.useDebugValue = function () {
    }, ue.useDeferredValue = function (C) {
        return Ee.current.useDeferredValue(C)
    }, ue.useEffect = function (C, D) {
        return Ee.current.useEffect(C, D)
    }, ue.useId = function () {
        return Ee.current.useId()
    }, ue.useImperativeHandle = function (C, D, le) {
        return Ee.current.useImperativeHandle(C, D, le)
    }, ue.useInsertionEffect = function (C, D) {
        return Ee.current.useInsertionEffect(C, D)
    }, ue.useLayoutEffect = function (C, D) {
        return Ee.current.useLayoutEffect(C, D)
    }, ue.useMemo = function (C, D) {
        return Ee.current.useMemo(C, D)
    }, ue.useReducer = function (C, D, le) {
        return Ee.current.useReducer(C, D, le)
    }, ue.useRef = function (C) {
        return Ee.current.useRef(C)
    }, ue.useState = function (C) {
        return Ee.current.useState(C)
    }, ue.useSyncExternalStore = function (C, D, le) {
        return Ee.current.useSyncExternalStore(C, D, le)
    }, ue.useTransition = function () {
        return Ee.current.useTransition()
    }, ue.version = "18.3.1", ue
}

var Rf;

function au() {
    return Rf || (Rf = 1, fl.exports = ty()), fl.exports
}

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df;

function ny() {
    if (Df) return ci;
    Df = 1;
    var n = au(), r = Symbol.for("react.element"), s = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty, u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {key: !0, ref: !0, __self: !0, __source: !0};

    function d(p, g, v) {
        var y, x = {}, S = null, N = null;
        v !== void 0 && (S = "" + v), g.key !== void 0 && (S = "" + g.key), g.ref !== void 0 && (N = g.ref);
        for (y in g) a.call(g, y) && !f.hasOwnProperty(y) && (x[y] = g[y]);
        if (p && p.defaultProps) for (y in g = p.defaultProps, g) x[y] === void 0 && (x[y] = g[y]);
        return {$$typeof: r, type: p, key: S, ref: N, props: x, _owner: u.current}
    }

    return ci.Fragment = s, ci.jsx = d, ci.jsxs = d, ci
}

var Vf;

function ry() {
    return Vf || (Vf = 1, dl.exports = ny()), dl.exports
}

var h = ry(), Is = {}, hl = {exports: {}}, ut = {}, pl = {exports: {}}, ml = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lf;

function iy() {
    return Lf || (Lf = 1, (function (n) {
        function r(B, ee) {
            var G = B.length;
            B.push(ee);
            e:for (; 0 < G;) {
                var C = G - 1 >>> 1, D = B[C];
                if (0 < u(D, ee)) B[C] = ee, B[G] = D, G = C; else break e
            }
        }

        function s(B) {
            return B.length === 0 ? null : B[0]
        }

        function a(B) {
            if (B.length === 0) return null;
            var ee = B[0], G = B.pop();
            if (G !== ee) {
                B[0] = G;
                e:for (var C = 0, D = B.length, le = D >>> 1; C < le;) {
                    var ce = 2 * (C + 1) - 1, he = B[ce], pe = ce + 1, we = B[pe];
                    if (0 > u(he, G)) pe < D && 0 > u(we, he) ? (B[C] = we, B[pe] = G, C = pe) : (B[C] = he, B[ce] = G, C = ce); else if (pe < D && 0 > u(we, G)) B[C] = we, B[pe] = G, C = pe; else break e
                }
            }
            return ee
        }

        function u(B, ee) {
            var G = B.sortIndex - ee.sortIndex;
            return G !== 0 ? G : B.id - ee.id
        }

        if (typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            n.unstable_now = function () {
                return f.now()
            }
        } else {
            var d = Date, p = d.now();
            n.unstable_now = function () {
                return d.now() - p
            }
        }
        var g = [], v = [], y = 1, x = null, S = 3, N = !1, b = !1, A = !1,
            z = typeof setTimeout == "function" ? setTimeout : null,
            R = typeof clearTimeout == "function" ? clearTimeout : null,
            U = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function I(B) {
            for (var ee = s(v); ee !== null;) {
                if (ee.callback === null) a(v); else if (ee.startTime <= B) a(v), ee.sortIndex = ee.expirationTime, r(g, ee); else break;
                ee = s(v)
            }
        }

        function F(B) {
            if (A = !1, I(B), !b) if (s(g) !== null) b = !0, je(X); else {
                var ee = s(v);
                ee !== null && Ee(F, ee.startTime - B)
            }
        }

        function X(B, ee) {
            b = !1, A && (A = !1, R($), $ = -1), N = !0;
            var G = S;
            try {
                for (I(ee), x = s(g); x !== null && (!(x.expirationTime > ee) || B && !O());) {
                    var C = x.callback;
                    if (typeof C == "function") {
                        x.callback = null, S = x.priorityLevel;
                        var D = C(x.expirationTime <= ee);
                        ee = n.unstable_now(), typeof D == "function" ? x.callback = D : x === s(g) && a(g), I(ee)
                    } else a(g);
                    x = s(g)
                }
                if (x !== null) var le = !0; else {
                    var ce = s(v);
                    ce !== null && Ee(F, ce.startTime - ee), le = !1
                }
                return le
            } finally {
                x = null, S = G, N = !1
            }
        }

        var P = !1, K = null, $ = -1, se = 5, Z = -1;

        function O() {
            return !(n.unstable_now() - Z < se)
        }

        function ae() {
            if (K !== null) {
                var B = n.unstable_now();
                Z = B;
                var ee = !0;
                try {
                    ee = K(!0, B)
                } finally {
                    ee ? ke() : (P = !1, K = null)
                }
            } else P = !1
        }

        var ke;
        if (typeof U == "function") ke = function () {
            U(ae)
        }; else if (typeof MessageChannel < "u") {
            var ze = new MessageChannel, Le = ze.port2;
            ze.port1.onmessage = ae, ke = function () {
                Le.postMessage(null)
            }
        } else ke = function () {
            z(ae, 0)
        };

        function je(B) {
            K = B, P || (P = !0, ke())
        }

        function Ee(B, ee) {
            $ = z(function () {
                B(n.unstable_now())
            }, ee)
        }

        n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function (B) {
            B.callback = null
        }, n.unstable_continueExecution = function () {
            b || N || (b = !0, je(X))
        }, n.unstable_forceFrameRate = function (B) {
            0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : se = 0 < B ? Math.floor(1e3 / B) : 5
        }, n.unstable_getCurrentPriorityLevel = function () {
            return S
        }, n.unstable_getFirstCallbackNode = function () {
            return s(g)
        }, n.unstable_next = function (B) {
            switch (S) {
                case 1:
                case 2:
                case 3:
                    var ee = 3;
                    break;
                default:
                    ee = S
            }
            var G = S;
            S = ee;
            try {
                return B()
            } finally {
                S = G
            }
        }, n.unstable_pauseExecution = function () {
        }, n.unstable_requestPaint = function () {
        }, n.unstable_runWithPriority = function (B, ee) {
            switch (B) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    B = 3
            }
            var G = S;
            S = B;
            try {
                return ee()
            } finally {
                S = G
            }
        }, n.unstable_scheduleCallback = function (B, ee, G) {
            var C = n.unstable_now();
            switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? C + G : C) : G = C, B) {
                case 1:
                    var D = -1;
                    break;
                case 2:
                    D = 250;
                    break;
                case 5:
                    D = 1073741823;
                    break;
                case 4:
                    D = 1e4;
                    break;
                default:
                    D = 5e3
            }
            return D = G + D, B = {
                id: y++,
                callback: ee,
                priorityLevel: B,
                startTime: G,
                expirationTime: D,
                sortIndex: -1
            }, G > C ? (B.sortIndex = G, r(v, B), s(g) === null && B === s(v) && (A ? (R($), $ = -1) : A = !0, Ee(F, G - C))) : (B.sortIndex = D, r(g, B), b || N || (b = !0, je(X))), B
        }, n.unstable_shouldYield = O, n.unstable_wrapCallback = function (B) {
            var ee = S;
            return function () {
                var G = S;
                S = ee;
                try {
                    return B.apply(this, arguments)
                } finally {
                    S = G
                }
            }
        }
    })(ml)), ml
}

var _f;

function sy() {
    return _f || (_f = 1, pl.exports = iy()), pl.exports
}

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var If;

function oy() {
    if (If) return ut;
    If = 1;
    var n = au(), r = sy();

    function s(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) t += "&args[]=" + encodeURIComponent(arguments[i]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    var a = new Set, u = {};

    function f(e, t) {
        d(e, t), d(e + "Capture", t)
    }

    function d(e, t) {
        for (u[e] = t, e = 0; e < t.length; e++) a.add(t[e])
    }

    var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        g = Object.prototype.hasOwnProperty,
        v = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        y = {}, x = {};

    function S(e) {
        return g.call(x, e) ? !0 : g.call(y, e) ? !1 : v.test(e) ? x[e] = !0 : (y[e] = !0, !1)
    }

    function N(e, t, i, o) {
        if (i !== null && i.type === 0) return !1;
        switch (typeof t) {
            case"function":
            case"symbol":
                return !0;
            case"boolean":
                return o ? !1 : i !== null ? !i.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
            default:
                return !1
        }
    }

    function b(e, t, i, o) {
        if (t === null || typeof t > "u" || N(e, t, i, o)) return !0;
        if (o) return !1;
        if (i !== null) switch (i.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
        return !1
    }

    function A(e, t, i, o, l, c, m) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = o, this.attributeNamespace = l, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = m
    }

    var z = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
        z[e] = new A(e, 0, !1, e, null, !1, !1)
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
        var t = e[0];
        z[t] = new A(t, 1, !1, e[1], null, !1, !1)
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
        z[e] = new A(e, 2, !1, e.toLowerCase(), null, !1, !1)
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
        z[e] = new A(e, 2, !1, e, null, !1, !1)
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
        z[e] = new A(e, 3, !1, e.toLowerCase(), null, !1, !1)
    }), ["checked", "multiple", "muted", "selected"].forEach(function (e) {
        z[e] = new A(e, 3, !0, e, null, !1, !1)
    }), ["capture", "download"].forEach(function (e) {
        z[e] = new A(e, 4, !1, e, null, !1, !1)
    }), ["cols", "rows", "size", "span"].forEach(function (e) {
        z[e] = new A(e, 6, !1, e, null, !1, !1)
    }), ["rowSpan", "start"].forEach(function (e) {
        z[e] = new A(e, 5, !1, e.toLowerCase(), null, !1, !1)
    });
    var R = /[\-:]([a-z])/g;

    function U(e) {
        return e[1].toUpperCase()
    }

    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
        var t = e.replace(R, U);
        z[t] = new A(t, 1, !1, e, null, !1, !1)
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
        var t = e.replace(R, U);
        z[t] = new A(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
        var t = e.replace(R, U);
        z[t] = new A(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
    }), ["tabIndex", "crossOrigin"].forEach(function (e) {
        z[e] = new A(e, 1, !1, e.toLowerCase(), null, !1, !1)
    }), z.xlinkHref = new A("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function (e) {
        z[e] = new A(e, 1, !1, e.toLowerCase(), null, !0, !0)
    });

    function I(e, t, i, o) {
        var l = z.hasOwnProperty(t) ? z[t] : null;
        (l !== null ? l.type !== 0 : o || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (b(t, i, l, o) && (i = null), o || l === null ? S(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i)) : l.mustUseProperty ? e[l.propertyName] = i === null ? l.type === 3 ? !1 : "" : i : (t = l.attributeName, o = l.attributeNamespace, i === null ? e.removeAttribute(t) : (l = l.type, i = l === 3 || l === 4 && i === !0 ? "" : "" + i, o ? e.setAttributeNS(o, t, i) : e.setAttribute(t, i))))
    }

    var F = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, X = Symbol.for("react.element"),
        P = Symbol.for("react.portal"), K = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"),
        se = Symbol.for("react.profiler"), Z = Symbol.for("react.provider"), O = Symbol.for("react.context"),
        ae = Symbol.for("react.forward_ref"), ke = Symbol.for("react.suspense"), ze = Symbol.for("react.suspense_list"),
        Le = Symbol.for("react.memo"), je = Symbol.for("react.lazy"), Ee = Symbol.for("react.offscreen"),
        B = Symbol.iterator;

    function ee(e) {
        return e === null || typeof e != "object" ? null : (e = B && e[B] || e["@@iterator"], typeof e == "function" ? e : null)
    }

    var G = Object.assign, C;

    function D(e) {
        if (C === void 0) try {
            throw Error()
        } catch (i) {
            var t = i.stack.trim().match(/\n( *(at )?)/);
            C = t && t[1] || ""
        }
        return `
` + C + e
    }

    var le = !1;

    function ce(e, t) {
        if (!e || le) return "";
        le = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t) if (t = function () {
                throw Error()
            }, Object.defineProperty(t.prototype, "props", {
                set: function () {
                    throw Error()
                }
            }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (M) {
                    var o = M
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (M) {
                    o = M
                }
                e.call(t.prototype)
            } else {
                try {
                    throw Error()
                } catch (M) {
                    o = M
                }
                e()
            }
        } catch (M) {
            if (M && o && typeof M.stack == "string") {
                for (var l = M.stack.split(`
`), c = o.stack.split(`
`), m = l.length - 1, w = c.length - 1; 1 <= m && 0 <= w && l[m] !== c[w];) w--;
                for (; 1 <= m && 0 <= w; m--, w--) if (l[m] !== c[w]) {
                    if (m !== 1 || w !== 1) do if (m--, w--, 0 > w || l[m] !== c[w]) {
                        var k = `
` + l[m].replace(" at new ", " at ");
                        return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), k
                    } while (1 <= m && 0 <= w);
                    break
                }
            }
        } finally {
            le = !1, Error.prepareStackTrace = i
        }
        return (e = e ? e.displayName || e.name : "") ? D(e) : ""
    }

    function he(e) {
        switch (e.tag) {
            case 5:
                return D(e.type);
            case 16:
                return D("Lazy");
            case 13:
                return D("Suspense");
            case 19:
                return D("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = ce(e.type, !1), e;
            case 11:
                return e = ce(e.type.render, !1), e;
            case 1:
                return e = ce(e.type, !0), e;
            default:
                return ""
        }
    }

    function pe(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case K:
                return "Fragment";
            case P:
                return "Portal";
            case se:
                return "Profiler";
            case $:
                return "StrictMode";
            case ke:
                return "Suspense";
            case ze:
                return "SuspenseList"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case O:
                return (e.displayName || "Context") + ".Consumer";
            case Z:
                return (e._context.displayName || "Context") + ".Provider";
            case ae:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Le:
                return t = e.displayName || null, t !== null ? t : pe(e.type) || "Memo";
            case je:
                t = e._payload, e = e._init;
                try {
                    return pe(e(t))
                } catch {
                }
        }
        return null
    }

    function we(e) {
        var t = e.type;
        switch (e.tag) {
            case 24:
                return "Cache";
            case 9:
                return (t.displayName || "Context") + ".Consumer";
            case 10:
                return (t._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return t;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return pe(t);
            case 8:
                return t === $ ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof t == "function") return t.displayName || t.name || null;
                if (typeof t == "string") return t
        }
        return null
    }

    function ge(e) {
        switch (typeof e) {
            case"boolean":
            case"number":
            case"string":
            case"undefined":
                return e;
            case"object":
                return e;
            default:
                return ""
        }
    }

    function Te(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function ct(e) {
        var t = Te(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            o = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
            var l = i.get, c = i.set;
            return Object.defineProperty(e, t, {
                configurable: !0, get: function () {
                    return l.call(this)
                }, set: function (m) {
                    o = "" + m, c.call(this, m)
                }
            }), Object.defineProperty(e, t, {enumerable: i.enumerable}), {
                getValue: function () {
                    return o
                }, setValue: function (m) {
                    o = "" + m
                }, stopTracking: function () {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }

    function Ei(e) {
        e._valueTracker || (e._valueTracker = ct(e))
    }

    function _u(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var i = t.getValue(), o = "";
        return e && (o = Te(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== i ? (t.setValue(e), !0) : !1
    }

    function Mi(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }

    function vo(e, t) {
        var i = t.checked;
        return G({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: i ?? e._wrapperState.initialChecked
        })
    }

    function Iu(e, t) {
        var i = t.defaultValue == null ? "" : t.defaultValue, o = t.checked != null ? t.checked : t.defaultChecked;
        i = ge(t.value != null ? t.value : i), e._wrapperState = {
            initialChecked: o,
            initialValue: i,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
    }

    function Ou(e, t) {
        t = t.checked, t != null && I(e, "checked", t, !1)
    }

    function xo(e, t) {
        Ou(e, t);
        var i = ge(t.value), o = t.type;
        if (i != null) o === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + i) : e.value !== "" + i && (e.value = "" + i); else if (o === "submit" || o === "reset") {
            e.removeAttribute("value");
            return
        }
        t.hasOwnProperty("value") ? wo(e, t.type, i) : t.hasOwnProperty("defaultValue") && wo(e, t.type, ge(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }

    function Fu(e, t, i) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var o = t.type;
            if (!(o !== "submit" && o !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, i || t === e.value || (e.value = t), e.defaultValue = t
        }
        i = e.name, i !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, i !== "" && (e.name = i)
    }

    function wo(e, t, i) {
        (t !== "number" || Mi(e.ownerDocument) !== e) && (i == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + i && (e.defaultValue = "" + i))
    }

    var Nr = Array.isArray;

    function $n(e, t, i, o) {
        if (e = e.options, t) {
            t = {};
            for (var l = 0; l < i.length; l++) t["$" + i[l]] = !0;
            for (i = 0; i < e.length; i++) l = t.hasOwnProperty("$" + e[i].value), e[i].selected !== l && (e[i].selected = l), l && o && (e[i].defaultSelected = !0)
        } else {
            for (i = "" + ge(i), t = null, l = 0; l < e.length; l++) {
                if (e[l].value === i) {
                    e[l].selected = !0, o && (e[l].defaultSelected = !0);
                    return
                }
                t !== null || e[l].disabled || (t = e[l])
            }
            t !== null && (t.selected = !0)
        }
    }

    function So(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
        return G({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
    }

    function Bu(e, t) {
        var i = t.value;
        if (i == null) {
            if (i = t.children, t = t.defaultValue, i != null) {
                if (t != null) throw Error(s(92));
                if (Nr(i)) {
                    if (1 < i.length) throw Error(s(93));
                    i = i[0]
                }
                t = i
            }
            t == null && (t = ""), i = t
        }
        e._wrapperState = {initialValue: ge(i)}
    }

    function Wu(e, t) {
        var i = ge(t.value), o = ge(t.defaultValue);
        i != null && (i = "" + i, i !== e.value && (e.value = i), t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)), o != null && (e.defaultValue = "" + o)
    }

    function Uu(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }

    function $u(e) {
        switch (e) {
            case"svg":
                return "http://www.w3.org/2000/svg";
            case"math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function ko(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? $u(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }

    var bi, Hu = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, i, o, l) {
            MSApp.execUnsafeLocalFunction(function () {
                return e(t, i, o, l)
            })
        } : e
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t; else {
            for (bi = bi || document.createElement("div"), bi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = bi.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild)
        }
    });

    function Tr(e, t) {
        if (t) {
            var i = e.firstChild;
            if (i && i === e.lastChild && i.nodeType === 3) {
                i.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }

    var Pr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }, s0 = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Pr).forEach(function (e) {
        s0.forEach(function (t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), Pr[t] = Pr[e]
        })
    });

    function Ku(e, t, i) {
        return t == null || typeof t == "boolean" || t === "" ? "" : i || typeof t != "number" || t === 0 || Pr.hasOwnProperty(e) && Pr[e] ? ("" + t).trim() : t + "px"
    }

    function Gu(e, t) {
        e = e.style;
        for (var i in t) if (t.hasOwnProperty(i)) {
            var o = i.indexOf("--") === 0, l = Ku(i, t[i], o);
            i === "float" && (i = "cssFloat"), o ? e.setProperty(i, l) : e[i] = l
        }
    }

    var o0 = G({menuitem: !0}, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function jo(e, t) {
        if (t) {
            if (o0[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(s(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61))
            }
            if (t.style != null && typeof t.style != "object") throw Error(s(62))
        }
    }

    function Co(e, t) {
        if (e.indexOf("-") === -1) return typeof t.is == "string";
        switch (e) {
            case"annotation-xml":
            case"color-profile":
            case"font-face":
            case"font-face-src":
            case"font-face-uri":
            case"font-face-format":
            case"font-face-name":
            case"missing-glyph":
                return !1;
            default:
                return !0
        }
    }

    var No = null;

    function To(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }

    var Po = null, Hn = null, Kn = null;

    function Qu(e) {
        if (e = Xr(e)) {
            if (typeof Po != "function") throw Error(s(280));
            var t = e.stateNode;
            t && (t = Ji(t), Po(e.stateNode, e.type, t))
        }
    }

    function Xu(e) {
        Hn ? Kn ? Kn.push(e) : Kn = [e] : Hn = e
    }

    function Yu() {
        if (Hn) {
            var e = Hn, t = Kn;
            if (Kn = Hn = null, Qu(e), t) for (e = 0; e < t.length; e++) Qu(t[e])
        }
    }

    function Zu(e, t) {
        return e(t)
    }

    function qu() {
    }

    var Eo = !1;

    function Ju(e, t, i) {
        if (Eo) return e(t, i);
        Eo = !0;
        try {
            return Zu(e, t, i)
        } finally {
            Eo = !1, (Hn !== null || Kn !== null) && (qu(), Yu())
        }
    }

    function Er(e, t) {
        var i = e.stateNode;
        if (i === null) return null;
        var o = Ji(i);
        if (o === null) return null;
        i = o[t];
        e:switch (t) {
            case"onClick":
            case"onClickCapture":
            case"onDoubleClick":
            case"onDoubleClickCapture":
            case"onMouseDown":
            case"onMouseDownCapture":
            case"onMouseMove":
            case"onMouseMoveCapture":
            case"onMouseUp":
            case"onMouseUpCapture":
            case"onMouseEnter":
                (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (i && typeof i != "function") throw Error(s(231, t, typeof i));
        return i
    }

    var Mo = !1;
    if (p) try {
        var Mr = {};
        Object.defineProperty(Mr, "passive", {
            get: function () {
                Mo = !0
            }
        }), window.addEventListener("test", Mr, Mr), window.removeEventListener("test", Mr, Mr)
    } catch {
        Mo = !1
    }

    function a0(e, t, i, o, l, c, m, w, k) {
        var M = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(i, M)
        } catch (L) {
            this.onError(L)
        }
    }

    var br = !1, zi = null, Ai = !1, bo = null, l0 = {
        onError: function (e) {
            br = !0, zi = e
        }
    };

    function u0(e, t, i, o, l, c, m, w, k) {
        br = !1, zi = null, a0.apply(l0, arguments)
    }

    function c0(e, t, i, o, l, c, m, w, k) {
        if (u0.apply(this, arguments), br) {
            if (br) {
                var M = zi;
                br = !1, zi = null
            } else throw Error(s(198));
            Ai || (Ai = !0, bo = M)
        }
    }

    function Cn(e) {
        var t = e, i = e;
        if (e.alternate) for (; t.return;) t = t.return; else {
            e = t;
            do t = e, (t.flags & 4098) !== 0 && (i = t.return), e = t.return; while (e)
        }
        return t.tag === 3 ? i : null
    }

    function ec(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function tc(e) {
        if (Cn(e) !== e) throw Error(s(188))
    }

    function d0(e) {
        var t = e.alternate;
        if (!t) {
            if (t = Cn(e), t === null) throw Error(s(188));
            return t !== e ? null : e
        }
        for (var i = e, o = t; ;) {
            var l = i.return;
            if (l === null) break;
            var c = l.alternate;
            if (c === null) {
                if (o = l.return, o !== null) {
                    i = o;
                    continue
                }
                break
            }
            if (l.child === c.child) {
                for (c = l.child; c;) {
                    if (c === i) return tc(l), e;
                    if (c === o) return tc(l), t;
                    c = c.sibling
                }
                throw Error(s(188))
            }
            if (i.return !== o.return) i = l, o = c; else {
                for (var m = !1, w = l.child; w;) {
                    if (w === i) {
                        m = !0, i = l, o = c;
                        break
                    }
                    if (w === o) {
                        m = !0, o = l, i = c;
                        break
                    }
                    w = w.sibling
                }
                if (!m) {
                    for (w = c.child; w;) {
                        if (w === i) {
                            m = !0, i = c, o = l;
                            break
                        }
                        if (w === o) {
                            m = !0, o = c, i = l;
                            break
                        }
                        w = w.sibling
                    }
                    if (!m) throw Error(s(189))
                }
            }
            if (i.alternate !== o) throw Error(s(190))
        }
        if (i.tag !== 3) throw Error(s(188));
        return i.stateNode.current === i ? e : t
    }

    function nc(e) {
        return e = d0(e), e !== null ? rc(e) : null
    }

    function rc(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null;) {
            var t = rc(e);
            if (t !== null) return t;
            e = e.sibling
        }
        return null
    }

    var ic = r.unstable_scheduleCallback, sc = r.unstable_cancelCallback, f0 = r.unstable_shouldYield,
        h0 = r.unstable_requestPaint, De = r.unstable_now, p0 = r.unstable_getCurrentPriorityLevel,
        zo = r.unstable_ImmediatePriority, oc = r.unstable_UserBlockingPriority, Ri = r.unstable_NormalPriority,
        m0 = r.unstable_LowPriority, ac = r.unstable_IdlePriority, Di = null, Dt = null;

    function g0(e) {
        if (Dt && typeof Dt.onCommitFiberRoot == "function") try {
            Dt.onCommitFiberRoot(Di, e, void 0, (e.current.flags & 128) === 128)
        } catch {
        }
    }

    var Ct = Math.clz32 ? Math.clz32 : x0, y0 = Math.log, v0 = Math.LN2;

    function x0(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (y0(e) / v0 | 0) | 0
    }

    var Vi = 64, Li = 4194304;

    function zr(e) {
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return e & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return e
        }
    }

    function _i(e, t) {
        var i = e.pendingLanes;
        if (i === 0) return 0;
        var o = 0, l = e.suspendedLanes, c = e.pingedLanes, m = i & 268435455;
        if (m !== 0) {
            var w = m & ~l;
            w !== 0 ? o = zr(w) : (c &= m, c !== 0 && (o = zr(c)))
        } else m = i & ~l, m !== 0 ? o = zr(m) : c !== 0 && (o = zr(c));
        if (o === 0) return 0;
        if (t !== 0 && t !== o && (t & l) === 0 && (l = o & -o, c = t & -t, l >= c || l === 16 && (c & 4194240) !== 0)) return t;
        if ((o & 4) !== 0 && (o |= i & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= o; 0 < t;) i = 31 - Ct(t), l = 1 << i, o |= e[i], t &= ~l;
        return o
    }

    function w0(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
                return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function S0(e, t) {
        for (var i = e.suspendedLanes, o = e.pingedLanes, l = e.expirationTimes, c = e.pendingLanes; 0 < c;) {
            var m = 31 - Ct(c), w = 1 << m, k = l[m];
            k === -1 ? ((w & i) === 0 || (w & o) !== 0) && (l[m] = w0(w, t)) : k <= t && (e.expiredLanes |= w), c &= ~w
        }
    }

    function Ao(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }

    function lc() {
        var e = Vi;
        return Vi <<= 1, (Vi & 4194240) === 0 && (Vi = 64), e
    }

    function Ro(e) {
        for (var t = [], i = 0; 31 > i; i++) t.push(e);
        return t
    }

    function Ar(e, t, i) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ct(t), e[t] = i
    }

    function k0(e, t) {
        var i = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var o = e.eventTimes;
        for (e = e.expirationTimes; 0 < i;) {
            var l = 31 - Ct(i), c = 1 << l;
            t[l] = 0, o[l] = -1, e[l] = -1, i &= ~c
        }
    }

    function Do(e, t) {
        var i = e.entangledLanes |= t;
        for (e = e.entanglements; i;) {
            var o = 31 - Ct(i), l = 1 << o;
            l & t | e[o] & t && (e[o] |= t), i &= ~l
        }
    }

    var ye = 0;

    function uc(e) {
        return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }

    var cc, Vo, dc, fc, hc, Lo = !1, Ii = [], Jt = null, en = null, tn = null, Rr = new Map, Dr = new Map, nn = [],
        j0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function pc(e, t) {
        switch (e) {
            case"focusin":
            case"focusout":
                Jt = null;
                break;
            case"dragenter":
            case"dragleave":
                en = null;
                break;
            case"mouseover":
            case"mouseout":
                tn = null;
                break;
            case"pointerover":
            case"pointerout":
                Rr.delete(t.pointerId);
                break;
            case"gotpointercapture":
            case"lostpointercapture":
                Dr.delete(t.pointerId)
        }
    }

    function Vr(e, t, i, o, l, c) {
        return e === null || e.nativeEvent !== c ? (e = {
            blockedOn: t,
            domEventName: i,
            eventSystemFlags: o,
            nativeEvent: c,
            targetContainers: [l]
        }, t !== null && (t = Xr(t), t !== null && Vo(t)), e) : (e.eventSystemFlags |= o, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
    }

    function C0(e, t, i, o, l) {
        switch (t) {
            case"focusin":
                return Jt = Vr(Jt, e, t, i, o, l), !0;
            case"dragenter":
                return en = Vr(en, e, t, i, o, l), !0;
            case"mouseover":
                return tn = Vr(tn, e, t, i, o, l), !0;
            case"pointerover":
                var c = l.pointerId;
                return Rr.set(c, Vr(Rr.get(c) || null, e, t, i, o, l)), !0;
            case"gotpointercapture":
                return c = l.pointerId, Dr.set(c, Vr(Dr.get(c) || null, e, t, i, o, l)), !0
        }
        return !1
    }

    function mc(e) {
        var t = Nn(e.target);
        if (t !== null) {
            var i = Cn(t);
            if (i !== null) {
                if (t = i.tag, t === 13) {
                    if (t = ec(i), t !== null) {
                        e.blockedOn = t, hc(e.priority, function () {
                            dc(i)
                        });
                        return
                    }
                } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function Oi(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var i = Io(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (i === null) {
                i = e.nativeEvent;
                var o = new i.constructor(i.type, i);
                No = o, i.target.dispatchEvent(o), No = null
            } else return t = Xr(i), t !== null && Vo(t), e.blockedOn = i, !1;
            t.shift()
        }
        return !0
    }

    function gc(e, t, i) {
        Oi(e) && i.delete(t)
    }

    function N0() {
        Lo = !1, Jt !== null && Oi(Jt) && (Jt = null), en !== null && Oi(en) && (en = null), tn !== null && Oi(tn) && (tn = null), Rr.forEach(gc), Dr.forEach(gc)
    }

    function Lr(e, t) {
        e.blockedOn === t && (e.blockedOn = null, Lo || (Lo = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, N0)))
    }

    function _r(e) {
        function t(l) {
            return Lr(l, e)
        }

        if (0 < Ii.length) {
            Lr(Ii[0], e);
            for (var i = 1; i < Ii.length; i++) {
                var o = Ii[i];
                o.blockedOn === e && (o.blockedOn = null)
            }
        }
        for (Jt !== null && Lr(Jt, e), en !== null && Lr(en, e), tn !== null && Lr(tn, e), Rr.forEach(t), Dr.forEach(t), i = 0; i < nn.length; i++) o = nn[i], o.blockedOn === e && (o.blockedOn = null);
        for (; 0 < nn.length && (i = nn[0], i.blockedOn === null);) mc(i), i.blockedOn === null && nn.shift()
    }

    var Gn = F.ReactCurrentBatchConfig, Fi = !0;

    function T0(e, t, i, o) {
        var l = ye, c = Gn.transition;
        Gn.transition = null;
        try {
            ye = 1, _o(e, t, i, o)
        } finally {
            ye = l, Gn.transition = c
        }
    }

    function P0(e, t, i, o) {
        var l = ye, c = Gn.transition;
        Gn.transition = null;
        try {
            ye = 4, _o(e, t, i, o)
        } finally {
            ye = l, Gn.transition = c
        }
    }

    function _o(e, t, i, o) {
        if (Fi) {
            var l = Io(e, t, i, o);
            if (l === null) ta(e, t, o, Bi, i), pc(e, o); else if (C0(l, e, t, i, o)) o.stopPropagation(); else if (pc(e, o), t & 4 && -1 < j0.indexOf(e)) {
                for (; l !== null;) {
                    var c = Xr(l);
                    if (c !== null && cc(c), c = Io(e, t, i, o), c === null && ta(e, t, o, Bi, i), c === l) break;
                    l = c
                }
                l !== null && o.stopPropagation()
            } else ta(e, t, o, null, i)
        }
    }

    var Bi = null;

    function Io(e, t, i, o) {
        if (Bi = null, e = To(o), e = Nn(e), e !== null) if (t = Cn(e), t === null) e = null; else if (i = t.tag, i === 13) {
            if (e = ec(t), e !== null) return e;
            e = null
        } else if (i === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else t !== e && (e = null);
        return Bi = e, null
    }

    function yc(e) {
        switch (e) {
            case"cancel":
            case"click":
            case"close":
            case"contextmenu":
            case"copy":
            case"cut":
            case"auxclick":
            case"dblclick":
            case"dragend":
            case"dragstart":
            case"drop":
            case"focusin":
            case"focusout":
            case"input":
            case"invalid":
            case"keydown":
            case"keypress":
            case"keyup":
            case"mousedown":
            case"mouseup":
            case"paste":
            case"pause":
            case"play":
            case"pointercancel":
            case"pointerdown":
            case"pointerup":
            case"ratechange":
            case"reset":
            case"resize":
            case"seeked":
            case"submit":
            case"touchcancel":
            case"touchend":
            case"touchstart":
            case"volumechange":
            case"change":
            case"selectionchange":
            case"textInput":
            case"compositionstart":
            case"compositionend":
            case"compositionupdate":
            case"beforeblur":
            case"afterblur":
            case"beforeinput":
            case"blur":
            case"fullscreenchange":
            case"focus":
            case"hashchange":
            case"popstate":
            case"select":
            case"selectstart":
                return 1;
            case"drag":
            case"dragenter":
            case"dragexit":
            case"dragleave":
            case"dragover":
            case"mousemove":
            case"mouseout":
            case"mouseover":
            case"pointermove":
            case"pointerout":
            case"pointerover":
            case"scroll":
            case"toggle":
            case"touchmove":
            case"wheel":
            case"mouseenter":
            case"mouseleave":
            case"pointerenter":
            case"pointerleave":
                return 4;
            case"message":
                switch (p0()) {
                    case zo:
                        return 1;
                    case oc:
                        return 4;
                    case Ri:
                    case m0:
                        return 16;
                    case ac:
                        return 536870912;
                    default:
                        return 16
                }
            default:
                return 16
        }
    }

    var rn = null, Oo = null, Wi = null;

    function vc() {
        if (Wi) return Wi;
        var e, t = Oo, i = t.length, o, l = "value" in rn ? rn.value : rn.textContent, c = l.length;
        for (e = 0; e < i && t[e] === l[e]; e++) ;
        var m = i - e;
        for (o = 1; o <= m && t[i - o] === l[c - o]; o++) ;
        return Wi = l.slice(e, 1 < o ? 1 - o : void 0)
    }

    function Ui(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function $i() {
        return !0
    }

    function xc() {
        return !1
    }

    function dt(e) {
        function t(i, o, l, c, m) {
            this._reactName = i, this._targetInst = l, this.type = o, this.nativeEvent = c, this.target = m, this.currentTarget = null;
            for (var w in e) e.hasOwnProperty(w) && (i = e[w], this[w] = i ? i(c) : c[w]);
            return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? $i : xc, this.isPropagationStopped = xc, this
        }

        return G(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var i = this.nativeEvent;
                i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = $i)
            }, stopPropagation: function () {
                var i = this.nativeEvent;
                i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = $i)
            }, persist: function () {
            }, isPersistent: $i
        }), t
    }

    var Qn = {
            eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) {
                return e.timeStamp || Date.now()
            }, defaultPrevented: 0, isTrusted: 0
        }, Fo = dt(Qn), Ir = G({}, Qn, {view: 0, detail: 0}), E0 = dt(Ir), Bo, Wo, Or, Hi = G({}, Ir, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: $o,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function (e) {
                return "movementX" in e ? e.movementX : (e !== Or && (Or && e.type === "mousemove" ? (Bo = e.screenX - Or.screenX, Wo = e.screenY - Or.screenY) : Wo = Bo = 0, Or = e), Bo)
            },
            movementY: function (e) {
                return "movementY" in e ? e.movementY : Wo
            }
        }), wc = dt(Hi), M0 = G({}, Hi, {dataTransfer: 0}), b0 = dt(M0), z0 = G({}, Ir, {relatedTarget: 0}), Uo = dt(z0),
        A0 = G({}, Qn, {animationName: 0, elapsedTime: 0, pseudoElement: 0}), R0 = dt(A0), D0 = G({}, Qn, {
            clipboardData: function (e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }), V0 = dt(D0), L0 = G({}, Qn, {data: 0}), Sc = dt(L0), _0 = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        }, I0 = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        }, O0 = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

    function F0(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = O0[e]) ? !!t[e] : !1
    }

    function $o() {
        return F0
    }

    var B0 = G({}, Ir, {
        key: function (e) {
            if (e.key) {
                var t = _0[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Ui(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? I0[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: $o,
        charCode: function (e) {
            return e.type === "keypress" ? Ui(e) : 0
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function (e) {
            return e.type === "keypress" ? Ui(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }), W0 = dt(B0), U0 = G({}, Hi, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }), kc = dt(U0), $0 = G({}, Ir, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: $o
    }), H0 = dt($0), K0 = G({}, Qn, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}), G0 = dt(K0), Q0 = G({}, Hi, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        }, deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        }, deltaZ: 0, deltaMode: 0
    }), X0 = dt(Q0), Y0 = [9, 13, 27, 32], Ho = p && "CompositionEvent" in window, Fr = null;
    p && "documentMode" in document && (Fr = document.documentMode);
    var Z0 = p && "TextEvent" in window && !Fr, jc = p && (!Ho || Fr && 8 < Fr && 11 >= Fr), Cc = " ", Nc = !1;

    function Tc(e, t) {
        switch (e) {
            case"keyup":
                return Y0.indexOf(t.keyCode) !== -1;
            case"keydown":
                return t.keyCode !== 229;
            case"keypress":
            case"mousedown":
            case"focusout":
                return !0;
            default:
                return !1
        }
    }

    function Pc(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }

    var Xn = !1;

    function q0(e, t) {
        switch (e) {
            case"compositionend":
                return Pc(t);
            case"keypress":
                return t.which !== 32 ? null : (Nc = !0, Cc);
            case"textInput":
                return e = t.data, e === Cc && Nc ? null : e;
            default:
                return null
        }
    }

    function J0(e, t) {
        if (Xn) return e === "compositionend" || !Ho && Tc(e, t) ? (e = vc(), Wi = Oo = rn = null, Xn = !1, e) : null;
        switch (e) {
            case"paste":
                return null;
            case"keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case"compositionend":
                return jc && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }

    var eg = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Ec(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!eg[e.type] : t === "textarea"
    }

    function Mc(e, t, i, o) {
        Xu(o), t = Yi(t, "onChange"), 0 < t.length && (i = new Fo("onChange", "change", null, i, o), e.push({
            event: i,
            listeners: t
        }))
    }

    var Br = null, Wr = null;

    function tg(e) {
        Gc(e, 0)
    }

    function Ki(e) {
        var t = er(e);
        if (_u(t)) return e
    }

    function ng(e, t) {
        if (e === "change") return t
    }

    var bc = !1;
    if (p) {
        var Ko;
        if (p) {
            var Go = "oninput" in document;
            if (!Go) {
                var zc = document.createElement("div");
                zc.setAttribute("oninput", "return;"), Go = typeof zc.oninput == "function"
            }
            Ko = Go
        } else Ko = !1;
        bc = Ko && (!document.documentMode || 9 < document.documentMode)
    }

    function Ac() {
        Br && (Br.detachEvent("onpropertychange", Rc), Wr = Br = null)
    }

    function Rc(e) {
        if (e.propertyName === "value" && Ki(Wr)) {
            var t = [];
            Mc(t, Wr, e, To(e)), Ju(tg, t)
        }
    }

    function rg(e, t, i) {
        e === "focusin" ? (Ac(), Br = t, Wr = i, Br.attachEvent("onpropertychange", Rc)) : e === "focusout" && Ac()
    }

    function ig(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ki(Wr)
    }

    function sg(e, t) {
        if (e === "click") return Ki(t)
    }

    function og(e, t) {
        if (e === "input" || e === "change") return Ki(t)
    }

    function ag(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }

    var Nt = typeof Object.is == "function" ? Object.is : ag;

    function Ur(e, t) {
        if (Nt(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var i = Object.keys(e), o = Object.keys(t);
        if (i.length !== o.length) return !1;
        for (o = 0; o < i.length; o++) {
            var l = i[o];
            if (!g.call(t, l) || !Nt(e[l], t[l])) return !1
        }
        return !0
    }

    function Dc(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function Vc(e, t) {
        var i = Dc(e);
        e = 0;
        for (var o; i;) {
            if (i.nodeType === 3) {
                if (o = e + i.textContent.length, e <= t && o >= t) return {node: i, offset: t - e};
                e = o
            }
            e:{
                for (; i;) {
                    if (i.nextSibling) {
                        i = i.nextSibling;
                        break e
                    }
                    i = i.parentNode
                }
                i = void 0
            }
            i = Dc(i)
        }
    }

    function Lc(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Lc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function _c() {
        for (var e = window, t = Mi(); t instanceof e.HTMLIFrameElement;) {
            try {
                var i = typeof t.contentWindow.location.href == "string"
            } catch {
                i = !1
            }
            if (i) e = t.contentWindow; else break;
            t = Mi(e.document)
        }
        return t
    }

    function Qo(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }

    function lg(e) {
        var t = _c(), i = e.focusedElem, o = e.selectionRange;
        if (t !== i && i && i.ownerDocument && Lc(i.ownerDocument.documentElement, i)) {
            if (o !== null && Qo(i)) {
                if (t = o.start, e = o.end, e === void 0 && (e = t), "selectionStart" in i) i.selectionStart = t, i.selectionEnd = Math.min(e, i.value.length); else if (e = (t = i.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var l = i.textContent.length, c = Math.min(o.start, l);
                    o = o.end === void 0 ? c : Math.min(o.end, l), !e.extend && c > o && (l = o, o = c, c = l), l = Vc(i, c);
                    var m = Vc(i, o);
                    l && m && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== m.node || e.focusOffset !== m.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), c > o ? (e.addRange(t), e.extend(m.node, m.offset)) : (t.setEnd(m.node, m.offset), e.addRange(t)))
                }
            }
            for (t = [], e = i; e = e.parentNode;) e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
            for (typeof i.focus == "function" && i.focus(), i = 0; i < t.length; i++) e = t[i], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
        }
    }

    var ug = p && "documentMode" in document && 11 >= document.documentMode, Yn = null, Xo = null, $r = null, Yo = !1;

    function Ic(e, t, i) {
        var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
        Yo || Yn == null || Yn !== Mi(o) || (o = Yn, "selectionStart" in o && Qo(o) ? o = {
            start: o.selectionStart,
            end: o.selectionEnd
        } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset
        }), $r && Ur($r, o) || ($r = o, o = Yi(Xo, "onSelect"), 0 < o.length && (t = new Fo("onSelect", "select", null, t, i), e.push({
            event: t,
            listeners: o
        }), t.target = Yn)))
    }

    function Gi(e, t) {
        var i = {};
        return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i
    }

    var Zn = {
        animationend: Gi("Animation", "AnimationEnd"),
        animationiteration: Gi("Animation", "AnimationIteration"),
        animationstart: Gi("Animation", "AnimationStart"),
        transitionend: Gi("Transition", "TransitionEnd")
    }, Zo = {}, Oc = {};
    p && (Oc = document.createElement("div").style, "AnimationEvent" in window || (delete Zn.animationend.animation, delete Zn.animationiteration.animation, delete Zn.animationstart.animation), "TransitionEvent" in window || delete Zn.transitionend.transition);

    function Qi(e) {
        if (Zo[e]) return Zo[e];
        if (!Zn[e]) return e;
        var t = Zn[e], i;
        for (i in t) if (t.hasOwnProperty(i) && i in Oc) return Zo[e] = t[i];
        return e
    }

    var Fc = Qi("animationend"), Bc = Qi("animationiteration"), Wc = Qi("animationstart"), Uc = Qi("transitionend"),
        $c = new Map,
        Hc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function sn(e, t) {
        $c.set(e, t), f(t, [e])
    }

    for (var qo = 0; qo < Hc.length; qo++) {
        var Jo = Hc[qo], cg = Jo.toLowerCase(), dg = Jo[0].toUpperCase() + Jo.slice(1);
        sn(cg, "on" + dg)
    }
    sn(Fc, "onAnimationEnd"), sn(Bc, "onAnimationIteration"), sn(Wc, "onAnimationStart"), sn("dblclick", "onDoubleClick"), sn("focusin", "onFocus"), sn("focusout", "onBlur"), sn(Uc, "onTransitionEnd"), d("onMouseEnter", ["mouseout", "mouseover"]), d("onMouseLeave", ["mouseout", "mouseover"]), d("onPointerEnter", ["pointerout", "pointerover"]), d("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Hr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        fg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));

    function Kc(e, t, i) {
        var o = e.type || "unknown-event";
        e.currentTarget = i, c0(o, t, void 0, e), e.currentTarget = null
    }

    function Gc(e, t) {
        t = (t & 4) !== 0;
        for (var i = 0; i < e.length; i++) {
            var o = e[i], l = o.event;
            o = o.listeners;
            e:{
                var c = void 0;
                if (t) for (var m = o.length - 1; 0 <= m; m--) {
                    var w = o[m], k = w.instance, M = w.currentTarget;
                    if (w = w.listener, k !== c && l.isPropagationStopped()) break e;
                    Kc(l, w, M), c = k
                } else for (m = 0; m < o.length; m++) {
                    if (w = o[m], k = w.instance, M = w.currentTarget, w = w.listener, k !== c && l.isPropagationStopped()) break e;
                    Kc(l, w, M), c = k
                }
            }
        }
        if (Ai) throw e = bo, Ai = !1, bo = null, e
    }

    function Ce(e, t) {
        var i = t[aa];
        i === void 0 && (i = t[aa] = new Set);
        var o = e + "__bubble";
        i.has(o) || (Qc(t, e, 2, !1), i.add(o))
    }

    function ea(e, t, i) {
        var o = 0;
        t && (o |= 4), Qc(i, e, o, t)
    }

    var Xi = "_reactListening" + Math.random().toString(36).slice(2);

    function Kr(e) {
        if (!e[Xi]) {
            e[Xi] = !0, a.forEach(function (i) {
                i !== "selectionchange" && (fg.has(i) || ea(i, !1, e), ea(i, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Xi] || (t[Xi] = !0, ea("selectionchange", !1, t))
        }
    }

    function Qc(e, t, i, o) {
        switch (yc(t)) {
            case 1:
                var l = T0;
                break;
            case 4:
                l = P0;
                break;
            default:
                l = _o
        }
        i = l.bind(null, t, i, e), l = void 0, !Mo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), o ? l !== void 0 ? e.addEventListener(t, i, {
            capture: !0,
            passive: l
        }) : e.addEventListener(t, i, !0) : l !== void 0 ? e.addEventListener(t, i, {passive: l}) : e.addEventListener(t, i, !1)
    }

    function ta(e, t, i, o, l) {
        var c = o;
        if ((t & 1) === 0 && (t & 2) === 0 && o !== null) e:for (; ;) {
            if (o === null) return;
            var m = o.tag;
            if (m === 3 || m === 4) {
                var w = o.stateNode.containerInfo;
                if (w === l || w.nodeType === 8 && w.parentNode === l) break;
                if (m === 4) for (m = o.return; m !== null;) {
                    var k = m.tag;
                    if ((k === 3 || k === 4) && (k = m.stateNode.containerInfo, k === l || k.nodeType === 8 && k.parentNode === l)) return;
                    m = m.return
                }
                for (; w !== null;) {
                    if (m = Nn(w), m === null) return;
                    if (k = m.tag, k === 5 || k === 6) {
                        o = c = m;
                        continue e
                    }
                    w = w.parentNode
                }
            }
            o = o.return
        }
        Ju(function () {
            var M = c, L = To(i), _ = [];
            e:{
                var V = $c.get(e);
                if (V !== void 0) {
                    var Q = Fo, q = e;
                    switch (e) {
                        case"keypress":
                            if (Ui(i) === 0) break e;
                        case"keydown":
                        case"keyup":
                            Q = W0;
                            break;
                        case"focusin":
                            q = "focus", Q = Uo;
                            break;
                        case"focusout":
                            q = "blur", Q = Uo;
                            break;
                        case"beforeblur":
                        case"afterblur":
                            Q = Uo;
                            break;
                        case"click":
                            if (i.button === 2) break e;
                        case"auxclick":
                        case"dblclick":
                        case"mousedown":
                        case"mousemove":
                        case"mouseup":
                        case"mouseout":
                        case"mouseover":
                        case"contextmenu":
                            Q = wc;
                            break;
                        case"drag":
                        case"dragend":
                        case"dragenter":
                        case"dragexit":
                        case"dragleave":
                        case"dragover":
                        case"dragstart":
                        case"drop":
                            Q = b0;
                            break;
                        case"touchcancel":
                        case"touchend":
                        case"touchmove":
                        case"touchstart":
                            Q = H0;
                            break;
                        case Fc:
                        case Bc:
                        case Wc:
                            Q = R0;
                            break;
                        case Uc:
                            Q = G0;
                            break;
                        case"scroll":
                            Q = E0;
                            break;
                        case"wheel":
                            Q = X0;
                            break;
                        case"copy":
                        case"cut":
                        case"paste":
                            Q = V0;
                            break;
                        case"gotpointercapture":
                        case"lostpointercapture":
                        case"pointercancel":
                        case"pointerdown":
                        case"pointermove":
                        case"pointerout":
                        case"pointerover":
                        case"pointerup":
                            Q = kc
                    }
                    var te = (t & 4) !== 0, Ve = !te && e === "scroll", T = te ? V !== null ? V + "Capture" : null : V;
                    te = [];
                    for (var j = M, E; j !== null;) {
                        E = j;
                        var W = E.stateNode;
                        if (E.tag === 5 && W !== null && (E = W, T !== null && (W = Er(j, T), W != null && te.push(Gr(j, W, E)))), Ve) break;
                        j = j.return
                    }
                    0 < te.length && (V = new Q(V, q, null, i, L), _.push({event: V, listeners: te}))
                }
            }
            if ((t & 7) === 0) {
                e:{
                    if (V = e === "mouseover" || e === "pointerover", Q = e === "mouseout" || e === "pointerout", V && i !== No && (q = i.relatedTarget || i.fromElement) && (Nn(q) || q[Ut])) break e;
                    if ((Q || V) && (V = L.window === L ? L : (V = L.ownerDocument) ? V.defaultView || V.parentWindow : window, Q ? (q = i.relatedTarget || i.toElement, Q = M, q = q ? Nn(q) : null, q !== null && (Ve = Cn(q), q !== Ve || q.tag !== 5 && q.tag !== 6) && (q = null)) : (Q = null, q = M), Q !== q)) {
                        if (te = wc, W = "onMouseLeave", T = "onMouseEnter", j = "mouse", (e === "pointerout" || e === "pointerover") && (te = kc, W = "onPointerLeave", T = "onPointerEnter", j = "pointer"), Ve = Q == null ? V : er(Q), E = q == null ? V : er(q), V = new te(W, j + "leave", Q, i, L), V.target = Ve, V.relatedTarget = E, W = null, Nn(L) === M && (te = new te(T, j + "enter", q, i, L), te.target = E, te.relatedTarget = Ve, W = te), Ve = W, Q && q) t:{
                            for (te = Q, T = q, j = 0, E = te; E; E = qn(E)) j++;
                            for (E = 0, W = T; W; W = qn(W)) E++;
                            for (; 0 < j - E;) te = qn(te), j--;
                            for (; 0 < E - j;) T = qn(T), E--;
                            for (; j--;) {
                                if (te === T || T !== null && te === T.alternate) break t;
                                te = qn(te), T = qn(T)
                            }
                            te = null
                        } else te = null;
                        Q !== null && Xc(_, V, Q, te, !1), q !== null && Ve !== null && Xc(_, Ve, q, te, !0)
                    }
                }
                e:{
                    if (V = M ? er(M) : window, Q = V.nodeName && V.nodeName.toLowerCase(), Q === "select" || Q === "input" && V.type === "file") var ne = ng; else if (Ec(V)) if (bc) ne = og; else {
                        ne = ig;
                        var re = rg
                    } else (Q = V.nodeName) && Q.toLowerCase() === "input" && (V.type === "checkbox" || V.type === "radio") && (ne = sg);
                    if (ne && (ne = ne(e, M))) {
                        Mc(_, ne, i, L);
                        break e
                    }
                    re && re(e, V, M), e === "focusout" && (re = V._wrapperState) && re.controlled && V.type === "number" && wo(V, "number", V.value)
                }
                switch (re = M ? er(M) : window, e) {
                    case"focusin":
                        (Ec(re) || re.contentEditable === "true") && (Yn = re, Xo = M, $r = null);
                        break;
                    case"focusout":
                        $r = Xo = Yn = null;
                        break;
                    case"mousedown":
                        Yo = !0;
                        break;
                    case"contextmenu":
                    case"mouseup":
                    case"dragend":
                        Yo = !1, Ic(_, i, L);
                        break;
                    case"selectionchange":
                        if (ug) break;
                    case"keydown":
                    case"keyup":
                        Ic(_, i, L)
                }
                var ie;
                if (Ho) e:{
                    switch (e) {
                        case"compositionstart":
                            var oe = "onCompositionStart";
                            break e;
                        case"compositionend":
                            oe = "onCompositionEnd";
                            break e;
                        case"compositionupdate":
                            oe = "onCompositionUpdate";
                            break e
                    }
                    oe = void 0
                } else Xn ? Tc(e, i) && (oe = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (oe = "onCompositionStart");
                oe && (jc && i.locale !== "ko" && (Xn || oe !== "onCompositionStart" ? oe === "onCompositionEnd" && Xn && (ie = vc()) : (rn = L, Oo = "value" in rn ? rn.value : rn.textContent, Xn = !0)), re = Yi(M, oe), 0 < re.length && (oe = new Sc(oe, e, null, i, L), _.push({
                    event: oe,
                    listeners: re
                }), ie ? oe.data = ie : (ie = Pc(i), ie !== null && (oe.data = ie)))), (ie = Z0 ? q0(e, i) : J0(e, i)) && (M = Yi(M, "onBeforeInput"), 0 < M.length && (L = new Sc("onBeforeInput", "beforeinput", null, i, L), _.push({
                    event: L,
                    listeners: M
                }), L.data = ie))
            }
            Gc(_, t)
        })
    }

    function Gr(e, t, i) {
        return {instance: e, listener: t, currentTarget: i}
    }

    function Yi(e, t) {
        for (var i = t + "Capture", o = []; e !== null;) {
            var l = e, c = l.stateNode;
            l.tag === 5 && c !== null && (l = c, c = Er(e, i), c != null && o.unshift(Gr(e, c, l)), c = Er(e, t), c != null && o.push(Gr(e, c, l))), e = e.return
        }
        return o
    }

    function qn(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5);
        return e || null
    }

    function Xc(e, t, i, o, l) {
        for (var c = t._reactName, m = []; i !== null && i !== o;) {
            var w = i, k = w.alternate, M = w.stateNode;
            if (k !== null && k === o) break;
            w.tag === 5 && M !== null && (w = M, l ? (k = Er(i, c), k != null && m.unshift(Gr(i, k, w))) : l || (k = Er(i, c), k != null && m.push(Gr(i, k, w)))), i = i.return
        }
        m.length !== 0 && e.push({event: t, listeners: m})
    }

    var hg = /\r\n?/g, pg = /\u0000|\uFFFD/g;

    function Yc(e) {
        return (typeof e == "string" ? e : "" + e).replace(hg, `
`).replace(pg, "")
    }

    function Zi(e, t, i) {
        if (t = Yc(t), Yc(e) !== t && i) throw Error(s(425))
    }

    function qi() {
    }

    var na = null, ra = null;

    function ia(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }

    var sa = typeof setTimeout == "function" ? setTimeout : void 0,
        mg = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Zc = typeof Promise == "function" ? Promise : void 0,
        gg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zc < "u" ? function (e) {
            return Zc.resolve(null).then(e).catch(yg)
        } : sa;

    function yg(e) {
        setTimeout(function () {
            throw e
        })
    }

    function oa(e, t) {
        var i = t, o = 0;
        do {
            var l = i.nextSibling;
            if (e.removeChild(i), l && l.nodeType === 8) if (i = l.data, i === "/$") {
                if (o === 0) {
                    e.removeChild(l), _r(t);
                    return
                }
                o--
            } else i !== "$" && i !== "$?" && i !== "$!" || o++;
            i = l
        } while (i);
        _r(t)
    }

    function on(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
                if (t === "/$") return null
            }
        }
        return e
    }

    function qc(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var i = e.data;
                if (i === "$" || i === "$!" || i === "$?") {
                    if (t === 0) return e;
                    t--
                } else i === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }

    var Jn = Math.random().toString(36).slice(2), Vt = "__reactFiber$" + Jn, Qr = "__reactProps$" + Jn,
        Ut = "__reactContainer$" + Jn, aa = "__reactEvents$" + Jn, vg = "__reactListeners$" + Jn,
        xg = "__reactHandles$" + Jn;

    function Nn(e) {
        var t = e[Vt];
        if (t) return t;
        for (var i = e.parentNode; i;) {
            if (t = i[Ut] || i[Vt]) {
                if (i = t.alternate, t.child !== null || i !== null && i.child !== null) for (e = qc(e); e !== null;) {
                    if (i = e[Vt]) return i;
                    e = qc(e)
                }
                return t
            }
            e = i, i = e.parentNode
        }
        return null
    }

    function Xr(e) {
        return e = e[Vt] || e[Ut], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }

    function er(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(s(33))
    }

    function Ji(e) {
        return e[Qr] || null
    }

    var la = [], tr = -1;

    function an(e) {
        return {current: e}
    }

    function Ne(e) {
        0 > tr || (e.current = la[tr], la[tr] = null, tr--)
    }

    function Se(e, t) {
        tr++, la[tr] = e.current, e.current = t
    }

    var ln = {}, Ye = an(ln), it = an(!1), Tn = ln;

    function nr(e, t) {
        var i = e.type.contextTypes;
        if (!i) return ln;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t) return o.__reactInternalMemoizedMaskedChildContext;
        var l = {}, c;
        for (c in i) l[c] = t[c];
        return o && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
    }

    function st(e) {
        return e = e.childContextTypes, e != null
    }

    function es() {
        Ne(it), Ne(Ye)
    }

    function Jc(e, t, i) {
        if (Ye.current !== ln) throw Error(s(168));
        Se(Ye, t), Se(it, i)
    }

    function ed(e, t, i) {
        var o = e.stateNode;
        if (t = t.childContextTypes, typeof o.getChildContext != "function") return i;
        o = o.getChildContext();
        for (var l in o) if (!(l in t)) throw Error(s(108, we(e) || "Unknown", l));
        return G({}, i, o)
    }

    function ts(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ln, Tn = Ye.current, Se(Ye, e), Se(it, it.current), !0
    }

    function td(e, t, i) {
        var o = e.stateNode;
        if (!o) throw Error(s(169));
        i ? (e = ed(e, t, Tn), o.__reactInternalMemoizedMergedChildContext = e, Ne(it), Ne(Ye), Se(Ye, e)) : Ne(it), Se(it, i)
    }

    var $t = null, ns = !1, ua = !1;

    function nd(e) {
        $t === null ? $t = [e] : $t.push(e)
    }

    function wg(e) {
        ns = !0, nd(e)
    }

    function un() {
        if (!ua && $t !== null) {
            ua = !0;
            var e = 0, t = ye;
            try {
                var i = $t;
                for (ye = 1; e < i.length; e++) {
                    var o = i[e];
                    do o = o(!0); while (o !== null)
                }
                $t = null, ns = !1
            } catch (l) {
                throw $t !== null && ($t = $t.slice(e + 1)), ic(zo, un), l
            } finally {
                ye = t, ua = !1
            }
        }
        return null
    }

    var rr = [], ir = 0, rs = null, is = 0, gt = [], yt = 0, Pn = null, Ht = 1, Kt = "";

    function En(e, t) {
        rr[ir++] = is, rr[ir++] = rs, rs = e, is = t
    }

    function rd(e, t, i) {
        gt[yt++] = Ht, gt[yt++] = Kt, gt[yt++] = Pn, Pn = e;
        var o = Ht;
        e = Kt;
        var l = 32 - Ct(o) - 1;
        o &= ~(1 << l), i += 1;
        var c = 32 - Ct(t) + l;
        if (30 < c) {
            var m = l - l % 5;
            c = (o & (1 << m) - 1).toString(32), o >>= m, l -= m, Ht = 1 << 32 - Ct(t) + l | i << l | o, Kt = c + e
        } else Ht = 1 << c | i << l | o, Kt = e
    }

    function ca(e) {
        e.return !== null && (En(e, 1), rd(e, 1, 0))
    }

    function da(e) {
        for (; e === rs;) rs = rr[--ir], rr[ir] = null, is = rr[--ir], rr[ir] = null;
        for (; e === Pn;) Pn = gt[--yt], gt[yt] = null, Kt = gt[--yt], gt[yt] = null, Ht = gt[--yt], gt[yt] = null
    }

    var ft = null, ht = null, Pe = !1, Tt = null;

    function id(e, t) {
        var i = St(5, null, null, 0);
        i.elementType = "DELETED", i.stateNode = t, i.return = e, t = e.deletions, t === null ? (e.deletions = [i], e.flags |= 16) : t.push(i)
    }

    function sd(e, t) {
        switch (e.tag) {
            case 5:
                var i = e.type;
                return t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ft = e, ht = on(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ft = e, ht = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (i = Pn !== null ? {
                    id: Ht,
                    overflow: Kt
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: i,
                    retryLane: 1073741824
                }, i = St(18, null, null, 0), i.stateNode = t, i.return = e, e.child = i, ft = e, ht = null, !0) : !1;
            default:
                return !1
        }
    }

    function fa(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }

    function ha(e) {
        if (Pe) {
            var t = ht;
            if (t) {
                var i = t;
                if (!sd(e, t)) {
                    if (fa(e)) throw Error(s(418));
                    t = on(i.nextSibling);
                    var o = ft;
                    t && sd(e, t) ? id(o, i) : (e.flags = e.flags & -4097 | 2, Pe = !1, ft = e)
                }
            } else {
                if (fa(e)) throw Error(s(418));
                e.flags = e.flags & -4097 | 2, Pe = !1, ft = e
            }
        }
    }

    function od(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
        ft = e
    }

    function ss(e) {
        if (e !== ft) return !1;
        if (!Pe) return od(e), Pe = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ia(e.type, e.memoizedProps)), t && (t = ht)) {
            if (fa(e)) throw ad(), Error(s(418));
            for (; t;) id(e, t), t = on(t.nextSibling)
        }
        if (od(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
            e:{
                for (e = e.nextSibling, t = 0; e;) {
                    if (e.nodeType === 8) {
                        var i = e.data;
                        if (i === "/$") {
                            if (t === 0) {
                                ht = on(e.nextSibling);
                                break e
                            }
                            t--
                        } else i !== "$" && i !== "$!" && i !== "$?" || t++
                    }
                    e = e.nextSibling
                }
                ht = null
            }
        } else ht = ft ? on(e.stateNode.nextSibling) : null;
        return !0
    }

    function ad() {
        for (var e = ht; e;) e = on(e.nextSibling)
    }

    function sr() {
        ht = ft = null, Pe = !1
    }

    function pa(e) {
        Tt === null ? Tt = [e] : Tt.push(e)
    }

    var Sg = F.ReactCurrentBatchConfig;

    function Yr(e, t, i) {
        if (e = i.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (i._owner) {
                if (i = i._owner, i) {
                    if (i.tag !== 1) throw Error(s(309));
                    var o = i.stateNode
                }
                if (!o) throw Error(s(147, e));
                var l = o, c = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === c ? t.ref : (t = function (m) {
                    var w = l.refs;
                    m === null ? delete w[c] : w[c] = m
                }, t._stringRef = c, t)
            }
            if (typeof e != "string") throw Error(s(284));
            if (!i._owner) throw Error(s(290, e))
        }
        return e
    }

    function os(e, t) {
        throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }

    function ld(e) {
        var t = e._init;
        return t(e._payload)
    }

    function ud(e) {
        function t(T, j) {
            if (e) {
                var E = T.deletions;
                E === null ? (T.deletions = [j], T.flags |= 16) : E.push(j)
            }
        }

        function i(T, j) {
            if (!e) return null;
            for (; j !== null;) t(T, j), j = j.sibling;
            return null
        }

        function o(T, j) {
            for (T = new Map; j !== null;) j.key !== null ? T.set(j.key, j) : T.set(j.index, j), j = j.sibling;
            return T
        }

        function l(T, j) {
            return T = yn(T, j), T.index = 0, T.sibling = null, T
        }

        function c(T, j, E) {
            return T.index = E, e ? (E = T.alternate, E !== null ? (E = E.index, E < j ? (T.flags |= 2, j) : E) : (T.flags |= 2, j)) : (T.flags |= 1048576, j)
        }

        function m(T) {
            return e && T.alternate === null && (T.flags |= 2), T
        }

        function w(T, j, E, W) {
            return j === null || j.tag !== 6 ? (j = sl(E, T.mode, W), j.return = T, j) : (j = l(j, E), j.return = T, j)
        }

        function k(T, j, E, W) {
            var ne = E.type;
            return ne === K ? L(T, j, E.props.children, W, E.key) : j !== null && (j.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === je && ld(ne) === j.type) ? (W = l(j, E.props), W.ref = Yr(T, j, E), W.return = T, W) : (W = bs(E.type, E.key, E.props, null, T.mode, W), W.ref = Yr(T, j, E), W.return = T, W)
        }

        function M(T, j, E, W) {
            return j === null || j.tag !== 4 || j.stateNode.containerInfo !== E.containerInfo || j.stateNode.implementation !== E.implementation ? (j = ol(E, T.mode, W), j.return = T, j) : (j = l(j, E.children || []), j.return = T, j)
        }

        function L(T, j, E, W, ne) {
            return j === null || j.tag !== 7 ? (j = Ln(E, T.mode, W, ne), j.return = T, j) : (j = l(j, E), j.return = T, j)
        }

        function _(T, j, E) {
            if (typeof j == "string" && j !== "" || typeof j == "number") return j = sl("" + j, T.mode, E), j.return = T, j;
            if (typeof j == "object" && j !== null) {
                switch (j.$$typeof) {
                    case X:
                        return E = bs(j.type, j.key, j.props, null, T.mode, E), E.ref = Yr(T, null, j), E.return = T, E;
                    case P:
                        return j = ol(j, T.mode, E), j.return = T, j;
                    case je:
                        var W = j._init;
                        return _(T, W(j._payload), E)
                }
                if (Nr(j) || ee(j)) return j = Ln(j, T.mode, E, null), j.return = T, j;
                os(T, j)
            }
            return null
        }

        function V(T, j, E, W) {
            var ne = j !== null ? j.key : null;
            if (typeof E == "string" && E !== "" || typeof E == "number") return ne !== null ? null : w(T, j, "" + E, W);
            if (typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                    case X:
                        return E.key === ne ? k(T, j, E, W) : null;
                    case P:
                        return E.key === ne ? M(T, j, E, W) : null;
                    case je:
                        return ne = E._init, V(T, j, ne(E._payload), W)
                }
                if (Nr(E) || ee(E)) return ne !== null ? null : L(T, j, E, W, null);
                os(T, E)
            }
            return null
        }

        function Q(T, j, E, W, ne) {
            if (typeof W == "string" && W !== "" || typeof W == "number") return T = T.get(E) || null, w(j, T, "" + W, ne);
            if (typeof W == "object" && W !== null) {
                switch (W.$$typeof) {
                    case X:
                        return T = T.get(W.key === null ? E : W.key) || null, k(j, T, W, ne);
                    case P:
                        return T = T.get(W.key === null ? E : W.key) || null, M(j, T, W, ne);
                    case je:
                        var re = W._init;
                        return Q(T, j, E, re(W._payload), ne)
                }
                if (Nr(W) || ee(W)) return T = T.get(E) || null, L(j, T, W, ne, null);
                os(j, W)
            }
            return null
        }

        function q(T, j, E, W) {
            for (var ne = null, re = null, ie = j, oe = j = 0, He = null; ie !== null && oe < E.length; oe++) {
                ie.index > oe ? (He = ie, ie = null) : He = ie.sibling;
                var me = V(T, ie, E[oe], W);
                if (me === null) {
                    ie === null && (ie = He);
                    break
                }
                e && ie && me.alternate === null && t(T, ie), j = c(me, j, oe), re === null ? ne = me : re.sibling = me, re = me, ie = He
            }
            if (oe === E.length) return i(T, ie), Pe && En(T, oe), ne;
            if (ie === null) {
                for (; oe < E.length; oe++) ie = _(T, E[oe], W), ie !== null && (j = c(ie, j, oe), re === null ? ne = ie : re.sibling = ie, re = ie);
                return Pe && En(T, oe), ne
            }
            for (ie = o(T, ie); oe < E.length; oe++) He = Q(ie, T, oe, E[oe], W), He !== null && (e && He.alternate !== null && ie.delete(He.key === null ? oe : He.key), j = c(He, j, oe), re === null ? ne = He : re.sibling = He, re = He);
            return e && ie.forEach(function (vn) {
                return t(T, vn)
            }), Pe && En(T, oe), ne
        }

        function te(T, j, E, W) {
            var ne = ee(E);
            if (typeof ne != "function") throw Error(s(150));
            if (E = ne.call(E), E == null) throw Error(s(151));
            for (var re = ne = null, ie = j, oe = j = 0, He = null, me = E.next(); ie !== null && !me.done; oe++, me = E.next()) {
                ie.index > oe ? (He = ie, ie = null) : He = ie.sibling;
                var vn = V(T, ie, me.value, W);
                if (vn === null) {
                    ie === null && (ie = He);
                    break
                }
                e && ie && vn.alternate === null && t(T, ie), j = c(vn, j, oe), re === null ? ne = vn : re.sibling = vn, re = vn, ie = He
            }
            if (me.done) return i(T, ie), Pe && En(T, oe), ne;
            if (ie === null) {
                for (; !me.done; oe++, me = E.next()) me = _(T, me.value, W), me !== null && (j = c(me, j, oe), re === null ? ne = me : re.sibling = me, re = me);
                return Pe && En(T, oe), ne
            }
            for (ie = o(T, ie); !me.done; oe++, me = E.next()) me = Q(ie, T, oe, me.value, W), me !== null && (e && me.alternate !== null && ie.delete(me.key === null ? oe : me.key), j = c(me, j, oe), re === null ? ne = me : re.sibling = me, re = me);
            return e && ie.forEach(function (ey) {
                return t(T, ey)
            }), Pe && En(T, oe), ne
        }

        function Ve(T, j, E, W) {
            if (typeof E == "object" && E !== null && E.type === K && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                    case X:
                        e:{
                            for (var ne = E.key, re = j; re !== null;) {
                                if (re.key === ne) {
                                    if (ne = E.type, ne === K) {
                                        if (re.tag === 7) {
                                            i(T, re.sibling), j = l(re, E.props.children), j.return = T, T = j;
                                            break e
                                        }
                                    } else if (re.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === je && ld(ne) === re.type) {
                                        i(T, re.sibling), j = l(re, E.props), j.ref = Yr(T, re, E), j.return = T, T = j;
                                        break e
                                    }
                                    i(T, re);
                                    break
                                } else t(T, re);
                                re = re.sibling
                            }
                            E.type === K ? (j = Ln(E.props.children, T.mode, W, E.key), j.return = T, T = j) : (W = bs(E.type, E.key, E.props, null, T.mode, W), W.ref = Yr(T, j, E), W.return = T, T = W)
                        }
                        return m(T);
                    case P:
                        e:{
                            for (re = E.key; j !== null;) {
                                if (j.key === re) if (j.tag === 4 && j.stateNode.containerInfo === E.containerInfo && j.stateNode.implementation === E.implementation) {
                                    i(T, j.sibling), j = l(j, E.children || []), j.return = T, T = j;
                                    break e
                                } else {
                                    i(T, j);
                                    break
                                } else t(T, j);
                                j = j.sibling
                            }
                            j = ol(E, T.mode, W), j.return = T, T = j
                        }
                        return m(T);
                    case je:
                        return re = E._init, Ve(T, j, re(E._payload), W)
                }
                if (Nr(E)) return q(T, j, E, W);
                if (ee(E)) return te(T, j, E, W);
                os(T, E)
            }
            return typeof E == "string" && E !== "" || typeof E == "number" ? (E = "" + E, j !== null && j.tag === 6 ? (i(T, j.sibling), j = l(j, E), j.return = T, T = j) : (i(T, j), j = sl(E, T.mode, W), j.return = T, T = j), m(T)) : i(T, j)
        }

        return Ve
    }

    var or = ud(!0), cd = ud(!1), as = an(null), ls = null, ar = null, ma = null;

    function ga() {
        ma = ar = ls = null
    }

    function ya(e) {
        var t = as.current;
        Ne(as), e._currentValue = t
    }

    function va(e, t, i) {
        for (; e !== null;) {
            var o = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t), e === i) break;
            e = e.return
        }
    }

    function lr(e, t) {
        ls = e, ma = ar = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (ot = !0), e.firstContext = null)
    }

    function vt(e) {
        var t = e._currentValue;
        if (ma !== e) if (e = {context: e, memoizedValue: t, next: null}, ar === null) {
            if (ls === null) throw Error(s(308));
            ar = e, ls.dependencies = {lanes: 0, firstContext: e}
        } else ar = ar.next = e;
        return t
    }

    var Mn = null;

    function xa(e) {
        Mn === null ? Mn = [e] : Mn.push(e)
    }

    function dd(e, t, i, o) {
        var l = t.interleaved;
        return l === null ? (i.next = i, xa(t)) : (i.next = l.next, l.next = i), t.interleaved = i, Gt(e, o)
    }

    function Gt(e, t) {
        e.lanes |= t;
        var i = e.alternate;
        for (i !== null && (i.lanes |= t), i = e, e = e.return; e !== null;) e.childLanes |= t, i = e.alternate, i !== null && (i.childLanes |= t), i = e, e = e.return;
        return i.tag === 3 ? i.stateNode : null
    }

    var cn = !1;

    function wa(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {pending: null, interleaved: null, lanes: 0},
            effects: null
        }
    }

    function fd(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }

    function Qt(e, t) {
        return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null}
    }

    function dn(e, t, i) {
        var o = e.updateQueue;
        if (o === null) return null;
        if (o = o.shared, (fe & 2) !== 0) {
            var l = o.pending;
            return l === null ? t.next = t : (t.next = l.next, l.next = t), o.pending = t, Gt(e, i)
        }
        return l = o.interleaved, l === null ? (t.next = t, xa(o)) : (t.next = l.next, l.next = t), o.interleaved = t, Gt(e, i)
    }

    function us(e, t, i) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (i & 4194240) !== 0)) {
            var o = t.lanes;
            o &= e.pendingLanes, i |= o, t.lanes = i, Do(e, i)
        }
    }

    function hd(e, t) {
        var i = e.updateQueue, o = e.alternate;
        if (o !== null && (o = o.updateQueue, i === o)) {
            var l = null, c = null;
            if (i = i.firstBaseUpdate, i !== null) {
                do {
                    var m = {
                        eventTime: i.eventTime,
                        lane: i.lane,
                        tag: i.tag,
                        payload: i.payload,
                        callback: i.callback,
                        next: null
                    };
                    c === null ? l = c = m : c = c.next = m, i = i.next
                } while (i !== null);
                c === null ? l = c = t : c = c.next = t
            } else l = c = t;
            i = {
                baseState: o.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: c,
                shared: o.shared,
                effects: o.effects
            }, e.updateQueue = i;
            return
        }
        e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = t : e.next = t, i.lastBaseUpdate = t
    }

    function cs(e, t, i, o) {
        var l = e.updateQueue;
        cn = !1;
        var c = l.firstBaseUpdate, m = l.lastBaseUpdate, w = l.shared.pending;
        if (w !== null) {
            l.shared.pending = null;
            var k = w, M = k.next;
            k.next = null, m === null ? c = M : m.next = M, m = k;
            var L = e.alternate;
            L !== null && (L = L.updateQueue, w = L.lastBaseUpdate, w !== m && (w === null ? L.firstBaseUpdate = M : w.next = M, L.lastBaseUpdate = k))
        }
        if (c !== null) {
            var _ = l.baseState;
            m = 0, L = M = k = null, w = c;
            do {
                var V = w.lane, Q = w.eventTime;
                if ((o & V) === V) {
                    L !== null && (L = L.next = {
                        eventTime: Q,
                        lane: 0,
                        tag: w.tag,
                        payload: w.payload,
                        callback: w.callback,
                        next: null
                    });
                    e:{
                        var q = e, te = w;
                        switch (V = t, Q = i, te.tag) {
                            case 1:
                                if (q = te.payload, typeof q == "function") {
                                    _ = q.call(Q, _, V);
                                    break e
                                }
                                _ = q;
                                break e;
                            case 3:
                                q.flags = q.flags & -65537 | 128;
                            case 0:
                                if (q = te.payload, V = typeof q == "function" ? q.call(Q, _, V) : q, V == null) break e;
                                _ = G({}, _, V);
                                break e;
                            case 2:
                                cn = !0
                        }
                    }
                    w.callback !== null && w.lane !== 0 && (e.flags |= 64, V = l.effects, V === null ? l.effects = [w] : V.push(w))
                } else Q = {
                    eventTime: Q,
                    lane: V,
                    tag: w.tag,
                    payload: w.payload,
                    callback: w.callback,
                    next: null
                }, L === null ? (M = L = Q, k = _) : L = L.next = Q, m |= V;
                if (w = w.next, w === null) {
                    if (w = l.shared.pending, w === null) break;
                    V = w, w = V.next, V.next = null, l.lastBaseUpdate = V, l.shared.pending = null
                }
            } while (!0);
            if (L === null && (k = _), l.baseState = k, l.firstBaseUpdate = M, l.lastBaseUpdate = L, t = l.shared.interleaved, t !== null) {
                l = t;
                do m |= l.lane, l = l.next; while (l !== t)
            } else c === null && (l.shared.lanes = 0);
            An |= m, e.lanes = m, e.memoizedState = _
        }
    }

    function pd(e, t, i) {
        if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
            var o = e[t], l = o.callback;
            if (l !== null) {
                if (o.callback = null, o = i, typeof l != "function") throw Error(s(191, l));
                l.call(o)
            }
        }
    }

    var Zr = {}, Lt = an(Zr), qr = an(Zr), Jr = an(Zr);

    function bn(e) {
        if (e === Zr) throw Error(s(174));
        return e
    }

    function Sa(e, t) {
        switch (Se(Jr, t), Se(qr, e), Se(Lt, Zr), e = t.nodeType, e) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : ko(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ko(t, e)
        }
        Ne(Lt), Se(Lt, t)
    }

    function ur() {
        Ne(Lt), Ne(qr), Ne(Jr)
    }

    function md(e) {
        bn(Jr.current);
        var t = bn(Lt.current), i = ko(t, e.type);
        t !== i && (Se(qr, e), Se(Lt, i))
    }

    function ka(e) {
        qr.current === e && (Ne(Lt), Ne(qr))
    }

    var Me = an(0);

    function ds(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var i = t.memoizedState;
                if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || i.data === "$!")) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }

    var ja = [];

    function Ca() {
        for (var e = 0; e < ja.length; e++) ja[e]._workInProgressVersionPrimary = null;
        ja.length = 0
    }

    var fs = F.ReactCurrentDispatcher, Na = F.ReactCurrentBatchConfig, zn = 0, be = null, Fe = null, Ue = null, hs = !1,
        ei = !1, ti = 0, kg = 0;

    function Ze() {
        throw Error(s(321))
    }

    function Ta(e, t) {
        if (t === null) return !1;
        for (var i = 0; i < t.length && i < e.length; i++) if (!Nt(e[i], t[i])) return !1;
        return !0
    }

    function Pa(e, t, i, o, l, c) {
        if (zn = c, be = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, fs.current = e === null || e.memoizedState === null ? Tg : Pg, e = i(o, l), ei) {
            c = 0;
            do {
                if (ei = !1, ti = 0, 25 <= c) throw Error(s(301));
                c += 1, Ue = Fe = null, t.updateQueue = null, fs.current = Eg, e = i(o, l)
            } while (ei)
        }
        if (fs.current = gs, t = Fe !== null && Fe.next !== null, zn = 0, Ue = Fe = be = null, hs = !1, t) throw Error(s(300));
        return e
    }

    function Ea() {
        var e = ti !== 0;
        return ti = 0, e
    }

    function _t() {
        var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
        return Ue === null ? be.memoizedState = Ue = e : Ue = Ue.next = e, Ue
    }

    function xt() {
        if (Fe === null) {
            var e = be.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = Fe.next;
        var t = Ue === null ? be.memoizedState : Ue.next;
        if (t !== null) Ue = t, Fe = e; else {
            if (e === null) throw Error(s(310));
            Fe = e, e = {
                memoizedState: Fe.memoizedState,
                baseState: Fe.baseState,
                baseQueue: Fe.baseQueue,
                queue: Fe.queue,
                next: null
            }, Ue === null ? be.memoizedState = Ue = e : Ue = Ue.next = e
        }
        return Ue
    }

    function ni(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function Ma(e) {
        var t = xt(), i = t.queue;
        if (i === null) throw Error(s(311));
        i.lastRenderedReducer = e;
        var o = Fe, l = o.baseQueue, c = i.pending;
        if (c !== null) {
            if (l !== null) {
                var m = l.next;
                l.next = c.next, c.next = m
            }
            o.baseQueue = l = c, i.pending = null
        }
        if (l !== null) {
            c = l.next, o = o.baseState;
            var w = m = null, k = null, M = c;
            do {
                var L = M.lane;
                if ((zn & L) === L) k !== null && (k = k.next = {
                    lane: 0,
                    action: M.action,
                    hasEagerState: M.hasEagerState,
                    eagerState: M.eagerState,
                    next: null
                }), o = M.hasEagerState ? M.eagerState : e(o, M.action); else {
                    var _ = {
                        lane: L,
                        action: M.action,
                        hasEagerState: M.hasEagerState,
                        eagerState: M.eagerState,
                        next: null
                    };
                    k === null ? (w = k = _, m = o) : k = k.next = _, be.lanes |= L, An |= L
                }
                M = M.next
            } while (M !== null && M !== c);
            k === null ? m = o : k.next = w, Nt(o, t.memoizedState) || (ot = !0), t.memoizedState = o, t.baseState = m, t.baseQueue = k, i.lastRenderedState = o
        }
        if (e = i.interleaved, e !== null) {
            l = e;
            do c = l.lane, be.lanes |= c, An |= c, l = l.next; while (l !== e)
        } else l === null && (i.lanes = 0);
        return [t.memoizedState, i.dispatch]
    }

    function ba(e) {
        var t = xt(), i = t.queue;
        if (i === null) throw Error(s(311));
        i.lastRenderedReducer = e;
        var o = i.dispatch, l = i.pending, c = t.memoizedState;
        if (l !== null) {
            i.pending = null;
            var m = l = l.next;
            do c = e(c, m.action), m = m.next; while (m !== l);
            Nt(c, t.memoizedState) || (ot = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), i.lastRenderedState = c
        }
        return [c, o]
    }

    function gd() {
    }

    function yd(e, t) {
        var i = be, o = xt(), l = t(), c = !Nt(o.memoizedState, l);
        if (c && (o.memoizedState = l, ot = !0), o = o.queue, za(wd.bind(null, i, o, e), [e]), o.getSnapshot !== t || c || Ue !== null && Ue.memoizedState.tag & 1) {
            if (i.flags |= 2048, ri(9, xd.bind(null, i, o, l, t), void 0, null), $e === null) throw Error(s(349));
            (zn & 30) !== 0 || vd(i, t, l)
        }
        return l
    }

    function vd(e, t, i) {
        e.flags |= 16384, e = {getSnapshot: t, value: i}, t = be.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, be.updateQueue = t, t.stores = [e]) : (i = t.stores, i === null ? t.stores = [e] : i.push(e))
    }

    function xd(e, t, i, o) {
        t.value = i, t.getSnapshot = o, Sd(t) && kd(e)
    }

    function wd(e, t, i) {
        return i(function () {
            Sd(t) && kd(e)
        })
    }

    function Sd(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var i = t();
            return !Nt(e, i)
        } catch {
            return !0
        }
    }

    function kd(e) {
        var t = Gt(e, 1);
        t !== null && bt(t, e, 1, -1)
    }

    function jd(e) {
        var t = _t();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ni,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = Ng.bind(null, be, e), [t.memoizedState, e]
    }

    function ri(e, t, i, o) {
        return e = {
            tag: e,
            create: t,
            destroy: i,
            deps: o,
            next: null
        }, t = be.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, be.updateQueue = t, t.lastEffect = e.next = e) : (i = t.lastEffect, i === null ? t.lastEffect = e.next = e : (o = i.next, i.next = e, e.next = o, t.lastEffect = e)), e
    }

    function Cd() {
        return xt().memoizedState
    }

    function ps(e, t, i, o) {
        var l = _t();
        be.flags |= e, l.memoizedState = ri(1 | t, i, void 0, o === void 0 ? null : o)
    }

    function ms(e, t, i, o) {
        var l = xt();
        o = o === void 0 ? null : o;
        var c = void 0;
        if (Fe !== null) {
            var m = Fe.memoizedState;
            if (c = m.destroy, o !== null && Ta(o, m.deps)) {
                l.memoizedState = ri(t, i, c, o);
                return
            }
        }
        be.flags |= e, l.memoizedState = ri(1 | t, i, c, o)
    }

    function Nd(e, t) {
        return ps(8390656, 8, e, t)
    }

    function za(e, t) {
        return ms(2048, 8, e, t)
    }

    function Td(e, t) {
        return ms(4, 2, e, t)
    }

    function Pd(e, t) {
        return ms(4, 4, e, t)
    }

    function Ed(e, t) {
        if (typeof t == "function") return e = e(), t(e), function () {
            t(null)
        };
        if (t != null) return e = e(), t.current = e, function () {
            t.current = null
        }
    }

    function Md(e, t, i) {
        return i = i != null ? i.concat([e]) : null, ms(4, 4, Ed.bind(null, t, e), i)
    }

    function Aa() {
    }

    function bd(e, t) {
        var i = xt();
        t = t === void 0 ? null : t;
        var o = i.memoizedState;
        return o !== null && t !== null && Ta(t, o[1]) ? o[0] : (i.memoizedState = [e, t], e)
    }

    function zd(e, t) {
        var i = xt();
        t = t === void 0 ? null : t;
        var o = i.memoizedState;
        return o !== null && t !== null && Ta(t, o[1]) ? o[0] : (e = e(), i.memoizedState = [e, t], e)
    }

    function Ad(e, t, i) {
        return (zn & 21) === 0 ? (e.baseState && (e.baseState = !1, ot = !0), e.memoizedState = i) : (Nt(i, t) || (i = lc(), be.lanes |= i, An |= i, e.baseState = !0), t)
    }

    function jg(e, t) {
        var i = ye;
        ye = i !== 0 && 4 > i ? i : 4, e(!0);
        var o = Na.transition;
        Na.transition = {};
        try {
            e(!1), t()
        } finally {
            ye = i, Na.transition = o
        }
    }

    function Rd() {
        return xt().memoizedState
    }

    function Cg(e, t, i) {
        var o = mn(e);
        if (i = {
            lane: o,
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Dd(e)) Vd(t, i); else if (i = dd(e, t, i, o), i !== null) {
            var l = tt();
            bt(i, e, o, l), Ld(i, t, o)
        }
    }

    function Ng(e, t, i) {
        var o = mn(e), l = {lane: o, action: i, hasEagerState: !1, eagerState: null, next: null};
        if (Dd(e)) Vd(t, l); else {
            var c = e.alternate;
            if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null)) try {
                var m = t.lastRenderedState, w = c(m, i);
                if (l.hasEagerState = !0, l.eagerState = w, Nt(w, m)) {
                    var k = t.interleaved;
                    k === null ? (l.next = l, xa(t)) : (l.next = k.next, k.next = l), t.interleaved = l;
                    return
                }
            } catch {
            } finally {
            }
            i = dd(e, t, l, o), i !== null && (l = tt(), bt(i, e, o, l), Ld(i, t, o))
        }
    }

    function Dd(e) {
        var t = e.alternate;
        return e === be || t !== null && t === be
    }

    function Vd(e, t) {
        ei = hs = !0;
        var i = e.pending;
        i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t
    }

    function Ld(e, t, i) {
        if ((i & 4194240) !== 0) {
            var o = t.lanes;
            o &= e.pendingLanes, i |= o, t.lanes = i, Do(e, i)
        }
    }

    var gs = {
        readContext: vt,
        useCallback: Ze,
        useContext: Ze,
        useEffect: Ze,
        useImperativeHandle: Ze,
        useInsertionEffect: Ze,
        useLayoutEffect: Ze,
        useMemo: Ze,
        useReducer: Ze,
        useRef: Ze,
        useState: Ze,
        useDebugValue: Ze,
        useDeferredValue: Ze,
        useTransition: Ze,
        useMutableSource: Ze,
        useSyncExternalStore: Ze,
        useId: Ze,
        unstable_isNewReconciler: !1
    }, Tg = {
        readContext: vt, useCallback: function (e, t) {
            return _t().memoizedState = [e, t === void 0 ? null : t], e
        }, useContext: vt, useEffect: Nd, useImperativeHandle: function (e, t, i) {
            return i = i != null ? i.concat([e]) : null, ps(4194308, 4, Ed.bind(null, t, e), i)
        }, useLayoutEffect: function (e, t) {
            return ps(4194308, 4, e, t)
        }, useInsertionEffect: function (e, t) {
            return ps(4, 2, e, t)
        }, useMemo: function (e, t) {
            var i = _t();
            return t = t === void 0 ? null : t, e = e(), i.memoizedState = [e, t], e
        }, useReducer: function (e, t, i) {
            var o = _t();
            return t = i !== void 0 ? i(t) : t, o.memoizedState = o.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, o.queue = e, e = e.dispatch = Cg.bind(null, be, e), [o.memoizedState, e]
        }, useRef: function (e) {
            var t = _t();
            return e = {current: e}, t.memoizedState = e
        }, useState: jd, useDebugValue: Aa, useDeferredValue: function (e) {
            return _t().memoizedState = e
        }, useTransition: function () {
            var e = jd(!1), t = e[0];
            return e = jg.bind(null, e[1]), _t().memoizedState = e, [t, e]
        }, useMutableSource: function () {
        }, useSyncExternalStore: function (e, t, i) {
            var o = be, l = _t();
            if (Pe) {
                if (i === void 0) throw Error(s(407));
                i = i()
            } else {
                if (i = t(), $e === null) throw Error(s(349));
                (zn & 30) !== 0 || vd(o, t, i)
            }
            l.memoizedState = i;
            var c = {value: i, getSnapshot: t};
            return l.queue = c, Nd(wd.bind(null, o, c, e), [e]), o.flags |= 2048, ri(9, xd.bind(null, o, c, i, t), void 0, null), i
        }, useId: function () {
            var e = _t(), t = $e.identifierPrefix;
            if (Pe) {
                var i = Kt, o = Ht;
                i = (o & ~(1 << 32 - Ct(o) - 1)).toString(32) + i, t = ":" + t + "R" + i, i = ti++, 0 < i && (t += "H" + i.toString(32)), t += ":"
            } else i = kg++, t = ":" + t + "r" + i.toString(32) + ":";
            return e.memoizedState = t
        }, unstable_isNewReconciler: !1
    }, Pg = {
        readContext: vt,
        useCallback: bd,
        useContext: vt,
        useEffect: za,
        useImperativeHandle: Md,
        useInsertionEffect: Td,
        useLayoutEffect: Pd,
        useMemo: zd,
        useReducer: Ma,
        useRef: Cd,
        useState: function () {
            return Ma(ni)
        },
        useDebugValue: Aa,
        useDeferredValue: function (e) {
            var t = xt();
            return Ad(t, Fe.memoizedState, e)
        },
        useTransition: function () {
            var e = Ma(ni)[0], t = xt().memoizedState;
            return [e, t]
        },
        useMutableSource: gd,
        useSyncExternalStore: yd,
        useId: Rd,
        unstable_isNewReconciler: !1
    }, Eg = {
        readContext: vt,
        useCallback: bd,
        useContext: vt,
        useEffect: za,
        useImperativeHandle: Md,
        useInsertionEffect: Td,
        useLayoutEffect: Pd,
        useMemo: zd,
        useReducer: ba,
        useRef: Cd,
        useState: function () {
            return ba(ni)
        },
        useDebugValue: Aa,
        useDeferredValue: function (e) {
            var t = xt();
            return Fe === null ? t.memoizedState = e : Ad(t, Fe.memoizedState, e)
        },
        useTransition: function () {
            var e = ba(ni)[0], t = xt().memoizedState;
            return [e, t]
        },
        useMutableSource: gd,
        useSyncExternalStore: yd,
        useId: Rd,
        unstable_isNewReconciler: !1
    };

    function Pt(e, t) {
        if (e && e.defaultProps) {
            t = G({}, t), e = e.defaultProps;
            for (var i in e) t[i] === void 0 && (t[i] = e[i]);
            return t
        }
        return t
    }

    function Ra(e, t, i, o) {
        t = e.memoizedState, i = i(o, t), i = i == null ? t : G({}, t, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i)
    }

    var ys = {
        isMounted: function (e) {
            return (e = e._reactInternals) ? Cn(e) === e : !1
        }, enqueueSetState: function (e, t, i) {
            e = e._reactInternals;
            var o = tt(), l = mn(e), c = Qt(o, l);
            c.payload = t, i != null && (c.callback = i), t = dn(e, c, l), t !== null && (bt(t, e, l, o), us(t, e, l))
        }, enqueueReplaceState: function (e, t, i) {
            e = e._reactInternals;
            var o = tt(), l = mn(e), c = Qt(o, l);
            c.tag = 1, c.payload = t, i != null && (c.callback = i), t = dn(e, c, l), t !== null && (bt(t, e, l, o), us(t, e, l))
        }, enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var i = tt(), o = mn(e), l = Qt(i, o);
            l.tag = 2, t != null && (l.callback = t), t = dn(e, l, o), t !== null && (bt(t, e, o, i), us(t, e, o))
        }
    };

    function _d(e, t, i, o, l, c, m) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, c, m) : t.prototype && t.prototype.isPureReactComponent ? !Ur(i, o) || !Ur(l, c) : !0
    }

    function Id(e, t, i) {
        var o = !1, l = ln, c = t.contextType;
        return typeof c == "object" && c !== null ? c = vt(c) : (l = st(t) ? Tn : Ye.current, o = t.contextTypes, c = (o = o != null) ? nr(e, l) : ln), t = new t(i, c), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ys, e.stateNode = t, t._reactInternals = e, o && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = c), t
    }

    function Od(e, t, i, o) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, o), t.state !== e && ys.enqueueReplaceState(t, t.state, null)
    }

    function Da(e, t, i, o) {
        var l = e.stateNode;
        l.props = i, l.state = e.memoizedState, l.refs = {}, wa(e);
        var c = t.contextType;
        typeof c == "object" && c !== null ? l.context = vt(c) : (c = st(t) ? Tn : Ye.current, l.context = nr(e, c)), l.state = e.memoizedState, c = t.getDerivedStateFromProps, typeof c == "function" && (Ra(e, t, c, i), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && ys.enqueueReplaceState(l, l.state, null), cs(e, i, l, o), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
    }

    function cr(e, t) {
        try {
            var i = "", o = t;
            do i += he(o), o = o.return; while (o);
            var l = i
        } catch (c) {
            l = `
Error generating stack: ` + c.message + `
` + c.stack
        }
        return {value: e, source: t, stack: l, digest: null}
    }

    function Va(e, t, i) {
        return {value: e, source: null, stack: i ?? null, digest: t ?? null}
    }

    function La(e, t) {
        try {
            console.error(t.value)
        } catch (i) {
            setTimeout(function () {
                throw i
            })
        }
    }

    var Mg = typeof WeakMap == "function" ? WeakMap : Map;

    function Fd(e, t, i) {
        i = Qt(-1, i), i.tag = 3, i.payload = {element: null};
        var o = t.value;
        return i.callback = function () {
            Cs || (Cs = !0, Za = o), La(e, t)
        }, i
    }

    function Bd(e, t, i) {
        i = Qt(-1, i), i.tag = 3;
        var o = e.type.getDerivedStateFromError;
        if (typeof o == "function") {
            var l = t.value;
            i.payload = function () {
                return o(l)
            }, i.callback = function () {
                La(e, t)
            }
        }
        var c = e.stateNode;
        return c !== null && typeof c.componentDidCatch == "function" && (i.callback = function () {
            La(e, t), typeof o != "function" && (hn === null ? hn = new Set([this]) : hn.add(this));
            var m = t.stack;
            this.componentDidCatch(t.value, {componentStack: m !== null ? m : ""})
        }), i
    }

    function Wd(e, t, i) {
        var o = e.pingCache;
        if (o === null) {
            o = e.pingCache = new Mg;
            var l = new Set;
            o.set(t, l)
        } else l = o.get(t), l === void 0 && (l = new Set, o.set(t, l));
        l.has(i) || (l.add(i), e = Ug.bind(null, e, t, i), t.then(e, e))
    }

    function Ud(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return
        } while (e !== null);
        return null
    }

    function $d(e, t, i, o, l) {
        return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (t = Qt(-1, 1), t.tag = 2, dn(i, t, 1))), i.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e)
    }

    var bg = F.ReactCurrentOwner, ot = !1;

    function et(e, t, i, o) {
        t.child = e === null ? cd(t, null, i, o) : or(t, e.child, i, o)
    }

    function Hd(e, t, i, o, l) {
        i = i.render;
        var c = t.ref;
        return lr(t, l), o = Pa(e, t, i, o, c, l), i = Ea(), e !== null && !ot ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Xt(e, t, l)) : (Pe && i && ca(t), t.flags |= 1, et(e, t, o, l), t.child)
    }

    function Kd(e, t, i, o, l) {
        if (e === null) {
            var c = i.type;
            return typeof c == "function" && !il(c) && c.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (t.tag = 15, t.type = c, Gd(e, t, c, o, l)) : (e = bs(i.type, null, o, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
        }
        if (c = e.child, (e.lanes & l) === 0) {
            var m = c.memoizedProps;
            if (i = i.compare, i = i !== null ? i : Ur, i(m, o) && e.ref === t.ref) return Xt(e, t, l)
        }
        return t.flags |= 1, e = yn(c, o), e.ref = t.ref, e.return = t, t.child = e
    }

    function Gd(e, t, i, o, l) {
        if (e !== null) {
            var c = e.memoizedProps;
            if (Ur(c, o) && e.ref === t.ref) if (ot = !1, t.pendingProps = o = c, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (ot = !0); else return t.lanes = e.lanes, Xt(e, t, l)
        }
        return _a(e, t, i, o, l)
    }

    function Qd(e, t, i) {
        var o = t.pendingProps, l = o.children, c = e !== null ? e.memoizedState : null;
        if (o.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, Se(fr, pt), pt |= i; else {
            if ((i & 1073741824) === 0) return e = c !== null ? c.baseLanes | i : i, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, Se(fr, pt), pt |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, o = c !== null ? c.baseLanes : i, Se(fr, pt), pt |= o
        } else c !== null ? (o = c.baseLanes | i, t.memoizedState = null) : o = i, Se(fr, pt), pt |= o;
        return et(e, t, l, i), t.child
    }

    function Xd(e, t) {
        var i = t.ref;
        (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= 512, t.flags |= 2097152)
    }

    function _a(e, t, i, o, l) {
        var c = st(i) ? Tn : Ye.current;
        return c = nr(t, c), lr(t, l), i = Pa(e, t, i, o, c, l), o = Ea(), e !== null && !ot ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Xt(e, t, l)) : (Pe && o && ca(t), t.flags |= 1, et(e, t, i, l), t.child)
    }

    function Yd(e, t, i, o, l) {
        if (st(i)) {
            var c = !0;
            ts(t)
        } else c = !1;
        if (lr(t, l), t.stateNode === null) xs(e, t), Id(t, i, o), Da(t, i, o, l), o = !0; else if (e === null) {
            var m = t.stateNode, w = t.memoizedProps;
            m.props = w;
            var k = m.context, M = i.contextType;
            typeof M == "object" && M !== null ? M = vt(M) : (M = st(i) ? Tn : Ye.current, M = nr(t, M));
            var L = i.getDerivedStateFromProps,
                _ = typeof L == "function" || typeof m.getSnapshotBeforeUpdate == "function";
            _ || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (w !== o || k !== M) && Od(t, m, o, M), cn = !1;
            var V = t.memoizedState;
            m.state = V, cs(t, o, m, l), k = t.memoizedState, w !== o || V !== k || it.current || cn ? (typeof L == "function" && (Ra(t, i, L, o), k = t.memoizedState), (w = cn || _d(t, i, w, o, V, k, M)) ? (_ || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = o, t.memoizedState = k), m.props = o, m.state = k, m.context = M, o = w) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), o = !1)
        } else {
            m = t.stateNode, fd(e, t), w = t.memoizedProps, M = t.type === t.elementType ? w : Pt(t.type, w), m.props = M, _ = t.pendingProps, V = m.context, k = i.contextType, typeof k == "object" && k !== null ? k = vt(k) : (k = st(i) ? Tn : Ye.current, k = nr(t, k));
            var Q = i.getDerivedStateFromProps;
            (L = typeof Q == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (w !== _ || V !== k) && Od(t, m, o, k), cn = !1, V = t.memoizedState, m.state = V, cs(t, o, m, l);
            var q = t.memoizedState;
            w !== _ || V !== q || it.current || cn ? (typeof Q == "function" && (Ra(t, i, Q, o), q = t.memoizedState), (M = cn || _d(t, i, M, o, V, q, k) || !1) ? (L || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, q, k), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, q, k)), typeof m.componentDidUpdate == "function" && (t.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || w === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), t.memoizedProps = o, t.memoizedState = q), m.props = o, m.state = q, m.context = k, o = M) : (typeof m.componentDidUpdate != "function" || w === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), o = !1)
        }
        return Ia(e, t, i, o, c, l)
    }

    function Ia(e, t, i, o, l, c) {
        Xd(e, t);
        var m = (t.flags & 128) !== 0;
        if (!o && !m) return l && td(t, i, !1), Xt(e, t, c);
        o = t.stateNode, bg.current = t;
        var w = m && typeof i.getDerivedStateFromError != "function" ? null : o.render();
        return t.flags |= 1, e !== null && m ? (t.child = or(t, e.child, null, c), t.child = or(t, null, w, c)) : et(e, t, w, c), t.memoizedState = o.state, l && td(t, i, !0), t.child
    }

    function Zd(e) {
        var t = e.stateNode;
        t.pendingContext ? Jc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Jc(e, t.context, !1), Sa(e, t.containerInfo)
    }

    function qd(e, t, i, o, l) {
        return sr(), pa(l), t.flags |= 256, et(e, t, i, o), t.child
    }

    var Oa = {dehydrated: null, treeContext: null, retryLane: 0};

    function Fa(e) {
        return {baseLanes: e, cachePool: null, transitions: null}
    }

    function Jd(e, t, i) {
        var o = t.pendingProps, l = Me.current, c = !1, m = (t.flags & 128) !== 0, w;
        if ((w = m) || (w = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), w ? (c = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Se(Me, l & 1), e === null) return ha(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (m = o.children, e = o.fallback, c ? (o = t.mode, c = t.child, m = {
            mode: "hidden",
            children: m
        }, (o & 1) === 0 && c !== null ? (c.childLanes = 0, c.pendingProps = m) : c = zs(m, o, 0, null), e = Ln(e, o, i, null), c.return = t, e.return = t, c.sibling = e, t.child = c, t.child.memoizedState = Fa(i), t.memoizedState = Oa, e) : Ba(t, m));
        if (l = e.memoizedState, l !== null && (w = l.dehydrated, w !== null)) return zg(e, t, m, o, w, l, i);
        if (c) {
            c = o.fallback, m = t.mode, l = e.child, w = l.sibling;
            var k = {mode: "hidden", children: o.children};
            return (m & 1) === 0 && t.child !== l ? (o = t.child, o.childLanes = 0, o.pendingProps = k, t.deletions = null) : (o = yn(l, k), o.subtreeFlags = l.subtreeFlags & 14680064), w !== null ? c = yn(w, c) : (c = Ln(c, m, i, null), c.flags |= 2), c.return = t, o.return = t, o.sibling = c, t.child = o, o = c, c = t.child, m = e.child.memoizedState, m = m === null ? Fa(i) : {
                baseLanes: m.baseLanes | i,
                cachePool: null,
                transitions: m.transitions
            }, c.memoizedState = m, c.childLanes = e.childLanes & ~i, t.memoizedState = Oa, o
        }
        return c = e.child, e = c.sibling, o = yn(c, {
            mode: "visible",
            children: o.children
        }), (t.mode & 1) === 0 && (o.lanes = i), o.return = t, o.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = o, t.memoizedState = null, o
    }

    function Ba(e, t) {
        return t = zs({mode: "visible", children: t}, e.mode, 0, null), t.return = e, e.child = t
    }

    function vs(e, t, i, o) {
        return o !== null && pa(o), or(t, e.child, null, i), e = Ba(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function zg(e, t, i, o, l, c, m) {
        if (i) return t.flags & 256 ? (t.flags &= -257, o = Va(Error(s(422))), vs(e, t, m, o)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (c = o.fallback, l = t.mode, o = zs({
            mode: "visible",
            children: o.children
        }, l, 0, null), c = Ln(c, l, m, null), c.flags |= 2, o.return = t, c.return = t, o.sibling = c, t.child = o, (t.mode & 1) !== 0 && or(t, e.child, null, m), t.child.memoizedState = Fa(m), t.memoizedState = Oa, c);
        if ((t.mode & 1) === 0) return vs(e, t, m, null);
        if (l.data === "$!") {
            if (o = l.nextSibling && l.nextSibling.dataset, o) var w = o.dgst;
            return o = w, c = Error(s(419)), o = Va(c, o, void 0), vs(e, t, m, o)
        }
        if (w = (m & e.childLanes) !== 0, ot || w) {
            if (o = $e, o !== null) {
                switch (m & -m) {
                    case 4:
                        l = 2;
                        break;
                    case 16:
                        l = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        l = 32;
                        break;
                    case 536870912:
                        l = 268435456;
                        break;
                    default:
                        l = 0
                }
                l = (l & (o.suspendedLanes | m)) !== 0 ? 0 : l, l !== 0 && l !== c.retryLane && (c.retryLane = l, Gt(e, l), bt(o, e, l, -1))
            }
            return rl(), o = Va(Error(s(421))), vs(e, t, m, o)
        }
        return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = $g.bind(null, e), l._reactRetry = t, null) : (e = c.treeContext, ht = on(l.nextSibling), ft = t, Pe = !0, Tt = null, e !== null && (gt[yt++] = Ht, gt[yt++] = Kt, gt[yt++] = Pn, Ht = e.id, Kt = e.overflow, Pn = t), t = Ba(t, o.children), t.flags |= 4096, t)
    }

    function ef(e, t, i) {
        e.lanes |= t;
        var o = e.alternate;
        o !== null && (o.lanes |= t), va(e.return, t, i)
    }

    function Wa(e, t, i, o, l) {
        var c = e.memoizedState;
        c === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: o,
            tail: i,
            tailMode: l
        } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = o, c.tail = i, c.tailMode = l)
    }

    function tf(e, t, i) {
        var o = t.pendingProps, l = o.revealOrder, c = o.tail;
        if (et(e, t, o.children, i), o = Me.current, (o & 2) !== 0) o = o & 1 | 2, t.flags |= 128; else {
            if (e !== null && (e.flags & 128) !== 0) e:for (e = t.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && ef(e, i, t); else if (e.tag === 19) ef(e, i, t); else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            o &= 1
        }
        if (Se(Me, o), (t.mode & 1) === 0) t.memoizedState = null; else switch (l) {
            case"forwards":
                for (i = t.child, l = null; i !== null;) e = i.alternate, e !== null && ds(e) === null && (l = i), i = i.sibling;
                i = l, i === null ? (l = t.child, t.child = null) : (l = i.sibling, i.sibling = null), Wa(t, !1, l, i, c);
                break;
            case"backwards":
                for (i = null, l = t.child, t.child = null; l !== null;) {
                    if (e = l.alternate, e !== null && ds(e) === null) {
                        t.child = l;
                        break
                    }
                    e = l.sibling, l.sibling = i, i = l, l = e
                }
                Wa(t, !0, i, null, c);
                break;
            case"together":
                Wa(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function xs(e, t) {
        (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
    }

    function Xt(e, t, i) {
        if (e !== null && (t.dependencies = e.dependencies), An |= t.lanes, (i & t.childLanes) === 0) return null;
        if (e !== null && t.child !== e.child) throw Error(s(153));
        if (t.child !== null) {
            for (e = t.child, i = yn(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null;) e = e.sibling, i = i.sibling = yn(e, e.pendingProps), i.return = t;
            i.sibling = null
        }
        return t.child
    }

    function Ag(e, t, i) {
        switch (t.tag) {
            case 3:
                Zd(t), sr();
                break;
            case 5:
                md(t);
                break;
            case 1:
                st(t.type) && ts(t);
                break;
            case 4:
                Sa(t, t.stateNode.containerInfo);
                break;
            case 10:
                var o = t.type._context, l = t.memoizedProps.value;
                Se(as, o._currentValue), o._currentValue = l;
                break;
            case 13:
                if (o = t.memoizedState, o !== null) return o.dehydrated !== null ? (Se(Me, Me.current & 1), t.flags |= 128, null) : (i & t.child.childLanes) !== 0 ? Jd(e, t, i) : (Se(Me, Me.current & 1), e = Xt(e, t, i), e !== null ? e.sibling : null);
                Se(Me, Me.current & 1);
                break;
            case 19:
                if (o = (i & t.childLanes) !== 0, (e.flags & 128) !== 0) {
                    if (o) return tf(e, t, i);
                    t.flags |= 128
                }
                if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Se(Me, Me.current), o) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, Qd(e, t, i)
        }
        return Xt(e, t, i)
    }

    var nf, Ua, rf, sf;
    nf = function (e, t) {
        for (var i = t.child; i !== null;) {
            if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode); else if (i.tag !== 4 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue
            }
            if (i === t) break;
            for (; i.sibling === null;) {
                if (i.return === null || i.return === t) return;
                i = i.return
            }
            i.sibling.return = i.return, i = i.sibling
        }
    }, Ua = function () {
    }, rf = function (e, t, i, o) {
        var l = e.memoizedProps;
        if (l !== o) {
            e = t.stateNode, bn(Lt.current);
            var c = null;
            switch (i) {
                case"input":
                    l = vo(e, l), o = vo(e, o), c = [];
                    break;
                case"select":
                    l = G({}, l, {value: void 0}), o = G({}, o, {value: void 0}), c = [];
                    break;
                case"textarea":
                    l = So(e, l), o = So(e, o), c = [];
                    break;
                default:
                    typeof l.onClick != "function" && typeof o.onClick == "function" && (e.onclick = qi)
            }
            jo(i, o);
            var m;
            i = null;
            for (M in l) if (!o.hasOwnProperty(M) && l.hasOwnProperty(M) && l[M] != null) if (M === "style") {
                var w = l[M];
                for (m in w) w.hasOwnProperty(m) && (i || (i = {}), i[m] = "")
            } else M !== "dangerouslySetInnerHTML" && M !== "children" && M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && M !== "autoFocus" && (u.hasOwnProperty(M) ? c || (c = []) : (c = c || []).push(M, null));
            for (M in o) {
                var k = o[M];
                if (w = l != null ? l[M] : void 0, o.hasOwnProperty(M) && k !== w && (k != null || w != null)) if (M === "style") if (w) {
                    for (m in w) !w.hasOwnProperty(m) || k && k.hasOwnProperty(m) || (i || (i = {}), i[m] = "");
                    for (m in k) k.hasOwnProperty(m) && w[m] !== k[m] && (i || (i = {}), i[m] = k[m])
                } else i || (c || (c = []), c.push(M, i)), i = k; else M === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, w = w ? w.__html : void 0, k != null && w !== k && (c = c || []).push(M, k)) : M === "children" ? typeof k != "string" && typeof k != "number" || (c = c || []).push(M, "" + k) : M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && (u.hasOwnProperty(M) ? (k != null && M === "onScroll" && Ce("scroll", e), c || w === k || (c = [])) : (c = c || []).push(M, k))
            }
            i && (c = c || []).push("style", i);
            var M = c;
            (t.updateQueue = M) && (t.flags |= 4)
        }
    }, sf = function (e, t, i, o) {
        i !== o && (t.flags |= 4)
    };

    function ii(e, t) {
        if (!Pe) switch (e.tailMode) {
            case"hidden":
                t = e.tail;
                for (var i = null; t !== null;) t.alternate !== null && (i = t), t = t.sibling;
                i === null ? e.tail = null : i.sibling = null;
                break;
            case"collapsed":
                i = e.tail;
                for (var o = null; i !== null;) i.alternate !== null && (o = i), i = i.sibling;
                o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null
        }
    }

    function qe(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, i = 0, o = 0;
        if (t) for (var l = e.child; l !== null;) i |= l.lanes | l.childLanes, o |= l.subtreeFlags & 14680064, o |= l.flags & 14680064, l.return = e, l = l.sibling; else for (l = e.child; l !== null;) i |= l.lanes | l.childLanes, o |= l.subtreeFlags, o |= l.flags, l.return = e, l = l.sibling;
        return e.subtreeFlags |= o, e.childLanes = i, t
    }

    function Rg(e, t, i) {
        var o = t.pendingProps;
        switch (da(t), t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return qe(t), null;
            case 1:
                return st(t.type) && es(), qe(t), null;
            case 3:
                return o = t.stateNode, ur(), Ne(it), Ne(Ye), Ca(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (e === null || e.child === null) && (ss(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Tt !== null && (el(Tt), Tt = null))), Ua(e, t), qe(t), null;
            case 5:
                ka(t);
                var l = bn(Jr.current);
                if (i = t.type, e !== null && t.stateNode != null) rf(e, t, i, o, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152); else {
                    if (!o) {
                        if (t.stateNode === null) throw Error(s(166));
                        return qe(t), null
                    }
                    if (e = bn(Lt.current), ss(t)) {
                        o = t.stateNode, i = t.type;
                        var c = t.memoizedProps;
                        switch (o[Vt] = t, o[Qr] = c, e = (t.mode & 1) !== 0, i) {
                            case"dialog":
                                Ce("cancel", o), Ce("close", o);
                                break;
                            case"iframe":
                            case"object":
                            case"embed":
                                Ce("load", o);
                                break;
                            case"video":
                            case"audio":
                                for (l = 0; l < Hr.length; l++) Ce(Hr[l], o);
                                break;
                            case"source":
                                Ce("error", o);
                                break;
                            case"img":
                            case"image":
                            case"link":
                                Ce("error", o), Ce("load", o);
                                break;
                            case"details":
                                Ce("toggle", o);
                                break;
                            case"input":
                                Iu(o, c), Ce("invalid", o);
                                break;
                            case"select":
                                o._wrapperState = {wasMultiple: !!c.multiple}, Ce("invalid", o);
                                break;
                            case"textarea":
                                Bu(o, c), Ce("invalid", o)
                        }
                        jo(i, c), l = null;
                        for (var m in c) if (c.hasOwnProperty(m)) {
                            var w = c[m];
                            m === "children" ? typeof w == "string" ? o.textContent !== w && (c.suppressHydrationWarning !== !0 && Zi(o.textContent, w, e), l = ["children", w]) : typeof w == "number" && o.textContent !== "" + w && (c.suppressHydrationWarning !== !0 && Zi(o.textContent, w, e), l = ["children", "" + w]) : u.hasOwnProperty(m) && w != null && m === "onScroll" && Ce("scroll", o)
                        }
                        switch (i) {
                            case"input":
                                Ei(o), Fu(o, c, !0);
                                break;
                            case"textarea":
                                Ei(o), Uu(o);
                                break;
                            case"select":
                            case"option":
                                break;
                            default:
                                typeof c.onClick == "function" && (o.onclick = qi)
                        }
                        o = l, t.updateQueue = o, o !== null && (t.flags |= 4)
                    } else {
                        m = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = $u(i)), e === "http://www.w3.org/1999/xhtml" ? i === "script" ? (e = m.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof o.is == "string" ? e = m.createElement(i, {is: o.is}) : (e = m.createElement(i), i === "select" && (m = e, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : e = m.createElementNS(e, i), e[Vt] = t, e[Qr] = o, nf(e, t, !1, !1), t.stateNode = e;
                        e:{
                            switch (m = Co(i, o), i) {
                                case"dialog":
                                    Ce("cancel", e), Ce("close", e), l = o;
                                    break;
                                case"iframe":
                                case"object":
                                case"embed":
                                    Ce("load", e), l = o;
                                    break;
                                case"video":
                                case"audio":
                                    for (l = 0; l < Hr.length; l++) Ce(Hr[l], e);
                                    l = o;
                                    break;
                                case"source":
                                    Ce("error", e), l = o;
                                    break;
                                case"img":
                                case"image":
                                case"link":
                                    Ce("error", e), Ce("load", e), l = o;
                                    break;
                                case"details":
                                    Ce("toggle", e), l = o;
                                    break;
                                case"input":
                                    Iu(e, o), l = vo(e, o), Ce("invalid", e);
                                    break;
                                case"option":
                                    l = o;
                                    break;
                                case"select":
                                    e._wrapperState = {wasMultiple: !!o.multiple}, l = G({}, o, {value: void 0}), Ce("invalid", e);
                                    break;
                                case"textarea":
                                    Bu(e, o), l = So(e, o), Ce("invalid", e);
                                    break;
                                default:
                                    l = o
                            }
                            jo(i, l), w = l;
                            for (c in w) if (w.hasOwnProperty(c)) {
                                var k = w[c];
                                c === "style" ? Gu(e, k) : c === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && Hu(e, k)) : c === "children" ? typeof k == "string" ? (i !== "textarea" || k !== "") && Tr(e, k) : typeof k == "number" && Tr(e, "" + k) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (u.hasOwnProperty(c) ? k != null && c === "onScroll" && Ce("scroll", e) : k != null && I(e, c, k, m))
                            }
                            switch (i) {
                                case"input":
                                    Ei(e), Fu(e, o, !1);
                                    break;
                                case"textarea":
                                    Ei(e), Uu(e);
                                    break;
                                case"option":
                                    o.value != null && e.setAttribute("value", "" + ge(o.value));
                                    break;
                                case"select":
                                    e.multiple = !!o.multiple, c = o.value, c != null ? $n(e, !!o.multiple, c, !1) : o.defaultValue != null && $n(e, !!o.multiple, o.defaultValue, !0);
                                    break;
                                default:
                                    typeof l.onClick == "function" && (e.onclick = qi)
                            }
                            switch (i) {
                                case"button":
                                case"input":
                                case"select":
                                case"textarea":
                                    o = !!o.autoFocus;
                                    break e;
                                case"img":
                                    o = !0;
                                    break e;
                                default:
                                    o = !1
                            }
                        }
                        o && (t.flags |= 4)
                    }
                    t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
                }
                return qe(t), null;
            case 6:
                if (e && t.stateNode != null) sf(e, t, e.memoizedProps, o); else {
                    if (typeof o != "string" && t.stateNode === null) throw Error(s(166));
                    if (i = bn(Jr.current), bn(Lt.current), ss(t)) {
                        if (o = t.stateNode, i = t.memoizedProps, o[Vt] = t, (c = o.nodeValue !== i) && (e = ft, e !== null)) switch (e.tag) {
                            case 3:
                                Zi(o.nodeValue, i, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Zi(o.nodeValue, i, (e.mode & 1) !== 0)
                        }
                        c && (t.flags |= 4)
                    } else o = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(o), o[Vt] = t, t.stateNode = o
                }
                return qe(t), null;
            case 13:
                if (Ne(Me), o = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (Pe && ht !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) ad(), sr(), t.flags |= 98560, c = !1; else if (c = ss(t), o !== null && o.dehydrated !== null) {
                        if (e === null) {
                            if (!c) throw Error(s(318));
                            if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(s(317));
                            c[Vt] = t
                        } else sr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        qe(t), c = !1
                    } else Tt !== null && (el(Tt), Tt = null), c = !0;
                    if (!c) return t.flags & 65536 ? t : null
                }
                return (t.flags & 128) !== 0 ? (t.lanes = i, t) : (o = o !== null, o !== (e !== null && e.memoizedState !== null) && o && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Me.current & 1) !== 0 ? Be === 0 && (Be = 3) : rl())), t.updateQueue !== null && (t.flags |= 4), qe(t), null);
            case 4:
                return ur(), Ua(e, t), e === null && Kr(t.stateNode.containerInfo), qe(t), null;
            case 10:
                return ya(t.type._context), qe(t), null;
            case 17:
                return st(t.type) && es(), qe(t), null;
            case 19:
                if (Ne(Me), c = t.memoizedState, c === null) return qe(t), null;
                if (o = (t.flags & 128) !== 0, m = c.rendering, m === null) if (o) ii(c, !1); else {
                    if (Be !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null;) {
                        if (m = ds(e), m !== null) {
                            for (t.flags |= 128, ii(c, !1), o = m.updateQueue, o !== null && (t.updateQueue = o, t.flags |= 4), t.subtreeFlags = 0, o = i, i = t.child; i !== null;) c = i, e = o, c.flags &= 14680066, m = c.alternate, m === null ? (c.childLanes = 0, c.lanes = e, c.child = null, c.subtreeFlags = 0, c.memoizedProps = null, c.memoizedState = null, c.updateQueue = null, c.dependencies = null, c.stateNode = null) : (c.childLanes = m.childLanes, c.lanes = m.lanes, c.child = m.child, c.subtreeFlags = 0, c.deletions = null, c.memoizedProps = m.memoizedProps, c.memoizedState = m.memoizedState, c.updateQueue = m.updateQueue, c.type = m.type, e = m.dependencies, c.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), i = i.sibling;
                            return Se(Me, Me.current & 1 | 2), t.child
                        }
                        e = e.sibling
                    }
                    c.tail !== null && De() > hr && (t.flags |= 128, o = !0, ii(c, !1), t.lanes = 4194304)
                } else {
                    if (!o) if (e = ds(m), e !== null) {
                        if (t.flags |= 128, o = !0, i = e.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), ii(c, !0), c.tail === null && c.tailMode === "hidden" && !m.alternate && !Pe) return qe(t), null
                    } else 2 * De() - c.renderingStartTime > hr && i !== 1073741824 && (t.flags |= 128, o = !0, ii(c, !1), t.lanes = 4194304);
                    c.isBackwards ? (m.sibling = t.child, t.child = m) : (i = c.last, i !== null ? i.sibling = m : t.child = m, c.last = m)
                }
                return c.tail !== null ? (t = c.tail, c.rendering = t, c.tail = t.sibling, c.renderingStartTime = De(), t.sibling = null, i = Me.current, Se(Me, o ? i & 1 | 2 : i & 1), t) : (qe(t), null);
            case 22:
            case 23:
                return nl(), o = t.memoizedState !== null, e !== null && e.memoizedState !== null !== o && (t.flags |= 8192), o && (t.mode & 1) !== 0 ? (pt & 1073741824) !== 0 && (qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : qe(t), null;
            case 24:
                return null;
            case 25:
                return null
        }
        throw Error(s(156, t.tag))
    }

    function Dg(e, t) {
        switch (da(t), t.tag) {
            case 1:
                return st(t.type) && es(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return ur(), Ne(it), Ne(Ye), Ca(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return ka(t), null;
            case 13:
                if (Ne(Me), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(s(340));
                    sr()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return Ne(Me), null;
            case 4:
                return ur(), null;
            case 10:
                return ya(t.type._context), null;
            case 22:
            case 23:
                return nl(), null;
            case 24:
                return null;
            default:
                return null
        }
    }

    var ws = !1, Je = !1, Vg = typeof WeakSet == "function" ? WeakSet : Set, Y = null;

    function dr(e, t) {
        var i = e.ref;
        if (i !== null) if (typeof i == "function") try {
            i(null)
        } catch (o) {
            Ae(e, t, o)
        } else i.current = null
    }

    function $a(e, t, i) {
        try {
            i()
        } catch (o) {
            Ae(e, t, o)
        }
    }

    var of = !1;

    function Lg(e, t) {
        if (na = Fi, e = _c(), Qo(e)) {
            if ("selectionStart" in e) var i = {start: e.selectionStart, end: e.selectionEnd}; else e:{
                i = (i = e.ownerDocument) && i.defaultView || window;
                var o = i.getSelection && i.getSelection();
                if (o && o.rangeCount !== 0) {
                    i = o.anchorNode;
                    var l = o.anchorOffset, c = o.focusNode;
                    o = o.focusOffset;
                    try {
                        i.nodeType, c.nodeType
                    } catch {
                        i = null;
                        break e
                    }
                    var m = 0, w = -1, k = -1, M = 0, L = 0, _ = e, V = null;
                    t:for (; ;) {
                        for (var Q; _ !== i || l !== 0 && _.nodeType !== 3 || (w = m + l), _ !== c || o !== 0 && _.nodeType !== 3 || (k = m + o), _.nodeType === 3 && (m += _.nodeValue.length), (Q = _.firstChild) !== null;) V = _, _ = Q;
                        for (; ;) {
                            if (_ === e) break t;
                            if (V === i && ++M === l && (w = m), V === c && ++L === o && (k = m), (Q = _.nextSibling) !== null) break;
                            _ = V, V = _.parentNode
                        }
                        _ = Q
                    }
                    i = w === -1 || k === -1 ? null : {start: w, end: k}
                } else i = null
            }
            i = i || {start: 0, end: 0}
        } else i = null;
        for (ra = {
            focusedElem: e,
            selectionRange: i
        }, Fi = !1, Y = t; Y !== null;) if (t = Y, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Y = e; else for (; Y !== null;) {
            t = Y;
            try {
                var q = t.alternate;
                if ((t.flags & 1024) !== 0) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if (q !== null) {
                            var te = q.memoizedProps, Ve = q.memoizedState, T = t.stateNode,
                                j = T.getSnapshotBeforeUpdate(t.elementType === t.type ? te : Pt(t.type, te), Ve);
                            T.__reactInternalSnapshotBeforeUpdate = j
                        }
                        break;
                    case 3:
                        var E = t.stateNode.containerInfo;
                        E.nodeType === 1 ? E.textContent = "" : E.nodeType === 9 && E.documentElement && E.removeChild(E.documentElement);
                        break;
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        throw Error(s(163))
                }
            } catch (W) {
                Ae(t, t.return, W)
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, Y = e;
                break
            }
            Y = t.return
        }
        return q = of, of = !1, q
    }

    function si(e, t, i) {
        var o = t.updateQueue;
        if (o = o !== null ? o.lastEffect : null, o !== null) {
            var l = o = o.next;
            do {
                if ((l.tag & e) === e) {
                    var c = l.destroy;
                    l.destroy = void 0, c !== void 0 && $a(t, i, c)
                }
                l = l.next
            } while (l !== o)
        }
    }

    function Ss(e, t) {
        if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
            var i = t = t.next;
            do {
                if ((i.tag & e) === e) {
                    var o = i.create;
                    i.destroy = o()
                }
                i = i.next
            } while (i !== t)
        }
    }

    function Ha(e) {
        var t = e.ref;
        if (t !== null) {
            var i = e.stateNode;
            switch (e.tag) {
                case 5:
                    e = i;
                    break;
                default:
                    e = i
            }
            typeof t == "function" ? t(e) : t.current = e
        }
    }

    function af(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, af(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Vt], delete t[Qr], delete t[aa], delete t[vg], delete t[xg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }

    function lf(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }

    function uf(e) {
        e:for (; ;) {
            for (; e.sibling === null;) {
                if (e.return === null || lf(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function Ka(e, t, i) {
        var o = e.tag;
        if (o === 5 || o === 6) e = e.stateNode, t ? i.nodeType === 8 ? i.parentNode.insertBefore(e, t) : i.insertBefore(e, t) : (i.nodeType === 8 ? (t = i.parentNode, t.insertBefore(e, i)) : (t = i, t.appendChild(e)), i = i._reactRootContainer, i != null || t.onclick !== null || (t.onclick = qi)); else if (o !== 4 && (e = e.child, e !== null)) for (Ka(e, t, i), e = e.sibling; e !== null;) Ka(e, t, i), e = e.sibling
    }

    function Ga(e, t, i) {
        var o = e.tag;
        if (o === 5 || o === 6) e = e.stateNode, t ? i.insertBefore(e, t) : i.appendChild(e); else if (o !== 4 && (e = e.child, e !== null)) for (Ga(e, t, i), e = e.sibling; e !== null;) Ga(e, t, i), e = e.sibling
    }

    var Ke = null, Et = !1;

    function fn(e, t, i) {
        for (i = i.child; i !== null;) cf(e, t, i), i = i.sibling
    }

    function cf(e, t, i) {
        if (Dt && typeof Dt.onCommitFiberUnmount == "function") try {
            Dt.onCommitFiberUnmount(Di, i)
        } catch {
        }
        switch (i.tag) {
            case 5:
                Je || dr(i, t);
            case 6:
                var o = Ke, l = Et;
                Ke = null, fn(e, t, i), Ke = o, Et = l, Ke !== null && (Et ? (e = Ke, i = i.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i)) : Ke.removeChild(i.stateNode));
                break;
            case 18:
                Ke !== null && (Et ? (e = Ke, i = i.stateNode, e.nodeType === 8 ? oa(e.parentNode, i) : e.nodeType === 1 && oa(e, i), _r(e)) : oa(Ke, i.stateNode));
                break;
            case 4:
                o = Ke, l = Et, Ke = i.stateNode.containerInfo, Et = !0, fn(e, t, i), Ke = o, Et = l;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Je && (o = i.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
                    l = o = o.next;
                    do {
                        var c = l, m = c.destroy;
                        c = c.tag, m !== void 0 && ((c & 2) !== 0 || (c & 4) !== 0) && $a(i, t, m), l = l.next
                    } while (l !== o)
                }
                fn(e, t, i);
                break;
            case 1:
                if (!Je && (dr(i, t), o = i.stateNode, typeof o.componentWillUnmount == "function")) try {
                    o.props = i.memoizedProps, o.state = i.memoizedState, o.componentWillUnmount()
                } catch (w) {
                    Ae(i, t, w)
                }
                fn(e, t, i);
                break;
            case 21:
                fn(e, t, i);
                break;
            case 22:
                i.mode & 1 ? (Je = (o = Je) || i.memoizedState !== null, fn(e, t, i), Je = o) : fn(e, t, i);
                break;
            default:
                fn(e, t, i)
        }
    }

    function df(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var i = e.stateNode;
            i === null && (i = e.stateNode = new Vg), t.forEach(function (o) {
                var l = Hg.bind(null, e, o);
                i.has(o) || (i.add(o), o.then(l, l))
            })
        }
    }

    function Mt(e, t) {
        var i = t.deletions;
        if (i !== null) for (var o = 0; o < i.length; o++) {
            var l = i[o];
            try {
                var c = e, m = t, w = m;
                e:for (; w !== null;) {
                    switch (w.tag) {
                        case 5:
                            Ke = w.stateNode, Et = !1;
                            break e;
                        case 3:
                            Ke = w.stateNode.containerInfo, Et = !0;
                            break e;
                        case 4:
                            Ke = w.stateNode.containerInfo, Et = !0;
                            break e
                    }
                    w = w.return
                }
                if (Ke === null) throw Error(s(160));
                cf(c, m, l), Ke = null, Et = !1;
                var k = l.alternate;
                k !== null && (k.return = null), l.return = null
            } catch (M) {
                Ae(l, t, M)
            }
        }
        if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) ff(t, e), t = t.sibling
    }

    function ff(e, t) {
        var i = e.alternate, o = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (Mt(t, e), It(e), o & 4) {
                    try {
                        si(3, e, e.return), Ss(3, e)
                    } catch (te) {
                        Ae(e, e.return, te)
                    }
                    try {
                        si(5, e, e.return)
                    } catch (te) {
                        Ae(e, e.return, te)
                    }
                }
                break;
            case 1:
                Mt(t, e), It(e), o & 512 && i !== null && dr(i, i.return);
                break;
            case 5:
                if (Mt(t, e), It(e), o & 512 && i !== null && dr(i, i.return), e.flags & 32) {
                    var l = e.stateNode;
                    try {
                        Tr(l, "")
                    } catch (te) {
                        Ae(e, e.return, te)
                    }
                }
                if (o & 4 && (l = e.stateNode, l != null)) {
                    var c = e.memoizedProps, m = i !== null ? i.memoizedProps : c, w = e.type, k = e.updateQueue;
                    if (e.updateQueue = null, k !== null) try {
                        w === "input" && c.type === "radio" && c.name != null && Ou(l, c), Co(w, m);
                        var M = Co(w, c);
                        for (m = 0; m < k.length; m += 2) {
                            var L = k[m], _ = k[m + 1];
                            L === "style" ? Gu(l, _) : L === "dangerouslySetInnerHTML" ? Hu(l, _) : L === "children" ? Tr(l, _) : I(l, L, _, M)
                        }
                        switch (w) {
                            case"input":
                                xo(l, c);
                                break;
                            case"textarea":
                                Wu(l, c);
                                break;
                            case"select":
                                var V = l._wrapperState.wasMultiple;
                                l._wrapperState.wasMultiple = !!c.multiple;
                                var Q = c.value;
                                Q != null ? $n(l, !!c.multiple, Q, !1) : V !== !!c.multiple && (c.defaultValue != null ? $n(l, !!c.multiple, c.defaultValue, !0) : $n(l, !!c.multiple, c.multiple ? [] : "", !1))
                        }
                        l[Qr] = c
                    } catch (te) {
                        Ae(e, e.return, te)
                    }
                }
                break;
            case 6:
                if (Mt(t, e), It(e), o & 4) {
                    if (e.stateNode === null) throw Error(s(162));
                    l = e.stateNode, c = e.memoizedProps;
                    try {
                        l.nodeValue = c
                    } catch (te) {
                        Ae(e, e.return, te)
                    }
                }
                break;
            case 3:
                if (Mt(t, e), It(e), o & 4 && i !== null && i.memoizedState.isDehydrated) try {
                    _r(t.containerInfo)
                } catch (te) {
                    Ae(e, e.return, te)
                }
                break;
            case 4:
                Mt(t, e), It(e);
                break;
            case 13:
                Mt(t, e), It(e), l = e.child, l.flags & 8192 && (c = l.memoizedState !== null, l.stateNode.isHidden = c, !c || l.alternate !== null && l.alternate.memoizedState !== null || (Ya = De())), o & 4 && df(e);
                break;
            case 22:
                if (L = i !== null && i.memoizedState !== null, e.mode & 1 ? (Je = (M = Je) || L, Mt(t, e), Je = M) : Mt(t, e), It(e), o & 8192) {
                    if (M = e.memoizedState !== null, (e.stateNode.isHidden = M) && !L && (e.mode & 1) !== 0) for (Y = e, L = e.child; L !== null;) {
                        for (_ = Y = L; Y !== null;) {
                            switch (V = Y, Q = V.child, V.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    si(4, V, V.return);
                                    break;
                                case 1:
                                    dr(V, V.return);
                                    var q = V.stateNode;
                                    if (typeof q.componentWillUnmount == "function") {
                                        o = V, i = V.return;
                                        try {
                                            t = o, q.props = t.memoizedProps, q.state = t.memoizedState, q.componentWillUnmount()
                                        } catch (te) {
                                            Ae(o, i, te)
                                        }
                                    }
                                    break;
                                case 5:
                                    dr(V, V.return);
                                    break;
                                case 22:
                                    if (V.memoizedState !== null) {
                                        mf(_);
                                        continue
                                    }
                            }
                            Q !== null ? (Q.return = V, Y = Q) : mf(_)
                        }
                        L = L.sibling
                    }
                    e:for (L = null, _ = e; ;) {
                        if (_.tag === 5) {
                            if (L === null) {
                                L = _;
                                try {
                                    l = _.stateNode, M ? (c = l.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none") : (w = _.stateNode, k = _.memoizedProps.style, m = k != null && k.hasOwnProperty("display") ? k.display : null, w.style.display = Ku("display", m))
                                } catch (te) {
                                    Ae(e, e.return, te)
                                }
                            }
                        } else if (_.tag === 6) {
                            if (L === null) try {
                                _.stateNode.nodeValue = M ? "" : _.memoizedProps
                            } catch (te) {
                                Ae(e, e.return, te)
                            }
                        } else if ((_.tag !== 22 && _.tag !== 23 || _.memoizedState === null || _ === e) && _.child !== null) {
                            _.child.return = _, _ = _.child;
                            continue
                        }
                        if (_ === e) break e;
                        for (; _.sibling === null;) {
                            if (_.return === null || _.return === e) break e;
                            L === _ && (L = null), _ = _.return
                        }
                        L === _ && (L = null), _.sibling.return = _.return, _ = _.sibling
                    }
                }
                break;
            case 19:
                Mt(t, e), It(e), o & 4 && df(e);
                break;
            case 21:
                break;
            default:
                Mt(t, e), It(e)
        }
    }

    function It(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e:{
                    for (var i = e.return; i !== null;) {
                        if (lf(i)) {
                            var o = i;
                            break e
                        }
                        i = i.return
                    }
                    throw Error(s(160))
                }
                switch (o.tag) {
                    case 5:
                        var l = o.stateNode;
                        o.flags & 32 && (Tr(l, ""), o.flags &= -33);
                        var c = uf(e);
                        Ga(e, c, l);
                        break;
                    case 3:
                    case 4:
                        var m = o.stateNode.containerInfo, w = uf(e);
                        Ka(e, w, m);
                        break;
                    default:
                        throw Error(s(161))
                }
            } catch (k) {
                Ae(e, e.return, k)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }

    function _g(e, t, i) {
        Y = e, hf(e)
    }

    function hf(e, t, i) {
        for (var o = (e.mode & 1) !== 0; Y !== null;) {
            var l = Y, c = l.child;
            if (l.tag === 22 && o) {
                var m = l.memoizedState !== null || ws;
                if (!m) {
                    var w = l.alternate, k = w !== null && w.memoizedState !== null || Je;
                    w = ws;
                    var M = Je;
                    if (ws = m, (Je = k) && !M) for (Y = l; Y !== null;) m = Y, k = m.child, m.tag === 22 && m.memoizedState !== null ? gf(l) : k !== null ? (k.return = m, Y = k) : gf(l);
                    for (; c !== null;) Y = c, hf(c), c = c.sibling;
                    Y = l, ws = w, Je = M
                }
                pf(e)
            } else (l.subtreeFlags & 8772) !== 0 && c !== null ? (c.return = l, Y = c) : pf(e)
        }
    }

    function pf(e) {
        for (; Y !== null;) {
            var t = Y;
            if ((t.flags & 8772) !== 0) {
                var i = t.alternate;
                try {
                    if ((t.flags & 8772) !== 0) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Je || Ss(5, t);
                            break;
                        case 1:
                            var o = t.stateNode;
                            if (t.flags & 4 && !Je) if (i === null) o.componentDidMount(); else {
                                var l = t.elementType === t.type ? i.memoizedProps : Pt(t.type, i.memoizedProps);
                                o.componentDidUpdate(l, i.memoizedState, o.__reactInternalSnapshotBeforeUpdate)
                            }
                            var c = t.updateQueue;
                            c !== null && pd(t, c, o);
                            break;
                        case 3:
                            var m = t.updateQueue;
                            if (m !== null) {
                                if (i = null, t.child !== null) switch (t.child.tag) {
                                    case 5:
                                        i = t.child.stateNode;
                                        break;
                                    case 1:
                                        i = t.child.stateNode
                                }
                                pd(t, m, i)
                            }
                            break;
                        case 5:
                            var w = t.stateNode;
                            if (i === null && t.flags & 4) {
                                i = w;
                                var k = t.memoizedProps;
                                switch (t.type) {
                                    case"button":
                                    case"input":
                                    case"select":
                                    case"textarea":
                                        k.autoFocus && i.focus();
                                        break;
                                    case"img":
                                        k.src && (i.src = k.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var M = t.alternate;
                                if (M !== null) {
                                    var L = M.memoizedState;
                                    if (L !== null) {
                                        var _ = L.dehydrated;
                                        _ !== null && _r(_)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(s(163))
                    }
                    Je || t.flags & 512 && Ha(t)
                } catch (V) {
                    Ae(t, t.return, V)
                }
            }
            if (t === e) {
                Y = null;
                break
            }
            if (i = t.sibling, i !== null) {
                i.return = t.return, Y = i;
                break
            }
            Y = t.return
        }
    }

    function mf(e) {
        for (; Y !== null;) {
            var t = Y;
            if (t === e) {
                Y = null;
                break
            }
            var i = t.sibling;
            if (i !== null) {
                i.return = t.return, Y = i;
                break
            }
            Y = t.return
        }
    }

    function gf(e) {
        for (; Y !== null;) {
            var t = Y;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var i = t.return;
                        try {
                            Ss(4, t)
                        } catch (k) {
                            Ae(t, i, k)
                        }
                        break;
                    case 1:
                        var o = t.stateNode;
                        if (typeof o.componentDidMount == "function") {
                            var l = t.return;
                            try {
                                o.componentDidMount()
                            } catch (k) {
                                Ae(t, l, k)
                            }
                        }
                        var c = t.return;
                        try {
                            Ha(t)
                        } catch (k) {
                            Ae(t, c, k)
                        }
                        break;
                    case 5:
                        var m = t.return;
                        try {
                            Ha(t)
                        } catch (k) {
                            Ae(t, m, k)
                        }
                }
            } catch (k) {
                Ae(t, t.return, k)
            }
            if (t === e) {
                Y = null;
                break
            }
            var w = t.sibling;
            if (w !== null) {
                w.return = t.return, Y = w;
                break
            }
            Y = t.return
        }
    }

    var Ig = Math.ceil, ks = F.ReactCurrentDispatcher, Qa = F.ReactCurrentOwner, wt = F.ReactCurrentBatchConfig, fe = 0,
        $e = null, _e = null, Ge = 0, pt = 0, fr = an(0), Be = 0, oi = null, An = 0, js = 0, Xa = 0, ai = null,
        at = null, Ya = 0, hr = 1 / 0, Yt = null, Cs = !1, Za = null, hn = null, Ns = !1, pn = null, Ts = 0, li = 0,
        qa = null, Ps = -1, Es = 0;

    function tt() {
        return (fe & 6) !== 0 ? De() : Ps !== -1 ? Ps : Ps = De()
    }

    function mn(e) {
        return (e.mode & 1) === 0 ? 1 : (fe & 2) !== 0 && Ge !== 0 ? Ge & -Ge : Sg.transition !== null ? (Es === 0 && (Es = lc()), Es) : (e = ye, e !== 0 || (e = window.event, e = e === void 0 ? 16 : yc(e.type)), e)
    }

    function bt(e, t, i, o) {
        if (50 < li) throw li = 0, qa = null, Error(s(185));
        Ar(e, i, o), ((fe & 2) === 0 || e !== $e) && (e === $e && ((fe & 2) === 0 && (js |= i), Be === 4 && gn(e, Ge)), lt(e, o), i === 1 && fe === 0 && (t.mode & 1) === 0 && (hr = De() + 500, ns && un()))
    }

    function lt(e, t) {
        var i = e.callbackNode;
        S0(e, t);
        var o = _i(e, e === $e ? Ge : 0);
        if (o === 0) i !== null && sc(i), e.callbackNode = null, e.callbackPriority = 0; else if (t = o & -o, e.callbackPriority !== t) {
            if (i != null && sc(i), t === 1) e.tag === 0 ? wg(vf.bind(null, e)) : nd(vf.bind(null, e)), gg(function () {
                (fe & 6) === 0 && un()
            }), i = null; else {
                switch (uc(o)) {
                    case 1:
                        i = zo;
                        break;
                    case 4:
                        i = oc;
                        break;
                    case 16:
                        i = Ri;
                        break;
                    case 536870912:
                        i = ac;
                        break;
                    default:
                        i = Ri
                }
                i = Tf(i, yf.bind(null, e))
            }
            e.callbackPriority = t, e.callbackNode = i
        }
    }

    function yf(e, t) {
        if (Ps = -1, Es = 0, (fe & 6) !== 0) throw Error(s(327));
        var i = e.callbackNode;
        if (pr() && e.callbackNode !== i) return null;
        var o = _i(e, e === $e ? Ge : 0);
        if (o === 0) return null;
        if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = Ms(e, o); else {
            t = o;
            var l = fe;
            fe |= 2;
            var c = wf();
            ($e !== e || Ge !== t) && (Yt = null, hr = De() + 500, Dn(e, t));
            do try {
                Bg();
                break
            } catch (w) {
                xf(e, w)
            } while (!0);
            ga(), ks.current = c, fe = l, _e !== null ? t = 0 : ($e = null, Ge = 0, t = Be)
        }
        if (t !== 0) {
            if (t === 2 && (l = Ao(e), l !== 0 && (o = l, t = Ja(e, l))), t === 1) throw i = oi, Dn(e, 0), gn(e, o), lt(e, De()), i;
            if (t === 6) gn(e, o); else {
                if (l = e.current.alternate, (o & 30) === 0 && !Og(l) && (t = Ms(e, o), t === 2 && (c = Ao(e), c !== 0 && (o = c, t = Ja(e, c))), t === 1)) throw i = oi, Dn(e, 0), gn(e, o), lt(e, De()), i;
                switch (e.finishedWork = l, e.finishedLanes = o, t) {
                    case 0:
                    case 1:
                        throw Error(s(345));
                    case 2:
                        Vn(e, at, Yt);
                        break;
                    case 3:
                        if (gn(e, o), (o & 130023424) === o && (t = Ya + 500 - De(), 10 < t)) {
                            if (_i(e, 0) !== 0) break;
                            if (l = e.suspendedLanes, (l & o) !== o) {
                                tt(), e.pingedLanes |= e.suspendedLanes & l;
                                break
                            }
                            e.timeoutHandle = sa(Vn.bind(null, e, at, Yt), t);
                            break
                        }
                        Vn(e, at, Yt);
                        break;
                    case 4:
                        if (gn(e, o), (o & 4194240) === o) break;
                        for (t = e.eventTimes, l = -1; 0 < o;) {
                            var m = 31 - Ct(o);
                            c = 1 << m, m = t[m], m > l && (l = m), o &= ~c
                        }
                        if (o = l, o = De() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Ig(o / 1960)) - o, 10 < o) {
                            e.timeoutHandle = sa(Vn.bind(null, e, at, Yt), o);
                            break
                        }
                        Vn(e, at, Yt);
                        break;
                    case 5:
                        Vn(e, at, Yt);
                        break;
                    default:
                        throw Error(s(329))
                }
            }
        }
        return lt(e, De()), e.callbackNode === i ? yf.bind(null, e) : null
    }

    function Ja(e, t) {
        var i = ai;
        return e.current.memoizedState.isDehydrated && (Dn(e, t).flags |= 256), e = Ms(e, t), e !== 2 && (t = at, at = i, t !== null && el(t)), e
    }

    function el(e) {
        at === null ? at = e : at.push.apply(at, e)
    }

    function Og(e) {
        for (var t = e; ;) {
            if (t.flags & 16384) {
                var i = t.updateQueue;
                if (i !== null && (i = i.stores, i !== null)) for (var o = 0; o < i.length; o++) {
                    var l = i[o], c = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Nt(c(), l)) return !1
                    } catch {
                        return !1
                    }
                }
            }
            if (i = t.child, t.subtreeFlags & 16384 && i !== null) i.return = t, t = i; else {
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function gn(e, t) {
        for (t &= ~Xa, t &= ~js, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var i = 31 - Ct(t), o = 1 << i;
            e[i] = -1, t &= ~o
        }
    }

    function vf(e) {
        if ((fe & 6) !== 0) throw Error(s(327));
        pr();
        var t = _i(e, 0);
        if ((t & 1) === 0) return lt(e, De()), null;
        var i = Ms(e, t);
        if (e.tag !== 0 && i === 2) {
            var o = Ao(e);
            o !== 0 && (t = o, i = Ja(e, o))
        }
        if (i === 1) throw i = oi, Dn(e, 0), gn(e, t), lt(e, De()), i;
        if (i === 6) throw Error(s(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, Vn(e, at, Yt), lt(e, De()), null
    }

    function tl(e, t) {
        var i = fe;
        fe |= 1;
        try {
            return e(t)
        } finally {
            fe = i, fe === 0 && (hr = De() + 500, ns && un())
        }
    }

    function Rn(e) {
        pn !== null && pn.tag === 0 && (fe & 6) === 0 && pr();
        var t = fe;
        fe |= 1;
        var i = wt.transition, o = ye;
        try {
            if (wt.transition = null, ye = 1, e) return e()
        } finally {
            ye = o, wt.transition = i, fe = t, (fe & 6) === 0 && un()
        }
    }

    function nl() {
        pt = fr.current, Ne(fr)
    }

    function Dn(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var i = e.timeoutHandle;
        if (i !== -1 && (e.timeoutHandle = -1, mg(i)), _e !== null) for (i = _e.return; i !== null;) {
            var o = i;
            switch (da(o), o.tag) {
                case 1:
                    o = o.type.childContextTypes, o != null && es();
                    break;
                case 3:
                    ur(), Ne(it), Ne(Ye), Ca();
                    break;
                case 5:
                    ka(o);
                    break;
                case 4:
                    ur();
                    break;
                case 13:
                    Ne(Me);
                    break;
                case 19:
                    Ne(Me);
                    break;
                case 10:
                    ya(o.type._context);
                    break;
                case 22:
                case 23:
                    nl()
            }
            i = i.return
        }
        if ($e = e, _e = e = yn(e.current, null), Ge = pt = t, Be = 0, oi = null, Xa = js = An = 0, at = ai = null, Mn !== null) {
            for (t = 0; t < Mn.length; t++) if (i = Mn[t], o = i.interleaved, o !== null) {
                i.interleaved = null;
                var l = o.next, c = i.pending;
                if (c !== null) {
                    var m = c.next;
                    c.next = l, o.next = m
                }
                i.pending = o
            }
            Mn = null
        }
        return e
    }

    function xf(e, t) {
        do {
            var i = _e;
            try {
                if (ga(), fs.current = gs, hs) {
                    for (var o = be.memoizedState; o !== null;) {
                        var l = o.queue;
                        l !== null && (l.pending = null), o = o.next
                    }
                    hs = !1
                }
                if (zn = 0, Ue = Fe = be = null, ei = !1, ti = 0, Qa.current = null, i === null || i.return === null) {
                    Be = 1, oi = t, _e = null;
                    break
                }
                e:{
                    var c = e, m = i.return, w = i, k = t;
                    if (t = Ge, w.flags |= 32768, k !== null && typeof k == "object" && typeof k.then == "function") {
                        var M = k, L = w, _ = L.tag;
                        if ((L.mode & 1) === 0 && (_ === 0 || _ === 11 || _ === 15)) {
                            var V = L.alternate;
                            V ? (L.updateQueue = V.updateQueue, L.memoizedState = V.memoizedState, L.lanes = V.lanes) : (L.updateQueue = null, L.memoizedState = null)
                        }
                        var Q = Ud(m);
                        if (Q !== null) {
                            Q.flags &= -257, $d(Q, m, w, c, t), Q.mode & 1 && Wd(c, M, t), t = Q, k = M;
                            var q = t.updateQueue;
                            if (q === null) {
                                var te = new Set;
                                te.add(k), t.updateQueue = te
                            } else q.add(k);
                            break e
                        } else {
                            if ((t & 1) === 0) {
                                Wd(c, M, t), rl();
                                break e
                            }
                            k = Error(s(426))
                        }
                    } else if (Pe && w.mode & 1) {
                        var Ve = Ud(m);
                        if (Ve !== null) {
                            (Ve.flags & 65536) === 0 && (Ve.flags |= 256), $d(Ve, m, w, c, t), pa(cr(k, w));
                            break e
                        }
                    }
                    c = k = cr(k, w), Be !== 4 && (Be = 2), ai === null ? ai = [c] : ai.push(c), c = m;
                    do {
                        switch (c.tag) {
                            case 3:
                                c.flags |= 65536, t &= -t, c.lanes |= t;
                                var T = Fd(c, k, t);
                                hd(c, T);
                                break e;
                            case 1:
                                w = k;
                                var j = c.type, E = c.stateNode;
                                if ((c.flags & 128) === 0 && (typeof j.getDerivedStateFromError == "function" || E !== null && typeof E.componentDidCatch == "function" && (hn === null || !hn.has(E)))) {
                                    c.flags |= 65536, t &= -t, c.lanes |= t;
                                    var W = Bd(c, w, t);
                                    hd(c, W);
                                    break e
                                }
                        }
                        c = c.return
                    } while (c !== null)
                }
                kf(i)
            } catch (ne) {
                t = ne, _e === i && i !== null && (_e = i = i.return);
                continue
            }
            break
        } while (!0)
    }

    function wf() {
        var e = ks.current;
        return ks.current = gs, e === null ? gs : e
    }

    function rl() {
        (Be === 0 || Be === 3 || Be === 2) && (Be = 4), $e === null || (An & 268435455) === 0 && (js & 268435455) === 0 || gn($e, Ge)
    }

    function Ms(e, t) {
        var i = fe;
        fe |= 2;
        var o = wf();
        ($e !== e || Ge !== t) && (Yt = null, Dn(e, t));
        do try {
            Fg();
            break
        } catch (l) {
            xf(e, l)
        } while (!0);
        if (ga(), fe = i, ks.current = o, _e !== null) throw Error(s(261));
        return $e = null, Ge = 0, Be
    }

    function Fg() {
        for (; _e !== null;) Sf(_e)
    }

    function Bg() {
        for (; _e !== null && !f0();) Sf(_e)
    }

    function Sf(e) {
        var t = Nf(e.alternate, e, pt);
        e.memoizedProps = e.pendingProps, t === null ? kf(e) : _e = t, Qa.current = null
    }

    function kf(e) {
        var t = e;
        do {
            var i = t.alternate;
            if (e = t.return, (t.flags & 32768) === 0) {
                if (i = Rg(i, t, pt), i !== null) {
                    _e = i;
                    return
                }
            } else {
                if (i = Dg(i, t), i !== null) {
                    i.flags &= 32767, _e = i;
                    return
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null; else {
                    Be = 6, _e = null;
                    return
                }
            }
            if (t = t.sibling, t !== null) {
                _e = t;
                return
            }
            _e = t = e
        } while (t !== null);
        Be === 0 && (Be = 5)
    }

    function Vn(e, t, i) {
        var o = ye, l = wt.transition;
        try {
            wt.transition = null, ye = 1, Wg(e, t, i, o)
        } finally {
            wt.transition = l, ye = o
        }
        return null
    }

    function Wg(e, t, i, o) {
        do pr(); while (pn !== null);
        if ((fe & 6) !== 0) throw Error(s(327));
        i = e.finishedWork;
        var l = e.finishedLanes;
        if (i === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, i === e.current) throw Error(s(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var c = i.lanes | i.childLanes;
        if (k0(e, c), e === $e && (_e = $e = null, Ge = 0), (i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0 || Ns || (Ns = !0, Tf(Ri, function () {
            return pr(), null
        })), c = (i.flags & 15990) !== 0, (i.subtreeFlags & 15990) !== 0 || c) {
            c = wt.transition, wt.transition = null;
            var m = ye;
            ye = 1;
            var w = fe;
            fe |= 4, Qa.current = null, Lg(e, i), ff(i, e), lg(ra), Fi = !!na, ra = na = null, e.current = i, _g(i), h0(), fe = w, ye = m, wt.transition = c
        } else e.current = i;
        if (Ns && (Ns = !1, pn = e, Ts = l), c = e.pendingLanes, c === 0 && (hn = null), g0(i.stateNode), lt(e, De()), t !== null) for (o = e.onRecoverableError, i = 0; i < t.length; i++) l = t[i], o(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
        if (Cs) throw Cs = !1, e = Za, Za = null, e;
        return (Ts & 1) !== 0 && e.tag !== 0 && pr(), c = e.pendingLanes, (c & 1) !== 0 ? e === qa ? li++ : (li = 0, qa = e) : li = 0, un(), null
    }

    function pr() {
        if (pn !== null) {
            var e = uc(Ts), t = wt.transition, i = ye;
            try {
                if (wt.transition = null, ye = 16 > e ? 16 : e, pn === null) var o = !1; else {
                    if (e = pn, pn = null, Ts = 0, (fe & 6) !== 0) throw Error(s(331));
                    var l = fe;
                    for (fe |= 4, Y = e.current; Y !== null;) {
                        var c = Y, m = c.child;
                        if ((Y.flags & 16) !== 0) {
                            var w = c.deletions;
                            if (w !== null) {
                                for (var k = 0; k < w.length; k++) {
                                    var M = w[k];
                                    for (Y = M; Y !== null;) {
                                        var L = Y;
                                        switch (L.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                si(8, L, c)
                                        }
                                        var _ = L.child;
                                        if (_ !== null) _.return = L, Y = _; else for (; Y !== null;) {
                                            L = Y;
                                            var V = L.sibling, Q = L.return;
                                            if (af(L), L === M) {
                                                Y = null;
                                                break
                                            }
                                            if (V !== null) {
                                                V.return = Q, Y = V;
                                                break
                                            }
                                            Y = Q
                                        }
                                    }
                                }
                                var q = c.alternate;
                                if (q !== null) {
                                    var te = q.child;
                                    if (te !== null) {
                                        q.child = null;
                                        do {
                                            var Ve = te.sibling;
                                            te.sibling = null, te = Ve
                                        } while (te !== null)
                                    }
                                }
                                Y = c
                            }
                        }
                        if ((c.subtreeFlags & 2064) !== 0 && m !== null) m.return = c, Y = m; else e:for (; Y !== null;) {
                            if (c = Y, (c.flags & 2048) !== 0) switch (c.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    si(9, c, c.return)
                            }
                            var T = c.sibling;
                            if (T !== null) {
                                T.return = c.return, Y = T;
                                break e
                            }
                            Y = c.return
                        }
                    }
                    var j = e.current;
                    for (Y = j; Y !== null;) {
                        m = Y;
                        var E = m.child;
                        if ((m.subtreeFlags & 2064) !== 0 && E !== null) E.return = m, Y = E; else e:for (m = j; Y !== null;) {
                            if (w = Y, (w.flags & 2048) !== 0) try {
                                switch (w.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ss(9, w)
                                }
                            } catch (ne) {
                                Ae(w, w.return, ne)
                            }
                            if (w === m) {
                                Y = null;
                                break e
                            }
                            var W = w.sibling;
                            if (W !== null) {
                                W.return = w.return, Y = W;
                                break e
                            }
                            Y = w.return
                        }
                    }
                    if (fe = l, un(), Dt && typeof Dt.onPostCommitFiberRoot == "function") try {
                        Dt.onPostCommitFiberRoot(Di, e)
                    } catch {
                    }
                    o = !0
                }
                return o
            } finally {
                ye = i, wt.transition = t
            }
        }
        return !1
    }

    function jf(e, t, i) {
        t = cr(i, t), t = Fd(e, t, 1), e = dn(e, t, 1), t = tt(), e !== null && (Ar(e, 1, t), lt(e, t))
    }

    function Ae(e, t, i) {
        if (e.tag === 3) jf(e, e, i); else for (; t !== null;) {
            if (t.tag === 3) {
                jf(t, e, i);
                break
            } else if (t.tag === 1) {
                var o = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (hn === null || !hn.has(o))) {
                    e = cr(i, e), e = Bd(t, e, 1), t = dn(t, e, 1), e = tt(), t !== null && (Ar(t, 1, e), lt(t, e));
                    break
                }
            }
            t = t.return
        }
    }

    function Ug(e, t, i) {
        var o = e.pingCache;
        o !== null && o.delete(t), t = tt(), e.pingedLanes |= e.suspendedLanes & i, $e === e && (Ge & i) === i && (Be === 4 || Be === 3 && (Ge & 130023424) === Ge && 500 > De() - Ya ? Dn(e, 0) : Xa |= i), lt(e, t)
    }

    function Cf(e, t) {
        t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Li, Li <<= 1, (Li & 130023424) === 0 && (Li = 4194304)));
        var i = tt();
        e = Gt(e, t), e !== null && (Ar(e, t, i), lt(e, i))
    }

    function $g(e) {
        var t = e.memoizedState, i = 0;
        t !== null && (i = t.retryLane), Cf(e, i)
    }

    function Hg(e, t) {
        var i = 0;
        switch (e.tag) {
            case 13:
                var o = e.stateNode, l = e.memoizedState;
                l !== null && (i = l.retryLane);
                break;
            case 19:
                o = e.stateNode;
                break;
            default:
                throw Error(s(314))
        }
        o !== null && o.delete(t), Cf(e, i)
    }

    var Nf;
    Nf = function (e, t, i) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps || it.current) ot = !0; else {
            if ((e.lanes & i) === 0 && (t.flags & 128) === 0) return ot = !1, Ag(e, t, i);
            ot = (e.flags & 131072) !== 0
        } else ot = !1, Pe && (t.flags & 1048576) !== 0 && rd(t, is, t.index);
        switch (t.lanes = 0, t.tag) {
            case 2:
                var o = t.type;
                xs(e, t), e = t.pendingProps;
                var l = nr(t, Ye.current);
                lr(t, i), l = Pa(null, t, o, e, l, i);
                var c = Ea();
                return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, st(o) ? (c = !0, ts(t)) : c = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, wa(t), l.updater = ys, t.stateNode = l, l._reactInternals = t, Da(t, o, e, i), t = Ia(null, t, o, !0, c, i)) : (t.tag = 0, Pe && c && ca(t), et(null, t, l, i), t = t.child), t;
            case 16:
                o = t.elementType;
                e:{
                    switch (xs(e, t), e = t.pendingProps, l = o._init, o = l(o._payload), t.type = o, l = t.tag = Gg(o), e = Pt(o, e), l) {
                        case 0:
                            t = _a(null, t, o, e, i);
                            break e;
                        case 1:
                            t = Yd(null, t, o, e, i);
                            break e;
                        case 11:
                            t = Hd(null, t, o, e, i);
                            break e;
                        case 14:
                            t = Kd(null, t, o, Pt(o.type, e), i);
                            break e
                    }
                    throw Error(s(306, o, ""))
                }
                return t;
            case 0:
                return o = t.type, l = t.pendingProps, l = t.elementType === o ? l : Pt(o, l), _a(e, t, o, l, i);
            case 1:
                return o = t.type, l = t.pendingProps, l = t.elementType === o ? l : Pt(o, l), Yd(e, t, o, l, i);
            case 3:
                e:{
                    if (Zd(t), e === null) throw Error(s(387));
                    o = t.pendingProps, c = t.memoizedState, l = c.element, fd(e, t), cs(t, o, null, i);
                    var m = t.memoizedState;
                    if (o = m.element, c.isDehydrated) if (c = {
                        element: o,
                        isDehydrated: !1,
                        cache: m.cache,
                        pendingSuspenseBoundaries: m.pendingSuspenseBoundaries,
                        transitions: m.transitions
                    }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
                        l = cr(Error(s(423)), t), t = qd(e, t, o, i, l);
                        break e
                    } else if (o !== l) {
                        l = cr(Error(s(424)), t), t = qd(e, t, o, i, l);
                        break e
                    } else for (ht = on(t.stateNode.containerInfo.firstChild), ft = t, Pe = !0, Tt = null, i = cd(t, null, o, i), t.child = i; i;) i.flags = i.flags & -3 | 4096, i = i.sibling; else {
                        if (sr(), o === l) {
                            t = Xt(e, t, i);
                            break e
                        }
                        et(e, t, o, i)
                    }
                    t = t.child
                }
                return t;
            case 5:
                return md(t), e === null && ha(t), o = t.type, l = t.pendingProps, c = e !== null ? e.memoizedProps : null, m = l.children, ia(o, l) ? m = null : c !== null && ia(o, c) && (t.flags |= 32), Xd(e, t), et(e, t, m, i), t.child;
            case 6:
                return e === null && ha(t), null;
            case 13:
                return Jd(e, t, i);
            case 4:
                return Sa(t, t.stateNode.containerInfo), o = t.pendingProps, e === null ? t.child = or(t, null, o, i) : et(e, t, o, i), t.child;
            case 11:
                return o = t.type, l = t.pendingProps, l = t.elementType === o ? l : Pt(o, l), Hd(e, t, o, l, i);
            case 7:
                return et(e, t, t.pendingProps, i), t.child;
            case 8:
                return et(e, t, t.pendingProps.children, i), t.child;
            case 12:
                return et(e, t, t.pendingProps.children, i), t.child;
            case 10:
                e:{
                    if (o = t.type._context, l = t.pendingProps, c = t.memoizedProps, m = l.value, Se(as, o._currentValue), o._currentValue = m, c !== null) if (Nt(c.value, m)) {
                        if (c.children === l.children && !it.current) {
                            t = Xt(e, t, i);
                            break e
                        }
                    } else for (c = t.child, c !== null && (c.return = t); c !== null;) {
                        var w = c.dependencies;
                        if (w !== null) {
                            m = c.child;
                            for (var k = w.firstContext; k !== null;) {
                                if (k.context === o) {
                                    if (c.tag === 1) {
                                        k = Qt(-1, i & -i), k.tag = 2;
                                        var M = c.updateQueue;
                                        if (M !== null) {
                                            M = M.shared;
                                            var L = M.pending;
                                            L === null ? k.next = k : (k.next = L.next, L.next = k), M.pending = k
                                        }
                                    }
                                    c.lanes |= i, k = c.alternate, k !== null && (k.lanes |= i), va(c.return, i, t), w.lanes |= i;
                                    break
                                }
                                k = k.next
                            }
                        } else if (c.tag === 10) m = c.type === t.type ? null : c.child; else if (c.tag === 18) {
                            if (m = c.return, m === null) throw Error(s(341));
                            m.lanes |= i, w = m.alternate, w !== null && (w.lanes |= i), va(m, i, t), m = c.sibling
                        } else m = c.child;
                        if (m !== null) m.return = c; else for (m = c; m !== null;) {
                            if (m === t) {
                                m = null;
                                break
                            }
                            if (c = m.sibling, c !== null) {
                                c.return = m.return, m = c;
                                break
                            }
                            m = m.return
                        }
                        c = m
                    }
                    et(e, t, l.children, i), t = t.child
                }
                return t;
            case 9:
                return l = t.type, o = t.pendingProps.children, lr(t, i), l = vt(l), o = o(l), t.flags |= 1, et(e, t, o, i), t.child;
            case 14:
                return o = t.type, l = Pt(o, t.pendingProps), l = Pt(o.type, l), Kd(e, t, o, l, i);
            case 15:
                return Gd(e, t, t.type, t.pendingProps, i);
            case 17:
                return o = t.type, l = t.pendingProps, l = t.elementType === o ? l : Pt(o, l), xs(e, t), t.tag = 1, st(o) ? (e = !0, ts(t)) : e = !1, lr(t, i), Id(t, o, l), Da(t, o, l, i), Ia(null, t, o, !0, e, i);
            case 19:
                return tf(e, t, i);
            case 22:
                return Qd(e, t, i)
        }
        throw Error(s(156, t.tag))
    };

    function Tf(e, t) {
        return ic(e, t)
    }

    function Kg(e, t, i, o) {
        this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function St(e, t, i, o) {
        return new Kg(e, t, i, o)
    }

    function il(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function Gg(e) {
        if (typeof e == "function") return il(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === ae) return 11;
            if (e === Le) return 14
        }
        return 2
    }

    function yn(e, t) {
        var i = e.alternate;
        return i === null ? (i = St(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 14680064, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, t = e.dependencies, i.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i
    }

    function bs(e, t, i, o, l, c) {
        var m = 2;
        if (o = e, typeof e == "function") il(e) && (m = 1); else if (typeof e == "string") m = 5; else e:switch (e) {
            case K:
                return Ln(i.children, l, c, t);
            case $:
                m = 8, l |= 8;
                break;
            case se:
                return e = St(12, i, t, l | 2), e.elementType = se, e.lanes = c, e;
            case ke:
                return e = St(13, i, t, l), e.elementType = ke, e.lanes = c, e;
            case ze:
                return e = St(19, i, t, l), e.elementType = ze, e.lanes = c, e;
            case Ee:
                return zs(i, l, c, t);
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case Z:
                        m = 10;
                        break e;
                    case O:
                        m = 9;
                        break e;
                    case ae:
                        m = 11;
                        break e;
                    case Le:
                        m = 14;
                        break e;
                    case je:
                        m = 16, o = null;
                        break e
                }
                throw Error(s(130, e == null ? e : typeof e, ""))
        }
        return t = St(m, i, t, l), t.elementType = e, t.type = o, t.lanes = c, t
    }

    function Ln(e, t, i, o) {
        return e = St(7, e, o, t), e.lanes = i, e
    }

    function zs(e, t, i, o) {
        return e = St(22, e, o, t), e.elementType = Ee, e.lanes = i, e.stateNode = {isHidden: !1}, e
    }

    function sl(e, t, i) {
        return e = St(6, e, null, t), e.lanes = i, e
    }

    function ol(e, t, i) {
        return t = St(4, e.children !== null ? e.children : [], e.key, t), t.lanes = i, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function Qg(e, t, i, o, l) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ro(0), this.expirationTimes = Ro(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ro(0), this.identifierPrefix = o, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
    }

    function al(e, t, i, o, l, c, m, w, k) {
        return e = new Qg(e, t, i, w, k), t === 1 ? (t = 1, c === !0 && (t |= 8)) : t = 0, c = St(3, null, null, t), e.current = c, c.stateNode = e, c.memoizedState = {
            element: o,
            isDehydrated: i,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, wa(c), e
    }

    function Xg(e, t, i) {
        var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {$$typeof: P, key: o == null ? null : "" + o, children: e, containerInfo: t, implementation: i}
    }

    function Pf(e) {
        if (!e) return ln;
        e = e._reactInternals;
        e:{
            if (Cn(e) !== e || e.tag !== 1) throw Error(s(170));
            var t = e;
            do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (st(t.type)) {
                            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e
                        }
                }
                t = t.return
            } while (t !== null);
            throw Error(s(171))
        }
        if (e.tag === 1) {
            var i = e.type;
            if (st(i)) return ed(e, i, t)
        }
        return t
    }

    function Ef(e, t, i, o, l, c, m, w, k) {
        return e = al(i, o, !0, e, l, c, m, w, k), e.context = Pf(null), i = e.current, o = tt(), l = mn(i), c = Qt(o, l), c.callback = t ?? null, dn(i, c, l), e.current.lanes = l, Ar(e, l, o), lt(e, o), e
    }

    function As(e, t, i, o) {
        var l = t.current, c = tt(), m = mn(l);
        return i = Pf(i), t.context === null ? t.context = i : t.pendingContext = i, t = Qt(c, m), t.payload = {element: e}, o = o === void 0 ? null : o, o !== null && (t.callback = o), e = dn(l, t, m), e !== null && (bt(e, l, m, c), us(e, l, m)), m
    }

    function Rs(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode
        }
    }

    function Mf(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var i = e.retryLane;
            e.retryLane = i !== 0 && i < t ? i : t
        }
    }

    function ll(e, t) {
        Mf(e, t), (e = e.alternate) && Mf(e, t)
    }

    function Yg() {
        return null
    }

    var bf = typeof reportError == "function" ? reportError : function (e) {
        console.error(e)
    };

    function ul(e) {
        this._internalRoot = e
    }

    Ds.prototype.render = ul.prototype.render = function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(s(409));
        As(e, t, null, null)
    }, Ds.prototype.unmount = ul.prototype.unmount = function () {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Rn(function () {
                As(null, e, null, null)
            }), t[Ut] = null
        }
    };

    function Ds(e) {
        this._internalRoot = e
    }

    Ds.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = fc();
            e = {blockedOn: null, target: e, priority: t};
            for (var i = 0; i < nn.length && t !== 0 && t < nn[i].priority; i++) ;
            nn.splice(i, 0, e), i === 0 && mc(e)
        }
    };

    function cl(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function Vs(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }

    function zf() {
    }

    function Zg(e, t, i, o, l) {
        if (l) {
            if (typeof o == "function") {
                var c = o;
                o = function () {
                    var M = Rs(m);
                    c.call(M)
                }
            }
            var m = Ef(t, o, e, 0, null, !1, !1, "", zf);
            return e._reactRootContainer = m, e[Ut] = m.current, Kr(e.nodeType === 8 ? e.parentNode : e), Rn(), m
        }
        for (; l = e.lastChild;) e.removeChild(l);
        if (typeof o == "function") {
            var w = o;
            o = function () {
                var M = Rs(k);
                w.call(M)
            }
        }
        var k = al(e, 0, !1, null, null, !1, !1, "", zf);
        return e._reactRootContainer = k, e[Ut] = k.current, Kr(e.nodeType === 8 ? e.parentNode : e), Rn(function () {
            As(t, k, i, o)
        }), k
    }

    function Ls(e, t, i, o, l) {
        var c = i._reactRootContainer;
        if (c) {
            var m = c;
            if (typeof l == "function") {
                var w = l;
                l = function () {
                    var k = Rs(m);
                    w.call(k)
                }
            }
            As(t, m, e, l)
        } else m = Zg(i, t, e, l, o);
        return Rs(m)
    }

    cc = function (e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var i = zr(t.pendingLanes);
                    i !== 0 && (Do(t, i | 1), lt(t, De()), (fe & 6) === 0 && (hr = De() + 500, un()))
                }
                break;
            case 13:
                Rn(function () {
                    var o = Gt(e, 1);
                    if (o !== null) {
                        var l = tt();
                        bt(o, e, 1, l)
                    }
                }), ll(e, 1)
        }
    }, Vo = function (e) {
        if (e.tag === 13) {
            var t = Gt(e, 134217728);
            if (t !== null) {
                var i = tt();
                bt(t, e, 134217728, i)
            }
            ll(e, 134217728)
        }
    }, dc = function (e) {
        if (e.tag === 13) {
            var t = mn(e), i = Gt(e, t);
            if (i !== null) {
                var o = tt();
                bt(i, e, t, o)
            }
            ll(e, t)
        }
    }, fc = function () {
        return ye
    }, hc = function (e, t) {
        var i = ye;
        try {
            return ye = e, t()
        } finally {
            ye = i
        }
    }, Po = function (e, t, i) {
        switch (t) {
            case"input":
                if (xo(e, i), t = i.name, i.type === "radio" && t != null) {
                    for (i = e; i.parentNode;) i = i.parentNode;
                    for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < i.length; t++) {
                        var o = i[t];
                        if (o !== e && o.form === e.form) {
                            var l = Ji(o);
                            if (!l) throw Error(s(90));
                            _u(o), xo(o, l)
                        }
                    }
                }
                break;
            case"textarea":
                Wu(e, i);
                break;
            case"select":
                t = i.value, t != null && $n(e, !!i.multiple, t, !1)
        }
    }, Zu = tl, qu = Rn;
    var qg = {usingClientEntryPoint: !1, Events: [Xr, er, Ji, Xu, Yu, tl]},
        ui = {findFiberByHostInstance: Nn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom"}, Jg = {
            bundleType: ui.bundleType,
            version: ui.version,
            rendererPackageName: ui.rendererPackageName,
            rendererConfig: ui.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: F.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
                return e = nc(e), e === null ? null : e.stateNode
            },
            findFiberByHostInstance: ui.findFiberByHostInstance || Yg,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var _s = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!_s.isDisabled && _s.supportsFiber) try {
            Di = _s.inject(Jg), Dt = _s
        } catch {
        }
    }
    return ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qg, ut.createPortal = function (e, t) {
        var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!cl(t)) throw Error(s(200));
        return Xg(e, t, null, i)
    }, ut.createRoot = function (e, t) {
        if (!cl(e)) throw Error(s(299));
        var i = !1, o = "", l = bf;
        return t != null && (t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = al(e, 1, !1, null, null, i, !1, o, l), e[Ut] = t.current, Kr(e.nodeType === 8 ? e.parentNode : e), new ul(t)
    }, ut.findDOMNode = function (e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
        return e = nc(t), e = e === null ? null : e.stateNode, e
    }, ut.flushSync = function (e) {
        return Rn(e)
    }, ut.hydrate = function (e, t, i) {
        if (!Vs(t)) throw Error(s(200));
        return Ls(null, e, t, !0, i)
    }, ut.hydrateRoot = function (e, t, i) {
        if (!cl(e)) throw Error(s(405));
        var o = i != null && i.hydratedSources || null, l = !1, c = "", m = bf;
        if (i != null && (i.unstable_strictMode === !0 && (l = !0), i.identifierPrefix !== void 0 && (c = i.identifierPrefix), i.onRecoverableError !== void 0 && (m = i.onRecoverableError)), t = Ef(t, null, e, 1, i ?? null, l, !1, c, m), e[Ut] = t.current, Kr(e), o) for (e = 0; e < o.length; e++) i = o[e], l = i._getVersion, l = l(i._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [i, l] : t.mutableSourceEagerHydrationData.push(i, l);
        return new Ds(t)
    }, ut.render = function (e, t, i) {
        if (!Vs(t)) throw Error(s(200));
        return Ls(null, e, t, !1, i)
    }, ut.unmountComponentAtNode = function (e) {
        if (!Vs(e)) throw Error(s(40));
        return e._reactRootContainer ? (Rn(function () {
            Ls(null, null, e, !1, function () {
                e._reactRootContainer = null, e[Ut] = null
            })
        }), !0) : !1
    }, ut.unstable_batchedUpdates = tl, ut.unstable_renderSubtreeIntoContainer = function (e, t, i, o) {
        if (!Vs(i)) throw Error(s(200));
        if (e == null || e._reactInternals === void 0) throw Error(s(38));
        return Ls(e, t, i, !1, o)
    }, ut.version = "18.3.1-next-f1338f8080-20240426", ut
}

var Of;

function ay() {
    if (Of) return hl.exports;
    Of = 1;

    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
        } catch (r) {
            console.error(r)
        }
    }

    return n(), hl.exports = oy(), hl.exports
}

var Ff;

function ly() {
    if (Ff) return Is;
    Ff = 1;
    var n = ay();
    return Is.createRoot = n.createRoot, Is.hydrateRoot = n.hydrateRoot, Is
}

var uy = ly(), H = au();
const lu = H.createContext({});

function uu(n) {
    const r = H.useRef(null);
    return r.current === null && (r.current = n()), r.current
}

const cy = typeof window < "u", cp = cy ? H.useLayoutEffect : H.useEffect, fo = H.createContext(null);

function cu(n, r) {
    n.indexOf(r) === -1 && n.push(r)
}

function to(n, r) {
    const s = n.indexOf(r);
    s > -1 && n.splice(s, 1)
}

const Wt = (n, r, s) => s > r ? r : s < n ? n : s;
let du = () => {
};
const Sn = {}, dp = n => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n), fp = n => typeof n == "object" && n !== null,
    hp = n => /^0[^.\s]+$/u.test(n);

function pp(n) {
    let r;
    return () => (r === void 0 && (r = n()), r)
}

const jt = n => n, Ci = (...n) => n.reduce((r, s) => a => s(r(a))), wi = (n, r, s) => {
    const a = r - n;
    return a ? (s - n) / a : 1
};

class fu {
    constructor() {
        this.subscriptions = []
    }

    add(r) {
        return cu(this.subscriptions, r), () => to(this.subscriptions, r)
    }

    notify(r, s, a) {
        const u = this.subscriptions.length;
        if (u) if (u === 1) this.subscriptions[0](r, s, a); else for (let f = 0; f < u; f++) {
            const d = this.subscriptions[f];
            d && d(r, s, a)
        }
    }

    getSize() {
        return this.subscriptions.length
    }

    clear() {
        this.subscriptions.length = 0
    }
}

const mt = n => n * 1e3, kt = n => n / 1e3, mp = (n, r) => r ? n * (1e3 / r) : 0,
    gp = (n, r, s) => (((1 - 3 * s + 3 * r) * n + (3 * s - 6 * r)) * n + 3 * r) * n, dy = 1e-7, fy = 12;

function hy(n, r, s, a, u) {
    let f, d, p = 0;
    do d = r + (s - r) / 2, f = gp(d, a, u) - n, f > 0 ? s = d : r = d; while (Math.abs(f) > dy && ++p < fy);
    return d
}

function Ni(n, r, s, a) {
    if (n === r && s === a) return jt;
    const u = f => hy(f, 0, 1, n, s);
    return f => f === 0 || f === 1 ? f : gp(u(f), r, a)
}

const yp = n => r => r <= .5 ? n(2 * r) / 2 : (2 - n(2 * (1 - r))) / 2, vp = n => r => 1 - n(1 - r),
    xp = Ni(.33, 1.53, .69, .99), hu = vp(xp), wp = yp(hu),
    Sp = n => n >= 1 ? 1 : (n *= 2) < 1 ? .5 * hu(n) : .5 * (2 - Math.pow(2, -10 * (n - 1))),
    pu = n => 1 - Math.sin(Math.acos(n)), kp = vp(pu), jp = yp(pu), py = Ni(.42, 0, 1, 1), my = Ni(0, 0, .58, 1),
    Cp = Ni(.42, 0, .58, 1), gy = n => Array.isArray(n) && typeof n[0] != "number",
    Np = n => Array.isArray(n) && typeof n[0] == "number", yy = {
        linear: jt,
        easeIn: py,
        easeInOut: Cp,
        easeOut: my,
        circIn: pu,
        circInOut: jp,
        circOut: kp,
        backIn: hu,
        backInOut: wp,
        backOut: xp,
        anticipate: Sp
    }, vy = n => typeof n == "string", Bf = n => {
        if (Np(n)) {
            du(n.length === 4);
            const [r, s, a, u] = n;
            return Ni(r, s, a, u)
        } else if (vy(n)) return yy[n];
        return n
    }, Os = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];

function xy(n, r) {
    let s = new Set, a = new Set, u = !1, f = !1;
    const d = new WeakSet;
    let p = {delta: 0, timestamp: 0, isProcessing: !1};

    function g(y) {
        d.has(y) && (v.schedule(y), n()), y(p)
    }

    const v = {
        schedule: (y, x = !1, S = !1) => {
            const b = S && u ? s : a;
            return x && d.add(y), b.add(y), y
        }, cancel: y => {
            a.delete(y), d.delete(y)
        }, process: y => {
            if (p = y, u) {
                f = !0;
                return
            }
            u = !0;
            const x = s;
            s = a, a = x, s.forEach(g), s.clear(), u = !1, f && (f = !1, v.process(y))
        }
    };
    return v
}

const wy = 40;

function Tp(n, r) {
    let s = !1, a = !0;
    const u = {delta: 0, timestamp: 0, isProcessing: !1}, f = () => s = !0,
        d = Os.reduce((I, F) => (I[F] = xy(f), I), {}), {
            setup: p,
            read: g,
            resolveKeyframes: v,
            preUpdate: y,
            update: x,
            preRender: S,
            render: N,
            postRender: b
        } = d, A = () => {
            const I = Sn.useManualTiming, F = I ? u.timestamp : performance.now();
            s = !1, I || (u.delta = a ? 1e3 / 60 : Math.max(Math.min(F - u.timestamp, wy), 1)), u.timestamp = F, u.isProcessing = !0, p.process(u), g.process(u), v.process(u), y.process(u), x.process(u), S.process(u), N.process(u), b.process(u), u.isProcessing = !1, s && r && (a = !1, n(A))
        }, z = () => {
            s = !0, a = !0, u.isProcessing || n(A)
        };
    return {
        schedule: Os.reduce((I, F) => {
            const X = d[F];
            return I[F] = (P, K = !1, $ = !1) => (s || z(), X.schedule(P, K, $)), I
        }, {}), cancel: I => {
            for (let F = 0; F < Os.length; F++) d[Os[F]].cancel(I)
        }, state: u, steps: d
    }
}

const {
    schedule: xe,
    cancel: kn,
    state: Qe,
    steps: gl
} = Tp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : jt, !0);
let Ks;

function Sy() {
    Ks = void 0
}

const nt = {
        now: () => (Ks === void 0 && nt.set(Qe.isProcessing || Sn.useManualTiming ? Qe.timestamp : performance.now()), Ks),
        set: n => {
            Ks = n, queueMicrotask(Sy)
        }
    }, Pp = n => r => typeof r == "string" && r.startsWith(n), Ep = Pp("--"), ky = Pp("var(--"),
    mu = n => ky(n) ? jy.test(n.split("/*")[0].trim()) : !1,
    jy = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

function Wf(n) {
    return typeof n != "string" ? !1 : n.split("/*")[0].includes("var(--")
}

const kr = {test: n => typeof n == "number", parse: parseFloat, transform: n => n},
    Si = {...kr, transform: n => Wt(0, 1, n)}, Fs = {...kr, default: 1}, gi = n => Math.round(n * 1e5) / 1e5,
    gu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function Cy(n) {
    return n == null
}

const Ny = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    yu = (n, r) => s => !!(typeof s == "string" && Ny.test(s) && s.startsWith(n) || r && !Cy(s) && Object.prototype.hasOwnProperty.call(s, r)),
    Mp = (n, r, s) => a => {
        if (typeof a != "string") return a;
        const [u, f, d, p] = a.match(gu);
        return {[n]: parseFloat(u), [r]: parseFloat(f), [s]: parseFloat(d), alpha: p !== void 0 ? parseFloat(p) : 1}
    }, Ty = n => Wt(0, 255, n), yl = {...kr, transform: n => Math.round(Ty(n))}, On = {
        test: yu("rgb", "red"),
        parse: Mp("red", "green", "blue"),
        transform: ({
                        red: n,
                        green: r,
                        blue: s,
                        alpha: a = 1
                    }) => "rgba(" + yl.transform(n) + ", " + yl.transform(r) + ", " + yl.transform(s) + ", " + gi(Si.transform(a)) + ")"
    };

function Py(n) {
    let r = "", s = "", a = "", u = "";
    return n.length > 5 ? (r = n.substring(1, 3), s = n.substring(3, 5), a = n.substring(5, 7), u = n.substring(7, 9)) : (r = n.substring(1, 2), s = n.substring(2, 3), a = n.substring(3, 4), u = n.substring(4, 5), r += r, s += s, a += a, u += u), {
        red: parseInt(r, 16),
        green: parseInt(s, 16),
        blue: parseInt(a, 16),
        alpha: u ? parseInt(u, 16) / 255 : 1
    }
}

const Al = {test: yu("#"), parse: Py, transform: On.transform}, Ti = n => ({
        test: r => typeof r == "string" && r.endsWith(n) && r.split(" ").length === 1,
        parse: parseFloat,
        transform: r => `${r}${n}`
    }), qt = Ti("deg"), Bt = Ti("%"), J = Ti("px"), Ey = Ti("vh"), My = Ti("vw"),
    Uf = {...Bt, parse: n => Bt.parse(n) / 100, transform: n => Bt.transform(n * 100)}, yr = {
        test: yu("hsl", "hue"),
        parse: Mp("hue", "saturation", "lightness"),
        transform: ({
                        hue: n,
                        saturation: r,
                        lightness: s,
                        alpha: a = 1
                    }) => "hsla(" + Math.round(n) + ", " + Bt.transform(gi(r)) + ", " + Bt.transform(gi(s)) + ", " + gi(Si.transform(a)) + ")"
    }, Oe = {
        test: n => On.test(n) || Al.test(n) || yr.test(n),
        parse: n => On.test(n) ? On.parse(n) : yr.test(n) ? yr.parse(n) : Al.parse(n),
        transform: n => typeof n == "string" ? n : n.hasOwnProperty("red") ? On.transform(n) : yr.transform(n),
        getAnimatableNone: n => {
            const r = Oe.parse(n);
            return r.alpha = 0, Oe.transform(r)
        }
    },
    by = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function zy(n) {
    var r, s;
    return isNaN(n) && typeof n == "string" && (((r = n.match(gu)) == null ? void 0 : r.length) || 0) + (((s = n.match(by)) == null ? void 0 : s.length) || 0) > 0
}

const bp = "number", zp = "color", Ay = "var", Ry = "var(", $f = "${}",
    Dy = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function wr(n) {
    const r = n.toString(), s = [], a = {color: [], number: [], var: []}, u = [];
    let f = 0;
    const p = r.replace(Dy, g => (Oe.test(g) ? (a.color.push(f), u.push(zp), s.push(Oe.parse(g))) : g.startsWith(Ry) ? (a.var.push(f), u.push(Ay), s.push(g)) : (a.number.push(f), u.push(bp), s.push(parseFloat(g))), ++f, $f)).split($f);
    return {values: s, split: p, indexes: a, types: u}
}

function Vy(n) {
    return wr(n).values
}

function Ap({split: n, types: r}) {
    const s = n.length;
    return a => {
        let u = "";
        for (let f = 0; f < s; f++) if (u += n[f], a[f] !== void 0) {
            const d = r[f];
            d === bp ? u += gi(a[f]) : d === zp ? u += Oe.transform(a[f]) : u += a[f]
        }
        return u
    }
}

function Ly(n) {
    return Ap(wr(n))
}

const _y = n => typeof n == "number" ? 0 : Oe.test(n) ? Oe.getAnimatableNone(n) : n,
    Iy = (n, r) => typeof n == "number" ? r != null && r.trim().endsWith("/") ? n : 0 : _y(n);

function Oy(n) {
    const r = wr(n);
    return Ap(r)(r.values.map((a, u) => Iy(a, r.split[u])))
}

const Rt = {test: zy, parse: Vy, createTransformer: Ly, getAnimatableNone: Oy};

function vl(n, r, s) {
    return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? n + (r - n) * 6 * s : s < 1 / 2 ? r : s < 2 / 3 ? n + (r - n) * (2 / 3 - s) * 6 : n
}

function Fy({hue: n, saturation: r, lightness: s, alpha: a}) {
    n /= 360, r /= 100, s /= 100;
    let u = 0, f = 0, d = 0;
    if (!r) u = f = d = s; else {
        const p = s < .5 ? s * (1 + r) : s + r - s * r, g = 2 * s - p;
        u = vl(g, p, n + 1 / 3), f = vl(g, p, n), d = vl(g, p, n - 1 / 3)
    }
    return {red: Math.round(u * 255), green: Math.round(f * 255), blue: Math.round(d * 255), alpha: a}
}

function no(n, r) {
    return s => s > 0 ? r : n
}

const ve = (n, r, s) => n + (r - n) * s, xl = (n, r, s) => {
    const a = n * n, u = s * (r * r - a) + a;
    return u < 0 ? 0 : Math.sqrt(u)
}, By = [Al, On, yr], Wy = n => By.find(r => r.test(n));

function Hf(n) {
    const r = Wy(n);
    if (!r) return !1;
    let s = r.parse(n);
    return r === yr && (s = Fy(s)), s
}

const Kf = (n, r) => {
    const s = Hf(n), a = Hf(r);
    if (!s || !a) return no(n, r);
    const u = {...s};
    return f => (u.red = xl(s.red, a.red, f), u.green = xl(s.green, a.green, f), u.blue = xl(s.blue, a.blue, f), u.alpha = ve(s.alpha, a.alpha, f), On.transform(u))
}, Rl = new Set(["none", "hidden"]);

function Uy(n, r) {
    return Rl.has(n) ? s => s <= 0 ? n : r : s => s >= 1 ? r : n
}

function $y(n, r) {
    return s => ve(n, r, s)
}

function vu(n) {
    return typeof n == "number" ? $y : typeof n == "string" ? mu(n) ? no : Oe.test(n) ? Kf : Gy : Array.isArray(n) ? Rp : typeof n == "object" ? Oe.test(n) ? Kf : Hy : no
}

function Rp(n, r) {
    const s = [...n], a = s.length, u = n.map((f, d) => vu(f)(f, r[d]));
    return f => {
        for (let d = 0; d < a; d++) s[d] = u[d](f);
        return s
    }
}

function Hy(n, r) {
    const s = {...n, ...r}, a = {};
    for (const u in s) n[u] !== void 0 && r[u] !== void 0 && (a[u] = vu(n[u])(n[u], r[u]));
    return u => {
        for (const f in a) s[f] = a[f](u);
        return s
    }
}

function Ky(n, r) {
    const s = [], a = {color: 0, var: 0, number: 0};
    for (let u = 0; u < r.values.length; u++) {
        const f = r.types[u], d = n.indexes[f][a[f]], p = n.values[d] ?? 0;
        s[u] = p, a[f]++
    }
    return s
}

const Gy = (n, r) => {
    const s = Rt.createTransformer(r), a = wr(n), u = wr(r);
    return a.indexes.var.length === u.indexes.var.length && a.indexes.color.length === u.indexes.color.length && a.indexes.number.length >= u.indexes.number.length ? Rl.has(n) && !u.values.length || Rl.has(r) && !a.values.length ? Uy(n, r) : Ci(Rp(Ky(a, u), u.values), s) : no(n, r)
};

function Dp(n, r, s) {
    return typeof n == "number" && typeof r == "number" && typeof s == "number" ? ve(n, r, s) : vu(n)(n, r)
}

const Qy = n => {
    const r = ({timestamp: s}) => n(s);
    return {start: (s = !0) => xe.update(r, s), stop: () => kn(r), now: () => Qe.isProcessing ? Qe.timestamp : nt.now()}
}, Vp = (n, r, s = 10) => {
    let a = "";
    const u = Math.max(Math.round(r / s), 2);
    for (let f = 0; f < u; f++) a += Math.round(n(f / (u - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${a.substring(0, a.length - 2)})`
}, ro = 2e4;

function xu(n) {
    let r = 0;
    const s = 50;
    let a = n.next(r);
    for (; !a.done && r < ro;) r += s, a = n.next(r);
    return r >= ro ? 1 / 0 : r
}

function Xy(n, r = 100, s) {
    const a = s({...n, keyframes: [0, r]}), u = Math.min(xu(a), ro);
    return {type: "keyframes", ease: f => a.next(u * f).value / r, duration: kt(u)}
}

const Re = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {granular: .01, default: 2},
    restDelta: {granular: .005, default: .5},
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
};

function Dl(n, r) {
    return n * Math.sqrt(1 - r * r)
}

const Yy = 12;

function Zy(n, r, s) {
    let a = s;
    for (let u = 1; u < Yy; u++) a = a - n(a) / r(a);
    return a
}

const wl = .001;

function qy({duration: n = Re.duration, bounce: r = Re.bounce, velocity: s = Re.velocity, mass: a = Re.mass}) {
    let u, f, d = 1 - r;
    d = Wt(Re.minDamping, Re.maxDamping, d), n = Wt(Re.minDuration, Re.maxDuration, kt(n)), d < 1 ? (u = v => {
        const y = v * d, x = y * n, S = y - s, N = Dl(v, d), b = Math.exp(-x);
        return wl - S / N * b
    }, f = v => {
        const x = v * d * n, S = x * s + s, N = Math.pow(d, 2) * Math.pow(v, 2) * n, b = Math.exp(-x),
            A = Dl(Math.pow(v, 2), d);
        return (-u(v) + wl > 0 ? -1 : 1) * ((S - N) * b) / A
    }) : (u = v => {
        const y = Math.exp(-v * n), x = (v - s) * n + 1;
        return -wl + y * x
    }, f = v => {
        const y = Math.exp(-v * n), x = (s - v) * (n * n);
        return y * x
    });
    const p = 5 / n, g = Zy(u, f, p);
    if (n = mt(n), isNaN(g)) return {stiffness: Re.stiffness, damping: Re.damping, duration: n};
    {
        const v = Math.pow(g, 2) * a;
        return {stiffness: v, damping: d * 2 * Math.sqrt(a * v), duration: n}
    }
}

const Jy = ["duration", "bounce"], ev = ["stiffness", "damping", "mass"];

function Gf(n, r) {
    return r.some(s => n[s] !== void 0)
}

function tv(n) {
    let r = {
        velocity: Re.velocity,
        stiffness: Re.stiffness,
        damping: Re.damping,
        mass: Re.mass,
        isResolvedFromDuration: !1, ...n
    };
    if (!Gf(n, ev) && Gf(n, Jy)) if (r.velocity = 0, n.visualDuration) {
        const s = n.visualDuration, a = 2 * Math.PI / (s * 1.2), u = a * a,
            f = 2 * Wt(.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(u);
        r = {...r, mass: Re.mass, stiffness: u, damping: f}
    } else {
        const s = qy({...n, velocity: 0});
        r = {...r, ...s, mass: Re.mass}, r.isResolvedFromDuration = !0
    }
    return r
}

function io(n = Re.visualDuration, r = Re.bounce) {
    const s = typeof n != "object" ? {visualDuration: n, keyframes: [0, 1], bounce: r} : n;
    let {restSpeed: a, restDelta: u} = s;
    const f = s.keyframes[0], d = s.keyframes[s.keyframes.length - 1], p = {done: !1, value: f}, {
            stiffness: g,
            damping: v,
            mass: y,
            duration: x,
            velocity: S,
            isResolvedFromDuration: N
        } = tv({...s, velocity: -kt(s.velocity || 0)}), b = S || 0, A = v / (2 * Math.sqrt(g * y)), z = d - f,
        R = kt(Math.sqrt(g / y)), U = Math.abs(z) < 5;
    a || (a = U ? Re.restSpeed.granular : Re.restSpeed.default), u || (u = U ? Re.restDelta.granular : Re.restDelta.default);
    let I, F, X, P, K, $;
    if (A < 1) X = Dl(R, A), P = (b + A * R * z) / X, I = Z => {
        const O = Math.exp(-A * R * Z);
        return d - O * (P * Math.sin(X * Z) + z * Math.cos(X * Z))
    }, K = A * R * P + z * X, $ = A * R * z - P * X, F = Z => Math.exp(-A * R * Z) * (K * Math.sin(X * Z) + $ * Math.cos(X * Z)); else if (A === 1) {
        I = O => d - Math.exp(-R * O) * (z + (b + R * z) * O);
        const Z = b + R * z;
        F = O => Math.exp(-R * O) * (R * Z * O - b)
    } else {
        const Z = R * Math.sqrt(A * A - 1);
        I = ze => {
            const Le = Math.exp(-A * R * ze), je = Math.min(Z * ze, 300);
            return d - Le * ((b + A * R * z) * Math.sinh(je) + Z * z * Math.cosh(je)) / Z
        };
        const O = (b + A * R * z) / Z, ae = A * R * O - z * Z, ke = A * R * z - O * Z;
        F = ze => {
            const Le = Math.exp(-A * R * ze), je = Math.min(Z * ze, 300);
            return Le * (ae * Math.sinh(je) + ke * Math.cosh(je))
        }
    }
    const se = {
        calculatedDuration: N && x || null, velocity: Z => mt(F(Z)), next: Z => {
            if (!N && A < 1) {
                const ae = Math.exp(-A * R * Z), ke = Math.sin(X * Z), ze = Math.cos(X * Z),
                    Le = d - ae * (P * ke + z * ze), je = mt(ae * (K * ke + $ * ze));
                return p.done = Math.abs(je) <= a && Math.abs(d - Le) <= u, p.value = p.done ? d : Le, p
            }
            const O = I(Z);
            if (N) p.done = Z >= x; else {
                const ae = mt(F(Z));
                p.done = Math.abs(ae) <= a && Math.abs(d - O) <= u
            }
            return p.value = p.done ? d : O, p
        }, toString: () => {
            const Z = Math.min(xu(se), ro), O = Vp(ae => se.next(Z * ae).value, Z, 30);
            return Z + "ms " + O
        }, toTransition: () => {
        }
    };
    return se
}

io.applyToOptions = n => {
    const r = Xy(n, 100, io);
    return n.ease = r.ease, n.duration = mt(r.duration), n.type = "keyframes", n
};
const nv = 5;

function Lp(n, r, s) {
    const a = Math.max(r - nv, 0);
    return mp(s - n(a), r - a)
}

function Vl({
                keyframes: n,
                velocity: r = 0,
                power: s = .8,
                timeConstant: a = 325,
                bounceDamping: u = 10,
                bounceStiffness: f = 500,
                modifyTarget: d,
                min: p,
                max: g,
                restDelta: v = .5,
                restSpeed: y
            }) {
    const x = n[0], S = {done: !1, value: x}, N = $ => p !== void 0 && $ < p || g !== void 0 && $ > g,
        b = $ => p === void 0 ? g : g === void 0 || Math.abs(p - $) < Math.abs(g - $) ? p : g;
    let A = s * r;
    const z = x + A, R = d === void 0 ? z : d(z);
    R !== z && (A = R - x);
    const U = $ => -A * Math.exp(-$ / a), I = $ => R + U($), F = $ => {
        const se = U($), Z = I($);
        S.done = Math.abs(se) <= v, S.value = S.done ? R : Z
    };
    let X, P;
    const K = $ => {
        N(S.value) && (X = $, P = io({
            keyframes: [S.value, b(S.value)],
            velocity: Lp(I, $, S.value),
            damping: u,
            stiffness: f,
            restDelta: v,
            restSpeed: y
        }))
    };
    return K(0), {
        calculatedDuration: null, next: $ => {
            let se = !1;
            return !P && X === void 0 && (se = !0, F($), K($)), X !== void 0 && $ >= X ? P.next($ - X) : (!se && F($), S)
        }
    }
}

function rv(n, r, s) {
    const a = [], u = s || Sn.mix || Dp, f = n.length - 1;
    for (let d = 0; d < f; d++) {
        let p = u(n[d], n[d + 1]);
        if (r) {
            const g = Array.isArray(r) ? r[d] || jt : r;
            p = Ci(g, p)
        }
        a.push(p)
    }
    return a
}

function iv(n, r, {clamp: s = !0, ease: a, mixer: u} = {}) {
    const f = n.length;
    if (du(f === r.length), f === 1) return () => r[0];
    if (f === 2 && r[0] === r[1]) return () => r[1];
    const d = n[0] === n[1];
    n[0] > n[f - 1] && (n = [...n].reverse(), r = [...r].reverse());
    const p = rv(r, a, u), g = p.length, v = y => {
        if (d && y < n[0]) return r[0];
        let x = 0;
        if (g > 1) for (; x < n.length - 2 && !(y < n[x + 1]); x++) ;
        const S = wi(n[x], n[x + 1], y);
        return p[x](S)
    };
    return s ? y => v(Wt(n[0], n[f - 1], y)) : v
}

function sv(n, r) {
    const s = n[n.length - 1];
    for (let a = 1; a <= r; a++) {
        const u = wi(0, r, a);
        n.push(ve(s, 1, u))
    }
}

function ov(n) {
    const r = [0];
    return sv(r, n.length - 1), r
}

function av(n, r) {
    return n.map(s => s * r)
}

function lv(n, r) {
    return n.map(() => r || Cp).splice(0, n.length - 1)
}

function yi({duration: n = 300, keyframes: r, times: s, ease: a = "easeInOut"}) {
    const u = gy(a) ? a.map(Bf) : Bf(a), f = {done: !1, value: r[0]}, d = av(s && s.length === r.length ? s : ov(r), n),
        p = iv(d, r, {ease: Array.isArray(u) ? u : lv(r, u)});
    return {calculatedDuration: n, next: g => (f.value = p(g), f.done = g >= n, f)}
}

const uv = n => n !== null;

function ho(n, {repeat: r, repeatType: s = "loop"}, a, u = 1) {
    const f = n.filter(uv), p = u < 0 || r && s !== "loop" && r % 2 === 1 ? 0 : f.length - 1;
    return !p || a === void 0 ? f[p] : a
}

const cv = {decay: Vl, inertia: Vl, tween: yi, keyframes: yi, spring: io};

function _p(n) {
    typeof n.type == "string" && (n.type = cv[n.type])
}

class wu {
    constructor() {
        this.updateFinished()
    }

    get finished() {
        return this._finished
    }

    updateFinished() {
        this._finished = new Promise(r => {
            this.resolve = r
        })
    }

    notifyFinished() {
        this.resolve()
    }

    then(r, s) {
        return this.finished.then(r, s)
    }
}

const dv = n => n / 100;

class so extends wu {
    constructor(r) {
        super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
            done: !1,
            value: void 0
        }, this.stop = () => {
            var a, u;
            const {motionValue: s} = this.options;
            s && s.updatedAt !== nt.now() && this.tick(nt.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (u = (a = this.options).onStop) == null || u.call(a))
        }, this.options = r, this.initAnimation(), this.play(), r.autoplay === !1 && this.pause()
    }

    initAnimation() {
        const {options: r} = this;
        _p(r);
        const {type: s = yi, repeat: a = 0, repeatDelay: u = 0, repeatType: f, velocity: d = 0} = r;
        let {keyframes: p} = r;
        const g = s || yi;
        g !== yi && typeof p[0] != "number" && (this.mixKeyframes = Ci(dv, Dp(p[0], p[1])), p = [0, 100]);
        const v = g({...r, keyframes: p});
        f === "mirror" && (this.mirroredGenerator = g({
            ...r,
            keyframes: [...p].reverse(),
            velocity: -d
        })), v.calculatedDuration === null && (v.calculatedDuration = xu(v));
        const {calculatedDuration: y} = v;
        this.calculatedDuration = y, this.resolvedDuration = y + u, this.totalDuration = this.resolvedDuration * (a + 1) - u, this.generator = v
    }

    updateTime(r) {
        const s = Math.round(r - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = s
    }

    tick(r, s = !1) {
        const {
            generator: a,
            totalDuration: u,
            mixKeyframes: f,
            mirroredGenerator: d,
            resolvedDuration: p,
            calculatedDuration: g
        } = this;
        if (this.startTime === null) return a.next(0);
        const {
            delay: v = 0,
            keyframes: y,
            repeat: x,
            repeatType: S,
            repeatDelay: N,
            type: b,
            onUpdate: A,
            finalKeyframe: z
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, r) : this.speed < 0 && (this.startTime = Math.min(r - u / this.speed, this.startTime)), s ? this.currentTime = r : this.updateTime(r);
        const R = this.currentTime - v * (this.playbackSpeed >= 0 ? 1 : -1),
            U = this.playbackSpeed >= 0 ? R < 0 : R > u;
        this.currentTime = Math.max(R, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = u);
        let I = this.currentTime, F = a;
        if (x) {
            const $ = Math.min(this.currentTime, u) / p;
            let se = Math.floor($), Z = $ % 1;
            !Z && $ >= 1 && (Z = 1), Z === 1 && se--, se = Math.min(se, x + 1), !!(se % 2) && (S === "reverse" ? (Z = 1 - Z, N && (Z -= N / p)) : S === "mirror" && (F = d)), I = Wt(0, 1, Z) * p
        }
        let X;
        U ? (this.delayState.value = y[0], X = this.delayState) : X = F.next(I), f && !U && (X.value = f(X.value));
        let {done: P} = X;
        !U && g !== null && (P = this.playbackSpeed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
        const K = this.holdTime === null && (this.state === "finished" || this.state === "running" && P);
        return K && b !== Vl && (X.value = ho(y, this.options, z, this.speed)), A && A(X.value), K && this.finish(), X
    }

    then(r, s) {
        return this.finished.then(r, s)
    }

    get duration() {
        return kt(this.calculatedDuration)
    }

    get iterationDuration() {
        const {delay: r = 0} = this.options || {};
        return this.duration + kt(r)
    }

    get time() {
        return kt(this.currentTime)
    }

    set time(r) {
        r = mt(r), this.currentTime = r, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = r : this.driver && (this.startTime = this.driver.now() - r / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = r, this.tick(r))
    }

    getGeneratorVelocity() {
        const r = this.currentTime;
        if (r <= 0) return this.options.velocity || 0;
        if (this.generator.velocity) return this.generator.velocity(r);
        const s = this.generator.next(r).value;
        return Lp(a => this.generator.next(a).value, r, s)
    }

    get speed() {
        return this.playbackSpeed
    }

    set speed(r) {
        const s = this.playbackSpeed !== r;
        s && this.driver && this.updateTime(nt.now()), this.playbackSpeed = r, s && this.driver && (this.time = kt(this.currentTime))
    }

    play() {
        var u, f;
        if (this.isStopped) return;
        const {driver: r = Qy, startTime: s} = this.options;
        this.driver || (this.driver = r(d => this.tick(d))), (f = (u = this.options).onPlay) == null || f.call(u);
        const a = this.driver.now();
        this.state === "finished" ? (this.updateFinished(), this.startTime = a) : this.holdTime !== null ? this.startTime = a - this.holdTime : this.startTime || (this.startTime = s ?? a), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
    }

    pause() {
        this.state = "paused", this.updateTime(nt.now()), this.holdTime = this.currentTime
    }

    complete() {
        this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null
    }

    finish() {
        var r, s;
        this.notifyFinished(), this.teardown(), this.state = "finished", (s = (r = this.options).onComplete) == null || s.call(r)
    }

    cancel() {
        var r, s;
        this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (s = (r = this.options).onCancel) == null || s.call(r)
    }

    teardown() {
        this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
    }

    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }

    sample(r) {
        return this.startTime = 0, this.tick(r, !0)
    }

    attachTimeline(r) {
        var s;
        return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (s = this.driver) == null || s.stop(), r.observe(this)
    }
}

function fv(n) {
    for (let r = 1; r < n.length; r++) n[r] ?? (n[r] = n[r - 1])
}

const Fn = n => n * 180 / Math.PI, Ll = n => {
        const r = Fn(Math.atan2(n[1], n[0]));
        return _l(r)
    }, hv = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: n => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
        rotate: Ll,
        rotateZ: Ll,
        skewX: n => Fn(Math.atan(n[1])),
        skewY: n => Fn(Math.atan(n[2])),
        skew: n => (Math.abs(n[1]) + Math.abs(n[2])) / 2
    }, _l = n => (n = n % 360, n < 0 && (n += 360), n), Qf = Ll, Xf = n => Math.sqrt(n[0] * n[0] + n[1] * n[1]),
    Yf = n => Math.sqrt(n[4] * n[4] + n[5] * n[5]), pv = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: Xf,
        scaleY: Yf,
        scale: n => (Xf(n) + Yf(n)) / 2,
        rotateX: n => _l(Fn(Math.atan2(n[6], n[5]))),
        rotateY: n => _l(Fn(Math.atan2(-n[2], n[0]))),
        rotateZ: Qf,
        rotate: Qf,
        skewX: n => Fn(Math.atan(n[4])),
        skewY: n => Fn(Math.atan(n[1])),
        skew: n => (Math.abs(n[1]) + Math.abs(n[4])) / 2
    };

function Il(n) {
    return n.includes("scale") ? 1 : 0
}

function Ol(n, r) {
    if (!n || n === "none") return Il(r);
    const s = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let a, u;
    if (s) a = pv, u = s; else {
        const p = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        a = hv, u = p
    }
    if (!u) return Il(r);
    const f = a[r], d = u[1].split(",").map(gv);
    return typeof f == "function" ? f(d) : d[f]
}

const mv = (n, r) => {
    const {transform: s = "none"} = getComputedStyle(n);
    return Ol(s, r)
};

function gv(n) {
    return parseFloat(n.trim())
}

const jr = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    Cr = new Set([...jr, "pathRotation"]), Zf = n => n === kr || n === J, yv = new Set(["x", "y", "z"]),
    vv = jr.filter(n => !yv.has(n));

function xv(n) {
    const r = [];
    return vv.forEach(s => {
        const a = n.getValue(s);
        a !== void 0 && (r.push([s, a.get()]), a.set(s.startsWith("scale") ? 1 : 0))
    }), r
}

const wn = {
    width: ({x: n}, {paddingLeft: r = "0", paddingRight: s = "0", boxSizing: a}) => {
        const u = n.max - n.min;
        return a === "border-box" ? u : u - parseFloat(r) - parseFloat(s)
    },
    height: ({y: n}, {paddingTop: r = "0", paddingBottom: s = "0", boxSizing: a}) => {
        const u = n.max - n.min;
        return a === "border-box" ? u : u - parseFloat(r) - parseFloat(s)
    },
    top: (n, {top: r}) => parseFloat(r),
    left: (n, {left: r}) => parseFloat(r),
    bottom: ({y: n}, {top: r}) => parseFloat(r) + (n.max - n.min),
    right: ({x: n}, {left: r}) => parseFloat(r) + (n.max - n.min),
    x: (n, {transform: r}) => Ol(r, "x"),
    y: (n, {transform: r}) => Ol(r, "y")
};
wn.translateX = wn.x;
wn.translateY = wn.y;
const Wn = new Set;
let Fl = !1, Bl = !1, Wl = !1;

function Ip() {
    if (Bl) {
        const n = Array.from(Wn).filter(a => a.needsMeasurement), r = new Set(n.map(a => a.element)), s = new Map;
        r.forEach(a => {
            const u = xv(a);
            u.length && (s.set(a, u), a.render())
        }), n.forEach(a => a.measureInitialState()), r.forEach(a => {
            a.render();
            const u = s.get(a);
            u && u.forEach(([f, d]) => {
                var p;
                (p = a.getValue(f)) == null || p.set(d)
            })
        }), n.forEach(a => a.measureEndState()), n.forEach(a => {
            a.suspendedScrollY !== void 0 && window.scrollTo(0, a.suspendedScrollY)
        })
    }
    Bl = !1, Fl = !1, Wn.forEach(n => n.complete(Wl)), Wn.clear()
}

function Op() {
    Wn.forEach(n => {
        n.readKeyframes(), n.needsMeasurement && (Bl = !0)
    })
}

function wv() {
    Wl = !0, Op(), Ip(), Wl = !1
}

class Su {
    constructor(r, s, a, u, f, d = !1) {
        this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...r], this.onComplete = s, this.name = a, this.motionValue = u, this.element = f, this.isAsync = d
    }

    scheduleResolve() {
        this.state = "scheduled", this.isAsync ? (Wn.add(this), Fl || (Fl = !0, xe.read(Op), xe.resolveKeyframes(Ip))) : (this.readKeyframes(), this.complete())
    }

    readKeyframes() {
        const {unresolvedKeyframes: r, name: s, element: a, motionValue: u} = this;
        if (r[0] === null) {
            const f = u == null ? void 0 : u.get(), d = r[r.length - 1];
            if (f !== void 0) r[0] = f; else if (a && s) {
                const p = a.readValue(s, d);
                p != null && (r[0] = p)
            }
            r[0] === void 0 && (r[0] = d), u && f === void 0 && u.set(r[0])
        }
        fv(r)
    }

    setFinalKeyframe() {
    }

    measureInitialState() {
    }

    renderEndStyles() {
    }

    measureEndState() {
    }

    complete(r = !1) {
        this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, r), Wn.delete(this)
    }

    cancel() {
        this.state === "scheduled" && (Wn.delete(this), this.state = "pending")
    }

    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}

const Sv = n => n.startsWith("--");

function Fp(n, r, s) {
    Sv(r) ? n.style.setProperty(r, s) : n.style[r] = s
}

const kv = {};

function Bp(n, r) {
    const s = pp(n);
    return () => kv[r] ?? s()
}

const jv = Bp(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Wp = Bp(() => {
    try {
        document.createElement("div").animate({opacity: 0}, {easing: "linear(0, 1)"})
    } catch {
        return !1
    }
    return !0
}, "linearEasing"), hi = ([n, r, s, a]) => `cubic-bezier(${n}, ${r}, ${s}, ${a})`, qf = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: hi([0, .65, .55, 1]),
    circOut: hi([.55, 0, 1, .45]),
    backIn: hi([.31, .01, .66, -.59]),
    backOut: hi([.33, 1.53, .69, .99])
};

function Up(n, r) {
    if (n) return typeof n == "function" ? Wp() ? Vp(n, r) : "ease-out" : Np(n) ? hi(n) : Array.isArray(n) ? n.map(s => Up(s, r) || qf.easeOut) : qf[n]
}

function Cv(n, r, s, {
    delay: a = 0,
    duration: u = 300,
    repeat: f = 0,
    repeatType: d = "loop",
    ease: p = "easeOut",
    times: g
} = {}, v = void 0) {
    const y = {[r]: s};
    g && (y.offset = g);
    const x = Up(p, u);
    Array.isArray(x) && (y.easing = x);
    const S = {
        delay: a,
        duration: u,
        easing: Array.isArray(x) ? "linear" : x,
        fill: "both",
        iterations: f + 1,
        direction: d === "reverse" ? "alternate" : "normal"
    };
    return v && (S.pseudoElement = v), n.animate(y, S)
}

function $p(n) {
    return typeof n == "function" && "applyToOptions" in n
}

function Nv({type: n, ...r}) {
    return $p(n) && Wp() ? n.applyToOptions(r) : (r.duration ?? (r.duration = 300), r.ease ?? (r.ease = "easeOut"), r)
}

class Hp extends wu {
    constructor(r) {
        if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !r) return;
        const {
            element: s,
            name: a,
            keyframes: u,
            pseudoElement: f,
            allowFlatten: d = !1,
            finalKeyframe: p,
            onComplete: g
        } = r;
        this.isPseudoElement = !!f, this.allowFlatten = d, this.options = r, du(typeof r.type != "string");
        const v = Nv(r);
        this.animation = Cv(s, a, u, v, f), v.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
            if (this.finishedTime = this.time, !f) {
                const y = ho(u, this.options, p, this.speed);
                this.updateMotionValue && this.updateMotionValue(y), Fp(s, a, y), this.animation.cancel()
            }
            g == null || g(), this.notifyFinished()
        }
    }

    play() {
        this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished())
    }

    pause() {
        this.animation.pause()
    }

    complete() {
        var r, s;
        (s = (r = this.animation).finish) == null || s.call(r)
    }

    cancel() {
        try {
            this.animation.cancel()
        } catch {
        }
    }

    stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        const {state: r} = this;
        r === "idle" || r === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
    }

    commitStyles() {
        var s, a, u;
        const r = (s = this.options) == null ? void 0 : s.element;
        !this.isPseudoElement && (r != null && r.isConnected) && ((u = (a = this.animation).commitStyles) == null || u.call(a))
    }

    get duration() {
        var s, a;
        const r = ((a = (s = this.animation.effect) == null ? void 0 : s.getComputedTiming) == null ? void 0 : a.call(s).duration) || 0;
        return kt(Number(r))
    }

    get iterationDuration() {
        const {delay: r = 0} = this.options || {};
        return this.duration + kt(r)
    }

    get time() {
        return kt(Number(this.animation.currentTime) || 0)
    }

    set time(r) {
        const s = this.finishedTime !== null;
        this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = mt(r), s && this.animation.pause()
    }

    get speed() {
        return this.animation.playbackRate
    }

    set speed(r) {
        r < 0 && (this.finishedTime = null), this.animation.playbackRate = r
    }

    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }

    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime)
    }

    set startTime(r) {
        this.manualStartTime = this.animation.startTime = r
    }

    attachTimeline({timeline: r, rangeStart: s, rangeEnd: a, observe: u}) {
        var f;
        return this.allowFlatten && ((f = this.animation.effect) == null || f.updateTiming({easing: "linear"})), this.animation.onfinish = null, r && jv() ? (this.animation.timeline = r, s && (this.animation.rangeStart = s), a && (this.animation.rangeEnd = a), jt) : u(this)
    }
}

const Kp = {anticipate: Sp, backInOut: wp, circInOut: jp};

function Tv(n) {
    return n in Kp
}

function Pv(n) {
    typeof n.ease == "string" && Tv(n.ease) && (n.ease = Kp[n.ease])
}

const Sl = 10;

class Ev extends Hp {
    constructor(r) {
        Pv(r), _p(r), super(r), r.startTime !== void 0 && r.autoplay !== !1 && (this.startTime = r.startTime), this.options = r
    }

    updateMotionValue(r) {
        const {motionValue: s, onUpdate: a, onComplete: u, element: f, ...d} = this.options;
        if (!s) return;
        if (r !== void 0) {
            s.set(r);
            return
        }
        const p = new so({...d, autoplay: !1}), g = Math.max(Sl, nt.now() - this.startTime), v = Wt(0, Sl, g - Sl),
            y = p.sample(g).value, {name: x} = this.options;
        f && x && Fp(f, x, y), s.setWithVelocity(p.sample(Math.max(0, g - v)).value, y, v), p.stop()
    }
}

const Jf = (n, r) => r === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && (Rt.test(n) || n === "0") && !n.startsWith("url("));

function Mv(n) {
    const r = n[0];
    if (n.length === 1) return !0;
    for (let s = 0; s < n.length; s++) if (n[s] !== r) return !0
}

function bv(n, r, s, a) {
    const u = n[0];
    if (u === null) return !1;
    if (r === "display" || r === "visibility") return !0;
    const f = n[n.length - 1], d = Jf(u, r), p = Jf(f, r);
    return !d || !p ? !1 : Mv(n) || (s === "spring" || $p(s)) && a
}

function Ul(n) {
    n.duration = 0, n.type = "keyframes"
}

const Gp = new Set(["opacity", "clipPath", "filter", "transform"]),
    zv = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;

function Av(n) {
    for (let r = 0; r < n.length; r++) if (typeof n[r] == "string" && zv.test(n[r])) return !0;
    return !1
}

const Rv = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]),
    Dv = pp(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

function Vv(n) {
    var x;
    const {motionValue: r, name: s, repeatDelay: a, repeatType: u, damping: f, type: d, keyframes: p} = n;
    if (!(((x = r == null ? void 0 : r.owner) == null ? void 0 : x.current) instanceof HTMLElement)) return !1;
    const {onUpdate: v, transformTemplate: y} = r.owner.getProps();
    return Dv() && s && (Gp.has(s) || Rv.has(s) && Av(p)) && (s !== "transform" || !y) && !v && !a && u !== "mirror" && f !== 0 && d !== "inertia"
}

const Lv = 40;

class _v extends wu {
    constructor({
                    autoplay: r = !0,
                    delay: s = 0,
                    type: a = "keyframes",
                    repeat: u = 0,
                    repeatDelay: f = 0,
                    repeatType: d = "loop",
                    keyframes: p,
                    name: g,
                    motionValue: v,
                    element: y,
                    ...x
                }) {
        var b;
        super(), this.stop = () => {
            var A, z;
            this._animation && (this._animation.stop(), (A = this.stopTimeline) == null || A.call(this)), (z = this.keyframeResolver) == null || z.cancel()
        }, this.createdAt = nt.now();
        const S = {
            autoplay: r,
            delay: s,
            type: a,
            repeat: u,
            repeatDelay: f,
            repeatType: d,
            name: g,
            motionValue: v,
            element: y, ...x
        }, N = (y == null ? void 0 : y.KeyframeResolver) || Su;
        this.keyframeResolver = new N(p, (A, z, R) => this.onKeyframesResolved(A, z, S, !R), g, v, y), (b = this.keyframeResolver) == null || b.scheduleResolve()
    }

    onKeyframesResolved(r, s, a, u) {
        var R, U;
        this.keyframeResolver = void 0;
        const {name: f, type: d, velocity: p, delay: g, isHandoff: v, onUpdate: y} = a;
        this.resolvedAt = nt.now();
        let x = !0;
        bv(r, f, d, p) || (x = !1, (Sn.instantAnimations || !g) && (y == null || y(ho(r, a, s))), r[0] = r[r.length - 1], Ul(a), a.repeat = 0);
        const N = {
            startTime: u ? this.resolvedAt ? this.resolvedAt - this.createdAt > Lv ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: s, ...a,
            keyframes: r
        }, b = x && !v && Vv(N), A = (U = (R = N.motionValue) == null ? void 0 : R.owner) == null ? void 0 : U.current;
        let z;
        if (b) try {
            z = new Ev({...N, element: A})
        } catch {
            z = new so(N)
        } else z = new so(N);
        z.finished.then(() => {
            this.notifyFinished()
        }).catch(jt), this.pendingTimeline && (this.stopTimeline = z.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = z
    }

    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }

    then(r, s) {
        return this.finished.finally(r).then(() => {
        })
    }

    get animation() {
        var r;
        return this._animation || ((r = this.keyframeResolver) == null || r.resume(), wv()), this._animation
    }

    get duration() {
        return this.animation.duration
    }

    get iterationDuration() {
        return this.animation.iterationDuration
    }

    get time() {
        return this.animation.time
    }

    set time(r) {
        this.animation.time = r
    }

    get speed() {
        return this.animation.speed
    }

    get state() {
        return this.animation.state
    }

    set speed(r) {
        this.animation.speed = r
    }

    get startTime() {
        return this.animation.startTime
    }

    attachTimeline(r) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(r) : this.pendingTimeline = r, () => this.stop()
    }

    play() {
        this.animation.play()
    }

    pause() {
        this.animation.pause()
    }

    complete() {
        this.animation.complete()
    }

    cancel() {
        var r;
        this._animation && this.animation.cancel(), (r = this.keyframeResolver) == null || r.cancel()
    }
}

function Qp(n, r, s, a = 0, u = 1) {
    const f = Array.from(n).sort((v, y) => v.sortNodePosition(y)).indexOf(r), d = n.size, p = (d - 1) * a;
    return typeof s == "function" ? s(f, d) : u === 1 ? f * a : p - f * a
}

const eh = 30, Iv = n => !isNaN(parseFloat(n));

class Ov {
    constructor(r, s = {}) {
        this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = a => {
            var f;
            const u = nt.now();
            if (this.updatedAt !== u && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(a), this.current !== this.prev && ((f = this.events.change) == null || f.notify(this.current), this.dependents)) for (const d of this.dependents) d.dirty()
        }, this.hasAnimated = !1, this.setCurrent(r), this.owner = s.owner
    }

    setCurrent(r) {
        this.current = r, this.updatedAt = nt.now(), this.canTrackVelocity === null && r !== void 0 && (this.canTrackVelocity = Iv(this.current))
    }

    setPrevFrameValue(r = this.current) {
        this.prevFrameValue = r, this.prevUpdatedAt = this.updatedAt
    }

    onChange(r) {
        return this.on("change", r)
    }

    on(r, s) {
        this.events[r] || (this.events[r] = new fu);
        const a = this.events[r].add(s);
        return r === "change" ? () => {
            a(), xe.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : a
    }

    clearListeners() {
        for (const r in this.events) this.events[r].clear()
    }

    attach(r, s) {
        this.passiveEffect = r, this.stopPassiveEffect = s
    }

    set(r) {
        this.passiveEffect ? this.passiveEffect(r, this.updateAndNotify) : this.updateAndNotify(r)
    }

    setWithVelocity(r, s, a) {
        this.set(s), this.prev = void 0, this.prevFrameValue = r, this.prevUpdatedAt = this.updatedAt - a
    }

    jump(r, s = !0) {
        this.updateAndNotify(r), this.prev = r, this.prevUpdatedAt = this.prevFrameValue = void 0, s && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }

    dirty() {
        var r;
        (r = this.events.change) == null || r.notify(this.current)
    }

    addDependent(r) {
        this.dependents || (this.dependents = new Set), this.dependents.add(r)
    }

    removeDependent(r) {
        this.dependents && this.dependents.delete(r)
    }

    get() {
        return this.current
    }

    getPrevious() {
        return this.prev
    }

    getVelocity() {
        const r = nt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || r - this.updatedAt > eh) return 0;
        const s = Math.min(this.updatedAt - this.prevUpdatedAt, eh);
        return mp(parseFloat(this.current) - parseFloat(this.prevFrameValue), s)
    }

    start(r) {
        return this.stop(), new Promise(s => {
            this.hasAnimated = !0, this.animation = r(s), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }

    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }

    isAnimating() {
        return !!this.animation
    }

    clearAnimation() {
        delete this.animation
    }

    destroy() {
        var r, s;
        (r = this.dependents) == null || r.clear(), (s = this.events.destroy) == null || s.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function Sr(n, r) {
    return new Ov(n, r)
}

function Xp(n, r) {
    if (n != null && n.inherit && r) {
        const {inherit: s, ...a} = n;
        return {...r, ...a}
    }
    return n
}

function ku(n, r) {
    const s = (n == null ? void 0 : n[r]) ?? (n == null ? void 0 : n.default) ?? n;
    return s !== n ? Xp(s, n) : s
}

const Fv = {type: "spring", stiffness: 500, damping: 25, restSpeed: 10},
    Bv = n => ({type: "spring", stiffness: 550, damping: n === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10}),
    Wv = {type: "keyframes", duration: .8}, Uv = {type: "keyframes", ease: [.25, .1, .35, 1], duration: .3},
    $v = (n, {keyframes: r}) => r.length > 2 ? Wv : Cr.has(n) ? n.startsWith("scale") ? Bv(r[1]) : Fv : Uv,
    Hv = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);

function Kv(n) {
    for (const r in n) if (!Hv.has(r)) return !0;
    return !1
}

const ju = (n, r, s, a = {}, u, f) => d => {
    const p = ku(a, n) || {}, g = p.delay || a.delay || 0;
    let {elapsed: v = 0} = a;
    v = v - mt(g);
    const y = {
        keyframes: Array.isArray(s) ? s : [null, s],
        ease: "easeOut",
        velocity: r.getVelocity(), ...p,
        delay: -v,
        onUpdate: S => {
            r.set(S), p.onUpdate && p.onUpdate(S)
        },
        onComplete: () => {
            d(), p.onComplete && p.onComplete()
        },
        name: n,
        motionValue: r,
        element: f ? void 0 : u
    };
    Kv(p) || Object.assign(y, $v(n, y)), y.duration && (y.duration = mt(y.duration)), y.repeatDelay && (y.repeatDelay = mt(y.repeatDelay)), y.from !== void 0 && (y.keyframes[0] = y.from);
    let x = !1;
    if ((y.type === !1 || y.duration === 0 && !y.repeatDelay) && (Ul(y), y.delay === 0 && (x = !0)), (Sn.instantAnimations || Sn.skipAnimations || u != null && u.shouldSkipAnimations || p.skipAnimations) && (x = !0, Ul(y), y.delay = 0), y.allowFlatten = !p.type && !p.ease, x && !f && r.get() !== void 0) {
        const S = ho(y.keyframes, p);
        if (S !== void 0) {
            xe.update(() => {
                y.onUpdate(S), y.onComplete()
            });
            return
        }
    }
    return p.isSync ? new so(y) : new _v(y)
}, Gv = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function Qv(n) {
    const r = Gv.exec(n);
    if (!r) return [,];
    const [, s, a, u] = r;
    return [`--${s ?? a}`, u]
}

function Yp(n, r, s = 1) {
    const [a, u] = Qv(n);
    if (!a) return;
    const f = window.getComputedStyle(r).getPropertyValue(a);
    if (f) {
        const d = f.trim();
        return dp(d) ? parseFloat(d) : d
    }
    return mu(u) ? Yp(u, r, s + 1) : u
}

function th(n) {
    const r = [{}, {}];
    return n == null || n.values.forEach((s, a) => {
        r[0][a] = s.get(), r[1][a] = s.getVelocity()
    }), r
}

function Cu(n, r, s, a) {
    if (typeof r == "function") {
        const [u, f] = th(a);
        r = r(s !== void 0 ? s : n.custom, u, f)
    }
    if (typeof r == "string" && (r = n.variants && n.variants[r]), typeof r == "function") {
        const [u, f] = th(a);
        r = r(s !== void 0 ? s : n.custom, u, f)
    }
    return r
}

function Un(n, r, s) {
    const a = n.getProps();
    return Cu(a, r, s !== void 0 ? s : a.custom, n)
}

const Zp = new Set(["width", "height", "top", "left", "right", "bottom", ...jr]), $l = n => Array.isArray(n);

function Xv(n, r, s) {
    n.hasValue(r) ? n.getValue(r).set(s) : n.addValue(r, Sr(s))
}

function Yv(n) {
    return $l(n) ? n[n.length - 1] || 0 : n
}

function Zv(n, r) {
    const s = Un(n, r);
    let {transitionEnd: a = {}, transition: u = {}, ...f} = s || {};
    f = {...f, ...a};
    for (const d in f) {
        const p = Yv(f[d]);
        Xv(n, d, p)
    }
}

const Xe = n => !!(n && n.getVelocity);

function qv(n) {
    return !!(Xe(n) && n.add)
}

function Hl(n, r) {
    const s = n.getValue("willChange");
    if (qv(s)) return s.add(r);
    if (!s && Sn.WillChange) {
        const a = new Sn.WillChange("auto");
        n.addValue("willChange", a), a.add(r)
    }
}

function Nu(n) {
    return n.replace(/([A-Z])/g, r => `-${r.toLowerCase()}`)
}

const Jv = "framerAppearId", qp = "data-" + Nu(Jv);

function Jp(n) {
    return n.props[qp]
}

function ex({protectedKeys: n, needsAnimating: r}, s) {
    const a = n.hasOwnProperty(s) && r[s] !== !0;
    return r[s] = !1, a
}

function em(n, r, {delay: s = 0, transitionOverride: a, type: u} = {}) {
    let {transition: f, transitionEnd: d, ...p} = r;
    const g = n.getDefaultTransition();
    f = f ? Xp(f, g) : g;
    const v = f == null ? void 0 : f.reduceMotion, y = f == null ? void 0 : f.skipAnimations;
    a && (f = a);
    const x = [], S = u && n.animationState && n.animationState.getState()[u], N = f == null ? void 0 : f.path;
    N && N.animateVisualElement(n, p, f, s, x);
    for (const b in p) {
        const A = n.getValue(b, n.latestValues[b] ?? null), z = p[b];
        if (z === void 0 || S && ex(S, b)) continue;
        const R = {delay: s, ...ku(f || {}, b)};
        y && (R.skipAnimations = !0);
        const U = A.get();
        if (U !== void 0 && !A.isAnimating() && !Array.isArray(z) && z === U && !R.velocity) {
            xe.update(() => A.set(z));
            continue
        }
        let I = !1;
        if (window.MotionHandoffAnimation) {
            const P = Jp(n);
            if (P) {
                const K = window.MotionHandoffAnimation(P, b, xe);
                K !== null && (R.startTime = K, I = !0)
            }
        }
        Hl(n, b);
        const F = v ?? n.shouldReduceMotion;
        A.start(ju(b, A, z, F && Zp.has(b) ? {type: !1} : R, n, I));
        const X = A.animation;
        X && x.push(X)
    }
    if (d) {
        const b = () => xe.update(() => {
            d && Zv(n, d)
        });
        x.length ? Promise.all(x).then(b) : b()
    }
    return x
}

function Kl(n, r, s = {}) {
    var g;
    const a = Un(n, r, s.type === "exit" ? (g = n.presenceContext) == null ? void 0 : g.custom : void 0);
    let {transition: u = n.getDefaultTransition() || {}} = a || {};
    s.transitionOverride && (u = s.transitionOverride);
    const f = a ? () => Promise.all(em(n, a, s)) : () => Promise.resolve(),
        d = n.variantChildren && n.variantChildren.size ? (v = 0) => {
            const {delayChildren: y = 0, staggerChildren: x, staggerDirection: S} = u;
            return tx(n, r, v, y, x, S, s)
        } : () => Promise.resolve(), {when: p} = u;
    if (p) {
        const [v, y] = p === "beforeChildren" ? [f, d] : [d, f];
        return v().then(() => y())
    } else return Promise.all([f(), d(s.delay)])
}

function tx(n, r, s = 0, a = 0, u = 0, f = 1, d) {
    const p = [];
    for (const g of n.variantChildren) g.notify("AnimationStart", r), p.push(Kl(g, r, {
        ...d,
        delay: s + (typeof a == "function" ? 0 : a) + Qp(n.variantChildren, g, a, u, f)
    }).then(() => g.notify("AnimationComplete", r)));
    return Promise.all(p)
}

function nx(n, r, s = {}) {
    n.notify("AnimationStart", r);
    let a;
    if (Array.isArray(r)) {
        const u = r.map(f => Kl(n, f, s));
        a = Promise.all(u)
    } else if (typeof r == "string") a = Kl(n, r, s); else {
        const u = typeof r == "function" ? Un(n, r, s.custom) : r;
        a = Promise.all(em(n, u, s))
    }
    return a.then(() => {
        n.notify("AnimationComplete", r)
    })
}

const rx = {test: n => n === "auto", parse: n => n}, tm = n => r => r.test(n), nm = [kr, J, Bt, qt, My, Ey, rx],
    nh = n => nm.find(tm(n));

function ix(n) {
    return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || hp(n) : !0
}

const sx = new Set(["brightness", "contrast", "saturate", "opacity"]);

function ox(n) {
    const [r, s] = n.slice(0, -1).split("(");
    if (r === "drop-shadow") return n;
    const [a] = s.match(gu) || [];
    if (!a) return n;
    const u = s.replace(a, "");
    let f = sx.has(r) ? 1 : 0;
    return a !== s && (f *= 100), r + "(" + f + u + ")"
}

const ax = /\b([a-z-]*)\(.*?\)/gu, Gl = {
    ...Rt, getAnimatableNone: n => {
        const r = n.match(ax);
        return r ? r.map(ox).join(" ") : n
    }
}, Ql = {
    ...Rt, getAnimatableNone: n => {
        const r = Rt.parse(n);
        return Rt.createTransformer(n)(r.map(a => typeof a == "number" ? 0 : typeof a == "object" ? {
            ...a,
            alpha: 1
        } : a))
    }
}, rh = {...kr, transform: Math.round}, lx = {
    rotate: qt,
    pathRotation: qt,
    rotateX: qt,
    rotateY: qt,
    rotateZ: qt,
    scale: Fs,
    scaleX: Fs,
    scaleY: Fs,
    scaleZ: Fs,
    skew: qt,
    skewX: qt,
    skewY: qt,
    distance: J,
    translateX: J,
    translateY: J,
    translateZ: J,
    x: J,
    y: J,
    z: J,
    perspective: J,
    transformPerspective: J,
    opacity: Si,
    originX: Uf,
    originY: Uf,
    originZ: J
}, oo = {
    borderWidth: J,
    borderTopWidth: J,
    borderRightWidth: J,
    borderBottomWidth: J,
    borderLeftWidth: J,
    borderRadius: J,
    borderTopLeftRadius: J,
    borderTopRightRadius: J,
    borderBottomRightRadius: J,
    borderBottomLeftRadius: J,
    width: J,
    maxWidth: J,
    height: J,
    maxHeight: J,
    top: J,
    right: J,
    bottom: J,
    left: J,
    inset: J,
    insetBlock: J,
    insetBlockStart: J,
    insetBlockEnd: J,
    insetInline: J,
    insetInlineStart: J,
    insetInlineEnd: J,
    padding: J,
    paddingTop: J,
    paddingRight: J,
    paddingBottom: J,
    paddingLeft: J,
    paddingBlock: J,
    paddingBlockStart: J,
    paddingBlockEnd: J,
    paddingInline: J,
    paddingInlineStart: J,
    paddingInlineEnd: J,
    margin: J,
    marginTop: J,
    marginRight: J,
    marginBottom: J,
    marginLeft: J,
    marginBlock: J,
    marginBlockStart: J,
    marginBlockEnd: J,
    marginInline: J,
    marginInlineStart: J,
    marginInlineEnd: J,
    fontSize: J,
    backgroundPositionX: J,
    backgroundPositionY: J, ...lx,
    zIndex: rh,
    fillOpacity: Si,
    strokeOpacity: Si,
    numOctaves: rh
}, ux = {
    ...oo,
    color: Oe,
    backgroundColor: Oe,
    outlineColor: Oe,
    fill: Oe,
    stroke: Oe,
    borderColor: Oe,
    borderTopColor: Oe,
    borderRightColor: Oe,
    borderBottomColor: Oe,
    borderLeftColor: Oe,
    filter: Gl,
    WebkitFilter: Gl,
    mask: Ql,
    WebkitMask: Ql
}, rm = n => ux[n], cx = new Set([Gl, Ql]);

function im(n, r) {
    let s = rm(n);
    return cx.has(s) || (s = Rt), s.getAnimatableNone ? s.getAnimatableNone(r) : void 0
}

const dx = new Set(["auto", "none", "0"]);

function fx(n, r, s) {
    let a = 0, u;
    for (; a < n.length && !u;) {
        const f = n[a];
        typeof f == "string" && !dx.has(f) && wr(f).values.length && (u = n[a]), a++
    }
    if (u && s) for (const f of r) n[f] = im(s, u)
}

class hx extends Su {
    constructor(r, s, a, u, f) {
        super(r, s, a, u, f, !0)
    }

    readKeyframes() {
        const {unresolvedKeyframes: r, element: s, name: a} = this;
        if (!s || !s.current) return;
        super.readKeyframes();
        for (let y = 0; y < r.length; y++) {
            let x = r[y];
            if (typeof x == "string" && (x = x.trim(), mu(x))) {
                const S = Yp(x, s.current);
                S !== void 0 && (r[y] = S), y === r.length - 1 && (this.finalKeyframe = x)
            }
        }
        if (this.resolveNoneKeyframes(), !Zp.has(a) || r.length !== 2) return;
        const [u, f] = r, d = nh(u), p = nh(f), g = Wf(u), v = Wf(f);
        if (g !== v && wn[a]) {
            this.needsMeasurement = !0;
            return
        }
        if (d !== p) if (Zf(d) && Zf(p)) for (let y = 0; y < r.length; y++) {
            const x = r[y];
            typeof x == "string" && (r[y] = parseFloat(x))
        } else wn[a] && (this.needsMeasurement = !0)
    }

    resolveNoneKeyframes() {
        const {unresolvedKeyframes: r, name: s} = this, a = [];
        for (let u = 0; u < r.length; u++) (r[u] === null || ix(r[u])) && a.push(u);
        a.length && fx(r, a, s)
    }

    measureInitialState() {
        const {element: r, unresolvedKeyframes: s, name: a} = this;
        if (!r || !r.current) return;
        a === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = wn[a](r.measureViewportBox(), window.getComputedStyle(r.current)), s[0] = this.measuredOrigin;
        const u = s[s.length - 1];
        u !== void 0 && r.getValue(a, u).jump(u, !1)
    }

    measureEndState() {
        var p;
        const {element: r, name: s, unresolvedKeyframes: a} = this;
        if (!r || !r.current) return;
        const u = r.getValue(s);
        u && u.jump(this.measuredOrigin, !1);
        const f = a.length - 1, d = a[f];
        a[f] = wn[s](r.measureViewportBox(), window.getComputedStyle(r.current)), d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d), (p = this.removedTransforms) != null && p.length && this.removedTransforms.forEach(([g, v]) => {
            r.getValue(g).set(v)
        }), this.resolveNoneKeyframes()
    }
}

function sm(n, r, s) {
    if (n == null) return [];
    if (n instanceof EventTarget) return [n];
    if (typeof n == "string") {
        let a = document;
        const u = (s == null ? void 0 : s[n]) ?? a.querySelectorAll(n);
        return u ? Array.from(u) : []
    }
    return Array.from(n).filter(a => a != null)
}

const Xl = (n, r) => r && typeof n == "number" ? r.transform(n) : n;

function Gs(n) {
    return fp(n) && "offsetHeight" in n && !("ownerSVGElement" in n)
}

const {schedule: Tu} = Tp(queueMicrotask, !1), At = {x: !1, y: !1};

function om() {
    return At.x || At.y
}

function px(n) {
    return n === "x" || n === "y" ? At[n] ? null : (At[n] = !0, () => {
        At[n] = !1
    }) : At.x || At.y ? null : (At.x = At.y = !0, () => {
        At.x = At.y = !1
    })
}

function am(n, r) {
    const s = sm(n), a = new AbortController, u = {passive: !0, ...r, signal: a.signal};
    return [s, u, () => a.abort()]
}

function mx(n) {
    return !(n.pointerType === "touch" || om())
}

function gx(n, r, s = {}) {
    const [a, u, f] = am(n, s);
    return a.forEach(d => {
        let p = !1, g = !1, v;
        const y = () => {
            d.removeEventListener("pointerleave", b)
        }, x = z => {
            v && (v(z), v = void 0), y()
        }, S = z => {
            p = !1, window.removeEventListener("pointerup", S), window.removeEventListener("pointercancel", S), g && (g = !1, x(z))
        }, N = () => {
            p = !0, window.addEventListener("pointerup", S, u), window.addEventListener("pointercancel", S, u)
        }, b = z => {
            if (z.pointerType !== "touch") {
                if (p) {
                    g = !0;
                    return
                }
                x(z)
            }
        }, A = z => {
            if (!mx(z)) return;
            g = !1;
            const R = r(d, z);
            typeof R == "function" && (v = R, d.addEventListener("pointerleave", b, u))
        };
        d.addEventListener("pointerenter", A, u), d.addEventListener("pointerdown", N, u)
    }), f
}

const lm = (n, r) => r ? n === r ? !0 : lm(n, r.parentElement) : !1,
    Pu = n => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1,
    yx = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function vx(n) {
    return yx.has(n.tagName) || n.isContentEditable === !0
}

const xx = new Set(["INPUT", "SELECT", "TEXTAREA"]);

function wx(n) {
    return xx.has(n.tagName) || n.isContentEditable === !0
}

const Qs = new WeakSet;

function ih(n) {
    return r => {
        r.key === "Enter" && n(r)
    }
}

function kl(n, r) {
    n.dispatchEvent(new PointerEvent("pointer" + r, {isPrimary: !0, bubbles: !0}))
}

const Sx = (n, r) => {
    const s = n.currentTarget;
    if (!s) return;
    const a = ih(() => {
        if (Qs.has(s)) return;
        kl(s, "down");
        const u = ih(() => {
            kl(s, "up")
        }), f = () => kl(s, "cancel");
        s.addEventListener("keyup", u, r), s.addEventListener("blur", f, r)
    });
    s.addEventListener("keydown", a, r), s.addEventListener("blur", () => s.removeEventListener("keydown", a), r)
};

function sh(n) {
    return Pu(n) && !om()
}

const oh = new WeakSet;

function kx(n, r, s = {}) {
    const [a, u, f] = am(n, s), d = p => {
        const g = p.currentTarget;
        if (!sh(p) || oh.has(p)) return;
        Qs.add(g), s.stopPropagation && oh.add(p);
        const v = r(g, p), y = (N, b) => {
            window.removeEventListener("pointerup", x), window.removeEventListener("pointercancel", S), Qs.has(g) && Qs.delete(g), sh(N) && typeof v == "function" && v(N, {success: b})
        }, x = N => {
            y(N, g === window || g === document || s.useGlobalTarget || lm(g, N.target))
        }, S = N => {
            y(N, !1)
        };
        window.addEventListener("pointerup", x, u), window.addEventListener("pointercancel", S, u)
    };
    return a.forEach(p => {
        (s.useGlobalTarget ? window : p).addEventListener("pointerdown", d, u), Gs(p) && (p.addEventListener("focus", v => Sx(v, u)), !vx(p) && !p.hasAttribute("tabindex") && (p.tabIndex = 0))
    }), f
}

function Eu(n) {
    return fp(n) && "ownerSVGElement" in n
}

const Xs = new WeakMap;
let xn;
const um = (n, r, s) => (a, u) => u && u[0] ? u[0][n + "Size"] : Eu(a) && "getBBox" in a ? a.getBBox()[r] : a[s],
    jx = um("inline", "width", "offsetWidth"), Cx = um("block", "height", "offsetHeight");

function Nx({target: n, borderBoxSize: r}) {
    var s;
    (s = Xs.get(n)) == null || s.forEach(a => {
        a(n, {
            get width() {
                return jx(n, r)
            }, get height() {
                return Cx(n, r)
            }
        })
    })
}

function Tx(n) {
    n.forEach(Nx)
}

function Px() {
    typeof ResizeObserver > "u" || (xn = new ResizeObserver(Tx))
}

function Ex(n, r) {
    xn || Px();
    const s = sm(n);
    return s.forEach(a => {
        let u = Xs.get(a);
        u || (u = new Set, Xs.set(a, u)), u.add(r), xn == null || xn.observe(a)
    }), () => {
        s.forEach(a => {
            const u = Xs.get(a);
            u == null || u.delete(r), u != null && u.size || xn == null || xn.unobserve(a)
        })
    }
}

const Ys = new Set;
let vr;

function Mx() {
    vr = () => {
        const n = {
            get width() {
                return window.innerWidth
            }, get height() {
                return window.innerHeight
            }
        };
        Ys.forEach(r => r(n))
    }, window.addEventListener("resize", vr)
}

function bx(n) {
    return Ys.add(n), vr || Mx(), () => {
        Ys.delete(n), !Ys.size && typeof vr == "function" && (window.removeEventListener("resize", vr), vr = void 0)
    }
}

function ah(n, r) {
    return typeof n == "function" ? bx(n) : Ex(n, r)
}

function zx(n) {
    return Eu(n) && n.tagName === "svg"
}

const Ax = [...nm, Oe, Rt], Rx = n => Ax.find(tm(n)), lh = () => ({translate: 0, scale: 1, origin: 0, originPoint: 0}),
    xr = () => ({x: lh(), y: lh()}), uh = () => ({min: 0, max: 0}), We = () => ({x: uh(), y: uh()}), Dx = new WeakMap;

function po(n) {
    return n !== null && typeof n == "object" && typeof n.start == "function"
}

function ki(n) {
    return typeof n == "string" || Array.isArray(n)
}

const Mu = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    bu = ["initial", ...Mu];

function mo(n) {
    return po(n.animate) || bu.some(r => ki(n[r]))
}

function cm(n) {
    return !!(mo(n) || n.variants)
}

function Vx(n, r, s) {
    for (const a in r) {
        const u = r[a], f = s[a];
        if (Xe(u)) n.addValue(a, u); else if (Xe(f)) n.addValue(a, Sr(u, {owner: n})); else if (f !== u) if (n.hasValue(a)) {
            const d = n.getValue(a);
            d.liveStyle === !0 ? d.jump(u) : d.hasAnimated || d.set(u)
        } else {
            const d = n.getStaticValue(a);
            n.addValue(a, Sr(d !== void 0 ? d : u, {owner: n}))
        }
    }
    for (const a in s) r[a] === void 0 && n.removeValue(a);
    return r
}

const Yl = {current: null}, dm = {current: !1}, Lx = typeof window < "u";

function _x() {
    if (dm.current = !0, !!Lx) if (window.matchMedia) {
        const n = window.matchMedia("(prefers-reduced-motion)"), r = () => Yl.current = n.matches;
        n.addEventListener("change", r), r()
    } else Yl.current = !1
}

const ch = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let ao = {};

function fm(n) {
    ao = n
}

function Ix() {
    return ao
}

class Ox {
    scrapeMotionValuesFromProps(r, s, a) {
        return {}
    }

    constructor({
                    parent: r,
                    props: s,
                    presenceContext: a,
                    reducedMotionConfig: u,
                    skipAnimations: f,
                    blockInitialAnimation: d,
                    visualState: p
                }, g = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = Su, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const N = nt.now();
            this.renderScheduledAt < N && (this.renderScheduledAt = N, xe.render(this.render, !1, !0))
        };
        const {latestValues: v, renderState: y} = p;
        this.latestValues = v, this.baseTarget = {...v}, this.initialValues = s.initial ? {...v} : {}, this.renderState = y, this.parent = r, this.props = s, this.presenceContext = a, this.depth = r ? r.depth + 1 : 0, this.reducedMotionConfig = u, this.skipAnimationsConfig = f, this.options = g, this.blockInitialAnimation = !!d, this.isControllingVariants = mo(s), this.isVariantNode = cm(s), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(r && r.current);
        const {willChange: x, ...S} = this.scrapeMotionValuesFromProps(s, {}, this);
        for (const N in S) {
            const b = S[N];
            v[N] !== void 0 && Xe(b) && b.set(v[N])
        }
    }

    mount(r) {
        var s, a;
        if (this.hasBeenMounted) for (const u in this.initialValues) (s = this.values.get(u)) == null || s.jump(this.initialValues[u]), this.latestValues[u] = this.initialValues[u];
        this.current = r, Dx.set(r, this), this.projection && !this.projection.instance && this.projection.mount(r), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((u, f) => this.bindToMotionValue(f, u)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (dm.current || _x(), this.shouldReduceMotion = Yl.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, (a = this.parent) == null || a.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0
    }

    unmount() {
        var r;
        this.projection && this.projection.unmount(), kn(this.notifyUpdate), kn(this.render), this.valueSubscriptions.forEach(s => s()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (r = this.parent) == null || r.removeChild(this);
        for (const s in this.events) this.events[s].clear();
        for (const s in this.features) {
            const a = this.features[s];
            a && (a.unmount(), a.isMounted = !1)
        }
        this.current = null
    }

    addChild(r) {
        this.children.add(r), this.enteringChildren ?? (this.enteringChildren = new Set), this.enteringChildren.add(r)
    }

    removeChild(r) {
        this.children.delete(r), this.enteringChildren && this.enteringChildren.delete(r)
    }

    bindToMotionValue(r, s) {
        if (this.valueSubscriptions.has(r) && this.valueSubscriptions.get(r)(), s.accelerate && Gp.has(r) && this.current instanceof HTMLElement) {
            const {factory: d, keyframes: p, times: g, ease: v, duration: y} = s.accelerate,
                x = new Hp({element: this.current, name: r, keyframes: p, times: g, ease: v, duration: mt(y)}),
                S = d(x);
            this.valueSubscriptions.set(r, () => {
                S(), x.cancel()
            });
            return
        }
        const a = Cr.has(r);
        a && this.onBindTransform && this.onBindTransform();
        const u = s.on("change", d => {
            this.latestValues[r] = d, this.props.onUpdate && xe.preRender(this.notifyUpdate), a && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
        });
        let f;
        typeof window < "u" && window.MotionCheckAppearSync && (f = window.MotionCheckAppearSync(this, r, s)), this.valueSubscriptions.set(r, () => {
            u(), f && f()
        })
    }

    sortNodePosition(r) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== r.type ? 0 : this.sortInstanceNodePosition(this.current, r.current)
    }

    updateFeatures() {
        let r = "animation";
        for (r in ao) {
            const s = ao[r];
            if (!s) continue;
            const {isEnabled: a, Feature: u} = s;
            if (!this.features[r] && u && a(this.props) && (this.features[r] = new u(this)), this.features[r]) {
                const f = this.features[r];
                f.isMounted ? f.update() : (f.mount(), f.isMounted = !0)
            }
        }
    }

    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }

    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : We()
    }

    getStaticValue(r) {
        return this.latestValues[r]
    }

    setStaticValue(r, s) {
        this.latestValues[r] = s
    }

    update(r, s) {
        (r.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = r, this.prevPresenceContext = this.presenceContext, this.presenceContext = s;
        for (let a = 0; a < ch.length; a++) {
            const u = ch[a];
            this.propEventSubscriptions[u] && (this.propEventSubscriptions[u](), delete this.propEventSubscriptions[u]);
            const f = "on" + u, d = r[f];
            d && (this.propEventSubscriptions[u] = this.on(u, d))
        }
        this.prevMotionValues = Vx(this, this.scrapeMotionValuesFromProps(r, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }

    getProps() {
        return this.props
    }

    getVariant(r) {
        return this.props.variants ? this.props.variants[r] : void 0
    }

    getDefaultTransition() {
        return this.props.transition
    }

    getTransformPagePoint() {
        return this.props.transformPagePoint
    }

    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }

    addVariantChild(r) {
        const s = this.getClosestVariantNode();
        if (s) return s.variantChildren && s.variantChildren.add(r), () => s.variantChildren.delete(r)
    }

    addValue(r, s) {
        const a = this.values.get(r);
        s !== a && (a && this.removeValue(r), this.bindToMotionValue(r, s), this.values.set(r, s), this.latestValues[r] = s.get())
    }

    removeValue(r) {
        this.values.delete(r);
        const s = this.valueSubscriptions.get(r);
        s && (s(), this.valueSubscriptions.delete(r)), delete this.latestValues[r], this.removeValueFromRenderState(r, this.renderState)
    }

    hasValue(r) {
        return this.values.has(r)
    }

    getValue(r, s) {
        if (this.props.values && this.props.values[r]) return this.props.values[r];
        let a = this.values.get(r);
        return a === void 0 && s !== void 0 && (a = Sr(s === null ? void 0 : s, {owner: this}), this.addValue(r, a)), a
    }

    readValue(r, s) {
        let a = this.latestValues[r] !== void 0 || !this.current ? this.latestValues[r] : this.getBaseTargetFromProps(this.props, r) ?? this.readValueFromInstance(this.current, r, this.options);
        return a != null && (typeof a == "string" && (dp(a) || hp(a)) ? a = parseFloat(a) : !Rx(a) && Rt.test(s) && (a = im(r, s)), this.setBaseTarget(r, Xe(a) ? a.get() : a)), Xe(a) ? a.get() : a
    }

    setBaseTarget(r, s) {
        this.baseTarget[r] = s
    }

    getBaseTarget(r) {
        var f;
        const {initial: s} = this.props;
        let a;
        if (typeof s == "string" || typeof s == "object") {
            const d = Cu(this.props, s, (f = this.presenceContext) == null ? void 0 : f.custom);
            d && (a = d[r])
        }
        if (s && a !== void 0) return a;
        const u = this.getBaseTargetFromProps(this.props, r);
        return u !== void 0 && !Xe(u) ? u : this.initialValues[r] !== void 0 && a === void 0 ? void 0 : this.baseTarget[r]
    }

    on(r, s) {
        return this.events[r] || (this.events[r] = new fu), this.events[r].add(s)
    }

    notify(r, ...s) {
        this.events[r] && this.events[r].notify(...s)
    }

    scheduleRenderMicrotask() {
        Tu.render(this.render)
    }
}

class hm extends Ox {
    constructor() {
        super(...arguments), this.KeyframeResolver = hx
    }

    sortInstanceNodePosition(r, s) {
        return r.compareDocumentPosition(s) & 2 ? 1 : -1
    }

    getBaseTargetFromProps(r, s) {
        const a = r.style;
        return a ? a[s] : void 0
    }

    removeValueFromRenderState(r, {vars: s, style: a}) {
        delete s[r], delete a[r]
    }

    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {children: r} = this.props;
        Xe(r) && (this.childSubscription = r.on("change", s => {
            this.current && (this.current.textContent = `${s}`)
        }))
    }
}

class jn {
    constructor(r) {
        this.isMounted = !1, this.node = r
    }

    update() {
    }
}

function pm({top: n, left: r, right: s, bottom: a}) {
    return {x: {min: r, max: s}, y: {min: n, max: a}}
}

function Fx({x: n, y: r}) {
    return {top: r.min, right: n.max, bottom: r.max, left: n.min}
}

function Bx(n, r) {
    if (!r) return n;
    const s = r({x: n.left, y: n.top}), a = r({x: n.right, y: n.bottom});
    return {top: s.y, left: s.x, bottom: a.y, right: a.x}
}

function jl(n) {
    return n === void 0 || n === 1
}

function Zl({scale: n, scaleX: r, scaleY: s}) {
    return !jl(n) || !jl(r) || !jl(s)
}

function In(n) {
    return Zl(n) || mm(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY
}

function mm(n) {
    return dh(n.x) || dh(n.y)
}

function dh(n) {
    return n && n !== "0%"
}

function lo(n, r, s) {
    const a = n - s, u = r * a;
    return s + u
}

function fh(n, r, s, a, u) {
    return u !== void 0 && (n = lo(n, u, a)), lo(n, s, a) + r
}

function ql(n, r = 0, s = 1, a, u) {
    n.min = fh(n.min, r, s, a, u), n.max = fh(n.max, r, s, a, u)
}

function gm(n, {x: r, y: s}) {
    ql(n.x, r.translate, r.scale, r.originPoint), ql(n.y, s.translate, s.scale, s.originPoint)
}

const hh = .999999999999, ph = 1.0000000000001;

function Wx(n, r, s, a = !1) {
    var p;
    const u = s.length;
    if (!u) return;
    r.x = r.y = 1;
    let f, d;
    for (let g = 0; g < u; g++) {
        f = s[g], d = f.projectionDelta;
        const {visualElement: v} = f.options;
        v && v.props.style && v.props.style.display === "contents" || (a && f.options.layoutScroll && f.scroll && f !== f.root && (Ft(n.x, -f.scroll.offset.x), Ft(n.y, -f.scroll.offset.y)), d && (r.x *= d.x.scale, r.y *= d.y.scale, gm(n, d)), a && In(f.latestValues) && Zs(n, f.latestValues, (p = f.layout) == null ? void 0 : p.layoutBox))
    }
    r.x < ph && r.x > hh && (r.x = 1), r.y < ph && r.y > hh && (r.y = 1)
}

function Ft(n, r) {
    n.min += r, n.max += r
}

function mh(n, r, s, a, u = .5) {
    const f = ve(n.min, n.max, u);
    ql(n, r, s, f, a)
}

function gh(n, r) {
    return typeof n == "string" ? parseFloat(n) / 100 * (r.max - r.min) : n
}

function Zs(n, r, s) {
    const a = s ?? n;
    mh(n.x, gh(r.x, a.x), r.scaleX, r.scale, r.originX), mh(n.y, gh(r.y, a.y), r.scaleY, r.scale, r.originY)
}

function ym(n, r) {
    return pm(Bx(n.getBoundingClientRect(), r))
}

function Ux(n, r, s) {
    const a = ym(n, s), {scroll: u} = r;
    return u && (Ft(a.x, u.offset.x), Ft(a.y, u.offset.y)), a
}

const $x = {x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective"}, Hx = jr.length;

function Kx(n, r, s) {
    let a = "", u = !0;
    for (let d = 0; d < Hx; d++) {
        const p = jr[d], g = n[p];
        if (g === void 0) continue;
        let v = !0;
        if (typeof g == "number") v = g === (p.startsWith("scale") ? 1 : 0); else {
            const y = parseFloat(g);
            v = p.startsWith("scale") ? y === 1 : y === 0
        }
        if (!v || s) {
            const y = Xl(g, oo[p]);
            if (!v) {
                u = !1;
                const x = $x[p] || p;
                a += `${x}(${y}) `
            }
            s && (r[p] = y)
        }
    }
    const f = n.pathRotation;
    return f && (u = !1, a += `rotate(${Xl(f, oo.pathRotation)}) `), a = a.trim(), s ? a = s(r, u ? "" : a) : u && (a = "none"), a
}

function zu(n, r, s) {
    const {style: a, vars: u, transformOrigin: f} = n;
    let d = !1, p = !1;
    for (const g in r) {
        const v = r[g];
        if (Cr.has(g)) {
            d = !0;
            continue
        } else if (Ep(g)) {
            u[g] = v;
            continue
        } else {
            const y = Xl(v, oo[g]);
            g.startsWith("origin") ? (p = !0, f[g] = y) : a[g] = y
        }
    }
    if (r.transform || (d || s ? a.transform = Kx(r, n.transform, s) : a.transform && (a.transform = "none")), p) {
        const {originX: g = "50%", originY: v = "50%", originZ: y = 0} = f;
        a.transformOrigin = `${g} ${v} ${y}`
    }
}

function vm(n, {style: r, vars: s}, a, u) {
    const f = n.style;
    let d;
    for (d in r) f[d] = r[d];
    u == null || u.applyProjectionStyles(f, a);
    for (d in s) f.setProperty(d, s[d])
}

function yh(n, r) {
    return r.max === r.min ? 0 : n / (r.max - r.min) * 100
}

const di = {
    correct: (n, r) => {
        if (!r.target) return n;
        if (typeof n == "string") if (J.test(n)) n = parseFloat(n); else return n;
        const s = yh(n, r.target.x), a = yh(n, r.target.y);
        return `${s}% ${a}%`
    }
}, Gx = {
    correct: (n, {treeScale: r, projectionDelta: s}) => {
        const a = n, u = Rt.parse(n);
        if (u.length > 5) return a;
        const f = Rt.createTransformer(n), d = typeof u[0] != "number" ? 1 : 0, p = s.x.scale * r.x,
            g = s.y.scale * r.y;
        u[0 + d] /= p, u[1 + d] /= g;
        const v = ve(p, g, .5);
        return typeof u[2 + d] == "number" && (u[2 + d] /= v), typeof u[3 + d] == "number" && (u[3 + d] /= v), f(u)
    }
}, Jl = {
    borderRadius: {
        ...di,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: di,
    borderTopRightRadius: di,
    borderBottomLeftRadius: di,
    borderBottomRightRadius: di,
    boxShadow: Gx
};

function xm(n, {layout: r, layoutId: s}) {
    return Cr.has(n) || n.startsWith("origin") || (r || s !== void 0) && (!!Jl[n] || n === "opacity")
}

function Au(n, r, s) {
    var d;
    const a = n.style, u = r == null ? void 0 : r.style, f = {};
    if (!a) return f;
    for (const p in a) (Xe(a[p]) || u && Xe(u[p]) || xm(p, n) || ((d = s == null ? void 0 : s.getValue(p)) == null ? void 0 : d.liveStyle) !== void 0) && (f[p] = a[p]);
    return f
}

function Qx(n) {
    return window.getComputedStyle(n)
}

class Xx extends hm {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = vm
    }

    readValueFromInstance(r, s) {
        var a;
        if (Cr.has(s)) return (a = this.projection) != null && a.isProjecting ? Il(s) : mv(r, s);
        {
            const u = Qx(r), f = (Ep(s) ? u.getPropertyValue(s) : u[s]) || 0;
            return typeof f == "string" ? f.trim() : f
        }
    }

    measureInstanceViewportBox(r, {transformPagePoint: s}) {
        return ym(r, s)
    }

    build(r, s, a) {
        zu(r, s, a.transformTemplate)
    }

    scrapeMotionValuesFromProps(r, s, a) {
        return Au(r, s, a)
    }
}

const Yx = {offset: "stroke-dashoffset", array: "stroke-dasharray"},
    Zx = {offset: "strokeDashoffset", array: "strokeDasharray"};

function qx(n, r, s = 1, a = 0, u = !0) {
    n.pathLength = 1;
    const f = u ? Yx : Zx;
    n[f.offset] = `${-a}`, n[f.array] = `${r} ${s}`
}

const Jx = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];

function wm(n, {
    attrX: r,
    attrY: s,
    attrScale: a,
    pathLength: u,
    pathSpacing: f = 1,
    pathOffset: d = 0,
    ...p
}, g, v, y) {
    if (zu(n, p, v), g) {
        n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
        return
    }
    n.attrs = n.style, n.style = {};
    const {attrs: x, style: S} = n;
    x.transform && (S.transform = x.transform, delete x.transform), (S.transform || x.transformOrigin) && (S.transformOrigin = x.transformOrigin ?? "50% 50%", delete x.transformOrigin), S.transform && (S.transformBox = (y == null ? void 0 : y.transformBox) ?? "fill-box", delete x.transformBox);
    for (const N of Jx) x[N] !== void 0 && (S[N] = x[N], delete x[N]);
    r !== void 0 && (x.x = r), s !== void 0 && (x.y = s), a !== void 0 && (x.scale = a), u !== void 0 && qx(x, u, f, d, !1)
}

const Sm = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]),
    km = n => typeof n == "string" && n.toLowerCase() === "svg";

function e1(n, r, s, a) {
    vm(n, r, void 0, a);
    for (const u in r.attrs) n.setAttribute(Sm.has(u) ? u : Nu(u), r.attrs[u])
}

function jm(n, r, s) {
    const a = Au(n, r, s);
    for (const u in n) if (Xe(n[u]) || Xe(r[u])) {
        const f = jr.indexOf(u) !== -1 ? "attr" + u.charAt(0).toUpperCase() + u.substring(1) : u;
        a[f] = n[u]
    }
    return a
}

class t1 extends hm {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = We
    }

    getBaseTargetFromProps(r, s) {
        return r[s]
    }

    readValueFromInstance(r, s) {
        if (Cr.has(s)) {
            const a = rm(s);
            return a && a.default || 0
        }
        return s = Sm.has(s) ? s : Nu(s), r.getAttribute(s)
    }

    scrapeMotionValuesFromProps(r, s, a) {
        return jm(r, s, a)
    }

    build(r, s, a) {
        wm(r, s, this.isSVGTag, a.transformTemplate, a.style)
    }

    renderInstance(r, s, a, u) {
        e1(r, s, a, u)
    }

    mount(r) {
        this.isSVGTag = km(r.tagName), super.mount(r)
    }
}

const n1 = bu.length;

function Cm(n) {
    if (!n) return;
    if (!n.isControllingVariants) {
        const s = n.parent ? Cm(n.parent) || {} : {};
        return n.props.initial !== void 0 && (s.initial = n.props.initial), s
    }
    const r = {};
    for (let s = 0; s < n1; s++) {
        const a = bu[s], u = n.props[a];
        (ki(u) || u === !1) && (r[a] = u)
    }
    return r
}

function Nm(n, r) {
    if (!Array.isArray(r)) return !1;
    const s = r.length;
    if (s !== n.length) return !1;
    for (let a = 0; a < s; a++) if (r[a] !== n[a]) return !1;
    return !0
}

const r1 = [...Mu].reverse(), i1 = Mu.length;

function s1(n) {
    return r => Promise.all(r.map(({animation: s, options: a}) => nx(n, s, a)))
}

function o1(n) {
    let r = s1(n), s = vh(), a = !0, u = !1;
    const f = v => (y, x) => {
        var N;
        const S = Un(n, x, v === "exit" ? (N = n.presenceContext) == null ? void 0 : N.custom : void 0);
        if (S) {
            const {transition: b, transitionEnd: A, ...z} = S;
            y = {...y, ...z, ...A}
        }
        return y
    };

    function d(v) {
        r = v(n)
    }

    function p(v) {
        const {props: y} = n, x = Cm(n.parent) || {}, S = [], N = new Set;
        let b = {}, A = 1 / 0;
        for (let R = 0; R < i1; R++) {
            const U = r1[R], I = s[U], F = y[U] !== void 0 ? y[U] : x[U], X = ki(F), P = U === v ? I.isActive : null;
            P === !1 && (A = R);
            let K = F === x[U] && F !== y[U] && X;
            if (K && (a || u) && n.manuallyAnimateOnMount && (K = !1), I.protectedKeys = {...b}, !I.isActive && P === null || !F && !I.prevProp || po(F) || typeof F == "boolean") continue;
            if (U === "exit" && I.isActive && P !== !0) {
                I.prevResolvedValues && (b = {...b, ...I.prevResolvedValues});
                continue
            }
            const $ = a1(I.prevProp, F);
            let se = $ || U === v && I.isActive && !K && X || R > A && X, Z = !1;
            const O = Array.isArray(F) ? F : [F];
            let ae = O.reduce(f(U), {});
            P === !1 && (ae = {});
            const {prevResolvedValues: ke = {}} = I, ze = {...ke, ...ae}, Le = B => {
                se = !0, N.has(B) && (Z = !0, N.delete(B)), I.needsAnimating[B] = !0;
                const ee = n.getValue(B);
                ee && (ee.liveStyle = !1)
            };
            for (const B in ze) {
                const ee = ae[B], G = ke[B];
                if (b.hasOwnProperty(B)) continue;
                let C = !1;
                $l(ee) && $l(G) ? C = !Nm(ee, G) || $ : C = ee !== G, C ? ee != null ? Le(B) : N.add(B) : ee !== void 0 && N.has(B) ? Le(B) : I.protectedKeys[B] = !0
            }
            I.prevProp = F, I.prevResolvedValues = ae, I.isActive && (b = {...b, ...ae}), (a || u) && n.blockInitialAnimation && (se = !1);
            const je = K && $;
            se && (!je || Z) && S.push(...O.map(B => {
                const ee = {type: U};
                if (typeof B == "string" && (a || u) && !je && n.manuallyAnimateOnMount && n.parent) {
                    const {parent: G} = n, C = Un(G, B);
                    if (G.enteringChildren && C) {
                        const {delayChildren: D} = C.transition || {};
                        ee.delay = Qp(G.enteringChildren, n, D)
                    }
                }
                return {animation: B, options: ee}
            }))
        }
        if (N.size) {
            const R = {};
            if (typeof y.initial != "boolean") {
                const U = Un(n, Array.isArray(y.initial) ? y.initial[0] : y.initial);
                U && U.transition && (R.transition = U.transition)
            }
            N.forEach(U => {
                const I = n.getBaseTarget(U), F = n.getValue(U);
                F && (F.liveStyle = !0), R[U] = I ?? null
            }), S.push({animation: R})
        }
        let z = !!S.length;
        return a && (y.initial === !1 || y.initial === y.animate) && !n.manuallyAnimateOnMount && (z = !1), a = !1, u = !1, z ? r(S) : Promise.resolve()
    }

    function g(v, y) {
        var S;
        if (s[v].isActive === y) return Promise.resolve();
        (S = n.variantChildren) == null || S.forEach(N => {
            var b;
            return (b = N.animationState) == null ? void 0 : b.setActive(v, y)
        }), s[v].isActive = y;
        const x = p(v);
        for (const N in s) s[N].protectedKeys = {};
        return x
    }

    return {
        animateChanges: p, setActive: g, setAnimateFunction: d, getState: () => s, reset: () => {
            s = vh(), u = !0
        }
    }
}

function a1(n, r) {
    return typeof r == "string" ? r !== n : Array.isArray(r) ? !Nm(r, n) : !1
}

function _n(n = !1) {
    return {isActive: n, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {}}
}

function vh() {
    return {
        animate: _n(!0),
        whileInView: _n(),
        whileHover: _n(),
        whileTap: _n(),
        whileDrag: _n(),
        whileFocus: _n(),
        exit: _n()
    }
}

function eu(n, r) {
    n.min = r.min, n.max = r.max
}

function zt(n, r) {
    eu(n.x, r.x), eu(n.y, r.y)
}

function xh(n, r) {
    n.translate = r.translate, n.scale = r.scale, n.originPoint = r.originPoint, n.origin = r.origin
}

const Tm = 1e-4, l1 = 1 - Tm, u1 = 1 + Tm, Pm = .01, c1 = 0 - Pm, d1 = 0 + Pm;

function rt(n) {
    return n.max - n.min
}

function f1(n, r, s) {
    return Math.abs(n - r) <= s
}

function wh(n, r, s, a = .5) {
    n.origin = a, n.originPoint = ve(r.min, r.max, n.origin), n.scale = rt(s) / rt(r), n.translate = ve(s.min, s.max, n.origin) - n.originPoint, (n.scale >= l1 && n.scale <= u1 || isNaN(n.scale)) && (n.scale = 1), (n.translate >= c1 && n.translate <= d1 || isNaN(n.translate)) && (n.translate = 0)
}

function vi(n, r, s, a) {
    wh(n.x, r.x, s.x, a ? a.originX : void 0), wh(n.y, r.y, s.y, a ? a.originY : void 0)
}

function Sh(n, r, s, a = 0) {
    const u = a ? ve(s.min, s.max, a) : s.min;
    n.min = u + r.min, n.max = n.min + rt(r)
}

function h1(n, r, s, a) {
    Sh(n.x, r.x, s.x, a == null ? void 0 : a.x), Sh(n.y, r.y, s.y, a == null ? void 0 : a.y)
}

function kh(n, r, s, a = 0) {
    const u = a ? ve(s.min, s.max, a) : s.min;
    n.min = r.min - u, n.max = n.min + rt(r)
}

function uo(n, r, s, a) {
    kh(n.x, r.x, s.x, a == null ? void 0 : a.x), kh(n.y, r.y, s.y, a == null ? void 0 : a.y)
}

function jh(n, r, s, a, u) {
    return n -= r, n = lo(n, 1 / s, a), u !== void 0 && (n = lo(n, 1 / u, a)), n
}

function p1(n, r = 0, s = 1, a = .5, u, f = n, d = n) {
    if (Bt.test(r) && (r = parseFloat(r), r = ve(d.min, d.max, r / 100) - d.min), typeof r != "number") return;
    let p = ve(f.min, f.max, a);
    n === f && (p -= r), n.min = jh(n.min, r, s, p, u), n.max = jh(n.max, r, s, p, u)
}

function Ch(n, r, [s, a, u], f, d) {
    p1(n, r[s], r[a], r[u], r.scale, f, d)
}

const m1 = ["x", "scaleX", "originX"], g1 = ["y", "scaleY", "originY"];

function Nh(n, r, s, a) {
    Ch(n.x, r, m1, s ? s.x : void 0, a ? a.x : void 0), Ch(n.y, r, g1, s ? s.y : void 0, a ? a.y : void 0)
}

function Th(n) {
    return n.translate === 0 && n.scale === 1
}

function Em(n) {
    return Th(n.x) && Th(n.y)
}

function Ph(n, r) {
    return n.min === r.min && n.max === r.max
}

function y1(n, r) {
    return Ph(n.x, r.x) && Ph(n.y, r.y)
}

function Eh(n, r) {
    return Math.round(n.min) === Math.round(r.min) && Math.round(n.max) === Math.round(r.max)
}

function Mm(n, r) {
    return Eh(n.x, r.x) && Eh(n.y, r.y)
}

function Mh(n) {
    return rt(n.x) / rt(n.y)
}

function bh(n, r) {
    return n.translate === r.translate && n.scale === r.scale && n.originPoint === r.originPoint
}

function Ot(n) {
    return [n("x"), n("y")]
}

function v1(n, r, s) {
    let a = "";
    const u = n.x.translate / r.x, f = n.y.translate / r.y, d = (s == null ? void 0 : s.z) || 0;
    if ((u || f || d) && (a = `translate3d(${u}px, ${f}px, ${d}px) `), (r.x !== 1 || r.y !== 1) && (a += `scale(${1 / r.x}, ${1 / r.y}) `), s) {
        const {transformPerspective: v, rotate: y, pathRotation: x, rotateX: S, rotateY: N, skewX: b, skewY: A} = s;
        v && (a = `perspective(${v}px) ${a}`), y && (a += `rotate(${y}deg) `), x && (a += `rotate(${x}deg) `), S && (a += `rotateX(${S}deg) `), N && (a += `rotateY(${N}deg) `), b && (a += `skewX(${b}deg) `), A && (a += `skewY(${A}deg) `)
    }
    const p = n.x.scale * r.x, g = n.y.scale * r.y;
    return (p !== 1 || g !== 1) && (a += `scale(${p}, ${g})`), a || "none"
}

const bm = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"],
    x1 = bm.length, zh = n => typeof n == "string" ? parseFloat(n) : n, Ah = n => typeof n == "number" || J.test(n);

function w1(n, r, s, a, u, f) {
    u ? (n.opacity = ve(0, s.opacity ?? 1, S1(a)), n.opacityExit = ve(r.opacity ?? 1, 0, k1(a))) : f && (n.opacity = ve(r.opacity ?? 1, s.opacity ?? 1, a));
    for (let d = 0; d < x1; d++) {
        const p = bm[d];
        let g = Rh(r, p), v = Rh(s, p);
        if (g === void 0 && v === void 0) continue;
        g || (g = 0), v || (v = 0), g === 0 || v === 0 || Ah(g) === Ah(v) ? (n[p] = Math.max(ve(zh(g), zh(v), a), 0), (Bt.test(v) || Bt.test(g)) && (n[p] += "%")) : n[p] = v
    }
    (r.rotate || s.rotate) && (n.rotate = ve(r.rotate || 0, s.rotate || 0, a))
}

function Rh(n, r) {
    return n[r] !== void 0 ? n[r] : n.borderRadius
}

const S1 = zm(0, .5, kp), k1 = zm(.5, .95, jt);

function zm(n, r, s) {
    return a => a < n ? 0 : a > r ? 1 : s(wi(n, r, a))
}

function j1(n, r, s) {
    const a = Xe(n) ? n : Sr(n);
    return a.start(ju("", a, r, s)), a.animation
}

function ji(n, r, s, a = {passive: !0}) {
    return n.addEventListener(r, s, a), () => n.removeEventListener(r, s)
}

const C1 = (n, r) => n.depth - r.depth;

class N1 {
    constructor() {
        this.children = [], this.isDirty = !1
    }

    add(r) {
        cu(this.children, r), this.isDirty = !0
    }

    remove(r) {
        to(this.children, r), this.isDirty = !0
    }

    forEach(r) {
        this.isDirty && this.children.sort(C1), this.isDirty = !1, this.children.forEach(r)
    }
}

function T1(n, r) {
    const s = nt.now(), a = ({timestamp: u}) => {
        const f = u - s;
        f >= r && (kn(a), n(f - r))
    };
    return xe.setup(a, !0), () => kn(a)
}

function qs(n) {
    return Xe(n) ? n.get() : n
}

class P1 {
    constructor() {
        this.members = []
    }

    add(r) {
        cu(this.members, r);
        for (let s = this.members.length - 1; s >= 0; s--) {
            const a = this.members[s];
            if (a === r || a === this.lead || a === this.prevLead) continue;
            const u = a.instance;
            (!u || u.isConnected === !1) && !a.snapshot && (to(this.members, a), a.unmount())
        }
        r.scheduleRender()
    }

    remove(r) {
        if (to(this.members, r), r === this.prevLead && (this.prevLead = void 0), r === this.lead) {
            const s = this.members[this.members.length - 1];
            s && this.promote(s)
        }
    }

    relegate(r) {
        var s;
        for (let a = this.members.indexOf(r) - 1; a >= 0; a--) {
            const u = this.members[a];
            if (u.isPresent !== !1 && ((s = u.instance) == null ? void 0 : s.isConnected) !== !1) return this.promote(u), !0
        }
        return !1
    }

    promote(r, s) {
        var u;
        const a = this.lead;
        if (r !== a && (this.prevLead = a, this.lead = r, r.show(), a)) {
            a.updateSnapshot(), r.scheduleRender();
            const {layoutDependency: f} = a.options, {layoutDependency: d} = r.options;
            (f === void 0 || f !== d) && (r.resumeFrom = a, s && (a.preserveOpacity = !0), a.snapshot && (r.snapshot = a.snapshot, r.snapshot.latestValues = a.animationValues || a.latestValues), (u = r.root) != null && u.isUpdating && (r.isLayoutDirty = !0)), r.options.crossfade === !1 && a.hide()
        }
    }

    exitAnimationComplete() {
        this.members.forEach(r => {
            var s, a, u, f, d;
            (a = (s = r.options).onExitComplete) == null || a.call(s), (d = (u = r.resumingFrom) == null ? void 0 : (f = u.options).onExitComplete) == null || d.call(f)
        })
    }

    scheduleRender() {
        this.members.forEach(r => r.instance && r.scheduleRender(!1))
    }

    removeLeadSnapshot() {
        var r;
        (r = this.lead) != null && r.snapshot && (this.lead.snapshot = void 0)
    }
}

const Js = {hasAnimatedSinceResize: !0, hasEverUpdated: !1}, Cl = ["", "X", "Y", "Z"], E1 = 1e3;
let M1 = 0;

function Nl(n, r, s, a) {
    const {latestValues: u} = r;
    u[n] && (s[n] = u[n], r.setStaticValue(n, 0), a && (a[n] = 0))
}

function Am(n) {
    if (n.hasCheckedOptimisedAppear = !0, n.root === n) return;
    const {visualElement: r} = n.options;
    if (!r) return;
    const s = Jp(r);
    if (window.MotionHasOptimisedAnimation(s, "transform")) {
        const {layout: u, layoutId: f} = n.options;
        window.MotionCancelOptimisedAnimation(s, "transform", xe, !(u || f))
    }
    const {parent: a} = n;
    a && !a.hasCheckedOptimisedAppear && Am(a)
}

function Rm({attachResizeListener: n, defaultParent: r, measureScroll: s, checkIsScrollRoot: a, resetTransform: u}) {
    return class {
        constructor(d = {}, p = r == null ? void 0 : r()) {
            this.id = M1++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, this.nodes.forEach(A1), this.nodes.forEach(I1), this.nodes.forEach(O1), this.nodes.forEach(R1)
            }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = d, this.root = p ? p.root || p : this, this.path = p ? [...p.path, p] : [], this.parent = p, this.depth = p ? p.depth + 1 : 0;
            for (let g = 0; g < this.path.length; g++) this.path[g].shouldResetTransform = !0;
            this.root === this && (this.nodes = new N1)
        }

        addEventListener(d, p) {
            return this.eventHandlers.has(d) || this.eventHandlers.set(d, new fu), this.eventHandlers.get(d).add(p)
        }

        notifyListeners(d, ...p) {
            const g = this.eventHandlers.get(d);
            g && g.notify(...p)
        }

        hasListeners(d) {
            return this.eventHandlers.has(d)
        }

        mount(d) {
            if (this.instance) return;
            this.isSVG = Eu(d) && !zx(d), this.instance = d;
            const {layoutId: p, layout: g, visualElement: v} = this.options;
            if (v && !v.current && v.mount(d), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (g || p) && (this.isLayoutDirty = !0), n) {
                let y, x = 0;
                const S = () => this.root.updateBlockedByResize = !1;
                xe.read(() => {
                    x = window.innerWidth
                }), n(d, () => {
                    const N = window.innerWidth;
                    N !== x && (x = N, this.root.updateBlockedByResize = !0, y && y(), y = T1(S, 250), Js.hasAnimatedSinceResize && (Js.hasAnimatedSinceResize = !1, this.nodes.forEach(Lh)))
                })
            }
            p && this.root.registerSharedNode(p, this), this.options.animate !== !1 && v && (p || g) && this.addEventListener("didUpdate", ({
                                                                                                                                                delta: y,
                                                                                                                                                hasLayoutChanged: x,
                                                                                                                                                hasRelativeLayoutChanged: S,
                                                                                                                                                layout: N
                                                                                                                                            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const b = this.options.transition || v.getDefaultTransition() || $1, {
                    onLayoutAnimationStart: A,
                    onLayoutAnimationComplete: z
                } = v.getProps(), R = !this.targetLayout || !Mm(this.targetLayout, N), U = !x && S;
                if (this.options.layoutRoot || this.resumeFrom || U || x && (R || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                    const I = {...ku(b, "layout"), onPlay: A, onComplete: z};
                    (v.shouldReduceMotion || this.options.layoutRoot) && (I.delay = 0, I.type = !1), this.startAnimation(I), this.setAnimationOrigin(y, U, I.path)
                } else x || Lh(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = N
            })
        }

        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const d = this.getStack();
            d && d.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), kn(this.updateProjection)
        }

        blockUpdate() {
            this.updateManuallyBlocked = !0
        }

        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }

        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }

        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }

        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(F1), this.animationId++)
        }

        getTransformTemplate() {
            const {visualElement: d} = this.options;
            return d && d.getProps().transformTemplate
        }

        willUpdate(d = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Am(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let y = 0; y < this.path.length; y++) {
                const x = this.path[y];
                x.shouldResetTransform = !0, (typeof x.latestValues.x == "string" || typeof x.latestValues.y == "string") && (x.isLayoutDirty = !0), x.updateScroll("snapshot"), x.options.layoutRoot && x.willUpdate(!1)
            }
            const {layoutId: p, layout: g} = this.options;
            if (p === void 0 && !g) return;
            const v = this.getTransformTemplate();
            this.prevTransformTemplateValue = v ? v(this.latestValues, "") : void 0, this.updateSnapshot(), d && this.notifyListeners("willUpdate")
        }

        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                const g = this.updateBlockedByResize;
                this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), g && this.nodes.forEach(V1), this.nodes.forEach(Dh);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(Vh);
                return
            }
            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(L1), this.nodes.forEach(_1), this.nodes.forEach(b1), this.nodes.forEach(z1)) : this.nodes.forEach(Vh), this.clearAllSnapshots();
            const p = nt.now();
            Qe.delta = Wt(0, 1e3 / 60, p - Qe.timestamp), Qe.timestamp = p, Qe.isProcessing = !0, gl.update.process(Qe), gl.preRender.process(Qe), gl.render.process(Qe), Qe.isProcessing = !1
        }

        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, Tu.read(this.scheduleUpdate))
        }

        clearAllSnapshots() {
            this.nodes.forEach(D1), this.sharedNodes.forEach(B1)
        }

        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, xe.preRender(this.updateProjection, !1, !0))
        }

        scheduleCheckAfterUnmount() {
            xe.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }

        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !rt(this.snapshot.measuredBox.x) && !rt(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }

        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance) for (let g = 0; g < this.path.length; g++) this.path[g].updateScroll();
            const d = this.layout;
            this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = We()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: p} = this.options;
            p && p.notify("LayoutMeasure", this.layout.layoutBox, d ? d.layoutBox : void 0)
        }

        updateScroll(d = "measure") {
            let p = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === d && (p = !1), p && this.instance) {
                const g = a(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: d,
                    isRoot: g,
                    offset: s(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : g
                }
            }
        }

        resetTransform() {
            if (!u) return;
            const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                p = this.projectionDelta && !Em(this.projectionDelta), g = this.getTransformTemplate(),
                v = g ? g(this.latestValues, "") : void 0, y = v !== this.prevTransformTemplateValue;
            d && this.instance && (p || In(this.latestValues) || y) && (u(this.instance, v), this.shouldResetTransform = !1, this.scheduleRender())
        }

        measure(d = !0) {
            const p = this.measurePageBox();
            let g = this.removeElementScroll(p);
            return d && (g = this.removeTransform(g)), H1(g), {
                animationId: this.root.animationId,
                measuredBox: p,
                layoutBox: g,
                latestValues: {},
                source: this.id
            }
        }

        measurePageBox() {
            var v;
            const {visualElement: d} = this.options;
            if (!d) return We();
            const p = d.measureViewportBox();
            if (!(((v = this.scroll) == null ? void 0 : v.wasRoot) || this.path.some(K1))) {
                const {scroll: y} = this.root;
                y && (Ft(p.x, y.offset.x), Ft(p.y, y.offset.y))
            }
            return p
        }

        removeElementScroll(d) {
            var g;
            const p = We();
            if (zt(p, d), (g = this.scroll) != null && g.wasRoot) return p;
            for (let v = 0; v < this.path.length; v++) {
                const y = this.path[v], {scroll: x, options: S} = y;
                y !== this.root && x && S.layoutScroll && (x.wasRoot && zt(p, d), Ft(p.x, x.offset.x), Ft(p.y, x.offset.y))
            }
            return p
        }

        applyTransform(d, p = !1, g) {
            var y, x;
            const v = g || We();
            zt(v, d);
            for (let S = 0; S < this.path.length; S++) {
                const N = this.path[S];
                !p && N.options.layoutScroll && N.scroll && N !== N.root && (Ft(v.x, -N.scroll.offset.x), Ft(v.y, -N.scroll.offset.y)), In(N.latestValues) && Zs(v, N.latestValues, (y = N.layout) == null ? void 0 : y.layoutBox)
            }
            return In(this.latestValues) && Zs(v, this.latestValues, (x = this.layout) == null ? void 0 : x.layoutBox), v
        }

        removeTransform(d) {
            var g;
            const p = We();
            zt(p, d);
            for (let v = 0; v < this.path.length; v++) {
                const y = this.path[v];
                if (!In(y.latestValues)) continue;
                let x;
                y.instance && (Zl(y.latestValues) && y.updateSnapshot(), x = We(), zt(x, y.measurePageBox())), Nh(p, y.latestValues, (g = y.snapshot) == null ? void 0 : g.layoutBox, x)
            }
            return In(this.latestValues) && Nh(p, this.latestValues), p
        }

        setTargetDelta(d) {
            this.targetDelta = d, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }

        setOptions(d) {
            this.options = {...this.options, ...d, crossfade: d.crossfade !== void 0 ? d.crossfade : !0}
        }

        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }

        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Qe.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }

        resolveTargetDelta(d = !1) {
            var N;
            const p = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
            const g = !!this.resumingFrom || this !== p;
            if (!(d || g && this.isSharedProjectionDirty || this.isProjectionDirty || (N = this.parent) != null && N.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {layout: y, layoutId: x} = this.options;
            if (!this.layout || !(y || x)) return;
            this.resolvedRelativeTargetAt = Qe.timestamp;
            const S = this.getClosestProjectingParent();
            S && this.linkedParentVersion !== S.layoutVersion && !S.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && S && S.layout ? this.createRelativeTarget(S, this.layout.layoutBox, S.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = We(), this.targetWithTransforms = We()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), h1(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : zt(this.target, this.layout.layoutBox), gm(this.target, this.targetDelta)) : zt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && S && !!S.resumingFrom == !!this.resumingFrom && !S.options.layoutScroll && S.target && this.animationProgress !== 1 ? this.createRelativeTarget(S, this.target, S.target) : this.relativeParent = this.relativeTarget = void 0))
        }

        getClosestProjectingParent() {
            if (!(!this.parent || Zl(this.parent.latestValues) || mm(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }

        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }

        createRelativeTarget(d, p, g) {
            this.relativeParent = d, this.linkedParentVersion = d.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = We(), this.relativeTargetOrigin = We(), uo(this.relativeTargetOrigin, p, g, this.options.layoutAnchor || void 0), zt(this.relativeTarget, this.relativeTargetOrigin)
        }

        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }

        calcProjection() {
            var b;
            const d = this.getLead(), p = !!this.resumingFrom || this !== d;
            let g = !0;
            if ((this.isProjectionDirty || (b = this.parent) != null && b.isProjectionDirty) && (g = !1), p && (this.isSharedProjectionDirty || this.isTransformDirty) && (g = !1), this.resolvedRelativeTargetAt === Qe.timestamp && (g = !1), g) return;
            const {layout: v, layoutId: y} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(v || y)) return;
            zt(this.layoutCorrected, this.layout.layoutBox);
            const x = this.treeScale.x, S = this.treeScale.y;
            Wx(this.layoutCorrected, this.treeScale, this.path, p), d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox, d.targetWithTransforms = We());
            const {target: N} = d;
            if (!N) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (xh(this.prevProjectionDelta.x, this.projectionDelta.x), xh(this.prevProjectionDelta.y, this.projectionDelta.y)), vi(this.projectionDelta, this.layoutCorrected, N, this.latestValues), (this.treeScale.x !== x || this.treeScale.y !== S || !bh(this.projectionDelta.x, this.prevProjectionDelta.x) || !bh(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", N))
        }

        hide() {
            this.isVisible = !1
        }

        show() {
            this.isVisible = !0
        }

        scheduleRender(d = !0) {
            var p;
            if ((p = this.options.visualElement) == null || p.scheduleRender(), d) {
                const g = this.getStack();
                g && g.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }

        createProjectionDeltas() {
            this.prevProjectionDelta = xr(), this.projectionDelta = xr(), this.projectionDeltaWithTransform = xr()
        }

        setAnimationOrigin(d, p = !1, g) {
            const v = this.snapshot, y = v ? v.latestValues : {}, x = {...this.latestValues}, S = xr();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !p;
            const N = We(), b = v ? v.source : void 0, A = this.layout ? this.layout.source : void 0, z = b !== A,
                R = this.getStack(), U = !R || R.members.length <= 1,
                I = !!(z && !U && this.options.crossfade === !0 && !this.path.some(U1));
            this.animationProgress = 0;
            let F;
            const X = g == null ? void 0 : g.interpolateProjection(d);
            this.mixTargetDelta = P => {
                const K = P / 1e3, $ = X == null ? void 0 : X(K);
                $ ? (S.x.translate = $.x, S.x.scale = ve(d.x.scale, 1, K), S.x.origin = d.x.origin, S.x.originPoint = d.x.originPoint, S.y.translate = $.y, S.y.scale = ve(d.y.scale, 1, K), S.y.origin = d.y.origin, S.y.originPoint = d.y.originPoint) : (_h(S.x, d.x, K), _h(S.y, d.y, K)), this.setTargetDelta(S), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (uo(N, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), W1(this.relativeTarget, this.relativeTargetOrigin, N, K), F && y1(this.relativeTarget, F) && (this.isProjectionDirty = !1), F || (F = We()), zt(F, this.relativeTarget)), z && (this.animationValues = x, w1(x, y, this.latestValues, K, I, U)), $ && $.rotate !== void 0 && (this.animationValues || (this.animationValues = x), this.animationValues.pathRotation = $.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = K
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }

        startAnimation(d) {
            var p, g, v;
            this.notifyListeners("animationStart"), (p = this.currentAnimation) == null || p.stop(), (v = (g = this.resumingFrom) == null ? void 0 : g.currentAnimation) == null || v.stop(), this.pendingAnimation && (kn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = xe.update(() => {
                Js.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Sr(0)), this.motionValue.jump(0, !1), this.currentAnimation = j1(this.motionValue, [0, 1e3], {
                    ...d,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: y => {
                        this.mixTargetDelta(y), d.onUpdate && d.onUpdate(y)
                    },
                    onStop: () => {
                    },
                    onComplete: () => {
                        d.onComplete && d.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }

        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const d = this.getStack();
            d && d.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }

        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(E1), this.currentAnimation.stop()), this.completeAnimation()
        }

        applyTransformsToTarget() {
            const d = this.getLead();
            let {targetWithTransforms: p, target: g, layout: v, latestValues: y} = d;
            if (!(!p || !g || !v)) {
                if (this !== d && this.layout && v && Dm(this.options.animationType, this.layout.layoutBox, v.layoutBox)) {
                    g = this.target || We();
                    const x = rt(this.layout.layoutBox.x);
                    g.x.min = d.target.x.min, g.x.max = g.x.min + x;
                    const S = rt(this.layout.layoutBox.y);
                    g.y.min = d.target.y.min, g.y.max = g.y.min + S
                }
                zt(p, g), Zs(p, y), vi(this.projectionDeltaWithTransform, this.layoutCorrected, p, y)
            }
        }

        registerSharedNode(d, p) {
            this.sharedNodes.has(d) || this.sharedNodes.set(d, new P1), this.sharedNodes.get(d).add(p);
            const v = p.options.initialPromotionConfig;
            p.promote({
                transition: v ? v.transition : void 0,
                preserveFollowOpacity: v && v.shouldPreserveFollowOpacity ? v.shouldPreserveFollowOpacity(p) : void 0
            })
        }

        isLead() {
            const d = this.getStack();
            return d ? d.lead === this : !0
        }

        getLead() {
            var p;
            const {layoutId: d} = this.options;
            return d ? ((p = this.getStack()) == null ? void 0 : p.lead) || this : this
        }

        getPrevLead() {
            var p;
            const {layoutId: d} = this.options;
            return d ? (p = this.getStack()) == null ? void 0 : p.prevLead : void 0
        }

        getStack() {
            const {layoutId: d} = this.options;
            if (d) return this.root.sharedNodes.get(d)
        }

        promote({needsReset: d, transition: p, preserveFollowOpacity: g} = {}) {
            const v = this.getStack();
            v && v.promote(this, g), d && (this.projectionDelta = void 0, this.needsReset = !0), p && this.setOptions({transition: p})
        }

        relegate() {
            const d = this.getStack();
            return d ? d.relegate(this) : !1
        }

        resetSkewAndRotation() {
            const {visualElement: d} = this.options;
            if (!d) return;
            let p = !1;
            const {latestValues: g} = d;
            if ((g.z || g.rotate || g.rotateX || g.rotateY || g.rotateZ || g.skewX || g.skewY) && (p = !0), !p) return;
            const v = {};
            g.z && Nl("z", d, v, this.animationValues);
            for (let y = 0; y < Cl.length; y++) Nl(`rotate${Cl[y]}`, d, v, this.animationValues), Nl(`skew${Cl[y]}`, d, v, this.animationValues);
            d.render();
            for (const y in v) d.setStaticValue(y, v[y]), this.animationValues && (this.animationValues[y] = v[y]);
            d.scheduleRender()
        }

        applyProjectionStyles(d, p) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
                d.visibility = "hidden";
                return
            }
            const g = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1, d.visibility = "", d.opacity = "", d.pointerEvents = qs(p == null ? void 0 : p.pointerEvents) || "", d.transform = g ? g(this.latestValues, "") : "none";
                return
            }
            const v = this.getLead();
            if (!this.projectionDelta || !this.layout || !v.target) {
                this.options.layoutId && (d.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, d.pointerEvents = qs(p == null ? void 0 : p.pointerEvents) || ""), this.hasProjected && !In(this.latestValues) && (d.transform = g ? g({}, "") : "none", this.hasProjected = !1);
                return
            }
            d.visibility = "";
            const y = v.animationValues || v.latestValues;
            this.applyTransformsToTarget();
            let x = v1(this.projectionDeltaWithTransform, this.treeScale, y);
            g && (x = g(y, x)), d.transform = x;
            const {x: S, y: N} = this.projectionDelta;
            d.transformOrigin = `${S.origin * 100}% ${N.origin * 100}% 0`, v.animationValues ? d.opacity = v === this ? y.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : y.opacityExit : d.opacity = v === this ? y.opacity !== void 0 ? y.opacity : "" : y.opacityExit !== void 0 ? y.opacityExit : 0;
            for (const b in Jl) {
                if (y[b] === void 0) continue;
                const {correct: A, applyTo: z, isCSSVariable: R} = Jl[b], U = x === "none" ? y[b] : A(y[b], v);
                if (z) {
                    const I = z.length;
                    for (let F = 0; F < I; F++) d[z[F]] = U
                } else R ? this.options.visualElement.renderState.vars[b] = U : d[b] = U
            }
            this.options.layoutId && (d.pointerEvents = v === this ? qs(p == null ? void 0 : p.pointerEvents) || "" : "none")
        }

        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }

        resetTree() {
            this.root.nodes.forEach(d => {
                var p;
                return (p = d.currentAnimation) == null ? void 0 : p.stop()
            }), this.root.nodes.forEach(Dh), this.root.sharedNodes.clear()
        }
    }
}

function b1(n) {
    n.updateLayout()
}

function z1(n) {
    var s;
    const r = ((s = n.resumeFrom) == null ? void 0 : s.snapshot) || n.snapshot;
    if (n.isLead() && n.layout && r && n.hasListeners("didUpdate")) {
        const {layoutBox: a, measuredBox: u} = n.layout, {animationType: f} = n.options,
            d = r.source !== n.layout.source;
        if (f === "size") Ot(x => {
            const S = d ? r.measuredBox[x] : r.layoutBox[x], N = rt(S);
            S.min = a[x].min, S.max = S.min + N
        }); else if (f === "x" || f === "y") {
            const x = f === "x" ? "y" : "x";
            eu(d ? r.measuredBox[x] : r.layoutBox[x], a[x])
        } else Dm(f, r.layoutBox, a) && Ot(x => {
            const S = d ? r.measuredBox[x] : r.layoutBox[x], N = rt(a[x]);
            S.max = S.min + N, n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0, n.relativeTarget[x].max = n.relativeTarget[x].min + N)
        });
        const p = xr();
        vi(p, a, r.layoutBox);
        const g = xr();
        d ? vi(g, n.applyTransform(u, !0), r.measuredBox) : vi(g, a, r.layoutBox);
        const v = !Em(p);
        let y = !1;
        if (!n.resumeFrom) {
            const x = n.getClosestProjectingParent();
            if (x && !x.resumeFrom) {
                const {snapshot: S, layout: N} = x;
                if (S && N) {
                    const b = n.options.layoutAnchor || void 0, A = We();
                    uo(A, r.layoutBox, S.layoutBox, b);
                    const z = We();
                    uo(z, a, N.layoutBox, b), Mm(A, z) || (y = !0), x.options.layoutRoot && (n.relativeTarget = z, n.relativeTargetOrigin = A, n.relativeParent = x)
                }
            }
        }
        n.notifyListeners("didUpdate", {
            layout: a,
            snapshot: r,
            delta: g,
            layoutDelta: p,
            hasLayoutChanged: v,
            hasRelativeLayoutChanged: y
        })
    } else if (n.isLead()) {
        const {onExitComplete: a} = n.options;
        a && a()
    }
    n.options.transition = void 0
}

function A1(n) {
    n.parent && (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty), n.isSharedProjectionDirty || (n.isSharedProjectionDirty = !!(n.isProjectionDirty || n.parent.isProjectionDirty || n.parent.isSharedProjectionDirty)), n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty))
}

function R1(n) {
    n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1
}

function D1(n) {
    n.clearSnapshot()
}

function Dh(n) {
    n.clearMeasurements()
}

function V1(n) {
    n.isLayoutDirty = !0, n.updateLayout()
}

function Vh(n) {
    n.isLayoutDirty = !1
}

function L1(n) {
    n.isAnimationBlocked && n.layout && !n.isLayoutDirty && (n.snapshot = n.layout, n.isLayoutDirty = !0)
}

function _1(n) {
    const {visualElement: r} = n.options;
    r && r.getProps().onBeforeLayoutMeasure && r.notify("BeforeLayoutMeasure"), n.resetTransform()
}

function Lh(n) {
    n.finishAnimation(), n.targetDelta = n.relativeTarget = n.target = void 0, n.isProjectionDirty = !0
}

function I1(n) {
    n.resolveTargetDelta()
}

function O1(n) {
    n.calcProjection()
}

function F1(n) {
    n.resetSkewAndRotation()
}

function B1(n) {
    n.removeLeadSnapshot()
}

function _h(n, r, s) {
    n.translate = ve(r.translate, 0, s), n.scale = ve(r.scale, 1, s), n.origin = r.origin, n.originPoint = r.originPoint
}

function Ih(n, r, s, a) {
    n.min = ve(r.min, s.min, a), n.max = ve(r.max, s.max, a)
}

function W1(n, r, s, a) {
    Ih(n.x, r.x, s.x, a), Ih(n.y, r.y, s.y, a)
}

function U1(n) {
    return n.animationValues && n.animationValues.opacityExit !== void 0
}

const $1 = {duration: .45, ease: [.4, 0, .1, 1]},
    Oh = n => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n),
    Fh = Oh("applewebkit/") && !Oh("chrome/") ? Math.round : jt;

function Bh(n) {
    n.min = Fh(n.min), n.max = Fh(n.max)
}

function H1(n) {
    Bh(n.x), Bh(n.y)
}

function Dm(n, r, s) {
    return n === "position" || n === "preserve-aspect" && !f1(Mh(r), Mh(s), .2)
}

function K1(n) {
    var r;
    return n !== n.root && ((r = n.scroll) == null ? void 0 : r.wasRoot)
}

const G1 = Rm({
    attachResizeListener: (n, r) => ji(n, "resize", r), measureScroll: () => {
        var n, r;
        return {
            x: document.documentElement.scrollLeft || ((n = document.body) == null ? void 0 : n.scrollLeft) || 0,
            y: document.documentElement.scrollTop || ((r = document.body) == null ? void 0 : r.scrollTop) || 0
        }
    }, checkIsScrollRoot: () => !0
}), Tl = {current: void 0}, Vm = Rm({
    measureScroll: n => ({x: n.scrollLeft, y: n.scrollTop}), defaultParent: () => {
        if (!Tl.current) {
            const n = new G1({});
            n.mount(window), n.setOptions({layoutScroll: !0}), Tl.current = n
        }
        return Tl.current
    }, resetTransform: (n, r) => {
        n.style.transform = r !== void 0 ? r : "none"
    }, checkIsScrollRoot: n => window.getComputedStyle(n).position === "fixed"
}), Ru = H.createContext({transformPagePoint: n => n, isStatic: !1, reducedMotion: "never"});

function Wh(n, r) {
    if (typeof n == "function") return n(r);
    n != null && (n.current = r)
}

function Q1(...n) {
    return r => {
        let s = !1;
        const a = n.map(u => {
            const f = Wh(u, r);
            return !s && typeof f == "function" && (s = !0), f
        });
        if (s) return () => {
            for (let u = 0; u < a.length; u++) {
                const f = a[u];
                typeof f == "function" ? f() : Wh(n[u], null)
            }
        }
    }
}

function X1(...n) {
    return H.useCallback(Q1(...n), n)
}

class Y1 extends H.Component {
    getSnapshotBeforeUpdate(r) {
        const s = this.props.childRef.current;
        if (Gs(s) && r.isPresent && !this.props.isPresent && this.props.pop !== !1) {
            const a = s.offsetParent, u = Gs(a) && a.offsetWidth || 0, f = Gs(a) && a.offsetHeight || 0,
                d = getComputedStyle(s), p = this.props.sizeRef.current;
            p.height = parseFloat(d.height), p.width = parseFloat(d.width), p.top = s.offsetTop, p.left = s.offsetLeft, p.right = u - p.width - p.left, p.bottom = f - p.height - p.top, p.direction = d.direction
        }
        return null
    }

    componentDidUpdate() {
    }

    render() {
        return this.props.children
    }
}

function Z1({children: n, isPresent: r, anchorX: s, anchorY: a, root: u, pop: f}) {
    var S;
    const d = H.useId(), p = H.useRef(null), g = H.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            direction: "ltr"
        }), {nonce: v} = H.useContext(Ru), y = ((S = n.props) == null ? void 0 : S.ref) ?? (n == null ? void 0 : n.ref),
        x = X1(p, y);
    return H.useInsertionEffect(() => {
        const {width: N, height: b, top: A, left: z, right: R, bottom: U, direction: I} = g.current;
        if (r || f === !1 || !p.current || !N || !b) return;
        const F = I === "rtl", X = s === "left" ? F ? `right: ${R}` : `left: ${z}` : F ? `left: ${z}` : `right: ${R}`,
            P = a === "bottom" ? `bottom: ${U}` : `top: ${A}`;
        p.current.dataset.motionPopId = d;
        const K = document.createElement("style");
        v && (K.nonce = v);
        const $ = u ?? document.head;
        return $.appendChild(K), K.sheet && K.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${N}px !important;
            height: ${b}px !important;
            ${X}px !important;
            ${P}px !important;
          }
        `), () => {
            var se;
            (se = p.current) == null || se.removeAttribute("data-motion-pop-id"), $.contains(K) && $.removeChild(K)
        }
    }, [r]), h.jsx(Y1, {
        isPresent: r,
        childRef: p,
        sizeRef: g,
        pop: f,
        children: f === !1 ? n : H.cloneElement(n, {ref: x})
    })
}

const q1 = ({
                children: n,
                initial: r,
                isPresent: s,
                onExitComplete: a,
                custom: u,
                presenceAffectsLayout: f,
                mode: d,
                anchorX: p,
                anchorY: g,
                root: v
            }) => {
    const y = uu(J1), x = H.useId();
    let S = !0, N = H.useMemo(() => (S = !1, {
        id: x, initial: r, isPresent: s, custom: u, onExitComplete: b => {
            y.set(b, !0);
            for (const A of y.values()) if (!A) return;
            a && a()
        }, register: b => (y.set(b, !1), () => y.delete(b))
    }), [s, y, a]);
    return f && S && (N = {...N}), H.useMemo(() => {
        y.forEach((b, A) => y.set(A, !1))
    }, [s]), H.useEffect(() => {
        !s && !y.size && a && a()
    }, [s]), n = h.jsx(Z1, {
        pop: d === "popLayout",
        isPresent: s,
        anchorX: p,
        anchorY: g,
        root: v,
        children: n
    }), h.jsx(fo.Provider, {value: N, children: n})
};

function J1() {
    return new Map
}

function Lm(n = !0) {
    const r = H.useContext(fo);
    if (r === null) return [!0, null];
    const {isPresent: s, onExitComplete: a, register: u} = r, f = H.useId();
    H.useEffect(() => {
        if (n) return u(f)
    }, [n]);
    const d = H.useCallback(() => n && a && a(f), [f, a, n]);
    return !s && a ? [!1, d] : [!0]
}

const Bs = n => n.key || "";

function Uh(n) {
    const r = [];
    return H.Children.forEach(n, s => {
        H.isValidElement(s) && r.push(s)
    }), r
}

const ew = ({
                children: n,
                custom: r,
                initial: s = !0,
                onExitComplete: a,
                presenceAffectsLayout: u = !0,
                mode: f = "sync",
                propagate: d = !1,
                anchorX: p = "left",
                anchorY: g = "top",
                root: v
            }) => {
    const [y, x] = Lm(d), S = H.useMemo(() => Uh(n), [n]), N = d && !y ? [] : S.map(Bs), b = H.useRef(!0),
        A = H.useRef(S), z = uu(() => new Map), R = H.useRef(new Set), [U, I] = H.useState(S), [F, X] = H.useState(S);
    cp(() => {
        b.current = !1, A.current = S;
        for (let $ = 0; $ < F.length; $++) {
            const se = Bs(F[$]);
            N.includes(se) ? (z.delete(se), R.current.delete(se)) : z.get(se) !== !0 && z.set(se, !1)
        }
    }, [F, N.length, N.join("-")]);
    const P = [];
    if (S !== U) {
        let $ = [...S];
        for (let se = 0; se < F.length; se++) {
            const Z = F[se], O = Bs(Z);
            N.includes(O) || ($.splice(se, 0, Z), P.push(Z))
        }
        return f === "wait" && P.length && ($ = P), X(Uh($)), I(S), null
    }
    const {forceRender: K} = H.useContext(lu);
    return h.jsx(h.Fragment, {
        children: F.map($ => {
            const se = Bs($), Z = d && !y ? !1 : S === F || N.includes(se), O = () => {
                if (R.current.has(se)) return;
                if (z.has(se)) R.current.add(se), z.set(se, !0); else return;
                let ae = !0;
                z.forEach(ke => {
                    ke || (ae = !1)
                }), ae && (K == null || K(), X(A.current), d && (x == null || x()), a && a())
            };
            return h.jsx(q1, {
                isPresent: Z,
                initial: !b.current || s ? void 0 : !1,
                custom: r,
                presenceAffectsLayout: u,
                mode: f,
                root: v,
                onExitComplete: Z ? void 0 : O,
                anchorX: p,
                anchorY: g,
                children: $
            }, se)
        })
    })
}, _m = H.createContext({strict: !1}), $h = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
};
let Hh = !1;

function tw() {
    if (Hh) return;
    const n = {};
    for (const r in $h) n[r] = {isEnabled: s => $h[r].some(a => !!s[a])};
    fm(n), Hh = !0
}

function Im() {
    return tw(), Ix()
}

function nw(n) {
    const r = Im();
    for (const s in n) r[s] = {...r[s], ...n[s]};
    fm(r)
}

const rw = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

function co(n) {
    return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || rw.has(n)
}

let Om = n => !co(n);

function iw(n) {
    typeof n == "function" && (Om = r => r.startsWith("on") ? !co(r) : n(r))
}

try {
    iw(require("@emotion/is-prop-valid").default)
} catch {
}

function sw(n, r, s) {
    const a = {};
    for (const u in n) u === "values" && typeof n.values == "object" || Xe(n[u]) || (Om(u) || s === !0 && co(u) || !r && !co(u) || n.draggable && u.startsWith("onDrag")) && (a[u] = n[u]);
    return a
}

const go = H.createContext({});

function ow(n, r) {
    if (mo(n)) {
        const {initial: s, animate: a} = n;
        return {initial: s === !1 || ki(s) ? s : void 0, animate: ki(a) ? a : void 0}
    }
    return n.inherit !== !1 ? r : {}
}

function aw(n) {
    const {initial: r, animate: s} = ow(n, H.useContext(go));
    return H.useMemo(() => ({initial: r, animate: s}), [Kh(r), Kh(s)])
}

function Kh(n) {
    return Array.isArray(n) ? n.join(" ") : n
}

const Du = () => ({style: {}, transform: {}, transformOrigin: {}, vars: {}});

function Fm(n, r, s) {
    for (const a in r) !Xe(r[a]) && !xm(a, s) && (n[a] = r[a])
}

function lw({transformTemplate: n}, r) {
    return H.useMemo(() => {
        const s = Du();
        return zu(s, r, n), Object.assign({}, s.vars, s.style)
    }, [r])
}

function uw(n, r) {
    const s = n.style || {}, a = {};
    return Fm(a, s, n), Object.assign(a, lw(n, r)), a
}

function cw(n, r) {
    const s = {}, a = uw(n, r);
    return n.drag && n.dragListener !== !1 && (s.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`), n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (s.tabIndex = 0), s.style = a, s
}

const Bm = () => ({...Du(), attrs: {}});

function dw(n, r, s, a) {
    const u = H.useMemo(() => {
        const f = Bm();
        return wm(f, r, km(a), n.transformTemplate, n.style), {...f.attrs, style: {...f.style}}
    }, [r]);
    if (n.style) {
        const f = {};
        Fm(f, n.style, n), u.style = {...f, ...u.style}
    }
    return u
}

const fw = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Vu(n) {
    return typeof n != "string" || n.includes("-") ? !1 : !!(fw.indexOf(n) > -1 || /[A-Z]/u.test(n))
}

function hw(n, r, s, {latestValues: a}, u, f = !1, d) {
    const g = (d ?? Vu(n) ? dw : cw)(r, a, u, n), v = sw(r, typeof n == "string", f),
        y = n !== H.Fragment ? {...v, ...g, ref: s} : {}, {children: x} = r,
        S = H.useMemo(() => Xe(x) ? x.get() : x, [x]);
    return H.createElement(n, {...y, children: S})
}

function pw({scrapeMotionValuesFromProps: n, createRenderState: r}, s, a, u) {
    return {latestValues: mw(s, a, u, n), renderState: r()}
}

function mw(n, r, s, a) {
    const u = {}, f = a(n, {});
    for (const S in f) u[S] = qs(f[S]);
    let {initial: d, animate: p} = n;
    const g = mo(n), v = cm(n);
    r && v && !g && n.inherit !== !1 && (d === void 0 && (d = r.initial), p === void 0 && (p = r.animate));
    let y = s ? s.initial === !1 : !1;
    y = y || d === !1;
    const x = y ? p : d;
    if (x && typeof x != "boolean" && !po(x)) {
        const S = Array.isArray(x) ? x : [x];
        for (let N = 0; N < S.length; N++) {
            const b = Cu(n, S[N]);
            if (b) {
                const {transitionEnd: A, transition: z, ...R} = b;
                for (const U in R) {
                    let I = R[U];
                    if (Array.isArray(I)) {
                        const F = y ? I.length - 1 : 0;
                        I = I[F]
                    }
                    I !== null && (u[U] = I)
                }
                for (const U in A) u[U] = A[U]
            }
        }
    }
    return u
}

const Wm = n => (r, s) => {
        const a = H.useContext(go), u = H.useContext(fo), f = () => pw(n, r, a, u);
        return s ? f() : uu(f)
    }, gw = Wm({scrapeMotionValuesFromProps: Au, createRenderState: Du}),
    yw = Wm({scrapeMotionValuesFromProps: jm, createRenderState: Bm}), vw = Symbol.for("motionComponentSymbol");

function xw(n, r, s) {
    const a = H.useRef(s);
    H.useInsertionEffect(() => {
        a.current = s
    });
    const u = H.useRef(null);
    return H.useCallback(f => {
        var p;
        f && ((p = n.onMount) == null || p.call(n, f)), r && (f ? r.mount(f) : r.unmount());
        const d = a.current;
        if (typeof d == "function") if (f) {
            const g = d(f);
            typeof g == "function" && (u.current = g)
        } else u.current ? (u.current(), u.current = null) : d(f); else d && (d.current = f)
    }, [r])
}

const Um = H.createContext({});

function mr(n) {
    return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current")
}

function ww(n, r, s, a, u, f) {
    var I, F;
    const {visualElement: d} = H.useContext(go), p = H.useContext(_m), g = H.useContext(fo), v = H.useContext(Ru),
        y = v.reducedMotion, x = v.skipAnimations, S = H.useRef(null), N = H.useRef(!1);
    a = a || p.renderer, !S.current && a && (S.current = a(n, {
        visualState: r,
        parent: d,
        props: s,
        presenceContext: g,
        blockInitialAnimation: g ? g.initial === !1 : !1,
        reducedMotionConfig: y,
        skipAnimations: x,
        isSVG: f
    }), N.current && S.current && (S.current.manuallyAnimateOnMount = !0));
    const b = S.current, A = H.useContext(Um);
    b && !b.projection && u && (b.type === "html" || b.type === "svg") && Sw(S.current, s, u, A);
    const z = H.useRef(!1);
    H.useInsertionEffect(() => {
        b && z.current && b.update(s, g)
    });
    const R = s[qp],
        U = H.useRef(!!R && typeof window < "u" && !((I = window.MotionHandoffIsComplete) != null && I.call(window, R)) && ((F = window.MotionHasOptimisedAnimation) == null ? void 0 : F.call(window, R)));
    return cp(() => {
        N.current = !0, b && (z.current = !0, window.MotionIsMounted = !0, b.updateFeatures(), b.scheduleRenderMicrotask(), U.current && b.animationState && b.animationState.animateChanges())
    }), H.useEffect(() => {
        b && (!U.current && b.animationState && b.animationState.animateChanges(), U.current && (queueMicrotask(() => {
            var X;
            (X = window.MotionHandoffMarkAsComplete) == null || X.call(window, R)
        }), U.current = !1), b.enteringChildren = void 0)
    }), b
}

function Sw(n, r, s, a) {
    const {
        layoutId: u,
        layout: f,
        drag: d,
        dragConstraints: p,
        layoutScroll: g,
        layoutRoot: v,
        layoutAnchor: y,
        layoutCrossfade: x
    } = r;
    n.projection = new s(n.latestValues, r["data-framer-portal-id"] ? void 0 : $m(n.parent)), n.projection.setOptions({
        layoutId: u,
        layout: f,
        alwaysMeasureLayout: !!d || p && mr(p),
        visualElement: n,
        animationType: typeof f == "string" ? f : "both",
        initialPromotionConfig: a,
        crossfade: x,
        layoutScroll: g,
        layoutRoot: v,
        layoutAnchor: y
    })
}

function $m(n) {
    if (n) return n.options.allowProjection !== !1 ? n.projection : $m(n.parent)
}

function Pl(n, {forwardMotionProps: r = !1, type: s} = {}, a, u) {
    a && nw(a);
    const f = s ? s === "svg" : Vu(n), d = f ? yw : gw;

    function p(v, y) {
        let x;
        const S = {...H.useContext(Ru), ...v, layoutId: kw(v)}, {isStatic: N} = S, b = aw(v), A = d(v, N);
        if (!N && typeof window < "u") {
            jw();
            const z = Cw(S);
            x = z.MeasureLayout, b.visualElement = ww(n, A, S, u, z.ProjectionNode, f)
        }
        return h.jsxs(go.Provider, {
            value: b,
            children: [x && b.visualElement ? h.jsx(x, {visualElement: b.visualElement, ...S}) : null, hw(n, v, xw(A, b.visualElement, y), A, N, r, f)]
        })
    }

    p.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
    const g = H.forwardRef(p);
    return g[vw] = n, g
}

function kw({layoutId: n}) {
    const r = H.useContext(lu).id;
    return r && n !== void 0 ? r + "-" + n : n
}

function jw(n, r) {
    H.useContext(_m).strict
}

function Cw(n) {
    const r = Im(), {drag: s, layout: a} = r;
    if (!s && !a) return {};
    const u = {...s, ...a};
    return {
        MeasureLayout: s != null && s.isEnabled(n) || a != null && a.isEnabled(n) ? u.MeasureLayout : void 0,
        ProjectionNode: u.ProjectionNode
    }
}

function Nw(n, r) {
    if (typeof Proxy > "u") return Pl;
    const s = new Map, a = (f, d) => Pl(f, d, n, r), u = (f, d) => a(f, d);
    return new Proxy(u, {get: (f, d) => d === "create" ? a : (s.has(d) || s.set(d, Pl(d, void 0, n, r)), s.get(d))})
}

const Tw = (n, r) => r.isSVG ?? Vu(n) ? new t1(r) : new Xx(r, {allowProjection: n !== H.Fragment});

class Pw extends jn {
    constructor(r) {
        super(r), r.animationState || (r.animationState = o1(r))
    }

    updateAnimationControlsSubscription() {
        const {animate: r} = this.node.getProps();
        po(r) && (this.unmountControls = r.subscribe(this.node))
    }

    mount() {
        this.updateAnimationControlsSubscription()
    }

    update() {
        const {animate: r} = this.node.getProps(), {animate: s} = this.node.prevProps || {};
        r !== s && this.updateAnimationControlsSubscription()
    }

    unmount() {
        var r;
        this.node.animationState.reset(), (r = this.unmountControls) == null || r.call(this)
    }
}

let Ew = 0;

class Mw extends jn {
    constructor() {
        super(...arguments), this.id = Ew++, this.isExitComplete = !1
    }

    update() {
        var f;
        if (!this.node.presenceContext) return;
        const {
            isPresent: r,
            onExitComplete: s
        } = this.node.presenceContext, {isPresent: a} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || r === a) return;
        if (r && a === !1) {
            if (this.isExitComplete) {
                const {initial: d, custom: p} = this.node.getProps();
                if (typeof d == "string" || typeof d == "object" && d !== null && !Array.isArray(d)) {
                    const g = Un(this.node, d, p);
                    if (g) {
                        const {transition: v, transitionEnd: y, ...x} = g;
                        for (const S in x) (f = this.node.getValue(S)) == null || f.jump(x[S])
                    }
                }
                this.node.animationState.reset(), this.node.animationState.animateChanges()
            } else this.node.animationState.setActive("exit", !1);
            this.isExitComplete = !1;
            return
        }
        const u = this.node.animationState.setActive("exit", !r);
        s && !r && u.then(() => {
            this.isExitComplete = !0, s(this.id)
        })
    }

    mount() {
        const {register: r, onExitComplete: s} = this.node.presenceContext || {};
        s && s(this.id), r && (this.unmount = r(this.id))
    }

    unmount() {
    }
}

const bw = {animation: {Feature: Pw}, exit: {Feature: Mw}};

function Pi(n) {
    return {point: {x: n.pageX, y: n.pageY}}
}

const zw = n => r => Pu(r) && n(r, Pi(r));

function xi(n, r, s, a) {
    return ji(n, r, zw(s), a)
}

const Hm = ({current: n}) => n ? n.ownerDocument.defaultView : null, Gh = (n, r) => Math.abs(n - r);

function Aw(n, r) {
    const s = Gh(n.x, r.x), a = Gh(n.y, r.y);
    return Math.sqrt(s ** 2 + a ** 2)
}

const Qh = new Set(["auto", "scroll"]);

class Km {
    constructor(r, s, {
        transformPagePoint: a,
        contextWindow: u = window,
        dragSnapToOrigin: f = !1,
        distanceThreshold: d = 3,
        element: p
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = N => {
            this.handleScroll(N.target)
        }, this.onWindowScroll = () => {
            this.handleScroll(window)
        }, this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Ws(this.lastRawMoveEventInfo, this.transformPagePoint));
            const N = El(this.lastMoveEventInfo, this.history), b = this.startEvent !== null,
                A = Aw(N.offset, {x: 0, y: 0}) >= this.distanceThreshold;
            if (!b && !A) return;
            const {point: z} = N, {timestamp: R} = Qe;
            this.history.push({...z, timestamp: R});
            const {onStart: U, onMove: I} = this.handlers;
            b || (U && U(this.lastMoveEvent, N), this.startEvent = this.lastMoveEvent), I && I(this.lastMoveEvent, N)
        }, this.handlePointerMove = (N, b) => {
            this.lastMoveEvent = N, this.lastRawMoveEventInfo = b, this.lastMoveEventInfo = Ws(b, this.transformPagePoint), xe.update(this.updatePoint, !0)
        }, this.handlePointerUp = (N, b) => {
            this.end();
            const {onEnd: A, onSessionEnd: z, resumeAnimation: R} = this.handlers;
            if ((this.dragSnapToOrigin || !this.startEvent) && R && R(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            const U = El(N.type === "pointercancel" ? this.lastMoveEventInfo : Ws(b, this.transformPagePoint), this.history);
            this.startEvent && A && A(N, U), z && z(N, U)
        }, !Pu(r)) return;
        this.dragSnapToOrigin = f, this.handlers = s, this.transformPagePoint = a, this.distanceThreshold = d, this.contextWindow = u || window;
        const g = Pi(r), v = Ws(g, this.transformPagePoint), {point: y} = v, {timestamp: x} = Qe;
        this.history = [{...y, timestamp: x}];
        const {onSessionStart: S} = s;
        S && S(r, El(v, this.history)), this.removeListeners = Ci(xi(this.contextWindow, "pointermove", this.handlePointerMove), xi(this.contextWindow, "pointerup", this.handlePointerUp), xi(this.contextWindow, "pointercancel", this.handlePointerUp)), p && this.startScrollTracking(p)
    }

    startScrollTracking(r) {
        let s = r.parentElement;
        for (; s;) {
            const a = getComputedStyle(s);
            (Qh.has(a.overflowX) || Qh.has(a.overflowY)) && this.scrollPositions.set(s, {
                x: s.scrollLeft,
                y: s.scrollTop
            }), s = s.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }), window.addEventListener("scroll", this.onElementScroll, {capture: !0}), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {capture: !0}), window.removeEventListener("scroll", this.onWindowScroll)
        }
    }

    handleScroll(r) {
        const s = this.scrollPositions.get(r);
        if (!s) return;
        const a = r === window, u = a ? {x: window.scrollX, y: window.scrollY} : {x: r.scrollLeft, y: r.scrollTop},
            f = {x: u.x - s.x, y: u.y - s.y};
        f.x === 0 && f.y === 0 || (a ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += f.x, this.lastMoveEventInfo.point.y += f.y) : this.history.length > 0 && (this.history[0].x -= f.x, this.history[0].y -= f.y), this.scrollPositions.set(r, u), xe.update(this.updatePoint, !0))
    }

    updateHandlers(r) {
        this.handlers = r
    }

    end() {
        this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), kn(this.updatePoint)
    }
}

function Ws(n, r) {
    return r ? {point: r(n.point)} : n
}

function Xh(n, r) {
    return {x: n.x - r.x, y: n.y - r.y}
}

function El({point: n}, r) {
    return {point: n, delta: Xh(n, Gm(r)), offset: Xh(n, Rw(r)), velocity: Dw(r, .1)}
}

function Rw(n) {
    return n[0]
}

function Gm(n) {
    return n[n.length - 1]
}

function Dw(n, r) {
    if (n.length < 2) return {x: 0, y: 0};
    let s = n.length - 1, a = null;
    const u = Gm(n);
    for (; s >= 0 && (a = n[s], !(u.timestamp - a.timestamp > mt(r)));) s--;
    if (!a) return {x: 0, y: 0};
    a === n[0] && n.length > 2 && u.timestamp - a.timestamp > mt(r) * 2 && (a = n[1]);
    const f = kt(u.timestamp - a.timestamp);
    if (f === 0) return {x: 0, y: 0};
    const d = {x: (u.x - a.x) / f, y: (u.y - a.y) / f};
    return d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d
}

function Vw(n, {min: r, max: s}, a) {
    return r !== void 0 && n < r ? n = a ? ve(r, n, a.min) : Math.max(n, r) : s !== void 0 && n > s && (n = a ? ve(s, n, a.max) : Math.min(n, s)), n
}

function Yh(n, r, s) {
    return {min: r !== void 0 ? n.min + r : void 0, max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0}
}

function Lw(n, {top: r, left: s, bottom: a, right: u}) {
    return {x: Yh(n.x, s, u), y: Yh(n.y, r, a)}
}

function Zh(n, r) {
    let s = r.min - n.min, a = r.max - n.max;
    return r.max - r.min < n.max - n.min && ([s, a] = [a, s]), {min: s, max: a}
}

function _w(n, r) {
    return {x: Zh(n.x, r.x), y: Zh(n.y, r.y)}
}

function Iw(n, r) {
    let s = .5;
    const a = rt(n), u = rt(r);
    return u > a ? s = wi(r.min, r.max - a, n.min) : a > u && (s = wi(n.min, n.max - u, r.min)), Wt(0, 1, s)
}

function Ow(n, r) {
    const s = {};
    return r.min !== void 0 && (s.min = r.min - n.min), r.max !== void 0 && (s.max = r.max - n.min), s
}

const tu = .35;

function Fw(n = tu) {
    return n === !1 ? n = 0 : n === !0 && (n = tu), {x: qh(n, "left", "right"), y: qh(n, "top", "bottom")}
}

function qh(n, r, s) {
    return {min: Jh(n, r), max: Jh(n, s)}
}

function Jh(n, r) {
    return typeof n == "number" ? n : n[r] || 0
}

const Bw = new WeakMap;

class Ww {
    constructor(r) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = We(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = r
    }

    start(r, {snapToCursor: s = !1, distanceThreshold: a} = {}) {
        const {presenceContext: u} = this.visualElement;
        if (u && u.isPresent === !1) return;
        const f = x => {
            s && this.snapToCursor(Pi(x).point), this.stopAnimation()
        }, d = (x, S) => {
            const {drag: N, dragPropagation: b, onDragStart: A} = this.getProps();
            if (N && !b && (this.openDragLock && this.openDragLock(), this.openDragLock = px(N), !this.openDragLock)) return;
            this.latestPointerEvent = x, this.latestPanInfo = S, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Ot(R => {
                let U = this.getAxisMotionValue(R).get() || 0;
                if (Bt.test(U)) {
                    const {projection: I} = this.visualElement;
                    if (I && I.layout) {
                        const F = I.layout.layoutBox[R];
                        F && (U = rt(F) * (parseFloat(U) / 100))
                    }
                }
                this.originPoint[R] = U
            }), A && xe.update(() => A(x, S), !1, !0), Hl(this.visualElement, "transform");
            const {animationState: z} = this.visualElement;
            z && z.setActive("whileDrag", !0)
        }, p = (x, S) => {
            this.latestPointerEvent = x, this.latestPanInfo = S;
            const {dragPropagation: N, dragDirectionLock: b, onDirectionLock: A, onDrag: z} = this.getProps();
            if (!N && !this.openDragLock) return;
            const {offset: R} = S;
            if (b && this.currentDirection === null) {
                this.currentDirection = $w(R), this.currentDirection !== null && A && A(this.currentDirection);
                return
            }
            this.updateAxis("x", S.point, R), this.updateAxis("y", S.point, R), this.visualElement.render(), z && xe.update(() => z(x, S), !1, !0)
        }, g = (x, S) => {
            this.latestPointerEvent = x, this.latestPanInfo = S, this.stop(x, S), this.latestPointerEvent = null, this.latestPanInfo = null
        }, v = () => {
            const {dragSnapToOrigin: x} = this.getProps();
            (x || this.constraints) && this.startAnimation({x: 0, y: 0})
        }, {dragSnapToOrigin: y} = this.getProps();
        this.panSession = new Km(r, {
            onSessionStart: f,
            onStart: d,
            onMove: p,
            onSessionEnd: g,
            resumeAnimation: v
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: y,
            distanceThreshold: a,
            contextWindow: Hm(this.visualElement),
            element: this.visualElement.current
        })
    }

    stop(r, s) {
        const a = r || this.latestPointerEvent, u = s || this.latestPanInfo, f = this.isDragging;
        if (this.cancel(), !f || !u || !a) return;
        const {velocity: d} = u;
        this.startAnimation(d);
        const {onDragEnd: p} = this.getProps();
        p && xe.postRender(() => p(a, u))
    }

    cancel() {
        this.isDragging = !1;
        const {projection: r, animationState: s} = this.visualElement;
        r && (r.isAnimationBlocked = !1), this.endPanSession();
        const {dragPropagation: a} = this.getProps();
        !a && this.openDragLock && (this.openDragLock(), this.openDragLock = null), s && s.setActive("whileDrag", !1)
    }

    endPanSession() {
        this.panSession && this.panSession.end(), this.panSession = void 0
    }

    updateAxis(r, s, a) {
        const {drag: u} = this.getProps();
        if (!a || !Us(r, u, this.currentDirection)) return;
        const f = this.getAxisMotionValue(r);
        let d = this.originPoint[r] + a[r];
        this.constraints && this.constraints[r] && (d = Vw(d, this.constraints[r], this.elastic[r])), f.set(d)
    }

    resolveConstraints() {
        var f;
        const {dragConstraints: r, dragElastic: s} = this.getProps(),
            a = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (f = this.visualElement.projection) == null ? void 0 : f.layout,
            u = this.constraints;
        r && mr(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && a ? this.constraints = Lw(a.layoutBox, r) : this.constraints = !1, this.elastic = Fw(s), u !== this.constraints && !mr(r) && a && this.constraints && !this.hasMutatedConstraints && Ot(d => {
            this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = Ow(a.layoutBox[d], this.constraints[d]))
        })
    }

    resolveRefConstraints() {
        const {dragConstraints: r, onMeasureDragConstraints: s} = this.getProps();
        if (!r || !mr(r)) return !1;
        const a = r.current, {projection: u} = this.visualElement;
        if (!u || !u.layout) return !1;
        u.root && (u.root.scroll = void 0, u.root.updateScroll());
        const f = Ux(a, u.root, this.visualElement.getTransformPagePoint());
        let d = _w(u.layout.layoutBox, f);
        if (s) {
            const p = s(Fx(d));
            this.hasMutatedConstraints = !!p, p && (d = pm(p))
        }
        return d
    }

    startAnimation(r) {
        const {
            drag: s,
            dragMomentum: a,
            dragElastic: u,
            dragTransition: f,
            dragSnapToOrigin: d,
            onDragTransitionEnd: p
        } = this.getProps(), g = this.constraints || {}, v = Ot(y => {
            if (!Us(y, s, this.currentDirection)) return;
            let x = g && g[y] || {};
            (d === !0 || d === y) && (x = {min: 0, max: 0});
            const S = u ? 200 : 1e6, N = u ? 40 : 1e7, b = {
                type: "inertia",
                velocity: a ? r[y] : 0,
                bounceStiffness: S,
                bounceDamping: N,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10, ...f, ...x
            };
            return this.startAxisValueAnimation(y, b)
        });
        return Promise.all(v).then(p)
    }

    startAxisValueAnimation(r, s) {
        const a = this.getAxisMotionValue(r);
        return Hl(this.visualElement, r), a.start(ju(r, a, 0, s, this.visualElement, !1))
    }

    stopAnimation() {
        Ot(r => this.getAxisMotionValue(r).stop())
    }

    getAxisMotionValue(r) {
        const s = `_drag${r.toUpperCase()}`, u = this.visualElement.getProps()[s];
        return u || this.visualElement.getValue(r, this.visualElement.latestValues[r] ?? 0)
    }

    snapToCursor(r) {
        Ot(s => {
            const {drag: a} = this.getProps();
            if (!Us(s, a, this.currentDirection)) return;
            const {projection: u} = this.visualElement, f = this.getAxisMotionValue(s);
            if (u && u.layout) {
                const {min: d, max: p} = u.layout.layoutBox[s], g = f.get() || 0;
                f.set(r[s] - ve(d, p, .5) + g)
            }
        })
    }

    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {drag: r, dragConstraints: s} = this.getProps(), {projection: a} = this.visualElement;
        if (!mr(s) || !a || !this.constraints) return;
        this.stopAnimation();
        const u = {x: 0, y: 0};
        Ot(d => {
            const p = this.getAxisMotionValue(d);
            if (p && this.constraints !== !1) {
                const g = p.get();
                u[d] = Iw({min: g, max: g}, this.constraints[d])
            }
        });
        const {transformTemplate: f} = this.visualElement.getProps();
        this.visualElement.current.style.transform = f ? f({}, "") : "none", a.root && a.root.updateScroll(), a.updateLayout(), this.constraints = !1, this.resolveConstraints(), Ot(d => {
            if (!Us(d, r, null)) return;
            const p = this.getAxisMotionValue(d), {min: g, max: v} = this.constraints[d];
            p.set(ve(g, v, u[d]))
        }), this.visualElement.render()
    }

    addListeners() {
        if (!this.visualElement.current) return;
        Bw.set(this.visualElement, this);
        const r = this.visualElement.current, s = xi(r, "pointerdown", v => {
            const {drag: y, dragListener: x = !0} = this.getProps(), S = v.target, N = S !== r && wx(S);
            y && x && !N && this.start(v)
        });
        let a;
        const u = () => {
            const {dragConstraints: v} = this.getProps();
            mr(v) && v.current && (this.constraints = this.resolveRefConstraints(), a || (a = Uw(r, v.current, () => this.scalePositionWithinConstraints())))
        }, {projection: f} = this.visualElement, d = f.addEventListener("measure", u);
        f && !f.layout && (f.root && f.root.updateScroll(), f.updateLayout()), xe.read(u);
        const p = ji(window, "resize", () => this.scalePositionWithinConstraints()),
            g = f.addEventListener("didUpdate", (({delta: v, hasLayoutChanged: y}) => {
                this.isDragging && y && (Ot(x => {
                    const S = this.getAxisMotionValue(x);
                    S && (this.originPoint[x] += v[x].translate, S.set(S.get() + v[x].translate))
                }), this.visualElement.render())
            }));
        return () => {
            p(), s(), d(), g && g(), a && a()
        }
    }

    getProps() {
        const r = this.visualElement.getProps(), {
            drag: s = !1,
            dragDirectionLock: a = !1,
            dragPropagation: u = !1,
            dragConstraints: f = !1,
            dragElastic: d = tu,
            dragMomentum: p = !0
        } = r;
        return {
            ...r,
            drag: s,
            dragDirectionLock: a,
            dragPropagation: u,
            dragConstraints: f,
            dragElastic: d,
            dragMomentum: p
        }
    }
}

function ep(n) {
    let r = !0;
    return () => {
        if (r) {
            r = !1;
            return
        }
        n()
    }
}

function Uw(n, r, s) {
    const a = ah(n, ep(s)), u = ah(r, ep(s));
    return () => {
        a(), u()
    }
}

function Us(n, r, s) {
    return (r === !0 || r === n) && (s === null || s === n)
}

function $w(n, r = 10) {
    let s = null;
    return Math.abs(n.y) > r ? s = "y" : Math.abs(n.x) > r && (s = "x"), s
}

class Hw extends jn {
    constructor(r) {
        super(r), this.removeGroupControls = jt, this.removeListeners = jt, this.controls = new Ww(r)
    }

    mount() {
        const {dragControls: r} = this.node.getProps();
        r && (this.removeGroupControls = r.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || jt
    }

    update() {
        const {dragControls: r} = this.node.getProps(), {dragControls: s} = this.node.prevProps || {};
        r !== s && (this.removeGroupControls(), r && (this.removeGroupControls = r.subscribe(this.controls)))
    }

    unmount() {
        this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession()
    }
}

const Ml = n => (r, s) => {
    n && xe.update(() => n(r, s), !1, !0)
};

class Kw extends jn {
    constructor() {
        super(...arguments), this.removePointerDownListener = jt
    }

    onPointerDown(r) {
        this.session = new Km(r, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Hm(this.node)
        })
    }

    createPanHandlers() {
        const {onPanSessionStart: r, onPanStart: s, onPan: a, onPanEnd: u} = this.node.getProps();
        return {
            onSessionStart: Ml(r), onStart: Ml(s), onMove: Ml(a), onEnd: (f, d) => {
                delete this.session, u && xe.postRender(() => u(f, d))
            }
        }
    }

    mount() {
        this.removePointerDownListener = xi(this.node.current, "pointerdown", r => this.onPointerDown(r))
    }

    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }

    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}

let bl = !1;

class Gw extends H.Component {
    componentDidMount() {
        const {visualElement: r, layoutGroup: s, switchLayoutGroup: a, layoutId: u} = this.props, {projection: f} = r;
        f && (s.group && s.group.add(f), a && a.register && u && a.register(f), bl && f.root.didUpdate(), f.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), f.setOptions({
            ...f.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
        })), Js.hasEverUpdated = !0
    }

    getSnapshotBeforeUpdate(r) {
        const {layoutDependency: s, visualElement: a, drag: u, isPresent: f} = this.props, {projection: d} = a;
        return d && (d.isPresent = f, r.layoutDependency !== s && d.setOptions({
            ...d.options,
            layoutDependency: s
        }), bl = !0, u || r.layoutDependency !== s || s === void 0 || r.isPresent !== f ? d.willUpdate() : this.safeToRemove(), r.isPresent !== f && (f ? d.promote() : d.relegate() || xe.postRender(() => {
            const p = d.getStack();
            (!p || !p.members.length) && this.safeToRemove()
        }))), null
    }

    componentDidUpdate() {
        const {visualElement: r, layoutAnchor: s} = this.props, {projection: a} = r;
        a && (a.options.layoutAnchor = s, a.root.didUpdate(), Tu.postRender(() => {
            !a.currentAnimation && a.isLead() && this.safeToRemove()
        }))
    }

    componentWillUnmount() {
        const {visualElement: r, layoutGroup: s, switchLayoutGroup: a} = this.props, {projection: u} = r;
        bl = !0, u && (u.scheduleCheckAfterUnmount(), s && s.group && s.group.remove(u), a && a.deregister && a.deregister(u))
    }

    safeToRemove() {
        const {safeToRemove: r} = this.props;
        r && r()
    }

    render() {
        return null
    }
}

function Qm(n) {
    const [r, s] = Lm(), a = H.useContext(lu);
    return h.jsx(Gw, {...n, layoutGroup: a, switchLayoutGroup: H.useContext(Um), isPresent: r, safeToRemove: s})
}

const Qw = {pan: {Feature: Kw}, drag: {Feature: Hw, ProjectionNode: Vm, MeasureLayout: Qm}};

function tp(n, r, s) {
    const {props: a} = n;
    n.animationState && a.whileHover && n.animationState.setActive("whileHover", s === "Start");
    const u = "onHover" + s, f = a[u];
    f && xe.postRender(() => f(r, Pi(r)))
}

class Xw extends jn {
    mount() {
        const {current: r} = this.node;
        r && (this.unmount = gx(r, (s, a) => (tp(this.node, a, "Start"), u => tp(this.node, u, "End"))))
    }

    unmount() {
    }
}

class Yw extends jn {
    constructor() {
        super(...arguments), this.isActive = !1
    }

    onFocus() {
        let r = !1;
        try {
            r = this.node.current.matches(":focus-visible")
        } catch {
            r = !0
        }
        !r || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }

    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }

    mount() {
        this.unmount = Ci(ji(this.node.current, "focus", () => this.onFocus()), ji(this.node.current, "blur", () => this.onBlur()))
    }

    unmount() {
    }
}

function np(n, r, s) {
    const {props: a} = n;
    if (n.current instanceof HTMLButtonElement && n.current.disabled) return;
    n.animationState && a.whileTap && n.animationState.setActive("whileTap", s === "Start");
    const u = "onTap" + (s === "End" ? "" : s), f = a[u];
    f && xe.postRender(() => f(r, Pi(r)))
}

class Zw extends jn {
    mount() {
        const {current: r} = this.node;
        if (!r) return;
        const {globalTapTarget: s, propagate: a} = this.node.props;
        this.unmount = kx(r, (u, f) => (np(this.node, f, "Start"), (d, {success: p}) => np(this.node, d, p ? "End" : "Cancel")), {
            useGlobalTarget: s,
            stopPropagation: (a == null ? void 0 : a.tap) === !1
        })
    }

    unmount() {
    }
}

const nu = new WeakMap, zl = new WeakMap, qw = n => {
    const r = nu.get(n.target);
    r && r(n)
}, Jw = n => {
    n.forEach(qw)
};

function e2({root: n, ...r}) {
    const s = n || document;
    zl.has(s) || zl.set(s, {});
    const a = zl.get(s), u = JSON.stringify(r);
    return a[u] || (a[u] = new IntersectionObserver(Jw, {root: n, ...r})), a[u]
}

function t2(n, r, s) {
    const a = e2(r);
    return nu.set(n, s), a.observe(n), () => {
        nu.delete(n), a.unobserve(n)
    }
}

const n2 = {some: 0, all: 1};

class r2 extends jn {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }

    startObserver() {
        var g;
        (g = this.stopObserver) == null || g.call(this);
        const {viewport: r = {}} = this.node.getProps(), {root: s, margin: a, amount: u = "some", once: f} = r,
            d = {root: s ? s.current : void 0, rootMargin: a, threshold: typeof u == "number" ? u : n2[u]}, p = v => {
                const {isIntersecting: y} = v;
                if (this.isInView === y || (this.isInView = y, f && !y && this.hasEnteredView)) return;
                y && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", y);
                const {onViewportEnter: x, onViewportLeave: S} = this.node.getProps(), N = y ? x : S;
                N && N(v)
            };
        this.stopObserver = t2(this.node.current, d, p)
    }

    mount() {
        this.startObserver()
    }

    update() {
        if (typeof IntersectionObserver > "u") return;
        const {props: r, prevProps: s} = this.node;
        ["amount", "margin", "root"].some(i2(r, s)) && this.startObserver()
    }

    unmount() {
        var r;
        (r = this.stopObserver) == null || r.call(this), this.hasEnteredView = !1, this.isInView = !1
    }
}

function i2({viewport: n = {}}, {viewport: r = {}} = {}) {
    return s => n[s] !== r[s]
}

const s2 = {inView: {Feature: r2}, tap: {Feature: Zw}, focus: {Feature: Yw}, hover: {Feature: Xw}},
    o2 = {layout: {ProjectionNode: Vm, MeasureLayout: Qm}}, a2 = {...bw, ...s2, ...Qw, ...o2}, Ie = Nw(a2, Tw);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2 = n => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    u2 = n => n.replace(/^([A-Z])|[\s-_]+(\w)/g, (r, s, a) => a ? a.toUpperCase() : s.toLowerCase()), rp = n => {
        const r = u2(n);
        return r.charAt(0).toUpperCase() + r.slice(1)
    }, Xm = (...n) => n.filter((r, s, a) => !!r && r.trim() !== "" && a.indexOf(r) === s).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var c2 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2 = H.forwardRef(({
                                color: n = "currentColor",
                                size: r = 24,
                                strokeWidth: s = 2,
                                absoluteStrokeWidth: a,
                                className: u = "",
                                children: f,
                                iconNode: d,
                                ...p
                            }, g) => H.createElement("svg", {
    ref: g, ...c2,
    width: r,
    height: r,
    stroke: n,
    strokeWidth: a ? Number(s) * 24 / Number(r) : s,
    className: Xm("lucide", u), ...p
}, [...d.map(([v, y]) => H.createElement(v, y)), ...Array.isArray(f) ? f : [f]]));
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de = (n, r) => {
    const s = H.forwardRef(({className: a, ...u}, f) => H.createElement(d2, {
        ref: f,
        iconNode: r,
        className: Xm(`lucide-${l2(rp(n))}`, `lucide-${n}`, a), ...u
    }));
    return s.displayName = rp(n), s
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2 = [["path", {
    d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
    key: "169zse"
}]], h2 = de("activity", f2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2 = [["path", {
    d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",
    key: "3s7exb"
}], ["path", {d: "M10 2c1 .5 2 2 2 5", key: "fcco2y"}]], m2 = de("apple", p2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2 = [["path", {
    d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
    key: "1yiouv"
}], ["circle", {cx: "12", cy: "8", r: "6", key: "1vp47v"}]], y2 = de("award", g2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2 = [["path", {d: "M9 12h.01", key: "157uk2"}], ["path", {
    d: "M15 12h.01",
    key: "1k8ypt"
}], ["path", {
    d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",
    key: "1u7htd"
}], ["path", {
    d: "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
    key: "5yv0yz"
}]], ru = de("baby", v2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2 = [["path", {
    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
    key: "3c2336"
}], ["line", {x1: "12", x2: "12", y1: "8", y2: "16", key: "10p56q"}], ["line", {
    x1: "8",
    x2: "16",
    y1: "12",
    y2: "12",
    key: "1jonct"
}]], w2 = de("badge-plus", x2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2 = [["path", {
    d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",
    key: "w610uw"
}]], Ym = de("bone", S2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2 = [["path", {
    d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
    key: "l5xja"
}], ["path", {
    d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
    key: "ep3f8r"
}], ["path", {
    d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
    key: "1p4c4q"
}], ["path", {d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw"}], ["path", {
    d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
    key: "105sqy"
}], ["path", {d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin"}], ["path", {
    d: "M19.938 10.5a4 4 0 0 1 .585.396",
    key: "1qfode"
}], ["path", {d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj"}], ["path", {
    d: "M19.967 17.484A4 4 0 0 1 18 18",
    key: "159ez6"
}]], Zm = de("brain", k2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2 = [["path", {d: "M8 2v4", key: "1cmpym"}], ["path", {d: "M16 2v4", key: "4m81vk"}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {d: "M3 10h18", key: "8toen8"}]], eo = de("calendar", j2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2 = [["path", {d: "M20 6 9 17l-5-5", key: "1gmf2c"}]], $s = de("check", C2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2 = [["path", {d: "m15 18-6-6 6-6", key: "1wnfg3"}]], gr = de("chevron-left", N2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2 = [["path", {d: "m9 18 6-6-6-6", key: "mthhwq"}]], P2 = de("chevron-right", T2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2 = [["path", {d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct"}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]], qm = de("circle-check-big", E2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2 = [["circle", {cx: "12", cy: "12", r: "10", key: "1mglay"}], ["path", {d: "m9 12 2 2 4-4", key: "dzmm74"}]],
    b2 = de("circle-check", M2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2 = [["circle", {cx: "12", cy: "12", r: "10", key: "1mglay"}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}], ["path", {d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662", key: "154egf"}]], ip = de("circle-user", z2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2 = [["circle", {cx: "12", cy: "12", r: "10", key: "1mglay"}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]], iu = de("clock", A2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2 = [["path", {
    d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",
    key: "1dfaln"
}], ["path", {d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4", key: "1qnva7"}]], sp = de("ear", R2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2 = [["path", {
    d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
    key: "1nclc0"
}], ["circle", {cx: "12", cy: "12", r: "3", key: "1v7zrd"}]], su = de("eye", D2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2 = [["path", {
        d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
        key: "18mbvz"
    }], ["path", {d: "M6.453 15h11.094", key: "3shlmq"}], ["path", {d: "M8.5 2h7", key: "csnxdl"}]],
    Lu = de("flask-conical", V2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2 = [["path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    key: "c3ymky"
}], ["path", {d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "1uw2ng"}]], ou = de("heart-pulse", L2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2 = [["path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    key: "c3ymky"
}]], I2 = de("heart", _2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2 = [["rect", {
    width: "20",
    height: "20",
    x: "2",
    y: "2",
    rx: "5",
    ry: "5",
    key: "2e1cvw"
}], ["path", {d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1"}], ["line", {
    x1: "17.5",
    x2: "17.51",
    y1: "6.5",
    y2: "6.5",
    key: "r4j83e"
}]], F2 = de("instagram", O2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2 = [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {cx: "12", cy: "10", r: "3", key: "ilqhr7"}]], W2 = de("map-pin", B2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2 = [["line", {x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i"}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1"}]], $2 = de("menu", U2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2 = [["path", {d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd"}]], Jm = de("message-circle", H2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2 = [["path", {d: "M6 18h8", key: "1borvv"}], ["path", {
    d: "M3 22h18",
    key: "8prr45"
}], ["path", {d: "M14 22a7 7 0 1 0 0-14h-1", key: "1jwaiy"}], ["path", {
    d: "M9 14h2",
    key: "197e7h"
}], ["path", {
    d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",
    key: "1bmzmy"
}], ["path", {d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3", key: "1drr47"}]], G2 = de("microscope", K2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2 = [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]], pi = de("phone", Q2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2 = [["path", {d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z"}], ["path", {
    d: "M17 3h2a2 2 0 0 1 2 2v2",
    key: "4qcy5o"
}], ["path", {d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8"}], ["path", {
    d: "M7 21H5a2 2 0 0 1-2-2v-2",
    key: "ioqczr"
}], ["path", {d: "M7 12h10", key: "b7w52i"}]], Y2 = de("scan-line", X2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2 = [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]], e0 = de("shield", Z2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2 = [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]], op = de("star", q2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2 = [["path", {d: "M11 2v2", key: "1539x4"}], ["path", {
        d: "M5 2v2",
        key: "1yf1q8"
    }], ["path", {
        d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",
        key: "rb5t3r"
    }], ["path", {d: "M8 15a6 6 0 0 0 12 0v-3", key: "x18d4x"}], ["circle", {cx: "20", cy: "10", r: "2", key: "ts1r5v"}]],
    Bn = de("stethoscope", J2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS = [["path", {
    d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2",
    key: "125lnx"
}], ["path", {d: "M8.5 2h7", key: "csnxdl"}], ["path", {d: "M14.5 16h-5", key: "1ox875"}]], t0 = de("test-tube", eS);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS = [["path", {d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel"}], ["circle", {
    cx: "12",
    cy: "7",
    r: "4",
    key: "17ys0d"
}]], yo = de("user", tS);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS = [["path", {d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq"}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd"}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]], n0 = de("users", nS);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS = [["path", {d: "M12 15v7", key: "t2xh3l"}], ["path", {d: "M9 19h6", key: "456am0"}], ["circle", {
    cx: "12",
    cy: "9",
    r: "6",
    key: "1nw4tq"
}]], iS = de("venus", rS);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS = [["path", {
    d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
    key: "knzxuh"
}], ["path", {
    d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
    key: "2jd2cc"
}], ["path", {
    d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
    key: "rd2r6e"
}]], oS = de("waves", sS);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS = [["path", {d: "M18 6 6 18", key: "1bl5f8"}], ["path", {d: "m6 6 12 12", key: "d8bk6v"}]],
    mi = de("x", aS);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS = [["path", {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db"
    }]], r0 = de("zap", lS), ap = [{
        id: "general",
        label: "عمومی",
        icon: h.jsx(yo, {size: 28}),
        description: "ویزیت پزشک عمومی، چکاپ و معاینات اولیه",
        color: "bg-teal-50 text-teal-700 border-teal-200",
        activeColor: "bg-teal-600 text-white border-teal-600",
        iconBg: "bg-teal-100 text-teal-600"
    }, {
        id: "specialist",
        label: "تخصصی",
        icon: h.jsx(Bn, {size: 28}),
        description: "مشاوره با پزشکان متخصص در رشته‌های مختلف",
        color: "bg-sky-50 text-sky-700 border-sky-200",
        activeColor: "bg-sky-600 text-white border-sky-600",
        iconBg: "bg-sky-100 text-sky-600"
    }, {
        id: "paraclinic",
        label: "پاراکلینیک",
        icon: h.jsx(Lu, {size: 28}),
        description: "آزمایشگاه، تصویربرداری، سونوگرافی و نوار قلب",
        color: "bg-orange-50 text-orange-700 border-orange-200",
        activeColor: "bg-orange-500 text-white border-orange-500",
        iconBg: "bg-orange-100 text-orange-600"
    }], uS = {
        general: [{
            id: "d1",
            name: "دکتر سارا محمدی",
            title: "پزشک عمومی",
            specialty: "پزشک عمومی با ۱۲ سال سابقه",
            photo: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=200&h=200&fit=crop&auto=format",
            available: "امروز"
        }, {
            id: "d2",
            name: "دکتر علی رضایی",
            title: "پزشک عمومی",
            specialty: "متخصص در پیشگیری و سلامت عمومی",
            photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&auto=format",
            available: "فردا"
        }, {
            id: "d3",
            name: "دکتر مریم احمدی",
            title: "پزشک عمومی",
            specialty: "ارائه خدمات خانواده و کودکان",
            photo: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=200&h=200&fit=crop&auto=format",
            available: "امروز"
        }],
        specialist: [{
            id: "d4",
            name: "دکتر کاوه حسینی",
            title: "متخصص قلب و عروق",
            specialty: "فلوشیپ اینترونشن قلب",
            photo: "https://images.unsplash.com/photo-1612523138351-4643808db8f3?w=200&h=200&fit=crop&auto=format",
            available: "فردا"
        }, {
            id: "d5",
            name: "دکتر نیلوفر کریمی",
            title: "متخصص اعصاب",
            specialty: "نورولوژی بالینی و میگرن",
            photo: "https://images.unsplash.com/photo-1673865641073-4479f93a7776?w=200&h=200&fit=crop&auto=format",
            available: "امروز"
        }, {
            id: "d6",
            name: "دکتر بهرام صادقی",
            title: "متخصص ارتوپدی",
            specialty: "جراحی مفصل و ستون فقرات",
            photo: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=200&h=200&fit=crop&auto=format",
            available: "پس‌فردا"
        }],
        paraclinic: [{
            id: "s1",
            name: "آزمایشگاه",
            title: "خدمات آزمایشگاهی",
            specialty: "آزمایش خون، ادرار، هورمون و فرهنگ",
            photo: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=200&h=200&fit=crop&auto=format",
            available: "امروز"
        }, {
            id: "s2",
            name: "تصویربرداری",
            title: "رادیولوژی دیجیتال",
            specialty: "رادیوگرافی، سی‌تی‌اسکن و MRI",
            photo: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=200&h=200&fit=crop&auto=format",
            available: "امروز"
        }, {
            id: "s3",
            name: "سونوگرافی",
            title: "اولتراسوند",
            specialty: "سونوگرافی شکم، لگن و تیروئید",
            photo: "https://images.unsplash.com/photo-1602052577122-f73b9710adba?w=200&h=200&fit=crop&auto=format",
            available: "فردا"
        }, {
            id: "s4",
            name: "نوار قلب",
            title: "ECG / EKG",
            specialty: "الکتروکاردیوگرافی و هولتر مانیتور",
            photo: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=200&h=200&fit=crop&auto=format",
            available: "امروز"
        }]
    }, cS = () => {
        const n = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه"], r = ["خرداد", "تیر", "مرداد"],
            s = new Date;
        return Array.from({length: 7}, (a, u) => {
            const f = new Date(s);
            return f.setDate(s.getDate() + u), {
                id: `date-${u}`,
                dayName: n[f.getDay() % 6],
                day: (12 + u).toString(),
                month: r[0],
                disabled: u === 2 || u === 5
            }
        })
    }, Hs = ["بخش", "پزشک / خدمت", "تاریخ", "تأیید"], lp = cS(),
    dS = n => n.toString().replace(/\d/g, r => "۰۱۲۳۴۵۶۷۸۹"[Number(r)]);

function fS({isOpen: n, onClose: r, initialDepartment: s}) {
    const [a, u] = H.useState(s ? 1 : 0), [f, d] = H.useState(s || null), [p, g] = H.useState(null), [v, y] = H.useState(null), [x, S] = H.useState(""), [N, b] = H.useState(""), [A, z] = H.useState(""), [R, U] = H.useState(!1);
    if (!n) return null;
    const I = ap.find(O => O.id === f), F = f ? uS[f] || [] : [], X = F.find(O => O.id === p),
        P = lp.find(O => O.id === v),
        K = R && f && p && v ? dS(1e3 + [f, p, v, N, A].join("-").split("").reduce((O, ae) => O + ae.charCodeAt(0), 0) % 9e3) : "",
        $ = () => a === 0 ? !!f : a === 1 ? !!p : a === 2 ? !!v : a === 3 ? x.trim().length > 1 && N.trim().length >= 10 && A.trim().length === 10 : !1,
        se = () => {
            U(!0)
        }, Z = () => {
            u(s ? 1 : 0), d(s || null), g(null), y(null), S(""), b(""), z(""), U(!1), r()
        };
    return h.jsxs("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        dir: "rtl",
        children: [h.jsx("div", {
            className: "absolute inset-0 bg-slate-900/50 backdrop-blur-sm",
            onClick: Z
        }), h.jsxs(Ie.div, {
            initial: {opacity: 0, scale: .96, y: 12},
            animate: {opacity: 1, scale: 1, y: 0},
            exit: {opacity: 0, scale: .96, y: 12},
            transition: {duration: .25, ease: "easeOut"},
            className: "relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col",
            children: [h.jsxs("div", {
                className: "px-8 pt-7 pb-5 border-b border-slate-100 flex-shrink-0",
                children: [h.jsxs("div", {
                    className: "flex items-center justify-between mb-6",
                    children: [h.jsxs("div", {
                        children: [h.jsx("h2", {
                            className: "text-slate-800",
                            style: {fontSize: "1.25rem", fontWeight: 700},
                            children: R ? "نوبت ثبت شد" : "رزرو نوبت"
                        }), !R && h.jsxs("p", {
                            className: "text-slate-500 mt-0.5",
                            style: {fontSize: "0.85rem"},
                            children: [Hs[a], " — گام ", a + 1, " از ", Hs.length]
                        })]
                    }), h.jsx("button", {
                        onClick: Z,
                        className: "w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center text-slate-500",
                        children: h.jsx(mi, {size: 18})
                    })]
                }), !R && h.jsx("div", {
                    className: "grid grid-cols-4 max-w-md mx-auto",
                    children: Hs.map((O, ae) => h.jsxs("div", {
                        className: "relative flex justify-center",
                        children: [ae < Hs.length - 1 && h.jsx("div", {className: `absolute left-[-50%] top-4 h-0.5 w-full transition-all ${ae < a ? "bg-teal-400" : "bg-slate-200"}`}), h.jsxs("div", {
                            className: "relative z-10 flex flex-col items-center",
                            children: [h.jsx("div", {
                                className: `w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${ae < a ? "bg-teal-500 text-white" : ae === a ? "bg-teal-600 text-white shadow-lg" : "bg-slate-100 text-slate-400"}`,
                                style: {fontSize: "0.75rem", fontWeight: 600},
                                children: ae < a ? h.jsx($s, {size: 14}) : ae + 1
                            }), h.jsx("span", {
                                className: `mt-1.5 hidden sm:block ${ae === a ? "text-teal-700" : ae < a ? "text-teal-500" : "text-slate-400"}`,
                                style: {fontSize: "0.7rem", fontWeight: 500},
                                children: O
                            })]
                        })]
                    }, O))
                })]
            }), h.jsx("div", {
                className: "flex-1 overflow-y-auto overflow-x-hidden", children: h.jsx(ew, {
                    mode: "wait", children: R ? h.jsxs(Ie.div, {
                        initial: {opacity: 0, y: 20},
                        animate: {opacity: 1, y: 0},
                        className: "px-8 py-12 flex flex-col items-center text-center",
                        children: [h.jsx("div", {
                            className: "w-20 h-20 rounded-full bg-teal-50 flex items-center justify-center mb-6",
                            children: h.jsx(b2, {size: 42, className: "text-teal-500"})
                        }), h.jsx("h3", {
                            className: "text-slate-800 mb-2",
                            style: {fontSize: "1.3rem", fontWeight: 700},
                            children: "نوبت شما با موفقیت ثبت شد!"
                        }), h.jsx("p", {
                            className: "text-slate-500 max-w-sm leading-relaxed mb-8",
                            style: {fontSize: "0.9rem"},
                            children: "شماره نوبت و جزئیات مراجعه از طریق پیامک به شماره شما ارسال خواهد شد."
                        }), h.jsx("div", {
                            className: "w-full bg-slate-50 rounded-2xl p-5 text-right mb-6",
                            children: h.jsx("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [{label: "شماره نوبت", value: K}, {
                                    label: "بخش",
                                    value: I == null ? void 0 : I.label
                                }, {
                                    label: f === "paraclinic" ? "خدمت" : "پزشک",
                                    value: X == null ? void 0 : X.name
                                }, {label: "تاریخ", value: P ? `${P.dayName} ${P.day} ${P.month}` : ""}].map(({
                                                                                                                  label: O,
                                                                                                                  value: ae
                                                                                                              }) => h.jsxs("div", {
                                    className: "bg-white rounded-xl p-3 shadow-sm",
                                    children: [h.jsx("div", {
                                        className: "text-slate-400",
                                        style: {fontSize: "0.72rem"},
                                        children: O
                                    }), h.jsx("div", {
                                        className: "text-slate-700 mt-0.5",
                                        style: {fontSize: "0.9rem", fontWeight: 600},
                                        children: ae
                                    })]
                                }, O))
                            })
                        }), h.jsx("button", {
                            onClick: Z,
                            className: "px-8 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors",
                            style: {fontSize: "0.95rem", fontWeight: 600},
                            children: "بستن"
                        })]
                    }, "success") : a === 0 ? h.jsxs(Ie.div, {
                        initial: {opacity: 0, x: -20},
                        animate: {opacity: 1, x: 0},
                        exit: {opacity: 0, x: 20},
                        className: "px-6 py-6",
                        children: [h.jsx("p", {
                            className: "text-slate-500 mb-5 text-center",
                            style: {fontSize: "0.9rem"},
                            children: "بخش مورد نظر خود را انتخاب کنید"
                        }), h.jsx("div", {
                            className: "flex flex-col gap-3",
                            children: ap.map(O => h.jsxs("button", {
                                onClick: () => d(O.id),
                                className: `flex items-center gap-4 p-5 rounded-2xl border-2 transition-all text-right ${f === O.id ? O.activeColor : "border-slate-100 bg-slate-50 hover:border-slate-200 hover:bg-white text-slate-700"}`,
                                children: [h.jsx("div", {
                                    className: `w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${f === O.id ? "bg-white/20" : O.iconBg}`,
                                    children: O.icon
                                }), h.jsxs("div", {
                                    className: "flex-1",
                                    children: [h.jsx("div", {
                                        style: {fontSize: "1rem", fontWeight: 700},
                                        children: O.label
                                    }), h.jsx("div", {
                                        className: `mt-0.5 ${f === O.id ? "opacity-80" : "text-slate-500"}`,
                                        style: {fontSize: "0.82rem"},
                                        children: O.description
                                    })]
                                }), f === O.id && h.jsx($s, {size: 20, className: "flex-shrink-0 opacity-90"})]
                            }, O.id))
                        })]
                    }, "step0") : a === 1 ? h.jsxs(Ie.div, {
                        initial: {opacity: 0, x: -20},
                        animate: {opacity: 1, x: 0},
                        exit: {opacity: 0, x: 20},
                        className: "px-6 py-6",
                        children: [h.jsx("p", {
                            className: "text-slate-500 mb-5 text-center",
                            style: {fontSize: "0.9rem"},
                            children: f === "paraclinic" ? "خدمت مورد نظر را انتخاب کنید" : "پزشک مورد نظر را انتخاب کنید"
                        }), h.jsx("div", {
                            className: "flex flex-col gap-3", children: F.map(O => h.jsxs("button", {
                                onClick: () => g(O.id),
                                className: `flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-right ${p === O.id ? "border-teal-500 bg-teal-50" : "border-slate-100 bg-slate-50 hover:border-slate-200 hover:bg-white"}`,
                                children: [h.jsx("img", {
                                    src: O.photo,
                                    alt: O.name,
                                    className: "w-14 h-14 rounded-xl object-cover flex-shrink-0"
                                }), h.jsxs("div", {
                                    className: "flex-1 min-w-0",
                                    children: [h.jsx("div", {
                                        className: "text-slate-800",
                                        style: {fontSize: "0.95rem", fontWeight: 700},
                                        children: O.name
                                    }), h.jsx("div", {
                                        className: "text-teal-600 mt-0.5",
                                        style: {fontSize: "0.8rem", fontWeight: 600},
                                        children: O.title
                                    }), h.jsx("div", {
                                        className: "text-slate-500 truncate",
                                        style: {fontSize: "0.78rem"},
                                        children: O.specialty
                                    })]
                                }), h.jsxs("div", {
                                    className: "flex flex-col items-end gap-1 flex-shrink-0",
                                    children: [h.jsx("span", {
                                        className: `px-2 py-0.5 rounded-full ${O.available === "امروز" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`,
                                        style: {fontSize: "0.72rem", fontWeight: 600},
                                        children: O.available
                                    }), p === O.id && h.jsx($s, {size: 16, className: "text-teal-500"})]
                                })]
                            }, O.id))
                        })]
                    }, "step1") : a === 2 ? h.jsxs(Ie.div, {
                        initial: {opacity: 0, x: -20},
                        animate: {opacity: 1, x: 0},
                        exit: {opacity: 0, x: 20},
                        className: "px-6 py-6",
                        children: [h.jsx("p", {
                            className: "text-slate-500 mb-5 text-center",
                            style: {fontSize: "0.9rem"},
                            children: "روز دلخواه خود را انتخاب کنید"
                        }), h.jsx("div", {
                            className: "grid grid-cols-7 gap-2 mb-2",
                            children: lp.map(O => h.jsxs("button", {
                                onClick: () => !O.disabled && y(O.id),
                                disabled: O.disabled,
                                className: `flex flex-col items-center py-3 px-1 rounded-2xl border-2 transition-all ${O.disabled ? "border-slate-100 bg-slate-50 text-slate-300 cursor-not-allowed" : v === O.id ? "border-teal-500 bg-teal-600 text-white shadow-lg" : "border-slate-100 bg-white hover:border-teal-200 hover:bg-teal-50 text-slate-700"}`,
                                children: [h.jsx("span", {
                                    style: {fontSize: "0.62rem", fontWeight: 500},
                                    className: "opacity-70",
                                    children: O.dayName
                                }), h.jsx("span", {
                                    style: {fontSize: "1.05rem", fontWeight: 700},
                                    className: "my-0.5",
                                    children: O.day
                                }), h.jsx("span", {
                                    style: {fontSize: "0.6rem"},
                                    className: "opacity-60",
                                    children: O.month
                                })]
                            }, O.id))
                        }), h.jsxs("div", {
                            className: "flex items-center gap-4 mt-4 justify-center",
                            children: [h.jsxs("div", {
                                className: "flex items-center gap-1.5",
                                children: [h.jsx("div", {className: "w-3 h-3 rounded-full bg-teal-500"}), h.jsx("span", {
                                    className: "text-slate-500",
                                    style: {fontSize: "0.78rem"},
                                    children: "انتخاب شده"
                                })]
                            }), h.jsxs("div", {
                                className: "flex items-center gap-1.5",
                                children: [h.jsx("div", {className: "w-3 h-3 rounded-full bg-slate-200"}), h.jsx("span", {
                                    className: "text-slate-500",
                                    style: {fontSize: "0.78rem"},
                                    children: "رزرو شده"
                                })]
                            }), h.jsxs("div", {
                                className: "flex items-center gap-1.5",
                                children: [h.jsx("div", {className: "w-3 h-3 rounded-full bg-white border-2 border-slate-200"}), h.jsx("span", {
                                    className: "text-slate-500",
                                    style: {fontSize: "0.78rem"},
                                    children: "آزاد"
                                })]
                            })]
                        })]
                    }, "step2") : h.jsxs(Ie.div, {
                        initial: {opacity: 0, x: -20},
                        animate: {opacity: 1, x: 0},
                        exit: {opacity: 0, x: 20},
                        className: "px-6 py-6",
                        children: [h.jsxs("div", {
                            className: "bg-gradient-to-br from-teal-50 to-sky-50 rounded-2xl p-5 mb-6 border border-teal-100",
                            children: [h.jsx("h4", {
                                className: "text-teal-700 mb-4",
                                style: {fontSize: "0.85rem", fontWeight: 700},
                                children: "خلاصه نوبت"
                            }), h.jsx("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [{
                                    label: "بخش",
                                    value: I == null ? void 0 : I.label,
                                    icon: h.jsx(Bn, {size: 14})
                                }, {
                                    label: f === "paraclinic" ? "خدمت" : "پزشک",
                                    value: X == null ? void 0 : X.name,
                                    icon: h.jsx(yo, {size: 14})
                                }, {
                                    label: "تاریخ",
                                    value: P ? `${P.dayName} ${P.day} ${P.month}` : "",
                                    icon: h.jsx(eo, {size: 14})
                                }].map(({
                                            label: O,
                                            value: ae,
                                            icon: ke
                                        }) => h.jsxs("div", {
                                    className: "bg-white/80 rounded-xl p-3",
                                    children: [h.jsxs("div", {
                                        className: "flex items-center gap-1.5 text-teal-600 mb-1",
                                        children: [ke, h.jsx("span", {
                                            style: {fontSize: "0.7rem", fontWeight: 600},
                                            children: O
                                        })]
                                    }), h.jsx("div", {
                                        className: "text-slate-700",
                                        style: {fontSize: "0.88rem", fontWeight: 700},
                                        children: ae
                                    })]
                                }, O))
                            })]
                        }), h.jsxs("div", {
                            className: "flex flex-col gap-4",
                            children: [h.jsxs("div", {
                                children: [h.jsxs("label", {
                                    className: "flex items-center gap-2 text-slate-600 mb-2",
                                    style: {fontSize: "0.85rem", fontWeight: 600},
                                    children: [h.jsx(ip, {size: 15}), " نام و نام‌خانوادگی"]
                                }), h.jsx("input", {
                                    type: "text",
                                    value: x,
                                    onChange: O => S(O.target.value),
                                    placeholder: "نام کامل خود را وارد کنید",
                                    className: "w-full px-4 py-3 rounded-xl border-2 border-slate-100 bg-slate-50 focus:outline-none focus:border-teal-400 focus:bg-white transition-all text-slate-700 placeholder-slate-300",
                                    style: {fontSize: "0.9rem"}
                                })]
                            }), h.jsxs("div", {
                                children: [h.jsxs("label", {
                                    className: "flex items-center gap-2 text-slate-600 mb-2",
                                    style: {fontSize: "0.85rem", fontWeight: 600},
                                    children: [h.jsx(pi, {size: 15}), " شماره موبایل"]
                                }), h.jsx("input", {
                                    type: "tel",
                                    value: N,
                                    onChange: O => b(O.target.value),
                                    placeholder: "۰۹۱۲×××××××",
                                    dir: "ltr",
                                    className: "w-full px-4 py-3 rounded-xl border-2 border-slate-100 bg-slate-50 focus:outline-none focus:border-teal-400 focus:bg-white transition-all text-slate-700 placeholder-slate-300 text-right",
                                    style: {fontSize: "0.9rem"}
                                })]
                            }), h.jsxs("div", {
                                children: [h.jsxs("label", {
                                    className: "flex items-center gap-2 text-slate-600 mb-2",
                                    style: {fontSize: "0.85rem", fontWeight: 600},
                                    children: [h.jsx(ip, {size: 15}), " کد ملی"]
                                }), h.jsx("input", {
                                    type: "text",
                                    inputMode: "numeric",
                                    maxLength: 10,
                                    value: A,
                                    onChange: O => z(O.target.value.replace(/\D/g, "").slice(0, 10)),
                                    placeholder: "کد ملی ۱۰ رقمی",
                                    dir: "ltr",
                                    className: "w-full px-4 py-3 rounded-xl border-2 border-slate-100 bg-slate-50 focus:outline-none focus:border-teal-400 focus:bg-white transition-all text-slate-700 placeholder-slate-300 text-right",
                                    style: {fontSize: "0.9rem"}
                                })]
                            })]
                        })]
                    }, "step4")
                })
            }), !R && h.jsxs("div", {
                className: "px-6 py-5 border-t border-slate-100 flex items-center justify-between gap-3 flex-shrink-0",
                children: [a > 0 ? h.jsxs("button", {
                    onClick: () => u(O => O - 1),
                    className: "flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors",
                    style: {fontSize: "0.9rem", fontWeight: 600},
                    children: [h.jsx(P2, {size: 16}), "قبلی"]
                }) : h.jsx("div", {}), a < 3 ? h.jsxs("button", {
                    onClick: () => $() && u(O => O + 1),
                    disabled: !$(),
                    className: `flex items-center gap-2 px-7 py-2.5 rounded-xl transition-all ${$() ? "bg-teal-600 text-white hover:bg-teal-700 shadow-lg shadow-teal-200" : "bg-slate-100 text-slate-300 cursor-not-allowed"}`,
                    style: {fontSize: "0.9rem", fontWeight: 600},
                    children: ["بعدی", h.jsx(gr, {size: 16})]
                }) : h.jsxs("button", {
                    onClick: se,
                    disabled: !$(),
                    className: `flex items-center gap-2 px-7 py-2.5 rounded-xl transition-all ${$() ? "bg-teal-600 text-white hover:bg-teal-700 shadow-lg shadow-teal-200" : "bg-slate-100 text-slate-300 cursor-not-allowed"}`,
                    style: {fontSize: "0.9rem", fontWeight: 600},
                    children: ["ثبت نوبت", h.jsx($s, {size: 16})]
                })]
            })]
        })]
    })
}

const i0 = [{
    id: "d4",
    name: "دکتر نیلوفر کریمی",
    specialty: "متخصص اعصاب و روان",
    description: "نورولوژی بالینی، سردرد و میگرن",
    photo: "doctor1.jpg",
    rating: "۴.۹",
    reviews: "۲۸۴",
    available: "امروز",
    dept: "specialist"
}, {
    id: "d5",
    name: "دکتر کاوه حسینی",
    specialty: "متخصص قلب و عروق",
    description: "فلوشیپ اینترونشن قلب — ۱۵ سال سابقه",
    photo: "doctor2.jpg",
    rating: "۴.۸",
    reviews: "۱۹۶",
    available: "فردا",
    dept: "specialist"
}, {
    id: "d1",
    name: "دکتر سارا محمدی",
    specialty: "پزشک عمومی",
    description: "پزشکی عمومی و بهداشت خانواده",
    photo: "doctor3.jpg",
    rating: "۴.۷",
    reviews: "۳۴۲",
    available: "امروز",
    dept: "general"
}, {
    id: "d6",
    name: "دکتر بهرام صادقی",
    specialty: "متخصص ارتوپدی",
    description: "جراحی مفصل، ستون فقرات و ورزشی",
    photo: "doctor4.jpg",
    rating: "۴.۹",
    reviews: "۱۶۸",
    available: "پس‌فردا",
    dept: "specialist"
}], hS = [...i0, {
    id: "d7",
    name: "دکتر آرمان شریفی",
    specialty: "متخصص گوش، حلق و بینی",
    description: "جراحی سر و گردن، سینوس و آلرژی",
    photo: "doctor1.jpg",
    rating: "۴.۸",
    reviews: "۱۴۲",
    available: "امروز",
    dept: "specialist"
}, {
    id: "d8",
    name: "دکتر مهسا نادری",
    specialty: "متخصص زنان و زایمان",
    description: "مراقبت بارداری و سلامت بانوان",
    photo: "doctor2.jpg",
    rating: "۴.۹",
    reviews: "۲۳۱",
    available: "فردا",
    dept: "specialist"
}, {
    id: "d9",
    name: "دکتر امیرحسین رستمی",
    specialty: "متخصص داخلی",
    description: "دیابت، فشار خون و بیماری‌های داخلی",
    photo: "doctor3.jpg",
    rating: "۴.۷",
    reviews: "۱۸۹",
    available: "امروز",
    dept: "specialist"
}, {
    id: "d10",
    name: "دکتر الهام موسوی",
    specialty: "متخصص چشم‌پزشکی",
    description: "معاینات چشم، عیوب انکساری و شبکیه",
    photo: "doctor4.jpg",
    rating: "۴.۸",
    reviews: "۱۷۶",
    available: "پس‌فردا",
    dept: "specialist"
}], pS = [{
    icon: h.jsx(t0, {size: 22}),
    name: "آزمایشگاه",
    desc: "آنالیز خون، ادرار و هورمون",
    color: "bg-teal-50 text-teal-600"
}, {
    icon: h.jsx(Y2, {size: 22}),
    name: "تصویربرداری",
    desc: "رادیوگرافی، CT-Scan و MRI",
    color: "bg-sky-50 text-sky-600"
}, {
    icon: h.jsx(ou, {size: 22}),
    name: "نوار قلب",
    desc: "ECG / EKG و هولتر مانیتور",
    color: "bg-rose-50 text-rose-600"
}, {
    icon: h.jsx(oS, {size: 22}),
    name: "سونوگرافی",
    desc: "سونوگرافی شکم، لگن و تیروئید",
    color: "bg-indigo-50 text-indigo-600"
}, {
    icon: h.jsx(G2, {size: 22}),
    name: "پاتولوژی",
    desc: "آزمایش بافت و نمونه‌گیری",
    color: "bg-amber-50 text-amber-600"
}, {
    icon: h.jsx(ou, {size: 22}),
    name: "نوار مغز",
    desc: "الکتروآنسفالوگرافی (EEG)",
    color: "bg-purple-50 text-purple-600"
}], mS = [{id: 1, title: "گفتار درمانی", shift: "صبح و عصر", status: "فعال", icon: h.jsx(Jm, {size: 22})}, {
    id: 2,
    title: "شنوایی‌شناسی",
    shift: "عصر",
    status: "فعال",
    icon: h.jsx(sp, {size: 22})
}, {id: 3, title: "ارولوژی", shift: "عصر", status: "فعال", icon: h.jsx(h2, {size: 22})}, {
    id: 4,
    title: "اعصاب و روان",
    shift: "عصر",
    status: "فعال",
    icon: h.jsx(Zm, {size: 22})
}, {id: 5, title: "تغذیه", shift: "عصر", status: "فعال", icon: h.jsx(m2, {size: 22})}, {
    id: 6,
    title: "ارتوپدی",
    shift: "صبح و عصر",
    status: "فعال",
    icon: h.jsx(Ym, {size: 22})
}, {id: 7, title: "بینایی‌سنجی", shift: "صبح", status: "فعال", icon: h.jsx(su, {size: 22})}, {
    id: 8,
    title: "گوش، حلق و بینی",
    shift: "عصر",
    status: "فعال",
    icon: h.jsx(sp, {size: 22})
}, {id: 9, title: "زنان", shift: "صبح و عصر", status: "فعال", icon: h.jsx(iS, {size: 22})}, {
    id: 10,
    title: "مامایی",
    shift: "صبح و عصر",
    status: "فعال",
    icon: h.jsx(ru, {size: 22})
}, {id: 11, title: "قلب و عروق", shift: "صبح و عصر", status: "فعال", icon: h.jsx(ou, {size: 22})}, {
    id: 12,
    title: "درمانگاه عمومی",
    shift: "شبانه‌روزی",
    status: "فعال",
    icon: h.jsx(Bn, {size: 22})
}, {id: 13, title: "اطفال", shift: "صبح و عصر", status: "فعال", icon: h.jsx(ru, {size: 22})}, {
    id: 14,
    title: "دندانپزشکی",
    shift: "صبح و عصر",
    status: "فعال",
    icon: h.jsx(w2, {size: 22})
}, {id: 15, title: "داخلی", shift: "صبح و عصر", status: "فعال", icon: h.jsx(yo, {size: 22})}, {
    id: 16,
    title: "چشم",
    shift: "عصر",
    status: "فعال",
    icon: h.jsx(su, {size: 22})
}, {id: 17, title: "آزمایشگاه", shift: "برنامه متغیر", status: "فعال", icon: h.jsx(t0, {size: 22})}], up = [{
    border: "hover:border-teal-200",
    gradient: "from-teal-50 via-white to-cyan-50",
    icon: "bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white",
    badge: "bg-teal-50 text-teal-700",
    chip: "bg-teal-50 text-teal-800"
}, {
    border: "hover:border-sky-200",
    gradient: "from-sky-50 via-white to-blue-50",
    icon: "bg-sky-50 text-sky-700 group-hover:bg-sky-600 group-hover:text-white",
    badge: "bg-sky-50 text-sky-700",
    chip: "bg-sky-50 text-sky-800"
}, {
    border: "hover:border-orange-200",
    gradient: "from-orange-50 via-white to-amber-50",
    icon: "bg-orange-50 text-orange-700 group-hover:bg-orange-500 group-hover:text-white",
    badge: "bg-orange-50 text-orange-700",
    chip: "bg-orange-50 text-orange-900"
}, {
    border: "hover:border-rose-200",
    gradient: "from-rose-50 via-white to-pink-50",
    icon: "bg-rose-50 text-rose-700 group-hover:bg-rose-500 group-hover:text-white",
    badge: "bg-rose-50 text-rose-700",
    chip: "bg-rose-50 text-rose-900"
}, {
    border: "hover:border-violet-200",
    gradient: "from-violet-50 via-white to-fuchsia-50",
    icon: "bg-violet-50 text-violet-700 group-hover:bg-violet-600 group-hover:text-white",
    badge: "bg-violet-50 text-violet-700",
    chip: "bg-violet-50 text-violet-900"
}, {
    border: "hover:border-emerald-200",
    gradient: "from-emerald-50 via-white to-teal-50",
    icon: "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white",
    badge: "bg-emerald-50 text-emerald-700",
    chip: "bg-emerald-50 text-emerald-900"
}], fi = [{
    question: "بیشترین مشکل فعلی شما مربوط به کدام مورد است؟",
    options: [{
        label: "درد قفسه سینه یا تپش قلب",
        department: "قلب و عروق",
        severity: 3
    }, {label: "سردرد، سرگیجه یا بی‌حسی", department: "اعصاب و روان", severity: 2}, {
        label: "درد استخوان، مفصل یا کمر",
        department: "ارتوپدی",
        severity: 1
    }, {label: "علائم عمومی مثل تب، ضعف یا بدن‌درد", department: "درمانگاه عمومی", severity: 1}]
}, {
    question: "شدت علائم شما چقدر است؟",
    options: [{
        label: "خفیف و قابل تحمل",
        department: "درمانگاه عمومی",
        severity: 1
    }, {label: "متوسط و مزاحم فعالیت روزانه", department: "داخلی", severity: 2}, {
        label: "شدید یا ناگهانی",
        department: "درمانگاه عمومی",
        severity: 3
    }]
}, {
    question: "کدام علامت همراه را دارید؟",
    options: [{
        label: "تنگی نفس، تعریق یا درد منتشرشونده",
        department: "قلب و عروق",
        severity: 3
    }, {label: "تهوع، دل‌درد یا مشکلات گوارشی", department: "داخلی", severity: 2}, {
        label: "کاهش بینایی یا درد چشم",
        department: "چشم",
        severity: 2
    }, {label: "سرفه، گلودرد یا درد گوش", department: "گوش، حلق و بینی", severity: 1}]
}, {
    question: "این مشکل از چه زمانی شروع شده است؟",
    options: [{label: "امروز یا به‌صورت ناگهانی", department: "درمانگاه عمومی", severity: 3}, {
        label: "چند روز اخیر",
        department: "داخلی",
        severity: 2
    }, {label: "چند هفته یا بیشتر", department: "درمانگاه عمومی", severity: 1}]
}], gS = [{
    icon: h.jsx(y2, {size: 26}),
    title: "پزشکان مجرب",
    desc: "تیم پزشکی با بیش از ۱۰ سال سابقه و تخصص",
    gradient: "from-teal-500 to-cyan-400",
    soft: "from-teal-50 to-cyan-50",
    border: "hover:border-teal-200"
}, {
    icon: h.jsx(r0, {size: 26}),
    title: "نوبت‌گیری سریع",
    desc: "رزرو آنلاین در کمتر از دو دقیقه",
    gradient: "from-sky-500 to-blue-400",
    soft: "from-sky-50 to-blue-50",
    border: "hover:border-sky-200"
}, {
    icon: h.jsx(e0, {size: 26}),
    title: "تجهیزات مدرن",
    desc: "به‌روزترین دستگاه‌های پزشکی اروپایی",
    gradient: "from-emerald-500 to-teal-400",
    soft: "from-emerald-50 to-teal-50",
    border: "hover:border-emerald-200"
}, {
    icon: h.jsx(n0, {size: 26}),
    title: "محیط آرام",
    desc: "فضایی حرفه‌ای، آرام و بدون انتظار طولانی",
    gradient: "from-violet-500 to-fuchsia-400",
    soft: "from-violet-50 to-fuchsia-50",
    border: "hover:border-violet-200"
}, {
    icon: h.jsx(iu, {size: 26}),
    title: "پاسخ‌گویی منظم",
    desc: "پشتیبانی از ساعت ۸ صبح تا ۹ شب",
    gradient: "from-amber-500 to-orange-400",
    soft: "from-amber-50 to-orange-50",
    border: "hover:border-amber-200"
}, {
    icon: h.jsx(qm, {size: 26}),
    title: "نوبت همان روز",
    desc: "در اکثر تخصص‌ها امکان ویزیت فوری",
    gradient: "from-rose-500 to-pink-400",
    soft: "from-rose-50 to-pink-50",
    border: "hover:border-rose-200"
}], yS = [{icon: h.jsx(I2, {size: 18}), name: "قلب و عروق"}, {
    icon: h.jsx(Zm, {size: 18}),
    name: "مغز و اعصاب"
}, {icon: h.jsx(Ym, {size: 18}), name: "ارتوپدی"}, {
    icon: h.jsx(su, {size: 18}),
    name: "چشم‌پزشکی"
}, {icon: h.jsx(ru, {size: 18}), name: "زنان و زایمان"}, {icon: h.jsx(Lu, {size: 18}), name: "گوارش"}], Zt = {
    hidden: {opacity: 0, y: 24},
    visible: n => ({opacity: 1, y: 0, transition: {delay: n * .08, duration: .5, ease: "easeOut"}})
};

function vS() {
    var X;
    const [n, r] = H.useState(!1), [s, a] = H.useState(null), [u, f] = H.useState(!1), [d, p] = H.useState(!1), [g, v] = H.useState(!1), [y, x] = H.useState(!1), [S, N] = H.useState(0), [b, A] = H.useState([]),
        z = P => {
            a(P || null), r(!0)
        }, R = b.reduce((P, K) => {
            const $ = (P.scores[K.department] || 0) + K.severity;
            return {maxSeverity: Math.max(P.maxSeverity, K.severity), scores: {...P.scores, [K.department]: $}}
        }, {maxSeverity: 0, scores: {}}),
        U = ((X = Object.entries(R.scores).sort((P, K) => K[1] - P[1])[0]) == null ? void 0 : X[0]) || "درمانگاه عمومی",
        I = S >= fi.length, F = () => {
            N(0), A([])
        };
    return h.jsxs("div", {
        dir: "rtl",
        className: "min-h-screen overflow-x-hidden",
        style: {fontFamily: "'Vazirmatn', sans-serif", background: "#F0F7FA"},
        children: [h.jsxs("nav", {
            className: "fixed top-4 left-0 right-0 z-40 px-4 sm:px-6", children: [h.jsxs("div", {
                className: "max-w-5xl mx-auto px-4 sm:px-5 h-14 flex items-center justify-between rounded-full border border-white/60 bg-white/65 backdrop-blur-xl shadow-xl shadow-slate-900/10",
                children: [h.jsxs("div", {
                    className: "flex items-center gap-2.5",
                    children: [h.jsx("div", {
                        className: "w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center",
                        children: h.jsx(Bn, {size: 17, className: "text-white"})
                    }), h.jsxs("div", {
                        children: [h.jsx("div", {
                            className: "font-ayandeh-bold text-slate-800",
                            style: {fontSize: "0.7rem", lineHeight: 1.1},
                            children: "درمانگاه فرهنگیان"
                        }), h.jsx("div", {
                            className: "text-teal-600",
                            style: {fontSize: "0.65rem", fontWeight: 600, lineHeight: 1},
                            children: "مرکز جامع درمانی"
                        })]
                    })]
                }), h.jsx("div", {
                    className: "hidden md:flex items-center gap-5",
                    children: ["خدمات", "پزشکان", "بخش‌ها", "درباره ما", "تماس"].map(P => h.jsx("button", {
                        type: "button",
                        onClick: () => P === "بخش‌ها" && p(!0),
                        className: "text-slate-600 hover:text-teal-600 transition-colors",
                        style: {fontSize: "0.82rem", fontWeight: 600},
                        children: P
                    }, P))
                }), h.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [h.jsxs("a", {
                        href: "tel:02188888888",
                        className: "hidden sm:flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors",
                        style: {fontSize: "0.8rem", fontWeight: 600},
                        children: [h.jsx(pi, {size: 15}), h.jsx("span", {dir: "ltr", children: "۰۱۱-۴۲۰۲۳۷۶۸"})]
                    }), h.jsx("button", {
                        onClick: () => z(),
                        className: "px-4 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-all",
                        style: {fontSize: "0.82rem", fontWeight: 700},
                        children: "نوبت‌گیری"
                    }), h.jsx("button", {
                        className: "md:hidden p-2 rounded-full hover:bg-white/70 transition-colors",
                        onClick: () => f(!u),
                        children: u ? h.jsx(mi, {size: 20, className: "text-slate-600"}) : h.jsx($2, {
                            size: 20,
                            className: "text-slate-600"
                        })
                    })]
                })]
            }), u && h.jsxs("div", {
                className: "absolute left-4 right-4 top-16 md:hidden max-w-5xl mx-auto rounded-3xl border border-white/60 bg-white/85 backdrop-blur-xl shadow-xl shadow-slate-900/10 px-5 py-4 flex flex-col gap-3",
                children: [["خدمات", "پزشکان", "بخش‌ها", "درباره ما", "تماس"].map(P => h.jsx("button", {
                    type: "button",
                    onClick: () => {
                        P === "بخش‌ها" && p(!0), f(!1)
                    },
                    className: "text-slate-600 text-right py-2 border-b border-slate-50",
                    style: {fontSize: "0.95rem", fontWeight: 500},
                    children: P
                }, P)), h.jsxs("a", {
                    href: "tel:02188888888",
                    className: "flex items-center gap-2 text-teal-600 py-2",
                    style: {fontSize: "0.9rem", fontWeight: 600},
                    children: [h.jsx(pi, {size: 15}), "۰۱۱-۴۲۰۲۳۷۶۸"]
                })]
            })]
        }), h.jsxs("section", {
            className: "relative overflow-hidden",
            children: [h.jsx("div", {
                className: "absolute inset-0 bg-cover bg-center opacity-60 md:hidden",
                style: {
                    backgroundImage: "url('1.jpg')",
                    WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 55%)",
                    maskImage: "linear-gradient(to top, transparent 0%, black 55%)"
                }
            }), h.jsx("div", {className: "absolute inset-0 bg-gradient-to-b from-teal-950/65 via-teal-800/70 to-teal-700/75 md:hidden"}), h.jsx("div", {className: "absolute inset-0 hidden md:block bg-gradient-to-br from-teal-700 via-teal-600 to-sky-500"}), h.jsx("div", {
                className: "absolute inset-0 opacity-20",
                style: {
                    backgroundImage: "repeating-linear-gradient(135deg, transparent 0 9px, rgba(255, 255, 255, 0.28) 9px 11px, transparent 11px 20px)",
                    WebkitMaskImage: "linear-gradient(115deg, transparent 0%, black 18%, black 82%, transparent 100%)",
                    maskImage: "linear-gradient(115deg, transparent 0%, black 18%, black 82%, transparent 100%)"
                }
            }), h.jsx("div", {
                className: "absolute inset-0 opacity-10",
                style: {backgroundImage: "radial-gradient(circle at 20% 80%, #ffffff 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 50%)"}
            }), h.jsx("div", {className: "absolute -left-20 -top-20 w-72 h-72 rounded-full bg-white/5 blur-3xl"}), h.jsx("div", {className: "absolute -right-10 bottom-0 w-96 h-96 rounded-full bg-sky-300/10 blur-3xl"}), h.jsxs("div", {
                className: "relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-24 md:pt-36 md:pb-32 grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 md:gap-12 items-center",
                children: [h.jsxs(Ie.div, {
                    className: "text-center md:text-right",
                    initial: {opacity: 0, y: 30},
                    animate: {opacity: 1, y: 0},
                    transition: {duration: .6},
                    children: [h.jsxs("h1", {
                        className: "font-ayandeh-black text-white mb-4",
                        style: {fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.45},
                        children: ["تکیه گاهی امن،", h.jsx("br", {}), h.jsx("span", {
                            className: "text-orange-300 drop-shadow-[0_3px_10px_rgba(154,52,18,0.65)]",
                            children: "برای سلامت فرهنگیان"
                        })]
                    }), h.jsx("p", {
                        className: "text-teal-100 mb-8 leading-relaxed mx-auto md:mx-0",
                        style: {fontSize: "1rem", maxWidth: "420px"},
                        children: "درمانگاه فرهنگیان قائمشهر با تیمی از پزشکان مجرب و تجهیزات پیشرفته، خدمات درمانی جامع را با کیفیتی بی‌نظیر ارائه می‌دهد."
                    }), h.jsxs("div", {
                        className: "flex flex-wrap items-center justify-center md:justify-start gap-3",
                        children: [h.jsxs("button", {
                            onClick: () => z(),
                            className: "flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-white text-teal-700 hover:bg-teal-50 transition-all shadow-xl shadow-teal-900/20 hover:shadow-2xl hover:-translate-y-0.5",
                            style: {fontSize: "1rem", fontWeight: 800},
                            children: [h.jsx(eo, {size: 18}), "نوبت‌گیری آنلاین"]
                        }), h.jsxs("button", {
                            onClick: () => {
                                F(), v(!0)
                            },
                            className: "flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-orange-400 text-orange-950 hover:bg-orange-300 transition-all shadow-xl shadow-orange-950/20 hover:-translate-y-0.5",
                            style: {fontSize: "0.95rem", fontWeight: 600},
                            children: ["مشاوره هوشمند", h.jsx("img", {
                                src: "council-icon.png",
                                alt: "",
                                className: "w-7 h-7 object-contain"
                            })]
                        })]
                    }), h.jsx("div", {
                        className: "flex flex-wrap items-center justify-center md:justify-start gap-8 mt-7 pt-6 border-t border-white/15",
                        children: [{val: "+۵۰", label: "پزشک متخصص"}, {val: "+۱۵K", label: "بیمار راضی"}, {
                            val: "۱۲",
                            label: "سال تجربه"
                        }].map(({
                                    val: P,
                                    label: K
                                }) => h.jsxs("div", {
                            className: "flex flex-col items-center md:items-start",
                            children: [h.jsx("span", {
                                className: "text-white",
                                style: {fontSize: "1.4rem", fontWeight: 800},
                                children: P
                            }), h.jsx("span", {
                                className: "text-teal-200",
                                style: {fontSize: "0.78rem", fontWeight: 500},
                                children: K
                            })]
                        }, K))
                    })]
                }), h.jsx(Ie.div, {
                    initial: {opacity: 0, x: 40},
                    animate: {opacity: 1, x: 0},
                    transition: {duration: .7, delay: .15},
                    className: "hidden md:flex justify-center min-w-0 w-full",
                    children: h.jsx("div", {
                        className: "relative w-full max-w-[34rem]",
                        children: h.jsx("div", {
                            className: "w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20",
                            children: h.jsx("img", {
                                src: "1.jpg",
                                alt: "پزشک متخصص درمانگاه فرهنگیان قائمشهر",
                                className: "w-full h-full object-cover object-right"
                            })
                        })
                    })
                })]
            }), h.jsx("div", {
                className: "absolute bottom-0 left-0 right-0",
                children: h.jsxs("svg", {
                    viewBox: "0 0 1440 60",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    preserveAspectRatio: "none",
                    style: {width: "100%", height: "60px", display: "block"},
                    children: [h.jsx("defs", {
                        children: h.jsxs("linearGradient", {
                            id: "hero-divider-line",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [h.jsx("stop", {
                                offset: "0%",
                                stopColor: "#F0F7FA",
                                stopOpacity: "0"
                            }), h.jsx("stop", {
                                offset: "28%",
                                stopColor: "#F0F7FA",
                                stopOpacity: "1"
                            }), h.jsx("stop", {
                                offset: "72%",
                                stopColor: "#F0F7FA",
                                stopOpacity: "1"
                            }), h.jsx("stop", {offset: "100%", stopColor: "#F0F7FA", stopOpacity: "0"})]
                        })
                    }), h.jsx("path", {
                        d: "M0 8C300 32 480 38 720 38C960 38 1140 32 1440 8V60H0Z",
                        fill: "#F0F7FA"
                    }), h.jsx("path", {
                        d: "M0 -6C300 18 480 24 720 24C960 24 1140 18 1440 -6",
                        stroke: "url(#hero-divider-line)",
                        strokeWidth: "2",
                        strokeLinecap: "round"
                    })]
                })
            })]
        }), h.jsxs("section", {
            id: "departments",
            className: "py-20 max-w-6xl mx-auto px-4 sm:px-6",
            children: [h.jsxs(Ie.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: {once: !0},
                variants: Zt,
                custom: 0,
                className: "text-center mb-12",
                children: [h.jsx("div", {
                    className: "inline-block bg-teal-50 text-teal-700 px-4 py-1.5 rounded-full mb-4",
                    style: {fontSize: "0.8rem", fontWeight: 700},
                    children: "بخش‌های درمانی"
                }), h.jsx("h2", {
                    className: "font-ayandeh-bold text-slate-800",
                    style: {fontSize: "clamp(1.5rem, 3vw, 2rem)"},
                    children: "درمانگاه فرهنگیان در سه بخش، آماده ارائه خدمات به شما میباشد"
                })]
            }), h.jsx("div", {
                className: "grid md:grid-cols-3 gap-6",
                children: [{
                    id: "general",
                    icon: h.jsx(yo, {size: 32}),
                    title: "عمومی",
                    desc: "ویزیت پزشک عمومی، معاینات دوره‌ای، چکاپ و بهداشت خانواده",
                    iconBg: "bg-white text-teal-700",
                    accentBg: "bg-teal-600",
                    hoverBorder: "hover:border-teal-300",
                    imageGradient: "from-teal-200/70 via-teal-100/45 to-transparent",
                    bgImage: "url('general.jpg')",
                    bgPosition: "center 35%",
                    features: ["چکاپ عمومی", "بیماری‌های شایع", "واکسیناسیون"],
                    docCount: "۸ پزشک"
                }, {
                    id: "specialist",
                    icon: h.jsx(Bn, {size: 32}),
                    title: "تخصصی",
                    desc: "مشاوره با متخصصان در رشته‌های قلب، اعصاب، ارتوپدی، چشم و بیش از ۱۲ تخصص",
                    iconBg: "bg-white text-sky-700",
                    accentBg: "bg-sky-600",
                    hoverBorder: "hover:border-sky-300",
                    imageGradient: "from-sky-200/70 via-sky-100/45 to-transparent",
                    bgImage: "url('special.jpg')",
                    bgPosition: "center 45%",
                    features: ["قلب و عروق", "مغز و اعصاب", "ارتوپدی"],
                    docCount: "+۳۵ متخصص"
                }, {
                    id: "paraclinic",
                    icon: h.jsx(Lu, {size: 32}),
                    title: "پاراکلینیک",
                    desc: "آزمایشگاه، تصویربرداری، سونوگرافی، نوار قلب و نمونه‌گیری",
                    iconBg: "bg-white text-orange-700",
                    accentBg: "bg-orange-500",
                    hoverBorder: "hover:border-orange-300",
                    imageGradient: "from-orange-200/70 via-orange-100/45 to-transparent",
                    bgImage: "url('paraclinic.jpg')",
                    bgPosition: "center 55%",
                    features: ["آزمایشگاه", "MRI / CT-Scan", "سونوگرافی"],
                    docCount: "۶ خدمت"
                }].map((P, K) => h.jsxs(Ie.div, {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {once: !0},
                    variants: Zt,
                    custom: K + 1,
                    className: `group relative overflow-hidden bg-white rounded-3xl p-7 border-2 border-slate-100 ${P.hoverBorder} hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col`,
                    onClick: () => z(P.id),
                    children: [h.jsx("div", {
                        className: "absolute inset-0 bg-cover bg-center opacity-60 grayscale group-hover:opacity-65 transition-opacity duration-300",
                        style: {backgroundImage: P.bgImage, backgroundPosition: P.bgPosition}
                    }), h.jsx("div", {className: `absolute inset-0 bg-gradient-to-b ${P.imageGradient}`}), h.jsx("div", {className: "absolute inset-0 bg-gradient-to-br from-white/55 via-white/45 to-white/28"}), h.jsx("div", {
                        className: `relative w-16 h-16 rounded-2xl ${P.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`,
                        children: P.icon
                    }), h.jsx("h3", {
                        className: "font-ayandeh-bold relative text-slate-800 mb-2",
                        style: {fontSize: "1.45rem"},
                        children: P.title
                    }), h.jsx("p", {
                        className: "relative text-slate-800 mb-5 flex-1 leading-relaxed",
                        style: {fontSize: "0.87rem"},
                        children: P.desc
                    }), h.jsx("div", {
                        className: "relative flex flex-wrap gap-2 mb-5",
                        children: P.features.map($ => h.jsx("span", {
                            className: "bg-slate-50 text-slate-600 px-3 py-1 rounded-full border border-slate-100",
                            style: {fontSize: "0.75rem", fontWeight: 600},
                            children: $
                        }, $))
                    }), h.jsxs("div", {
                        className: "relative flex items-center justify-between pt-4 border-t border-slate-100",
                        children: [h.jsx("span", {
                            className: "text-slate-400",
                            style: {fontSize: "0.78rem", fontWeight: 600},
                            children: P.docCount
                        }), h.jsxs("div", {
                            className: `flex items-center gap-1.5 text-white ${P.accentBg} px-4 py-2 rounded-xl group-hover:gap-2.5 transition-all`,
                            style: {fontSize: "0.82rem", fontWeight: 700},
                            children: ["رزرو نوبت", h.jsx(gr, {size: 14})]
                        })]
                    })]
                }, P.id))
            })]
        }), h.jsx("section", {
            className: "py-20 bg-white border-y border-slate-100", children: h.jsxs("div", {
                className: "max-w-6xl mx-auto px-4 sm:px-6",
                children: [h.jsxs(Ie.div, {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {once: !0},
                    variants: Zt,
                    custom: 0,
                    className: "text-center mb-12",
                    children: [h.jsx("div", {
                        className: "inline-block bg-sky-50 text-sky-700 px-4 py-1.5 rounded-full mb-4",
                        style: {fontSize: "0.8rem", fontWeight: 700},
                        children: "چرا ما؟"
                    }), h.jsx("h2", {
                        className: "font-ayandeh-bold text-slate-800 mb-3",
                        style: {fontSize: "clamp(1.5rem, 3vw, 2rem)"},
                        children: "تجربه‌ای متفاوت از مراقبت پزشکی"
                    }), h.jsx("p", {
                        className: "text-slate-500 max-w-md mx-auto",
                        style: {fontSize: "0.95rem"},
                        children: "ما معتقدیم مراقبت از سلامت باید آسان، سریع و قابل اعتماد باشد"
                    })]
                }), h.jsx("div", {
                    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: gS.map((P, K) => h.jsxs(Ie.div, {
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {once: !0},
                        variants: Zt,
                        custom: K + 1,
                        className: `group relative overflow-hidden flex items-start gap-4 p-5 rounded-3xl bg-white border border-slate-100 ${P.border} hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/70 transition-all duration-300`,
                        children: [h.jsx("div", {className: `absolute inset-0 bg-gradient-to-br ${P.soft} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}), h.jsx("div", {className: "absolute -left-10 -top-10 w-28 h-28 rounded-full bg-white/80 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"}), h.jsxs("div", {
                            className: "relative w-14 h-14 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-slate-200/70 group-hover:shadow-xl group-hover:shadow-slate-300/70 transition-all duration-300",
                            children: [h.jsx("div", {className: `absolute inset-1 rounded-[1.1rem] bg-gradient-to-br ${P.gradient} opacity-15 group-hover:opacity-100 transition-opacity duration-300`}), h.jsx("div", {
                                className: `relative w-10 h-10 rounded-xl bg-gradient-to-br ${P.gradient} text-white flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300`,
                                children: P.icon
                            }), h.jsx("span", {className: `absolute -left-1 -top-1 w-3 h-3 rounded-full bg-gradient-to-br ${P.gradient} opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity`})]
                        }), h.jsxs("div", {
                            className: "relative",
                            children: [h.jsx("h4", {
                                className: "text-slate-800 mb-1",
                                style: {fontSize: "0.95rem", fontWeight: 700},
                                children: P.title
                            }), h.jsx("p", {
                                className: "text-slate-500 leading-relaxed",
                                style: {fontSize: "0.83rem"},
                                children: P.desc
                            })]
                        })]
                    }, P.title))
                })]
            })
        }), h.jsxs("section", {
            className: "py-20 max-w-6xl mx-auto px-4 sm:px-6",
            children: [h.jsxs(Ie.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: {once: !0},
                variants: Zt,
                custom: 0,
                className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12",
                children: [h.jsxs("div", {
                    children: [h.jsx("div", {
                        className: "inline-block bg-violet-50 text-violet-700 px-4 py-1.5 rounded-full mb-4",
                        style: {fontSize: "0.8rem", fontWeight: 700},
                        children: "تیم پزشکی"
                    }), h.jsx("h2", {
                        className: "font-ayandeh-bold text-slate-800 mb-2",
                        style: {fontSize: "clamp(1.5rem, 3vw, 2rem)"},
                        children: "با پزشکان ما آشنا شوید"
                    }), h.jsx("p", {
                        className: "text-slate-500",
                        style: {fontSize: "0.9rem"},
                        children: "متخصصان مجرب با سال‌ها سابقه درخشان"
                    })]
                }), h.jsxs("button", {
                    onClick: () => x(!0),
                    className: "flex items-center gap-2 text-teal-600 hover:text-teal-700 border-2 border-teal-200 hover:border-teal-300 px-5 py-2.5 rounded-xl transition-all whitespace-nowrap bg-teal-50 hover:bg-teal-100",
                    style: {fontSize: "0.88rem", fontWeight: 700},
                    children: ["مشاهده همه پزشکان", h.jsx(gr, {size: 16})]
                })]
            }), h.jsx("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: i0.map((P, K) => h.jsxs(Ie.div, {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {once: !0},
                    variants: Zt,
                    custom: K + 1,
                    className: "group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300",
                    children: [h.jsxs("div", {
                        className: "relative h-52 overflow-hidden bg-slate-100",
                        children: [h.jsx("img", {
                            src: P.photo,
                            alt: P.name,
                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                            style: {objectPosition: "center 18%"}
                        }), h.jsx("div", {
                            className: "absolute top-3 right-3",
                            children: h.jsx("span", {
                                className: `px-2.5 py-1 rounded-full text-white ${P.available === "امروز" ? "bg-emerald-500" : P.available === "فردا" ? "bg-amber-500" : "bg-slate-500"}`,
                                style: {fontSize: "0.7rem", fontWeight: 700},
                                children: P.available
                            })
                        })]
                    }), h.jsxs("div", {
                        className: "p-4",
                        children: [h.jsx("h4", {
                            className: "text-slate-800 mb-0.5",
                            style: {fontSize: "0.92rem", fontWeight: 700},
                            children: P.name
                        }), h.jsx("div", {
                            className: "text-teal-600 mb-1",
                            style: {fontSize: "0.78rem", fontWeight: 600},
                            children: P.specialty
                        }), h.jsx("p", {
                            className: "text-slate-400 mb-3",
                            style: {fontSize: "0.75rem"},
                            children: P.description
                        }), h.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [h.jsxs("div", {
                                className: "flex items-center gap-1",
                                children: [h.jsx(op, {
                                    size: 13,
                                    className: "text-amber-400 fill-amber-400"
                                }), h.jsx("span", {
                                    className: "text-slate-700",
                                    style: {fontSize: "0.78rem", fontWeight: 700},
                                    children: P.rating
                                }), h.jsxs("span", {
                                    className: "text-slate-400",
                                    style: {fontSize: "0.72rem"},
                                    children: ["(", P.reviews, ")"]
                                })]
                            }), h.jsx("button", {
                                onClick: () => z(P.dept),
                                className: "text-teal-600 bg-teal-50 hover:bg-teal-600 hover:text-white px-3 py-1.5 rounded-lg transition-all",
                                style: {fontSize: "0.75rem", fontWeight: 700},
                                children: "رزرو نوبت"
                            })]
                        })]
                    })]
                }, P.id))
            }), h.jsx("div", {
                className: "mt-10 flex flex-wrap gap-3 justify-center",
                children: yS.map(P => h.jsxs("button", {
                    onClick: () => z("specialist"),
                    className: "flex items-center gap-2 bg-white border border-slate-200 hover:border-teal-300 hover:bg-teal-50 text-slate-600 hover:text-teal-700 px-4 py-2 rounded-xl transition-all",
                    style: {fontSize: "0.82rem", fontWeight: 600},
                    children: [P.icon, P.name]
                }, P.name))
            })]
        }), h.jsx("section", {
            className: "py-16 bg-gradient-to-br from-slate-800 to-slate-900", children: h.jsxs("div", {
                className: "max-w-6xl mx-auto px-4 sm:px-6",
                children: [h.jsxs(Ie.div, {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {once: !0},
                    variants: Zt,
                    custom: 0,
                    className: "text-center mb-12",
                    children: [h.jsx("div", {
                        className: "inline-block bg-white/10 text-teal-300 px-4 py-1.5 rounded-full mb-4",
                        style: {fontSize: "0.8rem", fontWeight: 700},
                        children: "پاراکلینیک"
                    }), h.jsx("h2", {
                        className: "font-ayandeh-bold text-white mb-3",
                        style: {fontSize: "clamp(1.4rem, 3vw, 1.9rem)"},
                        children: "خدمات آزمایشگاهی و تصویربرداری"
                    }), h.jsx("p", {
                        className: "text-slate-400 max-w-md mx-auto",
                        style: {fontSize: "0.9rem"},
                        children: "با پیشرفته‌ترین دستگاه‌ها و دقیق‌ترین روش‌های تشخیصی"
                    })]
                }), h.jsx("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                    children: pS.map((P, K) => h.jsxs(Ie.button, {
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {once: !0},
                        variants: Zt,
                        custom: K + 1,
                        onClick: () => z("paraclinic"),
                        className: "group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-5 text-right transition-all duration-300 flex items-start gap-4",
                        children: [h.jsx("div", {
                            className: `w-11 h-11 rounded-xl ${P.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`,
                            children: P.icon
                        }), h.jsxs("div", {
                            children: [h.jsx("div", {
                                className: "text-white mb-1",
                                style: {fontSize: "0.9rem", fontWeight: 700},
                                children: P.name
                            }), h.jsx("div", {
                                className: "text-slate-400",
                                style: {fontSize: "0.75rem"},
                                children: P.desc
                            })]
                        })]
                    }, P.name))
                })]
            })
        }), h.jsx("section", {
            className: "py-20 px-4", children: h.jsx(Ie.div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: {once: !0},
                variants: Zt,
                custom: 0,
                className: "max-w-4xl mx-auto",
                children: h.jsxs("div", {
                    className: "group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-500 via-amber-500 to-rose-500 shadow-2xl shadow-orange-200/70",
                    children: [h.jsx("div", {
                        className: "absolute inset-0 opacity-20",
                        style: {backgroundImage: "repeating-linear-gradient(135deg, transparent 0 12px, rgba(255, 255, 255, 0.45) 12px 14px, transparent 14px 26px)"}
                    }), h.jsx("div", {className: "absolute -right-12 -top-12 w-52 h-52 rounded-full bg-white/20 blur-sm group-hover:scale-110 transition-transform duration-500"}), h.jsx("div", {className: "absolute -left-12 -bottom-14 w-72 h-72 rounded-full bg-rose-900/15 blur-2xl"}), h.jsx("div", {className: "absolute left-14 top-10 w-24 h-24 rounded-full bg-yellow-200/25 blur-xl"}), h.jsx("div", {
                        className: "relative bg-white/10 backdrop-blur-sm px-7 py-9 md:px-10 md:py-10",
                        children: h.jsxs("div", {
                            className: "grid md:grid-cols-[1fr_auto] gap-8 items-center text-center md:text-right",
                            children: [h.jsxs("div", {
                                children: [h.jsxs("div", {
                                    className: "inline-flex items-center gap-2 rounded-full bg-white/55 px-4 py-1.5 text-orange-900 mb-5",
                                    style: {fontSize: "0.78rem", fontWeight: 700},
                                    children: [h.jsx(r0, {size: 15}), "رزرو سریع و بدون انتظار"]
                                }), h.jsx("h2", {
                                    className: "font-ayandeh-bold text-orange-950 mb-3",
                                    style: {fontSize: "clamp(1.55rem, 3vw, 2.25rem)", lineHeight: 1.25},
                                    children: "همین حالا نوبت بگیرید"
                                }), h.jsx("p", {
                                    className: "text-slate-800 mb-6 max-w-lg mx-auto md:mx-0 leading-relaxed",
                                    style: {fontSize: "0.98rem", fontWeight: 600},
                                    children: "نوبت‌گیری آنلاین، بدون صف، بدون انتظار — در کمتر از دو دقیقه نوبت شما رزرو می‌شود"
                                }), h.jsx("div", {
                                    className: "flex flex-wrap items-center justify-center md:justify-start gap-3 mb-7",
                                    children: ["پاسخ‌گویی سریع", "انتخاب پزشک", "تأیید پیامکی"].map(P => h.jsx("span", {
                                        className: "rounded-full bg-white/45 px-3 py-1 text-orange-950",
                                        style: {fontSize: "0.76rem", fontWeight: 700},
                                        children: P
                                    }, P))
                                }), h.jsxs("div", {
                                    className: "flex flex-wrap items-center justify-center md:justify-start gap-4",
                                    children: [h.jsxs("button", {
                                        onClick: () => z(),
                                        className: "flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-white text-orange-600 hover:bg-orange-50 transition-all shadow-xl shadow-orange-900/15 hover:-translate-y-0.5",
                                        style: {fontSize: "1rem", fontWeight: 800},
                                        children: [h.jsx(eo, {size: 18}), "نوبت‌گیری آنلاین"]
                                    }), h.jsxs("a", {
                                        href: "tel:02188888888",
                                        className: "flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-orange-950/10 text-orange-950 hover:bg-orange-950/15 transition-all",
                                        style: {fontSize: "0.95rem", fontWeight: 700},
                                        children: [h.jsx(pi, {size: 17}), "تماس مستقیم"]
                                    })]
                                })]
                            }), h.jsxs("div", {
                                className: "relative hidden md:flex w-36 h-36 rounded-[2rem] bg-white/18 border border-white/30 items-center justify-center shadow-2xl shadow-orange-900/15",
                                children: [h.jsx("div", {className: "absolute inset-4 rounded-[1.5rem] bg-white/20 group-hover:rotate-6 transition-transform duration-500"}), h.jsx("div", {
                                    className: "relative w-20 h-20 rounded-3xl bg-white text-orange-500 flex items-center justify-center shadow-xl",
                                    children: h.jsx(eo, {size: 38})
                                }), h.jsx("span", {className: "absolute -top-2 -left-2 w-5 h-5 rounded-full bg-white/70"}), h.jsx("span", {className: "absolute -bottom-3 right-5 w-8 h-8 rounded-full bg-yellow-200/50 blur-sm"})]
                            })]
                        })
                    })]
                })
            })
        }), h.jsx("footer", {
            className: "bg-slate-900 text-slate-300", children: h.jsxs("div", {
                className: "max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8", children: [h.jsxs("div", {
                    className: "grid grid-cols-2 lg:grid-cols-4 gap-10 mb-12", children: [h.jsxs("div", {
                        className: "col-span-2 lg:col-span-1",
                        children: [h.jsxs("div", {
                            className: "flex items-center gap-2.5 mb-4",
                            children: [h.jsx("div", {
                                className: "w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center",
                                children: h.jsx(Bn, {size: 18, className: "text-white"})
                            }), h.jsxs("div", {
                                children: [h.jsx("div", {
                                    className: "text-white",
                                    style: {fontSize: "1rem", fontWeight: 800},
                                    children: "درمانگاه فرهنگیان قائمشهر"
                                }), h.jsx("div", {
                                    className: "text-teal-400",
                                    style: {fontSize: "0.65rem", fontWeight: 600},
                                    children: "مرکز جامع درمانی"
                                })]
                            })]
                        }), h.jsx("p", {
                            className: "text-slate-400 leading-relaxed",
                            style: {fontSize: "0.83rem"},
                            children: "ارائه خدمات درمانی با کیفیت و قابل اعتماد برای تمام اعضای خانواده"
                        }), h.jsx("div", {
                            className: "flex items-center gap-3 mt-5",
                            children: [{icon: h.jsx(F2, {size: 16}), label: "اینستاگرام"}, {
                                icon: h.jsx(Jm, {size: 16}),
                                label: "واتساپ"
                            }].map(({icon: P, label: K}) => h.jsx("a", {
                                href: "#",
                                "aria-label": K,
                                className: "w-9 h-9 rounded-xl bg-white/10 hover:bg-teal-600 flex items-center justify-center transition-colors",
                                children: P
                            }, K))
                        })]
                    }), h.jsxs("div", {
                        children: [h.jsx("h5", {
                            className: "text-white mb-4",
                            style: {fontSize: "0.9rem", fontWeight: 700},
                            children: "دسترسی سریع"
                        }), h.jsx("ul", {
                            className: "flex flex-col gap-2.5",
                            children: ["نوبت‌گیری آنلاین", "پزشکان متخصص", "خدمات پاراکلینیک", "درباره کلینیک", "تماس با ما"].map(P => h.jsx("li", {
                                children: h.jsxs("a", {
                                    href: "#",
                                    className: "text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2",
                                    style: {fontSize: "0.85rem"},
                                    children: [h.jsx(gr, {size: 13, className: "opacity-50"}), P]
                                })
                            }, P))
                        })]
                    }), h.jsxs("div", {
                        children: [h.jsx("h5", {
                            className: "text-white mb-4",
                            style: {fontSize: "0.9rem", fontWeight: 700},
                            children: "تخصص‌ها"
                        }), h.jsx("ul", {
                            className: "flex flex-col gap-2.5",
                            children: ["قلب و عروق", "مغز و اعصاب", "ارتوپدی", "چشم‌پزشکی", "زنان و زایمان", "گوارش"].map(P => h.jsx("li", {
                                children: h.jsxs("a", {
                                    href: "#",
                                    className: "text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2",
                                    style: {fontSize: "0.85rem"},
                                    children: [h.jsx(gr, {size: 13, className: "opacity-50"}), P]
                                })
                            }, P))
                        })]
                    }), h.jsxs("div", {
                        className: "col-span-2 lg:col-span-1",
                        children: [h.jsx("h5", {
                            className: "text-white mb-4",
                            style: {fontSize: "0.9rem", fontWeight: 700},
                            children: "اطلاعات تماس"
                        }), h.jsxs("div", {
                            className: "flex flex-col gap-4",
                            children: [h.jsxs("div", {
                                className: "flex items-start gap-3",
                                children: [h.jsx(W2, {
                                    size: 16,
                                    className: "text-teal-500 mt-0.5 flex-shrink-0"
                                }), h.jsx("span", {
                                    className: "text-slate-400 leading-relaxed",
                                    style: {fontSize: "0.83rem"},
                                    children: "مازندران، قائمشهر، چهار راه فرهنگ، روبروی اداره آموزش و پرورش"
                                })]
                            }), h.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [h.jsx(pi, {
                                    size: 16,
                                    className: "text-teal-500 flex-shrink-0"
                                }), h.jsx("a", {
                                    href: "tel:02188888888",
                                    className: "text-slate-400 hover:text-teal-400 transition-colors",
                                    style: {fontSize: "0.85rem"},
                                    dir: "ltr",
                                    children: "۰۱۱-۴۲۰۲۳۷۶۸"
                                })]
                            }), h.jsxs("div", {
                                className: "flex items-start gap-3",
                                children: [h.jsx(iu, {
                                    size: 16,
                                    className: "text-teal-500 mt-0.5 flex-shrink-0"
                                }), h.jsxs("div", {
                                    className: "text-slate-400",
                                    style: {fontSize: "0.83rem"},
                                    children: [h.jsx("div", {children: "شنبه تا چهارشنبه: ۸ صبح – ۹ شب"}), h.jsx("div", {children: "پنجشنبه: ۸ صبح – ۲ بعدازظهر"}), h.jsx("div", {
                                        className: "text-rose-400 mt-0.5",
                                        children: "جمعه: تعطیل"
                                    })]
                                })]
                            })]
                        })]
                    })]
                }), h.jsxs("div", {
                    className: "border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3",
                    children: [h.jsx("p", {
                        className: "text-slate-500",
                        style: {fontSize: "0.8rem"},
                        children: "© ۱۴۰۵ درمانگاه فرهنگیان قائمشهر — تمامی حقوق محفوظ است"
                    }), h.jsxs("div", {
                        className: "flex items-center gap-2 text-slate-500",
                        style: {fontSize: "0.8rem"},
                        children: [h.jsx(e0, {
                            size: 13,
                            className: "text-teal-600"
                        }), "اطلاعات بیماران کاملاً محرمانه است"]
                    })]
                })]
            })
        }), d && h.jsxs("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4",
            dir: "rtl",
            children: [h.jsx("div", {
                className: "absolute inset-0 bg-slate-950/55 backdrop-blur-sm",
                onClick: () => p(!1)
            }), h.jsxs(Ie.div, {
                initial: {opacity: 0, scale: .96, y: 18},
                animate: {opacity: 1, scale: 1, y: 0},
                exit: {opacity: 0, scale: .96, y: 18},
                transition: {duration: .22, ease: "easeOut"},
                className: "relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[2rem] bg-white shadow-2xl",
                children: [h.jsxs("div", {
                    className: "relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-sky-500 px-6 py-6 md:px-8",
                    children: [h.jsx("div", {
                        className: "absolute inset-0 opacity-15",
                        style: {backgroundImage: "repeating-linear-gradient(135deg, transparent 0 10px, rgba(255, 255, 255, 0.45) 10px 12px, transparent 12px 22px)"}
                    }), h.jsx("div", {className: "absolute -left-10 -top-10 w-40 h-40 rounded-full bg-white/15 blur-xl"}), h.jsxs("div", {
                        className: "relative flex items-start justify-between gap-4",
                        children: [h.jsxs("div", {
                            children: [h.jsxs("div", {
                                className: "inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-teal-50 mb-3",
                                style: {fontSize: "0.76rem", fontWeight: 700},
                                children: [h.jsx(Bn, {size: 14}), "بخش‌های فعال درمانگاه"]
                            }), h.jsx("h2", {
                                className: "font-ayandeh-bold text-white mb-2",
                                style: {fontSize: "clamp(1.35rem, 3vw, 2rem)"},
                                children: "لیست بخش‌های درمانگاه فرهنگیان"
                            }), h.jsx("p", {
                                className: "text-teal-50/90 max-w-xl leading-relaxed",
                                style: {fontSize: "0.9rem"},
                                children: "اطلاعات شیفت کاری و وضعیت فعالیت هر بخش را در کارت‌های زیر مشاهده کنید."
                            })]
                        }), h.jsx("button", {
                            type: "button",
                            onClick: () => p(!1),
                            className: "w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors flex-shrink-0",
                            "aria-label": "بستن",
                            children: h.jsx(mi, {size: 19})
                        })]
                    })]
                }), h.jsx("div", {
                    className: "max-h-[62vh] overflow-y-auto overflow-x-hidden p-5 md:p-6 bg-slate-50",
                    children: h.jsx("div", {
                        className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: mS.map((P, K) => {
                            const $ = up[K % up.length];
                            return h.jsxs("button", {
                                type: "button",
                                onClick: () => {
                                    p(!1), z()
                                },
                                className: `group relative overflow-hidden rounded-3xl bg-white border border-slate-100 p-5 text-right hover:-translate-y-1 ${$.border} hover:shadow-xl hover:shadow-slate-200/70 transition-all duration-300`,
                                children: [h.jsx("div", {className: `absolute inset-0 bg-gradient-to-br ${$.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}), h.jsx("div", {className: "absolute -left-8 -top-8 w-24 h-24 rounded-full bg-white/60 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"}), h.jsxs("div", {
                                    className: "relative flex items-start justify-between gap-3 mb-5",
                                    children: [h.jsx("div", {
                                        className: `w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${$.icon}`,
                                        children: P.icon
                                    }), h.jsx("span", {
                                        className: `rounded-full px-2.5 py-1 ${$.badge}`,
                                        style: {fontSize: "0.72rem", fontWeight: 700},
                                        children: P.status
                                    })]
                                }), h.jsx("h3", {
                                    className: "relative font-ayandeh-bold text-slate-800 mb-3",
                                    style: {fontSize: "1.08rem"},
                                    children: P.title
                                }), h.jsxs("div", {
                                    className: `relative flex items-center justify-between gap-3 rounded-2xl px-3 py-2.5 ${$.chip}`,
                                    children: [h.jsxs("span", {
                                        className: "flex items-center gap-1.5 opacity-75",
                                        style: {fontSize: "0.78rem", fontWeight: 600},
                                        children: [h.jsx(iu, {size: 14}), "شیفت کاری"]
                                    }), h.jsx("span", {
                                        style: {fontSize: "0.82rem", fontWeight: 800},
                                        children: P.shift
                                    })]
                                })]
                            }, P.id)
                        })
                    })
                })]
            })]
        }), g && h.jsxs("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4",
            dir: "rtl",
            children: [h.jsx("div", {
                className: "absolute inset-0 bg-slate-950/55 backdrop-blur-sm",
                onClick: () => v(!1)
            }), h.jsxs(Ie.div, {
                initial: {opacity: 0, scale: .96, y: 18},
                animate: {opacity: 1, scale: 1, y: 0},
                exit: {opacity: 0, scale: .96, y: 18},
                transition: {duration: .22, ease: "easeOut"},
                className: "relative w-full max-w-2xl overflow-hidden rounded-[2rem] bg-white shadow-2xl",
                children: [h.jsxs("div", {
                    className: "relative overflow-hidden bg-gradient-to-br from-orange-500 via-amber-500 to-rose-500 px-6 py-6",
                    children: [h.jsx("div", {
                        className: "absolute inset-0 opacity-15",
                        style: {backgroundImage: "repeating-linear-gradient(135deg, transparent 0 10px, rgba(255, 255, 255, 0.5) 10px 12px, transparent 12px 22px)"}
                    }), h.jsxs("div", {
                        className: "relative flex items-start justify-between gap-4",
                        children: [h.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [h.jsx("div", {
                                className: "w-14 h-14 rounded-2xl bg-white/90 flex items-center justify-center shadow-xl shadow-orange-900/15",
                                children: h.jsx("img", {
                                    src: "council-icon.png",
                                    alt: "",
                                    className: "w-9 h-9 object-contain"
                                })
                            }), h.jsxs("div", {
                                children: [h.jsx("h2", {
                                    className: "font-ayandeh-bold text-orange-950 mb-1",
                                    style: {fontSize: "1.45rem"},
                                    children: "مشاوره هوشمند"
                                }), h.jsx("p", {
                                    className: "text-orange-950/80",
                                    style: {fontSize: "0.86rem", fontWeight: 600},
                                    children: "پاسخ دهید تا نزدیک‌ترین بخش تخصصی پیشنهاد شود"
                                })]
                            })]
                        }), h.jsx("button", {
                            type: "button",
                            onClick: () => v(!1),
                            className: "w-10 h-10 rounded-full bg-white/30 hover:bg-white/45 text-orange-950 flex items-center justify-center transition-colors flex-shrink-0",
                            "aria-label": "بستن",
                            children: h.jsx(mi, {size: 19})
                        })]
                    })]
                }), h.jsx("div", {
                    className: "p-6 md:p-7", children: I ? h.jsxs("div", {
                        className: "text-center",
                        children: [h.jsx("div", {
                            className: "w-20 h-20 rounded-3xl bg-orange-50 text-orange-600 flex items-center justify-center mx-auto mb-5",
                            children: h.jsx(qm, {size: 40})
                        }), h.jsx("h3", {
                            className: "font-ayandeh-bold text-slate-800 mb-3",
                            style: {fontSize: "1.35rem"},
                            children: "پیشنهاد مشاوره هوشمند"
                        }), h.jsx("p", {
                            className: "text-slate-500 leading-relaxed max-w-md mx-auto mb-5",
                            style: {fontSize: "0.92rem"},
                            children: "با توجه به پاسخ‌های شما، مراجعه به بخش زیر می‌تواند مناسب‌تر باشد. این نتیجه جایگزین تشخیص پزشک نیست."
                        }), h.jsxs("div", {
                            className: "rounded-3xl bg-gradient-to-br from-teal-50 to-orange-50 border border-orange-100 p-5 mb-6",
                            children: [h.jsx("div", {
                                className: "text-slate-500 mb-1",
                                style: {fontSize: "0.8rem", fontWeight: 700},
                                children: "بخش پیشنهادی"
                            }), h.jsx("div", {
                                className: "font-ayandeh-bold text-orange-700",
                                style: {fontSize: "1.55rem"},
                                children: U
                            }), R.maxSeverity >= 3 && h.jsx("div", {
                                className: "mt-3 rounded-2xl bg-rose-50 text-rose-700 px-3 py-2",
                                style: {fontSize: "0.78rem", fontWeight: 700},
                                children: "در صورت شدت زیاد، درد قفسه سینه، تنگی نفس یا علائم ناگهانی، مراجعه فوری ضروری است."
                            })]
                        }), h.jsxs("div", {
                            className: "flex flex-wrap items-center justify-center gap-3",
                            children: [h.jsx("button", {
                                type: "button",
                                onClick: () => {
                                    v(!1), z()
                                },
                                className: "px-6 py-3 rounded-2xl bg-orange-500 text-white hover:bg-orange-600 transition-colors",
                                style: {fontSize: "0.92rem", fontWeight: 800},
                                children: "رزرو نوبت"
                            }), h.jsx("button", {
                                type: "button",
                                onClick: F,
                                className: "px-6 py-3 rounded-2xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors",
                                style: {fontSize: "0.92rem", fontWeight: 800},
                                children: "شروع دوباره"
                            })]
                        })]
                    }) : h.jsxs(h.Fragment, {
                        children: [h.jsxs("div", {
                            className: "flex items-center justify-between gap-4 mb-6",
                            children: [h.jsxs("span", {
                                className: "text-slate-500",
                                style: {fontSize: "0.82rem", fontWeight: 700},
                                children: ["سؤال ", S + 1, " از ", fi.length]
                            }), h.jsx("div", {
                                className: "h-2 flex-1 max-w-56 rounded-full bg-slate-100 overflow-hidden",
                                children: h.jsx("div", {
                                    className: "h-full rounded-full bg-gradient-to-l from-orange-500 to-teal-500 transition-all",
                                    style: {width: `${(S + 1) / fi.length * 100}%`}
                                })
                            })]
                        }), h.jsx("h3", {
                            className: "font-ayandeh-bold text-slate-800 mb-5",
                            style: {fontSize: "1.25rem"},
                            children: fi[S].question
                        }), h.jsx("div", {
                            className: "grid gap-3",
                            children: fi[S].options.map(P => h.jsxs("button", {
                                type: "button",
                                onClick: () => {
                                    A(K => [...K, P]), N(K => K + 1)
                                },
                                className: "group flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4 text-right hover:border-orange-200 hover:bg-orange-50 transition-all",
                                children: [h.jsx("span", {
                                    className: "text-slate-700",
                                    style: {fontSize: "0.92rem", fontWeight: 700},
                                    children: P.label
                                }), h.jsx(gr, {
                                    size: 17,
                                    className: "text-slate-300 group-hover:text-orange-500 transition-colors"
                                })]
                            }, P.label))
                        }), S > 0 && h.jsx("button", {
                            type: "button",
                            onClick: () => {
                                A(P => P.slice(0, -1)), N(P => Math.max(0, P - 1))
                            },
                            className: "mt-5 text-slate-500 hover:text-slate-700 transition-colors",
                            style: {fontSize: "0.85rem", fontWeight: 700},
                            children: "بازگشت به سؤال قبل"
                        })]
                    })
                })]
            })]
        }), y && h.jsxs("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4",
            dir: "rtl",
            children: [h.jsx("div", {
                className: "absolute inset-0 bg-slate-950/55 backdrop-blur-sm",
                onClick: () => x(!1)
            }), h.jsxs(Ie.div, {
                initial: {opacity: 0, scale: .96, y: 18},
                animate: {opacity: 1, scale: 1, y: 0},
                exit: {opacity: 0, scale: .96, y: 18},
                transition: {duration: .22, ease: "easeOut"},
                className: "relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-[2rem] bg-white shadow-2xl",
                children: [h.jsxs("div", {
                    className: "relative overflow-hidden bg-gradient-to-br from-violet-600 via-teal-600 to-sky-500 px-6 py-6 md:px-8",
                    children: [h.jsx("div", {
                        className: "absolute inset-0 opacity-15",
                        style: {backgroundImage: "repeating-linear-gradient(135deg, transparent 0 10px, rgba(255, 255, 255, 0.45) 10px 12px, transparent 12px 22px)"}
                    }), h.jsxs("div", {
                        className: "relative flex items-start justify-between gap-4",
                        children: [h.jsxs("div", {
                            children: [h.jsxs("div", {
                                className: "inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-white mb-3",
                                style: {fontSize: "0.76rem", fontWeight: 700},
                                children: [h.jsx(n0, {size: 14}), "فهرست پزشکان"]
                            }), h.jsx("h2", {
                                className: "font-ayandeh-bold text-white mb-2",
                                style: {fontSize: "clamp(1.35rem, 3vw, 2rem)"},
                                children: "پزشکان ایرانی درمانگاه"
                            }), h.jsx("p", {
                                className: "text-white/85 max-w-xl leading-relaxed",
                                style: {fontSize: "0.9rem"},
                                children: "پزشک مورد نظر خود را انتخاب کنید و برای رزرو نوبت وارد مرحله نوبت‌گیری شوید."
                            })]
                        }), h.jsx("button", {
                            type: "button",
                            onClick: () => x(!1),
                            className: "w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors flex-shrink-0",
                            "aria-label": "بستن",
                            children: h.jsx(mi, {size: 19})
                        })]
                    })]
                }), h.jsx("div", {
                    className: "max-h-[62vh] overflow-y-auto overflow-x-hidden p-5 md:p-6 bg-slate-50",
                    children: h.jsx("div", {
                        className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: hS.map(P => h.jsxs("div", {
                            className: "group overflow-hidden rounded-3xl bg-white border border-slate-100 hover:border-teal-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 transition-all duration-300",
                            children: [h.jsxs("div", {
                                className: "relative h-48 overflow-hidden bg-slate-100",
                                children: [h.jsx("img", {
                                    src: P.photo,
                                    alt: P.name,
                                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                    style: {objectPosition: "center 18%"}
                                }), h.jsx("div", {className: "absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent"}), h.jsx("span", {
                                    className: `absolute top-3 right-3 px-2.5 py-1 rounded-full text-white ${P.available === "امروز" ? "bg-emerald-500" : P.available === "فردا" ? "bg-amber-500" : "bg-slate-500"}`,
                                    style: {fontSize: "0.7rem", fontWeight: 700},
                                    children: P.available
                                })]
                            }), h.jsxs("div", {
                                className: "p-4",
                                children: [h.jsx("h3", {
                                    className: "font-ayandeh-bold text-slate-800 mb-1",
                                    style: {fontSize: "1rem"},
                                    children: P.name
                                }), h.jsx("div", {
                                    className: "text-teal-600 mb-2",
                                    style: {fontSize: "0.8rem", fontWeight: 700},
                                    children: P.specialty
                                }), h.jsx("p", {
                                    className: "text-slate-500 leading-relaxed mb-4",
                                    style: {fontSize: "0.76rem"},
                                    children: P.description
                                }), h.jsxs("div", {
                                    className: "flex items-center justify-between gap-3",
                                    children: [h.jsxs("div", {
                                        className: "flex items-center gap-1",
                                        children: [h.jsx(op, {
                                            size: 13,
                                            className: "text-amber-400 fill-amber-400"
                                        }), h.jsx("span", {
                                            className: "text-slate-700",
                                            style: {fontSize: "0.78rem", fontWeight: 700},
                                            children: P.rating
                                        }), h.jsxs("span", {
                                            className: "text-slate-400",
                                            style: {fontSize: "0.72rem"},
                                            children: ["(", P.reviews, ")"]
                                        })]
                                    }), h.jsx("button", {
                                        type: "button",
                                        onClick: () => {
                                            x(!1), z(P.dept)
                                        },
                                        className: "text-teal-600 bg-teal-50 hover:bg-teal-600 hover:text-white px-3 py-1.5 rounded-lg transition-all",
                                        style: {fontSize: "0.75rem", fontWeight: 800},
                                        children: "رزرو نوبت"
                                    })]
                                })]
                            })]
                        }, P.id))
                    })
                })]
            })]
        }), h.jsx(fS, {isOpen: n, onClose: () => r(!1), initialDepartment: s})]
    })
}

uy.createRoot(document.getElementById("root")).render(h.jsx(vS, {}));
