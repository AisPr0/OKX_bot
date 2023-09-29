window.onload = function(){
//ОКНО
$('.last').css('font-size', '40px');
$('.ticker-top-box').prepend('<div class="x1" id="da" style="margin-left: 200px;position: fixed;font-size: 50px;margin-top: 30px;z-index: 100;">----</div><div class="x30" id="net" style="color: #61add1;margin-left: 10px;position: fixed;font-size: 80px;margin-top: 70px;z-index: 100;">----</div><div class="x0" style="margin-left: 10px;font-size: 10px;z-index: 100;border-top-left-radius: 10px;border-bottom-left-radius: 10px;background-color: #31394aab;overflow: scroll;width: 330px;height: 300px;padding: 5px;position: fixed;"></div>');
$('.ticker-top-box').prepend('<div class="x2" style="margin-left: 350px;font-size: 10px;z-index: 100;background-color: #bd464669;overflow: scroll;width: 300px;height: 300px;padding: 5px;position: fixed;"><div class="place-order-input-box"><div class="input-label-box">Количество  (USDT)</div><div class="input-item-input"><div class="okui-input input-sm input-item-number-input"><div class="okui-input-box"><input id="x1" max="Infinity" step="2" inputmode="decimal" name="size" placeholder="Минимум: 2 USDT" autocomplete="off" min="0" type="text" class="okui-input-input" autocapitalize="off" autocorrect="off" value=""><div class="okui-input-suffix"></div></div></div></div></div><div class="place-order-input-box" style="/* transform: scale(0.9); */"><div class="input-label-box">Изменение вниз</div><div class="input-item-input"><div class="okui-input input-sm input-item-number-input"><div class="okui-input-box"><input id="x2" max="Infinity" step="2" inputmode="decimal" name="size" placeholder="" autocomplete="off" min="0" type="text" class="okui-input-input" autocapitalize="off" autocorrect="off" value=""><div class="okui-input-suffix"></div></div></div></div></div><div class="place-order-input-box" style="/* transform: scale(0.9); */"><div class="input-label-box">Продать XCH</div><div class="input-item-input"><div class="okui-input input-sm input-item-number-input"><div class="okui-input-box"><input id="x3" max="Infinity" step="2" inputmode="decimal" name="size" placeholder="" autocomplete="off" min="0" type="text" class="okui-input-input" autocapitalize="off" autocorrect="off" value=""><div class="okui-input-suffix"></div></div></div></div></div><div class="place-order-input-box" style="/* transform: scale(0.9); */"><div class="input-label-box">Защита от скачка вверх</div><div class="input-item-input"><div class="okui-input input-sm input-item-number-input"><div class="okui-input-box"><input id="x4" max="Infinity" step="2" inputmode="decimal" name="size" placeholder="" autocomplete="off" min="0" type="text" class="okui-input-input" autocapitalize="off" autocorrect="off" value=""><div class="okui-input-suffix"></div></div></div></div></div><div class="place-order-input-box" style="/* transform: scale(0.9); */"><div class="input-label-box">интервал изменения</div><div class="input-item-input"><div class="okui-input input-sm input-item-number-input"><div class="okui-input-box"><input id="x10" max="Infinity" step="2" inputmode="decimal" name="size" placeholder="" autocomplete="off" min="0" type="text" class="okui-input-input" autocapitalize="off" autocorrect="off" value=""><div class="okui-input-suffix"></div></div></div></div></div><div class="place-order-input-box" style="/* transform: scale(0.9); */"><div class="input-label-box">Время задержки (ms)</div><div class="input-item-input"><div class="okui-input input-sm input-item-number-input"><div class="okui-input-box"><input id="x7" max="Infinity" step="2" inputmode="decimal" name="size" placeholder="в миллисекундах" autocomplete="off" min="0" type="text" class="okui-input-input" autocapitalize="off" autocorrect="off" value=""><div class="okui-input-suffix"></div></div></div></div></div><div class="input-label-box" id="x5" style="margin-top: 10px;cursor: pointer;">актвировать f активной продажы</div><div class="place-order-input-box" style="/* transform: scale(0.9); */"><br><div class="input-label-box">Книга ордеров (вверх)</div><div class="input-item-input"><div class="okui-input input-sm input-item-number-input"><div class="okui-input-box"><input id="x51" max="Infinity" step="2" inputmode="decimal" name="size" placeholder="изменение вверх" autocomplete="off" min="0" type="text" class="okui-input-input" autocapitalize="off" autocorrect="off" value=""><div class="okui-input-suffix"></div></div></div></div></div><div class="place-order-input-box" style="/* transform: scale(0.9); */"><div class="input-label-box">Книга ордеров (вниз)</div><div class="input-item-input"><div class="okui-input input-sm input-item-number-input"><div class="okui-input-box"><input id="x52" max="Infinity" step="2" inputmode="decimal" name="size" placeholder="изменение ввниз" autocomplete="off" min="0" type="text" class="okui-input-input" autocapitalize="off" autocorrect="off" value=""><div class="okui-input-suffix"></div></div></div></div></div><div class="place-order-input-box" style="/* transform: scale(0.9); */"><div class="input-label-box">Книга ордеров (значение)</div><div class="input-item-input"><div class="okui-input input-sm input-item-number-input"><div class="okui-input-box"><input id="x53" max="Infinity" step="2" inputmode="decimal" name="size" placeholder="перед значением или равно ему" autocomplete="off" min="0" type="text" class="okui-input-input" autocapitalize="off" autocorrect="off" value=""><div class="okui-input-suffix"></div></div></div></div></div></div><div class="x3" style="margin-left: 660px;font-size: 10px;z-index: 100;border-top-right-radius: 10px;border-bottom-right-radius: 10px;background-color: #b54343ad;width: 30px;cursor: pointer;height: 300px;padding: 5px;position: fixed;"><div style="transform: rotate(86deg);font-size: 15px;margin-top: 10px;">START</div></div>');
//ОКНО

$('.account-slot-box .okui-checkbox-input').click();
var strDate; var start; var end; var dt; var pK = 0;  var x0 = 0; var x1 = 0; var x2 = 0; x0 = Number(x0); var cons = ''; var fap = 0; var zop = 0; var fi = 0; var xa = 0; var sa = 0; var s55 = 0; var j = 0;

////ПАРАМЕТРЫ//////////////////////////////////////
var px = 1;var balance = 0;var iK = 0;var iP = 0;var oK = 0; var f1 = 0; var f2 = 0; var ms = 0; var y0 = 0; var y20 = 0; var s50 = 0; var x0x = 0; var key = 0; var sk = 0; var sp = 0; var iK0 = 0;

const f = x => ((x.toString().includes('.')) ? x.toString().match(/\.(\d+)/)[1].length : (0)); // количество знаков после запятой
const p = x => (x.replace('&nbsp;','').replace(',','.')); // удаляет " ", меняет ',' на '.'
const s = x => {if (x == 1) {return($('button[side="buy"]').text())} else  return($('button[side="sell"]')).text()};


$('.x3').click(function() {
let text = $('.x3 div').text();
switch (text) {
  case 'START':
    console.log("Это купить  "+s(1));
    console.log("Это продать  "+s());
	key = 1;
	$('.x3').css('background-color','#32ac688c');$('.x3 div').text('STOP');
	$('.x2').css('background-color','rgb(7 116 55 / 44%)');
	balance = $('.x2 #x1').val(); // БАЛАНС
	iK = $('.x2 #x2').val();iK = Number(iK); // ПИК вниз
	iP = $('.x2 #x3').val();iP = Number(iP); // ИЗМ. Продать XCH
	oK = $('.x2 #x4').val();oK = Number(oK); // ПИК вверх
	ms = $('.x2 #x7').val();ms = Number(ms); // ms
	x10 = $('.x2 #x10').val();x10 = Number(x10);
	//
	x1 = $('.last').html(); x1 = p(x1); x1 = Number(x1);
	x2 = $('.last').html(); x2 = p(x2); x2 = Number(x2);
	y0 = x2 - x10; y20 = x2 + x10; y0 = Number(y0); y20 = Number(y20);
	//--------------------------------------------------------------------
	h = $('.x2 #x51').val(); h = Number(h);
	h2 = $('.x2 #x52').val(); h2 = Number(h2);
	v = $('.x2 #x53').val(); v = Number(v);
	iK0 = iK;
	//--------------------------------------------------------------------
sk = $('#leftPoForm .avail-display-container').html().match(/.*>(.*)USDT/)[1].replace(',','.'); sk = Number(sk);
sp = $('#rightPoForm .avail-display-container').html().match(/.*>(.*)USDT/)[1].replace(',','.'); sp = Number(sp);
	f1 = 1;//f($('.last').text()); //f1 = f(($('.last').text().replace(/[,]/g, '')));
	f2 = f($('#leftPoForm input[name="size"]').attr("step"));
    break;
  case 'STOP':
	key = 0;
	$('.x3').css('background-color','#b54343ad');$('.x3 div').text('START');
	$('.x2').css('background-color','#bd464669');
    break;
}
});
//fap
$('.x2 #x5').click(function() {
let text2 = $(this).text();
switch (text2) {
  case 'актвировать f активной продажы':
	fi = 1;$(this).text('деактвировать f активной продажы');
    break;
  case 'деактвировать f активной продажы':
	fi = 0;$(this).text('актвировать f активной продажы');
    break;
}
});
//fap
////ПАРАМЕТРЫ//////////////////////////////////////



var observer = new MutationObserver(function() {
if (key == 1) { //key
if (px == 1) {
new Promise(function(resolve, reject) {



x2 = 0;
x2 = $('.last').html(); // Super
x2 = p(x2);
x2 = Number(x2);
console.log("0_" + x2); // консоль >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

fap = fi; // параметр fap
zop = 1; // защита от пика
dt = new Date();
strDate = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() + ":" + dt.getMilliseconds();
start = new Date().getTime();

j = (x1-x2).toFixed(f1); // Joker


////ПРОВЕРКА////////////////////////////////////
if (($('*').is('.up:contains("Купить XCH")')) || (pK == 1)) { pK = 0;
let s10 = 0;
s10 = $('#rightPoForm .avail-display-container').html().match(/.*>(.*)USDT/)[1].replace(',','.'); s10 = Number(s10);
let y5 = (x2 + 0.03).toFixed(f1); // не забудь !!! переделать

if (s10 >= 2) { px = 0;
jQuery(function(){jQuery('.btn-content:contains("Отменить")').click();});
$('#rightPoForm input[name="price"]').val(y5)[0].dispatchEvent(new Event('input', { bubbles: true }));
$('#rightPoForm .okui-slider-mark-node-text').click(); // клик по 100%
$('button[side="sell"]').click();

cons = x1+' '+x2+' f условие необходимой продажи '+(x2);
$('.x0').prepend(cons+'<br>');
x1 = x2;
end = new Date().getTime();
cons = '         '+strDate+'    '+(end - start)+'ms';$('.x0').prepend(cons+'<br>');
px = 1; fap = 0;
resolve();} else {resolve();}} else {resolve();}
////ПРОВЕРКА////////////////////////////////////

}).then(function(result) {
return new Promise((resolve, reject) => {
////Купить XCH//////////////////////////////////////
if (j < iK) {
if (sa === 0) { sa = 1; // close key
if (!($('*').is('.down:contains("Продать XCH")'))) {
s50 = $('#leftPoForm .avail-display-container').html().match(/.*>(.*)USDT/)[1].replace(',','.'); s50 = Number(s50);
if ((y0 > x2) ||  (y20 < x2) || (s50 >= balance)) {

    if (j > -oK) {
setTimeout(function(){
//NEW order book list bids
 iK = iK0; //
    let g = x2 - iK; let gr = g + h; let gr2 = g - h2;
	   let book = $('.order-book-box');
	   let u = book.find('li[data-index="0"] em').html(); u = p(u);
	   let u2 = book.find('em:last').html(); u2 = p(u2);
		console.log("u_ " + u); // консоль >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
		console.log("u2_ " + u2); // консоль >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
		console.log("g_ " + g); // консоль >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	   if (u > g && u2 < g) {
	       
	       if (u < gr) {gr = u;}
	       if (u2 > gr2) {gr2 = u2;}
	       
	       
	       
	       let il = book.find('li:last').attr('data-index');
	       let i = 0; var u0 = 0; var u10 = 0; var u11 = 0; var u6 = '';


                while (i < il) {

                    let u3 = book.find('li[data-index="'+i+'"]');



                    let u4 = u3.find('em').html(); u4 = p(u4); u12 = 0; // значение

                    //var u5 = u3.find('div').attr('style').match(/\(-(.*)%\)/)[1]; // процент?

                    var u12 = u3.find('[data-position="total"]').html(); u12 = p(u12); // суммы

                    if(!(isNaN(u12))) {u6 = Number(u12)};
                    if(u12.includes('K')) {u6 = u12.match(/(.*)K/)[1];u6 = Number(u6);u6 = u6*1000;}
                    if(u12.includes('M')) {u6 = u12.match(/(.*)M/)[1];u6 = Number(u6);u6 = u6*1000000;}

                    if (gr >= u4 && u4 > gr2 && v > u6) {
                        u6 = Number(u6); // сумма
                        console.log("u4 = " + u4 + " > " + "u0 = " + u0); // консоль >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                        if (u6 > u0) {
                            
                            u0 = u6; u10 = u4;
                        }
                    }
                    
                    i++;

           }
console.log("-1-------------" + u0); // консоль >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
v = Number(v); u11 = Number(u11);
	//if (u11 >= v) {

iK = x2 - u10;

        //}
	       /* условия для iK    */
	       /* Купить XCH считаем iK */
	       
	   }
	   

//NEW order book list bids
    if (!($('*').is('.down:contains("Продать XCH")'))) { px = 0;
jQuery(function(){jQuery('.btn-content:contains("Отменить")').click();});



// таймер
let o = 0;
let tD1 = setInterval(function(){o++;
 if (o == 300) {clearInterval(tD1); sa = 0; px = 1; x1 = x2; resolve();}
    let sk2 = $('#leftPoForm .avail-display-container').html().match(/.*>(.*)USDT/)[1].replace(',','.'); sk2 = Number(sk2);
    let sp2 = $('#rightPoForm .avail-display-container').html().match(/.*>(.*)USDT/)[1].replace(',','.');sp2 = Number(sp2);
  if(sp+2 < sp2) {clearInterval(tD1); pK = 1; sa = 0; px = 1; x1 = x2;}
 if(sk-2 < sk2) {clearInterval(tD1);
//1
//--------------------
var y = x2-iK; y = y.toFixed(f1);
$('#leftPoForm input[name="price"]').val(y)[0].dispatchEvent(new Event('input', { bubbles: true }));
$('#leftPoForm input[name="total"]').val(balance)[0].dispatchEvent(new Event('input', { bubbles: true }));
$('button[side="buy"]').click();
//--------------------
y0 = x2 - x10; y20 = x2 + x10;
cons = (y0.toFixed(f1))+' '+(y20.toFixed(f1))+' / к: '+((x2-iK).toFixed(f1))+' пик: '+((x2-x1).toFixed(f1))+' Купить XCH u11 '+u11+' u10 '+u10;
$('.x0').prepend(cons+'<br>');
end = new Date().getTime();
cons = '         '+strDate+'    '+(end - start)+'ms';$('.x0').prepend(cons+'<br>');
//1
let tD2 = setInterval(function(){o++;
 if (o == 600) {clearInterval(tD2); sa = 0; px = 1; x1 = x2; resolve();}
 console.log(o);
    sk2 = $('#leftPoForm .avail-display-container').html().match(/.*>(.*)USDT/)[1].replace(',','.'); sk2 = Number(sk2);
    sp2 = $('#rightPoForm .avail-display-container').html().match(/.*>(.*)USDT/)[1].replace(',','.');sp2 = Number(sp2);
 if((sk-2 >= sk2) || (sp+2 <= sp2)){
    clearInterval(tD2);
//2
sa = 0; px = 1; x1 = x2; resolve();
//2
}}, 100)}
}, 100);
// таймер
    } else {sa = 0; resolve();}}, ms); 
    } else {zop = 0;
x1 = x2;
cons = x1+' '+x2+' / защита от пика вверх '+((x2-x1).toFixed(f1));
$('.x0').prepend(cons+'<br>');
end = new Date().getTime();
cons = '         '+strDate+'    '+(end - start)+'ms';$('.x0').prepend(cons+'<br>');
sa = 0; resolve();} 
} else {sa = 0; resolve();}
} else {sa = 0; resolve();}
} else {resolve();} // open key
} else {resolve();}
////Купить XCH//////////////////////////////////////
});
}).then(function(result) {
return new Promise((resolve, reject) => {
////Продать XCH/////////////////////////////////////
if ((j > iK) && (zop == 1)) {
if (!($('*').is('.down:contains("Продать XCH")'))) {px = 0; 
$('.x1').html((x1-iK).toFixed(f1));
jQuery(function(){jQuery('.btn-content:contains("Отменить")').click();});
var z = ((balance/(x1-iK+iP))*0.997).toFixed(f1); var y = x1-iK+iP; y = y.toFixed(f1); //var bi = (z*y).toFixed(f1);
$('#rightPoForm input[name="price"]').val(y)[0].dispatchEvent(new Event('input', { bubbles: true }));
$('#rightPoForm input[name="size"]').val(z)[0].dispatchEvent(new Event('input', { bubbles: true }));
//$('#rightPoForm input[name="total"]').val(bi)[0].dispatchEvent(new Event('input', { bubbles: true }));
$('button[side="sell"]').click();

cons = x1+' '+x2+' / к: '+((x1-iK).toFixed(f1))+' п: '+((x1-iK+iP).toFixed(f1))+'пик: '+((x2-x1).toFixed(f1))+' Продать XCH';
$('.x0').prepend(cons+'<br>');
jQuery(function(){jQuery('.btn-content:contains("Подтвердить")').click();}); //клик+
fap = 0;// f акт прод
end = new Date().getTime();
cons = '         '+strDate+'    '+(end - start)+'ms';$('.x0').prepend(cons+'<br>');
x1 = x2; px = 1; resolve();} else {resolve();}
} else {resolve();}
////Продать XCH/////////////////////////////////////
});
}).then(function(result) {
return new Promise((resolve, reject) => {
////РАВНО//////////////////////////////////////////
if ((j == iK) && (zop == 1)) {var s1 = 0;var s2 = 0;s2 = Number(s2);
if (!($('*').is('.down:contains("Продать XCH")'))) {
///
if ($('*').is('.table-isolate.isolate-split')) {
px = 0;
s1 = $('.table-isolate.isolate-split').eq(1).find('li span').text().match(/^(.*?)\s/)[1];s1 = Number(s1); s1 = s1.toFixed(f2);
s2 = (x2+iP)*(s1*0.997); s2 = s2.toFixed(0);

if (s2 > 2) {$('.x1').html(x2);
jQuery(function(){jQuery('.btn-content:contains("Отменить")').click();});
var y = x2+iP; y = y.toFixed(f1);
$('#rightPoForm input[name="price"]').val(y)[0].dispatchEvent(new Event('input', { bubbles: true }));
$('#rightPoForm input[name="size"]').val(s1)[0].dispatchEvent(new Event('input', { bubbles: true }));
$('#rightPoForm input[name="total"]').val(s2)[0].dispatchEvent(new Event('input', { bubbles: true }));
$('button[side="sell"]').click();$('.x1').html(x2);
fap = 0;// f акт прод
cons = x1+' '+x2+' / к: '+(x1-iK)+' п: '+x2+'пик: '+((x2-x1).toFixed(f1))+' усло заполнено '+((s1/(balance/x1)).toFixed(2))+'%';
$('.x0').prepend(cons+'<br>');
end = new Date().getTime();
cons = '         '+strDate+'    '+(end - start)+'ms';$('.x0').prepend(cons+'<br>');
x1 = x2; px = 1; resolve();} else { px = 0;
jQuery(function(){jQuery('.btn-content:contains("Отменить")').click();});
cons = x1+' '+x2+' / к: '+((x1-iK).toFixed(f1))+' п: '+x2+' пик: '+((x2-x1).toFixed(f1))+' равно не прошло';
$('.x0').prepend(cons+'<br>');
end = new Date().getTime();
cons = '         '+strDate+'    '+(end - start)+'ms';$('.x0').prepend(cons+'<br>');
x1 = x2; px = 1; resolve();}
} else {px = 0;
$('.x1').html(x1);
var z = ((balance/x2)*0.997).toFixed(f2); var y = x2+iP; y = y.toFixed(f1); var bi = (z*y).toFixed(0); $('.x1').html(x2);
$('#rightPoForm input[name="price"]').val(y)[0].dispatchEvent(new Event('input', { bubbles: true }));
$('#rightPoForm input[name="size"]').val(z)[0].dispatchEvent(new Event('input', { bubbles: true }));
$('#rightPoForm input[name="total"]').val(bi)[0].dispatchEvent(new Event('input', { bubbles: true }));
$('button[side="sell"]').click();
cons = x1+' '+x2+' / к: '+((x1-iK).toFixed(f1))+' п: '+x2+' пик: '+((x2-x1).toFixed(f1))+' усло заполнено 100%';
$('.x0').prepend(cons+'<br>');
fap = 0;// f акт прод
end = new Date().getTime();
cons = '         '+strDate+'    '+(end - start)+'ms';$('.x0').prepend(cons+'<br>');
x1 = x2; px = 1; resolve();}
} else {resolve();}
///
} else {resolve();}
////РАВНО//////////////////////////////////////////
});
}).then(function(result) {
return new Promise((resolve, reject) => {
////f активной продажи//////////////////////////
if (($('*').is('.down:contains("Продать XCH")')) && (fap == 1)) {

jQuery(function(){jQuery('.btn-content:contains("Отменить")').click();});
px = 0;
var obc = new MutationObserver(function() {var s1 = 0; var s2 = 0; s2 = Number(s2);
obc.disconnect();
s1 = $('#rightPoForm .avail-display-container').html().match(/.*>(.*)USDT/)[1].replace(',','.'); s1 = Number(s1);
s1 = s1.toFixed(f2);
var y = x2.toFixed(f1);
s2 = (x2*s1);
if (s2 > 2) {
$('#rightPoForm input[name="price"]').val(y)[0].dispatchEvent(new Event('input', { bubbles: true }));
$('#rightPoForm .okui-slider-mark-node-text').click(); // клик по 100%
//$('#rightPoForm input[name="size"]').val(s1)[0].dispatchEvent(new Event('input', { bubbles: true }));
//$('#rightPoForm input[name="total"]').val(s2)[0].dispatchEvent(new Event('input', { bubbles: true }));
$('button[side="sell"]').click();
px = 1;
x1 = x2;

cons = x1+' '+x2+' f Продать XCH за '+(x2);
$('.x0').prepend(cons+'<br>');
xa = 0;
end = new Date().getTime();
cons = '         '+strDate+'    '+(end - start)+'ms';$('.x0').prepend(cons+'<br>');
obc.disconnect();
resolve();} else {
jQuery(function(){jQuery('.btn-content:contains("Отменить")').click();});

cons = x1+' '+x2+' f ВСЕ ПРОДАНО !!!';
$('.x0').prepend(cons+'<br>');
x1 = x2; xa = 0;
end = new Date().getTime();
cons = '         '+strDate+'    '+(end - start)+'ms';$('.x0').prepend(cons+'<br>');
px = 1;
resolve();}
});
obc.observe($('#rightPoForm .avail-display-container')[0], {
  attributes: true,
  childList: true,
  subtree: true,
  characterData: true
});
obc.observe($('#leftPoForm .avail-display-container')[0], {
  attributes: true,
  childList: true,
  subtree: true,
  characterData: true
});

} else {end = new Date().getTime(); $('.x30').html(end - start); resolve();}
////f активной продажи//////////////////////////
});
});
}
} //key
});
observer.observe($('.last')[0], {
  attributes: true,
  childList: true,
  subtree: true,
  characterData: true
});
}
