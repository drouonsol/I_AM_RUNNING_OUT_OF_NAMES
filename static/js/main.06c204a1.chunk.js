(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{176:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return g}));var r=n(1),c=n.n(r),a=n(4),i=n(31),o=n(64),s=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),f=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),b=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,o,s,u,f,b=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=b.length>3&&void 0!==b[3]?b[3]:"recent",o=b.length>4&&void 0!==b[4]&&b[4],s=!1,u={slot:0,confirmations:0,err:null},f=0,e.next=7,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(b,d){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),d({timeout:!0}))}),n);try{f=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),d(u)):(console.log("Resolved via websocket",e),b(u))}),i)}catch(l){s=!0,console.error("WS error in setup",t,l)}case 2:if(s||!o){e.next=8;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,d(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,b(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,O(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[f]&&r.removeSignatureListener(f),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),d=function(t,n,r,c){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:a,programId:u,data:e.from([])})},l=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,o,u,f,b,d,l,p,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new i.b(r,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(s,a);case 3:return o=e.sent,u=new i.a(o,s,a),f={id:n,connection:r,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return b=e.sent,d=b.data.itemsAvailable.toNumber(),l=b.itemsRedeemed.toNumber(),p=d-l,m=b.data.goLiveDate.toNumber(),m=new Date(1e3*m),console.log({itemsAvailable:d,itemsRedeemed:l,itemsRemaining:p,goLiveDate:m}),e.abrupt("return",{candyMachine:f,itemsAvailable:d,itemsRedeemed:l,itemsRemaining:p,goLiveDate:m});case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),f.toBuffer(),n.toBuffer(),e.from("edition")],f);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),f.toBuffer(),n.toBuffer()],f);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),o.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){var s,u,b,l,g,O,x;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.d.Keypair.generate(),e.next=3,j(r,s.publicKey);case 3:return u=e.sent,b=t.connection,l=t.program,e.next=7,m(s.publicKey);case 7:return g=e.sent,e.next=10,p(s.publicKey);case 10:return O=e.sent,e.next=13,b.getMinimumBalanceForRentExemption(o.a.span);case 13:return x=e.sent,e.next=16,l.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:s.publicKey,metadata:g,masterEdition:O,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:f,tokenProgram:o.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[s],instructions:[i.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:s.publicKey,space:o.a.span,lamports:x,programId:o.b}),o.c.createInitMintInstruction(o.b,s.publicKey,0,r,r),d(u,r,r,s.publicKey),o.c.createMintToInstruction(o.b,s.publicKey,u,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),O=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(7).Buffer)},353:function(e,t,n){},354:function(e,t,n){},357:function(e,t){},359:function(e,t){},375:function(e,t){},376:function(e,t){},407:function(e,t){},463:function(e,t){},465:function(e,t){},479:function(e,t){},483:function(e,t){},485:function(e,t){},495:function(e,t){},497:function(e,t){},524:function(e,t){},526:function(e,t){},531:function(e,t){},533:function(e,t){},539:function(e,t){},541:function(e,t){},553:function(e,t){},556:function(e,t){},568:function(e,t){},569:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o=n(2),s=n.n(o),u=n(28),f=n.n(u),b=(n(353),n(354),n(12)),d=n(1),l=n.n(d),p=n(4),m=n(13),j=n(132),g=n(133),O=n(313),x=n(596),y=n(601),h=n(605),v=n(604),S=n(15),w=n(52),k=n(174),P=n(176),R=n(35),K=Object(g.a)(k.a)(r||(r=Object(j.a)([""]))),M=g.a.span(c||(c=Object(j.a)([""]))),T=g.a.div(a||(a=Object(j.a)([""]))),A=Object(g.a)(x.a)(i||(i=Object(j.a)([""]))),B=function(e){var t=e.days,n=e.hours,r=e.minutes,c=e.seconds;e.completed;return Object(R.jsxs)(M,{children:[n+24*(t||0)," hours, ",r," minutes, ",c," seconds"]})},L=function(e){var t=Object(o.useState)(),n=Object(m.a)(t,2),r=(n[0],n[1]),c=Object(o.useState)(!1),a=Object(m.a)(c,2),i=a[0],s=a[1],u=Object(o.useState)(!1),f=Object(m.a)(u,2),d=f[0],j=f[1],g=Object(o.useState)(!1),x=Object(m.a)(g,2),k=x[0],M=x[1],L=Object(o.useState)(0),C=Object(m.a)(L,2),I=(C[0],C[1]),E=Object(o.useState)(0),D=Object(m.a)(E,2),W=(D[0],D[1]),N=Object(o.useState)(0),U=Object(m.a)(N,2),_=U[0],Y=U[1],F=Object(o.useState)({open:!1,message:"",severity:void 0}),G=Object(m.a)(F,2),H=G[0],V=G[1],q=Object(o.useState)(new Date(e.startDate)),J=Object(m.a)(q,2),Z=J[0],z=J[1],X=Object(w.c)(),Q=Object(o.useState)(),$=Object(m.a)(Q,2),ee=$[0],te=$[1],ne=function(){Object(p.a)(l.a.mark((function t(){var n,r,c,a,i,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(X){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(P.b)(X,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,c=n.goLiveDate,a=n.itemsAvailable,i=n.itemsRemaining,o=n.itemsRedeemed,I(a),Y(i),W(o),j(0===i),z(c),te(r);case 16:case"end":return t.stop()}}),t)})))()},re=function(){var t=Object(p.a)(l.a.mark((function t(){var n,c,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,M(!0),!X||!(null===ee||void 0===ee?void 0:ee.program)){t.next=10;break}return t.next=5,Object(P.c)(ee,e.config,X.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(P.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(c=t.sent)||void 0===c?void 0:c.err)?V({open:!0,message:"Mint failed! Please try again!",severity:"error"}):V({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),a=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(a="SOLD OUT!",j(!0)):312===t.t0.code&&(a="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?a="SOLD OUT!":t.t0.message.indexOf("0x135")&&(a="Insufficient funds to mint. Please fund your wallet.")),V({open:!0,message:a,severity:"error"});case 17:if(t.prev=17,!X){t.next=23;break}return t.next=21,e.connection.getBalance(X.publicKey);case 21:i=t.sent,r(i/S.LAMPORTS_PER_SOL);case 23:return M(!1),ne(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[0,12,17,26]])})));return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){Object(p.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!X){t.next=5;break}return t.next=3,e.connection.getBalance(X.publicKey);case 3:n=t.sent,r(n/S.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[X,e.connection]),Object(o.useEffect)(ne,[X,e.candyMachineId,e.connection]),Object(R.jsxs)("main",{style:{display:"flex",textAlign:"center",fontWeight:"bold",flexDirection:"column",justifyContent:"center",height:"100vh",backgroundImage:"url()",fontSize:"100"},children:[X&&Object(R.jsxs)("p",{children:["Remaining: ",_,"/1111"]}),X&&Object(R.jsx)("p",{children:"Mint your awsome stain to join the Solstain gang today"}),Object(R.jsx)("p",{}),Object(R.jsx)(T,{children:X?Object(R.jsx)(A,{disabled:d||k||!i,onClick:re,variant:"contained",children:d?"SOLD OUT":i?k?Object(R.jsx)(y.a,{}):"MINT":Object(R.jsx)(O.a,{date:Z,onMount:function(e){return e.completed&&s(!0)},onComplete:function(){return s(!0)},renderer:B})}):Object(R.jsx)(K,{children:"Connect Wallet"})}),Object(R.jsx)(h.a,{open:H.open,autoHideDuration:6,onClose:function(){return V(Object(b.a)(Object(b.a)({},H),{},{open:!1}))},children:Object(R.jsx)(v.a,{onClose:function(){return V(Object(b.a)(Object(b.a)({},H),{},{open:!1}))},severity:H.severity,children:H.message})})]})},C=n(31),I=n(116),E=n(340),D=n(602),W=new C.d.PublicKey("CsGpgAD4YU5pKCScZJ6UVQLPCmw3XC8F8H9tKS7cDv4R"),N=new C.d.PublicKey("E9ZoHkmqBMdUxpVT9ZhojBruXzHXFHNWJneSdPJGXbgL"),U=new C.d.PublicKey("A1YVfwFZTj9yC9j6cwaBL9rwAqz55GL7dtPENGBYsKe2"),_="mainnet-beta",Y=new C.d.Connection("https://explorer-api.mainnet-beta.solana.com"),F=parseInt("1635670800",10),G=Object(E.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),H=function(){var e=Object(o.useMemo)((function(){return Object(S.clusterApiUrl)(_)}),[]),t=Object(o.useMemo)((function(){return[Object(I.a)(),Object(I.b)(),Object(I.c)(),Object(I.e)({network:_}),Object(I.d)({network:_})]}),[]);return Object(R.jsx)(D.a,{theme:G,children:Object(R.jsx)(w.a,{endpoint:e,children:Object(R.jsx)(w.b,{wallets:t,autoConnect:!0,children:Object(R.jsx)(k.b,{children:Object(R.jsx)(L,{candyMachineId:U,config:N,connection:Y,startDate:F,treasury:W,txTimeout:3e4})})})})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,606)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};f.a.render(Object(R.jsx)(s.a.StrictMode,{children:Object(R.jsx)(H,{})}),document.getElementById("root")),V()}},[[569,1,2]]]);
//# sourceMappingURL=main.06c204a1.chunk.js.map