function ii(e, r) {
  for (var t = 0; t < r.length; t++) {
    const n = r[t];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const a in n)
        if (a !== "default" && !(a in e)) {
          const i = Object.getOwnPropertyDescriptor(n, a);
          i && Object.defineProperty(e, a, i.get ? i : {
            enumerable: !0,
            get: () => n[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function oa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vn = { exports: {} }, Dr = {}, mt = { exports: {} }, Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fo;
function si() {
  if (fo)
    return Q;
  fo = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), f = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), S = Symbol.iterator;
  function E(s) {
    return s === null || typeof s != "object" ? null : (s = S && s[S] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var T = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, w = Object.assign, y = {};
  function g(s, d, C) {
    this.props = s, this.context = d, this.refs = y, this.updater = C || T;
  }
  g.prototype.isReactComponent = {}, g.prototype.setState = function(s, d) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, s, d, "setState");
  }, g.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function $() {
  }
  $.prototype = g.prototype;
  function F(s, d, C) {
    this.props = s, this.context = d, this.refs = y, this.updater = C || T;
  }
  var Y = F.prototype = new $();
  Y.constructor = F, w(Y, g.prototype), Y.isPureReactComponent = !0;
  var U = Array.isArray, _ = Object.prototype.hasOwnProperty, G = { current: null }, z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function xe(s, d, C) {
    var A, x = {}, V = null, N = null;
    if (d != null)
      for (A in d.ref !== void 0 && (N = d.ref), d.key !== void 0 && (V = "" + d.key), d)
        _.call(d, A) && !z.hasOwnProperty(A) && (x[A] = d[A]);
    var I = arguments.length - 2;
    if (I === 1)
      x.children = C;
    else if (1 < I) {
      for (var j = Array(I), q = 0; q < I; q++)
        j[q] = arguments[q + 2];
      x.children = j;
    }
    if (s && s.defaultProps)
      for (A in I = s.defaultProps, I)
        x[A] === void 0 && (x[A] = I[A]);
    return { $$typeof: e, type: s, key: V, ref: N, props: x, _owner: G.current };
  }
  function Re(s, d) {
    return { $$typeof: e, type: s.type, key: d, ref: s.ref, props: s.props, _owner: s._owner };
  }
  function B(s) {
    return typeof s == "object" && s !== null && s.$$typeof === e;
  }
  function ve(s) {
    var d = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(C) {
      return d[C];
    });
  }
  var he = /\/+/g;
  function pe(s, d) {
    return typeof s == "object" && s !== null && s.key != null ? ve("" + s.key) : d.toString(36);
  }
  function ne(s, d, C, A, x) {
    var V = typeof s;
    (V === "undefined" || V === "boolean") && (s = null);
    var N = !1;
    if (s === null)
      N = !0;
    else
      switch (V) {
        case "string":
        case "number":
          N = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case e:
            case r:
              N = !0;
          }
      }
    if (N)
      return N = s, x = x(N), s = A === "" ? "." + pe(N, 0) : A, U(x) ? (C = "", s != null && (C = s.replace(he, "$&/") + "/"), ne(x, d, C, "", function(q) {
        return q;
      })) : x != null && (B(x) && (x = Re(x, C + (!x.key || N && N.key === x.key ? "" : ("" + x.key).replace(he, "$&/") + "/") + s)), d.push(x)), 1;
    if (N = 0, A = A === "" ? "." : A + ":", U(s))
      for (var I = 0; I < s.length; I++) {
        V = s[I];
        var j = A + pe(V, I);
        N += ne(V, d, C, j, x);
      }
    else if (j = E(s), typeof j == "function")
      for (s = j.call(s), I = 0; !(V = s.next()).done; )
        V = V.value, j = A + pe(V, I++), N += ne(V, d, C, j, x);
    else if (V === "object")
      throw d = String(s), Error("Objects are not valid as a React child (found: " + (d === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : d) + "). If you meant to render a collection of children, use an array instead.");
    return N;
  }
  function de(s, d, C) {
    if (s == null)
      return s;
    var A = [], x = 0;
    return ne(s, A, "", "", function(V) {
      return d.call(C, V, x++);
    }), A;
  }
  function ye(s) {
    if (s._status === -1) {
      var d = s._result;
      d = d(), d.then(function(C) {
        (s._status === 0 || s._status === -1) && (s._status = 1, s._result = C);
      }, function(C) {
        (s._status === 0 || s._status === -1) && (s._status = 2, s._result = C);
      }), s._status === -1 && (s._status = 0, s._result = d);
    }
    if (s._status === 1)
      return s._result.default;
    throw s._result;
  }
  var L = { current: null }, Ne = { transition: null }, Le = { ReactCurrentDispatcher: L, ReactCurrentBatchConfig: Ne, ReactCurrentOwner: G };
  return Q.Children = { map: de, forEach: function(s, d, C) {
    de(s, function() {
      d.apply(this, arguments);
    }, C);
  }, count: function(s) {
    var d = 0;
    return de(s, function() {
      d++;
    }), d;
  }, toArray: function(s) {
    return de(s, function(d) {
      return d;
    }) || [];
  }, only: function(s) {
    if (!B(s))
      throw Error("React.Children.only expected to receive a single React element child.");
    return s;
  } }, Q.Component = g, Q.Fragment = t, Q.Profiler = a, Q.PureComponent = F, Q.StrictMode = n, Q.Suspense = m, Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Le, Q.cloneElement = function(s, d, C) {
    if (s == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + s + ".");
    var A = w({}, s.props), x = s.key, V = s.ref, N = s._owner;
    if (d != null) {
      if (d.ref !== void 0 && (V = d.ref, N = G.current), d.key !== void 0 && (x = "" + d.key), s.type && s.type.defaultProps)
        var I = s.type.defaultProps;
      for (j in d)
        _.call(d, j) && !z.hasOwnProperty(j) && (A[j] = d[j] === void 0 && I !== void 0 ? I[j] : d[j]);
    }
    var j = arguments.length - 2;
    if (j === 1)
      A.children = C;
    else if (1 < j) {
      I = Array(j);
      for (var q = 0; q < j; q++)
        I[q] = arguments[q + 2];
      A.children = I;
    }
    return { $$typeof: e, type: s.type, key: x, ref: V, props: A, _owner: N };
  }, Q.createContext = function(s) {
    return s = { $$typeof: f, _currentValue: s, _currentValue2: s, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, s.Provider = { $$typeof: i, _context: s }, s.Consumer = s;
  }, Q.createElement = xe, Q.createFactory = function(s) {
    var d = xe.bind(null, s);
    return d.type = s, d;
  }, Q.createRef = function() {
    return { current: null };
  }, Q.forwardRef = function(s) {
    return { $$typeof: l, render: s };
  }, Q.isValidElement = B, Q.lazy = function(s) {
    return { $$typeof: v, _payload: { _status: -1, _result: s }, _init: ye };
  }, Q.memo = function(s, d) {
    return { $$typeof: h, type: s, compare: d === void 0 ? null : d };
  }, Q.startTransition = function(s) {
    var d = Ne.transition;
    Ne.transition = {};
    try {
      s();
    } finally {
      Ne.transition = d;
    }
  }, Q.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Q.useCallback = function(s, d) {
    return L.current.useCallback(s, d);
  }, Q.useContext = function(s) {
    return L.current.useContext(s);
  }, Q.useDebugValue = function() {
  }, Q.useDeferredValue = function(s) {
    return L.current.useDeferredValue(s);
  }, Q.useEffect = function(s, d) {
    return L.current.useEffect(s, d);
  }, Q.useId = function() {
    return L.current.useId();
  }, Q.useImperativeHandle = function(s, d, C) {
    return L.current.useImperativeHandle(s, d, C);
  }, Q.useInsertionEffect = function(s, d) {
    return L.current.useInsertionEffect(s, d);
  }, Q.useLayoutEffect = function(s, d) {
    return L.current.useLayoutEffect(s, d);
  }, Q.useMemo = function(s, d) {
    return L.current.useMemo(s, d);
  }, Q.useReducer = function(s, d, C) {
    return L.current.useReducer(s, d, C);
  }, Q.useRef = function(s) {
    return L.current.useRef(s);
  }, Q.useState = function(s) {
    return L.current.useState(s);
  }, Q.useSyncExternalStore = function(s, d, C) {
    return L.current.useSyncExternalStore(s, d, C);
  }, Q.useTransition = function() {
    return L.current.useTransition();
  }, Q.version = "18.2.0", Q;
}
var Vr = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Vr.exports;
var lo;
function ui() {
  return lo || (lo = 1, function(e, r) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var t = "18.2.0", n = Symbol.for("react.element"), a = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), h = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), g = Symbol.iterator, $ = "@@iterator";
      function F(o) {
        if (o === null || typeof o != "object")
          return null;
        var u = g && o[g] || o[$];
        return typeof u == "function" ? u : null;
      }
      var Y = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, U = {
        transition: null
      }, _ = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, G = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, z = {}, xe = null;
      function Re(o) {
        xe = o;
      }
      z.setExtraStackFrame = function(o) {
        xe = o;
      }, z.getCurrentStack = null, z.getStackAddendum = function() {
        var o = "";
        xe && (o += xe);
        var u = z.getCurrentStack;
        return u && (o += u() || ""), o;
      };
      var B = !1, ve = !1, he = !1, pe = !1, ne = !1, de = {
        ReactCurrentDispatcher: Y,
        ReactCurrentBatchConfig: U,
        ReactCurrentOwner: G
      };
      de.ReactDebugCurrentFrame = z, de.ReactCurrentActQueue = _;
      function ye(o) {
        {
          for (var u = arguments.length, p = new Array(u > 1 ? u - 1 : 0), b = 1; b < u; b++)
            p[b - 1] = arguments[b];
          Ne("warn", o, p);
        }
      }
      function L(o) {
        {
          for (var u = arguments.length, p = new Array(u > 1 ? u - 1 : 0), b = 1; b < u; b++)
            p[b - 1] = arguments[b];
          Ne("error", o, p);
        }
      }
      function Ne(o, u, p) {
        {
          var b = de.ReactDebugCurrentFrame, O = b.getStackAddendum();
          O !== "" && (u += "%s", p = p.concat([O]));
          var K = p.map(function(M) {
            return String(M);
          });
          K.unshift("Warning: " + u), Function.prototype.apply.call(console[o], console, K);
        }
      }
      var Le = {};
      function s(o, u) {
        {
          var p = o.constructor, b = p && (p.displayName || p.name) || "ReactClass", O = b + "." + u;
          if (Le[O])
            return;
          L("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", u, b), Le[O] = !0;
        }
      }
      var d = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(o) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(o, u, p) {
          s(o, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(o, u, p, b) {
          s(o, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(o, u, p, b) {
          s(o, "setState");
        }
      }, C = Object.assign, A = {};
      Object.freeze(A);
      function x(o, u, p) {
        this.props = o, this.context = u, this.refs = A, this.updater = p || d;
      }
      x.prototype.isReactComponent = {}, x.prototype.setState = function(o, u) {
        if (typeof o != "object" && typeof o != "function" && o != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, o, u, "setState");
      }, x.prototype.forceUpdate = function(o) {
        this.updater.enqueueForceUpdate(this, o, "forceUpdate");
      };
      {
        var V = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, N = function(o, u) {
          Object.defineProperty(x.prototype, o, {
            get: function() {
              ye("%s(...) is deprecated in plain JavaScript React classes. %s", u[0], u[1]);
            }
          });
        };
        for (var I in V)
          V.hasOwnProperty(I) && N(I, V[I]);
      }
      function j() {
      }
      j.prototype = x.prototype;
      function q(o, u, p) {
        this.props = o, this.context = u, this.refs = A, this.updater = p || d;
      }
      var J = q.prototype = new j();
      J.constructor = q, C(J, x.prototype), J.isPureReactComponent = !0;
      function Pe() {
        var o = {
          current: null
        };
        return Object.seal(o), o;
      }
      var P = Array.isArray;
      function Ae(o) {
        return P(o);
      }
      function W(o) {
        {
          var u = typeof Symbol == "function" && Symbol.toStringTag, p = u && o[Symbol.toStringTag] || o.constructor.name || "Object";
          return p;
        }
      }
      function We(o) {
        try {
          return Be(o), !1;
        } catch {
          return !0;
        }
      }
      function Be(o) {
        return "" + o;
      }
      function He(o) {
        if (We(o))
          return L("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", W(o)), Be(o);
      }
      function Jr(o, u, p) {
        var b = o.displayName;
        if (b)
          return b;
        var O = u.displayName || u.name || "";
        return O !== "" ? p + "(" + O + ")" : p;
      }
      function cr(o) {
        return o.displayName || "Context";
      }
      function Je(o) {
        if (o == null)
          return null;
        if (typeof o.tag == "number" && L("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
          return o.displayName || o.name || null;
        if (typeof o == "string")
          return o;
        switch (o) {
          case i:
            return "Fragment";
          case a:
            return "Portal";
          case l:
            return "Profiler";
          case f:
            return "StrictMode";
          case S:
            return "Suspense";
          case E:
            return "SuspenseList";
        }
        if (typeof o == "object")
          switch (o.$$typeof) {
            case h:
              var u = o;
              return cr(u) + ".Consumer";
            case m:
              var p = o;
              return cr(p._context) + ".Provider";
            case v:
              return Jr(o, o.render, "ForwardRef");
            case T:
              var b = o.displayName || null;
              return b !== null ? b : Je(o.type) || "Memo";
            case w: {
              var O = o, K = O._payload, M = O._init;
              try {
                return Je(M(K));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var fr = Object.prototype.hasOwnProperty, yr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Xr, Qr, hr;
      hr = {};
      function Ar(o) {
        if (fr.call(o, "ref")) {
          var u = Object.getOwnPropertyDescriptor(o, "ref").get;
          if (u && u.isReactWarning)
            return !1;
        }
        return o.ref !== void 0;
      }
      function nr(o) {
        if (fr.call(o, "key")) {
          var u = Object.getOwnPropertyDescriptor(o, "key").get;
          if (u && u.isReactWarning)
            return !1;
        }
        return o.key !== void 0;
      }
      function Vt(o, u) {
        var p = function() {
          Xr || (Xr = !0, L("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        p.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: p,
          configurable: !0
        });
      }
      function Zr(o, u) {
        var p = function() {
          Qr || (Qr = !0, L("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        p.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: p,
          configurable: !0
        });
      }
      function et(o) {
        if (typeof o.ref == "string" && G.current && o.__self && G.current.stateNode !== o.__self) {
          var u = Je(G.current.type);
          hr[u] || (L('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, o.ref), hr[u] = !0);
        }
      }
      var lr = function(o, u, p, b, O, K, M) {
        var H = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: o,
          key: u,
          ref: p,
          props: M,
          // Record the component responsible for creating this element.
          _owner: K
        };
        return H._store = {}, Object.defineProperty(H._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(H, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: b
        }), Object.defineProperty(H, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: O
        }), Object.freeze && (Object.freeze(H.props), Object.freeze(H)), H;
      };
      function Ut(o, u, p) {
        var b, O = {}, K = null, M = null, H = null, re = null;
        if (u != null) {
          Ar(u) && (M = u.ref, et(u)), nr(u) && (He(u.key), K = "" + u.key), H = u.__self === void 0 ? null : u.__self, re = u.__source === void 0 ? null : u.__source;
          for (b in u)
            fr.call(u, b) && !yr.hasOwnProperty(b) && (O[b] = u[b]);
        }
        var me = arguments.length - 2;
        if (me === 1)
          O.children = p;
        else if (me > 1) {
          for (var ge = Array(me), be = 0; be < me; be++)
            ge[be] = arguments[be + 2];
          Object.freeze && Object.freeze(ge), O.children = ge;
        }
        if (o && o.defaultProps) {
          var Se = o.defaultProps;
          for (b in Se)
            O[b] === void 0 && (O[b] = Se[b]);
        }
        if (K || M) {
          var ke = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          K && Vt(O, ke), M && Zr(O, ke);
        }
        return lr(o, K, M, H, re, G.current, O);
      }
      function Wt(o, u) {
        var p = lr(o.type, u, o.ref, o._self, o._source, o._owner, o.props);
        return p;
      }
      function Yt(o, u, p) {
        if (o == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + o + ".");
        var b, O = C({}, o.props), K = o.key, M = o.ref, H = o._self, re = o._source, me = o._owner;
        if (u != null) {
          Ar(u) && (M = u.ref, me = G.current), nr(u) && (He(u.key), K = "" + u.key);
          var ge;
          o.type && o.type.defaultProps && (ge = o.type.defaultProps);
          for (b in u)
            fr.call(u, b) && !yr.hasOwnProperty(b) && (u[b] === void 0 && ge !== void 0 ? O[b] = ge[b] : O[b] = u[b]);
        }
        var be = arguments.length - 2;
        if (be === 1)
          O.children = p;
        else if (be > 1) {
          for (var Se = Array(be), ke = 0; ke < be; ke++)
            Se[ke] = arguments[ke + 2];
          O.children = Se;
        }
        return lr(o.type, K, M, H, re, me, O);
      }
      function or(o) {
        return typeof o == "object" && o !== null && o.$$typeof === n;
      }
      var rt = ".", zt = ":";
      function Bt(o) {
        var u = /[=:]/g, p = {
          "=": "=0",
          ":": "=2"
        }, b = o.replace(u, function(O) {
          return p[O];
        });
        return "$" + b;
      }
      var gr = !1, tt = /\/+/g;
      function er(o) {
        return o.replace(tt, "$&/");
      }
      function dr(o, u) {
        return typeof o == "object" && o !== null && o.key != null ? (He(o.key), Bt("" + o.key)) : u.toString(36);
      }
      function ar(o, u, p, b, O) {
        var K = typeof o;
        (K === "undefined" || K === "boolean") && (o = null);
        var M = !1;
        if (o === null)
          M = !0;
        else
          switch (K) {
            case "string":
            case "number":
              M = !0;
              break;
            case "object":
              switch (o.$$typeof) {
                case n:
                case a:
                  M = !0;
              }
          }
        if (M) {
          var H = o, re = O(H), me = b === "" ? rt + dr(H, 0) : b;
          if (Ae(re)) {
            var ge = "";
            me != null && (ge = er(me) + "/"), ar(re, u, ge, "", function(ai) {
              return ai;
            });
          } else
            re != null && (or(re) && (re.key && (!H || H.key !== re.key) && He(re.key), re = Wt(
              re,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              p + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (re.key && (!H || H.key !== re.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                er("" + re.key) + "/"
              ) : "") + me
            )), u.push(re));
          return 1;
        }
        var be, Se, ke = 0, De = b === "" ? rt : b + zt;
        if (Ae(o))
          for (var pt = 0; pt < o.length; pt++)
            be = o[pt], Se = De + dr(be, pt), ke += ar(be, u, p, Se, O);
        else {
          var an = F(o);
          if (typeof an == "function") {
            var so = o;
            an === so.entries && (gr || ye("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), gr = !0);
            for (var ni = an.call(so), uo, oi = 0; !(uo = ni.next()).done; )
              be = uo.value, Se = De + dr(be, oi++), ke += ar(be, u, p, Se, O);
          } else if (K === "object") {
            var co = String(o);
            throw new Error("Objects are not valid as a React child (found: " + (co === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : co) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ke;
      }
      function pr(o, u, p) {
        if (o == null)
          return o;
        var b = [], O = 0;
        return ar(o, b, "", "", function(K) {
          return u.call(p, K, O++);
        }), b;
      }
      function qt(o) {
        var u = 0;
        return pr(o, function() {
          u++;
        }), u;
      }
      function nt(o, u, p) {
        pr(o, function() {
          u.apply(this, arguments);
        }, p);
      }
      function Kt(o) {
        return pr(o, function(u) {
          return u;
        }) || [];
      }
      function ot(o) {
        if (!or(o))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return o;
      }
      function at(o) {
        var u = {
          $$typeof: h,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: o,
          _currentValue2: o,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        u.Provider = {
          $$typeof: m,
          _context: u
        };
        var p = !1, b = !1, O = !1;
        {
          var K = {
            $$typeof: h,
            _context: u
          };
          Object.defineProperties(K, {
            Provider: {
              get: function() {
                return b || (b = !0, L("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), u.Provider;
              },
              set: function(M) {
                u.Provider = M;
              }
            },
            _currentValue: {
              get: function() {
                return u._currentValue;
              },
              set: function(M) {
                u._currentValue = M;
              }
            },
            _currentValue2: {
              get: function() {
                return u._currentValue2;
              },
              set: function(M) {
                u._currentValue2 = M;
              }
            },
            _threadCount: {
              get: function() {
                return u._threadCount;
              },
              set: function(M) {
                u._threadCount = M;
              }
            },
            Consumer: {
              get: function() {
                return p || (p = !0, L("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), u.Consumer;
              }
            },
            displayName: {
              get: function() {
                return u.displayName;
              },
              set: function(M) {
                O || (ye("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", M), O = !0);
              }
            }
          }), u.Consumer = K;
        }
        return u._currentRenderer = null, u._currentRenderer2 = null, u;
      }
      var mr = -1, Ir = 0, Nr = 1, Gt = 2;
      function Ht(o) {
        if (o._status === mr) {
          var u = o._result, p = u();
          if (p.then(function(K) {
            if (o._status === Ir || o._status === mr) {
              var M = o;
              M._status = Nr, M._result = K;
            }
          }, function(K) {
            if (o._status === Ir || o._status === mr) {
              var M = o;
              M._status = Gt, M._result = K;
            }
          }), o._status === mr) {
            var b = o;
            b._status = Ir, b._result = p;
          }
        }
        if (o._status === Nr) {
          var O = o._result;
          return O === void 0 && L(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, O), "default" in O || L(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, O), O.default;
        } else
          throw o._result;
      }
      function Jt(o) {
        var u = {
          // We use these fields to store the result.
          _status: mr,
          _result: o
        }, p = {
          $$typeof: w,
          _payload: u,
          _init: Ht
        };
        {
          var b, O;
          Object.defineProperties(p, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return b;
              },
              set: function(K) {
                L("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), b = K, Object.defineProperty(p, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return O;
              },
              set: function(K) {
                L("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), O = K, Object.defineProperty(p, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return p;
      }
      function Xt(o) {
        o != null && o.$$typeof === T ? L("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof o != "function" ? L("forwardRef requires a render function but was given %s.", o === null ? "null" : typeof o) : o.length !== 0 && o.length !== 2 && L("forwardRef render functions accept exactly two parameters: props and ref. %s", o.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), o != null && (o.defaultProps != null || o.propTypes != null) && L("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var u = {
          $$typeof: v,
          render: o
        };
        {
          var p;
          Object.defineProperty(u, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return p;
            },
            set: function(b) {
              p = b, !o.name && !o.displayName && (o.displayName = b);
            }
          });
        }
        return u;
      }
      var c;
      c = Symbol.for("react.module.reference");
      function R(o) {
        return !!(typeof o == "string" || typeof o == "function" || o === i || o === l || ne || o === f || o === S || o === E || pe || o === y || B || ve || he || typeof o == "object" && o !== null && (o.$$typeof === w || o.$$typeof === T || o.$$typeof === m || o.$$typeof === h || o.$$typeof === v || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        o.$$typeof === c || o.getModuleId !== void 0));
      }
      function k(o, u) {
        R(o) || L("memo: The first argument must be a component. Instead received: %s", o === null ? "null" : typeof o);
        var p = {
          $$typeof: T,
          type: o,
          compare: u === void 0 ? null : u
        };
        {
          var b;
          Object.defineProperty(p, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return b;
            },
            set: function(O) {
              b = O, !o.name && !o.displayName && (o.displayName = O);
            }
          });
        }
        return p;
      }
      function D() {
        var o = Y.current;
        return o === null && L(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), o;
      }
      function te(o) {
        var u = D();
        if (o._context !== void 0) {
          var p = o._context;
          p.Consumer === o ? L("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : p.Provider === o && L("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return u.useContext(o);
      }
      function le(o) {
        var u = D();
        return u.useState(o);
      }
      function Z(o, u, p) {
        var b = D();
        return b.useReducer(o, u, p);
      }
      function X(o) {
        var u = D();
        return u.useRef(o);
      }
      function je(o, u) {
        var p = D();
        return p.useEffect(o, u);
      }
      function _e(o, u) {
        var p = D();
        return p.useInsertionEffect(o, u);
      }
      function we(o, u) {
        var p = D();
        return p.useLayoutEffect(o, u);
      }
      function Ve(o, u) {
        var p = D();
        return p.useCallback(o, u);
      }
      function ir(o, u) {
        var p = D();
        return p.useMemo(o, u);
      }
      function it(o, u, p) {
        var b = D();
        return b.useImperativeHandle(o, u, p);
      }
      function qe(o, u) {
        {
          var p = D();
          return p.useDebugValue(o, u);
        }
      }
      function Na() {
        var o = D();
        return o.useTransition();
      }
      function ja(o) {
        var u = D();
        return u.useDeferredValue(o);
      }
      function Da() {
        var o = D();
        return o.useId();
      }
      function Ma(o, u, p) {
        var b = D();
        return b.useSyncExternalStore(o, u, p);
      }
      var jr = 0, Un, Wn, Yn, zn, Bn, qn, Kn;
      function Gn() {
      }
      Gn.__reactDisabledLog = !0;
      function Fa() {
        {
          if (jr === 0) {
            Un = console.log, Wn = console.info, Yn = console.warn, zn = console.error, Bn = console.group, qn = console.groupCollapsed, Kn = console.groupEnd;
            var o = {
              configurable: !0,
              enumerable: !0,
              value: Gn,
              writable: !0
            };
            Object.defineProperties(console, {
              info: o,
              log: o,
              warn: o,
              error: o,
              group: o,
              groupCollapsed: o,
              groupEnd: o
            });
          }
          jr++;
        }
      }
      function La() {
        {
          if (jr--, jr === 0) {
            var o = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: C({}, o, {
                value: Un
              }),
              info: C({}, o, {
                value: Wn
              }),
              warn: C({}, o, {
                value: Yn
              }),
              error: C({}, o, {
                value: zn
              }),
              group: C({}, o, {
                value: Bn
              }),
              groupCollapsed: C({}, o, {
                value: qn
              }),
              groupEnd: C({}, o, {
                value: Kn
              })
            });
          }
          jr < 0 && L("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Qt = de.ReactCurrentDispatcher, Zt;
      function st(o, u, p) {
        {
          if (Zt === void 0)
            try {
              throw Error();
            } catch (O) {
              var b = O.stack.trim().match(/\n( *(at )?)/);
              Zt = b && b[1] || "";
            }
          return `
` + Zt + o;
        }
      }
      var en = !1, ut;
      {
        var Va = typeof WeakMap == "function" ? WeakMap : Map;
        ut = new Va();
      }
      function Hn(o, u) {
        if (!o || en)
          return "";
        {
          var p = ut.get(o);
          if (p !== void 0)
            return p;
        }
        var b;
        en = !0;
        var O = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var K;
        K = Qt.current, Qt.current = null, Fa();
        try {
          if (u) {
            var M = function() {
              throw Error();
            };
            if (Object.defineProperty(M.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(M, []);
              } catch (De) {
                b = De;
              }
              Reflect.construct(o, [], M);
            } else {
              try {
                M.call();
              } catch (De) {
                b = De;
              }
              o.call(M.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (De) {
              b = De;
            }
            o();
          }
        } catch (De) {
          if (De && b && typeof De.stack == "string") {
            for (var H = De.stack.split(`
`), re = b.stack.split(`
`), me = H.length - 1, ge = re.length - 1; me >= 1 && ge >= 0 && H[me] !== re[ge]; )
              ge--;
            for (; me >= 1 && ge >= 0; me--, ge--)
              if (H[me] !== re[ge]) {
                if (me !== 1 || ge !== 1)
                  do
                    if (me--, ge--, ge < 0 || H[me] !== re[ge]) {
                      var be = `
` + H[me].replace(" at new ", " at ");
                      return o.displayName && be.includes("<anonymous>") && (be = be.replace("<anonymous>", o.displayName)), typeof o == "function" && ut.set(o, be), be;
                    }
                  while (me >= 1 && ge >= 0);
                break;
              }
          }
        } finally {
          en = !1, Qt.current = K, La(), Error.prepareStackTrace = O;
        }
        var Se = o ? o.displayName || o.name : "", ke = Se ? st(Se) : "";
        return typeof o == "function" && ut.set(o, ke), ke;
      }
      function Ua(o, u, p) {
        return Hn(o, !1);
      }
      function Wa(o) {
        var u = o.prototype;
        return !!(u && u.isReactComponent);
      }
      function ct(o, u, p) {
        if (o == null)
          return "";
        if (typeof o == "function")
          return Hn(o, Wa(o));
        if (typeof o == "string")
          return st(o);
        switch (o) {
          case S:
            return st("Suspense");
          case E:
            return st("SuspenseList");
        }
        if (typeof o == "object")
          switch (o.$$typeof) {
            case v:
              return Ua(o.render);
            case T:
              return ct(o.type, u, p);
            case w: {
              var b = o, O = b._payload, K = b._init;
              try {
                return ct(K(O), u, p);
              } catch {
              }
            }
          }
        return "";
      }
      var Jn = {}, Xn = de.ReactDebugCurrentFrame;
      function ft(o) {
        if (o) {
          var u = o._owner, p = ct(o.type, o._source, u ? u.type : null);
          Xn.setExtraStackFrame(p);
        } else
          Xn.setExtraStackFrame(null);
      }
      function Ya(o, u, p, b, O) {
        {
          var K = Function.call.bind(fr);
          for (var M in o)
            if (K(o, M)) {
              var H = void 0;
              try {
                if (typeof o[M] != "function") {
                  var re = Error((b || "React class") + ": " + p + " type `" + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[M] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw re.name = "Invariant Violation", re;
                }
                H = o[M](u, M, b, p, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (me) {
                H = me;
              }
              H && !(H instanceof Error) && (ft(O), L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", b || "React class", p, M, typeof H), ft(null)), H instanceof Error && !(H.message in Jn) && (Jn[H.message] = !0, ft(O), L("Failed %s type: %s", p, H.message), ft(null));
            }
        }
      }
      function br(o) {
        if (o) {
          var u = o._owner, p = ct(o.type, o._source, u ? u.type : null);
          Re(p);
        } else
          Re(null);
      }
      var rn;
      rn = !1;
      function Qn() {
        if (G.current) {
          var o = Je(G.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
      function za(o) {
        if (o !== void 0) {
          var u = o.fileName.replace(/^.*[\\\/]/, ""), p = o.lineNumber;
          return `

Check your code at ` + u + ":" + p + ".";
        }
        return "";
      }
      function Ba(o) {
        return o != null ? za(o.__source) : "";
      }
      var Zn = {};
      function qa(o) {
        var u = Qn();
        if (!u) {
          var p = typeof o == "string" ? o : o.displayName || o.name;
          p && (u = `

Check the top-level render call using <` + p + ">.");
        }
        return u;
      }
      function eo(o, u) {
        if (!(!o._store || o._store.validated || o.key != null)) {
          o._store.validated = !0;
          var p = qa(u);
          if (!Zn[p]) {
            Zn[p] = !0;
            var b = "";
            o && o._owner && o._owner !== G.current && (b = " It was passed a child from " + Je(o._owner.type) + "."), br(o), L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', p, b), br(null);
          }
        }
      }
      function ro(o, u) {
        if (typeof o == "object") {
          if (Ae(o))
            for (var p = 0; p < o.length; p++) {
              var b = o[p];
              or(b) && eo(b, u);
            }
          else if (or(o))
            o._store && (o._store.validated = !0);
          else if (o) {
            var O = F(o);
            if (typeof O == "function" && O !== o.entries)
              for (var K = O.call(o), M; !(M = K.next()).done; )
                or(M.value) && eo(M.value, u);
          }
        }
      }
      function to(o) {
        {
          var u = o.type;
          if (u == null || typeof u == "string")
            return;
          var p;
          if (typeof u == "function")
            p = u.propTypes;
          else if (typeof u == "object" && (u.$$typeof === v || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          u.$$typeof === T))
            p = u.propTypes;
          else
            return;
          if (p) {
            var b = Je(u);
            Ya(p, o.props, "prop", b, o);
          } else if (u.PropTypes !== void 0 && !rn) {
            rn = !0;
            var O = Je(u);
            L("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", O || "Unknown");
          }
          typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && L("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ka(o) {
        {
          for (var u = Object.keys(o.props), p = 0; p < u.length; p++) {
            var b = u[p];
            if (b !== "children" && b !== "key") {
              br(o), L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", b), br(null);
              break;
            }
          }
          o.ref !== null && (br(o), L("Invalid attribute `ref` supplied to `React.Fragment`."), br(null));
        }
      }
      function no(o, u, p) {
        var b = R(o);
        if (!b) {
          var O = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (O += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = Ba(u);
          K ? O += K : O += Qn();
          var M;
          o === null ? M = "null" : Ae(o) ? M = "array" : o !== void 0 && o.$$typeof === n ? (M = "<" + (Je(o.type) || "Unknown") + " />", O = " Did you accidentally export a JSX literal instead of a component?") : M = typeof o, L("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", M, O);
        }
        var H = Ut.apply(this, arguments);
        if (H == null)
          return H;
        if (b)
          for (var re = 2; re < arguments.length; re++)
            ro(arguments[re], o);
        return o === i ? Ka(H) : to(H), H;
      }
      var oo = !1;
      function Ga(o) {
        var u = no.bind(null, o);
        return u.type = o, oo || (oo = !0, ye("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(u, "type", {
          enumerable: !1,
          get: function() {
            return ye("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: o
            }), o;
          }
        }), u;
      }
      function Ha(o, u, p) {
        for (var b = Yt.apply(this, arguments), O = 2; O < arguments.length; O++)
          ro(arguments[O], b.type);
        return to(b), b;
      }
      function Ja(o, u) {
        var p = U.transition;
        U.transition = {};
        var b = U.transition;
        U.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          o();
        } finally {
          if (U.transition = p, p === null && b._updatedFibers) {
            var O = b._updatedFibers.size;
            O > 10 && ye("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), b._updatedFibers.clear();
          }
        }
      }
      var ao = !1, lt = null;
      function Xa(o) {
        if (lt === null)
          try {
            var u = ("require" + Math.random()).slice(0, 7), p = e && e[u];
            lt = p.call(e, "timers").setImmediate;
          } catch {
            lt = function(O) {
              ao === !1 && (ao = !0, typeof MessageChannel > "u" && L("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var K = new MessageChannel();
              K.port1.onmessage = O, K.port2.postMessage(void 0);
            };
          }
        return lt(o);
      }
      var Er = 0, io = !1;
      function Qa(o) {
        {
          var u = Er;
          Er++, _.current === null && (_.current = []);
          var p = _.isBatchingLegacy, b;
          try {
            if (_.isBatchingLegacy = !0, b = o(), !p && _.didScheduleLegacyUpdate) {
              var O = _.current;
              O !== null && (_.didScheduleLegacyUpdate = !1, on(O));
            }
          } catch (Se) {
            throw dt(u), Se;
          } finally {
            _.isBatchingLegacy = p;
          }
          if (b !== null && typeof b == "object" && typeof b.then == "function") {
            var K = b, M = !1, H = {
              then: function(Se, ke) {
                M = !0, K.then(function(De) {
                  dt(u), Er === 0 ? tn(De, Se, ke) : Se(De);
                }, function(De) {
                  dt(u), ke(De);
                });
              }
            };
            return !io && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              M || (io = !0, L("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), H;
          } else {
            var re = b;
            if (dt(u), Er === 0) {
              var me = _.current;
              me !== null && (on(me), _.current = null);
              var ge = {
                then: function(Se, ke) {
                  _.current === null ? (_.current = [], tn(re, Se, ke)) : Se(re);
                }
              };
              return ge;
            } else {
              var be = {
                then: function(Se, ke) {
                  Se(re);
                }
              };
              return be;
            }
          }
        }
      }
      function dt(o) {
        o !== Er - 1 && L("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Er = o;
      }
      function tn(o, u, p) {
        {
          var b = _.current;
          if (b !== null)
            try {
              on(b), Xa(function() {
                b.length === 0 ? (_.current = null, u(o)) : tn(o, u, p);
              });
            } catch (O) {
              p(O);
            }
          else
            u(o);
        }
      }
      var nn = !1;
      function on(o) {
        if (!nn) {
          nn = !0;
          var u = 0;
          try {
            for (; u < o.length; u++) {
              var p = o[u];
              do
                p = p(!0);
              while (p !== null);
            }
            o.length = 0;
          } catch (b) {
            throw o = o.slice(u + 1), b;
          } finally {
            nn = !1;
          }
        }
      }
      var Za = no, ei = Ha, ri = Ga, ti = {
        map: pr,
        forEach: nt,
        count: qt,
        toArray: Kt,
        only: ot
      };
      r.Children = ti, r.Component = x, r.Fragment = i, r.Profiler = l, r.PureComponent = q, r.StrictMode = f, r.Suspense = S, r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = de, r.cloneElement = ei, r.createContext = at, r.createElement = Za, r.createFactory = ri, r.createRef = Pe, r.forwardRef = Xt, r.isValidElement = or, r.lazy = Jt, r.memo = k, r.startTransition = Ja, r.unstable_act = Qa, r.useCallback = Ve, r.useContext = te, r.useDebugValue = qe, r.useDeferredValue = ja, r.useEffect = je, r.useId = Da, r.useImperativeHandle = it, r.useInsertionEffect = _e, r.useLayoutEffect = we, r.useMemo = ir, r.useReducer = Z, r.useRef = X, r.useState = le, r.useSyncExternalStore = Ma, r.useTransition = Na, r.version = t, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Vr, Vr.exports)), Vr.exports;
}
var po;
function Rn() {
  return po || (po = 1, process.env.NODE_ENV === "production" ? mt.exports = si() : mt.exports = ui()), mt.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mo;
function ci() {
  if (mo)
    return Dr;
  mo = 1;
  var e = Rn(), r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(l, m, h) {
    var v, S = {}, E = null, T = null;
    h !== void 0 && (E = "" + h), m.key !== void 0 && (E = "" + m.key), m.ref !== void 0 && (T = m.ref);
    for (v in m)
      n.call(m, v) && !i.hasOwnProperty(v) && (S[v] = m[v]);
    if (l && l.defaultProps)
      for (v in m = l.defaultProps, m)
        S[v] === void 0 && (S[v] = m[v]);
    return { $$typeof: r, type: l, key: E, ref: T, props: S, _owner: a.current };
  }
  return Dr.Fragment = t, Dr.jsx = f, Dr.jsxs = f, Dr;
}
var Mr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vo;
function fi() {
  return vo || (vo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Rn(), r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), l = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), w = Symbol.iterator, y = "@@iterator";
    function g(c) {
      if (c === null || typeof c != "object")
        return null;
      var R = w && c[w] || c[y];
      return typeof R == "function" ? R : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function F(c) {
      {
        for (var R = arguments.length, k = new Array(R > 1 ? R - 1 : 0), D = 1; D < R; D++)
          k[D - 1] = arguments[D];
        Y("error", c, k);
      }
    }
    function Y(c, R, k) {
      {
        var D = $.ReactDebugCurrentFrame, te = D.getStackAddendum();
        te !== "" && (R += "%s", k = k.concat([te]));
        var le = k.map(function(Z) {
          return String(Z);
        });
        le.unshift("Warning: " + R), Function.prototype.apply.call(console[c], console, le);
      }
    }
    var U = !1, _ = !1, G = !1, z = !1, xe = !1, Re;
    Re = Symbol.for("react.module.reference");
    function B(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === n || c === i || xe || c === a || c === h || c === v || z || c === T || U || _ || G || typeof c == "object" && c !== null && (c.$$typeof === E || c.$$typeof === S || c.$$typeof === f || c.$$typeof === l || c.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      c.$$typeof === Re || c.getModuleId !== void 0));
    }
    function ve(c, R, k) {
      var D = c.displayName;
      if (D)
        return D;
      var te = R.displayName || R.name || "";
      return te !== "" ? k + "(" + te + ")" : k;
    }
    function he(c) {
      return c.displayName || "Context";
    }
    function pe(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
        return c.displayName || c.name || null;
      if (typeof c == "string")
        return c;
      switch (c) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case h:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case l:
            var R = c;
            return he(R) + ".Consumer";
          case f:
            var k = c;
            return he(k._context) + ".Provider";
          case m:
            return ve(c, c.render, "ForwardRef");
          case S:
            var D = c.displayName || null;
            return D !== null ? D : pe(c.type) || "Memo";
          case E: {
            var te = c, le = te._payload, Z = te._init;
            try {
              return pe(Z(le));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ne = Object.assign, de = 0, ye, L, Ne, Le, s, d, C;
    function A() {
    }
    A.__reactDisabledLog = !0;
    function x() {
      {
        if (de === 0) {
          ye = console.log, L = console.info, Ne = console.warn, Le = console.error, s = console.group, d = console.groupCollapsed, C = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: A,
            writable: !0
          };
          Object.defineProperties(console, {
            info: c,
            log: c,
            warn: c,
            error: c,
            group: c,
            groupCollapsed: c,
            groupEnd: c
          });
        }
        de++;
      }
    }
    function V() {
      {
        if (de--, de === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ne({}, c, {
              value: ye
            }),
            info: ne({}, c, {
              value: L
            }),
            warn: ne({}, c, {
              value: Ne
            }),
            error: ne({}, c, {
              value: Le
            }),
            group: ne({}, c, {
              value: s
            }),
            groupCollapsed: ne({}, c, {
              value: d
            }),
            groupEnd: ne({}, c, {
              value: C
            })
          });
        }
        de < 0 && F("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = $.ReactCurrentDispatcher, I;
    function j(c, R, k) {
      {
        if (I === void 0)
          try {
            throw Error();
          } catch (te) {
            var D = te.stack.trim().match(/\n( *(at )?)/);
            I = D && D[1] || "";
          }
        return `
` + I + c;
      }
    }
    var q = !1, J;
    {
      var Pe = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Pe();
    }
    function P(c, R) {
      if (!c || q)
        return "";
      {
        var k = J.get(c);
        if (k !== void 0)
          return k;
      }
      var D;
      q = !0;
      var te = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var le;
      le = N.current, N.current = null, x();
      try {
        if (R) {
          var Z = function() {
            throw Error();
          };
          if (Object.defineProperty(Z.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Z, []);
            } catch (qe) {
              D = qe;
            }
            Reflect.construct(c, [], Z);
          } else {
            try {
              Z.call();
            } catch (qe) {
              D = qe;
            }
            c.call(Z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (qe) {
            D = qe;
          }
          c();
        }
      } catch (qe) {
        if (qe && D && typeof qe.stack == "string") {
          for (var X = qe.stack.split(`
`), je = D.stack.split(`
`), _e = X.length - 1, we = je.length - 1; _e >= 1 && we >= 0 && X[_e] !== je[we]; )
            we--;
          for (; _e >= 1 && we >= 0; _e--, we--)
            if (X[_e] !== je[we]) {
              if (_e !== 1 || we !== 1)
                do
                  if (_e--, we--, we < 0 || X[_e] !== je[we]) {
                    var Ve = `
` + X[_e].replace(" at new ", " at ");
                    return c.displayName && Ve.includes("<anonymous>") && (Ve = Ve.replace("<anonymous>", c.displayName)), typeof c == "function" && J.set(c, Ve), Ve;
                  }
                while (_e >= 1 && we >= 0);
              break;
            }
        }
      } finally {
        q = !1, N.current = le, V(), Error.prepareStackTrace = te;
      }
      var ir = c ? c.displayName || c.name : "", it = ir ? j(ir) : "";
      return typeof c == "function" && J.set(c, it), it;
    }
    function Ae(c, R, k) {
      return P(c, !1);
    }
    function W(c) {
      var R = c.prototype;
      return !!(R && R.isReactComponent);
    }
    function We(c, R, k) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return P(c, W(c));
      if (typeof c == "string")
        return j(c);
      switch (c) {
        case h:
          return j("Suspense");
        case v:
          return j("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case m:
            return Ae(c.render);
          case S:
            return We(c.type, R, k);
          case E: {
            var D = c, te = D._payload, le = D._init;
            try {
              return We(le(te), R, k);
            } catch {
            }
          }
        }
      return "";
    }
    var Be = Object.prototype.hasOwnProperty, He = {}, Jr = $.ReactDebugCurrentFrame;
    function cr(c) {
      if (c) {
        var R = c._owner, k = We(c.type, c._source, R ? R.type : null);
        Jr.setExtraStackFrame(k);
      } else
        Jr.setExtraStackFrame(null);
    }
    function Je(c, R, k, D, te) {
      {
        var le = Function.call.bind(Be);
        for (var Z in c)
          if (le(c, Z)) {
            var X = void 0;
            try {
              if (typeof c[Z] != "function") {
                var je = Error((D || "React class") + ": " + k + " type `" + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[Z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw je.name = "Invariant Violation", je;
              }
              X = c[Z](R, Z, D, k, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_e) {
              X = _e;
            }
            X && !(X instanceof Error) && (cr(te), F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", k, Z, typeof X), cr(null)), X instanceof Error && !(X.message in He) && (He[X.message] = !0, cr(te), F("Failed %s type: %s", k, X.message), cr(null));
          }
      }
    }
    var fr = Array.isArray;
    function yr(c) {
      return fr(c);
    }
    function Xr(c) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, k = R && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return k;
      }
    }
    function Qr(c) {
      try {
        return hr(c), !1;
      } catch {
        return !0;
      }
    }
    function hr(c) {
      return "" + c;
    }
    function Ar(c) {
      if (Qr(c))
        return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xr(c)), hr(c);
    }
    var nr = $.ReactCurrentOwner, Vt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Zr, et, lr;
    lr = {};
    function Ut(c) {
      if (Be.call(c, "ref")) {
        var R = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function Wt(c) {
      if (Be.call(c, "key")) {
        var R = Object.getOwnPropertyDescriptor(c, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function Yt(c, R) {
      if (typeof c.ref == "string" && nr.current && R && nr.current.stateNode !== R) {
        var k = pe(nr.current.type);
        lr[k] || (F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', pe(nr.current.type), c.ref), lr[k] = !0);
      }
    }
    function or(c, R) {
      {
        var k = function() {
          Zr || (Zr = !0, F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        k.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: k,
          configurable: !0
        });
      }
    }
    function rt(c, R) {
      {
        var k = function() {
          et || (et = !0, F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        k.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: k,
          configurable: !0
        });
      }
    }
    var zt = function(c, R, k, D, te, le, Z) {
      var X = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: c,
        key: R,
        ref: k,
        props: Z,
        // Record the component responsible for creating this element.
        _owner: le
      };
      return X._store = {}, Object.defineProperty(X._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(X, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.defineProperty(X, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: te
      }), Object.freeze && (Object.freeze(X.props), Object.freeze(X)), X;
    };
    function Bt(c, R, k, D, te) {
      {
        var le, Z = {}, X = null, je = null;
        k !== void 0 && (Ar(k), X = "" + k), Wt(R) && (Ar(R.key), X = "" + R.key), Ut(R) && (je = R.ref, Yt(R, te));
        for (le in R)
          Be.call(R, le) && !Vt.hasOwnProperty(le) && (Z[le] = R[le]);
        if (c && c.defaultProps) {
          var _e = c.defaultProps;
          for (le in _e)
            Z[le] === void 0 && (Z[le] = _e[le]);
        }
        if (X || je) {
          var we = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          X && or(Z, we), je && rt(Z, we);
        }
        return zt(c, X, je, te, D, nr.current, Z);
      }
    }
    var gr = $.ReactCurrentOwner, tt = $.ReactDebugCurrentFrame;
    function er(c) {
      if (c) {
        var R = c._owner, k = We(c.type, c._source, R ? R.type : null);
        tt.setExtraStackFrame(k);
      } else
        tt.setExtraStackFrame(null);
    }
    var dr;
    dr = !1;
    function ar(c) {
      return typeof c == "object" && c !== null && c.$$typeof === r;
    }
    function pr() {
      {
        if (gr.current) {
          var c = pe(gr.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function qt(c) {
      {
        if (c !== void 0) {
          var R = c.fileName.replace(/^.*[\\\/]/, ""), k = c.lineNumber;
          return `

Check your code at ` + R + ":" + k + ".";
        }
        return "";
      }
    }
    var nt = {};
    function Kt(c) {
      {
        var R = pr();
        if (!R) {
          var k = typeof c == "string" ? c : c.displayName || c.name;
          k && (R = `

Check the top-level render call using <` + k + ">.");
        }
        return R;
      }
    }
    function ot(c, R) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var k = Kt(R);
        if (nt[k])
          return;
        nt[k] = !0;
        var D = "";
        c && c._owner && c._owner !== gr.current && (D = " It was passed a child from " + pe(c._owner.type) + "."), er(c), F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', k, D), er(null);
      }
    }
    function at(c, R) {
      {
        if (typeof c != "object")
          return;
        if (yr(c))
          for (var k = 0; k < c.length; k++) {
            var D = c[k];
            ar(D) && ot(D, R);
          }
        else if (ar(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var te = g(c);
          if (typeof te == "function" && te !== c.entries)
            for (var le = te.call(c), Z; !(Z = le.next()).done; )
              ar(Z.value) && ot(Z.value, R);
        }
      }
    }
    function mr(c) {
      {
        var R = c.type;
        if (R == null || typeof R == "string")
          return;
        var k;
        if (typeof R == "function")
          k = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        R.$$typeof === S))
          k = R.propTypes;
        else
          return;
        if (k) {
          var D = pe(R);
          Je(k, c.props, "prop", D, c);
        } else if (R.PropTypes !== void 0 && !dr) {
          dr = !0;
          var te = pe(R);
          F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", te || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ir(c) {
      {
        for (var R = Object.keys(c.props), k = 0; k < R.length; k++) {
          var D = R[k];
          if (D !== "children" && D !== "key") {
            er(c), F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", D), er(null);
            break;
          }
        }
        c.ref !== null && (er(c), F("Invalid attribute `ref` supplied to `React.Fragment`."), er(null));
      }
    }
    function Nr(c, R, k, D, te, le) {
      {
        var Z = B(c);
        if (!Z) {
          var X = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (X += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var je = qt(te);
          je ? X += je : X += pr();
          var _e;
          c === null ? _e = "null" : yr(c) ? _e = "array" : c !== void 0 && c.$$typeof === r ? (_e = "<" + (pe(c.type) || "Unknown") + " />", X = " Did you accidentally export a JSX literal instead of a component?") : _e = typeof c, F("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _e, X);
        }
        var we = Bt(c, R, k, te, le);
        if (we == null)
          return we;
        if (Z) {
          var Ve = R.children;
          if (Ve !== void 0)
            if (D)
              if (yr(Ve)) {
                for (var ir = 0; ir < Ve.length; ir++)
                  at(Ve[ir], c);
                Object.freeze && Object.freeze(Ve);
              } else
                F("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              at(Ve, c);
        }
        return c === n ? Ir(we) : mr(we), we;
      }
    }
    function Gt(c, R, k) {
      return Nr(c, R, k, !0);
    }
    function Ht(c, R, k) {
      return Nr(c, R, k, !1);
    }
    var Jt = Ht, Xt = Gt;
    Mr.Fragment = n, Mr.jsx = Jt, Mr.jsxs = Xt;
  }()), Mr;
}
process.env.NODE_ENV === "production" ? vn.exports = ci() : vn.exports = fi();
var li = vn.exports;
const Wr = li.jsx, di = {
  black: "#000",
  white: "#fff"
}, Yr = di, pi = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, _r = pi, mi = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Sr = mi, vi = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Rr = vi, yi = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, wr = yi, hi = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Or = hi, gi = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Fr = gi, bi = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Ei = bi;
function _i(e, r) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || r(...n);
  };
}
function ee() {
  return ee = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, ee.apply(this, arguments);
}
function sr(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function aa(e) {
  if (!sr(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = aa(e[t]);
  }), r;
}
function Ge(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? ee({}, e) : e;
  return sr(e) && sr(r) && Object.keys(r).forEach((a) => {
    a !== "__proto__" && (sr(r[a]) && a in e && sr(e[a]) ? n[a] = Ge(e[a], r[a], t) : t.clone ? n[a] = sr(r[a]) ? aa(r[a]) : r[a] : n[a] = r[a]);
  }), n;
}
var yn = { exports: {} }, vt = { exports: {} }, ie = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yo;
function Si() {
  if (yo)
    return ie;
  yo = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, f = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, v = e ? Symbol.for("react.forward_ref") : 60112, S = e ? Symbol.for("react.suspense") : 60113, E = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
  function Y(_) {
    if (typeof _ == "object" && _ !== null) {
      var G = _.$$typeof;
      switch (G) {
        case r:
          switch (_ = _.type, _) {
            case m:
            case h:
            case n:
            case i:
            case a:
            case S:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case l:
                case v:
                case w:
                case T:
                case f:
                  return _;
                default:
                  return G;
              }
          }
        case t:
          return G;
      }
    }
  }
  function U(_) {
    return Y(_) === h;
  }
  return ie.AsyncMode = m, ie.ConcurrentMode = h, ie.ContextConsumer = l, ie.ContextProvider = f, ie.Element = r, ie.ForwardRef = v, ie.Fragment = n, ie.Lazy = w, ie.Memo = T, ie.Portal = t, ie.Profiler = i, ie.StrictMode = a, ie.Suspense = S, ie.isAsyncMode = function(_) {
    return U(_) || Y(_) === m;
  }, ie.isConcurrentMode = U, ie.isContextConsumer = function(_) {
    return Y(_) === l;
  }, ie.isContextProvider = function(_) {
    return Y(_) === f;
  }, ie.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === r;
  }, ie.isForwardRef = function(_) {
    return Y(_) === v;
  }, ie.isFragment = function(_) {
    return Y(_) === n;
  }, ie.isLazy = function(_) {
    return Y(_) === w;
  }, ie.isMemo = function(_) {
    return Y(_) === T;
  }, ie.isPortal = function(_) {
    return Y(_) === t;
  }, ie.isProfiler = function(_) {
    return Y(_) === i;
  }, ie.isStrictMode = function(_) {
    return Y(_) === a;
  }, ie.isSuspense = function(_) {
    return Y(_) === S;
  }, ie.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === n || _ === h || _ === i || _ === a || _ === S || _ === E || typeof _ == "object" && _ !== null && (_.$$typeof === w || _.$$typeof === T || _.$$typeof === f || _.$$typeof === l || _.$$typeof === v || _.$$typeof === g || _.$$typeof === $ || _.$$typeof === F || _.$$typeof === y);
  }, ie.typeOf = Y, ie;
}
var se = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ho;
function Ri() {
  return ho || (ho = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, f = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, m = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, v = e ? Symbol.for("react.forward_ref") : 60112, S = e ? Symbol.for("react.suspense") : 60113, E = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
    function Y(P) {
      return typeof P == "string" || typeof P == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      P === n || P === h || P === i || P === a || P === S || P === E || typeof P == "object" && P !== null && (P.$$typeof === w || P.$$typeof === T || P.$$typeof === f || P.$$typeof === l || P.$$typeof === v || P.$$typeof === g || P.$$typeof === $ || P.$$typeof === F || P.$$typeof === y);
    }
    function U(P) {
      if (typeof P == "object" && P !== null) {
        var Ae = P.$$typeof;
        switch (Ae) {
          case r:
            var W = P.type;
            switch (W) {
              case m:
              case h:
              case n:
              case i:
              case a:
              case S:
                return W;
              default:
                var We = W && W.$$typeof;
                switch (We) {
                  case l:
                  case v:
                  case w:
                  case T:
                  case f:
                    return We;
                  default:
                    return Ae;
                }
            }
          case t:
            return Ae;
        }
      }
    }
    var _ = m, G = h, z = l, xe = f, Re = r, B = v, ve = n, he = w, pe = T, ne = t, de = i, ye = a, L = S, Ne = !1;
    function Le(P) {
      return Ne || (Ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), s(P) || U(P) === m;
    }
    function s(P) {
      return U(P) === h;
    }
    function d(P) {
      return U(P) === l;
    }
    function C(P) {
      return U(P) === f;
    }
    function A(P) {
      return typeof P == "object" && P !== null && P.$$typeof === r;
    }
    function x(P) {
      return U(P) === v;
    }
    function V(P) {
      return U(P) === n;
    }
    function N(P) {
      return U(P) === w;
    }
    function I(P) {
      return U(P) === T;
    }
    function j(P) {
      return U(P) === t;
    }
    function q(P) {
      return U(P) === i;
    }
    function J(P) {
      return U(P) === a;
    }
    function Pe(P) {
      return U(P) === S;
    }
    se.AsyncMode = _, se.ConcurrentMode = G, se.ContextConsumer = z, se.ContextProvider = xe, se.Element = Re, se.ForwardRef = B, se.Fragment = ve, se.Lazy = he, se.Memo = pe, se.Portal = ne, se.Profiler = de, se.StrictMode = ye, se.Suspense = L, se.isAsyncMode = Le, se.isConcurrentMode = s, se.isContextConsumer = d, se.isContextProvider = C, se.isElement = A, se.isForwardRef = x, se.isFragment = V, se.isLazy = N, se.isMemo = I, se.isPortal = j, se.isProfiler = q, se.isStrictMode = J, se.isSuspense = Pe, se.isValidElementType = Y, se.typeOf = U;
  }()), se;
}
var go;
function ia() {
  return go || (go = 1, process.env.NODE_ENV === "production" ? vt.exports = Si() : vt.exports = Ri()), vt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var sn, bo;
function wi() {
  if (bo)
    return sn;
  bo = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var f = {}, l = 0; l < 10; l++)
        f["_" + String.fromCharCode(l)] = l;
      var m = Object.getOwnPropertyNames(f).map(function(v) {
        return f[v];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var h = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(v) {
        h[v] = v;
      }), Object.keys(Object.assign({}, h)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return sn = a() ? Object.assign : function(i, f) {
    for (var l, m = n(i), h, v = 1; v < arguments.length; v++) {
      l = Object(arguments[v]);
      for (var S in l)
        r.call(l, S) && (m[S] = l[S]);
      if (e) {
        h = e(l);
        for (var E = 0; E < h.length; E++)
          t.call(l, h[E]) && (m[h[E]] = l[h[E]]);
      }
    }
    return m;
  }, sn;
}
var un, Eo;
function wn() {
  if (Eo)
    return un;
  Eo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return un = e, un;
}
var cn, _o;
function sa() {
  return _o || (_o = 1, cn = Function.call.bind(Object.prototype.hasOwnProperty)), cn;
}
var fn, So;
function Oi() {
  if (So)
    return fn;
  So = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = wn(), t = {}, n = sa();
    e = function(i) {
      var f = "Warning: " + i;
      typeof console < "u" && console.error(f);
      try {
        throw new Error(f);
      } catch {
      }
    };
  }
  function a(i, f, l, m, h) {
    if (process.env.NODE_ENV !== "production") {
      for (var v in i)
        if (n(i, v)) {
          var S;
          try {
            if (typeof i[v] != "function") {
              var E = Error(
                (m || "React class") + ": " + l + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw E.name = "Invariant Violation", E;
            }
            S = i[v](f, v, m, l, null, r);
          } catch (w) {
            S = w;
          }
          if (S && !(S instanceof Error) && e(
            (m || "React class") + ": type specification of " + l + " `" + v + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof S + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), S instanceof Error && !(S.message in t)) {
            t[S.message] = !0;
            var T = h ? h() : "";
            e(
              "Failed " + l + " type: " + S.message + (T ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, fn = a, fn;
}
var ln, Ro;
function Ti() {
  if (Ro)
    return ln;
  Ro = 1;
  var e = ia(), r = wi(), t = wn(), n = sa(), a = Oi(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(l) {
    var m = "Warning: " + l;
    typeof console < "u" && console.error(m);
    try {
      throw new Error(m);
    } catch {
    }
  });
  function f() {
    return null;
  }
  return ln = function(l, m) {
    var h = typeof Symbol == "function" && Symbol.iterator, v = "@@iterator";
    function S(s) {
      var d = s && (h && s[h] || s[v]);
      if (typeof d == "function")
        return d;
    }
    var E = "<<anonymous>>", T = {
      array: $("array"),
      bigint: $("bigint"),
      bool: $("boolean"),
      func: $("function"),
      number: $("number"),
      object: $("object"),
      string: $("string"),
      symbol: $("symbol"),
      any: F(),
      arrayOf: Y,
      element: U(),
      elementType: _(),
      instanceOf: G,
      node: B(),
      objectOf: xe,
      oneOf: z,
      oneOfType: Re,
      shape: he,
      exact: pe
    };
    function w(s, d) {
      return s === d ? s !== 0 || 1 / s === 1 / d : s !== s && d !== d;
    }
    function y(s, d) {
      this.message = s, this.data = d && typeof d == "object" ? d : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function g(s) {
      if (process.env.NODE_ENV !== "production")
        var d = {}, C = 0;
      function A(V, N, I, j, q, J, Pe) {
        if (j = j || E, J = J || I, Pe !== t) {
          if (m) {
            var P = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw P.name = "Invariant Violation", P;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ae = j + ":" + I;
            !d[Ae] && // Avoid spamming the console because they are often not actionable except for lib authors
            C < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + J + "` prop on `" + j + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), d[Ae] = !0, C++);
          }
        }
        return N[I] == null ? V ? N[I] === null ? new y("The " + q + " `" + J + "` is marked as required " + ("in `" + j + "`, but its value is `null`.")) : new y("The " + q + " `" + J + "` is marked as required in " + ("`" + j + "`, but its value is `undefined`.")) : null : s(N, I, j, q, J);
      }
      var x = A.bind(null, !1);
      return x.isRequired = A.bind(null, !0), x;
    }
    function $(s) {
      function d(C, A, x, V, N, I) {
        var j = C[A], q = ye(j);
        if (q !== s) {
          var J = L(j);
          return new y(
            "Invalid " + V + " `" + N + "` of type " + ("`" + J + "` supplied to `" + x + "`, expected ") + ("`" + s + "`."),
            { expectedType: s }
          );
        }
        return null;
      }
      return g(d);
    }
    function F() {
      return g(f);
    }
    function Y(s) {
      function d(C, A, x, V, N) {
        if (typeof s != "function")
          return new y("Property `" + N + "` of component `" + x + "` has invalid PropType notation inside arrayOf.");
        var I = C[A];
        if (!Array.isArray(I)) {
          var j = ye(I);
          return new y("Invalid " + V + " `" + N + "` of type " + ("`" + j + "` supplied to `" + x + "`, expected an array."));
        }
        for (var q = 0; q < I.length; q++) {
          var J = s(I, q, x, V, N + "[" + q + "]", t);
          if (J instanceof Error)
            return J;
        }
        return null;
      }
      return g(d);
    }
    function U() {
      function s(d, C, A, x, V) {
        var N = d[C];
        if (!l(N)) {
          var I = ye(N);
          return new y("Invalid " + x + " `" + V + "` of type " + ("`" + I + "` supplied to `" + A + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(s);
    }
    function _() {
      function s(d, C, A, x, V) {
        var N = d[C];
        if (!e.isValidElementType(N)) {
          var I = ye(N);
          return new y("Invalid " + x + " `" + V + "` of type " + ("`" + I + "` supplied to `" + A + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(s);
    }
    function G(s) {
      function d(C, A, x, V, N) {
        if (!(C[A] instanceof s)) {
          var I = s.name || E, j = Le(C[A]);
          return new y("Invalid " + V + " `" + N + "` of type " + ("`" + j + "` supplied to `" + x + "`, expected ") + ("instance of `" + I + "`."));
        }
        return null;
      }
      return g(d);
    }
    function z(s) {
      if (!Array.isArray(s))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), f;
      function d(C, A, x, V, N) {
        for (var I = C[A], j = 0; j < s.length; j++)
          if (w(I, s[j]))
            return null;
        var q = JSON.stringify(s, function(Pe, P) {
          var Ae = L(P);
          return Ae === "symbol" ? String(P) : P;
        });
        return new y("Invalid " + V + " `" + N + "` of value `" + String(I) + "` " + ("supplied to `" + x + "`, expected one of " + q + "."));
      }
      return g(d);
    }
    function xe(s) {
      function d(C, A, x, V, N) {
        if (typeof s != "function")
          return new y("Property `" + N + "` of component `" + x + "` has invalid PropType notation inside objectOf.");
        var I = C[A], j = ye(I);
        if (j !== "object")
          return new y("Invalid " + V + " `" + N + "` of type " + ("`" + j + "` supplied to `" + x + "`, expected an object."));
        for (var q in I)
          if (n(I, q)) {
            var J = s(I, q, x, V, N + "." + q, t);
            if (J instanceof Error)
              return J;
          }
        return null;
      }
      return g(d);
    }
    function Re(s) {
      if (!Array.isArray(s))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), f;
      for (var d = 0; d < s.length; d++) {
        var C = s[d];
        if (typeof C != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ne(C) + " at index " + d + "."
          ), f;
      }
      function A(x, V, N, I, j) {
        for (var q = [], J = 0; J < s.length; J++) {
          var Pe = s[J], P = Pe(x, V, N, I, j, t);
          if (P == null)
            return null;
          P.data && n(P.data, "expectedType") && q.push(P.data.expectedType);
        }
        var Ae = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new y("Invalid " + I + " `" + j + "` supplied to " + ("`" + N + "`" + Ae + "."));
      }
      return g(A);
    }
    function B() {
      function s(d, C, A, x, V) {
        return ne(d[C]) ? null : new y("Invalid " + x + " `" + V + "` supplied to " + ("`" + A + "`, expected a ReactNode."));
      }
      return g(s);
    }
    function ve(s, d, C, A, x) {
      return new y(
        (s || "React class") + ": " + d + " type `" + C + "." + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + x + "`."
      );
    }
    function he(s) {
      function d(C, A, x, V, N) {
        var I = C[A], j = ye(I);
        if (j !== "object")
          return new y("Invalid " + V + " `" + N + "` of type `" + j + "` " + ("supplied to `" + x + "`, expected `object`."));
        for (var q in s) {
          var J = s[q];
          if (typeof J != "function")
            return ve(x, V, N, q, L(J));
          var Pe = J(I, q, x, V, N + "." + q, t);
          if (Pe)
            return Pe;
        }
        return null;
      }
      return g(d);
    }
    function pe(s) {
      function d(C, A, x, V, N) {
        var I = C[A], j = ye(I);
        if (j !== "object")
          return new y("Invalid " + V + " `" + N + "` of type `" + j + "` " + ("supplied to `" + x + "`, expected `object`."));
        var q = r({}, C[A], s);
        for (var J in q) {
          var Pe = s[J];
          if (n(s, J) && typeof Pe != "function")
            return ve(x, V, N, J, L(Pe));
          if (!Pe)
            return new y(
              "Invalid " + V + " `" + N + "` key `" + J + "` supplied to `" + x + "`.\nBad object: " + JSON.stringify(C[A], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(s), null, "  ")
            );
          var P = Pe(I, J, x, V, N + "." + J, t);
          if (P)
            return P;
        }
        return null;
      }
      return g(d);
    }
    function ne(s) {
      switch (typeof s) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !s;
        case "object":
          if (Array.isArray(s))
            return s.every(ne);
          if (s === null || l(s))
            return !0;
          var d = S(s);
          if (d) {
            var C = d.call(s), A;
            if (d !== s.entries) {
              for (; !(A = C.next()).done; )
                if (!ne(A.value))
                  return !1;
            } else
              for (; !(A = C.next()).done; ) {
                var x = A.value;
                if (x && !ne(x[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function de(s, d) {
      return s === "symbol" ? !0 : d ? d["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && d instanceof Symbol : !1;
    }
    function ye(s) {
      var d = typeof s;
      return Array.isArray(s) ? "array" : s instanceof RegExp ? "object" : de(d, s) ? "symbol" : d;
    }
    function L(s) {
      if (typeof s > "u" || s === null)
        return "" + s;
      var d = ye(s);
      if (d === "object") {
        if (s instanceof Date)
          return "date";
        if (s instanceof RegExp)
          return "regexp";
      }
      return d;
    }
    function Ne(s) {
      var d = L(s);
      switch (d) {
        case "array":
        case "object":
          return "an " + d;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + d;
        default:
          return d;
      }
    }
    function Le(s) {
      return !s.constructor || !s.constructor.name ? E : s.constructor.name;
    }
    return T.checkPropTypes = a, T.resetWarningCache = a.resetWarningCache, T.PropTypes = T, T;
  }, ln;
}
var dn, wo;
function Ci() {
  if (wo)
    return dn;
  wo = 1;
  var e = wn();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, dn = function() {
    function n(f, l, m, h, v, S) {
      if (S !== e) {
        var E = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw E.name = "Invariant Violation", E;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, dn;
}
if (process.env.NODE_ENV !== "production") {
  var xi = ia(), Pi = !0;
  yn.exports = Ti()(xi.isElement, Pi);
} else
  yn.exports = Ci()();
var ki = yn.exports;
const Ce = /* @__PURE__ */ oa(ki);
function Pr(e) {
  let r = "https://mui.com/production-error/?code=" + e;
  for (let t = 1; t < arguments.length; t += 1)
    r += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified MUI error #" + e + "; visit " + r + " for the full message.";
}
var hn = { exports: {} }, ue = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oo;
function $i() {
  if (Oo)
    return ue;
  Oo = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), f = Symbol.for("react.context"), l = Symbol.for("react.server_context"), m = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), w;
  w = Symbol.for("react.module.reference");
  function y(g) {
    if (typeof g == "object" && g !== null) {
      var $ = g.$$typeof;
      switch ($) {
        case e:
          switch (g = g.type, g) {
            case t:
            case a:
            case n:
            case h:
            case v:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case l:
                case f:
                case m:
                case E:
                case S:
                case i:
                  return g;
                default:
                  return $;
              }
          }
        case r:
          return $;
      }
    }
  }
  return ue.ContextConsumer = f, ue.ContextProvider = i, ue.Element = e, ue.ForwardRef = m, ue.Fragment = t, ue.Lazy = E, ue.Memo = S, ue.Portal = r, ue.Profiler = a, ue.StrictMode = n, ue.Suspense = h, ue.SuspenseList = v, ue.isAsyncMode = function() {
    return !1;
  }, ue.isConcurrentMode = function() {
    return !1;
  }, ue.isContextConsumer = function(g) {
    return y(g) === f;
  }, ue.isContextProvider = function(g) {
    return y(g) === i;
  }, ue.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, ue.isForwardRef = function(g) {
    return y(g) === m;
  }, ue.isFragment = function(g) {
    return y(g) === t;
  }, ue.isLazy = function(g) {
    return y(g) === E;
  }, ue.isMemo = function(g) {
    return y(g) === S;
  }, ue.isPortal = function(g) {
    return y(g) === r;
  }, ue.isProfiler = function(g) {
    return y(g) === a;
  }, ue.isStrictMode = function(g) {
    return y(g) === n;
  }, ue.isSuspense = function(g) {
    return y(g) === h;
  }, ue.isSuspenseList = function(g) {
    return y(g) === v;
  }, ue.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === t || g === a || g === n || g === h || g === v || g === T || typeof g == "object" && g !== null && (g.$$typeof === E || g.$$typeof === S || g.$$typeof === i || g.$$typeof === f || g.$$typeof === m || g.$$typeof === w || g.getModuleId !== void 0);
  }, ue.typeOf = y, ue;
}
var ce = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var To;
function Ai() {
  return To || (To = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), f = Symbol.for("react.context"), l = Symbol.for("react.server_context"), m = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), w = !1, y = !1, g = !1, $ = !1, F = !1, Y;
    Y = Symbol.for("react.module.reference");
    function U(W) {
      return !!(typeof W == "string" || typeof W == "function" || W === t || W === a || F || W === n || W === h || W === v || $ || W === T || w || y || g || typeof W == "object" && W !== null && (W.$$typeof === E || W.$$typeof === S || W.$$typeof === i || W.$$typeof === f || W.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      W.$$typeof === Y || W.getModuleId !== void 0));
    }
    function _(W) {
      if (typeof W == "object" && W !== null) {
        var We = W.$$typeof;
        switch (We) {
          case e:
            var Be = W.type;
            switch (Be) {
              case t:
              case a:
              case n:
              case h:
              case v:
                return Be;
              default:
                var He = Be && Be.$$typeof;
                switch (He) {
                  case l:
                  case f:
                  case m:
                  case E:
                  case S:
                  case i:
                    return He;
                  default:
                    return We;
                }
            }
          case r:
            return We;
        }
      }
    }
    var G = f, z = i, xe = e, Re = m, B = t, ve = E, he = S, pe = r, ne = a, de = n, ye = h, L = v, Ne = !1, Le = !1;
    function s(W) {
      return Ne || (Ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function d(W) {
      return Le || (Le = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function C(W) {
      return _(W) === f;
    }
    function A(W) {
      return _(W) === i;
    }
    function x(W) {
      return typeof W == "object" && W !== null && W.$$typeof === e;
    }
    function V(W) {
      return _(W) === m;
    }
    function N(W) {
      return _(W) === t;
    }
    function I(W) {
      return _(W) === E;
    }
    function j(W) {
      return _(W) === S;
    }
    function q(W) {
      return _(W) === r;
    }
    function J(W) {
      return _(W) === a;
    }
    function Pe(W) {
      return _(W) === n;
    }
    function P(W) {
      return _(W) === h;
    }
    function Ae(W) {
      return _(W) === v;
    }
    ce.ContextConsumer = G, ce.ContextProvider = z, ce.Element = xe, ce.ForwardRef = Re, ce.Fragment = B, ce.Lazy = ve, ce.Memo = he, ce.Portal = pe, ce.Profiler = ne, ce.StrictMode = de, ce.Suspense = ye, ce.SuspenseList = L, ce.isAsyncMode = s, ce.isConcurrentMode = d, ce.isContextConsumer = C, ce.isContextProvider = A, ce.isElement = x, ce.isForwardRef = V, ce.isFragment = N, ce.isLazy = I, ce.isMemo = j, ce.isPortal = q, ce.isProfiler = J, ce.isStrictMode = Pe, ce.isSuspense = P, ce.isSuspenseList = Ae, ce.isValidElementType = U, ce.typeOf = _;
  }()), ce;
}
process.env.NODE_ENV === "production" ? hn.exports = $i() : hn.exports = Ai();
var Co = hn.exports;
const Ii = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Ni(e) {
  const r = `${e}`.match(Ii);
  return r && r[1] || "";
}
function ua(e, r = "") {
  return e.displayName || e.name || Ni(e) || r;
}
function xo(e, r, t) {
  const n = ua(r);
  return e.displayName || (n !== "" ? `${t}(${n})` : t);
}
function ji(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ua(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Co.ForwardRef:
          return xo(e, e.render, "ForwardRef");
        case Co.Memo:
          return xo(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Tr(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Pr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var Ie = Rn();
const Di = /* @__PURE__ */ oa(Ie), Po = /* @__PURE__ */ ii({
  __proto__: null,
  default: Di
}, [Ie]);
function Mi(e) {
  const r = typeof e;
  switch (r) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return r;
  }
}
function Fi(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const Li = Number.isInteger || Fi;
function ca(e, r, t, n) {
  const a = e[r];
  if (a == null || !Li(a)) {
    const i = Mi(a);
    return new RangeError(`Invalid ${n} \`${r}\` of type \`${i}\` supplied to \`${t}\`, expected \`integer\`.`);
  }
  return null;
}
function fa(e, r, ...t) {
  return e[r] === void 0 ? null : ca(e, r, ...t);
}
function gn() {
  return null;
}
fa.isRequired = ca;
gn.isRequired = gn;
const Vi = process.env.NODE_ENV === "production" ? gn : fa;
function la(e, r) {
  const t = ee({}, r);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      t[n] = ee({}, e[n], t[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const a = e[n] || {}, i = r[n];
      t[n] = {}, !i || !Object.keys(i) ? t[n] = a : !a || !Object.keys(a) ? t[n] = i : (t[n] = ee({}, i), Object.keys(a).forEach((f) => {
        t[n][f] = la(a[f], i[f]);
      }));
    } else
      t[n] === void 0 && (t[n] = e[n]);
  }), t;
}
function Ui(e, r, t = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (a) => {
      n[a] = e[a].reduce((i, f) => {
        if (f) {
          const l = r(f);
          l !== "" && i.push(l), t && t[f] && i.push(t[f]);
        }
        return i;
      }, []).join(" ");
    }
  ), n;
}
const ko = (e) => e, Wi = () => {
  let e = ko;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = ko;
    }
  };
}, Yi = Wi(), zi = Yi, Bi = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function On(e, r, t = "Mui") {
  const n = Bi[r];
  return n ? `${t}-${n}` : `${zi.generate(e)}-${r}`;
}
function qi(e, r, t = "Mui") {
  const n = {};
  return r.forEach((a) => {
    n[a] = On(e, a, t);
  }), n;
}
const Tn = "$$material";
function tr(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(r.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
function da(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Ki = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Gi = /* @__PURE__ */ da(
  function(e) {
    return Ki.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Hi(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Ji(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Xi = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(a) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(a, i), n.tags.push(a);
    }, this.isSpeedy = t.speedy === void 0 ? process.env.NODE_ENV === "production" : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ji(this));
    var a = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var f = Hi(a);
      try {
        f.insertRule(n, f.cssRules.length);
      } catch (l) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', l);
      }
    } else
      a.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), Fe = "-ms-", St = "-moz-", oe = "-webkit-", Cn = "comm", xn = "rule", Pn = "decl", Qi = "@import", pa = "@keyframes", Zi = "@layer", es = Math.abs, Ct = String.fromCharCode, rs = Object.assign;
function ts(e, r) {
  return Me(e, 0) ^ 45 ? (((r << 2 ^ Me(e, 0)) << 2 ^ Me(e, 1)) << 2 ^ Me(e, 2)) << 2 ^ Me(e, 3) : 0;
}
function ma(e) {
  return e.trim();
}
function ns(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function ae(e, r, t) {
  return e.replace(r, t);
}
function bn(e, r) {
  return e.indexOf(r);
}
function Me(e, r) {
  return e.charCodeAt(r) | 0;
}
function zr(e, r, t) {
  return e.slice(r, t);
}
function Xe(e) {
  return e.length;
}
function kn(e) {
  return e.length;
}
function yt(e, r) {
  return r.push(e), e;
}
function os(e, r) {
  return e.map(r).join("");
}
var xt = 1, kr = 1, va = 0, Ue = 0, $e = 0, $r = "";
function Pt(e, r, t, n, a, i, f) {
  return { value: e, root: r, parent: t, type: n, props: a, children: i, line: xt, column: kr, length: f, return: "" };
}
function Lr(e, r) {
  return rs(Pt("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function as() {
  return $e;
}
function is() {
  return $e = Ue > 0 ? Me($r, --Ue) : 0, kr--, $e === 10 && (kr = 1, xt--), $e;
}
function ze() {
  return $e = Ue < va ? Me($r, Ue++) : 0, kr++, $e === 10 && (kr = 1, xt++), $e;
}
function Ze() {
  return Me($r, Ue);
}
function ht() {
  return Ue;
}
function Kr(e, r) {
  return zr($r, e, r);
}
function Br(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ya(e) {
  return xt = kr = 1, va = Xe($r = e), Ue = 0, [];
}
function ha(e) {
  return $r = "", e;
}
function gt(e) {
  return ma(Kr(Ue - 1, En(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ss(e) {
  for (; ($e = Ze()) && $e < 33; )
    ze();
  return Br(e) > 2 || Br($e) > 3 ? "" : " ";
}
function us(e, r) {
  for (; --r && ze() && !($e < 48 || $e > 102 || $e > 57 && $e < 65 || $e > 70 && $e < 97); )
    ;
  return Kr(e, ht() + (r < 6 && Ze() == 32 && ze() == 32));
}
function En(e) {
  for (; ze(); )
    switch ($e) {
      case e:
        return Ue;
      case 34:
      case 39:
        e !== 34 && e !== 39 && En($e);
        break;
      case 40:
        e === 41 && En(e);
        break;
      case 92:
        ze();
        break;
    }
  return Ue;
}
function cs(e, r) {
  for (; ze() && e + $e !== 47 + 10; )
    if (e + $e === 42 + 42 && Ze() === 47)
      break;
  return "/*" + Kr(r, Ue - 1) + "*" + Ct(e === 47 ? e : ze());
}
function fs(e) {
  for (; !Br(Ze()); )
    ze();
  return Kr(e, Ue);
}
function ls(e) {
  return ha(bt("", null, null, null, [""], e = ya(e), 0, [0], e));
}
function bt(e, r, t, n, a, i, f, l, m) {
  for (var h = 0, v = 0, S = f, E = 0, T = 0, w = 0, y = 1, g = 1, $ = 1, F = 0, Y = "", U = a, _ = i, G = n, z = Y; g; )
    switch (w = F, F = ze()) {
      case 40:
        if (w != 108 && Me(z, S - 1) == 58) {
          bn(z += ae(gt(F), "&", "&\f"), "&\f") != -1 && ($ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        z += gt(F);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        z += ss(w);
        break;
      case 92:
        z += us(ht() - 1, 7);
        continue;
      case 47:
        switch (Ze()) {
          case 42:
          case 47:
            yt(ds(cs(ze(), ht()), r, t), m);
            break;
          default:
            z += "/";
        }
        break;
      case 123 * y:
        l[h++] = Xe(z) * $;
      case 125 * y:
      case 59:
      case 0:
        switch (F) {
          case 0:
          case 125:
            g = 0;
          case 59 + v:
            $ == -1 && (z = ae(z, /\f/g, "")), T > 0 && Xe(z) - S && yt(T > 32 ? Ao(z + ";", n, t, S - 1) : Ao(ae(z, " ", "") + ";", n, t, S - 2), m);
            break;
          case 59:
            z += ";";
          default:
            if (yt(G = $o(z, r, t, h, v, a, l, Y, U = [], _ = [], S), i), F === 123)
              if (v === 0)
                bt(z, r, G, G, U, i, S, l, _);
              else
                switch (E === 99 && Me(z, 3) === 110 ? 100 : E) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    bt(e, G, G, n && yt($o(e, G, G, 0, 0, a, l, Y, a, U = [], S), _), a, _, S, l, n ? U : _);
                    break;
                  default:
                    bt(z, G, G, G, [""], _, 0, l, _);
                }
        }
        h = v = T = 0, y = $ = 1, Y = z = "", S = f;
        break;
      case 58:
        S = 1 + Xe(z), T = w;
      default:
        if (y < 1) {
          if (F == 123)
            --y;
          else if (F == 125 && y++ == 0 && is() == 125)
            continue;
        }
        switch (z += Ct(F), F * y) {
          case 38:
            $ = v > 0 ? 1 : (z += "\f", -1);
            break;
          case 44:
            l[h++] = (Xe(z) - 1) * $, $ = 1;
            break;
          case 64:
            Ze() === 45 && (z += gt(ze())), E = Ze(), v = S = Xe(Y = z += fs(ht())), F++;
            break;
          case 45:
            w === 45 && Xe(z) == 2 && (y = 0);
        }
    }
  return i;
}
function $o(e, r, t, n, a, i, f, l, m, h, v) {
  for (var S = a - 1, E = a === 0 ? i : [""], T = kn(E), w = 0, y = 0, g = 0; w < n; ++w)
    for (var $ = 0, F = zr(e, S + 1, S = es(y = f[w])), Y = e; $ < T; ++$)
      (Y = ma(y > 0 ? E[$] + " " + F : ae(F, /&\f/g, E[$]))) && (m[g++] = Y);
  return Pt(e, r, t, a === 0 ? xn : l, m, h, v);
}
function ds(e, r, t) {
  return Pt(e, r, t, Cn, Ct(as()), zr(e, 2, -2), 0);
}
function Ao(e, r, t, n) {
  return Pt(e, r, t, Pn, zr(e, 0, n), zr(e, n + 1, -1), n);
}
function Cr(e, r) {
  for (var t = "", n = kn(e), a = 0; a < n; a++)
    t += r(e[a], a, e, r) || "";
  return t;
}
function ps(e, r, t, n) {
  switch (e.type) {
    case Zi:
      if (e.children.length)
        break;
    case Qi:
    case Pn:
      return e.return = e.return || e.value;
    case Cn:
      return "";
    case pa:
      return e.return = e.value + "{" + Cr(e.children, n) + "}";
    case xn:
      e.value = e.props.join(",");
  }
  return Xe(t = Cr(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function ms(e) {
  var r = kn(e);
  return function(t, n, a, i) {
    for (var f = "", l = 0; l < r; l++)
      f += e[l](t, n, a, i) || "";
    return f;
  };
}
function vs(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
var ys = function(r, t, n) {
  for (var a = 0, i = 0; a = i, i = Ze(), a === 38 && i === 12 && (t[n] = 1), !Br(i); )
    ze();
  return Kr(r, Ue);
}, hs = function(r, t) {
  var n = -1, a = 44;
  do
    switch (Br(a)) {
      case 0:
        a === 38 && Ze() === 12 && (t[n] = 1), r[n] += ys(Ue - 1, t, n);
        break;
      case 2:
        r[n] += gt(a);
        break;
      case 4:
        if (a === 44) {
          r[++n] = Ze() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += Ct(a);
    }
  while (a = ze());
  return r;
}, gs = function(r, t) {
  return ha(hs(ya(r), t));
}, Io = /* @__PURE__ */ new WeakMap(), bs = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, a = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Io.get(n)) && !a) {
      Io.set(r, !0);
      for (var i = [], f = gs(t, i), l = n.props, m = 0, h = 0; m < f.length; m++)
        for (var v = 0; v < l.length; v++, h++)
          r.props[h] = i[m] ? f[m].replace(/&\f/g, l[v]) : l[v] + " " + f[m];
    }
  }
}, Es = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, _s = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Ss = function(r) {
  return r.type === "comm" && r.children.indexOf(_s) > -1;
}, Rs = function(r) {
  return function(t, n, a) {
    if (!(t.type !== "rule" || r.compat)) {
      var i = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var f = !!t.parent, l = f ? t.parent.children : (
          // global rule at the root level
          a
        ), m = l.length - 1; m >= 0; m--) {
          var h = l[m];
          if (h.line < t.line)
            break;
          if (h.column < t.column) {
            if (Ss(h))
              return;
            break;
          }
        }
        i.forEach(function(v) {
          console.error('The pseudo class "' + v + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + v.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, ga = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, ws = function(r, t) {
  for (var n = r - 1; n >= 0; n--)
    if (!ga(t[n]))
      return !0;
  return !1;
}, No = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, Os = function(r, t, n) {
  ga(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), No(r)) : ws(t, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), No(r)));
};
function ba(e, r) {
  switch (ts(e, r)) {
    case 5103:
      return oe + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return oe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return oe + e + St + e + Fe + e + e;
    case 6828:
    case 4268:
      return oe + e + Fe + e + e;
    case 6165:
      return oe + e + Fe + "flex-" + e + e;
    case 5187:
      return oe + e + ae(e, /(\w+).+(:[^]+)/, oe + "box-$1$2" + Fe + "flex-$1$2") + e;
    case 5443:
      return oe + e + Fe + "flex-item-" + ae(e, /flex-|-self/, "") + e;
    case 4675:
      return oe + e + Fe + "flex-line-pack" + ae(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return oe + e + Fe + ae(e, "shrink", "negative") + e;
    case 5292:
      return oe + e + Fe + ae(e, "basis", "preferred-size") + e;
    case 6060:
      return oe + "box-" + ae(e, "-grow", "") + oe + e + Fe + ae(e, "grow", "positive") + e;
    case 4554:
      return oe + ae(e, /([^-])(transform)/g, "$1" + oe + "$2") + e;
    case 6187:
      return ae(ae(ae(e, /(zoom-|grab)/, oe + "$1"), /(image-set)/, oe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ae(e, /(image-set\([^]*)/, oe + "$1$`$1");
    case 4968:
      return ae(ae(e, /(.+:)(flex-)?(.*)/, oe + "box-pack:$3" + Fe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + oe + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ae(e, /(.+)-inline(.+)/, oe + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Xe(e) - 1 - r > 6)
        switch (Me(e, r + 1)) {
          case 109:
            if (Me(e, r + 4) !== 45)
              break;
          case 102:
            return ae(e, /(.+:)(.+)-([^]+)/, "$1" + oe + "$2-$3$1" + St + (Me(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~bn(e, "stretch") ? ba(ae(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (Me(e, r + 1) !== 115)
        break;
    case 6444:
      switch (Me(e, Xe(e) - 3 - (~bn(e, "!important") && 10))) {
        case 107:
          return ae(e, ":", ":" + oe) + e;
        case 101:
          return ae(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + oe + (Me(e, 14) === 45 ? "inline-" : "") + "box$3$1" + oe + "$2$3$1" + Fe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Me(e, r + 11)) {
        case 114:
          return oe + e + Fe + ae(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return oe + e + Fe + ae(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return oe + e + Fe + ae(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return oe + e + Fe + e + e;
  }
  return e;
}
var Ts = function(r, t, n, a) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case Pn:
        r.return = ba(r.value, r.length);
        break;
      case pa:
        return Cr([Lr(r, {
          value: ae(r.value, "@", "@" + oe)
        })], a);
      case xn:
        if (r.length)
          return os(r.props, function(i) {
            switch (ns(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Cr([Lr(r, {
                  props: [ae(i, /:(read-\w+)/, ":" + St + "$1")]
                })], a);
              case "::placeholder":
                return Cr([Lr(r, {
                  props: [ae(i, /:(plac\w+)/, ":" + oe + "input-$1")]
                }), Lr(r, {
                  props: [ae(i, /:(plac\w+)/, ":" + St + "$1")]
                }), Lr(r, {
                  props: [ae(i, /:(plac\w+)/, Fe + "input-$1")]
                })], a);
            }
            return "";
          });
    }
}, Cs = [Ts], xs = function(r) {
  var t = r.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(y) {
      var g = y.getAttribute("data-emotion");
      g.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var a = r.stylisPlugins || Cs;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var i = {}, f, l = [];
  f = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(y) {
      for (var g = y.getAttribute("data-emotion").split(" "), $ = 1; $ < g.length; $++)
        i[g[$]] = !0;
      l.push(y);
    }
  );
  var m, h = [bs, Es];
  process.env.NODE_ENV !== "production" && h.push(Rs({
    get compat() {
      return w.compat;
    }
  }), Os);
  {
    var v, S = [ps, process.env.NODE_ENV !== "production" ? function(y) {
      y.root || (y.return ? v.insert(y.return) : y.value && y.type !== Cn && v.insert(y.value + "{}"));
    } : vs(function(y) {
      v.insert(y);
    })], E = ms(h.concat(a, S)), T = function(g) {
      return Cr(ls(g), E);
    };
    m = function(g, $, F, Y) {
      v = F, process.env.NODE_ENV !== "production" && $.map !== void 0 && (v = {
        insert: function(_) {
          F.insert(_ + $.map);
        }
      }), T(g ? g + "{" + $.styles + "}" : $.styles), Y && (w.inserted[$.name] = !0);
    };
  }
  var w = {
    key: t,
    sheet: new Xi({
      key: t,
      container: f,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: m
  };
  return w.sheet.hydrate(l), w;
}, Ps = !0;
function Ea(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(a) {
    e[a] !== void 0 ? r.push(e[a] + ";") : n += a + " ";
  }), n;
}
var $n = function(r, t, n) {
  var a = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Ps === !1) && r.registered[a] === void 0 && (r.registered[a] = t.styles);
}, _a = function(r, t, n) {
  $n(r, t, n);
  var a = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + a : "", i, r.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function ks(e) {
  for (var r = 0, t, n = 0, a = e.length; a >= 4; ++n, a -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var $s = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, jo = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, As = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Is = /[A-Z]|^ms/g, Sa = /_EMO_([^_]+?)_([^]*?)_EMO_/g, An = function(r) {
  return r.charCodeAt(1) === 45;
}, Do = function(r) {
  return r != null && typeof r != "boolean";
}, pn = /* @__PURE__ */ da(function(e) {
  return An(e) ? e : e.replace(Is, "-$&").toLowerCase();
}), Rt = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(Sa, function(n, a, i) {
          return Ke = {
            name: a,
            styles: i,
            next: Ke
          }, a;
        });
  }
  return $s[r] !== 1 && !An(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var Ns = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, js = ["normal", "none", "initial", "inherit", "unset"], Ds = Rt, Ms = /^-ms-/, Fs = /-(.)/g, Mo = {};
  Rt = function(r, t) {
    if (r === "content" && (typeof t != "string" || js.indexOf(t) === -1 && !Ns.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var n = Ds(r, t);
    return n !== "" && !An(r) && r.indexOf("-") !== -1 && Mo[r] === void 0 && (Mo[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(Ms, "ms-").replace(Fs, function(a, i) {
      return i.toUpperCase();
    }) + "?")), n;
  };
}
var Ra = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function qr(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Ra);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return Ke = {
          name: t.name,
          styles: t.styles,
          next: Ke
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            Ke = {
              name: n.name,
              styles: n.styles,
              next: Ke
            }, n = n.next;
        var a = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (a += t.map), a;
      }
      return Ls(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var i = Ke, f = t(e);
        return Ke = i, qr(e, r, f);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var l = [], m = t.replace(Sa, function(v, S, E) {
          var T = "animation" + l.length;
          return l.push("const " + T + " = keyframes`" + E.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + T + "}";
        });
        l.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(l, ["`" + m + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + m + "`"));
      }
      break;
  }
  if (r == null)
    return t;
  var h = r[t];
  return h !== void 0 ? h : t;
}
function Ls(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var a = 0; a < t.length; a++)
      n += qr(e, r, t[a]) + ";";
  else
    for (var i in t) {
      var f = t[i];
      if (typeof f != "object")
        r != null && r[f] !== void 0 ? n += i + "{" + r[f] + "}" : Do(f) && (n += pn(i) + ":" + Rt(i, f) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Ra);
        if (Array.isArray(f) && typeof f[0] == "string" && (r == null || r[f[0]] === void 0))
          for (var l = 0; l < f.length; l++)
            Do(f[l]) && (n += pn(i) + ":" + Rt(i, f[l]) + ";");
        else {
          var m = qr(e, r, f);
          switch (i) {
            case "animation":
            case "animationName": {
              n += pn(i) + ":" + m + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(As), n += i + "{" + m + "}";
          }
        }
      }
    }
  return n;
}
var Fo = /label:\s*([^\s;\n{]+)\s*(;|$)/g, wa;
process.env.NODE_ENV !== "production" && (wa = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var Ke, _n = function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var a = !0, i = "";
  Ke = void 0;
  var f = r[0];
  f == null || f.raw === void 0 ? (a = !1, i += qr(n, t, f)) : (process.env.NODE_ENV !== "production" && f[0] === void 0 && console.error(jo), i += f[0]);
  for (var l = 1; l < r.length; l++)
    i += qr(n, t, r[l]), a && (process.env.NODE_ENV !== "production" && f[l] === void 0 && console.error(jo), i += f[l]);
  var m;
  process.env.NODE_ENV !== "production" && (i = i.replace(wa, function(E) {
    return m = E, "";
  })), Fo.lastIndex = 0;
  for (var h = "", v; (v = Fo.exec(i)) !== null; )
    h += "-" + // $FlowFixMe we know it's not null
    v[1];
  var S = ks(i) + h;
  return process.env.NODE_ENV !== "production" ? {
    name: S,
    styles: i,
    map: m,
    next: Ke,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: S,
    styles: i,
    next: Ke
  };
}, Vs = function(r) {
  return r();
}, Us = Po["useInsertionEffect"] ? Po["useInsertionEffect"] : !1, Oa = Us || Vs, Ws = {}.hasOwnProperty, In = /* @__PURE__ */ Ie.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ xs({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (In.displayName = "EmotionCacheContext");
In.Provider;
var Ta = function(r) {
  return /* @__PURE__ */ Ie.forwardRef(function(t, n) {
    var a = Ie.useContext(In);
    return r(t, a, n);
  });
}, kt = /* @__PURE__ */ Ie.createContext({});
process.env.NODE_ENV !== "production" && (kt.displayName = "EmotionThemeContext");
var Lo = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Vo = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Ys = function(r) {
  var t = r.cache, n = r.serialized, a = r.isStringTag;
  return $n(t, n, a), Oa(function() {
    return _a(t, n, a);
  }), null;
}, zs = /* @__PURE__ */ Ta(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var a = e[Lo], i = [n], f = "";
  typeof e.className == "string" ? f = Ea(r.registered, i, e.className) : e.className != null && (f = e.className + " ");
  var l = _n(i, void 0, Ie.useContext(kt));
  if (process.env.NODE_ENV !== "production" && l.name.indexOf("-") === -1) {
    var m = e[Vo];
    m && (l = _n([l, "label:" + m + ";"]));
  }
  f += r.key + "-" + l.name;
  var h = {};
  for (var v in e)
    Ws.call(e, v) && v !== "css" && v !== Lo && (process.env.NODE_ENV === "production" || v !== Vo) && (h[v] = e[v]);
  return h.ref = t, h.className = f, /* @__PURE__ */ Ie.createElement(Ie.Fragment, null, /* @__PURE__ */ Ie.createElement(Ys, {
    cache: r,
    serialized: l,
    isStringTag: typeof a == "string"
  }), /* @__PURE__ */ Ie.createElement(a, h));
});
process.env.NODE_ENV !== "production" && (zs.displayName = "EmotionCssPropInternal");
var Bs = Gi, qs = function(r) {
  return r !== "theme";
}, Uo = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? Bs : qs;
}, Wo = function(r, t, n) {
  var a;
  if (t) {
    var i = t.shouldForwardProp;
    a = r.__emotion_forwardProp && i ? function(f) {
      return r.__emotion_forwardProp(f) && i(f);
    } : i;
  }
  return typeof a != "function" && n && (a = r.__emotion_forwardProp), a;
}, Yo = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Ks = function(r) {
  var t = r.cache, n = r.serialized, a = r.isStringTag;
  return $n(t, n, a), Oa(function() {
    return _a(t, n, a);
  }), null;
}, Gs = function e(r, t) {
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = r.__emotion_real === r, a = n && r.__emotion_base || r, i, f;
  t !== void 0 && (i = t.label, f = t.target);
  var l = Wo(r, t, n), m = l || Uo(a), h = !m("as");
  return function() {
    var v = arguments, S = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && S.push("label:" + i + ";"), v[0] == null || v[0].raw === void 0)
      S.push.apply(S, v);
    else {
      process.env.NODE_ENV !== "production" && v[0][0] === void 0 && console.error(Yo), S.push(v[0][0]);
      for (var E = v.length, T = 1; T < E; T++)
        process.env.NODE_ENV !== "production" && v[0][T] === void 0 && console.error(Yo), S.push(v[T], v[0][T]);
    }
    var w = Ta(function(y, g, $) {
      var F = h && y.as || a, Y = "", U = [], _ = y;
      if (y.theme == null) {
        _ = {};
        for (var G in y)
          _[G] = y[G];
        _.theme = Ie.useContext(kt);
      }
      typeof y.className == "string" ? Y = Ea(g.registered, U, y.className) : y.className != null && (Y = y.className + " ");
      var z = _n(S.concat(U), g.registered, _);
      Y += g.key + "-" + z.name, f !== void 0 && (Y += " " + f);
      var xe = h && l === void 0 ? Uo(F) : m, Re = {};
      for (var B in y)
        h && B === "as" || // $FlowFixMe
        xe(B) && (Re[B] = y[B]);
      return Re.className = Y, Re.ref = $, /* @__PURE__ */ Ie.createElement(Ie.Fragment, null, /* @__PURE__ */ Ie.createElement(Ks, {
        cache: g,
        serialized: z,
        isStringTag: typeof F == "string"
      }), /* @__PURE__ */ Ie.createElement(F, Re));
    });
    return w.displayName = i !== void 0 ? i : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", w.defaultProps = r.defaultProps, w.__emotion_real = w, w.__emotion_base = a, w.__emotion_styles = S, w.__emotion_forwardProp = l, Object.defineProperty(w, "toString", {
      value: function() {
        return f === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + f;
      }
    }), w.withComponent = function(y, g) {
      return e(y, ee({}, t, g, {
        shouldForwardProp: Wo(w, g, !0)
      })).apply(void 0, S);
    }, w;
  };
}, Hs = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Sn = Gs.bind();
Hs.forEach(function(e) {
  Sn[e] = Sn(e);
});
/**
 * @mui/styled-engine v5.14.13
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Js(e, r) {
  const t = Sn(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const a = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${a})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${a})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
const Xs = (e, r) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
}, Qs = ["values", "unit", "step"], Zs = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => ee({}, t, {
    [n.key]: n.val
  }), {});
};
function eu(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5
  } = e, a = tr(e, Qs), i = Zs(r), f = Object.keys(i);
  function l(E) {
    return `@media (min-width:${typeof r[E] == "number" ? r[E] : E}${t})`;
  }
  function m(E) {
    return `@media (max-width:${(typeof r[E] == "number" ? r[E] : E) - n / 100}${t})`;
  }
  function h(E, T) {
    const w = f.indexOf(T);
    return `@media (min-width:${typeof r[E] == "number" ? r[E] : E}${t}) and (max-width:${(w !== -1 && typeof r[f[w]] == "number" ? r[f[w]] : T) - n / 100}${t})`;
  }
  function v(E) {
    return f.indexOf(E) + 1 < f.length ? h(E, f[f.indexOf(E) + 1]) : l(E);
  }
  function S(E) {
    const T = f.indexOf(E);
    return T === 0 ? l(f[1]) : T === f.length - 1 ? m(f[T]) : h(E, f[f.indexOf(E) + 1]).replace("@media", "@media not all and");
  }
  return ee({
    keys: f,
    values: i,
    up: l,
    down: m,
    between: h,
    only: v,
    not: S,
    unit: t
  }, a);
}
const ru = {
  borderRadius: 4
}, tu = ru, nu = process.env.NODE_ENV !== "production" ? Ce.oneOfType([Ce.number, Ce.string, Ce.object, Ce.array]) : {}, ur = nu;
function Ur(e, r) {
  return r ? Ge(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Nn = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, zo = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Nn[e]}px)`
};
function rr(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const i = n.breakpoints || zo;
    return r.reduce((f, l, m) => (f[i.up(i.keys[m])] = t(r[m]), f), {});
  }
  if (typeof r == "object") {
    const i = n.breakpoints || zo;
    return Object.keys(r).reduce((f, l) => {
      if (Object.keys(i.values || Nn).indexOf(l) !== -1) {
        const m = i.up(l);
        f[m] = t(r[l], l);
      } else {
        const m = l;
        f[m] = r[m];
      }
      return f;
    }, {});
  }
  return t(r);
}
function ou(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, a) => {
    const i = e.up(a);
    return n[i] = {}, n;
  }, {})) || {};
}
function au(e, r) {
  return e.reduce((t, n) => {
    const a = t[n];
    return (!a || Object.keys(a).length === 0) && delete t[n], t;
  }, r);
}
function $t(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((a, i) => a && a[i] ? a[i] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, a) => n && n[a] != null ? n[a] : null, e);
}
function wt(e, r, t, n = t) {
  let a;
  return typeof e == "function" ? a = e(t) : Array.isArray(e) ? a = e[t] || n : a = $t(e, t) || n, typeof a == "object" && process.env.NODE_ENV !== "production" && console.warn(`MUI: The value found in theme for prop: "${t}" is an [Object] instead of string or number. Check if you forgot to add the correct dotted notation, eg, "background.paper" instead of "background".`), r && (a = r(a, n, e)), a;
}
function fe(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: a
  } = e, i = (f) => {
    if (f[r] == null)
      return null;
    const l = f[r], m = f.theme, h = $t(m, n) || {};
    return rr(f, l, (S) => {
      let E = wt(h, a, S);
      return S === E && typeof S == "string" && (E = wt(h, a, `${r}${S === "default" ? "" : Tr(S)}`, S)), t === !1 ? E : {
        [t]: E
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: ur
  } : {}, i.filterProps = [r], i;
}
function iu(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const su = {
  m: "margin",
  p: "padding"
}, uu = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Bo = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, cu = iu((e) => {
  if (e.length > 2)
    if (Bo[e])
      e = Bo[e];
    else
      return [e];
  const [r, t] = e.split(""), n = su[r], a = uu[t] || "";
  return Array.isArray(a) ? a.map((i) => n + i) : [n + a];
}), At = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], It = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], fu = [...At, ...It];
function Gr(e, r, t, n) {
  var a;
  const i = (a = $t(e, r, !1)) != null ? a : t;
  return typeof i == "number" ? (f) => typeof f == "string" ? f : (process.env.NODE_ENV !== "production" && typeof f != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${f}.`), i * f) : Array.isArray(i) ? (f) => typeof f == "string" ? f : (process.env.NODE_ENV !== "production" && (Number.isInteger(f) ? f > i.length - 1 && console.error([`MUI: The value provided (${f}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${f} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`))), i[f]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Ca(e) {
  return Gr(e, "spacing", 8, "spacing");
}
function Hr(e, r) {
  if (typeof r == "string" || r == null)
    return r;
  const t = Math.abs(r), n = e(t);
  return r >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function lu(e, r) {
  return (t) => e.reduce((n, a) => (n[a] = Hr(r, t), n), {});
}
function du(e, r, t, n) {
  if (r.indexOf(t) === -1)
    return null;
  const a = cu(t), i = lu(a, n), f = e[t];
  return rr(e, f, i);
}
function xa(e, r) {
  const t = Ca(e.theme);
  return Object.keys(e).map((n) => du(e, r, n, t)).reduce(Ur, {});
}
function Oe(e) {
  return xa(e, At);
}
Oe.propTypes = process.env.NODE_ENV !== "production" ? At.reduce((e, r) => (e[r] = ur, e), {}) : {};
Oe.filterProps = At;
function Te(e) {
  return xa(e, It);
}
Te.propTypes = process.env.NODE_ENV !== "production" ? It.reduce((e, r) => (e[r] = ur, e), {}) : {};
Te.filterProps = It;
process.env.NODE_ENV !== "production" && fu.reduce((e, r) => (e[r] = ur, e), {});
function pu(e = 8) {
  if (e.mui)
    return e;
  const r = Ca({
    spacing: e
  }), t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const f = r(i);
    return typeof f == "number" ? `${f}px` : f;
  }).join(" "));
  return t.mui = !0, t;
}
function Nt(...e) {
  const r = e.reduce((n, a) => (a.filterProps.forEach((i) => {
    n[i] = a;
  }), n), {}), t = (n) => Object.keys(n).reduce((a, i) => r[i] ? Ur(a, r[i](n)) : a, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, a) => Object.assign(n, a.propTypes), {}) : {}, t.filterProps = e.reduce((n, a) => n.concat(a.filterProps), []), t;
}
function Qe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const mu = fe({
  prop: "border",
  themeKey: "borders",
  transform: Qe
}), vu = fe({
  prop: "borderTop",
  themeKey: "borders",
  transform: Qe
}), yu = fe({
  prop: "borderRight",
  themeKey: "borders",
  transform: Qe
}), hu = fe({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Qe
}), gu = fe({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Qe
}), bu = fe({
  prop: "borderColor",
  themeKey: "palette"
}), Eu = fe({
  prop: "borderTopColor",
  themeKey: "palette"
}), _u = fe({
  prop: "borderRightColor",
  themeKey: "palette"
}), Su = fe({
  prop: "borderBottomColor",
  themeKey: "palette"
}), Ru = fe({
  prop: "borderLeftColor",
  themeKey: "palette"
}), jt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = Gr(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: Hr(r, n)
    });
    return rr(e, e.borderRadius, t);
  }
  return null;
};
jt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: ur
} : {};
jt.filterProps = ["borderRadius"];
Nt(mu, vu, yu, hu, gu, bu, Eu, _u, Su, Ru, jt);
const Dt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = Gr(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: Hr(r, n)
    });
    return rr(e, e.gap, t);
  }
  return null;
};
Dt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: ur
} : {};
Dt.filterProps = ["gap"];
const Mt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = Gr(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: Hr(r, n)
    });
    return rr(e, e.columnGap, t);
  }
  return null;
};
Mt.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: ur
} : {};
Mt.filterProps = ["columnGap"];
const Ft = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = Gr(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: Hr(r, n)
    });
    return rr(e, e.rowGap, t);
  }
  return null;
};
Ft.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: ur
} : {};
Ft.filterProps = ["rowGap"];
const wu = fe({
  prop: "gridColumn"
}), Ou = fe({
  prop: "gridRow"
}), Tu = fe({
  prop: "gridAutoFlow"
}), Cu = fe({
  prop: "gridAutoColumns"
}), xu = fe({
  prop: "gridAutoRows"
}), Pu = fe({
  prop: "gridTemplateColumns"
}), ku = fe({
  prop: "gridTemplateRows"
}), $u = fe({
  prop: "gridTemplateAreas"
}), Au = fe({
  prop: "gridArea"
});
Nt(Dt, Mt, Ft, wu, Ou, Tu, Cu, xu, Pu, ku, $u, Au);
function xr(e, r) {
  return r === "grey" ? r : e;
}
const Iu = fe({
  prop: "color",
  themeKey: "palette",
  transform: xr
}), Nu = fe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: xr
}), ju = fe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: xr
});
Nt(Iu, Nu, ju);
function Ye(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Du = fe({
  prop: "width",
  transform: Ye
}), jn = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var n, a;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[t]) || Nn[t];
      return i ? ((a = e.theme) == null || (a = a.breakpoints) == null ? void 0 : a.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Ye(t)
      };
    };
    return rr(e, e.maxWidth, r);
  }
  return null;
};
jn.filterProps = ["maxWidth"];
const Mu = fe({
  prop: "minWidth",
  transform: Ye
}), Fu = fe({
  prop: "height",
  transform: Ye
}), Lu = fe({
  prop: "maxHeight",
  transform: Ye
}), Vu = fe({
  prop: "minHeight",
  transform: Ye
});
fe({
  prop: "size",
  cssProperty: "width",
  transform: Ye
});
fe({
  prop: "size",
  cssProperty: "height",
  transform: Ye
});
const Uu = fe({
  prop: "boxSizing"
});
Nt(Du, jn, Mu, Fu, Lu, Vu, Uu);
const Wu = {
  // borders
  border: {
    themeKey: "borders",
    transform: Qe
  },
  borderTop: {
    themeKey: "borders",
    transform: Qe
  },
  borderRight: {
    themeKey: "borders",
    transform: Qe
  },
  borderBottom: {
    themeKey: "borders",
    transform: Qe
  },
  borderLeft: {
    themeKey: "borders",
    transform: Qe
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: jt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: xr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: xr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: xr
  },
  // spacing
  p: {
    style: Te
  },
  pt: {
    style: Te
  },
  pr: {
    style: Te
  },
  pb: {
    style: Te
  },
  pl: {
    style: Te
  },
  px: {
    style: Te
  },
  py: {
    style: Te
  },
  padding: {
    style: Te
  },
  paddingTop: {
    style: Te
  },
  paddingRight: {
    style: Te
  },
  paddingBottom: {
    style: Te
  },
  paddingLeft: {
    style: Te
  },
  paddingX: {
    style: Te
  },
  paddingY: {
    style: Te
  },
  paddingInline: {
    style: Te
  },
  paddingInlineStart: {
    style: Te
  },
  paddingInlineEnd: {
    style: Te
  },
  paddingBlock: {
    style: Te
  },
  paddingBlockStart: {
    style: Te
  },
  paddingBlockEnd: {
    style: Te
  },
  m: {
    style: Oe
  },
  mt: {
    style: Oe
  },
  mr: {
    style: Oe
  },
  mb: {
    style: Oe
  },
  ml: {
    style: Oe
  },
  mx: {
    style: Oe
  },
  my: {
    style: Oe
  },
  margin: {
    style: Oe
  },
  marginTop: {
    style: Oe
  },
  marginRight: {
    style: Oe
  },
  marginBottom: {
    style: Oe
  },
  marginLeft: {
    style: Oe
  },
  marginX: {
    style: Oe
  },
  marginY: {
    style: Oe
  },
  marginInline: {
    style: Oe
  },
  marginInlineStart: {
    style: Oe
  },
  marginInlineEnd: {
    style: Oe
  },
  marginBlock: {
    style: Oe
  },
  marginBlockStart: {
    style: Oe
  },
  marginBlockEnd: {
    style: Oe
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Dt
  },
  rowGap: {
    style: Ft
  },
  columnGap: {
    style: Mt
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Ye
  },
  maxWidth: {
    style: jn
  },
  minWidth: {
    transform: Ye
  },
  height: {
    transform: Ye
  },
  maxHeight: {
    transform: Ye
  },
  minHeight: {
    transform: Ye
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, Dn = Wu;
function Yu(...e) {
  const r = e.reduce((n, a) => n.concat(Object.keys(a)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function zu(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Bu() {
  function e(t, n, a, i) {
    const f = {
      [t]: n,
      theme: a
    }, l = i[t];
    if (!l)
      return {
        [t]: n
      };
    const {
      cssProperty: m = t,
      themeKey: h,
      transform: v,
      style: S
    } = l;
    if (n == null)
      return null;
    if (h === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const E = $t(a, h) || {};
    return S ? S(f) : rr(f, n, (w) => {
      let y = wt(E, v, w);
      return w === y && typeof w == "string" && (y = wt(E, v, `${t}${w === "default" ? "" : Tr(w)}`, w)), m === !1 ? y : {
        [m]: y
      };
    });
  }
  function r(t) {
    var n;
    const {
      sx: a,
      theme: i = {}
    } = t || {};
    if (!a)
      return null;
    const f = (n = i.unstable_sxConfig) != null ? n : Dn;
    function l(m) {
      let h = m;
      if (typeof m == "function")
        h = m(i);
      else if (typeof m != "object")
        return m;
      if (!h)
        return null;
      const v = ou(i.breakpoints), S = Object.keys(v);
      let E = v;
      return Object.keys(h).forEach((T) => {
        const w = zu(h[T], i);
        if (w != null)
          if (typeof w == "object")
            if (f[T])
              E = Ur(E, e(T, w, i, f));
            else {
              const y = rr({
                theme: i
              }, w, (g) => ({
                [T]: g
              }));
              Yu(y, w) ? E[T] = r({
                sx: w,
                theme: i
              }) : E = Ur(E, y);
            }
          else
            E = Ur(E, e(T, w, i, f));
      }), au(S, E);
    }
    return Array.isArray(a) ? a.map(l) : l(a);
  }
  return r;
}
const Pa = Bu();
Pa.filterProps = ["sx"];
const Mn = Pa, qu = ["breakpoints", "palette", "spacing", "shape"];
function Fn(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: a,
    shape: i = {}
  } = e, f = tr(e, qu), l = eu(t), m = pu(a);
  let h = Ge({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: ee({
      mode: "light"
    }, n),
    spacing: m,
    shape: ee({}, tu, i)
  }, f);
  return h = r.reduce((v, S) => Ge(v, S), h), h.unstable_sxConfig = ee({}, Dn, f == null ? void 0 : f.unstable_sxConfig), h.unstable_sx = function(S) {
    return Mn({
      sx: S,
      theme: this
    });
  }, h;
}
function Ku(e) {
  return Object.keys(e).length === 0;
}
function Gu(e = null) {
  const r = Ie.useContext(kt);
  return !r || Ku(r) ? e : r;
}
const Hu = Fn();
function ka(e = Hu) {
  return Gu(e);
}
function $a(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (r = 0; r < e.length; r++)
        e[r] && (t = $a(e[r])) && (n && (n += " "), n += t);
    else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function Ju() {
  for (var e, r, t = 0, n = ""; t < arguments.length; )
    (e = arguments[t++]) && (r = $a(e)) && (n && (n += " "), n += r);
  return n;
}
const Xu = ["variant"];
function qo(e) {
  return e.length === 0;
}
function Aa(e) {
  const {
    variant: r
  } = e, t = tr(e, Xu);
  let n = r || "";
  return Object.keys(t).sort().forEach((a) => {
    a === "color" ? n += qo(n) ? e[a] : Tr(e[a]) : n += `${qo(n) ? a : Tr(a)}${Tr(e[a].toString())}`;
  }), n;
}
const Qu = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Zu(e) {
  return Object.keys(e).length === 0;
}
function ec(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const rc = (e, r) => r.components && r.components[e] && r.components[e].styleOverrides ? r.components[e].styleOverrides : null, Ot = (e) => {
  const r = {};
  return e && e.forEach((t) => {
    const n = Aa(t.props);
    r[n] = t.style;
  }), r;
}, tc = (e, r) => {
  let t = [];
  return r && r.components && r.components[e] && r.components[e].variants && (t = r.components[e].variants), Ot(t);
}, Tt = (e, r, t) => {
  const {
    ownerState: n = {}
  } = e, a = [];
  return t && t.forEach((i) => {
    let f = !0;
    Object.keys(i.props).forEach((l) => {
      n[l] !== i.props[l] && e[l] !== i.props[l] && (f = !1);
    }), f && a.push(r[Aa(i.props)]);
  }), a;
}, nc = (e, r, t, n) => {
  var a;
  const i = t == null || (a = t.components) == null || (a = a[n]) == null ? void 0 : a.variants;
  return Tt(e, r, i);
};
function Et(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const oc = Fn(), Ko = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function _t({
  defaultTheme: e,
  theme: r,
  themeId: t
}) {
  return Zu(r) ? e : r[t] || r;
}
function ac(e) {
  return e ? (r, t) => t[e] : null;
}
const Go = ({
  styledArg: e,
  props: r,
  defaultTheme: t,
  themeId: n
}) => {
  const a = e(ee({}, r, {
    theme: _t(ee({}, r, {
      defaultTheme: t,
      themeId: n
    }))
  }));
  let i;
  if (a && a.variants && (i = a.variants, delete a.variants), i) {
    const f = Tt(r, Ot(i), i);
    return [a, ...f];
  }
  return a;
};
function ic(e = {}) {
  const {
    themeId: r,
    defaultTheme: t = oc,
    rootShouldForwardProp: n = Et,
    slotShouldForwardProp: a = Et
  } = e, i = (f) => Mn(ee({}, f, {
    theme: _t(ee({}, f, {
      defaultTheme: t,
      themeId: r
    }))
  }));
  return i.__mui_systemSx = !0, (f, l = {}) => {
    Xs(f, (U) => U.filter((_) => !(_ != null && _.__mui_systemSx)));
    const {
      name: m,
      slot: h,
      skipVariantsResolver: v,
      skipSx: S,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: E = ac(Ko(h))
    } = l, T = tr(l, Qu), w = v !== void 0 ? v : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      h && h !== "Root" && h !== "root" || !1
    ), y = S || !1;
    let g;
    process.env.NODE_ENV !== "production" && m && (g = `${m}-${Ko(h || "Root")}`);
    let $ = Et;
    h === "Root" || h === "root" ? $ = n : h ? $ = a : ec(f) && ($ = void 0);
    const F = Js(f, ee({
      shouldForwardProp: $,
      label: g
    }, T)), Y = (U, ..._) => {
      const G = _ ? _.map((B) => {
        if (typeof B == "function" && B.__emotion_real !== B)
          return (ve) => Go({
            styledArg: B,
            props: ve,
            defaultTheme: t,
            themeId: r
          });
        if (sr(B)) {
          let ve = B, he;
          return B && B.variants && (he = B.variants, delete ve.variants, ve = (pe) => {
            let ne = B;
            return Tt(pe, Ot(he), he).forEach((ye) => {
              ne = Ge(ne, ye);
            }), ne;
          }), ve;
        }
        return B;
      }) : [];
      let z = U;
      if (sr(U)) {
        let B;
        U && U.variants && (B = U.variants, delete z.variants, z = (ve) => {
          let he = U;
          return Tt(ve, Ot(B), B).forEach((ne) => {
            he = Ge(he, ne);
          }), he;
        });
      } else
        typeof U == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        U.__emotion_real !== U && (z = (B) => Go({
          styledArg: U,
          props: B,
          defaultTheme: t,
          themeId: r
        }));
      m && E && G.push((B) => {
        const ve = _t(ee({}, B, {
          defaultTheme: t,
          themeId: r
        })), he = rc(m, ve);
        if (he) {
          const pe = {};
          return Object.entries(he).forEach(([ne, de]) => {
            pe[ne] = typeof de == "function" ? de(ee({}, B, {
              theme: ve
            })) : de;
          }), E(B, pe);
        }
        return null;
      }), m && !w && G.push((B) => {
        const ve = _t(ee({}, B, {
          defaultTheme: t,
          themeId: r
        }));
        return nc(B, tc(m, ve), ve, m);
      }), y || G.push(i);
      const xe = G.length - _.length;
      if (Array.isArray(U) && xe > 0) {
        const B = new Array(xe).fill("");
        z = [...U, ...B], z.raw = [...U.raw, ...B];
      }
      const Re = F(z, ...G);
      if (process.env.NODE_ENV !== "production") {
        let B;
        m && (B = `${m}${Tr(h || "")}`), B === void 0 && (B = `Styled(${ji(f)})`), Re.displayName = B;
      }
      return f.muiName && (Re.muiName = f.muiName), Re;
    };
    return F.withConfig && (Y.withConfig = F.withConfig), Y;
  };
}
function sc(e) {
  const {
    theme: r,
    name: t,
    props: n
  } = e;
  return !r || !r.components || !r.components[t] || !r.components[t].defaultProps ? n : la(r.components[t].defaultProps, n);
}
function uc({
  props: e,
  name: r,
  defaultTheme: t,
  themeId: n
}) {
  let a = ka(t);
  return n && (a = a[n] || a), sc({
    theme: a,
    name: r,
    props: e
  });
}
function Ln(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), Math.min(Math.max(r, e), t);
}
function cc(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, a) => a < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function vr(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return vr(cc(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(t) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Pr(9, e));
  let n = e.substring(r + 1, e.length - 1), a;
  if (t === "color") {
    if (n = n.split(" "), a = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(a) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${a}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Pr(10, a));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: t,
    values: n,
    colorSpace: a
  };
}
function Lt(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.indexOf("rgb") !== -1 ? n = n.map((a, i) => i < 3 ? parseInt(a, 10) : a) : r.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.indexOf("color") !== -1 ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function fc(e) {
  e = vr(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, a = r[2] / 100, i = n * Math.min(a, 1 - a), f = (h, v = (h + t / 30) % 12) => a - i * Math.max(Math.min(v - 3, 9 - v, 1), -1);
  let l = "rgb";
  const m = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  return e.type === "hsla" && (l += "a", m.push(r[3])), Lt({
    type: l,
    values: m
  });
}
function Ho(e) {
  e = vr(e);
  let r = e.type === "hsl" || e.type === "hsla" ? vr(fc(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function Jo(e, r) {
  const t = Ho(e), n = Ho(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function Xo(e, r) {
  return e = vr(e), r = Ln(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, Lt(e);
}
function lc(e, r) {
  if (e = vr(e), r = Ln(r), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - r;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return Lt(e);
}
function dc(e, r) {
  if (e = vr(e), r = Ln(r), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.indexOf("rgb") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return Lt(e);
}
function pc(e, r) {
  return ee({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, r);
}
const mc = ["mode", "contrastThreshold", "tonalOffset"], Qo = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Yr.white,
    default: Yr.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, mn = {
  text: {
    primary: Yr.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Yr.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Zo(e, r, t, n) {
  const a = n.light || n, i = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = dc(e.main, a) : r === "dark" && (e.dark = lc(e.main, i)));
}
function vc(e = "light") {
  return e === "dark" ? {
    main: Rr[200],
    light: Rr[50],
    dark: Rr[400]
  } : {
    main: Rr[700],
    light: Rr[400],
    dark: Rr[800]
  };
}
function yc(e = "light") {
  return e === "dark" ? {
    main: Sr[200],
    light: Sr[50],
    dark: Sr[400]
  } : {
    main: Sr[500],
    light: Sr[300],
    dark: Sr[700]
  };
}
function hc(e = "light") {
  return e === "dark" ? {
    main: _r[500],
    light: _r[300],
    dark: _r[700]
  } : {
    main: _r[700],
    light: _r[400],
    dark: _r[800]
  };
}
function gc(e = "light") {
  return e === "dark" ? {
    main: wr[400],
    light: wr[300],
    dark: wr[700]
  } : {
    main: wr[700],
    light: wr[500],
    dark: wr[900]
  };
}
function bc(e = "light") {
  return e === "dark" ? {
    main: Or[400],
    light: Or[300],
    dark: Or[700]
  } : {
    main: Or[800],
    light: Or[500],
    dark: Or[900]
  };
}
function Ec(e = "light") {
  return e === "dark" ? {
    main: Fr[400],
    light: Fr[300],
    dark: Fr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Fr[500],
    dark: Fr[900]
  };
}
function _c(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2
  } = e, a = tr(e, mc), i = e.primary || vc(r), f = e.secondary || yc(r), l = e.error || hc(r), m = e.info || gc(r), h = e.success || bc(r), v = e.warning || Ec(r);
  function S(y) {
    const g = Jo(y, mn.text.primary) >= t ? mn.text.primary : Qo.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const $ = Jo(y, g);
      $ < 3 && console.error([`MUI: The contrast ratio of ${$}:1 for ${g} on ${y}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return g;
  }
  const E = ({
    color: y,
    name: g,
    mainShade: $ = 500,
    lightShade: F = 300,
    darkShade: Y = 700
  }) => {
    if (y = ee({}, y), !y.main && y[$] && (y.main = y[$]), !y.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${g ? ` (${g})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${$}\` property.` : Pr(11, g ? ` (${g})` : "", $));
    if (typeof y.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${g ? ` (${g})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(y.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Pr(12, g ? ` (${g})` : "", JSON.stringify(y.main)));
    return Zo(y, "light", F, n), Zo(y, "dark", Y, n), y.contrastText || (y.contrastText = S(y.main)), y;
  }, T = {
    dark: mn,
    light: Qo
  };
  return process.env.NODE_ENV !== "production" && (T[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), Ge(ee({
    // A collection of common colors.
    common: ee({}, Yr),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: E({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: E({
      color: f,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: E({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: E({
      color: v,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: E({
      color: m,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: E({
      color: h,
      name: "success"
    }),
    // The grey colors.
    grey: Ei,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: S,
    // Generate a rich color object.
    augmentColor: E,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, T[r]), a);
}
const Sc = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Rc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ea = {
  textTransform: "uppercase"
}, ra = '"Roboto", "Helvetica", "Arial", sans-serif';
function wc(e, r) {
  const t = typeof r == "function" ? r(e) : r, {
    fontFamily: n = ra,
    // The default font size of the Material Specification.
    fontSize: a = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: f = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: m = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: h = 16,
    // Apply the CSS properties to all the variants.
    allVariants: v,
    pxToRem: S
  } = t, E = tr(t, Sc);
  process.env.NODE_ENV !== "production" && (typeof a != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof h != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const T = a / 14, w = S || (($) => `${$ / h * T}rem`), y = ($, F, Y, U, _) => ee({
    fontFamily: n,
    fontWeight: $,
    fontSize: w(F),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: Y
  }, n === ra ? {
    letterSpacing: `${Rc(U / F)}em`
  } : {}, _, v), g = {
    h1: y(i, 96, 1.167, -1.5),
    h2: y(i, 60, 1.2, -0.5),
    h3: y(f, 48, 1.167, 0),
    h4: y(f, 34, 1.235, 0.25),
    h5: y(f, 24, 1.334, 0),
    h6: y(l, 20, 1.6, 0.15),
    subtitle1: y(f, 16, 1.75, 0.15),
    subtitle2: y(l, 14, 1.57, 0.1),
    body1: y(f, 16, 1.5, 0.15),
    body2: y(f, 14, 1.43, 0.15),
    button: y(l, 14, 1.75, 0.4, ea),
    caption: y(f, 12, 1.66, 0.4),
    overline: y(f, 12, 2.66, 1, ea),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ge(ee({
    htmlFontSize: h,
    pxToRem: w,
    fontFamily: n,
    fontSize: a,
    fontWeightLight: i,
    fontWeightRegular: f,
    fontWeightMedium: l,
    fontWeightBold: m
  }, g), E, {
    clone: !1
    // No need to clone deep
  });
}
const Oc = 0.2, Tc = 0.14, Cc = 0.12;
function Ee(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Oc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Tc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Cc})`].join(",");
}
const xc = ["none", Ee(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ee(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ee(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ee(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ee(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ee(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ee(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ee(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ee(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ee(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ee(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ee(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ee(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ee(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ee(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ee(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ee(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ee(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ee(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ee(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ee(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ee(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ee(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ee(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Pc = xc, kc = ["duration", "easing", "delay"], $c = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Ac = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function ta(e) {
  return `${Math.round(e)}ms`;
}
function Ic(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function Nc(e) {
  const r = ee({}, $c, e.easing), t = ee({}, Ac, e.duration);
  return ee({
    getAutoHeightDuration: Ic,
    create: (a = ["all"], i = {}) => {
      const {
        duration: f = t.standard,
        easing: l = r.easeInOut,
        delay: m = 0
      } = i, h = tr(i, kc);
      if (process.env.NODE_ENV !== "production") {
        const v = (E) => typeof E == "string", S = (E) => !isNaN(parseFloat(E));
        !v(a) && !Array.isArray(a) && console.error('MUI: Argument "props" must be a string or Array.'), !S(f) && !v(f) && console.error(`MUI: Argument "duration" must be a number or a string but found ${f}.`), v(l) || console.error('MUI: Argument "easing" must be a string.'), !S(m) && !v(m) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(h).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(h).join(",")}].`);
      }
      return (Array.isArray(a) ? a : [a]).map((v) => `${v} ${typeof f == "string" ? f : ta(f)} ${l} ${typeof m == "string" ? m : ta(m)}`).join(",");
    }
  }, e, {
    easing: r,
    duration: t
  });
}
const jc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Dc = jc, Mc = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Fc(e = {}, ...r) {
  const {
    mixins: t = {},
    palette: n = {},
    transitions: a = {},
    typography: i = {}
  } = e, f = tr(e, Mc);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Pr(18));
  const l = _c(n), m = Fn(e);
  let h = Ge(m, {
    mixins: pc(m.breakpoints, t),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Pc.slice(),
    typography: wc(l, i),
    transitions: Nc(a),
    zIndex: ee({}, Dc)
  });
  if (h = Ge(h, f), h = r.reduce((v, S) => Ge(v, S), h), process.env.NODE_ENV !== "production") {
    const v = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], S = (E, T) => {
      let w;
      for (w in E) {
        const y = E[w];
        if (v.indexOf(w) !== -1 && Object.keys(y).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const g = On("", w);
            console.error([`MUI: The \`${T}\` component increases the CSS specificity of the \`${w}\` internal state.`, "You can not override it like this: ", JSON.stringify(E, null, 2), "", `Instead, you need to use the '&.${g}' syntax:`, JSON.stringify({
              root: {
                [`&.${g}`]: y
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          E[w] = {};
        }
      }
    };
    Object.keys(h.components).forEach((E) => {
      const T = h.components[E].styleOverrides;
      T && E.indexOf("Mui") === 0 && S(T, E);
    });
  }
  return h.unstable_sxConfig = ee({}, Dn, f == null ? void 0 : f.unstable_sxConfig), h.unstable_sx = function(S) {
    return Mn({
      sx: S,
      theme: this
    });
  }, h;
}
const Lc = Fc(), Vn = Lc;
function Vc() {
  const e = ka(Vn);
  return process.env.NODE_ENV !== "production" && Ie.useDebugValue(e), e[Tn] || e;
}
function Uc({
  props: e,
  name: r
}) {
  return uc({
    props: e,
    name: r,
    defaultTheme: Vn,
    themeId: Tn
  });
}
const Wc = (e) => Et(e) && e !== "classes", Yc = ic({
  themeId: Tn,
  defaultTheme: Vn,
  rootShouldForwardProp: Wc
}), zc = Yc, Bc = (e) => {
  let r;
  return e < 1 ? r = 5.11916 * e ** 2 : r = 4.5 * Math.log(e + 1) + 2, (r / 100).toFixed(2);
}, na = Bc;
function qc(e) {
  return On("MuiPaper", e);
}
qi("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Kc = ["className", "component", "elevation", "square", "variant"], Gc = (e) => {
  const {
    square: r,
    elevation: t,
    variant: n,
    classes: a
  } = e, i = {
    root: ["root", n, !r && "rounded", n === "elevation" && `elevation${t}`]
  };
  return Ui(i, qc, a);
}, Hc = zc("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, r[t.variant], !t.square && r.rounded, t.variant === "elevation" && r[`elevation${t.elevation}`]];
  }
})(({
  theme: e,
  ownerState: r
}) => {
  var t;
  return ee({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !r.square && {
    borderRadius: e.shape.borderRadius
  }, r.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, r.variant === "elevation" && ee({
    boxShadow: (e.vars || e).shadows[r.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${Xo("#fff", na(r.elevation))}, ${Xo("#fff", na(r.elevation))})`
  }, e.vars && {
    backgroundImage: (t = e.vars.overlays) == null ? void 0 : t[r.elevation]
  }));
}), Ia = /* @__PURE__ */ Ie.forwardRef(function(r, t) {
  const n = Uc({
    props: r,
    name: "MuiPaper"
  }), {
    className: a,
    component: i = "div",
    elevation: f = 1,
    square: l = !1,
    variant: m = "elevation"
  } = n, h = tr(n, Kc), v = ee({}, n, {
    component: i,
    elevation: f,
    square: l,
    variant: m
  }), S = Gc(v);
  return process.env.NODE_ENV !== "production" && Vc().shadows[f] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${f}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${f}]\` is defined.`].join(`
`)), /* @__PURE__ */ Wr(Hc, ee({
    as: i,
    ownerState: v,
    className: Ju(S.root, a),
    ref: t
  }, h));
});
process.env.NODE_ENV !== "production" && (Ia.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: Ce.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: Ce.object,
  /**
   * @ignore
   */
  className: Ce.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Ce.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: _i(Vi, (e) => {
    const {
      elevation: r,
      variant: t
    } = e;
    return r > 0 && t === "outlined" ? new Error(`MUI: Combining \`elevation={${r}}\` with \`variant="${t}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: Ce.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: Ce.oneOfType([Ce.arrayOf(Ce.oneOfType([Ce.func, Ce.object, Ce.bool])), Ce.func, Ce.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: Ce.oneOfType([Ce.oneOf(["elevation", "outlined"]), Ce.string])
});
const Jc = Ia, ef = (e) => {
  const { carouselItems: r, backgroundColor: t, setSelectedItem: n, fontSize: a, textColor: i, fontFamily: f } = e;
  return /* @__PURE__ */ Wr("div", { children: r.map((l, m) => /* @__PURE__ */ Wr(
    Xc,
    {
      item: l,
      fontSize: a,
      textColor: i,
      backgroundColor: t,
      fontFamily: f
    },
    m
  )) });
};
function Xc(e) {
  return /* @__PURE__ */ Wr(Jc, { style: Zc(e.backgroundColor), children: /* @__PURE__ */ Wr("p", { style: Qc(e.fontSize, e.textColor, e.fontFamily), children: e.item.title }) });
}
function Qc(e, r, t) {
  return {
    fontFamily: t,
    fontSize: e,
    color: r
  };
}
function Zc(e) {
  return {
    borderRadius: "4px",
    background: e,
    height: "30px",
    paddingTop: "3px"
  };
}
export {
  ef as CustomCarousel
};
