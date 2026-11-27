export type BatumiNewsCategory = 'events' | 'projects' | 'travel-rules' | 'seasonal';

export type BatumiNewsStatus = 'happening-soon' | 'active-2026' | 'planned-2027' | 'annual-highlight';

export interface LocalizedText {
  en: string;
  ka: string;
  pl?: string;
  uk?: string;
  he?: string;
}

export interface BatumiNewsItem {
  slug: string;
  category: BatumiNewsCategory;
  status: BatumiNewsStatus;
  featuredOnHome: boolean;
  dateRange: LocalizedText;
  isoStartDate?: string;
  isoEndDate?: string;
  title: LocalizedText;
  summary: LocalizedText;
  keyDetails: {
    en: string[];
    ka: string[];
    pl?: string[];
    uk?: string[];
    he?: string[];
  };
  venue: LocalizedText;
  mapsUrl?: string;
  admission: LocalizedText;
  localTip: LocalizedText;
  relatedTourSlug?: string;
  whatsappTopic: LocalizedText;
  image?: string;
  imageAlt?: LocalizedText;
}

export interface BatumiEssentialFact {
  id: string;
  kicker: LocalizedText;
  headline: LocalizedText;
  detail: LocalizedText;
  targetSlug: string;
  tone: 'coral' | 'sea' | 'forest';
}

export interface BatumiSeasonCalendarBlock {
  id: string;
  months: LocalizedText;
  title: LocalizedText;
  highlights: {
    en: string[];
    ka: string[];
    pl?: string[];
    uk?: string[];
    he?: string[];
  };
  pairWithTourSlug: string;
  pairWithTourLabel: LocalizedText;
}

export interface BatumiNewsFaq {
  question: LocalizedText;
  answer: LocalizedText;
}

export const BATUMI_NEWS_META = {
  lastVerifiedIso: '2026-11-24',
  lastVerifiedEn: 'November 24, 2026',
  lastVerifiedKa: '24 ნოემბერი, 2026',
  lastVerifiedPl: '24 listopada 2026',
  lastVerifiedUk: '24 листопада 2026',
  lastVerifiedHe: '24 בנובמבר 2026',
} as const;

export const BATUMI_CATEGORY_LABELS: Record<
  BatumiNewsCategory,
  { en: string; ka: string; pl: string; uk: string; he: string; badgeClass: string }
> = {
  events: {
    en: 'Events & Festivals',
    ka: 'ღონისძიებები და ფესტივალები',
    pl: 'Wydarzenia i festiwale',
    uk: 'Події та фестивалі',
    he: 'אירועים ופסטיבלים',
    badgeClass: 'badge-coral',
  },
  projects: {
    en: 'City & Coast Projects',
    ka: 'ქალაქის და სანაპიროს პროექტები',
    pl: 'Projekty miejskie i wybrzeże',
    uk: 'Міські та прибережні проєкти',
    he: 'פרויקטים בעיר ובחוף',
    badgeClass: 'badge-sea',
  },
  'travel-rules': {
    en: 'Travel Rules & Transport',
    ka: 'მგზავრობის წესები და ტრანსპორტი',
    pl: 'Zasady wjazdu i transport',
    uk: 'Правила в’їзду та транспорт',
    he: 'חוקי כניסה ותחבורה',
    badgeClass: 'badge-forest',
  },
  seasonal: {
    en: 'Attractions & Season',
    ka: 'სეზონი და ლოკაციები',
    pl: 'Atrakcje i sezony',
    uk: 'Локації та сезони',
    he: 'אטרקציות ועונות',
    badgeClass: 'badge-sea',
  },
};

export const BATUMI_STATUS_LABELS: Record<BatumiNewsStatus, LocalizedText> = {
  'happening-soon': {
    en: 'Happening Soon',
    ka: 'უახლოესი',
    pl: 'Wkrótce',
    uk: 'Незабаром',
    he: 'בקרוב',
  },
  'active-2026': {
    en: 'Active in 2026',
    ka: 'მოქმედი 2026',
    pl: 'Aktywne 2026',
    uk: 'Діє у 2026',
    he: 'פעיל ב-2026',
  },
  'planned-2027': {
    en: 'Planned 2027',
    ka: 'დაგეგმილი 2027',
    pl: 'Planowane 2027',
    uk: 'Заплановано 2027',
    he: 'מתוכנן ל-2027',
  },
  'annual-highlight': {
    en: 'Annual Highlight',
    ka: 'ყოველწლიური',
    pl: 'Coroczne',
    uk: 'Щорічна подія',
    he: 'אירוע שנתי',
  },
};

export const BATUMI_ESSENTIAL_FACTS: BatumiEssentialFact[] = [
  {
    id: 'fact-insurance',
    kicker: {
      en: 'Border Rule · Active Since Jan 1, 2026',
      ka: 'საზღვრის წესი · ძალაშია 1 იანვრიდან',
    },
    headline: {
      en: '30,000 GEL Travel Insurance Mandatory',
      ka: '30,000 ₾ სამოგზაურო დაზღვევა სავალდებულოა',
    },
    detail: {
      en: 'Required for all foreign visitors (including visa-free arrivals and minors) in English or Georgian.',
      ka: 'სავალდებულოა ყველა უცხოელი ვიზიტორისთვის (უვიზო რეჟიმის და ბავშვების ჩათვლით) EN ან KA ენაზე.',
    },
    targetSlug: 'mandatory-travel-insurance-2026',
    tone: 'forest',
  },
  {
    id: 'fact-dec20',
    kicker: {
      en: 'Next Major Openings · Dec 20, 2026',
      ka: 'უახლოესი გახსნები · 20 დეკემბერი, 2026',
    },
    headline: {
      en: 'New Year’s Village & Goderdzi Ski Opening',
      ka: 'საახალწლო სოფელი და გოდერძის სეზონის გახსნა',
    },
    detail: {
      en: 'Europe Square festive village opens Dec 20–Jan 7 alongside Adjara’s Goderdzi alpine season.',
      ka: 'ევროპის მოედანზე საახალწლო სოფელი (20 დეკ.–7 იან.) და გოდერძის სათხილამურო სეზონი ერთ დღეს იწყება.',
    },
    targetSlug: 'new-years-village-europe-square',
    tone: 'coral',
  },
  {
    id: 'fact-airport',
    kicker: {
      en: 'Airport & Mobility · 2026–2027',
      ka: 'აეროპორტი და გზები · 2026–2027',
    },
    headline: {
      en: 'Batumi Airport Expanded to 1.7M Capacity',
      ka: 'ბათუმის აეროპორტი 1.7 მლნ მგზავრზე გაფართოვდა',
    },
    detail: {
      en: '18 check-in counters across ~41 destinations, plus active work on the 11.3 km Batumi–Sarpi bypass.',
      ka: '18 სარეგისტრაციო დახლი ~41 მიმართულებით და ბათუმი–სარფის 11.3 კმ შემოვლითი გზის მშენებლობა.',
    },
    targetSlug: 'batumi-airport-and-sarpi-bypass',
    tone: 'sea',
  },
  {
    id: 'fact-concierge',
    kicker: {
      en: 'One-Stop Local Desk · 24/7',
      ka: 'ადგილობრივი გიდების კონსულტაცია · 24/7',
    },
    headline: {
      en: 'Live Schedules, Tickets & 4x4 Transfers',
      ka: 'დღის განრიგი, ბილეთები და 4x4 ტრანსფერი',
    },
    detail: {
      en: 'Ask our Batumi guiding team to match city festivals, cable car hours, or Goderdzi snow updates to your dates.',
      ka: 'მოგვწერეთ WhatsApp-ში და ზუსტ თარიღებზე შეგირჩევთ ქალაქის ივენთებს, საბაგიროს გრაფიკს ან ტურს.',
    },
    targetSlug: 'attractions-hours-tickets-2026-2027',
    tone: 'forest',
  },
];

