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
    <p class="event">gli eventi tastiera si verificano quando l'utente interagisce con la tastiera.<br>Esempi sono:
      <ul>
        <li>Evento keydown --> si verifica quando l'utente preme un tasto.</li>
        <li>Evento keyup --> si verifica quando rilascia un tasto.</li>
        <li>Evento keypress --> si verifica quando viene premuto un tasto corrispondente ad un carattere.</li>
      <ul>
    </p>
  </div>

  <div class="tutorial">
    <span class="tut_title">Eventi focus</span>
    <p class="event">gli eventi tastiera si verificano quando l'utente interagisce con la tastiera.<br>Esempi sono:
      <ul>
        <li>Evento keydown --> si verifica quando l'utente preme un tasto.</li>
        <li>Evento keyup --> si verifica quando rilascia un tasto.</li>
        <li>Evento keypress --> si verifica quando viene premuto un tasto corrispondente ad un carattere.</li>
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
  var esempi ="swag";

  if(x==0)
    div.innerHTML = tutorial;
  else
    div.innerHTML = esempi;

}

//focus event
document.getElementById("fname").addEventListener("focus", myFunction);
function myFunction() {
    document.getElementById("fname").style.backgroundColor = "red";
}
