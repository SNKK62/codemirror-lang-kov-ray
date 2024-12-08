'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lr = require('@lezer/lr');
var language = require('@codemirror/language');
var highlight = require('@lezer/highlight');

// This file was generated by lezer-generator. You probably shouldn't edit it.
const spec_Identifier = {__proto__:null,Sphere:8, center:12, radius:30, material:32, Metal:34, Dielectric:36, Lambertian:38, Perlin:40, Checker:42, Solid:44, Light:46, translate:48, rotateX:50, rotateY:52, rotateZ:54, Box:58, vertex:60, Plane:62, Objs:64, Camera:66, Config:78, if:90, else:92, while:94, break:96, continue:98};
const parser = lr.LRParser.deserialize({
  version: 14,
  states: ":QQYQPOOO#RQPO'#DuOOQO'#Du'#DuO$_QPO'#DuO%bQPO'#DtO']QPO'#DsO(lQPO'#DrOOQO'#Dr'#DrO$_QPO'#DqOOQO'#Dn'#DnOOQO'#Dm'#DmOOQO'#D`'#D`QYQPOOO*]QPO'#DuO*nQPO'#DoO*sQPO'#E_O*xQPO'#E`O*}QPO'#EaO+SQPO'#EbO+XQPO'#EcO$_QPO'#EgO$_QPO'#EhO+^QPO'#DmO+cQPO,5:bO$_QPO,5;OO+jQPO'#DuO,QQPO,5:aO*]QPO'#DcO,wQPO,5:`O*]QPO'#DdO.rQPO,5:_O*]QPO,5:hO0RQPO,5:]OOQO-E7^-E7^OOQO,5:a,5:aO0oQPO,5:ZO1[QPO,5:yO1cQPO,5:zO1jQPO,5:{O2ZQQO,5:|O2sQQO,5:}O2zQPO,5;RO3PQPO,5;SOOQO,5:X,5:XOOQO1G/|1G/|O3UQPO1G/|O3^QPO1G0jOOQO1G/{1G/{OOQO,59},59}OOQO-E7a-E7aOOQO,5:O,5:OOOQO-E7b-E7bOOQO1G0S1G0SO$_QPO1G/wOOQO'#Da'#DaO3cQPO1G/uO3jQPO'#E^O3oQPO'#E^O3tQPO'#DaO3yQPO'#DaO4OQPO'#DaOOQO1G/u1G/uOOQO'#De'#DeO4TQPO1G0eO4[QPO'#DeO4aQPO'#DeOOQO1G0e1G0eO4fQPO1G0fOOQO1G0f1G0fOOQO'#Df'#DfO4mQPO1G0gO5[QPO'#DhO5aQPO'#DhO5fQQO1G0hOOQO1G0h1G0hO5mQPO'#DiO5rQPO'#DiO5wQQO1G0iOOQO1G0i1G0iO6OQPO1G0mO6VQPO1G0nO$_QPO'#DbO6^QPO7+%hOOQO7+%h7+%hOOQO7+&U7+&UO6fQPO7+%cOOQO-E7_-E7_OOQO7+%a7+%aO6kQPO,5:xO$_QPO,5:xO6sQPO,59{O$_QPO,59{O6{QPO,59{OOQO-E7c-E7cOOQO7+&P7+&PO7mQPO,5:PO6{QPO,5:POOQO7+&Q7+&QOOQO-E7d-E7dOOQO'#Dg'#DgO7rQPO7+&ROOQO7+&R7+&RO8TQPO,5:SO$_QPO,5:SOOQO-E7f-E7fOOQO7+&S7+&SO$_QPO,5:TO8]QPO,5:TOOQO-E7g-E7gOOQO7+&T7+&TO8eQPO7+&XO8lQPO7+&XO9vQPO7+&YOOQO7+&Y7+&YOOQO,59|,59|OOQO-E7`-E7`OOQO<<IS<<ISO$_QPO<<H}O9}QPO1G0dO:SQPO1G/gO:XQPO'#EVOOQO'#EV'#EVOOQO'#ET'#ETO:vQPO'#EUOOQO'#EW'#EWOOQO'#E]'#E]O:{QPO1G/kO;TQPO1G/kOOQO-E7e-E7eOOQO<<Im<<ImO;YQPO1G/nO;_QPO1G/oO;dQPO<<IsO<nQPO<<IsOOQO<<It<<ItO<vQPOAN>iOOQO7+&O7+&OOOQO7+%R7+%RO<{QPO,5:wO=OQPO,5:wOOQO'#EX'#EXO=YQPO,5:rO=_QPO'#EYO=dQPO'#EZO=iQPO'#E[O=nQPO,5:pO=vQPO7+%VOOQO7+%V7+%VOOQO7+%Y7+%YOOQO7+%Z7+%ZO={QPOAN?_O>TQPOAN?_OOQOAN?_AN?_OOQOG24TG24TO$_QPO1G0cOOQO1G0^1G0^O$_QPO,5:tO>[QPO,5:uO>gQPO,5:vO>oQPO1G0[O>tQPO<<HqO>|QPOG24yOOQOG24yG24yO>|QPOG24yO?TQPO7+%}O?YQPO1G0`O?_QPO1G0aO?dQPO1G0bO$_QPO7+%vO?iQPOAN>]O?nQPOLD*eOOQOLD*eLD*eOOQO<<Ii<<IiOOQO7+%z7+%zO>[QPO7+%{OOQO7+%|7+%|O?uQPO<<IbO?zQPOG23wOOQO!$'NP!$'NPO@PQPO<<IgOOQOAN>|AN>|OOQOLD)cLD)cOOQOAN?RAN?RO$_QPO'#DuO$_QPO'#DcO@UQPO,5:`O$_QPO'#DdO@oQPO,5:_O$_QPO,5:hOAYQPO'#DtOAsQPO'#DsOB^QPO'#Dr",
  stateData: "C`~O!`OSPOS~ORPOS^OVWOWQOXROm_Oo`OpaOqbOwcO}dO!PeO!QfO!RfO!l]O~OZ!iX[!iX]!iX!m!iX!n!iX!o!iX!q!iX!r!iX!s!iX!t!iX!u!iX!v!iX~O#XhOR!iXS!iXV!iXW!iXX!iXm!iXo!iXp!iXq!iXw!iX}!iX!P!iX!Q!iX!R!iX!^!iX!l!iXl!iX~P!ZORiOVWOWQOXRO!l$}O~O[!hX]!hX!n!hX!o!hX!q!hX!r!hX!s!hX!t!hX!u!hX!v!hX~OZkO!mkOR!hXS!hXV!hXW!hXX!hXm!hXo!hXp!hXq!hXw!hX}!hX!P!hX!Q!hX!R!hX!^!hX!l!hXl!hX~P$pO[!gX]!gX!q!gX!r!gX!s!gX!t!gX!u!gX!v!gX~O!nmO!omOR!gXS!gXV!gXW!gXX!gXm!gXo!gXp!gXq!gXw!gX}!gX!P!gX!Q!gX!R!gX!^!gX!l!gXl!gX~P&qO[oO]oO!qoO!roO!soO!toO!uoO!voOR!fXS!fXV!fXW!fXX!fXm!fXo!fXp!fXq!fXw!fX}!fX!P!fX!Q!fX!R!fX!^!fX!l!fXl!fX~ORQOVWOWQOXRO!l]O~OTsO~OTtO~OTuO~OTvO~OTwO~OTxO~O#Y{O~OY|O~P$_OXgOY!iX!k!iXT!iX#Y!iX^!iX~P!ZOY!PO~O[!ha]!ha!n!ha!o!ha!q!ha!r!ha!s!ha!t!ha!u!ha!v!ha~OZkO!mkOR!haS!haV!haW!haX!ham!hao!hap!haq!haw!ha}!ha!P!ha!Q!ha!R!ha!^!ha!l!hal!ha~P,VO[!ga]!ga!q!ga!r!ga!s!ga!t!ga!u!ga!v!ga~O!nmO!omOR!gaS!gaV!gaW!gaX!gam!gao!gap!gaq!gaw!ga}!ga!P!ga!Q!ga!R!ga!^!ga!l!gal!ga~P.WO!k!VO~OU![O_!]O`!^Oh!YOi!ZOj!ZOk!ZO~Ol!_O~P0WO`!cOh!YOi!ZOj!ZOk!ZOn!bO~Ol!dO~P0vOl!fO~P0vOS^Om_Oo`OpaO~Or!iOs!iOt!iOu!jOv!jO~Ol!lO~P1xOx!mOy!mOz!mO{!mO|!nO~Ol!pO~P2bOT!qO~OT!rO~OY!uO!k!sO~O#Y!vO~Ol!yO~P0WO!d!zO~O!d!{O~O!d!|O~O!d!}O~O!d#OO~Ol#QO~P0vO!d#RO~O!d#SO~Ol#TO~P0vOS^Oh!YOi!ZOj!ZOk!ZOl#XOm_Oo`OpaO~O!d#YO~O!d#ZO~Ol#]O~P1xO!d#^O~O!d#_O~Ol#aO~P2bOl#cO~PYOl#eO~PYOY#hO!k!sO~O!k#iO~OR#jOVWO~OR#kOVWO~ORiOVWOWQOX#lOY#mOa#oOb#mOc#pOg#qO!l$}O~OX#rO~Oh!YOi!ZOj!ZOk!ZOl#uO~OR#vOVWO~OR#wOVWO~Ol#xO~PYO!O#yOR#ZqS#ZqV#ZqW#ZqX#Zqm#Zqo#Zqp#Zqq#Zqw#Zq}#Zq!P#Zq!Q#Zq!R#Zq!^#Zq!l#Zql#Zq~Ol#zO~PYO!k#|O~O!k#}O~OR$OOVWOWQOXROd$SOe$TOf$UO!l$}O!k!yX~OX$VO~OR$WOVWO~O!k$XO~O!k$YO~O!k$ZO~O!O$[OR#ZyS#ZyV#ZyW#ZyX#Zym#Zyo#Zyp#Zyq#Zyw#Zy}#Zy!P#Zy!Q#Zy!R#Zy!^#Zy!l#Zyl#Zy~OT$]O}dO~O^$_O~OXgO!k$`OY!iX~P!ZOY$aO~OX$bO~OX$cO~OX$dO~OR$eOVWO~O!k$fO~OT$gO}dO~Ol$hO~PYOd$SOe$TOf$UO~OR$mOVWO~O!k$nO~OR$oOVWO~Ol$qO~PYOY$rO~OY$sO~O!k$tO~OY$uO~OY$wO~Ol$xO~PYOY$zO~O!k${O~OY$|O~OZ%OO!m%OOY!ha!k!haT!ha#Y!ha^!ha~P,VO!n%QO!o%QOY!ga!k!gaT!ga#Y!ga^!ga~P.WOZ%OO!m%OOY!hX!k!hXT!hX#Y!hX^!hX~P$pO!n%QO!o%QOY!gX!k!gXT!gX#Y!gX^!gX~P&qO[%SO]%SO!q%SO!r%SO!s%SO!t%SO!u%SO!v%SOY!fX!k!fXT!fX#Y!fX^!fX~OPZ^]V[~",
  goto: ".k#]PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP#^#t#z$Q$[$f$p$v$|%SPPP%Y%f%vP&U'i(|)s*l+kPPPPP,dPPPPPP-T-Z-Z-Z-_-h-h-h-Z-m%v%v%v-{-{-{PP.X-{Q[OYq[#b#d$i$pQ#b!qQ#d!rQ$i$]R$p$gQ!XsR!x!XQ!t}R#g!tQlSS!Rl%PR%P%TQnTS!Tn%RR%R%UQ!atQ!euT#P!a!eQ!hvR#U!hQ#W!hR#t#WQ!kwR#[!kQ!oxR#`!oeZO[!q!r#b#d$]$g$i$pdYO[!q!r#b#d$]$g$i$pT!gv!hiXO[v!h!q!r#b#d$]$g$i$p!jQORW[]deghkmo!V!q!r!s!{!}#O#S#Z#^#b#d#i$]$`$b$g$i$n$p$}%O%Q%SQ#j!zQ#k!|Q#v#YQ#w#_Q$P#lQ$W#rQ$e$VQ$m$dR$o$fdYO[!q!r#b#d$]$g$i$pSjR#lQpWQydQzeQ}gQ!OhQ!w!VQ#f!sQ#j!{Q#k!}S#m#O#SQ#v#ZQ#w#^Q#{#iQ$j$`Q$k$bR$v$ndUO[!q!r#b#d$]$g$i$pS!Uo%Sw%VRWdegh!V!s!{!}#O#S#Z#^#i#l$`$b$nfTO[o!q!r#b#d$]$g$i$pS!Sm%Qy%URWdegh!V!s!{!}#O#S#Z#^#i#l$`$b$n%ShSO[mo!q!r#b#d$]$g$i$pSr]$}S!Qk%O{%TRWdegh!V!s!{!}#O#S#Z#^#i#l$`$b$n%Q%S!mQORW[]deghkmo!V!q!r!s!{!}#O#S#Z#^#b#d#i#l$]$`$b$g$i$n$p$}%O%Q%S!]VORW[degh!V!q!r!s!{!}#O#S#Z#^#b#d#i#l$]$`$b$g$i$n$pQ#k#OR#s#ST#n#O#SQ$R#lQ$l$cR$y$tV$Q#l$c$tS!Ws!XW!`tu!a!eT#V!h#WeYO[!q!r#b#d$]$g$i$pdYO[!q!r#b#d$]$g$i$pQ$^#yR$h$[",
  nodeNames: "⚠ LineComment Statements Identifier Sphere { center VectorStart Number ( ) Div Lt Gt VectorEnd radius material Metal Dielectric Lambertian Perlin Checker Solid Light translate rotateX rotateY rotateZ } Box vertex Plane Objs Camera lookfrom lookat up angle dist_to_focus Config width height samples_per_pixel max_depth background if else while break continue",
  maxTerm: 104,
  skippedNodes: [0,1],
  repeatNodeCount: 10,
  tokenData: "M[~RxXY#oYZ#o]^#opq#oqr$Qvw$_xy$jyz$oz{$t{|$y|}%O}!O%T!P!Q%Y!Q![%y![!]&d!]!^&i!^!_&n!_!`&}!`!a'[!c!}'k#R#S'k#T#U'|#U#V*a#V#W'k#W#X/Y#X#['k#[#]5a#]#`'k#`#a8]#a#b=W#b#g'k#g#hAb#h#i'k#i#jIf#j#k'k#k#lJb#l#o'k#o#pLu#p#qLz#q#rMV~#tS!`~XY#oYZ#o]^#opq#o~$VP!l~!_!`$Y~$_O!v~~$bPvw$e~$jO!r~~$oOX~~$tOY~~$yO!m~~%OO!n~~%TO!k~~%YO!o~~%_PZ~!P!Q%b~%gSP~OY%bZ;'S%b;'S;=`%s<%lO%b~%vP;=`<%l%b~&OQW~!O!P&U!Q![%y~&XP!Q![&[~&aPW~!Q![&[~&iO!d~~&nO#Y~~&uPV~[~!_!`&x~&}O!s~~'SP#X~!_!`'V~'[O!u~~'cP^~]~!_!`'f~'kO!t~P'pSRP!Q!['k!c!}'k#R#S'k#T#o'kR(RURP!Q!['k!c!}'k#R#S'k#T#b'k#b#c(e#c#o'kR(jURP!Q!['k!c!}'k#R#S'k#T#Z'k#Z#[(|#[#o'kR)RURP!Q!['k!c!}'k#R#S'k#T#`'k#`#a)e#a#o'kR)jURP!Q!['k!c!}'k#R#S'k#T#X'k#X#Y)|#Y#o'kR*TSuQRP!Q!['k!c!}'k#R#S'k#T#o'kR*fTRP!Q!['k!c!}'k#R#S'k#T#U*u#U#o'kR*zURP!Q!['k!c!}'k#R#S'k#T#V'k#V#W+^#W#o'kR+cURP!Q!['k!c!}'k#R#S'k#T#_'k#_#`+u#`#o'kR+zURP!Q!['k!c!}'k#R#S'k#T#Z'k#Z#[,^#[#o'kR,cURP!Q!['k!c!}'k#R#S'k#T#f'k#f#g,u#g#o'kR,zURP!Q!['k!c!}'k#R#S'k#T#c'k#c#d-^#d#o'kR-cURP!Q!['k!c!}'k#R#S'k#T#i'k#i#j-u#j#o'kR-zURP!Q!['k!c!}'k#R#S'k#T#b'k#b#c.^#c#o'kR.cURP!Q!['k!c!}'k#R#S'k#T#W'k#W#X.u#X#o'kR.|S|QRP!Q!['k!c!}'k#R#S'k#T#o'kR/_URP!Q!['k!c!}'k#R#S'k#T#]'k#]#^/q#^#o'kR/vURP!Q!['k!c!}'k#R#S'k#T#g'k#g#h0Y#h#o'kR0_URP!Q!['k!c!}'k#R#S'k#T#h'k#h#i0q#i#o'kR0vSRP!Q!['k!c!}'k#R#S1S#T#o'kR1XURP!Q!['k!c!}'k#R#S'k#T#h'k#h#i1k#i#o'kR1pURP!Q!['k!c!}'k#R#S'k#T#c'k#c#d2S#d#o'kR2XSRP!Q!['k!c!}'k#R#S2e#T#o'kR2jURP!Q!['k!c!}'k#R#S'k#T#Y'k#Y#Z2|#Z#o'kR3RURP!Q!['k!c!}'k#R#S'k#T#c'k#c#d3e#d#o'kR3jURP!Q!['k!c!}'k#R#S'k#T#V'k#V#W3|#W#o'kR4RURP!Q!['k!c!}'k#R#S'k#T#i'k#i#j4e#j#o'kR4jURP!Q!['k!c!}'k#R#S'k#T#g'k#g#h4|#h#o'kR5TSvQRP!Q!['k!c!}'k#R#S'k#T#o'kR5fURP!Q!['k!c!}'k#R#S'k#T#X'k#X#Y5x#Y#o'kR5}URP!Q!['k!c!}'k#R#S'k#T#]'k#]#^6a#^#o'kR6fURP!Q!['k!c!}'k#R#S'k#T#Z'k#Z#[6x#[#o'kR6}URP!Q!['k!c!}'k#R#S'k#T#['k#[#]7a#]#o'kR7fURP!Q!['k!c!}'k#R#S'k#T#h'k#h#i7x#i#o'kR8PSyQRP!Q!['k!c!}'k#R#S'k#T#o'kR8bURP!Q!['k!c!}'k#R#S'k#T#c'k#c#d8t#d#o'kR8yURP!Q!['k!c!}'k#R#S'k#T#c'k#c#d9]#d#o'kR9bURP!Q!['k!c!}'k#R#S'k#T#_'k#_#`9t#`#o'kR9yVRP!Q!['k!c!}'k#R#S'k#T#U:`#U#Y'k#Y#Z;[#Z#o'kR:eURP!Q!['k!c!}'k#R#S'k#T#h'k#h#i:w#i#o'kR;OSsQRP!Q!['k!c!}'k#R#S'k#T#o'kR;aURP!Q!['k!c!}'k#R#S'k#T#f'k#f#g;s#g#o'kR;xURP!Q!['k!c!}'k#R#S'k#T#c'k#c#d<[#d#o'kR<aURP!Q!['k!c!}'k#R#S'k#T#a'k#a#b<s#b#o'kR<zSrQRP!Q!['k!c!}'k#R#S'k#T#o'kR=]TRP!Q!['k!c!}'k#R#S'k#T#U=l#U#o'kR=qURP!Q!['k!c!}'k#R#S'k#T#l'k#l#m>T#m#o'kR>YSRP!Q!['k!c!}'k#R#S>f#T#o'kR>kURP!Q!['k!c!}'k#R#S'k#T#W'k#W#X>}#X#o'kR?SURP!Q!['k!c!}'k#R#S'k#T#X'k#X#Y?f#Y#o'kR?kURP!Q!['k!c!}'k#R#S'k#T#d'k#d#e?}#e#o'kR@SURP!Q!['k!c!}'k#R#S'k#T#h'k#h#i@f#i#o'kR@kURP!Q!['k!c!}'k#R#S'k#T#['k#[#]@}#]#o'kRAUS{QRP!Q!['k!c!}'k#R#S'k#T#o'kRAgTRP!Q!['k!c!}'k#R#S'k#T#UAv#U#o'kRA{URP!Q!['k!c!}'k#R#S'k#T#a'k#a#bB_#b#o'kRBdURP!Q!['k!c!}'k#R#S'k#T#d'k#d#eBv#e#o'kRB{URP!Q!['k!c!}'k#R#S'k#T#`'k#`#aC_#a#o'kRCdURP!Q!['k!c!}'k#R#S'k#T#X'k#X#YCv#Y#o'kRC{URP!Q!['k!c!}'k#R#S'k#T#g'k#g#hD_#h#o'kRDdSRP!Q!['k!c!}'k#R#SDp#T#o'kRDuURP!Q!['k!c!}'k#R#S'k#T#d'k#d#eEX#e#o'kRE^URP!Q!['k!c!}'k#R#S'k#T#X'k#X#YEp#Y#o'kREuURP!Q!['k!c!}'k#R#S'k#T#f'k#f#gFX#g#o'kRF^SRP!Q!['k!c!}'k#R#SFj#T#o'kRFoURP!Q!['k!c!}'k#R#S'k#T#d'k#d#eGR#e#o'kRGWURP!Q!['k!c!}'k#R#S'k#T#]'k#]#^Gj#^#o'kRGoURP!Q!['k!c!}'k#R#S'k#T#l'k#l#mHR#m#o'kRHWURP!Q!['k!c!}'k#R#S'k#T#X'k#X#YHj#Y#o'kRHoURP!Q!['k!c!}'k#R#S'k#T#`'k#`#aIR#a#o'kRIYSzQRP!Q!['k!c!}'k#R#S'k#T#o'kRIkURP!Q!['k!c!}'k#R#S'k#T#d'k#d#eI}#e#o'kRJUStQRP!Q!['k!c!}'k#R#S'k#T#o'kRJgURP!Q!['k!c!}'k#R#S'k#T#]'k#]#^Jy#^#o'kRKOURP!Q!['k!c!}'k#R#S'k#T#W'k#W#XKb#X#o'kRKgURP!Q!['k!c!}'k#R#S'k#T#h'k#h#iKy#i#o'kRLOURP!Q!['k!c!}'k#R#S'k#T#['k#[#]Lb#]#o'kRLiSxQRP!Q!['k!c!}'k#R#S'k#T#o'k~LzOT~~L}P#p#qMQ~MVO!q~~M[Ol~",
  tokenizers: [0, 1],
  topRules: {"Statements":[0,2]},
  specialized: [{term: 3, get: (value) => spec_Identifier[value] || -1}],
  tokenPrec: 1573
});

