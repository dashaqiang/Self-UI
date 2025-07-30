import { defineComponent as tt, openBlock as x, createElementBlock as O, normalizeClass as et, createCommentVNode as V, createElementVNode as v, renderSlot as X, ref as it, computed as ct, toDisplayString as A, Fragment as rt, renderList as at, onMounted as pt, onUnmounted as mt, createBlock as vt, Transition as bt, withCtx as gt, createVNode as St, render as dt } from "vue";
const Mt = ["disabled"], kt = {
  key: 0,
  class: "Self-button__loader"
}, _t = { class: "Self-button__content" }, wt = /* @__PURE__ */ tt({
  __name: "Button",
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "medium"
    },
    block: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(r, { emit: f }) {
    const u = r, l = f, $ = (p) => {
      !u.disabled && !u.loading && l("click", p);
    };
    return (p, c) => (x(), O("button", {
      class: et([
        "Self-button",
        `Self-button--${r.type}`,
        `Self-button--${r.size}`,
        {
          "Self-button--block": r.block,
          "Self-button--disabled": r.disabled,
          "Self-button--loading": r.loading
        }
      ]),
      disabled: r.disabled || r.loading,
      onClick: $
    }, [
      r.loading ? (x(), O("span", kt)) : V("", !0),
      v("span", _t, [
        X(p.$slots, "default")
      ])
    ], 10, Mt));
  }
}), ot = (r, f) => {
  const u = r;
  return u.install = (l) => {
    l.component(f || u.name || u.displayName, r);
  }, r;
};
const Dt = ot(wt, "SelfButton");
var nt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ft = { exports: {} };
(function(r, f) {
  (function(u, l) {
    r.exports = l();
  })(nt, function() {
    var u = 1e3, l = 6e4, $ = 36e5, p = "millisecond", c = "second", g = "minute", z = "hour", m = "day", T = "week", S = "month", C = "quarter", h = "year", M = "date", w = "Invalid Date", j = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, q = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, G = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(a) {
      var n = ["th", "st", "nd", "rd"], t = a % 100;
      return "[" + a + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
    } }, L = function(a, n, t) {
      var s = String(a);
      return !s || s.length >= n ? a : "" + Array(n + 1 - s.length).join(t) + a;
    }, F = { s: L, z: function(a) {
      var n = -a.utcOffset(), t = Math.abs(n), s = Math.floor(t / 60), e = t % 60;
      return (n <= 0 ? "+" : "-") + L(s, 2, "0") + ":" + L(e, 2, "0");
    }, m: function a(n, t) {
      if (n.date() < t.date())
        return -a(t, n);
      var s = 12 * (t.year() - n.year()) + (t.month() - n.month()), e = n.clone().add(s, S), i = t - e < 0, o = n.clone().add(s + (i ? -1 : 1), S);
      return +(-(s + (t - e) / (i ? e - o : o - e)) || 0);
    }, a: function(a) {
      return a < 0 ? Math.ceil(a) || 0 : Math.floor(a);
    }, p: function(a) {
      return { M: S, y: h, w: T, d: m, D: M, h: z, m: g, s: c, ms: p, Q: C }[a] || String(a || "").toLowerCase().replace(/s$/, "");
    }, u: function(a) {
      return a === void 0;
    } }, P = "en", E = {};
    E[P] = G;
    var ut = "$isDayjsObject", st = function(a) {
      return a instanceof K || !(!a || !a[ut]);
    }, Q = function a(n, t, s) {
      var e;
      if (!n)
        return P;
      if (typeof n == "string") {
        var i = n.toLowerCase();
        E[i] && (e = i), t && (E[i] = t, e = i);
        var o = n.split("-");
        if (!e && o.length > 1)
          return a(o[0]);
      } else {
        var y = n.name;
        E[y] = n, e = y;
      }
      return !s && e && (P = e), e || !s && P;
    }, k = function(a, n) {
      if (st(a))
        return a.clone();
      var t = typeof n == "object" ? n : {};
      return t.date = a, t.args = arguments, new K(t);
    }, d = F;
    d.l = Q, d.i = st, d.w = function(a, n) {
      return k(a, { locale: n.$L, utc: n.$u, x: n.$x, $offset: n.$offset });
    };
    var K = function() {
      function a(t) {
        this.$L = Q(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[ut] = !0;
      }
      var n = a.prototype;
      return n.parse = function(t) {
        this.$d = function(s) {
          var e = s.date, i = s.utc;
          if (e === null)
            return new Date(NaN);
          if (d.u(e))
            return new Date();
          if (e instanceof Date)
            return new Date(e);
          if (typeof e == "string" && !/Z$/i.test(e)) {
            var o = e.match(j);
            if (o) {
              var y = o[2] - 1 || 0, b = (o[7] || "0").substring(0, 3);
              return i ? new Date(Date.UTC(o[1], y, o[3] || 1, o[4] || 0, o[5] || 0, o[6] || 0, b)) : new Date(o[1], y, o[3] || 1, o[4] || 0, o[5] || 0, o[6] || 0, b);
            }
          }
          return new Date(e);
        }(t), this.init();
      }, n.init = function() {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, n.$utils = function() {
        return d;
      }, n.isValid = function() {
        return this.$d.toString() !== w;
      }, n.isSame = function(t, s) {
        var e = k(t);
        return this.startOf(s) <= e && e <= this.endOf(s);
      }, n.isAfter = function(t, s) {
        return k(t) < this.startOf(s);
      }, n.isBefore = function(t, s) {
        return this.endOf(s) < k(t);
      }, n.$g = function(t, s, e) {
        return d.u(t) ? this[s] : this.set(e, t);
      }, n.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, n.valueOf = function() {
        return this.$d.getTime();
      }, n.startOf = function(t, s) {
        var e = this, i = !!d.u(s) || s, o = d.p(t), y = function(N, Y) {
          var I = d.w(e.$u ? Date.UTC(e.$y, Y, N) : new Date(e.$y, Y, N), e);
          return i ? I : I.endOf(m);
        }, b = function(N, Y) {
          return d.w(e.toDate()[N].apply(e.toDate("s"), (i ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Y)), e);
        }, _ = this.$W, D = this.$M, W = this.$D, U = "set" + (this.$u ? "UTC" : "");
        switch (o) {
          case h:
            return i ? y(1, 0) : y(31, 11);
          case S:
            return i ? y(1, D) : y(0, D + 1);
          case T:
            var H = this.$locale().weekStart || 0, J = (_ < H ? _ + 7 : _) - H;
            return y(i ? W - J : W + (6 - J), D);
          case m:
          case M:
            return b(U + "Hours", 0);
          case z:
            return b(U + "Minutes", 1);
          case g:
            return b(U + "Seconds", 2);
          case c:
            return b(U + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, n.endOf = function(t) {
        return this.startOf(t, !1);
      }, n.$set = function(t, s) {
        var e, i = d.p(t), o = "set" + (this.$u ? "UTC" : ""), y = (e = {}, e[m] = o + "Date", e[M] = o + "Date", e[S] = o + "Month", e[h] = o + "FullYear", e[z] = o + "Hours", e[g] = o + "Minutes", e[c] = o + "Seconds", e[p] = o + "Milliseconds", e)[i], b = i === m ? this.$D + (s - this.$W) : s;
        if (i === S || i === h) {
          var _ = this.clone().set(M, 1);
          _.$d[y](b), _.init(), this.$d = _.set(M, Math.min(this.$D, _.daysInMonth())).$d;
        } else
          y && this.$d[y](b);
        return this.init(), this;
      }, n.set = function(t, s) {
        return this.clone().$set(t, s);
      }, n.get = function(t) {
        return this[d.p(t)]();
      }, n.add = function(t, s) {
        var e, i = this;
        t = Number(t);
        var o = d.p(s), y = function(D) {
          var W = k(i);
          return d.w(W.date(W.date() + Math.round(D * t)), i);
        };
        if (o === S)
          return this.set(S, this.$M + t);
        if (o === h)
          return this.set(h, this.$y + t);
        if (o === m)
          return y(1);
        if (o === T)
          return y(7);
        var b = (e = {}, e[g] = l, e[z] = $, e[c] = u, e)[o] || 1, _ = this.$d.getTime() + t * b;
        return d.w(_, this);
      }, n.subtract = function(t, s) {
        return this.add(-1 * t, s);
      }, n.format = function(t) {
        var s = this, e = this.$locale();
        if (!this.isValid())
          return e.invalidDate || w;
        var i = t || "YYYY-MM-DDTHH:mm:ssZ", o = d.z(this), y = this.$H, b = this.$m, _ = this.$M, D = e.weekdays, W = e.months, U = e.meridiem, H = function(Y, I, Z, R) {
          return Y && (Y[I] || Y(s, i)) || Z[I].slice(0, R);
        }, J = function(Y) {
          return d.s(y % 12 || 12, Y, "0");
        }, N = U || function(Y, I, Z) {
          var R = Y < 12 ? "AM" : "PM";
          return Z ? R.toLowerCase() : R;
        };
        return i.replace(q, function(Y, I) {
          return I || function(Z) {
            switch (Z) {
              case "YY":
                return String(s.$y).slice(-2);
              case "YYYY":
                return d.s(s.$y, 4, "0");
              case "M":
                return _ + 1;
              case "MM":
                return d.s(_ + 1, 2, "0");
              case "MMM":
                return H(e.monthsShort, _, W, 3);
              case "MMMM":
                return H(W, _);
              case "D":
                return s.$D;
              case "DD":
                return d.s(s.$D, 2, "0");
              case "d":
                return String(s.$W);
              case "dd":
                return H(e.weekdaysMin, s.$W, D, 2);
              case "ddd":
                return H(e.weekdaysShort, s.$W, D, 3);
              case "dddd":
                return D[s.$W];
              case "H":
                return String(y);
              case "HH":
                return d.s(y, 2, "0");
              case "h":
                return J(1);
              case "hh":
                return J(2);
              case "a":
                return N(y, b, !0);
              case "A":
                return N(y, b, !1);
              case "m":
                return String(b);
              case "mm":
                return d.s(b, 2, "0");
              case "s":
                return String(s.$s);
              case "ss":
                return d.s(s.$s, 2, "0");
              case "SSS":
                return d.s(s.$ms, 3, "0");
              case "Z":
                return o;
            }
            return null;
          }(Y) || o.replace(":", "");
        });
      }, n.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, n.diff = function(t, s, e) {
        var i, o = this, y = d.p(s), b = k(t), _ = (b.utcOffset() - this.utcOffset()) * l, D = this - b, W = function() {
          return d.m(o, b);
        };
        switch (y) {
          case h:
            i = W() / 12;
            break;
          case S:
            i = W();
            break;
          case C:
            i = W() / 3;
            break;
          case T:
            i = (D - _) / 6048e5;
            break;
          case m:
            i = (D - _) / 864e5;
            break;
          case z:
            i = D / $;
            break;
          case g:
            i = D / l;
            break;
          case c:
            i = D / u;
            break;
          default:
            i = D;
        }
        return e ? i : d.a(i);
      }, n.daysInMonth = function() {
        return this.endOf(S).$D;
      }, n.$locale = function() {
        return E[this.$L];
      }, n.locale = function(t, s) {
        if (!t)
          return this.$L;
        var e = this.clone(), i = Q(t, s, !0);
        return i && (e.$L = i), e;
      }, n.clone = function() {
        return d.w(this.$d, this);
      }, n.toDate = function() {
        return new Date(this.valueOf());
      }, n.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, n.toISOString = function() {
        return this.$d.toISOString();
      }, n.toString = function() {
        return this.$d.toUTCString();
      }, a;
    }(), lt = K.prototype;
    return k.prototype = lt, [["$ms", p], ["$s", c], ["$m", g], ["$H", z], ["$W", m], ["$M", S], ["$y", h], ["$D", M]].forEach(function(a) {
      lt[a[1]] = function(n) {
        return this.$g(n, a[0], a[1]);
      };
    }), k.extend = function(a, n) {
      return a.$i || (a(n, K, k), a.$i = !0), k;
    }, k.locale = Q, k.isDayjs = st, k.unix = function(a) {
      return k(1e3 * a);
    }, k.en = E[P], k.Ls = E, k.p = {}, k;
  });
})(ft);
const B = ft.exports;
var ht = { exports: {} };
(function(r, f) {
  (function(u, l) {
    r.exports = l();
  })(nt, function() {
    return function(u, l) {
      l.prototype.weekday = function($) {
        var p = this.$locale().weekStart || 0, c = this.$W, g = (c < p ? c + 7 : c) - p;
        return this.$utils().u($) ? g : this.subtract(g, "day").add($, "day");
      };
    };
  });
})(ht);
const xt = ht.exports;
var yt = { exports: {} };
(function(r, f) {
  (function(u, l) {
    r.exports = l();
  })(nt, function() {
    var u = "day";
    return function(l, $, p) {
      var c = function(m) {
        return m.add(4 - m.isoWeekday(), u);
      }, g = $.prototype;
      g.isoWeekYear = function() {
        return c(this).year();
      }, g.isoWeek = function(m) {
        if (!this.$utils().u(m))
          return this.add(7 * (m - this.isoWeek()), u);
        var T, S, C, h, M = c(this), w = (T = this.isoWeekYear(), S = this.$u, C = (S ? p.utc : p)().year(T).startOf("year"), h = 4 - C.isoWeekday(), C.isoWeekday() > 4 && (h += 7), C.add(h, u));
        return M.diff(w, "week") + 1;
      }, g.isoWeekday = function(m) {
        return this.$utils().u(m) ? this.day() || 7 : this.day(this.day() % 7 ? m : m - 7);
      };
      var z = g.startOf;
      g.startOf = function(m, T) {
        var S = this.$utils(), C = !!S.u(T) || T;
        return S.p(m) === "isoweek" ? C ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : z.bind(this)(m, T);
      };
    };
  });
})(yt);
const Ot = yt.exports;
var $t = { exports: {} };
(function(r, f) {
  (function(u, l) {
    r.exports = l();
  })(nt, function() {
    return function(u, l) {
      l.prototype.isLeapYear = function() {
        return this.$y % 4 == 0 && this.$y % 100 != 0 || this.$y % 400 == 0;
      };
    };
  });
})($t);
const Yt = $t.exports, Tt = { class: "calendar-wrapper" }, Ct = { class: "header" }, Wt = { class: "week" }, Bt = { class: "days" }, zt = { class: "empty-item" }, It = ["onClick"], jt = { class: "day-number" }, Lt = /* @__PURE__ */ tt({
  __name: "Calendar",
  props: {
    showToday: {
      type: Boolean,
      default: !1
    },
    initDate: {
      type: [String, Number, Date],
      default: () => B()
    }
  },
  emits: ["day-click"],
  setup(r, { emit: f }) {
    B.extend(xt), B.extend(Ot), B.extend(Yt);
    const u = r, l = f, $ = it(B(u.initDate)), p = it(B(u.initDate)), c = (h, M) => {
      const w = B(`${h}-${M.toString().padStart(2, "0")}-01`), j = w.daysInMonth(), q = w.day(), G = [];
      for (let L = 0; L < j; L++) {
        const F = w.add(L, "day");
        G.push({
          date: F.format("YYYY-MM-DD"),
          day: F.date(),
          weekDay: F.day(),
          weekDayName: F.format("dddd")
        });
      }
      return {
        year: h,
        month: M,
        firstDayWeek: q,
        daysInMonth: j,
        days: G
      };
    }, g = (h) => B(p.value).format("YYYY-MM-DD") == h, z = (h) => {
      l("day-click", h);
    }, m = () => {
      const h = $.value.subtract(1, "month");
      $.value = h;
    }, T = () => {
      const h = $.value.add(1, "month");
      $.value = h;
    }, S = ct(() => B($.value).format("YYYY\u5E74MM\u6708")), C = ct(() => {
      const h = B($.value).month() + 1, M = B($.value).year();
      return c(M, h);
    });
    return (h, M) => (x(), O("div", Tt, [
      v("div", Ct, [
        v("div", {
          class: "pre",
          onClick: m
        }, M[0] || (M[0] = [
          v("svg", {
            t: "1753852518284",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "2104",
            width: "32",
            height: "32"
          }, [
            v("path", {
              d: "M499.2 951.466667c-234.666667 0-426.666667-192-426.666667-426.666667 0-17.066667 0-38.4 4.266667-55.466667 4.266667-12.8 12.8-17.066667 25.6-17.066666 12.8 4.266667 17.066667 12.8 17.066667 25.6-4.266667 12.8-4.266667 29.866667-4.266667 46.933333 0 213.333333 170.666667 384 384 384s384-170.666667 384-384-170.666667-384-384-384c-25.6 0-46.933333 4.266667-72.533333 8.533333-12.8 0-21.333333-4.266667-25.6-17.066666 0-12.8 4.266667-21.333333 17.066666-25.6 25.6-4.266667 51.2-8.533333 81.066667-8.533334 234.666667 0 426.666667 192 426.666667 426.666667s-192 426.666667-426.666667 426.666667z",
              fill: "#bfbfbf",
              "p-id": "2105"
            }),
            v("path", {
              d: "M119.466667 418.133333h-8.533334c-8.533333-4.266667-17.066667-17.066667-12.8-29.866666 42.666667-119.466667 128-213.333333 238.933334-256 12.8-4.266667 21.333333 0 25.6 12.8 4.266667 12.8 0 21.333333-12.8 25.6C256 213.333333 174.933333 298.666667 140.8 405.333333c-4.266667 8.533333-12.8 12.8-21.333333 12.8z",
              fill: "#bfbfbf",
              "p-id": "2106"
            }),
            v("path", {
              d: "M558.933333 691.2c-4.266667 0-12.8 0-17.066666-4.266667l-128-128c-8.533333-8.533333-8.533333-21.333333 0-29.866666s21.333333-8.533333 29.866666 0l128 128c8.533333 8.533333 8.533333 21.333333 0 29.866666 0 4.266667-8.533333 4.266667-12.8 4.266667z",
              fill: "#bfbfbf",
              "p-id": "2107"
            }),
            v("path", {
              d: "M435.2 558.933333c-4.266667 0-12.8 0-17.066667-4.266666-8.533333-8.533333-8.533333-21.333333 0-29.866667l128-128c8.533333-8.533333 21.333333-8.533333 29.866667 0s8.533333 21.333333 0 29.866667l-128 128c0 4.266667-8.533333 4.266667-12.8 4.266666z",
              fill: "#bfbfbf",
              "p-id": "2108"
            })
          ], -1)
        ])),
        v("div", null, A(S.value), 1),
        v("div", {
          class: "next",
          onClick: T
        }, M[1] || (M[1] = [
          v("svg", {
            t: "1753852845143",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "2887",
            width: "32",
            height: "32"
          }, [
            v("path", {
              d: "M499.2 951.466667c-234.666667 0-426.666667-192-426.666667-426.666667 0-17.066667 0-38.4 4.266667-55.466667 4.266667-12.8 12.8-17.066667 25.6-17.066666 12.8 4.266667 17.066667 12.8 17.066667 25.6-4.266667 12.8-4.266667 29.866667-4.266667 46.933333 0 213.333333 170.666667 384 384 384s384-170.666667 384-384-170.666667-384-384-384c-25.6 0-46.933333 4.266667-72.533333 8.533333-12.8 0-21.333333-4.266667-25.6-17.066666 0-12.8 4.266667-21.333333 17.066666-25.6 25.6-4.266667 51.2-8.533333 81.066667-8.533334 234.666667 0 426.666667 192 426.666667 426.666667s-192 426.666667-426.666667 426.666667z",
              fill: "#bfbfbf",
              "p-id": "2888"
            }),
            v("path", {
              d: "M119.466667 418.133333h-8.533334c-8.533333-4.266667-17.066667-17.066667-12.8-29.866666 42.666667-119.466667 128-213.333333 238.933334-256 12.8-4.266667 21.333333 0 25.6 12.8 4.266667 12.8 0 21.333333-12.8 25.6C256 213.333333 174.933333 298.666667 140.8 405.333333c-4.266667 8.533333-12.8 12.8-21.333333 12.8z",
              fill: "#bfbfbf",
              "p-id": "2889"
            }),
            v("path", {
              d: "M605.866667 558.933333c-4.266667 0-12.8 0-17.066667-4.266666l-128-128c-8.533333-8.533333-8.533333-21.333333 0-29.866667s21.333333-8.533333 29.866667 0l128 128c8.533333 8.533333 8.533333 21.333333 0 29.866667 0 4.266667-8.533333 4.266667-12.8 4.266666z",
              fill: "#bfbfbf",
              "p-id": "2890"
            }),
            v("path", {
              d: "M473.6 691.2c-4.266667 0-12.8 0-17.066667-4.266667-8.533333-8.533333-8.533333-21.333333 0-29.866666l128-128c8.533333-8.533333 21.333333-8.533333 29.866667 0s8.533333 21.333333 0 29.866666l-128 128c0 4.266667-8.533333 4.266667-12.8 4.266667z",
              fill: "#bfbfbf",
              "p-id": "2891"
            })
          ], -1)
        ]))
      ]),
      v("div", Wt, [
        (x(), O(rt, null, at(["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"], (w, j) => v("div", {
          class: "week-item",
          key: j
        }, A(w), 1)), 64))
      ]),
      v("div", Bt, [
        (x(!0), O(rt, null, at(C.value.firstDayWeek, (w) => (x(), O("div", zt))), 256)),
        (x(!0), O(rt, null, at(C.value.days, (w, j) => (x(), O("div", {
          class: et(["day-item", {
            today: r.showToday && g(w.date)
          }]),
          onClick: (q) => z(w)
        }, [
          X(h.$slots, "day", { day: w }, () => [
            v("div", null, [
              v("span", jt, A(w.day), 1)
            ])
          ])
        ], 10, It))), 256))
      ])
    ]));
  }
});
const Et = ot(Lt, "SelfCalendar"), Ht = { class: "Self-input__wrapper" }, Nt = {
  key: 0,
  class: "Self-input__label"
}, Vt = { class: "Self-input__container" }, At = ["type", "value", "placeholder", "disabled"], Ft = {
  key: 0,
  class: "Self-input__prefix"
}, Ut = {
  key: 1,
  class: "Self-input__suffix"
}, Pt = {
  key: 1,
  class: "Self-input__error-message"
}, Jt = {
  key: 2,
  class: "Self-input__help-text"
}, Zt = /* @__PURE__ */ tt({
  __name: "Input",
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    label: String,
    placeholder: String,
    disabled: Boolean,
    error: Boolean,
    errorMessage: String,
    helpText: String
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(r, { emit: f }) {
    const u = f, l = (c) => {
      const g = c.target;
      u("update:modelValue", g.value);
    }, $ = (c) => {
      u("focus", c);
    }, p = (c) => {
      u("blur", c);
    };
    return (c, g) => (x(), O("div", Ht, [
      r.label ? (x(), O("label", Nt, A(r.label), 1)) : V("", !0),
      v("div", Vt, [
        v("input", {
          class: et([
            "Self-input",
            {
              "Self-input--disabled": r.disabled,
              "Self-input--error": r.error,
              "Self-input--with-icon": c.$slots.prefix || c.$slots.suffix
            }
          ]),
          type: r.type,
          value: r.modelValue,
          placeholder: r.placeholder,
          disabled: r.disabled,
          onInput: l,
          onFocus: $,
          onBlur: p
        }, null, 42, At),
        c.$slots.prefix ? (x(), O("span", Ft, [
          X(c.$slots, "prefix")
        ])) : V("", !0),
        c.$slots.suffix ? (x(), O("span", Ut, [
          X(c.$slots, "suffix")
        ])) : V("", !0)
      ]),
      r.error && r.errorMessage ? (x(), O("div", Pt, A(r.errorMessage), 1)) : V("", !0),
      r.helpText ? (x(), O("div", Jt, A(r.helpText), 1)) : V("", !0)
    ]));
  }
});
const qt = ot(Zt, "SelfInput"), Gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SelfButton: Dt,
  SelfCalendar: Et,
  SelfInput: qt
}, Symbol.toStringTag, { value: "Module" })), Qt = /* @__PURE__ */ tt({
  __name: "Toast",
  props: {
    message: {},
    position: { default: "center" },
    duration: { default: 3e3 }
  },
  setup(r) {
    const f = r, u = it(!0);
    let l;
    pt(() => {
      var p;
      l = window.setTimeout(() => {
        u.value = !1;
      }, (p = f.duration) != null ? p : 2e3);
    });
    function $() {
      u.value = !1, clearTimeout(l);
    }
    return mt(() => {
      clearTimeout(l);
    }), (p, c) => (x(), vt(bt, { name: "toast-fade" }, {
      default: gt(() => [
        u.value ? (x(), O("div", {
          key: 0,
          class: et(["self-toast", p.position]),
          onClick: $
        }, A(p.message), 3)) : V("", !0)
      ]),
      _: 1
    }));
  }
});
const Kt = (r, f) => {
  const u = r.__vccOpts || r;
  for (const [l, $] of f)
    u[l] = $;
  return u;
}, Rt = /* @__PURE__ */ Kt(Qt, [["__scopeId", "data-v-69aaca58"]]);
function Xt(r) {
  const f = typeof r == "string" ? { message: r } : r, u = document.createElement("div");
  document.body.appendChild(u);
  const l = St(Rt, {
    ...f,
    onVanish: () => {
      dt(null, u), document.body.removeChild(u);
    }
  });
  dt(l, u);
}
const te = {
  install(r) {
    r.config.globalProperties.$toast = Xt;
  }
}, ee = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  toast: te
}, Symbol.toStringTag, { value: "Module" })), se = {
  install(r) {
    Object.values(Gt).forEach((f) => {
      f != null && f.install && r.use(f);
    }), Object.values(ee).forEach((f) => {
      f != null && f.install && r.use(f);
    });
  }
};
export {
  Dt as SelfButton,
  Et as SelfCalendar,
  qt as SelfInput,
  se as default,
  te as toast
};
