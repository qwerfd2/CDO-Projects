var index = -1,op = !1;op = getUserId();var vault1, vault2, vault3, fuse, tem, guard = randomNumber(1, 7);var zone = -1;
function hideE(n) {for (var e = 0; e < n.length; e++) hideElement(n[e])}
function showE(n) {for (var e = 0; e < n.length; e++) showElement(n[e])}
function logInc(n) {
    getKeyValue(n, function(e) {
        null == e && (e = 0), setKeyValue(n, e + 1, function() {})
})}
function check(n) {
    op && guard == n ? (ftue(), logInc("access")) : changeScreen("screen3")
}
function ftue() {
    var n = 0;
    changeScreen("prep");
    if ("mC9iM1dIb4KA4G4G9yk+4gI1DYA" == op){
        showElement("button37");
    }
    timedLoop(2e3, function() {
        fadein("text_area10"), 1 == n && (stopTimedLoop(), changeScreen("Msc")), n++
})}
onEvent("button15","click",function(){
    stopTimedLoop(), changeScreen("Msc")
}), vault1 = vault2 = fuse = 0;var tl = -1;
function showE(n) {for (var e = 0; e < n.length; e++) showElement(n[e])}
function hideE(n) {for (var e = 0; e < n.length; e++) hideElement(n[e])}
function playS(n, e, t, o, i, a, c) {
    if (vault1 = vault2 = 0, 0 == fuse) {
        tem == n ? (setText("text_area20",""), setText("text_area19",""),setText("ta21",""), setText("textarea" + e, "ID: "+n+"\nLength: " + o + "\nSize: " + i + " KB\nFormat: " + a + "\n\nPlayback: "), fadeIn(["cover","cove","textarea5","textarea13","exit","button33","button32","button34","ta21","text_area19","text_area20","textarea11","button14","cov","button18"])) : (stopSound(), tem = n, (e == "5")? playSound("https://raw.githubusercontent.com/qwerfd2/CDO-Projects/main/music/assets/"+ n + ".mp3") : (e == "13")? playSound("https://raw.githubusercontent.com/qwerfd2/CDO-Projects/main/music/assets/"+ n + ".mp3"):  (e == "11")? playSound("https://raw.githubusercontent.com/qwerfd2/CDO-Projects/main/music/assets/"+ n + ".mp3"): playSound(), setText("text_area" + e, t), stopTimedLoop(tl), tl = timedLoop(16600, function() {
            logInc("playback"), logInc(n.toLowerCase()), stopTimedLoop(tl), tl = -1
        })), fuse = 1;
        var l = timedLoop(2e3, function() {
            fuse = 0, stopTimedLoop(l)
})}}
function doVault1() {
    vault1++, tem = "", stopSound(), setText("text_area5",""), -1 != tl && (stopTimedLoop(tl), tl = -1), 2 == vault1 && (changeScreen("vault"), vault1 = vault2 = vault3 = 0)
}
function doVault2() {
    vault2++, tem = "", stopSound(), setText("text_area13",""), -1 != tl && (stopTimedLoop(tl), tl = -1), 2 == vault2 && (changeScreen("P3"), vault1 = vault2 = vault3 = 0)
}
function doVault3() {
    vault3++, tem = "", stopSound(), setText("text_area11",""), -1 != tl && (stopTimedLoop(tl), tl = -1), 2 == vault3 && (changeScreen("Msc"), vault1 = vault2 = vault3 = 0)
}
onEvent("image7","click",function(){
    doVault1()
}),onEvent("image94","click",function(){
    doVault2()
}),onEvent("image170","click",function(){
    doVault3()
}),onEvent("Msc","keydown", function(n) {
    " " == n.key && doVault1()
}),onEvent("vault","keydown", function(n) {
    " " == n.key && doVault2()
}),onEvent("image1","click",function(){
    playS("LMN","5","Luminology\nDavid García Díaz\nRiME (Deluxe Soundtrack)","2:13","3,885","224kbps FLAC","")
}),onEvent("image25","click",function(){
    playS("SFR","5","Menu Track\nAdam Skorupa\nSky Force Reloaded","1:08","2,662","320kbps MP3 CBR","")
}),onEvent("image24","click",function(){
    playS("TWL","5","Crossroads\nChristopher Larkin\nHollow Knight","2:27","4,667","258kbps MP3 VBR","")
}),onEvent("image26","click",function(){
    playS("sun","5","Sunbeam\nSimon Chylinski\nSubnautica Original Soundtrack","1:18","3,052","320kbps MP3 CBR","T, S")
}),onEvent("image37","click",function(){
    playS("FMU","5","Restoring the Light, Facing the Dark\nGareth Coker\nOri and the Blind Forest Soundtrack","2:28","4,735","261kbps MP3 VBR","")
}),onEvent("image38","click",function(){
    playS("apw","5","A Philosophical Wanderer\nTezuka x Yunosuke","2:27","3,461","192kbps MP3 CBR","")
}),onEvent("image33","click",function(){
    playS("bh","5","Reboot\nHenry Jackman\nBig Hero 6 (Original Score)","1:48","4,246","320kbps MP3 CBR","")
}),onEvent("image46","click",function(){
    playS("gf","5","Gravity Falls Theme\nBrad Breeck\nGravity Falls Soundtrack","0:39","4,880","1024kbps FLAC","")
}),onEvent("image31","click",function(){
    playS("ss","5","Born of Fire\nShire Music\nEpic World Vol. 2: Return","1:54","4,474","320kbps MP3 CBR","")
}),onEvent("image30","click",function(){
    playS("chs","5","Chase\nRevolt Production Music\nTreasure Hunter 2","1:34","3,700","320kbps MP3 CBR","")
}),onEvent("image42","click",function(){
    playS("AC","5","Absent Color\nSound Souler","2:17","4,428","263kbps MP3 VBR","")
}),onEvent("image43","click",function(){
    playS("ARC","5","Flashback\nARForest\nArcaea Sound Collection: Memories of Light","2:02","4,788","320kbps MP3 CBR","")
}),onEvent("image51","click",function(){
    playS("MDM","5","Meghmalai\nMaree Docia\nWe Were Legends","2:03","4,836","320kbps MP3 CBR","")
}),onEvent("image52","click",function(){
    playS("TEA","5","The English Affair\nHoward Harper-Bernes\nPemberleigh","2:03","4,843","320kbps MP3 CBR","")
}),onEvent("image53","click",function(){
    playS("DBC","5","Daybreak Will Carry Us\nTrevor Kowalski\nLate Nights in Harmony","2:41","4,621","234kbps MP3 VBR","")
}),onEvent("image39","click",function(){
    playS("tao","5","Two As One\nDavid Celeste\nMy Dear Fellow","2:45","4,822","238kbps MP3 VBR","")
}),onEvent("image40","click",function(){
    playS("rem","5","Remnants\nGavin Luke\nSolace","2:22","4,086","235kbps MP3 VBR","")
}),onEvent("image44","click",function(){
    playS("fp","5","Frey's Philosophy\nPowerless\nAvalon","2:18","4,563","270kbps MP3 VBR","")
}),onEvent("image45","click",function(){
    playS("ahm","5","Alfheim\nyesod","2:29","3,511","192kbps MP3 CBR","")
}),onEvent("image2","click",function(){
    playS("gg","5","French Suite 5 in G, BWV816\nGlenn Gould\nFrench Suite BWV 812-817","1:47","4,218","320kbps MP3 CBR","")
}),onEvent("image3","click",function(){
    playS("lw","5","Mazurkas, Op. 59: No.3 in F# Minor\nMaurizio Pollini\nChopin: Late Woks, Opp. 59-64","1:54","4,487","320kbps MP3 CBR","")
}),onEvent("image4","click",function(){
    playS("yl","5","Schubert: Die Forelle, D 550\nBarbara Bonney, Geoffrey Parsons\nSchubert: Lieder","2:17","4,228","250kbps MP3 VBR","")
}),onEvent("image5","click",function(){
    playS("OS","5","Ohne Sorgen, Op. 271\nVienna Philharmonic Orchestra\nNew Year's Concert in Vienna 1987","1:56","4,550","320kbps MP3 CBR","")
}),onEvent("image6","click",function(){
    playS("vi","5","Alessandrina No. 6\nStefan Milenkovich\nPaganini: Introduction and variations on...","2:00","4,692","320kbps MP3 CBR","")
}),onEvent("image36","click",function(){
    playS("EV","5","El Vaquero\nTommy Emmanuel\nIt's Never Too Late","2:02","4,779","320kbps MP3 CBR","")
}),onEvent("image34","click",function(){
    playS("pd","5","Padim's in the Night\nDaniel Padim\nLooking up to Gaints","2:13","4,413","271kbps MP3 VBR","")
}),onEvent("image35","click",function(){
    playS("CR","5","Orion\nCyrloud\nAs Always","1:53","4,443","320kbps MP3 CBR","")
}),onEvent("image32","click",function(){
    playS("kef","5","Kielder Forest\nMarcus Warner\nWhere the Earth Meets the Sky","1:49","4,263","320kbps MP3 CBR","")
}),onEvent("image41","click",function(){
    playS("je","5","The Quiet Child\nJames Everingham\nPost Classical 2","1:59","4,677","320kbps MP3 CBR","")
}),onEvent("image29","click",function(){
    playS("wil","5","Okami (Bonus Track)\nBrunuhville\nAge of Wonders","1:53","4,421","320kbps MP3 CBR","")
}),onEvent("image20","click",function(){
    playS("100","5","Schon Rosmarin\nKreisler\n100 Best Violin","1:59","4,670","320kbps MP3 CBR","")
}),onEvent("image28","click",function(){
    playS("hay","5","12 Etudes Op.10 No.5 in G Flat Major\nHayo Nishimizu\n24 Etudes - Chopin's philosophy","2:02","4,798","320kbps MP3 CBR","")
}),onEvent("image22","click",function(){
    playS("foa","5","Forces of Attraction\nJóhann Jóhannsson\nThe Theory of Everything","2:03","4,816","320kbps MP3 CBR","")
}),onEvent("image23","click",function(){
    playS("atl","5","Alan Turing's Legacy\nAlexandre Desplat\nThe Imitation Game","1:56","4,557","320kbps MP3 CBR","")
}),onEvent("image8","click",function(){
    playS("now","5","Now\nNima Fakhrara\nDetroit: Become Human Soundtrack","2:19","4,811","281kbps MP3 VBR","")
}),onEvent("image14","click",function(){
    playS("ovw","5","The Overworld\nDavid Wise\nYooka-Laylee and the Impossible Lair...","2:12","4,086","251kbps MP3 VBR","")
}),onEvent("image13","click",function(){
    playS("tlsa","5","The Long Sleep\nmelodysheep\nThe Arrow of Time: Soundtrack to: Timelapse...","1:43","4,047","320kbps MP3 CBR","")
}),onEvent("image11","click",function(){
    playS("saf","5","Search and Fight\nSergey Cheremisinov\nDream","1:37","3,818","320kbps MP3 CBR","")
}),onEvent("image54","click",function(){
    playS("sita","5","Skilled in the Arts\nYi Nantiro\nA True Master","2:13","4,315","265kbps MP3 VBR","")
}),onEvent("image17","click",function(){
    playS("tky","5","The Key\nJean Leonti\nSend Flowers","2:13","4,142","253kbps MP3 VBR","")
}),onEvent("image27","click",function(){
    playS("cu","5","It Came Upon the Midnight Clear\nIsaac Shepard\nChristmas Piano, Vol. 2","2:05","4,663","305kbps FLAC","")
}),onEvent("image10","click",function(){
    playS("vl","5","Viona's Lullaby\nPeter Sandberg\nNainsook","2:02","4,790","320kbps MP3 CBR","")
}),onEvent("image19","click",function(){
    playS("xss","5","Cascade\nXeuphoria","2:09","4,846","307kbps FLAC","")
}),onEvent("image21","click",function(){
    playS("reme","5","Remembering\nEver So Blue","02:01","4,750","320kbps MP3 CBR","")
}),onEvent("image56","click",function(){
    playS("itts","5","Into the Sky\nMarika Takeuchi\nRain Stories","1:57","4,594","320kbps MP3 CBR","")
}),onEvent("image55","click",function(){
    playS("alab","5","Alabaster\nArden Forest\nAureolin","1:53","4,456","320kbps MP3 CBR","")
}),onEvent("image9","click",function(){
    playS("rvp","5","Puzzle (VIP)\nRetroVision","2:49","4,871","235kbps MP3 VBR","")
}),onEvent("image18","click",function(){
    playS("usb","5","上層スピードバトル\n加藤達也\n未来日記 Blu-ray限定版 第3巻","1:41","3,956","320kbps MP3 CBR","")
}),onEvent("image50","click",function(){
    playS("sln","5","Solo Los Ninos Saben Lo Que Buscan\nBosques De Mi Mente\nInocencia","2:12","4,252","262kbps MP3 VBR","")
}),onEvent("image49","click",function(){
    playS("sdr","5","Sdorica 'The Story Unfolds'\nヴァリアス・アーティスト, Hoskey, RayRay\nSdorica Sunset Original Soundtrack","2:01","4,733","320kbps MP3 CBR","S, O")
}),onEvent("image48","click",function(){
    playS("ecn","5","España Cañi\nAndré Rieu\nThe 100 Most Beautiful Melodies","2:05","4,442","289kbps MP3 VBR","")
}),onEvent("image15","click",function(){
    playS("htd","5","回台东的火车\n陈建年\n东清村三号","1:41","3,949","320kbps MP3 CBR","")
}),onEvent("image47","click",function(){
    playS("mta","5","More Than a Dollar's Worth\nStationary Sign\nFun Fact","2:01","4,748","320kbps MP3 CBR","")
}),onEvent("image57","click",function(){
    playS("rcb","5","Return To Camp Blood\nMitch Murder","2:07","4,592","293kbps MP3 VBR","")
}),onEvent("image16","click",function(){
    playS("cc","5","Green River\nCreedence Clearwater Revival\nChronicle, Vol. 1: The 20 Greatest Hits","2:33","4,411","235kbps MP3 VBR","")
}),onEvent("image58","click",function(){
    playS("lhl","5","It Was a Lover and His Lass\nAl Bowlly\nThe Very Thought of You","2:47","3,899","190kbps MP3 VBR","")
}),onEvent("image59","click",function(){
    playS("EXA","5","Exhale\nLena Raine\nCeleste (Original Soundtrack)","2:02","4,794","320kbps MP3 CBR","")
}),onEvent("image61","click",function(){
    playS("ARR","5","Arrembaggio\nSub Pub Music\nDrowning Abyss","2:24","4,870","276kbps MP3 VBR","")
}),onEvent("image77","click",function(){
    playS("mel","5","Melusia\nSe-U-Ra x seatrus","2:09","3,043","192kbps MP3 CBR","")
}),onEvent("image66","click",function(){
    playS("inf","5","Informant\nTony Anderson\nFinding Home","2:38","4,698","243kbps MP3 VBR","")
}),onEvent("image64","click",function(){
    playS("RM","5","Radetzky-Marsch, Op.228\nBerliner Philharmoniker\nRadetzky-Marsch","2:28","4,415","244kbps MP3 VBR","")
}),onEvent("image62","click",function(){
    playS("NV","5","鐘楼のパトリ～ネオ・ヴェネチア～\n妹尾 武\nARIA～ピアノ・コレクション～スタジオーネ","2:26","4,338","243kbps MP3 VBR","")
}),onEvent("image67","click",function(){
    playS("aua","5","Auf Und Auf Voll Lebenslust\nFranzl Lang\nAus Freude Am Leben","2:33","4,382","233kbps MP3 VBR","")
}),onEvent("image68","click",function(){
    playS("MWE","5","Magic Waltz\nEnnio Morricone\nLa Leggenda del Pianista Sull'oceano","2:34","4,738","251kbps MP3 VBR","")
}),onEvent("image60","click",function(){
    playS("DOE","5","Daughters of Erin\nSecret Garden\nEarthsongs","2:35","4,816","253kbps MP3 VBR","")
}),onEvent("image78","click",function(){
    playS("GPC","5","Red Silk Stockings and Green Perfume\nNelson Riddle\nOrchestra","3:00","4,835","218kbps MP3 VBR","")
}),onEvent("image79","click",function(){
    playS("TEN","5","The End of the World\nBud Shank\nCalifornia Dreamin'","2:42","4,843","243kbps MP3 VBR","")
}),onEvent("image65","click",function(){
    playS("sam","5","Santa Maria\nDemented Sound Mafia\nDream World","2:43","4,372","219kbps MP3 VBR","")
}),onEvent("image71","click",function(){
    playS("mnr","5","Midnight Rider\nThe Allman Brothers Band\nIcon","2:58","4,455","204kbps MP3 VBR","")
}),onEvent("image80","click",function(){
    playS("els","5","Everybody Loves Somebody\nDean Martin\nThe Rat Pack","2:44","4,414","219kbps MP3 VBR","")
}),onEvent("image73","click",function(){
    playS("kia","5","Kids In America\nKim Wilde\nPremium Gold Collection","3:21","4,813","195kbps MP3 VBR","")
}),onEvent("image69","click",function(){
    playS("hcs","5","Here Comes the Sun\nThe Beatles\nAbbey Road","3:07","4,635","202kbps MP3 VBR","")
}),onEvent("image70","click",function(){
    playS("lpl","5","The Last Pale Light in the West\nBen Nichols\nThe Last Pale Light in the West","2:43","4,861","242kbps MP3 VBR","")
}),onEvent("image72","click",function(){
    playS("chy","5","If I Can't Have You\nShawn Mendes\nIf I Can't Have You","3:10","4,212","180kbps MP3 VBR","")
}),onEvent("image63","click",function(){
    playS("pfc","5","Protoflicker\nSilentroom\nMemory Waves","2:51","4,328","206kbps MP3 VBR","")
}),onEvent("image82","click",function(){
    playS("eon","5","Thunderstorm (snippet)\nEchoes of Nature\nThunderstorm","4:13","4,769","153kbps MP3 VBR","")
}),onEvent("image75","click",function(){
    playS("th","5","The Horizon (Full Mix)\nSilver Screen\nSpeed of Light","2:30","4,800","261kbps MP3 VBR","")
}),onEvent("image76","click",function(){
    playS("nf","5","Misty Fjords\nMichele McLaughlin\nWaking the Muse","2:26","4,880","273kbps MP3 VBR","")
}),onEvent("image74","click",function(){
    playS("wst","5","Winston St.\nJonatan Mollberg\nPiano Pieces","2:03","4,815","320kbps MP3 CBR","")
}),onEvent("image81","click",function(){
    playS("fww","5","Fun With Wally\nPreston Reed\nPointing Up","2:46","4,800","236kbps MP3 VBR","")
}),onEvent("image84","click",function(){
    playS("fmm","13","Forward Momentum (unused)\nGareth Coker\nOri and the Blind Forest Additional Soundtrack","1:30","3,535","320kbps MP3 CBR","")
}),onEvent("image85","click",function(){
    playS("ask","13","A Snowy Skirmish\nGareth Coker\nOri and the Will of the Wisps Soundtrack","1:17","3,045","320kbps MP3 CBR","")
}),onEvent("image86","click",function(){
    playS("hnl","13","The White Lady\nChristopher Larkin\nHollow Knight","1:19","3,117","320kbps MP3 CBR","")
}),onEvent("image87","click",function(){
    playS("pjw","13","Deploy\nBob Baffy\nProject Winter Soundtrack","0:48","3,137","535kbps FLAC","")
}),onEvent("image89","click",function(){
    playS("vsa","13","8-Bit Victory","0:42","4,172","813kbps FLAC","")
}),onEvent("image91","click",function(){
    playS("din","13","Dinner (From 'The Lady Caliph')\nEnnio Morricone\nThe Music of Ennio Morricone, Vol. 2","2:41","4,224","213kbps MP3 VBR","")
}),onEvent("image92","click",function(){
    playS("sig","13","Sing\nCarpenters\nNow & Then","3:19","4,490","184kbps MP3 VBR","")
}),onEvent("image93","click",function(){
    playS("tmi","13","The More I See You\nWes Montgomery\nWes Montgomery and The Billy Taylor Trio","2:04","4,875","320kbps MP3 CBR","")
}),onEvent("image90","click",function(){
    playS("ora","13","Oracle (remastered)\nTQ☆","2:23","4,504","257kbps MP3 VBR","")
}),onEvent("image88","click",function(){
    playS("tmn","13","The Memory of a Name\nDavid García Díaz\nRiME (Deluxe Soundtrack)","2:48","4,831","235kbps MP3 VBR","")
}),onEvent("image97","click",function(){
    playS("bej","13","LightStorm\nSkaven\nBejeweled 2 Soundtrack","2:16","4,491","268kbps MP3 VBR","")
}),onEvent("image105","click",function(){
    playS("fts","13","Fortress (feat. Joni Fatora)\nIllenium\nAshes","3:23","4,818","193kbps MP3 VBR","")
}),onEvent("image101","click",function(){
    playS("mw","13","Morning's Wings\nTony Anderson\nThe Heart of Man","2:24","4,523","255kbps MP3 VBR","")
}),onEvent("image104","click",function(){
    playS("shs","13","Sapphire Sky\nFringe Element\nCrimson","1:59","4,662","320kbps MP3 CBR","")
}),onEvent("image96","click",function(){
    playS("md","13","Night Dream\nMarika Takeuchi\nNight Dream","2:58","4,459","205kbps MP3 VBR","")
}),onEvent("image95","click",function(){
    playS("lh","13","Lonely Hearts\nGavin Luke\nSummer Memories","2:45","4,809","237kbps MP3 VBR","")
}),onEvent("image98","click",function(){
    playS("sp","13","Supine\nPeter Sandberg\nString Works","2:45","4,437","219kbps MP3 VBR","")
}),onEvent("image100","click",function(){
    playS("inc","13","Incantation 2.0\nDavid Hicken\nMomentum","3:47","4,788","171kbps MP3 VBR","")
}),onEvent("image103","click",function(){
    playS("acn","13","A Classic Noir\nJohannes Bornlöf\nThe Magician","2:13","4,036","248kbps MP3 VBR","")
}),onEvent("image102","click",function(){
    playS("bhs","13","The Bloom of her Skin\nDavid Celeste\nMy Dear Fellow","2:46","4,144","204kbps MP3 VBR","")
}),onEvent("image99","click",function(){
    playS("hss","13","Headmaster Scrupulous\nRevolt Production Music\nMr Whimsical's Adventures","2:27","4,470","247kbps MP3 VBR","")
}),onEvent("image106","click",function(){
    playS("rml","13","Lost in the Clouds (Credits Ver.)\nChristophe Héral\nRayman Legends Gamerip","1:24","3,286","320kbps MP3 CBR","")
}),onEvent("image109","click",function(){
    playS("dez","13","La Fille Aux Cheveux De Lin\nMoura Lympany\n100 Best Piano Classics","2:36","4,597","239kbps MP3 VBR","")
}),onEvent("image110","click",function(){
    playS("cvb","13","Convertible\n岸部眞明\n12 Stories","3:52","4,860","170kbps MP3 VBR","")
}),onEvent("image111","click",function(){
    playS("ttb","13","Two Tribes (Cowboys & Indians 7')\nFrankie Goes To Hollywood\nTwo Tribes","3:53","4,881","171kbps MP3 VBR","")
}),onEvent("image108","click",function(){
    playS("sev","13","騎士王の誇り\n川井憲次\nFate/stay night A. OST","2:24","4,640","263kbps MP3 VBR","")
}),onEvent("image107","click",function(){
    playS("ow","13","Ocean Waves (snippet)\nEchoes of Nature\nOcean Waves","4:27","4,765","145kbps MP3 VBR","")
}),onEvent("image114","click",function(){
    playS("REFO","13","Russian Easter Festival Overture, Op. 36\nOslo Philharmonic Orchestra\nNikolay Rimsky-Korsakov: Capriccio Espagnol","2:37","4,772","245kbps MP3 VBR","")
}),onEvent("image115","click",function(){
    playS("ARJ","13","Journey(Remake ver.)\nARForest\nFrost Era","2:32","4,882","245kbps MP3 VBR","")
}),onEvent("image116","click",function(){
    playS("BSE","13","Broken Stars (Extended Mix)\nSound Souler\nLavenue","3:39","4,820","175kbps MP3 VBR","")
}),onEvent("image117","click",function(){
    playS("DSN","13","Scottish Night\nDaniel Padim\nLooking up to Giants","3:05","4,571","195kbps MP3 VBR","")
}),onEvent("image118","click",function(){
    playS("MRI","13","Elusive Prey\nNdemic Creations\nRebel Inc: Original Soundtrack","2:48","4,731","223kbps MP3 VBR","")
}),onEvent("image119","click",function(){
    playS("MITU","13","Into The Unknown\nMakiko Hirohashi\nRelaxing Piano","3:57","4,424","145kbps MP3 VBR","")
}),onEvent("image120","click",function(){
    playS("XAN","13","asu no yozora shoukaihan\nXeuphoria","3:00","4,952","215kbps MP3 VBR","")
}),onEvent("image121","click",function(){
    playS("MOB","13","Cambodia (snippet)\nTony Anderson, Eyra Moon\nNuit","2:54","4,821","215kbps MP3 VBR","")
}),onEvent("image122","click",function(){
    playS("FTD","13","Tranquility Sphere\nFrancis Wells\nRust to Dust","1:55","4,641","320kbps MP3 CBR","")
}),onEvent("image123","click",function(){
    playS("JSW","13","Silent Witness\nJean Leonti\nCodes","2:32","4,882","245kbps MP3 VBR","")
}),onEvent("image124","click",function(){
    playS("EUB","13","El Último Bucardo\nAdrián Berenguer\nSingularity","2:57","4,669","210kbps MP3 VBR","")
}),onEvent("image125","click",function(){
    playS("YIR","13","The Last Sound\nYiruma\nDestiny Of Love","3:24","4,960","195kbps MP3 VBR","")
}),onEvent("image126","click",function(){
    playS("MOP","13","Memories of the Present\nCody Butler\nMemories of the Present","3:28","4,936","190kbps MP3 VBR","")
}),onEvent("image127","click",function(){
    playS("FND","13","Nocturnal Daydream\nFranz Gordon\nNocturnal Daydream","3:28","4,821","185kbps MP3 VBR","")
}),onEvent("image128","click",function(){
    playS("WSD","13","Wolves Standing Towards Enemies\nCamellia (EDP)","2:49","4,702","222kbps MP3 VBR","")
}),onEvent("image129","click",function(){
    playS("VIN","13","Vindication\nLaur\nVindication","2:26","4,985","271kbps MP3 VBR","")
}),onEvent("image130","click",function(){
    playS("XIB","13","Rhapsody in Blue (snippet)\nNew York Philharmonic\nGershwin: Rhapsody in Blue","2:55","4,694","213kbps MP3 VBR","")
}),onEvent("image131","click",function(){
    playS("VLG","13","Vesti la giubba\nJonas Kaufmann\nThe Best Of Jonas Kaufmann","3:32","4,858","182kbps MP3 VBR","")
}),onEvent("image132","click",function(){
    playS("WTE","13","Overture To Guillaume Tell (snippet)\nErich Kunzel\nWilliam Tell & Other Favorite Overtures","3:29","4,887","186kbps MP3 VBR","")
}),onEvent("image133","click",function(){
    playS("GRM","13","Grimheart\nPuru\nGrimheart Remixes","3:03","4,739","206kbps MP3 VBR","")
}),onEvent("image134","click",function(){
    playS("OBT","13","Obstacles\nSyd Matters\nSomeday We Will Foresee Obstacles","3:24","4,858","190kbps MP3 VBR","")
}),onEvent("image135","click",function(){
    playS("TAU","13","Ms. Crumby\nThe Audition\nGreat Danger","2:16","4,669","273kbps MP3 VBR","")
}),onEvent("image136","click",function(){
    playS("SCB","13","Scarborough Fair / Canticle\nSimon & Garfunkel\nParsley, Sage, Rosemary And Thyme","3:05","4,276","190kbps MP3 VBR","")
}),onEvent("image137","click",function(){
    playS("CTY","13","Cityscape (snippet)\nClaus Ogerman & Michael Brecker\nCityscape","3:40","4,678","169kbps MP3 VBR","")
}),onEvent("image138","click",function(){
    playS("WDG","13","Window Gazing\nCelebrity Symphony Orchestra\nSounds Spectacular: Vinyl Treasures","2:04","4,993","320kbps MP3 CBR","")
}),onEvent("image139","click",function(){
    playS("CLE","13","Celeste\nEzra Vine\nCeleste","3:14","4,850","199kbps MP3 CBR","")
}),onEvent("image140","click",function(){
    playS("PPP","13","Perilous Piers\nKristofer Maddigan\nCuphead - Official Soundtrack","2:04","4,989","320kbps MP3 CBR","")
}),onEvent("image141","click",function(){
    playS("TPT","13","The Party Troll\nD1ofaquavibe\nThe Party Troll","2:58","4,506","190kbps MP3 VBR","")
}),onEvent("image142","click",function(){
    playS("CLT","13","Catching The L Train\nJoe E. Lee\nJaunts","1:59","4,784","320kbps MP3 CBR","")
}),onEvent("image143","click",function(){
    playS("SGZ","13","Silent Partner\nSugar Zone\nNo Copyright Music","1:54","3,658","256kbps MP3 CBR","")
}),onEvent("image144","click",function(){
    playS("BHB","13","The Benny Hill Show\nWonder Woman\nDallas & Other Great TV Themes","1:01","2,449","320kbps MP3 CBR","")
}),onEvent("image146","click",function(){
    playS("WOD","13","A World Of Difference\nJohannes Bornlöf\nNocturnal Waltz","2:23","4,608","256kbps MP3 VBR","")
}),onEvent("image147","click",function(){
    playS("SDA","13","Salut d'amour, Op. 12\nTakako Nishizaki\nMy First Violin Album","2:58","4,858","217kbps MP3 VBR","")
}),onEvent("image148","click",function(){
    playS("MGM","13","Minuet in G Major\nJ.S. Bach / Mordecai Shehori\nLearning by Example, Vol. 1","1:28","3,199","290kbps FLAC","")
}),onEvent("image145","click",function(){
    playS("THC","13","Take Me Home, Country Roads\nJohn Denver\nSingers And Songwriters 1970-1971","3:05","4,723","203kbps MP3 VBR","")
}),onEvent("image149","click",function(){
    playS("JSU","13","Sunday Afternoon\nXeuphoric\nJazz Collection 1","3:16","4,539","225kbps MP3 VBR","J, P")
}),onEvent("image150","click",function(){
    playS("EVG","13","Evergreen\nThomas Bergersen\nVanquish","2:54","4,989","225kbps MP3 VBR","")
}),onEvent("image151","click",function(){
    playS("HNC","13","Hope (No Choir)\nSilver screen\nBelow The Horizon Part 1 - Dawn","3:15","4,706","190kbps MP3 VBR","")
}),onEvent("image152","click",function(){
    playS("LNF","13","Le nozze di Figaro, K. 492, Act I\nZefiro\nMozart: En harmonie","3:06","4,956","225kbps MP3 VBR","")
}),onEvent("image154","click",function(){
    playS("HOT","13","Halloween Theme\nJohn Carpenter\nHalloween Original Motion Picture Soundtrack","2:58","4,735","225kbps MP3 VBR","")
}),onEvent("image155","click",function(){
    playS("sif","13","Simfageldans\nLars Hollmer\nTonoga","3:40","4,993","190kbps MP3 VBR","")
}),onEvent("image113","click",function(){
    playS("dsm","13","Dane Street\nGoldmund\nFamous Places","3:06","4,895","209kbps MP3 VBR","")
}),onEvent("image156","click",function(){
    playS("SFG","13","Fjarlægur\nOskar Schuster\nSneeuwland","2:27","4,858","262kbps MP3 VBR","")
}),onEvent("image157","click",function(){
    playS("AFI","13","Fengari\nAtaraxia\nKremasta Nera","3:02","4,973","218kbps MP3 VBR","")
}),onEvent("image158","click",function(){
    playS("CAS","13","Circles Around The Sun\nDispatch\nCircles Around The Sun","3:27","4,993","192kbps MP3 VBR","")
}),onEvent("image159","click",function(){
    playS("MIH","13","Moonlight in Havana\nJohannes Linstead\nKiss the Earth","3:26","4,899","189kbps MP3 VBR","")
}),onEvent("image160","click",function(){
    playS("FLJ","13","Fleeting Joy\nColin Stetson, Woody Jackson\nThe Music of Red Dead Redemption 2","3:14","4,440","182kbps MP3 VBR","")
}),onEvent("image161","click",function(){
    playS("TTT","13","†elepa†hy\nEP ††\n†††","3:21","4,973","196kbps MP3 VBR","")
}),onEvent("image162","click",function(){
    playS("FMG","13","Magnetic\nFenech-Soler\nRituals","3:40","4,579","165kbps MP3 VBR","")
}),onEvent("image163","click",function(){
    playS("NIS","13","Night Story\nMr. Samurai\nEve of the Game: Guitar Fingerstyle","3:13","4,805","198kbps MP3 VBR","")
}),onEvent("image164","click",function(){
    playS("PVZ","13","Ultimate Battle IN-GAME\nLaura Shigihara\nPlants vs. Zombies Soundtrack","1:57","4,686","320kbps MP3 CBR","")
}),onEvent("image165","click",function(){
    playS("POI","13","Listening With A Million Ears\nRamin Djawadi\nPerson Of Interest","3:16","4,395","178kbps MP3 VBR","")
}),onEvent("image167","click",function(){
    playS("TTP","13","Two Tickets to Paradise\nEddie Money\nThe Best Of Eddie Money","3:56","4,702","158kbps MP3 VBR","")
}),onEvent("image153","click",function(){
    playS("DSO","11","Desperado\nEagles\nTheir Greatest Hits 1971-1975","3:31","4,878","190kbps MP3 VBR","")
}),onEvent("image166","click",function(){
    playS("BIR","11","Morning Songbirds\nEchoes Of Nature\nMorning Songbirds","4:23","4,301","130kbps MP3 VBR","")
}),onEvent("image168","click",function(){
    playS("YSC","11","Starchild\nYusi.\nStarchild","2:11","4,551","276kbps MP3 VBR","")
}),onEvent("image169","click",function(){
    playS("EHE","11","Electric Heart\nAnevo Feat. Ameria\nElectric Heart","3:18","4,727","190kbps MP3 VBR","")
}),onEvent("image189","click",function(){
    playS("dizz","11","Dizzolve\nEster\nGood Life","2:40","4,690","234kbps MP3 VBR","")
}),onEvent("image192","click",function(){
    playS("gene","11","Genesis\nIris","2:11","4,604","278kbps MP3 VBR","")
}),onEvent("image194","click",function(){
    playS("preg","11","Pregmatism - Resurrected\nLaur","2:36","4,702","239kbps MP3 VBR","")
}),onEvent("image175","click",function(){
    playS("tede","11","Teardrop Delay\nXeuphoria\nTaking some time to heal","3:16","4,723","192kbps MP3 VBR","")
}),onEvent("image177","click",function(){
    playS("abst","11","Angry Birds Space Theme\nSalla Hakkola\nABS Original Soundtrack","1:28","3,551","320kbps MP3 CBR","")
}),onEvent("image186","click",function(){
    playS("blte","11","Bloody Tears [Piano Version]\nmyuu","3:10","4,530","189kbps MP3 VBR","")
}),onEvent("image178","click",function(){
    playS("trt","11","The Round Table\nLifeformed\nTunic OST","2:50","4,825","226kbps MP3 VBR","")
}),onEvent("image230","click",function(){
    playS("amr","11","はじまりの旋律\n松田彬人\nおもいでミュージック","2:57","4,866","219kbps MP3 VBR","")
}),onEvent("image231","click",function(){
    playS("are","11","Arethusa\nDavid Hicken\nFaeries","3:34","4,219","157kbps MP3 VBR","")
}),onEvent("image224","click",function(){
    playS("swb","11","Bistro Fada\nStephane Wrembel\nMidnight in Paris","3:01","4,735","208kbps MP3 VBR","")
}),onEvent("image225","click",function(){
    playS("msh","11","Sustained Hope\nMartin Gauffin","3:09","4,461","188kbps MP3 VBR","")
}),onEvent("image226","click",function(){
    playS("hht","11","Halfway Home\nTommy Emmanuel\nLittle by Little","3:06","4,469","199kbps MP3 VBR","")
}),onEvent("image227","click",function(){
    playS("cgh","11","Hey Ya!\nCalum Graham\n12:34","3:40","4,633","168kbps MP3 VBR","")
}),onEvent("image229","click",function(){
    playS("ciw","11","Candle In The Wind\nRichard Clayderman\nThe Ultimate Collection","3:04","4,944","214kbps MP3 VBR","")
}),onEvent("image238","click",function(){
    playS("lda","11","La nuit des adieux\nRichard Clayderman\nPlays Relaxing Piano","3:55","4,768","161kbps MP3 VBR","")
}),onEvent("image223","click",function(){
    playS("thl","11","Hold The Line\nToto\nMilestones","3:55","4,481","152kbps MP3 VBR","")
}),onEvent("image247","click",function(){
    playS("cgs","11","O\nColdplay\nGhost Stories","3:44","4,989","177kbps MP3 VBR","")
}),onEvent("image246","click",function(){
    playS("jga","11","Jaguar '08\nMichiya Haruhata\nBest Works 1987-2008","3:51","4,538","156kbps MP3 VBR","")
}),onEvent("image239","click",function(){
    playS("lnv","11","Leaving Now\nNoisestorm","3:50","4,862","168kbps MP3 VBR","")
}),onEvent("image242","click",function(){
    playS("prm","11","Shelter\nPorter Robinson; Madeon","3:38","4,563","167kbps MP3 VBR","")
}),onEvent("image212","click",function(){
    playS("mof","11","On Fire\nMelano","3:48","4,796","167kbps MP3 VBR","")
}),onEvent("image240","click",function(){
    playS("mmm","11","Make Me Move(James Roche Remix)\nCulture Code","3:42","4,784","171kbps MP3 VBR","")
}),onEvent("image193","click",function(){
    playS("agb","11","At The Gates of Babylon\nAntti Martikainen\nCreation of the World","3:44","4,948","175kbps MP3 VBR","")
}),onEvent("image196","click",function(){
    playS("ats","11","A Tale of Sea Dragons\nMarcus Warner\nOceans","3:30","4,702","178kbps MP3 VBR","")
}),onEvent("image241","click",function(){
    playS("fog","11","Falls of Glory (snippet)\nBrunuhVille\nAurora","2:29","4,387","235kbps MP3 VBR","")
}),onEvent("image213","click",function(){
    playS("tmm","11","The Mind of Nature\nMelodysheep\nLife Beyond Chapter 2 OST","3:47","4,895","171kbps MP3 VBR","")
}),onEvent("image214","click",function(){
    playS("tmv","11","Versus\nColossal Trailer Music\nLand of the Brave","3:10","4,637","194kbps MP3 VBR","")
}),onEvent("image171","click",function(){
    playS("wdb","11","Deep Blue (feat. Kirsten Horne)\nMarcus Warner","3:46","4,870","172kbps MP3 VBR","")
}),onEvent("image172","click",function(){
    playS("twm","11","The Wolf and the Moon\nBrunuhVille\nAurora","3:52","4,604","158kbps MP3 VBR","")
}),onEvent("image188","click",function(){
    playS("tus","11","The Unfolding\nSo Vea\nThe Reach","3:11","4,526","188kbps MP3 VBR","")
}),onEvent("image195","click",function(){
    playS("spk","11","Sparkle\nMarika Takeuchi\nImpressions","3:12","4,431","184kbps MP3 VBR","")
}),onEvent("image197","click",function(){
    playS("cos","11","Change of Seasons\nTony Anderson\nChange of Seasons","3:15","4,682","191kbps MP3 VBR","")
}),onEvent("image215","click",function(){
    playS("brs","11","Butterflies - Renaissance\nTony Anderson\nButterflies - Snowfall Remix","3:04","4,915","212kbps MP3 VBR","")
}),onEvent("image217","click",function(){
    playS("bsd","11","I smile, but she doesn't see\nXeuphoric","3:39","4,387","159kbps MP3 VBR","")
}),onEvent("image173","click",function(){
    playS("afg","11","4 Songs Op.34: No.2 Auf Flügeln des...\nBarbara Bonney\nMendelssohn Essentials","3:14","4,907","201kbps MP3 VBR","")
}),onEvent("image174","click",function(){
    playS("dkp","11","Der Kleine Postillon\nBalazs Szokolay\nRomantic Piano Favorites, vol 5","3:38","4,387","160kbps MP3 VBR","")
}),onEvent("image209","click",function(){
    playS("nam","11","Nocturne in A Minor, Op.36: II\nCarlos Castilla, Amanda Virelles\nDuo Guitiano - The Romantics vol. I","3:24","4,997","195kbps MP3 VBR","")
}),onEvent("image206","click",function(){
    playS("rjw","11","Romance\nJohn Williams\nThe Ultimate Guitar Collection","3:07","4,944","210kbps MP3 VBR","")
}),onEvent("image198","click",function(){
    playS("sms","11","Symphony No. 78 in C Minor, III. Menuetto\nNorthern Chamber Orchestra\nHaydn: Symphonies, Vol. 20","3:02","4,862","212kbps MP3 VBR","")
}),onEvent("image218","click",function(){
    playS("udu","11","Unter Donner Und Blitz, Op. 324\nVienna Philharmonic Orchestra\nNew Year's Concert In Vienna 1987","3:20","4,674","186kbps MP3 VBR","")
}),onEvent("image219","click",function(){
    playS("waf","11","Waltz No. 9 in A flat major, Op. 69 No. 1\nJean-Marc Luisada\nChopin: Favourite Piano Pieces","3:36","4,387","161kbps MP3 VBR","")
}),onEvent("image220","click",function(){
    playS("xer","11","Xerxes, HWV 40: Largo\nWürttemberg Chamber Orchestra\nClassical Oboe, Clarinet, And Flute","3:20","4,620","184kbps MP3 VBR","")
}),onEvent("image176","click",function(){
    playS("wae","11","When All Else Fades\nSam Eber","3:06","4,973","213kbps MP3 VBR","")
}),onEvent("image199","click",function(){
    playS("thi","11","The Things I Really...\nYiruma\nOasis & Yiruma","3:36","4,776","176kbps MP3 VBR","")
}),onEvent("image207","click",function(){
    playS("tbm","11","In The Bleak Midwinter\nStanton Lanier\nDecember Peace","3:26","4,608","178kbps MP3 VBR","")
}),onEvent("image201","click",function(){
    playS("slf","11","Second Love From Summer Scent\nMakiko Hirohashi\nRelaxing Piano - Korean Drama Collection","3:49","4,469","155kbps MP3 VBR","")
}),onEvent("image222","click",function(){
    playS("rap","11","Rainbow\n窪田ミナ\nARIA～ピアノ・コレクション～スタジオーネ","2:57","4,907","220kbps MP3 VBR","")
}),onEvent("image221","click",function(){
    playS("kpn","11","Possible Now\nPeter Kater\nAnthem","3:15","4,276","174kbps MP3 VBR","")
}),onEvent("image203","click",function(){
    playS("mhd","11","My Happy Dance\nDavid Nevue\nA Delicate Joy","2:57","4,616","208kbps MP3 VBR","")
}),onEvent("image210","click",function(){
    playS("fel","11","Felicity\nIsaac Shepard\nDeep Joy","3:31","4,510","170kbps MP3 VBR","")
}),onEvent("image208","click",function(){
    playS("ctm","11","The Monastry\nChristian Barth\nThe Inner World The Last Wind Monk","3:29","4,719","180kbps MP3 VBR","")
}),onEvent("image200","click",function(){
    playS("aoh","11","Adagio of the Highlands\nEthno Music Project\nCeltic Meditation Vol. 4","3:52","4,862","167kbps MP3 VBR","")
}),onEvent("image205","click",function(){
    playS("pdr","11","Races High\nPepe Deluxe\nAngry Birds Go! OST","3:13","4,915","203kbps MP3 VBR","")
}),onEvent("image204","click",function(){
    playS("tzk","11","Threatin' Zeppelin\nKristofer Maddigan\nCuphead - Official Soundtrack","3:24","4,514","176kbps MP3 VBR","")
}),onEvent("image179","click",function(){
    playS("sgw","11","Windancer\nSecret Garden\nWhite Stones","3:34","4,866","180kbps MP3 VBR","")
}),onEvent("image180","click",function(){
    playS("sge","11","Elan\nSecret Garden\nDreamcatcher","3:08","4,727","200kbps MP3 VBR","")
}),onEvent("image181","click",function(){
    playS("oym","11","Open Up Your Mind\nStuart Hoffman\nHeat is On 7","3:38","4,858","177kbps MP3 VBR","")
}),onEvent("image182","click",function(){
    playS("asi","11","All Smiles\nIsaac Shepard\nThe Renewing","3:49","4,919","171kbps MP3 VBR","")
}),onEvent("image183","click",function(){
    playS("fgw","11","Two Weeks in July\nFranz Gordon\nIn a Bar in Buenos Aires","3:24","4,485","175kbps MP3 VBR","")
}),onEvent("image184","click",function(){
    playS("ily","11","I Love You\nDavid Hicken\nStories of You","3:32","4,874","183kbps MP3 VBR","")
}),onEvent("image187","click",function(){
    playS("tis","11","Interwoven Stories\nTodd Baker\nMonument Valley 2 OST","3:16","4,465","181kbps MP3 VBR","")
}),onEvent("image185","click",function(){
    playS("the","11","Them\nNils Frahm\nVictoria","3:43","4,948","177kbps MP3 V2BR","")
}),onEvent("image12","click",function(){
    playS("ehl","11","Lost Aria\nElliot Hsu\nLost Aria","3:34","4,538","168kbps MP3 VBR","")
}),onEvent("image112","click",function(){
    playS("ehf","11","Frailty Of The Isolated\nElliot Hsu\nThe Unattended","3:36","4,964","183kbps MP3 VBR","")
}),onEvent("image236","click",function(){
    playS("mia","11","Made in Abyss\nKevin Penkin\nMade in Abyss Original Soundtrack","1:58","4,747","320kbps MP3 CBR","")
}),onEvent("image237","click",function(){
    playS("qqx","11","River of That Day\nJoe Hisaishi\nSpirited Away Soundtrack","3:10","4,976","208kbps MP3 VBR","")
}),onEvent("image243","click",function(){
    playS("scc","11","Conway's Child\nSta\nTone Sphere OST - Dark Moon","2:41","4,976","245kbps MP3 VBR","")
}),onEvent("image244","click",function(){
    playS("xiq","11","Qliphot\nXista\nTone Sphere Ultra Service","2:18","4,956","286kbps MP3 VBR","")
}),

