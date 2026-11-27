export interface BatumiFactPl {
  kicker: string;
  headline: string;
  detail: string;
}

export interface BatumiNewsItemPl {
  dateRange: string;
  title: string;
  summary: string;
  keyDetails: string[];
  venue: string;
  admission: string;
  localTip: string;
  whatsappTopic: string;
  imageAlt?: string;
}

export interface BatumiCalendarPl {
  months: string;
  title: string;
  highlights: string[];
  pairWithTourLabel: string;
}

export interface BatumiFaqPl {
  question: string;
  answer: string;
}

export const PL_BATUMI_FACTS: Record<string, BatumiFactPl> = {
  'fact-insurance': {
    kicker: 'Przepis graniczny · Od 1 stycznia 2026',
    headline: 'Obowiązkowe ubezpieczenie 30 000 GEL',
    detail: 'Wymagane od wszystkich zagranicznych gości (również w ruchu bezwizowym i dzieci) w języku angielskim lub gruzińskim.',
  },
  'fact-dec20': {
    kicker: 'Zima w Batumi i górach · Od 20 grudnia',
    headline: 'Wioska Noworoczna i otwarcie stoków w Goderdzi',
    detail: 'Rozświetlenie choinki na Placu Europy (20 grudnia) oraz uruchomienie ośrodka narciarskiego Goderdzi (ok. 3 godz. od morza).',
  },
  'fact-airport': {
    kicker: 'Infrastruktura · Lotnisko Batumi',
    headline: 'Lotnisko Batumi rozbudowane do 1,7 mln pasażerów',
    detail: 'Nowy terminal, ok. 41 połączeń lotniczych oraz trwające prace nad obwodnicą Batumi–Sarpi.',
  },
  'fact-concierge': {
    kicker: 'Wsparcie na miejscu · Minimalism Tours Georgia',
    headline: 'Aktualne godziny, bilety i transfery 4x4',
    detail: 'Bezpośrednia pomoc z Batumi w sprawie kursowania kolejki Argo, wydarzeń w centrum i dojazdów w góry.',
  },
};

