(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/_components/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/button'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ui/dropdown-menu'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// "use client"
// import { Button } from '@/components/ui/button'
// import { BluetoothOff } from 'lucide-react'
// import { signIn, useSession } from 'next-auth/react'
// import Image from 'next/image'
// import React, { useEffect } from 'react'
// function Header() {
//     const {data} = useSession();
//     useEffect(()=>{
//         console.log(data);
//     },[data])
//   return (
//     <div className='p-5 shadow-sm flex justify-between'>
//         <div className='flex items-center gap-8'>
//             <Image src="/logo.svg" alt="Logo" width={180} height={100}/>
//             <div className='md:flex items-center gap-6 hidden'>
//                 <h2 className='hover:scale-105 hover:text-primary'>Home</h2>
//                 <h2 className='hover:scale-105 hover:text-primary'>Services</h2>
//                 <h2 className='hover:scale-105 hover:text-primary'>About Us</h2>
//             </div>      
//        </div>
//         <div>
//             {data?.user?
//             <Image src={data?.user?.image} 
//             alt='user'
//             width={40}
//             height={40}
//             className='rounded-full'
//             />:
//             <Button onClick={()=>signIn("descope")}>Login / Sign Up</Button>
//             }
//         </div>
//     </div>
//   )
// }
// export default Header
// sdk ka hai
// "use client"
// import { Button } from '@/components/ui/button'
// import { useSession, useUser } from '@descope/nextjs-sdk/client' // SDK wale hooks use karein
// import Image from 'next/image'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
// function Header() {
//     const { isAuthenticated } = useSession();
//     const { user } = useUser();
//     const router = useRouter();
//     return (
//         <div className='p-5 shadow-sm flex justify-between items-center'>
//             <div className='flex items-center gap-8'>
//                 <Image src="/logo.svg" alt="Logo" width={180} height={100} className="cursor-pointer" onClick={() => router.push('/')}/>
//                 <div className='md:flex items-center gap-6 hidden text-gray-600'>
//                     <h2 className='hover:text-primary cursor-pointer font-medium'>Home</h2>
//                     <h2 className='hover:text-primary cursor-pointer font-medium'>Services</h2>
//                     <h2 className='hover:text-primary cursor-pointer font-medium'>About Us</h2>
//                 </div>      
//             </div>
//             <div>
//                 {isAuthenticated ? (
//                     <div className='flex items-center gap-4'>
//                         {/* User Image/Avatar */}
//                         <Image 
//                             src={user?.picture || '/default-avatar.png'} // Agar photo na ho toh default dikhaye
//                             alt='user'
//                             width={40}
//                             height={40}
//                             className='rounded-full border-2 border-primary'
//                         />
//                         {/* Logout Link (Descope SDK default logout route) */}
//                         <a href="/api/auth/logout" className="text-sm text-red-500 hover:underline">Logout</a>
//                     </div>
//                 ) : (
//                     // Button click karne par /login page par jayega jo humne upar banaya
//                     // <Button onClick={() => router.push('/login')}>Login / Sign Up</Button>
//                     // Header.jsx ke andar ka button
//                     <Button onClick={() => router.push('/sign-in')}>Login / Sign Up</Button>
//                 )}
//             </div>
//         </div>
//     )
// }
// export default Header
// // mai change karunga uske liye jo bhi galti hogi dubara ho jayega
// youtube copy paste
"use client";
;
;
;
;
;
;
function Header() {
    _s();
    const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            console.log(data);
        }
    }["Header.useEffect"], [
        data
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-5 shadow-sm flex  justify-between   ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-8 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/logo.svg",
                        alt: "logo",
                        width: 180,
                        height: 100
                    }, void 0, false, {
                        fileName: "[project]/app/_components/Header.jsx",
                        lineNumber: 159,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:flex items-center   gap-6 hidden   ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: '/',
                                className: "hover:scale-105 hover:text-primary   cursor-pointer",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/app/_components/Header.jsx",
                                lineNumber: 164,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "hover:scale-105 hover:text-primary   cursor-pointer",
                                children: "Services"
                            }, void 0, false, {
                                fileName: "[project]/app/_components/Header.jsx",
                                lineNumber: 166,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "hover:scale-105 hover:text-primary   cursor-pointer",
                                children: "About Us"
                            }, void 0, false, {
                                fileName: "[project]/app/_components/Header.jsx",
                                lineNumber: 168,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/_components/Header.jsx",
                        lineNumber: 161,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/_components/Header.jsx",
                lineNumber: 158,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: data?.user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownMenu, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownMenuTrigger, {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: data?.user?.image,
                                alt: "user",
                                width: 40,
                                height: 40,
                                className: "rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/app/_components/Header.jsx",
                                lineNumber: 179,
                                columnNumber: 3
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/_components/Header.jsx",
                            lineNumber: 178,
                            columnNumber: 3
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownMenuContent, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownMenuLabel, {
                                    children: "My Account"
                                }, void 0, false, {
                                    fileName: "[project]/app/_components/Header.jsx",
                                    lineNumber: 187,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownMenuSeparator, {}, void 0, false, {
                                    fileName: "[project]/app/_components/Header.jsx",
                                    lineNumber: 188,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownMenuItem, {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: '/mybooking',
                                        children: "My Booking"
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/Header.jsx",
                                        lineNumber: 190,
                                        columnNumber: 6
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/_components/Header.jsx",
                                    lineNumber: 189,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownMenuItem, {
                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])(),
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/app/_components/Header.jsx",
                                    lineNumber: 192,
                                    columnNumber: 5
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/_components/Header.jsx",
                            lineNumber: 186,
                            columnNumber: 3
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/_components/Header.jsx",
                    lineNumber: 177,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signIn"])('descope'),
                    children: "Login / Sign Up"
                }, void 0, false, {
                    fileName: "[project]/app/_components/Header.jsx",
                    lineNumber: 199,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/_components/Header.jsx",
                lineNumber: 174,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/_components/Header.jsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
_s(Header, "+NUkux0Y160qOyIQMy0kmdW/liI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/provider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NextAuthSessionProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
'use client';
;
;
function NextAuthSessionProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/app/provider.js",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = NextAuthSessionProvider;
var _c;
__turbopack_context__.k.register(_c, "NextAuthSessionProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_ed2de6b8._.js.map