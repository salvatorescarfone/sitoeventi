function switchPage(x){
  var div = document.getElementById("contenuto");
  var tutorial= `<div class="head">
    <span class="title"><span style="text-transform: uppercase;">
      Tutorial
    </span> | Eventi</span>
    <p style="font-style: italic;margin-top:50px;font-size:30px;">"Gli eventi sono interazioni con la pagina web che lanciano istruzioni o richiamano una funzione."</p>
  </div>
  <div class="tutorial" style="margin-top:75px;">
    <span class="tut_title">Eventi UI</span>
    <p class="event">Gli eventi ui si verificano quando l'utente agisce sull'omonima interfaccia.<br>Esempi sono:
      <ul>
        <li>Evento load --> si verifica quando termina il caricamento della pagina.</li>
        <li>Evento unload --> si verifica quando viene eliminata la pagina web.</li>
      <ul>
    </p>
  </div>

  <div class="tutorial">
    <span class="tut_title">Eventi tastiera</span>
    <p class="event">gli eventi tastiera si verificano quando l'utente interagisce con la tastiera.<br>Esempi sono:
      <ul>
        <li>Evento keydown --> si verifica quando l'utente preme un tasto.</li>
        <li>Evento keyup --> si verifica quando rilascia un tasto.</li>
        <li>Evento keypress --> si verifica quando viene premuto un tasto corrispondente ad un carattere.</li>
      <ul>
    </p>
  </div>

  <div class="tutorial">
    <span class="tut_title">Eventi mouse</span>
    <p class="event">Gli eventi del mouse si verificano nelle interazioni con il mouse stesso<br>Esempi sono:
      <ul>
        <li>Evento click --> si verifica quando viene premuto e rilasciato il tasto su un elemento.</li>
        <li>Evento dbclick --> si verifica quando viene premuto e rilasciato un tasto sullo stesso elemento 2 volte.</li>
        <li>Evento mousedown --> si verifica quando l'utente preme un tasto del mouse.</li>
        <li>Evento mouseup --> si verifica quando l'utente rilascia il tasto del mouse su un elemento.</li>
        <li>Evento mousemove --> si verifica quando l'utente muove il cursore del mouse su un elemento.</li>
        <li>Evento mouseout --> si verifica quando l'utente sposta il cursore del mouse da un elemento.</li>
      <ul>
    </p>
  </div>

  <div class="tutorial">
    <span class="tut_title">Eventi focus</span>
    <p class="event">Gli eventi di focus avvengono quando il focus di un elemento cambia.<br>Esempi sono:
      <ul>
        <li>Evento focus/focusin --> si verifica quando l'elemento ottiene il focus.</li>
        <li>Evento blur/focusout --> si verifica quando l'elemento perde il focus.</li>
      <ul>
    </p>
  </div>

  <div class="tutorial">
    <span class="tut_title">Gestione degli eventi</span>
    <p class="event" style="text-align:justify;">
      Per la gestione degli eventi si usa la sintassi: elemento[nodo del dom].on[nome evento]=nome_funzione.
      Per gestire più funzioni più funzioni contemporaneamente si usano i listener, in cui va indicato quale funzione deve essere eseguita.<br>
      <br>Sintassi: elemento(nodo del DOM).addEventListener('nome_evento', nome_funzione,boolean(opzionale);<br>
      per eliminare un listener  di eventi si può utilizzare la funzione removeEventListener().
      <br>Usando il listener o i gestori di eventi per passare i parametri alla funzione si deve inserire la funzione in una funzione anonima che ingloba la funzione contenete i parametri,che verrà eseguita solo quando verrà richiamata dalla funzione anonima.
    </p>
  </div>
`;
  var esempi =`<div class="head">
    <span class="title"><span style="text-transform: uppercase;">
      Esempi
    </span> | Eventi</span>
    <p style="margin-top:50px;font-size:30px;">In questa sezione potrai vedere diversi esempi su come funzionano gli eventi.</p>
  </div>

  <div class="tutorial" style="margin-top:75px;">
    <span class="tut_title">Evento focus</span>
    <p class="event">Cliccando sulla casella di testo, questa otterrà il focus e si colorerà di rosso. Prova!</p><br>
    <span style="font-size:20px;">INPUT: <span><input type="text" id="fname" value="clicca qui" onfocus="this.value=''">
  </div>

  <div class="tutorial">
    <span class="tut_title">Evento scroll</span>
    <p class="event">Scrollando la barra potrai vedere visualizzato un messaggio. Prova!<br>
      <p>muovi la scrollbar</p>
      <div id="myDIV" style="border: 1px solid black;
width: 200px;
height: 100px;
overflow: scroll;">
        Un evento è – molto semplicemente – qualcosa che accade nel documento.Anche nella vita quotidiana un evento è qualcosa che accade: ad esempio una tazzina di caffè che cade e si rompe. Il documento dunque è l’ambiente entro cui vengono realizzate delle “azioni”, in parte dovute alla volontà dell’utente (passaggio del mouse su un link, click su qualcosa…), altre volte dovute alla situazione contingente (la pagina è stata caricata).
      </div>
      <span id="demo"></span>
    </p>
  </div>

  <div class="tutorial">
    <span class="tut_title">Evento keydown</span>
    <p class="event">L'evento keydown rileva la pressione di un tasto nella casella di testo. Prova!<br>
      <input type="text" id="keyd">
    </p>
  </div>

  <div class="tutorial">
    <span class="tut_title">Evento mouseover e mouseout</span>
    <p class="event">L'evento mouseover si attiva quando il cursore si trova sopra un elemento.<br>L'evento mouseout quando si sposta dall'elemento.Prova!<br>
      <img  id="mouseov" border="0" src="img/index.png"  width="80" height="80">
      <p>mouseover --> immagine in bianco e nero<br>
      mouseout --> immagine in negativo</p>
    </p>
  </div>`;

  if(x==0)
    div.innerHTML = tutorial;
  else{
    div.innerHTML = esempi;
    eventi();
  }


}


function eventi(){
  //focus event
  document.getElementById("fname").addEventListener("focus", myFunction);
  function myFunction() {
      document.getElementById("fname").style.backgroundColor = "red";
  }

  //scroll
  document.getElementById("myDIV").addEventListener("scroll", myScroll);

  function myScroll() {
      document.getElementById("demo").innerHTML = "hai mosso la scrollbar.";
  }

  //keydown
  document.getElementById("keyd").addEventListener("keydown", myKeyDown);

  function myKeyDown() {
      alert("hai premuto un tasto");
  }

  //mouseover
  document.getElementById("mouseov").addEventListener("mouseover", mouseOver);
  document.getElementById("mouseov").addEventListener("mouseout", mouseOut);

  function mouseOver() {
      document.getElementById("mouseov").style.filter = "grayscale(100%)";
  }

  function mouseOut() {
      document.getElementById("mouseov").style.filter = "";
      document.getElementById("mouseov").style.filter = "invert(100%)";
  }

}