onEvent("image209","click",function(){
    playS("OTT","11","The English Park\NFranz Gordon\nEasy as One, Two, Three","2:31","4,501","237kbps MP3 VBR","")
}),onEvent("image216","click",function(){
    playS("LIT","11","In Time\nStellardrone\nLight Years","3:32","4,735","178kbps MP3 VBR","")
}),onEvent("image190","click",function(){
    playS("LAF","11","Far Away\nLucention\nTo the Hill and Back","2:21","4,511","255kbps MP3 VBR","")
}),onEvent("image245","click",function(){
    playS("ORT","11","Orthosie\nBen Elson\nOrthosie","2:43","4,462","218kbps MP3 VBR","")
}),onEvent("image228","click",function(){
    playS("TKO","11","Alone\nTrevor Kowalski\nUnwording OST","3:30","4,691","177kbps MP3 VBR","")
}),onEvent("image235","click",function(){
    playS("NOB","11","Nobo -outflowing heart\nSe-U-Ra","2:22","4,753","266kbps MP3 VBR","")
}),onEvent("image234","click",function(){
    playS("EBV","11","8bit Voyager\nLime\nGroundbreakingG BOFXV","2:20","4,112","233kbps MP3 VBR","")
}),onEvent("image233","click",function(){
    playS("AGS","11","A Guiding Star\nElliot Hsu\nResonant Whispers","2:42","4,856","239kbps MP3 VBR","")
}),onEvent("image232","click",function(){
    playS("NKP","11","Nordkap\nMartin Landh","2:59","4,528","202kbps MP3 VBR","")
});


