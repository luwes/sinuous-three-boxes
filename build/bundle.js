(function () {
	'use strict';

	var n = [];
	var t, o;

	function r() {
	  return !!t;
	}

	function u(n) {
	  var o = t,
	      r = function r() {};

	  t = r, a(r);
	  var u = n(function () {
	    S(r), t = void 0;
	  });
	  return t = o, u;
	}

	function c(n) {
	  var o = t;
	  t = void 0;
	  var r = n();
	  return t = o, r;
	}

	function i(t) {
	  o = [];
	  var r = t();
	  var u = o;
	  return o = void 0, u.forEach(function (t) {
	    if (t.t !== n) {
	      var _o = t.t;
	      t.t = n, t(_o);
	    }
	  }), r;
	}

	function e(r) {
	  function u(c) {
	    if (0 === arguments.length) return t && !u.o.has(t) && (u.o.add(t), t.u.push(u)), r;
	    if (o) return u.t === n && o.push(u), u.t = c, c;
	    r = c;
	    var i = t;
	    return t = void 0, u.i = new Set(u.o), u.i.forEach(function (n) {
	      return n.s = !1;
	    }), u.i.forEach(function (n) {
	      n.s || n();
	    }), t = i, r;
	  }

	  return u.$o = !0, u.o = new Set(), u.t = n, u;
	}

	function f(n, o) {
	  function r() {
	    var u = t;
	    t && t.__c.push(r);
	    var c = r.__c;
	    return S(r), r.s = !0, t = r, o = n(o), c.forEach(function (n) {
	      -1 === r.__c.indexOf(n) && (n.s = !0);
	    }), function n(t) {
	      return t.reduce(function (t, o) {
	        return t.concat(o, n(o.__c));
	      }, []);
	    }(r.__c).forEach(function (n) {
	      n.s && n.u.forEach(function (t) {
	        t.i && t.i.delete(n);
	      });
	    }), t = u, o;
	  }

	  return n.v = r, a(r), r(), function () {
	    return r.s ? r.u.forEach(function (n) {
	      return n();
	    }) : o = r(), o;
	  };
	}

	function s(n) {
	  return t && t.S.push(n), n;
	}

	function d(n) {
	  return f(n), function () {
	    return S(n.v);
	  };
	}

	function v(n) {
	  S(n.v);
	}

	function S(n) {
	  n.__c.forEach(S), n.u.forEach(function (t) {
	    t.o.delete(n);
	  }), n.S.forEach(function (n) {
	    return n();
	  }), a(n);
	}

	function a(n) {
	  n.u = [], n.__c = [], n.S = [];
	}

	var n$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		S: f,
		cleanup: s,
		computed: f,
		isListening: r,
		o: e,
		observable: e,
		root: u,
		sample: c,
		subscribe: d,
		transaction: i,
		unsubscribe: v
	});

	var e$1 = {},
	    s$1 = [],
	    f$1 = "__g";

	function i$1(n, t, o, e) {
	  if (o) {
	    if (t) {
	      if (!e) {
	        var _t2 = (e = o.previousSibling || n.lastChild)[f$1];
	        if (_t2) for (e = e.previousSibling; e && e[f$1] !== _t2;) {
	          e = e.previousSibling;
	        }
	      }

	      var _t;

	      for (; e && e !== o;) {
	        _t = e.nextSibling, n.removeChild(e), e[f$1] = 0, e = _t;
	      }
	    }
	  } else n.textContent = "";
	}

	var r$1 = 0;

	function u$1(n, t, o, u, c) {
	  n = o && o.parentNode || n;
	  var l = typeof t;
	  return t === u || (!t && 0 !== t || !0 === t ? (i$1(n, u, o, c), u = null) : u && "string" != typeof u || !("string" === l || "number" === l && (t += "")) ? "function" === l ? e$1.subscribe(function () {
	    u = e$1.insert(n, t(), o, u);
	  }) : (i$1(n, u, o, c), t instanceof Node || (t = e$1.h(s$1, t)), 11 === t.nodeType && t.firstChild !== t.lastChild && (t.firstChild[f$1] = t.lastChild[f$1] = ++r$1), n.insertBefore(t, o || null), u = t) : (null != u && n.firstChild ? o ? (o.previousSibling || n.lastChild).data = t : n.firstChild.data = t : o ? n.insertBefore(document.createTextNode(t), o) : n.textContent = t, u = t)), u;
	}

	function c$1(n, t, o, s, f) {
	  if (!n || "attrs" === n && (s = !0)) for (n in t) {
	    c$1(n, t[n], o, s, f);
	  } else "o" !== n[0] || "n" !== n[1] || t.$o ? "function" == typeof t ? t.$t ? t.$t(2, c$1, o, n) : e$1.subscribe(function () {
	    c$1(n, t(), o, s, f);
	  }) : f ? o.style.setProperty(n, t) : s || "data-" === n.slice(0, 5) || "aria-" === n.slice(0, 5) ? o.setAttribute(n, t) : "style" === n ? "string" == typeof t ? o.style.cssText = t : c$1(null, t, o, s, !0) : ("class" === n && (n += "Name"), o[n] = t) : function (n, t, o) {
	    t = t.slice(2);
	    var s = e$1.cleanup(function () {
	      return n.removeEventListener(t, l);
	    });
	    o ? n.addEventListener(t, l) : s(), (n.t || (n.t = {}))[t] = o;
	  }(o, n, t);
	}

	function l(n) {
	  return this.t[n.type](n);
	}

	function a$1(n, t) {
	  for (var _t3 in n) {
	    e$1[_t3] = n[_t3];
	  }

	  function o() {
	    var n = s$1.slice.call(arguments);
	    var o;
	    return n.forEach(function e(s) {
	      var f = typeof s;
	      if (null == s) ;else if ("string" === f) o ? o.appendChild(document.createTextNode(s)) : o = t ? document.createElementNS("http://www.w3.org/2000/svg", s) : document.createElement(s);else if (Array.isArray(s)) o || (o = document.createDocumentFragment()), s.forEach(e);else if (s instanceof Node) o ? o.appendChild(s) : o = s;else if ("object" === f) c$1(null, s, o, t);else if ("function" === f) {
	        if (o) {
	          var _n = o.appendChild(document.createTextNode(""));

	          s.$t ? s.$t(1, u$1, o, "") : u$1(o, s, _n);
	        } else o = s.apply(null, n.splice(1));
	      } else o.appendChild(document.createTextNode("" + s));
	    }), o;
	  }

	  return e$1.insert = u$1, e$1.property = c$1, e$1.h = o, o;
	}

	var m = a$1(n$1),
	    p = a$1(n$1, !0);

	/* global THREE */
	// Sinuous has no notion of these API's so I worked with what was available.

	function Scene(props, camera, light, meshes) {
	  var scene = new THREE.Scene();
	  scene.add(light);
	  d(function () {
	    scene.remove.apply(scene, scene.children.slice(2));
	    meshes().forEach(function (mesh) {
	      return scene.add(mesh);
	    });
	  });
	  var renderer = new THREE.WebGLRenderer({
	    antialias: true
	  });
	  renderer.setPixelRatio(window.devicePixelRatio);
	  renderer.setClearColor(0xffffff);

	  function onWindowResize() {
	    camera.aspect = window.innerWidth / window.innerHeight;
	    camera.updateProjectionMatrix();
	    renderer.setSize(window.innerWidth, window.innerHeight);
	  }

	  onWindowResize();
	  window.addEventListener('resize', onWindowResize);
	  var frame = requestAnimationFrame(function loop() {
	    frame = requestAnimationFrame(loop);
	    renderer.render(scene, camera);
	  });
	  s(function () {
	    cancelAnimationFrame(frame);
	    window.removeEventListener('resize', onWindowResize);
	  });
	  return m("div", {
	    "class": "container"
	  }, renderer.domElement);
	}
	function PerspectiveCamera(_ref) {
	  var _camera$position;

	  var location = _ref.location;
	  var aspect = window.innerWidth / window.innerHeight;
	  var camera = new THREE.PerspectiveCamera(106, aspect, 1, 1000);

	  (_camera$position = camera.position).set.apply(_camera$position, location);

	  return camera;
	}
	function DirectionalLight(_ref2) {
	  var _light$position;

	  var direction = _ref2.direction;
	  var light = new THREE.DirectionalLight(0x000000);

	  (_light$position = light.position).set.apply(_light$position, direction);

	  return light;
	}
	function Mesh(_ref3) {
	  var geometry = _ref3.geometry,
	      rotation = _ref3.rotation;
	  var material = new THREE.MeshNormalMaterial();
	  var mesh = new THREE.Mesh(geometry, material);
	  d(function () {
	    var _mesh$rotation;

	    (_mesh$rotation = mesh.rotation).set.apply(_mesh$rotation, rotation());
	  });
	  return mesh;
	}
	function box() {
	  return new THREE.BoxBufferGeometry(2, 2, 2);
	}

	var counts = [20, 100, 200, 500, 1000, 2000, 10000];
	var count = e(counts[0]);

	var random = function random() {
	  return Math.random() * 360;
	};

	var frames = e(Array(30).fill(0)); // for smoothing out FPS counter

	var boxes = f(function () {
	  return Array(count()).fill().map(function () {
	    return e([random(), random(), random()]);
	  });
	});
	var fps = f(function () {
	  return frames().reduce(function (total, frame) {
	    return total + frame;
	  }) / frames().length;
	});

	function App() {
	  var last = Date.now();
	  var frame = requestAnimationFrame(function loop() {
	    frame = requestAnimationFrame(loop);
	    boxes().forEach(function (box) {
	      var b = box();
	      box([b[0] + 0.01, b[1] + 0.01, b[2] + 0.01]);
	    });
	    var now = Date.now();
	    var elapsed = now - last;
	    frames().shift();
	    frames()[frames().length] = 1000 / elapsed;
	    frames(frames());
	    last = now;
	  });
	  s(function () {
	    return cancelAnimationFrame(frame);
	  });
	  return m("main", null, m(Scene, null, m(PerspectiveCamera, {
	    location: [0, 0, 3.2]
	  }), m(DirectionalLight, {
	    direction: [-5, 0, -10]
	  }), function () {
	    return boxes().map(function (r) {
	      return m(Mesh, {
	        geometry: box(),
	        rotation: r
	      });
	    });
	  }), m("div", {
	    "class": "controls"
	  }, m("label", null, "Amount", m("select", {
	    onchange: function onchange(e) {
	      return count(parseInt(e.target.value));
	    }
	  }, counts.map(function (count) {
	    return m("option", null, count);
	  })))), m("div", {
	    "class": "info"
	  }, m("p", null, m("a", {
	    href: "https://github.com/luwes/sinuous-three-boxes"
	  }, "github.com/luwes/sinuous-three-boxes")), "FPS ", function () {
	    return Math.round(fps());
	  }));
	}

	document.body.append(App());

}());
//# sourceMappingURL=bundle.js.map