export const PL_BATUMI_NEWS_ITEMS: Record<string, BatumiNewsItemPl> = {
  'new-years-village-europe-square': {
    dateRange: '20 grudnia 2026 – 7 stycznia 2027',
    title: 'Wioska Noworoczna w Batumi na Placu Europy i Gala Sylwestrowa',
    summary:
      'Główne obchody świąteczne i noworoczne na świeżym powietrzu w sercu Starego Batumi: rozświetlenie choinki, jarmark rzemieślniczy, strefa dla dzieci i koncerty sylwestrowe.',
    keyDetails: [
      '20 grudnia: oficjalne rozświetlenie choinki miejskiej i otwarcie Wioski Noworocznej na Placu Europy',
      'Codzienne dzienne animacje dla dzieci, domki z lokalnym rękodziełem, grzanym winem i słodyczami',
      '31 grudnia: duży koncert sylwestrowy pod gołym niebem z udziałem gruzińskich artystów i pokazem fajerwerków',
      '7 stycznia: prawosławne Boże Narodzenie i finałowy program świąteczny',
    ],
    venue: 'Plac Europy (Europe Square), Stare Batumi',
    admission: 'Wstęp wolny (bezpłatny na wszystkie wydarzenia na Placu Europy)',
    localTip: 'Przyjdź na Plac Europy ok. 19:00 przed głównymi koncertami lub połącz wieczór ze spacerem po Starym Batumi.',
    whatsappTopic: 'Program Wioski Noworocznej na Placu Europy',
    imageAlt: 'Świątecznie udekorowany Plac Europy w Batumi podczas Wioski Noworocznej',
  },
  'goderdzi-winter-season-2026-2027': {
    dateRange: 'Koniec grudnia 2026 – Marzec 2027',
    title: 'Ośrodek Narciarski Goderdzi: sezon 2026–2027 i rozbudowa całoroczna',
    summary:
      'Najbardziej śnieżny kurort w Adżarii (Przełęcz Goderdzi, 2 027 m n.p.m.) otwiera nowy sezon narciarski i freeride’owy zaledwie 3–4 godziny jazdy od wybrzeża Batumi.',
    keyDetails: [
      'Głęboki naturalny śnieg i długie, szerokie trasy powyżej górnej granicy lasu',
      'Zimą dojazd możliwy WYŁĄCZNIE od strony Batumi / Khulo (droga wschodnia przez Achalciche jest zamknięta)',
      'Wymagane opony zimowe, łańcuchy śniegowe i najlepiej napęd 4x4 z prześwitem',
      'Karnety narciarskie sprawdzisz i kupisz online na oficjalnym portalu mta.ski',
    ],
    venue: 'Ośrodek Narciarski Goderdzi, Górna Adżaria',
    admission: 'Karnety narciarskie przez mta.ski · Transfer 4x4 z Batumi na zapytanie',
    localTip: 'Nie ryzykuj zimą zwykłym autem osobowym z wypożyczalni — oferujemy sprawdzone transfery 4x4 z Batumi prosto pod wyciąg.',
    whatsappTopic: 'Transfer 4x4 do Goderdzi i warunki śniegowe',
    imageAlt: 'Ośrodek narciarski Goderdzi w Górnej Adżarii zimą',
  },
  'mandatory-travel-insurance-2026': {
    dateRange: 'Obowiązuje od 1 stycznia 2026',
    title: 'Obowiązkowe ubezpieczenie zdrowotne i NNW na 30 000 GEL dla wszystkich turystów',
    summary:
      'Zgodnie z gruzińską Ustawą o Turystyce każdy zagraniczny gość (w tym turyści z Polski w ruchu bezwizowym i dzieci) musi posiadać ważną polisę przy przekraczaniu granicy.',
    keyDetails: [
      'Minimalna suma ubezpieczenia: 30 000 GEL (ok. 11 000 EUR / 12 000 USD) na leczenie i następstwa nieszczęśliwych wypadków',
      'Polisa musi być okazana w języku angielskim lub gruzińskim (wydruk lub plik PDF w telefonie)',
      'Kontrole odbywają się na lotniskach (Batumi, Kutaisi, Tbilisi) oraz na przejściu granicznym w Sarpi',
      'Wyłączenia: pobyt tranzytowy, wizy dyplomatyczne oraz posiadacze kart stałego pobytu w Gruzji',
    ],
    venue: 'Wszystkie przejścia graniczne i lotniska w Gruzji (w tym BUS i Sarpi)',
    admission: 'Wymóg prawny na granicy (koszt zależy od wybranego ubezpieczyciela)',
    localTip: 'Przed wylotem pobierz PDF z certyfikatem polisy po angielsku do pamięci telefonu — na lotnisku w Batumi nie zawsze jest szybkie Wi-Fi przed kontrolą paszportową.',
    whatsappTopic: 'Obowiązkowe ubezpieczenie 30 000 GEL w Gruzji',
  },
  'batumi-coastal-mega-projects-2026-2027': {
    dateRange: '2026 – 2027 (Prace etapowe)',
    title: 'Modernizacja nabrzeża Batumi, Wyspa Ambassadori i Marina Gonio',
    summary:
      'Największe inwestycje miejskie i nadmorskie w Batumi: przedłużenie ścieżek spacerowych Nowego Bulwaru, budowa sztucznej wyspy Ambassadori oraz strefy jachtowej w Gonio.',
    keyDetails: [
      'Przebudowa wybrzeża w kierunku Gonio i nowe ciągi pieszo-rowerowe wzdłuż morza',
      'Projekt sztucznej wyspy Ambassadori po północno-wschodniej stronie linii brzegowej Batumi',
      'Rozbudowa infrastruktury rekreacyjnej, parków nadmorskich i punktów widokowych',
      'Brak utrudnień dla wycieczek w Starym Batumi, Ogrodzie Botanicznym i górach Adżarii',
    ],
    venue: 'Nabrzeże Batumi, Nowy Bulwar i Gonio',
    admission: 'Przestrzeń publiczna otwarta (bulwar bezpłatny)',
    localTip: 'Najpiękniejsza i najbardziej spokojna część wybrzeża znajduje się między Starym Bulwarem a Zielonym Przylądkiem (Ogród Botaniczny).',
    whatsappTopic: 'Nowe projekty i spacery po nabrzeżu w Batumi',
  },
  'batumi-winter-circus-theatre-concerts': {
    dateRange: 'Jesień 2026 – Wiosna 2027',
    title: 'Cyrk w Batumi, Teatr Dramatyczny, Opera i koncerty halowe',
    summary:
      'Gdy nad Morzem Czarnym pada zimowy deszcz, życie kulturalne przenosi się do zabytkowego Teatru Dramatycznego im. Ilji Czawczawadze, Centrum Muzycznego, STAR Circus i klubów.',
    keyDetails: [
      'Teatr Dramatyczny w Batumi i Państwowe Centrum Muzyczne: spektakle, balet, koncerty symfoniczne',
      'STAR Circus Batumi: programy rodzinne w sezonie jesienno-zimowym i świątecznym',
      'Teatro Batumi i sale koncertowe: występy gościnne, stand-up i kolacje sylwestrowe',
      'Bilety na większość wydarzeń halowych dostępne są oficjalnie online na TKT.ge oraz Biletebi.ge',
    ],
    venue: 'Centrum Batumi (Teatr, Centrum Muzyczne, Cyrk)',
    admission: 'Bilety od ok. 20–120 GEL na TKT.ge / Biletebi.ge',
    localTip: 'W deszczowy dzień połącz poranny spacer po Starym Batumi z wieczornym koncertem w Centrum Muzycznym nad morzem.',
    whatsappTopic: 'Koncerty, teatr i bilety w Batumi',
  },
  'batumi-airport-and-sarpi-bypass': {
    dateRange: '2026 – 2027',
    title: 'Rozbudowa lotniska w Batumi (~41 tras) i obwodnica Batumi–Sarpi',
    summary:
      'Międzynarodowe lotnisko w Batumi (BUS) zwiększyło przepustowość do 1,7 mln pasażerów rocznie, a nowy układ obwodnicy stopniowo odciąża ruch tranzytowy w stronę granicy z Turcją.',
    keyDetails: [
      'Zwiększona przepustowość terminala przylotów i odlotów oraz sprawniejsza odprawa bagażowa',
      'Ponad 40 kierunków sezonowych i całorocznych łączących Batumi z Europą i Bliskim Wschodem',
      'Nowe odcinki dróg ekspresowych przyspieszające przejazd z wybrzeża w doliny Adżarii',
    ],
    venue: 'Międzynarodowe Lotnisko Batumi (BUS) i trasa Batumi–Sarpi',
    admission: 'Informacja komunikacyjna dla przylatujących',
    localTip: 'Z lotniska Batumi do centrum miasta dojedziesz w 15–20 minut; chętnie doradzimy też w kwestii dojazdu z Kutaisi (ok. 2 godz.).',
    whatsappTopic: 'Przylot do Batumi / Kutaisi i logistyka przejazdu',
  },
  'attractions-hours-tickets-2026-2027': {
    dateRange: 'Cały rok 2026–2027',
    title: 'Ogród Botaniczny w Batumi, Kolejka Argo i Park Narodowy Mtirala — godziny i ceny',
    summary:
      'Aktualny informator praktyczny o godzinach otwarcia i cenach biletów w trzech najpopularniejszych atrakcjach przyrodniczych w okolicach Batumi.',
    keyDetails: [
      'Ogród Botaniczny w Batumi: czynny codziennie (ok. 09:00–19:00 latem, krócej zimą); bilet dla gości zagranicznych: 25 GEL (na naszej wycieczce łączonej bilet jest w cenie!)',
      'Kolejka linowa Argo: kursuje codziennie z portu na wzgórze Anuria (ok. 30 GEL w dwie strony; przy silnym wietrze może być czasowo wstrzymana)',
      'Park Narodowy Mtirala: wstęp na główne szlaki piesze bezpłatny; płatna jedynie ręczna kolejka nad rzeką lub opcjonalne atrakcje',
    ],
    venue: 'Zielony Przylądek, Wzgórze Anuria i Park Mtirala',
    admission: 'Ogród: 25 GEL · Kolejka Argo: ~30 GEL · Mtirala: wstęp wolny',
    localTip: 'Przed wyjściem na kolejkę Argo w wietrzny dzień napisz do nas na WhatsApp — sprawdzimy na bieżąco, czy gondole kursują.',
    whatsappTopic: 'Godziny otwarcia Ogrodu Botanicznego i kolejki Argo',
    imageAlt: 'Panorama Batumi i wybrzeża Morza Czarnego z Ogrodu Botanicznego',
  },
  'batumoba-and-summer-festival-2027': {
    dateRange: 'Czerwiec – Sierpień 2027 (Lato)',
    title: 'Dzień Miasta Batumoba i Letni Festiwal w Batumi 2027',
    summary:
      'Dwa największe plenerowe święta miasta na Nadmorskim Bulwarze i w Starym Batumi z muzyką na żywo, strefami gastronomicznymi Adżarii i targami rzemiosła.',
    keyDetails: [
      'Letni Festiwal w Batumi (zwykle połowa czerwca): oficjalne otwarcie sezonu letniego na bulwarze, koncerty i pokazy ognia',
      'Batumoba (Święto Miasta): barwne parady, koncerty na Placu Europy i stoiska z lokalną kulturą',
      'Dokładne daty dzienne ogłasza Urząd Miasta Batumi i GoBatumi przed rozpoczęciem lata',
    ],
    venue: 'Bulwar Nadmorski i Plac Europy, Batumi',
    admission: 'Wydarzenia plenerowe bezpłatne',
    localTip: 'W upalne letnie popołudnia połącz poranny chłód lasów Mtirali z wieczornym koncertem festiwalowym nad morzem.',
    whatsappTopic: 'Daty Letniego Festiwalu i Batumoby 2027',
  },
  'black-sea-jazz-and-classical-summer-2027': {
    dateRange: 'Lipiec – Sierpień 2027',
    title: 'Black Sea Jazz Festival, Nocne Serenady i Góralskie Igrzyska Shuamtoba',
    summary:
      'Kultowy festiwal jazzowy nad Morzem Czarnym, koncerty muzyki klasycznej „Nocne Serenady” oraz tradycyjne górskie święto pasterskie Shuamtoba na wysokich halach Adżarii.',
    keyDetails: [
      'Black Sea Jazz Festival (lipiec): międzynarodowe gwiazdy jazzu, funku i soulu na kortach tenisowych w Batumi',
      'Festiwal „Night Serenades” (sierpień): koncerty muzyki klasycznej w Batumi i Tbilisi',
      'Shuamtoba (początek sierpnia): autentyczne święto górskie w Beshumi / Górnej Adżarii z tańcami i zawodami konnymi',
    ],
    venue: 'Batumi Tennis Club / Sale koncertowe / Beshumi (Górna Adżaria)',
    admission: 'Festiwale biletowane na TKT.ge · Shuamtoba wstęp wolny',
    localTip: 'Jeśli planujesz wyjazd na Shuamtoba w sierpniu, zarezerwuj auto 4x4 z wyprzedzeniem — to jedno z najbardziej autentycznych świąt w regionie.',
    whatsappTopic: 'Black Sea Jazz Festival i święto Shuamtoba',
  },
  'autumn-festivals-birdwatching-biaff-gandagana-mandarinoba': {
    dateRange: 'Wrzesień – Listopad 2027',
    title: 'Festiwal Ptaków Drapieżnych, Kino BIAFF, Gandagana i Mandarinoba',
    summary:
      'Jesień w Adżarii to jeden z najlepszych okresów dla koneserów natury i kuchni: miliony ptaków nad Batumi, kino autorskie oraz barwne dożynki adżarskie i zbiory mandarynek.',
    keyDetails: [
      'Wrzesień: Międzynarodowy Festiwal Obserwacji Ptaków w Sakhalvasho (jeden z największych szlaków migracji ptaków drapieżnych na świecie)',
      'Wrzesień–Październik: Międzynarodowy Festiwal Filmowy BIAFF oraz festiwal animacji Tofuzi',
      'Październik: Festiwal Wsi Adżarskiej „Gandagana” na Placu Europy — degustacje serów, miodów i wina',
      'Koniec listopada: Mandarinoba w Tsikhisdziri — zbiory świeżych mandarynek prosto z sadów',
    ],
    venue: 'Sakhalvasho, Plac Europy, Tsikhisdziri i kina w Batumi',
    admission: 'Gandagana i obserwacja ptaków bezpłatne · BIAFF wybrane pokazy biletowane',
    localTip: 'W październiku podczas Gandagany możesz w jeden weekend spróbować smaków wszystkich górskich wiosek Adżarii bez wyjeżdżania z centrum.',
    whatsappTopic: 'Jesienne festiwale: Ptaki, Gandagana i Mandarinoba',
  },
};

