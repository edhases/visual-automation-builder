var Y_ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function uh(N) {
  return N && N.__esModule && Object.prototype.hasOwnProperty.call(N, "default") ? N.default : N;
}
var al = { exports: {} }, Zm = al.exports, K_;
function Z_() {
  return K_ || (K_ = 1, (function(N, B) {
    (function(n, c) {
      N.exports = c();
    })(Zm, function() {
      var n = {}, c, xe, Oe, Fe, oo, He, lt, io, Ee, si, Ze, K, Ss, Dt, es, w, De, H, Rs, Ge, ts, Os, oe, Qe, no, oi, ss, ii, os, an, ni, ro, Ce, k, hn, lo, ri, li, ci, j, dn, co, $n, L, pn, b, R, is, F, uo, G, Pt, ao, Bt, xt, ge, gn, Cs, ho, Ft, $o, et, mt, ns, ui, po, l, a, p, T, S, J, rs, ys, ai, ah, $l, hh, hi, Ve, Tt, pl, di, dh, gl, Et, ls, _l, ml, Tl, El, $i, _n, fl, bl, pi, go, $h, _o, ph, mn, gh, gi, Tn, _h, En, mh, fn, Il, Sl, bn, In, Sn, _i, Th, mo, mi, Rn, Eh, fh, bh, ft, ie, Ti, Rl, bt, cs, Ih, Ol, On, Cl, Sh, yl, Ei, Rh, Cn, Oh, yn, Ch, yh, vh, To, Lh, vl, fe, vn, Ll, Ln, An, Ah, Al, kl, kh, kn, vs, Nn, Nh, Nl, wl, wh, Mh, Ls, Dh, wn, Eo, fo, tt, Ph, Bh, xh, Fh, Uh, Hh, Gh, Ml, As, ks, Dl, Vh, Wh, Xh, zh, Yh, Kh, jh, Jh, qh, Pl, Zh, us, Mn, Qh, bo, Dn, Bl, xl, Pn, Bn, Fl, ed, Ul, Hl, Gl, Vl, Wl, Xl, zl, td, fi, Yl, xn, Fn, It, Kl, jl, bi, Jl, ql, sd, Un, Zl, od, id, nd, rd, ld, Io, Ql, ec, Ii, tc, cd, ud, sc, oc, Ut, ic, nc, ad, hd, dd, $d, rc, pd, lc, gd, Ns, Si, Hn, Gn, ws, cc, Vn, uc, le, _d, So, Ro, md, ac, Wn, Oo, hc, Ms, Ri, dc, $c, Td, Ed, fd, pc, bd, gc, Co, Id, Sd, Rd, Od, Oi, _c, mc, Tc, Xn, zn, Cd, Ci, Ec, yi, yd, vd, as, fc, St, Ld, Ad, bc, kd, Ds, Ic, Nd, wd, Md, Dd, Pd, Sc, Bd, xd, Yn, Fd, Ud, Rc, Rt, Hd, Gd, yo, Vd, Oc, Kn, Wd, Xd, zd, Cc, jn, yc, Jn, Yd, Kd, jd, Jd, v, Ue, be, ne, Ot, vo, A, ce, qd, Zd, Qd, vc, e$, qn, Lc, Ac, kc, Nc, Lo, t$, s$, o$, Ao, wc, i$, Zn, st, Mc, ko, ct, Dc, n$, Pc, No, r$, hs, Qn, vi, Bc, l$, xc, c$, er, Fc, Uc, Hc, u$, Gc, a$, tr, h$, d$, Li, $$, Vc, sr, or, ir, nr, Wc, p$, Xc, rr, lr, g$, cr, _$, zc, m$, ds, Yc, Ai, Kc, jc, ur, Jc, qc, Zc, Qc, eu, tu, su, ou, iu, nu, T$, E$, f$, b$, I$, S$, R$, O$, C$, ru, lu, cu, uu, au, hu, du, ar, ki, $u, y$, pu, gu, _u, mu, Tu, Eu, fu, bu, Iu, Su, v$, L$, Ru, A$, k$, N$, w$, $;
      c = function(e, t, s, o) {
        if (!(e instanceof f) && typeof e != "string" || `${e}`.trim() === "") throw Error('Invalid type "' + e + '". The type must be a non-empty string or a Blockly.registry.Type.');
        if (e = `${e}`.toLowerCase(), typeof t != "string" || t.trim() === "") throw Error('Invalid name "' + t + '". The name must be a non-empty string.');
        const i = t.toLowerCase();
        if (!s) throw Error("Can not register a null value");
        let r = $s[e], u = hr[e];
        if (r || (r = $s[e] = /* @__PURE__ */ Object.create(null), u = hr[e] = /* @__PURE__ */ Object.create(null)), xe(e, s), !o && r[i] && r[i] !== s) throw Error('Name "' + i + '" with type "' + e + '" already registered.');
        r[i] = s, u[i] = t;
      }, xe = function(e, t) {
        switch (e) {
          case String(f.FIELD):
            if (typeof t.fromJson != "function") throw Error('Type "' + e + '" must have a fromJson function');
        }
      }, Oe = function(e, t) {
        e = `${e}`.toLowerCase(), t = t.toLowerCase();
        const s = $s[e];
        s && s[t] ? (delete $s[e][t], delete hr[e][t]) : console.warn("Unable to unregister [" + t + "][" + e + "] from the registry.");
      }, Fe = function(e, t, s) {
        e = `${e}`.toLowerCase(), t = t.toLowerCase();
        const o = $s[e];
        if (!o || !o[t]) {
          if (t = "Unable to find [" + t + "][" + e + "] in the registry.", s) throw Error(t + " You must require or register a " + e + " plugin.");
          return console.warn(t), null;
        }
        return o[t];
      }, oo = function(e, t) {
        return e = `${e}`.toLowerCase(), t = t.toLowerCase(), (e = $s[e]) ? !!e[t] : !1;
      }, He = function(e, t, s) {
        return Fe(e, t, s);
      }, lt = function(e, t, s) {
        return Fe(e, t, s);
      }, io = function(e, t, s) {
        e = `${e}`.toLowerCase();
        var o = $s[e];
        if (!o) {
          if (o = `Unable to find [${e}] in the registry.`, s) throw Error(`${o} You must require or register a ${e} plugin.`);
          return console.warn(o), null;
        }
        if (!t) return o;
        e = hr[e], s = /* @__PURE__ */ Object.create(null);
        for (const i of Object.keys(o)) s[e[i]] = o[i];
        return s;
      }, Ee = function(e, t, s) {
        return t = t.plugins[String(e)] || We, typeof t == "function" ? t : He(e, t, s);
      }, si = function(e, t) {
        Ze(), $r = setTimeout(function() {
          t && t.handleRightClick(e);
        }, sm);
      }, Ze = function() {
        $r && (clearTimeout($r), $r = 0);
      }, K = function() {
        dr = null;
      }, Ss = function(e) {
        return !e.type.startsWith("pointer") || e instanceof PointerEvent && es(e);
      }, Dt = function(e) {
        return `${e.pointerId}`;
      }, es = function(e) {
        const t = Dt(e);
        return dr ? dr === t : e.type === "pointerdown" ? (dr = t, !0) : !1;
      }, w = function(e, t, s, o, i, r) {
        function u(E) {
          (i || Ss(E)) && (s ? o.call(s, E) : o(E));
        }
        const h = [];
        if (t in Ps) for (let E = 0; E < Ps[t].length; E++) {
          const y = Ps[t][E];
          e.addEventListener(y, u, Object.assign({}, { capture: !1 }, r)), h.push([e, y, u]);
        }
        else e.addEventListener(t, u, Object.assign({}, { capture: !1 }, r)), h.push([e, t, u]);
        return h;
      }, De = function(e, t, s, o, i) {
        function r(h) {
          s ? o.call(s, h) : o(h);
        }
        const u = [];
        if (t in Ps) for (let h = 0; h < Ps[t].length; h++) {
          const E = Ps[t][h];
          e.addEventListener(E, r, Object.assign({}, { capture: !1 }, i)), u.push([e, E, r]);
        }
        else e.addEventListener(t, r, Object.assign({}, { capture: !1 }, i)), u.push([e, t, r]);
        return u;
      }, H = function(e) {
        const t = e[e.length - 1][2];
        for (; e.length; ) {
          const [s, o, i] = e.pop();
          s.removeEventListener(o, i, !1);
        }
        return t;
      }, Rs = function(e) {
        if (e.target instanceof HTMLElement) {
          if (e.target.isContentEditable || e.target.getAttribute("data-is-text-input") === "true") return !0;
          if (e.target instanceof HTMLInputElement) return e = e.target, e.type === "text" || e.type === "number" || e.type === "email" || e.type === "password" || e.type === "search" || e.type === "tel" || e.type === "url";
          if (e.target instanceof HTMLTextAreaElement) return !0;
        }
        return !1;
      }, Ge = function(e) {
        return e.ctrlKey && _r ? !0 : e.button === 2;
      }, ts = function(e, t, s) {
        const o = t.createSVGPoint();
        return o.x = e.clientX, o.y = e.clientY, s || (s = t.getScreenCTM().inverse()), o.matrixTransform(s);
      }, Os = function(e) {
        switch (e.deltaMode) {
          default:
            return { x: e.deltaX, y: e.deltaY };
          case 1:
            return { x: e.deltaX * z$, y: e.deltaY * z$ };
          case 2:
            return { x: e.deltaX * Y$, y: e.deltaY * Y$ };
        }
      }, oe = function() {
        return "blockly-" + (nm++).toString(36);
      }, Qe = function() {
        return J$.genUid();
      }, no = function(e) {
        return e.type === m.BLOCK_CREATE;
      }, oi = function(e) {
        return e.type === m.BLOCK_DELETE;
      }, ss = function(e) {
        return e.type === m.BLOCK_CHANGE;
      }, ii = function(e) {
        return e.type === m.BLOCK_FIELD_INTERMEDIATE_CHANGE;
      }, os = function(e) {
        return e.type === m.BLOCK_MOVE;
      }, an = function(e) {
        return e.type === m.CLICK;
      }, ni = function(e) {
        return e.type === m.BUBBLE_OPEN;
      }, ro = function(e) {
        return e.type === m.VIEWPORT_CHANGE;
      }, n.setRecordUndo$$module$build$src$core$events$utils = function(e) {
        Ni = e;
      }, Ce = function() {
        return Ni;
      }, k = function(e) {
        Z$.fireInternal(e);
      }, hn = function(e) {
        if (j()) {
          if (!Vt.length) try {
            requestAnimationFrame(() => {
              setTimeout(lo, 0);
            });
          } catch {
            setTimeout(lo, 0);
          }
          ri(e);
        }
      }, lo = function() {
        const e = li(Vt);
        Vt.length = 0;
        for (const t of e) {
          if (!t.workspaceId) continue;
          let s;
          (s = mt(t.workspaceId)) == null || s.fireChangeListener(t);
        }
      }, ri = function(e) {
        if (ss(e) && e.element === "mutation") {
          let t;
          for (t = Vt.length; t > 0; t--) {
            const s = Vt[t - 1];
            if (s.group !== e.group || s.workspaceId !== e.workspaceId || !os(s) || s.newParentId !== e.blockId) break;
          }
          Vt.splice(t, 0, e);
        } else Vt.push(e);
      }, li = function(e) {
        const t = [];
        for (const s of e) if (e = t[t.length - 1], !s.isNull()) if (e && e.workspaceId === s.workspaceId && e.group === s.group) if (os(s) && os(e) && s.blockId === e.blockId) {
          if (e.newParentId = s.newParentId, e.newInputName = s.newInputName, e.newCoordinate = s.newCoordinate, e.reason || s.reason) {
            let o, i;
            e.reason = Array.from(new Set(((o = e.reason) != null ? o : []).concat((i = s.reason) != null ? i : [])));
          }
        } else ss(s) && ss(e) && s.blockId === e.blockId && s.element === e.element && s.name === e.name ? e.newValue = s.newValue : ro(s) && ro(e) ? (e.viewTop = s.viewTop, e.viewLeft = s.viewLeft, e.scale = s.scale, e.oldScale = s.oldScale) : an(s) && ni(e) || t.push(s);
        else t.push(s);
        return e = t.filter((s) => !s.isNull());
      }, ci = function() {
        for (let e = 0, t; t = Vt[e]; e++) t.recordUndo = !1;
      }, n.disable$$module$build$src$core$events$utils = function() {
        Lu++;
      }, n.enable$$module$build$src$core$events$utils = function() {
        Lu--;
      }, j = function() {
        return Lu === 0;
      }, n.getGroup$$module$build$src$core$events$utils = function() {
        return q$;
      }, n.setGroup$$module$build$src$core$events$utils = function(e) {
        Z$.setGroupInternal(e);
      }, dn = function(e) {
        q$ = typeof e == "boolean" ? e ? Qe() : "" : e;
      }, co = function(e) {
        const t = [];
        e = e.getDescendants(!1);
        for (let s = 0, o; o = e[s]; s++) t[s] = o.id;
        return t;
      }, $n = function(e, t) {
        const s = L(e.type);
        if (!s) throw Error("Unknown event type.");
        return s.fromJson(e, t);
      }, L = function(e) {
        const t = He(f.EVENT, e);
        if (!t) throw Error(`Event type ${e} not found in registry.`);
        return t;
      }, pn = function(e) {
        if ((os(e) || no(e)) && e.workspaceId) {
          var t = mt(e.workspaceId);
          if (!e.blockId) throw Error("Encountered a blockEvent without a proper blockId");
          if (e = t.getBlockById(e.blockId)) {
            const s = Ni;
            try {
              Ni = !1;
              const o = e.getParent();
              if (o && !o.hasDisabledReason(Au)) {
                const i = e.getDescendants(!1);
                for (let r = 0, u; u = i[r]; r++) u.setDisabledReason(!1, Au);
              } else if ((e.outputConnection || e.previousConnection) && !t.isDragging())
                do
                  e.setDisabledReason(!0, Au), e = e.getNextBlock();
                while (e);
            } finally {
              Ni = s;
            }
          }
        }
      }, b = function(e, t, s) {
        e = document.createElementNS(wi, `${e}`);
        for (const o in t) e.setAttribute(o, `${t[o]}`);
        return s && s.appendChild(e), e;
      }, R = function(e, t) {
        return t = t.split(" "), t.every((s) => e.classList.contains(s)) ? !1 : (e.classList.add(...t), !0);
      }, is = function(e, t) {
        e.classList.remove(...t.split(" "));
      }, F = function(e, t) {
        return t = t.split(" "), t.every((s) => !e.classList.contains(s)) ? !1 : (e.classList.remove(...t), !0);
      }, uo = function(e, t) {
        return e.classList.contains(t);
      }, G = function(e) {
        return e && e.parentNode ? e.parentNode.removeChild(e) : null;
      }, Pt = function(e, t) {
        const s = t.nextSibling;
        if (t = t.parentNode, !t) throw Error("Reference node has no parent.");
        s ? t.insertBefore(e, s) : t.appendChild(e);
      }, ao = function(e, t) {
        e.style.transform = t, e.style["-webkit-transform"] = t;
      }, Bt = function() {
        ku++, ut || (ut = /* @__PURE__ */ Object.create(null));
      }, xt = function() {
        ku--, ku || (ut = null);
      }, ge = function(e) {
        const t = e.textContent + `
` + e.className.baseVal;
        var s;
        return ut && (s = ut[t]) || (s = window.getComputedStyle(e), s = Cs(e, s.fontSize, s.fontWeight, s.fontFamily), ut && (ut[t] = s)), s;
      }, gn = function(e, t, s, o) {
        return Cs(e, t + "pt", s, o);
      }, Cs = function(e, t, s, o) {
        const i = e.textContent;
        e = i + `
` + e.className.baseVal;
        var r;
        return ut && (r = ut[e]) || (Mi || (r = document.createElement("canvas"), r.className = "blocklyComputeCanvas", document.body.appendChild(r), Mi = r.getContext("2d")), i && Mi ? (Mi.font = s + " " + t + " " + o, r = Mi.measureText(i).width) : r = 0, ut && (ut[e] = r)), r;
      }, ho = function(e, t, s, o) {
        const i = document.createElement("span");
        i.style.font = s + " " + t + " " + o, i.textContent = e, e = document.createElement("div"), e.style.width = "1px", e.style.height = "0", t = document.createElement("div"), t.style.display = "flex", t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.appendChild(i), t.appendChild(e), document.body.appendChild(t), s = { height: 0, baseline: 0 };
        try {
          t.style.alignItems = "baseline", s.baseline = e.offsetTop - i.offsetTop, t.style.alignItems = "flex-end", s.height = e.offsetTop - i.offsetTop;
        } finally {
          document.body.removeChild(t);
        }
        return s;
      }, n.getFocusManager$$module$build$src$core$focus_manager = function() {
        return ye.getFocusManager();
      }, Ft = function(e) {
        return e && typeof e.getFocusableElement == "function" && typeof e.getFocusableTree == "function" && typeof e.onNodeFocus == "function" && typeof e.onNodeBlur == "function" && typeof e.canBeFocused == "function";
      }, $o = function(e) {
        return Ft(e) && typeof e.id == "string" && typeof e.workspace == "object" && typeof e.select == "function" && typeof e.unselect == "function";
      }, et = function(e, t) {
        for (const s in t) t[s] !== null && Array.isArray(t[s]) ? e[s] = et(e[s] || [], t[s]) : e[s] = t[s] !== null && typeof t[s] == "object" ? et(e[s] || /* @__PURE__ */ Object.create(null), t[s]) : t[s];
        return e;
      }, mt = function(e) {
        return Di[e] || null;
      }, ns = function() {
        const e = [];
        for (const t in Di) e.push(Di[t]);
        return e;
      }, ui = function(e) {
        Di[e.id] = e;
      }, po = function(e) {
        delete Di[e.id];
      }, l = function() {
        return ep;
      }, a = function(e) {
        ep = e;
      }, p = function() {
        const e = n.getFocusManager$$module$build$src$core$focus_manager().getFocusedNode();
        return e && $o(e) ? e : null;
      }, T = function(e) {
        n.getFocusManager$$module$build$src$core$focus_manager().focusNode(e);
      }, S = function(e) {
        const t = p();
        let s, o, i, r;
        const u = new (L(m.SELECTED))((s = t == null ? void 0 : t.id) != null ? s : null, (o = e == null ? void 0 : e.id) != null ? o : null, (r = (i = e == null ? void 0 : e.workspace.id) != null ? i : t == null ? void 0 : t.workspace.id) != null ? r : "");
        k(u);
      }, J = function() {
        return tp;
      }, rs = function(e) {
        tp = e;
      }, ys = function(e) {
        for (; e.options.parentWorkspace; ) e = e.options.parentWorkspace;
        const t = e.getParentSvg(), s = e.getCachedParentSvgSize();
        var o = t.parentElement;
        if (o instanceof HTMLElement) {
          var i = o.offsetWidth;
          o = o.offsetHeight, s.width !== i && (t.setAttribute("width", i + "px"), e.setCachedParentSvgSize(i, null)), s.height !== o && (t.setAttribute("height", o + "px"), e.setCachedParentSvgSize(null, o)), e.resize();
        }
      }, ai = function(e, t) {
        const s = /* @__PURE__ */ Object.create(null), o = e.getDescendants(!0);
        t && (e = e.getNextBlock()) && (e = o.indexOf(e), o.splice(e, o.length - e));
        for (let i = 0, r; r = o[i]; i++) s[r.type] ? s[r.type]++ : s[r.type] = 1;
        return s;
      }, ah = function(e) {
        return function() {
          this.jsonInit(e);
        };
      }, $l = function(e) {
        sp.defineBlocksWithJsonArrayInternal(e);
      }, hh = function(e) {
        n.defineBlocks$$module$build$src$core$common(n.createBlockDefinitionsFromJsonArray$$module$build$src$core$common(e));
      }, n.createBlockDefinitionsFromJsonArray$$module$build$src$core$common = function(e) {
        const t = {};
        for (let s = 0; s < e.length; s++) {
          const o = e[s];
          if (!o) {
            console.warn(`Block definition #${s} in JSON array is ${o}. Skipping`);
            continue;
          }
          const i = o.type;
          i ? t[i] = { init: ah(o) } : console.warn(`Block definition #${s} in JSON array is missing a type attribute. Skipping.`);
        }
        return t;
      }, n.defineBlocks$$module$build$src$core$common = function(e) {
        for (const t of Object.keys(e)) {
          const s = e[t];
          t in q && console.warn(`Block definition "${t}" overwrites previous definition.`), q[t] = s;
        }
      }, hi = function(e) {
        let t = l();
        const s = n.getFocusManager$$module$build$src$core$focus_manager().getFocusedTree();
        for (const o of ns()) if (s === o) {
          t = o;
          break;
        }
        !Rs(e) && t && (!t.rendered || t.isFlyout || t.isVisible()) && Z.registry.onKeyDown(t, e);
      }, Ve = function(e, t) {
        return t = e.indexOf(t), t === -1 ? !1 : (e.splice(t, 1), !0);
      }, Tt = function(e) {
        if (Mu) throw Error("CSS already injected");
        Du += `
` + e;
      }, pl = function(e, t) {
        Mu || (Mu = !0, e && (e = t.replace(/[\\/]$/, ""), t = Du.replace(/<<<PATH>>>/g, e), Du = "", e = document.createElement("style"), e.id = "blockly-common-style", t = document.createTextNode(t), e.appendChild(t), document.head.insertBefore(e, document.head.firstChild)));
      }, di = function(e) {
        return ip.getSizeInternal(e);
      }, dh = function(e) {
        if (Et(e, "display") !== "none") return gl(e);
        const t = e.style, s = t.display, o = t.visibility, i = t.position;
        t.visibility = "hidden", t.position = "absolute", t.display = "inline";
        const r = e.offsetWidth;
        return e = e.offsetHeight, t.display = s, t.position = i, t.visibility = o, new D(r, e);
      }, gl = function(e) {
        return new D(e.offsetWidth, e.offsetHeight);
      }, Et = function(e, t) {
        return e = window.getComputedStyle(e), e[t] || e.getPropertyValue(t);
      }, ls = function(e) {
        const t = new I(0, 0);
        e = e.getBoundingClientRect();
        var s = document.documentElement;
        return s = new I(window.pageXOffset || s.scrollLeft, window.pageYOffset || s.scrollTop), t.x = e.left + s.x, t.y = e.top + s.y, t;
      }, _l = function() {
        const e = document.body, t = document.documentElement;
        return new I(e.scrollLeft || t.scrollLeft, e.scrollTop || t.scrollTop);
      }, ml = function(e) {
        const t = parseFloat(Et(e, "borderLeftWidth")), s = parseFloat(Et(e, "borderRightWidth")), o = parseFloat(Et(e, "borderTopWidth"));
        return e = parseFloat(Et(e, "borderBottomWidth")), new M(o, e, t, s);
      }, Tl = function(e, t, s) {
        e = El(e, t, s), t.scrollLeft = e.x, t.scrollTop = e.y;
      }, El = function(e, t, s) {
        var o = ls(e), i = ls(t), r = ml(t);
        const u = o.x - i.x - r.left;
        return o = o.y - i.y - r.top, i = gl(e), e = t.clientWidth - i.width, i = t.clientHeight - i.height, r = t.scrollLeft, t = t.scrollTop, s ? (r += u - e / 2, t += o - i / 2) : (r += Math.min(u, Math.max(u - e, 0)), t += Math.min(o, Math.max(o - i, 0))), new I(r, t);
      }, $i = function(e) {
        const t = new I(0, 0);
        var s = e.x && e.getAttribute("x");
        const o = e.y && e.getAttribute("y");
        return s && (t.x = parseInt(s)), o && (t.y = parseInt(o)), (s = (s = e.getAttribute("transform")) && s.match(np)) && (t.x += Number(s[1]), s[3] && (t.y += Number(s[3]))), (e = e.getAttribute("style")) && e.includes("translate") && (e = e.match(rp)) && (t.x += Number(e[1]), e[3] && (t.y += Number(e[3]))), t;
      }, _n = function(e) {
        let t = 0, s = 0;
        for (; e; ) {
          const o = $i(e);
          if (t += o.x, s += o.y, (" " + (e.getAttribute("class") || "") + " ").includes(" injectionDiv ")) break;
          e = e.parentNode;
        }
        return new I(t, s);
      }, fl = function() {
        const e = _l();
        return new M(e.y, document.documentElement.clientHeight + e.y, e.x, document.documentElement.clientWidth + e.x);
      }, bl = function() {
        const e = document.documentElement, t = window;
        return new I(t.pageXOffset || e.scrollLeft, t.pageYOffset || e.scrollTop);
      }, pi = function(e, t) {
        var s = t.x;
        t = t.y;
        const o = e.getInjectionDiv().getBoundingClientRect();
        return s = new I(s - o.left, t - o.top), t = e.getOriginOffsetInPixels(), I.difference(s, t).scale(1 / e.scale);
      }, go = function(e, t) {
        var s = t.scale(e.scale);
        t = s.x, s = s.y;
        const o = e.getInjectionDiv().getBoundingClientRect();
        return e = e.getOriginOffsetInPixels(), new I(t + o.left + e.x, s + o.top + e.y);
      }, $h = function(e) {
        ({ document: Tr = Tr, DOMParser: Bi = Bi, XMLSerializer: xi = xi } = e), mr = new Bi(), Bu = new xi();
      }, n.createElement$$module$build$src$core$utils$xml = function(e) {
        return Tr.createElementNS(lp, e);
      }, n.createTextNode$$module$build$src$core$utils$xml = function(e) {
        return Tr.createTextNode(e);
      }, n.textToDom$$module$build$src$core$utils$xml = function(e) {
        let t = mr.parseFromString(e, "text/xml");
        if (t && t.documentElement && !t.getElementsByTagName("parsererror").length) return t.documentElement;
        if ((t = mr.parseFromString(e, "text/html")) && t.body.firstChild && t.body.firstChild.nodeName.toLowerCase() === "xml") return t.body.firstChild;
        throw Error(`DOMParser was unable to parse: ${e}`);
      }, _o = function(e) {
        return ph(Bu.serializeToString(e));
      }, ph = function(e) {
        return e.replace(cm, (t) => `&#${t.charCodeAt(0)};`);
      }, mn = function(e) {
        return e ? ((e instanceof Element || typeof e == "string") && (e = Sl(e), e = mh(e)), gh(e), e) : null;
      }, gh = function(e) {
        const t = e.kind;
        if (e = e.contents, t && t !== cp && t !== xu) throw Error("Invalid toolbox kind " + t + ". Please supply either " + cp + " or " + xu);
        if (!e) throw Error("Toolbox must have a contents attribute.");
      }, gi = function(e) {
        return e ? e.contents ? e.contents : Array.isArray(e) && e.length > 0 && !e[0].nodeType ? e : fn(e) : [];
      }, Tn = function(e) {
        return up.hasCategoriesInternal(e);
      }, _h = function(e) {
        if (!e) return !1;
        const t = e.kind;
        return t ? t === xu : !!e.contents.filter((s) => s.kind.toUpperCase() === "CATEGORY").length;
      }, En = function(e) {
        return e && e.contents ? !!e.contents.filter(function(t) {
          return t.kind.toUpperCase() === "CATEGORY";
        }).length : !1;
      }, mh = function(e) {
        const t = { contents: fn(e) };
        return e instanceof Node && Il(e, t), t;
      }, fn = function(e) {
        const t = [];
        let s = e.childNodes;
        s || (s = e);
        for (let o = 0, i; i = s[o]; o++) {
          if (!i.tagName) continue;
          e = {};
          const r = i.tagName.toUpperCase();
          e.kind = r, r === "BLOCK" ? e.blockxml = i : i.childNodes && i.childNodes.length > 0 && (e.contents = fn(i)), Il(i, e), t.push(e);
        }
        return t;
      }, Il = function(e, t) {
        for (let s = 0; s < e.attributes.length; s++) {
          const o = e.attributes[s];
          o.nodeName.includes("css-") ? (t.cssconfig = t.cssconfig || {}, t.cssconfig[o.nodeName.replace("css-", "")] = o.value) : t[o.nodeName] = o.value;
        }
      }, Sl = function(e) {
        let t = null;
        if (e) if (typeof e == "string") {
          if (t = n.textToDom$$module$build$src$core$utils$xml(e), t.nodeName.toLowerCase() !== "xml") throw TypeError("Toolbox should be an <xml> document.");
        } else e instanceof Element && (t = e);
        return t;
      }, bn = function(e, t, s, o, i, r) {
        const u = r.scrollbar && r.scrollbar.canScrollVertically();
        return e.horizontal === Mo.LEFT ? (s = i.absoluteMetrics.left + s, u && r.RTL && (s += ue.scrollbarThickness)) : (s = i.absoluteMetrics.left + i.viewMetrics.width - t.width - s, u && !r.RTL && (s -= ue.scrollbarThickness)), e.vertical === Yt.TOP ? e = i.absoluteMetrics.top + o : (e = i.absoluteMetrics.top + i.viewMetrics.height - t.height - o, r.scrollbar && r.scrollbar.canScrollHorizontally() && (e -= ue.scrollbarThickness)), new M(e, e + t.height, s, s + t.width);
      }, In = function(e, t) {
        return { horizontal: t.toolboxMetrics.position === P.LEFT || e.horizontalLayout && !e.RTL ? Mo.RIGHT : Mo.LEFT, vertical: t.toolboxMetrics.position === P.BOTTOM ? Yt.TOP : Yt.BOTTOM };
      }, Sn = function(e, t, s, o) {
        const i = e.left, r = e.right - e.left, u = e.bottom - e.top;
        for (let h = 0; h < o.length; h++) {
          const E = o[h];
          e.intersects(E) && (e = s === _s.UP ? E.top - u - t : E.bottom + t, e = new M(e, e + u, i, i + r), h = -1);
        }
        return e;
      }, _i = function(e, t) {
        c(f.SERIALIZER, e, t);
      }, Th = function(e) {
        Oe(f.SERIALIZER, e);
      }, mo = function(e, { addCoordinates: t = !1, saveIds: s = !0 } = {}) {
        const o = e.workspace, i = /* @__PURE__ */ Object.create(null);
        return i.height = e.getSize().height, i.width = e.getSize().width, s && (i.id = e.id), t && (t = e.getRelativeToSurfaceXY(), i.x = o.RTL ? o.getWidth() - t.x : t.x, i.y = t.y), e.getText() && (i.text = e.getText()), e.isCollapsed() && (i.collapsed = !0), e.isOwnEditable() || (i.editable = !1), e.isOwnMovable() || (i.movable = !1), e.isOwnDeletable() || (i.deletable = !1), i;
      }, mi = function(e, t, { recordUndo: s = !1 } = {}) {
        const o = Ce();
        if (n.setRecordUndo$$module$build$src$core$events$utils(s), s = t.newComment(e.id), e.text !== void 0 && s.setText(e.text), e.x !== void 0 || e.y !== void 0) {
          const r = s.getRelativeToSurfaceXY();
          let u, h = (u = e.x) != null ? u : r.x;
          h = t.RTL ? t.getWidth() - h : h;
          var i;
          t = (i = e.y) != null ? i : r.y, s.moveTo(new I(h, t));
        }
        if (e.width !== void 0 || e.height) {
          i = s.getSize();
          let r, u;
          s.setSize(new D((r = e.width) != null ? r : i.width, (u = e.height) != null ? u : i.height));
        }
        return e.collapsed !== void 0 && s.setCollapsed(e.collapsed), e.editable !== void 0 && s.setEditable(e.editable), e.movable !== void 0 && s.setMovable(e.movable), e.deletable !== void 0 && s.setDeletable(e.deletable), n.setRecordUndo$$module$build$src$core$events$utils(o), s;
      }, Rn = function(e, t) {
        c(f.PASTER, e, t);
      }, Eh = function(e) {
        Oe(f.PASTER, e);
      }, fh = function(e) {
        const t = e.workspace, s = e.getRelativeToSurfaceXY(), o = new I(0, 0), i = t.getTopComments(!1).filter((r) => r.id !== e.id).map((r) => r.getRelativeToSurfaceXY());
        for (; bh(I.sum(s, o), i); ) o.translate(t.RTL ? -30 : 30, 30);
        e.moveTo(I.sum(
          s,
          o
        ));
      }, bh = function(e, t) {
        return t.some((s) => Math.abs(s.x - e.x) <= 1 && Math.abs(s.y - e.y) <= 1);
      }, ft = function(e, t) {
        e.setAttribute(hm, t);
      }, ie = function(e, t, s) {
        Array.isArray(s) && (s = s.join(" ")), e.setAttribute(am + t, `${s}`);
      }, Ti = function(e) {
        return e && typeof e.saveState == "function" && typeof e.loadState == "function";
      }, Rl = function(e) {
        return Ol(e), Ih() ? (On(), Promise.resolve()) : (Do || (Do = new Promise((t) => {
          Xu = t, mp = window.requestAnimationFrame(() => {
            On(), t();
          });
        })), Do);
      }, bt = function() {
        return Do || Promise.resolve();
      }, cs = function(e) {
        e || window.cancelAnimationFrame(mp), On(e), !e && Xu && Xu();
      }, Ih = function() {
        return H$;
      }, Ol = function(e) {
        Vu.add(e), Wu.set(e, n.getGroup$$module$build$src$core$events$utils());
        const t = e.getParent();
        t ? Ol(t) : Sr.add(e);
      }, On = function(e) {
        const t = e ? /* @__PURE__ */ new Set([e]) : new Set([...Sr].map((r) => r.workspace)), s = [...Sr].filter(Sh).filter((r) => t.has(r.workspace));
        for (var o of s) yl(o);
        for (const r of t) r.resizeContents();
        for (var i of s) o = i.getRelativeToSurfaceXY(), i.updateComponentLocations(o);
        for (const r of s) i = n.getGroup$$module$build$src$core$events$utils(), (o = Wu.get(r)) && n.setGroup$$module$build$src$core$events$utils(o), r.bumpNeighbours(), n.setGroup$$module$build$src$core$events$utils(i);
        for (const r of s) Cl(r);
        e || (Do = null);
      }, Cl = function(e) {
        Sr.delete(e), Vu.delete(e), Wu.delete(e);
        for (const t of e.getChildren(!1)) Cl(t);
      }, Sh = function(e) {
        return !e.isDisposed() && !e.getParent();
      }, yl = function(e) {
        if (Vu.has(e) && e.initialized) {
          for (const t of e.getChildren(!1)) yl(t);
          e.renderEfficiently();
        }
      }, Ei = function(e, t) {
        Ip(e, t);
      }, Rh = function(e = bp) {
        Ip = e;
      }, Cn = function(e, t) {
        Rp(e, t);
      }, Oh = function(e = Sp) {
        Rp = e;
      }, yn = function(e, t, s) {
        Cp(e, t, s);
      }, Ch = function(e = Op) {
        Cp = e;
      }, yh = function(e, t) {
        vp(e, t);
      }, vh = function(e = yp) {
        vp = e;
      }, To = function(e) {
        return e && typeof e.getProcedureDef == "function";
      }, Lh = function(e) {
        return e && typeof e.getProcedureCall == "function" && typeof e.renameProcedure == "function";
      }, vl = function(e) {
        return e.getVariableModel !== void 0;
      }, fe = function(e, t, s, o) {
        e = e + " was deprecated in " + t + " and will be deleted in " + s + ".", o && (e += `
Use ` + o + " instead."), Lp.has(e) || (Lp.add(e), console.warn(e));
      }, n.allUsedVarModels$$module$build$src$core$variables = function(e) {
        e = e.getAllBlocks(!1);
        const t = /* @__PURE__ */ new Set();
        for (let s = 0; s < e.length; s++) {
          const o = e[s].getVarModels();
          if (o) for (let i = 0; i < o.length; i++) {
            const r = o[i];
            r.getId() && t.add(r);
          }
        }
        return Array.from(t.values());
      }, n.allDeveloperVariables$$module$build$src$core$variables = function(e) {
        e = e.getAllBlocks(!1);
        const t = /* @__PURE__ */ new Set();
        for (let o = 0, i; i = e[o]; o++) {
          var s = i.getDeveloperVariables;
          if (s) {
            s = s();
            for (let r = 0; r < s.length; r++) t.add(s[r]);
          }
        }
        return Array.from(t.values());
      }, vn = function(e) {
        return Ll(e, !1);
      }, Ll = function(e, t = !0) {
        return q.variables_set || q.variables_get || console.warn("There are no variable blocks, but there is a variable category."), t ? (fe("The XML return value of Blockly.Variables.flyoutCategory()", "v12", "v13", "the same method, but handle a return type of FlyoutItemInfo[] (JSON) instead."), Ah(e)) : (e.registerButtonCallback("CREATE_VARIABLE", function(s) {
          vs(s.getTargetWorkspace());
        }), [{ kind: "button", text: "%{BKY_NEW_VARIABLE}", callbackkey: "CREATE_VARIABLE" }, ...An(e, e.getVariableMap().getVariablesOfType(""), !0)]);
      }, Ln = function(e) {
        return { VAR: { name: e.getName(), type: e.getType() } };
      }, An = function(e, t, s, o = "variables_get", i = "variables_set") {
        s && (s = q.math_change), e = [];
        const r = t.slice(-1)[0];
        return r && (q[i] && e.push({ kind: "block", type: i, gap: s ? 8 : 24, fields: Ln(r) }), s && e.push({
          kind: "block",
          type: "math_change",
          gap: q[o] ? 20 : 8,
          fields: Ln(r),
          inputs: { DELTA: { shadow: { type: "math_number", fields: { NUM: 1 } } } }
        })), q[o] && e.push(...t.sort(Eo).map((u) => ({ kind: "block", type: o, gap: 8, fields: Ln(u) }))), e;
      }, Ah = function(e) {
        let t = [];
        const s = document.createElement("button");
        return s.setAttribute("text", "%{BKY_NEW_VARIABLE}"), s.setAttribute("callbackKey", "CREATE_VARIABLE"), e.registerButtonCallback("CREATE_VARIABLE", function(o) {
          vs(o.getTargetWorkspace());
        }), t.push(s), e = Al(e), t = t.concat(e);
      }, Al = function(e) {
        e = e.getVariableMap().getVariablesOfType("");
        const t = [];
        if (e.length > 0) {
          var s = e[e.length - 1];
          if (q.variables_set) {
            var o = n.createElement$$module$build$src$core$utils$xml("block");
            o.setAttribute("type", "variables_set"), o.setAttribute("gap", q.math_change ? "8" : "24"), o.appendChild(Ls(s)), t.push(o);
          }
          if (q.math_change && (o = n.createElement$$module$build$src$core$utils$xml("block"), o.setAttribute("type", "math_change"), o.setAttribute("gap", q.variables_get ? "20" : "8"), o.appendChild(Ls(s)), s = n.textToDom$$module$build$src$core$utils$xml('<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value>'), o.appendChild(s), t.push(o)), q.variables_get) {
            e.sort(Eo);
            for (let i = 0, r; r = e[i]; i++) s = n.createElement$$module$build$src$core$utils$xml("block"), s.setAttribute("type", "variables_get"), s.setAttribute("gap", "8"), s.appendChild(Ls(r)), t.push(s);
          }
        }
        return t;
      }, kl = function(e) {
        return kp.generateUniqueNameInternal(e);
      }, kh = function(e) {
        return kn(Ku.charAt(0), e.getVariableMap().getAllVariables().map((t) => t.getName()));
      }, kn = function(e, t) {
        if (!t.length) return e;
        const s = Ku;
        let o = "", i = s.indexOf(e);
        for (; ; ) {
          let r = !1;
          for (let u = 0; u < t.length; u++) if (t[u].toLowerCase() === e) {
            r = !0;
            break;
          }
          if (!r) break;
          i++, i === s.length && (i = 0, o = `${Number(o) + 1}`), e = s.charAt(i) + o;
        }
        return e;
      }, vs = function(e, t, s) {
        function o(r) {
          Nn(n.Msg$$module$build$src$core$msg.NEW_VARIABLE_TITLE, r, function(u) {
            if (u) {
              var h = Nl(u, e);
              if (h) {
                if (h.getType() === i) var E = n.Msg$$module$build$src$core$msg.VARIABLE_ALREADY_EXISTS.replace("%1", h.getName());
                else E = n.Msg$$module$build$src$core$msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE, E = E.replace("%1", h.getName()).replace(
                  "%2",
                  h.getType()
                );
                Ei(E, function() {
                  o(u);
                });
              } else e.getVariableMap().createVariable(u, i), t && t(u);
            } else t && t(null);
          });
        }
        const i = s || "";
        o("");
      }, n.renameVariable$$module$build$src$core$variables = function(e, t, s) {
        function o(i) {
          const r = n.Msg$$module$build$src$core$msg.RENAME_VARIABLE_TITLE.replace("%1", t.getName());
          Nn(r, i, function(u) {
            if (u) {
              var h = Nh(u, t.getType(), e), E = wl(t.getName(), u, e);
              if (h || E) {
                var y = "";
                h ? y = n.Msg$$module$build$src$core$msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace(
                  "%1",
                  h.getName()
                ).replace("%2", h.getType()) : E && (y = n.Msg$$module$build$src$core$msg.VARIABLE_ALREADY_EXISTS_FOR_A_PARAMETER.replace("%1", u).replace("%2", E)), Ei(y, function() {
                  o(u);
                });
              } else e.getVariableMap().renameVariable(t, u), s && s(u);
            } else s && s(null);
          });
        }
        o("");
      }, Nn = function(e, t, s) {
        yn(e, t, function(o) {
          o && (o = o.replace(/[\s\xa0]+/g, " ").trim(), o === n.Msg$$module$build$src$core$msg.RENAME_VARIABLE || o === n.Msg$$module$build$src$core$msg.NEW_VARIABLE) && (o = null), s(o);
        });
      }, Nh = function(e, t, s) {
        s = s.getVariableMap().getAllVariables(), e = e.toLowerCase();
        for (let o = 0, i; i = s[o]; o++) if (i.getName().toLowerCase() === e && i.getType() !== t) return i;
        return null;
      }, Nl = function(e, t) {
        t = t.getVariableMap().getAllVariables(), e = e.toLowerCase();
        for (let s = 0, o; o = t[s]; s++) if (o.getName().toLowerCase() === e) return o;
        return null;
      }, wl = function(e, t, s) {
        return s.getProcedureMap().getProcedures().length ? wh(e, t, s) : Mh(e, t, s);
      }, wh = function(e, t, s) {
        e = e.toLowerCase(), t = t.toLowerCase(), s = s.getProcedureMap().getProcedures();
        for (const i of s) {
          var o = i.getParameters().filter(vl).map((r) => r.getVariableModel().getName());
          if (o && (s = o.some((r) => r.toLowerCase() === e), o = o.some((r) => r.toLowerCase() === t), s && o)) return i.getName();
        }
        return null;
      }, Mh = function(e, t, s) {
        e = e.toLowerCase(), t = t.toLowerCase(), s = s.getAllBlocks(!1);
        for (const i of s) {
          if (!To(i)) continue;
          s = i.getProcedureDef();
          var o = s[1];
          const r = o.some((u) => u.toLowerCase() === e);
          if (o = o.some((u) => u.toLowerCase() === t), r && o) return s[0];
        }
        return null;
      }, Ls = function(e) {
        const t = n.createElement$$module$build$src$core$utils$xml("field");
        return t.setAttribute("name", "VAR"), t.setAttribute("id", e.getId()), t.setAttribute("variabletype", e.getType()), e = n.createTextNode$$module$build$src$core$utils$xml(e.getName()), t.appendChild(e), t;
      }, n.getOrCreateVariablePackage$$module$build$src$core$variables = function(e, t, s, o) {
        let i = n.getVariable$$module$build$src$core$variables(e, t, s, o);
        return i || (i = Dh(e, t, s, o)), i;
      }, n.getVariable$$module$build$src$core$variables = function(e, t, s, o) {
        const i = e.getPotentialVariableMap();
        let r = null;
        if (t && (r = e.getVariableMap().getVariableById(t), !r && i && (r = i.getVariableById(t)), r)) return r;
        if (s) {
          if (o === void 0) throw Error("Tried to look up a variable by name without a type");
          r = e.getVariableMap().getVariable(s, o), !r && i && (r = i.getVariable(s, o));
        }
        return r;
      }, Dh = function(e, t, s, o) {
        const i = e.getVariableMap(), r = e.getPotentialVariableMap();
        return s || (s = kl(e.isFlyout ? e.targetWorkspace : e)), r ? r.createVariable(s, o, t ?? void 0) : i.createVariable(s, o, t);
      }, wn = function(e, t) {
        e = e.getVariableMap().getAllVariables();
        const s = [];
        if (t.length !== e.length) for (let o = 0; o < e.length; o++) {
          const i = e[o];
          t.includes(i) || s.push(i);
        }
        return s;
      }, Eo = function(e, t) {
        return e.getName().localeCompare(t.getName(), void 0, { sensitivity: "base" });
      }, fo = function(e, t) {
        const s = [];
        e = e.getAllBlocks(!1);
        for (let o = 0; o < e.length; o++) {
          const i = e[o].getVarModels();
          if (i) for (let r = 0; r < i.length; r++) i[r].getId() === t && s.push(e[o]);
        }
        return s;
      }, n.deleteVariable$$module$build$src$core$variables = function(e, t, s) {
        var o = t.getName();
        const i = fo(e, t.getId());
        for (let r = i.length - 1; r >= 0; r--) {
          const u = i[r];
          if (u.type === "procedures_defnoreturn" || u.type === "procedures_defreturn") {
            s = String(u.getFieldValue("NAME")), o = n.Msg$$module$build$src$core$msg.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", o).replace("%2", s), Ei(o);
            return;
          }
          u === s && i.splice(r, 1);
        }
        s && i.length || i.length > 1 ? (o = n.Msg$$module$build$src$core$msg.DELETE_VARIABLE_CONFIRMATION.replace("%1", String(i.length + (s && !s.workspace.isFlyout ? 1 : 0))).replace("%2", o), Cn(o, (r) => {
          r && t && e.getVariableMap().deleteVariable(t);
        })) : e.getVariableMap().deleteVariable(t);
      }, tt = function(e, { addCoordinates: t = !1, addInputBlocks: s = !0, addNextBlocks: o = !0, doFullSerialization: i = !0, saveIds: r = !0 } = {}) {
        if (e.isInsertionMarker()) return null;
        const u = { type: e.type, id: r ? e.id : void 0 };
        return t && Bh(e, u), Ph(e, u), xh(e, u, i), Fh(e, u, i), Uh(
          e,
          u,
          i
        ), s && Hh(e, u, i, r), o && Gh(e, u, i, r), u;
      }, Ph = function(e, t) {
        e.isCollapsed() && (t.collapsed = !0), e.isEnabled() || (t.disabledReasons = Array.from(e.getDisabledReasons())), e.isOwnDeletable() || (t.deletable = !1), e.isOwnMovable() || (t.movable = !1), e.isOwnEditable() || (t.editable = !1), e.inputsInline !== void 0 && e.inputsInline !== e.inputsInlineDefault && (t.inline = e.inputsInline), e.data && (t.data = e.data);
      }, Bh = function(e, t) {
        const s = e.workspace;
        e = e.getRelativeToSurfaceXY(), t.x = Math.round(s.RTL ? s.getWidth() - e.x : e.x), t.y = Math.round(e.y);
      }, xh = function(e, t, s) {
        e.saveExtraState ? (e = e.saveExtraState(s), e !== null && (t.extraState = e)) : e.mutationToDom && (e = e.mutationToDom(), e !== null && (t.extraState = St(e).replace(' xmlns="https://developers.google.com/blockly/xml"', "")));
      }, Fh = function(e, t, s) {
        const o = /* @__PURE__ */ Object.create(null);
        for (const i of e.getIcons()) Ti(i) && (e = i.saveState(s)) && (o[i.getType().toString()] = e);
        Object.keys(o).length && (t.icons = o);
      }, Uh = function(e, t, s) {
        const o = /* @__PURE__ */ Object.create(null);
        for (const i of e.getFields()) i.isSerializable() && (o[i.name] = i.saveState(s));
        Object.keys(o).length && (t.fields = o);
      }, Hh = function(e, t, s, o) {
        const i = /* @__PURE__ */ Object.create(null);
        for (let r = 0; r < e.inputList.length; r++) {
          const u = e.inputList[r];
          if (!u.connection) continue;
          const h = Ml(u.connection, s, o);
          h && (i[u.name] = h);
        }
        Object.keys(i).length && (t.inputs = i);
      }, Gh = function(e, t, s, o) {
        e.nextConnection && (e = Ml(e.nextConnection, s, o)) && (t.next = e);
      }, Ml = function(e, t, s) {
        const o = e.getShadowState(!0);
        if (e = e.targetBlock(), !o && !e) return null;
        const i = /* @__PURE__ */ Object.create(null);
        return o && (i.shadow = o), e && !e.isShadow() && (i.block = tt(e, { doFullSerialization: t, saveIds: s })), i;
      }, As = function(e, t, { recordUndo: s = !1 } = {}) {
        return e = ks(e, t, { recordUndo: s }), t.rendered && cs(), e;
      }, ks = function(e, t, { parentConnection: s, isShadow: o = !1, recordUndo: i = !1 } = {}) {
        const r = Ce();
        n.setRecordUndo$$module$build$src$core$events$utils(i), (i = n.getGroup$$module$build$src$core$events$utils()) || n.setGroup$$module$build$src$core$events$utils(!0), n.disable$$module$build$src$core$events$utils();
        const u = t.getVariableMap().getAllVariables();
        let h;
        try {
          h = Dl(
            e,
            t,
            { parentConnection: s, isShadow: o }
          );
        } finally {
          n.enable$$module$build$src$core$events$utils();
        }
        if (Vh(t, u), j() && k(new (L(m.BLOCK_CREATE))(h)), n.setGroup$$module$build$src$core$events$utils(i), n.setRecordUndo$$module$build$src$core$events$utils(r), t.rendered) {
          const E = h;
          setTimeout(() => {
            E.disposed || E.setConnectionTracking(!0);
          }, 1);
        }
        return h;
      }, Dl = function(e, t, { parentConnection: s, isShadow: o = !1 } = {}) {
        if (!e.type) throw new Np(e);
        const i = t.newBlock(e.type, e.id);
        return i.setShadow(o), Wh(i, e), Xh(i, e), zh(i, e), Yh(
          s,
          i,
          e
        ), Kh(i, e), jh(i, e), Jh(i, e), qh(i, e), Zh(i, t.rendered), i;
      }, Vh = function(e, t) {
        if (j()) for (e = wn(e, t), t = 0; t < e.length; t++) {
          const s = e[t];
          k(new (L(m.VAR_CREATE))(s));
        }
      }, Wh = function(e, t) {
        let s = t.x === void 0 ? 0 : t.x;
        t = t.y === void 0 ? 0 : t.y;
        const o = e.workspace;
        s = o.RTL ? o.getWidth() - s : s, e.moveBy(s, t);
      }, Xh = function(e, t) {
        if (t.collapsed && e.setCollapsed(!0), t.deletable === !1 && e.setDeletable(!1), t.movable === !1 && e.setMovable(!1), t.editable === !1 && e.setEditable(!1), t.enabled === !1 && e.setDisabledReason(!0, ot), Array.isArray(t.disabledReasons)) for (const s of t.disabledReasons) e.setDisabledReason(!0, s);
        t.inline !== void 0 && e.setInputsInline(t.inline), t.data !== void 0 && (e.data = t.data);
      }, zh = function(e, t) {
        t.extraState && (e.loadExtraState ? e.loadExtraState(t.extraState) : e.domToMutation && e.domToMutation(n.textToDom$$module$build$src$core$utils$xml(t.extraState)));
      }, Yh = function(e, t, s) {
        if (e) {
          if (e.getSourceBlock().isShadow() && !t.isShadow()) throw new Mp(s);
          if (e.type === n.inputTypes$$module$build$src$core$inputs$input_types.VALUE) {
            var o = t.outputConnection;
            if (!o) throw new Gi("output", t, s);
          } else if (o = t.previousConnection, !o) throw new Gi(
            "previous",
            t,
            s
          );
          if (!e.connect(o)) {
            const i = t.workspace.connectionChecker;
            throw new wp(i.getErrorMessage(i.canConnectWithReason(o, e, !1), o, e), e.type === n.inputTypes$$module$build$src$core$inputs$input_types.VALUE ? "output connection" : "previous connection", t, s);
          }
        }
      }, Kh = function(e, t) {
        if (t.icons) {
          var s = Object.keys(t.icons);
          for (const i of s) {
            s = t.icons[i];
            var o = e.getIcon(i);
            if (!o) {
              if (o = He(f.ICON, i, !1), !o) throw new Dp(i, e, t);
              o = new o(e), e.addIcon(o);
            }
            Ti(o) && o.loadState(s);
          }
        }
      }, jh = function(e, t) {
        if (t.fields) {
          var s = Object.keys(t.fields);
          for (let o = 0; o < s.length; o++) {
            const i = s[o], r = t.fields[i], u = e.getField(i);
            u ? u.loadState(r) : console.warn(`Ignoring non-existant field ${i} in block ${e.type}`);
          }
        }
      }, Jh = function(e, t) {
        if (t.inputs) {
          var s = Object.keys(t.inputs);
          for (let o = 0; o < s.length; o++) {
            const i = s[o], r = e.getInput(i);
            if (!r || !r.connection) throw new Gi(i, e, t);
            Pl(r.connection, t.inputs[i]);
          }
        }
      }, qh = function(e, t) {
        if (t.next) {
          if (!e.nextConnection) throw new Gi("next", e, t);
          Pl(e.nextConnection, t.next);
        }
      }, Pl = function(e, t) {
        t.shadow && e.setShadowState(t.shadow), t.block && Dl(t.block, e.getSourceBlock().workspace, { parentConnection: e });
      }, Zh = function(e, t) {
        if (t) {
          e.setConnectionTracking(!1), e.initSvg(), e.queueRender();
          for (const s of e.getIcons()) s.onLocationChange(e.getRelativeToSurfaceXY());
        } else e.initModel();
      }, us = function(e) {
        return typeof e.bubbleIsVisible == "function" && typeof e.setBubbleVisible == "function" && typeof e.getBubble == "function";
      }, Mn = function(e) {
        return e * Math.PI / 180;
      }, Qh = function(e) {
        return e * 180 / Math.PI;
      }, bo = function(e, t, s) {
        if (s < e) {
          const o = s;
          s = e, e = o;
        }
        return Math.max(e, Math.min(t, s));
      }, Dn = function() {
        document.querySelector(".blocklyDropDownDiv") || (re = document.createElement("div"), re.className = "blocklyDropDownDiv", re.tabIndex = -1, (J() || document.body).appendChild(re), Wi = document.createElement("div"), Wi.className = "blocklyDropDownContent", re.appendChild(Wi), Lr = w(Wi, "keydown", null, hi), Xs = document.createElement("div"), Xs.className = "blocklyDropDownArrow", re.appendChild(Xs), re.style.opacity = "0", re.style.transition = "transform " + yr + "s, opacity " + yr + "s");
      }, Bl = function(e) {
        qu = e;
      }, xl = function() {
        return ms;
      }, Pn = function() {
        return Wi;
      }, Bn = function() {
        Lr && (H(Lr), Lr = null), re.remove(), Dn();
      }, Fl = function(e, t) {
        re.style.backgroundColor = e, re.style.borderColor = t;
      }, ed = function(e, t, s, o, i = !0) {
        return Vl(Hl(t), e, i, s, o);
      }, Ul = function(e, t, s, o = !0) {
        return Hp = !0, Vl(Gl(e), e, o, t, s);
      }, Hl = function(e) {
        var t = e.getSvgRoot();
        const s = e.workspace.scale, o = e.height * s;
        return e = e.width * s, t = ls(t), new M(t.y, t.y + o, t.x, t.x + e);
      }, Gl = function(e) {
        return e = e.getScaledBBox(), new M(e.top, e.bottom, e.left, e.right);
      }, Vl = function(e, t, s, o, i) {
        const r = e.left + (e.right - e.left) / 2, u = e.bottom;
        e = e.top, i && (e += i), i = t.getSourceBlock();
        let h = i.workspace;
        for (; h.options.parentWorkspace; ) h = h.options.parentWorkspace;
        return Bl(h.getParentSvg().parentNode), Wl(t, i.RTL, r, u, r, e, s, o);
      }, Wl = function(e, t, s, o, i, r, u, h) {
        return ms = e, Ws = h || null, re.style.direction = t ? "rtl" : "ltr", e = l(), Fp = e.getRenderer().getClassName(), Up = e.getTheme().getClassName(), R(
          re,
          Fp
        ), R(re, Up), s = Kl(s, o, i, r), u && (vr = n.getFocusManager$$module$build$src$core$focus_manager().takeEphemeralFocus(re)), s;
      }, Xl = function(e, t, s, o) {
        return e = fi(e, s.left, s.right, o.width), { initialX: e.divX, initialY: t, finalX: e.divX, finalY: t + ju, arrowX: e.arrowX, arrowY: -9, arrowAtTop: !0, arrowVisible: !0 };
      }, zl = function(e, t, s, o) {
        return e = fi(e, s.left, s.right, o.width), { initialX: e.divX, initialY: t - o.height, finalX: e.divX, finalY: t - o.height - ju, arrowX: e.arrowX, arrowY: o.height - Bp * 2 - Cr / 2, arrowAtTop: !1, arrowVisible: !0 };
      }, td = function(e, t, s) {
        return e = fi(e, t.left, t.right, s.width), { initialX: e.divX, initialY: 0, finalX: e.divX, finalY: 0, arrowAtTop: null, arrowX: null, arrowY: null, arrowVisible: !1 };
      }, fi = function(e, t, s, o) {
        return t = bo(t, e - o / 2, s - o), e = e - Cr / 2 - t, s = xp, e = bo(s, e, o - s - Cr), { arrowX: e, divX: t };
      }, Yl = function() {
        return !!ms;
      }, xn = function(e, t) {
        return ms === e ? (t ? It() : Fn(), !0) : !1;
      }, Fn = function() {
        re.style.transform = "translate(0, 0)", re.style.opacity = "0", Ju = setTimeout(function() {
          It();
        }, yr * 1e3), Ws && (Ws(), Ws = null);
      }, It = function() {
        Yl() && (Ju && clearTimeout(Ju), Ws && (Ws(), Ws = null), Bn(), ms = null, l().markFocused(), vr && (vr(), vr = null));
      }, Kl = function(e, t, s, o) {
        e = Zu.getPositionMetrics(e, t, s, o), e.arrowVisible ? (t = e.arrowX, s = e.arrowY, o = e.arrowAtTop ? 45 : 225, Xs.style.display = "", Xs.style.transform = `translate(${t}px, ${s}px) rotate(${o}deg)`, Xs.setAttribute("class", "blocklyDropDownArrow")) : Xs.style.display = "none", t = Math.floor(e.initialX), s = Math.floor(e.initialY), o = Math.floor(e.finalX);
        const i = Math.floor(e.finalY);
        return re.style.left = t + "px", re.style.top = s + "px", re.style.display = "block", re.style.opacity = "1", re.style.transform = "translate(" + (o - t) + "px," + (i - s) + "px)", !!e.arrowAtTop;
      }, jl = function() {
        if (ms) {
          var e = ms.getSourceBlock();
          e = Hp ? Gl(ms) : Hl(e);
          const t = e.left + (e.right - e.left) / 2;
          Kl(t, e.bottom, t, e.top);
        } else Fn();
      }, bi = function(e) {
        return e.length ? e.reduce(function(t, s) {
          return t.length < s.length ? t : s;
        }).length : 0;
      }, Jl = function(e, t) {
        if (!e.length) return 0;
        if (e.length === 1) return e[0].length;
        let s = 0;
        t = t || bi(e);
        let o;
        for (o = 0; o < t; o++) {
          for (var i = e[0][o], r = 1; r < e.length; r++) if (i !== e[r][o]) return s;
          i === " " && (s = o + 1);
        }
        for (i = 1; i < e.length; i++) if ((r = e[i][o]) && r !== " ") return s;
        return t;
      }, ql = function(e, t) {
        if (!e.length) return 0;
        if (e.length === 1) return e[0].length;
        let s = 0;
        t = t || bi(e);
        let o;
        for (o = 0; o < t; o++) {
          for (var i = e[0].substr(-o - 1, 1), r = 1; r < e.length; r++) if (i !== e[r].substr(-o - 1, 1)) return s;
          i === " " && (s = o + 1);
        }
        for (i = 1; i < e.length; i++) if ((r = e[i].charAt(e[i].length - o - 1)) && r !== " ") return s;
        return t;
      }, n.wrap$$module$build$src$core$utils$string = function(e, t) {
        e = e.split(`
`);
        for (let s = 0; s < e.length; s++) e[s] = sd(e[s], t);
        return e.join(`
`);
      }, sd = function(e, t) {
        if (e.length <= t) return e;
        const s = e.trim().split(/\s+/);
        for (var o = 0; o < s.length; o++) s[o].length > t && (t = s[o].length);
        var i = -1 / 0;
        let r, u = 1;
        do {
          o = i, r = e, e = [], i = s.length / u;
          let h = 1;
          for (let E = 0; E < s.length - 1; E++) h < (E + 1.5) / i ? (h++, e[E] = !0) : e[E] = !1;
          e = Zl(s, e, t), i = Un(s, e, t), e = od(s, e), u++;
        } while (i > o);
        return r;
      }, Un = function(e, t, s) {
        const o = [0], i = [];
        for (var r = 0; r < e.length; r++) o[o.length - 1] += e[r].length, t[r] === !0 ? (o.push(0), i.push(e[r].charAt(e[r].length - 1))) : t[r] === !1 && o[o.length - 1]++;
        for (e = Math.max(...o), t = 0, r = 0; r < o.length; r++) t -= Math.pow(Math.abs(s - o[r]), 1.5) * 2, t -= Math.pow(e - o[r], 1.5), ".?!".includes(i[r]) ? t += s / 3 : ",;)]}".includes(i[r]) && (t += s / 4);
        return o.length > 1 && o[o.length - 1] <= o[o.length - 2] && (t += 0.5), t;
      }, Zl = function(e, t, s) {
        let o = Un(e, t, s), i;
        for (let r = 0; r < t.length - 1; r++) {
          if (t[r] === t[r + 1]) continue;
          const u = [].concat(t);
          u[r] = !u[r], u[r + 1] = !u[r + 1];
          const h = Un(e, u, s);
          h > o && (o = h, i = u);
        }
        return i ? Zl(e, i, s) : t;
      }, od = function(e, t) {
        const s = [];
        for (let o = 0; o < e.length; o++) s.push(e[o]), t[o] !== void 0 && s.push(t[o] ? `
` : " ");
        return s.join("");
      }, n.isNumber$$module$build$src$core$utils$string = function(e) {
        return /^\s*-?\d+(\.\d+)?\s*$/.test(e);
      }, id = function(e) {
        Ar = e;
      }, nd = function() {
        return Ar;
      }, rd = function() {
        return Xi;
      }, ld = function() {
        return pe;
      }, Io = function(e) {
        if (e = Ql(e)) {
          for (e = e.tooltip; typeof e == "function"; ) e = e();
          if (typeof e != "string") throw Error("Tooltip function must return a string.");
          return e;
        }
        return "";
      }, Ql = function(e) {
        for (; e && e.tooltip; ) {
          if (typeof e.tooltip == "string" || typeof e.tooltip == "function") return e;
          e = e.tooltip;
        }
        return null;
      }, ec = function() {
        document.querySelector(".blocklyTooltipDiv") || (pe = document.createElement("div"), pe.className = "blocklyTooltipDiv", (J() || document.body).appendChild(pe));
      }, Ii = function(e) {
        e.mouseOverWrapper_ = De(e, "pointerover", null, cd), e.mouseOutWrapper_ = De(e, "pointerout", null, ud), e.addEventListener("pointermove", sc, !1);
      }, tc = function(e) {
        e && (H(e.mouseOverWrapper_), H(e.mouseOutWrapper_), e.removeEventListener("pointermove", sc));
      }, cd = function(e) {
        xo || (e = Ql(e.currentTarget), nt !== e && (Ut(), zi = null, nt = e), clearTimeout(Vp));
      }, ud = function(e) {
        xo || (Vp = setTimeout(function() {
          zi = nt = null, Ut();
        }, 1), clearTimeout(zs), zs = 0);
      }, sc = function(e) {
        if (nt && nt.tooltip && !xo) if (Xi) {
          const t = Qu - e.pageX;
          e = ea - e.pageY, Math.sqrt(t * t + e * e) > Wp && Ut();
        } else zi !== nt && (clearTimeout(zs), Qu = e.pageX, ea = e.pageY, zs = setTimeout($d, Xp));
      }, oc = function() {
        zi = nt = null, Ut();
      }, Ut = function() {
        Xi && (Xi = !1, pe && (pe.style.display = "none")), zs && (clearTimeout(zs), zs = 0);
      }, ic = function() {
        Ut(), xo = !0;
      }, nc = function() {
        xo = !1;
      }, ad = function() {
        pe && nt && (typeof Ar == "function" ? Ar(pe, nt) : hd());
      }, hd = function() {
        var e = Io(nt);
        e = n.wrap$$module$build$src$core$utils$string(e, Gp), e = e.split(`
`);
        for (let t = 0; t < e.length; t++) {
          const s = document.createElement("div");
          s.appendChild(document.createTextNode(e[t])), pe.appendChild(s);
        }
      }, dd = function(e) {
        const t = document.documentElement.clientWidth, s = document.documentElement.clientHeight;
        let o = Qu;
        o = e ? o - (ta + pe.offsetWidth) : o + ta;
        let i = ea + sa;
        return i + pe.offsetHeight > s + window.scrollY && (i -= pe.offsetHeight + 2 * sa), e ? o = Math.max(kr - window.scrollX, o) : o + pe.offsetWidth > t + window.scrollX - 2 * kr && (o = t - pe.offsetWidth - 2 * kr), { x: o, y: i };
      }, $d = function() {
        if (!xo && (zi = nt, pe)) {
          pe.textContent = "", ad();
          var e = nt.RTL;
          pe.style.direction = e ? "rtl" : "ltr", pe.style.display = "block", Xi = !0;
          var { x: t, y: s } = dd(e);
          pe.style.left = t + "px", pe.style.top = s + "px";
        }
      }, rc = function() {
        return oa;
      }, pd = function(e) {
        oa = e;
      }, lc = function() {
        return ia;
      }, gd = function(e) {
        ia = e;
      }, Ns = function(e) {
        e = `${e}`.toLowerCase().trim();
        var t = zp[e];
        if (t || (t = e.substring(0, 2) === "0x" ? "#" + e.substring(2) : e, t = t[0] === "#" ? t : "#" + t, /^#[0-9a-f]{6}$/.test(t))) return t;
        if (/^#[0-9a-f]{3}$/.test(t)) return ["#", t[1], t[1], t[2], t[2], t[3], t[3]].join("");
        var s = e.match(/^(?:rgb)?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);
        return s && (e = Number(s[1]), t = Number(s[2]), s = Number(s[3]), e >= 0 && e < 256 && t >= 0 && t < 256 && s >= 0 && s < 256) ? Si(
          e,
          t,
          s
        ) : null;
      }, Si = function(e, t, s) {
        return t = e << 16 | t << 8 | s, e < 16 ? "#" + (16777216 | t).toString(16).substr(1) : "#" + t.toString(16);
      }, Hn = function(e) {
        return e = Ns(e), e ? (e = parseInt(e.substr(1), 16), [e >> 16, e >> 8 & 255, e & 255]) : [0, 0, 0];
      }, Gn = function(e, t, s) {
        let o = 0, i = 0, r = 0;
        if (t === 0) r = i = o = s;
        else {
          const u = Math.floor(e / 60), h = e / 60 - u;
          e = s * (1 - t);
          const E = s * (1 - t * h);
          switch (t = s * (1 - t * (1 - h)), u) {
            case 1:
              o = E, i = s, r = e;
              break;
            case 2:
              o = e, i = s, r = t;
              break;
            case 3:
              o = e, i = E, r = s;
              break;
            case 4:
              o = t, i = e, r = s;
              break;
            case 5:
              o = s, i = e, r = E;
              break;
            case 6:
            case 0:
              o = s, i = t, r = e;
          }
        }
        return Si(Math.floor(o), Math.floor(i), Math.floor(r));
      }, ws = function(e, t, s) {
        return e = Ns(e), !e || (t = Ns(t), !t) ? null : (e = Hn(e), t = Hn(t), Si(Math.round(t[0] + s * (e[0] - t[0])), Math.round(t[1] + s * (e[1] - t[1])), Math.round(t[2] + s * (e[2] - t[2]))));
      }, cc = function(e) {
        return Gn(e, oa, ia * 255);
      }, Vn = function(e, t, s) {
        const o = [];
        var i = e.split("");
        i.push("");
        var r = 0;
        e = [];
        let u = null;
        for (let y = 0; y < i.length; y++) {
          var h = i[y];
          if (r === 0) if (h === "%") (r = e.join("")) && o.push(r), e.length = 0, r = 1;
          else if (s && h === `
`) {
            const se = e.join("");
            se && o.push(se), e.length = 0, o.push(h);
          } else e.push(h);
          else if (r === 1) h === "%" ? (e.push(h), r = 0) : t && "0" <= h && h <= "9" ? (r = 2, u = h, (h = e.join("")) && o.push(h), e.length = 0) : h === "{" ? r = 3 : (e.push("%", h), r = 0);
          else if (r === 2) if ("0" <= h && h <= "9") u += h;
          else {
            var E = void 0;
            o.push(parseInt((E = u) != null ? E : "", 10)), y--, r = 0;
          }
          else r === 3 && (h === "" ? (e.splice(0, 0, "%{"), y--, r = 0) : h !== "}" ? e.push(h) : (r = e.join(""), /[A-Z]\w*/i.test(r) ? (h = r.toUpperCase(), (h = h.startsWith("BKY_") ? h.substring(4) : null) && h in n.Msg$$module$build$src$core$msg ? (r = n.Msg$$module$build$src$core$msg[h], typeof r == "string" ? Array.prototype.push.apply(o, Vn(r, t, s)) : t ? o.push(`${r}`) : o.push(r)) : o.push("%{" + r + "}")) : o.push("%{" + r + "}"), r = e.length = 0));
        }
        for ((t = e.join("")) && o.push(t), E = [], e.length = 0, i = 0; i < o.length; i++) typeof o[i] != "string" || s && o[i] === `
` ? ((t = e.join("")) && E.push(t), e.length = 0, E.push(o[i])) : e.push(o[i]);
        return (t = e.join("")) && E.push(t), e.length = 0, E;
      }, uc = function(e) {
        return Vn(e, !0, !0);
      }, le = function(e) {
        return typeof e != "string" ? e : (e = Vn(e, !1, !1), e.length ? String(e[0]) : "");
      }, _d = function(e) {
        let t = !0;
        const s = n.Msg$$module$build$src$core$msg, o = e.match(/%{BKY_[A-Z]\w*}/gi);
        if (o) for (let i = 0; i < o.length; i++) {
          const r = o[i].toUpperCase();
          s[r.slice(6, -1)] === void 0 && (console.warn("No message string for " + o[i] + " in " + e), t = !1);
        }
        return t;
      }, So = function(e) {
        const t = typeof e == "string" ? le(e) : e;
        var s = Number(t);
        if (!isNaN(s) && 0 <= s && s <= 360) return { hue: s, hex: Gn(s, rc(), lc() * 255) };
        if (s = Ns(t)) return { hue: null, hex: s };
        throw s = 'Invalid colour: "' + t + '"', e !== t && (s += ' (from "' + e + '")'), Error(s);
      }, Ro = function() {
        return Ke;
      }, md = function(e) {
        if (Ke = e, e === null) {
          let t;
          (t = document.querySelector("." + na)) == null || t.remove();
        }
      }, ac = function() {
        const e = J() || document.body, t = document.querySelector("div." + na);
        t ? Ke = t : (Ke = document.createElement("div"), Ke.className = na, Ke.tabIndex = -1), w(Ke, "keydown", null, hi), e.appendChild(Ke);
      }, Wn = function(e, t, s, o, i = !0) {
        if (Oo(), Fo = e, Nr = s, s = Ke) {
          if (s.style.direction = t ? "rtl" : "ltr", s.style.display = "block", !o && e instanceof X) {
            let h;
            o = (h = e.getSourceBlock()) == null ? void 0 : h.workspace;
          }
          var r;
          Yp = (r = o) != null ? r : null;
          var u;
          e = (u = o) != null ? u : l(), Uo = e.getRenderer().getClassName(), Ho = e.getTheme().getClassName(), Uo && R(s, Uo), Ho && R(s, Ho), i && (wr = n.getFocusManager$$module$build$src$core$focus_manager().takeEphemeralFocus(s));
        }
      }, Oo = function() {
        if (hc()) {
          Fo = null;
          var e = Ke;
          e && (e.style.display = "none", e.style.left = "", e.style.top = "", Nr && (Nr(), Nr = null), e.textContent = "", Uo && (F(
            e,
            Uo
          ), Uo = ""), Ho && (F(e, Ho), Ho = ""), l().markFocused(), wr && (wr(), wr = null));
        }
      }, hc = function() {
        return !!Fo;
      }, Ms = function(e) {
        Fo === e && Oo();
      }, Ri = function(e) {
        let t = Yp === null, s = e;
        for (; !t && s; ) {
          if (s === e) {
            t = !0;
            break;
          }
          s = e.options.parentWorkspace;
        }
        t && Oo();
      }, dc = function(e, t, s) {
        Ke.style.left = e + "px", Ke.style.top = t + "px", Ke.style.height = s + "px";
      }, $c = function(e, t, s, o) {
        const i = Ed(e, t, s);
        e = Td(e, t, s, o), i < 0 ? dc(e, 0, s.height + i) : dc(e, i, s.height);
      }, Td = function(e, t, s, o) {
        return o ? Math.min(Math.max(t.right - s.width, e.left), e.right - s.width) : Math.max(Math.min(t.left, e.right - s.width), e.left);
      }, Ed = function(e, t, s) {
        return t.bottom + s.height >= e.bottom ? t.top - s.height : t.bottom;
      }, fd = function(e) {
        return !(e == null || !e.repositionForWindowResize);
      }, pc = function() {
        fd(Fo) && Fo.repositionForWindowResize() || Oo();
      }, bd = function() {
        return Mr;
      }, gc = function(e) {
        Mr = e;
      }, Co = function(e, t, s, o, i) {
        if (Wn(Kp, s, _c, o), t.length) {
          i || (e instanceof PointerEvent ? i = new I(e.clientX, e.clientY) : (console.warn("Context menu opened with keyboard but no location given"), i = new I(0, 0)));
          var r = Id(
            t,
            s,
            e,
            i
          );
          Ys = r, Sd(r, s, i), setTimeout(function() {
            r.focus();
          }, 1), Mr = null;
        } else Oi();
      }, Id = function(e, t, s, o) {
        const i = new Gu();
        i.setRole(ze.MENU);
        for (let r = 0; r < e.length; r++) {
          const u = e[r];
          if (u.separator) {
            i.addChild(new _p());
            continue;
          }
          const h = new br(u.text);
          h.setRightToLeft(t), h.setRole(ze.MENUITEM), i.addChild(h), h.setEnabled(u.enabled), u.enabled && h.onAction(function(E, y) {
            Oi(), requestAnimationFrame(() => {
              setTimeout(() => {
                u.callback(u.scope, s, y, o);
              }, 0);
            });
          }, {});
        }
        return i;
      }, Sd = function(e, t, s) {
        const o = fl();
        s = new M(s.y + o.top, s.y + o.top, s.x + o.left, s.x + o.left), Rd(e);
        const i = e.getSize();
        t && (s.left += i.width, s.right += i.width, o.left += i.width, o.right += i.width), $c(o, s, i, t), e.focus();
      }, Rd = function(e) {
        var t = Ro();
        if (!t) throw Error("Attempting to create a context menu when widget div is null");
        t = e.render(t), R(t, "blocklyContextMenu"), w(t, "contextmenu", null, Od), e.focus();
      }, Od = function(e) {
        e.preventDefault(), e.stopPropagation();
      }, Oi = function() {
        Ms(Kp), Mr = null;
        let e;
        (e = Ys) == null || e.dispose(), Ys = null;
      }, _c = function() {
        Ys && (Ys.dispose(), Ys = null);
      }, n.callbackFactory$$module$build$src$core$contextmenu = function(e, t) {
        return () => {
          n.disable$$module$build$src$core$events$utils();
          let s;
          try {
            s = t instanceof Element ? Ds(t, e.workspace) : ks(t, e.workspace);
            const o = e.getRelativeToSurfaceXY();
            o.x = e.RTL ? o.x - n.config$$module$build$src$core$config.snapRadius : o.x + n.config$$module$build$src$core$config.snapRadius, o.y += n.config$$module$build$src$core$config.snapRadius * 2, s.moveBy(o.x, o.y);
          } finally {
            n.enable$$module$build$src$core$events$utils();
          }
          return j() && !s.isShadow() && k(new (L(m.BLOCK_CREATE))(s)), n.getFocusManager$$module$build$src$core$focus_manager().focusNode(s), s;
        };
      }, mc = function() {
        return Ys;
      }, Tc = function(e, t) {
        return t = ts(t, e.getParentSvg(), e.getInverseScreenCTM()), t.x /= e.scale, t.y /= e.scale, t;
      }, Xn = function(e, t, s) {
        t = Tc(e, t), Jp.set(e, I.difference(s, t));
      }, zn = function(e, t) {
        if (t = Tc(e, t), e = Jp.get(e), !e) throw Error("Drag not initialized");
        return I.sum(e, t);
      }, Cd = function(e, t = !1) {
        const s = n.createElement$$module$build$src$core$utils$xml("xml");
        var o = Ec(n.allUsedVarModels$$module$build$src$core$variables(e));
        o.hasChildNodes() && s.appendChild(o);
        for (const i of e.getTopComments()) s.appendChild(Ci(i, t));
        for (e = e.getTopBlocks(!0), o = 0; o < e.length; o++) s.appendChild(yi(e[o], t));
        return s;
      }, Ci = function(e, t = !1) {
        const s = n.createElement$$module$build$src$core$utils$xml("comment");
        t || s.setAttribute("id", e.id), t = e.workspace;
        const o = e.getRelativeToSurfaceXY().clone();
        return o.x = t.RTL ? t.getWidth() - o.x : o.x, s.setAttribute("x", `${o.x}`), s.setAttribute("y", `${o.y}`), s.setAttribute("w", `${e.getSize().width}`), s.setAttribute("h", `${e.getSize().height}`), e.getText() && (s.textContent = e.getText()), e.isCollapsed() && s.setAttribute("collapsed", "true"), e.isOwnEditable() || s.setAttribute("editable", "false"), e.isOwnMovable() || s.setAttribute("movable", "false"), e.isOwnDeletable() || s.setAttribute("deletable", "false"), s;
      }, Ec = function(e) {
        const t = n.createElement$$module$build$src$core$utils$xml("variables");
        for (let s = 0; s < e.length; s++) {
          const o = e[s], i = n.createElement$$module$build$src$core$utils$xml("variable");
          i.appendChild(n.createTextNode$$module$build$src$core$utils$xml(o.getName())), o.getType() && i.setAttribute("type", o.getType()), i.id = o.getId(), t.appendChild(i);
        }
        return t;
      }, yi = function(e, t) {
        if (e.isInsertionMarker() && (e = e.getChildren(!1)[0], !e)) return new DocumentFragment();
        let s = 0;
        if (e.workspace.RTL && (s = e.workspace.getWidth()), t = as(e, t), Rc(t)) {
          const o = e.getRelativeToSurfaceXY();
          t.setAttribute("x", String(Math.round(e.workspace.RTL ? s - o.x : o.x))), t.setAttribute("y", String(Math.round(o.y)));
        }
        return t;
      }, yd = function(e) {
        if (e.isSerializable()) {
          const t = n.createElement$$module$build$src$core$utils$xml("field");
          return t.setAttribute("name", e.name || ""), e.toXml(t);
        }
        return null;
      }, vd = function(e, t) {
        for (const s of e.getFields()) (e = yd(s)) && t.appendChild(e);
      }, as = function(e, t) {
        if (e.isInsertionMarker()) return (t = e.getChildren(!1)[0]) ? as(t) : new DocumentFragment();
        const s = n.createElement$$module$build$src$core$utils$xml(e.isShadow() ? "shadow" : "block");
        if (s.setAttribute("type", e.type), t || (s.id = e.id), e.mutationToDom) {
          var o = e.mutationToDom();
          o && (o.hasChildNodes() || o.hasAttributes()) && s.appendChild(o);
        }
        if (vd(e, s), o = e.getCommentText()) {
          var i = e.getIcon($e.COMMENT), r = i.getBubbleSize(), u = i.bubbleIsVisible();
          i = i.getBubbleLocation();
          var h = n.createElement$$module$build$src$core$utils$xml("comment");
          h.appendChild(n.createTextNode$$module$build$src$core$utils$xml(o)), h.setAttribute("pinned", `${u}`), h.setAttribute("h", `${r.height}`), h.setAttribute("w", `${r.width}`), i && (h.setAttribute("x", `${e.workspace.RTL ? e.workspace.getWidth() - (i.x + r.width) : i.x}`), h.setAttribute("y", `${i.y}`)), s.appendChild(h);
        }
        for (e.data && (o = n.createElement$$module$build$src$core$utils$xml("data"), o.appendChild(n.createTextNode$$module$build$src$core$utils$xml(e.data)), s.appendChild(o)), o = 0; o < e.inputList.length; o++) {
          r = e.inputList[o];
          var E = void 0;
          u = !0, r.type !== n.inputTypes$$module$build$src$core$inputs$input_types.DUMMY && r.type !== n.inputTypes$$module$build$src$core$inputs$input_types.END_ROW && (i = r.connection.targetBlock(), r.type === n.inputTypes$$module$build$src$core$inputs$input_types.VALUE ? E = n.createElement$$module$build$src$core$utils$xml("value") : r.type === n.inputTypes$$module$build$src$core$inputs$input_types.STATEMENT && (E = n.createElement$$module$build$src$core$utils$xml("statement")), h = r.connection.getShadowDom(), !h || i && i.isShadow() || E.appendChild(fc(h, t)), i && (i = as(i, t), i.nodeType === Wt.ELEMENT_NODE && (E.appendChild(i), u = !1)), E.setAttribute("name", r.name), u || s.appendChild(E));
        }
        e.inputsInline !== void 0 && e.inputsInline !== e.inputsInlineDefault && s.setAttribute("inline", String(e.inputsInline)), e.isCollapsed() && s.setAttribute("collapsed", "true"), e.isEnabled() || s.setAttribute(
          "disabled-reasons",
          Array.from(e.getDisabledReasons()).map(encodeURIComponent).join(",")
        ), e.isOwnDeletable() || s.setAttribute("deletable", "false"), e.isOwnMovable() || s.setAttribute("movable", "false"), e.isOwnEditable() || s.setAttribute("editable", "false"), E = e.getNextBlock();
        let y;
        return E && (o = as(E, t), o.nodeType === Wt.ELEMENT_NODE && (y = n.createElement$$module$build$src$core$utils$xml("next"), y.appendChild(o), s.appendChild(y))), e = e.nextConnection && e.nextConnection.getShadowDom(), !e || E && E.isShadow() || y.appendChild(fc(e, t)), s;
      }, fc = function(e, t) {
        let s = e = e.cloneNode(!0), o;
        for (; s; ) if (t && s.nodeName === "shadow" && s.removeAttribute("id"), s.firstChild) s = s.firstChild;
        else {
          for (; s && !s.nextSibling; ) {
            o = s, s = s.parentNode;
            let i;
            o.nodeType === Wt.TEXT_NODE && o.data.trim() === "" && ((i = s) == null ? void 0 : i.firstChild) !== o && G(o);
          }
          s && (o = s, s = s.nextSibling, o.nodeType === Wt.TEXT_NODE && o.data.trim() === "" && G(o));
        }
        return e;
      }, St = function(e) {
        return _o(e).replace(/<(\w+)([^<]*)\/>/g, "<$1$2></$1>");
      }, Ld = function(e) {
        e = St(e).split("<");
        let t = "";
        for (let s = 1; s < e.length; s++) {
          const o = e[s];
          o[0] === "/" && (t = t.substring(2)), e[s] = t + "<" + o, o[0] !== "/" && o.slice(-2) !== "/>" && (t += "  ");
        }
        return e = e.join(`
`), e = e.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, "$1</$2>"), e.replace(/^\n/, "");
      }, Ad = function(e, t) {
        return t.setResizesEnabled(!1), t.clear(), e = n.domToWorkspace$$module$build$src$core$xml(e, t), t.setResizesEnabled(!0), e;
      }, n.domToWorkspace$$module$build$src$core$xml = function(e, t) {
        let s = 0;
        t.RTL && (s = t.getWidth());
        const o = [];
        Bt();
        const i = n.getGroup$$module$build$src$core$events$utils();
        i || n.setGroup$$module$build$src$core$events$utils(!0), t.setResizesEnabled && t.setResizesEnabled(!1);
        let r = !0;
        try {
          for (let u = 0, h; h = e.childNodes[u]; u++) {
            const E = h.nodeName.toLowerCase(), y = h;
            if (E === "block" || E === "shadow" && !Ce()) {
              const se = Ds(
                y,
                t
              );
              o.push(se.id);
              let Y;
              const Le = parseInt((Y = y.getAttribute("x")) != null ? Y : "10", 10);
              let Qt;
              const wt = parseInt((Qt = y.getAttribute("y")) != null ? Qt : "10", 10);
              isNaN(Le) || isNaN(wt) || se.moveBy(t.RTL ? s - Le : Le, wt, ["create"]), r = !1;
            } else {
              if (E === "shadow") throw TypeError("Shadow block cannot be a top-level block.");
              if (E === "comment") bc(y, t);
              else if (E === "variables") {
                if (r) Ic(y, t);
                else throw Error("'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location.");
                r = !1;
              }
            }
          }
        } finally {
          n.setGroup$$module$build$src$core$events$utils(i), t.setResizesEnabled && t.setResizesEnabled(!0), t.rendered && cs(), xt();
        }
        return k(new (L(m.FINISHED_LOADING))(t)), o;
      }, bc = function(e, t) {
        var s;
        const o = (s = e.getAttribute("id")) != null ? s : void 0;
        s = t.rendered ? new jt(t, o) : new Br(t, o);
        var i;
        s.setText((i = e.textContent) != null ? i : "");
        var r;
        i = parseInt((r = e.getAttribute("x")) != null ? r : "", 10);
        let u;
        r = parseInt((u = e.getAttribute("y")) != null ? u : "", 10), isNaN(i) || isNaN(r) || (i = t.RTL ? t.getWidth() - i : i, s.moveTo(new I(i, r)));
        var h;
        t = parseInt((h = e.getAttribute("w")) != null ? h : "", 10);
        let E;
        return h = parseInt((E = e.getAttribute("h")) != null ? E : "", 10), isNaN(t) || isNaN(h) || s.setSize(new D(t, h)), e.getAttribute("collapsed") === "true" && s.setCollapsed(!0), e.getAttribute("editable") === "false" && s.setEditable(!1), e.getAttribute("movable") === "false" && s.setMovable(!1), e.getAttribute("deletable") === "false" && s.setDeletable(!1), s;
      }, kd = function(e, t) {
        if (!t.getBlocksBoundingBox) return n.domToWorkspace$$module$build$src$core$xml(e, t);
        var s = t.getBlocksBoundingBox();
        if (e = n.domToWorkspace$$module$build$src$core$xml(e, t), s && s.top !== s.bottom) {
          var o = s.bottom;
          s = t.RTL ? s.right : s.left;
          var i = 1 / 0;
          let r = -1 / 0, u = 1 / 0;
          for (let h = 0; h < e.length; h++) {
            const E = t.getBlockById(e[h]).getRelativeToSurfaceXY();
            E.y < u && (u = E.y), E.x < i && (i = E.x), E.x > r && (r = E.x);
          }
          for (o = o - u + 10, s = t.RTL ? s - r : s - i, i = 0; i < e.length; i++) t.getBlockById(e[i]).moveBy(
            s,
            o,
            ["create"]
          );
        }
        return e;
      }, n.domToBlock$$module$build$src$core$xml = function(e, t) {
        return e = Ds(e, t), t.rendered && cs(), e;
      }, Ds = function(e, t) {
        n.disable$$module$build$src$core$events$utils();
        var s = t.getVariableMap().getAllVariables();
        let o;
        try {
          if (o = Yn(e, t), t.rendered) {
            const i = o, r = o.getDescendants(!1);
            i.setConnectionTracking(!1);
            for (let u = r.length - 1; u >= 0; u--) r[u].initSvg();
            for (let u = r.length - 1; u >= 0; u--) r[u].queueRender();
            setTimeout(function() {
              i.disposed || i.setConnectionTracking(!0);
            }, 1), t.resizeContents();
          } else {
            const i = o.getDescendants(!1);
            for (let r = i.length - 1; r >= 0; r--) i[r].initModel();
          }
        } finally {
          n.enable$$module$build$src$core$events$utils();
        }
        if (j()) {
          for (e = wn(t, s), t = 0; t < e.length; t++) s = e[t], k(new (L(m.VAR_CREATE))(s));
          k(new (L(m.BLOCK_CREATE))(o));
        }
        return o;
      }, Ic = function(e, t) {
        for (let o = 0; o < e.children.length; o++) {
          var s = e.children[o];
          const i = s.getAttribute("type"), r = s.getAttribute("id");
          if (s = s.textContent, !s) break;
          let u;
          t.getVariableMap().createVariable(s, (u = i) != null ? u : void 0, r);
        }
      }, Nd = function(e) {
        const t = { mutation: [], comment: [], data: [], field: [], input: [], next: [] };
        for (let s = 0; s < e.children.length; s++) {
          const o = e.children[s];
          if (o.nodeType !== Wt.TEXT_NODE) switch (o.nodeName.toLowerCase()) {
            case "mutation":
              t.mutation.push(o);
              break;
            case "comment":
              t.comment.push(o);
              break;
            case "data":
              t.data.push(o);
              break;
            case "title":
            case "field":
              t.field.push(o);
              break;
            case "value":
            case "statement":
              t.input.push(o);
              break;
            case "next":
              t.next.push(o);
              break;
            default:
              console.warn("Ignoring unknown tag: " + o.nodeName);
          }
        }
        return t;
      }, wd = function(e, t) {
        let s = !1;
        for (let o = 0; o < e.length; o++) {
          const i = e[o];
          t.domToMutation && (t.domToMutation(i), t.initSvg && (s = !0));
        }
        return s;
      }, Md = function(e, t) {
        for (let s = 0; s < e.length; s++) {
          const o = e[s], i = o.textContent, r = o.getAttribute("pinned") === "true";
          let u;
          const h = parseInt((u = o.getAttribute("w")) != null ? u : "50", 10);
          let E;
          const y = parseInt((E = o.getAttribute("h")) != null ? E : "50", 10);
          let se, Y = parseInt((se = o.getAttribute("x")) != null ? se : "", 10), Le;
          const Qt = parseInt((Le = o.getAttribute("y")) != null ? Le : "", 10);
          t.setCommentText(i);
          const wt = t.getIcon($e.COMMENT);
          isNaN(h) || isNaN(y) || wt.setBubbleSize(new D(h, y)), wt.setBubbleVisible(r), setTimeout(() => {
            isNaN(Y) || isNaN(Qt) || (Y = t.workspace.RTL ? t.workspace.getWidth() - (Y + h) : Y, wt.setBubbleLocation(new I(Y, Qt))), wt.setBubbleVisible(r);
          }, 1);
        }
      }, Dd = function(e, t) {
        for (let s = 0; s < e.length; s++) t.data = e[s].textContent;
      }, Pd = function(e, t) {
        for (let s = 0; s < e.length; s++) {
          const o = e[s], i = o.getAttribute("name");
          i ? Fd(t, i, o) : console.warn(`Ignoring unnamed field in block ${t.type}`);
        }
      }, Sc = function(e) {
        let t = null, s = null;
        for (let o = 0; o < e.childNodes.length; o++) {
          const i = e.childNodes[o];
          Rc(i) && (i.nodeName.toLowerCase() === "block" ? t = i : i.nodeName.toLowerCase() === "shadow" && (s = i));
        }
        return { childBlockElement: t, childShadowElement: s };
      }, Bd = function(e, t, s, o) {
        for (let r = 0; r < e.length; r++) {
          var i = e[r];
          const u = i.getAttribute("name"), h = u ? s.getInput(u) : null;
          if (!h) {
            console.warn("Ignoring non-existent input " + u + " in block " + o);
            break;
          }
          if (i = Sc(i), i.childBlockElement) {
            if (!h.connection) throw TypeError("Input connection does not exist.");
            Yn(i.childBlockElement, t, h.connection, !1);
          }
          if (i.childShadowElement) {
            let E;
            (E = h.connection) == null || E.setShadowDom(i.childShadowElement);
          }
        }
      }, xd = function(e, t, s) {
        for (let o = 0; o < e.length; o++) {
          const i = Sc(e[o]);
          if (i.childBlockElement) {
            if (!s.nextConnection) throw TypeError("Next statement does not exist.");
            if (s.nextConnection.isConnected()) throw TypeError("Next statement is already connected.");
            Yn(i.childBlockElement, t, s.nextConnection, !0);
          }
          i.childShadowElement && s.nextConnection && s.nextConnection.setShadowDom(i.childShadowElement);
        }
      }, Yn = function(e, t, s, o) {
        var i;
        const r = e.getAttribute("type");
        if (!r) throw TypeError("Block type unspecified: " + e.outerHTML);
        var u = (i = e.getAttribute("id")) != null ? i : void 0;
        i = t.newBlock(r, u), u = Nd(e);
        const h = wd(u.mutation, i);
        if (Md(u.comment, i), Dd(u.data, i), s) if (o) if (i.previousConnection) s.connect(i.previousConnection);
        else throw TypeError("Next block does not have previous statement.");
        else if (i.outputConnection) s.connect(i.outputConnection);
        else if (i.previousConnection) s.connect(i.previousConnection);
        else throw TypeError("Child block does not have output or previous statement.");
        if (Pd(u.field, i), Bd(u.input, t, i, r), xd(u.next, t, i), h && i.initSvg(), (t = e.getAttribute("inline")) && i.setInputsInline(t === "true"), (t = e.getAttribute("disabled")) && i.setDisabledReason(t === "true" || t === "disabled", ot), t = e.getAttribute("disabled-reasons"), t !== null) for (var E of t.split(",")) i.setDisabledReason(!0, decodeURIComponent(E));
        if ((E = e.getAttribute("deletable")) && i.setDeletable(E === "true"), (E = e.getAttribute("movable")) && i.setMovable(E === "true"), (E = e.getAttribute("editable")) && i.setEditable(E === "true"), (E = e.getAttribute("collapsed")) && i.setCollapsed(E === "true"), e.nodeName.toLowerCase() === "shadow") {
          for (e = i.getChildren(!1), E = 0; E < e.length; E++) if (!e[E].isShadow()) throw TypeError("Shadow block not allowed non-shadow child.");
          i.setShadow(!0);
        }
        return i;
      }, Fd = function(e, t, s) {
        const o = e.getField(t);
        o ? o.fromXml(s) : console.warn("Ignoring non-existent field " + t + " in block " + e.type);
      }, Ud = function(e) {
        for (let t = 0; t < e.childNodes.length; t++) {
          const s = e.childNodes[t];
          if (s.nodeName.toLowerCase() === "next") {
            e.removeChild(s);
            break;
          }
        }
      }, Rc = function(e) {
        return e.nodeType === Wt.ELEMENT_NODE;
      }, Rt = function(e, t) {
        c(f.FIELD, e, t, !0);
      }, Hd = function(e) {
        Oe(f.FIELD, e);
      }, n.fromJson$$module$build$src$core$field_registry = function(e) {
        return tg.fromJsonInternal(e);
      }, Gd = function(e) {
        const t = lt(f.FIELD, e.type);
        return t ? t.fromJson(e) : (console.warn("Blockly could not create a field of type " + e.type + ". The field is probably not being registered. This could be because the file is not loaded, the field does not register itself (Issue #1584), or the registration is not being reached."), null);
      }, yo = function(e) {
        return e && typeof e == "object" && "src" in e && typeof e.src == "string" && "alt" in e && typeof e.alt == "string" && "width" in e && typeof e.width == "number" && "height" in e && typeof e.height == "number";
      }, n.register$$module$build$src$core$extensions = function(e, t) {
        if (typeof e != "string" || e.trim() === "") throw Error('Error: Invalid extension name "' + e + '"');
        if (Wo[e]) throw Error('Error: Extension "' + e + '" is already registered.');
        if (typeof t != "function") throw Error('Error: Extension "' + e + '" must be a function');
        Wo[e] = t;
      }, n.registerMixin$$module$build$src$core$extensions = function(e, t) {
        if (!t || typeof t != "object") throw Error('Error: Mixin "' + e + '" must be a object');
        n.register$$module$build$src$core$extensions(e, function() {
          this.mixin(t);
        });
      }, n.registerMutator$$module$build$src$core$extensions = function(e, t, s, o) {
        const i = 'Error when registering mutator "' + e + '": ';
        yc(i, t);
        const r = Cc(t, i);
        if (s && typeof s != "function") throw Error(i + 'Extension "' + e + '" is not a function');
        n.register$$module$build$src$core$extensions(e, function() {
          r && this.setMutator(new n.MutatorIcon$$module$build$src$core$icons$mutator_icon(o || [], this)), this.mixin(t), s && s.apply(this);
        });
      }, Vd = function(e) {
        Oc(e) ? delete Wo[e] : console.warn('No extension mapping for name "' + e + '" found to unregister');
      }, Oc = function(e) {
        return !!Wo[e];
      }, Kn = function(e, t, s) {
        const o = Wo[e];
        if (typeof o != "function") throw Error('Error: Extension "' + e + '" not found.');
        let i;
        if (s ? Wd(e, t) : i = Jn(t), o.apply(t), s) yc('Error after applying mutator "' + e + '": ', t);
        else if (!Yd(
          i,
          t
        )) throw Error('Error when applying extension "' + e + '": mutation properties changed when applying a non-mutator extension.');
      }, Wd = function(e, t) {
        if (Jn(t).length) throw Error('Error: tried to apply mutation "' + e + '" to a block that already has mutator functions.  Block id: ' + t.id);
      }, Xd = function(e, t) {
        return jn(e.mutationToDom, e.domToMutation, t + " mutationToDom/domToMutation");
      }, zd = function(e, t) {
        return jn(e.saveExtraState, e.loadExtraState, t + " saveExtraState/loadExtraState");
      }, Cc = function(e, t) {
        return jn(e.compose, e.decompose, t + " compose/decompose");
      }, jn = function(e, t, s) {
        if (e && t) {
          if (typeof e != "function" || typeof t != "function") throw Error(s + " must be a function");
          return !0;
        }
        if (!e && !t) return !1;
        throw Error(s + "Must have both or neither functions");
      }, yc = function(e, t) {
        const s = Xd(t, e), o = zd(t, e);
        if (!s && !o) throw Error(e + "Mutations must contain either XML hooks, or JSON hooks, or both");
        Cc(t, e);
      }, Jn = function(e) {
        const t = [];
        return e.domToMutation !== void 0 && t.push(e.domToMutation), e.mutationToDom !== void 0 && t.push(e.mutationToDom), e.saveExtraState !== void 0 && t.push(e.saveExtraState), e.loadExtraState !== void 0 && t.push(e.loadExtraState), e.compose !== void 0 && t.push(e.compose), e.decompose !== void 0 && t.push(e.decompose), t;
      }, Yd = function(e, t) {
        if (t = Jn(t), t.length !== e.length) return !1;
        for (let s = 0; s < t.length; s++) if (e[s] !== t[s]) return !1;
        return !0;
      }, Kd = function(e) {
        if (typeof document != "object") throw Error("runAfterPageLoad() requires browser document.");
        if (document.readyState === "complete") e();
        else {
          const t = setInterval(function() {
            document.readyState === "complete" && (clearInterval(t), e());
          }, 10);
        }
      }, n.buildTooltipForDropdown$$module$build$src$core$extensions = function(e, t) {
        const s = [];
        return function() {
          s.includes(this.type) || (jd(this, e, t), s.push(this.type)), this.setTooltip((function() {
            const o = String(this.getFieldValue(e));
            return le(t[o]);
          }).bind(this));
        };
      }, jd = function(e, t, s) {
        var o = e.getField(t);
        if (o instanceof ve && !o.isOptionListDynamic()) {
          o = o.getOptions();
          for (const i of o) i !== ve.SEPARATOR && ([, o] = i, s[o] === void 0 && console.warn(`No tooltip mapping for value ${o} of field ${t} of block type ${e.type}.`));
        }
      }, n.buildTooltipWithFieldText$$module$build$src$core$extensions = function(e, t) {
        return function() {
          this.setTooltip((function() {
            const s = this.getField(t);
            return le(e).replace("%1", s ? s.getText() : "");
          }).bind(this));
        };
      }, Jd = function() {
        const e = this.tooltip;
        this.setTooltip((function() {
          const t = this.getParent();
          return t && t.getInputsInline() && t.tooltip || e;
        }).bind(this));
      }, v = function(e, t) {
        return " " + e + "," + t + " ";
      }, Ue = function(e, t) {
        return " " + e + t.join("");
      }, be = function(e, t) {
        return " M " + e + "," + t + " ";
      }, ne = function(e, t) {
        return " m " + e + "," + t + " ";
      }, Ot = function(e, t) {
        return " l " + e + "," + t + " ";
      }, vo = function(e) {
        return " l" + e.join("");
      }, A = function(e, t) {
        return " " + e + " " + t + " ";
      }, ce = function(e, t, s, o) {
        return e + " " + s + " " + s + " " + t + o;
      }, qd = function(e, t) {
        if (!e || !t) throw Error("Cannot connect null connections.");
        e.targetConnection = t, t.targetConnection = e;
      }, Zd = function(e, t) {
        let s = null;
        t = t.outputConnection;
        const o = t == null ? void 0 : t.getConnectionChecker();
        for (let i = 0, r; r = e.inputList[i]; i++) {
          const u = r.connection;
          let h;
          if (u && ((h = o) != null && h.canConnect(t, u, !1))) {
            if (s) return null;
            s = u;
          }
        }
        return s;
      }, Qd = function(e, t) {
        let s;
        for (; s = Zd(e, t); ) if (e = s.targetBlock(), !e || e.isShadow()) return s;
        return null;
      }, vc = function(e) {
        return Ft(e) && typeof e.getType == "function" && typeof e.initView == "function" && typeof e.dispose == "function" && typeof e.getWeight == "function" && typeof e.getSize == "function" && typeof e.applyColour == "function" && typeof e.hideForInsertionMarker == "function" && typeof e.updateEditable == "function" && typeof e.updateCollapsed == "function" && typeof e.isShownWhenCollapsed == "function" && typeof e.setOffsetInBlock == "function" && typeof e.onLocationChange == "function" && typeof e.onClick == "function";
      }, e$ = function(e) {
        return vc(e) && us(e) && Ti(e) && typeof e.setText == "function" && typeof e.getText == "function" && typeof e.setBubbleSize == "function" && typeof e.getBubbleSize == "function" && typeof e.setBubbleLocation == "function" && typeof e.getBubbleLocation == "function" && e.getType() === $e.COMMENT;
      }, qn = function(e) {
        if (!(e.getDescendants(!1).length > 100)) {
          var t = e.workspace, s = e.getSvgRoot();
          t.getAudioManager().play("delete");
          var o = e.getRelativeToSurfaceXY(), i = s.cloneNode(!0);
          i.setAttribute("transform", "translate(" + o.x + "," + o.y + ")");
          var r;
          (r = t.getLayerManager()) == null || r.appendToAnimationLayer({ getSvgRoot: () => i }), Lc(i, { x: o.x, y: o.y, width: e.width, height: e.height }, t.RTL, /* @__PURE__ */ new Date());
        }
      }, Lc = function(e, t, s, o) {
        const i = ((/* @__PURE__ */ new Date()).getTime() - o.getTime()) / 150;
        i > 1 ? G(e) : (e.setAttribute("transform", "translate(" + (t.x + (s ? -1 : 1) * t.width / 2 * i) + "," + (t.y + t.height / 2 * i) + ") scale(" + (1 - i) + ")"), setTimeout(Lc, 10, e, t, s, o));
      }, Ac = function(e) {
        var t = e.workspace;
        const s = t.scale;
        if (t.getAudioManager().play("click"), !(s < 1)) {
          var o = t.getSvgXY(e.getSvgRoot());
          e.outputConnection ? (o.x += (e.RTL ? 3 : -3) * s, o.y += 13 * s) : e.previousConnection && (o.x += (e.RTL ? -23 : 23) * s, o.y += 3 * s);
          var i = b(g.CIRCLE, { cx: o.x, cy: o.y, r: 0, fill: "none", stroke: "#888", "stroke-width": 10 }, t.getParentSvg());
          e = b(
            g.ANIMATE,
            { id: "animationCircle", begin: "indefinite", attributeName: "r", dur: "150ms", from: 0, to: 25 * s },
            i
          ), t = b(g.ANIMATE, { id: "animationOpacity", begin: "indefinite", attributeName: "opacity", dur: "150ms", from: 1, to: 0 }, i), e.beginElement(), t.beginElement(), setTimeout(() => void G(i), 150);
        }
      }, kc = function(e) {
        if (Lo(), e.workspace.getAudioManager().play("disconnect"), !(e.workspace.scale < 1)) {
          var t = e.getHeightWidth().height;
          t = Math.atan(10 / t) / Math.PI * 180, e.RTL || (t *= -1), ji = e, Nc(e, t, /* @__PURE__ */ new Date(), 0);
        }
      }, Nc = function(e, t, s, o) {
        const i = [0.66, 1, 0.66, 0, -0.66, -1, -0.66, 0];
        let r = "";
        s.getTime() + 200 > (/* @__PURE__ */ new Date()).getTime() && (r = `skewX(${Math.round(i[o % i.length] * t)})`, Vr = setTimeout(Nc, 15, e, t, s, o + 1)), e.getSvgRoot().setAttribute("transform", `${e.getTranslation()} ${r}`);
      }, Lo = function() {
        ji && (Vr && (clearTimeout(Vr), Vr = null), ji.getSvgRoot().setAttribute("transform", ji.getTranslation()), ji = null);
      }, t$ = function(e, t) {
        e.workspace.RTL && (t.x = e.workspace.getWidth() - t.x);
        const s = e.workspace, o = n.config$$module$build$src$core$config.snapRadius, i = I.difference(t, e.getRelativeToSurfaceXY()), r = new I(0, 0), u = s.getAllBlocks(!1).filter((h) => h.id != e.id).map((h) => h.getRelativeToSurfaceXY());
        for (; s$(
          I.sum(t, r),
          u
        ) || o$(e, I.sum(i, r), o); ) s.RTL ? r.translate(-o, o * 2) : r.translate(o, o * 2);
        e.moveTo(I.sum(t, r));
      }, s$ = function(e, t) {
        return t.some((s) => Math.abs(s.x - e.x) <= 1 && Math.abs(s.y - e.y) <= 1);
      }, o$ = function(e, t, s) {
        return e.getConnections_(!1).some((o) => !!o.closest(s, t).connection);
      }, Ao = function(e, t, s) {
        const o = s.getBoundingRectangle(), i = o.right - o.left, r = bo(t.top, o.top, t.top + t.height - (o.bottom - o.top)) - o.top;
        let u = t.left;
        return t = t.left + t.width - i, e.RTL ? u = Math.min(t, u) : t = Math.max(u, t), (e = bo(u, o.left, t) - o.left) || r ? (s.moveBy(e, r, ["inbounds"]), !0) : !1;
      }, wc = function(e) {
        return (t) => {
          var s = e.getMetricsManager();
          if (s.hasFixedEdges() && !e.isDragging()) {
            var o;
            if (K$.includes((o = t.type) != null ? o : "")) {
              o = s.getScrollMetrics(!0);
              const i = i$(e, t);
              i && (s = n.getGroup$$module$build$src$core$events$utils() || !1, n.setGroup$$module$build$src$core$events$utils(t.group), Ao(
                e,
                o,
                i
              ) && !t.group && console.warn("Moved object in bounds but there was no event group. This may break undo."), n.setGroup$$module$build$src$core$events$utils(s));
            } else ro(t) && t.scale && t.oldScale && t.scale > t.oldScale && Zn(e);
          }
        };
      }, i$ = function(e, t) {
        let s = null;
        switch (t.type) {
          case m.BLOCK_CREATE:
          case m.BLOCK_MOVE:
            (s = e.getBlockById(t.blockId)) && (s = s.getRootBlock());
            break;
          case m.COMMENT_CREATE:
          case m.COMMENT_MOVE:
          case m.COMMENT_RESIZE:
            s = e.getCommentById(t.commentId);
        }
        return s;
      }, Zn = function(e) {
        var t = e.getMetricsManager();
        if (t.hasFixedEdges() && !e.isDragging()) {
          t = t.getScrollMetrics(!0);
          var s = e.getTopBoundedElements();
          for (let o = 0, i; i = s[o]; o++) Ao(e, t, i);
        }
      }, st = function(e) {
        return e && typeof e.isDeletable == "function" && typeof e.dispose == "function" && typeof e.setDeleteStyle == "function";
      }, Mc = function(e, t) {
        const s = e.getIcons();
        for (const o of e.inputList) {
          if (!o.isVisible()) continue;
          s.push(...o.fieldRow);
          let i;
          if ((i = o.connection) != null && i.targetBlock()) if (e = o.connection.targetBlock(), o.connection.type !== C.NEXT_STATEMENT || t) s.push(e);
          else {
            let r;
            (e = (r = e.lastConnectionInStack(!1)) == null ? void 0 : r.getSourceBlock()) && s.push(e);
          }
          else {
            let r;
            ((r = o.connection) == null ? void 0 : r.type) === C.INPUT_VALUE && s.push(o.connection);
          }
        }
        return s;
      }, ko = function(e, t) {
        const s = e.workspace.getTopBoundedElements(!0).filter((i) => Ft(i));
        e = s.indexOf(e instanceof z ? e.getRootBlock() : e) + t;
        let o = null;
        if (e >= 0 && e < s.length ? o = s[e] : e < 0 ? o = s[s.length - 1] : e >= s.length && (o = s[0]), t < 0 && o instanceof z) {
          let i, r;
          return (r = (i = o.lastConnectionInStack(!1)) == null ? void 0 : i.getSourceBlock()) != null ? r : o;
        }
        return o;
      }, ct = function(e, t) {
        var s;
        let o;
        const i = e instanceof z ? (o = (s = e.outputConnection) == null ? void 0 : s.targetBlock()) != null ? o : e.getSurroundParent() : e.getSourceBlock();
        return !(i instanceof z) || (s = Mc(i, t > 0), e = s.indexOf(e), e === -1) ? null : (t = e + t, t >= 0 && t < s.length ? s[t] : null);
      }, Dc = function(e, t) {
        c(f.ICON, e.toString(), t);
      }, n$ = function(e) {
        Oe(f.ICON, e);
      }, Pc = function(e) {
        return e && typeof e.showContextMenu == "function";
      }, No = function(e) {
        return e && typeof e.getRelativeToSurfaceXY == "function" && typeof e.isMovable == "function" && typeof e.startDrag == "function" && typeof e.drag == "function" && typeof e.endDrag == "function" && typeof e.revertDrag == "function";
      }, r$ = function(e) {
        return e && typeof e.autoHide == "function";
      }, hs = function(e) {
        return typeof e.getProcedureModel == "function" && typeof e.doProcedureUpdate == "function" && typeof e.isProcedureDef == "function";
      }, Qn = function(e) {
        return e && typeof e.startPublishing == "function" && typeof e.stopPublishing == "function";
      }, vi = function(e) {
        const t = e.getProcedureMap().getProcedures().filter((o) => !o.getReturnTypes()).map((o) => [o.getName(), o.getParameters().map((i) => i.getName()), !1]);
        e.getBlocksByType("procedures_defnoreturn", !1).forEach((o) => {
          !hs(o) && To(o) && t.push(o.getProcedureDef());
        });
        const s = e.getProcedureMap().getProcedures().filter((o) => !!o.getReturnTypes()).map((o) => [o.getName(), o.getParameters().map((i) => i.getName()), !0]);
        return e.getBlocksByType("procedures_defreturn", !1).forEach((o) => {
          !hs(o) && To(o) && s.push(o.getProcedureDef());
        }), t.sort(Bc), s.sort(Bc), [t, s];
      }, Bc = function(e, t) {
        return e[0].localeCompare(t[0], void 0, { sensitivity: "base" });
      }, n.findLegalName$$module$build$src$core$procedures = function(e, t) {
        if (t.isInFlyout) return e;
        for (e = e || n.Msg$$module$build$src$core$msg.UNNAMED_KEY || "unnamed"; !l$(e, t.workspace, t); ) {
          const s = e.match(/^(.*?)(\d+)$/);
          e = s ? s[1] + (parseInt(s[2]) + 1) : e + "2";
        }
        return e;
      }, l$ = function(e, t, s) {
        return !xc(e, t, s);
      }, xc = function(e, t, s) {
        for (const o of t.getAllBlocks(!1)) if (o !== s && To(o) && n.Names$$module$build$src$core$names.equals(o.getProcedureDef()[0], e)) return !0;
        s = s && hs(s) ? s == null ? void 0 : s.getProcedureModel() : void 0;
        for (const o of t.getProcedureMap().getProcedures()) if (o !== s && n.Names$$module$build$src$core$names.equals(
          o.getName(),
          e
        )) return !0;
        return !1;
      }, n.rename$$module$build$src$core$procedures = function(e) {
        var t = this.getSourceBlock();
        if (!t) throw new he();
        e = e.trim();
        const s = n.findLegalName$$module$build$src$core$procedures(e, t);
        hs(t) && !t.isInsertionMarker() && t.getProcedureModel().setName(s);
        const o = this.getValue();
        if (o !== e && o !== s) for (e = t.workspace.getAllBlocks(!1), t = 0; t < e.length; t++) {
          const i = e[t];
          i.renameProcedure && i.renameProcedure(o, s);
        }
        return s;
      }, c$ = function(e) {
        function t(r, u) {
          for (let E = 0; E < r.length; E++) {
            var h = r[E][0];
            const y = r[E][1], se = n.createElement$$module$build$src$core$utils$xml("block");
            se.setAttribute("type", u), se.setAttribute("gap", "16");
            const Y = n.createElement$$module$build$src$core$utils$xml("mutation");
            for (Y.setAttribute("name", h), se.appendChild(Y), h = 0; h < y.length; h++) {
              const Le = n.createElement$$module$build$src$core$utils$xml("arg");
              Le.setAttribute("name", y[h]), Y.appendChild(Le);
            }
            s.push(se);
          }
        }
        const s = [];
        if (q.procedures_defnoreturn) {
          var o = n.createElement$$module$build$src$core$utils$xml("block");
          o.setAttribute("type", "procedures_defnoreturn"), o.setAttribute("gap", "16");
          var i = n.createElement$$module$build$src$core$utils$xml("field");
          i.setAttribute("name", "NAME"), i.appendChild(n.createTextNode$$module$build$src$core$utils$xml(n.Msg$$module$build$src$core$msg.PROCEDURES_DEFNORETURN_PROCEDURE)), o.appendChild(i), s.push(o);
        }
        return q.procedures_defreturn && (o = n.createElement$$module$build$src$core$utils$xml("block"), o.setAttribute("type", "procedures_defreturn"), o.setAttribute("gap", "16"), i = n.createElement$$module$build$src$core$utils$xml("field"), i.setAttribute("name", "NAME"), i.appendChild(n.createTextNode$$module$build$src$core$utils$xml(n.Msg$$module$build$src$core$msg.PROCEDURES_DEFRETURN_PROCEDURE)), o.appendChild(i), s.push(o)), q.procedures_ifreturn && (o = n.createElement$$module$build$src$core$utils$xml("block"), o.setAttribute("type", "procedures_ifreturn"), o.setAttribute("gap", "16"), s.push(o)), s.length && s[s.length - 1].setAttribute("gap", "24"), e = vi(e), t(e[0], "procedures_callnoreturn"), t(e[1], "procedures_callreturn"), s;
      }, er = function(e) {
        return Fc(e, !1);
      }, Fc = function(e, t = !0) {
        function s(i, r) {
          for (const [u, h] of i) o.push({ kind: "block", type: r, gap: 16, extraState: { name: u, params: h } });
        }
        if (t) return fe("The XML return value of Blockly.Procedures.flyoutCategory()", "v12", "v13", "the same method, but handle a return type of FlyoutItemInfo[] (JSON) instead."), c$(e);
        const o = [];
        return q.procedures_defnoreturn && o.push({ kind: "block", type: "procedures_defnoreturn", gap: 16, fields: { NAME: n.Msg$$module$build$src$core$msg.PROCEDURES_DEFNORETURN_PROCEDURE } }), q.procedures_defreturn && o.push({ kind: "block", type: "procedures_defreturn", gap: 16, fields: { NAME: n.Msg$$module$build$src$core$msg.PROCEDURES_DEFRETURN_PROCEDURE } }), q.procedures_ifreturn && o.push({ kind: "block", type: "procedures_ifreturn", gap: 16 }), o.length && (o[o.length - 1].gap = 24), e = vi(e), s(e[0], "procedures_callnoreturn"), s(e[1], "procedures_callreturn"), o;
      }, Uc = function(e) {
        var t = [], s = e.getBlocksByType("procedures_mutatorarg", !1);
        for (let r = 0, u; u = s[r]; r++) t.push(u.getFieldValue("NAME"));
        s = n.createElement$$module$build$src$core$utils$xml("xml");
        const o = n.createElement$$module$build$src$core$utils$xml("block");
        o.setAttribute("type", "procedures_mutatorarg");
        const i = n.createElement$$module$build$src$core$utils$xml("field");
        i.setAttribute("name", "NAME"), t = kn(
          n.DEFAULT_ARG$$module$build$src$core$procedures,
          t
        ), t = n.createTextNode$$module$build$src$core$utils$xml(t), i.appendChild(t), o.appendChild(i), s.appendChild(o), e.updateToolbox(s);
      }, Hc = function(e) {
        if (ni(e) && e.bubbleType === "mutator" && e.isOpen && e.blockId) {
          e = mt(e.workspaceId).getBlockById(e.blockId);
          var t = e.type;
          (t === "procedures_defnoreturn" || t === "procedures_defreturn") && (e = e.getIcon(n.MutatorIcon$$module$build$src$core$icons$mutator_icon.TYPE).getWorkspace(), Uc(e), e.addChangeListener(u$));
        }
      }, u$ = function(e) {
        (no(e) || oi(e) || ss(e) || ii(e)) && (e = mt(e.workspaceId), Uc(e));
      }, Gc = function(e, t) {
        return t.getAllBlocks(!1).filter((s) => a$(s, e) || Lh(s) && n.Names$$module$build$src$core$names.equals(s.getProcedureCall(), e));
      }, a$ = function(e, t) {
        return hs(e) && !e.isProcedureDef() && e.getProcedureModel() && n.Names$$module$build$src$core$names.equals(e.getProcedureModel().getName(), t);
      }, n.mutateCallers$$module$build$src$core$procedures = function(e) {
        const t = Ce();
        var s = e.getProcedureDef()[0];
        const o = e.mutationToDom(!0);
        e = Gc(s, e.workspace);
        for (let r = 0, u; u = e[r]; r++) {
          s = (s = u.mutationToDom()) && _o(s), u.domToMutation && u.domToMutation(o);
          var i = u.mutationToDom();
          i = i && _o(i), s !== i && (n.setRecordUndo$$module$build$src$core$events$utils(!1), k(new (L(m.BLOCK_CHANGE))(u, "mutation", null, s, i)), n.setRecordUndo$$module$build$src$core$events$utils(t));
        }
      }, n.getDefinition$$module$build$src$core$procedures = function(e, t) {
        for (const s of t.getAllBlocks(!1)) if (hs(s) && s.isProcedureDef() && n.Names$$module$build$src$core$names.equals(s.getProcedureModel().getName(), e) || To(s) && n.Names$$module$build$src$core$names.equals(s.getProcedureDef()[0], e)) return s;
        return null;
      }, tr = function(e) {
        return e.isDynamic;
      }, h$ = function(e) {
        return e.pathDown !== void 0 && e.pathUp !== void 0;
      }, d$ = function(e) {
        return e.pathLeft !== void 0 && e.pathRight !== void 0;
      }, Li = function(e, t) {
        c(f.RENDERER, e, t);
      }, $$ = function(e) {
        Oe(f.RENDERER, e);
      }, Vc = function(e, t, s) {
        return e = new (He(f.RENDERER, e))(e), e.init(t, s), e;
      }, sr = function(e) {
        vs(e.getTargetWorkspace(), void 0, "String");
      }, or = function(e) {
        vs(e.getTargetWorkspace(), void 0, "Number");
      }, ir = function(e) {
        vs(e.getTargetWorkspace(), void 0, "Colour");
      }, nr = function(e) {
        return Wc(e, !1);
      }, Wc = function(e, t = !0) {
        return q.variables_set_dynamic || q.variables_get_dynamic || console.warn("There are no dynamic variable blocks, but there is a dynamic variable category."), t ? (fe("The XML return value of Blockly.VariablesDynamic.flyoutCategory()", "v12", "v13", "the same method, but handle a return type of FlyoutItemInfo[] (JSON) instead."), p$(e)) : (e.registerButtonCallback("CREATE_VARIABLE_STRING", sr), e.registerButtonCallback("CREATE_VARIABLE_NUMBER", or), e.registerButtonCallback("CREATE_VARIABLE_COLOUR", ir), [
          { kind: "button", text: n.Msg$$module$build$src$core$msg.NEW_STRING_VARIABLE, callbackkey: "CREATE_VARIABLE_STRING" },
          { kind: "button", text: n.Msg$$module$build$src$core$msg.NEW_NUMBER_VARIABLE, callbackkey: "CREATE_VARIABLE_NUMBER" },
          { kind: "button", text: n.Msg$$module$build$src$core$msg.NEW_COLOUR_VARIABLE, callbackkey: "CREATE_VARIABLE_COLOUR" },
          ...An(e, e.getVariableMap().getAllVariables(), !1, "variables_get_dynamic", "variables_set_dynamic")
        ]);
      }, p$ = function(e) {
        let t = [], s = document.createElement("button");
        return s.setAttribute("text", n.Msg$$module$build$src$core$msg.NEW_STRING_VARIABLE), s.setAttribute("callbackKey", "CREATE_VARIABLE_STRING"), t.push(s), s = document.createElement("button"), s.setAttribute("text", n.Msg$$module$build$src$core$msg.NEW_NUMBER_VARIABLE), s.setAttribute("callbackKey", "CREATE_VARIABLE_NUMBER"), t.push(s), s = document.createElement("button"), s.setAttribute("text", n.Msg$$module$build$src$core$msg.NEW_COLOUR_VARIABLE), s.setAttribute("callbackKey", "CREATE_VARIABLE_COLOUR"), t.push(s), e.registerButtonCallback("CREATE_VARIABLE_STRING", sr), e.registerButtonCallback("CREATE_VARIABLE_NUMBER", or), e.registerButtonCallback("CREATE_VARIABLE_COLOUR", ir), e = Xc(e), t = t.concat(e);
      }, Xc = function(e) {
        e = e.getVariableMap().getAllVariables();
        const t = [];
        if (e.length > 0) {
          if (q.variables_set_dynamic) {
            var s = e[e.length - 1];
            const o = n.createElement$$module$build$src$core$utils$xml("block");
            o.setAttribute("type", "variables_set_dynamic"), o.setAttribute("gap", "24"), o.appendChild(Ls(s)), t.push(o);
          }
          if (q.variables_get_dynamic) {
            e.sort(Eo);
            for (let o = 0, i; i = e[o]; o++) s = n.createElement$$module$build$src$core$utils$xml("block"), s.setAttribute("type", "variables_get_dynamic"), s.setAttribute("gap", "8"), s.appendChild(Ls(i)), t.push(s);
          }
        }
        return t;
      }, rr = function(e, t) {
        const s = e.toCopyData();
        return sn = s, on = $o(e) && e.workspace instanceof we ? e.workspace : null, nl = t, s;
      }, lr = function() {
        return sn;
      }, g$ = function(e) {
        sn = e;
      }, cr = function() {
        return on;
      }, _$ = function(e) {
        on = e;
      }, zc = function() {
        return nl;
      }, m$ = function(e) {
        nl = e;
      }, ds = function(e, t, s) {
        return e && t ? Yc(e, t, s) : sn && on ? Yc(sn, on, nl) : null;
      }, Yc = function(e, t, s) {
        let o;
        t = t.isMutator ? t : (o = t.options.parentWorkspace) != null ? o : t;
        let i, r;
        return (r = (i = lt(f.PASTER, e.paster, !1)) == null ? void 0 : i.paste(e, t, s)) != null ? r : null;
      }, Ai = function(e) {
        return e && typeof e.toCopyData == "function";
      }, Kc = function() {
        Z.registry.register({ name: pt.ESCAPE, preconditionFn(e) {
          return !e.isReadOnly();
        }, callback(e) {
          return e.hideChaff(), !0;
        }, keyCodes: [de.ESC] });
      }, jc = function() {
        Z.registry.register({ name: pt.DELETE, preconditionFn(e, t) {
          return t = t.focusedNode, !e.isReadOnly() && t != null && st(t) && t.isDeletable() && !e.isDragging() && !n.getFocusManager$$module$build$src$core$focus_manager().ephemeralFocusTaken();
        }, callback(e, t, s, o) {
          return t.preventDefault(), e = o.focusedNode, e instanceof z ? e.checkAndDelete() : st(e) && e.isDeletable() && (n.setGroup$$module$build$src$core$events$utils(!0), e.dispose(), n.setGroup$$module$build$src$core$events$utils(!1)), !0;
        }, keyCodes: [de.DELETE, de.BACKSPACE] });
      }, ur = function(e) {
        return Ai(e) && st(e) && No(e) ? e.isCopyable ? e.isCopyable() : e instanceof z || e instanceof jt ? e.isOwnDeletable() && e.isOwnMovable() : e.isDeletable() && e.isMovable() : !1;
      }, Jc = function(e) {
        return ur(e) && st(e) && e.isDeletable();
      }, qc = function() {
        const e = Z.registry.createSerializedKey(de.C, [de.CTRL_CMD]);
        Z.registry.register({ name: pt.COPY, preconditionFn(t, s) {
          return s = s.focusedNode, t = t.isFlyout ? t.targetWorkspace : t, !!s && !!t && !t.isDragging() && !n.getFocusManager$$module$build$src$core$focus_manager().ephemeralFocusTaken() && ur(s);
        }, callback(t, s, o, i) {
          return s.preventDefault(), s = i.focusedNode, !s || !Ai(s) || !ur(s) || (t = t.isFlyout ? t.targetWorkspace : t, !t) ? !1 : (s.workspace.isFlyout || t.hideChaff(), t = No(s) && s.workspace == t ? s.getRelativeToSurfaceXY() : void 0, !!rr(s, t));
        }, keyCodes: [e] });
      }, Zc = function() {
        const e = Z.registry.createSerializedKey(de.X, [de.CTRL_CMD]);
        Z.registry.register({ name: pt.CUT, preconditionFn(t, s) {
          return s = s.focusedNode, !!s && !t.isReadOnly() && !t.isDragging() && !n.getFocusManager$$module$build$src$core$focus_manager().ephemeralFocusTaken() && Jc(s);
        }, callback(t, s, o, i) {
          return t = i.focusedNode, !t || !Jc(t) || !Ai(t) ? !1 : (s = No(t) ? t.getRelativeToSurfaceXY() : void 0, s = rr(t, s), t instanceof z ? t.checkAndDelete() : st(t) && t.dispose(), !!s);
        }, keyCodes: [e] });
      }, Qc = function() {
        const e = Z.registry.createSerializedKey(de.V, [de.CTRL_CMD]);
        Z.registry.register({ name: pt.PASTE, preconditionFn() {
          var t = cr();
          return !t || !t.rendered ? !1 : (t = t.isFlyout ? t.targetWorkspace : t, !!lr() && !!t && !t.isReadOnly() && !t.isDragging() && !n.getFocusManager$$module$build$src$core$focus_manager().ephemeralFocusTaken());
        }, callback(t, s) {
          if (t = lr(), !t) return !1;
          var o = cr();
          if (!o || (o = o.isFlyout ? o.targetWorkspace : o, !o || o.isReadOnly())) return !1;
          if (s instanceof PointerEvent) return s = pi(
            o,
            new I(s.clientX, s.clientY)
          ), !!ds(t, o, s);
          if (s = zc(), !s) return !!ds(t, o);
          const { left: i, top: r, width: u, height: h } = o.getMetricsManager().getViewMetrics(!0);
          return new M(r, r + h, i, i + u).contains(s.x, s.y) ? !!ds(t, o) : (s = new I(i + u / 2, r + h / 2), !!ds(t, o, s));
        }, keyCodes: [e] });
      }, eu = function() {
        const e = Z.registry.createSerializedKey(de.Z, [de.CTRL_CMD]);
        Z.registry.register({
          name: pt.UNDO,
          preconditionFn(t) {
            return !t.isReadOnly() && !t.isDragging() && !n.getFocusManager$$module$build$src$core$focus_manager().ephemeralFocusTaken();
          },
          callback(t, s) {
            return t.hideChaff(), t.undo(!1), s.preventDefault(), !0;
          },
          keyCodes: [e]
        });
      }, tu = function() {
        const e = Z.registry.createSerializedKey(de.Z, [de.CTRL_CMD, de.SHIFT]), t = Z.registry.createSerializedKey(de.Y, [de.CTRL]);
        Z.registry.register({ name: pt.REDO, preconditionFn(s) {
          return !s.isDragging() && !s.isReadOnly() && !n.getFocusManager$$module$build$src$core$focus_manager().ephemeralFocusTaken();
        }, callback(s, o) {
          return s.hideChaff(), s.undo(!0), o.preventDefault(), !0;
        }, keyCodes: [e, t] });
      }, su = function() {
        const e = Z.registry.createSerializedKey(de.ENTER, [de.CTRL_CMD]);
        Z.registry.register({ name: pt.MENU, preconditionFn: (t) => !t.isDragging(), callback: (t, s) => {
          if (t = n.getFocusManager$$module$build$src$core$focus_manager().getFocusedNode(), Pc(t)) {
            t.showContextMenu(s);
            let o;
            return (o = mc()) == null || o.highlightNext(), !0;
          }
          return !1;
        }, keyCodes: [e] });
      }, ou = function() {
        Kc(), jc(), qc(), Zc(), Qc(), eu(), tu(), su();
      }, iu = function(e) {
        const t = e.saveState();
        return e.getParameters().length && (t.parameters = e.getParameters().map((s) => s.saveState())), t;
      }, nu = function(e, t, s, o) {
        if (e = e.loadState(s, o), !s.parameters) return e;
        for (const [i, r] of s.parameters.entries()) e.insertParameter(t.loadState(r, o), i);
        return e;
      }, T$ = function(e) {
        const t = /* @__PURE__ */ Object.create(null), s = io(f.SERIALIZER, !0);
        for (const o in s) {
          let i;
          const r = (i = s[o]) == null ? void 0 : i.save(e);
          r && (t[o] = r);
        }
        return t;
      }, E$ = function(e, t, { recordUndo: s = !1 } = {}) {
        var o = io(f.SERIALIZER, !0);
        if (o) {
          o = Object.entries(o).sort((r, u) => u[1].priority - r[1].priority);
          var i = Ce();
          n.setRecordUndo$$module$build$src$core$events$utils(s), (s = n.getGroup$$module$build$src$core$events$utils()) || n.setGroup$$module$build$src$core$events$utils(!0), Bt(), t instanceof we && t.setResizesEnabled(!1);
          for (const [, r] of o.reverse()) {
            let u;
            (u = r) == null || u.clear(t);
          }
          for (const [r, u] of o.reverse()) if (e[r]) {
            let h;
            (h = u) == null || h.load(e[r], t);
          }
          t instanceof we && t.setResizesEnabled(!0), xt(), k(new (L(m.FINISHED_LOADING))(t)), n.setGroup$$module$build$src$core$events$utils(s), n.setRecordUndo$$module$build$src$core$events$utils(i);
        }
      }, f$ = function(e, t) {
        let s = null;
        s = typeof e == "string" ? document.getElementById(e) || document.querySelector(e) : e;
        var o;
        if (!document.contains(s) && document !== ((o = s) == null ? void 0 : o.ownerDocument)) throw Error("Error: container is not in current document");
        e = new Ct(t || {}), o = document.createElement("div"), R(o, "injectionDiv"), t != null && t.rtl && R(o, "blocklyRTL"), s.appendChild(o), t = b$(o, e);
        const i = I$(o, t, e);
        return S$(i), a(i), ys(i), o.addEventListener("focusin", function() {
          a(i);
        }), w(o, "keydown", null, hi), i;
      }, b$ = function(e, t) {
        e.setAttribute("dir", "LTR"), pl(t.hasCss, t.pathToMedia);
        const s = b(g.SVG, { xmlns: wi, "xmlns:html": xs, "xmlns:xlink": Xe, version: "1.1", class: "blocklySvg" }, e), o = b(
          g.DEFS,
          {},
          s
        ), i = String(Math.random()).substring(2);
        return t.gridPattern = ba.createDom(i, t.gridOptions, o, e), s;
      }, I$ = function(e, t, s) {
        s.parentWorkspace = null, s = new we(s);
        const o = s.options;
        s.scale = o.zoomOptions.startScale, t.appendChild(s.createDom("blocklyMainBackground", e));
        var i = s.getRenderer().getClassName();
        return i && R(e, i), (i = s.getTheme().getClassName()) && R(e, i), !o.hasCategories && o.languageTree && (e = s.addFlyout(g.SVG), Pt(e, t)), o.hasTrashcan && s.addTrashcan(), o.zoomOptions && o.zoomOptions.controls && s.addZoomControls(), s.getThemeManager().subscribe(t, "workspaceBackgroundColour", "background-color"), s.translate(0, 0), s.addChangeListener(wc(s)), ys(s), ac(), Dn(), ec(), s;
      }, S$ = function(e) {
        const t = e.options;
        var s = e.getParentSvg();
        if (w(s.parentNode, "contextmenu", null, function(o) {
          Rs(o) || o.preventDefault();
        }), s = w(window, "resize", null, function() {
          Ut(), e.hideComponents(!0), jl(), pc(), ys(e), Zn(e);
        }), e.setResizeHandlerWrapper(s), R$(), t.languageTree) {
          s = e.getToolbox();
          const o = e.getFlyout(!0);
          s ? s.init() : o && (o.init(e), o.show(t.languageTree), typeof o.scrollToStart == "function" && o.scrollToStart());
        }
        t.hasTrashcan && e.trashcan.init(), t.zoomOptions && t.zoomOptions.controls && e.zoomControls_.init(), t.moveOptions && t.moveOptions.scrollbars ? (e.scrollbar = new fa(e, t.moveOptions.scrollbars === !0 || !!t.moveOptions.scrollbars.horizontal, t.moveOptions.scrollbars === !0 || !!t.moveOptions.scrollbars.vertical, "blocklyMainWorkspaceScrollbar"), e.scrollbar.resize()) : e.setMetrics({ x: 0.5, y: 0.5 }), t.hasSounds && O$(t.pathToMedia, e);
      }, R$ = function() {
        Qg || (w(document, "scroll", null, function() {
          const e = ns();
          for (let t = 0, s; s = e[t]; t++) s instanceof we && s.updateInverseScreenCTM();
        }), De(document, "touchend", null, Ze), De(
          document,
          "touchcancel",
          null,
          Ze
        )), Qg = !0;
      }, O$ = function(e, t) {
        t = t.getAudioManager(), t.load([`${e}click.mp3`], "click"), t.load([`${e}disconnect.mp3`], "disconnect"), t.load([`${e}delete.mp3`], "delete");
      }, C$ = function(e) {
        if (!e || !e.isSimpleReporter()) return !1;
        let t;
        return (t = e.getFields().next().value) == null ? void 0 : t.isFullBlockField();
      }, ru = function() {
        x.registry.register({ displayText() {
          return n.Msg$$module$build$src$core$msg.UNDO;
        }, preconditionFn(e) {
          return e.workspace.getUndoStack().length > 0 ? "enabled" : "disabled";
        }, callback(e) {
          e.workspace.undo(!1);
        }, scopeType: x.ScopeType.WORKSPACE, id: "undoWorkspace", weight: 1 });
      }, lu = function() {
        x.registry.register({ displayText() {
          return n.Msg$$module$build$src$core$msg.REDO;
        }, preconditionFn(e) {
          return e.workspace.getRedoStack().length > 0 ? "enabled" : "disabled";
        }, callback(e) {
          e.workspace.undo(!0);
        }, scopeType: x.ScopeType.WORKSPACE, id: "redoWorkspace", weight: 2 });
      }, cu = function() {
        x.registry.register({ displayText() {
          return n.Msg$$module$build$src$core$msg.CLEAN_UP;
        }, preconditionFn(e) {
          return e.workspace.isMovable() ? e.workspace.getTopBlocks(!1).length > 1 ? "enabled" : "disabled" : "hidden";
        }, callback(e) {
          e.workspace.cleanUp();
        }, scopeType: x.ScopeType.WORKSPACE, id: "cleanWorkspace", weight: 3 });
      }, uu = function(e, t) {
        function s(r) {
          i--, r.setCollapsed(e), i === 0 && n.setGroup$$module$build$src$core$events$utils(!1);
        }
        let o = 0, i = 0;
        n.setGroup$$module$build$src$core$events$utils(!0);
        for (let r = 0; r < t.length; r++) {
          let u = t[r];
          for (; u; ) i++, setTimeout(s.bind(null, u), o), u = u.getNextBlock(), o += 10;
        }
      }, au = function() {
        x.registry.register({ displayText() {
          return n.Msg$$module$build$src$core$msg.COLLAPSE_ALL;
        }, preconditionFn(e) {
          if (e.workspace.options.collapse) {
            e = e.workspace.getTopBlocks(!1);
            for (let t = 0; t < e.length; t++) {
              let s = e[t];
              for (; s; ) {
                if (!s.isCollapsed()) return "enabled";
                s = s.getNextBlock();
              }
            }
            return "disabled";
          }
          return "hidden";
        }, callback(e) {
          uu(
            !0,
            e.workspace.getTopBlocks(!0)
          );
        }, scopeType: x.ScopeType.WORKSPACE, id: "collapseWorkspace", weight: 4 });
      }, hu = function() {
        x.registry.register({ displayText() {
          return n.Msg$$module$build$src$core$msg.EXPAND_ALL;
        }, preconditionFn(e) {
          if (e.workspace.options.collapse) {
            e = e.workspace.getTopBlocks(!1);
            for (let t = 0; t < e.length; t++) {
              let s = e[t];
              for (; s; ) {
                if (s.isCollapsed()) return "enabled";
                s = s.getNextBlock();
              }
            }
            return "disabled";
          }
          return "hidden";
        }, callback(e) {
          uu(
            !1,
            e.workspace.getTopBlocks(!0)
          );
        }, scopeType: x.ScopeType.WORKSPACE, id: "expandWorkspace", weight: 5 });
      }, du = function(e, t) {
        if (e.isDeletable()) Array.prototype.push.apply(t, e.getDescendants(!1));
        else {
          e = e.getChildren(!1);
          for (let s = 0; s < e.length; s++) du(e[s], t);
        }
      }, ar = function(e) {
        const t = [];
        e = e.getTopBlocks(!0);
        for (let s = 0; s < e.length; s++) du(e[s], t);
        return t;
      }, ki = function(e, t) {
        t ? n.setGroup$$module$build$src$core$events$utils(t) : (n.setGroup$$module$build$src$core$events$utils(!0), t = n.getGroup$$module$build$src$core$events$utils());
        const s = e.shift();
        s && (s.isDeadOrDying() ? ki(e, t) : (s.dispose(!1, !0), setTimeout(ki, 10, e, t))), n.setGroup$$module$build$src$core$events$utils(!1);
      }, $u = function() {
        x.registry.register({
          displayText(e) {
            return e.workspace ? (e = ar(e.workspace).length, e === 1 ? n.Msg$$module$build$src$core$msg.DELETE_BLOCK : n.Msg$$module$build$src$core$msg.DELETE_X_BLOCKS.replace("%1", `${e}`)) : "";
          },
          preconditionFn(e) {
            return e.workspace && ar(e.workspace).length > 0 ? "enabled" : "disabled";
          },
          callback(e) {
            if (e.workspace) {
              e.workspace.cancelCurrentGesture();
              var t = ar(e.workspace);
              t.length < 2 ? ki(t) : Cn(n.Msg$$module$build$src$core$msg.DELETE_ALL_BLOCKS.replace("%1", String(t.length)), function(s) {
                s && ki(t);
              });
            }
          },
          scopeType: x.ScopeType.WORKSPACE,
          id: "workspaceDelete",
          weight: 6
        });
      }, y$ = function() {
        ru(), lu(), cu(), au(), hu(), $u();
      }, pu = function() {
        x.registry.register({
          displayText() {
            return n.Msg$$module$build$src$core$msg.DUPLICATE_BLOCK;
          },
          preconditionFn(e) {
            return e = e.block, !e.isInFlyout && e.isDeletable() && e.isMovable() ? e.isDuplicatable() ? "enabled" : "disabled" : "hidden";
          },
          callback(e) {
            if (e.block) {
              var t = e.block.toCopyData();
              t && ds(t, e.block.workspace);
            }
          },
          scopeType: x.ScopeType.BLOCK,
          id: "blockDuplicate",
          weight: 1
        });
      }, gu = function() {
        x.registry.register({ displayText(e) {
          return e.block.hasIcon(dt.TYPE) ? n.Msg$$module$build$src$core$msg.REMOVE_COMMENT : n.Msg$$module$build$src$core$msg.ADD_COMMENT;
        }, preconditionFn(e) {
          return e = e.block, !e || e.isInFlyout || !e.workspace.options.comments || e.isCollapsed() || !e.isEditable() || !e.hasIcon(dt.TYPE) && C$(e) ? "hidden" : "enabled";
        }, callback(e) {
          (e = e.block) && e.hasIcon(dt.TYPE) ? e.setCommentText(null) : e.setCommentText("");
        }, scopeType: x.ScopeType.BLOCK, id: "blockComment", weight: 2 });
      }, _u = function() {
        x.registry.register({ displayText(e) {
          return e.block.getInputsInline() ? n.Msg$$module$build$src$core$msg.EXTERNAL_INPUTS : n.Msg$$module$build$src$core$msg.INLINE_INPUTS;
        }, preconditionFn(e) {
          if (e = e.block, !e.isInFlyout && e.isMovable() && !e.isCollapsed()) {
            for (let t = 1; t < e.inputList.length; t++) if (!(e.inputList[t - 1] instanceof cl || e.inputList[t] instanceof cl)) return "enabled";
          }
          return "hidden";
        }, callback(e) {
          e.block.setInputsInline(!e.block.getInputsInline());
        }, scopeType: x.ScopeType.BLOCK, id: "blockInline", weight: 3 });
      }, mu = function() {
        x.registry.register({
          displayText(e) {
            return e.block.isCollapsed() ? n.Msg$$module$build$src$core$msg.EXPAND_BLOCK : n.Msg$$module$build$src$core$msg.COLLAPSE_BLOCK;
          },
          preconditionFn(e) {
            return e = e.block, !e.isInFlyout && e.isMovable() && e.workspace.options.collapse ? "enabled" : "hidden";
          },
          callback(e) {
            e.block.setCollapsed(!e.block.isCollapsed());
          },
          scopeType: x.ScopeType.BLOCK,
          id: "blockCollapseExpand",
          weight: 4
        });
      }, Tu = function() {
        x.registry.register({
          displayText(e) {
            return e.block.hasDisabledReason(ot) ? n.Msg$$module$build$src$core$msg.ENABLE_BLOCK : n.Msg$$module$build$src$core$msg.DISABLE_BLOCK;
          },
          preconditionFn(e) {
            if (e = e.block, !e.isInFlyout && e.workspace.options.disable && e.isEditable()) {
              var t = e.getDisabledReasons();
              return t = t.size > (t.has(ot) ? 1 : 0), e.getInheritedDisabled() || t ? "disabled" : "enabled";
            }
            return "hidden";
          },
          callback(e) {
            e = e.block;
            const t = n.getGroup$$module$build$src$core$events$utils();
            t || n.setGroup$$module$build$src$core$events$utils(!0), e.setDisabledReason(!e.hasDisabledReason(ot), ot), n.setGroup$$module$build$src$core$events$utils(t);
          },
          scopeType: x.ScopeType.BLOCK,
          id: "blockDisable",
          weight: 5
        });
      }, Eu = function() {
        x.registry.register({
          displayText(e) {
            var t = e.block;
            return e = t.getDescendants(!1).length, (t = t.getNextBlock()) && (e -= t.getDescendants(!1).length), e === 1 ? n.Msg$$module$build$src$core$msg.DELETE_BLOCK : n.Msg$$module$build$src$core$msg.DELETE_X_BLOCKS.replace("%1", `${e}`);
          },
          preconditionFn(e) {
            return !e.block.isInFlyout && e.block.isDeletable() ? "enabled" : "hidden";
          },
          callback(e) {
            e.block && e.block.checkAndDelete();
          },
          scopeType: x.ScopeType.BLOCK,
          id: "blockDelete",
          weight: 6
        });
      }, fu = function() {
        x.registry.register({ displayText() {
          return n.Msg$$module$build$src$core$msg.HELP;
        }, preconditionFn(e) {
          return e = e.block, (typeof e.helpUrl == "function" ? e.helpUrl() : e.helpUrl) ? "enabled" : "hidden";
        }, callback(e) {
          e.block.showHelp();
        }, scopeType: x.ScopeType.BLOCK, id: "blockHelp", weight: 7 });
      }, bu = function() {
        x.registry.register({
          displayText: () => n.Msg$$module$build$src$core$msg.REMOVE_COMMENT,
          preconditionFn(e) {
            let t;
            return (t = e.comment) != null && t.isDeletable() ? "enabled" : "hidden";
          },
          callback(e) {
            n.setGroup$$module$build$src$core$events$utils(!0);
            let t;
            (t = e.comment) == null || t.dispose(), n.setGroup$$module$build$src$core$events$utils(!1);
          },
          scopeType: x.ScopeType.COMMENT,
          id: "commentDelete",
          weight: 6
        });
      }, Iu = function() {
        x.registry.register({
          displayText: () => n.Msg$$module$build$src$core$msg.DUPLICATE_COMMENT,
          preconditionFn(e) {
            let t;
            return (t = e.comment) != null && t.isMovable() ? "enabled" : "hidden";
          },
          callback(e) {
            if (e.comment) {
              var t = e.comment.toCopyData();
              t && ds(t, e.comment.workspace);
            }
          },
          scopeType: x.ScopeType.COMMENT,
          id: "commentDuplicate",
          weight: 1
        });
      }, Su = function() {
        x.registry.register({ displayText: () => n.Msg$$module$build$src$core$msg.ADD_COMMENT, preconditionFn: (e) => {
          let t;
          return (t = e.workspace) != null && t.isMutator ? "hidden" : "enabled";
        }, callback: (e, t, s, o) => {
          (e = e.workspace) && (n.setGroup$$module$build$src$core$events$utils(!0), t = new jt(e), t.moveTo(pi(
            e,
            new I(o.x, o.y)
          )), n.getFocusManager$$module$build$src$core$focus_manager().focusNode(t), n.setGroup$$module$build$src$core$events$utils(!1));
        }, scopeType: x.ScopeType.WORKSPACE, id: "commentCreate", weight: 8 });
      }, v$ = function() {
        pu(), gu(), _u(), mu(), Tu(), Eu(), fu();
      }, L$ = function() {
        Iu(), bu(), Su();
      }, Ru = function() {
        y$(), v$();
      }, A$ = function(e) {
        return e && typeof e.paste == "function";
      }, k$ = function(e) {
        return e && typeof e.getSvgRoot == "function";
      }, N$ = function(e) {
        return e.isSelectable();
      }, w$ = function(e) {
        l().hideChaff(e);
      }, $ = $ || {}, $.scope = {}, $.ASSUME_ES5 = !1, $.ASSUME_ES6 = !1, $.ASSUME_ES2020 = !1, $.ASSUME_NO_NATIVE_MAP = !1, $.ASSUME_NO_NATIVE_SET = !1, $.ISOLATE_POLYFILLS = !1, $.FORCE_POLYFILL_PROMISE = !1, $.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1, $.INSTRUMENT_ASYNC_CONTEXT = !0, $.objectCreate = $.ASSUME_ES5 || typeof Object.create == "function" ? Object.create : function(e) {
        var t = function() {
        };
        return t.prototype = e, new t();
      }, $.defineProperty = $.ASSUME_ES5 || typeof Object.defineProperties == "function" ? Object.defineProperty : function(e, t, s) {
        return e == Array.prototype || e == Object.prototype || (e[t] = s.value), e;
      }, $.getGlobal = function(e) {
        e = [typeof globalThis == "object" && globalThis, e, typeof window == "object" && window, typeof self == "object" && self, typeof Y_ == "object" && Y_];
        for (var t = 0; t < e.length; ++t) {
          var s = e[t];
          if (s && s.Math == Math) return s;
        }
        throw Error("Cannot find global object");
      }, $.global = $.ASSUME_ES2020 ? globalThis : $.getGlobal(this), $.IS_SYMBOL_NATIVE = typeof Symbol == "function" && typeof Symbol("x") == "symbol", $.TRUST_ES6_POLYFILLS = !$.ISOLATE_POLYFILLS || $.IS_SYMBOL_NATIVE, $.polyfills = {}, $.propertyToPolyfillSymbol = {}, $.POLYFILL_PREFIX = "$jscp$", $.TYPED_ARRAY_CLASSES = (function() {
        var e = "Int8 Uint8 Uint8Clamped Int16 Uint16 Int32 Uint32 Float32 Float64".split(" ");
        return $.global.BigInt64Array && (e.push("BigInt64"), e.push("BigUint64")), e;
      })(), $.polyfillTypedArrayMethod = function(e, t, s, o) {
        if (t) for (var i = 0; i < $.TYPED_ARRAY_CLASSES.length; i++) {
          var r = $.TYPED_ARRAY_CLASSES[i] + "Array.prototype." + e;
          $.ISOLATE_POLYFILLS ? $.polyfillIsolated(r, t, s, o) : $.polyfillUnisolated(r, t, s, o);
        }
      }, $.polyfill = function(e, t, s, o) {
        t && ($.ISOLATE_POLYFILLS ? $.polyfillIsolated(e, t, s, o) : $.polyfillUnisolated(e, t, s, o));
      }, $.polyfillUnisolated = function(e, t, s, o) {
        for (s = $.global, e = e.split("."), o = 0; o < e.length - 1; o++) {
          var i = e[o];
          if (!(i in s)) return;
          s = s[i];
        }
        e = e[e.length - 1], o = s[e], t = t(o), t != o && t != null && $.defineProperty(s, e, { configurable: !0, writable: !0, value: t });
      }, $.polyfillIsolated = function(e, t, s, o) {
        var i = e.split(".");
        e = i.length === 1, o = i[0], o = !e && o in $.polyfills ? $.polyfills : $.global;
        for (var r = 0; r < i.length - 1; r++) {
          var u = i[r];
          if (!(u in o)) return;
          o = o[u];
        }
        i = i[i.length - 1], s = $.IS_SYMBOL_NATIVE && s === "es6" ? o[i] : null, t = t(s), t != null && (e ? $.defineProperty($.polyfills, i, { configurable: !0, writable: !0, value: t }) : t !== s && ($.propertyToPolyfillSymbol[i] === void 0 && (s = Math.random() * 1e9 >>> 0, $.propertyToPolyfillSymbol[i] = $.IS_SYMBOL_NATIVE ? $.global.Symbol(i) : $.POLYFILL_PREFIX + s + "$" + i), $.defineProperty(o, $.propertyToPolyfillSymbol[i], { configurable: !0, writable: !0, value: t })));
      }, $.getConstructImplementation = function() {
        function e() {
          function s() {
          }
          return Reflect.construct(s, [], function() {
          }), new s() instanceof s;
        }
        if ($.TRUST_ES6_POLYFILLS && typeof Reflect < "u" && Reflect.construct) {
          if (e()) return Reflect.construct;
          var t = Reflect.construct;
          return function(s, o, i) {
            return s = t(s, o), i && Reflect.setPrototypeOf(s, i.prototype), s;
          };
        }
        return function(s, o, i) {
          return i === void 0 && (i = s), i = $.objectCreate(i.prototype || Object.prototype), Function.prototype.apply.call(s, i, o) || i;
        };
      }, $.construct = { valueOf: $.getConstructImplementation }.valueOf(), $.underscoreProtoCanBeSet = function() {
        var e = { a: !0 }, t = {};
        try {
          return t.__proto__ = e, t.a;
        } catch {
        }
        return !1;
      }, $.setPrototypeOf = $.ASSUME_ES6 || $.TRUST_ES6_POLYFILLS && typeof Object.setPrototypeOf == "function" ? Object.setPrototypeOf : $.underscoreProtoCanBeSet() ? function(e, t) {
        if (e.__proto__ = t, e.__proto__ !== t) throw new TypeError(e + " is not extensible");
        return e;
      } : null, $.inherits = function(e, t) {
        if (e.prototype = $.objectCreate(t.prototype), e.prototype.constructor = e, $.ASSUME_ES6 || $.setPrototypeOf) {
          var s = $.setPrototypeOf;
          s(e, t);
        } else for (s in t) if (s != "prototype") if (Object.defineProperties) {
          var o = Object.getOwnPropertyDescriptor(t, s);
          o && Object.defineProperty(e, s, o);
        } else e[s] = t[s];
        e.superClass_ = t.prototype;
      }, $.arrayIteratorImpl = function(e) {
        var t = 0;
        return function() {
          return t < e.length ? { done: !1, value: e[t++] } : { done: !0 };
        };
      }, $.arrayIterator = function(e) {
        return { next: $.arrayIteratorImpl(e) };
      }, $.makeIterator = function(e) {
        var t = typeof Symbol < "u" && Symbol.iterator && e[Symbol.iterator];
        if (t) return t.call(e);
        if (typeof e.length == "number") return $.arrayIterator(e);
        throw Error(String(e) + " is not an iterable or ArrayLike");
      }, $.arrayFromIterator = function(e) {
        for (var t, s = []; !(t = e.next()).done; ) s.push(t.value);
        return s;
      }, $.arrayFromIterable = function(e) {
        return e instanceof Array ? e : $.arrayFromIterator($.makeIterator(e));
      }, $.generator = {}, $.generator.ensureIteratorResultIsObject_ = function(e) {
        if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
      }, $.generator.Context = function() {
        this.isRunning_ = !1, this.yieldAllIterator_ = null, this.yieldResult = void 0, this.nextAddress = 1, this.finallyAddress_ = this.catchAddress_ = 0, this.finallyContexts_ = this.abruptCompletion_ = null;
      }, $.generator.Context.prototype.start_ = function() {
        if (this.isRunning_) throw new TypeError("Generator is already running");
        this.isRunning_ = !0;
      }, $.generator.Context.prototype.stop_ = function() {
        this.isRunning_ = !1;
      }, $.generator.Context.prototype.jumpToErrorHandler_ = function() {
        this.nextAddress = this.catchAddress_ || this.finallyAddress_;
      }, $.generator.Context.prototype.next_ = function(e) {
        this.yieldResult = e;
      }, $.generator.Context.prototype.throw_ = function(e) {
        this.abruptCompletion_ = { exception: e, isException: !0 }, this.jumpToErrorHandler_();
      }, $.generator.Context.prototype.getNextAddress = function() {
        return this.nextAddress;
      }, $.generator.Context.prototype.getNextAddress = $.generator.Context.prototype.getNextAddress, $.generator.Context.prototype.getYieldResult = function() {
        return this.yieldResult;
      }, $.generator.Context.prototype.getYieldResult = $.generator.Context.prototype.getYieldResult, $.generator.Context.prototype.return = function(e) {
        this.abruptCompletion_ = { return: e }, this.nextAddress = this.finallyAddress_;
      }, $.generator.Context.prototype.return = $.generator.Context.prototype.return, $.generator.Context.prototype.jumpThroughFinallyBlocks = function(e) {
        this.abruptCompletion_ = { jumpTo: e }, this.nextAddress = this.finallyAddress_;
      }, $.generator.Context.prototype.jumpThroughFinallyBlocks = $.generator.Context.prototype.jumpThroughFinallyBlocks, $.generator.Context.prototype.yield = function(e, t) {
        return this.nextAddress = t, { value: e };
      }, $.generator.Context.prototype.yield = $.generator.Context.prototype.yield, $.generator.Context.prototype.yieldAll = function(e, t) {
        e = $.makeIterator(e);
        var s = e.next();
        if ($.generator.ensureIteratorResultIsObject_(s), s.done) this.yieldResult = s.value, this.nextAddress = t;
        else return this.yieldAllIterator_ = e, this.yield(s.value, t);
      }, $.generator.Context.prototype.yieldAll = $.generator.Context.prototype.yieldAll, $.generator.Context.prototype.jumpTo = function(e) {
        this.nextAddress = e;
      }, $.generator.Context.prototype.jumpTo = $.generator.Context.prototype.jumpTo, $.generator.Context.prototype.jumpToEnd = function() {
        this.nextAddress = 0;
      }, $.generator.Context.prototype.jumpToEnd = $.generator.Context.prototype.jumpToEnd, $.generator.Context.prototype.setCatchFinallyBlocks = function(e, t) {
        this.catchAddress_ = e, t != null && (this.finallyAddress_ = t);
      }, $.generator.Context.prototype.setCatchFinallyBlocks = $.generator.Context.prototype.setCatchFinallyBlocks, $.generator.Context.prototype.setFinallyBlock = function(e) {
        this.catchAddress_ = 0, this.finallyAddress_ = e || 0;
      }, $.generator.Context.prototype.setFinallyBlock = $.generator.Context.prototype.setFinallyBlock, $.generator.Context.prototype.leaveTryBlock = function(e, t) {
        this.nextAddress = e, this.catchAddress_ = t || 0;
      }, $.generator.Context.prototype.leaveTryBlock = $.generator.Context.prototype.leaveTryBlock, $.generator.Context.prototype.enterCatchBlock = function(e) {
        return this.catchAddress_ = e || 0, e = this.abruptCompletion_.exception, this.abruptCompletion_ = null, e;
      }, $.generator.Context.prototype.enterCatchBlock = $.generator.Context.prototype.enterCatchBlock, $.generator.Context.prototype.enterFinallyBlock = function(e, t, s) {
        s ? this.finallyContexts_[s] = this.abruptCompletion_ : this.finallyContexts_ = [this.abruptCompletion_], this.catchAddress_ = e || 0, this.finallyAddress_ = t || 0;
      }, $.generator.Context.prototype.enterFinallyBlock = $.generator.Context.prototype.enterFinallyBlock, $.generator.Context.prototype.leaveFinallyBlock = function(e, t) {
        if (t = this.finallyContexts_.splice(t || 0)[0], t = this.abruptCompletion_ = this.abruptCompletion_ || t) {
          if (t.isException) return this.jumpToErrorHandler_();
          t.jumpTo != null && this.finallyAddress_ < t.jumpTo ? (this.nextAddress = t.jumpTo, this.abruptCompletion_ = null) : this.nextAddress = this.finallyAddress_;
        } else this.nextAddress = e;
      }, $.generator.Context.prototype.leaveFinallyBlock = $.generator.Context.prototype.leaveFinallyBlock, $.generator.Context.prototype.forIn = function(e) {
        return new $.generator.Context.PropertyIterator(e);
      }, $.generator.Context.prototype.forIn = $.generator.Context.prototype.forIn, $.generator.Context.PropertyIterator = function(e) {
        this.object_ = e, this.properties_ = [];
        for (var t in e) this.properties_.push(t);
        this.properties_.reverse();
      }, $.generator.Context.PropertyIterator.prototype.getNext = function() {
        for (; this.properties_.length > 0; ) {
          var e = this.properties_.pop();
          if (e in this.object_) return e;
        }
        return null;
      }, $.generator.Context.PropertyIterator.prototype.getNext = $.generator.Context.PropertyIterator.prototype.getNext, $.generator.Engine_ = function(e) {
        this.context_ = new $.generator.Context(), this.program_ = e;
      }, $.generator.Engine_.prototype.next_ = function(e) {
        return this.context_.start_(), this.context_.yieldAllIterator_ ? this.yieldAllStep_(this.context_.yieldAllIterator_.next, e, this.context_.next_) : (this.context_.next_(e), this.nextStep_());
      }, $.generator.Engine_.prototype.return_ = function(e) {
        this.context_.start_();
        var t = this.context_.yieldAllIterator_;
        return t ? this.yieldAllStep_("return" in t ? t.return : function(s) {
          return { value: s, done: !0 };
        }, e, this.context_.return) : (this.context_.return(e), this.nextStep_());
      }, $.generator.Engine_.prototype.throw_ = function(e) {
        return this.context_.start_(), this.context_.yieldAllIterator_ ? this.yieldAllStep_(this.context_.yieldAllIterator_.throw, e, this.context_.next_) : (this.context_.throw_(e), this.nextStep_());
      }, $.generator.Engine_.prototype.yieldAllStep_ = function(e, t, s) {
        try {
          var o = e.call(this.context_.yieldAllIterator_, t);
          if ($.generator.ensureIteratorResultIsObject_(o), !o.done) return this.context_.stop_(), o;
          var i = o.value;
        } catch (r) {
          return this.context_.yieldAllIterator_ = null, this.context_.throw_(r), this.nextStep_();
        }
        return this.context_.yieldAllIterator_ = null, s.call(this.context_, i), this.nextStep_();
      }, $.generator.Engine_.prototype.nextStep_ = function() {
        for (; this.context_.nextAddress; ) try {
          var e = this.program_(this.context_);
          if (e) return this.context_.stop_(), { value: e.value, done: !1 };
        } catch (t) {
          this.context_.yieldResult = void 0, this.context_.throw_(t);
        }
        if (this.context_.stop_(), this.context_.abruptCompletion_) {
          if (e = this.context_.abruptCompletion_, this.context_.abruptCompletion_ = null, e.isException) throw e.exception;
          return { value: e.return, done: !0 };
        }
        return { value: void 0, done: !0 };
      }, $.generator.Generator_ = function(e) {
        this.next = function(t) {
          return e.next_(t);
        }, this.throw = function(t) {
          return e.throw_(t);
        }, this.return = function(t) {
          return e.return_(t);
        }, this[Symbol.iterator] = function() {
          return this;
        };
      }, $.generator.createGenerator = function(e, t) {
        return t = new $.generator.Generator_(new $.generator.Engine_(t)), $.setPrototypeOf && e.prototype && $.setPrototypeOf(t, e.prototype), t;
      }, $.asyncExecutePromiseGenerator = function(e) {
        function t(o) {
          return e.next(o);
        }
        function s(o) {
          return e.throw(o);
        }
        return new Promise(function(o, i) {
          function r(u) {
            u.done ? o(u.value) : Promise.resolve(u.value).then(t, s).then(r, i);
          }
          r(e.next());
        });
      }, $.asyncExecutePromiseGeneratorFunction = function(e) {
        return $.asyncExecutePromiseGenerator(e());
      }, $.asyncExecutePromiseGeneratorProgram = function(e) {
        return $.asyncExecutePromiseGenerator(new $.generator.Generator_(new $.generator.Engine_(e)));
      }, $.polyfill("globalThis", function(e) {
        return e || $.global;
      }, "es_2020", "es3"), $.polyfill("Array.prototype.includes", function(e) {
        return e || function(t, s) {
          var o = this;
          o instanceof String && (o = String(o));
          var i = o.length;
          for (s = s || 0, s < 0 && (s = Math.max(s + i, 0)); s < i; s++) {
            var r = o[s];
            if (r === t || Object.is(r, t)) return !0;
          }
          return !1;
        };
      }, "es7", "es3"), $.checkEs6ConformanceViaProxy = function() {
        try {
          var e = {}, t = Object.create(new $.global.Proxy(e, { get: function(s, o, i) {
            return s == e && o == "q" && i == t;
          } }));
          return t.q === !0;
        } catch {
          return !1;
        }
      }, $.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = !1, $.ES6_CONFORMANCE = $.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS && $.checkEs6ConformanceViaProxy(), $.initSymbol = function() {
      }, $.iteratorPrototype = function(e) {
        return e = { next: e }, e[Symbol.iterator] = function() {
          return this;
        }, e;
      }, $.owns = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, $.MapEntry = function() {
      }, $.polyfill("Set.prototype.difference", function(e) {
        return e || function(t) {
          $.checkIsSetInstance(this), $.checkIsSetLike(t);
          var s = $.getSmallerAndLargerSets(this, t);
          t = new Set(this);
          var o = s.smallerSetIterator;
          s = s.largerSet;
          for (var i = o.next(); !i.done; ) s.has(i.value) && t.delete(i.value), i = o.next();
          return t;
        };
      }, "es_next", "es6"), $.checkIsSetLike = function(e) {
        if (typeof e != "object" || e === null || typeof e.size != "number" || e.size < 0 || typeof e.keys != "function" || typeof e.has != "function") throw new TypeError("Argument must be set-like");
      }, $.checkIsValidIterator = function(e) {
        if (typeof e != "object" || e === null || typeof e.next != "function") throw new TypeError("Invalid iterator.");
        return e;
      }, $.getSmallerAndLargerSets = function(e, t) {
        return e.size <= t.size ? { smallerSetIterator: e.keys(), largerSet: t } : { smallerSetIterator: $.checkIsValidIterator(t.keys()), largerSet: e };
      }, $.checkIsSetInstance = function(e) {
        if (!(e instanceof Set)) throw new TypeError("Method must be called on an instance of Set.");
      }, $.iteratorFromArray = function(e, t) {
        if ($.ASSUME_ES6) return e[Symbol.iterator]();
        e instanceof String && (e += "");
        var s = 0, o = !1, i = { next: function() {
          if (!o && s < e.length) {
            var r = s++;
            return { value: t(r, e[r]), done: !1 };
          }
          return o = !0, { done: !0, value: void 0 };
        } };
        return i[Symbol.iterator] = function() {
          return i;
        }, i;
      }, $.polyfill("Array.prototype.values", function(e) {
        return e || function() {
          return $.iteratorFromArray(this, function(t, s) {
            return s;
          });
        };
      }, "es8", "es3"), $.polyfill("Array.prototype.flatMap", function(e) {
        return e || function(t, s) {
          var o = [];
          return Array.prototype.forEach.call(this, function(i, r) {
            i = t.call(s, i, r, this), Array.isArray(i) ? o.push.apply(o, i) : o.push(i);
          }), o;
        };
      }, "es9", "es5"), $.polyfill("Array.prototype.flat", function(e) {
        return e || function(t) {
          t = t === void 0 ? 1 : t;
          var s = [];
          return Array.prototype.forEach.call(this, function(o) {
            Array.isArray(o) && t > 0 ? (o = Array.prototype.flat.call(o, t - 1), s.push.apply(s, o)) : s.push(o);
          }), s;
        };
      }, "es9", "es5"), $.polyfill("Object.entries", function(e) {
        return e || function(t) {
          var s = [], o;
          for (o in t) $.owns(t, o) && s.push([o, t[o]]);
          return s;
        };
      }, "es8", "es3"), $.polyfill("Object.values", function(e) {
        return e || function(t) {
          var s = [], o;
          for (o in t) $.owns(t, o) && s.push(t[o]);
          return s;
        };
      }, "es8", "es3");
      var $s = /* @__PURE__ */ Object.create(null), tm = { typeMap: $s }, hr = /* @__PURE__ */ Object.create(null), We = "default", f = class {
        constructor(e) {
          this.name = e;
        }
        toString() {
          return this.name;
        }
      };
      f.CONNECTION_CHECKER = new f("connectionChecker"), f.CONNECTION_PREVIEWER = new f("connectionPreviewer"), f.CURSOR = new f("cursor"), f.EVENT = new f("event"), f.FIELD = new f("field"), f.INPUT = new f("input"), f.RENDERER = new f("renderer"), f.TOOLBOX = new f("toolbox"), f.THEME = new f("theme"), f.TOOLBOX_ITEM = new f("toolboxItem"), f.FLYOUTS_VERTICAL_TOOLBOX = new f("flyoutsVerticalToolbox"), f.FLYOUTS_HORIZONTAL_TOOLBOX = new f("flyoutsHorizontalToolbox"), f.FLYOUT_INFLATER = new f("flyoutInflater"), f.METRICS_MANAGER = new f("metricsManager"), f.BLOCK_DRAGGER = new f("blockDragger"), f.SERIALIZER = new f("serializer"), f.ICON = new f("icon"), f.PASTER = new f("paster"), f.VARIABLE_MODEL = new f("variableModel"), f.VARIABLE_MAP = new f("variableMap");
      var Ht = { DEFAULT: We, TEST_ONLY: tm };
      Ht.Type = f, Ht.getAllItems = io, Ht.getClass = He, Ht.getClassFromOptions = Ee, Ht.getObject = lt, Ht.hasItem = oo, Ht.register = c, Ht.unregister = Oe;
      var q = /* @__PURE__ */ Object.create(null), sm = 750, M$ = "ontouchstart" in globalThis || !!(globalThis.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!globalThis.navigator || !globalThis.navigator.maxTouchPoints && !globalThis.navigator.msMaxTouchPoints), dr = null, Ps = {
        mousedown: ["pointerdown"],
        mouseenter: ["pointerenter"],
        mouseleave: ["pointerleave"],
        mousemove: ["pointermove"],
        mouseout: ["pointerout"],
        mouseover: ["pointerover"],
        mouseup: ["pointerup", "pointercancel"],
        touchend: ["pointerup"],
        touchcancel: ["pointercancel"]
      }, $r = 0, Bs = { TOUCH_ENABLED: M$, TOUCH_MAP: Ps };
      Bs.checkTouchIdentifier = es, Bs.clearTouchIdentifier = K, Bs.getTouchIdentifierFromEvent = Dt, Bs.longStart = si, Bs.longStop = Ze, Bs.shouldHandleEvent = Ss;
      var Ou, D$, P$, B$, pr, gr, Cu, x$, F$, U$;
      (function(e) {
        function t(o) {
          return s.includes(o.toUpperCase());
        }
        Ou = e;
        const s = Ou.toUpperCase();
        D$ = t("JavaFX"), P$ = t("WebKit"), B$ = t("Gecko") && !P$, pr = t("Android"), e = globalThis.navigator && globalThis.navigator.maxTouchPoints, gr = t("iPad") || t("Macintosh") && e > 0, Cu = t("iPhone") && !gr, x$ = t("Macintosh"), F$ = gr || pr && !t("Mobile") || t("Silk"), U$ = !F$ && (Cu || pr);
      })(globalThis.navigator && globalThis.navigator.userAgent || "");
      var om = Ou, H$ = D$, G$ = B$, V$ = pr, yu = gr, W$ = Cu, _r = x$, X$ = U$, im = {
        ANDROID: V$,
        GECKO: G$,
        IPAD: yu,
        IPHONE: W$,
        JavaFx: H$,
        MAC: _r,
        MOBILE: X$,
        raw: om
      }, z$ = 40, Y$ = 125, Gt = {};
      Gt.bind = De, Gt.conditionalBind = w, Gt.getScrollDeltaPixels = Os, Gt.isRightButton = Ge, Gt.isTargetInput = Rs, Gt.mouseToSvg = ts, Gt.unbind = H;
      var m;
      (function(e) {
        e.BLOCK_CREATE = "create", e.BLOCK_DELETE = "delete", e.BLOCK_CHANGE = "change", e.BLOCK_FIELD_INTERMEDIATE_CHANGE = "block_field_intermediate_change", e.BLOCK_MOVE = "move", e.VAR_CREATE = "var_create", e.VAR_DELETE = "var_delete", e.VAR_RENAME = "var_rename", e.VAR_TYPE_CHANGE = "var_type_change", e.UI = "ui", e.BLOCK_DRAG = "drag", e.SELECTED = "selected", e.CLICK = "click", e.MARKER_MOVE = "marker_move", e.BUBBLE_OPEN = "bubble_open", e.TRASHCAN_OPEN = "trashcan_open", e.TOOLBOX_ITEM_SELECT = "toolbox_item_select", e.THEME_CHANGE = "theme_change", e.VIEWPORT_CHANGE = "viewport_change", e.COMMENT_CREATE = "comment_create", e.COMMENT_DELETE = "comment_delete", e.COMMENT_CHANGE = "comment_change", e.COMMENT_MOVE = "comment_move", e.COMMENT_RESIZE = "comment_resize", e.COMMENT_DRAG = "comment_drag", e.COMMENT_COLLAPSE = "comment_collapse", e.FINISHED_LOADING = "finished_loading";
      })(m || (m = {}));
      var K$ = [m.BLOCK_CREATE, m.BLOCK_MOVE, m.COMMENT_CREATE, m.COMMENT_MOVE], j$ = "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", J$ = { genUid: () => {
        const e = j$.length, t = [];
        for (let s = 0; s < 20; s++) t[s] = j$.charAt(Math.random() * e);
        return t.join("");
      } }, nm = 0, vu = { TEST_ONLY: J$ };
      vu.genUid = Qe, vu.getNextUniqueId = oe;
      var q$ = "", Ni = !0, Lu = 0, Au = "ORPHANED_BLOCK", Vt = [], Z$ = {
        FIRE_QUEUE: Vt,
        enqueueEvent: ri,
        fireNow: lo,
        fireInternal: hn,
        setGroupInternal: dn
      };
      n.disable$$module$build$src$core$events$utils, n.enable$$module$build$src$core$events$utils, n.getGroup$$module$build$src$core$events$utils, n.setGroup$$module$build$src$core$events$utils, n.setRecordUndo$$module$build$src$core$events$utils;
      var wi = "http://www.w3.org/2000/svg", xs = "http://www.w3.org/1999/xhtml", Xe = "http://www.w3.org/1999/xlink", Wt;
      (function(e) {
        e[e.ELEMENT_NODE = 1] = "ELEMENT_NODE", e[e.TEXT_NODE = 3] = "TEXT_NODE", e[e.COMMENT_NODE = 8] = "COMMENT_NODE";
      })(Wt || (Wt = {}));
      var ut = null, ku = 0, Mi = null, Ie = { HTML_NS: xs };
      Ie.NodeType = Wt, Ie.SVG_NS = wi, Ie.XLINK_NS = Xe, Ie.addClass = R, Ie.createSvgElement = b, Ie.getFastTextWidth = gn, Ie.getFastTextWidthWithSizeString = Cs, Ie.getTextWidth = ge, Ie.hasClass = uo, Ie.insertAfter = Pt, Ie.measureFontMetrics = ho, Ie.removeClass = F, Ie.removeClasses = is, Ie.removeNode = G, Ie.setCssTransform = ao, Ie.startTextWidthCache = Bt, Ie.stopTextWidthCache = xt;
      var Se = class {
        static findFocusedNode(e) {
          var t = e.getRootFocusableNode();
          if (!t.canBeFocused()) return null;
          var s = t.getFocusableElement();
          return uo(s, Se.ACTIVE_CLASS_NAME) || uo(s, Se.PASSIVE_CSS_CLASS_NAME) || (t = s.querySelector(this.ACTIVE_FOCUS_NODE_CSS_SELECTOR), (t instanceof HTMLElement || t instanceof SVGElement) && (t = Se.findFocusableNodeFor(t, e))) ? t : (s = s.querySelector(this.PASSIVE_FOCUS_NODE_CSS_SELECTOR), (s instanceof HTMLElement || s instanceof SVGElement) && (e = Se.findFocusableNodeFor(s, e)) ? e : null);
        }
        static findFocusableNodeFor(e, t) {
          if (!e.id || e.id === "null" || t.getNestedTrees().map((i) => Se.findFocusableNodeFor(e, i)).findIndex((i) => !!i) !== -1) return null;
          var s = t.getRootFocusableNode();
          if (s.canBeFocused() && e === s.getFocusableElement()) return s;
          var o;
          return (s = (o = t.lookUpFocusableNode(e.id)) != null ? o : null) ? s : (o = e.parentElement, !s && o ? Se.findFocusableNodeFor(o, t) : null);
        }
      };
      Se.ACTIVE_CLASS_NAME = "blocklyActiveFocus", Se.PASSIVE_CSS_CLASS_NAME = "blocklyPassiveFocus", Se.ACTIVE_FOCUS_NODE_CSS_SELECTOR = `.${Se.ACTIVE_CLASS_NAME}`, Se.PASSIVE_FOCUS_NODE_CSS_SELECTOR = `.${Se.PASSIVE_CSS_CLASS_NAME}`;
      var rm = class {
        constructor(e, t) {
          this.tree = e, this.rootShouldBeAutoTabbable = t;
        }
      }, ye = class {
        constructor(e) {
          this.previouslyFocusedNode = this.focusedNode = null, this.registeredTrees = [], this.isUpdatingFocusedNode = this.recentlyLostAllFocus = this.lockFocusStateChanges = this.currentlyHoldsEphemeralFocus = !1;
          const t = (s) => {
            if (!this.isUpdatingFocusedNode) {
              this.recentlyLostAllFocus = !s;
              var o = null;
              if (s instanceof HTMLElement || s instanceof SVGElement) {
                for (var i of this.registeredTrees) if (o = Se.findFocusableNodeFor(s, i.tree)) break;
              }
              if (o && o.canBeFocused()) {
                s = o.getFocusableTree();
                let r;
                i = (r = this.focusedNode) == null ? void 0 : r.getFocusableTree(), o === s.getRootFocusableNode() && s !== i ? this.focusTree(s) : this.focusNode(o);
              } else this.defocusCurrentFocusedNode();
            }
          };
          e("focusin", (s) => {
            s instanceof FocusEvent && t(document.activeElement);
          }), e("focusout", (s) => {
            s instanceof FocusEvent && t(s.relatedTarget);
          });
        }
        registerTree(e, t = !1) {
          if (this.ensureManagerIsUnlocked(), this.isRegistered(e)) throw Error(`Attempted to re-register already registered tree: ${e}.`);
          this.registeredTrees.push(new rm(e, t));
          const s = e.getRootFocusableNode().getFocusableElement();
          if (!s.id || s.id === "null") throw Error(`Attempting to register a tree with a root element that has an invalid ID: ${e}.`);
          t && (s.tabIndex = 0);
        }
        isRegistered(e) {
          return !!this.lookUpRegistration(e);
        }
        lookUpRegistration(e) {
          let t;
          return (t = this.registeredTrees.find((s) => s.tree === e)) != null ? t : null;
        }
        unregisterTree(e) {
          if (this.ensureManagerIsUnlocked(), !this.isRegistered(e)) throw Error(`Attempted to unregister not registered tree: ${e}.`);
          var t = this.registeredTrees.findIndex((i) => i.tree === e);
          const s = this.registeredTrees[t];
          this.registeredTrees.splice(t, 1), t = Se.findFocusedNode(e);
          const o = e.getRootFocusableNode();
          t && this.removeHighlight(t), this.focusedNode !== t && this.focusedNode !== o || this.updateFocusedNode(null), this.removeHighlight(o), s.rootShouldBeAutoTabbable && e.getRootFocusableNode().getFocusableElement().removeAttribute("tabindex");
        }
        getFocusedTree() {
          let e, t;
          return (t = (e = this.focusedNode) == null ? void 0 : e.getFocusableTree()) != null ? t : null;
        }
        getFocusedNode() {
          return this.focusedNode;
        }
        focusTree(e) {
          if (this.ensureManagerIsUnlocked(), !this.isRegistered(e)) throw Error(`Attempted to focus unregistered tree: ${e}.`);
          const t = Se.findFocusedNode(e), s = e.getRestoredFocusableNode(t);
          e = e.getRootFocusableNode();
          let o;
          this.focusNode((o = s ?? t) != null ? o : e);
        }
        focusNode(e) {
          this.ensureManagerIsUnlocked();
          const t = !this.currentlyHoldsEphemeralFocus;
          t && (this.isUpdatingFocusedNode = !0);
          var s, o = ((s = this.focusedNode) == null ? void 0 : s.getFocusableElement()) !== document.activeElement;
          if (this.focusedNode !== e || o) if (e.canBeFocused()) {
            if (s = e.getFocusableTree(), !this.isRegistered(s)) throw Error(`Attempted to focus unregistered node: ${e}.`);
            o = e.getFocusableElement(), o.id && o.id !== "null" || console.warn("Trying to focus a node that has an invalid ID.");
            var i = Se.findFocusableNodeFor(o, s);
            o = Se.findFocusedNode(s);
            var r = e;
            if (i !== e) {
              r = s.getRestoredFocusableNode(o), e = s.getRootFocusableNode();
              var u;
              r = (u = r ?? o) != null ? u : e;
            }
            e = this.focusedNode, u = e == null ? void 0 : e.getFocusableTree(), e && this.passivelyFocusNode(e, s), s = s.getRootFocusableNode(), o && this.removeHighlight(o), s !== r && this.removeHighlight(s), this.currentlyHoldsEphemeralFocus || this.activelyFocusNode(r, u ?? null), this.updateFocusedNode(r);
          } else console.warn("Trying to focus a node that can't be focused.");
          t && (this.isUpdatingFocusedNode = !1);
        }
        takeEphemeralFocus(e) {
          if (this.ensureManagerIsUnlocked(), this.currentlyHoldsEphemeralFocus) throw Error(`Attempted to take ephemeral focus when it's already held, with new element: ${e}.`);
          this.currentlyHoldsEphemeralFocus = !0, this.focusedNode && this.passivelyFocusNode(this.focusedNode, null), e.focus({ preventScroll: !0 });
          let t = !1;
          return () => {
            if (t) throw Error(`Attempted to finish ephemeral focus twice for element: ${e}.`);
            if (t = !0, this.currentlyHoldsEphemeralFocus = !1, this.focusedNode) {
              this.activelyFocusNode(this.focusedNode, null);
              const s = this.focusedNode;
              setTimeout(() => {
                !this.focusedNode && this.previouslyFocusedNode === s && this.recentlyLostAllFocus && this.focusNode(s);
              }, 0);
            }
          };
        }
        ephemeralFocusTaken() {
          return this.currentlyHoldsEphemeralFocus;
        }
        ensureManagerIsUnlocked() {
          if (this.lockFocusStateChanges) throw Error("FocusManager state changes cannot happen in a tree/node focus/blur callback.");
        }
        updateFocusedNode(e) {
          this.previouslyFocusedNode = this.focusedNode, this.focusedNode = e;
        }
        defocusCurrentFocusedNode() {
          this.focusedNode && !this.currentlyHoldsEphemeralFocus && (this.passivelyFocusNode(this.focusedNode, null), this.updateFocusedNode(null));
        }
        activelyFocusNode(e, t) {
          this.lockFocusStateChanges = !0;
          const s = e.getFocusableTree(), o = e.getFocusableElement();
          let i;
          const r = (i = this.lookUpRegistration(s)) == null ? void 0 : i.rootShouldBeAutoTabbable;
          s !== t && (s.onTreeFocus(e, t), r && (s.getRootFocusableNode().getFocusableElement().tabIndex = -1)), e.onNodeFocus(), this.lockFocusStateChanges = !1, r && e === s.getRootFocusableNode() || o.hasAttribute("tabindex") || (o.tabIndex = -1), this.setNodeToVisualActiveFocus(e), o.focus({ preventScroll: !0 });
        }
        passivelyFocusNode(e, t) {
          this.lockFocusStateChanges = !0;
          const s = e.getFocusableTree();
          if (s !== t) {
            s.onTreeBlur(t);
            let o;
            (o = this.lookUpRegistration(s)) != null && o.rootShouldBeAutoTabbable && (s.getRootFocusableNode().getFocusableElement().tabIndex = 0);
          }
          e.onNodeBlur(), this.lockFocusStateChanges = !1, s !== t && this.setNodeToVisualPassiveFocus(e);
        }
        setNodeToVisualActiveFocus(e) {
          e = e.getFocusableElement(), R(e, ye.ACTIVE_FOCUS_NODE_CSS_CLASS_NAME), F(e, ye.PASSIVE_FOCUS_NODE_CSS_CLASS_NAME);
        }
        setNodeToVisualPassiveFocus(e) {
          e = e.getFocusableElement(), F(e, ye.ACTIVE_FOCUS_NODE_CSS_CLASS_NAME), R(
            e,
            ye.PASSIVE_FOCUS_NODE_CSS_CLASS_NAME
          );
        }
        removeHighlight(e) {
          e = e.getFocusableElement(), F(e, ye.ACTIVE_FOCUS_NODE_CSS_CLASS_NAME), F(e, ye.PASSIVE_FOCUS_NODE_CSS_CLASS_NAME);
        }
        static getFocusManager() {
          return ye.focusManager || (ye.focusManager = new ye(document.addEventListener)), ye.focusManager;
        }
      };
      ye.ACTIVE_FOCUS_NODE_CSS_CLASS_NAME = "blocklyActiveFocus", ye.PASSIVE_FOCUS_NODE_CSS_CLASS_NAME = "blocklyPassiveFocus", ye.focusManager = null, n.getFocusManager$$module$build$src$core$focus_manager;
      var Q$ = {};
      Q$.deepMerge = et;
      var Z = class {
        constructor() {
          this.shortcuts = /* @__PURE__ */ new Map(), this.keyMap = /* @__PURE__ */ new Map(), this.reset();
        }
        reset() {
          this.shortcuts.clear(), this.keyMap.clear();
        }
        register(e, t) {
          if (this.shortcuts.get(e.name) && !t) throw Error(`Shortcut named "${e.name}" already exists.`);
          if (this.shortcuts.set(e.name, e), t = e.keyCodes, t != null && t.length) for (const s of t) this.addKeyMapping(s, e.name, !!e.allowCollision);
        }
        unregister(e) {
          return this.shortcuts.get(e) ? (this.removeAllKeyMappings(e), this.shortcuts.delete(e), !0) : (console.warn(`Keyboard shortcut named "${e}" not found.`), !1);
        }
        addKeyMapping(e, t, s) {
          e = `${e}`;
          const o = this.keyMap.get(e);
          if (o && !s) throw Error(`Shortcut named "${t}" collides with shortcuts "${o}"`);
          o && s ? o.unshift(t) : this.keyMap.set(e, [t]);
        }
        removeKeyMapping(e, t, s) {
          const o = this.keyMap.get(e);
          if (!o) return s || console.warn(`No keyboard shortcut named "${t}" registered with key code "${e}"`), !1;
          const i = o.indexOf(t);
          return i > -1 ? (o.splice(i, 1), o.length === 0 && this.keyMap.delete(e), !0) : (s || console.warn(`No keyboard shortcut named "${t}" registered with key code "${e}"`), !1);
        }
        removeAllKeyMappings(e) {
          for (const t of this.keyMap.keys()) this.removeKeyMapping(t, e, !0);
        }
        setKeyMap(e) {
          this.keyMap.clear();
          for (const t in e) this.keyMap.set(t, e[t]);
        }
        getKeyMap() {
          const e = /* @__PURE__ */ Object.create(null);
          for (const [t, s] of this.keyMap) e[t] = s;
          return e;
        }
        getRegistry() {
          const e = /* @__PURE__ */ Object.create(null);
          for (const [t, s] of this.shortcuts) e[t] = s;
          return et(/* @__PURE__ */ Object.create(null), e);
        }
        onKeyDown(e, t) {
          var s = this.serializeKeyEvent(t);
          if (s = this.getShortcutNamesByKeyCode(s), !s) return !1;
          for (const o of s) {
            s = this.shortcuts.get(o);
            let i;
            if (!s || s.preconditionFn && !s.preconditionFn(e, { focusedNode: (i = n.getFocusManager$$module$build$src$core$focus_manager().getFocusedNode()) != null ? i : void 0 })) continue;
            let r, u, h;
            if ((u = (r = s).callback) != null && u.call(r, e, t, s, { focusedNode: (h = n.getFocusManager$$module$build$src$core$focus_manager().getFocusedNode()) != null ? h : void 0 })) return !0;
          }
          return !1;
        }
        getShortcutNamesByKeyCode(e) {
          let t;
          return ((t = this.keyMap.get(e)) == null ? void 0 : t.slice()) || [];
        }
        getKeyCodesByShortcutName(e) {
          const t = [];
          for (const [s, o] of this.keyMap) o.indexOf(e) > -1 && t.push(s);
          return t;
        }
        serializeKeyEvent(e) {
          let t = "";
          for (const s in Z.modifierKeys) e.getModifierState(s) && (t !== "" && (t += "+"), t += s);
          return t !== "" && e.keyCode ? t += "+" + e.keyCode : e.keyCode && (t = String(e.keyCode)), t;
        }
        checkModifiers(e) {
          for (const t of e) if (!(t in Z.modifierKeys)) throw Error(t + " is not a valid modifier key.");
        }
        createSerializedKey(e, t) {
          let s = "";
          if (t) {
            this.checkModifiers(t);
            for (const o in Z.modifierKeys) t.includes(Z.modifierKeys[o]) && (s !== "" && (s += "+"), s += o);
          }
          return s !== "" && e ? s += "+" + e : e && (s = `${e}`), s;
        }
      };
      Z.registry = new Z(), (function(e) {
        e = e.modifierKeys || (e.modifierKeys = {}), e[e.Shift = 16] = "Shift", e[e.Control = 17] = "Control", e[e.Alt = 18] = "Alt", e[e.Meta = 91] = "Meta";
      })(Z || (Z = {}));
      var Di = /* @__PURE__ */ Object.create(null), ep, tp, Pi = [], sp = { defineBlocksWithJsonArrayInternal: hh }, _e = { TEST_ONLY: sp };
      _e.createBlockDefinitionsFromJsonArray = n.createBlockDefinitionsFromJsonArray$$module$build$src$core$common, _e.defineBlocks = n.defineBlocks$$module$build$src$core$common, _e.defineBlocksWithJsonArray = $l, _e.draggingConnections = Pi, _e.fireSelectedEvent = S, _e.getAllWorkspaces = ns, _e.getBlockTypeCounts = ai, _e.getMainWorkspace = l, _e.getParentContainer = J, _e.getSelected = p, _e.getWorkspaceById = mt, _e.globalShortcutHandler = hi, _e.registerWorkspace = ui, _e.setMainWorkspace = a, _e.setParentContainer = rs, _e.setSelected = T, _e.svgResize = ys, _e.unregisterWorkpace = po;
      var Xt = class {
        constructor() {
          this.workspaceId = void 0, this.isUiEvent = !1, this.type = "", this.group = n.getGroup$$module$build$src$core$events$utils(), this.recordUndo = Ce();
        }
        toJson() {
          return { type: this.type, group: this.group };
        }
        static fromJson(e, t, s) {
          return s.isBlank = !1, s.group = e.group || "", s.workspaceId = t.id, s;
        }
        isNull() {
          return !1;
        }
        run(e) {
        }
        getEventWorkspace_() {
          let e;
          if (this.workspaceId && (e = mt(this.workspaceId)), !e) throw Error("Workspace is null. Event must have been generated from real Blockly events.");
          return e;
        }
      }, me = class extends Xt {
        constructor(e) {
          super(), this.isBlank = !0, this.recordUndo = !1, this.isUiEvent = !0, this.isBlank = typeof e > "u", this.workspaceId = e || "";
        }
      }, Nu = class extends me {
        constructor(e, t, s) {
          t = e ? e.workspace.id : t, t === null && (t = void 0), super(t), this.type = m.CLICK, this.blockId = e ? e.id : void 0, this.targetType = s;
        }
        toJson() {
          const e = super.toJson();
          if (!this.targetType) throw Error("The click target type is undefined. Either pass a block to the constructor, or call fromJson");
          return e.targetType = this.targetType, e.blockId = this.blockId, e;
        }
        static fromJson(e, t, s) {
          return t = me.fromJson(e, t, s ?? new Nu()), t.targetType = e.targetType, t.blockId = e.blockId, t;
        }
      }, wu;
      (function(e) {
        e.BLOCK = "block", e.WORKSPACE = "workspace", e.ZOOM_CONTROLS = "zoom_controls";
      })(wu || (wu = {})), c(f.EVENT, m.CLICK, Nu);
      var op = {};
      op.removeElem = Ve;
      var zt = class {
        constructor(e) {
          this.name = e;
        }
        toString() {
          return this.name;
        }
      };
      zt.POSITIONABLE = new zt("positionable"), zt.DRAG_TARGET = new zt("drag_target"), zt.DELETE_AREA = new zt("delete_area"), zt.AUTOHIDEABLE = new zt("autohideable");
      var Q = class {
        constructor() {
          this.componentData = /* @__PURE__ */ new Map(), this.capabilityToComponentIds = /* @__PURE__ */ new Map();
        }
        addComponent(e, t) {
          const s = e.component.id;
          if (!t && this.componentData.has(s)) {
            var o;
            throw Error('Plugin "' + s + '" with capabilities "' + ((o = this.componentData.get(s)) == null ? void 0 : o.capabilities) + '" already added.');
          }
          for (this.componentData.set(s, e), t = [], o = 0; o < e.capabilities.length; o++) {
            const i = String(e.capabilities[o]).toLowerCase();
            if (t.push(i), this.capabilityToComponentIds.has(i)) {
              let r;
              (r = this.capabilityToComponentIds.get(i)) == null || r.push(s);
            } else this.capabilityToComponentIds.set(i, [s]);
          }
          this.componentData.get(s).capabilities = t;
        }
        removeComponent(e) {
          const t = this.componentData.get(e);
          if (t) {
            for (let s = 0; s < t.capabilities.length; s++) {
              const o = String(t.capabilities[s]).toLowerCase();
              Ve(this.capabilityToComponentIds.get(o), e);
            }
            this.componentData.delete(e);
          }
        }
        addCapability(e, t) {
          if (!this.getComponent(e)) throw Error('Cannot add capability, "' + t + '". Plugin "' + e + '" has not been added to the ComponentManager');
          if (this.hasCapability(e, t)) console.warn('Plugin "' + e + 'already has capability "' + t + '"');
          else {
            t = `${t}`.toLowerCase();
            var s;
            (s = this.componentData.get(e)) == null || s.capabilities.push(t);
            var o;
            (o = this.capabilityToComponentIds.get(t)) == null || o.push(e);
          }
        }
        removeCapability(e, t) {
          if (!this.getComponent(e)) throw Error('Cannot remove capability, "' + t + '". Plugin "' + e + '" has not been added to the ComponentManager');
          this.hasCapability(e, t) ? (t = `${t}`.toLowerCase(), Ve(
            this.componentData.get(e).capabilities,
            t
          ), Ve(this.capabilityToComponentIds.get(t), e)) : console.warn('Plugin "' + e + `doesn't have capability "` + t + '" to remove');
        }
        hasCapability(e, t) {
          return t = `${t}`.toLowerCase(), this.componentData.has(e) && this.componentData.get(e).capabilities.includes(t);
        }
        getComponent(e) {
          let t;
          return (t = this.componentData.get(e)) == null ? void 0 : t.component;
        }
        getComponents(e, t) {
          if (e = `${e}`.toLowerCase(), e = this.capabilityToComponentIds.get(e), !e) return [];
          const s = [];
          if (t) {
            const o = [];
            e.forEach((i) => {
              o.push(this.componentData.get(i));
            }), o.sort(function(i, r) {
              return i.weight - r.weight;
            }), o.forEach(function(i) {
              s.push(i.component);
            });
          } else e.forEach((o) => {
            s.push(this.componentData.get(o).component);
          });
          return s;
        }
      };
      Q.Capability = zt, (function(e) {
        e = e.ComponentWeight || (e.ComponentWeight = {}), e[e.TOOLBOX_WEIGHT = 0] = "TOOLBOX_WEIGHT", e[e.FLYOUT_WEIGHT = 1] = "FLYOUT_WEIGHT", e[e.TRASHCAN_WEIGHT = 2] = "TRASHCAN_WEIGHT", e[e.ZOOM_CONTROLS_WEIGHT = 3] = "ZOOM_CONTROLS_WEIGHT";
      })(Q || (Q = {})), Q.ComponentWeight;
      var Mu = !1, Du = `
.blocklySvg {
  background-color: #fff;
  outline: none;
  overflow: hidden;  /* IE overflows by default. */
  position: absolute;
  display: block;
}

.blocklyWidgetDiv {
  display: none;
  position: absolute;
  z-index: 99999;  /* big value for bootstrap3 compatibility */
}

.injectionDiv {
  height: 100%;
  position: relative;
  overflow: hidden;  /* So blocks in drag surface disappear at edges */
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
}

.blocklyBlockCanvas.blocklyCanvasTransitioning,
.blocklyBubbleCanvas.blocklyCanvasTransitioning {
  transition: transform .5s;
}

.blocklyEmboss {
  filter: var(--blocklyEmbossFilter);
}

.blocklyTooltipDiv {
  background-color: #ffffc7;
  border: 1px solid #ddc;
  box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);
  color: #000;
  display: none;
  font: 9pt sans-serif;
  opacity: .9;
  padding: 2px;
  position: absolute;
  z-index: 100000;  /* big value for bootstrap3 compatibility */
}

.blocklyDropDownDiv {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1000;
  display: none;
  border: 1px solid;
  border-color: #dadce0;
  background-color: #fff;
  border-radius: 2px;
  padding: 4px;
  box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv:focus {
  box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownContent {
  max-height: 300px;  /* @todo: spec for maximum height. */
}

.blocklyDropDownArrow {
  position: absolute;
  left: 0;
  top: 0;
  width: 16px;
  height: 16px;
  z-index: -1;
  background-color: inherit;
  border-color: inherit;
  border-top: 1px solid;
  border-left: 1px solid;
  border-top-left-radius: 4px;
  border-color: inherit;
}

.blocklyHighlighted>.blocklyPath {
  filter: var(--blocklyEmbossFilter);
}

.blocklyHighlightedConnectionPath {
  fill: none;
  stroke: #fc3;
  stroke-width: 4px;
}

.blocklyPathLight {
  fill: none;
  stroke-linecap: round;
  stroke-width: 1;
}

.blocklySelected>.blocklyPathLight {
  display: none;
}

.blocklyDraggable {
  cursor: grab;
  cursor: -webkit-grab;
}

.blocklyDragging {
  cursor: grabbing;
  cursor: -webkit-grabbing;
  /* Drag surface disables events to not block the toolbox, so we have to
   * reenable them here for the cursor values to work. */
  pointer-events: auto;
}

  /* Changes cursor on mouse down. Not effective in Firefox because of
     https://bugzilla.mozilla.org/show_bug.cgi?id=771241 */
.blocklyDraggable:active {
  cursor: grabbing;
  cursor: -webkit-grabbing;
}

.blocklyDragging.blocklyDraggingDelete,
.blocklyDragging.blocklyDraggingDelete .blocklyField {
  cursor: url("<<<PATH>>>/handdelete.cur"), auto;
}

.blocklyDragging>.blocklyPath,
.blocklyDragging>.blocklyPathLight {
  fill-opacity: .8;
  stroke-opacity: .8;
}

.blocklyDragging>.blocklyPathDark {
  display: none;
}

.blocklyDisabledPattern>.blocklyPath {
  fill: var(--blocklyDisabledPattern);
  fill-opacity: .5;
  stroke-opacity: .5;
}

.blocklyDisabled>.blocklyPathLight,
.blocklyDisabled>.blocklyPathDark {
  display: none;
}

.blocklyInsertionMarker>.blocklyPath,
.blocklyInsertionMarker>.blocklyPathLight,
.blocklyInsertionMarker>.blocklyPathDark {
  fill-opacity: .2;
  stroke: none;
}

.blocklyNonEditableField>text {
  pointer-events: none;
}

.blocklyFlyout {
  position: absolute;
  z-index: 20;
}

.blocklyText text {
  cursor: default;
}

/*
  Don't allow users to select text.  It gets annoying when trying to
  drag a block and selected text moves instead.
*/
.blocklySvg text {
  user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  cursor: inherit;
}

.blocklyIconGroup {
  cursor: default;
}

.blocklyIconGroup:not(:hover):not(:focus),
.blocklyIconGroupReadonly {
  opacity: .6;
}

.blocklyIconShape {
  fill: #00f;
  stroke: #fff;
  stroke-width: 1px;
}

.blocklyIconSymbol {
  fill: #fff;
}

.blocklyMinimalBody {
  margin: 0;
  padding: 0;
  height: 100%;
}

.blocklyHtmlInput {
  border: none;
  border-radius: 4px;
  height: 100%;
  margin: 0;
  outline: none;
  padding: 0;
  width: 100%;
  text-align: center;
  display: block;
  box-sizing: border-box;
}

/* Remove the increase and decrease arrows on the field number editor */
input.blocklyHtmlInput[type=number]::-webkit-inner-spin-button,
input.blocklyHtmlInput[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

.blocklyMainBackground {
  stroke-width: 1;
  stroke: #c6c6c6;  /* Equates to #ddd due to border being off-pixel. */
}

.blocklyMutatorBackground {
  fill: #fff;
  stroke: #ddd;
  stroke-width: 1;
}

.blocklyFlyoutBackground {
  fill: #ddd;
  fill-opacity: .8;
}

.blocklyMainWorkspaceScrollbar {
  z-index: 20;
}

.blocklyFlyoutScrollbar {
  z-index: 30;
}

.blocklyScrollbarHorizontal,
.blocklyScrollbarVertical {
  position: absolute;
  outline: none;
}

.blocklyScrollbarBackground {
  opacity: 0;
  pointer-events: none;
}

.blocklyScrollbarHandle {
  fill: #ccc;
}

.blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyScrollbarHandle:hover {
  fill: #bbb;
}

/* Darken flyout scrollbars due to being on a grey background. */
/* By contrast, workspace scrollbars are on a white background. */
.blocklyFlyout .blocklyScrollbarHandle {
  fill: #bbb;
}

.blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,
.blocklyFlyout .blocklyScrollbarHandle:hover {
  fill: #aaa;
}

.blocklyInvalidInput {
  background: #faa;
}

.blocklyVerticalMarker {
  stroke-width: 3px;
  fill: rgba(255,255,255,.5);
  pointer-events: none;
}

.blocklyComputeCanvas {
  position: absolute;
  width: 0;
  height: 0;
}

.blocklyNoPointerEvents {
  pointer-events: none;
}

.blocklyContextMenu {
  border-radius: 4px;
  max-height: 100%;
}

.blocklyDropdownMenu {
  border-radius: 2px;
  padding: 0 !important;
}

.blocklyDropdownMenu .blocklyMenuItem {
  /* 28px on the left for icon or checkbox. */
  padding-left: 28px;
}

/* BiDi override for the resting state. */
.blocklyDropdownMenu .blocklyMenuItemRtl {
  /* Flip left/right padding for BiDi. */
  padding-left: 5px;
  padding-right: 28px;
}

.blocklyWidgetDiv .blocklyMenu {
  user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  background: #fff;
  border: 1px solid transparent;
  box-shadow: 0 0 3px 1px rgba(0,0,0,.3);
  font: normal 13px Arial, sans-serif;
  margin: 0;
  outline: none;
  padding: 4px 0;
  position: absolute;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 100%;
  z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

.blocklyWidgetDiv .blocklyMenu:focus {
  box-shadow: 0 0 6px 1px rgba(0,0,0,.3);
}

.blocklyDropDownDiv .blocklyMenu {
  user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  background: inherit;  /* Compatibility with gapi, reset from goog-menu */
  border: inherit;  /* Compatibility with gapi, reset from goog-menu */
  font: normal 13px "Helvetica Neue", Helvetica, sans-serif;
  outline: none;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 100%;
  z-index: 20000;  /* Arbitrary, but some apps depend on it... */
}

/* State: resting. */
.blocklyMenuItem {
  border: none;
  color: #000;
  cursor: pointer;
  list-style: none;
  margin: 0;
  /* 7em on the right for shortcut. */
  min-width: 7em;
  padding: 6px 15px;
  white-space: nowrap;
}

/* State: disabled. */
.blocklyMenuItemDisabled {
  color: #ccc;
  cursor: inherit;
}

/* State: hover. */
.blocklyMenuItemHighlight {
  background-color: rgba(0,0,0,.1);
}

/* State: selected/checked. */
.blocklyMenuItemSelected .blocklyMenuItemCheckbox {
  background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px;
  float: left;
  margin-left: -24px;
  width: 16px;
  height: 16px;
  position: static;  /* Scroll with the menu. */
  display: block;
}

.blocklyMenuItemRtl .blocklyMenuItemCheckbox {
  float: right;
  margin-right: -24px;
}

.blocklyMenuSeparator {
  background-color: #ccc;
  height: 1px;
  border: 0;
  margin-left: 4px;
  margin-right: 4px;
}

.blocklyBlockDragSurface, .blocklyAnimationLayer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: visible !important;
  z-index: 80;
  pointer-events: none;
}

.blocklyField {
  cursor: default;
}

.blocklyInputField {
  cursor: text;
}

.blocklyDragging .blocklyField,
.blocklyDragging .blocklyIconGroup {
  cursor: grabbing;
}

.blocklyActiveFocus:is(
  .blocklyFlyout,
  .blocklyWorkspace,
  .blocklyField,
  .blocklyPath,
  .blocklyHighlightedConnectionPath,
  .blocklyComment,
  .blocklyBubble,
  .blocklyIconGroup,
  .blocklyTextarea
) {
  outline: none;
}
`, Pu = {};
      Pu.inject = pl, Pu.register = Tt;
      var I = class {
        constructor(e, t) {
          this.x = e, this.y = t;
        }
        clone() {
          return new I(this.x, this.y);
        }
        scale(e) {
          return this.x *= e, this.y *= e, this;
        }
        translate(e, t) {
          return this.x += e, this.y += t, this;
        }
        static equals(e, t) {
          return e === t ? !0 : e && t ? e.x === t.x && e.y === t.y : !1;
        }
        static distance(e, t) {
          const s = e.x - t.x;
          return e = e.y - t.y, Math.sqrt(s * s + e * e);
        }
        static magnitude(e) {
          return Math.sqrt(e.x * e.x + e.y * e.y);
        }
        static difference(e, t) {
          return new I(e.x - t.x, e.y - t.y);
        }
        static sum(e, t) {
          return new I(e.x + t.x, e.y + t.y);
        }
      }, g = class {
        constructor(e) {
          this.tagName = e;
        }
        toString() {
          return this.tagName;
        }
      };
      g.ANIMATE = new g("animate"), g.CIRCLE = new g("circle"), g.CLIPPATH = new g("clipPath"), g.DEFS = new g("defs"), g.FECOMPOSITE = new g("feComposite"), g.FECOMPONENTTRANSFER = new g("feComponentTransfer"), g.FEFLOOD = new g("feFlood"), g.FEFUNCA = new g("feFuncA"), g.FEGAUSSIANBLUR = new g("feGaussianBlur"), g.FEPOINTLIGHT = new g("fePointLight"), g.FESPECULARLIGHTING = new g("feSpecularLighting"), g.FILTER = new g("filter"), g.FOREIGNOBJECT = new g("foreignObject"), g.G = new g("g"), g.IMAGE = new g("image"), g.LINE = new g("line"), g.PATH = new g("path"), g.PATTERN = new g("pattern"), g.POLYGON = new g("polygon"), g.RECT = new g("rect"), g.SVG = new g("svg"), g.TEXT = new g("text"), g.TSPAN = new g("tspan");
      var M = class {
        constructor(e, t, s, o) {
          this.top = e, this.bottom = t, this.left = s, this.right = o;
        }
        static from(e) {
          return new M(e.y, e.y + e.height, e.x, e.x + e.width);
        }
        clone() {
          return new M(this.top, this.bottom, this.left, this.right);
        }
        getHeight() {
          return this.bottom - this.top;
        }
        getWidth() {
          return this.right - this.left;
        }
        getOrigin() {
          return new I(this.left, this.top);
        }
        contains(e, t) {
          return e >= this.left && e <= this.right && t >= this.top && t <= this.bottom;
        }
        intersects(e) {
          return this.left <= e.right && this.right >= e.left && this.bottom >= e.top && this.top <= e.bottom;
        }
        static equals(e, t) {
          return e === t ? !0 : e && t ? e.top === t.top && e.bottom === t.bottom && e.left === t.left && e.right === t.right : !1;
        }
        static createFromPoint(e, t, s) {
          const o = e.x;
          return e = e.y, new M(e, e + s, o, o + t);
        }
      }, D = class {
        constructor(e, t) {
          this.width = e, this.height = t;
        }
        static equals(e, t) {
          return e === t ? !0 : e && t ? e.width === t.width && e.height === t.height : !1;
        }
        static max(e, t) {
          return new D(Math.max(e.width, t.width), Math.max(e.height, t.height));
        }
        static min(e, t) {
          return new D(Math.min(e.width, t.width), Math.min(e.height, t.height));
        }
      }, ip = { getSizeInternal: dh }, ps = { TEST_ONLY: ip };
      ps.getBorderBox = ml, ps.getComputedStyle = Et, ps.getContainerOffsetToScrollInto = El, ps.getPageOffset = ls, ps.getSize = di, ps.getViewportPageOffset = _l, ps.scrollIntoContainerView = Tl;
      var np = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*)?/, rp = /transform:\s*translate(?:3d)?\(\s*([-+\d.e]+)\s*px([ ,]\s*([-+\d.e]+)\s*px)?/, lm = { XY_REGEX: np, XY_STYLE_REGEX: rp }, Fs = { TEST_ONLY: lm };
      Fs.getDocumentScroll = bl, Fs.getInjectionDivXY = _n, Fs.getRelativeXY = $i, Fs.getViewportBBox = fl, Fs.screenToWsCoordinates = pi, Fs.wsToScreenCoordinates = go;
      var ue = class {
        constructor(e, t, s, o, i) {
          this.workspace = e, this.horizontal = t, this.oldHostMetrics = null, this.ratio = 1, this.origin = new I(0, 0), this.startDragHandle = this.handlePosition = this.handleLength = this.scrollbarLength = this.startDragMouse = 0, this.containerVisible = this.isHandleVisible = !0, this.position = new I(0, 0), this.onMouseMoveWrapper_ = this.onMouseUpWrapper_ = null, this.pair = s || !1, this.margin = i !== void 0 ? i : ue.DEFAULT_SCROLLBAR_MARGIN, e = "blocklyScrollbar" + (this.horizontal ? "Horizontal" : "Vertical"), o && (e += " " + o), this.outerSvg = b(g.SVG, { class: e }), o = b(g.G, {}, this.outerSvg), this.svgBackground = b(
            g.RECT,
            { class: "blocklyScrollbarBackground" },
            o
          ), e = Math.floor((ue.scrollbarThickness - 5) / 2), this.svgHandle = b(g.RECT, { class: "blocklyScrollbarHandle", rx: e, ry: e }, o), this.workspace.getThemeManager().subscribe(this.svgHandle, "scrollbarColour", "fill"), this.workspace.getThemeManager().subscribe(this.svgHandle, "scrollbarOpacity", "fill-opacity"), Pt(
            this.outerSvg,
            this.workspace.getParentSvg()
          ), this.setInitialThickness(), t ? (this.lengthAttribute_ = "width", this.positionAttribute_ = "x") : (this.lengthAttribute_ = "height", this.positionAttribute_ = "y"), this.onMouseDownBarWrapper_ = w(this.svgBackground, "pointerdown", this, this.onMouseDownBar), this.onMouseDownHandleWrapper_ = w(this.svgHandle, "pointerdown", this, this.onMouseDownHandle);
        }
        setInitialThickness() {
          const e = ue.scrollbarThickness;
          this.horizontal ? (this.svgBackground.setAttribute("height", String(e)), this.outerSvg.setAttribute("height", String(e)), this.svgHandle.setAttribute("height", String(e - 5)), this.svgHandle.setAttribute("y", "2.5")) : (this.svgBackground.setAttribute("width", String(e)), this.outerSvg.setAttribute("width", String(e)), this.svgHandle.setAttribute("width", String(e - 5)), this.svgHandle.setAttribute("x", "2.5"));
        }
        dispose() {
          this.cleanUp(), H(this.onMouseDownBarWrapper_), H(this.onMouseDownHandleWrapper_), G(this.outerSvg), this.workspace.getThemeManager().unsubscribe(this.svgHandle);
        }
        constrainHandleLength(e) {
          return e = e <= 0 || isNaN(e) ? 0 : Math.min(e, this.scrollbarLength);
        }
        setHandleLength(e) {
          this.handleLength = e, this.svgHandle.setAttribute(this.lengthAttribute_, String(this.handleLength));
        }
        constrainHandlePosition(e) {
          return e = e <= 0 || isNaN(e) ? 0 : Math.min(e, this.scrollbarLength - this.handleLength);
        }
        setHandlePosition(e) {
          this.handlePosition = e, this.svgHandle.setAttribute(
            this.positionAttribute_,
            String(this.handlePosition)
          );
        }
        setScrollbarLength(e) {
          this.scrollbarLength = e, this.outerSvg.setAttribute(this.lengthAttribute_, String(this.scrollbarLength)), this.svgBackground.setAttribute(this.lengthAttribute_, String(this.scrollbarLength));
        }
        setPosition(e, t) {
          this.position.x = e, this.position.y = t, ao(this.outerSvg, "translate(" + (this.position.x + this.origin.x) + "px," + (this.position.y + this.origin.y) + "px)");
        }
        resize(e) {
          !e && (e = this.workspace.getMetrics(), !e) || this.oldHostMetrics && ue.metricsAreEquivalent(e, this.oldHostMetrics) || (this.horizontal ? this.resizeHorizontal(e) : this.resizeVertical(e), this.oldHostMetrics = e, this.updateMetrics());
        }
        requiresViewResize(e) {
          return this.oldHostMetrics ? this.oldHostMetrics.viewWidth !== e.viewWidth || this.oldHostMetrics.viewHeight !== e.viewHeight || this.oldHostMetrics.absoluteLeft !== e.absoluteLeft || this.oldHostMetrics.absoluteTop !== e.absoluteTop : !0;
        }
        resizeHorizontal(e) {
          this.requiresViewResize(e) ? this.resizeViewHorizontal(e) : this.resizeContentHorizontal(e);
        }
        resizeViewHorizontal(e) {
          var t = e.viewWidth - this.margin * 2;
          this.pair && (t -= ue.scrollbarThickness), this.setScrollbarLength(Math.max(0, t)), t = e.absoluteLeft + this.margin, this.pair && this.workspace.RTL && (t += ue.scrollbarThickness), this.setPosition(t, e.absoluteTop + e.viewHeight - ue.scrollbarThickness - this.margin), this.resizeContentHorizontal(e);
        }
        resizeContentHorizontal(e) {
          if (e.viewWidth >= e.scrollWidth) this.setHandleLength(this.scrollbarLength), this.setHandlePosition(0), this.pair || this.setVisible(!1);
          else {
            this.pair || this.setVisible(!0);
            var t = this.scrollbarLength * e.viewWidth / e.scrollWidth;
            t = this.constrainHandleLength(t), this.setHandleLength(t), t = e.scrollWidth - e.viewWidth;
            var s = this.scrollbarLength - this.handleLength;
            e = (e.viewLeft - e.scrollLeft) / t * s, e = this.constrainHandlePosition(e), this.setHandlePosition(e), this.ratio = s / t;
          }
        }
        resizeVertical(e) {
          this.requiresViewResize(e) ? this.resizeViewVertical(e) : this.resizeContentVertical(e);
        }
        resizeViewVertical(e) {
          let t = e.viewHeight - this.margin * 2;
          this.pair && (t -= ue.scrollbarThickness), this.setScrollbarLength(Math.max(0, t)), this.setPosition(this.workspace.RTL ? e.absoluteLeft + this.margin : e.absoluteLeft + e.viewWidth - ue.scrollbarThickness - this.margin, e.absoluteTop + this.margin), this.resizeContentVertical(e);
        }
        resizeContentVertical(e) {
          if (e.viewHeight >= e.scrollHeight) this.setHandleLength(this.scrollbarLength), this.setHandlePosition(0), this.pair || this.setVisible(!1);
          else {
            this.pair || this.setVisible(!0);
            var t = this.scrollbarLength * e.viewHeight / e.scrollHeight;
            t = this.constrainHandleLength(t), this.setHandleLength(t), t = e.scrollHeight - e.viewHeight;
            var s = this.scrollbarLength - this.handleLength;
            e = (e.viewTop - e.scrollTop) / t * s, e = this.constrainHandlePosition(e), this.setHandlePosition(e), this.ratio = s / t;
          }
        }
        isVisible() {
          return this.isHandleVisible;
        }
        setContainerVisible(e) {
          const t = e !== this.containerVisible;
          this.containerVisible = e, t && this.updateDisplay_();
        }
        setVisible(e) {
          if (this.pair) throw Error("Unable to toggle visibility of paired scrollbars.");
          this.setVisibleInternal(e);
        }
        setVisibleInternal(e) {
          const t = e !== this.isVisible();
          this.isHandleVisible = e, t && this.updateDisplay_();
        }
        updateDisplay_() {
          this.containerVisible && this.isVisible() ? this.outerSvg.setAttribute("display", "block") : this.outerSvg.setAttribute("display", "none");
        }
        onMouseDownBar(e) {
          if (this.workspace.markFocused(), K(), this.cleanUp(), Ge(e)) e.stopPropagation();
          else {
            var t = ts(e, this.workspace.getParentSvg(), this.workspace.getInverseScreenCTM());
            t = this.horizontal ? t.x : t.y;
            var s = _n(this.svgHandle);
            s = this.horizontal ? s.x : s.y;
            var o = this.handlePosition, i = this.handleLength * 0.95;
            t <= s ? o -= i : t >= s + this.handleLength && (o += i), this.setHandlePosition(this.constrainHandlePosition(o)), this.updateMetrics(), e.stopPropagation(), e.preventDefault();
          }
        }
        onMouseDownHandle(e) {
          this.workspace.markFocused(), this.cleanUp(), Ge(e) ? e.stopPropagation() : (this.startDragHandle = this.handlePosition, this.startDragMouse = this.horizontal ? e.clientX : e.clientY, this.onMouseUpWrapper_ = w(document, "pointerup", this, this.onMouseUpHandle), this.onMouseMoveWrapper_ = w(
            document,
            "pointermove",
            this,
            this.onMouseMoveHandle
          ), e.stopPropagation(), e.preventDefault());
        }
        onMouseMoveHandle(e) {
          this.setHandlePosition(this.constrainHandlePosition(this.startDragHandle + ((this.horizontal ? e.clientX : e.clientY) - this.startDragMouse))), this.updateMetrics();
        }
        onMouseUpHandle() {
          K(), this.cleanUp();
        }
        cleanUp() {
          this.workspace.hideChaff(!0), this.onMouseUpWrapper_ && (H(this.onMouseUpWrapper_), this.onMouseUpWrapper_ = null), this.onMouseMoveWrapper_ && (H(this.onMouseMoveWrapper_), this.onMouseMoveWrapper_ = null);
        }
        getRatio_() {
          let e = this.handlePosition / (this.scrollbarLength - this.handleLength);
          return isNaN(e) && (e = 0), e;
        }
        updateMetrics() {
          const e = this.getRatio_();
          this.horizontal ? this.workspace.setMetrics({ x: e }) : this.workspace.setMetrics({ y: e });
        }
        set(e, t) {
          this.setHandlePosition(this.constrainHandlePosition(e * this.ratio)), (t || t === void 0) && this.updateMetrics();
        }
        setOrigin(e, t) {
          this.origin = new I(
            e,
            t
          );
        }
        static metricsAreEquivalent(e, t) {
          return e.viewWidth === t.viewWidth && e.viewHeight === t.viewHeight && e.viewLeft === t.viewLeft && e.viewTop === t.viewTop && e.absoluteTop === t.absoluteTop && e.absoluteLeft === t.absoluteLeft && e.scrollWidth === t.scrollWidth && e.scrollHeight === t.scrollHeight && e.scrollLeft === t.scrollLeft && e.scrollTop === t.scrollTop;
        }
      };
      ue.scrollbarThickness = M$ ? 25 : 15, ue.DEFAULT_SCROLLBAR_MARGIN = 0.5;
      var mr = { parseFromString: function() {
        throw Error("DOMParser was not found in the global scope and was not properly injected using injectDependencies");
      } }, Bu = { serializeToString: function() {
        throw Error("XMLSerializer was not foundin the global scope and was not properly injected using injectDependencies");
      } }, { document: Tr, DOMParser: Bi, XMLSerializer: xi } = globalThis;
      Bi && (mr = new Bi()), xi && (Bu = new xi());
      var lp = "https://developers.google.com/blockly/xml", cm = /[\x00-\x09\x0B\x0C\x0E-\x1F]/g, wo = { NAME_SPACE: lp };
      wo.createElement = n.createElement$$module$build$src$core$utils$xml, wo.createTextNode = n.createTextNode$$module$build$src$core$utils$xml, wo.domToText = _o, wo.injectDependencies = $h, wo.textToDom = n.textToDom$$module$build$src$core$utils$xml;
      var xu = "categoryToolbox", cp = "flyoutToolbox", P;
      (function(e) {
        e[e.TOP = 0] = "TOP", e[e.BOTTOM = 1] = "BOTTOM", e[e.LEFT = 2] = "LEFT", e[e.RIGHT = 3] = "RIGHT";
      })(P || (P = {}));
      var up = { hasCategoriesInternal: _h }, gs = {};
      gs.Position = P, gs.TEST_ONLY = up, gs.convertFlyoutDefToJsonArray = gi, gs.convertToolboxDefToJson = mn, gs.hasCategories = Tn, gs.isCategoryCollapsible = En, gs.parseToolboxTree = Sl;
      var Yt;
      (function(e) {
        e[e.TOP = 0] = "TOP", e[e.BOTTOM = 1] = "BOTTOM";
      })(Yt || (Yt = {}));
      var Mo;
      (function(e) {
        e[e.LEFT = 0] = "LEFT", e[e.RIGHT = 1] = "RIGHT";
      })(Mo || (Mo = {}));
      var _s;
      (function(e) {
        e[e.UP = 0] = "UP", e[e.DOWN = 1] = "DOWN";
      })(_s || (_s = {}));
      var Us = {};
      Us.bumpDirection = _s, Us.bumpPositionRect = Sn, Us.getCornerOppositeToolbox = In, Us.getStartPositionRect = bn, Us.horizontalPosition = Mo, Us.verticalPosition = Yt;
      var Pe = { width: 96, height: 124, url: "sprites.png" }, ap = class {
        constructor(e) {
          this.workspace = e, this.id = "zoomControls", this.boundEvents = [], this.zoomResetGroup = this.zoomOutGroup = this.zoomInGroup = null, this.HEIGHT = this.WIDTH = 32, this.SMALL_SPACING = 2, this.LARGE_SPACING = 11, this.MARGIN_HORIZONTAL = this.MARGIN_VERTICAL = 20, this.svgGroup = null, this.top = this.left = 0, this.initialized = !1;
        }
        createDom() {
          this.svgGroup = b(g.G, {});
          const e = String(Math.random()).substring(2);
          return this.createZoomOutSvg(e), this.createZoomInSvg(e), this.workspace.isMovable() && this.createZoomResetSvg(e), this.svgGroup;
        }
        init() {
          this.workspace.getComponentManager().addComponent({ component: this, weight: Q.ComponentWeight.ZOOM_CONTROLS_WEIGHT, capabilities: [Q.Capability.POSITIONABLE] }), this.initialized = !0;
        }
        dispose() {
          this.workspace.getComponentManager().removeComponent("zoomControls"), this.svgGroup && G(this.svgGroup);
          for (const e of this.boundEvents) H(e);
          this.boundEvents.length = 0;
        }
        getBoundingRectangle() {
          let e = this.SMALL_SPACING + 2 * this.HEIGHT;
          return this.zoomResetGroup && (e += this.LARGE_SPACING + this.HEIGHT), new M(this.top, this.top + e, this.left, this.left + this.WIDTH);
        }
        position(e, t) {
          if (this.initialized) {
            var s = In(
              this.workspace,
              e
            ), o = this.SMALL_SPACING + 2 * this.HEIGHT;
            if (this.zoomResetGroup && (o += this.LARGE_SPACING + this.HEIGHT), e = bn(s, new D(this.WIDTH, o), this.MARGIN_HORIZONTAL, this.MARGIN_VERTICAL, e, this.workspace), s = s.vertical, t = Sn(e, this.MARGIN_VERTICAL, s === Yt.TOP ? _s.DOWN : _s.UP, t), s === Yt.TOP) {
              var i = this.SMALL_SPACING + this.HEIGHT, r;
              (r = this.zoomInGroup) == null || r.setAttribute("transform", "translate(0, " + i + ")"), this.zoomResetGroup && this.zoomResetGroup.setAttribute("transform", "translate(0, " + (i + this.LARGE_SPACING + this.HEIGHT) + ")");
            } else {
              r = this.zoomResetGroup ? this.LARGE_SPACING + this.HEIGHT : 0;
              let h;
              (h = this.zoomInGroup) == null || h.setAttribute("transform", "translate(0, " + r + ")"), r = r + this.SMALL_SPACING + this.HEIGHT, (i = this.zoomOutGroup) == null || i.setAttribute("transform", "translate(0, " + r + ")");
            }
            this.top = t.top, this.left = t.left;
            var u;
            (u = this.svgGroup) == null || u.setAttribute("transform", "translate(" + this.left + "," + this.top + ")");
          }
        }
        createZoomOutSvg(e) {
          this.zoomOutGroup = b(g.G, { class: "blocklyZoom blocklyZoomOut" }, this.svgGroup);
          const t = b(
            g.CLIPPATH,
            { id: "blocklyZoomoutClipPath" + e },
            this.zoomOutGroup
          );
          b(g.RECT, { width: 32, height: 32 }, t), b(g.IMAGE, { width: Pe.width, height: Pe.height, x: -64, y: -92, "clip-path": "url(#blocklyZoomoutClipPath" + e + ")" }, this.zoomOutGroup).setAttributeNS(
            Xe,
            "xlink:href",
            this.workspace.options.pathToMedia + Pe.url
          ), this.boundEvents.push(w(this.zoomOutGroup, "pointerdown", null, this.zoom.bind(this, -1)));
        }
        createZoomInSvg(e) {
          this.zoomInGroup = b(g.G, { class: "blocklyZoom blocklyZoomIn" }, this.svgGroup);
          const t = b(g.CLIPPATH, { id: "blocklyZoominClipPath" + e }, this.zoomInGroup);
          b(g.RECT, { width: 32, height: 32 }, t), b(g.IMAGE, { width: Pe.width, height: Pe.height, x: -32, y: -92, "clip-path": "url(#blocklyZoominClipPath" + e + ")" }, this.zoomInGroup).setAttributeNS(Xe, "xlink:href", this.workspace.options.pathToMedia + Pe.url), this.boundEvents.push(w(this.zoomInGroup, "pointerdown", null, this.zoom.bind(this, 1)));
        }
        zoom(e, t) {
          this.workspace.markFocused(), this.workspace.zoomCenter(e), this.fireZoomEvent(), K(), t.stopPropagation(), t.preventDefault();
        }
        createZoomResetSvg(e) {
          this.zoomResetGroup = b(
            g.G,
            { class: "blocklyZoom blocklyZoomReset" },
            this.svgGroup
          );
          const t = b(g.CLIPPATH, { id: "blocklyZoomresetClipPath" + e }, this.zoomResetGroup);
          b(g.RECT, { width: 32, height: 32 }, t), b(g.IMAGE, { width: Pe.width, height: Pe.height, y: -92, "clip-path": "url(#blocklyZoomresetClipPath" + e + ")" }, this.zoomResetGroup).setAttributeNS(Xe, "xlink:href", this.workspace.options.pathToMedia + Pe.url), this.boundEvents.push(w(this.zoomResetGroup, "pointerdown", null, this.resetZoom.bind(this)));
        }
        resetZoom(e) {
          this.workspace.markFocused();
          const t = Math.log(this.workspace.options.zoomOptions.startScale / this.workspace.scale) / Math.log(this.workspace.options.zoomOptions.scaleSpeed);
          this.workspace.beginCanvasTransition(), this.workspace.zoomCenter(t), this.workspace.scrollCenter(), setTimeout(this.workspace.endCanvasTransition.bind(this.workspace), 500), this.fireZoomEvent(), K(), e.stopPropagation(), e.preventDefault();
        }
        fireZoomEvent() {
          const e = new (L(m.CLICK))(null, this.workspace.id, "zoom_controls");
          k(e);
        }
      };
      Tt(`
.blocklyZoom>image, .blocklyZoom>svg>image {
  opacity: .4;
}

.blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {
  opacity: .6;
}

.blocklyZoom>image:active, .blocklyZoom>svg>image:active {
  opacity: .8;
}
`);
      var hp = 100, dp = 75, $p = 50, pp = 25, um = {
        BLOCKS: $p,
        PROCEDURES: dp,
        VARIABLES: hp,
        WORKSPACE_COMMENTS: pp
      }, Fu = {};
      Fu.register = _i, Fu.unregister = Th;
      var gp = class {
        constructor() {
          this.priority = pp;
        }
        save(e) {
          const t = [];
          for (const s of e.getTopComments()) (e = mo(s, { addCoordinates: !0, saveIds: !0 })) && t.push(e);
          return t.length ? t : null;
        }
        load(e, t) {
          for (const s of e) mi(s, t, { recordUndo: Ce() });
        }
        clear(e) {
          for (const t of e.getTopComments()) t.dispose();
        }
      };
      _i("workspaceComments", new gp());
      var Er = {};
      Er.WorkspaceCommentSerializer = gp, Er.append = mi, Er.save = mo;
      var Uu = {};
      Uu.register = Rn, Uu.unregister = Eh;
      var fr = class {
        paste(e, t, s) {
          e = e.commentState, s && (e.x = s.x, e.y = s.y), n.disable$$module$build$src$core$events$utils();
          let o;
          try {
            o = mi(e, t), fh(o);
          } finally {
            n.enable$$module$build$src$core$events$utils();
          }
          return o ? (j() && k(new (L(m.COMMENT_CREATE))(o)), n.getFocusManager$$module$build$src$core$focus_manager().focusNode(o), o) : null;
        }
      };
      fr.TYPE = "workspace-comment", Rn(fr.TYPE, new fr());
      var Hu;
      Hu = 28, n.config$$module$build$src$core$config = { dragRadius: 5, flyoutDragRadius: 10, snapRadius: Hu, connectingSnapRadius: Hu, currentConnectionPreference: 8, bumpDelay: 250 }, n.config$$module$build$src$core$config;
      var am = "aria-", hm = "role", ze;
      (function(e) {
        e.GRID = "grid", e.GRIDCELL = "gridcell", e.GROUP = "group", e.LISTBOX = "listbox", e.MENU = "menu", e.MENUITEM = "menuitem", e.MENUITEMCHECKBOX = "menuitemcheckbox", e.OPTION = "option", e.PRESENTATION = "presentation", e.ROW = "row", e.TREE = "tree", e.TREEITEM = "treeitem", e.SEPARATOR = "separator", e.STATUS = "status";
      })(ze || (ze = {}));
      var ee;
      (function(e) {
        e.ACTIVEDESCENDANT = "activedescendant", e.COLCOUNT = "colcount", e.DISABLED = "disabled", e.EXPANDED = "expanded", e.INVALID = "invalid", e.LABEL = "label", e.LABELLEDBY = "labelledby", e.LEVEL = "level", e.ORIENTATION = "orientation", e.POSINSET = "posinset", e.ROWCOUNT = "rowcount", e.SELECTED = "selected", e.SETSIZE = "setsize", e.VALUEMAX = "valuemax", e.VALUEMIN = "valuemin", e.LIVE = "live", e.HIDDEN = "hidden";
      })(ee || (ee = {}));
      var Fi = {};
      Fi.Role = ze, Fi.State = ee, Fi.setRole = ft, Fi.setState = ie;
      var br = class {
        constructor(e, t) {
          this.content = e, this.opt_value = t, this.enabled = !0, this.element = null, this.rightToLeft = !1, this.roleName = null, this.highlight = this.checked = this.checkable = !1, this.actionHandler = null;
        }
        createDom() {
          const e = document.createElement("div");
          e.id = oe(), this.element = e, e.className = "blocklyMenuItem " + (this.enabled ? "" : "blocklyMenuItemDisabled ") + (this.checked ? "blocklyMenuItemSelected " : "") + (this.highlight ? "blocklyMenuItemHighlight " : "") + (this.rightToLeft ? "blocklyMenuItemRtl " : "");
          const t = document.createElement("div");
          t.className = "blocklyMenuItemContent";
          let s = this.content;
          return typeof this.content == "string" && (s = document.createTextNode(this.content)), t.appendChild(s), e.appendChild(t), this.checkable && this.toggleHasCheckbox(!0), this.roleName && ft(e, this.roleName), ie(e, ee.SELECTED, this.checkable && this.checked || !1), ie(e, ee.DISABLED, !this.enabled), e;
        }
        dispose() {
          this.element = null;
        }
        getElement() {
          return this.element;
        }
        getId() {
          return this.element.id;
        }
        getValue() {
          let e;
          return (e = this.opt_value) != null ? e : null;
        }
        setRightToLeft(e) {
          this.rightToLeft = e;
          let t;
          (t = this.getElement()) == null || t.classList.toggle("blocklyMenuItemRtl", this.rightToLeft);
        }
        setRole(e) {
          this.roleName = e;
        }
        setCheckable(e) {
          (this.checkable = e) || this.setChecked(!1), this.toggleHasCheckbox(e);
        }
        setChecked(e) {
          (!e || this.checkable) && (this.checked = e, (e = this.getElement()) && (e.classList.toggle("blocklyMenuItemSelected", this.checked), ie(e, ee.SELECTED, this.checked)));
        }
        setHighlighted(e) {
          if (this.highlight = e, this.isEnabled()) {
            let t;
            (t = this.getElement()) == null || t.classList.toggle("blocklyMenuItemHighlight", this.highlight);
          }
        }
        isEnabled() {
          return this.enabled;
        }
        setEnabled(e) {
          this.enabled = e, (e = this.getElement()) && (e.classList.toggle(
            "blocklyMenuItemDisabled",
            !this.enabled
          ), ie(e, ee.DISABLED, !this.enabled));
        }
        performAction(e) {
          this.isEnabled() && this.actionHandler && this.actionHandler(this, e);
        }
        onAction(e, t) {
          this.actionHandler = e.bind(t);
        }
        toggleHasCheckbox(e) {
          if (e) {
            let o;
            if ((o = this.getElement()) == null || !o.querySelector(".blocklyMenuItemContent .blocklyMenuItemCheckbox")) {
              e = document.createElement("div"), e.className = "blocklyMenuItemCheckbox ";
              var t, s;
              (t = this.getElement()) == null || (s = t.querySelector(".blocklyMenuItemContent")) == null || s.prepend(e);
            }
          } else {
            let o, i;
            (o = this.getElement()) == null || (i = o.querySelector(".blocklyMenuItemContent .blocklyMenuItemCheckbox")) == null || i.remove();
          }
        }
      }, Gu = class {
        constructor() {
          this.menuItems = [], this.roleName = this.element = this.onKeyDownHandler = this.pointerLeaveHandler = this.pointerEnterHandler = this.clickHandler = this.pointerMoveHandler = this.highlightedItem = this.openingCoords = null;
        }
        addChild(e) {
          this.menuItems.push(e);
        }
        render(e) {
          const t = document.createElement("div");
          t.className = "blocklyMenu", t.tabIndex = 0, this.roleName && ft(t, this.roleName), this.element = t;
          for (let s = 0, o; o = this.menuItems[s]; s++) t.appendChild(o.createDom());
          return this.pointerMoveHandler = w(t, "pointermove", this, this.handlePointerMove, !0), this.clickHandler = w(t, "pointerup", this, this.handleClick, !0), this.pointerEnterHandler = w(t, "pointerenter", this, this.handlePointerEnter, !0), this.pointerLeaveHandler = w(t, "pointerleave", this, this.handlePointerLeave, !0), this.onKeyDownHandler = w(t, "keydown", this, this.handleKeyEvent), e.appendChild(t), t;
        }
        getElement() {
          return this.element;
        }
        focus() {
          const e = this.getElement();
          e && e.focus({ preventScroll: !0 });
        }
        blur() {
          const e = this.getElement();
          e && e.blur();
        }
        setRole(e) {
          this.roleName = e;
        }
        dispose() {
          this.pointerMoveHandler && (H(this.pointerMoveHandler), this.pointerMoveHandler = null), this.clickHandler && (H(this.clickHandler), this.clickHandler = null), this.pointerEnterHandler && (H(this.pointerEnterHandler), this.pointerEnterHandler = null), this.pointerLeaveHandler && (H(this.pointerLeaveHandler), this.pointerLeaveHandler = null), this.onKeyDownHandler && (H(this.onKeyDownHandler), this.onKeyDownHandler = null);
          for (let e = 0, t; t = this.menuItems[e]; e++) t.dispose();
          this.element = null;
        }
        getMenuItem(e) {
          const t = this.getElement();
          for (; e && e !== t; ) {
            if (e.classList.contains("blocklyMenuItem")) {
              const s = this.getMenuItems();
              for (let o = 0, i; i = s[o]; o++) if (i.getElement() === e) return i;
            }
            e = e.parentElement;
          }
          return null;
        }
        setHighlighted(e) {
          var t = this.highlightedItem;
          if (t && (t.setHighlighted(!1), this.highlightedItem = null), e) {
            e.setHighlighted(!0), this.highlightedItem = e, t = this.getElement();
            const s = e.getElement();
            t && s && (Tl(s, t), ie(
              t,
              ee.ACTIVEDESCENDANT,
              e.getId()
            ));
          }
        }
        highlightNext() {
          const e = this.highlightedItem ? this.getMenuItems().indexOf(this.highlightedItem) : -1;
          this.highlightHelper(e, 1);
        }
        highlightPrevious() {
          const e = this.highlightedItem ? this.getMenuItems().indexOf(this.highlightedItem) : -1;
          this.highlightHelper(e < 0 ? this.menuItems.length : e, -1);
        }
        highlightFirst() {
          this.highlightHelper(-1, 1);
        }
        highlightLast() {
          this.highlightHelper(this.menuItems.length, -1);
        }
        highlightHelper(e, t) {
          e += t;
          let s;
          const o = this.getMenuItems();
          for (; s = o[e]; ) {
            if (s.isEnabled()) {
              this.setHighlighted(s);
              break;
            }
            e += t;
          }
        }
        handlePointerMove(e) {
          Math.max(Math.abs(e.movementX), Math.abs(e.movementY)) !== 0 && (e = this.getMenuItem(e.target)) && (e.isEnabled() ? this.highlightedItem !== e && this.setHighlighted(e) : this.setHighlighted(null));
        }
        handleClick(e) {
          var t = this.openingCoords;
          if (this.openingCoords = null, t && typeof e.clientX == "number") {
            const s = new I(e.clientX, e.clientY);
            if (I.distance(t, s) < 1) return;
          }
          (t = this.getMenuItem(e.target)) && t.performAction(e);
        }
        handlePointerEnter(e) {
          this.focus();
        }
        handlePointerLeave(e) {
          this.getElement() && this.setHighlighted(null);
        }
        handleKeyEvent(e) {
          if (this.menuItems.length && !(e.shiftKey || e.ctrlKey || e.metaKey || e.altKey)) {
            var t = this.highlightedItem;
            switch (e.key) {
              case "Enter":
              case " ":
                t && t.performAction(e);
                break;
              case "ArrowUp":
                this.highlightPrevious();
                break;
              case "ArrowDown":
                this.highlightNext();
                break;
              case "PageUp":
              case "Home":
                this.highlightFirst();
                break;
              case "PageDown":
              case "End":
                this.highlightLast();
                break;
              default:
                return;
            }
            e.preventDefault(), e.stopPropagation();
          }
        }
        getSize() {
          const e = this.getElement(), t = di(e);
          return t.height = e.scrollHeight, t;
        }
        getMenuItems() {
          return this.menuItems.filter((e) => e instanceof br);
        }
      }, _p = class {
        constructor() {
          this.element = null;
        }
        createDom() {
          return this.element = document.createElement("hr"), this.element.className = "blocklyMenuSeparator", ft(this.element, ze.SEPARATOR), this.element;
        }
        dispose() {
          let e;
          (e = this.element) == null || e.remove(), this.element = null;
        }
      }, Ui = "_TEMP_COLLAPSED_INPUT", Ir = "_TEMP_COLLAPSED_FIELD", ot = "MANUALLY_DISABLED", dm = { COLLAPSED_FIELD_NAME: Ir, COLLAPSED_INPUT_NAME: Ui, MANUALLY_DISABLED: ot };
      (function(e) {
        e[e.VALUE = 1] = "VALUE", e[e.STATEMENT = 3] = "STATEMENT", e[e.DUMMY = 5] = "DUMMY", e[e.CUSTOM = 6] = "CUSTOM", e[e.END_ROW = 7] = "END_ROW";
      })(n.inputTypes$$module$build$src$core$inputs$input_types || (n.inputTypes$$module$build$src$core$inputs$input_types = {})), n.inputTypes$$module$build$src$core$inputs$input_types;
      var Sr = /* @__PURE__ */ new Set(), Vu = /* @__PURE__ */ new WeakSet(), Wu = /* @__PURE__ */ new WeakMap(), Do = null, Xu = null, mp = 0, Rr = {};
      Rr.finishQueuedRenders = bt, Rr.queueRender = Rl, Rr.triggerQueuedRenders = cs;
      var zu, Tp;
      n.Msg$$module$build$src$core$msg = /* @__PURE__ */ Object.create(null), zu = function(e) {
        Object.keys(e).forEach(function(t) {
          n.Msg$$module$build$src$core$msg[t] = e[t];
        });
      }, Tp = { Msg: n.Msg$$module$build$src$core$msg, setLocale: zu };
      var Hi = "blocklyToast", Ep = "blocklyToastMessage", fp = "blocklyToastCloseButton", Hs = class {
        static show(e, t) {
          if (t.oncePerSession && t.id) {
            if (this.shownIds.has(t.id)) return;
            this.shownIds.add(t.id);
          }
          this.hide(e);
          const s = this.createDom(e, t);
          requestAnimationFrame(() => {
            s.style.bottom = "2rem";
          });
        }
        static createDom(e, t) {
          const { message: s, duration: o = 5, assertiveness: i = Hs.Assertiveness.POLITE } = t, r = document.createElement("div");
          e.getInjectionDiv().appendChild(r), r.dataset.toastId = t.id, r.className = Hi, ft(r, ze.STATUS), ie(r, ee.LIVE, i), t = r.appendChild(document.createElement("div")), t.className = Ep, t.innerText = s, t = r.appendChild(document.createElement("button")), t.className = fp, ie(t, ee.LABEL, n.Msg$$module$build$src$core$msg.CLOSE);
          var u = b(g.SVG, { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none" }, t);
          ie(u, ee.HIDDEN, !0), b(
            g.RECT,
            { x: 19.7782, y: 2.80762, width: 2, height: 24, transform: "rotate(45, 19.7782, 2.80762)", fill: "black" },
            u
          ), b(g.RECT, { x: 2.80762, y: 4.22183, width: 2, height: 24, transform: "rotate(-45, 2.80762, 4.22183)", fill: "black" }, u), t.addEventListener("click", () => {
            r.remove(), e.markFocused();
          });
          let h;
          return t = () => {
            h = setTimeout(() => r.remove(), o * 1e3);
          }, u = () => clearTimeout(h), r.addEventListener("focusin", u), r.addEventListener("focusout", t), r.addEventListener(
            "mouseenter",
            u
          ), r.addEventListener("mousemove", u), r.addEventListener("mouseleave", t), t(), r;
        }
        static hide(e, t) {
          e = e.getInjectionDiv().querySelector(`.${Hi}`), e instanceof HTMLElement && (!t || t === e.dataset.toastId) && e.remove();
        }
      };
      Hs.shownIds = /* @__PURE__ */ new Set(), (function(e) {
        e = e.Assertiveness || (e.Assertiveness = {}), e.ASSERTIVE = "assertive", e.POLITE = "polite";
      })(Hs || (Hs = {})), Tt(`
.${Hi} {
  font-size: 1.2rem;
  position: absolute;
  bottom: -10rem;
  right: 2rem;
  padding: 1rem;
  color: black;
  background-color: white;
  border: 2px solid black;
  border-radius: 0.4rem;
  z-index: 999;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  line-height: 1.5;
  transition: bottom 0.3s ease-out;
}

.${Hi} .${Ep} {
  maxWidth: 18rem;
}

.${Hi} .${fp} {
  margin: 0;
  padding: 0.2rem;
  background-color: transparent;
  color: black;
  border: none;
  cursor: pointer;
}
`);
      var bp = function(e, t) {
        window.alert(e), t && t();
      }, Ip = bp, Sp = function(e, t) {
        t(window.confirm(e));
      }, Rp = Sp, Op = function(e, t, s) {
        s(window.prompt(e, t));
      }, Cp = Op, yp = Hs.show.bind(Hs), vp = yp, Kt = {};
      Kt.alert = Ei, Kt.confirm = Cn, Kt.prompt = yn, Kt.setAlert = Rh, Kt.setConfirm = Oh, Kt.setPrompt = Ch, Kt.setToast = vh, Kt.toast = yh;
      var Lp = /* @__PURE__ */ new Set(), Ap = {};
      Ap.warn = fe;
      var Yu = "VARIABLE", Ku = "ijkmnopqrstuvwxyzabcdefgh", kp = { generateUniqueNameInternal: kh }, ae = { CATEGORY_NAME: Yu, TEST_ONLY: kp, VAR_LETTER_OPTIONS: Ku };
      ae.allDeveloperVariables = n.allDeveloperVariables$$module$build$src$core$variables, ae.allUsedVarModels = n.allUsedVarModels$$module$build$src$core$variables, ae.compareByName = Eo, ae.createVariableButtonHandler = vs, ae.deleteVariable = n.deleteVariable$$module$build$src$core$variables, ae.flyoutCategory = Ll, ae.flyoutCategoryBlocks = Al, ae.generateUniqueName = kl, ae.generateUniqueNameFromOptions = kn, ae.generateVariableFieldDom = Ls, ae.getAddedVariables = wn, ae.getOrCreateVariablePackage = n.getOrCreateVariablePackage$$module$build$src$core$variables, ae.getVariable = n.getVariable$$module$build$src$core$variables, ae.getVariableUsesById = fo, ae.internalFlyoutCategory = vn, ae.jsonFlyoutCategoryBlocks = An, ae.nameUsedWithAnyType = Nl, ae.nameUsedWithConflictingParam = wl, ae.promptName = Nn, ae.renameVariable = n.renameVariable$$module$build$src$core$variables;
      var Po = class extends Error {
      }, Np = class extends Po {
        constructor(e) {
          super("Expected to find a 'type' property, defining the block type"), this.state = e;
        }
      }, Gi = class extends Po {
        constructor(e, t, s) {
          super(`The block ${t.toDevString()} is missing a(n) ${e}
connection`), this.block = t, this.state = s;
        }
      }, wp = class extends Po {
        constructor(e, t, s, o) {
          super(`The block ${s.toDevString()} could not connect its
${t} to its parent, because: ${e}`), this.childBlock = s, this.childState = o;
        }
      }, Mp = class extends Po {
        constructor(e) {
          super(`Encountered a real block which is defined as a child of a shadow
block. It is an invariant of Blockly that shadow blocks only have shadow
children`), this.state = e;
        }
      }, Dp = class extends Po {
        constructor(e, t, s) {
          super(`Cannot add an icon of type '${e}' to the block ${t.toDevString()}, because there is no icon registered with type '${e}'. Make sure that all of your icons have been registered.`), this.block = t, this.state = s;
        }
      }, Gs = {};
      Gs.BadConnectionCheck = wp, Gs.DeserializationError = Po, Gs.MissingBlockType = Np, Gs.MissingConnection = Gi, Gs.RealChildOfShadow = Mp, Gs.UnregisteredIcon = Dp;
      var Pp = class {
        constructor() {
          this.priority = $p;
        }
        save(e) {
          const t = [];
          for (const s of e.getTopBlocks(!1)) (e = tt(s, { addCoordinates: !0, doFullSerialization: !1 })) && t.push(e);
          return t.length ? { languageVersion: 0, blocks: t } : null;
        }
        load(e, t) {
          e = e.blocks;
          for (const s of e) As(
            s,
            t,
            { recordUndo: Ce() }
          );
        }
        clear(e) {
          for (const t of e.getTopBlocks(!1)) t.dispose(!1);
        }
      };
      _i("blocks", new Pp());
      var Vi = {};
      Vi.BlockSerializer = Pp, Vi.append = As, Vi.appendInternal = ks, Vi.save = tt;
      var $e = class {
        constructor(e) {
          this.name = e;
        }
        toString() {
          return this.name;
        }
        equals(e) {
          return this.name === e.toString();
        }
      };
      $e.MUTATOR = new $e("mutator"), $e.WARNING = new $e("warning"), $e.COMMENT = new $e("comment");
      var it = class extends Xt {
        constructor(e) {
          super(), this.isBlank = !0, this.isBlank = !e, e && (this.blockId = e.id, this.workspaceId = e.workspace.id);
        }
        toJson() {
          const e = super.toJson();
          if (!this.blockId) throw Error("The block ID is undefined. Either pass a block to the constructor, or call fromJson");
          return e.blockId = this.blockId, e;
        }
        static fromJson(e, t, s) {
          return t = Xt.fromJson(
            e,
            t,
            s ?? new it()
          ), t.blockId = e.blockId, t;
        }
      }, Vs = class extends it {
        constructor(e, t, s, o, i) {
          super(e), this.type = m.BLOCK_CHANGE, e && (this.element = t, this.name = s || void 0, this.oldValue = o, this.newValue = i);
        }
        toJson() {
          const e = super.toJson();
          if (!this.element) throw Error("The changed element is undefined. Either pass an element to the constructor, or call fromJson");
          return e.element = this.element, e.name = this.name, e.oldValue = this.oldValue, e.newValue = this.newValue, this.disabledReason && (e.disabledReason = this.disabledReason), e;
        }
        static fromJson(e, t, s) {
          return t = it.fromJson(e, t, s ?? new Vs()), t.element = e.element, t.name = e.name, t.oldValue = e.oldValue, t.newValue = e.newValue, e.disabledReason !== void 0 && (t.disabledReason = e.disabledReason), t;
        }
        setDisabledReason(e) {
          if (this.element !== "disabled") throw Error('Cannot set the disabled reason for a BlockChange event if the element is not "disabled".');
          this.disabledReason = e;
        }
        isNull() {
          return this.oldValue === this.newValue;
        }
        run(e) {
          var t = this.getEventWorkspace_();
          if (!this.blockId) throw Error("The block ID is undefined. Either pass a block to the constructor, or call fromJson");
          if (t = t.getBlockById(this.blockId), !t) throw Error("The associated block is undefined. Either pass a block to the constructor, or call fromJson");
          const s = t.getIcon($e.MUTATOR);
          switch (s && us(s) && s.bubbleIsVisible() && s.setBubbleVisible(!1), e = e ? this.newValue : this.oldValue, this.element) {
            case "field":
              (t = t.getField(this.name)) ? t.setValue(e) : console.warn("Can't set non-existent field: " + this.name);
              break;
            case "comment":
              t.setCommentText(e ?? null);
              break;
            case "collapsed":
              t.setCollapsed(!!e);
              break;
            case "disabled":
              var o;
              t.setDisabledReason(!!e, (o = this.disabledReason) != null ? o : ot);
              break;
            case "inline":
              t.setInputsInline(!!e);
              break;
            case "mutation":
              o = Vs.getExtraBlockState_(t), t.loadExtraState ? t.loadExtraState(JSON.parse(e || "{}")) : t.domToMutation && t.domToMutation(n.textToDom$$module$build$src$core$utils$xml(e || "<mutation/>")), k(new Vs(t, "mutation", null, o, e));
              break;
            default:
              console.warn("Unknown change type: " + this.element);
          }
        }
        static getExtraBlockState_(e) {
          return e.saveExtraState ? (e = e.saveExtraState(!0)) ? JSON.stringify(e) : "" : e.mutationToDom && (e = e.mutationToDom()) ? St(e) : "";
        }
      };
      c(f.EVENT, m.BLOCK_CHANGE, Vs);
      var Or = {};
      Or.clamp = bo, Or.toDegrees = Qh, Or.toRadians = Mn;
      var Cr = 16, Bp = 1, xp = 12, ju = 16, yr = 0.25, Ju = null, Ws = null, Fp = "", Up = "", re, Wi, Xs, qu = null, ms = null, Hp = null, vr = null, Lr = null, Zu = { getBoundsInfo: function() {
        const e = ls(qu), t = di(qu);
        return { left: e.x, right: e.x + t.width, top: e.y, bottom: e.y + t.height, width: t.width, height: t.height };
      }, getPositionMetrics: function(e, t, s, o) {
        const i = Zu.getBoundsInfo(), r = di(re);
        return t + r.height < i.bottom ? Xl(e, t, i, r) : o - r.height > i.top ? zl(
          s,
          o,
          i,
          r
        ) : t + r.height < document.documentElement.clientHeight ? Xl(e, t, i, r) : o - r.height > document.documentElement.clientTop ? zl(s, o, i, r) : td(e, i, r);
      } }, Ae = {
        ANIMATION_TIME: yr,
        ARROW_HORIZONTAL_PADDING: xp,
        ARROW_SIZE: Cr,
        BORDER_SIZE: Bp,
        PADDING_Y: ju,
        TEST_ONLY: Zu
      };
      Ae.clearContent = Bn, Ae.createDom = Dn, Ae.getContentDiv = Pn, Ae.getOwner = xl, Ae.getPositionX = fi, Ae.hide = Fn, Ae.hideIfOwner = xn, Ae.hideWithoutAnimation = It, Ae.isVisible = Yl, Ae.repositionForWindowResize = jl, Ae.setBoundsElement = Bl, Ae.setColour = Fl, Ae.show = Wl, Ae.showPositionedByBlock = ed, Ae.showPositionedByField = Ul;
      var Bo = {};
      Bo.commonWordPrefix = Jl, Bo.commonWordSuffix = ql, Bo.isNumber = n.isNumber$$module$build$src$core$utils$string, Bo.shortestStringLength = bi, Bo.wrap = n.wrap$$module$build$src$core$utils$string;
      var Ar = void 0, Xi = !1, xo = !1, Gp = 50, Vp = 0, zs = 0, Qu = 0, ea = 0, nt = null, zi = null, ta = 0, sa = 10, Wp = 10, Xp = 750, kr = 5, pe = null, Ye = { HOVER_MS: Xp, LIMIT: Gp, MARGINS: kr, OFFSET_X: ta, OFFSET_Y: sa, RADIUS_OK: Wp };
      Ye.bindMouseEvents = Ii, Ye.block = ic, Ye.createDom = ec, Ye.dispose = oc, Ye.getCustomTooltip = nd, Ye.getDiv = ld, Ye.getTooltipOfObject = Io, Ye.hide = Ut, Ye.isVisible = rd, Ye.setCustomTooltip = id, Ye.unbindMouseEvents = tc, Ye.unblock = nc;
      var oa = 0.45, ia = 0.65, zp = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00" }, rt = {};
      rt.blend = ws, rt.getHsvSaturation = rc, rt.getHsvValue = lc, rt.hexToRgb = Hn, rt.hsvToHex = Gn, rt.hueToHex = cc, rt.names = zp, rt.parse = Ns, rt.rgbToHex = Si, rt.setHsvSaturation = pd, rt.setHsvValue = gd;
      var Yi = {};
      Yi.checkMessageReferences = _d, Yi.parseBlockColour = So, Yi.replaceMessageReferences = le, Yi.tokenizeInterpolation = uc;
      var X = class {
        get size_() {
          return this.size;
        }
        set size_(e) {
          this.size = e;
        }
        constructor(e, t, s) {
          this.DEFAULT_VALUE = null, this.name = void 0, this.tooltip = this.validator_ = null, this.size = new D(0, 0), this.constants_ = this.mouseDownWrapper = this.textContent_ = this.textElement_ = this.borderRect_ = this.fieldGroup_ = null, this.disposed = !1, this.maxDisplayLength = 50, this.sourceBlock_ = null, this.enabled_ = this.visible_ = this.isDirty_ = !0, this.suffixField = this.prefixField = this.clickTarget_ = null, this.EDITABLE = !0, this.SERIALIZABLE = !1, this.id_ = null, this.value_ = "DEFAULT_VALUE" in new.target.prototype ? new.target.prototype.DEFAULT_VALUE : this.DEFAULT_VALUE, this.size_ = new D(0, 0), e !== X.SKIP_SETUP && (s && this.configure_(s), this.setValue(e), t && this.setValidator(t));
        }
        configure_(e) {
          e.tooltip && this.setTooltip(le(e.tooltip));
        }
        setSourceBlock(e) {
          if (this.sourceBlock_) throw Error("Field already bound to a block");
          if (this.sourceBlock_ = e, e.id.includes("_field")) throw Error(`Field ID indicator is contained in block ID. This may cause problems with focus: ${e.id}.`);
          this.id_ = `${e.id}_field_${oe()}`;
        }
        getConstants() {
          return !this.constants_ && this.sourceBlock_ && !this.sourceBlock_.isDeadOrDying() && this.sourceBlock_.workspace.rendered && (this.constants_ = this.sourceBlock_.workspace.getRenderer().getConstants()), this.constants_;
        }
        getSourceBlock() {
          return this.sourceBlock_;
        }
        init() {
          if (!this.fieldGroup_) {
            var e = this.id_;
            if (!e) throw Error("Expected ID to be defined prior to init.");
            this.fieldGroup_ = b(g.G, { id: e }), this.isVisible() || (this.fieldGroup_.style.display = "none"), this.sourceBlock_.getSvgRoot().appendChild(this.fieldGroup_), this.initView(), this.updateEditable(), this.setTooltip(this.tooltip), this.bindEvents_(), this.initModel(), this.applyColour();
          }
        }
        initView() {
          this.createBorderRect_(), this.createTextElement_(), this.fieldGroup_ && R(this.fieldGroup_, "blocklyField");
        }
        initModel() {
        }
        isFullBlockField() {
          return !this.borderRect_;
        }
        createBorderRect_() {
          this.borderRect_ = b(g.RECT, { rx: this.getConstants().FIELD_BORDER_RECT_RADIUS, ry: this.getConstants().FIELD_BORDER_RECT_RADIUS, x: 0, y: 0, height: this.size_.height, width: this.size_.width, class: "blocklyFieldRect" }, this.fieldGroup_);
        }
        createTextElement_() {
          this.textElement_ = b(
            g.TEXT,
            { class: "blocklyText blocklyFieldText" },
            this.fieldGroup_
          ), this.getConstants().FIELD_TEXT_BASELINE_CENTER && this.textElement_.setAttribute("dominant-baseline", "central"), this.textContent_ = document.createTextNode(""), this.textElement_.appendChild(this.textContent_);
        }
        bindEvents_() {
          const e = this.getClickTarget_();
          if (!e) throw Error("A click target has not been set.");
          Ii(e), this.mouseDownWrapper = w(
            e,
            "pointerdown",
            this,
            this.onMouseDown_
          );
        }
        fromXml(e) {
          this.setValue(e.textContent);
        }
        toXml(e) {
          return e.textContent = this.getValue(), e;
        }
        saveState(e) {
          return e = this.saveLegacyState(X), e !== null ? e : this.getValue();
        }
        loadState(e) {
          this.loadLegacyState(X, e) || this.setValue(e);
        }
        saveLegacyState(e) {
          return e.prototype.saveState === this.saveState && e.prototype.toXml !== this.toXml ? (e = n.createElement$$module$build$src$core$utils$xml("field"), e.setAttribute("name", this.name || ""), _o(this.toXml(e)).replace(' xmlns="https://developers.google.com/blockly/xml"', "")) : null;
        }
        loadLegacyState(e, t) {
          return e.prototype.loadState === this.loadState && e.prototype.fromXml !== this.fromXml ? (this.fromXml(n.textToDom$$module$build$src$core$utils$xml(t)), !0) : !1;
        }
        dispose() {
          xn(this), Ms(this);
          let e;
          (e = this.getSourceBlock()) != null && e.isDeadOrDying() || G(this.fieldGroup_), this.disposed = !0;
        }
        updateEditable() {
          const e = this.fieldGroup_, t = this.getSourceBlock();
          this.EDITABLE && e && t && (this.enabled_ && t.isEditable() ? (R(e, "blocklyEditableField"), F(e, "blocklyNonEditableField")) : (R(e, "blocklyNonEditableField"), F(e, "blocklyEditableField")));
        }
        setEnabled(e) {
          this.enabled_ = e, this.updateEditable();
        }
        isEnabled() {
          return this.enabled_;
        }
        isClickable() {
          return this.enabled_ && !!this.sourceBlock_ && this.sourceBlock_.isEditable() && this.showEditor_ !== X.prototype.showEditor_;
        }
        isClickableInFlyout(e) {
          return !e;
        }
        isCurrentlyEditable() {
          return this.enabled_ && this.EDITABLE && !!this.sourceBlock_ && this.sourceBlock_.isEditable();
        }
        isSerializable() {
          let e = !1;
          return this.name && (this.SERIALIZABLE ? e = !0 : this.EDITABLE && (console.warn("Detected an editable field that was not serializable. Please define SERIALIZABLE property as true on all editable custom fields. Proceeding with serialization."), e = !0)), e;
        }
        isVisible() {
          return this.visible_;
        }
        setVisible(e) {
          if (this.visible_ !== e) {
            this.visible_ = e;
            var t = this.fieldGroup_;
            t && (t.style.display = e ? "block" : "none");
          }
        }
        setValidator(e) {
          this.validator_ = e;
        }
        getValidator() {
          return this.validator_;
        }
        getSvgRoot() {
          return this.fieldGroup_;
        }
        getBorderRect() {
          if (!this.borderRect_) throw Error(`The border rectangle is ${this.borderRect_}.`);
          return this.borderRect_;
        }
        getTextElement() {
          if (!this.textElement_) throw Error(`The text element is ${this.textElement_}.`);
          return this.textElement_;
        }
        getTextContent() {
          if (!this.textContent_) throw Error(`The text content is ${this.textContent_}.`);
          return this.textContent_;
        }
        applyColour() {
        }
        render_() {
          this.textContent_ && (this.textContent_.nodeValue = this.getDisplayText_()), this.updateSize_();
        }
        showEditor(e) {
          this.isClickable() && this.showEditor_(e);
        }
        showEditor_(e) {
        }
        repositionForWindowResize() {
          return !1;
        }
        updateSize_(e) {
          const t = this.getConstants();
          e = e !== void 0 ? e : this.isFullBlockField() ? 0 : this.getConstants().FIELD_BORDER_RECT_X_PADDING;
          let s = e * 2, o = t.FIELD_TEXT_HEIGHT, i = 0;
          this.textElement_ && (i = ge(this.textElement_), s += i), this.isFullBlockField() || (o = Math.max(o, t.FIELD_BORDER_RECT_HEIGHT)), this.size_ = new D(s, o), this.positionTextElement_(e, i), this.positionBorderRect_();
        }
        positionTextElement_(e, t) {
          if (this.textElement_) {
            var s = this.getConstants(), o = this.size_.height / 2, i;
            this.textElement_.setAttribute("x", String((i = this.getSourceBlock()) != null && i.RTL ? this.size_.width - t - e : e)), this.textElement_.setAttribute("y", String(s.FIELD_TEXT_BASELINE_CENTER ? o : o - s.FIELD_TEXT_HEIGHT / 2 + s.FIELD_TEXT_BASELINE));
          }
        }
        positionBorderRect_() {
          this.borderRect_ && (this.borderRect_.setAttribute("width", String(this.size_.width)), this.borderRect_.setAttribute("height", String(this.size_.height)), this.borderRect_.setAttribute("rx", String(this.getConstants().FIELD_BORDER_RECT_RADIUS)), this.borderRect_.setAttribute("ry", String(this.getConstants().FIELD_BORDER_RECT_RADIUS)));
        }
        getSize() {
          return this.isVisible() ? (this.isDirty_ && (this.render_(), this.isDirty_ = !1), this.size_) : new D(0, 0);
        }
        getScaledBBox() {
          let e;
          var t = this.getSourceBlock();
          if (!t) throw new he();
          if (this.isFullBlockField()) {
            var s = this.sourceBlock_.getHeightWidth();
            const o = t.workspace.scale;
            e = this.getAbsoluteXY_(), t = (s.width + 1) * o, s = (s.height + 1) * o, G$ ? (e.x += 1.5 * o, e.y += 1.5 * o) : (e.x -= 0.5 * o, e.y -= 0.5 * o);
          } else s = this.borderRect_.getBoundingClientRect(), e = ls(this.borderRect_), t = s.width, s = s.height;
          return new M(
            e.y,
            e.y + s,
            e.x,
            e.x + t
          );
        }
        onLocationChange(e) {
        }
        getDisplayText_() {
          let e = this.getText();
          return e.length > this.maxDisplayLength && (e = e.substring(0, this.maxDisplayLength - 2) + "…"), e = e.replace(/\s/g, X.NBSP), this.sourceBlock_ && this.sourceBlock_.RTL && (e += "‏"), e;
        }
        getText() {
          const e = this.getText_();
          return String(e !== null ? e : this.getValue());
        }
        getText_() {
          return null;
        }
        markDirty() {
          this.isDirty_ = !0, this.constants_ = null;
        }
        forceRerender() {
          this.isDirty_ = !0, this.sourceBlock_ && this.sourceBlock_.rendered && this.sourceBlock_.queueRender();
        }
        setValue(e, t = !0) {
          if (e !== null) {
            var s = n.getGroup$$module$build$src$core$events$utils();
            s || n.setGroup$$module$build$src$core$events$utils(!0);
            try {
              const E = this.doClassValidation_(e), y = this.processValidation(e, E, t);
              if (!(y instanceof Error)) {
                var o, i = (o = this.getValidator()) == null ? void 0 : o.call(this, y), r = this.processValidation(y, i, t);
                if (!(r instanceof Error)) {
                  var u = this.sourceBlock_;
                  if (!u || !u.disposed) {
                    var h = this.getValue();
                    h === r ? this.doValueUpdate_(r) : (this.doValueUpdate_(r), t && u && j() && k(new (L(m.BLOCK_CHANGE))(u, "field", this.name || null, h, r)), this.isDirty_ && this.forceRerender());
                  }
                }
              }
            } finally {
              n.setGroup$$module$build$src$core$events$utils(s);
            }
          }
        }
        processValidation(e, t, s) {
          return t === null ? (this.doValueInvalid_(e, s), this.isDirty_ && this.forceRerender(), Error()) : t === void 0 ? e : t;
        }
        getValue() {
          return this.value_;
        }
        doClassValidation_(e) {
          return e ?? null;
        }
        doValueUpdate_(e) {
          this.value_ = e, this.isDirty_ = !0;
        }
        doValueInvalid_(e, t) {
        }
        onMouseDown_(e) {
          this.sourceBlock_ && !this.sourceBlock_.isDeadOrDying() && (e = this.sourceBlock_.workspace.getGesture(e)) && e.setStartField(this);
        }
        setTooltip(e) {
          e || e === "" || (e = this.sourceBlock_);
          const t = this.getClickTarget_();
          t ? t.tooltip = e : this.tooltip = e;
        }
        getTooltip() {
          const e = this.getClickTarget_();
          return Io(e || { tooltip: this.tooltip });
        }
        getClickTarget_() {
          return this.clickTarget_ || this.getSvgRoot();
        }
        getAbsoluteXY_() {
          return ls(this.getClickTarget_());
        }
        referencesVariables() {
          return !1;
        }
        refreshVariableName() {
        }
        getParentInput() {
          let e = null;
          const t = this.getSourceBlock();
          if (!t) throw new he();
          const s = t.inputList;
          for (let o = 0; o < t.inputList.length; o++) {
            const i = s[o], r = i.fieldRow;
            for (let u = 0; u < r.length; u++) if (r[u] === this) {
              e = i;
              break;
            }
          }
          return e;
        }
        getFlipRtl() {
          return !1;
        }
        onShortcut(e) {
          return !1;
        }
        getFocusableElement() {
          if (!this.fieldGroup_) throw Error("This field currently has no representative DOM element.");
          return this.fieldGroup_;
        }
        getFocusableTree() {
          const e = this.getSourceBlock();
          if (!e) throw new he();
          return e.workspace;
        }
        onNodeFocus() {
          const e = this.getSourceBlock();
          e.workspace.scrollBoundsIntoView(e.getBoundingRectangleWithoutChildren());
        }
        onNodeBlur() {
        }
        canBeFocused() {
          return !0;
        }
        static fromJson(e) {
          throw Error("Attempted to instantiate a field from the registry that hasn't defined a 'fromJson' method.");
        }
      };
      X.NBSP = " ", X.SKIP_SETUP = Symbol("SKIP_SETUP");
      var he = class extends Error {
        constructor() {
          super("The field has not yet been attached to its input. Call appendField to attach it.");
        }
      }, Fo = null, Yp = null, Nr = null, na = "blocklyWidgetDiv", Uo = "", Ho = "", Ke, wr = null, at = {};
      at.createDom = ac, at.getDiv = Ro, at.hide = Oo, at.hideIfOwner = Ms, at.hideIfOwnerIsInWorkspace = Ri, at.isVisible = hc, at.positionWithAnchor = $c, at.repositionForWindowResize = pc, at.show = Wn, at.testOnly_setDiv = md;
      var Mr = null, Kp = {}, Ys = null, Ts = {};
      Ts.callbackFactory = n.callbackFactory$$module$build$src$core$contextmenu, Ts.dispose = _c, Ts.getCurrentBlock = bd, Ts.getMenu = mc, Ts.hide = Oi, Ts.setCurrentBlock = gc, Ts.show = Co;
      var x = class {
        constructor() {
          this.registeredItems = /* @__PURE__ */ new Map(), this.reset();
        }
        reset() {
          this.registeredItems.clear();
        }
        register(e) {
          if (this.registeredItems.has(e.id)) throw Error('Menu item with ID "' + e.id + '" is already registered.');
          this.registeredItems.set(e.id, e);
        }
        unregister(e) {
          if (!this.registeredItems.has(e)) throw Error('Menu item with ID "' + e + '" not found.');
          this.registeredItems.delete(e);
        }
        getItem(e) {
          let t;
          return (t = this.registeredItems.get(e)) != null ? t : null;
        }
        getContextMenuOptions(e, t) {
          const s = [];
          for (const o of this.registeredItems.values()) {
            if (o.scopeType && (o.scopeType === ra.BLOCK && !e.block || o.scopeType === ra.COMMENT && !e.comment || o.scopeType === ra.WORKSPACE && !e.workspace))
              continue;
            let i;
            i = { scope: e, weight: o.weight };
            let r, u;
            const h = (u = (r = o).preconditionFn) == null ? void 0 : u.call(
              r,
              e,
              t
            );
            if (h !== "hidden") {
              if (o.separator) i = Object.assign({}, i, { separator: !0 });
              else {
                const E = typeof o.displayText == "function" ? o.displayText(e) : o.displayText;
                i = Object.assign({}, i, { text: E, callback: o.callback, enabled: h === "enabled" });
              }
              s.push(i);
            }
          }
          return s.sort(function(o, i) {
            return o.weight - i.weight;
          }), s;
        }
      };
      (function(e) {
        var t = e.ScopeType || (e.ScopeType = {});
        t.BLOCK = "block", t.WORKSPACE = "workspace", t.COMMENT = "comment", e.registry = new e();
      })(x || (x = {}));
      var ra = x.ScopeType, Ks = 50, Go = 100, $m = { BLOCK: Ks, BUBBLE: Go }, jp = class {
        constructor(e) {
          this.comment = e, this.startLoc = null, this.workspace = e.workspace;
        }
        isMovable() {
          return this.comment.isOwnMovable() && !this.comment.isDeadOrDying() && !this.workspace.isReadOnly();
        }
        startDrag() {
          this.fireDragStartEvent(), this.startLoc = this.comment.getRelativeToSurfaceXY(), this.workspace.setResizesEnabled(!1);
          let e;
          (e = this.workspace.getLayerManager()) == null || e.moveToDragLayer(this.comment), this.comment.setDragging(!0);
        }
        drag(e) {
          this.comment.moveDuringDrag(e);
        }
        endDrag() {
          this.fireDragEndEvent(), this.fireMoveEvent();
          let e;
          (e = this.workspace.getLayerManager()) == null || e.moveOffDragLayer(this.comment, Ks), this.comment.setDragging(!1), this.comment.snapToGrid(), this.workspace.setResizesEnabled(!0);
        }
        fireDragStartEvent() {
          const e = new (L(m.COMMENT_DRAG))(this.comment, !0);
          k(e);
        }
        fireDragEndEvent() {
          const e = new (L(m.COMMENT_DRAG))(
            this.comment,
            !1
          );
          k(e);
        }
        fireMoveEvent() {
          if (!this.comment.isDeadOrDying()) {
            var e = new (L(m.COMMENT_MOVE))(this.comment);
            e.setReason(["drag"]), e.oldCoordinate_ = this.startLoc, e.recordNew(), k(e);
          }
        }
        revertDrag() {
          this.startLoc && this.comment.moveDuringDrag(this.startLoc);
        }
      }, Jp = /* @__PURE__ */ new WeakMap(), Dr = class {
        constructor(e, t, s, o) {
          this.id = e, this.workspace = t, this.container = s, this.commentView = o;
        }
        isVisible() {
          return this.icon.checkVisibility();
        }
        getCommentView() {
          return this.commentView;
        }
        getSize(e = !1) {
          var t = this.icon.getBBox();
          return t = M.from(t), e && (e = this.getMargin(), t.left -= e, t.top -= e, t.bottom += e, t.right += e), t;
        }
        getMargin() {
          return (this.container.getBBox().height - this.icon.getBBox().height) / 2;
        }
        getFocusableElement() {
          return this.icon;
        }
        getFocusableTree() {
          return this.workspace;
        }
        onNodeFocus() {
          const e = this.getCommentView();
          var t = e.getRelativeToSurfaceXY();
          const s = e.getSize();
          t = new M(t.y, t.y + s.height, t.x, t.x + s.width), e.workspace.scrollBoundsIntoView(t);
        }
        onNodeBlur() {
        }
        canBeFocused() {
          return this.isVisible();
        }
      }, qp = "_collapse_bar_button", Zp = class extends Dr {
        constructor(e, t, s, o) {
          super(e, t, s, o), this.id = e, this.workspace = t, this.container = s, this.commentView = o, this.icon = b(
            g.IMAGE,
            { class: "blocklyFoldoutIcon", href: `${this.workspace.options.pathToMedia}foldout-icon.svg`, id: `${this.id}${qp}` },
            this.container
          ), this.bindId = w(this.icon, "pointerdown", this, this.performAction.bind(this));
        }
        dispose() {
          H(this.bindId);
        }
        reposition() {
          const e = this.getMargin();
          this.icon.setAttribute("y", `${e}`), this.icon.setAttribute(
            "x",
            `${e}`
          );
        }
        performAction(e) {
          K(), this.getCommentView().bringToFront(), e && e instanceof PointerEvent && Ge(e) ? e.stopPropagation() : (this.getCommentView().setCollapsed(!this.getCommentView().isCollapsed()), this.workspace.hideChaff(), e == null || e.stopPropagation());
        }
      }, la = "_comment_textarea_", Pr = class {
        constructor(e, t, s) {
          this.workspace = e, this.onFinishEditing = s, this.textChangeListeners = [], this.text = "", this.foreignObject = b(g.FOREIGNOBJECT, { class: "blocklyCommentForeignObject" }), e = document.createElementNS(xs, "body"), e.setAttribute("xmlns", xs), e.className = "blocklyMinimalBody", this.textArea = document.createElementNS(xs, "textarea"), this.textArea.setAttribute("tabindex", "-1"), this.textArea.setAttribute("dir", this.workspace.RTL ? "RTL" : "LTR"), this.textArea.setAttribute("placeholder", n.Msg$$module$build$src$core$msg.WORKSPACE_COMMENT_DEFAULT_TEXT), R(this.textArea, "blocklyCommentText"), R(
            this.textArea,
            "blocklyTextarea"
          ), R(this.textArea, "blocklyText"), e.appendChild(this.textArea), this.foreignObject.appendChild(e), t && (this.id = t + la, this.textArea.setAttribute("id", this.id)), w(this.textArea, "change", this, this.onTextChange), w(this.textArea, "pointerdown", this, (o) => {
            o.stopPropagation(), n.getFocusManager$$module$build$src$core$focus_manager().focusNode(this), K();
          }), w(this.textArea, "wheel", this, (o) => {
            o.stopPropagation();
          }, !1, { passive: !0 }), w(this.textArea, "keydown", this, this.handleKeyDown);
        }
        getDom() {
          return this.foreignObject;
        }
        getText() {
          return this.text;
        }
        setText(e) {
          this.textArea.value = e, this.onTextChange();
        }
        onTextChange() {
          const e = this.text;
          this.text = this.textArea.value;
          for (let t = this.textChangeListeners.length - 1; t >= 0; t--) this.textChangeListeners[t](e, this.text);
        }
        handleKeyDown(e) {
          (e.key === "Escape" || e.key === "Enter" && (e.ctrlKey || e.metaKey)) && (this.onFinishEditing && this.onFinishEditing(), e.stopPropagation());
        }
        addTextChangeListener(e) {
          this.textChangeListeners.push(e);
        }
        removeTextChangeListener(e) {
          this.textChangeListeners.splice(this.textChangeListeners.indexOf(e), 1);
        }
        setPlaceholderText(e) {
          this.textArea.placeholder = e;
        }
        setEditable(e) {
          e ? this.textArea.removeAttribute("readonly") : this.textArea.setAttribute("readonly", "true");
        }
        updateSize(e, t) {
          this.foreignObject.setAttribute("height", `${e.height - t.height}`), this.foreignObject.setAttribute("width", `${e.width}`), this.foreignObject.setAttribute("y", `${t.height}`), this.workspace.RTL && this.foreignObject.setAttribute("x", `${-e.width}`);
        }
        getFocusableElement() {
          return this.textArea;
        }
        getFocusableTree() {
          return this.workspace;
        }
        onNodeFocus() {
          const e = M.from(this.foreignObject.getBoundingClientRect());
          this.workspace.scrollBoundsIntoView(M.createFromPoint(pi(
            this.workspace,
            e.getOrigin()
          ), e.getWidth(), e.getHeight()));
        }
        onNodeBlur() {
        }
        canBeFocused() {
          return !!this.id;
        }
      }, Qp = "_delete_bar_button", eg = class extends Dr {
        constructor(e, t, s, o) {
          super(e, t, s, o), this.id = e, this.workspace = t, this.container = s, this.commentView = o, this.icon = b(g.IMAGE, {
            class: "blocklyDeleteIcon",
            href: `${this.workspace.options.pathToMedia}delete-icon.svg`,
            id: `${this.id}${Qp}`
          }, s), this.bindId = w(this.icon, "pointerdown", this, this.performAction.bind(this));
        }
        dispose() {
          H(this.bindId);
        }
        reposition() {
          const e = this.getMargin();
          this.icon.setAttribute("x", "0");
          const t = this.container.getBBox();
          this.icon.setAttribute(
            "y",
            `${e}`
          ), this.icon.setAttribute("x", `${t.width - this.getSize(!0).getWidth()}`);
        }
        performAction(e) {
          K(), e && e instanceof PointerEvent && Ge(e) ? e.stopPropagation() : (this.getCommentView().dispose(), e == null || e.stopPropagation(), n.getFocusManager$$module$build$src$core$focus_manager().focusNode(this.workspace));
        }
      }, Ki = class {
        constructor(e, t) {
          this.workspace = e, this.commentId = t, this.collapsed = !1, this.editable = !0, this.location = new I(0, 0), this.sizeChangeListeners = [], this.disposeListeners = [], this.collapseChangeListeners = [], this.resizePointerMoveListener = this.resizePointerUpListener = null, this.disposed = this.disposing = !1, this.svgRoot = b(
            g.G,
            { class: "blocklyComment blocklyEditable blocklyDraggable" }
          ), this.highlightRect = this.createHighlightRect(this.svgRoot), { topBarGroup: this.topBarGroup, topBarBackground: this.topBarBackground, deleteButton: this.deleteButton, foldoutButton: this.foldoutButton, textPreview: this.textPreview, textPreviewNode: this.textPreviewNode } = this.createTopBar(this.svgRoot), this.commentEditor = this.createTextArea(), this.resizeHandle = this.createResizeHandle(this.svgRoot, e);
          let s;
          (s = e.getLayerManager()) == null || s.append(
            this,
            Ks
          ), this.size = Ki.defaultCommentSize, this.setSizeWithoutFiringEvents(this.size), this.moveTo(new I(0, 0));
        }
        createHighlightRect(e) {
          return b(g.RECT, { class: "blocklyCommentHighlight" }, e);
        }
        createTopBar(e) {
          e = b(
            g.G,
            { class: "blocklyCommentTopbar" },
            e
          );
          const t = b(g.RECT, { class: "blocklyCommentTopbarBackground" }, e), s = new eg(this.commentId, this.workspace, e, this), o = new Zp(this.commentId, this.workspace, e, this);
          this.addDisposeListener(() => {
            s.dispose(), o.dispose();
          });
          const i = b(
            g.TEXT,
            { class: "blocklyCommentPreview blocklyCommentText blocklyText" },
            e
          ), r = document.createTextNode("");
          return i.appendChild(r), { topBarGroup: e, topBarBackground: t, deleteButton: s, foldoutButton: o, textPreview: i, textPreviewNode: r };
        }
        createTextArea() {
          const e = new Pr(this.workspace, this.commentId, () => this.svgRoot.focus());
          return this.svgRoot.appendChild(e.getDom()), e.addTextChangeListener((t, s) => {
            this.updateTextPreview(s), this.setSize(this.size);
          }), e;
        }
        getEditorFocusableNode() {
          return this.commentEditor;
        }
        createResizeHandle(e, t) {
          return e = b(g.IMAGE, { class: "blocklyResizeHandle", href: `${t.options.pathToMedia}resize-handle.svg` }, e), w(e, "pointerdown", this, this.onResizePointerDown), e;
        }
        getSvgRoot() {
          return this.svgRoot;
        }
        getSize() {
          return this.collapsed ? this.topBarBackground.getBBox() : this.size;
        }
        setSizeWithoutFiringEvents(e) {
          const t = this.topBarBackground.getBBox(), s = this.textPreview.getBBox(), o = this.resizeHandle.getBBox();
          this.size = e = D.max(e, this.calcMinSize(t)), this.svgRoot.setAttribute("height", `${e.height}`), this.svgRoot.setAttribute("width", `${e.width}`), this.updateHighlightRect(e), this.updateTopBarSize(e), this.commentEditor.updateSize(e, t), this.deleteButton.reposition(), this.foldoutButton.reposition(), this.updateTextPreviewSize(e, t, s), this.updateResizeHandlePosition(e, o);
        }
        setSize(e) {
          const t = this.preResizeSize || this.size;
          this.setSizeWithoutFiringEvents(e), this.onSizeChange(
            t,
            this.size
          );
        }
        calcMinSize(e) {
          var t;
          this.updateTextPreview((t = this.commentEditor.getText()) != null ? t : "");
          let s = t = ge(this.textPreview);
          return this.foldoutButton.isVisible() ? s += this.foldoutButton.getSize(!0).getWidth() : t && (s += 4), this.deleteButton.isVisible() ? s += this.deleteButton.getSize(!0).getWidth() : t && (s += 4), new D(s, e.height + 20);
        }
        updateHighlightRect(e) {
          this.highlightRect.setAttribute("height", `${e.height}`), this.highlightRect.setAttribute(
            "width",
            `${e.width}`
          ), this.workspace.RTL && this.highlightRect.setAttribute("x", `${-e.width}`);
        }
        updateTopBarSize(e) {
          this.topBarBackground.setAttribute("width", `${e.width}`);
        }
        updateTextPreviewSize(e, t, s) {
          t = (t.height - s.height) / 2;
          const o = this.foldoutButton.getSize(!0), i = this.deleteButton.getSize(!0);
          e = e.width - o.getWidth() - i.getWidth(), this.textPreview.setAttribute("x", `${(this.workspace.RTL ? -1 : 1) * o.getWidth()}`), this.textPreview.setAttribute("y", `${t + s.height / 2}`), this.textPreview.setAttribute("width", `${e}`);
        }
        updateResizeHandlePosition(e, t) {
          this.resizeHandle.setAttribute("y", `${e.height - t.height}`), this.resizeHandle.setAttribute("x", `${e.width - t.width}`);
        }
        onSizeChange(e, t) {
          for (let s = this.sizeChangeListeners.length - 1; s >= 0; s--) this.sizeChangeListeners[s](e, t);
        }
        addSizeChangeListener(e) {
          this.sizeChangeListeners.push(e);
        }
        removeSizeChangeListener(e) {
          this.sizeChangeListeners.splice(this.sizeChangeListeners.indexOf(e), 1);
        }
        onResizePointerDown(e) {
          this.isEditable() && (this.bringToFront(), Ge(e) || (this.preResizeSize = this.getSize(), Xn(this.workspace, e, new I(this.workspace.RTL ? -this.getSize().width : this.getSize().width, this.getSize().height)), this.resizePointerUpListener = w(document, "pointerup", this, this.onResizePointerUp), this.resizePointerMoveListener = w(document, "pointermove", this, this.onResizePointerMove), this.workspace.hideChaff()), e.stopPropagation());
        }
        onResizePointerUp(e) {
          K(), this.resizePointerUpListener && (H(this.resizePointerUpListener), this.resizePointerUpListener = null), this.resizePointerMoveListener && (H(this.resizePointerMoveListener), this.resizePointerMoveListener = null), this.setSize(this.size), this.preResizeSize = void 0;
        }
        onResizePointerMove(e) {
          e = zn(
            this.workspace,
            e
          ), this.setSizeWithoutFiringEvents(new D(this.workspace.RTL ? -e.x : e.x, e.y));
        }
        isCollapsed() {
          return this.collapsed;
        }
        setCollapsed(e) {
          (this.collapsed = e) ? R(this.svgRoot, "blocklyCollapsed") : F(this.svgRoot, "blocklyCollapsed"), this.setSizeWithoutFiringEvents(this.size), this.onCollapse();
        }
        onCollapse() {
          for (let e = this.collapseChangeListeners.length - 1; e >= 0; e--) this.collapseChangeListeners[e](this.collapsed);
        }
        addOnCollapseListener(e) {
          this.collapseChangeListeners.push(e);
        }
        removeOnCollapseListener(e) {
          this.collapseChangeListeners.splice(
            this.collapseChangeListeners.indexOf(e),
            1
          );
        }
        isEditable() {
          return this.editable;
        }
        setEditable(e) {
          (this.editable = e) ? (R(this.svgRoot, "blocklyEditable"), F(this.svgRoot, "blocklyReadonly")) : (F(this.svgRoot, "blocklyEditable"), R(this.svgRoot, "blocklyReadonly")), this.commentEditor.setEditable(e);
        }
        getRelativeToSurfaceXY() {
          return this.location;
        }
        moveTo(e) {
          this.location = e, this.svgRoot.setAttribute(
            "transform",
            `translate(${e.x}, ${e.y})`
          );
        }
        getText() {
          return this.commentEditor.getText();
        }
        setText(e) {
          this.commentEditor.setText(e);
        }
        setPlaceholderText(e) {
          this.commentEditor.setPlaceholderText(e);
        }
        addTextChangeListener(e) {
          this.commentEditor.addTextChangeListener(e);
        }
        removeTextChangeListener(e) {
          this.commentEditor.removeTextChangeListener(e);
        }
        updateTextPreview(e) {
          this.textPreviewNode.textContent = this.truncateText(e);
        }
        truncateText(e) {
          return e.length >= 12 ? `${e.substring(0, 9)}...` : e;
        }
        bringToFront() {
          const e = this.svgRoot.parentNode, t = e.childNodes;
          t[t.length - 1] !== this.svgRoot && e.appendChild(this.svgRoot);
        }
        onDeleteDown(e) {
          K(), Ge(e) || this.dispose(), e.stopPropagation();
        }
        dispose() {
          this.disposing = !0, G(this.svgRoot);
          for (let e = this.disposeListeners.length - 1; e >= 0; e--) this.disposeListeners[e]();
          this.disposeListeners.length = 0, this.disposed = !0;
        }
        isDisposed() {
          return this.disposed;
        }
        isDeadOrDying() {
          return this.disposing || this.disposed;
        }
        addDisposeListener(e) {
          this.disposeListeners.push(e);
        }
        removeDisposeListener(e) {
          this.disposeListeners.splice(this.disposeListeners.indexOf(e), 1);
        }
        getCommentBarButtons() {
          return [this.foldoutButton, this.deleteButton];
        }
      };
      Ki.defaultCommentSize = new D(120, 100), Tt(`
.injectionDiv {
  --commentFillColour: #FFFCC7;
  --commentBorderColour: #F2E49B;
}

.blocklyComment .blocklyTextarea {
  background-color: var(--commentFillColour);
  border: 1px solid var(--commentBorderColour);
  box-sizing: border-box;
  display: block;
  outline: 0;
  padding: 5px;
  resize: none;
  width: 100%;
  height: 100%;
}

.blocklyReadonly.blocklyComment .blocklyTextarea {
  cursor: inherit;
}

.blocklyDeleteIcon {
  width: 20px;
  height: 20px;
  display: none;
  cursor: pointer;
}

.blocklyFoldoutIcon {
  width: 20px;
  height: 20px;
  transform-origin: 12px 12px;
  cursor: pointer;
}
.blocklyResizeHandle {
  width: 12px;
  height: 12px;
  cursor: se-resize;
}
.blocklyReadonly.blocklyComment .blocklyResizeHandle {
  cursor: inherit;
}

.blocklyCommentTopbarBackground {
  fill: var(--commentBorderColour);
  height: 24px;
}

.blocklyComment .blocklyCommentPreview.blocklyText {
  fill: #000;
  dominant-baseline: middle;
  visibility: hidden;
}

.blocklyCollapsed.blocklyComment .blocklyCommentPreview {
  visibility: visible;
}

.blocklyCollapsed.blocklyComment .blocklyCommentForeignObject,
.blocklyCollapsed.blocklyComment .blocklyResizeHandle {
  display: none;
}

.blocklyCollapsed.blocklyComment .blocklyFoldoutIcon {
  transform: rotate(-90deg);
}

.blocklyRTL .blocklyCommentTopbar {
  transform: scale(-1, 1);
}

.blocklyRTL .blocklyCommentForeignObject {
  direction: rtl;
}

.blocklyRTL .blocklyCommentPreview {
  /* Revert the scale and control RTL using direction instead. */
  transform: scale(-1, 1);
  direction: rtl;
}

.blocklyRTL .blocklyResizeHandle {
  transform: scale(-1, 1);
  cursor: sw-resize;
}

.blocklyCommentHighlight {
  fill: none;
}

.blocklyCommentText.blocklyActiveFocus {
  border-color: #fc3;
  border-width: 2px;
}

.blocklySelected .blocklyCommentHighlight {
  stroke: #fc3;
  stroke-width: 3px;
}

.blocklyCollapsed.blocklySelected .blocklyCommentHighlight {
  stroke: none;
}

.blocklyCollapsed.blocklySelected .blocklyCommentTopbarBackground {
  stroke: #fc3;
  stroke-width: 3px;
}
`);
      var Br = class {
        constructor(e, t) {
          this.workspace = e, this.text = "", this.collapsed = !1, this.deletable = this.movable = this.editable = !0, this.location = new I(0, 0), this.disposing = this.disposed = !1, this.id = t && !e.getCommentById(t) ? t : Qe(), this.size = Ki.defaultCommentSize, e.addTopComment(this), this.fireCreateEvent();
        }
        fireCreateEvent() {
          j() && k(new (L(m.COMMENT_CREATE))(this));
        }
        fireDeleteEvent() {
          j() && k(new (L(m.COMMENT_DELETE))(this));
        }
        fireChangeEvent(e, t) {
          j() && k(new (L(m.COMMENT_CHANGE))(
            this,
            e,
            t
          ));
        }
        fireCollapseEvent(e) {
          j() && k(new (L(m.COMMENT_COLLAPSE))(this, e));
        }
        setText(e) {
          const t = this.text;
          this.text = e, this.fireChangeEvent(t, e);
        }
        getText() {
          return this.text;
        }
        setSize(e) {
          const t = new (L(m.COMMENT_RESIZE))(this);
          this.size = e, t.recordCurrentSizeAsNewSize(), k(t);
        }
        getSize() {
          return this.size;
        }
        setCollapsed(e) {
          this.collapsed = e, this.fireCollapseEvent(e);
        }
        isCollapsed() {
          return this.collapsed;
        }
        setEditable(e) {
          this.editable = e;
        }
        isEditable() {
          return this.isOwnEditable() && !this.workspace.isReadOnly();
        }
        isOwnEditable() {
          return this.editable;
        }
        setMovable(e) {
          this.movable = e;
        }
        isMovable() {
          return this.isOwnMovable() && !this.workspace.isReadOnly() && !this.workspace.isFlyout;
        }
        isOwnMovable() {
          return this.movable;
        }
        setDeletable(e) {
          this.deletable = e;
        }
        isDeletable() {
          return this.isOwnDeletable() && !this.isDeadOrDying() && !this.workspace.isReadOnly() && !this.workspace.isFlyout;
        }
        isOwnDeletable() {
          return this.deletable;
        }
        moveTo(e, t) {
          const s = new (L(m.COMMENT_MOVE))(this);
          t && s.setReason(t), this.location = e, s.recordNew(), k(s);
        }
        getRelativeToSurfaceXY() {
          return this.location;
        }
        dispose() {
          this.disposing = !0, this.fireDeleteEvent(), this.workspace.removeTopComment(this), this.disposed = !0;
        }
        isDisposed() {
          return this.disposed;
        }
        isDeadOrDying() {
          return this.disposing || this.disposed;
        }
      }, jt = class extends Br {
        constructor(e, t) {
          super(e, t), this.dragStrategy = new jp(this), this.workspace = e, this.view = new Ki(e, this.id), this.view.setSize(this.getSize()), this.view.setEditable(this.isEditable()), this.view.getSvgRoot().setAttribute(
            "data-id",
            this.id
          ), this.view.getSvgRoot().setAttribute("id", this.id), this.addModelUpdateBindings(), w(this.view.getSvgRoot(), "pointerdown", this, this.startGesture);
        }
        addModelUpdateBindings() {
          this.view.addTextChangeListener((e, t) => void super.setText(t)), this.view.addSizeChangeListener((e, t) => void super.setSize(t)), this.view.addOnCollapseListener(() => void super.setCollapsed(this.view.isCollapsed())), this.view.addDisposeListener(() => {
            this.isDeadOrDying() || this.dispose();
          });
        }
        setText(e) {
          this.view.setText(e);
        }
        setPlaceholderText(e) {
          this.view.setPlaceholderText(e);
        }
        setSize(e) {
          this.view.setSize(e);
        }
        setCollapsed(e) {
          this.view.setCollapsed(e);
        }
        setEditable(e) {
          super.setEditable(e), this.view.setEditable(this.isEditable());
        }
        getSvgRoot() {
          return this.view.getSvgRoot();
        }
        getSize() {
          return super.getSize();
        }
        getBoundingRectangle() {
          const e = this.getRelativeToSurfaceXY();
          var t, s;
          const o = (s = (t = this.view) == null ? void 0 : t.getSize()) != null ? s : this.getSize();
          return this.workspace.RTL ? (t = e.x - o.width, s = e.x) : (t = e.x, s = e.x + o.width), new M(e.y, e.y + o.height, t, s);
        }
        moveBy(e, t, s) {
          const o = this.getRelativeToSurfaceXY();
          e = new I(o.x + e, o.y + t), this.moveTo(e, s);
        }
        moveTo(e, t) {
          super.moveTo(e, t), this.view.moveTo(e);
        }
        moveDuringDrag(e) {
          this.location = e, this.view.moveTo(e);
        }
        setDragging(e) {
          e ? R(this.getSvgRoot(), "blocklyDragging") : F(this.getSvgRoot(), "blocklyDragging");
        }
        dispose() {
          this.disposing = !0;
          const e = n.getFocusManager$$module$build$src$core$focus_manager();
          e.getFocusedNode() === this && setTimeout(() => e.focusTree(this.workspace), 0), this.view.isDeadOrDying() || this.view.dispose(), super.dispose();
        }
        startGesture(e) {
          const t = this.workspace.getGesture(e);
          t && (t.handleCommentStart(e, this), n.getFocusManager$$module$build$src$core$focus_manager().focusNode(this));
        }
        setDeleteStyle(e) {
          e ? R(this.getSvgRoot(), "blocklyDraggingDelete") : F(this.getSvgRoot(), "blocklyDraggingDelete");
        }
        isCopyable() {
          return this.isOwnMovable() && this.isOwnDeletable();
        }
        isMovable() {
          return this.dragStrategy.isMovable();
        }
        startDrag() {
          this.dragStrategy.startDrag();
        }
        drag(e) {
          this.dragStrategy.drag(e);
        }
        endDrag() {
          this.dragStrategy.endDrag();
        }
        revertDrag() {
          this.dragStrategy.revertDrag();
        }
        select() {
          R(
            this.getSvgRoot(),
            "blocklySelected"
          ), S(this);
        }
        unselect() {
          F(this.getSvgRoot(), "blocklySelected"), S(null);
        }
        toCopyData() {
          return { paster: fr.TYPE, commentState: mo(this, { addCoordinates: !0, saveIds: !1 }) };
        }
        showContextMenu(e) {
          const t = x.registry.getContextMenuOptions({
            comment: this,
            focusedNode: this
          }, e);
          let s;
          s = e instanceof PointerEvent ? new I(e.clientX, e.clientY) : go(this.workspace, this.getRelativeToSurfaceXY()).translate(10, 10), Co(e, t, this.workspace.RTL, this.workspace, s);
        }
        snapToGrid() {
          if (!this.isDeadOrDying()) {
            var e = this.workspace.getGrid();
            if (e != null && e.shouldSnap()) {
              var t = this.getRelativeToSurfaceXY();
              e = e.alignXY(t), e !== t && this.moveTo(
                e,
                ["snap"]
              );
            }
          }
        }
        getEditorFocusableNode() {
          return this.view.getEditorFocusableNode();
        }
        getFocusableElement() {
          return this.getSvgRoot();
        }
        getFocusableTree() {
          return this.workspace;
        }
        onNodeFocus() {
          this.select();
          let e;
          (e = this.getSvgRoot().parentElement) == null || e.appendChild(this.getSvgRoot()), this.workspace.scrollBoundsIntoView(this.getBoundingRectangle());
        }
        onNodeBlur() {
          this.unselect();
        }
        canBeFocused() {
          return !0;
        }
      }, ke = {};
      ke.appendDomToWorkspace = kd, ke.blockToDom = as, ke.blockToDomWithXY = yi, ke.clearWorkspaceAndLoadFromXml = Ad, ke.deleteNext = Ud, ke.domToBlock = n.domToBlock$$module$build$src$core$xml, ke.domToBlockInternal = Ds, ke.domToPrettyText = Ld, ke.domToText = St, ke.domToVariables = Ic, ke.domToWorkspace = n.domToWorkspace$$module$build$src$core$xml, ke.loadWorkspaceComment = bc, ke.saveWorkspaceComment = Ci, ke.variablesToDom = Ec, ke.workspaceToDom = Cd;
      var ca = class extends it {
        constructor(e) {
          super(e), this.type = m.BLOCK_CREATE, e && (e.isShadow() && (this.recordUndo = !1), this.xml = yi(e), this.ids = co(e), this.json = tt(e, { addCoordinates: !0 }));
        }
        toJson() {
          const e = super.toJson();
          if (!this.xml) throw Error("The block XML is undefined. Either pass a block to the constructor, or call fromJson");
          if (!this.ids) throw Error("The block IDs are undefined. Either pass a block to the constructor, or call fromJson");
          if (!this.json) throw Error("The block JSON is undefined. Either pass a block to the constructor, or call fromJson");
          return e.xml = St(this.xml), e.ids = this.ids, e.json = this.json, this.recordUndo || (e.recordUndo = this.recordUndo), e;
        }
        static fromJson(e, t, s) {
          return t = it.fromJson(e, t, s ?? new ca()), t.xml = n.textToDom$$module$build$src$core$utils$xml(e.xml), t.ids = e.ids, t.json = e.json, e.recordUndo !== void 0 && (t.recordUndo = e.recordUndo), t;
        }
        run(e) {
          const t = this.getEventWorkspace_();
          if (!this.json) throw Error("The block JSON is undefined. Either pass a block to the constructor, or call fromJson");
          if (!this.ids) throw Error("The block IDs are undefined. Either pass a block to the constructor, or call fromJson");
          if (!pm(t, this.ids)) if (e) As(this.json, t);
          else for (e = 0; e < this.ids.length; e++) {
            const s = this.ids[e], o = t.getBlockById(s);
            o ? o.dispose(!1) : s === this.blockId && console.warn("Can't uncreate non-existent block: " + s);
          }
        }
      }, pm = function(e, t) {
        return t.map((s) => e.getBlockById(s)).filter((s) => s && s.isShadow()).length === t.length;
      };
      c(f.EVENT, m.BLOCK_CREATE, ca);
      var ua = class extends me {
        constructor(e, t) {
          super(t), this.type = m.THEME_CHANGE, this.themeName = e;
        }
        toJson() {
          const e = super.toJson();
          if (!this.themeName) throw Error("The theme name is undefined. Either pass a theme name to the constructor, or call fromJson");
          return e.themeName = this.themeName, e;
        }
        static fromJson(e, t, s) {
          return t = me.fromJson(
            e,
            t,
            s ?? new ua()
          ), t.themeName = e.themeName, t;
        }
      };
      c(f.EVENT, m.THEME_CHANGE, ua);
      var aa = class extends me {
        constructor(e, t, s, o, i) {
          super(o), this.type = m.VIEWPORT_CHANGE, this.viewTop = e, this.viewLeft = t, this.scale = s, this.oldScale = i;
        }
        toJson() {
          const e = super.toJson();
          if (this.viewTop === void 0) throw Error("The view top is undefined. Either pass a value to the constructor, or call fromJson");
          if (this.viewLeft === void 0) throw Error("The view left is undefined. Either pass a value to the constructor, or call fromJson");
          if (this.scale === void 0) throw Error("The scale is undefined. Either pass a value to the constructor, or call fromJson");
          if (this.oldScale === void 0) throw Error("The old scale is undefined. Either pass a value to the constructor, or call fromJson");
          return e.viewTop = this.viewTop, e.viewLeft = this.viewLeft, e.scale = this.scale, e.oldScale = this.oldScale, e;
        }
        static fromJson(e, t, s) {
          return t = me.fromJson(e, t, s ?? new aa()), t.viewTop = e.viewTop, t.viewLeft = e.viewLeft, t.scale = e.scale, t.oldScale = e.oldScale, t;
        }
      };
      c(f.EVENT, m.VIEWPORT_CHANGE, aa);
      var tg = { fromJsonInternal: Gd }, xr = { TEST_ONLY: tg };
      xr.fromJson = n.fromJson$$module$build$src$core$field_registry, xr.register = Rt, xr.unregister = Hd;
      var ve = class extends X {
        constructor(e, t, s) {
          super(X.SKIP_SETUP), this.svgArrow = this.arrow = this.imageElement = this.menu_ = this.selectedMenuItem = null, this.SERIALIZABLE = !0, this.clickTarget_ = this.suffixField = this.prefixField = this.generatedOptions = null, e !== X.SKIP_SETUP && (this.setOptions(e), s && this.configure_(s), t && this.setValidator(t));
        }
        fromXml(e) {
          this.isOptionListDynamic() && this.getOptions(!1), this.setValue(e.textContent);
        }
        loadState(e) {
          this.loadLegacyState(ve, e) || (this.isOptionListDynamic() && this.getOptions(!1), this.setValue(e));
        }
        initView() {
          this.shouldAddBorderRect_() ? this.createBorderRect_() : this.clickTarget_ = this.sourceBlock_.getSvgRoot(), this.createTextElement_(), this.imageElement = b(g.IMAGE, {}, this.fieldGroup_), this.getConstants().FIELD_DROPDOWN_SVG_ARROW ? this.createSVGArrow_() : this.createTextArrow_(), this.borderRect_ && R(this.borderRect_, "blocklyDropdownRect"), this.fieldGroup_ && (R(this.fieldGroup_, "blocklyField"), R(this.fieldGroup_, "blocklyDropdownField"));
        }
        shouldAddBorderRect_() {
          let e;
          return !this.getConstants().FIELD_DROPDOWN_NO_BORDER_RECT_SHADOW || this.getConstants().FIELD_DROPDOWN_NO_BORDER_RECT_SHADOW && !((e = this.getSourceBlock()) != null && e.isShadow());
        }
        createTextArrow_() {
          this.arrow = b(g.TSPAN, {}, this.textElement_);
          let e;
          this.arrow.appendChild(document.createTextNode((e = this.getSourceBlock()) != null && e.RTL ? ve.ARROW_CHAR + " " : " " + ve.ARROW_CHAR)), this.getConstants().FIELD_TEXT_BASELINE_CENTER && this.arrow.setAttribute("dominant-baseline", "central");
          let t;
          (t = this.getSourceBlock()) != null && t.RTL ? this.getTextElement().insertBefore(this.arrow, this.textContent_) : this.getTextElement().appendChild(this.arrow);
        }
        createSVGArrow_() {
          this.svgArrow = b(g.IMAGE, { height: this.getConstants().FIELD_DROPDOWN_SVG_ARROW_SIZE + "px", width: this.getConstants().FIELD_DROPDOWN_SVG_ARROW_SIZE + "px" }, this.fieldGroup_), this.svgArrow.setAttributeNS(
            Xe,
            "xlink:href",
            this.getConstants().FIELD_DROPDOWN_SVG_ARROW_DATAURI
          );
        }
        showEditor_(e) {
          var t = this.getSourceBlock();
          if (!t) throw new he();
          this.dropdownCreate(), this.menu_ && (this.menu_.openingCoords = e && typeof e.clientX == "number" ? new I(e.clientX, e.clientY) : null, Bn(), e = this.menu_.render(Pn()), R(
            e,
            "blocklyDropdownMenu"
          ), this.getConstants().FIELD_DROPDOWN_COLOURED_DIV && (t = t.getColour(), e = this.sourceBlock_.getColourTertiary(), Fl(t, e)), Ul(this, this.dropdownDispose_.bind(this)), Pn().style.height = `${this.menu_.getSize().height}px`, this.menu_.focus(), this.selectedMenuItem && this.menu_.setHighlighted(this.selectedMenuItem), this.applyColour());
        }
        dropdownCreate() {
          const e = this.getSourceBlock();
          if (!e) throw new he();
          const t = new Gu();
          t.setRole(ze.LISTBOX), this.menu_ = t;
          const s = this.getOptions(!1);
          this.selectedMenuItem = null;
          for (let i = 0; i < s.length; i++) {
            var o = s[i];
            if (o === ve.SEPARATOR) {
              t.addChild(new _p());
              continue;
            }
            const [r, u] = o;
            yo(r) ? (o = new Image(r.width, r.height), o.src = r.src, o.alt = r.alt) : o = r, o = new br(o, u), o.setRole(ze.OPTION), o.setRightToLeft(e.RTL), o.setCheckable(!0), t.addChild(o), o.setChecked(u === this.value_), u === this.value_ && (this.selectedMenuItem = o), o.onAction(this.handleMenuActionEvent, this);
          }
        }
        dropdownDispose_() {
          this.menu_ && this.menu_.dispose(), this.selectedMenuItem = this.menu_ = null, this.applyColour();
        }
        handleMenuActionEvent(e) {
          xn(
            this,
            !0
          ), this.onItemSelected_(this.menu_, e);
        }
        onItemSelected_(e, t) {
          this.setValue(t.getValue());
        }
        isOptionListDynamic() {
          return typeof this.menuGenerator_ == "function";
        }
        getOptions(e) {
          if (!this.menuGenerator_) throw TypeError("A menu generator was never defined.");
          return Array.isArray(this.menuGenerator_) ? this.menuGenerator_ : e && this.generatedOptions ? this.generatedOptions : (this.generatedOptions = this.menuGenerator_(), this.validateOptions(this.generatedOptions), this.generatedOptions);
        }
        setOptions(e) {
          Array.isArray(e) ? (this.validateOptions(e), e = this.trimOptions(e), this.menuGenerator_ = e.options, this.prefixField = e.prefix || null, this.suffixField = e.suffix || null) : this.menuGenerator_ = e, this.selectedOption = this.getOptions(!1)[0], this.setValue(this.selectedOption[1]);
        }
        doClassValidation_(e) {
          return this.getOptions(!0).some((t) => t[1] === e) ? e : (this.sourceBlock_ && console.warn("Cannot set the dropdown's value to an unavailable option. Block type: " + this.sourceBlock_.type + ", Field name: " + this.name + ", Value: " + e), null);
        }
        doValueUpdate_(e) {
          super.doValueUpdate_(e), e = this.getOptions(!0);
          for (let t = 0, s; s = e[t]; t++) s[1] === this.value_ && (this.selectedOption = s);
        }
        applyColour() {
          const e = this.sourceBlock_;
          this.borderRect_ && (this.borderRect_.setAttribute("stroke", e.getColourTertiary()), this.menu_ ? this.borderRect_.setAttribute("fill", e.getColourTertiary()) : this.borderRect_.setAttribute("fill", "transparent")), e && this.arrow && (e.isShadow() ? this.arrow.style.fill = e.getColourSecondary() : this.arrow.style.fill = e.getColour());
        }
        render_() {
          this.getTextContent().nodeValue = "", this.imageElement.style.display = "none";
          const e = this.selectedOption && this.selectedOption[0];
          yo(e) ? this.renderSelectedImage(e) : this.renderSelectedText(), this.positionBorderRect_();
        }
        renderSelectedImage(e) {
          const t = this.getSourceBlock();
          if (!t) throw new he();
          this.imageElement.style.display = "", this.imageElement.setAttributeNS(Xe, "xlink:href", e.src), this.imageElement.setAttribute("height", String(e.height)), this.imageElement.setAttribute("width", String(e.width));
          const s = Number(e.height);
          e = Number(e.width);
          var o = !!this.borderRect_;
          const i = Math.max(o ? this.getConstants().FIELD_DROPDOWN_BORDER_RECT_HEIGHT : 0, s + ve.IMAGE_Y_PADDING);
          o = o ? this.getConstants().FIELD_BORDER_RECT_X_PADDING : 0;
          let r;
          r = this.svgArrow ? this.positionSVGArrow(e + o, i / 2 - this.getConstants().FIELD_DROPDOWN_SVG_ARROW_SIZE / 2) : ge(this.arrow), this.size_ = new D(e + r + o * 2, i);
          let u = 0;
          t.RTL ? this.imageElement.setAttribute("x", `${o + r}`) : (u = e + r, this.getTextElement().setAttribute("text-anchor", "end"), this.imageElement.setAttribute("x", `${o}`)), this.imageElement.setAttribute("y", String(i / 2 - s / 2)), this.positionTextElement_(u + o, e + r);
        }
        renderSelectedText() {
          this.getTextContent().nodeValue = this.getDisplayText_();
          var e = this.getTextElement();
          R(e, "blocklyDropdownText"), e.setAttribute("text-anchor", "start");
          var t = !!this.borderRect_;
          e = Math.max(t ? this.getConstants().FIELD_DROPDOWN_BORDER_RECT_HEIGHT : 0, this.getConstants().FIELD_TEXT_HEIGHT);
          const s = ge(this.getTextElement());
          t = t ? this.getConstants().FIELD_BORDER_RECT_X_PADDING : 0;
          let o = 0;
          this.svgArrow && (o = this.positionSVGArrow(s + t, e / 2 - this.getConstants().FIELD_DROPDOWN_SVG_ARROW_SIZE / 2)), this.size_ = new D(s + o + t * 2, e), this.positionTextElement_(t, s);
        }
        positionSVGArrow(e, t) {
          if (!this.svgArrow) return 0;
          const s = this.getSourceBlock();
          if (!s) throw new he();
          const o = this.borderRect_ ? this.getConstants().FIELD_BORDER_RECT_X_PADDING : 0, i = this.getConstants().FIELD_DROPDOWN_SVG_ARROW_PADDING, r = this.getConstants().FIELD_DROPDOWN_SVG_ARROW_SIZE;
          return this.svgArrow.setAttribute("transform", "translate(" + (s.RTL ? o : e + i) + "," + t + ")"), r + i;
        }
        getText_() {
          if (!this.selectedOption) return null;
          const e = this.selectedOption[0];
          if (yo(e)) return e.alt;
          if (typeof HTMLElement < "u" && e instanceof HTMLElement) {
            let t, s;
            return (s = (t = e.title) != null ? t : e.ariaLabel) != null ? s : e.innerText;
          }
          return typeof e == "string" ? e : (console.warn("Can't get text for existing dropdown option. If you're using HTMLElement dropdown options in node, ensure you're using jsdom-global or similar."), null);
        }
        static fromJson(e) {
          if (!e.options) throw Error("options are required for the dropdown field. The options property must be assigned an array of [humanReadableValue, languageNeutralValue] tuples.");
          return new this(e.options, void 0, e);
        }
        trimOptions(e) {
          let t = !1;
          const s = e.map((u) => {
            if (u === ve.SEPARATOR) return t = !0, u;
            const [h, E] = u;
            return typeof h == "string" ? [le(h), E] : (t = !0, [yo(h) ? Object.assign({}, h, { alt: le(h.alt) }) : h, E]);
          });
          if (t || e.length < 2) return { options: s };
          var o = s.map(([u]) => u), i = bi(o);
          e = Jl(o, i);
          const r = ql(o, i);
          return !e && !r || i <= e + r ? { options: s } : (i = e ? o[0].substring(0, e - 1) : void 0, o = r ? o[0].substr(1 - r) : void 0, { options: this.applyTrim(s, e, r), prefix: i, suffix: o });
        }
        applyTrim(e, t, s) {
          return e.map(([o, i]) => [o.substring(t, o.length - s), i]);
        }
        validateOptions(e) {
          if (!Array.isArray(e)) throw TypeError("FieldDropdown options must be an array.");
          if (!e.length) throw TypeError("FieldDropdown options must not be an empty array.");
          let t = !1;
          for (let s = 0; s < e.length; s++) {
            const o = e[s];
            Array.isArray(o) || o === ve.SEPARATOR ? typeof o[1] != "string" ? (t = !0, console.error(`Invalid option[${s}]: Each FieldDropdown option id must be a string.
          Found ${o[1]} in: ${o}`)) : !o[0] || typeof o[0] == "string" || yo(o[0]) || typeof HTMLElement < "u" && o[0] instanceof HTMLElement || (t = !0, console.error(`Invalid option[${s}]: Each FieldDropdown option must have a string
          label, image description, or HTML element. Found ${o[0]} in: ${o}`)) : (t = !0, console.error(`Invalid option[${s}]: Each FieldDropdown option must be an array or
          the string literal 'separator'. Found: ${o}`));
          }
          if (t) throw TypeError("Found invalid FieldDropdown options.");
        }
      };
      ve.SEPARATOR = "separator", ve.ARROW_CHAR = "▾", ve.IMAGE_Y_OFFSET = 5, ve.IMAGE_Y_PADDING = ve.IMAGE_Y_OFFSET * 2, Rt("field_dropdown", ve);
      var js = class {
        constructor(e, t, s, o) {
          this.name = e, this.startHats = !1, this.blockStyles = t || /* @__PURE__ */ Object.create(null), this.categoryStyles = s || /* @__PURE__ */ Object.create(null), this.componentStyles = o || /* @__PURE__ */ Object.create(null), this.fontStyle = /* @__PURE__ */ Object.create(null), c(f.THEME, e, this, !0);
        }
        getClassName() {
          return this.name + "-theme";
        }
        setBlockStyle(e, t) {
          this.blockStyles[e] = t;
        }
        setCategoryStyle(e, t) {
          this.categoryStyles[e] = t;
        }
        getComponentStyle(e) {
          if (e = this.componentStyles[e], !e) return null;
          if (typeof e == "string") {
            const t = this.getComponentStyle(e);
            if (t) return t;
          }
          return `${e}`;
        }
        setComponentStyle(e, t) {
          this.componentStyles[e] = t;
        }
        setFontStyle(e) {
          this.fontStyle = e;
        }
        setStartHats(e) {
          this.startHats = e;
        }
        static defineTheme(e, t) {
          e = e.toLowerCase();
          const s = new js(e);
          let o = t.base;
          if (o) {
            if (typeof o == "string") {
              let i;
              o = (i = lt(f.THEME, o)) != null ? i : void 0;
            }
            o instanceof js && (et(s, o), s.name = e);
          }
          return et(s.blockStyles, t.blockStyles), et(s.categoryStyles, t.categoryStyles), et(s.componentStyles, t.componentStyles), et(s.fontStyle, t.fontStyle), t.startHats !== null && (s.startHats = t.startHats), s;
        }
      }, gm = { colour_blocks: { colourPrimary: "20" }, list_blocks: { colourPrimary: "260" }, logic_blocks: { colourPrimary: "210" }, loop_blocks: { colourPrimary: "120" }, math_blocks: { colourPrimary: "230" }, procedure_blocks: { colourPrimary: "290" }, text_blocks: { colourPrimary: "160" }, variable_blocks: { colourPrimary: "330" }, variable_dynamic_blocks: { colourPrimary: "310" }, hat_blocks: { colourPrimary: "330", hat: "cap" } }, _m = {
        colour_category: { colour: "20" },
        list_category: { colour: "260" },
        logic_category: { colour: "210" },
        loop_category: { colour: "120" },
        math_category: { colour: "230" },
        procedure_category: { colour: "290" },
        text_category: { colour: "160" },
        variable_category: { colour: "330" },
        variable_dynamic_category: { colour: "310" }
      }, Fr = new js("classic", gm, _m), Ct = class {
        constructor(e) {
          this.gridPattern = null, this.getMetrics = this.setMetrics = void 0;
          let t = null, s = !1;
          var o = !1, i = !1, r = !1, u = !1, h = !1;
          const E = !!e.readOnly;
          if (!E) {
            var y;
            t = mn((y = e.toolbox) != null ? y : null), s = Tn(t), o = e.trashcan, o = o === void 0 ? s : o, i = e.collapse, i = i === void 0 ? s : i, r = e.comments, r = r === void 0 ? s : r, u = e.disable, u = u === void 0 ? s : u, h = e.sounds, h = h === void 0 ? !0 : h;
          }
          y = e.maxTrashcanContents, o ? y === void 0 && (y = 32) : y = 0;
          const se = !!e.rtl;
          let Y = e.horizontalLayout;
          Y === void 0 && (Y = !1);
          var Le = e.toolboxPosition !== "end";
          Le = Y ? Le ? P.TOP : P.BOTTOM : Le === se ? P.RIGHT : P.LEFT;
          let Qt = e.css;
          Qt === void 0 && (Qt = !0);
          let wt = "https://blockly-demo.appspot.com/static/media/";
          e.media && (wt = e.media.endsWith("/") ? e.media : e.media + "/");
          const V_ = e.oneBasedIndex, Jm = e.renderer || "geras", qm = e.plugins || {};
          let lh = e.modalInputs;
          lh === void 0 && (lh = !0), this.RTL = se, this.oneBasedIndex = V_ === void 0 ? !0 : V_, this.collapse = i, this.comments = r, this.disable = u, this.readOnly = E, this.maxBlocks = e.maxBlocks || 1 / 0;
          let W_;
          this.maxInstances = (W_ = e.maxInstances) != null ? W_ : null, this.modalInputs = lh, this.pathToMedia = wt, this.hasCategories = s, this.moveOptions = Ct.parseMoveOptions(e, s), this.hasScrollbars = !!this.moveOptions.scrollbars, this.hasTrashcan = o, this.maxTrashcanContents = y, this.hasSounds = h, this.hasCss = Qt, this.horizontalLayout = Y, this.languageTree = t, this.gridOptions = Ct.parseGridOptions(e), this.zoomOptions = Ct.parseZoomOptions(e), this.toolboxPosition = Le, this.theme = Ct.parseThemeOptions(e), this.renderer = Jm;
          let X_;
          this.rendererOverrides = (X_ = e.rendererOverrides) != null ? X_ : null;
          let z_;
          this.parentWorkspace = (z_ = e.parentWorkspace) != null ? z_ : null, this.plugins = qm;
        }
        static parseMoveOptions(e, t) {
          const s = e.move || {}, o = {};
          return s.scrollbars === void 0 && e.scrollbars === void 0 ? o.scrollbars = t : typeof s.scrollbars == "object" ? (o.scrollbars = { horizontal: !!s.scrollbars.horizontal, vertical: !!s.scrollbars.vertical }, o.scrollbars.horizontal && o.scrollbars.vertical ? o.scrollbars = !0 : o.scrollbars.horizontal || o.scrollbars.vertical || (o.scrollbars = !1)) : o.scrollbars = !!s.scrollbars || !!e.scrollbars, o.wheel = o.scrollbars && s.wheel !== void 0 ? !!s.wheel : typeof o.scrollbars == "object", o.drag = o.scrollbars ? s.drag === void 0 ? !0 : !!s.drag : !1, o;
        }
        static parseZoomOptions(e) {
          e = e.zoom || {};
          const t = {};
          return t.controls = e.controls === void 0 ? !1 : !!e.controls, t.wheel = e.wheel === void 0 ? !1 : !!e.wheel, t.startScale = e.startScale === void 0 ? 1 : Number(e.startScale), t.maxScale = e.maxScale === void 0 ? 3 : Number(e.maxScale), t.minScale = e.minScale === void 0 ? 0.3 : Number(e.minScale), t.scaleSpeed = e.scaleSpeed === void 0 ? 1.2 : Number(e.scaleSpeed), t.pinch = e.pinch === void 0 ? t.wheel || t.controls : !!e.pinch, t;
        }
        static parseGridOptions(e) {
          e = e.grid || {};
          const t = {};
          return t.spacing = Number(e.spacing) || 0, t.colour = e.colour || "#888", t.length = e.length === void 0 ? 1 : Number(e.length), t.snap = t.spacing > 0 && !!e.snap, t;
        }
        static parseThemeOptions(e) {
          return e = e.theme || Fr, typeof e == "string" ? lt(f.THEME, e) : e instanceof js ? e : js.defineTheme(e.name || "builtin" + oe(), e);
        }
      }, sg = class {
        constructor(e, t) {
          this.bubble = e, this.workspace = t, this.startLoc = null;
        }
        isMovable() {
          return !0;
        }
        startDrag() {
          this.startLoc = this.bubble.getRelativeToSurfaceXY(), this.workspace.setResizesEnabled(!1);
          let e;
          (e = this.workspace.getLayerManager()) == null || e.moveToDragLayer(this.bubble), this.bubble.setDragging && this.bubble.setDragging(!0);
        }
        drag(e) {
          this.bubble.moveDuringDrag(e);
        }
        endDrag() {
          this.workspace.setResizesEnabled(!0);
          let e;
          (e = this.workspace.getLayerManager()) == null || e.moveOffDragLayer(this.bubble, Go), this.bubble.setDragging(!1);
        }
        revertDrag() {
          this.startLoc && this.bubble.moveDuringDrag(this.startLoc);
        }
      }, je, V = class {
        constructor(e, t, s, o, i) {
          this.workspace = e, this.anchor = t, this.ownerRect = s, this.owner = i, this.size = new D(0, 0), this.colour = "#ffffff", this.disposed = !1, this.relativeLeft = this.relativeTop = 0, this.dragStrategy = new sg(this, this.workspace), this.id = oe(), this.svgRoot = b(g.G, { class: "blocklyBubble" }, e.getBubbleCanvas()), e = b(g.G, { class: "blocklyEmboss" }, this.svgRoot), this.tail = b(g.PATH, { class: "blocklyBubbleTail" }, e), this.background = b(
            g.RECT,
            { class: "blocklyDraggable", x: 0, y: 0, rx: je.BORDER_WIDTH, ry: je.BORDER_WIDTH },
            e
          ), this.contentContainer = b(g.G, {}, this.svgRoot), this.focusableElement = o ?? this.svgRoot, this.focusableElement.setAttribute("id", this.id), w(this.background, "pointerdown", this, this.onMouseDown), w(
            this.focusableElement,
            "keydown",
            this,
            this.onKeyDown
          );
        }
        dispose() {
          G(this.svgRoot), this.disposed = !0;
        }
        setAnchorLocation(e, t = !1) {
          this.anchor = e, t ? this.positionByRect(this.ownerRect) : this.positionRelativeToAnchor(), this.renderTail();
        }
        setPositionRelativeToAnchor(e, t) {
          this.relativeLeft = e, this.relativeTop = t, this.positionRelativeToAnchor(), this.renderTail();
        }
        getSize() {
          return this.size;
        }
        setSize(e, t = !1) {
          e.width = Math.max(e.width, je.MIN_SIZE), e.height = Math.max(
            e.height,
            je.MIN_SIZE
          ), this.size = e, this.background.setAttribute("width", `${e.width}`), this.background.setAttribute("height", `${e.height}`), t ? this.positionByRect(this.ownerRect) : this.positionRelativeToAnchor(), this.renderTail();
        }
        getColour() {
          return this.colour;
        }
        setColour(e) {
          this.colour = e, this.tail.setAttribute("fill", e), this.background.setAttribute("fill", e);
        }
        onMouseDown(e) {
          let t;
          (t = this.workspace.getGesture(e)) == null || t.handleBubbleStart(e, this), n.getFocusManager$$module$build$src$core$focus_manager().focusNode(this);
        }
        onKeyDown(e) {
          e.key === "Escape" && this.owner && (this.owner.setBubbleVisible(!1), n.getFocusManager$$module$build$src$core$focus_manager().focusNode(this.owner));
        }
        positionRelativeToAnchor() {
          let e = this.anchor.x;
          e = this.workspace.RTL ? e - (this.relativeLeft + this.size.width) : e + this.relativeLeft, this.moveTo(e, this.relativeTop + this.anchor.y);
        }
        moveTo(e, t) {
          this.svgRoot.setAttribute("transform", `translate(${e}, ${t})`);
        }
        positionByRect(e = new M(0, 0, 0, 0)) {
          var t = this.workspace.getMetricsManager().getViewMetrics(!0), s = this.getOptimalRelativeLeft(t), o = this.getOptimalRelativeTop(t);
          const i = { x: s, y: -this.size.height - this.workspace.getRenderer().getConstants().MIN_BLOCK_HEIGHT }, r = { x: -this.size.width - 30, y: o };
          o = { x: e.getWidth(), y: o };
          var u = { x: s, y: e.getHeight() };
          s = e.getWidth() < e.getHeight() ? o : u, e = e.getWidth() < e.getHeight() ? u : o, o = this.getOverlap(i, t), u = this.getOverlap(r, t);
          const h = this.getOverlap(s, t);
          t = this.getOverlap(e, t), t = Math.max(o, u, h, t), o === t ? (this.relativeLeft = i.x, this.relativeTop = i.y) : u === t ? (this.relativeLeft = r.x, this.relativeTop = r.y) : h === t ? (this.relativeLeft = s.x, this.relativeTop = s.y) : (this.relativeLeft = e.x, this.relativeTop = e.y), this.positionRelativeToAnchor();
        }
        getOverlap(e, t) {
          var s = this.workspace.RTL ? this.anchor.x - e.x - this.size.width : e.x + this.anchor.x;
          return e = e.y + this.anchor.y, Math.max(0, Math.min(1, (Math.min(s + this.size.width, t.left + t.width) - Math.max(s, t.left)) * (Math.min(e + this.size.height, t.top + t.height) - Math.max(e, t.top)) / (this.size.width * this.size.height)));
        }
        getOptimalRelativeLeft(e) {
          let t = -this.size.width / 4;
          if (this.size.width > e.width) return t;
          if (e = this.getWorkspaceViewRect(e), this.workspace.RTL) {
            var s = this.anchor.x - t;
            s - this.size.width < e.left ? t = -(e.left - this.anchor.x + this.size.width) : s > e.right && (t = -(e.right - this.anchor.x));
          } else {
            s = t + this.anchor.x;
            const o = s + this.size.width;
            s < e.left ? t = e.left - this.anchor.x : o > e.right && (t = e.right - this.anchor.x - this.size.width);
          }
          return t;
        }
        getOptimalRelativeTop(e) {
          let t = -this.size.height / 4;
          if (this.size.height > e.height) return t;
          const s = this.anchor.y + t, o = s + this.size.height;
          return e = this.getWorkspaceViewRect(e), s < e.top ? t = e.top - this.anchor.y : o > e.bottom && (t = e.bottom - this.anchor.y - this.size.height), t;
        }
        getWorkspaceViewRect(e) {
          const t = e.top;
          let s = e.top + e.height, o = e.left;
          return e = e.left + e.width, s -= this.getScrollbarThickness(), this.workspace.RTL ? o -= this.getScrollbarThickness() : e -= this.getScrollbarThickness(), new M(t, s, o, e);
        }
        getScrollbarThickness() {
          return ue.scrollbarThickness / this.workspace.scale;
        }
        renderTail() {
          const e = [];
          var t = this.size.width / 2, s = this.size.height / 2, o = -this.relativeLeft, i = -this.relativeTop;
          if (t === o && s === i) e.push("M " + t + "," + s);
          else {
            i -= s, o -= t, this.workspace.RTL && (o *= -1);
            var r = Math.sqrt(i * i + o * o), u = Math.acos(o / r);
            i < 0 && (u = 2 * Math.PI - u);
            var h = u + Math.PI / 2;
            h > Math.PI * 2 && (h -= Math.PI * 2);
            var E = Math.sin(h);
            const se = Math.cos(h);
            let Y = (this.size.width + this.size.height) / je.TAIL_THICKNESS;
            Y = Math.min(Y, this.size.width, this.size.height) / 4, h = 1 - je.ANCHOR_RADIUS / r, o = t + h * o, i = s + h * i, h = t + Y * se;
            const Le = s + Y * E;
            t -= Y * se, s -= Y * E, E = Mn(this.workspace.RTL ? -je.TAIL_ANGLE : je.TAIL_ANGLE), E = u + E, E > Math.PI * 2 && (E -= Math.PI * 2), u = Math.sin(E) * r / je.TAIL_BEND, r = Math.cos(E) * r / je.TAIL_BEND, e.push("M" + h + "," + Le), e.push("C" + (h + r) + "," + (Le + u) + " " + o + "," + i + " " + o + "," + i), e.push("C" + o + "," + i + " " + (t + r) + "," + (s + u) + " " + t + "," + s);
          }
          e.push("z");
          let y;
          (y = this.tail) == null || y.setAttribute("d", e.join(" "));
        }
        bringToFront() {
          let e;
          const t = (e = this.svgRoot) == null ? void 0 : e.parentNode;
          return this.svgRoot && (t == null ? void 0 : t.lastChild) !== this.svgRoot ? (t == null || t.appendChild(this.svgRoot), !0) : !1;
        }
        getRelativeToSurfaceXY() {
          return new I(this.workspace.RTL ? -this.relativeLeft + this.anchor.x - this.size.width : this.anchor.x + this.relativeLeft, this.anchor.y + this.relativeTop);
        }
        getSvgRoot() {
          return this.svgRoot;
        }
        moveDuringDrag(e) {
          this.moveTo(
            e.x,
            e.y
          ), this.relativeLeft = this.workspace.RTL ? this.anchor.x - e.x - this.size.width : e.x - this.anchor.x, this.relativeTop = e.y - this.anchor.y, this.renderTail();
        }
        setDragging(e) {
        }
        setDeleteStyle(e) {
        }
        isDeletable() {
          return !1;
        }
        showContextMenu(e) {
        }
        isMovable() {
          return !0;
        }
        startDrag() {
          this.dragStrategy.startDrag();
        }
        drag(e) {
          this.dragStrategy.drag(e);
        }
        endDrag() {
          this.dragStrategy.endDrag();
        }
        revertDrag() {
          this.dragStrategy.revertDrag();
        }
        select() {
          S(this);
        }
        unselect() {
          S(null);
        }
        getFocusableElement() {
          return this.focusableElement;
        }
        getFocusableTree() {
          return this.workspace;
        }
        onNodeFocus() {
          this.select(), this.bringToFront();
          var e = this.getRelativeToSurfaceXY();
          const t = this.getSize();
          e = new M(e.y, e.y + t.height, e.x, e.x + t.width), this.workspace.scrollBoundsIntoView(e);
        }
        onNodeBlur() {
          this.unselect();
        }
        canBeFocused() {
          return !0;
        }
        getOwner() {
          return this.owner;
        }
      };
      je = V, V.BORDER_WIDTH = 6, V.DOUBLE_BORDER = je.BORDER_WIDTH * 2, V.MIN_SIZE = je.DOUBLE_BORDER, V.TAIL_THICKNESS = 1, V.TAIL_ANGLE = 20, V.TAIL_BEND = 4, V.ANCHOR_RADIUS = 8;
      var Jt = class extends V {
        constructor(e, t, s, o) {
          super(t, s, o), this.workspace = t, this.anchor = s, this.ownerRect = o, this.autoLayout = !0, t = new Ct(e), this.validateWorkspaceOptions(t), this.svgDialog = b(
            g.SVG,
            { x: V.BORDER_WIDTH, y: V.BORDER_WIDTH },
            this.contentContainer
          ), e.parentWorkspace = this.workspace, this.miniWorkspace = this.newWorkspaceSvg(new Ct(e)), this.miniWorkspace.internalIsMutator = !0, e = this.miniWorkspace.createDom("blocklyMutatorBackground"), this.svgDialog.appendChild(e), t.languageTree && (e.insertBefore(this.miniWorkspace.addFlyout(g.G), this.miniWorkspace.getCanvas()), e = this.miniWorkspace.getFlyout(), e == null || e.init(this.miniWorkspace), e == null || e.show(t.languageTree)), R(this.svgRoot, "blocklyMiniWorkspaceBubble"), this.miniWorkspace.addChangeListener(this.onWorkspaceChange.bind(this));
          let i, r;
          (i = this.miniWorkspace.getFlyout()) == null || (r = i.getWorkspace()) == null || r.addChangeListener(this.onWorkspaceChange.bind(this)), this.updateBubbleSize();
        }
        dispose() {
          this.miniWorkspace.dispose(), super.dispose();
        }
        getWorkspace() {
          return this.miniWorkspace;
        }
        addWorkspaceChangeListener(e) {
          this.miniWorkspace.addChangeListener(e);
        }
        validateWorkspaceOptions(e) {
          if (e.hasCategories) throw Error("The miniworkspace bubble does not support toolboxes with categories");
          if (e.hasTrashcan) throw Error("The miniworkspace bubble does not support trashcans");
          if (e.zoomOptions.controls || e.zoomOptions.wheel || e.zoomOptions.pinch) throw Error("The miniworkspace bubble does not support zooming");
          if (e.moveOptions.scrollbars || e.moveOptions.wheel || e.moveOptions.drag) throw Error("The miniworkspace bubble does not scrolling/moving the workspace");
          if (e.horizontalLayout) throw Error("The miniworkspace bubble does not support horizontal layouts");
        }
        onWorkspaceChange() {
          this.bumpBlocksIntoBounds(), this.updateBubbleSize();
        }
        bumpBlocksIntoBounds() {
          if (!this.miniWorkspace.isDragging() || this.miniWorkspace.keyboardMoveInProgress) for (const e of this.miniWorkspace.getTopBlocks(!1)) {
            const t = e.getRelativeToSurfaceXY();
            if (t.y < 20 && e.moveBy(0, 20 - t.y), e.RTL) {
              let s = -20;
              const o = this.miniWorkspace.getFlyout();
              o && (s -= o.getWidth()), t.x > s && e.moveBy(s - t.x, 0);
            } else t.x < 20 && e.moveBy(20 - t.x, 0);
          }
        }
        updateBubbleSize() {
          if (!this.miniWorkspace.isDragging() || this.miniWorkspace.keyboardMoveInProgress) {
            this.autoLayout && (this.autoLayout = !this.miniWorkspace.keyboardMoveInProgress);
            var e = this.getSize(), t = this.calculateWorkspaceSize();
            Math.abs(e.width - t.width) < Jt.MINIMUM_VIEW_CHANGE && Math.abs(e.height - t.height) < Jt.MINIMUM_VIEW_CHANGE || (this.svgDialog.setAttribute("width", `${t.width}px`), this.svgDialog.setAttribute("height", `${t.height}px`), this.miniWorkspace.setCachedParentSvgSize(t.width, t.height), this.miniWorkspace.RTL && this.miniWorkspace.getCanvas().setAttribute("transform", `translate(${t.width}, 0)`), this.setSize(new D(t.width + V.DOUBLE_BORDER, t.height + V.DOUBLE_BORDER), this.autoLayout), this.miniWorkspace.resize(), this.miniWorkspace.recordDragTargets());
          }
        }
        calculateWorkspaceSize() {
          var e = this.miniWorkspace.getCanvas().getBBox();
          let t = e.width + Jt.MARGIN;
          e = e.height + Jt.MARGIN;
          const s = this.miniWorkspace.getFlyout();
          if (s) {
            const o = s.getWorkspace().getMetricsManager().getScrollMetrics();
            e = Math.max(e, o.height + 20), t += s.getWidth();
          }
          return new D(t, e);
        }
        updateBlockStyles() {
          for (var e of this.miniWorkspace.getAllBlocks(!1)) e.setStyle(e.getStyleName());
          let t;
          if (e = (t = this.miniWorkspace.getFlyout()) == null ? void 0 : t.getWorkspace()) for (const s of e.getAllBlocks(!1)) s.setStyle(s.getStyleName());
        }
        moveDuringDrag(e) {
          super.moveDuringDrag(e), this.autoLayout = !1;
        }
        moveTo(e, t) {
          super.moveTo(e, t), this.miniWorkspace.recordDragTargets();
        }
        newWorkspaceSvg(e) {
          throw Error("The implementation of newWorkspaceSvg should be monkey-patched in by blockly.ts");
        }
      };
      Jt.MINIMUM_VIEW_CHANGE = 10, Jt.MARGIN = V.DOUBLE_BORDER * 3;
      var Vo = class {
        constructor(e) {
          this.sourceBlock = e, this.offsetInBlock = new I(0, 0), this.workspaceLocation = new I(0, 0), this.svgRoot = null, this.tooltip = e, this.id = oe();
        }
        getType() {
          throw Error("Icons must implement getType");
        }
        initView(e) {
          if (!this.svgRoot) {
            var t = this.sourceBlock;
            this.svgRoot = b(
              g.G,
              { class: "blocklyIconGroup", id: this.id }
            ), t.getSvgRoot().appendChild(this.svgRoot), this.updateSvgRootOffset(), w(this.svgRoot, "pointerdown", this, e), this.svgRoot.tooltip = this, Ii(this.svgRoot);
          }
        }
        dispose() {
          tc(this.svgRoot), G(this.svgRoot);
        }
        getWeight() {
          return -1;
        }
        getSize() {
          return new D(0, 0);
        }
        setTooltip(e) {
          this.tooltip = e ?? this.sourceBlock;
        }
        getTooltip() {
          return this.tooltip;
        }
        applyColour() {
        }
        updateEditable() {
        }
        updateCollapsed() {
          this.svgRoot && (this.sourceBlock.isCollapsed() ? this.svgRoot.style.display = "none" : this.svgRoot.style.display = "block", us(this) && this.setBubbleVisible(!1));
        }
        hideForInsertionMarker() {
          this.svgRoot && (this.svgRoot.style.display = "none");
        }
        isShownWhenCollapsed() {
          return !1;
        }
        setOffsetInBlock(e) {
          this.offsetInBlock = e, this.updateSvgRootOffset();
        }
        updateSvgRootOffset() {
          let e;
          (e = this.svgRoot) == null || e.setAttribute("transform", `translate(${this.offsetInBlock.x}, ${this.offsetInBlock.y})`);
        }
        onLocationChange(e) {
          this.workspaceLocation = I.sum(e, this.offsetInBlock);
        }
        onClick() {
        }
        isClickableInFlyout(e) {
          return !0;
        }
        getFocusableElement() {
          const e = this.svgRoot;
          if (!e) throw Error("Attempting to focus uninitialized icon.");
          return e;
        }
        getFocusableTree() {
          return this.sourceBlock.workspace;
        }
        onNodeFocus() {
          var e = this.sourceBlock.getBoundingRectangle();
          e = new M(e.top + this.offsetInBlock.y, e.top + this.offsetInBlock.y + this.getSize().height, e.left + this.offsetInBlock.x, e.left + this.offsetInBlock.x + this.getSize().width), this.sourceBlock.workspace.scrollBoundsIntoView(e);
        }
        onNodeBlur() {
        }
        canBeFocused() {
          return !0;
        }
        getSourceBlock() {
          return this.sourceBlock;
        }
        showContextMenu(e) {
          this.getSourceBlock().showContextMenu(e);
        }
      }, Ur, Hr;
      Ur = 17, Hr = 16, n.MutatorIcon$$module$build$src$core$icons$mutator_icon = class extends Vo {
        constructor(e, t) {
          super(t), this.flyoutBlockTypes = e, this.sourceBlock = t, this.saveConnectionsListener = this.updateWorkspacePid = this.rootBlock = this.miniWorkspaceBubble = null;
        }
        getType() {
          return n.MutatorIcon$$module$build$src$core$icons$mutator_icon.TYPE;
        }
        initView(e) {
          this.svgRoot || (super.initView(e), b(g.RECT, {
            class: "blocklyIconShape",
            rx: "4",
            ry: "4",
            height: "16",
            width: "16"
          }, this.svgRoot), b(
            g.PATH,
            { class: "blocklyIconSymbol", d: "m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z" },
            this.svgRoot
          ), b(g.CIRCLE, { class: "blocklyIconShape", r: "2.7", cx: "8", cy: "8" }, this.svgRoot), R(this.svgRoot, "blocklyMutatorIcon"));
        }
        dispose() {
          super.dispose();
          let e;
          (e = this.miniWorkspaceBubble) == null || e.dispose();
        }
        getWeight() {
          return n.MutatorIcon$$module$build$src$core$icons$mutator_icon.WEIGHT;
        }
        getSize() {
          return new D(
            Ur,
            Ur
          );
        }
        applyColour() {
          super.applyColour();
          let e;
          (e = this.miniWorkspaceBubble) == null || e.setColour(this.sourceBlock.getColour());
          let t;
          (t = this.miniWorkspaceBubble) == null || t.updateBlockStyles();
        }
        updateCollapsed() {
          super.updateCollapsed(), this.sourceBlock.isCollapsed() && this.setBubbleVisible(!1);
        }
        onLocationChange(e) {
          super.onLocationChange(e);
          let t;
          (t = this.miniWorkspaceBubble) == null || t.setAnchorLocation(this.getAnchorLocation());
        }
        onClick() {
          super.onClick(), this.sourceBlock.isEditable() && this.setBubbleVisible(!this.bubbleIsVisible());
        }
        isClickableInFlyout() {
          return !1;
        }
        bubbleIsVisible() {
          return !!this.miniWorkspaceBubble;
        }
        setBubbleVisible(e) {
          const t = this;
          return (0, $.asyncExecutePromiseGeneratorFunction)(function* () {
            if (t.bubbleIsVisible() !== e) {
              if (yield bt(), e) {
                t.miniWorkspaceBubble = new Jt(
                  t.getMiniWorkspaceConfig(),
                  t.sourceBlock.workspace,
                  t.getAnchorLocation(),
                  t.getBubbleOwnerRect()
                ), t.applyColour(), t.createRootBlock(), t.addSaveConnectionsListener();
                let s;
                (s = t.miniWorkspaceBubble) == null || s.addWorkspaceChangeListener(t.createMiniWorkspaceChangeListener());
              } else {
                let s;
                (s = t.miniWorkspaceBubble) == null || s.dispose(), t.miniWorkspaceBubble = null, t.saveConnectionsListener && t.sourceBlock.workspace.removeChangeListener(t.saveConnectionsListener), t.saveConnectionsListener = null;
              }
              k(new (L(m.BUBBLE_OPEN))(
                t.sourceBlock,
                e,
                "mutator"
              ));
            }
          });
        }
        getBubble() {
          return this.miniWorkspaceBubble;
        }
        getMiniWorkspaceConfig() {
          let e;
          const t = { disable: !1, media: this.sourceBlock.workspace.options.pathToMedia, rtl: this.sourceBlock.RTL, renderer: this.sourceBlock.workspace.options.renderer, rendererOverrides: (e = this.sourceBlock.workspace.options.rendererOverrides) != null ? e : void 0 };
          return this.flyoutBlockTypes.length && (t.toolbox = { kind: "flyoutToolbox", contents: this.flyoutBlockTypes.map((s) => ({ kind: "block", type: s })) }), t;
        }
        getAnchorLocation() {
          const e = Ur / 2;
          return I.sum(this.workspaceLocation, new I(e, e));
        }
        getBubbleOwnerRect() {
          const e = this.sourceBlock.getSvgRoot().getBBox();
          return new M(e.y, e.y + e.height, e.x, e.x + e.width);
        }
        createRootBlock() {
          if (!this.sourceBlock.decompose) throw Error("Blocks with mutator icons must include a decompose method");
          this.rootBlock = this.sourceBlock.decompose(this.miniWorkspaceBubble.getWorkspace());
          for (var e of this.rootBlock.getDescendants(!1)) e.queueRender();
          this.rootBlock.setMovable(!1), this.rootBlock.setDeletable(!1);
          let t, s, o, i;
          e = (i = (t = this.miniWorkspaceBubble) == null || (s = t.getWorkspace()) == null || (o = s.getFlyout()) == null ? void 0 : o.getWidth()) != null ? i : 0, this.rootBlock.moveBy(this.rootBlock.RTL ? -(e + Hr) : Hr, Hr);
        }
        addSaveConnectionsListener() {
          this.sourceBlock.saveConnections && this.rootBlock && (this.saveConnectionsListener = () => {
            this.sourceBlock.saveConnections && this.rootBlock && this.sourceBlock.saveConnections(this.rootBlock);
          }, this.saveConnectionsListener(), this.sourceBlock.workspace.addChangeListener(this.saveConnectionsListener));
        }
        createMiniWorkspaceChangeListener() {
          return (e) => {
            n.MutatorIcon$$module$build$src$core$icons$mutator_icon.isIgnorableMutatorEvent(e) || this.updateWorkspacePid || (this.updateWorkspacePid = setTimeout(
              () => {
                this.updateWorkspacePid = null, this.recomposeSourceBlock();
              },
              0
            ));
          };
        }
        static isIgnorableMutatorEvent(e) {
          return e.isUiEvent || no(e) || ss(e) && e.element === "disabled";
        }
        recomposeSourceBlock() {
          if (this.rootBlock) {
            if (!this.sourceBlock.compose) throw Error("Blocks with mutator icons must include a compose method");
            var e = n.getGroup$$module$build$src$core$events$utils();
            e || n.setGroup$$module$build$src$core$events$utils(!0);
            var t = Vs.getExtraBlockState_(this.sourceBlock);
            this.sourceBlock.compose(this.rootBlock);
            var s = Vs.getExtraBlockState_(this.sourceBlock);
            t !== s && k(new (L(m.BLOCK_CHANGE))(this.sourceBlock, "mutation", null, t, s)), n.setGroup$$module$build$src$core$events$utils(e);
          }
        }
        getWorkspace() {
          let e;
          return (e = this.miniWorkspaceBubble) == null ? void 0 : e.getWorkspace();
        }
      }, n.MutatorIcon$$module$build$src$core$icons$mutator_icon.TYPE = $e.MUTATOR, n.MutatorIcon$$module$build$src$core$icons$mutator_icon.WEIGHT = 1, n.MutatorIcon$$module$build$src$core$icons$mutator_icon;
      var Wo = /* @__PURE__ */ Object.create(null), mm = { allExtensions: Wo };
      n.register$$module$build$src$core$extensions("parent_tooltip_when_inline", Jd);
      var ht = { TEST_ONLY: mm };
      ht.apply = Kn, ht.buildTooltipForDropdown = n.buildTooltipForDropdown$$module$build$src$core$extensions, ht.buildTooltipWithFieldText = n.buildTooltipWithFieldText$$module$build$src$core$extensions, ht.isRegistered = Oc, ht.register = n.register$$module$build$src$core$extensions, ht.registerMixin = n.registerMixin$$module$build$src$core$extensions, ht.registerMutator = n.registerMutator$$module$build$src$core$extensions, ht.runAfterPageLoad = Kd, ht.unregister = Vd;
      var de;
      (function(e) {
        e[e.WIN_KEY_FF_LINUX = 0] = "WIN_KEY_FF_LINUX", e[e.MAC_ENTER = 3] = "MAC_ENTER", e[e.BACKSPACE = 8] = "BACKSPACE", e[e.TAB = 9] = "TAB", e[e.NUM_CENTER = 12] = "NUM_CENTER", e[e.ENTER = 13] = "ENTER", e[e.SHIFT = 16] = "SHIFT", e[e.CTRL = 17] = "CTRL", e[e.ALT = 18] = "ALT", e[e.PAUSE = 19] = "PAUSE", e[e.CAPS_LOCK = 20] = "CAPS_LOCK", e[e.ESC = 27] = "ESC", e[e.SPACE = 32] = "SPACE", e[e.PAGE_UP = 33] = "PAGE_UP", e[e.PAGE_DOWN = 34] = "PAGE_DOWN", e[e.END = 35] = "END", e[e.HOME = 36] = "HOME", e[e.LEFT = 37] = "LEFT", e[e.UP = 38] = "UP", e[e.RIGHT = 39] = "RIGHT", e[e.DOWN = 40] = "DOWN", e[e.PLUS_SIGN = 43] = "PLUS_SIGN", e[e.PRINT_SCREEN = 44] = "PRINT_SCREEN", e[e.INSERT = 45] = "INSERT", e[e.DELETE = 46] = "DELETE", e[e.ZERO = 48] = "ZERO", e[e.ONE = 49] = "ONE", e[e.TWO = 50] = "TWO", e[e.THREE = 51] = "THREE", e[e.FOUR = 52] = "FOUR", e[e.FIVE = 53] = "FIVE", e[e.SIX = 54] = "SIX", e[e.SEVEN = 55] = "SEVEN", e[e.EIGHT = 56] = "EIGHT", e[e.NINE = 57] = "NINE", e[e.FF_SEMICOLON = 59] = "FF_SEMICOLON", e[e.FF_EQUALS = 61] = "FF_EQUALS", e[e.FF_DASH = 173] = "FF_DASH", e[e.FF_HASH = 163] = "FF_HASH", e[e.QUESTION_MARK = 63] = "QUESTION_MARK", e[e.AT_SIGN = 64] = "AT_SIGN", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.META = 91] = "META", e[e.WIN_KEY_RIGHT = 92] = "WIN_KEY_RIGHT", e[e.CONTEXT_MENU = 93] = "CONTEXT_MENU", e[e.NUM_ZERO = 96] = "NUM_ZERO", e[e.NUM_ONE = 97] = "NUM_ONE", e[e.NUM_TWO = 98] = "NUM_TWO", e[e.NUM_THREE = 99] = "NUM_THREE", e[e.NUM_FOUR = 100] = "NUM_FOUR", e[e.NUM_FIVE = 101] = "NUM_FIVE", e[e.NUM_SIX = 102] = "NUM_SIX", e[e.NUM_SEVEN = 103] = "NUM_SEVEN", e[e.NUM_EIGHT = 104] = "NUM_EIGHT", e[e.NUM_NINE = 105] = "NUM_NINE", e[e.NUM_MULTIPLY = 106] = "NUM_MULTIPLY", e[e.NUM_PLUS = 107] = "NUM_PLUS", e[e.NUM_MINUS = 109] = "NUM_MINUS", e[e.NUM_PERIOD = 110] = "NUM_PERIOD", e[e.NUM_DIVISION = 111] = "NUM_DIVISION", e[e.F1 = 112] = "F1", e[e.F2 = 113] = "F2", e[e.F3 = 114] = "F3", e[e.F4 = 115] = "F4", e[e.F5 = 116] = "F5", e[e.F6 = 117] = "F6", e[e.F7 = 118] = "F7", e[e.F8 = 119] = "F8", e[e.F9 = 120] = "F9", e[e.F10 = 121] = "F10", e[e.F11 = 122] = "F11", e[e.F12 = 123] = "F12", e[e.NUMLOCK = 144] = "NUMLOCK", e[e.SCROLL_LOCK = 145] = "SCROLL_LOCK", e[e.FIRST_MEDIA_KEY = 166] = "FIRST_MEDIA_KEY", e[e.LAST_MEDIA_KEY = 183] = "LAST_MEDIA_KEY", e[e.SEMICOLON = 186] = "SEMICOLON", e[e.DASH = 189] = "DASH", e[e.EQUALS = 187] = "EQUALS", e[e.COMMA = 188] = "COMMA", e[e.PERIOD = 190] = "PERIOD", e[e.SLASH = 191] = "SLASH", e[e.APOSTROPHE = 192] = "APOSTROPHE", e[e.TILDE = 192] = "TILDE", e[e.SINGLE_QUOTE = 222] = "SINGLE_QUOTE", e[e.OPEN_SQUARE_BRACKET = 219] = "OPEN_SQUARE_BRACKET", e[e.BACKSLASH = 220] = "BACKSLASH", e[e.CLOSE_SQUARE_BRACKET = 221] = "CLOSE_SQUARE_BRACKET", e[e.WIN_KEY = 224] = "WIN_KEY", e[e.MAC_FF_META = 224] = "MAC_FF_META", e[e.MAC_WK_CMD_LEFT = 91] = "MAC_WK_CMD_LEFT", e[e.MAC_WK_CMD_RIGHT = 93] = "MAC_WK_CMD_RIGHT", e[e.WIN_IME = 229] = "WIN_IME", e[e.VK_NONAME = 252] = "VK_NONAME", e[e.PHANTOM = 255] = "PHANTOM", e[e.CTRL_CMD = _r || W$ || yu ? e.MAC_WK_CMD_LEFT : e.CTRL] = "CTRL_CMD";
      })(de || (de = {}));
      var qt = {};
      qt.arc = ce, qt.curve = Ue, qt.line = vo, qt.lineOnAxis = A, qt.lineTo = Ot, qt.moveBy = ne, qt.moveTo = be, qt.point = v;
      var te = {};
      te.Coordinate = I, te.KeyCodes = de, te.Rect = M, te.Size = D, te.Svg = g, te.aria = Fi, te.array = op, te.browserEvents = Gt, te.colour = rt, te.deprecation = Ap, te.dom = Ie, te.extensions = ht, te.idGenerator = vu, te.math = Or, te.object = Q$, te.parsing = Yi, te.string = Bo, te.style = ps, te.svgMath = Fs, te.svgPaths = qt, te.toolbox = gs, te.userAgent = im, te.xml = wo;
      var Gr = class extends V {
        constructor(e, t, s, o) {
          super(e, t, s, void 0, o), this.workspace = e, this.anchor = t, this.ownerRect = s, this.owner = o, this.resizePointerMoveListener = this.resizePointerUpListener = null, this.sizeChangeListeners = [], this.locationChangeListeners = [], this.DEFAULT_SIZE = new D(160 + V.DOUBLE_BORDER, 80 + V.DOUBLE_BORDER), this.MIN_SIZE = new D(45 + V.DOUBLE_BORDER, 20 + V.DOUBLE_BORDER), this.editable = !0, R(this.svgRoot, "blocklyTextInputBubble"), this.editor = new Pr(e, this.id, () => {
            n.getFocusManager$$module$build$src$core$focus_manager().focusNode(this);
          }), this.contentContainer.appendChild(this.editor.getDom()), this.resizeGroup = this.createResizeHandle(this.svgRoot, e), this.setSize(this.DEFAULT_SIZE, !0);
        }
        getText() {
          return this.editor.getText();
        }
        setText(e) {
          this.editor.setText(e);
        }
        setEditable(e) {
          this.editable = e, this.editor.setEditable(e);
        }
        isEditable() {
          return this.editable;
        }
        addTextChangeListener(e) {
          this.editor.addTextChangeListener(e);
        }
        addSizeChangeListener(e) {
          this.sizeChangeListeners.push(e);
        }
        addLocationChangeListener(e) {
          this.locationChangeListeners.push(e);
        }
        createResizeHandle(e, t) {
          return e = b(
            g.IMAGE,
            { class: "blocklyResizeHandle", href: `${t.options.pathToMedia}resize-handle.svg` },
            e
          ), w(e, "pointerdown", this, this.onResizePointerDown), e;
        }
        setSize(e, t = !1) {
          e.width = Math.max(e.width, this.MIN_SIZE.width), e.height = Math.max(e.height, this.MIN_SIZE.height);
          const s = e.width - V.DOUBLE_BORDER, o = e.height - V.DOUBLE_BORDER;
          this.editor.updateSize(new D(
            s,
            o
          ), new D(0, 0)), this.editor.getDom().setAttribute("x", `${V.DOUBLE_BORDER / 2}`), this.editor.getDom().setAttribute("y", `${V.DOUBLE_BORDER / 2}`), this.resizeGroup.setAttribute("y", `${o}`), this.workspace.RTL ? this.resizeGroup.setAttribute("x", `${-V.DOUBLE_BORDER}`) : this.resizeGroup.setAttribute("x", `${s}`), super.setSize(e, t), this.onSizeChange();
        }
        getSize() {
          return super.getSize();
        }
        moveDuringDrag(e) {
          super.moveDuringDrag(e), this.onLocationChange();
        }
        setPositionRelativeToAnchor(e, t) {
          super.setPositionRelativeToAnchor(e, t), this.onLocationChange();
        }
        positionByRect(e = new M(0, 0, 0, 0)) {
          super.positionByRect(e), this.onLocationChange();
        }
        onResizePointerDown(e) {
          this.bringToFront(), Ge(e) || (Xn(this.workspace, e, new I(
            this.workspace.RTL ? -this.getSize().width : this.getSize().width,
            this.getSize().height
          )), this.resizePointerUpListener = w(document, "pointerup", this, this.onResizePointerUp), this.resizePointerMoveListener = w(document, "pointermove", this, this.onResizePointerMove), this.workspace.hideChaff()), e.stopPropagation();
        }
        onResizePointerUp(e) {
          K(), this.resizePointerUpListener && (H(this.resizePointerUpListener), this.resizePointerUpListener = null), this.resizePointerMoveListener && (H(this.resizePointerMoveListener), this.resizePointerMoveListener = null);
        }
        onResizePointerMove(e) {
          e = zn(this.workspace, e), this.setSize(new D(this.workspace.RTL ? -e.x : e.x, e.y), !1), this.onSizeChange();
        }
        onSizeChange() {
          for (const e of this.sizeChangeListeners) e();
        }
        onLocationChange() {
          for (const e of this.locationChangeListeners) e();
        }
        getEditor() {
          return this.editor;
        }
      };
      Tt(`
.blocklyTextInputBubble .blocklyTextarea {
  background-color: var(--commentFillColour);
  border: 0;
  box-sizing: border-box;
  display: block;
  outline: 0;
  padding: 5px;
  resize: none;
  width: 100%;
  height: 100%;
}
`);
      var C;
      (function(e) {
        e[e.INPUT_VALUE = 1] = "INPUT_VALUE", e[e.OUTPUT_VALUE = 2] = "OUTPUT_VALUE", e[e.NEXT_STATEMENT = 3] = "NEXT_STATEMENT", e[e.PREVIOUS_STATEMENT = 4] = "PREVIOUS_STATEMENT";
      })(C || (C = {}));
      var Xo = class {
        constructor(e) {
          this.connectionChecker = e, this.connections = [];
        }
        addConnection(e, t) {
          t = this.calculateIndexForYPos(t), this.connections.splice(t, 0, e);
        }
        findIndexOfConnection(e, t) {
          if (!this.connections.length) return -1;
          const s = this.calculateIndexForYPos(t);
          if (s >= this.connections.length) return -1;
          t = e.y;
          let o = s;
          for (; o >= 0 && this.connections[o].y === t; ) {
            if (this.connections[o] === e) return o;
            o--;
          }
          for (o = s; o < this.connections.length && this.connections[o].y === t; ) {
            if (this.connections[o] === e) return o;
            o++;
          }
          return -1;
        }
        calculateIndexForYPos(e) {
          if (!this.connections.length) return 0;
          let t = 0, s = this.connections.length;
          for (; t < s; ) {
            const o = Math.floor((t + s) / 2);
            if (this.connections[o].y < e) t = o + 1;
            else if (this.connections[o].y > e) s = o;
            else {
              t = o;
              break;
            }
          }
          return t;
        }
        removeConnection(e, t) {
          if (e = this.findIndexOfConnection(e, t), e === -1) throw Error("Unable to find connection in connectionDB.");
          this.connections.splice(e, 1);
        }
        getNeighbours(e, t) {
          function s(y) {
            const se = i - o[y].x, Y = r - o[y].y;
            return Math.sqrt(se * se + Y * Y) <= t && E.push(o[y]), Y < t;
          }
          const o = this.connections, i = e.x, r = e.y;
          e = 0;
          let u = o.length - 2, h = u;
          for (; e < h; ) o[h].y < r ? e = h : u = h, h = Math.floor((e + u) / 2);
          const E = [];
          if (u = e = h, o.length) {
            for (; e >= 0 && s(e); ) e--;
            do
              u++;
            while (u < o.length && s(u));
          }
          return E;
        }
        isInYRange(e, t, s) {
          return Math.abs(this.connections[e].y - t) <= s;
        }
        searchForClosest(e, t, s) {
          if (!this.connections.length) return { connection: null, radius: t };
          const o = e.y, i = e.x;
          e.x = i + s.x, e.y = o + s.y;
          var r = this.calculateIndexForYPos(e.y);
          s = null;
          let u = t, h, E = r - 1;
          for (; E >= 0 && this.isInYRange(E, e.y, t); ) h = this.connections[E], this.connectionChecker.canConnect(e, h, !0, u) && (s = h, u = h.distanceFrom(e)), E--;
          for (; r < this.connections.length && this.isInYRange(r, e.y, t); ) h = this.connections[r], this.connectionChecker.canConnect(e, h, !0, u) && (s = h, u = h.distanceFrom(e)), r++;
          return e.x = i, e.y = o, { connection: s, radius: u };
        }
        static init(e) {
          const t = [];
          return t[C.INPUT_VALUE] = new Xo(e), t[C.OUTPUT_VALUE] = new Xo(e), t[C.NEXT_STATEMENT] = new Xo(e), t[C.PREVIOUS_STATEMENT] = new Xo(e), t;
        }
      }, ha = class extends me {
        constructor(e, t, s) {
          super(s), this.type = m.SELECTED, this.oldElementId = e ?? void 0, this.newElementId = t ?? void 0;
        }
        toJson() {
          const e = super.toJson();
          return e.oldElementId = this.oldElementId, e.newElementId = this.newElementId, e;
        }
        static fromJson(e, t, s) {
          return t = me.fromJson(e, t, s ?? new ha()), t.oldElementId = e.oldElementId, t.newElementId = e.newElementId, t;
        }
      };
      c(f.EVENT, m.SELECTED, ha);
      var da = class extends it {
        constructor(e) {
          if (super(e), this.type = m.BLOCK_DELETE, e) {
            if (e.getParent()) throw Error("Connected blocks cannot be deleted.");
            e.isShadow() && (this.recordUndo = !1), this.oldXml = yi(e), this.ids = co(e), this.wasShadow = e.isShadow(), this.oldJson = tt(e, { addCoordinates: !0 });
          }
        }
        toJson() {
          const e = super.toJson();
          if (!this.oldXml) throw Error("The old block XML is undefined. Either pass a block to the constructor, or call fromJson");
          if (!this.ids) throw Error("The block IDs are undefined. Either pass a block to the constructor, or call fromJson");
          if (this.wasShadow === void 0) throw Error("Whether the block was a shadow is undefined. Either pass a block to the constructor, or call fromJson");
          if (!this.oldJson) throw Error("The old block JSON is undefined. Either pass a block to the constructor, or call fromJson");
          return e.oldXml = St(this.oldXml), e.ids = this.ids, e.wasShadow = this.wasShadow, e.oldJson = this.oldJson, this.recordUndo || (e.recordUndo = this.recordUndo), e;
        }
        static fromJson(e, t, s) {
          return t = it.fromJson(e, t, s ?? new da()), t.oldXml = n.textToDom$$module$build$src$core$utils$xml(e.oldXml), t.ids = e.ids, t.wasShadow = e.wasShadow || t.oldXml.tagName.toLowerCase() === "shadow", t.oldJson = e.oldJson, e.recordUndo !== void 0 && (t.recordUndo = e.recordUndo), t;
        }
        run(e) {
          const t = this.getEventWorkspace_();
          if (!this.ids) throw Error("The block IDs are undefined. Either pass a block to the constructor, or call fromJson");
          if (!this.oldJson) throw Error("The old block JSON is undefined. Either pass a block to the constructor, or call fromJson");
          if (e) for (e = 0; e < this.ids.length; e++) {
            const s = this.ids[e], o = t.getBlockById(s);
            o ? o.dispose(!1) : s === this.blockId && console.warn("Can't delete non-existent block: " + s);
          }
          else As(this.oldJson, t);
        }
      };
      c(f.EVENT, m.BLOCK_DELETE, da);
      var U = class {
        constructor(e, t) {
          if (this.type = t, this.targetConnection = null, this.disposed = !1, this.shadowDom = this.check = null, this.y = this.x = 0, this.shadowState = null, this.sourceBlock_ = e, e.id.includes("_connection")) throw Error(`Connection ID indicator is contained in block ID. This will cause problems with focus: ${e.id}.`);
          this.id = `${e.id}_connection_${oe()}`;
        }
        connect_(e) {
          const t = C.INPUT_VALUE, s = this.getSourceBlock();
          var o = e.getSourceBlock();
          e.isConnected() && e.disconnectInternal(!1);
          let i;
          if (this.isConnected()) {
            const u = this.stashShadowState(), h = this.targetBlock();
            h.isShadow() ? h.dispose(!1) : (this.disconnectInternal(), i = h), this.applyShadowState(u);
          }
          let r;
          j() && (r = new (L(m.BLOCK_MOVE))(o), r.setReason(["connect"])), qd(
            this,
            e
          ), o.setParent(s), r && (r.recordNew(), k(r)), i && (e = this.type === t ? i.outputConnection : i.previousConnection) && ((o = U.getConnectionForOrphanedConnection(o, e)) ? e.connect(o) : e.onFailedConnect(this));
        }
        dispose() {
          if (this.isConnected()) {
            this.isSuperior() && this.setShadowStateInternal();
            const e = this.targetBlock();
            e && !e.isDeadOrDying() && e.unplug();
          }
          this.disposed = !0;
        }
        getSourceBlock() {
          return this.sourceBlock_;
        }
        isSuperior() {
          return this.type === C.INPUT_VALUE || this.type === C.NEXT_STATEMENT;
        }
        isConnected() {
          return !!this.targetConnection;
        }
        getConnectionChecker() {
          return this.sourceBlock_.workspace.connectionChecker;
        }
        onFailedConnect(e) {
        }
        connect(e) {
          if (this.targetConnection === e) return !0;
          if (this.getConnectionChecker().canConnect(this, e, !1)) {
            const t = n.getGroup$$module$build$src$core$events$utils();
            t || n.setGroup$$module$build$src$core$events$utils(!0), this.isSuperior() ? this.connect_(e) : e.connect_(this), n.setGroup$$module$build$src$core$events$utils(t);
          }
          return this.isConnected();
        }
        disconnect() {
          this.disconnectInternal();
        }
        disconnectInternal(e = !0) {
          const { parentConnection: t, childConnection: s } = this.getParentAndChildConnections();
          if (!t || !s) throw Error("Source connection not connected.");
          const o = n.getGroup$$module$build$src$core$events$utils();
          o || n.setGroup$$module$build$src$core$events$utils(!0);
          let i;
          j() && (i = new (L(m.BLOCK_MOVE))(s.getSourceBlock()), i.setReason(["disconnect"]));
          const r = this.targetConnection;
          r && (r.targetConnection = null), this.targetConnection = null, e && s.getSourceBlock().setParent(null), i && (i.recordNew(), k(i)), s.getSourceBlock().isShadow() || t.respawnShadow_(), n.setGroup$$module$build$src$core$events$utils(o);
        }
        getParentAndChildConnections() {
          return this.targetConnection ? this.isSuperior() ? { parentConnection: this, childConnection: this.targetConnection } : { parentConnection: this.targetConnection, childConnection: this } : {};
        }
        respawnShadow_() {
          this.createShadowBlock(!0);
        }
        reconnect(e, t) {
          if (this.getSourceBlock().isDeadOrDying()) return !1;
          var s;
          return t = (s = e.getInput(t)) == null ? void 0 : s.connection, s = this.targetBlock(), s && s !== e || !t || t.targetConnection === this ? !1 : (t.isConnected() && t.disconnect(), t.connect(this), !0);
        }
        targetBlock() {
          if (this.isConnected()) {
            let e, t;
            return (t = (e = this.targetConnection) == null ? void 0 : e.getSourceBlock()) != null ? t : null;
          }
          return null;
        }
        onCheckChanged_() {
          !this.isConnected() || this.targetConnection && this.getConnectionChecker().canConnect(
            this,
            this.targetConnection,
            !1
          ) || (this.isSuperior() ? this.targetBlock() : this.sourceBlock_).unplug();
        }
        setCheck(e) {
          return e ? (Array.isArray(e) || (e = [e]), this.check = e, this.onCheckChanged_()) : this.check = null, this;
        }
        getCheck() {
          return this.check;
        }
        setShadowDom(e) {
          this.setShadowStateInternal({ shadowDom: e });
        }
        getShadowDom(e) {
          return e && this.targetBlock().isShadow() ? as(this.targetBlock()) : this.shadowDom;
        }
        setShadowState(e) {
          this.setShadowStateInternal({ shadowState: e });
        }
        getShadowState(e) {
          return e && this.targetBlock() && this.targetBlock().isShadow() ? tt(this.targetBlock()) : this.shadowState;
        }
        neighbours(e) {
          return [];
        }
        getParentInput() {
          let e = null;
          const t = this.sourceBlock_.inputList;
          for (let s = 0; s < t.length; s++) if (t[s].connection === this) {
            e = t[s];
            break;
          }
          return e;
        }
        toString() {
          const e = this.sourceBlock_;
          if (!e) return "Orphan Connection";
          if (e.outputConnection === this) var t = "Output Connection of ";
          else if (e.previousConnection === this) t = "Previous Connection of ";
          else if (e.nextConnection === this) t = "Next Connection of ";
          else {
            t = null;
            for (let s = 0, o; o = e.inputList[s]; s++) if (o.connection === this) {
              t = o;
              break;
            }
            if (t) t = 'Input "' + t.name + '" connection on ';
            else return console.warn("Connection not actually connected to sourceBlock_"), "Orphan Connection";
          }
          return t + e.toDevString();
        }
        stashShadowState() {
          const e = this.getShadowDom(!0), t = this.getShadowState(!0);
          return this.shadowState = this.shadowDom = null, { shadowDom: e, shadowState: t };
        }
        applyShadowState({ shadowDom: e, shadowState: t }) {
          this.shadowDom = e, this.shadowState = t;
        }
        setShadowStateInternal({ shadowDom: e = null, shadowState: t = null } = {}) {
          this.shadowDom = e, this.shadowState = t, this.getSourceBlock().isDeadOrDying() || ((e = this.targetBlock()) ? e.isShadow() ? (e.dispose(!1), this.respawnShadow_(), this.targetBlock() && this.targetBlock().isShadow() && this.serializeShadow(this.targetBlock())) : (e = this.createShadowBlock(!1), this.serializeShadow(e), e && e.dispose(!1)) : (this.respawnShadow_(), this.targetBlock() && this.targetBlock().isShadow() && this.serializeShadow(this.targetBlock())));
        }
        createShadowBlock(e) {
          var t = this.getSourceBlock();
          const s = this.getShadowState(), o = this.getShadowDom();
          if (t.isDeadOrDying() || !s && !o) return null;
          if (s) return t = ks(s, t.workspace, { parentConnection: e ? this : void 0, isShadow: !0, recordUndo: !1 });
          if (o) {
            if (t = Ds(o, t.workspace), e) if (this.type === C.INPUT_VALUE) {
              if (!t.outputConnection) throw Error("Shadow block is missing an output connection");
              if (!this.connect(t.outputConnection)) throw Error("Could not connect shadow block to connection");
            } else if (this.type === C.NEXT_STATEMENT) {
              if (!t.previousConnection) throw Error("Shadow block is missing previous connection");
              if (!this.connect(t.previousConnection)) throw Error("Could not connect shadow block to connection");
            } else throw Error("Cannot connect a shadow block to a previous/output connection");
            return t;
          }
          return null;
        }
        serializeShadow(e) {
          e && (this.shadowDom = as(e), this.shadowState = tt(e));
        }
        static getConnectionForOrphanedConnection(e, t) {
          if (t.type === C.OUTPUT_VALUE) return Qd(e, t.getSourceBlock());
          e = e.lastConnectionInStack(!0);
          const s = t.getConnectionChecker();
          return e && s.canConnect(t, e, !1) ? e : null;
        }
      };
      U.CAN_CONNECT = 0, U.REASON_SELF_CONNECTION = 1, U.REASON_WRONG_TYPE = 2, U.REASON_TARGET_NULL = 3, U.REASON_CHECKS_FAILED = 4, U.REASON_DIFFERENT_WORKSPACES = 5, U.REASON_SHADOW_PARENT = 6, U.REASON_DRAG_CHECKS_FAILED = 7, U.REASON_PREVIOUS_AND_OUTPUT = 8;
      var og = class extends Error {
        constructor(e) {
          super(`Tried to append an icon of type ${e.getType()} when an icon of that type already exists on the block. Use getIcon to access the existing icon.`), this.icon = e;
        }
      }, ig = {};
      ig.DuplicateIconType = og, (function(e) {
        e[e.LEFT = -1] = "LEFT", e[e.CENTRE = 0] = "CENTRE", e[e.RIGHT = 1] = "RIGHT";
      })(n.Align$$module$build$src$core$inputs$align || (n.Align$$module$build$src$core$inputs$align = {})), n.Align$$module$build$src$core$inputs$align;
      var Js = class extends X {
        constructor(e, t, s) {
          super(X.SKIP_SETUP), this.class = null, this.EDITABLE = !1, this.maxDisplayLength = 1 / 0, e !== X.SKIP_SETUP && (s ? this.configure_(s) : this.class = t || null, this.setValue(e));
        }
        configure_(e) {
          super.configure_(e), e.class && (this.class = e.class);
        }
        initView() {
          this.createTextElement_(), this.class && R(
            this.getTextElement(),
            this.class
          ), this.fieldGroup_ && R(this.fieldGroup_, "blocklyLabelField");
        }
        doClassValidation_(e) {
          return e == null ? null : `${e}`;
        }
        setClass(e) {
          this.textElement_ && (this.class && F(this.textElement_, this.class), e && R(this.textElement_, e)), this.class = e;
        }
        static fromJson(e) {
          return new this(le(e.text), void 0, e);
        }
      };
      Rt("field_label", Js), Js.prototype.DEFAULT_VALUE = "";
      var ng = 30, qs = [];
      qs[C.INPUT_VALUE] = C.OUTPUT_VALUE, qs[C.OUTPUT_VALUE] = C.INPUT_VALUE, qs[C.NEXT_STATEMENT] = C.PREVIOUS_STATEMENT, qs[C.PREVIOUS_STATEMENT] = C.NEXT_STATEMENT;
      var $a = "RENAME_VARIABLE_ID", pa = "DELETE_VARIABLE_ID", rg = 10, Re = class extends U {
        constructor(e, t) {
          super(e, t), this.highlighted = !1, this.targetConnection = null, this.db = e.workspace.connectionDBList[t], this.dbOpposite = e.workspace.connectionDBList[qs[t]], this.offsetInBlock = new I(0, 0), this.trackedState = Re.TrackedState.WILL_TRACK;
        }
        dispose() {
          super.dispose(), this.trackedState === Re.TrackedState.TRACKED && this.db.removeConnection(this, this.y);
          let e, t;
          (t = (e = this.sourceBlock_.pathObject).removeConnectionHighlight) == null || t.call(e, this);
        }
        getSourceBlock() {
          return super.getSourceBlock();
        }
        targetBlock() {
          return super.targetBlock();
        }
        distanceFrom(e) {
          const t = this.x - e.x;
          return e = this.y - e.y, Math.sqrt(t * t + e * e);
        }
        bumpAwayFrom(e, t = !1) {
          if (!this.sourceBlock_.workspace.isDragging()) {
            var s = n.config$$module$build$src$core$config.snapRadius + Math.floor(Math.random() * rg), o = n.config$$module$build$src$core$config.snapRadius + Math.floor(Math.random() * rg), i = e.sourceBlock_.getRootBlock(), r = this.sourceBlock_.getRootBlock();
            if (!i.isInFlyout && !r.isInFlyout) {
              var u = !0;
              if (r.isMovable()) i.isMovable() && t && (o = -o);
              else if (i.isMovable()) u = !1, s = -s, o = -o;
              else return;
              t = u ? e : this, e = u ? this : e, i = u ? r : i, i.RTL && (s = -s), i.moveBy(t.x + s - e.x, t.y + o - e.y, ["bump"]);
            }
          }
        }
        moveTo(e, t) {
          let s = !1;
          return this.trackedState === Re.TrackedState.WILL_TRACK ? (this.db.addConnection(this, t), this.trackedState = Re.TrackedState.TRACKED, s = !0) : this.trackedState === Re.TrackedState.TRACKED && (this.db.removeConnection(this, this.y), this.db.addConnection(this, t), s = !0), this.x = e, this.y = t, s;
        }
        moveBy(e, t) {
          return this.moveTo(this.x + e, this.y + t);
        }
        moveToOffset(e) {
          return this.moveTo(e.x + this.offsetInBlock.x, e.y + this.offsetInBlock.y);
        }
        setOffsetInBlock(e, t) {
          this.offsetInBlock.x = e, this.offsetInBlock.y = t;
        }
        getOffsetInBlock() {
          return this.offsetInBlock;
        }
        tightenEfficiently() {
          var e = this.targetConnection;
          const t = this.targetBlock();
          e && t && (e = I.difference(
            this.offsetInBlock,
            e.offsetInBlock
          ), t.translate(e.x, e.y));
        }
        closest(e, t) {
          return this.dbOpposite.searchForClosest(this, e, t);
        }
        highlight() {
          this.highlighted = !0;
          const e = this.findHighlightSvg();
          e && (e.style.display = "");
        }
        unhighlight() {
          this.highlighted = !1;
          const e = this.findHighlightSvg();
          e && (e.style.display = "none");
        }
        isHighlighted() {
          return this.highlighted;
        }
        setTracking(e) {
          e && this.trackedState === Re.TrackedState.TRACKED || !e && this.trackedState === Re.TrackedState.UNTRACKED || this.sourceBlock_.isInFlyout || (e ? (this.db.addConnection(this, this.y), this.trackedState = Re.TrackedState.TRACKED) : (this.trackedState === Re.TrackedState.TRACKED && this.db.removeConnection(this, this.y), this.trackedState = Re.TrackedState.UNTRACKED));
        }
        stopTrackingAll() {
          if (this.setTracking(!1), this.targetConnection) {
            const e = this.targetBlock().getDescendants(!1);
            for (let t = 0; t < e.length; t++) {
              const s = e[t], o = s.getConnections_(!0);
              for (let i = 0; i < o.length; i++) o[i].setTracking(!1);
              for (const i of s.getIcons()) us(i) && i.setBubbleVisible(!1);
            }
          }
        }
        startTrackingAll() {
          this.setTracking(!0);
          let e = [];
          if (this.type !== C.INPUT_VALUE && this.type !== C.NEXT_STATEMENT) return e;
          const t = this.targetBlock();
          if (t) {
            let s;
            t.isCollapsed() ? (s = [], t.outputConnection && s.push(t.outputConnection), t.nextConnection && s.push(t.nextConnection), t.previousConnection && s.push(t.previousConnection)) : s = t.getConnections_(!0);
            for (let o = 0; o < s.length; o++) e.push(...s[o].startTrackingAll());
            e.length || (e = [t]);
          }
          return e;
        }
        onFailedConnect(e) {
          const t = this.getSourceBlock();
          if (Ce()) {
            const s = n.getGroup$$module$build$src$core$events$utils();
            setTimeout((function() {
              t.isDisposed() || t.getParent() || (n.setGroup$$module$build$src$core$events$utils(s), this.bumpAwayFrom(e), n.setGroup$$module$build$src$core$events$utils(!1));
            }).bind(this), n.config$$module$build$src$core$config.bumpDelay);
          }
        }
        disconnectInternal(e = !0) {
          const { parentConnection: t, childConnection: s } = this.getParentAndChildConnections();
          if (t && s) {
            var o = n.getGroup$$module$build$src$core$events$utils();
            o || n.setGroup$$module$build$src$core$events$utils(!0);
            var i = t.getSourceBlock(), r = s.getSourceBlock();
            super.disconnectInternal(e), i.queueRender(), r.updateDisabled(), r.queueRender(), r.getSvgRoot().style.display = "block", n.setGroup$$module$build$src$core$events$utils(o);
          }
        }
        respawnShadow_() {
          super.respawnShadow_();
          const e = this.targetBlock();
          e && (e.initSvg(), e.queueRender());
        }
        neighbours(e) {
          return this.dbOpposite.getNeighbours(this, e);
        }
        connect_(e) {
          super.connect_(e);
          var t = this.getSourceBlock();
          e = e.getSourceBlock(), t.updateDisabled(), e.updateDisabled(), e.queueRender(), (t = t.getInputWithBlock(e)) && (t = t.isVisible(), e.getSvgRoot().style.display = t ? "block" : "none");
        }
        onCheckChanged_() {
          !this.isConnected() || this.targetConnection && this.getConnectionChecker().canConnect(this, this.targetConnection, !1) || (this.isSuperior() ? this.targetBlock() : this.sourceBlock_).unplug();
        }
        setCheck(e) {
          return super.setCheck(e), this.sourceBlock_.queueRender(), this;
        }
        showContextMenu(e) {
          const t = x.registry.getContextMenuOptions({ focusedNode: this }, e);
          if (t.length) {
            var s = this.getSourceBlock(), o = s.workspace;
            if (e instanceof PointerEvent) var i = new I(
              e.clientX,
              e.clientY
            );
            else i = new I(this.x, this.y), i = go(o, i).translate(s.RTL ? -5 : 5, 5);
            Co(e, t, s.RTL, o, i);
          }
        }
        getFocusableElement() {
          const e = this.findHighlightSvg();
          if (e) return e;
          throw Error("No highlight SVG found corresponding to this connection.");
        }
        getFocusableTree() {
          return this.getSourceBlock().workspace;
        }
        onNodeFocus() {
          this.highlight(), this.getSourceBlock().workspace.scrollBoundsIntoView(this.getSourceBlock().getBoundingRectangleWithoutChildren());
        }
        onNodeBlur() {
          this.unhighlight();
        }
        canBeFocused() {
          return !0;
        }
        findHighlightSvg() {
          return document.getElementById(this.id);
        }
      };
      (function(e) {
        e = e.TrackedState || (e.TrackedState = {}), e[e.WILL_TRACK = -1] = "WILL_TRACK", e[e.UNTRACKED = 0] = "UNTRACKED", e[e.TRACKED = 1] = "TRACKED";
      })(Re || (Re = {})), Re.TrackedState;
      var zo = class {
        constructor(e, t) {
          this.name = e, this.sourceBlock = t, this.fieldRow = [], this.align = n.Align$$module$build$src$core$inputs$align.LEFT, this.visible = !0, this.type = n.inputTypes$$module$build$src$core$inputs$input_types.CUSTOM, this.connection = null;
        }
        getSourceBlock() {
          return this.sourceBlock;
        }
        appendField(e, t) {
          return this.insertFieldAt(this.fieldRow.length, e, t), this;
        }
        insertFieldAt(e, t, s) {
          if (e < 0 || e > this.fieldRow.length) throw Error("index " + e + " out of bounds.");
          return (t || t === "" && s) && (typeof t == "string" && (t = n.fromJson$$module$build$src$core$field_registry({ type: "field_label", text: t })), t.setSourceBlock(this.sourceBlock), this.sourceBlock.initialized && this.initField(t), t.name = s, t.setVisible(this.isVisible()), t.prefixField && (e = this.insertFieldAt(e, t.prefixField)), this.fieldRow.splice(e, 0, t), e++, t.suffixField && (e = this.insertFieldAt(e, t.suffixField)), this.sourceBlock.rendered && this.sourceBlock.queueRender()), e;
        }
        removeField(e, t) {
          for (let s = 0, o; o = this.fieldRow[s]; s++) if (o.name === e) return o.dispose(), this.fieldRow.splice(s, 1), this.sourceBlock.rendered && this.sourceBlock.queueRender(), !0;
          if (t) return !1;
          throw Error('Field "' + e + '" not found.');
        }
        isVisible() {
          return this.visible;
        }
        setVisible(e) {
          let t = [];
          if (this.visible === e) return t;
          this.visible = e;
          for (let s = 0, o; o = this.fieldRow[s]; s++) o.setVisible(e);
          if (this.connection && this.connection instanceof Re) {
            e ? t = this.connection.startTrackingAll() : this.connection.stopTrackingAll();
            const s = this.connection.targetBlock();
            s && (s.getSvgRoot().style.display = e ? "block" : "none");
          }
          return t;
        }
        markDirty() {
          for (let e = 0, t; t = this.fieldRow[e]; e++) t.markDirty();
        }
        setCheck(e) {
          if (!this.connection) throw Error("This input does not have a connection.");
          return this.connection.setCheck(e), this;
        }
        setAlign(e) {
          return this.align = e, this.sourceBlock.rendered && this.sourceBlock.queueRender(), this;
        }
        setShadowDom(e) {
          if (!this.connection) throw Error("This input does not have a connection.");
          return this.connection.setShadowDom(e), this;
        }
        getShadowDom() {
          if (!this.connection) throw Error("This input does not have a connection.");
          return this.connection.getShadowDom();
        }
        init() {
          for (const e of this.fieldRow) e.init();
        }
        initModel() {
          for (const e of this.fieldRow) e.initModel();
        }
        initField(e) {
          this.sourceBlock.rendered ? e.init() : e.initModel();
        }
        dispose() {
          for (let e = 0, t; t = this.fieldRow[e]; e++) t.dispose();
          this.connection && this.connection.dispose();
        }
        makeConnection(e) {
          return this.sourceBlock.makeConnection_(e);
        }
      }, yt = class extends zo {
        constructor(e, t) {
          super(e, t), this.name = e, this.type = n.inputTypes$$module$build$src$core$inputs$input_types.DUMMY;
        }
      }, Zt = class extends zo {
        constructor(e, t) {
          super(e, t), this.name = e, this.type = n.inputTypes$$module$build$src$core$inputs$input_types.END_ROW;
        }
      }, Je = class extends zo {
        constructor(e, t) {
          if (!e) throw Error("Statement inputs must have a non-empty name");
          super(e, t), this.name = e, this.type = n.inputTypes$$module$build$src$core$inputs$input_types.STATEMENT, this.connection = this.makeConnection(C.NEXT_STATEMENT);
        }
      }, lg;
      n.ValueInput$$module$build$src$core$inputs$value_input = class extends zo {
        constructor(e, t) {
          if (!e) throw Error("Value inputs must have a non-empty name");
          super(e, t), this.name = e, this.type = n.inputTypes$$module$build$src$core$inputs$input_types.VALUE, this.connection = this.makeConnection(C.INPUT_VALUE);
        }
      }, lg = {}, lg.ValueInput = n.ValueInput$$module$build$src$core$inputs$value_input;
      var Yo = class {
        constructor(e, t, s) {
          if (this.data = null, this.disposed = !1, this.hue = null, this.colour_ = "#000000", this.styleName_ = "", this.suppressPrefixSuffix = !1, this.previousConnection = this.nextConnection = this.outputConnection = null, this.inputList = [], this.icons = [], this.disabledReasons = /* @__PURE__ */ new Set(), this.tooltip = "", this.contextMenu = !0, this.parentBlock_ = null, this.childBlocks_ = [], this.editable = this.movable = this.deletable = !0, this.collapsed_ = this.shadow = !1, this.outputShape_ = null, this.rendered = this.isInsertionMarker_ = this.initialized = this.disposing = !1, this.onchangeWrapper = this.helpUrl = null, this.statementInputCount = 0, this.workspace = e, this.id = s && !e.getBlockById(s) ? s : Qe(), e.setBlockById(this.id, this), this.xy = new I(0, 0), this.isInFlyout = e.isFlyout, this.isInMutator = e.isMutator, this.RTL = e.RTL, t) {
            if (this.type = t, s = q[t], !s || typeof s != "object") throw TypeError("Invalid block definition for type: " + t);
            Object.assign(this, s);
          }
          e.addTopBlock(this), e.addTypedBlock(this), new.target === Yo && this.doInit_();
        }
        doInit_() {
          const e = n.getGroup$$module$build$src$core$events$utils();
          e || n.setGroup$$module$build$src$core$events$utils(!0);
          const t = Ce();
          try {
            typeof this.init == "function" && (n.setRecordUndo$$module$build$src$core$events$utils(!1), this.init(), n.setRecordUndo$$module$build$src$core$events$utils(t)), j() && k(new (L(m.BLOCK_CREATE))(this));
          } finally {
            n.setGroup$$module$build$src$core$events$utils(e), n.setRecordUndo$$module$build$src$core$events$utils(t);
          }
          this.inputsInlineDefault = this.inputsInline, typeof this.onchange == "function" && this.setOnChange(this.onchange);
        }
        dispose(e = !1) {
          this.disposing = !0, this.onchangeWrapper && this.workspace.removeChangeListener(this.onchangeWrapper), this.unplug(e), j() && k(new (L(m.BLOCK_DELETE))(this)), this.workspace.removeTopBlock(this), this.disposeInternal();
        }
        disposeInternal() {
          this.disposing = !0, this.onchangeWrapper && this.workspace.removeChangeListener(this.onchangeWrapper), this.workspace.removeTypedBlock(this), this.workspace.removeBlockById(this.id), typeof this.destroy == "function" && this.destroy(), this.childBlocks_.forEach((e) => e.disposeInternal()), this.inputList.forEach((e) => e.dispose()), this.inputList.length = 0, this.getConnections_(!0).forEach((e) => e.dispose()), this.disposed = !0;
        }
        isDeadOrDying() {
          return this.disposing || this.disposed;
        }
        initModel() {
          if (!this.initialized) {
            for (const e of this.inputList) e.initModel();
            this.initialized = !0;
          }
        }
        unplug(e) {
          this.outputConnection && this.unplugFromRow(e), this.previousConnection && this.unplugFromStack(e);
        }
        unplugFromRow(e) {
          let t = null, s;
          (s = this.outputConnection) != null && s.isConnected() && (t = this.outputConnection.targetConnection, this.outputConnection.disconnect()), t && e && (e = this.getOnlyValueConnection()) && e.isConnected() && !e.targetBlock().isShadow() && (e = e.targetConnection, e == null || e.disconnect(), this.workspace.connectionChecker.canConnect(e, t, !1) ? t.connect(e) : e == null || e.onFailedConnect(t));
        }
        getOnlyValueConnection() {
          let e = null;
          for (let t = 0; t < this.inputList.length; t++) {
            const s = this.inputList[t].connection;
            if (s && s.type === C.INPUT_VALUE && s.targetConnection) {
              if (e) return null;
              e = s;
            }
          }
          return e;
        }
        unplugFromStack(e) {
          let t = null, s;
          if ((s = this.previousConnection) != null && s.isConnected() && (t = this.previousConnection.targetConnection, this.previousConnection.disconnect()), e) {
            for (e = this.getNextBlock(); e && (e.isShadow() || !e.isMovable()); ) e = e.getNextBlock();
            if (e) {
              var o, i, r, u;
              e = (u = (o = e.previousConnection) == null || (i = o.targetBlock()) == null || (r = i.nextConnection) == null ? void 0 : r.targetConnection) != null ? u : null, e == null || e.disconnect(), t && this.workspace.connectionChecker.canConnect(
                t,
                e,
                !1
              ) && t.connect(e);
            }
          }
        }
        getConnections_(e) {
          e = [], this.outputConnection && e.push(this.outputConnection), this.previousConnection && e.push(this.previousConnection), this.nextConnection && e.push(this.nextConnection);
          for (let t = 0, s; s = this.inputList[t]; t++) s.connection && e.push(s.connection);
          return e;
        }
        lastConnectionInStack(e) {
          let t = this.nextConnection;
          for (; t; ) {
            const s = t.targetBlock();
            if (!s || e && s.isShadow()) return t;
            t = s.nextConnection;
          }
          return null;
        }
        bumpNeighbours() {
        }
        getParent() {
          return this.parentBlock_;
        }
        getInputWithBlock(e) {
          for (let t = 0, s; s = this.inputList[t]; t++) if (s.connection && s.connection.targetBlock() === e) return s;
          return null;
        }
        getSurroundParent() {
          let e = this, t;
          do
            if (t = e, e = e.getParent(), !e) return null;
          while (e.getNextBlock() === t);
          return e;
        }
        getNextBlock() {
          return this.nextConnection && this.nextConnection.targetBlock();
        }
        getPreviousBlock() {
          return this.previousConnection && this.previousConnection.targetBlock();
        }
        getRootBlock() {
          let e, t = this;
          do
            e = t, t = e.parentBlock_;
          while (t);
          return e;
        }
        getTopStackBlock() {
          let e = this, t;
          do
            t = e.getPreviousBlock();
          while (t && t.getNextBlock() === e && (e = t));
          return e;
        }
        getChildren(e) {
          if (!e) return this.childBlocks_;
          e = [];
          for (let s = 0, o; o = this.inputList[s]; s++) if (o.connection) {
            var t = o.connection.targetBlock();
            t && e.push(t);
          }
          return (t = this.getNextBlock()) && e.push(t), e;
        }
        setParent(e) {
          if (e !== this.parentBlock_) {
            var t = this.previousConnection && this.previousConnection.targetBlock() || this.outputConnection && this.outputConnection.targetBlock(), s = !!t;
            if (s && e && t !== e) throw Error("Block connected to superior one that is not new parent.");
            if (!s && e) throw Error("Block not connected to new parent.");
            if (s && !e) throw Error("Cannot set parent to null while block is still connected to superior block.");
            this.parentBlock_ ? Ve(this.parentBlock_.childBlocks_, this) : this.workspace.removeTopBlock(this), (this.parentBlock_ = e) ? e.childBlocks_.push(this) : this.workspace.addTopBlock(this);
          }
        }
        getDescendants(e) {
          const t = [this], s = this.getChildren(e);
          for (let o, i = 0; o = s[i]; i++) t.push(...o.getDescendants(e));
          return t;
        }
        isDeletable() {
          return this.deletable && !this.isInFlyout && !this.shadow && !this.isDeadOrDying() && !this.workspace.isReadOnly();
        }
        isOwnDeletable() {
          return this.deletable;
        }
        setDeletable(e) {
          this.deletable = e;
        }
        isMovable() {
          return this.movable && !this.isInFlyout && !this.shadow && !this.isDeadOrDying() && !this.workspace.isReadOnly();
        }
        isOwnMovable() {
          return this.movable;
        }
        setMovable(e) {
          this.movable = e;
        }
        isDuplicatable() {
          return this.workspace.hasBlockLimits() ? this.workspace.isCapacityAvailable(ai(this, !0)) : !0;
        }
        isShadow() {
          return this.shadow;
        }
        setShadow(e) {
          this.shadow = e;
        }
        isInsertionMarker() {
          return this.isInsertionMarker_;
        }
        setInsertionMarker(e) {
          this.isInsertionMarker_ = e;
        }
        isEditable() {
          return this.editable && !this.isDeadOrDying() && !this.workspace.isReadOnly();
        }
        isOwnEditable() {
          return this.editable;
        }
        setEditable(e) {
          this.editable = e;
          for (const t of this.getFields()) t.updateEditable();
        }
        isDisposed() {
          return this.disposed;
        }
        isSimpleReporter() {
          if (!this.outputConnection) return !1;
          for (const e of this.inputList) if (e.connection || e.fieldRow.length > 1) return !1;
          return !0;
        }
        getMatchingConnection(e, t) {
          const s = this.getConnections_(!0);
          if (e = e.getConnections_(!0), s.length !== e.length) throw Error("Connection lists did not match in length.");
          for (let o = 0; o < e.length; o++) if (e[o] === t) return s[o];
          return null;
        }
        setHelpUrl(e) {
          this.helpUrl = e;
        }
        setTooltip(e) {
          this.tooltip = e;
        }
        getTooltip() {
          return Io(this);
        }
        getColour() {
          return this.colour_;
        }
        getStyleName() {
          return this.styleName_;
        }
        getHue() {
          return this.hue;
        }
        setColour(e) {
          e = So(e), this.hue = e.hue, this.colour_ = e.hex;
        }
        setStyle(e) {
          this.styleName_ = e;
        }
        setOnChange(e) {
          if (e && typeof e != "function") throw Error("onchange must be a function.");
          this.onchangeWrapper && this.workspace.removeChangeListener(this.onchangeWrapper), this.onchange = e, this.onchangeWrapper = e.bind(this), this.workspace.addChangeListener(this.onchangeWrapper);
        }
        getField(e) {
          if (typeof e != "string") throw TypeError("Block.prototype.getField expects a string with the field name but received " + (e === void 0 ? "nothing" : e + " of type " + typeof e) + " instead");
          for (const t of this.getFields()) if (t.name === e) return t;
          return null;
        }
        *getFields() {
          for (const e of this.inputList) for (const t of e.fieldRow) yield t;
        }
        getVars() {
          const e = [];
          for (const t of this.getFields()) t.referencesVariables() && e.push(t.getValue());
          return e;
        }
        getVarModels() {
          const e = [];
          for (const t of this.getFields()) if (t.referencesVariables()) {
            const s = this.workspace.getVariableMap().getVariableById(t.getValue());
            s && e.push(s);
          }
          return e;
        }
        updateVarName(e) {
          for (const t of this.getFields()) t.referencesVariables() && e.getId() === t.getValue() && t.refreshVariableName();
        }
        renameVarById(e, t) {
          for (const s of this.getFields()) s.referencesVariables() && e === s.getValue() && s.setValue(t);
        }
        getFieldValue(e) {
          return (e = this.getField(e)) ? e.getValue() : null;
        }
        setFieldValue(e, t) {
          const s = this.getField(t);
          if (!s) throw Error('Field "' + t + '" not found.');
          s.setValue(e);
        }
        setPreviousStatement(e, t) {
          if (e) t === void 0 && (t = null), this.previousConnection || (this.previousConnection = this.makeConnection_(C.PREVIOUS_STATEMENT)), this.previousConnection.setCheck(t);
          else if (this.previousConnection) {
            if (this.previousConnection.isConnected()) throw Error("Must disconnect previous statement before removing connection.");
            this.previousConnection.dispose(), this.previousConnection = null;
          }
        }
        setNextStatement(e, t) {
          if (e) t === void 0 && (t = null), this.nextConnection || (this.nextConnection = this.makeConnection_(C.NEXT_STATEMENT)), this.nextConnection.setCheck(t);
          else if (this.nextConnection) {
            if (this.nextConnection.isConnected()) throw Error("Must disconnect next statement before removing connection.");
            this.nextConnection.dispose(), this.nextConnection = null;
          }
        }
        setOutput(e, t) {
          if (e) t === void 0 && (t = null), this.outputConnection || (this.outputConnection = this.makeConnection_(C.OUTPUT_VALUE)), this.outputConnection.setCheck(t);
          else if (this.outputConnection) {
            if (this.outputConnection.isConnected()) throw Error("Must disconnect output value before removing connection.");
            this.outputConnection.dispose(), this.outputConnection = null;
          }
        }
        setInputsInline(e) {
          this.inputsInline !== e && (k(new (L(m.BLOCK_CHANGE))(this, "inline", null, this.inputsInline, e)), this.inputsInline = e);
        }
        getInputsInline() {
          if (this.inputsInline !== void 0) return this.inputsInline;
          for (var e = 1; e < this.inputList.length; e++) if (this.inputList[e - 1] instanceof yt && this.inputList[e] instanceof yt) return !1;
          for (e = 1; e < this.inputList.length; e++) if (this.inputList[e - 1] instanceof n.ValueInput$$module$build$src$core$inputs$value_input && this.inputList[e] instanceof yt) return !0;
          for (e = 0; e < this.inputList.length; e++) if (this.inputList[e] instanceof Zt) return !0;
          return !1;
        }
        setOutputShape(e) {
          this.outputShape_ = e;
        }
        getOutputShape() {
          return this.outputShape_;
        }
        isEnabled() {
          return this.disabledReasons.size === 0;
        }
        setDisabledReason(e, t) {
          e || this.workspace.options.disable || !this.hasDisabledReason(ot) || t == ot || this.setDisabledReason(!1, ot), this.disabledReasons.has(t) !== e && (e ? this.disabledReasons.add(t) : this.disabledReasons.delete(t), e = new (L(m.BLOCK_CHANGE))(this, "disabled", null, !e, e), e.setDisabledReason(t), k(e));
        }
        getInheritedDisabled() {
          let e = this.getSurroundParent();
          for (; e; ) {
            if (!e.isEnabled()) return !0;
            e = e.getSurroundParent();
          }
          return !1;
        }
        hasDisabledReason(e) {
          return this.disabledReasons.has(e);
        }
        getDisabledReasons() {
          return this.disabledReasons;
        }
        isCollapsed() {
          return this.collapsed_;
        }
        setCollapsed(e) {
          this.collapsed_ !== e && (k(new (L(m.BLOCK_CHANGE))(this, "collapsed", null, this.collapsed_, e)), this.collapsed_ = e);
        }
        toString(e, t) {
          t = this.toTokens(t);
          for (let o = 2; o < t.length; o++) t[o - 2] === "(" && t[o] === ")" && (t[o - 2] = t[o - 1], t.splice(o - 1, 2));
          let s = "";
          return t = t.reduce((o, i) => (o = o + (s === "(" || i === ")" ? "" : " ") + i, s = i[i.length - 1], o), ""), t = t.trim() || "???", e && t.length > e && (t = t.substring(0, e - 3) + "..."), t;
        }
        toTokens(e = "?") {
          const t = [];
          for (const o of this.inputList) if (o.name != Ui) {
            for (const i of o.fieldRow) t.push(i.getText());
            if (o.connection) {
              const i = o.connection.targetBlock();
              if (i) {
                var s = o.connection;
                let r = s.getCheck();
                !r && s.targetConnection && (r = s.targetConnection.getCheck()), (s = !!r && (r.includes("Boolean") || r.includes("Number"))) && t.push("("), t.push(...i.toTokens(e)), s && t.push(")");
              } else t.push(e);
            }
          }
          return t;
        }
        appendValueInput(e) {
          return this.appendInput(new n.ValueInput$$module$build$src$core$inputs$value_input(e, this));
        }
        appendStatementInput(e) {
          return this.statementInputCount++, this.appendInput(new Je(e, this));
        }
        appendDummyInput(e = "") {
          return this.appendInput(new yt(
            e,
            this
          ));
        }
        appendEndRowInput(e = "") {
          return this.appendInput(new Zt(e, this));
        }
        appendInput(e) {
          return this.inputList.push(e), e;
        }
        appendInputFromRegistry(e, t) {
          return (e = He(f.INPUT, e, !1)) ? this.appendInput(new e(t, this)) : null;
        }
        jsonInit(e) {
          var t = e.type ? 'Block "' + e.type + '": ' : "";
          if (e.output && e.previousStatement) throw Error(t + "Must not have both an output and a previousStatement.");
          for (var s = 0; e["args" + s]; ) {
            if (e["message" + s] === void 0) throw Error(t + `args${s} must have a corresponding message (message${s}).`);
            s++;
          }
          if (e.style && e.style.hat && (this.hat = e.style.hat, e.style = null), e.style && e.colour) throw Error(t + "Must not have both a colour and a style.");
          for (e.style ? this.jsonInitStyle(e, t) : this.jsonInitColour(e, t), s = 0; e["message" + s] !== void 0; ) this.interpolate(e["message" + s], e["args" + s] || [], e["implicitAlign" + s] || e["lastDummyAlign" + s], t), s++;
          if (e.inputsInline !== void 0 && (n.disable$$module$build$src$core$events$utils(), this.setInputsInline(e.inputsInline), n.enable$$module$build$src$core$events$utils()), e.output !== void 0 && this.setOutput(!0, e.output), e.outputShape !== void 0 && this.setOutputShape(e.outputShape), e.previousStatement !== void 0 && this.setPreviousStatement(!0, e.previousStatement), e.nextStatement !== void 0 && this.setNextStatement(!0, e.nextStatement), e.tooltip !== void 0 && (s = le(e.tooltip), this.setTooltip(s)), e.enableContextMenu !== void 0 && (this.contextMenu = !!e.enableContextMenu), e.suppressPrefixSuffix !== void 0 && (this.suppressPrefixSuffix = !!e.suppressPrefixSuffix), e.helpUrl !== void 0 && (s = le(e.helpUrl), this.setHelpUrl(s)), typeof e.extensions == "string" && (console.warn(t + "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" + e.type + "' block."), e.extensions = [e.extensions]), e.mutator !== void 0 && Kn(e.mutator, this, !0), e = e.extensions, Array.isArray(e)) for (t = 0; t < e.length; t++) Kn(e[t], this, !1);
        }
        jsonInitColour(e, t) {
          if ("colour" in e) if (e.colour === void 0) console.warn(t + "Undefined colour value.");
          else {
            e = e.colour;
            try {
              this.setColour(e);
            } catch {
              console.warn(t + "Illegal colour value: ", e);
            }
          }
        }
        jsonInitStyle(e, t) {
          e = e.style;
          try {
            this.setStyle(e);
          } catch {
            console.warn(t + "Style does not exist: ", e);
          }
        }
        mixin(e, t) {
          if (t !== void 0 && typeof t != "boolean") throw Error("opt_disableCheck must be a boolean if provided");
          if (!t) {
            t = [];
            for (const s in e) this[s] !== void 0 && t.push(s);
            if (t.length) throw Error("Mixin will overwrite block members: " + JSON.stringify(t));
          }
          Object.assign(this, e);
        }
        interpolate(e, t, s, o) {
          e = uc(e), this.validateTokens(e, t.length), t = this.interpolateArguments(e, t, s), s = [];
          for (let i = 0, r; r = t[i]; i++) if (this.isInputKeyword(r.type)) {
            if (e = this.inputFromJson(r, o)) {
              for (let u = 0, h; h = s[u]; u++) e.appendField(h[0], h[1]);
              s.length = 0;
            }
          } else (e = this.fieldFromJson(r)) && s.push([e, r.name]);
        }
        validateTokens(e, t) {
          const s = [];
          let o = 0;
          for (let i = 0; i < e.length; i++) {
            const r = e[i];
            if (typeof r == "number") {
              if (r < 1 || r > t) throw Error('Block "' + this.type + '": Message index %' + r + " out of range.");
              if (s[r]) throw Error('Block "' + this.type + '": Message index %' + r + " duplicated.");
              s[r] = !0, o++;
            }
          }
          if (o !== t) throw Error('Block "' + this.type + '": Message does not reference all ' + t + " arg(s).");
        }
        interpolateArguments(e, t, s) {
          const o = [];
          for (let r = 0; r < e.length; r++) {
            var i = e[r];
            if (typeof i == "number" && (i = t[i - 1]), typeof i == "string") {
              if (i === `
`) i = { type: "input_end_row" }, s && (i.align = s);
              else if (i = this.stringToFieldJson(i), !i) continue;
            }
            o.push(i);
          }
          return (e = o.length) && !this.isInputKeyword(o[e - 1].type) && (e = { type: "input_dummy" }, s && (e.align = s), o.push(e)), o;
        }
        fieldFromJson(e) {
          const t = n.fromJson$$module$build$src$core$field_registry(e);
          return !t && e.alt ? typeof e.alt == "string" ? (e = this.stringToFieldJson(e.alt)) ? this.fieldFromJson(e) : null : this.fieldFromJson(e.alt) : t;
        }
        inputFromJson(e, t) {
          var s = {
            LEFT: n.Align$$module$build$src$core$inputs$align.LEFT,
            RIGHT: n.Align$$module$build$src$core$inputs$align.RIGHT,
            CENTRE: n.Align$$module$build$src$core$inputs$align.CENTRE,
            CENTER: n.Align$$module$build$src$core$inputs$align.CENTRE
          };
          let o;
          switch (e.type) {
            case "input_value":
              o = this.appendValueInput(e.name);
              break;
            case "input_statement":
              o = this.appendStatementInput(e.name);
              break;
            case "input_dummy":
              o = this.appendDummyInput(e.name);
              break;
            case "input_end_row":
              o = this.appendEndRowInput(e.name);
              break;
            default:
              o = this.appendInputFromRegistry(e.type, e.name);
          }
          return o ? (e.check && o.setCheck(e.check), e.align && (s = s[e.align.toUpperCase()], s === void 0 ? console.warn(t + "Illegal align value: ", e.align) : o.setAlign(s)), o) : null;
        }
        isInputKeyword(e) {
          return e === "input_value" || e === "input_statement" || e === "input_dummy" || e === "input_end_row" || oo(f.INPUT, e);
        }
        stringToFieldJson(e) {
          return (e = e.trim()) ? { type: "field_label", text: e } : null;
        }
        moveInputBefore(e, t) {
          if (e !== t) {
            var s = -1, o = t ? -1 : this.inputList.length;
            for (let i = 0, r; r = this.inputList[i]; i++) if (r.name === e) {
              if (s = i, o !== -1) break;
            } else if (t && r.name === t && (o = i, s !== -1)) break;
            if (s === -1) throw Error('Named input "' + e + '" not found.');
            if (o === -1) throw Error('Reference input "' + t + '" not found.');
            this.moveNumberedInputBefore(s, o);
          }
        }
        moveNumberedInputBefore(e, t) {
          if (e === t) throw Error("Can't move input to itself.");
          if (e >= this.inputList.length) throw RangeError("Input index " + e + " out of bounds.");
          if (t > this.inputList.length) throw RangeError("Reference input " + t + " out of bounds.");
          const s = this.inputList[e];
          this.inputList.splice(e, 1), e < t && t--, this.inputList.splice(
            t,
            0,
            s
          );
        }
        removeInput(e, t) {
          for (let s = 0, o; o = this.inputList[s]; s++) if (o.name === e) return o instanceof Je && this.statementInputCount--, o.dispose(), this.inputList.splice(s, 1), !0;
          if (t) return !1;
          throw Error("Input not found: " + e);
        }
        getInput(e) {
          for (let t = 0, s; s = this.inputList[t]; t++) if (s.name === e) return s;
          return null;
        }
        getInputTargetBlock(e) {
          return (e = this.getInput(e)) && e.connection && e.connection.targetBlock();
        }
        getCommentText() {
          let e, t;
          return (t = (e = this.getIcon($e.COMMENT)) == null ? void 0 : e.getText()) != null ? t : null;
        }
        setCommentText(e) {
          var t;
          let s;
          const o = (s = (t = this.getIcon($e.COMMENT)) == null ? void 0 : t.getText()) != null ? s : null;
          if (o !== e) {
            if (e !== null) {
              if (t = this.getIcon($e.COMMENT), !t) {
                if (t = He(f.ICON, $e.COMMENT.toString(), !1), !t) throw Error("No comment icon class is registered, so a comment cannot be set");
                if (t = new t(this), !e$(t)) throw Error("The class registered as a comment icon does not conform to the ICommentIcon interface");
                t = this.addIcon(t);
              }
              n.disable$$module$build$src$core$events$utils(), t.setText(e), n.enable$$module$build$src$core$events$utils();
            } else this.removeIcon($e.COMMENT);
            k(new (L(m.BLOCK_CHANGE))(
              this,
              "comment",
              null,
              o,
              e
            ));
          }
        }
        setWarningText(e, t) {
        }
        setMutator(e) {
        }
        addIcon(e) {
          if (this.hasIcon(e.getType())) throw new og(e);
          return this.icons.push(e), this.icons.sort((t, s) => t.getWeight() - s.getWeight()), e;
        }
        removeIcon(e) {
          if (!this.hasIcon(e)) return !1;
          let t;
          return (t = this.getIcon(e)) == null || t.dispose(), this.icons = this.icons.filter((s) => !s.getType().equals(e)), !0;
        }
        hasIcon(e) {
          return this.icons.some((t) => t.getType().equals(e));
        }
        getIcon(e) {
          return e instanceof $e ? this.icons.find((t) => t.getType().equals(e)) : this.icons.find((t) => t.getType().toString() === e);
        }
        getIcons() {
          return [...this.icons];
        }
        getRelativeToSurfaceXY() {
          return this.xy;
        }
        moveBy(e, t, s) {
          if (this.parentBlock_) throw Error("Block has parent");
          const o = new (L(m.BLOCK_MOVE))(this);
          s && o.setReason(s), this.xy.translate(e, t), o.recordNew(), k(o);
        }
        makeConnection_(e) {
          return new U(
            this,
            e
          );
        }
        allInputsFilled(e) {
          if (e === void 0 && (e = !0), !e && this.isShadow()) return !1;
          for (let s = 0, o; o = this.inputList[s]; s++) if (o.connection) {
            var t = o.connection.targetBlock();
            if (!t || !t.allInputsFilled(e)) return !1;
          }
          return (t = this.getNextBlock()) ? t.allInputsFilled(e) : !0;
        }
        toDevString() {
          let e = this.type ? '"' + this.type + '" block' : "Block";
          return this.id && (e += ' (id="' + this.id + '")'), e;
        }
      };
      Yo.COLLAPSED_INPUT_NAME = Ui, Yo.COLLAPSED_FIELD_NAME = Ir;
      var Vr = null, ji = null, Ji = {};
      Ji.connectionUiEffect = Ac, Ji.disconnectUiEffect = kc, Ji.disconnectUiStop = Lo, Ji.disposeUiEffect = qn;
      var qi = class {
        paste(e, t, s) {
          if (!t.isCapacityAvailable(e.typeCounts)) return null;
          s && (e.blockState.x = s.x, e.blockState.y = s.y), s = s || new I(e.blockState.x || 0, e.blockState.y || 0), n.disable$$module$build$src$core$events$utils();
          let o;
          try {
            o = As(e.blockState, t), t$(o, s);
          } finally {
            n.enable$$module$build$src$core$events$utils();
          }
          if (!o) return o;
          j() && !o.isShadow() && k(new (L(m.BLOCK_CREATE))(o));
          const i = o;
          return bt().then(() => n.getFocusManager$$module$build$src$core$focus_manager().focusNode(i)), o;
        }
      };
      qi.TYPE = "block", Rn(qi.TYPE, new qi());
      var Wr = {};
      Wr.bumpIntoBounds = Ao, Wr.bumpIntoBoundsHandler = wc, Wr.bumpTopObjectsIntoBounds = Zn;
      var cg = class {
        constructor(e) {
          this.block = e, this.connectionPreviewer = this.connectionCandidate = this.startLoc = this.startChildConn = this.startParentConn = null, this.dragging = !1, this.dragOffset = new I(0, 0), this.originalEventGroup = "", this.workspace = e.workspace;
        }
        isMovable() {
          if (this.block.isShadow()) {
            let e, t;
            return (t = (e = this.block.getParent()) == null ? void 0 : e.isMovable()) != null ? t : !1;
          }
          return this.block.isOwnMovable() && !this.block.isDeadOrDying() && !this.workspace.isReadOnly() && !this.block.isInFlyout;
        }
        startDrag(e) {
          if (this.block.isShadow()) this.startDraggingShadow(e);
          else {
            this.dragging = !0, this.fireDragStartEvent(), this.startLoc = this.block.getRelativeToSurfaceXY(), this.connectionCandidate = null, this.connectionPreviewer = new (Ee(f.CONNECTION_PREVIEWER, this.workspace.options))(this.block), Bt(), this.workspace.setResizesEnabled(!1), Lo(), e = this.shouldHealStack(e), this.shouldDisconnect(e) && this.disconnectBlock(e), this.block.setDragging(!0);
            var t;
            (t = this.workspace.getLayerManager()) == null || t.moveToDragLayer(this.block), this.getVisibleBubbles(this.block).forEach((s) => {
              let o;
              (o = this.workspace.getLayerManager()) == null || o.moveToDragLayer(s, !1);
            });
          }
        }
        getVisibleBubbles(e) {
          return e.getDescendants(!1).flatMap((t) => t.getIcons()).filter((t) => us(t) && t.bubbleIsVisible()).map((t) => t.getBubble()).filter((t) => !!t).sort((t, s) => (t = t.getSvgRoot().compareDocumentPosition(s.getSvgRoot()), t & Node.DOCUMENT_POSITION_PRECEDING ? 1 : t & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 0));
        }
        shouldHealStack(e) {
          return !!e && (e.altKey || e.ctrlKey || e.metaKey);
        }
        startDraggingShadow(e) {
          const t = this.block.getParent();
          if (!t) throw Error("Tried to drag a shadow block with no parent. Shadow blocks should always have parents.");
          this.dragOffset = I.difference(
            t.getRelativeToSurfaceXY(),
            this.block.getRelativeToSurfaceXY()
          ), t.startDrag(e);
        }
        shouldDisconnect(e) {
          return !!(this.block.getParent() || e && this.block.nextConnection && this.block.nextConnection.targetBlock());
        }
        disconnectBlock(e) {
          let t, s, o;
          if (this.startParentConn = (o = (t = this.block.outputConnection) == null ? void 0 : t.targetConnection) != null ? o : (s = this.block.previousConnection) == null ? void 0 : s.targetConnection, e) {
            let i;
            this.startChildConn = (i = this.block.nextConnection) == null ? void 0 : i.targetConnection;
          }
          this.block.unplug(e), kc(this.block);
        }
        fireDragStartEvent() {
          const e = new (L(m.BLOCK_DRAG))(this.block, !0, this.block.getDescendants(!1));
          k(e);
        }
        fireDragEndEvent() {
          const e = new (L(m.BLOCK_DRAG))(this.block, !1, this.block.getDescendants(!1));
          k(e);
        }
        fireMoveEvent() {
          if (!this.block.isDeadOrDying()) {
            var e = new (L(m.BLOCK_MOVE))(this.block);
            e.setReason(["drag"]), e.oldCoordinate = this.startLoc, e.recordNew(), k(e);
          }
        }
        drag(e) {
          if (this.block.isShadow()) {
            let t;
            (t = this.block.getParent()) == null || t.drag(I.sum(e, this.dragOffset));
          } else this.block.moveDuringDrag(e), this.updateConnectionPreview(this.block, I.difference(e, this.startLoc));
        }
        updateConnectionPreview(e, t) {
          var s = this.connectionCandidate;
          const o = this.getConnectionCandidate(
            e,
            t
          );
          if (o) {
            this.connectionCandidate = t = s && this.currCandidateIsBetter(s, t, o) ? s : o;
            var { local: i, neighbour: r } = t;
            t = i.type === C.OUTPUT_VALUE || i.type === C.PREVIOUS_STATEMENT;
            var u;
            if (s = r.isConnected() && !((u = r.targetBlock()) != null && u.isInsertionMarker()), t && s && !this.orphanCanConnectAtEnd(e, r.targetBlock(), i.type)) {
              let E;
              (E = this.connectionPreviewer) == null || E.previewReplacement(i, r, r.targetBlock());
            } else {
              var h;
              (h = this.connectionPreviewer) == null || h.previewConnection(i, r);
            }
          } else {
            let E;
            (E = this.connectionPreviewer) == null || E.hidePreview(), this.connectionCandidate = null;
          }
        }
        orphanCanConnectAtEnd(e, t, s) {
          return !!U.getConnectionForOrphanedConnection(e, s === C.OUTPUT_VALUE ? t.outputConnection : t.previousConnection);
        }
        currCandidateIsBetter(e, t, s) {
          const { local: o, neighbour: i } = e;
          e = new I(
            o.x,
            o.y
          );
          const r = new I(i.x, i.y);
          return t = I.distance(I.sum(e, t), r), s.distance > t - n.config$$module$build$src$core$config.currentConnectionPreference;
        }
        getConnectionCandidate(e, t) {
          e = this.getLocalConnections(e);
          let s = this.getSearchRadius(), o = null;
          for (const i of e) {
            const { connection: r, radius: u } = i.closest(s, t);
            r && (o = { local: i, neighbour: r, distance: u }, s = u);
          }
          return o;
        }
        getSearchRadius() {
          return this.connectionCandidate ? n.config$$module$build$src$core$config.connectingSnapRadius : n.config$$module$build$src$core$config.snapRadius;
        }
        getLocalConnections(e) {
          const t = e.getConnections_(!1), s = e.lastConnectionInStack(!0);
          return s && s !== e.nextConnection && t.push(s), t;
        }
        endDrag(e) {
          if (this.block.isShadow()) {
            let s;
            (s = this.block.getParent()) == null || s.endDrag(e);
          } else {
            this.originalEventGroup = n.getGroup$$module$build$src$core$events$utils(), this.fireDragEndEvent(), this.fireMoveEvent(), xt(), Lo();
            var t;
            if ((t = this.connectionPreviewer) == null || t.hidePreview(), !this.block.isDeadOrDying() && this.dragging) {
              let s;
              (s = this.workspace.getLayerManager()) == null || s.moveOffDragLayer(this.block, Ks), this.getVisibleBubbles(this.block).forEach((o) => {
                let i;
                return (i = this.workspace.getLayerManager()) == null ? void 0 : i.moveOffDragLayer(o, Go, !1);
              }), this.block.setDragging(!1);
            }
            this.connectionCandidate ? (this.applyConnections(this.connectionCandidate), this.disposeStep()) : this.block.queueRender().then(() => this.disposeStep());
          }
        }
        disposeStep() {
          const e = n.getGroup$$module$build$src$core$events$utils();
          n.setGroup$$module$build$src$core$events$utils(this.originalEventGroup), this.block.snapToGrid();
          let t;
          (t = this.connectionPreviewer) == null || t.dispose(), this.workspace.setResizesEnabled(!0), n.setGroup$$module$build$src$core$events$utils(e);
        }
        applyConnections(e) {
          const { local: t, neighbour: s } = e;
          t.connect(s);
          const o = t.isSuperior() ? s : t, i = this.block.getRootBlock();
          bt().then(() => {
            Ac(o.getSourceBlock()), setTimeout(() => {
              i.bringToFront();
            }, 0);
          });
        }
        revertDrag() {
          if (this.block.isShadow()) {
            let s;
            (s = this.block.getParent()) == null || s.revertDrag();
          } else {
            var e;
            (e = this.connectionPreviewer) == null || e.hidePreview(), this.connectionCandidate = null;
            var t;
            if ((t = this.startChildConn) == null || t.connect(this.block.nextConnection), this.startParentConn) switch (this.startParentConn.type) {
              case C.INPUT_VALUE:
                this.startParentConn.connect(this.block.outputConnection);
                break;
              case C.NEXT_STATEMENT:
                this.startParentConn.connect(this.block.previousConnection);
            }
            else {
              this.block.moveTo(this.startLoc, ["drag"]);
              let s;
              (s = this.workspace.getLayerManager()) == null || s.moveOffDragLayer(this.block, Ks), this.getVisibleBubbles(this.block).forEach((o) => {
                let i;
                return (i = this.workspace.getLayerManager()) == null ? void 0 : i.moveOffDragLayer(o, Go, !1);
              }), Ao(
                this.workspace,
                this.workspace.getMetricsManager().getScrollMetrics(!0),
                this.block
              );
            }
            this.startParentConn = this.startChildConn = null, this.block.setDragging(!1), this.dragging = !1;
          }
        }
      }, ug = class extends V {
        constructor(e, t, s, o) {
          super(t, s, o), this.text = e, this.workspace = t, this.anchor = s, this.ownerRect = o, this.paragraph = this.stringToSvg(e, this.contentContainer), this.updateBubbleSize(), R(this.svgRoot, "blocklyTextBubble");
        }
        getText() {
          return this.text;
        }
        setText(e) {
          this.text = e, G(this.paragraph), this.paragraph = this.stringToSvg(
            e,
            this.contentContainer
          ), this.updateBubbleSize();
        }
        stringToSvg(e, t) {
          return t = this.createParagraph(t), e = this.createTextFragments(t, e), this.workspace.RTL && this.rightAlignTextFragments(t.getBBox().width, e), t;
        }
        createParagraph(e) {
          return b(g.G, { class: "blocklyText blocklyBubbleText blocklyNoPointerEvents", transform: `translate(0,${V.BORDER_WIDTH})`, style: `direction: ${this.workspace.RTL ? "rtl" : "ltr"}` }, e);
        }
        createTextFragments(e, t) {
          let s = 1;
          return t.split(`
`).map((o) => {
            const i = b(g.TEXT, { y: `${s}em`, x: V.BORDER_WIDTH }, e);
            return o = document.createTextNode(o), i.appendChild(o), s += 1, i;
          });
        }
        rightAlignTextFragments(e, t) {
          for (const s of t) s.setAttribute("text-anchor", "start"), s.setAttribute("x", `${e + V.BORDER_WIDTH}`);
        }
        updateBubbleSize() {
          const e = this.paragraph.getBBox();
          this.setSize(new D(e.width + V.BORDER_WIDTH * 2, e.height + V.BORDER_WIDTH * 2), !0);
        }
      }, ga = 17, vt = class extends Vo {
        constructor(e) {
          super(e), this.sourceBlock = e, this.textMap = /* @__PURE__ */ new Map(), this.textBubble = null;
        }
        getType() {
          return vt.TYPE;
        }
        initView(e) {
          this.svgRoot || (super.initView(e), b(
            g.PATH,
            { class: "blocklyIconShape", d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z" },
            this.svgRoot
          ), b(g.PATH, { class: "blocklyIconSymbol", d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z" }, this.svgRoot), b(g.RECT, { class: "blocklyIconSymbol", x: "7", y: "11", height: "2", width: "2" }, this.svgRoot), R(this.svgRoot, "blocklyWarningIcon"));
        }
        dispose() {
          super.dispose();
          let e;
          (e = this.textBubble) == null || e.dispose();
        }
        getWeight() {
          return vt.WEIGHT;
        }
        getSize() {
          return new D(ga, ga);
        }
        applyColour() {
          super.applyColour();
          let e;
          (e = this.textBubble) == null || e.setColour(this.sourceBlock.getColour());
        }
        updateCollapsed() {
        }
        isShownWhenCollapsed() {
          return !0;
        }
        onLocationChange(e) {
          super.onLocationChange(e);
          let t;
          (t = this.textBubble) == null || t.setAnchorLocation(this.getAnchorLocation());
        }
        addMessage(e, t) {
          if (this.textMap.get(t) === e) return this;
          e ? this.textMap.set(t, e) : this.textMap.delete(t);
          let s;
          return (s = this.textBubble) == null || s.setText(this.getText()), this;
        }
        getText() {
          return [...this.textMap.values()].join(`
`);
        }
        onClick() {
          super.onClick(), this.setBubbleVisible(!this.bubbleIsVisible());
        }
        isClickableInFlyout() {
          return !1;
        }
        bubbleIsVisible() {
          return !!this.textBubble;
        }
        setBubbleVisible(e) {
          const t = this;
          return (0, $.asyncExecutePromiseGeneratorFunction)(function* () {
            if (t.bubbleIsVisible() !== e) {
              if (yield bt(), e) t.textBubble = new ug(t.getText(), t.sourceBlock.workspace, t.getAnchorLocation(), t.getBubbleOwnerRect()), t.applyColour();
              else {
                let s;
                (s = t.textBubble) == null || s.dispose(), t.textBubble = null;
              }
              k(new (L(m.BUBBLE_OPEN))(t.sourceBlock, e, "warning"));
            }
          });
        }
        getBubble() {
          return this.textBubble;
        }
        getAnchorLocation() {
          const e = ga / 2;
          return I.sum(this.workspaceLocation, new I(e, e));
        }
        getBubbleOwnerRect() {
          const e = this.sourceBlock.getSvgRoot().getBBox();
          return new M(e.y, e.y + e.height, e.x, e.x + e.width);
        }
      };
      vt.TYPE = $e.WARNING, vt.WEIGHT = 2;
      var z = class extends Yo {
        constructor(e, t, s) {
          if (super(e, t, s), this.childlessWidth = this.width = this.height = 0, this.warningTextDb = /* @__PURE__ */ new Map(), this.mutator = null, this.rendered = !0, this.visuallyDisabled = !1, this.translation = "", this.dragging = !1, this.relativeCoords = new I(0, 0), this.dragStrategy = new cg(this), !e.rendered) throw TypeError("Cannot create a rendered block in a headless workspace");
          this.workspace = e, this.svgGroup = b(g.G, {}), t && R(this.svgGroup, t), this.style = e.getRenderer().getConstants().getBlockStyle(null), this.pathObject = e.getRenderer().makePathObject(this.svgGroup, this.style), e = this.pathObject.svgPath, e.tooltip = this, Ii(e), this.svgGroup.setAttribute("data-id", this.id), e.id = oe(), this.doInit_();
        }
        initSvg() {
          if (!this.initialized) {
            for (var e of this.inputList) e.init();
            for (const t of this.getIcons()) t.initView(this.createIconPointerDownListener(t)), t.updateEditable();
            this.applyColour(), this.pathObject.updateMovable(this.isMovable() || this.isInFlyout), (e = this.getSvgRoot()) && w(e, "pointerdown", this, this.onMouseDown), e.parentNode || this.workspace.getCanvas().appendChild(e), this.initialized = !0;
          }
        }
        getColourSecondary() {
          return this.style.colourSecondary;
        }
        getColourTertiary() {
          return this.style.colourTertiary;
        }
        select() {
          this.addSelect(), S(this);
        }
        unselect() {
          this.removeSelect(), S(null);
        }
        setParent(e) {
          var t = this.parentBlock_;
          if (e !== t) {
            Bt(), super.setParent(e), xt();
            var s = this.getSvgRoot();
            if (!this.workspace.isClearing && s) {
              var o = this.getRelativeToSurfaceXY(), i = n.getFocusManager$$module$build$src$core$focus_manager().getFocusedNode(), r, u = this.getSvgRoot().contains((r = i == null ? void 0 : i.getFocusableElement()) != null ? r : null);
              e ? (e.getSvgRoot().appendChild(s), u && i && n.getFocusManager$$module$build$src$core$focus_manager().focusNode(i)) : t && (e = this.workspace.getCanvas().querySelector(".blocklyDragging"), t = e == null ? void 0 : e.parentElement, r = this.workspace.getCanvas(), t === r ? r.insertBefore(s, e) : (r.appendChild(s), u && i && n.getFocusManager$$module$build$src$core$focus_manager().focusNode(i)), this.translate(o.x, o.y)), this.applyColour();
            }
          }
        }
        getRelativeToSurfaceXY() {
          const e = this.workspace.getLayerManager();
          if (!e) throw Error("Cannot calculate position because the workspace has not been appended");
          let t = 0, s = 0, o = this.getSvgRoot();
          if (o)
            do {
              const i = $i(o);
              t += i.x, s += i.y, o = o.parentNode;
            } while (o && !e.hasLayer(o));
          return new I(t, s);
        }
        moveBy(e, t, s) {
          if (this.parentBlock_) throw Error("Block has parent");
          const o = j();
          let i = null;
          o && (i = new (L(m.BLOCK_MOVE))(this), s && i.setReason(s)), e = new I(e, t), t = this.getRelativeToSurfaceXY(), e = I.sum(t, e), this.translate(e.x, e.y), this.updateComponentLocations(e), o && i && (i.recordNew(), k(i)), this.workspace.resizeContents();
        }
        translate(e, t) {
          this.translation = `translate(${e}, ${t})`, this.relativeCoords = new I(e, t), this.getSvgRoot().setAttribute(
            "transform",
            this.getTranslation()
          );
        }
        getTranslation() {
          return this.translation;
        }
        moveTo(e, t) {
          const s = this.getRelativeToSurfaceXY();
          this.moveBy(e.x - s.x, e.y - s.y, t);
        }
        moveDuringDrag(e) {
          this.translate(e.x, e.y), this.getSvgRoot().setAttribute("transform", this.getTranslation()), this.updateComponentLocations(e);
        }
        snapToGrid() {
          if (!this.isDeadOrDying() && !this.getParent() && !this.isInFlyout) {
            var e = this.workspace.getGrid();
            if (e != null && e.shouldSnap()) {
              var t = this.getRelativeToSurfaceXY();
              e = e.alignXY(t), e !== t && this.moveTo(e, ["snap"]);
            }
          }
        }
        getBoundingRectangle() {
          return this.getBoundingRectangleWithDimensions(this.getHeightWidth());
        }
        getBoundingRectangleWithoutChildren() {
          return this.getBoundingRectangleWithDimensions({
            height: this.height,
            width: this.childlessWidth
          });
        }
        getBoundingRectangleWithDimensions(e) {
          const t = this.getRelativeToSurfaceXY();
          let s, o;
          return this.RTL ? (s = t.x - e.width, o = t.x) : (s = t.x, o = t.x + e.width), new M(t.y, t.y + e.height, s, o);
        }
        markDirty() {
          this.pathObject.constants = this.workspace.getRenderer().getConstants();
          for (let e = 0, t; t = this.inputList[e]; e++) t.markDirty();
        }
        setCollapsed(e) {
          this.collapsed_ !== e && (super.setCollapsed(e), this.updateCollapsed());
        }
        childHasWarning() {
          var e = this.getNextBlock();
          e = e ? new Set(e.getDescendants(!1)) : null;
          const t = this.getDescendants(!1);
          for (const s of t) {
            if (s === this) continue;
            let o;
            if (((o = e) == null || !o.has(s)) && s.getIcon(vt.TYPE)) return !0;
          }
          return !1;
        }
        updateCollapsed() {
          var e = this.isCollapsed();
          const t = Ui, s = Ir;
          for (let i = 0, r; r = this.inputList[i]; i++) r.name !== t && r.setVisible(!e);
          for (var o of this.getIcons()) o.updateCollapsed();
          e ? (R(this.svgGroup, "blocklyCollapsed"), this.childHasWarning() && this.setWarningText(n.Msg$$module$build$src$core$msg.COLLAPSED_WARNINGS_WARNING, z.COLLAPSED_WARNING_ID), e = this.toString(ng), (o = this.getField(s)) ? o.setValue(e) : (this.getInput(t) || this.appendDummyInput(t)).appendField(new Js(e), s)) : (this.updateDisabled(), this.removeInput(t), F(this.svgGroup, "blocklyCollapsed"), this.setWarningText(null, z.COLLAPSED_WARNING_ID));
        }
        onMouseDown(e) {
          if (!this.workspace.isReadOnly()) {
            var t = this.workspace.getGesture(e);
            t && t.handleBlockStart(e, this);
          }
        }
        showHelp() {
          const e = typeof this.helpUrl == "function" ? this.helpUrl() : this.helpUrl;
          e && window.open(e);
        }
        generateContextMenu(e) {
          return this.workspace.isReadOnly() || !this.contextMenu ? null : (e = x.registry.getContextMenuOptions({
            block: this,
            focusedNode: this
          }, e), this.customContextMenu && this.customContextMenu(e), e);
        }
        calculateContextMenuLocation(e) {
          if (e instanceof PointerEvent) return new I(e.clientX, e.clientY);
          e = go(this.workspace, this.getRelativeToSurfaceXY());
          let t, s;
          const o = (t = this.inputList.filter((i) => i.isVisible()).flatMap((i) => i.fieldRow).find((i) => i.isVisible())) == null || (s = t.getSvgRoot()) == null ? void 0 : s.getBoundingClientRect();
          return new I(this.RTL ? e.x - 5 : e.x + 5, (o && o.height ? o.y + o.height : e.y + this.height) + 5);
        }
        showContextMenu(e) {
          const t = this.generateContextMenu(e), s = this.calculateContextMenuLocation(e);
          t && t.length && (Co(e, t, this.RTL, this.workspace, s), gc(this));
        }
        updateComponentLocations(e) {
          this.dragging || this.updateConnectionLocations(e), this.updateIconLocations(e), this.updateFieldLocations(e);
          for (const t of this.getChildren(!1)) t.updateComponentLocations(I.sum(
            e,
            t.relativeCoords
          ));
        }
        updateConnectionLocations(e) {
          for (const t of this.getConnections_(!1)) t.moveToOffset(e);
        }
        updateIconLocations(e) {
          for (const t of this.getIcons()) t.onLocationChange(e);
        }
        updateFieldLocations(e) {
          for (const t of this.inputList) for (const s of t.fieldRow) s.onLocationChange(e);
        }
        addClass(e) {
          R(this.svgGroup, e);
        }
        removeClass(e) {
          F(this.svgGroup, e);
        }
        setDragging(e) {
          (this.dragging = e) ? (this.translation = "", Pi.push(...this.getConnections_(!0)), this.addClass("blocklyDragging")) : (Pi.length = 0, this.removeClass("blocklyDragging"));
          for (let t = 0; t < this.childBlocks_.length; t++) this.childBlocks_[t].setDragging(e);
        }
        setMovable(e) {
          super.setMovable(e), this.pathObject.updateMovable(e);
        }
        setEditable(e) {
          super.setEditable(e), e ? F(this.svgGroup, "blocklyNotEditable") : R(this.svgGroup, "blocklyNotEditable"), e = this.getIcons();
          for (let t = 0; t < e.length; t++) e[t].updateEditable();
        }
        setShadow(e) {
          super.setShadow(e), this.applyColour();
        }
        setInsertionMarker(e) {
          this.isInsertionMarker_ !== e && (this.isInsertionMarker_ = e) && (this.setColour(this.workspace.getRenderer().getConstants().INSERTION_MARKER_COLOUR), this.pathObject.updateInsertionMarker(!0));
        }
        getSvgRoot() {
          return this.svgGroup;
        }
        getNearestNeighbour() {
          if (!this.workspace.rendered) return null;
          var e = this.workspace.getAllBlocks(!1).filter((i) => !i.isDeadOrDying());
          let t = null, s = Number.MAX_SAFE_INTEGER;
          const o = this.getRelativeToSurfaceXY();
          for (const i of e) e = i.getRelativeToSurfaceXY(), e = Math.sqrt(Math.pow(e.x - o.x, 2) + Math.pow(e.y - o.y, 2)), e < s && (t = i, s = e);
          return t;
        }
        dispose(e, t) {
          this.disposing = !0, oc(), Oi();
          const s = n.getFocusManager$$module$build$src$core$focus_manager();
          var o, i;
          if (this.getSvgRoot().contains((i = (o = s.getFocusedNode()) == null ? void 0 : o.getFocusableElement()) != null ? i : null)) {
            if (o = this.getParent(), !o) {
              var r;
              if (i = (r = this.outputConnection) != null ? r : this.previousConnection) {
                let u;
                o = (u = i.closest(0, new I(0, 0)).connection) == null ? void 0 : u.getSourceBlock();
              }
            }
            o ? s.focusNode(o) : (r = this.getNearestNeighbour()) ? s.focusNode(r) : setTimeout(() => {
              this.workspace.rendered && s.focusTree(this.workspace);
            }, 0);
          }
          t && (this.unplug(e), qn(this)), super.dispose(!!e), G(this.svgGroup);
        }
        disposeInternal() {
          this.disposing = !0, super.disposeInternal(), n.getFocusManager$$module$build$src$core$focus_manager().getFocusedNode() === this && this.workspace.cancelCurrentGesture(), [...this.warningTextDb.values()].forEach((e) => clearTimeout(e)), this.warningTextDb.clear(), this.getIcons().forEach((e) => e.dispose());
        }
        checkAndDelete() {
          this.workspace.isFlyout || (n.setGroup$$module$build$src$core$events$utils(!0), this.workspace.hideChaff(), this.outputConnection ? this.dispose(!1, !0) : this.dispose(!0, !0), n.setGroup$$module$build$src$core$events$utils(!1));
        }
        toCopyData(e = !1) {
          return this.isInsertionMarker_ ? null : { paster: qi.TYPE, blockState: tt(this, { addCoordinates: !0, addNextBlocks: e, saveIds: !1 }), typeCounts: ai(this, !0) };
        }
        applyColour() {
          var e, t;
          for ((t = (e = this.pathObject).applyColour) == null || t.call(e, this), e = this.getIcons(), t = 0; t < e.length; t++) e[t].applyColour();
          for (const s of this.getFields()) s.applyColour();
        }
        updateDisabled() {
          const e = !this.isEnabled() || this.getInheritedDisabled();
          if (this.visuallyDisabled === e) {
            let t;
            (t = this.getNextBlock()) == null || t.updateDisabled();
          } else {
            this.applyColour(), this.visuallyDisabled = e;
            for (const t of this.getChildren(!1)) t.updateDisabled();
          }
        }
        setWarningText(e, t = "") {
          if (t) this.warningTextDb.has(t) && (clearTimeout(this.warningTextDb.get(t)), this.warningTextDb.delete(t));
          else {
            for (var s of this.warningTextDb.values()) clearTimeout(s);
            this.warningTextDb.clear();
          }
          if (this.workspace.isDragging()) this.warningTextDb.set(t, setTimeout(() => {
            this.isDeadOrDying() || (this.warningTextDb.delete(t), this.setWarningText(e, t));
          }, 100));
          else if (this.isInFlyout && (e = null), s = this.getIcon(vt.TYPE), e) {
            let o = this.getSurroundParent(), i = null;
            for (; o; ) o.isCollapsed() && (i = o), o = o.getSurroundParent();
            i && i.setWarningText(n.Msg$$module$build$src$core$msg.COLLAPSED_WARNINGS_WARNING, z.COLLAPSED_WARNING_ID), s ? s.addMessage(e, t) : this.addIcon(new vt(this).addMessage(e, t));
          } else s && (t ? (s.addMessage("", t), s.getText() || this.removeIcon(vt.TYPE)) : this.removeIcon(vt.TYPE));
        }
        setMutator(e) {
          this.removeIcon(n.MutatorIcon$$module$build$src$core$icons$mutator_icon.TYPE), e && this.addIcon(e);
        }
        addIcon(e) {
          return super.addIcon(e), e instanceof n.MutatorIcon$$module$build$src$core$icons$mutator_icon && (this.mutator = e), e.initView(this.createIconPointerDownListener(e)), e.applyColour(), e.updateEditable(), this.queueRender(), e;
        }
        createIconPointerDownListener(e) {
          return (t) => {
            !this.isDeadOrDying() && (t = this.workspace.getGesture(t)) && (this.bringToFront(), t.setStartIcon(e), n.getFocusManager$$module$build$src$core$focus_manager().focusNode(e));
          };
        }
        removeIcon(e) {
          const t = super.removeIcon(e);
          return e.equals(n.MutatorIcon$$module$build$src$core$icons$mutator_icon.TYPE) && (this.mutator = null), this.queueRender(), t;
        }
        setDisabledReason(e, t) {
          const s = this.isEnabled();
          super.setDisabledReason(e, t), this.isEnabled() === s || this.getInheritedDisabled() || this.updateDisabled();
        }
        setDeletable(e) {
          super.setDeletable(e), e ? F(this.svgGroup, "blocklyNotDeletable") : R(this.svgGroup, "blocklyNotDeletable");
        }
        setHighlighted(e) {
          this.pathObject.updateHighlighted(e);
        }
        addSelect() {
          this.pathObject.updateSelected(!0);
        }
        removeSelect() {
          this.pathObject.updateSelected(!1);
        }
        setDeleteStyle(e) {
          this.pathObject.updateDraggingDelete(e);
        }
        getColour() {
          return this.style.colourPrimary;
        }
        setColour(e) {
          super.setColour(e), e = this.workspace.getRenderer().getConstants().getBlockStyleForColour(this.colour_);
          let t, s;
          (s = (t = this.pathObject).setStyle) == null || s.call(t, e.style), this.style = e.style, this.styleName_ = e.name, this.applyColour();
        }
        setStyle(e) {
          const t = this.workspace.getRenderer().getConstants().getBlockStyle(e);
          if (this.styleName_ && F(this.svgGroup, this.styleName_), t) {
            this.hat = t.hat;
            let s, o;
            (o = (s = this.pathObject).setStyle) == null || o.call(s, t), this.colour_ = t.colourPrimary, this.style = t, this.applyColour(), R(this.svgGroup, e), this.styleName_ = e;
          } else throw Error("Invalid style name: " + e);
        }
        getStyle() {
          return this.style;
        }
        bringToFront(e = !1) {
          const t = n.getFocusManager$$module$build$src$core$focus_manager().getFocusedNode();
          let s = this;
          if (!s.isDeadOrDying()) {
            do {
              const o = s.getSvgRoot(), i = o.parentNode, r = i.childNodes;
              if (r[r.length - 1] !== o && i.appendChild(o), e) break;
              s = s.getParent();
            } while (s);
            t && n.getFocusManager$$module$build$src$core$focus_manager().focusNode(t);
          }
        }
        setPreviousStatement(e, t) {
          super.setPreviousStatement(e, t), this.queueRender();
        }
        setNextStatement(e, t) {
          super.setNextStatement(e, t), this.queueRender();
        }
        setOutput(e, t) {
          super.setOutput(e, t), this.queueRender();
        }
        setInputsInline(e) {
          super.setInputsInline(e), this.queueRender();
        }
        removeInput(e, t) {
          return e = super.removeInput(e, t), this.queueRender(), e;
        }
        moveNumberedInputBefore(e, t) {
          super.moveNumberedInputBefore(e, t), this.queueRender();
        }
        appendInput(e) {
          return super.appendInput(e), this.queueRender(), e;
        }
        setConnectionTracking(e) {
          if (this.previousConnection && this.previousConnection.setTracking(e), this.outputConnection && this.outputConnection.setTracking(e), this.nextConnection) {
            this.nextConnection.setTracking(e);
            var t = this.nextConnection.targetBlock();
            t && t.setConnectionTracking(e);
          }
          if (!this.collapsed_) for (t = 0; t < this.inputList.length; t++) {
            var s = this.inputList[t].connection;
            s && (s.setTracking(e), (s = s.targetBlock()) && s.setConnectionTracking(e));
          }
        }
        getConnections_(e) {
          const t = [];
          if (this.outputConnection && t.push(this.outputConnection), this.previousConnection && t.push(this.previousConnection), this.nextConnection && t.push(this.nextConnection), e || !this.collapsed_) for (let s = 0, o; o = this.inputList[s]; s++) o.connection && t.push(o.connection);
          return t;
        }
        lastConnectionInStack(e) {
          return super.lastConnectionInStack(e);
        }
        getMatchingConnection(e, t) {
          return super.getMatchingConnection(e, t);
        }
        makeConnection_(e) {
          return new Re(this, e);
        }
        getNextBlock() {
          return super.getNextBlock();
        }
        getPreviousBlock() {
          return super.getPreviousBlock();
        }
        bumpNeighbours() {
          const e = this.getRootBlock();
          if (!(this.isDeadOrDying() || this.workspace.isDragging() || e.isInFlyout)) for (const t of this.getConnections_(!1)) {
            if (t.isSuperior()) {
              let s;
              (s = t.targetBlock()) == null || s.bumpNeighbours();
            }
            for (const s of t.neighbours(n.config$$module$build$src$core$config.snapRadius)) s.getSourceBlock().getRootBlock() !== e && (t.isConnected() && s.isConnected() || (t.isSuperior() ? s.bumpAwayFrom(t, !1) : t.bumpAwayFrom(s, !0)));
          }
        }
        scheduleSnapAndBump() {
          this.snapToGrid(), this.bumpNeighbours();
        }
        positionNearConnection(e, t, s) {
          if (e.type === C.NEXT_STATEMENT || e.type === C.INPUT_VALUE) {
            let o = t.x;
            t = t.y, o += s.x - e.getOffsetInBlock().x, t += s.y - e.getOffsetInBlock().y, this.moveBy(o, t);
          }
        }
        getChildren(e) {
          return super.getChildren(e);
        }
        queueRender() {
          return Rl(this);
        }
        render() {
          this.queueRender(), cs();
        }
        renderEfficiently() {
          Bt(), this.isCollapsed() && this.updateCollapsed(), this.isEnabled() || this.updateDisabled(), this.workspace.getRenderer().render(this), this.tightenChildrenEfficiently(), xt();
        }
        tightenChildrenEfficiently() {
          for (const e of this.inputList) {
            const t = e.connection;
            t && t.tightenEfficiently();
          }
          this.nextConnection && this.nextConnection.tightenEfficiently();
        }
        getHeightWidth() {
          let e = this.height, t = this.width;
          var s = this.getNextBlock();
          if (s) {
            s = s.getHeightWidth();
            const o = this.workspace.getRenderer().getConstants().NOTCH_HEIGHT;
            e += s.height - o, t = Math.max(t, s.width);
          }
          return { height: e, width: t };
        }
        fadeForReplacement(e) {
          this.pathObject.updateReplacementFade(e);
        }
        highlightShapeForInput(e, t) {
          this.pathObject.updateShapeForInputHighlight(e, t);
        }
        getDragStrategy() {
          return this.dragStrategy;
        }
        setDragStrategy(e) {
          this.dragStrategy = e;
        }
        isCopyable() {
          return this.isOwnDeletable() && this.isOwnMovable();
        }
        isMovable() {
          return this.dragStrategy.isMovable();
        }
        startDrag(e) {
          this.dragStrategy.startDrag(e);
        }
        drag(e, t) {
          this.dragStrategy.drag(e, t);
        }
        endDrag(e) {
          this.dragStrategy.endDrag(e);
        }
        revertDrag() {
          this.dragStrategy.revertDrag();
        }
        toFlyoutInfo() {
          const e = Object.assign({}, { kind: "BLOCK" }, tt(this)), t = /* @__PURE__ */ new Set(["id", "height", "width", "pinned", "enabled"]), s = function(o) {
            for (const i in o) t.has(i) ? delete o[i] : typeof o[i] == "object" && s(o[i]);
          };
          return s(e), [e];
        }
        jsonInit(e) {
          super.jsonInit(e), e.classes && this.addClass(Array.isArray(e.classes) ? e.classes.join(" ") : e.classes);
        }
        getFocusableElement() {
          return this.pathObject.svgPath;
        }
        getFocusableTree() {
          return this.workspace;
        }
        onNodeFocus() {
          this.select(), this.workspace.scrollBoundsIntoView(this.getBoundingRectangleWithoutChildren());
        }
        onNodeBlur() {
          this.unselect();
        }
        canBeFocused() {
          return !0;
        }
      };
      z.INLINE = -1, z.COLLAPSED_WARNING_ID = "TEMP_COLLAPSED_WARNING_";
      var ag = class {
        constructor() {
        }
        onDragEnter(e) {
        }
        onDragOver(e) {
        }
        onDragExit(e) {
        }
        onDrop(e) {
        }
        getClientRect() {
          return null;
        }
        shouldPreventMove(e) {
          return !1;
        }
      }, Xr = class extends ag {
        constructor() {
          super(), this.wouldDelete_ = !1;
        }
        wouldDelete(e) {
          return e instanceof z ? (e = !e.getParent() && e.isDeletable(), this.updateWouldDelete_(e)) : this.updateWouldDelete_(st(e) && e.isDeletable()), this.wouldDelete_;
        }
        updateWouldDelete_(e) {
          this.wouldDelete_ = e;
        }
      }, Ko = class {
        constructor(e, t) {
          this.element = e, this.type = t;
        }
        getElement() {
          return this.element;
        }
        getType() {
          return this.type;
        }
      }, _a = class {
        constructor(e) {
          this.workspace_ = e;
        }
        getDimensionsPx_(e) {
          let t = 0, s = 0;
          return e && (t = e.getWidth(), s = e.getHeight()), new D(t, s);
        }
        getFlyoutMetrics(e) {
          return e = this.getDimensionsPx_(this.workspace_.getFlyout(e)), { width: e.width, height: e.height, position: this.workspace_.toolboxPosition };
        }
        getToolboxMetrics() {
          const e = this.getDimensionsPx_(this.workspace_.getToolbox());
          return { width: e.width, height: e.height, position: this.workspace_.toolboxPosition };
        }
        getSvgMetrics() {
          return this.workspace_.getCachedParentSvgSize();
        }
        getAbsoluteMetrics() {
          let e = 0, t = 0;
          const s = this.getToolboxMetrics(), o = this.getFlyoutMetrics(), i = !!this.workspace_.getToolbox();
          var r;
          const u = !((r = this.workspace_.getFlyout()) != null && r.autoClose);
          r = i ? s.position : o.position;
          const h = r === P.TOP;
          return r === P.LEFT && (i && (e += s.width), u && (e += o.width)), h && (i && (t += s.height), u && (t += o.height)), { top: t, left: e };
        }
        getViewMetrics(e) {
          e = e ? this.workspace_.scale : 1;
          const t = this.getSvgMetrics(), s = this.getToolboxMetrics(), o = this.getFlyoutMetrics(), i = !!this.workspace_.getToolbox();
          var r;
          const u = !((r = this.workspace_.getFlyout()) != null && r.autoClose);
          r = i ? s.position : o.position;
          const h = r === P.LEFT || r === P.RIGHT;
          return (r === P.TOP || r === P.BOTTOM) && (i && (t.height -= s.height), u && (t.height -= o.height)), h && (i && (t.width -= s.width), u && (t.width -= o.width)), { height: t.height / e, width: t.width / e, top: -this.workspace_.scrollY / e, left: -this.workspace_.scrollX / e };
        }
        getContentMetrics(e) {
          e = e ? 1 : this.workspace_.scale;
          const t = this.workspace_.getBlocksBoundingBox();
          return { height: (t.bottom - t.top) * e, width: (t.right - t.left) * e, top: t.top * e, left: t.left * e };
        }
        hasFixedEdges() {
          return !this.workspace_.isMovableHorizontally() || !this.workspace_.isMovableVertically();
        }
        getComputedFixedEdges_(e) {
          if (!this.hasFixedEdges()) return {};
          const t = this.workspace_.isMovableHorizontally(), s = this.workspace_.isMovableVertically();
          e = e || this.getViewMetrics(!1);
          const o = {};
          return s || (o.top = e.top, o.bottom = e.top + e.height), t || (o.left = e.left, o.right = e.left + e.width), o;
        }
        getPaddedContent_(e, t) {
          const s = t.top + t.height, o = t.left + t.width, i = e.width;
          e = e.height;
          const r = i / 2, u = e / 2;
          return { top: Math.min(t.top - u, s - e), bottom: Math.max(s + u, t.top + e), left: Math.min(t.left - r, o - i), right: Math.max(o + r, t.left + i) };
        }
        getScrollMetrics(e, t, s) {
          e = e ? this.workspace_.scale : 1, t = t || this.getViewMetrics(!1);
          var o = s || this.getContentMetrics();
          s = this.getComputedFixedEdges_(t), t = this.getPaddedContent_(t, o), o = s.top !== void 0 ? s.top : t.top;
          const i = s.left !== void 0 ? s.left : t.left;
          return { top: o / e, left: i / e, width: ((s.right !== void 0 ? s.right : t.right) - i) / e, height: ((s.bottom !== void 0 ? s.bottom : t.bottom) - o) / e };
        }
        getUiMetrics() {
          return { viewMetrics: this.getViewMetrics(), absoluteMetrics: this.getAbsoluteMetrics(), toolboxMetrics: this.getToolboxMetrics() };
        }
        getMetrics() {
          const e = this.getToolboxMetrics(), t = this.getFlyoutMetrics(!0), s = this.getSvgMetrics(), o = this.getAbsoluteMetrics(), i = this.getViewMetrics(), r = this.getContentMetrics(), u = this.getScrollMetrics(!1, i, r);
          return { contentHeight: r.height, contentWidth: r.width, contentTop: r.top, contentLeft: r.left, scrollHeight: u.height, scrollWidth: u.width, scrollTop: u.top, scrollLeft: u.left, viewHeight: i.height, viewWidth: i.width, viewTop: i.top, viewLeft: i.left, absoluteTop: o.top, absoluteLeft: o.left, svgHeight: s.height, svgWidth: s.width, toolboxWidth: e.width, toolboxHeight: e.height, toolboxPosition: e.position, flyoutWidth: t.width, flyoutHeight: t.height };
        }
      };
      c(f.METRICS_MANAGER, We, _a);
      var hg = class extends _a {
        constructor(e, t) {
          super(e), this.flyout_ = t;
        }
        getBoundingBox() {
          let e;
          try {
            e = this.workspace_.getCanvas().getBBox();
          } catch {
            e = { height: 0, y: 0, width: 0, x: 0 };
          }
          return e;
        }
        getContentMetrics(e) {
          const t = this.getBoundingBox();
          return e = e ? 1 : this.workspace_.scale, { height: t.height * e, width: t.width * e, top: t.y * e, left: t.x * e };
        }
        getScrollMetrics(e, t, s) {
          return t = s || this.getContentMetrics(), s = this.flyout_.MARGIN * this.workspace_.scale, e = e ? this.workspace_.scale : 1, { height: (t.height + 2 * s) / e, width: (t.width + t.left + s) / e, top: 0, left: 0 };
        }
      }, Be = class {
        constructor(e, t, s, o) {
          this.workspace = e, this.targetWorkspace = t, this.isFlyoutLabel = o, this.height = this.width = 0, this.cursorSvg = this.svgText = null, this.text = s.text, this.position = new I(0, 0), this.callbackKey = s.callbackKey || s.callbackkey, this.cssClass = s["web-class"] || null, this.info = s, e = this.isFlyoutLabel ? "blocklyFlyoutLabel" : "blocklyFlyoutButton", this.cssClass && (e += " " + this.cssClass), this.id = oe(), this.svgGroup = b(g.G, { id: this.id, class: e }, this.workspace.getCanvas());
          let i;
          this.isFlyoutLabel || (i = b(g.RECT, { class: "blocklyFlyoutButtonShadow", rx: Be.BORDER_RADIUS, ry: Be.BORDER_RADIUS, x: 1, y: 1 }, this.svgGroup)), e = b(
            g.RECT,
            { class: this.isFlyoutLabel ? "blocklyFlyoutLabelBackground" : "blocklyFlyoutButtonBackground", rx: Be.BORDER_RADIUS, ry: Be.BORDER_RADIUS },
            this.svgGroup
          ), t = b(g.TEXT, { class: this.isFlyoutLabel ? "blocklyFlyoutLabelText" : "blocklyText", x: 0, y: 0, "text-anchor": "middle" }, this.svgGroup), s = le(this.text), this.workspace.RTL && (s += "‏"), t.textContent = s, this.isFlyoutLabel && (this.svgText = t, this.workspace.getThemeManager().subscribe(this.svgText, "flyoutForegroundColour", "fill")), o = Et(t, "fontSize");
          const r = Et(t, "fontWeight"), u = Et(t, "fontFamily");
          if (this.width = Cs(t, o, r, u), s = ho(
            s,
            o,
            r,
            u
          ), this.height = this.height || s.height, !this.isFlyoutLabel) {
            this.width += 2 * Be.TEXT_MARGIN_X, this.height += 2 * Be.TEXT_MARGIN_Y;
            let h;
            (h = i) == null || h.setAttribute("width", String(this.width));
            let E;
            (E = i) == null || E.setAttribute("height", String(this.height));
          }
          e.setAttribute("width", String(this.width)), e.setAttribute("height", String(this.height)), t.setAttribute("x", String(this.width / 2)), t.setAttribute("y", String(this.height / 2 - s.height / 2 + s.baseline)), this.updateTransform(), this.onMouseDownWrapper = w(this.svgGroup, "pointerdown", this, this.onMouseDown), this.onMouseUpWrapper = w(this.svgGroup, "pointerup", this, this.onMouseUp);
        }
        createDom() {
          return this.svgGroup;
        }
        show() {
          this.updateTransform(), this.svgGroup.setAttribute("display", "block");
        }
        updateTransform() {
          this.svgGroup.setAttribute("transform", "translate(" + this.position.x + "," + this.position.y + ")");
        }
        moveTo(e, t) {
          this.position.x = e, this.position.y = t, this.updateTransform();
        }
        moveBy(e, t, s) {
          this.moveTo(this.position.x + e, this.position.y + t);
        }
        isLabel() {
          return this.isFlyoutLabel;
        }
        getPosition() {
          return this.position;
        }
        getBoundingRectangle() {
          return new M(this.position.y, this.position.y + this.height, this.position.x, this.position.x + this.width);
        }
        getButtonText() {
          return this.text;
        }
        getTargetWorkspace() {
          return this.targetWorkspace;
        }
        getWorkspace() {
          return this.workspace;
        }
        dispose() {
          H(this.onMouseDownWrapper), H(this.onMouseUpWrapper), this.svgGroup && G(this.svgGroup), this.svgText && this.workspace.getThemeManager().unsubscribe(this.svgText);
        }
        setCursorSvg(e) {
          e ? this.svgGroup && (this.svgGroup.appendChild(e), this.cursorSvg = e) : this.cursorSvg = null;
        }
        onMouseUp(e) {
          (e = this.targetWorkspace.getGesture(e)) && e.cancel(), this.isFlyoutLabel && this.callbackKey ? console.warn("Labels should not have callbacks. Label text: " + this.text) : this.isFlyoutLabel || this.callbackKey && this.targetWorkspace.getButtonCallback(this.callbackKey) ? this.isFlyoutLabel || (e = this.targetWorkspace.getButtonCallback(this.callbackKey)) && e(this) : console.warn("Buttons should have callbacks. Button text: " + this.text);
        }
        onMouseDown(e) {
          const t = this.targetWorkspace.getGesture(e), s = this.targetWorkspace.getFlyout();
          t && s && t.handleFlyoutStart(e, s);
        }
        getSvgRoot() {
          return this.svgGroup;
        }
        getFocusableElement() {
          return this.svgGroup;
        }
        getFocusableTree() {
          return this.workspace;
        }
        onNodeFocus() {
          var e = this.getPosition();
          e = new M(e.y, e.y + this.height, e.x, e.x + this.width), this.workspace.scrollBoundsIntoView(e);
        }
        onNodeBlur() {
        }
        canBeFocused() {
          return !0;
        }
      };
      Be.TEXT_MARGIN_X = 5, Be.TEXT_MARGIN_Y = 2, Be.BORDER_RADIUS = 4, Tt(`
.blocklyFlyoutButton {
  fill: #888;
  cursor: default;
}

.blocklyFlyoutButtonShadow {
  fill: #666;
}

@media (hover: hover) {
  .blocklyFlyoutButton:hover {
    fill: #aaa;
  }
}

.blocklyFlyoutButton:active {
  fill: #aaa;
}

.blocklyFlyoutLabel {
  cursor: default;
}

.blocklyFlyoutLabelBackground {
  opacity: 0;
}
`);
      var dg = class {
        getFirstChild(e) {
          return null;
        }
        getParent(e) {
          return e.getWorkspace();
        }
        getNextSibling(e) {
          return null;
        }
        getPreviousSibling(e) {
          return null;
        }
        isNavigable(e) {
          return e.canBeFocused();
        }
        isApplicable(e) {
          return e instanceof Be;
        }
      }, $g = class {
        constructor(e, t) {
          this.policy = e, this.flyout = t;
        }
        getFirstChild(e) {
          return null;
        }
        getParent(e) {
          return this.policy.getParent(e);
        }
        getNextSibling(e) {
          const t = this.flyout.getContents();
          if (!t) return null;
          let s = t.findIndex((o) => o.getElement() === e);
          return s === -1 ? null : (s++, s >= t.length && (s = 0), t[s].getElement());
        }
        getPreviousSibling(e) {
          const t = this.flyout.getContents();
          if (!t) return null;
          let s = t.findIndex((o) => o.getElement() === e);
          return s === -1 ? null : (s--, s < 0 && (s = t.length - 1), t[s].getElement());
        }
        isNavigable(e) {
          return this.policy.isNavigable(e);
        }
        isApplicable(e) {
          return this.policy.isApplicable(e);
        }
      }, zr = class {
        constructor(e, t) {
          this.gap = e, this.axis = t, this.y = this.x = 0;
        }
        getBoundingRectangle() {
          switch (this.axis) {
            case "x":
              return new M(this.y, this.y, this.x, this.x + this.gap);
            case "y":
              return new M(this.y, this.y + this.gap, this.x, this.x);
          }
        }
        moveBy(e, t, s) {
          this.x += e, this.y += t;
        }
        isNavigable() {
          return !1;
        }
        getFocusableElement() {
          throw Error("Cannot be focused");
        }
        getFocusableTree() {
          throw Error("Cannot be focused");
        }
        onNodeFocus() {
        }
        onNodeBlur() {
        }
        canBeFocused() {
          return !1;
        }
      }, pg = class {
        getFirstChild(e) {
          return null;
        }
        getParent(e) {
          return null;
        }
        getNextSibling(e) {
          return null;
        }
        getPreviousSibling(e) {
          return null;
        }
        isNavigable(e) {
          return !1;
        }
        isApplicable(e) {
          return e instanceof zr;
        }
      }, Tm = class {
        getFirstChild(e) {
          return e.getEditor();
        }
        getParent(e) {
          let t;
          return (t = e.getOwner()) != null ? t : null;
        }
        getNextSibling(e) {
          return null;
        }
        getPreviousSibling(e) {
          return null;
        }
        isNavigable(e) {
          return e.canBeFocused();
        }
        isApplicable(e) {
          return e instanceof Gr;
        }
      }, gg = class {
        getFirstChild(e) {
          return Mc(e, !0)[0];
        }
        getParent(e) {
          var t;
          if ((t = e.previousConnection) != null && t.targetBlock()) {
            if (t = e.getSurroundParent()) return t;
          } else {
            let s;
            if ((s = e.outputConnection) != null && s.targetBlock()) return e.outputConnection.targetBlock();
          }
          return e.workspace;
        }
        getNextSibling(e) {
          let t;
          if ((t = e.nextConnection) != null && t.targetBlock()) {
            let o;
            return (o = e.nextConnection) == null ? void 0 : o.targetBlock();
          }
          let s;
          return (s = e.outputConnection) != null && s.targetBlock() ? ct(e, 1) : e.getSurroundParent() ? ct(e.getTopStackBlock(), 1) : this.getParent(e) instanceof we ? ko(e, 1) : null;
        }
        getPreviousSibling(e) {
          let t;
          if ((t = e.previousConnection) != null && t.targetBlock()) {
            let o;
            return (o = e.previousConnection) == null ? void 0 : o.targetBlock();
          }
          let s;
          return (s = e.outputConnection) != null && s.targetBlock() ? ct(e, -1) : this.getParent(e) instanceof we ? ko(e, -1) : null;
        }
        isNavigable(e) {
          return e.canBeFocused();
        }
        isApplicable(e) {
          return e instanceof z;
        }
      }, Em = class {
        getFirstChild(e) {
          return null;
        }
        getParent(e) {
          return e.getCommentView().workspace.getCommentById(e.getCommentView().commentId);
        }
        getNextSibling(e) {
          const t = e.getCommentView().getCommentBarButtons();
          return e = t.indexOf(e), e >= 0 && e + 1 < t.length ? t[e + 1] : null;
        }
        getPreviousSibling(e) {
          const t = e.getCommentView().getCommentBarButtons();
          return e = t.indexOf(e), e > 0 ? t[e - 1] : null;
        }
        isNavigable(e) {
          return e.canBeFocused();
        }
        isApplicable(e) {
          return e instanceof Dr;
        }
      }, fm = class {
        getFirstChild(e) {
          return null;
        }
        getParent(e) {
          return null;
        }
        getNextSibling(e) {
          return null;
        }
        getPreviousSibling(e) {
          return null;
        }
        isNavigable(e) {
          return e.canBeFocused();
        }
        isApplicable(e) {
          return e instanceof Pr;
        }
      }, _g = class {
        getFirstChild(e) {
          return e.getParentInput() ? e.targetConnection : null;
        }
        getParent(e) {
          return e.getSourceBlock();
        }
        getNextSibling(e) {
          if (e.getParentInput()) return ct(e, 1);
          if (e.type === C.NEXT_STATEMENT) {
            const s = e.targetConnection;
            var t = e.getSourceBlock();
            if (!s && t.getRootBlock().lastConnectionInStack(!1) === e) {
              e = t.workspace.getTopBlocks(!0), t = e.indexOf(t.getRootBlock()) + 1, t >= e.length && (t = 0), t = e[t];
              let o;
              return (o = this.getParentConnection(t)) != null ? o : t;
            }
            return s;
          }
          return e.getSourceBlock();
        }
        getPreviousSibling(e) {
          if (e.getParentInput()) return ct(e, -1);
          if (e.type === C.PREVIOUS_STATEMENT || e.type === C.OUTPUT_VALUE) {
            const s = e.targetConnection && !e.targetConnection.getParentInput() ? e.targetConnection : null;
            var t = e.getSourceBlock();
            if (!s && this.getParentConnection(t.getRootBlock()) === e) {
              e = t.workspace.getTopBlocks(!0), t = e.indexOf(t.getRootBlock()) - 1, t < 0 && (t = e.length - 1), t = e[t];
              let o;
              return (o = t.lastConnectionInStack(!1)) != null ? o : t;
            }
            return s;
          }
          return e.type === C.NEXT_STATEMENT ? e.getSourceBlock() : null;
        }
        getParentConnection(e) {
          let t;
          return !e.outputConnection || (t = e.previousConnection) != null && t.isConnected() ? e.previousConnection : e.outputConnection;
        }
        isNavigable(e) {
          return e.canBeFocused();
        }
        isApplicable(e) {
          return e instanceof Re;
        }
      }, mg = class {
        getFirstChild(e) {
          return null;
        }
        getParent(e) {
          return e.getSourceBlock();
        }
        getNextSibling(e) {
          return ct(e, 1);
        }
        getPreviousSibling(e) {
          return ct(e, -1);
        }
        isNavigable(e) {
          let t;
          return e.canBeFocused() && e.isVisible() && (e.isClickable() || e.isCurrentlyEditable()) && !((t = e.getSourceBlock()) != null && t.isSimpleReporter() && e.isFullBlockField()) && e.getParentInput().isVisible();
        }
        isApplicable(e) {
          return e instanceof X;
        }
      }, ma = {};
      ma.register = Dc, ma.unregister = n$;
      var Ta = 17, Tg = 160, Eg = 80, dt = class extends Vo {
        constructor(e) {
          super(e), this.sourceBlock = e, this.textInputBubble = null, this.text = "", this.bubbleSize = new D(Tg, Eg), this.bubbleVisiblity = !1;
        }
        getType() {
          return dt.TYPE;
        }
        initView(e) {
          this.svgRoot || (super.initView(e), b(g.CIRCLE, { class: "blocklyIconShape", r: "8", cx: "8", cy: "8" }, this.svgRoot), b(
            g.PATH,
            { class: "blocklyIconSymbol", d: "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.4050.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25-1.201,0.998 -1.201,1.528 -1.204,2.19z" },
            this.svgRoot
          ), b(g.RECT, { class: "blocklyIconSymbol", x: "6.8", y: "10.78", height: "2", width: "2" }, this.svgRoot), R(this.svgRoot, "blocklyCommentIcon"));
        }
        dispose() {
          super.dispose();
          let e;
          (e = this.textInputBubble) == null || e.dispose();
        }
        getWeight() {
          return dt.WEIGHT;
        }
        getSize() {
          return new D(
            Ta,
            Ta
          );
        }
        applyColour() {
          super.applyColour();
          const e = this.sourceBlock.getColour();
          let t;
          (t = this.textInputBubble) == null || t.setColour(e);
        }
        updateEditable() {
          const e = this, t = () => super.updateEditable;
          return (0, $.asyncExecutePromiseGeneratorFunction)(function* () {
            t().call(e), e.bubbleIsVisible() && (yield e.setBubbleVisible(!1), yield e.setBubbleVisible(!0));
          });
        }
        onLocationChange(e) {
          const t = this.workspaceLocation;
          super.onLocationChange(e), this.bubbleLocation && (e = I.difference(
            this.workspaceLocation,
            t
          ), this.bubbleLocation = I.sum(this.bubbleLocation, e)), e = this.getAnchorLocation();
          let s;
          (s = this.textInputBubble) == null || s.setAnchorLocation(e);
        }
        setText(e) {
          const t = this.text;
          k(new (L(m.BLOCK_CHANGE))(this.sourceBlock, "comment", null, t, e)), this.text = e;
          let s;
          (s = this.textInputBubble) == null || s.setText(this.text);
        }
        getText() {
          return this.text;
        }
        setBubbleSize(e) {
          this.bubbleSize = e;
          let t;
          (t = this.textInputBubble) == null || t.setSize(this.bubbleSize, !0);
        }
        getBubbleSize() {
          return this.bubbleSize;
        }
        setBubbleLocation(e) {
          this.bubbleLocation = e;
          let t;
          (t = this.textInputBubble) == null || t.moveDuringDrag(e);
        }
        getBubbleLocation() {
          return this.bubbleLocation;
        }
        saveState() {
          if (this.text) {
            const e = { text: this.text, pinned: this.bubbleIsVisible(), height: this.bubbleSize.height, width: this.bubbleSize.width }, t = this.getBubbleLocation();
            return t && (e.x = this.sourceBlock.workspace.RTL ? this.sourceBlock.workspace.getWidth() - (t.x + this.bubbleSize.width) : t.x, e.y = t.y), e;
          }
          return null;
        }
        loadState(e) {
          let t;
          this.text = (t = e.text) != null ? t : "";
          let s, o;
          this.bubbleSize = new D((s = e.width) != null ? s : Tg, (o = e.height) != null ? o : Eg);
          let i;
          this.bubbleVisiblity = (i = e.pinned) != null ? i : !1, this.setBubbleVisible(this.bubbleVisiblity);
          let r = e.x;
          const u = e.y;
          bt().then(() => {
            r && u && (r = this.sourceBlock.workspace.RTL ? this.sourceBlock.workspace.getWidth() - (r + this.bubbleSize.width) : r, this.setBubbleLocation(new I(r, u)));
          });
        }
        onClick() {
          super.onClick(), this.setBubbleVisible(!this.bubbleIsVisible());
        }
        isClickableInFlyout() {
          return !1;
        }
        onTextChange() {
          if (this.textInputBubble) {
            var e = this.textInputBubble.getText();
            this.text !== e && (k(new (L(m.BLOCK_CHANGE))(
              this.sourceBlock,
              "comment",
              null,
              this.text,
              e
            )), this.text = e);
          }
        }
        onSizeChange() {
          this.textInputBubble && (this.bubbleSize = this.textInputBubble.getSize());
        }
        onBubbleLocationChange() {
          this.textInputBubble && (this.bubbleLocation = this.textInputBubble.getRelativeToSurfaceXY());
        }
        bubbleIsVisible() {
          return this.bubbleVisiblity;
        }
        setBubbleVisible(e) {
          const t = this;
          return (0, $.asyncExecutePromiseGeneratorFunction)(function* () {
            t.bubbleVisiblity !== e && (t.bubbleVisiblity = e, yield bt(), !t.sourceBlock.rendered || t.sourceBlock.isInFlyout || t.sourceBlock.isInsertionMarker() || (e ? (t.sourceBlock.isEditable() ? t.showEditableBubble() : t.showNonEditableBubble(), t.applyColour()) : t.hideBubble(), k(new (L(m.BUBBLE_OPEN))(t.sourceBlock, e, "comment"))));
          });
        }
        getBubble() {
          return this.textInputBubble;
        }
        showEditableBubble() {
          this.createBubble();
          let e;
          (e = this.textInputBubble) == null || e.addTextChangeListener(() => this.onTextChange());
          let t;
          (t = this.textInputBubble) == null || t.addSizeChangeListener(() => this.onSizeChange());
        }
        showNonEditableBubble() {
          this.createBubble();
          let e;
          (e = this.textInputBubble) == null || e.setEditable(!1);
        }
        createBubble() {
          this.textInputBubble = new Gr(this.sourceBlock.workspace, this.getAnchorLocation(), this.getBubbleOwnerRect(), this), this.textInputBubble.setText(this.getText()), this.textInputBubble.setSize(this.bubbleSize, !0), this.bubbleLocation && this.textInputBubble.moveDuringDrag(this.bubbleLocation), this.textInputBubble.addTextChangeListener(() => this.onTextChange()), this.textInputBubble.addSizeChangeListener(() => this.onSizeChange()), this.textInputBubble.addLocationChangeListener(() => this.onBubbleLocationChange());
        }
        hideBubble() {
          let e;
          (e = this.textInputBubble) == null || e.dispose(), this.textInputBubble = null;
        }
        getAnchorLocation() {
          const e = Ta / 2;
          return I.sum(
            this.workspaceLocation,
            new I(e, e)
          );
        }
        getBubbleOwnerRect() {
          return this.sourceBlock.getBoundingRectangleWithoutChildren();
        }
      };
      dt.TYPE = $e.COMMENT, dt.WEIGHT = 3, Dc(dt.TYPE, dt);
      var bm = class {
        getFirstChild(e) {
          if (e instanceof n.MutatorIcon$$module$build$src$core$icons$mutator_icon && e.bubbleIsVisible() && n.getFocusManager$$module$build$src$core$focus_manager().getFocusedNode() === e) {
            let t, s;
            return (s = (t = e.getBubble()) == null ? void 0 : t.getWorkspace()) != null ? s : null;
          }
          if (e instanceof dt && e.bubbleIsVisible() && n.getFocusManager$$module$build$src$core$focus_manager().getFocusedNode() === e) {
            let t, s;
            return (s = (t = e.getBubble()) == null ? void 0 : t.getEditor()) != null ? s : null;
          }
          return null;
        }
        getParent(e) {
          return e.getSourceBlock();
        }
        getNextSibling(e) {
          return ct(e, 1);
        }
        getPreviousSibling(e) {
          return ct(e, -1);
        }
        isNavigable(e) {
          return e.canBeFocused();
        }
        isApplicable(e) {
          return e instanceof Vo;
        }
      }, Im = class {
        getFirstChild(e) {
          return e.view.getCommentBarButtons()[0];
        }
        getParent(e) {
          return e.workspace;
        }
        getNextSibling(e) {
          return ko(e, 1);
        }
        getPreviousSibling(e) {
          return ko(e, -1);
        }
        isNavigable(e) {
          return e.canBeFocused();
        }
        isApplicable(e) {
          return e instanceof jt;
        }
      }, fg = class {
        getFirstChild(e) {
          return e = e.getTopBlocks(!0), e.length ? e[0] : null;
        }
        getParent(e) {
          return null;
        }
        getNextSibling(e) {
          return null;
        }
        getPreviousSibling(e) {
          return null;
        }
        isNavigable(e) {
          return e.canBeFocused() && !e.isMutator;
        }
        isApplicable(e) {
          return e instanceof we;
        }
      }, Ea = class {
        constructor() {
          this.rules = [
            new gg(),
            new mg(),
            new _g(),
            new fg(),
            new bm(),
            new Im(),
            new Em(),
            new Tm(),
            new fm()
          ];
        }
        addNavigationPolicy(e) {
          this.rules.push(e);
        }
        get(e) {
          return this.rules.find((t) => t.isApplicable(e));
        }
        getFirstChild(e) {
          let t;
          const s = (t = this.get(e)) == null ? void 0 : t.getFirstChild(e);
          if (!s) return null;
          let o;
          return (o = this.get(s)) != null && o.isNavigable(s) ? s : this.getFirstChild(s) || this.getNextSibling(s);
        }
        getParent(e) {
          let t;
          const s = (t = this.get(e)) == null ? void 0 : t.getParent(e);
          if (!s) return null;
          let o;
          return (o = this.get(s)) != null && o.isNavigable(s) ? s : this.getParent(s);
        }
        getNextSibling(e) {
          let t;
          const s = (t = this.get(e)) == null ? void 0 : t.getNextSibling(e);
          if (!s) return null;
          let o;
          return (o = this.get(s)) != null && o.isNavigable(s) ? s : this.getNextSibling(s);
        }
        getPreviousSibling(e) {
          let t;
          const s = (t = this.get(e)) == null ? void 0 : t.getPreviousSibling(e);
          if (!s) return null;
          let o;
          return (o = this.get(s)) != null && o.isNavigable(s) ? s : this.getPreviousSibling(s);
        }
      }, bg = class extends Ea {
        constructor(e) {
          super(), this.rules.push(new dg(), new pg()), this.rules = this.rules.map((t) => new $g(t, e));
        }
      }, fa = class {
        constructor(e, t, s, o, i) {
          this.workspace = e, this.oldHostMetrics = this.corner_ = this.vScroll = this.hScroll = null, t = t === void 0 ? !0 : t, s = s === void 0 ? !0 : s;
          const r = t && s;
          t && (this.hScroll = new ue(e, !0, r, o, i)), s && (this.vScroll = new ue(e, !1, r, o, i)), r && (this.corner_ = b(g.RECT, {
            height: ue.scrollbarThickness,
            width: ue.scrollbarThickness,
            class: "blocklyScrollbarBackground"
          }), Pt(this.corner_, e.getBubbleCanvas()));
        }
        dispose() {
          G(this.corner_), this.oldHostMetrics = this.corner_ = null, this.hScroll && (this.hScroll.dispose(), this.hScroll = null), this.vScroll && (this.vScroll.dispose(), this.vScroll = null);
        }
        resize() {
          const e = this.workspace.getMetrics();
          if (e) {
            var t = !1, s = !1;
            if (this.oldHostMetrics && this.oldHostMetrics.viewWidth === e.viewWidth && this.oldHostMetrics.viewHeight === e.viewHeight && this.oldHostMetrics.absoluteTop === e.absoluteTop && this.oldHostMetrics.absoluteLeft === e.absoluteLeft ? (this.oldHostMetrics && this.oldHostMetrics.scrollWidth === e.scrollWidth && this.oldHostMetrics.viewLeft === e.viewLeft && this.oldHostMetrics.scrollLeft === e.scrollLeft || (t = !0), this.oldHostMetrics && this.oldHostMetrics.scrollHeight === e.scrollHeight && this.oldHostMetrics.viewTop === e.viewTop && this.oldHostMetrics.scrollTop === e.scrollTop || (s = !0)) : s = t = !0, t || s) {
              try {
                n.disable$$module$build$src$core$events$utils(), this.hScroll && t && this.hScroll.resize(e), this.vScroll && s && this.vScroll.resize(e);
              } finally {
                n.enable$$module$build$src$core$events$utils();
              }
              this.workspace.maybeFireViewportChangeEvent();
            }
            if (this.hScroll && this.vScroll) {
              if (!this.oldHostMetrics || this.oldHostMetrics.viewWidth !== e.viewWidth || this.oldHostMetrics.absoluteLeft !== e.absoluteLeft) {
                let o;
                (o = this.corner_) == null || o.setAttribute("x", String(this.vScroll.position.x));
              }
              if (!this.oldHostMetrics || this.oldHostMetrics.viewHeight !== e.viewHeight || this.oldHostMetrics.absoluteTop !== e.absoluteTop) {
                let o;
                (o = this.corner_) == null || o.setAttribute("y", String(this.hScroll.position.y));
              }
            }
            this.oldHostMetrics = e;
          }
        }
        canScrollHorizontally() {
          return !!this.hScroll;
        }
        canScrollVertically() {
          return !!this.vScroll;
        }
        setOrigin(e, t) {
          this.hScroll && this.hScroll.setOrigin(e, t), this.vScroll && this.vScroll.setOrigin(e, t);
        }
        set(e, t, s) {
          this.hScroll && this.hScroll.set(e, !1), this.vScroll && this.vScroll.set(t, !1), (s || s === void 0) && (e = {}, this.hScroll && (e.x = this.hScroll.getRatio_()), this.vScroll && (e.y = this.vScroll.getRatio_()), this.workspace.setMetrics(e));
        }
        setX(e) {
          this.hScroll && this.hScroll.set(e, !0);
        }
        setY(e) {
          this.vScroll && this.vScroll.set(e, !0);
        }
        setContainerVisible(e) {
          this.hScroll && this.hScroll.setContainerVisible(e), this.vScroll && this.vScroll.setContainerVisible(e);
        }
        isVisible() {
          let e = !1;
          return this.hScroll && (e = this.hScroll.isVisible()), this.vScroll && (e = e || this.vScroll.isVisible()), e;
        }
        setVisible(e) {
          this.hScroll && this.hScroll.setVisibleInternal(e), this.vScroll && this.vScroll.setVisibleInternal(e);
        }
        resizeContent(e) {
          this.hScroll && this.hScroll.resizeContentHorizontal(e), this.vScroll && this.vScroll.resizeContentVertical(e);
        }
        resizeView(e) {
          this.hScroll && this.hScroll.resizeViewHorizontal(e), this.vScroll && this.vScroll.resizeViewVertical(e);
        }
      }, jo = "sep", Ig = class {
        load(e, t) {
          return e = new zr(0, t.horizontalLayout ? "x" : "y"), new Ko(e, jo);
        }
        gapForItem(e, t) {
          let s;
          return (s = parseInt(String(e.gap))) != null ? s : t;
        }
        disposeItem(e) {
        }
        getType() {
          return jo;
        }
      };
      c(f.FLYOUT_INFLATER, jo, Ig);
      var Yr = class extends Xr {
        constructor(e) {
          super(), this.horizontalLayout = !1, this.boundEvents = [], this.reflowWrapper = null, this.inhibitReflowWrapper = !1, this.contents = [], this.autoClose = !0, this.visible = !1, this.containerVisible = !0, this.CORNER_RADIUS = 8, this.SCROLLBAR_MARGIN = 2.5, this.height_ = this.width_ = 0, this.dragAngleRange_ = 70, this.svgGroup_ = this.svgBackground_ = null, this.inflaters = /* @__PURE__ */ new Map(), e.setMetrics = this.setMetrics_.bind(this), this.workspace_ = new we(e), this.workspace_.setMetricsManager(new hg(this.workspace_, this)), this.workspace_.internalIsFlyout = !0, this.workspace_.setVisible(this.visible), this.workspace_.setNavigator(new bg(this)), this.id = Qe(), this.RTL = !!e.RTL, this.toolboxPosition_ = e.toolboxPosition, this.tabWidth_ = this.workspace_.getRenderer().getConstants().TAB_WIDTH, this.MARGIN = this.CORNER_RADIUS, this.GAP_X = this.MARGIN * 3, this.GAP_Y = this.MARGIN * 3;
        }
        createDom(e) {
          return this.svgGroup_ = b(e, { class: "blocklyFlyout" }), this.svgGroup_.style.display = "none", this.svgBackground_ = b(g.PATH, { class: "blocklyFlyoutBackground" }, this.svgGroup_), this.svgGroup_.appendChild(this.workspace_.createDom()), this.workspace_.getThemeManager().subscribe(
            this.svgBackground_,
            "flyoutBackgroundColour",
            "fill"
          ), this.workspace_.getThemeManager().subscribe(this.svgBackground_, "flyoutOpacity", "fill-opacity"), this.svgGroup_;
        }
        init(e) {
          this.targetWorkspace = e, this.workspace_.targetWorkspace = e, this.workspace_.scrollbar = new fa(this.workspace_, this.horizontalLayout, !this.horizontalLayout, "blocklyFlyoutScrollbar", this.SCROLLBAR_MARGIN), this.hide(), this.boundEvents.push(w(
            this.svgGroup_,
            "wheel",
            this,
            this.wheel_,
            !1,
            { passive: !1 }
          )), this.boundEvents.push(w(this.svgBackground_, "pointerdown", this, this.onMouseDown)), this.workspace_.getGesture = this.targetWorkspace.getGesture.bind(this.targetWorkspace), this.workspace_.setVariableMap(this.targetWorkspace.getVariableMap()), this.workspace_.createPotentialVariableMap(), e.getComponentManager().addComponent({
            component: this,
            weight: Q.ComponentWeight.FLYOUT_WEIGHT,
            capabilities: [Q.Capability.AUTOHIDEABLE, Q.Capability.DELETE_AREA, Q.Capability.DRAG_TARGET]
          });
        }
        dispose() {
          this.hide(), this.targetWorkspace.getComponentManager().removeComponent(this.id);
          for (const e of this.boundEvents) H(e);
          this.boundEvents.length = 0, this.workspace_ && (this.workspace_.getThemeManager().unsubscribe(this.svgBackground_), this.workspace_.dispose()), this.svgGroup_ && G(this.svgGroup_);
        }
        getWidth() {
          return this.width_;
        }
        getHeight() {
          return this.height_;
        }
        getFlyoutScale() {
          return this.targetWorkspace.scale;
        }
        getWorkspace() {
          return this.workspace_;
        }
        setAutoClose(e) {
          this.autoClose = e, this.targetWorkspace.recordDragTargets(), this.targetWorkspace.resizeContents();
        }
        autoHide(e) {
          !e && this.targetWorkspace.getFlyout(!0) === this && this.autoClose && this.hide();
        }
        getTargetWorkspace() {
          return this.targetWorkspace;
        }
        isVisible() {
          return this.visible;
        }
        setVisible(e) {
          const t = e !== this.isVisible();
          this.visible = e, t && (this.autoClose || this.targetWorkspace.recordDragTargets(), this.updateDisplay());
        }
        setContainerVisible(e) {
          const t = e !== this.containerVisible;
          this.containerVisible = e, t && this.updateDisplay();
        }
        getContents() {
          return this.contents;
        }
        setContents(e) {
          this.contents = e;
        }
        updateDisplay() {
          let e;
          e = this.containerVisible ? this.isVisible() : !1, this.svgGroup_ && (this.svgGroup_.style.display = e ? "block" : "none");
          let t;
          (t = this.workspace_.scrollbar) == null || t.setContainerVisible(e);
        }
        positionAt_(e, t, s, o) {
          let i;
          (i = this.svgGroup_) == null || i.setAttribute("width", `${e}`);
          let r;
          (r = this.svgGroup_) == null || r.setAttribute("height", `${t}`), this.workspace_.setCachedParentSvgSize(e, t), this.svgGroup_ && ao(this.svgGroup_, "translate(" + s + "px," + o + "px)"), (e = this.workspace_.scrollbar) && (e.setOrigin(s, o), e.resize(), e.hScroll && e.hScroll.setPosition(e.hScroll.position.x, e.hScroll.position.y), e.vScroll && e.vScroll.setPosition(e.vScroll.position.x, e.vScroll.position.y));
        }
        hide() {
          this.isVisible() && (this.setVisible(!1), this.reflowWrapper && (this.workspace_.removeChangeListener(this.reflowWrapper), this.reflowWrapper = null));
        }
        show(e) {
          this.workspace_.setResizesEnabled(!1), n.setRecordUndo$$module$build$src$core$events$utils(!1), this.hide(), this.clearOldBlocks(), typeof e == "string" && (e = this.getDynamicCategoryContents(e)), this.setVisible(!0), e = gi(e), e = this.createFlyoutInfo(e), cs(this.workspace_), this.setContents(e), this.layout_(e), this.horizontalLayout ? this.height_ = 0 : this.width_ = 0, this.reflow(), n.setRecordUndo$$module$build$src$core$events$utils(!0), this.workspace_.setResizesEnabled(!0), this.reflowWrapper = (t) => {
            this.inhibitReflowWrapper || t.type !== m.BLOCK_CHANGE && t.type !== m.BLOCK_FIELD_INTERMEDIATE_CHANGE || this.reflow();
          }, this.workspace_.addChangeListener(this.reflowWrapper);
        }
        createFlyoutInfo(e) {
          const t = [], s = this.horizontalLayout ? this.GAP_X : this.GAP_Y;
          for (const o of e) "custom" in o && (e = this.getDynamicCategoryContents(o.custom), e = gi(e), t.push(...this.createFlyoutInfo(e))), e = o.kind.toLowerCase(), (e = this.getInflaterForType(e)) && (t.push(e.load(o, this)), (e = e.gapForItem(o, s)) && t.push(new Ko(new zr(e, this.horizontalLayout ? "x" : "y"), jo)));
          return this.normalizeSeparators(t);
        }
        normalizeSeparators(e) {
          for (let t = e.length - 1; t > 0; t--) {
            const s = e[t].getType().toLowerCase(), o = e[t - 1].getType().toLowerCase();
            s === jo && o === jo && e.splice(t - 1, 1);
          }
          return e;
        }
        getDynamicCategoryContents(e) {
          if (e = this.workspace_.targetWorkspace.getToolboxCategoryCallback(e), typeof e != "function") throw TypeError("Couldn't find a callback function when opening a toolbox category.");
          return e(this.workspace_.targetWorkspace);
        }
        clearOldBlocks() {
          this.getContents().forEach((t) => {
            let s;
            (s = this.getInflaterForType(t.getType())) == null || s.disposeItem(t);
          });
          let e;
          (e = this.workspace_.getPotentialVariableMap()) == null || e.clear();
        }
        onMouseDown(e) {
          const t = this.targetWorkspace.getGesture(e);
          t && t.handleFlyoutStart(e, this);
        }
        isBlockCreatable(e) {
          return e.isEnabled() && !this.getTargetWorkspace().isReadOnly();
        }
        createBlock(e) {
          const t = this.targetWorkspace;
          if (!e.getSvgRoot()) throw Error("oldBlock is not rendered");
          var s = this.serializeBlock(e);
          return t.setResizesEnabled(!1), s = ks(s, t, { recordUndo: !0 }), this.positionNewBlock(e, s), t.hideChaff(), s;
        }
        reflow() {
          this.inhibitReflowWrapper = !0, this.reflowInternal_(), this.inhibitReflowWrapper = !1;
        }
        isScrollable() {
          return this.workspace_.scrollbar ? this.workspace_.scrollbar.isVisible() : !1;
        }
        serializeBlock(e) {
          return tt(e);
        }
        positionNewBlock(e, t) {
          const s = this.targetWorkspace;
          var o = s.getOriginOffsetInPixels(), i = this.workspace_.getOriginOffsetInPixels();
          e = e.getRelativeToSurfaceXY(), e.scale(this.workspace_.scale), i = I.sum(i, e), o = I.difference(i, o), o.scale(1 / s.scale), t.moveTo(new I(o.x, o.y));
        }
        getInflaterForType(e) {
          if (this.inflaters.has(e)) {
            var t;
            return (t = this.inflaters.get(e)) != null ? t : null;
          }
          return (t = He(
            f.FLYOUT_INFLATER,
            e
          )) ? (t = new t(), this.inflaters.set(e, t), t) : null;
        }
        getFocusableElement() {
          throw Error("Flyouts are not directly focusable.");
        }
        getFocusableTree() {
          throw Error("Flyouts are not directly focusable.");
        }
        onNodeFocus() {
        }
        onNodeBlur() {
        }
        canBeFocused() {
          return !1;
        }
        getRootFocusableNode() {
          throw Error("Flyouts are not directly focusable.");
        }
        getRestoredFocusableNode(e) {
          throw Error("Flyouts are not directly focusable.");
        }
        getNestedTrees() {
          throw Error("Flyouts are not directly focusable.");
        }
        lookUpFocusableNode(e) {
          throw Error("Flyouts are not directly focusable.");
        }
        onTreeFocus(e, t) {
        }
        onTreeBlur(e) {
          throw Error("Flyouts are not directly focusable.");
        }
      }, Sg = class {
        constructor() {
          this.isActive = !1, this.activeClassName = "blocklyKeyboardNavigation";
        }
        setIsActive(e = !0) {
          this.isActive = e, this.updateActiveVisualization();
        }
        getIsActive() {
          return this.isActive;
        }
        updateActiveVisualization() {
          this.isActive ? document.body.classList.add(this.activeClassName) : document.body.classList.remove(this.activeClassName);
        }
      }, Kr = new Sg(), Rg = class {
        constructor(e) {
          this.workspace = e, this.horizontalScrollEnabled = this.workspace.isMovableHorizontally(), this.verticalScrollEnabled = this.workspace.isMovableVertically(), this.startScrollXY_ = new I(e.scrollX, e.scrollY);
        }
        startDrag() {
        }
        endDrag(e) {
          this.drag(e);
        }
        drag(e) {
          if (e = I.sum(this.startScrollXY_, e), this.horizontalScrollEnabled && this.verticalScrollEnabled) this.workspace.scroll(
            e.x,
            e.y
          );
          else if (this.horizontalScrollEnabled) this.workspace.scroll(e.x, this.workspace.scrollY);
          else if (this.verticalScrollEnabled) this.workspace.scroll(this.workspace.scrollX, e.y);
          else throw new TypeError("Invalid state.");
        }
      }, Sm = 5, Rm = 6, jr = class {
        constructor(e, t) {
          this.creatorWorkspace = t, this.mouseDownXY = new I(0, 0), this.startWorkspace_ = this.targetBlock = this.startComment = this.startBlock = this.startIcon = this.startField = this.startBubble = null, this.hasExceededDragRadius = !1, this.boundEvents = [], this.workspaceDragger = this.dragger = null, this.dragging = !1, this.flyout = null, this.multiTouch = this.isEnding_ = this.gestureHasStarted = this.calledUpdateIsDragging = !1, this.cachedPoints = /* @__PURE__ */ new Map(), this.startDistance = this.previousScale = 0, this.currentDropdownOwner = this.isPinchZoomEnabled = null, this.mostRecentEvent = e, this.currentDragDeltaXY = new I(0, 0);
        }
        dispose() {
          K(), nc(), this.creatorWorkspace.clearGesture();
          for (const e of this.boundEvents) H(e);
          this.boundEvents.length = 0;
        }
        updateFromEvent(e) {
          const t = new I(e.clientX, e.clientY);
          this.updateDragDelta(t) && (this.updateIsDragging(e), Ze()), this.mostRecentEvent = e;
        }
        updateDragDelta(e) {
          return this.currentDragDeltaXY = I.difference(e, this.mouseDownXY), this.hasExceededDragRadius ? !1 : this.hasExceededDragRadius = I.magnitude(this.currentDragDeltaXY) > (this.flyout ? n.config$$module$build$src$core$config.flyoutDragRadius : n.config$$module$build$src$core$config.dragRadius);
        }
        updateIsDraggingFromFlyout() {
          let e;
          if (!this.targetBlock || (e = this.flyout) == null || !e.isBlockCreatable(this.targetBlock)) return !1;
          if (!this.flyout.targetWorkspace) throw Error(`Cannot update dragging from the flyout because the ' +
          'flyout's target workspace is undefined`);
          return this.startWorkspace_ = this.flyout.targetWorkspace, this.startWorkspace_.updateScreenCalculationsIfScrolled(), n.getGroup$$module$build$src$core$events$utils() || n.setGroup$$module$build$src$core$events$utils(!0), this.startBlock = null, this.targetBlock = this.flyout.createBlock(this.targetBlock), n.getFocusManager$$module$build$src$core$focus_manager().focusNode(this.targetBlock), !0;
        }
        updateIsDraggingWorkspace() {
          if (!this.startWorkspace_) throw Error("Cannot update dragging the workspace because the start workspace is undefined");
          (this.flyout ? this.flyout.isScrollable() : this.startWorkspace_ && this.startWorkspace_.isDraggable()) && (this.dragging = !0, this.workspaceDragger = new Rg(this.startWorkspace_), this.workspaceDragger.startDrag());
        }
        updateIsDragging(e) {
          if (!this.startWorkspace_) throw Error("Cannot update dragging because the start workspace is undefined");
          if (this.calledUpdateIsDragging) throw Error("updateIsDragging_ should only be called once per gesture.");
          this.calledUpdateIsDragging = !0, this.flyout && this.updateIsDraggingFromFlyout();
          const t = p();
          t && No(t) && t.isMovable() ? (this.dragging = !0, this.dragger = this.createDragger(t, this.startWorkspace_), this.dragger.onDragStart(e), this.dragger.onDrag(e, this.currentDragDeltaXY)) : this.updateIsDraggingWorkspace();
        }
        createDragger(e, t) {
          return new (Ee(f.BLOCK_DRAGGER, this.creatorWorkspace.options, !0))(e, t);
        }
        doStart(e) {
          if (!this.startWorkspace_) throw Error("Cannot start the touch gesture becauase the start workspace is undefined");
          this.isPinchZoomEnabled = this.startWorkspace_.options.zoomOptions && this.startWorkspace_.options.zoomOptions.pinch, Rs(e) ? this.cancel() : (this.gestureHasStarted = !0, Lo(), this.startWorkspace_.updateScreenCalculationsIfScrolled(), this.startWorkspace_.isMutator && this.startWorkspace_.resize(), this.currentDropdownOwner = xl(), this.startWorkspace_.hideChaff(!!this.flyout), this.startWorkspace_.markFocused(), this.mostRecentEvent = e, ic(), Ge(e) ? this.handleRightClick(e) : (e.type.toLowerCase() === "pointerdown" && e.pointerType !== "mouse" && si(e, this), this.mouseDownXY = new I(e.clientX, e.clientY), this.bindMouseEvents(e), this.isEnding_ || this.handleTouchStart(e)));
        }
        bindMouseEvents(e) {
          this.boundEvents.push(w(
            document,
            "pointerdown",
            null,
            this.handleStart.bind(this),
            !0
          )), this.boundEvents.push(w(document, "pointermove", null, this.handleMove.bind(this), !0)), this.boundEvents.push(w(document, "pointerup", null, this.handleUp.bind(this), !0)), this.boundEvents.push(w(document, "pointercancel", null, this.handleUp.bind(this), !0)), e.preventDefault(), e.stopPropagation();
        }
        handleStart(e) {
          this.isDragging() || (this.handleTouchStart(e), this.isMultiTouch() && Ze());
        }
        handleMove(e) {
          this.isDragging() && Ss(e) || !this.isMultiTouch() ? (this.updateFromEvent(e), this.workspaceDragger ? this.workspaceDragger.drag(this.currentDragDeltaXY) : this.dragger && this.dragger.onDrag(this.mostRecentEvent, this.currentDragDeltaXY), e.preventDefault(), e.stopPropagation()) : this.isMultiTouch() && (this.handleTouchMove(e), Ze());
        }
        handleUp(e) {
          if (this.isDragging() || this.handleTouchEnd(e), !this.isMultiTouch() || this.isDragging()) {
            if (!Ss(e)) return;
            if (this.updateFromEvent(e), Ze(), this.isEnding_) {
              console.log("Trying to end a gesture recursively.");
              return;
            }
            this.isEnding_ = !0, this.dragger ? (Kr.setIsActive(!1), this.dragger.onDragEnd(e, this.currentDragDeltaXY)) : this.workspaceDragger ? (Kr.setIsActive(!1), this.workspaceDragger.endDrag(this.currentDragDeltaXY)) : this.isBubbleClick() || this.isCommentClick() || (this.isFieldClick() ? this.doFieldClick() : this.isIconClick() ? this.doIconClick() : this.isBlockClick() ? this.doBlockClick() : this.isWorkspaceClick() && this.doWorkspaceClick(e));
          }
          e.preventDefault(), e.stopPropagation(), this.dispose();
        }
        handleTouchStart(e) {
          var t = Dt(e);
          this.cachedPoints.set(t, this.getTouchPoint(e));
          var s = Array.from(this.cachedPoints.keys());
          s.length === 2 && (t = this.cachedPoints.get(s[0]), s = this.cachedPoints.get(s[1]), this.startDistance = I.distance(t, s), this.multiTouch = !0, e.preventDefault());
        }
        handleTouchMove(e) {
          const t = Dt(e);
          this.cachedPoints.set(t, this.getTouchPoint(e)), this.isPinchZoomEnabled && this.cachedPoints.size === 2 ? this.handlePinch(e) : (this.updateFromEvent(e), this.workspaceDragger ? this.workspaceDragger.drag(this.currentDragDeltaXY) : this.dragger && this.dragger.onDrag(this.mostRecentEvent, this.currentDragDeltaXY), e.preventDefault(), e.stopPropagation());
        }
        handlePinch(e) {
          var t = Array.from(this.cachedPoints.keys()), s = this.cachedPoints.get(t[0]);
          if (t = this.cachedPoints.get(t[1]), s = I.distance(s, t) / this.startDistance, this.previousScale > 0 && this.previousScale < 1 / 0) {
            if (t = s - this.previousScale, t = t > 0 ? t * Sm : t * Rm, !this.startWorkspace_) throw Error("Cannot handle a pinch because the start workspace is undefined");
            const o = this.startWorkspace_, i = ts(e, o.getParentSvg(), o.getInverseScreenCTM());
            o.zoom(i.x, i.y, t);
          }
          this.previousScale = s, e.preventDefault();
        }
        handleTouchEnd(e) {
          e = Dt(e), this.cachedPoints.has(e) && this.cachedPoints.delete(e), this.cachedPoints.size < 2 && (this.cachedPoints.clear(), this.previousScale = 0);
        }
        getTouchPoint(e) {
          return this.startWorkspace_ ? new I(e.pageX, e.pageY) : null;
        }
        isMultiTouch() {
          return this.multiTouch;
        }
        cancel() {
          this.isEnding_ || (Ze(), this.dragger ? this.dragger.onDragEnd(this.mostRecentEvent, this.currentDragDeltaXY) : this.workspaceDragger && this.workspaceDragger.endDrag(this.currentDragDeltaXY), this.dispose());
        }
        handleRightClick(e) {
          const t = n.getFocusManager$$module$build$src$core$focus_manager().getFocusedNode();
          if (Pc(t)) {
            let s;
            (s = this.startWorkspace_) == null || s.hideChaff(!!this.flyout), t.showContextMenu(e);
          }
          e.preventDefault(), e.stopPropagation(), Kr.setIsActive(!1), this.dispose();
        }
        handleWsStart(e, t) {
          if (this.gestureHasStarted) throw Error("Tried to call gesture.handleWsStart, but the gesture had already been started.");
          this.setStartWorkspace(t), this.mostRecentEvent = e, this.targetBlock || this.startBubble || this.startComment || this.startIcon || n.getFocusManager$$module$build$src$core$focus_manager().focusNode(t), this.doStart(e);
        }
        fireWorkspaceClick(e) {
          k(new (L(m.CLICK))(null, e.id, "workspace"));
        }
        handleFlyoutStart(e, t) {
          if (this.gestureHasStarted) throw Error("Tried to call gesture.handleFlyoutStart, but the gesture had already been started.");
          this.setStartFlyout(t), this.handleWsStart(e, t.getWorkspace());
        }
        handleBlockStart(e, t) {
          if (this.gestureHasStarted) throw Error("Tried to call gesture.handleBlockStart, but the gesture had already been started.");
          this.setStartBlock(t), this.mostRecentEvent = e;
        }
        handleBubbleStart(e, t) {
          if (this.gestureHasStarted) throw Error("Tried to call gesture.handleBubbleStart, but the gesture had already been started.");
          this.setStartBubble(t), this.mostRecentEvent = e;
        }
        handleCommentStart(e, t) {
          if (this.gestureHasStarted) throw Error("Tried to call gesture.handleCommentStart, but the gesture had already been started.");
          this.setStartComment(t), this.mostRecentEvent = e;
        }
        doFieldClick() {
          if (!this.startField) throw Error("Cannot do a field click because the start field is undefined");
          this.currentDropdownOwner !== this.startField && this.startField.showEditor(this.mostRecentEvent);
        }
        doIconClick() {
          if (!this.startIcon) throw Error("Cannot do an icon click because the start icon is undefined");
          this.startIcon.onClick();
        }
        doBlockClick() {
          if (this.flyout && this.flyout.autoClose) {
            if (!this.targetBlock) throw Error("Cannot do a block click because the target block is undefined");
            if (this.flyout.isBlockCreatable(this.targetBlock)) {
              n.getGroup$$module$build$src$core$events$utils() || n.setGroup$$module$build$src$core$events$utils(!0);
              var e = this.flyout.createBlock(this.targetBlock);
              e.snapToGrid(), e.bumpNeighbours(), n.getFocusManager$$module$build$src$core$focus_manager().focusNode(e);
            }
          } else {
            if (!this.startWorkspace_) throw Error("Cannot do a block click because the start workspace is undefined");
            e = new (L(m.CLICK))(this.startBlock, this.startWorkspace_.id, "block"), k(e);
          }
          n.setGroup$$module$build$src$core$events$utils(!1);
        }
        doWorkspaceClick(e) {
          this.fireWorkspaceClick(this.startWorkspace_ || this.creatorWorkspace);
        }
        setStartField(e) {
          if (this.gestureHasStarted) throw Error("Tried to call gesture.setStartField, but the gesture had already been started.");
          this.startField || (this.startField = e);
        }
        setStartIcon(e) {
          if (this.gestureHasStarted) throw Error("Tried to call gesture.setStartIcon, but the gesture had already been started.");
          this.startIcon || (this.startIcon = e);
        }
        setStartBubble(e) {
          this.startBubble || (this.startBubble = e);
        }
        setStartComment(e) {
          this.startComment || (this.startComment = e);
        }
        setStartBlock(e) {
          this.startBlock || this.startBubble || this.startIcon || (this.startBlock = e, e.isInFlyout && e !== e.getRootBlock() ? this.setTargetBlock(e.getRootBlock()) : this.setTargetBlock(e));
        }
        setTargetBlock(e) {
          e.isShadow() ? this.setTargetBlock(e.getParent()) : (this.targetBlock = e, n.getFocusManager$$module$build$src$core$focus_manager().focusNode(this.targetBlock), this.targetBlock.bringToFront());
        }
        setStartWorkspace(e) {
          this.startWorkspace_ || (this.startWorkspace_ = e);
        }
        setStartFlyout(e) {
          this.flyout || (this.flyout = e);
        }
        isBubbleClick() {
          return !!this.startBubble && !this.hasExceededDragRadius;
        }
        isCommentClick() {
          return !!this.startComment && !this.hasExceededDragRadius;
        }
        isBlockClick() {
          return !!this.startBlock && !this.hasExceededDragRadius && !this.isFieldClick() && !this.isIconClick();
        }
        isFieldClick() {
          return this.startField ? this.startField.isClickable() && !this.hasExceededDragRadius && (!this.flyout || this.startField.isClickableInFlyout(this.flyout.autoClose)) : !1;
        }
        isIconClick() {
          if (!this.startIcon) return !1;
          const e = !this.flyout || !this.startIcon.isClickableInFlyout || this.startIcon.isClickableInFlyout(this.flyout.autoClose);
          return !this.hasExceededDragRadius && e;
        }
        isWorkspaceClick() {
          return !this.startBlock && !this.startBubble && !this.startField && !this.hasExceededDragRadius;
        }
        getCurrentDragger() {
          let e, t;
          return (t = (e = this.workspaceDragger) != null ? e : this.dragger) != null ? t : null;
        }
        isDragging() {
          return this.dragging;
        }
        hasStarted() {
          return this.gestureHasStarted;
        }
        static inProgress() {
          const e = ns();
          for (let t = 0, s; s = e[t]; t++) if (s.currentGesture_) return !0;
          return !1;
        }
      }, ba = class {
        constructor(e, t) {
          this.pattern = e, this.scale = 1;
          let s;
          this.spacing = (s = t.spacing) != null ? s : 0;
          let o;
          this.length = (o = t.length) != null ? o : 1, this.line2 = (this.line1 = e.firstChild) && this.line1.nextSibling;
          let i;
          this.snapToGrid = (i = t.snap) != null ? i : !1;
        }
        setSpacing(e) {
          this.spacing = e, this.update(this.scale);
        }
        getSpacing() {
          return this.spacing;
        }
        setLength(e) {
          this.length = e, this.update(this.scale);
        }
        getLength() {
          return this.length;
        }
        setSnapToGrid(e) {
          this.snapToGrid = e;
        }
        shouldSnap() {
          return this.snapToGrid;
        }
        getPatternId() {
          return this.pattern.id;
        }
        update(e) {
          this.scale = e;
          var t = this.spacing * e;
          this.pattern.setAttribute("width", `${t}`), this.pattern.setAttribute("height", `${t}`), t = Math.floor(this.spacing / 2) + 0.5;
          let s = t - this.length / 2, o = t + this.length / 2;
          t *= e, s *= e, o *= e, this.setLineAttributes(this.line1, e, s, o, t, t), this.setLineAttributes(this.line2, e, t, t, s, o);
        }
        setLineAttributes(e, t, s, o, i, r) {
          e && (e.setAttribute("stroke-width", `${t}`), e.setAttribute("x1", `${s}`), e.setAttribute("y1", `${i}`), e.setAttribute("x2", `${o}`), e.setAttribute("y2", `${r}`));
        }
        moveTo(e, t) {
          this.pattern.setAttribute(
            "x",
            `${e}`
          ), this.pattern.setAttribute("y", `${t}`);
        }
        alignXY(e) {
          var t = this.getSpacing();
          const s = t / 2, o = Math.round(Math.round((e.x - s) / t) * t + s);
          return t = Math.round(Math.round((e.y - s) / t) * t + s), o === e.x && t === e.y ? e : new I(o, t);
        }
        static createDom(e, t, s, o) {
          e = b(g.PATTERN, { id: "blocklyGridPattern" + e, patternUnits: "userSpaceOnUse" }, s);
          let i, r;
          if (((i = t.length) != null ? i : 1) > 0 && ((r = t.spacing) != null ? r : 0) > 0) {
            b(g.LINE, { stroke: t.colour }, e);
            let u;
            (u = t.length) != null && u && b(g.LINE, { stroke: t.colour }, e);
          } else b(g.LINE, {}, e);
          return o && o.style.setProperty("--blocklyGridPattern", `url(#${e.id})`), e;
        }
      }, Om = class {
        constructor(e) {
          this.workspace = e, this.layers = /* @__PURE__ */ new Map(), (e = e.getInjectionDiv()) && (this.dragLayer = this.createDragLayer(e), this.animationLayer = this.createAnimationLayer(e)), e = this.createLayer(Ks), R(e, "blocklyBlockCanvas"), e = this.createLayer(Go), R(e, "blocklyBubbleCanvas");
        }
        createDragLayer(e) {
          const t = b(
            g.SVG,
            { class: "blocklyBlockDragSurface", xmlns: wi, "xmlns:html": xs, "xmlns:xlink": Xe, version: "1.1" }
          );
          return e.append(t), b(g.G, {}, t);
        }
        createAnimationLayer(e) {
          const t = b(g.SVG, {
            class: "blocklyAnimationLayer",
            xmlns: wi,
            "xmlns:html": xs,
            "xmlns:xlink": Xe,
            version: "1.1"
          });
          return e.append(t), b(g.G, {}, t);
        }
        appendToAnimationLayer(e) {
          let t;
          const s = (t = this.dragLayer) == null ? void 0 : t.getAttribute("transform");
          if (s) {
            let i;
            (i = this.animationLayer) == null || i.setAttribute("transform", s);
          }
          let o;
          (o = this.animationLayer) == null || o.appendChild(e.getSvgRoot());
        }
        translateLayers(e, t) {
          e = `translate(${e.x}, ${e.y}) scale(${t})`;
          let s;
          (s = this.dragLayer) == null || s.setAttribute("transform", e);
          for (const [, o] of this.layers) o.setAttribute("transform", e);
        }
        moveToDragLayer(e, t = !0) {
          let s;
          (s = this.dragLayer) == null || s.appendChild(e.getSvgRoot()), t && e.canBeFocused() && n.getFocusManager$$module$build$src$core$focus_manager().focusNode(e);
        }
        moveOffDragLayer(e, t, s = !0) {
          this.append(e, t), s && e.canBeFocused() && n.getFocusManager$$module$build$src$core$focus_manager().focusNode(e);
        }
        append(e, t) {
          this.layers.has(t) || this.createLayer(t), e = e.getSvgRoot();
          let s;
          if (((s = this.layers.get(t)) == null ? void 0 : s.lastChild) !== e) {
            let o;
            (o = this.layers.get(t)) == null || o.appendChild(e);
          }
        }
        createLayer(e) {
          const t = this.workspace.getSvgGroup(), s = b(g.G, {});
          let o = !1;
          const i = [...this.layers].sort((r, u) => r[0] - u[0]);
          for (const [r, u] of i) if (e < r) {
            t.insertBefore(s, u), o = !0;
            break;
          }
          return o || t.appendChild(s), this.layers.set(e, s), s;
        }
        hasLayer(e) {
          return e === this.dragLayer || new Set(this.layers.values()).has(e);
        }
        getBlockLayer() {
          return this.layers.get(Ks);
        }
        getBubbleLayer() {
          return this.layers.get(Go);
        }
        getDragLayer() {
          return this.dragLayer;
        }
      }, Og = class {
        constructor() {
          this.curNode = this.colour = null, this.type = "marker";
        }
        getCurNode() {
          return this.curNode;
        }
        setCurNode(e) {
          this.curNode = e;
        }
        dispose() {
          this.curNode = null;
        }
        getSourceBlockFromNode(e) {
          return e instanceof z ? e : e instanceof X || e instanceof Re || e instanceof Vo ? e.getSourceBlock() : null;
        }
        getSourceBlock() {
          return this.getSourceBlockFromNode(this.getCurNode());
        }
      }, Ia = class extends Og {
        constructor(e) {
          super(), this.workspace = e, this.type = "cursor", this.potentialNodes = null;
        }
        next() {
          var e = this.getCurNode();
          return e ? ((e = this.getNextNode(
            e,
            (t) => {
              let s;
              return t instanceof z && !((s = t.outputConnection) != null && s.targetBlock()) || t instanceof jt;
            },
            !0
          )) && this.setCurNode(e), e) : null;
        }
        in() {
          var e = this.getCurNode();
          return e ? ((e = this.getNextNode(e, () => !0, !0)) && this.setCurNode(e), e) : null;
        }
        prev() {
          var e = this.getCurNode();
          return e ? ((e = this.getPreviousNode(e, (t) => {
            let s;
            return t instanceof z && !((s = t.outputConnection) != null && s.targetBlock()) || t instanceof jt;
          }, !0)) && this.setCurNode(e), e) : null;
        }
        out() {
          var e = this.getCurNode();
          return e ? ((e = this.getPreviousNode(e, () => !0, !0)) && this.setCurNode(e), e) : null;
        }
        atEndOfLine() {
          var e = this.getCurNode();
          if (!e) return !1;
          const t = this.getNextNode(e, () => !0, !0);
          return e = this.getNextNode(e, (s) => {
            let o;
            return s instanceof z && !((o = s.outputConnection) != null && o.targetBlock());
          }, !0), t === e;
        }
        getNextNodeImpl(e, t, s = /* @__PURE__ */ new Set()) {
          if (!e || s.has(e)) return null;
          let o = this.workspace.getNavigator().getFirstChild(e) || this.workspace.getNavigator().getNextSibling(e);
          for (var i = e; i && !o && (i = this.workspace.getNavigator().getParent(i), !!i); )
            o = this.workspace.getNavigator().getNextSibling(i);
          return t(o) ? o : o ? (s.add(e), this.getNextNodeImpl(o, t, s)) : null;
        }
        getNextNode(e, t, s) {
          return !e || !s && this.getLastNode() === e ? null : this.getNextNodeImpl(e, t);
        }
        getPreviousNodeImpl(e, t, s = /* @__PURE__ */ new Set()) {
          if (!e || s.has(e)) return null;
          const o = this.getRightMostChild(this.workspace.getNavigator().getPreviousSibling(e), e) || this.workspace.getNavigator().getParent(e);
          return t(o) ? o : o ? (s.add(e), this.getPreviousNodeImpl(
            o,
            t,
            s
          )) : null;
        }
        getPreviousNode(e, t, s) {
          return !e || !s && this.getFirstNode() === e ? null : this.getPreviousNodeImpl(e, t);
        }
        getRightMostChild(e, t) {
          if (!e) return e;
          let s = this.workspace.getNavigator().getFirstChild(e);
          if (!s || s === t) return e;
          for (e = s; e && e !== t; e = this.workspace.getNavigator().getNextSibling(s)) s = e;
          return this.getRightMostChild(s, t);
        }
        preDelete(e) {
          var t = this.getCurNode();
          t = t ? [t] : [];
          var s;
          let o, i;
          const r = (i = (s = e.previousConnection) == null ? void 0 : s.targetConnection) != null ? i : (o = e.outputConnection) == null ? void 0 : o.targetConnection;
          r && t.push(r), (s = e.getNextBlock()) && t.push(s), (e = e.getParent()) && t.push(e), t.push(this.workspace), this.potentialNodes = t;
        }
        postDelete() {
          const e = this.potentialNodes;
          if (this.potentialNodes = null, !e) throw Error("must call preDelete first");
          for (const t of e) {
            let s;
            if ((s = this.getSourceBlockFromNode(t)) == null || !s.disposed) {
              this.setCurNode(t);
              return;
            }
          }
          throw Error("no valid nodes in this.potentialNodes");
        }
        getCurNode() {
          return n.getFocusManager$$module$build$src$core$focus_manager().getFocusedNode();
        }
        setCurNode(e) {
          n.getFocusManager$$module$build$src$core$focus_manager().focusNode(e);
        }
        getFirstNode() {
          return this.workspace.getNavigator().getFirstChild(this.workspace);
        }
        getLastNode() {
          const e = this.getFirstNode();
          return this.getPreviousNode(e, () => !0, !0);
        }
      };
      c(f.CURSOR, We, Ia);
      var Sa = class {
        constructor(e) {
          this.workspace = e, this.markers = /* @__PURE__ */ new Map(), this.cursor = new Ia(this.workspace);
        }
        registerMarker(e, t) {
          this.markers.has(e) && this.unregisterMarker(e), this.markers.set(e, t);
        }
        unregisterMarker(e) {
          const t = this.markers.get(e);
          if (t) t.dispose(), this.markers.delete(e);
          else throw Error("Marker with ID " + e + " does not exist. Can only unregister markers that exist.");
        }
        getCursor() {
          return this.cursor;
        }
        getMarker(e) {
          return this.markers.get(e) || null;
        }
        setCursor(e) {
          this.cursor = e;
        }
        dispose() {
          const e = Object.keys(this.markers);
          for (let t = 0, s; s = e[t]; t++) this.unregisterMarker(s);
          this.markers.clear(), this.cursor.dispose();
        }
      };
      Sa.LOCAL_MARKER = "local_marker_1";
      var Es = {};
      Es.CommentIcon = dt, Es.Icon = Vo, Es.IconType = $e, Es.MutatorIcon = n.MutatorIcon$$module$build$src$core$icons$mutator_icon, Es.WarningIcon = vt, Es.exceptions = ig, Es.registry = ma, n.Names$$module$build$src$core$names = class {
        constructor(e, t) {
          this.db = /* @__PURE__ */ new Map(), this.dbReverse = /* @__PURE__ */ new Set(), this.variableMap = null, this.variablePrefix = t || "", this.reservedWords = new Set(e ? e.split(",") : []);
        }
        reset() {
          this.db.clear(), this.dbReverse.clear(), this.variableMap = null;
        }
        setVariableMap(e) {
          this.variableMap = e;
        }
        getNameForUserVariable(e) {
          return this.variableMap ? (e = this.variableMap.getVariableById(e)) ? e.getName() : null : (console.warn(`Deprecated call to Names.prototype.getName without defining a variable map. To fix, add the following code in your generator's init() function:
Blockly.YourGeneratorName.nameDB_.setVariableMap(workspace.getVariableMap());`), null);
        }
        populateVariables(e) {
          e = n.allUsedVarModels$$module$build$src$core$variables(e);
          for (let t = 0; t < e.length; t++) this.getName(e[t].getId(), n.NameType$$module$build$src$core$names.VARIABLE);
        }
        populateProcedures(e) {
          throw Error("The implementation of populateProcedures should be monkey-patched in by blockly.ts");
        }
        getName(e, t) {
          let s = e;
          t === n.NameType$$module$build$src$core$names.VARIABLE && (e = this.getNameForUserVariable(e)) && (s = e), e = s.toLowerCase();
          const o = t === n.NameType$$module$build$src$core$names.VARIABLE || t === n.NameType$$module$build$src$core$names.DEVELOPER_VARIABLE ? this.variablePrefix : "";
          this.db.has(t) || this.db.set(t, /* @__PURE__ */ new Map());
          const i = this.db.get(t);
          return i.has(e) ? o + i.get(e) : (t = this.getDistinctName(s, t), i.set(e, t.substr(o.length)), t);
        }
        getUserNames(e) {
          let t;
          return (e = (t = this.db.get(e)) == null ? void 0 : t.keys()) ? Array.from(e) : [];
        }
        getDistinctName(e, t) {
          e = this.safeName(e);
          let s = null, o, i;
          for (; this.dbReverse.has(e + ((o = s) != null ? o : "")) || this.reservedWords.has(e + ((i = s) != null ? i : "")); ) s = s ? s + 1 : 2;
          let r;
          return e += (r = s) != null ? r : "", this.dbReverse.add(e), (t === n.NameType$$module$build$src$core$names.VARIABLE || t === n.NameType$$module$build$src$core$names.DEVELOPER_VARIABLE ? this.variablePrefix : "") + e;
        }
        safeName(e) {
          return e ? (e = encodeURI(e.replace(/ /g, "_")).replace(/[^\w]/g, "_"), "0123456789".includes(e[0]) && (e = "my_" + e)) : e = n.Msg$$module$build$src$core$msg.UNNAMED_KEY || "unnamed", e;
        }
        static equals(e, t) {
          return e.toLowerCase() === t.toLowerCase();
        }
      }, (function(e) {
        e = e.NameType || (e.NameType = {}), e.DEVELOPER_VARIABLE = "DEVELOPER_VARIABLE", e.VARIABLE = "VARIABLE", e.PROCEDURE = "PROCEDURE";
      })(n.Names$$module$build$src$core$names || (n.Names$$module$build$src$core$names = {})), n.NameType$$module$build$src$core$names = n.Names$$module$build$src$core$names.NameType, n.Names$$module$build$src$core$names.DEVELOPER_VARIABLE_TYPE = n.NameType$$module$build$src$core$names.DEVELOPER_VARIABLE, n.NameType$$module$build$src$core$names, n.Names$$module$build$src$core$names;
      var Cg = class extends Map {
        constructor() {
          super();
        }
        set(e, t) {
          return this.get(e) === t ? this : (super.set(e, t), Qn(t) && t.startPublishing(), this);
        }
        delete(e) {
          const t = this.get(e);
          return e = super.delete(e), e && (Qn(t) && t.stopPublishing(), e);
        }
        clear() {
          if (this.size) for (const e of this.keys()) this.delete(e);
        }
        add(e) {
          return this.set(
            e.getId(),
            e
          );
        }
        getProcedures() {
          return [...this.values()];
        }
      }, Jr, Ne;
      Jr = "PROCEDURE", n.DEFAULT_ARG$$module$build$src$core$procedures = "x", Ne = { CATEGORY_NAME: Jr, DEFAULT_ARG: n.DEFAULT_ARG$$module$build$src$core$procedures }, Ne.ObservableProcedureMap = Cg, Ne.allProcedures = vi, Ne.findLegalName = n.findLegalName$$module$build$src$core$procedures, Ne.flyoutCategory = Fc, Ne.getCallers = Gc, Ne.getDefinition = n.getDefinition$$module$build$src$core$procedures, Ne.internalFlyoutCategory = er, Ne.isNameUsed = xc, Ne.isProcedureBlock = hs, Ne.mutateCallers = n.mutateCallers$$module$build$src$core$procedures, Ne.mutatorOpenListener = Hc, Ne.rename = n.rename$$module$build$src$core$procedures;
      var Cm = class {
        constructor() {
          this.NONE = 0, this.FIELD = 1, this.HAT = 2, this.ICON = 4, this.SPACER = 8, this.BETWEEN_ROW_SPACER = 16, this.IN_ROW_SPACER = 32, this.EXTERNAL_VALUE_INPUT = 64, this.INPUT = 128, this.INLINE_INPUT = 256, this.STATEMENT_INPUT = 512, this.CONNECTION = 1024, this.PREVIOUS_CONNECTION = 2048, this.NEXT_CONNECTION = 4096, this.OUTPUT_CONNECTION = 8192, this.CORNER = 16384, this.LEFT_SQUARE_CORNER = 32768, this.LEFT_ROUND_CORNER = 65536, this.RIGHT_SQUARE_CORNER = 131072, this.RIGHT_ROUND_CORNER = 262144, this.JAGGED_EDGE = 524288, this.ROW = 1048576, this.TOP_ROW = 2097152, this.BOTTOM_ROW = 4194304, this.INPUT_ROW = 8388608, this.LEFT_CORNER = this.LEFT_SQUARE_CORNER | this.LEFT_ROUND_CORNER, this.RIGHT_CORNER = this.RIGHT_SQUARE_CORNER | this.RIGHT_ROUND_CORNER, this.nextTypeValue_ = 16777216;
        }
        getType(e) {
          return Object.prototype.hasOwnProperty.call(this, e) || (this[e] = this.nextTypeValue_, this.nextTypeValue_ <<= 1), this[e];
        }
        isField(e) {
          return (e.type & this.FIELD) >= 1;
        }
        isHat(e) {
          return (e.type & this.HAT) >= 1;
        }
        isIcon(e) {
          return (e.type & this.ICON) >= 1;
        }
        isSpacer(e) {
          return (e.type & this.SPACER) >= 1;
        }
        isInRowSpacer(e) {
          return (e.type & this.IN_ROW_SPACER) >= 1;
        }
        isSpacerRow(e) {
          return (e.type & this.BETWEEN_ROW_SPACER) >= 1;
        }
        isInput(e) {
          return (e.type & this.INPUT) >= 1;
        }
        isExternalInput(e) {
          return (e.type & this.EXTERNAL_VALUE_INPUT) >= 1;
        }
        isInlineInput(e) {
          return (e.type & this.INLINE_INPUT) >= 1;
        }
        isStatementInput(e) {
          return (e.type & this.STATEMENT_INPUT) >= 1;
        }
        isPreviousConnection(e) {
          return (e.type & this.PREVIOUS_CONNECTION) >= 1;
        }
        isNextConnection(e) {
          return (e.type & this.NEXT_CONNECTION) >= 1;
        }
        isPreviousOrNextConnection(e) {
          return this.isPreviousConnection(e) || this.isNextConnection(e);
        }
        isRoundCorner(e) {
          return (e.type & this.LEFT_ROUND_CORNER) >= 1 || (e.type & this.RIGHT_ROUND_CORNER) >= 1;
        }
        isLeftRoundedCorner(e) {
          return this.isRoundCorner(e) && (e.type & this.LEFT_ROUND_CORNER) >= 1;
        }
        isRightRoundedCorner(e) {
          return this.isRoundCorner(e) && (e.type & this.RIGHT_ROUND_CORNER) >= 1;
        }
        isLeftSquareCorner(e) {
          return (e.type & this.LEFT_SQUARE_CORNER) >= 1;
        }
        isRightSquareCorner(e) {
          return (e.type & this.RIGHT_SQUARE_CORNER) >= 1;
        }
        isCorner(e) {
          return (e.type & this.CORNER) >= 1;
        }
        isJaggedEdge(e) {
          return (e.type & this.JAGGED_EDGE) >= 1;
        }
        isRow(e) {
          return (e.type & this.ROW) >= 1;
        }
        isBetweenRowSpacer(e) {
          return (e.type & this.BETWEEN_ROW_SPACER) >= 1;
        }
        isTopRow(e) {
          return (e.type & this.TOP_ROW) >= 1;
        }
        isBottomRow(e) {
          return (e.type & this.BOTTOM_ROW) >= 1;
        }
        isTopOrBottomRow(e) {
          return this.isTopRow(e) || this.isBottomRow(e);
        }
        isInputRow(e) {
          return (e.type & this.INPUT_ROW) >= 1;
        }
      }, d = new Cm(), Lt = class {
        constructor(e) {
          this.centerline = this.xPos = this.height = this.width = 0, this.constants_ = e, this.type = d.NONE, this.notchOffset = this.constants_.NOTCH_OFFSET_LEFT;
        }
      }, Zi = class {
        constructor(e) {
          this.elements = [], this.xPos = this.yPos = this.widthWithConnectedBlocks = this.minWidth = this.minHeight = this.width = this.height = 0, this.hasStatement = this.hasExternalInput = !1, this.statementEdge = 0, this.hasJaggedEdge = this.hasDummyInput = this.hasInlineInput = !1, this.align = null, this.constants_ = e, this.type = d.ROW, this.notchOffset = this.constants_.NOTCH_OFFSET_LEFT;
        }
        getLastInput() {
          for (let e = this.elements.length - 1; e >= 0; e--) {
            const t = this.elements[e];
            if (d.isInput(t)) return t;
          }
          return null;
        }
        measure() {
          throw Error("Unexpected attempt to measure a base Row.");
        }
        startsWithElemSpacer() {
          return !0;
        }
        endsWithElemSpacer() {
          return !0;
        }
        getFirstSpacer() {
          for (let e = 0; e < this.elements.length; e++) {
            const t = this.elements[e];
            if (d.isInRowSpacer(t)) return t;
          }
          return null;
        }
        getLastSpacer() {
          for (let e = this.elements.length - 1; e >= 0; e--) {
            const t = this.elements[e];
            if (d.isInRowSpacer(t)) return t;
          }
          return null;
        }
      }, Ra = class extends Zi {
        constructor(e) {
          super(e), this.hasNextConnection = !1, this.connection = null, this.baseline = this.descenderHeight = 0, this.type |= d.BOTTOM_ROW;
        }
        hasLeftSquareCorner(e) {
          return !!e.outputConnection || !!e.getNextBlock();
        }
        hasRightSquareCorner(e) {
          return !0;
        }
        measure() {
          let e = 0, t = 0, s = 0;
          for (let o = 0; o < this.elements.length; o++) {
            const i = this.elements[o];
            t += i.width, d.isSpacer(i) || (d.isNextConnection(i) ? s = Math.max(s, i.height) : e = Math.max(e, i.height));
          }
          this.width = Math.max(this.minWidth, t), this.height = Math.max(this.minHeight, e) + s, this.descenderHeight = s, this.widthWithConnectedBlocks = this.width;
        }
        startsWithElemSpacer() {
          return !1;
        }
        endsWithElemSpacer() {
          return !1;
        }
      }, Zs = class extends Lt {
        constructor(e, t) {
          super(e), this.connectionModel = t, this.type |= d.CONNECTION, this.shape = this.constants_.shapeFor(t), this.isDynamicShape = "isDynamic" in this.shape && this.shape.isDynamic, this.highlighted = t.isHighlighted();
        }
      }, qr = class extends Zs {
        constructor(e, t) {
          super(e, t.connection), this.input = t, this.connectionOffsetY = this.connectionOffsetX = 0, this.type |= d.INPUT, this.align = t.align, (this.connectedBlock = t.connection && t.connection.targetBlock() ? t.connection.targetBlock() : null) ? (e = this.connectedBlock.getHeightWidth(), this.connectedBlockWidth = e.width, this.connectedBlockHeight = e.height) : this.connectedBlockHeight = this.connectedBlockWidth = 0;
        }
      }, Oa = class extends qr {
        constructor(e, t) {
          super(e, t), this.height = 0, this.type |= d.EXTERNAL_VALUE_INPUT, this.height = this.connectedBlock ? this.connectedBlockHeight - this.constants_.TAB_OFFSET_FROM_TOP - this.constants_.MEDIUM_PADDING : this.shape.height, this.width = this.shape.width + this.constants_.EXTERNAL_VALUE_INPUT_PADDING, this.connectionOffsetY = this.constants_.TAB_OFFSET_FROM_TOP, this.connectionHeight = this.shape.height, this.connectionWidth = this.shape.width;
        }
      }, Ca = class extends Lt {
        constructor(e, t, s) {
          super(e), this.field = t, this.parentInput = s, this.isEditable = t.EDITABLE, this.flipRtl = t.getFlipRtl(), this.type |= d.FIELD, e = this.field.getSize(), this.height = e.height, this.width = e.width;
        }
      }, yg = class extends Lt {
        constructor(e) {
          super(e), this.type |= d.HAT, this.height = this.constants_.START_HAT.height, this.width = this.constants_.START_HAT.width, this.ascenderHeight = this.height;
        }
      }, vg = class extends Lt {
        constructor(e, t) {
          super(e), this.icon = t, this.flipRtl = !1, this.type |= d.ICON, e = t.getSize(), this.height = e.height, this.width = e.width;
        }
      }, qe = class extends Lt {
        constructor(e, t) {
          super(e), this.type |= d.SPACER | d.IN_ROW_SPACER, this.width = t, this.height = this.constants_.SPACER_DEFAULT_HEIGHT;
        }
      }, ya = class extends qr {
        constructor(e, t) {
          super(e, t), this.type |= d.INLINE_INPUT, this.connectedBlock ? (this.width = this.connectedBlockWidth, this.height = this.connectedBlockHeight) : (this.height = this.constants_.EMPTY_INLINE_INPUT_HEIGHT, this.width = this.constants_.EMPTY_INLINE_INPUT_PADDING), this.connectionHeight = this.isDynamicShape ? this.shape.height(this.height) : this.shape.height, this.connectionWidth = this.isDynamicShape ? this.shape.width(this.height) : this.shape.width, this.connectedBlock || (this.width += this.connectionWidth * (this.isDynamicShape ? 2 : 1)), this.connectionOffsetY = "connectionOffsetY" in this.shape ? this.shape.connectionOffsetY(this.connectionHeight) : this.constants_.TAB_OFFSET_FROM_TOP, this.connectionOffsetX = "connectionOffsetX" in this.shape ? this.shape.connectionOffsetX(this.connectionWidth) : 0;
        }
      }, va = class extends Zi {
        constructor(e) {
          super(e), this.connectedBlockWidths = 0, this.type |= d.INPUT_ROW;
        }
        measure() {
          this.width = this.minWidth, this.height = this.minHeight;
          let e = 0;
          for (let t = 0; t < this.elements.length; t++) {
            const s = this.elements[t];
            this.width += s.width, d.isInput(s) && (d.isStatementInput(s) ? e += s.connectedBlockWidth : d.isExternalInput(s) && s.connectedBlockWidth !== 0 && (e += s.connectedBlockWidth - s.connectionWidth)), d.isSpacer(s) || (this.height = Math.max(this.height, s.height));
          }
          this.connectedBlockWidths = e, this.widthWithConnectedBlocks = this.width + e;
        }
        endsWithElemSpacer() {
          return !this.hasExternalInput && !this.hasStatement;
        }
      }, Lg = class extends Lt {
        constructor(e) {
          super(e), this.type |= d.JAGGED_EDGE, this.height = this.constants_.JAGGED_TEETH.height, this.width = this.constants_.JAGGED_TEETH.width;
        }
      }, Ag = class extends Zs {
        constructor(e, t) {
          super(e, t), this.type |= d.NEXT_CONNECTION, this.height = this.shape.height, this.width = this.shape.width;
        }
      }, kg = class extends Zs {
        constructor(e, t) {
          super(e, t), this.connectionOffsetX = 0, this.type |= d.OUTPUT_CONNECTION, this.height = this.isDynamicShape ? 0 : this.shape.height, this.startX = this.width = this.isDynamicShape ? 0 : this.shape.width, this.connectionOffsetY = this.constants_.TAB_OFFSET_FROM_TOP;
        }
      }, Ng = class extends Zs {
        constructor(e, t) {
          super(e, t), this.type |= d.PREVIOUS_CONNECTION, this.height = this.shape.height, this.width = this.shape.width;
        }
      }, Qi = class extends Lt {
        constructor(e, t) {
          super(e), this.type = (t && t !== "left" ? d.RIGHT_ROUND_CORNER : d.LEFT_ROUND_CORNER) | d.CORNER, this.width = this.constants_.CORNER_RADIUS, this.height = this.constants_.CORNER_RADIUS / 2;
        }
      }, La = class extends Zi {
        constructor(e, t, s) {
          super(e), this.height = t, this.width = s, this.precedesStatement = this.followsStatement = !1, this.widthWithConnectedBlocks = 0, this.type |= d.SPACER | d.BETWEEN_ROW_SPACER, this.elements = [new qe(
            this.constants_,
            s
          )];
        }
        measure() {
        }
      }, en = class extends Lt {
        constructor(e, t) {
          super(e), this.type = (t && t !== "left" ? d.RIGHT_SQUARE_CORNER : d.LEFT_SQUARE_CORNER) | d.CORNER, this.width = this.height = this.constants_.NO_PADDING;
        }
      }, Zr = class extends qr {
        constructor(e, t) {
          super(e, t), this.type |= d.STATEMENT_INPUT, this.height = this.connectedBlock ? this.connectedBlockHeight + this.constants_.STATEMENT_BOTTOM_SPACER : this.constants_.EMPTY_STATEMENT_INPUT_HEIGHT, this.width = this.constants_.STATEMENT_INPUT_NOTCH_OFFSET + this.shape.width;
        }
      }, Aa = class extends Zi {
        constructor(e) {
          super(e), this.ascenderHeight = this.capline = 0, this.hasPreviousConnection = !1, this.connection = null, this.type |= d.TOP_ROW;
        }
        hasLeftSquareCorner(e) {
          const t = (e.hat ? e.hat === "cap" : this.constants_.ADD_START_HATS) && !e.outputConnection && !e.previousConnection, s = e.getPreviousBlock();
          return !!e.outputConnection || t || (s ? s.getNextBlock() === e : !1);
        }
        hasRightSquareCorner(e) {
          return !0;
        }
        measure() {
          let e = 0, t = 0, s = 0;
          for (let o = 0; o < this.elements.length; o++) {
            const i = this.elements[o];
            t += i.width, d.isSpacer(i) || (d.isHat(i) ? s = Math.max(s, i.ascenderHeight) : e = Math.max(e, i.height));
          }
          this.width = Math.max(this.minWidth, t), this.height = Math.max(this.minHeight, e) + s, this.capline = this.ascenderHeight = s, this.widthWithConnectedBlocks = this.width;
        }
        startsWithElemSpacer() {
          return !1;
        }
        endsWithElemSpacer() {
          return !1;
        }
      }, Qr = class {
        constructor() {
          this.NO_PADDING = 0, this.SMALL_PADDING = 3, this.MEDIUM_PADDING = 5, this.MEDIUM_LARGE_PADDING = 8, this.LARGE_PADDING = 10, this.TAB_HEIGHT = 15, this.TAB_OFFSET_FROM_TOP = 5, this.TAB_VERTICAL_OVERLAP = 2.5, this.TAB_WIDTH = 8, this.NOTCH_WIDTH = 15, this.NOTCH_HEIGHT = 4, this.MIN_BLOCK_WIDTH = 12, this.EMPTY_BLOCK_SPACER_HEIGHT = 16, this.CORNER_RADIUS = 8, this.NOTCH_OFFSET_LEFT = 15, this.STATEMENT_BOTTOM_SPACER = 0, this.STATEMENT_INPUT_PADDING_LEFT = 20, this.BETWEEN_STATEMENT_PADDING_Y = 4, this.ADD_START_HATS = !1, this.START_HAT_HEIGHT = 15, this.START_HAT_WIDTH = 100, this.SPACER_DEFAULT_HEIGHT = 15, this.MIN_BLOCK_HEIGHT = 24, this.EMPTY_INLINE_INPUT_PADDING = 14.5, this.EXTERNAL_VALUE_INPUT_PADDING = 2, this.JAGGED_TEETH_HEIGHT = 12, this.JAGGED_TEETH_WIDTH = 6, this.FIELD_TEXT_FONTSIZE = 11, this.FIELD_TEXT_FONTWEIGHT = "normal", this.FIELD_TEXT_FONTFAMILY = "sans-serif", this.FIELD_TEXT_BASELINE = this.FIELD_TEXT_HEIGHT = -1, this.FIELD_BORDER_RECT_RADIUS = 4, this.FIELD_BORDER_RECT_HEIGHT = 16, this.FIELD_BORDER_RECT_X_PADDING = 5, this.FIELD_BORDER_RECT_Y_PADDING = 3, this.FIELD_BORDER_RECT_COLOUR = "#fff", this.FIELD_DROPDOWN_SVG_ARROW = this.FIELD_DROPDOWN_COLOURED_DIV = this.FIELD_DROPDOWN_NO_BORDER_RECT_SHADOW = !1, this.FIELD_DROPDOWN_SVG_ARROW_SIZE = 12, this.FIELD_COLOUR_FULL_BLOCK = this.FIELD_TEXTINPUT_BOX_SHADOW = !1, this.FIELD_COLOUR_DEFAULT_WIDTH = 26, this.defs = null, this.embossFilterId = "", this.embossFilter = null, this.disabledPatternId = "", this.disabledPattern = null, this.debugFilterId = "", this.cssNode = this.debugFilter = null, this.CURSOR_COLOUR = "#cc0a0a", this.MARKER_COLOUR = "#4286f4", this.CURSOR_WS_WIDTH = 100, this.WS_CURSOR_HEIGHT = 5, this.CURSOR_STACK_PADDING = 10, this.CURSOR_BLOCK_PADDING = 2, this.CURSOR_STROKE_WIDTH = 4, this.FULL_BLOCK_FIELDS = !1, this.INSERTION_MARKER_COLOUR = "#000000", this.INSERTION_MARKER_OPACITY = 0.2, this.SHAPES = { PUZZLE: 1, NOTCH: 2 }, this.TALL_INPUT_FIELD_OFFSET_Y = this.MEDIUM_PADDING, this.DUMMY_INPUT_SHADOW_MIN_HEIGHT = this.DUMMY_INPUT_MIN_HEIGHT = this.TAB_HEIGHT, this.STATEMENT_INPUT_NOTCH_OFFSET = this.NOTCH_OFFSET_LEFT, this.TOP_ROW_MIN_HEIGHT = this.MEDIUM_PADDING, this.TOP_ROW_PRECEDES_STATEMENT_MIN_HEIGHT = this.LARGE_PADDING, this.BOTTOM_ROW_MIN_HEIGHT = this.MEDIUM_PADDING, this.BOTTOM_ROW_AFTER_STATEMENT_MIN_HEIGHT = this.LARGE_PADDING, this.EMPTY_INLINE_INPUT_HEIGHT = this.TAB_HEIGHT + 11, this.EMPTY_STATEMENT_INPUT_HEIGHT = this.MIN_BLOCK_HEIGHT, this.START_POINT = ne(0, 0), this.FIELD_TEXT_BASELINE_CENTER = !0, this.FIELD_DROPDOWN_BORDER_RECT_HEIGHT = this.FIELD_BORDER_RECT_HEIGHT, this.FIELD_DROPDOWN_SVG_ARROW_PADDING = this.FIELD_BORDER_RECT_X_PADDING, this.FIELD_DROPDOWN_SVG_ARROW_DATAURI = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi43MSIgaGVpZ2h0PSI4Ljc5IiB2aWV3Qm94PSIwIDAgMTIuNzEgOC43OSI+PHRpdGxlPmRyb3Bkb3duLWFycm93PC90aXRsZT48ZyBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0xMi43MSwyLjQ0QTIuNDEsMi40MSwwLDAsMSwxMiw0LjE2TDguMDgsOC4wOGEyLjQ1LDIuNDUsMCwwLDEtMy40NSwwTDAuNzIsNC4xNkEyLjQyLDIuNDIsMCwwLDEsMCwyLjQ0LDIuNDgsMi40OCwwLDAsMSwuNzEuNzFDMSwwLjQ3LDEuNDMsMCw2LjM2LDBTMTEuNzUsMC40NiwxMiwuNzFBMi40NCwyLjQ0LDAsMCwxLDEyLjcxLDIuNDRaIiBmaWxsPSIjMjMxZjIwIi8+PC9nPjxwYXRoIGQ9Ik02LjM2LDcuNzlhMS40MywxLjQzLDAsMCwxLTEtLjQyTDEuNDIsMy40NWExLjQ0LDEuNDQsMCwwLDEsMC0yYzAuNTYtLjU2LDkuMzEtMC41Niw5Ljg3LDBhMS40NCwxLjQ0LDAsMCwxLDAsMkw3LjM3LDcuMzdBMS40MywxLjQzLDAsMCwxLDYuMzYsNy43OVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=", this.FIELD_COLOUR_DEFAULT_HEIGHT = this.FIELD_BORDER_RECT_HEIGHT, this.FIELD_CHECKBOX_X_OFFSET = this.FIELD_BORDER_RECT_X_PADDING - 3, this.randomIdentifier = String(Math.random()).substring(2);
        }
        init() {
          this.JAGGED_TEETH = this.makeJaggedTeeth(), this.NOTCH = this.makeNotch(), this.START_HAT = this.makeStartHat(), this.PUZZLE_TAB = this.makePuzzleTab(), this.INSIDE_CORNERS = this.makeInsideCorners(), this.OUTSIDE_CORNERS = this.makeOutsideCorners();
        }
        setTheme(e) {
          this.blockStyles = /* @__PURE__ */ Object.create(null);
          const t = e.blockStyles;
          for (const s in t) this.blockStyles[s] = this.validatedBlockStyle_(t[s]);
          this.setDynamicProperties_(e);
        }
        setDynamicProperties_(e) {
          this.setFontConstants_(e), this.setComponentConstants_(e), this.ADD_START_HATS = e.startHats !== void 0 ? e.startHats : this.ADD_START_HATS;
        }
        setFontConstants_(e) {
          e.fontStyle && e.fontStyle.family && (this.FIELD_TEXT_FONTFAMILY = e.fontStyle.family), e.fontStyle && e.fontStyle.weight && (this.FIELD_TEXT_FONTWEIGHT = e.fontStyle.weight), e.fontStyle && e.fontStyle.size && (this.FIELD_TEXT_FONTSIZE = e.fontStyle.size), e = ho(
            "Hg",
            this.FIELD_TEXT_FONTSIZE + "pt",
            this.FIELD_TEXT_FONTWEIGHT,
            this.FIELD_TEXT_FONTFAMILY
          ), this.FIELD_TEXT_HEIGHT = e.height, this.FIELD_TEXT_BASELINE = e.baseline;
        }
        setComponentConstants_(e) {
          this.CURSOR_COLOUR = e.getComponentStyle("cursorColour") || this.CURSOR_COLOUR, this.MARKER_COLOUR = e.getComponentStyle("markerColour") || this.MARKER_COLOUR, this.INSERTION_MARKER_COLOUR = e.getComponentStyle("insertionMarkerColour") || this.INSERTION_MARKER_COLOUR, this.INSERTION_MARKER_OPACITY = Number(e.getComponentStyle("insertionMarkerOpacity")) || this.INSERTION_MARKER_OPACITY;
        }
        getBlockStyleForColour(e) {
          const t = "auto_" + e;
          return this.blockStyles[t] || (this.blockStyles[t] = this.createBlockStyle_(e)), { style: this.blockStyles[t], name: t };
        }
        getBlockStyle(e) {
          return this.blockStyles[e || ""] || (e && e.startsWith("auto_") ? this.getBlockStyleForColour(e.substring(5)).style : this.createBlockStyle_("#000000"));
        }
        createBlockStyle_(e) {
          return this.validatedBlockStyle_({ colourPrimary: e });
        }
        validatedBlockStyle_(e) {
          const t = {};
          return e && Object.assign(t, e), e = So(t.colourPrimary || "#000"), t.colourPrimary = e.hex, t.colourSecondary = t.colourSecondary ? So(t.colourSecondary).hex : this.generateSecondaryColour_(t.colourPrimary), t.colourTertiary = t.colourTertiary ? So(t.colourTertiary).hex : this.generateTertiaryColour_(t.colourPrimary), t.hat = t.hat || "", t;
        }
        generateSecondaryColour_(e) {
          return ws("#fff", e, 0.6) || e;
        }
        generateTertiaryColour_(e) {
          return ws(
            "#fff",
            e,
            0.3
          ) || e;
        }
        dispose() {
          this.embossFilter && G(this.embossFilter), this.disabledPattern && G(this.disabledPattern), this.debugFilter && G(this.debugFilter), this.cssNode = null;
        }
        makeJaggedTeeth() {
          const e = this.JAGGED_TEETH_HEIGHT, t = this.JAGGED_TEETH_WIDTH, s = vo([v(t, e / 4), v(-t * 2, e / 2), v(t, e / 4)]);
          return { height: e, width: t, path: s };
        }
        makeStartHat() {
          const e = this.START_HAT_HEIGHT, t = this.START_HAT_WIDTH, s = Ue("c", [v(30, -e), v(70, -e), v(t, 0)]);
          return { height: e * 0.75, width: t, path: s };
        }
        makePuzzleTab() {
          function e(r) {
            r = r ? -1 : 1;
            const u = -r;
            var h = s / 2;
            const E = h + 2.5, y = h + 0.5, se = v(
              -t,
              r * h
            );
            return h = v(t, r * h), Ue("c", [v(0, r * E), v(-t, u * y), se]) + Ue("s", [v(t, u * 2.5), h]);
          }
          const t = this.TAB_WIDTH, s = this.TAB_HEIGHT, o = e(!0), i = e(!1);
          return { type: this.SHAPES.PUZZLE, width: t, height: s, pathDown: i, pathUp: o };
        }
        makeNotch() {
          function e(u) {
            return vo([v(u * o, s), v(u * 3, 0), v(u * o, -s)]);
          }
          const t = this.NOTCH_WIDTH, s = this.NOTCH_HEIGHT, o = (t - 3) / 2, i = e(1), r = e(-1);
          return { type: this.SHAPES.NOTCH, width: t, height: s, pathLeft: i, pathRight: r };
        }
        makeInsideCorners() {
          const e = this.CORNER_RADIUS, t = ce("a", "0 0,0", e, v(-e, e)), s = ce("a", "0 0,0", e, v(
            e,
            e
          ));
          return { width: e, height: e, pathTop: t, pathBottom: s };
        }
        makeOutsideCorners() {
          const e = this.CORNER_RADIUS, t = ne(0, e) + ce("a", "0 0,1", e, v(e, -e)), s = ce("a", "0 0,1", e, v(e, e)), o = ce("a", "0 0,1", e, v(-e, -e)), i = ce(
            "a",
            "0 0,1",
            e,
            v(-e, e)
          );
          return { topLeft: t, topRight: s, bottomRight: i, bottomLeft: o, rightHeight: e };
        }
        shapeFor(e) {
          switch (e.type) {
            case C.INPUT_VALUE:
            case C.OUTPUT_VALUE:
              return this.PUZZLE_TAB;
            case C.PREVIOUS_STATEMENT:
            case C.NEXT_STATEMENT:
              return this.NOTCH;
            default:
              throw Error("Unknown connection type");
          }
        }
        createDom(e, t, s, o) {
          this.injectCSS_(t, s), this.defs = b(g.DEFS, {}, e), e = b(g.FILTER, { id: "blocklyEmbossFilter" + this.randomIdentifier }, this.defs), b(g.FEGAUSSIANBLUR, { in: "SourceAlpha", stdDeviation: 1, result: "blur" }, e), t = b(
            g.FESPECULARLIGHTING,
            { in: "blur", surfaceScale: 1, specularConstant: 0.5, specularExponent: 10, "lighting-color": "white", result: "specOut" },
            e
          ), b(g.FEPOINTLIGHT, { x: -5e3, y: -1e4, z: 2e4 }, t), b(g.FECOMPOSITE, { in: "specOut", in2: "SourceAlpha", operator: "in", result: "specOut" }, e), b(
            g.FECOMPOSITE,
            { in: "SourceGraphic", in2: "specOut", operator: "arithmetic", k1: 0, k2: 1, k3: 1, k4: 0 },
            e
          ), this.embossFilterId = e.id, this.embossFilter = e, e = b(g.PATTERN, { id: "blocklyDisabledPattern" + this.randomIdentifier, patternUnits: "userSpaceOnUse", width: 10, height: 10 }, this.defs), b(g.RECT, { width: 10, height: 10, fill: "#aaa" }, e), b(
            g.PATH,
            { d: "M 0 0 L 10 10 M 10 0 L 0 10", stroke: "#cc0" },
            e
          ), this.disabledPatternId = e.id, this.disabledPattern = e, this.createDebugFilter(), o && (o.style.setProperty("--blocklyEmbossFilter", `url(#${this.embossFilterId})`), o.style.setProperty("--blocklyDisabledPattern", `url(#${this.disabledPatternId})`), o.style.setProperty("--blocklyDebugFilter", `url(#${this.debugFilterId})`));
        }
        createDebugFilter() {
          if (!this.debugFilter) {
            const e = b(
              g.FILTER,
              { id: "blocklyDebugFilter" + this.randomIdentifier, height: "160%", width: "180%", y: "-30%", x: "-40%" },
              this.defs
            ), t = b(g.FECOMPONENTTRANSFER, { result: "outBlur" }, e);
            b(g.FEFUNCA, { type: "table", tableValues: "0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1" }, t), b(g.FEFLOOD, {
              "flood-color": "#ff0000",
              "flood-opacity": 0.5,
              result: "outColor"
            }, e), b(g.FECOMPOSITE, { in: "outColor", in2: "outBlur", operator: "in", result: "outGlow" }, e), this.debugFilterId = e.id, this.debugFilter = e;
          }
        }
        injectCSS_(e, t) {
          t = this.getCSS_(t), e = "blockly-renderer-style-" + e, this.cssNode = document.getElementById(e);
          const s = t.join(`
`);
          this.cssNode ? this.cssNode.firstChild.textContent = s : (t = document.createElement("style"), t.id = e, e = document.createTextNode(s), t.appendChild(e), document.head.insertBefore(t, document.head.firstChild), this.cssNode = t);
        }
        getCSS_(e) {
          return [
            `${e} .blocklyText, `,
            `${e} .blocklyFlyoutLabelText {`,
            `font: ${this.FIELD_TEXT_FONTWEIGHT} ${this.FIELD_TEXT_FONTSIZE}pt ${this.FIELD_TEXT_FONTFAMILY};`,
            "}",
            `${e} .blocklyText {`,
            "fill: #fff;",
            "}",
            `${e} .blocklyNonEditableField>rect,`,
            `${e} .blocklyEditableField>rect {`,
            `fill: ${this.FIELD_BORDER_RECT_COLOUR};`,
            "fill-opacity: .6;",
            "stroke: none;",
            "}",
            `${e} .blocklyNonEditableField>text,`,
            `${e} .blocklyEditableField>text {`,
            "fill: #000;",
            "}",
            `${e} .blocklyFlyoutLabelText {`,
            "fill: #000;",
            "}",
            `${e} .blocklyText.blocklyBubbleText {`,
            "fill: #000;",
            "}",
            `${e} .blocklyEditableField:not(.blocklyEditing):hover>rect {`,
            "stroke: #fff;",
            "stroke-width: 2;",
            "}",
            `${e} .blocklyHtmlInput {`,
            `font-family: ${this.FIELD_TEXT_FONTFAMILY};`,
            `font-weight: ${this.FIELD_TEXT_FONTWEIGHT};`,
            "}",
            `${e} .blocklySelected>.blocklyPath {`,
            "stroke: #fc3;",
            "stroke-width: 3px;",
            "}",
            `${e} .blocklyHighlightedConnectionPath {`,
            "stroke: #fc3;",
            "}",
            `${e} .blocklyReplaceable .blocklyPath {`,
            "fill-opacity: .5;",
            "}",
            `${e} .blocklyReplaceable .blocklyPathLight,`,
            `${e} .blocklyReplaceable .blocklyPathDark {`,
            "display: none;",
            "}",
            `${e} .blocklyInsertionMarker>.blocklyPath {`,
            `fill-opacity: ${this.INSERTION_MARKER_OPACITY};`,
            "stroke: none;",
            "}"
          ];
        }
      }, el = class {
        constructor(e, t) {
          this.inlinePath_ = this.outlinePath_ = "", this.block_ = e, this.info_ = t, this.topLeft_ = e.getRelativeToSurfaceXY(), this.constants_ = t.getRenderer().getConstants();
        }
        draw() {
          this.drawOutline_(), this.drawInternals_(), this.updateConnectionHighlights(), this.block_.pathObject.setPath(this.outlinePath_ + `
` + this.inlinePath_), this.info_.RTL && this.block_.pathObject.flipRTL(), this.recordSizeOnBlock_();
        }
        recordSizeOnBlock_() {
          this.block_.height = this.info_.height, this.block_.width = this.info_.widthWithChildren, this.block_.childlessWidth = this.info_.width;
        }
        drawOutline_() {
          this.drawTop_();
          for (let e = 1; e < this.info_.rows.length - 1; e++) {
            const t = this.info_.rows[e];
            t.hasJaggedEdge ? this.drawJaggedEdge_(t) : t.hasStatement ? this.drawStatementInput_(t) : t.hasExternalInput ? this.drawValueInput_(t) : this.drawRightSideRow_(t);
          }
          this.drawBottom_(), this.drawLeft_();
        }
        drawTop_() {
          const e = this.info_.topRow, t = e.elements;
          this.positionPreviousConnection_(), this.outlinePath_ += ne(e.xPos, this.info_.startY);
          for (let s = 0, o; o = t[s]; s++) d.isLeftRoundedCorner(o) ? this.outlinePath_ += this.constants_.OUTSIDE_CORNERS.topLeft : d.isRightRoundedCorner(o) ? this.outlinePath_ += this.constants_.OUTSIDE_CORNERS.topRight : d.isPreviousConnection(o) ? this.outlinePath_ += o.shape.pathLeft : d.isHat(o) ? this.outlinePath_ += this.constants_.START_HAT.path : d.isSpacer(o) && (this.outlinePath_ += A("h", o.width));
          this.outlinePath_ += A("v", e.height - e.ascenderHeight);
        }
        drawJaggedEdge_(e) {
          this.outlinePath_ += this.constants_.JAGGED_TEETH.path + A("v", e.height - this.constants_.JAGGED_TEETH.height);
        }
        drawValueInput_(e) {
          const t = e.getLastInput();
          this.positionExternalValueConnection_(e);
          const s = tr(t.shape) ? t.shape.pathDown(t.height) : t.shape.pathDown;
          this.outlinePath_ += A("H", t.xPos + t.width) + s + A("v", e.height - t.connectionHeight);
        }
        drawStatementInput_(e) {
          var t = e.getLastInput();
          if (t) {
            var s = t.xPos + t.notchOffset + t.shape.width;
            t = t.shape.pathRight + A(
              "h",
              -(t.notchOffset - this.constants_.INSIDE_CORNERS.width)
            ) + this.constants_.INSIDE_CORNERS.pathTop;
            var o = e.height - 2 * this.constants_.INSIDE_CORNERS.height;
            this.outlinePath_ += A("H", s) + t + A("v", o) + this.constants_.INSIDE_CORNERS.pathBottom + A("H", e.xPos + e.width), this.positionStatementInputConnection_(e);
          }
        }
        drawRightSideRow_(e) {
          this.outlinePath_ += A(
            "V",
            e.yPos + e.height
          );
        }
        drawBottom_() {
          const e = this.info_.bottomRow, t = e.elements;
          this.positionNextConnection_();
          let s = 0, o = "";
          for (let i = t.length - 1, r; r = t[i]; i--) d.isNextConnection(r) ? o += r.shape.pathRight : d.isLeftSquareCorner(r) ? o += A("H", e.xPos) : d.isLeftRoundedCorner(r) ? o += this.constants_.OUTSIDE_CORNERS.bottomLeft : d.isRightRoundedCorner(r) ? (o += this.constants_.OUTSIDE_CORNERS.bottomRight, s = this.constants_.OUTSIDE_CORNERS.rightHeight) : d.isSpacer(r) && (o += A("h", r.width * -1));
          this.outlinePath_ += A("V", e.baseline - s), this.outlinePath_ += o;
        }
        drawLeft_() {
          var e = this.info_.outputConnection;
          if (this.positionOutputConnection_(), e) {
            const t = e.connectionOffsetY + e.height;
            e = tr(e.shape) ? e.shape.pathUp(e.height) : e.shape.pathUp, this.outlinePath_ += A("V", t) + e;
          }
          this.outlinePath_ += "z";
        }
        drawInternals_() {
          for (let e = 0, t; t = this.info_.rows[e]; e++) for (let s = 0, o; o = t.elements[s]; s++) d.isInlineInput(o) ? this.drawInlineInput_(o) : (d.isIcon(o) || d.isField(o)) && this.layoutField_(o);
        }
        layoutField_(e) {
          const t = e.centerline - e.height / 2;
          let s = e.xPos;
          var o = "";
          this.info_.RTL && (s = -(s + e.width), e.flipRtl && (s += e.width, o = "scale(-1 1)")), d.isIcon(e) ? (o = e.icon, o.setOffsetInBlock(new I(s, t)), this.info_.isInsertionMarker && o.hideForInsertionMarker()) : (e = e.field.getSvgRoot(), e.setAttribute("transform", "translate(" + s + "," + t + ")" + o), this.info_.isInsertionMarker && e.setAttribute("display", "none"));
        }
        drawInlineInput_(e) {
          const t = e.width, s = e.height, o = e.connectionOffsetY, i = e.connectionHeight + o;
          this.inlinePath_ += be(e.xPos + e.connectionWidth, e.centerline - s / 2) + A("v", o) + e.shape.pathDown + A("v", s - i) + A("h", t - e.connectionWidth) + A(
            "v",
            -s
          ) + "z", this.positionInlineInputConnection_(e);
        }
        positionInlineInputConnection_(e) {
          const t = e.centerline - e.height / 2;
          if (e.connectionModel) {
            let s = e.xPos + e.connectionWidth + e.connectionOffsetX;
            this.info_.RTL && (s *= -1), e.connectionModel.setOffsetInBlock(s, t + e.connectionOffsetY);
          }
        }
        positionStatementInputConnection_(e) {
          const t = e.getLastInput();
          if (t != null && t.connectionModel) {
            let s = e.xPos + e.statementEdge + t.notchOffset;
            this.info_.RTL && (s *= -1), t.connectionModel.setOffsetInBlock(s, e.yPos);
          }
        }
        positionExternalValueConnection_(e) {
          const t = e.getLastInput();
          if (t && t.connectionModel) {
            let s = e.xPos + e.width;
            this.info_.RTL && (s *= -1), t.connectionModel.setOffsetInBlock(s, e.yPos);
          }
        }
        positionPreviousConnection_() {
          const e = this.info_.topRow;
          if (e.connection) {
            const t = e.xPos + e.notchOffset;
            e.connection.connectionModel.setOffsetInBlock(this.info_.RTL ? -t : t, 0);
          }
        }
        positionNextConnection_() {
          const e = this.info_.bottomRow;
          if (e.connection) {
            const t = e.connection, s = t.xPos;
            t.connectionModel.setOffsetInBlock(this.info_.RTL ? -s : s, e.baseline);
          }
        }
        positionOutputConnection_() {
          if (this.info_.outputConnection) {
            const e = this.info_.startX + this.info_.outputConnection.connectionOffsetX;
            this.block_.outputConnection.setOffsetInBlock(this.info_.RTL ? -e : e, this.info_.outputConnection.connectionOffsetY);
          }
        }
        updateConnectionHighlights() {
          for (const e of this.info_.rows) for (const t of e.elements) {
            if (!(t instanceof Zs)) continue;
            const s = this.drawConnectionHighlightPath(t);
            s && (s.style.display = t.highlighted ? "" : "none");
          }
        }
        drawConnectionHighlightPath(e) {
          const t = e.connectionModel;
          e = t.type === C.INPUT_VALUE || t.type === C.OUTPUT_VALUE ? this.getExpressionConnectionHighlightPath(e) : this.getStatementConnectionHighlightPath(e);
          const s = t.getSourceBlock();
          let o, i;
          return (i = (o = s.pathObject).addConnectionHighlight) == null ? void 0 : i.call(o, t, e, t.getOffsetInBlock(), s.RTL);
        }
        getExpressionConnectionHighlightPath(e) {
          let t = "";
          return tr(e.shape) ? t = e.shape.pathDown(e.height) : h$(e.shape) && (t = e.shape.pathDown), e = this.constants_.TAB_OFFSET_FROM_TOP, ne(0, -e) + A("v", e) + t + A("v", e);
        }
        getStatementConnectionHighlightPath(e) {
          if (!d$(e.shape)) throw Error("Statement connections should have notch shapes");
          const t = this.constants_.NOTCH_OFFSET_LEFT - this.constants_.CORNER_RADIUS;
          return ne(-t, 0) + A("h", t) + e.shape.pathLeft + A("h", t);
        }
      }, tn = class {
        constructor(e, t) {
          this.statementEdge = this.width = this.widthWithChildren = this.height = 0, this.rows = [], this.inputRows = [], this.startY = this.startX = 0, this.renderer_ = e, this.block_ = t, this.constants_ = this.renderer_.getConstants(), this.outputConnection = t.outputConnection ? new kg(this.constants_, t.outputConnection) : null, this.isInline = t.getInputsInline() && !t.isCollapsed(), this.isCollapsed = t.isCollapsed(), this.isInsertionMarker = t.isInsertionMarker(), this.RTL = t.RTL, this.topRow = new Aa(this.constants_), this.bottomRow = new Ra(this.constants_);
        }
        getRenderer() {
          return this.renderer_;
        }
        measure() {
          this.createRows_(), this.addElemSpacing_(), this.addRowSpacing_(), this.computeBounds_(), this.alignRowElements_(), this.finalize_();
        }
        createRows_() {
          this.populateTopRow_(), this.rows.push(this.topRow);
          let e = new va(this.constants_);
          this.inputRows.push(e);
          var t = this.block_.getIcons();
          for (let s = 0, o; o = t[s]; s++) {
            const i = new vg(this.constants_, o);
            this.isCollapsed && !o.isShownWhenCollapsed() || e.elements.push(i);
          }
          t = void 0;
          for (let s = 0, o; o = this.block_.inputList[s]; s++) if (o.isVisible()) {
            this.shouldStartNewRow_(o, t) && (this.rows.push(e), e = new va(this.constants_), this.inputRows.push(e));
            for (let i = 0, r; r = o.fieldRow[i]; i++) e.elements.push(new Ca(this.constants_, r, o));
            this.addInput_(o, e), t = o;
          }
          this.isCollapsed && (e.hasJaggedEdge = !0, e.elements.push(new Lg(this.constants_))), (e.elements.length || e.hasDummyInput) && this.rows.push(e), this.populateBottomRow_(), this.rows.push(this.bottomRow);
        }
        populateTopRow_() {
          var e = !!this.block_.previousConnection;
          const t = (this.block_.hat ? this.block_.hat === "cap" : this.constants_.ADD_START_HATS) && !this.outputConnection && !e;
          let s = this.topRow.hasLeftSquareCorner(this.block_) ? en : Qi;
          this.topRow.elements.push(new s(this.constants_)), t ? (e = new yg(this.constants_), this.topRow.elements.push(e)) : e && (this.topRow.hasPreviousConnection = !0, this.topRow.connection = new Ng(this.constants_, this.block_.previousConnection), this.topRow.elements.push(this.topRow.connection)), this.block_.inputList.length && this.block_.inputList[0] instanceof Je && !this.block_.isCollapsed() ? this.topRow.minHeight = this.constants_.TOP_ROW_PRECEDES_STATEMENT_MIN_HEIGHT : this.topRow.minHeight = this.constants_.TOP_ROW_MIN_HEIGHT, s = this.topRow.hasRightSquareCorner(this.block_) ? en : Qi, this.topRow.elements.push(new s(this.constants_, "right"));
        }
        populateBottomRow_() {
          this.bottomRow.hasNextConnection = !!this.block_.nextConnection, this.bottomRow.minHeight = this.block_.inputList.length && this.block_.inputList[this.block_.inputList.length - 1] instanceof Je ? this.constants_.BOTTOM_ROW_AFTER_STATEMENT_MIN_HEIGHT : this.constants_.BOTTOM_ROW_MIN_HEIGHT, this.bottomRow.hasLeftSquareCorner(this.block_) ? this.bottomRow.elements.push(new en(this.constants_)) : this.bottomRow.elements.push(new Qi(this.constants_)), this.bottomRow.hasNextConnection && (this.bottomRow.connection = new Ag(this.constants_, this.block_.nextConnection), this.bottomRow.elements.push(this.bottomRow.connection)), this.bottomRow.hasRightSquareCorner(this.block_) ? this.bottomRow.elements.push(new en(this.constants_, "right")) : this.bottomRow.elements.push(new Qi(this.constants_, "right"));
        }
        addInput_(e, t) {
          this.isInline && e instanceof n.ValueInput$$module$build$src$core$inputs$value_input ? (t.elements.push(new ya(
            this.constants_,
            e
          )), t.hasInlineInput = !0) : e instanceof Je ? (t.elements.push(new Zr(this.constants_, e)), t.hasStatement = !0) : e instanceof n.ValueInput$$module$build$src$core$inputs$value_input ? (t.elements.push(new Oa(this.constants_, e)), t.hasExternalInput = !0) : (e instanceof yt || e instanceof Zt) && (t.minHeight = Math.max(t.minHeight, e.getSourceBlock() && e.getSourceBlock().isShadow() ? this.constants_.DUMMY_INPUT_SHADOW_MIN_HEIGHT : this.constants_.DUMMY_INPUT_MIN_HEIGHT), t.hasDummyInput = !0), t.align === null && (t.align = e.align);
        }
        shouldStartNewRow_(e, t) {
          return t ? t instanceof Zt || e instanceof Je || t instanceof Je ? !0 : e instanceof n.ValueInput$$module$build$src$core$inputs$value_input || e instanceof yt || t instanceof n.ValueInput$$module$build$src$core$inputs$value_input ? !this.isInline : !1 : !1;
        }
        addElemSpacing_() {
          for (let e = 0, t; t = this.rows[e]; e++) {
            const s = t.elements;
            if (t.elements = [], t.startsWithElemSpacer() && t.elements.push(new qe(this.constants_, this.getInRowSpacing_(null, s[0]))), s.length) {
              for (let o = 0; o < s.length - 1; o++) {
                t.elements.push(s[o]);
                const i = this.getInRowSpacing_(s[o], s[o + 1]);
                t.elements.push(new qe(this.constants_, i));
              }
              t.elements.push(s[s.length - 1]), t.endsWithElemSpacer() && t.elements.push(new qe(this.constants_, this.getInRowSpacing_(s[s.length - 1], null)));
            }
          }
        }
        getInRowSpacing_(e, t) {
          if (!e && t && d.isStatementInput(t)) return this.constants_.STATEMENT_INPUT_PADDING_LEFT;
          if (e && d.isInput(e) && !t) {
            if (d.isExternalInput(e)) return this.constants_.NO_PADDING;
            if (d.isInlineInput(e)) return this.constants_.LARGE_PADDING;
            if (d.isStatementInput(e)) return this.constants_.NO_PADDING;
          }
          return e && d.isLeftSquareCorner(e) && t && (d.isPreviousConnection(t) || d.isNextConnection(t)) ? t.notchOffset : e && d.isLeftRoundedCorner(e) && t && (d.isPreviousConnection(t) || d.isNextConnection(t)) ? t.notchOffset - this.constants_.CORNER_RADIUS : e && d.isField(e) && e.width === 0 ? this.constants_.NO_PADDING : this.constants_.MEDIUM_PADDING;
        }
        computeBounds_() {
          let e = 0, t = 0, s = 0;
          for (let i = 0, r; r = this.rows[i]; i++) {
            if (r.measure(), t = Math.max(t, r.width), r.hasStatement) {
              var o = r.getLastInput();
              let u, h;
              o = r.width - ((h = (u = o) == null ? void 0 : u.width) != null ? h : 0), e = Math.max(e, o);
            }
            s = Math.max(s, r.widthWithConnectedBlocks);
          }
          this.statementEdge = e, this.width = t;
          for (let i = 0, r; r = this.rows[i]; i++) r.hasStatement && (r.statementEdge = this.statementEdge);
          this.widthWithChildren = Math.max(t, s), this.outputConnection && (this.startX = this.outputConnection.width, this.width += this.outputConnection.width, this.widthWithChildren += this.outputConnection.width);
        }
        alignRowElements_() {
          for (let t = 0, s; s = this.rows[t]; t++) if (s.hasStatement) this.alignStatementRow_(s);
          else {
            var e = s.width;
            e = this.getDesiredRowWidth_(s) - e, e > 0 && this.addAlignmentPadding_(s, e), d.isTopOrBottomRow(s) && (s.widthWithConnectedBlocks = s.width);
          }
        }
        getDesiredRowWidth_(e) {
          return this.width - this.startX;
        }
        addAlignmentPadding_(e, t) {
          const s = e.getFirstSpacer(), o = e.getLastSpacer();
          if ((e.hasExternalInput || e.hasStatement) && (e.widthWithConnectedBlocks += t), e.align === n.Align$$module$build$src$core$inputs$align.LEFT && o) o.width += t;
          else if (e.align === n.Align$$module$build$src$core$inputs$align.CENTRE && s && o) s.width += t / 2, o.width += t / 2;
          else if (e.align === n.Align$$module$build$src$core$inputs$align.RIGHT && s) s.width += t;
          else if (o) o.width += t;
          else return;
          e.width += t;
        }
        alignStatementRow_(e) {
          const t = e.getLastInput();
          if (t) {
            var s = e.width - t.width, o = this.statementEdge;
            s = o - s, s > 0 && this.addAlignmentPadding_(e, s), s = e.width, o = this.getDesiredRowWidth_(e), t.width += o - s, t.height = Math.max(t.height, e.height), e.width += o - s, e.widthWithConnectedBlocks = Math.max(e.width, this.statementEdge + e.connectedBlockWidths);
          }
        }
        addRowSpacing_() {
          const e = this.rows;
          this.rows = [];
          for (let t = 0; t < e.length; t++) this.rows.push(e[t]), t !== e.length - 1 && this.rows.push(this.makeSpacerRow_(e[t], e[t + 1]));
        }
        makeSpacerRow_(e, t) {
          var s = this.getSpacerRowHeight_(e, t);
          const o = this.getSpacerRowWidth_(e, t);
          return s = new La(
            this.constants_,
            s,
            o
          ), e.hasStatement && (s.followsStatement = !0), t.hasStatement && (s.precedesStatement = !0), s;
        }
        getSpacerRowWidth_(e, t) {
          return this.width - this.startX;
        }
        getSpacerRowHeight_(e, t) {
          return this.constants_.MEDIUM_PADDING;
        }
        getElemCenterline_(e, t) {
          return d.isSpacer(t) ? e.yPos + t.height / 2 : d.isBottomRow(e) ? (e = e.yPos + e.height - e.descenderHeight, d.isNextConnection(t) ? e + t.height / 2 : e - t.height / 2) : d.isTopRow(e) ? d.isHat(t) ? e.capline - t.height / 2 : e.capline + t.height / 2 : e.yPos + e.height / 2;
        }
        recordElemPositions_(e) {
          let t = e.xPos;
          for (let s = 0, o; o = e.elements[s]; s++) d.isSpacer(o) && (o.height = e.height), o.xPos = t, o.centerline = this.getElemCenterline_(e, o), t += o.width;
        }
        finalize_() {
          let e = 0, t = 0;
          for (let s = 0, o; o = this.rows[s]; s++) o.yPos = t, o.xPos = this.startX, t += o.height, e = Math.max(e, o.widthWithConnectedBlocks), this.recordElemPositions_(o);
          if (this.outputConnection && this.block_.nextConnection) {
            const s = this.block_.nextConnection.targetBlock();
            s && (e = Math.max(e, s.getHeightWidth().width));
          }
          this.widthWithChildren = e + this.startX, this.height = t, this.startY = this.topRow.capline, this.bottomRow.baseline = t - this.bottomRow.descenderHeight;
        }
        getMeasureableForConnection(e) {
          let t;
          if (((t = this.outputConnection) == null ? void 0 : t.connectionModel) === e) return this.outputConnection;
          for (const s of this.rows) for (const o of s.elements) if (o instanceof Zs && o.connectionModel === e) return o;
          return null;
        }
      }, tl = class {
        constructor(e, t, s) {
          this.connectionHighlights = /* @__PURE__ */ new WeakMap(), this.highlightOffsets = /* @__PURE__ */ new WeakMap(), this.constants = s, this.style = t, this.svgRoot = e, this.svgPath = b(g.PATH, { class: "blocklyPath" }, this.svgRoot), this.setClass_("blocklyBlock", !0);
        }
        setPath(e) {
          this.svgPath.setAttribute("d", e);
        }
        flipRTL() {
          this.svgPath.setAttribute("transform", "scale(-1 1)");
        }
        applyColour(e) {
          this.svgPath.setAttribute(
            "stroke",
            this.style.colourTertiary
          ), this.svgPath.setAttribute("fill", this.style.colourPrimary), this.updateShadow_(e.isShadow()), this.updateDisabled_(!e.isEnabled() || e.getInheritedDisabled());
        }
        setStyle(e) {
          this.style = e;
        }
        setClass_(e, t) {
          e && (t ? R(this.svgRoot, e) : F(this.svgRoot, e));
        }
        updateHighlighted(e) {
          e ? this.setClass_("blocklyHighlighted", !0) : this.setClass_("blocklyHighlighted", !1);
        }
        updateShadow_(e) {
          e ? (this.setClass_(
            "blocklyShadow",
            !0
          ), this.svgPath.setAttribute("stroke", "none"), this.svgPath.setAttribute("fill", this.style.colourSecondary)) : this.setClass_("blocklyShadow", !1);
        }
        updateDisabled_(e) {
          this.setClass_("blocklyDisabled", e), this.setClass_("blocklyDisabledPattern", e);
        }
        updateSelected(e) {
          this.setClass_("blocklySelected", e);
        }
        updateDraggingDelete(e) {
          this.setClass_("blocklyDraggingDelete", e);
        }
        updateInsertionMarker(e) {
          this.setClass_("blocklyInsertionMarker", e);
        }
        updateMovable(e) {
          this.setClass_("blocklyDraggable", e);
        }
        updateReplacementFade(e) {
          this.setClass_(
            "blocklyReplaceable",
            e
          );
        }
        updateShapeForInputHighlight(e, t) {
        }
        addConnectionHighlight(e, t, s, o) {
          return s = `translate(${s.x}, ${s.y})` + (o ? " scale(-1 1)" : ""), (o = this.connectionHighlights.get(e)) ? (o.setAttribute("d", t), o.setAttribute("transform", s), o) : (t = b(g.PATH, { id: e.id, class: "blocklyHighlightedConnectionPath", style: "display: none;", d: t, transform: s }, this.svgRoot), this.connectionHighlights.set(e, t), t);
        }
        removeConnectionHighlight(e) {
          const t = this.connectionHighlights.get(e);
          t && (G(t), this.connectionHighlights.delete(e));
        }
      }, sl = class {
        constructor(e) {
          this.overrides = null, this.name = e;
        }
        getClassName() {
          return this.name + "-renderer";
        }
        init(e, t) {
          this.constants_ = this.makeConstants_(), t && (this.overrides = t, Object.assign(this.constants_, t)), this.constants_.setTheme(e), this.constants_.init();
        }
        createDom(e, t, s) {
          this.constants_.createDom(e, this.name + "-" + t.name, "." + this.getClassName() + "." + t.getClassName(), s);
        }
        refreshDom(e, t, s) {
          const o = this.getConstants();
          o.dispose(), this.constants_ = this.makeConstants_(), this.overrides && Object.assign(this.constants_, this.overrides), this.constants_.randomIdentifier = o.randomIdentifier, this.constants_.setTheme(t), this.constants_.init(), this.createDom(e, t, s);
        }
        dispose() {
          this.constants_ && this.constants_.dispose();
        }
        makeConstants_() {
          return new Qr();
        }
        makeRenderInfo_(e) {
          return new tn(this, e);
        }
        makeDrawer_(e, t) {
          return new el(
            e,
            t
          );
        }
        makePathObject(e, t) {
          return new tl(e, t, this.constants_);
        }
        getConstants() {
          return this.constants_;
        }
        shouldHighlightConnection(e) {
          return !0;
        }
        orphanCanConnectAtEnd(e, t, s) {
          return !!U.getConnectionForOrphanedConnection(e, s === C.OUTPUT_VALUE ? t.outputConnection : t.previousConnection);
        }
        render(e) {
          const t = this.makeRenderInfo_(e);
          t.measure(), this.makeDrawer_(e, t).draw();
        }
      }, W = {};
      W.BottomRow = Ra, W.Connection = Zs, W.ConstantProvider = Qr, W.Drawer = el, W.ExternalValueInput = Oa, W.Field = Ca, W.Hat = yg, W.Icon = vg, W.InRowSpacer = qe, W.InlineInput = ya, W.InputConnection = qr, W.InputRow = va, W.JaggedEdge = Lg, W.Measurable = Lt, W.NextConnection = Ag, W.OutputConnection = kg, W.PathObject = tl, W.PreviousConnection = Ng, W.RenderInfo = tn, W.Renderer = sl, W.RoundCorner = Qi, W.Row = Zi, W.SpacerRow = La, W.SquareCorner = en, W.StatementInput = Zr, W.TopRow = Aa, W.Types = d, W.init = Vc, W.register = Li, W.unregister = $$;
      var wg = class {
        constructor(e, t) {
          this.workspace = e, this.theme = t, this.subscribedWorkspaces = [], this.componentDB = /* @__PURE__ */ new Map();
        }
        getTheme() {
          return this.theme;
        }
        setTheme(e) {
          var t = this.theme;
          this.theme = e, (e = this.workspace.getInjectionDiv()) && (t && (t = t.getClassName()) && F(e, t), (t = this.theme.getClassName()) && R(e, t));
          for (let s = 0, o; o = this.subscribedWorkspaces[s]; s++) o.refreshTheme();
          for (const [
            s,
            o
          ] of this.componentDB) for (const i of o) {
            e = i.element, t = i.propertyName;
            const r = this.theme && this.theme.getComponentStyle(s);
            e.style.setProperty(t, r || "");
          }
          for (const s of this.subscribedWorkspaces) s.hideChaff();
        }
        subscribeWorkspace(e) {
          this.subscribedWorkspaces.push(e);
        }
        unsubscribeWorkspace(e) {
          if (!Ve(this.subscribedWorkspaces, e)) throw Error("Cannot unsubscribe a workspace that hasn't been subscribed.");
        }
        subscribe(e, t, s) {
          this.componentDB.has(t) || this.componentDB.set(
            t,
            []
          ), this.componentDB.get(t).push({ element: e, propertyName: s }), t = this.theme && this.theme.getComponentStyle(t), e.style.setProperty(s, t || "");
        }
        unsubscribe(e) {
          if (e) for (const [t, s] of this.componentDB) {
            for (let o = s.length - 1; o >= 0; o--) s[o].element === e && s.splice(o, 1);
            s.length || this.componentDB.delete(t);
          }
        }
        dispose() {
          this.subscribedWorkspaces.length = 0, this.componentDB.clear();
        }
      }, ka = "VARIABLE_DYNAMIC", fs = { CATEGORY_NAME: ka };
      fs.flyoutCategory = Wc, fs.flyoutCategoryBlocks = Xc, fs.internalFlyoutCategory = nr, fs.onCreateVariableButtonClick_Colour = ir, fs.onCreateVariableButtonClick_Number = or, fs.onCreateVariableButtonClick_String = sr;
      var Mg = class {
        canConnect(e, t, s, o) {
          return this.canConnectWithReason(e, t, s, o) === U.CAN_CONNECT;
        }
        canConnectWithReason(e, t, s, o) {
          const i = this.doSafetyChecks(e, t);
          return i !== U.CAN_CONNECT ? i : this.doTypeChecks(e, t) ? s && !this.doDragChecks(e, t, o || 0) ? U.REASON_DRAG_CHECKS_FAILED : U.CAN_CONNECT : U.REASON_CHECKS_FAILED;
        }
        getErrorMessage(e, t, s) {
          switch (e) {
            case U.REASON_SELF_CONNECTION:
              return "Attempted to connect a block to itself.";
            case U.REASON_DIFFERENT_WORKSPACES:
              return "Blocks not on same workspace.";
            case U.REASON_WRONG_TYPE:
              return "Attempt to connect incompatible types.";
            case U.REASON_TARGET_NULL:
              return "Target connection is null.";
            case U.REASON_CHECKS_FAILED:
              return "Connection checks failed. " + (t + " expected " + t.getCheck() + ", found " + s.getCheck());
            case U.REASON_SHADOW_PARENT:
              return "Connecting non-shadow to shadow block.";
            case U.REASON_DRAG_CHECKS_FAILED:
              return "Drag checks failed.";
            case U.REASON_PREVIOUS_AND_OUTPUT:
              return "Block would have an output and a previous connection.";
            default:
              return "Unknown connection failure: this should never happen!";
          }
        }
        doSafetyChecks(e, t) {
          if (!e || !t) return U.REASON_TARGET_NULL;
          let s, o, i;
          return e.isSuperior() ? (s = e.getSourceBlock(), o = t.getSourceBlock(), i = t) : (o = e.getSourceBlock(), s = t.getSourceBlock(), i = e, e = t), s === o ? U.REASON_SELF_CONNECTION : i.type !== qs[e.type] ? U.REASON_WRONG_TYPE : s.workspace !== o.workspace ? U.REASON_DIFFERENT_WORKSPACES : s.isShadow() && !o.isShadow() ? U.REASON_SHADOW_PARENT : i.type === C.OUTPUT_VALUE && o.previousConnection && o.previousConnection.isConnected() || i.type === C.PREVIOUS_STATEMENT && o.outputConnection && o.outputConnection.isConnected() ? U.REASON_PREVIOUS_AND_OUTPUT : U.CAN_CONNECT;
        }
        doTypeChecks(e, t) {
          if (e = e.getCheck(), t = t.getCheck(), !e || !t) return !0;
          for (let s = 0; s < e.length; s++) if (t.includes(e[s])) return !0;
          return !1;
        }
        doDragChecks(e, t, s) {
          if (e.distanceFrom(t) > s || t.getSourceBlock().isInsertionMarker()) return !1;
          switch (t.type) {
            case C.PREVIOUS_STATEMENT:
              return this.canConnectToPrevious_(e, t);
            case C.OUTPUT_VALUE:
              if (t.isConnected() && !t.targetBlock().isInsertionMarker() || e.isConnected()) return !1;
              break;
            case C.INPUT_VALUE:
              if (t.isConnected() && !t.targetBlock().isMovable() && !t.targetBlock().isShadow()) return !1;
              break;
            case C.NEXT_STATEMENT:
              if (t.isConnected() && !e.getSourceBlock().nextConnection && !t.targetBlock().isShadow() && t.targetBlock().nextConnection || t.targetBlock() && !t.targetBlock().isMovable() && !t.targetBlock().isShadow()) return !1;
              break;
            default:
              return !1;
          }
          return !Pi.includes(t);
        }
        canConnectToPrevious_(e, t) {
          return e.targetConnection || Pi.includes(t) ? !1 : t.targetConnection ? (e = t.targetBlock(), e.isInsertionMarker() ? !e.getPreviousBlock() : !1) : !0;
        }
      };
      c(f.CONNECTION_CHECKER, We, Mg);
      var Jo = class {
        get isFlyout() {
          return this.internalIsFlyout;
        }
        get isMutator() {
          return this.internalIsMutator;
        }
        constructor(e) {
          this.isClearing = this.internalIsMutator = this.internalIsFlyout = this.rendered = !1, this.MAX_UNDO = 1024, this.connectionDBList = [], this.topBlocks = [], this.topComments = [], this.commentDB = /* @__PURE__ */ new Map(), this.listeners = [], this.undoStack_ = [], this.redoStack_ = [], this.blockDB = /* @__PURE__ */ new Map(), this.typedBlocksDB = /* @__PURE__ */ new Map(), this.procedureMap = new Cg(), this.readOnly = !1, this.potentialVariableMap = null, this.id = Qe(), ui(this), this.options = e || new Ct({}), this.RTL = !!this.options.RTL, this.horizontalLayout = !!this.options.horizontalLayout, this.toolboxPosition = this.options.toolboxPosition, this.connectionChecker = new (Ee(
            f.CONNECTION_CHECKER,
            this.options,
            !0
          ))(this), this.variableMap = new (this.getVariableMapClass())(this), this.setIsReadOnly(this.options.readOnly);
        }
        dispose() {
          this.listeners.length = 0, this.clear(), po(this);
        }
        sortObjects(e, t) {
          const s = (o) => ({ getBoundingRectangle: () => {
            const i = o.getRelativeToSurfaceXY();
            return new M(i.y, i.y, i.x, i.x);
          }, moveBy: () => {
          } });
          return this.sortByOrigin(s(e), s(t));
        }
        sortByOrigin(e, t) {
          const s = Math.sin(Mn(Jo.SCAN_ANGLE)) * (this.RTL ? -1 : 1);
          return e = e.getBoundingRectangle().getOrigin(), t = t.getBoundingRectangle().getOrigin(), e.y + s * e.x - (t.y + s * t.x);
        }
        addTopBlock(e) {
          this.topBlocks.push(e);
        }
        removeTopBlock(e) {
          if (!Ve(this.topBlocks, e)) throw Error("Block not present in workspace's list of top-most blocks.");
        }
        getTopBlocks(e = !1) {
          const t = [].concat(this.topBlocks);
          return e && t.length > 1 && t.sort(this.sortObjects.bind(this)), t;
        }
        addTypedBlock(e) {
          this.typedBlocksDB.has(e.type) || this.typedBlocksDB.set(
            e.type,
            []
          ), this.typedBlocksDB.get(e.type).push(e);
        }
        removeTypedBlock(e) {
          Ve(this.typedBlocksDB.get(e.type), e), this.typedBlocksDB.get(e.type).length || this.typedBlocksDB.delete(e.type);
        }
        getBlocksByType(e, t = !1) {
          return this.typedBlocksDB.has(e) ? (e = this.typedBlocksDB.get(e).slice(0), t && e && e.length > 1 && e.sort(this.sortObjects.bind(this)), e.filter((s) => !s.isInsertionMarker())) : [];
        }
        addTopComment(e) {
          this.topComments.push(e), this.commentDB.has(e.id) && console.warn('Overriding an existing comment on this workspace, with id "' + e.id + '"'), this.commentDB.set(e.id, e);
        }
        removeTopComment(e) {
          if (!Ve(this.topComments, e)) throw Error("Comment not present in workspace's list of top-most comments.");
          this.commentDB.delete(e.id);
        }
        getTopComments(e = !1) {
          const t = [].concat(this.topComments);
          return e && t.length > 1 && t.sort(this.sortObjects.bind(this)), t;
        }
        getAllBlocks(e = !1) {
          if (e) {
            var t = this.getTopBlocks(!0);
            e = [];
            for (let s = 0; s < t.length; s++) e.push(...t[s].getDescendants(!0));
          } else for (e = this.getTopBlocks(!1), t = 0; t < e.length; t++) e.push(...e[t].getChildren(!1));
          return e.filter((s) => !s.isInsertionMarker());
        }
        clear() {
          this.isClearing = !0;
          try {
            const e = n.getGroup$$module$build$src$core$events$utils();
            for (e || n.setGroup$$module$build$src$core$events$utils(!0); this.topBlocks.length; ) this.topBlocks[0].dispose(!1);
            for (; this.topComments.length; ) this.topComments[this.topComments.length - 1].dispose();
            n.setGroup$$module$build$src$core$events$utils(e), this.isFlyout || this.variableMap.clear(), this.potentialVariableMap && this.potentialVariableMap.clear();
          } finally {
            this.isClearing = !1;
          }
        }
        renameVariableById(e, t) {
          fe("Blockly.Workspace.renameVariableById", "v12", "v13", "Blockly.Workspace.getVariableMap().renameVariable"), (e = this.variableMap.getVariableById(e)) && this.variableMap.renameVariable(e, t);
        }
        createVariable(e, t, s) {
          return fe("Blockly.Workspace.createVariable", "v12", "v13", "Blockly.Workspace.getVariableMap().createVariable"), this.variableMap.createVariable(e, t ?? void 0, s ?? void 0);
        }
        getVariableUsesById(e) {
          return fe(
            "Blockly.Workspace.getVariableUsesById",
            "v12",
            "v13",
            "Blockly.Variables.getVariableUsesById"
          ), fo(this, e);
        }
        deleteVariableById(e) {
          fe("Blockly.Workspace.deleteVariableById", "v12", "v13", "Blockly.Workspace.getVariableMap().deleteVariable");
          const t = this.variableMap.getVariableById(e);
          t ? n.deleteVariable$$module$build$src$core$variables(this, t) : console.warn(`Can't delete non-existent variable: ${e}`);
        }
        getVariable(e, t) {
          return fe(
            "Blockly.Workspace.getVariable",
            "v12",
            "v13",
            "Blockly.Workspace.getVariableMap().getVariable"
          ), this.variableMap.getVariable(e, t);
        }
        getVariableById(e) {
          return fe("Blockly.Workspace.getVariableById", "v12", "v13", "Blockly.Workspace.getVariableMap().getVariableById"), this.variableMap.getVariableById(e);
        }
        getVariablesOfType(e) {
          return fe("Blockly.Workspace.getVariablesOfType", "v12", "v13", "Blockly.Workspace.getVariableMap().getVariablesOfType"), this.variableMap.getVariablesOfType(e ?? "");
        }
        getAllVariables() {
          return fe("Blockly.Workspace.getAllVariables", "v12", "v13", "Blockly.Workspace.getVariableMap().getAllVariables"), this.variableMap.getAllVariables();
        }
        getAllVariableNames() {
          return fe("Blockly.Workspace.getAllVariableNames", "v12", "v13", "Blockly.Workspace.getVariableMap().getAllVariables"), this.variableMap.getAllVariables().map((e) => e.getName());
        }
        getWidth() {
          return 0;
        }
        newBlock(e, t) {
          throw Error("The implementation of newBlock should be monkey-patched in by blockly.ts");
        }
        newComment(e) {
          throw Error("The implementation of newComment should be monkey-patched in by blockly.ts");
        }
        remainingCapacity() {
          return isNaN(this.options.maxBlocks) ? 1 / 0 : this.options.maxBlocks - this.getAllBlocks(!1).length;
        }
        remainingCapacityOfType(e) {
          return this.options.maxInstances ? (this.options.maxInstances[e] !== void 0 ? this.options.maxInstances[e] : 1 / 0) - this.getBlocksByType(e, !1).length : 1 / 0;
        }
        isCapacityAvailable(e) {
          if (!this.hasBlockLimits()) return !0;
          let t = 0;
          for (const s in e) {
            if (e[s] > this.remainingCapacityOfType(s)) return !1;
            t += e[s];
          }
          return !(t > this.remainingCapacity());
        }
        hasBlockLimits() {
          return this.options.maxBlocks !== 1 / 0 || !!this.options.maxInstances;
        }
        getUndoStack() {
          return this.undoStack_;
        }
        getRedoStack() {
          return this.redoStack_;
        }
        undo(e) {
          var t = e ? this.redoStack_ : this.undoStack_, s = e ? this.undoStack_ : this.redoStack_;
          const o = t.pop();
          if (o) {
            for (var i = [o]; t.length && o.group && o.group === t[t.length - 1].group; ) {
              const r = t.pop();
              r && i.push(r);
            }
            for (t = 0; t < i.length; t++) s.push(i[t]);
            n.setRecordUndo$$module$build$src$core$events$utils(!1);
            try {
              for (s = 0; s < i.length; s++) i[s].run(e);
            } finally {
              n.setRecordUndo$$module$build$src$core$events$utils(!0);
            }
          }
        }
        clearUndo() {
          this.undoStack_.length = 0, this.redoStack_.length = 0, ci();
        }
        addChangeListener(e) {
          return this.listeners.push(e), e;
        }
        removeChangeListener(e) {
          Ve(this.listeners, e);
        }
        fireChangeListener(e) {
          if (e.recordUndo) for (this.undoStack_.push(e), this.redoStack_.length = 0; this.undoStack_.length > this.MAX_UNDO && this.MAX_UNDO >= 0; ) this.undoStack_.shift();
          for (let t = 0; t < this.listeners.length; t++) (0, this.listeners[t])(e);
        }
        getBlockById(e) {
          return this.blockDB.get(e) || null;
        }
        setBlockById(e, t) {
          this.blockDB.set(e, t);
        }
        removeBlockById(e) {
          this.blockDB.delete(e);
        }
        getCommentById(e) {
          let t;
          return (t = this.commentDB.get(e)) != null ? t : null;
        }
        allInputsFilled(e) {
          const t = this.getTopBlocks(!1);
          for (let s = 0; s < t.length; s++) if (!t[s].allInputsFilled(e)) return !1;
          return !0;
        }
        getPotentialVariableMap() {
          return this.potentialVariableMap;
        }
        createPotentialVariableMap() {
          this.potentialVariableMap = new (this.getVariableMapClass())(this, !0);
        }
        getVariableMap() {
          return this.variableMap;
        }
        setVariableMap(e) {
          this.variableMap = e;
        }
        getProcedureMap() {
          return this.procedureMap;
        }
        getRootWorkspace() {
          let e = null;
          const t = this.options.parentWorkspace;
          return this.isFlyout ? t && t.options && (e = t.options.parentWorkspace) : t && (e = t), e;
        }
        static getById(e) {
          return mt(e);
        }
        static getAll() {
          return ns();
        }
        getVariableMapClass() {
          const e = Ee(
            f.VARIABLE_MAP,
            this.options,
            !0
          );
          if (!e) throw Error("No variable map is registered.");
          return e;
        }
        isReadOnly() {
          return this.readOnly;
        }
        setIsReadOnly(e) {
          this.readOnly = e, this.options.readOnly = e;
        }
      };
      Jo.SCAN_ANGLE = 3;
      var ym = 100, Dg = class {
        constructor(e) {
          this.parentWorkspace = e, this.sounds = /* @__PURE__ */ new Map(), this.lastSound = null, this.muted = !1, window.AudioContext && (this.context = new AudioContext());
        }
        dispose() {
          this.sounds.clear();
          let e;
          (e = this.context) == null || e.close();
        }
        load(e, t) {
          const s = this;
          return (0, $.asyncExecutePromiseGeneratorFunction)(function* () {
            if (e.length) {
              var o = yield (yield fetch(e[0])).arrayBuffer(), i;
              (i = s.context) == null || i.decodeAudioData(o, (r) => {
                s.sounds.set(t, r);
              });
            }
          });
        }
        play(e, t) {
          const s = this;
          return (0, $.asyncExecutePromiseGeneratorFunction)(function* () {
            if (!s.muted && t !== 0 && s.context) {
              var o = s.sounds.get(e);
              if (o) {
                const u = /* @__PURE__ */ new Date();
                if (!(s.lastSound !== null && u.getTime() - s.lastSound.getTime() < ym)) {
                  s.lastSound = u, s.context.state === "suspended" && (yield s.context.resume());
                  var i = s.context.createBufferSource(), r = s.context.createGain();
                  r.gain.value = t ?? 1, r.connect(s.context.destination), i.buffer = o, i.connect(r), i.addEventListener("ended", () => {
                    i.disconnect(), r.disconnect();
                  }), i.start();
                }
              } else s.parentWorkspace && s.parentWorkspace.getAudioManager().play(e, t);
            }
          });
        }
        setMuted(e) {
          this.muted = e;
        }
        getMuted() {
          return this.muted;
        }
      }, vm = 20, we = class extends Jo {
        constructor(e) {
          super(e), this.resizeHandlerWrapper = null, this.resizesEnabled = this.visible = this.rendered = !0, this.startScrollY = this.startScrollX = this.scrollY = this.scrollX = 0, this.oldScale = this.scale = 1, this.oldLeft = this.oldTop = 0, this.inverseScreenCTM = this.targetWorkspace = this.dummyWheelListener = this.configureContextMenu = this.lastRecordedPageScroll = this.injectionDiv = this.currentGesture_ = this.toolbox = this.flyout = this.scrollbar = this.trashcan = null, this.inverseScreenCTMDirty = !0, this.highlightedBlocks = [], this.toolboxCategoryCallbacks = /* @__PURE__ */ new Map(), this.flyoutButtonCallbacks = /* @__PURE__ */ new Map(), this.cachedParentSvg = null, this.keyboardMoveInProgress = this.keyboardAccessibilityMode = !1, this.topBoundedElements = [], this.dragTargetAreas = [], this.zoomControls_ = this.layerManager = null, this.navigator = new Ea(), this.metricsManager = new (Ee(
            f.METRICS_MANAGER,
            e,
            !0
          ))(this), this.getMetrics = e.getMetrics || this.metricsManager.getMetrics.bind(this.metricsManager), this.setMetrics = e.setMetrics || we.setTopLevelWorkspaceMetrics, this.componentManager = new Q(), this.connectionDBList = Xo.init(this.connectionChecker), this.audioManager = new Dg(e.parentWorkspace), this.grid = this.options.gridPattern ? new ba(this.options.gridPattern, e.gridOptions) : null, this.markerManager = new Sa(this), ae && vn && this.registerToolboxCategoryCallback(Yu, vn), fs && nr && this.registerToolboxCategoryCallback(
            ka,
            nr
          ), Ne && er && (this.registerToolboxCategoryCallback(Jr, er), this.addChangeListener(Hc)), this.addChangeListener(this.variableChangeCallback.bind(this)), this.themeManager_ = this.options.parentWorkspace ? this.options.parentWorkspace.getThemeManager() : new wg(this, this.options.theme || Fr), this.themeManager_.subscribeWorkspace(this);
          let t;
          this.renderer = Vc(this.options.renderer || "geras", this.getTheme(), (t = this.options.rendererOverrides) != null ? t : void 0), this.cachedParentSvgSize = new D(0, 0);
        }
        getMarkerManager() {
          return this.markerManager;
        }
        getMetricsManager() {
          return this.metricsManager;
        }
        setMetricsManager(e) {
          this.metricsManager = e, this.getMetrics = this.metricsManager.getMetrics.bind(this.metricsManager);
        }
        getComponentManager() {
          return this.componentManager;
        }
        getMarker(e) {
          return this.markerManager.getMarker(e);
        }
        getCursor() {
          return this.markerManager.getCursor();
        }
        getRenderer() {
          return this.renderer;
        }
        getThemeManager() {
          return this.themeManager_;
        }
        getTheme() {
          return this.themeManager_.getTheme();
        }
        setTheme(e) {
          e || (e = Fr), this.themeManager_.setTheme(e);
        }
        refreshTheme() {
          if (this.svgGroup_) {
            var e = this.options.parentWorkspace === null;
            this.renderer.refreshDom(this.svgGroup_, this.getTheme(), e ? this.getInjectionDiv() : void 0);
          }
          this.updateBlockStyles(this.getAllBlocks(!1).filter((t) => !!t.getStyleName())), this.refreshToolboxSelection(), this.toolbox && this.toolbox.refreshTheme(), this.isVisible() && this.setVisible(!0), e = new (L(m.THEME_CHANGE))(this.getTheme().name, this.id), k(e);
        }
        updateBlockStyles(e) {
          for (let t = 0, s; s = e[t]; t++) {
            const o = s.getStyleName();
            o && s.setStyle(o);
          }
        }
        getInverseScreenCTM() {
          if (this.inverseScreenCTMDirty) {
            const e = this.getParentSvg().getScreenCTM();
            e && (this.inverseScreenCTM = e.inverse(), this.inverseScreenCTMDirty = !1);
          }
          return this.inverseScreenCTM;
        }
        updateInverseScreenCTM() {
          this.inverseScreenCTMDirty = !0;
        }
        isVisible() {
          return this.visible;
        }
        getSvgXY(e) {
          let t = 0, s = 0, o = 1;
          (this.getCanvas().contains(e) || this.getBubbleCanvas().contains(e)) && (o = this.scale);
          do {
            const i = $i(e);
            (e === this.getCanvas() || e === this.getBubbleCanvas()) && (o = 1), t += i.x * o, s += i.y * o, e = e.parentNode;
          } while (e && e !== this.getParentSvg() && e !== this.getInjectionDiv());
          return new I(t, s);
        }
        getCachedParentSvgSize() {
          const e = this.cachedParentSvgSize;
          return new D(e.width, e.height);
        }
        getOriginOffsetInPixels() {
          return _n(this.getCanvas());
        }
        getInjectionDiv() {
          if (!this.injectionDiv) {
            let e = this.svgGroup_;
            for (; e; ) {
              if ((" " + (e.getAttribute("class") || "") + " ").includes(" injectionDiv ")) {
                this.injectionDiv = e;
                break;
              }
              e = e.parentNode;
            }
          }
          return this.injectionDiv;
        }
        getSvgGroup() {
          return this.svgGroup_;
        }
        getBlockCanvas() {
          return this.getCanvas();
        }
        setResizeHandlerWrapper(e) {
          this.resizeHandlerWrapper = e;
        }
        createDom(e, t) {
          return this.injectionDiv || (this.injectionDiv = t ?? null), this.svgGroup_ = b(g.G, { class: "blocklyWorkspace", id: this.id }), t && ie(
            this.svgGroup_,
            ee.LABEL,
            n.Msg$$module$build$src$core$msg.WORKSPACE_ARIA_LABEL
          ), e && (this.svgBackground_ = b(g.RECT, { height: "100%", width: "100%", class: e }, this.svgGroup_), e === "blocklyMainBackground" && this.grid ? this.svgBackground_.style.fill = "var(--blocklyGridPattern)" : this.themeManager_.subscribe(this.svgBackground_, "workspaceBackgroundColour", "fill")), this.layerManager = new Om(this), this.svgBlockCanvas_ = this.layerManager.getBlockLayer(), this.svgBubbleCanvas_ = this.layerManager.getBubbleLayer(), this.isFlyout || (w(this.svgGroup_, "pointerdown", this, this.onMouseDown, !1), this.dummyWheelListener = () => {
          }, document.body.addEventListener("wheel", this.dummyWheelListener, { passive: !0 }), w(this.svgGroup_, "wheel", this, this.onMouseWheel, !1, { passive: !1 })), this.options.hasCategories && (this.toolbox = new (Ee(f.TOOLBOX, this.options, !0))(this)), this.grid && this.grid.update(this.scale), this.recordDragTargets(), (e = Ee(f.CURSOR, this.options)) && this.markerManager.setCursor(new e(this)), e = this.options.parentWorkspace === null, this.renderer.createDom(this.svgGroup_, this.getTheme(), e ? this.getInjectionDiv() : void 0), n.getFocusManager$$module$build$src$core$focus_manager().registerTree(
            this,
            !!this.injectionDiv || this.isFlyout
          ), this.svgGroup_;
        }
        dispose() {
          if (this.rendered = !1, this.currentGesture_ && this.currentGesture_.cancel(), this.svgGroup_ && G(this.svgGroup_), this.toolbox && (this.toolbox.dispose(), this.toolbox = null), this.flyout && (this.flyout.dispose(), this.flyout = null), this.trashcan && (this.trashcan.dispose(), this.trashcan = null), this.scrollbar && (this.scrollbar.dispose(), this.scrollbar = null), this.zoomControls_ && this.zoomControls_.dispose(), this.audioManager && this.audioManager.dispose(), this.grid && (this.grid = null), this.renderer.dispose(), this.markerManager.dispose(), super.dispose(), this.themeManager_ && (this.themeManager_.unsubscribeWorkspace(this), this.themeManager_.unsubscribe(this.svgBackground_), this.options.parentWorkspace || this.themeManager_.dispose()), this.connectionDBList.length = 0, this.toolboxCategoryCallbacks.clear(), this.flyoutButtonCallbacks.clear(), !this.options.parentWorkspace) {
            const e = this.getParentSvg();
            e && e.parentNode && G(e.parentNode);
          }
          this.resizeHandlerWrapper && (H(this.resizeHandlerWrapper), this.resizeHandlerWrapper = null), this.dummyWheelListener && (document.body.removeEventListener("wheel", this.dummyWheelListener), this.dummyWheelListener = null), n.getFocusManager$$module$build$src$core$focus_manager().isRegistered(this) && n.getFocusManager$$module$build$src$core$focus_manager().unregisterTree(this);
        }
        addTrashcan() {
          this.trashcan = we.newTrashcan(this);
          const e = this.trashcan.createDom();
          this.svgGroup_.insertBefore(e, this.getCanvas());
        }
        static newTrashcan(e) {
          throw Error("The implementation of newTrashcan should be monkey-patched in by blockly.ts");
        }
        addZoomControls() {
          this.zoomControls_ = new ap(this);
          const e = this.zoomControls_.createDom();
          this.svgGroup_.appendChild(e);
        }
        copyOptionsForFlyout() {
          return new Ct({
            parentWorkspace: this,
            rtl: this.RTL,
            oneBasedIndex: this.options.oneBasedIndex,
            horizontalLayout: this.horizontalLayout,
            renderer: this.options.renderer,
            rendererOverrides: this.options.rendererOverrides,
            plugins: this.options.plugins,
            modalInputs: this.options.modalInputs,
            move: { scrollbars: !0 }
          });
        }
        addFlyout(e) {
          const t = this.copyOptionsForFlyout();
          return t.toolboxPosition = this.options.toolboxPosition, this.flyout = this.horizontalLayout ? new (Ee(f.FLYOUTS_HORIZONTAL_TOOLBOX, this.options, !0))(t) : new (Ee(
            f.FLYOUTS_VERTICAL_TOOLBOX,
            this.options,
            !0
          ))(t), this.flyout.autoClose = !1, this.flyout.getWorkspace().setVisible(!0), this.flyout.createDom(e);
        }
        getFlyout(e) {
          return this.flyout || e ? this.flyout : this.toolbox ? this.toolbox.getFlyout() : null;
        }
        getToolbox() {
          return this.toolbox;
        }
        updateScreenCalculations() {
          this.updateInverseScreenCTM(), this.recordDragTargets();
        }
        resizeContents() {
          this.resizesEnabled && this.rendered && (this.scrollbar && this.scrollbar.resize(), this.updateInverseScreenCTM());
        }
        resize() {
          this.toolbox ? this.toolbox.position() : this.flyout && this.flyout.position();
          const e = this.componentManager.getComponents(Q.Capability.POSITIONABLE, !0), t = this.getMetricsManager().getUiMetrics(), s = [];
          for (let o = 0, i; i = e[o]; o++) {
            i.position(t, s);
            const r = i.getBoundingRectangle();
            r && s.push(r);
          }
          this.scrollbar && this.scrollbar.resize(), this.updateScreenCalculations();
        }
        updateScreenCalculationsIfScrolled() {
          const e = bl();
          I.equals(
            this.lastRecordedPageScroll,
            e
          ) || (this.lastRecordedPageScroll = e, this.updateScreenCalculations());
        }
        getLayerManager() {
          return this.layerManager;
        }
        getCanvas() {
          return this.layerManager.getBlockLayer();
        }
        setCachedParentSvgSize(e, t) {
          const s = this.getParentSvg();
          e != null && (this.cachedParentSvgSize.width = e, s.setAttribute("data-cached-width", `${e}`)), t != null && (this.cachedParentSvgSize.height = t, s.setAttribute("data-cached-height", `${t}`));
        }
        getBubbleCanvas() {
          return this.layerManager.getBubbleLayer();
        }
        getParentSvg() {
          if (!this.cachedParentSvg) {
            let e = this.svgGroup_;
            for (; e; ) {
              if (e.tagName === "svg") {
                this.cachedParentSvg = e;
                break;
              }
              e = e.parentNode;
            }
          }
          return this.cachedParentSvg;
        }
        maybeFireViewportChangeEvent() {
          if (j()) {
            var e = this.scale, t = -this.scrollY, s = -this.scrollX;
            if (!(e === this.oldScale && Math.abs(t - this.oldTop) < 1 && Math.abs(s - this.oldLeft) < 1)) {
              var o = new (L(m.VIEWPORT_CHANGE))(t, s, e, this.id, this.oldScale);
              this.oldScale = e, this.oldTop = t, this.oldLeft = s, k(o);
            }
          }
        }
        translate(e, t) {
          let s;
          (s = this.layerManager) == null || s.translateLayers(new I(e, t), this.scale);
          let o;
          (o = this.grid) == null || o.moveTo(e, t), this.maybeFireViewportChangeEvent();
        }
        getWidth() {
          const e = this.getMetrics();
          return e ? e.viewWidth / this.scale : 0;
        }
        setVisible(e) {
          this.visible = e, this.svgGroup_ && (this.scrollbar && this.scrollbar.setContainerVisible(e), this.getFlyout() && this.getFlyout().setContainerVisible(e), this.getParentSvg().style.display = e ? "block" : "none", this.toolbox && this.toolbox.setVisible(e), e || this.hideChaff(!0));
        }
        render() {
          const e = this.getAllBlocks(!1);
          for (let t = e.length - 1; t >= 0; t--) e[t].queueRender();
          this.getTopBlocks().flatMap((t) => t.getDescendants(!1)).filter((t) => t.isInsertionMarker()).forEach((t) => t.queueRender());
        }
        highlightBlock(e, t) {
          if (t === void 0) {
            for (let s = 0, o; o = this.highlightedBlocks[s]; s++) o.setHighlighted(!1);
            this.highlightedBlocks.length = 0;
          }
          (e = e ? this.getBlockById(e) : null) && ((t = t === void 0 || t) ? this.highlightedBlocks.includes(e) || this.highlightedBlocks.push(e) : Ve(this.highlightedBlocks, e), e.setHighlighted(t));
        }
        variableChangeCallback(e) {
          switch (e.type) {
            case m.VAR_CREATE:
            case m.VAR_DELETE:
            case m.VAR_RENAME:
            case m.VAR_TYPE_CHANGE:
              this.refreshToolboxSelection();
          }
        }
        refreshToolboxSelection() {
          const e = this.isFlyout ? this.targetWorkspace : this;
          e && !e.currentGesture_ && e.toolbox && e.toolbox.getFlyout() && e.toolbox.refreshSelection();
        }
        recordDragTargets() {
          const e = this.componentManager.getComponents(Q.Capability.DRAG_TARGET, !0);
          this.dragTargetAreas = [];
          for (let t = 0, s; s = e[t]; t++) {
            const o = s.getClientRect();
            o && this.dragTargetAreas.push({ component: s, clientRect: o });
          }
        }
        newBlock(e, t) {
          throw Error("The implementation of newBlock should be monkey-patched in by blockly.ts");
        }
        newComment(e) {
          throw Error("The implementation of newComment should be monkey-patched in by blockly.ts");
        }
        getDragTarget(e) {
          for (let t = 0, s; s = this.dragTargetAreas[t]; t++) if (s.clientRect.contains(e.clientX, e.clientY)) return s.component;
          return null;
        }
        onMouseDown(e) {
          const t = this.getGesture(e);
          t && t.handleWsStart(e, this);
        }
        startDrag(e, t) {
          Xn(this, e, t);
        }
        moveDrag(e) {
          return zn(this, e);
        }
        setKeyboardMoveInProgress(e) {
          this.keyboardMoveInProgress = e;
        }
        isDragging() {
          return this.keyboardMoveInProgress || this.currentGesture_ !== null && this.currentGesture_.isDragging();
        }
        isDraggable() {
          return this.options.moveOptions && this.options.moveOptions.drag;
        }
        isMovable() {
          return this.options.moveOptions && !!this.options.moveOptions.scrollbars || this.options.moveOptions && this.options.moveOptions.wheel || this.options.moveOptions && this.options.moveOptions.drag || this.options.zoomOptions && this.options.zoomOptions.wheel || this.options.zoomOptions && this.options.zoomOptions.pinch;
        }
        isMovableHorizontally() {
          const e = !!this.scrollbar;
          return this.isMovable() && (!e || e && this.scrollbar.canScrollHorizontally());
        }
        isMovableVertically() {
          const e = !!this.scrollbar;
          return this.isMovable() && (!e || e && this.scrollbar.canScrollVertically());
        }
        onMouseWheel(e) {
          if (jr.inProgress()) e.preventDefault(), e.stopPropagation();
          else {
            var t = this.options.zoomOptions && this.options.zoomOptions.wheel, s = this.options.moveOptions && this.options.moveOptions.wheel;
            if (t || s) {
              var o = Os(e);
              if (_r) var i = e.metaKey;
              t && (e.ctrlKey || i || !s) ? (o = -o.y / 50, t = ts(e, this.getParentSvg(), this.getInverseScreenCTM()), this.zoom(t.x, t.y, o)) : (t = this.scrollX - o.x, s = this.scrollY - o.y, e.shiftKey && !o.x && (t = this.scrollX - o.y, s = this.scrollY), this.scroll(t, s)), e.preventDefault();
            }
          }
        }
        getBlocksBoundingBox() {
          const e = this.getTopBoundedElements();
          if (!e.length) return new M(0, 0, 0, 0);
          const t = e[0].getBoundingRectangle();
          for (let o = 1; o < e.length; o++) {
            var s = e[o];
            s.isInsertionMarker && s.isInsertionMarker() || (s = s.getBoundingRectangle(), s.top < t.top && (t.top = s.top), s.bottom > t.bottom && (t.bottom = s.bottom), s.left < t.left && (t.left = s.left), s.right > t.right && (t.right = s.right));
          }
          return t;
        }
        cleanUp() {
          this.setResizesEnabled(!1);
          const e = n.getGroup$$module$build$src$core$events$utils();
          e || n.setGroup$$module$build$src$core$events$utils(!0);
          var t = this.getTopBlocks(!0), s = t.filter((u) => u.isMovable());
          const o = t.filter((u) => !u.isMovable()).map((u) => u.getBoundingRectangle());
          t = function(u) {
            for (const h of o) if (u.intersects(h)) return h;
            return null;
          };
          var i = 0;
          const r = this.renderer.getConstants().MIN_BLOCK_HEIGHT;
          for (const u of s) {
            for (s = u.getBoundingRectangle(), u.moveBy(-s.left, i - s.top, ["cleanup"]), u.snapToGrid(), s = u.getBoundingRectangle(), i = t(s); i != null; ) i = i.top + i.getHeight() + r, u.moveBy(0, i - s.top, ["cleanup"]), u.snapToGrid(), s = u.getBoundingRectangle(), i = t(s);
            i = u.getRelativeToSurfaceXY().y + u.getHeightWidth().height + r;
          }
          n.setGroup$$module$build$src$core$events$utils(e), this.setResizesEnabled(!0);
        }
        showContextMenu(e) {
          if (!this.isReadOnly() && !this.isFlyout) {
            var t = x.registry.getContextMenuOptions({ workspace: this, focusedNode: this }, e);
            this.configureContextMenu && this.configureContextMenu(t, e);
            var s = e instanceof PointerEvent ? new I(e.clientX, e.clientY) : go(this, new I(
              5,
              5
            ));
            Co(e, t, this.RTL, this, s);
          }
        }
        updateToolbox(e) {
          if (e = mn(e)) {
            if (!this.options.languageTree) throw Error("Existing toolbox is null.  Can't create new toolbox.");
            if (Tn(e)) {
              if (!this.toolbox) throw Error("Existing toolbox has no categories.  Can't change mode.");
              this.options.languageTree = e, this.toolbox.render(e);
            } else {
              if (!this.flyout) throw Error("Existing toolbox has categories.  Can't change mode.");
              this.options.languageTree = e, this.flyout.show(e);
            }
          } else if (this.options.languageTree) throw Error("Can't nullify an existing toolbox.");
        }
        markFocused() {
          this.options.parentWorkspace ? this.options.parentWorkspace.markFocused() : (a(this), this.getParentSvg().focus({ preventScroll: !0 }));
        }
        zoom(e, t, s) {
          s = Math.pow(this.options.zoomOptions.scaleSpeed, s);
          const o = this.scale * s;
          if (this.scale !== o) {
            o > this.options.zoomOptions.maxScale ? s = this.options.zoomOptions.maxScale / this.scale : o < this.options.zoomOptions.minScale && (s = this.options.zoomOptions.minScale / this.scale);
            var i = this.getCanvas().getCTM(), r = this.getParentSvg().createSVGPoint();
            r.x = e, r.y = t, r = r.matrixTransform(i.inverse()), e = r.x, t = r.y, i = i.translate(e * (1 - s), t * (1 - s)).scale(s), this.scrollX = i.e, this.scrollY = i.f, this.setScale(o);
          }
        }
        zoomCenter(e) {
          var t = this.getMetrics();
          let s;
          this.flyout ? (s = t.svgWidth ? t.svgWidth / 2 : 0, t = t.svgHeight ? t.svgHeight / 2 : 0) : (s = t.viewWidth / 2 + t.absoluteLeft, t = t.viewHeight / 2 + t.absoluteTop), this.zoom(s, t, e);
        }
        zoomToFit() {
          if (this.isMovable()) {
            var e = this.getMetrics(), t = e.viewWidth;
            e = e.viewHeight;
            var s = this.getBlocksBoundingBox(), o = vm * 2, i = s.right - s.left + o;
            if (s = s.bottom - s.top + o, i) {
              this.flyout && (this.horizontalLayout ? (e += this.flyout.getHeight(), s += this.flyout.getHeight() / this.scale) : (t += this.flyout.getWidth(), i += this.flyout.getWidth() / this.scale)), t /= i, e /= s, n.disable$$module$build$src$core$events$utils();
              try {
                this.setScale(Math.min(t, e)), this.scrollCenter();
              } finally {
                n.enable$$module$build$src$core$events$utils();
              }
              this.maybeFireViewportChangeEvent();
            }
          } else console.warn("Tried to move a non-movable workspace. This could result in blocks becoming inaccessible.");
        }
        beginCanvasTransition() {
          R(
            this.getCanvas(),
            "blocklyCanvasTransitioning"
          ), R(this.getBubbleCanvas(), "blocklyCanvasTransitioning");
        }
        endCanvasTransition() {
          F(this.getCanvas(), "blocklyCanvasTransitioning"), F(this.getBubbleCanvas(), "blocklyCanvasTransitioning");
        }
        scrollCenter() {
          if (this.isMovable()) {
            var e = this.getMetrics(), t = (e.scrollWidth - e.viewWidth) / 2, s = (e.scrollHeight - e.viewHeight) / 2;
            t = -t - e.scrollLeft, s = -s - e.scrollTop, this.scroll(
              t,
              s
            );
          } else console.warn("Tried to move a non-movable workspace. This could result in blocks becoming inaccessible.");
        }
        centerOnBlock(e, t) {
          if (this.isMovable()) {
            var s = e ? this.getBlockById(e) : null;
            if (s) {
              e = s.getRelativeToSurfaceXY(), s = t ? { height: s.height, width: s.width } : s.getHeightWidth();
              var o = this.scale;
              t = (e.x + (this.RTL ? -1 : 1) * s.width / 2) * o, e = (e.y + s.height / 2) * o, s = this.getMetrics(), this.scroll(-(t - s.viewWidth / 2), -(e - s.viewHeight / 2));
            }
          } else console.warn("Tried to move a non-movable workspace. This could result in blocks becoming inaccessible.");
        }
        setScale(e) {
          this.options.zoomOptions.maxScale && e > this.options.zoomOptions.maxScale ? e = this.options.zoomOptions.maxScale : this.options.zoomOptions.minScale && e < this.options.zoomOptions.minScale && (e = this.options.zoomOptions.minScale), this.scale = e, this.hideChaff(!1), (e = this.getFlyout(!1)) && e.isVisible() && (e.reflow(), this.recordDragTargets()), this.grid && this.grid.update(this.scale), e = this.getMetrics(), this.scrollX -= e.absoluteLeft, this.scrollY -= e.absoluteTop, e.viewLeft += e.absoluteLeft, e.viewTop += e.absoluteTop, this.scroll(this.scrollX, this.scrollY), this.scrollbar && (this.flyout ? this.scrollbar.resizeView(e) : this.scrollbar.resizeContent(e));
        }
        getScale() {
          return this.scale;
        }
        getAbsoluteScale() {
          const e = (s) => {
            if (s.isFlyout) {
              let o;
              const i = (o = s.targetWorkspace) == null ? void 0 : o.getFlyout();
              if (i instanceof Yr) return i.getFlyoutScale();
            }
            return s.getScale();
          }, t = (s, o) => s.options.parentWorkspace && s.options.parentWorkspace.getSvgGroup().contains(s.getSvgGroup()) ? t(s.options.parentWorkspace, o * e(s)) : o * e(s);
          return t(this, 1);
        }
        scroll(e, t) {
          this.hideChaff(!0);
          const s = this.getMetrics();
          e = Math.min(e, -s.scrollLeft), t = Math.min(t, -s.scrollTop);
          const o = s.scrollTop + Math.max(0, s.scrollHeight - s.viewHeight);
          e = Math.max(e, -(s.scrollLeft + Math.max(0, s.scrollWidth - s.viewWidth))), t = Math.max(t, -o), this.scrollX = e, this.scrollY = t, this.scrollbar && this.scrollbar.set(-(e + s.scrollLeft), -(t + s.scrollTop), !1), e += s.absoluteLeft, t += s.absoluteTop, this.translate(e, t);
        }
        getBlockById(e) {
          return super.getBlockById(e);
        }
        getAllBlocks(e = !1) {
          return super.getAllBlocks(e);
        }
        getTopBlocks(e = !1) {
          return super.getTopBlocks(e);
        }
        addTopBlock(e) {
          this.addTopBoundedElement(e), super.addTopBlock(e);
        }
        removeTopBlock(e) {
          this.removeTopBoundedElement(e), super.removeTopBlock(e);
        }
        addTopComment(e) {
          this.addTopBoundedElement(e), super.addTopComment(e);
        }
        removeTopComment(e) {
          this.removeTopBoundedElement(e), super.removeTopComment(e);
        }
        getTopComments(e = !1) {
          return super.getTopComments(e);
        }
        getCommentById(e) {
          return super.getCommentById(e);
        }
        getRootWorkspace() {
          return super.getRootWorkspace();
        }
        addTopBoundedElement(e) {
          this.topBoundedElements.push(e);
        }
        removeTopBoundedElement(e) {
          Ve(
            this.topBoundedElements,
            e
          );
        }
        getTopBoundedElements(e = !1) {
          const t = [].concat(this.topBoundedElements);
          return e && t.sort(this.sortByOrigin.bind(this)), t;
        }
        setResizesEnabled(e) {
          const t = !this.resizesEnabled && e;
          this.resizesEnabled = e, t && this.resizeContents();
        }
        clear() {
          this.setResizesEnabled(!1), super.clear(), this.topBoundedElements = [], this.setResizesEnabled(!0);
        }
        registerButtonCallback(e, t) {
          if (typeof t != "function") throw TypeError("Button callbacks must be functions.");
          this.flyoutButtonCallbacks.set(e, t);
        }
        getButtonCallback(e) {
          let t;
          return (t = this.flyoutButtonCallbacks.get(e)) != null ? t : null;
        }
        removeButtonCallback(e) {
          this.flyoutButtonCallbacks.delete(e);
        }
        registerToolboxCategoryCallback(e, t) {
          if (typeof t != "function") throw TypeError("Toolbox category callbacks must be functions.");
          this.toolboxCategoryCallbacks.set(e, t);
        }
        getToolboxCategoryCallback(e) {
          return this.toolboxCategoryCallbacks.get(e) || null;
        }
        removeToolboxCategoryCallback(e) {
          this.toolboxCategoryCallbacks.delete(e);
        }
        getGesture(e) {
          if (this.keyboardMoveInProgress) return e == null || e.preventDefault(), e == null || e.stopPropagation(), null;
          const t = (e == null ? void 0 : e.type) === "pointerdown";
          let s;
          return t && ((s = this.currentGesture_) != null && s.hasStarted()) && (console.warn("Tried to start the same gesture twice."), this.currentGesture_.cancel()), !this.currentGesture_ && t && (this.currentGesture_ = new jr(e, this)), this.currentGesture_;
        }
        clearGesture() {
          this.currentGesture_ = null;
        }
        cancelCurrentGesture() {
          this.currentGesture_ && this.currentGesture_.cancel();
        }
        getAudioManager() {
          return this.audioManager;
        }
        getGrid() {
          return this.grid;
        }
        hideChaff(e = !1) {
          Ut(), Ri(this), It(), this.hideComponents(e);
        }
        hideComponents(e = !1) {
          this.getComponentManager().getComponents(Q.Capability.AUTOHIDEABLE, !0).forEach((t) => t.autoHide(e));
        }
        static setTopLevelWorkspaceMetrics(e) {
          const t = this.getMetrics();
          typeof e.x == "number" && (this.scrollX = -(t.scrollLeft + (t.scrollWidth - t.viewWidth) * e.x)), typeof e.y == "number" && (this.scrollY = -(t.scrollTop + (t.scrollHeight - t.viewHeight) * e.y)), this.translate(this.scrollX + t.absoluteLeft, this.scrollY + t.absoluteTop);
        }
        addClass(e) {
          this.injectionDiv && R(this.injectionDiv, e);
        }
        removeClass(e) {
          this.injectionDiv && F(this.injectionDiv, e);
        }
        setIsReadOnly(e) {
          super.setIsReadOnly(e), e ? this.addClass("blocklyReadOnly") : this.removeClass("blocklyReadOnly");
        }
        scrollBoundsIntoView(e, t = 10) {
          if (!jr.inProgress()) {
            var s = this.getScale(), o = this.getMetricsManager().getViewMetrics(!0);
            if (o = new M(o.top, o.top + o.height, o.left, o.left + o.width), !(e.left >= o.left && e.top >= o.top && e.right <= o.right && e.bottom <= o.bottom)) {
              e = e.clone(), e.top -= t, e.bottom += t, e.left -= t, e.right += t;
              var i = t = 0;
              e.left < o.left ? t = this.RTL ? Math.min(o.left - e.left, o.right - e.right) : o.left - e.left : e.right > o.right && (t = this.RTL ? o.right - e.right : Math.max(o.right - e.right, o.left - e.left)), e.top < o.top ? i = o.top - e.top : e.bottom > o.bottom && (i = Math.max(o.bottom - e.bottom, o.top - e.top)), this.scroll(this.scrollX + t * s, this.scrollY + i * s);
            }
          }
        }
        getFocusableElement() {
          return this.svgGroup_;
        }
        getFocusableTree() {
          return this.isMutator && this.options.parentWorkspace || this;
        }
        onNodeFocus() {
        }
        onNodeBlur() {
        }
        canBeFocused() {
          return !0;
        }
        getRootFocusableNode() {
          return this;
        }
        getRestoredFocusableNode(e) {
          if (e) return null;
          let t;
          if (e = (t = this.targetWorkspace) == null ? void 0 : t.getFlyout(), this.isFlyout && e) {
            let o, i;
            return (i = (o = e.getContents().find((r) => (r = r.getElement(), Ft(r) && r.canBeFocused()))) == null ? void 0 : o.getElement()) != null ? i : null;
          }
          let s;
          return (s = this.getTopBlocks(!0)[0]) != null ? s : null;
        }
        getNestedTrees() {
          const e = this.getAllBlocks().map((s) => s.getIcons()).flat().filter((s) => s instanceof n.MutatorIcon$$module$build$src$core$icons$mutator_icon && s.bubbleIsVisible()).map((s) => {
            let o;
            return (o = s.getBubble()) == null ? void 0 : o.getWorkspace();
          }).filter((s) => !!s), t = this.getFlyout(!0);
          return t && e.push(t.getWorkspace()), e;
        }
        searchForWorkspaceComment(e) {
          for (const t of this.getTopComments()) if (t instanceof jt && t.canBeFocused() && t.getFocusableElement().id === e) return t;
        }
        lookUpFocusableNode(e) {
          var t;
          const s = (t = this.targetWorkspace) == null ? void 0 : t.getFlyout();
          if (this.isFlyout && s) {
            for (var o of s.getContents()) if (t = o.getElement(), Ft(t) && t.canBeFocused() && t.getFocusableElement().id === e) return t;
          }
          if (o = e.indexOf("_field_"), t = e.indexOf("_connection_"), o !== -1) {
            var i = e.substring(
              0,
              o
            );
            if (i = this.getBlockById(i)) {
              for (var r of i.getFields()) if (r.canBeFocused() && r.getFocusableElement().id === e) return r;
            }
            return null;
          }
          if (t !== -1) {
            if (i = e.substring(0, t), i = this.getBlockById(i)) {
              for (const h of i.getConnections_(!0)) if (h.id === e) return h;
            }
            return null;
          }
          if (r = Math.max(e.indexOf(la), e.indexOf(qp), e.indexOf(Qp)), r !== -1 && (r = e.substring(0, r), r = this.searchForWorkspaceComment(r))) {
            if (e.indexOf(la) > -1) return r.getEditorFocusableNode();
            var u;
            return (u = r.view.getCommentBarButtons().find((h) => h.getFocusableElement().id.includes(e))) != null ? u : null;
          }
          if ((u = this.getAllBlocks(!1).find((h) => h.getFocusableElement().id === e)) || (u = this.searchForWorkspaceComment(e))) return u;
          u = this.getAllBlocks().map((h) => h.getIcons()).flat();
          for (i of u) {
            if (i.canBeFocused() && i.getFocusableElement().id === e) return i;
            if (us(i)) {
              if ((u = i.getBubble()) && u.canBeFocused() && u.getFocusableElement().id === e) return u;
              if (u instanceof Gr && u.getEditor().getFocusableElement().id === e) return u.getEditor();
            }
          }
          return null;
        }
        onTreeFocus(e, t) {
        }
        onTreeBlur(e) {
          if (this.isFlyout && this.targetWorkspace && !n.getFocusManager$$module$build$src$core$focus_manager().ephemeralFocusTaken()) {
            var t = this.targetWorkspace.getToolbox();
            t && e === t || r$(t) && t.autoHide(!1);
          }
        }
        getNavigator() {
          return this.navigator;
        }
        setNavigator(e) {
          this.navigator = e;
        }
      }, At = class extends Xt {
        constructor(e) {
          super(), this.isBlank = !0, this.isBlank = typeof e > "u", e && (this.varId = e.getId(), this.workspaceId = e.getWorkspace().id);
        }
        toJson() {
          const e = super.toJson();
          if (!this.varId) throw Error("The var ID is undefined. Either pass a variable to the constructor, or call fromJson");
          return e.varId = this.varId, e;
        }
        static fromJson(e, t, s) {
          return t = Xt.fromJson(
            e,
            t,
            s ?? new At()
          ), t.varId = e.varId, t;
        }
      }, Na = class extends At {
        constructor(e) {
          super(e), this.type = m.VAR_CREATE, e && (this.varType = e.getType(), this.varName = e.getName());
        }
        toJson() {
          const e = super.toJson();
          if (this.varType === void 0) throw Error("The var type is undefined. Either pass a variable to the constructor, or call fromJson");
          if (!this.varName) throw Error("The var name is undefined. Either pass a variable to the constructor, or call fromJson");
          return e.varType = this.varType, e.varName = this.varName, e;
        }
        static fromJson(e, t, s) {
          return t = At.fromJson(e, t, s ?? new Na()), t.varType = e.varType, t.varName = e.varName, t;
        }
        run(e) {
          var t = this.getEventWorkspace_();
          if (!this.varId) throw Error("The var ID is undefined. Either pass a variable to the constructor, or call fromJson");
          if (!this.varName) throw Error("The var name is undefined. Either pass a variable to the constructor, or call fromJson");
          t = t.getVariableMap(), e ? t.createVariable(this.varName, this.varType, this.varId) : (e = t.getVariableById(this.varId)) && t.deleteVariable(e);
        }
      };
      c(f.EVENT, m.VAR_CREATE, Na);
      var Pg = class {
        constructor(e, t, s, o) {
          this.workspace = e, this.name = t, this.type = s || "", this.id = o || Qe();
        }
        getId() {
          return this.id;
        }
        getName() {
          return this.name;
        }
        setName(e) {
          return this.name = e, this;
        }
        getType() {
          return this.type;
        }
        setType(e) {
          return this.type = e, this;
        }
        getWorkspace() {
          return this.workspace;
        }
        save() {
          const e = { name: this.getName(), id: this.getId() }, t = this.getType();
          return t && (e.type = t), e;
        }
        static load(e, t) {
          e = new this(
            t,
            e.name,
            e.type,
            e.id
          ), t.getVariableMap().addVariable(e), k(new (L(m.VAR_CREATE))(e));
        }
      };
      c(f.VARIABLE_MODEL, We, Pg);
      var wa = class extends At {
        constructor(e) {
          super(e), this.type = m.VAR_DELETE, e && (this.varType = e.getType(), this.varName = e.getName());
        }
        toJson() {
          const e = super.toJson();
          if (this.varType === void 0) throw Error("The var type is undefined. Either pass a variable to the constructor, or call fromJson");
          if (!this.varName) throw Error("The var name is undefined. Either pass a variable to the constructor, or call fromJson");
          return e.varType = this.varType, e.varName = this.varName, e;
        }
        static fromJson(e, t, s) {
          return t = At.fromJson(e, t, s ?? new wa()), t.varType = e.varType, t.varName = e.varName, t;
        }
        run(e) {
          var t = this.getEventWorkspace_();
          if (!this.varId) throw Error("The var ID is undefined. Either pass a variable to the constructor, or call fromJson");
          if (!this.varName) throw Error("The var name is undefined. Either pass a variable to the constructor, or call fromJson");
          t = t.getVariableMap(), e ? (e = t.getVariableById(this.varId)) && t.deleteVariable(e) : t.createVariable(this.varName, this.varType, this.varId);
        }
      };
      c(f.EVENT, m.VAR_DELETE, wa);
      var Ma = class extends At {
        constructor(e, t) {
          super(e), this.type = m.VAR_RENAME, e && (this.oldName = e.getName(), this.newName = typeof t > "u" ? "" : t);
        }
        toJson() {
          const e = super.toJson();
          if (!this.oldName) throw Error("The old var name is undefined. Either pass a variable to the constructor, or call fromJson");
          if (!this.newName) throw Error("The new var name is undefined. Either pass a value to the constructor, or call fromJson");
          return e.oldName = this.oldName, e.newName = this.newName, e;
        }
        static fromJson(e, t, s) {
          return t = At.fromJson(e, t, s ?? new Ma()), t.oldName = e.oldName, t.newName = e.newName, t;
        }
        run(e) {
          var t = this.getEventWorkspace_();
          if (!this.varId) throw Error("The var ID is undefined. Either pass a variable to the constructor, or call fromJson");
          if (!this.oldName) throw Error("The old var name is undefined. Either pass a variable to the constructor, or call fromJson");
          if (!this.newName) throw Error("The new var name is undefined. Either pass a value to the constructor, or call fromJson");
          t = t.getVariableMap();
          const s = t.getVariableById(this.varId);
          e ? s && t.renameVariable(s, this.newName) : s && t.renameVariable(s, this.oldName);
        }
      };
      c(f.EVENT, m.VAR_RENAME, Ma);
      var Bg = class {
        constructor(e, t = !1) {
          this.workspace = e, this.potentialMap = t, this.variableMap = /* @__PURE__ */ new Map();
        }
        clear() {
          for (const e of this.variableMap.values()) for (const t of e.values()) this.deleteVariable(t);
          if (this.variableMap.size !== 0) throw Error("Non-empty variable map");
        }
        renameVariable(e, t) {
          if (e.getName() === t) return e;
          var s = e.getType();
          s = this.getVariable(t, s);
          const o = this.workspace.getAllBlocks(!1);
          let i = "";
          this.potentialMap || (i = n.getGroup$$module$build$src$core$events$utils()) || n.setGroup$$module$build$src$core$events$utils(!0);
          try {
            s && s.getId() !== e.getId() ? this.renameVariableWithConflict(e, t, s, o) : this.renameVariableAndUses(e, t, o);
          } finally {
            this.potentialMap || n.setGroup$$module$build$src$core$events$utils(i);
          }
          return e;
        }
        changeVariableType(e, t) {
          const s = e.getType();
          if (s === t) return e;
          var o = this.variableMap.get(s);
          o == null || o.delete(e.getId()), (o == null ? void 0 : o.size) === 0 && this.variableMap.delete(s), e.setType(t);
          let i;
          return o = (i = this.variableMap.get(t)) != null ? i : /* @__PURE__ */ new Map(), o.set(e.getId(), e), this.variableMap.has(t) || this.variableMap.set(t, o), k(new (L(m.VAR_TYPE_CHANGE))(e, s, t)), e;
        }
        renameVariableById(e, t) {
          fe("VariableMap.renameVariableById", "v12", "v13", "VariableMap.renameVariable");
          const s = this.getVariableById(e);
          if (!s) throw Error("Tried to rename a variable that didn't exist. ID: " + e);
          this.renameVariable(s, t);
        }
        renameVariableAndUses(e, t, s) {
          for (this.potentialMap || k(new (L(m.VAR_RENAME))(e, t)), e.setName(t), t = 0; t < s.length; t++) s[t].updateVarName(e);
        }
        renameVariableWithConflict(e, t, s, o) {
          const i = e.getType(), r = s.getName();
          for (t !== r && this.renameVariableAndUses(s, t, o), t = 0; t < o.length; t++) o[t].renameVarById(e.getId(), s.getId());
          this.potentialMap || k(new (L(m.VAR_DELETE))(e));
          let u;
          (u = this.variableMap.get(i)) == null || u.delete(e.getId());
        }
        createVariable(e, t, s) {
          var o = this.getVariable(e, t);
          if (o) {
            if (s && o.getId() !== s) throw Error('Variable "' + e + '" is already in use and its id is "' + o.getId() + '" which conflicts with the passed in id, "' + s + '".');
            return o;
          }
          if (s && this.getVariableById(s)) throw Error('Variable id, "' + s + '", is already in use.');
          if (o = s || Qe(), t = t || "", s = Ee(
            f.VARIABLE_MODEL,
            this.workspace.options,
            !0
          ), !s) throw Error("No variable model is registered.");
          o = new s(this.workspace, e, t, o);
          let i;
          return e = (i = this.variableMap.get(t)) != null ? i : /* @__PURE__ */ new Map(), e.set(o.getId(), o), this.variableMap.has(t) || this.variableMap.set(t, e), this.potentialMap || k(new (L(m.VAR_CREATE))(o)), o;
        }
        addVariable(e) {
          const t = e.getType();
          this.variableMap.has(t) || this.variableMap.set(t, /* @__PURE__ */ new Map());
          let s;
          (s = this.variableMap.get(t)) == null || s.set(e.getId(), e);
        }
        deleteVariable(e) {
          const t = fo(this.workspace, e.getId());
          let s = "";
          this.potentialMap || (s = n.getGroup$$module$build$src$core$events$utils()) || n.setGroup$$module$build$src$core$events$utils(!0);
          try {
            for (let i = 0; i < t.length; i++) t[i].isDeadOrDying() || t[i].dispose(!0);
            const o = this.variableMap.get(e.getType());
            o && o.has(e.getId()) && (o.delete(e.getId()), this.potentialMap || k(new (L(m.VAR_DELETE))(e)), o.size === 0 && this.variableMap.delete(e.getType()));
          } finally {
            this.potentialMap || n.setGroup$$module$build$src$core$events$utils(s);
          }
        }
        deleteVariableById(e) {
          fe("VariableMap.deleteVariableById", "v12", "v13", "Blockly.Variables.deleteVariable"), (e = this.getVariableById(e)) && n.deleteVariable$$module$build$src$core$variables(this.workspace, e);
        }
        getVariable(e, t) {
          if (t = this.variableMap.get(t || ""), !t) return null;
          let s;
          return (s = [...t.values()].find((o) => n.Names$$module$build$src$core$names.equals(
            o.getName(),
            e
          ))) != null ? s : null;
        }
        getVariableById(e) {
          for (const t of this.variableMap.values()) if (t.has(e)) {
            let s;
            return (s = t.get(e)) != null ? s : null;
          }
          return null;
        }
        getVariablesOfType(e) {
          return (e = this.variableMap.get(e || "")) ? [...e.values()] : [];
        }
        getTypes() {
          return [...this.variableMap.keys()];
        }
        getAllVariables() {
          let e = [];
          for (const t of this.variableMap.values()) e = e.concat(...t.values());
          return e;
        }
        getAllVariableNames() {
          fe("VariableMap.getAllVariableNames", "v12", "v13", "Blockly.Variables.getAllVariables");
          const e = [];
          for (const t of this.variableMap.values()) for (const s of t.values()) e.push(s.getName());
          return e;
        }
        getVariableUsesById(e) {
          return fe("VariableMap.getVariableUsesById", "v12", "v13", "Blockly.Variables.getVariableUsesById"), fo(this.workspace, e);
        }
      };
      c(f.VARIABLE_MAP, We, Bg);
      var Da = class extends me {
        constructor(e, t) {
          super(t), this.type = m.TRASHCAN_OPEN, this.isOpen = e;
        }
        toJson() {
          const e = super.toJson();
          if (this.isOpen === void 0) throw Error("Whether this is already open or not is undefined. Either pass a value to the constructor, or call fromJson");
          return e.isOpen = this.isOpen, e;
        }
        static fromJson(e, t, s) {
          return t = me.fromJson(
            e,
            t,
            s ?? new Da()
          ), t.isOpen = e.isOpen, t;
        }
      };
      c(f.EVENT, m.TRASHCAN_OPEN, Da);
      var xg = class extends Xr {
        constructor(e) {
          super(), this.workspace = e, this.id = "trashcan", this.contents = [], this.flyout = null, this.isLidOpen = !1, this.minOpenness = 0, this.lidTask = this.svgLid = this.svgGroup = null, this.top = this.left = this.lidOpen = 0, this.initialized = !1, this.workspace.options.maxTrashcanContents <= 0 || (e = this.workspace.copyOptionsForFlyout(), this.workspace.horizontalLayout ? (e.toolboxPosition = this.workspace.toolboxPosition === P.TOP ? P.BOTTOM : P.TOP, this.flyout = new (Ee(f.FLYOUTS_HORIZONTAL_TOOLBOX, this.workspace.options, !0))(e)) : (e.toolboxPosition = this.workspace.toolboxPosition === P.RIGHT ? P.LEFT : P.RIGHT, this.flyout = new (Ee(f.FLYOUTS_VERTICAL_TOOLBOX, this.workspace.options, !0))(e)), this.workspace.addChangeListener(this.onDelete.bind(this)));
        }
        createDom() {
          this.svgGroup = b(g.G, { class: "blocklyTrash" });
          let e;
          const t = String(Math.random()).substring(2);
          e = b(
            g.CLIPPATH,
            { id: "blocklyTrashBodyClipPath" + t },
            this.svgGroup
          ), b(g.RECT, { width: qo, height: ol, y: Zo }, e);
          const s = b(g.IMAGE, {
            width: Pe.width,
            x: -Pa,
            height: Pe.height,
            y: -Ba,
            "clip-path": "url(#blocklyTrashBodyClipPath" + t + ")"
          }, this.svgGroup);
          return s.setAttributeNS(Xe, "xlink:href", this.workspace.options.pathToMedia + Pe.url), e = b(g.CLIPPATH, { id: "blocklyTrashLidClipPath" + t }, this.svgGroup), b(g.RECT, {
            width: qo,
            height: Zo
          }, e), this.svgLid = b(g.IMAGE, { width: Pe.width, x: -Pa, height: Pe.height, y: -Ba, "clip-path": "url(#blocklyTrashLidClipPath" + t + ")" }, this.svgGroup), this.svgLid.setAttributeNS(
            Xe,
            "xlink:href",
            this.workspace.options.pathToMedia + Pe.url
          ), De(this.svgGroup, "pointerdown", this, this.blockMouseDownWhenOpenable), De(this.svgGroup, "pointerup", this, this.click), De(s, "pointerover", this, this.mouseOver), De(s, "pointerout", this, this.mouseOut), this.animateLid(), this.svgGroup;
        }
        init() {
          if (this.workspace.options.maxTrashcanContents > 0) {
            const e = this.flyout.createDom(g.SVG);
            R(e, "blocklyTrashcanFlyout"), Pt(e, this.workspace.getParentSvg()), this.flyout.init(this.workspace);
          }
          this.workspace.getComponentManager().addComponent({ component: this, weight: Q.ComponentWeight.TRASHCAN_WEIGHT, capabilities: [
            Q.Capability.AUTOHIDEABLE,
            Q.Capability.DELETE_AREA,
            Q.Capability.DRAG_TARGET,
            Q.Capability.POSITIONABLE
          ] }), this.initialized = !0, this.setLidOpen(!1);
        }
        dispose() {
          this.workspace.getComponentManager().removeComponent("trashcan"), this.svgGroup && G(this.svgGroup), this.lidTask && clearTimeout(this.lidTask);
        }
        hasContents() {
          return !!this.contents.length;
        }
        contentsIsOpen() {
          return !!this.flyout && this.flyout.isVisible();
        }
        openFlyout() {
          if (!this.contentsIsOpen()) {
            var e = this.contents.map(function(s) {
              return JSON.parse(s);
            }), t = this.workspace.getParentSvg().style;
            t.cursor = "wait", setTimeout(() => {
              let s;
              (s = this.flyout) == null || s.show(e), t.cursor = "";
              let o;
              (o = this.workspace.scrollbar) == null || o.setVisible(!1);
            }, 10), this.fireUiEvent(!0);
          }
        }
        closeFlyout() {
          if (this.contentsIsOpen()) {
            var e;
            (e = this.flyout) == null || e.hide();
            var t;
            (t = this.workspace.scrollbar) == null || t.setVisible(!0), this.fireUiEvent(!1), this.workspace.recordDragTargets();
          }
        }
        autoHide(e) {
          !e && this.flyout && this.closeFlyout();
        }
        emptyContents() {
          this.hasContents() && (this.contents.length = 0, this.setMinOpenness(0), this.closeFlyout());
        }
        position(e, t) {
          if (this.initialized) {
            var s = In(this.workspace, e);
            e = bn(
              s,
              new D(qo, ol + Zo),
              Lm,
              Fg,
              e,
              this.workspace
            ), t = Sn(e, Fg, s.vertical === Yt.TOP ? _s.DOWN : _s.UP, t), this.top = t.top, this.left = t.left;
            var o;
            (o = this.svgGroup) == null || o.setAttribute(
              "transform",
              "translate(" + this.left + "," + this.top + ")"
            );
            var i;
            (i = this.flyout) == null || i.position();
          }
        }
        getBoundingRectangle() {
          return new M(this.top, this.top + ol + Zo, this.left, this.left + qo);
        }
        getClientRect() {
          if (!this.svgGroup) return null;
          var e = this.svgGroup.getBoundingClientRect();
          const t = e.top + Ba - il;
          return e = e.left + Pa - il, new M(t, t + Zo + ol + 2 * il, e, e + qo + 2 * il);
        }
        onDragOver(e) {
          this.setLidOpen(this.wouldDelete_);
        }
        onDragExit(e) {
          this.setLidOpen(!1);
        }
        onDrop(e) {
          setTimeout(this.setLidOpen.bind(
            this,
            !1
          ), 100);
        }
        setLidOpen(e) {
          this.isLidOpen !== e && (this.lidTask && clearTimeout(this.lidTask), this.isLidOpen = e, this.animateLid());
        }
        animateLid() {
          const e = Nm;
          var t = 1 / (e + 1);
          this.lidOpen += this.isLidOpen ? t : -t, this.lidOpen = Math.min(Math.max(this.lidOpen, this.minOpenness), 1), this.setLidAngle(this.lidOpen * Hg), t = Ug + this.lidOpen * (wm - Ug), this.svgGroup && (this.svgGroup.style.opacity = `${t}`), this.lidOpen > this.minOpenness && this.lidOpen < 1 && (this.lidTask = setTimeout(this.animateLid.bind(this), km / e));
        }
        setLidAngle(e) {
          const t = this.workspace.toolboxPosition === P.RIGHT || this.workspace.horizontalLayout && this.workspace.RTL;
          let s;
          (s = this.svgLid) == null || s.setAttribute("transform", "rotate(" + (t ? -e : e) + "," + (t ? 4 : qo - 4) + "," + (Zo - 2) + ")");
        }
        setMinOpenness(e) {
          this.minOpenness = e, this.isLidOpen || this.setLidAngle(e * Hg);
        }
        closeLid() {
          this.setLidOpen(!1);
        }
        click() {
          this.hasContents() && !this.workspace.isDragging() && this.openFlyout();
        }
        fireUiEvent(e) {
          e = new (L(m.TRASHCAN_OPEN))(e, this.workspace.id), k(e);
        }
        blockMouseDownWhenOpenable(e) {
          !this.contentsIsOpen() && this.hasContents() && e.stopPropagation();
        }
        mouseOver() {
          this.hasContents() && this.setLidOpen(!0);
        }
        mouseOut() {
          this.setLidOpen(!1);
        }
        onDelete(e) {
          if (!(this.workspace.options.maxTrashcanContents <= 0 || !oi(e) || e.wasShadow)) {
            if (!e.oldJson) throw Error("Encountered a delete event without proper oldJson");
            if (e = JSON.stringify(this.cleanBlockJson(e.oldJson)), !this.contents.includes(e)) {
              for (this.contents.unshift(e); this.contents.length > this.workspace.options.maxTrashcanContents; ) this.contents.pop();
              this.setMinOpenness(Am);
            }
          }
        }
        cleanBlockJson(e) {
          function t(s) {
            if (s) {
              if (delete s.id, delete s.x, delete s.y, delete s.enabled, delete s.disabledReasons, s.icons && s.icons.comment) {
                var o = s.icons.comment;
                delete o.height, delete o.width, delete o.pinned;
              }
              o = s.inputs;
              for (var i in o) {
                var r = o[i];
                const u = r.block;
                r = r.shadow, u && t(u), r && t(r);
              }
              s.next && (i = s.next, s = i.block, i = i.shadow, s && t(s), i && t(i));
            }
          }
          return e = JSON.parse(JSON.stringify(e)), t(e), Object.assign({}, { kind: "BLOCK" }, e);
        }
      }, qo = 47, ol = 44, Zo = 16, Fg = 20, Lm = 20, il = 10, Pa = 0, Ba = 32, Am = 0.1, km = 80, Nm = 4, Ug = 0.4, wm = 0.8, Hg = 45, sn = null, on = null, nl = void 0, $t = {};
      $t.BlockPaster = qi, $t.copy = rr, $t.getLastCopiedData = lr, $t.getLastCopiedLocation = zc, $t.getLastCopiedWorkspace = cr, $t.paste = ds, $t.registry = Uu, $t.setLastCopiedData = g$, $t.setLastCopiedLocation = m$, $t.setLastCopiedWorkspace = _$;
      var bs = {};
      bs.CollapseCommentBarButton = Zp, bs.CommentBarButton = Dr, bs.CommentEditor = Pr, bs.CommentView = Ki, bs.DeleteCommentBarButton = eg, bs.RenderedWorkspaceComment = jt, bs.WorkspaceComment = Br;
      var pt;
      (function(e) {
        e.ESCAPE = "escape", e.DELETE = "delete", e.COPY = "copy", e.CUT = "cut", e.PASTE = "paste", e.UNDO = "undo", e.REDO = "redo", e.MENU = "menu";
      })(pt || (pt = {})), ou();
      var gt = {};
      gt.names = pt, gt.registerCopy = qc, gt.registerCut = Zc, gt.registerDefaultShortcuts = ou, gt.registerDelete = jc, gt.registerEscape = Kc, gt.registerPaste = Qc, gt.registerRedo = tu, gt.registerShowContextMenu = su, gt.registerUndo = eu;
      var Mm = class {
        constructor(e, t) {
          this.procedureModelClass = e, this.parameterModelClass = t, this.priority = dp;
        }
        save(e) {
          return e = e.getProcedureMap().getProcedures().map((t) => iu(t)), e.length ? e : null;
        }
        load(e, t) {
          const s = t.getProcedureMap();
          for (const o of e) s.add(nu(
            this.procedureModelClass,
            this.parameterModelClass,
            o,
            t
          ));
        }
        clear(e) {
          e.getProcedureMap().clear();
        }
      }, rl = {};
      rl.ProcedureSerializer = Mm, rl.loadProcedure = nu, rl.saveProcedure = iu;
      var Gg = class {
        constructor() {
          this.priority = hp;
        }
        save(e) {
          return e = e.getVariableMap().getAllVariables().map((t) => t.save()), e.length ? e : null;
        }
        load(e, t) {
          const s = lt(f.VARIABLE_MODEL, We);
          e.forEach((o) => {
            s == null || s.load(o, t);
          });
        }
        clear(e) {
          e.getVariableMap().clear();
        }
      };
      _i("variables", new Gg());
      var Vg = {};
      Vg.VariableSerializer = Gg;
      var xa = {};
      xa.load = E$, xa.save = T$;
      var Dm = { blocks: Vi, exceptions: Gs, priorities: um, procedures: rl, registry: Fu, variables: Vg, workspaceComments: Er, workspaces: xa };
      "Blockly" in globalThis || (globalThis.Blockly = { Msg: Tp });
      var Fa = "label", Wg = class {
        load(e, t) {
          return e = new Be(t.getWorkspace(), t.targetWorkspace, e, !0), e.show(), new Ko(e, Fa);
        }
        gapForItem(e, t) {
          return t;
        }
        disposeItem(e) {
          e = e.getElement(), e instanceof Be && e.dispose();
        }
        getType() {
          return Fa;
        }
      };
      c(f.FLYOUT_INFLATER, Fa, Wg);
      var Xg = class extends Qr {
        constructor(e) {
          super(), this.GRID_UNIT = 4, this.CURSOR_COLOUR = "#ffa200", this.CURSOR_RADIUS = 5, this.JAGGED_TEETH_WIDTH = this.JAGGED_TEETH_HEIGHT = 0, this.START_HAT_HEIGHT = 22, this.START_HAT_WIDTH = 96, this.SHAPES = { HEXAGONAL: 1, ROUND: 2, SQUARE: 3, PUZZLE: 4, NOTCH: 5 }, this.SHAPE_IN_SHAPE_PADDING = {
            1: { 0: 5 * this.GRID_UNIT, 1: 2 * this.GRID_UNIT, 2: 5 * this.GRID_UNIT, 3: 5 * this.GRID_UNIT },
            2: { 0: 3 * this.GRID_UNIT, 1: 3 * this.GRID_UNIT, 2: 1 * this.GRID_UNIT, 3: 2 * this.GRID_UNIT },
            3: { 0: 2 * this.GRID_UNIT, 1: 2 * this.GRID_UNIT, 2: 2 * this.GRID_UNIT, 3: 2 * this.GRID_UNIT }
          }, this.FULL_BLOCK_FIELDS = !0, this.FIELD_TEXT_FONTWEIGHT = "bold", this.FIELD_TEXT_FONTFAMILY = '"Helvetica Neue", "Segoe UI", Helvetica, sans-serif', this.FIELD_COLOUR_FULL_BLOCK = this.FIELD_TEXTINPUT_BOX_SHADOW = this.FIELD_DROPDOWN_SVG_ARROW = this.FIELD_DROPDOWN_COLOURED_DIV = this.FIELD_DROPDOWN_NO_BORDER_RECT_SHADOW = !0, this.SELECTED_GLOW_COLOUR = "#fff200", this.SELECTED_GLOW_SIZE = 0.5, this.REPLACEMENT_GLOW_COLOUR = "#fff200", this.REPLACEMENT_GLOW_SIZE = 2, this.selectedGlowFilterId = "", this.selectedGlowFilter = null, this.replacementGlowFilterId = "", this.SQUARED = this.ROUNDED = this.HEXAGONAL = this.replacementGlowFilter = null, e && (this.GRID_UNIT = e), this.SMALL_PADDING = this.GRID_UNIT, this.MEDIUM_PADDING = 2 * this.GRID_UNIT, this.MEDIUM_LARGE_PADDING = 3 * this.GRID_UNIT, this.LARGE_PADDING = 4 * this.GRID_UNIT, this.CORNER_RADIUS = 1 * this.GRID_UNIT, this.NOTCH_WIDTH = 9 * this.GRID_UNIT, this.NOTCH_HEIGHT = 2 * this.GRID_UNIT, this.STATEMENT_INPUT_NOTCH_OFFSET = this.NOTCH_OFFSET_LEFT = 3 * this.GRID_UNIT, this.MIN_BLOCK_WIDTH = 2 * this.GRID_UNIT, this.MIN_BLOCK_HEIGHT = 12 * this.GRID_UNIT, this.EMPTY_STATEMENT_INPUT_HEIGHT = 6 * this.GRID_UNIT, this.TOP_ROW_MIN_HEIGHT = this.CORNER_RADIUS, this.TOP_ROW_PRECEDES_STATEMENT_MIN_HEIGHT = this.LARGE_PADDING, this.BOTTOM_ROW_MIN_HEIGHT = this.CORNER_RADIUS, this.BOTTOM_ROW_AFTER_STATEMENT_MIN_HEIGHT = 6 * this.GRID_UNIT, this.STATEMENT_BOTTOM_SPACER = -this.NOTCH_HEIGHT, this.STATEMENT_INPUT_SPACER_MIN_WIDTH = 40 * this.GRID_UNIT, this.STATEMENT_INPUT_PADDING_LEFT = 4 * this.GRID_UNIT, this.EMPTY_INLINE_INPUT_PADDING = 4 * this.GRID_UNIT, this.EMPTY_INLINE_INPUT_HEIGHT = 8 * this.GRID_UNIT, this.DUMMY_INPUT_MIN_HEIGHT = 8 * this.GRID_UNIT, this.DUMMY_INPUT_SHADOW_MIN_HEIGHT = 6 * this.GRID_UNIT, this.CURSOR_WS_WIDTH = 20 * this.GRID_UNIT, this.FIELD_TEXT_FONTSIZE = 3 * this.GRID_UNIT, this.FIELD_BORDER_RECT_RADIUS = this.CORNER_RADIUS, this.FIELD_BORDER_RECT_X_PADDING = 2 * this.GRID_UNIT, this.FIELD_BORDER_RECT_Y_PADDING = 1.625 * this.GRID_UNIT, this.FIELD_BORDER_RECT_HEIGHT = 8 * this.GRID_UNIT, this.FIELD_DROPDOWN_BORDER_RECT_HEIGHT = 8 * this.GRID_UNIT, this.FIELD_DROPDOWN_SVG_ARROW_PADDING = this.FIELD_BORDER_RECT_X_PADDING, this.FIELD_COLOUR_DEFAULT_WIDTH = 6 * this.GRID_UNIT, this.FIELD_COLOUR_DEFAULT_HEIGHT = 8 * this.GRID_UNIT, this.FIELD_CHECKBOX_X_OFFSET = 1 * this.GRID_UNIT, this.MAX_DYNAMIC_CONNECTION_SHAPE_WIDTH = 12 * this.GRID_UNIT;
        }
        setFontConstants_(e) {
          super.setFontConstants_(e), this.FIELD_DROPDOWN_BORDER_RECT_HEIGHT = this.FIELD_BORDER_RECT_HEIGHT = this.FIELD_TEXT_HEIGHT + this.FIELD_BORDER_RECT_Y_PADDING * 2;
        }
        init() {
          super.init(), this.HEXAGONAL = this.makeHexagonal(), this.ROUNDED = this.makeRounded(), this.SQUARED = this.makeSquared(), this.STATEMENT_INPUT_NOTCH_OFFSET = this.NOTCH_OFFSET_LEFT + this.INSIDE_CORNERS.rightWidth;
        }
        setDynamicProperties_(e) {
          super.setDynamicProperties_(e), this.SELECTED_GLOW_COLOUR = e.getComponentStyle("selectedGlowColour") || this.SELECTED_GLOW_COLOUR;
          const t = Number(e.getComponentStyle("selectedGlowSize"));
          this.SELECTED_GLOW_SIZE = t && !isNaN(t) ? t : this.SELECTED_GLOW_SIZE, this.REPLACEMENT_GLOW_COLOUR = e.getComponentStyle("replacementGlowColour") || this.REPLACEMENT_GLOW_COLOUR, this.REPLACEMENT_GLOW_SIZE = (e = Number(e.getComponentStyle("replacementGlowSize"))) && !isNaN(e) ? e : this.REPLACEMENT_GLOW_SIZE;
        }
        dispose() {
          super.dispose(), this.selectedGlowFilter && G(this.selectedGlowFilter), this.replacementGlowFilter && G(this.replacementGlowFilter);
        }
        makeStartHat() {
          const e = this.START_HAT_HEIGHT, t = this.START_HAT_WIDTH, s = Ue(
            "c",
            [v(25, -e), v(71, -e), v(t, 0)]
          );
          return { height: e * 0.75, width: t, path: s };
        }
        makeHexagonal() {
          function e(s, o, i) {
            var r = s / 2;
            return r = r > t ? t : r, i = i ? -1 : 1, s = (o ? -1 : 1) * s / 2, Ot(-i * r, s) + Ot(i * r, s);
          }
          const t = this.MAX_DYNAMIC_CONNECTION_SHAPE_WIDTH;
          return { type: this.SHAPES.HEXAGONAL, isDynamic: !0, width(s) {
            return s /= 2, s > t ? t : s;
          }, height(s) {
            return s;
          }, connectionOffsetY(s) {
            return s / 2;
          }, connectionOffsetX(s) {
            return -s;
          }, pathDown(s) {
            return e(s, !1, !1);
          }, pathUp(s) {
            return e(s, !0, !1);
          }, pathRightDown(s) {
            return e(s, !1, !0);
          }, pathRightUp(s) {
            return e(s, !1, !0);
          } };
        }
        makeRounded() {
          function e(o, i, r) {
            const u = o > s ? o - s : 0;
            o = (o > s ? s : o) / 2;
            const h = r === i ? "0" : "1";
            return ce("a", "0 0," + h, o, v((r ? 1 : -1) * o, (i ? -1 : 1) * o)) + A("v", (i ? -1 : 1) * u) + ce("a", "0 0," + h, o, v((r ? -1 : 1) * o, (i ? -1 : 1) * o));
          }
          const t = this.MAX_DYNAMIC_CONNECTION_SHAPE_WIDTH, s = t * 2;
          return { type: this.SHAPES.ROUND, isDynamic: !0, width(o) {
            return o /= 2, o > t ? t : o;
          }, height(o) {
            return o;
          }, connectionOffsetY(o) {
            return o / 2;
          }, connectionOffsetX(o) {
            return -o;
          }, pathDown(o) {
            return e(o, !1, !1);
          }, pathUp(o) {
            return e(o, !0, !1);
          }, pathRightDown(o) {
            return e(o, !1, !0);
          }, pathRightUp(o) {
            return e(o, !1, !0);
          } };
        }
        makeSquared() {
          function e(s, o, i) {
            s -= t * 2;
            const r = i === o ? "0" : "1";
            return ce("a", "0 0," + r, t, v((i ? 1 : -1) * t, (o ? -1 : 1) * t)) + A("v", (o ? -1 : 1) * s) + ce("a", "0 0," + r, t, v((i ? -1 : 1) * t, (o ? -1 : 1) * t));
          }
          const t = this.CORNER_RADIUS;
          return { type: this.SHAPES.SQUARE, isDynamic: !0, width(s) {
            return t;
          }, height(s) {
            return s;
          }, connectionOffsetY(s) {
            return s / 2;
          }, connectionOffsetX(s) {
            return -s;
          }, pathDown(s) {
            return e(s, !1, !1);
          }, pathUp(s) {
            return e(s, !0, !1);
          }, pathRightDown(s) {
            return e(s, !1, !0);
          }, pathRightUp(s) {
            return e(s, !1, !0);
          } };
        }
        shapeFor(e) {
          let t = e.getCheck();
          switch (!t && e.targetConnection && (t = e.targetConnection.getCheck()), e.type) {
            case C.INPUT_VALUE:
            case C.OUTPUT_VALUE:
              if (e = e.getSourceBlock().getOutputShape(), e !== null) switch (e) {
                case this.SHAPES.HEXAGONAL:
                  return this.HEXAGONAL;
                case this.SHAPES.ROUND:
                  return this.ROUNDED;
                case this.SHAPES.SQUARE:
                  return this.SQUARED;
              }
              return t && t.includes("Boolean") ? this.HEXAGONAL : t && t.includes("Number") ? this.ROUNDED : (t && t.includes("String"), this.ROUNDED);
            case C.PREVIOUS_STATEMENT:
            case C.NEXT_STATEMENT:
              return this.NOTCH;
            default:
              throw Error("Unknown type");
          }
        }
        makeNotch() {
          function e(y) {
            return Ue(
              "c",
              [v(y * i / 2, 0), v(y * i * 3 / 4, u / 2), v(y * i, u)]
            ) + vo([v(y * i, r)]) + Ue("c", [v(y * i / 4, u / 2), v(y * i / 2, u), v(y * i, u)]) + A(
              "h",
              y * o
            ) + Ue("c", [v(y * i / 2, 0), v(y * i * 3 / 4, -(u / 2)), v(y * i, -u)]) + vo([v(y * i, -r)]) + Ue("c", [v(y * i / 4, -(u / 2)), v(y * i / 2, -u), v(y * i, -u)]);
          }
          const t = this.NOTCH_WIDTH, s = this.NOTCH_HEIGHT, o = t / 3, i = o / 3, r = s / 2, u = r / 2, h = e(1), E = e(-1);
          return { type: this.SHAPES.NOTCH, width: t, height: s, pathLeft: h, pathRight: E };
        }
        makeInsideCorners() {
          const e = this.CORNER_RADIUS, t = ce("a", "0 0,0", e, v(-e, e)), s = ce("a", "0 0,1", e, v(-e, e)), o = ce("a", "0 0,0", e, v(
            e,
            e
          )), i = ce("a", "0 0,1", e, v(e, e));
          return { width: e, height: e, pathTop: t, pathBottom: o, rightWidth: e, rightHeight: e, pathTopRight: s, pathBottomRight: i };
        }
        generateSecondaryColour_(e) {
          return ws("#000", e, 0.15) || e;
        }
        generateTertiaryColour_(e) {
          return ws("#000", e, 0.25) || e;
        }
        createDom(e, t, s, o) {
          super.createDom(e, t, s, o), e = b(
            g.DEFS,
            {},
            e
          ), t = b(g.FILTER, { id: "blocklySelectedGlowFilter" + this.randomIdentifier, height: "160%", width: "180%", y: "-30%", x: "-40%" }, e), b(g.FEGAUSSIANBLUR, { in: "SourceGraphic", stdDeviation: this.SELECTED_GLOW_SIZE }, t), s = b(g.FECOMPONENTTRANSFER, { result: "outBlur" }, t), b(g.FEFUNCA, { type: "table", tableValues: "0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1" }, s), b(g.FEFLOOD, { "flood-color": this.SELECTED_GLOW_COLOUR, "flood-opacity": 1, result: "outColor" }, t), b(g.FECOMPOSITE, { in: "outColor", in2: "outBlur", operator: "in", result: "outGlow" }, t), this.selectedGlowFilterId = t.id, this.selectedGlowFilter = t, e = b(g.FILTER, { id: "blocklyReplacementGlowFilter" + this.randomIdentifier, height: "160%", width: "180%", y: "-30%", x: "-40%" }, e), b(g.FEGAUSSIANBLUR, { in: "SourceGraphic", stdDeviation: this.REPLACEMENT_GLOW_SIZE }, e), t = b(
            g.FECOMPONENTTRANSFER,
            { result: "outBlur" },
            e
          ), b(g.FEFUNCA, { type: "table", tableValues: "0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1" }, t), b(g.FEFLOOD, { "flood-color": this.REPLACEMENT_GLOW_COLOUR, "flood-opacity": 1, result: "outColor" }, e), b(g.FECOMPOSITE, {
            in: "outColor",
            in2: "outBlur",
            operator: "in",
            result: "outGlow"
          }, e), b(g.FECOMPOSITE, { in: "SourceGraphic", in2: "outGlow", operator: "over" }, e), this.replacementGlowFilterId = e.id, this.replacementGlowFilter = e, o && (o.style.setProperty("--blocklySelectedGlowFilter", `url(#${this.selectedGlowFilterId})`), o.style.setProperty("--blocklyReplacementGlowFilter", `url(#${this.replacementGlowFilterId})`));
        }
        getCSS_(e) {
          return [
            `${e} .blocklyText,`,
            `${e} .blocklyFlyoutLabelText {`,
            `font: ${this.FIELD_TEXT_FONTWEIGHT} ${this.FIELD_TEXT_FONTSIZE}pt ${this.FIELD_TEXT_FONTFAMILY};`,
            "}",
            `${e} .blocklyTextInputBubble textarea {`,
            "font-weight: normal;",
            "}",
            `${e} .blocklyText {`,
            "fill: #fff;",
            "}",
            `${e} .blocklyNonEditableField>rect:not(.blocklyDropdownRect),`,
            `${e} .blocklyEditableField>rect:not(.blocklyDropdownRect) {`,
            `fill: ${this.FIELD_BORDER_RECT_COLOUR};`,
            "}",
            `${e} .blocklyNonEditableField>text,`,
            `${e} .blocklyEditableField>text,`,
            `${e} .blocklyNonEditableField>g>text,`,
            `${e} .blocklyEditableField>g>text {`,
            "fill: #575E75;",
            "}",
            `${e} .blocklyFlyoutLabelText {`,
            "fill: #575E75;",
            "}",
            `${e} .blocklyText.blocklyBubbleText {`,
            "fill: #575E75;",
            "}",
            `${e} .blocklyDraggable:not(.blocklyDisabled)`,
            " .blocklyEditableField:not(.blocklyEditing):hover>rect,",
            `${e} .blocklyDraggable:not(.blocklyDisabled)`,
            " .blocklyEditableField:not(.blocklyEditing):hover>.blocklyPath {",
            "stroke: #fff;",
            "stroke-width: 2;",
            "}",
            `${e} .blocklyHtmlInput {`,
            `font-family: ${this.FIELD_TEXT_FONTFAMILY};`,
            `font-weight: ${this.FIELD_TEXT_FONTWEIGHT};`,
            "color: #575E75;",
            "}",
            `${e} .blocklyDropdownText {`,
            "fill: #fff !important;",
            "}",
            `${e}.blocklyWidgetDiv .blocklyMenuItem,`,
            `${e}.blocklyDropDownDiv .blocklyMenuItem {`,
            `font-family: ${this.FIELD_TEXT_FONTFAMILY};`,
            "}",
            `${e}.blocklyDropDownDiv .blocklyMenuItemContent {`,
            "color: #fff;",
            "}",
            `${e} .blocklyHighlightedConnectionPath {`,
            `stroke: ${this.SELECTED_GLOW_COLOUR};`,
            "}",
            `${e} .blocklyDisabledPattern > .blocklyOutlinePath {`,
            "fill: var(--blocklyDisabledPattern)",
            "}",
            `${e} .blocklyInsertionMarker>.blocklyPath {`,
            `fill-opacity: ${this.INSERTION_MARKER_OPACITY};`,
            "stroke: none;",
            "}",
            `${e} .blocklySelected>.blocklyPath.blocklyPathSelected {`,
            "fill: none;",
            "filter: var(--blocklySelectedGlowFilter);",
            "}",
            `${e} .blocklyReplaceable>.blocklyPath {`,
            "filter: var(--blocklyReplacementGlowFilter);",
            "}"
          ];
        }
      }, zg = class extends el {
        constructor(e, t) {
          super(e, t);
        }
        draw() {
          const e = this.block_.pathObject;
          e.beginDrawing(), this.drawOutline_(), this.drawInternals_(), this.updateConnectionHighlights(), e.setPath(this.outlinePath_ + `
` + this.inlinePath_), this.info_.RTL && e.flipRTL(), this.recordSizeOnBlock_(), this.info_.outputConnection && (e.outputShapeType = this.info_.outputConnection.shape.type), e.endDrawing();
        }
        drawOutline_() {
          this.info_.outputConnection && this.info_.outputConnection.isDynamicShape && !this.info_.hasStatementInput && !this.info_.bottomRow.hasNextConnection ? (this.drawFlatTop_(), this.drawRightDynamicConnection_(), this.drawFlatBottom_(), this.drawLeftDynamicConnection_()) : super.drawOutline_();
        }
        drawLeft_() {
          this.info_.outputConnection && this.info_.outputConnection.isDynamicShape ? this.drawLeftDynamicConnection_() : super.drawLeft_();
        }
        drawRightSideRow_(e) {
          if (!(e.height <= 0)) {
            if (d.isSpacer(e)) {
              const o = e.precedesStatement;
              var t = e.followsStatement;
              if (o || t) {
                const i = this.constants_.INSIDE_CORNERS;
                var s = i.rightHeight;
                s = e.height - (o ? s : 0), t = t ? i.pathBottomRight : "", e = s > 0 ? A("V", e.yPos + s) : "", this.outlinePath_ += t + e + (o ? i.pathTopRight : "");
                return;
              }
            }
            this.outlinePath_ += A("V", e.yPos + e.height);
          }
        }
        drawRightDynamicConnection_() {
          if (!this.info_.outputConnection) throw Error("Cannot draw the output connection of a block that doesn't have one");
          this.outlinePath_ += this.info_.outputConnection.shape.pathRightDown(this.info_.outputConnection.height);
        }
        drawLeftDynamicConnection_() {
          if (!this.info_.outputConnection) throw Error("Cannot draw the output connection of a block that doesn't have one");
          this.positionOutputConnection_(), this.outlinePath_ += this.info_.outputConnection.shape.pathUp(this.info_.outputConnection.height), this.outlinePath_ += "z";
        }
        drawFlatTop_() {
          const e = this.info_.topRow;
          this.positionPreviousConnection_(), this.outlinePath_ += ne(
            e.xPos,
            this.info_.startY
          ), this.outlinePath_ += A("h", e.width);
        }
        drawFlatBottom_() {
          const e = this.info_.bottomRow;
          this.positionNextConnection_(), this.outlinePath_ += A("V", e.baseline), this.outlinePath_ += A("h", -e.width);
        }
        drawInlineInput_(e) {
          this.positionInlineInputConnection_(e);
          const t = e.input.name;
          e.connectedBlock || this.info_.isInsertionMarker || (e = be(e.xPos + e.connectionWidth, e.centerline - e.height / 2) + this.getInlineInputPath(e), this.block_.pathObject.setOutlinePath(t, e));
        }
        getInlineInputPath(e) {
          const t = e.width - e.connectionWidth * 2, s = e.height;
          return A("h", t) + e.shape.pathRightDown(s) + A("h", -t) + e.shape.pathUp(s) + "z";
        }
        drawStatementInput_(e) {
          var t = e.getLastInput();
          const s = t.xPos + t.notchOffset + t.shape.width, o = this.constants_.INSIDE_CORNERS, i = t.shape.pathRight + A(
            "h",
            -(t.notchOffset - o.width)
          ) + o.pathTop, r = e.height - 2 * o.height;
          t = o.pathBottom + A("h", t.notchOffset - o.width) + (t.connectedBottomNextConnection ? "" : t.shape.pathLeft), this.outlinePath_ += A("H", s) + i + A("v", r) + t + A("H", e.xPos + e.width), this.positionStatementInputConnection_(e);
        }
        drawConnectionHighlightPath(e) {
          const t = e.connectionModel;
          if (t.type === C.NEXT_STATEMENT || t.type === C.PREVIOUS_STATEMENT || t.type === C.OUTPUT_VALUE && !e.isDynamicShape) return super.drawConnectionHighlightPath(e);
          e = t.type === C.INPUT_VALUE ? be(e.connectionWidth, -e.height / 2) + this.getInlineInputPath(e) : be(
            e.width,
            -e.height / 2
          ) + e.shape.pathDown(e.height);
          const s = t.getSourceBlock();
          let o, i;
          return (i = (o = s.pathObject).addConnectionHighlight) == null ? void 0 : i.call(o, t, e, t.getOffsetInBlock(), s.RTL);
        }
      }, Qs = class extends X {
        constructor(e, t, s, o, i, r, u) {
          if (super(X.SKIP_SETUP), this.imageElement = this.clickHandler = null, this.flipRtl = this.isDirty_ = this.EDITABLE = !1, this.altText = "", s = Number(le(s)), t = Number(le(t)), isNaN(s) || isNaN(t)) throw Error("Height and width values of an image field must cast to numbers.");
          if (s <= 0 || t <= 0) throw Error("Height and width values of an image field must be greater than 0.");
          this.size_ = new D(t, s + Qs.Y_PADDING), this.imageHeight = s, typeof i == "function" && (this.clickHandler = i), e !== X.SKIP_SETUP && (u ? this.configure_(u) : (this.flipRtl = !!r, this.altText = le(o) || ""), this.setValue(le(e)));
        }
        configure_(e) {
          super.configure_(e), e.flipRtl && (this.flipRtl = e.flipRtl), e.alt && (this.altText = le(e.alt));
        }
        initView() {
          this.imageElement = b(g.IMAGE, { height: this.imageHeight + "px", width: this.size_.width + "px", alt: this.altText }, this.fieldGroup_), this.imageElement.setAttributeNS(Xe, "xlink:href", this.value_), this.fieldGroup_ && R(
            this.fieldGroup_,
            "blocklyImageField"
          ), this.clickHandler && (this.imageElement.style.cursor = "pointer");
        }
        updateSize_() {
        }
        doClassValidation_(e) {
          return typeof e != "string" ? null : e;
        }
        doValueUpdate_(e) {
          this.value_ = e, this.imageElement && this.imageElement.setAttributeNS(Xe, "xlink:href", this.value_);
        }
        getFlipRtl() {
          return this.flipRtl;
        }
        setAlt(e) {
          e !== this.altText && (this.altText = e || "", this.imageElement && this.imageElement.setAttribute("alt", this.altText));
        }
        isClickable() {
          return super.isClickable() && !!this.clickHandler;
        }
        showEditor_() {
          this.clickHandler && this.clickHandler(this);
        }
        setOnClickHandler(e) {
          this.clickHandler = e;
        }
        getText_() {
          return this.altText;
        }
        static fromJson(e) {
          if (!e.src || !e.width || !e.height) throw Error("src, width, and height values for an image field arerequired. The width and height must be non-zero.");
          return new this(e.src, e.width, e.height, void 0, void 0, void 0, e);
        }
      };
      Qs.Y_PADDING = 1, Rt("field_image", Qs), Qs.prototype.DEFAULT_VALUE = "";
      var ll = 14, Qo = class extends X {
        set size_(e) {
          super.size_ = e;
        }
        get size_() {
          const e = super.size_;
          return e.width < ll && (e.width = ll), e;
        }
        constructor(e, t, s) {
          super(X.SKIP_SETUP), this.spellcheck_ = !0, this.htmlInput_ = null, this.isTextValid_ = this.isBeingEdited_ = !1, this.onInputWrapper = this.onKeyDownWrapper = this.valueWhenEditorWasOpened_ = null, this.fullBlockClickTarget_ = !1, this.workspace_ = null, this.SERIALIZABLE = !0, e !== X.SKIP_SETUP && (s && this.configure_(s), this.setValue(e), t && this.setValidator(t));
        }
        configure_(e) {
          super.configure_(e), e.spellcheck !== void 0 && (this.spellcheck_ = e.spellcheck);
        }
        initView() {
          if (!this.getSourceBlock()) throw new he();
          super.initView(), this.isFullBlockField() && (this.clickTarget_ = this.sourceBlock_.getSvgRoot()), this.fieldGroup_ && R(this.fieldGroup_, "blocklyInputField");
        }
        isFullBlockField() {
          const e = this.getSourceBlock();
          if (!e) throw new he();
          let t;
          return this.fullBlockClickTarget_ = !((t = this.getConstants()) == null || !t.FULL_BLOCK_FIELDS) && e.isSimpleReporter();
        }
        doValueInvalid_(e, t = !0) {
          this.isBeingEdited_ && (this.isDirty_ = !0, this.isTextValid_ = !1, e = this.value_, this.value_ = this.valueWhenEditorWasOpened_, this.sourceBlock_ && j() && this.value_ !== e && t && k(new (L(m.BLOCK_CHANGE))(this.sourceBlock_, "field", this.name || null, e, this.value_)));
        }
        doValueUpdate_(e) {
          this.isTextValid_ = this.isDirty_ = !0, this.value_ = e;
        }
        applyColour() {
          const e = this.getSourceBlock();
          if (!e) throw new he();
          this.getConstants().FULL_BLOCK_FIELDS && this.fieldGroup_ && (!this.isFullBlockField() && this.borderRect_ ? (this.borderRect_.style.display = "block", this.borderRect_.setAttribute("stroke", e.getColourTertiary())) : (this.borderRect_.style.display = "none", e.pathObject.svgPath.setAttribute("fill", this.getConstants().FIELD_BORDER_RECT_COLOUR)));
        }
        getSize() {
          let e;
          return (e = this.getConstants()) != null && e.FULL_BLOCK_FIELDS && (this.render_(), this.isDirty_ = !1), super.getSize();
        }
        onLocationChange() {
          this.isBeingEdited_ && this.resizeEditor_();
        }
        render_() {
          if (super.render_(), this.isBeingEdited_) {
            var e = this.htmlInput_;
            this.isTextValid_ ? (F(e, "blocklyInvalidInput"), ie(e, ee.INVALID, !1)) : (R(e, "blocklyInvalidInput"), ie(e, ee.INVALID, !0));
          }
          if (e = this.getSourceBlock(), !e) throw new he();
          this.getConstants().FULL_BLOCK_FIELDS && e.applyColour();
        }
        setSpellcheck(e) {
          e !== this.spellcheck_ && (this.spellcheck_ = e, this.htmlInput_ && this.htmlInput_.setAttribute("spellcheck", this.spellcheck_));
        }
        showEditor_(e, t = !1, s = !0) {
          this.workspace_ = this.sourceBlock_.workspace, !t && this.workspace_.options.modalInputs && (X$ || V$ || yu) ? this.showPromptEditor() : this.showInlineEditor(t, s);
        }
        showPromptEditor() {
          yn(
            n.Msg$$module$build$src$core$msg.CHANGE_VALUE_TITLE,
            this.getText(),
            (e) => {
              e !== null && this.setValue(this.getValueFromEditorText_(e)), this.onFinishEditing_(this.value_);
            }
          );
        }
        showInlineEditor(e, t) {
          const s = this.getSourceBlock();
          if (!s) throw new he();
          Wn(this, s.RTL, this.widgetDispose_.bind(this), this.workspace_, t), this.htmlInput_ = this.widgetCreate_(), this.isBeingEdited_ = !0, this.valueWhenEditorWasOpened_ = this.value_, e || (this.htmlInput_.focus({ preventScroll: !0 }), this.htmlInput_.select());
        }
        widgetCreate_() {
          var e = this.getSourceBlock();
          if (!e) throw new he();
          n.setGroup$$module$build$src$core$events$utils(!0);
          const t = Ro();
          var s = this.getClickTarget_();
          if (!s) throw Error("A click target has not been set.");
          R(s, "blocklyEditing"), s = document.createElement("input"), s.className = "blocklyHtmlInput", s.setAttribute("spellcheck", this.spellcheck_);
          const o = this.workspace_.getAbsoluteScale();
          var i = this.getConstants().FIELD_TEXT_FONTSIZE * o + "pt";
          return t.style.fontSize = i, s.style.fontSize = i, i = Qo.BORDERRADIUS * o + "px", this.isFullBlockField() && (i = this.getScaledBBox(), i = (i.bottom - i.top) / 2 + "px", e = e.getParent() ? e.getParent().getColourTertiary() : this.sourceBlock_.getColourTertiary(), s.style.border = 1 * o + "px solid " + e, t.style.borderRadius = i, t.style.transition = "box-shadow 0.25s ease 0s", this.getConstants().FIELD_TEXTINPUT_BOX_SHADOW && (t.style.boxShadow = "rgba(255, 255, 255, 0.3) 0 0 0 " + 4 * o + "px")), s.style.borderRadius = i, t.appendChild(s), s.value = s.defaultValue = this.getEditorText_(this.value_), s.setAttribute("data-untyped-default-value", String(this.value_)), this.resizeEditor_(), this.bindInputEvents_(s), s;
        }
        widgetDispose_() {
          this.isBeingEdited_ = !1, this.isTextValid_ = !0, this.forceRerender(), this.onFinishEditing_(this.value_), this.sourceBlock_ && j() && this.valueWhenEditorWasOpened_ !== null && this.valueWhenEditorWasOpened_ !== this.value_ && (k(new (L(m.BLOCK_CHANGE))(
            this.sourceBlock_,
            "field",
            this.name || null,
            this.valueWhenEditorWasOpened_,
            this.value_
          )), this.valueWhenEditorWasOpened_ = null), n.setGroup$$module$build$src$core$events$utils(!1), this.unbindInputEvents_();
          var e = Ro().style;
          if (e.width = "auto", e.height = "auto", e.fontSize = "", e.transition = "", e.boxShadow = "", this.htmlInput_ = null, e = this.getClickTarget_(), !e) throw Error("A click target has not been set.");
          F(e, "blocklyEditing");
        }
        onFinishEditing_(e) {
        }
        bindInputEvents_(e) {
          this.onKeyDownWrapper = w(e, "keydown", this, this.onHtmlInputKeyDown_), this.onInputWrapper = w(e, "input", this, this.onHtmlInputChange);
        }
        unbindInputEvents_() {
          this.onKeyDownWrapper && (H(this.onKeyDownWrapper), this.onKeyDownWrapper = null), this.onInputWrapper && (H(this.onInputWrapper), this.onInputWrapper = null);
        }
        onHtmlInputKeyDown_(e) {
          if (e.key === "Enter") Ms(this), It();
          else if (e.key === "Escape") this.setValue(this.htmlInput_.getAttribute("data-untyped-default-value"), !1), Ms(this), It();
          else if (e.key === "Tab") {
            e.preventDefault();
            var t, s = (t = this.workspace_) == null ? void 0 : t.getCursor();
            t = (o) => (o instanceof Qo || o instanceof z && o.isSimpleReporter()) && o !== this.getSourceBlock(), e = e.shiftKey ? s == null ? void 0 : s.getPreviousNode(this, t, !1) : s == null ? void 0 : s.getNextNode(this, t, !1), e = e instanceof z && e.isSimpleReporter() ? e.getFields().next().value : e, e instanceof Qo && (Ms(this), It(), s = e.getSourceBlock(), e.isFullBlockField() && s && s instanceof z ? n.getFocusManager$$module$build$src$core$focus_manager().focusNode(s) : n.getFocusManager$$module$build$src$core$focus_manager().focusNode(e), e.showEditor());
          }
        }
        onHtmlInputChange(e) {
          e = this.value_, this.setValue(this.getValueFromEditorText_(this.htmlInput_.value), !1), this.sourceBlock_ && j() && this.value_ !== e && k(new (L(m.BLOCK_FIELD_INTERMEDIATE_CHANGE))(
            this.sourceBlock_,
            this.name || null,
            e,
            this.value_
          ));
        }
        setEditorValue_(e, t = !0) {
          this.isDirty_ = !0, this.isBeingEdited_ && (this.htmlInput_.value = this.getEditorText_(e)), this.setValue(e, t);
        }
        resizeEditor_() {
          bt().then(() => {
            const e = this.getSourceBlock();
            if (!e) throw new he();
            const t = Ro(), s = this.getScaledBBox();
            t.style.width = s.right - s.left + "px", t.style.height = s.bottom - s.top + "px";
            const o = s.top;
            t.style.left = `${e.RTL ? s.right - t.offsetWidth : s.left}px`, t.style.top = `${o}px`;
          });
        }
        repositionForWindowResize() {
          let e;
          const t = (e = this.getSourceBlock()) == null ? void 0 : e.getRootBlock();
          return t instanceof z ? (Ao(this.workspace_, this.workspace_.getMetricsManager().getViewMetrics(!0), t) || this.resizeEditor_(), !0) : !1;
        }
        positionTextElement_(e, t) {
          const s = e * 2 + t;
          super.positionTextElement_(e + (s < ll ? (ll - s) / 2 : 0), t);
        }
        getText_() {
          return this.isBeingEdited_ && this.htmlInput_ ? this.htmlInput_.value : null;
        }
        getEditorText_(e) {
          return `${e}`;
        }
        getValueFromEditorText_(e) {
          return e;
        }
      };
      Qo.BORDERRADIUS = 4, n.FieldTextInput$$module$build$src$core$field_textinput = class extends Qo {
        constructor(e, t, s) {
          super(e, t, s);
        }
        initView() {
          super.initView(), this.fieldGroup_ && R(this.fieldGroup_, "blocklyTextInputField");
        }
        doClassValidation_(e) {
          return e === void 0 ? null : `${e}`;
        }
        static fromJson(e) {
          return new this(le(e.text), void 0, e);
        }
      }, Rt("field_input", n.FieldTextInput$$module$build$src$core$field_textinput), n.FieldTextInput$$module$build$src$core$field_textinput.prototype.DEFAULT_VALUE = "", n.FieldTextInput$$module$build$src$core$field_textinput;
      var Yg = class extends Ra {
        constructor(e) {
          super(e);
        }
        endsWithElemSpacer() {
          return !1;
        }
        hasLeftSquareCorner(e) {
          return !!e.outputConnection;
        }
        hasRightSquareCorner(e) {
          return !!e.outputConnection && !e.statementInputCount && !e.nextConnection;
        }
      }, cl = class extends Zr {
        constructor(e, t) {
          if (super(e, t), this.connectedBottomNextConnection = !1, this.connectedBlock) {
            for (e = this.connectedBlock; t = e.getNextBlock(); ) e = t;
            e.nextConnection || (this.height = this.connectedBlockHeight, this.connectedBottomNextConnection = !0);
          }
        }
      }, Kg = class extends Lt {
        constructor(e) {
          super(e), this.width = this.height = 0, this.type |= d.getType("RIGHT_CONNECTION");
        }
      }, jg = class extends Aa {
        constructor(e) {
          super(e);
        }
        endsWithElemSpacer() {
          return !1;
        }
        hasLeftSquareCorner(e) {
          const t = (e.hat ? e.hat === "cap" : this.constants_.ADD_START_HATS) && !e.outputConnection && !e.previousConnection;
          return !!e.outputConnection || t;
        }
        hasRightSquareCorner(e) {
          return !!e.outputConnection && !e.statementInputCount && !e.nextConnection;
        }
      }, Jg = class extends tn {
        constructor(e, t) {
          super(e, t), this.isInline = !0, this.renderer_ = e, this.constants_ = this.renderer_.getConstants(), this.topRow = new jg(this.constants_), this.bottomRow = new Yg(this.constants_), this.isMultiRow = !t.getInputsInline() || t.isCollapsed(), this.hasStatementInput = t.statementInputCount > 0, this.rightSide = this.outputConnection ? new Kg(this.constants_) : null, this.rightAlignedDummyInputs = /* @__PURE__ */ new WeakMap();
        }
        getRenderer() {
          return this.renderer_;
        }
        measure() {
          this.createRows_(), this.addElemSpacing_(), this.addRowSpacing_(), this.adjustXPosition_(), this.computeBounds_(), this.alignRowElements_(), this.finalize_();
        }
        shouldStartNewRow_(e, t) {
          return t ? t instanceof Zt || e instanceof Je || t instanceof Je ? !0 : e instanceof n.ValueInput$$module$build$src$core$inputs$value_input || e instanceof yt || e instanceof Zt ? !this.isInline || this.isMultiRow : !1 : !1;
        }
        getDesiredRowWidth_(e) {
          return e.hasStatement ? this.width - this.startX - (this.constants_.INSIDE_CORNERS.rightWidth || 0) : super.getDesiredRowWidth_(e);
        }
        getInRowSpacing_(e, t) {
          return e && t || !this.outputConnection || !this.outputConnection.isDynamicShape || this.hasStatementInput || this.bottomRow.hasNextConnection ? !e && t && d.isStatementInput(t) ? this.constants_.STATEMENT_INPUT_PADDING_LEFT : e && d.isLeftRoundedCorner(e) && t && (d.isPreviousConnection(t) || d.isNextConnection(t)) ? t.notchOffset - this.constants_.CORNER_RADIUS : e && d.isLeftSquareCorner(e) && t && d.isHat(t) || e && d.isField(e) && e.width === 0 ? this.constants_.NO_PADDING : this.constants_.MEDIUM_PADDING : this.constants_.NO_PADDING;
        }
        getSpacerRowHeight_(e, t) {
          if (d.isTopRow(e) && d.isBottomRow(t)) return this.constants_.EMPTY_BLOCK_SPACER_HEIGHT;
          const s = d.isInputRow(e) && e.hasStatement, o = d.isInputRow(t) && t.hasStatement;
          return o || s ? (e = Math.max(this.constants_.NOTCH_HEIGHT, this.constants_.INSIDE_CORNERS.rightHeight || 0), o && s ? Math.max(e, this.constants_.DUMMY_INPUT_MIN_HEIGHT) : e) : d.isTopRow(e) ? e.hasPreviousConnection || this.outputConnection && !this.hasStatementInput ? this.constants_.NO_PADDING : Math.abs(this.constants_.NOTCH_HEIGHT - this.constants_.CORNER_RADIUS) : d.isBottomRow(t) ? this.outputConnection ? !t.hasNextConnection && this.hasStatementInput ? Math.abs(this.constants_.NOTCH_HEIGHT - this.constants_.CORNER_RADIUS) : this.constants_.NO_PADDING : Math.max(this.topRow.minHeight, Math.max(this.constants_.NOTCH_HEIGHT, this.constants_.CORNER_RADIUS)) - this.constants_.CORNER_RADIUS : this.constants_.MEDIUM_PADDING;
        }
        getSpacerRowWidth_(e, t) {
          const s = this.width - this.startX;
          return d.isInputRow(e) && e.hasStatement || d.isInputRow(t) && t.hasStatement ? Math.max(s, this.constants_.STATEMENT_INPUT_SPACER_MIN_WIDTH) : s;
        }
        getElemCenterline_(e, t) {
          if (e.hasStatement && !d.isSpacer(t) && !d.isStatementInput(t)) return e.yPos + this.constants_.EMPTY_STATEMENT_INPUT_HEIGHT / 2;
          if (d.isInlineInput(t)) {
            const s = t.connectedBlock;
            if (s && s.outputConnection && s.nextConnection) return e.yPos + s.height / 2;
          }
          return super.getElemCenterline_(e, t);
        }
        addInput_(e, t) {
          if ((e instanceof yt || e instanceof Zt) && t.hasDummyInput && t.align === n.Align$$module$build$src$core$inputs$align.LEFT && e.align === n.Align$$module$build$src$core$inputs$align.RIGHT) this.rightAlignedDummyInputs.set(
            t,
            e
          );
          else if (e instanceof Je) {
            t.elements.push(new cl(this.constants_, e)), t.hasStatement = !0, t.align === null && (t.align = e.align);
            return;
          }
          super.addInput_(e, t);
        }
        addAlignmentPadding_(e, t) {
          if (this.rightAlignedDummyInputs.get(e)) {
            let s;
            for (let o = 0; o < e.elements.length; o++) {
              const i = e.elements[o];
              if (d.isSpacer(i) && (s = i), d.isField(i) && i.parentInput === this.rightAlignedDummyInputs.get(e)) break;
            }
            if (s) {
              s.width += t, e.width += t;
              return;
            }
          }
          super.addAlignmentPadding_(e, t);
        }
        adjustXPosition_() {
          const e = this.constants_.NOTCH_OFFSET_LEFT + this.constants_.NOTCH_WIDTH;
          let t = e;
          for (let i = 2; i < this.rows.length - 1; i += 2) {
            var s = this.rows[i - 1];
            const r = this.rows[i];
            var o = this.rows[i + 1];
            if (s = i === 2 ? !!this.topRow.hasPreviousConnection : !!s.followsStatement, o = i + 2 >= this.rows.length - 1 ? !!this.bottomRow.hasNextConnection : !!o.precedesStatement, d.isInputRow(r) && r.hasStatement) {
              r.measure();
              let u, h;
              t = r.width - ((h = (u = r.getLastInput()) == null ? void 0 : u.width) != null ? h : 0) + e;
            } else if (s && (i === 2 || o) && d.isInputRow(r) && !r.hasStatement) {
              o = r.xPos, s = null;
              for (let u = 0; u < r.elements.length; u++) {
                const h = r.elements[u];
                d.isSpacer(h) && (s = h), !(s && (d.isField(h) || d.isInput(h)) && o < t) || d.isField(h) && (h.field instanceof Js || h.field instanceof Qs) || (s.width += t - o), o += h.width;
              }
            }
          }
        }
        finalizeOutputConnection_() {
          if (this.outputConnection && this.outputConnection.isDynamicShape) {
            var e = this.outputConnection.shape;
            if ("isDynamic" in e && e.isDynamic) {
              for (var t = 0, s = 0; s < this.rows.length; s++) {
                const o = this.rows[s];
                o.yPos = t, t += o.height;
              }
              this.height = t, s = this.bottomRow.hasNextConnection ? this.height - this.bottomRow.descenderHeight : this.height, t = e.height(s), s = e.width(s), this.outputConnection.height = t, this.outputConnection.width = s, this.outputConnection.startX = s, this.outputConnection.connectionOffsetY = e.connectionOffsetY(t), this.outputConnection.connectionOffsetX = e.connectionOffsetX(s), e = 0, this.hasStatementInput || this.bottomRow.hasNextConnection || (e = s, this.rightSide.height = t, this.rightSide.width = e, this.rightSide.centerline = t / 2, this.rightSide.xPos = this.width + e), this.startX = s, this.width += s + e, this.widthWithChildren += s + e;
            }
          }
        }
        finalizeHorizontalAlignment_() {
          if (this.outputConnection && !this.hasStatementInput && !this.bottomRow.hasNextConnection) {
            for (var e = 0, t = 0; t < this.rows.length; t++) {
              var s = this.rows[t];
              if (!d.isInputRow(s)) continue;
              e = s.elements[s.elements.length - 2];
              let o = this.getNegativeSpacing_(s.elements[1]), i = this.getNegativeSpacing_(e);
              e = o + i;
              const r = this.constants_.MIN_BLOCK_WIDTH + this.outputConnection.width * 2;
              this.width - e < r && (e = this.width - r, o = e / 2, i = e / 2), s.elements.unshift(new qe(this.constants_, -o)), s.elements.push(new qe(this.constants_, -i));
            }
            if (e) for (this.width -= e, this.widthWithChildren -= e, this.rightSide.xPos -= e, t = 0; t < this.rows.length; t++) s = this.rows[t], d.isTopOrBottomRow(s) && (s.elements[1].width -= e), s.width -= e, s.widthWithConnectedBlocks -= e;
          }
        }
        getNegativeSpacing_(e) {
          if (!e || !this.outputConnection) return 0;
          const t = this.outputConnection.width;
          var s = this.outputConnection.shape.type;
          const o = this.constants_;
          if (this.inputRows.length > 1) switch (s) {
            case o.SHAPES.ROUND:
              return s = this.constants_.MAX_DYNAMIC_CONNECTION_SHAPE_WIDTH, s = this.height / 2 > s ? s : this.height / 2, t - s * (1 - Math.sin(Math.acos((s - this.constants_.SMALL_PADDING) / s)));
            default:
              return 0;
          }
          if (d.isInlineInput(e)) {
            const i = e.connectedBlock;
            return e = i ? i.pathObject.outputShapeType : e.shape.type, e == null || i && i.outputConnection && (i.statementInputCount || i.nextConnection) || s === o.SHAPES.HEXAGONAL && s !== e ? 0 : t - this.constants_.SHAPE_IN_SHAPE_PADDING[s][e];
          }
          return d.isField(e) ? s === o.SHAPES.ROUND && e.field instanceof n.FieldTextInput$$module$build$src$core$field_textinput ? t - 2.75 * o.GRID_UNIT : t - this.constants_.SHAPE_IN_SHAPE_PADDING[s][0] : d.isIcon(e) ? this.constants_.SMALL_PADDING : 0;
        }
        finalizeVerticalAlignment_() {
          if (!this.outputConnection) for (let o = 2; o < this.rows.length - 1; o += 2) {
            const i = this.rows[o - 1], r = this.rows[o], u = this.rows[o + 1];
            var e = o === 2, t = o + 2 >= this.rows.length - 1 ? !!this.bottomRow.hasNextConnection : !!u.precedesStatement;
            if (e ? this.topRow.hasPreviousConnection : i.followsStatement) {
              var s = r.elements[1];
              if (s = r.elements.length === 3 && s instanceof Ca && (s.field instanceof Js || s.field instanceof Qs), !e && s) i.height -= this.constants_.SMALL_PADDING, u.height -= this.constants_.SMALL_PADDING, r.height -= this.constants_.MEDIUM_PADDING;
              else if (!e && !t) i.height += this.constants_.SMALL_PADDING;
              else if (t) {
                for (e = !1, t = 0; t < r.elements.length; t++) if (s = r.elements[t], d.isInlineInput(s) && s.connectedBlock && !s.connectedBlock.isShadow() && s.connectedBlock.getHeightWidth().height >= 40) {
                  e = !0;
                  break;
                }
                e && (i.height -= this.constants_.SMALL_PADDING, u.height -= this.constants_.SMALL_PADDING);
              }
            }
          }
        }
        finalize_() {
          this.finalizeOutputConnection_(), this.finalizeHorizontalAlignment_(), this.finalizeVerticalAlignment_(), super.finalize_(), this.rightSide && (this.widthWithChildren += this.rightSide.width);
        }
      }, qg = class extends tl {
        constructor(e, t, s) {
          super(e, t, s), this.svgPathSelected = null, this.outlines = /* @__PURE__ */ new Map(), this.remainingOutlines = /* @__PURE__ */ new Set(), this.outputShapeType = null, this.constants = s;
        }
        setPath(e) {
          super.setPath(e), this.svgPathSelected && this.svgPathSelected.setAttribute("d", e);
        }
        applyColour(e) {
          super.applyColour(e);
          const t = e.getParent();
          e.isShadow() && t && this.svgPath.setAttribute("stroke", t.getColourTertiary());
          for (const s of this.outlines.values()) s.setAttribute("fill", this.style.colourTertiary);
        }
        flipRTL() {
          super.flipRTL();
          for (const e of this.outlines.values()) e.setAttribute("transform", "scale(-1 1)");
        }
        updateSelected(e) {
          this.setClass_("blocklySelected", e), e ? this.svgPathSelected || (this.svgPathSelected = this.svgPath.cloneNode(!0), this.svgPathSelected.classList.add("blocklyPathSelected"), F(this.svgPathSelected, ye.ACTIVE_FOCUS_NODE_CSS_CLASS_NAME), F(this.svgPathSelected, ye.PASSIVE_FOCUS_NODE_CSS_CLASS_NAME), this.svgPathSelected.removeAttribute("tabindex"), this.svgPathSelected.removeAttribute("id"), this.svgRoot.appendChild(this.svgPathSelected)) : this.svgPathSelected && (this.svgRoot.removeChild(this.svgPathSelected), this.svgPathSelected = null);
        }
        updateReplacementFade(e) {
          this.setClass_("blocklyReplaceable", e);
        }
        updateShapeForInputHighlight(e, t) {
          e = e.getParentInput().name, (e = this.getOutlinePath(e)) && (t ? e.setAttribute("filter", "url(#" + this.constants.replacementGlowFilterId + ")") : e.removeAttribute("filter"));
        }
        beginDrawing() {
          this.remainingOutlines.clear();
          for (const e of this.outlines.keys()) this.remainingOutlines.add(e);
        }
        endDrawing() {
          if (this.remainingOutlines.size) for (const e of this.remainingOutlines) this.removeOutlinePath(e);
          this.remainingOutlines.clear();
        }
        setOutlinePath(e, t) {
          e = this.getOutlinePath(e), e.setAttribute("d", t), e.setAttribute("fill", this.style.colourTertiary);
        }
        getOutlinePath(e) {
          return this.outlines.has(e) || this.outlines.set(e, b(g.PATH, { class: "blocklyOutlinePath", d: "" }, this.svgRoot)), this.remainingOutlines.delete(e), this.outlines.get(e);
        }
        removeOutlinePath(e) {
          let t, s;
          (t = this.outlines.get(e)) == null || (s = t.parentNode) == null || s.removeChild(this.outlines.get(e)), this.outlines.delete(e);
        }
      }, Ua = class extends sl {
        constructor(e) {
          super(e);
        }
        makeConstants_() {
          return new Xg();
        }
        makeRenderInfo_(e) {
          return new Jg(this, e);
        }
        makeDrawer_(e, t) {
          return new zg(e, t);
        }
        makePathObject(e, t) {
          return new qg(
            e,
            t,
            this.getConstants()
          );
        }
        getConstants() {
          return this.constants_;
        }
      };
      Li("zelos", Ua);
      var Zg = class {
        constructor(e) {
          this.staticConn = this.draggedConn = this.markerConn = this.fadedBlock = null, this.workspace = e.workspace;
        }
        previewReplacement(e, t, s) {
          n.disable$$module$build$src$core$events$utils();
          try {
            this.hidePreview(), this.fadedBlock = s, s.fadeForReplacement(!0), this.workspace.getRenderer().shouldHighlightConnection(t) && (t.highlight(), this.staticConn = t);
          } finally {
            n.enable$$module$build$src$core$events$utils();
          }
        }
        previewConnection(e, t) {
          if (e !== this.draggedConn || t !== this.staticConn) {
            n.disable$$module$build$src$core$events$utils();
            try {
              this.hidePreview(), this.shouldUseMarkerPreview(e, t) && (this.markerConn = this.previewMarker(e, t)), this.workspace.getRenderer().shouldHighlightConnection(t) && t.highlight(), this.draggedConn = e, this.staticConn = t;
            } finally {
              n.enable$$module$build$src$core$events$utils();
            }
          }
        }
        shouldUseMarkerPreview(e, t) {
          return t.type === C.PREVIOUS_STATEMENT || t.type === C.NEXT_STATEMENT || !(this.workspace.getRenderer() instanceof Ua);
        }
        previewMarker(e, t) {
          const s = e.getSourceBlock(), o = this.createInsertionMarker(s), i = this.getMatchingConnection(s, o, e);
          if (!i) return null;
          o.queueRender(), cs(), i.connect(t);
          const r = { x: t.x - i.x, y: t.y - i.y }, u = i.getOffsetInBlock().clone();
          return bt().then(() => {
            if (!o.isDeadOrDying()) {
              n.disable$$module$build$src$core$events$utils();
              try {
                o == null || o.positionNearConnection(i, r, u), o == null || o.getSvgRoot().setAttribute("visibility", "visible");
              } finally {
                n.enable$$module$build$src$core$events$utils();
              }
            }
          }), i;
        }
        serializeBlockToInsertionMarker(e) {
          const t = tt(e, { addCoordinates: !1, addInputBlocks: !1, addNextBlocks: !1, doFullSerialization: !1 });
          if (!t) throw Error(`Failed to serialize source block. ${e.toDevString()}`);
          return t;
        }
        createInsertionMarker(e) {
          e = this.serializeBlockToInsertionMarker(e), e = As(
            e,
            this.workspace
          );
          for (const t of e.getDescendants(!1)) t.setInsertionMarker(!0);
          return e.initSvg(), e.getSvgRoot().setAttribute("visibility", "hidden"), e;
        }
        getMatchingConnection(e, t, s) {
          if (e = e.getConnections_(!0), t = t.getConnections_(!0), e.length !== t.length) return null;
          for (let o = 0; o < e.length; o++) if (e[o] === s) return t[o];
          return null;
        }
        hidePreview() {
          n.disable$$module$build$src$core$events$utils();
          try {
            this.staticConn && (this.staticConn.unhighlight(), this.staticConn = null), this.fadedBlock && (this.fadedBlock.fadeForReplacement(!1), this.fadedBlock = null), this.markerConn && (this.hideInsertionMarker(this.markerConn), this.draggedConn = this.markerConn = null);
          } finally {
            n.enable$$module$build$src$core$events$utils();
          }
        }
        hideInsertionMarker(e) {
          const t = e.getSourceBlock(), s = t.outputConnection;
          let o;
          if ((o = t.previousConnection) != null && o.targetConnection || s != null && s.targetConnection) t.unplug(!0);
          else {
            let i;
            (i = e.targetBlock()) == null || i.unplug(!1);
          }
          t.dispose();
        }
        dispose() {
          this.hidePreview();
        }
      };
      c(f.CONNECTION_PREVIEWER, We, Zg);
      var Is = {};
      Is.Align = n.Align$$module$build$src$core$inputs$align, Is.DummyInput = yt, Is.EndRowInput = Zt, Is.Input = zo, Is.StatementInput = Je, Is.ValueInput = n.ValueInput$$module$build$src$core$inputs$value_input, Is.inputTypes = n.inputTypes$$module$build$src$core$inputs$input_types;
      var Qg = !1, e_;
      n.CodeGenerator$$module$build$src$core$generator = class {
        constructor(e) {
          this.forBlock = /* @__PURE__ */ Object.create(null), this.FUNCTION_NAME_PLACEHOLDER_ = "{leCUI8hutHZI4480Dc}", this.STATEMENT_SUFFIX = this.STATEMENT_PREFIX = this.INFINITE_LOOP_TRAP = null, this.INDENT = "  ", this.COMMENT_WRAP = 60, this.ORDER_OVERRIDES = [], this.isInitialized = null, this.RESERVED_WORDS_ = "", this.definitions_ = /* @__PURE__ */ Object.create(null), this.functionNames_ = /* @__PURE__ */ Object.create(null), this.nameDB_ = void 0, this.name_ = e, this.FUNCTION_NAME_PLACEHOLDER_REGEXP_ = new RegExp(
            this.FUNCTION_NAME_PLACEHOLDER_,
            "g"
          );
        }
        workspaceToCode(e) {
          e || (console.warn("No workspace specified in workspaceToCode call.  Guessing."), e = l());
          var t = [];
          this.init(e), e = e.getTopBlocks(!0);
          for (let s = 0, o; o = e[s]; s++) {
            let i = this.blockToCode(o);
            Array.isArray(i) && (i = i[0]), i && (o.outputConnection && (i = this.scrubNakedValue(i), this.STATEMENT_PREFIX && !o.suppressPrefixSuffix && (i = this.injectId(this.STATEMENT_PREFIX, o) + i), this.STATEMENT_SUFFIX && !o.suppressPrefixSuffix && (i += this.injectId(
              this.STATEMENT_SUFFIX,
              o
            ))), t.push(i));
          }
          return t = t.join(`
`), t = this.finish(t), t = t.replace(/^\s+\n/, ""), t = t.replace(/\n\s+$/, `
`), t = t.replace(/[ \t]+\n/g, `
`);
        }
        prefixLines(e, t) {
          return t + e.replace(/(?!\n$)\n/g, `
` + t);
        }
        allNestedComments(e) {
          const t = [];
          e = e.getDescendants(!0);
          for (let s = 0; s < e.length; s++) {
            const o = e[s].getCommentText();
            o && t.push(o);
          }
          return t.length && t.push(""), t.join(`
`);
        }
        blockToCode(e, t) {
          if (this.isInitialized === !1 && console.warn("CodeGenerator init was not called before blockToCode was called."), !e) return "";
          if (!e.isEnabled()) return t ? "" : this.blockToCode(e.getNextBlock());
          if (e.isInsertionMarker()) return t ? "" : this.blockToCode(e.getChildren(!1)[0]);
          var s = this.forBlock[e.type];
          if (typeof s != "function") throw Error(`${this.name_} generator does not know how to generate code for block type "${e.type}".`);
          if (s = s.call(e, e, this), Array.isArray(s)) {
            if (!e.outputConnection) throw TypeError("Expecting string from statement block: " + e.type);
            return [this.scrub_(e, s[0], t), s[1]];
          }
          if (typeof s == "string") return this.STATEMENT_PREFIX && !e.suppressPrefixSuffix && (s = this.injectId(this.STATEMENT_PREFIX, e) + s), this.STATEMENT_SUFFIX && !e.suppressPrefixSuffix && (s += this.injectId(this.STATEMENT_SUFFIX, e)), this.scrub_(e, s, t);
          if (s === null) return "";
          throw SyntaxError("Invalid code generated: " + s);
        }
        valueToCode(e, t, s) {
          if (isNaN(s)) throw TypeError("Expecting valid order from block: " + e.type);
          var o = e.getInputTargetBlock(t);
          if (!o && !e.getInput(t)) throw ReferenceError(`Input "${t}" doesn't exist on "${e.type}"`);
          if (!o || (t = this.blockToCode(o), t === "")) return "";
          if (!Array.isArray(t)) throw TypeError(`Expecting tuple from value block: ${o.type} See developers.google.com/blockly/guides/create-custom-blocks/generating-code for more information`);
          if (e = t[0], t = t[1], isNaN(t)) throw TypeError("Expecting valid order from value block: " + o.type);
          if (!e) return "";
          o = !1;
          var i = Math.floor(s);
          const r = Math.floor(t);
          if (i <= r && (i !== r || i !== 0 && i !== 99)) {
            for (o = !0, i = 0; i < this.ORDER_OVERRIDES.length; i++) if (this.ORDER_OVERRIDES[i][0] === s && this.ORDER_OVERRIDES[i][1] === t) {
              o = !1;
              break;
            }
          }
          return o && (e = "(" + e + ")"), e;
        }
        statementToCode(e, t) {
          const s = e.getInputTargetBlock(t);
          if (!s && !e.getInput(t)) throw ReferenceError(`Input "${t}" doesn't exist on "${e.type}"`);
          if (e = this.blockToCode(s), typeof e != "string") throw TypeError("Expecting code from statement block: " + (s && s.type));
          return e && (e = this.prefixLines(e, this.INDENT)), e;
        }
        addLoopTrap(e, t) {
          return this.INFINITE_LOOP_TRAP && (e = this.prefixLines(this.injectId(this.INFINITE_LOOP_TRAP, t), this.INDENT) + e), this.STATEMENT_SUFFIX && !t.suppressPrefixSuffix && (e = this.prefixLines(this.injectId(this.STATEMENT_SUFFIX, t), this.INDENT) + e), this.STATEMENT_PREFIX && !t.suppressPrefixSuffix && (e += this.prefixLines(this.injectId(
            this.STATEMENT_PREFIX,
            t
          ), this.INDENT)), e;
        }
        injectId(e, t) {
          return t = t.id.replace(/\$/g, "$$$$"), e.replace(/%1/g, "'" + t + "'");
        }
        addReservedWords(e) {
          this.RESERVED_WORDS_ += e + ",";
        }
        provideFunction_(e, t) {
          if (!this.definitions_[e]) {
            const s = this.nameDB_.getDistinctName(e, n.NameType$$module$build$src$core$names.PROCEDURE);
            this.functionNames_[e] = s, Array.isArray(t) && (t = t.join(`
`)), t = t.trim().replace(this.FUNCTION_NAME_PLACEHOLDER_REGEXP_, s);
            let o;
            for (; o !== t; ) o = t, t = t.replace(/^(( {2})*) {2}/gm, "$1\0");
            t = t.replace(/\0/g, this.INDENT), this.definitions_[e] = t;
          }
          return this.functionNames_[e];
        }
        getVariableName(e) {
          return this.getName(e, n.NameType$$module$build$src$core$names.VARIABLE);
        }
        getProcedureName(e) {
          return this.getName(e, n.NameType$$module$build$src$core$names.PROCEDURE);
        }
        getName(e, t) {
          if (!this.nameDB_) throw Error("Name database is not defined. You must initialize `nameDB_` in your generator class and call `init` first.");
          return this.nameDB_.getName(e, t);
        }
        init(e) {
          this.definitions_ = /* @__PURE__ */ Object.create(null), this.functionNames_ = /* @__PURE__ */ Object.create(null);
        }
        scrub_(e, t, s) {
          return t;
        }
        finish(e) {
          return this.definitions_ = /* @__PURE__ */ Object.create(null), this.functionNames_ = /* @__PURE__ */ Object.create(null), e;
        }
        scrubNakedValue(e) {
          return e;
        }
      }, e_ = {}, e_.CodeGenerator = n.CodeGenerator$$module$build$src$core$generator;
      var Ha = class extends Yr {
        constructor(e) {
          super(e);
        }
        setMetrics_(e) {
          if (this.isVisible()) {
            var t = this.workspace_.getMetricsManager(), s = t.getScrollMetrics(), o = t.getViewMetrics();
            t = t.getAbsoluteMetrics(), typeof e.y == "number" && (this.workspace_.scrollY = -(s.top + (s.height - o.height) * e.y)), this.workspace_.translate(this.workspace_.scrollX + t.left, this.workspace_.scrollY + t.top);
          }
        }
        getX() {
          if (!this.isVisible()) return 0;
          var e = this.targetWorkspace.getMetricsManager();
          const t = e.getAbsoluteMetrics(), s = e.getViewMetrics();
          return e = e.getToolboxMetrics(), this.targetWorkspace.toolboxPosition === this.toolboxPosition_ ? this.targetWorkspace.getToolbox() ? this.toolboxPosition_ === P.LEFT ? e.width : s.width - this.getWidth() : this.toolboxPosition_ === P.LEFT ? 0 : s.width : this.toolboxPosition_ === P.LEFT ? 0 : s.width + t.left - this.getWidth();
        }
        getY() {
          return 0;
        }
        position() {
          if (this.isVisible() && this.targetWorkspace.isVisible()) {
            var e = this.targetWorkspace.getMetricsManager().getViewMetrics();
            this.height_ = e.height;
            var t = this.getWidth() - this.CORNER_RADIUS;
            this.setBackgroundPath(t, e.height - 2 * this.CORNER_RADIUS), e = this.getX(), t = this.getY(), this.positionAt_(this.getWidth(), this.getHeight(), e, t);
          }
        }
        setBackgroundPath(e, t) {
          const s = this.toolboxPosition_ === P.RIGHT;
          var o = e + this.CORNER_RADIUS;
          o = ["M " + (s ? o : 0) + ",0"], o.push("h", s ? -e : e), o.push(
            "a",
            this.CORNER_RADIUS,
            this.CORNER_RADIUS,
            0,
            0,
            s ? 0 : 1,
            s ? -this.CORNER_RADIUS : this.CORNER_RADIUS,
            this.CORNER_RADIUS
          ), o.push("v", Math.max(0, t)), o.push("a", this.CORNER_RADIUS, this.CORNER_RADIUS, 0, 0, s ? 0 : 1, s ? this.CORNER_RADIUS : -this.CORNER_RADIUS, this.CORNER_RADIUS), o.push("h", s ? e : -e), o.push("z"), this.svgBackground_.setAttribute("d", o.join(" "));
        }
        scrollToStart() {
          let e;
          (e = this.workspace_.scrollbar) == null || e.setY(0);
        }
        wheel_(e) {
          var t = Os(e);
          if (t.y) {
            const s = this.workspace_.getMetricsManager(), o = s.getScrollMetrics();
            t = s.getViewMetrics().top - o.top + t.y;
            let i;
            (i = this.workspace_.scrollbar) == null || i.setY(t), Ri(this.workspace_), It();
          }
          e.preventDefault(), e.stopPropagation();
        }
        layout_(e) {
          this.workspace_.scale = this.targetWorkspace.scale;
          var t = this.MARGIN;
          const s = this.RTL ? t : t + this.tabWidth_;
          for (const o of e) o.getElement().moveBy(s, t), t += o.getElement().getBoundingRectangle().getHeight();
        }
        isDragTowardWorkspace(e) {
          e = Math.atan2(e.y, e.x) / Math.PI * 180;
          const t = this.dragAngleRange_;
          return e < t && e > -t || e < -180 + t || e > 180 - t;
        }
        getClientRect() {
          if (!this.svgGroup_ || this.autoClose || !this.isVisible()) return null;
          const e = this.svgGroup_.getBoundingClientRect(), t = e.left;
          return this.toolboxPosition_ === P.LEFT ? new M(-1e9, 1e9, -1e9, t + e.width) : new M(-1e9, 1e9, t, 1e9);
        }
        reflowInternal_() {
          this.workspace_.scale = this.getFlyoutScale();
          let e = this.getContents().reduce((t, s) => Math.max(t, s.getElement().getBoundingRectangle().getWidth()), 0);
          if (e += this.MARGIN * 1.5 + this.tabWidth_, e *= this.workspace_.scale, e += ue.scrollbarThickness, this.getWidth() !== e) {
            if (this.RTL) for (const t of this.getContents()) {
              const s = t.getElement().getBoundingRectangle().left, o = e / this.workspace_.scale - t.getElement().getBoundingRectangle().getWidth() - this.MARGIN - this.tabWidth_;
              t.getElement().moveBy(o - s, 0);
            }
            this.targetWorkspace.scrollbar || this.autoClose || this.targetWorkspace.getFlyout() !== this || this.toolboxPosition_ !== P.LEFT || this.targetWorkspace.translate(this.targetWorkspace.scrollX + e, this.targetWorkspace.scrollY), this.width_ = e, this.position(), this.targetWorkspace.resizeContents(), this.targetWorkspace.recordDragTargets();
          }
        }
      };
      Ha.registryName = "verticalFlyout", c(f.FLYOUTS_VERTICAL_TOOLBOX, We, Ha);
      var t_ = class extends Yr {
        constructor(e) {
          super(e), this.horizontalLayout = !0;
        }
        setMetrics_(e) {
          if (this.isVisible()) {
            var t = this.workspace_.getMetricsManager(), s = t.getScrollMetrics(), o = t.getViewMetrics();
            t = t.getAbsoluteMetrics(), typeof e.x == "number" && (this.workspace_.scrollX = -(s.left + (s.width - o.width) * e.x)), this.workspace_.translate(this.workspace_.scrollX + t.left, this.workspace_.scrollY + t.top);
          }
        }
        getX() {
          return 0;
        }
        getY() {
          if (!this.isVisible()) return 0;
          var e = this.targetWorkspace.getMetricsManager();
          const t = e.getAbsoluteMetrics(), s = e.getViewMetrics();
          e = e.getToolboxMetrics();
          const o = this.toolboxPosition_ === P.TOP;
          return this.targetWorkspace.toolboxPosition === this.toolboxPosition_ ? this.targetWorkspace.getToolbox() ? o ? e.height : s.height - this.getHeight() : o ? 0 : s.height : o ? 0 : s.height + t.top - this.getHeight();
        }
        position() {
          if (this.isVisible() && this.targetWorkspace.isVisible()) {
            var e = this.targetWorkspace.getMetricsManager().getViewMetrics();
            this.width_ = e.width, e = e.width - 2 * this.CORNER_RADIUS;
            var t = this.getHeight() - this.CORNER_RADIUS;
            this.setBackgroundPath(e, t), e = this.getX(), t = this.getY(), this.positionAt_(this.getWidth(), this.getHeight(), e, t);
          }
        }
        setBackgroundPath(e, t) {
          const s = this.toolboxPosition_ === P.TOP, o = ["M 0," + (s ? 0 : this.CORNER_RADIUS)];
          s ? (o.push("h", e + 2 * this.CORNER_RADIUS), o.push("v", t), o.push("a", this.CORNER_RADIUS, this.CORNER_RADIUS, 0, 0, 1, -this.CORNER_RADIUS, this.CORNER_RADIUS), o.push(
            "h",
            -e
          ), o.push("a", this.CORNER_RADIUS, this.CORNER_RADIUS, 0, 0, 1, -this.CORNER_RADIUS, -this.CORNER_RADIUS)) : (o.push("a", this.CORNER_RADIUS, this.CORNER_RADIUS, 0, 0, 1, this.CORNER_RADIUS, -this.CORNER_RADIUS), o.push("h", e), o.push("a", this.CORNER_RADIUS, this.CORNER_RADIUS, 0, 0, 1, this.CORNER_RADIUS, this.CORNER_RADIUS), o.push("v", t), o.push("h", -e - 2 * this.CORNER_RADIUS)), o.push("z"), this.svgBackground_.setAttribute("d", o.join(" "));
        }
        scrollToStart() {
          let e;
          (e = this.workspace_.scrollbar) == null || e.setX(this.RTL ? 1 / 0 : 0);
        }
        wheel_(e) {
          var t = Os(e);
          if (t = t.x || t.y) {
            const s = this.workspace_.getMetricsManager(), o = s.getScrollMetrics();
            t = s.getViewMetrics().left - o.left + t;
            let i;
            (i = this.workspace_.scrollbar) == null || i.setX(t), Ri(this.workspace_), It();
          }
          e.preventDefault(), e.stopPropagation();
        }
        layout_(e) {
          this.workspace_.scale = this.targetWorkspace.scale;
          const t = this.MARGIN;
          let s = t + this.tabWidth_;
          this.RTL && (e = e.reverse());
          for (const o of e) e = o.getElement().getBoundingRectangle(), e = this.RTL ? s + e.getWidth() : s, o.getElement().moveBy(e, t), s += o.getElement().getBoundingRectangle().getWidth();
        }
        isDragTowardWorkspace(e) {
          e = Math.atan2(e.y, e.x) / Math.PI * 180;
          const t = this.dragAngleRange_;
          return e < 90 + t && e > 90 - t || e > -90 - t && e < -90 + t;
        }
        getClientRect() {
          if (!this.svgGroup_ || this.autoClose || !this.isVisible()) return null;
          const e = this.svgGroup_.getBoundingClientRect(), t = e.top;
          return this.toolboxPosition_ === P.TOP ? new M(-1e9, t + e.height, -1e9, 1e9) : new M(t, 1e9, -1e9, 1e9);
        }
        reflowInternal_() {
          this.workspace_.scale = this.getFlyoutScale();
          let e = this.getContents().reduce((t, s) => Math.max(t, s.getElement().getBoundingRectangle().getHeight()), 0);
          e += this.MARGIN * 1.5, e *= this.workspace_.scale, e += ue.scrollbarThickness, this.getHeight() !== e && (this.targetWorkspace.scrollbar || this.autoClose || this.targetWorkspace.getFlyout() !== this || this.toolboxPosition_ !== P.TOP || this.targetWorkspace.translate(this.targetWorkspace.scrollX, this.targetWorkspace.scrollY + e), this.height_ = e, this.position(), this.targetWorkspace.resizeContents(), this.targetWorkspace.recordDragTargets());
        }
      };
      c(f.FLYOUTS_HORIZONTAL_TOOLBOX, We, t_);
      var nn = class extends ve {
        constructor(e, t, s, o, i) {
          super(X.SKIP_SETUP), this.defaultType = "", this.variableTypes = [], this.variable = null, this.SERIALIZABLE = !0, this.menuGenerator_ = nn.dropdownCreate, this.defaultVariableName = typeof e == "string" ? e : "", this.size_ = new D(0, 0), e !== X.SKIP_SETUP && (i ? this.configure_(i) : this.setTypes(s, o), t && this.setValidator(t));
        }
        configure_(e) {
          super.configure_(e), this.setTypes(e.variableTypes, e.defaultType);
        }
        initModel() {
          var e = this.getSourceBlock();
          if (!e) throw new he();
          this.variable || (e = n.getOrCreateVariablePackage$$module$build$src$core$variables(e.workspace, null, this.defaultVariableName, this.defaultType), this.doValueUpdate_(e.getId()));
        }
        initView() {
          super.initView(), R(
            this.fieldGroup_,
            "blocklyVariableField"
          );
        }
        shouldAddBorderRect_() {
          const e = this.getSourceBlock();
          if (!e) throw new he();
          return super.shouldAddBorderRect_() && (!this.getConstants().FIELD_DROPDOWN_NO_BORDER_RECT_SHADOW || e.type !== "variables_get");
        }
        fromXml(e) {
          var t = this.getSourceBlock();
          if (!t) throw new he();
          const s = e.getAttribute("id"), o = e.textContent, i = e.getAttribute("variabletype") || e.getAttribute("variableType") || "";
          if (t = n.getOrCreateVariablePackage$$module$build$src$core$variables(
            t.workspace,
            s,
            o,
            i
          ), i !== null && i !== t.getType()) throw Error("Serialized variable type with id '" + t.getId() + "' had type " + t.getType() + ", and does not match variable field that references it: " + St(e) + ".");
          this.setValue(t.getId());
        }
        toXml(e) {
          return this.initModel(), e.id = this.variable.getId(), e.textContent = this.variable.getName(), this.variable.getType() && e.setAttribute("variabletype", this.variable.getType()), e;
        }
        saveState(e) {
          var t = this.saveLegacyState(nn);
          return t !== null || (this.initModel(), t = { id: this.variable.getId() }, e && (t.name = this.variable.getName(), t.type = this.variable.getType())), t;
        }
        loadState(e) {
          const t = this.getSourceBlock();
          if (!t) throw new he();
          this.loadLegacyState(nn, e) || (e = n.getOrCreateVariablePackage$$module$build$src$core$variables(t.workspace, e.id || null, e.name, e.type || ""), this.setValue(e.getId()));
        }
        setSourceBlock(e) {
          if (e.isShadow()) throw Error("Variable fields are not allowed to exist on shadow blocks.");
          super.setSourceBlock(e);
        }
        getValue() {
          return this.variable ? this.variable.getId() : null;
        }
        getText() {
          return this.variable ? this.variable.getName() : "";
        }
        getVariable() {
          return this.variable;
        }
        getDefaultType() {
          return this.defaultType;
        }
        getValidator() {
          return this.variable ? this.validator_ : null;
        }
        doClassValidation_(e) {
          if (e === null) return null;
          var t = this.getSourceBlock();
          if (!t) throw new he();
          return t = n.getVariable$$module$build$src$core$variables(t.workspace, e), t ? (t = t.getType(), this.typeIsAllowed(t) ? e : (console.warn("Variable type doesn't match this field!  Type was " + t), null)) : (console.warn("Variable id doesn't point to a real variable! ID was " + e), null);
        }
        doValueUpdate_(e) {
          const t = this.getSourceBlock();
          if (!t) throw new he();
          this.variable = n.getVariable$$module$build$src$core$variables(t.workspace, e), super.doValueUpdate_(e);
        }
        typeIsAllowed(e) {
          const t = this.getVariableTypes();
          if (!t) return !0;
          for (let s = 0; s < t.length; s++) if (e === t[s]) return !0;
          return !1;
        }
        getVariableTypes() {
          if (this.variableTypes) return this.variableTypes;
          if (!this.sourceBlock_ || this.sourceBlock_.isDeadOrDying()) return [""];
          let e = this.sourceBlock_.workspace.getVariableMap().getTypes();
          if (this.sourceBlock_.isInFlyout) {
            const t = this.sourceBlock_.workspace.getPotentialVariableMap();
            if (!t) return e;
            e = Array.from(/* @__PURE__ */ new Set([...e, ...t.getTypes()]));
          }
          return e;
        }
        setTypes(e = null, t = "") {
          var s = this.getText();
          if (Array.isArray(e)) {
            if (e.length === 0) throw Error(`'variableTypes' of field variable ${s} was an empty list. If you want to include all variable types, pass 'null' instead.`);
            s = !1;
            for (let o = 0; o < e.length; o++) e[o] === t && (s = !0);
            if (!s) throw Error("Invalid default type '" + t + "' in the definition of a FieldVariable");
          } else if (e !== null) throw Error(`'variableTypes' was not an array or null in the definition of FieldVariable ${s}`);
          this.defaultType = t, this.variableTypes = e;
        }
        refreshVariableName() {
          this.forceRerender();
        }
        onItemSelected_(e, t) {
          if (e = t.getValue(), this.sourceBlock_ && !this.sourceBlock_.isDeadOrDying()) {
            if (e === $a && this.variable) {
              n.renameVariable$$module$build$src$core$variables(
                this.sourceBlock_.workspace,
                this.variable
              );
              return;
            }
            if (e === pa && this.variable) {
              e = this.variable.getWorkspace(), n.deleteVariable$$module$build$src$core$variables(e, this.variable, this.sourceBlock_);
              return;
            }
          }
          this.setValue(e);
        }
        referencesVariables() {
          return !0;
        }
        static fromJson(e) {
          return new this(le(e.variable), void 0, void 0, void 0, e);
        }
        static dropdownCreate() {
          if (!this.variable) throw Error("Tried to call dropdownCreate on a variable field with no variable selected.");
          const e = this.getText();
          let t = [];
          var s = this.getSourceBlock();
          if (s && !s.isDeadOrDying()) {
            s = s.workspace;
            const r = this.getVariableTypes();
            for (let u = 0; u < r.length; u++) {
              const h = r[u], E = s.getVariableMap().getVariablesOfType(h);
              if (t = t.concat(E), s.isFlyout) {
                var o = void 0, i = void 0;
                t = t.concat((i = (o = s.getPotentialVariableMap()) == null ? void 0 : o.getVariablesOfType(h)) != null ? i : []);
              }
            }
          }
          for (t.sort(Eo), o = [], i = 0; i < t.length; i++) o[i] = [t[i].getName(), t[i].getId()];
          return o.push([
            n.Msg$$module$build$src$core$msg.RENAME_VARIABLE,
            $a
          ]), n.Msg$$module$build$src$core$msg.DELETE_VARIABLE && o.push([n.Msg$$module$build$src$core$msg.DELETE_VARIABLE.replace("%1", e), pa]), o;
        }
      };
      Rt("field_variable", nn);
      var Ga = class extends Qo {
        constructor(e, t, s, o, i, r) {
          super(X.SKIP_SETUP), this.min_ = -1 / 0, this.max_ = 1 / 0, this.precision_ = 0, this.decimalPlaces = null, this.spellcheck_ = !1, e !== X.SKIP_SETUP && (r ? this.configure_(r) : this.setConstraints(t, s, o), this.setValue(e), i && this.setValidator(i));
        }
        configure_(e) {
          super.configure_(e), this.setMinInternal(e.min), this.setMaxInternal(e.max), this.setPrecisionInternal(e.precision);
        }
        setConstraints(e, t, s) {
          this.setMinInternal(e), this.setMaxInternal(t), this.setPrecisionInternal(s), this.setValue(this.getValue());
        }
        setMin(e) {
          this.setMinInternal(e), this.setValue(this.getValue());
        }
        setMinInternal(e) {
          e == null ? this.min_ = -1 / 0 : (e = Number(e), isNaN(e) || (this.min_ = e));
        }
        getMin() {
          return this.min_;
        }
        setMax(e) {
          this.setMaxInternal(e), this.setValue(this.getValue());
        }
        setMaxInternal(e) {
          e == null ? this.max_ = 1 / 0 : (e = Number(e), isNaN(e) || (this.max_ = e));
        }
        getMax() {
          return this.max_;
        }
        setPrecision(e) {
          this.setPrecisionInternal(e), this.setValue(this.getValue());
        }
        setPrecisionInternal(e) {
          this.precision_ = Number(e) || 0;
          let t = String(this.precision_);
          t.includes("e") && (t = this.precision_.toLocaleString("en-US", { maximumFractionDigits: 20 }));
          const s = t.indexOf(".");
          this.decimalPlaces = s === -1 ? e ? 0 : null : t.length - s - 1;
        }
        getPrecision() {
          return this.precision_;
        }
        doClassValidation_(e) {
          return e === null || (e = `${e}`.replace(/O/gi, "0"), e = e.replace(/,/g, ""), e = e.replace(/infinity/i, "Infinity"), e = Number(e || 0), isNaN(e)) ? null : (e = Math.min(Math.max(
            e,
            this.min_
          ), this.max_), this.precision_ && isFinite(e) && (e = Math.round(e / this.precision_) * this.precision_), this.decimalPlaces !== null && (e = Number(e.toFixed(this.decimalPlaces))), e);
        }
        widgetCreate_() {
          const e = super.widgetCreate_();
          return this.min_ > -1 / 0 && (e.min = `${this.min_}`, ie(e, ee.VALUEMIN, this.min_)), this.max_ < 1 / 0 && (e.max = `${this.max_}`, ie(
            e,
            ee.VALUEMAX,
            this.max_
          )), e;
        }
        initView() {
          super.initView(), this.fieldGroup_ && R(this.fieldGroup_, "blocklyNumberField");
        }
        static fromJson(e) {
          return new this(e.value, void 0, void 0, void 0, void 0, e);
        }
      };
      Rt("field_number", Ga), Ga.prototype.DEFAULT_VALUE = 0;
      var s_ = class extends Js {
        constructor(e, t, s) {
          super(String(e ?? ""), t, s), this.EDITABLE = !1, this.SERIALIZABLE = !0;
        }
        static fromJson(e) {
          return new this(le(e.text), void 0, e);
        }
      };
      Rt("field_label_serializable", s_);
      var eo = class extends X {
        constructor(e, t, s) {
          super(X.SKIP_SETUP), this.SERIALIZABLE = !0, this.value_ = this.value_, this.checkChar = eo.CHECK_CHAR, e !== X.SKIP_SETUP && (s && this.configure_(s), this.setValue(e), t && this.setValidator(t));
        }
        configure_(e) {
          super.configure_(e), e.checkCharacter && (this.checkChar = e.checkCharacter);
        }
        saveState() {
          const e = this.saveLegacyState(eo);
          return e !== null ? e : this.getValueBoolean();
        }
        initView() {
          super.initView();
          const e = this.getTextElement();
          R(this.fieldGroup_, "blocklyCheckboxField"), e.style.display = this.value_ ? "block" : "none";
        }
        render_() {
          this.textContent_ && (this.textContent_.nodeValue = this.getDisplayText_()), this.updateSize_(this.getConstants().FIELD_CHECKBOX_X_OFFSET);
        }
        getDisplayText_() {
          return this.checkChar;
        }
        setCheckCharacter(e) {
          this.checkChar = e || eo.CHECK_CHAR, this.forceRerender();
        }
        showEditor_() {
          this.setValue(!this.value_);
        }
        doClassValidation_(e) {
          return e === !0 || e === "TRUE" ? "TRUE" : e === !1 || e === "FALSE" ? "FALSE" : null;
        }
        doValueUpdate_(e) {
          this.value_ = this.convertValueToBool(e), this.textElement_ && (this.textElement_.style.display = this.value_ ? "block" : "none");
        }
        getValue() {
          return this.value_ ? "TRUE" : "FALSE";
        }
        getValueBoolean() {
          return this.value_;
        }
        getText() {
          return String(this.convertValueToBool(this.value_));
        }
        convertValueToBool(e) {
          return typeof e == "string" ? e === "TRUE" : !!e;
        }
        static fromJson(e) {
          return new this(e.checked, void 0, e);
        }
      };
      eo.CHECK_CHAR = "✓", Rt("field_checkbox", eo), eo.prototype.DEFAULT_VALUE = !1;
      var o_ = class {
        constructor(e, t) {
          this.draggable = e, this.workspace = t, this.dragTarget = null, this.startLoc = e.getRelativeToSurfaceXY();
        }
        onDragStart(e) {
          n.getGroup$$module$build$src$core$events$utils() || n.setGroup$$module$build$src$core$events$utils(!0), this.draggable.startDrag(e);
        }
        onDrag(e, t) {
          this.moveDraggable(e, t), t = this.getRoot(this.draggable), st(t) && t.setDeleteStyle(this.wouldDeleteDraggable(e, t)), this.updateDragTarget(e);
        }
        updateDragTarget(e) {
          e = this.workspace.getDragTarget(e);
          const t = this.getRoot(this.draggable);
          if (this.dragTarget !== e) {
            let s;
            (s = this.dragTarget) == null || s.onDragExit(t), e == null || e.onDragEnter(t);
          }
          e == null || e.onDragOver(t), this.dragTarget = e;
        }
        moveDraggable(e, t) {
          t = this.pixelsToWorkspaceUnits(t), t = I.sum(this.startLoc, t), this.draggable.drag(t, e);
        }
        wouldDeleteDraggable(e, t) {
          return (e = this.workspace.getDragTarget(e)) && this.workspace.getComponentManager().hasCapability(e.id, Q.Capability.DELETE_AREA) ? e.wouldDelete(t) : !1;
        }
        onDragEnd(e) {
          const t = n.getGroup$$module$build$src$core$events$utils();
          var s = this.workspace.getDragTarget(e);
          const o = this.getRoot(this.draggable);
          if (s) {
            let i;
            (i = this.dragTarget) == null || i.onDrop(o);
          }
          this.shouldReturnToStart(e, o) && this.draggable.revertDrag(), (s = st(o) && this.wouldDeleteDraggable(e, o)) && this.draggable instanceof z && qn(this.draggable.getRootBlock()), this.draggable.endDrag(e), s && st(o) && (n.setGroup$$module$build$src$core$events$utils(t), o.dispose()), n.setGroup$$module$build$src$core$events$utils(!1), !s && Ft(this.draggable) && n.getFocusManager$$module$build$src$core$focus_manager().focusNode(this.draggable);
        }
        getRoot(e) {
          return e instanceof z ? e.getRootBlock() : e;
        }
        shouldReturnToStart(e, t) {
          return (e = this.workspace.getDragTarget(e)) ? e.shouldPreventMove(t) : !1;
        }
        pixelsToWorkspaceUnits(e) {
          return e = new I(e.x / this.workspace.scale, e.y / this.workspace.scale), this.workspace.isMutator && e.scale(1 / this.workspace.options.parentWorkspace.scale), e;
        }
      };
      c(f.BLOCK_DRAGGER, We, o_);
      var rn = {};
      rn.BlockDragStrategy = cg, rn.BubbleDragStrategy = sg, rn.CommentDragStrategy = jp, rn.Dragger = o_;
      var Va = class extends me {
        constructor(e, t, s) {
          super(e ? e.workspace.id : void 0), this.type = m.BLOCK_DRAG, e && (this.blockId = e.id, this.isStart = t, this.blocks = s);
        }
        toJson() {
          const e = super.toJson();
          if (this.isStart === void 0) throw Error("Whether this event is the start of a drag is undefined. Either pass the value to the constructor, or call fromJson");
          if (this.blockId === void 0) throw Error("The block ID is undefined. Either pass a block to the constructor, or call fromJson");
          return e.isStart = this.isStart, e.blockId = this.blockId, e.blocks = this.blocks, e;
        }
        static fromJson(e, t, s) {
          return t = me.fromJson(e, t, s ?? new Va()), t.isStart = e.isStart, t.blockId = e.blockId, t.blocks = e.blocks, t;
        }
      };
      c(f.EVENT, m.BLOCK_DRAG, Va);
      var Wa = class extends it {
        constructor(e, t, s, o) {
          super(e), this.type = m.BLOCK_FIELD_INTERMEDIATE_CHANGE, this.recordUndo = !1, e && (this.name = t, this.oldValue = s, this.newValue = o);
        }
        toJson() {
          const e = super.toJson();
          if (!this.name) throw Error("The changed field name is undefined. Either pass a name to the constructor, or call fromJson.");
          return e.name = this.name, e.oldValue = this.oldValue, e.newValue = this.newValue, e;
        }
        static fromJson(e, t, s) {
          return t = it.fromJson(e, t, s ?? new Wa()), t.name = e.name, t.oldValue = e.oldValue, t.newValue = e.newValue, t;
        }
        isNull() {
          return this.oldValue === this.newValue;
        }
        run(e) {
          var t = this.getEventWorkspace_();
          if (!this.blockId) throw Error("The block ID is undefined. Either pass a block to the constructor, or call fromJson");
          if (t = t.getBlockById(this.blockId), !t) throw Error("The associated block is undefined. Either pass a block to the constructor, or call fromJson");
          e = e ? this.newValue : this.oldValue, (t = t.getField(this.name)) ? t.setValue(e) : console.warn("Can't set non-existent field: " + this.name);
        }
      };
      c(f.EVENT, m.BLOCK_FIELD_INTERMEDIATE_CHANGE, Wa);
      var Xa = class extends it {
        constructor(e) {
          super(e), this.type = m.BLOCK_MOVE, e && (e.isShadow() && (this.recordUndo = !1), e = this.currentLocation(), this.oldParentId = e.parentId, this.oldInputName = e.inputName, this.oldCoordinate = e.coordinate);
        }
        toJson() {
          const e = super.toJson();
          return e.oldParentId = this.oldParentId, e.oldInputName = this.oldInputName, this.oldCoordinate && (e.oldCoordinate = `${Math.round(this.oldCoordinate.x)}, ${Math.round(this.oldCoordinate.y)}`), e.newParentId = this.newParentId, e.newInputName = this.newInputName, this.newCoordinate && (e.newCoordinate = `${Math.round(this.newCoordinate.x)}, ${Math.round(this.newCoordinate.y)}`), this.reason && (e.reason = this.reason), this.recordUndo || (e.recordUndo = this.recordUndo), e;
        }
        static fromJson(e, t, s) {
          return t = it.fromJson(e, t, s ?? new Xa()), t.oldParentId = e.oldParentId, t.oldInputName = e.oldInputName, e.oldCoordinate && (s = e.oldCoordinate.split(","), t.oldCoordinate = new I(Number(s[0]), Number(s[1]))), t.newParentId = e.newParentId, t.newInputName = e.newInputName, e.newCoordinate && (s = e.newCoordinate.split(","), t.newCoordinate = new I(Number(s[0]), Number(s[1]))), e.reason !== void 0 && (t.reason = e.reason), e.recordUndo !== void 0 && (t.recordUndo = e.recordUndo), t;
        }
        recordNew() {
          const e = this.currentLocation();
          this.newParentId = e.parentId, this.newInputName = e.inputName, this.newCoordinate = e.coordinate;
        }
        setReason(e) {
          this.reason = e;
        }
        currentLocation() {
          var e = this.getEventWorkspace_();
          if (!this.blockId) throw Error("The block ID is undefined. Either pass a block to the constructor, or call fromJson");
          var t = e.getBlockById(this.blockId);
          if (!t) throw Error("The block associated with the block move event could not be found");
          e = {};
          const s = t.getParent();
          return s ? (e.parentId = s.id, (t = s.getInputWithBlock(t)) && (e.inputName = t.name)) : e.coordinate = t.getRelativeToSurfaceXY(), e;
        }
        isNull() {
          return this.oldParentId === this.newParentId && this.oldInputName === this.newInputName && I.equals(this.oldCoordinate, this.newCoordinate);
        }
        run(e) {
          var t = this.getEventWorkspace_();
          if (!this.blockId) throw Error("The block ID is undefined. Either pass a block to the constructor, or call fromJson");
          var s = t.getBlockById(this.blockId);
          if (s) {
            var o = e ? this.newParentId : this.oldParentId, i = e ? this.newInputName : this.oldInputName;
            if (e = e ? this.newCoordinate : this.oldCoordinate, o) {
              var r = t.getBlockById(o);
              if (!r) {
                console.warn("Can't connect to non-existent block: " + o);
                return;
              }
            }
            if (s.getParent() && s.unplug(), e) i = s.getRelativeToSurfaceXY(), s.moveBy(e.x - i.x, e.y - i.y, this.reason);
            else {
              t = s.outputConnection, (!t || s.previousConnection && s.previousConnection.isConnected()) && (t = s.previousConnection);
              let u, h;
              s = (h = t) == null ? void 0 : h.type, i ? (s = r.getInput(i)) && (u = s.connection) : s === C.PREVIOUS_STATEMENT && (u = r.nextConnection), u && t ? t.connect(u) : console.warn("Can't connect to non-existent input: " + i);
            }
          } else console.warn("Can't move non-existent block: " + this.blockId);
        }
      };
      c(f.EVENT, m.BLOCK_MOVE, Xa);
      var za = class extends me {
        constructor(e, t, s) {
          super(e ? e.workspace.id : void 0), this.type = m.BUBBLE_OPEN, e && (this.blockId = e.id, this.isOpen = t, this.bubbleType = s);
        }
        toJson() {
          const e = super.toJson();
          if (this.isOpen === void 0) throw Error("Whether this event is for opening the bubble is undefined. Either pass the value to the constructor, or call fromJson");
          if (!this.bubbleType) throw Error("The type of bubble is undefined. Either pass the value to the constructor, or call fromJson");
          return e.isOpen = this.isOpen, e.bubbleType = this.bubbleType, e.blockId = this.blockId || "", e;
        }
        static fromJson(e, t, s) {
          return t = me.fromJson(e, t, s ?? new za()), t.isOpen = e.isOpen, t.bubbleType = e.bubbleType, t.blockId = e.blockId, t;
        }
      }, Ya;
      (function(e) {
        e.MUTATOR = "mutator", e.COMMENT = "comment", e.WARNING = "warning";
      })(Ya || (Ya = {})), c(f.EVENT, m.BUBBLE_OPEN, za);
      var Me = class extends Xt {
        constructor(e) {
          super(), this.isBlank = !0, this.isBlank = !e, e && (this.commentId = e.id, this.workspaceId = e.workspace.id, this.group = n.getGroup$$module$build$src$core$events$utils(), this.recordUndo = Ce());
        }
        toJson() {
          const e = super.toJson();
          if (!this.commentId) throw Error("The comment ID is undefined. Either pass a comment to the constructor, or call fromJson");
          return e.commentId = this.commentId, e;
        }
        static fromJson(e, t, s) {
          return t = Xt.fromJson(e, t, s ?? new Me()), t.commentId = e.commentId, t;
        }
        static CommentCreateDeleteHelper(e, t) {
          const s = e.getEventWorkspace_();
          if (t) {
            if (!e.json) throw Error("Encountered a comment event without proper json");
            mi(e.json, s);
          } else {
            if (!e.commentId) throw Error("The comment ID is undefined. Either pass a comment to the constructor, or call fromJson");
            (t = s.getCommentById(e.commentId)) ? t.dispose() : console.warn("Can't delete non-existent comment: " + e.commentId);
          }
        }
      }, Ka = class extends Me {
        constructor(e, t, s) {
          super(e), this.type = m.COMMENT_CHANGE, e && (this.oldContents_ = typeof t > "u" ? "" : t, this.newContents_ = typeof s > "u" ? "" : s);
        }
        toJson() {
          const e = super.toJson();
          if (!this.oldContents_) throw Error("The old contents is undefined. Either pass a value to the constructor, or call fromJson");
          if (!this.newContents_) throw Error("The new contents is undefined. Either pass a value to the constructor, or call fromJson");
          return e.oldContents = this.oldContents_, e.newContents = this.newContents_, e;
        }
        static fromJson(e, t, s) {
          return t = Me.fromJson(e, t, s ?? new Ka()), t.oldContents_ = e.oldContents, t.newContents_ = e.newContents, t;
        }
        isNull() {
          return this.oldContents_ === this.newContents_;
        }
        run(e) {
          var t = this.getEventWorkspace_();
          if (!this.commentId) throw Error("The comment ID is undefined. Either pass a comment to the constructor, or call fromJson");
          if (t = t.getCommentById(this.commentId)) {
            var s = e ? this.newContents_ : this.oldContents_;
            if (s === void 0)
              throw Error(e ? "The new contents is undefined. Either pass a value to the constructor, or call fromJson" : "The old contents is undefined. Either pass a value to the constructor, or call fromJson");
            t.setText(s);
          } else console.warn("Can't change non-existent comment: " + this.commentId);
        }
      };
      c(f.EVENT, m.COMMENT_CHANGE, Ka);
      var ja = class extends Me {
        constructor(e, t) {
          super(e), this.newCollapsed = t, this.type = m.COMMENT_COLLAPSE;
        }
        toJson() {
          const e = super.toJson();
          if (this.newCollapsed === void 0) throw Error("The new collapse value undefined. Either call recordNew, or call fromJson");
          return e.newCollapsed = this.newCollapsed, e;
        }
        static fromJson(e, t, s) {
          return t = Me.fromJson(
            e,
            t,
            s ?? new ja()
          ), t.newCollapsed = e.newCollapsed, t;
        }
        run(e) {
          var t = this.getEventWorkspace_();
          if (!this.commentId) throw Error("The comment ID is undefined. Either pass a comment to the constructor, or call fromJson");
          (t = t.getCommentById(this.commentId)) ? t.setCollapsed(e ? !!this.newCollapsed : !this.newCollapsed) : console.warn("Can't collapse or uncollapse non-existent comment: " + this.commentId);
        }
      };
      c(f.EVENT, m.COMMENT_COLLAPSE, ja);
      var Ja = class extends Me {
        constructor(e) {
          super(e), this.type = m.COMMENT_CREATE, e && (this.xml = Ci(e), this.json = mo(e, { addCoordinates: !0 }));
        }
        toJson() {
          const e = super.toJson();
          if (!this.xml) throw Error("The comment XML is undefined. Either pass a comment to the constructor, or call fromJson");
          if (!this.json) throw Error("The comment JSON is undefined. Either pass a block to the constructor, or call fromJson");
          return e.xml = St(this.xml), e.json = this.json, e;
        }
        static fromJson(e, t, s) {
          return t = Me.fromJson(e, t, s ?? new Ja()), t.xml = n.textToDom$$module$build$src$core$utils$xml(e.xml), t.json = e.json, t;
        }
        run(e) {
          Me.CommentCreateDeleteHelper(
            this,
            e
          );
        }
      };
      c(f.EVENT, m.COMMENT_CREATE, Ja);
      var qa = class extends Me {
        constructor(e) {
          super(e), this.type = m.COMMENT_DELETE, e && (this.xml = Ci(e), this.json = mo(e, { addCoordinates: !0 }));
        }
        run(e) {
          Me.CommentCreateDeleteHelper(this, !e);
        }
        toJson() {
          const e = super.toJson();
          if (!this.xml) throw Error("The comment XML is undefined. Either pass a comment to the constructor, or call fromJson");
          if (!this.json) throw Error("The comment JSON is undefined. Either pass a block to the constructor, or call fromJson");
          return e.xml = St(this.xml), e.json = this.json, e;
        }
        static fromJson(e, t, s) {
          return t = Me.fromJson(e, t, s ?? new qa()), t.xml = n.textToDom$$module$build$src$core$utils$xml(e.xml), t.json = e.json, t;
        }
      };
      c(f.EVENT, m.COMMENT_DELETE, qa);
      var Za = class extends me {
        constructor(e, t) {
          super(e ? e.workspace.id : void 0), this.type = m.COMMENT_DRAG, e && (this.commentId = e.id, this.isStart = t);
        }
        toJson() {
          const e = super.toJson();
          if (this.isStart === void 0) throw Error("Whether this event is the start of a drag is undefined. Either pass the value to the constructor, or call fromJson");
          if (this.commentId === void 0) throw Error("The comment ID is undefined. Either pass a comment to the constructor, or call fromJson");
          return e.isStart = this.isStart, e.commentId = this.commentId, e;
        }
        static fromJson(e, t, s) {
          return t = me.fromJson(e, t, s ?? new Za()), t.isStart = e.isStart, t.commentId = e.commentId, t;
        }
      };
      c(f.EVENT, m.COMMENT_DRAG, Za);
      var Qa = class extends Me {
        constructor(e) {
          super(e), this.type = m.COMMENT_MOVE, e && (this.comment_ = e, this.oldCoordinate_ = e.getRelativeToSurfaceXY());
        }
        recordNew() {
          if (this.newCoordinate_) throw Error("Tried to record the new position of a comment on the same event twice.");
          if (!this.comment_) throw Error("The comment is undefined. Pass a comment to the constructor if you want to use the record functionality");
          this.newCoordinate_ = this.comment_.getRelativeToSurfaceXY();
        }
        setReason(e) {
          this.reason = e;
        }
        setOldCoordinate(e) {
          this.oldCoordinate_ = e;
        }
        toJson() {
          const e = super.toJson();
          if (!this.oldCoordinate_) throw Error("The old comment position is undefined. Either pass a comment to the constructor, or call fromJson");
          if (!this.newCoordinate_) throw Error("The new comment position is undefined. Either call recordNew, or call fromJson");
          return e.oldCoordinate = `${Math.round(this.oldCoordinate_.x)}, ${Math.round(this.oldCoordinate_.y)}`, e.newCoordinate = Math.round(this.newCoordinate_.x) + "," + Math.round(this.newCoordinate_.y), e;
        }
        static fromJson(e, t, s) {
          return t = Me.fromJson(e, t, s ?? new Qa()), s = e.oldCoordinate.split(","), t.oldCoordinate_ = new I(Number(s[0]), Number(s[1])), s = e.newCoordinate.split(","), t.newCoordinate_ = new I(
            Number(s[0]),
            Number(s[1])
          ), t;
        }
        isNull() {
          return I.equals(this.oldCoordinate_, this.newCoordinate_);
        }
        run(e) {
          var t = this.getEventWorkspace_();
          if (!this.commentId) throw Error("The comment ID is undefined. Either pass a comment to the constructor, or call fromJson");
          if (t = t.getCommentById(this.commentId)) {
            if (e = e ? this.newCoordinate_ : this.oldCoordinate_, !e) throw Error("Either oldCoordinate_ or newCoordinate_ is undefined. Either pass a comment to the constructor and call recordNew, or call fromJson");
            t.moveTo(e);
          } else console.warn("Can't move non-existent comment: " + this.commentId);
        }
      };
      c(f.EVENT, m.COMMENT_MOVE, Qa);
      var eh = class extends Me {
        constructor(e) {
          super(e), this.type = m.COMMENT_RESIZE, e && (this.oldSize = e.getSize());
        }
        recordCurrentSizeAsNewSize() {
          if (this.newSize) throw Error("Tried to record the new size of a comment on the same event twice.");
          var e = this.getEventWorkspace_();
          if (!this.commentId) throw Error("The comment ID is undefined. Either pass a comment to the constructor, or call fromJson");
          if (e = e.getCommentById(this.commentId), !e) throw Error("The comment associated with the comment resize event could not be found");
          this.newSize = e.getSize();
        }
        toJson() {
          const e = super.toJson();
          if (!this.oldSize) throw Error("The old comment size is undefined. Either pass a comment to the constructor, or call fromJson");
          if (!this.newSize) throw Error("The new comment size is undefined. Either call recordCurrentSizeAsNewSize, or call fromJson");
          return e.oldWidth = Math.round(this.oldSize.width), e.oldHeight = Math.round(this.oldSize.height), e.newWidth = Math.round(this.newSize.width), e.newHeight = Math.round(this.newSize.height), e;
        }
        static fromJson(e, t, s) {
          return t = Me.fromJson(e, t, s ?? new eh()), t.oldSize = new D(e.oldWidth, e.oldHeight), t.newSize = new D(e.newWidth, e.newHeight), t;
        }
        isNull() {
          return D.equals(
            this.oldSize,
            this.newSize
          );
        }
        run(e) {
          var t = this.getEventWorkspace_();
          if (!this.commentId) throw Error("The comment ID is undefined. Either pass a comment to the constructor, or call fromJson");
          if (t = t.getCommentById(this.commentId)) {
            if (e = e ? this.newSize : this.oldSize, !e) throw Error("Either oldSize or newSize is undefined. Either pass a comment to the constructor and call recordCurrentSizeAsNewSize, or call fromJson");
            t.setSize(e);
          } else console.warn("Can't resize non-existent comment: " + this.commentId);
        }
      };
      c(f.EVENT, m.COMMENT_RESIZE, eh);
      var th = class extends me {
        constructor(e, t, s) {
          super(s), this.type = m.TOOLBOX_ITEM_SELECT, this.oldItem = e ?? void 0, this.newItem = t ?? void 0;
        }
        toJson() {
          const e = super.toJson();
          return e.oldItem = this.oldItem, e.newItem = this.newItem, e;
        }
        static fromJson(e, t, s) {
          return t = me.fromJson(e, t, s ?? new th()), t.oldItem = e.oldItem, t.newItem = e.newItem, t;
        }
      };
      c(f.EVENT, m.TOOLBOX_ITEM_SELECT, th);
      var sh = class extends At {
        constructor(e, t, s) {
          super(e), this.oldType = t, this.newType = s, this.type = m.VAR_TYPE_CHANGE;
        }
        toJson() {
          const e = super.toJson();
          if (!this.oldType || !this.newType) throw Error("The variable's types are undefined. Either pass them to the constructor, or call fromJson");
          return e.oldType = this.oldType, e.newType = this.newType, e;
        }
        static fromJson(e, t, s) {
          return t = At.fromJson(e, t, s ?? new sh()), t.oldType = e.oldType, t.newType = e.newType, t;
        }
        run(e) {
          const t = this.getEventWorkspace_();
          if (!this.varId) throw Error("The var ID is undefined. Either pass a variable to the constructor, or call fromJson");
          if (!this.oldType || !this.newType) throw Error("The variable's types are undefined. Either pass them to the constructor, or call fromJson");
          const s = t.getVariableMap().getVariableById(this.varId);
          s && (e ? t.getVariableMap().changeVariableType(s, this.newType) : t.getVariableMap().changeVariableType(s, this.oldType));
        }
      };
      c(f.EVENT, m.VAR_TYPE_CHANGE, sh);
      var i_ = class extends Xt {
        constructor(e) {
          super(), this.isBlank = !0, this.recordUndo = !1, this.type = m.FINISHED_LOADING, this.isBlank = !!e, e && (this.workspaceId = e.id);
        }
      };
      c(f.EVENT, m.FINISHED_LOADING, i_);
      var n_, r_, l_, c_, u_, a_, h_, d_, $_, p_, g_, __, m_, T_, E_, f_, b_, I_, S_, R_, O_, C_, y_, v_, O;
      n.BLOCK_CHANGE$$module$build$src$core$events$events = m.BLOCK_CHANGE, n.BLOCK_CREATE$$module$build$src$core$events$events = m.BLOCK_CREATE, n.BLOCK_DELETE$$module$build$src$core$events$events = m.BLOCK_DELETE, n_ = m.BLOCK_DRAG, n.BLOCK_MOVE$$module$build$src$core$events$events = m.BLOCK_MOVE, r_ = m.BLOCK_FIELD_INTERMEDIATE_CHANGE, l_ = m.BUBBLE_OPEN, c_ = m.BLOCK_CHANGE, u_ = m.CLICK, a_ = m.COMMENT_CHANGE, h_ = m.COMMENT_CREATE, d_ = m.COMMENT_DELETE, $_ = m.COMMENT_MOVE, p_ = m.COMMENT_RESIZE, g_ = m.COMMENT_DRAG, __ = m.BLOCK_CREATE, m_ = m.BLOCK_DELETE, T_ = m.FINISHED_LOADING, E_ = m.BLOCK_MOVE, f_ = m.SELECTED, b_ = m.THEME_CHANGE, I_ = m.TOOLBOX_ITEM_SELECT, S_ = m.TRASHCAN_OPEN, R_ = m.UI, O_ = m.VAR_CREATE, C_ = m.VAR_DELETE, y_ = m.VAR_RENAME, v_ = m.VIEWPORT_CHANGE, O = {}, O.Abstract = Xt, O.BLOCK_CHANGE = n.BLOCK_CHANGE$$module$build$src$core$events$events, O.BLOCK_CREATE = n.BLOCK_CREATE$$module$build$src$core$events$events, O.BLOCK_DELETE = n.BLOCK_DELETE$$module$build$src$core$events$events, O.BLOCK_DRAG = n_, O.BLOCK_FIELD_INTERMEDIATE_CHANGE = r_, O.BLOCK_MOVE = n.BLOCK_MOVE$$module$build$src$core$events$events, O.BUBBLE_OPEN = l_, O.BUMP_EVENTS = K$, O.BlockBase = it, O.BlockChange = Vs, O.BlockCreate = ca, O.BlockDelete = da, O.BlockDrag = Va, O.BlockFieldIntermediateChange = Wa, O.BlockMove = Xa, O.BubbleOpen = za, O.BubbleType = Ya, O.CHANGE = c_, O.CLICK = u_, O.COMMENT_CHANGE = a_, O.COMMENT_CREATE = h_, O.COMMENT_DELETE = d_, O.COMMENT_DRAG = g_, O.COMMENT_MOVE = $_, O.COMMENT_RESIZE = p_, O.CREATE = __, O.Click = Nu, O.ClickTarget = wu, O.CommentBase = Me, O.CommentChange = Ka, O.CommentCollapse = ja, O.CommentCreate = Ja, O.CommentDelete = qa, O.CommentDrag = Za, O.CommentMove = Qa, O.CommentResize = eh, O.DELETE = m_, O.FINISHED_LOADING = T_, O.FinishedLoading = i_, O.MOVE = E_, O.SELECTED = f_, O.Selected = ha, O.THEME_CHANGE = b_, O.TOOLBOX_ITEM_SELECT = I_, O.TRASHCAN_OPEN = S_, O.ThemeChange = ua, O.ToolboxItemSelect = th, O.TrashcanOpen = Da, O.UI = R_, O.UiBase = me, O.VAR_CREATE = O_, O.VAR_DELETE = C_, O.VAR_RENAME = y_, O.VIEWPORT_CHANGE = v_, O.VarBase = At, O.VarCreate = Na, O.VarDelete = wa, O.VarRename = Ma, O.VarTypeChange = sh, O.ViewportChange = aa, O.clearPendingUndo = ci, O.disable = n.disable$$module$build$src$core$events$utils, O.disableOrphans = pn, O.enable = n.enable$$module$build$src$core$events$utils, O.filter = li, O.fire = k, O.fromJson = $n, O.get = L, O.getDescendantIds = co, O.getGroup = n.getGroup$$module$build$src$core$events$utils, O.getRecordUndo = Ce, O.isEnabled = j, O.setGroup = n.setGroup$$module$build$src$core$events$utils, O.setRecordUndo = n.setRecordUndo$$module$build$src$core$events$utils;
      var kt = {};
      kt.BottomRow = Yg, kt.ConstantProvider = Xg, kt.Drawer = zg, kt.PathObject = qg, kt.RenderInfo = Jg, kt.Renderer = Ua, kt.RightConnectionShape = Kg, kt.StatementInput = cl, kt.TopRow = jg, Ru();
      var Te = {};
      Te.registerCleanup = cu, Te.registerCollapse = au, Te.registerCollapseExpandBlock = mu, Te.registerComment = gu, Te.registerCommentCreate = Su, Te.registerCommentDelete = bu, Te.registerCommentDuplicate = Iu, Te.registerCommentOptions = L$, Te.registerDefaultOptions = Ru, Te.registerDelete = Eu, Te.registerDeleteAll = $u, Te.registerDisable = Tu, Te.registerDuplicate = pu, Te.registerExpand = hu, Te.registerHelp = fu, Te.registerInline = _u, Te.registerRedo = lu, Te.registerUndo = ru;
      var oh = "button", L_ = class {
        load(e, t) {
          return e = new Be(t.getWorkspace(), t.targetWorkspace, e, !1), e.show(), new Ko(e, oh);
        }
        gapForItem(e, t) {
          return t;
        }
        disposeItem(e) {
          e = e.getElement(), e instanceof Be && e.dispose();
        }
        getType() {
          return oh;
        }
      };
      c(f.FLYOUT_INFLATER, oh, L_);
      var ln = {};
      ln.Bubble = V, ln.MiniWorkspaceBubble = Jt, ln.TextBubble = ug, ln.TextInputBubble = Gr;
      var Pm = "WORKSPACE_AT_BLOCK_CAPACITY", ih = "block", A_ = class {
        constructor() {
          this.permanentlyDisabledBlocks = /* @__PURE__ */ new Set(), this.listeners = /* @__PURE__ */ new Map(), this.capacityWrapper = this.filterFlyoutBasedOnCapacity.bind(this);
        }
        load(e, t) {
          return this.setFlyout(t), e = this.createBlock(e, t.getWorkspace()), e.isEnabled() ? this.updateStateBasedOnCapacity(e) : this.permanentlyDisabledBlocks.add(e), e.getDescendants(!1).forEach((s) => s.isInFlyout = !0), this.addBlockListeners(e), new Ko(e, ih);
        }
        createBlock(e, t) {
          return e.blockxml ? (e = typeof e.blockxml == "string" ? n.textToDom$$module$build$src$core$utils$xml(e.blockxml) : e.blockxml, t = Ds(e, t)) : (e.enabled === void 0 && (e.enabled = e.disabled !== "true" && e.disabled !== !0), e.disabledReasons === void 0 && e.enabled === !1 && (e.disabledReasons = [ot]), "x" in e && delete e.x, "y" in e && delete e.y, t = ks(e, t)), t;
        }
        gapForItem(e, t) {
          let s;
          return e.gap ? s = parseInt(String(e.gap)) : e.blockxml && (e = typeof e.blockxml == "string" ? n.textToDom$$module$build$src$core$utils$xml(e.blockxml) : e.blockxml, s = parseInt(e.getAttribute("gap"))), !s || isNaN(s) ? t : s;
        }
        disposeItem(e) {
          e = e.getElement(), e instanceof z && (this.removeListeners(e.id), e.dispose(!1, !1));
        }
        removeListeners(e) {
          let t;
          ((t = this.listeners.get(e)) != null ? t : []).forEach((s) => H(s)), this.listeners.delete(e);
        }
        setFlyout(e) {
          if (this.flyout !== e) {
            if (this.flyout) {
              let s;
              (s = this.flyout.targetWorkspace) == null || s.removeChangeListener(this.capacityWrapper);
            }
            this.flyout = e;
            var t;
            (t = this.flyout.targetWorkspace) == null || t.addChangeListener(this.capacityWrapper);
          }
        }
        updateStateBasedOnCapacity(e) {
          let t, s;
          const o = (t = this.flyout) == null || (s = t.targetWorkspace) == null ? void 0 : s.isCapacityAvailable(ai(e));
          for (; e; ) e.setDisabledReason(!o, Pm), e = e.getNextBlock();
        }
        addBlockListeners(e) {
          const t = [];
          t.push(w(e.getSvgRoot(), "pointerdown", e, (s) => {
            let o, i;
            const r = (o = this.flyout) == null || (i = o.targetWorkspace) == null ? void 0 : i.getGesture(s);
            r && this.flyout && (r.setStartBlock(e), r.handleFlyoutStart(s, this.flyout));
          })), t.push(De(e.getSvgRoot(), "pointermove", null, () => {
            let s, o;
            !((s = this.flyout) == null || (o = s.targetWorkspace) == null) && o.isDragging() || e.addSelect();
          })), t.push(De(e.getSvgRoot(), "pointerleave", null, () => {
            let s, o;
            !((s = this.flyout) == null || (o = s.targetWorkspace) == null) && o.isDragging() || e.removeSelect();
          })), this.listeners.set(e.id, t);
        }
        filterFlyoutBasedOnCapacity(e) {
          !this.flyout || e && e.type !== m.BLOCK_CREATE && e.type !== m.BLOCK_DELETE || this.flyout.getWorkspace().getTopBlocks(!1).forEach((t) => {
            this.permanentlyDisabledBlocks.has(t) || this.updateStateBasedOnCapacity(t);
          });
        }
        getType() {
          return ih;
        }
      };
      c(f.FLYOUT_INFLATER, ih, A_);
      var k_ = class extends Qr {
        constructor() {
          super(), this.FIELD_TEXT_BASELINE_CENTER = !1, this.DARK_PATH_OFFSET = 1, this.MAX_BOTTOM_WIDTH = 30, this.STATEMENT_BOTTOM_SPACER = -this.NOTCH_HEIGHT / 2;
        }
        getCSS_(e) {
          return super.getCSS_(e).concat([
            `${e} .blocklyInsertionMarker>.blocklyPathLight,`,
            `${e} .blocklyInsertionMarker>.blocklyPathDark {`,
            `fill-opacity: ${this.INSERTION_MARKER_OPACITY};`,
            "stroke: none;",
            "}"
          ]);
        }
      }, N_ = class {
        constructor(e) {
          this.inlineSteps_ = this.steps_ = "", this.info_ = e, this.RTL_ = this.info_.RTL, e = e.getRenderer(), this.constants_ = e.getConstants(), this.highlightConstants_ = e.getHighlightConstants(), this.highlightOffset = this.highlightConstants_.OFFSET, this.outsideCornerPaths_ = this.highlightConstants_.OUTSIDE_CORNER, this.insideCornerPaths_ = this.highlightConstants_.INSIDE_CORNER, this.puzzleTabPaths_ = this.highlightConstants_.PUZZLE_TAB, this.notchPaths_ = this.highlightConstants_.NOTCH, this.startPaths_ = this.highlightConstants_.START_HAT, this.jaggedTeethPaths_ = this.highlightConstants_.JAGGED_TEETH;
        }
        getPath() {
          return this.steps_ + `
` + this.inlineSteps_;
        }
        drawTopCorner(e) {
          this.steps_ += ne(e.xPos, this.info_.startY);
          for (let t = 0, s; s = e.elements[t]; t++) d.isLeftSquareCorner(s) ? this.steps_ += this.highlightConstants_.START_POINT : d.isLeftRoundedCorner(s) ? this.steps_ += this.outsideCornerPaths_.topLeft(this.RTL_) : d.isPreviousConnection(s) ? this.steps_ += this.notchPaths_.pathLeft : d.isHat(s) ? this.steps_ += this.startPaths_.path(this.RTL_) : d.isSpacer(s) && s.width !== 0 && (this.steps_ += A("H", s.xPos + s.width - this.highlightOffset));
          this.steps_ += A(
            "H",
            e.xPos + e.width - this.highlightOffset
          );
        }
        drawJaggedEdge_(e) {
          this.info_.RTL && (this.steps_ += this.jaggedTeethPaths_.pathLeft + A("v", e.height - this.jaggedTeethPaths_.height - this.highlightOffset));
        }
        drawValueInput(e) {
          const t = e.getLastInput();
          if (this.RTL_) {
            const s = e.height - t.connectionHeight;
            this.steps_ += be(t.xPos + t.width - this.highlightOffset, e.yPos) + this.puzzleTabPaths_.pathDown(this.RTL_) + A(
              "v",
              s
            );
          } else this.steps_ += be(t.xPos + t.width, e.yPos) + this.puzzleTabPaths_.pathDown(this.RTL_);
        }
        drawStatementInput(e) {
          const t = e.getLastInput();
          if (t) if (this.RTL_) {
            const s = e.height - 2 * this.insideCornerPaths_.height;
            this.steps_ += be(t.xPos, e.yPos) + this.insideCornerPaths_.pathTop(this.RTL_) + A("v", s) + this.insideCornerPaths_.pathBottom(this.RTL_) + Ot(e.width - t.xPos - this.insideCornerPaths_.width, 0);
          } else this.steps_ += be(t.xPos, e.yPos + e.height) + this.insideCornerPaths_.pathBottom(this.RTL_) + Ot(e.width - t.xPos - this.insideCornerPaths_.width, 0);
        }
        drawRightSideRow(e) {
          const t = e.xPos + e.width - this.highlightOffset;
          e instanceof La && e.followsStatement && (this.steps_ += A("H", t)), this.RTL_ && (this.steps_ += A("H", t), e.height > this.highlightOffset && (this.steps_ += A("V", e.yPos + e.height - this.highlightOffset)));
        }
        drawBottomRow(e) {
          if (this.RTL_) this.steps_ += A("V", e.baseline - this.highlightOffset);
          else {
            const t = this.info_.bottomRow.elements[0];
            d.isLeftSquareCorner(t) ? this.steps_ += be(e.xPos + this.highlightOffset, e.baseline - this.highlightOffset) : d.isLeftRoundedCorner(t) && (this.steps_ += be(e.xPos, e.baseline), this.steps_ += this.outsideCornerPaths_.bottomLeft());
          }
        }
        drawLeft() {
          var e = this.info_.outputConnection;
          e && (e = e.connectionOffsetY + e.height, this.RTL_ ? this.steps_ += be(this.info_.startX, e) : (this.steps_ += be(this.info_.startX + this.highlightOffset, this.info_.bottomRow.baseline - this.highlightOffset), this.steps_ += A("V", e)), this.steps_ += this.puzzleTabPaths_.pathUp(this.RTL_)), this.RTL_ || (e = this.info_.topRow, d.isLeftRoundedCorner(e.elements[0]) ? this.steps_ += A("V", this.outsideCornerPaths_.height) : this.steps_ += A("V", e.capline + this.highlightOffset));
        }
        drawInlineInput(e) {
          const t = this.highlightOffset, s = e.xPos + e.connectionWidth;
          var o = e.centerline - e.height / 2;
          const i = e.width - e.connectionWidth, r = o + t;
          this.RTL_ ? (o = e.connectionOffsetY - t, e = e.height - (e.connectionOffsetY + e.connectionHeight) + t, this.inlineSteps_ += be(s - t, r) + A("v", o) + this.puzzleTabPaths_.pathDown(this.RTL_) + A("v", e) + A("h", i)) : this.inlineSteps_ += be(e.xPos + e.width + t, r) + A("v", e.height) + A("h", -i) + be(s, o + e.connectionOffsetY) + this.puzzleTabPaths_.pathDown(this.RTL_);
        }
      }, w_ = class extends el {
        constructor(e, t) {
          super(e, t), this.highlighter_ = new N_(t);
        }
        draw() {
          this.drawOutline_(), this.drawInternals_(), this.updateConnectionHighlights();
          const e = this.block_.pathObject;
          e.setPath(this.outlinePath_ + `
` + this.inlinePath_), e.setHighlightPath(this.highlighter_.getPath()), this.info_.RTL && e.flipRTL(), this.recordSizeOnBlock_();
        }
        drawTop_() {
          this.highlighter_.drawTopCorner(this.info_.topRow), this.highlighter_.drawRightSideRow(this.info_.topRow), super.drawTop_();
        }
        drawJaggedEdge_(e) {
          this.highlighter_.drawJaggedEdge_(e), super.drawJaggedEdge_(e);
        }
        drawValueInput_(e) {
          this.highlighter_.drawValueInput(e), super.drawValueInput_(e);
        }
        drawStatementInput_(e) {
          this.highlighter_.drawStatementInput(e), super.drawStatementInput_(e);
        }
        drawRightSideRow_(e) {
          this.highlighter_.drawRightSideRow(e), this.outlinePath_ += A("H", e.xPos + e.width) + A(
            "V",
            e.yPos + e.height
          );
        }
        drawBottom_() {
          this.highlighter_.drawBottomRow(this.info_.bottomRow), super.drawBottom_();
        }
        drawLeft_() {
          this.highlighter_.drawLeft(), super.drawLeft_();
        }
        drawInlineInput_(e) {
          this.highlighter_.drawInlineInput(e), super.drawInlineInput_(e);
        }
        positionInlineInputConnection_(e) {
          const t = e.centerline - e.height / 2;
          if (e.connectionModel) {
            let s = e.xPos + e.connectionWidth + this.constants_.DARK_PATH_OFFSET;
            this.info_.RTL && (s *= -1), e.connectionModel.setOffsetInBlock(s, t + e.connectionOffsetY + this.constants_.DARK_PATH_OFFSET);
          }
        }
        positionStatementInputConnection_(e) {
          const t = e.getLastInput();
          if (t != null && t.connectionModel) {
            let s = e.xPos + e.statementEdge + t.notchOffset;
            s = this.info_.RTL ? s * -1 : s + this.constants_.DARK_PATH_OFFSET, t.connectionModel.setOffsetInBlock(s, e.yPos + this.constants_.DARK_PATH_OFFSET);
          }
        }
        positionExternalValueConnection_(e) {
          const t = e.getLastInput();
          if (t && t.connectionModel) {
            let s = e.xPos + e.width + this.constants_.DARK_PATH_OFFSET;
            this.info_.RTL && (s *= -1), t.connectionModel.setOffsetInBlock(s, e.yPos);
          }
        }
        positionNextConnection_() {
          const e = this.info_.bottomRow;
          if (e.connection) {
            const t = e.connection, s = t.xPos;
            t.connectionModel.setOffsetInBlock((this.info_.RTL ? -s : s) + this.constants_.DARK_PATH_OFFSET / 2, e.baseline + this.constants_.DARK_PATH_OFFSET);
          }
        }
      }, M_ = class {
        constructor(e) {
          this.OFFSET = 0.5, this.constantProvider = e, this.START_POINT = ne(this.OFFSET, this.OFFSET);
        }
        init() {
          this.INSIDE_CORNER = this.makeInsideCorner(), this.OUTSIDE_CORNER = this.makeOutsideCorner(), this.PUZZLE_TAB = this.makePuzzleTab(), this.NOTCH = this.makeNotch(), this.JAGGED_TEETH = this.makeJaggedTeeth(), this.START_HAT = this.makeStartHat();
        }
        makeInsideCorner() {
          const e = this.constantProvider.CORNER_RADIUS, t = this.OFFSET, s = (1 - Math.SQRT1_2) * (e + t) - t, o = ne(s, s) + ce("a", "0 0,0", e, v(-s - t, e - s)), i = ce("a", "0 0,0", e + t, v(e + t, e + t)), r = ne(s, -s) + ce("a", "0 0,0", e + t, v(e - s, s + t));
          return { width: e + t, height: e, pathTop(u) {
            return u ? o : "";
          }, pathBottom(u) {
            return u ? i : r;
          } };
        }
        makeOutsideCorner() {
          const e = this.constantProvider.CORNER_RADIUS, t = this.OFFSET, s = (1 - Math.SQRT1_2) * (e - t) + t, o = ne(s, s) + ce("a", "0 0,1", e - t, v(e - s, -s + t)), i = ne(t, e) + ce("a", "0 0,1", e - t, v(e, -e + t)), r = -s, u = ne(s, r) + ce("a", "0 0,1", e - t, v(-s + t, -r - e));
          return { height: e, topLeft(h) {
            return h ? o : i;
          }, bottomLeft() {
            return u;
          } };
        }
        makePuzzleTab() {
          const e = this.constantProvider.TAB_WIDTH, t = this.constantProvider.TAB_HEIGHT, s = ne(-2, -t + 2.5 + 0.9) + Ot(e * -0.45, -2.1), o = A(
            "v",
            2.5
          ) + ne(-e * 0.97, 2.5) + Ue("q", [v(-e * 0.05, 10), v(e * 0.3, 9.5)]) + ne(e * 0.67, -1.9) + A("v", 2.5), i = A("v", -1.5) + ne(e * -0.92, -0.5) + Ue(
            "q",
            [v(e * -0.19, -5.5), v(0, -11)]
          ) + ne(e * 0.92, 1), r = ne(-5, t - 0.7) + Ot(e * 0.46, -2.1);
          return { width: e, height: t, pathUp(u) {
            return u ? s : i;
          }, pathDown(u) {
            return u ? o : r;
          } };
        }
        makeNotch() {
          return { pathLeft: A("h", this.OFFSET) + this.constantProvider.NOTCH.pathLeft };
        }
        makeJaggedTeeth() {
          return { pathLeft: Ot(
            5.1,
            2.6
          ) + ne(-10.2, 6.8) + Ot(5.1, 2.6), height: 12, width: 10.2 };
        }
        makeStartHat() {
          const e = this.constantProvider.START_HAT.height, t = ne(25, -8.7) + Ue("c", [v(29.7, -6.2), v(57.2, -0.5), v(75, 8.7)]), s = Ue(
            "c",
            [v(17.8, -9.2), v(45.3, -14.9), v(75, -8.7)]
          ) + be(100.5, e + 0.5);
          return { path(o) {
            return o ? t : s;
          } };
        }
      }, D_ = class extends ya {
        constructor(e, t) {
          super(e, t), this.constants_ = e, this.connectedBlock && (this.width += this.constants_.DARK_PATH_OFFSET, this.height += this.constants_.DARK_PATH_OFFSET);
        }
      }, P_ = class extends Zr {
        constructor(e, t) {
          super(e, t), this.constants_ = e, this.connectedBlock && (this.height += this.constants_.DARK_PATH_OFFSET);
        }
      }, B_ = class extends tn {
        constructor(e, t) {
          super(e, t), this.renderer_ = e;
        }
        getRenderer() {
          return this.renderer_;
        }
        populateBottomRow_() {
          super.populateBottomRow_(), this.block_.inputList.length && this.block_.inputList[this.block_.inputList.length - 1] instanceof Je || (this.bottomRow.minHeight = this.constants_.MEDIUM_PADDING - this.constants_.DARK_PATH_OFFSET);
        }
        addInput_(e, t) {
          this.isInline && e instanceof n.ValueInput$$module$build$src$core$inputs$value_input ? (t.elements.push(new D_(this.constants_, e)), t.hasInlineInput = !0) : e instanceof Je ? (t.elements.push(new P_(this.constants_, e)), t.hasStatement = !0) : e instanceof n.ValueInput$$module$build$src$core$inputs$value_input ? (t.elements.push(new Oa(
            this.constants_,
            e
          )), t.hasExternalInput = !0) : (e instanceof yt || e instanceof Zt) && (t.minHeight = Math.max(t.minHeight, this.constants_.DUMMY_INPUT_MIN_HEIGHT), t.hasDummyInput = !0), this.isInline || t.align !== null || (t.align = e.align);
        }
        addElemSpacing_() {
          let e = !1;
          for (let s = 0, o; o = this.rows[s]; s++) o.hasExternalInput && (e = !0);
          for (let s = 0, o; o = this.rows[s]; s++) {
            var t = o.elements;
            if (o.elements = [], o.startsWithElemSpacer() && o.elements.push(new qe(
              this.constants_,
              this.getInRowSpacing_(null, t[0])
            )), t.length) {
              for (let i = 0; i < t.length - 1; i++) {
                o.elements.push(t[i]);
                const r = this.getInRowSpacing_(t[i], t[i + 1]);
                o.elements.push(new qe(this.constants_, r));
              }
              o.elements.push(t[t.length - 1]), o.endsWithElemSpacer() && (t = this.getInRowSpacing_(t[t.length - 1], null), e && o.hasDummyInput && (t += this.constants_.TAB_WIDTH), o.elements.push(new qe(
                this.constants_,
                t
              )));
            }
          }
        }
        getInRowSpacing_(e, t) {
          if (!e) return t && d.isField(t) && t.isEditable ? this.constants_.MEDIUM_PADDING : t && d.isInlineInput(t) ? this.constants_.MEDIUM_LARGE_PADDING : t && d.isStatementInput(t) ? this.constants_.STATEMENT_INPUT_PADDING_LEFT : this.constants_.LARGE_PADDING;
          if (!d.isInput(e) && (!t || d.isStatementInput(t))) return d.isField(e) && e.isEditable ? e.width === 0 ? this.constants_.NO_PADDING : this.constants_.MEDIUM_PADDING : d.isIcon(e) ? this.constants_.LARGE_PADDING * 2 + 1 : d.isHat(e) ? this.constants_.NO_PADDING : d.isPreviousOrNextConnection(e) ? this.constants_.LARGE_PADDING : d.isLeftRoundedCorner(e) ? this.constants_.MIN_BLOCK_WIDTH : d.isJaggedEdge(e) ? this.constants_.NO_PADDING : this.constants_.LARGE_PADDING;
          if (d.isInput(e) && !t) {
            if (d.isExternalInput(e)) return this.constants_.NO_PADDING;
            if (d.isInlineInput(e)) return this.constants_.LARGE_PADDING;
            if (d.isStatementInput(e)) return this.constants_.NO_PADDING;
          }
          if (!d.isInput(e) && t && d.isInput(t)) {
            if (d.isField(e) && e.isEditable) {
              if (d.isInlineInput(t) || d.isExternalInput(t)) return this.constants_.SMALL_PADDING;
            } else {
              if (d.isInlineInput(t) || d.isExternalInput(t)) return this.constants_.MEDIUM_LARGE_PADDING;
              if (d.isStatementInput(t)) return this.constants_.LARGE_PADDING;
            }
            return this.constants_.LARGE_PADDING - 1;
          }
          if (d.isIcon(e) && t && !d.isInput(t)) return this.constants_.LARGE_PADDING;
          if (d.isInlineInput(e) && t && d.isField(t)) return t.isEditable ? this.constants_.MEDIUM_PADDING : this.constants_.LARGE_PADDING;
          if (d.isLeftSquareCorner(e) && t) {
            if (d.isHat(t)) return this.constants_.NO_PADDING;
            if (d.isPreviousConnection(t)) return t.notchOffset;
            if (d.isNextConnection(t)) return t.notchOffset + (this.RTL ? 1 : -1) * this.constants_.DARK_PATH_OFFSET / 2;
          }
          if (d.isLeftRoundedCorner(e) && t) {
            if (d.isPreviousConnection(t)) return t.notchOffset - this.constants_.CORNER_RADIUS;
            if (d.isNextConnection(t)) return t.notchOffset - this.constants_.CORNER_RADIUS + (this.RTL ? 1 : -1) * this.constants_.DARK_PATH_OFFSET / 2;
          }
          return d.isField(e) && t && d.isField(t) && e.isEditable === t.isEditable ? e.width === 0 ? this.constants_.NO_PADDING : this.constants_.LARGE_PADDING : t && d.isJaggedEdge(t) ? this.constants_.LARGE_PADDING : this.constants_.MEDIUM_PADDING;
        }
        getSpacerRowHeight_(e, t) {
          return d.isTopRow(e) && d.isBottomRow(t) ? this.constants_.EMPTY_BLOCK_SPACER_HEIGHT : d.isTopRow(e) || d.isBottomRow(t) ? this.constants_.NO_PADDING : e.hasExternalInput && t.hasExternalInput ? this.constants_.LARGE_PADDING : !e.hasStatement && t.hasStatement ? this.constants_.BETWEEN_STATEMENT_PADDING_Y : e.hasStatement && t.hasStatement || !e.hasStatement && t.hasDummyInput || e.hasDummyInput ? this.constants_.LARGE_PADDING : this.constants_.MEDIUM_PADDING;
        }
        getElemCenterline_(e, t) {
          if (d.isSpacer(t)) return e.yPos + t.height / 2;
          if (d.isBottomRow(e)) return e = e.yPos + e.height - e.descenderHeight, d.isNextConnection(t) ? e + t.height / 2 : e - t.height / 2;
          if (d.isTopRow(e)) return d.isHat(t) ? e.capline - t.height / 2 : e.capline + t.height / 2;
          let s = e.yPos;
          return d.isField(t) || d.isIcon(t) ? (s += t.height / 2, (e.hasInlineInput || e.hasStatement) && t.height + this.constants_.TALL_INPUT_FIELD_OFFSET_Y <= e.height && (s += this.constants_.TALL_INPUT_FIELD_OFFSET_Y)) : s = d.isInlineInput(t) ? s + t.height / 2 : s + e.height / 2, s;
        }
        alignRowElements_() {
          if (this.isInline) {
            var e = 0, t = /* @__PURE__ */ new WeakMap(), s = null;
            for (let o = this.rows.length - 1, i; i = this.rows[o]; o--) t.set(i, e), d.isInputRow(i) && (i.hasStatement && this.alignStatementRow_(i), s && s.hasStatement && i.width < s.width ? t.set(i, s.width) : e = i.hasStatement ? i.width : Math.max(e, i.width), s = i);
            e = 0;
            for (let o = 0, i; i = this.rows[o]; o++) i.hasStatement ? e = this.getDesiredRowWidth_(i) : d.isSpacer(i) ? i.width = Math.max(e, t.get(i)) : (s = i.width, e = Math.max(e, t.get(i)) - s, e > 0 && this.addAlignmentPadding_(i, e), e = i.width);
          } else super.alignRowElements_();
        }
        getDesiredRowWidth_(e) {
          return this.isInline && e.hasStatement ? this.statementEdge + this.constants_.MAX_BOTTOM_WIDTH + this.startX : super.getDesiredRowWidth_(e);
        }
        finalize_() {
          let e = 0, t = 0;
          for (let o = 0, i; i = this.rows[o]; o++) {
            i.yPos = t, i.xPos = this.startX, t += i.height, e = Math.max(e, i.widthWithConnectedBlocks);
            var s = t - this.topRow.ascenderHeight;
            i === this.bottomRow && s < this.constants_.MIN_BLOCK_HEIGHT && (s = this.constants_.MIN_BLOCK_HEIGHT - s, this.bottomRow.height += s, t += s), this.recordElemPositions_(i);
          }
          this.outputConnection && this.block_.nextConnection && this.block_.nextConnection.isConnected() && (s = this.block_.nextConnection.targetBlock()) && (e = Math.max(e, s.getHeightWidth().width - this.constants_.DARK_PATH_OFFSET)), this.bottomRow.baseline = t - this.bottomRow.descenderHeight, this.widthWithChildren = e + this.startX + this.constants_.DARK_PATH_OFFSET, this.width += this.constants_.DARK_PATH_OFFSET, this.height = t + this.constants_.DARK_PATH_OFFSET, this.startY = this.topRow.capline;
        }
      }, x_ = class extends tl {
        constructor(e, t, s) {
          super(e, t, s), this.constants = s, this.colourDark = "#000000", this.svgPathDark = b(g.PATH, { class: "blocklyPathDark", transform: "translate(1,1)" }), this.svgRoot.insertBefore(this.svgPathDark, this.svgPath), this.svgPathLight = b(
            g.PATH,
            { class: "blocklyPathLight" },
            this.svgRoot
          );
        }
        setPath(e) {
          this.svgPath.setAttribute("d", e), this.svgPathDark.setAttribute("d", e);
        }
        setHighlightPath(e) {
          this.svgPathLight.setAttribute("d", e);
        }
        flipRTL() {
          this.svgPath.setAttribute("transform", "scale(-1 1)"), this.svgPathLight.setAttribute("transform", "scale(-1 1)"), this.svgPathDark.setAttribute("transform", "translate(1,1) scale(-1 1)");
        }
        applyColour(e) {
          this.svgPathLight.style.display = "", this.svgPathDark.style.display = "", this.svgPathLight.setAttribute("stroke", this.style.colourTertiary), this.svgPathDark.setAttribute("fill", this.colourDark), super.applyColour(e), this.svgPath.setAttribute("stroke", "none");
        }
        setStyle(e) {
          this.style = e, this.colourDark = ws("#000", this.style.colourPrimary, 0.2) || this.colourDark;
        }
        updateHighlighted(e) {
          super.updateHighlighted(e), this.svgPathLight.style.display = e ? "none" : "inline";
        }
        updateShadow_(e) {
          super.updateShadow_(e), e && (this.svgPathLight.style.display = "none", this.svgPathDark.setAttribute("fill", this.style.colourSecondary));
        }
        updateDisabled_(e) {
          super.updateDisabled_(e), e && this.svgPath.setAttribute("stroke", "none");
        }
      }, F_ = class extends sl {
        constructor(e) {
          super(e), this.highlightConstants = null;
        }
        init(e, t) {
          super.init(e, t), this.highlightConstants = this.makeHighlightConstants_(), this.highlightConstants.init();
        }
        refreshDom(e, t, s) {
          super.refreshDom(e, t, s), this.getHighlightConstants().init();
        }
        makeConstants_() {
          return new k_();
        }
        makeRenderInfo_(e) {
          return new B_(
            this,
            e
          );
        }
        makeDrawer_(e, t) {
          return new w_(e, t);
        }
        makePathObject(e, t) {
          return new x_(e, t, this.getConstants());
        }
        makeHighlightConstants_() {
          return new M_(this.getConstants());
        }
        getHighlightConstants() {
          if (!this.highlightConstants) throw Error("Cannot access the highlight constants because init has not been called");
          return this.highlightConstants;
        }
      };
      Li("geras", F_);
      var Nt = {};
      Nt.ConstantProvider = k_, Nt.Drawer = w_, Nt.HighlightConstantProvider = M_, Nt.Highlighter = N_, Nt.InlineInput = D_, Nt.PathObject = x_, Nt.RenderInfo = B_, Nt.Renderer = F_, Nt.StatementInput = P_;
      var U_ = class extends tn {
        constructor(e, t) {
          super(e, t);
        }
        getRenderer() {
          return this.renderer_;
        }
        addElemSpacing_() {
          let e = !1;
          for (var t = 0; t < this.rows.length; t++) if (this.rows[t].hasExternalInput) {
            e = !0;
            break;
          }
          for (t = 0; t < this.rows.length; t++) {
            const o = this.rows[t];
            var s = o.elements;
            if (o.elements = [], o.startsWithElemSpacer() && o.elements.push(new qe(
              this.constants_,
              this.getInRowSpacing_(null, s[0])
            )), s.length) {
              for (let i = 0; i < s.length - 1; i++) {
                o.elements.push(s[i]);
                const r = this.getInRowSpacing_(s[i], s[i + 1]);
                o.elements.push(new qe(this.constants_, r));
              }
              o.elements.push(s[s.length - 1]), o.endsWithElemSpacer() && (s = this.getInRowSpacing_(s[s.length - 1], null), e && o.hasDummyInput && (s += this.constants_.TAB_WIDTH), o.elements.push(new qe(
                this.constants_,
                s
              )));
            }
          }
        }
        getInRowSpacing_(e, t) {
          if (!e) return t && d.isField(t) && t.isEditable ? this.constants_.MEDIUM_PADDING : t && d.isInlineInput(t) ? this.constants_.MEDIUM_LARGE_PADDING : t && d.isStatementInput(t) ? this.constants_.STATEMENT_INPUT_PADDING_LEFT : this.constants_.LARGE_PADDING;
          if (!d.isInput(e) && !t) return d.isField(e) && e.isEditable ? e.width === 0 ? this.constants_.NO_PADDING : this.constants_.MEDIUM_PADDING : d.isIcon(e) ? this.constants_.LARGE_PADDING * 2 + 1 : d.isHat(e) ? this.constants_.NO_PADDING : d.isPreviousOrNextConnection(e) ? this.constants_.LARGE_PADDING : d.isLeftRoundedCorner(e) ? this.constants_.MIN_BLOCK_WIDTH : d.isJaggedEdge(e) ? this.constants_.NO_PADDING : this.constants_.LARGE_PADDING;
          if (d.isInput(e) && !t) {
            if (d.isExternalInput(e)) return this.constants_.NO_PADDING;
            if (d.isInlineInput(e)) return this.constants_.LARGE_PADDING;
            if (d.isStatementInput(e)) return this.constants_.NO_PADDING;
          }
          if (!d.isInput(e) && t && d.isInput(t)) {
            if (d.isField(e) && e.isEditable) {
              if (d.isInlineInput(t) || d.isExternalInput(t)) return this.constants_.SMALL_PADDING;
            } else {
              if (d.isInlineInput(t) || d.isExternalInput(t)) return this.constants_.MEDIUM_LARGE_PADDING;
              if (d.isStatementInput(t)) return this.constants_.LARGE_PADDING;
            }
            return this.constants_.LARGE_PADDING - 1;
          }
          if (d.isIcon(e) && t && !d.isInput(t)) return this.constants_.LARGE_PADDING;
          if (d.isInlineInput(e) && t && d.isField(t)) return t.isEditable ? this.constants_.MEDIUM_PADDING : this.constants_.LARGE_PADDING;
          if (d.isLeftSquareCorner(e) && t) {
            if (d.isHat(t)) return this.constants_.NO_PADDING;
            if (d.isPreviousConnection(t) || d.isNextConnection(t)) return t.notchOffset;
          }
          return d.isLeftRoundedCorner(e) && t ? t.notchOffset - this.constants_.CORNER_RADIUS : d.isField(e) && t && d.isField(t) && e.isEditable === t.isEditable ? e.width === 0 ? this.constants_.NO_PADDING : this.constants_.LARGE_PADDING : t && d.isJaggedEdge(t) ? this.constants_.LARGE_PADDING : this.constants_.MEDIUM_PADDING;
        }
        getSpacerRowHeight_(e, t) {
          return d.isTopRow(e) && d.isBottomRow(t) ? this.constants_.EMPTY_BLOCK_SPACER_HEIGHT : d.isTopRow(e) || d.isBottomRow(t) ? this.constants_.NO_PADDING : e.hasExternalInput && t.hasExternalInput ? this.constants_.LARGE_PADDING : !e.hasStatement && t.hasStatement ? this.constants_.BETWEEN_STATEMENT_PADDING_Y : e.hasStatement && t.hasStatement || e.hasDummyInput || t.hasDummyInput ? this.constants_.LARGE_PADDING : this.constants_.MEDIUM_PADDING;
        }
        getElemCenterline_(e, t) {
          if (d.isSpacer(t)) return e.yPos + t.height / 2;
          if (d.isBottomRow(e)) return e = e.yPos + e.height - e.descenderHeight, d.isNextConnection(t) ? e + t.height / 2 : e - t.height / 2;
          if (d.isTopRow(e)) return d.isHat(t) ? e.capline - t.height / 2 : e.capline + t.height / 2;
          let s = e.yPos;
          return s = d.isField(t) && e.hasStatement ? s + (this.constants_.TALL_INPUT_FIELD_OFFSET_Y + t.height / 2) : s + e.height / 2;
        }
        finalize_() {
          let e = 0, t = 0;
          for (var s = 0; s < this.rows.length; s++) {
            const i = this.rows[s];
            i.yPos = t, i.xPos = this.startX, t += i.height, e = Math.max(e, i.widthWithConnectedBlocks);
            var o = t - this.topRow.ascenderHeight;
            i === this.bottomRow && o < this.constants_.MIN_BLOCK_HEIGHT && (o = this.constants_.MIN_BLOCK_HEIGHT - o, this.bottomRow.height += o, t += o), this.recordElemPositions_(i);
          }
          this.outputConnection && this.block_.nextConnection && this.block_.nextConnection.isConnected() && (s = this.block_.nextConnection.targetBlock()) && (e = Math.max(e, s.getHeightWidth().width)), this.bottomRow.baseline = t - this.bottomRow.descenderHeight, this.widthWithChildren = e + this.startX, this.height = t, this.startY = this.topRow.capline;
        }
      }, H_ = class extends sl {
        constructor(e) {
          super(e);
        }
        makeRenderInfo_(e) {
          return new U_(this, e);
        }
      };
      Li("thrasos", H_);
      var nh = {};
      nh.RenderInfo = U_, nh.Renderer = H_;
      var Bm = {
        colour_blocks: { colourPrimary: "#CF63CF", colourSecondary: "#C94FC9", colourTertiary: "#BD42BD" },
        list_blocks: { colourPrimary: "#9966FF", colourSecondary: "#855CD6", colourTertiary: "#774DCB" },
        logic_blocks: { colourPrimary: "#4C97FF", colourSecondary: "#4280D7", colourTertiary: "#3373CC" },
        loop_blocks: { colourPrimary: "#0fBD8C", colourSecondary: "#0DA57A", colourTertiary: "#0B8E69" },
        math_blocks: { colourPrimary: "#59C059", colourSecondary: "#46B946", colourTertiary: "#389438" },
        procedure_blocks: { colourPrimary: "#FF6680", colourSecondary: "#FF4D6A", colourTertiary: "#FF3355" },
        text_blocks: { colourPrimary: "#FFBF00", colourSecondary: "#E6AC00", colourTertiary: "#CC9900" },
        variable_blocks: { colourPrimary: "#FF8C1A", colourSecondary: "#FF8000", colourTertiary: "#DB6E00" },
        variable_dynamic_blocks: { colourPrimary: "#FF8C1A", colourSecondary: "#FF8000", colourTertiary: "#DB6E00" },
        hat_blocks: { colourPrimary: "#4C97FF", colourSecondary: "#4280D7", colourTertiary: "#3373CC", hat: "cap" }
      }, xm = { colour_category: { colour: "#CF63CF" }, list_category: { colour: "#9966FF" }, logic_category: { colour: "#4C97FF" }, loop_category: { colour: "#0fBD8C" }, math_category: { colour: "#59C059" }, procedure_category: { colour: "#FF6680" }, text_category: { colour: "#FFBF00" }, variable_category: { colour: "#FF8C1A" }, variable_dynamic_category: { colour: "#FF8C1A" } }, Fm = new js("zelos", Bm, xm), Um = { Classic: Fr, Zelos: Fm }, rh = class {
        constructor(e, t, s) {
          this.id_ = e.toolboxitemid || oe(), this.level_ = (this.parent_ = s || null) ? this.parent_.getLevel() + 1 : 0, this.toolboxItemDef_ = e, this.parentToolbox_ = t, this.workspace_ = this.parentToolbox_.getWorkspace();
        }
        init() {
        }
        getDiv() {
          return null;
        }
        getClickTarget() {
          return null;
        }
        getId() {
          return this.id_;
        }
        getParent() {
          return null;
        }
        getLevel() {
          return this.level_;
        }
        isSelectable() {
          return !1;
        }
        isCollapsible() {
          return !1;
        }
        dispose() {
        }
        setVisible_(e) {
        }
        getFocusableElement() {
          const e = this.getDiv();
          if (!e) throw Error("Trying to access toolbox item before DOM is initialized.");
          if (!(e instanceof HTMLElement)) throw Error("Toolbox item div is unexpectedly not an HTML element.");
          return e;
        }
        getFocusableTree() {
          return this.parentToolbox_;
        }
        onNodeFocus() {
        }
        onNodeBlur() {
        }
        canBeFocused() {
          return !0;
        }
      }, _t = class extends rh {
        constructor(e, t, s) {
          super(e, t, s), this.colour_ = this.name_ = "", this.labelDom_ = this.iconDom_ = this.rowContents_ = this.rowDiv_ = this.htmlDiv_ = null, this.isDisabled_ = this.isHidden_ = !1, this.flyoutItems_ = [], this.cssConfig_ = this.makeDefaultCssConfig_();
        }
        init() {
          this.parseCategoryDef_(this.toolboxItemDef_), this.parseContents_(this.toolboxItemDef_), this.createDom_(), this.toolboxItemDef_.hidden === "true" && this.hide();
        }
        makeDefaultCssConfig_() {
          return { container: "blocklyToolboxCategoryContainer", row: "blocklyToolboxCategory", rowcontentcontainer: "blocklyTreeRowContentContainer", icon: "blocklyToolboxCategoryIcon", label: "blocklyToolboxCategoryLabel", contents: "blocklyToolboxCategoryGroup", selected: "blocklyToolboxSelected", openicon: "blocklyToolboxCategoryIconOpen", closedicon: "blocklyToolboxCategoryIconClosed" };
        }
        parseContents_(e) {
          if ("custom" in e) this.flyoutItems_ = e.custom;
          else if (e = e.contents) for (let t = 0; t < e.length; t++) {
            const s = e[t];
            Array.isArray(this.flyoutItems_) && this.flyoutItems_.push(s);
          }
        }
        parseCategoryDef_(e) {
          this.name_ = "name" in e ? le(e.name) : "", this.colour_ = this.getColour_(e), Object.assign(this.cssConfig_, e.cssconfig || e.cssConfig);
        }
        createDom_() {
          this.htmlDiv_ = this.createContainer_(), ft(this.htmlDiv_, ze.TREEITEM), ie(
            this.htmlDiv_,
            ee.SELECTED,
            !1
          ), ie(this.htmlDiv_, ee.LEVEL, this.level_ + 1), this.rowDiv_ = this.createRowContainer_(), this.rowDiv_.style.pointerEvents = "auto", this.htmlDiv_.appendChild(this.rowDiv_), this.rowContents_ = this.createRowContentsContainer_(), this.rowContents_.style.pointerEvents = "none", this.rowDiv_.appendChild(this.rowContents_), this.iconDom_ = this.createIconDom_(), ft(
            this.iconDom_,
            ze.PRESENTATION
          ), this.rowContents_.appendChild(this.iconDom_), this.labelDom_ = this.createLabelDom_(this.name_), this.rowContents_.appendChild(this.labelDom_);
          const e = this.labelDom_.getAttribute("id");
          return e && ie(this.htmlDiv_, ee.LABELLEDBY, e), this.addColourBorder_(this.colour_), this.htmlDiv_;
        }
        createContainer_() {
          const e = document.createElement("div");
          e.tabIndex = -1, e.id = this.getId();
          const t = this.cssConfig_.container;
          return t && R(e, t), e;
        }
        createRowContainer_() {
          const e = document.createElement("div");
          var t = this.cssConfig_.row;
          return t && R(e, t), t = `${_t.nestedPadding * this.getLevel()}px`, this.workspace_.RTL ? e.style.paddingRight = t : e.style.paddingLeft = t, e;
        }
        createRowContentsContainer_() {
          const e = document.createElement("div"), t = this.cssConfig_.rowcontentcontainer;
          return t && R(
            e,
            t
          ), e;
        }
        createIconDom_() {
          const e = document.createElement("span");
          if (!this.parentToolbox_.isHorizontal()) {
            const t = this.cssConfig_.icon;
            t && R(e, t);
          }
          return e.style.display = "inline-block", e;
        }
        createLabelDom_(e) {
          const t = document.createElement("span");
          return t.setAttribute("id", this.getId() + ".label"), t.textContent = e, (e = this.cssConfig_.label) && R(t, e), t;
        }
        refreshTheme() {
          this.colour_ = this.getColour_(this.toolboxItemDef_), this.addColourBorder_(this.colour_);
        }
        addColourBorder_(e) {
          e && (e = _t.borderWidth + "px solid " + (e || "#ddd"), this.workspace_.RTL ? this.rowDiv_.style.borderRight = e : this.rowDiv_.style.borderLeft = e);
        }
        getColour_(e) {
          const t = e.categorystyle || e.categoryStyle;
          if ((e = e.colour) && t) console.warn('Toolbox category "' + this.name_ + '" must not have both a style and a colour');
          else {
            if (t) return this.getColourfromStyle(t);
            if (e) return this.parseColour(e);
          }
          return "";
        }
        getColourfromStyle(e) {
          var t = this.workspace_.getTheme();
          if (e && t) {
            if ((t = t.categoryStyles[e]) && t.colour) return this.parseColour(t.colour);
            console.warn('Style "' + e + '" must exist and contain a colour value');
          }
          return "";
        }
        getClickTarget() {
          return this.rowDiv_;
        }
        parseColour(e) {
          if (e = le(e), e == null || e === "") return "";
          var t = Number(e);
          return isNaN(t) ? (t = Ns(e)) ? t : (console.warn('Toolbox category "' + this.name_ + '" has unrecognized colour attribute: ' + e), "") : cc(t);
        }
        openIcon_(e) {
          if (e) {
            var t = this.cssConfig_.closedicon;
            t && is(e, t), (t = this.cssConfig_.openicon) && R(e, t);
          }
        }
        closeIcon_(e) {
          if (e) {
            var t = this.cssConfig_.openicon;
            t && is(e, t), (t = this.cssConfig_.closedicon) && R(e, t);
          }
        }
        setVisible_(e) {
          this.htmlDiv_.style.display = e ? "block" : "none", this.isHidden_ = !e, this.parentToolbox_.getSelectedItem() === this && this.parentToolbox_.clearSelection();
        }
        hide() {
          this.setVisible_(!1);
        }
        show() {
          this.setVisible_(!0);
        }
        isVisible() {
          return !this.isHidden_ && this.allAncestorsExpanded_();
        }
        allAncestorsExpanded_() {
          let e = this;
          for (; e.getParent(); ) if (e = e.getParent(), !e.isExpanded()) return !1;
          return !0;
        }
        isSelectable() {
          return this.isVisible() && !this.isDisabled_;
        }
        onClick(e) {
        }
        setSelected(e) {
          if (this.rowDiv_) {
            var t = this.cssConfig_.selected;
            if (e) {
              const s = this.parseColour(_t.defaultBackgroundColour);
              this.rowDiv_.style.backgroundColor = this.colour_ || s, t && R(this.rowDiv_, t);
            } else this.rowDiv_.style.backgroundColor = "", t && F(this.rowDiv_, t);
            ie(this.htmlDiv_, ee.SELECTED, e);
          }
        }
        setDisabled(e) {
          this.isDisabled_ = e, this.getDiv().setAttribute("disabled", `${e}`), e ? this.getDiv().setAttribute("disabled", "true") : this.getDiv().removeAttribute("disabled");
        }
        getName() {
          return this.name_;
        }
        getParent() {
          return this.parent_;
        }
        getDiv() {
          return this.htmlDiv_;
        }
        getContents() {
          return this.flyoutItems_;
        }
        updateFlyoutContents(e) {
          this.flyoutItems_ = [], this.toolboxItemDef_ = typeof e == "string" ? { kind: this.toolboxItemDef_.kind, custom: e, id: this.toolboxItemDef_.id, categorystyle: this.toolboxItemDef_.categorystyle, colour: this.toolboxItemDef_.colour, cssconfig: this.toolboxItemDef_.cssconfig, hidden: this.toolboxItemDef_.hidden } : {
            kind: this.toolboxItemDef_.kind,
            name: "name" in this.toolboxItemDef_ ? this.toolboxItemDef_.name : "",
            contents: gi(e),
            id: this.toolboxItemDef_.id,
            categorystyle: this.toolboxItemDef_.categorystyle,
            colour: this.toolboxItemDef_.colour,
            cssconfig: this.toolboxItemDef_.cssconfig,
            hidden: this.toolboxItemDef_.hidden
          }, this.parseContents_(this.toolboxItemDef_);
        }
        dispose() {
          G(this.htmlDiv_);
        }
      };
      _t.registrationName = "category", _t.nestedPadding = 19, _t.borderWidth = 8, _t.defaultBackgroundColour = "#57e", Tt(`
.blocklyToolboxCategory:not(.blocklyToolboxSelected):hover {
  background-color: rgba(255, 255, 255, .2);
}

.blocklyToolbox[layout="h"] .blocklyToolboxCategoryContainer {
  margin: 1px 5px 1px 0;
}

.blocklyToolbox[dir="RTL"][layout="h"] .blocklyToolboxCategoryContainer {
  margin: 1px 0 1px 5px;
}

.blocklyToolboxCategory {
  height: 22px;
  line-height: 22px;
  margin-bottom: 3px;
  padding-right: 8px;
  white-space: nowrap;
}

.blocklyToolbox[dir="RTL"] .blocklyToolboxCategory {
  margin-left: 8px;
  padding-right: 0;
}

.blocklyToolboxCategoryIcon {
  background-image: url(<<<PATH>>>/sprites.png);
  height: 16px;
  vertical-align: middle;
  visibility: hidden;
  width: 16px;
}

.blocklyToolboxCategoryIconClosed {
  background-position: -32px -1px;
}

.blocklyToolbox[dir="RTL"] .blocklyToolboxCategoryIconClosed {
  background-position: 0 -1px;
}

.blocklyToolboxSelected>.blocklyToolboxCategoryIconClosed {
  background-position: -32px -17px;
}

.blocklyToolbox[dir="RTL"] .blocklyToolboxSelected>.blocklyToolboxCategoryIconClosed {
  background-position: 0 -17px;
}

.blocklyToolboxCategoryIconOpen {
  background-position: -16px -1px;
}

.blocklyToolboxSelected>.blocklyToolboxCategoryIconOpen {
  background-position: -16px -17px;
}

.blocklyToolboxCategoryLabel {
  cursor: default;
  font: 16px sans-serif;
  padding: 0 3px;
  vertical-align: middle;
}

.blocklyToolboxDelete .blocklyToolboxCategoryLabel {
  cursor: url("<<<PATH>>>/handdelete.cur"), auto;
}

.blocklyToolboxSelected .blocklyToolboxCategoryLabel {
  color: #fff;
}
`), c(f.TOOLBOX_ITEM, _t.registrationName, _t);
      var cn = class extends rh {
        constructor(e, t) {
          super(e, t), this.cssConfig_ = { container: "blocklyTreeSeparator" }, this.htmlDiv = null, Object.assign(this.cssConfig_, e.cssconfig || e.cssConfig);
        }
        init() {
          this.createDom_();
        }
        createDom_() {
          const e = document.createElement("div");
          e.tabIndex = -1, e.id = this.getId();
          const t = this.cssConfig_.container;
          return t && R(e, t), this.htmlDiv = e;
        }
        getDiv() {
          return this.htmlDiv;
        }
        dispose() {
          G(this.htmlDiv);
        }
      };
      cn.registrationName = "sep", Tt(`
.blocklyTreeSeparator {
  border-bottom: solid #e5e5e5 1px;
  height: 0;
  margin: 5px 0;
}

.blocklyToolbox[layout="h"] .blocklyTreeSeparator {
  border-right: solid #e5e5e5 1px;
  border-bottom: none;
  height: auto;
  margin: 0 5px 0 5px;
  padding: 5px 0;
  width: 0;
}
`), c(f.TOOLBOX_ITEM, cn.registrationName, cn);
      var ei = class extends _t {
        constructor(e, t, s) {
          super(e, t, s), this.subcategoriesDiv_ = null, this.expanded_ = !1, this.toolboxItems_ = [];
        }
        makeDefaultCssConfig_() {
          const e = super.makeDefaultCssConfig_();
          return e.contents = "blocklyToolboxCategoryGroup", e;
        }
        parseContents_(e) {
          if ("custom" in e) this.flyoutItems_ = e.custom;
          else {
            const t = e.contents;
            if (t) {
              this.flyoutItems_ = [], e = !0;
              for (let s = 0; s < t.length; s++) {
                const o = t[s];
                !oo(f.TOOLBOX_ITEM, o.kind) || o.kind.toLowerCase() === cn.registrationName && e ? (this.flyoutItems_.push(o), e = !0) : (this.createToolboxItem(o), e = !1);
              }
            }
          }
        }
        createToolboxItem(e) {
          let t = e.kind;
          t.toUpperCase() === "CATEGORY" && En(e) && (t = ei.registrationName), e = new (He(f.TOOLBOX_ITEM, t))(e, this.parentToolbox_, this), this.toolboxItems_.push(e);
        }
        init() {
          super.init(), this.setExpanded(this.toolboxItemDef_.expanded === "true" || this.toolboxItemDef_.expanded === !0);
        }
        createDom_() {
          super.createDom_();
          const e = this.getChildToolboxItems();
          return this.subcategoriesDiv_ = this.createSubCategoriesDom_(e), ft(this.subcategoriesDiv_, ze.GROUP), this.htmlDiv_.appendChild(this.subcategoriesDiv_), this.closeIcon_(this.iconDom_), ie(this.htmlDiv_, ee.EXPANDED, !1), this.htmlDiv_;
        }
        createIconDom_() {
          const e = document.createElement("span");
          if (!this.parentToolbox_.isHorizontal()) {
            const t = this.cssConfig_.icon;
            t && R(e, t), e.style.visibility = "visible";
          }
          return e.style.display = "inline-block", e;
        }
        createSubCategoriesDom_(e) {
          const t = document.createElement("div");
          t.style.display = "none";
          var s = this.cssConfig_.contents;
          for (s && R(t, s), s = 0; s < e.length; s++) {
            const o = e[s];
            o.init();
            const i = o.getDiv();
            if (t.appendChild(i), o.getClickTarget) {
              let r;
              (r = o.getClickTarget()) == null || r.setAttribute("id", o.getId());
            }
          }
          return t;
        }
        setExpanded(e) {
          if (this.expanded_ !== e) {
            if (this.expanded_ = e) this.subcategoriesDiv_.style.display = "block", this.openIcon_(this.iconDom_);
            else {
              let t;
              (t = this.parentToolbox_.getFlyout()) == null || t.setVisible(!1), this.subcategoriesDiv_.style.display = "none", this.closeIcon_(this.iconDom_);
            }
            ie(this.htmlDiv_, ee.EXPANDED, e), this.parentToolbox_.handleToolboxItemResize();
          }
        }
        setVisible_(e) {
          this.htmlDiv_.style.display = e ? "block" : "none";
          const t = this.getChildToolboxItems();
          for (let s = 0; s < t.length; s++) t[s].setVisible_(e);
          this.isHidden_ = !e, this.parentToolbox_.getSelectedItem() === this && this.parentToolbox_.clearSelection();
        }
        isExpanded() {
          return this.expanded_;
        }
        isCollapsible() {
          return !0;
        }
        onClick(e) {
          this.toggleExpanded();
        }
        toggleExpanded() {
          this.setExpanded(!this.expanded_);
        }
        getDiv() {
          return this.htmlDiv_;
        }
        getChildToolboxItems() {
          return this.toolboxItems_;
        }
      };
      ei.registrationName = "collapsibleCategory", c(f.TOOLBOX_ITEM, ei.registrationName, ei);
      var G_ = class extends Xr {
        constructor(e) {
          super(), this.id = "toolbox", this.contentsDiv_ = this.HtmlDiv = null, this.isVisible_ = !1, this.height_ = this.width_ = 0, this.flyout = null, this.contents = /* @__PURE__ */ new Map(), this.previouslySelectedItem_ = this.selectedItem_ = null, this.boundEvents_ = [], this.mouseDown = !1, this.workspace_ = e, this.toolboxDef_ = e.options.languageTree || { contents: [] }, this.horizontalLayout = e.options.horizontalLayout, this.RTL = e.options.RTL, this.toolboxPosition = e.options.toolboxPosition;
        }
        onShortcut(e) {
          return !1;
        }
        init() {
          var e = this.workspace_;
          const t = e.getParentSvg();
          this.flyout = this.createFlyout_(), this.HtmlDiv = this.createDom_(this.workspace_);
          const s = this.flyout.createDom("svg");
          R(s, "blocklyToolboxFlyout"), Pt(s, t), this.setVisible(!0), this.flyout.init(e), this.render(this.toolboxDef_), e = e.getThemeManager(), e.subscribe(
            this.HtmlDiv,
            "toolboxBackgroundColour",
            "background-color"
          ), e.subscribe(this.HtmlDiv, "toolboxForegroundColour", "color"), this.workspace_.getComponentManager().addComponent({ component: this, weight: Q.ComponentWeight.TOOLBOX_WEIGHT, capabilities: [Q.Capability.AUTOHIDEABLE, Q.Capability.DELETE_AREA, Q.Capability.DRAG_TARGET] }), n.getFocusManager$$module$build$src$core$focus_manager().registerTree(this, !0);
        }
        createDom_(e) {
          e = e.getParentSvg();
          const t = this.createContainer_();
          t.id = oe(), this.contentsDiv_ = this.createContentsContainer_(), ft(this.contentsDiv_, ze.TREE), t.appendChild(this.contentsDiv_);
          let s;
          return (s = e.parentNode) == null || s.insertBefore(t, e), this.attachEvents_(t, this.contentsDiv_), t;
        }
        createContainer_() {
          const e = document.createElement("div");
          return e.setAttribute("layout", this.isHorizontal() ? "h" : "v"), R(e, "blocklyToolbox"), e.setAttribute("dir", this.RTL ? "RTL" : "LTR"), e;
        }
        createContentsContainer_() {
          const e = document.createElement("div");
          return R(e, "blocklyToolboxCategoryGroup"), this.isHorizontal() && (e.style.flexDirection = "row"), e;
        }
        attachEvents_(e, t) {
          const s = w(
            e,
            "pointerdown",
            this,
            this.onClick_,
            !1
          );
          this.boundEvents_.push(s), e = De(e, "pointerup", this, () => {
            this.mouseDown = !1;
          }), this.boundEvents_.push(e), t = w(t, "keydown", this, this.onKeyDown_, !1), this.boundEvents_.push(t);
        }
        onClick_(e) {
          if (this.mouseDown = !0, Ge(e) || e.target === this.HtmlDiv) l().hideChaff(!1);
          else {
            var t = e.target.getAttribute("id");
            t && (t = this.getToolboxItemById(t), t == null ? 0 : t.isSelectable()) && (this.setSelectedItem(t), t.onClick(e)), l().hideChaff(!0);
          }
          K();
        }
        onKeyDown_(e) {
          let t = !1;
          switch (e.key) {
            case "ArrowDown":
              t = this.selectNext();
              break;
            case "ArrowUp":
              t = this.selectPrevious();
              break;
            case "ArrowLeft":
              t = this.selectParent();
              break;
            case "ArrowRight":
              t = this.selectChild();
              break;
            case "Enter":
            case " ":
              this.selectedItem_ && this.selectedItem_.isCollapsible() && (this.selectedItem_.toggleExpanded(), t = !0);
              break;
            default:
              t = !1;
          }
          !t && this.selectedItem_ && this.selectedItem_.onKeyDown && (t = this.selectedItem_.onKeyDown(e)), t && e.preventDefault();
        }
        createFlyout_() {
          const e = this.workspace_, t = e.copyOptionsForFlyout();
          return t.toolboxPosition = e.options.toolboxPosition, new (e.horizontalLayout ? Ee(f.FLYOUTS_HORIZONTAL_TOOLBOX, e.options, !0) : Ee(
            f.FLYOUTS_VERTICAL_TOOLBOX,
            e.options,
            !0
          ))(t);
        }
        render(e) {
          this.toolboxDef_ = e, this.contents.forEach((t) => t.dispose()), this.contents.clear(), this.renderContents_(e.contents), this.position(), this.handleToolboxItemResize();
        }
        renderContents_(e) {
          const t = document.createDocumentFragment();
          for (let o = 0; o < e.length; o++) this.createToolboxItem(e[o], t);
          let s;
          (s = this.contentsDiv_) == null || s.appendChild(t);
        }
        createToolboxItem(e, t) {
          var s = e.kind;
          if (s.toUpperCase() === "CATEGORY" && En(e) && (s = ei.registrationName), s = He(f.TOOLBOX_ITEM, s.toLowerCase())) {
            e = new s(e, this), e.init(), this.addToolboxItem_(e), (s = e.getDiv()) && t.appendChild(s);
            let o;
            (o = e.getClickTarget()) == null || o.setAttribute("id", e.getId());
          }
        }
        addToolboxItem_(e) {
          if (this.contents.set(e.getId(), e), e.isCollapsible()) {
            e = e.getChildToolboxItems();
            for (let t = 0; t < e.length; t++) this.addToolboxItem_(e[t]);
          }
        }
        getToolboxItems() {
          return [...this.contents.values()];
        }
        addStyle(e) {
          e && this.HtmlDiv && R(
            this.HtmlDiv,
            e
          );
        }
        removeStyle(e) {
          e && this.HtmlDiv && F(this.HtmlDiv, e);
        }
        getClientRect() {
          if (!this.HtmlDiv || !this.isVisible_) return null;
          var e = this.HtmlDiv.getBoundingClientRect();
          const t = e.top, s = t + e.height, o = e.left;
          return e = o + e.width, this.toolboxPosition === P.TOP ? new M(-1e7, s, -1e7, 1e7) : this.toolboxPosition === P.BOTTOM ? new M(
            t,
            1e7,
            -1e7,
            1e7
          ) : this.toolboxPosition === P.LEFT ? new M(-1e7, 1e7, -1e7, e) : new M(-1e7, 1e7, o, 1e7);
        }
        wouldDelete(e) {
          return e instanceof z ? this.updateWouldDelete_(!e.getParent() && e.isDeletable()) : this.updateWouldDelete_(st(e) && e.isDeletable()), this.wouldDelete_;
        }
        onDragEnter(e) {
          this.updateCursorDeleteStyle_(!0);
        }
        onDragExit(e) {
          this.updateCursorDeleteStyle_(!1);
        }
        onDrop(e) {
          this.updateCursorDeleteStyle_(!1);
        }
        updateWouldDelete_(e) {
          e !== this.wouldDelete_ && (this.updateCursorDeleteStyle_(!1), this.wouldDelete_ = e, this.updateCursorDeleteStyle_(!0));
        }
        updateCursorDeleteStyle_(e) {
          const t = this.wouldDelete_ ? "blocklyToolboxDelete" : "blocklyToolboxGrab";
          e ? this.addStyle(t) : this.removeStyle(t);
        }
        getToolboxItemById(e) {
          return this.contents.get(e) || null;
        }
        getWidth() {
          return this.width_;
        }
        getHeight() {
          return this.height_;
        }
        getFlyout() {
          return this.flyout;
        }
        getWorkspace() {
          return this.workspace_;
        }
        getSelectedItem() {
          return this.selectedItem_;
        }
        getPreviouslySelectedItem() {
          return this.previouslySelectedItem_;
        }
        isHorizontal() {
          return this.horizontalLayout;
        }
        position() {
          const e = this.workspace_.getMetrics(), t = this.HtmlDiv;
          if (t) {
            this.horizontalLayout ? (t.style.left = "0", t.style.height = "auto", t.style.width = "100%", this.height_ = t.offsetHeight, this.width_ = e.viewWidth, this.toolboxPosition === P.TOP ? t.style.top = "0" : t.style.bottom = "0") : (this.toolboxPosition === P.RIGHT ? t.style.right = "0" : t.style.left = "0", t.style.height = "100%", this.width_ = t.offsetWidth, this.height_ = e.viewHeight);
            var s;
            (s = this.flyout) == null || s.position();
          }
        }
        handleToolboxItemResize() {
          if (this.HtmlDiv) {
            var e = this.workspace_, t = this.HtmlDiv.getBoundingClientRect(), s = this.getFlyout(), o = this.toolboxPosition === P.LEFT ? e.scrollX + t.width + (s != null && s.isVisible() ? s.getWidth() : 0) : e.scrollX;
            t = this.toolboxPosition === P.TOP ? e.scrollY + t.height + (s != null && s.isVisible() ? s.getHeight() : 0) : e.scrollY, e.translate(o, t), ys(e);
          }
        }
        clearSelection() {
          this.setSelectedItem(null);
        }
        refreshTheme() {
          this.contents.forEach((e) => {
            e.refreshTheme && e.refreshTheme();
          });
        }
        refreshSelection() {
          if (this.selectedItem_ && this.selectedItem_.isSelectable() && this.selectedItem_.getContents().length) {
            let e;
            (e = this.flyout) == null || e.show(this.selectedItem_.getContents());
          }
        }
        setVisible(e) {
          this.isVisible_ !== e && (this.HtmlDiv && (this.HtmlDiv.style.display = e ? "block" : "none"), this.isVisible_ = e, this.workspace_.recordDragTargets());
        }
        autoHide(e) {
          !e && this.flyout && this.flyout.autoClose && this.clearSelection();
        }
        setSelectedItem(e) {
          const t = this.selectedItem_;
          !e && !t || e && !N$(e) || (this.shouldDeselectItem_(t, e) && t !== null && this.deselectItem_(t), this.shouldSelectItem_(t, e) && e !== null && this.selectItem_(t, e), this.updateFlyout_(t, e), this.fireSelectEvent(t, e));
        }
        shouldDeselectItem_(e, t) {
          return e !== null && (!e.isCollapsible() || e !== t);
        }
        shouldSelectItem_(e, t) {
          return t !== null && t !== e;
        }
        deselectItem_(e) {
          this.selectedItem_ = null, this.previouslySelectedItem_ = e, e.setSelected(!1), ie(
            this.contentsDiv_,
            ee.ACTIVEDESCENDANT,
            ""
          );
        }
        selectItem_(e, t) {
          this.selectedItem_ = t, this.previouslySelectedItem_ = e, t.setSelected(!0), ie(this.contentsDiv_, ee.ACTIVEDESCENDANT, t.getId());
        }
        selectItemByPosition(e) {
          (e = this.getToolboxItems()[e]) && this.setSelectedItem(e);
        }
        updateFlyout_(e, t) {
          if (t && (e !== t || t.isCollapsible()) && t.getContents().length) {
            let s;
            (s = this.flyout) == null || s.show(t.getContents());
            let o;
            (o = this.flyout) == null || o.scrollToStart();
          } else {
            let s;
            (s = this.flyout) == null || s.hide();
          }
        }
        fireSelectEvent(e, t) {
          const s = e && e.getName();
          let o = t && t.getName();
          e === t && (o = null), e = new (L(m.TOOLBOX_ITEM_SELECT))(s, o, this.workspace_.id), k(e);
        }
        selectParent() {
          if (!this.selectedItem_) return !1;
          if (this.selectedItem_.isCollapsible() && this.selectedItem_.isExpanded()) return this.selectedItem_.toggleExpanded(), !0;
          let e;
          return (e = this.selectedItem_.getParent()) != null && e.isSelectable() ? (this.setSelectedItem(this.selectedItem_.getParent()), !0) : !1;
        }
        selectChild() {
          if (!this.selectedItem_ || !this.selectedItem_.isCollapsible()) return !1;
          const e = this.selectedItem_;
          return e.isExpanded() ? this.selectNext() : e.toggleExpanded(), !0;
        }
        selectNext() {
          if (!this.selectedItem_) return !1;
          const e = [...this.contents.values()];
          let t = e.indexOf(this.selectedItem_) + 1;
          if (t > -1 && t < e.length) {
            let s = e[t];
            for (; s && !s.isSelectable(); ) s = e[++t];
            if (s && s.isSelectable()) return this.setSelectedItem(s), !0;
          }
          return !1;
        }
        selectPrevious() {
          if (!this.selectedItem_) return !1;
          const e = [...this.contents.values()];
          let t = e.indexOf(this.selectedItem_) - 1;
          if (t > -1 && t < e.length) {
            let s = e[t];
            for (; s && !s.isSelectable(); ) s = e[--t];
            if (s && s.isSelectable()) return this.setSelectedItem(s), !0;
          }
          return !1;
        }
        dispose() {
          this.workspace_.getComponentManager().removeComponent("toolbox");
          var e;
          for ((e = this.flyout) == null || e.dispose(), this.contents.forEach((t) => t.dispose()), e = 0; e < this.boundEvents_.length; e++) H(this.boundEvents_[e]);
          this.boundEvents_ = [], this.contents.clear(), this.HtmlDiv && (this.workspace_.getThemeManager().unsubscribe(this.HtmlDiv), G(this.HtmlDiv)), n.getFocusManager$$module$build$src$core$focus_manager().unregisterTree(this);
        }
        getFocusableElement() {
          if (!this.HtmlDiv) throw Error("Toolbox DOM has not yet been created.");
          return this.HtmlDiv;
        }
        getFocusableTree() {
          return this;
        }
        onNodeFocus() {
        }
        onNodeBlur() {
        }
        canBeFocused() {
          return !0;
        }
        getRootFocusableNode() {
          return this;
        }
        getRestoredFocusableNode(e) {
          if (!e || e === this) {
            let t;
            return (t = this.getToolboxItems().find((s) => s.isSelectable())) != null ? t : null;
          }
          return null;
        }
        getNestedTrees() {
          return [];
        }
        lookUpFocusableNode(e) {
          return this.getToolboxItemById(e);
        }
        onTreeFocus(e, t) {
          e !== this ? this.getSelectedItem() === e || this.mouseDown || this.setSelectedItem(e) : this.clearSelection();
        }
        onTreeBlur(e) {
          let t;
          e && e === ((t = this.flyout) == null ? void 0 : t.getWorkspace()) || this.autoHide(!1);
        }
      };
      Tt(`
.blocklyToolboxDelete {
  cursor: url("<<<PATH>>>/handdelete.cur"), auto;
}

.blocklyToolboxGrab {
  cursor: url("<<<PATH>>>/handclosed.cur"), auto;
  cursor: grabbing;
  cursor: -webkit-grabbing;
}

/* Category tree in Toolbox. */
.blocklyToolbox {
  box-sizing: border-box;
  user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  background-color: #ddd;
  overflow-x: visible;
  overflow-y: auto;
  padding: 4px 0 4px 0;
  position: absolute;
  z-index: 70;  /* so blocks go under toolbox when dragging */
  -webkit-tap-highlight-color: transparent;  /* issue #1345 */
}

.blocklyToolboxCategoryGroup {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.blocklyToolboxCategoryGroup:focus {
  outline: none;
}
`), c(f.TOOLBOX, We, G_);
      var Hm = "12.5.1", Gm = C.INPUT_VALUE, Vm = C.OUTPUT_VALUE, Wm = C.NEXT_STATEMENT, Xm = C.PREVIOUS_STATEMENT, zm = P.TOP, Ym = P.BOTTOM, Km = P.LEFT, jm = P.RIGHT;
      Jo.prototype.newBlock = function(e, t) {
        return new Yo(this, e, t);
      }, we.prototype.newBlock = function(e, t) {
        return new z(this, e, t);
      }, Jo.prototype.newComment = function(e) {
        return new Br(this, e);
      }, we.prototype.newComment = function(e) {
        return new jt(this, e);
      }, we.newTrashcan = function(e) {
        return new xg(e);
      }, Jt.prototype.newWorkspaceSvg = function(e) {
        return new we(e);
      }, n.Names$$module$build$src$core$names.prototype.populateProcedures = function(e) {
        e = vi(e), e = e[0].concat(e[1]);
        for (let t = 0; t < e.length; t++) this.getName(e[t][0], n.Names$$module$build$src$core$names.NameType.PROCEDURE);
      };
      var _ = {};
      return _.Block = Yo, _.BlockFlyoutInflater = A_, _.BlockNavigationPolicy = gg, _.BlockSvg = z, _.Blocks = q, _.ButtonFlyoutInflater = L_, _.COLLAPSED_FIELD_NAME = Ir, _.COLLAPSED_INPUT_NAME = Ui, _.COLLAPSE_CHARS = ng, _.CodeGenerator = n.CodeGenerator$$module$build$src$core$generator, _.CollapsibleToolboxCategory = ei, _.ComponentManager = Q, _.Connection = U, _.ConnectionChecker = Mg, _.ConnectionDB = Xo, _.ConnectionNavigationPolicy = _g, _.ConnectionType = C, _.ContextMenu = Ts, _.ContextMenuItems = Te, _.ContextMenuRegistry = x, _.Css = Pu, _.DELETE_VARIABLE_ID = pa, _.DeleteArea = Xr, _.DragTarget = ag, _.DropDownDiv = Ae, _.Events = O, _.Extensions = ht, _.Field = X, _.FieldCheckbox = eo, _.FieldDropdown = ve, _.FieldImage = Qs, _.FieldLabel = Js, _.FieldLabelSerializable = s_, _.FieldNavigationPolicy = mg, _.FieldNumber = Ga, _.FieldTextInput = n.FieldTextInput$$module$build$src$core$field_textinput, _.FieldVariable = nn, _.Flyout = Yr, _.FlyoutButton = Be, _.FlyoutButtonNavigationPolicy = dg, _.FlyoutItem = Ko, _.FlyoutMetricsManager = hg, _.FlyoutNavigationPolicy = $g, _.FlyoutNavigator = bg, _.FlyoutSeparator = zr, _.FlyoutSeparatorNavigationPolicy = pg, _.FocusManager = ye, _.FocusableTreeTraverser = Se, _.Generator = n.CodeGenerator$$module$build$src$core$generator, _.Gesture = jr, _.Grid = ba, _.HorizontalFlyout = t_, _.INPUT_VALUE = Gm, _.Input = zo, _.InsertionMarkerPreviewer = Zg, _.KeyboardNavigationController = Sg, _.LabelFlyoutInflater = Wg, _.LineCursor = Ia, _.Marker = Og, _.MarkerManager = Sa, _.Menu = Gu, _.MenuItem = br, _.MetricsManager = _a, _.Msg = n.Msg$$module$build$src$core$msg, _.NEXT_STATEMENT = Wm, _.Names = n.Names$$module$build$src$core$names, _.Navigator = Ea, _.OPPOSITE_TYPE = qs, _.OUTPUT_VALUE = Vm, _.Options = Ct, _.PREVIOUS_STATEMENT = Xm, _.PROCEDURE_CATEGORY_NAME = Jr, _.Procedures = Ne, _.RENAME_VARIABLE_ID = $a, _.RenderedConnection = Re, _.Scrollbar = ue, _.ScrollbarPair = fa, _.SeparatorFlyoutInflater = Ig, _.ShortcutItems = gt, _.ShortcutRegistry = Z, _.TOOLBOX_AT_BOTTOM = Ym, _.TOOLBOX_AT_LEFT = Km, _.TOOLBOX_AT_RIGHT = jm, _.TOOLBOX_AT_TOP = zm, _.Theme = js, _.ThemeManager = wg, _.Themes = Um, _.Toast = Hs, _.Toolbox = G_, _.ToolboxCategory = _t, _.ToolboxItem = rh, _.ToolboxSeparator = cn, _.Tooltip = Ye, _.Touch = Bs, _.Trashcan = xg, _.UnattachedFieldError = he, _.VARIABLE_CATEGORY_NAME = Yu, _.VARIABLE_DYNAMIC_CATEGORY_NAME = ka, _.VERSION = Hm, _.VariableMap = Bg, _.VariableModel = Pg, _.Variables = ae, _.VariablesDynamic = fs, _.VerticalFlyout = Ha, _.WidgetDiv = at, _.Workspace = Jo, _.WorkspaceAudio = Dg, _.WorkspaceDragger = Rg, _.WorkspaceNavigationPolicy = fg, _.WorkspaceSvg = we, _.Xml = ke, _.ZoomControls = ap, _.blockAnimations = Ji, _.blockRendering = W, _.browserEvents = Gt, _.bubbles = ln, _.bumpObjects = Wr, _.clipboard = $t, _.comments = bs, _.common = _e, _.config = n.config$$module$build$src$core$config, _.constants = dm, _.defineBlocksWithJsonArray = $l, _.dialog = Kt, _.dragging = rn, _.fieldRegistry = xr, _.geras = Nt, _.getFocusManager = n.getFocusManager$$module$build$src$core$focus_manager, _.getMainWorkspace = l, _.getSelected = p, _.hasBubble = us, _.hideChaff = w$, _.icons = Es, _.inject = f$, _.inputs = Is, _.isCopyable = Ai, _.isDeletable = st, _.isDraggable = No, _.isIcon = vc, _.isObservable = Qn, _.isPaster = A$, _.isRenderedElement = k$, _.isSelectable = $o, _.isSerializable = Ti, _.isVariableBackedParameterModel = vl, _.keyboardNavigationController = Kr, _.layers = $m, _.navigateBlock = ct, _.navigateStacks = ko, _.procedures = Ne, _.registry = Ht, _.renderManagement = Rr, _.serialization = Dm, _.setLocale = zu, _.setParentContainer = rs, _.svgResize = ys, _.thrasos = nh, _.uiPosition = Us, _.utils = te, _.zelos = kt, _.__namespace__ = n, _;
    });
  })(al)), al.exports;
}
var Qm = Z_();
const eT = /* @__PURE__ */ uh(Qm), {
  Block: MC,
  BlockFlyoutInflater: DC,
  BlockNavigationPolicy: PC,
  BlockSvg: BC,
  Blocks: Mt,
  ButtonFlyoutInflater: xC,
  COLLAPSED_FIELD_NAME: FC,
  COLLAPSED_INPUT_NAME: UC,
  COLLAPSE_CHARS: HC,
  CodeGenerator: GC,
  CollapsibleToolboxCategory: VC,
  ComponentManager: WC,
  Connection: XC,
  ConnectionChecker: zC,
  ConnectionDB: YC,
  ConnectionNavigationPolicy: KC,
  ConnectionType: jC,
  ContextMenu: JC,
  ContextMenuItems: qC,
  ContextMenuRegistry: ZC,
  Css: QC,
  DELETE_VARIABLE_ID: ey,
  DeleteArea: ty,
  DragTarget: sy,
  DropDownDiv: oy,
  Events: iy,
  Extensions: ny,
  Field: ry,
  FieldCheckbox: ly,
  FieldDropdown: to,
  FieldImage: cy,
  FieldLabel: uy,
  FieldLabelSerializable: ay,
  FieldNavigationPolicy: hy,
  FieldNumber: ul,
  FieldTextInput: so,
  FieldVariable: dy,
  Flyout: $y,
  FlyoutButton: py,
  FlyoutButtonNavigationPolicy: gy,
  FlyoutItem: _y,
  FlyoutMetricsManager: my,
  FlyoutNavigationPolicy: Ty,
  FlyoutNavigator: Ey,
  FlyoutSeparator: fy,
  FlyoutSeparatorNavigationPolicy: by,
  FocusManager: Iy,
  FocusableTreeTraverser: Sy,
  Generator: Ry,
  Gesture: Oy,
  Grid: Cy,
  HorizontalFlyout: yy,
  INPUT_VALUE: vy,
  Input: Ly,
  InsertionMarkerPreviewer: Ay,
  KeyboardNavigationController: ky,
  LabelFlyoutInflater: Ny,
  LineCursor: wy,
  Marker: My,
  MarkerManager: Dy,
  Menu: Py,
  MenuItem: By,
  MetricsManager: xy,
  Msg: Fy,
  NEXT_STATEMENT: Uy,
  Names: Hy,
  Navigator: Gy,
  OPPOSITE_TYPE: Vy,
  OUTPUT_VALUE: Wy,
  Options: Xy,
  PREVIOUS_STATEMENT: zy,
  PROCEDURE_CATEGORY_NAME: Yy,
  Procedures: Ky,
  RENAME_VARIABLE_ID: jy,
  RenderedConnection: Jy,
  Scrollbar: qy,
  ScrollbarPair: Zy,
  SeparatorFlyoutInflater: Qy,
  ShortcutItems: ev,
  ShortcutRegistry: tv,
  TOOLBOX_AT_BOTTOM: sv,
  TOOLBOX_AT_LEFT: ov,
  TOOLBOX_AT_RIGHT: iv,
  TOOLBOX_AT_TOP: nv,
  Theme: rv,
  ThemeManager: lv,
  Themes: cv,
  Toast: uv,
  Toolbox: av,
  ToolboxCategory: hv,
  ToolboxItem: dv,
  ToolboxSeparator: $v,
  Tooltip: pv,
  Touch: gv,
  Trashcan: _v,
  UnattachedFieldError: mv,
  VARIABLE_CATEGORY_NAME: Tv,
  VARIABLE_DYNAMIC_CATEGORY_NAME: Ev,
  VERSION: fv,
  VariableMap: bv,
  VariableModel: Iv,
  Variables: Sv,
  VariablesDynamic: Rv,
  VerticalFlyout: Ov,
  WidgetDiv: Cv,
  Workspace: yv,
  WorkspaceAudio: vv,
  WorkspaceDragger: Lv,
  WorkspaceNavigationPolicy: Av,
  WorkspaceSvg: kv,
  Xml: Nv,
  ZoomControls: wv,
  blockAnimations: Mv,
  blockRendering: Dv,
  browserEvents: Pv,
  bubbles: Bv,
  bumpObjects: xv,
  clipboard: Fv,
  comments: Uv,
  common: Hv,
  config: Gv,
  constants: Vv,
  defineBlocksWithJsonArray: Wv,
  dialog: Xv,
  dragging: zv,
  fieldRegistry: Yv,
  geras: Kv,
  getFocusManager: jv,
  getMainWorkspace: Jv,
  getSelected: qv,
  hasBubble: Zv,
  hideChaff: Qv,
  icons: eL,
  inject: tT,
  inputs: tL,
  isCopyable: sL,
  isDeletable: oL,
  isDraggable: iL,
  isIcon: nL,
  isObservable: rL,
  isPaster: lL,
  isRenderedElement: cL,
  isSelectable: uL,
  isSerializable: aL,
  isVariableBackedParameterModel: hL,
  keyboardNavigationController: dL,
  layers: $L,
  navigateBlock: pL,
  navigateStacks: gL,
  procedures: _L,
  registry: mL,
  renderManagement: TL,
  serialization: EL,
  setLocale: sT,
  setParentContainer: fL,
  svgResize: oT,
  thrasos: bL,
  uiPosition: IL,
  utils: SL,
  zelos: RL
} = eT;
var hl = { exports: {} }, iT = hl.exports, j_;
function nT() {
  return j_ || (j_ = 1, (function(N, B) {
    (function(n, c) {
      N.exports = c(Z_());
    })(iT, function(n) {
      var c = n.__namespace__, xe = c.createBlockDefinitionsFromJsonArray$$module$build$src$core$common([{ type: "variables_get_dynamic", message0: "%1", args0: [{ type: "field_variable", name: "VAR", variable: "%{BKY_VARIABLES_DEFAULT_NAME}" }], output: null, style: "variable_dynamic_blocks", helpUrl: "%{BKY_VARIABLES_GET_HELPURL}", tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}", extensions: ["contextMenu_variableDynamicSetterGetter"] }, { type: "variables_set_dynamic", message0: "%{BKY_VARIABLES_SET}", args0: [{
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}"
      }, { type: "input_value", name: "VALUE" }], previousStatement: null, nextStatement: null, style: "variable_dynamic_blocks", tooltip: "%{BKY_VARIABLES_SET_TOOLTIP}", helpUrl: "%{BKY_VARIABLES_SET_HELPURL}", extensions: ["contextMenu_variableDynamicSetterGetter"] }]), Oe = { customContextMenu: function(l) {
        if (this.isInFlyout)
          (this.type === "variables_get_dynamic" || this.type === "variables_get_reporter_dynamic") && (p = {
            text: c.Msg$$module$build$src$core$msg.RENAME_VARIABLE,
            enabled: !0,
            callback: Fe(this)
          }, T = this.getField("VAR").getText(), T = { text: c.Msg$$module$build$src$core$msg.DELETE_VARIABLE.replace("%1", T), enabled: !0, callback: oo(this) }, l.unshift(p), l.unshift(T));
        else {
          if (this.type === "variables_get_dynamic")
            var a = "variables_set_dynamic", p = c.Msg$$module$build$src$core$msg.VARIABLES_GET_CREATE_SET;
          else a = "variables_get_dynamic", p = c.Msg$$module$build$src$core$msg.VARIABLES_SET_CREATE_GET;
          var T = this.getField("VAR");
          a = { type: a, fields: { VAR: T.saveState(!0) } }, l.push({ enabled: this.workspace.remainingCapacity() > 0, text: p.replace("%1", T.getText()), callback: c.callbackFactory$$module$build$src$core$contextmenu(this, a) });
        }
      }, onchange: function(l) {
        l = this.getFieldValue("VAR"), l = c.getVariable$$module$build$src$core$variables(this.workspace, l), this.type === "variables_get_dynamic" ? this.outputConnection.setCheck(l.getType()) : this.getInput("VALUE").connection.setCheck(l.getType());
      } }, Fe = function(l) {
        return function() {
          const a = l.workspace, p = l.getField("VAR").getVariable();
          c.renameVariable$$module$build$src$core$variables(a, p);
        };
      }, oo = function(l) {
        return function() {
          const a = l.getField("VAR").getVariable();
          a && c.deleteVariable$$module$build$src$core$variables(a.getWorkspace(), a, l);
        };
      };
      c.registerMixin$$module$build$src$core$extensions("contextMenu_variableDynamicSetterGetter", Oe), c.defineBlocks$$module$build$src$core$common(xe);
      var He = { blocks: xe }, lt = c.createBlockDefinitionsFromJsonArray$$module$build$src$core$common([{ type: "variables_get", message0: "%1", args0: [{ type: "field_variable", name: "VAR", variable: "%{BKY_VARIABLES_DEFAULT_NAME}" }], output: null, style: "variable_blocks", helpUrl: "%{BKY_VARIABLES_GET_HELPURL}", tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}", extensions: ["contextMenu_variableSetterGetter"] }, { type: "variables_set", message0: "%{BKY_VARIABLES_SET}", args0: [
        { type: "field_variable", name: "VAR", variable: "%{BKY_VARIABLES_DEFAULT_NAME}" },
        { type: "input_value", name: "VALUE" }
      ], previousStatement: null, nextStatement: null, style: "variable_blocks", tooltip: "%{BKY_VARIABLES_SET_TOOLTIP}", helpUrl: "%{BKY_VARIABLES_SET_HELPURL}", extensions: ["contextMenu_variableSetterGetter"] }]), io = { customContextMenu: function(l) {
        if (this.isInFlyout)
          (this.type === "variables_get" || this.type === "variables_get_reporter") && (p = { text: c.Msg$$module$build$src$core$msg.RENAME_VARIABLE, enabled: !0, callback: Ee(this) }, T = this.getField("VAR").getText(), T = { text: c.Msg$$module$build$src$core$msg.DELETE_VARIABLE.replace("%1", T), enabled: !0, callback: si(this) }, l.unshift(p), l.unshift(T));
        else {
          if (this.type === "variables_get")
            var a = "variables_set", p = c.Msg$$module$build$src$core$msg.VARIABLES_GET_CREATE_SET;
          else a = "variables_get", p = c.Msg$$module$build$src$core$msg.VARIABLES_SET_CREATE_GET;
          var T = this.getField("VAR");
          a = { type: a, fields: { VAR: T.saveState(!0) } }, l.push({ enabled: this.workspace.remainingCapacity() > 0, text: p.replace("%1", T.getText()), callback: c.callbackFactory$$module$build$src$core$contextmenu(this, a) });
        }
      } }, Ee = function(l) {
        return function() {
          const a = l.workspace, p = l.getField("VAR").getVariable();
          c.renameVariable$$module$build$src$core$variables(a, p);
        };
      }, si = function(l) {
        return function() {
          const a = l.getField("VAR").getVariable();
          a && c.deleteVariable$$module$build$src$core$variables(a.getWorkspace(), a, l);
        };
      };
      c.registerMixin$$module$build$src$core$extensions("contextMenu_variableSetterGetter", io), c.defineBlocks$$module$build$src$core$common(lt);
      var Ze = { blocks: lt }, K = c.createBlockDefinitionsFromJsonArray$$module$build$src$core$common([
        { type: "text", message0: "%1", args0: [{ type: "field_input", name: "TEXT", text: "" }], output: "String", style: "text_blocks", helpUrl: "%{BKY_TEXT_TEXT_HELPURL}", tooltip: "%{BKY_TEXT_TEXT_TOOLTIP}", extensions: ["text_quotes", "parent_tooltip_when_inline"] },
        { type: "text_join", message0: "", output: "String", style: "text_blocks", helpUrl: "%{BKY_TEXT_JOIN_HELPURL}", tooltip: "%{BKY_TEXT_JOIN_TOOLTIP}", mutator: "text_join_mutator" },
        { type: "text_create_join_container", message0: "%{BKY_TEXT_CREATE_JOIN_TITLE_JOIN} %1 %2", args0: [{ type: "input_dummy" }, { type: "input_statement", name: "STACK" }], style: "text_blocks", tooltip: "%{BKY_TEXT_CREATE_JOIN_TOOLTIP}", enableContextMenu: !1 },
        { type: "text_create_join_item", message0: "%{BKY_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM}", previousStatement: null, nextStatement: null, style: "text_blocks", tooltip: "%{BKY_TEXT_CREATE_JOIN_ITEM_TOOLTIP}", enableContextMenu: !1 },
        {
          type: "text_append",
          message0: "%{BKY_TEXT_APPEND_TITLE}",
          args0: [{ type: "field_variable", name: "VAR", variable: "%{BKY_TEXT_APPEND_VARIABLE}" }, { type: "input_value", name: "TEXT" }],
          previousStatement: null,
          nextStatement: null,
          style: "text_blocks",
          extensions: ["text_append_tooltip"]
        },
        { type: "text_length", message0: "%{BKY_TEXT_LENGTH_TITLE}", args0: [{ type: "input_value", name: "VALUE", check: ["String", "Array"] }], output: "Number", style: "text_blocks", tooltip: "%{BKY_TEXT_LENGTH_TOOLTIP}", helpUrl: "%{BKY_TEXT_LENGTH_HELPURL}" },
        {
          type: "text_isEmpty",
          message0: "%{BKY_TEXT_ISEMPTY_TITLE}",
          args0: [{ type: "input_value", name: "VALUE", check: ["String", "Array"] }],
          output: "Boolean",
          style: "text_blocks",
          tooltip: "%{BKY_TEXT_ISEMPTY_TOOLTIP}",
          helpUrl: "%{BKY_TEXT_ISEMPTY_HELPURL}"
        },
        {
          type: "text_indexOf",
          message0: "%{BKY_TEXT_INDEXOF_TITLE}",
          args0: [{ type: "input_value", name: "VALUE", check: "String" }, { type: "field_dropdown", name: "END", options: [["%{BKY_TEXT_INDEXOF_OPERATOR_FIRST}", "FIRST"], ["%{BKY_TEXT_INDEXOF_OPERATOR_LAST}", "LAST"]] }, { type: "input_value", name: "FIND", check: "String" }],
          output: "Number",
          style: "text_blocks",
          helpUrl: "%{BKY_TEXT_INDEXOF_HELPURL}",
          inputsInline: !0,
          extensions: ["text_indexOf_tooltip"]
        },
        {
          type: "text_charAt",
          message0: "%{BKY_TEXT_CHARAT_TITLE}",
          args0: [{ type: "input_value", name: "VALUE", check: "String" }, { type: "field_dropdown", name: "WHERE", options: [["%{BKY_TEXT_CHARAT_FROM_START}", "FROM_START"], ["%{BKY_TEXT_CHARAT_FROM_END}", "FROM_END"], ["%{BKY_TEXT_CHARAT_FIRST}", "FIRST"], ["%{BKY_TEXT_CHARAT_LAST}", "LAST"], ["%{BKY_TEXT_CHARAT_RANDOM}", "RANDOM"]] }],
          output: "String",
          style: "text_blocks",
          helpUrl: "%{BKY_TEXT_CHARAT_HELPURL}",
          inputsInline: !0,
          mutator: "text_charAt_mutator"
        }
      ]), Ss = { init: function() {
        this.WHERE_OPTIONS_1 = [[c.Msg$$module$build$src$core$msg.TEXT_GET_SUBSTRING_START_FROM_START, "FROM_START"], [c.Msg$$module$build$src$core$msg.TEXT_GET_SUBSTRING_START_FROM_END, "FROM_END"], [c.Msg$$module$build$src$core$msg.TEXT_GET_SUBSTRING_START_FIRST, "FIRST"]], this.WHERE_OPTIONS_2 = [[c.Msg$$module$build$src$core$msg.TEXT_GET_SUBSTRING_END_FROM_START, "FROM_START"], [
          c.Msg$$module$build$src$core$msg.TEXT_GET_SUBSTRING_END_FROM_END,
          "FROM_END"
        ], [c.Msg$$module$build$src$core$msg.TEXT_GET_SUBSTRING_END_LAST, "LAST"]], this.setHelpUrl(c.Msg$$module$build$src$core$msg.TEXT_GET_SUBSTRING_HELPURL), this.setStyle("text_blocks"), this.appendValueInput("STRING").setCheck("String").appendField(c.Msg$$module$build$src$core$msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT);
        const l = (a) => {
          const p = c.fromJson$$module$build$src$core$field_registry({ type: "field_dropdown", options: this["WHERE_OPTIONS_" + a] });
          return p.setValidator(function(T) {
            const S = this.getValue();
            T = T === "FROM_START" || T === "FROM_END", T !== (S === "FROM_START" || S === "FROM_END") && this.getSourceBlock().updateAt_(a, T);
          }), p;
        };
        this.appendDummyInput("WHERE1_INPUT").appendField(l(1), "WHERE1"), this.appendDummyInput("AT1"), this.appendDummyInput("WHERE2_INPUT").appendField(l(2), "WHERE2"), this.appendDummyInput("AT2"), c.Msg$$module$build$src$core$msg.TEXT_GET_SUBSTRING_TAIL && this.appendDummyInput("TAIL").appendField(c.Msg$$module$build$src$core$msg.TEXT_GET_SUBSTRING_TAIL), this.setInputsInline(!0), this.setOutput(
          !0,
          "String"
        ), this.updateAt_(1, !0), this.updateAt_(2, !0), this.setTooltip(c.Msg$$module$build$src$core$msg.TEXT_GET_SUBSTRING_TOOLTIP);
      }, mutationToDom: function() {
        const l = c.createElement$$module$build$src$core$utils$xml("mutation");
        var a = this.getInput("AT1") instanceof c.ValueInput$$module$build$src$core$inputs$value_input;
        return l.setAttribute("at1", `${a}`), a = this.getInput("AT2") instanceof c.ValueInput$$module$build$src$core$inputs$value_input, l.setAttribute("at2", `${a}`), l;
      }, domToMutation: function(l) {
        const a = l.getAttribute("at1") === "true";
        l = l.getAttribute("at2") === "true", this.updateAt_(1, a), this.updateAt_(2, l);
      }, updateAt_: function(l, a) {
        this.removeInput("AT" + l), this.removeInput("ORDINAL" + l, !0), a ? (this.appendValueInput("AT" + l).setCheck("Number"), c.Msg$$module$build$src$core$msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL" + l).appendField(c.Msg$$module$build$src$core$msg.ORDINAL_NUMBER_SUFFIX)) : this.appendDummyInput("AT" + l), l === 2 && c.Msg$$module$build$src$core$msg.TEXT_GET_SUBSTRING_TAIL && (this.removeInput(
          "TAIL",
          !0
        ), this.appendDummyInput("TAIL").appendField(c.Msg$$module$build$src$core$msg.TEXT_GET_SUBSTRING_TAIL)), l === 1 && (this.moveInputBefore("AT1", "WHERE2_INPUT"), this.getInput("ORDINAL1") && this.moveInputBefore("ORDINAL1", "WHERE2_INPUT"));
      } };
      K.text_getSubstring = Ss, K.text_changeCase = { init: function() {
        const l = [[c.Msg$$module$build$src$core$msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE, "UPPERCASE"], [c.Msg$$module$build$src$core$msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE, "LOWERCASE"], [c.Msg$$module$build$src$core$msg.TEXT_CHANGECASE_OPERATOR_TITLECASE, "TITLECASE"]];
        this.setHelpUrl(c.Msg$$module$build$src$core$msg.TEXT_CHANGECASE_HELPURL), this.setStyle("text_blocks"), this.appendValueInput("TEXT").setCheck("String").appendField(c.fromJson$$module$build$src$core$field_registry({
          type: "field_dropdown",
          options: l
        }), "CASE"), this.setOutput(!0, "String"), this.setTooltip(c.Msg$$module$build$src$core$msg.TEXT_CHANGECASE_TOOLTIP);
      } }, K.text_trim = { init: function() {
        const l = [[c.Msg$$module$build$src$core$msg.TEXT_TRIM_OPERATOR_BOTH, "BOTH"], [c.Msg$$module$build$src$core$msg.TEXT_TRIM_OPERATOR_LEFT, "LEFT"], [c.Msg$$module$build$src$core$msg.TEXT_TRIM_OPERATOR_RIGHT, "RIGHT"]];
        this.setHelpUrl(c.Msg$$module$build$src$core$msg.TEXT_TRIM_HELPURL), this.setStyle("text_blocks"), this.appendValueInput("TEXT").setCheck("String").appendField(
          c.fromJson$$module$build$src$core$field_registry({ type: "field_dropdown", options: l }),
          "MODE"
        ), this.setOutput(!0, "String"), this.setTooltip(c.Msg$$module$build$src$core$msg.TEXT_TRIM_TOOLTIP);
      } }, K.text_print = { init: function() {
        this.jsonInit({ message0: c.Msg$$module$build$src$core$msg.TEXT_PRINT_TITLE, args0: [{ type: "input_value", name: "TEXT" }], previousStatement: null, nextStatement: null, style: "text_blocks", tooltip: c.Msg$$module$build$src$core$msg.TEXT_PRINT_TOOLTIP, helpUrl: c.Msg$$module$build$src$core$msg.TEXT_PRINT_HELPURL });
      } };
      var Dt = { updateType_: function(l) {
        this.outputConnection.setCheck(l === "NUMBER" ? "Number" : "String");
      }, mutationToDom: function() {
        const l = c.createElement$$module$build$src$core$utils$xml("mutation");
        return l.setAttribute("type", this.getFieldValue("TYPE")), l;
      }, domToMutation: function(l) {
        this.updateType_(l.getAttribute("type"));
      } };
      K.text_prompt_ext = Object.assign({}, Dt, { init: function() {
        var l = [[c.Msg$$module$build$src$core$msg.TEXT_PROMPT_TYPE_TEXT, "TEXT"], [c.Msg$$module$build$src$core$msg.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"]];
        this.setHelpUrl(c.Msg$$module$build$src$core$msg.TEXT_PROMPT_HELPURL), this.setStyle("text_blocks"), l = c.fromJson$$module$build$src$core$field_registry({ type: "field_dropdown", options: l }), l.setValidator((a) => {
          this.updateType_(a);
        }), this.appendValueInput("TEXT").appendField(
          l,
          "TYPE"
        ), this.setOutput(!0, "String"), this.setTooltip(() => this.getFieldValue("TYPE") === "TEXT" ? c.Msg$$module$build$src$core$msg.TEXT_PROMPT_TOOLTIP_TEXT : c.Msg$$module$build$src$core$msg.TEXT_PROMPT_TOOLTIP_NUMBER);
      } }), K.text_prompt = Object.assign({}, Dt, { init: function() {
        this.mixin(es);
        var l = [[c.Msg$$module$build$src$core$msg.TEXT_PROMPT_TYPE_TEXT, "TEXT"], [c.Msg$$module$build$src$core$msg.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"]];
        this.setHelpUrl(c.Msg$$module$build$src$core$msg.TEXT_PROMPT_HELPURL), this.setStyle("text_blocks"), l = c.fromJson$$module$build$src$core$field_registry({ type: "field_dropdown", options: l }), l.setValidator((a) => {
          this.updateType_(a);
        }), this.appendDummyInput().appendField(l, "TYPE").appendField(this.newQuote_(!0)).appendField(c.fromJson$$module$build$src$core$field_registry({ type: "field_input", text: "" }), "TEXT").appendField(this.newQuote_(!1)), this.setOutput(!0, "String"), this.setTooltip(() => this.getFieldValue("TYPE") === "TEXT" ? c.Msg$$module$build$src$core$msg.TEXT_PROMPT_TOOLTIP_TEXT : c.Msg$$module$build$src$core$msg.TEXT_PROMPT_TOOLTIP_NUMBER);
      } }), K.text_count = { init: function() {
        this.jsonInit({ message0: c.Msg$$module$build$src$core$msg.TEXT_COUNT_MESSAGE0, args0: [{ type: "input_value", name: "SUB", check: "String" }, { type: "input_value", name: "TEXT", check: "String" }], output: "Number", inputsInline: !0, style: "text_blocks", tooltip: c.Msg$$module$build$src$core$msg.TEXT_COUNT_TOOLTIP, helpUrl: c.Msg$$module$build$src$core$msg.TEXT_COUNT_HELPURL });
      } }, K.text_replace = { init: function() {
        this.jsonInit({ message0: c.Msg$$module$build$src$core$msg.TEXT_REPLACE_MESSAGE0, args0: [{ type: "input_value", name: "FROM", check: "String" }, { type: "input_value", name: "TO", check: "String" }, { type: "input_value", name: "TEXT", check: "String" }], output: "String", inputsInline: !0, style: "text_blocks", tooltip: c.Msg$$module$build$src$core$msg.TEXT_REPLACE_TOOLTIP, helpUrl: c.Msg$$module$build$src$core$msg.TEXT_REPLACE_HELPURL });
      } }, K.text_reverse = { init: function() {
        this.jsonInit({ message0: c.Msg$$module$build$src$core$msg.TEXT_REVERSE_MESSAGE0, args0: [{ type: "input_value", name: "TEXT", check: "String" }], output: "String", inputsInline: !0, style: "text_blocks", tooltip: c.Msg$$module$build$src$core$msg.TEXT_REVERSE_TOOLTIP, helpUrl: c.Msg$$module$build$src$core$msg.TEXT_REVERSE_HELPURL });
      } };
      var es = {
        QUOTE_IMAGE_LEFT_DATAURI: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC",
        QUOTE_IMAGE_RIGHT_DATAURI: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==",
        QUOTE_IMAGE_WIDTH: 12,
        QUOTE_IMAGE_HEIGHT: 12,
        quoteField_: function(l) {
          for (let a = 0, p; p = this.inputList[a]; a++) for (let T = 0, S; S = p.fieldRow[T]; T++) if (l === S.name) {
            p.insertFieldAt(T, this.newQuote_(!0)), p.insertFieldAt(T + 2, this.newQuote_(!1));
            return;
          }
          console.warn('field named "' + l + '" not found in ' + this.toDevString());
        },
        newQuote_: function(l) {
          return l = this.RTL ? !l : l, c.fromJson$$module$build$src$core$field_registry({
            type: "field_image",
            src: l ? this.QUOTE_IMAGE_LEFT_DATAURI : this.QUOTE_IMAGE_RIGHT_DATAURI,
            width: this.QUOTE_IMAGE_WIDTH,
            height: this.QUOTE_IMAGE_HEIGHT,
            alt: l ? "“" : "”"
          });
        }
      }, w = function() {
        this.mixin(es), this.quoteField_("TEXT");
      }, De = {
        itemCount_: 0,
        mutationToDom: function() {
          const l = c.createElement$$module$build$src$core$utils$xml("mutation");
          return l.setAttribute("items", `${this.itemCount_}`), l;
        },
        domToMutation: function(l) {
          this.itemCount_ = parseInt(l.getAttribute("items"), 10), this.updateShape_();
        },
        saveExtraState: function() {
          return { itemCount: this.itemCount_ };
        },
        loadExtraState: function(l) {
          this.itemCount_ = l.itemCount, this.updateShape_();
        },
        decompose: function(l) {
          const a = l.newBlock("text_create_join_container");
          a.initSvg();
          let p = a.getInput("STACK").connection;
          for (let T = 0; T < this.itemCount_; T++) {
            const S = l.newBlock("text_create_join_item");
            S.initSvg(), p.connect(S.previousConnection), p = S.nextConnection;
          }
          return a;
        },
        compose: function(l) {
          var a = l.getInputTargetBlock("STACK");
          for (l = []; a; ) a.isInsertionMarker() || l.push(a.valueConnection_), a = a.getNextBlock();
          for (a = 0; a < this.itemCount_; a++) {
            const p = this.getInput("ADD" + a).connection.targetConnection;
            p && !l.includes(p) && p.disconnect();
          }
          for (this.itemCount_ = l.length, this.updateShape_(), a = 0; a < this.itemCount_; a++) {
            let p;
            (p = l[a]) == null || p.reconnect(this, "ADD" + a);
          }
        },
        saveConnections: function(l) {
          l = l.getInputTargetBlock("STACK");
          let a = 0;
          for (; l; ) {
            if (l.isInsertionMarker()) {
              l = l.getNextBlock();
              continue;
            }
            const p = this.getInput("ADD" + a);
            l.valueConnection_ = p && p.connection.targetConnection, l = l.getNextBlock(), a++;
          }
        },
        updateShape_: function() {
          this.itemCount_ && this.getInput("EMPTY") ? this.removeInput("EMPTY") : this.itemCount_ || this.getInput("EMPTY") || this.appendDummyInput("EMPTY").appendField(this.newQuote_(!0)).appendField(this.newQuote_(!1));
          for (var l = 0; l < this.itemCount_; l++) if (!this.getInput("ADD" + l)) {
            const a = this.appendValueInput("ADD" + l).setAlign(c.Align$$module$build$src$core$inputs$align.RIGHT);
            l === 0 && a.appendField(c.Msg$$module$build$src$core$msg.TEXT_JOIN_TITLE_CREATEWITH);
          }
          for (l = this.itemCount_; this.getInput("ADD" + l); l++) this.removeInput("ADD" + l);
        }
      }, H = function() {
        this.mixin(es), this.itemCount_ = 2, this.updateShape_(), this.setMutator(new c.MutatorIcon$$module$build$src$core$icons$mutator_icon(["text_create_join_item"], this));
      };
      c.register$$module$build$src$core$extensions("text_append_tooltip", c.buildTooltipWithFieldText$$module$build$src$core$extensions("%{BKY_TEXT_APPEND_TOOLTIP}", "VAR"));
      var Rs = function() {
        this.setTooltip(() => c.Msg$$module$build$src$core$msg.TEXT_INDEXOF_TOOLTIP.replace("%1", this.workspace.options.oneBasedIndex ? "0" : "-1"));
      }, Ge = { isAt_: !1, mutationToDom: function() {
        const l = c.createElement$$module$build$src$core$utils$xml("mutation");
        return l.setAttribute("at", `${this.isAt_}`), l;
      }, domToMutation: function(l) {
        l = l.getAttribute("at") !== "false", this.updateAt_(l);
      }, updateAt_: function(l) {
        this.removeInput(
          "AT",
          !0
        ), this.removeInput("ORDINAL", !0), l && (this.appendValueInput("AT").setCheck("Number"), c.Msg$$module$build$src$core$msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL").appendField(c.Msg$$module$build$src$core$msg.ORDINAL_NUMBER_SUFFIX)), c.Msg$$module$build$src$core$msg.TEXT_CHARAT_TAIL && (this.removeInput("TAIL", !0), this.appendDummyInput("TAIL").appendField(c.Msg$$module$build$src$core$msg.TEXT_CHARAT_TAIL)), this.isAt_ = l;
      } }, ts = function() {
        this.getField("WHERE").setValidator(function(l) {
          l = l === "FROM_START" || l === "FROM_END";
          const a = this.getSourceBlock();
          l !== a.isAt_ && a.updateAt_(l);
        }), this.updateAt_(!0), this.setTooltip(() => {
          var l = this.getFieldValue("WHERE");
          let a = c.Msg$$module$build$src$core$msg.TEXT_CHARAT_TOOLTIP;
          return (l === "FROM_START" || l === "FROM_END") && (l = l === "FROM_START" ? c.Msg$$module$build$src$core$msg.LISTS_INDEX_FROM_START_TOOLTIP : c.Msg$$module$build$src$core$msg.LISTS_INDEX_FROM_END_TOOLTIP) && (a += "  " + l.replace("%1", this.workspace.options.oneBasedIndex ? "#1" : "#0")), a;
        });
      };
      c.register$$module$build$src$core$extensions("text_indexOf_tooltip", Rs), c.register$$module$build$src$core$extensions("text_quotes", w), c.registerMixin$$module$build$src$core$extensions("quote_image_mixin", es), c.registerMutator$$module$build$src$core$extensions("text_join_mutator", De, H), c.registerMutator$$module$build$src$core$extensions("text_charAt_mutator", Ge, ts), c.defineBlocks$$module$build$src$core$common(K);
      var Os = { blocks: K }, oe = {}, Qe = { setStatements_: function(l) {
        this.hasStatements_ !== l && (l ? (this.appendStatementInput("STACK").appendField(c.Msg$$module$build$src$core$msg.PROCEDURES_DEFNORETURN_DO), this.getInput("RETURN") && this.moveInputBefore("STACK", "RETURN")) : this.removeInput("STACK", !0), this.hasStatements_ = l);
      }, updateParams_: function() {
        let l = "";
        this.arguments_.length && (l = c.Msg$$module$build$src$core$msg.PROCEDURES_BEFORE_PARAMS + " " + this.arguments_.join(", ")), c.disable$$module$build$src$core$events$utils();
        try {
          this.setFieldValue(l, "PARAMS");
        } finally {
          c.enable$$module$build$src$core$events$utils();
        }
      }, mutationToDom: function(l) {
        const a = c.createElement$$module$build$src$core$utils$xml("mutation");
        l && a.setAttribute("name", this.getFieldValue("NAME"));
        for (let p = 0; p < this.argumentVarModels_.length; p++) {
          const T = c.createElement$$module$build$src$core$utils$xml("arg"), S = this.argumentVarModels_[p];
          T.setAttribute("name", S.getName()), T.setAttribute(
            "varid",
            S.getId()
          ), l && this.paramIds_ && T.setAttribute("paramId", this.paramIds_[p]), a.appendChild(T);
        }
        return this.hasStatements_ || a.setAttribute("statements", "false"), a;
      }, domToMutation: function(l) {
        this.arguments_ = [], this.argumentVarModels_ = [];
        for (let p = 0, T; T = l.childNodes[p]; p++) if (T.nodeName.toLowerCase() === "arg") {
          var a = T;
          const S = a.getAttribute("name");
          a = a.getAttribute("varid") || a.getAttribute("varId"), this.arguments_.push(S), a = c.getOrCreateVariablePackage$$module$build$src$core$variables(
            this.workspace,
            a,
            S,
            ""
          ), a !== null ? this.argumentVarModels_.push(a) : console.log(`Failed to create a variable named "${S}", ignoring.`);
        }
        this.updateParams_(), c.mutateCallers$$module$build$src$core$procedures(this), this.setStatements_(l.getAttribute("statements") !== "false");
      }, saveExtraState: function() {
        if (!this.argumentVarModels_.length && this.hasStatements_) return null;
        const l = /* @__PURE__ */ Object.create(null);
        if (this.argumentVarModels_.length) {
          l.params = [];
          for (let a = 0; a < this.argumentVarModels_.length; a++) l.params.push({
            name: this.argumentVarModels_[a].getName(),
            id: this.argumentVarModels_[a].getId()
          });
        }
        return this.hasStatements_ || (l.hasStatements = !1), l;
      }, loadExtraState: function(l) {
        if (this.arguments_ = [], this.argumentVarModels_ = [], l.params) for (let p = 0; p < l.params.length; p++) {
          var a = l.params[p];
          a = c.getOrCreateVariablePackage$$module$build$src$core$variables(this.workspace, a.id, a.name, ""), this.arguments_.push(a.getName()), this.argumentVarModels_.push(a);
        }
        this.updateParams_(), c.mutateCallers$$module$build$src$core$procedures(this), this.setStatements_(l.hasStatements !== !1);
      }, decompose: function(l) {
        const a = c.createElement$$module$build$src$core$utils$xml("block");
        a.setAttribute("type", "procedures_mutatorcontainer");
        var p = c.createElement$$module$build$src$core$utils$xml("statement");
        p.setAttribute("name", "STACK"), a.appendChild(p);
        for (let S = 0; S < this.arguments_.length; S++) {
          const J = c.createElement$$module$build$src$core$utils$xml("block");
          J.setAttribute("type", "procedures_mutatorarg");
          var T = c.createElement$$module$build$src$core$utils$xml("field");
          T.setAttribute(
            "name",
            "NAME"
          );
          const rs = c.createTextNode$$module$build$src$core$utils$xml(this.arguments_[S]);
          T.appendChild(rs), J.appendChild(T), T = c.createElement$$module$build$src$core$utils$xml("next"), J.appendChild(T), p.appendChild(J), p = T;
        }
        return l = c.domToBlock$$module$build$src$core$xml(a, l), this.type === "procedures_defreturn" ? l.setFieldValue(this.hasStatements_, "STATEMENTS") : l.removeInput("STATEMENT_INPUT"), c.mutateCallers$$module$build$src$core$procedures(this), l;
      }, compose: function(l) {
        this.arguments_ = [], this.paramIds_ = [], this.argumentVarModels_ = [];
        let a = l.getInputTargetBlock("STACK");
        for (; a && !a.isInsertionMarker(); ) {
          var p = a.getFieldValue("NAME");
          this.arguments_.push(p), p = this.workspace.getVariableMap().getVariable(p, ""), this.argumentVarModels_.push(p), this.paramIds_.push(a.id), a = a.nextConnection && a.nextConnection.targetBlock();
        }
        if (this.updateParams_(), c.mutateCallers$$module$build$src$core$procedures(this), l = l.getFieldValue("STATEMENTS"), l !== null && (l = l === "TRUE", this.hasStatements_ !== l)) if (l) {
          this.setStatements_(!0);
          var T;
          (T = this.statementConnection_) == null || T.reconnect(this, "STACK"), this.statementConnection_ = null;
        } else
          T = this.getInput("STACK").connection, (this.statementConnection_ = T.targetConnection) && (T = T.targetBlock(), T.unplug(), T.bumpNeighbours()), this.setStatements_(!1);
      }, getVars: function() {
        return this.arguments_;
      }, getVarModels: function() {
        return this.argumentVarModels_;
      }, renameVarById: function(l, a) {
        var p = this.workspace.getVariableMap().getVariableById(l);
        if (p.getType() === "") {
          p = p.getName(), a = this.workspace.getVariableMap().getVariableById(a);
          var T = !1;
          for (let S = 0; S < this.argumentVarModels_.length; S++) this.argumentVarModels_[S].getId() === l && (this.arguments_[S] = a.getName(), this.argumentVarModels_[S] = a, T = !0);
          T && (this.displayRenamedVar_(p, a.getName()), c.mutateCallers$$module$build$src$core$procedures(this));
        }
      }, updateVarName: function(l) {
        const a = l.getName();
        let p = !1, T;
        for (let S = 0; S < this.argumentVarModels_.length; S++) this.argumentVarModels_[S].getId() === l.getId() && (T = this.arguments_[S], this.arguments_[S] = a, p = !0);
        p && (this.displayRenamedVar_(T, a), c.mutateCallers$$module$build$src$core$procedures(this));
      }, displayRenamedVar_: function(l, a) {
        this.updateParams_();
        var p = this.getIcon(c.MutatorIcon$$module$build$src$core$icons$mutator_icon.TYPE);
        if (p && p.bubbleIsVisible()) {
          p = p.getWorkspace().getAllBlocks(!1);
          for (let T = 0, S; S = p[T]; T++) S.type === "procedures_mutatorarg" && c.Names$$module$build$src$core$names.equals(l, S.getFieldValue("NAME")) && S.setFieldValue(a, "NAME");
        }
      }, customContextMenu: function(l) {
        if (!this.isInFlyout) {
          var a = this.getFieldValue("NAME"), p = { type: this.callType_, extraState: { name: a, params: this.arguments_ } };
          if (l.push({ enabled: !0, text: c.Msg$$module$build$src$core$msg.PROCEDURES_CREATE_DO.replace("%1", a), callback: c.callbackFactory$$module$build$src$core$contextmenu(this, p) }), !this.isCollapsed()) for (a = 0; a < this.argumentVarModels_.length; a++) {
            p = this.argumentVarModels_[a];
            const T = { type: "variables_get", fields: { VAR: { name: p.getName(), id: p.getId(), type: p.getType() } } };
            l.push({ enabled: !0, text: c.Msg$$module$build$src$core$msg.VARIABLES_SET_CREATE_GET.replace(
              "%1",
              p.getName()
            ), callback: c.callbackFactory$$module$build$src$core$contextmenu(this, T) });
          }
        }
      } };
      oe.procedures_defnoreturn = Object.assign({}, Qe, { init: function() {
        var l = c.findLegalName$$module$build$src$core$procedures("", this);
        l = c.fromJson$$module$build$src$core$field_registry({ type: "field_input", text: l }), l.setValidator(c.rename$$module$build$src$core$procedures), l.setSpellcheck(!1), this.appendDummyInput().appendField(c.Msg$$module$build$src$core$msg.PROCEDURES_DEFNORETURN_TITLE).appendField(l, "NAME").appendField(
          "",
          "PARAMS"
        ), this.setMutator(new c.MutatorIcon$$module$build$src$core$icons$mutator_icon(["procedures_mutatorarg"], this)), (this.workspace.options.comments || this.workspace.options.parentWorkspace && this.workspace.options.parentWorkspace.options.comments) && c.Msg$$module$build$src$core$msg.PROCEDURES_DEFNORETURN_COMMENT && this.setCommentText(c.Msg$$module$build$src$core$msg.PROCEDURES_DEFNORETURN_COMMENT), this.setStyle("procedure_blocks"), this.setTooltip(c.Msg$$module$build$src$core$msg.PROCEDURES_DEFNORETURN_TOOLTIP), this.setHelpUrl(c.Msg$$module$build$src$core$msg.PROCEDURES_DEFNORETURN_HELPURL), this.arguments_ = [], this.argumentVarModels_ = [], this.setStatements_(!0), this.statementConnection_ = null;
      }, getProcedureDef: function() {
        return [this.getFieldValue("NAME"), this.arguments_, !1];
      }, callType_: "procedures_callnoreturn" }), oe.procedures_defreturn = Object.assign({}, Qe, { init: function() {
        var l = c.findLegalName$$module$build$src$core$procedures("", this);
        l = c.fromJson$$module$build$src$core$field_registry({ type: "field_input", text: l }), l.setValidator(c.rename$$module$build$src$core$procedures), l.setSpellcheck(!1), this.appendDummyInput().appendField(c.Msg$$module$build$src$core$msg.PROCEDURES_DEFRETURN_TITLE).appendField(l, "NAME").appendField(
          "",
          "PARAMS"
        ), this.appendValueInput("RETURN").setAlign(c.Align$$module$build$src$core$inputs$align.RIGHT).appendField(c.Msg$$module$build$src$core$msg.PROCEDURES_DEFRETURN_RETURN), this.setMutator(new c.MutatorIcon$$module$build$src$core$icons$mutator_icon(["procedures_mutatorarg"], this)), (this.workspace.options.comments || this.workspace.options.parentWorkspace && this.workspace.options.parentWorkspace.options.comments) && c.Msg$$module$build$src$core$msg.PROCEDURES_DEFRETURN_COMMENT && this.setCommentText(c.Msg$$module$build$src$core$msg.PROCEDURES_DEFRETURN_COMMENT), this.setStyle("procedure_blocks"), this.setTooltip(c.Msg$$module$build$src$core$msg.PROCEDURES_DEFRETURN_TOOLTIP), this.setHelpUrl(c.Msg$$module$build$src$core$msg.PROCEDURES_DEFRETURN_HELPURL), this.arguments_ = [], this.argumentVarModels_ = [], this.setStatements_(!0), this.statementConnection_ = null;
      }, getProcedureDef: function() {
        return [this.getFieldValue("NAME"), this.arguments_, !0];
      }, callType_: "procedures_callreturn" });
      var no = { init: function() {
        this.appendDummyInput().appendField(c.Msg$$module$build$src$core$msg.PROCEDURES_MUTATORCONTAINER_TITLE), this.appendStatementInput("STACK"), this.appendDummyInput("STATEMENT_INPUT").appendField(c.Msg$$module$build$src$core$msg.PROCEDURES_ALLOW_STATEMENTS).appendField(c.fromJson$$module$build$src$core$field_registry({ type: "field_checkbox", checked: !0 }), "STATEMENTS"), this.setStyle("procedure_blocks"), this.setTooltip(c.Msg$$module$build$src$core$msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP), this.contextMenu = !1;
      } };
      oe.procedures_mutatorcontainer = no;
      var oi = class extends c.FieldTextInput$$module$build$src$core$field_textinput {
        constructor() {
          super(...arguments), this.editingInteractively = !1;
        }
        showEditor_(l) {
          super.showEditor_(l), this.editingInteractively = !0, this.editingVariable = void 0;
        }
        onFinishEditing_(l) {
          super.onFinishEditing_(l), this.editingInteractively = !1;
        }
      }, ss = { init: function() {
        const l = new oi(
          c.DEFAULT_ARG$$module$build$src$core$procedures,
          this.validator_
        );
        this.appendDummyInput().appendField(c.Msg$$module$build$src$core$msg.PROCEDURES_MUTATORARG_TITLE).appendField(l, "NAME"), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setStyle("procedure_blocks"), this.setTooltip(c.Msg$$module$build$src$core$msg.PROCEDURES_MUTATORARG_TOOLTIP), this.contextMenu = !1;
      }, validator_: function(l) {
        var a = this.getSourceBlock(), p = a.workspace.getRootWorkspace();
        if (l = l.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, ""), !l) return null;
        const T = (a.workspace.targetWorkspace || a.workspace).getAllBlocks(!1), S = l.toLowerCase();
        for (let J = 0; J < T.length; J++) {
          if (T[J].id === this.getSourceBlock().id) continue;
          const rs = T[J].getFieldValue("NAME");
          if (rs && rs.toLowerCase() === S) return null;
        }
        return a.isInFlyout || (a = p.getVariableMap(), (p = a.getVariable(l, "")) && p.getName() !== l && a.renameVariable(p, l), p || (this.editingInteractively ? this.editingVariable ? a.renameVariable(this.editingVariable, l) : this.editingVariable = a.createVariable(l, "") : a.createVariable(l, ""))), l;
      } };
      oe.procedures_mutatorarg = ss;
      var ii = "DISABLED_PROCEDURE_DEFINITION", os = { getProcedureCall: function() {
        return this.getFieldValue("NAME");
      }, renameProcedure: function(l, a) {
        c.Names$$module$build$src$core$names.equals(l, this.getProcedureCall()) && (this.setFieldValue(a, "NAME"), this.setTooltip((this.outputConnection ? c.Msg$$module$build$src$core$msg.PROCEDURES_CALLRETURN_TOOLTIP : c.Msg$$module$build$src$core$msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace(
          "%1",
          a
        )));
      }, setProcedureParameters_: function(l, a) {
        var p = c.getDefinition$$module$build$src$core$procedures(this.getProcedureCall(), this.workspace);
        if ((p = (p = p && p.getIcon(c.MutatorIcon$$module$build$src$core$icons$mutator_icon.TYPE)) && p.bubbleIsVisible()) ? this.setCollapsed(!1) : (this.quarkConnections_ = {}, this.quarkIds_ = null), l.join(`
`) === this.arguments_.join(`
`)) this.quarkIds_ = a;
        else {
          if (a.length !== l.length) throw RangeError("paramNames and paramIds must be the same length.");
          this.quarkIds_ || (this.quarkConnections_ = {}, this.quarkIds_ = []);
          for (let S = 0; S < this.arguments_.length; S++) {
            var T = this.getInput("ARG" + S);
            T && (T = T.connection.targetConnection, this.quarkConnections_[this.quarkIds_[S]] = T, p && T && !a.includes(this.quarkIds_[S]) && (T.disconnect(), T.getSourceBlock().bumpNeighbours()));
          }
          for (this.arguments_ = [].concat(l), this.argumentVarModels_ = [], l = 0; l < this.arguments_.length; l++) p = c.getOrCreateVariablePackage$$module$build$src$core$variables(this.workspace, null, this.arguments_[l], ""), this.argumentVarModels_.push(p);
          if (this.updateShape_(), this.quarkIds_ = a) {
            for (a = 0; a < this.arguments_.length; a++) if (l = this.quarkIds_[a], l in this.quarkConnections_) {
              let S;
              (S = this.quarkConnections_[l]) != null && S.reconnect(this, "ARG" + a) || delete this.quarkConnections_[l];
            }
          }
        }
      }, updateShape_: function() {
        for (var l = 0; l < this.arguments_.length; l++) {
          var a = this.getField("ARGNAME" + l);
          if (a) {
            c.disable$$module$build$src$core$events$utils();
            try {
              a.setValue(this.arguments_[l]);
            } finally {
              c.enable$$module$build$src$core$events$utils();
            }
          } else a = c.fromJson$$module$build$src$core$field_registry({
            type: "field_label",
            text: this.arguments_[l]
          }), this.appendValueInput("ARG" + l).setAlign(c.Align$$module$build$src$core$inputs$align.RIGHT).appendField(a, "ARGNAME" + l);
        }
        for (l = this.arguments_.length; this.getInput("ARG" + l); l++) this.removeInput("ARG" + l);
        (l = this.getInput("TOPROW")) && (this.arguments_.length ? this.getField("WITH") || l.appendField(c.Msg$$module$build$src$core$msg.PROCEDURES_CALL_BEFORE_PARAMS, "WITH") : this.getField("WITH") && l.removeField("WITH"));
      }, mutationToDom: function() {
        const l = c.createElement$$module$build$src$core$utils$xml("mutation");
        l.setAttribute("name", this.getProcedureCall());
        for (let a = 0; a < this.arguments_.length; a++) {
          const p = c.createElement$$module$build$src$core$utils$xml("arg");
          p.setAttribute("name", this.arguments_[a]), l.appendChild(p);
        }
        return l;
      }, domToMutation: function(l) {
        var a = l.getAttribute("name");
        this.renameProcedure(this.getProcedureCall(), a), a = [];
        const p = [];
        for (let T = 0, S; S = l.childNodes[T]; T++) S.nodeName.toLowerCase() === "arg" && (a.push(S.getAttribute("name")), p.push(S.getAttribute("paramId")));
        this.setProcedureParameters_(
          a,
          p
        );
      }, saveExtraState: function() {
        const l = /* @__PURE__ */ Object.create(null);
        return l.name = this.getProcedureCall(), this.arguments_.length && (l.params = this.arguments_), l;
      }, loadExtraState: function(l) {
        if (this.renameProcedure(this.getProcedureCall(), l.name), l = l.params) {
          const a = [];
          a.length = l.length, a.fill(null), this.setProcedureParameters_(l, a);
        }
      }, getVars: function() {
        return this.arguments_;
      }, getVarModels: function() {
        return this.argumentVarModels_;
      }, onchange: function(l) {
        if (this.workspace && !this.workspace.isFlyout && l.recordUndo) if (l.type === c.BLOCK_CREATE$$module$build$src$core$events$events && l.ids.includes(this.id)) {
          var a = this.getProcedureCall(), p = c.getDefinition$$module$build$src$core$procedures(a, this.workspace);
          if (!p || p.type === this.defType_ && JSON.stringify(p.getVars()) === JSON.stringify(this.arguments_) || (p = null), p) p.isEnabled() || (this.setDisabledReason(!0, ii), this.setWarningText(c.Msg$$module$build$src$core$msg.PROCEDURES_CALL_DISABLED_DEF_WARNING.replace(
            "%1",
            a
          )));
          else {
            c.setGroup$$module$build$src$core$events$utils(l.group), l = c.createElement$$module$build$src$core$utils$xml("xml"), a = c.createElement$$module$build$src$core$utils$xml("block"), a.setAttribute("type", this.defType_), p = this.getRelativeToSurfaceXY();
            var T = p.y + c.config$$module$build$src$core$config.snapRadius * 2;
            a.setAttribute("x", `${p.x + c.config$$module$build$src$core$config.snapRadius * (this.RTL ? -1 : 1)}`), a.setAttribute("y", `${T}`), p = this.mutationToDom(), a.appendChild(p), p = c.createElement$$module$build$src$core$utils$xml("field"), p.setAttribute("name", "NAME"), T = this.getProcedureCall();
            const S = c.findLegalName$$module$build$src$core$procedures(T, this);
            T !== S && this.renameProcedure(T, S), p.appendChild(c.createTextNode$$module$build$src$core$utils$xml(T)), a.appendChild(p), l.appendChild(a), c.domToWorkspace$$module$build$src$core$xml(l, this.workspace), c.setGroup$$module$build$src$core$events$utils(!1);
          }
        } else l.type === c.BLOCK_DELETE$$module$build$src$core$events$events ? (a = this.getProcedureCall(), c.getDefinition$$module$build$src$core$procedures(
          a,
          this.workspace
        ) || (c.setGroup$$module$build$src$core$events$utils(l.group), this.dispose(!0), c.setGroup$$module$build$src$core$events$utils(!1))) : l.type === c.BLOCK_CHANGE$$module$build$src$core$events$events && l.element === "disabled" && (a = this.getProcedureCall(), (T = c.getDefinition$$module$build$src$core$procedures(a, this.workspace)) && T.id === l.blockId && ((p = c.getGroup$$module$build$src$core$events$utils()) && console.log("Saw an existing group while responding to a definition change"), c.setGroup$$module$build$src$core$events$utils(l.group), l = T.isEnabled(), this.setDisabledReason(!l, ii), this.setWarningText(l ? null : c.Msg$$module$build$src$core$msg.PROCEDURES_CALL_DISABLED_DEF_WARNING.replace("%1", a)), c.setGroup$$module$build$src$core$events$utils(p)));
      }, customContextMenu: function(l) {
        if (this.workspace.isMovable()) {
          var a = this.getProcedureCall(), p = this.workspace;
          l.push({ enabled: !0, text: c.Msg$$module$build$src$core$msg.PROCEDURES_HIGHLIGHT_DEF, callback: function() {
            const T = c.getDefinition$$module$build$src$core$procedures(a, p);
            T && (p.centerOnBlock(T.id), c.getFocusManager$$module$build$src$core$focus_manager().focusNode(T));
          } });
        }
      } };
      oe.procedures_callnoreturn = Object.assign({}, os, { init: function() {
        this.appendDummyInput("TOPROW").appendField("", "NAME"), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setStyle("procedure_blocks"), this.setHelpUrl(c.Msg$$module$build$src$core$msg.PROCEDURES_CALLNORETURN_HELPURL), this.arguments_ = [], this.argumentVarModels_ = [], this.quarkConnections_ = {}, this.quarkIds_ = null;
      }, defType_: "procedures_defnoreturn" }), oe.procedures_callreturn = Object.assign({}, os, { init: function() {
        this.appendDummyInput("TOPROW").appendField("", "NAME"), this.setOutput(!0), this.setStyle("procedure_blocks"), this.setHelpUrl(c.Msg$$module$build$src$core$msg.PROCEDURES_CALLRETURN_HELPURL), this.arguments_ = [], this.argumentVarModels_ = [], this.quarkConnections_ = {}, this.quarkIds_ = null;
      }, defType_: "procedures_defreturn" });
      var an = "UNPARENTED_IFRETURN", ni = {
        init: function() {
          this.appendValueInput("CONDITION").setCheck("Boolean").appendField(c.Msg$$module$build$src$core$msg.CONTROLS_IF_MSG_IF), this.appendValueInput("VALUE").appendField(c.Msg$$module$build$src$core$msg.PROCEDURES_DEFRETURN_RETURN), this.setInputsInline(!0), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setStyle("procedure_blocks"), this.setTooltip(c.Msg$$module$build$src$core$msg.PROCEDURES_IFRETURN_TOOLTIP), this.setHelpUrl(c.Msg$$module$build$src$core$msg.PROCEDURES_IFRETURN_HELPURL), this.hasReturnValue_ = !0;
        },
        mutationToDom: function() {
          const l = c.createElement$$module$build$src$core$utils$xml("mutation");
          return l.setAttribute("value", String(Number(this.hasReturnValue_))), l;
        },
        domToMutation: function(l) {
          this.hasReturnValue_ = l.getAttribute("value") === "1", this.hasReturnValue_ || (this.removeInput("VALUE"), this.appendDummyInput("VALUE").appendField(c.Msg$$module$build$src$core$msg.PROCEDURES_DEFRETURN_RETURN));
        },
        onchange: function(l) {
          if (!(this.workspace.isDragging && this.workspace.isDragging() || l.type !== c.BLOCK_MOVE$$module$build$src$core$events$events && l.type !== c.BLOCK_CREATE$$module$build$src$core$events$events)) {
            l = !1;
            var a = this;
            do {
              if (this.FUNCTION_TYPES.includes(a.type)) {
                l = !0;
                break;
              }
              a = a.getSurroundParent();
            } while (a);
            if (l ? (a.type === "procedures_defnoreturn" && this.hasReturnValue_ ? (this.removeInput("VALUE"), this.appendDummyInput("VALUE").appendField(c.Msg$$module$build$src$core$msg.PROCEDURES_DEFRETURN_RETURN), this.hasReturnValue_ = !1) : a.type !== "procedures_defreturn" || this.hasReturnValue_ || (this.removeInput("VALUE"), this.appendValueInput("VALUE").appendField(c.Msg$$module$build$src$core$msg.PROCEDURES_DEFRETURN_RETURN), this.hasReturnValue_ = !0), this.setWarningText(null)) : this.setWarningText(c.Msg$$module$build$src$core$msg.PROCEDURES_IFRETURN_WARNING), !this.isInFlyout) try {
              c.setRecordUndo$$module$build$src$core$events$utils(!1), this.setDisabledReason(!l, an);
            } finally {
              c.setRecordUndo$$module$build$src$core$events$utils(!0);
            }
          }
        },
        FUNCTION_TYPES: ["procedures_defnoreturn", "procedures_defreturn"]
      };
      oe.procedures_ifreturn = ni, c.defineBlocks$$module$build$src$core$common(oe);
      var ro = { blocks: oe }, Ce = c.createBlockDefinitionsFromJsonArray$$module$build$src$core$common([
        { type: "math_number", message0: "%1", args0: [{ type: "field_number", name: "NUM", value: 0 }], output: "Number", helpUrl: "%{BKY_MATH_NUMBER_HELPURL}", style: "math_blocks", tooltip: "%{BKY_MATH_NUMBER_TOOLTIP}", extensions: ["parent_tooltip_when_inline"] },
        { type: "math_arithmetic", message0: "%1 %2 %3", args0: [{ type: "input_value", name: "A", check: "Number" }, { type: "field_dropdown", name: "OP", options: [[
          "%{BKY_MATH_ADDITION_SYMBOL}",
          "ADD"
        ], ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"], ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "MULTIPLY"], ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"], ["%{BKY_MATH_POWER_SYMBOL}", "POWER"]] }, { type: "input_value", name: "B", check: "Number" }], inputsInline: !0, output: "Number", style: "math_blocks", helpUrl: "%{BKY_MATH_ARITHMETIC_HELPURL}", extensions: ["math_op_tooltip"] },
        { type: "math_single", message0: "%1 %2", args0: [{ type: "field_dropdown", name: "OP", options: [["%{BKY_MATH_SINGLE_OP_ROOT}", "ROOT"], [
          "%{BKY_MATH_SINGLE_OP_ABSOLUTE}",
          "ABS"
        ], ["-", "NEG"], ["ln", "LN"], ["log10", "LOG10"], ["e^", "EXP"], ["10^", "POW10"]] }, { type: "input_value", name: "NUM", check: "Number" }], output: "Number", style: "math_blocks", helpUrl: "%{BKY_MATH_SINGLE_HELPURL}", extensions: ["math_op_tooltip"] },
        { type: "math_trig", message0: "%1 %2", args0: [{ type: "field_dropdown", name: "OP", options: [["%{BKY_MATH_TRIG_SIN}", "SIN"], ["%{BKY_MATH_TRIG_COS}", "COS"], ["%{BKY_MATH_TRIG_TAN}", "TAN"], ["%{BKY_MATH_TRIG_ASIN}", "ASIN"], ["%{BKY_MATH_TRIG_ACOS}", "ACOS"], [
          "%{BKY_MATH_TRIG_ATAN}",
          "ATAN"
        ]] }, { type: "input_value", name: "NUM", check: "Number" }], output: "Number", style: "math_blocks", helpUrl: "%{BKY_MATH_TRIG_HELPURL}", extensions: ["math_op_tooltip"] },
        { type: "math_constant", message0: "%1", args0: [{ type: "field_dropdown", name: "CONSTANT", options: [["π", "PI"], ["e", "E"], ["φ", "GOLDEN_RATIO"], ["sqrt(2)", "SQRT2"], ["sqrt(½)", "SQRT1_2"], ["∞", "INFINITY"]] }], output: "Number", style: "math_blocks", tooltip: "%{BKY_MATH_CONSTANT_TOOLTIP}", helpUrl: "%{BKY_MATH_CONSTANT_HELPURL}" },
        {
          type: "math_number_property",
          message0: "%1 %2",
          args0: [{ type: "input_value", name: "NUMBER_TO_CHECK", check: "Number" }, { type: "field_dropdown", name: "PROPERTY", options: [["%{BKY_MATH_IS_EVEN}", "EVEN"], ["%{BKY_MATH_IS_ODD}", "ODD"], ["%{BKY_MATH_IS_PRIME}", "PRIME"], ["%{BKY_MATH_IS_WHOLE}", "WHOLE"], ["%{BKY_MATH_IS_POSITIVE}", "POSITIVE"], ["%{BKY_MATH_IS_NEGATIVE}", "NEGATIVE"], ["%{BKY_MATH_IS_DIVISIBLE_BY}", "DIVISIBLE_BY"]] }],
          inputsInline: !0,
          output: "Boolean",
          style: "math_blocks",
          tooltip: "%{BKY_MATH_IS_TOOLTIP}",
          mutator: "math_is_divisibleby_mutator"
        },
        { type: "math_change", message0: "%{BKY_MATH_CHANGE_TITLE}", args0: [{ type: "field_variable", name: "VAR", variable: "%{BKY_MATH_CHANGE_TITLE_ITEM}" }, { type: "input_value", name: "DELTA", check: "Number" }], previousStatement: null, nextStatement: null, style: "variable_blocks", helpUrl: "%{BKY_MATH_CHANGE_HELPURL}", extensions: ["math_change_tooltip"] },
        { type: "math_round", message0: "%1 %2", args0: [{ type: "field_dropdown", name: "OP", options: [
          ["%{BKY_MATH_ROUND_OPERATOR_ROUND}", "ROUND"],
          ["%{BKY_MATH_ROUND_OPERATOR_ROUNDUP}", "ROUNDUP"],
          ["%{BKY_MATH_ROUND_OPERATOR_ROUNDDOWN}", "ROUNDDOWN"]
        ] }, { type: "input_value", name: "NUM", check: "Number" }], output: "Number", style: "math_blocks", helpUrl: "%{BKY_MATH_ROUND_HELPURL}", tooltip: "%{BKY_MATH_ROUND_TOOLTIP}" },
        { type: "math_on_list", message0: "%1 %2", args0: [{ type: "field_dropdown", name: "OP", options: [["%{BKY_MATH_ONLIST_OPERATOR_SUM}", "SUM"], ["%{BKY_MATH_ONLIST_OPERATOR_MIN}", "MIN"], ["%{BKY_MATH_ONLIST_OPERATOR_MAX}", "MAX"], ["%{BKY_MATH_ONLIST_OPERATOR_AVERAGE}", "AVERAGE"], [
          "%{BKY_MATH_ONLIST_OPERATOR_MEDIAN}",
          "MEDIAN"
        ], ["%{BKY_MATH_ONLIST_OPERATOR_MODE}", "MODE"], ["%{BKY_MATH_ONLIST_OPERATOR_STD_DEV}", "STD_DEV"], ["%{BKY_MATH_ONLIST_OPERATOR_RANDOM}", "RANDOM"]] }, { type: "input_value", name: "LIST", check: "Array" }], output: "Number", style: "math_blocks", helpUrl: "%{BKY_MATH_ONLIST_HELPURL}", mutator: "math_modes_of_list_mutator", extensions: ["math_op_tooltip"] },
        {
          type: "math_modulo",
          message0: "%{BKY_MATH_MODULO_TITLE}",
          args0: [{ type: "input_value", name: "DIVIDEND", check: "Number" }, { type: "input_value", name: "DIVISOR", check: "Number" }],
          inputsInline: !0,
          output: "Number",
          style: "math_blocks",
          tooltip: "%{BKY_MATH_MODULO_TOOLTIP}",
          helpUrl: "%{BKY_MATH_MODULO_HELPURL}"
        },
        { type: "math_constrain", message0: "%{BKY_MATH_CONSTRAIN_TITLE}", args0: [{ type: "input_value", name: "VALUE", check: "Number" }, { type: "input_value", name: "LOW", check: "Number" }, { type: "input_value", name: "HIGH", check: "Number" }], inputsInline: !0, output: "Number", style: "math_blocks", tooltip: "%{BKY_MATH_CONSTRAIN_TOOLTIP}", helpUrl: "%{BKY_MATH_CONSTRAIN_HELPURL}" },
        {
          type: "math_random_int",
          message0: "%{BKY_MATH_RANDOM_INT_TITLE}",
          args0: [{ type: "input_value", name: "FROM", check: "Number" }, { type: "input_value", name: "TO", check: "Number" }],
          inputsInline: !0,
          output: "Number",
          style: "math_blocks",
          tooltip: "%{BKY_MATH_RANDOM_INT_TOOLTIP}",
          helpUrl: "%{BKY_MATH_RANDOM_INT_HELPURL}"
        },
        { type: "math_random_float", message0: "%{BKY_MATH_RANDOM_FLOAT_TITLE_RANDOM}", output: "Number", style: "math_blocks", tooltip: "%{BKY_MATH_RANDOM_FLOAT_TOOLTIP}", helpUrl: "%{BKY_MATH_RANDOM_FLOAT_HELPURL}" },
        { type: "math_atan2", message0: "%{BKY_MATH_ATAN2_TITLE}", args0: [{
          type: "input_value",
          name: "X",
          check: "Number"
        }, { type: "input_value", name: "Y", check: "Number" }], inputsInline: !0, output: "Number", style: "math_blocks", tooltip: "%{BKY_MATH_ATAN2_TOOLTIP}", helpUrl: "%{BKY_MATH_ATAN2_HELPURL}" }
      ]), k = {
        ADD: "%{BKY_MATH_ARITHMETIC_TOOLTIP_ADD}",
        MINUS: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MINUS}",
        MULTIPLY: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MULTIPLY}",
        DIVIDE: "%{BKY_MATH_ARITHMETIC_TOOLTIP_DIVIDE}",
        POWER: "%{BKY_MATH_ARITHMETIC_TOOLTIP_POWER}",
        ROOT: "%{BKY_MATH_SINGLE_TOOLTIP_ROOT}",
        ABS: "%{BKY_MATH_SINGLE_TOOLTIP_ABS}",
        NEG: "%{BKY_MATH_SINGLE_TOOLTIP_NEG}",
        LN: "%{BKY_MATH_SINGLE_TOOLTIP_LN}",
        LOG10: "%{BKY_MATH_SINGLE_TOOLTIP_LOG10}",
        EXP: "%{BKY_MATH_SINGLE_TOOLTIP_EXP}",
        POW10: "%{BKY_MATH_SINGLE_TOOLTIP_POW10}",
        SIN: "%{BKY_MATH_TRIG_TOOLTIP_SIN}",
        COS: "%{BKY_MATH_TRIG_TOOLTIP_COS}",
        TAN: "%{BKY_MATH_TRIG_TOOLTIP_TAN}",
        ASIN: "%{BKY_MATH_TRIG_TOOLTIP_ASIN}",
        ACOS: "%{BKY_MATH_TRIG_TOOLTIP_ACOS}",
        ATAN: "%{BKY_MATH_TRIG_TOOLTIP_ATAN}",
        SUM: "%{BKY_MATH_ONLIST_TOOLTIP_SUM}",
        MIN: "%{BKY_MATH_ONLIST_TOOLTIP_MIN}",
        MAX: "%{BKY_MATH_ONLIST_TOOLTIP_MAX}",
        AVERAGE: "%{BKY_MATH_ONLIST_TOOLTIP_AVERAGE}",
        MEDIAN: "%{BKY_MATH_ONLIST_TOOLTIP_MEDIAN}",
        MODE: "%{BKY_MATH_ONLIST_TOOLTIP_MODE}",
        STD_DEV: "%{BKY_MATH_ONLIST_TOOLTIP_STD_DEV}",
        RANDOM: "%{BKY_MATH_ONLIST_TOOLTIP_RANDOM}"
      };
      c.register$$module$build$src$core$extensions("math_op_tooltip", c.buildTooltipForDropdown$$module$build$src$core$extensions("OP", k));
      var hn = { mutationToDom: function() {
        const l = c.createElement$$module$build$src$core$utils$xml("mutation"), a = this.getFieldValue("PROPERTY") === "DIVISIBLE_BY";
        return l.setAttribute("divisor_input", String(a)), l;
      }, domToMutation: function(l) {
        l = l.getAttribute("divisor_input") === "true", this.updateShape_(l);
      }, updateShape_: function(l) {
        const a = this.getInput("DIVISOR");
        l ? a || this.appendValueInput("DIVISOR").setCheck("Number") : a && this.removeInput("DIVISOR");
      } }, lo = function() {
        this.getField("PROPERTY").setValidator(function(l) {
          l = l === "DIVISIBLE_BY", this.getSourceBlock().updateShape_(l);
        });
      };
      c.registerMutator$$module$build$src$core$extensions("math_is_divisibleby_mutator", hn, lo), c.register$$module$build$src$core$extensions("math_change_tooltip", c.buildTooltipWithFieldText$$module$build$src$core$extensions("%{BKY_MATH_CHANGE_TOOLTIP}", "VAR"));
      var ri = { updateType_: function(l) {
        l === "MODE" ? this.outputConnection.setCheck("Array") : this.outputConnection.setCheck("Number");
      }, mutationToDom: function() {
        const l = c.createElement$$module$build$src$core$utils$xml("mutation");
        return l.setAttribute("op", this.getFieldValue("OP")), l;
      }, domToMutation: function(l) {
        if (l = l.getAttribute("op"), l === null) throw new TypeError("xmlElement had no op attribute");
        this.updateType_(l);
      } }, li = function() {
        this.getField("OP").setValidator((function(l) {
          this.updateType_(l);
        }).bind(this));
      };
      c.registerMutator$$module$build$src$core$extensions("math_modes_of_list_mutator", ri, li), c.defineBlocks$$module$build$src$core$common(Ce);
      var ci = { blocks: Ce }, j = c.createBlockDefinitionsFromJsonArray$$module$build$src$core$common([{ type: "controls_repeat_ext", message0: "%{BKY_CONTROLS_REPEAT_TITLE}", args0: [{ type: "input_value", name: "TIMES", check: "Number" }], message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1", args1: [{ type: "input_statement", name: "DO" }], previousStatement: null, nextStatement: null, style: "loop_blocks", tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}", helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}" }, {
        type: "controls_repeat",
        message0: "%{BKY_CONTROLS_REPEAT_TITLE}",
        args0: [{ type: "field_number", name: "TIMES", value: 10, min: 0, precision: 1 }],
        message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
        args1: [{ type: "input_statement", name: "DO" }],
        previousStatement: null,
        nextStatement: null,
        style: "loop_blocks",
        tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
        helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}"
      }, { type: "controls_whileUntil", message0: "%1 %2", args0: [
        { type: "field_dropdown", name: "MODE", options: [["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_WHILE}", "WHILE"], ["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL}", "UNTIL"]] },
        { type: "input_value", name: "BOOL", check: "Boolean" }
      ], message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1", args1: [{ type: "input_statement", name: "DO" }], previousStatement: null, nextStatement: null, style: "loop_blocks", helpUrl: "%{BKY_CONTROLS_WHILEUNTIL_HELPURL}", extensions: ["controls_whileUntil_tooltip"] }, { type: "controls_for", message0: "%{BKY_CONTROLS_FOR_TITLE}", args0: [{ type: "field_variable", name: "VAR", variable: null }, { type: "input_value", name: "FROM", check: "Number", align: "RIGHT" }, {
        type: "input_value",
        name: "TO",
        check: "Number",
        align: "RIGHT"
      }, { type: "input_value", name: "BY", check: "Number", align: "RIGHT" }], message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1", args1: [{ type: "input_statement", name: "DO" }], inputsInline: !0, previousStatement: null, nextStatement: null, style: "loop_blocks", helpUrl: "%{BKY_CONTROLS_FOR_HELPURL}", extensions: ["contextMenu_newGetVariableBlock", "controls_for_tooltip"] }, { type: "controls_forEach", message0: "%{BKY_CONTROLS_FOREACH_TITLE}", args0: [{ type: "field_variable", name: "VAR", variable: null }, {
        type: "input_value",
        name: "LIST",
        check: "Array"
      }], message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1", args1: [{ type: "input_statement", name: "DO" }], previousStatement: null, nextStatement: null, style: "loop_blocks", helpUrl: "%{BKY_CONTROLS_FOREACH_HELPURL}", extensions: ["contextMenu_newGetVariableBlock", "controls_forEach_tooltip"] }, {
        type: "controls_flow_statements",
        message0: "%1",
        args0: [{ type: "field_dropdown", name: "FLOW", options: [["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK}", "BREAK"], ["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE}", "CONTINUE"]] }],
        previousStatement: null,
        style: "loop_blocks",
        helpUrl: "%{BKY_CONTROLS_FLOW_STATEMENTS_HELPURL}",
        suppressPrefixSuffix: !0,
        extensions: ["controls_flow_tooltip", "controls_flow_in_loop_check"]
      }]), dn = { WHILE: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE}", UNTIL: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL}" };
      c.register$$module$build$src$core$extensions("controls_whileUntil_tooltip", c.buildTooltipForDropdown$$module$build$src$core$extensions("MODE", dn));
      var co = { BREAK: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK}", CONTINUE: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE}" };
      c.register$$module$build$src$core$extensions("controls_flow_tooltip", c.buildTooltipForDropdown$$module$build$src$core$extensions("FLOW", co));
      var $n = { customContextMenu: function(l) {
        if (!this.isInFlyout) {
          var a = this.getField("VAR"), p = a.getVariable().getName();
          this.isCollapsed() || p === null || (a = { type: "variables_get", fields: { VAR: a.saveState(!0) } }, l.push({ enabled: !0, text: c.Msg$$module$build$src$core$msg.VARIABLES_SET_CREATE_GET.replace("%1", p), callback: c.callbackFactory$$module$build$src$core$contextmenu(this, a) }));
        }
      } };
      c.registerMixin$$module$build$src$core$extensions("contextMenu_newGetVariableBlock", $n), c.register$$module$build$src$core$extensions("controls_for_tooltip", c.buildTooltipWithFieldText$$module$build$src$core$extensions("%{BKY_CONTROLS_FOR_TOOLTIP}", "VAR")), c.register$$module$build$src$core$extensions("controls_forEach_tooltip", c.buildTooltipWithFieldText$$module$build$src$core$extensions("%{BKY_CONTROLS_FOREACH_TOOLTIP}", "VAR"));
      var L = /* @__PURE__ */ new Set(["controls_repeat", "controls_repeat_ext", "controls_forEach", "controls_for", "controls_whileUntil"]), pn = "CONTROL_FLOW_NOT_IN_LOOP", b = { getSurroundLoop: function() {
        let l = this;
        do {
          if (L.has(l.type)) return l;
          l = l.getSurroundParent();
        } while (l);
        return null;
      }, onchange: function(l) {
        const a = this.workspace;
        if (a.isDragging && !a.isDragging() && (l.type === c.BLOCK_MOVE$$module$build$src$core$events$events || l.type === c.BLOCK_CREATE$$module$build$src$core$events$events) && (l = !!this.getSurroundLoop(), this.setWarningText(l ? null : c.Msg$$module$build$src$core$msg.CONTROLS_FLOW_STATEMENTS_WARNING), !this.isInFlyout)) try {
          c.setRecordUndo$$module$build$src$core$events$utils(!1), this.setDisabledReason(!l, pn);
        } finally {
          c.setRecordUndo$$module$build$src$core$events$utils(!0);
        }
      } };
      c.registerMixin$$module$build$src$core$extensions("controls_flow_in_loop_check", b), c.defineBlocks$$module$build$src$core$common(j);
      var R = { blocks: j, loopTypes: L }, is = c.createBlockDefinitionsFromJsonArray$$module$build$src$core$common([
        { type: "logic_boolean", message0: "%1", args0: [{ type: "field_dropdown", name: "BOOL", options: [["%{BKY_LOGIC_BOOLEAN_TRUE}", "TRUE"], ["%{BKY_LOGIC_BOOLEAN_FALSE}", "FALSE"]] }], output: "Boolean", style: "logic_blocks", tooltip: "%{BKY_LOGIC_BOOLEAN_TOOLTIP}", helpUrl: "%{BKY_LOGIC_BOOLEAN_HELPURL}" },
        {
          type: "controls_if",
          message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
          args0: [{ type: "input_value", name: "IF0", check: "Boolean" }],
          message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
          args1: [{ type: "input_statement", name: "DO0" }],
          previousStatement: null,
          nextStatement: null,
          style: "logic_blocks",
          helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
          suppressPrefixSuffix: !0,
          mutator: "controls_if_mutator",
          extensions: ["controls_if_tooltip"]
        },
        {
          type: "controls_ifelse",
          message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
          args0: [{ type: "input_value", name: "IF0", check: "Boolean" }],
          message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
          args1: [{ type: "input_statement", name: "DO0" }],
          message2: "%{BKY_CONTROLS_IF_MSG_ELSE} %1",
          args2: [{ type: "input_statement", name: "ELSE" }],
          previousStatement: null,
          nextStatement: null,
          style: "logic_blocks",
          tooltip: "%{BKYCONTROLS_IF_TOOLTIP_2}",
          helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
          suppressPrefixSuffix: !0,
          extensions: ["controls_if_tooltip"]
        },
        {
          type: "logic_compare",
          message0: "%1 %2 %3",
          args0: [{ type: "input_value", name: "A" }, { type: "field_dropdown", name: "OP", options: [["=", "EQ"], ["≠", "NEQ"], ["‏<", "LT"], ["‏≤", "LTE"], ["‏>", "GT"], ["‏≥", "GTE"]] }, { type: "input_value", name: "B" }],
          inputsInline: !0,
          output: "Boolean",
          style: "logic_blocks",
          helpUrl: "%{BKY_LOGIC_COMPARE_HELPURL}",
          extensions: ["logic_compare", "logic_op_tooltip"]
        },
        { type: "logic_operation", message0: "%1 %2 %3", args0: [{ type: "input_value", name: "A", check: "Boolean" }, { type: "field_dropdown", name: "OP", options: [["%{BKY_LOGIC_OPERATION_AND}", "AND"], ["%{BKY_LOGIC_OPERATION_OR}", "OR"]] }, { type: "input_value", name: "B", check: "Boolean" }], inputsInline: !0, output: "Boolean", style: "logic_blocks", helpUrl: "%{BKY_LOGIC_OPERATION_HELPURL}", extensions: ["logic_op_tooltip"] },
        { type: "logic_negate", message0: "%{BKY_LOGIC_NEGATE_TITLE}", args0: [{ type: "input_value", name: "BOOL", check: "Boolean" }], output: "Boolean", style: "logic_blocks", tooltip: "%{BKY_LOGIC_NEGATE_TOOLTIP}", helpUrl: "%{BKY_LOGIC_NEGATE_HELPURL}" },
        { type: "logic_null", message0: "%{BKY_LOGIC_NULL}", output: null, style: "logic_blocks", tooltip: "%{BKY_LOGIC_NULL_TOOLTIP}", helpUrl: "%{BKY_LOGIC_NULL_HELPURL}" },
        {
          type: "logic_ternary",
          message0: "%{BKY_LOGIC_TERNARY_CONDITION} %1",
          args0: [{ type: "input_value", name: "IF", check: "Boolean" }],
          message1: "%{BKY_LOGIC_TERNARY_IF_TRUE} %1",
          args1: [{ type: "input_value", name: "THEN" }],
          message2: "%{BKY_LOGIC_TERNARY_IF_FALSE} %1",
          args2: [{ type: "input_value", name: "ELSE" }],
          output: null,
          style: "logic_blocks",
          tooltip: "%{BKY_LOGIC_TERNARY_TOOLTIP}",
          helpUrl: "%{BKY_LOGIC_TERNARY_HELPURL}",
          extensions: ["logic_ternary"]
        },
        { type: "controls_if_if", message0: "%{BKY_CONTROLS_IF_IF_TITLE_IF}", nextStatement: null, enableContextMenu: !1, style: "logic_blocks", tooltip: "%{BKY_CONTROLS_IF_IF_TOOLTIP}" },
        {
          type: "controls_if_elseif",
          message0: "%{BKY_CONTROLS_IF_ELSEIF_TITLE_ELSEIF}",
          previousStatement: null,
          nextStatement: null,
          enableContextMenu: !1,
          style: "logic_blocks",
          tooltip: "%{BKY_CONTROLS_IF_ELSEIF_TOOLTIP}"
        },
        { type: "controls_if_else", message0: "%{BKY_CONTROLS_IF_ELSE_TITLE_ELSE}", previousStatement: null, enableContextMenu: !1, style: "logic_blocks", tooltip: "%{BKY_CONTROLS_IF_ELSE_TOOLTIP}" }
      ]), F = {
        EQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_EQ}",
        NEQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_NEQ}",
        LT: "%{BKY_LOGIC_COMPARE_TOOLTIP_LT}",
        LTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_LTE}",
        GT: "%{BKY_LOGIC_COMPARE_TOOLTIP_GT}",
        GTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_GTE}",
        AND: "%{BKY_LOGIC_OPERATION_TOOLTIP_AND}",
        OR: "%{BKY_LOGIC_OPERATION_TOOLTIP_OR}"
      };
      c.register$$module$build$src$core$extensions("logic_op_tooltip", c.buildTooltipForDropdown$$module$build$src$core$extensions("OP", F));
      var uo = {
        elseifCount_: 0,
        elseCount_: 0,
        mutationToDom: function() {
          if (!this.elseifCount_ && !this.elseCount_) return null;
          const l = c.createElement$$module$build$src$core$utils$xml("mutation");
          return this.elseifCount_ && l.setAttribute("elseif", String(this.elseifCount_)), this.elseCount_ && l.setAttribute("else", "1"), l;
        },
        domToMutation: function(l) {
          this.elseifCount_ = parseInt(l.getAttribute("elseif"), 10) || 0, this.elseCount_ = parseInt(l.getAttribute("else"), 10) || 0, this.rebuildShape_();
        },
        saveExtraState: function() {
          if (!this.elseifCount_ && !this.elseCount_) return null;
          const l = /* @__PURE__ */ Object.create(null);
          return this.elseifCount_ && (l.elseIfCount = this.elseifCount_), this.elseCount_ && (l.hasElse = !0), l;
        },
        loadExtraState: function(l) {
          this.elseifCount_ = l.elseIfCount || 0, this.elseCount_ = l.hasElse ? 1 : 0, this.updateShape_();
        },
        decompose: function(l) {
          const a = l.newBlock("controls_if_if");
          a.initSvg();
          let p = a.nextConnection;
          for (let T = 1; T <= this.elseifCount_; T++) {
            const S = l.newBlock("controls_if_elseif");
            S.initSvg(), p.connect(S.previousConnection), p = S.nextConnection;
          }
          return this.elseCount_ && (l = l.newBlock("controls_if_else"), l.initSvg(), p.connect(l.previousConnection)), a;
        },
        compose: function(l) {
          l = l.nextConnection.targetBlock(), this.elseCount_ = this.elseifCount_ = 0;
          const a = [null], p = [null];
          let T = null;
          for (; l; ) {
            if (!l.isInsertionMarker()) switch (l.type) {
              case "controls_if_elseif":
                this.elseifCount_++, a.push(l.valueConnection_), p.push(l.statementConnection_);
                break;
              case "controls_if_else":
                this.elseCount_++, T = l.statementConnection_;
                break;
              default:
                throw TypeError("Unknown block type: " + l.type);
            }
            l = l.getNextBlock();
          }
          this.updateShape_(), this.reconnectChildBlocks_(a, p, T);
        },
        saveConnections: function(l) {
          l = l.nextConnection.targetBlock();
          let a = 1;
          for (; l; ) {
            if (!l.isInsertionMarker()) switch (l.type) {
              case "controls_if_elseif":
                var p = this.getInput("IF" + a);
                const T = this.getInput("DO" + a);
                l.valueConnection_ = p && p.connection.targetConnection, l.statementConnection_ = T && T.connection.targetConnection, a++;
                break;
              case "controls_if_else":
                p = this.getInput("ELSE"), l.statementConnection_ = p && p.connection.targetConnection;
                break;
              default:
                throw TypeError("Unknown block type: " + l.type);
            }
            l = l.getNextBlock();
          }
        },
        rebuildShape_: function() {
          const l = [null], a = [null];
          let p = null;
          this.getInput("ELSE") && (p = this.getInput("ELSE").connection.targetConnection);
          for (let T = 1; this.getInput("IF" + T); T++) {
            const S = this.getInput("IF" + T), J = this.getInput("DO" + T);
            l.push(S.connection.targetConnection), a.push(J.connection.targetConnection);
          }
          this.updateShape_(), this.reconnectChildBlocks_(l, a, p);
        },
        updateShape_: function() {
          this.getInput("ELSE") && this.removeInput("ELSE");
          for (var l = 1; this.getInput("IF" + l); l++) this.removeInput("IF" + l), this.removeInput("DO" + l);
          for (l = 1; l <= this.elseifCount_; l++) this.appendValueInput("IF" + l).setCheck("Boolean").appendField(c.Msg$$module$build$src$core$msg.CONTROLS_IF_MSG_ELSEIF), this.appendStatementInput("DO" + l).appendField(c.Msg$$module$build$src$core$msg.CONTROLS_IF_MSG_THEN);
          this.elseCount_ && this.appendStatementInput("ELSE").appendField(c.Msg$$module$build$src$core$msg.CONTROLS_IF_MSG_ELSE);
        },
        reconnectChildBlocks_: function(l, a, p) {
          for (let T = 1; T <= this.elseifCount_; T++) {
            let S;
            (S = l[T]) == null || S.reconnect(this, "IF" + T);
            let J;
            (J = a[T]) == null || J.reconnect(this, "DO" + T);
          }
          p == null || p.reconnect(this, "ELSE");
        }
      };
      c.registerMutator$$module$build$src$core$extensions("controls_if_mutator", uo, null, ["controls_if_elseif", "controls_if_else"]);
      var G = function() {
        this.setTooltip((function() {
          if (this.elseifCount_ || this.elseCount_) {
            if (!this.elseifCount_ && this.elseCount_) return c.Msg$$module$build$src$core$msg.CONTROLS_IF_TOOLTIP_2;
            if (this.elseifCount_ && !this.elseCount_) return c.Msg$$module$build$src$core$msg.CONTROLS_IF_TOOLTIP_3;
            if (this.elseifCount_ && this.elseCount_) return c.Msg$$module$build$src$core$msg.CONTROLS_IF_TOOLTIP_4;
          } else return c.Msg$$module$build$src$core$msg.CONTROLS_IF_TOOLTIP_1;
          return "";
        }).bind(this));
      };
      c.register$$module$build$src$core$extensions("controls_if_tooltip", G);
      var Pt = { onchange: function(l) {
        this.prevBlocks_ || (this.prevBlocks_ = [null, null]);
        var a = this.getInputTargetBlock("A");
        const p = this.getInputTargetBlock("B");
        a && p && !this.workspace.connectionChecker.doTypeChecks(a.outputConnection, p.outputConnection) && (c.setGroup$$module$build$src$core$events$utils(l.group), l = this.prevBlocks_[0], l !== a && (a.unplug(), !l || l.isDisposed() || l.isShadow() || this.getInput("A").connection.connect(l.outputConnection)), a = this.prevBlocks_[1], a !== p && (p.unplug(), !a || a.isDisposed() || a.isShadow() || this.getInput("B").connection.connect(a.outputConnection)), this.bumpNeighbours(), c.setGroup$$module$build$src$core$events$utils(!1)), this.prevBlocks_[0] = this.getInputTargetBlock("A"), this.prevBlocks_[1] = this.getInputTargetBlock("B");
      } }, ao = function() {
        this.mixin(Pt);
      };
      c.register$$module$build$src$core$extensions("logic_compare", ao);
      var Bt = { prevParentConnection_: null, onchange: function(l) {
        const a = this.getInputTargetBlock("THEN"), p = this.getInputTargetBlock("ELSE"), T = this.outputConnection.targetConnection;
        if ((a || p) && T) for (let S = 0; S < 2; S++) {
          const J = S === 1 ? a : p;
          J && !J.workspace.connectionChecker.doTypeChecks(J.outputConnection, T) && (c.setGroup$$module$build$src$core$events$utils(l.group), T === this.prevParentConnection_ ? (this.unplug(), T.getSourceBlock().bumpNeighbours()) : (J.unplug(), J.bumpNeighbours()), c.setGroup$$module$build$src$core$events$utils(!1));
        }
        this.prevParentConnection_ = T;
      } };
      c.registerMixin$$module$build$src$core$extensions("logic_ternary", Bt), c.defineBlocks$$module$build$src$core$common(is);
      var xt = { blocks: is }, ge = c.createBlockDefinitionsFromJsonArray$$module$build$src$core$common([
        { type: "lists_create_empty", message0: "%{BKY_LISTS_CREATE_EMPTY_TITLE}", output: "Array", style: "list_blocks", tooltip: "%{BKY_LISTS_CREATE_EMPTY_TOOLTIP}", helpUrl: "%{BKY_LISTS_CREATE_EMPTY_HELPURL}" },
        {
          type: "lists_repeat",
          message0: "%{BKY_LISTS_REPEAT_TITLE}",
          args0: [{ type: "input_value", name: "ITEM" }, { type: "input_value", name: "NUM", check: "Number" }],
          output: "Array",
          style: "list_blocks",
          tooltip: "%{BKY_LISTS_REPEAT_TOOLTIP}",
          helpUrl: "%{BKY_LISTS_REPEAT_HELPURL}"
        },
        { type: "lists_reverse", message0: "%{BKY_LISTS_REVERSE_MESSAGE0}", args0: [{ type: "input_value", name: "LIST", check: "Array" }], output: "Array", inputsInline: !0, style: "list_blocks", tooltip: "%{BKY_LISTS_REVERSE_TOOLTIP}", helpUrl: "%{BKY_LISTS_REVERSE_HELPURL}" },
        { type: "lists_isEmpty", message0: "%{BKY_LISTS_ISEMPTY_TITLE}", args0: [{ type: "input_value", name: "VALUE", check: ["String", "Array"] }], output: "Boolean", style: "list_blocks", tooltip: "%{BKY_LISTS_ISEMPTY_TOOLTIP}", helpUrl: "%{BKY_LISTS_ISEMPTY_HELPURL}" },
        { type: "lists_length", message0: "%{BKY_LISTS_LENGTH_TITLE}", args0: [{ type: "input_value", name: "VALUE", check: ["String", "Array"] }], output: "Number", style: "list_blocks", tooltip: "%{BKY_LISTS_LENGTH_TOOLTIP}", helpUrl: "%{BKY_LISTS_LENGTH_HELPURL}" }
      ]), gn = { init: function() {
        this.setHelpUrl(c.Msg$$module$build$src$core$msg.LISTS_CREATE_WITH_HELPURL), this.setStyle("list_blocks"), this.itemCount_ = 3, this.updateShape_(), this.setOutput(!0, "Array"), this.setMutator(new c.MutatorIcon$$module$build$src$core$icons$mutator_icon(
          ["lists_create_with_item"],
          this
        )), this.setTooltip(c.Msg$$module$build$src$core$msg.LISTS_CREATE_WITH_TOOLTIP);
      }, mutationToDom: function() {
        const l = c.createElement$$module$build$src$core$utils$xml("mutation");
        return l.setAttribute("items", String(this.itemCount_)), l;
      }, domToMutation: function(l) {
        if (l = l.getAttribute("items"), !l) throw new TypeError("element did not have items");
        this.itemCount_ = parseInt(l, 10), this.updateShape_();
      }, saveExtraState: function() {
        return { itemCount: this.itemCount_ };
      }, loadExtraState: function(l) {
        this.itemCount_ = l.itemCount, this.updateShape_();
      }, decompose: function(l) {
        const a = l.newBlock("lists_create_with_container");
        a.initSvg();
        let p = a.getInput("STACK").connection;
        for (let T = 0; T < this.itemCount_; T++) {
          const S = l.newBlock("lists_create_with_item");
          if (S.initSvg(), !S.previousConnection) throw Error("itemBlock has no previousConnection");
          p.connect(S.previousConnection), p = S.nextConnection;
        }
        return a;
      }, compose: function(l) {
        var a = l.getInputTargetBlock("STACK");
        for (l = []; a; ) a.isInsertionMarker() || l.push(a.valueConnection_), a = a.getNextBlock();
        for (a = 0; a < this.itemCount_; a++) {
          const p = this.getInput("ADD" + a).connection.targetConnection;
          p && !l.includes(p) && p.disconnect();
        }
        for (this.itemCount_ = l.length, this.updateShape_(), a = 0; a < this.itemCount_; a++) {
          let p;
          (p = l[a]) == null || p.reconnect(this, "ADD" + a);
        }
      }, saveConnections: function(l) {
        l = l.getInputTargetBlock("STACK");
        let a = 0;
        for (; l; ) {
          if (l.isInsertionMarker()) {
            l = l.getNextBlock();
            continue;
          }
          const p = this.getInput("ADD" + a);
          let T;
          l.valueConnection_ = (T = p) == null ? void 0 : T.connection.targetConnection, l = l.getNextBlock(), a++;
        }
      }, updateShape_: function() {
        this.itemCount_ && this.getInput("EMPTY") ? this.removeInput("EMPTY") : this.itemCount_ || this.getInput("EMPTY") || this.appendDummyInput("EMPTY").appendField(c.Msg$$module$build$src$core$msg.LISTS_CREATE_EMPTY_TITLE);
        for (var l = 0; l < this.itemCount_; l++) if (!this.getInput("ADD" + l)) {
          const a = this.appendValueInput("ADD" + l).setAlign(c.Align$$module$build$src$core$inputs$align.RIGHT);
          l === 0 && a.appendField(c.Msg$$module$build$src$core$msg.LISTS_CREATE_WITH_INPUT_WITH);
        }
        for (l = this.itemCount_; this.getInput("ADD" + l); l++) this.removeInput("ADD" + l);
      } };
      ge.lists_create_with = gn;
      var Cs = { init: function() {
        this.setStyle("list_blocks"), this.appendDummyInput().appendField(c.Msg$$module$build$src$core$msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD), this.appendStatementInput("STACK"), this.setTooltip(c.Msg$$module$build$src$core$msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP), this.contextMenu = !1;
      } };
      ge.lists_create_with_container = Cs;
      var ho = { init: function() {
        this.setStyle("list_blocks"), this.appendDummyInput().appendField(c.Msg$$module$build$src$core$msg.LISTS_CREATE_WITH_ITEM_TITLE), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setTooltip(c.Msg$$module$build$src$core$msg.LISTS_CREATE_WITH_ITEM_TOOLTIP), this.contextMenu = !1;
      } };
      ge.lists_create_with_item = ho;
      var Ft = { init: function() {
        var l = [[c.Msg$$module$build$src$core$msg.LISTS_INDEX_OF_FIRST, "FIRST"], [c.Msg$$module$build$src$core$msg.LISTS_INDEX_OF_LAST, "LAST"]];
        if (this.setHelpUrl(c.Msg$$module$build$src$core$msg.LISTS_INDEX_OF_HELPURL), this.setStyle("list_blocks"), this.setOutput(!0, "Number"), this.appendValueInput("VALUE").setCheck("Array").appendField(c.Msg$$module$build$src$core$msg.LISTS_INDEX_OF_INPUT_IN_LIST), l = c.fromJson$$module$build$src$core$field_registry({
          type: "field_dropdown",
          options: l
        }), !l) throw Error("field_dropdown not found");
        this.appendValueInput("FIND").appendField(l, "END"), this.setInputsInline(!0), this.setTooltip(() => c.Msg$$module$build$src$core$msg.LISTS_INDEX_OF_TOOLTIP.replace("%1", this.workspace.options.oneBasedIndex ? "0" : "-1"));
      } };
      ge.lists_indexOf = Ft;
      var $o = { init: function() {
        var l = [[c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_GET, "GET"], [c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_GET_REMOVE, "GET_REMOVE"], [c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_REMOVE, "REMOVE"]];
        this.WHERE_OPTIONS = [
          [c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_FROM_START, "FROM_START"],
          [c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_FROM_END, "FROM_END"],
          [c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_FIRST, "FIRST"],
          [c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_LAST, "LAST"],
          [c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_RANDOM, "RANDOM"]
        ], this.setHelpUrl(c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_HELPURL), this.setStyle("list_blocks"), l = c.fromJson$$module$build$src$core$field_registry({ type: "field_dropdown", options: l }), l.setValidator(function(a) {
          a = a === "REMOVE", this.getSourceBlock().updateStatement_(a);
        }), this.appendValueInput("VALUE").setCheck("Array").appendField(c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_INPUT_IN_LIST), this.appendDummyInput().appendField(l, "MODE").appendField("", "SPACE"), l = c.fromJson$$module$build$src$core$field_registry({ type: "field_dropdown", options: this.WHERE_OPTIONS }), l.setValidator(function(a) {
          const p = this.getValue();
          a = a === "FROM_START" || a === "FROM_END", a !== (p === "FROM_START" || p === "FROM_END") && this.getSourceBlock().updateAt_(a);
        }), this.appendDummyInput().appendField(l, "WHERE"), this.appendDummyInput("AT"), c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_TAIL && this.appendDummyInput("TAIL").appendField(c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_TAIL), this.setInputsInline(!0), this.setOutput(!0), this.updateAt_(!0), this.setTooltip(() => {
          const a = this.getFieldValue("MODE"), p = this.getFieldValue("WHERE");
          let T = "";
          switch (a + " " + p) {
            case "GET FROM_START":
            case "GET FROM_END":
              T = c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM;
              break;
            case "GET FIRST":
              T = c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST;
              break;
            case "GET LAST":
              T = c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST;
              break;
            case "GET RANDOM":
              T = c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM;
              break;
            case "GET_REMOVE FROM_START":
            case "GET_REMOVE FROM_END":
              T = c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM;
              break;
            case "GET_REMOVE FIRST":
              T = c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST;
              break;
            case "GET_REMOVE LAST":
              T = c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST;
              break;
            case "GET_REMOVE RANDOM":
              T = c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM;
              break;
            case "REMOVE FROM_START":
            case "REMOVE FROM_END":
              T = c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM;
              break;
            case "REMOVE FIRST":
              T = c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST;
              break;
            case "REMOVE LAST":
              T = c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST;
              break;
            case "REMOVE RANDOM":
              T = c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM;
          }
          return (p === "FROM_START" || p === "FROM_END") && (T += "  " + (p === "FROM_START" ? c.Msg$$module$build$src$core$msg.LISTS_INDEX_FROM_START_TOOLTIP : c.Msg$$module$build$src$core$msg.LISTS_INDEX_FROM_END_TOOLTIP).replace(
            "%1",
            this.workspace.options.oneBasedIndex ? "#1" : "#0"
          )), T;
        });
      }, mutationToDom: function() {
        const l = c.createElement$$module$build$src$core$utils$xml("mutation");
        l.setAttribute("statement", String(!this.outputConnection));
        const a = this.getInput("AT") instanceof c.ValueInput$$module$build$src$core$inputs$value_input;
        return l.setAttribute("at", String(a)), l;
      }, domToMutation: function(l) {
        const a = l.getAttribute("statement") === "true";
        this.updateStatement_(a), l = l.getAttribute("at") !== "false", this.updateAt_(l);
      }, saveExtraState: function() {
        return this.outputConnection ? null : { isStatement: !0 };
      }, loadExtraState: function(l) {
        l.isStatement ? this.updateStatement_(!0) : typeof l == "string" && this.domToMutation(c.textToDom$$module$build$src$core$utils$xml(l));
      }, updateStatement_: function(l) {
        l !== !this.outputConnection && (this.unplug(!0, !0), l ? (this.setOutput(!1), this.setPreviousStatement(!0), this.setNextStatement(!0)) : (this.setPreviousStatement(!1), this.setNextStatement(!1), this.setOutput(!0)));
      }, updateAt_: function(l) {
        this.removeInput("AT"), this.removeInput("ORDINAL", !0), l ? (this.appendValueInput("AT").setCheck("Number"), c.Msg$$module$build$src$core$msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL").appendField(c.Msg$$module$build$src$core$msg.ORDINAL_NUMBER_SUFFIX)) : this.appendDummyInput("AT"), c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_TAIL && this.moveInputBefore("TAIL", null);
      } };
      ge.lists_getIndex = $o;
      var et = { init: function() {
        var l = [[c.Msg$$module$build$src$core$msg.LISTS_SET_INDEX_SET, "SET"], [c.Msg$$module$build$src$core$msg.LISTS_SET_INDEX_INSERT, "INSERT"]];
        this.WHERE_OPTIONS = [[c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_FROM_START, "FROM_START"], [c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_FROM_END, "FROM_END"], [c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_FIRST, "FIRST"], [c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_LAST, "LAST"], [
          c.Msg$$module$build$src$core$msg.LISTS_GET_INDEX_RANDOM,
          "RANDOM"
        ]], this.setHelpUrl(c.Msg$$module$build$src$core$msg.LISTS_SET_INDEX_HELPURL), this.setStyle("list_blocks"), this.appendValueInput("LIST").setCheck("Array").appendField(c.Msg$$module$build$src$core$msg.LISTS_SET_INDEX_INPUT_IN_LIST), l = c.fromJson$$module$build$src$core$field_registry({ type: "field_dropdown", options: l }), this.appendDummyInput().appendField(l, "MODE").appendField("", "SPACE"), l = c.fromJson$$module$build$src$core$field_registry({ type: "field_dropdown", options: this.WHERE_OPTIONS }), l.setValidator(function(a) {
          const p = this.getValue();
          a = a === "FROM_START" || a === "FROM_END", a !== (p === "FROM_START" || p === "FROM_END") && this.getSourceBlock().updateAt_(a);
        }), this.appendDummyInput().appendField(l, "WHERE"), this.appendDummyInput("AT"), this.appendValueInput("TO").appendField(c.Msg$$module$build$src$core$msg.LISTS_SET_INDEX_INPUT_TO), this.setInputsInline(!0), this.setPreviousStatement(!0), this.setNextStatement(!0), this.setTooltip(c.Msg$$module$build$src$core$msg.LISTS_SET_INDEX_TOOLTIP), this.updateAt_(!0), this.setTooltip(() => {
          const a = this.getFieldValue("MODE"), p = this.getFieldValue("WHERE");
          let T = "";
          switch (a + " " + p) {
            case "SET FROM_START":
            case "SET FROM_END":
              T = c.Msg$$module$build$src$core$msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM;
              break;
            case "SET FIRST":
              T = c.Msg$$module$build$src$core$msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST;
              break;
            case "SET LAST":
              T = c.Msg$$module$build$src$core$msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST;
              break;
            case "SET RANDOM":
              T = c.Msg$$module$build$src$core$msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM;
              break;
            case "INSERT FROM_START":
            case "INSERT FROM_END":
              T = c.Msg$$module$build$src$core$msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM;
              break;
            case "INSERT FIRST":
              T = c.Msg$$module$build$src$core$msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST;
              break;
            case "INSERT LAST":
              T = c.Msg$$module$build$src$core$msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST;
              break;
            case "INSERT RANDOM":
              T = c.Msg$$module$build$src$core$msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM;
          }
          return (p === "FROM_START" || p === "FROM_END") && (T += "  " + c.Msg$$module$build$src$core$msg.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1", this.workspace.options.oneBasedIndex ? "#1" : "#0")), T;
        });
      }, mutationToDom: function() {
        const l = c.createElement$$module$build$src$core$utils$xml("mutation"), a = this.getInput("AT") instanceof c.ValueInput$$module$build$src$core$inputs$value_input;
        return l.setAttribute("at", String(a)), l;
      }, domToMutation: function(l) {
        l = l.getAttribute("at") !== "false", this.updateAt_(l);
      }, saveExtraState: function() {
        return null;
      }, loadExtraState: function() {
      }, updateAt_: function(l) {
        this.removeInput("AT"), this.removeInput("ORDINAL", !0), l ? (this.appendValueInput("AT").setCheck("Number"), c.Msg$$module$build$src$core$msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL").appendField(c.Msg$$module$build$src$core$msg.ORDINAL_NUMBER_SUFFIX)) : this.appendDummyInput("AT"), this.moveInputBefore("AT", "TO"), this.getInput("ORDINAL") && this.moveInputBefore("ORDINAL", "TO");
      } };
      ge.lists_setIndex = et;
      var mt = { init: function() {
        this.WHERE_OPTIONS_1 = [[c.Msg$$module$build$src$core$msg.LISTS_GET_SUBLIST_START_FROM_START, "FROM_START"], [c.Msg$$module$build$src$core$msg.LISTS_GET_SUBLIST_START_FROM_END, "FROM_END"], [c.Msg$$module$build$src$core$msg.LISTS_GET_SUBLIST_START_FIRST, "FIRST"]], this.WHERE_OPTIONS_2 = [
          [c.Msg$$module$build$src$core$msg.LISTS_GET_SUBLIST_END_FROM_START, "FROM_START"],
          [c.Msg$$module$build$src$core$msg.LISTS_GET_SUBLIST_END_FROM_END, "FROM_END"],
          [c.Msg$$module$build$src$core$msg.LISTS_GET_SUBLIST_END_LAST, "LAST"]
        ], this.setHelpUrl(c.Msg$$module$build$src$core$msg.LISTS_GET_SUBLIST_HELPURL), this.setStyle("list_blocks"), this.appendValueInput("LIST").setCheck("Array").appendField(c.Msg$$module$build$src$core$msg.LISTS_GET_SUBLIST_INPUT_IN_LIST);
        const l = (a) => {
          const p = c.fromJson$$module$build$src$core$field_registry({ type: "field_dropdown", options: this["WHERE_OPTIONS_" + a] });
          return p.setValidator(function(T) {
            const S = this.getValue();
            T = T === "FROM_START" || T === "FROM_END", T !== (S === "FROM_START" || S === "FROM_END") && this.getSourceBlock().updateAt_(a, T);
          }), p;
        };
        this.appendDummyInput("WHERE1_INPUT").appendField(l(1), "WHERE1"), this.appendDummyInput("AT1"), this.appendDummyInput("WHERE2_INPUT").appendField(l(2), "WHERE2"), this.appendDummyInput("AT2"), c.Msg$$module$build$src$core$msg.LISTS_GET_SUBLIST_TAIL && this.appendDummyInput("TAIL").appendField(c.Msg$$module$build$src$core$msg.LISTS_GET_SUBLIST_TAIL), this.setInputsInline(!0), this.setOutput(!0, "Array"), this.updateAt_(
          1,
          !0
        ), this.updateAt_(2, !0), this.setTooltip(c.Msg$$module$build$src$core$msg.LISTS_GET_SUBLIST_TOOLTIP);
      }, mutationToDom: function() {
        const l = c.createElement$$module$build$src$core$utils$xml("mutation");
        var a = this.getInput("AT1") instanceof c.ValueInput$$module$build$src$core$inputs$value_input;
        return l.setAttribute("at1", String(a)), a = this.getInput("AT2") instanceof c.ValueInput$$module$build$src$core$inputs$value_input, l.setAttribute("at2", String(a)), l;
      }, domToMutation: function(l) {
        const a = l.getAttribute("at1") === "true";
        l = l.getAttribute("at2") === "true", this.updateAt_(1, a), this.updateAt_(2, l);
      }, saveExtraState: function() {
        return null;
      }, loadExtraState: function() {
      }, updateAt_: function(l, a) {
        this.removeInput("AT" + l), this.removeInput("ORDINAL" + l, !0), a ? (this.appendValueInput("AT" + l).setCheck("Number"), c.Msg$$module$build$src$core$msg.ORDINAL_NUMBER_SUFFIX && this.appendDummyInput("ORDINAL" + l).appendField(c.Msg$$module$build$src$core$msg.ORDINAL_NUMBER_SUFFIX)) : this.appendDummyInput("AT" + l), l === 1 && (this.moveInputBefore(
          "AT1",
          "WHERE2_INPUT"
        ), this.getInput("ORDINAL1") && this.moveInputBefore("ORDINAL1", "WHERE2_INPUT")), c.Msg$$module$build$src$core$msg.LISTS_GET_SUBLIST_TAIL && this.moveInputBefore("TAIL", null);
      } };
      ge.lists_getSublist = mt, ge.lists_sort = { init: function() {
        this.jsonInit({
          message0: "%{BKY_LISTS_SORT_TITLE}",
          args0: [{ type: "field_dropdown", name: "TYPE", options: [["%{BKY_LISTS_SORT_TYPE_NUMERIC}", "NUMERIC"], ["%{BKY_LISTS_SORT_TYPE_TEXT}", "TEXT"], ["%{BKY_LISTS_SORT_TYPE_IGNORECASE}", "IGNORE_CASE"]] }, { type: "field_dropdown", name: "DIRECTION", options: [["%{BKY_LISTS_SORT_ORDER_ASCENDING}", "1"], ["%{BKY_LISTS_SORT_ORDER_DESCENDING}", "-1"]] }, { type: "input_value", name: "LIST", check: "Array" }],
          output: "Array",
          style: "list_blocks",
          tooltip: "%{BKY_LISTS_SORT_TOOLTIP}",
          helpUrl: "%{BKY_LISTS_SORT_HELPURL}"
        });
      } }, ge.lists_split = {
        init: function() {
          const l = c.fromJson$$module$build$src$core$field_registry({ type: "field_dropdown", options: [[c.Msg$$module$build$src$core$msg.LISTS_SPLIT_LIST_FROM_TEXT, "SPLIT"], [c.Msg$$module$build$src$core$msg.LISTS_SPLIT_TEXT_FROM_LIST, "JOIN"]] });
          if (!l) throw Error("field_dropdown not found");
          l.setValidator((a) => {
            this.updateType_(a);
          }), this.setHelpUrl(c.Msg$$module$build$src$core$msg.LISTS_SPLIT_HELPURL), this.setStyle("list_blocks"), this.appendValueInput("INPUT").setCheck("String").appendField(
            l,
            "MODE"
          ), this.appendValueInput("DELIM").setCheck("String").appendField(c.Msg$$module$build$src$core$msg.LISTS_SPLIT_WITH_DELIMITER), this.setInputsInline(!0), this.setOutput(!0, "Array"), this.setTooltip(() => {
            const a = this.getFieldValue("MODE");
            if (a === "SPLIT") return c.Msg$$module$build$src$core$msg.LISTS_SPLIT_TOOLTIP_SPLIT;
            if (a === "JOIN") return c.Msg$$module$build$src$core$msg.LISTS_SPLIT_TOOLTIP_JOIN;
            throw Error("Unknown mode: " + a);
          });
        },
        updateType_: function(l) {
          if (this.getFieldValue("MODE") !== l) {
            const a = this.getInput("INPUT").connection;
            a.setShadowDom(null);
            const p = a.targetBlock();
            p && (a.disconnect(), p.isShadow() ? p.dispose(!1) : this.bumpNeighbours());
          }
          l === "SPLIT" ? (this.outputConnection.setCheck("Array"), this.getInput("INPUT").setCheck("String")) : (this.outputConnection.setCheck("String"), this.getInput("INPUT").setCheck("Array"));
        },
        mutationToDom: function() {
          const l = c.createElement$$module$build$src$core$utils$xml("mutation");
          return l.setAttribute("mode", this.getFieldValue("MODE")), l;
        },
        domToMutation: function(l) {
          this.updateType_(l.getAttribute("mode"));
        },
        saveExtraState: function() {
          return { mode: this.getFieldValue("MODE") };
        },
        loadExtraState: function(l) {
          this.updateType_(l.mode);
        }
      }, c.defineBlocks$$module$build$src$core$common(ge);
      var ns = { blocks: ge }, ui = Object.assign({}, ge, is, j, Ce, oe, K, lt, xe), po = {
        blocks: ui,
        lists: ns,
        logic: xt,
        loops: R,
        math: ci,
        procedures: ro,
        texts: Os,
        variables: Ze,
        variablesDynamic: He
      };
      return po.__namespace__ = c, po;
    });
  })(hl)), hl.exports;
}
var rT = nT();
const lT = /* @__PURE__ */ uh(rT), {
  blocks: OL,
  lists: CL,
  logic: yL,
  loops: vL,
  math: LL,
  procedures: AL,
  texts: kL,
  variables: NL,
  variablesDynamic: wL
} = lT;
var dl = { exports: {} }, cT = dl.exports, J_;
function uT() {
  return J_ || (J_ = 1, (function(N, B) {
    (function(n, c) {
      N.exports = c();
    })(cT, function() {
      var n = n || { Msg: /* @__PURE__ */ Object.create(null) };
      return n.Msg.ADD_COMMENT = "Add Comment", n.Msg.ALT_KEY = "Alt", n.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE = "Can't delete the variable '%1' because it's part of the definition of the function '%2'", n.Msg.CHANGE_VALUE_TITLE = "Change value:", n.Msg.CHROME_OS = "ChromeOS", n.Msg.CLEAN_UP = "Clean up Blocks", n.Msg.CLOSE = "Close", n.Msg.COLLAPSED_WARNINGS_WARNING = "Collapsed blocks contain warnings.", n.Msg.COLLAPSE_ALL = "Collapse Blocks", n.Msg.COLLAPSE_BLOCK = "Collapse Block", n.Msg.COLOUR_BLEND_COLOUR1 = "colour 1", n.Msg.COLOUR_BLEND_COLOUR2 = "colour 2", n.Msg.COLOUR_BLEND_HELPURL = "https://meyerweb.com/eric/tools/color-blend/#:::rgbp", n.Msg.COLOUR_BLEND_RATIO = "ratio", n.Msg.COLOUR_BLEND_TITLE = "blend", n.Msg.COLOUR_BLEND_TOOLTIP = "Blends two colours together with a given ratio (0.0 - 1.0).", n.Msg.COLOUR_PICKER_HELPURL = "https://en.wikipedia.org/wiki/Color", n.Msg.COLOUR_PICKER_TOOLTIP = "Choose a colour from the palette.", n.Msg.COLOUR_RANDOM_HELPURL = "http://randomcolour.com", n.Msg.COLOUR_RANDOM_TITLE = "random colour", n.Msg.COLOUR_RANDOM_TOOLTIP = "Choose a colour at random.", n.Msg.COLOUR_RGB_BLUE = "blue", n.Msg.COLOUR_RGB_GREEN = "green", n.Msg.COLOUR_RGB_HELPURL = "https://www.december.com/html/spec/colorpercompact.html", n.Msg.COLOUR_RGB_RED = "red", n.Msg.COLOUR_RGB_TITLE = "colour with", n.Msg.COLOUR_RGB_TOOLTIP = "Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.", n.Msg.COMMAND_KEY = "⌘ Command", n.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Loops#loop-termination-blocks", n.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "break out of loop", n.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "continue with next iteration of loop", n.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "Break out of the containing loop.", n.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = "Skip the rest of this loop, and continue with the next iteration.", n.Msg.CONTROLS_FLOW_STATEMENTS_WARNING = "Warning: This block may only be used within a loop.", n.Msg.CONTROLS_FOREACH_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Loops#for-each", n.Msg.CONTROLS_FOREACH_TITLE = "for each item %1 in list %2", n.Msg.CONTROLS_FOREACH_TOOLTIP = "For each item in a list, set the variable '%1' to the item, and then do some statements.", n.Msg.CONTROLS_FOR_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Loops#count-with", n.Msg.CONTROLS_FOR_TITLE = "count with %1 from %2 to %3 by %4", n.Msg.CONTROLS_FOR_TOOLTIP = "Have the variable '%1' take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.", n.Msg.CONTROLS_IF_ELSEIF_TOOLTIP = "Add a condition to the if block.", n.Msg.CONTROLS_IF_ELSE_TOOLTIP = "Add a final, catch-all condition to the if block.", n.Msg.CONTROLS_IF_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/IfElse", n.Msg.CONTROLS_IF_IF_TOOLTIP = "Add, remove, or reorder sections to reconfigure this if block.", n.Msg.CONTROLS_IF_MSG_ELSE = "else", n.Msg.CONTROLS_IF_MSG_ELSEIF = "else if", n.Msg.CONTROLS_IF_MSG_IF = "if", n.Msg.CONTROLS_IF_TOOLTIP_1 = "If a value is true, then do some statements.", n.Msg.CONTROLS_IF_TOOLTIP_2 = "If a value is true, then do the first block of statements. Otherwise, do the second block of statements.", n.Msg.CONTROLS_IF_TOOLTIP_3 = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.", n.Msg.CONTROLS_IF_TOOLTIP_4 = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.", n.Msg.CONTROLS_REPEAT_HELPURL = "https://en.wikipedia.org/wiki/For_loop", n.Msg.CONTROLS_REPEAT_INPUT_DO = "do", n.Msg.CONTROLS_REPEAT_TITLE = "repeat %1 times", n.Msg.CONTROLS_REPEAT_TOOLTIP = "Do some statements several times.", n.Msg.CONTROLS_WHILEUNTIL_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Loops#repeat", n.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "repeat until", n.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "repeat while", n.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = "While a value is false, then do some statements.", n.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = "While a value is true, then do some statements.", n.Msg.CONTROL_KEY = "Ctrl", n.Msg.COPY_SHORTCUT = "Copy", n.Msg.CUT_SHORTCUT = "Cut", n.Msg.DELETE_ALL_BLOCKS = "Delete all %1 blocks?", n.Msg.DELETE_BLOCK = "Delete Block", n.Msg.DELETE_VARIABLE = "Delete the '%1' variable", n.Msg.DELETE_VARIABLE_CONFIRMATION = "Delete %1 uses of the '%2' variable?", n.Msg.DELETE_X_BLOCKS = "Delete %1 Blocks", n.Msg.DIALOG_CANCEL = "Cancel", n.Msg.DIALOG_OK = "OK", n.Msg.DISABLE_BLOCK = "Disable Block", n.Msg.DUPLICATE_BLOCK = "Duplicate", n.Msg.DUPLICATE_COMMENT = "Duplicate Comment", n.Msg.EDIT_BLOCK_CONTENTS = "Edit Block contents", n.Msg.ENABLE_BLOCK = "Enable Block", n.Msg.EXPAND_ALL = "Expand Blocks", n.Msg.EXPAND_BLOCK = "Expand Block", n.Msg.EXTERNAL_INPUTS = "External Inputs", n.Msg.HELP = "Help", n.Msg.HELP_PROMPT = "Press %1 for help on keyboard controls", n.Msg.INLINE_INPUTS = "Inline Inputs", n.Msg.KEYBOARD_NAV_CONSTRAINED_MOVE_HINT = "Use the arrow keys to move, then %1 to accept the position", n.Msg.KEYBOARD_NAV_COPIED_HINT = "Copied. Press %1 to paste.", n.Msg.KEYBOARD_NAV_CUT_HINT = "Cut. Press %1 to paste.", n.Msg.KEYBOARD_NAV_UNCONSTRAINED_MOVE_HINT = "Hold %1 and use arrow keys to move freely, then %2 to accept the position", n.Msg.LINUX = "Linux", n.Msg.LISTS_CREATE_EMPTY_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Lists#create-empty-list", n.Msg.LISTS_CREATE_EMPTY_TITLE = "create empty list", n.Msg.LISTS_CREATE_EMPTY_TOOLTIP = "Returns a list, of length 0, containing no data records", n.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "list", n.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = "Add, remove, or reorder sections to reconfigure this list block.", n.Msg.LISTS_CREATE_WITH_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Lists#create-list-with", n.Msg.LISTS_CREATE_WITH_INPUT_WITH = "create list with", n.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Add an item to the list.", n.Msg.LISTS_CREATE_WITH_TOOLTIP = "Create a list with any number of items.", n.Msg.LISTS_GET_INDEX_FIRST = "first", n.Msg.LISTS_GET_INDEX_FROM_END = "# from end", n.Msg.LISTS_GET_INDEX_FROM_START = "#", n.Msg.LISTS_GET_INDEX_GET = "get", n.Msg.LISTS_GET_INDEX_GET_REMOVE = "get and remove", n.Msg.LISTS_GET_INDEX_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Lists#getting-items-from-a-list", n.Msg.LISTS_GET_INDEX_LAST = "last", n.Msg.LISTS_GET_INDEX_RANDOM = "random", n.Msg.LISTS_GET_INDEX_REMOVE = "remove", n.Msg.LISTS_GET_INDEX_TAIL = "", n.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "Returns the first item in a list.", n.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM = "Returns the item at the specified position in a list.", n.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "Returns the last item in a list.", n.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "Returns a random item in a list.", n.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = "Removes and returns the first item in a list.", n.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = "Removes and returns the item at the specified position in a list.", n.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = "Removes and returns the last item in a list.", n.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = "Removes and returns a random item in a list.", n.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "Removes the first item in a list.", n.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM = "Removes the item at the specified position in a list.", n.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "Removes the last item in a list.", n.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "Removes a random item in a list.", n.Msg.LISTS_GET_SUBLIST_END_FROM_END = "to # from end", n.Msg.LISTS_GET_SUBLIST_END_FROM_START = "to #", n.Msg.LISTS_GET_SUBLIST_END_LAST = "to last", n.Msg.LISTS_GET_SUBLIST_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Lists#getting-a-sublist", n.Msg.LISTS_GET_SUBLIST_START_FIRST = "get sub-list from first", n.Msg.LISTS_GET_SUBLIST_START_FROM_END = "get sub-list from # from end", n.Msg.LISTS_GET_SUBLIST_START_FROM_START = "get sub-list from #", n.Msg.LISTS_GET_SUBLIST_TAIL = "", n.Msg.LISTS_GET_SUBLIST_TOOLTIP = "Creates a copy of the specified portion of a list.", n.Msg.LISTS_INDEX_FROM_END_TOOLTIP = "%1 is the last item.", n.Msg.LISTS_INDEX_FROM_START_TOOLTIP = "%1 is the first item.", n.Msg.LISTS_INDEX_OF_FIRST = "find first occurrence of item", n.Msg.LISTS_INDEX_OF_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Lists#finding-items-in-a-list", n.Msg.LISTS_INDEX_OF_LAST = "find last occurrence of item", n.Msg.LISTS_INDEX_OF_TOOLTIP = "Returns the index of the first/last occurrence of the item in the list. Returns %1 if item is not found.", n.Msg.LISTS_INLIST = "in list", n.Msg.LISTS_ISEMPTY_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Lists#is-empty", n.Msg.LISTS_ISEMPTY_TITLE = "%1 is empty", n.Msg.LISTS_ISEMPTY_TOOLTIP = "Returns true if the list is empty.", n.Msg.LISTS_LENGTH_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Lists#length-of", n.Msg.LISTS_LENGTH_TITLE = "length of %1", n.Msg.LISTS_LENGTH_TOOLTIP = "Returns the length of a list.", n.Msg.LISTS_REPEAT_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Lists#create-list-with", n.Msg.LISTS_REPEAT_TITLE = "create list with item %1 repeated %2 times", n.Msg.LISTS_REPEAT_TOOLTIP = "Creates a list consisting of the given value repeated the specified number of times.", n.Msg.LISTS_REVERSE_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Lists#reversing-a-list", n.Msg.LISTS_REVERSE_MESSAGE0 = "reverse %1", n.Msg.LISTS_REVERSE_TOOLTIP = "Reverse a copy of a list.", n.Msg.LISTS_SET_INDEX_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Lists#in-list--set", n.Msg.LISTS_SET_INDEX_INPUT_TO = "as", n.Msg.LISTS_SET_INDEX_INSERT = "insert at", n.Msg.LISTS_SET_INDEX_SET = "set", n.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = "Inserts the item at the start of a list.", n.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM = "Inserts the item at the specified position in a list.", n.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = "Append the item to the end of a list.", n.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = "Inserts the item randomly in a list.", n.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "Sets the first item in a list.", n.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM = "Sets the item at the specified position in a list.", n.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "Sets the last item in a list.", n.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = "Sets a random item in a list.", n.Msg.LISTS_SORT_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Lists#sorting-a-list", n.Msg.LISTS_SORT_ORDER_ASCENDING = "ascending", n.Msg.LISTS_SORT_ORDER_DESCENDING = "descending", n.Msg.LISTS_SORT_TITLE = "sort %1 %2 %3", n.Msg.LISTS_SORT_TOOLTIP = "Sort a copy of a list.", n.Msg.LISTS_SORT_TYPE_IGNORECASE = "alphabetic, ignore case", n.Msg.LISTS_SORT_TYPE_NUMERIC = "numeric", n.Msg.LISTS_SORT_TYPE_TEXT = "alphabetic", n.Msg.LISTS_SPLIT_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Lists#splitting-strings-and-joining-lists", n.Msg.LISTS_SPLIT_LIST_FROM_TEXT = "make list from text", n.Msg.LISTS_SPLIT_TEXT_FROM_LIST = "make text from list", n.Msg.LISTS_SPLIT_TOOLTIP_JOIN = "Join a list of texts into one text, separated by a delimiter.", n.Msg.LISTS_SPLIT_TOOLTIP_SPLIT = "Split text into a list of texts, breaking at each delimiter.", n.Msg.LISTS_SPLIT_WITH_DELIMITER = "with delimiter", n.Msg.LOGIC_BOOLEAN_FALSE = "false", n.Msg.LOGIC_BOOLEAN_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Logic#values", n.Msg.LOGIC_BOOLEAN_TOOLTIP = "Returns either true or false.", n.Msg.LOGIC_BOOLEAN_TRUE = "true", n.Msg.LOGIC_COMPARE_HELPURL = "https://en.wikipedia.org/wiki/Inequality_(mathematics)", n.Msg.LOGIC_COMPARE_TOOLTIP_EQ = "Return true if both inputs equal each other.", n.Msg.LOGIC_COMPARE_TOOLTIP_GT = "Return true if the first input is greater than the second input.", n.Msg.LOGIC_COMPARE_TOOLTIP_GTE = "Return true if the first input is greater than or equal to the second input.", n.Msg.LOGIC_COMPARE_TOOLTIP_LT = "Return true if the first input is smaller than the second input.", n.Msg.LOGIC_COMPARE_TOOLTIP_LTE = "Return true if the first input is smaller than or equal to the second input.", n.Msg.LOGIC_COMPARE_TOOLTIP_NEQ = "Return true if both inputs are not equal to each other.", n.Msg.LOGIC_NEGATE_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Logic#not", n.Msg.LOGIC_NEGATE_TITLE = "not %1", n.Msg.LOGIC_NEGATE_TOOLTIP = "Returns true if the input is false. Returns false if the input is true.", n.Msg.LOGIC_NULL = "null", n.Msg.LOGIC_NULL_HELPURL = "https://en.wikipedia.org/wiki/Nullable_type", n.Msg.LOGIC_NULL_TOOLTIP = "Returns null.", n.Msg.LOGIC_OPERATION_AND = "and", n.Msg.LOGIC_OPERATION_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Logic#logical-operations", n.Msg.LOGIC_OPERATION_OR = "or", n.Msg.LOGIC_OPERATION_TOOLTIP_AND = "Return true if both inputs are true.", n.Msg.LOGIC_OPERATION_TOOLTIP_OR = "Return true if at least one of the inputs is true.", n.Msg.LOGIC_TERNARY_CONDITION = "test", n.Msg.LOGIC_TERNARY_HELPURL = "https://en.wikipedia.org/wiki/%3F:", n.Msg.LOGIC_TERNARY_IF_FALSE = "if false", n.Msg.LOGIC_TERNARY_IF_TRUE = "if true", n.Msg.LOGIC_TERNARY_TOOLTIP = "Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.", n.Msg.MAC_OS = "macOS", n.Msg.MATH_ADDITION_SYMBOL = "+", n.Msg.MATH_ARITHMETIC_HELPURL = "https://en.wikipedia.org/wiki/Arithmetic", n.Msg.MATH_ARITHMETIC_TOOLTIP_ADD = "Return the sum of the two numbers.", n.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "Return the quotient of the two numbers.", n.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS = "Return the difference of the two numbers.", n.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "Return the product of the two numbers.", n.Msg.MATH_ARITHMETIC_TOOLTIP_POWER = "Return the first number raised to the power of the second number.", n.Msg.MATH_ATAN2_HELPURL = "https://en.wikipedia.org/wiki/Atan2", n.Msg.MATH_ATAN2_TITLE = "atan2 of X:%1 Y:%2", n.Msg.MATH_ATAN2_TOOLTIP = "Return the arctangent of point (X, Y) in degrees from -180 to 180.", n.Msg.MATH_CHANGE_HELPURL = "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter", n.Msg.MATH_CHANGE_TITLE = "change %1 by %2", n.Msg.MATH_CHANGE_TOOLTIP = "Add a number to variable '%1'.", n.Msg.MATH_CONSTANT_HELPURL = "https://en.wikipedia.org/wiki/Mathematical_constant", n.Msg.MATH_CONSTANT_TOOLTIP = "Return one of the common constants: π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), or ∞ (infinity).", n.Msg.MATH_CONSTRAIN_HELPURL = "https://en.wikipedia.org/wiki/Clamping_(graphics)", n.Msg.MATH_CONSTRAIN_TITLE = "constrain %1 low %2 high %3", n.Msg.MATH_CONSTRAIN_TOOLTIP = "Constrain a number to be between the specified limits (inclusive).", n.Msg.MATH_DIVISION_SYMBOL = "÷", n.Msg.MATH_IS_DIVISIBLE_BY = "is divisible by", n.Msg.MATH_IS_EVEN = "is even", n.Msg.MATH_IS_NEGATIVE = "is negative", n.Msg.MATH_IS_ODD = "is odd", n.Msg.MATH_IS_POSITIVE = "is positive", n.Msg.MATH_IS_PRIME = "is prime", n.Msg.MATH_IS_TOOLTIP = "Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.", n.Msg.MATH_IS_WHOLE = "is whole", n.Msg.MATH_MODULO_HELPURL = "https://en.wikipedia.org/wiki/Modulo_operation", n.Msg.MATH_MODULO_TITLE = "remainder of %1 ÷ %2", n.Msg.MATH_MODULO_TOOLTIP = "Return the remainder from dividing the two numbers.", n.Msg.MATH_MULTIPLICATION_SYMBOL = "×", n.Msg.MATH_NUMBER_HELPURL = "https://en.wikipedia.org/wiki/Number", n.Msg.MATH_NUMBER_TOOLTIP = "A number.", n.Msg.MATH_ONLIST_HELPURL = "", n.Msg.MATH_ONLIST_OPERATOR_AVERAGE = "average of list", n.Msg.MATH_ONLIST_OPERATOR_MAX = "max of list", n.Msg.MATH_ONLIST_OPERATOR_MEDIAN = "median of list", n.Msg.MATH_ONLIST_OPERATOR_MIN = "min of list", n.Msg.MATH_ONLIST_OPERATOR_MODE = "modes of list", n.Msg.MATH_ONLIST_OPERATOR_RANDOM = "random item of list", n.Msg.MATH_ONLIST_OPERATOR_STD_DEV = "standard deviation of list", n.Msg.MATH_ONLIST_OPERATOR_SUM = "sum of list", n.Msg.MATH_ONLIST_TOOLTIP_AVERAGE = "Return the average (arithmetic mean) of the numeric values in the list.", n.Msg.MATH_ONLIST_TOOLTIP_MAX = "Return the largest number in the list.", n.Msg.MATH_ONLIST_TOOLTIP_MEDIAN = "Return the median number in the list.", n.Msg.MATH_ONLIST_TOOLTIP_MIN = "Return the smallest number in the list.", n.Msg.MATH_ONLIST_TOOLTIP_MODE = "Return a list of the most common item(s) in the list.", n.Msg.MATH_ONLIST_TOOLTIP_RANDOM = "Return a random element from the list.", n.Msg.MATH_ONLIST_TOOLTIP_STD_DEV = "Return the standard deviation of the list.", n.Msg.MATH_ONLIST_TOOLTIP_SUM = "Return the sum of all the numbers in the list.", n.Msg.MATH_POWER_SYMBOL = "^", n.Msg.MATH_RANDOM_FLOAT_HELPURL = "https://en.wikipedia.org/wiki/Random_number_generation", n.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM = "random fraction", n.Msg.MATH_RANDOM_FLOAT_TOOLTIP = "Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).", n.Msg.MATH_RANDOM_INT_HELPURL = "https://en.wikipedia.org/wiki/Random_number_generation", n.Msg.MATH_RANDOM_INT_TITLE = "random integer from %1 to %2", n.Msg.MATH_RANDOM_INT_TOOLTIP = "Return a random integer between the two specified limits, inclusive.", n.Msg.MATH_ROUND_HELPURL = "https://en.wikipedia.org/wiki/Rounding", n.Msg.MATH_ROUND_OPERATOR_ROUND = "round", n.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN = "round down", n.Msg.MATH_ROUND_OPERATOR_ROUNDUP = "round up", n.Msg.MATH_ROUND_TOOLTIP = "Round a number up or down.", n.Msg.MATH_SINGLE_HELPURL = "https://en.wikipedia.org/wiki/Square_root", n.Msg.MATH_SINGLE_OP_ABSOLUTE = "absolute", n.Msg.MATH_SINGLE_OP_ROOT = "square root", n.Msg.MATH_SINGLE_TOOLTIP_ABS = "Return the absolute value of a number.", n.Msg.MATH_SINGLE_TOOLTIP_EXP = "Return e to the power of a number.", n.Msg.MATH_SINGLE_TOOLTIP_LN = "Return the natural logarithm of a number.", n.Msg.MATH_SINGLE_TOOLTIP_LOG10 = "Return the base 10 logarithm of a number.", n.Msg.MATH_SINGLE_TOOLTIP_NEG = "Return the negation of a number.", n.Msg.MATH_SINGLE_TOOLTIP_POW10 = "Return 10 to the power of a number.", n.Msg.MATH_SINGLE_TOOLTIP_ROOT = "Return the square root of a number.", n.Msg.MATH_SUBTRACTION_SYMBOL = "-", n.Msg.MATH_TRIG_ACOS = "acos", n.Msg.MATH_TRIG_ASIN = "asin", n.Msg.MATH_TRIG_ATAN = "atan", n.Msg.MATH_TRIG_COS = "cos", n.Msg.MATH_TRIG_HELPURL = "https://en.wikipedia.org/wiki/Trigonometric_functions", n.Msg.MATH_TRIG_SIN = "sin", n.Msg.MATH_TRIG_TAN = "tan", n.Msg.MATH_TRIG_TOOLTIP_ACOS = "Return the arccosine of a number.", n.Msg.MATH_TRIG_TOOLTIP_ASIN = "Return the arcsine of a number.", n.Msg.MATH_TRIG_TOOLTIP_ATAN = "Return the arctangent of a number.", n.Msg.MATH_TRIG_TOOLTIP_COS = "Return the cosine of a degree (not radian).", n.Msg.MATH_TRIG_TOOLTIP_SIN = "Return the sine of a degree (not radian).", n.Msg.MATH_TRIG_TOOLTIP_TAN = "Return the tangent of a degree (not radian).", n.Msg.MOVE_BLOCK = "Move Block", n.Msg.NEW_COLOUR_VARIABLE = "Create colour variable...", n.Msg.NEW_NUMBER_VARIABLE = "Create number variable...", n.Msg.NEW_STRING_VARIABLE = "Create string variable...", n.Msg.NEW_VARIABLE = "Create variable...", n.Msg.NEW_VARIABLE_TITLE = "New variable name:", n.Msg.NEW_VARIABLE_TYPE_TITLE = "New variable type:", n.Msg.OPTION_KEY = "⌥ Option", n.Msg.ORDINAL_NUMBER_SUFFIX = "", n.Msg.PASTE_SHORTCUT = "Paste", n.Msg.PROCEDURES_ALLOW_STATEMENTS = "allow statements", n.Msg.PROCEDURES_BEFORE_PARAMS = "with:", n.Msg.PROCEDURES_CALLNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine", n.Msg.PROCEDURES_CALLNORETURN_TOOLTIP = "Run the user-defined function '%1'.", n.Msg.PROCEDURES_CALLRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine", n.Msg.PROCEDURES_CALLRETURN_TOOLTIP = "Run the user-defined function '%1' and use its output.", n.Msg.PROCEDURES_CALL_BEFORE_PARAMS = "with:", n.Msg.PROCEDURES_CALL_DISABLED_DEF_WARNING = "Can't run the user-defined function '%1' because the definition block is disabled.", n.Msg.PROCEDURES_CREATE_DO = "Create '%1'", n.Msg.PROCEDURES_DEFNORETURN_COMMENT = "Describe this function...", n.Msg.PROCEDURES_DEFNORETURN_DO = "", n.Msg.PROCEDURES_DEFNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine", n.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = "do something", n.Msg.PROCEDURES_DEFNORETURN_TITLE = "to", n.Msg.PROCEDURES_DEFNORETURN_TOOLTIP = "Creates a function with no output.", n.Msg.PROCEDURES_DEFRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine", n.Msg.PROCEDURES_DEFRETURN_RETURN = "return", n.Msg.PROCEDURES_DEFRETURN_TOOLTIP = "Creates a function with an output.", n.Msg.PROCEDURES_DEF_DUPLICATE_WARNING = "Warning: This function has duplicate parameters.", n.Msg.PROCEDURES_HIGHLIGHT_DEF = "Highlight function definition", n.Msg.PROCEDURES_IFRETURN_HELPURL = "https://c2.com/cgi/wiki?GuardClause", n.Msg.PROCEDURES_IFRETURN_TOOLTIP = "If a value is true, then return a second value.", n.Msg.PROCEDURES_IFRETURN_WARNING = "Warning: This block may be used only within a function definition.", n.Msg.PROCEDURES_MUTATORARG_TITLE = "input name:", n.Msg.PROCEDURES_MUTATORARG_TOOLTIP = "Add an input to the function.", n.Msg.PROCEDURES_MUTATORCONTAINER_TITLE = "inputs", n.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP = "Add, remove, or reorder inputs to this function.", n.Msg.REDO = "Redo", n.Msg.REMOVE_COMMENT = "Remove Comment", n.Msg.RENAME_VARIABLE = "Rename variable...", n.Msg.RENAME_VARIABLE_TITLE = "Rename all '%1' variables to:", n.Msg.SHORTCUTS_CODE_NAVIGATION = "Code navigation", n.Msg.SHORTCUTS_EDITING = "Editing", n.Msg.SHORTCUTS_GENERAL = "General", n.Msg.TEXT_APPEND_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Text#text-modification", n.Msg.TEXT_APPEND_TITLE = "to %1 append text %2", n.Msg.TEXT_APPEND_TOOLTIP = "Append some text to variable '%1'.", n.Msg.TEXT_CHANGECASE_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Text#adjusting-text-case", n.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE = "to lower case", n.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE = "to Title Case", n.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE = "to UPPER CASE", n.Msg.TEXT_CHANGECASE_TOOLTIP = "Return a copy of the text in a different case.", n.Msg.TEXT_CHARAT_FIRST = "get first letter", n.Msg.TEXT_CHARAT_FROM_END = "get letter # from end", n.Msg.TEXT_CHARAT_FROM_START = "get letter #", n.Msg.TEXT_CHARAT_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Text#extracting-text", n.Msg.TEXT_CHARAT_LAST = "get last letter", n.Msg.TEXT_CHARAT_RANDOM = "get random letter", n.Msg.TEXT_CHARAT_TAIL = "", n.Msg.TEXT_CHARAT_TITLE = "in text %1 %2", n.Msg.TEXT_CHARAT_TOOLTIP = "Returns the letter at the specified position.", n.Msg.TEXT_COUNT_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Text#counting-substrings", n.Msg.TEXT_COUNT_MESSAGE0 = "count %1 in %2", n.Msg.TEXT_COUNT_TOOLTIP = "Count how many times some text occurs within some other text.", n.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "Add an item to the text.", n.Msg.TEXT_CREATE_JOIN_TITLE_JOIN = "join", n.Msg.TEXT_CREATE_JOIN_TOOLTIP = "Add, remove, or reorder sections to reconfigure this text block.", n.Msg.TEXT_GET_SUBSTRING_END_FROM_END = "to letter # from end", n.Msg.TEXT_GET_SUBSTRING_END_FROM_START = "to letter #", n.Msg.TEXT_GET_SUBSTRING_END_LAST = "to last letter", n.Msg.TEXT_GET_SUBSTRING_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Text#extracting-a-region-of-text", n.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = "in text", n.Msg.TEXT_GET_SUBSTRING_START_FIRST = "get substring from first letter", n.Msg.TEXT_GET_SUBSTRING_START_FROM_END = "get substring from letter # from end", n.Msg.TEXT_GET_SUBSTRING_START_FROM_START = "get substring from letter #", n.Msg.TEXT_GET_SUBSTRING_TAIL = "", n.Msg.TEXT_GET_SUBSTRING_TOOLTIP = "Returns a specified portion of the text.", n.Msg.TEXT_INDEXOF_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Text#finding-text", n.Msg.TEXT_INDEXOF_OPERATOR_FIRST = "find first occurrence of text", n.Msg.TEXT_INDEXOF_OPERATOR_LAST = "find last occurrence of text", n.Msg.TEXT_INDEXOF_TITLE = "in text %1 %2 %3", n.Msg.TEXT_INDEXOF_TOOLTIP = "Returns the index of the first/last occurrence of the first text in the second text. Returns %1 if text is not found.", n.Msg.TEXT_ISEMPTY_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Text#checking-for-empty-text", n.Msg.TEXT_ISEMPTY_TITLE = "%1 is empty", n.Msg.TEXT_ISEMPTY_TOOLTIP = "Returns true if the provided text is empty.", n.Msg.TEXT_JOIN_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Text#text-creation", n.Msg.TEXT_JOIN_TITLE_CREATEWITH = "create text with", n.Msg.TEXT_JOIN_TOOLTIP = "Create a piece of text by joining together any number of items.", n.Msg.TEXT_LENGTH_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Text#text-modification", n.Msg.TEXT_LENGTH_TITLE = "length of %1", n.Msg.TEXT_LENGTH_TOOLTIP = "Returns the number of letters (including spaces) in the provided text.", n.Msg.TEXT_PRINT_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Text#printing-text", n.Msg.TEXT_PRINT_TITLE = "print %1", n.Msg.TEXT_PRINT_TOOLTIP = "Print the specified text, number or other value.", n.Msg.TEXT_PROMPT_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Text#getting-input-from-the-user", n.Msg.TEXT_PROMPT_TOOLTIP_NUMBER = "Prompt for user for a number.", n.Msg.TEXT_PROMPT_TOOLTIP_TEXT = "Prompt for user for some text.", n.Msg.TEXT_PROMPT_TYPE_NUMBER = "prompt for number with message", n.Msg.TEXT_PROMPT_TYPE_TEXT = "prompt for text with message", n.Msg.TEXT_REPLACE_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Text#replacing-substrings", n.Msg.TEXT_REPLACE_MESSAGE0 = "replace %1 with %2 in %3", n.Msg.TEXT_REPLACE_TOOLTIP = "Replace all occurances of some text within some other text.", n.Msg.TEXT_REVERSE_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Text#reversing-text", n.Msg.TEXT_REVERSE_MESSAGE0 = "reverse %1", n.Msg.TEXT_REVERSE_TOOLTIP = "Reverses the order of the characters in the text.", n.Msg.TEXT_TEXT_HELPURL = "https://en.wikipedia.org/wiki/String_(computer_science)", n.Msg.TEXT_TEXT_TOOLTIP = "A letter, word, or line of text.", n.Msg.TEXT_TRIM_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Text#trimming-removing-spaces", n.Msg.TEXT_TRIM_OPERATOR_BOTH = "trim spaces from both sides of", n.Msg.TEXT_TRIM_OPERATOR_LEFT = "trim spaces from left side of", n.Msg.TEXT_TRIM_OPERATOR_RIGHT = "trim spaces from right side of", n.Msg.TEXT_TRIM_TOOLTIP = "Return a copy of the text with spaces removed from one or both ends.", n.Msg.TODAY = "Today", n.Msg.UNDO = "Undo", n.Msg.UNKNOWN = "Unknown", n.Msg.UNNAMED_KEY = "unnamed", n.Msg.VARIABLES_DEFAULT_NAME = "item", n.Msg.VARIABLES_GET_CREATE_SET = "Create 'set %1'", n.Msg.VARIABLES_GET_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Variables#get", n.Msg.VARIABLES_GET_TOOLTIP = "Returns the value of this variable.", n.Msg.VARIABLES_SET = "set %1 to %2", n.Msg.VARIABLES_SET_CREATE_GET = "Create 'get %1'", n.Msg.VARIABLES_SET_HELPURL = "https://github.com/RaspberryPiFoundation/blockly/wiki/Variables#set", n.Msg.VARIABLES_SET_TOOLTIP = "Sets this variable to be equal to the input.", n.Msg.VARIABLE_ALREADY_EXISTS = "A variable named '%1' already exists.", n.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = "A variable named '%1' already exists for another type: '%2'.", n.Msg.VARIABLE_ALREADY_EXISTS_FOR_A_PARAMETER = "A variable named '%1' already exists as a parameter in the procedure '%2'.", n.Msg.WINDOWS = "Windows", n.Msg.WORKSPACE_ARIA_LABEL = "Blockly Workspace", n.Msg.WORKSPACE_COMMENT_DEFAULT_TEXT = "Say something...", n.Msg.CONTROLS_FOREACH_INPUT_DO = n.Msg.CONTROLS_REPEAT_INPUT_DO, n.Msg.CONTROLS_FOR_INPUT_DO = n.Msg.CONTROLS_REPEAT_INPUT_DO, n.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = n.Msg.CONTROLS_IF_MSG_ELSEIF, n.Msg.CONTROLS_IF_ELSE_TITLE_ELSE = n.Msg.CONTROLS_IF_MSG_ELSE, n.Msg.CONTROLS_IF_IF_TITLE_IF = n.Msg.CONTROLS_IF_MSG_IF, n.Msg.CONTROLS_IF_MSG_THEN = n.Msg.CONTROLS_REPEAT_INPUT_DO, n.Msg.CONTROLS_WHILEUNTIL_INPUT_DO = n.Msg.CONTROLS_REPEAT_INPUT_DO, n.Msg.LISTS_CREATE_WITH_ITEM_TITLE = n.Msg.VARIABLES_DEFAULT_NAME, n.Msg.LISTS_GET_INDEX_INPUT_IN_LIST = n.Msg.LISTS_INLIST, n.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST = n.Msg.LISTS_INLIST, n.Msg.LISTS_INDEX_OF_INPUT_IN_LIST = n.Msg.LISTS_INLIST, n.Msg.LISTS_SET_INDEX_INPUT_IN_LIST = n.Msg.LISTS_INLIST, n.Msg.MATH_CHANGE_TITLE_ITEM = n.Msg.VARIABLES_DEFAULT_NAME, n.Msg.PROCEDURES_DEFRETURN_COMMENT = n.Msg.PROCEDURES_DEFNORETURN_COMMENT, n.Msg.PROCEDURES_DEFRETURN_DO = n.Msg.PROCEDURES_DEFNORETURN_DO, n.Msg.PROCEDURES_DEFRETURN_PROCEDURE = n.Msg.PROCEDURES_DEFNORETURN_PROCEDURE, n.Msg.PROCEDURES_DEFRETURN_TITLE = n.Msg.PROCEDURES_DEFNORETURN_TITLE, n.Msg.TEXT_APPEND_VARIABLE = n.Msg.VARIABLES_DEFAULT_NAME, n.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = n.Msg.VARIABLES_DEFAULT_NAME, n.Msg.COLOUR_HUE = "20", n.Msg.LISTS_HUE = "260", n.Msg.LOGIC_HUE = "210", n.Msg.LOOPS_HUE = "120", n.Msg.MATH_HUE = "230", n.Msg.PROCEDURES_HUE = "290", n.Msg.TEXTS_HUE = "160", n.Msg.VARIABLES_DYNAMIC_HUE = "310", n.Msg.VARIABLES_HUE = "330", n.Msg;
    });
  })(dl)), dl.exports;
}
var aT = uT();
const hT = /* @__PURE__ */ uh(aT), {
  LOGIC_HUE: dT,
  LOOPS_HUE: $T,
  MATH_HUE: pT,
  TEXTS_HUE: gT,
  LISTS_HUE: _T,
  COLOUR_HUE: mT,
  VARIABLES_HUE: TT,
  VARIABLES_DYNAMIC_HUE: ET,
  PROCEDURES_HUE: fT,
  VARIABLES_DEFAULT_NAME: bT,
  UNNAMED_KEY: IT,
  TODAY: ST,
  DUPLICATE_BLOCK: RT,
  ADD_COMMENT: OT,
  REMOVE_COMMENT: CT,
  DUPLICATE_COMMENT: yT,
  EXTERNAL_INPUTS: vT,
  INLINE_INPUTS: LT,
  DELETE_BLOCK: AT,
  DELETE_X_BLOCKS: kT,
  DELETE_ALL_BLOCKS: NT,
  CLEAN_UP: wT,
  CLOSE: MT,
  COLLAPSE_BLOCK: DT,
  COLLAPSE_ALL: PT,
  EXPAND_BLOCK: BT,
  EXPAND_ALL: xT,
  DISABLE_BLOCK: FT,
  ENABLE_BLOCK: UT,
  HELP: HT,
  UNDO: GT,
  REDO: VT,
  CHANGE_VALUE_TITLE: WT,
  RENAME_VARIABLE: XT,
  RENAME_VARIABLE_TITLE: zT,
  NEW_VARIABLE: YT,
  NEW_STRING_VARIABLE: KT,
  NEW_NUMBER_VARIABLE: jT,
  NEW_COLOUR_VARIABLE: JT,
  NEW_VARIABLE_TYPE_TITLE: qT,
  NEW_VARIABLE_TITLE: ZT,
  VARIABLE_ALREADY_EXISTS: QT,
  VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE: eE,
  VARIABLE_ALREADY_EXISTS_FOR_A_PARAMETER: tE,
  DELETE_VARIABLE_CONFIRMATION: sE,
  CANNOT_DELETE_VARIABLE_PROCEDURE: oE,
  DELETE_VARIABLE: iE,
  COLOUR_PICKER_HELPURL: nE,
  COLOUR_PICKER_TOOLTIP: rE,
  COLOUR_RANDOM_HELPURL: lE,
  COLOUR_RANDOM_TITLE: cE,
  COLOUR_RANDOM_TOOLTIP: uE,
  COLOUR_RGB_HELPURL: aE,
  COLOUR_RGB_TITLE: hE,
  COLOUR_RGB_RED: dE,
  COLOUR_RGB_GREEN: $E,
  COLOUR_RGB_BLUE: pE,
  COLOUR_RGB_TOOLTIP: gE,
  COLOUR_BLEND_HELPURL: _E,
  COLOUR_BLEND_TITLE: mE,
  COLOUR_BLEND_COLOUR1: TE,
  COLOUR_BLEND_COLOUR2: EE,
  COLOUR_BLEND_RATIO: fE,
  COLOUR_BLEND_TOOLTIP: bE,
  CONTROLS_REPEAT_HELPURL: IE,
  CONTROLS_REPEAT_TITLE: SE,
  CONTROLS_REPEAT_INPUT_DO: RE,
  CONTROLS_REPEAT_TOOLTIP: OE,
  CONTROLS_WHILEUNTIL_HELPURL: CE,
  CONTROLS_WHILEUNTIL_INPUT_DO: yE,
  CONTROLS_WHILEUNTIL_OPERATOR_WHILE: vE,
  CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: LE,
  CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: AE,
  CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: kE,
  CONTROLS_FOR_HELPURL: NE,
  CONTROLS_FOR_TOOLTIP: wE,
  CONTROLS_FOR_TITLE: ME,
  CONTROLS_FOR_INPUT_DO: DE,
  CONTROLS_FOREACH_HELPURL: PE,
  CONTROLS_FOREACH_TITLE: BE,
  CONTROLS_FOREACH_INPUT_DO: xE,
  CONTROLS_FOREACH_TOOLTIP: FE,
  CONTROLS_FLOW_STATEMENTS_HELPURL: UE,
  CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: HE,
  CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: GE,
  CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: VE,
  CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: WE,
  CONTROLS_FLOW_STATEMENTS_WARNING: XE,
  CONTROLS_IF_HELPURL: zE,
  CONTROLS_IF_TOOLTIP_1: YE,
  CONTROLS_IF_TOOLTIP_2: KE,
  CONTROLS_IF_TOOLTIP_3: jE,
  CONTROLS_IF_TOOLTIP_4: JE,
  CONTROLS_IF_MSG_IF: qE,
  CONTROLS_IF_MSG_ELSEIF: ZE,
  CONTROLS_IF_MSG_ELSE: QE,
  CONTROLS_IF_MSG_THEN: ef,
  CONTROLS_IF_IF_TITLE_IF: tf,
  CONTROLS_IF_IF_TOOLTIP: sf,
  CONTROLS_IF_ELSEIF_TITLE_ELSEIF: of,
  CONTROLS_IF_ELSEIF_TOOLTIP: nf,
  CONTROLS_IF_ELSE_TITLE_ELSE: rf,
  CONTROLS_IF_ELSE_TOOLTIP: lf,
  LOGIC_COMPARE_HELPURL: cf,
  LOGIC_COMPARE_TOOLTIP_EQ: uf,
  LOGIC_COMPARE_TOOLTIP_NEQ: af,
  LOGIC_COMPARE_TOOLTIP_LT: hf,
  LOGIC_COMPARE_TOOLTIP_LTE: df,
  LOGIC_COMPARE_TOOLTIP_GT: $f,
  LOGIC_COMPARE_TOOLTIP_GTE: pf,
  LOGIC_OPERATION_HELPURL: gf,
  LOGIC_OPERATION_TOOLTIP_AND: _f,
  LOGIC_OPERATION_AND: mf,
  LOGIC_OPERATION_TOOLTIP_OR: Tf,
  LOGIC_OPERATION_OR: Ef,
  LOGIC_NEGATE_HELPURL: ff,
  LOGIC_NEGATE_TITLE: bf,
  LOGIC_NEGATE_TOOLTIP: If,
  LOGIC_BOOLEAN_HELPURL: Sf,
  LOGIC_BOOLEAN_TRUE: Rf,
  LOGIC_BOOLEAN_FALSE: Of,
  LOGIC_BOOLEAN_TOOLTIP: Cf,
  LOGIC_NULL_HELPURL: yf,
  LOGIC_NULL: vf,
  LOGIC_NULL_TOOLTIP: Lf,
  LOGIC_TERNARY_HELPURL: Af,
  LOGIC_TERNARY_CONDITION: kf,
  LOGIC_TERNARY_IF_TRUE: Nf,
  LOGIC_TERNARY_IF_FALSE: wf,
  LOGIC_TERNARY_TOOLTIP: Mf,
  MATH_NUMBER_HELPURL: Df,
  MATH_NUMBER_TOOLTIP: Pf,
  MATH_ADDITION_SYMBOL: Bf,
  MATH_SUBTRACTION_SYMBOL: xf,
  MATH_DIVISION_SYMBOL: Ff,
  MATH_MULTIPLICATION_SYMBOL: Uf,
  MATH_POWER_SYMBOL: Hf,
  MATH_TRIG_SIN: Gf,
  MATH_TRIG_COS: Vf,
  MATH_TRIG_TAN: Wf,
  MATH_TRIG_ASIN: Xf,
  MATH_TRIG_ACOS: zf,
  MATH_TRIG_ATAN: Yf,
  MATH_ARITHMETIC_HELPURL: Kf,
  MATH_ARITHMETIC_TOOLTIP_ADD: jf,
  MATH_ARITHMETIC_TOOLTIP_MINUS: Jf,
  MATH_ARITHMETIC_TOOLTIP_MULTIPLY: qf,
  MATH_ARITHMETIC_TOOLTIP_DIVIDE: Zf,
  MATH_ARITHMETIC_TOOLTIP_POWER: Qf,
  MATH_SINGLE_HELPURL: eb,
  MATH_SINGLE_OP_ROOT: tb,
  MATH_SINGLE_TOOLTIP_ROOT: sb,
  MATH_SINGLE_OP_ABSOLUTE: ob,
  MATH_SINGLE_TOOLTIP_ABS: ib,
  MATH_SINGLE_TOOLTIP_NEG: nb,
  MATH_SINGLE_TOOLTIP_LN: rb,
  MATH_SINGLE_TOOLTIP_LOG10: lb,
  MATH_SINGLE_TOOLTIP_EXP: cb,
  MATH_SINGLE_TOOLTIP_POW10: ub,
  MATH_TRIG_HELPURL: ab,
  MATH_TRIG_TOOLTIP_SIN: hb,
  MATH_TRIG_TOOLTIP_COS: db,
  MATH_TRIG_TOOLTIP_TAN: $b,
  MATH_TRIG_TOOLTIP_ASIN: pb,
  MATH_TRIG_TOOLTIP_ACOS: gb,
  MATH_TRIG_TOOLTIP_ATAN: _b,
  MATH_CONSTANT_HELPURL: mb,
  MATH_CONSTANT_TOOLTIP: Tb,
  MATH_IS_EVEN: Eb,
  MATH_IS_ODD: fb,
  MATH_IS_PRIME: bb,
  MATH_IS_WHOLE: Ib,
  MATH_IS_POSITIVE: Sb,
  MATH_IS_NEGATIVE: Rb,
  MATH_IS_DIVISIBLE_BY: Ob,
  MATH_IS_TOOLTIP: Cb,
  MATH_CHANGE_HELPURL: yb,
  MATH_CHANGE_TITLE: vb,
  MATH_CHANGE_TITLE_ITEM: Lb,
  MATH_CHANGE_TOOLTIP: Ab,
  MATH_ROUND_HELPURL: kb,
  MATH_ROUND_TOOLTIP: Nb,
  MATH_ROUND_OPERATOR_ROUND: wb,
  MATH_ROUND_OPERATOR_ROUNDUP: Mb,
  MATH_ROUND_OPERATOR_ROUNDDOWN: Db,
  MATH_ONLIST_HELPURL: Pb,
  MATH_ONLIST_OPERATOR_SUM: Bb,
  MATH_ONLIST_TOOLTIP_SUM: xb,
  MATH_ONLIST_OPERATOR_MIN: Fb,
  MATH_ONLIST_TOOLTIP_MIN: Ub,
  MATH_ONLIST_OPERATOR_MAX: Hb,
  MATH_ONLIST_TOOLTIP_MAX: Gb,
  MATH_ONLIST_OPERATOR_AVERAGE: Vb,
  MATH_ONLIST_TOOLTIP_AVERAGE: Wb,
  MATH_ONLIST_OPERATOR_MEDIAN: Xb,
  MATH_ONLIST_TOOLTIP_MEDIAN: zb,
  MATH_ONLIST_OPERATOR_MODE: Yb,
  MATH_ONLIST_TOOLTIP_MODE: Kb,
  MATH_ONLIST_OPERATOR_STD_DEV: jb,
  MATH_ONLIST_TOOLTIP_STD_DEV: Jb,
  MATH_ONLIST_OPERATOR_RANDOM: qb,
  MATH_ONLIST_TOOLTIP_RANDOM: Zb,
  MATH_MODULO_HELPURL: Qb,
  MATH_MODULO_TITLE: eI,
  MATH_MODULO_TOOLTIP: tI,
  MATH_CONSTRAIN_HELPURL: sI,
  MATH_CONSTRAIN_TITLE: oI,
  MATH_CONSTRAIN_TOOLTIP: iI,
  MATH_RANDOM_INT_HELPURL: nI,
  MATH_RANDOM_INT_TITLE: rI,
  MATH_RANDOM_INT_TOOLTIP: lI,
  MATH_RANDOM_FLOAT_HELPURL: cI,
  MATH_RANDOM_FLOAT_TITLE_RANDOM: uI,
  MATH_RANDOM_FLOAT_TOOLTIP: aI,
  MATH_ATAN2_HELPURL: hI,
  MATH_ATAN2_TITLE: dI,
  MATH_ATAN2_TOOLTIP: $I,
  TEXT_TEXT_HELPURL: pI,
  TEXT_TEXT_TOOLTIP: gI,
  TEXT_JOIN_HELPURL: _I,
  TEXT_JOIN_TITLE_CREATEWITH: mI,
  TEXT_JOIN_TOOLTIP: TI,
  TEXT_CREATE_JOIN_TITLE_JOIN: EI,
  TEXT_CREATE_JOIN_TOOLTIP: fI,
  TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: bI,
  TEXT_CREATE_JOIN_ITEM_TOOLTIP: II,
  TEXT_APPEND_HELPURL: SI,
  TEXT_APPEND_TITLE: RI,
  TEXT_APPEND_VARIABLE: OI,
  TEXT_APPEND_TOOLTIP: CI,
  TEXT_LENGTH_HELPURL: yI,
  TEXT_LENGTH_TITLE: vI,
  TEXT_LENGTH_TOOLTIP: LI,
  TEXT_ISEMPTY_HELPURL: AI,
  TEXT_ISEMPTY_TITLE: kI,
  TEXT_ISEMPTY_TOOLTIP: NI,
  TEXT_INDEXOF_HELPURL: wI,
  TEXT_INDEXOF_TOOLTIP: MI,
  TEXT_INDEXOF_TITLE: DI,
  TEXT_INDEXOF_OPERATOR_FIRST: PI,
  TEXT_INDEXOF_OPERATOR_LAST: BI,
  TEXT_CHARAT_HELPURL: xI,
  TEXT_CHARAT_TITLE: FI,
  TEXT_CHARAT_FROM_START: UI,
  TEXT_CHARAT_FROM_END: HI,
  TEXT_CHARAT_FIRST: GI,
  TEXT_CHARAT_LAST: VI,
  TEXT_CHARAT_RANDOM: WI,
  TEXT_CHARAT_TAIL: XI,
  TEXT_CHARAT_TOOLTIP: zI,
  TEXT_GET_SUBSTRING_TOOLTIP: YI,
  TEXT_GET_SUBSTRING_HELPURL: KI,
  TEXT_GET_SUBSTRING_INPUT_IN_TEXT: jI,
  TEXT_GET_SUBSTRING_START_FROM_START: JI,
  TEXT_GET_SUBSTRING_START_FROM_END: qI,
  TEXT_GET_SUBSTRING_START_FIRST: ZI,
  TEXT_GET_SUBSTRING_END_FROM_START: QI,
  TEXT_GET_SUBSTRING_END_FROM_END: eS,
  TEXT_GET_SUBSTRING_END_LAST: tS,
  TEXT_GET_SUBSTRING_TAIL: sS,
  TEXT_CHANGECASE_HELPURL: oS,
  TEXT_CHANGECASE_TOOLTIP: iS,
  TEXT_CHANGECASE_OPERATOR_UPPERCASE: nS,
  TEXT_CHANGECASE_OPERATOR_LOWERCASE: rS,
  TEXT_CHANGECASE_OPERATOR_TITLECASE: lS,
  TEXT_TRIM_HELPURL: cS,
  TEXT_TRIM_TOOLTIP: uS,
  TEXT_TRIM_OPERATOR_BOTH: aS,
  TEXT_TRIM_OPERATOR_LEFT: hS,
  TEXT_TRIM_OPERATOR_RIGHT: dS,
  TEXT_PRINT_HELPURL: $S,
  TEXT_PRINT_TITLE: pS,
  TEXT_PRINT_TOOLTIP: gS,
  TEXT_PROMPT_HELPURL: _S,
  TEXT_PROMPT_TYPE_TEXT: mS,
  TEXT_PROMPT_TYPE_NUMBER: TS,
  TEXT_PROMPT_TOOLTIP_NUMBER: ES,
  TEXT_PROMPT_TOOLTIP_TEXT: fS,
  TEXT_COUNT_MESSAGE0: bS,
  TEXT_COUNT_HELPURL: IS,
  TEXT_COUNT_TOOLTIP: SS,
  TEXT_REPLACE_MESSAGE0: RS,
  TEXT_REPLACE_HELPURL: OS,
  TEXT_REPLACE_TOOLTIP: CS,
  TEXT_REVERSE_MESSAGE0: yS,
  TEXT_REVERSE_HELPURL: vS,
  TEXT_REVERSE_TOOLTIP: LS,
  LISTS_CREATE_EMPTY_HELPURL: AS,
  LISTS_CREATE_EMPTY_TITLE: kS,
  LISTS_CREATE_EMPTY_TOOLTIP: NS,
  LISTS_CREATE_WITH_HELPURL: wS,
  LISTS_CREATE_WITH_TOOLTIP: MS,
  LISTS_CREATE_WITH_INPUT_WITH: DS,
  LISTS_CREATE_WITH_CONTAINER_TITLE_ADD: PS,
  LISTS_CREATE_WITH_CONTAINER_TOOLTIP: BS,
  LISTS_CREATE_WITH_ITEM_TITLE: xS,
  LISTS_CREATE_WITH_ITEM_TOOLTIP: FS,
  LISTS_REPEAT_HELPURL: US,
  LISTS_REPEAT_TOOLTIP: HS,
  LISTS_REPEAT_TITLE: GS,
  LISTS_LENGTH_HELPURL: VS,
  LISTS_LENGTH_TITLE: WS,
  LISTS_LENGTH_TOOLTIP: XS,
  LISTS_ISEMPTY_HELPURL: zS,
  LISTS_ISEMPTY_TITLE: YS,
  LISTS_ISEMPTY_TOOLTIP: KS,
  LISTS_INLIST: jS,
  LISTS_INDEX_OF_HELPURL: JS,
  LISTS_INDEX_OF_INPUT_IN_LIST: qS,
  LISTS_INDEX_OF_FIRST: ZS,
  LISTS_INDEX_OF_LAST: QS,
  LISTS_INDEX_OF_TOOLTIP: eR,
  LISTS_GET_INDEX_HELPURL: tR,
  LISTS_GET_INDEX_GET: sR,
  LISTS_GET_INDEX_GET_REMOVE: oR,
  LISTS_GET_INDEX_REMOVE: iR,
  LISTS_GET_INDEX_FROM_START: nR,
  LISTS_GET_INDEX_FROM_END: rR,
  LISTS_GET_INDEX_FIRST: lR,
  LISTS_GET_INDEX_LAST: cR,
  LISTS_GET_INDEX_RANDOM: uR,
  LISTS_GET_INDEX_TAIL: aR,
  LISTS_GET_INDEX_INPUT_IN_LIST: hR,
  LISTS_INDEX_FROM_START_TOOLTIP: dR,
  LISTS_INDEX_FROM_END_TOOLTIP: $R,
  LISTS_GET_INDEX_TOOLTIP_GET_FROM: pR,
  LISTS_GET_INDEX_TOOLTIP_GET_FIRST: gR,
  LISTS_GET_INDEX_TOOLTIP_GET_LAST: _R,
  LISTS_GET_INDEX_TOOLTIP_GET_RANDOM: mR,
  LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM: TR,
  LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST: ER,
  LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST: fR,
  LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM: bR,
  LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM: IR,
  LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST: SR,
  LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST: RR,
  LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM: OR,
  LISTS_SET_INDEX_HELPURL: CR,
  LISTS_SET_INDEX_INPUT_IN_LIST: yR,
  LISTS_SET_INDEX_SET: vR,
  LISTS_SET_INDEX_INSERT: LR,
  LISTS_SET_INDEX_INPUT_TO: AR,
  LISTS_SET_INDEX_TOOLTIP_SET_FROM: kR,
  LISTS_SET_INDEX_TOOLTIP_SET_FIRST: NR,
  LISTS_SET_INDEX_TOOLTIP_SET_LAST: wR,
  LISTS_SET_INDEX_TOOLTIP_SET_RANDOM: MR,
  LISTS_SET_INDEX_TOOLTIP_INSERT_FROM: DR,
  LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST: PR,
  LISTS_SET_INDEX_TOOLTIP_INSERT_LAST: BR,
  LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM: xR,
  LISTS_GET_SUBLIST_HELPURL: FR,
  LISTS_GET_SUBLIST_INPUT_IN_LIST: UR,
  LISTS_GET_SUBLIST_START_FROM_START: HR,
  LISTS_GET_SUBLIST_START_FROM_END: GR,
  LISTS_GET_SUBLIST_START_FIRST: VR,
  LISTS_GET_SUBLIST_END_FROM_START: WR,
  LISTS_GET_SUBLIST_END_FROM_END: XR,
  LISTS_GET_SUBLIST_END_LAST: zR,
  LISTS_GET_SUBLIST_TAIL: YR,
  LISTS_GET_SUBLIST_TOOLTIP: KR,
  LISTS_SORT_HELPURL: jR,
  LISTS_SORT_TITLE: JR,
  LISTS_SORT_TOOLTIP: qR,
  LISTS_SORT_ORDER_ASCENDING: ZR,
  LISTS_SORT_ORDER_DESCENDING: QR,
  LISTS_SORT_TYPE_NUMERIC: eO,
  LISTS_SORT_TYPE_TEXT: tO,
  LISTS_SORT_TYPE_IGNORECASE: sO,
  LISTS_SPLIT_HELPURL: oO,
  LISTS_SPLIT_LIST_FROM_TEXT: iO,
  LISTS_SPLIT_TEXT_FROM_LIST: nO,
  LISTS_SPLIT_WITH_DELIMITER: rO,
  LISTS_SPLIT_TOOLTIP_SPLIT: lO,
  LISTS_SPLIT_TOOLTIP_JOIN: cO,
  LISTS_REVERSE_HELPURL: uO,
  LISTS_REVERSE_MESSAGE0: aO,
  LISTS_REVERSE_TOOLTIP: hO,
  ORDINAL_NUMBER_SUFFIX: dO,
  VARIABLES_GET_HELPURL: $O,
  VARIABLES_GET_TOOLTIP: pO,
  VARIABLES_GET_CREATE_SET: gO,
  VARIABLES_SET_HELPURL: _O,
  VARIABLES_SET: mO,
  VARIABLES_SET_TOOLTIP: TO,
  VARIABLES_SET_CREATE_GET: EO,
  PROCEDURES_DEFNORETURN_HELPURL: fO,
  PROCEDURES_DEFNORETURN_TITLE: bO,
  PROCEDURES_DEFNORETURN_PROCEDURE: IO,
  PROCEDURES_BEFORE_PARAMS: SO,
  PROCEDURES_CALL_BEFORE_PARAMS: RO,
  PROCEDURES_CALL_DISABLED_DEF_WARNING: OO,
  PROCEDURES_DEFNORETURN_DO: CO,
  PROCEDURES_DEFNORETURN_TOOLTIP: yO,
  PROCEDURES_DEFNORETURN_COMMENT: vO,
  PROCEDURES_DEFRETURN_HELPURL: LO,
  PROCEDURES_DEFRETURN_TITLE: AO,
  PROCEDURES_DEFRETURN_PROCEDURE: kO,
  PROCEDURES_DEFRETURN_DO: NO,
  PROCEDURES_DEFRETURN_COMMENT: wO,
  PROCEDURES_DEFRETURN_RETURN: MO,
  PROCEDURES_DEFRETURN_TOOLTIP: DO,
  PROCEDURES_ALLOW_STATEMENTS: PO,
  PROCEDURES_DEF_DUPLICATE_WARNING: BO,
  PROCEDURES_CALLNORETURN_HELPURL: xO,
  PROCEDURES_CALLNORETURN_TOOLTIP: FO,
  PROCEDURES_CALLRETURN_HELPURL: UO,
  PROCEDURES_CALLRETURN_TOOLTIP: HO,
  PROCEDURES_MUTATORCONTAINER_TITLE: GO,
  PROCEDURES_MUTATORCONTAINER_TOOLTIP: VO,
  PROCEDURES_MUTATORARG_TITLE: WO,
  PROCEDURES_MUTATORARG_TOOLTIP: XO,
  PROCEDURES_HIGHLIGHT_DEF: zO,
  PROCEDURES_CREATE_DO: YO,
  PROCEDURES_IFRETURN_TOOLTIP: KO,
  PROCEDURES_IFRETURN_HELPURL: jO,
  PROCEDURES_IFRETURN_WARNING: JO,
  WORKSPACE_COMMENT_DEFAULT_TEXT: qO,
  WORKSPACE_ARIA_LABEL: ZO,
  COLLAPSED_WARNINGS_WARNING: QO,
  DIALOG_OK: eC,
  DIALOG_CANCEL: tC,
  EDIT_BLOCK_CONTENTS: sC,
  MOVE_BLOCK: oC,
  WINDOWS: iC,
  MAC_OS: nC,
  CHROME_OS: rC,
  LINUX: lC,
  UNKNOWN: cC,
  CONTROL_KEY: uC,
  COMMAND_KEY: aC,
  OPTION_KEY: hC,
  ALT_KEY: dC,
  CUT_SHORTCUT: $C,
  COPY_SHORTCUT: pC,
  PASTE_SHORTCUT: gC,
  HELP_PROMPT: _C,
  SHORTCUTS_GENERAL: mC,
  SHORTCUTS_EDITING: TC,
  SHORTCUTS_CODE_NAVIGATION: EC,
  KEYBOARD_NAV_UNCONSTRAINED_MOVE_HINT: fC,
  KEYBOARD_NAV_CONSTRAINED_MOVE_HINT: bC,
  KEYBOARD_NAV_COPIED_HINT: IC,
  KEYBOARD_NAV_CUT_HINT: SC
} = hT, RC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ADD_COMMENT: OT,
  ALT_KEY: dC,
  CANNOT_DELETE_VARIABLE_PROCEDURE: oE,
  CHANGE_VALUE_TITLE: WT,
  CHROME_OS: rC,
  CLEAN_UP: wT,
  CLOSE: MT,
  COLLAPSED_WARNINGS_WARNING: QO,
  COLLAPSE_ALL: PT,
  COLLAPSE_BLOCK: DT,
  COLOUR_BLEND_COLOUR1: TE,
  COLOUR_BLEND_COLOUR2: EE,
  COLOUR_BLEND_HELPURL: _E,
  COLOUR_BLEND_RATIO: fE,
  COLOUR_BLEND_TITLE: mE,
  COLOUR_BLEND_TOOLTIP: bE,
  COLOUR_HUE: mT,
  COLOUR_PICKER_HELPURL: nE,
  COLOUR_PICKER_TOOLTIP: rE,
  COLOUR_RANDOM_HELPURL: lE,
  COLOUR_RANDOM_TITLE: cE,
  COLOUR_RANDOM_TOOLTIP: uE,
  COLOUR_RGB_BLUE: pE,
  COLOUR_RGB_GREEN: $E,
  COLOUR_RGB_HELPURL: aE,
  COLOUR_RGB_RED: dE,
  COLOUR_RGB_TITLE: hE,
  COLOUR_RGB_TOOLTIP: gE,
  COMMAND_KEY: aC,
  CONTROLS_FLOW_STATEMENTS_HELPURL: UE,
  CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK: HE,
  CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE: GE,
  CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK: VE,
  CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE: WE,
  CONTROLS_FLOW_STATEMENTS_WARNING: XE,
  CONTROLS_FOREACH_HELPURL: PE,
  CONTROLS_FOREACH_INPUT_DO: xE,
  CONTROLS_FOREACH_TITLE: BE,
  CONTROLS_FOREACH_TOOLTIP: FE,
  CONTROLS_FOR_HELPURL: NE,
  CONTROLS_FOR_INPUT_DO: DE,
  CONTROLS_FOR_TITLE: ME,
  CONTROLS_FOR_TOOLTIP: wE,
  CONTROLS_IF_ELSEIF_TITLE_ELSEIF: of,
  CONTROLS_IF_ELSEIF_TOOLTIP: nf,
  CONTROLS_IF_ELSE_TITLE_ELSE: rf,
  CONTROLS_IF_ELSE_TOOLTIP: lf,
  CONTROLS_IF_HELPURL: zE,
  CONTROLS_IF_IF_TITLE_IF: tf,
  CONTROLS_IF_IF_TOOLTIP: sf,
  CONTROLS_IF_MSG_ELSE: QE,
  CONTROLS_IF_MSG_ELSEIF: ZE,
  CONTROLS_IF_MSG_IF: qE,
  CONTROLS_IF_MSG_THEN: ef,
  CONTROLS_IF_TOOLTIP_1: YE,
  CONTROLS_IF_TOOLTIP_2: KE,
  CONTROLS_IF_TOOLTIP_3: jE,
  CONTROLS_IF_TOOLTIP_4: JE,
  CONTROLS_REPEAT_HELPURL: IE,
  CONTROLS_REPEAT_INPUT_DO: RE,
  CONTROLS_REPEAT_TITLE: SE,
  CONTROLS_REPEAT_TOOLTIP: OE,
  CONTROLS_WHILEUNTIL_HELPURL: CE,
  CONTROLS_WHILEUNTIL_INPUT_DO: yE,
  CONTROLS_WHILEUNTIL_OPERATOR_UNTIL: LE,
  CONTROLS_WHILEUNTIL_OPERATOR_WHILE: vE,
  CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL: kE,
  CONTROLS_WHILEUNTIL_TOOLTIP_WHILE: AE,
  CONTROL_KEY: uC,
  COPY_SHORTCUT: pC,
  CUT_SHORTCUT: $C,
  DELETE_ALL_BLOCKS: NT,
  DELETE_BLOCK: AT,
  DELETE_VARIABLE: iE,
  DELETE_VARIABLE_CONFIRMATION: sE,
  DELETE_X_BLOCKS: kT,
  DIALOG_CANCEL: tC,
  DIALOG_OK: eC,
  DISABLE_BLOCK: FT,
  DUPLICATE_BLOCK: RT,
  DUPLICATE_COMMENT: yT,
  EDIT_BLOCK_CONTENTS: sC,
  ENABLE_BLOCK: UT,
  EXPAND_ALL: xT,
  EXPAND_BLOCK: BT,
  EXTERNAL_INPUTS: vT,
  HELP: HT,
  HELP_PROMPT: _C,
  INLINE_INPUTS: LT,
  KEYBOARD_NAV_CONSTRAINED_MOVE_HINT: bC,
  KEYBOARD_NAV_COPIED_HINT: IC,
  KEYBOARD_NAV_CUT_HINT: SC,
  KEYBOARD_NAV_UNCONSTRAINED_MOVE_HINT: fC,
  LINUX: lC,
  LISTS_CREATE_EMPTY_HELPURL: AS,
  LISTS_CREATE_EMPTY_TITLE: kS,
  LISTS_CREATE_EMPTY_TOOLTIP: NS,
  LISTS_CREATE_WITH_CONTAINER_TITLE_ADD: PS,
  LISTS_CREATE_WITH_CONTAINER_TOOLTIP: BS,
  LISTS_CREATE_WITH_HELPURL: wS,
  LISTS_CREATE_WITH_INPUT_WITH: DS,
  LISTS_CREATE_WITH_ITEM_TITLE: xS,
  LISTS_CREATE_WITH_ITEM_TOOLTIP: FS,
  LISTS_CREATE_WITH_TOOLTIP: MS,
  LISTS_GET_INDEX_FIRST: lR,
  LISTS_GET_INDEX_FROM_END: rR,
  LISTS_GET_INDEX_FROM_START: nR,
  LISTS_GET_INDEX_GET: sR,
  LISTS_GET_INDEX_GET_REMOVE: oR,
  LISTS_GET_INDEX_HELPURL: tR,
  LISTS_GET_INDEX_INPUT_IN_LIST: hR,
  LISTS_GET_INDEX_LAST: cR,
  LISTS_GET_INDEX_RANDOM: uR,
  LISTS_GET_INDEX_REMOVE: iR,
  LISTS_GET_INDEX_TAIL: aR,
  LISTS_GET_INDEX_TOOLTIP_GET_FIRST: gR,
  LISTS_GET_INDEX_TOOLTIP_GET_FROM: pR,
  LISTS_GET_INDEX_TOOLTIP_GET_LAST: _R,
  LISTS_GET_INDEX_TOOLTIP_GET_RANDOM: mR,
  LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST: ER,
  LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM: TR,
  LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST: fR,
  LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM: bR,
  LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST: SR,
  LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM: IR,
  LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST: RR,
  LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM: OR,
  LISTS_GET_SUBLIST_END_FROM_END: XR,
  LISTS_GET_SUBLIST_END_FROM_START: WR,
  LISTS_GET_SUBLIST_END_LAST: zR,
  LISTS_GET_SUBLIST_HELPURL: FR,
  LISTS_GET_SUBLIST_INPUT_IN_LIST: UR,
  LISTS_GET_SUBLIST_START_FIRST: VR,
  LISTS_GET_SUBLIST_START_FROM_END: GR,
  LISTS_GET_SUBLIST_START_FROM_START: HR,
  LISTS_GET_SUBLIST_TAIL: YR,
  LISTS_GET_SUBLIST_TOOLTIP: KR,
  LISTS_HUE: _T,
  LISTS_INDEX_FROM_END_TOOLTIP: $R,
  LISTS_INDEX_FROM_START_TOOLTIP: dR,
  LISTS_INDEX_OF_FIRST: ZS,
  LISTS_INDEX_OF_HELPURL: JS,
  LISTS_INDEX_OF_INPUT_IN_LIST: qS,
  LISTS_INDEX_OF_LAST: QS,
  LISTS_INDEX_OF_TOOLTIP: eR,
  LISTS_INLIST: jS,
  LISTS_ISEMPTY_HELPURL: zS,
  LISTS_ISEMPTY_TITLE: YS,
  LISTS_ISEMPTY_TOOLTIP: KS,
  LISTS_LENGTH_HELPURL: VS,
  LISTS_LENGTH_TITLE: WS,
  LISTS_LENGTH_TOOLTIP: XS,
  LISTS_REPEAT_HELPURL: US,
  LISTS_REPEAT_TITLE: GS,
  LISTS_REPEAT_TOOLTIP: HS,
  LISTS_REVERSE_HELPURL: uO,
  LISTS_REVERSE_MESSAGE0: aO,
  LISTS_REVERSE_TOOLTIP: hO,
  LISTS_SET_INDEX_HELPURL: CR,
  LISTS_SET_INDEX_INPUT_IN_LIST: yR,
  LISTS_SET_INDEX_INPUT_TO: AR,
  LISTS_SET_INDEX_INSERT: LR,
  LISTS_SET_INDEX_SET: vR,
  LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST: PR,
  LISTS_SET_INDEX_TOOLTIP_INSERT_FROM: DR,
  LISTS_SET_INDEX_TOOLTIP_INSERT_LAST: BR,
  LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM: xR,
  LISTS_SET_INDEX_TOOLTIP_SET_FIRST: NR,
  LISTS_SET_INDEX_TOOLTIP_SET_FROM: kR,
  LISTS_SET_INDEX_TOOLTIP_SET_LAST: wR,
  LISTS_SET_INDEX_TOOLTIP_SET_RANDOM: MR,
  LISTS_SORT_HELPURL: jR,
  LISTS_SORT_ORDER_ASCENDING: ZR,
  LISTS_SORT_ORDER_DESCENDING: QR,
  LISTS_SORT_TITLE: JR,
  LISTS_SORT_TOOLTIP: qR,
  LISTS_SORT_TYPE_IGNORECASE: sO,
  LISTS_SORT_TYPE_NUMERIC: eO,
  LISTS_SORT_TYPE_TEXT: tO,
  LISTS_SPLIT_HELPURL: oO,
  LISTS_SPLIT_LIST_FROM_TEXT: iO,
  LISTS_SPLIT_TEXT_FROM_LIST: nO,
  LISTS_SPLIT_TOOLTIP_JOIN: cO,
  LISTS_SPLIT_TOOLTIP_SPLIT: lO,
  LISTS_SPLIT_WITH_DELIMITER: rO,
  LOGIC_BOOLEAN_FALSE: Of,
  LOGIC_BOOLEAN_HELPURL: Sf,
  LOGIC_BOOLEAN_TOOLTIP: Cf,
  LOGIC_BOOLEAN_TRUE: Rf,
  LOGIC_COMPARE_HELPURL: cf,
  LOGIC_COMPARE_TOOLTIP_EQ: uf,
  LOGIC_COMPARE_TOOLTIP_GT: $f,
  LOGIC_COMPARE_TOOLTIP_GTE: pf,
  LOGIC_COMPARE_TOOLTIP_LT: hf,
  LOGIC_COMPARE_TOOLTIP_LTE: df,
  LOGIC_COMPARE_TOOLTIP_NEQ: af,
  LOGIC_HUE: dT,
  LOGIC_NEGATE_HELPURL: ff,
  LOGIC_NEGATE_TITLE: bf,
  LOGIC_NEGATE_TOOLTIP: If,
  LOGIC_NULL: vf,
  LOGIC_NULL_HELPURL: yf,
  LOGIC_NULL_TOOLTIP: Lf,
  LOGIC_OPERATION_AND: mf,
  LOGIC_OPERATION_HELPURL: gf,
  LOGIC_OPERATION_OR: Ef,
  LOGIC_OPERATION_TOOLTIP_AND: _f,
  LOGIC_OPERATION_TOOLTIP_OR: Tf,
  LOGIC_TERNARY_CONDITION: kf,
  LOGIC_TERNARY_HELPURL: Af,
  LOGIC_TERNARY_IF_FALSE: wf,
  LOGIC_TERNARY_IF_TRUE: Nf,
  LOGIC_TERNARY_TOOLTIP: Mf,
  LOOPS_HUE: $T,
  MAC_OS: nC,
  MATH_ADDITION_SYMBOL: Bf,
  MATH_ARITHMETIC_HELPURL: Kf,
  MATH_ARITHMETIC_TOOLTIP_ADD: jf,
  MATH_ARITHMETIC_TOOLTIP_DIVIDE: Zf,
  MATH_ARITHMETIC_TOOLTIP_MINUS: Jf,
  MATH_ARITHMETIC_TOOLTIP_MULTIPLY: qf,
  MATH_ARITHMETIC_TOOLTIP_POWER: Qf,
  MATH_ATAN2_HELPURL: hI,
  MATH_ATAN2_TITLE: dI,
  MATH_ATAN2_TOOLTIP: $I,
  MATH_CHANGE_HELPURL: yb,
  MATH_CHANGE_TITLE: vb,
  MATH_CHANGE_TITLE_ITEM: Lb,
  MATH_CHANGE_TOOLTIP: Ab,
  MATH_CONSTANT_HELPURL: mb,
  MATH_CONSTANT_TOOLTIP: Tb,
  MATH_CONSTRAIN_HELPURL: sI,
  MATH_CONSTRAIN_TITLE: oI,
  MATH_CONSTRAIN_TOOLTIP: iI,
  MATH_DIVISION_SYMBOL: Ff,
  MATH_HUE: pT,
  MATH_IS_DIVISIBLE_BY: Ob,
  MATH_IS_EVEN: Eb,
  MATH_IS_NEGATIVE: Rb,
  MATH_IS_ODD: fb,
  MATH_IS_POSITIVE: Sb,
  MATH_IS_PRIME: bb,
  MATH_IS_TOOLTIP: Cb,
  MATH_IS_WHOLE: Ib,
  MATH_MODULO_HELPURL: Qb,
  MATH_MODULO_TITLE: eI,
  MATH_MODULO_TOOLTIP: tI,
  MATH_MULTIPLICATION_SYMBOL: Uf,
  MATH_NUMBER_HELPURL: Df,
  MATH_NUMBER_TOOLTIP: Pf,
  MATH_ONLIST_HELPURL: Pb,
  MATH_ONLIST_OPERATOR_AVERAGE: Vb,
  MATH_ONLIST_OPERATOR_MAX: Hb,
  MATH_ONLIST_OPERATOR_MEDIAN: Xb,
  MATH_ONLIST_OPERATOR_MIN: Fb,
  MATH_ONLIST_OPERATOR_MODE: Yb,
  MATH_ONLIST_OPERATOR_RANDOM: qb,
  MATH_ONLIST_OPERATOR_STD_DEV: jb,
  MATH_ONLIST_OPERATOR_SUM: Bb,
  MATH_ONLIST_TOOLTIP_AVERAGE: Wb,
  MATH_ONLIST_TOOLTIP_MAX: Gb,
  MATH_ONLIST_TOOLTIP_MEDIAN: zb,
  MATH_ONLIST_TOOLTIP_MIN: Ub,
  MATH_ONLIST_TOOLTIP_MODE: Kb,
  MATH_ONLIST_TOOLTIP_RANDOM: Zb,
  MATH_ONLIST_TOOLTIP_STD_DEV: Jb,
  MATH_ONLIST_TOOLTIP_SUM: xb,
  MATH_POWER_SYMBOL: Hf,
  MATH_RANDOM_FLOAT_HELPURL: cI,
  MATH_RANDOM_FLOAT_TITLE_RANDOM: uI,
  MATH_RANDOM_FLOAT_TOOLTIP: aI,
  MATH_RANDOM_INT_HELPURL: nI,
  MATH_RANDOM_INT_TITLE: rI,
  MATH_RANDOM_INT_TOOLTIP: lI,
  MATH_ROUND_HELPURL: kb,
  MATH_ROUND_OPERATOR_ROUND: wb,
  MATH_ROUND_OPERATOR_ROUNDDOWN: Db,
  MATH_ROUND_OPERATOR_ROUNDUP: Mb,
  MATH_ROUND_TOOLTIP: Nb,
  MATH_SINGLE_HELPURL: eb,
  MATH_SINGLE_OP_ABSOLUTE: ob,
  MATH_SINGLE_OP_ROOT: tb,
  MATH_SINGLE_TOOLTIP_ABS: ib,
  MATH_SINGLE_TOOLTIP_EXP: cb,
  MATH_SINGLE_TOOLTIP_LN: rb,
  MATH_SINGLE_TOOLTIP_LOG10: lb,
  MATH_SINGLE_TOOLTIP_NEG: nb,
  MATH_SINGLE_TOOLTIP_POW10: ub,
  MATH_SINGLE_TOOLTIP_ROOT: sb,
  MATH_SUBTRACTION_SYMBOL: xf,
  MATH_TRIG_ACOS: zf,
  MATH_TRIG_ASIN: Xf,
  MATH_TRIG_ATAN: Yf,
  MATH_TRIG_COS: Vf,
  MATH_TRIG_HELPURL: ab,
  MATH_TRIG_SIN: Gf,
  MATH_TRIG_TAN: Wf,
  MATH_TRIG_TOOLTIP_ACOS: gb,
  MATH_TRIG_TOOLTIP_ASIN: pb,
  MATH_TRIG_TOOLTIP_ATAN: _b,
  MATH_TRIG_TOOLTIP_COS: db,
  MATH_TRIG_TOOLTIP_SIN: hb,
  MATH_TRIG_TOOLTIP_TAN: $b,
  MOVE_BLOCK: oC,
  NEW_COLOUR_VARIABLE: JT,
  NEW_NUMBER_VARIABLE: jT,
  NEW_STRING_VARIABLE: KT,
  NEW_VARIABLE: YT,
  NEW_VARIABLE_TITLE: ZT,
  NEW_VARIABLE_TYPE_TITLE: qT,
  OPTION_KEY: hC,
  ORDINAL_NUMBER_SUFFIX: dO,
  PASTE_SHORTCUT: gC,
  PROCEDURES_ALLOW_STATEMENTS: PO,
  PROCEDURES_BEFORE_PARAMS: SO,
  PROCEDURES_CALLNORETURN_HELPURL: xO,
  PROCEDURES_CALLNORETURN_TOOLTIP: FO,
  PROCEDURES_CALLRETURN_HELPURL: UO,
  PROCEDURES_CALLRETURN_TOOLTIP: HO,
  PROCEDURES_CALL_BEFORE_PARAMS: RO,
  PROCEDURES_CALL_DISABLED_DEF_WARNING: OO,
  PROCEDURES_CREATE_DO: YO,
  PROCEDURES_DEFNORETURN_COMMENT: vO,
  PROCEDURES_DEFNORETURN_DO: CO,
  PROCEDURES_DEFNORETURN_HELPURL: fO,
  PROCEDURES_DEFNORETURN_PROCEDURE: IO,
  PROCEDURES_DEFNORETURN_TITLE: bO,
  PROCEDURES_DEFNORETURN_TOOLTIP: yO,
  PROCEDURES_DEFRETURN_COMMENT: wO,
  PROCEDURES_DEFRETURN_DO: NO,
  PROCEDURES_DEFRETURN_HELPURL: LO,
  PROCEDURES_DEFRETURN_PROCEDURE: kO,
  PROCEDURES_DEFRETURN_RETURN: MO,
  PROCEDURES_DEFRETURN_TITLE: AO,
  PROCEDURES_DEFRETURN_TOOLTIP: DO,
  PROCEDURES_DEF_DUPLICATE_WARNING: BO,
  PROCEDURES_HIGHLIGHT_DEF: zO,
  PROCEDURES_HUE: fT,
  PROCEDURES_IFRETURN_HELPURL: jO,
  PROCEDURES_IFRETURN_TOOLTIP: KO,
  PROCEDURES_IFRETURN_WARNING: JO,
  PROCEDURES_MUTATORARG_TITLE: WO,
  PROCEDURES_MUTATORARG_TOOLTIP: XO,
  PROCEDURES_MUTATORCONTAINER_TITLE: GO,
  PROCEDURES_MUTATORCONTAINER_TOOLTIP: VO,
  REDO: VT,
  REMOVE_COMMENT: CT,
  RENAME_VARIABLE: XT,
  RENAME_VARIABLE_TITLE: zT,
  SHORTCUTS_CODE_NAVIGATION: EC,
  SHORTCUTS_EDITING: TC,
  SHORTCUTS_GENERAL: mC,
  TEXTS_HUE: gT,
  TEXT_APPEND_HELPURL: SI,
  TEXT_APPEND_TITLE: RI,
  TEXT_APPEND_TOOLTIP: CI,
  TEXT_APPEND_VARIABLE: OI,
  TEXT_CHANGECASE_HELPURL: oS,
  TEXT_CHANGECASE_OPERATOR_LOWERCASE: rS,
  TEXT_CHANGECASE_OPERATOR_TITLECASE: lS,
  TEXT_CHANGECASE_OPERATOR_UPPERCASE: nS,
  TEXT_CHANGECASE_TOOLTIP: iS,
  TEXT_CHARAT_FIRST: GI,
  TEXT_CHARAT_FROM_END: HI,
  TEXT_CHARAT_FROM_START: UI,
  TEXT_CHARAT_HELPURL: xI,
  TEXT_CHARAT_LAST: VI,
  TEXT_CHARAT_RANDOM: WI,
  TEXT_CHARAT_TAIL: XI,
  TEXT_CHARAT_TITLE: FI,
  TEXT_CHARAT_TOOLTIP: zI,
  TEXT_COUNT_HELPURL: IS,
  TEXT_COUNT_MESSAGE0: bS,
  TEXT_COUNT_TOOLTIP: SS,
  TEXT_CREATE_JOIN_ITEM_TITLE_ITEM: bI,
  TEXT_CREATE_JOIN_ITEM_TOOLTIP: II,
  TEXT_CREATE_JOIN_TITLE_JOIN: EI,
  TEXT_CREATE_JOIN_TOOLTIP: fI,
  TEXT_GET_SUBSTRING_END_FROM_END: eS,
  TEXT_GET_SUBSTRING_END_FROM_START: QI,
  TEXT_GET_SUBSTRING_END_LAST: tS,
  TEXT_GET_SUBSTRING_HELPURL: KI,
  TEXT_GET_SUBSTRING_INPUT_IN_TEXT: jI,
  TEXT_GET_SUBSTRING_START_FIRST: ZI,
  TEXT_GET_SUBSTRING_START_FROM_END: qI,
  TEXT_GET_SUBSTRING_START_FROM_START: JI,
  TEXT_GET_SUBSTRING_TAIL: sS,
  TEXT_GET_SUBSTRING_TOOLTIP: YI,
  TEXT_INDEXOF_HELPURL: wI,
  TEXT_INDEXOF_OPERATOR_FIRST: PI,
  TEXT_INDEXOF_OPERATOR_LAST: BI,
  TEXT_INDEXOF_TITLE: DI,
  TEXT_INDEXOF_TOOLTIP: MI,
  TEXT_ISEMPTY_HELPURL: AI,
  TEXT_ISEMPTY_TITLE: kI,
  TEXT_ISEMPTY_TOOLTIP: NI,
  TEXT_JOIN_HELPURL: _I,
  TEXT_JOIN_TITLE_CREATEWITH: mI,
  TEXT_JOIN_TOOLTIP: TI,
  TEXT_LENGTH_HELPURL: yI,
  TEXT_LENGTH_TITLE: vI,
  TEXT_LENGTH_TOOLTIP: LI,
  TEXT_PRINT_HELPURL: $S,
  TEXT_PRINT_TITLE: pS,
  TEXT_PRINT_TOOLTIP: gS,
  TEXT_PROMPT_HELPURL: _S,
  TEXT_PROMPT_TOOLTIP_NUMBER: ES,
  TEXT_PROMPT_TOOLTIP_TEXT: fS,
  TEXT_PROMPT_TYPE_NUMBER: TS,
  TEXT_PROMPT_TYPE_TEXT: mS,
  TEXT_REPLACE_HELPURL: OS,
  TEXT_REPLACE_MESSAGE0: RS,
  TEXT_REPLACE_TOOLTIP: CS,
  TEXT_REVERSE_HELPURL: vS,
  TEXT_REVERSE_MESSAGE0: yS,
  TEXT_REVERSE_TOOLTIP: LS,
  TEXT_TEXT_HELPURL: pI,
  TEXT_TEXT_TOOLTIP: gI,
  TEXT_TRIM_HELPURL: cS,
  TEXT_TRIM_OPERATOR_BOTH: aS,
  TEXT_TRIM_OPERATOR_LEFT: hS,
  TEXT_TRIM_OPERATOR_RIGHT: dS,
  TEXT_TRIM_TOOLTIP: uS,
  TODAY: ST,
  UNDO: GT,
  UNKNOWN: cC,
  UNNAMED_KEY: IT,
  VARIABLES_DEFAULT_NAME: bT,
  VARIABLES_DYNAMIC_HUE: ET,
  VARIABLES_GET_CREATE_SET: gO,
  VARIABLES_GET_HELPURL: $O,
  VARIABLES_GET_TOOLTIP: pO,
  VARIABLES_HUE: TT,
  VARIABLES_SET: mO,
  VARIABLES_SET_CREATE_GET: EO,
  VARIABLES_SET_HELPURL: _O,
  VARIABLES_SET_TOOLTIP: TO,
  VARIABLE_ALREADY_EXISTS: QT,
  VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE: eE,
  VARIABLE_ALREADY_EXISTS_FOR_A_PARAMETER: tE,
  WINDOWS: iC,
  WORKSPACE_ARIA_LABEL: ZO,
  WORKSPACE_COMMENT_DEFAULT_TEXT: qO
}, Symbol.toStringTag, { value: "Module" }));
sT(RC);
const OC = "/visual_automation_builder/blockly-media/";
let ti = [["(no entities)", ""]];
function q_(N) {
  if (!(!N || !N.states) && (ti = Object.keys(N.states).sort().map((B) => [B, B]), window.__VAB_ENTITIES = ti, window.__VAB_WORKSPACE))
    for (const B of window.__VAB_WORKSPACE.getAllBlocks(!1)) {
      const n = B.getField && B.getField("ENTITY");
      n && n.setOptions && n.setOptions(ti);
      const c = B.getField && B.getField("TARGET");
      c && c.setOptions && c.setOptions(ti);
    }
}
window.__VAB_ENTITIES = ti;
function un() {
  return () => window.__VAB_ENTITIES || ti;
}
function CC() {
  Mt.vab_trigger_state = {
    init() {
      this.appendDummyInput().appendField("when").appendField(new to(un()), "ENTITY").appendField("becomes").appendField(new so("on"), "STATE"), this.setPreviousStatement(!0, null), this.setNextStatement(!0, null), this.setColour(120), this.setTooltip("State trigger");
    }
  }, Mt.vab_trigger_time = {
    init() {
      this.appendDummyInput().appendField("at time").appendField(new so("08:00:00"), "TIME"), this.setPreviousStatement(!0, null), this.setNextStatement(!0, null), this.setColour(120), this.setTooltip("Time trigger (HH:MM:SS)");
    }
  }, Mt.vab_trigger_numeric = {
    init() {
      this.appendDummyInput().appendField("when").appendField(new to(un()), "ENTITY").appendField(
        new to([
          ["is above", "above"],
          ["is below", "below"]
        ]),
        "DIR"
      ).appendField(new ul(0), "VALUE"), this.setPreviousStatement(!0, null), this.setNextStatement(!0, null), this.setColour(120), this.setTooltip("Numeric state trigger");
    }
  }, Mt.vab_condition_state = {
    init() {
      this.appendDummyInput().appendField("if").appendField(new to(un()), "ENTITY").appendField("is").appendField(new so("on"), "STATE"), this.setOutput(!0, "Condition"), this.setColour(210), this.setTooltip("State condition");
    }
  }, Mt.vab_condition_numeric = {
    init() {
      this.appendDummyInput().appendField("if").appendField(new to(un()), "ENTITY").appendField(
        new to([
          ["above", "above"],
          ["below", "below"]
        ]),
        "DIR"
      ).appendField(new ul(0), "VALUE"), this.setOutput(!0, "Condition"), this.setColour(210), this.setTooltip("Numeric condition");
    }
  }, Mt.vab_action_service = {
    init() {
      this.appendDummyInput().appendField("call service").appendField(new so("light.turn_on"), "SERVICE"), this.appendDummyInput().appendField("target").appendField(new to(un()), "TARGET"), this.appendDummyInput().appendField("data JSON").appendField(new so("{}"), "DATA"), this.setPreviousStatement(!0, null), this.setNextStatement(!0, null), this.setColour(260), this.setTooltip("Call a Home Assistant service");
    }
  }, Mt.vab_action_delay = {
    init() {
      this.appendDummyInput().appendField("wait").appendField(new ul(5, 0, 86400, 1), "DELAY").appendField("seconds"), this.setPreviousStatement(!0, null), this.setNextStatement(!0, null), this.setColour(260);
    }
  }, Mt.vab_action_notify = {
    init() {
      this.appendDummyInput().appendField("notify").appendField(new so("Automation"), "TITLE"), this.appendDummyInput().appendField("message").appendField(new so("Done"), "MESSAGE"), this.setPreviousStatement(!0, null), this.setNextStatement(!0, null), this.setColour(260);
    }
  }, Mt.vab_action_choose = {
    init() {
      this.appendValueInput("CONDITION").setCheck("Condition").appendField("if"), this.appendStatementInput("THEN").appendField("then"), this.appendStatementInput("ELSE").appendField("else"), this.setPreviousStatement(!0, null), this.setNextStatement(!0, null), this.setColour(290), this.setTooltip("Choose / if-else branch");
    }
  }, Mt.vab_action_repeat = {
    init() {
      this.appendDummyInput().appendField("repeat").appendField(new ul(1, 1, 1e3, 1), "COUNT").appendField("times"), this.appendStatementInput("DO").appendField("do"), this.setPreviousStatement(!0, null), this.setNextStatement(!0, null), this.setColour(290), this.setTooltip("Repeat actions");
    }
  };
}
function yC() {
  return {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "Triggers",
        colour: "120",
        contents: [
          { kind: "block", type: "vab_trigger_state" },
          { kind: "block", type: "vab_trigger_numeric" },
          { kind: "block", type: "vab_trigger_time" }
        ]
      },
      {
        kind: "category",
        name: "Conditions",
        colour: "210",
        contents: [
          { kind: "block", type: "vab_condition_state" },
          { kind: "block", type: "vab_condition_numeric" }
        ]
      },
      {
        kind: "category",
        name: "Actions",
        colour: "260",
        contents: [
          { kind: "block", type: "vab_action_service" },
          { kind: "block", type: "vab_action_delay" },
          { kind: "block", type: "vab_action_notify" },
          { kind: "block", type: "vab_action_choose" },
          { kind: "block", type: "vab_action_repeat" }
        ]
      }
    ]
  };
}
function vC(N) {
  try {
    return JSON.parse(N || "{}");
  } catch {
    return {};
  }
}
function Q_(N) {
  return N ? N.type === "vab_condition_state" ? {
    condition: "state",
    entity_id: N.getFieldValue("ENTITY"),
    state: N.getFieldValue("STATE")
  } : N.type === "vab_condition_numeric" ? {
    condition: "numeric_state",
    entity_id: N.getFieldValue("ENTITY"),
    [N.getFieldValue("DIR")]: Number(N.getFieldValue("VALUE") || 0)
  } : null : null;
}
function em(N) {
  if (!N) return null;
  switch (N.type) {
    case "vab_action_service": {
      const B = { service: N.getFieldValue("SERVICE") }, n = N.getFieldValue("TARGET");
      n && (B.target = { entity_id: n });
      const c = vC(N.getFieldValue("DATA"));
      return c && Object.keys(c).length && (B.data = c), B;
    }
    case "vab_action_delay":
      return { delay: { seconds: Number(N.getFieldValue("DELAY") || 0) } };
    case "vab_action_notify":
      return {
        service: "persistent_notification.create",
        data: {
          title: N.getFieldValue("TITLE") || "Automation",
          message: N.getFieldValue("MESSAGE") || ""
        }
      };
    case "vab_action_choose": {
      const B = Q_(N.getInputTargetBlock("CONDITION"));
      return {
        choose: [
          {
            conditions: B ? [B] : [],
            sequence: ch(N.getInputTargetBlock("THEN"))
          }
        ],
        default: ch(N.getInputTargetBlock("ELSE"))
      };
    }
    case "vab_action_repeat":
      return {
        repeat: {
          count: Number(N.getFieldValue("COUNT") || 1),
          sequence: ch(N.getInputTargetBlock("DO"))
        }
      };
    default:
      return null;
  }
}
function ch(N) {
  const B = [];
  let n = N;
  for (; n; ) {
    const c = em(n);
    c && B.push(c), n = n.getNextBlock();
  }
  return B;
}
function LC(N) {
  switch (N.type) {
    case "vab_trigger_state":
      return {
        platform: "state",
        entity_id: N.getFieldValue("ENTITY"),
        to: N.getFieldValue("STATE")
      };
    case "vab_trigger_numeric":
      return {
        platform: "numeric_state",
        entity_id: N.getFieldValue("ENTITY"),
        [N.getFieldValue("DIR")]: Number(N.getFieldValue("VALUE") || 0)
      };
    case "vab_trigger_time":
      return { platform: "time", at: N.getFieldValue("TIME") };
    default:
      return null;
  }
}
function AC(N) {
  return N.startsWith("vab_action_");
}
function kC(N) {
  return N.startsWith("vab_trigger_");
}
function NC(N) {
  return N.startsWith("vab_condition_");
}
class wC extends HTMLElement {
  constructor() {
    super(), this._hass = void 0, this._workspace = void 0, this._alias = "Visual automation";
  }
  set hass(B) {
    this._hass = B, q_(B);
  }
  get hass() {
    return this._hass;
  }
  connectedCallback() {
    this.innerHTML = `
      <style>
        automation-builder { display: block; height: 100%; background: var(--primary-background-color); }
        automation-builder .vab-toolbar {
          display: flex; gap: 8px; align-items: center; padding: 8px 12px;
          background: var(--card-background-color); border-bottom: 1px solid var(--divider-color);
          font-family: var(--paper-font-body1_-_font-family);
        }
        automation-builder .vab-toolbar input {
          flex: 0 0 260px; padding: 8px; border-radius: 6px;
          border: 1px solid var(--divider-color);
          background: var(--secondary-background-color); color: var(--primary-text-color);
        }
        automation-builder .vab-toolbar button {
          padding: 8px 14px; border: none; border-radius: 6px; cursor: pointer;
          background: var(--primary-color); color: var(--text-primary-color); font-weight: 600;
        }
        automation-builder .vab-toolbar button.secondary { background: var(--secondary-background-color); color: var(--primary-text-color); }
        automation-builder .vab-status { margin-left: auto; opacity: 0.8; }
        automation-builder .vab-blockly { position: absolute; top: 53px; left: 0; right: 0; bottom: 0; }

        /* Defensive: keep the Blockly toolbox visible inside HA's layout. */
        automation-builder .blocklyToolboxDiv {
          display: block !important;
          width: 190px !important;
          min-width: 190px !important;
          background: var(--card-background-color) !important;
          border-right: 1px solid var(--divider-color) !important;
          color: var(--primary-text-color) !important;
        }
        automation-builder .blocklyTreeRow {
          display: flex !important;
          align-items: center !important;
          height: 36px !important;
          padding: 0 8px !important;
        }
        automation-builder .blocklyTreeLabel { color: var(--primary-text-color) !important; }
        automation-builder .blocklyTreeIcon { display: inline-block !important; }
      </style>
      <div class="vab-toolbar">
        <input id="vab-alias" placeholder="Automation name" value="Visual automation" />
        <button id="vab-save">Save automation</button>
        <button id="vab-clear" class="secondary">Clear</button>
        <span class="vab-status" id="vab-status"></span>
      </div>
      <div class="vab-blockly" id="vab-blockly"></div>
    `, CC(), q_(this._hass), this._workspace = tT(this.querySelector("#vab-blockly"), {
      toolbox: yC(),
      renderer: "zelos",
      media: OC,
      grid: { spacing: 24, length: 3, colour: "#ccc", snap: !0 },
      zoom: { controls: !0, wheel: !0, startScale: 0.9, maxScale: 2, minScale: 0.4 },
      trashcan: !0
    }), window.__VAB_WORKSPACE = this._workspace, this._copyBlocklyStyles(), this._resizeObserver = new ResizeObserver(() => {
      oT(this._workspace);
    }), this._resizeObserver.observe(this), this.querySelector("#vab-alias").addEventListener("input", (B) => {
      this._alias = B.target.value;
    }), this.querySelector("#vab-save").addEventListener("click", () => {
      this.saveAutomation();
    }), this.querySelector("#vab-clear").addEventListener("click", () => {
      this._workspace.clear(), this.setStatus("");
    });
  }
  _copyBlocklyStyles() {
    const B = this.getRootNode();
    if (!(!B || B === document))
      for (const n of ["blockly-common-style", "blockly-renderer-style-zelos-classic"]) {
        const c = document.getElementById(n);
        if (!c || B.querySelector(`#${n}-shadow`)) continue;
        const xe = c.cloneNode(!0);
        xe.id = `${n}-shadow`, B.appendChild(xe);
      }
  }
  disconnectedCallback() {
    this._resizeObserver && this._resizeObserver.disconnect(), this._workspace && (this._workspace.dispose(), this._workspace = void 0, window.__VAB_WORKSPACE = void 0);
  }
  setStatus(B) {
    const n = this.querySelector("#vab-status");
    n && (n.textContent = B);
  }
  buildAutomation() {
    const B = [], n = [], c = [];
    for (const xe of this._workspace.getTopBlocks(!0)) {
      if (xe.getPreviousBlock()) continue;
      if (NC(xe.type)) {
        const Fe = Q_(xe);
        Fe && n.push(Fe);
        continue;
      }
      let Oe = xe;
      for (; Oe; ) {
        if (kC(Oe.type)) {
          const Fe = LC(Oe);
          Fe && B.push(Fe);
        } else if (AC(Oe.type)) {
          const Fe = em(Oe);
          Fe && c.push(Fe);
        }
        Oe = Oe.getNextBlock();
      }
    }
    return {
      alias: this._alias || "Visual automation",
      trigger: B,
      condition: n,
      action: c,
      mode: "single"
    };
  }
  async saveAutomation() {
    if (!this._hass) {
      this.setStatus("Not connected to Home Assistant");
      return;
    }
    const B = this.buildAutomation();
    if (!B.trigger.length) {
      this.setStatus("Add at least one trigger");
      return;
    }
    if (!B.action.length) {
      this.setStatus("Add at least one action");
      return;
    }
    const n = `vab_${Date.now().toString(36)}`;
    try {
      await this._hass.callApi("POST", `config/automation/config/${n}`, B), this.setStatus("Saved ✓"), await this._hass.callService("persistent_notification", "create", {
        title: "Automation Builder",
        message: `Automation "${B.alias}" saved.`,
        notification_id: `vab_${n}`
      });
    } catch (c) {
      console.error(c), this.setStatus(`Error: ${c.message || c}`);
    }
  }
}
customElements.define("automation-builder", wC);
