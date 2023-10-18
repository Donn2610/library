function Ha(e, r) {
  for (var t = 0; t < r.length; t++) {
    const n = r[t];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in e)) {
          const a = Object.getOwnPropertyDescriptor(n, i);
          a && Object.defineProperty(e, i, a.get ? a : {
            enumerable: !0,
            get: () => n[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Yi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jn = { exports: {} }, et = {}, Ot = { exports: {} }, ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Io;
function Xa() {
  if (Io)
    return ce;
  Io = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), y = Symbol.iterator;
  function b(c) {
    return c === null || typeof c != "object" ? null : (c = y && c[y] || c["@@iterator"], typeof c == "function" ? c : null);
  }
  var C = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, T = Object.assign, v = {};
  function E(c, g, k) {
    this.props = c, this.context = g, this.refs = v, this.updater = k || C;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(c, g) {
    if (typeof c != "object" && typeof c != "function" && c != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, c, g, "setState");
  }, E.prototype.forceUpdate = function(c) {
    this.updater.enqueueForceUpdate(this, c, "forceUpdate");
  };
  function $() {
  }
  $.prototype = E.prototype;
  function D(c, g, k) {
    this.props = c, this.context = g, this.refs = v, this.updater = k || C;
  }
  var j = D.prototype = new $();
  j.constructor = D, T(j, E.prototype), j.isPureReactComponent = !0;
  var x = Array.isArray, d = Object.prototype.hasOwnProperty, B = { current: null }, q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function me(c, g, k) {
    var I, P = {}, Y = null, V = null;
    if (g != null)
      for (I in g.ref !== void 0 && (V = g.ref), g.key !== void 0 && (Y = "" + g.key), g)
        d.call(g, I) && !q.hasOwnProperty(I) && (P[I] = g[I]);
    var L = arguments.length - 2;
    if (L === 1)
      P.children = k;
    else if (1 < L) {
      for (var U = Array(L), K = 0; K < L; K++)
        U[K] = arguments[K + 2];
      P.children = U;
    }
    if (c && c.defaultProps)
      for (I in L = c.defaultProps, L)
        P[I] === void 0 && (P[I] = L[I]);
    return { $$typeof: e, type: c, key: Y, ref: V, props: P, _owner: B.current };
  }
  function de(c, g) {
    return { $$typeof: e, type: c.type, key: g, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function z(c) {
    return typeof c == "object" && c !== null && c.$$typeof === e;
  }
  function Z(c) {
    var g = { "=": "=0", ":": "=2" };
    return "$" + c.replace(/[=:]/g, function(k) {
      return g[k];
    });
  }
  var ae = /\/+/g;
  function oe(c, g) {
    return typeof c == "object" && c !== null && c.key != null ? Z("" + c.key) : g.toString(36);
  }
  function re(c, g, k, I, P) {
    var Y = typeof c;
    (Y === "undefined" || Y === "boolean") && (c = null);
    var V = !1;
    if (c === null)
      V = !0;
    else
      switch (Y) {
        case "string":
        case "number":
          V = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case e:
            case r:
              V = !0;
          }
      }
    if (V)
      return V = c, P = P(V), c = I === "" ? "." + oe(V, 0) : I, x(P) ? (k = "", c != null && (k = c.replace(ae, "$&/") + "/"), re(P, g, k, "", function(K) {
        return K;
      })) : P != null && (z(P) && (P = de(P, k + (!P.key || V && V.key === P.key ? "" : ("" + P.key).replace(ae, "$&/") + "/") + c)), g.push(P)), 1;
    if (V = 0, I = I === "" ? "." : I + ":", x(c))
      for (var L = 0; L < c.length; L++) {
        Y = c[L];
        var U = I + oe(Y, L);
        V += re(Y, g, k, U, P);
      }
    else if (U = b(c), typeof U == "function")
      for (c = U.call(c), L = 0; !(Y = c.next()).done; )
        Y = Y.value, U = I + oe(Y, L++), V += re(Y, g, k, U, P);
    else if (Y === "object")
      throw g = String(c), Error("Objects are not valid as a React child (found: " + (g === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : g) + "). If you meant to render a collection of children, use an array instead.");
    return V;
  }
  function te(c, g, k) {
    if (c == null)
      return c;
    var I = [], P = 0;
    return re(c, I, "", "", function(Y) {
      return g.call(k, Y, P++);
    }), I;
  }
  function ie(c) {
    if (c._status === -1) {
      var g = c._result;
      g = g(), g.then(function(k) {
        (c._status === 0 || c._status === -1) && (c._status = 1, c._result = k);
      }, function(k) {
        (c._status === 0 || c._status === -1) && (c._status = 2, c._result = k);
      }), c._status === -1 && (c._status = 0, c._result = g);
    }
    if (c._status === 1)
      return c._result.default;
    throw c._result;
  }
  var F = { current: null }, ue = { transition: null }, Te = { ReactCurrentDispatcher: F, ReactCurrentBatchConfig: ue, ReactCurrentOwner: B };
  return ce.Children = { map: te, forEach: function(c, g, k) {
    te(c, function() {
      g.apply(this, arguments);
    }, k);
  }, count: function(c) {
    var g = 0;
    return te(c, function() {
      g++;
    }), g;
  }, toArray: function(c) {
    return te(c, function(g) {
      return g;
    }) || [];
  }, only: function(c) {
    if (!z(c))
      throw Error("React.Children.only expected to receive a single React element child.");
    return c;
  } }, ce.Component = E, ce.Fragment = t, ce.Profiler = i, ce.PureComponent = D, ce.StrictMode = n, ce.Suspense = p, ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Te, ce.cloneElement = function(c, g, k) {
    if (c == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + c + ".");
    var I = T({}, c.props), P = c.key, Y = c.ref, V = c._owner;
    if (g != null) {
      if (g.ref !== void 0 && (Y = g.ref, V = B.current), g.key !== void 0 && (P = "" + g.key), c.type && c.type.defaultProps)
        var L = c.type.defaultProps;
      for (U in g)
        d.call(g, U) && !q.hasOwnProperty(U) && (I[U] = g[U] === void 0 && L !== void 0 ? L[U] : g[U]);
    }
    var U = arguments.length - 2;
    if (U === 1)
      I.children = k;
    else if (1 < U) {
      L = Array(U);
      for (var K = 0; K < U; K++)
        L[K] = arguments[K + 2];
      I.children = L;
    }
    return { $$typeof: e, type: c.type, key: P, ref: Y, props: I, _owner: V };
  }, ce.createContext = function(c) {
    return c = { $$typeof: s, _currentValue: c, _currentValue2: c, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, c.Provider = { $$typeof: a, _context: c }, c.Consumer = c;
  }, ce.createElement = me, ce.createFactory = function(c) {
    var g = me.bind(null, c);
    return g.type = c, g;
  }, ce.createRef = function() {
    return { current: null };
  }, ce.forwardRef = function(c) {
    return { $$typeof: f, render: c };
  }, ce.isValidElement = z, ce.lazy = function(c) {
    return { $$typeof: h, _payload: { _status: -1, _result: c }, _init: ie };
  }, ce.memo = function(c, g) {
    return { $$typeof: m, type: c, compare: g === void 0 ? null : g };
  }, ce.startTransition = function(c) {
    var g = ue.transition;
    ue.transition = {};
    try {
      c();
    } finally {
      ue.transition = g;
    }
  }, ce.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, ce.useCallback = function(c, g) {
    return F.current.useCallback(c, g);
  }, ce.useContext = function(c) {
    return F.current.useContext(c);
  }, ce.useDebugValue = function() {
  }, ce.useDeferredValue = function(c) {
    return F.current.useDeferredValue(c);
  }, ce.useEffect = function(c, g) {
    return F.current.useEffect(c, g);
  }, ce.useId = function() {
    return F.current.useId();
  }, ce.useImperativeHandle = function(c, g, k) {
    return F.current.useImperativeHandle(c, g, k);
  }, ce.useInsertionEffect = function(c, g) {
    return F.current.useInsertionEffect(c, g);
  }, ce.useLayoutEffect = function(c, g) {
    return F.current.useLayoutEffect(c, g);
  }, ce.useMemo = function(c, g) {
    return F.current.useMemo(c, g);
  }, ce.useReducer = function(c, g, k) {
    return F.current.useReducer(c, g, k);
  }, ce.useRef = function(c) {
    return F.current.useRef(c);
  }, ce.useState = function(c) {
    return F.current.useState(c);
  }, ce.useSyncExternalStore = function(c, g, k) {
    return F.current.useSyncExternalStore(c, g, k);
  }, ce.useTransition = function() {
    return F.current.useTransition();
  }, ce.version = "18.2.0", ce;
}
var ot = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
ot.exports;
var Mo;
function Ja() {
  return Mo || (Mo = 1, function(e, r) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var t = "18.2.0", n = Symbol.for("react.element"), i = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), m = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), E = Symbol.iterator, $ = "@@iterator";
      function D(o) {
        if (o === null || typeof o != "object")
          return null;
        var u = E && o[E] || o[$];
        return typeof u == "function" ? u : null;
      }
      var j = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, x = {
        transition: null
      }, d = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, B = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, q = {}, me = null;
      function de(o) {
        me = o;
      }
      q.setExtraStackFrame = function(o) {
        me = o;
      }, q.getCurrentStack = null, q.getStackAddendum = function() {
        var o = "";
        me && (o += me);
        var u = q.getCurrentStack;
        return u && (o += u() || ""), o;
      };
      var z = !1, Z = !1, ae = !1, oe = !1, re = !1, te = {
        ReactCurrentDispatcher: j,
        ReactCurrentBatchConfig: x,
        ReactCurrentOwner: B
      };
      te.ReactDebugCurrentFrame = q, te.ReactCurrentActQueue = d;
      function ie(o) {
        {
          for (var u = arguments.length, _ = new Array(u > 1 ? u - 1 : 0), S = 1; S < u; S++)
            _[S - 1] = arguments[S];
          ue("warn", o, _);
        }
      }
      function F(o) {
        {
          for (var u = arguments.length, _ = new Array(u > 1 ? u - 1 : 0), S = 1; S < u; S++)
            _[S - 1] = arguments[S];
          ue("error", o, _);
        }
      }
      function ue(o, u, _) {
        {
          var S = te.ReactDebugCurrentFrame, A = S.getStackAddendum();
          A !== "" && (u += "%s", _ = _.concat([A]));
          var X = _.map(function(H) {
            return String(H);
          });
          X.unshift("Warning: " + u), Function.prototype.apply.call(console[o], console, X);
        }
      }
      var Te = {};
      function c(o, u) {
        {
          var _ = o.constructor, S = _ && (_.displayName || _.name) || "ReactClass", A = S + "." + u;
          if (Te[A])
            return;
          F("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", u, S), Te[A] = !0;
        }
      }
      var g = {
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
        enqueueForceUpdate: function(o, u, _) {
          c(o, "forceUpdate");
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
        enqueueReplaceState: function(o, u, _, S) {
          c(o, "replaceState");
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
        enqueueSetState: function(o, u, _, S) {
          c(o, "setState");
        }
      }, k = Object.assign, I = {};
      Object.freeze(I);
      function P(o, u, _) {
        this.props = o, this.context = u, this.refs = I, this.updater = _ || g;
      }
      P.prototype.isReactComponent = {}, P.prototype.setState = function(o, u) {
        if (typeof o != "object" && typeof o != "function" && o != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, o, u, "setState");
      }, P.prototype.forceUpdate = function(o) {
        this.updater.enqueueForceUpdate(this, o, "forceUpdate");
      };
      {
        var Y = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, V = function(o, u) {
          Object.defineProperty(P.prototype, o, {
            get: function() {
              ie("%s(...) is deprecated in plain JavaScript React classes. %s", u[0], u[1]);
            }
          });
        };
        for (var L in Y)
          Y.hasOwnProperty(L) && V(L, Y[L]);
      }
      function U() {
      }
      U.prototype = P.prototype;
      function K(o, u, _) {
        this.props = o, this.context = u, this.refs = I, this.updater = _ || g;
      }
      var J = K.prototype = new U();
      J.constructor = K, k(J, P.prototype), J.isPureReactComponent = !0;
      function Oe() {
        var o = {
          current: null
        };
        return Object.seal(o), o;
      }
      var R = Array.isArray;
      function xe(o) {
        return R(o);
      }
      function W(o) {
        {
          var u = typeof Symbol == "function" && Symbol.toStringTag, _ = u && o[Symbol.toStringTag] || o.constructor.name || "Object";
          return _;
        }
      }
      function Ve(o) {
        try {
          return We(o), !1;
        } catch {
          return !0;
        }
      }
      function We(o) {
        return "" + o;
      }
      function er(o) {
        if (Ve(o))
          return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", W(o)), We(o);
      }
      function kr(o, u, _) {
        var S = o.displayName;
        if (S)
          return S;
        var A = u.displayName || u.name || "";
        return A !== "" ? _ + "(" + A + ")" : _;
      }
      function dr(o) {
        return o.displayName || "Context";
      }
      function qe(o) {
        if (o == null)
          return null;
        if (typeof o.tag == "number" && F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
          return o.displayName || o.name || null;
        if (typeof o == "string")
          return o;
        switch (o) {
          case a:
            return "Fragment";
          case i:
            return "Portal";
          case f:
            return "Profiler";
          case s:
            return "StrictMode";
          case y:
            return "Suspense";
          case b:
            return "SuspenseList";
        }
        if (typeof o == "object")
          switch (o.$$typeof) {
            case m:
              var u = o;
              return dr(u) + ".Consumer";
            case p:
              var _ = o;
              return dr(_._context) + ".Provider";
            case h:
              return kr(o, o.render, "ForwardRef");
            case C:
              var S = o.displayName || null;
              return S !== null ? S : qe(o.type) || "Memo";
            case T: {
              var A = o, X = A._payload, H = A._init;
              try {
                return qe(H(X));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var or = Object.prototype.hasOwnProperty, gr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ar, pr, rr;
      rr = {};
      function wr(o) {
        if (or.call(o, "ref")) {
          var u = Object.getOwnPropertyDescriptor(o, "ref").get;
          if (u && u.isReactWarning)
            return !1;
        }
        return o.ref !== void 0;
      }
      function ir(o) {
        if (or.call(o, "key")) {
          var u = Object.getOwnPropertyDescriptor(o, "key").get;
          if (u && u.isReactWarning)
            return !1;
        }
        return o.key !== void 0;
      }
      function Xr(o, u) {
        var _ = function() {
          Ar || (Ar = !0, F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        _.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: _,
          configurable: !0
        });
      }
      function ee(o, u) {
        var _ = function() {
          pr || (pr = !0, F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        _.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: _,
          configurable: !0
        });
      }
      function Tr(o) {
        if (typeof o.ref == "string" && B.current && o.__self && B.current.stateNode !== o.__self) {
          var u = qe(B.current.type);
          rr[u] || (F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, o.ref), rr[u] = !0);
        }
      }
      var mr = function(o, u, _, S, A, X, H) {
        var ne = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: o,
          key: u,
          ref: _,
          props: H,
          // Record the component responsible for creating this element.
          _owner: X
        };
        return ne._store = {}, Object.defineProperty(ne._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(ne, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: S
        }), Object.defineProperty(ne, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: A
        }), Object.freeze && (Object.freeze(ne.props), Object.freeze(ne)), ne;
      };
      function jr(o, u, _) {
        var S, A = {}, X = null, H = null, ne = null, fe = null;
        if (u != null) {
          wr(u) && (H = u.ref, Tr(u)), ir(u) && (er(u.key), X = "" + u.key), ne = u.__self === void 0 ? null : u.__self, fe = u.__source === void 0 ? null : u.__source;
          for (S in u)
            or.call(u, S) && !gr.hasOwnProperty(S) && (A[S] = u[S]);
        }
        var Ce = arguments.length - 2;
        if (Ce === 1)
          A.children = _;
        else if (Ce > 1) {
          for (var Pe = Array(Ce), $e = 0; $e < Ce; $e++)
            Pe[$e] = arguments[$e + 2];
          Object.freeze && Object.freeze(Pe), A.children = Pe;
        }
        if (o && o.defaultProps) {
          var je = o.defaultProps;
          for (S in je)
            A[S] === void 0 && (A[S] = je[S]);
        }
        if (X || H) {
          var De = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          X && Xr(A, De), H && ee(A, De);
        }
        return mr(o, X, H, ne, fe, B.current, A);
      }
      function mt(o, u) {
        var _ = mr(o.type, u, o.ref, o._self, o._source, o._owner, o.props);
        return _;
      }
      function sn(o, u, _) {
        if (o == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + o + ".");
        var S, A = k({}, o.props), X = o.key, H = o.ref, ne = o._self, fe = o._source, Ce = o._owner;
        if (u != null) {
          wr(u) && (H = u.ref, Ce = B.current), ir(u) && (er(u.key), X = "" + u.key);
          var Pe;
          o.type && o.type.defaultProps && (Pe = o.type.defaultProps);
          for (S in u)
            or.call(u, S) && !gr.hasOwnProperty(S) && (u[S] === void 0 && Pe !== void 0 ? A[S] = Pe[S] : A[S] = u[S]);
        }
        var $e = arguments.length - 2;
        if ($e === 1)
          A.children = _;
        else if ($e > 1) {
          for (var je = Array($e), De = 0; De < $e; De++)
            je[De] = arguments[De + 2];
          A.children = je;
        }
        return mr(o.type, X, H, ne, fe, Ce, A);
      }
      function br(o) {
        return typeof o == "object" && o !== null && o.$$typeof === n;
      }
      var ht = ".", cn = ":";
      function un(o) {
        var u = /[=:]/g, _ = {
          "=": "=0",
          ":": "=2"
        }, S = o.replace(u, function(A) {
          return _[A];
        });
        return "$" + S;
      }
      var Nr = !1, yt = /\/+/g;
      function hr(o) {
        return o.replace(yt, "$&/");
      }
      function Cr(o, u) {
        return typeof o == "object" && o !== null && o.key != null ? (er(o.key), un("" + o.key)) : u.toString(36);
      }
      function Er(o, u, _, S, A) {
        var X = typeof o;
        (X === "undefined" || X === "boolean") && (o = null);
        var H = !1;
        if (o === null)
          H = !0;
        else
          switch (X) {
            case "string":
            case "number":
              H = !0;
              break;
            case "object":
              switch (o.$$typeof) {
                case n:
                case i:
                  H = !0;
              }
          }
        if (H) {
          var ne = o, fe = A(ne), Ce = S === "" ? ht + Cr(ne, 0) : S;
          if (xe(fe)) {
            var Pe = "";
            Ce != null && (Pe = hr(Ce) + "/"), Er(fe, u, Pe, "", function(Ga) {
              return Ga;
            });
          } else
            fe != null && (br(fe) && (fe.key && (!ne || ne.key !== fe.key) && er(fe.key), fe = mt(
              fe,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              _ + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (fe.key && (!ne || ne.key !== fe.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                hr("" + fe.key) + "/"
              ) : "") + Ce
            )), u.push(fe));
          return 1;
        }
        var $e, je, De = 0, Ue = S === "" ? ht : S + cn;
        if (xe(o))
          for (var xt = 0; xt < o.length; xt++)
            $e = o[xt], je = Ue + Cr($e, xt), De += Er($e, u, _, je, A);
        else {
          var Sn = D(o);
          if (typeof Sn == "function") {
            var Ao = o;
            Sn === Ao.entries && (Nr || ie("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Nr = !0);
            for (var qa = Sn.call(Ao), jo, Ka = 0; !(jo = qa.next()).done; )
              $e = jo.value, je = Ue + Cr($e, Ka++), De += Er($e, u, _, je, A);
          } else if (X === "object") {
            var No = String(o);
            throw new Error("Objects are not valid as a React child (found: " + (No === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : No) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return De;
      }
      function xr(o, u, _) {
        if (o == null)
          return o;
        var S = [], A = 0;
        return Er(o, S, "", "", function(X) {
          return u.call(_, X, A++);
        }), S;
      }
      function ln(o) {
        var u = 0;
        return xr(o, function() {
          u++;
        }), u;
      }
      function vt(o, u, _) {
        xr(o, function() {
          u.apply(this, arguments);
        }, _);
      }
      function fn(o) {
        return xr(o, function(u) {
          return u;
        }) || [];
      }
      function gt(o) {
        if (!br(o))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return o;
      }
      function bt(o) {
        var u = {
          $$typeof: m,
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
          $$typeof: p,
          _context: u
        };
        var _ = !1, S = !1, A = !1;
        {
          var X = {
            $$typeof: m,
            _context: u
          };
          Object.defineProperties(X, {
            Provider: {
              get: function() {
                return S || (S = !0, F("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), u.Provider;
              },
              set: function(H) {
                u.Provider = H;
              }
            },
            _currentValue: {
              get: function() {
                return u._currentValue;
              },
              set: function(H) {
                u._currentValue = H;
              }
            },
            _currentValue2: {
              get: function() {
                return u._currentValue2;
              },
              set: function(H) {
                u._currentValue2 = H;
              }
            },
            _threadCount: {
              get: function() {
                return u._threadCount;
              },
              set: function(H) {
                u._threadCount = H;
              }
            },
            Consumer: {
              get: function() {
                return _ || (_ = !0, F("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), u.Consumer;
              }
            },
            displayName: {
              get: function() {
                return u.displayName;
              },
              set: function(H) {
                A || (ie("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", H), A = !0);
              }
            }
          }), u.Consumer = X;
        }
        return u._currentRenderer = null, u._currentRenderer2 = null, u;
      }
      var Or = -1, Jr = 0, Zr = 1, dn = 2;
      function pn(o) {
        if (o._status === Or) {
          var u = o._result, _ = u();
          if (_.then(function(X) {
            if (o._status === Jr || o._status === Or) {
              var H = o;
              H._status = Zr, H._result = X;
            }
          }, function(X) {
            if (o._status === Jr || o._status === Or) {
              var H = o;
              H._status = dn, H._result = X;
            }
          }), o._status === Or) {
            var S = o;
            S._status = Jr, S._result = _;
          }
        }
        if (o._status === Zr) {
          var A = o._result;
          return A === void 0 && F(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, A), "default" in A || F(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, A), A.default;
        } else
          throw o._result;
      }
      function mn(o) {
        var u = {
          // We use these fields to store the result.
          _status: Or,
          _result: o
        }, _ = {
          $$typeof: T,
          _payload: u,
          _init: pn
        };
        {
          var S, A;
          Object.defineProperties(_, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return S;
              },
              set: function(X) {
                F("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), S = X, Object.defineProperty(_, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return A;
              },
              set: function(X) {
                F("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), A = X, Object.defineProperty(_, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return _;
      }
      function hn(o) {
        o != null && o.$$typeof === C ? F("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof o != "function" ? F("forwardRef requires a render function but was given %s.", o === null ? "null" : typeof o) : o.length !== 0 && o.length !== 2 && F("forwardRef render functions accept exactly two parameters: props and ref. %s", o.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), o != null && (o.defaultProps != null || o.propTypes != null) && F("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var u = {
          $$typeof: h,
          render: o
        };
        {
          var _;
          Object.defineProperty(u, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return _;
            },
            set: function(S) {
              _ = S, !o.name && !o.displayName && (o.displayName = S);
            }
          });
        }
        return u;
      }
      var l;
      l = Symbol.for("react.module.reference");
      function O(o) {
        return !!(typeof o == "string" || typeof o == "function" || o === a || o === f || re || o === s || o === y || o === b || oe || o === v || z || Z || ae || typeof o == "object" && o !== null && (o.$$typeof === T || o.$$typeof === C || o.$$typeof === p || o.$$typeof === m || o.$$typeof === h || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        o.$$typeof === l || o.getModuleId !== void 0));
      }
      function M(o, u) {
        O(o) || F("memo: The first argument must be a component. Instead received: %s", o === null ? "null" : typeof o);
        var _ = {
          $$typeof: C,
          type: o,
          compare: u === void 0 ? null : u
        };
        {
          var S;
          Object.defineProperty(_, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return S;
            },
            set: function(A) {
              S = A, !o.name && !o.displayName && (o.displayName = A);
            }
          });
        }
        return _;
      }
      function G() {
        var o = j.current;
        return o === null && F(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), o;
      }
      function pe(o) {
        var u = G();
        if (o._context !== void 0) {
          var _ = o._context;
          _.Consumer === o ? F("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : _.Provider === o && F("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return u.useContext(o);
      }
      function we(o) {
        var u = G();
        return u.useState(o);
      }
      function le(o, u, _) {
        var S = G();
        return S.useReducer(o, u, _);
      }
      function se(o) {
        var u = G();
        return u.useRef(o);
      }
      function Le(o, u) {
        var _ = G();
        return _.useEffect(o, u);
      }
      function Ae(o, u) {
        var _ = G();
        return _.useInsertionEffect(o, u);
      }
      function Ne(o, u) {
        var _ = G();
        return _.useLayoutEffect(o, u);
      }
      function Ke(o, u) {
        var _ = G();
        return _.useCallback(o, u);
      }
      function _r(o, u) {
        var _ = G();
        return _.useMemo(o, u);
      }
      function Et(o, u, _) {
        var S = G();
        return S.useImperativeHandle(o, u, _);
      }
      function ar(o, u) {
        {
          var _ = G();
          return _.useDebugValue(o, u);
        }
      }
      function Sa() {
        var o = G();
        return o.useTransition();
      }
      function wa(o) {
        var u = G();
        return u.useDeferredValue(o);
      }
      function Ta() {
        var o = G();
        return o.useId();
      }
      function Ca(o, u, _) {
        var S = G();
        return S.useSyncExternalStore(o, u, _);
      }
      var Qr = 0, fo, po, mo, ho, yo, vo, go;
      function bo() {
      }
      bo.__reactDisabledLog = !0;
      function xa() {
        {
          if (Qr === 0) {
            fo = console.log, po = console.info, mo = console.warn, ho = console.error, yo = console.group, vo = console.groupCollapsed, go = console.groupEnd;
            var o = {
              configurable: !0,
              enumerable: !0,
              value: bo,
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
          Qr++;
        }
      }
      function Oa() {
        {
          if (Qr--, Qr === 0) {
            var o = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: k({}, o, {
                value: fo
              }),
              info: k({}, o, {
                value: po
              }),
              warn: k({}, o, {
                value: mo
              }),
              error: k({}, o, {
                value: ho
              }),
              group: k({}, o, {
                value: yo
              }),
              groupCollapsed: k({}, o, {
                value: vo
              }),
              groupEnd: k({}, o, {
                value: go
              })
            });
          }
          Qr < 0 && F("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var yn = te.ReactCurrentDispatcher, vn;
      function _t(o, u, _) {
        {
          if (vn === void 0)
            try {
              throw Error();
            } catch (A) {
              var S = A.stack.trim().match(/\n( *(at )?)/);
              vn = S && S[1] || "";
            }
          return `
` + vn + o;
        }
      }
      var gn = !1, Rt;
      {
        var Pa = typeof WeakMap == "function" ? WeakMap : Map;
        Rt = new Pa();
      }
      function Eo(o, u) {
        if (!o || gn)
          return "";
        {
          var _ = Rt.get(o);
          if (_ !== void 0)
            return _;
        }
        var S;
        gn = !0;
        var A = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var X;
        X = yn.current, yn.current = null, xa();
        try {
          if (u) {
            var H = function() {
              throw Error();
            };
            if (Object.defineProperty(H.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(H, []);
              } catch (Ue) {
                S = Ue;
              }
              Reflect.construct(o, [], H);
            } else {
              try {
                H.call();
              } catch (Ue) {
                S = Ue;
              }
              o.call(H.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Ue) {
              S = Ue;
            }
            o();
          }
        } catch (Ue) {
          if (Ue && S && typeof Ue.stack == "string") {
            for (var ne = Ue.stack.split(`
`), fe = S.stack.split(`
`), Ce = ne.length - 1, Pe = fe.length - 1; Ce >= 1 && Pe >= 0 && ne[Ce] !== fe[Pe]; )
              Pe--;
            for (; Ce >= 1 && Pe >= 0; Ce--, Pe--)
              if (ne[Ce] !== fe[Pe]) {
                if (Ce !== 1 || Pe !== 1)
                  do
                    if (Ce--, Pe--, Pe < 0 || ne[Ce] !== fe[Pe]) {
                      var $e = `
` + ne[Ce].replace(" at new ", " at ");
                      return o.displayName && $e.includes("<anonymous>") && ($e = $e.replace("<anonymous>", o.displayName)), typeof o == "function" && Rt.set(o, $e), $e;
                    }
                  while (Ce >= 1 && Pe >= 0);
                break;
              }
          }
        } finally {
          gn = !1, yn.current = X, Oa(), Error.prepareStackTrace = A;
        }
        var je = o ? o.displayName || o.name : "", De = je ? _t(je) : "";
        return typeof o == "function" && Rt.set(o, De), De;
      }
      function $a(o, u, _) {
        return Eo(o, !1);
      }
      function ka(o) {
        var u = o.prototype;
        return !!(u && u.isReactComponent);
      }
      function St(o, u, _) {
        if (o == null)
          return "";
        if (typeof o == "function")
          return Eo(o, ka(o));
        if (typeof o == "string")
          return _t(o);
        switch (o) {
          case y:
            return _t("Suspense");
          case b:
            return _t("SuspenseList");
        }
        if (typeof o == "object")
          switch (o.$$typeof) {
            case h:
              return $a(o.render);
            case C:
              return St(o.type, u, _);
            case T: {
              var S = o, A = S._payload, X = S._init;
              try {
                return St(X(A), u, _);
              } catch {
              }
            }
          }
        return "";
      }
      var _o = {}, Ro = te.ReactDebugCurrentFrame;
      function wt(o) {
        if (o) {
          var u = o._owner, _ = St(o.type, o._source, u ? u.type : null);
          Ro.setExtraStackFrame(_);
        } else
          Ro.setExtraStackFrame(null);
      }
      function Aa(o, u, _, S, A) {
        {
          var X = Function.call.bind(or);
          for (var H in o)
            if (X(o, H)) {
              var ne = void 0;
              try {
                if (typeof o[H] != "function") {
                  var fe = Error((S || "React class") + ": " + _ + " type `" + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[H] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw fe.name = "Invariant Violation", fe;
                }
                ne = o[H](u, H, S, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ce) {
                ne = Ce;
              }
              ne && !(ne instanceof Error) && (wt(A), F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", _, H, typeof ne), wt(null)), ne instanceof Error && !(ne.message in _o) && (_o[ne.message] = !0, wt(A), F("Failed %s type: %s", _, ne.message), wt(null));
            }
        }
      }
      function Ir(o) {
        if (o) {
          var u = o._owner, _ = St(o.type, o._source, u ? u.type : null);
          de(_);
        } else
          de(null);
      }
      var bn;
      bn = !1;
      function So() {
        if (B.current) {
          var o = qe(B.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
      function ja(o) {
        if (o !== void 0) {
          var u = o.fileName.replace(/^.*[\\\/]/, ""), _ = o.lineNumber;
          return `

Check your code at ` + u + ":" + _ + ".";
        }
        return "";
      }
      function Na(o) {
        return o != null ? ja(o.__source) : "";
      }
      var wo = {};
      function Ia(o) {
        var u = So();
        if (!u) {
          var _ = typeof o == "string" ? o : o.displayName || o.name;
          _ && (u = `

Check the top-level render call using <` + _ + ">.");
        }
        return u;
      }
      function To(o, u) {
        if (!(!o._store || o._store.validated || o.key != null)) {
          o._store.validated = !0;
          var _ = Ia(u);
          if (!wo[_]) {
            wo[_] = !0;
            var S = "";
            o && o._owner && o._owner !== B.current && (S = " It was passed a child from " + qe(o._owner.type) + "."), Ir(o), F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, S), Ir(null);
          }
        }
      }
      function Co(o, u) {
        if (typeof o == "object") {
          if (xe(o))
            for (var _ = 0; _ < o.length; _++) {
              var S = o[_];
              br(S) && To(S, u);
            }
          else if (br(o))
            o._store && (o._store.validated = !0);
          else if (o) {
            var A = D(o);
            if (typeof A == "function" && A !== o.entries)
              for (var X = A.call(o), H; !(H = X.next()).done; )
                br(H.value) && To(H.value, u);
          }
        }
      }
      function xo(o) {
        {
          var u = o.type;
          if (u == null || typeof u == "string")
            return;
          var _;
          if (typeof u == "function")
            _ = u.propTypes;
          else if (typeof u == "object" && (u.$$typeof === h || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          u.$$typeof === C))
            _ = u.propTypes;
          else
            return;
          if (_) {
            var S = qe(u);
            Aa(_, o.props, "prop", S, o);
          } else if (u.PropTypes !== void 0 && !bn) {
            bn = !0;
            var A = qe(u);
            F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
          }
          typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ma(o) {
        {
          for (var u = Object.keys(o.props), _ = 0; _ < u.length; _++) {
            var S = u[_];
            if (S !== "children" && S !== "key") {
              Ir(o), F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), Ir(null);
              break;
            }
          }
          o.ref !== null && (Ir(o), F("Invalid attribute `ref` supplied to `React.Fragment`."), Ir(null));
        }
      }
      function Oo(o, u, _) {
        var S = O(o);
        if (!S) {
          var A = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var X = Na(u);
          X ? A += X : A += So();
          var H;
          o === null ? H = "null" : xe(o) ? H = "array" : o !== void 0 && o.$$typeof === n ? (H = "<" + (qe(o.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : H = typeof o, F("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", H, A);
        }
        var ne = jr.apply(this, arguments);
        if (ne == null)
          return ne;
        if (S)
          for (var fe = 2; fe < arguments.length; fe++)
            Co(arguments[fe], o);
        return o === a ? Ma(ne) : xo(ne), ne;
      }
      var Po = !1;
      function Da(o) {
        var u = Oo.bind(null, o);
        return u.type = o, Po || (Po = !0, ie("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(u, "type", {
          enumerable: !1,
          get: function() {
            return ie("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: o
            }), o;
          }
        }), u;
      }
      function Fa(o, u, _) {
        for (var S = sn.apply(this, arguments), A = 2; A < arguments.length; A++)
          Co(arguments[A], S.type);
        return xo(S), S;
      }
      function Va(o, u) {
        var _ = x.transition;
        x.transition = {};
        var S = x.transition;
        x.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          o();
        } finally {
          if (x.transition = _, _ === null && S._updatedFibers) {
            var A = S._updatedFibers.size;
            A > 10 && ie("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), S._updatedFibers.clear();
          }
        }
      }
      var $o = !1, Tt = null;
      function La(o) {
        if (Tt === null)
          try {
            var u = ("require" + Math.random()).slice(0, 7), _ = e && e[u];
            Tt = _.call(e, "timers").setImmediate;
          } catch {
            Tt = function(A) {
              $o === !1 && ($o = !0, typeof MessageChannel > "u" && F("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var X = new MessageChannel();
              X.port1.onmessage = A, X.port2.postMessage(void 0);
            };
          }
        return Tt(o);
      }
      var Mr = 0, ko = !1;
      function Ua(o) {
        {
          var u = Mr;
          Mr++, d.current === null && (d.current = []);
          var _ = d.isBatchingLegacy, S;
          try {
            if (d.isBatchingLegacy = !0, S = o(), !_ && d.didScheduleLegacyUpdate) {
              var A = d.current;
              A !== null && (d.didScheduleLegacyUpdate = !1, Rn(A));
            }
          } catch (je) {
            throw Ct(u), je;
          } finally {
            d.isBatchingLegacy = _;
          }
          if (S !== null && typeof S == "object" && typeof S.then == "function") {
            var X = S, H = !1, ne = {
              then: function(je, De) {
                H = !0, X.then(function(Ue) {
                  Ct(u), Mr === 0 ? En(Ue, je, De) : je(Ue);
                }, function(Ue) {
                  Ct(u), De(Ue);
                });
              }
            };
            return !ko && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              H || (ko = !0, F("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ne;
          } else {
            var fe = S;
            if (Ct(u), Mr === 0) {
              var Ce = d.current;
              Ce !== null && (Rn(Ce), d.current = null);
              var Pe = {
                then: function(je, De) {
                  d.current === null ? (d.current = [], En(fe, je, De)) : je(fe);
                }
              };
              return Pe;
            } else {
              var $e = {
                then: function(je, De) {
                  je(fe);
                }
              };
              return $e;
            }
          }
        }
      }
      function Ct(o) {
        o !== Mr - 1 && F("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Mr = o;
      }
      function En(o, u, _) {
        {
          var S = d.current;
          if (S !== null)
            try {
              Rn(S), La(function() {
                S.length === 0 ? (d.current = null, u(o)) : En(o, u, _);
              });
            } catch (A) {
              _(A);
            }
          else
            u(o);
        }
      }
      var _n = !1;
      function Rn(o) {
        if (!_n) {
          _n = !0;
          var u = 0;
          try {
            for (; u < o.length; u++) {
              var _ = o[u];
              do
                _ = _(!0);
              while (_ !== null);
            }
            o.length = 0;
          } catch (S) {
            throw o = o.slice(u + 1), S;
          } finally {
            _n = !1;
          }
        }
      }
      var Ya = Oo, Ba = Fa, za = Da, Wa = {
        map: xr,
        forEach: vt,
        count: ln,
        toArray: fn,
        only: gt
      };
      r.Children = Wa, r.Component = P, r.Fragment = a, r.Profiler = f, r.PureComponent = K, r.StrictMode = s, r.Suspense = y, r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = te, r.cloneElement = Ba, r.createContext = bt, r.createElement = Ya, r.createFactory = za, r.createRef = Oe, r.forwardRef = hn, r.isValidElement = br, r.lazy = mn, r.memo = M, r.startTransition = Va, r.unstable_act = Ua, r.useCallback = Ke, r.useContext = pe, r.useDebugValue = ar, r.useDeferredValue = wa, r.useEffect = Le, r.useId = Ta, r.useImperativeHandle = Et, r.useInsertionEffect = Ae, r.useLayoutEffect = Ne, r.useMemo = _r, r.useReducer = le, r.useRef = se, r.useState = we, r.useSyncExternalStore = Ca, r.useTransition = Sa, r.version = t, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(ot, ot.exports)), ot.exports;
}
var Do;
function Bn() {
  return Do || (Do = 1, process.env.NODE_ENV === "production" ? Ot.exports = Xa() : Ot.exports = Ja()), Ot.exports;
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
var Fo;
function Za() {
  if (Fo)
    return et;
  Fo = 1;
  var e = Bn(), r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(f, p, m) {
    var h, y = {}, b = null, C = null;
    m !== void 0 && (b = "" + m), p.key !== void 0 && (b = "" + p.key), p.ref !== void 0 && (C = p.ref);
    for (h in p)
      n.call(p, h) && !a.hasOwnProperty(h) && (y[h] = p[h]);
    if (f && f.defaultProps)
      for (h in p = f.defaultProps, p)
        y[h] === void 0 && (y[h] = p[h]);
    return { $$typeof: r, type: f, key: b, ref: C, props: y, _owner: i.current };
  }
  return et.Fragment = t, et.jsx = s, et.jsxs = s, et;
}
var rt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vo;
function Qa() {
  return Vo || (Vo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Bn(), r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), f = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), T = Symbol.iterator, v = "@@iterator";
    function E(l) {
      if (l === null || typeof l != "object")
        return null;
      var O = T && l[T] || l[v];
      return typeof O == "function" ? O : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(l) {
      {
        for (var O = arguments.length, M = new Array(O > 1 ? O - 1 : 0), G = 1; G < O; G++)
          M[G - 1] = arguments[G];
        j("error", l, M);
      }
    }
    function j(l, O, M) {
      {
        var G = $.ReactDebugCurrentFrame, pe = G.getStackAddendum();
        pe !== "" && (O += "%s", M = M.concat([pe]));
        var we = M.map(function(le) {
          return String(le);
        });
        we.unshift("Warning: " + O), Function.prototype.apply.call(console[l], console, we);
      }
    }
    var x = !1, d = !1, B = !1, q = !1, me = !1, de;
    de = Symbol.for("react.module.reference");
    function z(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === n || l === a || me || l === i || l === m || l === h || q || l === C || x || d || B || typeof l == "object" && l !== null && (l.$$typeof === b || l.$$typeof === y || l.$$typeof === s || l.$$typeof === f || l.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === de || l.getModuleId !== void 0));
    }
    function Z(l, O, M) {
      var G = l.displayName;
      if (G)
        return G;
      var pe = O.displayName || O.name || "";
      return pe !== "" ? M + "(" + pe + ")" : M;
    }
    function ae(l) {
      return l.displayName || "Context";
    }
    function oe(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case m:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case f:
            var O = l;
            return ae(O) + ".Consumer";
          case s:
            var M = l;
            return ae(M._context) + ".Provider";
          case p:
            return Z(l, l.render, "ForwardRef");
          case y:
            var G = l.displayName || null;
            return G !== null ? G : oe(l.type) || "Memo";
          case b: {
            var pe = l, we = pe._payload, le = pe._init;
            try {
              return oe(le(we));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var re = Object.assign, te = 0, ie, F, ue, Te, c, g, k;
    function I() {
    }
    I.__reactDisabledLog = !0;
    function P() {
      {
        if (te === 0) {
          ie = console.log, F = console.info, ue = console.warn, Te = console.error, c = console.group, g = console.groupCollapsed, k = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: I,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        te++;
      }
    }
    function Y() {
      {
        if (te--, te === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: re({}, l, {
              value: ie
            }),
            info: re({}, l, {
              value: F
            }),
            warn: re({}, l, {
              value: ue
            }),
            error: re({}, l, {
              value: Te
            }),
            group: re({}, l, {
              value: c
            }),
            groupCollapsed: re({}, l, {
              value: g
            }),
            groupEnd: re({}, l, {
              value: k
            })
          });
        }
        te < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = $.ReactCurrentDispatcher, L;
    function U(l, O, M) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (pe) {
            var G = pe.stack.trim().match(/\n( *(at )?)/);
            L = G && G[1] || "";
          }
        return `
` + L + l;
      }
    }
    var K = !1, J;
    {
      var Oe = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Oe();
    }
    function R(l, O) {
      if (!l || K)
        return "";
      {
        var M = J.get(l);
        if (M !== void 0)
          return M;
      }
      var G;
      K = !0;
      var pe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var we;
      we = V.current, V.current = null, P();
      try {
        if (O) {
          var le = function() {
            throw Error();
          };
          if (Object.defineProperty(le.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(le, []);
            } catch (ar) {
              G = ar;
            }
            Reflect.construct(l, [], le);
          } else {
            try {
              le.call();
            } catch (ar) {
              G = ar;
            }
            l.call(le.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ar) {
            G = ar;
          }
          l();
        }
      } catch (ar) {
        if (ar && G && typeof ar.stack == "string") {
          for (var se = ar.stack.split(`
`), Le = G.stack.split(`
`), Ae = se.length - 1, Ne = Le.length - 1; Ae >= 1 && Ne >= 0 && se[Ae] !== Le[Ne]; )
            Ne--;
          for (; Ae >= 1 && Ne >= 0; Ae--, Ne--)
            if (se[Ae] !== Le[Ne]) {
              if (Ae !== 1 || Ne !== 1)
                do
                  if (Ae--, Ne--, Ne < 0 || se[Ae] !== Le[Ne]) {
                    var Ke = `
` + se[Ae].replace(" at new ", " at ");
                    return l.displayName && Ke.includes("<anonymous>") && (Ke = Ke.replace("<anonymous>", l.displayName)), typeof l == "function" && J.set(l, Ke), Ke;
                  }
                while (Ae >= 1 && Ne >= 0);
              break;
            }
        }
      } finally {
        K = !1, V.current = we, Y(), Error.prepareStackTrace = pe;
      }
      var _r = l ? l.displayName || l.name : "", Et = _r ? U(_r) : "";
      return typeof l == "function" && J.set(l, Et), Et;
    }
    function xe(l, O, M) {
      return R(l, !1);
    }
    function W(l) {
      var O = l.prototype;
      return !!(O && O.isReactComponent);
    }
    function Ve(l, O, M) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return R(l, W(l));
      if (typeof l == "string")
        return U(l);
      switch (l) {
        case m:
          return U("Suspense");
        case h:
          return U("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case p:
            return xe(l.render);
          case y:
            return Ve(l.type, O, M);
          case b: {
            var G = l, pe = G._payload, we = G._init;
            try {
              return Ve(we(pe), O, M);
            } catch {
            }
          }
        }
      return "";
    }
    var We = Object.prototype.hasOwnProperty, er = {}, kr = $.ReactDebugCurrentFrame;
    function dr(l) {
      if (l) {
        var O = l._owner, M = Ve(l.type, l._source, O ? O.type : null);
        kr.setExtraStackFrame(M);
      } else
        kr.setExtraStackFrame(null);
    }
    function qe(l, O, M, G, pe) {
      {
        var we = Function.call.bind(We);
        for (var le in l)
          if (we(l, le)) {
            var se = void 0;
            try {
              if (typeof l[le] != "function") {
                var Le = Error((G || "React class") + ": " + M + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Le.name = "Invariant Violation", Le;
              }
              se = l[le](O, le, G, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ae) {
              se = Ae;
            }
            se && !(se instanceof Error) && (dr(pe), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", G || "React class", M, le, typeof se), dr(null)), se instanceof Error && !(se.message in er) && (er[se.message] = !0, dr(pe), D("Failed %s type: %s", M, se.message), dr(null));
          }
      }
    }
    var or = Array.isArray;
    function gr(l) {
      return or(l);
    }
    function Ar(l) {
      {
        var O = typeof Symbol == "function" && Symbol.toStringTag, M = O && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return M;
      }
    }
    function pr(l) {
      try {
        return rr(l), !1;
      } catch {
        return !0;
      }
    }
    function rr(l) {
      return "" + l;
    }
    function wr(l) {
      if (pr(l))
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ar(l)), rr(l);
    }
    var ir = $.ReactCurrentOwner, Xr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ee, Tr, mr;
    mr = {};
    function jr(l) {
      if (We.call(l, "ref")) {
        var O = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function mt(l) {
      if (We.call(l, "key")) {
        var O = Object.getOwnPropertyDescriptor(l, "key").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function sn(l, O) {
      if (typeof l.ref == "string" && ir.current && O && ir.current.stateNode !== O) {
        var M = oe(ir.current.type);
        mr[M] || (D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', oe(ir.current.type), l.ref), mr[M] = !0);
      }
    }
    function br(l, O) {
      {
        var M = function() {
          ee || (ee = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        M.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: M,
          configurable: !0
        });
      }
    }
    function ht(l, O) {
      {
        var M = function() {
          Tr || (Tr = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        M.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: M,
          configurable: !0
        });
      }
    }
    var cn = function(l, O, M, G, pe, we, le) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: l,
        key: O,
        ref: M,
        props: le,
        // Record the component responsible for creating this element.
        _owner: we
      };
      return se._store = {}, Object.defineProperty(se._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(se, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: G
      }), Object.defineProperty(se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pe
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function un(l, O, M, G, pe) {
      {
        var we, le = {}, se = null, Le = null;
        M !== void 0 && (wr(M), se = "" + M), mt(O) && (wr(O.key), se = "" + O.key), jr(O) && (Le = O.ref, sn(O, pe));
        for (we in O)
          We.call(O, we) && !Xr.hasOwnProperty(we) && (le[we] = O[we]);
        if (l && l.defaultProps) {
          var Ae = l.defaultProps;
          for (we in Ae)
            le[we] === void 0 && (le[we] = Ae[we]);
        }
        if (se || Le) {
          var Ne = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          se && br(le, Ne), Le && ht(le, Ne);
        }
        return cn(l, se, Le, pe, G, ir.current, le);
      }
    }
    var Nr = $.ReactCurrentOwner, yt = $.ReactDebugCurrentFrame;
    function hr(l) {
      if (l) {
        var O = l._owner, M = Ve(l.type, l._source, O ? O.type : null);
        yt.setExtraStackFrame(M);
      } else
        yt.setExtraStackFrame(null);
    }
    var Cr;
    Cr = !1;
    function Er(l) {
      return typeof l == "object" && l !== null && l.$$typeof === r;
    }
    function xr() {
      {
        if (Nr.current) {
          var l = oe(Nr.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function ln(l) {
      {
        if (l !== void 0) {
          var O = l.fileName.replace(/^.*[\\\/]/, ""), M = l.lineNumber;
          return `

Check your code at ` + O + ":" + M + ".";
        }
        return "";
      }
    }
    var vt = {};
    function fn(l) {
      {
        var O = xr();
        if (!O) {
          var M = typeof l == "string" ? l : l.displayName || l.name;
          M && (O = `

Check the top-level render call using <` + M + ">.");
        }
        return O;
      }
    }
    function gt(l, O) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var M = fn(O);
        if (vt[M])
          return;
        vt[M] = !0;
        var G = "";
        l && l._owner && l._owner !== Nr.current && (G = " It was passed a child from " + oe(l._owner.type) + "."), hr(l), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, G), hr(null);
      }
    }
    function bt(l, O) {
      {
        if (typeof l != "object")
          return;
        if (gr(l))
          for (var M = 0; M < l.length; M++) {
            var G = l[M];
            Er(G) && gt(G, O);
          }
        else if (Er(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var pe = E(l);
          if (typeof pe == "function" && pe !== l.entries)
            for (var we = pe.call(l), le; !(le = we.next()).done; )
              Er(le.value) && gt(le.value, O);
        }
      }
    }
    function Or(l) {
      {
        var O = l.type;
        if (O == null || typeof O == "string")
          return;
        var M;
        if (typeof O == "function")
          M = O.propTypes;
        else if (typeof O == "object" && (O.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        O.$$typeof === y))
          M = O.propTypes;
        else
          return;
        if (M) {
          var G = oe(O);
          qe(M, l.props, "prop", G, l);
        } else if (O.PropTypes !== void 0 && !Cr) {
          Cr = !0;
          var pe = oe(O);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", pe || "Unknown");
        }
        typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Jr(l) {
      {
        for (var O = Object.keys(l.props), M = 0; M < O.length; M++) {
          var G = O[M];
          if (G !== "children" && G !== "key") {
            hr(l), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", G), hr(null);
            break;
          }
        }
        l.ref !== null && (hr(l), D("Invalid attribute `ref` supplied to `React.Fragment`."), hr(null));
      }
    }
    function Zr(l, O, M, G, pe, we) {
      {
        var le = z(l);
        if (!le) {
          var se = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Le = ln(pe);
          Le ? se += Le : se += xr();
          var Ae;
          l === null ? Ae = "null" : gr(l) ? Ae = "array" : l !== void 0 && l.$$typeof === r ? (Ae = "<" + (oe(l.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : Ae = typeof l, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ae, se);
        }
        var Ne = un(l, O, M, pe, we);
        if (Ne == null)
          return Ne;
        if (le) {
          var Ke = O.children;
          if (Ke !== void 0)
            if (G)
              if (gr(Ke)) {
                for (var _r = 0; _r < Ke.length; _r++)
                  bt(Ke[_r], l);
                Object.freeze && Object.freeze(Ke);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              bt(Ke, l);
        }
        return l === n ? Jr(Ne) : Or(Ne), Ne;
      }
    }
    function dn(l, O, M) {
      return Zr(l, O, M, !0);
    }
    function pn(l, O, M) {
      return Zr(l, O, M, !1);
    }
    var mn = pn, hn = dn;
    rt.Fragment = n, rt.jsx = mn, rt.jsxs = hn;
  }()), rt;
}
process.env.NODE_ENV === "production" ? jn.exports = Za() : jn.exports = Qa();
var Ge = jn.exports;
const es = {
  black: "#000",
  white: "#fff"
}, at = es, rs = {
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
}, Dr = rs, ts = {
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
}, Fr = ts, ns = {
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
}, Vr = ns, os = {
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
}, Lr = os, is = {
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
}, Ur = is, as = {
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
}, tt = as, ss = {
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
}, cs = ss;
function us(e, r) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || r(...n);
  };
}
function Q() {
  return Q = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Q.apply(this, arguments);
}
function Rr(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function Bi(e) {
  if (!Rr(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = Bi(e[t]);
  }), r;
}
function cr(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? Q({}, e) : e;
  return Rr(e) && Rr(r) && Object.keys(r).forEach((i) => {
    i !== "__proto__" && (Rr(r[i]) && i in e && Rr(e[i]) ? n[i] = cr(e[i], r[i], t) : t.clone ? n[i] = Rr(r[i]) ? Bi(r[i]) : r[i] : n[i] = r[i]);
  }), n;
}
var Nn = { exports: {} }, Pt = { exports: {} }, ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lo;
function ls() {
  if (Lo)
    return ve;
  Lo = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
  function j(d) {
    if (typeof d == "object" && d !== null) {
      var B = d.$$typeof;
      switch (B) {
        case r:
          switch (d = d.type, d) {
            case p:
            case m:
            case n:
            case a:
            case i:
            case y:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case f:
                case h:
                case T:
                case C:
                case s:
                  return d;
                default:
                  return B;
              }
          }
        case t:
          return B;
      }
    }
  }
  function x(d) {
    return j(d) === m;
  }
  return ve.AsyncMode = p, ve.ConcurrentMode = m, ve.ContextConsumer = f, ve.ContextProvider = s, ve.Element = r, ve.ForwardRef = h, ve.Fragment = n, ve.Lazy = T, ve.Memo = C, ve.Portal = t, ve.Profiler = a, ve.StrictMode = i, ve.Suspense = y, ve.isAsyncMode = function(d) {
    return x(d) || j(d) === p;
  }, ve.isConcurrentMode = x, ve.isContextConsumer = function(d) {
    return j(d) === f;
  }, ve.isContextProvider = function(d) {
    return j(d) === s;
  }, ve.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === r;
  }, ve.isForwardRef = function(d) {
    return j(d) === h;
  }, ve.isFragment = function(d) {
    return j(d) === n;
  }, ve.isLazy = function(d) {
    return j(d) === T;
  }, ve.isMemo = function(d) {
    return j(d) === C;
  }, ve.isPortal = function(d) {
    return j(d) === t;
  }, ve.isProfiler = function(d) {
    return j(d) === a;
  }, ve.isStrictMode = function(d) {
    return j(d) === i;
  }, ve.isSuspense = function(d) {
    return j(d) === y;
  }, ve.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === n || d === m || d === a || d === i || d === y || d === b || typeof d == "object" && d !== null && (d.$$typeof === T || d.$$typeof === C || d.$$typeof === s || d.$$typeof === f || d.$$typeof === h || d.$$typeof === E || d.$$typeof === $ || d.$$typeof === D || d.$$typeof === v);
  }, ve.typeOf = j, ve;
}
var ge = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uo;
function fs() {
  return Uo || (Uo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
    function j(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === n || R === m || R === a || R === i || R === y || R === b || typeof R == "object" && R !== null && (R.$$typeof === T || R.$$typeof === C || R.$$typeof === s || R.$$typeof === f || R.$$typeof === h || R.$$typeof === E || R.$$typeof === $ || R.$$typeof === D || R.$$typeof === v);
    }
    function x(R) {
      if (typeof R == "object" && R !== null) {
        var xe = R.$$typeof;
        switch (xe) {
          case r:
            var W = R.type;
            switch (W) {
              case p:
              case m:
              case n:
              case a:
              case i:
              case y:
                return W;
              default:
                var Ve = W && W.$$typeof;
                switch (Ve) {
                  case f:
                  case h:
                  case T:
                  case C:
                  case s:
                    return Ve;
                  default:
                    return xe;
                }
            }
          case t:
            return xe;
        }
      }
    }
    var d = p, B = m, q = f, me = s, de = r, z = h, Z = n, ae = T, oe = C, re = t, te = a, ie = i, F = y, ue = !1;
    function Te(R) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), c(R) || x(R) === p;
    }
    function c(R) {
      return x(R) === m;
    }
    function g(R) {
      return x(R) === f;
    }
    function k(R) {
      return x(R) === s;
    }
    function I(R) {
      return typeof R == "object" && R !== null && R.$$typeof === r;
    }
    function P(R) {
      return x(R) === h;
    }
    function Y(R) {
      return x(R) === n;
    }
    function V(R) {
      return x(R) === T;
    }
    function L(R) {
      return x(R) === C;
    }
    function U(R) {
      return x(R) === t;
    }
    function K(R) {
      return x(R) === a;
    }
    function J(R) {
      return x(R) === i;
    }
    function Oe(R) {
      return x(R) === y;
    }
    ge.AsyncMode = d, ge.ConcurrentMode = B, ge.ContextConsumer = q, ge.ContextProvider = me, ge.Element = de, ge.ForwardRef = z, ge.Fragment = Z, ge.Lazy = ae, ge.Memo = oe, ge.Portal = re, ge.Profiler = te, ge.StrictMode = ie, ge.Suspense = F, ge.isAsyncMode = Te, ge.isConcurrentMode = c, ge.isContextConsumer = g, ge.isContextProvider = k, ge.isElement = I, ge.isForwardRef = P, ge.isFragment = Y, ge.isLazy = V, ge.isMemo = L, ge.isPortal = U, ge.isProfiler = K, ge.isStrictMode = J, ge.isSuspense = Oe, ge.isValidElementType = j, ge.typeOf = x;
  }()), ge;
}
var Yo;
function zi() {
  return Yo || (Yo = 1, process.env.NODE_ENV === "production" ? Pt.exports = ls() : Pt.exports = fs()), Pt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var wn, Bo;
function ds() {
  if (Bo)
    return wn;
  Bo = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var s = {}, f = 0; f < 10; f++)
        s["_" + String.fromCharCode(f)] = f;
      var p = Object.getOwnPropertyNames(s).map(function(h) {
        return s[h];
      });
      if (p.join("") !== "0123456789")
        return !1;
      var m = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        m[h] = h;
      }), Object.keys(Object.assign({}, m)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return wn = i() ? Object.assign : function(a, s) {
    for (var f, p = n(a), m, h = 1; h < arguments.length; h++) {
      f = Object(arguments[h]);
      for (var y in f)
        r.call(f, y) && (p[y] = f[y]);
      if (e) {
        m = e(f);
        for (var b = 0; b < m.length; b++)
          t.call(f, m[b]) && (p[m[b]] = f[m[b]]);
      }
    }
    return p;
  }, wn;
}
var Tn, zo;
function zn() {
  if (zo)
    return Tn;
  zo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Tn = e, Tn;
}
var Cn, Wo;
function Wi() {
  return Wo || (Wo = 1, Cn = Function.call.bind(Object.prototype.hasOwnProperty)), Cn;
}
var xn, qo;
function ps() {
  if (qo)
    return xn;
  qo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = zn(), t = {}, n = Wi();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(a, s, f, p, m) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in a)
        if (n(a, h)) {
          var y;
          try {
            if (typeof a[h] != "function") {
              var b = Error(
                (p || "React class") + ": " + f + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            y = a[h](s, h, p, f, null, r);
          } catch (T) {
            y = T;
          }
          if (y && !(y instanceof Error) && e(
            (p || "React class") + ": type specification of " + f + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof y + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), y instanceof Error && !(y.message in t)) {
            t[y.message] = !0;
            var C = m ? m() : "";
            e(
              "Failed " + f + " type: " + y.message + (C ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, xn = i, xn;
}
var On, Ko;
function ms() {
  if (Ko)
    return On;
  Ko = 1;
  var e = zi(), r = ds(), t = zn(), n = Wi(), i = ps(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(f) {
    var p = "Warning: " + f;
    typeof console < "u" && console.error(p);
    try {
      throw new Error(p);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return On = function(f, p) {
    var m = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function y(c) {
      var g = c && (m && c[m] || c[h]);
      if (typeof g == "function")
        return g;
    }
    var b = "<<anonymous>>", C = {
      array: $("array"),
      bigint: $("bigint"),
      bool: $("boolean"),
      func: $("function"),
      number: $("number"),
      object: $("object"),
      string: $("string"),
      symbol: $("symbol"),
      any: D(),
      arrayOf: j,
      element: x(),
      elementType: d(),
      instanceOf: B,
      node: z(),
      objectOf: me,
      oneOf: q,
      oneOfType: de,
      shape: ae,
      exact: oe
    };
    function T(c, g) {
      return c === g ? c !== 0 || 1 / c === 1 / g : c !== c && g !== g;
    }
    function v(c, g) {
      this.message = c, this.data = g && typeof g == "object" ? g : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function E(c) {
      if (process.env.NODE_ENV !== "production")
        var g = {}, k = 0;
      function I(Y, V, L, U, K, J, Oe) {
        if (U = U || b, J = J || L, Oe !== t) {
          if (p) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var xe = U + ":" + L;
            !g[xe] && // Avoid spamming the console because they are often not actionable except for lib authors
            k < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + J + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), g[xe] = !0, k++);
          }
        }
        return V[L] == null ? Y ? V[L] === null ? new v("The " + K + " `" + J + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new v("The " + K + " `" + J + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : c(V, L, U, K, J);
      }
      var P = I.bind(null, !1);
      return P.isRequired = I.bind(null, !0), P;
    }
    function $(c) {
      function g(k, I, P, Y, V, L) {
        var U = k[I], K = ie(U);
        if (K !== c) {
          var J = F(U);
          return new v(
            "Invalid " + Y + " `" + V + "` of type " + ("`" + J + "` supplied to `" + P + "`, expected ") + ("`" + c + "`."),
            { expectedType: c }
          );
        }
        return null;
      }
      return E(g);
    }
    function D() {
      return E(s);
    }
    function j(c) {
      function g(k, I, P, Y, V) {
        if (typeof c != "function")
          return new v("Property `" + V + "` of component `" + P + "` has invalid PropType notation inside arrayOf.");
        var L = k[I];
        if (!Array.isArray(L)) {
          var U = ie(L);
          return new v("Invalid " + Y + " `" + V + "` of type " + ("`" + U + "` supplied to `" + P + "`, expected an array."));
        }
        for (var K = 0; K < L.length; K++) {
          var J = c(L, K, P, Y, V + "[" + K + "]", t);
          if (J instanceof Error)
            return J;
        }
        return null;
      }
      return E(g);
    }
    function x() {
      function c(g, k, I, P, Y) {
        var V = g[k];
        if (!f(V)) {
          var L = ie(V);
          return new v("Invalid " + P + " `" + Y + "` of type " + ("`" + L + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return E(c);
    }
    function d() {
      function c(g, k, I, P, Y) {
        var V = g[k];
        if (!e.isValidElementType(V)) {
          var L = ie(V);
          return new v("Invalid " + P + " `" + Y + "` of type " + ("`" + L + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return E(c);
    }
    function B(c) {
      function g(k, I, P, Y, V) {
        if (!(k[I] instanceof c)) {
          var L = c.name || b, U = Te(k[I]);
          return new v("Invalid " + Y + " `" + V + "` of type " + ("`" + U + "` supplied to `" + P + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return E(g);
    }
    function q(c) {
      if (!Array.isArray(c))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function g(k, I, P, Y, V) {
        for (var L = k[I], U = 0; U < c.length; U++)
          if (T(L, c[U]))
            return null;
        var K = JSON.stringify(c, function(Oe, R) {
          var xe = F(R);
          return xe === "symbol" ? String(R) : R;
        });
        return new v("Invalid " + Y + " `" + V + "` of value `" + String(L) + "` " + ("supplied to `" + P + "`, expected one of " + K + "."));
      }
      return E(g);
    }
    function me(c) {
      function g(k, I, P, Y, V) {
        if (typeof c != "function")
          return new v("Property `" + V + "` of component `" + P + "` has invalid PropType notation inside objectOf.");
        var L = k[I], U = ie(L);
        if (U !== "object")
          return new v("Invalid " + Y + " `" + V + "` of type " + ("`" + U + "` supplied to `" + P + "`, expected an object."));
        for (var K in L)
          if (n(L, K)) {
            var J = c(L, K, P, Y, V + "." + K, t);
            if (J instanceof Error)
              return J;
          }
        return null;
      }
      return E(g);
    }
    function de(c) {
      if (!Array.isArray(c))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var g = 0; g < c.length; g++) {
        var k = c[g];
        if (typeof k != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ue(k) + " at index " + g + "."
          ), s;
      }
      function I(P, Y, V, L, U) {
        for (var K = [], J = 0; J < c.length; J++) {
          var Oe = c[J], R = Oe(P, Y, V, L, U, t);
          if (R == null)
            return null;
          R.data && n(R.data, "expectedType") && K.push(R.data.expectedType);
        }
        var xe = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new v("Invalid " + L + " `" + U + "` supplied to " + ("`" + V + "`" + xe + "."));
      }
      return E(I);
    }
    function z() {
      function c(g, k, I, P, Y) {
        return re(g[k]) ? null : new v("Invalid " + P + " `" + Y + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return E(c);
    }
    function Z(c, g, k, I, P) {
      return new v(
        (c || "React class") + ": " + g + " type `" + k + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + P + "`."
      );
    }
    function ae(c) {
      function g(k, I, P, Y, V) {
        var L = k[I], U = ie(L);
        if (U !== "object")
          return new v("Invalid " + Y + " `" + V + "` of type `" + U + "` " + ("supplied to `" + P + "`, expected `object`."));
        for (var K in c) {
          var J = c[K];
          if (typeof J != "function")
            return Z(P, Y, V, K, F(J));
          var Oe = J(L, K, P, Y, V + "." + K, t);
          if (Oe)
            return Oe;
        }
        return null;
      }
      return E(g);
    }
    function oe(c) {
      function g(k, I, P, Y, V) {
        var L = k[I], U = ie(L);
        if (U !== "object")
          return new v("Invalid " + Y + " `" + V + "` of type `" + U + "` " + ("supplied to `" + P + "`, expected `object`."));
        var K = r({}, k[I], c);
        for (var J in K) {
          var Oe = c[J];
          if (n(c, J) && typeof Oe != "function")
            return Z(P, Y, V, J, F(Oe));
          if (!Oe)
            return new v(
              "Invalid " + Y + " `" + V + "` key `" + J + "` supplied to `" + P + "`.\nBad object: " + JSON.stringify(k[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(c), null, "  ")
            );
          var R = Oe(L, J, P, Y, V + "." + J, t);
          if (R)
            return R;
        }
        return null;
      }
      return E(g);
    }
    function re(c) {
      switch (typeof c) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !c;
        case "object":
          if (Array.isArray(c))
            return c.every(re);
          if (c === null || f(c))
            return !0;
          var g = y(c);
          if (g) {
            var k = g.call(c), I;
            if (g !== c.entries) {
              for (; !(I = k.next()).done; )
                if (!re(I.value))
                  return !1;
            } else
              for (; !(I = k.next()).done; ) {
                var P = I.value;
                if (P && !re(P[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(c, g) {
      return c === "symbol" ? !0 : g ? g["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && g instanceof Symbol : !1;
    }
    function ie(c) {
      var g = typeof c;
      return Array.isArray(c) ? "array" : c instanceof RegExp ? "object" : te(g, c) ? "symbol" : g;
    }
    function F(c) {
      if (typeof c > "u" || c === null)
        return "" + c;
      var g = ie(c);
      if (g === "object") {
        if (c instanceof Date)
          return "date";
        if (c instanceof RegExp)
          return "regexp";
      }
      return g;
    }
    function ue(c) {
      var g = F(c);
      switch (g) {
        case "array":
        case "object":
          return "an " + g;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + g;
        default:
          return g;
      }
    }
    function Te(c) {
      return !c.constructor || !c.constructor.name ? b : c.constructor.name;
    }
    return C.checkPropTypes = i, C.resetWarningCache = i.resetWarningCache, C.PropTypes = C, C;
  }, On;
}
var Pn, Go;
function hs() {
  if (Go)
    return Pn;
  Go = 1;
  var e = zn();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Pn = function() {
    function n(s, f, p, m, h, y) {
      if (y !== e) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return a.PropTypes = a, a;
  }, Pn;
}
if (process.env.NODE_ENV !== "production") {
  var ys = zi(), vs = !0;
  Nn.exports = ms()(ys.isElement, vs);
} else
  Nn.exports = hs()();
var gs = Nn.exports;
const w = /* @__PURE__ */ Yi(gs);
function bs(e) {
  const {
    prototype: r = {}
  } = e;
  return !!r.isReactComponent;
}
function Es(e, r, t, n, i) {
  const a = e[r], s = i || r;
  if (a == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let f;
  return typeof a == "function" && !bs(a) && (f = "Did you accidentally provide a plain function component instead?"), f !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${t}\`. Expected an element type that can hold a ref. ${f} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const _s = us(w.elementType, Es);
function Wr(e) {
  let r = "https://mui.com/production-error/?code=" + e;
  for (let t = 1; t < arguments.length; t += 1)
    r += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified MUI error #" + e + "; visit " + r + " for the full message.";
}
var In = { exports: {} }, be = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ho;
function Rs() {
  if (Ho)
    return be;
  Ho = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), f = Symbol.for("react.server_context"), p = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), T;
  T = Symbol.for("react.module.reference");
  function v(E) {
    if (typeof E == "object" && E !== null) {
      var $ = E.$$typeof;
      switch ($) {
        case e:
          switch (E = E.type, E) {
            case t:
            case i:
            case n:
            case m:
            case h:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case f:
                case s:
                case p:
                case b:
                case y:
                case a:
                  return E;
                default:
                  return $;
              }
          }
        case r:
          return $;
      }
    }
  }
  return be.ContextConsumer = s, be.ContextProvider = a, be.Element = e, be.ForwardRef = p, be.Fragment = t, be.Lazy = b, be.Memo = y, be.Portal = r, be.Profiler = i, be.StrictMode = n, be.Suspense = m, be.SuspenseList = h, be.isAsyncMode = function() {
    return !1;
  }, be.isConcurrentMode = function() {
    return !1;
  }, be.isContextConsumer = function(E) {
    return v(E) === s;
  }, be.isContextProvider = function(E) {
    return v(E) === a;
  }, be.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === e;
  }, be.isForwardRef = function(E) {
    return v(E) === p;
  }, be.isFragment = function(E) {
    return v(E) === t;
  }, be.isLazy = function(E) {
    return v(E) === b;
  }, be.isMemo = function(E) {
    return v(E) === y;
  }, be.isPortal = function(E) {
    return v(E) === r;
  }, be.isProfiler = function(E) {
    return v(E) === i;
  }, be.isStrictMode = function(E) {
    return v(E) === n;
  }, be.isSuspense = function(E) {
    return v(E) === m;
  }, be.isSuspenseList = function(E) {
    return v(E) === h;
  }, be.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === t || E === i || E === n || E === m || E === h || E === C || typeof E == "object" && E !== null && (E.$$typeof === b || E.$$typeof === y || E.$$typeof === a || E.$$typeof === s || E.$$typeof === p || E.$$typeof === T || E.getModuleId !== void 0);
  }, be.typeOf = v, be;
}
var Ee = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xo;
function Ss() {
  return Xo || (Xo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), f = Symbol.for("react.server_context"), p = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), T = !1, v = !1, E = !1, $ = !1, D = !1, j;
    j = Symbol.for("react.module.reference");
    function x(W) {
      return !!(typeof W == "string" || typeof W == "function" || W === t || W === i || D || W === n || W === m || W === h || $ || W === C || T || v || E || typeof W == "object" && W !== null && (W.$$typeof === b || W.$$typeof === y || W.$$typeof === a || W.$$typeof === s || W.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      W.$$typeof === j || W.getModuleId !== void 0));
    }
    function d(W) {
      if (typeof W == "object" && W !== null) {
        var Ve = W.$$typeof;
        switch (Ve) {
          case e:
            var We = W.type;
            switch (We) {
              case t:
              case i:
              case n:
              case m:
              case h:
                return We;
              default:
                var er = We && We.$$typeof;
                switch (er) {
                  case f:
                  case s:
                  case p:
                  case b:
                  case y:
                  case a:
                    return er;
                  default:
                    return Ve;
                }
            }
          case r:
            return Ve;
        }
      }
    }
    var B = s, q = a, me = e, de = p, z = t, Z = b, ae = y, oe = r, re = i, te = n, ie = m, F = h, ue = !1, Te = !1;
    function c(W) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function g(W) {
      return Te || (Te = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function k(W) {
      return d(W) === s;
    }
    function I(W) {
      return d(W) === a;
    }
    function P(W) {
      return typeof W == "object" && W !== null && W.$$typeof === e;
    }
    function Y(W) {
      return d(W) === p;
    }
    function V(W) {
      return d(W) === t;
    }
    function L(W) {
      return d(W) === b;
    }
    function U(W) {
      return d(W) === y;
    }
    function K(W) {
      return d(W) === r;
    }
    function J(W) {
      return d(W) === i;
    }
    function Oe(W) {
      return d(W) === n;
    }
    function R(W) {
      return d(W) === m;
    }
    function xe(W) {
      return d(W) === h;
    }
    Ee.ContextConsumer = B, Ee.ContextProvider = q, Ee.Element = me, Ee.ForwardRef = de, Ee.Fragment = z, Ee.Lazy = Z, Ee.Memo = ae, Ee.Portal = oe, Ee.Profiler = re, Ee.StrictMode = te, Ee.Suspense = ie, Ee.SuspenseList = F, Ee.isAsyncMode = c, Ee.isConcurrentMode = g, Ee.isContextConsumer = k, Ee.isContextProvider = I, Ee.isElement = P, Ee.isForwardRef = Y, Ee.isFragment = V, Ee.isLazy = L, Ee.isMemo = U, Ee.isPortal = K, Ee.isProfiler = J, Ee.isStrictMode = Oe, Ee.isSuspense = R, Ee.isSuspenseList = xe, Ee.isValidElementType = x, Ee.typeOf = d;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? In.exports = Rs() : In.exports = Ss();
var Jo = In.exports;
const ws = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Ts(e) {
  const r = `${e}`.match(ws);
  return r && r[1] || "";
}
function qi(e, r = "") {
  return e.displayName || e.name || Ts(e) || r;
}
function Zo(e, r, t) {
  const n = qi(r);
  return e.displayName || (n !== "" ? `${t}(${n})` : t);
}
function Cs(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return qi(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Jo.ForwardRef:
          return Zo(e, e.render, "ForwardRef");
        case Jo.Memo:
          return Zo(e, e.type, "memo");
        default:
          return;
      }
  }
}
const xs = w.oneOfType([w.func, w.object]), Wn = xs;
function Je(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Wr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var N = Bn();
const Yr = /* @__PURE__ */ Yi(N), Qo = /* @__PURE__ */ Ha({
  __proto__: null,
  default: Yr
}, [N]);
function Os(e, r) {
  typeof e == "function" ? e(r) : e && (e.current = r);
}
const Ps = typeof window < "u" ? N.useLayoutEffect : N.useEffect, $s = Ps;
function ks({
  controlled: e,
  default: r,
  name: t,
  state: n = "value"
}) {
  const {
    current: i
  } = N.useRef(e !== void 0), [a, s] = N.useState(r), f = i ? e : a;
  if (process.env.NODE_ENV !== "production") {
    N.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${n} state of ${t} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${t} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, t, e]);
    const {
      current: m
    } = N.useRef(r);
    N.useEffect(() => {
      !i && m !== r && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${t} after being initialized. To suppress this warning opt to use a controlled ${t}.`].join(`
`));
    }, [JSON.stringify(r)]);
  }
  const p = N.useCallback((m) => {
    i || s(m);
  }, []);
  return [f, p];
}
function $t(e) {
  const r = N.useRef(e);
  return $s(() => {
    r.current = e;
  }), N.useCallback((...t) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, r.current)(...t)
  ), []);
}
function ei(...e) {
  return N.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    e.forEach((t) => {
      Os(t, r);
    });
  }, e);
}
let Yt = !0, Mn = !1, ri;
const As = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function js(e) {
  const {
    type: r,
    tagName: t
  } = e;
  return !!(t === "INPUT" && As[r] && !e.readOnly || t === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Ns(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Yt = !0);
}
function $n() {
  Yt = !1;
}
function Is() {
  this.visibilityState === "hidden" && Mn && (Yt = !0);
}
function Ms(e) {
  e.addEventListener("keydown", Ns, !0), e.addEventListener("mousedown", $n, !0), e.addEventListener("pointerdown", $n, !0), e.addEventListener("touchstart", $n, !0), e.addEventListener("visibilitychange", Is, !0);
}
function Ds(e) {
  const {
    target: r
  } = e;
  try {
    return r.matches(":focus-visible");
  } catch {
  }
  return Yt || js(r);
}
function Fs() {
  const e = N.useCallback((i) => {
    i != null && Ms(i.ownerDocument);
  }, []), r = N.useRef(!1);
  function t() {
    return r.current ? (Mn = !0, window.clearTimeout(ri), ri = window.setTimeout(() => {
      Mn = !1;
    }, 100), r.current = !1, !0) : !1;
  }
  function n(i) {
    return Ds(i) ? (r.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: r,
    onFocus: n,
    onBlur: t,
    ref: e
  };
}
function Ki(e, r) {
  const t = Q({}, r);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      t[n] = Q({}, e[n], t[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const i = e[n] || {}, a = r[n];
      t[n] = {}, !a || !Object.keys(a) ? t[n] = i : !i || !Object.keys(i) ? t[n] = a : (t[n] = Q({}, a), Object.keys(i).forEach((s) => {
        t[n][s] = Ki(i[s], a[s]);
      }));
    } else
      t[n] === void 0 && (t[n] = e[n]);
  }), t;
}
function qn(e, r, t = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (i) => {
      n[i] = e[i].reduce((a, s) => {
        if (s) {
          const f = r(s);
          f !== "" && a.push(f), t && t[s] && a.push(t[s]);
        }
        return a;
      }, []).join(" ");
    }
  ), n;
}
const ti = (e) => e, Vs = () => {
  let e = ti;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = ti;
    }
  };
}, Ls = Vs(), Us = Ls, Ys = {
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
function lt(e, r, t = "Mui") {
  const n = Ys[r];
  return n ? `${t}-${n}` : `${Us.generate(e)}-${r}`;
}
function Bt(e, r, t = "Mui") {
  const n = {};
  return r.forEach((i) => {
    n[i] = lt(e, i, t);
  }), n;
}
const Gi = "$$material";
function Qe(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(r.indexOf(i) >= 0) && (t[i] = e[i]);
  return t;
}
function Hi(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Bs = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, zs = /* @__PURE__ */ Hi(
  function(e) {
    return Bs.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Ws(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function qs(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Ks = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(i) {
      var a;
      n.tags.length === 0 ? n.insertionPoint ? a = n.insertionPoint.nextSibling : n.prepend ? a = n.container.firstChild : a = n.before : a = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(i, a), n.tags.push(i);
    }, this.isSpeedy = t.speedy === void 0 ? process.env.NODE_ENV === "production" : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(qs(this));
    var i = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var a = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      a && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !a;
    }
    if (this.isSpeedy) {
      var s = Ws(i);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch (f) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', f);
      }
    } else
      i.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), Be = "-ms-", Dt = "-moz-", he = "-webkit-", Kn = "comm", Gn = "rule", Hn = "decl", Gs = "@import", Xi = "@keyframes", Hs = "@layer", Xs = Math.abs, zt = String.fromCharCode, Js = Object.assign;
function Zs(e, r) {
  return Ye(e, 0) ^ 45 ? (((r << 2 ^ Ye(e, 0)) << 2 ^ Ye(e, 1)) << 2 ^ Ye(e, 2)) << 2 ^ Ye(e, 3) : 0;
}
function Ji(e) {
  return e.trim();
}
function Qs(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function ye(e, r, t) {
  return e.replace(r, t);
}
function Dn(e, r) {
  return e.indexOf(r);
}
function Ye(e, r) {
  return e.charCodeAt(r) | 0;
}
function st(e, r, t) {
  return e.slice(r, t);
}
function ur(e) {
  return e.length;
}
function Xn(e) {
  return e.length;
}
function kt(e, r) {
  return r.push(e), e;
}
function ec(e, r) {
  return e.map(r).join("");
}
var Wt = 1, qr = 1, Zi = 0, He = 0, Fe = 0, Gr = "";
function qt(e, r, t, n, i, a, s) {
  return { value: e, root: r, parent: t, type: n, props: i, children: a, line: Wt, column: qr, length: s, return: "" };
}
function nt(e, r) {
  return Js(qt("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function rc() {
  return Fe;
}
function tc() {
  return Fe = He > 0 ? Ye(Gr, --He) : 0, qr--, Fe === 10 && (qr = 1, Wt--), Fe;
}
function Ze() {
  return Fe = He < Zi ? Ye(Gr, He++) : 0, qr++, Fe === 10 && (qr = 1, Wt++), Fe;
}
function fr() {
  return Ye(Gr, He);
}
function At() {
  return He;
}
function ft(e, r) {
  return st(Gr, e, r);
}
function ct(e) {
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
function Qi(e) {
  return Wt = qr = 1, Zi = ur(Gr = e), He = 0, [];
}
function ea(e) {
  return Gr = "", e;
}
function jt(e) {
  return Ji(ft(He - 1, Fn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function nc(e) {
  for (; (Fe = fr()) && Fe < 33; )
    Ze();
  return ct(e) > 2 || ct(Fe) > 3 ? "" : " ";
}
function oc(e, r) {
  for (; --r && Ze() && !(Fe < 48 || Fe > 102 || Fe > 57 && Fe < 65 || Fe > 70 && Fe < 97); )
    ;
  return ft(e, At() + (r < 6 && fr() == 32 && Ze() == 32));
}
function Fn(e) {
  for (; Ze(); )
    switch (Fe) {
      case e:
        return He;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Fn(Fe);
        break;
      case 40:
        e === 41 && Fn(e);
        break;
      case 92:
        Ze();
        break;
    }
  return He;
}
function ic(e, r) {
  for (; Ze() && e + Fe !== 47 + 10; )
    if (e + Fe === 42 + 42 && fr() === 47)
      break;
  return "/*" + ft(r, He - 1) + "*" + zt(e === 47 ? e : Ze());
}
function ac(e) {
  for (; !ct(fr()); )
    Ze();
  return ft(e, He);
}
function sc(e) {
  return ea(Nt("", null, null, null, [""], e = Qi(e), 0, [0], e));
}
function Nt(e, r, t, n, i, a, s, f, p) {
  for (var m = 0, h = 0, y = s, b = 0, C = 0, T = 0, v = 1, E = 1, $ = 1, D = 0, j = "", x = i, d = a, B = n, q = j; E; )
    switch (T = D, D = Ze()) {
      case 40:
        if (T != 108 && Ye(q, y - 1) == 58) {
          Dn(q += ye(jt(D), "&", "&\f"), "&\f") != -1 && ($ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        q += jt(D);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        q += nc(T);
        break;
      case 92:
        q += oc(At() - 1, 7);
        continue;
      case 47:
        switch (fr()) {
          case 42:
          case 47:
            kt(cc(ic(Ze(), At()), r, t), p);
            break;
          default:
            q += "/";
        }
        break;
      case 123 * v:
        f[m++] = ur(q) * $;
      case 125 * v:
      case 59:
      case 0:
        switch (D) {
          case 0:
          case 125:
            E = 0;
          case 59 + h:
            $ == -1 && (q = ye(q, /\f/g, "")), C > 0 && ur(q) - y && kt(C > 32 ? oi(q + ";", n, t, y - 1) : oi(ye(q, " ", "") + ";", n, t, y - 2), p);
            break;
          case 59:
            q += ";";
          default:
            if (kt(B = ni(q, r, t, m, h, i, f, j, x = [], d = [], y), a), D === 123)
              if (h === 0)
                Nt(q, r, B, B, x, a, y, f, d);
              else
                switch (b === 99 && Ye(q, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Nt(e, B, B, n && kt(ni(e, B, B, 0, 0, i, f, j, i, x = [], y), d), i, d, y, f, n ? x : d);
                    break;
                  default:
                    Nt(q, B, B, B, [""], d, 0, f, d);
                }
        }
        m = h = C = 0, v = $ = 1, j = q = "", y = s;
        break;
      case 58:
        y = 1 + ur(q), C = T;
      default:
        if (v < 1) {
          if (D == 123)
            --v;
          else if (D == 125 && v++ == 0 && tc() == 125)
            continue;
        }
        switch (q += zt(D), D * v) {
          case 38:
            $ = h > 0 ? 1 : (q += "\f", -1);
            break;
          case 44:
            f[m++] = (ur(q) - 1) * $, $ = 1;
            break;
          case 64:
            fr() === 45 && (q += jt(Ze())), b = fr(), h = y = ur(j = q += ac(At())), D++;
            break;
          case 45:
            T === 45 && ur(q) == 2 && (v = 0);
        }
    }
  return a;
}
function ni(e, r, t, n, i, a, s, f, p, m, h) {
  for (var y = i - 1, b = i === 0 ? a : [""], C = Xn(b), T = 0, v = 0, E = 0; T < n; ++T)
    for (var $ = 0, D = st(e, y + 1, y = Xs(v = s[T])), j = e; $ < C; ++$)
      (j = Ji(v > 0 ? b[$] + " " + D : ye(D, /&\f/g, b[$]))) && (p[E++] = j);
  return qt(e, r, t, i === 0 ? Gn : f, p, m, h);
}
function cc(e, r, t) {
  return qt(e, r, t, Kn, zt(rc()), st(e, 2, -2), 0);
}
function oi(e, r, t, n) {
  return qt(e, r, t, Hn, st(e, 0, n), st(e, n + 1, -1), n);
}
function Br(e, r) {
  for (var t = "", n = Xn(e), i = 0; i < n; i++)
    t += r(e[i], i, e, r) || "";
  return t;
}
function uc(e, r, t, n) {
  switch (e.type) {
    case Hs:
      if (e.children.length)
        break;
    case Gs:
    case Hn:
      return e.return = e.return || e.value;
    case Kn:
      return "";
    case Xi:
      return e.return = e.value + "{" + Br(e.children, n) + "}";
    case Gn:
      e.value = e.props.join(",");
  }
  return ur(t = Br(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function lc(e) {
  var r = Xn(e);
  return function(t, n, i, a) {
    for (var s = "", f = 0; f < r; f++)
      s += e[f](t, n, i, a) || "";
    return s;
  };
}
function fc(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
var dc = function(r, t, n) {
  for (var i = 0, a = 0; i = a, a = fr(), i === 38 && a === 12 && (t[n] = 1), !ct(a); )
    Ze();
  return ft(r, He);
}, pc = function(r, t) {
  var n = -1, i = 44;
  do
    switch (ct(i)) {
      case 0:
        i === 38 && fr() === 12 && (t[n] = 1), r[n] += dc(He - 1, t, n);
        break;
      case 2:
        r[n] += jt(i);
        break;
      case 4:
        if (i === 44) {
          r[++n] = fr() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += zt(i);
    }
  while (i = Ze());
  return r;
}, mc = function(r, t) {
  return ea(pc(Qi(r), t));
}, ii = /* @__PURE__ */ new WeakMap(), hc = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, i = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !ii.get(n)) && !i) {
      ii.set(r, !0);
      for (var a = [], s = mc(t, a), f = n.props, p = 0, m = 0; p < s.length; p++)
        for (var h = 0; h < f.length; h++, m++)
          r.props[m] = a[p] ? s[p].replace(/&\f/g, f[h]) : f[h] + " " + s[p];
    }
  }
}, yc = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, vc = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", gc = function(r) {
  return r.type === "comm" && r.children.indexOf(vc) > -1;
}, bc = function(r) {
  return function(t, n, i) {
    if (!(t.type !== "rule" || r.compat)) {
      var a = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (a) {
        for (var s = !!t.parent, f = s ? t.parent.children : (
          // global rule at the root level
          i
        ), p = f.length - 1; p >= 0; p--) {
          var m = f[p];
          if (m.line < t.line)
            break;
          if (m.column < t.column) {
            if (gc(m))
              return;
            break;
          }
        }
        a.forEach(function(h) {
          console.error('The pseudo class "' + h + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + h.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, ra = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, Ec = function(r, t) {
  for (var n = r - 1; n >= 0; n--)
    if (!ra(t[n]))
      return !0;
  return !1;
}, ai = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, _c = function(r, t, n) {
  ra(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), ai(r)) : Ec(t, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), ai(r)));
};
function ta(e, r) {
  switch (Zs(e, r)) {
    case 5103:
      return he + "print-" + e + e;
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
      return he + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return he + e + Dt + e + Be + e + e;
    case 6828:
    case 4268:
      return he + e + Be + e + e;
    case 6165:
      return he + e + Be + "flex-" + e + e;
    case 5187:
      return he + e + ye(e, /(\w+).+(:[^]+)/, he + "box-$1$2" + Be + "flex-$1$2") + e;
    case 5443:
      return he + e + Be + "flex-item-" + ye(e, /flex-|-self/, "") + e;
    case 4675:
      return he + e + Be + "flex-line-pack" + ye(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return he + e + Be + ye(e, "shrink", "negative") + e;
    case 5292:
      return he + e + Be + ye(e, "basis", "preferred-size") + e;
    case 6060:
      return he + "box-" + ye(e, "-grow", "") + he + e + Be + ye(e, "grow", "positive") + e;
    case 4554:
      return he + ye(e, /([^-])(transform)/g, "$1" + he + "$2") + e;
    case 6187:
      return ye(ye(ye(e, /(zoom-|grab)/, he + "$1"), /(image-set)/, he + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ye(e, /(image-set\([^]*)/, he + "$1$`$1");
    case 4968:
      return ye(ye(e, /(.+:)(flex-)?(.*)/, he + "box-pack:$3" + Be + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + he + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ye(e, /(.+)-inline(.+)/, he + "$1$2") + e;
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
      if (ur(e) - 1 - r > 6)
        switch (Ye(e, r + 1)) {
          case 109:
            if (Ye(e, r + 4) !== 45)
              break;
          case 102:
            return ye(e, /(.+:)(.+)-([^]+)/, "$1" + he + "$2-$3$1" + Dt + (Ye(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Dn(e, "stretch") ? ta(ye(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (Ye(e, r + 1) !== 115)
        break;
    case 6444:
      switch (Ye(e, ur(e) - 3 - (~Dn(e, "!important") && 10))) {
        case 107:
          return ye(e, ":", ":" + he) + e;
        case 101:
          return ye(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + he + (Ye(e, 14) === 45 ? "inline-" : "") + "box$3$1" + he + "$2$3$1" + Be + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ye(e, r + 11)) {
        case 114:
          return he + e + Be + ye(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return he + e + Be + ye(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return he + e + Be + ye(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return he + e + Be + e + e;
  }
  return e;
}
var Rc = function(r, t, n, i) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case Hn:
        r.return = ta(r.value, r.length);
        break;
      case Xi:
        return Br([nt(r, {
          value: ye(r.value, "@", "@" + he)
        })], i);
      case Gn:
        if (r.length)
          return ec(r.props, function(a) {
            switch (Qs(a, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Br([nt(r, {
                  props: [ye(a, /:(read-\w+)/, ":" + Dt + "$1")]
                })], i);
              case "::placeholder":
                return Br([nt(r, {
                  props: [ye(a, /:(plac\w+)/, ":" + he + "input-$1")]
                }), nt(r, {
                  props: [ye(a, /:(plac\w+)/, ":" + Dt + "$1")]
                }), nt(r, {
                  props: [ye(a, /:(plac\w+)/, Be + "input-$1")]
                })], i);
            }
            return "";
          });
    }
}, Sc = [Rc], wc = function(r) {
  var t = r.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(v) {
      var E = v.getAttribute("data-emotion");
      E.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
    });
  }
  var i = r.stylisPlugins || Sc;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var a = {}, s, f = [];
  s = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(v) {
      for (var E = v.getAttribute("data-emotion").split(" "), $ = 1; $ < E.length; $++)
        a[E[$]] = !0;
      f.push(v);
    }
  );
  var p, m = [hc, yc];
  process.env.NODE_ENV !== "production" && m.push(bc({
    get compat() {
      return T.compat;
    }
  }), _c);
  {
    var h, y = [uc, process.env.NODE_ENV !== "production" ? function(v) {
      v.root || (v.return ? h.insert(v.return) : v.value && v.type !== Kn && h.insert(v.value + "{}"));
    } : fc(function(v) {
      h.insert(v);
    })], b = lc(m.concat(i, y)), C = function(E) {
      return Br(sc(E), b);
    };
    p = function(E, $, D, j) {
      h = D, process.env.NODE_ENV !== "production" && $.map !== void 0 && (h = {
        insert: function(d) {
          D.insert(d + $.map);
        }
      }), C(E ? E + "{" + $.styles + "}" : $.styles), j && (T.inserted[$.name] = !0);
    };
  }
  var T = {
    key: t,
    sheet: new Ks({
      key: t,
      container: s,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: a,
    registered: {},
    insert: p
  };
  return T.sheet.hydrate(f), T;
}, Vn = { exports: {} }, _e = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var si;
function Tc() {
  if (si)
    return _e;
  si = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
  function j(d) {
    if (typeof d == "object" && d !== null) {
      var B = d.$$typeof;
      switch (B) {
        case r:
          switch (d = d.type, d) {
            case p:
            case m:
            case n:
            case a:
            case i:
            case y:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case f:
                case h:
                case T:
                case C:
                case s:
                  return d;
                default:
                  return B;
              }
          }
        case t:
          return B;
      }
    }
  }
  function x(d) {
    return j(d) === m;
  }
  return _e.AsyncMode = p, _e.ConcurrentMode = m, _e.ContextConsumer = f, _e.ContextProvider = s, _e.Element = r, _e.ForwardRef = h, _e.Fragment = n, _e.Lazy = T, _e.Memo = C, _e.Portal = t, _e.Profiler = a, _e.StrictMode = i, _e.Suspense = y, _e.isAsyncMode = function(d) {
    return x(d) || j(d) === p;
  }, _e.isConcurrentMode = x, _e.isContextConsumer = function(d) {
    return j(d) === f;
  }, _e.isContextProvider = function(d) {
    return j(d) === s;
  }, _e.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === r;
  }, _e.isForwardRef = function(d) {
    return j(d) === h;
  }, _e.isFragment = function(d) {
    return j(d) === n;
  }, _e.isLazy = function(d) {
    return j(d) === T;
  }, _e.isMemo = function(d) {
    return j(d) === C;
  }, _e.isPortal = function(d) {
    return j(d) === t;
  }, _e.isProfiler = function(d) {
    return j(d) === a;
  }, _e.isStrictMode = function(d) {
    return j(d) === i;
  }, _e.isSuspense = function(d) {
    return j(d) === y;
  }, _e.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === n || d === m || d === a || d === i || d === y || d === b || typeof d == "object" && d !== null && (d.$$typeof === T || d.$$typeof === C || d.$$typeof === s || d.$$typeof === f || d.$$typeof === h || d.$$typeof === E || d.$$typeof === $ || d.$$typeof === D || d.$$typeof === v);
  }, _e.typeOf = j, _e;
}
var Re = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ci;
function Cc() {
  return ci || (ci = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, T = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
    function j(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === n || R === m || R === a || R === i || R === y || R === b || typeof R == "object" && R !== null && (R.$$typeof === T || R.$$typeof === C || R.$$typeof === s || R.$$typeof === f || R.$$typeof === h || R.$$typeof === E || R.$$typeof === $ || R.$$typeof === D || R.$$typeof === v);
    }
    function x(R) {
      if (typeof R == "object" && R !== null) {
        var xe = R.$$typeof;
        switch (xe) {
          case r:
            var W = R.type;
            switch (W) {
              case p:
              case m:
              case n:
              case a:
              case i:
              case y:
                return W;
              default:
                var Ve = W && W.$$typeof;
                switch (Ve) {
                  case f:
                  case h:
                  case T:
                  case C:
                  case s:
                    return Ve;
                  default:
                    return xe;
                }
            }
          case t:
            return xe;
        }
      }
    }
    var d = p, B = m, q = f, me = s, de = r, z = h, Z = n, ae = T, oe = C, re = t, te = a, ie = i, F = y, ue = !1;
    function Te(R) {
      return ue || (ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), c(R) || x(R) === p;
    }
    function c(R) {
      return x(R) === m;
    }
    function g(R) {
      return x(R) === f;
    }
    function k(R) {
      return x(R) === s;
    }
    function I(R) {
      return typeof R == "object" && R !== null && R.$$typeof === r;
    }
    function P(R) {
      return x(R) === h;
    }
    function Y(R) {
      return x(R) === n;
    }
    function V(R) {
      return x(R) === T;
    }
    function L(R) {
      return x(R) === C;
    }
    function U(R) {
      return x(R) === t;
    }
    function K(R) {
      return x(R) === a;
    }
    function J(R) {
      return x(R) === i;
    }
    function Oe(R) {
      return x(R) === y;
    }
    Re.AsyncMode = d, Re.ConcurrentMode = B, Re.ContextConsumer = q, Re.ContextProvider = me, Re.Element = de, Re.ForwardRef = z, Re.Fragment = Z, Re.Lazy = ae, Re.Memo = oe, Re.Portal = re, Re.Profiler = te, Re.StrictMode = ie, Re.Suspense = F, Re.isAsyncMode = Te, Re.isConcurrentMode = c, Re.isContextConsumer = g, Re.isContextProvider = k, Re.isElement = I, Re.isForwardRef = P, Re.isFragment = Y, Re.isLazy = V, Re.isMemo = L, Re.isPortal = U, Re.isProfiler = K, Re.isStrictMode = J, Re.isSuspense = Oe, Re.isValidElementType = j, Re.typeOf = x;
  }()), Re;
}
process.env.NODE_ENV === "production" ? Vn.exports = Tc() : Vn.exports = Cc();
var xc = Vn.exports, na = xc, Oc = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Pc = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, oa = {};
oa[na.ForwardRef] = Oc;
oa[na.Memo] = Pc;
var $c = !0;
function Jn(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(i) {
    e[i] !== void 0 ? r.push(e[i] + ";") : n += i + " ";
  }), n;
}
var Kt = function(r, t, n) {
  var i = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  $c === !1) && r.registered[i] === void 0 && (r.registered[i] = t.styles);
}, Gt = function(r, t, n) {
  Kt(r, t, n);
  var i = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var a = t;
    do
      r.insert(t === a ? "." + i : "", a, r.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function kc(e) {
  for (var r = 0, t, n = 0, i = e.length; i >= 4; ++n, i -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (i) {
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
var Ac = {
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
}, ui = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, jc = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Nc = /[A-Z]|^ms/g, ia = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Zn = function(r) {
  return r.charCodeAt(1) === 45;
}, li = function(r) {
  return r != null && typeof r != "boolean";
}, kn = /* @__PURE__ */ Hi(function(e) {
  return Zn(e) ? e : e.replace(Nc, "-$&").toLowerCase();
}), Ft = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(ia, function(n, i, a) {
          return sr = {
            name: i,
            styles: a,
            next: sr
          }, i;
        });
  }
  return Ac[r] !== 1 && !Zn(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var Ic = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Mc = ["normal", "none", "initial", "inherit", "unset"], Dc = Ft, Fc = /^-ms-/, Vc = /-(.)/g, fi = {};
  Ft = function(r, t) {
    if (r === "content" && (typeof t != "string" || Mc.indexOf(t) === -1 && !Ic.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var n = Dc(r, t);
    return n !== "" && !Zn(r) && r.indexOf("-") !== -1 && fi[r] === void 0 && (fi[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(Fc, "ms-").replace(Vc, function(i, a) {
      return a.toUpperCase();
    }) + "?")), n;
  };
}
var aa = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function ut(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(aa);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return sr = {
          name: t.name,
          styles: t.styles,
          next: sr
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            sr = {
              name: n.name,
              styles: n.styles,
              next: sr
            }, n = n.next;
        var i = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (i += t.map), i;
      }
      return Lc(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var a = sr, s = t(e);
        return sr = a, ut(e, r, s);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var f = [], p = t.replace(ia, function(h, y, b) {
          var C = "animation" + f.length;
          return f.push("const " + C + " = keyframes`" + b.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + C + "}";
        });
        f.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(f, ["`" + p + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + p + "`"));
      }
      break;
  }
  if (r == null)
    return t;
  var m = r[t];
  return m !== void 0 ? m : t;
}
function Lc(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var i = 0; i < t.length; i++)
      n += ut(e, r, t[i]) + ";";
  else
    for (var a in t) {
      var s = t[a];
      if (typeof s != "object")
        r != null && r[s] !== void 0 ? n += a + "{" + r[s] + "}" : li(s) && (n += kn(a) + ":" + Ft(a, s) + ";");
      else {
        if (a === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(aa);
        if (Array.isArray(s) && typeof s[0] == "string" && (r == null || r[s[0]] === void 0))
          for (var f = 0; f < s.length; f++)
            li(s[f]) && (n += kn(a) + ":" + Ft(a, s[f]) + ";");
        else {
          var p = ut(e, r, s);
          switch (a) {
            case "animation":
            case "animationName": {
              n += kn(a) + ":" + p + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && a === "undefined" && console.error(jc), n += a + "{" + p + "}";
          }
        }
      }
    }
  return n;
}
var di = /label:\s*([^\s;\n{]+)\s*(;|$)/g, sa;
process.env.NODE_ENV !== "production" && (sa = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var sr, Kr = function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var i = !0, a = "";
  sr = void 0;
  var s = r[0];
  s == null || s.raw === void 0 ? (i = !1, a += ut(n, t, s)) : (process.env.NODE_ENV !== "production" && s[0] === void 0 && console.error(ui), a += s[0]);
  for (var f = 1; f < r.length; f++)
    a += ut(n, t, r[f]), i && (process.env.NODE_ENV !== "production" && s[f] === void 0 && console.error(ui), a += s[f]);
  var p;
  process.env.NODE_ENV !== "production" && (a = a.replace(sa, function(b) {
    return p = b, "";
  })), di.lastIndex = 0;
  for (var m = "", h; (h = di.exec(a)) !== null; )
    m += "-" + // $FlowFixMe we know it's not null
    h[1];
  var y = kc(a) + m;
  return process.env.NODE_ENV !== "production" ? {
    name: y,
    styles: a,
    map: p,
    next: sr,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: y,
    styles: a,
    next: sr
  };
}, Uc = function(r) {
  return r();
}, ca = Qo["useInsertionEffect"] ? Qo["useInsertionEffect"] : !1, Qn = ca || Uc, pi = ca || N.useLayoutEffect, Yc = {}.hasOwnProperty, eo = /* @__PURE__ */ N.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ wc({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (eo.displayName = "EmotionCacheContext");
eo.Provider;
var Ht = function(r) {
  return /* @__PURE__ */ N.forwardRef(function(t, n) {
    var i = N.useContext(eo);
    return r(t, i, n);
  });
}, Hr = /* @__PURE__ */ N.createContext({});
process.env.NODE_ENV !== "production" && (Hr.displayName = "EmotionThemeContext");
var mi = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", hi = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Bc = function(r) {
  var t = r.cache, n = r.serialized, i = r.isStringTag;
  return Kt(t, n, i), Qn(function() {
    return Gt(t, n, i);
  }), null;
}, zc = /* @__PURE__ */ Ht(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var i = e[mi], a = [n], s = "";
  typeof e.className == "string" ? s = Jn(r.registered, a, e.className) : e.className != null && (s = e.className + " ");
  var f = Kr(a, void 0, N.useContext(Hr));
  if (process.env.NODE_ENV !== "production" && f.name.indexOf("-") === -1) {
    var p = e[hi];
    p && (f = Kr([f, "label:" + p + ";"]));
  }
  s += r.key + "-" + f.name;
  var m = {};
  for (var h in e)
    Yc.call(e, h) && h !== "css" && h !== mi && (process.env.NODE_ENV === "production" || h !== hi) && (m[h] = e[h]);
  return m.ref = t, m.className = s, /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(Bc, {
    cache: r,
    serialized: f,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ N.createElement(i, m));
});
process.env.NODE_ENV !== "production" && (zc.displayName = "EmotionCssPropInternal");
var Wc = {
  name: "@emotion/react",
  version: "11.11.1",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.2",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.0",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, yi = !1, qc = /* @__PURE__ */ Ht(function(e, r) {
  process.env.NODE_ENV !== "production" && !yi && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), yi = !0);
  var t = e.styles, n = Kr([t], void 0, N.useContext(Hr)), i = N.useRef();
  return pi(function() {
    var a = r.key + "-global", s = new r.sheet.constructor({
      key: a,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy
    }), f = !1, p = document.querySelector('style[data-emotion="' + a + " " + n.name + '"]');
    return r.sheet.tags.length && (s.before = r.sheet.tags[0]), p !== null && (f = !0, p.setAttribute("data-emotion", a), s.hydrate([p])), i.current = [s, f], function() {
      s.flush();
    };
  }, [r]), pi(function() {
    var a = i.current, s = a[0], f = a[1];
    if (f) {
      a[1] = !1;
      return;
    }
    if (n.next !== void 0 && Gt(r, n.next, !0), s.tags.length) {
      var p = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = p, s.flush();
    }
    r.insert("", n, s, !1);
  }, [r, n.name]), null;
});
process.env.NODE_ENV !== "production" && (qc.displayName = "EmotionGlobal");
function Kc() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return Kr(r);
}
var ro = function() {
  var r = Kc.apply(void 0, arguments), t = "animation-" + r.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + r.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Gc = function e(r) {
  for (var t = r.length, n = 0, i = ""; n < t; n++) {
    var a = r[n];
    if (a != null) {
      var s = void 0;
      switch (typeof a) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(a))
            s = e(a);
          else {
            process.env.NODE_ENV !== "production" && a.styles !== void 0 && a.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), s = "";
            for (var f in a)
              a[f] && f && (s && (s += " "), s += f);
          }
          break;
        }
        default:
          s = a;
      }
      s && (i && (i += " "), i += s);
    }
  }
  return i;
};
function Hc(e, r, t) {
  var n = [], i = Jn(e, n, t);
  return n.length < 2 ? t : i + r(n);
}
var Xc = function(r) {
  var t = r.cache, n = r.serializedArr;
  return Qn(function() {
    for (var i = 0; i < n.length; i++)
      Gt(t, n[i], !1);
  }), null;
}, Jc = /* @__PURE__ */ Ht(function(e, r) {
  var t = !1, n = [], i = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var m = arguments.length, h = new Array(m), y = 0; y < m; y++)
      h[y] = arguments[y];
    var b = Kr(h, r.registered);
    return n.push(b), Kt(r, b, !1), r.key + "-" + b.name;
  }, a = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var m = arguments.length, h = new Array(m), y = 0; y < m; y++)
      h[y] = arguments[y];
    return Hc(r.registered, i, Gc(h));
  }, s = {
    css: i,
    cx: a,
    theme: N.useContext(Hr)
  }, f = e.children(s);
  return t = !0, /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(Xc, {
    cache: r,
    serializedArr: n
  }), f);
});
process.env.NODE_ENV !== "production" && (Jc.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var gi = !0, Zc = typeof jest < "u" || typeof vi < "u";
  if (gi && !Zc) {
    var bi = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : gi ? window : global
    ), Ei = "__EMOTION_REACT_" + Wc.version.split(".")[0] + "__";
    bi[Ei] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), bi[Ei] = !0;
  }
}
var Qc = zs, eu = function(r) {
  return r !== "theme";
}, _i = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? Qc : eu;
}, Ri = function(r, t, n) {
  var i;
  if (t) {
    var a = t.shouldForwardProp;
    i = r.__emotion_forwardProp && a ? function(s) {
      return r.__emotion_forwardProp(s) && a(s);
    } : a;
  }
  return typeof i != "function" && n && (i = r.__emotion_forwardProp), i;
}, Si = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, ru = function(r) {
  var t = r.cache, n = r.serialized, i = r.isStringTag;
  return Kt(t, n, i), Qn(function() {
    return Gt(t, n, i);
  }), null;
}, tu = function e(r, t) {
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = r.__emotion_real === r, i = n && r.__emotion_base || r, a, s;
  t !== void 0 && (a = t.label, s = t.target);
  var f = Ri(r, t, n), p = f || _i(i), m = !p("as");
  return function() {
    var h = arguments, y = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (a !== void 0 && y.push("label:" + a + ";"), h[0] == null || h[0].raw === void 0)
      y.push.apply(y, h);
    else {
      process.env.NODE_ENV !== "production" && h[0][0] === void 0 && console.error(Si), y.push(h[0][0]);
      for (var b = h.length, C = 1; C < b; C++)
        process.env.NODE_ENV !== "production" && h[0][C] === void 0 && console.error(Si), y.push(h[C], h[0][C]);
    }
    var T = Ht(function(v, E, $) {
      var D = m && v.as || i, j = "", x = [], d = v;
      if (v.theme == null) {
        d = {};
        for (var B in v)
          d[B] = v[B];
        d.theme = N.useContext(Hr);
      }
      typeof v.className == "string" ? j = Jn(E.registered, x, v.className) : v.className != null && (j = v.className + " ");
      var q = Kr(y.concat(x), E.registered, d);
      j += E.key + "-" + q.name, s !== void 0 && (j += " " + s);
      var me = m && f === void 0 ? _i(D) : p, de = {};
      for (var z in v)
        m && z === "as" || // $FlowFixMe
        me(z) && (de[z] = v[z]);
      return de.className = j, de.ref = $, /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(ru, {
        cache: E,
        serialized: q,
        isStringTag: typeof D == "string"
      }), /* @__PURE__ */ N.createElement(D, de));
    });
    return T.displayName = a !== void 0 ? a : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", T.defaultProps = r.defaultProps, T.__emotion_real = T, T.__emotion_base = i, T.__emotion_styles = y, T.__emotion_forwardProp = f, Object.defineProperty(T, "toString", {
      value: function() {
        return s === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), T.withComponent = function(v, E) {
      return e(v, Q({}, t, E, {
        shouldForwardProp: Ri(T, E, !0)
      })).apply(void 0, y);
    }, T;
  };
}, nu = [
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
], Ln = tu.bind();
nu.forEach(function(e) {
  Ln[e] = Ln(e);
});
/**
 * @mui/styled-engine v5.14.13
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function ou(e, r) {
  const t = Ln(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((a) => a === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
const iu = (e, r) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
}, au = ["values", "unit", "step"], su = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => Q({}, t, {
    [n.key]: n.val
  }), {});
};
function cu(e) {
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
  } = e, i = Qe(e, au), a = su(r), s = Object.keys(a);
  function f(b) {
    return `@media (min-width:${typeof r[b] == "number" ? r[b] : b}${t})`;
  }
  function p(b) {
    return `@media (max-width:${(typeof r[b] == "number" ? r[b] : b) - n / 100}${t})`;
  }
  function m(b, C) {
    const T = s.indexOf(C);
    return `@media (min-width:${typeof r[b] == "number" ? r[b] : b}${t}) and (max-width:${(T !== -1 && typeof r[s[T]] == "number" ? r[s[T]] : C) - n / 100}${t})`;
  }
  function h(b) {
    return s.indexOf(b) + 1 < s.length ? m(b, s[s.indexOf(b) + 1]) : f(b);
  }
  function y(b) {
    const C = s.indexOf(b);
    return C === 0 ? f(s[1]) : C === s.length - 1 ? p(s[C]) : m(b, s[s.indexOf(b) + 1]).replace("@media", "@media not all and");
  }
  return Q({
    keys: s,
    values: a,
    up: f,
    down: p,
    between: m,
    only: h,
    not: y,
    unit: t
  }, i);
}
const uu = {
  borderRadius: 4
}, lu = uu, fu = process.env.NODE_ENV !== "production" ? w.oneOfType([w.number, w.string, w.object, w.array]) : {}, Sr = fu;
function it(e, r) {
  return r ? cr(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const to = {
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
}, wi = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${to[e]}px)`
};
function yr(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const a = n.breakpoints || wi;
    return r.reduce((s, f, p) => (s[a.up(a.keys[p])] = t(r[p]), s), {});
  }
  if (typeof r == "object") {
    const a = n.breakpoints || wi;
    return Object.keys(r).reduce((s, f) => {
      if (Object.keys(a.values || to).indexOf(f) !== -1) {
        const p = a.up(f);
        s[p] = t(r[f], f);
      } else {
        const p = f;
        s[p] = r[p];
      }
      return s;
    }, {});
  }
  return t(r);
}
function du(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, i) => {
    const a = e.up(i);
    return n[a] = {}, n;
  }, {})) || {};
}
function pu(e, r) {
  return e.reduce((t, n) => {
    const i = t[n];
    return (!i || Object.keys(i).length === 0) && delete t[n], t;
  }, r);
}
function Xt(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((i, a) => i && i[a] ? i[a] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, i) => n && n[i] != null ? n[i] : null, e);
}
function Vt(e, r, t, n = t) {
  let i;
  return typeof e == "function" ? i = e(t) : Array.isArray(e) ? i = e[t] || n : i = Xt(e, t) || n, typeof i == "object" && process.env.NODE_ENV !== "production" && console.warn(`MUI: The value found in theme for prop: "${t}" is an [Object] instead of string or number. Check if you forgot to add the correct dotted notation, eg, "background.paper" instead of "background".`), r && (i = r(i, n, e)), i;
}
function Se(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: i
  } = e, a = (s) => {
    if (s[r] == null)
      return null;
    const f = s[r], p = s.theme, m = Xt(p, n) || {};
    return yr(s, f, (y) => {
      let b = Vt(m, i, y);
      return y === b && typeof y == "string" && (b = Vt(m, i, `${r}${y === "default" ? "" : Je(y)}`, y)), t === !1 ? b : {
        [t]: b
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: Sr
  } : {}, a.filterProps = [r], a;
}
function mu(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const hu = {
  m: "margin",
  p: "padding"
}, yu = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ti = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, vu = mu((e) => {
  if (e.length > 2)
    if (Ti[e])
      e = Ti[e];
    else
      return [e];
  const [r, t] = e.split(""), n = hu[r], i = yu[t] || "";
  return Array.isArray(i) ? i.map((a) => n + a) : [n + i];
}), Jt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Zt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], gu = [...Jt, ...Zt];
function dt(e, r, t, n) {
  var i;
  const a = (i = Xt(e, r, !1)) != null ? i : t;
  return typeof a == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), a * s) : Array.isArray(a) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > a.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(a)}.`, `${s} > ${a.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`))), a[s]) : typeof a == "function" ? a : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${a}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function ua(e) {
  return dt(e, "spacing", 8, "spacing");
}
function pt(e, r) {
  if (typeof r == "string" || r == null)
    return r;
  const t = Math.abs(r), n = e(t);
  return r >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function bu(e, r) {
  return (t) => e.reduce((n, i) => (n[i] = pt(r, t), n), {});
}
function Eu(e, r, t, n) {
  if (r.indexOf(t) === -1)
    return null;
  const i = vu(t), a = bu(i, n), s = e[t];
  return yr(e, s, a);
}
function la(e, r) {
  const t = ua(e.theme);
  return Object.keys(e).map((n) => Eu(e, r, n, t)).reduce(it, {});
}
function Ie(e) {
  return la(e, Jt);
}
Ie.propTypes = process.env.NODE_ENV !== "production" ? Jt.reduce((e, r) => (e[r] = Sr, e), {}) : {};
Ie.filterProps = Jt;
function Me(e) {
  return la(e, Zt);
}
Me.propTypes = process.env.NODE_ENV !== "production" ? Zt.reduce((e, r) => (e[r] = Sr, e), {}) : {};
Me.filterProps = Zt;
process.env.NODE_ENV !== "production" && gu.reduce((e, r) => (e[r] = Sr, e), {});
function _u(e = 8) {
  if (e.mui)
    return e;
  const r = ua({
    spacing: e
  }), t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((a) => {
    const s = r(a);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return t.mui = !0, t;
}
function Qt(...e) {
  const r = e.reduce((n, i) => (i.filterProps.forEach((a) => {
    n[a] = i;
  }), n), {}), t = (n) => Object.keys(n).reduce((i, a) => r[a] ? it(i, r[a](n)) : i, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, i) => Object.assign(n, i.propTypes), {}) : {}, t.filterProps = e.reduce((n, i) => n.concat(i.filterProps), []), t;
}
function lr(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const Ru = Se({
  prop: "border",
  themeKey: "borders",
  transform: lr
}), Su = Se({
  prop: "borderTop",
  themeKey: "borders",
  transform: lr
}), wu = Se({
  prop: "borderRight",
  themeKey: "borders",
  transform: lr
}), Tu = Se({
  prop: "borderBottom",
  themeKey: "borders",
  transform: lr
}), Cu = Se({
  prop: "borderLeft",
  themeKey: "borders",
  transform: lr
}), xu = Se({
  prop: "borderColor",
  themeKey: "palette"
}), Ou = Se({
  prop: "borderTopColor",
  themeKey: "palette"
}), Pu = Se({
  prop: "borderRightColor",
  themeKey: "palette"
}), $u = Se({
  prop: "borderBottomColor",
  themeKey: "palette"
}), ku = Se({
  prop: "borderLeftColor",
  themeKey: "palette"
}), en = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = dt(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: pt(r, n)
    });
    return yr(e, e.borderRadius, t);
  }
  return null;
};
en.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Sr
} : {};
en.filterProps = ["borderRadius"];
Qt(Ru, Su, wu, Tu, Cu, xu, Ou, Pu, $u, ku, en);
const rn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = dt(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: pt(r, n)
    });
    return yr(e, e.gap, t);
  }
  return null;
};
rn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Sr
} : {};
rn.filterProps = ["gap"];
const tn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = dt(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: pt(r, n)
    });
    return yr(e, e.columnGap, t);
  }
  return null;
};
tn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Sr
} : {};
tn.filterProps = ["columnGap"];
const nn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = dt(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: pt(r, n)
    });
    return yr(e, e.rowGap, t);
  }
  return null;
};
nn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Sr
} : {};
nn.filterProps = ["rowGap"];
const Au = Se({
  prop: "gridColumn"
}), ju = Se({
  prop: "gridRow"
}), Nu = Se({
  prop: "gridAutoFlow"
}), Iu = Se({
  prop: "gridAutoColumns"
}), Mu = Se({
  prop: "gridAutoRows"
}), Du = Se({
  prop: "gridTemplateColumns"
}), Fu = Se({
  prop: "gridTemplateRows"
}), Vu = Se({
  prop: "gridTemplateAreas"
}), Lu = Se({
  prop: "gridArea"
});
Qt(rn, tn, nn, Au, ju, Nu, Iu, Mu, Du, Fu, Vu, Lu);
function zr(e, r) {
  return r === "grey" ? r : e;
}
const Uu = Se({
  prop: "color",
  themeKey: "palette",
  transform: zr
}), Yu = Se({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: zr
}), Bu = Se({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: zr
});
Qt(Uu, Yu, Bu);
function Xe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const zu = Se({
  prop: "width",
  transform: Xe
}), no = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var n, i;
      const a = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[t]) || to[t];
      return a ? ((i = e.theme) == null || (i = i.breakpoints) == null ? void 0 : i.unit) !== "px" ? {
        maxWidth: `${a}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: a
      } : {
        maxWidth: Xe(t)
      };
    };
    return yr(e, e.maxWidth, r);
  }
  return null;
};
no.filterProps = ["maxWidth"];
const Wu = Se({
  prop: "minWidth",
  transform: Xe
}), qu = Se({
  prop: "height",
  transform: Xe
}), Ku = Se({
  prop: "maxHeight",
  transform: Xe
}), Gu = Se({
  prop: "minHeight",
  transform: Xe
});
Se({
  prop: "size",
  cssProperty: "width",
  transform: Xe
});
Se({
  prop: "size",
  cssProperty: "height",
  transform: Xe
});
const Hu = Se({
  prop: "boxSizing"
});
Qt(zu, no, Wu, qu, Ku, Gu, Hu);
const Xu = {
  // borders
  border: {
    themeKey: "borders",
    transform: lr
  },
  borderTop: {
    themeKey: "borders",
    transform: lr
  },
  borderRight: {
    themeKey: "borders",
    transform: lr
  },
  borderBottom: {
    themeKey: "borders",
    transform: lr
  },
  borderLeft: {
    themeKey: "borders",
    transform: lr
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
    style: en
  },
  // palette
  color: {
    themeKey: "palette",
    transform: zr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: zr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: zr
  },
  // spacing
  p: {
    style: Me
  },
  pt: {
    style: Me
  },
  pr: {
    style: Me
  },
  pb: {
    style: Me
  },
  pl: {
    style: Me
  },
  px: {
    style: Me
  },
  py: {
    style: Me
  },
  padding: {
    style: Me
  },
  paddingTop: {
    style: Me
  },
  paddingRight: {
    style: Me
  },
  paddingBottom: {
    style: Me
  },
  paddingLeft: {
    style: Me
  },
  paddingX: {
    style: Me
  },
  paddingY: {
    style: Me
  },
  paddingInline: {
    style: Me
  },
  paddingInlineStart: {
    style: Me
  },
  paddingInlineEnd: {
    style: Me
  },
  paddingBlock: {
    style: Me
  },
  paddingBlockStart: {
    style: Me
  },
  paddingBlockEnd: {
    style: Me
  },
  m: {
    style: Ie
  },
  mt: {
    style: Ie
  },
  mr: {
    style: Ie
  },
  mb: {
    style: Ie
  },
  ml: {
    style: Ie
  },
  mx: {
    style: Ie
  },
  my: {
    style: Ie
  },
  margin: {
    style: Ie
  },
  marginTop: {
    style: Ie
  },
  marginRight: {
    style: Ie
  },
  marginBottom: {
    style: Ie
  },
  marginLeft: {
    style: Ie
  },
  marginX: {
    style: Ie
  },
  marginY: {
    style: Ie
  },
  marginInline: {
    style: Ie
  },
  marginInlineStart: {
    style: Ie
  },
  marginInlineEnd: {
    style: Ie
  },
  marginBlock: {
    style: Ie
  },
  marginBlockStart: {
    style: Ie
  },
  marginBlockEnd: {
    style: Ie
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
    style: rn
  },
  rowGap: {
    style: nn
  },
  columnGap: {
    style: tn
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
    transform: Xe
  },
  maxWidth: {
    style: no
  },
  minWidth: {
    transform: Xe
  },
  height: {
    transform: Xe
  },
  maxHeight: {
    transform: Xe
  },
  minHeight: {
    transform: Xe
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
}, oo = Xu;
function Ju(...e) {
  const r = e.reduce((n, i) => n.concat(Object.keys(i)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function Zu(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Qu() {
  function e(t, n, i, a) {
    const s = {
      [t]: n,
      theme: i
    }, f = a[t];
    if (!f)
      return {
        [t]: n
      };
    const {
      cssProperty: p = t,
      themeKey: m,
      transform: h,
      style: y
    } = f;
    if (n == null)
      return null;
    if (m === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const b = Xt(i, m) || {};
    return y ? y(s) : yr(s, n, (T) => {
      let v = Vt(b, h, T);
      return T === v && typeof T == "string" && (v = Vt(b, h, `${t}${T === "default" ? "" : Je(T)}`, T)), p === !1 ? v : {
        [p]: v
      };
    });
  }
  function r(t) {
    var n;
    const {
      sx: i,
      theme: a = {}
    } = t || {};
    if (!i)
      return null;
    const s = (n = a.unstable_sxConfig) != null ? n : oo;
    function f(p) {
      let m = p;
      if (typeof p == "function")
        m = p(a);
      else if (typeof p != "object")
        return p;
      if (!m)
        return null;
      const h = du(a.breakpoints), y = Object.keys(h);
      let b = h;
      return Object.keys(m).forEach((C) => {
        const T = Zu(m[C], a);
        if (T != null)
          if (typeof T == "object")
            if (s[C])
              b = it(b, e(C, T, a, s));
            else {
              const v = yr({
                theme: a
              }, T, (E) => ({
                [C]: E
              }));
              Ju(v, T) ? b[C] = r({
                sx: T,
                theme: a
              }) : b = it(b, v);
            }
          else
            b = it(b, e(C, T, a, s));
      }), pu(y, b);
    }
    return Array.isArray(i) ? i.map(f) : f(i);
  }
  return r;
}
const fa = Qu();
fa.filterProps = ["sx"];
const io = fa, el = ["breakpoints", "palette", "spacing", "shape"];
function ao(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: i,
    shape: a = {}
  } = e, s = Qe(e, el), f = cu(t), p = _u(i);
  let m = cr({
    breakpoints: f,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: Q({
      mode: "light"
    }, n),
    spacing: p,
    shape: Q({}, lu, a)
  }, s);
  return m = r.reduce((h, y) => cr(h, y), m), m.unstable_sxConfig = Q({}, oo, s == null ? void 0 : s.unstable_sxConfig), m.unstable_sx = function(y) {
    return io({
      sx: y,
      theme: this
    });
  }, m;
}
function rl(e) {
  return Object.keys(e).length === 0;
}
function tl(e = null) {
  const r = N.useContext(Hr);
  return !r || rl(r) ? e : r;
}
const nl = ao();
function ol(e = nl) {
  return tl(e);
}
function da(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (r = 0; r < e.length; r++)
        e[r] && (t = da(e[r])) && (n && (n += " "), n += t);
    else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function tr() {
  for (var e, r, t = 0, n = ""; t < arguments.length; )
    (e = arguments[t++]) && (r = da(e)) && (n && (n += " "), n += r);
  return n;
}
const il = ["variant"];
function Ci(e) {
  return e.length === 0;
}
function pa(e) {
  const {
    variant: r
  } = e, t = Qe(e, il);
  let n = r || "";
  return Object.keys(t).sort().forEach((i) => {
    i === "color" ? n += Ci(n) ? e[i] : Je(e[i]) : n += `${Ci(n) ? i : Je(i)}${Je(e[i].toString())}`;
  }), n;
}
const al = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function sl(e) {
  return Object.keys(e).length === 0;
}
function cl(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const ul = (e, r) => r.components && r.components[e] && r.components[e].styleOverrides ? r.components[e].styleOverrides : null, Lt = (e) => {
  const r = {};
  return e && e.forEach((t) => {
    const n = pa(t.props);
    r[n] = t.style;
  }), r;
}, ll = (e, r) => {
  let t = [];
  return r && r.components && r.components[e] && r.components[e].variants && (t = r.components[e].variants), Lt(t);
}, Ut = (e, r, t) => {
  const {
    ownerState: n = {}
  } = e, i = [];
  return t && t.forEach((a) => {
    let s = !0;
    Object.keys(a.props).forEach((f) => {
      n[f] !== a.props[f] && e[f] !== a.props[f] && (s = !1);
    }), s && i.push(r[pa(a.props)]);
  }), i;
}, fl = (e, r, t, n) => {
  var i;
  const a = t == null || (i = t.components) == null || (i = i[n]) == null ? void 0 : i.variants;
  return Ut(e, r, a);
};
function It(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const dl = ao(), xi = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Mt({
  defaultTheme: e,
  theme: r,
  themeId: t
}) {
  return sl(r) ? e : r[t] || r;
}
function pl(e) {
  return e ? (r, t) => t[e] : null;
}
const Oi = ({
  styledArg: e,
  props: r,
  defaultTheme: t,
  themeId: n
}) => {
  const i = e(Q({}, r, {
    theme: Mt(Q({}, r, {
      defaultTheme: t,
      themeId: n
    }))
  }));
  let a;
  if (i && i.variants && (a = i.variants, delete i.variants), a) {
    const s = Ut(r, Lt(a), a);
    return [i, ...s];
  }
  return i;
};
function ml(e = {}) {
  const {
    themeId: r,
    defaultTheme: t = dl,
    rootShouldForwardProp: n = It,
    slotShouldForwardProp: i = It
  } = e, a = (s) => io(Q({}, s, {
    theme: Mt(Q({}, s, {
      defaultTheme: t,
      themeId: r
    }))
  }));
  return a.__mui_systemSx = !0, (s, f = {}) => {
    iu(s, (x) => x.filter((d) => !(d != null && d.__mui_systemSx)));
    const {
      name: p,
      slot: m,
      skipVariantsResolver: h,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: b = pl(xi(m))
    } = f, C = Qe(f, al), T = h !== void 0 ? h : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      m && m !== "Root" && m !== "root" || !1
    ), v = y || !1;
    let E;
    process.env.NODE_ENV !== "production" && p && (E = `${p}-${xi(m || "Root")}`);
    let $ = It;
    m === "Root" || m === "root" ? $ = n : m ? $ = i : cl(s) && ($ = void 0);
    const D = ou(s, Q({
      shouldForwardProp: $,
      label: E
    }, C)), j = (x, ...d) => {
      const B = d ? d.map((z) => {
        if (typeof z == "function" && z.__emotion_real !== z)
          return (Z) => Oi({
            styledArg: z,
            props: Z,
            defaultTheme: t,
            themeId: r
          });
        if (Rr(z)) {
          let Z = z, ae;
          return z && z.variants && (ae = z.variants, delete Z.variants, Z = (oe) => {
            let re = z;
            return Ut(oe, Lt(ae), ae).forEach((ie) => {
              re = cr(re, ie);
            }), re;
          }), Z;
        }
        return z;
      }) : [];
      let q = x;
      if (Rr(x)) {
        let z;
        x && x.variants && (z = x.variants, delete q.variants, q = (Z) => {
          let ae = x;
          return Ut(Z, Lt(z), z).forEach((re) => {
            ae = cr(ae, re);
          }), ae;
        });
      } else
        typeof x == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        x.__emotion_real !== x && (q = (z) => Oi({
          styledArg: x,
          props: z,
          defaultTheme: t,
          themeId: r
        }));
      p && b && B.push((z) => {
        const Z = Mt(Q({}, z, {
          defaultTheme: t,
          themeId: r
        })), ae = ul(p, Z);
        if (ae) {
          const oe = {};
          return Object.entries(ae).forEach(([re, te]) => {
            oe[re] = typeof te == "function" ? te(Q({}, z, {
              theme: Z
            })) : te;
          }), b(z, oe);
        }
        return null;
      }), p && !T && B.push((z) => {
        const Z = Mt(Q({}, z, {
          defaultTheme: t,
          themeId: r
        }));
        return fl(z, ll(p, Z), Z, p);
      }), v || B.push(a);
      const me = B.length - d.length;
      if (Array.isArray(x) && me > 0) {
        const z = new Array(me).fill("");
        q = [...x, ...z], q.raw = [...x.raw, ...z];
      }
      const de = D(q, ...B);
      if (process.env.NODE_ENV !== "production") {
        let z;
        p && (z = `${p}${Je(m || "")}`), z === void 0 && (z = `Styled(${Cs(s)})`), de.displayName = z;
      }
      return s.muiName && (de.muiName = s.muiName), de;
    };
    return D.withConfig && (j.withConfig = D.withConfig), j;
  };
}
function hl(e) {
  const {
    theme: r,
    name: t,
    props: n
  } = e;
  return !r || !r.components || !r.components[t] || !r.components[t].defaultProps ? n : Ki(r.components[t].defaultProps, n);
}
function yl({
  props: e,
  name: r,
  defaultTheme: t,
  themeId: n
}) {
  let i = ol(t);
  return n && (i = i[n] || i), hl({
    theme: i,
    name: r,
    props: e
  });
}
function so(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), Math.min(Math.max(r, e), t);
}
function vl(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, i) => i < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function $r(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return $r(vl(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(t) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Wr(9, e));
  let n = e.substring(r + 1, e.length - 1), i;
  if (t === "color") {
    if (n = n.split(" "), i = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Wr(10, i));
  } else
    n = n.split(",");
  return n = n.map((a) => parseFloat(a)), {
    type: t,
    values: n,
    colorSpace: i
  };
}
function on(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.indexOf("rgb") !== -1 ? n = n.map((i, a) => a < 3 ? parseInt(i, 10) : i) : r.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.indexOf("color") !== -1 ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function gl(e) {
  e = $r(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, i = r[2] / 100, a = n * Math.min(i, 1 - i), s = (m, h = (m + t / 30) % 12) => i - a * Math.max(Math.min(h - 3, 9 - h, 1), -1);
  let f = "rgb";
  const p = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (f += "a", p.push(r[3])), on({
    type: f,
    values: p
  });
}
function Pi(e) {
  e = $r(e);
  let r = e.type === "hsl" || e.type === "hsla" ? $r(gl(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function $i(e, r) {
  const t = Pi(e), n = Pi(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function ki(e, r) {
  return e = $r(e), r = so(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, on(e);
}
function ma(e, r) {
  if (e = $r(e), r = so(r), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - r;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return on(e);
}
function ha(e, r) {
  if (e = $r(e), r = so(r), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.indexOf("rgb") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return on(e);
}
function bl(e, r) {
  return Q({
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
const El = ["mode", "contrastThreshold", "tonalOffset"], Ai = {
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
    paper: at.white,
    default: at.white
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
}, An = {
  text: {
    primary: at.white,
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
    active: at.white,
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
function ji(e, r, t, n) {
  const i = n.light || n, a = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = ha(e.main, i) : r === "dark" && (e.dark = ma(e.main, a)));
}
function _l(e = "light") {
  return e === "dark" ? {
    main: Vr[200],
    light: Vr[50],
    dark: Vr[400]
  } : {
    main: Vr[700],
    light: Vr[400],
    dark: Vr[800]
  };
}
function Rl(e = "light") {
  return e === "dark" ? {
    main: Fr[200],
    light: Fr[50],
    dark: Fr[400]
  } : {
    main: Fr[500],
    light: Fr[300],
    dark: Fr[700]
  };
}
function Sl(e = "light") {
  return e === "dark" ? {
    main: Dr[500],
    light: Dr[300],
    dark: Dr[700]
  } : {
    main: Dr[700],
    light: Dr[400],
    dark: Dr[800]
  };
}
function wl(e = "light") {
  return e === "dark" ? {
    main: Lr[400],
    light: Lr[300],
    dark: Lr[700]
  } : {
    main: Lr[700],
    light: Lr[500],
    dark: Lr[900]
  };
}
function Tl(e = "light") {
  return e === "dark" ? {
    main: Ur[400],
    light: Ur[300],
    dark: Ur[700]
  } : {
    main: Ur[800],
    light: Ur[500],
    dark: Ur[900]
  };
}
function Cl(e = "light") {
  return e === "dark" ? {
    main: tt[400],
    light: tt[300],
    dark: tt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: tt[500],
    dark: tt[900]
  };
}
function xl(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2
  } = e, i = Qe(e, El), a = e.primary || _l(r), s = e.secondary || Rl(r), f = e.error || Sl(r), p = e.info || wl(r), m = e.success || Tl(r), h = e.warning || Cl(r);
  function y(v) {
    const E = $i(v, An.text.primary) >= t ? An.text.primary : Ai.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const $ = $i(v, E);
      $ < 3 && console.error([`MUI: The contrast ratio of ${$}:1 for ${E} on ${v}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return E;
  }
  const b = ({
    color: v,
    name: E,
    mainShade: $ = 500,
    lightShade: D = 300,
    darkShade: j = 700
  }) => {
    if (v = Q({}, v), !v.main && v[$] && (v.main = v[$]), !v.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${$}\` property.` : Wr(11, E ? ` (${E})` : "", $));
    if (typeof v.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(v.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Wr(12, E ? ` (${E})` : "", JSON.stringify(v.main)));
    return ji(v, "light", D, n), ji(v, "dark", j, n), v.contrastText || (v.contrastText = y(v.main)), v;
  }, C = {
    dark: An,
    light: Ai
  };
  return process.env.NODE_ENV !== "production" && (C[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), cr(Q({
    // A collection of common colors.
    common: Q({}, at),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: b({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: b({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: b({
      color: f,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: b({
      color: h,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: b({
      color: p,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: b({
      color: m,
      name: "success"
    }),
    // The grey colors.
    grey: cs,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: y,
    // Generate a rich color object.
    augmentColor: b,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, C[r]), i);
}
const Ol = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Pl(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ni = {
  textTransform: "uppercase"
}, Ii = '"Roboto", "Helvetica", "Arial", sans-serif';
function $l(e, r) {
  const t = typeof r == "function" ? r(e) : r, {
    fontFamily: n = Ii,
    // The default font size of the Material Specification.
    fontSize: i = 14,
    // px
    fontWeightLight: a = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: f = 500,
    fontWeightBold: p = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: m = 16,
    // Apply the CSS properties to all the variants.
    allVariants: h,
    pxToRem: y
  } = t, b = Qe(t, Ol);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof m != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const C = i / 14, T = y || (($) => `${$ / m * C}rem`), v = ($, D, j, x, d) => Q({
    fontFamily: n,
    fontWeight: $,
    fontSize: T(D),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: j
  }, n === Ii ? {
    letterSpacing: `${Pl(x / D)}em`
  } : {}, d, h), E = {
    h1: v(a, 96, 1.167, -1.5),
    h2: v(a, 60, 1.2, -0.5),
    h3: v(s, 48, 1.167, 0),
    h4: v(s, 34, 1.235, 0.25),
    h5: v(s, 24, 1.334, 0),
    h6: v(f, 20, 1.6, 0.15),
    subtitle1: v(s, 16, 1.75, 0.15),
    subtitle2: v(f, 14, 1.57, 0.1),
    body1: v(s, 16, 1.5, 0.15),
    body2: v(s, 14, 1.43, 0.15),
    button: v(f, 14, 1.75, 0.4, Ni),
    caption: v(s, 12, 1.66, 0.4),
    overline: v(s, 12, 2.66, 1, Ni),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return cr(Q({
    htmlFontSize: m,
    pxToRem: T,
    fontFamily: n,
    fontSize: i,
    fontWeightLight: a,
    fontWeightRegular: s,
    fontWeightMedium: f,
    fontWeightBold: p
  }, E), b, {
    clone: !1
    // No need to clone deep
  });
}
const kl = 0.2, Al = 0.14, jl = 0.12;
function ke(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${kl})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Al})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${jl})`].join(",");
}
const Nl = ["none", ke(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ke(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ke(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ke(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ke(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ke(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ke(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ke(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ke(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ke(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ke(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ke(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ke(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ke(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ke(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ke(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ke(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ke(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ke(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ke(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ke(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ke(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ke(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ke(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Il = Nl, Ml = ["duration", "easing", "delay"], Dl = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Fl = {
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
function Mi(e) {
  return `${Math.round(e)}ms`;
}
function Vl(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function Ll(e) {
  const r = Q({}, Dl, e.easing), t = Q({}, Fl, e.duration);
  return Q({
    getAutoHeightDuration: Vl,
    create: (i = ["all"], a = {}) => {
      const {
        duration: s = t.standard,
        easing: f = r.easeInOut,
        delay: p = 0
      } = a, m = Qe(a, Ml);
      if (process.env.NODE_ENV !== "production") {
        const h = (b) => typeof b == "string", y = (b) => !isNaN(parseFloat(b));
        !h(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !y(s) && !h(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), h(f) || console.error('MUI: Argument "easing" must be a string.'), !y(p) && !h(p) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(m).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(m).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((h) => `${h} ${typeof s == "string" ? s : Mi(s)} ${f} ${typeof p == "string" ? p : Mi(p)}`).join(",");
    }
  }, e, {
    easing: r,
    duration: t
  });
}
const Ul = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Yl = Ul, Bl = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function zl(e = {}, ...r) {
  const {
    mixins: t = {},
    palette: n = {},
    transitions: i = {},
    typography: a = {}
  } = e, s = Qe(e, Bl);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Wr(18));
  const f = xl(n), p = ao(e);
  let m = cr(p, {
    mixins: bl(p.breakpoints, t),
    palette: f,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Il.slice(),
    typography: $l(f, a),
    transitions: Ll(i),
    zIndex: Q({}, Yl)
  });
  if (m = cr(m, s), m = r.reduce((h, y) => cr(h, y), m), process.env.NODE_ENV !== "production") {
    const h = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], y = (b, C) => {
      let T;
      for (T in b) {
        const v = b[T];
        if (h.indexOf(T) !== -1 && Object.keys(v).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const E = lt("", T);
            console.error([`MUI: The \`${C}\` component increases the CSS specificity of the \`${T}\` internal state.`, "You can not override it like this: ", JSON.stringify(b, null, 2), "", `Instead, you need to use the '&.${E}' syntax:`, JSON.stringify({
              root: {
                [`&.${E}`]: v
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          b[T] = {};
        }
      }
    };
    Object.keys(m.components).forEach((b) => {
      const C = m.components[b].styleOverrides;
      C && b.indexOf("Mui") === 0 && y(C, b);
    });
  }
  return m.unstable_sxConfig = Q({}, oo, s == null ? void 0 : s.unstable_sxConfig), m.unstable_sx = function(y) {
    return io({
      sx: y,
      theme: this
    });
  }, m;
}
const Wl = zl(), ya = Wl;
function co({
  props: e,
  name: r
}) {
  return yl({
    props: e,
    name: r,
    defaultTheme: ya,
    themeId: Gi
  });
}
const ql = (e) => It(e) && e !== "classes", Kl = ml({
  themeId: Gi,
  defaultTheme: ya,
  rootShouldForwardProp: ql
}), vr = Kl;
function Un(e, r) {
  return Un = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Un(e, r);
}
function Gl(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, Un(e, r);
}
const Di = Yr.createContext(null);
function Hl(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function uo(e, r) {
  var t = function(a) {
    return r && N.isValidElement(a) ? r(a) : a;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && N.Children.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    n[i.key] = t(i);
  }), n;
}
function Xl(e, r) {
  e = e || {}, r = r || {};
  function t(h) {
    return h in r ? r[h] : e[h];
  }
  var n = /* @__PURE__ */ Object.create(null), i = [];
  for (var a in e)
    a in r ? i.length && (n[a] = i, i = []) : i.push(a);
  var s, f = {};
  for (var p in r) {
    if (n[p])
      for (s = 0; s < n[p].length; s++) {
        var m = n[p][s];
        f[n[p][s]] = t(m);
      }
    f[p] = t(p);
  }
  for (s = 0; s < i.length; s++)
    f[i[s]] = t(i[s]);
  return f;
}
function Pr(e, r, t) {
  return t[r] != null ? t[r] : e.props[r];
}
function Jl(e, r) {
  return uo(e.children, function(t) {
    return N.cloneElement(t, {
      onExited: r.bind(null, t),
      in: !0,
      appear: Pr(t, "appear", e),
      enter: Pr(t, "enter", e),
      exit: Pr(t, "exit", e)
    });
  });
}
function Zl(e, r, t) {
  var n = uo(e.children), i = Xl(r, n);
  return Object.keys(i).forEach(function(a) {
    var s = i[a];
    if (N.isValidElement(s)) {
      var f = a in r, p = a in n, m = r[a], h = N.isValidElement(m) && !m.props.in;
      p && (!f || h) ? i[a] = N.cloneElement(s, {
        onExited: t.bind(null, s),
        in: !0,
        exit: Pr(s, "exit", e),
        enter: Pr(s, "enter", e)
      }) : !p && f && !h ? i[a] = N.cloneElement(s, {
        in: !1
      }) : p && f && N.isValidElement(m) && (i[a] = N.cloneElement(s, {
        onExited: t.bind(null, s),
        in: m.props.in,
        exit: Pr(s, "exit", e),
        enter: Pr(s, "enter", e)
      }));
    }
  }), i;
}
var Ql = Object.values || function(e) {
  return Object.keys(e).map(function(r) {
    return e[r];
  });
}, ef = {
  component: "div",
  childFactory: function(r) {
    return r;
  }
}, lo = /* @__PURE__ */ function(e) {
  Gl(r, e);
  function r(n, i) {
    var a;
    a = e.call(this, n, i) || this;
    var s = a.handleExited.bind(Hl(a));
    return a.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, a;
  }
  var t = r.prototype;
  return t.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, t.componentWillUnmount = function() {
    this.mounted = !1;
  }, r.getDerivedStateFromProps = function(i, a) {
    var s = a.children, f = a.handleExited, p = a.firstRender;
    return {
      children: p ? Jl(i, f) : Zl(i, s, f),
      firstRender: !1
    };
  }, t.handleExited = function(i, a) {
    var s = uo(this.props.children);
    i.key in s || (i.props.onExited && i.props.onExited(a), this.mounted && this.setState(function(f) {
      var p = Q({}, f.children);
      return delete p[i.key], {
        children: p
      };
    }));
  }, t.render = function() {
    var i = this.props, a = i.component, s = i.childFactory, f = Qe(i, ["component", "childFactory"]), p = this.state.contextValue, m = Ql(this.state.children).map(s);
    return delete f.appear, delete f.enter, delete f.exit, a === null ? /* @__PURE__ */ Yr.createElement(Di.Provider, {
      value: p
    }, m) : /* @__PURE__ */ Yr.createElement(Di.Provider, {
      value: p
    }, /* @__PURE__ */ Yr.createElement(a, f, m));
  }, r;
}(Yr.Component);
lo.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: w.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: w.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: w.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: w.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: w.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: w.func
} : {};
lo.defaultProps = ef;
const rf = lo;
function va(e) {
  const {
    className: r,
    classes: t,
    pulsate: n = !1,
    rippleX: i,
    rippleY: a,
    rippleSize: s,
    in: f,
    onExited: p,
    timeout: m
  } = e, [h, y] = N.useState(!1), b = tr(r, t.ripple, t.rippleVisible, n && t.ripplePulsate), C = {
    width: s,
    height: s,
    top: -(s / 2) + a,
    left: -(s / 2) + i
  }, T = tr(t.child, h && t.childLeaving, n && t.childPulsate);
  return !f && !h && y(!0), N.useEffect(() => {
    if (!f && p != null) {
      const v = setTimeout(p, m);
      return () => {
        clearTimeout(v);
      };
    }
  }, [p, f, m]), /* @__PURE__ */ Ge.jsx("span", {
    className: b,
    style: C,
    children: /* @__PURE__ */ Ge.jsx("span", {
      className: T
    })
  });
}
process.env.NODE_ENV !== "production" && (va.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: w.object.isRequired,
  className: w.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: w.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: w.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: w.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: w.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: w.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: w.number,
  /**
   * exit delay
   */
  timeout: w.number.isRequired
});
const tf = Bt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), nr = tf, nf = ["center", "classes", "className"];
let an = (e) => e, Fi, Vi, Li, Ui;
const Yn = 550, of = 80, af = ro(Fi || (Fi = an`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), sf = ro(Vi || (Vi = an`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), cf = ro(Li || (Li = an`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), uf = vr("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), lf = vr(va, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Ui || (Ui = an`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), nr.rippleVisible, af, Yn, ({
  theme: e
}) => e.transitions.easing.easeInOut, nr.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, nr.child, nr.childLeaving, sf, Yn, ({
  theme: e
}) => e.transitions.easing.easeInOut, nr.childPulsate, cf, ({
  theme: e
}) => e.transitions.easing.easeInOut), ga = /* @__PURE__ */ N.forwardRef(function(r, t) {
  const n = co({
    props: r,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: a = {},
    className: s
  } = n, f = Qe(n, nf), [p, m] = N.useState([]), h = N.useRef(0), y = N.useRef(null);
  N.useEffect(() => {
    y.current && (y.current(), y.current = null);
  }, [p]);
  const b = N.useRef(!1), C = N.useRef(0), T = N.useRef(null), v = N.useRef(null);
  N.useEffect(() => () => {
    C.current && clearTimeout(C.current);
  }, []);
  const E = N.useCallback((x) => {
    const {
      pulsate: d,
      rippleX: B,
      rippleY: q,
      rippleSize: me,
      cb: de
    } = x;
    m((z) => [...z, /* @__PURE__ */ Ge.jsx(lf, {
      classes: {
        ripple: tr(a.ripple, nr.ripple),
        rippleVisible: tr(a.rippleVisible, nr.rippleVisible),
        ripplePulsate: tr(a.ripplePulsate, nr.ripplePulsate),
        child: tr(a.child, nr.child),
        childLeaving: tr(a.childLeaving, nr.childLeaving),
        childPulsate: tr(a.childPulsate, nr.childPulsate)
      },
      timeout: Yn,
      pulsate: d,
      rippleX: B,
      rippleY: q,
      rippleSize: me
    }, h.current)]), h.current += 1, y.current = de;
  }, [a]), $ = N.useCallback((x = {}, d = {}, B = () => {
  }) => {
    const {
      pulsate: q = !1,
      center: me = i || d.pulsate,
      fakeElement: de = !1
      // For test purposes
    } = d;
    if ((x == null ? void 0 : x.type) === "mousedown" && b.current) {
      b.current = !1;
      return;
    }
    (x == null ? void 0 : x.type) === "touchstart" && (b.current = !0);
    const z = de ? null : v.current, Z = z ? z.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let ae, oe, re;
    if (me || x === void 0 || x.clientX === 0 && x.clientY === 0 || !x.clientX && !x.touches)
      ae = Math.round(Z.width / 2), oe = Math.round(Z.height / 2);
    else {
      const {
        clientX: te,
        clientY: ie
      } = x.touches && x.touches.length > 0 ? x.touches[0] : x;
      ae = Math.round(te - Z.left), oe = Math.round(ie - Z.top);
    }
    if (me)
      re = Math.sqrt((2 * Z.width ** 2 + Z.height ** 2) / 3), re % 2 === 0 && (re += 1);
    else {
      const te = Math.max(Math.abs((z ? z.clientWidth : 0) - ae), ae) * 2 + 2, ie = Math.max(Math.abs((z ? z.clientHeight : 0) - oe), oe) * 2 + 2;
      re = Math.sqrt(te ** 2 + ie ** 2);
    }
    x != null && x.touches ? T.current === null && (T.current = () => {
      E({
        pulsate: q,
        rippleX: ae,
        rippleY: oe,
        rippleSize: re,
        cb: B
      });
    }, C.current = setTimeout(() => {
      T.current && (T.current(), T.current = null);
    }, of)) : E({
      pulsate: q,
      rippleX: ae,
      rippleY: oe,
      rippleSize: re,
      cb: B
    });
  }, [i, E]), D = N.useCallback(() => {
    $({}, {
      pulsate: !0
    });
  }, [$]), j = N.useCallback((x, d) => {
    if (clearTimeout(C.current), (x == null ? void 0 : x.type) === "touchend" && T.current) {
      T.current(), T.current = null, C.current = setTimeout(() => {
        j(x, d);
      });
      return;
    }
    T.current = null, m((B) => B.length > 0 ? B.slice(1) : B), y.current = d;
  }, []);
  return N.useImperativeHandle(t, () => ({
    pulsate: D,
    start: $,
    stop: j
  }), [D, $, j]), /* @__PURE__ */ Ge.jsx(uf, Q({
    className: tr(nr.root, a.root, s),
    ref: v
  }, f, {
    children: /* @__PURE__ */ Ge.jsx(rf, {
      component: null,
      exit: !0,
      children: p
    })
  }));
});
process.env.NODE_ENV !== "production" && (ga.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: w.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: w.object,
  /**
   * @ignore
   */
  className: w.string
});
const ff = ga;
function df(e) {
  return lt("MuiButtonBase", e);
}
const pf = Bt("MuiButtonBase", ["root", "disabled", "focusVisible"]), mf = pf, hf = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], yf = (e) => {
  const {
    disabled: r,
    focusVisible: t,
    focusVisibleClassName: n,
    classes: i
  } = e, s = qn({
    root: ["root", r && "disabled", t && "focusVisible"]
  }, df, i);
  return t && n && (s.root += ` ${n}`), s;
}, vf = vr("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, r) => r.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${mf.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), ba = /* @__PURE__ */ N.forwardRef(function(r, t) {
  const n = co({
    props: r,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: a = !1,
    children: s,
    className: f,
    component: p = "button",
    disabled: m = !1,
    disableRipple: h = !1,
    disableTouchRipple: y = !1,
    focusRipple: b = !1,
    LinkComponent: C = "a",
    onBlur: T,
    onClick: v,
    onContextMenu: E,
    onDragLeave: $,
    onFocus: D,
    onFocusVisible: j,
    onKeyDown: x,
    onKeyUp: d,
    onMouseDown: B,
    onMouseLeave: q,
    onMouseUp: me,
    onTouchEnd: de,
    onTouchMove: z,
    onTouchStart: Z,
    tabIndex: ae = 0,
    TouchRippleProps: oe,
    touchRippleRef: re,
    type: te
  } = n, ie = Qe(n, hf), F = N.useRef(null), ue = N.useRef(null), Te = ei(ue, re), {
    isFocusVisibleRef: c,
    onFocus: g,
    onBlur: k,
    ref: I
  } = Fs(), [P, Y] = N.useState(!1);
  m && P && Y(!1), N.useImperativeHandle(i, () => ({
    focusVisible: () => {
      Y(!0), F.current.focus();
    }
  }), []);
  const [V, L] = N.useState(!1);
  N.useEffect(() => {
    L(!0);
  }, []);
  const U = V && !h && !m;
  N.useEffect(() => {
    P && b && !h && V && ue.current.pulsate();
  }, [h, b, P, V]);
  function K(ee, Tr, mr = y) {
    return $t((jr) => (Tr && Tr(jr), !mr && ue.current && ue.current[ee](jr), !0));
  }
  const J = K("start", B), Oe = K("stop", E), R = K("stop", $), xe = K("stop", me), W = K("stop", (ee) => {
    P && ee.preventDefault(), q && q(ee);
  }), Ve = K("start", Z), We = K("stop", de), er = K("stop", z), kr = K("stop", (ee) => {
    k(ee), c.current === !1 && Y(!1), T && T(ee);
  }, !1), dr = $t((ee) => {
    F.current || (F.current = ee.currentTarget), g(ee), c.current === !0 && (Y(!0), j && j(ee)), D && D(ee);
  }), qe = () => {
    const ee = F.current;
    return p && p !== "button" && !(ee.tagName === "A" && ee.href);
  }, or = N.useRef(!1), gr = $t((ee) => {
    b && !or.current && P && ue.current && ee.key === " " && (or.current = !0, ue.current.stop(ee, () => {
      ue.current.start(ee);
    })), ee.target === ee.currentTarget && qe() && ee.key === " " && ee.preventDefault(), x && x(ee), ee.target === ee.currentTarget && qe() && ee.key === "Enter" && !m && (ee.preventDefault(), v && v(ee));
  }), Ar = $t((ee) => {
    b && ee.key === " " && ue.current && P && !ee.defaultPrevented && (or.current = !1, ue.current.stop(ee, () => {
      ue.current.pulsate(ee);
    })), d && d(ee), v && ee.target === ee.currentTarget && qe() && ee.key === " " && !ee.defaultPrevented && v(ee);
  });
  let pr = p;
  pr === "button" && (ie.href || ie.to) && (pr = C);
  const rr = {};
  pr === "button" ? (rr.type = te === void 0 ? "button" : te, rr.disabled = m) : (!ie.href && !ie.to && (rr.role = "button"), m && (rr["aria-disabled"] = m));
  const wr = ei(t, I, F);
  process.env.NODE_ENV !== "production" && N.useEffect(() => {
    U && !ue.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [U]);
  const ir = Q({}, n, {
    centerRipple: a,
    component: p,
    disabled: m,
    disableRipple: h,
    disableTouchRipple: y,
    focusRipple: b,
    tabIndex: ae,
    focusVisible: P
  }), Xr = yf(ir);
  return /* @__PURE__ */ Ge.jsxs(vf, Q({
    as: pr,
    className: tr(Xr.root, f),
    ownerState: ir,
    onBlur: kr,
    onClick: v,
    onContextMenu: Oe,
    onFocus: dr,
    onKeyDown: gr,
    onKeyUp: Ar,
    onMouseDown: J,
    onMouseLeave: W,
    onMouseUp: xe,
    onDragLeave: R,
    onTouchEnd: We,
    onTouchMove: er,
    onTouchStart: Ve,
    ref: wr,
    tabIndex: m ? -1 : ae,
    type: te
  }, rr, ie, {
    children: [s, U ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ Ge.jsx(ff, Q({
        ref: Te,
        center: a
      }, oe))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (ba.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Wn,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: w.bool,
  /**
   * The content of the component.
   */
  children: w.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: w.object,
  /**
   * @ignore
   */
  className: w.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _s,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: w.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: w.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: w.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: w.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: w.string,
  /**
   * @ignore
   */
  href: w.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: w.elementType,
  /**
   * @ignore
   */
  onBlur: w.func,
  /**
   * @ignore
   */
  onClick: w.func,
  /**
   * @ignore
   */
  onContextMenu: w.func,
  /**
   * @ignore
   */
  onDragLeave: w.func,
  /**
   * @ignore
   */
  onFocus: w.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: w.func,
  /**
   * @ignore
   */
  onKeyDown: w.func,
  /**
   * @ignore
   */
  onKeyUp: w.func,
  /**
   * @ignore
   */
  onMouseDown: w.func,
  /**
   * @ignore
   */
  onMouseLeave: w.func,
  /**
   * @ignore
   */
  onMouseUp: w.func,
  /**
   * @ignore
   */
  onTouchEnd: w.func,
  /**
   * @ignore
   */
  onTouchMove: w.func,
  /**
   * @ignore
   */
  onTouchStart: w.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: w.oneOfType([w.arrayOf(w.oneOfType([w.func, w.object, w.bool])), w.func, w.object]),
  /**
   * @default 0
   */
  tabIndex: w.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: w.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: w.oneOfType([w.func, w.shape({
    current: w.shape({
      pulsate: w.func.isRequired,
      start: w.func.isRequired,
      stop: w.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: w.oneOfType([w.oneOf(["button", "reset", "submit"]), w.string])
});
const gf = ba, Ea = /* @__PURE__ */ N.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ea.displayName = "FormControlContext");
const bf = Ea;
function Ef() {
  return N.useContext(bf);
}
function _f(e) {
  return lt("PrivateSwitchBase", e);
}
Bt("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const Rf = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"], Sf = (e) => {
  const {
    classes: r,
    checked: t,
    disabled: n,
    edge: i
  } = e, a = {
    root: ["root", t && "checked", n && "disabled", i && `edge${Je(i)}`],
    input: ["input"]
  };
  return qn(a, _f, r);
}, wf = vr(gf)(({
  ownerState: e
}) => Q({
  padding: 9,
  borderRadius: "50%"
}, e.edge === "start" && {
  marginLeft: e.size === "small" ? -3 : -12
}, e.edge === "end" && {
  marginRight: e.size === "small" ? -3 : -12
})), Tf = vr("input")({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
}), _a = /* @__PURE__ */ N.forwardRef(function(r, t) {
  const {
    autoFocus: n,
    checked: i,
    checkedIcon: a,
    className: s,
    defaultChecked: f,
    disabled: p,
    disableFocusRipple: m = !1,
    edge: h = !1,
    icon: y,
    id: b,
    inputProps: C,
    inputRef: T,
    name: v,
    onBlur: E,
    onChange: $,
    onFocus: D,
    readOnly: j,
    required: x = !1,
    tabIndex: d,
    type: B,
    value: q
  } = r, me = Qe(r, Rf), [de, z] = ks({
    controlled: i,
    default: !!f,
    name: "SwitchBase",
    state: "checked"
  }), Z = Ef(), ae = (Te) => {
    D && D(Te), Z && Z.onFocus && Z.onFocus(Te);
  }, oe = (Te) => {
    E && E(Te), Z && Z.onBlur && Z.onBlur(Te);
  }, re = (Te) => {
    if (Te.nativeEvent.defaultPrevented)
      return;
    const c = Te.target.checked;
    z(c), $ && $(Te, c);
  };
  let te = p;
  Z && typeof te > "u" && (te = Z.disabled);
  const ie = B === "checkbox" || B === "radio", F = Q({}, r, {
    checked: de,
    disabled: te,
    disableFocusRipple: m,
    edge: h
  }), ue = Sf(F);
  return /* @__PURE__ */ Ge.jsxs(wf, Q({
    component: "span",
    className: tr(ue.root, s),
    centerRipple: !0,
    focusRipple: !m,
    disabled: te,
    tabIndex: null,
    role: void 0,
    onFocus: ae,
    onBlur: oe,
    ownerState: F,
    ref: t
  }, me, {
    children: [/* @__PURE__ */ Ge.jsx(Tf, Q({
      autoFocus: n,
      checked: i,
      defaultChecked: f,
      className: ue.input,
      disabled: te,
      id: ie ? b : void 0,
      name: v,
      onChange: re,
      readOnly: j,
      ref: T,
      required: x,
      ownerState: F,
      tabIndex: d,
      type: B
    }, B === "checkbox" && q === void 0 ? {} : {
      value: q
    }, C)), de ? a : y]
  }));
});
process.env.NODE_ENV !== "production" && (_a.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: w.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: w.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: w.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: w.object,
  /**
   * @ignore
   */
  className: w.string,
  /**
   * @ignore
   */
  defaultChecked: w.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: w.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: w.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: w.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: w.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: w.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: w.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Wn,
  /*
   * @ignore
   */
  name: w.string,
  /**
   * @ignore
   */
  onBlur: w.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: w.func,
  /**
   * @ignore
   */
  onFocus: w.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: w.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: w.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: w.object,
  /**
   * @ignore
   */
  tabIndex: w.oneOfType([w.number, w.string]),
  /**
   * The input component prop `type`.
   */
  type: w.string.isRequired,
  /**
   * The value of the component.
   */
  value: w.any
});
const Cf = _a;
function xf(e) {
  return lt("MuiSwitch", e);
}
const Of = Bt("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]), ze = Of, Pf = ["className", "color", "edge", "size", "sx"], $f = (e) => {
  const {
    classes: r,
    edge: t,
    size: n,
    color: i,
    checked: a,
    disabled: s
  } = e, f = {
    root: ["root", t && `edge${Je(t)}`, `size${Je(n)}`],
    switchBase: ["switchBase", `color${Je(i)}`, a && "checked", s && "disabled"],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input"]
  }, p = qn(f, xf, r);
  return Q({}, r, p);
}, kf = vr("span", {
  name: "MuiSwitch",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, t.edge && r[`edge${Je(t.edge)}`], r[`size${Je(t.size)}`]];
  }
})(({
  ownerState: e
}) => Q({
  display: "inline-flex",
  width: 34 + 12 * 2,
  height: 14 + 12 * 2,
  overflow: "hidden",
  padding: 12,
  boxSizing: "border-box",
  position: "relative",
  flexShrink: 0,
  zIndex: 0,
  // Reset the stacking context.
  verticalAlign: "middle",
  // For correct alignment with the text.
  "@media print": {
    colorAdjust: "exact"
  }
}, e.edge === "start" && {
  marginLeft: -8
}, e.edge === "end" && {
  marginRight: -8
}, e.size === "small" && {
  width: 40,
  height: 24,
  padding: 7,
  [`& .${ze.thumb}`]: {
    width: 16,
    height: 16
  },
  [`& .${ze.switchBase}`]: {
    padding: 4,
    [`&.${ze.checked}`]: {
      transform: "translateX(16px)"
    }
  }
})), Af = vr(Cf, {
  name: "MuiSwitch",
  slot: "SwitchBase",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.switchBase, {
      [`& .${ze.input}`]: r.input
    }, t.color !== "default" && r[`color${Je(t.color)}`]];
  }
})(({
  theme: e
}) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  // Render above the focus ripple.
  color: e.vars ? e.vars.palette.Switch.defaultColor : `${e.palette.mode === "light" ? e.palette.common.white : e.palette.grey[300]}`,
  transition: e.transitions.create(["left", "transform"], {
    duration: e.transitions.duration.shortest
  }),
  [`&.${ze.checked}`]: {
    transform: "translateX(20px)"
  },
  [`&.${ze.disabled}`]: {
    color: e.vars ? e.vars.palette.Switch.defaultDisabledColor : `${e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[600]}`
  },
  [`&.${ze.checked} + .${ze.track}`]: {
    opacity: 0.5
  },
  [`&.${ze.disabled} + .${ze.track}`]: {
    opacity: e.vars ? e.vars.opacity.switchTrackDisabled : `${e.palette.mode === "light" ? 0.12 : 0.2}`
  },
  [`& .${ze.input}`]: {
    left: "-100%",
    width: "300%"
  }
}), ({
  theme: e,
  ownerState: r
}) => Q({
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : ki(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, r.color !== "default" && {
  [`&.${ze.checked}`]: {
    color: (e.vars || e).palette[r.color].main,
    "&:hover": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[r.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ki(e.palette[r.color].main, e.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    [`&.${ze.disabled}`]: {
      color: e.vars ? e.vars.palette.Switch[`${r.color}DisabledColor`] : `${e.palette.mode === "light" ? ha(e.palette[r.color].main, 0.62) : ma(e.palette[r.color].main, 0.55)}`
    }
  },
  [`&.${ze.checked} + .${ze.track}`]: {
    backgroundColor: (e.vars || e).palette[r.color].main
  }
})), jf = vr("span", {
  name: "MuiSwitch",
  slot: "Track",
  overridesResolver: (e, r) => r.track
})(({
  theme: e
}) => ({
  height: "100%",
  width: "100%",
  borderRadius: 14 / 2,
  zIndex: -1,
  transition: e.transitions.create(["opacity", "background-color"], {
    duration: e.transitions.duration.shortest
  }),
  backgroundColor: e.vars ? e.vars.palette.common.onBackground : `${e.palette.mode === "light" ? e.palette.common.black : e.palette.common.white}`,
  opacity: e.vars ? e.vars.opacity.switchTrack : `${e.palette.mode === "light" ? 0.38 : 0.3}`
})), Nf = vr("span", {
  name: "MuiSwitch",
  slot: "Thumb",
  overridesResolver: (e, r) => r.thumb
})(({
  theme: e
}) => ({
  boxShadow: (e.vars || e).shadows[1],
  backgroundColor: "currentColor",
  width: 20,
  height: 20,
  borderRadius: "50%"
})), Ra = /* @__PURE__ */ N.forwardRef(function(r, t) {
  const n = co({
    props: r,
    name: "MuiSwitch"
  }), {
    className: i,
    color: a = "primary",
    edge: s = !1,
    size: f = "medium",
    sx: p
  } = n, m = Qe(n, Pf), h = Q({}, n, {
    color: a,
    edge: s,
    size: f
  }), y = $f(h), b = /* @__PURE__ */ Ge.jsx(Nf, {
    className: y.thumb,
    ownerState: h
  });
  return /* @__PURE__ */ Ge.jsxs(kf, {
    className: tr(y.root, i),
    sx: p,
    ownerState: h,
    children: [/* @__PURE__ */ Ge.jsx(Af, Q({
      type: "checkbox",
      icon: b,
      checkedIcon: b,
      ref: t,
      ownerState: h
    }, m, {
      classes: Q({}, y, {
        root: y.switchBase
      })
    })), /* @__PURE__ */ Ge.jsx(jf, {
      className: y.track,
      ownerState: h
    })]
  });
});
process.env.NODE_ENV !== "production" && (Ra.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the component is checked.
   */
  checked: w.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: w.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: w.object,
  /**
   * @ignore
   */
  className: w.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: w.oneOfType([w.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), w.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: w.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: w.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: w.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: w.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: w.node,
  /**
   * The id of the `input` element.
   */
  id: w.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: w.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Wn,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: w.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: w.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense switch styling.
   * @default 'medium'
   */
  size: w.oneOfType([w.oneOf(["medium", "small"]), w.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: w.oneOfType([w.arrayOf(w.oneOfType([w.func, w.object, w.bool])), w.func, w.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: w.any
});
const If = Ra, Mf = ({ onToggle: e, checked: r }) => /* @__PURE__ */ Ge.jsx(
  If,
  {}
);
export {
  Mf as SwitchButton
};