export const BATUMI_NEWS_ITEMS: BatumiNewsItem[] = [
  {
    slug: 'new-years-village-europe-square',
    category: 'events',
    status: 'happening-soon',
    featuredOnHome: true,
    dateRange: {
      en: 'Dec 20, 2026 – Jan 7, 2027',
      ka: '20 დეკემბერი, 2026 – 7 იანვარი, 2027',
    },
    isoStartDate: '2026-12-20',
    isoEndDate: '2027-01-07',
    title: {
      en: 'Batumi New Year’s Village at Europe Square & NYE Gala',
      ka: 'ბათუმის „საახალწლო სოფელი“ ევროპის მოედანზე და გალა-კონცერტი',
    },
    summary: {
      en: 'Europe Square transforms into Batumi’s open-air winter hub from Dec 20 through Orthodox Christmas on Jan 7—with free concerts, artisan & culinary markets, kids’ zones, and midnight fireworks.',
      ka: '20 დეკემბრიდან 7 იანვრის ჩათვლით ევროპის მოედანი საახალწლო სოფლად იქცევა: ყოველდღიური უფასო კონცერტები, გასტრონომიული და ხელნაკეთი ბაზრობა, საბავშვო პროგრამა და საახალწლო ფეიერვერკი.',
    },
    keyDetails: {
      en: [
        'Dec 20: Official opening of the New Year’s Village, children’s activities, and ceremonial lighting of Batumi’s main tree at Europe Square.',
        'Daily Dec 20 – Jan 7: Local food & warm wine stalls, handmade craft stands, Santa’s Corner, daytime kids’ animators/illusionists, and evening live bands plus DJ sets.',
        'Dec 31 – Jan 1: City Hall’s open-air New Year’s Eve Gala Concert at Europe Square with midnight Black Sea fireworks.',
        'Jan 7: Georgian Orthodox Christmas closing celebration featuring a grand Christmas concert and fire show.',
        'Ticketed indoor NYE 2027 parties: Teatro Batumi hosts a headline electronic night with Ilkay Sencan & show-ballet, alongside gala dinners at Sheraton, Hilton, and Radisson (tickets via TKT.ge).',
      ],
      ka: [
        '20 დეკემბერი: საახალწლო სოფლის ოფიციალური გახსნა, საბავშვო პროგრამა და ბათუმის მთავარი ნაძვის ხის საზეიმო ანთება ევროპის მოედანზე.',
        'ყოველდღე 20 დეკემბრიდან 7 იანვრამდე: სამეწარმეო და გასტრონომიული ფუდ-კორტები, ხელნაკეთი ნივთების გამოფენა-გაყიდვა, სანტას კუთხე, ანიმატორები და საღამოს ბენდებისა და DJ-ების სეტები.',
        '31 დეკემბერი – 1 იანვარი: ტრადიციული საახალწლო გალა-კონცერტი ევროპის მოედანზე და შუაღამის ფეიერვერკი ზღვისპირეთში.',
        '7 იანვარი: სადღესასწაულო სეზონის საზეიმო დახურვა, დიდი საშობაო კონცერტი და ცეცხლოვანი შოუ.',
        'დახურული საახალწლო ივენთები: Teatro Batumi-ში იგეგმება 2027 წლის საახალწლო გრანდ-პრემიერა Ilkay Sencan-თან და შოუ-ბალეტთან ერთად, ასევე გალა-ვახშმები წამყვან სასტუმროებში (ბილეთები TKT.ge-ზე).',
      ],
    },
    venue: {
      en: 'Europe Square, Old Batumi (29 Memed Abashidze Ave)',
      ka: 'ევროპის მოედანი, ძველი ბათუმი (მ. აბაშიძის 29)',
    },
    mapsUrl: 'https://maps.google.com/?q=Europe+Square,+Batumi,+Georgia',
    admission: {
      en: 'Free open-air access (club & hotel galas ticketed separately)',
      ka: 'ღია სივრცე უფასოა (კლუბური და სასტუმრო ივენთები ბილეთით)',
    },
    localTip: {
      en: 'Europe Square is also one of our 4 official tour pickup stops—pair a morning Batumi Old Town Architecture Walk with late-afternoon hot wine and lights in the New Year’s Village.',
      ka: 'ევროპის მოედანი ჩვენი ტურების გასვლის ერთ-ერთი ოფიციალური წერტილია — დღისით ძველი ბათუმის არქიტექტურული სეირნობის შემდეგ საღამოს პირდაპირ საახალწლო სოფელში მოხვდებით.',
    },
    relatedTourSlug: 'batumi-architecture-walking-tour',
    whatsappTopic: {
      en: 'New Year in Batumi & Old Town Walk',
      ka: 'ბათუმის საახალწლო პროგრამა და ძველი ბათუმის ტური',
    },
    image: '/images/batumi-walk.webp',
    imageAlt: {
      en: 'Historic Old Batumi streets and architecture around Europe Square',
      ka: 'ძველი ბათუმის არქიტექტურული უბნები ევროპის მოედნის მიმდებარედ',
    },
  },
  {
    slug: 'goderdzi-winter-season-2026-2027',
    category: 'seasonal',
    status: 'happening-soon',
    featuredOnHome: true,
    dateRange: {
      en: 'Opens Dec 20, 2026 · Winter 2026–2027',
      ka: 'იხსნება 20 დეკემბერს · ზამთარი 2026–2027',
    },
    isoStartDate: '2026-12-20',
    isoEndDate: '2027-04-01',
    title: {
      en: 'Goderdzi Ski Resort 2026–2027 Opening & 4-Season Expansion',
      ka: 'გოდერძის სამთო-სათხილამურო კურორტის 2026–2027 სეზონი და გაფართოება',
    },
    summary: {
      en: 'Adjara’s alpine resort near Batumi targets a Dec 20 synchronized opening with Mountain Trails Agency resorts, alongside major hotel expansion and strict winter road rules.',
      ka: 'აჭარის მთიანეთში მდებარე კურორტი გოდერძი 20 დეკემბერს იხსნება. 4-სეზონიან კურორტად განვითარებასთან ერთად მოქმედებს ზამთრის გზის მნიშვნელოვანი წესები.',
    },
    keyDetails: {
      en: [
        'Official opening target: Dec 20, 2026 (Mountain Trails Agency synchronized schedule). The Zanka gondola typically opens first, while the Chanchakhi chairlift depends on natural snow depth.',
        '2026–2027 pass update: State ski resorts introduced tiered pass pricing distinguishing international visitors from Georgian citizens/residents; verify live lift status on mta.ski before departing.',
        '4-season resort growth: Alongside 9 existing hotel complexes, up to 20 additional hotels and villa developments plus expanded slopes and public spaces are in the Adjara highlands pipeline.',
        'Critical winter road rule: Goderdzi is ~110–112 km (3–4 hours) from Batumi via Khulo. In winter, the eastern pass toward Akhaltsikhe is closed by snow—approach ONLY from the Batumi/Khulo side with 4x4, winter tires, and snow chains.',
        'Travel insurance reminder: Foreign visitors must hold valid accident/health insurance (min. 30,000 GEL), and winter-sports coverage is advised for off-piste skiing.',
      ],
      ka: [
        'სეზონის გახსნა: მთის ტრასების სააგენტოს (MTA) გრაფიკით გახსნა დაგეგმილია 20 დეკემბერს. პირველ ეტაპზე ჩაირთვება ზანკას გონდოლა, ხოლო ჭანჭახის საბაგიროს მუშაობა თოვლის საფარზეა დამოკიდებული.',
        'საბაგიროს ტარიფები და სტატუსი: 2026–2027 სეზონზე სახელმწიფო კურორტებზე ამოქმედდა დიფერენცირებული აბონემენტები (უცხოელი სტუმრები / მოქალაქეები). გასვლამდე შეამოწმეთ mta.ski.',
        'ოთხსეზონიანი განვითარება: აჭარის მაღალმთიანეთში არსებულ 9 კომპლექსთან ერთად 20-მდე ახალი სასტუმრო და ვილა პროექტი, ასევე გაფართოებული ტრასები და სარეკრეაციო სივრცეები იგეგმება.',
        'გზის აუცილებელი წესი ზამთარში: გოდერძი ბათუმიდან ~110–112 კმ-შია (3–4 სთ ხულოს გავლით). ზამთარში ახალციხის მხრიდან უღელტეხილი იკეტება — მგზავრობა შესაძლებელია მხოლოდ ბათუმი–ხულოს მხრიდან 4x4 ავტომობილით, ზამთრის საბურავებით და ჯაჭვებით.',
        'უსაფრთხოება: გაითვალისწინეთ სავალდებულო დაზღვევა (მინ. 30,000 ₾); სათხილამუროდ სასურველია ზამთრის სპორტის დაფარვაც.',
      ],
    },
    venue: {
      en: 'Goderdzi Resort, Khulo Municipality (~110 km east of Batumi)',
      ka: 'კურორტი გოდერძი, ხულოს მუნიციპალიტეტი (~110 კმ ბათუმიდან)',
    },
    mapsUrl: 'https://maps.google.com/?q=Goderdzi+Ski+Resort,+Adjara,+Georgia',
    admission: {
      en: 'MTA Ski Passes via mta.ski (2026–27 tiered tariffs)',
      ka: 'MTA სკი-პასები საიტზე mta.ski (2026–27 ტარიფებით)',
    },
    localTip: {
      en: 'Planning Green Lake or Goderdzi without risking winter mountain roads? Book a 4x4 transfer with our local mountain drivers—summer alpine trips are also open Jul–Sep.',
      ka: 'თუ ზამთრის მთის გზებზე რისკის გარეშე გსურთ ასვლა ან ზაფხულში მწვანე ტბის ნახვა, ჩვენი 4x4 ჯიპებით და ადგილობრივი მძღოლით უსაფრთხო ტრანსფერს დაგიგეგმავთ.',
    },
    relatedTourSlug: 'mtirala-2-day-shelter-hike',
    whatsappTopic: {
      en: 'Goderdzi 4x4 Transfer / Adjara Mountain Trip',
      ka: 'გოდერძის 4x4 ტრანსფერი და აჭარის მთიანეთის ტური',
    },
    image: '/images/green-lake.webp',
    imageAlt: {
      en: 'Emerald alpine Green Lake near Goderdzi Pass in highlands Adjara',
      ka: 'მწვანე ტბა გოდერძის უღელტეხილთან აჭარის მაღალმთიანეთში',
    },
  },
  {
    slug: 'mandatory-travel-insurance-2026',
    category: 'travel-rules',
    status: 'active-2026',
    featuredOnHome: true,
    dateRange: {
      en: 'In Effect Since Jan 1, 2026',
      ka: 'ძალაშია 2026 წლის 1 იანვრიდან',
    },
    isoStartDate: '2026-01-01',
    title: {
      en: 'Mandatory 30,000 GEL Health & Accident Insurance for All Tourists',
      ka: 'სავალდებულო 30,000 ₾ სამოგზაურო დაზღვევა საქართველოში შემომსვლელთათვის',
    },
    summary: {
      en: 'Under Georgia’s Law “On Tourism,” every foreign visitor entering Batumi Airport, Sarpi border, or any port of entry must hold valid health & accident coverage of at least 30,000 GEL.',
      ka: '„ტურიზმის შესახებ“ კანონით, 2026 წლის 1 იანვრიდან საქართველოში შემომსვლელ ყველა უცხოელ სტუმარს (მათ შორის უვიზო ქვეყნებიდან) უნდა ჰქონდეს მინიმუმ 30,000 ლარის დაზღვევა.',
    },
    keyDetails: {
      en: [
        'Minimum coverage: 30,000 GEL covering emergency health and accident care for the entire duration of stay from arrival date to departure date.',
        'Accepted format & language: Issued by a Georgian or foreign insurer, presented as a printed document or digital PDF on your phone in English or Georgian.',
        'Mandatory fields: Policy must state the parties, covered territory (Georgia), start/end dates, covered risks, coverage limit (≥30,000 GEL), and premium payment details.',
        'Who needs it: Leisure tourists, visa-free travelers (EU, US, UK, Israel, GCC, etc.), short-term business visitors, digital nomads, and children/minors.',
        'Border enforcement: Passport control officers at Batumi Airport and Sarpi land crossing may request proof on arrival—missing a compliant policy can result in refused entry.',
        'Exemptions: Georgian residence permit holders, registered locally employed foreign nationals (with contract), diplomatic/official passport holders, and international freight/passenger drivers.',
      ],
      ka: [
        'მინიმალური ლიმიტი: 30,000 ლარი, რომელიც ფარავს ჯანმრთელობისა და უბედური შემთხვევის გადაუდებელ ხარჯებს საქართველოში ყოფნის მთელ პერიოდზე (ჩამოსვლიდან გამგზავრებამდე).',
        'ფორმატი და ენა: მიიღება როგორც ქართული, ისე უცხოური სადაზღვევო კომპანიის პოლისი — ბეჭდური ან ელექტრონული PDF ვერსია ინგლისურ ან ქართულ ენაზე.',
        'პოლისში მითითებული უნდა იყოს: მხარეები, დაფარვის ტერიტორია (საქართველო), მოქმედების ზუსტი ვადები, სადაზღვევო რისკები, ლიმიტი (≥30,000 ₾) და პრემიის გადახდის ინფორმაცია.',
        'ვის ეხება: ყველა ტურისტს (უვიზო რეჟიმის მქონე ქვეყნების მოქალაქეების ჩათვლით), საქმიან ვიზიტორებს, ციფრულ ნომადებსა და არასრულწლოვნებს.',
        'კონტროლი საზღვარზე: ბათუმის აეროპორტსა და სარფის გამშვებ პუნქტზე მესაზღვრეს შეუძლია მოითხოვოს პოლისის წარდგენა; მისი არქონისას შესაძლოა ქვეყანაში შესვლაზე უარი ითქვას.',
        'გამონაკლისები: საქართველოს ბინადრობის ნებართვის მქონე პირები, საქართველოში ოფიციალურად დასაქმებული უცხოელები (კონტრაქტით), დიპლომატიური/სამსახურებრივი პასპორტების მფლობელები და საერთაშორისო გადაზიდვების მძღოლები.',
      ],
    },
    venue: {
      en: 'All Georgian Ports of Entry (Batumi Airport BUS & Sarpi Border)',
      ka: 'საქართველოს ყველა სასაზღვრო პუნქტი (ბათუმის აეროპორტი და სარფი)',
    },
    admission: {
      en: 'Check policy before flight or Sarpi border crossing',
      ka: 'აუცილებელია საზღვრის კვეთამდე მზად გქონდეთ',
    },
    localTip: {
      en: 'Download an English PDF copy of your insurance certificate onto your phone before boarding so you are never dependent on airport Wi-Fi at passport control.',
      ka: 'სასტუმროებს, გიდებს და პარტნიორ სააგენტოებს გირჩევთ, სტუმრებს ჩამოსვლამდე შეახსენოთ ინგლისურენოვანი PDF პოლისის ტელეფონში შენახვა.',
    },
    whatsappTopic: {
      en: 'Batumi Arrival & 2026 Travel Rules Question',
      ka: '2026 წლის საქართველოში შემოსვლის წესები და ტრანსფერი',
    },
  },
  {
    slug: 'batumi-coastal-mega-projects-2026-2027',
    category: 'projects',
    status: 'planned-2027',
    featuredOnHome: true,
    dateRange: {
      en: '2026–2028 Urban & Coastal Transformation',
      ka: '2026–2028 წლების ურბანული და სანაპირო პროექტები',
    },
    title: {
      en: 'Batumi Waterfront Overhaul, Ambassadori Island & Gonio Yachts',
      ka: 'ბათუმის სანაპირო ზოლის განახლება, ამბასადორის კუნძული და გონიოს მარინა',
    },
    summary: {
      en: 'Major off-season embankment reconstruction, the 84-hectare Ambassadori artificial island, Gonio’s yacht marina, Chakvi’s Petra Sea Resort, and 2027 urban parking projects are reshaping Adjara’s coast.',
      ka: 'ბათუმის ცენტრალური სანაპიროს 5–7 კმ-იანი რეკონსტრუქცია, 84 ჰექტარიანი ამბასადორის კუნძული, გონიოს იახტ-მარინა და 2027 წლის მუნიციპალური პარკინგები ქალაქის იერსახეს ცვლის.',
    },
    keyDetails: {
      en: [
        'Central Embankment Reconstruction (2026–2027 off-seasons): Multi-million-dollar upgrade along 5–7 km of Batumi’s coast adding modernized promenade lighting, beach zones, and recreation complexes.',
        'Ambassadori Island Batumi: 84-hectare artificial island project on the Black Sea coast (masterplanned with Arup & SHoP Architects) combining public parks, marinas, hotels, and residences.',
        'Luxury Coastline Expansion: Construction is underway on Cipriani Batumi, Gonio Yachts & Marina (Eagle Hills) plus Wyndham Grand Batumi Gonio to the south, and Petra Sea Resort with Accor’s Pullman residences in Chakvi to the north (deliveries spanning 2026–2028).',
        '2027 Municipal Mobility Plan: Draft Batumi 2027 budget targets congestion relief via underground parking hubs near City Hall, the University, and central squares, plus new street connections linking Heroes Alley and Tbel Abuseridze Street.',
      ],
      ka: [
        'ცენტრალური სანაპირო ზოლის რეკონსტრუქცია: 2026–2027 წლების არასეზონურ პერიოდებში დაგეგმილია ბათუმის 5–7 კმ-იანი ზღვისპირა ზოლის მასშტაბური განახლება — ახალი განათებით, სარეკრეაციო და სანაპირო კომპლექსებით.',
        'ამბასადორის კუნძული ბათუმი: 84 ჰექტარზე გაშლილი ხელოვნური კუნძულის პროექტი (Arup და SHoP Architects-ის ჩართულობით), რომელიც აერთიანებს მარინას, სასტუმროებსა და საზოგადოებრივ პარკებს.',
        'გონიო–კვარიათი და ჩაქვი: სამხრეთით მიმდინარეობს Cipriani Batumi-ს, Eagle Hills-ის Gonio Yachts & Marina-სა და Wyndham Grand Batumi Gonio-ს პროექტები; ჩრდილოეთით (ჩაქვი/პეტრა) კი ვითარდება Petra Sea Resort და Accor-ის Pullman რეზიდენციები (2026–2028 ფაზები).',
        'ბათუმის 2027 წლის საგზაო და პარკინგის გეგმა: მუნიციპალური პროექტები ფოკუსირებულია მიწისქვეშა პარკინგებზე (მერიასთან, უნივერსიტეტთან და მოედნებთან) და გმირთა ხეივანსა და ტბელ აბუსერიძეს შორის კავშირების გაუმჯობესებაზე.',
      ],
    },
    venue: {
      en: 'Batumi Boulevard, New Boulevard, Gonio & Chakvi Coastline',
      ka: 'ბათუმის ბულვარი, ახალი ბულვარი, გონიო და ჩაქვის სანაპირო',
    },
    admission: {
      en: 'Public Boulevard access free; construction zones fenced safely',
      ka: 'ბულვარის საფეხმავლო ზონა უფასოა; სამშენებლო ზონები გამიჯნულია',
    },
    localTip: {
      en: 'Want to understand how 19th-century oil-port mansions meet today’s skyscraper skyline and artificial island plans? Join our 3-hour Batumi Architecture Walk.',
      ka: 'გაინტერესებთ, როგორ ერწყმის ძველი ბათუმის პორტო-ფრანკოს ეპოქის შენობები თანამედროვე ცათამბჯენებსა და სანაპირო მეგაპროექტებს? შემოგვიერთდით 3-საათიან არქიტექტურულ ტურში.',
    },
    relatedTourSlug: 'batumi-architecture-walking-tour',
    whatsappTopic: {
      en: 'Batumi Architecture & Urban History Tour',
      ka: 'ბათუმის არქიტექტურული და თანამედროვე პროექტების ტური',
    },
  },
  {
    slug: 'batumi-winter-circus-theatre-concerts',
    category: 'events',
    status: 'happening-soon',
    featuredOnHome: false,
    dateRange: {
      en: 'Dec 2026 – Jan 17, 2027 & 2027 Tours',
      ka: 'დეკემბერი 2026 – 17 იანვარი 2027 და 2027 აფიშა',
    },
    isoStartDate: '2026-12-19',
    isoEndDate: '2027-01-17',
    title: {
      en: 'Batumi Circus, Theatre, Opera & Touring Stand-Up / Music Shows',
      ka: 'ბათუმის ცირკი, თეატრი, მუსიკალური ცენტრი და 2027 წლის გასტროლები',
    },
    summary: {
      en: 'Indoor winter and spring highlights include STAR Circus Georgia’s animal-free New Year show, Batumi Music Center orchestral & opera evenings, holiday theatre plays, and 2027 touring acts.',
      ka: 'ზამთარ–გაზაფხულის დახურული სცენების აფიშა: STAR Circus Georgia-ს საერთაშორისო საახალწლო შოუ, ბათუმის მუსიკალური ცენტრის კონცერტები და ოპერა, დრამატული თეატრის სპექტაკლები და 2027 წლის ტურები.',
    },
    keyDetails: {
      en: [
        'New Year at Batumi Circus (Dec 19, 2026 – Jan 17, 2027): STAR Circus Georgia presents an international animal-free circus production featuring Guinness-record acrobats from Africa and Brazil, aerialists, stunt artists, Clown May, and Santa.',
        'Batumi Music Center: Late-season symphonic & jazz evenings (such as Vitali Imereli showcases), ensemble milestones (e.g., Arsiani), and Georgian opera productions including Revaz Laghidze’s “Lela.”',
        'Batumi Drama Theatre & Puppet Theatre: Festive stage plays and children’s matinees including “The Nutcracker” and “Kato and the Christmas Star.”',
        '2027 Touring Calendar: Stand-up comedy tours (including shows hosted at Sheraton Batumi Hotel) and regional band concerts publish rolling dates on TKT.ge and Biletebi.ge.',
      ],
      ka: [
        'საახალწლო შოუ ბათუმის ცირკში (19 დეკემბერი – 17 იანვარი): STAR Circus Georgia წარმოგიდგენთ ცხოველების გარეშე გამართულ საერთაშორისო შოუს — გინესის რეკორდსმენი აკრობატები აფრიკიდან და ბრაზილიიდან, საჰაერო გიმნასტები, კლოუნი მეი და სანტა.',
        'ბათუმის მუსიკალური ცენტრი: სიმფონიური ორკესტრისა და ჯაზის საღამოები (მათ შორის ვიტალი იმერელის პროგრამა), ანსამბლ „არსიანის“ საიუბილეო კონცერტები და რევაზ ლაღიძის ოპერა „ლელა“.',
        'ბათუმის დრამატული და თოჯინების თეატრები: საახალწლო რეპერტუარი, მათ შორის საბავშვო სპექტაკლები („მაკნატუნა“, „კატო და საშობაო ვარსკვლავი“) და სეზონური პრემიერები.',
        '2027 წლის გასტროლები: სტენდ-აპ კომიკოსების (მათ შორის Sheraton Batumi Hotel-ის სცენაზე) და მოწვეული მუსიკალური ბენდების კონცერტების განახლებადი აფიშა ქვეყნდება TKT.ge-სა და Biletebi.ge-ზე.',
      ],
    },
    venue: {
      en: 'Batumi Circus Arena, Music Center, Ilia Chavchavadze Drama Theatre & Sheraton',
      ka: 'ბათუმის ცირკი, მუსიკალური ცენტრი, ი. ჭავჭავაძის დრამატული თეატრი და შერატონი',
    },
    admission: {
      en: 'Paid tickets via TKT.ge & Biletebi.ge (varies by show & seating)',
      ka: 'ბილეთები იყიდება TKT.ge-სა და Biletebi.ge-ზე',
    },
    localTip: {
      en: 'Popular holiday circus matinees and Sheraton/Teatro shows sell out days in advance—ask our WhatsApp desk if you need help locating the official ticket page or matching showtimes with a half-day tour.',
      ka: 'საახალწლო ცირკისა და თეატრის ბილეთები ხშირად წინასწარ იყიდება. თუ გსურთ საღამოს წარმოდგენა დღის ტურს შეუთავსოთ, მოგვწერეთ ზუსტი გრაფიკის დასაგეგმად.',
    },
    relatedTourSlug: 'batumi-architecture-walking-tour',
    whatsappTopic: {
      en: 'Batumi Shows, Tickets & Half-Day Tour Timing',
      ka: 'ბათუმის აფიშა, ბილეთები და ნახევარდღიანი ტურის შეთავსება',
    },
  },
  {
    slug: 'batumi-airport-and-sarpi-bypass',
    category: 'travel-rules',
    status: 'active-2026',
    featuredOnHome: false,
    dateRange: {
      en: '2026–2029 Infrastructure & Aviation',
      ka: '2026–2029 სატრანსპორტო და საავიაციო სიახლეები',
    },
    title: {
      en: 'Batumi Airport Terminal Expansion (~41 Routes) & Batumi–Sarpi Bypass',
      ka: 'ბათუმის აეროპორტის გაფართოება (~41 მიმართულება) და ბათუმი–სარფის მაგისტრალი',
    },
    summary: {
      en: 'TAV Georgia’s ~$5M terminal upgrade boosts Batumi Airport (BUS) toward 1.7M annual passengers, while construction has started on the $311M+ Batumi–Sarpi coastal bypass highway.',
      ka: 'TAV Georgia-ს ~$5 მლნ-იანი გაფართოებით ბათუმის აეროპორტის გამტარუნარიანობა 1.7 მლნ მგზავრამდე გაიზარდა; დაიწყო ბათუმი–სარფის 11.3 კმ-იანი შემოვლითი მაგისტრალის მშენებლობაც.',
    },
    keyDetails: {
      en: [
        'Batumi International Airport (BUS) upgrade: Added ~1,000 m² of operational space, expanded check-in counters from 14 to 18, upgraded passport control & baggage speeds, lifting annual capacity from 1.3M toward 1.7M passengers (~10% projected traffic growth).',
        'Flight network: ~41 international destinations linking Batumi directly with hubs such as Istanbul, Tel Aviv, Dubai, Europe, and Central Asia, plus seasonal domestic Tbilisi–Batumi flights on Georgian Airways.',
        'Batumi–Sarpi Bypass Highway: Construction has begun on the 11.3 km section ($311M+ project, featuring a 7.6 km tunnel and bridges) over a 48-month build window to eventually bypass heavy summer traffic through Gonio and Kvariati toward the Turkish border.',
      ],
      ka: [
        'ბათუმის საერთაშორისო აეროპორტი (BUS): დაახლოებით $5 მლნ-იანი ინვესტიციით ტერმინალი ~1,000 მ²-ით გაფართოვდა, სარეგისტრაციო დახლები 14-დან 18-მდე გაიზარდა, დაჩქარდა პასპორტ-კონტროლი და ბარგის გაცემა (წლიური გამტარუნარიანობა 1.3 მლნ-დან ~1.7 მლნ მგზავრამდე).',
        'საავიაციო კავშირები: ბათუმი უკავშირდება ~41 მიმართულებას (მათ შორის სტამბოლი, თელ-ავივი, დუბაი, ევროპა და ცენტრალური აზია), ასევე მოქმედებს სეზონური შიდა ფრენები თბილისი–ბათუმის ხაზზე.',
        'ბათუმი–სარფის შემოვლითი გზა: დაიწყო 11.3 კმ-იანი მონაკვეთის მშენებლობა ($311 მლნ+, 7.6 კმ-იანი გვირაბით და ხიდებით, 48-თვიანი ვადით), რაც გონიო–კვარიათის საცობებს განტვირთავს თურქეთის საზღვართან.',
      ],
    },
    venue: {
      en: 'Batumi International Airport (BUS) & Gonio–Sarpi Corridor',
      ka: 'ბათუმის საერთაშორისო აეროპორტი (BUS) და გონიო–სარფის დერეფანი',
    },
    mapsUrl: 'https://maps.google.com/?q=Batumi+International+Airport,+Georgia',
    admission: {
      en: 'Allow extra transfer buffer near Gonio/Kvariati during peak hours',
      ka: 'პიკის საათებში გონიო–სარფის გზაზე გაითვალისწინეთ დამატებითი დრო',
    },
    localTip: {
      en: 'Landing at Batumi Airport or crossing from Sarpi? Message us your flight time—we coordinate hotel drop-offs and direct starts for Mtirala or Machakhela tours.',
      ka: 'ბათუმის აეროპორტში ჩამოფრენის ან სარფის საზღვრის გადმოკვეთის შემდეგ შეგვიძლია დაგეხმაროთ ტრანსფერისა და აჭარის ეროვნული პარკების ტურების შეუფერხებელ დაგეგმვაში.',
    },
    relatedTourSlug: 'machakhela-guided-hiking',
    whatsappTopic: {
      en: 'Batumi Airport / Sarpi Transfer & Adjara Tours',
      ka: 'ბათუმის აეროპორტის / სარფის ტრანსფერი და აჭარის ტურები',
    },
  },
  {
    slug: 'attractions-hours-tickets-2026-2027',
    category: 'seasonal',
    status: 'active-2026',
    featuredOnHome: false,
    dateRange: {
      en: 'Updated Hours & Ticket Tariffs (2026–2027)',
      ka: 'განახლებული საათები და ბილეთების ფასები (2026–2027)',
    },
    title: {
      en: 'Batumi Botanical Garden, Argo Cable Car & Mtirala Park Visitor Guide',
      ka: 'ბოტანიკური ბაღის, არგოს საბაგიროს და მტირალას პარკის ზუსტი გრაფიკი და ფასები',
    },
    summary: {
      en: 'Exact verified opening hours, 2026–2027 ticket tariffs, weather warnings, and payment rules for Batumi’s three most-visited nature & viewpoint landmarks.',
      ka: 'ბათუმისა და მისი შემოგარენის სამი მთავარი ღირსშესანიშნაობის გადამოწმებული სამუშაო საათები, 2026–2027 წლების ტარიფები და პრაქტიკული წესები ერთ სივრცეში.',
    },
    keyDetails: {
      en: [
        'Batumi Botanical Garden (Green Cape, 9 km north): Open daily 09:00–18:30 (Oct–Apr) and 09:00–20:00 (May–Sep). Entry: 25 GEL foreign visitors, 10 GEL Georgian citizens, under 6 free. Tickets sold physically at the 3 entrance cash desks (cards accepted at main gate).',
        'Argo Cable Car (1 Bako Street, 250m elevation): Open daily 10:00–21:00/22:00 (extended up to midnight in peak summer; pauses during high winds). Round-trip: 39 GEL (ages 12+), 9 GEL (ages 5–11), under 5 free; one-way tickets are generally not sold.',
        'Mtirala National Park (~25–30 km from Batumi): No general park entrance fee. Visitor center runs ~10:00–18:00 in main season; optional zipline (~15–20 GEL) and rope park (15 GEL family / 20 GEL adult) operate roughly May–October.',
      ],
      ka: [
        'ბათუმის ბოტანიკური ბაღი (მწვანე კონცხი, 9 კმ ჩრდილოეთით): ყოველდღე 09:00–18:30 (ოქტომბერი–აპრილი) და 09:00–20:00 (მაისი–სექტემბერი). ბილეთი: უცხოელი ვიზიტორი 25 ₾, საქართველოს მოქალაქე 10 ₾, 6 წლამდე უფასო. ბილეთი იყიდება ადგილზე 3 სალაროში (მთავარ შესასვლელში ბარათით გადახდაც მოქმედებს).',
        'არგოს საბაგირო (ბაქოს ქ. 1, 250 მ სიმაღლე): ყოველდღე 10:00–21:00/22:00 (ზაფხულში შუაღამემდე; ძლიერ ქარში დროებით ჩერდება). ორმხრივი ბილეთი: 12+ წელი — 39 ₾, 5–11 წელი — 9 ₾, 5 წლამდე უფასო (ცალმხრივი ბილეთი ჩვეულებრივ არ იყიდება).',
        'მტირალას ეროვნული პარკი (~25–30 კმ ბათუმიდან): პარკში შესვლა უფასოა. ვიზიტორთა ცენტრი სეზონზე მუშაობს ~10:00–18:00; ზიპლაინი (~15–20 ₾) და თოკების პარკი (15 ₾ საოჯახო / 20 ₾ უფროსების) მუშაობს მაისი–ოქტომბრის პერიოდში.',
      ],
    },
    venue: {
      en: 'Green Cape · 1 Bako St (Argo) · Chakvistavi (Mtirala)',
      ka: 'მწვანე კონცხი · ბაქოს ქ. 1 (არგო) · ჩაქვისთავი (მტირალა)',
    },
    mapsUrl: 'https://maps.google.com/?q=Batumi+Botanical+Garden,+Georgia',
    admission: {
      en: 'Mtirala Free · Botanical 25 GEL · Argo 39 GEL (round-trip)',
      ka: 'მტირალა უფასო · ბოტანიკური 25 ₾ · არგო 39 ₾',
    },
    localTip: {
      en: 'Our Mtirala + Botanical Garden Combo Tour already includes the 25 GEL Botanical Garden ticket upfront—zero surprise gate fees—and Argo Cable Car is one of our 4 official pickup hubs.',
      ka: 'ჩვენს „მტირალა + ბოტანიკური ბაღის“ კომბინირებულ ტურში ბოტანიკური ბაღის 25 ₾-იანი ბილეთი უკვე შედის, ხოლო არგოს საბაგირო ჩვენი ოფიციალური გასვლის პუნქტია.',
    },
    relatedTourSlug: 'mtirala-botanical-garden-tour',
    whatsappTopic: {
      en: 'Mtirala & Botanical Garden Combo (Ticket Included)',
      ka: 'მტირალა და ბოტანიკური ბაღი (ბილეთი შედის)',
    },
    image: '/images/botanical-tour.webp',
    imageAlt: {
      en: 'Coastal Black Sea overlook from Batumi Botanical Garden slopes',
      ka: 'შავი ზღვის პანორამა ბათუმის ბოტანიკური ბაღის ფერდობებიდან',
    },
  },
  {
    slug: 'batumoba-and-summer-festival-2027',
    category: 'events',
    status: 'planned-2027',
    featuredOnHome: false,
    dateRange: {
      en: 'May – June 2027 (Spring / Summer Opening)',
      ka: 'მაისი – ივნისი 2027 (გაზაფხული / ზაფხულის გახსნა)',
    },
    title: {
      en: 'Batumoba City Day & Official Batumi Summer Festival 2027',
      ka: '„ბათუმობა“ და ზაფხულის ტურისტული სეზონის გახსნის ფესტივალი 2027',
    },
    summary: {
      en: 'Batumi celebrates its annual city heritage during Batumoba before kicking off the Black Sea beach season in mid-June with free open-air concerts around Miracle Park and the Alphabet Tower.',
      ka: 'ქალაქის ტრადიციული დღესასწაული „ბათუმობა“ და ივნისის შუა რიცხვებში საოცრებათა პარკში გამართული „ზაფხულის ფესტივალი“ უფასო კონცერტებითა და სანაპირო აქტივობებით.',
    },
    keyDetails: {
      en: [
        'Batumoba City Day: Open-air street theater, historical reenactments across Old Batumi & Europe Square, artisan food/craft markets, live concerts, and coastal fireworks (municipal date confirmed annually).',
        'Summer Festival (mid-June): Official opening of Batumi’s summer season by the Alphabet Tower & Miracle Park—free-entry beachfront stage with Georgian & international bands, DJs, light shows, and wine/food pop-ups.',
        'Spring nature peak: May–June also brings peak waterfall flow and blooming Pontic rhododendron across Mtirala National Park and Kolkheti Wetlands.',
      ],
      ka: [
        'ბათუმობა (ქალაქის დღე): ქუჩის თეატრი, ისტორიული ინსტალაციები ძველ ბათუმსა და ევროპის მოედანზე, კულინარიული და ხელნაკეთი გამოფენები, კონცერტები და ფეიერვერკი.',
        'ზაფხულის ფესტივალი (ივნისის შუა რიცხვები): საზაფხულო ტურისტული სეზონის ოფიციალური გახსნა საოცრებათა პარკში (ანბანის კოშკთან) — უფასო ღია ცის ქვეშ კონცერტები, ბენდები, DJ-ები, სანაპირო ზონები და ღვინის კუთხეები.',
        'ბუნების პიკი: მაისი–ივნისი საუკეთესო დროა მტირალას ჩანჩქერებისა და აყვავებული პონტოური შქერის სანახავად.',
      ],
    },
    venue: {
      en: 'Miracle Park (Alphabet Tower), Batumi Boulevard & Old Town',
      ka: 'საოცრებათა პარკი (ანბანის კოშკი), ბათუმის ბულვარი და ძველი ბათუმი',
    },
    admission: {
      en: 'Free public festival zones',
      ka: 'ღია ფესტივალები უფასოა',
    },
    localTip: {
      en: 'Spend the morning cooling off under Mtirala’s rainforest waterfall canopy at 10:00 AM, return by ~16:15, and enjoy Batumi’s free evening Summer Festival concerts on the coast.',
      ka: 'იდეალური განრიგი მაისი–ივნისში: დილის 10:00-ზე გასვლა მტირალას ჩანჩქერზე, 16:15-ზე ბათუმში დაბრუნება და საღამოს ზღვისპირა ფესტივალზე დასწრება.',
    },
    relatedTourSlug: 'mtirala-lake-waterfall-hike',
    whatsappTopic: {
      en: 'May–June 2027 Batumi Events & Mtirala Day Hike',
      ka: 'მაისი–ივნისი 2027 ბათუმის ფესტივალები და მტირალას ლაშქრობა',
    },
    image: '/images/mtirala-hero.webp',
    imageAlt: {
      en: 'Lush green Colchic forest trail in Mtirala National Park near Batumi',
      ka: 'მტირალას ეროვნული პარკის კოლხური ტყის ბილიკი ბათუმთან ახლოს',
    },
  },
  {
    slug: 'black-sea-jazz-and-classical-summer-2027',
    category: 'events',
    status: 'planned-2027',
    featuredOnHome: false,
    dateRange: {
      en: 'July – August 2027 (Peak Music & Highland Season)',
      ka: 'ივლისი – აგვისტო 2027 (მუსიკალური და მთის პიკის სეზონი)',
    },
    title: {
      en: 'Black Sea Jazz Festival, Night Serenades & Shuamtoba Highland Games',
      ka: 'შავი ზღვის ჯაზ-ფესტივალი, „ღამის სერენადები“ და მთის „შუამთობა“',
    },
    summary: {
      en: 'High summer combines Batumi’s flagship Black Sea Jazz Festival and international classical weeks with cool mountain escapes to Beshumi’s traditional Shuamtoba horse-racing festival.',
      ka: 'ზაფხულის პიკში ბათუმი მასპინძლობს შავი ზღვის ჯაზ-ფესტივალსა და კლასიკური მუსიკის საღამოებს, ხოლო აგვისტოში აჭარის მთიანეთში „შუამთობა“ იმართება.',
    },
    keyDetails: {
      en: [
        'Black Sea Jazz Festival (July): Batumi’s flagship music festival since 2007, bringing international jazz, R&B, soul, and pop legends to coastal stages.',
        'Classical & Chamber Weeks (August): Batumi International Classical Music Festival (“Night Serenades”) and Batumi Music Fest host international orchestras, soloists, and chamber ensembles.',
        'Shuamtoba in Beshumi (August): Traditional mountain folk festival in highlands Adjara featuring mardan horse races, traditional wrestling, polyphonic singing, and Khorumi/Adjaruli folk dances.',
        'Summer Sports & Beach Arena: Recurring European beach soccer fixtures, FIDE youth chess events, and international tournaments at Batumi Stadium and Beach Arena.',
      ],
      ka: [
        'Black Sea Jazz Festival (ივლისი): 2007 წლიდან ბათუმის მთავარი მუსიკალური მოვლენა, რომელიც მსოფლიო ჯაზის, სოულისა და R&B-ს ვარსკვლავებს მასპინძლობს.',
        'კლასიკური მუსიკის ფესტივალები (აგვისტო): „ღამის სერენადები“ და Batumi Music Fest აერთიანებს საერთაშორისო ორკესტრებსა და სოლისტებს.',
        'შუამთობა ბეშუმში (აგვისტო): აჭარის მაღალმთიანეთის ტრადიციული სახალხო დღესასწაული დოღით, ქართული ჭიდაობით, ხალხური სიმღერითა და ცეკვებით.',
        'სპორტული კალენდარი: ბათუმის სტადიონსა და ქვიშის არენაზე რეგულარულად იმართება ევროპის ქვიშის ფეხბურთის, ჭადრაკისა და საბრძოლო სპორტის საერთაშორისო ტურნირები.',
      ],
    },
    venue: {
      en: 'Batumi Tennis Club / Coastal Venues & Beshumi Highlands',
      ka: 'ბათუმის საზაფხულო სცენები, სპორტული არენა და კურორტი ბეშუმი',
    },
    admission: {
      en: 'Jazz/Music festivals ticketed; Shuamtoba open-air free',
      ka: 'ჯაზ/კლასიკურ ფესტივალებზე ბილეთებით; შუამთობაზე შესვლა თავისუფალია',
    },
    localTip: {
      en: 'July–August coastal humidity makes shaded mountain trails priceless—escape Batumi’s midday heat on our 2-Day Mtirala Shelter Trek or high-altitude Kazbek expedition.',
      ka: 'ივლის–აგვისტოს ზღვისპირა სიცხიდან თავის დასაღწევად საუკეთესოა მტირალას 2-დღიანი საფეხმავლო ტური მთის თავშესაფარში ან მაღალმთიანი ყაზბეგის ექსპედიცია.',
    },
    relatedTourSlug: 'mtirala-2-day-shelter-hike',
    whatsappTopic: {
      en: 'Summer 2027 Batumi Festivals & Mountain Escapes',
      ka: 'ზაფხული 2027 ბათუმის ფესტივალები და მთის ტურები',
    },
  },
  {
    slug: 'autumn-festivals-birdwatching-biaff-gandagana-mandarinoba',
    category: 'events',
    status: 'annual-highlight',
    featuredOnHome: false,
    dateRange: {
      en: 'September – November (Annual Autumn Calendar)',
      ka: 'სექტემბერი – ნოემბერი (შემოდგომის კალენდარი)',
    },
    title: {
      en: 'Birdwatching Festival, BIAFF Film Week, Gandagana & Mandarinoba',
      ka: 'ფრინველებზე დაკვირვება, BIAFF კინოფესტივალი, „განდაგანა“ და „მანდარინობა“',
    },
    summary: {
      en: 'Autumn is Adjara’s richest cultural and eco-tourism season: raptor migration over Sakhalvasho, international cinema (BIAFF & Tofuzi), Machakhloba, Gandagana on Europe Square, and late-November tangerine harvest.',
      ka: 'შემოდგომა აჭარაში ეკოტურიზმისა და გასტრონომიული ფესტივალების პერიოდია: მტაცებელი ფრინველების მიგრაცია სახალვაშოში, BIAFF და თოფუზი, მაჭახლობა, განდაგანა და მანდარინობა.',
    },
    keyDetails: {
      en: [
        'International Birdwatching Festival (September): Centered in nearby Sakhalvasho along the Eastern Black Sea Migration Corridor—hundreds of thousands of raptors cross the Adjara foothills each autumn.',
        'BIAFF & Tofuzi Film Festivals (September–October): Batumi International Art-House Film Festival (BIAFF) and Tofuzi Animation Festival welcome international directors and open screenings.',
        'Machakhloba & Kedeloba (September–October): Rural valley festivals celebrating Machakhela gorge heritage, historic bridges, folk polyphony, and Keda’s winemaking.',
        'Gandagana Rural Tourism Festival (October, Europe Square): Transforms downtown Batumi into a mountain village fair with Adjarian cooking masterclasses (sinor, borano, churchkhela), local wines, and folk dance.',
        'Mandarinoba Tangerine Festival (Late November, Tsikhisdziri): Celebrated at Castello Mare with Kobuleti Municipality (2026 edition held Nov 21) featuring morning citrus orchard picking, artisan jams, and coastal folk concerts.',
      ],
      ka: [
        'ფრინველებზე დაკვირვების საერთაშორისო ფესტივალი (სექტემბერი): ტარდება სახალვაშოსთან, აღმოსავლეთ შავი ზღვის მიგრაციულ დერეფანზე — შემოდგომით ასიათასობით მტაცებელი ფრინველი გადაიფრენს.',
        'BIAFF და „თოფუზი“ (სექტემბერი–ოქტომბერი): ბათუმის საავტორო კინოს საერთაშორისო ფესტივალი (BIAFF) და ანიმაციური ფილმების ფესტივალი „თოფუზი“.',
        'მაჭახლობა და ქედელობა (სექტემბერი–ოქტომბერი): ხეობების ტრადიციული სახალხო ზეიმები, მეღვინეობა, ხელნაკეთები და აჭარული სუფრა.',
        'სოფლის ტურიზმის ფესტივალი „განდაგანა“ (ოქტომბერი, ევროპის მოედანი): მთიანი აჭარის სოფლები ბათუმის ცენტრში — სინორის, ბორანოსა და ჩურჩხელის მასტერკლასები, ღვინო და ფოლკლორი.',
        'მანდარინობა (ნოემბრის ბოლო, ციხისძირი): 2026 წელს გაიმართა 21 ნოემბერს Castello Mare-ში — ციტრუსის კრეფა ბაღებში, მურაბების მასტერკლასი და ხალხური კონცერტები.',
      ],
    },
    venue: {
      en: 'Europe Square, Sakhalvasho, Machakhela Gorge & Tsikhisdziri',
      ka: 'ევროპის მოედანი, სახალვაშო, მაჭახელას ხეობა და ციხისძირი',
    },
    admission: {
      en: 'Open-air village & harvest fairs free; select film screenings ticketed',
      ka: 'სახალხო და სოფლის ფესტივალები უფასოა; კინოჩვენებების ნაწილი ბილეთით',
    },
    localTip: {
      en: 'Pair Gandagana or Machakhloba season with our guided Machakhela National Park hike or Mtirala Hike & Homemade Adjarian Lunch for authentic village hospitality.',
      ka: 'შემოდგომის ფესტივალები საუკეთესოდ ეწყობა მაჭახელას ეროვნული პარკის ლაშქრობას ან მტირალას ტურს ოჯახურ აჭარულ სადილთან ერთად.',
    },
    relatedTourSlug: 'machakhela-guided-hiking',
    whatsappTopic: {
      en: 'Autumn Festivals & Machakhela / Mtirala Culinary Hike',
      ka: 'შემოდგომის ფესტივალები და მაჭახელას / მტირალას კულინარიული ტური',
    },
    image: '/images/machakhela-tour.webp',
    imageAlt: {
      en: 'Scenic forested valley and mountain river in Machakhela National Park near Batumi',
      ka: 'მაჭახელას ეროვნული პარკის მწვანე ხეობა და ჩანჩქერები ბათუმთან ახლოს',
    },
  },
];

