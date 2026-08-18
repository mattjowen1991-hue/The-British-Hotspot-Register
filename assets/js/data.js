/* =====================================================================
   THE BRITISH HOTSPOT REGISTER  ·  data
   ---------------------------------------------------------------------
   To add a site, copy one { ... } block and edit it. Fields:
     id          short case code, shown top-left (e.g. "UK-011")
     name        site name
     nation      "England" | "Scotland" | "Wales"
     region      county / area line
     coords      rough lat,long as a string (for your future map)
     period      active date range, free text
     phenomena   array of tags (reused across the site to build filters)
     tier        "documented" | "mixed" | "volume" | "single"
     strangeness 0-100  (Axis A)
     evidence    0-100  (Axis B)
     summary     1-2 sentences, your words. <strong> allowed.
     cases       array of { year, title, desc }
     notes       skeptical / context line (optional)
     sources     array of { label, url }  -- omit url for a text-only note
   Keep dashes as plain hyphens.
   See /data/schema.md for the full documented schema.
   ===================================================================== */

window.SITES = [
  {
    id:"UK-001", name:"Rendlesham Forest", nation:"England",
    region:"Suffolk · Rendlesham", coords:"52.09, 1.44",
    period:"Dec 1980, plus later reports",
    phenomena:["UFO / Lights","Entity / Humanoid","Military","Physical Traces"],
    tier:"documented", strangeness:82, evidence:70,
    summary:"Britain's best-attested UFO case. Over three nights, US airmen from the twin bases at Bentwaters and Woodbridge reported lights and a landed object beside a site that stored nuclear weapons. The strength here is the <strong>witness calibre and the contemporaneous paper trail</strong>.",
    cases:[
      {year:"1980", title:"The Halt memo", desc:"Deputy base commander Charles Halt filed an official memo describing lights that moved through the trees and appeared to direct beams down toward the weapons-storage area."},
      {year:"1980", title:"Ground traces", desc:"Investigators reported impressions in the forest floor and raised radiation readings at the alleged landing site, though interpretation of both is disputed."},
      {year:"2010s", title:"Burroughs medical case", desc:"Airman John Burroughs later won recognition of a service-connected injury; his medical records were held classified, a thread that keeps the case alive."}
    ],
    notes:"The mundane candidates (the Orfordness lighthouse, a bright fireball that night) are real and account for parts of it. What they do not cleanly cover is the close-range object multiple trained personnel described.",
    sources:[{label:"Wikipedia: Rendlesham Forest incident", url:"https://en.wikipedia.org/wiki/Rendlesham_Forest_incident"}]
  },
  {
    id:"UK-002", name:"Cannock Chase", nation:"England",
    region:"Staffordshire · Cannock Chase", coords:"52.75, -2.00",
    period:"1980s to present",
    phenomena:["UFO / Lights","Cryptid","Black-Eyed Child","Big Cat","Ghost / Haunting"],
    tier:"mixed", strangeness:88, evidence:38,
    summary:"The closest British match to the <strong>Skinwalker profile</strong>: not one phenomenon but a pile-up of them on one stretch of forest. Lights, a dogman, black-eyed children, a big cat, a local 'Pig-Man' and heavy wartime ghost lore all cluster here, over a landscape with a genuinely dark modern history.",
    cases:[
      {year:"2015", title:"Three red lights", desc:"Multiple witnesses reported a large craft with three red lights hovering over the forest; earlier the same year, hundreds reported a low, slow, house-shaking object."},
      {year:"2013+", title:"Black-eyed child", desc:"Recurring encounters with a pale child with wholly black eyes near Birches Valley. Sincere reports exist, but the story goes viral in cycles and is heavily tabloid-driven."},
      {year:"ongoing", title:"Dogman and big cat", desc:"Werewolf-type and black-panther sightings recur across the Chase, feeding the 'paranormal ecology' idea that one underlying strangeness drives them all."}
    ],
    notes:"A large, dark forest near dense population with a grim real history (the 1960s child murders) is close to a perfect engine for lore, independent of any anomaly. Treat the cluster as real and the cause as open.",
    sources:[
      {label:"Wikipedia: Cannock Chase", url:"https://en.wikipedia.org/wiki/Cannock_Chase"},
      {label:"Weird World: Cannock Chase hotspot", url:"https://weird-world.net/cannock-chase-paranormal-hotspot/"}
    ]
  },
  {
    id:"UK-003", name:"Bonnybridge", nation:"Scotland",
    region:"Stirlingshire · Falkirk Triangle", coords:"56.00, -3.88",
    period:"Early 1990s to present",
    phenomena:["UFO / Lights"],
    tier:"volume", strangeness:60, evidence:45,
    summary:"Scotland's UFO capital and one corner of the Falkirk Triangle. Its case rests on <strong>sheer volume</strong>: reports have run at roughly 300 a year since the early 1990s, enough that the local council formally engaged with it.",
    cases:[
      {year:"1992", title:"The flap begins", desc:"A wave of sightings around Bonnybridge kicked off a run that, unusually, never really stopped, turning a small town into a standing reporting hotspot."},
      {year:"ongoing", title:"Council petitions", desc:"Local councillor Billy Buchanan repeatedly pressed for official investigation on behalf of residents, a rare instance of local government taking the volume seriously."}
    ],
    notes:"Volume is a real phenomenon worth studying, but it is mostly lights and unexplained aerial objects, with little physical evidence. Flight paths and the reputation-feedback loop account for an unknown share.",
    sources:[{label:"Wikipedia: Bonnybridge", url:"https://en.wikipedia.org/wiki/Bonnybridge"}]
  },
  {
    id:"UK-004", name:"Todmorden", nation:"England",
    region:"West Yorkshire · Calder Valley", coords:"53.71, -2.10",
    period:"1980, within wider 'UFO Alley'",
    phenomena:["UFO / Lights","Abduction","Entity / Humanoid","Animal Deaths"],
    tier:"documented", strangeness:80, evidence:55,
    summary:"A Pennine valley that produced two of Britain's most-cited cases within months, both with <strong>unusually credible anchors</strong>: a serving police officer and a coroner who could not explain a death.",
    cases:[
      {year:"1980", title:"PC Alan Godfrey", desc:"A uniformed police officer reported a close encounter and possible missing time on a Todmorden road, later exploring the episode under regression. His standing as a witness is what keeps it discussed."},
      {year:"1980", title:"Zigmund Adamski", desc:"A miner found dead on a coal tip with unexplained burns and an unidentified ointment on his body. The coroner recorded that he could not explain the circumstances."}
    ],
    notes:"The Godfrey regression material is soft evidence and should be held lightly. The Adamski death is genuinely unresolved, which is rarer and more interesting than the UFO framing usually given it.",
    sources:[
      {label:"Wikipedia: Alan Godfrey", url:"https://en.wikipedia.org/wiki/Alan_Godfrey"},
      {label:"Wikipedia: Zigmund Adamski", url:"https://en.wikipedia.org/wiki/Zigmund_Adamski"}
    ]
  },
  {
    id:"UK-005", name:"Warminster", nation:"England",
    region:"Wiltshire · Cradle Hill", coords:"51.20, -2.18",
    period:"1965 to mid-1970s",
    phenomena:["UFO / Lights","Crop Circles"],
    tier:"volume", strangeness:65, evidence:40,
    summary:"The classic British UFO flap. From 1965, sounds and lights known collectively as 'the Thing' drew <strong>crowds of skywatchers</strong> to Cradle Hill, in country that later became crop-circle heartland next to Salisbury Plain.",
    cases:[
      {year:"1965", title:"The Thing", desc:"Reports of strange sounds and aerial objects around Warminster, popularised by local journalist Arthur Shuttlewood, grew into a years-long public phenomenon."},
      {year:"1960s-70s", title:"Cradle Hill vigils", desc:"Organised night watches drew large groups hoping to witness the lights, making Warminster an early template for the UFO-tourism feedback loop."}
    ],
    notes:"Proximity to a major military training area supplies obvious candidates for lights and sounds. The flap is historically important but heavily anecdotal and era-bound.",
    sources:[{label:"Wikipedia: Warminster", url:"https://en.wikipedia.org/wiki/Warminster"}]
  },
  {
    id:"UK-006", name:"Broad Haven", nation:"Wales",
    region:"Pembrokeshire · Dyfed Triangle", coords:"51.78, -5.10",
    period:"1977",
    phenomena:["UFO / Lights","Entity / Humanoid"],
    tier:"mixed", strangeness:68, evidence:42,
    summary:"The heart of the 1977 'Dyfed Triangle' wave. The signature event is a <strong>mass sighting by schoolchildren</strong>, followed by a run of reports of craft and silver-suited figures across the coast that year.",
    cases:[
      {year:"1977", title:"The school sighting", desc:"Pupils at Broad Haven Primary reported seeing a landed craft during a break; separated and asked to draw it, several produced broadly matching sketches."},
      {year:"1977", title:"Ripperston Farm", desc:"A nearby farm became a focus for reports of humanoid figures and further craft, extending the wave through the wider area."}
    ],
    notes:"Multiple young witnesses give the school case some weight, but children can prime each other, and later hoax explanations circulate. Genuine, but soft.",
    sources:[{label:"Wikipedia: Broad Haven", url:"https://en.wikipedia.org/wiki/Broad_Haven"}]
  },
  {
    id:"UK-007", name:"Longdendale Valley", nation:"England",
    region:"Derbyshire · Peak District", coords:"53.47, -1.90",
    period:"Folklore to present",
    phenomena:["UFO / Lights","Ghost / Haunting"],
    tier:"mixed", strangeness:55, evidence:30,
    summary:"A Peak District valley with a <strong>centuries-old spook-light tradition</strong>, layered over modern UFO and ghost reports. The lights predate the UFO era, which makes it a useful test case for natural explanations.",
    cases:[
      {year:"long-standing", title:"The Longdendale Lights", desc:"Recurring accounts of moving lights on the hills, long folded into local folklore before anyone framed them as UFOs."},
      {year:"modern", title:"Layered reports", desc:"Later decades added ghost sightings and aerial anomalies, giving the valley a multi-phenomenon reputation on a smaller scale than Cannock."}
    ],
    notes:"Earth-light and mundane candidates (distant headlights, atmospheric effects) are strong here precisely because the tradition is so old and so tied to specific terrain.",
    sources:[{label:"Wikipedia: Longdendale", url:"https://en.wikipedia.org/wiki/Longdendale"}]
  },
  {
    id:"UK-008", name:"Bempton", nation:"England",
    region:"East Yorkshire · Flamborough coast", coords:"54.14, -0.17",
    period:"2010s to present",
    phenomena:["UFO / Lights","Cryptid","Entity / Humanoid"],
    tier:"single", strangeness:78, evidence:25,
    summary:"Actively marketed as 'the UK Skinwalker Ranch', mostly through the work of one researcher. Reports of craft, creatures and coastal high strangeness cluster here, but the case rests <strong>largely on a single body of work</strong> rather than broad independent documentation.",
    cases:[
      {year:"ongoing", title:"Sinclair's casework", desc:"Researcher Paul Sinclair has compiled sightings along this stretch of coast and frames Bempton and the Flamborough area as a live, ongoing hotspot."},
      {year:"ongoing", title:"The branding", desc:"The direct 'British Skinwalker' comparison drives much of the attention, which is a reason to weigh the label separately from the underlying reports."}
    ],
    notes:"Take this one with more salt than the others: it is closer to one investigator building a case than an independently established cluster. Worth tracking, not yet worth leaning on.",
    sources:[
      {label:"Paranormal lecture (Sinclair)", url:"https://filezip.substack.com/p/the-uk-skinwalker-ranch-the-expose"}
    ]
  },
  {
    id:"UK-009", name:"Berwyn Mountains", nation:"Wales",
    region:"Denbighshire · Berwyn range", coords:"52.90, -3.40",
    period:"23 January 1974",
    phenomena:["UFO / Lights"],
    tier:"single", strangeness:45, evidence:30,
    summary:"The 'Welsh Roswell'. On one night, lights, a tremor and rumours of a recovered craft with bodies converged, but this is a case where the <strong>mundane explanation is unusually strong</strong>.",
    cases:[
      {year:"1974", title:"The night itself", desc:"A genuine earth tremor coincided with meteor activity and lights on the hills, and the combination fused in retelling into a crash narrative."},
      {year:"later", title:"The crash rumour", desc:"Claims of bodies and a military recovery attached themselves afterward, without support, and are widely regarded as embroidery on a natural event."}
    ],
    notes:"Included precisely as a contrast case: strange in reputation, well explained in fact. Good for calibrating how a mundane cluster can masquerade as an anomaly.",
    sources:[
      {label:"Context: earthquake plus bolide, Jan 1974"}
    ]
  },
  {
    id:"UK-010", name:"Pentyrch", nation:"Wales",
    region:"near Cardiff · Pentyrch", coords:"51.53, -3.28",
    period:"February 2016",
    phenomena:["UFO / Lights","Entity / Humanoid","Military"],
    tier:"single", strangeness:75, evidence:28,
    summary:"A dramatic recent Welsh case: a large craft, military helicopters, explosions and damaged woodland, over a single night. But the <strong>extraordinary detail traces mainly to one primary witness</strong>, and a mundane candidate exists.",
    cases:[
      {year:"2016", title:"The night of activity", desc:"Reports describe low-flying helicopters, road closures and a huge craft ejecting a smaller object, with claimed physical traces in nearby woodland."},
      {year:"2016", title:"Exercise Chameleon", desc:"The Army and RAF attributed the aircraft activity to a routine training exercise, and the site sits on a natural military corridor between St Athan and the Brecon Beacons."}
    ],
    notes:"The load-bearing testimony is thin and single-sourced, and the location supplies an ordinary explanation for a night of military aircraft. High interest, low current evidence.",
    sources:[
      {label:"Primary account via researcher Caz Clarke"}
    ]
  }
];
