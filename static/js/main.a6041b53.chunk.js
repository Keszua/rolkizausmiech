(this["webpackJsonprolki-za-usmiech"]=this["webpackJsonprolki-za-usmiech"]||[]).push([[0],{102:function(e,a,t){e.exports=t.p+"static/media/baner-01.0e14ad5c.jpg"},103:function(e,a,t){e.exports=t.p+"static/media/baner-02.e249930e.jpg"},11:function(e,a,t){e.exports=t.p+"static/media/kolo1.0685a1f9.svg"},142:function(e,a){e.exports={mapKey:{key:"AIzaSyA1SFBhb-Ip-g-Gxb6i9OdLkoyEbNRvymY"},keySession:["TWOJKLUCZ"],maxAgeSession:36e5}},144:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),o=t.n(l),i=(t(41),t(23)),c=(t(102),t(103),t(55),t(13)),m=(t(56),t(65)),s=t.n(m),u=t(48),p=t.n(u),d=t(66),E=t.n(d);function h(){return r.a.createElement(c.a,null,r.a.createElement(c.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:s.a,alt:"First slide"}),r.a.createElement(c.a.Caption,{variant:"success"},r.a.createElement("h1",{style:{color:"green"}}," "))),r.a.createElement(c.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:p.a,alt:"Second slide"}),r.a.createElement(c.a.Caption,null,r.a.createElement("h3",{style:{color:"black",textShadow:"0px 0px 3px rgb(255, 255, 255)",textOverflow:"inherit"}},r.a.createElement("b",null,"Trenuj razem z przyjaci\xf3\u0142mi")))),r.a.createElement(c.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:E.a,alt:"Second slide"}),r.a.createElement(c.a.Caption,null,r.a.createElement("h3",{style:{color:"yellowgreen",textShadow:"1px 1px 6px rgb(0, 0, 0)"}},r.a.createElement("b",null,"Jazda rodzinna")))))}var z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null))},y=t(15),k=t(12),g=t(16),w=t(17),b=t(18),j=function(e){function a(){var e,t;Object(y.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(g.a)(this,(e=Object(w.a)(a)).call.apply(e,[this].concat(r)))).state={rotation:0},t}return Object(b.a)(a,e),Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",(function(){return e.setNewPosition()}))}},{key:"componentWillUnmount",value:function(){var e=this;document.removeEventListener("scroll",(function(){return e.setNewPosition()}))}},{key:"setNewPosition",value:function(){var e=window.pageYOffset;this.setState({rotation:e})}},{key:"render",value:function(){var e=this.props,a=e.className,t=e.src,n=this.state.rotation/2;return"left"===this.props.direction&&(n=-n),r.a.createElement("img",{className:a,src:t,style:{transform:"rotate(".concat(n,"deg)")},alt:""})}}]),a}(n.Component),f=t(68),v=t.n(f),x=t(69),O=t.n(x),N=t(70),S=t.n(N),W=t(71),C=t.n(W),I=t(72),R=t.n(I),A=t(73),P=t.n(A),Z=t(74),T=t.n(Z),B=t(75),L=t.n(B),F=[{name:"start",img:v.a,dir:"right",path:"/",exact:!0},{name:"Nauka jazdy",img:O.a,dir:"right",path:"/nauka"},{name:"Warsztaty rolkowe",img:S.a,dir:"right",path:"/warsztaty"},{name:"Zbi\xf3rka rolek",img:C.a,dir:"right",path:"/zbiorka"},{name:"Pielgrzymka",img:R.a,dir:"right",path:"/pielgrzymka"},{name:"Mapa rolkowa",img:P.a,dir:"right",path:"/map"},{name:"Kontakt",img:T.a,dir:"right",path:"/contact"},{name:"Panel admina",img:L.a,dir:"right",path:"/admin"}],M=function(e){function a(){var e,t;Object(y.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(g.a)(this,(e=Object(w.a)(a)).call.apply(e,[this].concat(r)))).state={widthSize:0},t}return Object(b.a)(a,e),Object(k.a)(a,[{key:"render",value:function(){var e=[];"left"===this.props.position?(e=F.slice(0,4)).forEach((function(e){return e.dir="left"})):e="right"===this.props.position?F.slice(4):F;var a=e.map((function(e){return r.a.createElement("div",{key:e.name,className:"nav-link"},r.a.createElement(i.b,{to:e.path,exact:e.exact},r.a.createElement(j,{className:"wheel-1",src:e.img,direction:e.dir})))}));return r.a.createElement(r.a.Fragment,null,a)}}]),a}(n.Component),K=t(27),J=t(87),Y=function(e){var a=e.title,t=e.author,n=e.text;return r.a.createElement("article",{style:{marginTop:40}},r.a.createElement("h3",{style:{margin:3,textTransform:"uppercase"}},a),r.a.createElement("span",{style:{display:"block",marginBottom:10,fontSize:12}},"Autor: ",t),r.a.createElement("p",null,n))},_=(t(108),t(79)),D=t.n(_),H=[{id:1,title:"Zapraszamy na festyn",author:"Jan Malinowski",text:"Bala bala, jaki\u015b tekst"},{id:2,title:"Artyku\u0142 2",author:"Jan Nowak",text:"Bala bala, jaki\u015b tekst"}],U=function(){var e=Object(n.useState)(0),a=Object(J.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{style:{padding:5,width:"60vw",maxWidth:"1fr",margin:10}},r.a.createElement(D.a,{containerWidth:"200px",infiniteLoop:!0,gutter:12,activePosition:"center",numberOfCards:2,slidesToScroll:1,chevronWidth:40,activeItemIndex:t,requestToChangeActive:l,leftChevron:r.a.createElement("button",null,"<"),rightChevron:r.a.createElement("button",null,">")},r.a.createElement("div",{key:1,style:{height:200,background:"url(https://placeimg.com/380/200/nature)"}},"First card"),r.a.createElement("div",{key:2,style:{height:200,background:"url(https://placeimg.com/380/200/nature)"}},"Second card"),r.a.createElement("div",{key:3,style:{height:200,background:"#000"}},"Third card"),r.a.createElement("div",{key:4,style:{height:200,background:"#EEE"}},"Fourth card")))},G=function(){H.map((function(e){return r.a.createElement(Y,Object.assign({key:e.id},e))}));return r.a.createElement("div",{className:"home"},r.a.createElement("h1",null,"Witaj na naszej stronie."),"Promujemy rolkarstwo i zdrowy stylu \u017cycia. Zapoznaj si\u0119 co do tej poty uda\u0142o  nam si\u0119 zorganizowa\u0107. Na pewno znajdziesz co\u015b dla siebie i rodziny. Akcja ta, nie powsta\u0142a by, bez nieustannej pomocy mojej kochanej \u017cony oraz licznej grupy znajomych  i przyjaci\xf3\u0142.",r.a.createElement(U,null))},q=function(){return r.a.createElement("div",null,"News Page")},Q=function(e){function a(){var e,t;Object(y.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(g.a)(this,(e=Object(w.a)(a)).call.apply(e,[this].concat(r)))).state={value:""},t.handleSubmit=function(e){e.preventDefault(),t.setState({value:""})},t.handleChange=function(e){t.setState({value:e.target.value})},t}return Object(b.a)(a,e),Object(k.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleSubmit}," ",r.a.createElement("h3",null,"Napisz do nas"),r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,placeholder:"Wpisz wiadomo\u015b\u0107..."}),r.a.createElement("button",null,"Wy\u015blij")),r.a.createElement(K.a,{when:!!this.state.value,message:"W formularzu znajduje si\u0119 nie wys\u0142ana tre\u015b\u0107. Czy na pewno chesz opu\u015bci\u0107 t\u0105 stron\u0119"}))}}]),a}(r.a.Component),V=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Co\u015b posz\u0142o nie tak... :(   "),r.a.createElement("br",null),"  (error: 404)")},X=function(e){function a(){var e,t;Object(y.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(g.a)(this,(e=Object(w.a)(a)).call.apply(e,[this].concat(r)))).state={windowSizeW:window.innerWidth,windowSizeH:window.innerHeight},t}return Object(b.a)(a,e),Object(k.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){return e.setState({windowSizeW:window.innerWidth,windowSizeH:window.innerHeight})}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",{})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Panel admina - dzie\u0144 dobry"),r.a.createElement("br",null)," Szeroko\u015b\u0107 ekranu: ",this.state.windowSizeW,r.a.createElement("br",null)," Wysoko\u015bc ekranu:  ",this.state.windowSizeH)}}]),a}(n.Component),$=function(){return r.a.createElement(K.c,{render:function(){return r.a.createElement(X,null)}})},ee=function(){return r.a.createElement("div",null,"Login panel",r.a.createElement("br",null),r.a.createElement("label",{htmlFor:""},"Login",r.a.createElement("input",{type:"text"})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:""},"Has\u0142o",r.a.createElement("input",{type:"password"})),r.a.createElement("br",null),r.a.createElement("button",null,"Zaloguj"))},ae=t(83),te=t.n(ae),ne=function(e){var a=e.text;return r.a.createElement("div",null,a)},re=t(142),le=function(e){function a(){return Object(y.a)(this,a),Object(g.a)(this,Object(w.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(k.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"100vh",width:"100%"}},r.a.createElement(te.a,{bootstrapURLKeys:re.mapKey,defaultCenter:this.props.center,defaultZoom:this.props.zoom},r.a.createElement(ne,{lat:51.393928,lng:21.1460688,text:"My Marker"})))}}]),a}(n.Component);le.defaultProps={center:{lat:51.393928,lng:21.1460688},zoom:11};var oe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(le,null)))},ie=t(84),ce=t(168),me=t(170),se=t(173),ue=t(33),pe=t(177),de=t(174),Ee=t(175),he=t(176),ze=t(182),ye=t(172),ke=Object(ce.a)((function(e){return{root:{maxWidth:"460px",minWidth:"300px",margin:"10px",boxShadow:"3px 2px 3px 4px rgba(10, 10, 10, .4)"}}})),ge=function(){var e=ke();return r.a.createElement(r.a.Fragment,null,r.a.createElement(me.a,null,r.a.createElement("br",null),r.a.createElement(ze.a,{severity:"success",variant:"outlined"},r.a.createElement(ye.a,null,r.a.createElement("h1",null,"Zaplanuj swoj\u0105 rolkowa wycieczk\u0119.")),"Zastanawiasz si\u0119 gdzie mo\u017cna poje\u017adzi\u0107 na rolkach?",r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("br",null),"Zje\u017adzi\u0142em ca\u0142y Radom, przy okazji nanosz\u0105c na map\u0119 jako\u015b powierzchni, jak\u0105 mia\u0142em pod k\xf3\u0142eczkami.",r.a.createElement("br",null),"Skorzystaj z mapy, jak\u0105 dla Ciebie przygotowa\u0142em.")),r.a.createElement("br",null)),r.a.createElement("div",{style:{backgroundColor:"gray",width:"100%",height:"100vh"}},r.a.createElement(ie.a,{url:"https://www.google.com/maps/d/embed?mid=11wRktITey292ZcSmWtZh8GGdCuQ",width:"100%",height:"100%"})),r.a.createElement(se.a,{container:!0},r.a.createElement(de.a,{className:e.root},r.a.createElement(Ee.a,null,r.a.createElement(ue.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Korzystaj z warstwa"),r.a.createElement(ue.a,{gutterBottom:!0,variant:"h6",component:"h1"},"Jazda po radomiu"),"Jak przejecha\u0107 przez miasto, aby nie korzysta\u0107 z dr\xf3g dla samochod\xf3w.",r.a.createElement("br",null),"Kolory oddaj\u0105 stan chodnik\xf3w.",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(ue.a,{gutterBottom:!0,variant:"h6",component:"h1"},"Nie ograniczaj si\u0119, wyjed\u017a dalej!"),"Wyjedz po za Radom.",r.a.createElement("br",null),"Wybierane trasy o mniejszym nat\u0119\u017ceniu ruchu.",r.a.createElement("br",null),"Kolory oddaj\u0105 stan asfaltu na jezdni.")),r.a.createElement(de.a,{className:e.root},r.a.createElement(Ee.a,null,r.a.createElement(ue.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Wybierz odpowiedni\u0105 nawierzchni\u0119"),r.a.createElement(ue.a,{gutterBottom:!0,variant:"h6",component:"h1"},r.a.createElement("strong",{style:{color:"green"}},"ZIELONY")),"Jazda to przyjemno\u015b\u0107. Relaksuj si\u0119 na g\u0142adkich chodnikach, asfalcie, g\u0142adkiej kostce bez frez\xf3w.",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(ue.a,{gutterBottom:!0,variant:"h6",component:"h1"},r.a.createElement("strong",{style:{color:"blue"}},"NIEBIESKI")),"Chcesz poczu\u0107 mr\xf3wki na stopach? Sprz\u0119t wytrzyma wstrzasy? Korzystaj z kostki z frezem oraz chodnik\xf3w w nieco gorszym stanie.",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(ue.a,{gutterBottom:!0,variant:"h6",component:"h1"},r.a.createElement("strong",{style:{color:"blueviolet"}},"FIOLETOWY")),"Ci\u0119\u017ckie odcinki, strome, szybkie. Tylko dla tych, kt\xf3rzy maja wi\u0119ksze do\u015bwiadczenie w szybkim hamowaniu.",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(ue.a,{gutterBottom:!0,variant:"h6",component:"h1"},r.a.createElement("strong",{style:{color:"dark"}},"CZARNY/BR\u0104ZOWY")),"Ma\u0142o ucz\u0119szczane drogi wewn\u0119trzne, \u015blepe uliczki.",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(ue.a,{gutterBottom:!0,variant:"h6",component:"h1"},r.a.createElement("strong",{style:{color:"orange"}},"POMARA\u0143CZOWY")),'"Ja nie przejad\u0119?" Nie polecane do jazdy, s\u0142aby, dziurawy chodnik.',r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(ue.a,{gutterBottom:!0,variant:"h6",component:"h1"},r.a.createElement("strong",{style:{color:"red"}},"CZERWONY")),"NIE przejezdny, Zwykle brak utwardzenia lub szalenie zniszczony chodnik/ulica.")),r.a.createElement(de.a,{className:e.root},r.a.createElement(Ee.a,null,r.a.createElement(ze.a,{severity:"info",variant:"outlined"},"Masz uwagi, spostrze\u017cenia?"),r.a.createElement("br",null)," Mo\u017ce co\u015b jest nie aktualne?",r.a.createElement(he.a,null,r.a.createElement(pe.a,{size:"small",href:"/contact"},"Poinformuj mnie o tym."))))))},we=t(11),be=t.n(we),je=t(40),fe=t(178),ve=t(184),xe=t(179),Oe=t(180),Ne=t(183),Se=t(181),We=Object(ce.a)((function(e){return{card:{width:"100%",maxWidth:600,margin:"10px",boxShadow:"3px 2px 3px 4px rgba(10, 10, 10, .4)"},root:{width:"100%",maxWidth:360},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:je.a[500]}}})),Ce=function(){var e=We();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ze.a,{severity:"info"},r.a.createElement("h1",null,"Profesjonalna nauka jazdy pod okiem certyfikowanego instruktora")),r.a.createElement(me.a,{maxWidth:"false"},r.a.createElement(de.a,{className:e.card},r.a.createElement(Ee.a,null,r.a.createElement(ue.a,{variant:"h5",component:"h2"},'Zastanawiasz sie: "Jak oni to robi\u0105?"'),'My\u015blisz sobie: "To nie dla mnie, ja zaraz zalicz\u0119 gleb\u0119 i st\u0142ucze ty\u0142ek".',r.a.createElement("br",null),"A mo\u017ce zastanawiasz si\u0119, kto nauczy je\u017adzi\u0107 Twoje dzieci?")),r.a.createElement(de.a,{className:e.card},r.a.createElement(Ee.a,null,r.a.createElement(ue.a,{variant:"h5",component:"h2"},"Lepiej trafi\u0107 si\u0119 nie da."),"Moim celem jest promowanie rolkarstwa i zdrowego stylu \u017cycia. Sam zaczyna\u0142em swoj\u0105 przygod\u0119 z rolkami w wieku 27 lat pod okiem instruktora. Wcze\u015bniejsze pr\xf3by samodzielnej jazdy ko\u0144czy\u0142y si\u0119 niepowodzeniami. Zainwestowa\u0142em wiele czasu oraz pieni\u0119dzy, aby zrobi\u0107 kurs instruktora rolkarstwa i uczy\u0107 profesjonalnie.")),r.a.createElement(de.a,{className:e.card},r.a.createElement(Ee.a,null,r.a.createElement(ue.a,{variant:"h5",component:"h2"},"Jestem ch\u0119tny do pomocy"),"Pokieruje Ci\u0119 w tych najtrudniejszych pierwszych krokach. Pomog\u0119 Ci rozpocz\u0105\u0107 rolkow\u0105 przygod\u0119, aby spe\u0142ni\u0107 podstawowe kryteria:",r.a.createElement(fe.a,{className:e.root},r.a.createElement(ve.a,{lignItems:"flex-start"},r.a.createElement(xe.a,null," ",r.a.createElement(Ne.a,{alt:"Remy Sharp",src:be.a})," "),r.a.createElement(Oe.a,null,"jak zachowa\u0107 podstawowe zasady bezpiecze\u0144stwa")),r.a.createElement(Se.a,{variant:"inset",component:"li"}),r.a.createElement(ve.a,{lignItems:"flex-start"},r.a.createElement(xe.a,null," ",r.a.createElement(Ne.a,{alt:"Remy Sharp",src:be.a})," "),r.a.createElement(Oe.a,null,"jak jest prawid\u0142owa pozycja")),r.a.createElement(Se.a,{variant:"inset",component:"li"}),r.a.createElement(ve.a,{lignItems:"flex-start"},r.a.createElement(xe.a,null," ",r.a.createElement(Ne.a,{alt:"Remy Sharp",src:be.a})," "),r.a.createElement(Oe.a,null,"jak nie upa\u015b\u0107")),r.a.createElement(Se.a,{variant:"inset",component:"li"}),r.a.createElement(ve.a,{lignItems:"flex-start"},r.a.createElement(xe.a,null," ",r.a.createElement(Ne.a,{alt:"Remy Sharp",src:be.a})," "),r.a.createElement(Oe.a,null,"jak upada\u0107 prawid\u0142owo")),r.a.createElement(Se.a,{variant:"inset",component:"li"}),r.a.createElement(ve.a,{lignItems:"flex-start"},r.a.createElement(xe.a,null," ",r.a.createElement(Ne.a,{alt:"Remy Sharp",src:be.a})," "),r.a.createElement(Oe.a,null,"jak zrobi\u0107 pierwszy krok")),r.a.createElement(Se.a,{variant:"inset",component:"li"}),r.a.createElement(ve.a,{lignItems:"flex-start"},r.a.createElement(xe.a,null," ",r.a.createElement(Ne.a,{alt:"Remy Sharp",src:be.a})," "),r.a.createElement(Oe.a,null,"jak chodzi\u0107 na rolkach")),r.a.createElement(Se.a,{variant:"inset",component:"li"}),r.a.createElement(ve.a,{lignItems:"flex-start"},r.a.createElement(xe.a,null," ",r.a.createElement(Ne.a,{alt:"Remy Sharp",src:be.a})," "),r.a.createElement(Oe.a,null,"jak zacz\u0105\u0107 je\u017adzi\u0107")),r.a.createElement(Se.a,{variant:"inset",component:"li"}),r.a.createElement(ve.a,{lignItems:"flex-start"},r.a.createElement(xe.a,null," ",r.a.createElement(Ne.a,{alt:"Remy Sharp",src:be.a})," "),r.a.createElement(Oe.a,null,"jak hamowa\u0107")),r.a.createElement(Se.a,{variant:"inset",component:"li"}),r.a.createElement(ve.a,{lignItems:"flex-start"},r.a.createElement(xe.a,null," ",r.a.createElement(Ne.a,{alt:"Remy Sharp",src:be.a})," "),r.a.createElement(Oe.a,null,"jak skr\u0119ca\u0107?")),r.a.createElement(Se.a,{variant:"inset",component:"li"})))),r.a.createElement(ze.a,{severity:"error"},"Niepodwa\u017calny warunek jaki wymagam: musisz mie\u0107 zapi\u0119ty kask podczas nauki jazdy."),r.a.createElement(de.a,{className:e.card},r.a.createElement(Ee.a,null,r.a.createElement(ue.a,{variant:"h5",component:"h2"},"A mo\u017ce ju\u017c je\u017adzisz, ale chcesz czego\u015b wi\u0119cej?"),"Prosz\u0119 bardzo:",r.a.createElement(fe.a,{className:e.root},r.a.createElement(ve.a,{lignItems:"flex-start"},r.a.createElement(xe.a,null," ",r.a.createElement(Ne.a,{alt:"Remy Sharp",src:be.a})," "),r.a.createElement(Oe.a,null,"jazda ty\u0142em")),r.a.createElement(Se.a,{variant:"inset",component:"li"}),r.a.createElement(ve.a,{lignItems:"flex-start"},r.a.createElement(xe.a,null," ",r.a.createElement(Ne.a,{alt:"Remy Sharp",src:be.a})," "),r.a.createElement(Oe.a,null,"przeplatanka przodem i ty\u0142em")),r.a.createElement(Se.a,{variant:"inset",component:"li"}),r.a.createElement(ve.a,{lignItems:"flex-start"},r.a.createElement(xe.a,null," ",r.a.createElement(Ne.a,{alt:"Remy Sharp",src:be.a})," "),r.a.createElement(Oe.a,null,"skok bez upadku")),r.a.createElement(Se.a,{variant:"inset",component:"li"}),r.a.createElement(ve.a,{lignItems:"flex-start"},r.a.createElement(xe.a,null," ",r.a.createElement(Ne.a,{alt:"Remy Sharp",src:be.a})," "),r.a.createElement(Oe.a,null,"a mo\u017ce obr\xf3t 180stopni podczas jazdy")),r.a.createElement(Se.a,{variant:"inset",component:"li"}),r.a.createElement(ve.a,{lignItems:"flex-start"},r.a.createElement(xe.a,null," ",r.a.createElement(Ne.a,{alt:"Remy Sharp",src:be.a})," "),r.a.createElement(Oe.a,null,"spr\xf3bujmy slalomu mi\u0119dzy kubeczkami")),r.a.createElement(Se.a,{variant:"inset",component:"li"}))))))},Ie=function(){return r.a.createElement("div",null,"PielgrzymkaPage Page")},Re=t(88),Ae=t(2),Pe=t(86),Ze=function(e){function a(){var e,t;Object(y.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(g.a)(this,(e=Object(w.a)(a)).call.apply(e,[this].concat(r)))).state={myTween:null,myElement:null,tl:null},t}return Object(b.a)(a,e),Object(k.a)(a,[{key:"efekt1",value:function(){Re.a.to(this.myElement,3,{x:400,ease:Ae.b.easeOut}),this.tl=new Ae.d({repeat:5,yoyo:!0}),this.tl.to(this.myElement,1,{x:300,ease:Ae.b.easeOut}).to(this.myElement,1,{y:100,ease:Ae.b.easeOut})}},{key:"componentDidMount",value:function(){this.efekt1()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Rajdy "),r.a.createElement("img",{ref:function(a){e.myElement=a},src:be.a,style:{width:"50px"},alt:""}),r.a.createElement(Pe.a,{to:{x:200},duration:2,ease:"Back.easeOut",ref:function(a){return e.tween=a}},r.a.createElement("div",null,"Nauka jazdy")))}}]),a}(n.Component);var Te=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Warsztaty Page"))},Be=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Zbiorka Page"),'Nazwa akcji oraz pierwszy pomys\u0142 jaki przyszed\u0142 mi do g\u0142owy, to zoragnozwa\u0107 zbi\xf3rk\u0119 nieurzywanego juz sprz\u0119tu rolkarskiegi i ponowne wykorzystanie go. Zebrane rolki chcia\u0142em ofiarowa\u0107 moim uczniom wy\u0142\u0105cznie "za u\u015bmiech". Moim celem by\u0142y \u015brodowiska, gdzie rodzic\xf3w nie sta\u0107 na kupno rolek dla swoich pociech, lub z r\xf3znych przyczyn, dzieci nie maj\u0105 swoich rolek. Druga gr\xf3pa odbiorc\xf3w, to osoby, kt\xf3re nie wiedz\u0105 czy ten rodzaj sprtu jest dla nich i obawiaj\u0105 sie wyda\u0107 znaczn\u0105 sum\u0119 pieniedzy na sprz\u0119t, kt\xf3ry by\u0107 moz eza\u0142o\u017c\u0105 tylko raz. Dzi\u0119kuje wszystkim osob\u0105, kt\xf3re oda\u0142y sw\xf3j nieurzywany sprz\u0119t a nawet kilka os\xf3b odda\u0142o nowe, raz urzywane tylko pi\u0119kne rolki. Z uzbieranych dotychczas rolek, uda\u0142o si\u0119 zorganizowa\u0107 mn\xf3stwo akcji, nauk, warszta\xf3w. Nauczyli\u015bmy je\u017cdzic dos\u0142ownie setki os\xf3b na warsztatach grupowych oraz na lekcjach indywidualnych. Przez moje r\u0119ce przewin\u0119\u0142o si\u0119 bardzo wiel par rolek, z czego wi\u0119kszo\u015b\u0107 przekaza\u0142em miedyz innymi: - osobom indywidualnym, - dzieciom ze \u015bwietlic sosjoterapeutcynch, - dzieciom z dom\xf3w dziecka, - jedna para wyjecha\u0142a na Litw\u0119 (czyli akcja ma juz rozmiar globalny ;)  ) Jeszcze raz dzi\u0119kuej wszystkim, bez kt\xf3cyh ta kacja by si\u0119 nie uda\u0142a. Obecnie z powodu mniejszej ilosci czasu oraz mniejszej ilosci miejsca w gara\u017cu, ju\u017c nie prowadz\u0119 zbi\xf3rki rolek.')},Le=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.e,null,r.a.createElement(K.c,{path:"/",exact:!0,component:G}),r.a.createElement(K.c,{path:"/news",component:q}),r.a.createElement(K.c,{path:"/nauka",component:Ce}),r.a.createElement(K.c,{path:"/warsztaty",component:Te}),r.a.createElement(K.c,{path:"/zbiorka",component:Be}),r.a.createElement(K.c,{path:"/pielgrzymka",component:Ie}),r.a.createElement(K.c,{path:"/gra",component:oe}),r.a.createElement(K.c,{path:"/rajd",component:Ze}),r.a.createElement(K.c,{path:"/map",component:ge}),r.a.createElement(K.c,{path:"/contact",component:Q}),r.a.createElement(K.c,{path:"/admin",component:$}),r.a.createElement(K.c,{path:"/login",component:ee}),r.a.createElement(K.c,{component:V})))};var Fe=function(){return r.a.createElement(i.a,{basename:"/rolkizausmiech"},r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"top"},r.a.createElement("div",{className:"top__nav navigation"},r.a.createElement("nav",{className:"top__nav--left"},r.a.createElement(M,{position:"left"})),r.a.createElement("nav",{className:"top__nav--right"},r.a.createElement(M,{position:"right"}))),r.a.createElement("div",{className:"top__header"},r.a.createElement(z,null))),r.a.createElement("div",{className:"p_body"},r.a.createElement("nav",{className:"navLeft navigation"},r.a.createElement(M,{position:"left"})),r.a.createElement("section",{className:"page"},r.a.createElement(Le,null)),r.a.createElement("nav",{className:"navRight navigation"},r.a.createElement(M,{position:"right"})))))};o.a.render(r.a.createElement(Fe,null),document.getElementById("root"))},41:function(e,a,t){},48:function(e,a,t){e.exports=t.p+"static/media/baner02.f2946118.jpg"},55:function(e,a,t){e.exports=t.p+"static/media/baner-03.1f959e17.jpg"},65:function(e,a,t){e.exports=t.p+"static/media/baner01.d5b20ebd.png"},66:function(e,a,t){e.exports=t.p+"static/media/baner03.0191e878.jpg"},68:function(e,a,t){e.exports=t.p+"static/media/kolo1-START-01.db0fa027.svg"},69:function(e,a,t){e.exports=t.p+"static/media/kolo1-NAUKA.22757aad.svg"},70:function(e,a,t){e.exports=t.p+"static/media/kolo1-WARSZTATY.52469d17.svg"},71:function(e,a,t){e.exports=t.p+"static/media/kolo1-ZBIORKA.9110c859.svg"},72:function(e,a,t){e.exports=t.p+"static/media/kolo1-PIELGRZYMKA.ea8a20e7.svg"},73:function(e,a,t){e.exports=t.p+"static/media/kolo1-MAPA.4ec3fb02.svg"},74:function(e,a,t){e.exports=t.p+"static/media/kolo1-KONTAKT.db5ba4fd.svg"},75:function(e,a,t){e.exports=t.p+"static/media/kolo1-PANEL.347a3599.svg"},97:function(e,a,t){e.exports=t(144)}},[[97,1,2]]]);
//# sourceMappingURL=main.a6041b53.chunk.js.map