export const PL_BATUMI_CALENDAR: Record<string, BatumiCalendarPl> = {
  'cal-winter': {
    months: 'Gru – Lut · Zima',
    title: 'Święta, kultura miejska i narty w Goderdzi',
    highlights: [
      'Wioska Noworoczna na Placu Europy i Gala Sylwestrowa (20 gru – 7 sty)',
      'Ośrodek Narciarski Goderdzi otwarty w Górnej Adżarii (~3–4 godz. z Batumi)',
      'Zimowe spektakle w Teatrze Dramatycznym, Centrum Muzycznym i Cyrku',
      'Spokojne spacery po Starym Batumi i zielonym Ogrodzie Botanicznym',
    ],
    pairWithTourLabel: 'Spacer Architektoniczny po Starym Batumi',
  },
  'cal-spring': {
    months: 'Mar – Maj · Wiosna',
    title: 'Budząca się przyroda, wodospady i kwitnące ogrody',
    highlights: [
      'Największe wiosenne przepływy wodospadu Tsablnari w Parku Mtirala',
      'Kwitnące magnolie, kamelie i azalie w Ogrodzie Botanicznym w Batumi',
      'Wiosenne przeloty ptaków nad Mokradłami Kolchidy',
      'Idealne temperatury 16–23°C na całodniowe trekkingi bez letnich upałów',
    ],
    pairWithTourLabel: 'Mtirala + Ogród Botaniczny (Bilet w cenie)',
  },
  'cal-summer': {
    months: 'Cze – Sie · Lato',
    title: 'Festiwale muzyczne, chłodne lasy i wysokie góry',
    highlights: [
      'Letni Festiwal w Batumi (czerwiec), Black Sea Jazz (lipiec) i Nocne Serenady (sierpień)',
      'Góralskie święto Shuamtoba na alpejskich łąkach w Beshumi (sierpień)',
      'Orzeźwiająca ucieczka nad wodospady Mtirali i 2-dniowe noclegi w schronisku',
      'Okno pogodowe na wyprawy wysokogórskie na Kazbek (5 054 m) i do Swanetii',
    ],
    pairWithTourLabel: 'Mtirala: Jezioro i Wodospad (9 km)',
  },
  'cal-autumn': {
    months: 'Wrz – Lis · Jesień',
    title: 'Migracje ptaków, dożynki Gandagana i złote lasy',
    highlights: [
      'Międzynarodowy Festiwal Obserwacji Ptaków Drapieżnych w Sakhalvasho (wrzesień)',
      'Festiwal Filmowy BIAFF i Tofuzi (wrzesień–październik)',
      'Festiwal Wsi Adżarskiej „Gandagana” na Placu Europy (październik)',
      'Mandarinoba w Tsikhisdziri — zbiory cytrusów i złote buki w górach (listopad)',
    ],
    pairWithTourLabel: 'Trekking w Wąwozie Machakhela',
  },
};

