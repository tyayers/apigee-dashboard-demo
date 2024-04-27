(this["webpackJsonp@themesberg/volt-react-dashboard"] = this["webpackJsonp@themesberg/volt-react-dashboard"] || []).push([
  [0], {
    103: function (e, a, t) {
      e.exports = t.p + "static/media/react-logo-transparent.1ece41a8.svg"
    },
    1047: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        r = t.n(n),
        l = t(24),
        o = t.n(l),
        s = t(13),
        c = t(208),
        m = (t(519), t(520), t(521), t(17)),
        i = t(217),
        d = t(21),
        p = {
          Presentation: {
            path: "/"
          },
          DashboardOverview: {
            path: "/dashboard/overview"
          },
          Transactions: {
            path: "/transactions"
          },
          Settings: {
            path: "/settings"
          },
          Upgrade: {
            path: "/upgrade"
          },
          BootstrapTables: {
            path: "/tables/bootstrap-tables"
          },
          Billing: {
            path: "/examples/billing"
          },
          Invoice: {
            path: "/examples/invoice"
          },
          Signin: {
            path: "/examples/sign-in"
          },
          Signup: {
            path: "/examples/sign-up"
          },
          ForgotPassword: {
            path: "/examples/forgot-password"
          },
          ResetPassword: {
            path: "/examples/reset-password"
          },
          Lock: {
            path: "/examples/lock"
          },
          NotFound: {
            path: "/examples/404"
          },
          ServerError: {
            path: "/examples/500"
          },
          DocsOverview: {
            path: "/documentation/overview"
          },
          DocsDownload: {
            path: "/documentation/download"
          },
          DocsQuickStart: {
            path: "/documentation/quick-start"
          },
          DocsLicense: {
            path: "/documentation/license"
          },
          DocsFolderStructure: {
            path: "/documentation/folder-structure"
          },
          DocsBuild: {
            path: "/documentation/build-tools"
          },
          DocsChangelog: {
            path: "/documentation/changelog"
          },
          Accordions: {
            path: "/components/accordions"
          },
          Alerts: {
            path: "/components/alerts"
          },
          Badges: {
            path: "/components/badges"
          },
          Widgets: {
            path: "/widgets"
          },
          Breadcrumbs: {
            path: "/components/breadcrumbs"
          },
          Buttons: {
            path: "/components/buttons"
          },
          Forms: {
            path: "/components/forms"
          },
          Modals: {
            path: "/components/modals"
          },
          Navs: {
            path: "/components/navs"
          },
          Navbars: {
            path: "/components/navbars"
          },
          Pagination: {
            path: "/components/pagination"
          },
          Popovers: {
            path: "/components/popovers"
          },
          Progress: {
            path: "/components/progress"
          },
          Tables: {
            path: "/components/tables"
          },
          Tabs: {
            path: "/components/tabs"
          },
          Tooltips: {
            path: "/components/tooltips"
          },
          Toasts: {
            path: "/components/toasts"
          },
          WidgetsComponent: {
            path: "/components/widgets"
          }
        },
        u = t(6),
        h = t(4),
        g = t(14),
        E = t(330),
        b = t(1076),
        f = t(1058),
        v = t(1073),
        N = t(1056),
        y = t(1070),
        w = t(1059),
        x = t(1074),
        k = t(324),
        S = t(1057),
        j = t(1068),
        I = t(1060),
        B = t(1077),
        C = t(49),
        _ = t(137),
        T = t(108),
        P = t(48),
        D = t(164),
        A = t(134),
        F = t(138),
        L = function (e) {
          var a = e.code,
            t = void 0 === a ? "" : a,
            l = e.language,
            o = void 0 === l ? "jsx" : l,
            s = Object(n.useState)(!1),
            c = Object(m.a)(s, 2),
            i = c[0],
            d = c[1],
            p = function () {
              d(!0), setTimeout((function () {
                return d(!1)
              }), 2e3)
            },
            u = function (e) {
              var a = e.className,
                n = e.style,
                l = e.tokens,
                o = e.getLineProps,
                s = e.getTokenProps;
              return r.a.createElement(b.a, {
                className: "position-relative pe-8 mb-2"
              }, r.a.createElement(b.a.Body, null, r.a.createElement("pre", {
                className: a,
                style: n
              }, l.map((function (e, a) {
                return r.a.createElement("div", o({
                  line: e,
                  key: a
                }), e.map((function (e, a) {
                  return r.a.createElement("span", s({
                    token: e,
                    key: a
                  }))
                })))
              }))), i ? r.a.createElement("span", {
                className: "text-success copy-code-text"
              }, "Copied") : null, r.a.createElement(v.a, {
                trigger: ["hover", "focus"],
                placement: "top",
                overlay: r.a.createElement(N.a, null, "Copy to clipboard")
              }, r.a.createElement(_.CopyToClipboard, {
                text: t,
                onCopy: p
              }, r.a.createElement(k.a, {
                size: "sm",
                variant: "primary",
                className: "copy-code-button"
              }, "Copy")))))
            };
          return r.a.createElement(D.a, {
            Prism: A.a,
            code: t,
            language: o,
            theme: F
          }, u)
        },
        R = function (e) {
          var a = e.language,
            t = void 0 === a ? "jsx" : a,
            l = e.scope,
            o = void 0 === l ? {} : l,
            s = e.imports,
            c = void 0 === s ? null : s,
            i = e.maxHeight,
            d = void 0 === i ? "none" : i,
            p = Object(n.useState)(e.code),
            h = Object(m.a)(p, 2),
            g = h[0],
            f = h[1],
            y = Object(n.useState)(!1),
            w = Object(m.a)(y, 2),
            x = w[0],
            j = w[1],
            I = g.includes("render(");
          return r.a.createElement(T.d, {
            noInline: I,
            code: g,
            language: t,
            theme: F,
            scope: o
          }, r.a.createElement(S.a, null, r.a.createElement(E.a, {
            xs: 12,
            className: "mb-4"
          }, r.a.createElement(b.a, null, r.a.createElement(b.a.Body, {
            style: {
              maxHeight: d
            }
          }, r.a.createElement(T.c, null)))), c ? r.a.createElement(E.a, {
            xs: 12,
            className: "mb-4"
          }, r.a.createElement(L, {
            code: c
          })) : null, r.a.createElement(E.a, {
            xs: 12,
            className: "mb-4"
          }, r.a.createElement(T.b, {
            className: "alert alert-danger"
          }), r.a.createElement("span", {
            className: "fs-7 mb-2 d-block text-gray-600"
          }, r.a.createElement(v.a, {
            trigger: ["hover", "focus"],
            placement: "top",
            overlay: r.a.createElement(N.a, null, "You can edit the code below and the changes will be seen in the example above.")
          }, r.a.createElement(u.a, {
            icon: P.b,
            className: "me-2"
          })), "Live React Code Editor"), r.a.createElement(b.a, null, r.a.createElement(b.a.Body, {
            className: "position-relative"
          }, r.a.createElement(T.a, {
            onChange: function (e) {
              f(e)
            },
            className: "live-editor"
          }), x ? r.a.createElement("span", {
            className: "text-success copy-code-text"
          }, "Copied") : null, r.a.createElement(v.a, {
            trigger: ["hover", "focus"],
            placement: "top",
            overlay: r.a.createElement(N.a, null, "Copy to clipboard")
          }, r.a.createElement(_.CopyToClipboard, {
            text: g,
            onCopy: function () {
              j(!0), setTimeout((function () {
                return j(!1)
              }), 2e3)
            }
          }, r.a.createElement(k.a, {
            size: "sm",
            variant: "primary",
            className: "copy-code-button"
          }, "Copy"))))))))
        },
        O = t(163),
        M = t(206),
        G = t.n(M),
        U = t(331),
        z = t.n(U),
        H = t(332),
        K = t.n(H),
        V = t(87),
        W = t.n(V),
        Y = t(333),
        q = t.n(Y),
        J = t(334),
        $ = t.n(J),
        Q = t(335),
        X = t.n(Q),
        Z = t(336),
        ee = t.n(Z),
        ae = t(145),
        te = t.n(ae),
        ne = t(146),
        re = t.n(ne),
        le = t(337),
        oe = t.n(le),
        se = t(338),
        ce = t.n(se),
        me = t(339),
        ie = t.n(me),
        de = t(340),
        pe = t.n(de),
        ue = t(341),
        he = t.n(ue),
        ge = t(342),
        Ee = t.n(ge),
        be = t(343),
        fe = t.n(be),
        ve = t(344),
        Ne = t.n(ve),
        ye = t(345),
        we = t.n(ye),
        xe = t(346),
        ke = t.n(xe),
        Se = [{
          id: 1,
          name: "Overview",
          image: oe.a,
          link: p.DashboardOverview.path
        }, {
          id: 2,
          name: "Transactions",
          image: ce.a,
          link: p.Transactions.path
        }, {
          id: 3,
          name: "Settings",
          image: ie.a,
          link: p.Settings.path
        }, {
          id: 4,
          name: "Sign In",
          image: pe.a,
          link: p.Signin
        }, {
          id: 5,
          name: "Sign Up",
          image: he.a,
          link: p.Signup.path
        }, {
          id: 6,
          name: "Lock",
          image: Ee.a,
          link: p.Lock.path
        }, {
          id: 7,
          name: "Forgot password",
          image: fe.a,
          link: p.ForgotPassword.path
        }, {
          id: 8,
          name: "Reset password",
          image: Ne.a,
          link: p.ResetPassword.path
        }, {
          id: 9,
          name: "404",
          image: we.a,
          link: p.NotFound.path
        }, {
          id: 10,
          name: "500",
          image: ke.a,
          link: p.ServerError.path
        }],
        je = [{
          id: 0,
          title: "React.js",
          icon: g.j,
          description: "The most popular front-end library in the world"
        }, {
          id: 1,
          title: "Bootstrap 5",
          icon: g.c,
          description: "Built with the most popular CSS Framework"
        }, {
          id: 2,
          title: "Sass",
          icon: g.k,
          description: "Variables and mixins to empower development"
        }, {
          id: 3,
          title: "Responsive",
          icon: h.Z,
          description: "All pages and components are 100% responsive"
        }, {
          id: 4,
          title: "Gulp",
          icon: g.g,
          description: "Gulp & BrowserSync for a flawless workflow"
        }, {
          id: 5,
          title: "Creative rights",
          icon: h.W,
          description: "All images, icons and fonts are licensed & free to use"
        }, {
          id: 6,
          title: "Documentation",
          icon: h.N,
          description: "Everything that comes with Rocket is well documented"
        }, {
          id: 7,
          title: "WCAG Accessibility",
          icon: g.a,
          description: "Accessibility oriented design and functionality"
        }, {
          id: 8,
          title: "W3C Validated",
          icon: g.h,
          description: "HTML pages are all valid by W3C Standards"
        }, {
          id: 10,
          title: "Calendar",
          icon: h.m,
          description: "Advanced integration with FullCalendar.js"
        }, {
          id: 11,
          title: "Mapbox",
          icon: h.Y,
          description: "Custom integration with markers and cards"
        }, {
          id: 12,
          title: "Design",
          icon: h.db,
          description: "Crafted by professional UI/UX designers"
        }],
        Ie = function () {
          var e = function (e) {
              var a = e.name,
                t = e.image,
                n = e.link;
              return r.a.createElement(E.a, {
                xs: 6,
                className: "mb-5"
              }, r.a.createElement(b.a.Link, {
                as: s.Link,
                to: n,
                className: "page-preview page-preview-lg scale-up-hover-2"
              }, r.a.createElement(f.a, {
                src: t,
                className: "shadow-lg rounded scale",
                alt: "Dashboard page preview"
              }), r.a.createElement("div", {
                className: "text-center show-on-hover"
              }, r.a.createElement("h6", {
                className: "m-0 text-center text-white"
              }, a, " ", r.a.createElement(u.a, {
                icon: h.L,
                className: "ms-2"
              })))))
            },
            a = function (e) {
              var a = e.title,
                t = e.description,
                n = e.icon;
              return r.a.createElement(E.a, {
                xs: 12,
                sm: 6,
                lg: 3
              }, r.a.createElement(b.a, {
                className: "bg-white shadow-soft text-primary rounded mb-4"
              }, r.a.createElement("div", {
                className: "px-3 px-lg-4 py-5 text-center"
              }, r.a.createElement("span", {
                className: "icon icon-lg mb-4"
              }, r.a.createElement(u.a, {
                icon: n
              })), r.a.createElement("h5", {
                className: "fw-bold text-primary"
              }, a), r.a.createElement("p", null, t))))
            },
            t = function (e) {
              var a = e.name,
                t = e.icon,
                n = e.tooltip,
                l = e.iconColor,
                o = l ? "text-".concat(l) : "";
              return r.a.createElement(v.a, {
                trigger: ["hover", "focus"],
                placement: "left",
                overlay: r.a.createElement(N.a, null, n)
              }, r.a.createElement("li", {
                "data-toggle": "tooltip",
                "data-placement": "left",
                title: "Main folder that you will be working with"
              }, r.a.createElement(u.a, {
                icon: t || h.Q,
                className: "".concat(o, " me-2")
              }), " ", a))
            };
          return r.a.createElement(r.a.Fragment, null, r.a.createElement(y.a, {
            variant: "dark",
            expand: "lg",
            bg: "dark",
            className: "navbar-transparent navbar-theme-primary sticky-top"
          }, r.a.createElement(w.a, {
            className: "position-relative justify-content-between px-3"
          }, r.a.createElement(y.a.Brand, {
            as: C.HashLink,
            to: "#home",
            className: "me-lg-3 d-flex align-items-center"
          }, r.a.createElement(f.a, {
            src: W.a
          }), r.a.createElement("span", {
            className: "ms-2 brand-text d-none d-md-inline"
          }, "Volt React")), r.a.createElement("div", {
            className: "d-flex align-items-center"
          }, r.a.createElement(y.a.Collapse, {
            id: "navbar-default-primary"
          }, r.a.createElement(x.a, {
            className: "navbar-nav-hover align-items-lg-center"
          }, r.a.createElement(x.a.Link, {
            as: C.HashLink,
            to: "#features"
          }, "Features"), r.a.createElement(x.a.Link, {
            as: C.HashLink,
            to: "#pages"
          }, "Pages"), r.a.createElement(x.a.Link, {
            as: C.HashLink,
            to: "#folder",
            className: "d-sm-none d-xl-inline"
          }, "Folder Structure"), r.a.createElement(x.a.Link, {
            as: C.HashLink,
            to: "#getting-started"
          }, "Getting Started"), r.a.createElement(x.a.Link, {
            as: C.HashLink,
            to: "#download"
          }, "Upgrade to Pro"))), r.a.createElement(k.a, {
            as: C.HashLink,
            to: "#download",
            variant: "outline-white",
            className: "ms-3"
          }, r.a.createElement(u.a, {
            icon: h.G,
            className: "me-1"
          }), " Download")))), r.a.createElement("section", {
            className: "section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white",
            id: "home"
          }, r.a.createElement(w.a, null, r.a.createElement(S.a, null, r.a.createElement(E.a, {
            xs: 12,
            className: "text-center"
          }, r.a.createElement("div", {
            className: "react-big-icon d-none d-lg-block"
          }, r.a.createElement("span", {
            className: "fab fa-react"
          })), r.a.createElement("h1", {
            className: "fw-bolder text-secondary"
          }, "Volt React Dashboard"), r.a.createElement("p", {
            className: "text-muted fw-light mb-5 h5"
          }, "Open source powered by React.js and Bootstrap 5"), r.a.createElement("div", {
            className: "d-flex align-items-center justify-content-center"
          }, r.a.createElement(k.a, {
            variant: "secondary",
            as: s.Link,
            to: p.DashboardOverview.path,
            className: "text-dark me-3"
          }, "Explore dashboard ", r.a.createElement(u.a, {
            icon: h.L,
            className: "d-none d-sm-inline ms-1"
          })), r.a.createElement(O.a, {
            className: "mt-lg-2",
            href: "https://github.com/themesberg/volt-react-dashboard",
            "data-size": "large",
            "data-show-count": "true",
            "aria-label": "Star themesberg/volt-react-dashboard on GitHub"
          }, "Star")), r.a.createElement("div", {
            className: "d-flex justify-content-center flex-column mb-6 mb-lg-5 mt-5"
          }, r.a.createElement("div", {
            className: "text-center"
          }, r.a.createElement("a", {
            href: "https://themesberg.com",
            target: "_blank"
          }, r.a.createElement(f.a, {
            src: G.a,
            height: 25,
            width: 25,
            className: "mb-3",
            alt: "Themesberg Logo"
          }), r.a.createElement("p", {
            className: "text-muted font-small m-0"
          }, "A Themesberg production")))))), r.a.createElement("figure", {
            className: "position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2"
          }, r.a.createElement("svg", {
            className: "fill-soft",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 3000 185.4"
          }, r.a.createElement("path", {
            d: "M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z"
          }))))), r.a.createElement("div", {
            className: "section pt-0"
          }, r.a.createElement(w.a, {
            className: "mt-n10 mt-lg-n12 z-2"
          }, r.a.createElement(S.a, {
            className: "justify-content-center"
          }, r.a.createElement(E.a, {
            xs: 12
          }, r.a.createElement(f.a, {
            src: K.a,
            alt: "Mockup presentation"
          }))), r.a.createElement(S.a, {
            className: "justify-content-center mt-5 mt-lg-6"
          }, r.a.createElement(E.a, {
            xs: 6,
            md: 3,
            className: "text-center mb-4"
          }, r.a.createElement("div", {
            className: "icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4"
          }, r.a.createElement(u.a, {
            icon: h.ab,
            className: "text-secondary"
          })), r.a.createElement("h3", {
            className: "fw-bolder"
          }, "10"), r.a.createElement("p", {
            className: "text-gray"
          }, "Example Pages")), r.a.createElement(E.a, {
            xs: 6,
            md: 3,
            className: "text-center mb-4"
          }, r.a.createElement("div", {
            className: "icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4"
          }, r.a.createElement(u.a, {
            icon: g.j,
            className: "text-secondary"
          })), r.a.createElement("h3", {
            className: "fw-bolder"
          }, "100+"), r.a.createElement("p", {
            className: "text-gray"
          }, "React Components")), r.a.createElement(E.a, {
            xs: 6,
            md: 3,
            className: "text-center"
          }, r.a.createElement("div", {
            className: "icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4"
          }, r.a.createElement(u.a, {
            icon: g.k,
            className: "text-secondary"
          })), r.a.createElement("h3", {
            className: "fw-bolder"
          }, "Workflow"), r.a.createElement("p", {
            className: "text-gray"
          }, "Sass & react-app")), r.a.createElement(E.a, {
            xs: 6,
            md: 3,
            className: "text-center"
          }, r.a.createElement("div", {
            className: "icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4"
          }, r.a.createElement(u.a, {
            color: "secondary",
            icon: g.c,
            className: "text-secondary"
          })), r.a.createElement("h3", {
            className: "fw-bolder"
          }, "Bootstrap 5"), r.a.createElement("p", {
            className: "text-gray"
          }, "CSS Framework"))))), r.a.createElement("section", {
            className: "section section-md bg-soft pt-lg-3",
            id: "features"
          }, r.a.createElement(w.a, null, r.a.createElement(S.a, {
            className: "justify-content-between align-items-center mb-5 mb-lg-7"
          }, r.a.createElement(E.a, {
            lg: 5,
            className: "order-lg-2 mb-5 mb-lg-0"
          }, r.a.createElement("h2", null, "Powered by React.js"), r.a.createElement("p", {
            className: "mb-3 lead fw-bold"
          }, "The most popular front-end library in the world"), r.a.createElement("p", {
            className: "mb-4"
          }, "Volt React is an admin dashboard template that is built using React.js components using react hooks and a data-driven structure that can kick-start your app in no time."), r.a.createElement(k.a, {
            as: s.Link,
            to: p.DashboardOverview.path,
            variant: "secondary",
            target: "_blank"
          }, "Live Demo ", r.a.createElement(u.a, {
            icon: h.L,
            className: "ms-1"
          })), r.a.createElement(k.a, {
            as: C.HashLink,
            to: "#download",
            variant: "outline-primary",
            className: "ms-3"
          }, r.a.createElement(u.a, {
            icon: h.hb,
            className: "me-1"
          }), " Download")), r.a.createElement(E.a, {
            lg: 6,
            className: "order-lg-1"
          }, r.a.createElement(f.a, {
            src: X.a,
            alt: "Calendar Preview"
          }))), r.a.createElement(S.a, {
            className: "justify-content-between align-items-center mb-5 mb-lg-7"
          }, r.a.createElement(E.a, {
            lg: 5
          }, r.a.createElement("h2", null, "React.js Components"), r.a.createElement("p", {
            className: "mb-3 lead fw-bold"
          }, "100+ premium UI elements based on Bootstrap 5"), r.a.createElement("p", {
            className: "mb-4"
          }, "We've built over 100 React.js powered components to be used throughout your application saving you time kickstarting your project."), r.a.createElement("p", {
            className: "mb-4"
          }, "Check out the components and use our live React.js component editor to try the code."), r.a.createElement(k.a, {
            as: s.Link,
            to: p.Forms.path,
            variant: "secondary",
            className: "mb-5 mb-lg-0",
            target: "_blank"
          }, r.a.createElement(u.a, {
            icon: g.j,
            className: "me-1"
          }), " Components examples")), r.a.createElement(E.a, {
            lg: 6,
            className: "rounded shadow pt-3"
          }, r.a.createElement(R, {
            scope: {
              Form: j.a,
              Button: k.a
            },
            code: '<Form>\n  <Form.Group id="frameworks" className="mb-3">\n    <Form.Label>Example select</Form.Label>\n    <Form.Select>\n      <option defaultValue>Open this select menu</option>\n      <option>One</option>\n      <option>Two</option>\n      <option>Three</option>\n    </Form.Select>\n  </Form.Group>\n  <Button variant="primary" className="m-1">Primary</Button>\n</Form>',
            language: "jsx"
          }))), r.a.createElement(S.a, {
            className: "justify-content-between align-items-center mb-5 mb-lg-7"
          }, r.a.createElement(E.a, {
            lg: 5,
            className: "order-lg-2 mb-5 mb-lg-0"
          }, r.a.createElement("h2", {
            className: "d-flex align-items-center"
          }, "Mapbox ", r.a.createElement(I.a, {
            pill: !0,
            bg: "secondary",
            text: "dark",
            className: "badge-md ms-3 mb-0 fs-6"
          }, "Pro")), r.a.createElement("p", {
            className: "mb-3 lead fw-bold"
          }, "Markers and cards integration with Leaflet.js"), r.a.createElement("p", {
            className: "mb-4"
          }, "You can use this map to add markers with custom cards and show them on a map using our custom MapBox integration with Leaflet.js"), r.a.createElement(k.a, {
            href: "https://demo.themesberg.com/volt-pro-react/#/map",
            className: "me-3",
            variant: "secondary",
            target: "_blank"
          }, r.a.createElement(u.a, {
            icon: h.Y,
            className: "me-2"
          }), " Demo Map"), r.a.createElement(k.a, {
            href: "https://demo.themesberg.com/volt-pro-react/#/plugins/map",
            variant: "outline-primary",
            target: "_blank"
          }, r.a.createElement(u.a, {
            icon: h.j,
            className: "me-2"
          }), " Guide")), r.a.createElement(E.a, {
            lg: 6,
            className: "order-lg-1"
          }, r.a.createElement(f.a, {
            src: q.a,
            alt: "MapBox Leaflet.js Custom Integration Mockup"
          }))), r.a.createElement(S.a, {
            className: "justify-content-between align-items-center mb-5 mb-lg-7"
          }, r.a.createElement(E.a, {
            lg: 5
          }, r.a.createElement("h2", {
            className: "d-flex align-items-center"
          }, "Calendar ", r.a.createElement(I.a, {
            pill: !0,
            bg: "secondary",
            text: "dark",
            className: "badge-md ms-3 mb-0 fs-6"
          }, "Pro")), r.a.createElement("p", {
            className: "mb-3 lead fw-bold"
          }, "Advanced FullCalendar.js integration"), r.a.createElement("p", {
            className: "mb-4"
          }, "We created a fully editable calendar where you can add, edit and delete events for your admin dashboard."), r.a.createElement(k.a, {
            href: "https://demo.themesberg.com/volt-pro-react/#/calendar",
            className: "me-3",
            variant: "secondary",
            target: "_blank"
          }, r.a.createElement(u.a, {
            icon: h.m,
            className: "me-2"
          }), " Demo Calendar"), r.a.createElement(k.a, {
            href: "https://demo.themesberg.com/volt-pro-react/#/plugins/calendar",
            variant: "outline-primary",
            target: "_blank"
          }, r.a.createElement(u.a, {
            icon: h.j,
            className: "me-2"
          }), " Guide")), r.a.createElement(E.a, {
            lg: 6
          }, r.a.createElement(f.a, {
            src: $.a,
            alt: "Calendar Preview"
          }))), r.a.createElement(S.a, {
            className: "justify-content-between align-items-center"
          }, r.a.createElement(E.a, {
            lg: 5,
            className: "order-lg-2 mb-5 mb-lg-0"
          }, r.a.createElement("h2", null, "Bootstrap 5"), r.a.createElement("p", {
            className: "mb-3 lead fw-bold"
          }, "Latest version of Bootstrap 5"), r.a.createElement("p", {
            className: "mb-4"
          }, "Volt React is built using the latest version of Bootstrap 5 and we only used Vanilla Javascript for everything including the plugins")), r.a.createElement(E.a, {
            lg: 6,
            className: "col-lg-6 order-lg-1"
          }, r.a.createElement(f.a, {
            src: ee.a,
            alt: "Front pages overview"
          }))))), r.a.createElement("section", {
            className: "section section-sm pt-0",
            id: "pages"
          }, r.a.createElement(w.a, null, r.a.createElement(S.a, {
            className: "justify-content-center mb-5 mb-lg-6"
          }, r.a.createElement(E.a, {
            xs: 12,
            className: "text-center"
          }, r.a.createElement("h2", {
            className: "px-lg-5"
          }, "10 hand-crafted pages"), r.a.createElement("p", {
            className: "lead px-lg-10"
          }, "Every page from Volt has been carefully built to provide all the necessary pages your startup will require"))), r.a.createElement(S.a, {
            className: "mb-5"
          }, Se.map((function (a) {
            return r.a.createElement(e, Object.assign({
              key: "page-".concat(a.id)
            }, a))
          }))))), r.a.createElement("section", {
            className: "section section-lg bg-primary text-white"
          }, r.a.createElement(w.a, null, r.a.createElement(S.a, {
            className: "justify-content-center mb-5 mb-lg-6"
          }, r.a.createElement(E.a, {
            xs: 12,
            className: "text-center"
          }, r.a.createElement("h2", {
            className: "px-lg-5"
          }, "Awesome Features"), r.a.createElement("p", {
            className: "lead px-lg-8"
          }, "You get all React.js components fully customized. Besides, you receive numerous plugins out of the box and ready to use."))), r.a.createElement(S.a, null, je.map((function (e) {
            return r.a.createElement(a, Object.assign({
              key: "features-".concat(e.id)
            }, e))
          }))))), r.a.createElement("section", {
            className: "section section-lg line-bottom-soft",
            id: "folder"
          }, r.a.createElement(w.a, null, r.a.createElement(S.a, {
            className: "justify-content-center mb-5 mb-lg-6"
          }, r.a.createElement(E.a, {
            xs: 12,
            className: "text-center"
          }, r.a.createElement("h2", {
            className: "px-lg-5"
          }, "What's inside?"), r.a.createElement("p", {
            className: "lead px-lg-8"
          }, "We have carefully crafted the perfect folder structure to ensure that finding the files you're looking for are easily reachable and well organized."))), r.a.createElement(S.a, {
            className: "d-flex align-items-center"
          }, r.a.createElement(E.a, {
            xs: 12,
            lg: 6,
            className: "mb-4"
          }, r.a.createElement("div", {
            className: "d-none d-lg-block mt-5"
          }, r.a.createElement("h4", null, "The perfect folder structure for your project"), r.a.createElement("p", {
            className: "lead mb-4"
          }, "The folder structure is based on the popular ", r.a.createElement("code", null, "create-react-app"), " repository using Sass source files for CSS preprocessing."), r.a.createElement(k.a, {
            as: s.Link,
            variant: "secondary",
            size: "md",
            to: p.DocsFolderStructure.path,
            target: "_blank",
            className: "text-dark"
          }, r.a.createElement(u.a, {
            icon: h.A,
            className: "me-2"
          }), " Folder Structure"))), r.a.createElement(E.a, {
            xs: 12,
            lg: 6,
            className: "order-lg-first d-flex justify-content-center"
          }, r.a.createElement(B.a, {
            className: "d-block fmw-100 list-style-none folder-structure"
          }, r.a.createElement(t, {
            name: "src",
            tooltip: "Main folder that you will be working with"
          }), r.a.createElement(B.a, {
            className: "list-style-none ps-4"
          }, r.a.createElement(t, {
            name: "assets",
            tooltip: "CSS, Images, Fonts and Javascript"
          }), r.a.createElement(t, {
            name: "components",
            tooltip: "Custom React.js components on top of react-bootstrap"
          }), r.a.createElement(t, {
            name: "data",
            tooltip: "Data source for the dashboard and components"
          }), r.a.createElement(t, {
            name: "pages",
            tooltip: "React.js admin dashboard pages"
          }), r.a.createElement(t, {
            name: "scss",
            tooltip: "Sass source files"
          }), r.a.createElement(t, {
            name: "index.js",
            tooltip: "Main React.js file that wraps the project",
            icon: g.i,
            iconColor: "secondary"
          }), r.a.createElement(t, {
            name: "routes.js",
            tooltip: "The file where the routes are registered at",
            icon: g.i,
            iconColor: "secondary"
          })), r.a.createElement(t, {
            name: "build",
            tooltip: "The production build of the project"
          }), r.a.createElement(t, {
            name: "node_modules",
            tooltip: "Project dependencies from package.json"
          }), r.a.createElement(t, {
            name: "package.json",
            tooltip: "Project details and dependencies.",
            icon: h.O,
            iconColor: "tertiary"
          }), r.a.createElement(t, {
            name: "README.md",
            tooltip: "No project can miss a README :)",
            icon: h.O,
            iconColor: "tertiary"
          }), r.a.createElement(t, {
            name: ".gitignore",
            tooltip: "This file ensures that generated files and folder are ignored by Git. (eg. node_modules)",
            icon: h.O,
            iconColor: "tertiary"
          }))), r.a.createElement(E.a, {
            xs: 12,
            className: "mt-5 d-lg-none"
          }, r.a.createElement("h5", null, "The perfect folder structure for your project"), r.a.createElement("p", {
            className: "lead mb-4"
          }, "The folder structure is based on the popular ", r.a.createElement("code", null, "create-react-app"), " repository using Sass source files for CSS preprocessing."))))), r.a.createElement("section", {
            className: "section section-lg bg-primary",
            id: "getting-started"
          }, r.a.createElement(w.a, null, r.a.createElement(S.a, {
            className: "justify-content-center text-center text-white mb-5"
          }, r.a.createElement(E.a, {
            xs: 12
          }, r.a.createElement("h2", {
            className: "fw-light mb-3"
          }, "Less ", r.a.createElement("span", {
            className: "fw-bold"
          }, "work"), ", more ", r.a.createElement("span", {
            className: "fw-bold"
          }, "flow"), "."), r.a.createElement("p", {
            className: "lead px-lg-8"
          }, "Boost productivity with BrowserSync. Sass changes are reflected instantly and pages scroll and refresh on devices as you work."))), r.a.createElement(S.a, {
            className: "justify-content-center"
          }, r.a.createElement(E.a, {
            md: 10,
            xl: 9
          }, r.a.createElement("div", {
            className: "position-relative"
          }, r.a.createElement("div", {
            className: "rounded bg-white p-4 text-dark mb-2"
          }, r.a.createElement("div", {
            className: "mb-3"
          }, r.a.createElement("div", {
            className: "fw-bold"
          }, "> $ yarn install ", r.a.createElement("span", {
            className: "text-gray-600"
          }, "(or npm install)")), r.a.createElement("div", {
            className: "text-gray"
          }, "Everything\u2019s installed!")), r.a.createElement("div", {
            className: "mb-3"
          }, r.a.createElement("div", {
            className: "fw-bold"
          }, "> $ yarn start ", r.a.createElement("span", {
            className: "text-gray-600"
          }, "(or npm run start)")), r.a.createElement("div", {
            className: "text-gray"
          }, "SCSS watching"), r.a.createElement("div", {
            className: "text-gray"
          }, "Opening localhost:3000")), r.a.createElement("div", null, r.a.createElement("div", {
            className: "fw-bold"
          }, "> $ that's it?"), r.a.createElement("div", {
            className: "text-gray"
          }, "It's that simple!")))), r.a.createElement("p", {
            className: "mt-4 text-white text-center mb-0"
          }, "Looks unfamiliar? Don\u2019t worry! Our ", r.a.createElement(s.Link, {
            to: p.DocsQuickStart.path,
            className: "text-white text-underline fw-bold",
            target: "_blank"
          }, "documentation"), " has got you covered."))))), r.a.createElement("section", {
            className: "section section-lg bg-white",
            id: "download"
          }, r.a.createElement(w.a, null, r.a.createElement(S.a, null, r.a.createElement(E.a, {
            xs: 12,
            lg: 8
          }, r.a.createElement("h2", {
            className: "fw-light mb-3"
          }, "Download or upgrade to pro"), r.a.createElement("p", {
            className: "lead mb-4 me-lg-6"
          }, "Do you want to take React development to the next level? Check out the premium version of Volt React Dashboard in the following comparison table.")), r.a.createElement(E.a, {
            xs: 12,
            lg: 4
          }, r.a.createElement("div", {
            className: "github-big-icon"
          }, r.a.createElement(u.a, {
            icon: g.e
          })))), r.a.createElement(S.a, {
            className: "mt-6"
          }, r.a.createElement(E.a, {
            xs: 12,
            md: 6,
            lg: 4,
            className: "mb-5 mb-lg-0"
          }, r.a.createElement(b.a, {
            border: "light",
            className: "p-4"
          }, r.a.createElement(b.a.Header, {
            className: "bg-white border-0 pb-0"
          }, r.a.createElement("span", {
            className: "d-block"
          }, r.a.createElement("h2", {
            className: "text-primary fw-bold align-top"
          }, "Free version"))), r.a.createElement(b.a.Body, null, r.a.createElement(B.a, {
            className: "list-group-flush price-list"
          }, r.a.createElement(B.a.Item, {
            className: "bg-white border-0 ps-0"
          }, r.a.createElement("strong", null, "100"), " React Components"), r.a.createElement(B.a.Item, {
            className: "bg-white border-0 ps-0"
          }, r.a.createElement("strong", null, "10"), " Example Pages"), r.a.createElement(B.a.Item, {
            className: "bg-white border-0 ps-0"
          }, r.a.createElement(u.a, {
            icon: h.qb,
            className: "text-danger me-2"
          }), " Advanced Sidebar"), r.a.createElement(B.a.Item, {
            className: "bg-white border-0 ps-0"
          }, r.a.createElement(u.a, {
            icon: h.qb,
            className: "text-danger me-2"
          }), " MapBox"), r.a.createElement(B.a.Item, {
            className: "bg-white border-0 ps-0"
          }, r.a.createElement(u.a, {
            icon: h.qb,
            className: "text-danger me-2"
          }), " Calendar"), r.a.createElement(B.a.Item, {
            className: "bg-white border-0 ps-0"
          }, r.a.createElement(u.a, {
            icon: h.qb,
            className: "text-danger me-2"
          }), " SVG Map"), r.a.createElement(B.a.Item, {
            className: "bg-white border-0 ps-0"
          }, r.a.createElement(u.a, {
            icon: h.qb,
            className: "text-danger me-2"
          }), " Widgets"), r.a.createElement(B.a.Item, {
            className: "bg-white border-0 ps-0 pb-0"
          }, r.a.createElement(u.a, {
            icon: h.qb,
            className: "text-danger me-2"
          }), " Premium Support"))), r.a.createElement(k.a, {
            href: "https://themesberg.com/product/dashboard/volt-react",
            target: "_blank",
            variant: "primary",
            className: "w-100 m-0 mt-3 mb-3"
          }, r.a.createElement(u.a, {
            icon: h.G,
            className: "me-1"
          }), " Download"))), r.a.createElement(E.a, {
            xs: 12,
            md: 6,
            lg: 4,
            className: "mb-5 mb-lg-0"
          }, r.a.createElement(b.a, {
            border: "light",
            className: "p-4 py-5 mt-lg-n5"
          }, r.a.createElement(b.a.Header, {
            className: "bg-white border-0 pb-0"
          }, r.a.createElement("span", {
            className: "d-block"
          }, r.a.createElement("h2", {
            className: "text-primary fw-bold align-top"
          }, "Pro Version"))), r.a.createElement(b.a.Body, null, r.a.createElement(B.a, {
            className: "list-group-flush price-list"
          }, r.a.createElement(B.a.Item, {
            className: "bg-white border-0 ps-0"
          }, r.a.createElement("strong", null, "200+"), " React Components"), r.a.createElement(B.a.Item, {
            className: "bg-white border-0 ps-0"
          }, r.a.createElement("strong", null, "20"), " Example Pages"), r.a.createElement(B.a.Item, {
            className: "bg-white border-0 ps-0"
          }, r.a.createElement("strong", null, "6"), " Plugins"), r.a.createElement(B.a.Item, {
            className: "bg-white border-0 ps-0"
          }, r.a.createElement(u.a, {
            icon: h.v,
            className: "text-success me-2"
          }), " Advanced Sidebar"), r.a.createElement(B.a.Item, {
            className: "bg-white border-0 ps-0"
          }, r.a.createElement(u.a, {
            icon: h.v,
            className: "text-success me-2"
          }), " MapBox"), r.a.createElement(B.a.Item, {
            className: "bg-white border-0 ps-0"
          }, r.a.createElement(u.a, {
            icon: h.v,
            className: "text-success me-2"
          }), " Calendar"), r.a.createElement(B.a.Item, {
            className: "bg-white border-0 ps-0"
          }, r.a.createElement(u.a, {
            icon: h.v,
            className: "text-success me-2"
          }), " SVG Map"), r.a.createElement(B.a.Item, {
            className: "bg-white border-0 ps-0"
          }, r.a.createElement(u.a, {
            icon: h.v,
            className: "text-success me-2"
          }), " Widgets"), r.a.createElement(B.a.Item, {
            className: "bg-white border-0 border-0 ps-0 pb-0"
          }, r.a.createElement(u.a, {
            icon: h.v,
            className: "text-success me-2"
          }), " Premium Support"))), r.a.createElement(k.a, {
            href: "https://demo.themesberg.com/volt-pro-react/#/",
            target: "_blank",
            variant: "secondary",
            className: "w-100 m-0 mt-3"
          }, "Demo Volt React Pro ", r.a.createElement(u.a, {
            icon: h.L,
            className: "ms-1"
          }))))), r.a.createElement(S.a, {
            className: "mt-lg-6"
          }, r.a.createElement(E.a, {
            xs: 12,
            className: "text-center"
          }, r.a.createElement("h2", {
            className: "h5 text-gray fw-normal mb-4"
          }, "Available in the following technologies:"), r.a.createElement("div", null, r.a.createElement(b.a.Link, {
            href: "https://themesberg.com/product/admin-dashboard/volt-bootstrap-5-dashboard",
            target: "_blank",
            className: "me-3"
          }, r.a.createElement(v.a, {
            placement: "top",
            trigger: ["hover", "focus"],
            overlay: r.a.createElement(N.a, null, "Bootstrap 5 \xb7 The most popular HTML, CSS, and JS library in the world.")
          }, r.a.createElement(f.a, {
            src: te.a,
            className: "image image-sm"
          }))), r.a.createElement(b.a.Link, {
            href: "https://themesberg.com/product/dashboard/volt-react",
            target: "_blank",
            className: "me-3"
          }, r.a.createElement(v.a, {
            placement: "top",
            trigger: ["hover", "focus"],
            overlay: r.a.createElement(N.a, null, "React \xb7 A JavaScript library for building user interfaces.")
          }, r.a.createElement(f.a, {
            src: re.a,
            className: "image image-sm"
          })))))))), r.a.createElement("footer", {
            className: "footer py-6 bg-dark text-white"
          }, r.a.createElement(w.a, null, r.a.createElement(S.a, null, r.a.createElement(E.a, {
            md: 4
          }, r.a.createElement(y.a.Brand, {
            as: C.HashLink,
            to: "#home",
            className: "me-lg-3 mb-3 d-flex align-items-center"
          }, r.a.createElement(f.a, {
            src: W.a
          }), r.a.createElement("span", {
            className: "ms-2 brand-text"
          }, "Volt React")), r.a.createElement("p", null, "Volt React is a free and open source admin dashboard template powered by React.js and Bootstrap 5.")), r.a.createElement(E.a, {
            xs: 6,
            md: 2,
            className: "mb-5 mb-lg-0"
          }, r.a.createElement("span", {
            className: "h5"
          }, "Themesberg"), r.a.createElement("ul", {
            className: "links-vertical mt-2"
          }, r.a.createElement("li", null, r.a.createElement(b.a.Link, {
            target: "_blank",
            href: "https://themesberg.com/blog"
          }, "Blog")), r.a.createElement("li", null, r.a.createElement(b.a.Link, {
            target: "_blank",
            href: "https://themesberg.com/products"
          }, "Products")), r.a.createElement("li", null, r.a.createElement(b.a.Link, {
            target: "_blank",
            href: "https://themesberg.com/about"
          }, "About Us")), r.a.createElement("li", null, r.a.createElement(b.a.Link, {
            target: "_blank",
            href: "https://themesberg.com/contact"
          }, "Contact Us")))), r.a.createElement(E.a, {
            xs: 6,
            md: 2,
            className: "mb-5 mb-lg-0"
          }, r.a.createElement("span", {
            className: "h5"
          }, "Other"), r.a.createElement("ul", {
            className: "links-vertical mt-2"
          }, r.a.createElement("li", null, r.a.createElement(b.a.Link, {
            as: s.Link,
            to: p.DocsQuickStart.path,
            target: "_blank"
          }, "Getting started")), r.a.createElement("li", null, r.a.createElement(b.a.Link, {
            as: s.Link,
            to: p.DocsChangelog.path,
            target: "_blank"
          }, "Changelog")), r.a.createElement("li", null, r.a.createElement(b.a.Link, {
            target: "_blank",
            href: "https://themesberg.com/licensing"
          }, "License")))), r.a.createElement(E.a, {
            xs: 12,
            md: 4,
            className: "mb-5 mb-lg-0"
          }, r.a.createElement("span", {
            className: "h5 mb-3 d-block"
          }, "Subscribe"), r.a.createElement("form", {
            action: "#"
          }, r.a.createElement("div", {
            className: "form-row mb-2"
          }, r.a.createElement("div", {
            className: "col-12"
          }, r.a.createElement("input", {
            type: "email",
            className: "form-control mb-2",
            placeholder: "example@company.com",
            name: "email",
            "aria-label": "Subscribe form",
            required: !0
          })), r.a.createElement("div", {
            className: "col-12"
          }, r.a.createElement("button", {
            type: "submit",
            className: "btn btn-secondary text-dark shadow-soft btn-block",
            "data-loading-text": "Sending"
          }, r.a.createElement("span", null, "Subscribe"))))), r.a.createElement("p", {
            className: "text-muted font-small m-0"
          }, "We\u2019ll never share your details. See our ", r.a.createElement(b.a.Link, {
            className: "text-white",
            href: "#"
          }, "Privacy Policy")))), r.a.createElement("hr", {
            className: "bg-gray my-5"
          }), r.a.createElement(S.a, null, r.a.createElement(E.a, {
            className: "mb-md-2"
          }, r.a.createElement(b.a.Link, {
            href: "https://themesberg.com",
            target: "_blank",
            className: "d-flex justify-content-center"
          }, r.a.createElement(f.a, {
            src: z.a,
            height: 35,
            className: "d-block mx-auto mb-3",
            alt: "Themesberg Logo"
          })), r.a.createElement("div", {
            className: "d-flex text-center justify-content-center align-items-center",
            role: "contentinfo"
          }, r.a.createElement("p", {
            className: "font-weight-normal font-small mb-0"
          }, "Copyright \xa9 Themesberg 2019-", r.a.createElement("span", {
            className: "current-year"
          }, "2021"), ". All rights reserved.")))))))
        },
        Be = t(1061),
        Ce = function () {
          return r.a.createElement(r.a.Fragment, null, r.a.createElement(S.a, {
            className: "mt-lg-5 mt-4 d-flex justify-content-center"
          }, r.a.createElement(E.a, {
            xl: 8
          }, r.a.createElement("h1", {
            className: "text-center fw-bolder"
          }, "Upgrade to Pro ", r.a.createElement(u.a, {
            icon: h.fb,
            className: "ms-1"
          })), r.a.createElement("p", {
            className: "text-center lead mb-lg-5 mb-4"
          }, "Looking to take React development to the next level? Check out the premium version of Volt React Dashboard."), r.a.createElement(Be.a, {
            className: "comparison-table table-striped"
          }, r.a.createElement("thead", {
            className: "thead-light"
          }, r.a.createElement("tr", null, r.a.createElement("th", {
            className: "border-0"
          }), r.a.createElement("th", {
            className: "border-0"
          }, r.a.createElement("h6", {
            className: "fw-bolder"
          }, "What is in demo?")), r.a.createElement("th", {
            className: "border-0 fw-bolder"
          }, r.a.createElement("h6", {
            className: "fw-bolder"
          }, "What is in Pro version?")))), r.a.createElement("tbody", null, r.a.createElement("tr", null, r.a.createElement("td", {
            className: "border-0"
          }, "React Components"), r.a.createElement("td", {
            className: "border-0"
          }, "100"), r.a.createElement("td", {
            className: "border-0"
          }, "200+")), r.a.createElement("tr", null, r.a.createElement("td", {
            className: "border-0"
          }, "Dashboard Pages"), r.a.createElement("td", {
            className: "border-0"
          }, "10"), r.a.createElement("td", {
            className: "border-0"
          }, "20")), r.a.createElement("tr", null, r.a.createElement("td", {
            className: "border-0"
          }, "Customized Plugins"), r.a.createElement("td", {
            className: "border-0"
          }, "2"), r.a.createElement("td", {
            className: "border-0"
          }, "6")), r.a.createElement("tr", null, r.a.createElement("td", {
            className: "border-0"
          }, "Sass Source Files"), r.a.createElement("td", {
            className: "border-0"
          }, r.a.createElement(u.a, {
            icon: h.v,
            className: "ms-1 text-success"
          })), r.a.createElement("td", {
            className: "border-0"
          }, r.a.createElement(u.a, {
            icon: h.v,
            className: "ms-1 text-success"
          }))), r.a.createElement("tr", null, r.a.createElement("td", {
            className: "border-0"
          }, "Documentation"), r.a.createElement("td", {
            className: "border-0"
          }, r.a.createElement(u.a, {
            icon: h.v,
            className: "ms-1 text-success"
          })), r.a.createElement("td", {
            className: "border-0"
          }, r.a.createElement(u.a, {
            icon: h.v,
            className: "ms-1 text-success"
          }))), r.a.createElement("tr", null, r.a.createElement("td", {
            className: "border-0"
          }, "Advanced Sidebar"), r.a.createElement("td", {
            className: "border-0"
          }, r.a.createElement(u.a, {
            icon: h.qb,
            className: "ms-1 text-danger"
          })), r.a.createElement("td", {
            className: "border-0"
          }, r.a.createElement(u.a, {
            icon: h.v,
            className: "ms-1 text-success"
          }))), r.a.createElement("tr", null, r.a.createElement("td", {
            className: "border-0"
          }, "Calendar"), r.a.createElement("td", {
            className: "border-0"
          }, r.a.createElement(u.a, {
            icon: h.qb,
            className: "ms-1 text-danger"
          })), r.a.createElement("td", {
            className: "border-0"
          }, r.a.createElement(u.a, {
            icon: h.v,
            className: "ms-1 text-success"
          }))), r.a.createElement("tr", null, r.a.createElement("td", {
            className: "border-0"
          }, "Mapbox"), r.a.createElement("td", {
            className: "border-0"
          }, r.a.createElement(u.a, {
            icon: h.qb,
            className: "ms-1 text-danger"
          })), r.a.createElement("td", {
            className: "border-0"
          }, r.a.createElement(u.a, {
            icon: h.v,
            className: "ms-1 text-success"
          }))), r.a.createElement("tr", null, r.a.createElement("td", {
            className: "border-0"
          }, "Tech Support"), r.a.createElement("td", {
            className: "border-0"
          }, r.a.createElement(u.a, {
            icon: h.qb,
            className: "ms-1 text-danger"
          })), r.a.createElement("td", {
            className: "border-0"
          }, r.a.createElement(u.a, {
            icon: h.v,
            className: "ms-1 text-success"
          }))), r.a.createElement("tr", null, r.a.createElement("td", {
            className: "border-0"
          }), r.a.createElement("td", {
            className: "border-0"
          }, r.a.createElement(k.a, {
            href: "https://themesberg.com/product/dashboard/volt-react",
            target: "_blank",
            variant: "primary",
            className: "m-0 mt-3 mb-3"
          }, r.a.createElement(u.a, {
            icon: h.G,
            className: "me-1"
          }), " Download")), r.a.createElement("td", {
            className: "border-0"
          }, r.a.createElement(k.a, {
            href: "https://demo.themesberg.com/volt-pro-react/#/",
            target: "_blank",
            variant: "secondary",
            className: "m-0 mt-3"
          }, "Demo Volt React Pro ", r.a.createElement(u.a, {
            icon: h.L,
            className: "ms-1"
          })))))))))
        },
        _e = t(1067),
        Te = t(1062),
        Pe = t(1078),
        De = t(27),
        Ae = t(106),
        Fe = t.n(Ae),
        Le = t(107),
        Re = t.n(Le),
        Oe = function () {
          var e = [Re()()];
          return r.a.createElement(Fe.a, {
            data: {
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              series: [
                [1, 2, 2, 3, 3, 4, 3]
              ]
            },
            options: Object(De.a)(Object(De.a)({}, {
              low: 0,
              showArea: !0,
              fullWidth: !0,
              axisX: {
                position: "end",
                showGrid: !0
              },
              axisY: {
                showGrid: !1,
                showLabel: !1,
                labelInterpolationFnc: function (e) {
                  return "$".concat(e / 1, "k")
                }
              }
            }), {}, {
              plugins: e
            }),
            type: "Line",
            className: "ct-series-g ct-double-octave"
          })
        },
        Me = function () {
          var e = [Re()()];
          return r.a.createElement(Fe.a, {
            data: {
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              series: [
                [1, 2, 2, 3, 3, 4, 3]
              ]
            },
            options: Object(De.a)(Object(De.a)({}, {
              low: 0,
              showArea: !0,
              fullWidth: !1,
              axisX: {
                position: "end",
                showGrid: !0
              },
              axisY: {
                showGrid: !1,
                showLabel: !1,
                labelInterpolationFnc: function (e) {
                  return "$".concat(e / 1, "k")
                }
              }
            }), {}, {
              plugins: e
            }),
            type: "Line",
            className: "ct-series-g ct-major-tenth"
          })
        },
        Ge = function (e) {
          var a = e.series,
            t = void 0 === a ? [] : a,
            n = e.donutWidth,
            l = function (e, a) {
              return e + a
            },
            o = {
              low: 0,
              high: 8,
              donutWidth: void 0 === n ? 20 : n,
              donut: !0,
              donutSolid: !0,
              fullWidth: !1,
              showLabel: !1,
              labelInterpolationFnc: function (e) {
                return "".concat(Math.round(e / t.reduce(l) * 100), "%")
              }
            },
            s = [Re()()];
          return r.a.createElement(Fe.a, {
            data: {
              series: t
            },
            options: Object(De.a)(Object(De.a)({}, o), {}, {
              plugins: s
            }),
            type: "Pie",
            className: "ct-golden-section"
          })
        },
        Ue = function (e) {
          var a = e.labels,
            t = void 0 === a ? [] : a,
            n = e.series,
            l = void 0 === n ? [] : n,
            o = e.chartClassName,
            s = void 0 === o ? "ct-golden-section" : o,
            c = {
              labels: t,
              series: l
            },
            m = [Re()()];
          return r.a.createElement(Fe.a, {
            data: c,
            options: Object(De.a)(Object(De.a)({}, {
              low: 0,
              showArea: !0,
              axisX: {
                position: "end"
              },
              axisY: {
                showGrid: !1,
                showLabel: !1,
                offset: 0
              }
            }), {}, {
              plugins: m
            }),
            type: "Bar",
            className: s
          })
        },
        ze = t(81),
        He = t.n(ze),
        Ke = t(347),
        Ve = t.n(Ke),
        We = t(152),
        Ye = t.n(We),
        qe = t(35),
        Je = t.n(qe),
        $e = t(153),
        Qe = t.n($e),
        Xe = [{
          id: 1,
          image: He.a,
          name: "Christopher Wood",
          statusKey: "online",
          icon: h.n,
          btnText: "Invite"
        }, {
          id: 2,
          image: Ye.a,
          name: "Jose Leos",
          statusKey: "inMeeting",
          icon: h.D,
          btnText: "Message"
        }, {
          id: 3,
          image: Je.a,
          name: "Bonnie Green",
          statusKey: "offline",
          icon: h.n,
          btnText: "Invite"
        }, {
          id: 4,
          image: Qe.a,
          name: "Neil Sims",
          statusKey: "online",
          icon: h.D,
          btnText: "Message"
        }],
        Ze = function () {
          return r.a.createElement(b.a, {
            border: "light",
            className: "text-center p-0 mb-4"
          }, r.a.createElement("div", {
            style: {
              backgroundImage: "url(".concat(Ve.a, ")")
            },
            className: "profile-cover rounded-top"
          }), r.a.createElement(b.a.Body, {
            className: "pb-5"
          }, r.a.createElement(b.a.Img, {
            src: He.a,
            alt: "Neil Portrait",
            className: "user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4"
          }), r.a.createElement(b.a.Title, null, "Neil Sims"), r.a.createElement(b.a.Subtitle, {
            className: "fw-normal"
          }, "Senior Software Engineer"), r.a.createElement(b.a.Text, {
            className: "text-gray mb-4"
          }, "New York, USA"), r.a.createElement(k.a, {
            variant: "primary",
            size: "sm",
            className: "me-2"
          }, r.a.createElement(u.a, {
            icon: h.tb,
            className: "me-1"
          }), " Connect"), r.a.createElement(k.a, {
            variant: "secondary",
            size: "sm"
          }, "Send Message")))
        },
        ea = function (e) {
          var a = e.title,
            t = e.photo;
          return r.a.createElement(b.a, {
            border: "light",
            className: "bg-white shadow-sm mb-4"
          }, r.a.createElement(b.a.Body, null, r.a.createElement("h5", {
            className: "mb-4"
          }, a), r.a.createElement("div", {
            className: "d-xl-flex align-items-center"
          }, r.a.createElement("div", {
            className: "user-avatar xl-avatar"
          }, r.a.createElement(f.a, {
            fluid: !0,
            rounded: !0,
            src: t
          })), r.a.createElement("div", {
            className: "file-field"
          }, r.a.createElement("div", {
            className: "d-flex justify-content-xl-center ms-xl-3"
          }, r.a.createElement("div", {
            className: "d-flex"
          }, r.a.createElement("span", {
            className: "icon icon-md"
          }, r.a.createElement(u.a, {
            icon: h.cb,
            className: "me-3"
          })), r.a.createElement("input", {
            type: "file"
          }), r.a.createElement("div", {
            className: "d-md-block text-start"
          }, r.a.createElement("div", {
            className: "fw-normal text-dark mb-1"
          }, "Choose Image"), r.a.createElement("div", {
            className: "text-gray small"
          }, "JPG, GIF or PNG. Max size of 800K"))))))))
        },
        aa = function (e) {
          var a = e.icon,
            t = e.iconColor,
            n = e.category,
            l = e.title,
            o = e.period,
            s = e.percentage,
            c = s < 0 ? h.c : h.f,
            m = s < 0 ? "text-danger" : "text-success";
          return r.a.createElement(b.a, {
            border: "light",
            className: "shadow-sm"
          }, r.a.createElement(b.a.Body, null, r.a.createElement(S.a, {
            className: "d-block d-xl-flex align-items-center"
          }, r.a.createElement(E.a, {
            xl: 5,
            className: "text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0"
          }, r.a.createElement("div", {
            className: "icon icon-shape icon-md icon-".concat(t, " rounded me-4 me-sm-0")
          }, r.a.createElement(u.a, {
            icon: a
          })), r.a.createElement("div", {
            className: "d-sm-none"
          }, r.a.createElement("h5", null, n), r.a.createElement("h3", {
            className: "mb-1"
          }, l))), r.a.createElement(E.a, {
            xs: 12,
            xl: 7,
            className: "px-xl-0"
          }, r.a.createElement("div", {
            className: "d-none d-sm-block"
          }, r.a.createElement("h5", null, n), r.a.createElement("h3", {
            className: "mb-1"
          }, l)), r.a.createElement("small", null, o, ", ", r.a.createElement(u.a, {
            icon: h.S,
            size: "xs"
          }), " WorldWide"), r.a.createElement("div", {
            className: "small mt-2"
          }, r.a.createElement(u.a, {
            icon: c,
            className: "".concat(m, " me-1")
          }), r.a.createElement("span", {
            className: "".concat(m, " fw-bold")
          }, s, "%"), " Since last month")))))
        },
        ta = function (e) {
          var a = e.title,
            t = e.data,
            n = void 0 === t ? [] : t,
            l = n.map((function (e) {
              return e.value
            }));
          return r.a.createElement(b.a, {
            border: "light",
            className: "shadow-sm"
          }, r.a.createElement(b.a.Body, null, r.a.createElement(S.a, {
            className: "d-block d-xl-flex align-items-center"
          }, r.a.createElement(E.a, {
            xs: 12,
            xl: 5,
            className: "text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0"
          }, r.a.createElement(Ge, {
            series: l
          })), r.a.createElement(E.a, {
            xs: 12,
            xl: 7,
            className: "px-xl-0"
          }, r.a.createElement("h5", {
            className: "mb-3"
          }, a), n.map((function (e) {
            return r.a.createElement("h6", {
              key: "circle-element-".concat(e.id),
              className: "fw-normal text-gray"
            }, r.a.createElement(u.a, {
              icon: e.icon,
              className: "icon icon-xs text-".concat(e.color, " w-20 me-1")
            }), " ".concat(e.label, " "), "".concat(e.value, "%"))
          }))))))
        },
        na = function (e) {
          var a = e.title,
            t = e.value,
            n = e.percentage,
            l = e.data,
            o = void 0 === l ? [] : l,
            s = o.map((function (e) {
              return e.value
            })),
            c = n < 0 ? h.c : h.f,
            m = n < 0 ? "text-danger" : "text-success";
          return r.a.createElement(b.a, {
            border: "light",
            className: "shadow-sm"
          }, r.a.createElement(b.a.Body, {
            className: "d-flex flex-row align-items-center flex-0 border-bottom"
          }, r.a.createElement("div", {
            className: "d-block"
          }, r.a.createElement("h6", {
            className: "fw-normal text-gray mb-2"
          }, a), r.a.createElement("h3", null, t), r.a.createElement("small", {
            className: "mt-2"
          }, r.a.createElement(u.a, {
            icon: c,
            className: "".concat(m, " me-1")
          }), r.a.createElement("span", {
            className: "".concat(m, " fw-bold")
          }, n, "%"))), r.a.createElement("div", {
            className: "d-block ms-auto"
          }, o.map((function (e) {
            return r.a.createElement("div", {
              key: "bar-element-".concat(e.id),
              className: "d-flex align-items-center text-end mb-2"
            }, r.a.createElement("span", {
              className: "shape-xs rounded-circle bg-".concat(e.color, " me-2")
            }), r.a.createElement("small", {
              className: "fw-normal"
            }, e.label))
          })))), r.a.createElement(b.a.Body, {
            className: "p-2"
          }, r.a.createElement(Ue, {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            series: s
          })))
        },
        ra = function () {
          var e = function (e) {
            var a = e.name,
              t = e.statusKey,
              n = e.image,
              l = e.icon,
              o = e.btnText,
              s = {
                online: {
                  color: "success",
                  label: "Online"
                },
                inMeeting: {
                  color: "warning",
                  label: "In a meeting"
                },
                offline: {
                  color: "danger",
                  label: "Offline"
                }
              },
              c = s[t] ? s[t].color : "danger",
              m = s[t] ? s[t].label : "Offline";
            return r.a.createElement(B.a.Item, {
              className: "px-0"
            }, r.a.createElement(S.a, {
              className: "align-items-center"
            }, r.a.createElement(E.a, {
              className: "col-auto"
            }, r.a.createElement("a", {
              href: "#top",
              className: "user-avatar"
            }, r.a.createElement(f.a, {
              src: n,
              className: "rounded-circle"
            }))), r.a.createElement(E.a, {
              className: "ms--2"
            }, r.a.createElement("h4", {
              className: "h6 mb-0"
            }, r.a.createElement("a", {
              href: "#!"
            }, a)), r.a.createElement("span", {
              className: "text-".concat(c)
            }, "\u25cf "), r.a.createElement("small", null, m)), r.a.createElement(E.a, {
              className: "col-auto"
            }, r.a.createElement(k.a, {
              variant: "tertiary",
              size: "sm"
            }, r.a.createElement(u.a, {
              icon: l,
              className: "me-1"
            }), " ", o))))
          };
          return r.a.createElement(b.a, {
            border: "light",
            className: "shadow-sm"
          }, r.a.createElement(b.a.Header, {
            className: "border-bottom border-light d-flex justify-content-between"
          }, r.a.createElement("h5", {
            className: "mb-0"
          }, "Team members"), r.a.createElement(k.a, {
            variant: "secondary",
            size: "sm"
          }, "See all")), r.a.createElement(b.a.Body, null, r.a.createElement(B.a, {
            className: "list-group-flush list my--3"
          }, Xe.map((function (a) {
            return r.a.createElement(e, Object.assign({
              key: "team-member-".concat(a.id)
            }, a))
          })))))
        },
        la = function () {
          var e = function (e) {
            var a = e.title,
              t = e.percentage,
              n = e.icon,
              l = e.color,
              o = e.last,
              s = void 0 !== o && o ? "" : "mb-2";
            return r.a.createElement(S.a, {
              className: "align-items-center ".concat(s)
            }, r.a.createElement(E.a, {
              xs: "auto"
            }, r.a.createElement("span", {
              className: "icon icon-md text-".concat(l)
            }, r.a.createElement(u.a, {
              icon: n,
              className: "me-1"
            }))), r.a.createElement(E.a, null, r.a.createElement("div", {
              className: "progress-wrapper"
            }, r.a.createElement("div", {
              className: "progress-info"
            }, r.a.createElement("h6", {
              className: "mb-0"
            }, a), r.a.createElement("small", {
              className: "fw-bold text-dark"
            }, r.a.createElement("span", null, t, " %"))), r.a.createElement(Pe.a, {
              variant: l,
              now: t,
              min: 0,
              max: 100
            }))))
          };
          return r.a.createElement(b.a, {
            border: "light",
            className: "shadow-sm"
          }, r.a.createElement(b.a.Header, {
            className: "border-bottom border-light"
          }, r.a.createElement("h5", {
            className: "mb-0"
          }, "Progress track")), r.a.createElement(b.a.Body, null, r.a.createElement(e, {
            title: "Rocket - SaaS Template",
            color: "purple",
            icon: g.c,
            percentage: 34
          }), r.a.createElement(e, {
            title: "Pixel - Design System",
            color: "danger",
            icon: g.b,
            percentage: 60
          }), r.a.createElement(e, {
            title: "Spaces - Listings Template",
            color: "tertiary",
            icon: g.m,
            percentage: 45
          }), r.a.createElement(e, {
            title: "Stellar - Dashboard",
            color: "info",
            icon: g.j,
            percentage: 35
          }), r.a.createElement(e, {
            last: !0,
            title: "Volt - Dashboard",
            color: "purple",
            icon: g.c,
            percentage: 34
          })))
        },
        oa = function () {
          return r.a.createElement(b.a, {
            border: "light",
            className: "shadow-sm"
          }, r.a.createElement(b.a.Body, null, r.a.createElement("div", {
            className: "d-flex align-items-center justify-content-between border-bottom border-light pb-3"
          }, r.a.createElement("div", null, r.a.createElement("h6", null, r.a.createElement(u.a, {
            icon: h.S,
            className: "icon icon-xs me-3"
          }), " Global Rank")), r.a.createElement("div", null, r.a.createElement(b.a.Link, {
            href: "#",
            className: "text-primary fw-bold"
          }, "#755 ", r.a.createElement(u.a, {
            icon: h.s,
            className: "ms-2"
          })))), r.a.createElement("div", {
            className: "d-flex align-items-center justify-content-between border-bottom border-light py-3"
          }, r.a.createElement("div", null, r.a.createElement("h6", {
            className: "mb-0"
          }, r.a.createElement(u.a, {
            icon: h.P,
            className: "icon icon-xs me-3"
          }), "Country Rank"), r.a.createElement("div", {
            className: "small card-stats"
          }, "United States ", r.a.createElement(u.a, {
            icon: h.f,
            className: "icon icon-xs text-success ms-2"
          }))), r.a.createElement("div", null, r.a.createElement(b.a.Link, {
            href: "#top",
            className: "text-primary fw-bold"
          }, "#32 ", r.a.createElement(u.a, {
            icon: h.s,
            className: "ms-2"
          })))), r.a.createElement("div", {
            className: "d-flex align-items-center justify-content-between pt-3"
          }, r.a.createElement("div", null, r.a.createElement("h6", {
            className: "mb-0"
          }, r.a.createElement(u.a, {
            icon: h.R,
            className: "icon icon-xs me-3"
          }), "Category Rank"), r.a.createElement(b.a.Link, {
            href: "#top",
            className: "small card-stats"
          }, "Travel > Accomodation")), r.a.createElement("div", null, r.a.createElement(b.a.Link, {
            href: "#top",
            className: "text-primary fw-bold"
          }, "#16 ", r.a.createElement(u.a, {
            icon: h.s,
            className: "ms-2"
          }))))))
        },
        sa = function (e) {
          var a = e.title,
            t = e.value,
            n = e.percentage,
            l = n < 0 ? h.c : h.f,
            o = n < 0 ? "text-danger" : "text-success";
          return r.a.createElement(b.a, {
            className: "bg-secondary-alt shadow-sm"
          }, r.a.createElement(b.a.Header, {
            className: "d-flex flex-row align-items-center flex-0"
          }, r.a.createElement("div", {
            className: "d-block"
          }, r.a.createElement("h5", {
            className: "fw-normal mb-2"
          }, a), r.a.createElement("h3", null, "$", t), r.a.createElement("small", {
            className: "fw-bold mt-2"
          }, r.a.createElement("span", {
            className: "me-2"
          }, "Yesterday"), r.a.createElement(u.a, {
            icon: l,
            className: "".concat(o, " me-1")
          }), r.a.createElement("span", {
            className: o
          }, n, "%"))), r.a.createElement("div", {
            className: "d-flex ms-auto"
          }, r.a.createElement(k.a, {
            variant: "secondary",
            size: "sm",
            className: "me-2"
          }, "Month"), r.a.createElement(k.a, {
            variant: "primary",
            size: "sm",
            className: "me-3"
          }, "Week"))), r.a.createElement(b.a.Body, {
            className: "p-2"
          }, r.a.createElement(Oe, null)))
        },
        ca = function (e) {
          var a = e.title,
            t = e.value,
            n = e.percentage,
            l = n < 0 ? h.c : h.f,
            o = n < 0 ? "text-danger" : "text-success";
          return r.a.createElement(b.a, {
            className: "bg-secondary-alt shadow-sm"
          }, r.a.createElement(b.a.Header, {
            className: "d-md-flex flex-row align-items-center flex-0"
          }, r.a.createElement("div", {
            className: "d-block mb-3 mb-md-0"
          }, r.a.createElement("h5", {
            className: "fw-normal mb-2"
          }, a), r.a.createElement("h3", null, "$", t), r.a.createElement("small", {
            className: "fw-bold mt-2"
          }, r.a.createElement("span", {
            className: "me-2"
          }, "Yesterday"), r.a.createElement(u.a, {
            icon: l,
            className: "".concat(o, " me-1")
          }), r.a.createElement("span", {
            className: o
          }, n, "%"))), r.a.createElement("div", {
            className: "d-flex ms-auto"
          }, r.a.createElement(k.a, {
            variant: "secondary",
            size: "sm",
            className: "me-2"
          }, "Month"), r.a.createElement(k.a, {
            variant: "primary",
            size: "sm",
            className: "me-3"
          }, "Week"))), r.a.createElement(b.a.Body, {
            className: "p-2"
          }, r.a.createElement(Me, null)))
        },
        ma = function () {
          return r.a.createElement(b.a, {
            border: "light",
            className: "shadow-sm"
          }, r.a.createElement(b.a.Body, null, r.a.createElement("h5", null, "Acquisition"), r.a.createElement("p", null, "Tells you where your visitors originated from, such as search engines, social networks or website referrals."), r.a.createElement("div", {
            className: "d-block"
          }, r.a.createElement("div", {
            className: "d-flex align-items-center pt-3 me-5"
          }, r.a.createElement("div", {
            className: "icon icon-shape icon-sm icon-shape-danger rounded me-3"
          }, r.a.createElement(u.a, {
            icon: h.r
          })), r.a.createElement("div", {
            className: "d-block"
          }, r.a.createElement("label", {
            className: "mb-0"
          }, "Bounce Rate"), r.a.createElement("h4", {
            className: "mb-0"
          }, "33.50%"))), r.a.createElement("div", {
            className: "d-flex align-items-center pt-3"
          }, r.a.createElement("div", {
            className: "icon icon-shape icon-sm icon-shape-quaternary rounded me-3"
          }, r.a.createElement(u.a, {
            icon: h.q
          })), r.a.createElement("div", {
            className: "d-block"
          }, r.a.createElement("label", {
            className: "mb-0"
          }, "Sessions"), r.a.createElement("h4", {
            className: "mb-0"
          }, "9,567"))))))
        },
        ia = t(1079),
        da = (t(978), t(981), t(154)),
        pa = t.n(da),
        ua = t(155),
        ha = t.n(ua),
        ga = t(156),
        Ea = t.n(ga),
        ba = t(157),
        fa = t.n(ba),
        va = t(158),
        Na = t.n(va),
        ya = t(348),
        wa = t.n(ya),
        xa = [{
          id: 1,
          views: 4.525,
          returnValue: 255,
          bounceRate: 42.55,
          pageName: "/demo/admin/index.html"
        }, {
          id: 2,
          views: 2.987,
          returnValue: 139,
          bounceRate: -43.52,
          pageName: "/demo/admin/forms.html"
        }, {
          id: 3,
          views: 2.844,
          returnValue: 124,
          bounceRate: -32.35,
          pageName: "/demo/admin/util.html"
        }, {
          id: 4,
          views: 1.22,
          returnValue: 55,
          bounceRate: 15.78,
          pageName: "/demo/admin/validation.html"
        }, {
          id: 5,
          views: 505,
          returnValue: 3,
          bounceRate: -75.12,
          pageName: "/demo/admin/modals.html"
        }],
        ka = [{
          id: 1,
          source: "Direct",
          sourceType: "Direct",
          trafficShare: 51,
          change: 2.45,
          sourceIcon: h.S,
          sourceIconColor: "gray"
        }, {
          id: 2,
          source: "Google Search",
          sourceType: "Search / Organic",
          trafficShare: 18,
          change: 17.67,
          sourceIcon: g.f,
          sourceIconColor: "info"
        }, {
          id: 3,
          source: "youtube.com",
          sourceType: "Social",
          category: "Arts and Entertainment",
          rank: 2,
          trafficShare: 27,
          sourceIcon: g.o,
          sourceIconColor: "danger"
        }, {
          id: 4,
          source: "yahoo.com",
          sourceType: "Referral",
          category: "News and Media",
          rank: 11,
          trafficShare: 8,
          change: -9.3,
          sourceIcon: g.n,
          sourceIconColor: "purple"
        }, {
          id: 5,
          source: "twitter.com",
          sourceType: "Social",
          category: "Social Networks",
          rank: 4,
          trafficShare: 4,
          sourceIcon: g.l,
          sourceIconColor: "info"
        }],
        Sa = [{
          id: 1,
          country: "United States",
          countryImage: pa.a,
          overallRank: 76,
          overallRankChange: -5,
          travelRank: 3,
          widgetsRank: 32,
          widgetsRankChange: 3
        }, {
          id: 2,
          country: "Canada",
          countryImage: ha.a,
          overallRank: 106,
          overallRankChange: 17,
          travelRank: 4,
          widgetsRank: 30,
          widgetsRankChange: 3
        }, {
          id: 4,
          country: "France",
          countryImage: fa.a,
          overallRank: 112,
          overallRankChange: 10,
          travelRank: 5,
          widgetsRank: 34,
          widgetsRankChange: 7
        }, {
          id: 5,
          country: "Japan",
          countryImage: Na.a,
          overallRank: 115,
          overallRankChange: 3,
          travelRank: 7,
          travelRankChange: 1,
          widgetsRank: 39,
          widgetsRankChange: -2
        }, {
          id: 3,
          country: "Germany",
          countryImage: Ea.a,
          overallRank: 147,
          overallRankChange: -12,
          travelRank: 10,
          travelRankChange: -1,
          widgetsRank: 12,
          widgetsRankChange: -5
        }, {
          id: 6,
          country: "Italy",
          countryImage: wa.a,
          overallRank: 220,
          overallRankChange: -56,
          travelRank: 11,
          travelRankChange: -3,
          widgetsRank: 89,
          widgetsRankChange: 2
        }],
        ja = [{
          id: 1,
          name: "install",
          usage: ["yarn install", "npm install"],
          description: "This command installs a package, and any packages that it depends on.",
          link: "https://docs.npmjs.com/cli/v6/commands/npm-install"
        }, {
          id: 2,
          name: "start",
          usage: ["yarn start", "npm start"],
          description: "This will determinate the start of your development server.",
          link: "https://create-react-app.dev/docs/available-scripts/#npm-start"
        }, {
          id: 3,
          name: "build",
          usage: ["yarn build", "npm build"],
          description: "Builds the app for production to the build folder. \nIt correctly bundles React in production mode and optimizes the build \nfor the best performance.",
          link: "https://create-react-app.dev/docs/available-scripts/#npm-run-build"
        }, {
          id: 4,
          name: "test",
          usage: ["yarn test", "npm run test"],
          description: "Runs the test watcher in an interactive mode. \n(Note that we haven't implemented any tests - this command is by default \nfrom the create-react-app)",
          link: "https://create-react-app.dev/docs/available-scripts/#npm-test"
        }, {
          id: 5,
          name: "eject",
          usage: ["yarn eject", "npm run eject"],
          description: "This command will remove the single build dependency from your project. \nImportant! We don't recommend using this command because \nour product may break after using it.",
          link: 7
        }],
        Ia = function (e) {
          var a = e.value,
            t = e.suffix,
            n = a < 0 ? h.c : h.f,
            l = a < 0 ? "text-danger" : "text-success";
          return a ? r.a.createElement("span", {
            className: l
          }, r.a.createElement(u.a, {
            icon: n
          }), r.a.createElement("span", {
            className: "fw-bold ms-1"
          }, Math.abs(a), t)) : "--"
        },
        Ba = function () {
          var e = function (e) {
            var a = e.pageName,
              t = e.views,
              n = e.returnValue,
              l = e.bounceRate,
              o = l < 0 ? h.g : h.h,
              s = l < 0 ? "text-danger" : "text-success";
            return r.a.createElement("tr", null, r.a.createElement("th", {
              scope: "row"
            }, a), r.a.createElement("td", null, t), r.a.createElement("td", null, "$", n), r.a.createElement("td", null, r.a.createElement(u.a, {
              icon: o,
              className: "".concat(s, " me-3")
            }), Math.abs(l), "%"))
          };
          return r.a.createElement(b.a, {
            border: "light",
            className: "shadow-sm"
          }, r.a.createElement(b.a.Header, null, r.a.createElement(S.a, {
            className: "align-items-center"
          }, r.a.createElement(E.a, null, r.a.createElement("h5", null, "Page visits")), r.a.createElement(E.a, {
            className: "text-end"
          }, r.a.createElement(k.a, {
            variant: "secondary",
            size: "sm"
          }, "See all")))), r.a.createElement(Be.a, {
            responsive: !0,
            className: "align-items-center table-flush"
          }, r.a.createElement("thead", {
            className: "thead-light"
          }, r.a.createElement("tr", null, r.a.createElement("th", {
            scope: "col"
          }, "Page name"), r.a.createElement("th", {
            scope: "col"
          }, "Page Views"), r.a.createElement("th", {
            scope: "col"
          }, "Page Value"), r.a.createElement("th", {
            scope: "col"
          }, "Bounce rate"))), r.a.createElement("tbody", null, xa.map((function (a) {
            return r.a.createElement(e, Object.assign({
              key: "page-visit-".concat(a.id)
            }, a))
          })))))
        },
        Ca = function () {
          var e = function (e) {
            var a = e.id,
              t = e.source,
              n = e.sourceIcon,
              l = e.sourceIconColor,
              o = e.sourceType,
              s = e.category,
              c = e.rank,
              m = e.trafficShare,
              i = e.change;
            return r.a.createElement("tr", null, r.a.createElement("td", null, r.a.createElement(b.a.Link, {
              href: "#",
              className: "text-primary fw-bold"
            }, a)), r.a.createElement("td", {
              className: "fw-bold"
            }, r.a.createElement(u.a, {
              icon: n,
              className: "icon icon-xs text-".concat(l, " w-30")
            }), t), r.a.createElement("td", null, o), r.a.createElement("td", null, s || "--"), r.a.createElement("td", null, c || "--"), r.a.createElement("td", null, r.a.createElement(S.a, {
              className: "d-flex align-items-center"
            }, r.a.createElement(E.a, {
              xs: 12,
              xl: 2,
              className: "px-0"
            }, r.a.createElement("small", {
              className: "fw-bold"
            }, m, "%")), r.a.createElement(E.a, {
              xs: 12,
              xl: 10,
              className: "px-0 px-xl-1"
            }, r.a.createElement(Pe.a, {
              variant: "primary",
              className: "progress-lg mb-0",
              now: m,
              min: 0,
              max: 100
            })))), r.a.createElement("td", null, r.a.createElement(Ia, {
              value: i,
              suffix: "%"
            })))
          };
          return r.a.createElement(b.a, {
            border: "light",
            className: "shadow-sm mb-4"
          }, r.a.createElement(b.a.Body, {
            className: "pb-0"
          }, r.a.createElement(Be.a, {
            responsive: !0,
            className: "table-centered table-nowrap rounded mb-0"
          }, r.a.createElement("thead", {
            className: "thead-light"
          }, r.a.createElement("tr", null, r.a.createElement("th", {
            className: "border-0"
          }, "#"), r.a.createElement("th", {
            className: "border-0"
          }, "Traffic Source"), r.a.createElement("th", {
            className: "border-0"
          }, "Source Type"), r.a.createElement("th", {
            className: "border-0"
          }, "Category"), r.a.createElement("th", {
            className: "border-0"
          }, "Global Rank"), r.a.createElement("th", {
            className: "border-0"
          }, "Traffic Share"), r.a.createElement("th", {
            className: "border-0"
          }, "Change"))), r.a.createElement("tbody", null, ka.map((function (a) {
            return r.a.createElement(e, Object.assign({
              key: "page-traffic-".concat(a.id)
            }, a))
          }))))))
        },
        _a = function () {
          var e = function (e) {
            var a = e.country,
              t = e.countryImage,
              n = e.overallRank,
              l = e.overallRankChange,
              o = e.travelRank,
              s = e.travelRankChange,
              c = e.widgetsRank,
              m = e.widgetsRankChange;
            return r.a.createElement("tr", null, r.a.createElement("td", {
              className: "border-0"
            }, r.a.createElement(b.a.Link, {
              href: "#",
              className: "d-flex align-items-center"
            }, r.a.createElement(f.a, {
              src: t,
              className: "image-small rounded-circle me-2"
            }), r.a.createElement("div", null, r.a.createElement("span", {
              className: "h6"
            }, a)))), r.a.createElement("td", {
              className: "fw-bold border-0"
            }, n || "-"), r.a.createElement("td", {
              className: "border-0"
            }, r.a.createElement(Ia, {
              value: l
            })), r.a.createElement("td", {
              className: "fw-bold border-0"
            }, o || "-"), r.a.createElement("td", {
              className: "border-0"
            }, r.a.createElement(Ia, {
              value: s
            })), r.a.createElement("td", {
              className: "fw-bold border-0"
            }, c || "-"), r.a.createElement("td", {
              className: "border-0"
            }, r.a.createElement(Ia, {
              value: m
            })))
          };
          return r.a.createElement(b.a, {
            border: "light",
            className: "shadow-sm"
          }, r.a.createElement(b.a.Body, {
            className: "pb-0"
          }, r.a.createElement(Be.a, {
            responsive: !0,
            className: "table-centered table-nowrap rounded mb-0"
          }, r.a.createElement("thead", {
            className: "thead-light"
          }, r.a.createElement("tr", null, r.a.createElement("th", {
            className: "border-0"
          }, "Country"), r.a.createElement("th", {
            className: "border-0"
          }, "All"), r.a.createElement("th", {
            className: "border-0"
          }, "All Change"), r.a.createElement("th", {
            className: "border-0"
          }, "Travel & Local"), r.a.createElement("th", {
            className: "border-0"
          }, "Travel & Local Change"), r.a.createElement("th", {
            className: "border-0"
          }, "Widgets"), r.a.createElement("th", {
            className: "border-0"
          }, "Widgets Change"))), r.a.createElement("tbody", null, Sa.map((function (a) {
            return r.a.createElement(e, Object.assign({
              key: "ranking-".concat(a.id)
            }, a))
          }))))))
        },
        Ta = function (e) {
          var a = Object(n.useState)({
              totalTransactions: 0,
              transactions: []
            }),
            t = Object(m.a)(a, 2),
            l = t[0],
            o = t[1],
            c = Object(n.useState)(!1),
            i = Object(m.a)(c, 2),
            d = i[0],
            g = i[1];
          ! function e() {
            window.WebSocket = window.WebSocket || window.MozWebSocket;
            fetch("/dashboard/parameters/apiHost").then((response) => {
              return response.json();
            }).then((result) => {
              var a = new WebSocket("wss://" + result["apiHost"] + "/broadcastservice");
              a.onopen = function () {
                console.log((new Date).toISOString() + " wss broadcastservice connection opened.")
              }, a.onerror = function (e) {
                console.log((new Date).toISOString() + " wss broadcastservice connection error: " + JSON.stringify(e))
              }, a.onclose = function (a) {
                console.log((new Date).toISOString() + " wss broadcastservice connection closed."), setTimeout((function () {
                  e()
                }), 1e3)
              }, a.onmessage = function (e) {
                console.log((new Date).toISOString() + " wss broadcastservice received message: " + e.data), E()
              }
            });
          }(), Object(n.useEffect)((function () {
            0 == l.totalTransactions && E()
          }), [o]);
          var E = function () {
              fetch("/dashboard/orders").then((function (e) {
                return e.json()
              })).then((function (e) {
                o({
                  totalTransactions: e.orders.length,
                  transactions: e.orders
                });
                for (var a = 0; a < e.orders.length; a++)
                  if (e.orders[a].Latitude) {
                    g(!0);
                    break
                  }
              }))
            },
            f = function (e) {
              var a = e.SalesOrder,
                t = e.CreatedByUser,
                n = e.CreationDate,
                l = e.TotalNetAmount,
                o = e.OverallTotalDeliveryStatus,
                c = "DELIVERED" === o ? "success" : "FULFILLMENT" === o ? "warning" : "SCHEDULED" === o ? "danger" : "primary";
              return r.a.createElement("tr", null, r.a.createElement("td", null, r.a.createElement(b.a.Link, {
                as: s.Link,
                to: p.Invoice.path,
                className: "fw-normal"
              }, a)), r.a.createElement("td", null, r.a.createElement("span", {
                className: "fw-normal"
              }, t)), r.a.createElement("td", null, r.a.createElement("span", {
                className: "fw-normal"
              }, n)), r.a.createElement("td", null, r.a.createElement("span", {
                className: "fw-normal"
              }, n)), r.a.createElement("td", null, r.a.createElement("span", {
                className: "fw-normal"
              }, "$", parseFloat(l).toFixed(2))), r.a.createElement("td", null, r.a.createElement("span", {
                className: "fw-normal text-".concat(c)
              }, o)), r.a.createElement("td", null, r.a.createElement(_e.a, {
                as: Te.a
              }, r.a.createElement(_e.a.Toggle, {
                as: k.a,
                split: !0,
                variant: "link",
                className: "text-dark m-0 p-0"
              }, r.a.createElement("span", {
                className: "icon icon-sm"
              }, r.a.createElement(u.a, {
                icon: h.I,
                className: "icon-dark"
              }))), r.a.createElement(_e.a.Menu, null, r.a.createElement(_e.a.Item, null, r.a.createElement(u.a, {
                icon: h.M,
                className: "me-2"
              }), " View Details"), r.a.createElement(_e.a.Item, null, r.a.createElement(u.a, {
                icon: h.H,
                className: "me-2"
              }), " Edit"), r.a.createElement(_e.a.Item, {
                className: "text-danger"
              }, r.a.createElement(u.a, {
                icon: h.rb,
                className: "me-2"
              }), " Remove")))))
            };
          return r.a.createElement("div", null, d && r.a.createElement(b.a, {
            border: "light",
            className: "table-wrapper table-responsive shadow-sm"
          }, r.a.createElement(b.a.Body, {
            className: "pt-0"
          }, r.a.createElement("iframe", {
            id: "maps-frame",
            src: "/dashboard/map.html",
            style: {
              width: "100%",
              height: "600px"
            }
          }))), r.a.createElement("br", null), r.a.createElement(b.a, {
            border: "light",
            className: "table-wrapper table-responsive shadow-sm"
          }, r.a.createElement(b.a.Body, {
            className: "pt-0"
          }, r.a.createElement(Be.a, {
            hover: !0,
            className: "user-table align-items-center"
          }, r.a.createElement("thead", null, r.a.createElement("tr", null, r.a.createElement("th", {
            className: "border-bottom"
          }, "#"), r.a.createElement("th", {
            className: "border-bottom"
          }, "Created By"), r.a.createElement("th", {
            className: "border-bottom"
          }, "Issue Date"), r.a.createElement("th", {
            className: "border-bottom"
          }, "Due Date"), r.a.createElement("th", {
            className: "border-bottom"
          }, "Total"), r.a.createElement("th", {
            className: "border-bottom"
          }, "Status"), r.a.createElement("th", {
            className: "border-bottom"
          }, "Action"))), r.a.createElement("tbody", null, l.transactions.map((function (e) {
            return r.a.createElement(f, Object.assign({
              key: "transaction-".concat(e.SalesOrder)
            }, e))
          })))), r.a.createElement(b.a.Footer, {
            className: "px-3 border-0 d-lg-flex align-items-center justify-content-between"
          }, r.a.createElement(x.a, null, r.a.createElement(ia.a, {
            className: "mb-2 mb-lg-0"
          }, r.a.createElement(ia.a.Prev, null, "Previous"), r.a.createElement(ia.a.Item, {
            active: !0
          }, "1"), r.a.createElement(ia.a.Item, null, "2"), r.a.createElement(ia.a.Item, null, "3"), r.a.createElement(ia.a.Item, null, "4"), r.a.createElement(ia.a.Item, null, "5"), r.a.createElement(ia.a.Next, null, "Next"))), r.a.createElement("small", {
            className: "fw-bold"
          }, "Showing ", r.a.createElement("b", null, l.totalTransactions), " out of ", r.a.createElement("b", null, "25"), " entries")))))
        },
        Pa = function () {
          var e = function (e) {
            var a = e.name,
              t = e.usage,
              n = void 0 === t ? [] : t,
              l = e.description,
              o = e.link;
            return r.a.createElement("tr", null, r.a.createElement("td", {
              className: "border-0",
              style: {
                width: "5%"
              }
            }, r.a.createElement("code", null, a)), r.a.createElement("td", {
              className: "fw-bold border-0",
              style: {
                width: "5%"
              }
            }, r.a.createElement("ul", {
              className: "ps-0"
            }, n.map((function (e) {
              return r.a.createElement("ol", {
                key: e,
                className: "ps-0"
              }, r.a.createElement("code", null, e))
            })))), r.a.createElement("td", {
              className: "border-0",
              style: {
                width: "50%"
              }
            }, r.a.createElement("pre", {
              className: "m-0 p-0"
            }, l)), r.a.createElement("td", {
              className: "border-0",
              style: {
                width: "40%"
              }
            }, r.a.createElement("pre", null, r.a.createElement(b.a.Link, {
              href: o,
              target: "_blank"
            }, "Read More ", r.a.createElement(u.a, {
              icon: h.L,
              className: "ms-1"
            })))))
          };
          return r.a.createElement(b.a, {
            border: "light",
            className: "shadow-sm"
          }, r.a.createElement(b.a.Body, {
            className: "p-0"
          }, r.a.createElement(Be.a, {
            responsive: !0,
            className: "table-centered rounded",
            style: {
              whiteSpace: "pre-wrap",
              wordWrap: "break-word"
            }
          }, r.a.createElement("thead", {
            className: "thead-light"
          }, r.a.createElement("tr", null, r.a.createElement("th", {
            className: "border-0",
            style: {
              width: "5%"
            }
          }, "Name"), r.a.createElement("th", {
            className: "border-0",
            style: {
              width: "5%"
            }
          }, "Usage"), r.a.createElement("th", {
            className: "border-0",
            style: {
              width: "50%"
            }
          }, "Description"), r.a.createElement("th", {
            className: "border-0",
            style: {
              width: "40%"
            }
          }, "Extra"))), r.a.createElement("tbody", null, ja.map((function (a) {
            return r.a.createElement(e, Object.assign({
              key: "command-".concat(a.id)
            }, a))
          }))))))
        },
        Da = [{
          id: 1,
          label: "Desktop",
          value: 60,
          color: "secondary",
          icon: h.F
        }, {
          id: 2,
          label: "Mobile Web",
          value: 30,
          color: "primary",
          icon: h.Z
        }, {
          id: 3,
          label: "Tablet Web",
          value: 10,
          color: "tertiary",
          icon: h.lb
        }],
        Aa = [{
          id: 1,
          label: "July",
          value: [1, 5, 2, 5, 4, 3],
          color: "primary"
        }, {
          id: 2,
          label: "August",
          value: [2, 3, 4, 8, 1, 2],
          color: "secondary"
        }],
        Fa = function () {
          return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
            className: "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4"
          }, r.a.createElement(_e.a, {
            className: "btn-toolbar"
          }, r.a.createElement(_e.a.Toggle, {
            as: k.a,
            variant: "primary",
            size: "sm",
            className: "me-2"
          }, r.a.createElement(u.a, {
            icon: h.eb,
            className: "me-2"
          }), "New Task"), r.a.createElement(_e.a.Menu, {
            className: "dashboard-dropdown dropdown-menu-left mt-2"
          }, r.a.createElement(_e.a.Item, {
            className: "fw-bold"
          }, r.a.createElement(u.a, {
            icon: h.nb,
            className: "me-2"
          }), " New Task"), r.a.createElement(_e.a.Item, {
            className: "fw-bold"
          }, r.a.createElement(u.a, {
            icon: h.z,
            className: "me-2"
          }), " Upload Files"), r.a.createElement(_e.a.Item, {
            className: "fw-bold"
          }, r.a.createElement(u.a, {
            icon: h.ub,
            className: "me-2"
          }), " Preview Security"), r.a.createElement(_e.a.Divider, null), r.a.createElement(_e.a.Item, {
            className: "fw-bold"
          }, r.a.createElement(u.a, {
            icon: h.fb,
            className: "text-danger me-2"
          }), " Upgrade to Pro"))), r.a.createElement(Te.a, null, r.a.createElement(k.a, {
            variant: "outline-primary",
            size: "sm"
          }, "Share"), r.a.createElement(k.a, {
            variant: "outline-primary",
            size: "sm"
          }, "Export"))), r.a.createElement(S.a, {
            className: "justify-content-md-center"
          }, r.a.createElement(E.a, {
            xs: 12,
            className: "mb-4 d-none d-sm-block"
          }, r.a.createElement(sa, {
            title: "Sales Value",
            value: "10,567",
            percentage: 10.57
          })), r.a.createElement(E.a, {
            xs: 12,
            className: "mb-4 d-sm-none"
          }, r.a.createElement(ca, {
            title: "Sales Value",
            value: "10,567",
            percentage: 10.57
          })), r.a.createElement(E.a, {
            xs: 12,
            sm: 6,
            xl: 4,
            className: "mb-4"
          }, r.a.createElement(aa, {
            category: "Customers",
            title: "345k",
            period: "Feb 1 - Apr 1",
            percentage: 18.2,
            icon: h.s,
            iconColor: "shape-secondary"
          })), r.a.createElement(E.a, {
            xs: 12,
            sm: 6,
            xl: 4,
            className: "mb-4"
          }, r.a.createElement(aa, {
            category: "Revenue",
            title: "$43,594",
            period: "Feb 1 - Apr 1",
            percentage: 28.4,
            icon: h.p,
            iconColor: "shape-tertiary"
          })), r.a.createElement(E.a, {
            xs: 12,
            sm: 6,
            xl: 4,
            className: "mb-4"
          }, r.a.createElement(ta, {
            title: "Traffic Share",
            data: Da
          }))), r.a.createElement(S.a, null, r.a.createElement(E.a, {
            xs: 12,
            xl: 12,
            className: "mb-4"
          }, r.a.createElement(S.a, null, r.a.createElement(E.a, {
            xs: 12,
            xl: 8,
            className: "mb-4"
          }, r.a.createElement(S.a, null, r.a.createElement(E.a, {
            xs: 12,
            className: "mb-4"
          }, r.a.createElement(Ba, null)), r.a.createElement(E.a, {
            xs: 12,
            lg: 6,
            className: "mb-4"
          }, r.a.createElement(ra, null)), r.a.createElement(E.a, {
            xs: 12,
            lg: 6,
            className: "mb-4"
          }, r.a.createElement(la, null)))), r.a.createElement(E.a, {
            xs: 12,
            xl: 4
          }, r.a.createElement(S.a, null, r.a.createElement(E.a, {
            xs: 12,
            className: "mb-4"
          }, r.a.createElement(na, {
            title: "Total orders",
            value: 452,
            percentage: 18.2,
            data: Aa
          })), r.a.createElement(E.a, {
            xs: 12,
            className: "px-0 mb-4"
          }, r.a.createElement(oa, null)), r.a.createElement(E.a, {
            xs: 12,
            className: "px-0"
          }, r.a.createElement(ma, null))))))))
        },
        La = t(1080),
        Ra = t(1063),
        Oa = function () {
          return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
            className: "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4"
          }, r.a.createElement("div", {
            className: "d-block mb-4 mb-md-0"
          }, r.a.createElement(La.a, {
            className: "d-none d-md-inline-block",
            listProps: {
              className: "breadcrumb-dark breadcrumb-transparent"
            }
          }, r.a.createElement(La.a.Item, null, r.a.createElement(u.a, {
            icon: h.V
          })), r.a.createElement(La.a.Item, null, "Apigee"), r.a.createElement(La.a.Item, {
            active: !0
          }, "Sales Orders")), r.a.createElement("h4", null, "Sales Orders"), r.a.createElement("p", {
            className: "mb-0"
          }, "Your sales orders analytics dashboard.")), r.a.createElement("div", {
            className: "btn-toolbar mb-2 mb-md-0"
          }, r.a.createElement(Te.a, null, r.a.createElement(k.a, {
            variant: "outline-primary",
            size: "sm"
          }, "Share"), r.a.createElement(k.a, {
            variant: "outline-primary",
            size: "sm"
          }, "Export")))), r.a.createElement("div", {
            className: "table-settings mb-4"
          }, r.a.createElement(S.a, {
            className: "justify-content-between align-items-center"
          }, r.a.createElement(E.a, {
            xs: 8,
            md: 6,
            lg: 3,
            xl: 4
          }, r.a.createElement(Ra.a, null, r.a.createElement(Ra.a.Text, null, r.a.createElement(u.a, {
            icon: h.gb
          })), r.a.createElement(j.a.Control, {
            type: "text",
            placeholder: "Search"
          }))), r.a.createElement(E.a, {
            xs: 4,
            md: 2,
            xl: 1,
            className: "ps-md-0 text-end"
          }, r.a.createElement(_e.a, {
            as: Te.a
          }, r.a.createElement(_e.a.Toggle, {
            split: !0,
            as: k.a,
            variant: "link",
            className: "text-dark m-0 p-0"
          }, r.a.createElement("span", {
            className: "icon icon-sm icon-gray"
          }, r.a.createElement(u.a, {
            icon: h.B
          }))), r.a.createElement(_e.a.Menu, {
            className: "dropdown-menu-xs dropdown-menu-right"
          }, r.a.createElement(_e.a.Item, {
            className: "fw-bold text-dark"
          }, "Show"), r.a.createElement(_e.a.Item, {
            className: "d-flex fw-bold"
          }, "10 ", r.a.createElement("span", {
            className: "icon icon-small ms-auto"
          }, r.a.createElement(u.a, {
            icon: h.u
          }))), r.a.createElement(_e.a.Item, {
            className: "fw-bold"
          }, "20"), r.a.createElement(_e.a.Item, {
            className: "fw-bold"
          }, "30")))))), r.a.createElement(Ta, null))
        },
        Ma = t(82),
        Ga = t.n(Ma),
        Ua = t(160),
        za = t.n(Ua),
        Ha = function () {
          var e = Object(n.useState)(""),
            a = Object(m.a)(e, 2),
            t = a[0],
            l = a[1];
          return r.a.createElement(b.a, {
            border: "light",
            className: "bg-white shadow-sm mb-4"
          }, r.a.createElement(b.a.Body, null, r.a.createElement("h5", {
            className: "mb-4"
          }, "General information"), r.a.createElement(j.a, null, r.a.createElement(S.a, null, r.a.createElement(E.a, {
            md: 6,
            className: "mb-3"
          }, r.a.createElement(j.a.Group, {
            id: "firstName"
          }, r.a.createElement(j.a.Label, null, "First Name"), r.a.createElement(j.a.Control, {
            required: !0,
            type: "text",
            placeholder: "Enter your first name"
          }))), r.a.createElement(E.a, {
            md: 6,
            className: "mb-3"
          }, r.a.createElement(j.a.Group, {
            id: "lastName"
          }, r.a.createElement(j.a.Label, null, "Last Name"), r.a.createElement(j.a.Control, {
            required: !0,
            type: "text",
            placeholder: "Also your last name"
          })))), r.a.createElement(S.a, {
            className: "align-items-center"
          }, r.a.createElement(E.a, {
            md: 6,
            className: "mb-3"
          }, r.a.createElement(j.a.Group, {
            id: "birthday"
          }, r.a.createElement(j.a.Label, null, "Birthday"), r.a.createElement(za.a, {
            timeFormat: !1,
            onChange: l,
            renderInput: function (e, a) {
              return r.a.createElement(Ra.a, null, r.a.createElement(Ra.a.Text, null, r.a.createElement(u.a, {
                icon: h.m
              })), r.a.createElement(j.a.Control, {
                required: !0,
                type: "text",
                value: t ? Ga()(t).format("MM/DD/YYYY") : "",
                placeholder: "mm/dd/yyyy",
                onFocus: a,
                onChange: function () {}
              }))
            }
          }))), r.a.createElement(E.a, {
            md: 6,
            className: "mb-3"
          }, r.a.createElement(j.a.Group, {
            id: "gender"
          }, r.a.createElement(j.a.Label, null, "Gender"), r.a.createElement(j.a.Select, {
            defaultValue: "0"
          }, r.a.createElement("option", {
            value: "0"
          }, "Gender"), r.a.createElement("option", {
            value: "1"
          }, "Female"), r.a.createElement("option", {
            value: "2"
          }, "Male"))))), r.a.createElement(S.a, null, r.a.createElement(E.a, {
            md: 6,
            className: "mb-3"
          }, r.a.createElement(j.a.Group, {
            id: "emal"
          }, r.a.createElement(j.a.Label, null, "Email"), r.a.createElement(j.a.Control, {
            required: !0,
            type: "email",
            placeholder: "name@company.com"
          }))), r.a.createElement(E.a, {
            md: 6,
            className: "mb-3"
          }, r.a.createElement(j.a.Group, {
            id: "phone"
          }, r.a.createElement(j.a.Label, null, "Phone"), r.a.createElement(j.a.Control, {
            required: !0,
            type: "number",
            placeholder: "+12-345 678 910"
          })))), r.a.createElement("h5", {
            className: "my-4"
          }, "Address"), r.a.createElement(S.a, null, r.a.createElement(E.a, {
            sm: 9,
            className: "mb-3"
          }, r.a.createElement(j.a.Group, {
            id: "address"
          }, r.a.createElement(j.a.Label, null, "Address"), r.a.createElement(j.a.Control, {
            required: !0,
            type: "text",
            placeholder: "Enter your home address"
          }))), r.a.createElement(E.a, {
            sm: 3,
            className: "mb-3"
          }, r.a.createElement(j.a.Group, {
            id: "addressNumber"
          }, r.a.createElement(j.a.Label, null, "Number"), r.a.createElement(j.a.Control, {
            required: !0,
            type: "number",
            placeholder: "No."
          })))), r.a.createElement(S.a, null, r.a.createElement(E.a, {
            sm: 4,
            className: "mb-3"
          }, r.a.createElement(j.a.Group, {
            id: "city"
          }, r.a.createElement(j.a.Label, null, "City"), r.a.createElement(j.a.Control, {
            required: !0,
            type: "text",
            placeholder: "City"
          }))), r.a.createElement(E.a, {
            sm: 4,
            className: "mb-3"
          }, r.a.createElement(j.a.Group, {
            className: "mb-2"
          }, r.a.createElement(j.a.Label, null, "Select state"), r.a.createElement(j.a.Select, {
            id: "state",
            defaultValue: "0"
          }, r.a.createElement("option", {
            value: "0"
          }, "State"), r.a.createElement("option", {
            value: "AL"
          }, "Alabama"), r.a.createElement("option", {
            value: "AK"
          }, "Alaska"), r.a.createElement("option", {
            value: "AZ"
          }, "Arizona"), r.a.createElement("option", {
            value: "AR"
          }, "Arkansas"), r.a.createElement("option", {
            value: "CA"
          }, "California"), r.a.createElement("option", {
            value: "CO"
          }, "Colorado"), r.a.createElement("option", {
            value: "CT"
          }, "Connecticut"), r.a.createElement("option", {
            value: "DE"
          }, "Delaware"), r.a.createElement("option", {
            value: "DC"
          }, "District Of Columbia"), r.a.createElement("option", {
            value: "FL"
          }, "Florida"), r.a.createElement("option", {
            value: "GA"
          }, "Georgia"), r.a.createElement("option", {
            value: "HI"
          }, "Hawaii"), r.a.createElement("option", {
            value: "ID"
          }, "Idaho"), r.a.createElement("option", {
            value: "IL"
          }, "Illinois"), r.a.createElement("option", {
            value: "IN"
          }, "Indiana"), r.a.createElement("option", {
            value: "IA"
          }, "Iowa"), r.a.createElement("option", {
            value: "KS"
          }, "Kansas"), r.a.createElement("option", {
            value: "KY"
          }, "Kentucky"), r.a.createElement("option", {
            value: "LA"
          }, "Louisiana"), r.a.createElement("option", {
            value: "ME"
          }, "Maine"), r.a.createElement("option", {
            value: "MD"
          }, "Maryland"), r.a.createElement("option", {
            value: "MA"
          }, "Massachusetts"), r.a.createElement("option", {
            value: "MI"
          }, "Michigan"), r.a.createElement("option", {
            value: "MN"
          }, "Minnesota"), r.a.createElement("option", {
            value: "MS"
          }, "Mississippi"), r.a.createElement("option", {
            value: "MO"
          }, "Missouri"), r.a.createElement("option", {
            value: "MT"
          }, "Montana"), r.a.createElement("option", {
            value: "NE"
          }, "Nebraska"), r.a.createElement("option", {
            value: "NV"
          }, "Nevada"), r.a.createElement("option", {
            value: "NH"
          }, "New Hampshire"), r.a.createElement("option", {
            value: "NJ"
          }, "New Jersey"), r.a.createElement("option", {
            value: "NM"
          }, "New Mexico"), r.a.createElement("option", {
            value: "NY"
          }, "New York"), r.a.createElement("option", {
            value: "NC"
          }, "North Carolina"), r.a.createElement("option", {
            value: "ND"
          }, "North Dakota"), r.a.createElement("option", {
            value: "OH"
          }, "Ohio"), r.a.createElement("option", {
            value: "OK"
          }, "Oklahoma"), r.a.createElement("option", {
            value: "OR"
          }, "Oregon"), r.a.createElement("option", {
            value: "PA"
          }, "Pennsylvania"), r.a.createElement("option", {
            value: "RI"
          }, "Rhode Island"), r.a.createElement("option", {
            value: "SC"
          }, "South Carolina"), r.a.createElement("option", {
            value: "SD"
          }, "South Dakota"), r.a.createElement("option", {
            value: "TN"
          }, "Tennessee"), r.a.createElement("option", {
            value: "TX"
          }, "Texas"), r.a.createElement("option", {
            value: "UT"
          }, "Utah"), r.a.createElement("option", {
            value: "VT"
          }, "Vermont"), r.a.createElement("option", {
            value: "VA"
          }, "Virginia"), r.a.createElement("option", {
            value: "WA"
          }, "Washington"), r.a.createElement("option", {
            value: "WV"
          }, "West Virginia"), r.a.createElement("option", {
            value: "WI"
          }, "Wisconsin"), r.a.createElement("option", {
            value: "WY"
          }, "Wyoming")))), r.a.createElement(E.a, {
            sm: 4
          }, r.a.createElement(j.a.Group, {
            id: "zip"
          }, r.a.createElement(j.a.Label, null, "ZIP"), r.a.createElement(j.a.Control, {
            required: !0,
            type: "tel",
            placeholder: "ZIP"
          })))), r.a.createElement("div", {
            className: "mt-3"
          }, r.a.createElement(k.a, {
            variant: "primary",
            type: "submit"
          }, "Save All")))))
        },
        Ka = function () {
          return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
            className: "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4"
          }, r.a.createElement(_e.a, null, r.a.createElement(_e.a.Toggle, {
            as: k.a,
            variant: "secondary",
            className: "text-dark me-2"
          }, r.a.createElement(u.a, {
            icon: h.eb,
            className: "me-2"
          }), r.a.createElement("span", null, "New")), r.a.createElement(_e.a.Menu, {
            className: "dashboard-dropdown dropdown-menu-left mt-2"
          }, r.a.createElement(_e.a.Item, null, r.a.createElement(u.a, {
            icon: h.N,
            className: "me-2"
          }), " Document"), r.a.createElement(_e.a.Item, null, r.a.createElement(u.a, {
            icon: h.E,
            className: "me-2"
          }), " Message"), r.a.createElement(_e.a.Item, null, r.a.createElement(u.a, {
            icon: h.k,
            className: "me-2"
          }), " Product"), r.a.createElement(_e.a.Divider, null), r.a.createElement(_e.a.Item, null, r.a.createElement(u.a, {
            icon: h.fb,
            className: "text-danger me-2"
          }), " Subscription Plan"))), r.a.createElement("div", {
            className: "d-flex"
          }, r.a.createElement(_e.a, null, r.a.createElement(_e.a.Toggle, {
            as: k.a,
            variant: "primary"
          }, r.a.createElement(u.a, {
            icon: h.y,
            className: "me-2"
          }), " Reports", r.a.createElement("span", {
            className: "icon icon-small ms-1"
          }, r.a.createElement(u.a, {
            icon: h.w
          }))), r.a.createElement(_e.a.Menu, {
            className: "dashboard-dropdown dropdown-menu-left mt-1"
          }, r.a.createElement(_e.a.Item, null, r.a.createElement(u.a, {
            icon: h.k,
            className: "me-2"
          }), " Products"), r.a.createElement(_e.a.Item, null, r.a.createElement(u.a, {
            icon: h.jb,
            className: "me-2"
          }), " Customers"), r.a.createElement(_e.a.Item, null, r.a.createElement(u.a, {
            icon: h.o,
            className: "me-2"
          }), " Orders"), r.a.createElement(_e.a.Item, null, r.a.createElement(u.a, {
            icon: h.t,
            className: "me-2"
          }), " Console"), r.a.createElement(_e.a.Divider, null), r.a.createElement(_e.a.Item, null, r.a.createElement(u.a, {
            icon: h.fb,
            className: "text-success me-2"
          }), " All Reports"))))), r.a.createElement(S.a, null, r.a.createElement(E.a, {
            xs: 12,
            xl: 8
          }, r.a.createElement(Ha, null)), r.a.createElement(E.a, {
            xs: 12,
            xl: 4
          }, r.a.createElement(S.a, null, r.a.createElement(E.a, {
            xs: 12
          }, r.a.createElement(Ze, null)), r.a.createElement(E.a, {
            xs: 12
          }, r.a.createElement(ea, {
            title: "Select profile photo",
            photo: Je.a
          }))))))
        },
        Va = function () {
          return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
            className: "d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4"
          }, r.a.createElement("div", {
            className: "d-block mb-4 mb-xl-0"
          }, r.a.createElement(La.a, {
            className: "d-none d-md-inline-block",
            listProps: {
              className: "breadcrumb-dark breadcrumb-transparent"
            }
          }, r.a.createElement(La.a.Item, null, r.a.createElement(u.a, {
            icon: h.V
          })), r.a.createElement(La.a.Item, null, "Tables"), r.a.createElement(La.a.Item, {
            active: !0
          }, "Bootstrap tables")), r.a.createElement("h4", null, "Bootstrap tables"), r.a.createElement("p", {
            className: "mb-0"
          }, "Dozens of reusable components built to provide buttons, alerts, popovers, and more."))), r.a.createElement(Ca, null), r.a.createElement(_a, null))
        },
        Wa = t(89),
        Ya = t(83),
        qa = t.n(Ya),
        Ja = function () {
          return r.a.createElement("main", null, r.a.createElement("section", {
            className: "d-flex align-items-center my-5 mt-lg-6 mb-lg-5"
          }, r.a.createElement(w.a, null, r.a.createElement("p", {
            className: "text-center"
          }, r.a.createElement(b.a.Link, {
            as: s.Link,
            to: p.DashboardOverview.path,
            className: "text-gray-700"
          }, r.a.createElement(u.a, {
            icon: h.d,
            className: "me-2"
          }), " Back to homepage")), r.a.createElement(S.a, {
            className: "justify-content-center form-bg-image",
            style: {
              backgroundImage: "url(".concat(qa.a, ")")
            }
          }, r.a.createElement(E.a, {
            xs: 12,
            className: "d-flex align-items-center justify-content-center"
          }, r.a.createElement("div", {
            className: "bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500"
          }, r.a.createElement("div", {
            className: "text-center text-md-center mb-4 mt-md-0"
          }, r.a.createElement("h3", {
            className: "mb-0"
          }, "Sign in to our platform")), r.a.createElement(j.a, {
            className: "mt-4"
          }, r.a.createElement(j.a.Group, {
            id: "email",
            className: "mb-4"
          }, r.a.createElement(j.a.Label, null, "Your Email"), r.a.createElement(Ra.a, null, r.a.createElement(Ra.a.Text, null, r.a.createElement(u.a, {
            icon: h.J
          })), r.a.createElement(j.a.Control, {
            autoFocus: !0,
            required: !0,
            type: "email",
            placeholder: "example@company.com"
          }))), r.a.createElement(j.a.Group, null, r.a.createElement(j.a.Group, {
            id: "password",
            className: "mb-4"
          }, r.a.createElement(j.a.Label, null, "Your Password"), r.a.createElement(Ra.a, null, r.a.createElement(Ra.a.Text, null, r.a.createElement(u.a, {
            icon: h.sb
          })), r.a.createElement(j.a.Control, {
            required: !0,
            type: "password",
            placeholder: "Password"
          }))), r.a.createElement("div", {
            className: "d-flex justify-content-between align-items-center mb-4"
          }, r.a.createElement(j.a.Check, {
            type: "checkbox"
          }, r.a.createElement(Wa.a.Input, {
            id: "defaultCheck5",
            className: "me-2"
          }), r.a.createElement(Wa.a.Label, {
            htmlFor: "defaultCheck5",
            className: "mb-0"
          }, "Remember me")), r.a.createElement(b.a.Link, {
            className: "small text-end"
          }, "Lost password?"))), r.a.createElement(k.a, {
            variant: "primary",
            type: "submit",
            className: "w-100"
          }, "Sign in")), r.a.createElement("div", {
            className: "mt-3 mb-4 text-center"
          }, r.a.createElement("span", {
            className: "fw-normal"
          }, "or login with")), r.a.createElement("div", {
            className: "d-flex justify-content-center my-4"
          }, r.a.createElement(k.a, {
            variant: "outline-light",
            className: "btn-icon-only btn-pill text-facebook me-2"
          }, r.a.createElement(u.a, {
            icon: g.d
          })), r.a.createElement(k.a, {
            variant: "outline-light",
            className: "btn-icon-only btn-pill text-twitter me-2"
          }, r.a.createElement(u.a, {
            icon: g.l
          })), r.a.createElement(k.a, {
            variant: "outline-light",
            className: "btn-icon-only btn-pil text-dark"
          }, r.a.createElement(u.a, {
            icon: g.e
          }))), r.a.createElement("div", {
            className: "d-flex justify-content-center align-items-center mt-4"
          }, r.a.createElement("span", {
            className: "fw-normal"
          }, "Not registered?", r.a.createElement(b.a.Link, {
            as: s.Link,
            to: p.Signup.path,
            className: "fw-bold"
          }, " Create account ")))))))))
        },
        $a = function () {
          return r.a.createElement("main", null, r.a.createElement("section", {
            className: "d-flex align-items-center my-5 mt-lg-6 mb-lg-5"
          }, r.a.createElement(w.a, null, r.a.createElement("p", {
            className: "text-center"
          }, r.a.createElement(b.a.Link, {
            as: s.Link,
            to: p.DashboardOverview.path,
            className: "text-gray-700"
          }, r.a.createElement(u.a, {
            icon: h.d,
            className: "me-2"
          }), " Back to homepage")), r.a.createElement(S.a, {
            className: "justify-content-center form-bg-image",
            style: {
              backgroundImage: "url(".concat(qa.a, ")")
            }
          }, r.a.createElement(E.a, {
            xs: 12,
            className: "d-flex align-items-center justify-content-center"
          }, r.a.createElement("div", {
            className: "mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500"
          }, r.a.createElement("div", {
            className: "text-center text-md-center mb-4 mt-md-0"
          }, r.a.createElement("h3", {
            className: "mb-0"
          }, "Create an account")), r.a.createElement(j.a, {
            className: "mt-4"
          }, r.a.createElement(j.a.Group, {
            id: "email",
            className: "mb-4"
          }, r.a.createElement(j.a.Label, null, "Your Email"), r.a.createElement(Ra.a, null, r.a.createElement(Ra.a.Text, null, r.a.createElement(u.a, {
            icon: h.J
          })), r.a.createElement(j.a.Control, {
            autoFocus: !0,
            required: !0,
            type: "email",
            placeholder: "example@company.com"
          }))), r.a.createElement(j.a.Group, {
            id: "password",
            className: "mb-4"
          }, r.a.createElement(j.a.Label, null, "Your Password"), r.a.createElement(Ra.a, null, r.a.createElement(Ra.a.Text, null, r.a.createElement(u.a, {
            icon: h.sb
          })), r.a.createElement(j.a.Control, {
            required: !0,
            type: "password",
            placeholder: "Password"
          }))), r.a.createElement(j.a.Group, {
            id: "confirmPassword",
            className: "mb-4"
          }, r.a.createElement(j.a.Label, null, "Confirm Password"), r.a.createElement(Ra.a, null, r.a.createElement(Ra.a.Text, null, r.a.createElement(u.a, {
            icon: h.sb
          })), r.a.createElement(j.a.Control, {
            required: !0,
            type: "password",
            placeholder: "Confirm Password"
          }))), r.a.createElement(Wa.a, {
            type: "checkbox",
            className: "d-flex mb-4"
          }, r.a.createElement(Wa.a.Input, {
            required: !0,
            id: "terms",
            className: "me-2"
          }), r.a.createElement(Wa.a.Label, {
            htmlFor: "terms"
          }, "I agree to the ", r.a.createElement(b.a.Link, null, "terms and conditions"))), r.a.createElement(k.a, {
            variant: "primary",
            type: "submit",
            className: "w-100"
          }, "Sign up")), r.a.createElement("div", {
            className: "mt-3 mb-4 text-center"
          }, r.a.createElement("span", {
            className: "fw-normal"
          }, "or")), r.a.createElement("div", {
            className: "d-flex justify-content-center my-4"
          }, r.a.createElement(k.a, {
            variant: "outline-light",
            className: "btn-icon-only btn-pill text-facebook me-2"
          }, r.a.createElement(u.a, {
            icon: g.d
          })), r.a.createElement(k.a, {
            variant: "outline-light",
            className: "btn-icon-only btn-pill text-twitter me-2"
          }, r.a.createElement(u.a, {
            icon: g.l
          })), r.a.createElement(k.a, {
            variant: "outline-light",
            className: "btn-icon-only btn-pil text-dark"
          }, r.a.createElement(u.a, {
            icon: g.e
          }))), r.a.createElement("div", {
            className: "d-flex justify-content-center align-items-center mt-4"
          }, r.a.createElement("span", {
            className: "fw-normal"
          }, "Already have an account?", r.a.createElement(b.a.Link, {
            as: s.Link,
            to: p.Signin.path,
            className: "fw-bold"
          }, " Login here ")))))))))
        },
        Qa = function () {
          return r.a.createElement("main", null, r.a.createElement("section", {
            className: "vh-lg-100 mt-4 mt-lg-0 bg-soft d-flex align-items-center"
          }, r.a.createElement(w.a, null, r.a.createElement(S.a, {
            className: "justify-content-center"
          }, r.a.createElement("p", {
            className: "text-center"
          }, r.a.createElement(b.a.Link, {
            as: s.Link,
            to: p.Signin.path,
            className: "text-gray-700"
          }, r.a.createElement(u.a, {
            icon: h.d,
            className: "me-2"
          }), " Back to sign in")), r.a.createElement(E.a, {
            xs: 12,
            className: "d-flex align-items-center justify-content-center"
          }, r.a.createElement("div", {
            className: "signin-inner my-3 my-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500"
          }, r.a.createElement("h3", null, "Forgot your password?"), r.a.createElement("p", {
            className: "mb-4"
          }, "Don't fret! Just type in your email and we will send you a code to reset your password!"), r.a.createElement(j.a, null, r.a.createElement("div", {
            className: "mb-4"
          }, r.a.createElement(j.a.Label, {
            htmlFor: "email"
          }, "Your Email"), r.a.createElement(Ra.a, {
            id: "email"
          }, r.a.createElement(j.a.Control, {
            required: !0,
            autoFocus: !0,
            type: "email",
            placeholder: "john@company.com"
          }))), r.a.createElement(k.a, {
            variant: "primary",
            type: "submit",
            className: "w-100"
          }, "Recover password"))))))))
        },
        Xa = function () {
          return r.a.createElement("main", null, r.a.createElement("section", {
            className: "bg-soft d-flex align-items-center my-5 mt-lg-6 mb-lg-5"
          }, r.a.createElement(w.a, null, r.a.createElement(S.a, {
            className: "justify-content-center"
          }, r.a.createElement("p", {
            className: "text-center"
          }, r.a.createElement(b.a.Link, {
            as: s.Link,
            to: p.Signin.path,
            className: "text-gray-700"
          }, r.a.createElement(u.a, {
            icon: h.d,
            className: "me-2"
          }), " Back to sign in")), r.a.createElement(E.a, {
            xs: 12,
            className: "d-flex align-items-center justify-content-center"
          }, r.a.createElement("div", {
            className: "bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500"
          }, r.a.createElement("h3", {
            className: "mb-4"
          }, "Reset password"), r.a.createElement(j.a, null, r.a.createElement(j.a.Group, {
            id: "email",
            className: "mb-4"
          }, r.a.createElement(j.a.Label, null, "Your Email"), r.a.createElement(Ra.a, null, r.a.createElement(Ra.a.Text, null, r.a.createElement(u.a, {
            icon: h.J
          })), r.a.createElement(j.a.Control, {
            autoFocus: !0,
            required: !0,
            type: "email",
            placeholder: "example@company.com"
          }))), r.a.createElement(j.a.Group, {
            id: "password",
            className: "mb-4"
          }, r.a.createElement(j.a.Label, null, "Your Password"), r.a.createElement(Ra.a, null, r.a.createElement(Ra.a.Text, null, r.a.createElement(u.a, {
            icon: h.sb
          })), r.a.createElement(j.a.Control, {
            required: !0,
            type: "password",
            placeholder: "Password"
          }))), r.a.createElement(j.a.Group, {
            id: "confirmPassword",
            className: "mb-4"
          }, r.a.createElement(j.a.Label, null, "Confirm Password"), r.a.createElement(Ra.a, null, r.a.createElement(Ra.a.Text, null, r.a.createElement(u.a, {
            icon: h.sb
          })), r.a.createElement(j.a.Control, {
            required: !0,
            type: "password",
            placeholder: "Confirm Password"
          }))), r.a.createElement(k.a, {
            variant: "primary",
            type: "submit",
            className: "w-100"
          }, "Reset password"))))))))
        },
        Za = function () {
          var e = Object(n.useState)(!1),
            a = Object(m.a)(e, 2),
            t = a[0],
            l = a[1],
            o = t ? "text" : "password",
            c = t ? "#262B40" : "";
          return r.a.createElement("main", null, r.a.createElement("section", {
            className: "vh-lg-100 bg-soft d-flex align-items-center my-4"
          }, r.a.createElement(w.a, null, r.a.createElement("p", {
            className: "text-center"
          }, r.a.createElement(b.a.Link, {
            as: s.Link,
            to: p.DashboardOverview.path,
            className: "text-gray-700"
          }, r.a.createElement(u.a, {
            icon: h.d,
            className: "me-2"
          }), " Back to homepage")), r.a.createElement(S.a, {
            className: "justify-content-center form-bg-image",
            style: {
              backgroundImage: "url(".concat(qa.a, ")")
            }
          }, r.a.createElement(E.a, {
            xs: 12,
            className: "d-flex align-items-center justify-content-center"
          }, r.a.createElement("div", {
            className: "bg-white shadow-soft border border-light rounded p-4 p-lg-5 w-100 fmxw-500"
          }, r.a.createElement("div", {
            className: "text-center text-md-center mb-4 mt-md-0"
          }, r.a.createElement("div", {
            className: "user-avatar large-avatar mx-auto mb-3 border-dark p-2"
          }, r.a.createElement(f.a, {
            src: Je.a,
            className: "rounded-circle"
          })), r.a.createElement("h3", {
            className: "mb-3"
          }, "Bonnie Green"), r.a.createElement("p", {
            className: "text-gray"
          }, "Better to be safe than sorry.")), r.a.createElement(j.a, {
            className: "mt-5"
          }, r.a.createElement(j.a.Group, {
            id: "password",
            className: "mb-4"
          }, r.a.createElement(j.a.Label, null, "Your Password"), r.a.createElement(Ra.a, null, r.a.createElement(Ra.a.Text, null, r.a.createElement(u.a, {
            icon: h.sb
          })), r.a.createElement(j.a.Control, {
            required: !0,
            type: o,
            placeholder: "Password"
          }), r.a.createElement(Ra.a.Text, {
            onClick: function () {
              l(!t)
            }
          }, r.a.createElement(u.a, {
            color: c,
            icon: h.M
          })))), r.a.createElement(k.a, {
            variant: "primary",
            type: "submit",
            className: "w-100"
          }, "Unlock"))))))))
        },
        et = t(349),
        at = t.n(et),
        tt = function () {
          return r.a.createElement("main", null, r.a.createElement("section", {
            className: "vh-100 d-flex align-items-center justify-content-center"
          }, r.a.createElement(w.a, null, r.a.createElement(S.a, null, r.a.createElement(E.a, {
            xs: 12,
            className: "text-center d-flex align-items-center justify-content-center"
          }, r.a.createElement("div", null, r.a.createElement(b.a.Link, {
            as: s.Link,
            to: p.DashboardOverview.path
          }, r.a.createElement(f.a, {
            src: at.a,
            className: "img-fluid w-75"
          })), r.a.createElement("h1", {
            className: "text-primary mt-5"
          }, "Page not ", r.a.createElement("span", {
            className: "fw-bolder"
          }, "found")), r.a.createElement("p", {
            className: "lead my-4"
          }, "Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us."), r.a.createElement(k.a, {
            as: s.Link,
            variant: "primary",
            className: "animate-hover",
            to: p.DashboardOverview.path
          }, r.a.createElement(u.a, {
            icon: h.x,
            className: "animate-left-3 me-3 ms-2"
          }), "Go back home")))))))
        },
        nt = t(350),
        rt = t.n(nt),
        lt = function () {
          return r.a.createElement("main", null, r.a.createElement("section", {
            className: "vh-100 d-flex align-items-center justify-content-center"
          }, r.a.createElement(w.a, null, r.a.createElement(S.a, {
            className: "align-items-center"
          }, r.a.createElement(E.a, {
            xs: 12,
            lg: 5,
            className: "order-2 order-lg-1 text-center text-lg-left"
          }, r.a.createElement("h1", {
            className: "text-primary mt-5"
          }, "Something has gone ", r.a.createElement("span", {
            className: "fw-bolder"
          }, "seriously"), " wrong"), r.a.createElement("p", {
            className: "lead my-4"
          }, "It's always time for a coffee break. We should be back by the time you finish your coffee."), r.a.createElement(k.a, {
            as: s.Link,
            variant: "primary",
            className: "animate-hover",
            to: p.DashboardOverview.path
          }, r.a.createElement(u.a, {
            icon: h.x,
            className: "animate-left-3 me-3 ms-2"
          }), "Go back home")), r.a.createElement(E.a, {
            xs: 12,
            lg: 7,
            className: "order-1 order-lg-2 text-center d-flex align-items-center justify-content-center"
          }, r.a.createElement(f.a, {
            src: rt.a,
            className: "img-fluid w-75"
          }))))))
        },
        ot = function () {
          return r.a.createElement(w.a, {
            className: "px-0"
          }, r.a.createElement(S.a, null, r.a.createElement(E.a, {
            xs: 12,
            className: "p-3"
          }, r.a.createElement(b.a, null, r.a.createElement(b.a.Body, null, r.a.createElement("article", null, r.a.createElement("h1", {
            className: "h2",
            id: "overview"
          }, "Overview "), r.a.createElement("p", {
            className: "fs-5 fw-light"
          }, "Download files for Volt React Dashboard"), r.a.createElement("p", null, "Volt React Dashboard is a React.js and Bootstrap 5 powered admin dashboard template featuring components, pages and plugins that you can use to create an awesome and interactive admin interface."), r.a.createElement("p", null, "This product is built using the following widely used technologies:"), r.a.createElement("ul", {
            className: "docs-list"
          }, r.a.createElement("li", null, "Interactive UIs using ", r.a.createElement(b.a.Link, {
            href: "https://reactjs.org/",
            target: "_blank"
          }, "React")), r.a.createElement("li", null, "Bootstrap 5 React Components based on ", r.a.createElement(b.a.Link, {
            href: "https://react-bootstrap.github.io/",
            target: "_blank"
          }, "react-bootstrap")), r.a.createElement("li", null, "Most popular CSS Framework ", r.a.createElement(b.a.Link, {
            href: "https://getbootstrap.com/",
            target: "_blank"
          }, "Bootstrap")), r.a.createElement("li", null, "Awesome CSS preprocessor ", r.a.createElement(b.a.Link, {
            href: "https://sass-lang.com/",
            target: "_blank"
          }, "Sass"))), r.a.createElement("h2", {
            id: "getting-support"
          }, "Getting support"), r.a.createElement("p", null, "We offer 6 months of support by default for each purchased template. Please ", r.a.createElement(b.a.Link, {
            href: "https://themesberg.com/contact",
            target: "_blank"
          }, "contact us"), " and we\u2019ll get back to you in no time!"), r.a.createElement("h2", {
            id: "community"
          }, "Community"), r.a.createElement("ul", {
            className: "docs-list"
          }, r.a.createElement("li", null, "Follow ", r.a.createElement(b.a.Link, {
            href: "https://twitter.com/themesberg",
            target: "_blank"
          }, "@themesberg on Twitter"), "."), r.a.createElement("li", null, "Follow ", r.a.createElement(b.a.Link, {
            href: "https://facebook.com/themesberg",
            target: "_blank"
          }, "Themesberg on Facebook"), "."), r.a.createElement("li", null, "Read and subscribe to ", r.a.createElement(b.a.Link, {
            href: "https://themesberg.com/blog",
            target: "_blank"
          }, "The Official Themesberg Blog"), "."), r.a.createElement("li", null, "Follow latest open source projects on our ", r.a.createElement(b.a.Link, {
            href: "https://github.com/themesberg",
            target: "_blank"
          }, "Github Page")))))))))
        },
        st = function () {
          return r.a.createElement(w.a, {
            className: "px-0"
          }, r.a.createElement(S.a, null, r.a.createElement(E.a, {
            xs: 12,
            className: "p-3"
          }, r.a.createElement(b.a, null, r.a.createElement(b.a.Body, null, r.a.createElement("article", null, r.a.createElement("h1", {
            className: "h2",
            id: "download"
          }, "Download "), r.a.createElement("p", {
            className: "fs-5 fw-light"
          }, "Download files for Volt React Dashboard"), r.a.createElement("p", null, "Use the following links to download Volt React Dashboard files:"), r.a.createElement("ul", {
            className: "docs-list"
          }, r.a.createElement("li", null, "Download ", r.a.createElement(b.a.Link, {
            href: "https://themesberg.com/product/dashboard/volt-pro-react",
            target: "_blank"
          }, "Volt React Dashboard"), "."))))))))
        },
        ct = t(1064),
        mt = function () {
          return r.a.createElement(w.a, {
            className: "px-0"
          }, r.a.createElement(S.a, null, r.a.createElement(E.a, {
            xs: 12,
            className: "p-3"
          }, r.a.createElement(b.a, null, r.a.createElement(b.a.Body, null, r.a.createElement("article", null, r.a.createElement("h1", {
            className: "h2",
            id: "quick-start"
          }, "Quick Start "), r.a.createElement("p", {
            className: "fs-5 fw-light"
          }, "This guide will help you get started with Volt React Dashboard"), r.a.createElement("p", null, r.a.createElement("b", null, "Volt React Dashboard"), " is built on top of ", r.a.createElement(b.a.Link, {
            href: "https://react-bootstrap.github.io/",
            target: "_blank"
          }, "React Bootstrap"), " using ", r.a.createElement("a", {
            href: "https://github.com/facebook/create-react-app/",
            target: "_blank",
            rel: "noopener noreferrer"
          }, "Create React App"), "."), r.a.createElement("p", null, "Please follow these steps to install the required technologies:"), r.a.createElement("h2", {
            className: "fs-5 mt-4",
            id: "using-yarn"
          }, "Using ", r.a.createElement("code", null, "yarn")), r.a.createElement("ol", {
            className: "ps-4 docs-list"
          }, r.a.createElement("li", null, "Install yarn from ", r.a.createElement(b.a.Link, {
            href: "https://classic.yarnpkg.com/en/docs/install",
            target: "_blank"
          }, "their official page"), "."), r.a.createElement("li", null, r.a.createElement("p", null, "After installing yarn, open a terminal and run ", r.a.createElement("code", null, "yarn install"), " in the main ", r.a.createElement("code", null, "volt"), " folder to download all project dependencies."), r.a.createElement(L, {
            code: "$ yarn install",
            language: "bash"
          })), r.a.createElement("li", null, r.a.createElement("p", null, "Then start the app in development mode by running the following command in terminal:"), r.a.createElement(L, {
            code: "$ yarn start",
            language: "bash"
          })), r.a.createElement("li", null, "Open ", r.a.createElement(b.a.Link, {
            href: "http://localhost:3000",
            target: "_blank"
          }, "http://localhost:3000"), " to view it in the browser.")), r.a.createElement("h2", {
            className: "fs-5 mt-4",
            id: "using-npm"
          }, "Using ", r.a.createElement("code", null, "npm")), r.a.createElement("ol", {
            className: "ps-4 docs-list"
          }, r.a.createElement("li", null, "Install Node.js from ", r.a.createElement(b.a.Link, {
            href: "https://nodejs.org/",
            target: "_blank"
          }, "node.js official page"), " or using a ", r.a.createElement("a", {
            href: "https://github.com/nvm-sh/nvm",
            target: "_blank",
            rel: "noopener noreferrer"
          }, "node.js version manager (nvm for short)"), ".", r.a.createElement(ct.a, {
            className: "my-4",
            variant: "info"
          }, r.a.createElement("strong", null, "Important!"), " Make sure the installed Node version is ", ">=", " 8.10 and of npm ", ">=", " 5.6")), r.a.createElement("li", null, r.a.createElement("p", null, "After installing node.js, open a terminal and run ", r.a.createElement("code", null, "npm install"), " in the main ", r.a.createElement("code", null, "volt"), " folder to download all project dependencies. You'll find them in the ", r.a.createElement("code", null, "node_modules"), " folder."), r.a.createElement(L, {
            code: "$ npm install",
            language: "bash"
          })), r.a.createElement("li", null, r.a.createElement("p", null, "Then start the app in development mode by running the following command in terminal:"), r.a.createElement(L, {
            code: "$ npm start",
            language: "bash"
          })), r.a.createElement("li", null, "Open ", r.a.createElement(b.a.Link, {
            href: "http://localhost:3000",
            target: "_blank"
          }, "http://localhost:3000"), " to view it in the browser."))))))))
        },
        it = function () {
          return r.a.createElement(w.a, {
            className: "px-0"
          }, r.a.createElement(S.a, null, r.a.createElement(E.a, {
            xs: 12,
            className: "p-3"
          }, r.a.createElement(b.a, null, r.a.createElement(b.a.Body, null, r.a.createElement("article", null, r.a.createElement("h1", {
            className: "h2",
            id: "license"
          }, "License"), r.a.createElement("p", {
            className: "fs-5 fw-light"
          }, "Licensing details for Volt React Dashboard"), r.a.createElement("p", null, "Please check our ", r.a.createElement(b.a.Link, {
            href: "https://themesberg.com/licensing"
          }, "official licensing page"), " to learn more about our licensing.")))))))
        },
        dt = function () {
          return r.a.createElement(w.a, {
            className: "px-0"
          }, r.a.createElement(S.a, null, r.a.createElement(E.a, {
            xs: 12,
            className: "p-3"
          }, r.a.createElement(b.a, null, r.a.createElement(b.a.Body, null, r.a.createElement("article", null, r.a.createElement("h1", {
            className: "h2",
            id: "file-structure"
          }, "File structure "), r.a.createElement("p", {
            className: "fs-5 fw-light"
          }, "Learn more about the file structure for Volt React Dashboard"), r.a.createElement("p", {
            className: "fs-5 fw-bold"
          }, "Main folders and files"), r.a.createElement("p", null, "At the top level of the project you'll find: "), r.a.createElement("ul", {
            className: "docs-list"
          }, r.a.createElement("li", null, "Three folders: ", r.a.createElement("code", null, "public"), ", ", r.a.createElement("code", null, "src"), " and ", r.a.createElement("code", null, "node_modules")), r.a.createElement("li", null, "And two files: ", r.a.createElement("code", null, "package.json"), " and ", r.a.createElement("code", null, "README.md"))), r.a.createElement("p", {
            className: "fs-5 fw-bold"
          }, "public/ folder"), r.a.createElement("p", null, "The root folder that gets served up as our react app. The most important file in ", r.a.createElement("code", null, "public"), " folder is the ", r.a.createElement("code", null, "index.html"), " file. You can tweak this file, for example, to set the page title or add some library that may be incompatible with webpack and you have no other option but to include it as a ", r.a.createElement("code", null, "<script>"), " tag.", r.a.createElement("br", null), "Also the ", r.a.createElement("code", null, "<script>"), " tag with the compiled code will be added to this file automatically during the build process."), r.a.createElement("p", {
            className: "fs-5 fw-bold"
          }, "src/ folder"), r.a.createElement("p", null, "In simplest form it\u2019s the app folder that contains all of our react codebase: pages, components, tests, image or scss files.", r.a.createElement("br", null), "The structure of the src folder:"), r.a.createElement("ul", {
            className: "docs-list"
          }, r.a.createElement("li", null, r.a.createElement("code", null, "assets/"), " - all the media assets, such as images, videos, json files or other static files"), r.a.createElement("li", null, r.a.createElement("code", null, "components/"), " - custom state or stateless ", r.a.createElement(b.a.Link, {
            href: "https://reactjs.org/docs/components-and-props.html#function-and-class-components/",
            target: "_blank"
          }, "function components"), " built on top of ", r.a.createElement("a", {
            href: "https://react-bootstrap.github.io/",
            target: "_blank",
            rel: "noopener noreferrer"
          }, "react-bootstrap library"), " and used throughout the application"), r.a.createElement("li", null, r.a.createElement("code", null, "data/"), " - files to feed the components that require an array of data (e.g tables, lists or calendar events). This data will in the end be fetched from a backend service."), r.a.createElement("li", null, r.a.createElement("code", null, "pages/"), " - carefully built pages to provide all the necessary widgets your startup will require"), r.a.createElement("li", null, r.a.createElement("code", null, "scss/"), " - holds the variables, mixins and custom component styles developed by Themesberg for Volt React Dashboard"), r.a.createElement("li", null, r.a.createElement("code", null, "index.js"), " - is the JavaScript entry point"), r.a.createElement("li", null, r.a.createElement("code", null, "routes.js"), " - exports an object with all the route paths found in Volt React Dashboard")), r.a.createElement("p", {
            className: "fs-5 fw-bold"
          }, "node_modules/ folder"), r.a.createElement("p", null, "The ", r.a.createElement("code", null, "node_modules"), " folder contains external libraries generated based on ", r.a.createElement("code", null, "package.json"), ".")))))))
        },
        pt = function () {
          return r.a.createElement(w.a, {
            className: "px-0"
          }, r.a.createElement(S.a, null, r.a.createElement(E.a, {
            xs: 12,
            className: "p-3"
          }, r.a.createElement(b.a, null, r.a.createElement(b.a.Body, null, r.a.createElement("article", null, r.a.createElement("h1", {
            className: "h2",
            id: "build-tools"
          }, "Build tools "), r.a.createElement("p", {
            className: "fs-5 fw-light"
          }, "Learn the commands that will help you work with Volt React Dashboard and the commands that can build the final production version of your app."), r.a.createElement("p", {
            className: "fs-5 fw-bold"
          }, "Available commands"), r.a.createElement(Pa, null)))))))
        },
        ut = function () {
          return r.a.createElement(w.a, {
            className: "px-0"
          }, r.a.createElement(S.a, null, r.a.createElement(E.a, {
            xs: 12,
            className: "p-3"
          }, r.a.createElement(b.a, null, r.a.createElement(b.a.Body, null, r.a.createElement("article", null, r.a.createElement("h1", {
            className: "h2",
            id: "changelog"
          }, "Changelog "), r.a.createElement("p", {
            className: "fs-5 fw-light"
          }, "This is the changelog for the new features and bug fixes for Volt React Dashboard"), r.a.createElement("p", {
            className: "fs-5 fw-bold"
          }, "Version 1.0.0 - January 19, 2021"), r.a.createElement("ul", {
            className: "docs-list"
          }, r.a.createElement("li", null, "Initial release files"))))))))
        },
        ht = t(356),
        gt = t(1065),
        Et = t(1069),
        bt = function () {
          var e = Object(d.l)(),
            a = e.pathname,
            t = Object(n.useState)(!1),
            l = Object(m.a)(t, 2),
            o = l[0],
            c = l[1],
            i = o ? "show" : "",
            g = function () {
              return c(!o)
            },
            E = function (e) {
              var t = e.eventKey,
                n = e.title,
                l = e.icon,
                o = e.children,
                s = void 0 === o ? null : o,
                c = -1 !== a.indexOf(t) ? t : "";
              return r.a.createElement(Et.a, {
                as: x.a.Item,
                defaultActiveKey: c
              }, r.a.createElement(Et.a.Item, {
                eventKey: t
              }, r.a.createElement(Et.a.Button, {
                as: x.a.Link,
                className: "d-flex justify-content-between align-items-center"
              }, r.a.createElement("span", null, r.a.createElement("span", {
                className: "sidebar-icon"
              }, r.a.createElement(u.a, {
                icon: l
              }), " "), r.a.createElement("span", {
                className: "sidebar-text"
              }, n))), r.a.createElement(Et.a.Body, {
                className: "multi-level"
              }, r.a.createElement(x.a, {
                className: "flex-column"
              }, s))))
            },
            b = function (e) {
              var t = e.title,
                n = e.link,
                l = e.external,
                o = e.target,
                m = e.icon,
                i = e.image,
                d = e.badgeText,
                p = e.badgeBg,
                h = void 0 === p ? "secondary" : p,
                g = e.badgeColor,
                E = void 0 === g ? "primary" : g,
                b = d ? "d-flex justify-content-start align-items-center justify-content-between" : "",
                v = n === a ? "active" : "",
                N = l ? {
                  href: n
                } : {
                  as: s.Link,
                  to: n
                };
              return r.a.createElement(x.a.Item, {
                className: v,
                onClick: function () {
                  return c(!1)
                }
              }, r.a.createElement(x.a.Link, Object.assign({}, N, {
                target: o,
                className: b
              }), r.a.createElement("span", null, m ? r.a.createElement("span", {
                className: "sidebar-icon"
              }, r.a.createElement(u.a, {
                icon: m
              }), " ") : null, i ? r.a.createElement(f.a, {
                src: i,
                width: 20,
                height: 20,
                className: "sidebar-icon svg-icon"
              }) : null, r.a.createElement("span", {
                className: "sidebar-text"
              }, t)), d ? r.a.createElement(I.a, {
                pill: !0,
                bg: h,
                text: E,
                className: "badge-md notification-count ms-2"
              }, d) : null))
            };
          return r.a.createElement(r.a.Fragment, null, r.a.createElement(y.a, {
            expand: !1,
            collapseOnSelect: !0,
            variant: "dark",
            className: "navbar-theme-primary px-4 d-md-none"
          }, r.a.createElement(y.a.Brand, {
            className: "me-lg-5",
            as: s.Link,
            to: p.DashboardOverview.path
          }, r.a.createElement(f.a, {
            src: W.a,
            className: "navbar-brand-light"
          })), r.a.createElement(y.a.Toggle, {
            as: k.a,
            "aria-controls": "main-navbar",
            onClick: g
          }, r.a.createElement("span", {
            className: "navbar-toggler-icon"
          }))), r.a.createElement(gt.a, {
            timeout: 300,
            in: o,
            classNames: "sidebar-transition"
          }, r.a.createElement(ht.a, {
            className: "collapse ".concat(i, " sidebar d-md-block bg-primary text-white")
          }, r.a.createElement("div", {
            className: "sidebar-inner px-4 pt-3"
          }, r.a.createElement("div", {
            className: "user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4"
          }, r.a.createElement("div", {
            className: "d-flex align-items-center"
          }, r.a.createElement("div", {
            className: "user-avatar lg-avatar me-4"
          }, r.a.createElement(f.a, {
            src: Je.a,
            className: "card-img-top rounded-circle border-white"
          })), r.a.createElement("div", {
            className: "d-block"
          }, r.a.createElement("h6", null, "Hi, Jane"), r.a.createElement(k.a, {
            as: s.Link,
            variant: "secondary",
            size: "xs",
            to: p.Signin.path,
            className: "text-dark"
          }, r.a.createElement(u.a, {
            icon: h.ib,
            className: "me-2"
          }), " Sign Out"))), r.a.createElement(x.a.Link, {
            className: "collapse-close d-md-none",
            onClick: g
          }, r.a.createElement(u.a, {
            icon: h.pb
          }))), r.a.createElement(x.a, {
            className: "flex-column pt-3 pt-md-0"
          }, r.a.createElement(b, {
            title: "Apigee Dashboard",
            image: W.a
          }), r.a.createElement(b, {
            title: "Overview",
            link: p.DashboardOverview.path,
            icon: h.t
          }), r.a.createElement(b, {
            title: "Sales Orders",
            icon: h.T,
            link: p.Transactions.path
          }), r.a.createElement(b, {
            title: "Settings",
            icon: h.B,
            link: p.Settings.path
          }), r.a.createElement(E, {
            eventKey: "tables/",
            title: "Tables",
            icon: h.kb
          }, r.a.createElement(b, {
            title: "Bootstrap Table",
            link: p.BootstrapTables.path
          })), r.a.createElement(E, {
            eventKey: "examples/",
            title: "Page Examples",
            icon: h.N
          }, r.a.createElement(b, {
            title: "Sign In",
            link: p.Signin.path
          }), r.a.createElement(b, {
            title: "Sign Up",
            link: p.Signup.path
          }), r.a.createElement(b, {
            title: "Forgot password",
            link: p.ForgotPassword.path
          }), r.a.createElement(b, {
            title: "Reset password",
            link: p.ResetPassword.path
          }), r.a.createElement(b, {
            title: "Lock",
            link: p.Lock.path
          }), r.a.createElement(b, {
            title: "404 Not Found",
            link: p.NotFound.path
          }), r.a.createElement(b, {
            title: "500 Server Error",
            link: p.ServerError.path
          })), r.a.createElement(b, {
            external: !0,
            title: "Plugins",
            link: "https://demo.themesberg.com/volt-pro-react/#/plugins/charts",
            target: "_blank",
            badgeText: "Pro",
            icon: h.t
          }), r.a.createElement(_e.a.Divider, {
            className: "my-3 border-indigo"
          }), r.a.createElement(E, {
            eventKey: "documentation/",
            title: "Getting Started",
            icon: h.j
          }, r.a.createElement(b, {
            title: "Overview",
            link: p.DocsOverview.path
          }), r.a.createElement(b, {
            title: "Download",
            link: p.DocsDownload.path
          }), r.a.createElement(b, {
            title: "Quick Start",
            link: p.DocsQuickStart.path
          }), r.a.createElement(b, {
            title: "License",
            link: p.DocsLicense.path
          }), r.a.createElement(b, {
            title: "Folder Structure",
            link: p.DocsFolderStructure.path
          }), r.a.createElement(b, {
            title: "Build Tools",
            link: p.DocsBuild.path
          }), r.a.createElement(b, {
            title: "Changelog",
            link: p.DocsChangelog.path
          })), r.a.createElement(E, {
            eventKey: "components/",
            title: "Components",
            icon: h.k
          }, r.a.createElement(b, {
            title: "Accordion",
            link: p.Accordions.path
          }), r.a.createElement(b, {
            title: "Alerts",
            link: p.Alerts.path
          }), r.a.createElement(b, {
            title: "Badges",
            link: p.Badges.path
          }), r.a.createElement(b, {
            external: !0,
            title: "Widgets",
            link: "https://demo.themesberg.com/volt-pro-react/#/components/widgets",
            target: "_blank",
            badgeText: "Pro"
          }), r.a.createElement(b, {
            title: "Breadcrumbs",
            link: p.Breadcrumbs.path
          }), r.a.createElement(b, {
            title: "Buttons",
            link: p.Buttons.path
          }), r.a.createElement(b, {
            title: "Forms",
            link: p.Forms.path
          }), r.a.createElement(b, {
            title: "Modals",
            link: p.Modals.path
          }), r.a.createElement(b, {
            title: "Navbars",
            link: p.Navbars.path
          }), r.a.createElement(b, {
            title: "Navs",
            link: p.Navs.path
          }), r.a.createElement(b, {
            title: "Pagination",
            link: p.Pagination.path
          }), r.a.createElement(b, {
            title: "Popovers",
            link: p.Popovers.path
          }), r.a.createElement(b, {
            title: "Progress",
            link: p.Progress.path
          }), r.a.createElement(b, {
            title: "Tables",
            link: p.Tables.path
          }), r.a.createElement(b, {
            title: "Tabs",
            link: p.Tabs.path
          }), r.a.createElement(b, {
            title: "Toasts",
            link: p.Toasts.path
          }), r.a.createElement(b, {
            title: "Tooltips",
            link: p.Tooltips.path
          })))))))
        },
        ft = t(353),
        vt = t.n(ft),
        Nt = [{
          id: 1,
          read: !1,
          image: He.a,
          sender: "Jose Leos",
          time: "a few moments ago",
          link: "#",
          message: 'Added you to an event "Project stand-up" tomorrow at 12:30 AM.'
        }, {
          id: 2,
          read: !1,
          image: Ye.a,
          sender: "Neil Sims",
          time: "2 hrs ago",
          link: "#",
          message: 'You\'ve been assigned a task for "Awesome new project".'
        }, {
          id: 3,
          read: !1,
          image: Je.a,
          sender: "Roberta Casas",
          time: "5 hrs ago",
          link: "#",
          message: 'Tagged you in a document called "First quarter financial plans".'
        }, {
          id: 4,
          read: !0,
          image: Qe.a,
          sender: "Joseph Garth",
          time: "1 day ago",
          link: "#",
          message: 'New message: "Hey, what\'s up? All set for the presentation?"'
        }, {
          id: 5,
          read: !0,
          image: vt.a,
          sender: "Jose Leos",
          time: "2 days ago",
          link: "#",
          message: 'New message: "We need to improve the UI/UX for the landing page."'
        }],
        yt = function (e) {
          var a = Object(n.useState)(Nt),
            t = Object(m.a)(a, 2),
            l = t[0],
            o = t[1],
            s = l.reduce((function (e, a) {
              return e && a.read
            }), !0),
            c = function (e) {
              var a = e.link,
                t = e.sender,
                n = e.image,
                l = e.time,
                o = e.message,
                s = e.read,
                c = void 0 !== s && s ? "" : "text-danger";
              return r.a.createElement(B.a.Item, {
                action: !0,
                href: a,
                className: "border-bottom border-light"
              }, r.a.createElement(S.a, {
                className: "align-items-center"
              }, r.a.createElement(E.a, {
                className: "col-auto"
              }, r.a.createElement(f.a, {
                src: n,
                className: "user-avatar lg-avatar rounded-circle"
              })), r.a.createElement(E.a, {
                className: "ps-0 ms--2"
              }, r.a.createElement("div", {
                className: "d-flex justify-content-between align-items-center"
              }, r.a.createElement("div", null, r.a.createElement("h4", {
                className: "h6 mb-0 text-small"
              }, t)), r.a.createElement("div", {
                className: "text-end"
              }, r.a.createElement("small", {
                className: c
              }, l))), r.a.createElement("p", {
                className: "font-small mt-1 mb-0"
              }, o))))
            };
          return r.a.createElement(y.a, {
            variant: "dark",
            expanded: !0,
            className: "ps-0 pe-2 pb-0"
          }, r.a.createElement(w.a, {
            fluid: !0,
            className: "px-0"
          }, r.a.createElement("div", {
            className: "d-flex justify-content-between w-100"
          }, r.a.createElement("div", {
            className: "d-flex align-items-center"
          }, r.a.createElement(j.a, {
            className: "navbar-search"
          }, r.a.createElement(j.a.Group, {
            id: "topbarSearch"
          }, r.a.createElement(Ra.a, {
            className: "input-group-merge search-bar"
          }, r.a.createElement(Ra.a.Text, null, r.a.createElement(u.a, {
            icon: h.gb
          })), r.a.createElement(j.a.Control, {
            type: "text",
            placeholder: "Search"
          }))))), r.a.createElement(x.a, {
            className: "align-items-center"
          }, r.a.createElement(_e.a, {
            as: x.a.Item,
            onToggle: function () {
              setTimeout((function () {
                o(l.map((function (e) {
                  return Object(De.a)(Object(De.a)({}, e), {}, {
                    read: !0
                  })
                })))
              }), 300)
            }
          }, r.a.createElement(_e.a.Toggle, {
            as: x.a.Link,
            className: "text-dark icon-notifications me-lg-3"
          }, r.a.createElement("span", {
            className: "icon icon-sm"
          }, r.a.createElement(u.a, {
            icon: h.i,
            className: "bell-shake"
          }), s ? null : r.a.createElement("span", {
            className: "icon-badge rounded-circle unread-notifications"
          }))), r.a.createElement(_e.a.Menu, {
            className: "dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-center mt-2 py-0"
          }, r.a.createElement(B.a, {
            className: "list-group-flush"
          }, r.a.createElement(x.a.Link, {
            href: "#",
            className: "text-center text-primary fw-bold border-bottom border-light py-3"
          }, "Notifications"), l.map((function (e) {
            return r.a.createElement(c, Object.assign({
              key: "notification-".concat(e.id)
            }, e))
          })), r.a.createElement(_e.a.Item, {
            className: "text-center text-primary fw-bold py-3"
          }, "View all")))), r.a.createElement(_e.a, {
            as: x.a.Item
          }, r.a.createElement(_e.a.Toggle, {
            as: x.a.Link,
            className: "pt-1 px-0"
          }, r.a.createElement("div", {
            className: "media d-flex align-items-center"
          }, r.a.createElement(f.a, {
            src: Je.a,
            className: "user-avatar md-avatar rounded-circle"
          }), r.a.createElement("div", {
            className: "media-body ms-2 text-dark align-items-center d-none d-lg-block"
          }, r.a.createElement("span", {
            className: "mb-0 font-small fw-bold"
          }, "Bonnie Green")))), r.a.createElement(_e.a.Menu, {
            className: "user-dropdown dropdown-menu-right mt-2"
          }, r.a.createElement(_e.a.Item, {
            className: "fw-bold"
          }, r.a.createElement(u.a, {
            icon: P.e,
            className: "me-2"
          }), " My Profile"), r.a.createElement(_e.a.Item, {
            className: "fw-bold"
          }, r.a.createElement(u.a, {
            icon: h.B,
            className: "me-2"
          }), " Settings"), r.a.createElement(_e.a.Item, {
            className: "fw-bold"
          }, r.a.createElement(u.a, {
            icon: h.K,
            className: "me-2"
          }), " Messages"), r.a.createElement(_e.a.Item, {
            className: "fw-bold"
          }, r.a.createElement(u.a, {
            icon: h.ub,
            className: "me-2"
          }), " Support"), r.a.createElement(_e.a.Divider, null), r.a.createElement(_e.a.Item, {
            className: "fw-bold"
          }, r.a.createElement(u.a, {
            icon: h.ib,
            className: "text-danger me-2"
          }), " Logout")))))))
        },
        wt = function (e) {
          var a = Ga()().get("year"),
            t = e.showSettings,
            n = function (a) {
              e.toggleSettings(a)
            };
          return r.a.createElement("div", null, t ? r.a.createElement(b.a, {
            className: "theme-settings"
          }, r.a.createElement(b.a.Body, {
            className: "pt-4"
          }, r.a.createElement(k.a, {
            className: "theme-settings-close",
            variant: "close",
            size: "sm",
            "aria-label": "Close",
            onClick: function () {
              n(!1)
            }
          }), r.a.createElement("div", {
            className: "d-flex justify-content-between align-items-center mb-3"
          }, r.a.createElement("p", {
            className: "m-0 mb-1 fs-7"
          }, "Made with open source ", r.a.createElement("span", {
            role: "img",
            "aria-label": "gratitude"
          }, "\ud83d\udc99")), r.a.createElement(O.a, {
            href: "https://github.com/themesberg/volt-react-dashboard",
            "data-size": "large",
            "data-show-count": "true",
            "aria-label": "Star themesberg/volt-react-dashboard on GitHub"
          }, "Star")), r.a.createElement(k.a, {
            href: "https://themesberg.com/product/dashboard/volt-react",
            target: "_blank",
            variant: "primary",
            className: "mb-3 w-100"
          }, r.a.createElement(u.a, {
            icon: h.G,
            className: "me-1"
          }), " Download"), r.a.createElement(k.a, {
            as: s.Link,
            to: p.Upgrade.path,
            variant: "secondary",
            className: "mb-3 w-100"
          }, r.a.createElement(u.a, {
            icon: h.fb,
            className: "me-1"
          }), " Upgrade to Pro"), r.a.createElement("p", {
            className: "fs-7 text-gray-700 text-center"
          }, "Available in the following technologies:"), r.a.createElement("div", {
            className: "d-flex justify-content-center"
          }, r.a.createElement(b.a.Link, {
            href: "https://themesberg.com/product/admin-dashboard/volt-bootstrap-5-dashboard",
            target: "_blank"
          }, r.a.createElement(v.a, {
            placement: "top",
            trigger: ["hover", "focus"],
            overlay: r.a.createElement(N.a, null, "Bootstrap 5 \xb7 The most popular HTML, CSS, and JS library in the world.")
          }, r.a.createElement(f.a, {
            src: te.a,
            className: "image image-xs"
          }))), r.a.createElement(b.a.Link, {
            href: "https://themesberg.com/product/dashboard/volt-react",
            target: "_blank"
          }, r.a.createElement(v.a, {
            placement: "top",
            trigger: ["hover", "focus"],
            overlay: r.a.createElement(N.a, null, "React \xb7 A JavaScript library for building user interfaces.")
          }, r.a.createElement(f.a, {
            src: re.a,
            className: "image image-xs"
          })))))) : r.a.createElement(b.a, {
            className: "theme-settings theme-settings-expand",
            onClick: function () {
              n(!0)
            }
          }, r.a.createElement(b.a.Body, {
            className: "p-3 py-2"
          }, r.a.createElement("span", {
            className: "fw-bold h6"
          }, r.a.createElement(u.a, {
            icon: h.C,
            className: "me-1 fs-7"
          }), " Settings"))), r.a.createElement("footer", {
            className: "footer section py-5"
          }, r.a.createElement(S.a, null, r.a.createElement(E.a, {
            xs: 12,
            lg: 6,
            className: "mb-4 mb-lg-0"
          }, r.a.createElement("p", {
            className: "mb-0 text-center text-xl-left"
          }, "Copyright \xa9 2019-", "".concat(a, " "), r.a.createElement(b.a.Link, {
            href: "https://themesberg.com",
            target: "_blank",
            className: "text-blue text-decoration-none fw-normal"
          }, "Themesberg"))), r.a.createElement(E.a, {
            xs: 12,
            lg: 6
          }, r.a.createElement("ul", {
            className: "list-inline list-group-flush list-group-borderless text-center text-xl-right mb-0"
          }, r.a.createElement("li", {
            className: "list-inline-item px-0 px-sm-2"
          }, r.a.createElement(b.a.Link, {
            href: "https://themesberg.com/about",
            target: "_blank"
          }, "About")), r.a.createElement("li", {
            className: "list-inline-item px-0 px-sm-2"
          }, r.a.createElement(b.a.Link, {
            href: "https://themesberg.com/themes",
            target: "_blank"
          }, "Themes")), r.a.createElement("li", {
            className: "list-inline-item px-0 px-sm-2"
          }, r.a.createElement(b.a.Link, {
            href: "https://themesberg.com/blog",
            target: "_blank"
          }, "Blog")), r.a.createElement("li", {
            className: "list-inline-item px-0 px-sm-2"
          }, r.a.createElement(b.a.Link, {
            href: "https://themesberg.com/contact",
            target: "_blank"
          }, "Contact")))))))
        },
        xt = t(103),
        kt = t.n(xt),
        St = function (e) {
          var a = e.show;
          return r.a.createElement("div", {
            className: "preloader bg-soft flex-column justify-content-center align-items-center ".concat(a ? "" : "show")
          }, r.a.createElement(f.a, {
            className: "loader-element animate__animated animate__jackInTheBox",
            src: kt.a,
            height: 40
          }))
        },
        jt = function (e) {
          var a = e.defaultKey,
            t = e.data,
            n = void 0 === t ? [] : t,
            l = e.className,
            o = void 0 === l ? "" : l,
            s = function (e) {
              var a = e.eventKey,
                t = e.title,
                n = e.description;
              return r.a.createElement(Et.a.Item, {
                eventKey: a
              }, r.a.createElement(Et.a.Button, {
                variant: "link",
                className: "w-100 d-flex justify-content-between"
              }, r.a.createElement("span", {
                className: "h6 mb-0 fw-bold"
              }, t)), r.a.createElement(Et.a.Body, null, r.a.createElement(b.a.Body, {
                className: "py-2 px-0"
              }, r.a.createElement(b.a.Text, {
                className: "mb-0"
              }, n))))
            };
          return r.a.createElement(Et.a, {
            className: o,
            defaultActiveKey: a
          }, n.map((function (e) {
            return r.a.createElement(s, Object.assign({
              key: "accordion-".concat(e.id)
            }, e))
          })))
        },
        It = function (e) {
          var a = e.title,
            t = e.description,
            n = e.example,
            l = void 0 === n ? null : n,
            o = e.imports,
            s = void 0 === o ? null : o,
            c = e.scope,
            m = void 0 === c ? {} : c,
            i = e.maxHeight,
            d = void 0 === i ? null : i;
          return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
            className: "pt-2"
          }, r.a.createElement(S.a, null, r.a.createElement(E.a, {
            xs: 12
          }, r.a.createElement("h2", {
            className: "fs-5"
          }, a), t))), r.a.createElement("div", {
            className: "pb-5"
          }, r.a.createElement(S.a, {
            className: "mt-4"
          }, r.a.createElement(E.a, {
            xs: 12
          }, r.a.createElement(R, {
            code: l,
            scope: m,
            imports: s,
            maxHeight: d
          })))))
        },
        Bt = function () {
          return r.a.createElement("article", null, r.a.createElement(w.a, {
            className: "px-0"
          }, r.a.createElement(S.a, {
            className: "d-flex flex-wrap flex-md-nowrap align-items-center py-4"
          }, r.a.createElement(E.a, {
            className: "d-block mb-4 mb-md-0"
          }, r.a.createElement("h1", {
            className: "h2"
          }, "Accordions"), r.a.createElement("p", {
            className: "mb-0"
          }, "Use the accordion elements to segment content and show/hide when clicking on tabs."))), r.a.createElement(It, {
            title: "Example",
            description: r.a.createElement("p", null, "Use the ", r.a.createElement("code", null, "<AccordionComponent>"), " component and make sure to set the required props, defaultKey and data, to make it shine. When the title element will be toggled you'll get to see the description."),
            scope: {
              AccordionComponent: jt
            },
            imports: 'import AccordionComponent from "src/components/AccordionComponent";',
            example: '<AccordionComponent\n  defaultKey="panel-1"\n  data={[\n    {\n      id: 1,\n      eventKey: "panel-1",\n      title: "What is the purpose of a FAQ?",\n      description: "At Themesberg, our mission has always been focused on bringing openness and transparency to the design process. We\'ve always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also helps them grow. We\'re proud to be a part of creating a more open culture and to continue building a product that supports this vision."\n    },\n    {\n      id: 2,\n      eventKey: "panel-2",\n      title: "What is a FAQ document?",\n      description: "At Themesberg, our mission has always been focused on bringing openness and transparency to the design process. We\'ve always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also helps them grow. We\'re proud to be a part of creating a more open culture and to continue building a product that supports this vision."\n    },\n    {\n      id: 3,\n      eventKey: "panel-3",\n      title: "What are the top 10 interview questions?",\n      description: "At Themesberg, our mission has always been focused on bringing openness and transparency to the design process. We\'ve always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also helps them grow. We\'re proud to be a part of creating a more open culture and to continue building a product that supports this vision."\n    }\n  ]} />'
          })))
        },
        Ct = function () {
          return r.a.createElement("article", null, r.a.createElement(w.a, {
            className: "px-0"
          }, r.a.createElement(S.a, {
            className: "d-flex flex-wrap flex-md-nowrap align-items-center py-4"
          }, r.a.createElement(E.a, {
            className: "d-block mb-4 mb-md-0"
          }, r.a.createElement("h1", {
            className: "h2"
          }, "Alerts"), r.a.createElement("p", {
            className: "mb-0"
          }, "Use alerts to provide contextual feedback to your users based on their input and behaviour."))), r.a.createElement(It, {
            title: "Example",
            description: r.a.createElement("p", null, "The ", r.a.createElement("code", null, "<Alert>"), " component can be used to show your users error, success, informational or warning messages. Use component properties such as  ", r.a.createElement("code", null, 'variant="primary'), " or ", r.a.createElement("code", null, 'variant="secondary"'), " to use the colors from the Sass variables:"),
            scope: {
              Alert: ct.a
            },
            imports: "import { Alert } from '@themesberg/react-bootstrap';",
            example: '<React.Fragment>\n  <Alert variant="primary">\n    A simple primary alert \u2014 check it out!\n  </Alert>\n  <Alert variant="secondary">\n    A simple secondary alert \u2014 check it out!\n  </Alert>\n  <Alert variant="success">\n    A simple success alert \u2014 check it out!\n  </Alert>\n  <Alert variant="danger">\n    A simple danger alert \u2014 check it out!\n  </Alert>\n  <Alert variant="warning">\n    A simple warning alert \u2014 check it out!\n  </Alert>\n  <Alert variant="info">\n    A simple info alert \u2014 check it out!\n  </Alert>\n  <Alert variant="light">\n    A simple light alert \u2014 check it out!\n  </Alert>\n  <Alert variant="dark">\n    A simple dark alert \u2014 check it out!\n  </Alert>\n</React.Fragment>'
          }), r.a.createElement(It, {
            title: "Dismissable alerts",
            description: r.a.createElement("p", null, "The ", r.a.createElement("code", null, "<Alert>"), " component can be used to create an alert component that can be closed by clicking on the close icon by adding the ", r.a.createElement("code", null, "show"), " and ", r.a.createElement("code", null, "onClose"), " properties. Additionally, you can also use the ", r.a.createElement("code", null, "<FontAwesomeIcon>"), " component to add an icon inside the alert component."),
            scope: {
              Alert: ct.a,
              Button: k.a,
              FontAwesomeIcon: u.a,
              faBullhorn: h.l
            },
            imports: 'import { Alert, Button } from \'@themesberg/react-bootstrap\';\nimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\nimport { faBullhorn } from "@fortawesome/free-solid-svg-icons";',
            example: 'function DismissableAlerts() {\n  const [hiddenAlerts, setHiddenAlerts] = React.useState([]);\n\n  const onClose = (alertId) => {\n    const hiddenAlertsUpdated = [...hiddenAlerts, alertId];\n    setHiddenAlerts(hiddenAlertsUpdated);\n  };\n\n  const shouldShowAlert = (alertId) => (\n    hiddenAlerts.indexOf(alertId) === -1\n  );\n\n  return(\n    <React.Fragment>\n      <Alert\n        variant="primary"\n        show={shouldShowAlert("primary")}\n        onClose={() => onClose("primary")}>\n\n        <div className="d-flex justify-content-between">\n          <div>\n            <FontAwesomeIcon icon={faBullhorn} className="me-1" />\n            <strong>Holy guacamole!</strong> You should check in on some of those fields below.\n          </div>\n          <Button variant="close" size="xs" onClick={() => onClose("primary")} />\n        </div>\n      </Alert>\n\n      <Alert\n        variant="secondary"\n        show={shouldShowAlert("secondary")}\n        onClose={() => onClose("secondary")}>\n\n        <div className="d-flex justify-content-between">\n          <div>\n            <FontAwesomeIcon icon={faBullhorn} className="me-1" />\n            <strong>Holy guacamole!</strong> You should check in on some of those fields below.\n          </div>\n          <Button variant="close" size="xs" onClick={() => onClose("secondary")} />\n        </div>\n      </Alert>\n      \n      <Alert\n        variant="danger"\n        show={shouldShowAlert("danger")}\n        onClose={() => onClose("danger")}>\n\n        <div className="d-flex justify-content-between">\n          <div>\n            <FontAwesomeIcon icon={faBullhorn} className="me-1" />\n            <strong>Holy guacamole!</strong> You should check in on some of those fields below.\n          </div>\n          <Button variant="close" size="xs" onClick={() => onClose("danger")} />\n        </div>\n      </Alert>\n\n      <Alert\n        variant="success"\n        show={shouldShowAlert("success")}\n        onClose={() => onClose("success")}>\n\n        <div className="d-flex justify-content-between">\n          <div>\n            <FontAwesomeIcon icon={faBullhorn} className="me-1" />\n            <strong>Holy guacamole!</strong> You should check in on some of those fields below.\n          </div>\n          <Button variant="close" size="xs" onClick={() => onClose("success")} />\n        </div>\n      </Alert>\n\n      <Alert\n        variant="warning"\n        show={shouldShowAlert("warning")}\n        onClose={() => onClose("warning")}>\n\n        <div className="d-flex justify-content-between">\n          <div>\n            <FontAwesomeIcon icon={faBullhorn} className="me-1" />\n            <strong>Holy guacamole!</strong> You should check in on some of those fields below.\n          </div>\n          <Button variant="close" size="xs" onClick={() => onClose("warning")} />\n        </div>\n      </Alert>\n\n      <Alert\n        variant="light"\n        show={shouldShowAlert("light")}\n        onClose={() => onClose("light")}>\n\n        <div className="d-flex justify-content-between">\n          <div>\n            <FontAwesomeIcon icon={faBullhorn} className="me-1" />\n            <strong>Holy guacamole!</strong> You should check in on some of those fields below.\n          </div>\n          <Button variant="close" size="xs" onClick={() => onClose("light")} />\n        </div>\n      </Alert>\n\n      <Alert\n        variant="dark"\n        show={shouldShowAlert("dark")}\n        onClose={() => onClose("dark")}>\n\n        <div className="d-flex justify-content-between">\n          <div>\n            <FontAwesomeIcon icon={faBullhorn} className="me-1" />\n            <strong>Holy guacamole!</strong> You should check in on some of those fields below.\n          </div>\n          <Button variant="close" size="xs" onClick={() => onClose("dark")} />\n        </div>\n      </Alert>\n    </React.Fragment>\n  );\n}\n\nrender( <DismissableAlerts /> );'
          })))
        },
        _t = function () {
          return r.a.createElement("article", null, r.a.createElement(w.a, {
            className: "px-0"
          }, r.a.createElement(S.a, {
            className: "d-flex flex-wrap flex-md-nowrap align-items-center py-4"
          }, r.a.createElement(E.a, {
            className: "d-block mb-4 mb-md-0"
          }, r.a.createElement("h1", {
            className: "h2"
          }, "Badges"), r.a.createElement("p", {
            className: "mb-0"
          }, "Use badges to add extra labeling to alongside titles or to categorize items."))), r.a.createElement(It, {
            title: "Example",
            description: r.a.createElement("p", null, "Use the ", r.a.createElement("code", null, "<Badge>"), " component to show and highlight labeled text. You can update the colors using the following modifier classes (ie. ", r.a.createElement("code", null, "bg-primary"), ", ", r.a.createElement("code", null, "bg-secondary"), "):"),
            scope: {
              Badge: I.a
            },
            imports: "import { Badge } from '@themesberg/react-bootstrap';",
            example: '<React.Fragment>\n  <Badge bg="primary" className="me-1">Primary</Badge>\n  <Badge bg="secondary" className="me-1">Secondary</Badge>\n  <Badge bg="success" className="me-1">Success</Badge>\n  <Badge bg="danger" className="me-1">Danger</Badge>\n  <Badge bg="warning" text="dark" className="me-1">Warning</Badge>\n  <Badge bg="info" className="me-1">Info</Badge>\n  <Badge bg="light" text="dark" className="me-1">Light</Badge>\n  <Badge bg="dark">Dark</Badge>\n</React.Fragment>'
          }), r.a.createElement(It, {
            title: "Sizing with badges",
            description: r.a.createElement("p", null, "To update the size of the ", r.a.createElement("code", null, "<Badge>"), " component you can use the size modified classes, such as ", r.a.createElement("code", null, "badge-md"), " or ", r.a.createElement("code", null, "badge-lg"), "."),
            scope: {
              Badge: I.a
            },
            imports: "import { Badge } from '@themesberg/react-bootstrap';",
            example: '<React.Fragment>\n  <Badge bg="primary" className="me-1">Primary</Badge>\n  <Badge bg="secondary" text="dark" className="badge-md me-1">Secondary</Badge>\n  <Badge bg="success" className="badge-lg">Success</Badge>\n</React.Fragment>'
          }), r.a.createElement(It, {
            title: "Pill badges",
            description: r.a.createElement("p", null, "Set the ", r.a.createElement("code", null, "pill"), " on ", r.a.createElement("code", null, "true"), " property to make badges more rounded with a larger border radius."),
            scope: {
              Badge: I.a
            },
            imports: "import { Badge } from '@themesberg/react-bootstrap';",
            example: '<React.Fragment>\n  <Badge pill={true} bg="primary" className="me-1">Primary</Badge>\n  <Badge pill={true} bg="secondary" className="me-1">Secondary</Badge>\n  <Badge pill={true} bg="success" className="me-1">Success</Badge>\n  <Badge pill={true} bg="danger" className="me-1">Danger</Badge>\n</React.Fragment>'
          }), r.a.createElement(It, {
            title: "Notification badges",
            description: r.a.createElement("p", null, "You can also use the ", r.a.createElement("code", null, "<Badge>"), " component inside other components, such as buttons, alerts, simple paragraphs."),
            scope: {
              Button: k.a,
              Badge: I.a
            },
            imports: "import { Badge, Button } from '@themesberg/react-bootstrap';",
            example: '<Button variant="primary">Profile <Badge bg="secondary">9</Badge></Button>'
          })))
        },
        Tt = function () {
          return r.a.createElement("article", null, r.a.createElement(w.a, {
            className: "px-0"
          }, r.a.createElement(S.a, {
            className: "d-flex flex-wrap flex-md-nowrap align-items-center py-4"
          }, r.a.createElement(E.a, {
            className: "d-block mb-4 mb-md-0"
          }, r.a.createElement("h1", {
            className: "h2"
          }, "Breadcrumbs"), r.a.createElement("p", {
            className: "mb-0"
          }, "Use breadcrumbs to indicate the navigational hierarchy of the current page."))), r.a.createElement(It, {
            title: "Example",
            description: r.a.createElement("p", null, "Use the ", r.a.createElement("code", null, "<Breadcrumb>"), " component to show a clear navigational hierarchy for your users, wherever they may be on a given page. Using the ", r.a.createElement("code", null, "variant"), " modifier props you can update the color of the component."),
            scope: {
              Row: S.a,
              Col: E.a,
              Breadcrumb: La.a
            },
            imports: "import { Breadcrumb } from '@themesberg/react-bootstrap';",
            example: '<Row>\n  <Col lg={6}>\n    <Breadcrumb listProps={{ className: "breadcrumb-primary breadcrumb-text-light text-white" }}>\n        <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>\n        <Breadcrumb.Item href="#library">Library</Breadcrumb.Item>\n        <Breadcrumb.Item active>Data</Breadcrumb.Item>\n    </Breadcrumb>\n\n    <Breadcrumb listProps={{ className: "breadcrumb-secondary breadcrumb-text-light text-white" }}>\n        <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>\n        <Breadcrumb.Item href="#library">Library</Breadcrumb.Item>\n        <Breadcrumb.Item active>Data</Breadcrumb.Item>\n    </Breadcrumb>\n\n    <Breadcrumb listProps={{ className: "breadcrumb-tertiary breadcrumb-text-light text-white" }}>\n        <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>\n        <Breadcrumb.Item href="#library">Library</Breadcrumb.Item>\n        <Breadcrumb.Item active>Data</Breadcrumb.Item>\n    </Breadcrumb>\n\n    <Breadcrumb listProps={{ className: "breadcrumb-info breadcrumb-text-light text-white" }}>\n        <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>\n        <Breadcrumb.Item href="#library">Library</Breadcrumb.Item>\n        <Breadcrumb.Item active>Data</Breadcrumb.Item>\n    </Breadcrumb>\n  </Col>\n</Row>'
          }), r.a.createElement(It, {
            title: "Transparent Breadcrumbs",
            description: r.a.createElement("p", null, "In order to make the ", r.a.createElement("code", null, "<Breadcrumb>"), " component transparent, all you need to do is add the ", r.a.createElement("code", null, "breadcrumb-transparent"), " modifier class to the parent component."),
            scope: {
              Row: S.a,
              Col: E.a,
              Breadcrumb: La.a
            },
            imports: "import { Breadcrumb } from '@themesberg/react-bootstrap';",
            example: '<Row>\n  <Col lg={6}>\n    <Breadcrumb listProps={{ className: "breadcrumb-primary breadcrumb-transparent" }}>\n        <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>\n        <Breadcrumb.Item href="#library">Library</Breadcrumb.Item>\n        <Breadcrumb.Item active>Data</Breadcrumb.Item>\n    </Breadcrumb>\n\n    <Breadcrumb listProps={{ className: "breadcrumb-secondary breadcrumb-transparent" }}>\n        <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>\n        <Breadcrumb.Item href="#library">Library</Breadcrumb.Item>\n        <Breadcrumb.Item active>Data</Breadcrumb.Item>\n    </Breadcrumb>\n\n    <Breadcrumb listProps={{ className: "breadcrumb-tertiary breadcrumb-transparent" }}>\n        <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>\n        <Breadcrumb.Item href="#library">Library</Breadcrumb.Item>\n        <Breadcrumb.Item active>Data</Breadcrumb.Item>\n    </Breadcrumb>\n\n    <Breadcrumb listProps={{ className: "breadcrumb-info breadcrumb-transparent" }}>\n        <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>\n        <Breadcrumb.Item href="#library">Library</Breadcrumb.Item>\n        <Breadcrumb.Item active>Data</Breadcrumb.Item>\n    </Breadcrumb>\n  </Col>\n</Row>'
          })))
        },
        Pt = function () {
          return r.a.createElement("article", null, r.a.createElement(w.a, {
            className: "px-0"
          }, r.a.createElement(S.a, {
            className: "d-flex flex-wrap flex-md-nowrap align-items-center py-4"
          }, r.a.createElement(E.a, {
            className: "d-block mb-4 mb-md-0"
          }, r.a.createElement("h1", {
            className: "h2"
          }, "Buttons"), r.a.createElement("p", {
            className: "mb-0"
          }, "Use custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more."))), r.a.createElement(It, {
            title: "Example",
            description: r.a.createElement("p", null, "The ", r.a.createElement("code", null, "<Button>"), " component is an important part of the UI that you can use for user actions. If you want to change the appearance of a given button, you can update the modifier props of the ", r.a.createElement("code", null, "variant"), " attribute."),
            scope: {
              Button: k.a
            },
            imports: "import { Button } from '@themesberg/react-bootstrap';",
            example: '<React.Fragment>\n  <Button variant="primary" className="m-1">Primary</Button>\n  <Button variant="secondary" className="m-1">Secondary</Button>\n  <Button variant="tertiary" className="m-1">Tertiary</Button>\n  <Button variant="info" className="m-1">Info</Button>\n  <Button variant="success" className="m-1">Success</Button>\n  <Button variant="warning" className="m-1">Warning</Button>\n  <Button variant="danger" className="m-1">Danger</Button>\n  <Button variant="dark" className="m-1">Dark</Button>\n  <Button variant="gray" className="m-1">Gray</Button>\n  <Button variant="light" className="m-1">Light</Button>\n  <Button variant="white" className="m-1">White</Button>\n</React.Fragment>'
          }), r.a.createElement(It, {
            title: "Button sizing",
            description: r.a.createElement("p", null, "The ", r.a.createElement("code", null, "<Button>"), " component comes with three main sizing options: ", r.a.createElement("code", null, "sm"), ", default, and ", r.a.createElement("code", null, "lg"), ". In order to change the size of the button you need to set the size using the ", r.a.createElement("code", null, "size"), " attribute."),
            scope: {
              Button: k.a
            },
            imports: "import { Button } from '@themesberg/react-bootstrap';",
            example: '<React.Fragment>\n  <Button variant="primary" size="sm" className="me-1">Small</Button>\n  <Button variant="primary" className="me-1">Regular</Button>\n  <Button variant="primary" size="lg" className="me-1">Large Button</Button>\n</React.Fragment>'
          }), r.a.createElement(It, {
            title: "Buttons with outline",
            description: r.a.createElement("p", null, "Instead of a fully colored background, you can also choose to style the ", r.a.createElement("code", null, "<Button>"), " component to only have an outline border by using the ", r.a.createElement("code", null, "outline-primary"), ", ", r.a.createElement("code", null, "outline-secondary"), " modifier classes inside the ", r.a.createElement("code", null, "variant"), " attribute."),
            scope: {
              Button: k.a
            },
            imports: "import { Button } from '@themesberg/react-bootstrap';",
            example: '<React.Fragment>\n  <Button variant="outline-primary" className="m-1">Primary</Button>\n  <Button variant="outline-secondary" className="m-1">Secondary</Button>\n  <Button variant="outline-tertiary" className="m-1">Tertiary</Button>\n  <Button variant="outline-info" className="m-1">Info</Button>\n  <Button variant="outline-success" className="m-1">Success</Button>\n  <Button variant="outline-danger" className="m-1">Danger</Button>\n  <Button variant="outline-dark" className="m-1">Dark</Button>\n  <Button variant="outline-gray" className="m-1">Gray</Button>\n</React.Fragment>'
          }), r.a.createElement(It, {
            title: "Link buttons",
            description: r.a.createElement("p", null, "If you want to use the ", r.a.createElement("code", null, "<Button>"), " component, but without the appearance of a button, just use the ", r.a.createElement("code", null, 'bsPrefix="text"'), " attribute to create link styled buttons."),
            scope: {
              Button: k.a
            },
            imports: "import { Button } from '@themesberg/react-bootstrap';",
            example: '<React.Fragment>\n  <Button bsPrefix="text" href="#primary" variant="primary" className="m-3">Primary</Button>\n  <Button bsPrefix="text" href="#secondary" variant="secondary" className="m-3">Secondary</Button>\n  <Button bsPrefix="text" href="#tertiary" variant="tertiary" className="m-3">Tertiary</Button>\n  <Button bsPrefix="text" href="#info" variant="info" className="m-3">Info</Button>\n  <Button bsPrefix="text" href="#success" variant="success" className="m-3">Success</Button>\n  <Button bsPrefix="text" href="#danger" variant="danger" className="m-3">Danger</Button>\n  <Button bsPrefix="text" href="#dark" variant="dark" className="m-3">Dark</Button>\n  <Button bsPrefix="text" href="#gray" variant="gray" className="m-3">Gray</Button>\n</React.Fragment>'
          }), r.a.createElement(It, {
            title: "Buttons with icon",
            description: r.a.createElement("p", null, "You may want to use icons inside the ", r.a.createElement("code", null, "<Button>"), " component, which can be done by simply adding a ", r.a.createElement("code", null, "<FontAwesomeIcon>"), " component inside the button element."),
            scope: {
              Button: k.a,
              FontAwesomeIcon: u.a,
              faHeart: h.U,
              faThumbsUp: h.ob
            },
            imports: 'import { Button } from \'@themesberg/react-bootstrap\';\nimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\nimport { faHeart, faThumbsUp } from "@fortawesome/free-solid-svg-icons";',
            example: '<React.Fragment>\n  <Button variant="outline-primary" className="m-1">\n    <FontAwesomeIcon icon={faHeart} className="me-2" /> Primary\n  </Button>\n  <Button variant="outline-secondary" className="m-1">\n    <FontAwesomeIcon icon={faThumbsUp} className="me-2" /> Secondary\n  </Button>\n</React.Fragment>'
          }), r.a.createElement(It, {
            title: "Block level Buttons",
            description: r.a.createElement("p", null, "Block level buttons are great if you want the button to take up 100% of the width of the parent element. You need to add the ", r.a.createElement("code", null, "w-100"), " class to the component."),
            scope: {
              Button: k.a
            },
            imports: "import { Button } from '@themesberg/react-bootstrap';",
            example: '<Button variant="secondary" color="dark" className="w-100">Block</Button>'
          }), r.a.createElement(It, {
            title: "Disabled state",
            description: r.a.createElement("p", null, "You may want to disable the ", r.a.createElement("code", null, "<Button>"), " component for various reasons, so you need to add the ", r.a.createElement("code", null, "disabled"), " attribute in order to achieve that."),
            scope: {
              Button: k.a
            },
            imports: "import { Button } from '@themesberg/react-bootstrap';",
            example: '<React.Fragment>\n  <Button disabled variant="primary" className="mb-2 me-2">\n    Primary button\n  </Button>\n  <Button disabled variant="secondary" className="mb-2 me-2">\n    Button\n  </Button>\n</React.Fragment>'
          }), r.a.createElement(It, {
            title: "Dropdown buttons",
            description: r.a.createElement(r.a.Fragment, null, r.a.createElement("p", null, "Use the ", r.a.createElement("code", null, "<Dropdown>"), " component coupled with the ", r.a.createElement("code", null, "<Button>"), " component in order to create dropdown items when clicking on a button. The ", r.a.createElement("code", null, " <Dropdown.Toggle>"), " is the component that will trigger the dropdown menu, while the ", r.a.createElement("code", null, "<Dropdown.Menu>"), " is the actual menu where you can add the dropdown items."), r.a.createElement("p", null, "The ", r.a.createElement("code", null, "<Button>"), " component is used either before or after the toggle component, but all of this is wrapped around with the main ", r.a.createElement("code", null, "<Dropdown>"), " component.")),
            scope: {
              Button: k.a,
              Dropdown: _e.a,
              ButtonGroup: Te.a,
              FontAwesomeIcon: u.a,
              faAngleDown: h.c
            },
            imports: 'import { Button, Dropdown, ButtonGroup } from \'@themesberg/react-bootstrap\';\nimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\nimport { faAngleDown } from "@fortawesome/free-solid-svg-icons";',
            example: '<React.Fragment>\n  <Dropdown drop={faAngleDown} as={ButtonGroup} className="me-2 mb-2">\n    <Button variant="primary">Primary</Button>\n\n    <Dropdown.Toggle split variant="primary">\n      <FontAwesomeIcon icon={faAngleDown} className="dropdown-arrow" />\n    </Dropdown.Toggle>\n\n    <Dropdown.Menu>\n      <Dropdown.Item href="#action">Action</Dropdown.Item>\n      <Dropdown.Item href="#action">Another action</Dropdown.Item>\n      <Dropdown.Item href="#action">Something else here</Dropdown.Item>\n      <Dropdown.Divider />\n      <Dropdown.Item href="#action">Separated link</Dropdown.Item>\n    </Dropdown.Menu>\n  </Dropdown>\n\n  <Dropdown as={ButtonGroup} className="mb-2 me-2">\n    <Dropdown.Toggle split variant="tertiary">\n      <FontAwesomeIcon icon={faAngleDown} className="dropdown-arrow" />\n    </Dropdown.Toggle>\n\n    <Dropdown.Menu>\n      <Dropdown.Item href="#action">Action</Dropdown.Item>\n      <Dropdown.Item href="#action">Another action</Dropdown.Item>\n      <Dropdown.Item href="#action">Something else here</Dropdown.Item>\n      <Dropdown.Divider />\n      <Dropdown.Item href="#action">Separated link</Dropdown.Item>\n    </Dropdown.Menu>\n  </Dropdown>\n</React.Fragment>'
          }), r.a.createElement(It, {
            title: "Dropdown sizing",
            description: r.a.createElement("p", null, "You may want to use one of the three main sizing options for the ", r.a.createElement("code", null, "<Dropdown>"), " component, so in order to do that you only need to use the ", r.a.createElement("code", null, 'size="md"'), " or ", r.a.createElement("code", null, 'size="lg"'), " attributes for the ", r.a.createElement("code", null, "<Button>"), " component inside the dropdown component."),
            scope: {
              Button: k.a,
              Dropdown: _e.a,
              ButtonGroup: Te.a,
              FontAwesomeIcon: u.a,
              faAngleDown: h.c
            },
            imports: 'import { Button, ButtonGroup, Dropdown } from \'@themesberg/react-bootstrap\';\nimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\nimport { faAngleDown } from "@fortawesome/free-solid-svg-icons";',
            example: '<React.Fragment>\n  <Dropdown drop={faAngleDown} as={ButtonGroup} className="me-2 mb-2">\n    <Button size="sm" variant="primary">Small</Button>\n\n    <Dropdown.Toggle split variant="primary">\n      <FontAwesomeIcon icon={faAngleDown} className="dropdown-arrow" />\n    </Dropdown.Toggle>\n\n    <Dropdown.Menu>\n      <Dropdown.Item href="#action">Action</Dropdown.Item>\n      <Dropdown.Item href="#action">Another action</Dropdown.Item>\n      <Dropdown.Item href="#action">Something else here</Dropdown.Item>\n      <Dropdown.Divider />\n      <Dropdown.Item href="#action">Separated link</Dropdown.Item>\n    </Dropdown.Menu>\n  </Dropdown>\n\n  <Dropdown drop={faAngleDown} as={ButtonGroup} className="me-2 mb-2">\n    <Button variant="secondary">Default</Button>\n\n    <Dropdown.Toggle split variant="secondary">\n      <FontAwesomeIcon icon={faAngleDown} className="dropdown-arrow" />\n    </Dropdown.Toggle>\n\n    <Dropdown.Menu>\n      <Dropdown.Item href="#action">Action</Dropdown.Item>\n      <Dropdown.Item href="#action">Another action</Dropdown.Item>\n      <Dropdown.Item href="#action">Something else here</Dropdown.Item>\n      <Dropdown.Divider />\n      <Dropdown.Item href="#action">Separated link</Dropdown.Item>\n    </Dropdown.Menu>\n  </Dropdown>\n\n  <Dropdown drop={faAngleDown} as={ButtonGroup} className="me-2 mb-2">\n    <Button size="lg" variant="tertiary">Large</Button>\n\n    <Dropdown.Toggle split variant="tertiary">\n      <FontAwesomeIcon icon={faAngleDown} className="dropdown-arrow" />\n    </Dropdown.Toggle>\n\n    <Dropdown.Menu>\n      <Dropdown.Item href="#action">Action</Dropdown.Item>\n      <Dropdown.Item href="#action">Another action</Dropdown.Item>\n      <Dropdown.Item href="#action">Something else here</Dropdown.Item>\n      <Dropdown.Divider />\n      <Dropdown.Item href="#action">Separated link</Dropdown.Item>\n    </Dropdown.Menu>\n  </Dropdown>\n</React.Fragment>'
          }), r.a.createElement(It, {
            title: "Dropdown direction",
            description: r.a.createElement("p", null, "If you want to change the direction of the ", r.a.createElement("code", null, "<Dropdown>"), " component, you can do that by using the ", r.a.createElement("code", null, 'direction="*"'), " attribute where you can use ", r.a.createElement("code", null, "up"), ", ", r.a.createElement("code", null, "right"), ", ", r.a.createElement("code", null, "down"), ", or ", r.a.createElement("code", null, "left"), " as attribute values."),
            scope: {
              Button: k.a,
              Dropdown: _e.a,
              ButtonGroup: Te.a,
              FontAwesomeIcon: u.a,
              faAngleDown: h.c,
              faAngleUp: h.f,
              faAngleLeft: h.d,
              faAngleRight: h.e
            },
            imports: 'import { Button, ButtonGroup, Dropdown } from \'@themesberg/react-bootstrap\';\nimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\nimport { faAngleDown, faAngleUp, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";',
            example: '<React.Fragment>\n  <Dropdown drop={faAngleUp} as={ButtonGroup} className="me-2 mb-2">\n    <Button size="sm" variant="primary">Up</Button>\n\n    <Dropdown.Toggle split variant="primary">\n      <FontAwesomeIcon icon={faAngleUp} className="dropdown-arrow" />\n    </Dropdown.Toggle>\n\n    <Dropdown.Menu>\n      <Dropdown.Item href="#action">Action</Dropdown.Item>\n      <Dropdown.Item href="#action">Another action</Dropdown.Item>\n      <Dropdown.Item href="#action">Something else here</Dropdown.Item>\n      <Dropdown.Divider />\n      <Dropdown.Item href="#action">Separated link</Dropdown.Item>\n    </Dropdown.Menu>\n  </Dropdown>\n\n  <Dropdown drop={faAngleRight} as={ButtonGroup} className="me-2 mb-2">\n    <Button variant="secondary">Right</Button>\n\n    <Dropdown.Toggle split variant="secondary">\n      <FontAwesomeIcon icon={faAngleRight} className="dropdown-arrow" />\n    </Dropdown.Toggle>\n\n    <Dropdown.Menu>\n      <Dropdown.Item href="#action">Action</Dropdown.Item>\n      <Dropdown.Item href="#action">Another action</Dropdown.Item>\n      <Dropdown.Item href="#action">Something else here</Dropdown.Item>\n      <Dropdown.Divider />\n      <Dropdown.Item href="#action">Separated link</Dropdown.Item>\n    </Dropdown.Menu>\n  </Dropdown>\n\n  <Dropdown drop={faAngleDown} as={ButtonGroup} className="me-2 mb-2">\n    <Button size="lg" variant="tertiary">Down</Button>\n\n    <Dropdown.Toggle split variant="tertiary">\n      <FontAwesomeIcon icon={faAngleDown} className="dropdown-arrow" />\n    </Dropdown.Toggle>\n\n    <Dropdown.Menu>\n      <Dropdown.Item href="#action">Action</Dropdown.Item>\n      <Dropdown.Item href="#action">Another action</Dropdown.Item>\n      <Dropdown.Item href="#action">Something else here</Dropdown.Item>\n      <Dropdown.Divider />\n      <Dropdown.Item href="#action">Separated link</Dropdown.Item>\n    </Dropdown.Menu>\n  </Dropdown>\n\n  <Dropdown drop={faAngleLeft} as={ButtonGroup} className="me-2 mb-2">\n    <Button size="lg" variant="tertiary">Left</Button>\n\n    <Dropdown.Toggle split variant="tertiary">\n      <FontAwesomeIcon icon={faAngleLeft} className="dropdown-arrow" />\n    </Dropdown.Toggle>\n\n    <Dropdown.Menu>\n      <Dropdown.Item href="#action">Action</Dropdown.Item>\n      <Dropdown.Item href="#action">Another action</Dropdown.Item>\n      <Dropdown.Item href="#action">Something else here</Dropdown.Item>\n      <Dropdown.Divider />\n      <Dropdown.Item href="#action">Separated link</Dropdown.Item>\n    </Dropdown.Menu>\n  </Dropdown>\n</React.Fragment>'
          })))
        },
        Dt = function () {
          return r.a.createElement("article", null, r.a.createElement(w.a, {
            className: "px-0"
          }, r.a.createElement(S.a, {
            className: "d-flex flex-wrap flex-md-nowrap align-items-center py-4"
          }, r.a.createElement(E.a, {
            className: "d-block mb-4 mb-md-0"
          }, r.a.createElement("h1", {
            className: "h2"
          }, "Forms"), r.a.createElement("p", {
            className: "mb-0"
          }, "Use form elements such as text inputs, textareas, file uploads and many more to get input from you users."))), r.a.createElement(It, {
            title: "Example",
            description: r.a.createElement("p", null, "Form elements are an important part of the UI to receive text input from the users. The ", r.a.createElement("code", null, "<Form>"), " component can be used to create forms, form groups, labels, and input elements inside the UI. Check out the following example for a simple email input field and a textarea field:"),
            scope: {
              Form: j.a
            },
            imports: "import { Form } from '@themesberg/react-bootstrap';",
            example: '<Form>\n  <Form.Group className="mb-3">\n    <Form.Label>Email address</Form.Label>\n    <Form.Control type="email" placeholder="name@example.com" />\n  </Form.Group>\n  <Form.Group className="mb-3">\n    <Form.Label>Example textarea</Form.Label>\n    <Form.Control as="textarea" rows="3" />\n  </Form.Group>\n</Form>'
          }), r.a.createElement(It, {
            title: "Input fields with icon",
            description: r.a.createElement("p", null, "You can also add icons to the left or right side of the input field by using the ", r.a.createElement("code", null, "<InputGroup>"), " component and using the ", r.a.createElement("code", null, "<InputGroup.Text>"), " element with an icon element inside it, either after or before the ", r.a.createElement("code", null, "<Form.Control>"), " element."),
            scope: {
              Form: j.a,
              InputGroup: Ra.a,
              FontAwesomeIcon: u.a,
              faSearch: h.gb
            },
            imports: 'import { Form, InputGroup } from \'@themesberg/react-bootstrap\';\nimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\nimport { faSearch } from "@fortawesome/free-solid-svg-icons";',
            example: '<Form>\n  <Form.Group className="mb-3">\n    <Form.Label>Icon Left</Form.Label>\n    <InputGroup>\n      <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>\n      <Form.Control type="text" placeholder="Search" />\n    </InputGroup>\n  </Form.Group>\n  <Form.Group className="mb-3">\n    <Form.Label>Icon Right</Form.Label>\n    <InputGroup>\n      <Form.Control type="text" placeholder="Search" />\n      <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>\n    </InputGroup>\n  </Form.Group>\n</Form>'
          }), r.a.createElement(It, {
            title: "Validation",
            description: r.a.createElement("p", null, "You can easily update the styles of a valid or invalid styles input field by using the ", r.a.createElement("code", null, "isValid"), " or ", r.a.createElement("code", null, "isInvalid"), " attributes. Additionally, you can use the ", r.a.createElement("code", null, "<Form.Control.Feedback>"), " component to write the message regarding the success or error message."),
            scope: {
              Form: j.a
            },
            imports: "import { Form } from '@themesberg/react-bootstrap';",
            example: '<Form>\n  <Form.Group className="mb-3">\n    <Form.Label>Username</Form.Label>\n    <Form.Control required isInvalid type="text" />\n    <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>\n  </Form.Group>\n  <Form.Group className="mb-3">\n    <Form.Label>First name</Form.Label>\n    <Form.Control required isValid type="text" defaultValue="Mark" />\n    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>\n  </Form.Group>\n</Form>'
          }), r.a.createElement(It, {
            title: "Select input",
            description: r.a.createElement("p", null, "The ", r.a.createElement("code", null, "<Form.Select>"), " component can be used for option selection from the user. You can use the ", r.a.createElement("code", null, "<option>"), " elements to add multiple options and use the ", r.a.createElement("code", null, "defaultValue"), " attribute to set the default value of the select field."),
            scope: {
              Form: j.a
            },
            imports: "import { Form } from '@themesberg/react-bootstrap';",
            example: '<Form>\n  <Form.Group className="mb-3">\n    <Form.Label>Example select</Form.Label>\n    <Form.Select>\n      <option defaultValue>Open this select menu</option>\n      <option>One</option>\n      <option>Two</option>\n      <option>Three</option>\n    </Form.Select>\n  </Form.Group>\n</Form>'
          }), r.a.createElement(It, {
            title: "Multiple select",
            description: "",
            scope: {
              Form: j.a
            },
            imports: "import { Form } from '@themesberg/react-bootstrap';",
            example: '<Form>\n  <Form.Group className="mb-3">\n    <Form.Label>Example multiple select</Form.Label>\n    <Form.Select multiple>\n      <option defaultValue>Open this select menu</option>\n      <option>One</option>\n      <option>Two</option>\n      <option>Three</option>\n    </Form.Select>\n  </Form.Group>\n</Form>'
          }), r.a.createElement(It, {
            title: "Textarea",
            description: r.a.createElement("p", null, "You can create a textarea input field by adding the ", r.a.createElement("code", null, 'as="textarea"'), " modifier attribute to the ", r.a.createElement("code", null, "<Form.Control>"), " component."),
            scope: {
              Form: j.a
            },
            imports: "import { Form } from '@themesberg/react-bootstrap';",
            example: '<Form>\n  <Form.Group>\n    <Form.Label>Example textarea</Form.Label>\n    <Form.Control as="textarea" rows="4" placeholder="Enter your message..." />\n  </Form.Group>\n</Form>'
          }), r.a.createElement(It, {
            title: "File upload",
            description: r.a.createElement("p", null, "If you want to use an input field to upload files, you need to add the ", r.a.createElement("code", null, 'type="file"'), " attribute to the ", r.a.createElement("code", null, "<Form.Control>"), " component."),
            scope: {
              Form: j.a
            },
            imports: "import { Form } from '@themesberg/react-bootstrap';",
            example: '<Form>\n  <Form.Control type="file" />\n</Form>'
          }), r.a.createElement(It, {
            title: "Checkboxes",
            description: r.a.createElement(r.a.Fragment, null, r.a.createElement("p", null, "Use the ", r.a.createElement("code", null, "<Form.Check>"), " component to create checkbox items. If you want to disable on them, you need to add the ", r.a.createElement("code", null, "disabled"), " attribute."), r.a.createElement("p", null, "Make sure the is a ", r.a.createElement("code", null, 'id="*"'), " and ", r.a.createElement("code", null, 'htmlFor="*"'), " attribute for each element so that clicking on the text will also toggle the element.")),
            scope: {
              Form: j.a
            },
            imports: "import { Form } from '@themesberg/react-bootstrap';",
            example: '<Form>\n  <Form.Check label="Default checkbox" id="checkbox1" htmlFor="checkbox1" />\n  <Form.Check disabled label="Disabled checkbox" id="checkbox2" htmlFor="checkbox2" />\n</Form>'
          }), r.a.createElement(It, {
            title: "Radio buttons",
            description: r.a.createElement(r.a.Fragment, null, r.a.createElement("p", null, "If you want to use radio buttons, you need to use the ", r.a.createElement("code", null, "<Form.Check>"), " component with the ", r.a.createElement("code", null, 'type="radio"'), " modifier. You can disable the element by using the ", r.a.createElement("code", null, "disabled"), " attribute."), r.a.createElement("p", null, "Make sure the is a ", r.a.createElement("code", null, 'id="*"'), " and ", r.a.createElement("code", null, 'htmlFor="*"'), " attribute for each element so that clicking on the text will also toggle the element.")),
            scope: {
              Form: j.a
            },
            imports: "import { Form } from '@themesberg/react-bootstrap';",
            example: '<Form>\n  <fieldset>\n    <Form.Check\n      defaultChecked\n      type="radio"\n      defaultValue="option1"\n      label="Default radio"\n      name="exampleRadios"\n      id="radio1"\n      htmlFor="radio1"\n      />\n\n    <Form.Check\n      type="radio"\n      defaultValue="option2"\n      label="Second default radio"\n      name="exampleRadios"\n      id="radio2"\n      htmlFor="radio2"\n      />\n\n    <Form.Check\n      disabled\n      type="radio"\n      defaultValue="option3"\n      label="Disabled radio"\n      name="exampleRadios"\n      id="radio3"\n      htmlFor="radio3"\n      />\n  </fieldset>\n</Form>'
          }), r.a.createElement(It, {
            title: "Datepicker",
            description: r.a.createElement("p", null, "Use the ", r.a.createElement("code", null, "<Datetime>"), " component to use a datepicker as an input field. You can read more about the options that you can use for this component by reading the ", r.a.createElement(b.a.Link, {
              href: "https://www.npmjs.com/package/react-datetime",
              target: "_blank"
            }, "react-datetime"), " documentation."),
            scope: {
              Datetime: za.a,
              Form: j.a,
              InputGroup: Ra.a,
              FontAwesomeIcon: u.a,
              faCalendarAlt: h.m,
              moment: Ga.a
            },
            imports: 'import React, { useState } from "react";\nimport { Form, InputGroup } from \'@themesberg/react-bootstrap\';\nimport Datetime from "react-datetime";\nimport moment from "moment-timezone";\n\nimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\nimport { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";',
            example: 'const Datepicker = () => {\n  const [birthday, setBirthday] = React.useState("");\n\n  return(\n    <Form>\n      <Form.Group className="mb-3">\n        <Datetime\n          timeFormat={false}\n          closeOnSelect={false}\n          onChange={setBirthday}\n          renderInput={(props, openCalendar) => (\n            <InputGroup>\n              <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>\n              <Form.Control\n                required\n                type="text"\n                value={birthday ? moment(birthday).format("MM/DD/YYYY") : ""}\n                placeholder="mm/dd/yyyy"\n                onFocus={openCalendar}\n                onChange={() => { }} />\n            </InputGroup>\n          )} />\n      </Form.Group>\n    </Form>\n  );\n}\n\nrender( <Datepicker /> )'
          })))
        },
        At = t(1066),
        Ft = function () {
          var e = Object(n.useState)(!1),
            a = Object(m.a)(e, 2),
            t = a[0],
            l = a[1];
          return r.a.createElement("article", null, r.a.createElement(w.a, {
            className: "px-0"
          }, r.a.createElement(S.a, {
            className: "d-flex flex-wrap flex-md-nowrap align-items-center py-4"
          }, r.a.createElement(E.a, {
            className: "d-block mb-4 mb-md-0"
          }, r.a.createElement("h1", {
            className: "h2"
          }, "Modals"), r.a.createElement("p", {
            className: "mb-0"
          }, "Use modals to develop faster and more interactive user interfaces."))), r.a.createElement(S.a, null, r.a.createElement(E.a, {
            xs: 12,
            className: "mb-4"
          }, r.a.createElement(It, {
            title: "Example",
            description: r.a.createElement(r.a.Fragment, null, r.a.createElement("p", null, "The ", r.a.createElement("code", null, "<Modal>"), " component can be used as a way to show extra content on top of the existing UI based on an event. For example, you can use the ", r.a.createElement("code", null, "onClick"), " event from a button component to show a modal by using the ", r.a.createElement("code", null, "setShowDefault(true)"), " function."), r.a.createElement("p", null, "Additionally, you can use the ", r.a.createElement("code", null, "handleClose"), " event to handle the situation when the modal is being closed.")),
            scope: {
              Col: E.a,
              Card: b.a,
              Button: k.a,
              Modal: At.a,
              showDefault: t,
              setShowDefault: l,
              handleClose: function () {
                return l(!1)
              },
              useState: n.useState
            },
            imports: "import React, { useState } from \"react\";\nimport { Button, Modal } from '@themesberg/react-bootstrap';\n\nconst [showDefault, setShowDefault] = useState(false);\nconst handleClose = () => setShowDefault(false);",
            example: '<React.Fragment>\n  <Button variant="primary" className="my-3" onClick={() => setShowDefault(true)}>Default</Button>\n\n  <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose}>\n    <Modal.Header>\n      <Modal.Title className="h6">Terms of Service</Modal.Title>\n      <Button variant="close" aria-label="Close" onClick={handleClose} />\n    </Modal.Header>\n    <Modal.Body>\n      <p>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>\n      <p>The European Union\u2019s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>\n    </Modal.Body>\n    <Modal.Footer>\n      <Button variant="secondary" onClick={handleClose}>\n        I Got It\n    </Button>\n      <Button variant="link" className="text-gray ms-auto" onClick={handleClose}>\n        Close\n    </Button>\n    </Modal.Footer>\n  </Modal>\n</React.Fragment>'
          })))))
        },
        Lt = function () {
          return r.a.createElement("article", null, r.a.createElement(w.a, {
            className: "px-0"
          }, r.a.createElement(S.a, {
            className: "d-flex flex-wrap flex-md-nowrap align-items-center py-4"
          }, r.a.createElement(E.a, {
            className: "d-block mb-4 mb-md-0"
          }, r.a.createElement("h1", {
            className: "h2"
          }, "Navs"), r.a.createElement("p", {
            className: "mb-0"
          }, "Use navigation tabs to break up pieces of content."))), r.a.createElement(It, {
            title: "Example",
            description: r.a.createElement("p", null, "The ", r.a.createElement("code", null, "<Nav>"), " component should be used for app navigation, such as for the navigation bar, a secondary menu, or other. The ", r.a.createElement("code", null, "<Nav.Link>"), " component can be attributed with the location of the link."),
            scope: {
              Nav: x.a,
              Row: S.a,
              Col: E.a
            },
            imports: "import { Nav } from '@themesberg/react-bootstrap';",
            example: '<Row>\n  <Col lg={6}>\n    <Nav fill defaultActiveKey="home" variant="pills" className="flex-column flex-sm-row">\n      <Nav.Item>\n        <Nav.Link eventKey="home" href="#" className="mb-sm-3 mb-md-0">\n          Home\n            </Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="profile" href="#" className="mb-sm-3 mb-md-0">\n          Profile\n            </Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="settings" href="#" className="mb-sm-3 mb-md-0">\n          Settings\n            </Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="messages" href="#" className="mb-sm-3 mb-md-0">\n          Messages\n            </Nav.Link> \n      </Nav.Item>\n    </Nav>\n  </Col>\n</Row>'
          }), r.a.createElement(It, {
            title: "Rounded navs",
            description: r.a.createElement("p", null, "If you want the nav style to be rounded, just add the ", r.a.createElement("code", null, "rounded"), " class name to the main ", r.a.createElement("code", null, "<Nav.Link>"), " component."),
            scope: {
              Nav: x.a,
              Row: S.a,
              Col: E.a
            },
            imports: "import { Nav } from '@themesberg/react-bootstrap';",
            example: '<Row>\n  <Col lg={6}>\n    <Nav fill defaultActiveKey="home" variant="pills" className="rounded flex-column flex-md-row">\n      <Nav.Item>\n        <Nav.Link eventKey="home" href="#home" className="mb-sm-3 mb-md-0">\n          Home\n            </Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="profile" href="#" className="mb-sm-3 mb-md-0">\n          Profile\n            </Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="settings" href="#" className="mb-sm-3 mb-md-0">\n          Settings\n            </Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="messages" href="#" className="mb-sm-3 mb-md-0">\n          Messages\n            </Nav.Link>\n      </Nav.Item>\n    </Nav>\n  </Col>\n</Row>'
          }), r.a.createElement(It, {
            title: "Rounded navs with icons",
            description: r.a.createElement("p", null, "If you want to add other content to a navigation item, such as an icon, you can do that by "),
            scope: {
              Nav: x.a,
              FontAwesomeIcon: u.a,
              faTachometerAlt: h.mb,
              faComments: P.a,
              faSun: P.c,
              faUserCircle: P.e,
              Row: S.a,
              Col: E.a
            },
            imports: "import { Nav } from '@themesberg/react-bootstrap';\nimport { FontAwesomeIcon } from '@fortawesome/react-fontawesome';\nimport { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';\nimport { faComments, faSun, faUserCircle } from '@fortawesome/free-regular-svg-icons';",
            example: '<Row>\n  <Col lg={6}>\n    <Nav fill defaultActiveKey="home" variant="pills" className="flex-column flex-md-row">\n      <Nav.Item>\n        <Nav.Link eventKey="home" href="#" className="mb-sm-3 mb-md-0">\n          <FontAwesomeIcon icon={faTachometerAlt} className="me-2" /> Home\n            </Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="profile" href="#" className="mb-sm-3 mb-md-0">\n          <FontAwesomeIcon icon={faUserCircle} className="me-2" /> Profile\n            </Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="settings" href="#" className="mb-sm-3 mb-md-0">\n          <FontAwesomeIcon icon={faSun} className="me-2" /> Settings\n            </Nav.Link>\n      </Nav.Item>\n      <Nav.Item>\n        <Nav.Link eventKey="comments" href="#" className="mb-sm-3 mb-md-0">\n          <FontAwesomeIcon icon={faComments} className="me-2" /> Messages\n            </Nav.Link>\n      </Nav.Item>\n    </Nav>\n  </Col>\n</Row>'
          })))
        },
        Rt = t(354),
        Ot = t.n(Rt),
        Mt = function () {
          return r.a.createElement("article", null, r.a.createElement(w.a, {
            className: "px-0"
          }, r.a.createElement(S.a, {
            className: "d-flex flex-wrap flex-md-nowrap align-items-center py-4"
          }, r.a.createElement(E.a, {
            className: "d-block mb-4 mb-md-0"
          }, r.a.createElement("h1", {
            className: "h2"
          }, "Navbars"), r.a.createElement("p", {
            className: "mb-0"
          }, "Use the responsive navigation bar from Volt to add nav items and multi-level nested dropdowns for a seamless navigation."))), r.a.createElement(It, {
            title: "Navbar",
            description: "",
            scope: {
              Nav: x.a,
              Card: b.a,
              Navbar: y.a,
              Container: w.a,
              ReactLogo: kt.a,
              Image: f.a
            },
            imports: "import { Nav, Card, Navbar, Container } from '@themesberg/react-bootstrap';\n\nimport ReactLogo from \"src/assets/img/technologies/react-logo-transparent.svg\";",
            example: '<Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary my-2">\n  <Container className="position-relative">\n    <Navbar.Brand href="#home" className="me-lg-3">\n      <Image src={ReactLogo} />\n    </Navbar.Brand>\n\n    <Navbar.Collapse id="navbar-default-primary" className="w-100">\n      <Nav className="navbar-nav-hover align-items-lg-center">\n        <Nav.Link href="#home">Home</Nav.Link>\n        <Nav.Link href="#about">About</Nav.Link>\n        <Nav.Link href="#contact">Contact</Nav.Link>\n      </Nav>\n    </Navbar.Collapse>\n\n    <Navbar.Toggle aria-controls="navbar-default-primary" />\n  </Container>\n</Navbar>'
          }), r.a.createElement(It, {
            title: "Navbar colors",
            description: "",
            scope: {
              useEffect: n.useEffect,
              useState: n.useState,
              Nav: x.a,
              Card: b.a,
              Navbar: y.a,
              Image: f.a,
              Container: w.a,
              ReactLogoPrimary: Ot.a,
              ReactLogo: kt.a
            },
            imports: 'import React, { useEffect, useState } from "react";\nimport { Nav, Card, Navbar, Container } from \'@themesberg/react-bootstrap\';\nimport ReactLogo from "src/assets/img/technologies/react-logo-transparent.svg";\nimport ReactLogoPrimary from "src/assets/img/technologies/react-logo-primary.svg";',
            example: 'const NavbarThemes = [\n  { themeVariant: \'primary\', navbarColor: \'dark\', brandIcon: ReactLogo },\n  { themeVariant: \'secondary\', navbarColor: \'light\', brandIcon: ReactLogoPrimary },\n  { themeVariant: \'soft\', navbarColor: \'light\', brandIcon: ReactLogo }\n];\n\nfunction NavbarChangingColors() {\n  const [themeIndex, setThemeIndex] = React.useState(0);\n  const { themeVariant, navbarColor, brandIcon } = NavbarThemes[themeIndex];\n\n  React.useEffect(() => {\n    const timer = setTimeout(() => {\n      const nextIndex = themeIndex === NavbarThemes.length - 1 ? 0 : themeIndex + 1;\n      setThemeIndex(nextIndex);\n    }, 1000);\n\n    return () => clearTimeout(timer);\n  });\n\n  return (\n    <Navbar variant={navbarColor} expand="lg" className={`navbar-transparent navbar-theme-${themeVariant} my-2`}>\n      <Container className="position-relative">\n        <Navbar.Brand href="#home" className="me-lg-3">\n          <Image src={brandIcon} />\n        </Navbar.Brand>\n\n        <Navbar.Collapse id="navbar-default-primary" className="w-100">\n          <Nav className="navbar-nav-hover align-items-lg-center">\n            <Nav.Link href="#home">Home</Nav.Link>\n            <Nav.Link href="#about">About</Nav.Link>\n            <Nav.Link href="#contact">Contact</Nav.Link>\n          </Nav>\n        </Navbar.Collapse>\n\n        <Navbar.Toggle aria-controls="navbar-default-primary" />\n      </Container>\n    </Navbar>\n  );\n}\n\nrender( <NavbarChangingColors /> );'
          })))
        },
        Gt = function () {
          return r.a.createElement("article", null, r.a.createElement(w.a, {
            className: "px-0"
          }, r.a.createElement(S.a, {
            className: "d-flex flex-wrap flex-md-nowrap align-items-center py-4"
          }, r.a.createElement(E.a, {
            className: "d-block mb-4 mb-md-0"
          }, r.a.createElement("h1", {
            className: "h2"
          }, "Pagination"), r.a.createElement("p", {
            className: "mb-0"
          }, "Use pagination elements to organize posts or other models of data into groups."))), r.a.createElement(It, {
            title: "Pagination",
            description: r.a.createElement(r.a.Fragment, null, r.a.createElement("p", null, "The ", r.a.createElement("code", null, "<Pagination>"), " component is important to use when you have data that can be potentially so numerous that you need to paginate it. We've created two main handles that you can use when the previous or next item button has been click, called ", r.a.createElement("code", null, "onPrevItem"), " and ", r.a.createElement("code", null, "onNextItem"), "."), r.a.createElement("p", null, "You can use the ", r.a.createElement("code", null, "items = []"), " array to add the number of pagination items, and set the ", r.a.createElement("code", null, "totalPages"), " pages constant to set that maximum amount of pages to show in the pagination element."), r.a.createElement("p", null, "Also you can use a function as ", r.a.createElement("code", null, "handlePaginationChange"), " to add some custome logic when user goes to another page (e.g fetch new data).")),
            scope: {
              Col: E.a,
              Card: b.a,
              Pagination: ia.a,
              FontAwesomeIcon: u.a,
              faAngleDoubleLeft: h.a,
              faAngleDoubleRight: h.b
            },
            imports: 'import React, { useState } from "react";\nimport { Col, Card, Pagination } from \'@themesberg/react-bootstrap\';\nimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\nimport { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";',
            example: 'const CustomPagination = (props) => {\n  const [activeItem, setActiveItem] = React.useState(2);\n  const { totalPages = 5, size = "md", withIcons = false, disablePrev = false } = props;\n\n  const onPrevItem = () => {\n    const prevActiveItem = activeItem === 1 ? activeItem : activeItem - 1;\n    setActiveItem(prevActiveItem);\n  };\n\n  const onNextItem = (totalPages) => {\n    const nextActiveItem = activeItem === totalPages ? activeItem : activeItem + 1;\n    setActiveItem(nextActiveItem);\n  };\n\n  const items = [];\n  for (let number = 1; number <= totalPages; number++) {\n    const isItemActive = activeItem === number;\n\n    const handlePaginationChange = () => {\n      setActiveItem(number);\n    };\n\n    items.push(\n      <Pagination.Item active={isItemActive} key={number} onClick={handlePaginationChange}>\n        {number}\n      </Pagination.Item>\n    );\n  };\n\n  return (\n    <Pagination size={size} className="mt-3">\n      <Pagination.Prev disabled={disablePrev} onClick={onPrevItem}>\n        {withIcons ? <FontAwesomeIcon icon={faAngleDoubleLeft} /> : "Previous"}\n      </Pagination.Prev>\n      {items}\n      <Pagination.Next onClick={() => onNextItem(totalPages)}>\n        {withIcons ? <FontAwesomeIcon icon={faAngleDoubleRight} /> : "Next"}\n      </Pagination.Next>\n    </Pagination>\n  );\n};\n\nrender(\n  <Col xl={12}>\n    <Card border="light">\n      <Card.Body>\n        <CustomPagination withIcons />\n      </Card.Body>\n    </Card>\n  </Col>\n);'
          }), r.a.createElement(It, {
            title: "Disabled and active states",
            description: r.a.createElement("p", null, "Use the ", r.a.createElement("code", null, "disabled"), " attribute to disable one or either of the pagination items."),
            scope: {
              Col: E.a,
              Card: b.a,
              Pagination: ia.a,
              FontAwesomeIcon: u.a,
              faAngleDoubleLeft: h.a,
              faAngleDoubleRight: h.b
            },
            imports: 'import React, { useState } from "react";\nimport { Col, Card, Pagination } from \'@themesberg/react-bootstrap\';\nimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\nimport { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";',
            example: 'const CustomPagination = (props) => {\n  const [activeItem, setActiveItem] = React.useState(2);\n  const { totalPages = 5, size = "md", withIcons = false, disablePrev = false } = props;\n\n  const onPrevItem = () => {\n    const prevActiveItem = activeItem === 1 ? activeItem : activeItem - 1;\n    setActiveItem(prevActiveItem);\n  };\n\n  const onNextItem = (totalPages) => {\n    const nextActiveItem = activeItem === totalPages ? activeItem : activeItem + 1;\n    setActiveItem(nextActiveItem);\n  };\n\n  const items = [];\n  for (let number = 1; number <= totalPages; number++) {\n    const isItemActive = activeItem === number;\n\n    const handlePaginationChange = () => {\n      setActiveItem(number);\n    };\n\n    items.push(\n      <Pagination.Item active={isItemActive} key={number} onClick={handlePaginationChange}>\n        {number}\n      </Pagination.Item>\n    );\n  };\n\n  return (\n    <Pagination size={size} className="mt-3">\n      <Pagination.Prev disabled={disablePrev} onClick={onPrevItem}>\n        {withIcons ? <FontAwesomeIcon icon={faAngleDoubleLeft} /> : "Previous"}\n      </Pagination.Prev>\n      {items}\n      <Pagination.Next onClick={() => onNextItem(totalPages)}>\n        {withIcons ? <FontAwesomeIcon icon={faAngleDoubleRight} /> : "Next"}\n      </Pagination.Next>\n    </Pagination>\n  );\n};\n\nrender(\n  <Col xl={12}>\n    <Card border="light">\n      <Card.Body>\n        <CustomPagination disablePrev />\n      </Card.Body>\n    </Card>\n  </Col>\n);'
          }), r.a.createElement(It, {
            title: "Sizing",
            description: r.a.createElement("p", null, "As throughout the whole app, you can use either the ", r.a.createElement("code", null, "sm"), ", default or ", r.a.createElement("code", null, "lg"), " size modifiers by updating the ", r.a.createElement("code", null, "size"), " attribute."),
            scope: {
              Col: E.a,
              Card: b.a,
              Pagination: ia.a,
              FontAwesomeIcon: u.a,
              faAngleDoubleLeft: h.a,
              faAngleDoubleRight: h.b
            },
            imports: 'import React, { useState } from "react";\nimport { Col, Card, Pagination } from \'@themesberg/react-bootstrap\';\nimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\nimport { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";',
            example: 'const CustomPagination = (props) => {\n  const [activeItem, setActiveItem] = React.useState(2);\n  const { totalPages = 5, size = "md", withIcons = false, disablePrev = false } = props;\n\n  const onPrevItem = () => {\n    const prevActiveItem = activeItem === 1 ? activeItem : activeItem - 1;\n    setActiveItem(prevActiveItem);\n  };\n\n  const onNextItem = (totalPages) => {\n    const nextActiveItem = activeItem === totalPages ? activeItem : activeItem + 1;\n    setActiveItem(nextActiveItem);\n  };\n\n  const items = [];\n  for (let number = 1; number <= totalPages; number++) {\n    const isItemActive = activeItem === number;\n\n    const handlePaginationChange = () => {\n      setActiveItem(number);\n    };\n\n    items.push(\n      <Pagination.Item active={isItemActive} key={number} onClick={handlePaginationChange}>\n        {number}\n      </Pagination.Item>\n    );\n  };\n\n  return (\n    <Pagination size={size} className="mt-3">\n      <Pagination.Prev disabled={disablePrev} onClick={onPrevItem}>\n        {withIcons ? <FontAwesomeIcon icon={faAngleDoubleLeft} /> : "Previous"}\n      </Pagination.Prev>\n      {items}\n      <Pagination.Next onClick={() => onNextItem(totalPages)}>\n        {withIcons ? <FontAwesomeIcon icon={faAngleDoubleRight} /> : "Next"}\n      </Pagination.Next>\n    </Pagination>\n  );\n};\n\nrender(\n  <Col xl={12}>\n    <Card border="light">\n      <Card.Body>\n        <CustomPagination size="lg" />\n        <CustomPagination size="md" />\n        <CustomPagination size="sm" />\n      </Card.Body>\n    </Card>\n  </Col>\n);'
          })))
        },
        Ut = t(1075),
        zt = function () {
          return r.a.createElement("article", null, r.a.createElement(w.a, {
            className: "px-0"
          }, r.a.createElement(S.a, {
            className: "d-flex flex-wrap flex-md-nowrap align-items-center py-4"
          }, r.a.createElement(E.a, {
            className: "d-block mb-4 mb-md-0"
          }, r.a.createElement("h1", {
            className: "h2"
          }, "Popovers"), r.a.createElement("p", {
            className: "mb-0"
          }, "Use popovers to indicate extra content for your users when clicking on an element."))), r.a.createElement(It, {
            title: "Example",
            description: r.a.createElement("p", null, "The ", r.a.createElement("code", null, "<OverlayTrigger>"), " and ", r.a.createElement("code", null, "<Popover>"), " component can be used to show extra information by clicking on a given element. You can set the title and content using the ", r.a.createElement("code", null, "<Popover.Title>"), " and ", r.a.createElement("code", null, "<Popover.Content>"), " subcomponents. Make sure you wrap the ", r.a.createElement("code", null, "<OverlayTrigger>"), " component around the popover and the element that will trigger the event."),
            scope: {
              Button: k.a,
              Popover: Ut.a,
              OverlayTrigger: v.a
            },
            imports: "import { Button, Popover, OverlayTrigger } from '@themesberg/react-bootstrap';",
            example: '<OverlayTrigger\n  trigger="click"\n  overlay={\n    <Popover>\n      <Popover.Title>Popover on top</Popover.Title>\n      <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>\n    </Popover>\n  }>\n  <Button variant="secondary" size="sm" className="m-2">Popover on top</Button>\n</OverlayTrigger>'
          }), r.a.createElement(It, {
            title: "Popover placement",
            description: r.a.createElement("p", null, "The ", r.a.createElement("code", null, "<Popover>"), " can also be positioned accordingly, using the ", r.a.createElement("code", null, 'placement="*"'), " attribute, where the value can be either ", r.a.createElement("code", null, "top"), ", ", r.a.createElement("code", null, "right"), ", ", r.a.createElement("code", null, "bottom"), " or ", r.a.createElement("code", null, "left"), "."),
            scope: {
              Button: k.a,
              Popover: Ut.a,
              OverlayTrigger: v.a
            },
            imports: "import { Button, Popover, OverlayTrigger } from '@themesberg/react-bootstrap';",
            example: '<React.Fragment>\n  <OverlayTrigger\n    placement="top"\n    trigger="click"\n    overlay={\n      <Popover>\n        <Popover.Title>Popover on top</Popover.Title>\n        <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>\n      </Popover>\n    }>\n    <Button variant="secondary" size="sm" className="m-2">Popover on top</Button>\n  </OverlayTrigger>\n  <OverlayTrigger\n    placement="right"\n    trigger="click"\n    overlay={\n      <Popover>\n        <Popover.Title>Popover on right</Popover.Title>\n        <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>\n      </Popover>\n    }>\n    <Button variant="secondary" size="sm" className="m-2">Popover on right</Button>\n  </OverlayTrigger>\n  <OverlayTrigger\n    placement="bottom"\n    trigger="click"\n    overlay={\n      <Popover>\n        <Popover.Title>Popover on bottom</Popover.Title>\n        <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>\n      </Popover>\n    }>\n    <Button variant="secondary" size="sm" className="m-2">Popover on bottom</Button>\n  </OverlayTrigger>\n  <OverlayTrigger\n    placement="left"\n    trigger="click"\n    overlay={\n      <Popover>\n        <Popover.Title>Popover on left</Popover.Title>\n        <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>\n      </Popover>\n    }>\n    <Button variant="secondary" size="sm" className="m-2">Popover on left</Button>\n  </OverlayTrigger>\n</React.Fragment>'
          })))
        },
        Ht = function (e) {
          var a = e.label,
            t = e.variant,
            n = e.value,
            l = e.type,
            o = void 0 === l ? "label" : l,
            s = e.size,
            c = void 0 === s ? "md" : s,
            m = n || Math.floor(Math.random() * (Math.floor(100) - 20 + 1)) + 20,
            i = "label" === o ? t : "white",
            d = "tooltip" === o ? "bg-".concat(t) : "";
          return r.a.createElement("div", {
            className: "progress-wrapper"
          }, r.a.createElement("div", {
            className: "progress-info"
          }, r.a.createElement("div", {
            className: "progress-".concat(o, " text-").concat(i, " ").concat(d)
          }, a), r.a.createElement("div", {
            className: "progress-percentage"
          }, r.a.createElement("span", null, m, "%"))), r.a.createElement(Pe.a, {
            className: "progress-".concat(c),
            variant: t,
            now: m,
            min: 0,
            max: 100
          }))
        },
        Kt = function () {
          return r.a.createElement("article", null, r.a.createElement(w.a, {
            className: "px-0"
          }, r.a.createElement(S.a, {
            className: "d-flex flex-wrap flex-md-nowrap align-items-center py-4"
          }, r.a.createElement(E.a, {
            className: "d-block mb-4 mb-md-0"
          }, r.a.createElement("h1", {
            className: "h2"
          }, "Progress"), r.a.createElement("p", {
            className: "mb-0"
          }, "Use progress bars to indicate percentage based components."))), r.a.createElement(It, {
            title: "Example",
            description: r.a.createElement("p", null, "Use the ", r.a.createElement("code", null, "<Progress>"), " component to show progress bars or loaders for your app. You can set the value of the bar using the ", r.a.createElement("code", null, "value"), " attribute. You can also change the appearance using the ", r.a.createElement("code", null, 'variant="*"'), " attributes using the default Bootstrap color classes, such as ", r.a.createElement("code", null, "primary"), ", ", r.a.createElement("code", null, "secondary"), ", ", r.a.createElement("code", null, "danger"), " and so on."),
            scope: {
              Progress: Ht
            },
            imports: 'import Progress from "src/components/Progress";',
            example: '<Progress variant="primary" label="Primary color" value={25} />'
          }), r.a.createElement(It, {
            title: "Color variations",
            description: r.a.createElement("p", null, "To update the appearance of the ", r.a.createElement("code", null, "<Progress>"), " component you can use the following classes for the ", r.a.createElement("code", null, "variant"), " attribute. You can also add a label text using the ", r.a.createElement("code", null, 'label="lorem ipsum"'), " attribute."),
            scope: {
              Progress: Ht
            },
            imports: 'import Progress from "src/components/Progress";',
            example: '<React.Fragment>\n  <Progress variant="secondary" label="Secondary color" />\n  <Progress variant="tertiary" label="Tertiary color" />\n  <Progress variant="dark" label="Dark color" />\n  <Progress variant="success" label="Success color" />\n  <Progress variant="info" label="Info color" />\n  <Progress variant="danger" label="Danger color" />\n</React.Fragment>'
          }), r.a.createElement(It, {
            title: "Sizing",
            description: r.a.createElement("p", null, "You can also use one of the four available sizes for the ", r.a.createElement("code", null, "<Progress>"), " updating the ", r.a.createElement("code", null, 'size="*"'), " attribute."),
            scope: {
              Progress: Ht
            },
            imports: 'import Progress from "src/components/Progress";',
            example: '<React.Fragment>\n  <Progress variant="primary" label="XL Progress Bar" size="xl" />\n  <Progress variant="secondary" label="LG Progress Bar" size="lg" />\n  <Progress variant="tertiary" label="MD Progress Bar" size="md" />\n  <Progress variant="info" label="SM Progress Bar" size="sm" />\n</React.Fragment>'
          })))
        },
        Vt = t(355),
        Wt = t.n(Vt),
        Yt = function () {
          return r.a.createElement("article", null, r.a.createElement(w.a, {
            className: "px-0"
          }, r.a.createElement(S.a, {
            className: "d-flex flex-wrap flex-md-nowrap align-items-center py-4"
          }, r.a.createElement(E.a, {
            className: "d-block mb-4 mb-md-0"
          }, r.a.createElement("h1", {
            className: "h2"
          }, "Tables"), r.a.createElement("p", {
            className: "mb-0"
          }, "Use tables to show more complex amount of data."))), r.a.createElement(It, {
            title: "Example",
            description: r.a.createElement(r.a.Fragment, null, r.a.createElement("p", null, "The ", r.a.createElement("code", null, "<Table>"), " component can be used to show more complex amounts of data. We recommend you to use the local ", r.a.createElement("code", null, "<TableRow>"), " method and component to build rows for the table and set the columns and props from there."), r.a.createElement("p", null, "In this example, the props from ", r.a.createElement("code", null, "<TableRow>"), ", such as the ", r.a.createElement("code", null, "country"), ", ", r.a.createElement("code", null, "countryIcon"), ", ", r.a.createElement("code", null, "value"), ", and ", r.a.createElement("code", null, "percentage"), " are being set as props. After that, the ", r.a.createElement("code", null, "<TableRow>"), " components are being added in the final ", r.a.createElement("code", null, "<Table>"), " rendering.")),
            scope: {
              Image: f.a,
              Table: Be.a,
              FontAwesomeIcon: u.a,
              faAngleDown: h.c,
              faAngleUp: h.f,
              USAFlag: pa.a,
              CanadaFlag: ha.a,
              UKFlag: Wt.a,
              FranceFlag: fa.a,
              JapanFlag: Na.a,
              GermanyFlag: Ea.a
            },
            imports: 'import { Image, Table } from \'@themesberg/react-bootstrap\';\nimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\nimport { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";\n\nimport USAFlag from "src/assets/img/flags/united-states-of-america.svg";\nimport CanadaFlag from "src/assets/img/flags/canada.svg";\nimport UKFlag from "src/assets/img/flags/united-kingdom.svg";\nimport FranceFlag from "src/assets/img/flags/france.svg";\nimport JapanFlag from "src/assets/img/flags/japan.svg";\nimport GermanyFlag from "src/assets/img/flags/germany.svg";',
            example: '<Table>\n  <thead className="thead-light">\n    <tr>\n      <th className="border-0">Country</th>\n      <th className="border-0">All</th>\n      <th className="border-0">All Change</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td className="border-0">\n        <a href="#Unites States" className="d-flex align-items-center">\n          <Image roundedCircle src={USAFlag} className="me-2 image image-small" alt="Unites States" />\n          <div><span className="h6">Unites States</span></div>\n        </a>\n      </td>\n      <td className="border-0 fw-bold">106</td>\n      <td className="border-0 text-danger">\n        <FontAwesomeIcon icon={faAngleDown} className="me-1" />\n        <span className="fw-bold">5</span>\n      </td>\n    </tr>\n    <tr>\n      <td className="border-0">\n        <a href="#Canada" className="d-flex align-items-center">\n          <Image roundedCircle src={CanadaFlag} className="me-2 image image-small" alt="Canada" />\n          <div><span className="h6">Canada</span></div>\n        </a>\n      </td>\n      <td className="border-0 fw-bold">76</td>\n      <td className="border-0 text-success">\n        <FontAwesomeIcon icon={faAngleUp} className="me-1" />\n        <span className="fw-bold">17</span>\n      </td>\n    </tr>\n    <tr>\n      <td className="border-0">\n        <a href="#United Kingdom" className="d-flex align-items-center">\n          <Image roundedCircle src={UKFlag} className="me-2 image image-small" alt="United Kingdom" />\n          <div><span className="h6">United Kingdom</span></div>\n        </a>\n      </td>\n      <td className="border-0 fw-bold">147</td>\n      <td className="border-0 text-success">\n        <FontAwesomeIcon icon={faAngleUp} className="me-1" />\n        <span className="fw-bold">10</span>\n      </td>\n    </tr>\n    <tr>\n      <td className="border-0">\n        <a href="#France" className="d-flex align-items-center">\n          <Image roundedCircle src={FranceFlag} className="me-2 image image-small" alt="France" />\n          <div><span className="h6">France</span></div>\n        </a>\n      </td>\n      <td className="border-0 fw-bold">112</td>\n      <td className="border-0 text-success">\n        <FontAwesomeIcon icon={faAngleUp} className="me-1" />\n        <span className="fw-bold">3</span>\n      </td>\n    </tr>\n    <tr>\n      <td className="border-0">\n        <a href="#Japan" className="d-flex align-items-center">\n          <Image roundedCircle src={JapanFlag} className="me-2 image image-small" alt="Japan" />\n          <div><span className="h6">Japan</span></div>\n        </a>\n      </td>\n      <td className="border-0 fw-bold">115</td>\n      <td className="border-0 text-danger">\n        <FontAwesomeIcon icon={faAngleDown} className="me-1" />\n        <span className="fw-bold">12</span>\n      </td>\n    </tr>\n    <tr>\n      <td className="border-0">\n        <a href="#Germany" className="d-flex align-items-center">\n          <Image roundedCircle src={GermanyFlag} className="me-2 image image-small" alt="Germany" />\n          <div><span className="h6">Germany</span></div>\n        </a>\n      </td>\n      <td className="border-0 fw-bold">220</td>\n      <td className="border-0 text-danger">\n        <FontAwesomeIcon icon={faAngleDown} className="me-1" />\n        <span className="fw-bold">56</span>\n      </td>\n    </tr>\n  </tbody>\n</Table>'
          })))
        },
        qt = t(1071),
        Jt = function () {
          return r.a.createElement("article", null, r.a.createElement(w.a, {
            className: "px-0"
          }, r.a.createElement(S.a, {
            className: "d-flex flex-wrap flex-md-nowrap align-items-center py-4"
          }, r.a.createElement(E.a, {
            className: "d-block mb-4 mb-md-0"
          }, r.a.createElement("h1", {
            className: "h2"
          }, "Tabs"), r.a.createElement("p", {
            className: "mb-0"
          }, "Use tabs to partition important data into easily navigable and interchangeable elements."))), r.a.createElement(It, {
            title: "Example",
            description: r.a.createElement(r.a.Fragment, null, r.a.createElement("p", null, "The ", r.a.createElement("code", null, "<Tab>"), " component is great if you want to show multiple resources of content with an easy partitioning using nav tabs. First you need to use the ", r.a.createElement("code", null, "<Tab.Container>"), " component to wrap around the content."), r.a.createElement("p", null, "The first part of the component will be the ", r.a.createElement("code", null, "<Nav>"), " component where you can add as many ", r.a.createElement("code", null, "<NavItem>"), " components as you'd like. The ", r.a.createElement("code", null, "<Nav.Link>"), " component can then be used to set the tab panel that it should open up when clicking on it."), r.a.createElement("p", null, "The ", r.a.createElement("code", null, "<Tab.Content>"), " component and its subcomponents are the content that will be shown based on which ", r.a.createElement("code", null, "<Nav.Link>"), " is being clicked on. The ", r.a.createElement("code", null, 'eventKey="*"'), " attribute should be used for both the ", r.a.createElement("code", null, "<Nav.Link>"), " and ", r.a.createElement("code", null, "<Tab.Content>"), " to link the two together.")),
            scope: {
              Nav: x.a,
              Tab: qt.a
            },
            imports: "import { Nav, Tab } from '@themesberg/react-bootstrap';",
            example: '<Tab.Container defaultActiveKey="home">\n  <Nav fill variant="pills" className="flex-column flex-sm-row">\n    <Nav.Item>\n      <Nav.Link eventKey="home" className="mb-sm-3 mb-md-0">\n        Home\n      </Nav.Link>\n    </Nav.Item>\n    <Nav.Item>\n      <Nav.Link eventKey="profile" className="mb-sm-3 mb-md-0">\n        Profile\n      </Nav.Link>\n    </Nav.Item>\n    <Nav.Item>\n      <Nav.Link eventKey="messages" className="mb-sm-3 mb-md-0">\n        Messages\n      </Nav.Link>\n    </Nav.Item>\n  </Nav>\n  <Tab.Content>\n    <Tab.Pane eventKey="home" className="py-4">\n      <p>\n        Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.\n      </p>\n      <p>\n        Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.\n      </p>\n    </Tab.Pane>\n    <Tab.Pane eventKey="profile" className="py-4">\n      <p>\n        Photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.\n      </p>\n      <p>\n        Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.\n      </p>\n    </Tab.Pane>\n    <Tab.Pane eventKey="messages" className="py-4">\n      <p>\n        Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.\n      </p>\n      <p>\n        Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.\n      </p>\n    </Tab.Pane>\n  </Tab.Content>\n</Tab.Container>'
          }), r.a.createElement(It, {
            title: "Example with icons",
            description: r.a.createElement("p", null, "The following example shows how you can add an icon using the ", r.a.createElement("code", null, "<FontAwesomeIcon>"), " component inside the navigation item component."),
            scope: {
              Row: S.a,
              Col: E.a,
              Nav: x.a,
              Tab: qt.a,
              FontAwesomeIcon: u.a,
              faPalette: h.bb,
              faLaptopCode: h.X,
              faUser: P.d
            },
            imports: 'import { Row, Col, Nav, Tab } from \'@themesberg/react-bootstrap\';\nimport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\nimport { faLaptopCode, faPalette } from "@fortawesome/free-solid-svg-icons";\nimport { faUser } from "@fortawesome/free-regular-svg-icons";',
            example: '<Tab.Container defaultActiveKey="visual_design">\n  <Row>\n    <Col lg={12}>\n      <Nav fill variant="pills" className="flex-column flex-sm-row">\n        <Nav.Item>\n          <Nav.Link eventKey="visual_design" className="mb-sm-3 mb-md-0">\n            <FontAwesomeIcon icon={faPalette} className="me-2" /> Visual Design\n          </Nav.Link>\n        </Nav.Item>\n        <Nav.Item>\n          <Nav.Link eventKey="code_friendly" className="mb-sm-3 mb-md-0">\n            <FontAwesomeIcon icon={faLaptopCode} className="me-2" /> Code Friendly\n          </Nav.Link>\n        </Nav.Item>\n        <Nav.Item>\n          <Nav.Link eventKey="user_experience" className="mb-sm-3 mb-md-0">\n            <FontAwesomeIcon icon={faUser} className="me-2" /> User Experience\n          </Nav.Link>\n        </Nav.Item>\n      </Nav>\n      <Tab.Content>\n        <Tab.Pane eventKey="visual_design" className="py-4">\n          <p>\n            Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.\n          </p>\n          <p>\n            Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.\n          </p>\n        </Tab.Pane>\n        <Tab.Pane eventKey="code_friendly" className="py-4">\n          <p>\n            Photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.\n          </p>\n          <p>\n            Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.\n          </p>\n        </Tab.Pane>\n        <Tab.Pane eventKey="user_experience" className="py-4">\n          <p>\n            Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.\n          </p>\n          <p>\n            Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.\n          </p>\n        </Tab.Pane>\n      </Tab.Content>\n    </Col>\n  </Row>\n</Tab.Container>'
          }), r.a.createElement(It, {
            title: "Classic",
            description: "",
            scope: {
              Col: E.a,
              Row: S.a,
              Card: b.a,
              Nav: x.a,
              Tab: qt.a
            },
            imports: "import { Col, Row, Card, Nav, Tab } from '@themesberg/react-bootstrap';",
            example: '<Tab.Container defaultActiveKey="home">\n  <Row>\n    <Col lg={12}>\n      <Nav className="nav-tabs">\n        <Nav.Item>\n          <Nav.Link eventKey="home" className="mb-sm-3 mb-md-0">\n            Home\n          </Nav.Link>\n        </Nav.Item>\n        <Nav.Item>\n          <Nav.Link eventKey="profile" className="mb-sm-3 mb-md-0">\n            Profile\n          </Nav.Link>\n        </Nav.Item>\n        <Nav.Item>\n          <Nav.Link eventKey="messages" className="mb-sm-3 mb-md-0">\n            Messages\n          </Nav.Link>\n        </Nav.Item>\n      </Nav>\n    </Col>\n    <Col lg={12}>\n      <Tab.Content>\n        <Tab.Pane eventKey="home" className="py-4">\n          <p>\n            Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.\n          </p>\n          <p>\n            Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.\n          </p>\n        </Tab.Pane>\n        <Tab.Pane eventKey="profile" className="py-4">\n          <p>\n            Photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.\n          </p>\n          <p>\n            Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.\n          </p>\n        </Tab.Pane>\n        <Tab.Pane eventKey="messages" className="py-4">\n          <p>\n            Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.\n          </p>\n          <p>\n            Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.\n          </p>\n        </Tab.Pane>\n      </Tab.Content>\n    </Col>\n  </Row>\n</Tab.Container>'
          })))
        },
        $t = function () {
          return r.a.createElement("article", null, r.a.createElement(w.a, {
            className: "px-0"
          }, r.a.createElement(S.a, {
            className: "d-flex flex-wrap flex-md-nowrap align-items-center py-4"
          }, r.a.createElement(E.a, {
            className: "d-block mb-4 mb-md-0"
          }, r.a.createElement("h1", {
            className: "h2"
          }, "Tooltips"), r.a.createElement("p", {
            className: "mb-0"
          }, "Use tooltips to indicate extra content for your users when hovering over an element."))), r.a.createElement(It, {
            title: "Example",
            description: r.a.createElement("p", null, "Use the ", r.a.createElement("code", null, "<OverlayTrigger>"), " and ", r.a.createElement("code", null, "<Tooltip>"), " to show extra information when hovering or clicking on a given element. Make sure to wrap both the triggering element (ie. a button) and the ", r.a.createElement("code", null, "<Tooltip>"), " component in a ", r.a.createElement("code", null, "<OverlayTrigger>"), " component."),
            scope: {
              Button: k.a,
              Tooltip: N.a,
              OverlayTrigger: v.a
            },
            imports: "import { Button, Tooltip, OverlayTrigger } from '@themesberg/react-bootstrap';",
            example: '<OverlayTrigger\n  trigger={[\'hover\', \'focus\']}\n  overlay={\n    <Tooltip>Tooltip on top</Tooltip>\n  }>\n  <Button variant="secondary" size="sm" className="m-2">Tooltip on top</Button>\n</OverlayTrigger>'
          }), r.a.createElement(It, {
            title: "Tooltip placement",
            description: r.a.createElement("p", null, "You can also easily position the ", r.a.createElement("code", null, "<Tooltip>"), " component in any direction using the ", r.a.createElement("code", null, 'placement="*"'), " attribute, where the value can be ", r.a.createElement("code", null, "top"), ", ", r.a.createElement("code", null, "right"), ", ", r.a.createElement("code", null, "bottom"), " or ", r.a.createElement("code", null, "left"), "."),
            scope: {
              Button: k.a,
              Tooltip: N.a,
              OverlayTrigger: v.a
            },
            imports: "import { Button, Tooltip, OverlayTrigger } from '@themesberg/react-bootstrap';",
            example: '<React.Fragment>\n  <OverlayTrigger\n    placement="top"\n    trigger={[\'hover\', \'focus\']}\n    overlay={\n      <Tooltip>Tooltip on top</Tooltip>\n    }>\n    <Button variant="secondary" size="sm" className="m-2">Tooltip on top</Button>\n  </OverlayTrigger>\n  <OverlayTrigger\n    placement="right"\n    trigger={[\'hover\', \'focus\']}\n    overlay={\n      <Tooltip>Tooltip on right</Tooltip>\n    }>\n    <Button variant="secondary" size="sm" className="m-2">Tooltip on right</Button>\n  </OverlayTrigger>\n  <OverlayTrigger\n    placement="bottom"\n    trigger={[\'hover\', \'focus\']}\n    overlay={\n      <Tooltip>Tooltip on bottom</Tooltip>\n    }>\n    <Button variant="secondary" size="sm" className="m-2">Tooltip on bottom</Button>\n  </OverlayTrigger>\n  <OverlayTrigger\n    placement="left"\n    trigger={[\'hover\', \'focus\']}\n    overlay={\n      <Tooltip>Tooltip on left</Tooltip>\n    }>\n    <Button variant="secondary" size="sm" className="m-2">Tooltip on left</Button>\n  </OverlayTrigger>\n</React.Fragment>'
          })))
        },
        Qt = t(1072),
        Xt = function () {
          var e = Object(n.useState)(!0),
            a = Object(m.a)(e, 2),
            t = a[0],
            l = a[1],
            o = Object(n.useState)(!0),
            s = Object(m.a)(o, 2),
            c = s[0],
            i = s[1],
            d = Object(n.useState)(!0),
            p = Object(m.a)(d, 2),
            h = p[0],
            f = p[1];
          return r.a.createElement("article", null, r.a.createElement(w.a, {
            className: "px-0"
          }, r.a.createElement(S.a, {
            className: "d-flex flex-wrap flex-md-nowrap align-items-center py-4"
          }, r.a.createElement(E.a, {
            className: "d-block mb-4 mb-md-0"
          }, r.a.createElement("h1", {
            className: "h2"
          }, "Toasts"), r.a.createElement("p", {
            className: "mb-0"
          }, "Use toasts to indicate messages."))), r.a.createElement(It, {
            title: "Example",
            description: r.a.createElement(r.a.Fragment, null, r.a.createElement("p", null, "Use the ", r.a.createElement("code", null, "<Toast>"), " component to show messages and notifications to the user. The component is split into two main subcomponents: ", r.a.createElement("code", null, "<Toast.Header>"), " and ", r.a.createElement("code", null, "<Toast.Body>"), " where you can add the text that you want."), r.a.createElement("p", null, "You can also use the ", r.a.createElement("code", null, "handleClose"), " function to handle the event of closing the component.")),
            scope: {
              Card: b.a,
              Toast: Qt.a,
              Button: k.a,
              useState: n.useState,
              FontAwesomeIcon: u.a,
              faBootstrap: g.c,
              showDefault: t,
              setShowDefault: l,
              handleCloseDefault: function () {
                return l(!1)
              }
            },
            imports: "import React, { useState } from 'react';\nimport { Card, Toast, Button } from '@themesberg/react-bootstrap';\nimport { FontAwesomeIcon } from '@fortawesome/react-fontawesome';\nimport { faBootstrap } from '@fortawesome/free-brands-svg-icons';\n\nconst [showDefault, setShowDefault] = useState(true);\nconst toggleDefaultToast = () => setShowDefault(!showDefault);",
            example: '<Toast show={showDefault} onClose={handleCloseDefault} className="my-3">\n    <Toast.Header className="text-primary" closeButton={false}>\n        <FontAwesomeIcon icon={faBootstrap} />\n        <strong className="me-auto ms-2">Volt</strong>\n        <small>11 mins ago</small>\n        <Button variant="close" size="xs" onClick={handleCloseDefault} />\n    </Toast.Header>\n    <Toast.Body>\n        Hello, world! This is a toast message.\n    </Toast.Body>\n</Toast>'
          }), r.a.createElement(It, {
            title: "Colors",
            description: r.a.createElement("p", null, "If you'd like to customize the appearance of the ", r.a.createElement("code", null, "<Toast>"), " component, you can easily do so by adding a ", r.a.createElement("code", null, "bg-primary"), ", ", r.a.createElement("code", null, "bg-secondary"), ", and any other ", r.a.createElement("code", null, "bg-*"), " modifier class to the main ", r.a.createElement("code", null, "<Toast>"), " component."),
            scope: {
              Toast: Qt.a,
              Button: k.a,
              useState: n.useState,
              FontAwesomeIcon: u.a,
              faBootstrap: g.c,
              showPrimary: c,
              setShowPrimary: i,
              handleClosePrimary: function () {
                return i(!1)
              },
              showTertiary: h,
              setShowTertiary: f,
              handleCloseTertiary: function () {
                return f(!1)
              }
            },
            imports: "import React, { useState } from 'react';\nimport { Toast, Button } from '@themesberg/react-bootstrap';\nimport { FontAwesomeIcon } from '@fortawesome/react-fontawesome';\nimport { faBootstrap } from '@fortawesome/free-brands-svg-icons';\n\nconst [showPrimary, setShowPrimary] = useState(true);\nconst [showTertiary, setShowTertiary] = useState(true);\n\nconst handleClosePrimary = () => setShowPrimary(false);\nconst handleCloseTertiary = () => setShowTertiary(false);",
            example: '<React.Fragment>\n  <Toast show={showPrimary} onClose={handleClosePrimary} className="bg-primary text-white my-3">\n      <Toast.Header className="text-primary" closeButton={false}>\n          <FontAwesomeIcon icon={faBootstrap} />\n          <strong className="me-auto ms-2">Themesberg</strong>\n          <small>11 mins ago</small>\n          <Button variant="close" size="xs" onClick={handleClosePrimary} />\n      </Toast.Header>\n      <Toast.Body>\n          Hello, world! This is a toast message.\n      </Toast.Body>\n  </Toast>\n\n  <Toast show={showTertiary} onClose={handleCloseTertiary} className="bg-secondary text-white my-3">\n      <Toast.Header className="text-primary" closeButton={false}>\n          <FontAwesomeIcon icon={faBootstrap} />\n          <strong className="me-auto ms-2">Themesberg</strong>\n          <small>11 mins ago</small>\n          <Button variant="close" size="xs" onClick={handleCloseTertiary} />\n      </Toast.Header>\n      <Toast.Body>\n          Hello, world! This is a toast message.\n      </Toast.Body>\n  </Toast>\n</React.Fragment>'
          })))
        },
        Zt = function (e) {
          var a = e.component,
            t = Object(i.a)(e, ["component"]),
            l = Object(n.useState)(!1),
            o = Object(m.a)(l, 2),
            s = o[0],
            c = o[1];
          return Object(n.useEffect)((function () {
            var e = setTimeout((function () {
              return c(!0)
            }), 1e3);
            return function () {
              return clearTimeout(e)
            }
          }), []), r.a.createElement(d.d, Object.assign({}, t, {
            render: function (e) {
              return r.a.createElement(r.a.Fragment, null, " ", r.a.createElement(St, {
                show: !s
              }), " ", r.a.createElement(a, e), " ")
            }
          }))
        },
        en = function (e) {
          var a = e.component,
            t = Object(i.a)(e, ["component"]),
            l = Object(n.useState)(!1),
            o = Object(m.a)(l, 2),
            s = o[0],
            c = o[1];
          Object(n.useEffect)((function () {
            var e = setTimeout((function () {
              return c(!0)
            }), 1e3);
            return function () {
              return clearTimeout(e)
            }
          }), []);
          var p = Object(n.useState)((function () {
              return "false" !== localStorage.getItem("settingsVisible")
            })),
            u = Object(m.a)(p, 2),
            h = u[0],
            g = u[1],
            E = function () {
              g(!h), localStorage.setItem("settingsVisible", !h)
            };
          return r.a.createElement(d.d, Object.assign({}, t, {
            render: function (e) {
              return r.a.createElement(r.a.Fragment, null, r.a.createElement(St, {
                show: !s
              }), r.a.createElement(bt, null), r.a.createElement("main", {
                className: "content"
              }, r.a.createElement(yt, null), r.a.createElement(a, e), r.a.createElement(wt, {
                toggleSettings: E,
                showSettings: h
              })))
            }
          }))
        },
        an = function () {
          return r.a.createElement(d.g, null, r.a.createElement(Zt, {
            exact: !0,
            path: p.Presentation.path,
            component: Ie
          }), r.a.createElement(Zt, {
            exact: !0,
            path: p.Signin.path,
            component: Ja
          }), r.a.createElement(Zt, {
            exact: !0,
            path: p.Signup.path,
            component: $a
          }), r.a.createElement(Zt, {
            exact: !0,
            path: p.ForgotPassword.path,
            component: Qa
          }), r.a.createElement(Zt, {
            exact: !0,
            path: p.ResetPassword.path,
            component: Xa
          }), r.a.createElement(Zt, {
            exact: !0,
            path: p.Lock.path,
            component: Za
          }), r.a.createElement(Zt, {
            exact: !0,
            path: p.NotFound.path,
            component: tt
          }), r.a.createElement(Zt, {
            exact: !0,
            path: p.ServerError.path,
            component: lt
          }), r.a.createElement(en, {
            exact: !0,
            path: p.DashboardOverview.path,
            component: Fa
          }), r.a.createElement(en, {
            exact: !0,
            path: p.Upgrade.path,
            component: Ce
          }), r.a.createElement(en, {
            exact: !0,
            path: p.Transactions.path,
            component: Oa
          }), r.a.createElement(en, {
            exact: !0,
            path: p.Settings.path,
            component: Ka
          }), r.a.createElement(en, {
            exact: !0,
            path: p.BootstrapTables.path,
            component: Va
          }), r.a.createElement(en, {
            exact: !0,
            path: p.Accordions.path,
            component: Bt
          }), r.a.createElement(en, {
            exact: !0,
            path: p.Alerts.path,
            component: Ct
          }), r.a.createElement(en, {
            exact: !0,
            path: p.Badges.path,
            component: _t
          }), r.a.createElement(en, {
            exact: !0,
            path: p.Breadcrumbs.path,
            component: Tt
          }), r.a.createElement(en, {
            exact: !0,
            path: p.Buttons.path,
            component: Pt
          }), r.a.createElement(en, {
            exact: !0,
            path: p.Forms.path,
            component: Dt
          }), r.a.createElement(en, {
            exact: !0,
            path: p.Modals.path,
            component: Ft
          }), r.a.createElement(en, {
            exact: !0,
            path: p.Navs.path,
            component: Lt
          }), r.a.createElement(en, {
            exact: !0,
            path: p.Navbars.path,
            component: Mt
          }), r.a.createElement(en, {
            exact: !0,
            path: p.Pagination.path,
            component: Gt
          }), r.a.createElement(en, {
            exact: !0,
            path: p.Popovers.path,
            component: zt
          }), r.a.createElement(en, {
            exact: !0,
            path: p.Progress.path,
            component: Kt
          }), r.a.createElement(en, {
            exact: !0,
            path: p.Tables.path,
            component: Yt
          }), r.a.createElement(en, {
            exact: !0,
            path: p.Tabs.path,
            component: Jt
          }), r.a.createElement(en, {
            exact: !0,
            path: p.Tooltips.path,
            component: $t
          }), r.a.createElement(en, {
            exact: !0,
            path: p.Toasts.path,
            component: Xt
          }), r.a.createElement(en, {
            exact: !0,
            path: p.DocsOverview.path,
            component: ot
          }), r.a.createElement(en, {
            exact: !0,
            path: p.DocsDownload.path,
            component: st
          }), r.a.createElement(en, {
            exact: !0,
            path: p.DocsQuickStart.path,
            component: mt
          }), r.a.createElement(en, {
            exact: !0,
            path: p.DocsLicense.path,
            component: it
          }), r.a.createElement(en, {
            exact: !0,
            path: p.DocsFolderStructure.path,
            component: dt
          }), r.a.createElement(en, {
            exact: !0,
            path: p.DocsBuild.path,
            component: pt
          }), r.a.createElement(en, {
            exact: !0,
            path: p.DocsChangelog.path,
            component: ut
          }), r.a.createElement(d.c, {
            to: p.NotFound.path
          }))
        },
        tn = function () {
          var e = Object(d.l)().pathname;
          return Object(n.useEffect)((function () {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "auto"
            })
          }), [e]), null
        },
        nn = new c.TinaCMS({
          sidebar: !0
        });
      nn.toggle(), o.a.render(r.a.createElement(c.TinaProvider, {
        cms: nn
      }, r.a.createElement(s.HashRouter, null, r.a.createElement(tn, null), r.a.createElement(an, null))), document.getElementById("root"))
    },
    138: function (e) {
      e.exports = JSON.parse('{"plain":{"color":"#393A34","backgroundColor":"#fff"},"styles":[{"types":["comment","prolog","doctype","cdata"],"style":{"color":"rgb(153,153,136)","fontStyle":"italic"}},{"types":["string","attr-value"],"style":{"color":"rgb(201,100,128)"}},{"types":["punctuation","operator"],"style":{"color":"rgb(57,58,52)"}},{"types":["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],"style":{"color":"rgb(54,172,170)"}},{"types":["atrule","keyword","attr-name","selector"],"style":{"color":"rgb(0,164,219)"}},{"types":["function","deleted","tag"],"style":{"color":"rgb(154,5,15)"}},{"types":["tag","selector","keyword"],"style":{"color":"rgb(0,0,159)"}},{"types":["important","function","bold"],"style":{"fontWeight":"bold"}},{"types":["italic"],"style":{"fontStyle":"italic"}}]}')
    },
    145: function (e, a, t) {
      e.exports = t.p + "static/media/bootstrap-5-logo.6aae84ab.svg"
    },
    146: function (e, a, t) {
      e.exports = t.p + "static/media/react-logo.1ece41a8.svg"
    },
    152: function (e, a, t) {
      e.exports = t.p + "static/media/profile-picture-2.487133c5.jpg"
    },
    153: function (e, a, t) {
      e.exports = t.p + "static/media/profile-picture-4.ccd796b3.jpg"
    },
    154: function (e, a, t) {
      e.exports = t.p + "static/media/united-states-of-america.36ab476e.svg"
    },
    155: function (e, a, t) {
      e.exports = t.p + "static/media/canada.ed3cd4b5.svg"
    },
    156: function (e, a, t) {
      e.exports = t.p + "static/media/germany.d810f621.svg"
    },
    157: function (e, a, t) {
      e.exports = t.p + "static/media/france.968aaa24.svg"
    },
    158: function (e, a, t) {
      e.exports = t.p + "static/media/japan.1f905d23.svg"
    },
    206: function (e, a, t) {
      e.exports = t.p + "static/media/themesberg.105e5059.svg"
    },
    331: function (e, a, t) {
      e.exports = t.p + "static/media/themesberg-logo.bbd344a3.svg"
    },
    332: function (e, a, t) {
      e.exports = t.p + "static/media/mockup-presentation.77a4c6a8.png"
    },
    333: function (e, a, t) {
      e.exports = t.p + "static/media/mockup-map-presentation.fc6d4c75.png"
    },
    334: function (e, a, t) {
      e.exports = t.p + "static/media/mockup-calendar-presentation.b2d9831a.png"
    },
    335: function (e, a, t) {
      e.exports = t.p + "static/media/react-mockup.99d034b6.png"
    },
    336: function (e, a, t) {
      e.exports = t.p + "static/media/bs5-illustrations.95abb40d.svg"
    },
    337: function (e, a, t) {
      e.exports = t.p + "static/media/overview.00a52613.jpg"
    },
    338: function (e, a, t) {
      e.exports = t.p + "static/media/transactions.b98aee40.jpg"
    },
    339: function (e, a, t) {
      e.exports = t.p + "static/media/settings.43fe4184.jpg"
    },
    340: function (e, a, t) {
      e.exports = t.p + "static/media/sign-in.ea051702.jpg"
    },
    341: function (e, a, t) {
      e.exports = t.p + "static/media/sign-up.6774df14.jpg"
    },
    342: function (e, a, t) {
      e.exports = t.p + "static/media/lock.69f2db42.jpg"
    },
    343: function (e, a, t) {
      e.exports = t.p + "static/media/forgot-password.935e7046.jpg"
    },
    344: function (e, a, t) {
      e.exports = t.p + "static/media/reset-password.0a4cc9cd.jpg"
    },
    345: function (e, a, t) {
      e.exports = t.p + "static/media/404.9ba4b7cb.jpg"
    },
    346: function (e, a, t) {
      e.exports = t.p + "static/media/500.192d8f70.jpg"
    },
    347: function (e, a, t) {
      e.exports = t.p + "static/media/profile-cover.9992e0ee.jpg"
    },
    348: function (e, a, t) {
      e.exports = t.p + "static/media/italy.612e617f.svg"
    },
    349: function (e, a, t) {
      e.exports = t.p + "static/media/404.85064a97.svg"
    },
    35: function (e, a, t) {
      e.exports = t.p + "static/media/profile-picture-3.9a250e5c.jpg"
    },
    350: function (e, a, t) {
      e.exports = t.p + "static/media/500.a0320da1.svg"
    },
    353: function (e, a, t) {
      e.exports = t.p + "static/media/profile-picture-5.baf7bf75.jpg"
    },
    354: function (e, a, t) {
      e.exports = t.p + "static/media/react-logo-primary.1ece41a8.svg"
    },
    355: function (e, a, t) {
      e.exports = t.p + "static/media/united-kingdom.e5564902.svg"
    },
    358: function (e, a, t) {
      e.exports = t(1047)
    },
    519: function (e, a, t) {},
    540: function (e, a, t) {
      var n = {
        "./Binary_Property/ASCII.js": 541,
        "./Binary_Property/ASCII_Hex_Digit.js": 542,
        "./Binary_Property/Alphabetic.js": 543,
        "./Binary_Property/Any.js": 544,
        "./Binary_Property/Assigned.js": 545,
        "./Binary_Property/Bidi_Control.js": 546,
        "./Binary_Property/Bidi_Mirrored.js": 547,
        "./Binary_Property/Case_Ignorable.js": 548,
        "./Binary_Property/Cased.js": 549,
        "./Binary_Property/Changes_When_Casefolded.js": 550,
        "./Binary_Property/Changes_When_Casemapped.js": 551,
        "./Binary_Property/Changes_When_Lowercased.js": 552,
        "./Binary_Property/Changes_When_NFKC_Casefolded.js": 553,
        "./Binary_Property/Changes_When_Titlecased.js": 554,
        "./Binary_Property/Changes_When_Uppercased.js": 555,
        "./Binary_Property/Dash.js": 556,
        "./Binary_Property/Default_Ignorable_Code_Point.js": 557,
        "./Binary_Property/Deprecated.js": 558,
        "./Binary_Property/Diacritic.js": 559,
        "./Binary_Property/Emoji.js": 560,
        "./Binary_Property/Emoji_Component.js": 561,
        "./Binary_Property/Emoji_Modifier.js": 562,
        "./Binary_Property/Emoji_Modifier_Base.js": 563,
        "./Binary_Property/Emoji_Presentation.js": 564,
        "./Binary_Property/Extended_Pictographic.js": 565,
        "./Binary_Property/Extender.js": 566,
        "./Binary_Property/Grapheme_Base.js": 567,
        "./Binary_Property/Grapheme_Extend.js": 568,
        "./Binary_Property/Hex_Digit.js": 569,
        "./Binary_Property/IDS_Binary_Operator.js": 570,
        "./Binary_Property/IDS_Trinary_Operator.js": 571,
        "./Binary_Property/ID_Continue.js": 572,
        "./Binary_Property/ID_Start.js": 573,
        "./Binary_Property/Ideographic.js": 574,
        "./Binary_Property/Join_Control.js": 575,
        "./Binary_Property/Logical_Order_Exception.js": 576,
        "./Binary_Property/Lowercase.js": 577,
        "./Binary_Property/Math.js": 578,
        "./Binary_Property/Noncharacter_Code_Point.js": 579,
        "./Binary_Property/Pattern_Syntax.js": 580,
        "./Binary_Property/Pattern_White_Space.js": 581,
        "./Binary_Property/Quotation_Mark.js": 582,
        "./Binary_Property/Radical.js": 583,
        "./Binary_Property/Regional_Indicator.js": 584,
        "./Binary_Property/Sentence_Terminal.js": 585,
        "./Binary_Property/Soft_Dotted.js": 586,
        "./Binary_Property/Terminal_Punctuation.js": 587,
        "./Binary_Property/Unified_Ideograph.js": 588,
        "./Binary_Property/Uppercase.js": 589,
        "./Binary_Property/Variation_Selector.js": 590,
        "./Binary_Property/White_Space.js": 591,
        "./Binary_Property/XID_Continue.js": 592,
        "./Binary_Property/XID_Start.js": 593,
        "./General_Category/Cased_Letter.js": 594,
        "./General_Category/Close_Punctuation.js": 595,
        "./General_Category/Connector_Punctuation.js": 596,
        "./General_Category/Control.js": 597,
        "./General_Category/Currency_Symbol.js": 598,
        "./General_Category/Dash_Punctuation.js": 599,
        "./General_Category/Decimal_Number.js": 600,
        "./General_Category/Enclosing_Mark.js": 601,
        "./General_Category/Final_Punctuation.js": 602,
        "./General_Category/Format.js": 603,
        "./General_Category/Initial_Punctuation.js": 604,
        "./General_Category/Letter.js": 605,
        "./General_Category/Letter_Number.js": 606,
        "./General_Category/Line_Separator.js": 607,
        "./General_Category/Lowercase_Letter.js": 608,
        "./General_Category/Mark.js": 609,
        "./General_Category/Math_Symbol.js": 610,
        "./General_Category/Modifier_Letter.js": 611,
        "./General_Category/Modifier_Symbol.js": 612,
        "./General_Category/Nonspacing_Mark.js": 613,
        "./General_Category/Number.js": 614,
        "./General_Category/Open_Punctuation.js": 615,
        "./General_Category/Other.js": 616,
        "./General_Category/Other_Letter.js": 617,
        "./General_Category/Other_Number.js": 618,
        "./General_Category/Other_Punctuation.js": 619,
        "./General_Category/Other_Symbol.js": 620,
        "./General_Category/Paragraph_Separator.js": 621,
        "./General_Category/Private_Use.js": 622,
        "./General_Category/Punctuation.js": 623,
        "./General_Category/Separator.js": 624,
        "./General_Category/Space_Separator.js": 625,
        "./General_Category/Spacing_Mark.js": 626,
        "./General_Category/Surrogate.js": 627,
        "./General_Category/Symbol.js": 628,
        "./General_Category/Titlecase_Letter.js": 629,
        "./General_Category/Unassigned.js": 630,
        "./General_Category/Uppercase_Letter.js": 631,
        "./Script/Adlam.js": 632,
        "./Script/Ahom.js": 633,
        "./Script/Anatolian_Hieroglyphs.js": 634,
        "./Script/Arabic.js": 635,
        "./Script/Armenian.js": 636,
        "./Script/Avestan.js": 637,
        "./Script/Balinese.js": 638,
        "./Script/Bamum.js": 639,
        "./Script/Bassa_Vah.js": 640,
        "./Script/Batak.js": 641,
        "./Script/Bengali.js": 642,
        "./Script/Bhaiksuki.js": 643,
        "./Script/Bopomofo.js": 644,
        "./Script/Brahmi.js": 645,
        "./Script/Braille.js": 646,
        "./Script/Buginese.js": 647,
        "./Script/Buhid.js": 648,
        "./Script/Canadian_Aboriginal.js": 649,
        "./Script/Carian.js": 650,
        "./Script/Caucasian_Albanian.js": 651,
        "./Script/Chakma.js": 652,
        "./Script/Cham.js": 653,
        "./Script/Cherokee.js": 654,
        "./Script/Chorasmian.js": 655,
        "./Script/Common.js": 656,
        "./Script/Coptic.js": 657,
        "./Script/Cuneiform.js": 658,
        "./Script/Cypriot.js": 659,
        "./Script/Cyrillic.js": 660,
        "./Script/Deseret.js": 661,
        "./Script/Devanagari.js": 662,
        "./Script/Dives_Akuru.js": 663,
        "./Script/Dogra.js": 664,
        "./Script/Duployan.js": 665,
        "./Script/Egyptian_Hieroglyphs.js": 666,
        "./Script/Elbasan.js": 667,
        "./Script/Elymaic.js": 668,
        "./Script/Ethiopic.js": 669,
        "./Script/Georgian.js": 670,
        "./Script/Glagolitic.js": 671,
        "./Script/Gothic.js": 672,
        "./Script/Grantha.js": 673,
        "./Script/Greek.js": 674,
        "./Script/Gujarati.js": 675,
        "./Script/Gunjala_Gondi.js": 676,
        "./Script/Gurmukhi.js": 677,
        "./Script/Han.js": 678,
        "./Script/Hangul.js": 679,
        "./Script/Hanifi_Rohingya.js": 680,
        "./Script/Hanunoo.js": 681,
        "./Script/Hatran.js": 682,
        "./Script/Hebrew.js": 683,
        "./Script/Hiragana.js": 684,
        "./Script/Imperial_Aramaic.js": 685,
        "./Script/Inherited.js": 686,
        "./Script/Inscriptional_Pahlavi.js": 687,
        "./Script/Inscriptional_Parthian.js": 688,
        "./Script/Javanese.js": 689,
        "./Script/Kaithi.js": 690,
        "./Script/Kannada.js": 691,
        "./Script/Katakana.js": 692,
        "./Script/Kayah_Li.js": 693,
        "./Script/Kharoshthi.js": 694,
        "./Script/Khitan_Small_Script.js": 695,
        "./Script/Khmer.js": 696,
        "./Script/Khojki.js": 697,
        "./Script/Khudawadi.js": 698,
        "./Script/Lao.js": 699,
        "./Script/Latin.js": 700,
        "./Script/Lepcha.js": 701,
        "./Script/Limbu.js": 702,
        "./Script/Linear_A.js": 703,
        "./Script/Linear_B.js": 704,
        "./Script/Lisu.js": 705,
        "./Script/Lycian.js": 706,
        "./Script/Lydian.js": 707,
        "./Script/Mahajani.js": 708,
        "./Script/Makasar.js": 709,
        "./Script/Malayalam.js": 710,
        "./Script/Mandaic.js": 711,
        "./Script/Manichaean.js": 712,
        "./Script/Marchen.js": 713,
        "./Script/Masaram_Gondi.js": 714,
        "./Script/Medefaidrin.js": 715,
        "./Script/Meetei_Mayek.js": 716,
        "./Script/Mende_Kikakui.js": 717,
        "./Script/Meroitic_Cursive.js": 718,
        "./Script/Meroitic_Hieroglyphs.js": 719,
        "./Script/Miao.js": 720,
        "./Script/Modi.js": 721,
        "./Script/Mongolian.js": 722,
        "./Script/Mro.js": 723,
        "./Script/Multani.js": 724,
        "./Script/Myanmar.js": 725,
        "./Script/Nabataean.js": 726,
        "./Script/Nandinagari.js": 727,
        "./Script/New_Tai_Lue.js": 728,
        "./Script/Newa.js": 729,
        "./Script/Nko.js": 730,
        "./Script/Nushu.js": 731,
        "./Script/Nyiakeng_Puachue_Hmong.js": 732,
        "./Script/Ogham.js": 733,
        "./Script/Ol_Chiki.js": 734,
        "./Script/Old_Hungarian.js": 735,
        "./Script/Old_Italic.js": 736,
        "./Script/Old_North_Arabian.js": 737,
        "./Script/Old_Permic.js": 738,
        "./Script/Old_Persian.js": 739,
        "./Script/Old_Sogdian.js": 740,
        "./Script/Old_South_Arabian.js": 741,
        "./Script/Old_Turkic.js": 742,
        "./Script/Oriya.js": 743,
        "./Script/Osage.js": 744,
        "./Script/Osmanya.js": 745,
        "./Script/Pahawh_Hmong.js": 746,
        "./Script/Palmyrene.js": 747,
        "./Script/Pau_Cin_Hau.js": 748,
        "./Script/Phags_Pa.js": 749,
        "./Script/Phoenician.js": 750,
        "./Script/Psalter_Pahlavi.js": 751,
        "./Script/Rejang.js": 752,
        "./Script/Runic.js": 753,
        "./Script/Samaritan.js": 754,
        "./Script/Saurashtra.js": 755,
        "./Script/Sharada.js": 756,
        "./Script/Shavian.js": 757,
        "./Script/Siddham.js": 758,
        "./Script/SignWriting.js": 759,
        "./Script/Sinhala.js": 760,
        "./Script/Sogdian.js": 761,
        "./Script/Sora_Sompeng.js": 762,
        "./Script/Soyombo.js": 763,
        "./Script/Sundanese.js": 764,
        "./Script/Syloti_Nagri.js": 765,
        "./Script/Syriac.js": 766,
        "./Script/Tagalog.js": 767,
        "./Script/Tagbanwa.js": 768,
        "./Script/Tai_Le.js": 769,
        "./Script/Tai_Tham.js": 770,
        "./Script/Tai_Viet.js": 771,
        "./Script/Takri.js": 772,
        "./Script/Tamil.js": 773,
        "./Script/Tangut.js": 774,
        "./Script/Telugu.js": 775,
        "./Script/Thaana.js": 776,
        "./Script/Thai.js": 777,
        "./Script/Tibetan.js": 778,
        "./Script/Tifinagh.js": 779,
        "./Script/Tirhuta.js": 780,
        "./Script/Ugaritic.js": 781,
        "./Script/Vai.js": 782,
        "./Script/Wancho.js": 783,
        "./Script/Warang_Citi.js": 784,
        "./Script/Yezidi.js": 785,
        "./Script/Yi.js": 786,
        "./Script/Zanabazar_Square.js": 787,
        "./Script_Extensions/Adlam.js": 788,
        "./Script_Extensions/Ahom.js": 789,
        "./Script_Extensions/Anatolian_Hieroglyphs.js": 790,
        "./Script_Extensions/Arabic.js": 791,
        "./Script_Extensions/Armenian.js": 792,
        "./Script_Extensions/Avestan.js": 793,
        "./Script_Extensions/Balinese.js": 794,
        "./Script_Extensions/Bamum.js": 795,
        "./Script_Extensions/Bassa_Vah.js": 796,
        "./Script_Extensions/Batak.js": 797,
        "./Script_Extensions/Bengali.js": 798,
        "./Script_Extensions/Bhaiksuki.js": 799,
        "./Script_Extensions/Bopomofo.js": 800,
        "./Script_Extensions/Brahmi.js": 801,
        "./Script_Extensions/Braille.js": 802,
        "./Script_Extensions/Buginese.js": 803,
        "./Script_Extensions/Buhid.js": 804,
        "./Script_Extensions/Canadian_Aboriginal.js": 805,
        "./Script_Extensions/Carian.js": 806,
        "./Script_Extensions/Caucasian_Albanian.js": 807,
        "./Script_Extensions/Chakma.js": 808,
        "./Script_Extensions/Cham.js": 809,
        "./Script_Extensions/Cherokee.js": 810,
        "./Script_Extensions/Chorasmian.js": 811,
        "./Script_Extensions/Common.js": 812,
        "./Script_Extensions/Coptic.js": 813,
        "./Script_Extensions/Cuneiform.js": 814,
        "./Script_Extensions/Cypriot.js": 815,
        "./Script_Extensions/Cyrillic.js": 816,
        "./Script_Extensions/Deseret.js": 817,
        "./Script_Extensions/Devanagari.js": 818,
        "./Script_Extensions/Dives_Akuru.js": 819,
        "./Script_Extensions/Dogra.js": 820,
        "./Script_Extensions/Duployan.js": 821,
        "./Script_Extensions/Egyptian_Hieroglyphs.js": 822,
        "./Script_Extensions/Elbasan.js": 823,
        "./Script_Extensions/Elymaic.js": 824,
        "./Script_Extensions/Ethiopic.js": 825,
        "./Script_Extensions/Georgian.js": 826,
        "./Script_Extensions/Glagolitic.js": 827,
        "./Script_Extensions/Gothic.js": 828,
        "./Script_Extensions/Grantha.js": 829,
        "./Script_Extensions/Greek.js": 830,
        "./Script_Extensions/Gujarati.js": 831,
        "./Script_Extensions/Gunjala_Gondi.js": 832,
        "./Script_Extensions/Gurmukhi.js": 833,
        "./Script_Extensions/Han.js": 834,
        "./Script_Extensions/Hangul.js": 835,
        "./Script_Extensions/Hanifi_Rohingya.js": 836,
        "./Script_Extensions/Hanunoo.js": 837,
        "./Script_Extensions/Hatran.js": 838,
        "./Script_Extensions/Hebrew.js": 839,
        "./Script_Extensions/Hiragana.js": 840,
        "./Script_Extensions/Imperial_Aramaic.js": 841,
        "./Script_Extensions/Inherited.js": 842,
        "./Script_Extensions/Inscriptional_Pahlavi.js": 843,
        "./Script_Extensions/Inscriptional_Parthian.js": 844,
        "./Script_Extensions/Javanese.js": 845,
        "./Script_Extensions/Kaithi.js": 846,
        "./Script_Extensions/Kannada.js": 847,
        "./Script_Extensions/Katakana.js": 848,
        "./Script_Extensions/Kayah_Li.js": 849,
        "./Script_Extensions/Kharoshthi.js": 850,
        "./Script_Extensions/Khitan_Small_Script.js": 851,
        "./Script_Extensions/Khmer.js": 852,
        "./Script_Extensions/Khojki.js": 853,
        "./Script_Extensions/Khudawadi.js": 854,
        "./Script_Extensions/Lao.js": 855,
        "./Script_Extensions/Latin.js": 856,
        "./Script_Extensions/Lepcha.js": 857,
        "./Script_Extensions/Limbu.js": 858,
        "./Script_Extensions/Linear_A.js": 859,
        "./Script_Extensions/Linear_B.js": 860,
        "./Script_Extensions/Lisu.js": 861,
        "./Script_Extensions/Lycian.js": 862,
        "./Script_Extensions/Lydian.js": 863,
        "./Script_Extensions/Mahajani.js": 864,
        "./Script_Extensions/Makasar.js": 865,
        "./Script_Extensions/Malayalam.js": 866,
        "./Script_Extensions/Mandaic.js": 867,
        "./Script_Extensions/Manichaean.js": 868,
        "./Script_Extensions/Marchen.js": 869,
        "./Script_Extensions/Masaram_Gondi.js": 870,
        "./Script_Extensions/Medefaidrin.js": 871,
        "./Script_Extensions/Meetei_Mayek.js": 872,
        "./Script_Extensions/Mende_Kikakui.js": 873,
        "./Script_Extensions/Meroitic_Cursive.js": 874,
        "./Script_Extensions/Meroitic_Hieroglyphs.js": 875,
        "./Script_Extensions/Miao.js": 876,
        "./Script_Extensions/Modi.js": 877,
        "./Script_Extensions/Mongolian.js": 878,
        "./Script_Extensions/Mro.js": 879,
        "./Script_Extensions/Multani.js": 880,
        "./Script_Extensions/Myanmar.js": 881,
        "./Script_Extensions/Nabataean.js": 882,
        "./Script_Extensions/Nandinagari.js": 883,
        "./Script_Extensions/New_Tai_Lue.js": 884,
        "./Script_Extensions/Newa.js": 885,
        "./Script_Extensions/Nko.js": 886,
        "./Script_Extensions/Nushu.js": 887,
        "./Script_Extensions/Nyiakeng_Puachue_Hmong.js": 888,
        "./Script_Extensions/Ogham.js": 889,
        "./Script_Extensions/Ol_Chiki.js": 890,
        "./Script_Extensions/Old_Hungarian.js": 891,
        "./Script_Extensions/Old_Italic.js": 892,
        "./Script_Extensions/Old_North_Arabian.js": 893,
        "./Script_Extensions/Old_Permic.js": 894,
        "./Script_Extensions/Old_Persian.js": 895,
        "./Script_Extensions/Old_Sogdian.js": 896,
        "./Script_Extensions/Old_South_Arabian.js": 897,
        "./Script_Extensions/Old_Turkic.js": 898,
        "./Script_Extensions/Oriya.js": 899,
        "./Script_Extensions/Osage.js": 900,
        "./Script_Extensions/Osmanya.js": 901,
        "./Script_Extensions/Pahawh_Hmong.js": 902,
        "./Script_Extensions/Palmyrene.js": 903,
        "./Script_Extensions/Pau_Cin_Hau.js": 904,
        "./Script_Extensions/Phags_Pa.js": 905,
        "./Script_Extensions/Phoenician.js": 906,
        "./Script_Extensions/Psalter_Pahlavi.js": 907,
        "./Script_Extensions/Rejang.js": 908,
        "./Script_Extensions/Runic.js": 909,
        "./Script_Extensions/Samaritan.js": 910,
        "./Script_Extensions/Saurashtra.js": 911,
        "./Script_Extensions/Sharada.js": 912,
        "./Script_Extensions/Shavian.js": 913,
        "./Script_Extensions/Siddham.js": 914,
        "./Script_Extensions/SignWriting.js": 915,
        "./Script_Extensions/Sinhala.js": 916,
        "./Script_Extensions/Sogdian.js": 917,
        "./Script_Extensions/Sora_Sompeng.js": 918,
        "./Script_Extensions/Soyombo.js": 919,
        "./Script_Extensions/Sundanese.js": 920,
        "./Script_Extensions/Syloti_Nagri.js": 921,
        "./Script_Extensions/Syriac.js": 922,
        "./Script_Extensions/Tagalog.js": 923,
        "./Script_Extensions/Tagbanwa.js": 924,
        "./Script_Extensions/Tai_Le.js": 925,
        "./Script_Extensions/Tai_Tham.js": 926,
        "./Script_Extensions/Tai_Viet.js": 927,
        "./Script_Extensions/Takri.js": 928,
        "./Script_Extensions/Tamil.js": 929,
        "./Script_Extensions/Tangut.js": 930,
        "./Script_Extensions/Telugu.js": 931,
        "./Script_Extensions/Thaana.js": 932,
        "./Script_Extensions/Thai.js": 933,
        "./Script_Extensions/Tibetan.js": 934,
        "./Script_Extensions/Tifinagh.js": 935,
        "./Script_Extensions/Tirhuta.js": 936,
        "./Script_Extensions/Ugaritic.js": 937,
        "./Script_Extensions/Vai.js": 938,
        "./Script_Extensions/Wancho.js": 939,
        "./Script_Extensions/Warang_Citi.js": 940,
        "./Script_Extensions/Yezidi.js": 941,
        "./Script_Extensions/Yi.js": 942,
        "./Script_Extensions/Zanabazar_Square.js": 943,
        "./index.js": 944,
        "./unicode-version.js": 945
      };

      function r(e) {
        var a = l(e);
        return t(a)
      }

      function l(e) {
        if (!t.o(n, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return n[e]
      }
      r.keys = function () {
        return Object.keys(n)
      }, r.resolve = l, e.exports = r, r.id = 540
    },
    81: function (e, a, t) {
      e.exports = t.p + "static/media/profile-picture-1.4d26e151.jpg"
    },
    83: function (e, a, t) {
      e.exports = t.p + "static/media/signin.58ee1d5a.svg"
    },
    87: function (e, a, t) {
      e.exports = t.p + "static/media/react-hero-logo.1ece41a8.svg"
    }
  },
  [
    [358, 1, 2]
  ]
]);
//# sourceMappingURL=main.d491e831.chunk.js.map