//jshint maxerr: 30000000
var ftuesetup,admintrig,dbgbkp,vipexp,mmm,zya,zyb,zyc,thv,emv,ispokerplay,cxc,wycd,occupado,pvpwager,pvpselection,rngd,ada,tempHold,pokerstreak,zmd,inemoji,inevent,ishidden,vpp,recip,dki,pks,pkw,pkr,pkj,pka,cxy,pkb,giff,gitt,pkc,gft,dms,m43,m44,dmz,m45,m46,m47,m48,g10id,g11id,g11s,g10s,pbindex,ftuestep,isprememo,sound,notinftue,accountstring, ticketstring,eventcdk,leaguehistory,specialbadge4,tutbg,triv,trivia,lastbg,leaguemax,triviawrong,trone,trtwo,resv1,resv2,specialbadge3,leaguerank, echip,lbz, highrank,istut,canwxsel,testP,ftueflag,task,leaguedata,tiFa,errC,dfs,canwysel,wylist,ispairing,kenofix,eloscore, ftuetemp,wxselect,wysum, wytimes,timeZone, wychosen, screencomtemp, sseflag, tempone, globtick, tick, chatTime, ti, pvpdata, oppodata, rtlo, ols, chm, olw,xaa,xab,xac,yaa,yab,yac,zaa,zab,zac, swp,zom,zsi,wxc,wyc,wzc,zlj,zlw,zls, dmeee, aa, matchvar, match, timer,begin, sdfg, ontr, mend, currentScreen, msgk, globalblocked, olp, joinid, randomstreak, randomtrig, wtbf, adstr, rst, kZ, temsc, tasklog, blocked, pvptrig, lot, ispvp, iap, pay, randon, pvpstreak, ij, igsku, xxcz, pst, ele,tettt, skutrig, devlist, vit,ttttttt, vipst,movie, txE, txC,txS,aaaa, cuxx, lottos, bgm, cdc, fbgm, avindex, lbt, temHold, nto, aces, objj, emoji, lott, tti, lotto, cf, currentid, avl, zn, zm, zk, zl, un, clicks, ztime, za, spenting, coo, inds, ind3, ind4, reall, ltd, lbh, fxx, adv, twj, tsj, tgp, m31, m32, m33, m34, m35, m36, m37, m38, m39,m40,m42 ,m41, seasons, zb, inv, zc, zd, ze, kf, zf, zg, zh, zi, zj, randPick, isDisabled, ftg, ticket, xx, moviestre, ssw, moviestrc, pad, film2, film, ran10, ran11, ran12, sumarys, p, q, indexs, mtt, nofest, logText, betText, chap, curBet, from, curNumber, mtt, isperfect, isfest, flgs, trgf, pPass, dPass, rand1, rand2, curlb, rand3, wap, lang, ind1, ind2, bugset, estt, wac, rand4, rand5, waf, rand6, kim, rand7, cz, rand8, rand9, rotation, indexing, curad, messaging, clicked, cL, tism, coodown, kz, hasmessage, onespin, onejack, onestreak, twospin, twoguess, twostreak, thrtry, ttreak, fourbet, fourspec, fourstreak, fivescrat, fivemega, fivestreak, thrguess, sixspin, sixgold, sixstreak, sevthrow, sevspec, sevstreak, eigbet, dayed, eigdouble, eigstreak, login, winrand, timeAward, h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14, h15, h16, h17, h18, h19, h20, h21, h22, war, h23, h24, h25, h26, h27, h28, h29, h30, lb, data, ban, regText, specialbadgetwo, playTime, specialbadgeone, tttim, exp, loopy, lastclaim, claimable, g1id, g2id, g3id, g4id, g5id, g6id, g7id, g8id, g9id, g1s, g2s, g3s, g4s, g5s, g6s, g7s, g8s, g9s, havebeat, temptwo, wam, tempthree, sirand, tempfour, tempfive, tempsix, tempseven, tempeight, payout, account, from, gain, betLog, text, glog, playerFull, playerscore, hasf, dealerFull, jb, js, jp, gs, otfuse, double, inmisc, pb, ps, pg, pr, wt, statS, ka, ww, ws, wj, ac, wager, selected, betfour, onepos, twopos, thrpos, forpos, fivpos, trigg, time, sixpos, arrow, score, d1, d2, d3, d4, kx, kj, d5, d6, d7, d8, d9, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, wone, wtwo, wthr, wfor, paysss, desc, tt, ss, sp, sj, sa, rs, rp, rb, ks, kp, tk, kj, hs, hp, tr, cs, cg, tc, cj, v, lBo, uBo, salt, s2;
v = lBo = uBo = salt = s2 = "9";
var pokers = [{c:"",n:-1,s:0},{c:"",n:-1,s:0},{c:"",n:-1,s:0},{c:"",n:-1,s:0},{c:"",n:-1,s:0}];
var pbss = [[" online player","位在线玩家","", ""],[" new chat","条新聊天","", ""],["Sweepstakes ends in ","抽奖赛季还剩","",""],["Sweepstakes win chance ","抽奖赛季赢率","", "%      "],["Taskmasters ends in ","任务达人还剩","", ""],["Taskmaster done ","任务达人已完成","", "%"],["Log-in lotto at ","登录彩券在","","%"],["Log-in lotto prize ","登录彩券头奖","",""],["League ends in ","排位赛还剩","",""],["League set to be ","排位赛预计会","",""],[" incomplete daily mission","个未完成的每日任务","",""],[" gift today","在今天送礼","",""]];
var pdata = [0,0,0,0,0,0,0,0,0,0,0,0];
var ftuewelcome = ["button206","button197","image41","button40","button32","image21","text_area61","text_input1","image29"];
payout=ftuestep=dbgbkp=errC=cuxx=cxc=trigg=vipexp=wycd=claimable=clicked=canwysel=kenofix=pPass=dfs=dPass=isDisabled=ontr=mend=ispairing=timer=isprememo=istut=begin=ispvp=skutrig=tempHold=sseflag=wysum=ftuesetup=pvpwager=zya=dms=pkc=pkb=pka=inemoji=zmd=inevent=zyb=vpp=zyc=ishidden=ispokerplay=giff=cxy=gitt=ada=pokerstreak=dmz=leaguerank=echip=pbindex=lbz=trone=triv=trivia=leaguemax=triviawrong=trtwo=resv1=resv2=specialbadge4=specialbadge3=highrank=wytimes=wxselect=wychosen= highrank=coodown = pst = nto = globtick = tick= chatTime= joinid= wtbf = rst = ols=wxc=xaa=xab=xac=yaa=yab=yac=zaa=zab=zac=wyc=wzc= chm = olw = dmeee= randomstreak = iap = blocked = randomtrig = pay = lot = pvpstreak = pvptrig = xxcz = aaaa = hasmessage = ele = tti = tettt= avindex = cdc = bgm = ttttttt = lbt = temHold = fbgm = za = zb = zc = zd = avl = ze = zf = zg = zh = lott = zi = un = zj = ltd = adv = twj = m31 = m32 = zn = zm = zk = zl = m33 = m34 = m35 = coo = inds = lbh =sdfg= ind3 = ind4 = m36 = fxx = tsj = tgp = film = trgf = curBet = ssw = lang = nofest = indexs = isfest = chap = curNumber = mtt = isperfect = rotation = tism = p = flgs = bugset = wap = wac = ind1 = ind2 = curlb = indexing = lang = from = onespin = m37= m38= m39=m40=m42 =m41=waf = onejack = onestreak = twospin = twoguess = thrtry = thrguess = ttreak = twostreak = fourbet = fourspec = fourstreak = fivescrat = fivemega = fivestreak = sixspin = sixgold = sixstreak = sevthrow = sevspec = sevstreak = eigbet = eigdouble = eigstreak = login = winrand = timeAward = h1 = h2 = h3 = h4 = h5 = h6 = h7 = h8 = h9 = h10 = h11 = h12 = h13 = h14 = h15 = h16 = h17 = h18 = h19 = h20 = h21 = h22 = h23 = h24 = h25 = h26 = h27 = h28 = h29 = h30 = specialbadgetwo = ban = playTime = specialbadgeone = tttim = exp = g1id = g2id = g3id = g4id = g5id = g6id = g7id = g8id = g9id = g9s = g1s = g2s = lastclaim = g3s = g4s = g5s = g6s = g7s = g8s = havebeat =gain = wam = war = selected = sirand = betfour = kj =kz= ka = inmisc =dayed = statS = playerscore = hasf = tempone = temptwo = tempthree = tempfour = tempfive = tempsix = tempseven = tempeight = vipst = notinftue =occupado= 0;
betLog = text = regText = kZ = from = logText = temsc = adstr=betText = moviestre = moviestrc = pad = txE = txC = txS= sumarys=wylist =timeZone= "";
var wxselected = [0,0,0,0,0,0,0,0,0,0];
lastbg = "cg3";
gft = Math.floor(getTime()/86400000) + 3;
var sounddb = [["assets/click.mp3","assets/gclic.mp3","assets/cclis.mp3","assets/capt.mp3","assets/193.mp3","assets/pa1.mp3","assets/pb1.mp3","assets/pc1.mp3","assets/tx1.mp3","assets/bird.mp3","assets/zclc.mp3"],["assets/open.mp3","assets/inv_open.mp3","assets/main.mp3","assets/cargo.mp3","assets/126.mp3","assets/pa2.mp3","assets/pb2.mp3","assets/pc2.mp3","assets/tx2.mp3","assets/Water01.mp3","assets/imu.mp3"],["assets/ballset.mp3","assets/crate.mp3","assets/glossy.mp3","assets/tradw.mp3","assets/031.mp3","assets/pa3.mp3","assets/pb3.mp3","assets/pc3.mp3","assets/tx3.mp3","assets/missho.mp3","assets/zbals.mp3"],["assets/cheer.mp3","assets/buy_gems.mp3","assets/one8.mp3","assets/bells2.mp3","assets/003.mp3","assets/pa4.mp3","assets/pb4.mp3","assets/pc4.mp3","assets/tx4.mp3","assets/mjos.mp3","assets/winz.mp3"],["assets/win.mp3","assets/player-piano.mp3","assets/applause.mp3","assets/bells3.mp3","assets/174.mp3","assets/pa5.mp3","assets/pb5.mp3","assets/pc5.mp3","assets/tx5.mp3","assets/27cj.mp3","assets/wwnz.mp3"],["assets/closing.mp3","assets/clo.mp3","assets/warni.mp3","assets/bub.mp3","assets/002.mp3","assets/pa6.mp3","assets/pb6.mp3","assets/pc6.mp3","assets/tx6.mp3","assets/2cl.mp3","assets/cloz.mp3"],["assets/cl.mp3","assets/boost.mp3","assets/pins.mp3","assets/plop.mp3","assets/190.mp3","assets/pa7.mp3","assets/pb7.mp3","assets/pc7.mp3","assets/tx7.mp3","assets/ccla.mp3","assets/scan.mp3"],["assets/select.mp3","assets/stamp.mp3","assets/gamest.mp3","assets/bsav.mp3","assets/001.mp3","assets/pa8.mp3","assets/pb8.mp3","assets/pc8.mp3","assets/tx8.mp3","assets/gull.mp3","assets/osso.mp3"],["assets/bell.mp3","assets/buy.mp3","assets/one7.mp3","assets/bells1.mp3","assets/237.mp3","assets/pa9.mp3","assets/pb9.mp3","assets/pc9.mp3","assets/tx9.mp3","assets/26be.mp3","assets/belz.mp3"],["assets/mys.mp3","assets/carn.mp3","assets/uimod.mp3","assets/dean.mp3","assets/161.mp3","assets/pa10.mp3","assets/pb10.mp3","assets/pc10.mp3","assets/tx10.mp3","assets/15r.mp3","assets/nys.mp3"],["assets/chip.mp3","assets/chp.mp3","assets/cchi.mp3","assets/chipp.mp3","assets/105.mp3","assets/pa11.mp3","assets/pb11.mp3","assets/pc11.mp3","assets/tx11.mp3","assets/chipm.mp3","assets/ichps.mp3"],["assets/wk.mp3","assets/gui_click.mp3","assets/wks.mp3","assets/bpop.mp3","assets/089.mp3","assets/pa12.mp3","assets/pb12.mp3","assets/pc12.mp3","assets/tx12.mp3","assets/wkp.mp3","assets/dzx.mp3"],["assets/lose.mp3","assets/missclick.mp3","assets/gameov.mp3","assets/osl.mp3","assets/088.mp3","assets/pa13.mp3","assets/pb13.mp3","assets/pc13.mp3","assets/tx13.mp3","assets/17l.mp3","assets/losz.mp3"],["assets/scratch.mp3","assets/slscr.mp3","assets/fuse.mp3","assets/sfxx.mp3","assets/046.mp3","assets/pa14.mp3","assets/pb14.mp3","assets/pc14.mp3","assets/tx14.mp3","assets/1scr.mp3","assets/pada.mp3"],["assets/slot.mp3","assets/clicks.mp3","assets/whe.mp3","assets/sots.mp3","assets/071.mp3","assets/pa15.mp3","assets/pb15.mp3","assets/pc15.mp3","assets/tx15.mp3","assets/7slo.mp3","assets/cazs.mp3"],["assets/alien.mp3","assets/alien.mp3","assets/alien.mp3","assets/alien.mp3","assets/alien.mp3","assets/alien2.mp3","assets/alien2.mp3","assets/alien2.mp3","assets/alien2.mp3","assets/alien2.mp3","assets/alien2.mp3"],["assets/belz.mp3","assets/belz.mp3","assets/belz.mp3","assets/belz.mp3","assets/belz.mp3","assets/belz.mp3","assets/belz.mp3","assets/belz.mp3","assets/belz.mp3","assets/belz.mp3","assets/belz.mp3"]];
var festeng = ["","\x57\x69\x6E\x74\x65\x72\x74\x69\x64\x65\x20\x69\x73\x20\x68\x65\x72\x65\x2E\x20\x45\x6D\x62\x72\x61\x63\x65\x20\x74\x68\x65\x20\x73\x6E\x6F\x77\x20\x61\x6E\x64\x20\x65\x6E\x6A\x6F\x79\x20\x74\x68\x65\x20\x67\x61\x6D\x65\x21","\x53\x70\x72\x69\x6E\x67\x20\x66\x65\x73\x74\x69\x76\x61\x6C\x20\x69\x73\x20\x68\x65\x72\x65\x2E\x20\x49\x74\x27\x73\x20\x6C\x69\x6B\x65\x20\x74\x68\x61\x6E\x6B\x73\x67\x69\x76\x69\x6E\x67\x2C\x20\x62\x75\x74\x20\x77\x69\x74\x68\x20\x66\x69\x72\x65\x77\x6F\x72\x6B\x73\x21","\x41\x6C\x6C\x20\x74\x68\x65\x20\x75\x6E\x70\x61\x69\x64\x20\x6C\x65\x70\x72\x65\x63\x68\x61\x75\x6E\x20\x69\x6E\x74\x65\x72\x6E\x73\x20\x77\x69\x73\x68\x20\x79\x6F\x75\x20\x67\x6F\x6F\x64\x20\x6C\x75\x63\x6B\x21","\x50\x6C\x65\x61\x73\x65\x20\x62\x65\x20\x6B\x69\x6E\x64\x20\x74\x6F\x20\x6F\x75\x72\x20\x70\x6C\x61\x6E\x65\x74\x2E\x20\x52\x65\x64\x75\x63\x65\x2C\x20\x72\x65\x75\x73\x65\x2C\x20\x72\x65\x63\x79\x63\x6C\x65\x2E","\x46\x6F\x75\x72\x74\x68\x20\x6F\x66\x20\x4A\x75\x6C\x79\x20\x69\x73\x20\x63\x6F\x6D\x69\x6E\x67\x21\x20\x48\x65\x6C\x6C\x20\x79\x65\x61\x68\x20\x62\x72\x6F\x74\x68\x65\x72\x2C\x20\x4D\x27\x65\x72\x69\x63\x61\x21","\x4E\x6F\x74\x69\x63\x65\x20\x74\x68\x65\x20\x66\x75\x6C\x6C\x20\x6D\x6F\x6F\x6E\x3F\x20\x4D\x69\x64\x20\x61\x75\x74\x75\x6D\x6E\x20\x66\x65\x73\x74\x69\x76\x61\x6C\x20\x69\x73\x20\x63\x6F\x6D\x69\x6E\x67\x21","\x53\x70\x6F\x6F\x6B\x79\x20\x63\x61\x73\x74\x6C\x65\x21\x20\x45\x6E\x6A\x6F\x79\x20\x61\x20\x68\x61\x6C\x6C\x6F\x77\x65\x65\x6E\x2D\x69\x73\x68\x20\x63\x61\x73\x69\x6E\x6F\x21","\x57\x68\x65\x74\x68\x65\x72\x20\x79\x6F\x75\x20\x6C\x69\x6B\x65\x20\x69\x74\x20\x6F\x72\x20\x6E\x6F\x74\x2C\x20\x74\x69\x6D\x65\x20\x74\x6F\x20\x76\x69\x73\x69\x74\x20\x79\x6F\x75\x72\x20\x72\x65\x6C\x61\x74\x69\x76\x65\x73\x2E\x20\x49\x20\x68\x61\x74\x65\x20\x54\x68\x61\x6E\x6B\x73\x67\x69\x76\x69\x6E\x67\x2E","\x49\x74\x27\x73\x20\x62\x65\x67\x69\x6E\x6E\x69\x6E\x67\x20\x74\x6F\x20\x6C\x6F\x6F\x6B\x20\x61\x20\x6C\x6F\x74\x20\x6C\x69\x6B\x65\x20\x43\x68\x72\x69\x73\x74\x6D\x61\x73\x2E\x20\x47\x65\x65\x20\x74\x68\x65\x20\x79\x65\x61\x72\x20\x73\x77\x75\x6E\x67\x20\x62\x79\x20\x66\x61\x73\x74\x2E","\x41\x6C\x6C\x20\x79\x6F\x75\x72\x20\x63\x72\x65\x64\x69\x74\x20\x69\x73\x20\x67\x6F\x6E\x65\x2E\x0A\x47\x65\x74\x20\x66\x6F\x6F\x6C\x65\x64\x20\x68\x61\x68\x61","\x44\x65\x64\x69\x63\x61\x74\x65\x64\x20\x74\x6F\x20\x61\x6C\x6C\x20\x63\x72\x65\x61\x74\x6F\x72\x73\x2E\x20\x41\x72\x74\x20\x68\x61\x73\x20\x6E\x6F\x20\x62\x6F\x75\x6E\x64\x61\x72\x79\x2E\x20\x4B\x65\x65\x70\x20\x70\x75\x73\x68\x69\x6E\x67\x2E","\x45\x6E\x6A\x6F\x79\x20\x74\x68\x65\x20\x73\x75\x6D\x6D\x65\x72\x20\x62\x72\x65\x61\x6B\x21\x20\x53\x70\x65\x6E\x64\x20\x74\x69\x6D\x65\x20\x6F\x6E\x20\x79\x6F\x75\x72\x73\x65\x6C\x66\x20\x61\x6E\x64\x20\x67\x65\x74\x20\x72\x65\x61\x64\x79\x20\x66\x6F\x72\x20\x74\x68\x65\x20\x63\x68\x61\x6C\x6C\x65\x6E\x67\x65\x73\x20\x61\x68\x65\x61\x64\x21"];
var festch = ["","\u51B0\u96EA\u8282\u6765\u4E86\uFF0C\u62E5\u62B1\u96EA\uFF0C\u73A9\u6E38\u620F\uFF01","\u6625\u8282\u5C31\u50CF\u611F\u6069\u8282\uFF0C\u52A0\u4E0A\u70DF\u82B1\uFF01","\u6240\u6709\u65E0\u85AA\u5C0F\u5996\u7CBE\u5B9E\u4E60\u751F\u795D\u4F60\u597D\u8FD0\uFF01","\u8BF7\u5584\u5F85\u6211\u4EEC\u7684\u661F\u7403\u3002\u5C11\u7528\uFF0C\u518D\u5229\u7528\uFF0C\u56DE\u6536\u3002","\u4E03\u6708\u56DB\u65E5\u6765\u4E86\uFF01\u89C1\u9B3C\uFF0C\u5144\u5F1F\uFF0C\x4D\x27\x65\x72\x69\x63\x61\uFF01","\u6CE8\u610F\u5230\u6EE1\u6708\u4E86\u5417\uFF1F\u4E2D\u79CB\u8282\u5230\u4E86\uFF01","\u5E7D\u7075\u57CE\u5821\uFF01\u4EAB\u53D7\u4E00\u4E2A\u4E07\u5723\u8282\u98CE\u683C\u7684\u8D4C\u573A\uFF01","\u4E0D\u7BA1\u4F60\u559C\u4E0D\u559C\u6B22\uFF0C\u662F\u65F6\u5019\u62DC\u8BBF\u4EB2\u621A\u4E86\u3002\u6211\u8BA8\u538C\u611F\u6069\u8282\u3002","\x49\x74\x27\x73\x20\x62\x65\x67\x69\x6E\x6E\x69\x6E\x67\x20\x74\x6F\x20\x6C\x6F\x6F\x6B\x20\x61\x6C\x6F\x74\x20\x6C\x69\x6B\x65\x20\x43\x68\x72\x69\x73\x74\x6D\x61\x73\x2E\x20\u54CE\u5440\uFF0C\u8FD9\u4E00\u5E74\u8FC7\u5F97\u5F88\u5FEB\u3002","\u4F60\u7684\u70B9\u6570\u88AB\u6E05\u96F6\u4E86\u3002\x0A\u4E0A\u5F53\u4E86\uFF1F\u54C8\u54C8","\u732E\u7ED9\u6240\u6709\u7684\u521B\u4F5C\u8005\u3002\u827A\u672F\u6CA1\u6709\u8FB9\u754C\uFF0C\u8BF7\u7EE7\u7EED\u52AA\u529B\u3002","\u4EAB\u53D7\u6691\u5047\uFF01\u5728\u81EA\u5DF1\u8EAB\u4E0A\u82B1\u4E9B\u65F6\u95F4\uFF0C\u4E3A\u672A\u6765\u7684\u6311\u6218\u505A\u597D\u51C6\u5907\uFF01"];
var nofesteng = ["","\x4E\x65\x78\x74\x20\x66\x65\x73\x74\x69\x76\x61\x6C\x3A\x20\x57\x69\x6E\x74\x65\x72\x74\x69\x64\x65\x0A\x53\x74\x61\x72\x74\x69\x6E\x67\x20\x4A\x61\x6E\x2E\x20\x31","\x4E\x65\x78\x74\x20\x66\x65\x73\x74\x69\x76\x61\x6C\x3A\x20\x53\x70\x72\x69\x6E\x67\x20\x46\x65\x73\x74\x69\x76\x61\x6C\x0A\x53\x74\x61\x72\x74\x69\x6E\x67\x20\x4A\x61\x6E\x2E\x20\x32\x33","\x4E\x65\x78\x74\x20\x66\x65\x73\x74\x69\x76\x61\x6C\x3A\x20\x53\x74\x2E\x20\x50\x61\x74\x72\x69\x63\x6B\x27\x73\x20\x44\x61\x79\x0A\x53\x74\x61\x72\x74\x69\x6E\x67\x20\x4D\x61\x72\x2E\x20\x35","\x4E\x65\x78\x74\x20\x66\x65\x73\x74\x69\x76\x61\x6C\x3A\x20\x3F\x3F\x3F\x3F\x3F\x20\x3F\x3F\x3F\x3F\x3F\x0A\x53\x74\x61\x72\x74\x69\x6E\x67\x20\x3F\x3F\x3F\x2E\x20\x3F","\x4E\x65\x78\x74\x20\x66\x65\x73\x74\x69\x76\x61\x6C\x3A\x20\x45\x61\x72\x74\x68\x20\x44\x61\x79\x0A\x53\x74\x61\x72\x74\x69\x6E\x67\x20\x41\x70\x72\x2E\x20\x31\x30","\x4E\x65\x78\x74\x20\x66\x65\x73\x74\x69\x76\x61\x6C\x3A\x20\x41\x72\x74\x20\x46\x65\x73\x74\x69\x76\x61\x6C\x0A\x53\x74\x61\x72\x74\x69\x6E\x67\x20\x4D\x61\x79\x2E\x20\x35","\x4E\x65\x78\x74\x20\x66\x65\x73\x74\x69\x76\x61\x6C\x3A\x20\x49\x6E\x64\x65\x70\x65\x6E\x64\x65\x6E\x63\x65\x20\x64\x61\x79\x0A\x53\x74\x61\x72\x74\x69\x6E\x67\x20\x4A\x75\x6E\x2E\x20\x32\x33","\x4E\x65\x78\x74\x20\x66\x65\x73\x74\x69\x76\x61\x6C\x3A\x20\x53\x75\x6D\x6D\x65\x72\x20\x42\x72\x65\x61\x6B\x0A\x53\x74\x61\x72\x74\x69\x6E\x67\x20\x4A\x75\x6C\x2E\x20\x32\x35","\x4E\x65\x78\x74\x20\x66\x65\x73\x74\x69\x76\x61\x6C\x3A\x20\x4D\x69\x64\x2D\x41\x75\x74\x75\x6D\x6E\x20\x46\x65\x73\x74\x69\x76\x61\x6C\x0A\x53\x74\x61\x72\x74\x69\x6E\x67\x20\x53\x65\x70\x2E\x20\x38","\x4E\x65\x78\x74\x20\x66\x65\x73\x74\x69\x76\x61\x6C\x3A\x20\x48\x61\x6C\x6C\x6F\x77\x65\x65\x6E\x0A\x53\x74\x61\x72\x74\x69\x6E\x67\x20\x4F\x63\x74\x2E\x20\x31\x36","\x4E\x65\x78\x74\x20\x66\x65\x73\x74\x69\x76\x61\x6C\x3A\x20\x54\x68\x61\x6E\x6B\x73\x67\x69\x76\x69\x6E\x67\x0A\x53\x74\x61\x72\x74\x69\x6E\x67\x20\x4E\x6F\x76\x2E\x20\x31\x31","\x4E\x65\x78\x74\x20\x66\x65\x73\x74\x69\x76\x61\x6C\x3A\x20\x43\x68\x72\x69\x73\x74\x6D\x61\x73\x0A\x53\x74\x61\x72\x74\x69\x6E\x67\x20\x44\x65\x63\x2E\x20\x31\x30"];
var nofestch = ["","\u4E0B\u4E00\u4E2A\u8282\u65E5\uFF1A\u51B0\u96EA\u8282\x0A\x31\x20\u6708\x20\x31\x20\u65E5\u5F00\u59CB","\u4E0B\u4E00\u4E2A\u8282\u65E5\uFF1A\u6625\u8282\x0A\x31\x20\u6708\x20\x32\x33\x20\u65E5\u5F00\u59CB","\u4E0B\u4E00\u4E2A\u8282\u65E5\uFF1A\u5723\u5E15\u7279\u91CC\u514B\u8282\x0A\x33\x20\u6708\x20\x35\x20\u65E5\u5F00\u59CB","\u4E0B\u4E00\u4E2A\u8282\u65E5\uFF1A\x3F\x3F\x3F\x0A\u5F00\u59CB\x20\x3F\x20\u6708\x20\x3F\x20\u65E5","\u4E0B\u4E00\u4E2A\u8282\u65E5\uFF1A\u5730\u7403\u65E5\x0A\u4ECE\x20\x34\x20\u6708\x20\x31\x30\x20\u65E5\u5F00\u59CB","\u4E0B\u4E00\u4E2A\u8282\u65E5\uFF1A\u827A\u672F\u8282\x0A\u4ECE\x20\x35\x20\u6708\x20\x35\x20\u65E5\u5F00\u59CB","\u4E0B\u4E00\u4E2A\u8282\u65E5\uFF1A\u72EC\u7ACB\u65E5\x0A\u4ECE\x20\x36\x20\u6708\x20\x32\x33\x20\u65E5\u5F00\u59CB","\u4E0B\u4E00\u4E2A\u8282\u65E5\uFF1A\u6691\u5047\x0A\u4ECE\x20\x37\x20\u6708\x20\x32\x35\x20\u65E5\u5F00\u59CB","\u4E0B\u4E00\u4E2A\u8282\u65E5\uFF1A\u4E2D\u79CB\u8282\x0A\u4ECE\x20\x39\x20\u6708\x20\x38\x20\u65E5\u5F00\u59CB","\u4E0B\u4E00\u4E2A\u8282\u65E5\x3A\u4E07\u5723\u8282\x0A\u4ECE\x20\x31\x30\x20\u6708\x20\x31\x36\x20\u65E5\u5F00\u59CB","\u4E0B\u4E00\u4E2A\u8282\u65E5\uFF1A\u611F\u6069\u8282\x0A\u4ECE\x20\x31\x31\x20\u6708\x20\x31\x31\x20\u65E5\u5F00\u59CB","\u4E0B\u4E00\u4E2A\u8282\u65E5\uFF1A\u5723\u8BDE\u8282\x0A\u4ECE\x20\x31\x32\x20\u6708\x20\x31\x30\x20\u65E5\u5F00\u59CB"];
var screencom=[{screen:"welcome",elements:["version","text_area124","button206","button197","image41","text_area64","button40","button32","button55","button39","image21","text_area61","text_input1","image29"],bg:"bg70"},{screen:"task",elements:["text_area182","text_area183","text_area186","text_area184","text_area185","text_area187","text_area189","text_area190","text_area191","text_area192","text_area193","button274","button271","button272","button276","button275"],bg:"bg68"},{screen:"theme",elements:["text_area129","image46","image47","image48","image49","image50","image51","prems1","prems2","prems3","button94","checkbox1"],bg:"bg69"},{screen:"sweep",elements:["text_area158","text_area153","button239","text_area152","button241","button242","button243","text_area151","text_area159","text_area157","text_area154","button244","button249","button269"],bg:"bg67"},{screen:"store",elements:["text_area138","text_area53","button250","text_area161","image45","button280","button233","button228","image52","image53","ad","text_area73","text_area40","text_area41","button57","text_area42","button175","image26","text_area126","laptop","lasttik","card"],bg:"bg66"},{screen:"stat",elements:["text_area4","image19","image18","image74","ee"],bg:"bg65"},{screen:"sett",elements:["text_area68","text_area36","button37","image14","button36","image13","text_area34","button146","button147","button35","button34","button33"],bg:"bg64"},{screen:"screen7",elements:["ads","button193","text_area96"],bg:"bg63"},{screen:"screen6",elements:["text_area55","text_area57","button143","button145"],bg:"bg62"},{screen:"screen5",elements:["wheelstreak","image24","image22","button49","text_area29","image25","button50","button51","button43","button52","button53","button54","button45","button46","button47","button48","text_area37","button44","text_area33"],bg:"bg61"},{screen:"screen3",elements:["image5","text_area7","image8","text_area6","button82","text_area8","button83","button84","button86","button87","text_area9","button89","text_area10","button91","button80","button81","button64","button66","button65","button67","button68","button69","button70","button71","button73","button74","button75","button76","button77","button78","button79","button16","button17","button313","button311","button19","button18","button61","button61","button62","button63","zero","zerozero","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","log"],bg:"bg60"},{screen:"screen2",elements:["text_area228","button191","text_area228","pvpimg","button302","ne","pvp","button212","text_area63","text_area70","button3","button11","button41","button1","button88","button12","button96","button98","button114","image11","text_area31","button167","button165","button171","button161","emoji"],bg:"bg59"},{screen:"screen1",elements:["image2","image3","image4","image7","account","text_area65","button4","button5","button6","button7","text_area3","button8","button2","button13"],bg:"bg58"},{screen:"pvps",elements:["drinkb","leagueB1","leagueB2","leagueB3","text_area224","pvptemp","button295","image83","msl","text_area220","text_area222","text_area218","blacklist","cmd","chatbutton","emo","olplayer","olpl","button238","button252","button270","button301","pvptr","pvphost","pvpjoin","pvpback","text_area214","elo"],bg:"bg57"},{screen:"pvpj",elements:["pvpinter","pvpjb","text_area226","text_area227","button306"],bg:"bg56"},{screen:"pvpe",elements:["oppoupdate","pvpstat","pvpeb"],bg:"bg55"},{screen:"pvpd",elements:["pvphh","checkbox3","text_area135","text_area210","text_area208","text_area207","text_area212","pvprand","pvphd","text_area221","text_area225","button303","pvpss0","pvpss1","pvpss2","pvpss3","pvpss4","pvpss5","pvpss6","pvpss7","pvpss8"],bg:"bg54"},{screen:"payout",elements:["text_area2","image1","button9"],bg:"bg53"},{screen:"lotto",elements:["text_area165","text_area167","text_area164","text_area166","text_area168","text_area162","button254","button268","button256"],bg:"bg52"},{screen:"league",elements:["LMText","LSText","LRule","LMImg","LL4","LL0","LSText1","LSText2","LText1","LText2","LText3","LText4","LText5","LYourscore","LEstreward","LHall","LRefresh","LBG2","LBG3","LBG4","LLowertext","LRBg","LBack"],bg:"bg51"},{screen:"leader",elements:["text_area72","button173"],bg:"bg50"},{screen:"keno",elements:["button286","button287","button131","button128","button127","text_area11","image6","text_area12","text_area13","b1","b2","b3","b4","b5","b6","b7","b8","b9","b10","b11","b12","b13","b14","b15","b16","b17","b18","b19","b20","b21","b22","b23","b24","b25","b26","b27","b28","b29","b30","b31","b32","b33","b34","b35","b36","b37","b38","b39","b40","b41","b42","b43","b44","b45","b46","b47","b48","b49","b50","b51","b52","b53","b54","b55","b56","b57","b58","b59","b60","b61","b62","b63","b64","b65","b66","b67","b68","b69","b70","b71","b72","b73","b74","b75","b76","b77","b78","b79","b80","button126"],bg:"bg49"},{screen:"jackpot",elements:["image16","JP1","JP2","JP3","text_area5","button10"],bg:"cg5"},{screen:"hrace",elements:["image12","image10","c1","c2","c3","c4","c5","c6","arrow"],bg:"bg48"},{screen:"dlc",elements:["dlc1","dlc2","dlc3","dlc4","dl1","dl2"],bg:"bg46"},{screen:"chat",elements:["chattext","text_area215","button298","button296"],bg:"bg43"},{screen:"ach",elements:["button194","button307","text_area32","ollc","tikc","button152","button164","button150","button162","button260","button259","button154","button149","button151","button168","button153","button148","text_area62","text_area106","image34","button166","text_area60","button92","text_area132","button211","button169"],bg:"bg39"},{screen:"wheel",elements:["button232","image57","image58","image59","text_area143","text_area142","text_area144","button229","button230","button231","text_area145"],bg:"bg71"},{screen:"wheel2",elements:["image67","image69","image70","image71","text_area141","text_area147","text_area148","image68","button234","button235","button236","text_area149","button237"],bg:"bg72"},{screen:"wheel3",elements:["a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","button283","button284","button285","button282","text_area196","text_area197","text_area198","image79","image80","text_area203"],bg:"bg73"},{screen:"wheelx",elements:["wxl0","wxl1","whelxb","zz0","zz1","zz2","zz3","zz4","zz5","zz6","zz7","zz8","zz9","wxtim","wxti","wxtt","wxtim","wxt","wheelxb"],bg:"bg74"},{screen:"wheely",elements:["wyl0","wyl1","whelyb","zy0","zy1","zy2","zy3","zy4","zy5","zy6","zy7","zy8","zy9","wyta","whye","wyca","wyt","wyt","wheelyb","wyw0","wyw1","wyw2"],bg:"bg75"},{screen:"wheelz",elements:["zzt1","zzt2","zzt3","zzt4","zztz","wzc","wzta","wzt","wzca","wxz","wzw1","wzw2","wzw3","wheelzb"],bg:"bg76"},{screen:"at",elements:["button312","text_area229","us10","streak10","text_area236","lb10","text_area239","text_area102","us11","streak11","button388","lb11","text_area80","text_area81","text_area82","text_area83","text_area84","text_area86","text_area87","text_area88","text_area85","text_area90","us1","us2","us3","us4","us5","us6","us7","us8","us9","streak9","text_area209","text_area206","streak1","streak2","streak3","streak4","streak5","streak6","streak7","streak8","text_area89","button178"],bg:"bg40"},{screen:"Avatar",elements:["label18","label8","avatarT","label3","button273","av0","av1","av0","av1","av2","av3","av4","av5","av6","av7","av8","av9","av10","av11","av12","av13","av14","av15","av16","av17","av18","av19","av20","av21","av22","av23","av24","av25","av26","av27","av28","av29"],bg:"bg41"},{screen:"blackjack",elements:["button115","text_area59","text_area58","button159","text_area50","text_area69","button160","button144","button155","button156","button157","button158","text_area49"],bg:"bg42"},{screen:"crap",elements:["text_area45","image30","image31","button138","button139","text_area47","button97","button99","button100","button101","button102","button103","button107","button108","button109","button110","button111","button112","button118","button119","button120","button121","button124","button129","button130","button122","button123","button117","button113","button105","button106","button137","button136","button95","button132","button133","button134","button135","text_area44","text_area43","text_area46","label2","button104"],bg:"bg45"},{screen:"chip",elements:["chip1","chip2","chip3","chip4","special2","special1","special4","special3","chip5","chip6","chip7","chip8","chip9","chip10","chip11","chip12","chip13","chip14","chip15","chip16","chip17","chip18","tr1","tr2","iap","button170","leag1","leag2","leag3","leag4","leag5","reserve1","reserve1","reserve2","xx","yy"],bg:"bg44"},{screen:"poker",elements:["pokerstreak","pokercred","pokeraccount","card0","card1","card2","card3","card4","keep0","keep1","keep2","keep3","keep4","pokeranno","pokerrule","pokerp","pokerq","pokerm","pokern","pokerwager","pokerstart","cardback"],bg:"bg78"},{screen:"drink",elements:["drinkt5","drinkleft","drinkt","drinkip","drinks2","drink1","drink2","drink3","drink4","drink5","drink6","drink7","drinkt4","drinkt3","drinkt2","drinkt1","drinkt6","drinkt7","drinkt8","drinkback"],bg:"bg80"},{screen:"hbet",elements:["button21","button22","button24","button23","button25","button31","text_area17","text_area18","text_area19","text_area20","text_area21","text_area22","text_area28","label1","image9","text_area23","text_area25","button26","button27","button28","button29","text_area24","button20"],bg:"bg47"},{screen:"test2",elements:["button214","button215","button210","text_area127"],bg:"cg4"},{screen:"test3",elements:["cb1","cb2","cb3","cb4","cb5","cb6","cb7","cb8","cb9","cb10","cb11","cb12","cb13"],bg:"cg6"},{screen:"test1",elements:["button208","button209","button207","button264","button265","text_area179","reserve","cb","aaa","button225","button227"],bg:"cg2"},{screen:"warning",elements:["warnT","Quit"],bg:"cg8"},{screen:"shoptemp",elements:["text_area232","text_area231","text_area230","text_area237","text_area234","text_area238","image94","button326","button317","button325","button323","button322","button321","button320","button318"],bg:"cg1"}];
var missionmaster=[{tid:0,mic:180000,hit:["ss","rs","ks","hs","cs","ws","ps","js"],mit:["Spend 180000 Credits.","花销180000点数。",""]},{tid:1,mic:180000,hit:["sp","rp","kp","hp","cg","ww","pg","jp"],mit:["Win 180000 Credits in non-🎟️ games.","在非🎟️游戏里赢得180000点数。",""]},{tid:2,mic:600,hit:["tt"],mit:["Spend 600 seconds in-game.","玩600秒游戏。",""]},{tid:3,mic:38,hit:["za"],mit:["Acquire 38 🎟️.","获得38🎟️。",""]},{tid:4,mic:78,hit:["zb"],mit:["Spend 78 🎟️.","花销78🎟️。",""]},{tid:5,mic:38,hit:["zls"],mit:["Spend 38 🎟️ in 🎟️💰.","在🎟️💰花销38🎟️。",""]},{tid:6,mic:6,hit:["ad"],mit:["Watch 6 Ad.","看6个广告。",""]},{tid:7,mic:38000,hit:["zlw"],mit:["Win 38000 Credits in 🎟️💰.","在🎟️💰赢得38000点数。",""]},{tid:8,mic:28,hit:["sa"],mit:["Spin the slot 28 times.","转28次老虎机。",""]},{tid:9,mic:38000,hit:["ss"],mit:["Spend 38000 Credits in Slot.","在老虎机花销38000点数。",""]},{tid:10,mic:38000,hit:["sp"],mit:["Win 38000 Credits in Slot.","在老虎机赢得38000点数。",""]},{tid:11,mic:28,hit:["rb"],mit:["Bet 28 times in Roulette.","玩28次轮盘赌。",""]},{tid:12,mic:38000,hit:["rs"],mit:["Spend 38000 Credits in Roulette.","在轮盘赌花销38000点数。",""]},{tid:13,mic:36000,hit:["rp"],mit:["Win 36000 Credits in Roulette.","在轮盘赌赢得36000点数。",""]},{tid:14,mic:18,hit:["tk"],mit:["Bet 18 times in Keno.","玩18次柯诺。",""]},{tid:15,mic:38000,hit:["ks"],mit:["Spend 38000 Credits in Keno.","在柯诺花销38000点数。",""]},{tid:16,mic:36000,hit:["kp"],mit:["Win 36000 Credits in Keno.","在柯诺赢得36000点数。",""]},{tid:17,mic:28,hit:["tr"],mit:["Play 28 rounds of Horse Bet.","玩28场赌马。",""]},{tid:18,mic:38000,hit:["hs"],mit:["Spend 38000 Credits in Horse Bet.","在赌马花销38000点数。",""]},{tid:19,mic:36000,hit:["hp"],mit:["Win 36000 Credits in Horse Bet.","在赌马赢得36000点数。",""]},{tid:20,mic:28,hit:["tc"],mit:["Scratch 28 Tickets.","刮28张刮刮卡。",""]},{tid:21,mic:36000,hit:["cs"],mit:["Spend 36000 Credits in Scratch Card.","在刮刮卡花销36000点数。",""]},{tid:22,mic:38000,hit:["cg"],mit:["Win 38000 Credits in Scratch Card.","在刮刮卡赢得38000点数。",""]},{tid:23,mic:32,hit:["wt"],mit:["Play Big Six Wheel 32 times.","转32次幸运轮盘。",""]},{tid:24,mic:38000,hit:["ws"],mit:["Spend 38000 Credits in Big Six Wheel.","在幸运轮盘花销38000点数。",""]},{tid:25,mic:38000,hit:["ww"],mit:["Win 38000 Credits in Big Six Wheel.","在幸运轮盘赢得38000点数。",""]},{tid:26,mic:56,hit:["pb"],mit:["Roll 56 dices in Craps.","在双骰子里掷56个骰子。",""]},{tid:27,mic:38000,hit:["ps"],mit:["Spend 38000 Credits in Craps.","在双骰子花销38000点数。",""]},{tid:28,mic:36000,hit:["pg"],mit:["Win 36000 Credits in Craps.","在双骰子赢得36000点数。",""]},{tid:29,mic:28,hit:["jb"],mit:["Play 28 rounds of Blackjack.","玩28轮21点。",""]},{tid:30,mic:38000,hit:["js"],mit:["Spend 38000 Credits in Blackjack.","在21点花38000点数。",""]},{tid:31,mic:36000,hit:["jp"],mit:["Win 36000 Credits in Blackjack.","在21点赢得36000点数。",""]},{tid:32,mic:38,hit:["zc"],mit:["Spend 38 🎟️ in 🎟️🎡.","在🎟️🎡花销38🎟️。",""]},{tid:33,mic:38,hit:["zg"],mit:["Spend 38 🎟️ in 🎟️🎰.","在🎟️🎰花销38🎟️。",""]},{tid:34,mic:38000,hit:["ze"],mit:["Win 38000 Credits in 🎟️🎡.","在🎟️🎡赢得38000点数。",""]},{tid:35,mic:38000,hit:["zi"],mit:["Win 38000 Credits in 🎟️🎰.","在🎟️🎰赢得38000点数。",""]},{tid:36,mic:38,hit:["zk"],mit:["Spend 38 🎟️ in 🎟️🧧.","在🎟️🧧花销1428🎟️。",""]},{tid:37,mic:38000,hit:["zl"],mit:["Win 38000 Credits in 🎟️🧧.","在🎟️🧧赢得38000点数。",""]},{tid:38,mic:78,hit:["swp"],mit:["Wager 78 🎟️ in Sweepstakes.","在抽奖投注78🎟️。",""]},{tid:39,mic:48,hit:["zom"],mit:["Play 48 rounds of pvp matches.","玩48轮PVP竞技模式。",""]},{tid:40,mic:3,hit:["zsi"],mit:["Win 3 rounds of PVP Arena.","赢得3场PVP竞技。",""]},{tid:41,mic:38,hit:["wxa"],mit:["Spend 38 🎟️ in 🎟️🃏.","在🎟️🃏花销38🎟️。",""]},{tid:42,mic:38000,hit:["wxb"],mit:["Win 38000 Credits in 🎟️🃏.","在🎟️🃏赢得38000点数。",""]},{tid:43,mic:38,hit:["zls"],mit:["Spend 38 🎟️ in 🎟️💰.","在🎟️💰花销38🎟️。",""]},{tid:44,mic:38000,hit:["zlw"],mit:["Win 38000 Credits in 🎟️💰.","在🎟️💰赢得38000点数。",""]},{tid:45,mic:38,hit:["wya"],mit:["Spend 38 🎟️ in 🎟️💻.","在🎟️💻花销38🎟️。",""]},{tid:46,mic:38000,hit:["wyb"],mit:["Win 38000 Credits in 🎟️💻.","在🎟️💻赢得38000点数。",""]},{tid:47,mic:38000,hit:["pks"],mit:["Spend 38000 Credits in Video Poker.","在经典扑克花销38000点数。",""]},{tid:48,mic:36000,hit:["pkw"],mit:["Win 36000 Credits in Video Poker.","在经典扑克赢得36000点数。",""]},{tid:49,mic:38000,hit:["pkr"],mit:["Play 24 rounds of Video Poker.","玩24轮经典扑克。",""]}];
var img = ["assets/1.jpg","assets/1.png","assets/2.jpg","assets/3.jpg","assets/4.jpg","assets/5.jpg","assets/66580.png","assets/anniv.jpg","assets/applablog.png","assets/arrow.png","assets/arrowL.png","assets/arrowR.png","assets/at.png","assets/atm.png","assets/atme.png","assets/azur.gif","assets/back.png","assets/bar_l.png","assets/banicon.png","assets/bclose.png","assets/bg.jpg","assets/bgg.jpg","assets/bggg.jpg","assets/bigWin.png","assets/bj.jpg","assets/bj.png","assets/bjc.jpg","assets/blk.png","assets/bsend.png","assets/CakeRace.png","assets/card.png","assets/case.png","assets/cbg.png","assets/chaticon.png","assets/china.png","assets/clo.png","assets/cmd.png","assets/comps.png","assets/craps.jpg","assets/crapsc.jpg","assets/credit.png","assets/dailye.png","assets/di1.png","assets/di2.png","assets/di3.png","assets/di4.png","assets/di5.png","assets/di6.png","assets/dice.png","assets/dlc.png","assets/dld.jpg","assets/drame.png","assets/dri1.png","assets/dri2.png","assets/dri3.png","assets/dri4.png","assets/dri5.png","assets/dri6.png","assets/dri7.png","assets/ecx.png","assets/ests.png","assets/event.png","assets/fancyloading.gif","assets/fortune.png","assets/frae.png","assets/frame.png","assets/fw.png","assets/gift1.png","assets/gift2.png","assets/graycrc.png","assets/greencrc.png","assets/horse.png","assets/jackpot.png","assets/keno.jpg","assets/keno.png","assets/kenoc.jpg","assets/lbs1.png","assets/lbs2.png","assets/lbs3.png","assets/lbs4.png","assets/little.png","assets/loading.png","assets/logk.png","assets/lopi.png","assets/loss.png","assets/lr0.png","assets/map.png","assets/minus10.png","assets/minus100.png","assets/minus1000.png","assets/mtngck.png","assets/mub.png","assets/mug.png","assets/mur.png","assets/nzc.png","assets/nzd.png","assets/olpl.png","assets/rdc1.png","assets/rdc2.png","assets/rdc3.png","assets/new.png","assets/nomail.png","assets/ocean.jpg","assets/onsale.png","assets/Particles.png","assets/plose.png","assets/plus10.png","assets/plus100.png","assets/plus1000.png","assets/pokerc.jpg","assets/pokere.jpg","assets/ptp.png","assets/pvpbutton.png","assets/pvpfr.png","assets/pvpl.png","assets/pwin.png","assets/q.png","assets/qr.png","assets/questio.png","assets/rating.png","assets/recommend.png","assets/ring.png","assets/roll.png","assets/roulc.jpg","assets/roule.jpg","assets/rp.png","assets/sc.png","assets/sche.png","assets/scrat.jpg","assets/scratch.png","assets/scrats.jpg","assets/shope.png","assets/slide.jpg","assets/slidec.jpg","assets/slot.png","assets/sof.png","assets/son.png","assets/sop.png","assets/sweep.png","assets/sweps.png","assets/tam.png","assets/taskm.png","assets/tid.png","assets/tlt.png","assets/thetwe.jpg","assets/thetwes.jpg","assets/title.png","assets/tix.png","assets/tky.png","assets/tokens.png","assets/touch.png","assets/twe.png","assets/usa.png","assets/vidpoker.png","assets/wheel.png","assets/world.png"];
var simg = ["assets/10.png","assets/100.png","assets/1000.png","assets/100k.png","assets/100m.png","assets/10k.png","assets/10m.png","assets/1m.png","assets/25.png","assets/25k.png","assets/50.png","assets/500.png","assets/5000.png","assets/500k.png","assets/50k.png","assets/5m.png","assets/allemoji.png","assets/allin.png","assets/april.png","assets/art.png","assets/artfest.jpg","assets/Boom.png","assets/bvreak.jpg","assets/chall.png","assets/childish.jpg","assets/christ.png","assets/christmass.jpg","assets/cytus.jpg","assets/doge.gif","assets/earday.jpg","assets/earth.png","assets/goldtoken.png","assets/hallo.png","assets/hat.png","assets/haveevent.png","assets/iapia.png","assets/iaps.png","assets/ice.png","assets/independence.jpg","assets/lanota.jpg","assets/lastone.jpg","assets/lasttwo.jpg","assets/kolor.png","assets/leaf.png","assets/lr1.png","assets/lr2.png","assets/lr3.png","assets/lr4.png","assets/lr5.png","assets/lr6.png","assets/lr7.png","assets/lr8.png","assets/lr9.png","assets/mail.png","assets/midaut.jpg","assets/moon.png","assets/newyear.jpg","assets/nyan.png","assets/patri.jpg","assets/piee.png","assets/poi.png","assets/popsicle.png","assets/spe1.png","assets/spe2.png","assets/spe3.png","assets/spe4.png","assets/thanksgiv.jpg","assets/trat.png","assets/trle.png","assets/vapor.jpg","assets/ween.jpg","assets/Winter.jpg","assets/xxa.png","assets/xxb.png","assets/zzzzz.png"];
var mp3 = ["assets/001.mp3","assets/002.mp3","assets/003.mp3","assets/031.mp3","assets/046.mp3","assets/071.mp3","assets/088.mp3","assets/089.mp3","assets/105.mp3","assets/126.mp3","assets/161.mp3","assets/174.mp3","assets/190.mp3","assets/193.mp3","assets/237.mp3","assets/applause.mp3","assets/ballset.mp3","assets/bell.mp3","bellow.mp3","assets/bells1.mp3","assets/bells2.mp3","assets/bells3.mp3","assets/boost.mp3","assets/bpop.mp3","assets/bsav.mp3","assets/bub.mp3","assets/buy.mp3","assets/buy_gems.mp3","assets/capt.mp3","assets/cargo.mp3","assets/carn.mp3","assets/cchi.mp3","assets/cclis.mp3","assets/cheer.mp3","assets/chip.mp3","assets/chipp.mp3","assets/chp.mp3","assets/cl.mp3","assets/click.mp3","assets/clicks.mp3","assets/clo.mp3","assets/closing.mp3","assets/crate.mp3","assets/dean.mp3","assets/fuse.mp3","assets/gameov.mp3","assets/gamest.mp3","assets/gclic.mp3","assets/glossy.mp3","assets/gui_click.mp3","assets/inv_open.mp3","assets/lose.mp3","assets/main.mp3","assets/missclick.mp3","assets/mys.mp3","assets/ne.png","assets/one7.mp3","assets/one8.mp3","assets/open.mp3","assets/osl.mp3","assets/pins.mp3","assets/plop.mp3","assets/scratch.mp3","assets/select.mp3","assets/sfxx.mp3","assets/slot.mp3","assets/slscr.mp3","assets/sots.mp3","assets/stamp.mp3","assets/tradw.mp3","assets/uimod.mp3","assets/warni.mp3","assets/whe.mp3","assets/win.mp3","assets/wk.mp3","assets/wks.mp3"];
var smp3 = ["assets/15r.mp3","assets/17l.mp3","assets/1scr.mp3","assets/26be.mp3","assets/27cj.mp3","assets/2cl.mp3","assets/7slo.mp3","assets/alien.mp3","assets/alien2.mp3","assets/anniv.mp3","assets/aprilfool.mp3","assets/artmusic.mp3","assets/belz.mp3","assets/bird.mp3","assets/bossa.mp3","assets/cazs.mp3","assets/ccla.mp3","assets/childish.mp3","assets/chipm.mp3","assets/cloz.mp3","assets/cristmas.mp3","assets/cytus.mp3","assets/dancelight.mp3","assets/dzx.mp3","assets/earthday.mp3","assets/game.mp3","assets/gatherdata.mp3","assets/gull.mp3","assets/halloween.mp3","assets/ichps.mp3","assets/imu.mp3","assets/lanota.mp3","assets/losz.mp3","assets/mautumn.mp3","assets/missho.mp3","assets/mjos.mp3","assets/nys.mp3","assets/ocean.mp3","assets/osso.mp3","assets/pa1.mp3","assets/pada.mp3","assets/pb1.mp3","assets/pc1.mp3","assets/pa2.mp3","assets/pb2.mp3","assets/pc2.mp3","assets/pa3.mp3","assets/pb3.mp3","assets/pc3.mp3","assets/pa4.mp3","assets/pb4.mp3","assets/pc4.mp3","assets/pa5.mp3","assets/pb5.mp3","assets/pc5.mp3","assets/pa6.mp3","assets/pb6.mp3","assets/pc6.mp3","assets/pa7.mp3","assets/pb7.mp3","assets/pc7.mp3","assets/pa8.mp3","assets/pb8.mp3","assets/pc8.mp3","assets/pa9.mp3","assets/pb9.mp3","assets/pc9.mp3","assets/pa10.mp3","assets/pb10.mp3","assets/pc10.mp3","assets/pa11.mp3","assets/pb11.mp3","assets/pc11.mp3","assets/pa12.mp3","assets/pb12.mp3","assets/pc12.mp3","assets/pa13.mp3","assets/pb13.mp3","assets/pc13.mp3","assets/pa14.mp3","assets/pb14.mp3","assets/pc14.mp3","assets/pa15.mp3","assets/pb15.mp3","assets/pc15.mp3","assets/patriot.mp3","assets/patty.mp3","assets/pulsar.mp3","assets/scan.mp3","assets/springfest.mp3","assets/summerbreak.mp3","assets/tksgiving.mp3","assets/tx1.mp3","assets/tx2.mp3","assets/tx3.mp3","assets/tx4.mp3","assets/tx5.mp3","assets/tx6.mp3","assets/tx7.mp3","assets/tx8.mp3","assets/tx9.mp3","assets/tx10.mp3","assets/tx11.mp3","assets/tx12.mp3","assets/tx13.mp3","assets/tx14.mp3","assets/tx15.mp3","assets/txbgm.mp3","assets/Water01.mp3","assets/wintermusic.mp3","assets/winz.mp3","assets/wkp.mp3","assets/wwnz.mp3","assets/zbals.mp3","assets/zclc.mp3"];
var tutorial = [{screen:"screen2",sequence:[{elements:["button3","button11","button41","button88","button1","button12","button98","button96","button97","button114","button191"],ta:0,text:["Welcome to Lucky Strike! Here's a bunch of casino classics for you!","欢迎游玩幸运一击！这里是些赌场经典游戏！",""]},{elements:["pvp","pvpimg"],ta:0,text:["Online Play is super fun! There's a chat app, PVP, and Co-op modes!","联机游玩很爽的！这里有聊天，对战，和合作模式！",""]},{elements:["button167"],ta:0,text:["SC hosts the game's challenges. Can you complete them all?","这里是游戏挑战。你能完成这些挑战吗？",""]},{elements:["button165","button171"],ta:0,text:["These are the game's leaderboards. Come and compete with others!","这是游戏的排行榜。快来挑战其他玩家吧！",""]},{elements:["image11","image27"],ta:1,text:["Click the currency icon on any page to visit the shop and 6 extra games!","点击任何页面的货币按钮来进入商店 - 内有6个额外游戏！",""]},{elements:["logoalt"],ta:0,text:["That wraps up the basics, be lucky, and have fun!","基础差不多就这些，祝你幸运，游玩愉快！",""]}]},{screen:"ach",sequence:[{elements:["tikc","ollc","button260","button259","button148","button153","button168","button151","button149","button154","button162","button150","button164","button152","button307","button194"],ta:1,text:["Welcome to Challenges! Select a chapter to view its set of challenges.","欢迎来挑战！选择一个章节来查看它的挑战。",""]},{elements:["button166","text_area106","image34","text_area62"],ta:0,text:["There are 48 challenges in total - can you complete all of them?","总共有48个挑战-你能完成它们吗？",""]},{elements:["text_area132", "button211", "button92"],ta:0,text:["Skip challenges using tokens you earned along the way. Good luck!","用获得的任务代币来跳过挑战。祝你好运！",""]}]},{screen:"store",sequence:[{elements:["button175","ad","button181","text_input2","text_area42","image53"],ta:0,text:["Welcome to ATM! Claim daily rewards and get tickets here!","欢迎来ATM机！每日奖励和票券奖励在这里哟！",""]},{elements:["card","laptop","button233","lasttik","button228","button280"],ta:1,text:["These ticket games guarantee winnings! Yep, 100% win!","这些票券游戏保证赢！没错，赢率100%！",""]},{elements:["text_area161","button250"],ta:1,text:["👑 Membership comes with exclusive cosmetics, leaderboard badge, and high bet limit. Redeem 👑 Membership here.","👑会员享受独占皮肤，排行榜奖章和更高赌注限额。在这里兑换👑会员。",""]}]},{screen:"pvps",sequence:[{elements:["button301","emo","chatbutton","blacklist","cmd","msl"],ta:1,text:["Welcome to Online Play - Lucky Strike's Online hub. Here's the chat and daily mission!","欢迎来联机游玩。这里是聊天功能和每日任务！",""]},{elements:["pvphost","pvpjoin","pvptr","text_area214","elo"],ta:0,text:["This is PVP Arena - One of the few PVP game mode out there at AppLab.","这是PVP竞技场-AppLab屈指可数的对战游戏模式。",""]},{elements:["button270","button238","button252","leagueB1","leagueB2","leagueB3"],ta:0,text:["These are Lucky Strike's Online events - come win big prizes! Specific rules are within.","这里是幸运一击的合作模式 - 来这里赢大奖吧！具体的规则详见内页。",""]}]},{screen:"screen1",sequence:[{elements:["button2","image2","image3","image4"],ta:0,text:["Welcome to Slots! Super simple game, just press the button and let luck decide!","欢迎来老虎机！超简单的游戏，点击按钮然后让幸运决定！",""]},{elements:["button8"],ta:0,text:["Want to see the payouts? Click this later.","想看看赔率么？一会点下这个按钮。",""]}]},{screen:"screen3",sequence:[{elements:["zero","zerozero","button67","button68","button69","button70","button71","button73","button74","button75","button76","button77","button78","button79","button16","button17","button18","button19","button61","button62","button63","button80","button81","button64","button65","button66","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36"],ta:1,text:["Welcome to Roulette! These are the bets - you can place a max of 10.","欢迎来轮盘赌！这些是可选择的赌注-最多可以投10注。",""]},{elements:["button89"],ta:0,text:["Learn the rule and payout with the gray button.","点击灰色按钮来了解规则和赔率。",""]},{elements:["button82"],ta:0,text:["Once the bet is placed, this red button starts the game!","投注后，点击这个红色按钮来玩！",""]}]},{screen:"hbet",sequence:[{elements:["button21","button22","button23","button24","button25","button31"],ta:1,text:["Welcome to Horse Bet! Wager on a horse and watch the race!","欢迎来赌马！选择一匹马然后看看谁跑的快！",""]}]},{screen:"keno",sequence:[{elements:["b1","b2","b3","b4","b5","b6","b7","b8","b9","b10","b11","b12","b13","b14","b15","b16","b17","b18","b19","b20","b21","b22","b23","b24","b25","b26","b27","b28","b29","b30","b31","b32","b33","b34","b35","b36","b37","b38","b39","b40","b41","b42","b43","b44","b45","b46","b47","b48","b49","b50","b51","b52","b53","b54","b55","b56","b57","b58","b59","b60","b61","b62","b63","b64","b65","b66","b67","b68","b69","b70","b71","b72","b73","b74","b75","b76","b77","b78","b79","b80"],ta:1,text:["Welcome to Keno! Select 20 from 80 numbers and hope for the best!","欢迎来柯诺！从80个数字中选20个，然后试试你的运气！",""]},{elements:["button131"],ta:0,text:["For payouts, click this later. After placing 20 numbers, a button will start the game!","点这个按钮来了解赔率，选完20个数字后，一个按钮会开始游戏。",""]}]},{screen:"screen5",sequence:[{elements:["image22","image24","button49"],ta:1,text:["Welcome to Big Six Wheel! Check out the rules, as always!","欢迎来幸运轮盘！就象以往，别忘了看看规则！",""]},{elements:["button50","button51","button43","button52","button53","button54"],ta:0,text:["Place a bet and a button will start the game!","选择一个赌注然后开始游戏！",""]}]},{screen:"sett",sequence:[{elements:["button37","text_area36","image14"],ta:1,text:["Welcome to Scratch Cards! Buy a card and simply scratch!","欢迎来刮刮卡！买张卡片，然后刮出大奖！",""]},{elements:["button36"],ta:0,text:["Don't forget to check out the rules and payouts!","别忘了查看规则和赔率！",""]}]},{screen:"crap",sequence:[{elements:["button138"],ta:1,text:["Welcome to Craps! This is a complicated game - please read the rules!","欢迎来双骰子！这个游戏挺复杂的 - 请看看规则。",""]},{elements:["button97","button99","button100","button101","button102","button103","button146","button105","button106","button137","button136","button117","button122","button123","button129","button130","button121","button124","button119","button120","button118","button107","button108","button109","button110","button111","button112","button113"],ta:1,text:["Nah it's pretty simple - select some bets, and roll the dice!","开玩笑的，游戏其实不难，选择赌注，然后掷骰子！",""]}]},{screen:"blackjack",sequence:[{elements:["button144","button140","button141","button142"],ta:0,text:["Welcome to Blackjack! Start, Hit, Double, or Stand!","欢迎来21点！开始，拿牌，加倍，或停牌！",""]},{elements:["button160"],ta:0,text:["Don't forget to check out the rules and payouts!","别忘了查看游戏规则和赔率！",""]}]},{screen:"poker",sequence:[{elements:["card0","card1","card2","card3","card4"],ta:1,text:["Welcome to Video Poker! Achieve combinations for massive awards!","欢迎来扑克！达成组合来赢大奖！",""]},{elements:["pokerrule"],ta:0,text:["Don't forget to check out the rules and payouts!","别忘了查看游戏规则和赔率！",""]}]}];
var avatar=[["🤑","🤠","😴","😋","😏","😲","🤯","😆","😇","🤪","😎","🤩","😖","😭","😳","😱","🤭","😵","😘","🤗","🙄","😷","🥰","🥳","😄","🤣","😂","😌","😒","😤"],["🤬","😰","🥺","🥶","🤢","🤡","😈","💩","👻","🤖","👹","👺","☠️","🎃","👾","🍃","🍁","🦍","🦃","🦥","🐿️","🐗","🐺","🐴","🐌","🦓","🐵","🦖","🦕","🐡"],["🐶","🐱","🐹","🐇","🦊","🐻","🐷","🐮","🐔","🐝","🐞","🦗","🐙","🦐","🦀","🐦","🐤","🐸","🐼","🦝","🦎","🐉","🦋","🦄","🐳","🦈","🐠","🦅","🦚","🦉"],["🦑","🦢","🕊️","🐨","🐯","🦁","🐟","🐊","🐢","🐒","🐘","🦙","🦘","🦇","🐫","💫","🌟","✨","🤿","🛹","🏊‍♀️","🏒","🏂","⛷️","🔭","🏑","🪁","⚽️","🏀","🏈"],["🏓","🏐","🎱","⛳️","🏹","🎾","🪀","🏸","🏔️","🏕️","🌄","🌅","🏭","🏤","🏥","🏡","🏬","🏘️","🏞️","🌇","🌃","🌉","🌁","🏖️","🏜️","🌆","🛣️","⛱️","🏝️","🌋"],["🚄","🚋","🚂","🚢","🚔","🚁","🚓","🚑","🚒","🛺","🏍️","🛥️","☢️","☣️","🔮","🏟️","🏰","🏯","🏫","🏛️","⛪️","📢","🕹️","💾","🎧","📸","📽️","🕍","🛕","🏗️"],["🏁","🏳️‍🌈","🏴‍☠️","👏","👋","🙏","🗺️","🎺","🎷","🎹","🎻","🎸","🎮","🧩","⚔️","🍮","🍹","🍪","🥥","🥝","🍅","🥑","🎂","🍈","🥠","🍡","🥦","🌽","🥕","🍐"],["🧇","🍰","🍩","🥮","🥧","🥙","🥪","🍔","🌭","🍱","🥡","🍣","🍇","🍉","🍑","🍍","🍌","🍓","🥐","🥨","🧀","🥩","🍗","🍖","🥗","🍨","🍬","🍭","🍳","🥓"],["🍟","🍕 ","🌮","🍝","🍜","🍲","🍛","🥟","🦪","🍚","🍆","🧅","🥔","🍞","☕️","🥜","🍪","🍵","🥘","🥂","🍻","🛫","🌬️","🧼","💽","🌈","💣","🌎","🌍","🌏"],["💥","☄️","🌙","🎯","🎳","🎨","⛵️","🩺","🪐","🧮","✂️","📝","➿","📈","📉","🛰️","🚀","🛸","💬","💭","🔊","📯","🔍","📐","🔐","🉑","🆚","🈲","♾️","🔜"],["🌌","🎆","🌞","☎️","📺","🛋️","🚌","🏎️","🧻","🦠","🌺","🎼","🎓","👒","🧢","⏰","🌾","⚗️","🌱","🎍","🎇","⚖️","🔫","🛎️","🖼️","🛍️","🎎","📊","📖","🛷"],["📀","🎥","🧭","❄️","🧊","🌊","🥏","🥎","🌐","💔","💞","💗","💖","💘","💝","🔆","⚜️","💠","💯","💢","♨️","💐","🎊","🎉","🔞","📵","🚷","💵","💳","💎"]];
var premiumavatar = [["😃","😁","😅","😊","🙃","😉","😍","😚","😝","😜","🤨","🧐","🤓","😔","😟","😣","😫","😩","😡","🥵","😨","😥","🤔","🤫","🤥","😬","😯","🥱","🤤","😪"],["🥴","🤧","🤒","🤕","👿","👉","🤛","🙌","🤲","🤝","✍️","💅","🤳","💪","🦾","👣","🧠","👀","👅","👄","🌂","🧵","🧶","👓","🥽","🥼","👕","🧤","👘","🩳"],["👚","👛","👜","👝","🎒","🥾","👠","🩰","🎩","⛑️","💼","🔘","🐭","🙈","🙉","🙊","🐥","🐛","🐜","🦟","🦞","🐋","🦏","🐪","🐂","🐄","🐎","🐖","🐏","🐑"],["🐐","🦌","🐕","🐩","🦮","🐕‍🦺","🐈","🐓","🦨","🐁","🐀","🐲","☘️","🍂","🍄","🥀","🌸","☀️","🌤️","🌦️","⛈️","🥭","🥬","🥒","🍠","🥯","🥖","🦴","🧆","🌯"],["🍤","🏉","🥍","🏏","🥅","🥋","⛸️","🥌","🎿","🏋️","🤼","🤸","🤺","🤾","🏇","🏄","🏊","🤽","🚣","🚵","🚴","🎪","🤹","🎭","🩰","🎤","🪕","💛","💚","💙"],["💕","💓","🛵","🚍","🚘","🚖","🚠","🚟","🚃","🚞","🚝","🚅","🚈","🚆","🚇","🚉","✈️","🛩️","💺","🛶","🚤","⛴️","⚓️","🚥","🎢","🎠","⛰️","⛺️","🏢","🏣"],["🏦","🏨","🏪","🏩","💒","🕌","⛩️","🛤️","🎑","🌠","🏙️","㊙️","㊗️","⛔️","🚯","🚳","🚭","🔇","🔕","🚸","🔱","❇️","✳️","Ⓜ️","💤","💻","⌨️","🖥️","🖨️","📼"],["📷","📹","🎞️","📟","📠","📻","🎛️","⏲","🕰️","💴","💶","💷","🧰","⚒️","🛠️","⚙️","🧱","🧲","🧨","🪓","🗡️","🩹","💊","🧬","🧫","🧪","🧺","🛀","🧽","🔑"],["🎏","📩","📧","💌","📦","🏷️","📪","📬","📭","📜","🗃️","📂","🗂️","🗞️","📰","🧷","🔗","🖇️","📌","✒️","🔎","🎶","🔚","🔛","🔝","🔜","🖋️","🖍️","🔶","🔷"]];
var unloc=[[-1,10,30,60,100,150,210,280,350,430,520,630,750,890,1110,1310,1540,1790,2060,2360,2690,3050,3430,3850,4300,4780,5300,5860,6450,7080],[7750,8460,9210,10010,10850,11740,12670,13650,14680,15760,16890,18080,19320,20610,21960,23370,24840,26360,27950,29600,31320,33090,34940,36850,38830,40880,43000,45200,47460,49800],[52220,54710,57280,59930,62660,65470,68370,71350,74410,77560,80800,84130,87540,91050,94650,98340,102130,106020,110000,114080,118260,122540,126920,131410,136000,140700,145500,150400,155430,160560],[165800,171160,176630,182210,187910,193730,199670,205720,211900,218200,224620,231170,237850,244650,251580,258640,265830,273150,280610,288200,295930,303790,311790,319930,328210,336630,345200,353910,362760,371760],[380910,390210,399650,409250,419000,428910,438960,449180,459550,470080,480770,491620,502630,513810,525150,536660,548330,560170,572180,584360,596720,609240,621940,634810,647860,661090,674500,688080,701850,715800],[729930,744250,758760,773450,788330,803400,818660,834110,849760,865600,881640,897870,914300,930930,947760,964790,982030,999470,1017110,1034960,1053020,1071290,1089760,1108450,1127350,1146460,1165790,1185340,1205100,1225080],[1245280,1265700,1286340,1307210,1328300,1349620,1371160,1392930,1414930,1437160,1459620,1482320,1505250,1528410,1551810,1575450,1599330,1623440,1647800,1672400,1697240,1722330,1747670,1773250,1799080,1825160,1851490,1878070,1904910,1932000],[1959350,1986950,2014810,2042930,2071310,2099950,2128860,2158030,2187460,2217160,2247130,2277370,2307870,2338650,2369700,2401020,2432620,2464500,2496650,2529080,2561790,2594780,2628050,2661610,2695450,2729580,2763990,2798690,2833680,2868960],[2904530,2940400,2976560,3013010,3049760,3086810,3124160,3161800,3199750,3238000,3276550,3315410,3354580,3394050,3433830,3473920,3514320,3555030,3596060,3637400,3679060,3721030,3763320,3805930,3848860,3892110,3935690,3979590,4023810,4068360],[4113240,4158450,4203980,4249850,4296050,4342580,4389450,4436660,4484200,4532080,4580300,4628860,4677760,4727010,4776600,4826540,4876820,4927450,4978430,5029760,5081440,5133480,5185870,5238610,5291710,5345170,5398990,5453160,5507700,5562600],[5617860,5673490,5729490,5785850,5842580,5899680,5957150,6014990,6073210,6131800,6190770,6250110,6309830,6369930,6430410,6491270,6552520,6614150,6676160,6738560,6801350,6864530,6928090,6992050,7056400,7121140,7186280,7251820,7317750,7384080],[7450810,7517940,7585470,7653410,7721750,7790500,7859650,7929210,7999180,8069560,8140350,8211560,8283180,8355210,8427660,8500530,8573820,8647520,8721650,8796200,8871170,8946570,9022400,9098650,9175330,9252440,9329980,9407950,9486360,9565200]];
var holipic = ["", "assets/Winter.jpg", "assets/newyear.jpg", "assets/patri.jpg", "assets/earday.jpg", "assets/independence.jpg", "assets/midaut.jpg", "assets/ween.jpg", "assets/thanksgiv.jpg", "assets/christmass.jpg", "assets/doge.gif", "assets/artfest.jpg", "assets/bvreak.jpg"];
var holimus = ["", "assets/wintermusic.mp3", "assets/springfest.mp3", "assets/patty.mp3", "assets/earthday.mp3", "assets/patriot.mp3", "assets/mautumn.mp3", "assets/halloween.mp3", "assets/tksgiving.mp3", "assets/cristmas.mp3", "assets/aprilfool.mp3", "assets/artmusic.mp3", "assets/summerbreak.mp3"];
var spac=[{start:0,end:14,val:5e3},{start:14,end:102.2,val:1e3},{start:102.2,end:129.4,val:4e3},{start:129.4,end:181,val:3e3},{start:181,end:215.6,val:3500},{start:215.6,end:306,val:2e3},{start:306,end:360,val:2500}],mo=[{m:1,d:17},{m:1,d:15},{m:2,d:10},{m:3,d:10},{m:4,d:1},{m:4,d:10},{m:5,d:5},{m:6,d:30},{m:7,d:25},{m:9,d:10},{m:10,d:20},{m:11,d:20},{m:12,d:17}];
var adbackup = [{id:7, file:"assets/patew.JPG", file1: "", file2: "", here: "https://studio.code.org/projects/applab/BScyE6y5hSTmOSTaj_Z_LRiLSrv5FJJSE4YNDR4p0ag"},{id:8, file:"assets/promo1.png", file1: "", file2: "", here: "https://studio.code.org/projects/applab/POhUxXWMgzYWmhsdjL_-a958VrgRkwPoNICbzouxVEg"},{id:9, file:"assets/promo2.png", file1: "promo2c.png", file2: "", here: "https://studio.code.org/projects/applab/POhUxXWMgzYWmhsdjL_-a958VrgRkwPoNICbzouxVEg"},{id:10, file:"assets/slumber.jpg", file1: "assets/slumber.jpg", file2: "assets/slumber.jpg", here: "https://www.youtube.com/watch?v=Q_SxhRBX-5E"}];
var dealerCard = [0,0,0,0,0];
var drink = [{},{a:1000,b:700},{a:3000,b:2100},{a:9000,b:6300},{a:27000,b:18900},{a:81000,b:56700},{a:243000,b:170100},{a:729000,b:510300}];
var rpval = [0, 1, 3, 7, 12, 20, 28, 37, 47, 59, 71, 85, 100];
var movie = [{"id":1,"name":"The Sting","year":1973,"leng":129,"rati":"PG","imdb":"0070735","url":"dxQUGbaQ#oBDn6xqj0OWwhP5eVzKY-A","img":"NGU3NjQ4YTMtZGJjOS00YTQ3LThmNmItMTI5MDE2ODI3NzY3XkEyXkFqcGdeQXVyMjUzOTY1NTc@","intro":"Two grifters team up to pull off the ultimate con.","namc":"骗中骗","inroc":"诈骗集团小弟胡克和好友康多尔夫一起利用骗局为老大鲁萨报仇。"},{"id":2,"name":"Casino","year":1995,"leng":178,"rati":"R","imdb":"0112641","url":"FgByBBhR#i894sqPiEXdFba1iF50lpw","img":"MTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@","intro":"A tale of greed, deception, money, power, and murder occur between two best friends.","namc":"赌城风云","inroc":"赌场老千萨姆在经历友情与爱情的背叛后，重新作出人生抉择。"},{"id":3,"name":"Casino Royale","year":2006,"leng":144,"rati":"PG-13","imdb":"0381061","url":"p8RwmT7b#7tiuv_0gb4JBx-PA-RIbGw","img":"MDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@","intro":"Secret Agent James Bond must defeat a banker in a high-stakes game of poker.","namc":"007大战皇家赌场","inroc":"特工詹姆斯邦德必须在高风险的扑克游戏中击败银行家。"},{"id":4,"name":"The Hangover","year":2009,"leng":100,"rati":"R","imdb":"1119646","url":"RpJwTTqY#RMs88sa2hPXxDfO2vSSV2Q","img":"NGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@","intro":"Three buddies wake up from a bachelor party with no memory. They have to make it to their friend's wedding.","namc":"宿醉","inroc":"三个伴郎和新郎在单身聚会中大醉一场，醒来后，新郎不见了，他们必须回忆发生的一切才能找回新郎并举行婚礼。"},{"id":5,"name":"Ocean's Eleven","year":2001,"leng":116,"rati":"PG-13","imdb":"0240772","url":"xlZQyLhZ#6zup70amyW23rL8uDrYefA","img":"YzVmYzVkMmUtOGRhMi00MTNmLThlMmUtZTljYjlkMjNkMjJkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@","intro":"Danny Ocean and his ten accomplices plan to rob three Las Vegas casinos simultaneously.","namc":"十一罗汉","inroc":"超级大盗丹尼·奥申为了重新夺回妻子泰丝，一夜之间召集十一位行内好手抢劫情敌赌场。"},{"id":6,"name":"Ocean's Twelve","year":2004,"leng":125,"rati":"PG-13","inroc":"十一大盗再度聚首，加上朱莉娅组成十二罗汉，为还债而在阿姆斯特丹、巴黎、罗马同时下手盗窃。","namc":"十二罗汉","intro":"Daniel Ocean recruits one more member to pull off three major European heists in this sequel to Ocean's Eleven.","img":"MmJmYzBjNTktMTJjZS00ZGRhLWE1Y2QtOWQxZGU0Y2RmMjkyXkEyXkFqcGdeQXVyMTQxNzMzNDI@","url":"pgY3TCAS#LaCloqueqJIL_sBtqXBgXA","imdb":"0349903"},{"id":7,"name":"Ocean's Thirteen","year":2007,"leng":122,"rati":"PG-13","imdb":"0496806","url":"UlJQGZyI#Xge9kjsFR6yh9vf_P_HsoQ","img":"MTMyNTc1NzY5MV5BMl5BanBnXkFtZTcwNDM4NTQzMw@@","intro":"Danny Ocean round up for a third heist after the casino owner double-crosses one of the original eleven.","namc":"十三罗汉","inroc":"丹尼重出江湖并非求财，只因曾经的’罗汉团‘成员鲁本遭大亨威利班克斯的欺诈。仗义的丹尼要给兄弟讨个说法。"},{"id":8,"name":"Fear and Loathing in Las Vegas","year":1998,"leng":118,"rati":"R","imdb":"0120669","url":"5hAyAb6Z#YtTMDNGY9nWazWs11BURGg","img":"NjA2ZDY3ZjYtZmNiMC00MDU5LTgxMWEtNzk1YmI3NzdkMTU0XkEyXkFqcGdeQXVyNjQyMjcwNDM@","intro":"An oddball journalist and his psychopathic lawyer travel to Las Vegas for some psychedelic escapades.","namc":"恐惧拉斯维加斯","inroc":"体育记者杜克和他的律师朋友刚佐博士一起开车前往拉斯维加斯，寻找“美国梦”。"},{"id":9,"name":"Leaving Las Vegas","year":1995,"leng":111,"rati":"R","imdb":"0113627","url":"dsICRLQS#q2ttd30MN0w28zW3Npo5Qw","img":"NDg3MDM5NTI0MF5BMl5BanBnXkFtZTcwNDY0NDk0NA@@","intro":"A screenwriter who lost everything arrives in Las Vegas to drink himself to death. There, he forms an uneasy friendship.","namc":"离开拉斯维加斯","inroc":"一个失望的酒鬼在赌城遇见了一个妓女,他们都孤独,都无助,然而在这个人情淡漠的城市里,他们却是彼此唯一的朋友."},{"id":10,"name":"Rounders","year":1998,"leng":121,"rati":"R","imdb":"0128442","url":"t5JkXbQC#DJumHUrsIXRgfwUJls_Ajw","img":"MzViMmMxMzItYmYyYi00NGU3LWI2MDMtNjcwOWFmZTZkOTcwXkEyXkFqcGdeQXVyNDkzNTM2ODg@","intro":"A young gambler must play big stakes poker to pay off loan sharks while balancing his relationship and the college.","namc":"赌王之王","inroc":"赌王之王,一个本来准备金盆洗手的职业赌徒，为了刚出狱的朋友还清高利贷而重出江湖。"},{"id":11,"name":"The Cincinnati Kid","year":1965,"leng":102,"rati":"TV-14","imdb":"0059037","url":"EpY0wJZa#hJwsp_852fXP1tcBTivbSg","img":"ZTEzZmJjOTgtNWZlNC00MGQzLTgyOGUtNTRiZDY5NmUzYmQzXkEyXkFqcGdeQXVyMzk3NTUwOQ@@","intro":"A young poker player tries to prove himself in a high-stakes match against a master of the game.","namc":"辛辛那提小子","inroc":"一名叫辛辛那提的少年以赌扑克牌为活。因为他赌术的精艺，他越赌越大。最后，他将面对传奇扑克赌王兰西。"},{"id":12,"name":"Hard Eight","year":1996,"leng":101,"rati":"R","imdb":"0119256","url":"psQSED5I#XYbj84BYmjArCV0Gb47r9g","img":"MTY2ZWQ3NTctMjJiNy00Y2RlLWEyM2MtNTBmNjAxMWJhZTFmXkEyXkFqcGdeQXVyNTE1NjY5Mg@@","intro":"Pro gambler Sydney teaches John the tricks of the trade. John does well until he falls for a cocktail waitress.","namc":"赌城纵横","inroc":"混迹多年的西德尼教了穷小子约翰几招赌术。两年后约翰成为了西德尼的助手，并爱上了惹麻烦的赌场女招待。"},{"id":13,"name":"The Gambler","year":2014,"leng":111,"rati":"R","imdb":"2039393","url":"IhRmxbCR#97y-94ttEVQi-Vej7oc3UA","img":"MjA5MjIzODE3N15BMl5BanBnXkFtZTgwNzUwNzYwMzE@","intro":"Professor and gambler Bennett borrowed from a loan shark. He is also in a relationship with a student. Will he risk for a second chance?","namc":"赌棍","inroc":"本内特既是大学教授又是一个的赌徒。为了还债，他不得不已自己的生命为代价，向一位高利贷大佬借债。"},{"id":14,"name":"California Split","year":1974,"leng":108,"rati":"R","imdb":"0071269","url":"04ZgWbiS#yB0h3WDkpPh_ZFPa_P4qDg","img":"Njk5MzNjMDctYTdhNS00OWI0LWI2MzUtMDI3ODYwMDc5M2E3XkEyXkFqcGdeQXVyMjI4MjA5MzA@","intro":"When a newbie gambler befriends a pro, he goes deeper into the gambling world where the stake keeps getting higher.","namc":"加州分裂","inroc":"当新手赌徒与职业赌徒交朋友时，他会陷入赌注不断增加的赌博世界。"},{"id":15,"name":"Croupier","year":1998,"leng":94,"rati":"N/A","imdb":"0159382","url":"V8B21ZyA#5kiLrKoQsgYXHZ3G4Gbc-Q","img":"YjFjMTg4ZGQtNzgxOS00MThkLWE3YTUtMGMwZDE1ZGYxNmQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@","intro":"An aspiring writer is hired as a croupier at a casino, where he realizes that his life would make a great novel.","namc":"杀戮赌场","inroc":"一位有抱负的作家被聘为赌场的荷官，在那里他意识到他的生活将成为一部伟大的小说。\n无中文字幕"},{"id":16,"name":"Owning Mahowny","year":2003,"leng":104,"rati":"R","imdb":"0285861","url":"J4ZiDJiD#RRGPf2f_Sa_XZUOYGe1Kvw","img":"MTI1MDg5NDY4Nl5BMl5BanBnXkFtZTYwODYxNzk5","intro":"A bank manager with a gambling problem and access to a multimillion dollar account gets into a messy situation.","namc":"美国大诈案","inroc":"一个银行经理有两个难题：他是一个天生的赌徒，然后他的职务又给了他支配20亿美元的特权。"},{"id":17,"name":"The Cooler","year":2003,"leng":101,"rati":"R","imdb":"0318374","url":"9pJwWJYK#Ow3yC8OsxlwovkD-frP5EQ","img":"MTQzOTI5MDcxMV5BMl5BanBnXkFtZTYwMDQwOTI3","intro":"In a Las Vegas casino, its top gambling jinx breaks his curse when he falls in love, much to his boss' dismay.","namc":"倒霉蛋","inroc":"伯尼是整个赌城最倒霉的人，这个大霉人被赌场老板一眼相中，利用霉运来牵制赌客。但是，霉人终于得到了上帝的垂青。"},{"id":18,"name":"21","year":2008,"leng":123,"rati":"PG-13","imdb":"0478087","url":"d8IkgLQQ#V-dBVsgo8f5JPQ96Wu-VlQ","img":"MjAyNTU5OTcxOV5BMl5BanBnXkFtZTcwMDEyNjM2MQ@@","intro":"Six MIT students trained to become experts in card counting and took Vegas casinos for millions.","namc":"决胜21点","inroc":"几位MIT数学天才少年凭才智大闹赌城拉斯维加斯。"},{"id":19,"name":"Bugsy","year":1991,"leng":136,"rati":"R","imdb":"0101516","url":"VkQgxRwK#8bGZCGotR4ao3RRbWwk2BA","img":"ZTQ4NmZjMTktMWU1MC00ZGU1LTk1NjUtODg2ODg3NjdmMDkxXkEyXkFqcGdeQXVyMjUzOTY1NTc@","intro":"The story of how Benjamin 'Bugsy' Siegel started Las Vegas.","namc":"豪情四海","inroc":"本片描写美国历史上的真实人物―东海岸匪徒本杰明· 西的传奇经历。"},{"id":20,"name":"The Good Thief","year":2002,"leng":109,"rati":"R","imdb":"0281820","url":"ktAWTBqR#fpGpUQHiWPWSMnh5NY_R5w","img":"MTY2NDUyNDM5NV5BMl5BanBnXkFtZTYwODEzNTk5","intro":"An aging gambler on a losing streak attempts to rob a casino. But someone tipped off the cops.","namc":"义贼鲍伯","inroc":"一名上了年纪的赌徒为了证明自己宝刀未老决定抢劫一家赌场。"},{"id":21,"name":"Revolver","year":2005,"leng":111,"rati":"R","imdb":"0365686","url":"wkYGRDZL#VIl6XPYDUww8bLh5-VozDA","img":"MTQ1OTA3MjM4MF5BMl5BanBnXkFtZTYwMTMxODc4","intro":"Gambler Jake Green enters into a game with potentially deadly consequences.","namc":"转轮手枪","inroc":"一名命不久矣的职业赌徒找寻自己的入狱原因和报仇。"},{"id":22,"name":"Casino Jack","year":2010,"leng":108,"rati":"R","img":"MTM2NzQ4NDE2M15BMl5BanBnXkFtZTcwNDM0NzcwNA@@","url":"9lY1CC5R#EmO24gyg5B5iSf-7g0Rs2w","intro":"A lobbyist and his protégé go down as their schemes lead to corruption and murder.","namc":"黑金风暴","inroc":"杰克利用自己的说客身份开办了许多赌场。 在贪婪心理和金钱驱动下,杰克把自己的触角伸向了更为敏感的领域。","imdb":"1194417"},{"id":23,"name":"Honeymoon in Vegas","year":1992,"leng":96,"rati":"PG-13","img":"YzA3ODllYTgtMWM4NC00MmNiLThhYTctNzdkNTQzZTA4YmM1XkEyXkFqcGdeQXVyNjMwMjk0MTQ@","url":"M0ZTyITD#5Xx726Kzrb0ciNS5zfsTIQ","intro":"Jack loses in Vegas, where he's marrying Betsy. The winner wants a weekend with Betsy to cancel the debt. Whom will she marry?","namc":"维加斯蜜月","inroc":"杰克即将嫁给贝茜，然而他赌输了。获胜者希望与贝茜共度周末以取消债务。她会嫁给谁？","imdb":"0104438"},{"id":24,"name":"Let it Ride","year":1989,"leng":90,"rati":"PG-13","inroc":"一位出租车司机得到了赛马的小道消息并赢得了大奖，但他似乎无法停止赌博。\n无中文字幕","namc":"赌徒","intro":"A cab driver gets a hot tip on a race horse and wins big, but he can't seem to stop gambling.","img":"OTQ0ODdiMTItYzkyMS00MzQ4LTljNTktNzVjMDg2M2E1NWQyXkEyXkFqcGdeQXVyMTMxMTY0OTQ@","url":"95IlBIqC#Je4F36aJ6FSylSjnt-nNWA","imdb":"0097731"},{"id":25,"name":"Maverick","year":1994,"leng":127,"rati":"PG","inroc":"Bret Maverick 需要钱参加扑克锦标赛，而他将面临各种不幸和挑战。","namc":"赌侠马华力","intro":"Bret Maverick, needing money for a poker tournament, faces various mishaps and challenges.","img":"Y2I1OTY2NmUtMGVlZi00NjNmLThkNTgtMjExMzRhOTM2MDJiXkEyXkFqcGdeQXVyNDk3NzU2MTQ@","url":"B8JXEYbQ#-Y-EAI4QyYrdCFrRzt4z3Q","imdb":"0110478"},{"id":26,"name":"Molly's Game","year":2017,"leng":140,"rati":"R","url":"s1QFwAiC#8WcfSACaIrvWINLQShmiEg","img":"NTkzMzRlYjEtMTQ5Yi00OWY3LWI0NzYtNGQ4ZDkzZTU0M2IwXkEyXkFqcGdeQXVyMTMxODk2OTU@","intro":"The true story of Molly Bloom, a pro skier who ran the world's most exclusive high-stakes poker game.","namc":"茉莉的牌局","inroc":"'扑克公主'茉莉·布鲁姆从一位奥运选手变为运营私人赌场老板后遭到FBI调查的故事。","imdb":"4209788"},{"id":27,"name":"Atlantic City","year":1980,"leng":104,"rati":"R","inroc":"在一个腐败的城市，一个黑帮和一个大麻贩子的妻子发现自己陷入了爱情、金钱和危险的出逃。","namc":"大西洋城","intro":"In a corrupt city, a gangster and the wife of a pot dealer find themselves in an escapade of love, money and danger.","img":"YThhZmI4ZjYtYzZlZS00NWRlLWJkZmMtNGVlMzIyNmE1ZjU1XkEyXkFqcGdeQXVyMTAwMzUyOTc@","url":"IhR1BILB#fX7oAxPyb2BV2xvj5E4qyQ","imdb":"0080388"},{"id":28,"name":"Mississippi Grind","year":2015,"leng":105,"rati":"R","url":"4lIlQS4Y#wSpaBjtEutspRhubjqJntQ","img":"MjE3NTE3NzY2MV5BMl5BanBnXkFtZTgwNTY3NDIzNjE@","intro":"Down on his luck, Gerry teams up with young poker player Curtis in an attempt to change his luck.","namc":"密西西比游戏","inroc":"走背字的天才赌徒盖瑞在遇到了柯蒂斯之后，两人一同踏上了遍访新奥尔良赌场的豪赌之旅。","imdb":"2349144"},{"id":29,"name":"The Color of Money","year":1986,"leng":119,"rati":"R","namc":"金钱本色","inroc":"金盆洗手的球坛老手艾迪，在小镇的台球室发掘了球技颇佳的新人文森，重新燃起对台球的兴趣。","intro":"Eddie Felson teaches a cocky but talented protégé the ropes of pool hustling, inspiring him to make a comeback.","img":"NGY4NGEzY2QtZmIwYS00NzkwLWI0MmItZmVjYjU0YzM3ZjBmXkEyXkFqcGdeQXVyNTE1NjY5Mg@@","url":"chZlEQ4B#TLqfSulVVU-1RQPtvn0tyg","imdb":"0090863"},{"id":30,"name":"Uncut Gems","year":2019,"leng":135,"rati":"R","inroc":"嗜赌成瘾的纽约珠宝商霍华德希望用自己收购的稀有钻石还清赌债，以此来挽救自己麻烦不断的生活。","url":"1tB3QKZJ#25cXUPxvGsbA1Yto_eRcoQ","img":"ZDhkMjUyYjItYWVkYi00YTM5LWE4MGEtY2FlMjA3OThlYmZhXkEyXkFqcGdeQXVyODk4OTc3MTY@","intro":"With his debts mounting, a fast-talking New York jeweler risks everything in hope of staying alive.","namc":"原钻","imdb":"5727208"}];
var cridatae = ["Highest Win Amount","Lowest Loss Amount", "Best Win/Loss Ratio", "Highest Win Streak"];
var cridatac = ["最高赢钱", "最低赔钱", "胜负比例", "最高连胜"];
var settt = ["drinkleft","text_area81","text_area222","LMText","LSText","LSText1","LSText2","LYourscore","LEstreward","LText4","LText5","mst","text_area163", "text_area168", "text_area166", "text_area75", "text_area77", "button37", "version", "text_area158", "text_area153", "text_area141", "text_area62", "text_area101", "text_area142", "text_area138", "text_area132", "text_area185", "text_area186", "text_area189", "text_area192"];
var settings = ["pokerstreak","wheelstreak","drinkt5","drinks1","drinks2","drinkt3","drinkt4","drinkt2","drinkt1","drinkt6","drinkt7","drinkt8","pokeranno","text_area228","pokerwager","pokeraccount","text_area239","text_area236","text_area220","LText2","LText3","text_area154","Anim4","label3","avatarT","text_area227","text_area225","text_area221","text_area226","pvptemp","cdcode","text_area209","text_area165", "text_area167", "text_area162", "text_area164", "text_area124", "text_area63", "text_area70", "text_area157", "text_area159", "text_area107", "text_area108", "text_area109", "text_area112", "text_area111", "text_area110", "text_area113", "text_area114", "text_area69", "text_area44", "text_area37", "dlc1", "text_area68", "text_area11", "text_area67", "text_area65", "text_area3", "text_area8", "text_area11", "text_area37", "text_area44", "text_area49", "text_area24", "text_area17", "text_area13", "text_area103", "text_area139", "barrr", "barrrrr", "text_area74", "text_area91", "text_area130", "text_area151", "text_area152", "text_area148", "text_area144", "text_area61", "text_area32", "text_area41", "text_area34", "text_area55", "text_area29", "text_area6", "text_area31", "account", "text_area2", "text_area71", "text_area12", "text_area23", "text_area47", "text_area50", "text_area80", "text_area184", "text_area191", "text_area190", "text_area193", "text_area182", "text_area183", "text_area187"];
var total = ["2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var betthree = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ];
var faxe=["\x54\x68\x65\x20\x66\x69\x72\x73\x74\x20\x73\x6C\x6F\x74\x20\x77\x61\x73\x20\x74\x68\x65\x20\x31\x38\x39\x35\x20\x4C\x69\x62\x65\x72\x74\x79\x20\x42\x65\x6C\x6C\x2E\x20\x49\x74\x20\x68\x61\x64\x20\x74\x68\x72\x65\x65\x20\x72\x65\x65\x6C\x73\x2C\x20\x63\x6F\x6E\x74\x61\x69\x6E\x69\x6E\x67\x20\x64\x69\x61\x6D\x6F\x6E\x64\x2C\x20\x73\x70\x61\x64\x65\x2C\x20\x68\x65\x61\x72\x74\x2C\x20\x70\x6C\x75\x73\x20\x74\x68\x65\x20\x69\x6D\x61\x67\x65\x20\x6F\x66\x20\x61\x20\x4C\x69\x62\x65\x72\x74\x79\x20\x42\x65\x6C\x6C\x2E","\x54\x68\x65\x20\x72\x6F\x75\x6C\x65\x74\x74\x65\x20\x77\x68\x65\x65\x6C\x73\x20\x75\x73\x65\x64\x20\x69\x6E\x20\x74\x68\x65\x20\x31\x37\x39\x30\x73\x20\x68\x61\x64\x20\x72\x65\x64\x20\x66\x6F\x72\x20\x74\x68\x65\x20\x73\x69\x6E\x67\x6C\x65\x20\x7A\x65\x72\x6F\x20\x61\x6E\x64\x20\x62\x6C\x61\x63\x6B\x20\x66\x6F\x72\x20\x74\x68\x65\x20\x64\x6F\x75\x62\x6C\x65\x20\x7A\x65\x72\x6F\x2E","\x4B\x65\x6E\x6F\x20\x69\x73\x20\x6F\x66\x20\x43\x68\x69\x6E\x65\x73\x65\x20\x6F\x72\x69\x67\x69\x6E\x2C\x20\x64\x61\x74\x69\x6E\x67\x20\x62\x61\x63\x6B\x20\x61\x74\x20\x6C\x65\x61\x73\x74\x20\x32\x30\x30\x30\x20\x79\x65\x61\x72\x73\x2E\x20\x49\x74\x20\x69\x73\x20\x6F\x72\x69\x67\x69\x6E\x61\x6C\x6C\x79\x20\x61\x20\x62\x65\x74\x74\x69\x6E\x67\x20\x67\x61\x6D\x65\x20\x69\x6E\x76\x6F\x6C\x76\x69\x6E\x67\x20\x68\x6F\x6D\x69\x6E\x67\x20\x70\x69\x67\x65\x6F\x6E\x73\x2E","\x42\x69\x67\x20\x53\x69\x78\x20\x57\x68\x65\x65\x6C\x20\x69\x73\x20\x61\x6C\x73\x6F\x20\x6B\x6E\x6F\x77\x6E\x20\x61\x73\x20\x27\x57\x68\x65\x65\x6C\x20\x6F\x66\x20\x46\x6F\x72\x74\x75\x6E\x65\x27\x2C\x20\x27\x4D\x6F\x6E\x65\x79\x20\x57\x68\x65\x65\x6C\x27\x2C\x20\x27\x44\x69\x63\x65\x20\x57\x68\x65\x65\x6C\x27\x20\x6F\x72\x20\x73\x69\x6D\x70\x6C\x79\x20\x27\x4C\x75\x63\x6B\x79\x20\x57\x68\x65\x65\x6C\x27\x2E","\x49\x6E\x20\x74\x68\x65\x20\x31\x39\x36\x30\x73\x2C\x20\x41\x6D\x65\x72\x69\x63\x61\x6E\x20\x67\x72\x6F\x63\x65\x72\x79\x20\x73\x74\x6F\x72\x65\x73\x20\x67\x61\x76\x65\x20\x6F\x75\x74\x20\x63\x61\x72\x64\x73\x20\x63\x6F\x76\x65\x72\x65\x64\x20\x77\x69\x74\x68\x20\x61\x20\x77\x61\x78\x79\x20\x63\x6F\x61\x74\x69\x6E\x67\x2C\x20\x61\x6E\x64\x20\x63\x6F\x6E\x74\x61\x69\x6E\x65\x64\x20\x61\x20\x70\x6F\x73\x73\x69\x62\x6C\x65\x20\x63\x61\x73\x68\x20\x70\x72\x69\x7A\x65\x2E","\x49\x6E\x20\x74\x68\x65\x20\x65\x61\x72\x6C\x79\x20\x31\x36\x30\x30\x73\x2E\x20\x4B\x69\x6E\x67\x20\x4A\x61\x6D\x65\x73\x20\x49\x20\x66\x6F\x75\x6E\x64\x65\x64\x20\x68\x6F\x72\x73\x65\x20\x62\x65\x74\x74\x69\x6E\x67\x20\x69\x6E\x20\x4E\x65\x77\x6D\x61\x72\x6B\x65\x74\x2C\x20\x45\x6E\x67\x6C\x61\x6E\x64\x2E\x20\x42\x79\x20\x74\x68\x65\x6E\x2C\x20\x74\x68\x65\x20\x61\x63\x74\x69\x76\x69\x74\x79\x20\x77\x61\x73\x20\x72\x65\x73\x65\x72\x76\x65\x64\x20\x66\x6F\x72\x20\x74\x68\x65\x20\x65\x6C\x69\x74\x65\x2E","\x53\x6F\x6D\x65\x20\x62\x65\x6C\x69\x65\x76\x65\x20\x74\x68\x61\x74\x20\x52\x6F\x6D\x61\x6E\x20\x73\x6F\x6C\x64\x69\x65\x72\x73\x20\x69\x6E\x76\x65\x6E\x74\x65\x64\x20\x43\x72\x61\x70\x73\x2C\x20\x75\x73\x69\x6E\x67\x20\x6B\x6E\x75\x63\x6B\x6C\x65\x2D\x62\x6F\x6E\x65\x73\x20\x6F\x66\x20\x61\x20\x70\x69\x67\x20\x61\x73\x20\x64\x69\x63\x65\x20\x61\x6E\x64\x20\x74\x68\x65\x69\x72\x20\x61\x72\x6D\x6F\x72\x20\x73\x68\x69\x65\x6C\x64\x73\x20\x61\x73\x20\x61\x20\x74\x61\x62\x6C\x65\x2E","\x42\x6C\x61\x63\x6B\x6A\x61\x63\x6B\x20\x70\x72\x6F\x62\x61\x62\x6C\x79\x20\x6F\x72\x69\x67\x69\x6E\x61\x74\x65\x64\x20\x69\x6E\x20\x46\x72\x65\x6E\x63\x65\x20\x61\x72\x6F\x75\x6E\x64\x20\x31\x37\x30\x30\x2E\x20\x54\x68\x65\x20\x63\x61\x72\x64\x73\x20\x77\x65\x72\x65\x20\x63\x61\x6C\x6C\x65\x64\x20\x27\x56\x69\x6E\x67\x74\x2D\x65\x74\x2D\x55\x6E\x2C\x27\x20\x77\x68\x69\x63\x68\x20\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x73\x20\x74\x6F\x20\x27\x54\x77\x65\x6E\x74\x79\x2D\x6F\x6E\x65\x27\x2E","\x54\x68\x65\x20\x6C\x61\x72\x67\x65\x73\x74\x20\x53\x6C\x6F\x74\x73\x20\x70\x61\x79\x6F\x75\x74\x20\x68\x61\x70\x70\x65\x6E\x65\x64\x20\x6F\x6E\x20\x4D\x61\x72\x63\x68\x2C\x20\x32\x30\x30\x33\x20\x2D\x20\x24\x33\x39\x2E\x37\x20\x6D\x69\x6C\x6C\x69\x6F\x6E\x2E","\x57\x68\x65\x6E\x20\x74\x68\x65\x20\x6E\x75\x6D\x62\x65\x72\x73\x20\x6F\x6E\x20\x61\x20\x72\x6F\x75\x6C\x65\x74\x74\x65\x20\x77\x68\x65\x65\x6C\x20\x61\x72\x65\x20\x61\x64\x64\x65\x64\x20\x75\x70\x2C\x20\x74\x68\x65\x79\x20\x65\x71\x75\x61\x6C\x20\x36\x36\x36\x2E","\x32\x30\x2F\x32\x30\x20\x4B\x65\x6E\x6F\x20\x68\x61\x76\x65\x20\x61\x6E\x20\x6F\x64\x64\x20\x6F\x66\x20\x31\x20\x69\x6E\x20\x34\x39\x2C\x38\x33\x36\x2C\x30\x33\x32\x2E\x20\x54\x68\x65\x20\x6F\x64\x64\x73\x20\x6F\x66\x20\x67\x65\x74\x74\x69\x6E\x67\x20\x73\x74\x72\x75\x63\x6B\x20\x62\x79\x20\x6C\x69\x67\x68\x74\x6E\x69\x6E\x67\x20\x69\x6E\x20\x79\x6F\x75\x72\x20\x6C\x69\x66\x65\x74\x69\x6D\x65\x20\x61\x72\x65\x20\x31\x20\x69\x6E\x20\x37\x30\x30\x2C\x30\x30\x30\x2E","\x54\x68\x65\x20\x73\x63\x69\x65\x6E\x74\x69\x66\x69\x63\x20\x6E\x61\x6D\x65\x20\x66\x6F\x72\x20\x61\x20\x68\x6F\x72\x73\x65\x20\x69\x73\x20\x45\x71\x75\x75\x73\x20\x63\x61\x62\x61\x6C\x6C\x75\x73\x2E","\x54\x68\x65\x20\x6F\x64\x64\x73\x20\x6F\x66\x20\x77\x69\x6E\x6E\x69\x6E\x67\x20\x61\x20\x6D\x65\x67\x61\x20\x6A\x61\x63\x6B\x70\x6F\x74\x20\x69\x6E\x20\x53\x63\x72\x61\x74\x63\x68\x20\x43\x61\x72\x64\x20\x69\x73\x20\x63\x6C\x6F\x73\x65\x20\x74\x6F\x20\x74\x68\x65\x20\x63\x68\x61\x6E\x63\x65\x20\x6F\x66\x20\x67\x65\x74\x74\x69\x6E\x67\x20\x73\x74\x72\x75\x63\x6B\x20\x62\x79\x20\x6C\x69\x67\x68\x74\x6E\x69\x6E\x67\x2E\x20\x57\x68\x61\x74\x20\x69\x73\x20\x69\x74\x2C\x20\x79\x6F\x75\x20\x61\x73\x6B\x3F","\x42\x69\x67\x20\x73\x69\x78\x20\x77\x68\x65\x65\x6C\x20\x69\x73\x20\x61\x63\x74\x75\x61\x6C\x6C\x79\x20\x61\x20\x72\x65\x64\x65\x73\x69\x67\x6E\x20\x6F\x66\x20\x61\x20\x63\x6C\x61\x73\x73\x69\x63\x61\x6C\x20\x63\x61\x72\x6E\x69\x76\x61\x6C\x20\x67\x61\x6D\x65\x2C\x20\x66\x6F\x72\x20\x6B\x69\x64\x73\x2E","\x54\x68\x65\x20\x6C\x6F\x6E\x67\x65\x73\x74\x20\x43\x72\x61\x70\x73\x20\x62\x65\x74\x20\x74\x6F\x6F\x6B\x20\x31\x35\x34\x20\x72\x6F\x6C\x6C\x2E\x20\x54\x68\x65\x20\x6F\x64\x64\x73\x20\x6F\x66\x20\x61\x20\x31\x35\x34\x2D\x72\x6F\x6C\x6C\x20\x72\x75\x6E\x20\x77\x69\x74\x68\x6F\x75\x74\x20\x73\x65\x76\x65\x6E\x69\x6E\x67\x20\x6F\x75\x74\x20\x68\x61\x76\x65\x20\x62\x65\x65\x6E\x20\x63\x61\x6C\x63\x75\x6C\x61\x74\x65\x64\x20\x61\x74\x20\x31\x20\x69\x6E\x20\x31\x2E\x35\x36\x20\x74\x72\x69\x6C\x6C\x69\x6F\x6E\x2E","\x43\x61\x72\x64\x20\x63\x6F\x75\x6E\x74\x69\x6E\x67\x20\x69\x6E\x20\x42\x6C\x61\x63\x6B\x6A\x61\x63\x6B\x20\x69\x73\x20\x6C\x65\x73\x73\x20\x72\x65\x61\x6C\x69\x73\x74\x69\x63\x20\x74\x6F\x64\x61\x79\x2C\x20\x61\x73\x20\x43\x61\x73\x69\x6E\x6F\x73\x20\x69\x6D\x70\x6C\x65\x6D\x65\x6E\x74\x20\x6D\x75\x6C\x74\x69\x70\x6C\x65\x20\x64\x65\x63\x6B\x73\x20\x61\x6E\x64\x20\x6D\x6F\x64\x65\x72\x6E\x20\x73\x75\x72\x76\x65\x69\x6C\x6C\x61\x6E\x63\x65\x2E","\x54\x68\x65\x20\x74\x68\x72\x65\x65\x20\x74\x69\x63\x6B\x65\x74\x20\x67\x61\x6D\x65\x73\x20\x68\x61\x76\x65\x20\x74\x68\x65\x20\x73\x61\x6D\x65\x20\x61\x76\x65\x72\x61\x67\x65\x20\x70\x61\x79\x6F\x75\x74\x20\x2D\x20\x32\x35\x34\x34\x2E\x31\x36\x20\x63\x72\x65\x64\x69\x74\x73\x2E","\x44\x61\x69\x6C\x79\x20\x72\x65\x77\x61\x72\x64\x20\x61\x6E\x64\x20\x70\x72\x6F\x6D\x6F\x20\x75\x73\x65\x64\x20\x74\x6F\x20\x67\x69\x76\x65\x20\x63\x72\x65\x64\x69\x74\x73\x20\x64\x69\x72\x65\x63\x74\x6C\x79\x2E","\x54\x68\x65\x72\x65\x20\x77\x61\x73\x20\x61\x6E\x20\x65\x78\x70\x6C\x6F\x69\x74\x20\x74\x68\x61\x74\x20\x61\x6C\x6C\x6F\x77\x20\x61\x63\x63\x6F\x75\x6E\x74\x73\x20\x74\x6F\x20\x62\x65\x20\x64\x75\x70\x6C\x69\x63\x61\x74\x65\x64\x2E","\x54\x68\x65\x72\x65\x20\x77\x61\x73\x20\x61\x6E\x20\x65\x78\x70\x6C\x6F\x69\x74\x20\x74\x68\x61\x74\x20\x61\x6C\x6C\x6F\x77\x20\x79\x6F\x75\x20\x74\x6F\x20\x66\x61\x72\x6D\x20\x45\x58\x50\x20\x76\x69\x61\x20\x52\x6F\x75\x6C\x65\x74\x74\x65\x20\x61\x6E\x64\x20\x43\x72\x61\x70\x73\x2E","\x54\x68\x65\x72\x65\x20\x77\x61\x73\x20\x61\x6E\x20\x65\x78\x70\x6C\x6F\x69\x74\x20\x74\x68\x61\x74\x20\x61\x6C\x6C\x6F\x77\x20\x79\x6F\x75\x20\x74\x6F\x20\x63\x68\x65\x61\x74\x20\x64\x61\x69\x6C\x79\x20\x72\x65\x77\x61\x72\x64\x20\x62\x79\x20\x61\x64\x6A\x75\x73\x74\x69\x6E\x67\x20\x73\x79\x73\x74\x65\x6D\x20\x74\x69\x6D\x65\x2E","\x57\x68\x65\x6E\x20\x4C\x75\x63\x6B\x79\x20\x53\x74\x72\x69\x6B\x65\x20\x6C\x61\x75\x6E\x63\x68\x65\x64\x2C\x20\x74\x68\x65\x72\x65\x20\x77\x65\x72\x65\x20\x6F\x6E\x6C\x79\x20\x34\x20\x67\x61\x6D\x65\x73\x2E","\x54\x68\x65\x72\x65\x20\x61\x72\x65\x20\x35\x20\x74\x69\x6D\x65\x64\x20\x65\x76\x65\x6E\x74\x73\x20\x69\x6E\x20\x4C\x75\x63\x6B\x79\x20\x53\x74\x72\x69\x6B\x65\x20\x2D\x20\x46\x65\x73\x74\x69\x76\x61\x6C\x73\x2C\x20\x65\x76\x65\x6E\x74\x73\x2C\x20\x43\x61\x73\x69\x6E\x6F\x20\x43\x69\x6E\x65\x6D\x61\x2C\x20\x53\x77\x65\x65\x70\x73\x74\x61\x6B\x65\x73\x2C\x20\x61\x6E\x64\x20\x54\x61\x73\x6B\x6D\x61\x73\x74\x65\x72\x2E","\x53\x6C\x6F\x74\x73\x20\x68\x61\x76\x65\x20\x62\x65\x65\x6E\x20\x74\x68\x65\x20\x6D\x6F\x73\x74\x20\x61\x75\x67\x6D\x65\x6E\x74\x65\x64\x20\x67\x61\x6D\x65\x20\x69\x6E\x20\x4C\x75\x63\x6B\x79\x20\x53\x74\x72\x69\x6B\x65\x2E","\x4D\x69\x73\x73\x69\x6F\x6E\x20\x54\x6F\x6B\x65\x6E\x2C\x20\x46\x65\x65\x64\x62\x61\x63\x6B\x2C\x20\x4D\x6F\x76\x69\x65\x73\x2C\x20\x43\x44\x4B\x2C\x20\x53\x77\x65\x65\x70\x73\x74\x61\x6B\x65\x73\x2C\x20\x4C\x6F\x67\x2D\x69\x6E\x20\x4C\x6F\x74\x74\x6F\x2C\x20\x61\x6E\x64\x20\x54\x61\x73\x6B\x6D\x61\x73\x74\x65\x72\x20\x61\x72\x65\x20\x6E\x6F\x74\x20\x61\x76\x61\x69\x6C\x61\x62\x6C\x65\x20\x66\x6F\x72\x20\x67\x75\x65\x73\x74\x73\x2E","\x54\x68\x69\x73\x20\x61\x70\x70\x20\x68\x61\x76\x65\x20\x6D\x6F\x72\x65\x20\x74\x68\x61\x6E\x20\x31\x30\x30\x30\x30\x20\x6C\x69\x6E\x65\x73\x20\x6F\x66\x20\x63\x6F\x64\x65\x20\x61\x6E\x64\x20\x6D\x6F\x72\x65\x20\x74\x68\x61\x6E\x20\x32\x35\x30\x20\x61\x73\x73\x65\x74\x20\x66\x69\x6C\x65\x73\x2E","\x54\x68\x65\x72\x65\x20\x61\x72\x65\x20\x31\x32\x20\x66\x65\x73\x74\x69\x76\x61\x6C\x73\x2C\x20\x65\x61\x63\x68\x20\x77\x69\x74\x68\x20\x75\x6E\x69\x71\x75\x65\x20\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2C\x20\x6D\x75\x73\x69\x63\x2C\x20\x61\x6E\x64\x20\x63\x72\x65\x64\x69\x74\x20\x76\x61\x72\x69\x61\x6E\x74\x73\x2E","\x54\x68\x65\x72\x65\x20\x61\x72\x65\x20\x61\x20\x67\x72\x61\x6E\x64\x20\x74\x6F\x74\x61\x6C\x20\x6F\x66\x20\x31\x35\x20\x67\x61\x6D\x65\x73\x20\x61\x6E\x64\x20\x33\x20\x63\x75\x72\x72\x65\x6E\x63\x69\x65\x73\x20\x69\x6E\x20\x4C\x75\x63\x6B\x79\x20\x53\x74\x72\x69\x6B\x65\x2E","\x54\x68\x65\x20\x6D\x6F\x73\x74\x20\x65\x78\x70\x65\x6E\x73\x69\x76\x65\x20\x61\x76\x61\x74\x61\x72\x20\x75\x73\x65\x64\x20\x74\x6F\x20\x63\x6F\x73\x74\x20\x31\x33\x31\x35\x32\x30\x30\x30\x20\x45\x58\x50\x2E\x20\x4E\x6F\x77\x2C\x20\x74\x68\x65\x72\x65\x27\x73\x20\x74\x77\x69\x63\x65\x20\x6D\x6F\x72\x65\x20\x61\x76\x61\x74\x61\x72\x73\x20\x61\x6E\x64\x20\x68\x61\x6C\x66\x20\x61\x73\x20\x67\x72\x69\x6E\x64\x79\x2E","\x4F\x6E\x63\x65\x20\x75\x70\x6F\x6E\x20\x74\x68\x65\x20\x74\x69\x6D\x65\x2C\x20\x74\x68\x65\x72\x65\x20\x75\x73\x65\x64\x20\x74\x6F\x20\x62\x65\x20\x6F\x6E\x6C\x79\x20\x32\x30\x20\x6D\x6F\x76\x69\x65\x73\x20\x69\x6E\x20\x43\x61\x73\x69\x6E\x6F\x20\x43\x69\x6E\x65\x6D\x61\x2C\x20\x33\x20\x74\x68\x65\x6D\x65\x73\x2C\x20\x39\x30\x20\x41\x76\x61\x74\x61\x72\x73\x2C\x20\x61\x6E\x64\x20\x33\x30\x20\x6D\x69\x73\x73\x69\x6F\x6E\x73\x2E","\x46\x52\x45\x45\x20\x43\x44\x4B\x21\x20\x54\x6F\x74\x61\x6C\x6C\x79\x20\x6E\x6F\x74\x20\x61\x20\x6C\x69\x65\x21\x20\x45\x6E\x74\x65\x72\x20\x27\x42\x41\x4E\x4D\x45\x44\x41\x44\x44\x59\x27\x20\x74\x6F\x20\x72\x65\x64\x65\x65\x6D\x20\x74\x68\x65\x20\x6D\x79\x73\x74\x65\x72\x69\x6F\x75\x73\x20\x62\x69\x67\x20\x70\x72\x69\x7A\x65\x21","\x48\x6F\x77\x20\x74\x6F\x20\x67\x65\x74\x20\x43\x44\x4B\x3A\x20\x52\x65\x70\x6F\x72\x74\x20\x62\x75\x67\x73\x2C\x20\x70\x61\x72\x74\x69\x63\x69\x70\x61\x74\x65\x20\x69\x6E\x20\x73\x70\x65\x63\x69\x61\x6C\x20\x74\x69\x6D\x65\x64\x20\x65\x76\x65\x6E\x74\x73\x2C\x20\x6F\x72\x20\x6A\x75\x73\x74\x2E\x2E\x2E\x20\x43\x68\x61\x74\x20\x77\x69\x74\x68\x20\x74\x68\x65\x20\x6C\x6F\x6E\x65\x6C\x79\x20\x64\x65\x76\x65\x6C\x6F\x70\x65\x72\x2E","\x54\x4F\x44\x4F\x3A\x20\x49\x6E\x73\x65\x72\x74\x20\x77\x69\x74\x74\x79\x20\x63\x6F\x6D\x6D\x65\x6E\x74\x20\x68\x65\x72\x65\x2E","\x4D\x61\x79\x20\x6C\x75\x63\x6B\x2E\x2E\x2E\x20\x53\x74\x72\x69\x6B\x65\x20\x6F\x6E\x20\x79\x6F\x75\x3F\x20\x41\x6E\x79\x77\x61\x79\x73\x2E","\x41\x70\x70\x6C\x61\x62\x20\x44\x65\x73\x69\x67\x6E\x20\x65\x64\x69\x74\x6F\x72\x20\x69\x73\x20\x73\x6F\x6F\x6F\x6F\x6F\x20\x6C\x61\x67\x67\x79\x2E\x2E\x2E","\x4C\x75\x63\x6B\x20\x69\x73\x20\x75\x73\x65\x66\x75\x6C\x2E\x20\x47\x6F\x20\x67\x72\x61\x62\x20\x73\x6F\x6D\x65\x2E","\x52\x61\x6E\x64\x6F\x6D\x20\x6E\x75\x6D\x62\x65\x72\x20\x69\x73\x20\x61\x20\x66\x65\x61\x74\x75\x72\x65\x2C\x20\x6E\x6F\x74\x20\x61\x20\x62\x75\x67\x2E","\x41\x6E\x79\x6F\x6E\x65\x20\x67\x6F\x74\x20\x73\x70\x61\x72\x65\x20\x68\x61\x69\x72\x3F\x20\x44\x6F\x6E\x61\x74\x65\x20\x73\x6F\x6D\x65\x20\x74\x6F\x20\x6D\x65\x20\x50\x4C\x5A","\x49\x27\x6D\x20\x61\x6E\x20\x65\x78\x74\x72\x65\x6D\x65\x6C\x79\x20\x6D\x65\x64\x69\x6F\x63\x72\x65\x20\x74\x69\x70\x2E","\x41\x72\x65\x20\x79\x6F\x75\x20\x74\x72\x79\x69\x6E\x67\x20\x74\x6F\x20\x66\x69\x67\x75\x72\x65\x20\x73\x6F\x6D\x65\x74\x68\x69\x6E\x67\x20\x6F\x75\x74\x20\x66\x72\x6F\x6D\x20\x6D\x65\x3F\x20\x49\x20\x6B\x6E\x6F\x77\x20\x6E\x6F\x74\x68\x69\x6E\x67\x20\x61\x74\x20\x61\x6C\x6C\x21","\x54\x68\x69\x73\x20\x61\x70\x70\x20\x69\x73\x20\x6D\x61\x64\x65\x20\x62\x79\x20\x4D\x74\x6E\x20\x28\x6D\x6F\x75\x6E\x74\x61\x69\x6E\x29\x20\x47\x63\x6B\x20\x28\x67\x65\x63\x6B\x6F\x29\x20\x41\x70\x70\x20\x4D\x61\x6B\x65\x72\x2E\x20\x49\x66\x20\x6F\x74\x68\x65\x72\x20\x74\x65\x78\x74\x20\x61\x72\x65\x20\x61\x6C\x74\x65\x72\x65\x64\x20\x74\x68\x65\x6E\x20\x74\x68\x65\x79\x20\x73\x74\x6F\x6C\x65\x20\x6D\x79\x20\x77\x6F\x72\x6B\x2E","\x43\x6F\x64\x65\x20\x69\x73\x20\x6F\x62\x66\x75\x73\x63\x61\x74\x65\x64\x20\x74\x6F\x20\x70\x72\x65\x76\x65\x6E\x74\x20\x73\x74\x65\x61\x6C\x69\x6E\x67\x2E\x20\x46\x65\x65\x6C\x20\x66\x72\x65\x65\x20\x74\x6F\x20\x65\x6D\x61\x69\x6C\x20\x74\x68\x65\x20\x64\x65\x76\x65\x6C\x6F\x70\x65\x72\x20\x61\x62\x6F\x75\x74\x20\x61\x6E\x79\x20\x63\x6F\x64\x69\x6E\x67\x20\x71\x75\x65\x73\x74\x69\x6F\x6E\x73\x21","\x50\x6C\x65\x61\x73\x65\x20\x64\x6F\x6E\x27\x74\x20\x63\x68\x61\x6E\x67\x65\x20\x74\x68\x65\x20\x63\x72\x65\x64\x69\x74\x20\x69\x6E\x66\x6F\x20\x61\x66\x74\x65\x72\x20\x79\x6F\x75\x20\x72\x65\x6D\x69\x78\x20\x2D\x20\x49\x20\x73\x70\x65\x6E\x74\x20\x74\x69\x6D\x65\x20\x6F\x6E\x20\x74\x68\x69\x73\x20\x79\x6F\x75\x20\x6B\x6E\x6F\x77\x2C\x20\x61\x74\x20\x6C\x65\x61\x73\x74\x20\x72\x65\x73\x70\x65\x63\x74\x20\x69\x74\x2E"];
var faxc=["\u7B2C\u4E00\u53F0\u8001\u864E\u673A\u662F\x20\x31\x38\x39\x35\x20\u5E74\u7684\u81EA\u7531\u949F\u3002\u5B83\u6709\u4E09\u4E2A\u5377\u8F74\uFF0C\u5305\u542B\u94BB\u77F3\u3001\u9ED1\u6843\u3001\u5FC3\u5F62\u4EE5\u53CA\u81EA\u7531\u949F\u7684\u56FE\u50CF\u3002","\x31\x37\x39\x30\x20\u5E74\u4EE3\u4F7F\u7528\u7684\u8F6E\u76D8\u8D4C\u8F6E\u7684\u5355\u96F6\u4E3A\u7EA2\u8272\uFF0C\u53CC\u96F6\u4E3A\u9ED1\u8272\u3002","\u79D1\u8BFA\u8D77\u6E90\u4E8E\u4E2D\u56FD\uFF0C\u81F3\u5C11\u53EF\u4EE5\u8FFD\u6EAF\u5230\x20\x32\x30\x30\x30\x20\u5E74\u524D\u3002\u5B83\u6700\u521D\u662F\u4E00\u79CD\u6D89\u53CA\u4FE1\u9E3D\u7684\u6295\u6CE8\u6E38\u620F\u3002","\u516D\u5927\u8F6E\u4E5F\u88AB\u79F0\u4E3A\u201C\u8D22\u5BCC\u4E4B\u8F6E\u201D\u3001\u201C\u91D1\u94B1\u8F6E\u201D\u3001\u201C\u9AB0\u5B50\u8F6E\u201D\u6216\u7B80\u79F0\u4E3A\u201C\u5E78\u8FD0\u8F6E\u201D\u3002","\u5728\x20\x31\x39\x36\x30\x20\u5E74\u4EE3\uFF0C\u7F8E\u56FD\u6742\u8D27\u5E97\u53D1\u653E\u6D82\u6709\u8721\u8D28\u6D82\u5C42\u7684\u5361\u7247\uFF0C\u5E76\u53EF\u80FD\u5305\u542B\u73B0\u91D1\u5956\u52B1\u3002","\u5728\x20\x31\x36\x30\x30\x20\u5E74\u4EE3\u521D\u671F\u3002\u8A79\u59C6\u65AF\u4E00\u4E16\u56FD\u738B\u5728\u82F1\u683C\u5170\u7EBD\u9A6C\u514B\u7279\u521B\u7ACB\u4E86\u9A6C\u5339\u535A\u5F69\u516C\u53F8\u3002\u5728\u90A3\u65F6\uFF0C\u8FD9\u9879\u6D3B\u52A8\u662F\u4E3A\u7CBE\u82F1\u4FDD\u7559\u7684\u3002","\u6709\u4E9B\u4EBA\u8BA4\u4E3A\u7F57\u9A6C\u58EB\u5175\u53D1\u660E\u4E86\u63B7\u9AB0\u5B50\uFF0C\u7528\u732A\u7684\u6307\u8282\u9AA8\u4F5C\u4E3A\u9AB0\u5B50\uFF0C\u7528\u4ED6\u4EEC\u7684\u76D4\u7532\u4F5C\u4E3A\u684C\u5B50\u3002","\u4E8C\u5341\u4E00\u70B9\u53EF\u80FD\u8D77\u6E90\u4E8E\x20\x31\x37\x30\x30\x20\u5E74\u5DE6\u53F3\u7684\u6CD5\u56FD\u3002\u8FD9\u4E9B\u724C\u88AB\u79F0\u4E3A\u201C\x56\x69\x6E\x67\x74\x2D\x65\x74\x2D\x55\x6E\u201D\uFF0C\u7FFB\u8BD1\u8FC7\u6765\u5C31\u662F\u201C\u4E8C\u5341\u4E00\u201D\u3002","\u6700\u5927\u7684\u8001\u864E\u673A\u5934\u5956\u53D1\u751F\u5728\x20\x32\x30\x30\x33\x20\u5E74\x20\x33\x20\u6708\x20\x2D\x20\x33\x39\x37\x30\x20\u4E07\u7F8E\u5143\u3002","\u5F53\u5E78\u8FD0\u8F6E\u76D8\u4E0A\u7684\u6570\u5B57\u76F8\u52A0\uFF0C\u603B\u548C\u7B49\u4E8E\x20\x36\x36\x36\u3002","\x32\x30\x2F\x32\x30\x20\u57FA\u8BFA\u7684\u6982\u7387\u4E3A\x20\x34\x39\x2C\x38\x33\x36\x2C\x30\x33\x32\x20\u5206\u4E4B\x20\x31\u3002\u5728\u4F60\u7684\u4E00\u751F\u4E2D\u88AB\u95EA\u7535\u51FB\u4E2D\u7684\u51E0\u7387\u662F\x20\x37\x30\x30\x2C\x30\x30\x30\x20\u5206\u4E4B\x20\x31\u3002","\u9A6C\u7684\u5B66\u540D\u662F\x20\x45\x71\x75\x75\x73\x20\x63\x61\x62\x61\x6C\x6C\x75\x73\u3002","\u5728\u522E\u522E\u5361\u4E2D\u8D62\u5F97\u5DE8\u989D\u5934\u5956\u7684\u51E0\u7387\u63A5\u8FD1\u88AB\u95EA\u7535\u51FB\u4E2D\u7684\u51E0\u7387\u3002\u4F60\u95EE\u90A3\u662F\u4EC0\u4E48\uFF1F","\u5927\u516D\u8F6E\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u91CD\u65B0\u8BBE\u8BA1\u7684\u7ECF\u5178\u5609\u5E74\u534E\u6E38\u620F\u3002","\u6700\u957F\u7684\u63B7\u9AB0\u5B50\u6295\u4E86\x20\x31\x35\x34\x20\u6B21\u3002\u63B7\x31\x35\x34\u6B21\u9AB0\u5B50\u6CA1\u6709\u6295\u51FA\u4E03\u7684\u51E0\u7387\u4E3A\x20\x31\x2E\x35\x36\x20\u4E07\u4EBF\u5206\u4E4B\u4E00\u3002","\u5982\u4ECA\uFF0C\u4E8C\u5341\u4E00\u70B9\u4E2D\u7684\u7B97\u724C\u4E0D\u592A\u73B0\u5B9E\uFF0C\u56E0\u4E3A\u8D4C\u573A\u5B9E\u65BD\u591A\u526F\u724C\u548C\u73B0\u4EE3\u76D1\u63A7\u3002","\u4E09\u4E2A\u7968\u5238\u6E38\u620F\u7684\u5E73\u5747\u4E2D\u5956\u91D1\u989D\u76F8\u540C\x20\x2D\x20\x32\x35\x34\x34\x2E\x31\x36\x20\u70B9\u6570\u3002","\u6BCF\u65E5\u5956\u52B1\u548C\u63A8\u5E7F\u66FE\u7ECF\u4F1A\u76F4\u63A5\u5956\u52B1\u70B9\u6570\u3002","\u66FE\u7ECF\u6709\u4E00\u4E2A\u6F0F\u6D1E\uFF0C\u4F1A\u5141\u8BB8\u590D\u5236\u5E10\u6237\u3002","\u66FE\u7ECF\u6709\u4E00\u4E2A\u6F0F\u6D1E\uFF0C\u4F1A\u901A\u8FC7\u8F6E\u76D8\u8D4C\u548C\u63B7\u9AB0\u5B50\u83B7\u5F97\u5927\u91CF\x20\x45\x58\x50\u3002","\u66FE\u7ECF\u6709\u4E00\u4E2A\u6F0F\u6D1E\uFF0C\u53EF\u4EE5\u8BA9\u4F60\u901A\u8FC7\u8C03\u6574\u7CFB\u7EDF\u65F6\u95F4\u6765\u6B3A\u9A97\u6BCF\u65E5\u5956\u52B1\u3002","\u5E78\u8FD0\u4E00\u51FB\u63A8\u51FA\u65F6\uFF0C\u91CC\u9762\u53EA\u6709\x20\x34\x20\u6B3E\u6E38\u620F\u3002","\u5E78\u8FD0\u4E00\u51FB\u6709\x20\x35\x20\u4E2A\u5B9A\u65F6\u6D3B\u52A8\x20\x2D\x20\u8282\u65E5\uFF0C\u6D3B\u52A8\uFF0C\u8D4C\u573A\u5F71\u9662\uFF0C\u62BD\u5956\u548C\u4EFB\u52A1\u8FBE\u4EBA\u3002","\u8001\u864E\u673A\u662F\u5E78\u8FD0\u4E00\u51FB\u4E2D\u8C03\u6574\u6B21\u6570\u6700\u591A\u7684\u6E38\u620F\u3002","\u4EFB\u52A1\u4EE3\u5E01\u3001\u53CD\u9988\u3001\u8D4C\u573A\u5F71\u9662\u3001\x43\x44\x4B\x20\u548C\u62BD\u5956\u4EC5\u9002\u7528\u4E8E\u767B\u5F55\u7528\u6237\u3002","\u8FD9\u4E2A\u5E94\u7528\u7A0B\u5E8F\u6709\x20\x31\x30\x30\x30\x30\x20\u591A\u884C\u4EE3\u7801\u548C\x20\x32\x35\x30\x20\u591A\u4E2A\u7D20\u6750\u6587\u4EF6\u3002","\u6E38\u620F\u91CC\u5171\u6709\x20\x31\x32\x20\u4E2A\u8282\u65E5\uFF0C\u6BCF\u4E2A\u8282\u65E5\u90FD\u6709\u72EC\u7279\u7684\u80CC\u666F\u3001\u97F3\u4E50\u548C\u70B9\u6570\u56FE\u7247\u3002","\u5E78\u8FD0\u4E00\u51FB\u5185\u5171\u6709\x20\x31\x35\x20\u6B3E\u6E38\u620F\u548C\x20\x33\x20\u79CD\u8D27\u5E01\u3002","\u8FC7\u53BB\u6700\u6602\u8D35\u7684\u5934\u50CF\u9700\u8981\u82B1\u8D39\x20\x31\x33\x31\x35\x32\x30\x30\x30\x20\x45\x58\x50\x20\u624D\u80FD\u89E3\u9501\u3002\u73B0\u5728\uFF0C\u5934\u50CF\u591A\u4E86\u4E00\u500D\uFF0C\u5C11\u4E86\u4E00\u534A\u7684\u809D\u3002","\u66FE\u51E0\u4F55\u65F6\uFF0C\x43\x61\x73\x69\x6E\x6F\x20\x43\x69\x6E\x65\x6D\x61\u53EA\u6709\x32\x30\u90E8\u7535\u5F71\uFF0C\u6E38\u620F\u53EA\u6709\x33\u4E2A\u4E3B\u9898\uFF0C\x39\x30\u4E2A\u5934\u50CF\uFF0C\x33\x30\u4E2A\u4EFB\u52A1\u3002","\u514D\u8D39\x43\x44\x4B\uFF01\u5B8C\u5168\u4E0D\u662F\u8C0E\u8A00\uFF01\u8F93\u5165\u201C\x42\x41\x4E\x4D\x45\x44\x41\x44\x44\x59\u201D\u5373\u53EF\u5151\u6362\u795E\u79D8\u5927\u5956\uFF01","\u5982\u4F55\u83B7\u5F97\x20\x43\x44\x4B\uFF1A\u62A5\u544A\u6E38\u620F\x42\x55\x47\uFF0C\u53C2\u52A0\u7279\u6B8A\u7684\u9650\u65F6\u6D3B\u52A8\uFF0C\u6216\u8005\u53EA\u662F\u2026\u2026\u4E0E\u5B64\u72EC\u7684\u7A0B\u5E8F\u733F\u804A\u5929\u3002","\x54\x4F\x44\x4F\uFF1A\u5728\u6B64\u5904\u63D2\u5165\u4E00\u6761\u673A\u667A\u7684\u8BC4\u8BBA\u3002","\u795D\u4F60\u7684\u8FD0\u6C14\x2E\x2E\x2E\u6253\u51FB\u4F60\uFF1F\u7B97\u4E86\u5427\u3002","\x41\x70\x70\x6C\x61\x62\x20\u8BBE\u8BA1\u7F16\u8F91\u5668\u592A\u8FDF\u949D\u4E86\u2026\u2026","\u8FD0\u6C14\u662F\u6709\u7528\u7684\u3002\u53BB\u65C1\u8FB9\u62FF\u4E00\u4E9B\u3002","\u968F\u673A\u6570\u662F\u4E00\u4E2A\u7279\u6027\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A\u9519\u8BEF\u3002","\u6709\u4EBA\u6709\u591A\u4F59\u7684\u5934\u53D1\u5417\uFF1F\u6350\u4E00\u4E9B\u7ED9\u6211\x50\x4C\x5A","\u6211\u662F\u4E00\u6761\u975E\u5E38\u5E73\u5EB8\u7684\u8BC4\u8BBA\u3002","\u4F60\u662F\u60F3\u4ECE\u6211\u8FD9\u91CC\u5957\u51FA\u4E9B\u4EC0\u4E48\u5417\uFF1F\u6211\u4EC0\u4E48\u90FD\u4E0D\u77E5\u9053\uFF01","\u8FD9\u4E2A\u5E94\u7528\u7684\u4F5C\u8005\u662F\x20\x4D\x74\x6E\x20\x28\x6D\x6F\x75\x6E\x74\x61\x69\x6E\x29\x20\x47\x63\x6B\x20\x28\x67\x65\x63\x6B\x6F\x29\x20\x41\x70\x70\x20\x4D\x61\x6B\x65\x72\x2E\x20\u5982\u679C\u5176\u4ED6\u6587\u5B57\u88AB\u7BE1\u6539\uFF0C\u90A3\u4E2A\u4EBA\u80AF\u5B9A\u662F\u4E2A\u5C0F\u5077\u3002","\u4E3A\u9632\u5077\u7A83\u4EE3\u7801\u5DF2\u6DF7\u6DC6\u3002\u5982\u6709\u7F16\u7A0B\u95EE\u9898\u6B22\u8FCE\u7535\u90AE\u5F00\u53D1\u8005\uFF01","\u8BF7\u4E0D\u8981\u5728\x72\x65\x6D\x69\x78\u4E4B\u540E\u4FEE\u6539\u5F00\u53D1\u8005\u9E23\u8C22\x20\x2D\x20\u6211\u82B1\u4E86\u4E0D\u5C11\u65F6\u95F4\u5462\uFF0C\u81F3\u5C11\u653E\u5C0A\u656C\u70B9\u3002"];
var games = ["", "Slots", "Roulette", "Keno", "Horse Bet", "Scratch Card", "Big Six Wheel", "Craps", "Blackjack","Video Poker","🎟️🎡","🎟️🎰","🎟️🧧", "Random Mode", "🎟️💰", "🎟️🃏", "🎟️💻","Daily Mission"];
var gamesa = ["","老虎机", "轮盘赌", "柯诺", "赌马", "刮刮卡", "幸运轮盘", "双骰子", "二十一点","经典扑克","🎟️🎡","🎟️🎰","🎟️🧧","随机模式","🎟️💰","🎟️🃏","🎟️💻","Daily Mission"];
var spaces=[{val:2,start:0,end:6.67},{val:3,start:6.67,end:13.33},{val:2,start:13.33,end:20},{val:12,start:20,end:26.67},{val:2,start:26.67,end:33.33},{val:6,start:33.33,end:40},{val:2,start:40,end:46.67},{val:3,start:46.67,end:53.33},{val:2,start:53.33,end:60},{val:25,start:60,end:66.67},{val:2,start:66.67,end:73.33},{val:3,start:73.33,end:80},{val:2,start:80,end:86.67},{val:6,start:86.67,end:93.33},{val:3,start:93.33,end:100},{val:2,start:100,end:106.67},{val:12,start:106.67,end:113.33},{val:2,start:113.33,end:120},{val:3,start:120,end:126.67},{val:6,start:126.67,end:133.33},{val:2,start:133.33,end:140},{val:3,start:140,end:146.67},{val:2,start:146.67,end:153.33},{val:3,start:153.33,end:160},{val:2,start:160,end:166.67},{val:3,start:166.67,end:173.33},{val:2,start:173.33,end:180},{val:6,start:180,end:186.67},{val:3,start:186.67,end:193.33},{val:2,start:193.33,end:200},{val:12,start:200,end:206.67},{val:2,start:206.67,end:213.33},{val:6,start:213.33,end:220},{val:2,start:220,end:226.67},{val:3,start:226.67,end:233.33},{val:2,start:233.33,end:240},{val:25,start:240,end:246.67},{val:2,start:246.67,end:253.33},{val:3,start:253.33,end:260},{val:2,start:260,end:266.67},{val:6,start:266.67,end:273.33},{val:3,start:273.33,end:280},{val:2,start:280,end:286.67},{val:12,start:286.67,end:293.33},{val:2,start:293.33,end:300},{val:3,start:300,end:306.67},{val:6,start:306.67,end:313.33},{val:2,start:313.33,end:320},{val:3,start:320,end:326.67},{val:2,start:326.67,end:333.33},{val:50,start:333.33,end:340},{val:3,start:340,end:346.67},{val:6,start:346.67,end:353.33},{val:3,start:353.33,end:360}];
var icons = ["pokercred","image83","image67", "image68", "image11", "image9", "image6", "image7", "image8", "image25", "image13", "button139", "button159", "image26", "button225", "image59", "image79", "image94"];var vs = "gEVxuozbCINoPwkRgrV859a-_LjdshmWYzgMWXxUhOP".split("").reverse().join("");
var deva = ["👩‍💻","👨‍💻","👩🏻‍💻","👨🏻‍💻","👩🏼‍💻","👨🏼‍💻","👩🏽‍💻","👨🏽‍💻","👩🏾‍💻","👨🏾‍💻","👩🏿‍💻","👨🏿‍💻"];
var triviaqs = [{},{q:["How many messages can be displayed in Chat?\n\nA. 101\nB. 181\nC. 200\nD. 201\nE. 301","聊天页面可以一次显示多少条消息？\n\nA. 101\nB. 181\nC. 200\nD. 201\nE. 301",""], c:3},{q:["How many assets are in Lucky Strike?\n\nA. 293\nB. 321\nC. 362\nD. 384\nE. 423","幸运一击里多少个素材？\n\nA. 293\nB. 321\nC. 362\nD. 384\nE. 423",""], c:4},{q:["How many lines of code is in Lucky Strike?\n\nA. 6499\nB. 9540\nC. 11854\nD. 13848\nE. 15298","幸运一击里有几行代码？\n\nA. 6499\nB. 9540\nC. 11854\nD. 13848\nE. 15298",""], c:4},{q:["How many 🎟️ could you get from daily reward in version 2.0?\n\nA. 64\nB. 52\nC. 48\nD. 36\nE. 26","版本2.0的每日奖励里是多少🎟️？\n\nA. 64\nB. 52\nC. 48\nD. 36\nE. 26",""], c:2},{q:["How many EXP do you need to unlock all avatars in version 2.4?\n\nA. 112943000\nB. 106482000\nC. 101873000\nD. 95652000\nE. 87865000","你需要多少EXP来解锁版本2.4的所有头像？\n\nA. 112943000\nB. 1064820000\nC. 101873000\nD. 95652000\nE. 87865000",""], c:1},{q:["What does the text below the ATM mean?\n\nA. Eat my pants!\nB. Not so serious!\nC. You are lucky!\nD. Just filler text!\nE. Come soon again!","ATM机下面的一行字是什么意思？\n\nA. 吃我的裤子！\nB. 别太认真了！\nC. 你真幸运！\nD. 在此处写点什么！\nE. 下次见吧！",""],  c:0},{q:["How many festivals are in Lucky Strike?\n\nA. 18\nB. 16\nC. 14\nD. 12\nE. 10","幸运一击里有几个节日？\n\nA. 18\nB. 16\nC. 14\nD. 12\nE. 10",""], c:3},{q:["How many movies can you watch in Casino Cinema in version 2.2?\n\nA. 20\nB. 24\nC. 30\nD. 32\nE. 40","版本2.2的赌场影院里有多少部电影？\n\nA. 20\nB. 24\nC. 30\nD. 32\nE. 40",""], c:0},{q:["What is a cut feature of Lucky Strike?\n\nA. Texas Hold'em\nB. Bar Chat\nC. Story Mode\nD. Recovery Info\nE. Admin Panel","一个从幸运一击中移除的功能是？\n\nA. 德州扑克\nB. 酒吧聊天\nC. 故事模式\nD. 还原信息\nE. 管理员面板",""], c:1},{q:["How many combined sequences are in the tutorials?\n\nA. 23\nB. 27\nC. 31\nD. 36\nE. 43","所有教程加起来有多少步骤？\n\nA. 23\nB. 27\nC. 31\nD. 36\nE. 43",""], c:2}];
var summary = "Your Pick:\n";
var sumaryc = "你的选择:\n";
var playerCard = [0,0,0,0,0];
var bac = [];
var logqueque = [];
var msgque = [];
var dynqueque = [];
pvpselection = [1,1,1,1,1,1,1,1,1];
var assetlist = "Music List:\n\nTheme 1: Background Music in Roulette VIP - Casino Vegas by Inlogic Studio\n\nTheme 2: In a Romantic Mood - Dmitriy Lukyanov\n\nTheme 3: Pulsar V2 - Wild Viking Sound\n\nTheme 4: The Deep - William Pearson\n\nTheme 5: 50th Anniversary 4 from Uno by Ubisoft Entertainment\nmusic.163.com/program/2489294177/\n\nPremium 1: m5_map_bgm from Lanota by Noxy Games\nwww.youtube.com/watch?v=S--ipv5RkTo\n\nPremium 2: Title 01 from Cytus 2 by Rayark Inc.\n\nPremium 3: childishMusic from Ticket to Ride by Asmodee Digital\nmusic.163.com/program/25039841957/\n\nPremium 4: Chasing the Dragon - Hill Climb Racing\n\nPremium 5: Dancing Light - Richard Evans\n\nPremium 6: Gathering Data - Audio Network\n\nSpring Festival: Chinese Street R1 from The Secret Society: Hidden Mystery by G5E\nmusic.163.com/program/2488934466/\n\nWintertide: wintertheme from Uno by Ubisoft Entertainment\nmusic.163.com/program/2064480012/\n\nEarth Day: ho track 1 from The Secret Society: Hidden Mystery by G5\nmusic.163.com/program/2488915977/\n\nArt Festival: Background Music in Art. Inc. by Pixio\n\nSummer Break: r6_map_bgm from Lanota by Noxy Games\nwww.youtube.com/watch?v=XKOR1k2_XBI\n\nMid-Autumn Festival: mountain abode from The Secret Society: Hidden Mystery by G5E\nmusic.163.com/program/2488922035/\n\nHalloween: puppet atlier from The Secret Society: Hidden Mystery by G5E\nmusic.163.com/program/2488936455/\n\nThanksgiving: party hall from The Secret Society: Hidden Mystery by G5E\nmusic.163.com/program/2488922039/\n\nChristmas: G5 Fr V R3 from The Secret Society: Hidden Mystery by G5E\nmusic.163.com/program/2488934472/\n\nSt. Patrick's Day: The Scottish Sunrise - Adigold\n\nApril Fools: The Benny Hill Show - Wonder Woman\n\nIndependence Day: The Liberty Bell - US Marine Band\n\nGraphics and Sound Effects List:\n\nHit the Board - Renatus\nRoulette VIP - Inlogic\nOverrapid - Team Arcstar\nPinball Deluxe Reloaded - Greencod\nUNO - Ubisoft\nThe Secret Society - G5E\nArt Inc - Pixio\nBad Piggies - Rovio\nLanota - Noxy Games\nCytus 2 & Voez - Rayark Games\nSea Battle 2 - Byril\nUltimate Chicken Horse - Clever Endeavor\nTicket to Ride - Asmodee\nConduct This - Northplay\nStellights - Collesta\nPostknight - Kurechii\nEmpire Worrior TD - Zitga\nHill Climb Racing - Fingersoft";
var blk = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];
var loadingicon = ["loadz3","loadz1","loadz2","image111","image110","image109","image108","image107","image106","image105","image104","image103","image101","image100","image98","image97","image96","image95","image93","image92","image91","image90","image89","image88","image75","pokerupdate","image86","image78","image72","image23","image36","image37","image54","image44","image55","image56","image60","image61","image62","image63","image64","image65","image66","image99","image17"];
setStyle("roulbj", "border-radius: 50%");
var taskmaster=[{tid:0,mic:988e4,hit:["ss","rs","ks","hs","cs","ws","ps","js"],mit:["Spend 9880000 Credits.","花销9880000点数。",""]},{tid:1,mic:928e4,hit:["sp","rp","kp","hp","hp","cg","ww","pg","jp"],mit:["Win 9280000 Credits in non-🎟️ games.","在非🎟️游戏里赢得9280000点数。",""]},{tid:2,mic:136800,hit:["tt"],mit:["Spend 38 hours in-game.","玩38个小时游戏。",""]},{tid:3,mic:1280,hit:["za"],mit:["Acquire 1280 🎟️.","获得1280🎟️。",""]},{tid:4,mic:1490,hit:["zb"],mit:["Spend 1490 🎟️.","花销1490🎟️。",""]},{tid:5,mic:48,hit:[],mit:["Claim 48 daily reward.","领取48个每日奖励。",""]},{tid:6,mic:136,hit:[],mit:["Watch 136 Ad.","看136个广告。",""]},{tid:7,mic:148,hit:[],mit:["Log in 148 times.","登录148次。",""]},{tid:8,mic:1628,hit:["sa"],mit:["Spin the slot 1628 times.","转1628次老虎机。",""]},{tid:9,mic:278e4,hit:["ss"],mit:["Spend 2780000 Credits in Slot.","在老虎机花销2780000点数。",""]},{tid:10,mic:256e4,hit:["sp"],mit:["Win 2560000 Credits in Slot.","在老虎机赢得2560000点数。",""]},{tid:11,mic:1380,hit:["rb"],mit:["Bet 1380 times in Roulette.","玩1380次轮盘赌。",""]},{tid:12,mic:298e4,hit:["rs"],mit:["Spend 2980000 Credits in Roulette.","在轮盘赌花销2980000点数。",""]},{tid:13,mic:276e4,hit:["rp"],mit:["Win 2760000 Credits in Roulette.","在轮盘赌赢得2760000点数。",""]},{tid:14,mic:1358,hit:["tk"],mit:["Bet 1358 times in Keno.","玩1358次柯诺。",""]},{tid:15,mic:268e4,hit:["ks"],mit:["Spend 2680000 Credits in Keno.","在柯诺花销2680000点数。",""]},{tid:16,mic:246e4,hit:["kp"],mit:["Win 2460000 Credits in Keno.","在柯诺赢得2460000点数。",""]},{tid:17,mic:1468,hit:["tr"],mit:["Play 1468 rounds of Horse Bet.","玩1468场赌马。",""]},{tid:18,mic:268e4,hit:["hs"],mit:["Spend 2680000 Credits in Horse Bet.","在赌马花销2680000点数。",""]},{tid:19,mic:246e4,hit:["hp"],mit:["Win 2460000 Credits in Horse Bet.","在赌马赢得2460000点数。",""]},{tid:20,mic:1382,hit:["tc"],mit:["Scratch 1382 tickets.","刮3282张刮刮卡。",""]},{tid:21,mic:262e4,hit:["cs"],mit:["Spend 2620000 Credits in Scratch Card.","在刮刮卡花销2620000点数。",""]},{tid:22,mic:248e4,hit:["cg"],mit:["Win 2480000 Credits in Scratch Card.","在刮刮卡赢得2480000点数。",""]},{tid:23,mic:1480,hit:["wt"],mit:["Play Big Six Wheel 1480 times.","转1480次幸运轮盘。",""]},{tid:24,mic:268e4,hit:["ws"],mit:["Spend 2680000 Credits in Big Six Wheel.","在幸运轮盘花销2680000点数。",""]},{tid:25,mic:248e4,hit:["ww"],mit:["Win 2480000 Credits in Big Six Wheel.","在幸运轮盘赢得2480000点数。",""]},{tid:26,mic:2768,hit:["pb"],mit:["Roll 2768 dices in Craps.","在双骰子里掷2768个骰子。",""]},{tid:27,mic:298e4,hit:["ps"],mit:["Spend 2980000 Credits in Craps.","在双骰子花销2980000点数。",""]},{tid:28,mic:276e4,hit:["pg"],mit:["Win 2760000 Credits in Craps.","在双骰子赢得2760000点数。",""]},{tid:29,mic:1468,hit:["jb"],mit:["Play 1468 rounds of Blackjack.","玩1468轮21点。",""]},{tid:30,mic:268e4,hit:["js"],mit:["Spend 2680000 Credits in Blackjack.","在21点花销2680000点数。",""]},{tid:31,mic:246e4,hit:["jp"],mit:["Win 2460000 Credits in Blackjack.","在21点赢得2460000点数。",""]},{tid:32,mic:1428,hit:["zc"],mit:["Spend 1428 🎟️ in 🎟️🎡.","在🎟️🎡花销1428🎟️。",""]},{tid:33,mic:1428,hit:["zg"],mit:["Spend 1428 🎟️ in 🎟️🎰.","在🎟️🎰花销1428🎟️。",""]},{tid:34,mic:268e4,hit:["ze"],mit:["Win 2680000 Credits in 🎟️🎡.","在🎟️🎡赢得2680000点数。",""]},{tid:35,mic:268e4,hit:["zi"],mit:["Win 2680000 Credits in 🎟️🎰.","在🎟️🎰赢得2680000点数。",""]},{tid:36,mic:1428,hit:["zk"],mit:["Spend 1428 🎟️ in 🎟️🧧.","在🎟️🧧花销1428🎟️。",""]},{tid:37,mic:268e4,hit:["zl"],mit:["Win 2680000 Credits in 🎟️🧧.","在🎟️🧧赢得2680000点数。",""]},{tid:38,mic:1468,hit:["zsg"],mit:["Wager 1468 Credits in Sweepstakes.","在抽奖下注1468🎟️。",""]},{tid:39,mic:768,hit:["zom"],mit:["Play 768 rounds of PVP Arena.","玩768场PVP竞技。",""]},{tid:40,mic:268e4,hit:["zlw"],mit:["Win 2680000 Credits in 🎟️💰.","在🎟️💰赢得2680000点数。",""]},{tid:41,mic:1428,hit:["zls"],mit:["Spend 1428 🎟️ in 🎟️💰.","在🎟️💰花销1468🎟️。",""]},{tid:42,mic:1468,hit:["wxa"],mit:["Spend 1468 🎟️ in 🎟️🃏.","在🎟️🃏花销1468🎟️。",""]},{tid:43,mic:268e4,hit:["wxb"],mit:["Win 2680000 Credits in 🎟️🃏.","在🎟️🃏赢得2680000点数。",""]},{tid:44,mic:1468,hit:["wya"],mit:["Spend 1468 🎟️ in 🎟️💻.","在🎟️💻花销1468🎟️。",""]},{tid:45,mic:268e4,hit:["wyb"],mit:["Win 2680000 Credits in 🎟️💻.","在🎟️💻赢得2680000点数。",""]},{tid:46,mic:1480,hit:["pkr"],mit:["Play Video Poker 1480 times.","玩1480次经典扑克。",""]},{tid:47,mic:268e4,hit:["pks"],mit:["Spend 2680000 Credits in Video Poker.","在经典扑克花销2680000点数。",""]},{tid:48,mic:268e4,hit:["pkw"],mit:["Win 2680000 Credits in Video Poker.","在经典扑克赢得2680000点数。",""]}];
var prize = [720, 1090, 1480, 1880, 2280, 2680, 2980, 3380, 4780, 5880, 10980, 22980];
task = leaguedata = leaguehistory = {num: -1};
var wxchosen = [0,0,0,0,0];
var ver = 244;
var theirpick = "Computer pick:\n";
var active = [0, 0, 0];
var userID = "Guest";
var current = [0, 0, 0];
var ref = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0.5, 1, 1, 1.5, 1.5, 2, 2];
var mRrand = RandomNumber(0, 42);
var admin = [1];
var wyrand = [10,20,50,100,200,600,1000,1500,2000,3000];
var dynamix = -40;
var promotiontable = [[0,0.4],[0.1,0.45],[0.15,0.5],[0.2,0.55],[0.25,0.6],[0.3,0.65],[0.35,0.7],[0.4,0.75],[0.45,0.8],[0.5,1]];
var leaguetasks = [{hit:"tt",str:["Spend time in-game","花时间玩游戏",""]},{hit:"", str:["Gain EXP", "获得EXP",""]},{hit:"zb",str:["Spend 🎟️","花销🎟️",""]},{hit:"sa",str:["Spin the slot","转老虎机",""]},{hit:"rb",str:["Bet in Roulette","玩轮盘赌",""]},{hit:"tk",str:["Bet in Keno","玩柯诺",""]},{hit:"tr",str:["Play Horse Bet","玩赌马",""]},{hit:"tc",str:["Scratch Tickets","刮刮刮卡",""]},{hit:"wt",str:["Play Big Six Wheel","转幸运轮盘",""]},{hit:"pb",str:["Roll dices in Craps","在双骰子里掷骰子",""]},{hit:"jb",str:["Play Blackjack","玩21点",""]},{hit:"zom",str:["Play PVP Arena","玩PVP竞技",""]},{hit:"pkr",str:["Play Video Poker","玩经典扑克",""]}];
var rewardtable = [[0,0,0,1,2,3,4,6,8,10],[0,0,1,2,3,4,6,8,10,12],[0,1,2,3,4,6,8,10,12,15],[1,2,3,4,6,8,10,12,15,18],[2,3,4,6,8,10,12,15,18,21],[3,4,6,8,10,12,15,18,21,24],[4,6,8,10,12,15,18,21,24,27],[6,8,10,12,15,18,21,24,27,30],[8,10,12,15,18,21,24,27,30,34],[10,12,15,18,21,24,27,30,34,38]];
var logexc = "tt,rs,rp,ps,pg,zi,ze,zl,zj,zlw,wxa,wya,wxb,wyb,zg,zb,zls,zc";
var split = new Date().toString().split(" ");
kf = 880;
lb = cL = randPick = lottos = objj = aces = tasklog = globalblocked= olp = blocked = igsku = devlist = msgk = [];
glog=estt=admintrig=canwxsel=sound=ftg=thv=1;
xx = 305;
messaging = curad = seasons = lotto =pvpdata= oppodata = {};
currentid = ztime = vit = -1;
resetsave(true);
checkCloud();
var timf = Math.floor((GetTime() / 302400000) % 30);
var tima = Math.floor(((GetTime() / 302400000) + 1) % 30);
var timk = timf + 1;
var timb = tima + 1;
var month = new Date().getMonth() + 1;
var day = new Date().getDate();
var year = new Date().getYear();
SetStyle(["playercontest", "oppocontest", "yourprogress", "oppoprogress"], "padding-right: 0px;");
SetStyle(["card0", "card1", "card2", "card3", "card4"], "font-family: Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,Android Emoji,EmojiSymbols,EmojiOne Mozilla,Twemoji Mozilla,Segoe UI Symbol;");
startAnim(false);
log("ac", 1);
getMovie();
seteventbadge();
getKeyValue("v",function(e){null!=e&&(v=e),getKeyValue("l",function(e){null!=e&&(lBo=e),getKeyValue("u",function(e){null!=e&&(uBo=e),getKeyValue("s1",function(e){null!=e&&(salt=e),getKeyValue("s2",function(e){null!=e&&(s2=e),"889249243765694"!=v.slice(lBo+salt*s2,uBo+salt*s2).split("").reverse().join("")&&dose()})})})})});function dose(){setScreen("ximer".split("").reverse().join(""));setTimeout(function(){throw new Error("")}, 3000)}
setEng();
for(var c = 0; c < settt.length; c++){setStyle(settt[c], "text-shadow: 0 0 5px cyan")}
for(var z = 0; z < settings.length; z++){setStyle(settings[z], "text-shadow: 0 0 5px yellow")}
function checkCloud(){
  checkmm();
  getKeyValue("ver", function(val){
  if(val == undefined){
    var input = prompt("WARNING: Cloud data might be tampered. The game might not load.\n\nPlease email the developer at mtngckover@gmail.com with the above message.\n\nSorry for the inconvenience.");
  }dover(val);
  getGlobal(false);
  updglobl();
  getLotto();
  getTM(false);
  parBo();
})}
function checkmm(){
  getKeyValue("mm", function(val){
  if(val && !mmm){
    mmm = 1;
    getKeyValue("mmr", function(val2){
      setScreen("ximer".split("").reverse().join(""));
        setT("isfuislkjfdsj", ["Maintainence Mode is active, the game is not accessible.\n\nReason: "+val2+"\n\nPlease refresh and retry, and email the developer at mtngckover@gmail.com with any concerns.\n\nSorry for the inconvenience.","当前处于维护模式，游戏不可运行。\n\n原因："+val2 + "\n\n请刷新重试。如有疑问请电邮开发者：mtngckover@gmail.com。\n\n带来的不便敬请谅解。",""]);
    })}else if(!val && mmm){
      mmm = 0;
}})}
function getCDK(){
  var CDK = "";
  var CIDIN = 0;
  if(month == 2){
    CDK = "YEAR"+year;
  }else if(month == 5){
    CIDIN = 1;
    CDK = "VACAY"+year;
  }else if(month == 8){
    CIDIN = 2;
    CDK = "CAKE"+year;
  }else if(month == 11){
    CIDIN = 3;
    CDK = "FEST"+year;
  }if(month == 2 || month == 5 || month == 8 || month == 11){
    eventcdk = CDK;
    var d = new Date();
    d.setMonth(month);
    d.setDate(1);
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(1);
    readRecords("CDK", {}, function(val){
    if(val[CIDIN].co != CDK.split("").reverse().join("")){
      val[CIDIN].co = CDK.split("").reverse().join("");
      val[CIDIN].re = 68;
      val[CIDIN].cl = "[]";
      val[CIDIN].max = 99999;
      val[CIDIN].ex = Math.round(d.getTime()/1000.0);
      updateRecord("CDK", val[CIDIN], function(){});
}});}}
onEvent("button9","click",function(){
  playS(7);
  startTime();
  sIurl("image1", "assets/loading.png");
  if(from == 1){
    changeScreen("screen1", 1);
  }else if(from == 2){
    changeScreen("screen3", 1);
  }else if(from == 3){
    changeScreen("keno", 1);
  }else if(from == 4){
    changeScreen("sett", 1);
  }else if(from == 5){
    changeScreen("screen5", 1);
  }else if(from == 6){
    changeScreen("crap", 1);
  }else if(from == 7){
    changeScreen("blackjack", 1);
  }else if(from == 8){
    changeScreen("poker", 1);
}});
function insC(val){
  playS(2);
  setT(val, ["Insufficient fund!", "资金不足！", ""]);
}
function slotsave(){
  playS(14);
  current[0] = RandomNumber(0, 49);
  current[1] = RandomNumber(0, 49);
  current[2] = RandomNumber(0, 49);
  if(current[0] < 10){
    sIurl("image2", "assets/1.jpg");
  }else if(current[0] < 12){
    sIurl("image2", "assets/2.jpg");
  }else if(current[0] < 32){
    sIurl("image2", "assets/3.jpg");
  }else if(current[0] < 46){
    sIurl("image2", "assets/4.jpg");
  }else{
    sIurl("image2", "assets/5.jpg");
  }if(current[1] < 10){
    sIurl("image3", "assets/1.jpg");
  }else if(current[1] < 12){
    sIurl("image3", "assets/2.jpg");
  }else if(current[1] < 32){
    sIurl("image3", "assets/3.jpg");
  }else if(current[1] < 46){
    sIurl("image3", "assets/4.jpg");
  }else{
    sIurl("image3", "assets/5.jpg");
  }if(current[2] < 10){
    sIurl("image4", "assets/1.jpg");
  }else if(current[2] < 12){
    sIurl("image4", "assets/2.jpg");
  }else if(current[2] < 32){
    sIurl("image4", "assets/3.jpg");
  }else if(current[2] < 46){
    sIurl("image4", "assets/4.jpg");
  }else{
    sIurl("image4", "assets/5.jpg");
}}
onEvent("button2","click",function(){
  if(account - wager < 0){
    insC("text_area1");
    return;
  }if(sirand){
    if(randomtrig){
      doRand(0);
      return;
    }else{
      randomtrig = 1;
    }}if(ispvp){
        if(pvptrig){
          if(pvpdata.cr == pvpdata.r){
            locallastgame = false;
          }updPVPText();
          updatePlayerPVP();
          changeScreen("pvpe");
          return;
        }else{
          pvptrig = 1;
    }}hideElement("button2");
    fadein("text_area39");
    onespin++;
    pst++;
    changeAccount(-wager);
    if(ispvp){
      pvpdata.la += wager;
    }var time = 50;
    log("sa", 1);
    log("ss", wager);
    setText("account", accountstring);
    kz = 0;
    kz = timedLoop(50, function(){
      time += 50;
      slotsave();
      if(time >= 600){
        stopTimedLoop(kz);
        kz = timedLoop(100, function(){
          time += 100;
          slotsave();
          if(time >= 1300){
            stopTimedLoop(kz);
            kz = timedLoop(150, function(){
              time += 150;
              slotsave();
              if(time >= 2200){
                setT("text_area1", ["None", "无", ""]);
                setText("text_area1", "none");
                if(current[0] < 10 && current[1] < 10 && current[2] < 10){
                  switch (lang){
                    case 0:text += "Banana triple\n";
                      break;
                    case 1:text += "三个香蕉\n";
                      break;
                    case 2:
                      break;
                  }payout += wager * 7;
                }else if(inRange(current[0], 10, 12) && inRange(current[1], 10, 12) && inRange(current[2], 10, 12)){
                  payout += wager * 982;
                  setimage(["JP1", "JP2", "JP3"], "assets/2.jpg");
                  log("sj", 1);
                  subBoard(1, wager*1000);
                  finishTime();
                  onejack++;
                  nto+=200;
                  switch (lang){
                    case 0:text += "Crown triple\n";
                      setText("text_area5", "You are so lucky. 0.0064%. You got it. Amazing.\nTake a screenshot, and go buy a lottery!\n" + wager * 1000 + " Credits added!");
                      break;
                    case 1:text += "三个皇冠\n";
                      setText("text_area5", "你真幸运。0.0064%。太厉害了。\n截个图，然后去买张彩票吧！\n" + wager * 1000 + "点数已奖励！");
                      break;
                    case 2:
                      break;
                  }changeScreen("jackpot");
                }else if(inRange(current[0], 12, 32) && inRange(current[1], 12, 32) && inRange(current[2], 12, 32)){
                  switch (lang){
                    case 0:text += "Grape triple\n";
                      break;
                    case 1:text += "三个葡萄\n";
                      break;
                    case 2:
                      break;
                  }payout += wager * 1.2;
                }else if(inRange(current[0], 32, 46) && inRange(current[1], 32, 46) && inRange(current[2], 32, 46)){
                  switch (lang){
                    case 0:text += "Orange triple\n";
                      break;
                    case 1:text += "三个橘子\n";
                      break;
                    case 2:
                      break;
                  }payout += wager * 3.5;
                }else if(inRange(current[0], 46, 50) && inRange(current[1], 46, 50) && inRange(current[2], 46, 50)){
                  setimage(["JP1", "JP2", "JP3"], "assets/5.jpg");
                  log("sj", 1);
                  subBoard(1, wager*120);
                  onejack++;
                  finishTime();
                  switch (lang){
                    case 0:text += "Seven triple\n";
                      setText("text_area5", "You are so lucky. 0.0512%. You got it. Amazing.\nTake a screenshot, and go buy a lottery!\n" + wager * 120 + " Credit added!");
                      break;
                    case 1:text += "三个七\n";
                      setText("text_area5", "你太幸运了。0.0512%。太厉害了。\n截个图，然后去买张彩票吧！\n" + wager * 120 + "点数已奖励！");
                      break;
                    case 2:
                      break;
                  }changeScreen("jackpot");
                  payout += wager * 115;
                }if(checkD(0, 10)){
                  switch (lang){
                    case 0:text += "Banana double\n";
                      break;
                    case 1:text += "双香蕉\n";
                      break;
                    case 2:
                      break;
                  }payout += wager;
                }else if(checkD(10, 12)){
                  switch (lang){
                    case 0:
                      text += "Crown double\n";
                      break;
                    case 1:
                      text += "双皇冠\n";
                      break;
                    case 2:
                      break;
                  }payout += wager * 18;
                }else if(checkD(12, 32)){
                  switch (lang){
                    case 0:text += "Grape double\n";
                      break;
                    case 1:text += "双葡萄\n";
                      break;
                    case 2:
                      break;
                  }payout += wager * 0.3;
                }else if(checkD(32, 46)){
                  switch (lang){
                    case 0:text += "Orange double\n";
                      break;
                    case 1:text += "双橘子\n";
                      break;
                    case 2:
                      break;
                  }payout += wager * 0.5;
                }else if(checkD(46, 50)){
                  switch (lang){
                    case 0:text += "Seven double\n";
                      break;
                    case 1:text += "双七\n";
                      break;
                    case 2:
                      break;
                  }payout += wager * 5;
                }if(payout / wager > 100){
                  playS(4);
                }else if(payout / wager > 1){
                  playS(3);
                }else if(payout != 0){
                  playS(8);
                }else{
                  switch (lang){
                    case 0:text += "Good luck next time!\n";
                      setText("text_area65", "Win streak: 0");
                      break;
                    case 1:text += "下次好运！\n";
                      setText("text_area65", "连胜：0");
                      break;
                    case 2:
                      break;
                    }tempone = randomstreak = pvpstreak = 0;
                      playS(12);
                    }if(payout != 0){
                      tempone++;
                    if(sirand){
                      randomstreak++;  
                      unifyRand(0);           
                      if(randomstreak > rst){
                        rst = randomstreak;
                        submitFame(13, randomstreak);
                    }}else if(ispvp){
                      pvpstreak++;
                      if(pvpstreak > pvpdata.st){
                        pvpdata.st = pvpstreak;
                      }unifyRand(1); 
                    }else{
                      setT("text_area65", ["Win streak: " + tempone, "连胜：" + tempone, ""]);
                  }submitFame(1, tempone);
                  if(tempone > onestreak){
                    onestreak = tempone;
                  }if(sirand == 1){
                    winrand++;
                }}text += "+" + localstr(Math.round(payout));
                setText("text_area1", text);
                log("sp", payout);
                changeAccount(payout);
                if(ispvp){
                  pvpdata.wa += payout;
                }setTex(["account", "text_area31"], accountstring);
                text = "";
                payout = 0;
                fadein("button2");
                fadeout("text_area39");
                update();
                stopTimedLoop(kz);
}})}})}})});
function checkD(lb, ub){
  var one = inRange(current[0], lb, ub) && inRange(current[1], lb, ub);
  var two = inRange(current[2], lb, ub) && inRange(current[1], lb, ub);
  var thr = inRange(current[0], lb, ub) && inRange(current[2], lb, ub);
  return one || two || thr;
}
onEvent("button3","click",function(){
  if(!ftueflag[4]){
    doTutorial(4);
  }else{
    doEnter("screen1", "account", "text_area3", ["Wager: ", "赌注：", ""], wager, true);
}});
function doEnter(val1, val2, val3, val4, val5, val6){
  startTime();
  changeScreen(val1);
  setText(val2, accountstring);
  if(val1 == "keno"){
    if(selected == 20){
      hideElement("button315");
    }else{
      showElement("button315");
  }}if(((pay <= 0 || vit<=ztime) && val5 > 10000) || (ispvp && val5 > 10000)){
    val5 = wager = 10000;
  }if(val1 == "screen3" || val1 == "crap"){
    wager = wager / 10;
    val5 = wager;
  }setT(val3, [val4[0] + localstr(val5), val4[1] + localstr(val5), val4[2] + localstr(val5)]);
  if(val6){
    playS(1);
}}
function add10(show, wagta, wagtx, shows, hides){
  var limit = 1000;
  if(pay > 0 && vit>ztime && !ispvp){
    limit = 5000;
  }if(wager + 10 <= limit){
    playS(10);
    wager += 10;
    if(wager + 10 > limit){
      hideElement(hides);
    }update();
      showElement(show);
      setT(wagta, [wagtx[0] + localstr(wager), wagtx[1] + localstr(wager), wagtx[2] + localstr(wager)]);
      if(wager > 109){
        showElement(shows);
  }}else{
    playS(2);
    hideElement(hides);
}}
function min10(show, wagta, wagtx, shows, hides){
  var limit = 901;
  if(pay > 0 && vit>ztime){
      limit = 4901;
  }if(wager - 10 > 0){
    playS(10);
    wager -= 10;
    if(wager - 10 <= 0){
      hideElement(hides);
    }update();
    showElement(show);
    setT(wagta, [wagtx[0] + localstr(wager), wagtx[1] + localstr(wager), wagtx[2] + localstr(wager)]);
    if(wager < limit){
      showElement(shows);
  }}else{
    playS(2);
    hideElement(hides);
}}
function add100(show, wagta, wagtx, shows, hides){
    var limit = 10000;
    if(pay > 0 && vit>ztime && !ispvp){
        limit = 50000;
    }if(currentScreen == "screen3" || currentScreen == "crap"){
        limit = limit / 10;
    }if(wager + 100 <= limit){
        playS(10);
        wager += 100;
        if(wager + 100 > limit){
            hideElement(hides);
        }update();
        showElement(show);
        setT(wagta, [wagtx[0] + localstr(wager), wagtx[1] + localstr(wager), wagtx[2] + localstr(wager)]);
        if(wager > 1099){
            showElement(shows);
    }}else{
        playS(2);
        hideElement(hides);
}}
function min100(show, wagta, wagtx, shows, hides){
    var limit = 8901;
    if(pay > 0 && vit>ztime){
        limit = 48901;
        if(currentScreen == "screen3" || currentScreen == "crap"){
            limit = 4901;
    }}else if(currentScreen == "screen3" || currentScreen == "crap"){
        limit = 901;
    }if(wager - 100 > 0){
        playS(10);
        wager -= 100;
        if(wager - 100 <= 0){
            hideElement(hides);
        }update();
        showElement(show);
        setT(wagta, [wagtx[0] + localstr(wager), wagtx[1] + localstr(wager), wagtx[2] + localstr(wager)]);
        if(wager < limit){
            showElement(shows);
    }}else{
        playS(2);
        hideElement(hides);
}}
function add100s(show, wagta, wagtx, hide){
    var limit = 1000;
    if(pay > 0 && vit>ztime && !ispvp){
        limit = 5000;
    }if(wager + 100 <= limit){
        playS(10);
        wager += 100;
        if(wager + 100 > limit){
            hideElement(hide);
        }update();
        showE(show);
        setT(wagta, [wagtx[0] + localstr(wager), wagtx[1] + localstr(wager), wagtx[2] + localstr(wager)]);
    }else{
        playS(2);
        hideElement(hide);
}}
function min100s(show, wagta, wagtx, hide){
    if(wager - 100 > 0){
        playS(10);
        wager -= 100;
        if(wager - 100 <= 0){
            hideElement(hide);
        }update();
        setT(wagta, [wagtx[0] + localstr(wager), wagtx[1] + localstr(wager), wagtx[2] + localstr(wager)]);
        showE(show);
    }else{
        playS(2);
        hideElement(hide);
}}
function add1000(show, wagta, wagtx, hide){
    var limit = 10000;
    if(pay > 0 && vit>ztime && !ispvp){
        limit = 50000;
    }if(currentScreen == "screen3" || currentScreen == "crap"){
        limit = limit / 10;
    }if(wager + 1000 <= limit){
        playS(10);
        wager += 1000;
        if(wager + 1000 > limit){
            hideElement(hide);
        }update();
        showE(show);
        setT(wagta, [wagtx[0] + localstr(wager), wagtx[1] + localstr(wager), wagtx[2] + localstr(wager)]);
    }else{
        playS(2);
        hideElement(hide);
}}
function min1000(show, wagta, wagtx, hide){
    if(wager - 1000 > 0){
        playS(10);
        wager -= 1000;
        if(wager - 1000 <= 0){
            hideElement(hide);
        }update();
        setT(wagta, [wagtx[0] + localstr(wager), wagtx[1] + localstr(wager), wagtx[2] + localstr(wager)]);
        showE(show);
    }else{
        playS(2);
        hideElement(hide);
}}
onEvent("\x73\x69\x66\x73\x6E","click",function(){open("https://studio.code.org/projects/applab/POhUxXWMgzYWmhsdjL_-a958VrgRkwPoNICbzouxVEg");});
onEvent("button261","click",function(){
    if(mmm){
        setScreen("dev");
        currentScreen="dev";
}});
onEvent("button4","click",function(){add100("button5", "text_area3", ["Wager: ", "赌注：", ""], "button7", "button4")});
onEvent("button5","click",function(){min100("button4", "text_area3", ["Wager: ", "赌注：", ""], "button6", "button5")});
onEvent("button6","click",function(){add1000(["button5", "button7"], "text_area3", ["Wager: ", "赌注：", ""], "button6")});
onEvent("button7","click",function(){min1000(["button4", "button6"], "text_area3", ["Wager: ", "赌注：", ""], "button7")});
function doPayout(val, val2){
    finishTime();
    playS(7);
    from = val;
    setImage("image1", val2);
    changeScreen("payout");
}
onEvent("button8","click",function(){doPayout(1, ["assets/slide.jpg", "assets/slidec.jpg", ""])});
onEvent("button13","click",function(){doStart("screen1")});
onEvent("button10","click",function(){
    changeScreen("screen2");
    playS(3);
});
onEvent("button1","click",function(){
    if(!ftueflag[5]){
        doTutorial(5);
    }else{
        doEnter("screen3", "text_area6", "text_area8", ["Chip size: ", "筹码大小：", ""], wager, true);
        setT("button82",["Place Bet","投注",""]);
}});
onEvent("button83","click",function(){add100s(["button84","button87"], "text_area8", ["Chip size: ", "筹码大小：", ""], "button83")});
onEvent("button84","click",function(){min100s(["button83","button86"], "text_area8", ["Chip size: ", "筹码大小：", ""], "button84")});
onEvent("button86","click",function(){add10("button87", "text_area8", ["Chip size: ", "筹码大小：", ""], "button84","button86")});
onEvent("button87","click",function(){min10("button86", "text_area8", ["Chip size: ", "筹码大小：", ""], "button83","button87")});
function roulsave(){
    curNumber++;
    if(curNumber > 37){
        curNumber = 0;
    }if(curNumber == 37){
        setStyle("roulbj", "background-color: #006400");
        setText("text_area7", "00");
    }else{
        if(blk.indexOf(curNumber) >= 0){
            setStyle("roulbj", "background-color: #000000");
        }else if(curNumber == 0){
            setStyle("roulbj", "background-color: #006400");
        }else{
            setStyle("roulbj", "background-color: #ff0000");
        }setText("text_area7", curNumber);
}}
onEvent("button82","click",function(){
    if(betz.length == 0){
        playS(2);
        setText("text_area7", "no");
        setT("text_area9", ["No bets!", "没有赌注！", ""]);
        return;
    }var spent = 0;
    for(var z = 0; z < betz.length; z++){
        spent += betz[z].wager;
    }if(account - spent < 0){
        insC("text_area10");
        return;
    }if(sirand){
        if(randomtrig){
            wager = wager*10;
            doRand(0);
            setT("button82",["Place Bet","投注",""]);
            return;
        }else{
            randomtrig = 1;
            setT("button82",["Continue","继续",""]);
    }}if(ispvp){
        if(pvptrig){
            if(pvpdata.cr == pvpdata.r){
                locallastgame = false;
            }updPVPText();
            updatePlayerPVP();
            changeScreen("pvpe");
            wager = wager*10;
            setT("button82",["Place Bet","投注",""]);
            return;
        }else{
            setT("button82",["Continue","继续",""]);
            pvptrig = 1;
    }}twospin++;
    pst++;
    isperfect = 0;
    if(ispvp){
        pvpdata.la += spent;
    }log("rs", spent);
    log("rb", 1);
    changeAccount(-spent);
    setText("text_area6", accountstring);
    hideElement("button82");
    fadein("barr");
    var generate = RandomNumber(40, 120);
    var v1 = Math.round(generate/8);
    var v2 = v1*2;
    var v3 = v1*4;
    kz = 0;
    update();
    kz = timedLoop(30, function(){
        playS(14);
        generate--;
        roulsave();
        if(generate < v3){
            stopTimedLoop(kz);
            kz = timedLoop(60, function(){
                playS(14);
                generate--;
                roulsave();
                if(generate < v2){
                    stopTimedLoop(kz);
                    kz = timedLoop(90, function(){
                    playS(14);
                    generate--;
                    roulsave();
                    if(generate < v1){
                        stopTimedLoop(kz);
                        kz = timedLoop(120, function(){
                        playS(14);
                        generate--;
                        roulsave();
                        if(generate < 0){
                            stopTimedLoop(kz);
                            fadein("button82");
                            fadeout("barr");
                            var text = "";
                            for(var i = 0; i < betz.length; i++){
                                var match = false;
                                var te = i + 1;
                                for(var j = 0; j < betz[i].bet.length; j++){
                                    if(curNumber == betz[i].bet[j]){
                                        match = true;
                                        var po = betz[i].wager * betz[i].payout;
                                        switch(lang){
                                            case 0: text += "Bet "+te+" win, +"+po+"!\n";
                                                break;
                                            case 1: text += "赌注"+te+" 赢了，+"+po+"!\n";
                                                break;
                                            case 2: text += "!\n";
                                                break;
                                        }gain += po;
                                        if(betz[i].payout == 36 && betz.length == 1){
                                            isperfect = 1;
                                        }break;
                                }}if(!match){
                                    switch(lang){
                                        case 0: text += "Bet "+te+" lost.\n";
                                            break;
                                        case 1: text += "赌注"+te+" 输了。\n";
                                            break;
                                        case 2: text += "!\n";
                                            break;
                            }}}if(isperfect == 1){
                                twoguess++;
                                nto+=2;
                            }var real = gain - spent;
                            var ttt = Math.abs(real);
                            exp += Math.round(ttt / 5);
                            if(real > 0){
                                playS(3);
                                temptwo++;
                                switch(lang){
                                    case 0: text += "\nYou won " + localstr(real) + " overall.";
                                        break;
                                    case 1: text += "你总共赢了" + localstr(real) + "。";
                                        break;
                                    case 2:
                                        break;
                                }if(sirand){
                                    randomstreak++;
                                    unifyRand(0);
                                    if(randomstreak > rst){
                                        rst = randomstreak;
                                        submitFame(13, randomstreak);
                                }}else if(ispvp){
                                    pvpstreak++;
                                    if(pvpstreak > pvpdata.st){
                                        pvpdata.st = pvpstreak;
                                    }unifyRand(1); 
                                }else{
                                    setT("text_area8", ["Win streak: " + temptwo, "连胜：" + temptwo, ""]);
                                }submitFame(2, temptwo);
                                if(temptwo > twostreak){
                                    twostreak = temptwo;
                                }if(sirand == 1){
                                    winrand++;
                            }}else if(real == 0){
                                playS(8);
                                switch(lang){
                                    case 0: text += "\nYou struck even.";
                                        break;
                                    case 1: text += "你回本了。";
                                        break;
                                    case 2:
                                        break;
                            }}else{
                                playS(12);
                                temptwo = randomstreak = pvpstreak = 0;
                                setT("text_area8", ["Win streak: 0", "连胜：0", ""]);
                                switch(lang){
                                    case 0: text += "\nYou lost " + localstr(-real) + " overall.";
                                        break;
                                    case 1: text += "\n你总共输了" + localstr(-real) + "。";
                                        break;
                                    case 2:
                                        break;
                            }}if(gain > 0){
                                log("rp", gain);
                                if(ispvp){
                                    pvpdata.wa += gain;
                                }changeAccount(gain);
                                setText("text_area6", accountstring);
                            }setText("text_area10", text);
                            update();
                            gain = 0;
}})}})}})}})});
onEvent("button80","click",function(){
    playS(0);
    betz = [];
    betLog = "";
    setText("text_area9", betLog);
});
onEvent("button81","click",function(){
    playS(0);
    betz.pop();
    var string = betLog.split('\n');
    string.splice(0, 1);
    betLog = string.join('\n');
    setText("text_area9", betLog);
});
onEvent("zero","click",function(){placeBet([0], 36, "0: ");});
onEvent("zerozero","click",function(){placeBet([37], 36, "00: ");});
onEvent("button16","click",function(){placeBet([2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35], 2, ["Black: ", "黑色: ", ""])});
onEvent("button17","click",function(){placeBet([1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36], 2, ["Red: ", "红色: ", ""])});
onEvent("button311","click",function(){placeBet([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36], 2, ["Even: ", "偶数: ", ""])});
onEvent("button313","click",function(){placeBet([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35], 2, ["Odd: ", "奇数: ", ""])});
onEvent("button19","click",function(){placeBet([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], 2, "1 - 18: ")});
onEvent("button18","click",function(){placeBet([19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], 2, "19 - 36: ")});
onEvent("button61","click",function(){placeBet([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3, "1 - 12: ")});
onEvent("button62","click",function(){placeBet([19, 20, 21, 22, 23, 24, 13, 14, 15, 16, 17, 18], 3, "13 - 24: ")});
onEvent("button63","click",function(){placeBet([25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], 3, "25 - 36: ")});
onEvent("button64","click",function(){placeBet([1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34], 3, ["1st col: ", "1列: ", ""])});
onEvent("button66","click",function(){placeBet([2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35], 3, ["2nd col: ", "2列: ", ""])});
onEvent("button65","click",function(){placeBet([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 34, 36], 3, ["3rd col: ", "3列: ", ""])});
onEvent("button67","click",function(){placeBet([1, 2, 3], 12, ["1st row: ", "1排: ", ""])});
onEvent("button68","click",function(){placeBet([4, 5, 6], 12, ["2nd row: ", "2排: ", ""])});
onEvent("button69","click",function(){placeBet([7, 8, 9], 12, ["3rd row: ", "3排: ", ""])});
onEvent("button70","click",function(){placeBet([10, 12, 11], 12, ["4th row: ", "4排: ", ""])});
onEvent("button71","click",function(){placeBet([13, 14, 15], 12, ["5th row: ", "5排: ", ""])});
onEvent("button73","click",function(){placeBet([16, 17, 18], 12, ["6th row: ", "6排: ", ""])});
onEvent("button74","click",function(){placeBet([19, 20, 21], 12, ["7th row: ", "7排: ", ""])});
onEvent("button75","click",function(){placeBet([22, 23, 24], 12, ["8th row: ", "8排: ", ""])});
onEvent("button76","click",function(){placeBet([25, 26, 27], 12, ["9th row: ", "9排: ", ""])});
onEvent("button77","click",function(){placeBet([28, 29, 30], 12, ["10th row: ", "10排: ", ""])});
onEvent("button78","click",function(){placeBet([31, 32, 33], 12, ["11th row: ", "11排: ", ""])});
onEvent("button79","click",function(){placeBet([34, 35, 36], 12, ["12th row: ", "12排: ", ""])});
onEvent("1","click",function(){placeBet([1], 36, "1: ")});
onEvent("2","click",function(){placeBet([2], 36, "2: ")});
onEvent("3","click",function(){placeBet([3], 36, "3: ")});
onEvent("4","click",function(){placeBet([4], 36, "4: ")});
onEvent("5","click",function(){placeBet([5], 36, "5: ")});
onEvent("6","click",function(){placeBet([6], 36, "6: ")});
onEvent("7","click",function(){placeBet([7], 36, "7: ")});
onEvent("8","click",function(){placeBet([8], 36, "8: ")});
onEvent("9","click",function(){placeBet([9], 36, "9: ")});
onEvent("10","click",function(){placeBet([10], 36, "10: ")});
onEvent("11","click",function(){placeBet([11], 36, "11: ")});
onEvent("12","click",function(){placeBet([12], 36, "12: ")});
onEvent("13","click",function(){placeBet([13], 36, "13: ")});
onEvent("14","click",function(){placeBet([14], 36, "14: ")});
onEvent("15","click",function(){placeBet([15], 36, "15: ")});
onEvent("16","click",function(){placeBet([16], 36, "16: ")});
onEvent("17","click",function(){placeBet([17], 36, "17: ")});
onEvent("18","click",function(){placeBet([18], 36, "18: ")});
onEvent("19","click",function(){placeBet([19], 36, "19: ")});
onEvent("20","click",function(){placeBet([20], 36, "20: ")});
onEvent("21","click",function(){placeBet([21], 36, "21: ")});
onEvent("22","click",function(){placeBet([22], 36, "22: ")});
onEvent("23","click",function(){placeBet([23], 36, "23: ")});
onEvent("24","click",function(){placeBet([24], 36, "24: ")});
onEvent("25","click",function(){placeBet([25], 36, "25: ")});
onEvent("26","click",function(){placeBet([26], 36, "26: ")});
onEvent("27","click",function(){placeBet([27], 36, "27: ")});
onEvent("28","click",function(){placeBet([28], 36, "28: ")});
onEvent("29","click",function(){placeBet([29], 36, "29: ")});
onEvent("30","click",function(){placeBet([30], 36, "30: ")});
onEvent("31","click",function(){placeBet([31], 36, "31: ")});
onEvent("32","click",function(){placeBet([32], 36, "32: ")});
onEvent("33","click",function(){placeBet([33], 36, "33: ")});
onEvent("34","click",function(){placeBet([34], 36, "34: ")});
onEvent("35","click",function(){placeBet([35], 36, "35: ")});
onEvent("36","click",function(){placeBet([36], 36, "36: ")});
function placeBet(be, payouts, strings){
    if(betz.length < 10){
        playS(8);
        var object = {};
        object.bet = be;
        object.payout = payouts;
        object.wager = wager;
        betz.push(object);
        var string;
        if(Array.isArray(strings)){
            string = strings[lang] + localstr(wager) + "\n";
        }else{
            string = strings + localstr(wager) + "\n";
        }betLog = string.concat(betLog);
        setText("text_area9", betLog);
        setText("text_area46", "");
    }else{
        playS(2);
        setT("text_area10", ["Bets full!\nRemove some bets", "赌注已满！\n移掉一些赌注", ""]);
}}
onEvent("button91","click",function(){
    doStart("screen3");
    wager = wager*10;
});
onEvent("button89","click",function(){doPayout(2, ["assets/roule.jpg", "assets/roulc.jpg", ""]);});
onEvent("button12","click",function(){
    if(!ftueflag[7]){
        doTutorial(7);
    }else{
        doEnter("keno", "text_area12", "text_area11", ["Wager: ", "赌注：", ""], wager, true);
}});
onEvent("button126","click",function(){doStart("keno");});
onEvent("button131","click",function(){doPayout(3, ["assets/keno.jpg", "assets/kenoc.jpg", ""]);});
onEvent("b1","click",function(){triggerNum(0)});
onEvent("b2","click",function(){triggerNum(1)});
onEvent("b3","click",function(){triggerNum(2)});
onEvent("b4","click",function(){triggerNum(3)});
onEvent("b5","click",function(){triggerNum(4)});
onEvent("b6","click",function(){triggerNum(5)});
onEvent("b7","click",function(){triggerNum(6)});
onEvent("b8","click",function(){triggerNum(7)});
onEvent("b9","click",function(){triggerNum(8)});
onEvent("b10","click",function(){triggerNum(9)});
onEvent("b11","click",function(){triggerNum(10)});
onEvent("b12","click",function(){triggerNum(11)});
onEvent("b13","click",function(){triggerNum(12)});
onEvent("b14","click",function(){triggerNum(13)});
onEvent("b15","click",function(){triggerNum(14)});
onEvent("b16","click",function(){triggerNum(15)});
onEvent("b17","click",function(){triggerNum(16)});
onEvent("b18","click",function(){triggerNum(17)});
onEvent("b19","click",function(){triggerNum(18)});
onEvent("b20","click",function(){triggerNum(19)});
onEvent("b21","click",function(){triggerNum(20)});
onEvent("b22","click",function(){triggerNum(21)});
onEvent("b23","click",function(){triggerNum(22)});
onEvent("b24","click",function(){triggerNum(23)});
onEvent("b25","click",function(){triggerNum(24)});
onEvent("b26","click",function(){triggerNum(25)});
onEvent("b27","click",function(){triggerNum(26)});
onEvent("b28","click",function(){triggerNum(27)});
onEvent("b29","click",function(){triggerNum(28)});
onEvent("b30","click",function(){triggerNum(29)});
onEvent("b31","click",function(){triggerNum(30)});
onEvent("b32","click",function(){triggerNum(31)});
onEvent("b33","click",function(){triggerNum(32)});
onEvent("b34","click",function(){triggerNum(33)});
onEvent("b35","click",function(){triggerNum(34)});
onEvent("b36","click",function(){triggerNum(35)});
onEvent("b37","click",function(){triggerNum(36)});
onEvent("b38","click",function(){triggerNum(37)});
onEvent("b39","click",function(){triggerNum(38)});
onEvent("b40","click",function(){triggerNum(39)});
onEvent("b41","click",function(){triggerNum(40)});
onEvent("b42","click",function(){triggerNum(41)});
onEvent("b43","click",function(){triggerNum(42)});
onEvent("b44","click",function(){triggerNum(43)});
onEvent("b45","click",function(){triggerNum(44)});
onEvent("b46","click",function(){triggerNum(45)});
onEvent("b47","click",function(){triggerNum(46)});
onEvent("b48","click",function(){triggerNum(47)});
onEvent("b49","click",function(){triggerNum(48)});
onEvent("b50","click",function(){triggerNum(49)});
onEvent("b51","click",function(){triggerNum(50)});
onEvent("b52","click",function(){triggerNum(51)});
onEvent("b53","click",function(){triggerNum(52)});
onEvent("b54","click",function(){triggerNum(53)});
onEvent("b55","click",function(){triggerNum(54)});
onEvent("b56","click",function(){triggerNum(55)});
onEvent("b57","click",function(){triggerNum(56)});
onEvent("b58","click",function(){triggerNum(57)});
onEvent("b59","click",function(){triggerNum(58)});
onEvent("b60","click",function(){triggerNum(59)});
onEvent("b61","click",function(){triggerNum(60)});
onEvent("b62","click",function(){triggerNum(61)});
onEvent("b63","click",function(){triggerNum(62)});
onEvent("b64","click",function(){triggerNum(63)});
onEvent("b65","click",function(){triggerNum(64)});
onEvent("b66","click",function(){triggerNum(65)});
onEvent("b67","click",function(){triggerNum(66)});
onEvent("b68","click",function(){triggerNum(67)});
onEvent("b69","click",function(){triggerNum(68)});
onEvent("b70","click",function(){triggerNum(69)});
onEvent("b71","click",function(){triggerNum(70)});
onEvent("b72","click",function(){triggerNum(71)});
onEvent("b73","click",function(){triggerNum(72)});
onEvent("b74","click",function(){triggerNum(73)});
onEvent("b75","click",function(){triggerNum(74)});
onEvent("b76","click",function(){triggerNum(75)});
onEvent("b77","click",function(){triggerNum(76)});
onEvent("b78","click",function(){triggerNum(77)});
onEvent("b79","click",function(){triggerNum(78)});
onEvent("b80","click",function(){triggerNum(79)});
onEvent("button294","click",function(){
  kenofix = true;
  playS(8);
  for(var i = 0; i < 80; i++){
    if(betthree[i] == 1){
      triggerNum(i, true);
  }}hideElement("button294");
  kenofix = false;
});
onEvent("button315","click",function(){
    edited = false;
    if(selected > 20){
        while(!edited){
            var rand = RandomNumber(0, 79);
            if(betthree[rand] == 1){
                triggerNum(rand);
                edited = true;
    }}}else{
        while(!edited){
            var rand = RandomNumber(0, 79);
            if(betthree[rand] == 0){
                triggerNum(rand);
                edited = true;
}}}});
function triggerNum(index, val2){
    if(!isDisabled){
        var gg = index + 1;
        if(betthree[index] == 0){
            betthree[index] = 1;
            setStyle("b" + gg, "background: #FF0000");
            selected++;
            showElement("button294");
        }else{
            betthree[index] = 0;
            setStyle("b" + gg, "background: #00a400");
            selected--;
            if(selected == 0){
              hideElement("button294");
        }} if(selected == 20 && !kenofix){
            playS(8);
            hideElement("button315");
            showElement("button125");
        }else{
            showElement("button315");
            hideElement("button125");
            if(selected > 20){
                setT("button315", ["Deselect random","随机撤销选择",""]);
            }else{
                setT("button315", ["Select random","随机选择",""]);
    }}if(val2 != true){
            playS(0);
        }}summary = "Your pick:\n";
        sumaryc = "你的选择:\n";
        sumarys = "";
        setT("text_area13", [selected + " selected - you need 20", "已选" + selected + "个 - 你需要20个", ""]);
        for(var i = 0; i < betthree.length; i++){
            if(betthree[i] == 1){
                var str = i + 1;
                summary = summary + str + "  ";
                sumaryc = sumaryc + str + "  ";
                sumarys = sumarys + str + "  ";
        }}setText("text_area15", summary);
        setText("text_area119", sumaryc);
        setText("text_area122", sumarys);
}
onEvent("button286","click",function(){add1000(["button128", "button287"], "text_area11", ["Wager: ", "赌注：", ""], "button286")});
onEvent("button287","click",function(){min1000(["button286", "button127"], "text_area11", ["Wager: ", "赌注：", ""], "button287")});
onEvent("button127","click",function(){add100("button128", "text_area11", ["Wager: ", "赌注：", ""], "button287", "button127")});
onEvent("button128","click",function(){min100("button127", "text_area11", ["Wager: ", "赌注：", ""], "button286", "button128")});
onEvent("button125","click",function(){
    if(account - wager < 0){
        insC("text_area13");
        return;
    }if(kenofix){
        return;
    }kenofix = true;
    fourbet++;
    pst++;
    randPick = [];
    isDisabled = true;
    log("tk", 1);
    log("ks", wager);
    score = 0;
    switch (lang){
        case 0:theirpick = "\nComputer pick:\n";
            break;
        case 1:theirpick = "\n电脑选择:\n";
            break;
        case 2:
            break;
    }fadeIn(["bar","text_area14"]);
    hideElement("button294");
    var i = 0;
    changeAccount(-wager);
    if(ispvp){
        pvpdata.la += wager;
    }setText("text_area12", accountstring);
    kz = 0;
    update();
    kz = timedLoop(120, function(){
        playS(10);
        i++;
        if(i != 21){
            var integer = RandomNumber(1, 80);
            while (theirpick.includes(integer)){
                integer = RandomNumber(1, 80);
            }randPick.push(integer);
            setText("text_area14", integer);
            theirpick += integer + "  ";
            setText("text_area15", summary + theirpick);
            setText("text_area119", sumaryc + theirpick);
            setText("text_area122", sumarys + theirpick);
            if(betthree[integer - 1] == 0){
                setStyle("b" + integer, "background: #0000FF");
            }else{
                score++;
                setStyle("b" + integer, "background: #FFFF00");
            }}else{
            if(score == 20){
                i = 38000;
            }else if(score == 19){
                i = 26000;
            }else if(score == 18){
                i = 18000;
            }else if(score == 17){
                i = 12000;
            }else if(score == 16){
                i = 8000;
            }else if(score == 15){
                i = 4600;
            }else if(score == 14){
                i = 1800;
            }else if(score == 13){
                i = 600;
            }else if(score == 12){
                i = 200;
            }else if(score == 11){
                i = 50;
            }else if(score == 10){
                i = 15;
            }else if(score == 9){
                i = 5;
            }else if(score == 8){
                i = 2;
            }else if(score == 7){
                i = 1;
            }else if(score == 3){
                i = 1;
            }else if(score == 2){
                i = 2;
            }else if(score == 1){
                i = 5;
            }else if(score == 0){
                i = 20;
            }else{
                i = 0;
            }if(i > 17999){
                changeScreen("jackpot");
                log("kj", 1);
                subBoard(3, wager*i);
                finishTime();
                fourspec++;
                nto+=12000;
                setT("text_area5", ["X" + i + ". Your luck is so good that you should go buy a real lottery. The odds of this is less than 1 in a billion. Take a screenshot - you just beaten RN Jesus.", "X" + i + ". 你的运气太好了，你应该直接去买彩票。 这个概率是几十亿分之一。 截一张图吧。", ""]);
                playS(4);
            }else if(i > 299){
                playS(3);
            }else if(i > 0){
                playS(8);
            }else{
                tempfour = randomstreak = pvpstreak = 0;
                setT("text_area11", ["Win streak: 0", "连胜：0", ""]);
                playS(12);
            }if(i > 0){
                tempfour++;
                submitFame(3, tempfour);
                if(sirand){
                    randomstreak++;
                    unifyRand(0);
                    if(randomstreak > rst){
                        rst = randomstreak;
                        submitFame(13, randomstreak);
                }}else if(ispvp){
                    pvpstreak++;
                    if(pvpstreak > pvpdata.st){
                        pvpdata.st = pvpstreak;
                    }unifyRand(1); 
                }else{
                    setT("text_area11", ["Win streak: " + tempfour, "连胜：" + tempfour, ""]);
                }if(tempfour > fourstreak){
                    fourstreak = tempfour;
                }if(sirand == 1){
                    winrand++;
            }}i = wager * i;
            changeAccount(i);
            if(ispvp){
                pvpdata.wa += i;
            }log("kp", i);
            setTex(["text_area12", "text_area31"], accountstring);
            fadeout("bar");
            update();
            setT("text_area13", [score + " matched! You won " + localstr(i) + "!", "重合" + score + "个！你赢了" + localstr(i) + "！", ""]);
            fadein("button15");
            stopTimedLoop(kz);
}})});
onEvent("button15","click",function(){
    if(sirand){
        doRand(0);
    }else if(ispvp){
        if(pvpdata.cr == pvpdata.r){
            locallastgame = false;
        }updPVPText();
        updatePlayerPVP();
        changeScreen("pvpe");
    }else{
        playS(1);
    }isDisabled = false;
    setT("text_area13", ["20 selected - you need 20", "已选20个 - 你需要20个", ""]);
    for(var i = 0; i < betthree.length; i++){
        var gg = i + 1;
        if(betthree[i] == 0){
            setStyle("b" + gg, "background: #00a400");
        }else{
            setStyle("b" + gg, "background: #FF0000");
    }}setText("text_area15", summary);
    hideElement("button15");
    showElement("button294");
    fadeout("text_area14");
    kenofix = false;
});
onEvent("button11","click",function(){
    if(!ftueflag[6]){
        doTutorial(6);
    }else{
        doEnter("hbet", "text_area23", "text_area24", ["Bet: ", "赌注：", ""], wager, true);
}});
onEvent("button20","click",function(){doStart("hbet")});
onEvent("button26","click",function(){add100("button27", "text_area24", ["Bet: ", "赌注：", ""], "button29", "button26")});
onEvent("button27","click",function(){min100("button26", "text_area24", ["Bet: ", "赌注：", ""], "button28", "button27")});
onEvent("button28","click",function(){add1000(["button27", "button29"], "text_area24", ["Bet: ", "赌注：", ""], "button28")});
onEvent("button29","click",function(){min1000(["button26", "button28"], "text_area24", ["Bet: ", "赌注：", ""], "button29")});
onEvent("button21","click",function(){tec(1, ["Bet set on Tucker!", "赌注下在塔克上！", ""]);});
onEvent("button22","click",function(){tec(2, ["Bet set on Fancy!", "赌注下在花俏上！", ""]);});
onEvent("button24","click",function(){tec(3, ["Bet set on Alex!", "赌注下在阿里上！", ""]);});
onEvent("button23","click",function(){tec(4, ["Bet set on Lily!", "赌注下在莉莉上！", ""]);});
onEvent("button25","click",function(){tec(5, ["Bet set on Spirit!", "赌注下在精神上！", ""]);});onEvent("button31","click",function(){tec(6, ["Bet set on Biscuit!", "赌注下在饼干上！", ""]);});
function tec(val1, val2){
    playS(8);
    betfour = val1;
    setT("text_area25", [val2[0], val2[1], val2[2]]);
    showElement("button30");
}
onEvent("button30","click",function(){
    if(account - wager < 0){
        insC("text_area25");
        return;
    }thrtry++;
    pst++;
    changeAccount(-wager);
    if(ispvp){
        pvpdata.la += wager;
    }log("tr", 1);
    log("hs", wager);
    onepos = twopos = thrpos = forpos = fivpos = sixpos = arrow = 20;
    setPosition("c1", onepos, 20, 20, 20);
    setPosition("c2", twopos, 45, 20, 20);
    setPosition("c3", thrpos, 70, 20, 20);
    setPosition("c4", forpos, 95, 20, 20);
    setPosition("c5", fivpos, 120, 20, 20);
    setPosition("c5", sixpos, 145, 20, 20);
    changeScreen("hrace");
    update();
    kz = 0;
    kz = timedLoop(10, function(){
        var rand = RandomNumber(1, 105);
        if(inRange(rand, 1, 21)){
            onepos += 4;
            if(betfour == 1){
                playS(14);
                arrow += 4;
        }}if(inRange(rand, 21, 40)){
            twopos += 4;
            if(betfour == 2){
                playS(14);
                arrow += 4;
        }}if(inRange(rand, 40, 58)){
            thrpos += 4;
            if(betfour == 3){
                playS(14);
                arrow += 4;
        }}if(inRange(rand, 58, 75)){
            forpos += 4;
            if(betfour == 4){
                playS(14);
                arrow += 4;
        }}if(inRange(rand, 75, 91)){
            fivpos += 4;
            if(betfour == 5){
                playS(14);
                arrow += 4;
        }}if(inRange(rand, 91, 106)){
            sixpos += 4;
            if(betfour == 6){
                playS(14);
                arrow += 4;
        }}setPosition("c1", onepos, 20, 20, 20);
        setPosition("c2", twopos, 45, 20, 20);
        setPosition("c3", thrpos, 70, 20, 20);
        setPosition("c4", forpos, 95, 20, 20);
        setPosition("c5", fivpos, 120, 20, 20);
        setPosition("c6", sixpos, 145, 20, 20);
        setPosition("arrow", arrow, 185, 20, 50);
        if(sixpos > 270){
            setT("text_area26", ["Biscuit wins!", "饼干赢了！", ""]);
            if(betfour == 6){
                thrguess++;
                nto+=4;
                subBoard(4, wager*72);
                tex(72);
            }else{
                dothrlose();
            }fadein("button14");
            stopTimedLoop(kz);
        }else if(fivpos > 270){
            setT("text_area26", ["Spirit wins!", "精神赢了！", ""]);
            if(betfour == 5){
                tex(32);
            }else{
                dothrlose();
            }fadein("button14");
            stopTimedLoop(kz);
        }else if(forpos > 270){
            setT("text_area26", ["Lily wins!", "莉莉赢了！", ""]);
            if(betfour == 4){
                tex(14);
            }else{
                dothrlose();
            }fadein("button14");
            stopTimedLoop(kz);
        }else if(thrpos > 270){
            setT("text_area26", ["Alex wins!", "阿里赢了！", ""]);
            if(betfour == 3){
                tex(6);
            }else{
                dothrlose();
            }fadein("button14");
            stopTimedLoop(kz);
        }else if(twopos > 270){
            setT("text_area26", ["Fancy wins!", "花俏赢了！", ""]);
            if(betfour == 2){
                tex(4);
            }else{
                dothrlose();
            }fadein("button14");
            stopTimedLoop(kz);
        }else if(onepos > 270){
            setT("text_area26", ["Tucker wins!", "塔克赢了！", ""]);
            if(betfour == 1){
                tex(2);
            }else{
                dothrlose();
            }fadein("button14");
            stopTimedLoop(kz);
}})});
function dothrwin(){
    playS(3);
    tempthree++;
    submitFame(4, tempthree);
    if(sirand){
        randomstreak++;
        unifyRand(0);
        if(randomstreak > rst){
            submitFame(13, randomstreak);
            rst = randomstreak;
    }}else if(ispvp){
        pvpstreak++;
        if(pvpstreak > pvpdata.st){
            pvpdata.st = pvpstreak;
        }unifyRand(1); 
    }else{
        setT("text_area67", ["Win streak: " + tempthree, "连胜：" + tempthree, ""]);
    }if(tempthree > ttreak){
        ttreak = tempthree;
    }if(sirand == 1){
        winrand++;
}}
function tex(val){
    dothrwin();
    changeAccount(wager*val);
    if(ispvp){
        pvpdata.wa += wager*val;
    }update();
    log("hp", wager * val);
    setT("text_area27", ["Your bet Wins! You won " + localstr(wager * val) + "!", "你的赌注赢了！你赢了 " + localstr(wager * val) + "!", ""]);
}
function dothrlose(){
    tempthree = randomstreak = pvpstreak = 0;
    update();
    playS(12);
    setT("text_area27", ["Your bet lost, better luck next time!", "你的赌注输了，下次好运！", ""]);
    setT("text_area67", ["Win streak: 0", "连胜：0", ""]);
}
onEvent("button14","click",function(){
    clearText(["text_area26", "text_area27"]);
    setText("text_area23", accountstring);
    hideElement("button14");
    if(sirand){
        doRand(0);
        return;
    }if(ispvp){
        if(pvpdata.cr == pvpdata.r){
            locallastgame = false;
        }updPVPText();
        updatePlayerPVP();
        changeScreen("pvpe");
        return;
    }playS(5);
    changeScreen("hbet");
});
onEvent("button88","click",function(){
    if(!ftueflag[9]){
        doTutorial(9);
    }else{
        doEnter("sett", "text_area34", "button37", ["Buy at ", "价格：", ""], wager, true);
}});
onEvent("button33","click",function(){doStart("sett")});
onEvent("button34","click",function(){add100("button35", "button37", ["Buy at ", "价格：", ""], "button147", "button34")});
onEvent("button35","click",function(){min100("button34", "button37", ["Buy at ", "价格：", ""], "button146", "button35")});
onEvent("button146","click",function(){add1000(["button35", "button147"], "button37", ["Buy at ", "价格：", ""], "button146")});
onEvent("button147","click",function(){min1000(["button146", "button34"], "button37", ["Buy at ", "价格：", ""], "button147")});
onEvent("button36","click",function(){doPayout(4, ["assets/scrat.jpg", "assets/scrats.jpg", ""])});
onEvent("button37","click",function(){
    if(account - wager < 0){
        insC("text_area35");
        return;
    }fivescrat++;
    pst++;
    playS(0);
    changeAccount(-wager);
    if(ispvp){
        pvpdata.la += wager;
    }log("cs", wager);
    log("tc", 1);
    setText("text_area34", accountstring);
    clicks = 8;
    update();
    hideE(["button33", "button35", "button34", "button37", "button146", "button147"]);
    d1 = d2 = d3 = d4 = d5 = d6 = d7 = d8 = d9 = d10 = d11 = d12 = d13 = d14 = d15 = d16 = d17 = d18 = d19 = d20 = false;
    wone = wtwo = wthr = wfor = paysss = 0;
    desc = "";
    setT("text_area35", ["Select 8 more!", "再选8个！", ""]);
    for(var i = ref.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i + 1));
        var temp = ref[i];
        ref[i] = ref[j];
        ref[j] = temp;
    }for(var fd = 1; fd < 21; fd++){
        var jrand = RandomNumber(1, 2);
        sIurl("d" + fd, "assets/gift" + jrand + ".png");
        fadein("d" + fd);
}});
onEvent("d1","click",function(){
    if(!d1){
        trig(1);
        d1 = true;
}});
onEvent("d2","click",function(){
    if(!d2){
        trig(2);
        d2 = true;
}});
onEvent("d3","click",function(){
    if(!d3){
        trig(3);
        d3 = true;
}});
onEvent("d4","click",function(){
    if(!d4){
        trig(4);
        d4 = true;
}});
onEvent("d5","click",function(){
    if(!d5){
        trig(5);
        d5 = true;
}});
onEvent("d6","click",function(){
    if(!d6){
        trig(6);
        d6 = true;
}});
onEvent("d7","click",function(){
    if(!d7){
        trig(7);
        d7 = true;
}});
onEvent("d8","click",function(){
    if(!d8){
        trig(8);
        d8 = true;
}});
onEvent("d9","click",function(){
    if(!d9){
        trig(9);
        d9 = true;
}});
onEvent("d10","click",function(){
    if(!d10){
        trig(10);
        d10 = true;
}});
onEvent("d11","click",function(){
    if(!d11){
        trig(11);
        d11 = true;
}});
onEvent("d12","click",function(){
    if(!d12){
        trig(12);
        d12 = true;
}});
onEvent("d13","click",function(){
    if(!d13){
        trig(13);
        d13 = true;
}});
onEvent("d14","click",function(){
    if(!d14){
        trig(14);
        d14 = true;
}});
onEvent("d15","click",function(){
    if(!d15){
        trig(15);
        d15 = true;
}});
onEvent("d16","click",function(){
    if(!d16){
        trig(16);
        d16 = true;
}});
onEvent("d17","click",function(){
    if(!d17){
        trig(17);
        d17 = true;
}});
onEvent("d18","click",function(){
    if(!d18){
        trig(18);
        d18 = true;
}});
onEvent("d19","click",function(){
    if(!d19){
        trig(19);
        d19 = true;
}});
onEvent("d20","click",function(){
    if(!d20){
        trig(20);
        d20 = true;
}});
function trig(val){
    if(clicks > 0){
        clicks--;
        setT("text_area35", ["Select " + clicks + " more!", "再选 " + clicks + " 个！", ""]);
        if(ref[val - 1] == 0){
            playS(2);
            sIurl("d" + val, "assets/loss.png");
        }else if(ref[val - 1] == 0.5){
            wone++;
            playS(13);
            sIurl("d" + val, "assets/little.png");
        }else if(ref[val - 1] == 1){
            wtwo++;
            playS(13);
            sIurl("d" + val, "assets/fortune.png");
        }else if(ref[val - 1] == 1.5){
            wthr++;
            playS(13);
            sIurl("d" + val, "assets/bigWin.png");
        }else{
            wfor++;
            playS(8);
            sIurl("d" + val, "assets/jackpot.png");
        }if(clicks == 0){
            if(wone == 2){
                paysss += 0.5;
                desc += "X0.5! ";
                checkRing(0.5);
            }if(wtwo == 2){
                paysss += 1;
                desc += "X1! ";
                checkRing(1);
            }if(wthr == 2){
                paysss += 1.5;
                desc += "X1.5! ";
                checkRing(1.5);
            }if(wfor == 2){
                paysss += 2;
                desc += "X2! ";
                checkRing(2);
            }if(paysss > 4.9){
                playS(4);
                log("cj", 1);
                subBoard(5, paysss * wager);
                fivemega++;
                nto+=5000;
                finishTime();
                setT("text_area5", ["You are so lucky. 0.000008%. You got it. Amazing.\nTake a screenshot, and go buy a lottery!\n" + paysss * wager + " Credit added!", "你太幸运了。0.000008%。太厉害了。\n截个图，然后去买张彩票吧！\n" + paysss * wager + "点数已奖励！", ""]);
                doTic();
                changeScreen("jackpot");
                switch (lang){
                    case 0:desc += "\nMega jackpot! You won " + localstr(paysss * wager) + "!";
                        break;
                    case 1:desc += "\n超级头奖！你赢得了" + localstr(paysss * wager) + "!";
                        break;
                    case 2:
                        break;
            }}else if(paysss > 1.9){
                playS(3);
                switch (lang){
                    case 0:desc += "\nJackpot! You won " + localstr(paysss * wager) + "!";
                        break;
                    case 1:desc += "\n头奖！你赢得了" + localstr(paysss * wager) + "!";
                        break;
                    case 2:
                        break;
            }}else if(paysss > 0){
                switch (lang){
                    case 0:desc += "\nYou won " + localstr(paysss * wager) + "!";
                        break;
                    case 1:desc += "\n你赢得了" + localstr(paysss * wager) + "!";
                        break;
                    case 2:
                        break;
                }playS(8);
            }else{
                tempfive = randomstreak = pvpstreak = 0;
                switch (lang){
                    case 0:setText("text_area68", "Win streak: 0");
                        desc += "You won nothing. Better luck next time!";
                        break;
                    case 1:setText("text_area68", "连胜：0");
                        desc += "啥也没赢。下次好运！";
                        break;
                    case 2:
                        break;
                }playS(12);
            }if(paysss > 0){
                tempfive++;
                submitFame(5, tempfive);
                if(sirand){
                    randomstreak++;
                    unifyRand(0);
                    if(randomstreak > rst){
                        submitFame(13, randomstreak);
                        rst = randomstreak;
                }}else if(ispvp){
                    pvpstreak++;
                    if(pvpstreak > pvpdata.st){
                        pvpdata.st = pvpstreak;
                    }unifyRand(1); 
                }else{
                    setT("text_area68", ["Win streak: " + tempfive, "连胜：" + tempfive, ""]);
                }if(tempfive > fivestreak){
                    fivestreak = tempfive;
                }if(sirand == 1){
                    winrand++;
            }}log("cg", paysss * wager);
            changeAccount(paysss*wager);
            if(ispvp){
                pvpdata.wa += paysss*wager;
            }setTex(["text_area34", "text_area31"], accountstring);
            setText("text_area35", desc);
            fadein("button38");
            update();
}}}
function checkRing(value){
    for(var f = 1; f <= ref.length; f++){
        if(ref[f - 1] == value){
            fadein("r" + f);
}}}
onEvent("button38","click",function(){
    if(sirand){
        doRand(0);
    }else if(ispvp){
        if(pvpdata.cr == pvpdata.r){
            locallastgame = false;
        }updPVPText();
        updatePlayerPVP();
        changeScreen("pvpe");
    }else{
        playS(5);
    }doTic();
});
function doTic(){
    setText("text_area35", "");
    fadeIn(["button33", "button35", "button34", "button37", "button146", "button147"]);
    fadeout("button38");
    for(var fd = 1; fd < 21; fd++){
        fadeout("d" + fd);
        fadeout("r" + fd);
}}
function playS(val){
    if(sound){
        var est = estt - 1;
        playSound(sounddb[val][est]);
}}
function hideE(val){
    for(var i = 0; i < val.length; i++){
        hideElement(val[i]);
}}
function showE(val){
    for(var i = 0; i < val.length; i++){
        showElement(val[i]);
}}
onEvent("button85","click",function(){
    sound = 0;
    hideElement("button85");
    showElement("button90");
    update();
});
onEvent("button90","click",function(){
    sound = 1;
    hideElement("button90");
    showElement("button85");
    playSound("assets/select.mp3");
    update();
});
onEvent("button39","click",function(){
    doStat(false);
    setStat();
    setPosition("image20", 255, 385, 40, 40);
    setText("ee", "");
    if(bgm && estt == 2){
        setT("ee", ["Of course New Zealand does not exist!", "新西兰当然不存在了！", ""]);
        war = 1;
        if(wam == 1 && wap == 1 && wac == 1 && waf == 1 && h26 != 2){
            h26 = 1;
            showElement("image35");
}}});
function doStat(val){
    kx = 0;
    kx = timedLoop(40, function(){
        ka--;
        kf--;
        setPosition("image18", ka, 0, 880, 450);
        setPosition("image74", kf, 0, 880, 450);
        if(ka < -880){
            ka = 880;
        }if(kf < -880){
            kf = 880;
    }});if(val){
        setStat();
    }changeScreen("stat");
    playS(7);
}
onEvent("image19","click",function(){
    inmisc = 0;
    stopTimedLoop(kx);
    changeScreen("welcome");
    playS(7);
});
function inRange(val, lb, ub){
    return val >= lb && val < ub;
}
function setCas(){
    for(var i = 1; i < 81; i++){
        sIurl("bg" + i, "assets/bg.jpg");
}}
function setWood(){
    for(var i = 1; i < 81; i++){
        sIurl("bg" + i, "assets/bggg.jpg");
}}
function setCyb(){
    for(var i = 1; i < 81; i++){
        sIurl("bg" + i, "assets/bgg.jpg");
}}
function setOce(){
    for(var i = 1; i < 81; i++){
        sIurl("bg" + i, "assets/ocean.jpg");
}}
function setAnn(){
    for(var i = 1; i < 81; i++){
        sIurl("bg" + i, "assets/anniv.jpg");
}}
function setLan(){
    for(var i = 1; i < 81; i++){
        sIurl("bg" + i, "assets/lanota.jpg");
}}
function setCyt(){
    for(var i = 1; i < 81; i++){
        sIurl("bg" + i, "assets/cytus.jpg");
}}
function setTr(){
    for(var i = 1; i < 81; i++){
        sIurl("bg" + i, "assets/childish.jpg");
}}
function setTx(){
    for(var i = 1; i < 81; i++){
        sIurl("bg" + i, "assets/vapor.jpg");
}}
function setLone(){
    for(var i = 1; i < 81; i++){
        sIurl("bg" + i, "assets/lastone.jpg");
}}
function setLtwo(){
    for(var i = 1; i < 81; i++){
        sIurl("bg" + i, "assets/lasttwo.jpg");
}}
function setHoli(){
    for(var i = 1; i < 81; i++){
        sIurl("bg" + i, holipic[isfest]);
}}
function setRandom(){
    for(var i = 1; i < 81; i++){
        sIurl("bg" + i, "assets/dld.jpg");
}}
function setTheme(){
    switch (estt){
        case 1:setCas();
            break;
        case 2:setWood();
            break;
        case 3:setCyb();
            break;
        case 4:setOce();
            break;
        case 5:setAnn();
            break;
        case 6:setLan();
            break;
        case 7:setCyt();
            break;
        case 8:setTr();
            break;
        case 9:setTx();
            break;
        case 10:setLone();
            break;
        case 11:setLtwo();
            break;
}}
onEvent("image21","click",function(){
    playS(9);
    changeScreen("theme");
});
onEvent("image46","click",function(){
    estt = thv = 1;
    fxx = 0;
    update();
    setCas();
    playS(8);
});
onEvent("image47","click",function(){
    estt = thv = 2;
    fxx = 0;
    update();
    setWood();
    playS(8);
});
onEvent("image48","click",function(){
    estt = thv = 3;
    fxx = 0;
    update();
    setCyb();
    playS(8);
});
onEvent("image49","click",function(){
    estt = thv = 4;
    fxx = 0;
    update();
    setOce();
    playS(8);
});
onEvent("image50","click",function(){
    estt = thv = 5;
    fxx = 0;
    update();
    setAnn();
    playS(8);
});
onEvent("prems1","click",function(){
    var diff = Math.ceil((vit - ztime)/86400000);
    if(diff < 0){
        vipst = 1;
    }if(vipst == 0 || vit == -1){
        playS(2);
        setT("text_area131", ["This is a 👑 theme. Please visit the shop and aquire an active 👑 subscription.\n\nLocked", "这是会员👑独占。请去商店获得会员👑订阅。\n\n已锁定"]);
        fadeIn(["text_area131", "text_area130"]);
    }else if(vipst == 1){
        playS(2);
        setT("text_area131", ["This is a 👑 theme. Please visit the shop and aquire an active 👑 subscription.\n\n👑 Perk expired", "这是会员👑独占。请去商店获得会员👑订阅。\n\n👑特权已过时"]);
        fadeIn(["text_area131", "text_area130"]); 
    }else{
        estt = 6;
        fxx = 0;
        update();
        setLan();
        playS(8);
}});
onEvent("prems2","click",function(){
    var diff = Math.ceil((vit - ztime)/86400000);
    if(diff < 0){
        vipst = 1;
    }if(vipst == 0 || vit == -1){
        playS(2);
        setT("text_area131", ["This is a 👑 theme. Please visit the shop and aquire an active 👑 subscription.\n\nLocked", "这是会员👑独占。请去商店获得会员👑订阅。\n\n已锁定"]);
        fadeIn(["text_area131", "text_area130"]);
    }else if(vipst == 1){
        playS(2);
        setT("text_area131", ["This is a 👑 theme. Please visit the shop and aquire an active 👑 subscription.\n\n👑 Perk expired", "这是会员👑独占。请去商店获得会员👑订阅。\n\n👑特权已过时"]);
        fadeIn(["text_area131", "text_area130"]); 
    }else{
        estt = 7;
        fxx = 0;
        update();
        setCyt();
        playS(8);
}});
onEvent("prems3","click",function(){
    var diff = Math.ceil((vit - ztime)/86400000);
    if(diff < 0){
        vipst = 1;
    }if(vipst == 0 || vit == -1){
        playS(2);
        setT("text_area131", ["This is a 👑 theme. Please visit the shop and aquire an active 👑 subscription.\n\nLocked", "这是会员👑独占。请去商店获得会员👑订阅。\n\n已锁定"]);
        fadeIn(["text_area131", "text_area130"]);
    }else if(vipst == 1){
        playS(2);
        setT("text_area131", ["This is a 👑 theme. Please visit the shop and aquire an active 👑 subscription.\n\n👑 Perk expired", "这是会员👑独占。请去商店获得会员👑订阅。\n\n👑特权已过时"]);
        fadeIn(["text_area131", "text_area130"]); 
    }else{
        estt = 8;
        fxx = 0;
        update();
        setTr();
        playS(8);
}});
onEvent("image102","click",function(){
    var diff = Math.ceil((vit - ztime)/86400000);
    if(diff < 0){
        vipst = 1;
    }if(vipst == 0 || vit == -1){
        playS(2);
        setT("text_area131", ["This is a 👑 theme. Please visit the shop and aquire an active 👑 subscription.\n\nLocked", "这是会员👑独占。请去商店获得会员👑订阅。\n\n已锁定"]);
        fadeIn(["text_area131", "text_area130"]);
    }else if(vipst == 1){
        playS(2);
        setT("text_area131", ["This is a 👑 theme. Please visit the shop and aquire an active 👑 subscription.\n\n👑 Perk expired", "这是会员👑独占。请去商店获得会员👑订阅。\n\n👑特权已过时"]);
        fadeIn(["text_area131", "text_area130"]); 
    }else{
        estt = 9;
        fxx = 0;
        update();
        setTx();
        playS(8);
}});
onEvent("image112","click",function(){
    var diff = Math.ceil((vit - ztime)/86400000);
    if(diff < 0){
        vipst = 1;
    }if(vipst == 0 || vit == -1){
        playS(2);
        setT("text_area131", ["This is a 👑 theme. Please visit the shop and aquire an active 👑 subscription.\n\nLocked", "这是会员👑独占。请去商店获得会员👑订阅。\n\n已锁定"]);
        fadeIn(["text_area131", "text_area130"]);
    }else if(vipst == 1){
        playS(2);
        setT("text_area131", ["This is a 👑 theme. Please visit the shop and aquire an active 👑 subscription.\n\n👑 Perk expired", "这是会员👑独占。请去商店获得会员👑订阅。\n\n👑特权已过时"]);
        fadeIn(["text_area131", "text_area130"]); 
    }else{
        estt = 10;
        fxx = 0;
        update();
        setLone();
        playS(8);
}});
onEvent("image113","click",function(){
    var diff = Math.ceil((vit - ztime)/86400000);
    if(diff < 0){
        vipst = 1;
    }if(vipst == 0 || vit == -1){
        playS(2);
        setT("text_area131", ["This is a 👑 theme. Please visit the shop and aquire an active 👑 subscription.\n\nLocked", "这是会员👑独占。请去商店获得会员👑订阅。\n\n已锁定"]);
        fadeIn(["text_area131", "text_area130"]);
    }else if(vipst == 1){
        playS(2);
        setT("text_area131", ["This is a 👑 theme. Please visit the shop and aquire an active 👑 subscription.\n\n👑 Perk expired", "这是会员👑独占。请去商店获得会员👑订阅。\n\n👑特权已过时"]);
        fadeIn(["text_area131", "text_area130"]); 
    }else{
        estt = 11;
        fxx = 0;
        update();
        setLtwo();
        playS(8);
}});
onEvent("image51","click",function(){
  if(isfest != 0){
    setHoli();
    fxx = 1;
    update();
    playS(8);
  }else{
    playS(2);
    setT("text_area131", ["Currently, it is not a festival.\n\nPlease wait for the next festival.\n\n" + nofesteng[nofest], "目前不是节日。请等待下个节日的到来。\n\n" + nofestch[nofest], ""]);
    fadeIn(["text_area131", "text_area130"]);
}});
onEvent("button94","click",function(){
    changeScreen("welcome");
    playS(5);
});
onEvent("checkbox3", "change", function(){
    if(getChecked("checkbox3")){
        playS(0);
    }else{
        playS(13);
}});
onEvent("checkbox1", "change", function(){
    if(!bgm){
        stopSound();
        setChecked("checkbox2", false);
        bgm = 1;
        switch (estt){
            case 1:playSound("assets/game.mp3", true);
                break;
            case 2:playSound("assets/bossa.mp3", true);
                break;
            case 3:playSound("assets/pulsar.mp3", true);
                break;
            case 4:playSound("assets/ocean.mp3", true);
                break;
            case 5:playSound("assets/anniv.mp3", true);
                break;
            case 6:playSound("assets/lanota.mp3", true);
                break;
            case 7:playSound("assets/cytus.mp3", true);
                break;
            case 8:playSound("assets/childish.mp3", true);
                break;
            case 9:playSound("assets/txbgm.mp3", true);
                break;
            case 10:playSound("assets/dancelight.mp3", true);
                break;
            case 11:playSound("assets/gatherdata.mp3", true);
                break;
    }}else{
        stopSound();
        bgm = 0;
}});
onEvent("checkbox2", "change", function(){
    stopSound();
    setChecked("checkbox1", false);
    bgm = 0;
    if(!fbgm){
        playSound(holimus[isfest], true);
        fbgm = 1;
    }else{
        fbgm = 0;
}});
onEvent("icb2", "change", function(){
    if(ishidden){
        setChecked("icb2", false);
        setChecked("icb1", false);
        ishidden = false;
        update();
    }else{
        setChecked("icb2", true);
        setChecked("icb1", false);
        ishidden = true;
        update();
}});
onEvent("text_area130","click",function(){fadeOut(["text_area131", "text_area130"])});
onEvent("button40","click",function(){
    fadeIn(["barrr", "image15"]);
    playS(0);
});
onEvent("barrr","click",function(){
    fadeOut(["barrr", "image15"]);
    playS(0);
});
onEvent("button41","click",function(){
    if(!ftueflag[8]){
        doTutorial(8);
    }else{
        doEnter("screen5", "text_area29", "text_area37", ["Wager: ", "赌注：", ""], wager, true);
}});
onEvent("button42","click",function(){
    if(account - wager < 0){
        insC("text_area33");
        return;
    }if(sirand){
        if(randomtrig){
            doRand(0);
            fadein("button42");
            return;
        }else{
            randomtrig = 1;
    }}if(ispvp){
        if(pvptrig){
            if(pvpdata.cr == pvpdata.r){
                locallastgame = false;
            }updPVPText();
            updatePlayerPVP();
            changeScreen("pvpe");
            fadein("button42");
            return;
        }else{
            pvptrig = 1;
    }}sixspin++;
    pst++;
    indexing = 0;
    changeAccount(-wager);
    if(ispvp){
        pvpdata.la += wager;
    }log("ws", wager);
    log("wt", 1);
    setText("text_area29", accountstring);
    fadeout("button42");
    fadein("text_area38");
    rand1 = RandomNumber(5, 15);
    rand2 = rand1 + RandomNumber(5, 20);
    rand3 = rand2 + RandomNumber(5, 25);
    rand4 = rand3 + RandomNumber(10, 25);
    rand5 = rand4 + RandomNumber(15, 25);
    rand6 = rand5 + RandomNumber(15, 30);
    rand7 = rand6 + RandomNumber(20, 30);
    rand8 = rand7 + RandomNumber(20, 35);
    rand9 = rand8 + RandomNumber(25, 35);
    var endText = "";
    var prevLoc = 0;
    var speed = 10;
    cx = 0;
    update();
    cx = timedLoop(25, function(){
        indexing++;
        if(indexing < 15){
          speed = 10.98;
        }else if(indexing < rand1){
            speed = 9.87;
        }else if(indexing < rand2){
            speed = 8.76;
        }else if(indexing < rand3){
            speed = 7.65;
        }else if(indexing < rand4){
            speed = 6.54;
        }else if(indexing < rand5){
            speed = 5.43;
        }else if(indexing < rand6){
            speed = 4.32;
        }else if(indexing < rand7){
            speed = 3.21;
        }else if(indexing < rand8){
            speed = 2.19;
        }else if(indexing < rand9){
            speed = 1.11;
        }else{
            speed = 0;
        }rotation += speed;
        var rCap = rotation % 360.0;
        var cCap = 360.0 - rCap;
        if(rotation - prevLoc > 6.67){
            prevLoc = rotation;
            playS(14);
        }setStyle("image22", "transform: rotate(" + rCap + "deg);");
        if(speed == 0){
            stopTimedLoop(cx);
            for(var i = 0; i < spaces.length; i++){
                if(inRange(cCap, spaces[i].start, spaces[i].end)){
                    switch (lang){
                        case 0:endText += "Wheel stopped on " + spaces[i].val + "!\n";
                            break;
                        case 1:endText += "轮盘停在了 " + spaces[i].val + "!\n";
                            break;
                        case 2:
                            break;
                    }if(curBet == spaces[i].val){
                        changeAccount(wager * spaces[i].val);
                        if(ispvp){
                            pvpdata.wa += wager * spaces[i].val;
                        }log("ww", wager * spaces[i].val);
                        setText("text_area29", accountstring);
                        tempsix++;
                        submitFame(6, tempsix);
                        if(sirand){
                            randomstreak++;
                            unifyRand(0);
                            if(randomstreak > rst){
                                submitFame(13, randomstreak);
                                rst = randomstreak;
                        }}else if(ispvp){
                            pvpstreak++;
                            if(pvpstreak > pvpdata.st){
                                pvpdata.st = pvpstreak;
                            }unifyRand(1); 
                        }else{
                            setT("wheelstreak", ["Win streak: " + tempsix, "连胜：" + tempsix, ""]);
                        }switch (lang){
                            case 0:endText += "You won " + localstr(wager * spaces[i].val) + "!";
                                break;
                            case 1:endText += "你赢了" + localstr(wager * spaces[i].val) + "点！";
                                break;
                            case 2:
                                break;
                        }if(tempsix > sixstreak){
                            sixstreak = tempsix;
                        }if(sirand == 1){
                            winrand++;
                        }if(spaces[i].val < 3){
                            playS(8);
                        }else if(spaces[i].val < 11){
                            playS(3);
                        }else{
                            playS(4);
                            if(spaces[i].val == 50){
                                log("wj", 1);
                                subBoard(6, wager * 50);
                                sixgold++;
                                nto+=3;
                    }}}else{
                        tempsix = randomstreak = pvpstreak = 0;
                        switch (lang){
                            case 0:setText("wheelstreak", "Win streak: 0");
                                endText += "Better luck next time!";
                                break;
                            case 1:setText("wheelstreak", "连胜：0");
                                endText += "下次好运！";
                                break;
                            case 2:
                                break;
                        }playS(12);
                    }break;
            }}fadein("button42");
            fadeout("text_area38");
            update();
            setText("text_area33", endText);
}})});
onEvent("button44","click",function(){doStart("screen5")});
onEvent("button45","click",function(){add100("button47", "text_area37", ["Wager: ", "赌注：", ""], "button48", "button45")});
onEvent("button46","click",function(){add1000(["button47", "button48"], "text_area37", ["Wager: ", "赌注：", ""], "button46")});
onEvent("button47","click",function(){min100("button45", "text_area37", ["Wager: ", "赌注：", ""], "button46", "button47")});
onEvent("button48","click",function(){min1000(["button45", "button46"], "text_area37", ["Wager: ", "赌注：", ""], "button48")});
onEvent("button50","click",function(){setBet(2, ["Black", "黑色", ""])});
onEvent("button51","click",function(){setBet(3, ["Blue", "蓝色", ""])});
onEvent("button43","click",function(){setBet(6, ["Green", "绿色", ""])});
onEvent("button52","click",function(){setBet(12, ["White", "白色", ""])});
onEvent("button53","click",function(){setBet(25, ["Red", "红色", ""])});
onEvent("button54","click",function(){setBet(50, ["Gold", "金色", ""])});
function setBet(val, val2){
    setT("text_area33", ["Bet set on " + val2[0] + " at x" + val, "赌注下在 " + val2[1] + "，x" + val, ""]);
    showElement("button42");
    curBet = val;
    playS(0);
}
onEvent("button49","click",function(){doPayout(5, ["assets/thetwe.jpg", "assets/thetwes.jpg", ""])});
function doStart(val){
    if(sirand || (begin || ispvp)){
        if(sirand){
            setT("warnT", ["Warning.\n\nQuitting will reset the current random win streak.\n\nProceed?","警告。\n\n退出将重置当前随机模式连胜。\n\n继续？",""]);
        }else{
            setT("warnT", ["Warning. \n\nQuitting will close the current match.\nYou will be disqualified.\n\nProceed?","",""]);
        }playS(2);
        fadeIn(["Back"]);
        changeScreen("warning");
        temsc = val;
    }else{
        finishTime();
        playS(5);
        sirand = ispvp = 0;
        if(val == "screen3" || val == "crap"){
            update(9);
        }else{
            update();
        }changeScreen("screen2");
        checkach();
}}
onEvent("Back","click",function(){
    playS(7);
    if(wtbf && !ispairing){
        updPVPText();
    }changeScreen(temsc);
});
onEvent("Quit","click",function(){
    sirand = pvpstreak = randomstreak = 0;
    if(isfest != 0 && fxx){
        setHoli();
    }else{
        setTheme();
    }if(ispvp){
        doPunish();
    }if(wtbf == 1){
        pvpdata.q = 1;
        begin = ispvp = false;
        wager = pvpwager;
        ontr = true;
        updatePlayerPVP();
    }doStart("");
});
onEvent("button96","click",function(){
    if(!ftueflag[10]){
        doTutorial(10);
    }else{
        doEnter("crap", "text_area47", "text_area44", ["Chip size: ", "筹码大小：", ""], wager, true);
}});
onEvent("button104","click",function(){
    doStart("crap");
    wager = wager*10;
});
onEvent("button132","click",function(){add100s(["button134","button135"], "text_area44", ["Wager: ", "赌注：", ""], "button132")});
onEvent("button134","click",function(){min100s(["button132","button133"], "text_area44", ["Wager: ", "赌注：", ""], "button134")});
onEvent("button133","click",function(){add10("button135", "text_area44", ["Wager: ", "赌注：", ""], "button134","button133")});
onEvent("button135","click",function(){min10("button133", "text_area44", ["Wager: ", "赌注：", ""], "button132","button135")});
onEvent("button95","click",function(){
    if(zzzh.length == 0){
        setT("text_area46", ["No Bets!", "没有赌注！", ""]);
        playS(2);
        return;
    }var ssse = 0;
    for(var z = 0; z < zzzh.length; z++){
        ssse += zzzh[z].wager;
    }if(account < ssse){
        insC("text_area46");
        return;
    }if(sirand){
        if(randomtrig){
            wager = wager*10;
            doRand(0);
            return;
        }else{
            randomtrig = 1;
    }}if(ispvp){
        if(pvptrig){
            if(pvpdata.cr == pvpdata.r){
                locallastgame = false;
            }updPVPText();
            updatePlayerPVP();
            changeScreen("pvpe");
            wager = wager*10;
            return;
        }else{
            pvptrig = 1;
    }}sevthrow++;
    pst++;
    changeAccount(-ssse);
    if(ispvp){
        pvpdata.la += ssse;
    }log("ps", ssse);
    log("pr", 1);
    setText("text_area47", accountstring);
    fadein("text_area48");
    fadeout("button95");
    var rand1 = RandomNumber(15, 25);
    var rand2 = RandomNumber(20, 30);
    var val1, val2, a, b;
    a = b = kz = 0;
    kz = timedLoop(120, function(){
        if(a < rand1){
            val1 = RandomNumber(1, 6);
            sIurl("image30", "assets/di" + val1 + ".png");
            a++;
        }if(b < rand2){
            val2 = RandomNumber(1, 6);
            sIurl("image31", "assets/di" + val2 + ".png");
            b++;
        }if(a == rand1 && b == rand2){
            fadein("button95");
            if(val1 > val2){
                var temp = val1;
                val1 = val2;
                val2 = temp;
            }logText = "";
            var total = 0;
            var sum = val1 + val2;
            for(var i = 0; i < zzzh.length; i++){
                var tmp = zzzh.length - i;
                if(zzzh[i].type == 0){
                    if(zzzh[i].bet1 == val1 && zzzh[i].bet2 == val2){
                        total += zzzh[i].wager * zzzh[i].lose;
                        switch (lang){
                            case 0:logText += "Bet " + tmp + " match, +" + (zzzh[i].wager * zzzh[i].lose) + "!\n";
                                break;
                            case 1:logText += "赌注" + tmp + " 赢了，+" + (zzzh[i].wager * zzzh[i].lose) + "!\n";
                                break;
                            case 2:
                                break;
                        }if((val1 == 1 && val2 == 1) || (val1 == 6 && val2 == 6)){
                            sevspec++;
                            nto++;
                    }}else{
                        switch (lang){
                            case 0:logText += "Bet " + tmp + " Lost.\n";
                                break;
                            case 1:logText += "赌注" + tmp + "输了。\n";
                                break;
                            case 2:
                                break;
                }}}else if(zzzh[i].type == 1){
                    var includes = false;
                    for(var k = 0; k < zzzh[i].bet1.length; k++){
                        if(sum == zzzh[i].bet1[k]){
                            includes = true;
                            total += zzzh[i].wager * zzzh[i].bet2;
                            switch (lang){
                                case 0:logText += "Bet " + tmp + " match, +" + (zzzh[i].wager * zzzh[i].bet2) + "!\n";
                                    break;
                                case 1:logText += "赌注" + tmp + "赢了，+" + (zzzh[i].wager * zzzh[i].bet2) + "!\n";
                                    break;
                                case 2:
                                    break;
                    }}}if(!includes){
                        var fds = false;
                        for(var j = 0; j < zzzh[i].lose.length; j++){
                            if(zzzh[i].lose[j] == sum){
                                fds = true;
                        }}if(fds){
                            switch (lang){
                                case 0:logText += "Bet " + tmp + " Lost.\n";
                                    break;
                                case 1:logText += "赌注" + tmp + "输了。\n";
                                    break;
                                case 2:
                                    break;
                        }}else{
                            total += zzzh[i].wager;
                            switch (lang){
                                case 0:logText += "Bet " + tmp + " Returned.\n";
                                    break;
                                case 1:logText += "赌注" + tmp + "退回。\n";
                                    break;
                                case 2:
                                    break;
                }}}}else if(zzzh[i].type == 2){
                    if(sum == 2){
                        total += 3 * zzzh[i].wager;
                        switch (lang){
                            case 0:logText += "Bet " + tmp + " match, +" + (3 * zzzh[i].wager) + "!\n";
                                break;
                            case 1:logText += "赌注" + tmp + " 赢了，+" + (3 * zzzh[i].wager) + "!\n";
                                break;
                            case 2:
                                break;
                    }}else if(sum == 12){
                        total += 4 * zzzh[i].wager;
                        switch (lang){
                            case 0:logText += "Bet " + tmp + " match, +" + (4 * zzzh[i].wager) + "!\n";
                                break;
                            case 1:logText += "赌注" + tmp + " 赢了，+" + (4 * zzzh[i].wager) + "!\n";
                                break;
                            case 2:
                                break;
                    }}else if(sum == 3 || sum == 4 || sum == 9 || sum == 10 || sum == 11){
                        total += 2 * zzzh[i].wager;
                        switch (lang){
                            case 0:logText += "Bet " + tmp + " match, +" + (2 * zzzh[i].wager) + "!\n";
                                break;
                            case 1:logText += "赌注" + tmp + "赢了，+" + (2 * zzzh[i].wager) + "!\n";
                                break;
                            case 2:
                                break;
                    }}else{
                        switch (lang){
                            case 0:logText += "Bet " + tmp + " Lost.\n";
                                break;
                            case 1:logText += "赌注" + tmp + " 输了。\n";
                                break;
                            case 2:
                                break;
                }}}else{
                    var totaa = false;
                    for(var g = 0; g < zzzh[i].bet1.length; g++){
                        if(zzzh[i].bet1[g] == sum){
                            totaa = true;
                            total += zzzh[i].wager * zzzh[i].bet2;
                            switch (lang){
                                case 0:logText += "Bet " + tmp + " match, +" + (zzzh[i].wager * zzzh[i].bet2) + "!\n";
                                    break;
                                case 1:logText += "赌注" + tmp + "赢了，+" + (zzzh[i].wager * zzzh[i].bet2) + "!\n";
                                    break;
                                case 2:
                                    break;
                    }}}if(!totaa){
                        switch (lang){
                            case 0:logText += "Bet " + tmp + " Lost.\n";
                                break;
                            case 1:logText += "赌注" + tmp + " 输了。\n";
                                break;
                            case 2:
                                break;
            }}}}if(total > 10 * ssse){
                playS(4);
                switch (lang){
                    case 0:logText += "\nYou won " + (total - ssse) + " overall.";
                        break;
                    case 1:logText += "\n你总共赢了" + (total - ssse) + "。";
                        break;
                    case 2:
                        break;
            }}else if(total > ssse){
                playS(3);
                switch (lang){
                    case 0:logText += "\nYou won " + localstr((total - ssse)) + " overall.";
                        break;
                    case 1:logText += "\n你总共赢了" + localstr((total - ssse)) + "。";
                        break;
                    case 2:
                        break;
                }if(total >= ssse){
                    tempseven++;
                    submitFame(7, tempseven);
                    if(sirand){
                        randomstreak++;
                        unifyRand(0);
                        if(randomstreak > rst){
                            submitFame(13, randomstreak);
                            rst = randomstreak;
                    }}else if(ispvp){
                        pvpstreak++;
                        if(pvpstreak > pvpdata.st){
                            pvpdata.st = pvpstreak;
                        }unifyRand(1); 
                    }else{
                        setT("text_area44", ["Win streak: " + tempseven, "连胜：" + tempseven, ""]);
                    }if(tempseven > sevstreak){
                        sevstreak = tempseven;
                    }if(sirand == 1){
                        winrand++;
            }}}else if(total == ssse){
                playS(8);
                switch (lang){
                    case 0:logText += "\nYou struck even.";
                        break;
                    case 1:logText += "\n你回本了。";
                        break;
                    case 2:
                        break;
            }}else{
                tempseven = randomstreak = pvpstreak = 0;
                playS(12);
                switch (lang){
                    case 0:logText += "\nYou lost " + localstr((ssse - total)) + " overall.";
                        setText("text_area44", "Win streak: 0");
                        break;
                    case 1:logText += "\n你总共损失了" + localstr((ssse - total)) + "。";
                        setText("text_area44", "连胜：0");
                        break;
                    case 2:
                        break;
            }}if(ispvp){
                pvpdata.wa += total;
            }log("pb", zzzh.length + 1);
            log("pg", total);
            changeAccount(total);
            var ttt = Math.abs(total - ssse);
			exp += Math.round(ttt/5);
            setText("text_area47", accountstring);
            setText("text_area46", logText);
            fadeout("text_area48");
            update();
            stopTimedLoop(kz);
        }else{
            playS(13);
}})});
onEvent("button119","click",function(){addBet(0, 3, 3, 10, ["Hard 6", "硬6", ""])});
onEvent("button120","click",function(){addBet(0, 5, 5, 8, ["Hard 10", "硬10", ""])});
onEvent("button121","click",function(){addBet(0, 4, 4, 10, ["Hard 8", "硬8", ""])});
onEvent("button123","click",function(){addBet(0, 1, 2, 8, ["Ace Deuce", "双1", ""])});
onEvent("button124","click",function(){addBet(0, 2, 2, 8, ["Hard 4", "硬4", ""])});
onEvent("button129","click",function(){addBet(0, 6, 6, 31, ["Hard 12", "硬12", ""])});
onEvent("button130","click",function(){addBet(0, 1, 1, 31, ["Snake Eyes", "蛇眼", ""])});
onEvent("button122","click",function(){addBet(0, 5, 6, 16, ["Yo-Eleven", "五-六", ""])});
onEvent("button118","click",function(){addBet(3, [2, 3, 12], 8, 0, ["Any Crap", "任意Crap", ""])});
onEvent("button117","click",function(){addBet(3, [7], 5, 0, ["Seven Out", "七号出局", ""])});
onEvent("button113","click",function(){addBet(2, 0, 0, 0, ["2-12 Field", "2-12区域", ""])});
onEvent("button105","click",function(){addBet(1, [7, 11], 2, [2, 3, 12], ["PASS", "PASS", ""])});
onEvent("button106","click",function(){addBet(1, [2, 3, 12], 2, [7, 11], ["Don't Pass", "不PASS", ""])});
onEvent("button97","click",function(){addBet(1, [4], 3, [7], ["Easy 4", "软4", ""])});
onEvent("button99","click",function(){addBet(1, [5], 1.5, [7], ["Easy 5", "软5", ""])});
onEvent("button100","click",function(){addBet(1, [6], 1.2, [7], ["Easy 6", "软6", ""])});
onEvent("button101","click",function(){addBet(1, [8], 1.2, [7], ["Easy 8", "软8", ""])});
onEvent("button102","click",function(){addBet(1, [9], 1.5, [7], ["Easy 9", "软9", ""])});
onEvent("button103","click",function(){addBet(1, [10], 3, [7], ["Easy 10", "软10", ""])});
onEvent("button107","click",function(){addBet(1, [7], 1.5, [4], ["Lay 4", "平4", ""])});
onEvent("button108","click",function(){addBet(1, [7], 1.6, [5], ["Lay 5", "平5", ""])});
onEvent("button109","click",function(){addBet(1, [7], 1.8, [6], ["Lay 6", "平6", ""])});
onEvent("button110","click",function(){addBet(1, [7], 1.8, [8], ["Lay 8", "平8", ""])});
onEvent("button111","click",function(){addBet(1, [7], 1.6, [9], ["Lay 9", "平9", ""])});
onEvent("button112","click",function(){addBet(1, [7], 1.5, [10], ["Lay 10", "平10", ""])});
function addBet(type, bet1, bet2, odd, expe){
    if(zzzh.length < 10){
        var string;
        var objec = {};
        objec.type = type;
        objec.bet1 = bet1;
        objec.bet2 = bet2;
        objec.lose = odd;
        objec.wager = wager;
        zzzh.push(objec);
        playS(14);
        switch (lang){
            case 0:string = expe[0] + " " + localstr(wager) + "\n";
                break;
            case 1:string = expe[1] + " " + localstr(wager) + "\n";
                break;
            case 2:
                break;
        }betText = string.concat(betText);
        setText("text_area43", betText);
    }else{
        setT("text_area46", ["Bets full!\nRemove some bets", "赌注已满！\n移掉一些赌注", ""]);
        playS(2);
}}
onEvent("button136","click",function(){
    zzzh = [];
    betText = "";
    setText("text_area43", betText);
    setText("text_area46", "");
    playS(0);
});
onEvent("button137","click",function(){
    zzzh.pop();
    playS(0);
    var string = betText.split('\n');
    string.splice(0, 1);
    betText = string.join('\n');
    setText("text_area43", betText);
    setText("text_area46", "");
});
onEvent("button138","click",function(){doPayout(6, ["assets/craps.jpg", "assets/crapsc.jpg", ""])});
onEvent("button98","click",function(){
    if(!ftueflag[11]){
        doTutorial(11);
    }else{
        doEnter("blackjack", "text_area50", "text_area49", ["Wager: ", "赌注：", ""], wager, true);
}});
onEvent("temp","click",function(){
    setText("admin","onEvent(\"temp\", \"click\", function(){\n    \n});");
});
onEvent("button115","click",function(){doStart("blackjack")});
onEvent("button155","click",function(){add100("button157", "text_area49", ["Wager: ", "赌注：", ""], "button158", "button155")});
onEvent("button157","click",function(){min100("button155", "text_area49", ["Wager: ", "赌注：", ""], "button156", "button157")});
onEvent("button156","click",function(){add1000(["button157", "button158"], "text_area49", ["Wager: ", "赌注：", ""], "button156")});
onEvent("button158","click",function(){min1000(["button155", "button156"], "text_area49", ["Wager: ", "赌注：", ""], "button158")});
onEvent("button144","click",function(){
    if(account < wager){
        insC("text_area51");
        return;
    }if(sirand){
        if(randomtrig){
            doRand(0);
            return;
        }else{
            randomtrig = 1;
    }}if(ispvp){
        if(pvptrig){
            if(pvpdata.cr == pvpdata.r){
                locallastgame = false;
            }updPVPText();
            updatePlayerPVP();
            changeScreen("pvpe");
            return;
        }else{
            pvptrig = 1;
    }}eigbet++;
    pst++;
    kim = false;
    changeAccount(-wager);
    if(ispvp){
        pvpdata.la += wager;
    }log("jb", 1);
    log("js", wager);
    setText("text_area50", accountstring);
    reset();
    setTimeout(function(){dealPlayer()}, 200);
    setTimeout(function(){dealPlayer()}, 400);
    setTimeout(function(){dealHouse();
        update();}, 600);
    setTimeout(function(){dealHouse()}, 800);
});
function dealPlayer(){
    playS(13);
    for(var i = 0; i < playerCard.length; i++){
        if(playerCard[i] == 0){
            var random = RandomNumber(1, 13);
            playerCard[i] = random;
            setCard(false);
            if(i == 4){
                playerFull = true;
            }if(i == 1){
                kim = checknatual();
                if(!kim){
                    checkSum();
                }else{
                    results(0, ["Player Blackjack!", "玩家21点！", ""]);
                    nto++;
                    return;
            }}else{
                checkSum();
            }break;
}}}
function dealHouse(val){
    playS(13);
    for(var i = 0; i < dealerCard.length; i++){
        if(dealerCard[i] == 0){
            var random = RandomNumber(1, 13);
            dealerCard[i] = random;
            setCard(false);
            if(i == 4){
                dealerFull = true;
            }checkSum();
            break;
}}}
function checknatual(){
    var point = 0;
    if(playerCard[0] > 9){
        point += 10;
    }else if(playerCard[0] == 1){
        point += 11;
    }if(playerCard[1] > 9){
        point += 10;
    }else if(playerCard[1] == 1){
        point += 11;
    }if(point == 21){
        return true;
    }else{
        return false;
}}
function checkSum(){
    hideE(["button140", "button141", "button142"]);
    var p1, p2, d1, d2, pHasA, dHasA, nochange;
    p1 = p2 = d1 = d2 = 0;
    pHasA = dHasA = nochange = false;
    if(playerCard[1] == 0){
        nochange = true;
    }for(var i = 0; i < playerCard.length; i++){
        if(playerCard[i] != 0){
            if(playerCard[i] == 1){
                if(pHasA){
                    p1 += 1;
                    p2 += 1;
                }else{
                    pHasA = true;
                    p1 += 11;
                    p2 += 1;
            }}else if(playerCard[i] > 10){
                p1 += 10;
                p2 += 10;
            }else{
                p1 += playerCard[i];
                p2 += playerCard[i];
    }}}for(var j = 0; j < dealerCard.length; j++){
        if(dealerCard[j] != 0){
            if(dealerCard[j] == 1){
                if(dHasA){
                    d1 += 1;
                    d2 += 1;
                }else{
                    dHasA = true;
                    d1 += 11;
                    d2 += 1;
            }}else if(dealerCard[j] > 10){
                d1 += 10;
                d2 += 10;
            }else{
                d1 += dealerCard[j];
                d2 += dealerCard[j];
    }}}if(d1 > 21){
        if(d2 > 21){
            switch (lang){
                case 0:setText("text_area52", "Dealer sum: " + d2);
                    result(1, "Dealer busted!");
                    break;
                case 1:setText("text_area52", "庄家总和：" + d2);
                    result(1, "庄家爆掉！");
                    break;
                case 2:
                    break;
            }return;
        }else{
            d1 = d2;
    }}playerscore = p1;
    if(p1 > 21){
        if(p2 > 21){
            switch (lang){
                case 0:setText("text_area54", "Player sum: " + p2);
                    result(2, "Player busted!");
                    break;
                case 1:setText("text_area54", "玩家总和：" + p2);
                    result(2, "玩家爆掉！");
                    break;
                case 2:
                    break;
            }return;
        }else{
            p1 = p2;
            playerscore = p2;
    }}if(!otfuse){
        setT("text_area52", ["Dealer sum: ??", "庄家总和：??", ""]);
    }if(p1 == p2){
        setT("text_area54", ["Player sum: " + p1, "玩家总和：" + p1, ""]);
    }else{
        setT("text_area54", ["Player sum: " + p1 + " / " + p2, "玩家总和：" + p1 + " / " + p2, ""]);
    }if(playerFull){
        results(1, ["Player have 5 cards without busting!", "玩家五张牌且没有爆掉！", ""]);
        return;
    }if(dealerFull){
        results(2, ["Dealer have 5 cards without busting!", "庄家五张牌且没有爆掉！", ""]);
        return;
    }if(dPass && pPass){
        if(p1 < 22 && d1 < 22){
            if(p1 > d1){
                results(1, ["Your hand is bigger!", "你的牌大！", ""]);
                return;
            }else if(d1 > p1){
                results(2, ["Dealer hand is bigger!", "庄家牌大！", ""]);
                return;
            }else{
                results(3, ["Push", "平手", ""]);
                return;
    }}}if(nochange || kim){
        return;
    }if(gs < 4){
        showElement("button141");
        gs++;
    }else{
        hideElement("button141");
    }if(!pPass){
        if(!double){
            showElement("button140");
        }showElement("button142");
}}
function results(val1, val2){
    switch (lang){
        case 0:result(val1, val2[0]);
            break;
        case 1:result(val1, val2[1]);
            break;
        case 2:result(val1, val2[2]);
            break;
}}
function result(val1, val2){
    if(!otfuse){
        otfuse = true;
        var d1 = 0;
        var d2 = 0;
        var dHasA = false;
        for(var j = 0; j < dealerCard.length; j++){
            if(dealerCard[j] != 0){
                if(dealerCard[j] == 1){
                    if(dHasA){
                        d1 += 1;
                        d2 += 1;
                    }else{
                        dHasA = true;
                        d1 += 11;
                        d2 += 1;
                }}else if(dealerCard[j] == 11 || dealerCard[j] == 12 || dealerCard[j] == 13){
                    d1 += 10;
                    d2 += 10;
                }else{
                    d1 += dealerCard[j];
                    d2 += dealerCard[j];
        }}}if(d1 == d2){
            setT("text_area52", ["Dealer sum: " + d1, "庄家总和：" + d1, ""]);
        }else{
            setT("text_area52", ["Dealer sum: " + d1 + " / " + d2, "庄家总和：" + d1 + " / " + d2, ""]);
        }setCard(true);
        var clog = "";
        fadeIn(["button155", "button156", "button157", "button158", "text_area49", "button115", "button144","button159","text_area50","button160"]);
        if(val1 < 2){
            tempeight++;
            submitFame(8, tempeight);
            if(sirand){
                randomstreak++;
                unifyRand(0);
                if(randomstreak > rst){
                    submitFame(13, randomstreak);
                    rst = randomstreak;
            }}else if(ispvp){
                pvpstreak++;
                if(pvpstreak > pvpdata.st){
                    pvpdata.st = pvpstreak;
                }unifyRand(1); 
            }else{
                setT("text_area69", ["Win streak: " + tempeight, "连胜：" + tempeight, ""]);
            }if(tempeight > eigstreak){
                eigstreak = tempeight;
            }if(sirand == 1){
                winrand++;
            }if(double){
                eigdouble++;
                switch (lang){
                    case 0:clog += "You won! +" + localstr(wager * 4) + "\n" + val2;
                        break;
                    case 1:clog += "你赢了！+" + localstr(wager * 4) + "\n" + val2;
                        break;
                    case 2:
                        break;
                }changeAccount(wager*4);
                if(ispvp){
                    pvpdata.wa += wager*4;
                }playS(4);
                log("jp", wager * 4);
                update();
            }else{
                if(val1 == 0){
                    switch (lang){
                        case 0:clog += "You won! +" + localstr(wager * 2.5) + "\n" + val2;
                            break;
                        case 1:clog += "你赢了！+" + localstr(wager * 2.5) + "\n" + val2;
                            break;
                        case 2:
                            break;
                    }changeAccount(wager*2.5);
                    if(ispvp){
                        pvpdata.wa += wager*2.5;
                    }playS(4);
                    log("jp", wager * 2.5);
                    update();
                }else{
                    switch (lang){
                        case 0:clog += "You won! +" + localstr(wager * 2) + "\n" + val2;
                            break;
                        case 1:clog += "你赢了！+" + localstr(wager * 2) + "\n" + val2;
                            break;
                        case 2:
                            break;
                    }changeAccount(wager*2);
                    if(ispvp){
                        pvpdata.wa += wager*2;
                    }playS(3);
                    log("jp", wager * 2);
                    update();
            }}setText("text_area50", accountstring);
            setText("text_area51", clog);
        }else if(val1 == 2){
            tempeight = randomstreak = pvpstreak = 0;
            setT("text_area69", ["Win streak: 0", "连胜：0", ""]);
            setT("text_area51", ["Better luck next time!\n" + val2, "下次好运！\n" + val2, ""]);
            playS(12);
            update();
        }else{
            playS(8);
            var sum = wager;
            if(double){
                sum *= 2;
            }changeAccount(sum);
            log("jp", sum);
            update();
            setText("text_area50", accountstring);
            setText("text_area51", val2 + " +" + localstr(sum));
}}}
function reset(){
    playerFull = dealerFull = pPass = dPass = gs = double = otfuse = false;
    setText("text_area51", "");
    hideE(["button155", "button156", "button157", "button158", "text_area49", "button115", "button144"]);
    for(var i = 0; i < dealerCard.length; i++){
        dealerCard[i] = 0;
    }for(var j = 0; j < playerCard.length; j++){
        playerCard[j] = 0;
}}
function setCard(val){
    for(var i = 0; i < dealerCard.length; i++){
        if(dealerCard[i] == 0){
            hideElement("dealer" + i);
        }else{
            showElement("dealer" + i);
            if(!val && dealerCard[i + 1] == 0){
                setText("dealer" + i, "??");
            }else{
                if(dealerCard[i] == 1){
                    setText("dealer" + i, "A");
                }else if(dealerCard[i] == 11){
                    setText("dealer" + i, "J");
                }else if(dealerCard[i] == 12){
                    setText("dealer" + i, "Q");
                }else if(dealerCard[i] == 13){
                    setText("dealer" + i, "K");
                }else{
                    setText("dealer" + i, dealerCard[i]);
    }}}}for(var j = 0; j < playerCard.length; j++){
        if(playerCard[j] == 0){
            hideElement("player" + j);
        }else{
            showElement("player" + j);
            if(playerCard[j] == 1){
                setText("player" + j, "A");
            }else if(playerCard[j] == 11){
                setText("player" + j, "J");
            }else if(playerCard[j] == 12){
                setText("player" + j, "Q");
            }else if(playerCard[j] == 13){
                setText("player" + j, "K");
            }else{
                setText("player" + j, playerCard[j]);
}}}}
onEvent("button140","click",function(){
    hideE(["button140", "button141", "button142"]);
    dealPlayer();
    checkSum();
});
onEvent("button141","click",function(){
    hideE(["button140", "button141", "button142"]);
    changeAccount(-wager);
    log("js", wager);
    setText("text_area50", accountstring);
    double = true;
    dealPlayer();
    checkSum();
});
onEvent("button142","click",function(){
    hideE(["button140", "button141", "button142"]);
    pPass = true;
    doDealer();
});
function doDealer(){
    var d1 = 0;
    var d2 = 0;
    var dHasA = false;
    for(var j = 0; j < dealerCard.length; j++){
        if(dealerCard[j] != 0){
            if(dealerCard[j] == 1){
                if(dHasA){
                    d1 += 1;
                    d2 += 1;
                }else{
                    dHasA = true;
                    d1 += 11;
                    d2 += 1;
            }}else if(dealerCard[j] == 11 || dealerCard[j] == 12 || dealerCard[j] == 13){
                d1 += 10;
                d2 += 10;
            }else{
                d1 += dealerCard[j];
                d2 += dealerCard[j];
    }}}var willSkip = (d1 > playerscore && d1 < 22) || d2 > playerscore;
    var isSmall = d1 < 17 || d2 < 17;
    if(isSmall && !dealerFull && !willSkip){
        dealHouse();
        setTimeout(doDealer, 200);
    }else{
        dPass = true;
        checkSum();
}}
onEvent("button160","click",function(){doPayout(7, ["assets/bj.jpg", "assets/bjc.jpg", ""])});
onEvent("button114","click",function(){
    sirand = 1;
    setRandom();
    doRand(0);
});
function unifyRand(val){
    if(val == 0){
        switch(lang){
            case 0: setTex(["text_area69","text_area44","wheelstreak","text_area68","text_area68","text_area11","text_area67","text_area8","text_area65"], "Win streak: " + randomstreak);
            break;
            case 1:setTex(["text_area69","text_area44","wheelstreak","text_area68","text_area68","text_area11","text_area67","text_area8","text_area65"], "连胜：" + randomstreak);
            break;
            case 2:
            break;
    }}else{
        switch(lang){
            case 0: setTex(["text_area69","text_area44","wheelstreak","text_area68","text_area68","text_area11","text_area67","text_area8","text_area65"], "Win streak: " + pvpstreak);
            break;
            case 1:setTex(["text_area69","text_area44","wheelstreak","text_area68","text_area68","text_area11","text_area67","text_area8","text_area65"], "连胜：" + pvpstreak);
            break;
            case 2:
            break;
}}}
function doRand(val){
    var rand = 0;
    if(!val){
        rand = RandomNumber(1, 9);
        randomtrig = 0;
        wtbf = 0;
        playS(9);
    }else{
        pvptrig = 0;
        rand = val;
        wtbf = 1;
    }unifyRand(val);
     if(rand == 1){
        doEnter("screen1", "account", "text_area3", ["Wager: ", "赌注：", ""], wager, false);
    }else if(rand == 2){
        doEnter("screen3", "text_area6", "text_area8", ["Chip size: ", "筹码大小：", ""], wager, false);
    }else if(rand == 3){
        doEnter("keno", "text_area12", "text_area11", ["Wager: ", "赌注：", ""], wager, false);
    }else if(rand == 4){
        doEnter("hbet", "text_area23", "text_area24", ["Bet: ", "赌注：", ""], wager, false);
    }else if(rand == 5){
        doEnter("sett", "text_area34", "button37", ["Buy at ", "价格：", ""], wager, false);
    }else if(rand == 6){
        doEnter("screen5", "text_area29", "text_area37", ["Wager: ", "赌注：", ""], wager, false);
    }else if(rand == 7){
        doEnter("crap", "text_area47", "text_area44", ["Chip size: ", "筹码大小：", ""], wager, false);
    }else if(rand == 8){
        doEnter("blackjack", "text_area50", "text_area49", ["Wager: ", "赌注：", ""], wager, false);
    }else if(rand == 9){
        doEnter("poker", "pokeraccount", "pokerwager", ["Wager: ", "赌注：", ""], wager, false);
}}
function log(val, num){
    var item = {};
    item.val = val;
    item.num = num;
    if(val == "rc"){
        logqueque.push(item);
    }else{
        logqueque.unshift(item);
}}
setInterval(function(){
    queque();
    dodequeue();
}, 1200);
function dodequeue(){
    if(dynqueque.length > 0 && !occupado){
        var gap = 0;
        setT("syna",[dynqueque[0][0],dynqueque[0][1],dynqueque[0][2]]);
        dynqueque.shift();
        occupado = true;
        dode(gap);
}}
function queque(){
    if(logqueque.length > 0){
        if(logqueque[0].val == "rc"){
            var numone = 0.0;
            var numtwo = 0;
            var lis = [];
            for(var k = 0; k < logqueque.length; k++){
                if(logqueque[k].val == "rc"){
                    numone += logqueque[k].num;
                    numtwo++;
                    lis.unshift(k);
            }}for(var j = 0; j < lis.length; j++){
                logqueque.splice(lis[j],1);
            }logrc(numone, numtwo);
        }else{
            exelog(logqueque[0].val, logqueque[0].num);
            logqueque.shift();
}}}
function logrc(num, numt){
    getKeyValue("rc", function(a){
        var b = parseFloat(a.substring(0, a.indexOf("|")));
        var c = parseInt(a.substring(a.indexOf("|") + 1, a.length));
        b += num;
        c += numt;
        b += "|";
        b += c;
        setKeyValue("rc", b, function(){});
});}
function exelog(val, num){
    if(num % 10 == 0 && !logexc.includes(val)){
        var expa = Math.round(num / 10);
		exp += expa;
        if(leaguedata.t == 1){
            uploadleague(expa);
    }}if(val == "tt"){
        playTime += num;
    }if(coo || lbh > 0){
        return;
    }getKeyValue(val, function(value){
        setKeyValue(val, value + num, function(){});
    });if(currentid != -1 && userID != "Guest"){
        processloc(val, num);
        if(taskMatch(val)){
            uploadtask(num);
        }if(leagueMatch(val)){
            uploadleague(num);
}}}
function leagueMatch(val){
    if(leaguetasks[leaguedata.t].hit == val){
        return true;
    }else{
        return false;
}}
function taskMatch(val){
    if(taskmaster[task.num].hit.indexOf(val) >= 0){
        return true;
    }else{
        return false;
}}
function startTime(){
    time = GetTime();
    trigg = true;
}
function finishTime(){
    if(trigg){
        trigg = false;
        var etime = GetTime();
        etime = etime / 1000;
        time = time / 1000;
        log("tt", Math.round(etime - time));
}}
function getGlobal(value){
    setT("text_area4", ["Loading", "加载中", ""]);
    glog = 1;
    statS = 0;
    hideElement("image20");
    getKeyValue("rc", function(val){
        rngd = val;
        doS(value);
    });getKeyValue("tt", function(val){
        tt = val;
        doS(value);
    });getKeyValue("ss", function(val){
        ss = val;
        doS(value);
    });getKeyValue("sp", function(val){
        sp = val;
        doS(value);
    });getKeyValue("sj", function(val){
        sj = val;
        doS(value);
    });getKeyValue("sa", function(val){
        sa = val;
        doS(value);
    });getKeyValue("rs", function(val){
        rs = val;
        doS(value);
    });getKeyValue("rp", function(val){
        rp = val;
        doS(value);
    });getKeyValue("rp", function(val){
        rb = val;
        doS(value);
    });getKeyValue("ks", function(val){
        ks = val;
        doS(value);
    });getKeyValue("kp", function(val){
        kp = val;
        doS(value);
    });getKeyValue("tk", function(val){
        tk = val;
        doS(value);
    });getKeyValue("kj", function(val){
        kj = val;
        doS(value);
    });getKeyValue("hs", function(val){
        hs = val;
        doS(value);
    });getKeyValue("hp", function(val){
        hp = val;
        doS(value);
    });getKeyValue("tr", function(val){
        tr = val;
        doS(value);
    });getKeyValue("ti", function(val){
        triv = val;
        doS(value);
    });getKeyValue("cs", function(val){
        cs = val;
        doS(value);
    });getKeyValue("cg", function(val){
        cg = val;
        doS(value);
    });getKeyValue("tc", function(val){
        tc = val;
        doS(value);
    });getKeyValue("cj", function(val){
        cj = val;
        doS(value);
    });getKeyValue("ac", function(val){
        ac = val;
        doS(value);
    });getKeyValue("ww", function(val){
        ww = val;
        doS(value);
    });getKeyValue("ws", function(val){
        ws = val;
        doS(value);
    });getKeyValue("wj", function(val){
        wj = val;
        doS(value);
    });getKeyValue("wt", function(val){
        wt = val;
        doS(value);
    });getKeyValue("pb", function(val){
        pb = val;
        doS(value);
    });getKeyValue("ps", function(val){
        ps = val;
        doS(value);
    });getKeyValue("pg", function(val){
        pg = val;
        doS(value);
    });getKeyValue("pr", function(val){
        pr = val;
        doS(value);
    });getKeyValue("jb", function(val){
        jb = val;
        doS(value);
    });getKeyValue("js", function(val){
        js = val;
        doS(value);
    });getKeyValue("jp", function(val){
        jp = val;
        doS(value);
    });getKeyValue("za", function(val){
        za = val;
        doS(value);
    });getKeyValue("zb", function(val){
        zb = val;
        doS(value);
    });getKeyValue("zc", function(val){
        zc = val;
        doS(value);
    });getKeyValue("zd", function(val){
        zd = val;
        doS(value);
    });getKeyValue("ze", function(val){
        ze = val;
        doS(value);
    });getKeyValue("zf", function(val){
        zf = val;
        doS(value);
    });getKeyValue("zg", function(val){
        zg = val;
        doS(value);
    });getKeyValue("zh", function(val){
        zh = val;
        doS(value);
    });getKeyValue("zi", function(val){
        zi = val;
        doS(value);
    });getKeyValue("zj", function(val){
        zj = val;
        doS(value);
    });getKeyValue("zm", function(val){
        zm = val;
        doS(value);
    });getKeyValue("zk", function(val){
        zk = val;
        doS(value);
    });getKeyValue("zl", function(val){
        zl = val;
        doS(value);
    });getKeyValue("zn", function(val){
        zn = val;
        doS(value);
    });getKeyValue("zls", function(val){
        zls = val;
        doS(value);
    });getKeyValue("zlw", function(val){
        zlw = val;
        doS(value);
    });getKeyValue("zlj", function(val){
        zlj = val;
        doS(value);
    });getKeyValue("zom", function(val){
        zom = val;
        doS(value);
    });getKeyValue("zsi", function(val){
        zsi = val;
        doS(value);
    });getKeyValue("swp", function(val){
        swp = val;
        doS(value);
    });getKeyValue("wxa", function(val){
        xaa = val;
        doS(value);
    });getKeyValue("wxb", function(val){
        xab = val;
        doS(value);
    });getKeyValue("wxc", function(val){
        xac = val;
        doS(value);
    });getKeyValue("wya", function(val){
        yaa = val;
        doS(value);
    });getKeyValue("wyb", function(val){
        yab = val;
        doS(value);
    });getKeyValue("wyc", function(val){
        yac = val;
        doS(value);
    });getKeyValue("pks", function(val){
        pks = val;
        doS(value);
    });getKeyValue("pkw", function(val){
        pkw = val;
        doS(value);
    });getKeyValue("pkr", function(val){
        pkr = val;
        doS(value);
    });getKeyValue("pkj", function(val){
        pkj = val;
        doS(value);
    });getKeyValue("zya", function(val){
        zya = val;
        doS(value);
    });getKeyValue("zyb", function(val){
        zyb = val;
        doS(value);
    });getKeyValue("zyc", function(val){
        zyc = val;
        doS(value);
    });getKeyValue("gif", function(val){
        giff = val;
        doS(value);
    });getKeyValue("ssf", function(val){
        gitt = val;
        doS(value);
    });getKeyValue("vpp", function(val){
        vpp = val;
        doS(value);
    });getKeyValue("dmz", function(val){
        zmd = val;
        doS(value);
})}
function doS(val){
    statS++;
    if(statS == 70){
        glog = 0;
        setTimeout(function(){
            fadein("image20");
        }, 5000);
        if(val && inmisc == 0){
            setStat();
            playS(8);
}}}
function setStat(){
    var rc = rngd.substring(0, rngd.indexOf("|"));
    var rd = rngd.substring(rngd.indexOf("|") + 1, rngd.length);
    rc = rc/rd;
    if(glog == 0){
        var ts = ss + rs + ks + hs + cs + ws + ps + js + pks;
        var tp = sp + rp + kp + hp + cg + ww + pg + jp + pkw;
        setT("text_area4", ["App access time: "+ac+"\nGlobal spending: "+ts+"\nGlobal payout: "+tp+"\nTotal play time: "+Math.floor(tt / 3600)+" H "+Math.floor((tt / 60) % 60)+" M "+tt % 60+" S\n\nSlots spin time: "+sa+"\nSlots spending: "+ss+"\nSlots payout: "+sp+"\nSlot Jackpot: "+sj+"\n\nRoulette bets: "+rb+"\nRoulette spending: "+rs+"\nRoulette payout: "+rp+"\n\nTotal kenoes: "+tk+"\nKeno spending: "+ks+"\nKeno payout: "+kp+"\nKeno jackpot: "+kj+"\n\nTotal horse race: "+tr+"\nHorse spending: "+hs+"\nHorse payout: "+hp+"\n\nTotal scratch card: "+tc+"\nCard spending: "+cs+"\nCard payout: "+cg+"\nCard super jackpot: "+cj+"\n\nTotal wheel spin: "+wt+"\nWheel spending: "+ws+"\nWheel payout: "+ww+"\nWheel jackpot: "+wj+"\n\nCraps rolls: "+pr+"\nCraps bets: "+pb+"\nCraps spending: "+ps+"\nCraps payout: "+pg+"\n\nBlackjack bets: "+jb+"\nBlackjack spending: "+js+"\nBlackjack payout: "+jp+"\n\nVideo Poker rounds: "+pkr+"\nVideo Poker spending: "+pks+"\nVideo Poker payout:"+pkw+"\nVideo Poker jackpot: "+pkj+"\n\nAquired 🎟️: "+za+"\nSpent 🎟️: "+zb+"\n\n🎟️🎡 spending: "+zc+"\n🎟️🎡 spinned: "+zd+"\n🎟️🎡 payout: "+ze+"\n🎟️🎡 jackpot: "+zf+"\n\n🎟️🎰 spending: "+zg+"\n🎟️🎰 spin: "+zh+"\n🎟️🎰 payout: "+zi+"\n🎟️🎰 jackpot: "+zj+"\n\n🎟️🧧 spending: "+zk+"\n🎟️🧧 opened: "+zm+"\n🎟️🧧 payout: "+zl+"\n🎟️🧧 jackpot: "+zn +"\n\n🎟️💰 Scratched: "+zya+"\n🎟️💰 spending: "+zls+"\n🎟️💰 payout: "+zlw+"\n🎟️💰 jackpot: "+zlj+"\n\n🎟️🃏 Scratched: "+zyb+"\n🎟️🃏 spending: "+xaa+"\n🎟️🃏 payout: "+xab+"\n🎟️🃏 jackpot: "+xac+"\n\n🎟️💻 Played: "+zyc+"\n🎟️💻 spending: "+yaa+"\n🎟️💻 payout: "+yab+"\n🎟️💻 jackpot: "+yac+"\n\nTotal PVP Matches: "+zom+"\nTotal PVP wins: "+zsi+"\nTotal Sweepstakes wager: "+swp+"\nTotal trivia attempt: "+triv+"\n\nTotal drinks gifted："+giff+"\nDrinks service fee: "+gitt+"\nDays of 👑 acquired: "+vpp+"\nCompleted daily missions: "+zmd+"\n\nRandom numbers generated: "+rd+"\nRandom numbers mean: "+rc, "应用访问次数："+ac+"\n全球花销："+ts+"\n全球赢钱："+tp+"\n总游玩时间："+Math.floor(tt / 3600)+" H "+Math.floor((tt / 60) % 60)+" M "+tt % 60+" S\n\n老虎机游玩次数："+sa+"\n老虎机花销："+ss+"\n老虎机赢钱："+sp+"\n虎机头奖："+sj+" 次\n\n轮盘赌赌注："+rb+"\n轮盘赌花销："+rs+"\n轮盘赌赢钱："+rp+"\n\n柯诺游玩次数："+tk+"\n柯诺花销："+ks+"\n柯诺赢钱："+kp+"\n柯诺头奖："+kj+" 次\n\n马赛次数："+tr+"\n赌马花销："+hs+"\n赌马赢钱："+hp+"\n\n总刮刮卡："+tc+"\n刮刮卡花销："+cs+"\n刮刮卡赢钱："+cg+"\n刮刮卡超级头奖："+cj+" 次\n\n幸运轮盘旋转："+wt+"\n幸运轮盘花销："+ws+"\n幸运轮盘赢钱："+ww+"\n幸运轮盘头奖："+wj+"\n\n双骰子投掷："+pr+"\n双骰子下注："+pb+"\n双骰子花销："+ps+"\n双骰子赢钱："+pg+"\n\n21点下注："+jb+"\n21点花销："+js+"\n21点赢钱："+jp+"\n\n经典扑克轮数："+pkr+"\n经典扑克花销："+pks+"\n经典扑克赢钱："+pkw+"\n经典扑克头奖："+pkj+"\n\n获得🎟️："+za+"\n🎟️花销："+zb+"\n\n🎟️🎡花销："+zc+"\n🎟️🎡次数："+zd+"\n🎟️🎡赢钱："+ze+"\n🎟️🎡头奖："+zf+"\n\n🎟️🎰花销："+zg+"\n🎟️🎰次数："+zh+"\n🎟️🎰赢钱："+zi+"\n🎟️🎰头奖："+zj+"\n\n🎟️🧧花销: "+zk+"\n🎟️🧧开启："+zm+"\n🎟️🧧赢钱："+zl+"\n🎟️🧧头奖："+zn +"\n\n🎟️💰 轮数："+zya+"\n🎟️💰花销："+zls+"\n🎟️💰赢钱："+zlw+"\n🎟️💰头奖"+zlj+"\n\n🎟️🃏 轮数："+zyb+"\n🎟️🃏花销："+xaa+"\n🎟️🃏赢钱："+xab+"\n🎟️🃏头奖"+xac+"\n\n🎟️💻 轮数："+zyc+"\n🎟️💻花销："+yaa+"\n🎟️💻赢钱："+yab+"\n🎟️💻头奖："+yac+"\n\nPVP模式总局数："+zom+"\nPVP模式总获胜次数："+zsi+"\n总抽奖投注: "+swp+"\n小知识测验总尝试次数: "+triv+"\n\n总饮品赠送次数："+giff+"\n饮品服务费："+gitt+"\n总👑购买天数："+vpp+"\n完成的每日任务: "+zmd+"\n\n产生的随机数: "+rd+"\n随机数平均值: "+rc, ""]);
    }else{
        setT("text_area4", ["Loading", "加载中", ""]);
}}
onEvent("image20","click",function(){getGlobal(true)});
onEvent("button55","click",function(){
    doStat(true);
    inmisc = 1;
    setPosition("image20", 888, 385, 40, 40);
    setText("ee", "");
    setT("text_area4", ["Major updates have come to a stop...\nOnly bug fixes or translations from now.\n\nVersion 3.3 (7/21/22)\nLast game - Video Poker - added\nNew challenges and PVP UI\nLast two premium themes added\nOptimizations, bug fixes, and improvements\n\nVersion 3.2 (7/7/22)\nLeague and more chips\nIntro screen and PVP ELO score\nBug fixes and tweaks\n\nVersion 3.1 (5/3/22)\nPremium avatars & themes\nPVP & daily mission UX\nCo-op mode icons, tutorials\nBug fixes and tweaks\n\nVersion 3.0 (1/14/22)\nPVP Arena and Chat module\n3 ticket games, 6 leaderboards\nDaily Mission, Random Mode\nJackpot scroll text and more\nTweaks, improvements, and fixes\n\nVersion 2.5 (8/18/21)\nTaskmaster and 🎟️🧧 in ATM\nMore avatars\nID Finder and behind-the-scene features\nVarious bug fixes and enhancements\n\nVersion 2.4 (7/29/21)\nAvatar system\nAcetrail individual leaderboard\nChip collection unlock requirements\nThis screen's continuous animation\nVarious functions and fixes\n\nVersion 2.3 (7/15/21)\nTicket system and two exclusive games\nSweepstakes and Log-in Lotto in ATM\nRandom fun fact on rolling text\nBug fixes and tweaks\n\nVersion 2.2 (6/18/21)\nMore themes, festivities, and secrets\nMission token system\nCasino Cinema\nBug fixes and tweaks\n\nVersion 2.1 (6/7/21)\nLocalization support\nUpgraded leaderboard and Credits\nTheme change via logo click\nVarious tweaks and fixes\n\nVersion 2.0 (4/25/21)\nCloud save\nAchievements and collectables\nEXP and leaderboard\nBest streak hall of fame\nUpgraded feedback and reply\nCDK and AD module in ATM\nEvents and a lot more!\n\nVersion 1.4 (4/5/21)\nNew game - Simplified Blackjack - added\nRandom game mode added\nFeedback added\n\nVersion 1.3 (3/28/21)\nNew game - Simplified Craps - added\nATM Machine added\nBalance tweak for the wheel\n\nVersion 1.2 (3/20/21)\nNew game - Big Six Wheel - added\nMisc page added\nBug fix, balance tweak, UI improvements\n\nVersion 1.1 (3/16/21)\nNew game - Scratch Card - added\nQR Code page and easter egg\nUI/UX redesign, bug fix, balance tweak\n\nVersion 1.0 (3/12/21)\nReleased!\nGlobal stat integration\nBug fix, balance tweak\n\nBeta (3/10/21)\nBasic UI\nSound system added\nBugs and balance fixes\n\nAlpha (3/8/21)\n4 base game completed\n\nProject start (3/7/21)", "重大更新已经停止...\n今后只有bug修复和翻译了。\n\nV3.3（7/21/22）\n最后一个游戏-经典扑克-已添加\n最后两个会员主题\n更多挑战和PVP UI优化\n优化，bug修复，诸多改良\n\nV3.2 (7/7/22)\n排位赛和更多筹码\n入场动画和PVP ELO分数\n改进和修复\n\nV3.1 (5/3/22)\n会员头像和主题\nPVP & 每日任务UX\n合作模式标志，教程\n改进和修复\n\nV3.0 (1/14/22)\nPVP竞技场 和聊天功能\n3个票券游戏，6个排行榜\n每日任务和随机模式\n头奖流动字幅和更多\n修改，改进，和修复\n\nV2.5 (8/18/21)\nATM里的任务达人和🎟️🧧\n更多头像\nID找寻和很多幕后功能\n修复BUG，功能增强\n\nV2.4 (7/29/21)\n头像系统\nAcetrail独立排行榜\n筹码收藏解锁条件\n此页的循环动画\n诸多功能和修复\n\nV2.3 (7/15/21)\n票券系统和两个独占游戏\nATM的抽奖和登录彩券\n首页字幕随机有趣知识\n错误修复和调整\n\nV2.2 (6/18/21)\n更多主题，节日，和秘密\n任务代币系统\n赌场影院\n错误修复和调整\n\nV2.1（6/7/2021）\n本地化支持\n排行榜改良和制作者名单\n点击logo切换风格\n各种调试和修复\n\nV2.0 (4/25/21)\n云端存档\n成就和收藏品\nEXP和排行榜\n全球高分荣誉榜\n新的反馈和回复功能\nATM页的兑换码和广告模块\n限时活动和更多！\n\nV1.4 (4/5/21)\n新游戏 - 简化21点-已添加\n随机游戏模式已添加\n反馈已添加\n\nV1.3 (3/28/21)\n新游戏 - 简化双骰子-已添加\nATM机已添加\n轮盘概率调整\n\nV1.2 (3/20/21)\n新游戏 - 幸运轮盘-已添加\n添加了其他页面\nBug 修正， 平衡调整, 用户界面改进\n\nV1.1 (3/16/21)\n新游戏 - 刮刮卡 - 已添加\n二维码页面和彩蛋\nUI/UX 重设计，错误修复，平衡调整\n\n版本 1.0 (3/12/21)\n程序发布！\n全局统计功能\nBug 修复， 平衡调整\n\nBeta (3/10/21)\n基本用户界面\n声音系统添加\nBug 和平衡修正\n\nAlpha (3/8/21)\n基础游戏已完成\n\n项目开始(3/7/21)", ""]);
    if(bgm && estt == 1){
        setT("ee", ["Yep that logo is a cock-n-ball reference.", "没错，那个logo...算了，去看英文解释吧", ""]);
        wam = 1;
        if(war == 1 && wap == 1 && wac == 1 && waf == 1 && h26 != 2){
            h26 = 1;
            showElement("image35");
}}});
function sse4(){
    if(!sseflag){
        showElement("image35");
        dodynamic(["A Challenge is completed!","你完成了一个挑战！",""]);
        sseflag = true;
}}
function checkach(){
    if(onespin > 399 && !h1){
        sse4();
    }else if(onejack > 0 && !h2){
        sse4();
    }else if(onestreak > 5 && h3 == 0){
        sse4();
    }else if(twospin > 299 && h4 == 0){
        sse4();
    }else if(twoguess > 5 && h5 == 0){
        sse4();
    }else if(twostreak > 4 && h6 == 0){
        sse4();
    }else if(thrtry > 199 && h7 == 0){
        sse4();
    }else if(thrguess > 9 && h8 == 0){
        sse4();
    }else if(ttreak > 4 && h9 == 0){
        sse4();
    }else if(fourbet > 299 && h10 == 0){
        sse4();
    }else if(fourspec > 0 && h11 == 0){
        sse4();
    }else if(fourstreak > 4 && h12 == 0){
        sse4();
    }else if(fivescrat > 299 && h13 == 0){
        sse4();
    }else if(fivemega > 0 && h14 == 0){
        sse4();
    }else if(fivestreak > 3 && h15 == 0){
        sse4();
    }else if(sixspin > 399 && h16 == 0){
        sse4();
    }else if(sixgold > 7 && h17 == 0){
        sse4();
    }else if(sixstreak > 4 && h18 == 0){
        sse4();
    }else if(sevthrow > 299 && h19 == 0){
        sse4();
    }else if(sevspec > 11 && h20 == 0){
        sse4();
    }else if(sevstreak > 7 && h21 == 0){
        sse4();
    }else if(eigbet > 299 && h22 == 0){
        sse4();
    }else if(eigdouble > 19 && h23 == 0){
        sse4();
    }else if(eigstreak > 5 && h24 == 0){
        sse4();
    }else if(login > 99 && h25 == 0){
        sse4();
    }else if(playTime > 21599 && h27 == 0){
        sse4();
    }else if(winrand > 199 && h28 == 0){
        sse4();
    }else if(timeAward > 29 && h29 == 0){
        sse4();
    }else if(account > 7999999 && !h30){
        sse4();
    }else if(tgp > 1 && !m31){
        sse4();
    }else if(twj > 2 && !m32){
        sse4();
    }else if(tsj > 0 && !m33){
        sse4();
    }else if(ssw > 0 && !m34){
        sse4();
    }else if(ltd > 1 && !m35){
        sse4();
    }else if(adv > 19 && !m36){
        sse4();
    }else if(chm > 79 && !m37){
        sse4();
    }else if(olw > 29 && !m38){
        sse4();
    }else if(dmeee > 59 && !m39){
        sse4();
    }else if(wxc > 0 && !m41){
        sse4();
    }else if(wyc > 0 && !m40){
        sse4();
    }else if(wzc > 0 && !m42){
        sse4();
    }else if(wzc > 0 && !m42){
        sse4();
    }else if(pka > 299 && !m43){
        sse4();
    }else if(pkb > 0 && !m44){
        sse4();
    }else if(pkc > 4 && !m45){
        sse4();
    }else if(dms > 20 && !m46){
        sse4();
    }else if(ftueflag.indexOf(0) == -1 && !m47){
        sse4();
    }else if(vit - getTime() > 3.156e+10 && !m48){
        sse4();
}}
onEvent("image11","click",function(){enter("screen2")});
onEvent("image9","click",function(){enter("hbet")});
onEvent("image6","click",function(){enter("keno")});
onEvent("image7","click",function(){enter("screen1")});
onEvent("image8","click",function(){enter("screen3")});
onEvent("image25","click",function(){enter("screen5")});
onEvent("image13","click",function(){enter("sett")});
onEvent("button139","click",function(){enter("crap")});
onEvent("button159","click",function(){enter("blackjack")});
onEvent("pokercred","click",function(){enter("poker")});
onEvent("button167","click",function(){
    if(!ftueflag[1]){
        doTutorial(1);
    }else{
        doAch();
}});
function doAch(){
    switch (lang){
        case 0:setText("text_area60", "Select a Chapter");
            regText = "Select a Chapter\n\n";
            break;
        case 1:setText("text_area60", "选择一个章节");
            regText = "选择一个章节\n\n";
            break;
        case 2:
            break;
    }setimage(["image28", "image32", "image33"], "");
    chap = tttim = sseflag = 0;
    active = [0, 0, 0];
    setText("text_area132", mtt);
    playS(11);
    if(eloscore > 1567){
        resv1 = true;
    }if(specialbadgeone){
        sIurl("special1", "assets/spe1.png");
    }else{
        sIurl("special1", "assets/q.png");
    }if(resv1){
        sIurl("xx", "assets/xxa.png");
    }else{
        sIurl("xx", "assets/q.png");
    }if(resv2){
        sIurl("yy", "assets/xxb.png");
    }else{
        sIurl("yy", "assets/q.png")
    }if(specialbadgetwo){
        sIurl("special2", "assets/spe2.png");
    }else{
        sIurl("special2", "assets/q.png");
    }if(specialbadge3){
        sIurl("special3", "assets/spe3.png");
    }else{
        sIurl("special3", "assets/q.png");
    }if(specialbadge4){
        sIurl("special4", "assets/spe4.png");
    }else{
        sIurl("special4", "assets/q.png");
    }if(onespin > 399){
        if(h1 != 2){
            h1 = 2;
            doIncrement("Slots 1", "老虎机1", "");
        }else{
            tttim++;
    }}else{
        h1 = 0;
    }if(onejack > 0){
        if(h2 != 2){
            h2 = 2;
            doIncrement("Slots 2", "老虎机2", "");
        }else{
            tttim++;
    }}else{
        h2 = 0;
    }if(onestreak > 5){
        if(h3 != 2){
            h3 = 2;
            doIncrement("Slots 3", "老虎机3", "");
        }else{
            tttim++;
    }}else{
        h3 = 0;
    }if(twospin > 299){
        if(h4 != 2){
            h4 = 2;
            doIncrement("Roulette 1", "轮盘赌1", "");
        }else{
            tttim++;
    }}else{
        h4 = 0;
    }if(twoguess > 5){
        if(h5 != 2){
            h5 = 2;
            doIncrement("Roulette 2", "轮盘赌2", "");
        }else{
            tttim++;
    }}else{
        h5 = 0;
    }if(twostreak > 4){
        if(h6 != 2){
            h6 = 2;
            doIncrement("Roulette 3", "轮盘赌3", "");
        }else{
            tttim++;
    }}else{
        h6 = 0;
    }if(thrtry > 199){
        if(h7 != 2){
            h7 = 2;
            doIncrement("Horse 1", "赌马1", "");
        }else{
            tttim++;
    }}else{
        h7 = 0;
    }if(thrguess > 9){
        if(h8 != 2){
            h8 = 2;
            doIncrement("Horse 2", "赌马2", "");
        }else{
            tttim++;
    }}else{
        h8 = 0;
    }if(ttreak > 4){
        if(h9 != 2){
            h9 = 2;
            doIncrement("Horse 3", "赌马3", "");
        }else{
            tttim++;
    }}else{
        h9 = 0;
    }if(fourbet > 299){
        if(h10 != 2){
            h10 = 2;
            doIncrement("Keno 1", "柯诺1", "");
        }else{
            tttim++;
    }}else{
        h10 = 0;
    }if(fourspec > 0){
        if(h11 != 2){
            h11 = 2;
            doIncrement("Keno 2", "柯诺2", "");
        }else{
            tttim++;
    }}else{
        h11 = 0;
    }if(fourstreak > 4){
        if(h12 != 2){
            h12 = 2;
            doIncrement("Keno 3", "柯诺3", "");
        }else{
            tttim++;
    }}else{
        h12 = 0;
    }if(fivescrat > 299){
        if(h13 != 2){
            h13 = 2;
            doIncrement("Scratch 1", "刮刮卡1", "");
        }else{
            tttim++;
    }}else{
        h13 = 0;
    }if(fivemega > 0){
        if(h14 != 2){
            h14 = 2;
            doIncrement("Scratch 2", "刮刮卡2", "");
        }else{
            tttim++;
    }}else{
        h14 = 0;
    }if(fivestreak > 3){
        if(h15 != 2){
            h15 = 2;
            doIncrement("Scratch 3", "刮刮卡3", "");
        }else{
            tttim++;
    }}else{
        h15 = 0;
    }if(sixspin > 399){
        if(h16 != 2){
            h16 = 2;
            doIncrement("Wheel 1", "幸运轮盘1", "");
        }else{
            tttim++;
    }}else{
        h16 = 0;
    }if(sixgold > 7){
        if(h17 != 2){
            h17 = 2;
            doIncrement("Wheel 2", "幸运轮盘2", "");
        }else{
            tttim++;
    }}else{
        h17 = 0;
    }if(sixstreak > 4){
        if(h18 != 2){
            h18 = 2;
            doIncrement("Wheel 3", "幸运轮盘3", "");
        }else{
            tttim++;
    }}else{
        h18 = 0;
    }if(sevthrow > 299){
        if(h19 != 2){
            h19 = 2;
            doIncrement("Craps 1", "双骰子1", "");
        }else{
            tttim++;
    }}else{
        h19 = 0;
    }if(sevspec > 11){
        if(h20 != 2){
            h20 = 2;
            doIncrement("Craps 2", "双骰子2", "");
        }else{
            tttim++;
    }}else{
        h20 = 0;
    }if(sevstreak > 7){
        if(h21 != 2){
            h21 = 2;
            doIncrement("Craps 3", "双骰子3", "");
        }else{
            tttim++;
    }}else{
        h21 = 0;
    }if(eigbet > 299){
        if(h22 != 2){
            h22 = 2;
            doIncrement("Blackjack 1", "二十一点1", "");
        }else{
            tttim++;
    }}else{
        h22 = 0;
    }if(eigdouble > 19){
        if(h23 != 2){
            h23 = 2;
            doIncrement("Blackjack 2", "二十一点2", "");
        }else{
            tttim++;
    }}else{
        h23 = 0;
    }if(eigstreak > 5){
        if(h24 != 2){
            h24 = 2;
            doIncrement("Blackjack 3", "二十一点3", "");
        }else{
            tttim++;
    }}else{
        h24 = 0;
    }if(login > 99){
        if(h25 != 2){
            h25 = 2;
            doIncrement("Extra 1", "额外1", "");
        }else{
            tttim++;
    }}else{
        h25 = 0;
    }if(h26 == 2 || h26 == 1){
        if(h26 != 2){
            doIncrement("Main 1", "主要1", "");
            h26 = 2;
        }else{
            tttim++;
    }}if(playTime > 21599){
        if(h27 != 2){
            h27 = 2;
            doIncrement("Main 2", "主要2", "");
        }else{
            tttim++;
    }}else{
        h27 = 0;
    }if(winrand > 199){
        if(h28 != 2){
            h28 = 2;
            doIncrement("Main 3", "主要3", "");
        }else{
            tttim++;
    }}else{
        h28 = 0;
    }if(timeAward > 29){
        if(h29 != 2){
            h29 = 2;
            doIncrement("Extra 2", "额外2", "");
        }else{
            tttim++;
    }}else{
        h29 = 0;
    }if(tgp > 1){
        if(m31 != 2){
            m31 = 2;
            doIncrement("🎟️ 1-1", "🎟️ 1-1", "");
        }else{
            tttim++;
    }}else{
        m31 = 0;
    }if(twj > 2){
        if(m32 != 2){
            m32 = 2;
            doIncrement("🎟️ 1-2", "🎟️ 1-2", "");
        }else{
            tttim++;
    }}else{
        m32 = 0;
    }if(tsj > 0){
        if(m33 != 2){
            m33 = 2;
            doIncrement("🎟️ 1-3", "🎟️ 1-3", "");
        }else{
            tttim++;
    }}else{
        m33 = 0;
    }if(ssw > 0){
        if(m34 != 2){
            m34 = 2;
            doIncrement("ATM 1", "ATM机1", "");
        }else{
            tttim++;
    }}else{
        m34 = 0;
    }if(ltd > 1){
        if(m35 != 2){
            m35 = 2;
            doIncrement("ATM 2", "ATM机1", "");
        }else{
            tttim++;
    }}else{
        m35 = 0;
    }if(adv > 19){
        if(m36 != 2){
            m36 = 2;
            doIncrement("ATM 3", "ATM机1", "");
        }else{
            tttim++;
    }}else{
        m36 = 0;
    }if(chm > 599){
        if(m37 != 2){
            m37 = 2;
            doIncrement("Online 1", "联机1", "");
        }else{
            tttim++;
    }}else{
        m37 = 0;
    }if(olw > 29){
        if(m38 != 2){
            m38 = 2;
            doIncrement("Online 2", "联机2", "");
        }else{
            tttim++;
    }}else{
        m38 = 0;
    }if(dmeee > 59){
        if(m39 != 2){
            m39 = 2;
            doIncrement("Online 3", "联机3", "");
        }else{
            tttim++;
    }}else{
        m39 = 0;
    }if(wyc > 0){
        if(m40 != 2){
            m40 = 2;
            doIncrement("🎟️ 2-1", "🎟️ 2-1", "");
        }else{
            tttim++;
    }}else{
        m40 = 0;
    }if(wxc > 0){
        if(m41 != 2){
            m41 = 2;
            doIncrement("🎟️ 2-2", "🎟️ 2-2", "");
        }else{
            tttim++;
    }}else{
        m41 = 0;
    }if(wzc > 0){
        if(m42 != 2){
            m42 = 2;
            doIncrement("🎟️ 2-3", "🎟️ 2-3", "");
        }else{
            tttim++;
    }}else{
        m42 = 0;
    }if(h30 != 2){
        if(account > 7999999){
            h30 = 2;
            doIncrement("Extra 3", "额外3", "");
    }}else{
        tttim++;
    }if(m43 != 2){
        if(pka > 299){
            m43 = 2;
            doIncrement("Poker 1", "扑克1", "");
    }}else{
        tttim++;
    }if(m44 != 2){
        if(pkb > 0){
            m44 = 2;
            doIncrement("Poker 2", "扑克2", "");
    }}else{
        tttim++;
    }if(m45 != 2){
        if(pkc > 4){
            m45 = 2;
            doIncrement("Poker 3", "扑克3", "");
    }}else{
        tttim++;
    }if(m46 != 2){
        if(dms > 20){
            m46 = 2;
            doIncrement("Challenge 1", "挑战1", "");
    }}else{
        tttim++;
    }if(m47 != 2){
        if(ftueflag.indexOf(0) == -1){
            m47 = 2;
            doIncrement("Challenge 2", "挑战2", "");
    }}else{
        tttim++;
    }if(m48 != 2){
        if(vit - getTime() > 3.156e+10){
            m48 = 2;
            doIncrement("Challenge 3", "挑战3", "");
    }}else{
        tttim++;
    }setT("text_area62", ["Progress: " + tttim + " / 48", "进度：" + tttim + " / 48", ""]);
    setT("text_area106", ["Let's start playing!", "我们开始玩吧！", ""]);
    sIurl("image34", "assets/q.png");
    for(var f = 1; f < 19; f++){
        sIurl("chip" + f, "assets/q.png");
    }if(tttim > 0){
        sIurl("image34", "assets/1.png");
        sIurl("chip1", "assets/1.png");
        setT("text_area106", ["What a great start!", "多么棒的开始！", ""]);
    }if(tttim > 2){
        sIurl("image34", "assets/10.png");
        sIurl("chip2", "assets/10.png");
        setT("text_area106", ["Solid next step!", "稳固的下一步！", ""]);
    }if(tttim > 4){
        sIurl("image34", "assets/25.png");
        sIurl("chip3", "assets/25.png");
        setT("text_area106", ["More than 10% done!", "超过10%完成！", ""]);
    }if(tttim > 6){
        sIurl("image34", "assets/50.png");
        sIurl("chip4", "assets/50.png");
        setT("text_area106", ["Great times!", "美好的时光！", ""]);
    }if(tttim > 8){
        sIurl("image34", "assets/100.png");
        sIurl("chip5", "assets/100.png");
        setT("text_area106", ["Solid progress!", "稳固的进展！", ""]);
    }if(tttim > 11){
        sIurl("image34", "assets/500.png");
        sIurl("chip6", "assets/500.png");
        setT("text_area106", ["Very good!", "非常好！", ""]);
    }if(tttim > 14){
        sIurl("image34", "assets/1000.png");
        sIurl("chip7", "assets/1000.png");
        setT("text_area106", ["Nice job!", "太赞了！", ""]);
    }if(tttim > 17){
        sIurl("image34", "assets/5000.png");
        sIurl("chip8", "assets/5000.png");
        setT("text_area106", ["Nice! Keep it goin'!", "太棒了！继续前进！", ""]);
    }if(tttim > 20){
        sIurl("image34", "assets/10k.png");
        sIurl("chip9", "assets/10k.png");
        setT("text_area106", ["Nice! What's next?", "好！接下来...?", ""]);
    }if(tttim > 23){
        sIurl("image34", "assets/25k.png");
        sIurl("chip10", "assets/25k.png");
        setT("text_area106", ["Solid work so far!", "迄今坚固的进展!", ""]);
    }if(tttim > 26){
        sIurl("image34", "assets/50k.png");
        sIurl("chip11", "assets/50k.png");
        setT("text_area106", ["Half done! Half left!", "完成一半了！", ""]);
    }if(tttim > 29){
        sIurl("image34", "assets/100k.png");
        sIurl("chip12", "assets/100k.png");
        setT("text_area106", ["Keep up the good work!", "再接再厉哦！", ""]);
    }if(tttim > 32){
        sIurl("image34", "assets/500k.png");
        sIurl("chip13", "assets/500k.png");
        setT("text_area106", ["Great! Let's go!", "太棒了！我们走！", ""]);
    }if(tttim > 35){
        sIurl("image34", "assets/1m.png");
        sIurl("chip14", "assets/1m.png");
        setT("text_area106", ["Splendid!", "太漂亮了！", ""]);
    }if(tttim > 38){
        sIurl("image34", "assets/5m.png");
        sIurl("chip15", "assets/5m.png");
        setT("text_area106", ["You're doing great!", "干的漂亮！", ""]);
    }if(tttim > 41){
        sIurl("image34", "assets/10m.png");
        sIurl("chip16", "assets/10m.png");
        setT("text_area106", ["100% is in sight!", "100%已在眼前！", ""]);
    }if(tttim > 44){
        sIurl("image34", "assets/100m.png");
        sIurl("chip17", "assets/100m.png");
        setT("text_area106", ["Almost done! What's left?", "快要完成了！还剩什么？", ""]);
    }if(tttim > 47){
        sIurl("image34", "assets/allin.png");
        sIurl("chip18", "assets/allin.png");
        setT("text_area106", ["I salute you, my friend.", "朋友，我向你致敬。", ""]);
    }changeScreen("ach");
    setText("text_area60", regText);
}
function doIncrement(val1, val2, val3){
    tttim++;
	exp += 6000;
    var temps = 0;
    if(onespin > 399){
        temps++;
    }if(onejack > 0){
        temps++;
    }if(onestreak > 5){
        temps++;
    }if(twospin > 299){
        temps++;
    }if(twoguess > 5){
        temps++;
    }if(twostreak > 4){
        temps++;
    }if(thrtry > 199){
        temps++;
    }if(thrguess > 9){
        temps++;
    }if(ttreak > 4){
        temps++;
    }if(fourbet > 299){
        temps++;
    }if(fourspec > 0){
        temps++;
    }if(fourstreak > 4){
        temps++;
    }if(fivescrat > 299){
        temps++;
    }if(fivemega > 0){
        temps++;
    }if(fivestreak > 3){
        temps++;
    }if(sixspin > 399){
        temps++;
    }if(sixgold > 7){
        temps++;
    }if(sixstreak > 4){
        temps++;
    }if(sevthrow > 299){
        temps++;
    }if(sevspec > 11){
        temps++;
    }if(sevstreak > 7){
        temps++;
    }if(eigbet > 299){
        temps++;
    }if(eigdouble > 19){
        temps++;
    }if(eigstreak > 5){
        temps++;
    }if(login > 99){
        temps++;
    }if(playTime > 21599){
        temps++;
    }if(winrand > 199){
        temps++;
    }if(timeAward > 29){
        temps++;
    }if(account > 7999999 || h30){
        temps++;
    }if(tgp > 1){
        temps++;
    }if(tsj > 0){
        temps++;
    }if(twj > 2){
        temps++;
    }if(ssw > 0){
        temps++;
    }if(ltd > 1){
        temps++;
    }if(adv > 19){
        temps++;
    }if(chm > 79){
        temps++;
    }if(olw > 29){
        temps++;
    }if(dmeee > 59){
        temps++;
    }if(h26 > 0){
        temps++;
    }if(wxc > 0){
        temps++;
    }if(wyc > 0){
        temps++;
    }if(wzc > 0){
        temps++;
    }if(pka > 299){
        temps++;
    }if(pkb > 0){
        temps++;
    }if(pkc > 4){
        temps++;
    }if(dms > 20){
        temps++;
    }if(ftueflag.indexOf(0) == -1){
        temps++;
    }if(vit - getTime() > 3.156e+10 || m48){
        temps++;
    }if(temps > 4 && flgs == 0){
        addtoken();
        flgs = 1;
    }if(temps > 9 && flgs == 1){
        addtoken();
        flgs = 2;
    }if(temps > 14 && flgs == 2){
        addtoken();
        flgs = 3;
    }if(temps > 19 && flgs == 3){
        addtoken();
        flgs = 4;
    }if(temps > 24 && flgs == 4){
        addtoken();
        flgs = 5;
    }if(temps > 29 && flgs == 5){
        addtoken();
        flgs = 6;
    }if(temps > 34 && flgs == 6){
        addtoken();
        flgs = 7;
    }if(temps > 39 && flgs == 7){
        addtoken();
        flgs = 8;
    }switch (lang){
        case 0:regText += val1 + " Complete!  EXP +6000\n";
            break;
        case 1:regText += val2 + " 完成！  EXP +6000\n";
            break;
        case 2:
            break;
    }setText("text_area70", "EXP: " + localstr(exp));
    update();
}
function addtoken(){
    mtt++;
    switch (lang){
        case 0:regText += "Token +1!\n";
            break;
        case 1:regText += "代币 +1！\n";
            break;
        case 2:
            break;
    }setText("text_area132", mtt);
}
onEvent("button194","click",function(){
    playS(0);
    chap = 15;
    setT("text_area60", ["Video Poker\n\n1. Play poker 300 times. (" + pka + " / 300)\n2. Win a Royal Flush. (" + pkb + " / 1)\n3. Get a win streak of 5. (" + pkc + " / 5)", "经典扑克\n\n1. 玩300次扑克。(" + pka + " / 300)\n2. 赢1次皇家同花顺。(" + pkb + " / 1)\n3. 获得连胜：5。(" + pkc + " / 5)", ""]);
    if(m43 == 2){
        sIurl("image28", "icon://fa-check-circle");
        active[0] = 0;
    }else{
        sIurl("image28", "icon://fa-times-circle");
        active[0] = 1;
    }if(m44 == 2){
        sIurl("image32", "icon://fa-check-circle");
        active[1] = 0;
    }else{
        sIurl("image32", "icon://fa-times-circle");
        active[1] = 1;
    }if(m45 == 2){
        sIurl("image33", "icon://fa-check-circle");
        active[2] = 0;
    }else{
        sIurl("image33", "icon://fa-times-circle");
        active[2] = 1;
}});
onEvent("button307","click",function(){
    playS(0);
    chap = 16;
    var chapw = 0;
    for(var i = 0; i < ftueflag.length; i++){
        if(ftueflag[i] == 1){
            chapw++;
    }}setT("text_area60", ["Challenge Mission Pack\n\n1. Reach 21 daily mission streak. (" + dms + " / 21)\n2. Complete the game tutorial. (" + chapw + " / 14)\n3. Have more than a year of VIP remaining. (stays unlocked once claimed.)", "挑战任务包\n\n1. 每日任务连胜达到21。(" + dms + " / 21)\n2. 完成游戏的教程。(" + chapw + " / 14)\n3. 还剩至少一年的VIP。 (获得后保持解锁。)", ""]);
    if(m46 == 2){
        sIurl("image28", "icon://fa-check-circle");
        active[0] = 0;
    }else{
        sIurl("image28", "icon://fa-times-circle");
        active[0] = 1;
    }if(m47 == 2){
        sIurl("image32", "icon://fa-check-circle");
        active[1] = 0;
    }else{
        sIurl("image32", "icon://fa-times-circle");
        active[1] = 1;
    }if(m48 == 2){
        sIurl("image33", "icon://fa-check-circle");
        active[2] = 0;
    }else{
        sIurl("image33", "icon://fa-times-circle");
        active[2] = 1;
}});
onEvent("button152","click",function(){
    playS(0);
    chap = 1;
    setT("text_area60", ["Big Six Wheel\n\n1. Spin the wheel 400 times. (" + sixspin + " / 400)\n2. Bet on Gold and win 8 times. (" + sixgold + " / 8)\n3. Get a win streak of 5. (" + sixstreak + " / 5)", "幸运轮盘\n\n1. 转400次转盘。(" + sixspin + " / 400)\n2. 在金色上下注并赢8次。(" + sixgold + " / 8)\n3. 获得连胜：5。(" + sixstreak + " / 5)", ""]);
    if(h16 == 2){
        sIurl("image28", "icon://fa-check-circle");
        active[0] = 0;
    }else{
        sIurl("image28", "icon://fa-times-circle");
        active[0] = 1;
    }if(h17 == 2){
        sIurl("image32", "icon://fa-check-circle");
        active[1] = 0;
    }else{
        sIurl("image32", "icon://fa-times-circle");
        active[1] = 1;
    }if(h18 == 2){
        sIurl("image33", "icon://fa-check-circle");
        active[2] = 0;
    }else{
        sIurl("image33", "icon://fa-times-circle");
        active[2] = 1;
}});
onEvent("button164","click",function(){
    playS(0);
    chap = 2;
    setT("text_area60", ["Blackjack\n\n1. Bet 300 times. (" + eigbet + " / 300)\n2. Bet double and win 20 times. (" + eigdouble + " / 20)\n3. Get a win streak of 6. (" + eigstreak + " / 6)", "21点\n\n1. 玩300次。(" + eigbet + " / 300)\n2. 选择加倍并赢20次。(" + eigdouble + " / 20)\n3. 获得连胜：6。(" + eigstreak + " / 6)", ""]);
    if(h22 == 2){
        sIurl("image28", "icon://fa-check-circle");
        active[0] = 0;
    }else{
        sIurl("image28", "icon://fa-times-circle");
        active[0] = 1;
    }if(h23 == 2){
        sIurl("image32", "icon://fa-check-circle");
        active[1] = 0;
    }else{
        sIurl("image32", "icon://fa-times-circle");
        active[1] = 1;
    }if(h24 == 2){
        sIurl("image33", "icon://fa-check-circle");
        active[2] = 0;
    }else{
        sIurl("image33", "icon://fa-times-circle");
        active[2] = 1;
}});
onEvent("button150","click",function(){
    playS(0);
    chap = 3;
    setT("text_area60", ["Roulette\n\n1. Play 300 times. (" + twospin + " / 300)\n2. Bet 00-36 and win 6 times. (" + twoguess + " / 6)\n3. Get a win streak of 5. (" + twostreak + " / 5)", "轮盘赌\n\n1. 玩300次。(" + twospin + " / 300)\n2. 在00-36上下注并赢6次。(" + twoguess + " / 6)\n3. 获得连胜：5。(" + twostreak + " / 5)", ""]);
    if(h4 == 2){
        sIurl("image28", "icon://fa-check-circle");
        active[0] = 0;
    }else{
        sIurl("image28", "icon://fa-times-circle");
        active[0] = 1;
    }if(h5 == 2){
        sIurl("image32", "icon://fa-check-circle");
        active[1] = 0;
    }else{
        sIurl("image32", "icon://fa-times-circle");
        active[1] = 1;
    }if(h6 == 2){
        sIurl("image33", "icon://fa-check-circle");
        active[2] = 0;
    }else{
        sIurl("image33", "icon://fa-times-circle");
        active[2] = 1;
}});
onEvent("button162","click",function(){
    chap = 4;
    playS(0);
    setT("text_area60", ["Keno\n\n1. Bet 300 times. (" + fourbet + " / 300)\n2. Win a x38k, x26k or x18k. (" + fourspec + " / 1)\n3. Get a win streak of 5. (" + fourstreak + " / 5)", "柯诺\n\n1. 玩300次。(" + fourbet + " / 300)\n2. 赢一个 x38k，x26k或x18k。(" + fourspec + " / 1)\n3. 获得连胜：5。(" + fourstreak + " / 5)", ""]);
    if(h10 == 2){
        sIurl("image28", "icon://fa-check-circle");
        active[0] = 0;
    }else{
        sIurl("image28", "icon://fa-times-circle");
        active[0] = 1;
    }if(h11 == 2){
        sIurl("image32", "icon://fa-check-circle");
        active[1] = 0;
    }else{
        sIurl("image32", "icon://fa-times-circle");
        active[1] = 1;
    }if(h12 == 2){
        sIurl("image33", "icon://fa-check-circle");
        active[2] = 0;
    }else{
        sIurl("image33", "icon://fa-times-circle");
        active[2] = 1;}});
onEvent("button154","click",function(){
    chap = 5;
    playS(0);
    setT("text_area60", ["Simplified Craps\n\n1. Play 300 times. (" + sevthrow + " / 300)\n2. Win on 1&1 or 6&6 12 times. (" + sevspec + " / 12)\n3. Get a win streak of 8. (" + sevstreak + " / 8)", "简化双骰子\n\n1. 玩300次。(" + sevthrow + " / 300)\n2. 在 1&1 或 6&6 上赢12次。(" + sevspec + " / 12)\n3. 获得连胜：8。(" + sevstreak + " / 8)", ""]);
    if(h19 == 2){
        sIurl("image28", "icon://fa-check-circle");
        active[0] = 0;
    }else{
        sIurl("image28", "icon://fa-times-circle");
        active[0] = 1;
    }if(h20 == 2){
        sIurl("image32", "icon://fa-check-circle");
        active[1] = 0;
    }else{
        sIurl("image32", "icon://fa-times-circle");
        active[1] = 1;
    }if(h21 == 2){
        sIurl("image33", "icon://fa-check-circle");
        active[2] = 0;
    }else{
        sIurl("image33", "icon://fa-times-circle");
        active[2] = 1;
}});
onEvent("button149","click",function(){
    chap = 6;
    playS(0);
    setT("text_area60", ["Slots\n\n1. Pull the lever 400 times. (" + onespin + " / 400)\n2. Win a jackpot (3 crown / seven). (" + onejack + " / 1)\n3. Get a win streak of 6. (" + onestreak + " / 6)", "老虎机\n\n1. 玩400次。(" + onespin + " / 400)\n2. 赢一个头奖（3个皇冠 / 七)。 (" + onejack + " / 1)\n3. 获得连胜：6。(" + onestreak + " / 6)", ""]);
    if(h1 == 2){
        sIurl("image28", "icon://fa-check-circle");
        active[0] = 0;
    }else{
        sIurl("image28", "icon://fa-times-circle");
        active[0] = 1;
    }if(h2 == 2){
        sIurl("image32", "icon://fa-check-circle");
        active[1] = 0;
    }else{
        sIurl("image32", "icon://fa-times-circle");
        active[1] = 1;
    }if(h3 == 2){
        sIurl("image33", "icon://fa-check-circle");
        active[2] = 0;
    }else{
        sIurl("image33", "icon://fa-times-circle");
        active[2] = 1;
}});
onEvent("button151","click",function(){
    chap = 7;
    playS(0);
    setT("text_area60", ["Scratch Card\n\n1. Scratch 300 cards. (" + fivescrat + " / 300)\n2. Win a mega jackpot (x5). (" + fivemega + " / 1)\n3. Get a win streak of 4. (" + fivestreak + " / 4)", "刮刮卡\n\n1. 刮300张卡。(" + fivescrat + " / 300)\n2. 赢一个超级头奖 (x5)。(" + fivemega + " / 1)\n3. 获得连胜：4。(" + fivestreak + " / 4)", ""]);
    if(h13 == 2){
        sIurl("image28", "icon://fa-check-circle");
        active[0] = 0;
    }else{
        sIurl("image28", "icon://fa-times-circle");
        active[0] = 1;
    }if(h14 == 2){
        sIurl("image32", "icon://fa-check-circle");
        active[1] = 0;
    }else{
        sIurl("image32", "icon://fa-times-circle");
        active[1] = 1;
    }if(h15 == 2){
        sIurl("image33", "icon://fa-check-circle");
        active[2] = 0;
    }else{
        sIurl("image33", "icon://fa-times-circle");
        active[2] = 1;
}});
onEvent("button168","click",function(){
    chap = 8;
    playS(0);
    setT("text_area60", ["Horse Bet\n\n1. Race 200 times. (" + thrtry + " / 200)\n2. Bet Biscuit and win 10 times. (" + thrguess + " / 10)\n3. Get a win streak of 5. (" + ttreak + " / 5)", "赌马\n\n1. 比赛200次。(" + thrtry + " / 200)\n2. 下注饼干并赢10次。(" + thrguess + " / 10)\n3. 获得连胜：5。(" + ttreak + " / 5)", ""]);
    if(h7 == 2){
        sIurl("image28", "icon://fa-check-circle");
        active[0] = 0;
    }else{
        sIurl("image28", "icon://fa-times-circle");
        active[0] = 1;
    }if(h8 == 2){
        sIurl("image32", "icon://fa-check-circle");
        active[1] = 0;
    }else{
        sIurl("image32", "icon://fa-times-circle");
        active[1] = 1;
    }if(h9 == 2){
        sIurl("image33", "icon://fa-check-circle");
        active[2] = 0;
    }else{
        sIurl("image33", "icon://fa-times-circle");
        active[2] = 1;
}});
onEvent("button153","click",function(){
    chap = 9;
    playS(0);
    setT("text_area60", ["Main Challenge Pack\n\n1. Find the easter egg completely.\n2. Play for 6 hours. (" + playTime + " / 21600s)\n3. Win 200 Random Games. (" + winrand + " / 200)", "主要挑战包\n\n1. 找到完整的彩蛋。\n2. 游玩6个小时。 (" + playTime + " / 21600s)\n3. 赢200场随机游戏。 (" + winrand + " / 200)", ""]);
    if(h26 == 2){
        sIurl("image28", "icon://fa-check-circle");
        active[0] = 0;
    }else{
        sIurl("image28", "icon://fa-times-circle");
        active[0] = 1;
    }if(h27 == 2){
        sIurl("image32", "icon://fa-check-circle");
        active[1] = 0;
    }else{
        sIurl("image32", "icon://fa-times-circle");
        active[1] = 1;
    }if(h28 == 2){
        sIurl("image33", "icon://fa-check-circle");
        active[2] = 0;
    }else{
        sIurl("image33", "icon://fa-times-circle");
        active[2] = 1;
}});
onEvent("button148","click",function(){
    chap = 10;
    playS(0);
    setT("text_area60", ["Extra Challenge Pack\n\n1. Log in 100 times. (" + login + " / 100)\n2. Claim daily reward 30 times. (" + timeAward + " / 30)\n3. Have more than 8M credits. (stays unlocked once claimed.)", "额外挑战包\n\n1. 登录100次。(" + login + " / 100)\n2. 领取30次每日奖励。 (" + timeAward + " / 30)\n3. 拥有八百万点数。 (获得后保持解锁。)", ""]);
    if(h25 == 2){
        sIurl("image28", "icon://fa-check-circle");
        active[0] = 0;
    }else{
        sIurl("image28", "icon://fa-times-circle");
        active[0] = 1;
    }if(h29 == 2){
        sIurl("image32", "icon://fa-check-circle");
        active[1] = 0;
    }else{
        sIurl("image32", "icon://fa-times-circle");
        active[1] = 1;
    }if(h30 == 2){
        sIurl("image33", "icon://fa-check-circle");
        active[2] = 0;
    }else{
        sIurl("image33", "icon://fa-times-circle");
        active[2] = 1;
}});
onEvent("button259","click",function(){
    chap = 11;
    playS(0);
    setT("text_area60", ["🎟️ Games Pack 1\n\n1. Win 2 🎟️🧧 jackpot. (" + tgp + " / 2)\n2. Win 3 jackpots in 🎟️🎡. (" + twj + " / 3)\n3. Win a jackpot in 🎟️🎰. (" + tsj + " / 1)", "🎟️游戏包1\n\n1. 赢2个🎟️🧧头奖。(" + tgp + " / 2)\n2. 赢3个🎟️🎡头奖。(" + twj + " / 3)\n3. 赢1个🎟️🎰头奖。(" + tsj + " / 1)", ""]);
    if(m31 == 2){
        sIurl("image28", "icon://fa-check-circle");
        active[0] = 0;
    }else{
        sIurl("image28", "icon://fa-times-circle");
        active[0] = 1;
    }if(m32 == 2){
        sIurl("image32", "icon://fa-check-circle");
        active[1] = 0;
    }else{
        sIurl("image32", "icon://fa-times-circle");
        active[1] = 1;
    }if(m33 == 2){
        sIurl("image33", "icon://fa-check-circle");
        active[2] = 0;
    }else{
        sIurl("image33", "icon://fa-times-circle");
        active[2] = 1;
}});
onEvent("button260","click",function(){
    chap = 12;
    playS(0);
    setT("text_area60", ["ATM Machine Pack\n\n1. Win a Sweepstakes jackpot. (" + ssw + " / 1)\n2. Win 2 Log-in Lotto. (" + ltd + " / 2)\n3. Send 20 Gifts. (" + adv + " / 20)", "ATM机任务包\n\n1. 赢一场抽奖。(" + ssw + " / 1)\n2. 赢两场登录彩券。(" + ltd + " / 2)\n3. 给出20份礼物。(" + adv + " / 20)", ""]);
    if(m34 == 2){
        sIurl("image28", "icon://fa-check-circle");
        active[0] = 0;
    }else{
        sIurl("image28", "icon://fa-times-circle");
        active[0] = 1;
    }if(m35 == 2){
        sIurl("image32", "icon://fa-check-circle");
        active[1] = 0;
    }else{
        sIurl("image32", "icon://fa-times-circle");
        active[1] = 1;
    }if(m36 == 2){
        sIurl("image33", "icon://fa-check-circle");
        active[2] = 0;
    }else{
        sIurl("image33", "icon://fa-times-circle");
        active[2] = 1;
}});
onEvent("ollc","click",function(){
    playS(0);
    chap = 13;
    setT("text_area60", ["Online Pack\n\n1. Win 30 PVP matches. (" + olw + " / 30)\n2. Complete 60 daily missions. (" + dmeee + " / 60)\n3. Wager 600 🎟️ in Sweepstakes. (" + chm + " / 600)", "联机游戏包\n\n1. 赢30轮PVP模式。(" + olw + " / 30)\n2. 完成60个每日任务。(" + dmeee + " / 60)\n3. 在抽奖投注600🎟️。(" + chm + " / 600)", ""]);
    if(m37 == 2){
        sIurl("image28", "icon://fa-check-circle");
        active[0] = 0;
    }else{
        sIurl("image28", "icon://fa-times-circle");
        active[0] = 1;
    }if(m38 == 2){
        sIurl("image32", "icon://fa-check-circle");
        active[1] = 0;
    }else{
        sIurl("image32", "icon://fa-times-circle");
        active[1] = 1;
    }if(m39 == 2){
        sIurl("image33", "icon://fa-check-circle");
        active[2] = 0;
    }else{
        sIurl("image33", "icon://fa-times-circle");
        active[2] = 1;
}});
onEvent("tikc","click",function(){
    chap = 14;
    playS(0);
    setT("text_area60", ["🎟️ Games Pack 2\n\n1. Win 1 🎟️💰 jackpot. (" + wyc + " / 1)\n2. Win 1 🎟️🃏 jackpot. (" + wxc + " / 1)\n3. Win 1 🎟️💻 jackpot. ("+wzc+" / 1)", "🎟️游戏包2\n\n1. 赢1个🎟️💰头奖。 (" + wyc + " / 1)\n2. 赢1个🎟️🃏头奖。 (" + wxc + " / 1)\n3. 赢1个🎟️💻头奖。("+wzc+" / 1 )", ""]);
    if(m40 == 2){
        sIurl("image28", "icon://fa-check-circle");
        active[0] = 0;
    }else{
        sIurl("image28", "icon://fa-times-circle");
        active[0] = 1;
    }if(m41 == 2){
        sIurl("image32", "icon://fa-check-circle");
        active[1] = 0;
    }else{
        sIurl("image32", "icon://fa-times-circle");
        active[1] = 1;
    }if(m42 == 2){
        sIurl("image33", "icon://fa-check-circle");
        active[2] = 0;
    }else{
        sIurl("image33", "icon://fa-times-circle");
        active[2] = 1;
}});
function isadmin(cur){
    if(admin.indexOf(cur) == -1){
        return false;
    }return true;
}
onEvent("button166","click",function(){
    playS(6);
    gettr();
    changeScreen("chip");
});
onEvent("button170","click",function(){
    playS(11);
    changeScreen("ach");
});
function setimage(val, vals){
    for(var i = 0; i < val.length; i++){
        sIurl(val[i], vals);
}}
onEvent("guest","click",function(){
    if(coo){
        fadeIn(["barrier", "logintext"]);
        rejectli(["Unavailable in Cheat Mode. Please refresh the game.", "作弊模式下不可用。请刷新程序。", ""]);
        return;
    }playS(7);
    setimage(["tr2", "tr1", "iap"], "assets/q.png");
    showElement("mailyes");
    fadeIn(["text_area16", "barrrrr"]);
    if(userID == "Guest"){
        getFame(false);
        setT("text_area16", ["Cloud Save, Leaderboard, Feedback, and AceTrail are not available in Guest Mode. Your progress will be lost if you close the web page.\n\nYou can Sign Up or Log In anytime by revisiting this screen.", "云存档、排行榜、反馈、AceTrail在游客模式中不可用。如果您关闭网页, 您的进度将会丢失。\n\n您可以随时通过查看此屏幕注册或登录。", ""]);
    }else{
        setT("text_area16", ["You have been logged out. \n\nYour progress is synced, your local progress is reset.", "您已登出。\n\n您的进度已同步，您的本地进度将被重置。", ""]);
        resetsave();
    }gettr();
    setTex(["emoji","emo", "LL4"], emoji);
});
onEvent("barrrrr","click",function(){
    if(!ftueflag[0]){
        doTutorial(0);
        ftuesetup = 2;
    }else{
        doftuetwo(2);
}});
onEvent("conbin","click",function(){
    playS(7);
    update();
    changeScreen("screen2");
});
onEvent("button169","click",function(){
    playS(5);
    hideElement("image35");
    update();
    changeScreen("screen2");
});
function checkString(str){
    var code, i, len, L, U, N;
    L = U = N = 0;
    if(str.length == 0){
        return 10;
    }for(i = 0, len = str.length; i < len; i++){
      code = str.charCodeAt(i);
      if(!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)){
        if(code == 32){return 2}
        return 1;
      }else{
          if(!N && (code > 47 && code < 58)){N = 1}
          else if(!L && (code > 96 && code < 123)){L = 1}
          else if(!U && (code > 64 && code < 91)){U = 1}
    }}if(!U){return 3}
    if(!L){return 4}
    if(!N){return 5}
    if(coo){return 6}
    if(str == userID){return 7}
    if(str.toUpperCase().includes("GUEST")){return 8}
    if(str.length > 5 && str.length < 13){return 0}
    return 9;
};
onEvent("login","click",function(){
    fadeIn(["barrier", "logintext"]);
    var match;
    match = false;
    var pD = getText("text_input1");
    var check = checkString(pD);
    switch(check){
        case 0:playS(7);
        var cid = getUserId();
        var thit = 0;
        setT("logintext", ["Querying online database.\nIf this took more than 5 seconds check your internet connection.", "正在查询数据库。\n如果此操作超过了5秒，请检查您的网络连接。", ""]);
        readRecords("\x70\x72\x6F\x67\x72\x65\x73\x73", {}, function(value){
            if(value[value.length-1].id > 19999){
                doFullRecord("progress");
            }getOL(value);
            getLB(value, false);
            getAce(value);
            for(var i = 0; i < value.length; i++){
                if(cid == value[i].CID){
                    thit++;
                }if(value[i].UID == pD){
                    match = true;
                    data = value[i];
            }}fadein("No");
            if(match){
                setText("text_area78", "🛑");
                fadeIn(["aYes", "text_area78", "auto", "text_area99"]);
                setT("logintext", ["User ID: '" + pD + "' already exist. Do you want to log in with it?\n\nIf this is not your User ID, please press 'Return' and change your preference.", "用户ID：'" + pD + "' 已经存在。你想用它登录吗？\n\n如果这不是你的用户ID请点返回来注册一个。", ""]);
                if(isadmin(data.id)){
                    fadein("icb1");
                }else{
                    hideElement("icb1");
            }}else{
                setText("text_area78", "⚠️");
                if(thit > 1){
                    fadeIn(["text_area78"]);
                    setT("logintext", ["2 User IDs are detected under your profile. Please don't register repeatedly.", "你的信息下已有两个用户ID。 请不要重复注册。", ""]);
                }else{
                    fadeIn(["bYes", "text_area78", "auto", "text_area99"]);
                    setT("logintext", ["Create User ID: '" + pD + "'? You can't change it in the future.\n\nDo not forget your User ID, as there is no way of recovering a lost User ID.", "创建用户ID：'" + pD + "'？你将不能修改它。\n\n不要忘记你的用户ID，因为你将无法找回它。", ""]);
        }}});break;
        case 1:rejectli(["Username must not contain special characters.", "用户名不能有特殊字符。", ""]);break;
        case 2:rejectli(["Username must not contain space.", "用户名不能有空格。", ""]);break;
        case 3:rejectli(["Username must contain at least one upper case letter.", "用户名必须有至少一个大写字母。", ""]);break;
        case 4:rejectli(["Username must contain at least one lower case letter.", "用户名必须有至少一个小写字母。", ""]);break;
        case 5:rejectli(["Username must contain at least one number.", "用户名必须有至少一个数字。", ""]);break;
        case 6:rejectli(["Unavailable in Cheat Mode. Please refresh the game.", "作弊模式下不可用。请刷新程序。", ""]);break;
        case 7:rejectli(["Don't log in to the same account repeatedly.", "不要重复登录同一个账号。", ""]);break;
        case 8:rejectli(["Username cannot contain 'guest'.", "用户ID不能包括 ’Guest‘。", ""]);break;
        case 9:rejectli(["Username must be 6 to 12 digits long.", "用户名长度必须是6到12字符。", ""]);break;
        case 10:rejectli(["Username requirement:\n\n6 - 12 digits long, with at least one CAPITAL letter, one lower letter, and one number. Spaces and special characters are not allowed.", "用户名要求：\n\n6至12字符长，必须有至少一个大写字母，一个小写字母，和一个数字，不能有空格和特殊字符。", ""]);break;
}});
function rejectli(val){
    playS(2);
    setT("logintext", val);
    showElement("button163");
}
function gettr(){
    var isown = false;
    var L1, L2, L3, L4, L5, L6, L7, L8, L9;
    L1 = L2 = L3 = L4 = L5 = L6 = L7 = L8 = L9 = 0;
    for(var i = 0; i < lb.length; i++){
        if(L1 < lb[i].exp){
            L1 = lb[i].exp;
        }if(L2 < lb[i].mission){
            L2 = lb[i].mission;
        }if(L3 < lb[i].money){
            L3 = lb[i].money;
        }if(L4 < lb[i].time){
            L4 = lb[i].time;
        }if(L5 < lb[i].nto){
            L5 = lb[i].nto;
        }if(L6 < lb[i].pst){
            L6 = lb[i].pst;
        }if(L7 < lb[i].tls){
            L7 = lb[i].tls;
        }if(L8 < lb[i].zzz){
            L8 = lb[i].zzz;
        }if(L9 < lb[i].ols){
            L9 = lb[i].ols;
    }}var LL7 = 0;
    var LL8 = onestreak+twostreak+fourstreak+ttreak+fivestreak+sixstreak+sevstreak+eigstreak+rst;
    if(pst > 0){
        LL7 = Math.round(nto*100/pst);
    }if(L1 == exp || L2 == tttim || L3 == account || L4 == playTime || L5 == nto || L6 == pst + mtt*100 || L7 == LL7 || L8 == LL8 || L9 == ols || trone){
        isown = trone = true;
    }if(isown && !lbh){
        sIurl("tr1", "assets/trle.png");
    }else{
        sIurl("tr1", "assets/q.png");
    }if(pay > 0 && vit>ztime){
        vipst = 2;
        sIurl("iap", "assets/iaps.png");
    }else if(pay > 0){
        vipst = 1;
        sIurl("iap", "assets/iapia.png");
    }else{
        vipst = 0;
        sIurl("iap", "assets/q.png");
    }if(highrank >= 1){
        sIurl("leag1", "assets/lr1.png");
    }else{
        sIurl("leag1", "assets/q.png");
    }if(highrank >= 3){
        sIurl("leag2", "assets/lr3.png");
    }else{
        sIurl("leag2", "assets/q.png");
    }if(highrank >= 5){
        sIurl("leag3", "assets/lr5.png");
    }else{
        sIurl("leag3", "assets/q.png");
    }if(highrank >= 7){
        sIurl("leag4", "assets/lr7.png");
    }else{
        sIurl("leag4", "assets/q.png");
    }if(highrank >= 9){
        sIurl("leag5", "assets/lr9.png");
    }else{
        sIurl("leag5", "assets/q.png");
    }if(avl == 360){
        sIurl("reserve1", "assets/allemoji.png");
    }else{
        sIurl("reserve1", "assets/q.png");
    }if(echip){
        sIurl("reserve2", "assets/goldtoken.png");
    }else{
        sIurl("reserve2", "assets/q.png");
}}
function getAce(value){
    aces = [];
    for(var i = 0; i < value.length; i++){
        if(value[i].lbh == 0){
            var tmp = {};
            tmp.em = value[i].ev;
            tmp.ev = value[i].ji;
            tmp.id = value[i].id;
            tmp.one = value[i].ost;
            tmp.two = value[i].tsr;
            tmp.thr = value[i].fst;
            tmp.fer = value[i].ts;
            tmp.fiv = value[i].ist;
            tmp.six = value[i].sa;
            tmp.sev = value[i].str;
            tmp.eig = value[i].egs;
            tmp.vip = value[i].vit;
            tmp.nin = value[i].rst;
            tmp.ten = value[i].pkc;
            tmp.dms = value[i].dms;
            aces.push(tmp);
    }}crankData();
}
function crankData(){
    var l1, l2, l3, l4, l5, l6, l7, l8, l9, a1, a2, a3, a4, a5, a6, a7, a8, a9, l10, a10, l11, a11;
    l1 = l2 = l3 = l4 = l5 = l6 = l7 = l8 = a1 = a2 = a3 = a4 = a5 = a6 = a7 = a8 = a9 = l9 = l10 = l11 = a11 = a10 = 0;
    for(var i = 0; i < aces.length; i++){
        if(aces[i].one > l1){
            l1 = aces[i].one;
            a1 = aces[i].id;
        }if(aces[i].two > l2){
            l2 = aces[i].two;
            a2 = aces[i].id;
        }if(aces[i].thr > l3){
            l3 = aces[i].thr;
            a3 = aces[i].id;
        }if(aces[i].fer > l4){
            l4 = aces[i].fer;
            a4 = aces[i].id;
        }if(aces[i].fiv > l5){
            l5 = aces[i].fiv;
            a5 = aces[i].id;
        }if(aces[i].six > l6){
            l6 = aces[i].six;
            a6 = aces[i].id;
        }if(aces[i].sev > l7){
            l7 = aces[i].sev;
            a7 = aces[i].id;
        }if(aces[i].eig > l8){
            l8 = aces[i].eig;
            a8 = aces[i].id;
        }if(aces[i].nin > l9){
            l9 = aces[i].nin;
            a9 = aces[i].id;
        }if(aces[i].ten > l10){
            l10 = aces[i].ten;
            a10 = aces[i].id;
        }if(aces[i].dms > l11){
            l11 = aces[i].dms;
            a11 = aces[i].id;
    }}setText("us1", a1);
    setText("us2", a2);
    setText("us3", a3);
    setText("us4", a4);
    setText("us5", a5);
    setText("us6", a6);
    setText("us7", a7);
    setText("us8", a8);
    setText("us9", a9);
    setText("us10", a10);
    setText("us11", a11);
    g1id = a1;
    g1s = l1;
    setT("streak1", ["Streak: " + l1, "连胜: " + l1, ""]);
    g2id = a2;
    g2s = l2;
    setT("streak2", ["Streak: " + l2, "连胜: " + l2, ""]);
    g3id = a4;
    g3s = l4;
    setT("streak4", ["Streak: " + l3, "连胜: " + l3, ""]);
    g4id = a3;
    g4s = l3;
    setT("streak3", ["Streak: " + l4, "连胜: " + l4, ""]);
    g5id = a5;
    g5s = l5;
    setT("streak5", ["Streak: " + l5, "连胜: " + l5, ""]);
    g6id = a6;
    g6s = l6;
    setT("streak6", ["Streak: " + l6, "连胜: " + l6, ""]);
    g7id = a7;
    g7s = l7;
    setT("streak7", ["Streak: " + l7, "连胜: " + l7, ""]);
    g8id = a8;
    g8s = l8;
    setT("streak8", ["Streak: " + l8, "连胜: " + l8, ""]);
    g9id = a9;
    g9s = l9;
    setT("streak9", ["Streak: " + l9, "连胜: " + l9, ""]);
    g10id = a10;
    g10s = l10;
    setT("streak10", ["Streak: " + l10, "连胜: " + l10, ""]);
    g11id = a11;
    g11s = l11;
    setT("streak11", ["Streak: " + l11, "连胜: " + l11, ""]);
}
onEvent("button163","click",function(){
    playS(0);
    fadeOut(["button163", "logintext", "barrier"]);
});
onEvent("No","click",function(){
    playS(0);
    hideE(["No", "aYes", "bYes","icb1"]);
    fadeOut(["logintext", "barrier", "text_area78", "auto", "text_area99"]);
});
onEvent("aYes","click",function(){
    var ftue, flag, sbadgea, sbadgeb, sbadgec, sbadged, sbadgee, sbadgef,hc,ic,jc,kc,lc,mc,ac,bc,cc,dc,ec,fc,gc,nc,oc,pc,qc,rc,sc,tc,uc,vc;
    if(pdata[0] == 0){
        pdata[0]++;
    }playS(7);
    havebeat = 0;
    currentid = data.id;
    retriv();
    validateJSON(data.da, data.id+" aYes: data.da");
    validateJSON(data.ft, data.id+" aYes: data.ft");
    validateJSON(data.aa, data.id+" aYes: data.aa");
    validateJSON(data.bo, data.id+" aYes: data.bo");
    data.da = JSON.parse(data.da);                  ftue = JSON.parse(data.ft);                     ols = data.ols;
    chm = data.chm;                                 olw = data.olw;                                 dmeee = data.dm;
    aa = JSON.parse(data.aa);                       pst = data.pst;                                 nto = data.nto;
    vit = data.vit;                                 userID = data.UID;                              playTime = data.tis;
    exp = data.exp;                                 lot = data.lo;                                  rst = data.rst;
    account = data.cur;                             onespin = data.osp;                             onejack = data.oj;
    onestreak = data.ost;                           twospin = data.tsp;                             twoguess = data.tg;
    twostreak = data.tsr;                           thrtry = data.ttr;                              ttreak = data.ts;
    fourbet = data.fbt;                             fourspec = data.fsp;                            fourstreak = data.fst;
    fivescrat = data.isc;                           fivemega = data.im;                             fivestreak = data.ist;
    thrguess = data.rg;                             sixspin = data.ssp;                             sixgold = data.sg;
    sixstreak = data.sa;                            sevthrow = data.vr;                             sevspec = data.sec;
    sevstreak = data.str;                           eigbet = data.ebt;                              eigdouble = data.edb;
    eigstreak = data.egs;                           login = data.lg + 1;                            winrand = data.wr;
    timeAward = data.ta;                            fxx = data.fxx;                                 wager = data.wg;
    zwz = data.da[0];                               ac = data.da[1];                                bc = data.da[2];
    cc = data.da[3];                                dc = data.da[4];                                ec = data.da[5];
    fc = data.da[6];                                gc = data.da[7];                                nc = data.da[8];
    oc = data.da[9];                                pc = data.da[10];                               qc = data.da[11];
    rc = data.da[12];                               sc = data.da[13];                               tc = data.da[14];
    uc = data.da[15];                               pay = data.iap;                                 estt = data.T;
    lastclaim = data.lx;                            tttim = data.oa;                                lang = data.L;
    mtt = data.mt;                                  flag = data.fl;                                 ssw = data.ssw;
    ticket = data.tk;                               ltd = data.ltd;                                 adv = data.adv;
    twj = data.twj;                                 tsj = data.tsj;                                 jc = data.da[18];
    tgp = data.tgp;                                 hc = data.da[16];                               ic = data.da[17];
    kc = data.da[19];                               lc = data.da[20];                               sbadgeb = data.da[23];
    mc = data.da[21];                               sbadgea = data.da[22];                          sbadgec = data.da[24];
    sbadged = data.da[25];                          sbadgee = data.da[26];                          lbh = data.lbh;
    sbadgef = data.da[27];                          vc = data.da[28];                               emoji = data.ji;                                
    avl = data.avl;                                 gft = data.gft;                                 eloscore = data.elo;         
    wxc = data.wxc;                                 wyc = data.wyc;                                 wzc = data.wzc;                                 
    chatTime = data.lc*1000;                        blocked = JSON.parse(data.bo);                  dayed = data.day;
    leaguerank = data.lr;                           pka = data.pka;                                 pkb = data.pkb;
    pkc = data.pkc;                                 dms = data.dms;                                 highrank = data.hr;
    dmz = data.dmz;                                 thv = data.tv;                                  emv = data.ev;
    changeAccount(0);
    changeTicket(0);
    ftueflag = [];
    if(wager == 0){
        wager = 100;
    }for(var k = 0; k < ftue.length; k++){
        if(ftue[k] == 0){
            ftueflag.push(0);
            ftueflag.push(0);
        }else if(ftue[k] == 5){
            ftueflag.push(1);
            ftueflag.push(1);
        }else if(ftue[k] == 2){
            ftueflag.push(1);
            ftueflag.push(0);
        }else{
            ftueflag.push(0);
            ftueflag.push(1);
    }}if(flag > 9){
        echip = 1;
        flgs = flag - 10;
    }else{
        echip = 0;
        flgs = flag;
    }if(sbadgea > 2){
        specialbadge3 = 1;
        specialbadgeone = sbadgea - 3;
    }else{
        specialbadge3 = 0;
        specialbadgeone = sbadgea;
    }if(sbadgeb > 2){
        specialbadge4 = 1;
        specialbadgetwo = sbadgeb - 3;
    }else{
        specialbadge4 = 0;
        specialbadgetwo = sbadgeb;
    }if(sbadgec > 2){
        trone = 1;
        m37 = sbadgec - 3;
    }else{
        trone = 0;
        m37 = sbadgec;
    }if(sbadged > 2){
        trtwo = 1;
        m38 = sbadged - 3;
    }else{
        trtwo = 0;
        m38 = sbadged;
    }if(sbadgee > 2){
        resv1 = 1;
        m39 = sbadgee - 3;
    }else{
        resv1 = 0;
        m39 = sbadgee;
    }if(sbadgef > 2){
        resv2 = 1;
        m40 = sbadgef - 3;
    }else{
        resv2 = 0;
        m40 = sbadgef;
    }if(hc > 2){
        m43 = 2;
        m31 = hc - 3;
    }else{
        m43 = 0;
        m31 = hc;
    }if(ic > 2){
        m44 = 2;
        m32 = ic - 3;
    }else{
        m44 = 0;
        m32 = ic;
    }if(jc > 2){
        m45 = 2;
        m33 = jc - 3;
    }else{
        m45 = 0;
        m33 = jc;
    }if(kc > 2){
        m46 = 2;
        m34 = kc - 3;
    }else{
        m46 = 0;
        m34 = kc;
    }if(lc > 2){
        m47 = 2;
        m35 = lc - 3;
    }else{
        m47 = 0;
        m35 = lc;
    }if(mc > 2){
        m48 = 2;
        m36 = mc - 3;
    }else{
        m48 = 0;
        m36 = mc;
    }if(zwz > 1){
        sound = 1;
        vipexp = zwz - 2;
    }else{
        sound = 0;
        vipexp = zwz;
    }if(ac > 2){
        h2 = 2;
        h1 = ac - 3;
    }else{
        h2 = 0;
        h1 = ac;
    }if(bc > 2){
        h4 = 2;
        h3 = bc - 3;
    }else{
        h4 = 0;
        h3 = bc;
    }if(cc > 2){
        h6 = 2;
        h5 = cc - 3;
    }else{
        h6 = 0;
        h5 = cc;
    }if(dc > 2){
        h8 = 2;
        h7 = dc - 3;
    }else{
        h8 = 0;
        h7 = dc;
    }if(ec > 2){
        h10 = 2;
        h9 = ec - 3;
    }else{
        h10 = 0;
        h9 = ec;
    }if(fc > 2){
        h12 = 2;
        h11 = fc - 3;
    }else{
        h12 = 0;
        h11 = fc;
    }if(gc > 2){
        h14 = 2;
        h13 = gc - 3;
    }else{
        h14 = 0;
        h13 = gc;
    }if(nc > 2){
        h16 = 2;
        h15 = nc - 3;
    }else{
        h16 = 0;
        h15 = nc;
    }if(oc > 2){
        h18 = 2;
        h17 = oc - 3;
    }else{
        h18 = 0;
        h17 = oc;
    }if(pc > 2){
        h20 = 2;
        h19 = pc - 3;
    }else{
        h20 = 0;
        h19 = pc;
    }if(qc > 2){
        h22 = 2;
        h21 = qc - 3;
    }else{
        h22 = 0;
        h21 = qc;
    }if(rc > 2){
        h24 = 2;
        h23 = rc - 3;
    }else{
        h24 = 0;
        h23 = rc;
    }if(sc > 2){
        h26 = 2;
        h25 = sc - 3;
    }else{
        h26 = 0;
        h25 = sc;
    }if(tc > 2){
        h28 = 2;
        h27 = tc - 3;
    }else{
        h28 = 0;
        h27 = tc;
    }if(uc > 2){
        h30 = 2;
        h29 = uc - 3;
    }else{
        h30 = 0;
        h29 = uc;
    }if(vc > 2){
        m42 = 2;
        m41 = vc - 3;
    }else{
        m42 = 0;
        m41 = vc;
    }parseMInfo();
    gettr();
    if(getChecked("icb1") && isadmin(currentid)){
        ishidden = true;
        setChecked("icb2", true);
    }else{
        ishidden = false;
        setChecked("icb2", false);
    }if(vipst != 2 && !vipexp){
        estt = thv;
        setT("text_area75", ["👑 Expired", "👑已过期", ""]);
        sIurl("image38", "assets/iapia.png");
        setT("text_area105", ["Resubscribe to regain access to 👑 avatar, themes, and benefits.","重新订阅来重访👑头像，主题，和更多特权。", ""]);
        fadeIn(["button176", "text_area74", "text_area105", "text_area75","image38"]);
        emoji = emv;
        vipexp = 1;
        update();
        setTheme();
    }if(isfest != 0 && fxx){
        setHoli();
    }else{
        setTheme();
    }if(sound){
        showElement("button85");
        hideElement("button90");
    }else{
        showElement("button90");
        hideElement("button85");
    }switch (lang){
        case 0:setEng();
            break;
        case 1:setChi();
            break;
        case 2:
            break;
    }setTex(["emoji","emo", "LL4"], emoji);
    setT("logintext", ["Querying online database.\nIf this took more than 5 seconds check your internet connection.", "正在查询数据库。\n如果此操作超过了5秒，请检查您的网络连接。", ""]);
    setT("text_area63", ["Tap to show User ID", "点击以显示用户ID", ""]);
    hideE(["aYes", "No", "text_area78", "auto", "text_area99", "text_area100", "version","icb1"]);
    checkMessage(true);
    if(lbh > 0){
      switch(lang){
        case 0:var xca = prompt("Dear User:\n\nYou have been delisted from Leaderboard and barred from online events due to suspicious activity.\n\nIf you feel that the actions are not justified, please send a feedback regarding the matter.\n\nThis is an automated message, do not reply.");break;
        case 1:var xca = prompt("亲爱的用户：\n\n由于可疑活动，您的分数已被排行榜隐藏，并且无法参与联网活动。\n\n如您觉得这些措施有失公允，请就该问题提交反馈。\n\n这是条自动化消息，请不要回复。");break;
        case 2:var xca = prompt();break;
    }}getKeyValue("banned", function(value){
        validateJSON(value, "parse key-b");
        value = JSON.parse(value);
        for(var i = 0; i < value.length; i++){
            if(value[i].UID == currentid || value[i].UID == getUserId()){
                ban = value[i].l;
                if(ban != 0){
                    var time = new Date(value[i].e*1000);
                    var month = time.getMonth() + 1;
                    var expir = Math.round(getTime()/1000) > value[i].e;
                    if(ban !== 1 && !expir){
                      setT("text_area75", ["Banned", "被封禁", ""]);
                      setT("text_area105", ["Until " + time.toUTCString() + "\nReason:\n" + value[i].r.split("").reverse().join(""), "解封：\n" + time.toUTCString() + "\n原因：\n" + value[i].r.split("").reverse().join(""), ""]);
                      showE(["button176", "text_area178", "text_area105", "text_area75"]);
                      changeScreen("screen2");
                      switch(lang){
                        case 0:var xca = prompt("Dear User:\n\nYour account has been banned.\n\nDetails will be available once you continue.\n\nIf you feel that the action is not justified, please send a feedback regarding the matter to mtngckover@gmail.com.\n\nThis is an automated message, do not reply.");break;
                        case 1:var xca = prompt("亲爱的用户：\n\n您已被封禁。\n\n点击继续后可查看详情。\n\n如您觉得措施有失公允，请就该问题向mtngckover@gmail.com提交反馈。\n\n这是条自动化消息，请不要回复。");break;
                        case 2:var xca = prompt();break;
                      }setTimeout(function(){throw new Error("banned.")}, 5000);
                    }else if(!expir){
                      setT("text_area75", ["Muted", "被静音", ""]);
                      setT("text_area105", ["You cannot submit feedback message until " + time.toUTCString() + "\nReason:\n" + value[i].r.split("").reverse().join(""), "你无法提交反馈信息。解封时间：\n" + time.toUTCString() + "\n原因：\n" + value[i].r.split("").reverse().join(""), ""]);
                      showE(["button176", "text_area74", "text_area105", "text_area75"]);
                      break;
    }}}}});hideE(["barrier", "logintext"]);
        checkach();
        update();
        stopTimedLoop(cz);
        getFame(false);
        if(currentid != -1 && userID != "Guest" && task.num == 7){
            uploadtask(1);
        }if(!ftueflag[0]){
            doTutorial(0);
        }else{
            changeScreen("screen2");
        }setPosition("text_area100", 305, 415, 3300, 30);   
});
function checkMessage(first){
    var tttt = false;
    if(first){
        readRecords("\x66\x65\x65\x64\x62\x61\x63\x6B", {}, function(value){
            if(value[value.length-1].id > 19999){
                doFullRecord("feedback");
            }for(var j = 0; j < value.length; j++){
                if((value[j].UID == userID && value[j].re != "nor") || (value[j].UID == currentid && value[j].log == "")){
                    if(value[j].ca == "le"){
                        var seaso = value[j].me.substring(0, value[j].me.indexOf("$"));
                        var position = value[j].me.substring(value[j].me.indexOf("$") + 1, value[j].me.indexOf("#"));
                        var rank = value[j].me.substring(value[j].me.indexOf("#") + 1, value[j].me.length);
                        var ttm = Math.floor(rank*10);
                        if(ttm < 0){
                            ttm = 0;
                        }else if(ttm > 9){
                            ttm = 9;
                        }var ticr = rewardtable[leaguerank][ttm];
                        ols += (ttm+1) * 50;
                        changeTicket(ticr);
                        if(position == 0){
                            if(leaguerank > 0){
                                leaguerank--;
                            }var rrank = 6 - Math.ceil((leaguerank + 1)/2);
                            var rs = leaguerank % 2;
                            if(rs){
                                rs = "+";
                            }else{
                                rs = "-";
                            }switch(lang){
                                case 0: input = prompt("League season "+seaso+" has concluded. You finished at the bottom, and is therefore demoted to rank "+rrank+rs+".\n\nYou are rewarded "+ticr+ " 🎟️ for your effort, good luck this season!\n\nThis is an automated message, do not reply.");
                                break;
                                case 1: input = prompt("排位赛赛季"+seaso+"已结束。你位于排行榜下位，排位被后退至"+rrank+rs+"级。\n\n你获得了"+ticr+"🎟️。这个赛季好运！");
                                break;
                                case 2:
                                break;
                        }}else if(position == 1){
                            switch(lang){
                                case 0: input = prompt("League season "+seaso+" has concluded. You finished at the middle. Therefore, your rank did not change.\n\nYou are rewarded "+ticr+" 🎟️ for your effort, good luck this season!\n\nThis is an automated message, do not reply.");
                                break;
                                case 1: input = prompt("排位赛赛季"+seaso+"已结束。你位于排行榜中位，排位没有变动。\n\n你获得了"+ticr+"🎟️。这个赛季好运！");
                                break;
                                case 2:
                                break;
                        }}else if(position == 2){
                            if(leaguerank < 9){
                                leaguerank++;
                                if(leaguerank > highrank){
                                    highrank = leaguerank;
                            }}var rrank = 6 - Math.ceil((leaguerank + 1)/2);
                            var rs = leaguerank % 2;
                            if(rs){
                                rs = "+";
                            }else{
                                rs = "-";
                            }switch(lang){
                                case 0: input = prompt("Congratulations!\n\nLeague season "+seaso+" has concluded. You finished at the top, and is therefore promoted to rank "+rrank+rs+".\n\nYou are rewarded "+ticr+ " 🎟️ for your effort, good luck this season!\n\nThis is an automated message, do not reply.");
                                break;
                                case 1: input = prompt("祝贺！\n\n排位赛赛季"+seaso+"已结束。你位于排行榜上位，排位被晋级至"+rrank+rs+"级。\n\n你获得了"+ticr+"🎟️。这个赛季好运！");
                                break;
                                case 2:
                                break;
                        }}gettr();
                        update();
                        processLeagueLB(true);
                        deleteRecord("\x66\x65\x65\x64\x62\x61\x63\x6B", value[j], function(){});
                    }else{
                        hasmessage = true;
                        hideElement("mail");
                        showElement("mailyes");
                        tttt = true;
                        msgque.push(value[j]);
            }}}if(!tttt){
                hasmessage = false;
                showElement("mail");
                hideElement("mailyes");
    }});autoenroll(currentid, emoji, vit, leaguerank, 0);
}else{
        if(msgque.length > 0){
            hasmessage = true;
            hideElement("mail");
            showElement("mailyes");
        }else{
            hasmessage = false;
            showElement("mail");
            hideElement("mailyes");
}}}
onEvent("bYes","click",function(){
    playS(7);
    if(userID != "Guest"){
        resetsave();
    }if(pdata[0] == 0){
        pdata[0]++;
    }var temp = {};
    havebeat = false;
    setT("logintext", ["Querying online database.\nIf this took more than 5 seconds check your internet connection.", "正在查询数据库。\n如果此操作超过了5秒，请检查您的网络连接。", ""]);
    hideE(["bYes", "No", "mailyes"]);
    var ec = flgs;              var bc = specialbadgeone;           var ac = specialbadgetwo;           var cc = m37;
    var dc = m38;               var fc = m39;                       var gc = m40;                       var hc = m31;
    var ic = m32;               var jc = m33;                       var kc = m34;                       var lc = m35;
    var mc = m36;               var nc = h1;                        var oc = h3;                        var pc = h5;
    var qc = h7;                var rc = h9;                        var sc = h11;                       var tc = h13;
    var uc = h15;               var vc = h17;                       var wc = h19;                       var xc = h21;
    var yc = h23;               var zc = h25;                       var dd = h27;                       var ed = h29;
    var fd = m41;               var ftue = [];                      var zwz = vipexp;
    for(var i = 0; i < 14; i+=2){
        if(ftueflag[i] && ftueflag[i+1]){
            ftue.push(5);
        }else if(!ftueflag[i] && !ftueflag[i+1]){
            ftue.push(0);
        }else if(ftueflag[i]){
            ftue.push(2);
        }else{
            ftue.push(3);
    }}if(sound){ zwz += 2;
    }if(h2){nc += 3;
    }if(h4){oc += 3;
    }if(h6){pc += 3;
    }if(h8){qc += 3;
    }if(h10){rc += 3;
    }if(h12){sc += 3;
    }if(h14){tc += 3;
    }if(h16){uc += 3;
    }if(h18){vc += 3;
    }if(h20){wc += 3;
    }if(h22){xc += 3;
    }if(h24){yc += 3;
    }if(h26){zc += 3;
    }if(h28){dd += 3;
    }if(h30){ed += 3;
    }if(m42){fd += 3;
    }if(echip){ec += 10;
    }if(specialbadge3){bc += 3;
    }if(specialbadge4){ac += 3;
    }if(trone){cc += 3;
    }if(trtwo){dc += 3;
    }if(resv1){fc += 3;
    }if(resv2){gc += 3;
    }if(m43){hc += 3;
    }if(m44){ic += 3;
    }if(m45){jc += 3;
    }if(m46){kc += 3;
    }if(m47){lc += 3;
    }if(m48){mc += 3;
    }temp.UID = getText("text_input1");                 temp.rst = rst;                     temp.da = JSON.stringify(temp.da);
    temp.lo = Math.round(getTime()/1000);               userID = temp.UID;                  temp.chm = chm;
    temp.da = [zwz,nc,oc,pc,qc,rc,sc,tc,uc,vc,wc,xc,yc,zc,dd,ed,hc,ic,jc,kc,lc,mc,bc,ac,cc,dc,fc,gc,fd];
    temp.olw = olw;                                     temp.day =dayed;                    temp.wyc = wyc;
    temp.dm = dmeee;                                    temp.wxc = wxc;                     temp.wzc = wzc;
    temp.pst = pst;                                     temp.nto = nto;                     temp.aa = JSON.stringify(aa);
    temp.iap = pay;                                     temp.vit = vit;                     temp.lbh = lbh;
    temp.tis = playTime;                                temp.exp = exp;                     temp.oj = onejack;
    temp.cur = account;                                 temp.osp = onespin;                 temp.ost = onestreak;
    temp.tsp = twospin;                                 temp.tg = twoguess;                 temp.fbt = fourbet;
    temp.tsr = twostreak;                               temp.ttr = thrtry;                  temp.ts = ttreak;                                   
    temp.fsp = fourspec;                                temp.fst = fourstreak;              temp.sg = sixgold;
    temp.isc = fivescrat;                               temp.im = fivemega;                 temp.ist = fivestreak;                              
    temp.rg = thrguess;                                 temp.ssp = sixspin;                 temp.str = sevstreak;
    temp.sa = sixstreak;                                temp.vr = sevthrow;                 temp.sec = sevspec;                                 
    temp.ebt = eigbet;                                  temp.edb = eigdouble;               temp.wr = winrand;
    temp.egs = eigstreak;                               temp.ta = timeAward;                temp.lg = 1;
    temp.wg = wager;                                    temp.lx = lastclaim;                temp.mt = mtt;
    temp.oa = tttim;                                    temp.L = lang;                      temp.T = estt;
    temp.fl = ec;                                       temp.tk = ticket;                   temp.adv = adv;
    temp.ssw = ssw;                                     temp.ltd = ltd;                     temp.twj = twj;
    temp.tsj = tsj;                                     temp.tgp = tgp;                     temp.elo = eloscore;
    temp.fxx = fxx;                                     temp.ji = emoji;                    temp.avl = avl;
    temp.CID = getUserId();                             temp.bo = "[]";                     temp.pka = pka;
    temp.ft = JSON.stringify(ftue);                     temp.lr = leaguerank;               temp.hr = highrank;
    temp.pkb = pkb;                                     temp.pkc = pkc;                     temp.gft = Math.floor(getTime()/86400000) + 3;
    temp.dms = dms;                                     temp.dmz = dmz;                     temp.lc = Math.round(chatTime/1000);
    temp.tv = thv;                                      temp.ev = emv;
    var diff = Math.ceil((vit - ztime)/86400000);
    showElement("mail");
    parseMInfo();
    autoenroll(currentid, emoji, vit, leaguerank, 0);
    createRecord("\x70\x72\x6F\x67\x72\x65\x73\x73", temp, function(record){
        currentid = record.id;
        if(!ftueflag[0]){
            doTutorial(0);
            ftuesetup = 1;
        }else{
            doftuetwo(1);
}})});
function autoenroll(idsd, emoj, vt, rnk, amt){
    if(currentid != -1 && userID != "Guest"){
        readRecords("league", {}, function(val){
            leaguedata = val[val.length - 1];
            var match = false;
            validateJSON(leaguedata.pid, "auto league sender");
            ppl = JSON.parse(leaguedata.pid);
            for(var k = 0; k < ppl.length; k++){
                if(ppl[k] == idsd){
                    match = true;
                    break;
            }}if(!match){
                validateJSON(leaguedata.emo, "auto league avatar");
                validateJSON(leaguedata.amt, "auto league amt");
                validateJSON(leaguedata.vit, "auto league vit");
                validateJSON(leaguedata.rk, "auto league rank");
                var emor = JSON.parse(leaguedata.emo);
                var amtr = JSON.parse(leaguedata.amt);
                var vitr = JSON.parse(leaguedata.vit);
                var rkr = JSON.parse(leaguedata.rk);
                ppl.push(idsd);
                emor.push(emoj);
                amtr.push(amt);
                vitr.push(vt);
                rkr.push(rnk);
                leaguedata.pid = JSON.stringify(ppl);
                leaguedata.emo = JSON.stringify(emor);
                leaguedata.amt = JSON.stringify(amtr);
                leaguedata.vit = JSON.stringify(vitr);
                leaguedata.rk = JSON.stringify(rkr);
                updateRecord("league", leaguedata, function(val){
                    leaguedata = val;
                    processLeagueLB(false);
});}});}}
function doftuetwo(val){
    if(val == 1){
        hideE(["bYes", "No", "barrier", "logintext", "text_area78", "auto", "text_area99", "text_area100", "version"]);
        setT("text_area63", ["Tap to show User ID", "点击以显示用户ID", ""]);
        setTex(["emoji","emo", "LL4"], emoji);
        retriv();
        setimage(["tr2", "tr1", "iap"], "assets/q.png");
        stopTimedLoop(cz);
        changeScreen("screen2");
        setPosition("text_area100", 305, 415, 3300, 30);
    }else if(val == 2){
        playS(0);
        hideE(["text_area16", "barrrrr", "text_area100", "version"]);
        setT("text_area63", ["Guest", "Guest", ""]);
        changeScreen("screen2");
        readRecords("\x70\x72\x6F\x67\x72\x65\x73\x73", {}, function(value){
            getOL(value);
            getLB(value, false);
            stopTimedLoop(cz);
            setPosition("text_area100", 305, 415, 3300, 30);
    })}else{
        changeScreen("screen2");
}}
function resetsave(val){
    ticket = 23;
    emoji = emv = "🤑";
    eloscore = 1000;
    account = 80000;
    blocked = [];
    wager = 100;
    accountstring = "80,000";
    ticketstring = "23";
    ftueflag = [0,0,0,0,0,0,0,0,0,0,0,0];
    aa = [0,1,2,0,0,0];
    userID = "Guest";
    if(val){
        return;
    }currentid = vit = -1;
    login = estt = sound = 1;
    gft = Math.floor(getTime()/86400000) + 3;
    leaguerank = highrank =chatTime=vipexp=highrank=vipst=m43=m44=m45=m46=m47=m48=havebeat=wxc=wyc=wzc=pka=ishidden=dmz=pkb=pkc=dms=h1=echip=sseflag=specialbadge4=specialbadge3=trone=trtwo=resv1=resv2=dmeee=m37=m38=m39=m40=m42 =m41= dayed = olw = chm = ols =randomstreak = pvpstreak = rst = pst = nto = avl = pay = vipst = lang = ltd = lbh = adv = fxx = twj = tsj = tgp = sevstreak = flgs = tttim = m31 = m32 = m33 = m34 = m35 = m36 = mtt = lastclaim = waf = ssw = hasmessage = h2 = h3 = h4 = h5 = h6 = wam = war = leaguerank = highrank = h7 = h8 = h9 = h10 = h11 = h12 = h13 = h14 = h15 = h16 = h17 = h18 = h19 = h20 = h21 = h22 = h23 = h24 = h25 = h27 = h28 = h29 = h30 = playTime = specialbadgeone = specialbadgetwo = exp = onespin = onejack = onestreak = twospin = twoguess = twostreak = thrtry = ttreak = fourbet = fourspec = fourstreak = fivescrat = fivemega = fivestreak = thrguess = sixspin = sixgold = sixstreak = sevthrow = sevspec = eigbet = eigbet = eigdouble = eigstreak = winrand = timeAward = h26 = ban = 0;
    hideElement("mail");
    setChecked("icb1", false);
    setChecked("icb2", false);
    showElement("mailyes");
    setCas();
}
function update(val){
    if(getText("text_area63") != "Guest"){
        setT("text_area63", ["Tap to show User ID", "点击以显示用户ID", ""]);
    }if(!coodown && currentid != -1 && userID != "Guest" && !coo){
        coodown = 1;
        hideE(["guest", "login"]);
        showE(loadingicon);
        if(val == 9){
            updateProfile(0,0,9);
        }else{
            updateProfile(0, 0);
}}}
function updateProfile(val, val2, val3){
    var bc = specialbadgeone;           var gc = m40;           var cc = m37;           var dc = m38;               var hc = m31;
    var ac = specialbadgetwo;           var fc = m39;           var ec = flgs;          var kc = m34;               var lc = m35;
    var ic = m32;                       var jc = m33;           var zwz = vipexp;       var ftue = [];              var fd = m41; 
    var mc = m36;                       var wag = wager;        var nc = h1;            var oc = h3;                var ed = h29; 
    var pc = h5;                        var qc = h7;            var rc = h9;            var sc = h11;               var dd = h27;
    var tc = h13;                       var uc = h15;           var vc = h17;           var wc = h19;               var zc = h25;
    var xc = h21;                       var yc = h23;                  
    for(var i = 0; i < 14; i+=2){
        if(ftueflag[i] && ftueflag[i+1]){
            ftue.push(5);
        }else if(!ftueflag[i] && !ftueflag[i+1]){
            ftue.push(0);
        }else if(ftueflag[i]){
            ftue.push(2);
        }else{
            ftue.push(3);
    }}if(ispvp && pvpwager != 0){
        wag = pvpwager;
    }else if(currentScreen == "screen3" || currentScreen == "crap" || val3){
        wag = wager*10;
    }if(sound){zwz += 2;
    }if(echip){ec += 10;
    }if(specialbadge3){bc += 3;
    }if(specialbadge4){ac += 3;
    }if(trone){cc += 3;
    }if(trtwo){dc += 3;
    }if(resv1){fc += 3;
    }if(resv2){gc += 3;
    }if(m43){hc += 3;
    }if(m44){ic += 3;
    }if(m45){jc += 3;
    }if(m46){kc += 3;
    }if(m47){lc += 3;
    }if(m48){mc += 3;
    }if(h2){nc += 3;
    }if(h4){oc += 3;
    }if(h6){pc += 3;
    }if(h8){qc += 3;
    }if(h10){rc += 3;
    }if(h12){sc += 3;
    }if(h14){tc += 3;
    }if(h16){uc += 3;
    }if(h18){vc += 3;
    }if(h20){wc += 3;
    }if(h22){xc += 3;
    }if(h24){yc += 3;
    }if(h26){zc += 3;
    }if(h28){dd += 3;
    }if(h30){ed += 3;
    }if(m40){fd += 3;
    }var dataT = JSON.stringify([zwz,nc,oc,pc,qc,rc,sc,tc,uc,vc,wc,xc,yc,zc,dd,ed,hc,ic,jc,kc,lc,mc,bc,ac,cc,dc,fc,gc,fd]);
    var tio = Math.round(getTime()/1000);
    if(isadmin(currentid) && ishidden){
        tio = -1;
    }checkach();
    setTimeout(function(){checkI();
    }, 1000);
    updateRecord("\x70\x72\x6F\x67\x72\x65\x73\x73", {
        id: currentid,              UID: userID,                tis: playTime,               da: dataT,                      exp: exp,
        cur: account,               osp: onespin,               oj: onejack,                 ost: onestreak,                 tsp: twospin,               
        tg: twoguess,               tsr: twostreak,             ttr: thrtry,                 ts: ttreak,                     fbt: fourbet,
        fsp: fourspec,              fst: fourstreak,            isc: fivescrat,              im: fivemega,                   ist: fivestreak,
        rg: thrguess,               ssp: sixspin,               sg: sixgold,                 sa: sixstreak,                  vr: sevthrow,
        sec: sevspec,               str: sevstreak,             ebt: eigbet,                 edb: eigdouble,                 egs: eigstreak,
        lg: login,                  wr: winrand,                ta: timeAward,               wg: wag,                        lx: lastclaim,
        oa: tttim,                  L: lang,                    T: estt,                     mt: mtt,                        fl: ec,
        tk: ticket,                 ssw: ssw,                   ltd: ltd,                    adv: adv,                       twj: twj,
        tsj: tsj,                   tgp: tgp,                   fxx: fxx,                    ji: emoji,                      vit: vit,
        nto: nto,                   pst: pst,                   rst: rst,                    iap:pay,                        lo: tio,
        CID: getUserId(),           avl: avl,                   lbh:lbh,                     bo:JSON.stringify(blocked),     ols:ols,
        chm:chm,                    olw:olw,                    dm:dmeee,                    aa:JSON.stringify(aa),          day:dayed,
        wxc:wxc,                    wyc:wyc,                    wzc:wzc,                     ft:JSON.stringify(ftue),        elo:eloscore,
        lr:leaguerank,              hr:highrank,                pka:pka,                     pkb:pkb,                        pkc:pkc,
        dms:dms,                    dmz:dmz,                    gft:gft,                     lc:Math.round(chatTime/1000),   tv:thv,
        ev:emv
    }, function(){
        switch(val){
            case 0: fadeOut(loadingicon);
            fadeIn(["guest", "login"]);
            setTimeout(function(){coodown = 0;
            }, 1500);
                break;
            case 1: hideE(["text_area136", "text_area137", "button222", "button221", "text_area134", "text_area133", "button216", "button217", "button219", "button218", "button220"]);
            changeScreen("screen2");
            checkach();
            playS(5);
                break;
            case 2: fadeOut(["text_area160", "text_area155"]);
            validateJSON(seasons.se, "update seasons sender");
            validateJSON(seasons.in, "update seasons invest");
            seasons.se = JSON.parse(seasons.se);
            seasons.in = JSON.parse(seasons.in);
            getData(val2);
            var total = 0;
            for(var i = 0; i < seasons.se.length; i++){
                total += seasons.in[i];
                    if(seasons.se[i] == currentid){
                    inv = seasons.in[i];
            }}total += seasons.wa;
            setText("text_area153", total + " 🎟️");
            playS(7);
                break;
                case 3:
                break;
                case 4: setT("text_area211",["Upload complete.","上传完成。",""]);
                break;
                case 5: echip = true;
                sIurl("reserve2", "assets/goldtoken.png");
                setT("text_area176", ["Purchase successful!", "购买成功！", ""]);
                break;
}})}
onEvent("text_area63","click",function(){
    playS(10);
    if(getText("text_area63") == "Tap to show User ID" || getText("text_area63") == "点击以显示用户ID"){
        setText("text_area63", userID);
    }else if(getText("text_area63") != "Guest"){
        setT("text_area63", ["Tap to show User ID", "点击以显示用户ID", ""]);
}});
onEvent("button116","click",function(){
    playS(7);
    changeScreen("screen6");
});
onEvent("button143","click",function(){
    playS(5);
    changeScreen("welcome");
});
onEvent("dropdown1", "change", function(){
    hideElement("button205");
    var text = getText("dropdown1");
    if(text == "Select..."){
        setText("text_area56", "Please report bugs and suggestions here.\nThe developer might reply your message.");
    }else if(text == "Bugs"){
        setText("text_area56", "Include details such as where and how to trigger the bug, so that the developer can fix it faster.");
    }else if(text == "Questions"){
        setText("text_area56", "App and game-related questions are welcomed.");
    }else if(text == "Suggestions"){
        setText("text_area56", "The app is complete, so no new games. Other suggestions are welcomed, though.");
    }else if(text == "Typo or grammar"){
        setText("text_area56", "Pardon my English. Tell me where it is and I'll fix it.");
    }else if(text == "Report"){
        setText("text_area56", "Please include the player number / Ad Serial / broken link in question.");
    }else if(text == "Others"){
        setText("text_area56", "I'm very curious what this 'Others' is going to be.");
    }else if(text == "Promotion"){
        fadeIn(["text_area103", "text_area104", "button205"]);
        setText("text_area56", "Please Include your Applab/Gamelab project URL, email address, and remember to check the messages. Read the TERMS carefully.");
}});
onEvent("dropdown2", "change", function(){
    hideElement("button205");
    var text = getText("dropdown2");
    if(text == "选择一个类别"){
        setText("text_area117", "请在这里汇报游戏错误和建议。\n开发者可能会回复你的消息。");
    }else if(text == "游戏错误"){
        setText("text_area117", "请包括细节，比如在哪里和如何触发错误，以便开发者更快的修复。");
    }else if(text == "问题"){
        setText("text_area117", "欢迎程序和游戏相关问题。");
    }else if(text == "建议"){
        setText("text_area117", "程序已完工，所以没有新游戏了。欢迎其他建议。");
    }else if(text == "拼写或语法"){
        setText("text_area117", "见拙了。告诉我错误在哪里，我会改正它。");
    }else if(text == "举报"){
        setText("text_area117", "请包括有问题的用户ID / 广告ID / 失效链接。");
    }else if(text == "其他"){
        setText("text_area117", "我很好奇这个‘其他’会是什么。");
    }else if(text == "推广"){
        fadeIn(["text_area103", "text_area104", "button205"]);
        setText("text_area117", "请包括你的AppLab/GameLab URL和电子邮箱，并记得查看开发者回复。仔细阅读条款。");
}});
onEvent("button145","click",function(){
    var txt = getText("text_area57");
    var cate;
    switch (lang){
        case 0:cate = getText("dropdown1");
            break;
        case 1:cate = getText("dropdown2");
            break;
        case 2:cate = getText("dropdown3");
            break;
    }if(txt.length < 18){
        setText("text_area117", "反馈太短，无法提交。");
        setText("text_area56", "Feedback too short, cannot submit.");
        playS(2);
        return;
    }if(hasf){
        setT("text_area56", ["To prevent spam, please refresh the page\nbefore submiting a new feedback.", "为防垃圾邮件，请在刷新页面后提交新反馈。", ""]);
        playS(2);
        return;
    }if(cate == "Select..." || cate == "选择一个类别"){
        setText("text_area56", "Select a category.");
        setText("text_area117", "选择一个类别");
        playS(2);
        return;
    }if(ban == 1){
        setText("text_area56", "Applab error: Cannot access cloud storage. Permission Denied HTTP code 403.");
        setText("text_area117", "Applab 错误：无法访问云存储。\n权限被拒绝 HTTP 代码403。");
        playS(2);
        return;
    }hasf = true;
    var com = {};                       com.UID = userID;                       com.CID = getUserId();
    com.log = "";                       com.me = txt;                           com.re = "nor";
    com.ca = cate;                      com.hi = 0;
    hideE(["button145", "button143"]);
    setText("text_area117", "正在提交。如果此操作超过了5秒请检查你的网络连接。");
    setText("text_area56", "Submitting... If this took more than 5 seconds check your internet connection.");
    createRecord("\x66\x65\x65\x64\x62\x61\x63\x6B", com, function(){
        fadeIn(["button145", "button143"]);
        setText("text_area117", "你的反馈已被记录。\n谢谢。");
        setText("text_area56", "Your feedback has been recorded.\nThank you.");
})});
onEvent("mail","click",function(){
    playS(13);
    sIurl("image38", "assets/nomail.png");
    setT("text_area75", ["Inbox", "收件箱", ""]);
    setT("text_area105", ["You have no message right now.","现在没有消息。", ""]);
    fadeIn(["button176", "text_area74", "text_area105", "text_area75","image38"]);
});
onEvent("mailyes","click",function(){
    messaging = msgque[0];
    msgque.shift();
    playS(9);
    hideElement("mailyes");
    showElement("mail");
    var input;
    if(currentid == -1 || userID == "Guest"){
        switch (lang){
            case 0:input = prompt("You are playing as Guest.\n\nThe following functions are unavailable: Cloud save, leaderboard and AceTrail competition, sweepstakes, taskmaster, log-in lotto, league, casino cinema, mission token, feedback, PVP Arena, Chat, Daily Mission, CDK, and VIP.\n\nRegister a User ID to preserve your Guest progress and enjoy the full game!\n\nThis is an automated message, do not reply.");
                break;
            case 1:input = prompt("你在以游客身份游玩。\n\n以下功能不可用：云端存档，排行榜和高分比赛，抽奖，任务达人，登录彩券，排位赛，赌场影院，任务代币，反馈，PVP竞技场，聊天，每日任务，CDK，VIP。\n\n现在注册用户ID以保存你的游客进度并享受完整的游戏!\n\n这是条自动化消息，请不要回复。");
                break;
            case 2:
                break;
        }return;
    }if(messaging.ca == "au"){
        var gameBeat = messaging.me.substring(0, messaging.me.indexOf("|"));
        var beatID = messaging.me.substring(messaging.me.indexOf("|") + 1, messaging.me.length);
        switch (lang){
            case 0:input = prompt("Hi!\n\nUnfortunately, your global high score for " + games[gameBeat] + " have been beaten by Player " + beatID + ". Retake the highscore and prove that you will always be the best!\n\nThis is an automated message, do not reply.");
                break;
            case 1:input = prompt("你好！\n\n很不幸，原本属于你的" + gamesa[gameBeat] + " 全球高分被玩家" + beatID + "夺走了. 重新夺回全球高分来证明你是最厉害的！\n\n这是条自动化消息，请不要回复。");
                break;
            case 2:
                break;
    }}else if(messaging.ca == "sw"){
        var serial = messaging.me.substring(0, messaging.me.indexOf("$"));
        var season = messaging.me.substring(messaging.me.indexOf("$") + 1, messaging.me.indexOf("%"));
        var win = messaging.me.substring(messaging.me.indexOf("%") + 1, messaging.me.length);
        if(serial != currentid){
            pst += 10;
            switch (lang){
                case 0:input = prompt("Sweepstake season " + season + " has concluded. The winner was Player " + serial + ". Better luck next time!\n\nThis is an automated message, do not reply.");
                    break;
                case 1:input = prompt("抽奖赛季" + season + "结束了。赢家是玩家" + serial + "。下次好运！\n\n这是条自动化消息，请不要回复。");
                    break;
                case 2:
                    break;
    }}else{
        changeTicket(parseInt(win));
        log("za", parseInt(win));
        ssw++;
        nto+=100;
        update();
        switch (lang){
            case 0:input = prompt("Congratulation! You won Sweepstake season " + season + "! Your account is accredited " + win + " 🎟️. Try your luck in this season!\n\nThis is an automated message, do not reply.");
                break;
            case 1:input = prompt("祝贺！你赢得了抽奖赛季" + season + "！你获得了" + win + "🎟️。在这个赛季里试试运气吧！\n\n这是条自动化消息，请不要回复。");
                break;
            case 2:
                break;
    }}}else if(messaging.ca == "ELO"){
        var timestamp = messaging.me.substring(0, messaging.me.indexOf("$"));
        var amount = messaging.me.substring(messaging.me.indexOf("$") + 1, messaging.me.length);
        eloscore += parseInt(amount);
        var t = new Date(parseInt(timestamp));
        var month = t.getMonth() + 1;
        var ti = t.getFullYear() + "-" + month + "-" + t.getDate();
            switch (lang){
                case 0:input = prompt("Rage quitting from competitive PVP matches is not tolerated.\n\nYou quitted a PVP match on "+ti+", which resulted in a penalty of "+amount+" ELO score.\n\nPlease, do not rage quit.\n\nThis is an automated message, do not reply.");
                    break;
                case 1:input = prompt("恶意退出PVP竞赛的行为不会被容忍。\n\n你在"+ti+"退出了一场PVP竞赛，导致了"+amount+"ELO点数的惩罚。请不要恶意退出。\n\n这是条自动化消息，请不要回复。");
                    break;
                case 2:
                    break;
    }}else if(messaging.ca == "ta"){
        var serial = messaging.me.substring(0, messaging.me.indexOf("$"));
        var season = messaging.me.substring(messaging.me.indexOf("$") + 1, messaging.me.indexOf("^"));
        var win = messaging.me.substring(messaging.me.indexOf("^") + 1, messaging.me.length);
        if(serial == "0%"){
            switch (lang){
                case 0:input = prompt("Taskmaster season " + season + " has concluded. The task was not completed. Better luck next time!\n\nThis is an automated message, do not reply.");
                    break;
                case 1:input = prompt("任务达人赛季" + season + "结束了。任务没有被完成。下次好运！\n\n这是条自动化消息，请不要回复。");
                    break;
                case 2:
                    break;
        }}else{
            changeTicket(parseInt(win));
            ols+=parseInt(win)*10;
            log("za", parseInt(win));
            update();
            switch (lang){
                case 0:input = prompt("Congratulation! Taskmaster season " + season + " is completed! Your account is accredited " + win + " 🎟️ based on " + serial + " of relative contribution. Try your luck in this season!\n\nThis is an automated message, do not reply.");
                    break;
                case 1:input = prompt("祝贺！任务达人赛季" + season + "已完成！！基于" + serial + "的相对参与，你获得了" + win + "🎟️。在这个赛季里试试运气吧！\n\n这是条自动化消息，请不要回复。");
                    break;
                case 2:
                    break;
    }}}else if(messaging.ca == "gi"){
        var serial = parseInt(messaging.me.substring(0, messaging.me.indexOf("%")));
        var season = parseInt(messaging.me.substring(messaging.me.indexOf("%") + 1, messaging.me.length));
        changeAccount(drink[season].b);
        setText("text_area31", accountstring);
        sIurl("image38", "assets/dri"+season+".png");
        setT("text_area75", ["A Gift", "一份礼物", ""]);
        setT("text_area105", ["Player "+serial+" have gifted you a beverage! You've received "+drink[season].b+" Credits. Don't forget to gift back!","玩家"+serial+"向你赠送了一份饮品！你获得了"+drink[season].b+"点数。别忘了回赠哟！", ""]);
        fadeIn(["button176", "text_area74", "text_area105", "text_area75","image38"]);
    }else if(messaging.ca == "mt"){
        mtt++;
        update();
        sIurl("image38", "assets/tokens.png");
        setT("text_area75", ["A Gift", "一份礼物", ""]);
        setT("text_area105", ["You've received 1 mission token from the developer.","你获得了来自开发者的一个任务代币。", ""]);
        fadeIn(["button176", "text_area74", "text_area105", "text_area75","image38"]);
    }else if(messaging.ca == "vi"){
        var gap = "";
        if(messaging.me > 1){
          gap = "s";  
        }var time = messaging.me * 8.64e+7;
        var a = ztime+time;
        var b = vit + time;
        log("vpp", messaging.me);
        if(a >= b){
            vit = a;
        }else{
            vit = b;
        }vipexp = 0;
        update();
        updleaguvit();
        sIurl("image38", "assets/iaps.png");
        setT("text_area75", ["A Gift", "一份礼物", ""]);
        setT("text_area105", ["You've received "+messaging.me+" day"+gap+" of 👑 membership from the developer.","你获得了来自开发者的"+messaging.me+"天👑会员。", ""]);
        fadeIn(["button176", "text_area74", "text_area105", "text_area75","image38"]);
    }else {
        switch (lang){
            case 0:input = prompt("You have a message from the developer:\n-------------\n" + messaging.re + "\n-------------\n\nMessage history:\n-------------\n" + messaging.log.substr(5, messaging.log.length - 1) + "\n-------------\n\nUse the input space below to reply if needed.");
                break;
            case 1:input = prompt("你有一条来自开发者的消息：\n-------------\n" + messaging.re + "\n-------------\n\n消息历史：\n-------------\n" + messaging.log.substr(5, messaging.log.length - 1) + "\n-------------\n\n如有需要，请用下面的文字框回复。");
                break;
            case 2:
                break;
    }}messaging.log += "\n---\n";
    messaging.log += messaging.re;
    messaging.re = "nor";
    messaging.me = input;
    update();
    if(messaging.ca == "au" || messaging.ca == "sw" || messaging.ca == "ta" || messaging.ca == "gi" || messaging.ca == "mt" || messaging.ca == "ELO" || messaging.ca == "vi"){
        deleteRecord("\x66\x65\x65\x64\x62\x61\x63\x6B", messaging, function(){
            checkMessage(false);
        });}else{
        updateRecord("\x66\x65\x65\x64\x62\x61\x63\x6B", messaging, function(){
            checkMessage(false);
})}});
onEvent("button173","click",function(){
    playS(5);
    changeScreen("screen2");
});
onEvent("QA","click",function(){
    playS(6);
    if(curlb == 4){
        setT("tpp", ["Lucky Score is based on jackpot winnings.\n\nDifferent game's jackpot have different weights based on probability.\n\nSlots: 200, Roulette: 2, Keno: 12000, Horse Bet: 4, Scratch Card: 5000, Big Six Wheel: 3, Craps: 1, Blackjack (natural 21): 1, Video Poker (Royal Flush): 300, 🎟️🎡: 8, 🎟️🎰: 100, 🎟️🧧: 10, 🎟️💰: 12, 🎟️🃏: 12, 🎟️💻: 50, Sweepstakes win: 100, Log-in Lotto win: 50.","幸运分是通过头奖次数计算的。不同的游戏，根据概率，有不同的权重。\n\n老虎机：200， 轮盘赌：2，柯诺：12000，赌马：4，刮刮卡：5000，幸运轮盘：3，双骰子：1，二十一点（天然21点）：1，经典扑克 (皇家同花顺): 300，🎟️🎡：8，🎟️🎰：100，🎟️🧧：10，🎟️💰：12，🎟️🃏：12，🎟️💻：50，抽奖获胜：100，登录彩券获胜：50",""]);
    }else if(curlb == 5){
        setT("tpp", ["Persistance score is based on gameplay.\n\nEvery round of every game will add 1 to the persistance score. Furthermore, every claimed daily reward will add 10, and every mission token currently owned will add 100.", "坚持分是通过游玩次数计算的。每一轮游戏都会增加1点。\n\n除此之外，每个每日奖励都会增加10点，每个拥有的任务代币都会增加100点。", ""]); 
    }else if(curlb == 6){
        setT("tpp", ["True Luck is based on Lucky Score and Persistance Score.\n\nIf you win more jackpots in fewer plays, you will have a higher True Luck.", "真实幸运是通过幸运分和坚持分计算的。\n\n如果你在较少的游玩次数下赢得了较多的头奖，你的真实幸运会比较高。", ""]); 
    }else if(curlb == 7){
        setT("tpp", ["Streak Score is based on 10 game (mode) s' high streaks.\n\nImprove individual high streaks to get a better Streak Score.", "连胜分是通过10个游戏（模式）的连胜计算的。\n\n在单独游戏里获得更高的连胜以取得更好的连胜分。", ""]);  
    }else if(curlb == 8){
        setT("tpp", ["Online Score is based on online activity engagement.\n\nSweepstakes wager, taskmaster completion percentage, log-in lotto attempt, PVP matches, PVP winnings, completed daily mission, gifted drinks, and league winnings will influence the score.", "联机分是通过联机活动参与度计算的。\n\n抽奖赌注，任务达人完成比例，登录彩券尝试，PVP模式游玩，PVP模式获胜，每日任务完成，赠送的饮品和排位赛名次都会影响此项分数。", ""]);  
    }fadeIn(["bkdp","tpp"]);
});
onEvent("bkdp","click",function(){
    playS(5);
    fadeOut(["tpp","bkdp"]);
});
onEvent("button165","click",function(){
    playS(6);
    if(!tettt){
        tettt = true;
        lbdb(curlb);
    }changeScreen("leader");
});
function getLB(value, val2){
    lb = [];
    for(var i = 0; i < value.length; i++){
        if(value[i].lbh == 0){
            var a = {};                     a.serial = value[i].id;                             a.exp = value[i].exp;
            a.time = value[i].tis;          a.money = value[i].cur;                             a.mission = value[i].oa;
            a.em = value[i].ev;             a.vip = value[i].vit;                               a.nto = value[i].nto;
            a.pst = value[i].pst+value[i].mt*100;               a.tls = 0;                      a.ols = value[i].ols;
            a.elo = value[i].elo;           a.ev = value[i].ji;
            if(a.pst > 0){
                a.tls = Math.round(a.nto*100/a.pst);
            }a.zzz = value[i].ost+value[i].tsr+value[i].fst+value[i].ts+value[i].ist+value[i].sa+value[i].str+value[i].egs+value[i].rst+value[i].dms;
            lb.push(a);
    }}setTimeout(function(){fadein("button174")}, 5000);
    if(val2){
        lbdb(curlb);
        playS(7);
}}
onEvent("button203","click",function(){
    playS(0);
    setText("text_area71", "Time");
    setText("text_area120", "时间");
    setText("text_area121", "");
    curlb = 1;
    lbdb(curlb);
    hideE(["button203", "QA"]);
    showE(["button199", "button198", "button204", "lbs1", "lbs2","lbs3","lbs4","lb99","lb00"]);
});
onEvent("button204","click",function(){
    playS(0);
    setText("text_area71", "Credit");
    setText("text_area120", "点数");
    setText("text_area121", "");
    curlb = 3;
    lbdb(curlb);
    hideE(["button204", "QA"]);
    showE(["button198", "button203", "button199", "lbs1", "lbs2","lbs3","lbs4","lb99","lb00"]);
});
onEvent("button198","click",function(){
    playS(0);
    setText("text_area71", "EXP");
    setText("text_area120", "EXP");
    setText("text_area121", "");
    curlb = 0;
    lbdb(curlb);
    hideE(["button198", "QA"]);
    showE(["button199", "button203", "button204", "lbs1", "lbs2","lbs3","lbs4","lb99","lb00"]);
});
onEvent("button199","click",function(){
    playS(0);
    setText("text_area71", "Challenge Progress");
    setText("text_area120", "挑战进度");
    setText("text_area121", "");
    curlb = 2;
    lbdb(curlb);
    hideE(["button199", "QA"]);
    showE(["button198", "button203", "button204", "lbs1", "lbs2","lbs3","lbs4","lb99","lb00"]);
});
onEvent("lbs1","click",function(){
    playS(0);
    setText("text_area71", "Lucky Score");
    setText("text_area120", "幸运分");
    setText("text_area121", "");
    curlb = 4;
    lbdb(curlb);
    hideElement("lbs1");
    showE(["QA","button198", "button203", "button204", "lbs2", "button199","lbs3","lbs4","lb99","lb00"]);
});
onEvent("lbs2","click",function(){
    playS(0);
    setText("text_area71", "Persistance Score");
    setText("text_area120", "坚持分");
    setText("text_area121", "");
    curlb = 5;
    lbdb(curlb);
    hideElement("lbs2");
    showE(["QA","button198", "button203", "button204", "lbs1", "button199","lbs3","lbs4","lb99","lb00"]);
});
onEvent("lbs3","click",function(){
    playS(0);
    setText("text_area71", "True Luck");
    setText("text_area120", "真实幸运");
    setText("text_area121", "");
    curlb = 6;
    lbdb(curlb);
    hideElement("lbs3");
    showE(["QA","button198", "button203", "button204", "lbs1", "button199","lbs2","lbs4","lb99","lb00"]);
});
onEvent("lbs4","click",function(){
    playS(0);
    setText("text_area71", "Streak Score");
    setText("text_area120", "连胜分");
    setText("text_area121", "");
    curlb = 7;
    lbdb(curlb);
    hideElement("lbs4");
    showE(["QA","button198", "button203", "button204", "lbs1", "button199","lbs2","lbs3","lb99","lb00"]);
});
onEvent("lb99","click",function(){
    playS(0);
    setText("text_area71", "Online Score");
    setText("text_area120", "联机分");
    setText("text_area121", "");
    curlb = 8;
    lbdb(curlb);
    hideElement("lb99");
    showE(["QA","button198", "button203", "button204", "lbs1", "button199","lbs2","lbs3","lbs4","lb00"]);
});
onEvent("lb00","click",function(){
    playS(0);
    setText("text_area71", "PVP ELO Score");
    setText("text_area120", "对战ELO分数");
    setText("text_area121", "");
    curlb = 9;
    lbdb(curlb);
    hideE(["lb00","QA"]);
    showE(["button198", "button203", "button204", "lbs1", "button199","lbs2","lbs3","lbs4","lb99"]);
});
function cdos(pre, val, tki, ov, ev){
    if(tki > 20){}else if(tki > 10 && tki < 21){
        pre = pre + "🏵️";
    }else if(tki > 5 && tki < 11){
        pre = pre + "🎖️";
    }else if(tki > 3 && tki < 6){
        pre = pre + "🏅";
    }else if(tki === 1){
        pre = pre + "🥇";
    }else if(tki === 2){
        pre = pre + "🥈";
    }else if(tki === 3){
        pre = pre + "🥉";
    }if(val){
        pre = pre + "👑";
        var emm = pre.replace(ov, ev);
        pre = emm;
    }return pre;
}
function lbdb(index){
    setT("text_area72",["Loading...","加载中...",""]);
    var tki = 0;
    var text = [];
    var tdf, tff, gap, pre, gap2, tgf;
    pre = gap = gap2 = "";
    var byDate = lb;
    tdf = "Please press refresh.";
    tff = "请点刷新按钮。";
    tgf = "";
    switch(index){
        case 0:byDate.sort(function(a, b){
                return b.exp - a.exp;
            });for(var k = 0; k < byDate.length; k++){
                if(byDate[k].exp > 0 && tki < 99){
                    tki = k + 1;
                    if(tki < 10){
                        gap = "     ";
                    }else{
                        gap = "   ";
                    }gap2 = getGap(byDate[k].serial.toString());
                    switch (lang){
                        case 0:
                            pre = "# " + tki + gap + byDate[k].em + " Player " + byDate[k].serial + gap2 + byDate[k].exp + " ";
                            break;
                        case 1:
                            pre = "# " + tki + gap + byDate[k].em + " 玩家 " + byDate[k].serial + gap2 + byDate[k].exp + " ";
                            break;
                        case 2:
                            break;
                    }if(byDate[k].vip>ztime){
                        text.push(cdos(pre, true, tki, byDate[k].em, byDate[k].ev));
                    }else{
                        text.push(cdos(pre, false, tki, byDate[k].em, byDate[k].ev));
                }}if(byDate[k].serial == currentid && userID != "Guest"|| lbh > 0){
                    if(exp == 0 || lbh > 0){
                        tdf = "You are Player " + currentid + "   Rank: Unranked";
                        tff = "你是玩家" + currentid + "   排名：未排名";
                        tgf = "";
                    }else{
                        tdf = "You are Player " + currentid + "   Rank: " + (k+1);
                        tff = "你是玩家" + currentid + "  排名：" + (k+1);
                        tgf = "";
            }}}break;
        case 1:byDate.sort(function(a, b){
                return b.time - a.time;
            });for(var k = 0; k < byDate.length; k++){
                if(byDate[k].time > 0 && tki < 99){
                    tki = k + 1;
                    if(tki < 10){
                        gap = "     ";
                    }else{
                        gap = "   ";
                    }gap2 = getGap(byDate[k].serial.toString());
                    switch (lang){
                        case 0:pre = "# " + tki + gap + byDate[k].em + " Player " + byDate[k].serial + gap2 + byDate[k].time + " S";
                            break;
                        case 1:pre = "# " + tki + gap + byDate[k].em + " 玩家 " + byDate[k].serial + gap2 + byDate[k].time + " S";
                            break;
                        case 2:
                            break;
                    }if(byDate[k].vip>ztime){
                        text.push(cdos(pre, true, tki, byDate[k].em, byDate[k].ev));
                    }else{
                        text.push(cdos(pre, false, tki, byDate[k].em, byDate[k].ev));
                }}if(byDate[k].serial == currentid && userID != "Guest"|| lbh > 0){
                    if(byDate[k].time == 0 || lbh > 0){
                        tdf = "You are Player " + currentid + "   Rank: Unranked";
                        tff = "你是玩家" + currentid + "   排名：未排名";
                        tgf = "";
                    }else{
                        tdf = "You are Player " + currentid + "   Rank: " + (k+1);
                        tff = "你是玩家" + currentid + "  排名：" + (k+1);
                        tgf = "";
            }}}break;
        case 2:byDate.sort(function(a, b){
                return b.mission - a.mission;
            });for(var k = 0; k < byDate.length; k++){
                if(byDate[k].mission > 0 && tki < 99){
                    tki = k + 1;
                    if(tki < 10){
                        gap = "     ";
                    }else{
                        gap = "   ";
                    }gap2 = getGap(byDate[k].serial.toString());
                    switch (lang){
                        case 0:pre = "# " + tki + gap + byDate[k].em + " Player " + byDate[k].serial + gap2 + byDate[k].mission + " / 48";
                            break;
                        case 1:pre = "# " + tki + gap + byDate[k].em + " 玩家 " + byDate[k].serial + gap2 + byDate[k].mission + " / 48";
                            break;
                        case 2:
                            break;
                    }if(byDate[k].vip>ztime){
                        text.push(cdos(pre, true, tki, byDate[k].em, byDate[k].ev));
                    }else{
                        text.push(cdos(pre, false, tki, byDate[k].em, byDate[k].ev));
                }}if(byDate[k].serial == currentid && userID != "Guest"|| lbh > 0){
                    if(byDate[k].mission == 0 || lbh > 0){
                        tdf = "You are Player " + currentid + "   Rank: Unranked";
                        tff = "你是玩家" + currentid + "   排名：未排名";
                        tgf = "";
                    }else{
                        tdf = "You are Player " + currentid + "   Rank: " + (k+1);
                        tff = "你是玩家" + currentid + "  排名：" + (k+1);
                        tgf = "";
            }}}break;
        case 3:byDate.sort(function(a, b){
                return b.money - a.money;
            });for(var k = 0; k < byDate.length; k++){
                if(byDate[k].money > 0 && tki < 99){
                    tki = k + 1;
                    if(tki < 10){
                        gap = "     ";
                    }else{
                        gap = "   ";
                    }gap2 = getGap(byDate[k].serial.toString());
                    switch (lang){
                        case 0:pre = "# " + tki + gap + byDate[k].em + " Player " + byDate[k].serial + gap2 + byDate[k].money + " ";
                            break;
                        case 1:pre = "# " + tki + gap + byDate[k].em + " 玩家 " + byDate[k].serial + gap2 + byDate[k].money + " ";
                            break;
                        case 2:
                            break;
                    }if(byDate[k].vip>ztime){
                        text.push(cdos(pre, true, tki, byDate[k].em, byDate[k].ev));
                    }else{
                        text.push(cdos(pre, false, tki, byDate[k].em, byDate[k].ev));
                }}if(byDate[k].serial == currentid && userID != "Guest" || lbh > 0){
                    if(byDate[k].money == 0 || lbh > 0){
                        tdf = "You are Player " + currentid + "   Rank: Unranked";
                        tff = "你是玩家" + currentid + "   排名：未排名";
                        tgf = "";
                    }else{
                        tdf = "You are Player " + currentid + "   Rank: " + (k+1);
                        tff = "你是玩家" + currentid + "  排名：" + (k+1);
                        tgf = "";
            }}}break;
        case 4:byDate.sort(function(a, b){
                return b.nto - a.nto;
            });for(var k = 0; k < byDate.length; k++){
                if(byDate[k].nto > 0 && tki < 99){
                    tki = k + 1;
                    if(tki < 10){
                        gap = "     ";
                    }else{
                        gap = "   ";
                    }gap2 = getGap(byDate[k].serial.toString());
                    switch (lang){
                        case 0:
                            pre = "# " + tki + gap + byDate[k].em + " Player " + byDate[k].serial + gap2 + byDate[k].nto + " ";
                            break;
                        case 1:
                            pre = "# " + tki + gap + byDate[k].em + " 玩家 " + byDate[k].serial + gap2 + byDate[k].nto + " ";
                            break;
                        case 2:
                            break;
                    }if(byDate[k].vip>ztime){
                        text.push(cdos(pre, true, tki, byDate[k].em, byDate[k].ev));
                    }else{
                        text.push(cdos(pre, false, tki, byDate[k].em, byDate[k].ev));
                }}if(byDate[k].serial == currentid && userID != "Guest"|| lbh > 0){
                    if(exp == 0 || lbh > 0){
                        tdf = "You are Player " + currentid + "   Rank: Unranked";
                        tff = "你是玩家" + currentid + "   排名：未排名";
                        tgf = "";
                    }else{
                        tdf = "You are Player " + currentid + "   Rank: " + (k+1);
                        tff = "你是玩家" + currentid + "  排名：" + (k+1);
                        tgf = "";
            }}}break;
        case 5:byDate.sort(function(a, b){
                return b.pst - a.pst;
            });for(var k = 0; k < byDate.length; k++){
                if(byDate[k].pst > 0 && tki < 99){
                    tki = k + 1;
                    if(tki < 10){
                        gap = "     ";
                    }else{
                        gap = "   ";
                    }gap2 = getGap(byDate[k].serial.toString());
                    switch (lang){
                        case 0:pre = "# " + tki + gap + byDate[k].em + " Player " + byDate[k].serial + gap2 + byDate[k].pst + " ";
                            break;
                        case 1:pre = "# " + tki + gap + byDate[k].em + " 玩家 " + byDate[k].serial + gap2 + byDate[k].pst + " ";
                            break;
                        case 2:
                            break;
                    }if(byDate[k].vip>ztime){
                        text.push(cdos(pre, true, tki, byDate[k].em, byDate[k].ev));
                    }else{
                        text.push(cdos(pre, false, tki, byDate[k].em, byDate[k].ev));
                }}if(byDate[k].serial == currentid && userID != "Guest"|| lbh > 0){
                    if(exp == 0 || lbh > 0){
                        tdf = "You are Player " + currentid + "   Rank: Unranked";
                        tff = "你是玩家" + currentid + "   排名：未排名";
                        tgf = "";
                    }else{
                        tdf = "You are Player " + currentid + "   Rank: " + (k+1);
                        tff = "你是玩家" + currentid + "  排名：" + (k+1);
                        tgf = "";
            }}}break;
        case 6:byDate.sort(function(a, b){
                return b.tls - a.tls;
            });for(var k = 0; k < byDate.length; k++){
                if(byDate[k].tls > 0 && tki < 99){
                    tki = k + 1;
                    if(tki < 10){
                        gap = "     ";
                    }else{
                        gap = "   ";
                    }gap2 = getGap(byDate[k].serial.toString());
                    switch (lang){
                        case 0:pre = "# " + tki + gap + byDate[k].em + " Player " + byDate[k].serial + gap2 + byDate[k].tls + " ";
                            break;
                        case 1:pre = "# " + tki + gap + byDate[k].em + " 玩家 " + byDate[k].serial + gap2 + byDate[k].tls + " ";
                            break;
                        case 2:
                            break;
                    }if(byDate[k].vip>ztime){
                        text.push(cdos(pre, true, tki, byDate[k].em, byDate[k].ev));
                    }else{
                        text.push(cdos(pre, false, tki, byDate[k].em, byDate[k].ev));
                }}if(byDate[k].serial == currentid && userID != "Guest"|| lbh > 0){
                    if(exp == 0 || lbh > 0){
                        tdf = "You are Player " + currentid + "   Rank: Unranked";
                        tff = "你是玩家" + currentid + "   排名：未排名";
                        tgf = "";
                    }else{
                        tdf = "You are Player " + currentid + "   Rank: " + (k+1);
                        tff = "你是玩家" + currentid + "  排名：" + (k+1);
                        tgf = "";
            }}}break;
        case 7:byDate.sort(function(a, b){
                return b.zzz - a.zzz;
            });for(var k = 0; k < byDate.length; k++){
                if(byDate[k].zzz > 0 && tki < 99){
                    tki = k + 1;
                    if(tki < 10){
                        gap = "     ";
                    }else{
                        gap = "   ";
                    }gap2 = getGap(byDate[k].serial.toString());
                    switch (lang){
                        case 0:pre = "# " + tki + gap + byDate[k].em + " Player " + byDate[k].serial + gap2 + byDate[k].zzz + " ";
                            break;
                        case 1:pre = "# " + tki + gap + byDate[k].em + " 玩家 " + byDate[k].serial + gap2 + byDate[k].zzz + " ";
                            break;
                        case 2:
                            break;
                    }if(byDate[k].vip>ztime){
                        text.push(cdos(pre, true, tki, byDate[k].em, byDate[k].ev));
                    }else{
                        text.push(cdos(pre, false, tki, byDate[k].em, byDate[k].ev));
                }}if(byDate[k].serial == currentid && userID != "Guest"|| lbh > 0){
                    if(exp == 0 || lbh > 0){
                        tdf = "You are Player " + currentid + "   Rank: Unranked";
                        tff = "你是玩家" + currentid + "   排名：未排名";
                        tgf = "";
                    }else{
                        tdf = "You are Player " + currentid + "   Rank: " + (k+1);
                        tff = "你是玩家" + currentid + "  排名：" + (k+1);
                        tgf = "";
            }}}break;
        case 8:byDate.sort(function(a, b){
                return b.ols - a.ols;
            });for(var k = 0; k < byDate.length; k++){
                if(byDate[k].ols > 0 && tki < 99){
                    tki = k + 1;
                    if(tki < 10){
                        gap = "     ";
                    }else{
                        gap = "   ";
                    }gap2 = getGap(byDate[k].serial.toString());
                    switch (lang){
                        case 0:pre = "# " + tki + gap + byDate[k].em + " Player " + byDate[k].serial + gap2 + byDate[k].ols + " ";
                            break;
                        case 1:pre = "# " + tki + gap + byDate[k].em + " 玩家 " + byDate[k].serial + gap2 + byDate[k].ols + " ";
                            break;
                        case 2:
                            break;
                    }if(byDate[k].vip>ztime){
                        text.push(cdos(pre, true, tki, byDate[k].em, byDate[k].ev));
                    }else{
                        text.push(cdos(pre, false, tki, byDate[k].em, byDate[k].ev));
                }}if(byDate[k].serial == currentid && userID != "Guest"|| lbh > 0){
                    if(exp == 0 || lbh > 0){
                        tdf = "You are Player " + currentid + "   Rank: Unranked";
                        tff = "你是玩家" + currentid + "   排名：未排名";
                        tgf = "";
                    }else{
                        tdf = "You are Player " + currentid + "   Rank: " + (k+1);
                        tff = "你是玩家" + currentid + "  排名：" + (k+1);
                        tgf = "";
            }}}break;
        case 9:byDate.sort(function(a, b){
                return b.elo - a.elo;
            });for(var k = 0; k < byDate.length; k++){
                if(byDate[k].elo > 0 && tki < 99){
                    tki = k + 1;
                    if(tki < 10){
                        gap = "     ";
                    }else{
                        gap = "   ";
                    }gap2 = getGap(byDate[k].serial.toString());
                    switch (lang){
                        case 0:pre = "# " + tki + gap + byDate[k].em + " Player " + byDate[k].serial + gap2 + byDate[k].elo + " ";
                            break;
                        case 1:pre = "# " + tki + gap + byDate[k].em + " 玩家 " + byDate[k].serial + gap2 + byDate[k].elo + " ";
                            break;
                        case 2:
                            break;
                    }if(byDate[k].vip>ztime){
                        text.push(cdos(pre, true, tki, byDate[k].em, byDate[k].ev));
                    }else{
                        text.push(cdos(pre, false, tki, byDate[k].em, byDate[k].ev));
                }}if(byDate[k].serial == currentid && userID != "Guest"|| lbh > 0){
                    if(exp == 0 || lbh > 0){
                        tdf = "You are Player " + currentid + "   Rank: Unranked";
                        tff = "你是玩家" + currentid + "   排名：未排名";
                        tgf = "";
                    }else{
                        tdf = "You are Player " + currentid + "   Rank: " + (k+1);
                        tff = "你是玩家" + currentid + "  排名：" + (k+1);
                        tgf = "";
            }}}break;
    }if(userID == "Guest"){
        tdf = "Create a User ID to join the competition!";
        tff = "创建用户ID以加入比赛！";
        tgf = "";
    }text = text.toString().replace(/,/g, "\n");
    setText("text_area79", tdf);
    setText("text_area115", tff);
    setText("text_area116", tgf);
    setText("text_area72", text);
}
onEvent("button174","click",function(){
    hideElement("button174");
    setT("text_area72", ["Loading", "加载中", ""]);
    readRecords("\x70\x72\x6F\x67\x72\x65\x73\x73", {}, function(value){
        getOL(value);
        getLB(value, true);
})});
function seteventbadge(){
    if(month == 2){
        showElement("event");
        hideElement("noevent");   
    }else if(month == 8){
        showElement("event");
        hideElement("noevent");
    }else if(month == 5){
        showElement("event");
        hideElement("noevent");
    }else if(month == 11){
        showElement("event");
        hideElement("noevent");   
    }else {
        showElement("noevent");
        hideElement("event");
}}
function setFestival(){
    hideElement("fool");
    if(month == 1 && day < 16){
        isfest = 1;
        for(fg = 0; fg < icons.length; fg++){
            sIurl(icons[fg], "assets/ice.png");
    }}else if(month == 1 && day > 22 || month == 2 && day < 19){
        isfest = 2;
        for(var fg = 0; fg < icons.length; fg++){
            sIurl(icons[fg], "assets/Boom.png");
    }}else if(month == 3 && day > 4 && day < 19){
        isfest = 3;
        for(var fg = 0; fg < icons.length; fg++){
            sIurl(icons[fg], "assets/leaf.png");
    }}else if(month == 4 && day == 1){
        isfest = 10;
        showElement("fool");
        ftg = 0;
        hideE(["text_area228","pvpimg","pvp","ne","button191","button3", "button1", "button12", "button11", "button88", "button41", "button96", "button98", "button114"]);
        for(var fg = 0; fg < icons.length; fg++){
            sIurl(icons[fg], "assets/nyan.png");
    }}else if(month == 4 && day > 9 && day < 24){
        isfest = 4;
        for(var fg = 0; fg < icons.length; fg++){
            sIurl(icons[fg], "assets/earth.png");
    }}else if(month == 5 && day > 4 && day < 21){
        isfest = 11;
        for(var fg = 0; fg < icons.length; fg++){
            sIurl(icons[fg], "assets/art.png");
    }}else if(month == 6 && day > 22 || month == 7 && day < 6){
        isfest = 5;
        for(var fg = 0; fg < icons.length; fg++){
            sIurl(icons[fg], "assets/hat.png");
    }}else if(month == 7 && day > 24 || month == 8 && day < 16){
        isfest = 12;
        for(var fg = 0; fg < icons.length; fg++){
            sIurl(icons[fg], "assets/popsicle.png");
    }}else if(month == 9 && day > 7 && day < 23){
        isfest = 6;
        for(var fg = 0; fg < icons.length; fg++){
            sIurl(icons[fg], "assets/moon.png");
    }}else if(month == 10 && day > 15 || month == 11 && day < 2){
        isfest = 7;
        for(var fg = 0; fg < icons.length; fg++){
            sIurl(icons[fg], "assets/hallo.png");
    }}else if(month == 11 && day > 10 && day < 27){
        isfest = 8;
        for(var fg = 0; fg < icons.length; fg++){
            sIurl(icons[fg], "assets/piee.png");
    }}else if(month == 12 && day > 9 && day < 27){
        isfest = 9;
        for(var fg = 0; fg < icons.length; fg++){
            sIurl(icons[fg], "assets/christ.png");
    }}else{
        isfest = 0;
        setTheme(false);
        for(var fg = 0; fg < icons.length; fg++){
            sIurl(icons[fg], "assets/credit.png");
    }}checkHoliBG();
}
setFestival();
function checkHoliBG(){
    if(month == 12 && day > 9){
        nofest = 1;
    }else if(month == 1 && day < 23){
        nofest = 2;
    }else if(month == 1 && day > 22 || month == 2 || month == 3 && day < 5){
        nofest = 3;
    }else if(month == 3 && day > 4){
        nofest = 4;
    }else if(month == 4 && day < 10){
        nofest = 5;
    }else if(month == 4 && day > 9 || month == 5 && day < 5){
        nofest = 6;
    }else if(month == 5 && day > 4 || month == 6 && day < 23){
        nofest = 7;
    }else if(month == 6 && day > 22 || month == 7 && day < 25){
        nofest = 8;
    }else if(month == 7 && day > 24 || month == 8 || month == 9 && day < 8){
        nofest = 9;
    }else if(month == 9 && day > 7 || month == 10 && day < 16){
        nofest = 10;
    }else if(month == 10 && day > 15 || month == 11 && day < 11){
        nofest = 11;
    }else{
        nofest = 12;
    }if(isfest != 0){
        sIurl("image51", holipic[isfest]);
        setHoli();
        showE(["checkbox2", "text_area128"]);
}}
onEvent("fool","click",function(){
    playS(16);
    hideElement("fool");
	ftg = 1;
    sIurl("image38", "assets/nyan.png");
    setT("text_area75", ["Fool'd!", "被骗了！", ""]);
    setT("text_area105", ["Uh uh, you aint getting that cheek today.\n\nHappy april fools!", "不不，今天肯定没有钢管舞看。\n\n愚人节快乐！", ""]);
    fadeIn(["text_area75","image38","text_area228","pvpimg","pvp","ne","button191","button3", "button1", "button12", "button11", "button88", "button41", "button96", "button98", "button114", "text_area74", "button176", "text_area105"]);
});
onEvent("event","click",function(){
    seteventbadge();
    inevent = true;
    playS(9);
    setT("text_area75", ["Event", "活动", ""]);
    if(month == 2){
        setT("cdcode", ["Event CDK: "+eventcdk,"活动CDK："+eventcdk,""]);
        fadein("cdcode");
        sIurl("image38", "assets/spe1.png");
        setT("text_area76", ["To celebrate the conception of this app, this limited-time chip is yours.", "为庆祝此应用的概念创始，这个限时筹码是你的了。", ""]);
        if(specialbadgeone != 1){
            setT("text_area77", ["Tap to claim", "点击领取", ""]);
        }else{
            setT("text_area77", ["Reward claimed", "奖励已领取", ""]);
    }}else if(month == 5){
        setT("cdcode", ["Event CDK: "+eventcdk,"活动CDK："+eventcdk,""]);
        fadein("cdcode");
        sIurl("image38", "assets/spe3.png");
        setT("text_area76", ["To celebrate the onset of summer, this limited-time chip is yours.", "为庆祝夏天的到来，这个限时筹码是你的了。", ""]);
        if(specialbadge3 != 1){
            setT("text_area77", ["Tap to claim", "点击领取", ""]);
        }else{
            setT("text_area77", ["Reward claimed", "奖励已领取", ""]);
    }}else if(month == 11){
        setT("cdcode", ["Event CDK: "+eventcdk,"活动CDK："+eventcdk,""]);
        fadein("cdcode");
        sIurl("image38", "assets/spe4.png");
        setT("text_area76", ["To celebrate the oncoming feativities, this limited-time chip is yours.", "为庆祝即将到来的节日，这个限时筹码是你的了。", ""]);
        if(specialbadge4 != 1){
            setT("text_area77", ["Tap to claim", "点击领取", ""]);
        }else{
            setT("text_area77", ["Reward claimed", "奖励已领取", ""]);
    }}else if(month == 8){
        setT("cdcode", ["Event CDK: "+eventcdk,"活动CDK："+eventcdk,""]);
        fadein("cdcode");
        sIurl("image38", "assets/spe2.png");
        setT("text_area76", ["To celebrate the developer's birthday, this limited-time chip is yours.", "为庆祝开发者生日，这个限时筹码是你的了。", ""]);
        if(specialbadgetwo != 1){
            setT("text_area77", ["Tap to claim", "点击领取", ""]);
        }else{
            setT("text_area77", ["Reward claimed", "奖励已领取", ""]);
    }}fadeIn(["text_area74", "text_area75", "text_area76", "text_area77", "button176", "image38"]);
});
onEvent("noevent","click",function(){
    playS(1);
    setT("text_area75", ["Event", "活动", ""]);
    sIurl("image38", "assets/q.png");
    fadeIn(["text_area74", "text_area75", "text_area76", "text_area77", "button176","image38"]);
    setT("text_area76", ["There is no event now. Check again in Feburary, May, August, and November!", "现在没有活动。请在二月，五月，八月和十一月再次查看！", ""]);
});
onEvent("text_area74","click",function(){closeoverlay()});
function closeoverlay(){
    playS(5);
    inemoji = inevent = false;
    hideE(["button224", "button223", "ftue1", "ftue2", "ftue3", "ftue4", "ftue5", "ftue6", "ftue7", "ftue8", "ftue9", "ftue10", "ftue11", "ftue0","ftue12","ftue13"]);
    fadeOut(["cdcode","text_area74", "text_area75", "text_area76", "text_area77", "button176", "text_area105", "image38"]);
}
onEvent("image38","click",function(){
    if(inevent){
        if(month == 2 && !specialbadgeone){
            playS(4);
            specialbadgeone = 1;
            update();
            setT("text_area77", ["Reward claimed", "奖励已领取", ""]);
        }else if(month == 8 && !specialbadgetwo){
            playS(4);
            specialbadgetwo = 1;
            update();
            setT("text_area77", ["Reward claimed", "奖励已领取", ""]);
        }else if(month == 5 && !specialbadge3){
            playS(4);
            specialbadge3 = 1;
            update();
            setT("text_area77", ["Reward claimed", "奖励已领取", ""]);
        }else if(month == 11 && !specialbadge4){
            playS(4);
            specialbadge4 = 1;
            update();
            setT("text_area77", ["Reward claimed", "奖励已领取", ""]);
}}});
function enter(val){
  if(!ftueflag[2]){
    doTutorial(2);
  }else{
    from = val;
    changeScreen("store");
    setText("text_area41", accountstring);
    setText("text_area138", ticketstring);
    playS(8);
    switch (isfest){
        case 1:setStyle("text_area126", "color:#65fb02");
            setT("text_area126", ["Current festival:\nWintertide\nEnds at Jan. 15\nBonus daily reward!", "当前节日：\n冰雪节\n于1月15日结束\n双倍每日奖励！", ""]);
            break;
        case 2:setStyle("text_area126", "color:#65fb02");
            setT("text_area126", ["Current festival:\nSpring Festival\nEnds at Feb. 21\nBonus daily reward!", "当前节日：\n春节\n于2月21日结束\n双倍每日奖励！", ""]);
            break;
        case 3:setStyle("text_area126", "color:#65fb02");
            setT("text_area126", ["Current festival:\nSt. Patricks Day\nEnds at Mar. 18\nBonus daily reward!", "当前节日：\n圣帕特里克节\n于3月18日结束\n双倍每日奖励！", ""]);
            break;
        case 4:setStyle("text_area126", "color:#65fb02");
            setT("text_area126", ["Current festival:\nEarth Day\nEnds at Apr. 23\nBonus daily reward!", "当前节日：\n地球日\n于4月23日结束\n双倍每日奖励！", ""]);
            break;
        case 5:setStyle("text_area126", "color:#65fb02");
            setT("text_area126", ["Current festival:\nIndependence Day\nEnds at Jul. 5\nBonus daily reward!", "当前节日：\n独立日\n于7月5日结束\n双倍每日奖励！", ""]);
            break;
        case 6:setStyle("text_area126", "color:#65fb02");
            setT("text_area126", ["Current festival:\nMid-Autumn\nEnds at Sep. 22\nBonus daily reward!", "当前节日：\n中秋节\n于9月22日结束\n双倍每日奖励！", ""]);
            break;
        case 7:setStyle("text_area126", "color:#65fb02");
            setT("text_area126", ["Current festival:\nHalloween\nEnds at Nov. 1\nBonus daily reward!", "当前节日：\n万圣节\n于11月1日结束\n双倍每日奖励！", ""]);
            break;
        case 8:setStyle("text_area126", "color:#65fb02");
            setT("text_area126", ["Current festival:\nThanksgiving\nEnds at Nov. 26\nBonus daily reward!", "当前节日：\n感恩节\n于11月26日结束\n双倍每日奖励！", ""]);
            break;
        case 9:setStyle("text_area126", "color:#65fb02");
            setT("text_area126", ["Current festival:\nChristmas\nEnds at Dec. 26\nBonus daily reward!", "当前节日：\n圣诞节\n于12月26日结束\n双倍每日奖励！", ""]);
            break;
        case 10:setStyle("text_area126", "color:#65fb02");
            setT("text_area126", ["Current festival:\nApril Fools\nEnds at Apr. 1\nBonus daily reward!", "当前节日：\n愚人节\n于4月1日结束\n双倍每日奖励！", ""]);
            break;
        case 11:setStyle("text_area126", "color:#65fb02");
            setT("text_area126", ["Current festival:\nArt Festival\nEnds at May. 20\nBonus daily reward!", "当前节日：\n艺术节\n于5月20日结束\n双倍每日奖励！", ""]);
            break;
        case 12:setStyle("text_area126", "color:#65fb02");
            setT("text_area126", ["Current festival:\nSummer Break\nEnds at Aug. 15\nBonus daily reward!", "当前节日：\n暑假\n于8月15日结束\n双倍每日奖励！", ""]);
            break;
        case 0:setStyle("text_area126", "color:#00FFFF");
            setT("text_area126", ["No festival now.\nCheck back for\nfestival-exclusive\nBonus daily reward!", "当前没有节日。\n时常查看以享受节日专属双倍每日奖励！", ""]);
            break;
    }if(isfest != 0){
        setT("button175", ["Daily Reward\n+12 🎟️\n", "每日奖励\n+12 🎟️\n", ""]);
    }else{
        setT("button175", ["Daily Reward\n+8 🎟️\n", "每日奖励\n+8 🎟️\n", ""]);
    }if(userID == "Guest"){
        hideE(["button181", "text_input2"]);
    }else{
        showE(["button181", "text_input2"]);
    }if(bgm){
        if(estt == 4){
            wac = 1;
            setT("ee1", ["Underwater ATM? Unrealistic, but you found an easter egg!", "海底ATM?很不现实，不过你找到了一个彩蛋！", ""]);
        }else if(estt == 5){
            waf = 1;
            setT("ee1", ["Fun fact: The BGM was extracted from Ubisoft's UNO.", "这个主题的背景音乐是从育碧的UNO里提取的。", ""]);
        }showElement("ee1");
        if(wam == 1 && war == 1 && wap == 1 && wac == 1 && waf == 1 && h26 != 2){
            h26 = 1;
            showElement("image35");
    }}else{
        hideElement("ee1");
    }loopy = timedLoop(1000, function(){
        var etime = GetTime();
        var dif = 86400 - Math.floor((etime - lastclaim) / 1000);
        if(dif < 0){
            setStyle("text_area73", "color:#65fb02");
            setT("text_area73", ["Claimable", "可领取", ""]);
            claimable = true;
        }else{
            setStyle("text_area73", "color:#00fff1");
            claimable = false;
            setText("text_area73", Math.floor(dif / 3600) + " H " + Math.floor((dif / 60) % 60) + " M " + dif % 60 + " S");
    }});if(val != "screen2"){
        finishTime();
}}}
onEvent("button57","click",function(){
    changeScreen(from, 1);
    playS(5);
    setText("text_input2", "");
    stopTimedLoop(loopy);
    setStyle("text_area73", "color:#00fff1");
    setT("text_area73", ["Loading", "加载中", ""]);
    setText("text_area222", ticketstring);
    setTex(["text_area29", "text_area31", "text_area34", "text_area23", "text_area12", "text_area6", "account", "text_area47","text_area220"], accountstring);
    checkach();
    if(from != "screen2"){
        startTime();
}});
onEvent("button175","click",function(){
    if(!claimable){
        playS(2);
        setT("text_area93", ["Please wait till the timer resets.", "请等候至时间到。", ""]);
        fadeIn(["text_area94", "text_area93", "button182"]);
    }else{
        if(isfest){
            changeTicket(12);
            log("za", 12);
        }else{
            changeTicket(8);
            log("za", 8);
        }playS(4);
        claimable = false;
        lastclaim = GetTime();
        setText("text_area138", ticketstring);
        timeAward++;
        pst+=10;
        setT("text_area73", ["Loading", "加载中", ""]);
        update();
        checkach();
        if(currentid != -1 && userID != "Guest" && task.num == 5){
            uploadtask(1);
}}});
function getFame(val){
    readRecords("\x70\x72\x6F\x67\x72\x65\x73\x73", {}, function(valu){
        getOL(valu);
        getAce(valu);
        queryCount();
    });if(val){
        playS(7);
        hideElement("button179");
        setTimeout(function(){fadein("button179")}, 5000);
}}
function queryCount(){
    var temps = 0;
    var temp = "";
    if(userID != "Guest"){
        if(g1s == onestreak){
            temps++;
        }if(g2s == twostreak){
            temps++;
        }if(g3s == ttreak){
            temps++;
        }if(g4s == fourstreak){
            temps++;
        }if(g5s == fivestreak){
            temps++;
        }if(g6s == sixstreak){
            temps++;
        }if(g7s == sevstreak){
            temps++;
        }if(g8s == eigstreak){
            temps++;
        }if(g9s == rst){
            temps++;
        }if(g10s == pkc){
            temps++;
        }if(g11s == dms){
            temps++;
    }}if(temps > 1){
        temp = "s";
    }if(temps > 0 || trtwo){
        sIurl("tr2", "assets/trat.png");
        trtwo = 1;
    }else{
        sIurl("tr2", "assets/q.png");
    }setT("text_area81", ["You have " + temps + "\nglobal high streak" + temp, "你有" + temps + "个\n全球高分", ""]);
}
onEvent("button171","click",function(){
    if(!ttttttt){
        crankData();
        ttttttt = true;
    }queryCount();
    changeScreen("at");
    if(havebeat){
        showE(["text_area91", "button180", "text_area92", "text_area163"]);
        setT("text_area163", ["Congrats!", "祝贺！"]);
        setT("text_area92", ["You set a global record! Tap the refresh icon and enjoy the fame!","你获得了一个全球高分！\n点击刷新图标来享受盛名！",""]);
        playS(4);
    }else{
        playS(6);
}});
onEvent("text_area91","click",function(){
    playS(0);
    havebeat = false;
    fadeOut(["text_area91", "button180", "text_area92", "image39", "text_area163"]);
});
onEvent("button178","click",function(){
    playS(5);
    changeScreen("screen2");
});
onEvent("button179","click",function(){getFame(true)});
onEvent("button181","click",function(){
    fadeIn(["text_area94", "text_area93"]);
    var tezt = getText("text_input2").split("").reverse().join("").toUpperCase();
    if(coo){
        playS(2);
        setT("text_area93", ["Unavailable in Cheat Mode. Please refresh the game.", "作弊模式下不可用。请刷新程序。", ""]);
        fadein("button182");
        return;
    }if(tezt.length < 5){
        playS(2);
        setT("text_area93", ["Invalid code. Please check the code and try again.", "代码不正确。请检查代码并重试。", ""]);
        fadein("button182");
        return;
    }if(tezt == "YDDADEMNAB"){
        setT("text_area75", ["Notice", "提示", ""]);
        setT("text_area105", ["Your account is suspended.\nExpiry date:\nNever" + "\nReason: \nYou asked for it.\nJK just refresh", "你的账号已被封禁。\n解封时间：\n永远\n原因：你自找的。\n开玩笑啦刷新下就好了", ""]);
        showE(["button176", "text_area178", "text_area105", "text_area75"]);
        changeScreen("screen2");
    }setT("text_area93", ["Querying online database.\nIf this took more than 5 seconds check your internet connection.", "正在查询数据库。\n如果此操作超过了5秒，请检查您的网络连接。", ""]);
    var match = false;
    var claimed = false;
    readRecords("\x43\x44\x4B", {}, function(val){
        if(val[val.length-1].id > 19999){
            doFullRecord("cdk");
        }for(var i = 0; i < val.length; i++){
            if(val[i].co == tezt){
                var td = Math.round(getTime()/1000)<val[i].ex;
                validateJSON(val[i].cl, "CDK claim");
                var ta = JSON.parse(val[i].cl);
                if(ta.indexOf(currentid) == -1 && val[i].max > ta.length && td){
                  match = true;
                }else{
                    claimed = true;
                    break;
                }changeTicket(val[i].re);
                log("za", val[i].re);
                ta.push(currentid);
                val[i].cl = JSON.stringify(ta);
                updateRecord("\x43\x44\x4B", val[i], function(){
                    playS(4);
                    setText("text_input2", "");
                    setText("text_input2", "");
                    setText("text_area138", ticketstring);
                    setT("text_area93", ["Redeem success.\n" + val[i].re + " 🎟️ added to your account.", "兑换成功。\n" + val[i].re + "🎟️已添加至账号。", ""]);
                    fadein("button182");
                    update();
                });break;
        }}if(!match || claimed){
            showElement("button182");
            playS(2);
            if(!match){
                setT("text_area93", ["Invalid code. Please check the code and try again.", "代码不正确。请检查代码并重试。", ""]);
            }if(claimed){
              if(!td){
                setT("text_area93", ["Code expired and is no longer claimable. Hurry up next time!", "代码已过期，不能兑换。下次尽早！", ""]);
              }else{
                setT("text_area93", ["Code already claimed. Please use a different code.", "代码已被兑换。请换个代码。", ""]); 
}}}})});
onEvent("button182","click",function(){
    hideElement("button182");
    fadeOut(["text_area94", "text_area93"]);
    playS(0);
    setText("text_area41", accountstring);
});
onEvent("button161","click",function(){
    hideElement("text_area101");
    playS(5);
    setText("text_input1", "");
    changeScreen("welcome");
    startLoop();
    if(userID == "Guest"){
        hideE(["button116", "conbin"]);
        showElement("text_area101");
    }else{
        showE(["button116", "conbin"]);
        hideElement("text_area101");
    }if(isadmin(currentid)){
        showElement("image40");
        getDevlist();
    }else{
        hideElement("image40");
}});
function getDevlist(){
    var hasmessage = false;
        devlist = [];
        p = 0;
        readRecords("\x66\x65\x65\x64\x62\x61\x63\x6B", {}, function(val){
            cL = val;
            for(var i = 0; i < val.length; i++){
                if(val[i].re == "nor" && !val[i].hi){
                    hasmessage = true;
                    devlist.push(i);
                    showE(["nm", "cm", "rp", "arc"]);
                    sIurl("image40", "assets/poi.png");
        }}if(!hasmessage){
                hideE(["nm", "cm", "rp", "arc"]);
                sIurl("image40", "assets/chall.png");
}})}
onEvent("image40","click",function(){
    setScreen("dev");
    currentScreen="dev";
});
onEvent("button200","click",function(){
    showE(["text_area98", "pwA", "button183"]);
    if(mmm){
        setScreen("remix");
    }else{
        changeScreen("welcome");
        startLoop();
}});
onEvent("pwA", "input", function(event){
    var inputStr = getText("pwA");
    if(inputStr.length > kZ.length){
        var nAdded = inputStr.length - kZ.length;
        kZ = kZ.substring(0, event.selectionStart - nAdded) + inputStr.substring(event.selectionStart - nAdded, event.selectionStart) + kZ.substring(event.selectionStart - nAdded, kZ.length);
    }else{
        var nDeleted = kZ.length - inputStr.length;
        kZ = kZ.substring(0, event.selectionStart) + kZ.substring(event.selectionStart + nDeleted, kZ.length);
    }setText("pwA", repCh("•", kZ.length));
});
function repCh(char, times){
    var myStr = "";
    for(var i = 0; i < times; i++){
        myStr = myStr + char;
    }return myStr;
}
onEvent("button183","click",function(){
    console.log(v.slice(lBo - salt * s2, uBo - salt * s2).split("").reverse().join(""));
    if(kZ === v.slice(lBo - salt * s2, uBo - salt * s2).split("").reverse().join("")){
        hideE(["text_area98", "pwA", "button183", "prev","button291","nm", "cm", "rp", "arc","button291","prev","next"]);
        setText("pwA", "");
        setText("admin", "Welcome, User Serial "+currentid+". Click 'Doc' for documentation.");
        p = admintrig = 0;
        if(devlist.length <= 1){
            hideElement("next");
        }else{
            showElement("next");
    }}else{
        playS(2);
}});

onEvent("button184","click",function(){
    if(admintrig){throw new Error("Unauthorized access")}
    hideE(["nm", "cm", "rp", "arc","button291","prev","next"]);
    var text = getText("admin");
    var match = false;
    readRecords("\x70\x72\x6F\x67\x72\x65\x73\x73", {}, function(v){
        for(var i = 0; i < v.length; i++){
            if(v[i].UID == text || v[i].id == text){
                match = true;
                setText("admin","id: "+v[i].id+" /UID: "+v[i].UID+" /pt: "+v[i].tis+" /exp: "+v[i].exp+" /so, mi: "+v[i].da+" /cr: "+v[i].cur+" /1sp, jp, st: "+v[i].osp+", "+v[i].oj+", "+v[i].ost+" /2sp, gu, st: "+v[i].tsp+", "+v[i].tg+", "+v[i].tsr+" /3tr, gu, st: "+v[i].ttr+", "+v[i].rg+": "+v[i].ts+" /4be, sp, st: "+v[i].fbt+", "+v[i].fsp+", "+v[i].fst+" /5sc, mg, st: "+v[i].isc+", "+v[i].im+", "+v[i].ist+" /6sp, go, st: "+v[i].ssp+", "+v[i].sg+", "+v[i].sa+" /7th, sp, st: "+v[i].vr+", "+v[i].sec+", "+v[i].str+" /8be, db, st: "+v[i].ebt+", "+v[i].edb+", "+v[i].egs+" /lgi: "+v[i].lg+" /rnd: "+v[i].wr+" /dail: "+v[i].ta+" /wagr: "+v[i].wg+" /clam: "+v[i].lx+" /oa: "+v[i].oa+" /lang: "+v[i].L+" /teme: "+v[i].T+" /mtf: "+v[i].mt+", "+v[i].fl+" /tik: "+v[i].tk+" /ssw: "+v[i].ssw+" /lotow: "+v[i].ltd+" /ad: "+v[i].adv+" /twj: "+v[i].twj+" /slj:"+v[i].tsj+" /tgp: "+v[i].tgp+" /fstV: "+v[i].fxx +" /ji: "+v[i].ji+" /lbh: "+v[i].lbh+" /CID: "+v[i].CID+" /avl: "+v[i].avl+" /vit: "+v[i].vit+" /nto, pst, rst: "+v[i].nto +", "+v[i].pst +", "+v[i].rst + " /iap: "+v[i].iap+" /bo: "+v[i].bo+" /ols: "+v[i].ols+" /chm: "+v[i].chm+" /olw: "+v[i].olw+" /dm: "+v[i].dm+" /aa: "+v[i].aa+" /day: "+v[i].day+" /wxc, y, z: "+v[i].wxc+", "+v[i].wyc+", "+v[i].wzc+" /elo: "+v[i].elo+" /lr: "+v[i].lr+" /hr: "+v[i].hr+" /pka, b, c: "+v[i].pka+", "+v[i].pkb+", "+v[i].pkc+" /dms, z: "+v[i].dms+", "+v[i].dmz+" /gft: "+v[i].gft+" /ft: "+v[i].ft+" /lc: "+v[i].lc+" /tv, ev: "+v[i].tv+" "+v[i].ev);
                break;
        }}if(!match){
            setText("admin", "No match.");
}})});
function updleaguvit(){
    readRecords("league", {}, function(val){
        var va = JSON.parse(val[val.length - 1].pid);
        for(var i = 0; i < va.length; i++){
            if(va[i] == currentid){
                var pa = JSON.parse(val[val.length - 1].vit);
                pa[i] = vit;
                val[val.length - 1].vit = JSON.stringify(pa);
                updateRecord("league", val[val.length - 1], function(){});
                return;
}}});}
function updleaguemo(){
    readRecords("league", {}, function(val){
        var va = JSON.parse(val[val.length - 1].pid);
        for(var i = 0; i < va.length; i++){
            if(va[i] == currentid){
                var pa = JSON.parse(val[val.length - 1].emo);
                pa[i] = emoji;
                val[val.length - 1].emo = JSON.stringify(pa);
                updateRecord("league", val[val.length - 1], function(){});
                return;
}}});}
onEvent("button293","click",function(){
  if(admintrig){throw new Error("Unauthorized access")}
  eval(getText("admin")+"\nsetText('admin', 'Evaluation complete.')");
});
onEvent("button262","click",function(){
    ada = 7;
    showElement("button291");
    hideE(["nm", "cm", "rp", "arc"]);
    setText("admin", "UID@type&expire$reason");
});
onEvent("button263","click",function(){
    if(admintrig){throw new Error("Unauthorized access","button291")}
    var target = getText("admin");
    hideE(["nm", "cm", "rp", "arc"]);
    var match = false;
    readRecords("\x70\x72\x6F\x67\x72\x65\x73\x73", {}, function(val){
        for(var i = 0; i < val.length; i++){
            if(val[i].id == target || val[i].UID == target){
                match = true;
                if(!val[i].lbh){
                    setText("admin", "User LB hide.");
                    val[i].lbh = 1;
                }else{
                    setText("admin", "User LB shown.");
                    val[i].lbh = 0;
                }updateRecord("\x70\x72\x6F\x67\x72\x65\x73\x73", val[i], function(){});
                return;
        }}if(!match){
            setText("admin", "User not found.");
}})});
onEvent("mm","click",function(){
    ada = 14;
    showElement("button291");
    hideE(["nm", "cm", "rp", "arc"]);
    getKeyValue("mm", function(val){
        getKeyValue("mmr", function(val2){
            setText("admin", val+"%"+val2);
})})});
onEvent("memo","click",function(){
    if(admintrig){throw new Error("Unauthorized access")}
    hideE(["nm", "cm", "rp", "arc","button291","prev","next"]);
    getKeyValue("memo", function(val){
        ada = 15;
        showElement("button291");
        val = JSON.parse(val);
        var d = new Date(val.d);
        setText("admin", "Edited "+d.toUTCString()+" by User Serial "+val.u+ "\n----Do Not Edit This Line----\n"+val.c);
})});
onEvent("button202","click",function(){
    hideE(["nm", "cm", "rp", "arc","button291","prev","next"]);
    setText("admin", "");
});
var rand = RandomNumber(0, 99);
if(getText("text_area61") != "noitcudorP rekaMppA kcGntM A".split("").reverse().join("")){dfs = true;
}if(rand == 0){setText("text_area61", "Agile Development to the Extreme");
}else if(rand == 1){setText("text_area61", "Modular Programming to the Extreme");
}else if(rand == 2){setText("text_area61", "Spaghetti Code to the Extreme");
}else if(rand == 3){setText("text_area61", "Element Overlay to the Extreme");
}else if(rand == 4){setText("text_area61", "Asset Flipping to the Extreme");
}
onEvent("prev","click",function(){
    if(admintrig){throw new Error("Unauthorized access")}
    showE(["nm", "cm", "rp", "arc", "next","button291"]);
    if(p < 1){
        hideElement("prev");
    }else{
        p--;
        if(q){
            setText("admin", p + 1 + " / " + cL.length.toString());
        }else{
            setText("admin", p + 1 + " / " + devlist.length.toString());
        }if(p < 1){
            hideElement("prev");
}}});
onEvent("next","click",function(){
    if(admintrig){throw new Error("Unauthorized access")}
    showE(["nm", "cm", "rp", "arc", "prev","button291"]);
    if(q){
        if(p === cL.length - 1){
            hideElement("prev");
        }else{
            p++;
            setText("admin", p + 1 + " / " + cL.length.toString());
            if(p >= cL.length - 1){
                hideElement("next");
    }}}else{
        if(p === devlist.length - 1){
            hideElement("prev");
        }else{
            p++;
            setText("admin", p + 1 + " / " + devlist.length.toString());
            if(p >= devlist.length - 1){
                hideElement("next");
}}}});
onEvent("button196","click",function(){
    if(admintrig){throw new Error("Unauthorized access")}
    var round = getText("admin");
    if(isNaN(parseInt(round)) || parseInt(round) == "" || parseInt(round) < 0){
        setText("admin", "Index must be a > 0 number.");
        return;
    }round = parseInt(round);
    if(q){
        if(round > cL.length - 1){
            setText("admin", "Index too big.");
            return;
        }if(round === cL.length - 1){
            hideElement("next");
        }p = round;
        showE(["nm", "cm", "rp", "arc"]);
        setText("admin", p + " / " + cL.length.toString());
    }else{
        if(round > devlist.length - 1){
            setText("admin", "Index too big.");
            return;
        }if(round > devlist.length - 1){
            hideElement("next");
        }p = round;
        showE(["nm", "cm", "rp", "arc"]);
        setText("admin", p + " / " + devlist.length.toString());
}});
onEvent("cm","click",function(){
    if(admintrig){throw new Error("Unauthorized access")}
    ada = 5;
    showElement("button291");
    if(q){
        setText("admin", cL[p].me+"\n------Log------\n"+cL[p].log);
    }else{
        setText("admin", cL[devlist[p]].me+"\n------Log------\n"+cL[devlist[p]].log);
}});
onEvent("nm","click",function(){
    if(admintrig){throw new Error("Unauthorized access")}
    hideElement("button291");
    if(q){
        setText("admin", cL[p].UID + " / " + cL[p].CID+"\nCategory: "+cL[p].ca);
    }else{
        setText("admin", cL[devlist[p]].UID + "/" + cL[devlist[p]].CID+"\nCategory: "+cL[devlist[p]].ca);
}});
onEvent("mt","click",function(){
    if(admintrig){throw new Error("Unauthorized access")}
    var round = getText("admin");
    hideE(["nm", "cm", "rp", "arc","button291","prev","next"]);
    if(isNaN(parseInt(round)) || parseInt(round) == ""){
        setText("admin", "Input not a number.");
        return;
    }round = parseInt(round);
    createRecord("\x66\x65\x65\x64\x62\x61\x63\x6B", {
        UID: round,         CID: "",       log: "",         me: "",        re: "",        ca: "mt",         hi: 1
    }, function(val){
        setText("admin", "MT gifted to "+round);
})});
onEvent("rp","click",function(){
    if(admintrig){throw new Error("Unauthorized access")}
    ada = 10;
    showElement("button291");
    if(q){
        setText("admin", cL[p].re);
    }else{
        setText("admin", cL[devlist[p]].re);
}});
onEvent("arc","click",function(){
    if(admintrig){throw new Error("Unauthorized access")}
    ada = 11;
    showElement("button291");
    if(q){
        setText("admin", cL[p].hi);
    }else{
        setText("admin", cL[devlist[p]].hi);
}});
onEvent("allmes","click",function(){
    if(admintrig){throw new Error("Unauthorized access")}
    hideE(["button291","prev"]);
    if(!q){
        setText("allmes","Ne");
        setText("admin", "1 / " + cL.length.toString());
        showE(["nm", "cm", "rp", "arc","button291"]);
        p = 0;
        q = true;
        if(cL.length > 1){
            showElement("next");
        }else{
            hideElement("next");
    }}else{
        setText("allmes","Al");
        setText("admin", "1 / " + devlist.length.toString());
        p = 0;
        q = false;
        if(devlist.length < 1){
            hideE(["nm", "cm", "rp", "arc","button291","prev","next"]);
        }if(devlist.length > 1){
            showElement("next");
        }else{
            hideElement("next");
}}});
onEvent("button189","click",function(){
    ada = 4;
    showElement("button291")
    hideE(["nm", "cm", "rp", "arc"]);
    setText("admin", "name^message");
});
onEvent("button314","click",function(){
    ada = 13;
    showElement("button291")
    hideE(["nm", "cm", "rp", "arc"]);
    setText("admin", "id^day");
});
onEvent("cb5","click",function(){
    specialbadgeone = specialbadgetwo = specialbadge3 = specialbadge4 = echip = pay = 1;
    onestreak = g1s;
    highrank = 10;
    avl = 360;
});
onEvent("cb1","click",function(){changeAccount(200000)});
onEvent("cb2","click",function(){changeTicket(1000)});
onEvent("cb3","click",function(){exp += 100000});
onEvent("cb4","click",function(){changeAccount(-200000)});
onEvent("cb6","click",function(){changeTicket(-1000)});
onEvent("cb7","click",function(){exp -= 100000});
onEvent("cb8","click",function(){changeAccount(-account)});
onEvent("cb9","click",function(){changeTicket(-ticket)});
onEvent("cb10","click",function(){exp = 0});
onEvent("cb11","click",function(){mtt += 1});
onEvent("cb12","click",function(){mtt -= 1});
onEvent("cb13","click",function(){mtt = 0});
onEvent("cb14","click",function(){
    var a = ztime+86400000;
    var b = vit + 86400000;
    if(a >= b){
        vit = a;
    }else{
        vit = b;
}});
onEvent("cb15","click",function(){vit = ztime});
onEvent("button309","click",function(){
    if(admintrig){throw new Error("Unauthorized access")}
    ada = 6;
    hideE(["nm", "cm", "rp", "arc"]);
    showElement("button291");
	getKeyValue("block", function(val){setText("admin", val)});
});
onEvent("button217","click",function(){
    if(admintrig){throw new Error("Unauthorized access")}
	  readRecords("Sweeps", {}, function(val){
        ada = 0; 
        setText("admin", val[val.length-1].end+"%"+val[val.length-1].wa);
        hideE(["nm", "cm", "rp", "arc"]);
        showElement("button291");
})});
onEvent("button288","click",function(){
    if(admintrig){throw new Error("Unauthorized access")}
	readRecords("task", {}, function(val){
        ada = 1; 
        setText("admin", val[val.length-1].num+"%"+val[val.length-1].aw+"^"+val[val.length-1].end);
        hideE(["nm", "cm", "rp", "arc"]);
        showElement("button291");
})});
onEvent("button289","click",function(){
    if(admintrig){throw new Error("Unauthorized access")}
	readRecords("lotto", {}, function(val){
        ada = 2; 
        setText("admin", val[val.length-1].pr+"%"+val[val.length-1].ch);
        hideE(["nm", "cm", "rp", "arc"]);
        showElement("button291");
})});
onEvent("eae","click",function(){
	ada = 16;
    hideE(["nm", "cm", "rp", "arc"]);
    showElement("button291");
    setText("admin", "Sweeps/task/league^uid%amt");
});
onEvent("tsa","click",function(){
    if(admintrig){throw new Error("Unauthorized access")}
    hideE(["nm", "cm", "rp", "arc","button291","prev","next"]);
    var text = getText("admin");
    var time;
    if(text == ""){
        time = new Date();
        setText("admin",time.toString());
    }else if(isNaN(parseInt(text))){
        time = Date.parse(getText("admin"));
        setText("admin", time);
    }else{
        time = new Date(parseInt(text));
        setText("admin",time.toString());
}});
onEvent("button201","click",function(){
    if(admintrig){throw new Error("Unauthorized access")}
    hideE(["nm", "cm", "rp", "arc","button291","prev","next"]);
    setText("admin", "");
    var channel = getAttribute("divApplab", "baseURI").match(/code.org\/projects\/applab\/([^\/]+)/)[1];
    var str = "Channel ID: "+channel;
    startWebRequest("https://studio.code.org/v3/channels/" + channel, function (status, type, content){
      if(status == 200){
        var info = JSON.parse(content);
        str += ", project name: "+info.name+", frozen: "+info.frozen+", hidden: "+info.hidden+", Created: "+info.createdAt+", updated: "+info.updatedAt+", published: "+info.publishedAt;
      }else{
        str += "Error getting base information, ";
      }startWebRequest("https://studio.code.org/v3/channels/" + channel + "/abuse", function (status2, type2, content2){
          if(status2 == 200){
            var reports = JSON.parse(content2);
            str += ", abuse score: "+reports.abuse_score;
          }else{
            str += ", error getting abuse score, ";
          }startWebRequest("https://studio.code.org/v3/assets/" + channel, function (status3, type3, content3){
            if(status3 == 200){
              var files = JSON.parse(content3);
              var size = 0;
              for(var i = 0; i < files.length; i++){
                size += files[i].size;
              }str += ", files: "+files.length+", asset size: "+localstr(size)+" bytes, ";
            }else{
              str += ", error getting asset information, ";
            }startWebRequest("https://studio.code.org/v3/channels/" + channel + "/sharing_disabled", function (status4, type4, content4){
                if(status4 == 200){
                  var reports = JSON.parse(content4);
                  str += "sharing: "+ !reports.sharing_disabled+".";
                }else{
                  str += "error getting sharing permission.";
                }setText("admin", str);
})})})})});
onEvent("tsb","click",function(){
   if(admintrig){throw new Error("Unauthorized access")}
   hideE(["nm", "cm", "rp", "arc","button291","prev","next"]);
   var tass = "Taskmaster\n\n";
   for(var i = 0; i < taskmaster.length; i++){
    tass += "id: "+ taskmaster[i].tid + ", task: "+taskmaster[i].mit[0]+"\n";
   }tass += "\nLeague\n\n";
   for(var i = 0; i < leaguetasks.length; i++){
    tass += "id: "+i+", task: "+leaguetasks[i].str[0]+"\n";
   }setText("admin", "Admin Panel v3.0 Documentation\n\nDM: Set direct message template to main, savable.\n\nBan: Set ban/unban/ban edit template to main, savable.\n\nLbh: Set player number in main to leaderboard hidden/visible.\n\nTab: Set CDK/ads combined/chat tables to main.\n\nVer: Set local/cloud version to main, cloud version savable.\n\nMt: Set mt award to player number in main.\n\nS: Get player information using player number or user ID in main.\n\nTs: Do time string to timestamp and reverse in main.\n\nCDK: Set CDK create/update update template to main, savable.\n\nEau: Set event user add/modify template to main, savable.\n\nLeg: Set league task/end to main, savable.\n\nLot: Set lotto wa/chance to main, savable.\n\nTas: Set task num/wa/end to main, savable.\n\nSwp: Set sweeps end/bonus to main, savable.\n\nChe: Set chat alter template to main using chat id in main, savable.\n\nVig: Set vit gift template to main, savable.\n\nAlt: Set disable/enable ad serial in main.\n\nBL: Set block to main, savable.\n\nApi: Get cdo metadata for this project to main.\n\nMM: Display Maintainence mode template to main, savable.\n\nExe: Do eval code in main.\n\nFr: Set feedback from/CID/category to main.\n\nMs: Set feedback message/log to main, message savable.\n\nRe: Set feedback reply to main, savable.\n\nHi: Set feedback hide to true/false, savable.\n\nBkt: 1 in main - set backup key value JSON to main. 2 in main - set backup table value to main, backup data in main - restore key pair/table (assume tables are created and empty).\n\nme: Display Admin memo to main, savable.\n\nQuit: Quit to Menu.\n\n<, >: Do adjust feedback index.\n\nGo: Do go to the feedback index in main.\n\nAl/NE: Do load new feedback read-write/read-only.\n\nCle: Do clear text in main.\n\nDoc: Set documentation to main.\n\nSave: Set for any savable buttons.\n\ntemp: Set onEvent code template to main, reserved for live testing.\n\nColor scheme:\n\nNo input required Get: Beige\nInput required Get: Blue\nInput required Set: Green\nTemplate Set: Yellow\nDo: Red\n\n"+tass);
});
onEvent("bkp","click",function(){
    if(admintrig){throw new Error("Unauthorized access")}
    hideE(["nm", "cm", "rp", "arc","button291","prev","next"]);
    var text = getText("admin");
    if(text == "1"){
        bkpdos("type",1);
        bkpdos("time",Date.now());
        getKeyValue("ac",function(val){bkpdos("ac",val)});
        getKeyValue("ad",function(val){bkpdos("ad",val)});
        getKeyValue("banned",function(val){bkpdos("banned",val)});
        getKeyValue("block",function(val){bkpdos("block",val)});
        getKeyValue("board",function(val){bkpdos("board",val)});
        getKeyValue("cg",function(val){bkpdos("cg",val)});
        getKeyValue("cj",function(val){bkpdos("cj",val)});
        getKeyValue("cs",function(val){bkpdos("cs",val)});
        getKeyValue("dmz",function(val){bkpdos("dmz",val)});
        getKeyValue("gif",function(val){bkpdos("gif",val)});
        getKeyValue("hp",function(val){bkpdos("hp",val)});
        getKeyValue("hs",function(val){bkpdos("hs",val)});
        getKeyValue("jb",function(val){bkpdos("jb",val)});
        getKeyValue("jp",function(val){bkpdos("jp",val)});
        getKeyValue("js",function(val){bkpdos("js",val)});
        getKeyValue("kj",function(val){bkpdos("kj",val)});
        getKeyValue("kp",function(val){bkpdos("kp",val)});
        getKeyValue("ks",function(val){bkpdos("ks",val)});
        getKeyValue("l",function(val){bkpdos("l",val)});
        getKeyValue("memo",function(val){bkpdos("memo",val)});
        getKeyValue("mm",function(val){bkpdos("mm",val)});
        getKeyValue("mmr",function(val){bkpdos("mmr",val)});
        getKeyValue("pb",function(val){bkpdos("pb",val)});
        getKeyValue("pg",function(val){bkpdos("pg",val)});
        getKeyValue("pkj",function(val){bkpdos("pkj",val)});
        getKeyValue("pkr",function(val){bkpdos("pkr",val)});
        getKeyValue("pks",function(val){bkpdos("pks",val)});
        getKeyValue("pkw",function(val){bkpdos("pkw",val)});
        getKeyValue("pr",function(val){bkpdos("pr",val)});
        getKeyValue("ps",function(val){bkpdos("ps",val)});
        getKeyValue("rb",function(val){bkpdos("rb",val)});
        getKeyValue("rc",function(val){bkpdos("rc",val)});
        getKeyValue("rp",function(val){bkpdos("rp",val)});
        getKeyValue("rs",function(val){bkpdos("rs",val)});
        getKeyValue("s1",function(val){bkpdos("s1",val)});
        getKeyValue("s2",function(val){bkpdos("s2",val)});
        getKeyValue("sa",function(val){bkpdos("sa",val)});
        getKeyValue("sj",function(val){bkpdos("sj",val)});
        getKeyValue("sp",function(val){bkpdos("sp",val)});
        getKeyValue("ss",function(val){bkpdos("ss",val)});
        getKeyValue("ssf",function(val){bkpdos("ssf",val)});
        getKeyValue("swp",function(val){bkpdos("swp",val)});
        getKeyValue("tc",function(val){bkpdos("tc",val)});
        getKeyValue("ti",function(val){bkpdos("ti",val)});
        getKeyValue("tk",function(val){bkpdos("tk",val)});
        getKeyValue("tr",function(val){bkpdos("tr",val)});
        getKeyValue("tt",function(val){bkpdos("tt",val)});
        getKeyValue("u",function(val){bkpdos("u",val)});
        getKeyValue("v",function(val){bkpdos("v",val)});
        getKeyValue("ver",function(val){bkpdos("ver",val)});
        getKeyValue("vpp",function(val){bkpdos("vpp",val)});
        getKeyValue("wj",function(val){bkpdos("wj",val)});
        getKeyValue("ws",function(val){bkpdos("ws",val)});
        getKeyValue("wt",function(val){bkpdos("wt",val)});
        getKeyValue("ww",function(val){bkpdos("ww",val)});
        getKeyValue("wxa",function(val){bkpdos("wxa",val)});
        getKeyValue("wxb",function(val){bkpdos("wxb",val)});
        getKeyValue("wxc",function(val){bkpdos("wxc",val)});
        getKeyValue("wya",function(val){bkpdos("wya",val)});
        getKeyValue("wyb",function(val){bkpdos("wyb",val)});
        getKeyValue("wyc",function(val){bkpdos("wyc",val)});
        getKeyValue("za",function(val){bkpdos("za",val)});
        getKeyValue("zb",function(val){bkpdos("zb",val)});
        getKeyValue("zc",function(val){bkpdos("zc",val)});
        getKeyValue("zd",function(val){bkpdos("zd",val)});
        getKeyValue("ze",function(val){bkpdos("ze",val)});
        getKeyValue("zf",function(val){bkpdos("zf",val)});
        getKeyValue("zg",function(val){bkpdos("zg",val)});
        getKeyValue("zh",function(val){bkpdos("zh",val)});
        getKeyValue("zi",function(val){bkpdos("zi",val)});
        getKeyValue("zj",function(val){bkpdos("zj",val)});
        getKeyValue("zk",function(val){bkpdos("zk",val)});
        getKeyValue("zl",function(val){bkpdos("zl",val)});
        getKeyValue("zlj",function(val){bkpdos("zlj",val)});
        getKeyValue("zls",function(val){bkpdos("zls",val)});
        getKeyValue("zlw",function(val){bkpdos("zlw",val)});
        getKeyValue("zm",function(val){bkpdos("zm",val)});
        getKeyValue("zn",function(val){bkpdos("zn",val)});
        getKeyValue("zom",function(val){bkpdos("zom",val)});
        getKeyValue("zsi",function(val){bkpdos("zsi",val)});
        getKeyValue("zts",function(val){bkpdos("zts",val)});
        getKeyValue("zya",function(val){bkpdos("zya",val)});
        getKeyValue("zyb",function(val){bkpdos("zyb",val)});
        getKeyValue("zyc",function(val){bkpdos("zyc",val)});
    }else if(text == "2"){
        bkpdos("type",2);
        bkpdos("time",Date.now());
        readRecords("CDK", {}, function(val){bkpdop("CDK",val)});
        readRecords("Sweeps", {}, function(val){bkpdop("Sweeps",val)});
        readRecords("chat", {}, function(val){bkpdop("chat",val)});
        readRecords("feedback", {}, function(val){bkpdop("feedback",val)});
        readRecords("league", {}, function(val){bkpdop("league",val)});
        readRecords("lotto", {}, function(val){bkpdop("lotto",val)});
        readRecords("progress", {}, function(val){bkpdop("progress",val)});
        readRecords("pvp", {}, function(val){bkpdop("pvp",val)});
        readRecords("task", {}, function(val){bkpdop("task",val)});
    }else if(text.includes("[") && text.includes("{") && text.includes("]") && text.includes("}") && text.includes("time") && text.includes("type")){
        var text = JSON.parse(getText("admin"));
        if(text[1].v = "1"){
            bac = text;
            dbgbkp = 2;
            overrideKeys();
        }else if(text[1].v = "2"){
            bac = text;
            dbgbkp = 2;
            overrideRecords(2, text[2], 0);
        }else{
            setText("admin", "Invalid backup data type.");
    }}else{
        setText("admin", "Invalid input. 1 to backup key pairs, 2 to backup tables, backup paste to restore.");
}});
function bkpdos(val, val2){
    dbgbkp++;
    bac.push({"n":val,"v":val2});
    if(dbgbkp == 86){
        dbgbkp = 0;
        setText("admin", JSON.stringify(bac));
        bac = [];
}}
function bkpdop(val, val2){
    dbgbkp++;
    for(var i = 0; i < val2.length; i++){
        delete val2[i].id;
    }bac.push({"n":val,"v":val2});
    if(dbgbkp == 11){
        dbgbkp = 0;
        setText("admin", JSON.stringify(bac));
        bac = [];
}}
function overrideKeys(){
    setKeyValue(bac[dbgbkp].n, bac[dbgbkp].v, function(){
        dbgbkp++;
        if(dbgbkp < bac.length){
            setText("admin", "Key restored: "+bac[dbgbkp].n);
            overrideKeys();
        }else{
            setText("admin", "Key pair restoration complete.");
}})}
function overrideRecords(t ,table, index){
    if(index == 0){
      readRecords(table.n, {}, function(val){
          if(val.length != 0){
              setText("admin", "Table "+table.n+" null or not empty. Aborted.");
              return;
    }});}createRecord(table.n, table.v[index], function(){
        setText("admin", (index+1)+"/"+table.v.length+" of "+table.n+" created.");
        index++;
        if(index > table.v.length - 1){
            index = 0;
            t++;
            if(t < bac.length){
                table = bac[t];
            }else{
                setText("admin", "Table restoration complete.");
                return;
        }}overrideRecords(t,table, index);
});}
onEvent("button290","click",function(){
    if(admintrig){throw new Error("Unauthorized access")}
	readRecords("league", {}, function(val){
        ada = 3; 
        setText("admin", val[val.length-1].t+"%"+val[val.length-1].e);
        hideE(["nm", "cm", "rp", "arc"]);
        showElement("button291");
})});
onEvent("button186","click",function(){
    ada = 17;
    setText("admin", "cdk/ads/chat");
    showElement("button291");
});
onEvent("button310","click",function(){
    ada = 12;
    hideE(["nm", "cm", "rp", "arc"]);
    var round = getText("admin");
    if(isNaN(parseInt(round)) || round == ""){
        setText("admin", "id must be a number.");
        return;
    }round = parseInt(round);
    readRecords("chat", {}, function(val){
        for(var i = 0; i < val.length; i++){
            if(val[i].id == round){
                showElement("button291");
                setText("admin", round+"%"+val[i].ms);
                return;
        }}setText("admin", "Chat not found.");
})});
onEvent("button187","click",function(){
    ada = 8;
    hideE(["nm", "cm", "rp", "arc"]);
    var n = "";
    for(var e = 0; e < 6; e++){
        var guard = RandomNumber(0, 31);
        n += total[guard];
    }
    setText("admin", n+"@amount%expire*max");
    showElement("button291");
});
onEvent("button195","click",function(){
    ada = 9;
    hideE(["nm", "cm", "rp", "arc"]);
    showElement("button291");
    getKeyValue("ver", function(val){setText("admin", ver+"L/"+val)});
});
onEvent("button291","click",function(){
    hideElement("button291");
    var text = getText("admin");
    switch(ada){
        case 0: if(!text.includes("%")){
                setText("admin", "format incorrect.");
                return;
            }var end = parseInt(text.substring(0, text.indexOf("%")));
            var wa = parseInt(text.substring(text.indexOf("%") + 1, text.length));
            readRecords("Sweeps", {}, function(val){
                val[val.length-1].end = end;
                val[val.length-1].wa = wa;
                updateRecord("Sweeps", val[val.length-1], function(){
                    setText("admin", "Sweeps updated.");
            })});break;
        case 1:  if(!text.includes("%") || !text.includes("^")){
                setText("admin", "format incorrect.");
                return;
            }var num = parseInt(text.substring(0, text.indexOf("%")));
            var aw = parseInt(text.substring(text.indexOf("%") + 1, text.indexOf("^")));
            var endt = parseInt(text.substring(text.indexOf("^") + 1, text.length));
            if(num > 48){
                setText("admin", "Task num overflow. Aborted.");
                return;
            }readRecords("task", {}, function(val){
                val[val.length-1].num = num;
                val[val.length-1].aw = aw;
                val[val.length-1].end = endt;
                updateRecord("task", val[val.length-1], function(){
                    setText("admin", "task end updated.");
            })});break;
        case 2:  
            if(!text.includes("%")){
                setText("admin", "format incorrect.");
                return;
            }var pr = parseInt(text.substring(0, text.indexOf("%")));
            var ch = parseInt(text.substring(text.indexOf("%") + 1, text.length));
            readRecords("lotto", {}, function(val){
                val[val.length-1].ch = ch;
                val[val.length-1].pr = pr;
                updateRecord("lotto", val[val.length-1], function(){
                    setText("admin", "lotto updated.");
            })});break;
        case 3: 
            if(!text.includes("%")){
                setText("admin", "format incorrect.");
                return;
            }var t = parseInt(text.substring(0, text.indexOf("%")));
            var e = parseInt(text.substring(text.indexOf("%") + 1, text.length));
            if(num > 12){
                setText("admin", "Task num overflow. Aborted.");
                return;
            }readRecords("league", {}, function(val){
                val[val.length-1].e = e;
                val[val.length-1].t = t;
                updateRecord("league", val[val.length-1], function(){
                    setText("admin", "league updated.");
                })});break;
        case 4: if(!text.includes("^")){
                setText("admin", "format incorrect.");
                return;
            }var nam = text.substring(0, text.indexOf("^"));
            var mes = text.substring(text.indexOf("^") + 1, text.length);
            createRecord("\x66\x65\x65\x64\x62\x61\x63\x6B", {
                UID: nam,       CID: "",        log: "",        me: "",
                re: mes,        ca: "de",      hi: 0
            }, function(val){
                setText("admin", "DM created.");
                getDevlist();
            });break;
        case 5: if(!text.includes("\n------Log------\n")){
                setText("admin", "format incorrect.");
                return;
            }var nam = text.substring(0, text.indexOf("\n------Log------\n"));
            if(q){
                cL[p].me = nam;
                updateRecord("\x66\x65\x65\x64\x62\x61\x63\x6B", cL[p], function(){
                    setText("admin", "Message updated.");
                    getDevlist();
                });
            }else{
                cL[devlist[p]].me = nam;
                updateRecord("\x66\x65\x65\x64\x62\x61\x63\x6B", cL[devlist[p]], function(){
                    setText("admin", "Message updated.");
                    getDevlist();
            });}break;
        case 6: setKeyValue("block", text, function(){
                setText("admin", "Block updated.");
            });break;
        case 7: if(!text.includes("@") || !text.includes("&") || !text.includes("$")){
                setText("admin", "format incorrect.");
                return;
            }var UID = parseInt(text.substring(0, text.indexOf("@")));
            var lvl = text.substring(text.indexOf("@") + 1, text.indexOf("&"));
            var expire = text.substring(text.indexOf("&") + 1, text.indexOf("$"));
            var reason = text.substring(text.indexOf("$") + 1, text.length).split("").reverse().join("");
            getKeyValue("banned", function(v){
                v = JSON.parse(v);
                for(var i = 0; i < v.length; i++){
                    if(UID == v[i].UID){
                        if(parseInt(lvl) == 0){
                            v[i].UID = -1;
                            v[i].e = v[i].r = v[i].l = undefined;
                            setKeyValue("banned", JSON.stringify(v), function(){
                                setText("admin", "User unbanned.");
                            });return;
                        }else{
                            if(lvl != "type"){
                                v[i].l = parseInt(lvl);
                            }if(expire != "expire"){
                                v[i].e = parseInt(expire);
                            }if(reason != "reason"){
                                v[i].r = reason;
                            }setKeyValue("banned", JSON.stringify(v), function(){
                                setText("admin", "User ban updated.");
                            });return;
                }}}var newban = {};
                newban.UID = UID;
                newban.l = parseInt(lvl);
                newban.e = parseInt(expire);
                newban.r = reason;
                v.push(newban);
                setKeyValue("banned", JSON.stringify(v), function(){
                    setText("admin", "User banned.");
        });});break;
        case 8: if(!text.includes("@") || !text.includes("%") || !text.includes("*")){
                setText("admin", "format incorrect.");
                return;
            }var id = text.substring(0, text.indexOf("@")).split("").reverse().join("");
            var reward = text.substring(text.indexOf("@") + 1, text.indexOf("%"));
            var expire = text.substring(text.indexOf("%") + 1, text.indexOf("*"));
            var max = text.substring(text.indexOf("*") + 1, text.length);
            var match = false;
            readRecords("CDK", {}, function(val){
                for(var i = 0; i < val.length; i++){
                    if(val[i].co == id){
                        match = true;
                        if(reward != "amount"){
                            val[i].re = parseInt(reward);
                        }if(expire != "expire"){
                            val[i].ex = expire;
                        }if(max != "max"){
                            val[i].max = max;
                        }updateRecord("CDK", val[i], function(){
                            setText("admin", "CDK updated.");
                        });break;
                }}if(!match){
                    if(isNaN(parseInt(quantity)) || parseInt(quantity) == "" || isNaN(parseInt(max)) || parseInt(max) == "" || isNaN(parseInt(exp)) || parseInt(exp) == ""){
                        setText("admin", "name or day not a number.");
                        return;
                    }createRecord("\x43\x44\x4B", {
                        co: id,       re: parseInt(quantity),           max: parseInt(max),
                        ex: parseInt(exp),        cl: "[]"
                     }, function(){
                         setText("admin", "Create success. Code: " + code);
                });}});break;
        case 9:  if(!text.includes("/")){
                setText("admin", "format incorrect.");
                return;
            }var max = parseInt(text.substring(text.indexOf("/") + 1, text.length));
            setKeyValue("ver", max, function(){
                setText("admin", "version updated.");
            });break;
        case 10:if(q){
                cL[p].re = getText("admin");
                updateRecord("\x66\x65\x65\x64\x62\x61\x63\x6B", cL[p], function(){});
            }else{
                cL[devlist[p]].re = getText("admin");
                cL[devlist[p]].log += "\n---\n";
                if(cL[devlist[p]].re != "nor"){
                    cL[devlist[p]].log += cL[devlist[p]].me;
                }updateRecord("\x66\x65\x65\x64\x62\x61\x63\x6B", cL[devlist[p]], function(){
                    setText("admin", "message updated.");
                    getDevlist();
            });}break;
        case 11:if(q){
                cL[p].hi = 0;
                updateRecord("\x66\x65\x65\x64\x62\x61\x63\x6B", cL[p], function(){
                    setText("admin", "message updated.");
                    getDevlist();
                });
            }else{
                cL[devlist[p]].hi = 1;
                updateRecord("\x66\x65\x65\x64\x62\x61\x63\x6B", cL[devlist[p]], function(){
                    setText("admin", "message updated.");
                    getDevlist();
            });}break;
        case 12:if(!text.includes("%")){
                setText("admin", "format incorrect.");
                return;
            }var id = parseInt(text.substring(0, text.indexOf("%")));
            var ms = text.substring(text.indexOf("%") + 1, text.length);
            var match = false;
            readRecords("chat", {}, function(val){
                for(var i = 0; i < val.length; i++){
                    if(val[i].id == id){
                        match = true;
                        val[i].ms = ms;
                        updateRecord("chat", val[i], function(){
                            setText("admin", "Chat updated.");
                        });break;
                }}if(!match){
                    setText("admin", "Chat not found.");
            }});break;
        case 13:if(!text.includes("^")){
            setText("admin", "format incorrect.");
            return;
            }var nam = text.substring(0, text.indexOf("^"));
            var day = text.substring(text.indexOf("^") + 1, text.length);
            if(isNaN(parseInt(nam)) || parseInt(nam) == "" || isNaN(parseInt(day)) || parseInt(day) == ""){
                setText("admin", "name or day not a number.");
                return;
            }createRecord("\x66\x65\x65\x64\x62\x61\x63\x6B", {
                UID: parseInt(nam),       CID: "",        log: "",        me: parseInt(day),           re: "",        ca: "vi",      hi: 0
            }, function(val){
                setText("admin", day+" vit gifted to "+nam+".");
            });break;
        case 14: if(!text.includes("%")){
                setText("admin", "format incorrect.");
                return;
            }var status = parseInt(text.substring(0, text.indexOf("%")));
            var response = text.substring(text.indexOf("%") + 1, text.length);
            setKeyValue("mm", status, function(){
                setKeyValue("mmr", response, function(){
                    setText("admin", "Maintainence mode updated.");
            });});break;
        case 15: if(!text.includes("\n----Do Not Edit This Line----\n")){
                setText("admin", "format incorrect.");
                return;
            }var str = text.indexOf("\n----Do Not Edit This Line----\n")+31;
            var response = text.substring(str, text.length);
            var msg = JSON.stringify({"d":Date.now(),"u":currentid,"c":response});
            setKeyValue("memo", msg, function(){
                setText("admin", "Memo updated.");
            });break;
        case 16: if(!text.includes("^") || !text.includes("%")){
            setText("admin", "format incorrect.");
            return;
        }var where = text.substring(0, text.indexOf("^"));
        var who = parseInt(text.substring(text.indexOf("^") + 1, text.indexOf("%")));
        if(who > 19999 || who < 1){
            setText("admin", "User not in range.");
        }var what = parseInt(text.substring(text.indexOf("%") + 1, text.length));
        var match = false;
        if(where == "task" || where == "Sweeps"){
            readRecords(where, {}, function(val){
                var se = JSON.parse(val[val.length-1].se);
                var ins = JSON.parse(val[val.length-1].in);
                for(var i = 0; i < se.length; i++){
                    if(se[i] == who){
                        ins[i] += what;
                        val[val.length-1].se = JSON.stringify(se);
                        val[val.length-1].in = JSON.stringify(ins);
                        updateRecord(where, val[val.length-1], function(){
                            setText("admin", "User updated.");
                        });match = true;
                        break;
                }}if(!match){
                    se.push(who);
                    ins.push(what);
                    val[val.length-1].se = JSON.stringify(se);
                    val[val.length-1].in = JSON.stringify(ins);
                    updateRecord(where, val[val.length-1], function(){});
                    setText("admin", "User created.");
        }});}else if(where == "league"){
            readRecords(where, {}, function(val){
                var se = JSON.parse(val[val.length-1].pid);
                var ins = JSON.parse(val[val.length-1].amt);
                for(var i = 0; i < se.length; i++){
                    if(se[i] == who){
                        ins[i] += what;
                        val[val.length-1].pid = JSON.stringify(se);
                        val[val.length-1].amt = JSON.stringify(ins);
                        updateRecord(where, val[val.length-1], function(){
                            setText("admin", "User updated.");
                        });
                        match = true;
                        break;
                }}if(!match){
                    readRecords("progress", {}, function(value){
                        for(var i = 0; i < value.length; i++){
                            if(value[i].id == who){
                                autoenroll(value[i].id, value[i].ji, value[i].vit, value[i].lr, what);
                                setText("admin", "User created.");
                                return;
                        }}setText("admin", "User not found.");
        });}});}else{
            setText("admin", "event type not match.");
        }break;
        case 17:var tex= "";
            if(text == "cdk"){
                readRecords("CDK", {}, function(val){
                    for(var i = 0; i < val.length; i++){
                        tex += "{id: "+val[i].id+", co: "+val[i].co.split("").reverse().join("")+", re: "+val[i].re+", cl: "+val[i].cl+", ex: "+val[i].ex+", ma: "+val[i].max+"}, ";
                    }setText("admin", tex);
            })}else if(text == "ads"){
                getKeyValue("ad", function(val){
                    val = JSON.parse(val);
                    for(var i = 0; i < val.length; i++){
                        tex += "{id: "+val[i].id+", file: ["+adbackup[i].file + ", " + adbackup[i].file1 + ", " + adbackup[i].file2 + "], played: " + val[i].p + ", clicked: " + val[i].c + ", active: " + val[i].a + ",link: " + adbackup[i].here + "},\n";
                    }setText("admin", tex);
            })}else if(text == "chat"){
                readRecords("chat", {}, function(val){
                    for(var i = 0; i < val.length; i++){
                        tex += "{id: "+val[i].id+", ms: "+val[i].ms+"}, ";
                    }setText("admin", tex);
            })}else{
                setText("admin", "Invalid input.");
                return;
            }break;
}});
onEvent("button192","click",function(){
    if(admintrig){throw new Error("Unauthorized access")}
    hideE(["nm", "cm", "rp", "arc","button291","prev","next"]);
    var num = parseInt(getText("admin"));
    var found = false;
    getKeyValue("ad", function(val){
        val = JSON.parse(val);
        for(var i = 0; i < val.length; i++){
            if(val[i].id == num){
                found = true;
                if(val[i].a){
                    val[i].a = 0;
                    setText("admin", "Disabled Ad serial " + num+".");
                }else{
                    val[i].a = 1;
                    setText("admin", "Enabled Ad serial " + num+".");
                }
                setKeyValue("ad", JSON.stringify(val), function(){});
                break;
        }}if(!found){
            setText("admin", "Ad serial not found.");
}})});
onEvent("ad","click",function(){
    setT("ad", ["Requesting", "请求中", ""]);
    var adeng, adchn, adspa;
    adeng = adchn = adspa = [];
    getKeyValue("ad", function(val){
        validateJSON(val, "ad analytics get");
        val = JSON.parse(val);
        for(var i = 0; i < val.length; i++){
            if(val[i].a){
                if(adbackup[i].file != ""){
                    adeng.push(adbackup[i]);
                }if(adbackup[i].file1 != ""){
                    adchn.push(adbackup[i]);
                }if(adbackup[i].file2 != ""){
                    adspa.push(adbackup[i]);
        }}}if(adeng.length > 0 && lang == 0){
            var rand = RandomNumber(0, adeng.length - 1);
            curad = adeng[rand];
            playad();
        }else if(adchn.length > 0 && lang == 1){
            var cand = RandomNumber(0, adchn.length - 1);
            curad = adchn[cand];
            playad();
        }else if(adspa.length > 0 && lang == 2){
            var dand = RandomNumber(0, adspa.length - 1);
            curad = adchn[dand];
            playad();
        }else{
            showE(["text_area94", "text_area93", "button182"]);
            setT("ad", ["Watch Promo\n+? 🎟️", "观看广告\n+? 🎟️", ""]);
            setT("text_area93", ["No ads at the moment.", "目前没有广告。", ""]);
}})});
function playad(){
    setImage("ads", [curad.file, curad.file1, curad.file2]);
    clicked = false;
    tism = 15;
    changeScreen("screen7");
    kz = timedLoop(1000, function(){
        setT("text_area96", ["Time remaining: " + tism + "s\nYou will lose the reward if you quit now.\nContent may not be moderated, visitor discretion is advised.", "剩余时间: " + tism + "s\n现在退出将失去奖励。\n内容可能不加管理，访问时请小心。", ""]);
        tism--;
        if(tism < 0){
            setT("text_area96", ["Thank you for watching! Click the image to try it out! Click Back to claim your reward!", "感谢观看！点击图片来访问! 点击返回来领取你的奖励!", ""]);
            getKeyValue("ad", function(val){
                validateJSON(val, "ad analytics set w");
                val = JSON.parse(val);
                for(var i = 0; i < val.length; i++){
                    if(val[i].id == curad.id){
                        val[i].p++;
                        setKeyValue("ad", JSON.stringify(val), function(){});
                        break;
        }}});stopTimedLoop(kz);
}});}
onEvent("ads","click",function(){
    if(!clicked){
        clicked = true;
        getKeyValue("ad", function(val){
            validateJSON(val, "ad analytics set c");
            val = JSON.parse(val);
            for(var i = 0; i < val.length; i++){
                if(val[i].id == curad.id){
                    val[i].c++;
                    setKeyValue("ad", JSON.stringify(val), function(){});
                    break;
    }}});}open(curad.here);
});
function RandomNumber(lb, ub){
    var random = Math.random();
    var result =  Math.floor(random * (ub - lb + 1)) + lb;
    log("rc", random);
    return result;
}
onEvent("button193","click",function(){
    changeScreen("store");
    sIurl("ads", "assets/loading.png");
    stopTimedLoop(kz);
    setT("ad", ["Watch Promo\n+? 🎟️", "观看广告\n+? 🎟️", ""]);
    showE(["text_area94", "text_area93", "button182"]);
    if(tism < 0){
        var rand = RandomNumber(1, 100);
        var tmp = "s";
        if(rand == 100){
            rand = 5;
            log("za", 6);
            playS(3);
        }else if(rand > 94){
            rand = 4;
            log("za", 5);
            playS(3);
        }else if(rand > 84){
            rand = 3;
            log("za", 3);
            playS(4);
        }else if(rand > 64){
            rand = 2;
            log("za", 2);
            playS(8);
        }else{
            rand = 1;
            log("za", 1);
            tmp = "";
            playS(8);
        }setT("text_area93", ["Thanks for watching! Here's " + rand + " 🎟️" + tmp + "!\n\nThe Ad you just watched is Ad Serial " + curad.id + ". Use the in-game Feedback function to report inappropriate promo links.", "感谢观看！这里是" + rand + "🎟️!\n\n你刚刚看到的广告是广告代码'+curad.id+'。用游戏内的反馈功能来举报不良链接。", ""]);
        changeTicket(rand);
        setText("text_area138", ticketstring);
        processloc("ad", 1);
        if(currentid != -1 && userID != "Guest" && task.num == 6){
            uploadtask(1);
        }update();
    }else{
        playS(2);
        setT("text_area93", ["You did not finish viewing the Ad. No rewards given.\n\nThe Ad you just watched is Ad Serial " + curad.id + ". Use the in-game Feedback function to report inappropriate promo links.", "你没有看完广告，没有奖励。\n\n你刚刚看到的广告是广告代码" + curad.id + "。用游戏内的反馈功能来举报不良链接。", ""]);
}});
onEvent("text_area103","click",function(){
    fadeOut(["text_area103", "text_area104", "text_area123"]);
});
onEvent("text_area70","click",function(){
    setText("text_area75", "EXP");
    sIurl("image38", "assets/ecx.png");
    setT("text_area105", ["Play games to gain EXP, which is used for avatar unlock and leaderboard competition.", "玩游戏以获得经验，用于头像解锁和排行榜比赛。", ""]);
    playS(1);
    fadeIn(["button176", "text_area74", "text_area105", "text_area75","image38"]);
});
function startLoop(){
    xx = 360;
    stopTimedLoop(cz);
    cz = 0;
    setPosition("text_area100", xx, 415, 3300, 35);
    showElement("text_area100");
    cz = timedLoop(15, function(){xx--;
        setPosition("text_area100", xx, 415, 3300, 35);
        if(xx < -3300){
            stopTimedLoop(cz);
}})}
function startAnim(val){
    istut = true;
    if(val){
        slowfadeout("cg3");
    }setTimeout(function(){slowfadein("cg3");
        setTimeout(function(){startLoop();
            if(!mmm){
                changeScreen("welcome");
                startLoop();
                istut = false;
        }}, 500);
}, 1500);} 
onEvent("image41","click",function(){
    if(!bugset){
        bugset = 1;
        setScreen("Intro");
        switch (lang){
            case 0:setChi();
                lang = 1;
                break;
            case 1:setEng();
                lang = 0;
                break;
            case 2:setSpa();
                lang = 0;
                break;
        }update();
        startAnim(true);
        setTimeout(function(){bugset = 0
        }, 3000);
}});
function setTex(val1, val2){
    for(var i = 0; i < val1.length; i++){
        setText(val1[i], val2);
}}
function setT(val1, val2){
    switch (lang){
        case 0:setText(val1, val2[0]);
            break;
        case 1:setText(val1, val2[1]);
            break;
        case 2:setText(val1, val2[2]);
            break;
}}
function clearText(val1){
    for(var i = 0; i < val1.length; i++){
        setText(val1[i], "");
}}
function setImage(val1, val2){
    switch (lang){
        case 0:sIurl(val1, val2[0]);
            break;
        case 1:sIurl(val1, val2[1]);
            break;
        case 2:sIurl(val1, val2[2]);
            break;
}}
function setChi(){
    playS(0);
    setText("text_area230","31天👑会员\n728,880点数\n\n7天👑会员\n168,880点数\n\n1天👑会员\n26,880点数");
    setText("text_area231", "用点数购买👑");
    setText("text_area232", "商店");
    sIurl("image41", "assets/china.png");
    setTex(["barrr", "barrrrr", "text_area74", "text_area91", "text_area130", "text_area175", "text_area174", "bkdp"], "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n点击任意位置以继续");
    setText("text_area16", "云存档、排行榜、反馈、AceTrail在游客模式中不可用。\n如果您关闭网页, 您的进度将会丢失。\n您可以随时通过查看此屏幕注册或登录。");
    setText("text_area99", "请不要在自动保存图标显示时关闭游戏");
    setTex(["skip1","skip2","skip3"], "更换 3🎟️");
    setText("button32", "应用枢纽");
    setText("guest", "游客\n模式");
    setText("chatbutton", "聊天");
    setText("blacklist", "黑名单");
    setText("text_area216", "屏蔽列表");
    setText("button308", "屏蔽/取消屏蔽");
    setText("login", "登录 / 注册");
    setTex(["bYes", "aYes", "button221", "button245", "button266", "drinkyes","shopyes"], "确认");
    setTex(["No", "button222", "button246", "button267","drinkno","shopno"], "返回");
    setText("button206", "关于");
    setText("text_area101", "二十一点，老虎机，轮盘赌 - \n9个经典赌场游戏等着你。");
    setText("conbin", "继续游戏");
    setTex(["button116", "text_area55"], "反馈");
    setText("button39", "全球统计");
    setText("button55", "更新日志");
    innerHTML("text_area64", "<a href='https://crowdin.com/project/lucky-strike/' target='_blank'>翻译 = 🎟️!</a>");
    setText("text_area100", "这个应用程序包含模拟赌博，所以如果你不满13岁，请立刻退出。                请在登录后通过’反馈‘功能举报错误和提出建议，谢谢！             请不要与他人共享用户名—同时登录可能导致数据丢失。             " + faxc[mRrand]);
    setText("button82", "投注");
    setTex(["log", "label2"], "赌注");
    setTex(["button64", "button65", "button66"], "列");
    setText("button16", "黑色");
    setText("button17", "红色");
    setText("button311", "偶数");
    setText("button313", "奇数");
    setTex(["button80", "button136","button294"], "清除全部");
    setText("button315", "随机选择");
    setTex(["button81", "button137"], "撤销上一个");
    setTex(["button67", "button68", "button69", "button70", "button71", "button73", "button75", "button76", "button74", "button77", "button78", "button79"], "排");
    setText("text_area2", "规则与赔率");
    setTex(["button131", "button36", "button138", "button160", "button239", "button253", "button274", "LRule","button8", "button89", "button49", "pokerrule"], "规则");
    setText("text_area36", "刮刮卡");
    setText("label1", "选择一个图标");
    setText("ad", "观看广告\n+? 🎟️");
    setText("text_area225", "主持一场游戏");
    setText("text_area227", "加入一场游戏");
    setTex(["text_area221", "text_area226"], "PVP竞技场");
    setText("button181", "兑换");
    setText("button118", "任何Crap");
    setText("button117", "七");
    setText("button105", "PASS");
    setText("button106", "不Pass");
    setText("button140", "拿牌");
    setText("button141", "加倍");
    setText("button142", "停牌");
    setTex(["button249", "button256", "button272", "LHall"], "荣誉榜");
    setText("text_area104", "条款和条件\n\n.推广是免费的\n\n1. 你必须是应用程序的原始所有者 - 例如，不是remix\n\n2. 你的应用必须是 PG-13，不要有政治倾向。\n\n3.您必须提供自己的广告材料 - 例如: 海报, GIF, 屏幕截图\n\n4.审批后，您不能大幅改变您应用的内容。 \n\n违反条款可能导致封禁，推广的移除，和向原作者的举报。\n\n通过在“推广”下提交反馈，您即表明同意这个条款。");
    setTex(["text_area103", "text_area139"], "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n点击此处离开");
    setText("text_area32", "挑战");
    setText("button166", "筹码收藏");
    setText("text_area209", "随机");
    setTex(["text_area82", "text_area83", "text_area84", "text_area86", "text_area87", "text_area88", "text_area85", "text_area90", "text_area229","text_area102","text_area206"], "玩家");
    setText("text_area89", "您必须在线并登录来参加。");
    setText("text_area107", "老虎机");
    setText("text_area108", "轮盘赌");
    setText("text_area109", "柯诺");
    setText("text_area112", "赌马");
    setText("text_area111", "刮刮卡");
    setText("text_area110", "幸运轮盘");
    setText("button252", "    登录彩券");
    setText("text_area162", "登录彩券");
    setTex(["text_area166", "text_area187"], "奖品");
    setText("text_area186", "任务");
    setTex(["text_area189","label10"], "进度");
    setText("text_area192", "你的贡献");
    setText("text_area168", "胜率");
    setText("text_area113", "双骰子");
    setText("text_area114", "二十一点");
    setText("text_area17", "塔克\n\n花俏\n\n阿里\n\n莉莉\n\n精神\n\n饼干");
    setText("text_area73", "加载中");
    setText("text_area18", ": x2");
    setText("text_area207", "轮数：");
    setText("text_area208", "邀请一个玩家（可选）：");
    setText("text_area210", "设计游戏名单：");
    setText("text_area212", "选择一个获胜条件：");
    setTex(["pvphh","pvphost"], "创建");
    setTex(["pvpjg","pvpjoin"], "加入");
    setText("pvpdecline", "拒绝");
    setText("button301", "    每日⠀⠀ ⠀⠀    任务");
    setText("button270", "      任务达人");
    setText("text_area182", "任务达人");
    setTex(["button229", "button234"], "胜率x1\n1 🎟️");
    setTex(["button230", "button235"], "胜率x10\n9 🎟️");
    setTex(["button232", "button236"], "胜率x35\n30 🎟️");
    setText("text_area19", "赔率: x4");
    setText("text_area20", "赔率: x6");
    setText("text_area21", "赔率: x14");
    setText("text_area22", "赔率: x32");
    setText("text_area28", "赔率: x72");
    setText("button218", "解锁 1");
    setText("button220", "解锁 2");
    setText("button219", "解锁 3");
    setTex(["button241","wyw0","wxwo","wzw1"], "投注 x1\n1 🎟️");
    setTex(["button242","wyw1","wxwt","wzw2"], "投注 x10\n9 🎟️");
    setTex(["button243","wyw2","wxwh","wzw3"], "投注 x23\n30 🎟️");
    setText("zzt1", "随机数发生装备");
    setText("wxl1", "选择5个数字\n头奖88,880点数！");
    setText("wyl0", "选三个，赢大奖！\n头奖6,500点数！");
    setTex(["wxl0"], "不要在意最低的赔率，别想就是了");
    setText("button283", "打开 x1\n1 🎟️");
    setText("button284", "打开 x10\n9 🎟️");
    setText("button285", "打开 x35\n30 🎟️");
    setText("text_area128", "节日背景音乐");
    setText("text_area129", "背景音乐");
    setText("text_area124", "↙️切换     主题");
    setText("button238", "       抽奖");
    setText("text_area159", "投注");
    setText("text_area157", "账号");
    setText("text_area151", "抽奖");
    setText("text_area214", "\nPVP竞技场 ❓");
    setText("button211", "使用");
    setText("pokerstreak", "连胜：" + pokerstreak);
    setText("text_area69", "连胜: " + tempeight);
    setText("text_area44", "连胜: " + tempseven);
    setText("wheelstreak", "连胜: " + tempsix);
    setText("text_area68", "连胜: " + tempfive);
    setText("text_area11", "连胜: " + tempfour);
    setText("text_area67", "连胜: " + tempthree);
    setText("text_area65", "连胜: " + tempone);
    setTex(["text_area37", "text_area44", "text_area49", "text_area11", "text_area3", "text_area24"], "投注: " + wager);
    setText("text_area8", "筹码大小: " + wager);
    setText("button37", "花 " + wager + " 购买");
    setText("streak1", "连胜: " + g1s);
    setText("streak2", "连胜: " + g2s);
    setText("streak3", "连胜: " + g3s);
    setText("streak4", "连胜: " + g4s);
    setText("streak5", "连胜: " + g5s);
    setText("streak6", "连胜: " + g6s);
    setText("streak7", "连胜: " + g7s);
    setText("streak8", "连胜: " + g8s);
    setText("olplayer", "在线玩家");
    setText("text_area179", "⚠️ 剧透");
    hideE(["pvpcriteriax","pvpcriteria","text_area15", "text_area122", "text_area71", "text_area121", "text_area56", "text_area118", "dropdown1", "dropdown3", "button42", "button30", "text_area79", "text_area116", "player0", "player1", "player2", "player3", "player4", "dealer0", "dealer1", "dealer2", "dealer3", "dealer4"]);
    showE(["pvpcriteriac","text_area119", "text_area117", "text_area120", "text_area115", "dropdown2"]);
    setText("text_area13", "已选" + selected + "个 - 你需要20个");
    clearText(["text_area1", "text_area9", "text_area10", "text_area46", "text_area43", "text_area52", "text_area51", "text_area54"]);
    setText("text_area25", "尚没有赌注！");
    setText("text_area33", "下个注！");
    setText("Back", "返回");
    setText("Quit", "退出");
    setText("You","你");
    setText("button302","重看教程");
    setText("pvptemp", "联机游戏");
    setText("wxl1", "选择5个数字\n头奖88880点数!");
    setText("wyl0", "选择三个区域, 赢大奖!\n头奖6500点数!");
    setText("Anim4","由Applab技术支持\n\n由MtnGck AppMaker开发\n\n应用评级不包括联机互动");
    setText("zzt1", "随机数发生器\n\nX");
    setTex(["wxl0", "wyl1"], "不要在意最低赔率。别想就是了。");
    setText("text_area125", "40/42成就来解锁这些特殊项！");
    setText("text_area180", "30/42成就来解锁这些特殊项！");
    setText("text_area30", "20/42成就来解锁这些特殊项！");
    setText("text_area169", "10/42成就来解锁这些特殊项！");
    setTex(["leagueB2", "LMText"],"排位赛");
    setText("LSText1", "排位");
    setText("LSText2", "目标");
    setText("LYourscore", "你的分数");
    setText("LEstreward", "预估奖励");
    setText("text_area135", "是否排名:");
    betz = [];
    zzzh = [];
    betLog = betText = "";
    setText("text_area161", "获取👑");
    setText("text_area239", "每日任务");
    setText("text_area236", "经典扑克");
    setText("drinkt5","送一份饮品");
    setText("drinkt","给另一位玩家买份饮品。TA会获得点数减去30%的服务费。");
    setText("drinks1","第一步：\n输入一个玩家代码：");
    setText("drinks2","第二步：选择一份饮品：\n所有价格单位都是点数。");
    setText("pokeranno","点击Touch来玩。");
    setText("loop",txC);
}
function setEng(){
    playS(0);
    setText("pokeranno","Click Touch to play.");
    setText("text_area230","31 Day 👑 Membership\n728,880 Credits\n\n7 Day 👑 Membership\n168,880 Credits\n\n1 Day 👑 Membership\n26,880 Credits");
    setText("text_area231", "Buy 👑 using Credit");
    setText("text_area232", "Shop");
    setText("drinkt5","Gift a Drink");
    setText("drinkt","Buy another player a drink. They will receive the credits minus a 30% service fee.");
    setText("drinks1","Step 1:\nEnter a player number:");
    setText("drinks2","Step 2: Select a beverage:\nAll prices are in Credits.");
    sIurl("image41", "assets/usa.png");
    setText("LSText1", "Ranking");
    setText("LSText2", "Target");
    setText("text_area236", "Video Poker");
    setText("LYourscore", "Your Score");
    setText("LEstreward", "Est. Reward");
    setText("text_area239", "Daily Mission");
    setText("text_area125", "40/42 the Challenges to unlock special items!");
    setText("text_area180", "30/42 the Challenges to unlock special items!");
    setText("text_area30", "20/42 the Challenges to unlock special items!");
    setText("text_area169", "10/42 the Challenges to unlock special items!");
    setTex(["leagueB2", "LMText"],"League");
    setTex(["barrr", "barrrrr", "text_area74", "text_area91", "text_area130", "text_area175", "text_area174","bkdp"], "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nClick anywhere to continue");
    setText("text_area16", "Cloud Save, Leaderboard, Feedback, and AceTrail are not available in Guest Mode. Your progress will be lost if you close the web page.\nYou can Sign Up or Log In anytime by revisiting this screen.");
    setText("text_area99", "Do not close the game when this autosave icon is on");
    setText("Anim4","Powered By Applab\n\nDeveloped by MtnGck AppMaker\n\nOnline interaction not rated");
    setText("button32", "App Hub");
    setText("guest", "Guest Mode");
    setText("text_area216", "Block list");
    setText("button308", "Block/Unblock");
    setText("pvptemp", "Online Play");
    setText("button302","Replay Tutorial");
    setText("text_area207", "Number of rounds:");
    setText("text_area135", "Ranked:");
    setText("text_area208", "Invite a player (optional):");
    setText("chatbutton", "Chat");
    setText("blacklist", "Block");
    setText("You","You");
    setText("olplayer", "Online Player");
    setText("text_area210", "Design the game roster:");
    setText("text_area212", "Select a win criteria:");
    setTex(["skip1","skip2","skip3"], "Change 3🎟️");
    setText("pvpdecline", "Decline");
    setText("wxl1", "Choose 5 numbers\nJackpot 88,880 Credits!");
    setText("wyl0", "Choose 3, win BIG!\nJackpot 6,500 Credits!");
    setText("zzt1", "The Pseudo Random Number Generator\n\nX");
    setTex(["wxl0", "wyl1"], "Don't worry about the lowest payout. Just don't think about it.");
    setText("button301", "    Daily ⠀Mission");
    setText("text_area162", "Log-in Lotto");
    setText("text_area209", "Random");
    setTex(["text_area166", "text_area187"], "Prize");
    setText("text_area168", "Chance");
    setText("text_area186", "Task");
    setTex(["text_area189","label10"], "Progress");
    setText("text_area192", "Your Share");
    setText("login", "Log In / Sign Up");
    setText("text_area214", "\nPVP Arena ❓");
    setTex(["pvphh","pvphost"], "Host");
    setTex(["pvpjg","pvpjoin"], "Join");
    setText("text_area225", "Host a Game");
    setText("text_area227", "Join a Game");
    setTex(["text_area221", "text_area226"], "PVP Arena");
    setTex(["bYes", "aYes", "button221", "button245", "button266","drinkyes","shopyes"], "Confirm");
    setTex(["No", "button222", "button246", "button267", "drinkno","shopno"], "Return");
    setText("button206", "About");
    setText("text_area101", "Blackjack, Slots, Roulettes...\n9 casino classics awaits you.");
    setText("conbin", "Continue to Game");
    setTex(["button116", "text_area55"], "Feedback");
    setText("button39", "Global Stat");
    setText("button55", "Update Log");
    setText("text_area100", "This app contains simulated gambling, so if you are under 13 years old, quit now.                Report bugs and give suggestions via 'Feedback' after login, thank you!             Try not to share your username with others - simultaneous login may result in data loss.             " + faxe[mRrand]);
    setText("button82", "Place Bet");
    setTex(["log", "label2"], "Bets");
    setTex(["button64", "button65", "button66"], "col");
    setText("button16", "Blk");
    setText("button17", "Red");
    setText("button311", "Even");
    setText("button313", "Odd");
    setText("button252", "    Log-in Lotto");
    innerHTML("text_area64", "<a href='https://crowdin.com/project/lucky-strike/' target='_blank'>Translate = 🎟️!</a>");
    setTex(["button80", "button136", "button294"], "Clear all");
    setText("button315", "Select random");
    setTex(["button81", "button137"], "Undo last");
    setTex(["button67", "button68", "button69", "button70", "button71", "button73", "button75", "button76", "button74", "button77", "button78", "button79"], "row");
    setText("text_area2", "Rule & Payout");
    setTex(["button131", "button36", "button138", "button160", "button239", "button253", "button274", "LRule","button8", "button89", "button49", "pokerrule"], "Rule");
    setText("label1", "Select an icon");
    setText("text_area36", "Scratch!");
    setText("text_area128", "Holiday Music");
    setText("text_area129", "Background Music");
    setText("ad", "Watch Promo\n+? 🎟️");
    setText("button181", "Redeem");
    setTex(["button249", "button256", "button272", "LHall"], "Hall of Fame");
    setText("button218", "Unlock 1");
    setText("button220", "Unlock 2");
    setText("button219", "Unlock 3");
    setText("button118", "Any Crap");
    setText("button117", "Seven");
    setText("button105", "PASS");
    setText("button106", "Don't Pass");
    setText("button140", "Hit");
    setText("button141", "Double");
    setText("button142", "Stand");
    setText("text_area179", "⚠️ Spoiler");
    setText("text_area104", "TERMS AND CONDITIONS\n\n0. Promotion is FREE.\n\n1. You must be the original owner of the app - e.g. no remix\n\n2. Your app must be PG-13 in terms of content, and must not be political.\n\n3. You must provide your own advert material - e.g. poster, GIF, screenshot\n\n4: After approval, You may not drastically shift the content of your app.\n\nVIOLATION OF THE TERMS CAN RESULT IN A BAN, REMOVAL OF ADVERT, AND REPORT TO THE APP OWNER.\n\nBy submitting feedback under 'promotion', you signify your agreement to this term.");
    setTex(["text_area103", "text_area139"], "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nClick here to leave");
    setText("text_area32", "Challenges");
    setText("button166", "Chip Collection");
    setTex(["text_area82", "text_area83", "text_area84", "text_area86", "text_area87", "text_area88", "text_area85", "text_area90", "text_area229","text_area102","text_area206"], "Player");
    setText("text_area89", "You must be online and signed in to participate.");
    setText("text_area107", "Slots");
    setText("text_area108", "Roulette");
    setText("text_area73", "Loading");
    setText("text_area109", "Keno");
    setText("button270", "      Taskmaster");
    setText("text_area182", "Taskmaster");
    setText("text_area112", "Horse Bet");
    setTex(["button229", "button234"], "Spin x1\n1 🎟️");
    setTex(["button230", "button235"], "Spin x10\n9 🎟️");
    setTex(["button232", "button236"], "Spin x35\n30 🎟️");
    setTex(["button241","wyw0","wxwo","wzw1"], "Wager x1\n1 🎟️");
    setTex(["button242","wyw1","wxwt","wzw2"], "Wager x10\n9 🎟️");
    setTex(["button243","wyw2","wxwh","wzw3"], "Wager x35\n30 🎟️");
    setText("button283", "Open x1\n1 🎟️");
    setText("button284", "Open x10\n9 🎟️");
    setText("button285", "Open x35\n30 🎟️");
    setText("text_area111", "Scratch Card");
    setText("text_area110", "Big Six Wheel");
    setText("text_area113", "Craps");
    setText("text_area114", "Blackjack");
    setText("text_area17", "Tucker\n\nFancy\n\nAlex\n\nLily\n\nSpirit\n\nBiscuit");
    setText("text_area18", "Payout: x2");
    setText("text_area19", "Payout: x4");
    setText("text_area20", "Payout: x6");
    setText("text_area21", "Payout: x14");
    setText("text_area22", "Payout: x32");
    setText("text_area28", "Payout: x72");
    setText("button238", "       Sweepstakes");
    setText("loop",txE);
    setText("text_area159", "Your Wager");
    setText("text_area157", "Prize Pool");
    setText("text_area151", "Sweepstakes");
    setText("button211", "Use");
    setText("Back", "Back");
    setText("Quit", "Quit");
    setText("text_area124", "↙️Change     Theme");
    setText("pokerstreak", "Win streak: " + pokerstreak);
    setText("text_area69", "Win streak: " + tempeight);
    setText("text_area44", "Win streak: " + tempseven);
    setText("wheelstreak", "Win streak: " + tempsix);
    setText("text_area68", "Win streak: " + tempfive);
    setText("text_area11", "Win streak: " + tempfour);
    setText("text_area67", "Win streak: " + tempthree);
    setText("text_area65", "Win streak: " + tempone);
    setText("text_area8", "Chip size: " + wager);
    setText("button37", "Buy at " + wager);
    setTex(["text_area37", "text_area44", "text_area49", "text_area11", "text_area3"], "Wager: " + wager);
    setText("text_area24", "Bet: " + wager);
    setText("streak1", "Streak: " + g1s);
    setText("streak2", "Streak: " + g2s);
    setText("streak3", "Streak: " + g3s);
    setText("streak4", "Streak: " + g4s);
    setText("streak5", "Streak: " + g5s);
    setText("streak6", "Streak: " + g6s);
    setText("streak7", "Streak: " + g7s);
    setText("streak8", "Streak: " + g8s);
    hideE(["pvpcriteriax","pvpcriteriac","text_area119", "text_area122", "text_area120", "text_area121", "text_area118", "text_area117", "dropdown2", "dropdown3", "button42", "button30", "text_area115", "text_area116", "player0", "player1", "player2", "player3", "player4", "dealer0", "dealer1", "dealer2", "dealer3", "dealer4"]);
    showE(["pvpcriteria","text_area15", "text_area71", "text_area56", "text_area79", "dropdown1"]);
    clearText(["text_area1", "text_area9", "text_area10", "text_area46", "text_area43", "text_area52", "text_area51", "text_area54"]);
    setText("text_area13", selected + " selected - you need 20");
    setText("text_area25", "No bets yet!");
    setText("text_area33", "Set a bet!");
    betz = [];
    zzzh = [];
    betLog = betText = "";
    setText("text_area161", "Get 👑");
}
function setSpa(){
    playS(0);
    sIurl("image41", "assets/spain.png");
    hideE(["pvpcriteria","pvpcriteriac","text_area119", "text_area75", "text_area120", "text_area71", "text_area115", "text_area79", "dropdown2", "dropdown1", "button42", "button30", "text_area117", "text_area56", "player0", "player1", "player2", "player3", "player4", "dealer0", "dealer1", "dealer2", "dealer3", "dealer4"]);
    showE(["pvpcriteriax","text_area122", "text_area121", "text_area118", "text_area116", "dropdown3"]);
    betz = zzzh = [];
    betLog = betText = "";
    setText("loop",txS);
    if(IAP){
        setText("text_area161", "");
}}
onEvent("button205","click",function(){
    setT("text_area123", ["How do you verify the author?\nVia screenshots of an app's detailed version history and code.org account name initials.\n\nHow does multi-language affect promotion?\nAdverts are language specific. For example, someone who selected Spanish won’t see adverts in English. As a creator, you can use this opportunity to target a specific demographic or reach a larger demographic more effectively by translating your adverts.\n\nWhat files are accepted?\nScreenshots, posters, short videos are all accepted. (JPG, PNG, GIF) Max file size is 500KB per file.\n\nBut I don't know how to make adverts!\nThere are free tools such as Canva and Filmmaker. For starters, PowerPoint and Windows built-in Snipping Tools are very easy to use.\n\nI don't know what to put in the adverts!\nWhat makes your app good? Or special? Or both?\n\nWhat do you mean by 'you cannot drastically shift the content'?\nFor example, your promotion will be dropped if you advertised for a chat app, only for it to be changed into something that's not a chat app at all. This will be decided on a case-by-case basis.", "怎么验证作者？\n通过应用程序版本历史和 code.org 帐户名称首字母的屏幕截图。\n\n多语言如何影响推广？\n广告是特定于语言的。例如，选择西班牙语的人将看不到英语广告。作为创作者，您可以利用这个机会通过翻译您的广告来更有效地定位特定人群或覆盖更大的人群。\n\n接受哪些文件？\n截图、海报、短视频都接受。 （JPG、PNG、GIF）每个文件的最大文件大小为 500KB。\n\n但是我不知道怎么做广告！\n有免费的工具，例如 Canva 和 Filmmaker。对于初学者来说，PowerPoint 和 Windows 内置的截图工具非常易于使用。\n\n我不知道该在广告中放什么！\n是什么让你的应用程序优秀？或者特别？或两者兼具？\n\n“不能大幅改变应用的内容”是什么意思？\n例如，如果您为聊天应用做广告，如果你的程序变成了和聊天毫不相关的程序，你的广告将被取消。这将根据具体情况决定。", ""]);
    showE(["text_area123", "text_area103"]);
});
onEvent("button206","click",function(){
    doStat(false);
    setPosition("image20", 888, 385, 40, 40);
    setText("ee", "");
    setT("text_area4", ["\nProject Syn\n\nCreated w/❤️ by Tony T. aka MtnGck\n\nPVP bar design, ELO rating, original chat time formatter: [WUT] Adam\n\nTranslation:\n\nMtnGck - Chinese\n\n"+assetlist, "\nProject Syn\n\n作者 w/❤️：Tony T. aka MtnGck\n\nPVP板块设计，ELO分数，原版聊天模块时间格式代码：[WUT] Adam\n\n翻译：\n\nMtnGck - 中文\n\n"+assetlist, ""]);
    if(bgm && estt == 3){
        setT("ee", ["Sci-fi style! Space Casino! Wam!", "科幻风格！太空赌场！哇！", ""]);
        wap = 1;
        if(wam == 1 && war == 1 && wac == 1 && waf == 1 && h26 != 2){
            h26 = 1;
            showElement("image35");
}}});
onEvent("text_area124","click",function(){
    if(trgf < 2){
        trgf++;
    }else{
        trgf = 0;
        fadeIn(["barrier", "logintext"]);
        rejectli(["Theres no easter egg on this side.\n\nGo away!", "这一侧没有彩蛋。\n\n快走吧！", ""]);
}});
onEvent("button197","click",function(){
    if(trgf < 2){
        trgf++;
    }else{
        trgf = 0;
        changeScreen("test1");
        playS(15);
        if(tttim > 47){
            hideE(["text_area125", "image43"]);
        }else{
            showE(["text_area125", "image43"]);
        }if(tttim > 35){
            hideE(["text_area180", "image77"]);
        }else{
            showE(["text_area180", "image77"]);
        }if(tttim > 23){
            hideE(["text_area30", "image76"]);
        }else{
            showE(["text_area30", "image76"]);
        }if(tttim > 11){
            hideE(["text_area169", "image73"]);
        }else{
            showE(["text_area169", "image73"]);
}}});
onEvent("button207","click",function(){
    changeScreen("welcome");
    playS(0);
});
onEvent("button208","click",function(){
    inds = 0;
    changeScreen("test2");
    showElement("button213");
    hideElement("image42");
    var tmp = ind1 + 1;
    setText("text_area127", mp3[ind1] + "\n" + tmp + " / " + mp3.length);
});
onEvent("button209","click",function(){
    inds = 1;
    changeScreen("test2");
    hideElement("button213");
    showElement("image42");
    sIurl("image42", img[ind2]);
    var tmp = ind2 + 1;
    setText("text_area127", img[ind2] + "\n" + tmp + " / " + img.length);
});
onEvent("button264","click",function(){
    inds = 2;
    changeScreen("test2");
    showElement("button213");
    hideElement("image42");
    var tmp = ind3 + 1;
    setText("text_area127", smp3[ind3] + "\n" + tmp + " / " + smp3.length);
});
onEvent("button265","click",function(){
    inds = 3;
    changeScreen("test2");
    hideElement("button213");
    showElement("image42");
    sIurl("image42", simg[ind4]);
    var tmp = ind4 + 1;
    setText("text_area127", simg[ind4] + "\n" + tmp + " / " + simg.length);
});
onEvent("button210","click",function(){
    stopSound();
    changeScreen("test1");
});
onEvent("button214","click",function(){
    stopSound();
    var tmp;
    if(inds == 0){
        if(ind1 > 0){
            ind1--;
            tmp = ind1 + 1;
            setText("text_area127", mp3[ind1] + "\n" + tmp + " / " + mp3.length);
            showElement("button215");
        }else{
            hideElement("button214");
    }}else if(inds == 1){
        if(ind2 > 0){
            ind2--;
            tmp = ind2 + 1;
            setText("text_area127", img[ind2] + "\n" + tmp + " / " + img.length);
            sIurl("image42", img[ind2]);
            showElement("button215");
        }else{
            hideElement("button214");
    }}else if(inds == 2){
        if(ind3 > 0){
            ind3--;
            tmp = ind3 + 1;
            setText("text_area127", smp3[ind3] + "\n" + tmp + " / " + smp3.length);
            showElement("button215");
        }else{
            hideElement("button214");
    }}else if(inds == 3){
        if(ind4 > 0){
            ind4--;
            tmp = ind4 + 1;
            setText("text_area127", simg[ind4] + "\n" + tmp + " / " + simg.length);
            sIurl("image42", simg[ind4]);
            showElement("button215");
        }else{
            hideElement("button214");
}}});
onEvent("button215","click",function(){
    stopSound();
    var tmp;
    if(inds == 0){
        if(ind1 < mp3.length - 1){
            ind1++;
            tmp = ind1 + 1;
            setText("text_area127", mp3[ind1] + "\n" + tmp + " / " + mp3.length);
            showElement("button214");
        }else{
            hideElement("button215");
    }}else if(inds == 1){
        if(ind2 < img.length - 1){
            ind2++;
            tmp = ind2 + 1;
            setText("text_area127", img[ind2] + "\n" + tmp + " / " + img.length);
            sIurl("image42", img[ind2]);
            showElement("button214");
        }else{
            hideElement("button215");
    }}else if(inds == 2){
        if(ind3 < smp3.length - 1){
            ind3++;
            tmp = ind3 + 1;
            setText("text_area127", smp3[ind3] + "\n" + tmp + " / " + smp3.length);
            showElement("button214");
        }else{
            hideElement("button215");
    }}else if(inds == 3){
        if(ind4 < simg.length - 1){
            ind4++;
            tmp = ind4 + 1;
            setText("text_area127", simg[ind4] + "\n" + tmp + " / " + simg.length);
            sIurl("image42", simg[ind4]);
            showElement("button214");
        }else{
            hideElement("button215");
}}});
onEvent("button213","click",function(){
    if(inds == 0){
        playSound(mp3[ind1]);
    }else{
        playSound(smp3[ind3]);
}});
onEvent("button211","click",function(){
    playS(9);
    var next = Math.ceil((tttim+1)/5)*5;
    if(next > 39){
        setT("text_area134", ["Any incomplete challenge can be skipped with tokens. You've received all the tokens!", "代币可以跳过任何没有完成的挑战。你已获得所有代币！", ""]);
    }else{
        next = next - tttim;
        var gap = "";
        if(next > 1){
            gap = "s";
        }setT("text_area134", ["Any incomplete challenge can be skipped with tokens. Complete "+next+" more mission"+gap+" for the next token. You have received "+flgs+" out of 8 tokens.", "代币可以跳过任何没有完成的挑战。完成"+next+"个挑战来获得下一个代币。8个代币中你已获得"+flgs+"个。", ""]);
    }fadeIn(["text_area134", "text_area133", "button216"]);
    if(active[0]){
        showElement("button218");
    }else{
        hideElement("button218");
    }if(active[1]){
        showElement("button220");
    }else{
        hideElement("button220");
    }if(active[2]){
        showElement("button219");
    }else{
        hideElement("button219");
}});
onEvent("button216","click",function(){
    playS(0);
    fadeOut(["text_area134", "text_area133", "button216", "button219", "button218", "button220"]);
});
onEvent("button218","click",function(){
    playS(8);
    switch (chap){
        case 1:indexs = 1;
            setT("text_area137", ["Skip Wheel 1 for 1 token? This action cannot be undone.", "用1代币跳过幸运轮盘1？此操作不可撤消。", ""]);
            break;
        case 2:indexs = 4;
            setT("text_area137", ["Skip Blackjack 1 for 1 token? This action cannot be undone.", "用1代币跳过二十一点1？此操作不可撤消。", ""]);
            break;
        case 3:indexs = 7;
            setT("text_area137", ["Skip Roulette 1 for 1 token? This action cannot be undone.", "用1代币跳过轮盘赌1？此操作不可撤消。", ""]);
            break;
        case 4:indexs = 10;
            setT("text_area137", ["Skip Keno 1 for 1 token? This action cannot be undone.", "用1代币跳过柯诺1？此操作不可撤消。", ""]);
            break;
        case 5:indexs = 13;
            setT("text_area137", ["Skip Craps 1 for 1 token? This action cannot be undone.", "用1代币跳过双骰子1？此操作不可撤消。", ""]);
            break;
        case 6:indexs = 16;
            setT("text_area137", ["Skip Slots 1 for 1 token? This action cannot be undone.", "用1代币跳过老虎机1？此操作不可撤消。", ""]);
            break;
        case 7:indexs = 19;
            setT("text_area137", ["Skip Scratch 1 for 1 token? This action cannot be undone.", "用1代币跳过刮刮卡1？此操作不可撤消。", ""]);
            break;
        case 8:indexs = 22;
            setT("text_area137", ["Skip Horse 1 for 1 token? This action cannot be undone.", "用1代币跳过赌马1？此操作不可撤消。", ""]);
            break;
        case 9:indexs = 25;
            setT("text_area137", ["Skip Main 1 for 1 token? This action cannot be undone.", "用1代币跳过主要1？此操作不可撤消。", ""]);
            break;
        case 10:indexs = 28;
            setT("text_area137", ["Skip Extra 1 for 1 token? This action cannot be undone.", "用1代币跳过额外1？此操作不可撤消。", ""]);
            break;
        case 11:indexs = 31;
            setT("text_area137", ["Skip 🎟️ 1-1 for 1 token? This action cannot be undone.", "用1代币跳过🎟️1-1？此操作不可撤消。", ""]);
            break;
        case 12:indexs = 34;
            setT("text_area137", ["Skip ATM 1 for 1 token? This action cannot be undone.", "用1代币跳过ATM1？此操作不可撤消。", ""]);
            break;
        case 13:indexs = 37;
            setT("text_area137", ["Skip Online 1 for 1 token? This action cannot be undone.", "用1代币跳过联机1？此操作不可撤消。", ""]);
            break;
        case 14:indexs = 40;
            setT("text_area137", ["Skip 🎟️ 2-1 for 1 token? This action cannot be undone.", "用1代币跳过🎟️ 2-1？此操作不可撤消。", ""]);
            break;
        case 15:indexs = 43;
            setT("text_area137", ["Skip Poker 1 for 1 token? This action cannot be undone.", "用1代币跳过扑克1？此操作不可撤消。", ""]);
            break;
        case 16:indexs = 43;
            setT("text_area137", ["Skip Challenge 1 for 1 token? This action cannot be undone.", "用1代币跳过挑战1？此操作不可撤消。", ""]);
            break;
    }fadeIn(["text_area136", "text_area137", "button222", "button221"]);
});
onEvent("button220","click",function(){
    playS(8);
    switch (chap){
        case 1:indexs = 2;
            setT("text_area137", ["Skip Wheel 2 for 1 token? This action cannot be undone.", "用1代币跳过幸运轮盘2？此操作不可撤消。", ""]);
            break;
        case 2:indexs = 5;
            setT("text_area137", ["Skip Blackjack 2 for 1 token? This action cannot be undone.", "用1代币跳过二十一点2？此操作不可撤消。", ""]);
            break;
        case 3:indexs = 8;
            setT("text_area137", ["Skip Roulette 2 for 1 token? This action cannot be undone.", "用1代币跳过轮盘赌2？此操作不可撤消。", ""]);
            break;
        case 4:indexs = 11;
            setT("text_area137", ["Skip Keno 2 for 1 token? This action cannot be undone.", "用1代币跳过柯诺2？此操作不可撤消。", ""]);
            break;
        case 5:indexs = 14;
            setT("text_area137", ["Skip Craps 2 for 1 token? This action cannot be undone.", "用1代币跳过双骰子2？此操作不可撤消。", ""]);
            break;
        case 6:indexs = 17;
            setT("text_area137", ["Skip Slots 2 for 1 token? This action cannot be undone.", "用1代币跳过老虎机2？此操作不可撤消。", ""]);
            break;
        case 7:indexs = 20;setT("text_area137", ["Skip Scratch 2 for 1 token? This action cannot be undone.", "用1代币跳过刮刮卡2？此操作不可撤消。", ""]);
            break;
        case 8:indexs = 23;
            setT("text_area137", ["Skip Horse 2 for 1 token? This action cannot be undone.", "用1代币跳过赌马2？此操作不可撤消。", ""]);
            break;
        case 9:indexs = 26;setT("text_area137", ["Skip Main 2 for 1 token? This action cannot be undone.", "用1代币跳过主要2？此操作不可撤消。", ""]);
            break;
        case 10:indexs = 29;
            setT("text_area137", ["Skip Extra 2 for 1 token? This action cannot be undone.", "用1代币跳过额外2？此操作不可撤消。", ""]);
            break;
        case 11:indexs = 32;setT("text_area137", ["Skip 🎟️ 1-2 for 1 token? This action cannot be undone.", "用1代币跳过🎟️1-2？此操作不可撤消。", ""]);
            break;
        case 12:indexs = 35;setT("text_area137", ["Skip ATM 2 for 1 token? This action cannot be undone.", "用1代币跳过ATM2？此操作不可撤消。", ""]);
            break;
        case 13:indexs = 38;
            setT("text_area137", ["Skip Online 2 for 1 token? This action cannot be undone.", "用1代币跳过联机2？此操作不可撤消。", ""]);
            break;
        case 14:indexs = 41;
            setT("text_area137", ["Skip 🎟️ 2-2 for 1 token? This action cannot be undone.", "用1代币跳过🎟️ 2-2？此操作不可撤消。", ""]);
            break;
        case 15:indexs = 44;
            setT("text_area137", ["Skip Poker 2 for 1 token? This action cannot be undone.", "用1代币跳过扑克2？此操作不可撤消。", ""]);
            break;
        case 16:indexs = 47;
            setT("text_area137", ["Skip Challenge 2 for 1 token? This action cannot be undone.", "用1代币跳过挑战2？此操作不可撤消。", ""]);
            break;
    }fadeIn(["text_area136", "text_area137", "button222", "button221"]);
});
onEvent("button219","click",function(){
    playS(8);
    switch (chap){
        case 1:indexs = 3;
            setT("text_area137", ["Skip Wheel 3 for 1 token? This action cannot be undone.", "用1代币跳过幸运轮盘3？此操作不可撤消。", ""]);
            break;
        case 2:indexs = 6;
            setT("text_area137", ["Skip Blackjack 3 for 1 token? This action cannot be undone.", "用1代币跳过二十一点3？此操作不可撤消。", ""]);
            break;
        case 3:indexs = 9;
            setT("text_area137", ["Skip Roulette 3 for 1 token? This action cannot be undone.", "用1代币跳过轮盘赌3？此操作不可撤消。", ""]);
            break;
        case 4:indexs = 12;
            setT("text_area137", ["Skip Keno 3 for 1 token? This action cannot be undone.", "用1代币跳过柯诺3？此操作不可撤消。", ""]);
            break;
        case 5:indexs = 15;
            setT("text_area137", ["Skip Craps 3 for 1 token? This action cannot be undone.", "用1代币跳过双骰子3？此操作不可撤消。", ""]);
            break;
        case 6:indexs = 18;
            setT("text_area137", ["Skip Slots 3 for 1 token? This action cannot be undone.", "用1代币跳过老虎机3？此操作不可撤消。", ""]);
            break;
        case 7:indexs = 21;
            setT("text_area137", ["Skip Scratch 3 for 1 token? This action cannot be undone.", "用1代币跳过刮刮卡3？此操作不可撤消。", ""]);
            break;
        case 8:indexs = 24;
            setT("text_area137", ["Skip Horse 3 for 1 token? This action cannot be undone.", "用1代币跳过赌马3？此操作不可撤消。", ""]);
            break;
        case 9:indexs = 27;
            setT("text_area137", ["Skip Main 3 for 1 token? This action cannot be undone.", "用1代币跳过主要3？此操作不可撤消。", ""]);
            break;
        case 10:indexs = 30;
            setT("text_area137", ["Skip Extra 3 for 1 token? This action cannot be undone.", "用1代币跳过额外3？此操作不可撤消。", ""]);
            break;
        case 11:indexs = 33;
            setT("text_area137", ["Skip 🎟️ 1-3 for 1 token? This action cannot be undone.", "用1代币跳过🎟️1-3？此操作不可撤消。", ""]);
            break;
        case 12:indexs = 36;
            setT("text_area137", ["Skip ATM 3 for 1 token? This action cannot be undone.", "用1代币跳过ATM3？此操作不可撤消。", ""]);
            break;
        case 13:indexs = 39;
            setT("text_area137", ["Skip Online 3 for 1 token? This action cannot be undone.", "用1代币跳过联机3？此操作不可撤消。", ""]);
            break;
        case 14:indexs = 42;
            setT("text_area137", ["Skip Online 🎟️ 2-3 for 1 token? This action cannot be undone.", "用1代币跳过🎟️ 2-3？此操作不可撤消。", ""]);
            break;
        case 15:indexs = 45;
            setT("text_area137", ["Skip Poker 3 for 1 token? This action cannot be undone.", "用1代币跳过扑克3？此操作不可撤消。", ""]);
            break;
        case 16:indexs = 48;
            setT("text_area137", ["Skip Challenge 3 for 1 token? This action cannot be undone.", "用1代币跳过挑战3？此操作不可撤消。", ""]);
            break;
    }fadeIn(["text_area136", "text_area137", "button222", "button221"]);
});
onEvent("button222","click",function(){
    playS(0);
    indexs = 0;
    fadeOut(["text_area136", "text_area137", "button222", "button221"]);
});
onEvent("button221","click",function(){
    if(mtt > 0 && userID != "Guest'" && !coo){
        mtt--;
        setT("text_area137", ["Querying online database.\nIf this took more than 5 seconds check your internet connection.", "正在查询数据库。\n如果此操作超过了5秒，请检查您的网络连接。", ""]);
        hideE(["button221", "button222"]);
        switch (indexs){
            case 1:sixspin = 400;
                break;
            case 2:sixgold = 8;
                break;
            case 3:sixstreak = 5;
                break;
            case 4:eigbet = 300;
                break;
            case 5:eigdouble = 20;
                break;
            case 6:eigstreak = 6;
                break;
            case 7:twospin = 300;
                break;
            case 8:twoguess = 8;
                break;
            case 9:twostreak = 5;
                break;
            case 10:fourbet = 300;
                break;
            case 11:fourspec = 1;
                break;
            case 12:fourstreak = 5;
                break;
            case 13:sevthrow = 300;
                break;
            case 14:sevspec = 12;
                break;
            case 15:sevstreak = 8;
                break;
            case 16:onespin = 400;
                break;
            case 17:onejack = 1;
                break;
            case 18:onestreak = 6;
                break;
            case 19:fivescrat = 300;
                break;
            case 20:fivemega = 1;
                break;
            case 21:fivestreak = 4;
                break;
            case 22:thrtry = 200;
                break;
            case 23:thrguess = 10;
                break;
            case 24:ttreak = 5;
                break;
            case 25:h26 = 1;
                break;
            case 26:playTime = 21600;
                break;
            case 27:winrand = 200;
                break;
            case 28:login = 100;
                break;
            case 29:timeAward = 30;
                break;
            case 30:h30 = 2;
                break;
            case 31:tgp = 2;
                break;
            case 32:twj = 3;
                break;
            case 33:tsj = 1;
                break;
            case 34:ssw = 1;
                break;
            case 35:ltd = 2;
                break;
            case 36:adv = 20;
                break;
            case 37:dmeee = 60;
                break;
            case 38:olw = 30;
                break;
            case 39:chm = 600;
                break;
            case 40:wxc = 1;
                break;
            case 41:wyc = 1;
                break;
            case 42:wzc = 1;
                break;
            case 43:pka = 300;
                break;
            case 44:pkb = 1;
                break;
            case 45:pkc = 5;
                break;
            case 46:dms = 21;
                break;
            case 47:ftueflag = [1,1,1,1,1,1,1,1,1,1,1,1,1,1];
                break;
            case 48: m48 = 2;
                break;
        }updateProfile(1, 0);
    } else{
        hideElement("button221");
        if(userID == "Guest"){
            setT("text_area137", ["Unavailable in Guest Mode. Please create an account or log in.", "游客模式下不可用。请创建账号或登录。", ""]);
            playS(2);
        }else if(coo){
            setT("text_area137", ["Unavailable in Cheat Mode. Please refresh the game.", "作弊模式下不可用。请刷新程序。", ""]);
            playS(2);
        }else{
            setT("text_area137", ["Insufficient token!", "代币不足！", ""]);
            playS(2);
}}});
function dodynamic(val){
    dynqueque.push(val);
}
function dode(gap){
    if(gap <= 40 && dynamix <= 8){
        dynamix+=2;
    }else if(gap <= 40){
        gap++;
    }else if(gap > 40){
        dynamix -= 2;
    }setPosition("syna", 35, dynamix, 250, 25);
    if(dynamix > -40){
        setTimeout(function(){
            dode(gap);
}, 40);}else{
    occupado = false;
}}
onEvent("ftue0","click",function(){
    if(ftueflag[0]){
    doTutorial(0);
}});
onEvent("ftue1","click",function(){
    if(ftueflag[1]){
    doTutorial(1);
}});
onEvent("ftue2","click",function(){
    if(ftueflag[2]){
    doTutorial(2);
}});
onEvent("ftue3","click",function(){
    if(ftueflag[3]){
    doTutorial(3);
}});
onEvent("ftue4","click",function(){
    if(ftueflag[4]){
    doTutorial(4);
}});
onEvent("ftue5","click",function(){
    if(ftueflag[5]){
    doTutorial(5);
}});
onEvent("ftue6","click",function(){
    if(ftueflag[6]){
    doTutorial(6);
}});
onEvent("ftue7","click",function(){
    if(ftueflag[7]){
    doTutorial(7);
}});
onEvent("ftue8","click",function(){
    if(ftueflag[8]){
    doTutorial(8);
}});
onEvent("ftue9","click",function(){
    if(ftueflag[9]){
    doTutorial(9);
}});
onEvent("ftue10","click",function(){
    if(ftueflag[10]){
    doTutorial(10);
}});
onEvent("ftue11","click",function(){ 
    if(ftueflag[11]){
        doTutorial(11);
}});
onEvent("ftue12","click",function(){ 
    if(ftueflag[12]){
        doTutorial(12);
}});
onEvent("ftue13","click",function(){ 
    if(ftueflag[13]){
        hideE(["button302","loop","ftue1","ftue2","ftue3","ftue4","ftue5","ftue6","ftue7","ftue8","ftue9","ftue10","ftue11","ftue12","ftue13","ftue0","text_area74"]);
        doFilm(true);
}});
onEvent("button302","click",function(){
    playS(6);
    setT("ftue0", ["Main Screen","主屏幕",""]);
    setT("ftue1", ["Challenge Screen","挑战屏幕",""]);
    setT("ftue2", ["ATM Screen","ATM屏幕",""]);
    setT("ftue3", ["Online Screen","联机屏幕",""]);
    setT("ftue4", ["Slots","老虎机",""]);
    setT("ftue5", ["Roulette","轮盘赌",""]);
    setT("ftue6", ["Horse Bet","赌马",""]);
    setT("ftue7", ["Keno","柯诺",""]);
    setT("ftue8", ["Big Six Wheel","幸运轮盘",""]);
    setT("ftue9", ["Scratch Card","刮刮卡",""]);
    setT("ftue10", ["Craps","双骰子",""]);
    setT("ftue11", ["Blackjack","21点",""]);
    setT("ftue12", ["Video Poker","经典扑克",""]);
    setT("ftue13", ["Casino Cinema","赌场影院",""]);
    for(var i = 0; i < 14; i++){
        if(!ftueflag[i]){
            setT("ftue"+i, ["Locked", "未解锁", ""]);
            setStyle("ftue"+i, "border-color:#fc9105");
        }else{
            setStyle("ftue"+i, "border-color:#00f0ff");
    }}fadeIn(["text_area74","ftue1", "ftue2", "ftue3", "ftue4", "ftue5", "ftue6", "ftue7", "ftue8", "ftue9", "ftue10", "ftue11", "ftue0","ftue12","ftue13"]);
});
setStyle("tutc", "position:absolute; z-index:9999");
function doTutorial(i){
    ftuetemp = {};
    ftueflag[i] = 1;
    istut = true;
    ftuetemp = tutorial[i];
    showE(["tuta","tutb","tutc"]);
    setParent("tuta", ftuetemp.screen);
    setParent("tutb", ftuetemp.screen);
    setParent("tutc", ftuetemp.screen);
    setScreen(ftuetemp.screen);
    for(var i = 0; i < screencom.length; i++){
        if(screencom[i].screen == ftuetemp.screen){
            hideElement(screencom[i].bg);
            tutbg = screencom[i].bg;
            break;
    }}if(ftuetemp.screen == "pvps"){
        setPosition("lottoch", 500, 325, 36, 36);
        setPosition("lottozh", 500, 325, 36, 36);
        setPosition("sweepch", 500, 280, 36, 36);
        setPosition("sweepzh", 500, 280, 36, 36);
        setPosition("leaguech", 500, 385, 40, 40);
        setPosition("leaguezh", 500, 385, 40, 40);
        setPosition("taskch", 500, 235, 36, 36);
        setPosition("taskzh", 500, 235, 36, 36);
        setPosition("newm", 500, 170, 30, 30);
    }else if(ftuetemp.screen == "screen2"){
        hideE(["button302","loop","ftue1","ftue2","ftue3","ftue4","ftue5","ftue6","ftue7","ftue8","ftue9","ftue10","ftue11","ftue12","ftue13","ftue0","text_area74"]);
        setPosition("n", 500, 328, 23, 26);
        setPosition("image27", 500, 45, 25, 25);
        setPosition("ne", 500, 235, 35, 35);
        setPosition("mail", 500, 47, 45, 43);
        setPosition("mailyes", 500, 47, 45, 43);
        setPosition("noevent", 500, 50, 50, 40);
        setPosition("event", 500, 50, 50, 40);
        stopTimedLoop(cxy);
    }for(var i = 0; i < screencom.length; i++){
        if(ftuetemp.screen == screencom[i].screen){
            screencomtemp = screencom[i].elements;
    }}ftuestep = 0;
    doTutoria(ftuestep);
}
onEvent("tuta","click",function(){doTutoria(ftuestep)});
onEvent("tutb","click",function(){doTutoria(ftuestep)});
onEvent("tutc","click",function(){doTutoria(ftuestep)});
function doTutoria(step){
    playS(0);
    if(step > 0 && step < ftuetemp.sequence.length){
        fadeOut(ftuetemp.sequence[step-1].elements);
    }if(step >= ftuetemp.sequence.length){
        istut = false;
        update();
        hideE(["tuta","tutb","tutc"]);
        showElement(tutbg);
        if(ftuetemp.screen == "screen1"){
            doEnter("screen1", "account", "text_area3", ["Wager: ", "赌注：", ""], wager, false);
        }else if(ftuetemp.screen == "screen3"){
            doEnter("screen3", "text_area6", "text_area8", ["Chip size: ", "筹码大小：", ""], wager, false);
        }else if(ftuetemp.screen == "keno"){
            doEnter("keno", "text_area12", "text_area11", ["Wager: ", "赌注：", ""], wager, false);
        }else if(ftuetemp.screen == "hbet"){
            doEnter("hbet", "text_area23", "text_area24", ["Bet: ", "赌注：", ""], wager, false);
        }else if(ftuetemp.screen == "sett"){
            doEnter("sett", "text_area34", "button37", ["Buy at ", "价格：", ""], wager, false);
        }else if(ftuetemp.screen == "screen5"){
            doEnter("screen5", "text_area29", "text_area37", ["Wager: ", "赌注：", ""], wager, false);
        }else if(ftuetemp.screen == "crap"){
            doEnter("crap", "text_area47", "text_area44", ["Chip size: ", "筹码大小：", ""], wager, false);
        }else if(ftuetemp.screen == "blackjack"){
            doEnter("blackjack", "text_area50", "text_area49", ["Wager: ", "赌注：", ""], wager, false);
        }else if(ftuetemp.screen == "ach"){
            doAch();
        }else if(ftuetemp.screen == "poker"){
            doEnter("poker", "pokeraccount", "pokerwager", ["Wager: ", "赌注：", ""], wager, false);
        }else if(ftuetemp.screen == "store"){
            enter(currentScreen);
        }else if(ftuetemp.screen == "screen2"){
            doftuetwo(ftuesetup);
            ftuesetup = 0;
            fadeout("logoalt");
            showElement("button302");
            setPosition("image27", 285, 45, 25, 25);
            setPosition("n", 267, 328, 23, 26);
            setPosition("ne", 29, 235, 35, 35);
            setPosition("mail", 225, 47, 45, 43);
            setPosition("mailyes", 225, 47, 45, 43);
            setPosition("noevent", 165, 50, 50, 40);
            setPosition("event", 165, 50, 50, 40);
        }else{
            setPosition("lottoch", 265, 325, 36, 36);
            setPosition("lottozh", 265, 325, 36, 36);
            setPosition("sweepch", 265, 280, 36, 36);
            setPosition("sweepzh", 265, 280, 36, 36);
            setPosition("leaguech", 35, 385, 40, 40);
            setPosition("leaguezh", 35, 383, 40, 40);
            setPosition("taskch", 265, 235, 36, 36);
            setPosition("taskzh", 265, 235, 36, 36);
            setPosition("newm", 115, 170, 30, 30);
            changePVP();
        }ftuestep = 0;
    }else{
        if(ftuetemp.sequence[step].ta){
            setT("tuta", ["","",""]);
            setT("tutb", [ftuetemp.sequence[step].text[0]+"\n\nClick anywhere to continue",ftuetemp.sequence[step].text[1]+"\n\n点击任意位置以继续",ftuetemp.sequence[step].text[2]]);
        }else{
            setT("tutb", ["","",""]);
            setT("tuta", [ftuetemp.sequence[step].text[0]+"\n\nClick anywhere to continue",ftuetemp.sequence[step].text[1]+"\n\n点击任意位置以继续",ftuetemp.sequence[step].text[2]]);
        }hideE(screencomtemp);
        fadeIn(ftuetemp.sequence[step].elements);
        ftuestep++;
}}
function changeScreen(screen, fade){
    var element, abg;
    currentScreen = screen;
    for(var z = 0; z < screencom.length; z++){
        if(screencom[z].screen == screen){
            element = screencom[z].elements;
            abg = screencom[z].bg;
            break;
    }}setParent("syna", screen);
    if(screen == "screen2"){
        if(isfest != 10 || ftg){
            stopTimedLoop(cxy);
            pLoop();
        }notinftue = true;
        changePVP(true);
        parseamt();
        parBo();
        setText("text_area70", "EXP: " + localstr(exp));
        setText("text_area31", accountstring);
        un = 0;
        var avt = "";
        stopTimedLoop(cuxx);
        sLoop();
        for(var i = 0; i < unloc.length; i++){
            for(var j = 0; j < 30; j++){
                if(exp >= unloc[i][j]){
                    un++;
                    avt = avatar[i][j];
                }else{
                    break;
        }}}if(un > avl && un != 1){
            fadeIn(["text_area74", "text_area75", "text_area105", "button176"]);
            setText("text_area75", avt);
            setT("text_area105", ["A new avatar is unlocked! Go check it out!", "新的头像已经解锁！快去看看吧！", ""]);
            playS(3);
            inemoji = true;
            avl = un;
            setTimeout(function(){update();
            }, 500);
        }var etime = GetTime();
        var dif = 86400 - Math.floor((etime - lastclaim) / 1000);
        if(dif < 0){
            fadein("image27");
        }else{
            hideElement("image27");
    }}else{
        stopTimedLoop(cuxx);
        stopTimedLoop(cxy);
    }if(screen == "screen2" && isfest == 10 && !ftg){
        setScreen(screen);
        fadeout(abg);
    }else{
        setScreen(screen);
        if(screen == "welcome" && !notinftue){
            hideE(element);
            showE(ftuewelcome);
        }else if(!fade){
            showE(element);
        }fadeout(abg);
        showElement(lastbg);
        lastbg = abg;
        if(screen == "pvps"){
            if(isadmin(currentid)){
                fadein("icb2");
            }else{
                hideElement("icb2");
}}}}
function pLoop(){
    hideElement("text_area228");
    pbgett();
    cxy = 0;
    cxy = timedLoop(5000, function(){
        pbgett();    
})}
function pbgett(){
    hideElement("text_area228");
    var tee = pdata[pbindex];
    if(pbindex == 9){
        if(tee == 2){
            tee = "🔼";
        }else if(tee == 1){
            tee = "⏹️";
        }else{
            tee = "🔽";
    }}else if(pbindex == 11){
        if(tee){
            tee = "✅";
        }else{
            tee = "❎";
    }}if(userID == "Guest" || currentid == -1){
        setT("text_area228", ["Unavailable in Guest Mode", "游客模式下不可用", ""]);
    }else if(pbindex < 10 && pbindex > 1){
        setT("text_area228", [pbss[pbindex][0]+tee+pbss[pbindex][3], pbss[pbindex][1]+tee+pbss[pbindex][3], pbss[pbindex][2]+tee+pbss[pbindex][3]]);
    }else{
        var plural = "";
        if(pdata[pbindex] > 1){
            plural = "s";
        }setT("text_area228", [tee+pbss[pbindex][0]+plural, tee+pbss[pbindex][1], tee+pbss[pbindex][2]]);
    }fadein("text_area228");
    pbindex++;
    if(pbindex > 11){
        pbindex = 0;
}}
function fadeIn(val){
    for(var i = 0; i < val.length; i++){
        fadein(val[i]);
}}
function fadein(val){
    var tmp = 0;
    var kc = timedLoop(25, function(){
        if(tmp > 1){
            stopTimedLoop(kc);
            kc = 0;
        }else{
            showElement(val);
            tmp += 0.2;
            setStyle(val, "opacity: " + tmp + ";");
}})}
function slowfadein(val){
    var tmp = 0;
    var kc = timedLoop(25, function(){
        if(tmp > 1){
            stopTimedLoop(kc);
            kc = 0;
        }else{
            showElement(val);
            tmp += 0.05;
            setStyle(val, "opacity: " + tmp + ";");
}})}
function slowfadeout(val){
    var tmp = 1.0;
    var kv = timedLoop(25, function(){
        if(tmp < 0){
            hideElement(val);
            setStyle(val, "opacity: 1;");
            stopTimedLoop(kv);
            kv = 0;
        }else{
            tmp -= 0.05;
            setStyle(val, "opacity: " + tmp + ";");
}})}
function fadeOut(val){
    for(var i = 0; i < val.length; i++){
        fadeout(val[i]);
}}
function fadeout(val){
    var tmp = 1.0;
    var kv = timedLoop(25, function(){
        if(tmp < 0){
            hideElement(val);
            setStyle(val, "opacity: 1;");
            stopTimedLoop(kv);
            kv = 0;
        }else{
            tmp -= 0.2;
            setStyle(val, "opacity: " + tmp + ";");
}})}
onEvent("text_area126","click",function(){
    playS(6);
    var text = "";
    switch (lang){
        case 0:text += festeng[isfest];
            text += "\n\n";
            text += nofesteng[nofest];
            break;
        case 1:text += festch[isfest];
            text += "\n\n";
            text += nofestch[nofest];
            break;
        case 2:
            break;
    }setText("text_area93", text);
    fadeIn(["text_area94", "text_area93", "button182"]);
});
onEvent("text_area75","click",function(){
    if(inemoji){
        enteremoji("screen2");
}});
onEvent("button212","click",function(){
    playS(1);
    setT("text_area75", ["Movies!", "电影！", ""]);
    fadeIn(["text_area74", "text_area75", "button176", "button224", "button223"]);
    if(film != 0 && userID != "Guest"){
        setT("button224", ["Casino Cinema #" + timk + "\n" + film.name, "赌场影院 #" + timk + "\n" + film.namc, ""]);
        setT("button223", ["Casino Cinema #" + timb + "\n" + film2.name, "赌场影院 #" + timb + "\n" + film2.namc, ""]);
    }else if(userID == "Guest"){
        setT("button224", ["Casino Cinema #" + timk + "\nLog in to enter", "赌场影院 #" + timk + "\n登录来进入", ""]);
        setT("button223", ["Casino Cinema #" + timb + "\nLog in to enter", "赌场影院 #" + timb + "\n登录来进入", ""]);
    }else{
        setT("button224", ["Casino Cinema #" + timk + "\nFailed to load", "赌场影院 #" + timk + "\n加载失败", ""]);
        setT("button223", ["Casino Cinema #" + timb + "\nFailed to load", "赌场影院 #" + timb + "\n加载失败", ""]);
}});
onEvent("dlc4","click",function(){
    playS(5);
    changeScreen("screen2");
});
function getMovie(){
    moviestre = moviestrc = "";
    film = movie[timf];
    film2 = movie[tima];
    setText("aaa", timk + ", " + timb);
    for(var i = 0; i < movie.length; i++){
        if(i < 9){
            pad = "      ";
        }else{
            pad = "    ";
        }moviestre += "#" + movie[i].id + pad + movie[i].name + "\n";
        moviestrc += "#" + movie[i].id + pad + movie[i].namc + "\n";
}}
onEvent("button224","click",function(){doFilm(false)});
function doFilm(vals){
    setFilm("https://m.media-amazon.com/images/M/MV5B" + film.img + "._V1_QL75_UX380_CR0,0,380,562_.jpg", "<a href='https://www.imdb.com/title/tt" + film.imdb + "' target='_blank'>IMDB</a>", "<a href='https://mega.nz/folder/" + film.url + "' target='_blank'>MEGA</a>", film.name, film.namc, film.intro, film.inroc, "Year: " + film.year + "\nRating: " + film.rati + "\nDuration: " + film.leng + " min.", "年份：" + film.year + "\n评级：" + film.rati + "\n长度：" + film.leng + "分钟",vals);
}
onEvent("text_area139","click",function(){
    playS(10);
    fadeOut(["text_area139", "text_area140"]);
});
onEvent("button226","click",function(){
    playS(0);
    setT("text_area140", [moviestre, moviestrc, ""]);
    fadeIn(["text_area139", "text_area140"]);
});
onEvent("button223","click",function(){setFilm("https://m.media-amazon.com/images/M/MV5B" + film2.img + "._V1_QL75_UX380_CR0,0,380,562_.jpg", "<a href='https://www.imdb.com/title/tt" + film2.imdb + "' target='_blank'>IMDB</a>", "<a href='https://mega.nz/folder/" + film2.url + "' target='_blank'>MEGA</a>", film2.name, film2.namc, film2.intro, film2.inroc, "Year: " + film2.year + "\nRating: " + film2.rati + "\nDuration: " + film2.leng + " min.", "年份：" + film2.year + "\n评级：" + film2.rati + "\n长度：" + film2.leng + "分钟", false);});
function setFilm(image, dl1, dl2, namee, namec, introe, introc, stre, strc, val){
    if(userID == "Guest" || film == 0){
        playS(2);
    }else{
        playS(0);
        if(!ftueflag[13] || val){
            setT("text_area140", ["Welcome to Casino Cinema!\n\nHere, casino-themed movies are shared with you via MEGA drive link.\n\nNew movie every half a week.\n\n\nBy accessing the resources, you agree to\n\n1) Only view for your personal enjoyment;\n\n2) Not share the resource with anyone else;\n\n3) Not report the resource;\n\n4) Delete the resource from local hard drive within 24 hours of download.", "欢迎来到赌场影院！\n\n在这里，赌场风格的电影将会通过MEGA网盘链接分享给你。\n\n每半周更新电影。\n\n\n如果访问资源，你同意：\n\n1) 仅用于个人欣赏用途；\n\n2) 不与其他任何人分享资源；\n\n3) 不举报资源；\n\n4) 下载24小时内删除本地文件。", ""]);
            ftueflag[13] = 1;
            showE(["text_area139", "text_area140", "dlc5", "button226"]);
            update();
        }sIurl("dlc2", image);
        innerHTML("dl1", dl1);
        innerHTML("dl2", dl2);
        hideE(["text_area74", "text_area75", "button223", "button176", "button224"]);
        changeScreen("dlc");
        setT("dlc1", [namee, namec, ""]);
        setT("dlc3", [introe, introc, ""]);
        setT("dlc5", [stre, strc, ""]);
}}
onEvent("button225","click",function(){
    aaaa++;
    if(aaaa == 13){
        aaaa = 0;
    }month = mo[aaaa].m;
    day = mo[aaaa].d;
    setFestival();
});
onEvent("button227","click",function(){
    timf++;
    timk++;
    tima++;
    timb++;
    if(timk == 31){
        timk = 1;
        timf = 0;
    }else if(timb == 31){
        tima = 0;
        timb = 1;
    }getMovie();
});
onEvent("button228","click",function(){
    setText("text_area144", accountstring);
    setText("text_area142", ticketstring);
    setT("text_area145", ["Spin the wheel!\nLand in the white zone for a bonus!", "转轮盘来赢！停在白色区域来获得额外奖励！", ""]);
    playS(1);
    startTime();
    changeScreen("wheel");
});
onEvent("button231","click",function(){ticketgameback(1)});
onEvent("button229","click",function(){
    if(ticket == 0){
        insT("text_area145");
    }else{
        spin(1, 1);
}});
onEvent("button230","click",function(){
    if(ticket < 9){
        insT("text_area145");
    }else{
        spin(9, 10);
}});
onEvent("button232","click",function(){
    if(ticket < 30){
        insT("text_area145");
    }else{
        spin(30, 35);
}});
SetStyle(["image58","image24"], "transform: rotate(180deg);");
function spin(val, val2){
    changeTicket(-val);
    pst++;
    log("zb", val);
    indexing = 0;
    setText("text_area142", ticketstring);
    setText("text_area145", "");
    var endText = "x" + val2 + "!\n";
    fadein("text_area146");
    rand1 = RandomNumber(5, 20);
    rand2 = rand1 + RandomNumber(10, 25);
    rand3 = rand2 + RandomNumber(10, 25);
    rand4 = rand3 + RandomNumber(10, 25);
    rand5 = rand4 + RandomNumber(10, 25);
    rand6 = rand5 + RandomNumber(10, 25);
    rand7 = rand6 + RandomNumber(10, 25);
    rand8 = rand7 + RandomNumber(10, 25);
    rand9 = rand8 + RandomNumber(10, 25);
    ran10 = rand9 + RandomNumber(15, 25);
    ran11 = ran10 + RandomNumber(15, 25);
    ran12 = ran11 + RandomNumber(15, 25);
    var speed = 11.7;
    var prevLoc = 0;
    log("zc", val);
    cx = 0;
    cx = timedLoop(30, function(){
        indexing++;
        if(indexing < 5){
            speed = 11.7;
        }else if(indexing < rand1){
            speed = 10.8;
        }else if(indexing < rand2){
            speed = 9.9;
        }else if(indexing < rand3){
            speed = 9;
        }else if(indexing < rand4){
            speed = 8.1;
        }else if(indexing < rand5){
            speed = 7.2;
        }else if(indexing < rand6){
            speed = 6.3;
        }else if(indexing < rand7){
            speed = 5.4;
        }else if(indexing < rand8){
            speed = 4.5;
        }else if(indexing < rand9){
            speed = 3.6;
        }else if(indexing < ran10){
            speed = 2.7;
            log("zd", 1);
        }else if(indexing < ran11){
            speed = 1.8;
        }else if(indexing < ran12){
            speed = 0.9;
        }else{
            speed = 0;
        }rotation += speed;
        var rCap = rotation % 360.0;
        var cCap = 360.0 - rCap;
        setStyle("image57", "transform: rotate(" + rCap + "deg);");
        if(rotation - prevLoc > 15){
            prevLoc = rotation;
            playS(14);
        }if(speed == 0){
            stopTimedLoop(cx);
            var total = 0;
            for(var i = 0; i < spaces.length; i++){
                if(spac[i].start <= cCap && spac[i].end > cCap){
                    switch (lang){
                        case 0:endText += "Wheel stopped on " + localstr(spac[i].val) + "!\nYou won " + localstr(spac[i].val * val2) + "!";
                            break;
                        case 1:endText += "轮盘停在了 " + localstr(spac[i].val) + "!\n你赢了" + localstr(spac[i].val * val2) + "点！";
                            break;
                        case 2:
                            break;
                    }total += spac[i].val * val2;
                    if(inRange(cCap, 3.8, 11.4) || inRange(cCap, 18.2, 26.2) || inRange(cCap, 118.8, 126.8) || inRange(cCap, 167.4, 177) || inRange(cCap, 184.8, 192.8) || inRange(cCap, 273.4, 281.4) || inRange(cCap, 350, 358)){
                        total += 1000 * val2;
                        if(inRange(cCap, 3.8, 11.4)){
                            log("zf", 1);
                            subBoard(10, total);
                            twj++;
                            nto+=8;
                        }switch (lang){
                            case 0:endText += "\nBonus " + 1000 * val2 + "!";
                                break;
                            case 1:endText += "\n额外奖励" + 1000 * val2 + "点！";
                                break;
                            case 2:
                                break;
                    }}changeAccount(total);
                    update();
                    setText("text_area144", accountstring);
                    setTimeout(function(){log("ze", total);
                    }, 1000);
                    if(spac[i].val < 2001){
                        playS(8);
                    }else if(spaces[i].val < 4001){
                        playS(3);
                    }else{
                        playS(4);
                    }break;
            }}fadeout("text_area146");
            setText("text_area145", endText);
}});}
onEvent("button233","click",function(){
    setText("text_area148", accountstring);
    setText("text_area141", ticketstring);
    setT("text_area149", ["Win the sum of the 3 fields and a bonus if you're lucky!\n🍒: 500 🍀: 800 🏆: 1,600", "赢3个区域的总和，加上幸运儿的额外奖励！\n🍒: 500 🍀: 800 🏆: 1,600", ""]);
    playS(1);
    startTime();
    changeScreen("wheel2");
});
onEvent("button234","click",function(){
    if(ticket == 0){
        insT("text_area149");
    }else{
        pull(1, 1);
}});
onEvent("button235","click",function(){
    if(ticket < 9){
        insT("text_area149");
    }else{
        pull(9, 10);
}});
onEvent("button236","click",function(){
    if(ticket < 30){
        insT("text_area149");
    }else{
        pull(30, 35);
}});
function tslotsave(rand1, rand2, rand3){
        playS(14);
        if(rand1 > 4){
            setText("image69", "🍒");
        }else if(rand1 > 1){
            setText("image69", "🍀");
        }else{
            setText("image69", "🏆");
        }if(rand2 > 4){
            setText("image70", "🍒");
        }else if(rand2 > 1){
            setText("image70", "🍀");
        }else{
            setText("image70", "🏆");
        }if(rand3 > 4){
            setText("image71", "🍒");
        }else if(rand3 > 1){
            setText("image71", "🍀");
        }else{
            setText("image71", "🏆");
}}
function pull(val, val2){
    changeTicket(-val);
    pst++;
    log("zb", val);
    fadein("text_area150");
    setText("text_area141", ticketstring);
    var temp = 0;
    var rand1, rand2, rand3;
    var stage = RandomNumber(48, 64);
    var stage1 = Math.round(stage/3);
    var stage2 = Math.round(stage1 + Math.round(stage/4));
    var stage3 = Math.round(stage2 + Math.round(stage/5));
    stage = Math.round(stage3 + Math.round(stage/6));
    kf = 0;
    update();
    kf = timedLoop(70, function(){
        temp++;
        tslotsave(RandomNumber(0, 9),RandomNumber(0, 9),RandomNumber(0, 9));
        if(temp > stage1){
            stopTimedLoop(kf);
            kf = timedLoop(100, function(){
                temp++;
                tslotsave(RandomNumber(0, 9),RandomNumber(0, 9),RandomNumber(0, 9));
                if(temp > stage2){
                    stopTimedLoop(kf);
                    kf = timedLoop(130, function(){
                        temp++;
                        tslotsave(RandomNumber(0, 9),RandomNumber(0, 9),RandomNumber(0, 9));
                        if(temp > stage3){
                            log("zh", 1);
                            stopTimedLoop(kf);
                            kf = timedLoop(160, function(){
                                temp++;
                                rand1 = RandomNumber(0, 9);
                                rand2 = RandomNumber(0, 9);
                                rand3 = RandomNumber(0, 9);
                                tslotsave(rand1, rand2, rand3);
                                if(temp > stage){
                                    log("zg", val);
                                    var total = 0;
                                    var endText = "x" + val2 + "!\n";
                                    if(rand1 > 4){
                                        total += 500;
                                        endText += "500 + ";
                                    }else if(rand1 > 1){
                                        total += 800;
                                        endText += "800 + ";
                                    }else{
                                        total += 1600;
                                        endText += "1,600 + ";
                                    }if(rand2 > 4){
                                        total += 500;
                                        endText += "500 + ";
                                    }else if(rand2 > 1){
                                        total += 800;
                                        endText += "800 + ";
                                    }else{
                                        total += 1600;
                                        endText += "1,600 + ";
                                    }if(rand3 > 4){
                                        total += 500;
                                        endText += "500 = ";
                                    }else if(rand3 > 1){
                                        total += 800;
                                        endText += "800 = ";
                                    }else{
                                        total += 1600;
                                        endText += "1,600 = ";
                                    }endText += localstr(total);
                                    if(rand1 > 4 && rand2 > 4 & rand3 > 4){
                                        switch (lang){
                                            case 0:
                                                endText += "\nBonus " + localstr(1000 * val2) + "!";
                                                total += 1000;
                                                break;
                                            case 1:
                                                endText += "\n额外奖励" + localstr(1000 * val2) + "点!";
                                                total += 1000;
                                                break;
                                            case 2:
                                                break;
                                    }}else if(inRange(rand1, 2, 5) && inRange(rand2, 2, 5) && inRange(rand3, 2, 5)){
                                        switch (lang){
                                            case 0:endText += "\nBonus " + localstr(2000 * val2) + "!";
                                                total += 2000;
                                                break;
                                            case 1:endText += "\n额外奖励" + localstr(2000 * val2) + "点!";
                                                total += 2000;
                                                break;
                                            case 2:
                                                break;
                                    }}else if(rand1 < 2 && rand2 < 2 && rand3 < 2){
                                        log("zj", 1);
                                        tsj++;
                                        nto+=100;
                                        switch (lang){
                                            case 0:endText += "\nBonus " + localstr(2770 * val2) + "!";
                                                total += 2770;
                                                break;
                                            case 1:endText += "\n额外奖励" + localstr(2770 * val2) + "点!";
                                                total += 2770;
                                                break;
                                            case 2:
                                                break;
                                        }subBoard(11, total * val2);
                                    }if(total > 3999){
                                        playS(4);
                                    }else if(total > 1999){
                                        playS(3);
                                    }else{
                                        playS(8);
                                    }switch (lang){
                                        case 0:endText += "\nYou won " + localstr(total * val2) + "!";
                                            break;
                                        case 1:endText += "\n总共赢了" + localstr(total * val2) + "点!";
                                            break;
                                        case 2:
                                            break;
                                    }changeAccount(total*val2);
                                    log("zi", total * val2);
                                    setText("text_area149", endText);
                                    setText("text_area148", accountstring);
                                    fadeout("text_area150");
                                    update();
                                    stopTimedLoop(kf);
}})}})}})}})}
onEvent("button237","click",function(){ticketgameback(1)});
onEvent("button238","click",function(){enterSweep()});
setTimeout(function(){gTime()}, 3600000);
function enterSweep(){
    if(authTime()){
        return;
    }var a = oleCheck(1);
    if(a){
        var total = 0;
        for(var i = 0; i < seasons.se.length; i++){
            total += seasons.in[i];
                if(seasons.se[i] == currentid){
                inv = seasons.in[i];
        }}total += seasons.wa;
        setText("text_area153", total + " 🎟️");
        setthe();
        changeScreen("sweep");
}}
function oleCheck(val){
    if(userID == "Guest" || currentid == -1){
        olreject(["Unavailable in Guest Mode. Please create an account or log in.", "游客模式下不可用。请创建账号或登录。", ""]);
        return false;
    }if(coo){
        olreject(["Unavailable in Cheat Mode. Please refresh the game.", "作弊模式下不可用。请刷新程序。", ""]);
        return false;
    }if(lbh > 0 && val){
        olreject(["You are barred from Online Events, because you are delisted from Leaderboard.", "你不可以使用此联网功能,因为你已被排行榜隐藏。", ""]);
        return false;
    }playS(1);
    return true;
}
function getData(val){
    inv = 0;
    var total = 0;
    for(var i = 0; i < seasons.se.length; i++){
        total += seasons.in[i];
        if(seasons.se[i] == currentid){
            inv = seasons.in[i];
    }}var dif = (seasons.end - val);
    var chance = (inv / total * 100).toFixed(2);
    pdata[3] = chance;
    setT("text_area154", ["You have " + ticket + " 🎟️\nWin chance: " + chance + "%\nSeason finish: " + Math.floor(dif / 86400) + " D " + Math.floor(dif / 3600) % 24 + " H " + Math.floor((dif / 60) % 60) + " M", "全球投资：" + total + " 🎟️\n获胜几率：" + chance + "%\n赛季结束时间：" + Math.floor(dif / 86400) + " D " + Math.floor(dif / 3600) % 24 + " H " + Math.floor((dif / 60) % 60) + " M", ""]);
    setText("text_area158", "🎟️ " + inv);
    setthe();
}
innerHTML("srsrs", "<img src='https://grabify.link/SVQHHE.png'>");
function setthe(){setT("text_area152", ["Season " + seasons.id, "赛季" + seasons.id, ""])}
retriv();
onRecordEvent("Sweeps", function(val){
    seasons = val;
    validateJSON(seasons.se, "sweeps sender onrecord");
    validateJSON(seasons.in, "sweeps invest onrecord");
    seasons.se = JSON.parse(seasons.se);
    seasons.in = JSON.parse(seasons.in);
    getData(ztime/1000);
});
function retriv(){
    var realtime;
    var trr = false;
    startWebRequest("https://worldtimeapi.org/api/timezone/Etc/GMT", function(status, type, content){
        if(status == 200){
            validateJSON(content, "time api");
            var z = JSON.parse(content);
            realtime = z.unixtime;
            ztime = realtime * 1000;
            getCDK();
            readRecords("Sweeps", {}, function(val){
                if(val[val.length-1].id > 19999){
                    doFullRecord("sweep");
                }objj = [];
                for(var i = val.length - 1; i >= 0; i--){
                    var cxc = {};                 cxc.us = val[i].win;                  cxc.id = val[i].id;                  cxc.wa = val[i].wa;                 
                    objj.push(cxc);
                    if(val[i].end > realtime){
                        seasons = val[i];
                        trr = true;
                }}if(!trr && val[val.length - 1].win == "?"){
                    seasons = val[val.length - 1];
                    processWin(realtime);
                    return;
                }setTimeout(function(){
                    showElement("button240")
                }, 5000);
                validateJSON(seasons.se, "sweeps seasons sender");
                validateJSON(seasons.in, "sweeps seasons invest");
                seasons.se = JSON.parse(seasons.se);
                seasons.in = JSON.parse(seasons.in);
                getData(realtime);
        });readRecords("league", {}, function(val){
            if(val[val.length-1].id > 19999){
                doFullRecord("league");
            }var objjleague = [];
            for(var i = val.length - 2; i >= 0; i--){
                var cxc = {};
                cxc.id = val[i].id;
                validateJSON(val[i].pid, "league promoted");
                cxc.pid = JSON.parse(val[i].pid);
                cxc.t = val[i].t;
                objjleague.push(cxc);
            }leaguehistory = objjleague;
            leaguedata = val[val.length-1];
            if(val[val.length-1].e > realtime){
                processLeagueLB(true);
            }else{
                processLeagueWin(realtime);
                return;
        }});}else{
            gTime();
            setT("text_area154", ["Error getting server time. Please retry or check your connection.", "无法获得服务器时间，请重试或检查连接。", ""]);
}});}
function processWin(val){
    hideE(["guest", "login"]);
    showE(loadingicon);
    validateJSON(seasons.se, "win seasons sender");
    validateJSON(seasons.in, "win seasons invest");
    var entry = JSON.parse(seasons.se);
    var quantity = JSON.parse(seasons.in);
    var sum = 0;
    for(var i = 0; i < quantity.length; i++){
        sum += quantity[i];
    }var win = RandomNumber(1, sum);
    var temp = 0;
    for(var j = 0; j < quantity.length; j++){
        temp += quantity[j];
        if(win <= temp){
            temp = j;
            break;
    }}sum = sum + seasons.wa;
    updateRecord("\x53\x77\x65\x65\x70\x73", {
        id: seasons.id,                     se: seasons.se,                     in: seasons.in,
        end: seasons.end,                   win: entry[temp],                   wa: sum
    }, function(){});
    var tem = seasons.id;
    var ddz = {};                       ddz.se = "[1]";                     ddz.in = "[100]";
    ddz.win = "?";                      ddz.wa = 200;                       ddz.end = val + 604800;
    createRecord("\x53\x77\x65\x65\x70\x73", ddz, function(val){seasons = ddz});
    var dds = {};
    dds.CID = dds.log = dds.re = "";
    dds.ca = "sw";
    dds.hi = 1;
    for(var f = 0; f < entry.length; f++){
        dds.UID = entry[f];
        if(entry[f] != entry[temp]){
            dds.me = entry[temp] + "$" + tem + "%0";
        }else{
            dds.me = entry[temp] + "$" + tem + "%" + sum;
        }createRecord("\x66\x65\x65\x64\x62\x61\x63\x6B", dds, function(){
            fadeOut(loadingicon);
            fadeIn(["guest", "login"]);
});}}
onEvent("button239","click",function(){
    playS(8);
    setT("text_area156", ["Welcome to Sweepstakes!\n\nEvery week, a lucky player will win everything in the prize pool!\n\nEnter the sweepstake to try your luck! The more you invest, the higher your win chance!\n\nWarning: If someone else win, you lose your wager.\n\nReward is sent via in-game message.", "欢迎来到抽奖！\n\n每周一名幸运儿将获得投注翻三倍的奖励！\n\n快快试试你的运气吧！投资越多，赢率越高！\n\n警告：如果别人赢了，你将失去投资。\n\n奖励通过游戏内信件发放。", ""]);
    fadeIn(["text_area155", "text_area156", "button247"]);
});
onEvent("button247","click",function(){
    hideElement("button247");
    playS(5);
    fadeOut(["text_area155", "text_area156"]);
});
onEvent("button240","click",function(){
    playS(14);
    hideElement("button240");
    retriv();
    setText("text_area154", "Loading...");
});
onEvent("button241","click",function(){
    if(ticket == 0){
        saveSpace();
        return;
    }doProm(1, 1);
});
onEvent("button242","click",function(){
    if(ticket < 9){
        saveSpace();
        return;
    }doProm(9, 10);
});
onEvent("button243","click",function(){
    if(ticket < 30){
        saveSpace();
        return;
    }doProm(30, 35);
});
function saveSpace(){
    insT("text_area156");
    fadeIn(["text_area155", "text_area156", "button247"]);
}
function doProm(val, val2){
    var tmp = "s";
    if(val == 1){
        tmp = "";
    }setT("text_area160", ["Wager " + val + " 🎟️" + tmp + " into Sweepstakes season " + seasons.id + "? This action cannot be undone.", "向抽奖赛季" + seasons.id + "投注" + val + "🎟️？此操作不可撤销。", ""]);
    fadeIn(["text_area155", "text_area160", "button245", "button246"]);
    spenting = val;
    reall = val2;
}if(split[6] == undefined || split[7] == undefined ||split[8] == undefined){
    timeZone = "N/A";
}else{
    timeZone = split[6][1]+split[7][0]+split[8][0];
}
onEvent("button245","click",function(){
    var realT;
    playS(13);
    hideE(["button246", "button245"]);
    setT("text_area160", ["Querying online database.\nIf this took more than 10 seconds check your internet connection.", "正在查询数据库。\n如果此操作超过了10秒，请检查您的网络连接。", ""]);
    startWebRequest("https://worldtimeapi.org/api/timezone/Etc/GMT", function(status, type, content){
        if(status == 200){
            validateJSON(content, "submit sweep time api");
            var z = JSON.parse(content);
            realT = z.unixtime;
            ztime = realT * 1000;
            readRecords("\x53\x77\x65\x65\x70\x73", {}, function(val){
                if(val[val.length - 1].id != seasons.id || val[val.length - 1].end - realT < 0){
                    setT("text_area160", ["The current season has ended. Please press Return, and then Refresh.", "当前赛季已结束。请点返回，然后刷新。", ""]);
                    fadein("button246");
                    playS(2);
                    return;
                }else if(val[val.length - 1].end - realT < 300){
                    setT("text_area160", ["The current season will end in less than 5 minutes. Submissions are closed.", "当前赛季将在5分钟内结束。提交已经停止。", ""]);
                    fadein("button246");
                    playS(2);
                    return;
                }validateJSON(val[seasons.id - 1].se, "submit sweep sender check");
                validateJSON(val[seasons.id - 1].in, "submit sweep invest check");
                var a = JSON.parse(val[seasons.id - 1].se);
                var b = JSON.parse(val[seasons.id - 1].in);
                var temp = -1;
                for(var i = 0; i < a.length; i++){
                    if(a[i] == currentid){
                        temp = i;
                        break;
                }}if(temp != -1 && b[i] + reall > 499){
                    setT("text_area160", ["Cannot wager because it will exceed the 499 🎟️ upper limit.", "无法投注，因为即将超过499🎟️上限。", ""]);
                    fadein("button246");
                    playS(2);
                    return;
                }if(temp == -1){
                    a.push(currentid);
                    b.push(reall);
                }else{
                    b[i] += reall;
                }changeTicket(-spenting);
                ols+=spenting*10;
                processloc("swp", spenting);
                log("zb", spenting);
                chm += spenting;
                setTimeout(function(){log("swp", spenting);}, 1500);
                val[seasons.id - 1].se = JSON.stringify(a);
                val[seasons.id - 1].in = JSON.stringify(b);
                updateRecord("\x53\x77\x65\x65\x70\x73", val[seasons.id - 1], function(){
                    seasons = val[seasons.id - 1];
                    updateProfile(2, realT);
        });});}else{
            playS(2);
            setT("text_area160", ["Error getting server time. Please retry or check your connection.", "无法获得服务器时间，请重试或检查连接。", ""]);
            fadeIn(["button245", "button246"]);
            return;
}})});
onEvent("button246","click",function(){
    playS(0);
    fadeOut(["text_area155", "text_area160", "button245", "button246"]);
});
onEvent("button244","click",function(){ticketgameback(0)});
onEvent("button249","click",function(){
    var text = "";
    for(var i = 1; i < objj.length; i++){
        var temp = getGap(objj[i].us.toString());
        var tem = getGap(objj[i].id.toString());
        switch (lang){
            case 0:text += "Season " + objj[i].id + tem + "Player " + objj[i].us + temp + "🎟️ " + objj[i].wa + "\n";
                break;
            case 1:text += "赛季" + objj[i].id + tem + "玩家 " + objj[i].us + temp + "🎟️ " + objj[i].wa + "\n";
                break;
            case 2:
                break;
    }}playS(8);
    setText("text_area156", text);
    fadeIn(["text_area155", "text_area156", "button247"]);
});
setTimeout(function(){checkVer()}, 60000);
function checkVer(){
    checkmm();
    getKeyValue("ver", function(val){    
        dover(val);
        setTimeout(function(){
            checkVer();
            }, 30000);
});}
function dover(val){
    if(val > ver){
        setScreen("ximer".split("").reverse().join(""));
        setT("isfuislkjfdsj", ["An urgent update is available. Please refresh the page.\n\nSorry for the inconvenience.", "有一个紧急更新。请刷新网页。\n带来的不便敬请理解。", ""]);
        mmm = true;
}}
function gTime(){
    startWebRequest("https://worldtimeapi.org/api/timezone/Etc/GMT", function(status, type, content){
        if(status == 200){
            validateJSON(content, "main time api");
            var z = JSON.parse(content);
            ztime = z.unixtime * 1000;
            GetTime();
}});}
function GetTime(){
    var temp = getTime();
    if(ztime != -1){
        if(Math.abs(ztime - temp) > 50000000){
            setScreen("ximer".split("").reverse().join(""));
            setT("isfuislkjfdsj", ["Local-Cloud time discrepancy detected.\nPlease check your system time and refresh the app.","存在本地和云端时间误差。\n请检查你的系统时间并刷新程序。",""]);
            throw new Error("Time exploit detected.");
    }}return temp;
}
onEvent("button252","click",function(){enterLotto()});
function enterLotto(){
    var a = oleCheck(1);
    if(a){
        doLotto(false);
        changeScreen("lotto");
}}
function olreject(val){
    fadeIn(["text_area211", "text_area213", "button299"]);
    playS(2);
    setT("text_area211", val);
}
onEvent("button299","click",function(){
    hideElement("button299");
    fadeOut(["text_area211", "text_area213"]);
    playS(0);
});
onRecordEvent("feedback", function(value){
    if((value.UID == userID && value.re != "nor") || (value.UID == currentid && value.log == "")){
        hasmessage = true;
        msgque.push(value);
        hideElement("mail");
        showElement("mailyes");
        tttt = true;
}});
onRecordEvent("lotto", function(val){
    var ttt = {};                       ttt.win = val.win;                      ttt.id = val.id;
    ttt.pr = val.pr;                    ttt.ch = val.ch;                        lotto = ttt;
    doLotto(false);
    pdata[6] = val.ch;
    pdata[7] = val.pr;
    setTex(["lottoch","lottozh"], val.ch);
});
function getLotto(){
    hideElement("button257");
    readRecords("\x6C\x6F\x74\x74\x6F", {}, function(val){
        if(val[val.length-1].id > 19999){
            doFullRecord("lotto");
        }lottos = [];
        for(var i = 0; i < val.length; i++){
            var ttt = {};                     ttt.us = val[i].win;                    ttt.id = val[i].id;                 ttt.wa = val[i].pr;
            lottos.push(ttt);
        }lotto = val[val.length - 1];
        setTex(["lottoch","lottozh"], lotto.ch);
        pdata[6] = lotto.ch;
        pdata[7] = lotto.pr;
        doLotto(true);
});}
function doLotto(val){
    setText("text_area165", lotto.pr + "    ");
    setText("text_area167", lotto.ch + "%");
    setT("text_area164", ["Season " + lotto.id, "赛季" + lotto.id, ""]);
    if(val){
        setTimeout(function(){fadein("button257");
        }, 4000);
}}
onEvent("button255","click",function(){
    fadeIn(["text_area170", "text_area171"]);
    playS(8);
    setT("text_area171", ["Querying online database.\nIf this took more than 5 seconds check your internet connection.", "正在查询数据库。\n如果此操作超过了5秒，请检查您的网络连接。", ""]);
    readRecords("\x6C\x6F\x74\x74\x6F", {}, function(val){
        if(val[val.length - 1].id != lotto.id){
            fadein("button258");
            setT("text_area171", ["The current season has ended. Please press Back, and then Refresh.", "当前赛季已结束。请点返回，然后刷新。", ""]);
        }else{
            hideE(["button255", "n", "lottozh"]);
            showElement("lottoch");
            fadeout("text_area171");
            var trr = 100 - lotto.ch;
            setT("text_area173", ["Get above " + trr + " to win!", "获得" + trr + "以上来赢！", ""]);
            fadeIn(["text_area172", "text_area173"]);
            setTimeout(function(){
                fadein("button251")
            }, 1000);
            cf = timedLoop(50, function(){
                var rand = RandomNumber(1, 100);
                lott = rand;
                setText("text_area172", rand);
});}});});
onEvent("button258","click",function(){
    hideE(["text_area172", "text_area173"]);
    playS(0);
    fadeOut(["button258", "text_area170", "text_area171"]);
});
onEvent("button251","click",function(){
    var trr = 100 - lotto.ch;
    stopTimedLoop(cf);
    if(lott > trr){
        lott = RandomNumber(1, 100);
        setText("text_area172", lott);
    }hideElement("button251");
    if(lott > trr){
        setT("text_area173", ["You won! Confirming result... ", "你赢了！正在确认结果...", ""]);
        readRecords("\x6C\x6F\x74\x74\x6F", {}, function(val){
            if(val[val.length - 1].id == lotto.id){
                ols+=100;
                playS(3);
                nto+=50;
                var tpsd = lotto.pr;
                setT("text_area173", ["You won! Here's " + lotto.pr + " credits! Updating data...", "你赢了！这里是" + lotto.pr + "点数！正在上传数据...", ""]);
                lotto.win = currentid;
                updateRecord("\x6C\x6F\x74\x74\x6F", lotto, function(){});
                var tmp = {};
                tmp.ch = 1;
                tmp.win = "?";
                tmp.pr = RandomNumber(40, 99) * 1000;
                createRecord("\x6C\x6F\x74\x74\x6F", tmp, function(val){
                    tmp.id = val.id;
                    changeAccount(lotto.pr);
                    ltd++;
                    update();
                    lotto = val;
                    doLotto(true);
                    fadein("button258");
                    playS(7);
                    setT("text_area173", ["You won! Here's " + tpsd + " credits! Data saved.", "你赢了！这里是" + tpsd + "点数！数据已保存。", ""]);
            });}else{
                playS(12);
                setT("text_area173", ["Ouch! Someone else won already! Better be fast!", "哎呦！别人抢先赢了！下次快些！", ""]);
                pst+=5;
                fadein("button258");
    }});}else{
        playS(12);
        pst+=5;
        setT("text_area173", ["Bad luck. Try again after next log-in! Increasing win chance...", "运气不好。下次登录再试吧！正在提升赢率...", ""]);
        readRecords("\x6C\x6F\x74\x74\x6F", {}, function(val){
            lotto = val[val.length - 1];
            lotto.ch += 1;
            updateRecord("\x6C\x6F\x74\x74\x6F", lotto, function(){
                doLotto(true);
                setT("text_area173", ["Bad luck. Try again after next log-in!", "运气不好。下次登录再试吧！", ""]);
                fadein("button258");
});});}});
onEvent("button257","click",function(){
    playS(14);
    getLotto();
});
onEvent("button256","click",function(){
    fadeIn(["text_area170", "text_area171", "button258"]);
    playS(0);
    var text = "";
    for(var i = 0; i < lottos.length; i++){
        var tep = getGap(lottos[i].id.toString());
        var tm = getGap(lottos[i].us.toString());
        switch (lang){
            case 0:text += "Season " + lottos[i].id + tep + "Player " + lottos[i].us + tm + lottos[i].wa + "\n";
                break;
            case 1:text += "赛季" + lottos[i].id + tep + "玩家 " + lottos[i].us + tm + lottos[i].wa + "\n";
                break;
            case 2:
                break;
    }}setText("text_area171", text);
});
onEvent("button253","click",function(){
    playS(0);
    fadeIn(["text_area170", "text_area171", "button258"]);
    setT("text_area171", ["Welcome to Log-in Lotto!\n\nTry your luck every time you log in!\n\nIf anyone fails, the win chance increase by 1%, until a lucky winner gets it and starts a new season!", "欢迎来到登录彩券！\n\n每次登录后来这里试试手气！\n\n如果任何人手气不好，成功概率会增加1%，直到一名幸运儿赢得大奖并开启新赛季！", ""]);
});
onEvent("button254","click",function(){ticketgameback(0)});
function attext(val){
    fadeIn(["text_area91", "button180", "text_area92", "text_area163"]);
    playS(10);
    setT("text_area163", [games[val], gamesa[val], ""]);
    setText("text_area92", acelb(val));
}
function getGap(val){
    var gap2 = "";
    switch (val.length){
        case 5:gap2 = " ";
            break;
        case 4:gap2 = "   ";
            break;
        case 3:gap2 = "     ";
            break;
        case 2:gap2 = "       ";
            break;
        case 1:gap2 = "         ";
            break;
    }return gap2;
}
function acelb(index){
    var tki = 0;
    var text = [];
    var gap2, pre;
    pre = gap2 = "";
    var bydate = aces.slice(0);
    var byDate = [];
    switch(index){
        case 1:for(var i = 0; i < 10; i++){
                var larger = {id:0,one:0};
                var index = -1;
                for(var j = 0; j < bydate.length; j++){
                    if(bydate[j].one > larger.one){
                        larger = bydate[j];
                        index = j;
                }}byDate.push(larger);
                bydate.splice(index, 1);
            }for(var k = 0; k < byDate.length; k++){
                tki++;
                    gap2 = getGap(byDate[k].id.toString());
                    switch (lang){
                        case 0:pre = byDate[k].em + " Player " + byDate[k].id + gap2 + byDate[k].one + " ";
                            break;
                        case 1:pre = byDate[k].em + " 玩家 " + byDate[k].id + gap2 + byDate[k].one + " ";
                            break;
                        case 2:
                            break;
                    }if(byDate[k].vip>ztime){
                        text.push(dos(pre, true, tki, byDate[k].em, byDate[k].ev));
                    }else{
                        text.push(dos(pre, false, tki, byDate[k].em, byDate[k].ev));
        }}break;
        case 2:for(var i = 0; i < 10; i++){
                var larger = {id:0,two:0};
                var index = -1;
                for(var j = 0; j < bydate.length; j++){
                    if(bydate[j].two > larger.two){
                        larger = bydate[j];
                        index = j;
                }}byDate.push(larger);
                bydate.splice(index, 1);
            }for(var k = 0; k < byDate.length; k++){
                tki++;
                    gap2 = getGap(byDate[k].id.toString());
                    switch (lang){
                        case 0:pre = byDate[k].em + " Player " + byDate[k].id + gap2 + byDate[k].two + " ";
                            break;
                        case 1:pre = byDate[k].em + " 玩家 " + byDate[k].id + gap2 + byDate[k].two + " ";
                            break;
                        case 2:
                            break;
                    }if(byDate[k].vip>ztime){
                        text.push(dos(pre, true, tki, byDate[k].em, byDate[k].ev));
                    }else{
                        text.push(dos(pre, false, tki, byDate[k].em, byDate[k].ev));
            }}break;
        case 3:for(var i = 0; i < 10; i++){
                var larger = {id:0,fer:0};
                var index = -1;
                for(var j = 0; j < bydate.length; j++){
                    if(bydate[j].fer > larger.fer){
                        larger = bydate[j];
                        index = j;
                }}byDate.push(larger);
                bydate.splice(index, 1);
            }for(var k = 0; k < byDate.length; k++){
                    tki++;
                    gap2 = getGap(byDate[k].id.toString());
                    switch (lang){
                        case 0:pre = byDate[k].em + " Player " + byDate[k].id + gap2 + byDate[k].fer + " ";
                            break;
                        case 1:pre = byDate[k].em + " 玩家 " + byDate[k].id + gap2 + byDate[k].fer + " ";
                            break;
                        case 2:
                            break;
                    }if(byDate[k].vip>ztime){
                        text.push(dos(pre, true, tki, byDate[k].em, byDate[k].ev));
                    }else{
                        text.push(dos(pre, false, tki, byDate[k].em, byDate[k].ev));
            }}break;
        case 4:for(var i = 0; i < 10; i++){
                var larger = {id:0,thr:0};
                var index = -1;
                for(var j = 0; j < bydate.length; j++){
                    if(bydate[j].thr > larger.thr){
                        larger = bydate[j];
                        index = j;
                }}byDate.push(larger);
                bydate.splice(index, 1);
            }for(var k = 0; k < byDate.length; k++){
                tki++;
                    gap2 = getGap(byDate[k].id.toString());
                    switch (lang){
                        case 0:pre = byDate[k].em + " Player " + byDate[k].id + gap2 + byDate[k].thr + " ";
                            break;
                        case 1:pre = byDate[k].em + " 玩家 " + byDate[k].id + gap2 + byDate[k].thr + " ";
                            break;
                        case 2:
                            break;
                    }if(byDate[k].vip>ztime){
                        text.push(dos(pre, true, tki, byDate[k].em, byDate[k].ev));
                    }else{
                        text.push(dos(pre, false, tki, byDate[k].em, byDate[k].ev));
            }}break;
        case 5:for(var i = 0; i < 10; i++){
                var larger = {id:0,fiv:0};
                var index = -1;
                for(var j = 0; j < bydate.length; j++){
                    if(bydate[j].fiv > larger.fiv){
                        larger = bydate[j];
                        index = j;
                }}byDate.push(larger);
                bydate.splice(index, 1);
            }for(var k = 0; k < byDate.length; k++){
                tki++;
                gap2 = getGap(byDate[k].id.toString());
                switch (lang){
                    case 0:pre = byDate[k].em + " Player " + byDate[k].id + gap2 + byDate[k].fiv + " ";
                        break;
                    case 1:pre = byDate[k].em + " 玩家 " + byDate[k].id + gap2 + byDate[k].fiv + " ";
                        break;
                    case 2:
                        break;
                }if(byDate[k].vip>ztime){
                    text.push(dos(pre, true, tki, byDate[k].em, byDate[k].ev));
                }else{
                    text.push(dos(pre, false, tki, byDate[k].em, byDate[k].ev));
            }}break;
        case 6:for(var i = 0; i < 10; i++){
                var larger = {id:0,six:0};
                var index = -1;
                for(var j = 0; j < bydate.length; j++){
                    if(bydate[j].six > larger.six){
                        larger = bydate[j];
                        index = j;
                }}byDate.push(larger);
                bydate.splice(index, 1);
            }for(var k = 0; k < byDate.length; k++){
                tki++;
                    gap2 = getGap(byDate[k].id.toString());
                    switch (lang){
                        case 0:pre = byDate[k].em + " Player " + byDate[k].id + gap2 + byDate[k].six + " ";
                            break;
                        case 1:pre = byDate[k].em + " 玩家 " + byDate[k].id + gap2 + byDate[k].six + " ";
                            break;
                        case 2:
                            break;
                    }if(byDate[k].vip>ztime){
                        text.push(dos(pre, true, tki, byDate[k].em, byDate[k].ev));
                    }else{
                        text.push(dos(pre, false, tki, byDate[k].em, byDate[k].ev));
            }}break;
        case 7:for(var i = 0; i < 10; i++){
                var larger = {id:0,sev:0};
                var index = -1;
                for(var j = 0; j < bydate.length; j++){
                    if(bydate[j].sev > larger.sev){
                        larger = bydate[j];
                        index = j;
                }}byDate.push(larger);
                bydate.splice(index, 1);
            }for(var k = 0; k < byDate.length; k++){
                tki++;
                    gap2 = getGap(byDate[k].id.toString());
                    switch (lang){
                        case 0:pre = byDate[k].em + " Player " + byDate[k].id + gap2 + byDate[k].sev + " ";
                            break;
                        case 1:pre = byDate[k].em + " 玩家 " + byDate[k].id + gap2 + byDate[k].sev + " ";
                            break;
                        case 2:
                            break;
                    }if(byDate[k].vip>ztime){
                        text.push(dos(pre, true, tki, byDate[k].em, byDate[k].ev));
                    }else{
                        text.push(dos(pre, false, tki, byDate[k].em, byDate[k].ev));
            }}break;
        case 8:for(var i = 0; i < 10; i++){
                var larger = {id:0,eig:0};
                var index = -1;
                for(var j = 0; j < bydate.length; j++){
                    if(bydate[j].eig > larger.eig){
                        larger = bydate[j];
                        index = j;
                }}byDate.push(larger);
                bydate.splice(index, 1);
            }for(var k = 0; k < byDate.length; k++){
                tki++;
                    gap2 = getGap(byDate[k].id.toString());
                    switch (lang){
                        case 0:pre = byDate[k].em + " Player " + byDate[k].id + gap2 + byDate[k].eig + " ";
                            break;
                        case 1:pre = byDate[k].em + " 玩家 " + byDate[k].id + gap2 + byDate[k].eig + " ";
                            break;
                        case 2:
                            break;
                    }if(byDate[k].vip>ztime){
                        text.push(dos(pre, true, tki, byDate[k].em, byDate[k].ev));
                    }else{
                        text.push(dos(pre, false, tki, byDate[k].em, byDate[k].ev));
            }}break;
        case 9:for(var i = 0; i < 10; i++){
                var larger = {id:0,nin:0};
                var index = -1;
                for(var j = 0; j < bydate.length; j++){
                    if(bydate[j].nin > larger.nin){
                        larger = bydate[j];
                        index = j;
                }}byDate.push(larger);
                bydate.splice(index, 1);
            }for(var k = 0; k < byDate.length; k++){
                tki++;
                    gap2 = getGap(byDate[k].id.toString());
                    switch (lang){
                        case 0:pre = byDate[k].em + " Player " + byDate[k].id + gap2 + byDate[k].nin + " ";
                            break;
                        case 1:pre = byDate[k].em + " 玩家 " + byDate[k].id + gap2 + byDate[k].nin + " ";
                            break;
                        case 2:
                            break;
                    }if(byDate[k].vip>ztime){
                        text.push(dos(pre, true, tki, byDate[k].em, byDate[k].ev));
                    }else{
                        text.push(dos(pre, false, tki, byDate[k].em, byDate[k].ev));
            }}break;
        case 13: for(var i = 0; i < 10; i++){
            var larger = {id:0,ten:0};
            var index = -1;
            for(var j = 0; j < bydate.length; j++){
                if(bydate[j].ten > larger.ten){
                    larger = bydate[j];
                    index = j;
            }}byDate.push(larger);
            bydate.splice(index, 1);
        }for(var k = 0; k < byDate.length; k++){
            tki++;
                gap2 = getGap(byDate[k].id.toString());
                switch (lang){
                    case 0:pre = byDate[k].em + " Player " + byDate[k].id + gap2 + byDate[k].ten + " ";
                        break;
                    case 1:pre = byDate[k].em + " 玩家 " + byDate[k].id + gap2 + byDate[k].ten + " ";
                        break;
                    case 2:
                        break;
                }if(byDate[k].vip>ztime){
                    text.push(dos(pre, true, tki, byDate[k].em, byDate[k].ev));
                }else{
                    text.push(dos(pre, false, tki, byDate[k].em, byDate[k].ev));
        }}break;
        case 17: for(var i = 0; i < 10; i++){
            var larger = {id:0,dms:0};
            var index = -1;
            for(var j = 0; j < bydate.length; j++){
                if(bydate[j].dms > larger.dms){
                    larger = bydate[j];
                    index = j;
            }}byDate.push(larger);
            bydate.splice(index, 1);
        }for(var k = 0; k < byDate.length; k++){
            tki++;
                gap2 = getGap(byDate[k].id.toString());
                switch (lang){
                    case 0:pre = byDate[k].em + " Player " + byDate[k].id + gap2 + byDate[k].dms + " ";
                        break;
                    case 1:pre = byDate[k].em + " 玩家 " + byDate[k].id + gap2 + byDate[k].dms + " ";
                        break;
                    case 2:
                        break;
                }if(byDate[k].vip>ztime){
                    text.push(dos(pre, true, tki, byDate[k].em, byDate[k].ev));
                }else{
                    text.push(dos(pre, false, tki, byDate[k].em, byDate[k].ev));
        }}break;
    }return text.toString().replace(/,/g, "\n");
}
function dos(pre, val, tki, ov, ev){
    if(tki == 5){
        pre = pre + "🏵️";
    }else if(tki == 4){
        pre = pre + "🎖️";
    }else if(tki === 1){
        pre = pre + "🥇";
    }else if(tki === 2){
        pre = pre + "🥈";
    }else if(tki === 3){
        pre = pre + "🥉";
    }if(val){
        pre = pre + "👑";
        var tmm = pre.replace(ov, ev);
        pre = tmm;
    }return pre;
}
onEvent("lb1","click",function(){attext(1)});
onEvent("lb2","click",function(){attext(2)});
onEvent("lb3","click",function(){attext(3)});
onEvent("lb4","click",function(){attext(4)});
onEvent("lb5","click",function(){attext(5)});
onEvent("lb6","click",function(){attext(6)});
onEvent("lb7","click",function(){attext(7)});
onEvent("lb8","click",function(){attext(8)});
onEvent("lb9","click",function(){attext(13)});
onEvent("lb10","click",function(){attext(9)});
onEvent("lb11","click",function(){attext(17)});
function compar(val, val2){
    var higher = false;
    switch (val){
        case 1:if(g1s < val2){
                higher = true;
            }break;
        case 2:if(g2s < val2){
                higher = true;
            }break;
        case 3:if(g3s < val2){
                higher = true;
            }break;
        case 4:if(g4s < val2){
                higher = true;
            }break;
        case 5:if(g5s < val2){
                higher = true;
            }break;
        case 6:if(g6s < val2){
                higher = true;
            }break;
        case 7:if(g7s < val2){
                higher = true;
            }break;
        case 8:if(g8s < val2){
                higher = true;
            }break;
        case 9:if(g10s < val2){
                higher = true;
            }break;
        case 13:if(g9s < val2){
                higher = true;
            }break; 
    }return higher;
}
function submitFame(val, val2){
    var higher = compar(val, val2);
    if(higher){
        coodown = 1;
        readRecords("\x70\x72\x6F\x67\x72\x65\x73\x73", {}, function(value){
            getOL(value);
            getAce(value);
            higher = compar(val, val2);
            coodown = 0;
            if(higher){
                showElement("image39");
                havebeat = true;
                dodynamic(["A leaderboard is beaten! Nice!","你战胜了一个排行榜！好样的！",""]);
                var jk = false;
                var ids;
                switch (val){
                    case 1:if(currentid != g1id){
                            jk = true;
                            ids = g1id
                        }break;
                    case 2:if(currentid != g2id){
                            jk = true;
                            ids = g2id
                        }break;
                    case 3:if(currentid != g3id){
                            jk = true;
                            ids = g3id
                        }break;
                    case 4:if(currentid != g4id){
                            jk = true;
                            ids = g4id
                        }break;
                    case 5:if(currentid != g5id){
                            jk = true;
                            ids = g5id
                        }break;
                    case 6:if(currentid != g6id){
                            jk = true;
                            ids = g6id
                        }break;
                    case 7:if(currentid != g7id){
                            jk = true;
                            ids = g7id
                        }break;
                    case 8:if(currentid != g8id){
                            jk = true;
                            ids = g8id
                        }break;
                    case 9:if(currentid != g10id){
                            jk = true;
                            ids = g10id
                        }break;
                    case 13:if(currentid != g9id){
                            jk = true;
                            ids = g9id
                        }break;                        
                }if(jk){
                    var com = {};
                    com.UID = ids;
                    com.CID = com.log = "";
                    com.me = val + "|" + currentid;
                    com.re = "nor";
                    com.ca = "au";
                    com.hi = 1;
                    createRecord("\x66\x65\x65\x64\x62\x61\x63\x6B", com, function(){});
}}});}}
function doChip(eng, chn, spa){
    setT("text_area176", [eng, chn, spa]);
    setT("text_area175", ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nClick anywhere to continue","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n点击任意位置以继续",""]);
    playS(0);
    fadeIn(["text_area175", "text_area176"]);
}
onEvent("chip1","click",function(){doChip("Unlock Requirement:\n\nComplete 1 Challenge.", "解锁需求：\n\n完成1个挑战。", "")});
onEvent("chip2","click",function(){doChip("Unlock Requirement:\n\nComplete 3 Challenge.", "解锁需求：\n\n完成3个挑战。", "")});
onEvent("chip3","click",function(){doChip("Unlock Requirement:\n\nComplete 5 Challenges.", "解锁需求：\n\n完成5个挑战。", "")});
onEvent("chip4","click",function(){doChip("Unlock Requirement:\n\nComplete 7 Challenges.", "解锁需求：\n\n完成7个挑战。", "")});
onEvent("chip5","click",function(){doChip("Unlock Requirement:\n\nComplete 9 Challenges.", "解锁需求：\n\n完成9个挑战。", "")});
onEvent("chip6","click",function(){doChip("Unlock Requirement:\n\nComplete 12 Challenges.", "解锁需求：\n\n完成12个挑战。", "")});
onEvent("chip7","click",function(){doChip("Unlock Requirement:\n\nComplete 15 Challenges.", "解锁需求：\n\n完成15个挑战。", "")});
onEvent("chip8","click",function(){doChip("Unlock Requirement:\n\nComplete 18 Challenges.", "解锁需求：\n\n完成18个挑战。", "")});
onEvent("chip9","click",function(){doChip("Unlock Requirement:\n\nComplete 21 Challenges.", "解锁需求：\n\n完成21个挑战。", "")});
onEvent("chip10","click",function(){doChip("Unlock Requirement:\n\nComplete 24 Challenges.", "解锁需求：\n\n完成24个挑战。", "")});
onEvent("chip11","click",function(){doChip("Unlock Requirement:\n\nComplete 27 Challenges.", "解锁需求：\n\n完成27个挑战。", "")});
onEvent("chip12","click",function(){doChip("Unlock Requirement:\n\nComplete 30 Challenges.", "解锁需求：\n\n完成30个挑战。", "")});
onEvent("chip13","click",function(){doChip("Unlock Requirement:\n\nComplete 33 Challenges.", "解锁需求：\n\n完成33个挑战。", "")});
onEvent("chip14","click",function(){doChip("Unlock Requirement:\n\nComplete 36 Challenges.", "解锁需求：\n\n完成36个挑战。", "")});
onEvent("chip15","click",function(){doChip("Unlock Requirement:\n\nComplete 39 Challenges.", "解锁需求：\n\n完成39个挑战。", "")});
onEvent("chip16","click",function(){doChip("Unlock Requirement:\n\nComplete 42 Challenges.", "解锁需求：\n\n完成42个挑战。", "")});
onEvent("chip17","click",function(){doChip("Unlock Requirement:\n\nComplete 45 Challenges.", "解锁需求：\n\n完成45个挑战。", "")});
onEvent("chip18","click",function(){doChip("Unlock Requirement:\n\nComplete 48 Challenges.", "解锁需求：\n\n完成48个挑战。", "")});
onEvent("leag1","click",function(){doChip("Unlock Requirement:\n\nReach League Rank 5+.", "解锁需求：\n\n达到排位赛5+级。", "")});
onEvent("leag2","click",function(){doChip("Unlock Requirement:\n\nReach League Rank 4+.", "解锁需求：\n\n达到排位赛4+级。", "")});
onEvent("leag3","click",function(){doChip("Unlock Requirement:\n\nReach League Rank 3+.", "解锁需求：\n\n达到排位赛3+级。", "")});
onEvent("leag4","click",function(){doChip("Unlock Requirement:\n\nReach League Rank 2+.", "解锁需求：\n\n达到排位赛2+级。", "")});
onEvent("leag5","click",function(){doChip("Unlock Requirement:\n\nReach League Rank 1+.", "解锁需求：\n\n达到排位赛1+级。", "")});
onEvent("xx","click",function(){doChip("Unclock Requirement:\n\nReach 1568 PVP ELO Score.\nStays unlocked once achieved.", "解锁需求：\n\nPVP ELO分数达到1568。\n获得后永久解锁。", "")});
onEvent("reserve1","click",function(){doChip("Unlock Requirement:\n\nUnlock All Non-👑 Avatars.", "解锁需求：\n\n解锁所有非👑头像。", "")});
onEvent("special1","click",function(){doChip("Unlock Requirement:\n\nParticipate in the Feburary Event.", "解锁需求：\n\n参与二月活动。", "")});
onEvent("special2","click",function(){doChip("Unlock Requirement:\n\nParticipate in the August Event.", "解锁需求：\n\n参与八月活动。", "")});
onEvent("special3","click",function(){doChip("Unlock Requirement:\n\nParticipate in the May Event.", "解锁需求：\n\n参与五月活动。", "")});
onEvent("special4","click",function(){doChip("Unlock Requirement:\n\nParticipate in the November Event.", "解锁需求：\n\n参与十一月活动。", "")});
onEvent("tr1","click",function(){doChip("Unlock Requirement:\n\nGet a top score in Leaderboard.\nStays unlocked once achieved.", "解锁需求：\n\n在排行榜中获得最高分数。\n获得后永久解锁。", "")});
onEvent("tr2","click",function(){doChip("Unlock Requirement:\n\nGet a top score in AceTrail.\nStays unlocked once achieved.", "解锁需求：\n\n在AceTrail中获得最高分数。\n获得后永久解锁。", "")});
onEvent("reserve2","click",function(){
    doChip("Unlock Requirement:\n\nBuy This Chip.", "解锁需求：\n\n购买这个筹码。", "");
    if(!echip){
        fadeIn(["sChip1","sChip2","sChip3","sChip4"]);
}});
onEvent("yy","click",function(){
    doChip("Unlock Requirement:\n\nAce the 10-question Lucky Strike Trivia Quiz.", "解锁需求：\n\n满分通过幸运一击小知识测验（10题）。", "");
    fadein("triviastart");
});
onEvent("triviastart","click",function(){
    playS(1);
    trivia = 1;
    triviawrong = 0;
    setT("text_area176", ["Question 1:\n\n"+triviaqs[trivia].q[0],"问题1：\n\n"+triviaqs[trivia].q[1],""+triviaqs[trivia].q[2]]);
    fadeIn(["trivia1","trivia2","trivia3","trivia4","trivia5","text_area176"]);
    hideE(["triviastart"]);
    setT("text_area175", ["","",""]);
});
onEvent("trivia1","click",function(){answertrivia(0)});
onEvent("trivia2","click",function(){answertrivia(1)});
onEvent("trivia3","click",function(){answertrivia(2)});
onEvent("trivia4","click",function(){answertrivia(3)});
onEvent("trivia5","click",function(){answertrivia(4)});
function answertrivia(val){
    hideE(["trivia1","trivia2","trivia3","trivia4","trivia5","text_area176"]);
    if(triviaqs[trivia].c != val){
        triviawrong++;
    }trivia++;
    var rrrr = trivia - 1;
    if(trivia <= 10){
        playS(0);
        setT("text_area176", ["Question "+trivia+":\n\n"+triviaqs[trivia].q[0],"问题"+trivia+"：\n\n"+triviaqs[trivia].q[1],""+trivia+":\n\n"+triviaqs[trivia].q[2]]);
        fadeIn(["trivia1","trivia2","trivia3","trivia4","trivia5","text_area176"]);
    }else{
        log("ti", 1);
        setT("text_area175", ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nClick anywhere to continue","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n点击任意位置以继续",""]);
        trivia = 0;
        if(!triviawrong){
            playS(3);
            resv2 = 1;
            fadeIn(["text_area176"]);
            showElement("triviastart");
            setT("text_area176", ["Congratulations! You've aced the Lucky Strike Trivia Quiz! Chip is now unlocked.","祝贺！你满分完成了幸运一击小知识测试！筹码现在已解锁。",""]);
            sIurl("yy", "assets/xxb.png");
            update();
        }else{
            playS(2);
            fadeIn(["text_area176"]);
            showElement("triviastart");
            setT("text_area176", ["You completed the Lucky Strike Trivia Quiz. Unfortunately, you got "+triviawrong+" wrong. Try again!","你完成了幸运一击小知识测试。很不幸，你做错了"+triviawrong+"题。再试一次吧！",""]);
        }triviawrong = 0;
}}
onEvent("sChip1","click",function(){
    if(mtt < 4){
        playS(2);
        setT("text_area176", ["Not enough Tokens!", "代币不足！", ""]);
    }else{
        hideE(["sChip1","sChip2","sChip3","sChip4"]);
        setT("text_area176", ["Purchasing...", "正在购买...", ""]);
        mtt -= 4;
        updateProfile(5, 0);
}});
onEvent("sChip3","click",function(){
    if(ticket < 8888){
        playS(2);
        setT("text_area176", ["Not enough 🎟️!", "🎟️不足！", ""]);
    }else{
        hideE(["sChip1","sChip2","sChip3","sChip4"]);
        setT("text_area176", ["Purchasing...", "正在购买...", ""]);
        changeTicket(-8888);
        updateProfile(5, 0);
}});
onEvent("iap","click",function(){
    var diff = Math.ceil((vit - ztime)/86400000);
    if(diff < 0){
        vipst = 1;
    }if(vipst == 2){
        var gap = "";
        if(diff > 1){
            gap = "s";
        }doChip("Unlock Requirement:\n\nAcquire a 👑 Membership.\n\n👑 Perk active for "+diff+" more day"+gap, "解锁需求：\n\n获得👑会员。\n\n👑特权有效时间："+diff+"天", "");
    }else if(vipst == 1 && vit != -1){
        doChip("Unlock Requirement:\n\nAcquire a 👑 Membership.\n\n👑 Perk expired", "解锁需求：\n\n获得👑会员。\n\n👑特权已过时", "");
    }else{
        doChip("Unlock Requirement:\n\nAcquire a 👑 Membership.\n\nLocked", "解锁需求：\n\n获得👑会员。\n\n已锁定", "");
}});
onEvent("text_area175","click",function(){exitchip()});
onEvent("text_area176","click",function(){exitchip()});
function exitchip(){
    if(!trivia){
        fadeOut(["text_area175", "text_area176"]);
        hideE(["sChip1","sChip2","sChip3","triviastart","trivia1","trivia2","trivia3","trivia4","trivia5","sChip4"]);
        playS(10);
}}
onEvent("emoji","click",function(){enteremoji("screen2")});
onEvent("emo","click",function(){enteremoji("pvps")});
onEvent("LL4","click",function(){enteremoji("league")});
function enteremoji(val){
    avindex = 0;
    playS(7);
    checkEmo();
    hideElement("button304");
    showElement("button305");
    if(vipst == 2){
        setStyle("premicon", "border-color:#00f0ff");
    }else{
        setStyle("premicon", "border-color:#fc9105");
    }if(isprememo){    
        setT("avatarT", ["👑 Avatar","👑 头像"]);
        setText("label3", avindex + 1 + " / 9");
        for(var i = 0; i < 30; i++){
            setText("av" + i, premiumavatar[0][i]);
    }}else{
        setT("avatarT", ["Avatar","头像"]);
        setText("ade", deva[0]);
        setText("label3", avindex + 1 + " / 12");
        for(var i = 0; i < 30; i++){
            setText("av" + i, avatar[0][i]);
    }}changeScreen("Avatar");
    from = val;
}
function getunloc(){
    if(vipst == 2 && isprememo){
        setProperty("label8", "width", 290);
        setT("label8", ["270 / 270 Unlocked","270 / 270已解锁",""]);
        setText("label18", "");
    }else if(isprememo){
        setProperty("label8", "width", 0);
        setT("label18", ["0 / 270 Unlocked","0 / 270已解锁",""]);
        setText("label8", "");
    }else{
        setProperty("label8", "width", (avl/360)*290);
        if(avl < 180){
            setT("label18", [avl + " / 360 Unlocked",avl + " / 360已解锁",""]);
            setText("label8", "");
        }else{
            setT("label8", [avl + " / 360 Unlocked",avl + " / 360已解锁",""]);
            setText("label18", "");
}}}
function checkEmo(){
    if(isprememo){
        var diff = Math.ceil((vit - ztime)/86400000);
        if(diff < 0){
            vipst = 1;
        }if(vipst == 2){
            for(var i = 0; i < 30; i++){
                setStyle("av" + i, "border-color:#00f0ff");
        }}else{
            for(var i = 0; i < 30; i++){
                setStyle("av" + i, "border-color:#fc9105");
        }}hideElement("ade");
    }else{
        for(var i = 0; i < 30; i++){
            if(exp < unloc[avindex][i]){
                setStyle("av" + i, "border-color:#fc9105");
            }else{
                setStyle("av" + i, "border-color:#00f0ff");
        }}if(currentid == 1){
            showElement("ade");
        }else{
            hideElement("ade");
    }}getunloc();
}
onEvent("button304","click",function(){
    playS(14);
    showElement("button305");
    if(avindex > 0){
        avindex--;
        if(isprememo){
            setText("label3", avindex + 1 + " / 9");
            for(var i = 0; i < 30; i++){
                setText("av" + i, premiumavatar[avindex][i]);
        }}else{
            setText("label3", avindex + 1 + " / 12");
            setText("ade", deva[avindex]);
            for(var i = 0; i < 30; i++){
                setText("av" + i, avatar[avindex][i]);
        }}checkEmo();
    }if(avindex == 0){
        hideElement("button304");
}});
onEvent("button305","click",function(){
    playS(14);
    showElement("button304");
    if(isprememo){
        if(avindex < 8){
            avindex++;
            setText("label3", avindex + 1 + " / 9");
            checkEmo();
            for(var i = 0; i < 30; i++){
                setText("av" + i, premiumavatar[avindex][i]);
        }}if(avindex == 8){
            hideElement("button305");
    }}else{
        if(avindex < 11){
            avindex++;
            setText("label3", avindex + 1 + " / 12");
            checkEmo();
            setText("ade", deva[avindex]);
            for(var i = 0; i < 30; i++){
                setText("av" + i, avatar[avindex][i]);
        }}if(avindex == 11){
            hideElement("button305");
}}});
onEvent("cb","click",function(){
    if(!coo){
        setT("text_area181", ["\n\n\n\n\n\nYou are about to enter Cheat Mode.\n\nAll cloud functionality will be disabled until the program is refreshed.\n\nAre you sure?", "\n\n\n\n\n\n即将进入作弊模式。\n\n所有联网功能将被禁用，直到刷新程序。\n\n确定？", ""]);
        fadeIn(["text_area181", "button266", "button267"]);
        playS(2);
    }else{
        changeScreen("test3");
}});
onEvent("button273","click",function(){
    playS(5);
    changeScreen(from);
});
onEvent("av0","click",function(){setav(0)});
onEvent("av1","click",function(){setav(1)});
onEvent("av2","click",function(){setav(2)});
onEvent("av3","click",function(){setav(3)});
onEvent("av4","click",function(){setav(4)});
onEvent("av5","click",function(){setav(5)});
onEvent("av6","click",function(){setav(6)});
onEvent("av7","click",function(){setav(7)});
onEvent("av8","click",function(){setav(8)});
onEvent("av9","click",function(){setav(9)});
onEvent("av10","click",function(){setav(10)});
onEvent("av11","click",function(){setav(11)});
onEvent("av12","click",function(){setav(12)});
onEvent("av13","click",function(){setav(13)});
onEvent("av14","click",function(){setav(14)});
onEvent("av15","click",function(){setav(15)});
onEvent("av16","click",function(){setav(16)});
onEvent("av17","click",function(){setav(17)});
onEvent("av18","click",function(){setav(18)});
onEvent("av19","click",function(){setav(19)});
onEvent("av20","click",function(){setav(20)});
onEvent("av21","click",function(){setav(21);});
onEvent("av22","click",function(){setav(22);});
onEvent("av23","click",function(){setav(23);});
onEvent("av24","click",function(){setav(24);});
onEvent("av25","click",function(){setav(25);});
onEvent("av26","click",function(){setav(26);});
onEvent("av27","click",function(){setav(27);});
onEvent("av28","click",function(){setav(28);});
onEvent("av29","click",function(){setav(29);});
onEvent("ade","click",function(){
    emv = emoji = deva[avindex];
    setTex(["emoji","emo", "LL4"], emoji);
    updleaguemo();
    update();
});
onEvent("freeicon","click",function(){
    playS(6);
    hideE(["freeicon", "button304"]);
    setT("avatarT", ["Avatar","头像"]);
    fadeIn(["premicon", "button305"]);
    avindex = 0;
    isprememo = false;
    setText("label3", "1 / 12");
    for(var i = 0; i < 30; i++){
        setText("av" + i, avatar[avindex][i]);
    }checkEmo();
});
onEvent("premicon","click",function(){
    playS(6);
    setT("avatarT", ["👑 Avatar","👑 头像"]);
    fadeIn(["freeicon","button305"]);
    hideE(["premicon","button304"]);
    avindex = 0;
    isprememo = true;
    setText("label3", "1 / 9");
    for(var i = 0; i < 30; i++){
        setText("av" + i, premiumavatar[avindex][i]);
    }checkEmo();
});
function setav(val){
    var emotemp = emoji;
    if(isprememo){
            var diff = Math.ceil((vit - ztime)/86400000);
            if(diff < 0){
                vipst = 1;
            }if(vipst == 2){
                playS(13);
                emoji = premiumavatar[avindex][val];
                setTex(["emoji","emo", "LL4"], emoji);
                update();            
            }else if(vipst == 1 && vit != -1){
                doava(["Be an active 👑 member to unlock exclusive avatars and more!\n\n👑 Perk expired", "成为会员👑来解锁独占头像和更多！\n\n👑特权已过时", ""]);
            }else{
                doava(["Be an active 👑 member to unlock exclusive avatars and more!\n\nLocked", "成为会员👑来解锁独占头像和更多！\n\n已锁定", ""]);
        }}else{
        if(exp < unloc[avindex][val]){
            doava(["Unlock Requirement:\n\nGet " + unloc[avindex][val] + " EXP.", "解锁需求：\n\n获得" + unloc[avindex][val] + "EXP。", ""]);
        }else{
            playS(13);
            emv = emoji = avatar[avindex][val];
            setTex(["emoji","emo", "LL4"], emoji);
            update();
    }}if(emotemp != emoji && currentid != -1 && userID != "Guest"){
        updleaguemo();
}}
function doava(val){
    fadeIn(["text_area177", "text_area174"]);
    setT("text_area177", [val[0], val[1], val[2]]);
    playS(2);
}
onEvent("text_area174","click",function(){
    fadeOut(["text_area177", "text_area174"]);
    playS(10);
});
function sIurl(id, img){
    setImageURL(id, img);
}
onEvent("button266","click",function(){
    playS(0);
    coo = true;
    changeScreen("test3");
    hideE(["text_area181", "button266", "button267"]);
});
onEvent("button267","click",function(){
    playS(0);
    hideE(["button266", "button267"]);
    fadeOut(["text_area181"]);
});
onEvent("button281","click",function(){
    changeScreen("test1");
    playS(7);
});
onEvent("reserve","click",function(){
    var str = "\n";
    switch (lang){
        case 0:for(var i = 0; i < faxe.length; i++){
                str += i + 1 + ". " + faxe[i] + "\n\n";
            }break;
        case 1:for(var i = 0; i < faxc.length; i++){
                str += i + 1 + ". " + faxc[i] + "\n\n";
            }break;
        case 2:
            break;
    }setText("text_area181", str);
    playS(10);
    fadeIn(["text_area181", "button267"]);
});
onEvent("button270","click",function(){enterLTS();});
function enterLTS(){
    if(authTime()){
        return;
    }var a = oleCheck(1);
    if(a){
        setTtext();
        changeScreen("task");
}}
function setTtext(){
    setT("text_area184", [taskmaster[task.num].mit[0], taskmaster[task.num].mit[1], taskmaster[task.num].mit[2]]);
    setText("text_area185", "🎟️ " + task.aw);
    setT("text_area183", ["Season " + task.id, "赛季" + task.id, ""]);
    var td = task.end - ztime / 1000;
    var time = Math.floor(td / 86400) + " D " + Math.floor(td / 3600) % 24 + " H " + Math.floor((td / 60) % 60) + " M";
    setT("text_area191", [time + " left", "还剩 " + time, ""]);
    var sum = getSum();
    var left = taskmaster[task.num].mic - sum;
    if(left < 0){
        left = 0;
    }var tttf = (sum / taskmaster[task.num].mic * 100).toFixed(2);
    setT("text_area190", [left + " left\n" + tttf + "% done", "还剩" + left + "\n" + tttf + "% 完成", ""]);
    pdata[5] = tttf;
    setText("text_area193", "0 (0.00%)");
    for(var i = 0; i < task.se.length; i++){
        if(task.se[i] == currentid){
            setText("text_area193", task.in[i] + " (" + (task.in[i] / taskmaster[task.num].mic * 100).toFixed(2) + "%)");
}}}
function gettex(val){
    switch (lang){
        case 0:var text = "Season " + tasklog[val].season + "\n" + taskmaster[tasklog[val].task].mit[0] + "\n\n";
            break;
        case 1:var text = "赛季 " + tasklog[val].season + "\n" + taskmaster[tasklog[val].task].mit[1] + "\n\n";
            break;
        case 2:
            break;
    }for(var z = 0; z < tasklog[val].seas.length; z++){
        var temp = getGap(tasklog[val].seas[z].s.toString());
        switch (lang){
            case 0:text += "Player " + tasklog[val].seas[z].s + temp + tasklog[val].seas[z].i + "\n";
                break;
            case 1:text += "玩家 " + tasklog[val].seas[z].s + temp + tasklog[val].seas[z].i + "\n";
                break;
            case 2:
                break;
    }}return text;
}
function getleaguetex(val){
    switch (lang){
        case 0:var text = "Season " + leaguehistory[val].id + "\n" + leaguetasks[leaguehistory[val].t].str[0] + ".\n\nPromoted Player(s):\n\n";
            break;
        case 1:var text = "赛季 " + leaguehistory[val].id  + "\n" + leaguetasks[leaguehistory[val].t].str[1] + ".\n\n晋级玩家\n\n";
            break;
        case 2:
            break;
    }for(var z = 0; z < leaguehistory[val].pid.length; z++){
        switch (lang){
            case 0:text += "Player " + leaguehistory[val].pid[z] + "\n";
                break;
            case 1:text += "玩家 " + leaguehistory[val].pid[z] + "\n";
                break;
            case 2:
                break;
    }}return text;
}
function getTM(values){
    hideElement("button276");
    readRecords("\x74\x61\x73\x6B", {}, function(val){
        if(val[val.length-1].id > 19999){
            doFullRecord("task");
        }var ssd = {
            s: 1,           i: 1
        };var seas = [];
        tasklog = [];
        for(var i = val.length - 1; i >= 0; i--){
            validateJSON(val[i].se, "task sender get");
            validateJSON(val[i].in, "task invest get");
            var sender = JSON.parse(val[i].se);
            var invest = JSON.parse(val[i].in);
            for(var j = 0; j < sender.length; j++){
                ssd.s = sender[j];
                ssd.i = invest[j];
                seas.push(ssd);
                ssd = {
                    s: 1,           i: 1
            };}seas.sort(function(a, b){
                return b.i - a.i;
            });var sea = {};
            sea.season = val[i].id;
            sea.task = val[i].num;
            sea.seas = seas;
            tasklog.push(sea);
            seas = [];
        }task = val[val.length - 1];
        validateJSON(task.se, "task sender check");
        validateJSON(task.in, "task invest check");
        task.se = JSON.parse(task.se);
        task.in = JSON.parse(task.in);
        setTtext();
        var realT;
        setTimeout(function(){showElement("button276");
        }, 5000);
        startWebRequest("https://worldtimeapi.org/api/timezone/Etc/GMT", function(status, type, content){
            if(status == 200){
                validateJSON(content, "task time api");
                var z = JSON.parse(content);
                realT = z.unixtime;
                ztime = realT * 1000;
                if(values){
                    playS(7);
                }if(realT > task.end){
                    var c = getSum();
                    var dds = {};
                    dds.CID = dds.log = dds.re = "";
                    dds.ca = "ta";
                    dds.hi = 1;
                    var vag = {};
                    vag.num = RandomNumber(0, 48);
                    vag.se = "[1]";
                    vag.in = "[10]";
                    vag.aw = RandomNumber(32, 68) * 10;
                    vag.end = realT + 604800;
                    createRecord("\x74\x61\x73\x6B", vag, function(val){
                        if(c < taskmaster[task.num].mic){
                            for(var i = 0; i < task.se.length; i++){
                                dds.UID = task.se[i];
                                dds.me = "0%$" + task.id + "^0";
                                createRecord("\x66\x65\x65\x64\x62\x61\x63\x6B", dds, function(){});
                        }}else{
                            for(var i = 0; i < task.se.length; i++){
                                dds.UID = task.se[i];
                                dds.me = (task.in[i] / getSum() * 100).toFixed(2) + "%$" + task.id + "^" + Math.ceil(task.in[i] / c * task.aw);
                                createRecord("\x66\x65\x65\x64\x62\x61\x63\x6B", dds, function(){});
                        }}task = val;
                        validateJSON(task.se, "task sender check");
                        validateJSON(task.in, "task invest check");
                        task.se = JSON.parse(task.se);
                        task.in = JSON.parse(task.in);
                        setTtext();
});}}});});}
function getSum(){
    var sum = 0;
    for(var i = 0; i < task.in.length; i++){
        sum += task.in[i];
    }return sum;
}
function uploadleague(value){
    if(!cxc && lbh == 0){
        cxc = true;
        readRecords("league", {}, function(val){
            leaguedata = val[val.length - 1];
            validateJSON(leaguedata.pid, "league sender set");
            validateJSON(leaguedata.amt, "league invest set");
            validateJSON(leaguedata.emo, "league avatar set");
            validateJSON(leaguedata.vit, "league viptime set");
            validateJSON(leaguedata.rk, "league rk set");
            var sender = JSON.parse(leaguedata.pid);
            var amt = JSON.parse(leaguedata.amt);
            var emi = JSON.parse(leaguedata.emo);
            var leaguevit = JSON.parse(leaguedata.vit);
            var rkv = JSON.parse(leaguedata.rk);
            var trig = false;
            for(var i = 0; i < sender.length; i++){
                if(currentid == sender[i]){
                    amt[i] += value + tempHold;
                    emi[i] = emoji;
                    leaguevit[i] = vit;
                    rkv[i] = leaguerank;
                    tempHold = 0;
                    trig = true;
                    break;
            }}if(!trig){
                sender.push(currentid);
                emi.push(emoji);
                amt.push(value);
                rkv.push(leaguerank);
                leaguevit.push(vit);
            }if(ztime < leaguedata.e * 1000){
                updateRecord("league", {
                    id: leaguedata.id,                      t: leaguedata.t,                        pid: JSON.stringify(sender),
                    amt: JSON.stringify(amt),               emo: JSON.stringify(emi),               vit: JSON.stringify(leaguevit),
                    rk: JSON.stringify(rkv),                e: leaguedata.e
            });}else{
                retriv();
            }setTimeout(function(){cxc = false
            }, 4000);
    });}else{
        tempHold += value;
}}
function uploadtask(value){
    if(!cdc && lbh == 0){
        cdc = true;
        readRecords("\x74\x61\x73\x6B", {}, function(val){
            task = val[val.length - 1];
            validateJSON(task.se, "task sender set");
            validateJSON(task.in, "task invest set");
            task.se = JSON.parse(task.se);
            task.in = JSON.parse(task.in);
            var trig = false;
            for(var i = 0; i < task.se.length; i++){
                if(currentid == task.se[i]){
                    task.in[i] += value + temHold;
                    temHold = 0;
                    trig = true;
                    break;
            }}if(!trig){
                task.se.push(currentid);
                task.in.push(value);
            }if(ztime < task.end * 1000){
                updateRecord("\x74\x61\x73\x6B", {
                    id: task.id,                            num: task.num,                      se: JSON.stringify(task.se),
                    in: JSON.stringify(task.in),            aw: task.aw,                        end: task.end
            });}else{
                getTM(false);
            }setTimeout(function(){cdc = false
            }, 4000);
    });}else{
        temHold += value;
}}
onEvent("button274","click",function(){
    playS(8);
    setT("text_area194", ["Welcome to Taskmaster!\n\nA new task will appear every week.\n\nComplete it as a team before the timer runs out to share the prize 🎟️!\n\nIf the task is completed, compete with other players for more 🎟️.\n\nIf the task is not completed, the prize will not be issued.\n\nReward is sent via in-game message.", "欢迎来到任务达人！\n\n每周将有一个任务。\n\n在时间耗尽前和其他玩家一起完成任务来分享奖品！\n\n如果任务已经完成，与其他玩家竞争以赢取更多🎟️。\n\n如果赛季结束时任务没有完成，奖品将不会派发。\n\n奖励通过游戏内信件发放。", ""]);
    fadeIn(["text_area188", "text_area194", "button277"]);
});
onEvent("button275","click",function(){ticketgameback(0)});
onEvent("button272","click",function(){
    var text = gettex(0);
    lbt = 0;
    playS(8);
    setText("text_area194", text);
    hideElement("button279");
    fadeIn(["text_area188", "text_area194", "button277", "button278"]);
});
onEvent("button279","click",function(){
    if(lbt - 1 >= 0){
        playS(10);
        showElement("button278");
        lbt--;
        setText("text_area194", gettex(lbt));
        if(lbt - 1 < 0){
            hideElement("button279");
}}});
onEvent("button278","click",function(){
    if(lbt + 1 < tasklog.length){
        playS(10);
        showElement("button279");
        lbt++;
        setText("text_area194", gettex(lbt));
        if(lbt + 1 >= tasklog.length){
            hideElement("button278");
}}});
onEvent("button277","click",function(){
    hideE(["button277", "button278", "button279"]);
    playS(5);
    fadeOut(["text_area188", "text_area194"]);
});
onEvent("button276","click",function(){getTM(true)});
onEvent("button280","click",function(){
    setText("text_area198", accountstring);
    setText("text_area196", ticketstring);
    playS(1);
    startTime();
    changeScreen("wheel3");
});
onEvent("button282","click",function(){ticketgameback(1)});
function insT(val){
    playS(2);
    setT(val, ["Insufficient 🎟️!", "🎟️不足！", ""]);
}
onEvent("button283","click",function(){
    if(ticket == 0){
        insT("text_area203");
    }else{
        redpacket(1, 1);
}});
onEvent("button284","click",function(){
    if(ticket < 9){
        insT("text_area203");
    }else{
        redpacket(9, 10);
}});
onEvent("button285","click",function(){
    if(ticket < 30){
        insT("text_area203");
    }else{
        redpacket(30, 35);
}});
function redpacket(val, val2){
    changeTicket(-val);
    pst++;
    log("zk", val);
    log("zb", val);
    fadein("text_area195");
    setText("text_area203", "");
    setText("text_area196", ticketstring);
    randon = RandomNumber(1, 100);
    var valu = 0;
    for(var i = 12; i > -1; i--){
        if(randon >= rpval[i]){
            valu = 12 - i;
            break;
    }}ij = valu + 27;
    randon = ij;
    ele = 0;
    fls = 0;
    fls = timedLoop(100, function(){
        ij--;
        if(ij > randon - 13){
            playS(14);
            setStyle("a" + ele, "background: #FF0000");
            ele++;
        }else{
            stopTimedLoop(fls);
            log("zm", 1);
            fc = 0;
            update();
            fc = timedLoop(150, function(){
                ij--;
                if(ij > randon - 26){
                    playS(14);
                    setStyle("a" + ele, "background: #00FF00");
                    ele++;
                }else{
                    ele = 0;
                    stopTimedLoop(fc);
                    fz = 0;
                    fz = timedLoop(200, function(){
                        ij--;
                        if(ij > 0){
                            playS(14);
                            setStyle("a" + ele, "background: #0000FF");
                            if(ij != 1){
                                ele++;
                        }}else{
                            setTimeout(function(){endrp(val2)
                            }, 500);
                            stopTimedLoop(fz);
            }});}});ele = 0;
}});}
function endrp(val){
    for(var i = 0; i < 12; i++){
        if(i != ele){
            setStyle("a" + i, "background: rgba(0,0,0,0)");
    }}var a = prize[ele];
    if(a < 2981){
        playS(8);
    }else if(a < 20979){
        playS(3);
    }else{
        playS(4);
        tgp++;
        nto+=10;
        log("zn", 1);
        subBoard(12, a*val);
    }var total = a * val;
    log("zl", total);
    setText("text_area203", localstr(a) + " * " + val + "\n= " + localstr(total));
    changeAccount(total);
    update();
    setText("text_area198", accountstring);
    fadeout("text_area195");
}
onEvent("text_area161","click",function(){
    tempshop();
});
onEvent("button250","click",function(){
    tempshop();
});
onEvent("button326","click",function(){
    if(spenting != 0){
        changeScreen("store");
        checkach();
        setText("text_area41", accountstring);
        playS(7);
    }else{
        fadeOut(["shoptext","shopbg"]);
        playS(5);
        spenting = 1;
}});
onEvent("button317","click",function(){
    spenting = 0;
    fadeIn(["shoptext","shopbg"]);
    playS(8);
    setT("shoptext", ["👑 subscription unlocks the following:\n\n50,000 credit high bet limit (excluding PVP Arena)\n\n👑 exclusive chip\n\n👑 leaderboard badge\n\n6 👑 exclusive themes\n\n270 👑 avatars","👑订阅包括如下内容:\n\n5万点数高赌注限额 (不包括PVP竞技场)\n\n-👑独占筹码\n\n👑排行榜徽章\n\n6个👑独占主题\n\n270个👑头像",""]);
});
onEvent("button322","click",function(){
    triggerShop(728880, 31); 
});
onEvent("button323","click",function(){
    triggerShop(168880, 7); 
});
onEvent("button325","click",function(){
    triggerShop(26880, 1);    
});
function triggerShop(credit, days){
    hideElement("button326");
    fadeIn(["shopbg","shopno","shoptext"]);
    if(account < credit){
        playS(2);
        setT("shoptext", ["Insufficient fund!", "资金不足！", ""]);
    }else{
        playS(8);
        fadein("shopyes");
        spenting = [credit, days];
        setT("shoptext", ["Purchase "+days+"-day 👑? This action cannot be undone. \n\n👑 will start immediately.", "购买"+days+"天👑？此操作不可撤销。\n\n👑将立即开始。", ""]);
}}
onEvent("shopyes","click",function(){
        hideE(["shopyes","shopno"]);
        setT("shoptext", ["Querying online database.\nIf this took more than 5 seconds check your internet connection.", "正在查询数据库。\n如果此操作超过了5秒，请检查您的网络连接。", ""]);
        changeAccount(-spenting[0]);
        pay += spenting[1];
        var a = ztime+(spenting[1]*86400000);
        var b = vit + (spenting[1]*86400000);
        if(a >= b){
            vit = a;
        }else{
            vit = b;
        }vipexp = 0;
        update();
        parseVIPtime();
        log("vpp", 1);
        fadein("button326");
        fadeOut(["shoptext","shopbg"])
        dodynamic([spenting[1]+"-day 👑 Purchased.", spenting[1]+"天👑购买成功。",""]);
        playS(9);
        gettr();
        updleaguvit();
});
onEvent("shopno","click",function(){
    playS(0);
    fadein("button326");
    hideE(["shopno","shopyes"]);
    fadeOut(["shoptext","shopbg"]);
});
function tempshop(){
    if(coo){
        playS(2);
        setT("text_area93", ["Unavailable in Cheat Mode. Please refresh the game.", "作弊模式下不可用。请刷新程序。", ""]);
        fadeIn(["button182","text_area94", "text_area93"]);
        return;
    }if(userID == "Guest"){
        playS(2);
        setT("text_area93", ["Unavailable in Guest Mode. Please create an account or log in.", "游客模式下不可用。请创建账号或登录。", ""]);
        fadeIn(["button182","text_area94", "text_area93"]);
        return;
    }
    changeScreen("shoptemp");
    parseVIPtime();
    playS(1);
}
function parseVIPtime(){
    setText("text_area234", accountstring);
    if(vit == -1){
        setT("text_area237",["Inactive","未激活",""]);
    }else{
        if(time < GetTime()){
            setT("text_area237",["Expired","已过期",""]);
        }else{
            var time = new Date(vit);
            var month = time.getMonth() + 1;
            setT("text_area237", ["To " + time.getFullYear() + "-" + month + "-" + time.getDate(), "至" + time.getFullYear() + "-" + month + "-" + time.getDate(), ""]);
}}}
function sLoop(){
    xxcz = 360;
    cuxx = 0;
    setPosition("loop", xxcz, 87, 3300, 35);
    showElement("loop");
    cuxx = timedLoop(15, function(){
        xxcz--;
        setPosition("loop", xxcz, 87, 3300, 35);
        if(xxcz < -3300){
            xxcz = 360;
}});}
function parBo(){
    getKeyValue("board", function(val){
        validateJSON(val, "board get");
        val = JSON.parse(val);
        parseBoard(val);
});}
function parseBoard(val){
  var dur, cur;
  txE = txC=txS = "";
  var etime = Math.round(GetTime()/3600000);
  cur = 0;
  for(var i = 0; i < val.length; i++){
    if(cur < 8){
      cur++;
      dur = etime - val[i].ti;
      if(dur > 8760){
        break;
      }if(dur > 23){
        dur = Math.round(dur/24);
        var gap = "";
        if(dur > 1){
            gap = "s";
        }if(val[i].us == 0){
            txE += "Guest won a jackpot in "+games[val[i].ga]+ " (+"+localstr(val[i].won)+") "+dur+ " day"+gap+" ago.                  ";
        }else{
            txE += "Player "+val[i].us+ " won a jackpot in "+games[val[i].ga]+ " (+"+localstr(val[i].won)+") "+dur+ " day"+gap+" ago.                  ";
      }}else{
        var gap = "";
        if(dur > 1){
            gap = "s";
        }if(val[i].us == 0){
            txE += "Guest won a jackpot in "+games[val[i].ga]+ " (+"+localstr(val[i].won)+") "+dur+ " hour"+gap+" ago.                  ";
        }else{
          txE += "Player "+val[i].us+ " won a jackpot in "+games[val[i].ga]+ " (+"+localstr(val[i].won)+") "+dur+ " hour"+gap+" ago.                  ";
    }}}}cur = 0;
  for(var i = val.length-1; i > -1; i--){
    if(cur < 8){
      cur++;
      dur = Math.round(etime - val[i].ti);
      if(dur > 2160){
        break;
      }if(dur > 23){
        dur = Math.round(dur/24);
        if(val[i].us == 0){
          txC+= "游客在"+dur+"天前赢了一个"+gamesa[val[i].ga]+ "头奖（"+localstr(val[i].won)+"点数）                  ";
        }else{
          txC+= "玩家"+val[i].us+ "在"+dur+"天前赢了一个"+gamesa[val[i].ga]+ "头奖（"+localstr(val[i].won)+"点数）                  ";
        }}else{
        if(val[i].us == 0){
          txC+= "游客在"+dur+"小时前赢了一个"+gamesa[val[i].ga]+ "头奖（"+localstr(val[i].won)+"点数）                  ";
        }else{
          txC+= "玩家"+val[i].us+ "在"+dur+"小时前赢了一个"+gamesa[val[i].ga]+ "头奖（"+localstr(val[i].won)+"点数）                  ";
}}}}cur = 0;
  for(var i = val.length-1; i > -1; i--){
    if(cur < 8){
      cur++;
      dur = Math.round(etime - val[i].ti);
      if(dur > 23){
        dur = Math.round(dur/24);
        if(val[i].us == 0){
    }else{
    }}else{
        if(val[i].us == 0){  
        }else{   
}}}}switch (lang){
    case 0:setText("loop",txE);break;
    case 1:setText("loop",txC);break;
    case 2:setText("loop",txS);break;
}}
function subBoard(game, win){
  var etime = Math.round(GetTime()/3600000);
  var temp = {};
  temp.us = 0;
  if(currentid != -1 && userID != "Guest"){
    temp.us = currentid; 
  }temp.won = win;
  temp.ga = game;
  temp.ti = etime;
  getKeyValue("board", function(val){
      validateJSON(val, "board set");
      val = JSON.parse(val);
      val.unshift(temp);
      if(val.length > 7){
        val.pop();
      }val = JSON.stringify(val);
      setKeyValue("board", val, function(){});
});}
onEvent("pvpback","click",function(){
  playS(5);
  changeScreen("screen2");
});
onEvent("pvphost","click",function(){
    if(authTime()){
        return;
    }playS(6);
    var a = oleCheck(1);
    if(a){
        changeScreen("pvpd");
}});
onEvent("pvphd","click",function(){ticketgameback(0)});
onEvent("pvprand","click",function(){
  playS(13);
  setText("pvpmatches" ,RandomNumber(4, 64));
});
onEvent("pvpss0","click",function(){pvpsel(0)});
onEvent("pvpss1","click",function(){pvpsel(1)});
onEvent("pvpss2","click",function(){pvpsel(2)});
onEvent("pvpss3","click",function(){pvpsel(3)});
onEvent("pvpss4","click",function(){pvpsel(4)});
onEvent("pvpss5","click",function(){pvpsel(5)});
onEvent("pvpss6","click",function(){pvpsel(6)});
onEvent("pvpss7","click",function(){pvpsel(7)});
onEvent("pvpss8","click",function(){pvpsel(8)});
function pvpsel(val){
    if(pvpselection[val]){
        setStyle("pvpss"+val, "border-color:#4d575f");
        pvpselection[val] = 0;
        playS(13);
    }else{
        setStyle("pvpss"+val, "border-color:#54ff00");
        pvpselection[val] = 1;
        playS(0);
}}
onEvent("pvphh","click",function(){
  playS(14);
  var round = getText("pvpmatches");
  var opponent = getText("pvppn");
  var wincriteria = getText("pvpcriteria");
  var wincriteriac = getText("pvpcriteriac");
  var wincriteriax = getText("pvpcriteriax");
  switch(lang){
    case 0:break;
    case 1: wincriteria = wincriteriac;
        break;
    case 2: wincriteria = wincriteriax;
        break;
  }var wincr, ga, tgi;
  wincr = ga = tgi = 0;
  for(var i = 0 ; i < pvpselection.length; i++){
    ga += pvpselection[i];
    if(pvpselection[i]){
        tgi = i + 1;
  }}var rp = "";
  if(isNaN(parseInt(round)) || round == ""){
    setT("pvptut",["Round number must be a number.", "轮数必须是数字。",""]);
    return;
  }if((isNaN(parseInt(opponent)) && opponent != "")){
    setT("pvptut",["Opponent must be a number or blank.", "对手必须是数字或留空。",""]);
    return;
  }if(!ga){
    setT("pvptut",["At least 1 game must be selected.", "至少得选择一个游戏。",""]);
    return;
  }else{
    if(opponent != "" && (opponent < 1 || opponent > 20000)){
      setT("pvptut",["Opponent must be from 1 to 20000.", "对手必须是1到20000。",""]);
      return;
    }if(round < 4 || round > 64){
        setT("pvptut",["Round must be between 4 and 64.", "轮数必须是4到64。",""]);
      return;
    }if(opponent == currentid){
        setT("pvptut",["Opponent can't be yourself.", "对手不能是自己。",""]);
        return;
    }hideE(["pvphh"]);
    if(opponent != ""){
      switch(lang){
        case 0: rp = "Player "+opponent; break;
        case 1: rp = "玩家 "+opponent; break;
        case 2: break;
    }}else{switch(lang){
        case 0: rp = "Random Player";
            break;
        case 1: rp = "随机玩家"+opponent;
            break;
        case 2: break;
    }}}hideE(["youelo","oppoelo","label9","playercontest","oppocontest","oppoupdate","playerdata","oppoprogressbg","You","oppocore","label7","yourprogress","yourprogressbg","contestbg","oppoprogress","label10","endround","yourprogressbg",]);
  if(wincriteria == "Highest Win Amount" || wincriteria == "最高赢钱" ){
    wincr = 0;
  }else if(wincriteria == "Best Win/Loss Ratio" || wincriteria == "最佳胜率" ){
    wincr = 2;
  }else if(wincriteria == "Highest Win Streak" || wincriteria == "最佳连胜" ){
    wincr = 3;
  }var seed = [];
  var teeee = 0;
  if(ga == 1){
    for(var h = 0; h < round; h++){
        seed.push(tgi);
  }}else{
    while(teeee < round){
        var rand = RandomNumber(1, 9);
        var tp = rand - 1;
        if(pvpselection[tp]){
            seed.push(rand);
            teeee++;
  }}}var form = {};                         form.p1 = currentid;                        form.w = opponent;
  form.pe = emoji;                          form.rs = JSON.stringify(seed);             form.wa = form.la = 10;
  form.st = 1;                              form.r = round;                             form.elo = eloscore;
  form.cr = form.p2 = form.q =  0;          form.p = GetTime();                         form.c = wincr;
  form.v = vipst;                           form.x = getChecked("checkbox3");
  if(form.w == ""){
    form.w = 0;
  }temsc = "pvpe";
  createRecord("pvp", form, function(val){
    pvpdata = {};
    pvpdata = form;
    pvpdata.id = val.id;
    begin = ispairing = true;
    hideE(["pvpcont"]);
    stopTimedLoop(kz);
    kz = 0;
    kz = timedLoop(120000, function(){
        if(currentScreen == "pvpe" && !ispvp){
           changeScreen("pvps");
           fadeOut(["searchhost"]);
           begin = ispairing = false;
           olreject(["The match has expired. Please create a new room.","房间已过期。请新建一个房间。",""]);
           stopTimedLoop(kz);
    }});fadeIn(["searchhost"]);
    setTex(["emoarea1","emoarea2"], "");
    setT("pvpstat", ["Match Created.\n\n"+round+" rounds, "+cridatae[wincr]+", "+rp+"\n\nWaiting for opponent...","已创建房间。\n\n"+round+"轮，"+gamesa[ga]+"，"+cridatac[wincr]+"，"+rp+"\n\n正在等待对手...",""]);    changeScreen("pvpe");
});});
onEvent("pvpeb","click",function(){
    hideElement("image87");
    playS(14);
    wtbf = 1;
    if(mend){
        mend = false;
        setText("text_area220", accountstring);
        setText("text_area222", ticketstring);
        setText("elo","🔰 "+eloscore);
        changeScreen("pvps");
        ispvp = begin = false;
        wager = pvpwager;
        if(isfest != 0 && fxx){
            setHoli();
        }else{
            setTheme();
    }}else{
        fadeIn(["Back"]);
        temsc = "pvpe";
        changeScreen("warning");
        setT("warnT", ["Warning. \n\nQuitting will close the current match.\n\nOpponent (if any) will win automatically.\n\nContinue?","警告。\n\n退出将关闭当前房间。对手（如有）将自动获胜。\n\n继续？",""]);
}});
onEvent("pvpjoin","click",function(){
    if(authTime()){
        return;
    }playS(6);
    var a = oleCheck(1);
    if(a){
    begin = true;
    wtbf = 1;
    changeScreen("pvpj");
    setT("pvpinter", ["Waiting for players to join / Searching for games...","等待玩家加入/正在搜索游戏...",""]);
    searchPVP();
    rtlo = timedLoop(3000, function(){
      searchPVP();
});}});
function searchPVP(){
  match = [];
  var tmat = {};
  var time = GetTime();
  readRecords("pvp", {}, function(val){
    for(var i = val.length-1; i > -1; i--){
      if(val[i].p2 == 0 && val[i].w == currentid && val[i].q == 0 && Math.abs(time - val[i].p) < 120000 && val[i].p1 != currentid){
        tmat = {};                      tmat.id = val[i].id;                    tmat.p2 = val[i].p1;
        tmat.rs = val[i].rs;            tmat.pe = val[i].pe;                    tmat.wa = tmat.la = 10;
        tmat.cr = tmat.q = 0;           tmat.st = 1;                            tmat.r = val[i].r;
        tmat.p = val[i].p;              tmat.c = val[i].c;                      tmat.w = val[i].w;
        tmat.elo = val[i].elo;          tmat.v = val[i].v;                      tmat.x = val[i].x;
        match.unshift(tmat);
      }else if(val[i].p2 == 0 && val[i].q == 0 && Math.abs(time - val[i].p) < 120000 && val[i].p1 != currentid && val[i].w == 0){
        tmat = {};                      tmat.id = val[i].id;                    tmat.p2 = val[i].p1;
        tmat.rs = val[i].rs;            tmat.pe = val[i].pe;                    tmat.wa = tmat.la = 10;
        tmat.cr = tmat.q = 0;           tmat.st = 1;                            tmat.r = val[i].r;
        tmat.p = val[i].p;              tmat.c = val[i].c;                      tmat.w = val[i].w;
        tmat.elo = val[i].elo;          tmat.v = val[i].v;                      tmat.x = val[i].x;
        match.push(tmat);
      }else if(ztime - val[i].p > 1800000){
        deleteRecord("pvp", val[i], function(){});
    }}showE(["searchjoin"]);
    setT("pvpinter", ["Did not found any game to join. Host one!\n\nSearching...", "没有找到可加入的游戏。创建一个吧！\n\n正在寻找...", ""]);
    if(match.length > 0){
      stopTimedLoop(rtlo);
      matchvar = 0;
      joinid = match[0].p2;
      fadeOut(["searchjoin"]);
      if(match[0].x){
        setT("pvpinter", ["Found a game.\n\nPlayer "+match[0].p2+", "+match[0].r+" rounds, Ranked, "+cridatae[match[0].c]+", Join?","找到一个游戏。\n\n玩家"+match[0].p2+"，"+match[0].r+"轮，排名游戏，"+cridatac[match[0].c]+"。是否加入？",""]);
      }else{
        setT("pvpinter", ["Found a game.\n\nPlayer "+match[0].p2+", "+match[0].r+" rounds, Unranked, "+cridatae[match[0].c]+", Join?","找到一个游戏。\n\n玩家"+match[0].p2+"，"+match[0].r+"轮，非排名游戏，"+cridatac[match[0].c]+"。是否加入？",""]);
      }fadeIn(["pvpjg","pvpdecline"]);
}});}
function doFullRecord(val){
    setScreen("ximer".split("").reverse().join(""));
    setT("isfuislkjfdsj", ["Fatal Error.\n\nTable '"+val+"' full.\n\nPlease contact the developer at mtngckover@gmail.com with the above error message.\n\nSorry for the inconvenience.","致命错误：\n\n表格'"+val+"'已满。\n\n请电邮开发者：mtngckover@gmail.com并附带上述错误信息。\n\n带来的不便敬请谅解。",""]);
    mmm = true;
}
onEvent("pvpjg","click",function(){
  playS(14);
  readRecords("pvp", {}, function(val){
      for(var i = 0; i < val.length; i++){
        if(val[i].id == match[matchvar].id){
            if(val[i].p2 == 0){
                var pvdata = {};                          pvdata.p1 = currentid;              pvdata.p2 = match[matchvar].p2;
                pvdata.rs = match[matchvar].rs;           pvdata.pe = emoji;                  pvdata.r = match[matchvar].r;
                pvdata.p = GetTime();                     pvdata.wa = pvdata.la = 10;         pvdata.q = pvdata.cr = 0;
                pvdata.st = 1;                            pvdata.c = match[matchvar].c;       pvdata.w = match[matchvar].w;
                pvdata.elo = eloscore;                    pvdata.v = vipst;                   pvdata.x = match[matchvar].x;              
                oppodata = match[matchvar];
                hideE(["pvpjg","pvpdecline"]);
                createRecord("pvp", pvdata, function(val){
                    if(val.id > 19999){
                        doFullRecord("pvp");
                    }ispvp = true;
                    pvpwager = wager;
                    pvdata.id = val.id;
                    pvpdata = pvdata;
                    if(!timer){
                        dqtimer();
                        timer = true;
                    }validateJSON(pvpdata.rs, "pvp start");
                    var tp = JSON.parse(pvpdata.rs);
                    setRandom();
                    log("zom", 1);
                    ols+=2;
                    sirand = 0;
                    doRand(tp[pvpdata.cr]);
                    dodynamic(["Joined by Player " +pvdata.p2+".", "玩家"+pvdata.p2+"已加入。", ""]);
                    pvpdata.cr++;
        });}else{
            hideE(["pvpjg","pvpdecline"]);
            changeScreen("pvps");
            olreject(["Target room has changed. Please search again.","目标房间信息已改变。请重新搜索。",""]);
            ispvp = begin = false;
}}}});});
onEvent("pvpdecline","click",function(){
    playS(14);
    matchvar++;
    hideE(["pvpjg","pvpdecline"]);
    if(match.length > matchvar){
      joinid = match[matchvar].p2;
      fadeOut(["searchjoin"]);
      setT("pvpinter", ["Found a match.\n\nPlayer "+match[matchvar].p2+", "+match[matchvar].r+" rounds, "+cridatae[match[matchvar].c]+". Join?","找到一个游戏。\n\n玩家"+match[matchvar].p2+"，"+match[matchvar].r+"轮，"+cridatac[match[matchvar].c]+"。是否加入？",""]);
      fadeIn(["pvpjg","pvpdecline"]);
    }else{
      fadeOut(["searchjoin"]);
      setT("pvpinter", ["Did not found any game to join. Host one!\n\nTo search again, re-enter this page.", "没有找到可加入的游戏。创建一个吧！\n\n重新进入此页面以重试。", ""]);
}});
onEvent("pvpjb","click",function(){
  begin = false;
  ticketgameback(0);
});
onEvent("pvpcont","click",function(){doPVPcont()});
function doPVPcont(){
  playS(9);
  ispvp = true;
  if(!timer){
    dqtimer();
    timer = true;
  }validateJSON(pvpdata.rs, "pvp continue");
  var tp = JSON.parse(pvpdata.rs);
  setRandom();
  log("zom", 1);
  sirand = 0;
  doRand(tp[pvpdata.cr]);
  pvpdata.cr++;
}
onRecordEvent("pvp", function(val){
  var time = GetTime();
  if(val.p1 == currentid && ispvp && Math.abs(val.p - time) < 90000){
    if(val.q == 1 && ispvp){
      changeScreen("warning");
      setT("warnT", ["You are disqualified due to prolonged inactivity.","因为长期无操作，你已被淘汰。",""]);
      stopTimedLoop(sdfg);
      timer = false;
      hideElement("Back");
  }}else if(val.p2 == currentid && !ispvp && begin && Math.abs(val.p - time) < 120000){
    ispvp = true;
    pvpwager = wager;
    ispairing = false;
    fadeOut(["searchhost"]);
    dodynamic(["Joined by Player " +val.p1+".", "玩家"+val.p1+"已加入。", ""]);
    oppodata.id = val.id;               oppodata.wa = val.wa;               oppodata.la = val.la;
    oppodata.st = val.st;               oppodata.r = val.r;                 oppodata.cr = val.cr;
    oppodata.p = val.p;                 oppodata.pe = val.pe;               oppodata.elo = val.elo;
    oppodata.v = val.v;                 pvpdata.p2 = val.p1;                oppodata.x = val.x;
    updatePlayerPVP();
    doPVPcont();
    resetTimer();
  }else if(val.p2 == currentid && ispvp && begin && Math.abs(val.p - time) < 90000){
    if(val.q == 1){
      changeScreen("warning");
      begin = ispvp = timer = wtbf= false;
      wager = pvpwager;
      stopTimedLoop(sdfg);
      olw++;
      setT("warnT", ["The opponent is disqualified due to prolonged inactivity/quitting.\n\nYou Win！","对手因为长期无操作/退出被淘汰。\n\n你赢了！",""]);
      doPunish(pvpdata.p2, oppodata.elo, eloscore);
      hideElement("Back");
      oppodata.q = 1;
      oppodata.p = getTime();
      oppodata.p1 = pvpdata.p2;
      updateRecord("pvp", oppodata, function(){});
      update();
      return;
    }oppodata.id = val.id;                  oppodata.wa = val.wa;               oppodata.la = val.la;
    oppodata.st = val.st;                   oppodata.cr = val.cr;               oppodata.p = val.p;
    oppodata.elo = val.elo;                 oppodata.v = val.v;                 oppodata.x = val.x;
    updPVPText();
    resetTimer();
}});
function dqtimer(){
    if(timer){
        return;
    }ti = sdfg = 0;
    sdfg = timedLoop(1000, function(){
    if(ti > 89 && !ontr){
        ontr = true;
        oppodata.q = 1;
        oppodata.p1 = pvpdata.p2;
        oppodata.p = getTime();
        updateRecord("pvp",oppodata, function(){
        changeScreen("warning");
        olw++;
        setT("warnT", ["The opponent is disqualified due to prolonged inactivity/quitting.\n\nYou win!","对手因为长期无操作/退出被淘汰。\n\n你赢了！",""]);
        begin = ispvp = timer = false;
        hideElement("Back");
        stopTimedLoop(sdfg);
        timer = wtbf = false;
        doPunish(pvpdata.p2, oppodata.elo, eloscore);
        update();
        return;
    });}else{
      ti++;
}});}
function doPunish(player, theirelo, ourelo){
    var delta = Math.floor(Elo.getRatingDelta(theirelo, ourelo, 0) * 1.5);
    var dds = {};
    dds.CID = dds.re = dds.log = "";
    dds.me = getTime() + "$" + delta;
    dds.ca = "ELO";
    dds.hi = 1;
    dds.UID = player;
    createRecord("\x66\x65\x65\x64\x62\x61\x63\x6B", dds, function(){});
}
function resetTimer(){ ontr = ti = 0}
function updatePlayerPVP(){
    pvpdata.p = GetTime();
    updateRecord("pvp", pvpdata, function(){});
}
var locallastgame = true;
function setPVPBars(){
    var youpro = 0.1;
    var playerdata = 0;
    var oppondata = 0;
    switch(pvpdata.c){
        case 0: youpro = pvpdata.wa/(pvpdata.wa+oppodata.wa);
        playerdata = pvpdata.wa;
        oppondata = oppodata.wa;
        break;
        case 1: youpro = pvpdata.la/(pvpdata.la+oppodata.la);
        playerdata = pvpdata.la;
        oppondata = oppodata.la;
        break;
        case 2: youpro = Math.round(pvpdata.wa*100/pvpdata.la)/(Math.round(pvpdata.wa*100/pvpdata.la)+Math.round(oppodata.wa*100/oppodata.la));
        playerdata = Math.round(pvpdata.wa*100/pvpdata.la);
        oppondata = Math.round(oppodata.wa*100/oppodata.la);
        break;
        case 3: youpro = pvpdata.st/(pvpdata.st+oppodata.st);
        playerdata = pvpdata.st;
        oppondata = oppodata.st;
        break;
    }if((playerdata == 0 && oppondata == 0) || isNaN(youpro)){
      youpro = 0.5;
    }if(youpro > 0.904){
        youpro = 0.904;
    }setProperty("playercontest", "width", youpro*260);
    setProperty("oppocontest", "width", (1-youpro)*260);
    setProperty("oppocontest", "x", 30+youpro*260);
    if((1-youpro)*260 < 25){
        setProperty("oppocontest", "width", 25);
        setProperty("oppocontest", "x", 265);
    }else if((1-youpro)*260 > 235){
        setProperty("oppocontest", "width", 235);
        setProperty("oppocontest", "x", 55);
    }if(youpro*260 < 25){
        setProperty("playercontest", "width", 25);
    }setProperty("yourprogress", "width", (pvpdata.cr/pvpdata.r)*220);
    setProperty("oppoprogress", "width", (oppodata.cr/pvpdata.r)*220);
    setText("playerdata", playerdata);
    setText("oppocore", oppondata);
    setText("endround", pvpdata.r);
    setText("youelo", "🔰 "+eloscore);
    setText("oppoelo", "🔰 "+oppodata.elo);
    setText("emoarea1", emoji);
    setText("emoarea2", oppodata.pe)
    switch(lang){
        case 0: setText("label9",cridatae[pvpdata.c]);
            setText("label7","Player "+pvpdata.p2);
            break;
        case 1: setText("label9",cridatac[pvpdata.c]);
            setText("label7","玩家"+pvpdata.p2);
            break;
        case 2:
            break;
}}
function SetStyle(name, pro){
    for(var i = 0; i < name.length; i++){
        setStyle(name[i], pro);
}}
function updPVPText(){
    fadeIn(["youelo","oppoelo","label9","playercontest","oppocontest","yourprogressbg","oppoprogressbg","contestbg","oppoupdate","playerdata","You","oppocore","label7","yourprogress","oppoprogress","label10","endround","yourprogressbg",]);
    setPVPBars();
    hideE(["searchhost"]);
    var state, statc, stats, win;
    state = statc = stats = "";
    if(vipst == 2){
        SetStyle(["playerdata", "You", "youelo", "emoarea1"], "text-shadow: 0 0 5px yellow");
    }else{
        SetStyle(["playerdata", "You", "youelo", "emoarea1"], "text-shadow: 0 0 0px yellow");

    }if(oppodata.v == 2){
        SetStyle(["oppocore", "label7", "oppoelo", "emoarea2"], "text-shadow: 0 0 5px yellow");
    }else{
        SetStyle(["oppocore", "label7", "oppoelo", "emoarea2"], "text-shadow: 0 0 0px yellow");
    }if(pvpdata.cr == pvpdata.r && oppodata.cr < oppodata.r){
        hideE(["pvpcont"]);
        state += "Please wait for the opponent to finish. ";
        statc += "请等待对手完成游戏。 ";
        stats += "";
    }else if(pvpdata.cr < oppodata.cr){
        state += "Your opponent is waiting for you. Please, be fast. ";
        statc += "你的对手在等你。快点玩吧！ ";
        stats += "";
    }if(pvpdata.cr < pvpdata.r){
        fadeIn(["pvpcont"]);
    }else{
        hideE(["pvpcont"]);
    }if(oppodata.cr == oppodata.r && pvpdata.cr == pvpdata.r && !locallastgame){
        ontr = mend = true;
        state += "Match complete. Winner is... ";
        statc += "游戏已完成。赢家是... ";
        var youelo, youelodel, oppoelo, oppoelodel;
        stats += "";
        stopTimedLoop(sdfg);
        switch(pvpdata.c){
            case 0: if(pvpdata.wa > oppodata.wa){
                        win = pvpdata.p1;
                }else if(pvpdata.wa < oppodata.wa){
                    win = pvpdata.p2;
                }else{
                    win = 0;
                }break;
            case 1: if(pvpdata.la > oppodata.wa){
                win = pvpdata.p2;
            }else if(pvpdata.la < oppodata.la){
                win = pvpdata.p1;
            }else{
                win = 0;
            }break;
            case 2: var pr, or;
            pr = Math.round(pvpdata.wa*100/pvpdata.la);
            or = Math.round(oppodata.wa*100/oppodata.la);
            if(pr > or){
                win = pvpdata.p1;
            }else if(pr < or){
                win = pvpdata.p2;
            }else{
                win = 0;
            }break;
            case 3: if(pvpdata.st > oppodata.st){
                win = pvpdata.p1;
            }else if(pvpdata.st < oppodata.st){
                win = pvpdata.p2;
            }else{
                win = 0;
            }break;
        }if(win == 0){
            state += "Draw! ";
            statc += "平手！ ";
            stats += "";
            youelo = Elo.getNewRating(eloscore, oppodata.elo, 0.5);
            youelodel = Elo.getRatingDelta(eloscore, oppodata.elo, 0.5);
            oppoelo = Elo.getNewRating(oppodata.elo, eloscore, 0.5);
            oppoelodel = Elo.getRatingDelta(oppodata.elo, eloscore, 0.5);
        }else{
            state += "Player "+win + "! ";
            statc += "玩家"+win+"!";
            stats += "";
            if(win == currentid){
                youelo = Elo.getNewRating(eloscore, oppodata.elo, 1);
                youelodel = Elo.getRatingDelta(eloscore, oppodata.elo, 1);
            }else{
                youelo = Elo.getNewRating(eloscore, oppodata.elo, 0);
                youelodel = Elo.getRatingDelta(eloscore, oppodata.elo, 0);
    }}if(pvpdata.x){
        eloscore = youelo;
        oppoelodel = -youelodel;
        oppoelo = oppodata.elo + oppoelodel;
        if(youelodel > 0){
            youelodel = "+"+youelodel;
        }if(oppoelodel > 0){
            oppoelodel = "+"+oppoelodel;
    }}else{
        youelodel = oppoelodel = "+0";
        oppoelo = oppodata.elo;
    }setText("youelo", "🔰 "+eloscore+" ("+youelodel+")");
    setText("oppoelo", "🔰 "+oppoelo+" ("+oppoelodel+")");
    if(win == currentid){
        log("zsi", 1);
        ols+=200;
        sIurl("image87", "assets/pwin.png");
        fadein("image87");
        olw++;
        state += "Nice work! ";
        statc += "好样的！";
        stats += "";
        playS(4);
    }else{
        sIurl("image87", "assets/plose.png");
        fadein("image87");
        state += "Better luck next time! ";
        statc += "下次好运！";
        stats += "";
        playS(12);
    }}setT("pvpstat", [state, statc, stats]);
    update();
}
onEvent("pvp","click",function(){
    if(!ftueflag[3]){
        doTutorial(3);
    }else{
        changePVP();
}});
function changePVP(val){
  if(task.num == -1){return}
  setText("text_area220", accountstring);
  setText("text_area222", ticketstring);
  update();
  var td = task.end - ztime / 1000;
  var time = Math.floor(td / 86400);
  setTex(["taskch","taskzh"], time+"d");
  pdata[4] = time+"d";
  var sum = getSum();
  var tiem = Math.floor(GetTime()/86400000);
  if(gft < tiem){
    pdata[11] = 1;
    sIurl("drinkb", "assets/greencrc.png");
  }else{
    pdata[11] = 0;
    sIurl("drinkb", "assets/graycrc.png");
  }var compe = (sum / taskmaster[task.num].mic * 100).toFixed(2);
  pdata[5] = compe;
  if(compe >= 100.0){
    hideElement("taskzh");
    showElement("taskch");
  }else{
    hideElement("taskch");
    showElement("taskzh");
  }var dif = (seasons.end - ztime/1000);
  setTex(["sweepch","sweepzh"], Math.floor(dif / 86400)+"d");
  pdata[2] = Math.floor(dif / 86400)+"d";
  var diff = Math.round(leaguedata.e - getTime()/1000);
  setTex(["leaguech","leaguezh"], Math.floor(diff / 86400) + "d");
  pdata[8] = Math.floor(diff / 86400) + "d";
  var inv = 0;
  if(seasons.se != undefined){
    for(var i = 0; i < seasons.se.length; i++){
        if(seasons.se[i] == currentid){
            inv = seasons.in[i];
            break;
  }}}if(inv == 499){
    hideElement("sweepzh");
    showElement("sweepch");
  }else{
    hideElement("sweepch");
    showElement("sweepzh");   
  }if(!leaguemax){
    hideElement("leaguech");
    showElement("leaguezh");
  }else{
    hideElement("leaguezh");
    showElement("leaguech");
  }setText("elo","🔰 "+eloscore);
  if(!val){
    parseMission();
    changeScreen("pvps");
    playS(7);
  }else{
    parseamt();
}}
function parseamt(){
    var amt = 3;
    if(aa[3] >= missionmaster[aa[0]].mic){
        amt -= 1;
    }if(aa[4] >= missionmaster[aa[1]].mic){
        amt -= 1;
    }if(aa[5] >= missionmaster[aa[2]].mic){
        amt -= 1;
    }pdata[10] = amt;
    if(amt == 0){
        setText("msl", "☑️");
    }else if(amt == 1){
        setText("msl", "1️⃣");
    }else if(amt == 2){
        setText("msl", "2️⃣");
    }else{
        setText("msl", "3️⃣");
}}
onEvent("n","click",function(){changePVP()});
onEvent("text_area214","click",function(){olreject(["PVP Arena is Lucky Strike's 1v1 PVP mode, where you can challenge another player in classic gameplay.\n\nWhen hosting, room will expire 2 minutes after creation. When playing, prolonged inactivity will result in disqualification.\n\nELO ranking score (🔰) can be calculated and ranked in leaderboards. Max wager in PVP arena is 10000 Credits regardless of 👑 status.", "PVP竞技场是幸运一击的1V1 PVP模式。\n\n你可以在这里通过经典游玩来挑战其他玩家。\n\n创建的房间会在两分钟后失效，游玩时长时间无操作会被淘汰和惩罚。\n\nELO分数（🔰）可以被计算和排名。PVP竞技场的最高赌注为10000点数（即使有会员👑订阅）。", ""])});
onEvent("text_area218","click",function(){enter("pvps")});
onEvent("image83","click",function(){enter("pvps")});
function getOL(val){
    olp = [];
    for(var i = 0; i < val.length; i++){
        var olpe = {};                      olpe.ji = val[i].ji;                        olpe.id = val[i].id;
        olpe.vip = val[i].vit;              olpe.t = val[i].lo;
        olp.push(olpe);
    }doOLT();
}
onRecordEvent("progress", function(val){
    var match = false;
    for(var i = 0; i < olp.length; i++){
        if(olp[i].id == val.id){
            match = true;
            olp[i].t = val.lo;
            break;
    }}if(match == false){
        var olplr = {};                     olplr.id = val.id;                          olplr.ji = val.ji;
        olplr.t = val.lo;                   olplr.vip = val.vit;
        olp.push(olplr);
    }setTimeout(function(){doOLT()}, 300000);
    doOLT();
});
function doOLT(){
    var tie = Math.round(getTime()/1000)- 300;
    var stre, strc, strs;
    stre = strc = strs = "";
    var counter = 0;
    for(var j = olp.length-1; j > -1; j--){
        if(olp[j].t < tie){
            olp.splice(j, 1);
    }}for(var i = 0; i < olp.length; i++){
            var end = "\n";
            if(olp[i].vip>ztime){
                end = " 👑\n";
            }stre += olp[i].ji+" Player "+olp[i].id+end;
            strc += olp[i].ji+" 玩家"+olp[i].id+end;
            strs += olp[i].ji+" "+olp[i].id+end;
            counter++;
    }setT("olpl", [stre,strc,strs]);
    pdata[0] = counter;
}
onEvent("chatbutton","click",function(){
    if(authTime()){
        return;
    }var a = oleCheck(0);
    if(a){
        chatTime = getTime();
        parseMessage();
        changeScreen("chat");
        hideE(["guest", "login"]);
        update();
}});
onEvent("newm","click",function(){
    if(authTime()){
        return;
    }var a = oleCheck(0);
    if(a){
        chatTime = getTime();
        parseMessage();
        changeScreen("chat");
        hideE(["guest", "login"]);
        update();
}});
onEvent("blacklist","click",function(){
    var a = oleCheck(0);
    if(a){
        playS(13);
        fadeIn(["blkb","text_area213","text_area205","text_area211","text_input3","button308","text_area216","text_area219"]);
        setT("text_area205",["Block Player","屏蔽玩家",""]);
        setblock();
        setT("text_area211",["Here, you can prevent any player's message from showing up in Chat.","你可以在这里阻止任何玩家的消息。",""]);
}});
onEvent("blkb","click",function(){
    hideE(["blkb"]);
    playS(13);
    fadeOut(["text_area213","text_area205","text_area211","button308","text_input3","text_area219","text_area216"]);
});
function updglobl(){
    getKeyValue("block", function(val){
        globalblocked = val;
        setTimeout(function(){updglobl()}, 60000);
})}
onEvent("button308","click",function(){
    var a = parseInt(getText("text_input3"));
    if(isNaN(a)){
        setT("text_area211",["Please enter a number.","请输入一个数字。",""]);
        return;
    }if(a < 1 || a > 20000){
        setT("text_area211",["Player number must be between 1 and 20000.","玩家代码必须在0和20000之内。",""]);
        return;
    }if(a == currentid){
        setT("text_area211",["Why would you want to block yourself?","为什么要屏蔽自己呢？",""]);
        return;
    }var index = -1;
        for(var i = 0; i < blocked.length; i++){
            if(blocked[i] == a){
                index = i;
    }}if(index != -1){
        blocked.splice(index, 1);
    }else{
        blocked.splice(index, 0, a);
    }setT("text_area211",["Updating profile...","正在更新信息...",""]);
    updateProfile(4);
    setblock();
    setText("text_input3", "");
});
function setblock(){
    var text = "";
    for(var i = 0; i < blocked.length; i++){
        if(i == blocked.length-1){
            text += blocked[i] + ".";
        }else{
            text += blocked[i] + ", ";
    }}if(text == ""){
        switch(lang){
            case 0: text ="No one blocked yet. Hooray!"; break;
            case 1: text = "空空如也。太好了！";break;
            case 2: break;
    }}setText("text_area219",text);
}
onEvent("button298","click",function(){sanitizeMessage()});
function sanitizeMessage(){
    var text = JSON.stringify(getText("text_area215"));
    text = text.substring(1, text.length-1);
    text = text.split('\\n').join(' ');
    text = text.split('\\"').join("'");
    if(text[0] == " "){
        text = text.substring(1, text.length);
    }if(text.trim().length < 3 || text.length > 256){
        setT("text_area217",["Text too short/too long. Can be between 2 - 256 characters.","文字过短/过长。仅限2-256字符。",""]);
        hideElement("button298");
        fadein("text_area217");
        setTimeout(function(){fadeout("text_area217");fadein("button298");},1000);
        return;
    }if(text.toUpperCase().includes(userID.toUpperCase())){
        setT("text_area217",["Please do not share your User ID.","请不要分享你的用户ID。",""]);
        hideElement("button298");
        fadein("text_area217");
        setTimeout(function(){fadeout("text_area217");fadein("button298");},1000);
        return;
    }if(text == "!coin"){
        var rand = RandomNumber(0, 1);
        if(rand == 0){
            createMessage("Player "+currentid+" flipped a 🟡 - it's a tail!", false);
        }else{
            createMessage("Player "+currentid+" flipped a 🟡 - it's a head!", false);
        }return;
    }else if(text == "!dice"){
        var rand = RandomNumber(0, 5);
        if(rand == 0){
            createMessage("Player "+currentid+" rolled a 🎲 - it's a one!", false);
        }else if(rand == 1){
            createMessage("Player "+currentid+" rolled a 🎲 - it's a two!", false);
        }else if(rand == 2){
            createMessage("Player "+currentid+" rolled a 🎲 - it's a three!", false);
        }else if(rand == 3){
            createMessage("Player "+currentid+" rolled a 🎲 - it's a four!", false);
        }else if(rand == 4){
            createMessage("Player "+currentid+" rolled a 🎲 - it's a five!", false);
        }else{
            createMessage("Player "+currentid+" rolled a 🎲 - it's a six!", false);
        }return;
    }hideE(["button298"]);
    createMessage(text, true);
}
function createMessage(text, val){
    var msg = {};
    setText("text_area215", "");
    if(val){
        msg.us = currentid;
        msg.ji = emoji;
    }else{
        msg.us = 0;
        msg.ji = "🚧";
    }msg.ms = text;
    msg.ts = GetTime();
    msg.tz = timeZone;
    log("zts", 1);
    ols+=1;
    createRecord("chat", msg, function(){
        setText("text_area215","");
        setTimeout(function(){fadein("button298")},1000);
});}
onEvent("button296","click",function(){
    tick = pdata[1] = 0;
    hideE(["newm"]);
    update();
    ticketgameback(0);
});
function parseMInfo(val){
    tick = 0;
    readRecords("chat", {}, function(val){
        if(val[val.length-1].id > 19999){
            doFullRecord("chat");
        }msgk = [];
        var te = {};
        for(var i = val.length-1; i >-1; i--){
            te = {};                        te.usr = val[i].us;                     te.t = val[i].ts;
            te.ms = val[i].ms;              te.ji = val[i].ji;                      te.tz = val[i].tz;
            msgk.push(te);
            if(!val){
                if(val[i].ts > chatTime){
                    tick++;
                }if(tick > 0){
                    showElement("newm");
                    if(tick > 99){
                        tick = 99;
                }}else{
                    hideElement("newm");
                }globtick = tick;
                pdata[1] = tick;
                setText("newm", tick);
        }}if(val){
            parseMessage();
}});}
onRecordEvent("chat", function(val){
    if(val.id > msgk[0].id){
        if(currentid != -1 && userID != "Guest"){
            var te = {};                        te.usr = val.us;                       te.t = val.ts;
            te.ms = val.ms;                     te.ji = val.ji;                        te.tz = val.tz;
            msgk.unshift(te);
            globtick++;
            parseMessage();
        if(currentScreen == "pvps" || currentScreen == "chat"){
            playS(14);
        }if(currentScreen != "chat"){
            showElement("newm");
            tick++;
            setText("newm", tick);
            pdata[1] = tick;
    }}}else{
        parseMInfo(true);
}});
function parseMessage(){
    var text = "Older chats are archived and hidden.\n";
    var char = "";
    var gap, lastuser, lasttime;
    var endt = 200;
    if(msgk.length < 200){
        endt = msgk.length;
    }for(var i = endt; i > -1; i--){
        if(blocked.indexOf(msgk[i].usr)!==-1){
            text += "\n1 blocked message from Player "+msgk[i].usr+".\n";
        }else if(globalblocked.indexOf(msgk[i].usr)!==-1 && msgk[i].usr != currentid){
        }else{
            if(msgk[i].usr == undefined){
                parseMInfo();
                setT("chattext", ["Please refresh by leaving and entering this page.","请通过退出和重新进入此界面刷新。",""]);
                return;
            }if(msgk.length - i == globtick){
                text += "\n---   New Message   ---\n";
                lastuser = lasttime = 0;
            }if(msgk[i].usr != lastuser || lasttime < (msgk[i].t - 120000)){
                lastuser = msgk[i].usr;
                lasttime = msgk[i].t;
                if(!msgk[i].usr){
                    char = "Bot ";
                }else{
                    char = "Player ";
                }var gap = getGap(msgk[i].usr.toString());
                text += "\n"+msgk[i].ji+" " + char + msgk[i].usr + gap +  "("+msgk[i].tz + ")  " + formatTime(msgk[i].t) + "\n"+msgk[i].ms+"\n"; 
            }else{
                text += msgk[i].ms+"\n";
    }}}setText("chattext", text);
    setAttribute("chattext", "scrollTop", getAttribute("chattext", "scrollHeight"));
    setTimeout(function(){setAttribute("chattext", "scrollTop", getAttribute("chattext", "scrollHeight"));}, 150);
}
function formatTime(time){
    var d = new Date();
    var e = new Date(time);
    var dow = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var mo = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var k = e.getMinutes();
    if(k < 10){
        k = "0";
    }else{
        k = "";
    }if(d.getTime()-time >= -9990000 && d.getTime()-time <= 119000){
      return "now";
    }else if(d.getTime()-time <= 3600000){
        return Math.floor((d.getTime()-time)/60000) + " mins";
    }else if(d.getTime()-time <= 82800000){
      if(Math.floor((d.getTime()-time)/3600000) == 1){
        return Math.floor((d.getTime()-time)/3600000) + " hr "+Math.floor((d.getTime()-time)/60000)%60 + " mins";
      }else{
        return Math.floor((d.getTime()-time)/3600000) + " hrs "+Math.floor((d.getTime()-time)/60000)%60 + " mins";
    }}else if(d.getMonth() + "" + d.getDate() + d.getFullYear() == e.getMonth() + "" + e.getDate() + e.getFullYear()){
      if(e.getHours() == 0){
        return "12:" +k+ e.getMinutes() + " AM";
    }else if(e.getHours() == 12){
        return "12:" +k+ e.getMinutes() + " PM";
    }else if(e.getHours() > 12){
        return (e.getHours()-12) + ":"+k+ e.getMinutes() + " PM";
    }else{
        return e.getHours() + ":" +k+ e.getMinutes() + " AM";
    }}else if(d.getTime()-time <= 604800000){
      if(e.getHours() == 0){
        return dow[e.getDay()] + ", 12:"+k+ e.getMinutes() + " AM";
    }else if(e.getHours() == 12){
        return dow[e.getDay()] + ", 12:"+k+ e.getMinutes() + " PM";
    }else if(e.getHours() > 12){
        return dow[e.getDay()] + ", " + (e.getHours()-12) + ":"+k+ e.getMinutes() + " PM";
    }else{
        return dow[e.getDay()] + ", " + e.getHours() + ":"+k+ e.getMinutes() + " AM";
    }}else if(d.getFullYear() == e.getFullYear()){
      if(e.getHours() == 0){
        return mo[e.getMonth()] + " " + e.getDate() + ", 12:"+k+ e.getMinutes() + " AM";
    }else if(e.getHours() == 12){
        return mo[e.getMonth()] + " " + e.getDate() + ", 12:"+k+ e.getMinutes() + " PM";
    }else if(e.getHours() > 12){
        return mo[e.getMonth()] + " " + e.getDate() + ", " + (e.getHours()-12) + ":"+k + e.getMinutes() + " PM";
    }else{
        return mo[e.getMonth()] + " " + e.getDate() + ", " + e.getHours() + ":" +k+ e.getMinutes() + " AM";
    }}else{
        return parseInt(e.getMonth() + 1, 10) + "/" + e.getDate() + "/" + e.getFullYear();
}}
onEvent("button301","click",function(){enterDM()});
onEvent("msl","click",function(){enterDM()});
function authTime(){
    if(ztime == -1){
        gTime();
        olreject(["Unable to get server time. Check your connection, and try again.", "无法获取服务器时间。检查你的连接并重试。", ""]);
        return true;
    }return false;
}
function enterDM(){
    if(authTime()){
        return;
    }var a = oleCheck(0);
    if(a){
        parseMission();
        setT("text_area205", ["Daily Mission","每日任务",""]);
        fadeIn(["text_area213","text_area211","text_area205","miss1","miss2","miss3","label5","label11","label6","label12","label13","label14","label15","label16","label17","button300"]);    
}}
onEvent("button300","click",function(){
    playS(13);
    hideE(["skip1","skip2","skip3","button300","image82","image84","image85","don1","don2","don3"]);
    setT("skip1",["Change 3🎟️","更换 3🎟️",""]);
    setT("skip2",["Change 3🎟️","更换 3🎟️",""]);
    setT("skip3",["Change 3🎟️","更换 3🎟️",""]);
    fadeOut(["text_area213","text_area211","text_area205","miss1","miss2","miss3","label5","label11","label6","label12","label13","label14","label15","label16","label17"]);
});
onEvent("skip1","click",function(){
    var text = getText("skip1");
    if (text == "更换 3🎟️" || text == "Change 3🎟️" || text == ""){
        playS(14);
        setT("skip1",["Confirm?","确认？",""]);
    }else if (text == "确认？" || text == "Confirm?" || text == ""){
        skipM(0, true);
        setT("skip1",["Change 3🎟️","更换 3🎟️",""]);
}});
onEvent("skip2","click",function(){
    var text = getText("skip2");
    if (text == "更换 3🎟️" || text == "Change 3🎟️" || text == ""){
        playS(14);
        setT("skip2",["Confirm?","确认？",""]);
    }else if (text == "确认？" || text == "Confirm?" || text == ""){
        skipM(1, true);
        setT("skip2",["Change 3🎟️","更换 3🎟️",""]);
}});
onEvent("skip3","click",function(){
    var text = getText("skip3");
    if (text == "更换 3🎟️" || text == "Change 3🎟️" || text == ""){
        playS(14);
        setT("skip3",["Confirm?","确认？",""]);
    }else if (text == "确认？" || text == "Confirm?" || text == ""){
        skipM(2, true);
        setT("skip3",["Change 3🎟️","更换 3🎟️",""]);
}});
function parseMission(){
    var tiem = Math.floor(GetTime()/86400000);
    if(dayed < tiem){
        dayed = tiem;
        pdata[10] = 3;
        var awa = 0;
        if(aa[3] >= missionmaster[aa[0]].mic){
            awa += 3;
            skipM(0, false);
            dmeee++;
            ols+=10;
        }if(aa[4] >= missionmaster[aa[1]].mic){
            awa += 3;
            skipM(1, false);
            dmeee++;
            ols+=10;
        }if(aa[5] >= missionmaster[aa[2]].mic){
            awa += 3;
            skipM(2, false);
            dmeee++;
            ols+=10;
        }if(awa > 0){
            changeTicket(awa);
            log("za",awa);
            dmz += awa/3;
            log("dmz", awa/3);
            if(dmz > dms){
                dms = dmz;
                checkach();
            }olreject(["You received "+awa+" 🎟️ for yesterday's completed daily missions. Keep going!\n\nCurrent streak: "+dmz,"通过昨天完成的每日任务，你获得了"+awa+"🎟️。再接再厉！\n\n当前连胜："+dmz,""]);
        }else{
            dmz = 0;
            olreject(["You did not complete any mission yesterday. Complete daily mission to earn 🎟️!\n\nCurrent streak: 0","你没有完成昨天的每日任务。完成每日任务来获得🎟️！\n\n当前连胜：0",""]);
        }setText("msl", "3️⃣");
        update();
    }else{
        var sec = 86400 - Math.round((getTime() % 86400000)/1000);
        var hour = Math.floor(sec/3600);
        var min = Math.round((sec % 3600) / 60);
        setT("text_area211",["Completed missions are refreshed daily. Rewards are claimable in "+hour+" H "+min+" M.","完成的任务每天都会更新。完成奖励将在"+hour+"小时"+min+"分钟后派发。",""]);
        parseamt();
        if(currentScreen == "pvps"){
            if(aa[3] < missionmaster[aa[0]].mic){
                showE(["skip1", "don1"]);
                hideElement("image82");
              }else{
                hideE(["skip1", "don1"]);
                showElement("image82");
              }if(aa[4] < missionmaster[aa[1]].mic){
                showE(["skip2", "don2"]);
                hideElement("image84");
              }else{
                hideE(["skip2", "don2"]);
                showElement("image84");
              }if(aa[5] < missionmaster[aa[2]].mic){
                showE(["skip3", "don3"]);
                hideElement("image85");
              }else{
                hideE(["skip3", "don3"]);
                showElement("image85");
    }}}setT("miss1",[missionmaster[aa[0]].mit[0], missionmaster[aa[0]].mit[1], missionmaster[aa[0]].mit[2]]);
    setT("miss2",[missionmaster[aa[1]].mit[0], missionmaster[aa[1]].mit[1], missionmaster[aa[1]].mit[2]]);
    setT("miss3",[missionmaster[aa[2]].mit[0], missionmaster[aa[2]].mit[1], missionmaster[aa[2]].mit[2]]);
    var wo = aa[3]/missionmaster[aa[0]].mic;
    if(wo > 1){
      wo = 1;
    }else if(wo < 0.05){
        wo = 0.05;
    }var wt = aa[4]/missionmaster[aa[1]].mic;
    if(wt > 1){
      wt = 1;
    }else if(wt < 0.05){
        wt = 0.05;
    }var wr = aa[5]/missionmaster[aa[2]].mic;
    if(wr > 1){
      wr = 1;
    }else if(wr < 0.05){
        wr = 0.05;
    }setProperty("label5", "width", wo*220);
    setProperty("label12", "width", wt*220);
    setProperty("label15", "width", wr*220);
    setText("label6", aa[3]);
    setText("label14", aa[4]);
    setText("label17", aa[5]);
  }
function generateRMf(val, val2){
  var rand = aa[val];
  while(rand == aa[0] || rand == aa[1] || rand == aa[2]){
      rand = RandomNumber(0, 49);
  }aa[val] = rand;
  aa[val+3] = 0;
  if(val2){
    parseMission();
}}
function skipM(val, val2){
  if(ticket < 2){
    setT("text_area211",["Not even 3 🎟️? Dang, go watch an ad or two!","靠，三张🎟️都掏不出来？去看一两个广告吧！",""]);
    playS(12);
    return;
  }changeTicket(-3);
  log("zb", 3);
  playS(14);
  generateRMf(val, val2);
  setText("text_area222", ticketstring);
  update();
}
function missionMatch(val){
    var result = [];
    for(var i = 0; i < missionmaster.length; i++){
        if(missionmaster[i].hit.indexOf(val) >= 0){
            if(aa[0] == missionmaster[i].tid){
                result.push({a:3,b:missionmaster[i].mic});
            }if(aa[1] == missionmaster[i].tid){
                result.push({a:4,b:missionmaster[i].mic});
            }if(aa[2] == missionmaster[i].tid){
                result.push({a:5,b:missionmaster[i].mic});
    }}}return result;
}
onEvent("chat", "keydown", function(event){
  if(event.key == "Enter"){
    sanitizeMessage();
}});
function ticketgameback(val){
    playS(5);
    setTex(["text_area220","text_area41"], accountstring);
    setTex(["text_area222","text_area138"], ticketstring);
    if(val == 0){
        setText("elo","🔰 "+eloscore);
        changePVP();
    }else{
        finishTime();
        changeScreen("store");
}}
onEvent("wyw0","click",function(){playty(1, 1)});
onEvent("wyw1","click",function(){playty(9, 10)});
onEvent("wyw2","click",function(){playty(30, 35)});
onEvent("wheelyb","click",function(){ticketgameback(1)});
onEvent("wheelxb","click",function(){ticketgameback(1)});
onEvent("wheelzb","click",function(){ticketgameback(1)});
onEvent("wzw1","click",function(){playtz(1, 1)});
onEvent("wzw2","click",function(){playtz(9, 10)});
onEvent("wzw3","click",function(){playtz(30, 35)});
onEvent("wxwo","click",function(){playtx(1, 1)});
onEvent("wxwt","click",function(){playtx(9, 10)});
onEvent("wxwh","click",function(){playtx(30, 35)});
onEvent("card","click",function(){
  setText("wxttm", accountstring);
  setText("wxtim", ticketstring);
  setT("wxt", ["Choose 5 numbers and press Wager!", "选择5个数字，然后点投注！", ""]);
  playS(1);
  startTime();
  changeScreen("wheelx");
});
onEvent("laptop","click",function(){
  setText("wzta", accountstring);
  setText("wzca", ticketstring);
  setT("wxz", ["This is The Mainframe.\nTry RNG at its core!", "这是系统中心。挑战最核心的RNG！", ""]);
  playS(1);
  startTime();
  changeScreen("wheelz");
});
onEvent("lasttik","click",function(){
  setText("wyca", accountstring);
  setText("wyta", ticketstring);
  setT("wyt1", ["Buy and scratch!", "买来刮刮看吧！", ""]);
  playS(1);
  startTime();
  changeScreen("wheely");
});
onEvent("zz0","click",function(){selectwx(0)});
onEvent("zz1","click",function(){selectwx(1)});
onEvent("zz2","click",function(){selectwx(2)});
onEvent("zz3","click",function(){selectwx(3)});
onEvent("zz4","click",function(){selectwx(4)});
onEvent("zz5","click",function(){selectwx(5)});
onEvent("zz6","click",function(){selectwx(6)});
onEvent("zz7","click",function(){selectwx(7)});
onEvent("zz8","click",function(){selectwx(8)});
onEvent("zz9","click",function(){selectwx(9)});
function selectwx(val){
  if(canwxsel){
    if(wxselected[val] == 0){
      playS(13);
      wxselected[val] = 1;
      setStyle("zz" + val, "background: #FF0000");
      wxselect++;
    }else{
      playS(13);
      wxselected[val] = 0;
      setStyle("zz" + val, "background: #00FF00");
      wxselect--;
}if(wxselect == 5){
      playS(8);
      fadeIn(["wxwo","wxwt","wxwh"]);
  }else{
      hideE(["wxwo","wxwt","wxwh"]);
}}}
function processloc(cfd, price){
    var loc = missionMatch(cfd);
    if(loc != []){
        for(var h = 0; h < loc.length; h++){
            var old = aa[loc[h].a];
            aa[loc[h].a] += price;
            if((old < loc[h].b) && (aa[loc[h].a] > loc[h].b)){
                dodynamic(["A Daily Mission is done!","一个每日任务已完成！",""]);
}}}}
function playtx(price, times){
  if(ticket < price){
    insT("wxt");
    return;
  }canwxsel = false;
  var i = 0;
  var score  = 0;
  var theirpick = "";
  changeTicket(-price);
  processloc("zls", price);
  pst++;
  log("zb", price);
  fadeIn(["wxbd","wxt"]);
  kz = 0;
  update();
  kz = timedLoop(300, function(){
    playS(10);
    i++;
    if(i != 6){
      if(i == 4){
            log("wxa", price);
      }var integer = RandomNumber(0, 9);
      while (theirpick.includes(integer)){
        integer = RandomNumber(1, 10);
      }wxchosen[i-1] = integer;
      theirpick += integer + "  ";
      if(wxselected[integer] == 0){
        setStyle("zz" + integer, "background: #0000FF");
    }else{
        score++;
        setStyle("zz" + integer, "background: #FFFF00");
    }}else{
      var tems = "";
      if(score == 0 || score == 5){
        i = 88880;
        subBoard(14, i*times);
        playS(4);
        wxc++;
        nto+=12;
        switch(lang){
            case 0: tems = "Jackpot!";break;
            case 1: tems = "头奖！";break;
            case 2: break;
        }setTimeout(function(){log("wxc", 1)},1000);
      }else if(score == 1 || score == 4){
        i = 8880;
        playS(3);
      }else{
        i = 80;
        playS(8);
      }fadeIn(["wxcont"]);
      var k = i * times;
      changeAccount(k);
      processloc("wxb", k);
      log("wxb", k);
    setTimeout(function(){log("zyb", 1)}, 1000);
      update();
      setT("wxt",[score+" matched, you win "+ localstr(i) + " x " + times + " = "+ localstr(k) + "!\n"+tems,score+"个重合，你赢得了"+localstr(i)+" x "+ times+" = " +localstr(k)+ "！\n"+tems,""]);
      stopTimedLoop(kz);
}});}
onEvent("wxcont","click",function(){
  hideE(["wxcont"]);
  setText("wxttm", accountstring);
  setText("wxtim",ticket);
  fadeout("wxbd");
  canwxsel = true;
  for(var i = 0; i < 10; i++){
    if(wxselected[i] == 1){
      setStyle("zz" + i, "background: #FF0000");
    }else{
      setStyle("zz" + i, "background: #00FF00");
}}});
function playty(price, times){
  if(ticket < price){
    insT("wyt1");
    return;
  }fadein("wycz");
  setT("wyt1", ["Select 3 more!", "再选3个！", ""]);
  changeTicket(-price);
  pst++;
  processloc("ya", price);
  log("zb", price);
  log("zls", price);
  wytimes = times;
  wychosen = wysum = 0;
  update();
  for(var i = wyrand.length - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var temp = wyrand[i];
    wyrand[i] = wyrand[j];
    wyrand[j] = temp;
}canwysel = true;
}
onEvent("zy0","click",function(){wychoose(0)});
onEvent("zy1","click",function(){wychoose(1)});
onEvent("zy2","click",function(){wychoose(2)});
onEvent("zy3","click",function(){wychoose(3)});
onEvent("zy4","click",function(){wychoose(4)});
onEvent("zy5","click",function(){wychoose(5)});
onEvent("zy6","click",function(){wychoose(6)});
onEvent("zy7","click",function(){wychoose(7)});
onEvent("zy8","click",function(){wychoose(8)});
onEvent("zy9","click",function(){wychoose(9)});
onEvent("wycont","click",function(){
  hideElement("wycont");
	for(var i = 0; i < 10; i++){
    setText("zy"+i, "❓");
    setStyle("zy" + i, "border-color:#4d575f");
  }wychosen = 0;
  wylist = "";
  setText("wyca", accountstring);
  setText("wyta",ticket);
  fadeout("wycz");
});
function wychoose(val){
    if(!canwysel || wycd){
        return;
    }if(wylist.includes(val)){
        return;
    }if( wychosen < 3){
    playS(13);
    wycd = true;
    setTimeout(function(){wycd = false}, 800);
    wychosen++;
    var ttts = 3 - wychosen;
    setT("wyt1", ["Select "+ttts+" more!", "再选"+ttts+"个！", ""]);
    wylist += val + ",";
    setText("zy"+val, wyrand[val]);
    if(wyrand[val] == 3000){
      setStyle("zy" + val, "border-color:#54ff00");
    }else if(wyrand[val] == 2000){
      setStyle("zy" + val, "border-color:#fc9105");
    }else if(wyrand[val] == 1500){
      setStyle("zy" + val, "border-color:#54ff00");
    }wysum += wyrand[val];
  }if(wychosen == 3){
    var summ = wysum*wytimes;
    log("zlw", summ);
    log("zya", 1);
    changeAccount(summ);
    canwysel = false;
    update();
    processloc("yb", summ);
    var tems = "";
    if(wysum == 6500){
        subBoard(15, summ);
        nto+=12;
        playS(4);
        setTimeout(function(){log("zlj", 1);},1000);
        wyc++;
        switch(lang){
            case 0: tems = "Jackpot!";break;
            case 1: tems = "头奖！";break;
            case 2: break;
    }}else{
        playS(8);
    }update();
    setT("wyt1",["You win "+localstr(wysum)+" x "+ wytimes + " = "+localstr(summ) + "!\n"+tems,"你赢得了"+localstr(wysum)+" x "+wytimes+" = "+localstr(summ)+"！\n"+tems,""]);
    fadein("wycont");
}}
function parsexrand(rand, times){
    setText("zzt2", rand);
    setText("zzt4", rand*times*10);
    playS(10);
    return RandomNumber(1, 508);
}
function playtz(price, times){
  if(ticket < price){
    insT("wxz");
    return;
  }changeTicket(price);
  processloc("za", price);
  pst++;
  log("zb", price);
  log("wya", price);
  var rand = RandomNumber(1, 508);
  fadein("wyd");
  setText("zzt3", times*10);
  setTimeout(function(){
    setText("zzt2", rand);
    setText("zzt4", rand*times*10);
    playS(10);
    rand = RandomNumber(1, 508);
    setTimeout(function(){
      rand = parsexrand(rand, times);
      setTimeout(function(){
        rand = parsexrand(rand, times);
        setTimeout(function(){
          rand = parsexrand(rand, times);
          setTimeout(function(){
            rand = parsexrand(rand, times);
            setTimeout(function(){
              rand = parsexrand(rand, times);
              setTimeout(function(){
                rand = parsexrand(rand, times);
                setTimeout(function(){
                  rand = parsexrand(rand, times);
                  setTimeout(function(){
                    setText("zzt2", rand);
                    setText("zzt4", rand*times*10);
                    playS(10);
                    var amount = rand*times*10;
                    setText("zzt4", amount);
                    if(rand == 508){
                      setTimeout(function(){log("wyc", 1);}, 1000);
                      wzc++;
                      nto+=50;
                      subBoard(16, amount);
                        playS(4);
                    }else{
                        playS(8);
                    }changeAccount(amount);
                    processloc("zb", amount);
                    log("wyb", amount);
                    log("zyc", 1);
                    update();
                    fadeout("wyd");
                    setText("wzta", accountstring);
                    setText("wzca",ticket);
                    setT("wxz",["RNG god has decided. You got "+localstr(amount)+". Maybe you're lucky?","RNG决定了。你获得了"+localstr(amount)+"。也许...你很幸运？",""]);
}, 200);}, 250);}, 300);}, 350);}, 400);}, 450);}, 500);}, 550);}, 600);}
onEvent("cmd","click",function(){
    olreject(["All chat commands:\n\n!dice: Roll a dice. \n!coin: Flip a coin.\n", "所有聊天命令：\n\n!dice: 掷个骰子。\n!coin: 投个硬币。\n", ""]);
    return; 
});
onEvent("taskch","click",function(){enterLTS()});
onEvent("sweepch","click",function(){enterSweep()});
onEvent("lottoch","click",function(){enterLotto()});
onEvent("taskzh","click",function(){enterLTS()});
onEvent("sweepzh","click",function(){enterSweep()});
onEvent("lottozh","click",function(){enterLotto()});
function checkI(){
  getKeyValue("ver", function(value){
  testP = value;
});var token = false;
  var holder = timedLoop(3000,function(){
if(testP !== 0 ||token){
  token = false;
  tiFa = true;
  stopTimedLoop(holder);
}});
var place = timedLoop(1000,function(){
if(testP == 0){
  token = false;
  errC++;
  getKeyValue("ver", function(value){
    testP = value;
});if(errC > 4){
  setScreen("srsr");
  setT("text_area204", ["Connection to server "+errC+" seconds ago failed. Please check your connection and wait for the program to retry.\n\nSorry for the inconvenience.",errC+"秒前和服务器的连接失败。请检查你的连接并等待程序重试。\n\n带来的不便敬请谅解。",""]);}
}else{
  token = true;
  stopTimedLoop(place);
  errC = testP = 0;
  if(!istut){
    setScreen(currentScreen);
}}})}
var Elo = {minRating: 0,
    maxRating: 2999,
    getRatingDelta: function (myRating, opponentRating, myGameResult){
      var myChanceToWin = 1 / ( 1 + Math.pow(10, (opponentRating - myRating) / 400));
      return Math.round(32 * (myGameResult - myChanceToWin));
    },getNewRating: function (myRating, opponentRating, myGameResult){
      var newRating = myRating + this.getRatingDelta(myRating, opponentRating, myGameResult);
      if(newRating < this.minRating){
        newRating = this.minRating;
      }else if(newRating > this.maxRating){
        newRating = this.maxRating;
      }return newRating;
}};
onEvent("leagueB1","click",function(){enterLeague()});
onEvent("leagueB2","click",function(){enterLeague()});
onEvent("leagueB3","click",function(){enterLeague()});
onEvent("leaguech","click",function(){enterLeague()});
onEvent("leaguezh","click",function(){enterLeague()});
onEvent("LBack","click",function(){ticketgameback(0)});
function enterLeague(){
    if(authTime()){
        return;
    }var a = oleCheck(1);
    if(a){
        setT("LSText", ["Season "+leaguedata.id,"赛季"+leaguedata.id,""]);
        setT("LText2", [leaguetasks[leaguedata.t].str[0], leaguetasks[leaguedata.t].str[1], leaguetasks[leaguedata.t].str[2]]);
        changeScreen("league");
}}
function processLeagueWin(time){
    hideE(["guest", "login"]);
    showE(loadingicon);
    var entry = [];
    var promoted = [];
    validateJSON(leaguedata.pid, "league sender reset");
    validateJSON(leaguedata.amt, "league sender reset");
    validateJSON(leaguedata.rk, "league rank reset");
    var player = JSON.parse(leaguedata.pid);
    var quantity = JSON.parse(leaguedata.amt);
    var rank = JSON.parse(leaguedata.rk);
    for(var i = 0; i < player.length; i++){
        var temp = {};
        temp.p = player[i];
        temp.q = quantity[i];
        temp.r = rank[i];
        entry.push(temp);
    }entry.sort(function(a, b){
        return b.q - a.q;
    });for(var j = 0; j < entry.length; j++){
        var dds = {};
        dds.CID = dds.log = dds.re = "";
        dds.ca = "le";
        dds.hi = 1;
        dds.UID = entry[j].p;
        var rank = Math.round((1-(j/entry.length))*100)/100;
        var degrade = promotiontable[entry[j].r][0];
        var stay = promotiontable[entry[j].r][1];
        var rrank = (entry.length - j)/entry.length;
        if(rrank < degrade){
            dds.me = leaguedata.id + "$0#"+rank;
        }else if(rrank < stay){
            dds.me = leaguedata.id + "$1#"+rank;
        }else{
            dds.me = leaguedata.id + "$2#"+rank;
            promoted.push(entry[j].p);
        }createRecord("\x66\x65\x65\x64\x62\x61\x63\x6B", dds, function(){});
    }leaguedata.amt = "";
    leaguedata.pid = JSON.stringify(promoted);
    leaguedata.emo = leaguedata.vit = leaguedata.rk = "";
    updateRecord("league", leaguedata, function(val){
        var newRecord = {};
        newRecord.amt = newRecord.pid = newRecord.emo = newRecord.vit = newRecord.rk = "[]";
        newRecord.t = RandomNumber(0, 12);
        newRecord.e = time + 604800;
        createRecord("league", newRecord, function(val){leaguedata = val;
        fadeIn(["guest", "login"]);
        fadeOut(loadingicon);        
});});}
function processLeagueLB(val){
    var fond = -1;
    var above = 0;
    hideElement("LRefresh");
    sIurl("leagueB3", "assets/lr"+leaguerank+".png");
    sIurl("LMImg", "assets/lr"+leaguerank+".png");
    setT("LSText", ["Season "+leaguedata.id,"赛季"+leaguedata.id,""]);
    setT("LText2", [leaguetasks[leaguedata.t].str[0], leaguetasks[leaguedata.t].str[1], leaguetasks[leaguedata.t].str[2]]);
    validateJSON(leaguedata.pid, "league sender display");
    validateJSON(leaguedata.amt, "league invest display");
    validateJSON(leaguedata.vit, "league viptime display");
    var player = JSON.parse(leaguedata.pid);
    var quantity = JSON.parse(leaguedata.amt);
    var leaguevt = JSON.parse(leaguedata.vit);
    setText("LText3", 0);
    setText("LText4", "0 🎟️");
    for(var i = 0; i < player.length; i++){
        if(player[i] === currentid){
            setText("LText3", quantity[i]);
            fond = quantity[i];
            break;
    }}var dif = Math.round(leaguedata.e - getTime()/1000);
    var timestring = Math.floor(dif / 86400) + " D " + Math.floor(dif / 3600) % 24 + " H " + Math.floor((dif / 60) % 60) + " M";
    setT("LText5", ["Max reward "+rewardtable[leaguerank][9]+" 🎟️!\nEnds in "+timestring, "最大奖励 "+rewardtable[leaguerank][9]+" 🎟️!\n还有 "+timestring]);
    if(fond != -1){
        for(var i = 0; i < player.length; i++){
            if(quantity[i] > fond){
                above++;
        }}above = 1 - (above / player.length);
        if(above >= promotiontable[leaguerank][1] && !(leaguerank == 9)){
            pdata[9] = 2;
            sIurl("leagueB1", "assets/mug.png");
            setStyle("leagueB2", "color:#ffffff");
            setStyle("LL4", "border-color:#33fd3c");
        }else if(above >= promotiontable[leaguerank][0]){
            pdata[9] = 1;
            sIurl("leagueB1", "assets/mub.png");
            setStyle("leagueB2", "color:#ffffff");
            setStyle("LL4", "border-color:#1e90ff");
        }else{
            pdata[9] = 0;
            sIurl("leagueB1", "assets/mur.png");
            setStyle("leagueB2", "color:#111111");
            setStyle("LL4", "border-color:#ff1e61");
        }var llol = 270 * promotiontable[leaguerank][0];
        var lltl = 270 * (promotiontable[leaguerank][1] - promotiontable[leaguerank][0]);
        var llrl = 270 - llol - lltl;
        setProperty("LL1", "width", llol);
        setProperty("LL1", "x", 25);
        setProperty("LL2", "width", lltl);
        setProperty("LL2", "x", 25 + llol);
        setProperty("LL3", "width", llrl);
        setProperty("LL3", "x", 25 + llol + lltl);
        showE(["LL1", "LL2", "LL3"]);
        if(leaguerank == 0){
            hideElement("LL1");
            setProperty("LL2", "x", 25);
            setProperty("LL3", "x", 25 + lltl);
        }else if(leaguerank == 9){
            hideElement("LL3");
        }var grade = 0;
        var checkup = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
        for(var k = 0; k < checkup.length; k++){
            if(above > checkup[k]){
                grade = k;
            }else{
                break;
        }}above = Math.round(25 + 245 * above);
        setPosition("LL4", above, 80, 35, 35);
        setText("LText4", rewardtable[leaguerank][grade]+ " 🎟️");
        if(rewardtable[leaguerank][9] == rewardtable[leaguerank][grade]){
            leaguemax = true;
        }else{
            leaguemax = false;
        }}else{
        sIurl("leagueB1", "assets/mur.png");
        setStyle("leagueB2", "color:#111111");
        setStyle("LL4", "border-color:#ff1e61");
        setPosition("LL4", 25, 80, 35, 35);
    }var entry = [];
    validateJSON(leaguedata.emo, "league avatar display");
    var emi = JSON.parse(leaguedata.emo);
    for(var i = 0; i < player.length; i++){
        var temp = {};
        temp.p = player[i];
        temp.q = quantity[i];
        temp.e = emi[i];
        temp.v = leaguevt[i];
        entry.push(temp);
    }entry.sort(function(a, b){
        return b.q - a.q;
    });var leagueText = "";
    for(var h = 0; h < entry.length; h++){
        if(h < 99){
            var temp = getGap(entry[h].p.toString());
            var end = "\n";
            if(entry[h].v>ztime){
                end = " 👑\n";
            }switch(lang){
                case 0: var text = entry[h].e+" Player "+entry[h].p+temp+entry[h].q+end;
                    break;
                case 1: var text = entry[h].e+" 玩家 "+entry[h].p+temp+entry[h].q+end;
                    break;
                case 2:
                    break;
            }leagueText += text;
        }}setText("LText1", leagueText);
        if(val){
            setTimeout(function(){fadein("LRefresh");
        }, 5000);
}}
onEvent("LRefresh","click",function(){retriv()});
onEvent("LRule","click",function(){
    playS(8);
    setT("LOT", ["Welcome to League!\n\nComplete target to rank up for higher 🎟️ reward and rank chips!\n\nThere are 10 ranks in total, going from 5- to 5+ to 4-, all the way to 1+ with maximum reward of 38 🎟️!\n\nReward is sent via in-game message.", "欢迎来到排位赛！\n\n完成目标以获得更高🎟️奖励和排位筹码！\n\n总共有10个排位：5-，5+，4-，以此类推至1+。 (最大奖励38🎟️！)\n\n奖励通过游戏内信件发放。", ""]);
    fadeIn(["LOV", "LOT", "LOB"]);
});
onEvent("LOB","click",function(){
    playS(5);
    hideE(["LOB","LOL","LOR"]);
    fadeOut(["LOV", "LOT"]);
});
onEvent("LHall","click",function(){
    var text = getleaguetex(0);
    lbz = 0;
    playS(8);
    setText("LOT", text);
    hideElement("LOL");
    fadeIn(["LOV", "LOT", "LOB", "LOR"]);
});
onEvent("LOR","click",function(){
    if(lbz + 1 < leaguehistory.length){
        playS(10);
        showElement("LOL");
        lbz++;
        setText("LOT", getleaguetex(lbz));
        if(lbz + 1 >= leaguehistory.length){
            hideElement("LOR");
}}});
onEvent("LOL","click",function(){
    if(lbz - 1 >= 0){
        playS(10);
        showElement("LOR");
        lbz--;
        setText("LOT", getleaguetex(lbz));
        if(lbz - 1 < 0){
            hideElement("LOL");
}}});
function changeAccount(val){
    account += val;
    accountstring = localstr(account);
}
function changeTicket(val){
    ticket += val;
    ticketstring = localstr(ticket);
    if (val > 0){
        dodynamic([val + " 🎟️ acquired.", "已获得" + val + "🎟️。", ""]);
}}
function localstr(val){
    return (val).toLocaleString(undefined, {});
}
function validateJSON(str, location){
    if(str == null){
        setScreen("ximer".split("").reverse().join(""));
        setT("isfuislkjfdsj", ["Fatal Error.\n\n"+location + " JSON input null.\n\nPlease contact the developer at mtngckover@gmail.com with the above error message.\n\nSorry for the inconvenience.","致命错误：\n\n"+location + " JSON 输入为空。\n\n请电邮开发者：mtngckover@gmail.com并附带上述错误信息。\n\n带来的不便敬请谅解。",""]);
        throw new Error("Fatal JSON Error.");
    }if(str == undefined){
        setScreen("ximer".split("").reverse().join(""));
        setT("isfuislkjfdsj", ["Fatal Error.\n\n"+location + " JSON input undefined.\n\nPlease contact the developer at mtngckover@gmail.com with the above error message.\n\nSorry for the inconvenience.","致命错误：\n\n"+location + " JSON 输入未指明。\n\n请电邮开发者：mtngckover@gmail.com并附带上述错误信息。\n\n带来的不便敬请谅解。",""]);
        throw new Error("Fatal JSON Error.");
    }try {
      var json = JSON.parse(str);
      return (typeof json === 'object');
    } catch (e){
        setScreen("ximer".split("").reverse().join(""));
        setT("isfuislkjfdsj", ["Fatal Error.\n\n"+location + " JSON input invalid.\n\nPlease contact the developer at mtngckover@gmail.com with the above error message.\n\nSorry for the inconvenience.","致命错误：\n\n"+location + " JSON 输入不正确。\n\n请电邮开发者：mtngckover@gmail.com并附带上述错误信息。\n\n带来的不便敬请谅解。",""]);
        throw new Error("Fatal JSON Error.");
}}
setText("pokeraccount",accountstring);
onEvent("card0","click",function(){selectpoker(0)});
onEvent("card1","click",function(){selectpoker(1)});
onEvent("card2","click",function(){selectpoker(2)});
onEvent("card3","click",function(){selectpoker(3)});
onEvent("card4","click",function(){selectpoker(4)});
function selectpoker(val){
  if(ispokerplay){
  playS(14);
  if(pokers[val].s){
    pokers[val].s = 0;
    setT("keep"+val, ["","",""]);
  }else{
    pokers[val].s = 1;
    setT("keep"+val, ["Keep","保留",""]);
}}}
onEvent("pokerp","click",function(){add100("pokerm", "pokerwager", ["Wager: ", "赌注：", ""], "pokern", "pokerp")});
onEvent("pokerq","click",function(){add1000(["pokerm", "pokern"], "pokerwager", ["Wager: ", "赌注：", ""], "pokerq")});
onEvent("pokerm","click",function(){min100("pokerp", "pokerwager", ["Wager: ", "赌注：", ""], "pokerq", "pokerm")});
onEvent("pokern","click",function(){min1000(["pokerp", "pokerq"], "pokerwager", ["Wager: ", "赌注：", ""], "pokern")});
onEvent("pokerstart","click",function(){
  if(account - wager < 0){
        insC("pokeranno");
        return;
  }if(sirand){
    if(randomtrig){
        doRand(0);
        return;
    }else{
        randomtrig = 1;
}}if(ispvp){
    if(pvptrig){
        if(pvpdata.cr == pvpdata.r){
            locallastgame = false;
        }updPVPText();
        updatePlayerPVP();
        changeScreen("pvpe");
        return;
    }else{
        pvptrig = 1;
}}if(ispvp){
    pvpdata.la += wager;
}log("pks", wager);
  setT("pokeranno",["Choose cards to keep and continue.","选择保留牌并继续。",""]);
  setTex(["card1","card2","card3","card4", "card0"],"");
  changeAccount(-wager);
  setText("pokeraccount",accountstring);
  hideE(["pokerstart","cardback","pokerq","pokerp","pokerm","pokern","pokerwager","pokeraccount","pokercred","pokerrule"]);
  ispokerplay = true;
	for(var i = 0; i < 5; i++){
	  dealrandcard(i);
	}var j = 0;
    kxz = 0;
    update();
	kxz = timedLoop(200, function(){
      playS(13);
	  var pokernum = "";
	  if(pokers[j].n == 14){
	    pokernum = "A";
	  }else if(pokers[j].n == 11){
	    pokernum = "J";
	  }else if(pokers[j].n == 12){
	    pokernum = "Q";
	  }else if(pokers[j].n == 13){
	    pokernum = "K";
	  }else{
	    pokernum = pokers[j].n;
	  }setText("card"+j, pokers[j].c+"\n"+pokernum);
	  setStyle("card"+j, "border-color:#54ff00");
	  if(j == 4){
	    fadeIn(["pokerdeal","pokeraccount","pokercred","pokerrule"]);
	    stopTimedLoop(kxz);
	  }j++;
})});
function dealrandcard(j){
  var suite = ["\u2665","♠️","️\u2663","♦️"];
  var r1 = RandomNumber(0, 3);
  var r2 = RandomNumber(1, 14);
  var match = false;
  for(var i = 0; i < 5; i++){
    if(pokers[i].c == suite[r1] && pokers[i].n == r2){
      match = true;
      break;
  }}if(match){
    dealrandcard(j);
    return;
  }else{
    pokers[j].c = suite[r1];
    pokers[j].n = r2;
    pokers[j].s = 0;
}}
onEvent("pokerdeal","click",function(){
    log("pkr", 1);
    pka++;
    pst++;
	hideE(["pokerdeal","pokeraccount","pokercred","pokerrule"]);
	ispokerplay = false;
	var list = [];
	for(var i = 0; i < 5; i++){
	  if(!pokers[i].s){
	    list.push(i);
	    pokers[i].n = -1;
	    pokers[i].c = "";
	}}for(var l = 0; l < list.length; l++){
        setText("card"+list[l], "");
	  dealrandcard(list[l]);
	}var j = 0;
    kxz = 0;
	kxz = timedLoop(200, function(){
	  if(j < list.length){
        playS(13);
	    var pokernum = "";
	    if(pokers[list[j]].n == 14){
	      pokernum = "A";
	    }else if(pokers[list[j]].n == 11){
	      pokernum = "J";
	    }else if(pokers[list[j]].n == 12){
	      pokernum = "Q";
	    }else if(pokers[list[j]].n == 13){
	      pokernum = "K";
	    }else{
	      pokernum = pokers[list[j]].n;
	    }setText("card"+list[j], pokers[list[j]].c+"\n"+pokernum);
	    setStyle("card"+list[j], "border-color:#00f0ff");
	    j++;
	  }else{
	    stopTimedLoop(kxz);
	    doPokerJudge();
}})});
function doPokerJudge(){
  pokers.sort(function(a, b){
    return b.n - a.n;
  });if((pokers[0].n - 1 == pokers[1].n) && (pokers[1].n - 1 == pokers[2].n) && (pokers[2].n - 1 == pokers[3].n) && (pokers[3].n - 1 == pokers[4].n)){
    if((pokers[0].c == pokers[1].c) && (pokers[1].c == pokers[2].c) && (pokers[2].c == pokers[3].c) && (pokers[3].c == pokers[4].c)){
      if(pokers[0].n == 14){
        processPoker(9);
        return;
      }else{
        processPoker(8);
        return;
    }}else{
      processPoker(7);
      return;
  }}var lists = [];
  for(var k = 0; k < 5; k++){
    lists.push(pokers[k].n);
  }var unique = uniqueArray(lists);
  if(unique.length == 2){
    if(unique[0].t == 3 || unique[1].t == 3){
      processPoker(6);
      return;
    }else {
      processPoker(5);
      return;
 }}else if((pokers[0].c == pokers[1].c) && (pokers[1].c == pokers[2].c) && (pokers[2].c == pokers[3].c) && (pokers[3].c == pokers[4].c)){
    processPoker(4);
    return;
  }else if(unique.length == 3 && (unique[0].t == 3 || unique[1].t == 3 || unique[2].t == 3)){
    processPoker(3);
    return;
  }else if(unique.length == 3 && ((unique[0].t == 2 || unique[1].t == 2)||(unique[0].t == 2 || unique[2].t == 2)||(unique[1].t == 2 || unique[2].t == 2))){
    processPoker(2);
    return;
  }for(var i = 0; i < unique.length; i++){
    if(unique[i].n > 10 && unique[i].t == 2){
      processPoker(1);
      return;
  }}processPoker(0);
}
function processPoker(val){
  var payout = 0;
  if(val != 0){
    pokerstreak++;
    if(pokerstreak > pkc){
        pkc = pokerstreak;
        submitFame(9, pkc);
    }if(sirand){
        randomstreak++;  
        unifyRand(0);           
        if(randomstreak > rst){
           rst = randomstreak;
           submitFame(13, randomstreak);
    }}else if(ispvp){
        pvpstreak++;
        if(pvpstreak > pvpdata.st){
            pvpdata.st = pvpstreak;
        }unifyRand(1); 
  }}if(val == 0){
    pokerstreak = randomstreak = pvpstreak = 0;
    playS(12);
    setT("pokeranno", ["No combo.\nBetter luck next time!","没有组合。\n下次好运！",""]);
  }else if(val == 1){
    playS(8);
    payout = wager;
    setT("pokeranno", ["Jacks or Better! x1!\n+"+localstr(payout),"大对子！x1!\n+"+localstr(payout),""]);
  }else if(val == 2){
    playS(8);
    payout = wager*2;
    setT("pokeranno", ["Two Pair! x2!\n+"+localstr(payout),"两个对子！x2!\n+"+localstr(payout),""]);
  }else if(val == 3){
    playS(8);
    payout = wager*3;
    setT("pokeranno", ["Three of a Kind! x3!\n+"+localstr(payout),"三个同类！x3!\n+"+localstr(payout),""]);
  }else if(val == 4){
    playS(8);
    payout = wager*6;
    setT("pokeranno", ["Flush! x6!\n+"+localstr(payout),"同花！x6!\n+"+localstr(payout),""]);
  }else if(val == 5){
    playS(4);
    payout = wager*25;
    setT("pokeranno", ["Four of a Kind! x25!\n+"+localstr(payout),"四个同类！x25!\n+"+localstr(payout),""]);
  }else if(val == 6){
    playS(4);
    payout = wager*9;
    setT("pokeranno", ["Full House! x9!\n+"+localstr(payout),"满堂红！x9!\n+"+localstr(payout),""]);
  }else if(val == 7){
    playS(8);
    payout = wager*4;
    setT("pokeranno", ["Straight! x4!\n+"+localstr(payout),"顺子！x4!\n+"+localstr(payout),""]);
    log("pkw", wager*4);
    changeAccount(wager*4);
  }else if(val == 8){
    playS(4);
    payout = wager*50;
    nto+=300;
    setT("pokeranno", ["Straight Flush! x50!\n+"+localstr(payout),"小同花顺！x50!\n+"+localstr(payout),""]);
    log("pkw", wager*50);
    changeAccount(wager*50);
  }else if(val == 9){
    payout = wager*600;
    playS(3);
    log("pkj", 1);
    pkb++;
    subBoard(9, payout);
    setT("pokeranno", ["Royal Flush! x600!\n+"+localstr(payout),"皇家同花顺！x600!\n+"+localstr(payout),""]);
    changeScreen("jackpot");
    setT("text_area5", ["Royal Flush! They don't happen often - in fact, only 0.0025%!\nTake a screenshot and go buy a lottery!\n"+payout+ " credits awarded.","皇家同花顺！他们很罕见的-只有0.0025%！\n截个图，买张彩票去吧！\n"+payout+"点数已奖励！",""]);
}if(ispvp){
    pvpdata.wa += payout;
    setT("pokerstreak", ["Win streak: "+pvpstreak, "连胜："+pvpstreak, ""]);
}else if(sirand){
    setT("pokerstreak", ["Win streak: "+randomstreak, "连胜："+randomstreak, ""]);
}else{
    setT("pokerstreak", ["Win streak: "+pokerstreak, "连胜："+pokerstreak, ""]);
}log("pkw", payout);
  changeAccount(payout);
  checkach();
  setText("pokeraccount",accountstring);
  fadeIn(["pokerstart","cardback","pokerq","pokerp","pokerm","pokern","pokerwager","pokeraccount","pokercred","pokerrule"]);
  pokers = [{c:"",n:-1,s:0},{c:"",n:-1,s:0},{c:"",n:-1,s:0},{c:"",n:-1,s:0},{c:"",n:-1,s:0}];
  for(val = 0; val < 5; val++){
    setT("keep"+val, ["","",""]);
}}
function uniqueArray(item){
  var lit = [];
  var c = {};
  c.n = item[0];
  c.t = 1;
  lit.push(c);
  for(var i = 1; i < item.length; i++){
    var match = false;
    for(var j = 0; j < lit.length; j++){
      if(lit[j].n == item[i]){
        match = true;
        lit[j].t++;
        break;
    }}if(!match){
      var c = {};     c.n = item[i];        c.t = 1;
      lit.push(c);
    }}return lit;
}
onEvent("button191","click",function(){
    if(!ftueflag[12]){
        doTutorial(12);
    }else{
        doEnter("poker", "pokeraccount", "pokerwager", ["Wager: ", "赌注：", ""], wager, true);
}});
onEvent("cardback","click",function(){
    doStart("poker");
});
onEvent("pokerrule","click",function(){doPayout(8, ["assets/pokere.jpg", "assets/pokerc.jpg", ""])});
onEvent("drinkb","click",function(){
    var a = oleCheck(1);
    if(a){
        var tiem = Math.floor(GetTime()/86400000);
        if(gft < tiem){
            pdata[11] = 1;
            sIurl("drinkb", "assets/greencrc.png");
            setT("drinkleft",["1 drink left for today","今天还剩1份饮品",""]);
        }else{
            pdata[11] = 0;
            sIurl("drinkb", "assets/graycrc.png");
            setT("drinkleft",["0 drink left for today","今天还剩0份饮品",""]);
        }changeScreen("drink");
}});
onEvent("drinkback","click",function(){ticketgameback(0)});
onEvent("drink1","click",function(){giftdrink(1)});
onEvent("drink2","click",function(){giftdrink(2)});
onEvent("drink3","click",function(){giftdrink(3)});
onEvent("drink4","click",function(){giftdrink(4)});
onEvent("drink5","click",function(){giftdrink(5)});
onEvent("drink6","click",function(){giftdrink(6)});
onEvent("drink7","click",function(){giftdrink(7)});
onEvent("drinkno","click",function(){
    hideE(["drinkno","drinkyes"]);
    playS(0);
    fadeOut(["drinkbg","drinkbgt"]);
});
function gifess(val){
    playS(2);
    setT("drinkbgt",val);
    fadeIn(["drinkbg","drinkbgt","drinkno"]);
}
function giftdrink(val){
    var cost = drink[val].a;
    if(account < cost){
        gifess(["Insufficient fund!", "资金不足！", ""]);
        return;
    } var tiem = Math.floor(GetTime()/86400000);
    if(gft == tiem){
        gifess(["No gift left for today.", "今天的礼品已经送完。", ""]);
        return;
    }if(gft > tiem){
        var gap = "";
        var dif = gft - tiem;
        if(dif > 1){
            gap = "s";
        }gifess(["Your account is new and cannot gift yet. Please wait "+dif+" day"+gap+" before gifting.", "你的账号较新，暂时不能送礼。请等"+dif+"天。", ""]);
        return;
    }var opponent = getText("drinkip");
    if(opponent == "" || isNaN(parseInt(opponent))){
       gifess(["Recipient must be a number.", "收件者必须是数字。",""]);
        return;
    }opponent = parseInt(opponent);
    if(opponent < 1 || opponent > 20000){
        gifess(["Recipient must be between 1 and 20000.", "收件者必须是1到20000。",""]);
        return;
    }if(opponent == currentid){
        gifess(["Recipient must not be yourself.", "收件者不能是自己。",""]);
        return;
    }playS(6);
    recip = opponent;
    dki = val;
    setT("drinkbgt",["Are you sure to gift Player "+opponent+" a beverage worth "+drink[val].a+" Credits? This action cannot be undone.", "确认要赠送价值"+drink[val].a+"点数的饮品给玩家"+opponent+"？此操作不可撤销。",""]);
    fadeIn(["drinkbg","drinkbgt","drinkno","drinkyes"]);
}
onEvent("drinkyes","click",function(){
    hideE(["drinkno","drinkyes"]);
    playS(0);
    setT("drinkbgt",["Querying online database.\nIf this took more than 5 seconds check your internet connection.", "正在查询数据库。\n如果此操作超过了5秒，请检查您的网络连接。", ""]);
    var com = {};                   com.UID = recip;                    com.CID = com.log = com.re = "";
    com.me = currentid+"%"+dki;     com.ca = "gi";                      com.hi = 1;
    log("gif", 1);
    createRecord("\x66\x65\x65\x64\x62\x61\x63\x6B", com, function(){
        var tiem = Math.floor(GetTime()/86400000);
        changeAccount(-drink[dki].a);
        setText("text_area220", accountstring);
        gft = tiem;
        ols += Math.round(drink[dki].a / 1000);
        pdata[11] = 0;
        adv++;
        log("ssf", drink[dki].a - drink[dki].b);
        sIurl("drinkb", "assets/graycrc.png");
        update();
        fadeIn(["drinkno"]);
        setT("drinkleft",["0 drink left for today","今天还剩0份饮品",""]);
        setT("drinkbgt",["Your gift has been sent to Player "+recip+" via in-game message.","你的礼物以通过游戏内信件发送给玩家"+recip,""]);
})});