export const BATUMI_ANNUAL_CALENDAR: BatumiSeasonCalendarBlock[] = [
  {
    id: 'cal-winter',
    months: {
      en: 'Dec – Feb · Winter',
      ka: 'დეკემბერი – თებერვალი · ზამთარი',
    },
    title: {
      en: 'Festive Lights, Circus & Adjara Ski Season',
      ka: 'საახალწლო ქალაქი, ცირკი და გოდერძის ზამთარი',
    },
    highlights: {
      en: [
        'Europe Square New Year’s Village (Dec 20 – Jan 7), NYE Gala & Jan 7 Christmas Finale',
        'STAR Circus Georgia winter run (Dec 19 – Jan 17) & Batumi Music Center concerts',
        'Goderdzi Ski Resort season opening (Dec 20) — 4x4 + chains via Khulo only',
        'Mild coastal walks in Old Batumi & Botanical Garden winter evergreens (09:00–18:30)',
      ],
      ka: [
        'ევროპის მოედნის „საახალწლო სოფელი“ (20 დეკ.–7 იან.), 31 დეკ. გალა და 7 იანვრის საშობაო შოუ',
        'STAR Circus Georgia-ს საერთაშორისო პროგრამა (19 დეკ.–17 იან.) და მუსიკალური ცენტრის კონცერტები',
        'გოდერძის სათხილამურო სეზონი (იხსნება 20 დეკემბერს) — ასვლა მხოლოდ ხულოს მხრიდან 4x4-ით',
        'თბილი სანაპირო სეირნობები ძველ ბათუმსა და ბოტანიკურ ბაღში (09:00–18:30)',
      ],
    },
    pairWithTourSlug: 'batumi-architecture-walking-tour',
    pairWithTourLabel: {
      en: 'Batumi Architecture Walk',
      ka: 'ძველი ბათუმის სეირნობა',
    },
  },
  {
    id: 'cal-spring',
    months: {
      en: 'Mar – May · Spring',
      ka: 'მარტი – მაისი · გაზაფხული',
    },
    title: {
      en: 'Batumoba, Waterfalls & Botanical Blooms',
      ka: 'ბათუმობა, წყალუხვი ჩანჩქერები და ბაღის ყვავილობა',
    },
    highlights: {
      en: [
        'Batumoba City Day street fairs, heritage walks & waterfront fireworks (spring/autumn municipal schedule)',
        'Botanical Garden extended hours start May 1 (09:00–20:00) + Mtirala zipline & rope park reopen',
        'Peak waterfall flow & Pontic rhododendron blooms in Mtirala & Kolkheti Wetlands',
        'Off-season embankment upgrades wrapping ahead of summer',
      ],
      ka: [
        'ბათუმობა — ქალაქის დღესასწაული ქუჩის ბაზრობებითა და კონცერტებით',
        'ბოტანიკური ბაღის საზაფხულო გრაფიკი 1 მაისიდან (09:00–20:00) და მტირალას ზიპლაინი',
        'მტირალასა და კოლხეთის ეროვნული პარკების წყალუხვი ჩანჩქერები და აყვავებული შქერი',
        'ზღვისპირა ბულვარის განახლებული სარეკრეაციო სივრცეები სეზონის წინ',
      ],
    },
    pairWithTourSlug: 'mtirala-botanical-garden-tour',
    pairWithTourLabel: {
      en: 'Mtirala & Botanical Garden',
      ka: 'მტირალა და ბოტანიკური ბაღი',
    },
  },
  {
    id: 'cal-summer',
    months: {
      en: 'Jun – Aug · Summer',
      ka: 'ივნისი – აგვისტო · ზაფხული',
    },
    title: {
      en: 'Summer Festival, Jazz & Highland Escapes',
      ka: 'ზაფხულის ფესტივალი, ჯაზი და მაღალმთიანი მარშრუტები',
    },
    highlights: {
      en: [
        'Mid-June Official Summer Festival at Miracle Park & Alphabet Tower (free concerts)',
        'Black Sea Jazz Festival (July) & Night Serenades / Batumi Music Fest (August)',
        'Traditional Shuamtoba horse-racing & folk games in Beshumi highlands (August)',
        'Argo Cable Car summer late-night hours (until midnight in peak season)',
      ],
      ka: [
        'ზაფხულის სეზონის გახსნის ფესტივალი ივნისის შუა რიცხვებში ანბანის კოშკთან',
        'Black Sea Jazz Festival (ივლისი) და „ღამის სერენადები“ / Batumi Music Fest (აგვისტო)',
        'ტრადიციული შუამთობა ბეშუმში (აგვისტო) — დოღი, ჭიდაობა და ფოლკლორი',
        'არგოს საბაგიროს გახანგრძლივებული საზაფხულო საათები (პიკზე შუაღამემდე)',
      ],
    },
    pairWithTourSlug: 'mtirala-lake-waterfall-hike',
    pairWithTourLabel: {
      en: 'Mtirala Lake & Waterfall Hike',
      ka: 'მტირალას ტბა და ჩანჩქერი',
    },
  },
  {
    id: 'cal-autumn',
    months: {
      en: 'Sep – Nov · Autumn',
      ka: 'სექტემბერი – ნოემბერი · შემოდგომა',
    },
    title: {
      en: 'Birdwatching, Cinema, Gandagana & Harvest',
      ka: 'ფრინველების მიგრაცია, კინო, განდაგანა და მანდარინობა',
    },
    highlights: {
      en: [
        'International Birdwatching Festival at Sakhalvasho (September)',
        'BIAFF Art-House Film Festival & Tofuzi Animation Festival (September–October)',
        'Machakhloba (Sep) & Gandagana Rural Tourism Festival on Europe Square (Oct)',
        'Mandarinoba Tangerine Harvest in Tsikhisdziri (late November)',
      ],
      ka: [
        'ფრინველებზე დაკვირვების საერთაშორისო ფესტივალი სახალვაშოში (სექტემბერი)',
        'BIAFF საავტორო კინოს ფესტივალი და „თოფუზი“ (სექტემბერი–ოქტომბერი)',
        'მაჭახლობა (სექტემბერი) და „განდაგანა“ ევროპის მოედანზე (ოქტომბერი)',
        'მანდარინობა ციხისძირში — ციტრუსის კრეფა და ბაზრობა (ნოემბრის ბოლო)',
      ],
    },
    pairWithTourSlug: 'machakhela-guided-hiking',
    pairWithTourLabel: {
      en: 'Machakhela Guided Hiking',
      ka: 'მაჭახელას საფეხმავლო ტური',
    },
  },
];