export const PL_BATUMI_FAQS: BatumiFaqPl[] = [
  {
    question: 'Czy na Wioskę Noworoczną na Placu Europy w Batumi potrzebne są bilety?',
    answer:
      'Nie. Wioska Noworoczna na Placu Europy (20 grudnia – 7 stycznia), w tym rozświetlenie choinki, dzienne animacje dla dzieci, wieczorne koncerty, Gala Sylwestrowa 31 grudnia oraz finał 7 stycznia są całkowicie bezpłatne i otwarte dla wszystkich. Bilety obowiązują jedynie na zamknięte imprezy klubowe (np. Teatro), kolacje hotelowe, spektakle w teatrze i cyrk.',
  },
  {
    question: 'Gdzie kupić oficjalne bilety na koncerty, cyrk i teatr w Batumi?',
    answer:
      'Większość biletów na koncerty, stand-up, spektakle teatralne, imprezy sylwestrowe oraz STAR Circus w Batumi sprzedawana jest oficjalnie online w serwisach TKT.ge i Biletebi.ge. Bilety do Ogrodu Botanicznego (25 GEL dla gości zagranicznych / 10 GEL dla mieszkańców) kupuje się w kasie przy wejściu, a karnety narciarskie do Goderdzi przez mta.ski.',
  },
  {
    question: 'Czy obowiązkowe ubezpieczenie turystyczne jest naprawdę sprawdzane na granicy w 2026 roku?',
    answer:
      'Tak. Od 1 stycznia 2026 r. gruzińska Ustawa o Turystyce nakłada na wszystkich zagranicznych turystów (także w ruchu bezwizowym i dzieci) obowiązek posiadania polisy zdrowotnej i NNW na minimum 30 000 GEL w języku angielskim lub gruzińskim (wydruk lub PDF). Straż graniczna ma prawo odmówić wjazdu w przypadku braku ważnego dokumentu.',
  },
  {
    question: 'Czy zimą można dojechać do ośrodka narciarskiego Goderdzi od strony Achalciche?',
    answer:
      'Nie. Zimą wschodnia droga górska przez Przełęcz Goderdzi od strony Achalciche jest całkowicie zamknięta z powodu głębokiego śniegu. Dojazd do ośrodka możliwy jest wyłącznie od strony Batumi i Khulo (ok. 3–4 godz.), autem z oponami zimowymi, łańcuchami i najlepiej napędem 4x4.',
  },
  {
    question: 'Czy dokładne daty festiwali na 2027 rok (Batumoba, Letni Festiwal, Black Sea Jazz) są już znane?',
    answer:
      'Stałe są coroczne ramy czasowe: połowa czerwca na Letni Festiwal, lipiec na Black Sea Jazz, sierpień na Nocne Serenady i Shuamtoba, wrzesień na Festiwal Ptaków i BIAFF, październik na Gandaganę oraz koniec listopada na Mandarinobę. Dokładne daty dzienne i program publikują Urząd Miasta Batumi i GoBatumi przed każdym sezonem — na bieżąco aktualizujemy tę stronę.',
  },
  {
    question: 'Jak najszybciej sprawdzić pogodę na szlaku lub rozkład atrakcji na konkretny dzień?',
    answer:
      'Napisz bezpośrednio do naszego zespołu w Batumi na WhatsApp (+995 592 04 30 80) lub Telegram (@MinimalismToursGeorgia). Sprawdzimy dla Ciebie pogodę w Mtirali, pracę kolejki Argo oraz aktualne wydarzenia w mieście.',
  },
];