function hideAll() {for (var n = 0; n < all.length; n++) hideElement("image" + all[n])}
getKeyValue("v", function(va) {if (va != undefined) {v = va}getKeyValue("", function(va) {if (va != undefined) {lBo = va}getKeyValue("u", function(va) {if (va != undefined) {uBo = va}getKeyValue("s1", function(va) {if (va != undefined) {salt = va}getKeyValue("s2", function(va) {if (va != undefined) {s2 = va}if (v.slice(lBo + salt * s2, uBo + salt * s2).split("").reverse().join("") != "72280465074823663563146643127150876") {setScreen(" ⠀ ")}})})})})});
var c, access, v, lBo, uBo, salt, s2, playback, v = 9,lBo = 9,uBo = 9,salt = 9,s2 = 9,c = "https://studio.code.org/projects/applab/";
function getGlobal(n) {
    setText("text_area21","Loading..."), getKeyValue("access", function(e) {
        access = e, getKeyValue("playback", function(e) {
                playback = e, setTexr(), n && showN("button36", 3e3)
})})}
function setTexr() {
    setText("text_area21","Project Helios\nVersion: MK14\nMade by Tony T. aka MtnGck\n\nAsset Information\n\nTotal song: 240\nTotal length: 11:02:11\nTotal music size: 1,109,169 KB\nThumbnail size: 1,924 KB\n\nCloud Information\n\nGuest access time: " + access + "\n15s playback time: " + playback)
}
access = playback = "Loading...", getGlobal(!1);var stats = 0;
function showN(n, e) {
    hideElement(n), index = timedLoop(e, function() {
        showElement(n), stopTimedLoop(index)
})}
onEvent("exit","click",function(){
    hideE(["exit","button33","button14"]), fadeOut(["cov","textarea11","cover","cove","textarea5","textarea13","button32","button34","text_area19","text_area20","ta21","button18"]), stopTimedLoop(index)
}),onEvent("button33","click",function(){
    hideE(["button33","exit","button14"]), fadeOut(["cov","textarea11","cover","cove","textarea5","textarea13","button32","button34","text_area19","text_area20","ta21","button18"]), stopTimedLoop(index)
}),onEvent("button14","click",function(){
    hideE(["button33","exit","button14"]), fadeOut(["cov","textarea11","cover","cove","textarea5","textarea13","button32","button34","text_area19","text_area20","ta21","button18"]), stopTimedLoop(index)
}),onEvent("button18","click",function(){
    setText("ta21",""), hideElement("button18"), getKeyValue(tem.toLowerCase(), function(n) {
        null == n && (n = "0"), showN("button18", 3e3), setText("ta21", n)
})}),onEvent("button32","click",function(){
    setText("text_area19",""), hideElement("button32"), getKeyValue(tem.toLowerCase(), function(n) {
        null == n && (n = "0"), showN("button32", 3e3), setText("text_area19", n)
})}),onEvent("button34","click",function(){
    setText("text_area20",""), hideElement("button34"), getKeyValue(tem.toLowerCase(), function(n) {
        null == n && (n = "0"), showN("button34", 3e3), setText("text_area20", n)
})}),onEvent("button4","click",function(){
    fadeIn(["cove","text_area21","button35"]), "Loading..." !== getText("text_area21") && showElement("button36")
}),onEvent("button35","click",function(){
    hideE(["button35","button36"]),fadeOut(["cove","text_area21"]), stopTimedLoop(index)
}),onEvent("button36","click",function(){
    hideElement("button36"), getGlobal(!0)
});
var screencom = [{screen:"screen2",elements:["text_area7","button5","button6","button7","button8","button9","button10","button11"]},{screen:"Msc",elements:["bar1"]},{screen:"vault",elements:["bar"]},{screen:"prep",elements:["button15","image83","text_area6"]},{screen:"P3",elements:["barr"]}];
function changeScreen(screen) {var element;for (var i = 0; i < screencom.length; i++){if (screencom[i].screen == screen){element = screencom[i].elements;break;}}setScreen(screen);if (screen == "Msc" || screen == "vault" || screen == "P3"){fadeout(element[0]);}else{hideE(element);fadeIn(element)}}
function fadeIn(val){for (var i = 0; i < val.length; i++){fadein(val[i])}}
function fadeOut(val){for (var i = 0; i < val.length; i++){fadeout(val[i])}}
function fadein(val){var tmp = 0;var kc = timedLoop(25, function(){if (tmp > 1){stopTimedLoop(kc);kc = 0;}else{showElement(val);tmp+=0.1;setStyle(val, "opacity: "+tmp+";");}})}
function fadeout(val){var teemp = 1.0;showElement(val);var kxx = timedLoop(25, function(){if (teemp < 0){hideElement(val);setStyle(val, "opacity: 1;");stopTimedLoop(kxx)}else{teemp-=0.1;setStyle(val, "opacity: "+teemp+";")}})}
onEvent("button13","click", function( ) {
	var res = prompt("Please type your feedback in the prompt below.\nI cannot reply your message here, so if you want to talk to me, go to App Hub - Lucky Strike.") || "";
	if (res.length > 3){
	  createRecord("Feedback",{c:res,h:false},function(){});
}});
onEvent("button37","click", function( ) {
	var content = readRecords("Feedback", {}, function(val){
	  for (var i = 0; i < val.length; i++){
	    if (val[i].h != 1){
	      var c = prompt("New message, to hide, enter h:\n"+val[i].c);
	      if (c == "h"){
	        val[i].h = 1;
	        updateRecord("Feedback",val[i], function(){});
	}}}
    var c = prompt("No further message.");
})});
ftue();