export const BATUMI_NEWS_FAQS: BatumiNewsFaq[] = [
  {
    question: {
      en: 'Do I need to buy tickets for the Europe Square New Year’s Village?',
      ka: 'საჭიროა თუ არა ბილეთი ევროპის მოედნის საახალწლო სოფელში შესასვლელად?',
    },
    answer: {
      en: 'No. Europe Square’s New Year’s Village (Dec 20 – Jan 7), including the tree lighting, daytime children’s shows, evening bands, the Dec 31 Gala Concert, and the Jan 7 Christmas finale, is completely free and open to the public. Only indoor club parties (such as Teatro Batumi), hotel gala dinners, theater plays, and STAR Circus require paid tickets.',
      ka: 'არა. ევროპის მოედნის საახალწლო სოფელი (20 დეკემბრი – 7 იანვარი), ნაძვის ხის ანთება, საბავშვო პროგრამები, საღამოს კონცერტები, 31 დეკემბრის გალა და 7 იანვრის საშობაო კონცერტი სრულიად უფასოა. ბილეთი საჭიროა მხოლოდ დახურულ კლუბურ ივენთებზე (მაგ. Teatro), სასტუმროს გალა-ვახშმებზე, თეატრსა და ცირკში.',
    },
  },
  {
    question: {
      en: 'Where do visitors buy official tickets for Batumi concerts, circus, and theatre?',
      ka: 'სად შევიძინო ბათუმის კონცერტების, ცირკისა და თეატრის ოფიციალური ბილეთები?',
    },
    answer: {
      en: 'Most ticketed concerts, stand-up shows, theatre plays, club NYE events, and STAR Circus performances in Batumi sell tickets online through TKT.ge and Biletebi.ge. Batumi Botanical Garden tickets (25 GEL foreign / 10 GEL local) are purchased at the garden’s entrance cash desks, and Goderdzi ski passes are checked/sold via mta.ski.',
      ka: 'ბათუმში კონცერტების, სტენდ-აპ შოუების, თეატრის, კლუბური საახალწლო საღამოებისა და ცირკის ბილეთები იყიდება TKT.ge-სა და Biletebi.ge-ზე. ბათუმის ბოტანიკური ბაღის ბილეთი (25 ₾ უცხოელი / 10 ₾ მოქალაქე) იყიდება ადგილზე სალაროში, ხოლო გოდერძის სკი-პასები — mta.ski-ზე.',
    },
  },
  {
    question: {
      en: 'Is travel health insurance really checked at Batumi Airport and Sarpi border in 2026?',
      ka: 'ნამდვილად მოწმდება თუ არა სავალდებულო სამოგზაურო დაზღვევა 2026 წელს საზღვარზე?',
    },
    answer: {
      en: 'Yes. Since January 1, 2026, Georgia’s Law “On Tourism” requires all foreign visitors (including visa-free tourists and children) to carry health & accident insurance with at least 30,000 GEL coverage in English or Georgian (printed or PDF). Border officers can refuse entry if you cannot present a valid policy on arrival.',
      ka: 'დიახ. 2026 წლის 1 იანვრიდან მოქმედი კანონით, ყველა უცხოელ ტურისტს (მათ შორის უვიზო რეჟიმით შემომსვლელებსა და ბავშვებს) უნდა ჰქონდეს მინიმუმ 30,000 ლარის დაზღვევა ინგლისურ ან ქართულ ენაზე (ბეჭდური ან PDF). მესაზღვრეს უფლება აქვს პოლისის არქონის შემთხვევაში უარი თქვას ქვეყანაში შეშვებაზე.',
    },
  },
  {
    question: {
      en: 'Can I reach Goderdzi Ski Resort from Akhaltsikhe in winter?',
      ka: 'შესაძლებელია თუ არა ზამთარში გოდერძიზე ახალციხის მხრიდან გადასვლა?',
    },
    answer: {
      en: 'No. In winter, the eastern mountain road over Goderdzi Pass from Akhaltsikhe is closed due to heavy snow. You must drive from the Batumi / Khulo side only, using winter tires, snow chains, and ideally a 4x4 vehicle (~3–4 hours from Batumi).',
      ka: 'არა. ზამთრის პერიოდში ახალციხის მხრიდან გოდერძის უღელტეხილი დიდთოვლობის გამო იკეტება. კურორტზე ასვლა შესაძლებელია მხოლოდ ბათუმი–ხულოს მხრიდან 4x4 ავტომობილით, ზამთრის საბურავებითა და თოვლის ჯაჭვებით (~3–4 სთ გზა ბათუმიდან).',
    },
  },
  {
    question: {
      en: 'Are exact 2027 dates already fixed for Batumoba, Summer Festival, and Black Sea Jazz?',
      ka: 'უკვე ცნობილია თუ არა 2027 წლის ბათუმობის, ზაფხულის ფესტივალისა და ჯაზ-ფესტივალის ზუსტი რიცხვები?',
    },
    answer: {
      en: 'Annual festival windows are established—mid-June for Summer Festival, July for Black Sea Jazz, August for Night Serenades & Shuamtoba, September for Birdwatching & BIAFF, October for Gandagana, and late November for Mandarinoba—while exact daily dates and headliners are published by Batumi City Hall and GoBatumi closer to each season. We update this page as soon as official dates drop, or you can message us on WhatsApp before booking flights.',
      ka: 'ყოველწლიური ფესტივალების სეზონური ფანჯრები სტაბილურია (ივნისი — ზაფხულის ფესტივალი, ივლისი — ჯაზ-ფესტივალი, აგვისტო — ღამის სერენადები და შუამთობა, სექტემბერი — ფრინველებზე დაკვირვება და BIAFF, ოქტომბერი — განდაგანა, ნოემბრის ბოლო — მანდარინობა), ხოლო კონკრეტულ დღეებსა და ლაინ-აპს მერია და GoBatumi სეზონის წინ აქვეყნებენ. გამოქვეყნებისთანავე ვაახლებთ ამ გვერდს.',
    },
  },
  {
    question: {
      en: 'How can Minimalism Tours Georgia help combine Batumi events with nature tours?',
      ka: 'როგორ დამეხმარება Minimalism Tours Georgia ბათუმის ღონისძიებებისა და ტურების შეთავსებაში?',
    },
    answer: {
      en: 'Our tours depart from 4 central Batumi hubs (including Europe Square and Argo Cable Car) at 10:00 AM and return by late afternoon, leaving your evenings free for festivals, theatre, and coastal dining. We also provide custom 4x4 transfers, private B2B handling, and live WhatsApp advice for your exact travel week.',
      ka: 'ჩვენი ერთდღიანი ტურები 10:00-ზე გადის ბათუმის 4 ცენტრალური წერტილიდან (მათ შორის ევროპის მოედნიდან და არგოს საბაგიროდან) და დღის ბოლომდე ბრუნდება ქალაქში, ასე რომ საღამოს თავისუფლად დაესწრებით ფესტივალებსა და კონცერტებს. ასევე გთავაზობთ ინდივიდუალურ 4x4 ტრანსფერებსა და B2B მომსახურებას.',
    },
  },
];