const KOVRayLanguage = language.LRLanguage.define({
    parser: parser.configure({
        props: [
            // indentNodeProp.add({
            //   Application: delimitedIndent({closing: ")", align: false})
            // }),
            // foldNodeProp.add({
            //   Application: foldInside
            // }),
            highlight.styleTags({
                Identifier: highlight.tags.literal,
                Number: highlight.tags.number,
                LineComment: highlight.tags.lineComment,
                "( )": highlight.tags.paren,
                "{ }": highlight.tags.brace,
                "Camera": highlight.tags.keyword,
                "Config": highlight.tags.keyword,
                // object
                "Sphere": highlight.tags.labelName,
                "Box": highlight.tags.labelName,
                "Plane": highlight.tags.labelName,
                "Objs": highlight.tags.labelName,
                // material
                "Lambertian": highlight.tags.className,
                "Metal": highlight.tags.className,
                "Dielectric": highlight.tags.className,
                "Light": highlight.tags.className,
                // texture
                "Solid": highlight.tags.typeName,
                "Checker": highlight.tags.typeName,
                "Perlin": highlight.tags.typeName,
                // vector bracket
                VectorStart: highlight.tags.angleBracket,
                VectorEnd: highlight.tags.angleBracket,
                // property names
                "center": highlight.tags.keyword,
                "radius": highlight.tags.keyword,
                "vertex": highlight.tags.keyword,
                "material": highlight.tags.keyword,
                "translate": highlight.tags.keyword,
                "rotateX": highlight.tags.keyword,
                "rotateY": highlight.tags.keyword,
                "rotateZ": highlight.tags.keyword,
                "lookfrom": highlight.tags.keyword,
                "lookat": highlight.tags.keyword,
                "up": highlight.tags.keyword,
                "angle": highlight.tags.keyword,
                "dist_to_focus": highlight.tags.keyword,
                "width": highlight.tags.keyword,
                "height": highlight.tags.keyword,
                "samples_per_pixel": highlight.tags.keyword,
                "max_depth": highlight.tags.keyword,
                "background": highlight.tags.keyword,
                // keywords
                "if": highlight.tags.keyword,
                "else": highlight.tags.keyword,
                "while": highlight.tags.keyword,
                "break": highlight.tags.keyword,
                "continue": highlight.tags.keyword,
            })
        ]
    }),
    languageData: {
        commentTokens: { line: "//" }
    }
});
function KOVRay() {
    return new language.LanguageSupport(KOVRayLanguage);
}

exports.KOVRay = KOVRay;
exports.KOVRayLanguage = KOVRayLanguage;
