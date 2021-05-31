(
    function () {
        "use strinct";
        function e(e, t, o) {
            function a() {
                for (
                    var e = Math.cos,
                    a = [
                        new THREE.Vector3(1, 1, 1),
                        new THREE.Vector3(1, 1, -1),
                        new THREE.Vector3(-1, 1, -1),
                        new THREE.Vector3(-1, 1, 1),
                        new THREE.Vector3(1, -1, 1),
                        new THREE.Vector3(1, -1, -1),
                        new THREE.Vector3(-1, -1, -1),
                        new THREE.Vector3(-1, -1, 1),

                    ],
                    s = 0;
                    8 > s;
                    s = s + 1
                )
                    C.push([]),
                        L.push([]);
                for (var r = i / 2, l = new THREE.Vector3(b, f, z), c = 0; c <= 0; c++) {
                    var m = c / o,
                        d = m * r,
                        g = e(d),
                        p = n(d);
                    if (c == 0) {
                        M.set(0, 1, 0)
                        var h = M.clone().multiplyScalar(t).add(1);
                        C[0].push(h), A.push(h);
                        var v = M.clone();
                        L[0].push(v), E.push(v);
                        continue;


                    }

                    for (var S = 0; S <= 0; S++) {
                        var w = S / o,
                            u = w * r;
                        (M.x = g * e(u)),
                            (M.y = p),
                            (M.z = g * n(u));
                        var h = M.clone().multiplyScalar(t).add(1);
                        C[0].push(h), A.push(h);
                        var v = M.clone();
                        L[0].push(v), E.push(v);



                    }

                }

                for (var T = 1; 8 > T; T++)
                    for (var h, s = 0; s < C[0].length; s++) {
                        (h = C[0][s].clone().multiply(a[T])),
                            C[T].push(h),
                            A.push(h);
                        var v = L[0][s].clone().multiply(a[T])
                        L[T].push(v), E.push(v);


                    }
            }

            function s() {
                for (var e, t = [!0, !1, !0, !1, !1, !0, !1, !0], s = x * (o - 1), r = 0; 8 > r; r++) {

                    e = _ * r;
                    for (var n = 0; n < o - 1; n++)
                        for (var l = n * x, m = (n + 1) * x, g = 0; g < o; g++) {
                            var p = g + 1,
                                h = e + l + g,
                                y = e + l + p,
                                f = e + m + g,
                                z = e + m + p;
                            t[r] ? (P.push(h), P.push(f), P.push(y), P.push(y), P.push(f), P.push(z)) :
                                (P.push(h), P.push(y), P.push(f), P.push(y), P.push(z), P.push(f))

                        }

                    for (var g = 0; g < o; g++) {

                        var h = e + s + g,
                            y = e + s + g + 1,
                            f = e + D;
                        t[r] ? (P.push(h), P.push(f), P.push(y)) :
                            (P.push(h), P.push(y), P.push(f))

                    }
                }

            }
            function r() {
                var e = D,
                    t = D + _,
                    s = D + 2 * _,
                    r = D + 3 * _;
                P.push(e),
                    P.push(t),
                    P.push(s),
                    P.push(e),
                    P.push(s),
                    P.push(r),
                    (e = D + 4 * _),
                    (t = D + 5 * _),
                    (s = D + 6 * _),
                    (r = D + 7 * _),
                    P.push(e),
                    P.push(s),
                    P.push(t),
                    P.push(e),
                    P.push(r),
                    P.push(s),
                    (e = 0), (t = _), (s = 4 * _), (r = 5 * _),
                    P.push(e),
                    P.push(s),
                    P.push(t),
                    P.push(t),
                    P.push(s),
                    P.push(r),
                    (e = 2 * _),
                    (t = 3 * _),
                    (s = 6 * _),
                    (r = 7 * _),
                    P.push(e),
                    P.push(s),
                    P.push(t),
                    P.push(t),
                    P.push(s),
                    P.push(r),
                    (e = 0), (t = o + 3 * _), (s = o + 4 * _), (r = o + 7 * _),
                    P.push(e),
                    P.push(s),
                    P.push(t),
                    P.push(t),
                    P.push(s),
                    P.push(r),
                    (e = 0), (t = o + 2 * _), (s = o + 5 * _), (r = o + 6 * _),
                    P.push(e),
                    P.push(s),
                    P.push(t),
                    P.push(t),
                    P.push(s),
                    P.push(r);
            }

            function m() {
                for (var e = 0; 4 > e; e++)
                    for (var t = e * _, s = 4 * _ + t, r = !0 & e, n = 0; n < o; n++) {
                        var l = n + 1,
                            m = t + n,
                            a = t + l,
                            g = s + n,
                            c = s + l;
                        r ? (P.push(m), P.push(g), P.push(a), P.push(a), P.push(g), P.push(c)) :
                            (P.push(m), P.push(a), P.push(g), P.push(a), P.push(c), P.push(g))
                    }

            }

            function u() {
                for (var e = [0, 2, 4, 6], t = [1, 3, 5, 7], s = 0; 4 > s; s++)
                    for (var r = _ * e[s], n = _ * t[s], l = 1 >= s, m = 0; m < o; m++) {
                        var g = m * x,
                            t = (m + 1) * x,
                            h = r + g,
                            a = r + p,
                            y = n + g,
                            c = n + p;
                        l ? (P.push(h), P.push(y), P.push(a), P.push(a), P.push(y), P.push(c)) :
                            (P.push(h), P.push(a), P.push(y), P.push(a), P.push(c), P.push(y))



                    }

            }
            function g() {
                for (e = o - 1, t = [0, 1, 4, 5], s = [3, 2, 7, 6], r = [0, 1, 1, 0], n = 0; 4 > n; n++)
                    for (var l = t[n] * _, m = s[n] * _, g = 0; g <= e; g++) {

                        var p = l + o + g * x,
                            a = l + (g == e ? _ - 1 : o + (g + 1) * x),
                            h = m + o + g * x,
                            c = m + (g == e ? _ - 1 : o + (g + 1) * x);
                        r[n] ? (P.push(p), P.push(h), P.push(a), P.push(a), P.push(h), P.push(c)) :
                            (P.push(p), P.push(a), P.push(h), P.push(a), P.push(c), P.push(h))
                    }

            }

            THREE.BufferGeometry.call(this), (this.type = "RoundedBoxGeometry"), (o = isNaN(o) ? 1 : c(1, d(o)));
            var p, h, y;
            (p = h = y = e), (t = e * t), (t = l(t, l(p, l(h, l(y))) / 2));
            var b = p / 2 - t;
            f = h / 2 - t;
            z = y / 2 - t;
            this.parameters = { width: p, height: h, depth: y, radius: t, radiusSegments: o };
            var x = o + 1,
                v = (x * o + 1) << 3,
                S = new THREE.BufferAttribute(new Float32Array(3 * v), 3),
                w = new THREE.BufferAttribute(new Float32Array(3 * v), 3),
                C = [],
                L = [], T = new THREE.Vector3(),
                M = new THREE.Vector3(),
                A = [],
                E = [],
                P = [],
                D = x * o,
                _ = x * o + 1;
            a(), r(), s(), m(), g(), u();
            for (var k = 0, V = 0; V < A.length; V++)
                S.setXYZ(k, A[V].x, A[V].y, A[V].z), w.setXYZ(k, E[V].x, E[V].y, E[V].z), k++;

            this.setIndex(new THREE.BufferAttribute(new Uint16Array(P), 1)),
                this.addAttribute("normal", w);




        }

        function t(e, t, a) {

            var o, s, r, n;
            (o = s = -e / 2), (r = n = e), (t = e * t);
            const i = new THREE.Shape();
            i.moveTo(o, s + t),
                i.lineTo(o, s + n - t),
                i.quadraticCurveTo(o, s + n, o + t, s + n),
                i.lineTo(o, r - t, s + n),
                i.quadraticCurveTo(o + r, s + n, o + r, s + n - t),
                i.lineTo(o + r, s + t),
                i.quadraticCurveTo(o + r, s, o + r - t, s),
                i.lineTo(o + t, s),
                i.quadraticCurveTo(o, s, o, s + t);
            const l = new THREE.ExtrudeBufferGeometry(i, { depth: a, bevelEnabled: !1, curveSegments: 3 });
            return l;



        }

        var a = Math.sign,
            o = Math.abs,
            s = Math.pow,
            r = Math.round,
            n = Math.sin,
            i = Math.PI,
            l = Math.min,
            c = Math.max,
            d = Math.floor,
            m = Math.tan;
        const u = (() => {
            let e = 0;
            return new (class {
                constructor() {

                    (this.ids = []),
                        (this.animations = {}),
                        (this.update = this.update.bind(this)),
                        (this.raf = 0),
                        (this.time = 0);
                }

                update() {
                    const e = performance.now();
                    p = e - this.time;
                    this.time = e;
                    let a = this.ids.length;
                    for (this.raf = a ? requestAnimationFrame(this.update) : 0; a--;)
                        this.animations[this.ids[a]] && this.animations[this.ids[a]].update(t)

                }

                add(t) {

                    (t.id = e++), this.ids.push(t.id),
                        (t.animations[t.id] = t);
                    0 !== this.raf || ((this.time = performance.now()), (this.raf = requestAnimationFrame(this.update)))
                }

                remove(e) {

                    const t = this.ids.indexOf(e.id);
                    0 > t || (this.ids.splice(t, 1), delete this.animations[e.id], (e = null));
                }
            })();

        })();

        class g {
            constructor(e) {

                !0 === e && this.start()

            }

            start() {
                u.add(this);
            }

            stop() {
                u.remove(this);
            }
            update() {
            }
        }

    }


)