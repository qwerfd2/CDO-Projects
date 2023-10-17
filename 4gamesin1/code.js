//Hey, this is to prevent ppl claiming credit for my work.
//This app has not been updated in a while - if you want to improve it
//or simply want to know how it works, mtngckover@gmail.com
//Just... don't delete the credit info and mislead ppl.


//jshint maxerr: 3000
var isC, kSe, tcv, jv, plce, hocd, haha, h1, h2, h3, h4, glo22, h5, h6, holid, isSync, cdr, jsn, devList, pLli, flagList, uSerial, cID, cL, uL, cPD, recoData, cMdt, rLo, tLO, tLT, posX, dbgT, xSp, ySp, lives, score, baX, baY, coX, paS, paX, moL, moR, isReset, caB, recentID, OAd, tAd, hAd, fAd, eAd, newd, proId, conId, orig, teep, glo1, glo2, glo3, glo4, glo5, glo6, glo7, glo8, glo9, glo10, glo11, uI, uS, sTime, eTime, isB, isF, rID, v, lBo, uBo, salt, s2, kZ, tmpID, p, q, state, g1Id, g2Id, g3Id, g4Id, ce, dealS, playSc, aDa, pDa, sTi, eIt, size, iCh, xpF, bc, upddata, stvar, sDate, lDate, nDate, gDate, front, back, currentUID, pD, tmpLog, kZ, tmp1, tmp2, tmp3, scOn, scTw, scTh, ans1, ans2, ans3, read, rSti, tiFa, TPP, coO, first, hasNet, oLn, hasReco, fiTr, sPR, sbug, nSe, flagG, Ifa, bTf, edT, pj, sj, isIn, ready, Cru, tr1, stTrigger, ocom, isPC, blk, scp, eMT, checkC, g1Rs, g2Rs, g3Rs, g4Rs, anod, p2, p3, xO, yO, answered, isSet, isChoose, anogv, maTr, iPis, simT, cooldown, iCru, donee, hNu, hSu, hAb, isNew, Sstr, igO, ISn, liU, idL, iDss, iDp, idea, cGG, OTP, banOver, tuP, hasCom, lastF, lastT, hPR, gTrig,BD, BX, bb, ba, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, all, hWo, hWt, highS3, coin, round, a, teK, hiS, val, pAv, curstad, cOu, BG, uint, flagged, errC, testP, testC, errD, compo, fiCo, newX1, i, newY1, newX2, newY2, newX3, newY3, newX4, newY4, g2ba, g3ba, g4ba, g3L, g2L, g1C, situation, tTime, banned, acTi, tmpO, oneRand, twoRand, pts, hS, totalP, pBi, bTm, g1ba, dlall;v=lBo=uBo=salt=s2="9";
devList = pLli = kSe = flagList = uSerial = cID = [];
cL = uL = cPD = recoData = cMdt = {};
rLo = tLO = tLT  = "place";
currentUID = pD = tmpLog = kZ = tmp1 = tmp2 = tmp3 = scOn = scTw = scTh = ans1 = ans2 = ans3 = read = "";
coO = rSti  = tiFa = TPP = first = hasNet = oLn = hasReco = fiTr = sPR = sbug = nSe = flagG = Ifa = bTf = true;
BD = plce = jv = BX = bb = ba = m1 = m2 = m3 = m4 = m5 = m6 = m7 = m8 = m9 = glo22 = m10 = all = tcv = hWo = hWt = highS3 = coin = round = a = teK = hiS = val = pAv = curstad = cOu = BG = uint = flagged = errC = testP = testC = errD = compo = fiCo = newX1 = i = newY1 = newX2 = newY2 = newX3 = newY3 = newX4 = newY4 = g2ba = g3ba = g4ba = g3L = g2L = g1C = situation = tTime =lastT = banned = acTi = tmpO = oneRand = twoRand = pts = hS = totalP = dlall = cdr = holid = h1 = h2 = h3 = h4 = h5 = h6 = hocd = haha = 0;
edT = pj = sj = isIn = ready = Cru = tr1 = stTrigger = ocom = isPC = blk = scp = eMT = checkC = g1Rs = g2Rs = g3Rs = g4Rs = anod = p2 = p3 = xO = yO = answered = isSet = isChoose = anogv = maTr = iPis = simT = cooldown = iCru = donee = hNu = hSu = hAb = isNew = Sstr = igO = ISn = liU = idL = iDss = iDp = idea = cGG = OTP = banOver = tuP = hasCom = lastF = hPR = gTrig = isSync = isC = false;
pBi, bTm, g1ba = 99;
var scoreP = {serial: "", cp: ""};
var newRec = {time:"",action:""};
var ar = "\n------------\n";
var x = 200;
var sSpeed = 2;
var baD = 26;
var coY = 65;
var coD = 50;
var paY = 425;
var paW = 90;
var paH = 24;
var kg = getUserId();
//"k5UPB0CDZKz9w33D3bb5PmtnGck" RIP my old MtnGck UID
var sound = 1;
var pBL = [];
var zeq = randomNumber(1,1000);
if (zeq == 899){
  haha = 1;
  setText("claim", "This message only has a 0.1% chance to be here. You're so lucky. For this single session, go to Festival page and redeem a festival sticker of your choice!\n\n这条消息出现的概率只有0.1%。你就是幸运儿吧！仅限此次游玩，进入节日页面来兑换任意一个节日贴纸！\n\n^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
}
onEvent("sBox", "click", function() {
switch (sound){
  case 1:
sound = 2;
setS("sBox", "soundon", "sohn");
playS("rewardDrop", "menure");
break;
  case 2:
setS("sBox", "soundoff", "sohf");
sound = 0; 
break;
  case 0:
setS("sBox", "sounmid", "sohmid");
sound = 1;
playS("rewardDrop", "menure");
break;
}
updateProfile();
});
getKeyValue("global", function (value){
  setKeyValue("global", value+1);
  val = value+1;
});
onEvent("sNT", "click", function() {
if (liU){
var t = getText("sNT");
if (iCh === 1){
  if (t === "点击以显示用户ID"){
    setText("sNT", currentUID);
  }else{
    setText("sNT", "点击以显示用户ID");
}}else{if (t === "Click to show User ID"){
  setText("sNT", currentUID);
}else{
  setText("sNT", "Click to show User ID");
}}}});
function doSe(){
  dlall = 4;
  hideE(["hang", "lAg"]);
  stopTimedLoop(tLO);
  stopTimedLoop(rLo);
  guestCheck();
  eMT = false;
  showElement("credit");
  tLO = timedLoop(1200, checkInternet);
  changeScreen("cLan");
  rID = null;
  setT("detail", "Find more stat in Tutorial & Progress!", "在教程和进度里找到更多统计！");
    if ((h1 === 1 && h2 === 1 && h3 === 1 && h4=== 1 && h5 === 1 && h6 === 1) || m9 === 1){
    showE(["debugB"]);
  }
readRecords("recoveryData", {}, function(method){
for (var i = 0; i < method.length; i++){
  if (method[i].UID === currentUID){
    rID = method[i].id;
    hasReco = eMT = true;
}}if (!eMT){
  rID = null;
  hasReco = false;
}});if (iCh === 1){
  setText("global","全球访问次数："+(val));
}else{
  setText("global","Global Visit Time: "+(val));
}if (hasNet && liU){
  showE(["delete", "cmB"]);
if (!answered){
  showElement("reminder");
  setT("reminder", "Worried about forgetting User ID? Fill recovery info!", "担心忘记用户ID？填写安全信息！");
}else{
  hideElement("reminder");
}}
  sesof();
  setText("uidG", "");
  firstTime();
if (!liU){
  hideE(["delete", "lAg"]);
if (hasNet){
  setT("reminder", "Treat User ID like your password. Forget User ID?", "把用户ID当成密码对待。忘记用户ID？");
if (iCh === 1){
  showElement("reminder");
}}else{
  hideElement("reminder");
}}else{
  showE(["p1", "profile"]);
if (iCh === 1){
  setText("profile", "存档访问次数：" + acTi);
}else{
  setText("profile", "Profile Visit Time: " + acTi);
}if (hasNet){
  if (!isSync){
    if (iCh === 1){
  setText("loN", "登录成功！'" + currentUID + "'已同步。");
    }else{
  setText("loN", "Login Success! '" + currentUID + "' is synced.");
  }}else{if (iCh === 1){
  setText("loN", "登录成功，同步中。。。");
    }else{
  setText("loN", "Login Success, syncing...");
  }}}}
  playS("UIButton","bomer");
}
onEvent("ssB", "click", function(){
  doSe();
});
  tLO = timedLoop(1200, checkInternet);
onEvent("English", "click", function() {
iCh = 0;
hideElement("logo");
if (first){
  LangFunc();
  setText("reminder", "Treat User ID like your password. Forget User ID?");
  checkBan();
}else{
  stopTimedLoop(tLO);
}
  firstTime();
  setEnglish();
if(!liU){
  currentUID = "Guest";
}if (!first){
  start();
  igO = false;
}});
function setEnglish(){
  setText("wTM", "Welcome!");
  setText("warnd", "If you quit, your winning streak will decrease by 2.\n\nAre you sure?");
  setText("button2", "I'm sure");
  setText("button4", "Never mind");  
  back = ar + "Use the input below to respond if you need.";
  front = "Message from the developer:"+ ar;
  setText("colte", "Customization");
  setText("label4", "Festival");
  setText("fest", "Festival");
  setText("tropy", "Trophy");
  setText("btn", "Return");
  setText("check", "Check");
  setText("cancel", "Cancel");
  setText("confirm", "Confirm");
  setText("text_area6","There's a better BlackJack in my new game, Lucky Strike!");
  setText("autoE", "Please don't close the web page when you see this autosave icon.");
  setText("gB", "Go Back");
  setText("hang", "Retrieving information... if nothing happened in 5 seconds, check your internet connection.");
  setText("fY", "I'm Sure");
  setText("fN", "Return");
  setText("Re", "Recover");
  setText("Save", "Save");
  setText("rO", "Recovery Info");
  setText("barrr", "Retrieving information... if nothing happened in 5 seconds, check your internet connection.");
  setText("update", "Changelog");
  setText("creditS", "Main Menu");
  setText("credit", "Credit/Legal");
  setText("cmB", "Feedback");
  setText("decline", "Decline");
  setText("submit", "Submit");
  setText("tMa", "Main Menu");
  setText("lR", "Play Again!");
  setText("lM", "Main Menu");
  setText("clickBut", "Click");
  setText("SLB", "Skillcheck");
  setText("3Menu", "Menu");
  setText("threeEM", "Main Menu");
  setText("bachan", "Change button color");
  setText("bbchan", "Change button border");
  setText("pA", "Play Again");
  setText("claimFr", "Collect!!!");
  setText("btM", "Main Menu");
  setText("SG3B", "Enhanced Pong");
  setText("lAg", "Guest Login");
  setText("GUIDB", "User ID Login");
  setText("ssB", "Settings");
  setText("SG1B", "Ultimate Click");
  setText("SG2B", "Blackjack (Modified)");
  setText("twoR", "Main Menu");
  setText("twoRep", "Play Again!");
  setText("label3", "Preview (click icon for SFX)");
  setText("sochan", "Change SFX pack");
  setText("bgchan", "Change background");
  setText("btchan", "Change icon pack");
  setText("rrret", "Return to Setting");
  setText("tD", "Deal");
  setText("toP", "Pass");
  setText("winTo", "Main Menu");
  setText("eO", "Play Again!");
  setText("ttB", "Tutorial & Progress");
  setText("bvb", "You are not logged in.\n\nSave and use your selection whenever you play with a User ID. When you log in, your selection will be automatically applied.");
  setText("bcb", "got it");
  setText("TUTmb", "Main Menu");
  setText("Om", "Menu");
  setText("tM", "Menu");
  setText("leader", "Leaderboard");
  setText("boardMain", "Main Menu");
  setText("extra", "Extras");
  setText("detailed", "Detailed Stats");
  setText("mobile", "More Games & Mobile!");
  setText("sNT", "Click to show User ID");
  setText("nop", "Decline");
  setText("xpR", "XP Rules");
  setText("btb", "Beta info");
  setText("stB", "Sound test");
  setText("rt", "Return");
  setText("rrt", "Return");
  setText("langOne", "4 Games In 1 | Welcome!");
  setText("pro", "Unlock this by getting 1000 XP !");
  setText("oky", "Agree");
  setText("rs", "Clear local");
  setText("back", "MENU");
  setText("simp", "resume sync (yes, go cheat online babe)");
  setText("dib", "single-comment per login limit off once (so I can ban you for spamming)");
  setText("dwarn", "WARNING: You enabled cloud sync.\n\nAll changes will be synced, you are solely responsible for your own data.\n\nThe developer don't have a backup, and can't do anything if you mess up.\n\nYOU HAVE BEEN WARNED.");
  setText("dye", "I understand & accept the risk");
  setText("fin", "Leave sync on & return to menu");
  setText("dno", "Turn sync off & return to menu");
  setText("button1", "Refresh");
}
gAr();
function gAr(){
readRecords("test", {}, function(method){
  pLli = method;
});}
function firstTime(){
if (first){
  getGlobal();
  glo1 = glo2 = glo3 = glo4 = glo5 = glo6 = glo7 = glo8 = glo9 = glo10 = glo11 = 0;
  readRecords("playerProgress", {}, function(method){
  glo9 = method.length;
for (var i = 0; i < method.length; i++){
  if (method[i].bn === 0){
  scoreP = {serial:"", cp: ""};
  scoreP.serial = method[i].id;
  scoreP.cp = method[i].co;
  kSe.push(scoreP);
  glo1 += method[i].w1;
  glo2 += method[i].g1C;
  glo3 += method[i].w2;
  glo4 += method[i].g2L;
  glo6 += method[i].g3C;
  glo7 += method[i].g3L;
  glo8 += method[i].g4T;
  glo10 += method[i].tT;
  glo11 += method[i].co;
}}
  uSerial = kSe;
});
  getKeyValue("g22", function(v){glo22 = v});
  getGlobal();
  dlall = 1;
  showE(["reminder", "image3", "GUIDB", "loN", "uidG", "lAg"]);
  hideE(["English", "Chinese", "image1"]);
  setT("loN", "Create a User ID to sync your progress! Remember to login with the same User ID next time. User ID must be 6 to 12 characters long, must have lower cap letter, capital letter, number, and no space.\nAlready have a User ID? Login here.\n*Internet Connection Required*", "新建用户ID，立享云端存档！下次记得拿同样的用户ID登录！用户ID必须是6-12字符，必须有小写字母，大写字母和数字，不能有空格。\n已有用户ID？在这里登录！\n*需要网络连接*");
if (currentUID.length !== 0){
  first = false;
}}else{
  updateProfile();
  showE(["image1", "English", "Chinese"]);
}}
function LangFunc(){
  showE(["BGB", "image4", "reminder"]);
  hideE(["GW", "GFW", "claim"]);
  playS("UIButton","bomer");
}
onEvent("Chinese", "click", function() {
iCh = 1;
hideElement("logo");
if (first){
  LangFunc();
  setText("reminder", "把用户ID当成密码对待。忘记用户ID？");
  checkBan();
}else{
  stopTimedLoop(tLO);
}
  firstTime();
  setChinese();
if (!liU){
  currentUID = "游客";
}if (!first){
  start();
  igO = false;
}});
function setChinese(){
  setText("warnd", "如果要退出，你的连胜会减少2。\n\n确定？");
  setText("button2", "我确定");
  setText("button4", "算了吧");  
  setText("wTM", "欢迎！");
  back = ar + "如有需要，你可以在下方输入回复。";
  setText("autoE", "当你看到此自动保存标志时，请   不要关闭网页。");
  front = "来自开发者的消息："+ar;
  setText("tropy", "奖牌");
  setText("btn", "返回");
  setText("bgchan", "换背景");
  setText("btchan", "换图标");
  setText("rrret", "返回设置"); 
  setText("label3", "预览（音效点击图标）"); 
  setText("check", "核对");
  setText("text_area6","我的新游戏‘幸运一击’里有一个更好的21点！");
  setText("colte", "个性化");
  setText("bvb", "你没有登录。\n\n使用用户ID，以保存并在每次游玩时使用自己的选择。下次登录时你的选择会自动生效。");
  setText("bcb", "知道了");
  setText("barrr", "获取信息中。。。如果五秒后什么都没发生，请检查连接。");
  setText("cancel", "返回");
  setText("confirm", "确认");
  setText("gB", "返回上一页");
  setText("label4", "节日");
  setText("fest", "节日");
  setText("claimFr", "领取！！！");
  setText("fY", "提交");
  setText("fN", "取消");
  setText("Re", "还原");
  setText("Save", "保存");
  setText("bachan", "换按钮颜色");
  setText("bbchan", "换按钮边缘");
  setText("rO", "还原信息");
  setText("update", "更新日志");
  setText("btM", "主菜单");
  setText("creditS", "主菜单");
  setText("credit", "鸣谢/法律");
  setText("cmB", "反馈");
  setText("decline", "取消");
  setText("submit", "提交");
  setText("tMa", "主菜单");
  setText("lR", "再玩一次！");
  setText("lM", "主菜单");
  setText("clickBut", "点");
  setText("SLB", "滑块");
  setText("3Menu", "主菜单");
  setText("threeEM", "主菜单");
  setText("pA", "再玩一次！");
  setText("SG3B", "改良版撞球");
  setText("lAg", "游客登录");
  setText("GUIDB", "用户ID登录");
  setText("ssB", "设置");
  setText("SG1B", "终极点击");
  setText("SG2B", "修改版21点");
  setText("twoR", "主菜单");
  setText("twoRep", "再玩一次！");
  setText("tD", "拿牌");
  setText("toP", "停牌");
  setText("winTo", "主菜单");
  setText("eO", "再玩一次！");
  setText("ttB", "教程和进度");
  setText("TUTmb", "主菜单");
  setText("Om", "主菜单");
  setText("tM", "主菜单");
  setText("leader", "排行榜");
  setText("boardMain", "主菜单");
  setText("nop", "算了");
  setText("extra", "额外内容");
  setText("detailed", "详细统计");
  setText("oky", "同意");
  setText("mobile", "更多游戏 & 手机版！");
  setText("sNT", "点击以显示用户ID");
  setText("xpR", "XP规则");
  setText("btb", "Beta信息");
  setText("stB", "声音测试");
  setText("rt", "返回");
  setText("rrt", "返回");
  setText("sochan", "换音效");
  setText("langOne", "游戏四合一  |  欢迎！");
  setText("pro", "获得1000  XP以解锁此内容！");
  setText("hang", "获取信息中。。。如果五秒后什么都没发生，请检查连接。");
  setText("rs", "清空本地");
  setText("back", "主菜单");
  setText("simp", "恢复同步（去联机作弊吧）");
  setText("dib", "单次登录反馈数量限制取消一次（让我来以垃圾消息为由ban你吧）");
  setText("dwarn", "警告：你开启了云端同步。\n\n所有更改均会被同步。你要为你自己的数据负责。\n\n开发者没有备份-如果你搞砸了我也没办法。\n\n你被警告了。");
  setText("dye", "我已知晓并接受风险");
  setText("fin", "保持同步并返回主菜单");
  setText("dno", "关闭同步并返回主菜单");
  setText("button1", "刷新");
}
function checkInternet(){
  switch (curstad){
    case 0:
  curstad++;
  setImageURL("BGB", "assets/cloth2.png");
  break;
    case 1:
  curstad++;
  setImageURL("BGB", "assets/cloth3.png");
  break;
    case 2:
  curstad = 0;
  setImageURL("BGB", "assets/cloth1.png");
}
startWebRequest("https://qwerfd2.github.io/", function(status){
if (status === 0 || simT){
  showE(["another", "warn", "internet"]);
  hideE([ "leader", "meC", "meE", "delete", "cmB", "reminder", "GUIDB", "Save", "Re", "fY", "confirm", "check", "button1"]);
  fiCo = 0;
  hasNet = rSti = false;
  if (oLn){
  ansNo(true);
  oLn = false;
}if (simT){
  setT("loN", "You little detective. I admire you. But you cheated. Save cannot upload. Please refresh the game!", "你个小侦探。我很敬佩你。但是你作弊了。当前存档无法上传。请刷新游戏！");
}else{
  setT("cMT", "Internet lost! Please retry later! Input content saved.", "失去网络连接！请稍后重试！填写内容已缓存。");
  setT("loN", "No internet connection! Cannot create and sync profile! Sound and image may not load! Please check your connection!", "无网络连接！无法创建及同步存档！音效和贴图可能无法加载！请检查连接！");
}if (uint !== 0){
if (liU){
  setT("loN", "Warning: You will be logged out, your progress is synced to the cloud, your local progress will reset. Press the button again to continue.", "警告：你将被登出，你的进度已保存云端，你的本地进度将清空。再次点击按钮以继续。");
}else{
  setT("loN", "Warning: It's not recommended to login as guest, as you will lose all progress after page refresh. Features like special mission, Support Tool, XP Ranking, and Global High Score will be unavailable. It's easy to create a user ID, and it's more fun! If you really want to login as guest, press the button again.", "警告：十分不建议游客登陆，因为无法同步游戏进度，且无法参与许多功能，例如特殊任务，反馈工具，XP排行和全球高分。创建用户ID十分简单-也能增添十分乐趣！如果你真的想使用游客登陆，再次点击按钮。");
}}}else{
  gAr();
  oLn = true;
  hasNet = true;
  hideE(["internet", "another", "warn"]);
  showE(["leader", "global", "button1"]);
 if (pLli.length === 0|| pLli === null){
  cOu++;
if (cOu > 5){
  showE(["GFW", "warn", "GW"]);
if (iCh === 1){
  setText("GW", "错误4 progressNull HasNetX"+cOu);
}else{
  setText("GW", "Error 4 progressNull HasNetX"+cOu);
}}}else{if (errC<7 && !banOver){
  revert();
  hideE(["image12", "warn", "GW", "GFW"]);
  cOu = 0;
}}
if (getText("cMT") === "失去网络连接！请稍后重试！填写内容已缓存。" || getText("cMT") === "Internet lost! Please retry later! Input content saved."){
  setT("cMT", "Internet restored. You can safely proceed.", "网络已恢复。你可以继续提交。");
}if (iCh === 1){
  showElement("meC");
  hideElement("meE");
}else{
  hideElement("meC");
  showElement("meE");
}if (checkC){
  showElement("confirm");
}if (!hasReco && !checkC){
  showElement("confirm");
}else if (!checkC){
  showElement("check");
}if (!answered || !liU){
  if (!cGG && !isNew && !donee){
  showElement("reminder");
}}if (!isSet && !iPis && !anogv){
  showElement("Re");
}if (isSet && !isChoose && bTf){
  showElement("Save");
}if (isChoose && bTf){
  showElement("fY");
}if (uint !== 0){
  if (liU){
  setT("loN", "Warning: You will be logged out, your progress is synced to the cloud, your local progress will reset. Press the button again to continue.", "警告：你将被登出，你的进度已保存云端，你的本地进度将清空。再次点击按钮以继续。");
}else{
  setT("loN", "Warning: It's not recommended to login as guest, as you will lose all progress after page refresh. Features like special mission, Support Tool, XP Ranking, and Global High Score will be unavailable. It's easy to create a user ID, and it's more fun! If you really want to login as guest, press the button again.", "警告：十分不建议游客登陆，因为无法同步游戏进度，且无法参与许多功能，例如特殊任务，反馈工具，XP排行和全球高分。创建用户ID十分简单-也能增添十分乐趣！如果你真的想使用游客登陆，再次点击按钮。");
}}if (liU && !igO && !cGG && !isNew && uint === 0 && !donee){
  showE(["delete", "lAg", "cmB"]);
dol();
}else if (!first && !liU && !cGG && !isNew && uint === 0){
  setT("loN", "Logged in as Guest, save won't upload. You will lose all progress after page refresh. Guest cannot participate in Cloud Save, Feedback, XP Ranking, and Global High Score.\nCreate a User ID now to enjoy all features!\nAlready have a User ID? Sign in here.\n*Internet Connection Required*", "游客身份登录，存档不会上传。你的进度将在页面刷新后清零。游客无法参与云存档，反馈，XP排行和全球高分。\n现在创建用户ID以享受所有功能！\n已有用户ID？在这里登录！\n*需要网络连接*");
}else if (cGG && uint === 0){
  if (iCh === 1){
  setText("loN", "警告！用户ID已存在！是否确定以 '" + pD + "' 登录？\n如果这不是你的用户ID请点返回并重选一个用户ID。");
}else{
  setText("loN", "Warning! User ID already exist! Are you sure you want to login as '" + pD + "' ? \nIf this is not your User ID please press Return and get a new User ID."); 
}}else if (isNew && uint === 0){
  if (iCh === 1){
  setText("loN", "新建用户ID：' "+ pD + "' ？用户ID名称创建后无法被更改。\n通过按'确定'，你证明你已经超过13岁。");
}else{
  setText("loN", "Create User ID: '" + pD + "' ? You cannot change User ID name after its creation.\nBy pressing 'I'm Sure' you certify that you are over 13 years old.");
}}else if (uint === 0){
  setT("loN", "Create a User ID to sync your progress! Remember to login with the same User ID next time. User ID must be 6 to 12 characters long, must have lower cap letter, capital letter, number, and no space. \nAlready have a User ID? Login here.\n*Internet Connection Required*", "新建用户ID，立享云端存档！下次记得拿同样的用户ID登录！用户ID必须是6-12字符，必须有小写字母，大写字母和数字，不能有空格。\n已有用户ID？在这里登录！\n*需要网络连接*");
}if (igO && uint === 0){
  setT("loN", "You can't sign in as Guest!", "你不能以游客身份登录!");
}if (idL && uint === 0){
  setT("loN", "UserID too long!", "你的用户ID太长了！");
}if (iDss && uint === 0){
  setT("loN", "User ID must be longer!", "你的用户ID太短了！");
}if (idea && uint === 0){
  setT("loN", "User ID must have at least 1 number, 1 lower cap letter, and 1 capital letter.", "用户ID必须至少包含一个数字，一个小写字母和一个大写字母。");
}if (iDp && uint === 0){
  setT("loN", "User ID can't have space!", "用户ID不能有空格！");
}if (!cGG && !isNew && !donee){
  showElement("GUIDB");
}}});}
function start(){
  checkInternet();
  var tps = "";
  if (iCh === 1){
      if (holid === 1 && h1 === 0){
    tps = "快去领取春节贴纸吧！截止日期马上就到了！";
  }else if (holid === 2 && h2 === 0){
    tps = "快去领取霍利节贴纸吧！截止日期马上就到了！";    
  }else if (holid === 3 && h3 === 0){
    tps = "快去领取复活节贴纸吧！截止日期马上就到了！";
  }else if (holid === 4 && h4 === 0){
    tps = "快去领取中秋节贴纸吧！截止日期马上就到了！";
  }else if (holid === 5 && h5 === 0){
    tps = "快去领取万圣节贴纸吧！截止日期马上就到了！";
  }else if (holid === 6 && h6 === 0){
    tps = "快去领取圣诞节贴纸吧！截止日期马上就到了！";
  }if (!scp){
  setText("announce","请把用户ID当作密码对待-不要告诉别人你的用户ID。你可以随意分享由数字构成的用户代码，你可以在进度-详细统计里找到你的用户代码。如果你遇到了bug，请登录后使用设置-反馈功能来反馈bug - 请描述bug的位置，和触发bug的方法 - 感谢你的帮助!                    此游戏自动保存进度（如果你登录了）！");
}else{
  setText("announce","藏宝图秘密触发！在设置里找到你的宝藏！如果你没完成任务9 - 它现在就完成了。你的XP和进度已同步 - 不过当心 - 别让这成为你最后一次同步！");
}}else{
  if (holid === 1 && h1 === 0){
    tps = "Go claim the Spring Festival sticker before it's gone! ";
  }else if (holid === 2 && h2 === 0){
    tps = "Go claim the Holi Festival sticker before it's gone! ";    
  }else if (holid === 3 && h3 === 0){
    tps = "Go claim the Easter sticker before it's gone! ";
  }else if (holid === 4 && h4 === 0){
    tps = "Go claim the Mid-autumn Festival sticker before it's gone! ";
  }else if (holid === 5 && h5 === 0){
    tps = "Go claim the Halloween sticker before it's gone! ";
  }else if (holid === 6 && h6 === 0){
    tps = "Go claim the Christmas sticker before it's gone! ";
  }if (!scp){
  setText("announce","Please treat User ID like a password - don't share it! You can share your User Serial, which contains numbers only. You can find it in Progress - Detailed Stats. Please report any encountered bugs by using Settings - Feedback (after login)! Please specify where the problem occur and how to trigger it. Thanks for your help!                    This game autosaves (if you log in)!");
}else{
  setText("announce","Treasure map secret triggered! Go find your treasure in Settings! If you don't have Mission 9 completed - it is now. Your XP is added and the profile is synced. Beware though... It might be your last sync!");
}}
  hideE(["reminder", "aYes", "aNo", "dev"]);
  uint = xpF = 0;
  setPosition("announce", 350, 415, 5000, 28);
  ready = flagG = true;
  stopTimedLoop(rLo);
  rLo = timedLoop(13, roll);
  setText("explain", "");
  setText("board", "");
  showE(["Chinese", "English"]);
  idL = iDss = idea = iDp = first = ISn = false;
  changeScreen("sSc");
if (pAv === 0 && compo > 999){
  showElement("pip");
}else{
  hideElement("pip");
}if (liU&&flagged === 0&&banned === 0){
if(bTm<5||hiS>10||highS3>64||hS > 64||compo>tTime*4+800){
  flagged = 1;
  updateProfile();
}}if (!OTP){
setText("xpI", "XP: " + compo);
if (!tuP){
  playS("ClearCanvas","menuen");
}}else{
  OTP = false;
}if (liU){
  setT("sNT", "Click to show User ID", "点击以显示用户ID");
}else{
  setText("sNT", currentUID); 
}if (liU){
  hideElement("dev");
if (recentID === 1){
getKeyValue("bc", function(va){bc=va});
checkDevReply();
}}if(!hasNet){
  showElement("warn");
}else{
  getGlobal();
  hideElement("warn");
}if (tuP){
tuP = false;
playS("tutorialDisappear","chime");
}}
onEvent("SG1B", "click", function() {
  stopTimedLoop(rLo);
  gameStart();
});
function clickStart(){
  checkInternet();
  getGlobal();
  recTime();
  nSe = false;
  hideElement("Ot");
  tcv = 0;
  Cru = tr1 = true;
  sTi = getTime();
  tLO = timedLoop(10, function(){
  var cTem = getTime();
  var eTem = cTem - sTi;
if (eTem < 99000){
  eTem = (eTem/1000).toFixed(2);
}else{
  eTem = (99).toFixed(2);
}
  eIt = eTem;
  if (tr1){
if (iCh === 1){
  setText("tTa", "时间：" + eTem);
}else{
  setText("tTa", "Time Used: " + eTem);
}if (Math.round(eTem) < Math.round(bTm - 5)){
  setT("GOT", "Faster Faster Faster!", "快快快！");
}if (Math.round(bTm - eTem) < 6 && Math.round(bTm - eTem) > 0){
  setT("GOT", "Quick! You can still beat the record!", "快！你还有机会打败纪录！");
}if (Math.round(eTem) >= Math.round(bTm)){
  setT("GOT", "You can't beat the record this run...", "此轮无望打破纪录...");
}}});}
onEvent("gScre", "keypress", function(event) {
if (event.key == " " && nSe) {
  setImageURL("ptf", "icon://fa-desktop");
  isPC = true;
  hideElement("Ot");
  nSe = false;
  playS("Flashlight","menuse");
 }});
function gameStart(){
  isPC = tr1 = false;
  hideE(["b1", "hO"]);
  setPosition("t1", 55, 195, 25, 25);
  setPosition("t2", 195, 200, 25, 25);
  setPosition("t3", 40, 330, 25, 25);
  setPosition("t4", 190, 335, 25, 25);
  setImageURL("ptf", "icon://fa-tablet");
  nSe = Ifa = true;
  showElement("Ot");
  changeScreen("gScre");
  setImageURL("onePic", "assets/loading.png");
  a = 0;
  playS("BottleCork","buble");
  setT("Ot", "PC player? Press space button for a more graceful 16-second mission time limit!", "PC玩家？点击空格键以使用更加慷慨的任务时间限制！（16秒）");
  setT("GOT", "Start clicking whenever you want.", "你准备好了就可以开始点击。");
  setT("tTa", "Time Used: 0", "时间：0");
  setT("M1t1", "Score: 0", "分数：0");
  setT("oG", "Goal: 30", "目标：30");
}
onEvent("Om", "click", function() {
  endTime();
  start();
});
onEvent("t1", "click", function(){
  gOA();
  setPosition("t1", randomNumber(50, 250), randomNumber(60, 350), size, size);
});
onEvent("t2", "click", function(){
  gOA();
  setPosition("t2", randomNumber(50, 250), randomNumber(60, 350), size, size);
});
onEvent("t3", "click", function(){
  gOA();
  setPosition("t3", randomNumber(50, 250), randomNumber(60, 350), size, size);
});
onEvent("t4", "click", function(){
  gOA();
  setPosition("t4", randomNumber(50, 250), randomNumber(60, 350), size, size);
});
onEvent("G1BG", "click", function(){
  checkInternet();
  setText("xpA", "XP + "+Math.floor(a/2));
  showElement("Ot");
  endTime();
  changeScreen("wOne");
  var calc = 30 - a;
  updateProfile();
  setS("onePic", "63_pigfall", "elos");
	playS("EpicBellow","kali");
if (iCh === 1){
  setText("xO", "游戏结束！");
  setText("oBt", "就差" + calc + "分了！" );
if (hasNet){
  setText("gOg", "全球最佳时间：" + g1ba+"\n来自用户代码"+g1Id);
}else{
  setText("gOg", "无网络连接！无法获取全球纪录。");  
}if (g1ba === 99 && hasNet){
  setText("gOg", "数据更新中，请重试。");
}if (!liU){
  setText("gOg", "全球最佳时间：" + g1ba+"\n来自用户代码"+g1Id +"\n登录以参与！");
}if (banned === 1){
  setText("gOg", "你被封禁了，不能使用全球纪录。");
}if (bTm === 99 && pBi === 99){
  setText("oBe", "尚没有最佳时间！");
}else{if (pBi > bTm){
setText("oBe", "最佳时间：" + bTm);
}else{
  setText("oBe", "最佳时间：" + pBi);
}}}else{
  setText("xO", "Game Over!");
  setText("oBt", "Only " + calc + " points left!" );
if (hasNet){
  setText("gOg", "Global Best Time: " + g1ba + "\nBy User Serial "+ g1Id);
}else{
  setText("gOg", "Internet lost! cannot get global best.");
}if (g1ba === 99 && hasNet){
  setText("gOg", "Refreshing data, try again later.");
}if (!liU){
  setText("gOg", "Global Best Time: " + g1ba + "\nBy User Serial "+ g1Id+"\nLog in to participate!");
}if (banned === 1){
  setText("gOg", "You're banned from using Global High Score.");
}if (bTm === 99 && pBi === 99){
  setText("oBe", "No Best Time yet!");
}else{if (pBi > bTm){
  setText("oBe", "Best Time: " + bTm);
}else{
  setText("oBe", "Best Time: " + pBi);
}}}});
function gOA(){
  a++;
  g1C++;
  size = randomNumber(25, 45);
  if (!tr1){
  clickStart();
  playS("BonusBox","idolge");
}if (tcv === 0){
	tcv = 1;
  }else{
	tcv = 0;
	compo++;
  }if (iCh === 1){
  setText("M1t1", "分数： " + a);
}else{
  setText("M1t1", "Score: " + a);
}if (a >= 30){
  checkInternet();
  endTime();
  xpF += 15;
  var tE = eIt*100;
  var bE = bTm*100;
  var cE = pBi*100;
  var dE = g1ba*100;
  showElement("Ot");
	a = 0;
  Ifa = false;
  hWo++;
  changeScreen("wOne");
  quickPC();
  setS("onePic", "78_x_marks_spot", "ewin");
	playS("GiftBox","charl");
if (!Ifa && tE < bE){
  showElement("hO");
  compo += 10;
  xpF += 10;
  bTm = eIt;
  bE = eIt*10;
if (iCh === 1){
  setImageURL("hO", "assets/bChi.png");
}else{
  setImageURL("hO", "assets/bEng.png");
}}if (isPC && !Ifa && tE < cE){
  pBi = eIt;
if (bTm > pBi){
  bTm = eIt;
  showElement("hO");
if (iCh === 1){
  setImageURL("hO", "assets/bChi.png");
}else{
  setImageURL("hO", "assets/bEng.png");
}}}if (bE*10 < dE && hasNet && banned === 0 && liU){
setKeyValue("g1g", bTm, function(){});
setKeyValue("g1d", recentID, function(){});
jsn = g1Id;
remindBeat(1);
g1ba = bTm;
g1Id = recentID;
xpF += 200;
compo += 200;
showElement("b1");
}
setText("xpA", "XP + "+xpF);
updateProfile();
setT("xO", "You Won!", "你赢了！");
if (iCh === 1){
  setText("oBt", "你的时间：" + eIt);
if (hasNet){
  setText("gOg","全球最佳时间：" + g1ba+"\n来自用户代码"+g1Id);
}else{
  setText("gOg", "无网络连接！无法获取全球纪录。");  
}if (g1ba === 99 && hasNet){
  setText("gOg", "数据更新中，请重试。");    
}if (!liU){
  setText("gOg", "全球最佳时间：" + g1ba+"\n来自用户代码"+g1Id +"\n登录以参与!");
}if (banned === 1){
  setText("gOg", "你被封禁了，不能使用全球纪录。");
}if (pBi > bTm){
  setText("oBe", "最佳时间： " + bTm);
}else{
  setText("oBe", "最佳时间： " + pBi);
}}else{
  setText("oBt", "Your Time: " + eIt);
if (hasNet){
  setText("gOg", "Global Best Time: " + g1ba+ "\nBy User Serial "+ g1Id);
}else{
  setText("gOg", "Internet lost! cannot get global best.");
}if (g1ba === 99 && hasNet){
  setText("gOg", "Refreshing data, try again later.");
}if (!liU){
  setText("gOg", "Global Best Time: " + g1ba + "\nBy User Serial "+ g1Id+"\nLog in to participate!");
}if (banned === 1){
  setText("gOg", "You're banned from using Global High Score.");
}if (pBi > bTm){
  setText("oBe", "Best Time: " + bTm);
}else{
  setText("oBe", "Best Time: " + pBi);
}}}else{
  updateProfile();
}}
onEvent("eO", "click", function() {
  xpF = 0;
  gameStart();
});
onEvent("winTo", "click", function() {
  start();
});
onEvent("SG2B", "click", function() {
  stopTimedLoop(rLo);
  firstDeal();
});
function firstDeal(){
  recTime();
  checkInternet();
  getGlobal();
  hideElement("high2");
  changeScreen("secG");
  setImageURL("twoWo", "assets/loading.png");
  aDa = pDa = true;
  dealS = randomNumber(1, 10)+randomNumber(1, 9);
  playSc = randomNumber(1, 10)+randomNumber(1, 10);
  playS("BottleCork","buble");
  setT("m2T2", "Blackjack!", "21点!");
if (iCh === 1){
  setText("dealS", "庄家分数：" + dealS);
  setText("playSc", "玩家分数： " + playSc);
}else{
  setText("dealS", "Dealer Score: " + dealS);
  setText("playSc", "Player Score: " + playSc);
}
  normCheck();
}
function dealerAI(){
if (playSc <= dealS && !pDa){
  aDa = false;
}else if (dealS < 17){
  aDa = true;
  dealS = randomNumber(1, 10)+ dealS;
if (dealS === 21){
  var rand = randomNumber(1,2);
if (rand === 1){
  dealS = 20;
}}if (iCh === 1){
  setText("dealS", "庄家分数：" + dealS);
}else{
  setText("dealS", "Dealer Score: " + dealS);
}if (!aDa && !pDa || dealS > 21 || playSc > 21){
  if (!pDa){
sbug = false;
check();    
}}
  normCheck();
}else{
  aDa = false;
}}
onEvent("tD", "click", function() {
  sbug = true;
  pDa = true;
  dealerAI();
  deal();
});
onEvent("toP", "click", function() {
 pDa = false;
 dealerAI();
 if (!aDa || !pDa || dealS > 21 || playSc > 21){
  check();
}});
function deal(){
  switch(playSc){
    case 20:
  playSc = randomNumber(1, 7)+ playSc;
  break;
    case 19:
  playSc = randomNumber(1, 8)+ playSc;
  break;
    case 18:
  playSc = randomNumber(1, 9)+ playSc;
  break;
    default:
  playSc = randomNumber(1, 10)+ playSc;
}
  checkInternet();
  normCheck();
if (iCh === 1){
  setText("playSc", "玩家分数：" + playSc);
}else{
  setText("playSc", "Player Score: " + playSc);
}if (!aDa && !pDa || dealS > 21 || playSc > 21){
  check();  
}else if (sbug){
  playS("Flashlight","menuse");
}}
function normCheck(){
if (playSc < 12){
  setT("2Rem", "You're too low! You should deal.", "太低了！你应该拿牌。");
}if (playSc < 17 && playSc > 11){
  setT("2Rem", "Deal or pass!", "拿牌或停牌！");
}if (playSc > 16){
  setT("2Rem", "Careful! Deal can get you busted!", "小心！拿牌可能会让你爆掉！");
}if (playSc === dealS){
  setT("2Rem", "You should draw since dealer has a half-point advantage!", "庄家半点优势，你应该拿牌。");
}if (dealS === 21){
  setT("2Rem", "Just... don't bother... you lost already.", "别垂死挣扎了。你输了。");
}}
function loseSet(){
  endTime();
  g2L++;
  updateProfile();
  setText("xpB", "XP + 0");
  checkInternet();
  changeScreen("twoWon");
  teK = 0;
  setS("twoWo", "63_pigfall", "elos");
if (!ocom){
  ocom = true;
  playS("EpicBellow","kali");
  setT("twoWoT", "Game Over!", "游戏结束！");
}if (iCh === 1){
  setText("yiS", "当前连胜：" + teK);
  setText("hiS", "最高连胜：" + hiS);
if (hasNet){
  setText("gH", "全球最佳连胜：" + g2ba+"\n来自用户代码"+g2Id);
}else{
  setText("gH", "无网络连接！无法获取全球纪录。");
}if (g1ba === 0 && hasNet){
  setText("gH", "数据更新中，请重试。");
}if (!liU){
  setText("gH", "全球最佳连胜：" + g2ba+"\n来自用户代码"+g2Id+"\n登录以参与！");
}if (banned === 1){
  setText("gOg", "你被封禁了，不能使用全球纪录。");
}}else{
  setText("yiS", "Current Streak: " + teK);
  setText("hiS", "High Streak: " + hiS);
if (hasNet){
  setText("gH", "Global Best Streak: " + g2ba+ "\nBy User Serial "+ g2Id);
}else{
  setText("gH", "Internet lost! cannot get global best.");
}if (g1ba === 0 && hasNet){
  setText("gH", "Refreshing data, try again later.");
}if (!liU){
  setText("gH", "Global Best Streak: " + g2ba+ "\nBy User Serial "+ g2Id+"\nLog in to participate!");
}if (banned === 1){
  setText("gOg", "You're banned from using Global High Score.");
}}}
function winSet(){
  checkInternet();
  endTime();
  changeScreen("twoWon");
  setS("twoWo", "78_x_marks_spot", "ewin");
  if (!ocom){
    compo += 4;
    xpF += 4;
    ocom = true;
    hWt++;
    teK++;
    quickPC();
    playS("GiftBox","charl");
  }if (teK > hiS){
  hiS = teK;
  showElement("high2");
  compo += 10;
  xpF += 10;
  if (iCh === 1){
  setImageURL("high2", "assets/bChi.png");
}else{
  setImageURL("high2", "assets/bEng.png");
}}
updateProfile();
if (hiS > g2ba && hasNet && banned === 0 && liU){
  setKeyValue("g2g", hiS, function(){});
  setKeyValue("g2d", recentID, function(){});
  jsn = g2Id;
  remindBeat(2);
  compo += 200;
  xpF += 200;
  g2ba = hiS;
  g2Id = recentID;
  showElement("b2");
}
  setText("xpB", "XP + "+xpF);
  setT("twoWoT", "You Won!", "你赢了！");
if (iCh === 1){
  if (hasNet){
  setText("yiS", "当前连胜：" + teK);
  setText("hiS", "最高连胜：" + hiS);
  setText("gH", "全球最佳连胜：" + g2ba+"\n来自用户代码"+g2Id);
  }else{
  setText("gH", "无网络连接！无法获取全球纪录。");
}if (g1ba === 0 && hasNet){
  setText("gH", "数据更新中，请重试。");
  }if (!liU){
  setText("gH", "全球最佳连胜：" + g2ba+"\n来自用户代码"+g2Id+"\n登录以参与！");
  }if (banned === 1){
  setText("gOg", "你被封禁了，不能使用全球纪录。");
}}else{
  setText("yiS", "Current Streak: " + teK);
  setText("hiS", "High Streak: " + hiS);
if (hasNet){
  setText("gH", "Global Best Streak: " + g2ba+ "\nBy User Serial "+ g2Id);
}else{
  setText("gH", "Internet lost! cannot get global best.");
}if (g1ba === 0 && hasNet){
  setText("gH", "Refreshing data, try again later.");
}if (!liU){
  setText("gH", "Global Best Streak: " + g2ba+ "\nBy User Serial "+ g2Id+"\nLog in to participate!");
}if (banned === 1){
  setText("gOg", "You're banned from using Global High Score.");
}}}
function check(){
if (iCh === 1){
  setText("deF", "庄家分数：" + dealS);
  setText("plF", "玩家分数：" + playSc);
}else{
  setText("deF", "Dealer Final: " + dealS);
  setText("plF", "Player Final: " + playSc);
}if (dealS > 21 && playSc < 22){
  winSet();
  setT("woR", "Dealer Bust!", "庄家爆掉！");
  return;
}if (playSc > 21 && dealS < 22){
  loseSet();
  setT("woR", "Busted!", "玩家爆掉");
  return;
}if (playSc > 21 && dealS > 21){
  loseSet();
  setT("woR", "Player Busted First!", "玩家先爆掉！");
  return;
}if (playSc > dealS && !aDa && playSc < 22){
  winSet();
  setT("woR", "Your Score Is Higher!", "玩家分数高！");
  return;
}if (dealS > playSc && !pDa && dealS < 22){
  loseSet();
  setT("woR", "Dealer score Is Higher!", "庄家分数高！");
  return;
}if (playSc > dealS && aDa){
  dealerAI();
  check();
}if (!pDa && playSc === dealS && playSc < 22 && dealS < 22){
  loseSet();
  setT("woR", "Dealer half-point advantage!", "庄家半点优势！");
  return;
}}
onEvent("twoR", "click", function() {
 ocom = false;
 start();
});
onEvent("twoRep", "click", function() {
  ocom = false;
  xpF = 0;
  firstDeal();
});
onEvent("tM", "click", function() {
  playS("UIinactive", "upp");
  endTime();
  if (teK > 1){
    showE(["text_area1", "warnd","button2", "button4"]);
  }else{
    start();
}});
onEvent("button2", "click", function( ) {
	teK -=2;
	hideE(["text_area1", "warnd","button2", "button4"]);
	start();
});
onEvent("button4", "click", function( ) {
  hideE(["text_area1", "warnd","button2", "button4"]);
	playS("Flashlight","menuse");
	recTime();
});
onEvent("SG3B", "click", function() {
  stopTimedLoop(rLo);
  g3Start();
});
function g3Start(){
  checkInternet();
  setT("g3Over", "Game Over!", "游戏结束！");
  setT("bsLabel", "Best Score:", "最佳成绩：");
  setT("fsLabel", "Final Score:", "最终成绩：");
  setT("sLa", "Score:", "分数：");
  setT("bDi", "Best: ", "纪录：");
  setT("lLa", "Life:", "生命：");
  setT("label5", "PC: Space Button start, arrow key control\nPhone: Press red Paddle to start, press left / right half of screen to move", "电脑：空格键开始，左右方向键控制\n手机：点击红色跳板开始，点击左半屏幕，右半屏幕移动跳板。");
  getGlobal();
  hideE(["b3", "high3", "tL", "tR"]);
  setText("bestSD", highS3);
  changeScreen("game");
  lives = 2;
  score = 0;
  reset();
  tLT = timedLoop(17, update);
  playS("BottleCork", "buble");
}
onEvent("game", "keydown", function(event) {
if (event.key == "Left") {
  moL = true;
}else if (event.key == "Right") {
  moR = true;
}});
onEvent("game", "keyup", function(event) {
if (event.key == "Left") {
  moL = false;
}else if (event.key == "Right") {
  moR = false;
}});
onEvent("game", "keypress", function(event) {
if (event.key == " " && isReset && !stTrigger) {
  stTrigger = true;
  startGame();
  hideE(["label5", "3Menu"]);
}});
onEvent("pA", "click", function() {
  xpF = 0;
  g3Start();
});
function update() {
  movePaddle();
  checkBounce();
  collectCoin();
  baX += xSp;
  baY += ySp;
  paX += paS;
  setText("score", score);
  setText("lives", lives);
  setPosition("ball", baX, baY);
  setPosition("paddle", paX, paY);
  setPosition("coin", coX, coY);
}
function checkBounce() {
if (baX + baD > 320 || baX < 0) {
  xSp = -xSp;
  playS("Flashlight", "menuse");
}else if (baY < 0 && !caB) {
  ySp = -ySp;
  caB = true;
  playS("Flashlight", "menuse");
}if (cheCol(baX, baY, baD, baD, paX, paY, paH, paW) && caB) {
  caB = false;
  ySp = -ySp;
  playS("Flashlight", "menuse");
}if (baY + baD > 450) {
  stTrigger = false;
  g3L++;
  round = 0;
  lives = lives - 1;
  reset();
  playS("EpicBellow", "kali");
 }}
function movePaddle() {
if (moL && !moR && paX > 0) {
  switch(round){
    case 4:
  paS = -6;break;
    case 5:
    case 6:
  paS = -7;break;
    case 1:
    case 2:
    case 3:
  paS = -8;break;
    default:
  paS = -5;    
}}else if (moR && !moL && paX + paW < 320) {
  switch(round){
    case 4:
  paS = 6;break;
    case 5:
    case 6:
  paS = 7;break;
    case 1:
    case 2:
    case 3:
  paS = 8;break;
    default:
  paS = 5;    
}}else{
  paS = 0;
}}
function collectCoin() {
if (cheCol(baX, baY, baD, baD, coX, coY, coD, coD)) {
  score++;
  coin++;
  round++;
  updateProfile();
  xpF += 3;
  compo += 3;
  coX = 500;
  quickPC();
if (score > highS3){
  showElement("high3");
  setText("bestSD", score);
if (iCh === 1){
  setImageURL("high3", "assets/bChi.png");
}else{
  setImageURL("high3", "assets/bEng.png");
}}
  playS("BonusBox", "idolge");
if (ySp < 0 && ySp > -20) {
  ySp--;
}else if (ySp > 0 && ySp < 20) {
  ySp++;
}if (xSp < 0 && xSp > -15) {
  xSp--;
}else if (xSp > 0 && xSp < 15) {
  xSp++;
}
  setTimeout(function(){coX = randomNumber(0, 320-coD);}, 1500);
}}
function reset() {
  endTime();
  hideE(["tL", "tR"]);
  xSp = ySp = paS = 0;
  moL = moR = false;
  isReset = caB = true;
  showE(["label5", "3Menu"]);
  quickPC();
  paX = 115;
  coX = 135;
  baX = 147;
  baY = 125;
if (lives == 0) {
  endGame();
}}
function startGame() {
  ySp = 3;
  recTime();
while (xSp === 0) {
  xSp = randomNumber(-1,1);
}}
function endGame() {
  checkInternet();
  stopTimedLoop(tLT);
  hideE(["tL", "tR"]);
  setText("fiS", score);
if (score > highS3){
  highS3 = score;
  xpF += 10;
  compo += 10;
}if (highS3 > g3ba && hasNet && banned === 0 && liU){
  setKeyValue("g3g", highS3, function(){});
  setKeyValue("g3d", recentID, function(){});
  jsn = g3Id;
  remindBeat(3);
  xpF += 200;
  compo += 200;
  g3ba = highS3;
  g3Id = recentID;
  showElement("b3");
}if (iCh === 1){
if (hasNet){
  setText("globalH3", "全球最佳：" + g3ba+"\n来自用户代码"+g3Id);
}else{
  setText("globalH3", "无网络连接！无法获取全球纪录。");  
}if (g3ba === 0 && hasNet){
  setText("globalH3", "数据更新中，请重试。");    
}if (!liU){
  setText("globalH3", "全球最佳：" + g3ba+"\n来自用户代码"+g3Id+"\n登录以参与！");
}if (banned === 1){
  setText("gOg", "你被封禁了，不能使用全球纪录。");  
}}else{if (hasNet){
  setText("globalH3", "Global Best: " + g3ba+ "\nBy User Serial "+ g3Id);
}else{
  setText("globalH3", "Internet lost! cannot get global best.");  
}if (g3ba === 0 && hasNet){
  setText("globalH3", "Refreshing data, try again later.");    
}if (!liU){
  setText("globalH3", "Global Best: " + g3ba+ "\nBy User Serial "+ g3Id+"\nLog in to participate!");
}if (banned === 1){
  setText("gOg", "You're banned from using Global High Score.");  
}}
  setText("xpG", "XP + "+xpF);
  setText("beS", highS3);
  changeScreen("gaO");
  quickPC();
  updateProfile();
}
function cheCol(x, y, h, w, X, Y, H, W) {
  return  x + w > X && x < X + W && y < Y + H && y + h > Y;
}
onEvent("threeEM", "click", function() {
  start();
});
onEvent("3Menu", "click", function() {
if (score > highS3){
  highS3 = score;
  compo += 10;
}
  endTime();
  stopTimedLoop(tLT);
  reset();
  updateProfile();
  start();
});
onEvent("paddle", "click", function() {
  hideE(["label5", "3Menu"]);
  showE(["tL", "tR"]);
if (!stTrigger){
  startGame();
  stTrigger = true;
}});
onEvent("tR", "click", function() {
if (paX < 210){
  paX += 50;
}});
onEvent("tL", "click", function() {
if (paX > 20){
  paX -= 50;
}});
onEvent("SLB", "click", function() {
  stopTimedLoop(rLo);
  lastStart();
});
function getBox(){
  oneRand = randomNumber(20, 240);
if (pts < 9){
  twoRand = randomNumber(40, 60);
}else if (8 < pts && pts < 17){
  twoRand = randomNumber(36, 53);
}else if (16 < pts && pts < 33){
  twoRand = randomNumber(32, 46);
}else if (32 < pts && pts < 49){
  twoRand = randomNumber(28, 40);
}else if (48 < pts && pts < 65){
  twoRand = randomNumber(25, 34); 
}else if (64 < pts && pts < 81){
  twoRand = randomNumber(22, 29);  
}else if (80 < pts && pts < 89){
  twoRand = randomNumber(19, 24);
}else{
  twoRand = randomNumber(17, 20);
}
  setPosition("hitBox", oneRand, 120, twoRand, 10);
}
function checker(){
if (iCh === 1){
  setText("ptsText", "分数：" +pts);
}else{
  setText("ptsText", "Points: " +pts);
}if (x > 20 && x < 290){
  x += sSpeed;
  setPosition("strip", x, 117, 3, 16);
}else{
  sSpeed = -sSpeed;
  x += sSpeed;
  setPosition("strip", x, 117, 3, 16);
}if (pts > 23 && lastT == 0){
  addspeed();
  lastT = 1;
}else if (pts > 39 && lastT == 1){
  addspeed();
  lastT = 2;
}else if (pts > 55 && lastT == 2){
  addspeed();
  lastT = 3;
}else if (pts > 62 && lastT == 3){
  addspeed();
  lastT = 4;
}}
function addspeed(){
  if (sSpeed > 0){
    sSpeed++;
  }else{
    sSpeed--;
}}
onEvent("clickBut", "click", function() {
  checkS();
  sPR = false;
});
onEvent("lG", "keypress", function(event){
if (event.key == " " && !lastF && sPR){
  checkS();
}});
function checkS(){
stopTimedLoop(tLT);
if (x > oneRand - 3 && x - 6 < oneRand + twoRand){
  pts++;
  totalP++;
  compo += 2;
  xpF += 2;
  getBox();
  tLT = timedLoop(27, checker);
  playS("HitGoldCrate", "dmgo");
if (pts > hS){
  hS = pts;
if (!hPR){
  compo += 10;
  xpF += 10;
  hPR = true;
}if (iCh === 1){
  setImageURL("high4", "assets/bChi.png");
}else{
  setImageURL("high4", "assets/bEng.png");
}}if (iCh === 1){
  setText("highST", "最高分：" + hS);
}else{
  setText("highST", "Highest: " + hS);
}
  quickPC();
}else{
  checkInternet();
  endTime();
  showElement("H4");
if (hS > g4ba && hasNet && banned === 0 && liU){
  setKeyValue("g4g", hS, function(){});
  setKeyValue("g4d", recentID, function(){});
  jsn = g4Id;
  remindBeat(4);
  g4ba = hS;
  g4Id = recentID;
  showElement("b4");
if (!gTrig){
  compo += 200;
  xpF += 200;
  gTrig = true;
}}
  playS("EpicBellow", "kali");
if (hPR){
  showElement("high4");
  hPR = false;
}if (iCh === 1){
  if (hasNet){
setText("H4", "全球最高分：" + g4ba+"\n来自用户代码"+g4Id);
  }else{
setText("H4", "无网络连接！无法获取全球纪录。");
  }if (g4ba === 0 && hasNet){
setText("H4", "数据更新中，请重试。");
  }if (!liU){
setText("H4", "全球最高分：" + g4ba+"\n来自用户代码"+g4Id+"\n登录以参与！");
  }if (banned === 1){
setText("gOg", "你被封禁了，不能使用全球纪录。");
}}else{if (hasNet){
  setText("H4", "Global High Score: " + g4ba+ "\nBy User Serial "+ g4Id);
}else{
  setText("H4", "Internet lost! cannot get global best.");
}if (g4ba === 0 && hasNet){
  setText("H4", "Refreshing data, try again later.");
}if (!liU){
  setText("H4", "Global High Score: " + g4ba+ "\nBy User Serial "+ g4Id+"\nLog in to participate!");
}if (banned === 1){
  setText("gOg", "You're banned from using Global High Score.");
}}
  lastF = true;
  showE(["lastFail", "image6", "lM", "lR"]);
  setText("xpH", "XP + "+xpF);
  pts = lastT = 0;
  hideElement("clickBut");
  updateProfile();
}}
onEvent("lR", "click", function() {
  xpF = 0;
  lastStart();
});
function lastStart(){
  checkInternet();
  getGlobal();
  recTime();
  hideE(["b4", "H4", "high4", "image6", "lastFail", "lM", "lR"]);
  sPR = true;
  lastF = gTrig = false;
  pts = 0;
  sSpeed = 4;
  changeScreen("lG");
  showElement("clickBut");
  getBox();
  tLT = timedLoop(27, checker);
  setT("lastFail", "Game Over!", "游戏结束！");
  setT("clickBut", "Click (Space button)", "点（空格键）");
if (iCh === 1){
  setText("highST", "最高分：" + hS);
}else{
  setText("highST", "Highest: " + hS);
}
  playS("BottleCork", "buble");
if (x < 50){
  x += 20;
}}
onEvent("lM", "click", function() {
  start();
});
function quickPC(){
if (m1 === 0 && hWo > 9){
  showElement("excla");
}else if (m2 === 0 && hWt > 79){
  showElement("excla");
}else if (m3=== 0  && bTm <= 8){
  showElement("excla");
}else if (m3=== 0  && pBi <= 16){
  showElement("excla");
}else if (m4=== 0  && hiS > 6){
  showElement("excla");
}else if (m5=== 0  && coin > 209){
  showElement("excla");
}else if (m6=== 0  && highS3 > 29){
  showElement("excla");
}else if (m7=== 0  && totalP > 279){
  showElement("excla");
}else if (m8=== 0  && hS > 39){
  showElement("excla");
}else if (m10=== 0  && acTi > 99){
  showElement("excla");
}else{
  hideElement("excla");
}}
function xpAdd(){
compo += 100;
  xpF += 100;
}
function progressCheck(){
all = 0;
checkInternet();
hideElement("excla");
if (hWo > 9 && m1=== 0){
  m1 = 1;
  xpAdd();
}if (hWt > 79 && m2=== 0){
  m2 = 1;
  xpAdd();
}if (bTm <= 8 && m3=== 0){
  m3 = 1;
  xpAdd();
}if (pBi <= 16 && m3=== 0){
  m3 = 1;
  xpAdd();
}if (hiS > 5 && m4=== 0){
  m4 = 1;
  xpAdd();
}if (highS3 > 29 && m6=== 0){
  m6 = 1;
  xpAdd();
}if (coin > 209 && m5=== 0){
  m5 = 1;
  xpAdd();
}if (totalP > 279 && m7=== 0){
  m7 = 1;
  xpAdd();
}if (hS > 39 && m8=== 0){
  m8 = 1;
  xpAdd();
}if (acTi > 99 && m10=== 0){
  m10 = 1;
  xpAdd();
}if (m1 === 1){
  all++;
  setImageURL("mOne","icon://fa-check-circle");
}else{
  setImageURL("mOne","icon://fa-times-circle");
}if (m2 === 1){
  all++;
  setImageURL("mThree","icon://fa-check-circle");
}else{
  setImageURL("mThree","icon://fa-times-circle");
}if (m3 === 1){
  all++;
  setImageURL("mTwo","icon://fa-check-circle");
}else{
  setImageURL("mTwo","icon://fa-times-circle");
}if (m4 === 1){
  all++;
  setImageURL("mFour","icon://fa-check-circle");
}else{
  setImageURL("mFour","icon://fa-times-circle");
}if (m5 === 1){
  all++;
  setImageURL("mFive","icon://fa-check-circle");
}else{
  setImageURL("mFive","icon://fa-times-circle");
}if (m6 === 1){
  all++;
  setImageURL("mSix","icon://fa-check-circle");
}else{
  setImageURL("mSix","icon://fa-times-circle");
}if (m7 === 1){
  all++;
  setImageURL("mSeven","icon://fa-check-circle");
}else{
  setImageURL("mSeven","icon://fa-times-circle");
}if (m8 === 1){
  all++;
  setImageURL("mEight","icon://fa-check-circle");
}else{
  setImageURL("mEight","icon://fa-times-circle");
}if (m9 === 1){
  all++;
  setImageURL("mNine","icon://fa-check-circle");
}else{
  setImageURL("mNine","icon://fa-times-circle");
}if (m10 === 1){
  all++;
  setImageURL("mTen","icon://fa-check-circle");
}else{
  setImageURL("mTen","icon://fa-times-circle");
}if (xpF !== 0){
  setText("xpZ", "XP + "+xpF);
}else{
  setText("xpZ", "");
}switch(all){
  case 0:
setS("ttp", "69_what_a_trip", "bron");
setT("progress", "Progress: 0/10\nNow go play some games!", "进度：0/10\n快去玩游戏吧！");
break;
  case 1:
setS("ttp", "69_what_a_trip", "bron");
setT("progress", "Progress: 1/10\nWhat a great start!", "进度：1/10\n不错！很好的开始。"); 
break;
  case 2:
setS("ttp", "70_pig_crusade", "silv");
setT("progress", "Progress: 2/10\nVery good! Keep it goin'!", "进度：2/10\n非常好！继续加油！");
break;
  case 3:
setS("ttp", "70_pig_crusade", "silv");
setT("progress", "Progress: 3/10\nNice! What's next?", "进度：3/10\n不错！继续坚持！");
break;
  case 4:
setS("ttp", "71_lost_pork_raiders", "goldt");
setT("progress", "Progress: 4/10\nAlmost half done!", "进度：4/10\n马上就完成一半了！");
break;
  case 5:
setS("ttp", "71_lost_pork_raiders", "goldt");
setT("progress", "Progress: 5/10\nHalf done! Half left!", "进度：5/10\n完成一半！还剩一半！");
break;
  case 6:
setS("ttp", "newr1", "rubyt");
setT("progress", "Progress: 6/10\nVery good! Keep it goin'!", "进度：6/10\n非常好！继续加油！");
break;
  case 7:
setS("ttp", "newr1", "rubyt");
setT("progress", "Progress: 7/10\nVery good! What's next?", "进度：7/10\n不错！下一个是什么？");
break;
  case 8:
setS("ttp", "newr2", "sapph");
setT("progress", "Progress: 8/10\nSolid work! Keep it up!", "进度：8/10\n非常好！继续加油！");
break;
  case 9:
setS("ttp", "newr2", "sapph");
setT("progress", "Progress: 9/10\nAlmost there! What's left?", "进度：9/10\n马上就通关了！还差哪个？");
break;
  case 10:
setS("ttp", "muffin", "diam");
setT("progress", "Progress: 10/10\nI salute you, my friend.", "进度：10/10\n我向你致敬，我的朋友。");
break;
}}
function hintNumCalc(){
if (hWo < 11){
  OAd = 10 - hWo;
}else{
  OAd = 0;
}if(hWt < 81){
  tAd = 80 - hWt;
}else{
  tAd = 0;
}if (coin < 211){
  hAd = 210 - coin;
}else{
  hAd = 0;
}if(totalP < 281){
  fAd = 280 - totalP;
}else{
  fAd = 0;
}if (acTi < 100){
  eAd = 100 - acTi;
}else{
  eAd = 0;
}}
onEvent("ttB", "click", function() {
  stopTimedLoop(rLo);
  changeScreen("ttScr");
  progressCheck();
  updateProfile();
  hintNumCalc();
  setT("ttt", "Tutorial", "教程");
  setS("tro1", "69_what_a_trip", "bron");
for (var i = 2; i < 7; i++){
  setS("tro"+i, "questio", "questi");
}if (all > 1){
  setS("tro2", "70_pig_crusade", "silv");       
}if (all > 3){
  setS("tro3", "71_lost_pork_raiders", "goldt");       
}if (all > 5){
  setS("tro4", "newr1", "rubyt");
}if (all > 7){
  setS("tro5", "newr2", "sapph");
}if (all > 9){
  setS("tro6", "muffin", "diam");     
}if (iCh === 1){
  setText("tt1", "终极点击：以最快速度点击小手！\n任务1：完成10局游戏（还剩" + OAd + "局）\n任务2：8秒及以内完成一局（PC端可选：16秒及以内)");
  setText("tt2", "修改版21点：你和庄家的牌谁的大？别超过21！\n任务3：赢80局游戏（还剩" + tAd + "局）\n任务4：6连胜一次");
  setText("tt3", "改良版撞球：别让球掉下屏幕！你有2次机会！\n任务5：吃掉210个金币（还剩" + hAd + "个)\n任务6：最高分达到30");
  setText("tt4", "滑块：寻找绝佳时机点击！\n任务7：完成280次准确点击（还剩" + fAd + "次）\n任务8：最高分达到40");
  setText("tt5", "登陆玩家俱乐部-任务包：\n任务9：触发藏宝图秘密\n任务10：登录100次 （还剩" +eAd+ "次）");
if (banned === 1){
  isB = "是";
}else{
  isB = "否";
}if (answered){
  isF = "是";
}else{
  isF = "否";
}}else{
  setText("tt1", "Ultimate Click: Click the little hand as fast as you can!\n Mission 1: Complete 10 games ( " + OAd + " left )\nMission 2: Complete a round in 8 seconds or less (PC available: 16 seconds or less)");
  setText("tt2", "Modified Blackjack: Who's number is bigger? You or the dealer？Don't exceed 21!\nMission 3: Win 80 games ( " + tAd + " left )\nMission 4: Get a win streak of 6");
  setText("tt3", "Enhanced Pong: Keep the ball on the screen! You have 2 shots!\nMission 5:  Get 210 coins ( " + hAd + " left )\nMission 6: Get a high score of 30");
  setText("tt4", "Skillcheck: Get that perfect timing!\nMission 7: Complete 280 skillchecks ( " + fAd + " left )\nMission 8: Get a high score of 40");
  setText("tt5", "Logged-in Club - Mission Pack:\nMission 9: Trigger treasure map secret\nMission 10: Log in 100 times ( "+eAd+ " left )");
if (banned === 1){
  isB = "Yes";
}else{
  isB = "No";
}if (answered){
  isF = "Yes";
}else{
  isF = "No";
}}if (!liU){
  isB = "N/A";
  isF = "N/A";
}
  playS("TutorialAppears", "pagetur");
});
onEvent("s1", "click", function() {pSd("alienReveal");});
onEvent("s2", "click", function() {pSd("BonusBox");});
onEvent("s3", "click", function() {pSd("BottleCork");});
onEvent("s4", "click", function() {pSd("ClearCanvas");});
onEvent("s5", "click", function() {pSd("coin4");});
onEvent("s6", "click", function() {pSd("coinPack");});
onEvent("s7", "click", function() {pSd("eb2");});
onEvent("s8", "click", function() {pSd("EpicBellow");});
onEvent("s9", "click", function() {pSd("Flashlight");});
onEvent("s10", "click", function() {pSd("GiftBox");});
onEvent("s11", "click", function() {pSd("HitGoldCrate");});
onEvent("s12", "click", function() {pSd("JackpotPrice");});
onEvent("s13", "click", function() {pSd("JingleBell");});
onEvent("s14", "click", function() {pSd("LevelComplete");});
onEvent("s15", "click", function() {pSd("rewardDrop");});
onEvent("s16", "click", function() {pSd("sandbox");});
onEvent("s17", "click", function() {pSd("starLoop");});
onEvent("s18", "click", function() {pSd("TutorialAppears");});
onEvent("s19", "click", function() {pSd("tutorialDisappear");});
onEvent("s20", "click", function() {pSd("UIButton");});
onEvent("s21", "click", function() {pSd("UIinactive");});
onEvent("s22", "click", function() {pSd("woodHit");});
onEvent("s23", "click", function() {pSd("ankb");});
onEvent("s24", "click", function() {pSd("bomer");});
onEvent("s25", "click", function() {pSd("buble");});
onEvent("s26", "click", function() {pSd("charl");});
onEvent("s27", "click", function() {pSd("chime");});
onEvent("s28", "click", function() {pSd("dmgo");});
onEvent("s30", "click", function() {pSd("explod");});
onEvent("s31", "click", function() {pSd("gem2");});
onEvent("s32", "click", function() {pSd("idolge");});
onEvent("s33", "click", function() {pSd("kali");});
onEvent("s34", "click", function() {pSd("menuen");});
onEvent("s35", "click", function() {pSd("menure");});
onEvent("s36", "click", function() {pSd("menuse");});
onEvent("s37", "click", function() {pSd("paget");});
onEvent("s38", "click", function() {pSd("pagetur");});
onEvent("s39", "click", function() {pSd("paus");});
onEvent("s40", "click", function() {pSd("secrt");});
onEvent("s41", "click", function() {pSd("upp");});
onEvent("s42", "click", function() {pSd("slop1");});
onEvent("s43", "click", function() {pSd("slop2");});
function pSd(value){
if (stvar === 1){
  playSound("assets/" + value+"_s.mp3");
}else{
  playSound("assets/" + value+".mp3");    
}}
onEvent("s44", "click", function(){
if (stvar === 0){
  stvar = 1;
  setT("s44", "volume: high", "音量：高");
}else{
  stvar = 0;
  setT("s44", "volume: low", "音量：低");    
}});
onEvent("TUTmb", "click", function() {
  all = 0;
  setText("pSpe", "");
  tuP = true;
  start();
});
onEvent("ttp", "click", function() {
showE(["tropy","btn", "txa2", "bkdrop", "tro1", "tro2", "tro3", "tro4", "tro5", "tro6"]);
playS("rewardDrop", "menure");
});
onEvent("tro1", "click", function() {
  playS("JingleBell", "JingleBell");
});
onEvent("tro2", "click", function() {
  if (all > 1){
  playS("sandbox", "sandbox");    
}});
onEvent("tro3", "click", function() {
  if (all > 3){
  playS("LevelComplete", "LevelComplete");    
}});
onEvent("tro4", "click", function() {
  if (all > 5){
  playS("slop1", "slop1");
}});
onEvent("tro5", "click", function() {
  if (all > 7){
  playS("slop2", "slop2");
}});
onEvent("tro6", "click", function() {
  if (all > 9){
  playS("starLoop", "starLoop");  
}});
onEvent("btn", "click", function(){
  hideE(["tropy", "btn", "txa2", "bkdrop", "tro1", "tro2", "tro3", "tro4", "tro5", "tro6"]);
  playS("BottleCork","buble");
});
function guestCheck(){
  if (pD.toUpperCase().includes("GUEST")|| pD.includes("游客")){
  igO = true;
  }else{
  igO = false;
}}
onEvent("lAg", "click", function() {
if (uint < 1){
  uint++;
  hideElement("lAg");
  tLT = timedLoop(2000,function(){
  if (uint !== 0){
  showElement("lAg");
  stopTimedLoop(tLT);
}});
   playS("UIinactive", "upp");
if (liU){
  setT("loN", "Warning: You will be logged out, your progress is synced to the cloud, your local progress will reset. Press the button again to continue.", "警告：你将被登出，你的进度已保存云端，你的本地进度将清空。再次点击按钮以继续。");
}else{
  setT("loN", "Warning: It's not recommended to login as guest, as you will lose all progress after page refresh. Features like special mission, Support Tool, XP Ranking, and Global High Score will be unavailable. It's easy to create a user ID, and it's more fun! If you really want to login as guest, press the button again.", "警告：十分不建议游客登陆，因为无法同步游戏进度，且无法参与许多功能，例如特殊任务，反馈工具，XP排行和全球高分。创建用户ID十分简单-也能增添十分乐趣！如果你真的想使用游客登陆，再次点击按钮。");
}}else{
  guest();
  uint = 0;
}});
function guest(){
  setfir();
  hideE(["p6", "p5", "p4", "p3", "p2", "bell", "ppt", "profile", "cmB"]);
  stopTimedLoop();
  setText("uidG", "");
  setOriginal();
  resetProgress(0);
  setT("reminder", "Treat your User ID as your password. Forget User ID?", "把用户ID当成密码对待。忘记用户ID？");
if (iCh === 1){
  currentUID = "游客";
}else{
  currentUID = "Guest";
}
  gCT(0);
  liU = false;
  answered = false;
  start();
}
function resetProgress(va){
  answered = xO = yO = p2 = p3 = false;
  hWo = hWt = coin = pAv = highS3 = hiS = totalP = hS = BG = acTi = compo = tTime = g2L = g3L = g1C = m1 = m2 = m3 = m4 = m5 = m6 = m7 = m8 = m9 = m10 =  flagged =  banned = BG = BX = h1 = h2 = h3 = h4 = h5 = h6 = 0;
  bTm = pBi = 99;
  showElement("p1");
  hideE(["p2", "p3", "p4", "p5", "p6", "debugB"]);
  setOriginal();
  setbbone();
  setbaone();
  setfir();
  sound = 1;
if (va === 0){
  recentID = currentUID = null;
}}
function miniC(){
if (plce === 0){
  readRecords("test", {}, function(value){
  testC = value;
});
plce = timedLoop(1000,function(){
if (testC === 0){
  errD++;
if (errD > 6){
  showElement("devC");
}}else{
  stopTimedLoop(plce);
  errD = testC = plce = 0;
  hideElement("devC");
}});}}
function checkI(){
readRecords("test", {}, function(value){
  testP = value;
});
  var token = false;
  var holder = timedLoop(3000,function(){
if (testP !== 0 ||token){
  token = false;
  tiFa = true;
  stopTimedLoop(holder);
}});
  var place = timedLoop(1000,function(){
if (testP === 0){
  token = false;
  errC++;
if (errC > 6){
  showE(["warn2", "FW", "WF"]);
  doError(5);
if (iCh === 1){
  setText("WF", "错误5 - syncHangHasNetX"+errC);
}else{
  setText("WF", "Error 5 - syncHangHasNetX"+errC);
}}}else{
  token = true;
  stopTimedLoop(place);
  errC = testP = 0;
  revert();
  hideE(["warn2", "FW", "WF"]);
}});}
function revert(){
  setStyle("MLC1", "background: #679c4c");
  setImageURL("decor","assets/restor.jpg");
  setT("eI", "Contact Restored", "联络已恢复");
  setT("anno", "All services are back online. Thanks for your patience!", "所有服务已恢复正常。感谢您的耐心！");
}
function onSync(){
	isSync = true;
for (var i = 0; i < 14; i++){
  showElement("sy"+i);
}}
function offSync(){
	isSync = false;
for (var i = 0; i < 14; i++){
  hideElement("sy"+i);
}}
function hideNShow(){
  showE(["demo", "autoE", "aYes", "aNo"]);
  idL = iDss = idea = iDp = false;
  hideE(["delete", "uidG", "image3", "reminder", "GUIDB", "lAg", "cmB", "credit", "English", "Chinese", "image1"]);
  setText("uidG", "");
}
function normalSave(){
  checkI();
  cPD.bb = bb;        cPD.ba = ba;      cPD.sD = sDate;     cPD.lD = sDate;
  cPD.BX = BX;        cPD.BD = BD;      cPD.UID = pD;       cPD.m1 = m1;
  cPD.m2 = m2;        cPD.m3 = m3;      cPD.m4 = m4;        cPD.m5 = m5;
  cPD.m6 = m6;        cPD.m7 = m7;      cPD.m8 = m8;        cPD.m9 = m9;
  cPD.m10 = m10;      cPD.w1 = hWo;     cPD.w2 = hWt;       cPD.l = iCh;
  cPD.s = sound;      cPD.g1H = bTm;    cPD.g2H = hiS;      cPD.g3H = highS3;
  cPD.g3C = coin;     cPD.g4H = hS;     cPD.g4T = totalP;   cPD.c = BG;
  cPD.co = compo;     cPD.p = pAv;      cPD.ac = 1;         cPD.bn = 0;
  cPD.tT = tTime;     cPD.pcB = pBi;    cPD.fl = flagged;   cPD.g2L = g2L;
  cPD.g3L = g3L;      cPD.g1C = g1C;    cPD.h1 = h1;        cPD.h2 = h2;
  cPD.h3 = h3;        cPD.h4 = h4;      cPD.h5 = h5;        cPD.h6 = h6;
  gCT(0);
createRecord("playerProgress", cPD, function(record){
  recentID = record.id;
  guestCheck();
  showE(["image3", "uidG", "delete", "reminder"]);
  isNew = false;
  liU = true;
  start();
});}
function findRep(value,value2, value3){
var che = false;
readRecords("bannedCodeId",{},function(b){
for (var v = 0; v < b.length; v++){
if (b[v].UID.toString() === value.toString()){
  che = true;          
}}if (!che){
  createRecord("bannedCodeId",{UID:value,CID:value2, v:value3},function(){});
}});}
onEvent("aNo", "click", function() {
  liU = false;
 ansNo(false);
});
function processBan(val){
  banOver = true;
  changeScreen("MLC");
  setImageURL("decor","assets/bigred.jpg");
  setStyle("MLC1", "background: #f5541d");
  deleteElement("ret");
  setT("eI", "Permanent Ban", "永久封禁");
if (val === "0"){
  setT("anno", "Repeated spamming", "反复提交垃圾信息");
}else if (val === "1"){
  setT("anno", "Submitting inappropriate content", "提交不良内容");
}else if (val === "2"){
  setT("anno", "Repeated cheating", "反复作弊");
}else if (val === "3"){
  setT("anno", "Ban evading (sockpuppet)", "逃避封禁（小号）");
}else{
  setText("anno", val.split("").reverse().join(""));
}}
function dol(){
  if (!isSync){
    showElement("lAg");
  if (iCh === 1){
  setText("loN", "登录成功！'" + currentUID + "'已同步。");
}else{
  setText("loN", "Login Success! '" + currentUID + "' is synced."); 
}}else{
  hideElement("lAg");
  if (iCh === 1){
  setText("loN", "登录成功，同步中。。。");
    }else{
  setText("loN", "Login Success, syncing...");
  }}}
function ansNo(val){
  upddata = null;
  hideE(["demo", "autoE", "aYes", "aNo"]);
  showE(["image3", "uidG"]);
  isNew = false;
  guestCheck();
  cGG = false;
  setText("uidG", "");
  showElement("GUIDB");
if (liU && hasNet){
  showElement("delete");
}if (ready){
  showElement("credit");
}if (!val){
  playS("UIButton", "bomer");
}if (!liU && !first){
  hideElement("lAg");
}else{
  showElement("lAg");
  checkInternet();
}if (liU){
  showElement("cmB");
}if (!first){
  showE(["English", "Chinese", "image1"]);
if (liU){
  dol();
}else if (!liU && !first){
  setT("loN", "Logged in as Guest, save won't upload. You will lose all progress after page refresh. Guest cannot participate in Cloud Save, Feedback, XP Ranking, and Global High Score.\nCreate a User ID now to enjoy all features!\nAlready have a User ID? Sign in here.\n*Internet Connection Required*", "游客身份登录，存档不会上传。你的进度将在页面刷新后清零。游客无法参与云存档，反馈，XP排行和全球高分。\n现在创建用户ID以享受所有功能！\n已有用户ID？在这里登录！\n*需要网络连接*");
}else{
  setT("loN", "Create a User ID to sync your progress! Remember to login with the same User ID next time. User ID must be 6 to 12 characters long, must have lower cap letter, capital letter, number, and no space. \nAlready have a User ID? Login here.\n*Internet Connection Required*", "新建用户ID，立享云端存档！下次记得拿同样的用户ID登录！用户ID必须是6-12字符，必须有小写字母，大写字母和数字，不能有空格。\n已有用户ID？在这里登录！\n*需要网络连接*");
}}}
onEvent("BGB", "click", function() {
if (yO){
  playS("alienReveal", "secrt");
}else{
  playS("coinPack", "paget");
}if (yO){
  showElement("p6");
}
setText("le3", BX+1 + " / 2");
setText("le1", BG+1 + " / 4");
setText("le2", BD+1 + " / 2");
setText("le4", ba+1 + " / 3");
setText("le5", bb+1 + " / 4");
changeScreen("custo");
});
var coltx = ["bvb"];
function setMst(){
  setImageURL("txa2", "assets/p4.png");
for (var j = 0; j < coltx.length; j++){
  setStyle(coltx[j], "background: linear-gradient(#f7f7d7, #f9bda6);");
}for (var i = 1; i < 17; i++){
  setImageURL("bg" + i,"assets/mst.png");
}}
function setOriginal(){
  setImageURL("txa2", "assets/p1.png");
for (var j = 0; j < coltx.length; j++){
  setStyle(coltx[j], "background: linear-gradient(#d9f8f7, #a6bdf9);");
}for (var i = 1; i < 17; i++){
  setImageURL("bg" + i,"assets/Morning_Sky_Texture.png");
}}
function setNew(){
  setImageURL("txa2", "assets/p2.png");
for (var j = 0; j < coltx.length; j++){
  setStyle(coltx[j], "background: linear-gradient(#afcfff, #ffffff, #fffd50);");
}for (var i = 1; i < 17; i++){
  setImageURL("bg" + i, "assets/Jungle_Sky_Texture.png");
}}
function setH(){
  setImageURL("txa2", "assets/p3.png");
for (var j = 0; j < coltx.length; j++){
  setStyle(coltx[j], "background: linear-gradient(#fffd00, #00ec81, #fffd00);");
}for (var i = 1; i < 17; i++){
  setImageURL("bg" + i,"assets/Halloween_Sky_Texture.png"); 
}}
onEvent("vi", "click", function() {
  open("studio.code.org/projects/applab/2wRwHjna0NMFT0d-39OL57Gy7fjSw9GbxKfXV4k_dRw");
});
onEvent("meC", "change", function(){
var a = getText("meC");
if (a === "选择一个类别 . . ." && banned === 0){
  setText("cMT", "开发者可能会通过浏览器弹窗向你回复！");
}if (a === "问题反馈" && banned=== 0){
  setText("cMT", "请描述bug的位置，和触发bug的方法。");
}if (a === "翻译错误" && banned=== 0){
  setText("cMT", "请告诉我哪里翻译的不妥当，并给出建议。");
}if (a === "建议" && banned=== 0){
  setText("cMT", "此游戏已完工，不会添加新游戏。但还是欢迎其他建议！");
}if (a === "用户ID及隐私" && banned=== 0){
  setText("cMT", "请详细描述你的顾虑。");
}if (a === "举报作弊" && banned=== 0){
  setText("cMT", "请写明你怀疑的用户代码。");
}if (a === "其他" && banned=== 0){
  setText("cMT", "我很好奇这个“其他”会是什么。");
}});
function checkBan(){
for(var jkn = 0; jkn < pBL.length; jkn++){
if (kg === pBL[jkn].substring(0,pBL[jkn].indexOf("|"))){
  processBan(pBL[jkn].split("|").pop());
}}}
onEvent("meE", "change", function(){
var a = getText("meE");
if (a === "Choose a category..." && banned=== 0){
  setText("cMT", "Developer might reply your message via browser prompt!");
}if (a === "Bug Report" && banned=== 0){
  setText("cMT", "Please specify where the problem occur and how to trigger it.");
}if (a === "Translation Error" && banned=== 0){
  setText("cMT", "Please tell me where and how the translation can be improved.");
}if (a === "Suggestions" && banned=== 0){
  setText("cMT", "The app is done, so no new games. Other suggestions are welcomed, though!");
}if (a === "User ID & Privacy" && banned=== 0){
  setText("cMT", "Please describe your concern in detail.");
}if (a === "Report Cheating" && banned=== 0){
  setText("cMT", "Please enclose the User Serial in question.");
}if (a === "Others" && banned=== 0){
  setText("cMT", "I'm really curious what this 'Others' is going to be.");
}});
onEvent("submit", "click", function() {
  cMdt.comment = getText("coT");
  cMdt.UID = currentUID;
  cMdt.reply = "noreply";
  cMdt.rr = cMdt.rbk = cMdt.rbk2 = cMdt.rrbk = "empty";
  cMdt.archived = false;
if (iCh === 1){
  cMdt.type = getText("meC");
}else{
  cMdt.type = getText("meE");
}
  playS("UIButton", "bomer");
if (!cooldown && hasNet && cMdt.comment.length > 16 && banned=== 0 && coO && cMdt.type !== "选择一个类别 . . ." && cMdt.type !== "Choose a category..."){
  onSync();
  tmpO = 0;
var tmpE = 0;
  hideElement("submit");
var lP = timedLoop(500,function(){
if (tmpE === 0){
  tmpO++;
if (tmpO > 10){
  rSti = false;
  setT("cMT", "Upload failed, please check your connection / VPN! Program will try to resubmit.", "上传失败，请检查连接/VPN！程序会自动尝试提交。");
}}else{
  stopTimedLoop(lP);
}});
setT("cMT", "Submitting...", "提交中...");
createRecord("comments", cMdt, function(){
  tmpE = 1;
  offSync();
  rSti = true;
  changeScreen("cnfP");
  cooldown = true;
});}if (cMdt.type === "选择一个类别 . . ." || cMdt.type === "Choose a category..."){
  setT("cMT", "Choose a category!", "选择一个类别！");
}if (cMdt.comment.length < 16){
  setT("cMT", "Feedback too short, cannot submit.", "反馈太短，无法提交。");
}if (!hasNet){
  setT("cMT", "Internet lost! Please retry later! Input content saved.", "失去网络连接！请稍后重试！填写内容已缓存。");
}if (cooldown){
  setT("cMT", "To prevent spam, please log in again to use this tool.", "为防垃圾信件，请再次登录以使用此工具。");
}if (!coO){
  setT("cMT", "I'm sorry, but this service is no longer available.", "很抱歉，此服务已关闭。");
}});
onEvent("cmB", "click", function() {
  doEnter();
});
function doEnter(){
  setText("cMT", "");
  changeScreen("comment");
  playS("UIButton", "bomer");
  setT("coL", "Feedback & Suggestion", "反馈与建议");
  setT("thT", "Thank You!", "感谢反馈！");
  setT("thank2", "Developer might reply your message via browser prompt!", "开发者可能会通过浏览器弹窗向你回复！");
  if (rSti){
    setText("coT", "");
  }else{
  if (hasNet){
    rSti = true;
  }}if (iCh === 1){
  showElement("meC");
  hideElement("meE");
if (!coO){
  hideElement("submit");
  setText("cMT", "很抱歉，此服务已关闭。");
}else if (banned=== 1){
  setText("cMT", "你因为使用不友好语言,垃圾信息或作弊被封禁！"); 
  hideElement("submit");
}else if (cooldown){
  setText("cMT", "为防垃圾信件，请再次登录以使用此工具。");
}else if (tmpO < 11){
  setText("cMT", "开发者可能会通过浏览器弹窗向你回复！");
  showElement("submit");
}}else{
  showElement("meE");
  hideElement("meC");
if (!coO){
  hideElement("submit");
  setText("cMT", "I'm sorry, but this service is no longer available.");
}else if (banned=== 1){
  hideElement("submit");
  setText("cMT", "You're banned due to use of unfriendly language, spamming, or cheating!");
}else if(cooldown){
  setText("cMT", "To prevent spam, please log in again to use this tool.");
}else if (tmpO < 11){
  showElement("submit");
  setText("cMT", "Developer might reply your message via browser prompt!");
}}}
onEvent("decline", "click", function() {
  stopTimedLoop(tLO);
  stopTimedLoop(tLT);
  stopTimedLoop(rLo);
  start();
});
onEvent("tMa", "click", function() {
  stopTimedLoop(tLO);
  stopTimedLoop(tLT);
  stopTimedLoop(rLo);
  start();
});
function checkReply(){
hasCom = false;
readRecords("comments", {}, function(one){
for (var t = 0; t < one.length; t++){
if (one[t].reply !== "noreply" && one[t].UID === currentUID && one[t].archived === false){
  hasCom = true;
  showElement("bell");
}else if (one[t].UID === recentID && one[t].archived === false){
  hasCom = true;
  showElement("bell");
}if (!hasCom){
  hideElement("bell");
}}});}
onEvent("credit", "click", function() {
  setImageURL("image8", "assets/LOGOS.png");
  changeScreen("sCredit");
  stopTimedLoop(tLO);
  iCru = true;
  setT("easter", "No secret here.", "此处没有秘密。");
  setT("crH", "Credit", "鸣谢");
  playS("coin4", "gem2");
  doCrOne(1);
});
onEvent("creditS", "click", function() {
hideE(["pro", "bar", "btb", "stB", "cou", "l", "r", "left", "right", "rightrs", "leftrs", "qr"]);
stopTimedLoop(rLo);
setText("easter", "");
iCru = isC = false;
setImageURL("image8", "assets/loading.png");
i = 0;
start();
});
onEvent("image8", "click", function() {
if (i === 7){
  open("https://studio.code.org/projects/applab/FUpnAXtljzuWCWpHhnUjmw");
}
if (iCru && p2 && !p3){
  setImageURL("image8","assets/goldenE.png");
  showElement("p3");
  playS("alienReveal", "secrt");
}});
onEvent("update", "click", function() {
stopTimedLoop(tLO);
changeScreen("sCredit");
setS("image8", "urt", "bal");
playS("coinPack", "paget");
setT("crH", "Changelog", "更新日志");
setT("crT","Version 1.3.0 (12/12/20)\n- Reborn.\n\nVersion 1.2.0 (11/2/20)\n- New festival sticker collection - secrets and rewards awaits!\n- Automated taunt message for defeated global high score owner\n- Ability to preload most assets prior to log-in, for fewer lag and better effect\n- UI enhancement, bug fixes\n\nVersion 1.1.0 (6/15/20)\n- New SFX pack in Customization\n- New trophy page when clicking the trophy in tutorial\n- Previously unused screens as a bonus in Extras\n- Code optimization, shredded +1500 lines of code\n- Bug fixes, translation improvements, general improvements\n\nVersion 1.0.0 (3/15/20)\n- Beta session ended - the game is published!\n- New button color and edge in Customization\n- Two-level volume sound switch, instead of just on/off\n- Promoting the mobile experience\n- Dozens of QOL features and tweaks\n- Bug Fixes and general fixes\n\nVersion 0.9.0 (3/3/20)\n- Change background is now in the new Customization, accessable in Settings\n- Added icon pack in Customization\n- Dual layer auto flag and ban system, spam and cheat detection\n- Tuned program mechanism and game balance\n- Bug fixes, code and resource optimization, and general improvements\n\nVersion 0.8.0 (2/29/20)\n- Alpha session ended, beta starts now!\n- Tuned XP system and explanation in Leaderboard and Detailed Stats\n- Global high score is now tied to specific user\n- Recovery information\n- Added introductory prompt at new profile creation and Recovery info submission\n- Added logged-in mission pack\n- Bug fixes, general improvements, and tweaks\n\nVersion 0.7.0 (2/21/20)\n- Tuned game mechanism and balance\n- Achievement complete indicator\n- XP system and Global Leaderboard\n- Connectivity check and prompt when using online functionality\n- Fixed bugs, improved translations, increased user ID's security awareness\n\nVersion 0.6.0 (2/18/20)\n- Begin alpha test\n- Global high score\n- Extras and Credits\n- Optimized online functions, fixed bugs, improved translations\n\nVersion 0.5.0 (2/15/20)\n- Detailed stats in Tutorial\n- Cloud deletion in Settings\n- Background selection\n- Changelog and A/B test tool\n- Fixed bugs, improved textures\n\nVersion 0.4.0 (2/12/20)\n- Third game, progress hooked\n- fourth game, progression hooked\n\nVersion 0.3.0 (2/9/20)\n- Cloud save\n- Guest login\n- Feedback and dev reply tool\n- Tuned progression system, fixed bugs\n\nVersion 0.2.0 (2/6/20)\n- Dual language\n- Sound switch\n- Tutorial and progression system\n- Fixed bugs\n\nVersion 0.1.0 (2/3/20)\n- First game\n- Second game\n- Basic UI\n\nVersion 0.0.0 (2/1/20)\n- Project start", "版本1.3.0 (12/12/20)\n- 重生.\n\n版本1.2.0（11/2/20）\n- 全新节日贴纸收集-大奖和秘密等着你！\n- 自动挑衅被打败的全球高分拥有者\n- 登录前可选预载大多数材质，以减少延迟和提升特效\n- UI增强，修bug\n\n版本1.1.0（20/6/15）\n- 个性化里新的音效包\n- 教程里新的奖牌页，点击奖牌进入\n- 额外内容里的奖励屏幕\n- 代码优化，删掉了+1500行码\n- 修bug，翻译增强，总体修缮\n\n版本1.0.0（20/3/15）\n- Beta结束 - 程序现已公开！\n- 个性化里新的按钮颜色和边缘\n- 两层音量，相较于之前的开/关\n- 推广手机上的体验\n- 数十个生活质量更新和调整\n- 修bug和总体修缮\n\n版本0.9.0（20/3/3）\n- 换背景移动至设置里的全新个性化\n- 个性化添加新的图标包\n- 双层记录和封禁系统，spam和作弊检测\n- 改良程序机制和游戏平衡\n- 修bug，代码和资源优化，和总体修缮\n\n版本0.8.0（20/2/29）\n- Alpha结束，beta测试开始!\n- 改良XP系统并增加排行榜和详细信息里的说明\n- 与用户绑定的全球高分\n- 还原信息\n- 添加注册时和填写还原信息时的信息框\n- 添加登陆任务包\n- 修bug，总体改善和调整\n\n版本0.7.0（20/2/21）\n- 调整游戏机制和平衡\n- 成就完成提示\n- XP系统和全球排行榜\n- 使用联网功能时的连接检查和提示\n- 修bug，翻译增强，增加用户ID的安全意识\n\n版本0.6.0（20/2/18）\n- 开始alpha测试\n- 全球高分\n- 额外内容和鸣谢\n- 改良联网部分代码，修bug，翻译增强\n\n版本0.5.0（20/2/15）\n- 教程中的详细统计\n- 设置里的删除云存档\n- 背景选择\n- 更新日志和A/B测试工具\n- 修bug，改善材质\n\n版本0.4.0（20/2/12）\n- 第四个游戏，增加成就\n- 第三个游戏，增加成就\n\n版本0.3.0（20/2/9）\n- 云存档\n- 游客登陆\n- 反馈和开发者回复工具\n- 改善成就系统，修bug\n\n版本0.2.0（20/2/6）\n- 双语言\n- 声音开关\n- 教程和成就系统\n- 修bug\n\n版本0.1.0（20/2/3）\n-第一个游戏\n- 第二个游戏\n- 基本UI\n\n版本0.0.0（20/2/1）\n- 项目开始");
});
onEvent("reminder", "click", function() {
changeScreen("pwSet");
playS("UIButton", "bomer");
if (!liU){
  isSet = false;
  hideE(["dwa", "Save", "reject3", "jO", "jT"]);
  if (!anogv){
  setQ();
  showElement("Re");  
}}else{
  isSet = true;
   if (bTf){
  setQuestion();
  showElement("Save");    
}}});
onEvent("Save", "click", function() {
  scOn = getText("aO");
  scTw = getText("aT");
  scTh = getText("an");
  hideE(["jO", "jT", "reject3"]);
if (scOn.length < 4 || scOn.length > 7){
  showElement("jO");
  fiTr = true;
}if (scTw.length < 3 || scTw.length > 6){
  showElement("jT");
  fiTr = true;
}if (scTh.length < 3 || scTh.length > 6){
  showElement("reject3");
  fiTr = true;
}if (scOn.length > 3 && scOn.length < 8 && scTw.length > 2 && scTw.length < 7 && scTh.length > 2 && scTh.length < 7){
  fiTr = false;
}
  checkD();
  playS("UIButton", "bomer");
});
function checkD(){
if (!fiTr){
  isChoose = true;
  showE(["hidde", "fY", "fN"]);
  hideE(["gB", "Save"]);
  setT("sQ", "Recovery info can only be answered once. Make sure it's correct.", "此回答在提交后不能被修改-确定信息无误？");
  setT("r1", "Are you sure that you won't forget this? If you forget this, there is no way to recover your User ID.", "确定不会忘记这些信息？如果你忘记了，就无法找回用户ID了。");
  setT("reco3", "If you want to make any change press return.", "如果你要做任何改动，请先点取消。");
}}
function setQ(){
  setT("sQ", "Enter the first 3-6 letter of your elementary school's name.", "输入你之前填写过的还原信息：\n你小学名字拼音的前3-6位字母。");
  setT("r1", "If you filled the recovery info before:\nEnter the first 4-7 digit of your SECOND most-used Email's prefix.\nExample: For A@B.C, A is the prefix.\n The 3 answer must match the record exactly in order to reveal the User ID.", "如果你之前填写过还原信息：\n输入你第二常用电子邮箱词头的前4-7个字符。\n示例：在A@B.C中，A是词头。\n3个答案必须与记录完全重合才能显示用户ID。");
  setT("reco3", "Enter your recovery answer:\nYour first-ever phone number's last 3-6 digit.", "输入你之前填写的还原答案：\n你人生中第一个电话号码的后3-6位数。");
}
function setQuestion(){
  setT("sQ", "Enter the first 3-6 letter of your elementary school's name.", "回答此问题：\n你人生中第一个电话号码的后3-6位数。");
  setT("r1", "Enter the first 4-7 digit of your SECOND most-used Email's prefix.\nExample: For A@B.C, A is the prefix.\n For security reasons, you can only answer these question once. Remember your anwser - it is vital for User ID recovery.", "输入你第二常用电子邮箱的词头的前4-7个字符。\n示例：在A@B.C中，A是词头。\n出于安全考虑，你只能填写一次。务必记住你的答案-这对于找回用户ID是至关重要的。");
  setT("reco3", "Answer this question:\nYour first-ever phone number's last 3-6 digit.", "输入你小学名字拼音的前3-6位字母。");
}
function setCau(){
  hideElement("Re");
  setT("sQ", "If this lasts more than 5 seconds check your connection.", "如果此操作超过了5秒请检查你的连接。");
  setT("r1", "Requesting / sending data...", "正在请求/发送数据。。。");
  setT("reco3", "", "");
}
onEvent("fY", "click", function() {
  bTf = false;
  showElement("gB");
  hideE(["hidde", "fY", "fN"]);
  setCau();
if (hasNet && !fiTr){
  recoData.UID = currentUID;
  recoData.ans1 = scOn;
  recoData.ans2 = scTw;
  recoData.ans3 = scTh;
createRecord("recoveryData", recoData, function(){
  answered = true;
  compo += 100;
  isChoose = false;
  bTf = true;
  changeScreen("cLan");
  hideElement("reminder");
});
readRecords("recoveryData", {}, function(method){
for (var i = 0; i < method.length; i++){
if (method[i].UID === currentUID){
  rID = method[i].id;
}}});
  clearR();
  playS("UIButton", "bomer");
}if (!hasNet){
  setT("sQ", "No internnet connection! Please retry later!", "无网络连接!请稍后重试!");
  setT("r1", "No internnet connection! Please retry later!", "无网络连接!请稍后重试!");
  setT("reco3", "No internnet connection! Please retry later!", "无网络连接!请稍后重试!");
}});
onEvent("fN", "click", function() {
  isChoose = false;
  showE(["gB", "Save"]);
  hideE(["hidde", "fY", "fN"]);
  setQuestion();
  playS("UIButton", "bomer");
});
function D(){
 showE(["Re", "gB", "aO", "aT", "an"]);
 iPis = false;
 stopTimedLoop(tLT);
 checkInternet();
 setT("sQ", "Enter your recovery answer:\nYour first-ever phone number's last 3-6 digit.", "输入你之前填写的还原答案：你人生中第一个电话号码的后3-6位数。");
 setT("r1", "If you filled the recovery info before:\nEnter the first 4-7 digit of your SECOND most-used Email's prefix.\nExample: For A@B.C, A is the prefix.\n The 3 answer must match the record exactly in order to reveal the User ID.", "如果你之前填写过还原信息：\n输入你第二常用电子邮箱词头的前4-7个字符。\n示例：在A@B.C中，A是词头。\n3个答案必须与记录完全重合才能显示用户ID。");
 setT("reco3", "If you filled the recovery info before:\nEnter the first 3-6 letter of your elementary school's name.", "如果你之前填写过还原信息：\n你小学名字拼音的前3-6位字母。");
}
onEvent("Re", "click", function() {
maTr = false;
var cons = "";
setCau();
anogv = true;
ans1 = getText("aO").toString();
ans2 = getText("aT").toString();
ans3 = getText("an").toString();
readRecords("recoveryData", {}, function(method){
anogv = false;
for (var k = 0; k < method.length; k++){
if (method[k].ans1 === ans1 && method[k].ans2 === ans2 && method[k].ans3 === ans3){
if (!maTr){
	cons = method[k].UID;
}else{
	cons = cons + "' / '" + method[k].UID;
}
	showElement("Re");
	maTr = true;
}}if (!maTr){
  hideE(["Re", "gB", "aO", "aT", "an"]);
  iPis = true;
  tLT = timedLoop(5000, D);
  setT("sQ", "Information does not match. Please retry after 5 seconds.", "没有找到相关信息。请在5秒后重新尝试。");
  setT("r1", "Information does not match. Please retry after 5 seconds.", "没有找到相关信息。请在5秒后重新尝试。");
  setT("reco3", "Information does not match. Please retry after 5 seconds.", "没有找到相关信息。请在5秒后重新尝试。");
}else{if (iCh === 1){
  setText("sQ", "你的用户ID为：' " + cons + " '。可别再忘了。");
  setText("r1", "你的用户ID为：' " + cons + " '。可别再忘了。");
  setText("reco3", "你的用户ID为：' " + cons + " '。可别再忘了。");
}else{
  setText("sQ", "Your User ID is: '"+ cons + "'. Don't forget it again.");
  setText("r1", "Your User ID is: '"+ cons + "'. Don't forget it again.");
  setText("reco3", "Your User ID is: '"+ cons + "'. Don't forget it again.");
}}
  maTr = false;
  clearR();
  playS("UIButton", "bomer");
});});
function clearR(){
  setText("aO", "");
  setText("aT", "");
  setText("an", "");
}
onEvent("gB", "click", function() {
  gob();
});
function gob(){
  changeScreen("cLan");
  clearR();
  playS("UIButton", "bomer");
}
onEvent("debugB", "click", function() {
  if (m9 === 1){
    showE(["rs", "Ow", "Ts", "tP", "tW", "tS", "tC", "3Hs", "4hit", "4hs", "xp", "xpr", "lg"]);
    hideE(["bvd"]);
  }if (h1 === 1 && h2 === 1 && h3 === 1 && h4=== 1 && h5 === 1 && h6 === 1){
	if (m1 === 1 && m2 === 1 && m3 === 1 && m4=== 1 && m5 === 1 && m6 === 1 && m7 === 1 && m8=== 1 && m10 === 1){
		hideE(["hxt"]);
		showE(["label6", "tz0", "tz1", "tz2", "tz3", "tz4", "tz5", "tz6", "debugB", "simp", "dib"]);
	}else{
	setT("hxt", "Uh uh uh, not just festival stickers hehehe u also need ALL ACHIEVEMENTS (cough cough except achievement 9)!! MUAHAHA you'll never unlock this!! - Evil dev", "不不不，不止节日帖纸！你还需要所有成就（咳咳不用成就9）！！哈哈哈哈哈哈你永远不会解锁这个的！！-邪恶的作者");
	}}
  changeScreen("debug");
  simT = true;
  playS("alienReveal", "secrt");
});
onEvent("Ow", "click", function() {hWo++;});
onEvent("Ts", "click", function() {bTm = 8;});
onEvent("tP", "click", function() {pBi = 16;});
onEvent("tW", "click", function() {hWt += 5;});
onEvent("tS", "click", function() {hiS++;});
onEvent("tC", "click", function() {coin += 10;});
onEvent("3Hs", "click", function() {highS3 += 5;});
onEvent("4hit", "click", function() {totalP += 10;});
onEvent("4hs", "click", function() {hS += 10;});
onEvent("xp", "click", function() {compo += 200;});
onEvent("xpr", "click", function() {compo = 0;});
onEvent("rs", "click", function() {resetProgress(1);});
onEvent("lg", "click", function() {acTi += 10;});
onEvent("back", "click", function() {
  stopTimedLoop(tLO);
  showE(["hxt", "bvd"]);
  hideE(["label6", "tz0", "tz1", "tz2", "tz3", "tz4", "tz5", "tz6", "debugB", "simp", "dib", "rs", "Ow", "lg", "Ts", "tP", "tW", "tS", "tC", "3Hs", "4hit", "4hs", "xp", "xpr"]);
  if (simT){
    start();
  }else{
    playS("EpicBellow", "kali");
    showE(["text_area4", "dwarn", "dye", "dno"]);
  }});
onEvent("dye", "click", function() {
  hideE(["dye"]);
  showE(["fin"]);
});
onEvent("fin", "click", function() {
  hideE(["text_area4", "dwarn", "dye", "dno", "fin"]);
  start();
});
onEvent("dno", "click", function() {
  hideE(["text_area4", "dwarn", "dye", "dno", "fin"]);
  simT = true;
  start();
});
var tEx = ["Welcome to extras. Look around, there might be interesting things lain' around.\nThis is my first AppLab project. I never thought that it would grow to +5000 lines so fast. I was originally doing this in a lesson page – until the locked API and view-obstructing prompt pushed me here. \nI was only supposed to make a 4-screen app - now I used it for my APCSP Create task. It really should stop at game 2. Nothing more - But I committed – after about four weeks of solid work, it is here.","I created the User ID system ground up – I didn't know getUserId was a thing, and I want players to save their progress – but I don't want to go down the rabbit hole of privacy and sensitive data management – a reason why there's no password – people just like to reuse passwords, and I ain't lookin for trouble.\n But as I learned how applab works, I'm glad that I created a separate system – this enables EVERY player – whether logged in to code.org or not – to save their settings and progress.","Just a friendly reminder - playing one savefile on two (or more) devices will get you nowhere - only one of them will save (this is an anti-cheat feature).\nTo prevent people from randomly guessing out User ID, I need to find a way to make User ID more secure. So I made the strength and length requirement – The effects, however, is up to YOU. Treat your User ID as your password - make it strong. Fill in recovery info, and never worry about forgetting User ID.","The idea of dual-language was from the start. I am, after all, A Chinese studying in the U.S. who happens to speak good English. It also enables me to recruit more beta testers – and reach more audiences.\nMandarin is the most spoken language in the world, with more than 1.1 billion speakers. English is about 2 million behind.\nFor me, it's sad to see that most content on the internet are not catered to such a big audience base. Things are changing, however, one app at a time.",
"User ID are easy to forget at times - recovery system aims to help you out, as you can use security questions to recover User ID.\nI don't want to deal with sensitive info, so I nerfed it hard. Player can choose to opt-in – rather than being forced to. Player can't enter the full answer of questions – only a few letters are allowed – so I don't know much while you can still feel safe when forgetting User ID.\nIf you're paranoid, calm down: If your data is safe with code.org, it will be safe with me. Plus, I don't even know who you are!","less than 30% of the program's code are actual game code. Most of the codes are peripherals – achievements, languages, sound, stat, sync, and suggestion function.\nI was reluctant to create global highscore and leaderboard initially, since I know memory manipulation and hacking all too well. But as a developer I cannot become paranoid and blindly reject suggestions from my testers, so I made it for all logged-in players. Oh did I mention there is a ban mechanism in place?","Don't tell me the game is hard… I've beaten every achievement. I have to test my own game, unfortunately. \nI developed a debug tool (shown in pic below) for alpha testers – It has since been deleted so… you're out of luck! (or did I delete it?)\nIf you noticed the tiny button on menu – sharp eyes! I learned about the right of Fair Use - as a criticque article is inside. Special thanks to Rovio! Check Angry Birds out and watch all the ads their game has to offer! Trust me, you can never stop.","I borrowed part of the code from a buggy Pong project by Doug McNally – shown below, click the photo to visit – for my 3rd game, with added mobile compatibility, paddle speed enhancement and heck of a lot more.\nFor those who want to make cloud-enabled app here - make the column name of list short! It helps loading when your list is large! Also, use another tool, such as Notepad++ or word, for code editing - applab's UI design sucks, and it's hard to find a particular piece of code as your program grow.",
"If you ever view the game's code, you'll find that this game reuse screens - most screen are empty, strings added after initialization - This was done to up the efficiency of dual language, as creating 2 times the screen is just messy. I like how the app only have two dozen screens, yet can render more than 300 actual pages.\nI used to store long strings like credit and changelog on cloud, and time proves this to be a bad choice. The platform is half-banned in China and unretrievable there - I had to store them locally.","Fun stats: This app has a total of 408 global / local variables and 476 elements, 87 cloud entries & columns, 211 asset files, 156559 characters, 5569 lines of beautified code, the settings text box can display 28 different texts.\nI made this game with variability in mind – different devices, internet connection (without it no asset will load and the game can't sync)… it was a fun coding trip.\nThank you for playing my game! Use the in-game suggestion tool to PM me if you 10/10 the game – I WILL salute you!"];
var tExC = ["欢迎来到额外内容。走走瞧瞧，说不定附近有有趣的东西。\n这是我的第一个AppLab项目，我原本只需要做一个四页的APP，没想到能这么快长成5000+行的项目。我先是被AppLab闭锁的API推到创建模式，然后现在这个项目被我用作AP计算机原理的项目了。这个项目本该停步游戏2的，但我一直坚持了下去，大概四周左右的劳动后，它就差不多完工了。","用户ID系统是我从首到尾建立起来的。我最开始不知道有getUserId这个东西，我还想让玩家有保存存档的能力，我还不想钻进隐私和敏感数据的兔子洞。这也是为什么没有密码，人们就是喜欢重复用一个密码，我可不想找麻烦。但是当我知道AppLab如何工作后，我很庆幸我建立了一个相对独立的系统 - 这准许了所有用户 - 不只登录了code.org的人 - 来保存存档和设置。","友情提示：两台设备使用同一个存档不好使的 - 只有一个能保存 - 这是个反作弊功能。\n为了防止人们猜到别人的用户ID，我得想办法让用户ID更加安全。这就是为什么用户ID有难度要求 - 它的效果全取决于你。\n把用户ID当作密码对待 - 让它强大一点。怕忘？填写还原信息，永不担心。","我从最开始就在做双语言。我毕竟是会说流利英语的中国人。双语言也让我在beta阶段找到更多测试者，并最终找到更多玩家。\n普通话是全球受众最广的语言，全球近12亿人说普通话，比英语多了几百万人。我一直觉得很遗憾 - 遗憾看到大多数网上的资源没有服务如此大的人口。但是情况一直在改观，从每一个程序开始。","用户ID就是容易忘 - 还原系统可以帮到你 - 它利用你填写的安全信息来帮你找回用户ID。\n我不想和敏感信息打交道，所以我使劲阉割了这个功能。玩家可以选择性填写，不会强制。玩家不能输入整个答案，只能输入几个字母，所以我到头来知道的不多，你也能在忘记用户ID时觉得舒心。\n放心吧 - 只要你的数据在code.org这里安全，它们在我这里也会很安全。再说了，我连你是个啥都不知道！","不到30%的程序代码是游戏自身的代码，大多数代码都是周边服务的代码 - 成就，语言，声音，统计，同步，反馈之类的。\n我最开始并不想做全球高分和排行榜，因为我太了解内存篡改和破解了。但是作为开发者我不应该忽视玩家的反馈，更不能偏执，所以我对所有登录用户开放了这两个功能 - 哦对了，这儿好像有个封号机制哈。","别说游戏太难... 我解锁了每一个成就。很不幸，我毕竟还要测试自己的程序。\n我为alpha测试者做了一个调试工具（下图），它已经被移除了，所以你好像只能肝了！- 也有可能，我没删？\n看到主菜单的那个小按钮了吗？里面的批判文章是为了遵从美国的合理使用条款而加入的，就不花时间翻译了。特别感谢Rovio！谁小时候玩过愤怒的小鸟？（暴漏年龄）",
"我修复并改良了Doug McNally的乒乓程序 - 下图，点击浏览原项目 - 作为我的第三个游戏。我添加了手机操控，跳板速度改良和一大堆其他的东西。\n如果你想在code.org做有云端功能的程序 - 记得把信息列名字起的短一点，可以加快下载速度 - 还有，建议使用第三方工具，例如notepad++或者word - 这里的UI太反人类，程序大了就找不到东西了。","你要是研究过游戏的代码，你会发现这个程序会在很多情况下使用一个screen作为模板。大多数screen是空的，所有内容在游戏开始后再加上去。这样，双语言的效率就可以提升 - 毕竟为所有情况创建独立的screen太难操作了。这个程序只有二十几个screen，却能做出三百余个独特的屏幕 - 我很喜欢这个过程。\n过去，一些长string我会放到云端 - 结果突然发现这个网站在中国半封禁 - 就放回本地了。","有趣数字：这个程序有408个全球和本地变量，476个屏幕元素，87个云端数据点&列，211个素材文件，156559个字符，美化后有5569行代码，设置的文本框可以显示28条不同的消息。\n这个游戏考虑到了很多变量 - 不同设备，不同网络环境（离线，被审查，在线，不同情况程序会受到影响），写起来还是挺有趣的。\n感谢你玩我的游戏！要是10/10了请你用游戏内反馈工具告诉我 - 我会亲自向你致敬！"];
onEvent("extra", "click", function() {
  stopTimedLoop(tLO);
  showE(["stB", "btb", "cou", "r", "right"]);
  setText("cou", "1/X");
  changeScreen("sCredit");
  i = 0;
  setS("image8", "gold", "egg1");
  setT("crH", "Extras", "额外内容");
  playS("JackpotPrice", "paus");
if (compo > 999){
  hideE(["pro", "bar"]);
if (pAv === 0){
  pAv = 1;
  updateProfile();
}}else{
  showE(["pro", "bar"]);
}if (iCh === 1){
  setText("crT", tExC[0]);
}else{
  setText("crT", tEx[0]);
}});
onEvent("left", "click", function() {
  showE(["r", "right"]);
  playS("UIButton", "bomer");
if (i < 1){
  hideE(["left", "l"]);
}else{
  i--;
  updatePic();
if (iCh === 1){
  setText("crT", tExC[i]);
}else{
  setText("crT", tEx[i]);
}if (i < 1){
  hideE(["left", "l"]);
}}
  setText("cou", i+1 + "/X");
});
function updatePic(){
  setText("easter", "");
switch(i){
  case 0:
setS("image8", "gold", "egg1");
break;
  case 1:
setS("image8", "silver", "egg2");
break;
  case 2:
setS("image8", "wooden", "egg3");
break;
  case 3:
setS("image8", "coinPile", "coin");
break;
  case 4:
setS("image8", "chase", "tonic");
if (BD === 0){
	setText("easter", "HELLO PETER");
}else{
  setText("easter", "TJ wuz here");
}
break;
  case 5:
setImageURL("image8","assets/unused.png");
setT("easter", "A cut asset", "一个beta材质");
break;
  case 6:
setImageURL("image8","assets/deb.jpg");
break;
  case 7:
setImageURL("image8","assets/ot.jpg");
break;
  case 8:
setS("image8", "bottle", "chim");
break;
  case 9:
setS("image8", "scare", "campf");
if (BD === 0){
	 setT("easter", "Above...", "上方...");
}else{
  setT("easter", "That flame...", "缺了些什么");
}
break;
}}
onEvent("right", "click", function() {
  showE(["l", "left"]);
  playS("UIButton", "bomer");
if (i > 8){
  hideE(["right", "r"]);
}else{
  i++;
  updatePic();
if (iCh === 1){
  setText("crT", tExC[i]); 
}else{
  setText("crT", tEx[i]);
}}if (xO && !p2 && i > 8){
  showElement("p2");
}if (i > 8){
hideE(["right", "r"]);
}if (i !== 9){
  setText("cou", i+1 + "/X");
}else{
  setText("cou",  "X/X");
}});
function delP(){
if (!hasReco){
  showElement("dTT");
  setT("dTT", "Hey - you got one or more global highscore - if you choose to delete, the highscore will be given to the next runner-up. You sure?", "嘿 - 你有一个或多个全球高分 - 如果你要删除，高分会推到第二高的账号。确定？");
}}
function finalApprove(){
  hideE(["check", "getOne", "getTwo", "getThree", "dT"]);
  showElement("confirm");
  setText("getOne", "");
  setText("getTwo", "");
  setText("getThree", "");
  tmp1 = tmp2 = tmp3 = "";
if (g1Rs || g2Rs || g3Rs || g4Rs){
  setT("dTT", "Hey - you got one or more global highscore - if you choose to delete, the highscore will be given to the next runner-up. You sure?", "嘿 - 你有一个或多个全球高分 - 如果你要删除，高分会推到第二高的账号。确定？");
}else{
  hideElement("dTT"); 
}
setT("deT", "Warning! This will delete your User ID and all cloud data under it - save, comment, and recovery data will be permanently deleted. You will be logged out. Press confirm 10 times to confirm, press cancel to return.", "警告！这会删除你的用户ID和名下的所有数据 - 存档，反馈，还原信息都将被永久删除。你将被登出。点击确认10次以确定，点击返回以取消。");
}
function updHigh(situation,newScore, newId){
switch(situation){
  case 1:
setKeyValue("g1g", newScore, function(){});
setKeyValue("g1d", newId, function(){});
break;
  case 2:
setKeyValue("g2g", newScore, function(){});
setKeyValue("g2d", newId, function(){});
break;
  case 3:
setKeyValue("g3g", newScore, function(){});
setKeyValue("g3d", newId, function(){});
break;
  case 4:
setKeyValue("g4g", newScore, function(){});
setKeyValue("g4d", newId, function(){});
break;
}}
onEvent("cancel", "click", function() {
  changeScreen("cLan");
  fiCo = 0;
  checkC = false;
  playS("UIinactive", "upp");
});
onEvent("check", "click", function() {
  tmp1 = getText("getOne");
  tmp2 = getText("getTwo");
  tmp3 = getText("getThree");
  anod = true;
  showElement("barrr");
  hideE(["deT", "dTT", "dT"]);
readRecords("recoveryData", {}, function(method){
  hideElement("barrr");
  showE(["deT", "dTT", "dT"]);
  anod = false;
  playS("UIButton", "bomer");
for (var l = 0; l < method.length; l++){
if (method[l].UID===currentUID&&method[l].ans1===tmp1&&method[l].ans2===tmp2&&method[l].ans3===tmp3){
  finalApprove();
  checkC = true;
}if (!checkC){
  setText("getOne", "");
  setText("getTwo", "");
  setText("getThree", "");
  setT("deT", "Info doesn't match. Please retry.", "信息不符合。请重试。");
  setT("dTT", "Info doesn't match. Please retry.", "信息不符合。请重试。");
  setT("dT", "Info doesn't match. Please retry.", "信息不符合。请重试。");
}}});});
onEvent("p1", "click", function() {
  xO = true;
  hideElement("p1");
});
onEvent("p2", "click", function() {
  p2 = true;
  hideElement("p2");
});
onEvent("p3", "click", function() {
  p3 = true;
  hideElement("p3");
});
onEvent("p4", "click", function() {
  p3 = false;
  showElement("p5");
  hideElement("p4");
});
onEvent("p5", "click", function() {
  yO = true;
  hideElement("p5");
});
onEvent("p6", "click", function() {
  yO = false;
  hideElement("p6");
  showElement("debugB");
  scp = true;
  dbgT++;
  setImageURL("MMIMG","assets/goldenE.png");
  playS("alienReveal", "secrt");
  setT("announce", "Treasure map secret triggered! Go find your treasure in Settings! If you don't have Mission 9 completed - it is now. Your XP is added and the profile is synced. Beware though... It might be your last sync!", "藏宝图秘密触发！在设置里找到你的宝藏！如果你没完成任务9 - 它现在就完成了。你的XP和进度已同步 - 不过当心 - 别让这成为你最后一次同步！");

  getKeyValue("dbgT", function(value){
    setKeyValue("dbgT", value+1, function(){});
  });if (m9 === 0){
  m9 = 1;
  compo += 100;
  updateProfile();
}});
function roll(){
  posX = getXPosition("announce");
  setPosition("announce", posX - 1, 415, 5000, 28);
if (posX < -5010){
  stopTimedLoop(rLo);
}}
onEvent("bell", "click", function() {
  readRecords("comments", {}, function(three){
for (var t = 0; t < three.length; t++){
  if (three[t].reply!== "noreply" && three[t].UID === currentUID){
  read = prompt(front + three[t].reply + back);
  var updatedRecord = three[t];
  updatedRecord.rbk2 = updatedRecord.rbk;
  updatedRecord.rbk = updatedRecord.reply;
  updatedRecord.reply = "noreply";
  updatedRecord.rrbk = updatedRecord.rr;
  updatedRecord.rr = read;
  updateRecord("comments", updatedRecord, function(){});
  hasCom = false;
  hideElement("bell");
}else if (three[t].UID === recentID && three[t].archived === false){
  hasCom = false;
  var gameBeat = three[t].reply.substring(0, three[t].reply.indexOf("|"));
  var beatID = three[t].reply.substring(three[t].reply.indexOf("|")+1, three[t].reply.length);
  if (iCh){
    read = prompt("你好\n\n很不幸，你游戏"+ gameBeat+"的全球高分被用户代码"+beatID+"超过了！夺回高分，向你的对手展示谁是最厉害的！\n\n这是条自动发送的消息，不要回复。");
  }else{
    read = prompt("Hi!\n\nUnfortunately, your global high score for game "+gameBeat+ " have been beaten by User Serial " +beatID + ". Retake the highscore and prove that you will always be the best!\n\nThis is an automated message, do not reply.");
  }
  var updatRecord = three[t];
  deleteRecord("comments", updatRecord, function(){});
  hideElement("bell");
}}});});
function getGlobal(){
getKeyValue("g1g", function(value){g1ba = parseFloat(value);});
getKeyValue("g2g", function(value){g2ba = value;});
getKeyValue("g3g", function(value){g3ba = value;});
getKeyValue("g4g", function(value){g4ba = value;});
getKeyValue("g1d", function(value){g1Id = value;});
getKeyValue("g2d", function(value){g2Id = value;});
getKeyValue("g3d", function(value){g3Id = value;});
getKeyValue("g4d", function(value){g4Id = value;});
}
function lbrend(){
    var tki = 0;
function dos(){
if (g1Id === byDate[k].serial){
  pre = pre + "⓵";
}if (g2Id === byDate[k].serial){
  pre = pre + "⓶";
}if (g3Id === byDate[k].serial){
  pre = pre + "⓷";
}if (g4Id === byDate[k].serial){
  pre = pre + "⓸";
}if (tki === 1){
  pre = pre + "🥇"; 
}else if (tki === 2){
  pre = pre + "🥈";  
}else if (tki === 3){
  pre = pre + "🥉";  
}else if (tki > 3 && tki < 11){
  pre = pre + "🏅";  
}else if (tki > 10 && tki < 21){
  pre = pre + "🎖️";  
}else if (tki > 20 && tki < 41){
  pre = pre + "🏵️";
}if (byDate[k].serial === recentID && compo !==0){
  ce = tki;
}if (tki < 101){
  text.push(pre);
}}
var byDate = uSerial.slice(0);
var text = [];
var pre = "";
var int = "";
var tempp,temppp;
byDate.sort(function(a,b) {
  return b.cp - a.cp;
});if (compo === 0){
  ce = "N/A";
}for (var k = 0; k < byDate.length; k++){
if (iCh === 1){
  if (byDate[k].cp > 0){
    tki = k + 1;
    if (tki > 9){
  tempp = "   ";
}else{
  tempp = "     ";
}   var tep = byDate[k].serial.toString();
    switch(tep.length){
      case 5:temppp=" ";break;
      case 4:temppp="   ";break;
      case 3:temppp="     ";break;
      case 2:temppp="       ";break;
      case 1:temppp="         ";break;
    }
    pre = "# " + tki +tempp+ "用户代码 " + byDate[k].serial + temppp+"经验值 " + byDate[k].cp + " ";
    dos();
  if (liU){
    int = "你的经验值/XP：" + compo + "    你的用户代码：" + recentID + "\n你的名次：第" + ce + "名\n⓵⓶⓷⓸: 4个游戏的的全球记录持有者\n可能会有服务器滞后-点刷新就行！";
  }else{
    int = "你的经验值/XP：" + compo + "\n登录以竞争排行榜！\n⓵⓶⓷⓸: 4个游戏的的全球记录持有者";
  }if (banned=== 1){
    int = "你的经验值/XP：" + compo + "\n你的用户代码：" + recentID + "\n你被封禁了，不能竞争排行榜！";
}}}else{
  if (liU){
  int = "Your XP: " + compo + "    Your user serial: " + recentID + "\nYour rank: No. " + ce + "\n⓵⓶⓷⓸: 4 games' global record holder\nThere may be server lag - just press Refresh!";
  }else{
int = "Your XP: " + compo + "\nLog in to compete in Leaderboard!\n⓵⓶⓷⓸: 4 games' global record holder";
  }if (banned=== 1){
int = "Your XP: " + compo + "\nYour user serial: " + recentID + "\nYou are banned from Leaderboard competition!";
  }if (byDate[k].cp > 0 && tki < 99){
tki = k + 1;
if (tki > 9){
  tempp = "   ";
}else{
  tempp = "     ";
}   var tep = byDate[k].serial.toString();
    switch(tep.length){
      case 5:temppp=" ";break;
      case 4:temppp="   ";break;
      case 3:temppp="     ";break;
      case 2:temppp="       ";break;
      case 1:temppp="         ";break;
    }
pre = "# " + tki+tempp + "User Serial " + byDate[k].serial + temppp+"XP " + byDate[k].cp + " ";
dos();
}}}
  text = text.toString().replace(/,/g, "\n");
  setText("explain", int);
  setText("board", text); 
if (text === ""){
  setT("board", "Uh-oh... Loading failed... Re-enter this page to try again. If it doesn't work, check your connection.", "糟糕... 加载失败... 重新进入此界面以重试！若仍无法加载，请检查网络。");
}}
onEvent("leader", "click", function(){
flagG = false;
stopTimedLoop(rLo);
lbrend();
changeScreen("leB");
setS("image11", "76_top_of_the_world", "klb");
setT("lbtitle", "Leaderboard", "排行榜");
playS("JackpotPrice", "paus");
});
onEvent("boardMain", "click", function() {
  setImageURL("image11", "assets/loading.png");
  start();
});
getKeyValue("dbgT", function(value){dbgT = value;});
function dodetG(){
var gl1 = Math.floor(glo10/60);
var gl2 = glo10%60;
glo5 = Math.round((glo3/glo2 + Number.EPSILON) * 100) / 100;
if (iCh === 1){
setText("board","用户代码："+uS+"\n用户ID创建于："+sDate+"\n上次登录时间："+lDate+"\n经验值："+compo+"\n总游戏时长："+Math.floor(tTime/60)+"分"+Math.round(tTime%60)+"秒\n完成游戏1："+hWo+"\n游戏1点击："+g1C+"\n游戏2胜利："+hWt+"\n游戏2输次数："+g2L+"\n游戏2赢输比例：" +Math.round((hWt/g2L)*100)/100+":1\n游戏3金币收集："+coin+"\n游戏3失球："+g3L+"\n游戏4成功点击："+totalP+"\n游戏1最佳时间："+bTm+" 秒\n游戏2最佳连胜："+hiS+"\n游戏3高分："+highS3+"\n游戏4高分："+hS+"\n存档访问次数："+acTi +"\n已填写还原信息："+isF+"\n被封禁："+isB+ar+"全球访问次数："+val+"\n全球秘密解锁次数："+dbgT+"\n全球游戏1点击："+glo2+"\n全球游戏1赢次数："+glo1+"\n全球游戏2赢次数："+glo3+"\n全球游戏2输次数："+glo4+"\n全球游戏2赢输比例："+Math.round((glo3/glo4)*100)/100+":1\n全球游戏3金币："+glo6+"\n全球游戏3失球："+glo7+"\n全球游戏4点击："+glo8+"\n注册玩家数量："+glo9+"\n全球游戏时间："+gl1+"分"+gl2+"秒\n全球总XP："+glo11+ "\n总贴纸收集："+glo22+ar+"用户ID："+uI);
if (banned=== 0){
  if(liU){
    setText("explain","想要更多的统计条目？通过设置-反馈来给我提供建议！");
  }else{
    setText("explain","游客数据不会加入全球统计。");
}}else{
  setText("explain", "你因为使用不友好语言,垃圾信息或作弊被封禁！");
}}else{
setText("board","User Serial: "+uS+"\nUser ID Creation: "+sDate+"\nLast Login Time: "+lDate+"\nXP: "+compo+"\nTotal Gaming Time: "+Math.floor(tTime/60)+" m "+Math.round(tTime%60)+" s\nComplete Game 1: "+hWo+"\nGame 1 Click: "+g1C+"\nWin Game 2: "+hWt+"\nLose Game 2: "+g2L+"\nGame 2 Win-Lose Ratio: " +Math.round((hWt/g2L)*100)/100+":1\nGame 3 Coin Collected: "+coin+"\nGame 3 Ball Lost: "+g3L+"\nGame 4 Successful Click: "+totalP+"\nGame 1 Best Time: "+bTm+" seconds\nGame 2 Best Sreak: "+hiS+"\nGame 3 High Score: "+highS3+"\nGame 4 High Score: "+hS+"\nProfile Visit Time: "+acTi +"\nCompleted Recovery Info: "+isF+"\nBan: "+isB+ar+"Global Visit Time: "+val+"\nGlobal Secret Unlock Time: "+dbgT+"\nGlobal Game 1 Click: "+glo2+"\nGlobal Game 1 Win: "+glo1+"\nGlobal Game 2 Win: "+glo3+"\nGlobal Game 2 Lose: "+glo4+"\nGlobal Game 2 Win-Lose Ratio: "+Math.round((glo3/glo4)*100)/100+":1\nGlobal Game 3 Coins: "+glo6+"\nGlobal Game 3 Ball Lost: "+glo7+"\nGlobal Game 4 Check: "+glo8+"\nRegistered Player Count: "+glo9+"\nGlobal Play Time: "+gl1+" m "+gl2+" s\nGlobal Total XP: "+glo11+ "\nTotal collected stickers: "+glo22+ar+"User ID: "+uI);
if (banned=== 0){
  if (liU){
setText("explain","Want more stat item? Use Settings - feedback to give me suggestions!");
  }else{
setText("explain","Guest data will not count towards global stats.");   
}}else{
setText("explain", "You're banned due to use of unfriendly language, spamming, or cheating!");
}}}
onEvent("detailed", "click", function() {
changeScreen("leB");
setS("image11", "ge", "safee");
setT("lbtitle", "Detailed Stats", "详细统计");
playS("tutorialDisappear", "chime");
if (p3){
  showElement("p4");
}else{
  hideElement("p4");
}if (lDate === undefined){
  lDate = sDate;
}if (!liU){
  uI = uS = lDate = sDate = acTi = "N/A";
}else{
  uI = currentUID;
  uS = recentID;
}
  dodetG();
});
function recTime(){
  sTime = getTime();
  edT = true;
}
function endTime(){
if (edT){
  eTime = getTime();
  eTime = eTime/1000;
  sTime = sTime/1000;
  tTime += eTime - sTime;
  edT = false;
}}
function gCT(value){
  var cDate = new Date();
  var month = cDate.getMonth() + 1;
  var day = cDate.getDate();
  var year = cDate.getFullYear();
  var hour = cDate.getHours();
  var minute = cDate.getMinutes();
if (value === 1){
if (minute < 10){
  sDate = month + "/" + day + "/" + year + " " + hour + ":0" + minute;
}else{
  sDate = month + "/" + day + "/" + year + " " + hour + ":" + minute;
}}else if (value === 0){
  getHoli(month, day);
if (minute < 10){
  nDate = month + "/" + day + "/" + year + " " + hour + ":0" + minute;
}else{
  nDate = month + "/" + day + "/" + year + " " + hour + ":" + minute;
}}else if (value === 2){
if (minute < 10){
  gDate = month + "/" + day + "/" + year + " " + hour + ":0" + minute;
}else{
  gDate = month + "/" + day + "/" + year + " " + hour + ":" + minute;
}}}
onEvent("mobile", "click", function() {
  stopTimedLoop(rLo);
  isC = true;
  changeScreen("sCredit");
  setText("easter", "");
  showE(["qr"]);
  setImageURL("image8", "assets/Pirates.jpg");
  setT("crT", "This app is optimized for Mobile - scan the QR code to try it out!\n\nIntroducing the brand new AppHub! All apps made by the developer is here! Click the image to check it out!", "此程序为手机做了优化！手机扫描QR码立即尝试！\n\n全新的程序枢纽！内含作者所有的程序，点击图片，快去看看吧！");
  setT("crH", "More Games & Mobile!", "更多游戏&在手机上玩！");
  playS("coinPack", "paget");
});
onEvent("xpR", "click", function() {
changeScreen("cnfP");
playS("Flashlight", "menuse");
setT("thT", "XP Rules", "XP规则");
setT("thank2", "2 successful clicks in 'Ultimate Click': 1 XP\nEvery win in 'Modified Blackjack': 4 XP\nEvery coin collected in 'Enhanced Pong': 3 XP\nEvery successful click in 'Skillcheck': 2 XP\nDefeat your own record (any game): 10 XP\nGet an achievement: 100 XP\nGet a festival sticker: 100 XP\nOnly after log-in: \nFill recovery info: 100 XP\nDefeat global record (any game): 200 XP", "‘终极点击’成功点击2次：1 XP\n ‘修改版21点’赢一轮：4 XP\n ‘改良版撞球’收集一个金币：3 XP\n ‘滑块’成功匹配一个滑块：2 XP\n 打破自己的记录（任意游戏）：10 XP\n获得任一成就：100 XP\n获得一个节日贴纸：100 XP\n仅限登录后：\n绑定还原信息 100 XP\n 打败全球记录（任意游戏）：200 XP");
});
function getResult(){
readRecords("comments", {}, function(value){cL = value;});
readRecords("playerProgress", {}, function(value){uL = value;});
}
function checkDevReply(){
getResult();
sj = pj = false;
devList = [];
showElement("dev");
readRecords("playerProgress", {}, function(value){
for (var a = 0; a < value.length; a++){
if (value[a].fl === 1 && !value[a].bn){
  pj = true;
  setImageURL("dev", "assets/tablet.png");
  flagList.push(value[a].id); 
}}});
readRecords("comments", {}, function(value){
for (var i = 0; i < value.length; i++){
if (value[i].reply === "noreply" && !value[i].archived){
devList.push(i);
sj = true;
setImageURL("dev", "assets/poi.png");
hideElement("cover");
showE(["next", "prev"]);
}}});
if (!sj && !pj){
  setImageURL("dev", "assets/chall.png"); 
  showElement("cover");
  hideE(["next", "prev"]);
}}
onEvent("dev", "click", function() {
  miniC();
  stopTimedLoop(rLo);
  tLO = timedLoop(1800, minireq);
  gCT(2);
  getGlobal();
  changeScreen("devReply");
  showElement("great");
  hideE(["lnH", "dev"]);
  setText("getT", "");
  setText("banName", "");
  kZ = "";
  tmpLog = "";
});
onEvent("pwA", "input", function(event) {
var inputStr = getText("pwA");
if (inputStr.length > kZ.length) {
var nAdded = inputStr.length - kZ.length;
kZ=kZ.substring(0,event.selectionStart-nAdded)+inputStr.substring(event.selectionStart-nAdded,event.selectionStart)+kZ.substring(event.selectionStart-nAdded,kZ.length);
}else{
var nDeleted = kZ.length - inputStr.length;
kZ=kZ.substring(0,event.selectionStart)+kZ.substring(event.selectionStart+nDeleted,kZ.length);
}
setText("pwA",repCh("•",kZ.length));
});
function repCh(char,times){
var myStr = "";
for(var i = 0; i<times; i++){
  myStr = myStr+char;
}
return myStr;
}
onEvent("checkB", "click", function() {
miniC();
if (kZ === v.slice(lBo-salt*s2, uBo-salt*s2).split("").reverse().join("")){
  isIn = true;
  hideE(["great", "prev"]);
  showElement("lnH");
  setText("iLength", "1 / " + devList.length);
  p = 0;
  tmpLog = tmpLog + " Accessed by "+recentID+" / " + kg + ". ";
if (devList.length === 1 || !sj){
  hideElement("next");
}else{
  showElement("next");
}}else{
  isIn = false;
  playS("UIinactive", "upp");
  tmpLog = tmpLog+" Failed attempt by "+recentID+" / "+kg; 
}
newRec.time = gDate;
newRec.action = tmpLog;
createRecord("devLog", newRec, function(value){
  tmpID = value.id;
});
setText("pwA", "");
});
onEvent("devMenu", "click", function() {
  start();
  stopTimedLoop(tLO);
  stopTimedLoop(tLT);
if (isIn){
  cancell();
  cancelll(true);
}});
onEvent("prev", "click", function() {
  showElement("next");
if (p < 1){
  hideElement("prev");
}else{
  p--;
if (q){
  setText("iLength", p+1 + " / " + cL.length.toString()); 
}else{
  setText("iLength", p+1 + " / " + devList.length.toString());
}if (p < 1){
  hideElement("prev");
}}});
onEvent("next", "click", function() {
  showElement("prev");
if (q){if (p === cL.length-1){
  hideElement("prev");
}else{
  p++;
  setText("iLength", p+1 + " / " + cL.length.toString());
if (p === cL.length-1){
  hideElement("next");
}}}else{if (p === devList.length-1){
  hideElement("prev");
}else{
  p++;
  setText("iLength", p+1 + " / " + devList.length.toString());
if (p === devList.length-1){
  hideElement("next");
}}}});
onEvent("cm", "click", function() {
  cancelll(false);
if (q){
  setText("getT", cL[p].comment);
}else{
  setText("getT", cL[devList[p]].comment); 
}});
onEvent("nm", "click", function() {
  cancelll(false);
if (q){
  setText("getT", cL[p].UID); 
}else{
  setText("getT", cL[devList[p]].UID);
}});
onEvent("tp", "click", function() {
  cancelll(false);
if (q){
  setText("getT", cL[p].type);  
}else{
  setText("getT", cL[devList[p]].type);
}});
onEvent("rp", "click", function() {
  cancelll(false);
  state = 0;
if (q){
  setText("getT", cL[p].reply); 
}else{
  showElement("sav");
  setText("getT", cL[devList[p]].reply); 
}});
onEvent("rr", "click", function() {
  cancelll(false);
if (q){
 setText("getT", cL[p].rr); 
}else{
 setText("getT", cL[devList[p]].rr); 
}});
onEvent("rb", "click", function() {
  cancelll(false);
if (q){
  setText("getT", cL[p].rbk);  
}else{
  setText("getT", cL[devList[p]].rbk);  
}});
onEvent("rk", "click", function() {
  cancelll(false);
if (q){
  setText("getT", cL[p].rbk2); 
}else{
  setText("getT", cL[devList[p]].rbk2); 
}});
onEvent("rrb", "click", function() {
  cancelll(false);
if (q){
  setText("getT", cL[p].rrbk);  
}else{
  setText("getT", cL[devList[p]].rrbk);  
}});
onEvent("arc", "click", function() {
  cancelll(false);
  state = 1;
if (q){
  setText("getT", cL[p].archived); 
}else{
  showElement("sav");
  setText("getT", cL[devList[p]].archived); 
}});
onEvent("sav", "click", function() {
  checkI();
if (state === 0){
  cL[devList[p]].reply = getText("getT"); 
  tmpLog = tmpLog + "Save reply for #" +  cL[devList[p]].id + ". ";
}if (state === 1){
  cL[devList[p]].archived = true;
  tmpLog = tmpLog + "Archived #" +  cL[devList[p]].id + ". ";
}
updateRecord("comments", cL[devList[p]], function(){});
hideElement("sav");
});
onEvent("ban", "click", function() {
  miniC();
  var i = getText("banName");
  readRecords("playerProgress", {}, function(value){
for (var x = 0; x < value.length; x++){
if (value[x].UID === i || value[x].id.toString() === i){
  value[x].bn = 1;
  updateRecord("playerProgress", value[x], function(){});
  tmpLog = tmpLog + "Ban " + value[x].id + ". ";
  cancelll(true);
}}});
  getResult();
});
onEvent("unB", "click", function() {
  miniC();
  var i = getText("banName");
  readRecords("playerProgress", {}, function(value){
for (var x = 0; x < value.length; x++){
if (value[x].UID === i || value[x].id.toString() === i){
  value[x].bn = 0;
  updateRecord("playerProgress", value[x], function(){});
  tmpLog = tmpLog + "Unban " + value[x].id + ". ";
  cancelll(true);
}}});
  getResult();
});
onEvent("allmes", "click", function() {
  cancell();
  cancelll(false);
  setText("iLength", "1 / " + cL.length.toString());
  p = 0;
  q = true;
  hideE(["sav", "prev"]);
if (cL.length > 1){
  showElement("next");
}else{
  hideElement("next");
}});
onEvent("archive", "click", function() {
  cancell();
  cancelll(false);
  setText("iLength", "1 / " + devList.length.toString());
  p = 0;
  q = false;
  hideE(["sav", "prev"]);
if (!sj){
  showElement("cover");
}if (devList.length > 1){
  showElement("next");
}else{
  hideElement("next");
}});
onEvent("goto", "click", function() {
  miniC();
  hideE(["sav","cover"]);
  cancell();
  var b = false;
  var read = getText("banName");
for (var i = 0; i < uL.length; i++){
if (uL[i].id.toString() === read || uL[i].UID === read){
  hideE(["banName", "door", "goto"]);
  b = true;
  setText("getT","ID: "+uL[i].id+" / UID: "+uL[i].UID+" / m1: "+uL[i].m1+" / m2: "+uL[i].m2+" / m3: "+uL[i].m3+" / m4: "+uL[i].m4+" / m5: "+uL[i].m5+" / m6: "+uL[i].m6+" / m7: "+uL[i].m7+" / m8: "+uL[i].m8+" / G1C: "+uL[i].w1+" / G2W: "+uL[i].w2+" / isChi: "+uL[i].l+" / sound: "+uL[i].s+" / g1H: "+uL[i].g1H+" / g2H: "+uL[i].g2H+" / g3H: "+uL[i].g3H+" / 3Coin: "+uL[i].g3C+" / g4H: "+uL[i].g4H+" / G4T: "+uL[i].g4T+" / BG: "+uL[i].c+" / ban: "+uL[i].bn+" / Access: "+uL[i].ac+" / XP: "+uL[i].co+" / time: "+uL[i].tT+" / sD: "+uL[i].sD+" / lD: "+uL[i].lD+" / 1PCB: "+uL[i].pcB+" / m9: "+uL[i].m9+" / m10: "+uL[i].m10+" / flag: "+uL[i].fl+" / G2L: g2L: "+uL[i].g2L+" / G3L: "+uL[i].g3L+" / G1C: "+uL[i].g1C+" / extraUnlock: "+uL[i].p+" / GFX(BD, BX, ba, bb): "+uL[i].BD+uL[i].BX+uL[i].ba+uL[i].bb + " / Fest(1, 2, 3, 4, 5, 6): "+uL[i].h1+uL[i].h2+uL[i].h3+uL[i].h4+uL[i].h5+uL[i].h6);
  tmpLog = tmpLog + "Get profile: " + uL[i].id + ". ";
  teep = uL[i].UID;
}}if (!b){
  teep = null;
  showElement("door");
  setText("getT", "No profile.");
}});
onEvent("vc", "click", function() {
cancell();
cancelll(true);
hideElement("vc");
startWebRequest("https://pastebin.com/raw/" + bc, function(status, type, content){
if (status == 200) {
showElement("vc");
setText("getT", content.split("").reverse().join(""));
}});});
onEvent("addR", "click", function() {
miniC();
var come = {};
come.comment = "direcreply";
come.UID = teep;
come.type = "Developer Initiated";
come.reply = getText("getT");
come.rr = come.rbk = come.rbk2 = come.rrbk = "empty";
come.archived = false;
createRecord("comments", come, function(){}); 
tmpLog = tmpLog + "Add manual reply to "+teep+ ". Content: "+ come.reply+". ";
cancelll(true);
});
onEvent("g1c", "click", function() {
  grop();
  orig = g1ba;
  conId = g1Id;
  newd = 99;
for (var i = 0; i < uL.length; i++){
if (!uL[i].bn && parseFloat(uL[i].g1H) < newd){
  newd = uL[i].g1H;
  proId = uL[i].id;
}}
  situation = 1;
  setText("getT", "new: "+newd +" by: "+proId+ " / original: " + orig + " by: " + conId);
});
onEvent("g2c", "click", function() {
  grop();
  orig = g2ba;
  conId = g2Id;
for (var i = 0; i < uL.length; i++){
if (!uL[i].bn && uL[i].g2H > newd){
  newd = uL[i].g2H;
  proId = uL[i].id;
}}
  situation = 2;
  setText("getT", "new: "+newd +" by: "+proId+ " / original: " + orig + " by: " + conId);
});
function grop(){
  cancelll(true);
  getResult();
  showElement("save");
  newd = 0;
}
onEvent("g3c", "click", function() {
  grop();
  orig = g3ba;
  conId = g3Id;
for (var i = 0; i < uL.length; i++){
if (!uL[i].bn && uL[i].g3H > newd){
  newd = uL[i].g3H; 
  proId = uL[i].id;
}}
situation = 3;
setText("getT", "new: "+newd +" by: "+proId+ " / original: " + orig + " by: " + conId);
});
onEvent("g4c", "click", function() {
grop();
orig = g4ba;
conId = g4Id;
for (var i = 0; i < uL.length; i++){
if (!uL[i].bn && uL[i].g4H > newd){
  newd = uL[i].g4H;
  proId = uL[i].id;
}}
situation = 4;
setText("getT", "new: "+newd +" by: "+proId+ " / original: " + orig + " by: " + conId);
});
function cancell(){
  situation = 0;
  newd = proId = conId = orig = null;
  setText("getT", "");
  hideElement("save");
  syncLog();
}
onEvent("save", "click", function() {
  miniC();
  if (situation === 1){
setKeyValue("g1g", newd, function(){});
setKeyValue("g1d", proId, function(){});
tmpLog = tmpLog +"G1 calib from "+orig+" by "+conId+" to "+newd+" by "+proId+". ";
  }else if (situation === 2){
setKeyValue("g2g", newd, function(){});
setKeyValue("g2d", proId, function(){});
tmpLog = tmpLog +"G2 calib from "+orig+" by "+conId+" to "+newd+" by "+proId+". "; 
  }else if (situation === 3){
setKeyValue("g3g", newd, function(){});
setKeyValue("g3d", proId, function(){});
tmpLog = tmpLog +"G3 calib from "+orig+" by "+conId+" to "+newd+" by "+proId+". ";
  }else if (situation === 4){
setKeyValue("g4g", newd, function(){});
setKeyValue("g4d", proId, function(){});
tmpLog = tmpLog +"G4 calib from "+orig+" by "+conId+" to "+newd+" by "+proId+". "; 
  }
  cancell();
});
function cancelll(value){
  showE(["banName", "door", "goto"]);
  setText("banName", "");
  setText("getT", "");
  hideElement("sav");
  syncLog();
if (value){
  showElement("cover");
}else{
  hideElement("cover");
}}
function syncLog(){
if (tmpID !== undefined && tiFa){
  tiFa = false;
  checkI();
  updateRecord("devLog", {id:tmpID,time:gDate,action:tmpLog}, function(){});
}}
onEvent("hash", "click", function() {
  cancelll(false);
if (q){
  setText("getT", cL[p].id);  
}else{
  setText("getT", cL[devList[p]].id);  
}});
onEvent("de", "click", function() {
changeScreen("debug");
hideE(["hxt", "bvd"]);
showE(["label6", "tz0", "tz1", "lg", "tz2", "tz3", "tz4", "tz5", "tz6", "debugB", "simp", "dib", "rs", "Ow", "Ts", "tP", "tW", "tS", "tC", "3Hs", "4hit", "4hs", "xp", "xpr"]);
simT = true;
stopTimedLoop(tLO);
stopTimedLoop(tLT);
cancell();
cancelll(true);
});
onEvent("getHis", "click", function() {
  miniC();
  cancell();
  cancelll(true);
  var j = 0;
  var text = "";
readRecords("devLog", {}, function(value){
for (var i = value.length - 1; i >= 0; i--){
if (j < 200){
  j++;
  text = text + value[i].time + value[i].action + "\n";
  setText("getT", text);
}}});});
onEvent("rep", "click", function() {
  miniC();
  cancell();
  cancelll(true);
  var str = "Monitoring: PBL\n";
for (var v =0; v < pBL.length; v++){
 str = str +pBL[v]+", ";
}
  str = str + "\nNormBan\n";
  for (var g =0; g < uL.length; g++){
  if (uL[g].bn === 1){ 
   str = str + uL[g].id + ", ";
}}
 str = str + ar + "Detect log: (*: 1 = low, 2 = PBL)\n";  
 readRecords("bannedCodeId",{},function(m){
for (var t = 0; t<m.length;t++){
  str = str + m[t].UID + " (UID) / " + m[t].CID + " (CID) / "+m[t].v+ " (*)\n";
}
  setText("getT", str);
});});
onEvent("flags", "click", function() {
  miniC();
  cancell();
  cancelll(true);
  var string = "Flagged: ";
for (var i = 0; i < flagList.length; i++){
  string = string + flagList[i] + " / ";
}
  showElement("cover");
  setText("getT", string);
});
onEvent("unflag", "click", function() {
  miniC();
  var i = getText("banName");
readRecords("playerProgress", {}, function(value){
for (var x = 0; x < value.length; x++){
if (value[x].UID === i || value[x].id.toString() === i){
  value[x].fl = 0;
  updateRecord("playerProgress", value[x], function(){});
  tmpLog = tmpLog + "Unflag " + value[x].id + ". ";
  cancelll(true);
}}});
  getResult();
});
function minireq(){
startWebRequest("https://330taresource.studlife.com/", function(status){
  if (!blk){
  showElement("image10");
  blk = true;
}else{
  hideElement("image10");
  blk = false;
}if (status === 0){
 showE(["great", "lnH", "intR"]);
 TPP = false;
}else{
 hideElement("intR");
 if (!TPP){
 hideElement("lnH");
 TPP = true;
}}});}
onEvent("GW", "click", function() {doP();});
onEvent("GFW", "click", function() {doP();});
function doError(value){
setStyle("MLC1", "background: #f8be15");
setImageURL("decor", "assets/alert.jpg");
setT("eI", "Cannot Contact Cloud Server", "无法联络云端服务器");
setT("ret", "Return", "返回");
if (iCh === 1){
 if (value === 4){
  setText("anno","错误4：你的连接可能不稳定，或者firebaseio.com服务器暂时离线 - 所有云端服务暂时不可用 - 受影响的模块包括云端存档，排行榜，全球高分，还原信息，全球统计，反馈。\n\n如果你在有网络审查的地区，例如中国大陆：\n\n你所在地区的网络审查对Google Firebase实行了封禁。如果你没有使用翻墙工具，例如VPN，以上功能将不可用。\n\n如果你不在有网络审查的地区：\n\n请在登录页面静候几秒，或刷新网页，或换一个网络环境重试。");
}if (value === 5){
  setText("anno", "错误5："+errC+"秒前的云端保存进度/提交反馈/删除/创建存档失败，在有网络的情况下无法联络firebaseio.com。我们正在重试 - 请不要关闭此网页。在此问题被解决之前，所有云端功能将不可用。\n\n如果你在有网络审查的地区，包括中国大陆：\n你的翻墙工具连接可能不稳定 - 请重新连接。因为你所在的地区封禁了由Google Firebase提供的服务器，你需要翻墙工具，比如VPN，来使用游戏的联网功能。\n\n如果你在的地区没有网络审查：请检查你的连接，并等待程序重试。");
}}else{if (value === 4){
  setText("anno","Error 4: Your connection may be unstable, or firebaseio.com is temporarily offline - All online functionality is temporarily unavailable - this includes cloud save, leaderboard, global high score, recovery info, global stat, and feedback.\n\nIf you are in places with internet censorship, such as Mainland China:\n\nYour location's internet censor has banned Google Firebase. The above functionality will be unavailable if you are not using a circumvention tool, such as VPN.\n\nIf you are in a place without internet censorship:\n\nPlease wait a few seconds at the login screen, or refresh the page, or try over a different network."); 
}if (value === 5){
  setText("anno", "Error 5: Cloud progress save / feedback submission / create / delete profile "+errC+" seconds ago failed, We lost contact with firebaseio.com while having an internet connection. We are retrying - please don't close this web page. All cloud functionality will be unavailable until this problem resolve.\n\nIf you are in places with internet censorship, such as Mainland China:\nYour circumvention tool may be unstable - please reconnect and try again. You need a circumvention tool to access the game's cloud features, as Google Firebase is banned at your location.\n\nIf you are in places without internet censorship:\nPlease check your connection, and wait for the program to retry.");
}}}
function doP(){
changeScreen("MLC");
doError(4);
playS("UIinactive", "upp");
}
onEvent("ret", "click", function() {
  changeScreen("cLan");
  playS("UIinactive", "upp");
});
onEvent("WF", "click", function() {
  changeScreen("MLC");
  playS("UIinactive", "upp");
});
onEvent("FW", "click", function() {
  changeScreen("MLC");
  playS("UIinactive", "upp");
});
onEvent("ppt", "click", function() {
  tLO = timedLoop(1200, checkInternet);
  doEnter();
});
onEvent("btb", "click", function() {
  stvar = 0;
  changeScreen("bPuu");
  setText("ur", "https://studio.code.org/projects/applab/2wRwHjna0NMFT0d-39OL57Gy7fjSw9GbxKfXV4k_dRw");
  playS("Flashlight", "menuse");
});
onEvent("rt", "click", function() {
  changeScreen("sCredit");
  playS("Flashlight", "menuse");
});
onEvent("rrt", "click", function() {
  changeScreen("sCredit");
  playS("Flashlight", "menuse");
});
onEvent("stB", "click", function() {
  stvar = 0;
  setT("s44", "volume: low", "音量：低");
  changeScreen("sT");
  playS("Flashlight", "menuse");
});
function setfir(){
  BD = 0;
  sesof();
if (!scp){
  setImageURL("MMIMG","assets/generic1.png");
}for (var i = 0; i < 32; i++){
  setImageURL(bgAll[i], "assets/" + bgAll[2 * i + 32] + ".png");
}}
function sesof(){
switch(sound){
  case 0:
setS("sBox", "soundoff", "sohf");
break;
  case 1:
setS("sBox", "sounmid", "sohmid");
break;
  case 2:
setS("sBox", "soundon", "sohn");
break;
}}
function setSec(){
  BD = 1;
  sesof();
if (!scp){
  setImageURL("MMIMG","assets/bee.png");
}for (var i = 0; i < 32; i++){
  setImageURL(bgAll[i], "assets/" + bgAll[2 * i + 33] + ".png");
}}
onEvent("bgchan", "click", function() {
switch(BG){
  case 0:
BG = 1;
setNew();
break;
  case 1:
BG = 2;
setH();
break;
  case 2:
BG = 3;
setMst();
break;
  case 3:
BG = 0;
setOriginal();
break;
}
setText("le1", BG+1 + " / 4");
updateProfile();
playS("coinPack", "paget");
});
onEvent("btchan", "click", function() {
if (BD === 0){
  setSec();
}else{
  setfir();
}
  setText("le2", BD+1 + " / 2");
  updateProfile();
  playS("coinPack", "paget");
});
onEvent("rrret", "click", function() {
if (liU){
  changeScreen("cLan");    
}else{
  showE(["bab", "bvb", "bcb"]);
}
  playS("BottleCork", "buble");
});
onEvent("sochan", "click", function(){
if (BX === 0){
  BX = 1;
  playS("coinPack", "paget");
}else{
  BX = 0;
  playS("coinPack", "paget");
}
  setText("le3", BX+1 + " / 2");
  updateProfile();
});
onEvent("prv1", "click", function() {playS("BottleCork", "buble");});
onEvent("prv2", "click", function() {playS("GiftBox", "charl");});
onEvent("prv3", "click", function() {playS("HitGoldCrate", "dmgo");});
onEvent("prv4", "click", function() {playS("woodHit", "explod");});
onEvent("prv5", "click", function() {playS("EpicBellow", "kali");});
onEvent("prv6", "click", function() {playS("BonusBox", "idolge");});
onEvent("prv7", "click", function() {playS("coin4", "gem2");});
onEvent("prv8", "click", function() {playS("rewardDrop", "menure");});
onEvent("prv9", "click", function() {playS("TutorialAppears", "pagetur");});
function setbaone(){
  ba = 0;
for (var i = 0; i < allbtn.length; i++){
  setStyle(allbtn[i], "background: #"+cAiner[i]);
}}
function setbatwo(){
  ba = 1;
for (var i = 0; i < allbtn.length; i++){
  setStyle(allbtn[i], "background: linear-gradient(#"+cBiner[i]+");");
}}
function setbathr(){
  ba = 2;
for (var i = 0; i < allbtn.length; i++){
  setStyle(allbtn[i], "background: radial-gradient(#"+cBiner[i]+");");
}}
onEvent("bachan", "click", function() {
switch(ba){
  case 0:
setbatwo();
break;
  case 1:
setbathr();
break;
  case 2:
setbaone();
break;
}
setText("le4", ba+1 + " / 3");
updateProfile();
playS("coinPack", "paget");
});
setStyle("bvb", "background: linear-gradient(#d9f8f7, #a6bdf9);");
var rProm = ["warnd", "uidG", "meC", "meE", "coT", "prv6", "deT", "getOne", "dTT", "getTwo", "dT", "getThree", "GOT", "board", "explain", "r1", "aO", "sQ", "aT", "reco3", "an", "crT", "sNT", "loN", "reminder", "pSpe", "bvb", "hide", "1", "1", "1", "1", "1", "1", "0", "1", "0", "1", "0", "1", "0", "0", "0", "0", "1", "0", "1", "0", "1", "0", "0", "0", "1", "0", "1", "1", "0", "1"];
function setbbone(){
bb = 0;
for (var j = 0; j < promL.length; j++){
  setStyle(promL[j], "border-radius: 8px;");
  setStyle(promL[j], "border: 1px solid transparent;");
}for (var f = 0; f < 29; f++){
  if (rProm[f + 29] === "1"){
setStyle(rProm[f], "border-color: #000000;");
  }else{
setStyle(rProm[f], "border-color: #ffffff;");    
}}for (var i = 0; i < allbtn.length; i++){
  setStyle(allbtn[i], "border-radius: 8px;");
  setStyle(allbtn[i], "border: 1px solid #4d575f");
}}
function setbbtwo(){
bb = 1;
for (var j = 0; j < promL.length; j++){
  setStyle(promL[j], "border-radius: 14px;");
  setStyle(promL[j], "border: 2px solid transparent;");
}for (var f = 0; f < 29; f++){
  if (rProm[f + 29] === "1"){
setStyle(rProm[f], "border-color: #ffffff;");
  }else{
setStyle(rProm[f], "border-color: #000000;");    
}}for (var i = 0; i < allbtn.length; i++){
  setStyle(allbtn[i], "border-radius: 16px;");
  setStyle(allbtn[i], "border: 2px solid #"+cAoutr[i]);
}}
function setbbthr(){
bb = 2;
for (var j = 0; j < promL.length; j++){
  setStyle(promL[j], "border-radius: 12px;");
  setStyle(promL[j], "border: 2px solid transparent;");
}for (var f = 0; f < 29; f++){
 setStyle(rProm[f], "border-color: #000000;"); 
}for (var i = 0; i < allbtn.length; i++){
  setStyle(allbtn[i], "border-radius: 14px;");
  setStyle(allbtn[i], "border: 2px solid #"+cBoutr[i]);
}}
function setbbfor(){
bb = 3;
for (var j = 0; j < promL.length; j++){
  setStyle(promL[j], "border-radius: 0px;");
  setStyle(promL[j], "border: 1px solid transparent;");
}for (var f = 0; f < 29; f++){
 setStyle(rProm[f], "border-color: #ffffff;"); 
}for (var i = 0; i < allbtn.length; i++){
  setStyle(allbtn[i], "border: 0px solid #4d575f;");
  setStyle(allbtn[i], "border-radius: 0px");
}}
var promL = ["warnd", "uidG", "meC", "meE", "coT", "prv6", "deT", "getOne", "dTT", "getTwo", "dT", "getThree", "GOT", "board", "explain", "uWT", "r1", "aO", "sQ", "aT", "reco3", "an", "crT", "sNT", "loN", "reminder", "pSpe", "bvb", "image11", "image7", "image8", "image5", "image6", "twoWo", "onePic", "txa2", "hide"];
var allbtn = ["vi", "rt", "GUIDB", "lAg", "aYes", "aNo", "English", "Chinese", "cmB", "credit", "tMa", "submit", "decline", "bgchan", "btchan", "sochan", "bachan", "bbchan", "rrret", "3Menu", "pA", "threeEM", "Om", "xpR", "boardMain", "lR", "lM", "clickBut", "creditS", "stB", "btb", "tM", "tD", "toP", "update", "extra", "leader", "legal", "mobile", "SG1B", "SG2B", "SG3B", "SLB", "ttB", "ssB", "detailed", "TUTmb", "twoRep", "twoR", "eO", "winTo", "confirm", "check", "cancel", "fY", "fN", "Save", "Re", "gB", "bcb", "oky","btn", "nop", "fest", "btM", "button1", "button2", "button4"];
var bgAll = ["ppt", "internet", "warn2", "warn", "another", "image9", "excla", "bell", "jO", "jT", "reject3", "image4", "l", "r", "image7", "G1BG", "2GPic", "ball", "coin", "bar", "prv1", "prv2", "prv3", "prv4", "prv5", "prv6", "prv7", "prv8", "prv9", "image5", "image6", "dwa", "p", "chatt", "nowifi", "noInt", "nowifi", "noInt", "nowifi", "noInt", "nowifi", "noInt", "3star", "dimc","exc", "exc2", "bell", "ygm","false", "nota", "false", "nota", "false", "nota","frame", "cove", "frame", "cove","frame", "cove", "66_rube_goldpig_machine", "exch","Workshop_background", "bgg","chest", "rwdc","ball", "blc","1", "tgft", "Particles", "clouf", "urt", "bal", "71_lost_pork_raiders", "goldt", "3star", "dimc", "chest", "rwdc", "false", "nota", "Workshop_background", "bgg", "1", "tgft", "coinPile", "coin", "exc", "exc2", "63_pigfall", "elos", "63_pigfall", "elos", "ques", "quest"];
var cBiner = ["82725a, #403d39", "84ff00, #55b01a", "ffff03, #c9b81a", "0088ff, #401ca3", "ff0004, #b80f63", "0088ff, #401ca3", "876eff, #472fbb", "fc5751, #a63833", "f6ff00, #72bd17", "00ffb8, #19b071", "84ff00, #55b01a", "fc6449, #9e5d2e", "7649fc, #4626a6", "0084ff, #1632cc", "ff0004, #b80f63", "84ff00, #55b01a", "ff0055, #a8197d", "43f7d6, #32a8a4", "57a1fa, #306fba", "ff0055, #a8197d", "84ff00, #55b01a", "ff0055, #a8197d", "ff00aa, #d1135c", "6365f7, #2022c7", "84ff00, #55b01a", "84ff00, #55b01a", "ff00aa, #d1135c", "424242, #000000", "ae47fc, #6010c9", "b4c5d9, #4c7191", "877b67, #5c513e", "ff0055, #a8197d", "84ff00, #55b01a", "e3970b, #946307", "6afccf, #2dc294", "549693, #285957", "f3f794, #b6ba5f", "ffbf00, #b07e1a", "af6acc, #80399e", "84ff00, #55b01a", "058aff, #0c3bc7", "8ff7f5, #04b0ad", "c94b7f, #822149", "ff0004, #b80f63", "ffff00, #e3b10e", "84ff00, #55b01a", "ff0055, #a8197d", "84ff00, #55b01a", "ff0055, #a8197d", "84ff00, #55b01a", "ff0055, #a8197d", "ff7575, #c44343", "84ff00, #55b01a", "6365f7, #2022c7", "ff0055, #a8197d", "0088ff, #401ca3", "84ff00, #55b01a", "84ff00, #55b01a", "7d7463, #4a4439", "ffbf00, #b07e1a", "666666, #000000", "ffbf00, #b07e1a", "666666, #a3a320", "ff0055, #a8197d", "ffff00, #a3a320", "e3ff14, #909f1a", "ff0004, #b80f63", "0088ff, #401ca3"];
var cAiner = ["45423d", "5fd512", "ebff00", "2c00ff", "ff0004", "2c00ff", "472fbb", "c33530", "65ff00", "00ffb8", "5fd512", "ff2600", "0600ff", "0041ff", "ff0004", "5fd512", "ff0080", "46dfaf", "3b7ece", "ff0080", "5fd512", "ff0080", "ff0080", "0003ff", "5fd512", "5fd512", "ff0080", "0a0a0a", "3f00ff", "5980af", "5d523f", "ff0080", "5fd512", "a66d00", "46dfaf", "2c615e", "d7dc6e", "ffa400", "8c37b0", "5fd512", "0041ff", "00fffa", "982353", "ff0004", "f4ff00", "5fd512", "ff0080", "5fd512", "ff0080", "5fd512", "ff0080", "fd4b4b", "5fd512", "0003ff", "ff0004", "2c00ff", "5fd512", "5fd512", "474238", "ffa400", "333333", "ffa400", "333333", "ff0080", "ffff00", "e1ff00", "ff0004", "2c00ff",];
var cAoutr = ["babdc2", "a02aed", "1400ff", "d3ff00", "00fffb", "d3ff00", "b8d044", "3ccacf", "9a00ff", "ff0047", "a02aed", "00d9ff", "f9ff00", "ffbe00", "00fffb", "a02aed", "00ff7f", "b92050", "c48131", "00ff7f", "a02aed", "00ff7f", "00ff7f", "fffc00", "a02aed", "a02aed", "00ff7f", "f5f5f5", "c0ff00", "a67f50", "a2adc0", "00ff7f", "a02aed", "5992ff", "b92050", "d39ea1", "282391", "005bff", "73c84f", "a02aed", "ffbe00", "ff0005", "67dcac", "00fffb", "0b00ff", "a02aed", "00ff7f", "a02aed", "00ff7f", "a02aed", "00ff7f", "02b4b4", "a02aed", "fffc00", "00fffb", "d3ff00", "a02aed", "a02aed", "b8bdc7", "005bff", "dddddd", "005bff", "dddddd", "00ff7f", "0000ff", "1e00ff", "00fffb", "d3ff00"];
var cBoutr = ["22211e", "2f6a08", "757f00", "16007f", "7f0001", "16007f", "23175d", "611a18", "327f00", "007f5c", "2f6a08", "7f1300", "02007f", "00207f", "7f0001", "2f6a08", "7f0040", "157c5c", "1a3e6a", "7f0040", "2f6a08", "7f0040", "7f0040", "00017f", "2f6a08", "2f6a08", "7f0040", "050505", "1f007f", "2a3f59", "2e291f", "7f0040", "2f6a08", "533600", "157c5c", "16302f", "808420", "7f5200", "461b58", "2f6a08", "00207f", "007f7d", "4c1129", "7f0001", "7a7f00", "2f6a08", "7f0040", "2f6a08", "7f0040", "2f6a08", "7f0040", "a20101", "2f6a08", "00017f", "7f0001", "16007f", "2f6a08", "2f6a08", "23211c", "7f5200", "000000", "7f5200", "000000", "7f0040", "7f7f00", "707f00", "7f0001", "16007f"];
onEvent("bbchan", "click", function() {
switch(bb){
  case 0:
setbbtwo();
break;
  case 1:
setbbthr();
break;
  case 2:
setbbfor();
break;
  case 3:
setbbone();
break;
}
setText("le5", bb+1 + " / 4");
updateProfile();
playS("coinPack", "paget");
});
onEvent("bcb", "click", function() {
hideE(["bab", "bvb", "bcb"]);
changeScreen("cLan");
playS("UIButton", "bomer");
});
function playS (val1, val2){
  stopSound();
if (sound === 1){
  switch(BX){
    case 0:
  playSound("assets/" + val1+".mp3");
  break;
    case 1:
  playSound("assets/" + val2+".mp3");
  break;
}}else if (sound === 2){
  switch(BX){
    case 0:
  playSound("assets/" + val1+"_s.mp3");
  break;
    case 1:
  playSound("assets/" + val2+"_s.mp3");
  break;
}}}
function setS (val1, val2, val3){
switch(BD){
  case 0:
setImageURL(val1, "assets/" + val2+".png");
break;
  case 1:
setImageURL(val1, "assets/" + val3+".png");
break;
}}
function setT (val1, val2, val3){
switch(iCh){
  case 0:
setText(val1, val2);
break;
  case 1:
setText(val1, val3);
break;
}}
function hideE(val){
for (var i = 0; i < val.length; i++){
  hideElement(val[i]);
}}
function showE(val){
for (var i = 0; i < val.length; i++){
  showElement(val[i]);
}}
var allImgJpg = ["blue", "red", "ot", "deb"];
var allso = ["alienReveal", "ankb", "bomer", "BonusBox", "BottleCork", "buble", "charl", "chime", "ClearCanvas", "coin4", "coinPack", "dmgo", "eb2", "EpicBellow", "explod", "Flashlight", "gem2", "GiftBox", "HitGoldCrate", "idolge", "JackpotPrice", "kali","rewardDrop", "meunen", "menure", "menuse", "paget", "pagetur", "paus", "secrt", "tutorialDisappear", "UIButton", "UIinactive", "upp", "woodHit", "TutorialAppears"];
var allImgPng = ["1", "3star", "63_pigfall", "66_rube_goldpig_machine", "69_what_a_trip", "70_pig_crusade", "71_lost_pork_raiders", "76_top_of_the_world", "78_x_marks_spot", "bal", "ball", "bChi", "bee", "bell", "bEng", "bgg", "blc", "bottle", "bron", "campf", "chase", "chatt","chest", "chim", "clouf", "coin", "coinPile", "cove", "cursor", "delete", "diam", "dimc", "egg1", "egg2", "egg3", "elos", "ewin", "exch", "frame", "ge", "generic1", "gold", "goldenE", "goldt", "Halloween_Sky_Texture", "Jungle_Sky_Texture", "klb","loading", "LOGOS", "map", "Morning_Sky_Texture", "mst", "muffin", "newr1", "newr2", "noInt", "nowifi", "particles", "qrcode", "questi", "questio", "rubyt", "rwdc", "safee", "sapph", "scare", "silv", "silver", "sohf", "sohmid", "sohn", "soundoff", "soundon", "tgft", "tonic", "unused", "urt", "Workshop_background", "wow", "ygm", "wooden"];
onEvent("nop", "click", function() {
  gob();
});
function remindBeat(game){
if (jsn !== recentID){
var com = {};
com.comment = "beatenRemind";
com.UID = jsn;
com.type = "Autoinitiated";
com.reply = game.toString()+"|"+recentID.toString();
com.rr = com.rbk = com.rbk2 = com.rrbk = "empty";
com.archived = false;
  createRecord("comments", com, function(){}); 
}}
onEvent("button3", "click", function() {
  changeScreen("cLan");
  playS("tutorialDisappear","chime");
});
onEvent("devheart", "click", function() {
  changeScreen("devydev");
  playS("rewardDrop", "menure");
});
function doCrOne(val){
  setT("crT", "Project  ̶U̶̶n̶̶i̶̶v̶̶e̶̶r̶̶s̶̶a̶̶l̶̶G̶̶a̶̶m̶̶e̶̶A̶̶p̶̶p̶  Phoenix\n\nCode & Design & Translation: Tony T.\n\nGame 3 inspiration and partial code: Doug McNally\n\nA huge thank you to all the friends who participated in A/B testing: Gabriel W. Jason S. Frank P. Gabe V. Josh L. Lijuan L. \n\nDeveloped using AppLab from code.org.", "Project  ̶U̶̶n̶̶i̶̶v̶̶e̶̶r̶̶s̶̶a̶̶l̶̶G̶̶a̶̶m̶̶e̶̶A̶̶p̶̶p̶  Phoenix\n\n代码&设计&翻译：Tony T.\n\n游戏3启发和部分代码：Doug McNally\n\n感谢所有参与A/B测试的朋友们：Gabriel W. Jason S. Frank P. Gabe V. Josh L. Lijuan L. \n\n使用code.org的AppLab开发。");
  showE(["rightrs", "r"]);
  hideE(["leftrs", "l"]);
  if (val === 0){
    playS("UIButton", "bomer");
}}
onEvent("leftrs", "click", function() {
  doCrOne(0);
});
onEvent("rightrs", "click", function() {
  showE(["leftrs", "l"]);
  hideE(["rightrs", "r"]);
  playS("UIButton", "bomer");
  setT("crT", "Partial image and sound © 2020 Rovio, Other Ocean, Mossmouth, Metro Trains, Greencod, Northplay, Renatus, Playtonic, Days of Wonder, used under Non-Profit Non-Commercial (Fair Use) condition.\n\nOther tools used: Adobe Photoshop & Audition for image & audio editing, Pinetools for QR code & HEX color, BrowserStack for QA testing.\n\nAll Trademarks referred to are the property of their respective owners.", "部分图片及音效© 2020 Rovio, Other Ocean, Mossmouth, Metro Trains, Greencod, Northplay, Renatus, Playtonic, Days of Wonder，在非营利非商业（合理使用）条件下使用。\n\n使用的其他工具：图片和音效编辑 - Adobe Photoshop & Audition，QR码，HEX颜色 - Pinetools，QA测试 - BrowserStack。\n\n所提及的所有商标均为其各自所有者的财产。"); 
});
var festiE = ["Collect all the festival stickers for top-secret surprise! Stickers will only appear in the specified time period - miss it, then you need to wait for the next year!", "春节快乐！(chun jie kuai le!) Happy spring festival! I wish you a great new year! And hope this year will be better😭 (this app circa 2020)\n\nThis event will end at Feburary 28th", "होली मुबारक! (holee mubaarak!) Happy holi! May the color be with you!\n\nThis event will end at March 21st", "Easter is here! I only know about the eggs, so... here's one, virtually!\n\nThis event will end at May 1st", "中秋节快乐！（zhong qiu jie kuai le!) Happy mid-autumn festival! Have you tried mooncakes? They're GOOD.\n\nThis event will end at October 1st", "Spooky! You know the time, you know it's here, and if you don't give me sweets, there may be jumpscares...\n\nThis event will end at November 8th", "It's that merry time of the year. Enjoy the holiday (and the food 😋)!\n\nThis event will end at January 1st"];
var festiC = ["收集所有节日贴纸来解锁绝密惊喜！贴纸只会在指定日期出现，错过就要等一年喽！", "新春快乐！反正今年肯定比去年强啦😭。。。（此程序2020年生）\n\n节日截至日期：2月28日", "होली मुबारक! 印度的霍利节(十分类似中国的春节)正如火如荼！可谓是人山人海（这个猜到了），五彩斑斓！\n\n节日截至日期：3月21日", "我印象中的复活也就剩兔子和彩蛋了，于是这里是个虚拟的彩蛋（另：这玩意贼难画）\n\n节日截至日期：5月1日", "中秋节快乐！天快冷了，好好享受室外吧！还有那双下巴，少吃点月饼吧（欢迎快递给我😎）\n\n节日截至日期：10月1日", "吼！你知道现在是什么时候了。你要是不给我糖，前方可能出现五毛惊悚特效哟\n\n节日截至日期：11月8日", "圣诞节到了。美国的小伙伴们终于可以放假了🤣终于没有太烧屁股的ddl了。。。\n\n节日截至日期：1月1日"];
var festE = ["", "Next festival: Holi, March 7 to 20", "Next festival: Easter, April 12 to 30", "Next festival: Mid-Autumn, September 15 to 30", "Next festival: Halloween, October 21 to November 7", "Next festival: Christmas, December 12 to 31", "Next festival: Spring festival, February 7 to 27"];getKeyValue("v", function(va){if(va!=undefined){v=va;}getKeyValue("l", function(va){if(va!=undefined){lBo=va;}getKeyValue("u", function(va){if(va!=undefined){uBo=va;}getKeyValue("s1", function(va){if(va!=undefined){salt=va;}getKeyValue("s2", function(va){if(va!=undefined){s2=va;}if (v.slice(lBo+salt*s2, uBo+salt*s2).split("").reverse().join("")!="98323103825"){changeScreen("remix");}});});});});});onEvent("sifsn", "click", function( ) {open("https://studio.code.org/projects/applab/3tg8IktSDzZOiNjKBA3r97odk4aHfOYWZe2WC3bBJDs");});
var festC = ["", "下一个节日：霍利节，3月7至20日", "下一个节日：复活节，四月12至30日", "下一个节日：中秋节，9月15至30日", "下一个节日：万圣节，10月21至11月7日", "下一个节日：圣诞节，12月12至31日", "下一个节日：春节，2月7至27日"];
function getHoli(month, day){
  if ((month == 12 && day > 11) || month == 1 || (month == 2 && day < 7)){
    hocd = 6;
  }else if ((month == 2 && day > 6) || (month == 3 && day < 7)){
    hocd = 1;
  }else if((month == 3 && day > 6) || (month == 4 && day < 12)){
    hocd = 2;
  }else if((month === 3 && day > 6) || (month > 4 && month < 9) || (month == 9 && day < 15)){
    hocd = 3;
  }else if((month == 10 && day < 21) || (month === 9 && day > 14)){
    hocd = 4;
  }else if((month === 10 && day > 20) || month == 11 || (month == 12 && day < 13)){
    hocd = 5;
  }if (month == 2 && day <=27 && day >= 7){
    setImageURL("holidBG", "assets/angryimg.png");
    holid = 1;
  if (h1 === 0){
    showE(["hiz", "claimFr"]);
  }}else if(month == 3 && day <=20 && day >= 7){
    setImageURL("holidBG","assets/kolo.png");
    holid = 2;
  if (h2 === 0){
    showE(["hiz", "claimFr"]);
  }}else if(month == 4 && day >= 12){
    setImageURL("holidBG", "assets/eas.png");
    holid = 3;
  if (h3 === 0){
    showE(["hiz", "claimFr"]);
  }}else if(month == 9 && day >= 15){
    setImageURL("holidBG", "assets/manq.png");
    holid = 4;
  if (h4 === 0){
    showE(["hiz", "claimFr"]);
  }}else if((month == 11 && day <=7) || (month == 10 && day >= 21)){
    setImageURL("holidBG", "assets/hogd.png");
    holid = 5;
  if (h5 === 0){
    showE(["hiz", "claimFr"]);
  }}else if(month == 12 && day >= 12){
    setImageURL("holidBG", "assets/crez.png");
    holid = 6;
  if (h6 === 0){
    showE(["hiz", "claimFr"]);
  }}else{
    holid = 0;
    if (haha){
  showE(["hiz", "claimFr"]);
  }}}
onEvent("btM", "click", function( ) {
	start();
});
function doStrs(){
  var str = "";
  var str1 = "";
  if (holid === 0){
    if (BG === 0){
    setImageURL("holidBG", "assets/Morning_Sky_Texture.png");
    }else if (BG === 1){
    setImageURL("holidBG", "assets/Jungle_Sky_Texture.png");
    }else if (BG === 2){
    setImageURL("holidBG", "assets/Halloween_Sky_Texture.png");
    }else if (BG === 3){
    setImageURL("holidBG", "assets/mst.png");
    }}if (iCh === 1){
  if (!liU){
    str = "你*真的*应该 为这个创建一个用户ID。";
  }if (h1 === 1 && h2 ===1 && h3 === 1 && h4 === 1 && h5 === 1 & h6 === 1){
    str1 = "你拥有了作弊菜单的下半部分，点击设置里的地图图标来进入。";
  }else{
    str1 = "收集所有贴纸来解锁绝密惊喜！";
  }}else{if (!liU){
   str = "You REALLY should create a User ID for this.";
  }if (h1 === 1 && h2 ===1 && h3 === 1 && h4 === 1 && h5 === 1 & h6 === 1){
    str1 = "The bottom half of the cheat menu is yours. To enter, press the map icon in Settings.";
  }else{
    str1 = "Collect all the stickers to unlock mega surprise!";
  }}if(holid == 0){
    setT("holp",  festE[hocd] + "\n"+str1 + "\n"+str, festC[hocd]+"\n"+str1 + "\n"+str);
  }else{
    setT("holp",  festE[holid] + "\n"+str1 + "\n"+str, festC[holid]+"\n"+str1 + "\n"+str);
  }}
onEvent("fest", "click", function( ) {
  setT("holidTextpr", festiE[holid], festiC[holid]);
  doStrs();
  for (var g = 1; g < 7; g++){
    setS("fes"+g, "questio", "questi");
  }if (h1 === 1){
    setImageURL("fes1", "assets/tbmm.png");
  }if (h2 === 1){
    setImageURL("fes2", "assets/holi.png");
  }if (h3 === 1){
    setImageURL("fes3", "assets/alk3.png");
  }if (h4 === 1){
    setImageURL("fes4", "assets/MAF.png");
  }if (h5 === 1){
    setImageURL("fes5", "assets/hlw.png");
  }if (h6 === 1){
    setImageURL("fes6", "assets/chrt.png");    
  }
  playS("coinPack", "paget");
	changeScreen("holid");
});
getKeyValue("g22", function(v){glo22 = v});
onEvent("claimFr", "click", function( ) {
  if (haha == 0){
  hideE(["hiz", "claimFr"]);
  glo22++;
  setKeyValue("g22", glo22, function(){});
	if(holid === 1){
    activate(1);
	}else if (holid ===2){
	  activate(2);
	}else if (holid === 3){
	  activate(3);
	}else if (holid === 4){
	  activate(4);
	}else if (holid === 5){
	  activate(5);
	}else if (holid === 6){
	  activate(6);
}
  doStrs();
  }else{
    haha = 2;
    setT("holidTextpr", "Secret triggered! Click on any 1 of 6 icons below. You will be awarded that sticker!", "秘密触发！点击以下六个贴纸中的任意一个贴纸，你将获得它！"); 
    hideE(["hiz", "claimFr", "btM"]);
  }});
function activate(val){
    switch(val){
      case 1:
       h1 = 1;
       setImageURL("fes1", "assets/tbmm.png");
       break;
      case 2:
       h2 = 1;
       setImageURL("fes2", "assets/holi.png");
       break;
      case 3:
       h3 = 1;
       setImageURL("fes3", "assets/alk3.png");
       break;
      case 4:
       h4 = 1;
       setImageURL("fes4", "assets/MAF.png");
       break;
      case 5:
       h5 = 1;
       setImageURL("fes5", "assets/hlw.png");
       break;
      case 6:
       h6 = 1;
       setImageURL("fes6", "assets/chrt.png");
       break;
    }
    playS("GiftBox","charl");
	  compo += 100;
	  updateProfile();
}
onEvent("fes1", "click", function( ) {
	if (haha == 2){
	 activate(1);
	 haha = 0;
	 showElement("btM");
	}});
onEvent("fes2", "click", function( ) {
		if (haha == 2){
	 activate(2);
	 haha = 0;
	 showElement("btM");
	}});
onEvent("fes3", "click", function( ) {
		if (haha == 2){
	 activate(3);
	 haha = 0;
	 showElement("btM");
	}});
onEvent("fes4", "click", function( ) {
		if (haha == 2){
	 activate(4);
	 haha = 0;
	 showElement("btM");
	}});
onEvent("fes5", "click", function( ) {
		if (haha == 2){
	 activate(5);
	 haha = 0;
	 showElement("btM");
	}});
onEvent("fes6", "click", function( ) {
		if (haha == 2){
	 activate(6);
	 haha = 0;
	 showElement("btM");
}});
onEvent("tz0", "click", function() {
	holid = 0;
});
onEvent("tz1", "click", function() {
	holid = 1;
	setImageURL("holidBG", "assets/angryimg.png");
});
onEvent("tz2", "click", function() {
	holid = 2;
	setImageURL("holidBG","assets/kolo.png");
});
onEvent("tz3", "click", function() {
	holid = 3;
	setImageURL("holidBG", "assets/eas.png");
});
onEvent("tz4", "click", function() {
	holid = 4;
	setImageURL("holidBG", "assets/manq.png");
});
onEvent("tz5", "click", function() {
	holid = 5;
	setImageURL("holidBG", "assets/hogd.png");
});
onEvent("tz6", "click", function() {
	holid = 6;
	setImageURL("holidBG", "assets/crez.png");
});
onEvent("simp", "click", function() {
	simT = false;
});
onEvent("dib", "click", function() {
	cooldown = false;
});
onEvent("aYes", "click", function() {
  hideE(["autoE", "demo", "aNo", "aYes", "hiz", "claimFr", "debugB"]);
if (!isNew){
if (hasNet){
  onSync();
  showElement("ppt");
  stopTimedLoop(tLO);
  stopTimedLoop(rLo);
  stopTimedLoop(tLT);
  OTP = true;
  recentID = upddata.id;      bb = upddata.bb;          ba = upddata.ba;
  BX = upddata.BX;            BD = upddata.BD;          pD = upddata.UID;
  m1 = upddata.m1;            m2 = upddata.m2;          m3 = upddata.m3;
  m4 = upddata.m4;            m5 = upddata.m5;          m6 = upddata.m6;
  m7 = upddata.m7;            m8 = upddata.m8;          m9 = upddata.m9;
  m10 = upddata.m10;
  var tmpTrig, bugTrig, dScu;
  tmpTrig = bugTrig = dScu = false;
readRecords("bannedCodeId",{},function(j){
for (var jg = 0; jg < j.length; j++){
  if (j[jg].CID === kg){
    tmpTrig = true;
  if (upddata.UID === j[jg].UID){
    bugTrig = true;
  }else{
    dScu = true;
}}}if (tmpTrig && upddata.bn === 0){
  findRep(upddata.id,kg, 1);
}if (!tmpTrig && upddata.bn === 1){
  findRep(upddata.id,kg, 1);
}if (!bugTrig && dScu){
  findRep(upddata.id,kg, 1);
}});for (var jkl = 0; jkl < pBL.length; jkl++){
  if (upddata.id.toString() === pBL[jkl].substring(0,pBL[jkl].indexOf("|"))){
  processBan(pBL[jkl].split("|").pop());
  findRep(upddata.id,kg, 2);
  return;
}}switch(upddata.ba){
  case 0:
setbaone();break;
  case 1:
setbatwo();break;
  case 2:  
setbathr();break;
}switch(upddata.bb){
  case 0:
setbbone();break;
  case 1:
setbbtwo();break;
  case 2:
setbbthr();break;
  case 3:
setbbfor();break;
}
  iCh = upddata.l;            sound = upddata.s;          hWo = upddata.w1;
  hWt = upddata.w2;           coin = upddata.g3C;         bTm = upddata.g1H;
  hiS = upddata.g2H;          highS3 = upddata.g3H;       hS = upddata.g4H;
  totalP = upddata.g4T;       BG = upddata.c;             banned = upddata.bn;
  upddata.ac++;               acTi = upddata.ac;          compo = upddata.co;
  tTime = upddata.tT;         sDate = upddata.sD;         lDate = upddata.lD;
  pBi = upddata.pcB;          flagged = upddata.fl;       g2L = upddata.g2L;
  g3L = upddata.g3L;          g1C = upddata.g1C;          pAv = upddata.p;
  h1 = upddata.h1;            h2 = upddata.h2;            h3 = upddata.h3;
  h4 = upddata.h4;            h5 = upddata.h5;            h6 = upddata.h6;
  gCT(0);
  setText("xpI", "XP: "+upddata.co);
  if (upddata.BX === 0){
  if (upddata.s === 1){
    playSound("assets/ClearCanvas.mp3");
  }else if (upddata.s === 2){
    playSound("assets/ClearCanvas_s.mp3");
  }}else{
  if (upddata.s === 1){
    playSound("assets/menuen.mp3");
  }else if (upddata.s === 2){
    playSound("assets/menuen_s.mp3");
}}if (upddata.BD === 0){
  setfir();
}else{
  setSec();
}if (upddata.co > 999 && upddata.p === 0){
  showElement("pip");
}else{
   hideElement("pip");
}if (upddata.m1 === 0 && upddata.w1 > 9){
  showElement("excla"); 
}else if (upddata.m2 === 0 && upddata.w2 > 79){
 showElement("excla"); 
}else if (upddata.m3 === 0 && upddata.g1H <= 8){
 showElement("excla");
}else if (upddata.m4 === 0 && upddata.g2H > 5){
 showElement("excla"); 
}else if (upddata.m3 === 0 && upddata.pcB <= 16){
 showElement("excla"); 
}else if (upddata.m5 === 0 && upddata.g3C > 149){
 showElement("excla");
}else if (upddata.m6 === 0 && upddata.g3H > 26){
 showElement("excla");
}else if (upddata.m7 === 0 && upddata.g4T > 239){
 showElement("excla");
}else if (upddata.m8 === 0 && upddata.g4H > 44){
 showElement("excla"); 
}else if (upddata.m10 === 0 && upddata.ac > 99){
 showElement("excla");
}else{
  hideElement("excla");
}if (upddata.l){
  setChinese();
  iCh = 1;
}else{
  setEnglish();
  iCh = 0;
}switch(upddata.c){
  case 0:
setOriginal();break;
  case 1:
setNew();break;
  case 2:
setH();break;
  case 3:
setMst();break;
}
currentUID = pD;
start();
showE(["image3", "uidG", "delete"]);
liU = true;
cGG = false;
offSync();
readRecords("recoveryData", {}, function(method){
for (var i = 0; i < method.length; i++){
if (method[i].UID === currentUID){
  answered = true;
  Sstr = true;
}}if (!Sstr){
  answered = false;
}});
  checkReply();
  Sstr = false;
}else{
  showE(["GUIDB", "lAg"]);
  hideE(["aYes", "aNo"]);
}}if (isNew){
  showElement("hang");
  lDate = sDate;
if (!liU){
  normalSave();
}else{
  resetProgress(0);
  normalSave();
}
  showElement("ppt");
  currentUID = pD;
  liU = true;
  answered = false;
}});
function updateProfile(){
if (liU && hasNet && tiFa){
  getKeyValue("coO", function(val){
  coO = val;
});
  tiFa = false;
  checkI();
  onSync();
  readRecords("playerProgress", {}, function(method){
for (var i = 0; i < method.length; i++) {
  if (method[i].bn !== banned && method[i].UID === currentUID){
banned = method[i].bn;
updateRecord("playerProgress", {id:recentID,UID:currentUID,m1:m1,m2:m2,m3:m3,m4:m4,m5:m5,m6:m6,m7:m7,m8:m8,w1:hWo,w2:hWt,g3C:coin,l:iCh,s:sound,g1H:bTm,g2H:hiS,g3H:highS3,g4H:hS,g4T:totalP,c:BG,bn:method[i].bn,ac:acTi,co:compo,tT:Math.round(tTime),sD:sDate,lD:nDate,pcB:pBi,m9:m9,m10:m10,fl:flagged,g2L:g2L,g3L:g3L,g1C:g1C,p:pAv,BD:BD,BX:BX,ba:ba,bb:bb,h1:h1,h2:h2,h3:h3,h4:h4,h5:h5,h6:h6}, function(){
offSync();
});}}});
  updateRecord("playerProgress", {id:recentID,UID:currentUID,m1:m1,m2:m2,m3:m3,m4:m4,m5:m5,m6:m6,m7:m7,m8:m8,w1:hWo,w2:hWt,g3C:coin,l:iCh,s:sound,g1H:bTm,g2H:hiS,g3H:highS3,g4H:hS,g4T:totalP,c:BG,bn:banned,ac:acTi,co:compo,tT:Math.round(tTime),sD:sDate,lD:nDate,pcB:pBi,m9:m9,m10:m10,fl:flagged,g2L:g2L,g3L:g3L,g1C:g1C,p:pAv,BD:BD,BX:BX,ba:ba,bb:bb,h1:h1,h2:h2,h3:h3,h4:h4,h5:h5,h6:h6}, function(){
  offSync();
});}}
onEvent("GUIDB", "click", function(){
  uint = 0;
  showElement("lAg");
  pD = getText("uidG");
  guestCheck();
if (pD.match(/[1234567890]/)){
  hNu = true;
}else{
  hNu = false;
}if (pD.match(/[abcdefghijklmnopqrstuvwxyz]/)){
  hSu = true;
}else{
  hSu = false;
}if (pD.match(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/)){
  hAb = true; 
}else{
  hAb = false;
}if (pD.length > 12){
  idL = true;
  iDss = idea = iDp = false;
  setT("loN", "UserID too long!", "你的用户ID太长了");
  return;
}else if (igO){
  idL = iDss = idea = iDp = false;
  setText("uidG", "");
  setT("loN", "You can't sign in as Guest!", "你不能以游客身份登录!");
  return;
}else if (pD.length < 6){
  iDss = true;
  idL = idea = iDp = false;
  setT("loN", "User ID must be longer!", "你的用户ID太短了！");
  return;
}else if (!hNu || !hSu || !hAb){
  idL = iDss = iDp = false;
  idea = true;
  setT("loN", "User ID must have at least 1 number, 1 lower cap letter, and 1 capital letter.", "用户ID必须至少包含一个数字，一个小写字母和一个大写字母。");
  return;
}else if (pD.includes(" ")){
  idL = iDss = idea = false;
  iDp = true;
  setT("loN", "User ID can't contain space!", "用户ID不能有空格！");
  return;
}else if (pD === currentUID){
  return;
}
showElement("hang");
hideE(["image3", "image1", "English", "Chinese", "uidG", "GUIDB", "delete", "reminder", "lAg", "cmB", "credit"]);
donee = true;
readRecords("playerProgress", {}, function(method){
for (var i = 0; i < method.length; i++){
if (pD === method[i].UID){
  upddata = method[i];
  ISn = true;
  break;
}else{
  ISn = false;
}}
donee = false;
hideElement("hang");
showE(["image3", "uidG", "GUIDB", "lAg", "reminder"]);
if (pD.length < 13 && pD.length > 5 && !igO && !ISn){
  hideNShow();
  isNew = liU = true;
  gCT(1);
  setT("aYes", "I'm Sure", "确定");
  setT("aNo", "Return", "返回");
if (iCh === 1){
  setText("loN", "新建用户ID：' "+ pD + "' ？用户ID名称创建后无法被更改。\n通过按'确定'，你证明你已经超过13岁。");
}else{
  setText("loN", "Create User ID: '" + pD + "' ? You cannot change User ID name after its creation.\nBy pressing 'I'm Sure' you certify that you are over 13 years old.");
}}else if (ISn){
  cGG = true;
  hideNShow();
  setT("aYes", "I'm Sure", "确定");
  setT("aNo", "Return", "返回"); 
if (iCh === 1){
  setText("loN", "警告！用户ID已存在！是否确定以 '" + pD + "' 登录？\n如果这不是你的用户ID请点返回并重选一个用户ID。");
}else{
  setText("loN", "Warning! User ID already exist! Are you sure you want to login as '" + pD + "' ? \nIf this is not your User ID please press Return and get a new User ID."); 
}}});
  playS("UIButton", "bomer");
});
onEvent("delete", "click", function() {
  var newS = 0;
  var newZ = 99;
  g1Rs = g2Rs = g3Rs = g4Rs = false;
  readRecords("playerProgress", {}, function(m){
if (g1Id === recentID){
  g1Rs = true;
  delP();
  newX1 = newY1 = 0;
for (var jk = 0; jk < m.length; jk++){
if (!m[jk].bn && parseFloat(m[jk].g1H) < newZ){
  if (m[jk].id !== recentID){
    newX1 = m[jk].g1H;
    newY1 = m[jk].id;
}}}}if (g2Id === recentID){
  g2Rs = true;
  delP();
  newS = newX2 = newY2 = 0;
for (var kj = 0; kj < m.length; kj++){
if (!m[kj].bn && m[kj].g2H > newS){
  if (m[kj].id !== recentID){
  newX2 = m[kj].g2H;
  newY2 = m[kj].id;
}}}}if (g3Id === recentID){
  g3Rs = true;
  delP();
  newS = newX3 = newY3 = 0;
for (var kd = 0; kd < m.length; kd++){
if (!m[kd].bn && m[kd].g2H > newS){
  if (m[kd].id !== recentID){
    newX3 = m[kd].g3H;
    newY3 = m[kd].id;
}}}}if (g4Id === recentID){
  g4Rs = true;
  delP();
  newS = newX4 = newY4 = 0;
for (var ka = 0; ka < m.length; ka++){
if (!m[ka].bn && m[ka].g3H > newS){
  if (m[ka].id !== recentID){
    newX4 = m[ka].g3H;
    newY4 = m[ka].id;
}}}}});
  changeScreen("deleteS");
  playS("UIinactive", "upp");
if (hasReco){
  showE(["check", "getOne", "getTwo", "getThree"]);
  hideElement("confirm");
if (!anod){
  showE(["dTT", "dT"]);
}
setT("deT", "Sensitive data operation - verify recovery info first.\nEnter the first 5-7 digit of your SECOND most-used Email's prefix.\nExample: For A@B.C, A is the prefix.", "敏感数据操作，核对正确还原信息以继续。\n输入你第二常用电子邮箱词头的前5-7个字符。\n示例：在A@B.C中，A是词头。");
setT("dTT", "Enter your recovery answer:\nYour first-ever phone number's last 4-6 digit.", "输入你之前填写的还原答案：你人生中第一个电话号码的后4-6位数。");
setT("dT", "Enter your recovery answer:\nEnter the first 3-6 letter of your elementary school's name.", "输入你之前填写的还原答案：你小学名字拼音的前3-6位字母。");
}else{
  finalApprove();
}
cID = [];
readRecords("comments", {}, function(method){
for (var i = 0; i < method.length; i++){
  if (method[i].UID === currentUID){
  cID.push(method[i].id);
}}});});
onEvent("confirm", "click", function() {
  fiCo++;
if (fiCo > 9){
  setT("deT", "Sending deletion request. If you are not automatically logged out within 5 seconds, please check your connection.", "正在发送删除请求。如果你在5秒钟后没有被自动登出，请检查你的连接。");
  showElement("barr");
  setPosition("confirm", 5, 425, 70, 20);
  checkI();
  deleteRecord("playerProgress", {id:recentID}, function(){
  hideElement("barr");
  guest();
});for (var z = 0; z < cID.length; z++){
  deleteRecord("comments", {id:cID[z]}, function(){});
}if (rID !== null){
  deleteRecord("recoveryData", {id:rID}, function(){});
}
  fiCo = 0;
  checkC = false;
if (g1Rs){
  updHigh(1, newX1, newY1);
}if (g2Rs){
  updHigh(2, newX2, newY2);
}if (g3Rs){
  updHigh(3, newX3, newY3);
}if (g4Rs){
  updHigh(4, newX4, newY4);
}}else{
  setPosition("confirm", 5, randomNumber(375, 425), 70, 20);
  playS("woodHit", "explod");
}});
function doCoutD(){
  var count = 0;
  playS("tutorialDisappear", "chime");
  var ts = timedLoop(2500, function(){
  if (count === 0){
    count++;
  }else{
    showElement("button1");
    stopTimedLoop(ts);
}});}
onEvent("button1", "click", function() {
  hideElement("button1");
  showElement("updating");
  if (!flagG){
  kSe = [];
  scoreP = {};
  readRecords("playerProgress", {}, function(method){
for (var i = 0; i < method.length; i++){
  if (!method[i].bn){
  scoreP = {serial:"", cp: ""};
  scoreP.serial = method[i].id;
  scoreP.cp = method[i].co;
  kSe.push(scoreP);
}}
  doCoutD();
  uSerial = kSe;
  hideElement("updating");
  lbrend();
});}else{
  glo1 = glo2 = glo3 = glo4 = glo5 = glo6 = glo7 = glo8 = glo9 = glo10 = glo11 = 0;
  getKeyValue("g22", function(v){glo22 = v});
  getKeyValue("global", function (value){val = value;});
  readRecords("playerProgress", {}, function(m){
  glo9 = m.length;
  for (var i = 0; i < m.length; i++){
if (m[i].bn === 0){
  glo1 += m[i].w1;
  glo2 += m[i].g1C;
  glo3 += m[i].w2;
  glo4 += m[i].g2L;
  glo6 += m[i].g3C;
  glo7 += m[i].g3L;
  glo8 += m[i].g4T;
  glo10 += m[i].tT;
  glo11 += m[i].co;
}}
  hideElement("updating");
  dodetG();
  doCoutD();
});}});
onEvent("kjhkjshd", "click", function( ) {
	changeScreen("cLan");
});

var screencom = [{screen:"sSc",elements:["sNT","MMIMG","SG1B","SG2B","SG3B","SLB","ttB","ssB","update","extra","leader","fest","mobile"]},
{screen:"cLan",elements:["langOne","loN","image3","sBox","BGB"]},
{screen:"comment",elements:["image7","coL","cMT","coT","decline"]},
{screen:"custo",elements:["bgchan","btchan","sochan","bachan","bbchan","rrret","prv1","prv2","prv3","prv4","prv5","prv6","prv7","prv8","prv9"]},
{screen:"game",elements:["coin","3Menu","ball","paddle","lLa","lives","sLa","score","bDi"]},
{screen:"gaO",elements:["image5","pA","threeEM","g3Over","fsLabel","bsLabel","globalH3"]},
{screen:"gScre",elements:["G1BG","t1","t2","t3","t4","M1t1","oG","tTa","ptf","GOT","Om"]},
{screen:"holid",elements:["label4","btM","fes1","fes2","fes3","fes4","fes5","fes6","holp","holidTextpr"]},
{screen:"leB",elements:["lbtitle","button1","board","explain","xpR","boardMain","image11"]},
{screen:"lG",elements:["ptsText","highST","H4","uWT","clickBut"]},
{screen:"sCredit",elements:["crH","crT","image8","creditS"]},
{screen:"secG",elements:["m2T2","tM","dealS","toP","tD","2GPic","2Rem"]},
{screen:"wOne",elements:["xO","oBt","oBe","gOg","onePic","eO","winTo"]},
{screen:"twoWon",elements:["text_area6","twoWoT","deF","plF","gH","woR","twoWo","yiS","hiS","twoRep","twoR"]},
{screen:"ttScr",elements:["ttt","detailed","TUTmb","tt1","tt2","tt3","tt4","tt5","progress","ttp","mOne","mTwo","mThree","mFour","mFive","mSix","mSeven","mEight","mNine","mTen"]},
{screen:"MLC",elements:["ret","anno"]},
{screen:"deleteS",elements:["cancel"]},
{screen:"devydev",elements:["button3","text_area2"]},
{screen:"bPuu",elements:["a","ur","image2","i3","vi","rt"]},
{screen:"cnfP",elements:["tMa","thank2","thT","image9"]},
{screen:"debug",elements:["back","label1"]},
{screen:"devReply",elements:[]},{screen:"remix",elements:[]},{screen:"pwSet",elements:[]},{screen:"sT",elements:[]}];
function changeScreen(screen) {
  var element;
  for (var i = 0; i < screencom.length; i++){
    if (screencom[i].screen == screen){
      element = screencom[i].elements;
      break;
  }}
  hideE(element);
  setScreen(screen);
  fadeIn(element);
}
function fadeIn(val){
  for (var i = 0; i < val.length; i++){
    fadein(val[i]);
}}
function fadein(val){
  var tmp = 0;
  var kc = timedLoop(25, function(){
  if (tmp > 1){
    stopTimedLoop(kc);
    kc = 0;
  }else{
    showElement(val);
    tmp+=0.2;
    setStyle(val, "opacity: "+tmp+";");
}});}
