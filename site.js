  // Fill these in when ready; the page updates itself.
  var TICKET_URL = "";   // e.g. your Tock, Eventbrite or SevenRooms event link
  var PRESS_EMAIL = "casatinkuylv@gmail.com";  // e.g. press@casatinkuy.com

  var ES = {
    nav1: "La Casa", nav2: "10 de noviembre", nav3: "El Programa", nav4: "Los Creadores", nav5: "Prensa", nav6: "Entradas",
    heroLabel: "Las Vegas · Raíces en Lima",
    heroTitle: "La Casa del <em>Encuentro</em>",
    heroLede: "Casa Tinkuy reúne la cocina, la coctelería, la música y las historias del Perú en una sola mesa. Un chef y un mixólogo, dos hermanos nacidos en Lima, que crean noches donde los ingredientes ancestrales se encuentran con una ciudad moderna.",
    heroDate: "Martes 10 de noviembre de 2026",
    heroWhere: "El primer encuentro · <a class=\"addr\" href=\"https://www.google.com/maps/search/?api=1&amp;query=Echo+Taste+%26+Sound+1301+S+Main+St+Ste+160+Las+Vegas+NV+89104\" target=\"_blank\" rel=\"noopener\">Echo Taste &amp; Sound, Arts District</a>", dirBtn: "Cómo llegar", ageLine: "Mayores de 21 años",
    casaLang: "Español", noun1: "sustantivo", noun2: "sustantivo",
    casaDef: "Una casa. Un hogar. El lugar donde te reciben y te dan de comer, donde la puerta se queda abierta un poco más de lo necesario.",
    tinkuyDef: "Un encuentro. El punto donde se juntan las personas, los ríos, las tradiciones y las fuerzas opuestas. En los Andes, un tinkuy es donde dos cosas se unen y crean algo nuevo.",
    togetherTitle: "El Perú se encuentra con el mundo.<br><em>Lo ancestral, con lo moderno.</em>",
    togetherText: "El chef se encuentra con el mixólogo. Lima se encuentra con Las Vegas. Cada noche de Casa Tinkuy nace de una idea: todo encuentro crea una nueva historia.",
    evLabel: "El primer encuentro", evTitle: "Una noche en el Arts District",
    evText: "Nuestro primer pop-up es una cena peruana de seis tiempos, acompañada de cuatro cócteles inspirados en la costa, la sierra y la selva del Perú.",
    ev1k: "Cena", ev1v: "Un menú de degustación peruano de seis tiempos del Chef Michael Palomino",
    ev2k: "La barra", ev2v: "Cuatro cócteles peruanos del mixólogo Angelo Palomino",
    ev3k: "Después de la cena", ev3v: "Un lounge con música en vivo",
    dMonth: "Noviembre", dDay: "Martes · 2026", dWhere: "Dónde", dSeat: "Turnos", dSeatV: "Turnos escalonados durante la noche",
    prLabel: "El programa", prTitle: "Cuatro cócteles, tres regiones",
    prText: "El Perú sube desde la costa desértica hasta las cumbres andinas y baja hacia la Amazonía en unos pocos cientos de kilómetros. Los cuatro cócteles siguen esa ruta, inspirados en los ingredientes y las tradiciones de cada paisaje.",
    r1a: "La Costa · nivel del mar", r1t: "La Costa",
    r1p: "Una costa desértica frente al Pacífico, hogar de Lima y de los valles donde crecen los viñedos más antiguos del Perú.",
    r2a: "Los Andes · más de 3,000 m", r2t: "Los Andes",
    r2p: "Valles y cumbres a más de 3,000 metros, donde se cultivan papas y maíz nativos desde hace miles de años.",
    r3a: "La Selva · la Amazonía", r3t: "La Amazonía",
    r3p: "Más de la mitad del Perú es selva, fuente de frutas, semillas y plantas que no existen en ningún otro lugar.",
        prNote: "Los nombres de los cócteles y el menú completo se anunciarán más cerca de la fecha.",
    whyLabel: "Por qué Casa Tinkuy",
    whyText: "Las Vegas tiene algunos de los mejores restaurantes y bares del mundo. En la mayoría, el Perú no está: ni sus ingredientes, ni sus destilados, ni su gente. Casa Tinkuy existe para corregir eso, con una cocina y una barra que tratan al Perú con la misma seriedad que a cualquier cocina de esta ciudad.",
    navW: "Colabora", navF: "Preguntas",
    wkLabel: "Colabora", wkTitle: "Trabaja con nosotros",
    wkText: "Casa Tinkuy está hecha para viajar. Si tienes un espacio, una marca o una historia que pertenece a nuestra mesa, nos encantaría saber de ti.",
    wk1t: "Eventos privados", wk1p: "Una noche de Casa Tinkuy para tus invitados, pensada para la ocasión.",
    wk2t: "Colaboraciones con marcas", wk2p: "Para marcas de destilados, gastronomía y hospitalidad que quieran ser parte de una mesa peruana en Las Vegas.",
    wk3t: "Espacios y artistas", wk3p: "Para restaurantes, bares y hoteles que quieran recibir una noche de Casa Tinkuy, y para chefs, músicos y artistas que quieran crearla con nosotros.",
    wkCta: "Escríbenos a",
    w1tag: "Con entrada", w1t: "La Cena",
    w1p: "Seis tiempos del Chef Michael Palomino, construidos alrededor del ají amarillo, el ají que está en el corazón de la cocina peruana, con cuatro cócteles peruanos de Angelo Palomino, servidos en turnos escalonados durante la noche.",
    w1s: "Productos orgánicos y ajíes peruanos frescos de Malibu Fig Farm, en California.",
    w2tag: "Sin reserva", w2t: "La Barra",
    w2p: "No necesitas entrada. Ven por un cóctel peruano durante la cena y quédate para el lounge con música en vivo. Seis asientos en la barra y un pequeño espacio para estar de pie.",
    heroBtn: "Entradas muy pronto", heroGo: "Comprar entradas",
    fqLabel: "Bueno saber", fqTitle: "Preguntas",
    q1: "¿Dónde es?", a1: "Echo Taste &amp; Sound, 1301 S Main St, Suite 160, Las Vegas, NV 89104, en el Arts District.",
    q2: "¿Puedo ir solo a la barra?", a2: "Sí. Durante la cena, la barra recibe a quienes lleguen sin reserva para tomar cócteles, sin necesidad de entrada. El espacio es limitado: seis asientos en la barra y un pequeño espacio para estar de pie, por orden de llegada.",
    q6: "¿Es solo para mayores de 21?", a6: "Sí. Casa Tinkuy es un evento para mayores de 21 años, tanto la cena como la barra. Trae un documento de identidad con foto.",
    q3: "¿Cuándo salen las entradas?", a3: "Muy pronto. Sigue a <a href=\"https://www.instagram.com/casatinkuylv/\" target=\"_blank\" rel=\"noopener\">@casatinkuylv</a> en Instagram para enterarte primero.",
    q4: "¿Pueden adaptarse a alergias o necesidades alimentarias?", a4: "Cuéntanos sobre cualquier alergia o necesidad alimentaria al comprar tu entrada y te diremos qué podemos adaptar. El menú está construido alrededor del ají amarillo, así que avísanos si eres sensible al picante.",
    q5: "¿Otras preguntas?", a5: "Escríbenos a <a href=\"mailto:casatinkuylv@gmail.com\">casatinkuylv@gmail.com</a>.",
    nlK: "Guárdame un lugar", nlT: "Dónde se posará el colibrí", nlS: "Casa Tinkuy se mueve. Entérate primero de la próxima fecha y lugar.",
    nlPh: "Tu correo", nlB: "Guardar mi lugar", nlA: "Entrada individual",
    nlOk: "Listo. Serás de los primeros en saber dónde se posa el colibrí.", nlErr: "Algo salió mal. Inténtalo de nuevo o escríbenos a casatinkuylv@gmail.com.",
    quote: "Todo encuentro crea una nueva historia.",
    thLabel: "El umbral", thTitle: "Todo encuentro empieza en una puerta",
    thText: "Casa Tinkuy nace de un gesto sencillo: abrir la puerta e invitar a la gente a pasar. Lo que sucede del otro lado es el encuentro.",
    mkLabel: "Los creadores", mkTitle: "Dos hermanos nacidos en Lima, en una sola mesa",
    p1r: "Fundador y Director Creativo", p1o: "Lima, Perú → Las Vegas",
    p1t: "<p>De niño en Lima, Angelo pasaba las tardes después del colegio en la cocina de su abuela Ofelia. Uno de los recuerdos que lo acompañan es el de los dos desgranando arvejas en un tazón, ella cocinando mientras conversaban. Su cocina siempre estaba alimentando a alguien: tíos y primos que pasaban por la casa a lo largo de la tarde. Años después, eso se convirtió en las ganas de ser chef. A los veintiún años se mudó a Las Vegas y su primer trabajo fue como cocinero. Terminó siendo mixólogo, aunque la cocina nunca lo dejó del todo.</p><p>A partir de ahí hizo su camino desde abajo: ayudante de mesero, mesero, barback, bartender, gerente. Abrió Javier's como mesero. Unos meses después postuló a Hakkasan, en el MGM Grand, y entró como asistente de mixología. Nunca había visto un programa de bar así: jarabes cocinados en casa, fruta deshidratada a mano, cada limón, lima y naranja exprimidos al momento. Ahí aprendió que una barra podía funcionar como una cocina. Bazaar Meat, con José Andrés, le enseñó que un cóctel podía construirse como un plato y despertó su curiosidad por lo que un cóctel podía llegar a ser. En esos mismos años, Rain, Moon, Ghostbar y el day club del Palms le enseñaron ritmo y volumen. Luego vino el Cosmopolitan, donde trabajó en todas las barras del casino, y siete años en Vanderpump Cocktail Garden.</p>",
    p2r: "Chef Ejecutivo", p2cap: "Con el Chef Thomas Keller en Bouchon, Las Vegas.", p2o: "Lima, Perú → Las Vegas",
    p2t: "<p>Michael aprendió a cocinar en casa, viendo a su padre preparar ceviche, anticuchos y otros platos tradicionales peruanos que sus padres trajeron de Lima a Las Vegas. Fueron las reuniones familiares las que lo atraparon. Con los años, él era quien cocinaba para la familia y los amigos, mucho antes de que una cocina lo contratara.</p><p>Empezó en las cocinas de Las Vegas como lavaplatos y fue subiendo. Cocinero de línea en Honey Salt. Chef de pastas en el equipo de apertura de Giada's. Bouchon en el Venetian, bajo el Chef Thomas Keller. Casa Playa en el Wynn. Quince años en total. Hoy es Sous Chef Ejecutivo de Poodle Room en el Fontainebleau.</p><p>En Casa Tinkuy cocina la comida con la que creció, a través de todo lo que ha aprendido desde entonces, haciéndola suya.</p>",
    nxLabel: "Hacia dónde viaja la casa", nxTitle: "Pop-ups, residencias y colaboraciones, empezando en Las Vegas",
    nxText: "Casa Tinkuy empieza en Las Vegas y está hecha para moverse, reuniendo a chefs, mixólogos y músicos latinoamericanos.",
    nov: "Noviembre 2026", c1: "Los Ángeles", c2: "Nueva York",
    soon1: "Próximamente", soon2: "Próximamente", soon3: "Próximamente", soon4: "Próximamente", soon5: "Próximamente",
    psLabel: "Prensa", psTitle: "Casa Tinkuy en breve",
    psText: "Para editores y periodistas. Fotos, entrevistas y visitas de degustación disponibles a pedido.",
    f1k: "Nombre", f1v: "Casa (español) + tinkuy (quechua, encuentro): La Casa del Encuentro",
    f3k: "Sede", f4k: "Primer evento", f4v: "Martes 10 de noviembre de 2026 · Echo Taste &amp; Sound, 1301 S Main St, Suite 160, Las Vegas, NV 89104",
    f5k: "Formato", f5v: "Cena peruana de seis tiempos con cuatro cócteles, servida en turnos escalonados, y un lounge con música en vivo. Mayores de 21 años.",
    f6k: "Contacto",
    rsLabel: "Cupos limitados", rsTitle: "Sé el primero en cruzar <em>la puerta</em>",
    rsText: "Las entradas para el 10 de noviembre saldrán pronto. Síguenos en Instagram para enterarte primero.",
    rsSoon: "Sigue a @casatinkuylv para las entradas", rsGo: "Comprar entradas",
    navH: "La Casa",
    navM: "Los Creadores",
    navE: "Encuentro Nº 1",
    navW: "Colabora",
    ftPress: "Prensa",
    ftFaq: "Preguntas",
    togetherText: "El chef se encuentra con el mixólogo. Lima se encuentra con Las Vegas. Cada noche de Casa Tinkuy nace de ese encuentro.",
    heroSee: "Conoce la noche",
    rmLabel: "Pasa adelante",
    rmTitle: "Las habitaciones de la casa",
    rm1n: "I",
    rm1t: "La Casa",
    rm1p: "Qué significan casa y tinkuy, y hacia dónde viaja la casa.",
    rm2t: "Los Creadores",
    rm2p: "Angelo y Michael Palomino, de Lima a Las Vegas.",
    rm3t: "Encuentro Nº 1",
    rm3p: "La cena, la barra, la dirección y tus preguntas.",
    rm4t: "Trabaja con nosotros",
    rm4p: "Eventos privados, marcas, espacios, artistas y prensa.",
    rmGo: "Entrar",
    rmGo2: "Entrar",
    rmGo3: "Entrar",
    rmGo4: "Entrar",
    phHLabel: "La Casa",
    phHTitle: "Qué significa <em>Casa Tinkuy</em>",
    phHText: "Un nombre en dos idiomas, para una casa entre dos ciudades.",
    phMLabel: "Los creadores",
    phMTitle: "Dos hermanos nacidos en Lima, en una sola mesa",
    phMText: "Un mixólogo y un chef, dos caminos distintos por las cocinas y barras de Las Vegas, que ahora llegan a la misma mesa.",
    phELabel: "Martes 10 de noviembre de 2026",
    phETitle: "Encuentro Nº 1 · <em>Perú</em>",
    phWLabel: "Colabora",
    heroLede: "Una casa de encuentro en Las Vegas. Hospitalidad latinoamericana con raíces en el Perú.",
    ageLine: "Mayores de 21 · Con identificación",
    phWTitle: "Trabaja con nosotros",
    navMenu: "Menú",
    navEnc: "Encuentros",
    ftPriv: "Política de privacidad",
    ftAcc: "Accesibilidad",
    crHost: "<span>En</span> Echo Taste &amp; Sound, Arts District",
    crFarm: "<span>Aliado agrícola</span> <a class='addr' href='https://www.instagram.com/intuitiveforagerfarmersmarket/' target='_blank' rel='noopener'>Malibu Fig Farm</a>, California<em>Productos orgánicos, y los ajíes peruanos que nos ayudan a conseguir.</em>",
    phMnLabel: "El menú · Encuentro Nº 1",
    phMnTitle: "Seis tiempos, <em>cuatro cócteles</em>",
    mnLabel: "La cena",
    mnTitle: "Del Chef Michael Palomino",
    mnText: "Seis tiempos construidos alrededor del ají amarillo, el ají que está en el corazón de la cocina peruana.",
    mnSoon: "El menú completo se publicará más cerca de la fecha.",
    mnAllergy: "Cuéntanos sobre cualquier alergia o necesidad alimentaria al comprar tu entrada. <a href=\"november-10.html#faq\">Preguntas</a>",
    mnKey: "V vegetariano · GF sin gluten",
    prLabel2: "Los cócteles",
    prTitle2: "De Angelo Palomino",
    prText2: "El Perú sube desde la costa desértica hasta las cumbres andinas y baja hacia la Amazonía en unos pocos cientos de kilómetros. Los cuatro cócteles siguen esa ruta, inspirados en los ingredientes y las tradiciones de cada paisaje.",
    phEnLabel: "La casa en movimiento",
    phEnTitle: "Encuentros",
    enUp: "Próximos",
    enMon: "Nov",
    enT1: "Encuentro Nº 1 · Perú",
    enGo: "Conoce la noche",
    enT2: "Encuentro Nº 2",
    enW2: "Fecha y lugar por anunciar",
    enGo2: "Entérate primero",
    enPast: "Encuentros pasados",
    enEmpty: "Aquí vivirán las fotos y las historias de cada encuentro.",
    phPrLabel: "Legal",
    phPrTitle: "Política de privacidad",
    privBody: "<p class=\"updated\">Última actualización: 30 de septiembre de 2026</p>\n<h2>Quiénes somos</h2><p>Casa Tinkuy es un proyecto de cocina y coctelería peruana con base en Las Vegas, Nevada. Puedes escribirnos a <a href=\"mailto:casatinkuylv@gmail.com\">casatinkuylv@gmail.com</a>.</p>\n<h2>Qué información recopilamos</h2><p>Solo la que tú nos das. Si te unes a nuestra lista, guardamos tu correo electrónico. Si nos escribes, guardamos tu mensaje y tu correo para poder responderte.</p>\n<h2>Cómo la usamos</h2><p>Para contarte sobre los próximos eventos de Casa Tinkuy y responder tus mensajes. No vendemos, alquilamos ni compartimos tu información con nadie para su propio marketing.</p>\n<h2>Quiénes nos ayudan</h2><p>Nuestro sitio está alojado en Netlify, que recibe las inscripciones a nuestra lista en nuestro nombre. Cuando haya entradas disponibles, las compras las gestionará nuestro proveedor de venta de entradas, bajo su propia política de privacidad.</p>\n<h2>Cookies y almacenamiento del navegador</h2><p>No usamos cookies de publicidad ni de seguimiento. El sitio recuerda en tu navegador el idioma que elegiste, inglés o español. Las tipografías se cargan desde Google Fonts, que puede recibir tu dirección IP al cargar una página.</p>\n<h2>Tus opciones</h2><p>Para salir de nuestra lista, o para saber qué información tenemos sobre ti, escríbenos y nos encargamos.</p>\n<h2>Edad</h2><p>Nuestros eventos son para mayores de 21 años, y este sitio no está dirigido a menores de 21.</p>\n<h2>Cambios</h2><p>Si esta política cambia, la actualizaremos aquí y cambiaremos la fecha de arriba.</p>",
    phAcLabel: "Legal",
    phAcTitle: "Accesibilidad",
    accBody: "<p class=\"updated\">Última actualización: 30 de septiembre de 2026</p>\n<p>Queremos que todos puedan usar este sitio y disfrutar de una noche de Casa Tinkuy.</p>\n<h2>Este sitio web</h2><p>Buscamos cumplir las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1, nivel AA. El sitio se puede usar con teclado y con lector de pantalla, las imágenes tienen descripciones de texto, todas las páginas están en inglés y español, y las animaciones se reducen cuando tu dispositivo pide menos movimiento.</p>\n<h2>En nuestros eventos</h2><p>Nuestras noches se realizan en espacios aliados. Si tienes preguntas sobre el acceso, los asientos o cualquier cosa que necesites para tu visita, escríbenos antes del evento y coordinaremos con el espacio para ayudarte.</p>\n<h2>Cuéntanos</h2><p>Si algo en este sitio es difícil de usar, escríbenos a <a href=\"mailto:casatinkuylv@gmail.com\">casatinkuylv@gmail.com</a> y lo arreglaremos.</p>",
    evMore: "Todos los encuentros",
    crPisco: "<span>Aliado de pisco</span> <a class='addr' href='https://macchupisco.com/main/' target='_blank' rel='noopener'>La Diablada Pisco</a><em>Pisco orgánico del Perú.</em>",
    prPisco: "Cócteles de pisco preparados con La Diablada, un pisco orgánico del Perú.",
    prNote2: "Los nombres de los cócteles se anunciarán más cerca de la fecha.",
    farmCap: "Malibu Fig Farm, California, nuestro aliado agrícola.",
    heroLabel: "Las Vegas · Desde 2026",
    heroWhere: "Encuentro Nº 1: Perú · <a class=\"addr\" href=\"https://www.google.com/maps/search/?api=1&amp;query=Echo+Taste+%26+Sound+1301+S+Main+St+Ste+160+Las+Vegas+NV+89104\" target=\"_blank\" rel=\"noopener\">Echo Taste &amp; Sound, Arts District</a>",
    whyLabel: "La idea",
    whyText: "Cada noche de Casa Tinkuy es un encuentro: una mesa, una cultura, una noche de cocina, coctelería y música. La primera es el Perú.",
    phEText: "Las Vegas tiene algunos de los mejores restaurantes y bares del mundo. En la mayoría, el Perú no está: ni sus ingredientes, ni sus destilados, ni su gente. Casa Tinkuy le hace un lugar en la mesa, con una cocina y una barra que tratan al Perú con la misma seriedad que a cualquier cocina de esta ciudad.",
    p2t: "<p>La pasión de Michael por la cocina empezó desde muy joven, rodeado de reuniones familiares donde la comida tenía la capacidad de unir a todos. Ver la alegría que se creaba alrededor de la mesa sembró la semilla de lo que se convertiría en una carrera de más de 15 años.</p><p>Con raíces en su herencia peruana y formado en las técnicas culinarias clásicas, ha construido su carrera en restaurantes de alta cocina y hoteles de lujo a lo largo del Strip de Las Vegas. Su cocina refleja la misma convicción que lo inspiró de niño: la comida se trata de reunir a la gente y crear experiencias que se recuerdan.</p><p>Cree que la gran cocina empieza con bases sólidas, ingredientes de calidad, constancia y respeto por el oficio. Hoy es Chef en Poodle Room, el exclusivo club privado para miembros dentro del Fontainebleau Las Vegas, donde aporta su experiencia, su herencia y su pasión por la hospitalidad a todo lo que hace.</p>",
    p1t: "<p>La pasión de Angelo Palomino por la hospitalidad empezó en la cocina de su abuela Ofelia en Lima, donde pasaba las tardes después del colegio desgranando arvejas a su lado mientras ella cocinaba. Su cocina siempre estaba alimentando a alguien, y ver cómo una comida reunía a toda la familia sembró una semilla que, años después, daría forma a su manera de entender la hospitalidad.</p><p>Con raíces en su herencia peruana y formado en la disciplina de la cocina, Angelo construyó su carrera en el Strip de Las Vegas, pasando de ayudante de mesero a mixólogo. Su camino lo ha llevado por algunos de los destinos de hospitalidad más reconocidos de la ciudad, entre ellos los equipos de apertura de Javier’s en el Aria y Hakkasan en el MGM Grand, Mastro’s Ocean Club en Crystals, Bazaar Meat de José Andrés, The Cosmopolitan of Las Vegas y la apertura de Resorts World. Desde hace siete años está detrás de la barra de Vanderpump Cocktail Garden en Caesars Palace.</p><p>A través de esas experiencias, Angelo desarrolló una filosofía que todavía lo lleva de vuelta a la mesa de su abuela: un cóctel debe pensarse como un plato, construido con intención, equilibrio y sentido de lugar.</p><p>Esa filosofía hoy se une en Casa Tinkuy, donde Angelo se nutre de sus raíces peruanas, de sus años en la hospitalidad de Las Vegas y de los recuerdos que primero le enseñaron lo que significa reunir a la gente alrededor de una mesa.</p>",
    alT: "Aviso sobre alergias y restricciones alimentarias",
    alP: "Si tienes alguna alergia alimentaria grave o una restricción alimentaria, por favor <a href=\"mailto:casatinkuylv@gmail.com\">contáctanos</a> antes de reservar para conversar sobre las adaptaciones que podrían ser posibles. Nuestro menú incluye ingredientes como gluten, lácteos, aliáceas (como ajo y cebolla), mariscos, frutos secos y ají amarillo. Avísanos también si eres sensible al picante. Aunque siempre haremos lo posible por atender a nuestros invitados, algunos platos del menú pueden tener modificaciones limitadas.",
    farm2Cap: "Malibu Fig Farm, California."
  };
  var EN = { rsGo: "Get tickets", f6k: "Contact", heroGo: "Get tickets", nlOk: "You're on the list. You'll be first to know where the hummingbird lands.", nlErr: "Something went wrong. Please try again, or email casatinkuylv@gmail.com." };
  document.querySelectorAll("[data-i18n]").forEach(function (el) { EN[el.dataset.i18n] = el.innerHTML; });
  document.querySelectorAll("[data-i18n-ph]").forEach(function (el) { EN[el.dataset.i18nPh] = el.placeholder; });

  var current = "en";
  function setLang(lang) {
    current = lang;
    var dict = lang === "es" ? ES : EN;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.dataset.i18n; if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var k = el.dataset.i18nPh; if (dict[k] != null) el.placeholder = dict[k];
    });
    document.querySelectorAll(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
    applyLinks();
    try { localStorage.setItem("ct-lang", lang); } catch (e) {}
  }
  function applyLinks() {
    var btn = document.getElementById("ticket-btn");
    if (TICKET_URL) {
      if (btn) {
        btn.href = TICKET_URL; btn.target = "_blank"; btn.rel = "noopener";
        btn.classList.remove("soon"); btn.removeAttribute("aria-disabled");
        btn.innerHTML = (current === "es" ? ES : EN).rsGo;
      }
      var hb = document.getElementById("hero-btn");
      if (hb) {
        hb.href = TICKET_URL; hb.target = "_blank"; hb.rel = "noopener"; hb.classList.remove("soon");
        hb.innerHTML = (current === "es" ? ES : EN).heroGo;
      }
    }
    if (PRESS_EMAIL && document.getElementById("press-contact")) {
      document.getElementById("press-contact").hidden = false;
      var pe = document.getElementById("press-email"); pe.innerHTML = ""; var a = document.createElement("a"); a.href = "mailto:" + PRESS_EMAIL; a.textContent = PRESS_EMAIL; pe.appendChild(a);
    }
  }
  document.querySelectorAll(".lang button").forEach(function (b) { b.addEventListener("click", function () { setLang(b.dataset.lang); }); });
  var saved = null;
  try { saved = localStorage.getItem("ct-lang"); } catch (e) {}
  if (!saved && (navigator.language || "").toLowerCase().indexOf("es") === 0) saved = "es";
  setLang(saved === "es" ? "es" : "en");
  // Always open a new page at the top (unless the link points to a section)
  try { if ("scrollRestoration" in history) history.scrollRestoration = "manual"; } catch (e) {}
  function toTop() { if (!location.hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" }); }
  toTop();
  window.addEventListener("pageshow", toTop);
  // Mobile menu
  (function () {
    var h = document.querySelector("header.site"), b = document.querySelector(".menu-btn");
    if (!h || !b) return;
    b.addEventListener("click", function () { var o = h.classList.toggle("open"); b.setAttribute("aria-expanded", String(o)); });
    document.querySelectorAll("nav.primary a").forEach(function (a) { a.addEventListener("click", function () { h.classList.remove("open"); b.setAttribute("aria-expanded", "false"); }); });
  })();
  // Newsletter: submits to Netlify Forms once the site is live on Netlify
  (function () {
    var f = document.getElementById("nl-form"), ok = document.getElementById("nl-ok");
    if (!f) return;
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = current === "es" ? ES : EN;
      var btn = f.querySelector("button"); btn.disabled = true;
      fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(new FormData(f)).toString() })
        .then(function (r) { if (!r.ok) throw new Error(r.status); ok.textContent = d.nlOk; f.reset(); })
        .catch(function () { ok.textContent = d.nlErr; })
        .finally(function () { btn.disabled = false; });
    });
  })();
