/* =====================================================================
   THE UK HOTSPOT REGISTER  ·  data
   ---------------------------------------------------------------------
   To add a site, copy one { ... } block and edit it. Fields:
     id          short case code, shown top-left (e.g. "UK-011")
     name        site name
     nation      "England" | "Scotland" | "Wales"
     region      county / area line
     coords      rough lat,long as a string (for your future map)
     period      active date range, free text
     phenomena   array of tags (reused across the site to build filters)
     tier        "documented" | "mixed" | "volume" | "single" | "explained" | "contested"
     strangeness 0-100  (Axis A)
     evidence    0-100  (Axis B)
     summary     the narrative, your words. <strong> allowed.
     cases       array of { year, title, desc }
     notes       skeptical / context line (optional)
     sources     array of { label, url, note, strength }
                   -- omit url for a text-only note; strength is
                      "primary" | "reputable" | "weak"
     prosaic     array of { explanation, why, sources: [{label,url,strength}] }
     redditThread  URL of the case's Reddit discussion thread, "" if not posted yet
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
    summary:"Just after 3am on 26 December 1980, three American airmen walked into Rendlesham Forest expecting the wreckage of a downed plane. What they reported instead has never been settled.\n\nThey described lights moving through the trees, then a small triangular craft, metallic, resting silent in a clearing, its surface marked with symbols none of them recognised. It moved off through the pines before they could reach it. Two nights later the deputy base commander, Lieutenant Colonel Charles Halt, went in with a team and a tape recorder, and captured, live, lights that split apart, moved against the wind, and appeared to send beams down toward the weapons storage area of a base that held nuclear weapons. Impressions in the forest floor and raised radiation readings were logged at the site.\n\nThe prosaic case is real and partly persuasive. The nearby Orford Ness lighthouse accounts for a steady light on the horizon, and a bright meteor burned up over the region that night. What neither cleanly explains is the close-range, structured object that trained security personnel say they stood feet from. Halt has never retracted a word.\n\nForty years on, it is the <strong>best-documented UFO case in British history</strong>, and the least explained.",
    cases:[
      {year:"1980", title:"The Halt memo", desc:"Deputy base commander Charles Halt filed an official memo describing lights that moved through the trees and appeared to direct beams down toward the weapons-storage area."},
      {year:"1980", title:"Ground traces", desc:"Investigators reported impressions in the forest floor and raised radiation readings at the alleged landing site, though interpretation of both is disputed."},
      {year:"2010s", title:"Burroughs medical case", desc:"Airman John Burroughs later won recognition of a service-connected injury; his medical records were held classified, a thread that keeps the case alive."}
    ],
    notes:"The mundane candidates (the Orfordness lighthouse, a bright fireball that night) are real and account for parts of it. What they do not cleanly cover is the close-range object multiple trained personnel described.",
    sources:[
      { label:"Ian Ridpath", url:"http://www.ianridpath.com/ufo/rendlesham.html",
        note:"The astronomer who led the original BBC investigation; the fullest statement of the prosaic case, the lighthouse and the meteor.",
        strength:"reputable" },
      { label:"The National Archives (MoD FOI release)",
        url:"https://assets.publishing.service.gov.uk/media/5a7f599240f0b6230268ef6d/20150511-FOI2015-03810-Rendlesham-Redacted-Final-Response.pdf",
        note:"The declassified MoD file response on the incident.",
        strength:"primary" },
      { label:"BBC News", url:"https://www.bbc.co.uk/news/uk-12613690",
        note:"On the National Archives release of the UFO files, including the missing Rendlesham intelligence papers.",
        strength:"reputable" }
    ],
    prosaic:[
      { explanation:"Orford Ness lighthouse",
        why:"Its beam, five miles off, flashes through the trees on the exact bearing the airmen faced, matching the 'pulsing' light they chased.",
        sources:[{label:"Ian Ridpath", url:"http://www.ianridpath.com/ufo/rendlesham.html", strength:"reputable"}] },
      { explanation:"A bright fireball",
        why:"An exceptionally bright meteor burned up over southern England at almost the moment of the first 3am sighting, explaining the 'object descending into the forest.'",
        sources:[{label:"Ian Ridpath", url:"http://www.ianridpath.com/ufo/rendlesham.html", strength:"reputable"}] },
      { explanation:"The ground marks were natural",
        why:"A local forester, Vince Thurkettle, identified the 'landing indentations' as rabbit diggings and the broken branches as ordinary forest damage.",
        sources:[{label:"Ian Ridpath", url:"http://www.ianridpath.com/ufo/rendlesham.html", strength:"reputable"}] },
      { explanation:"Radiation readings were normal",
        why:"Halt's own Geiger-counter figures sat within natural background levels, not the elevated readings later claimed.",
        sources:[{label:"Ian Ridpath", url:"http://www.ianridpath.com/ufo/rendlesham.html", strength:"reputable"}] }
    ],
    redditThread:""
  },
  {
    id:"UK-002", name:"Cannock Chase", nation:"England",
    region:"Staffordshire · Cannock Chase", coords:"52.75, -2.00",
    period:"1980s to present",
    phenomena:["UFO / Lights","Cryptid","Black-Eyed Child","Big Cat","Ghost / Haunting"],
    tier:"mixed", strangeness:88, evidence:38,
    summary:"No single night made Cannock Chase strange. It is the sheer variety that unsettles: on one stretch of Staffordshire forest, people report lights, a dogman, black-eyed children, a big cat and wartime ghosts, as if the ground itself attracts the anomalous.\n\nThe aerial side is the most concrete. The Chase appears in Ministry of Defence UFO files, and in 2015 several witnesses reported a large craft with three red lights holding still over the trees. The rest is a mix of the genuinely reported and the heavily amplified. The black-eyed child encounters near Birches Valley recur in sincere accounts and in tabloid cycles in roughly equal measure, and the dogman and 'black panther' sightings have the folkloric quality of stories that grow in the retelling.\n\nWhat makes the place hard to dismiss is not any one report but the clustering, the same convergence that defines Skinwalker Ranch. What makes it hard to trust is the setting: a large, dark forest beside dense towns, carrying the real weight of the 1960s child murders committed here. That is close to a perfect engine for lore, whether or not anything genuine sits behind it.\n\n<strong>Take the cluster seriously. Hold the cause open.</strong>",
    cases:[
      {year:"2015", title:"Three red lights", desc:"Multiple witnesses reported a large craft with three red lights hovering over the forest; earlier the same year, hundreds reported a low, slow, house-shaking object."},
      {year:"2013+", title:"Black-eyed child", desc:"Recurring encounters with a pale child with wholly black eyes near Birches Valley. Sincere reports exist, but the story goes viral in cycles and is heavily tabloid-driven."},
      {year:"ongoing", title:"Dogman and big cat", desc:"Werewolf-type and black-panther sightings recur across the Chase, feeding the 'paranormal ecology' idea that one underlying strangeness drives them all."}
    ],
    notes:"A large, dark forest near dense population with a grim real history (the 1960s child murders) is close to a perfect engine for lore, independent of any anomaly. Treat the cluster as real and the cause as open.",
    sources:[
      { label:"Express & Star", url:"https://www.expressandstar.com/news/local-hubs/staffordshire/stafford/2020/06/02/staffordshire-town-named-as-ufo-hotspot/",
        note:"Regional press on the 1988 'Staffordshire Flap', the MoD-investigated sighting reported to MP Bill Cash.",
        strength:"reputable" },
      { label:"Sky HISTORY", url:"https://www.history.co.uk/shows/alien-files-unsealed/articles/top-ufo-spots-in-the-uk",
        note:"Covers the 2015 sighting reported by several hundred residents.",
        strength:"reputable" },
      { label:"Lee Brickley, 'Paranormal X-Files' series",
        note:"The source of most of the dogman, Pig-Man and black-eyed-child material; enthusiast, single-author. The black-eyed-child story was driven largely by 2014 Daily Star front pages.",
        strength:"weak" }
    ],
    prosaic:[
      { explanation:"The 2015 sighting was likely aircraft or a drone",
        why:"Witnesses heard a loud drone before seeing a slow, low object; the British UFO Research Association did not rule out a large drone or military prototype.",
        sources:[
          {label:"Sky HISTORY", url:"https://www.history.co.uk/shows/alien-files-unsealed/articles/top-ufo-spots-in-the-uk", strength:"reputable"},
          {label:"Birmingham Mail via archive", strength:"reputable"}
        ] },
      { explanation:"The black-eyed-child 'wave' tracked the tabloids",
        why:"The 2014 surge followed three Daily Star front pages tied to the sale of a 'haunted' pub, not a rise in independent reports.",
        sources:[{label:"Sky HISTORY", url:"https://www.history.co.uk/shows/alien-files-unsealed/articles/top-ufo-spots-in-the-uk", strength:"reputable"}] },
      { explanation:"Big-cat and dogman reports rarely survive scrutiny",
        why:"UK 'black panther' and hairy-creature sightings recur nationwide and almost never yield a body, a clear photo, or physical evidence.",
        sources:[{label:"Sky HISTORY", url:"https://www.history.co.uk/shows/alien-files-unsealed/articles/top-ufo-spots-in-the-uk", strength:"reputable"}] }
    ],
    redditThread:""
  },
  {
    id:"UK-003", name:"Bonnybridge", nation:"Scotland",
    region:"Stirlingshire · Falkirk Triangle", coords:"56.00, -3.88",
    period:"Early 1990s to present",
    phenomena:["UFO / Lights"],
    tier:"volume", strangeness:60, evidence:45,
    summary:"It did not start with a crash or a landing. It started, in 1992, with one man on a road outside a small Scottish town seeing a light he could not place, and then hundreds of his neighbours saying the same thing.\n\nBonnybridge sits at a corner of the Falkirk Triangle, and for a decade it recorded strange skies on a scale nowhere else in Britain matched: on the order of 300 reports a year, orange and white spheres, silent triangles, objects that moved in ways aircraft do not. Most came not from enthusiasts but from ordinary residents. The volume grew loud enough that a local councillor, Billy Buchanan, took the case to successive prime ministers and called for a formal inquiry that never came.\n\nThere is no smoking gun here, and that is the point. This is a case built on quantity, not on any single unimpeachable event, and quantity cuts both ways: a genuine sustained phenomenon would look like this, and so would a reputation feeding on itself, drawing sightings the way a lit window draws moths.\n\n<strong>Thirty years on, what actually happened over Bonnybridge is still, honestly, unresolved.</strong>",
    cases:[
      {year:"1992", title:"The flap begins", desc:"A wave of sightings around Bonnybridge kicked off a run that, unusually, never really stopped, turning a small town into a standing reporting hotspot."},
      {year:"ongoing", title:"Council petitions", desc:"Local councillor Billy Buchanan repeatedly pressed for official investigation on behalf of residents, a rare instance of local government taking the volume seriously."}
    ],
    notes:"Volume is a real phenomenon worth studying, but it is mostly lights and unexplained aerial objects, with little physical evidence. Flight paths and the reputation-feedback loop account for an unknown share.",
    sources:[
      { label:"BBC News", url:"https://www.bbc.co.uk/news/articles/cjwngn293pvo",
        note:"Thirty-years-on retrospective on the Falkirk Triangle and what is and is not known.",
        strength:"reputable" },
      { label:"UFOs.ac.uk (University of Glasgow)", url:"https://ufos.ac.uk/bonnybridge/",
        note:"Academic project examining Bonnybridge from the press and media record of the time.",
        strength:"reputable" },
      { label:"TIME", url:"https://content.time.com/time/specials/packages/article/0,28804,2072479_2072478_2072500,00.html",
        note:"Places Bonnybridge among the world's notable UFO hotspots.",
        strength:"reputable" }
    ],
    prosaic:[
      { explanation:"Aircraft and flight paths",
        why:"The area sits near busy corridors between Glasgow and Edinburgh; many 'objects' fit planes, helicopters and their lights.",
        sources:[{label:"BBC News", url:"https://www.bbc.co.uk/news/articles/cjwngn293pvo", strength:"reputable"}] },
      { explanation:"A reputation that fed itself",
        why:"Once Bonnybridge was famous, reporting rose and the story attracted publicity, some of it stunt-driven; the University of Glasgow project frames the flap as substantially media-shaped.",
        sources:[{label:"UFOs.ac.uk (University of Glasgow)", url:"https://ufos.ac.uk/bonnybridge/", strength:"reputable"}] },
      { explanation:"Ordinary astronomical and atmospheric objects",
        why:"With hundreds of casual public reports a year, Venus, satellites and lanterns account for a large share.",
        sources:[{label:"BBC News", url:"https://www.bbc.co.uk/news/articles/cjwngn293pvo", strength:"reputable"}] }
    ],
    redditThread:""
  },
  {
    id:"UK-004", name:"Todmorden", nation:"England",
    region:"West Yorkshire · Calder Valley", coords:"53.71, -2.10",
    period:"1980, within wider 'UFO Alley'",
    phenomena:["UFO / Lights","Abduction","Entity / Humanoid","Animal Deaths"],
    tier:"documented", strangeness:80, evidence:55,
    summary:"On 11 June 1980, a police officer was called to a coal yard in Todmorden to examine a body. It lay on top of a ten-foot heap of coal, and the yard foreman swore it had not been there minutes earlier.\n\nThe dead man was Zigmund Adamski, a miner who had vanished five days before, twenty miles away. He was in a suit, wrongly buttoned; his hair was roughly cropped and he was nearly clean-shaven despite the missing days; burns marked his neck and head, dressed with an ointment forensic scientists could not identify. The coroner recorded an open verdict and later called it the most mysterious case of his career. Five months on, the same officer, Alan Godfrey, reported a diamond-shaped craft blocking Burnley Road at dawn, and time he could not account for.\n\nThe honest position is restraint. The link between the death and the sighting is association, not proof, and Godfrey's later regression testimony is soft evidence that should be held lightly. But strip the UFO framing away entirely and a genuinely unexplained death still sits at the centre, one a coroner could not close.\n\n<strong>That unclosed verdict is what keeps Todmorden alive.</strong>",
    cases:[
      {year:"1980", title:"PC Alan Godfrey", desc:"A uniformed police officer reported a close encounter and possible missing time on a Todmorden road, later exploring the episode under regression. His standing as a witness is what keeps it discussed."},
      {year:"1980", title:"Zigmund Adamski", desc:"A miner found dead on a coal tip with unexplained burns and an unidentified ointment on his body. The coroner recorded that he could not explain the circumstances."}
    ],
    notes:"The Godfrey regression material is soft evidence and should be held lightly. The Adamski death is genuinely unresolved, which is rarer and more interesting than the UFO framing usually given it.",
    sources:[
      { label:"Yorkshire Live", url:"https://www.examinerlive.co.uk/news/west-yorkshire-news/unsolved-baffling-case-missing-miner-14150127",
        note:"Regional press account of the Adamski death and the coroner's open verdict.",
        strength:"reputable" },
      { label:"Sky HISTORY", url:"https://www.history.co.uk/articles/the-todmorden-ufo-mystery-a-close-encounter-in-west-yorkshire",
        note:"Overview of the death and PC Godfrey's later encounter.",
        strength:"reputable" },
      { label:"BBC Sounds, Uncanny",
        note:"Danny Robins's BBC podcast featured Alan Godfrey's firsthand account in his own words.",
        strength:"reputable" }
    ],
    prosaic:[
      { explanation:"Adamski died of a heart attack",
        why:"That was the coroner's medical finding; the open verdict reflects unexplained circumstances, not a supernatural cause.",
        sources:[{label:"Yorkshire Live", url:"https://www.examinerlive.co.uk/news/west-yorkshire-news/unsolved-baffling-case-missing-miner-14150127", strength:"reputable"}] },
      { explanation:"The 'materialised' body may be simple inattention",
        why:"The foreman's claim that it appeared from nowhere rests on his not having noticed it on an earlier pass.",
        sources:[{label:"Yorkshire Live", url:"https://www.examinerlive.co.uk/news/west-yorkshire-news/unsolved-baffling-case-missing-miner-14150127", strength:"reputable"}] },
      { explanation:"Godfrey's abduction memory came from hypnosis",
        why:"The detailed encounter was recovered under regression, a method prone to confabulation and not reliable as a record of events.",
        sources:[{label:"Sky HISTORY", url:"https://www.history.co.uk/articles/the-todmorden-ufo-mystery-a-close-encounter-in-west-yorkshire", strength:"reputable"}] }
    ],
    redditThread:""
  },
  {
    id:"UK-005", name:"Warminster", nation:"England",
    region:"Wiltshire · Cradle Hill", coords:"51.20, -2.18",
    period:"1965 to mid-1970s",
    phenomena:["UFO / Lights","Crop Circles"],
    tier:"volume", strangeness:65, evidence:40,
    summary:"For most of the 1960s, people in this Wiltshire town did not see a UFO so much as hear one: a sound in the dark they called, simply, 'the Thing.' A crackling, droning pressure overhead that drove some to the ground and sent others rushing outside to look.\n\nWhat turned that sound into Britain's first mass UFO event was one man. Arthur Shuttlewood, a journalist at the Warminster Journal, chronicled the reports until they became the story of the town, and night after night crowds climbed Cradle Hill to watch the sky. At the peak, a single August weekend in 1965 drew an estimated 8,000 people.\n\nBut this is a case that curdles the closer you look. The emblematic photograph of the Thing, taken by local man Gordon Faulkner in 1965 and splashed across the Daily Mirror, was later exposed as a hoax. Shuttlewood himself drifted from sceptical reporter to believer to something stranger still, eventually claiming telepathic contact with beings from a planet called Aenstria. And the town sits ringed by the military airspace of Salisbury Plain, a ready source of odd lights and sounds.\n\nSomething did start in the quiet, before the crowds and the cameras. <strong>By the time the crowds arrived, it had become impossible to tell the signal from the show.</strong>",
    cases:[
      {year:"1965", title:"The Thing", desc:"Reports of strange sounds and aerial objects around Warminster, popularised by local journalist Arthur Shuttlewood, grew into a years-long public phenomenon."},
      {year:"1960s-70s", title:"Cradle Hill vigils", desc:"Organised night watches drew large groups hoping to witness the lights, making Warminster an early template for the UFO-tourism feedback loop."}
    ],
    notes:"Proximity to a major military training area supplies obvious candidates for lights and sounds. The flap is historically important but heavily anecdotal and era-bound.",
    sources:[
      { label:"Warminster Journal", url:"https://warminsterjournal.co.uk/ufo-expert-gives-verdict-on-warminster-thing-60-years-on/",
        note:"Local paper's 60-years-on retrospective, with a former MoD UFO desk officer's verdict.",
        strength:"reputable" },
      { label:"Wikipedia: Arthur Shuttlewood", url:"https://en.wikipedia.org/wiki/Arthur_Shuttlewood",
        note:"On the journalist who drove the flap, the hoax photo, and his later contactee claims.",
        strength:"reputable" }
    ],
    prosaic:[
      { explanation:"Military airspace explains the sounds and lights",
        why:"A garrison town ringed by Salisbury Plain's ranges produces aircraft noise, sonic booms and live-firing, the raw material of 'the Thing.'",
        sources:[{label:"Wikipedia: Arthur Shuttlewood", url:"https://en.wikipedia.org/wiki/Arthur_Shuttlewood", strength:"reputable"}] },
      { explanation:"The emblematic photo was a hoax",
        why:"The 1965 Gordon Faulkner image, the case's most famous 'evidence,' was later exposed as fake.",
        sources:[{label:"Wikipedia: Arthur Shuttlewood", url:"https://en.wikipedia.org/wiki/Arthur_Shuttlewood", strength:"reputable"}] },
      { explanation:"The flap was journalist-driven",
        why:"Shuttlewood created and sustained the story, and organised skywatches generated their own sightings through expectation; he later claimed telepathic alien contact.",
        sources:[{label:"Warminster Journal", url:"https://warminsterjournal.co.uk/ufo-expert-gives-verdict-on-warminster-thing-60-years-on/", strength:"reputable"}] }
    ],
    redditThread:""
  },
  {
    id:"UK-006", name:"Broad Haven", nation:"Wales",
    region:"Pembrokeshire · Dyfed Triangle", coords:"51.78, -5.10",
    period:"1977",
    phenomena:["UFO / Lights","Entity / Humanoid"],
    tier:"mixed", strangeness:68, evidence:42,
    summary:"In February 1977, a group of schoolchildren in Pembrokeshire ran inside to say they had seen a silver craft land in the field behind their school. Separated and asked to draw it, several produced the same shape.\n\nThat sighting opened what became known as the Dyfed Triangle, a wave of reports that ran along the Welsh coast through the year: craft on the ground, and figures, tall and silver-suited, seen near farms and homes. The Broad Haven school case is the one that endures, partly because children make awkward hoaxers en masse, and partly because it arrived at the front of a genuine cluster rather than alone.\n\nThe caution is real. Young witnesses can prime one another without meaning to, memory bends toward the group, and the wider Dyfed wave later attracted its share of embroidery and at least one suspected hoax. This is soft evidence, and it should be named as such.\n\nBut a field full of children pointing at the same thing, on the same afternoon, is not nothing. <strong>It is exactly the kind of report that resists both belief and dismissal.</strong>",
    cases:[
      {year:"1977", title:"The school sighting", desc:"Pupils at Broad Haven Primary reported seeing a landed craft during a break; separated and asked to draw it, several produced broadly matching sketches."},
      {year:"1977", title:"Ripperston Farm", desc:"A nearby farm became a focus for reports of humanoid figures and further craft, extending the wave through the wider area."}
    ],
    notes:"Multiple young witnesses give the school case some weight, but children can prime each other, and later hoax explanations circulate. Genuine, but soft.",
    sources:[
      { label:"BBC News (Wales)", url:"https://www.bbc.co.uk/news/av/uk-wales-38860167",
        note:"Former pupil David Davies recalls the school sighting 40 years on.",
        strength:"reputable" },
      { label:"The National Archives (MoD file)", url:"https://www.nationalarchives.gov.uk",
        note:"The declassified MoD documents show the RAF Police were quietly sent to investigate, while the public line was 'no defence significance'. The investigating officer found no evidence of a landing.",
        strength:"primary" },
      { label:"Herald.Wales", url:"https://herald.wales/west-wales/pembrokeshire/the-welsh-triangle-what-was-seen-in-the-sky-back-in-1977/",
        note:"Regional overview of the Dyfed Triangle wave.",
        strength:"reputable" }
    ],
    prosaic:[
      { explanation:"Mass suggestion among children",
        why:"The MoD's own investigators privately suspected pranksters and mass hysteria; a schoolyard rumour can spread and shape what pupils believe they saw.",
        sources:[{label:"The National Archives (MoD file)", url:"https://www.nationalarchives.gov.uk", strength:"primary"}] },
      { explanation:"Military overflights",
        why:"The RAF officer sent to investigate noted the area was crossed by many civilian and military aircraft, near RAF Brawdy.",
        sources:[{label:"BBC News (Wales)", url:"https://www.bbc.co.uk/news/av/uk-wales-38860167", strength:"reputable"}] },
      { explanation:"A prankster in silver",
        why:"Contemporary speculation, and one later claim about a base fireman in a silver fire-suit, offers a mundane candidate for the 'silver figures.' Weak and unverified.",
        sources:[{label:"Herald.Wales", url:"https://herald.wales/west-wales/pembrokeshire/the-welsh-triangle-what-was-seen-in-the-sky-back-in-1977/", strength:"reputable"}] }
    ],
    redditThread:""
  },
  {
    id:"UK-007", name:"Longdendale Valley", nation:"England",
    region:"Derbyshire · Peak District", coords:"53.47, -1.90",
    period:"Folklore to present",
    phenomena:["UFO / Lights","Ghost / Haunting"],
    tier:"mixed", strangeness:55, evidence:30,
    summary:"The lights on the hills above Longdendale were strange long before anyone thought to call them UFOs. People have reported moving lights across these Peak District slopes for centuries, under older names: the 'Devil's bonfires,' corpse candles, the will-o'-the-wisp.\n\nThat long record is what makes the valley useful rather than just eerie. Because the lights predate cars, pylons and aircraft, and because a proper researcher has studied them, you can ask a cleaner question than usual: what are people actually seeing? The folklorist Dr David Clarke traced the accounts and found that the local Mountain Rescue team kept a log of them, turning out again and again to reports of lights on the moor and finding no one there.\n\nThe honest weight of the evidence leans prosaic, and interestingly so. Some sightings are hikers' torches and distant headlights on hidden roads. Others fit the 'earth lights' hypothesis, luminous effects that researchers link to tectonic stress in the rock. Neither fully closes the case, but between them they cover most of it.\n\nLongdendale is the entry that keeps you honest. <strong>Strange and unexplained are not the same word</strong>, and a light that has puzzled people for four hundred years may still have a plain answer.",
    cases:[
      {year:"long-standing", title:"The Longdendale Lights", desc:"Recurring accounts of moving lights on the hills, long folded into local folklore before anyone framed them as UFOs."},
      {year:"modern", title:"Layered reports", desc:"Later decades added ghost sightings and aerial anomalies, giving the valley a multi-phenomenon reputation on a smaller scale than Cannock."}
    ],
    notes:"Earth-light and mundane candidates (distant headlights, atmospheric effects) are strong here precisely because the tradition is so old and so tied to specific terrain.",
    sources:[
      { label:"Dr David Clarke", url:"https://drdavidclarke.co.uk/spooklights/longdendale-lights/",
        note:"Academic folklorist's study of the Longdendale lights, including the Mountain Rescue log and the earth-lights hypothesis.",
        strength:"reputable" },
      { label:"Wikipedia: Longdendale lights", url:"https://en.wikipedia.org/wiki/Longdendale_lights",
        note:"Overview of the centuries-old reports and proposed natural explanations.",
        strength:"reputable" }
    ],
    prosaic:[
      { explanation:"Hikers' torches",
        why:"Strings of moving lights match walkers on the tops; the local Mountain Rescue team logged the reports and repeatedly found no one there.",
        sources:[{label:"Dr David Clarke", url:"https://drdavidclarke.co.uk/spooklights/longdendale-lights/", strength:"reputable"}] },
      { explanation:"Distant car headlights",
        why:"On the hidden bends of the Woodhead Pass, headlights appear and vanish in ways that read as 'dancing lights' from a distance.",
        sources:[{label:"Dr David Clarke", url:"https://drdavidclarke.co.uk/spooklights/longdendale-lights/", strength:"reputable"}] },
      { explanation:"Earth lights",
        why:"Luminous effects linked to tectonic stress in the rock, studied in the Pennines under 'Project Pennine,' fit some of the stranger reports.",
        sources:[{label:"Wikipedia: Longdendale lights", url:"https://en.wikipedia.org/wiki/Longdendale_lights", strength:"reputable"}] }
    ],
    redditThread:""
  },
  {
    id:"UK-008", name:"Bempton", nation:"England",
    region:"East Yorkshire · Flamborough coast", coords:"54.14, -0.17",
    period:"2010s to present",
    phenomena:["UFO / Lights","Cryptid","Entity / Humanoid"],
    tier:"single", strangeness:78, evidence:25,
    summary:"Of all the entries here, this is the one to hold at arm's length, and it is only fair to say so plainly at the top.\n\nAlong this stretch of the East Yorkshire coast, near the cliffs at Bempton and Flamborough, a body of reports has built up: craft, creatures, lights, encounters. It is promoted, energetically, as 'the UK Skinwalker Ranch.' The phrase is doing a lot of work. Almost all of it traces to the sustained casework of one researcher, Paul Sinclair, who has gathered and published the accounts and pressed the comparison.\n\nThat does not make it false. Dedicated single investigators have surfaced real things before. But it does change what kind of claim it is. A hotspot established by many independent witnesses, official files and contemporaneous press is one thing; a hotspot established largely through one person's collected work and branding is another, and a credibility-first register has to keep the two apart.\n\n<strong>Bempton is worth tracking. It is not yet worth leaning on.</strong> We log it, watch it, and wait to see whether the evidence broadens beyond a single source.",
    cases:[
      {year:"ongoing", title:"Sinclair's casework", desc:"Researcher Paul Sinclair has compiled sightings along this stretch of coast and frames Bempton and the Flamborough area as a live, ongoing hotspot."},
      {year:"ongoing", title:"The branding", desc:"The direct 'British Skinwalker' comparison drives much of the attention, which is a reason to weigh the label separately from the underlying reports."}
    ],
    notes:"Take this one with more salt than the others: it is closer to one investigator building a case than an independently established cluster. Worth tracking, not yet worth leaning on.",
    sources:[
      { label:"The Scarborough News", url:"https://www.thescarboroughnews.co.uk/news/author-back-with-more-strange-tales-713207",
        note:"Regional press on Paul Sinclair and his long-running research around RAF Bempton.",
        strength:"reputable" },
      { label:"Paul Sinclair, 'Truth Proof' series", url:"https://truthproof.uk/",
        note:"The single body of work nearly all the Bempton material comes from; one researcher, largely self-published. Treat as a starting point, not corroboration.",
        strength:"weak" }
    ],
    prosaic:[
      { explanation:"A single collector shapes the record",
        why:"With almost all reports gathered and framed by one researcher, selection and interpretation are doing work no independent body checks.",
        sources:[{label:"The Scarborough News", url:"https://www.thescarboroughnews.co.uk/news/author-back-with-more-strange-tales-713207", strength:"reputable"}] },
      { explanation:"Coastal lights have many mundane sources",
        why:"Ships, offshore lights, aircraft from former airfields and the general sea-fret of a clifftop coast supply plenty of ambiguous lights.",
        sources:[{label:"The Scarborough News", url:"https://www.thescarboroughnews.co.uk/news/author-back-with-more-strange-tales-713207", strength:"reputable"}] },
      { explanation:"Folklore accretion",
        why:"An old coast with layered legend invites new experiences to be fitted into an existing 'strange place' frame. Sourcing here is thin, and that is noted honestly.",
        sources:[] }
    ],
    redditThread:""
  },
  {
    id:"UK-009", name:"Berwyn Mountains", nation:"Wales",
    region:"Denbighshire · Berwyn range", coords:"52.90, -3.40",
    period:"23 January 1974",
    phenomena:["UFO / Lights"],
    tier:"explained", strangeness:45, evidence:30,
    summary:"On the night of 23 January 1974, the Berwyn range in North Wales lit up, the ground shook, and within days the story had a shape: a craft had crashed on the mountain, and bodies had been recovered. It became the 'Welsh Roswell.' Almost none of it holds.\n\nWhat actually happened that night is unusually well accounted for. A real earthquake struck the area, one of the larger British tremors on record, at almost exactly the moment witnesses reported lights and a tremendous sound. Meteor activity supplied the lights in the sky; local people with lamps, out on the hills, supplied lights on the ground. The crashed-craft-and-bodies layer was assembled afterwards, and has never been supported.\n\nThis entry earns its place precisely by being the one that resolves. It is the calibration case, the reminder that a genuinely strange-seeming night, tremor, lights, sound, sudden fear, can have a mundane cause sitting in plain sight, and that a reputation for the uncanny can outrun the facts by decades.\n\n<strong>Strange, in reputation. Explained, in fact.</strong> Both are worth recording.",
    cases:[
      {year:"1974", title:"The night itself", desc:"A genuine earth tremor coincided with meteor activity and lights on the hills, and the combination fused in retelling into a crash narrative."},
      {year:"later", title:"The crash rumour", desc:"Claims of bodies and a military recovery attached themselves afterward, without support, and are widely regarded as embroidery on a natural event."}
    ],
    notes:"Included precisely as a contrast case: strange in reputation, well explained in fact. Good for calibrating how a mundane cluster can masquerade as an anomaly.",
    sources:[
      { label:"British Geological Survey (seismic record)",
        note:"A magnitude 3.5 earthquake was recorded at 20:38 on 23 January 1974, epicentre near Bala, at almost exactly the moment of the 'crash'. The Royal Astronomical Society later published on it in Astronomy & Geophysics.",
        strength:"primary" },
      { label:"Andy Roberts, 'The Berwyn Mountain Incident'", url:"http://www.uk-ufo.org/condign/berwart.htm",
        note:"The definitive investigation; dismantles the radiation and leukaemia-cluster claims and reconstructs the night from records.",
        strength:"reputable" },
      { label:"Wikipedia: Berwyn Mountain UFO incident", url:"https://en.wikipedia.org/wiki/Berwyn_Mountain_UFO_incident",
        note:"Well-sourced overview of the earthquake-plus-meteor explanation.",
        strength:"reputable" }
    ],
    prosaic:[
      { explanation:"A recorded earthquake",
        why:"The British Geological Survey logged a magnitude 3.5 quake at 20:38 that night, epicentre near Bala, explaining the 'explosion,' the shaking and the sudden fear.",
        sources:[{label:"British Geological Survey (seismic record)", strength:"primary"}] },
      { explanation:"A bright meteor",
        why:"A bolide widely seen over Wales and northern England accounts for the lights streaking across the sky.",
        sources:[{label:"Wikipedia: Berwyn Mountain UFO incident", url:"https://en.wikipedia.org/wiki/Berwyn_Mountain_UFO_incident", strength:"reputable"}] },
      { explanation:"Earthquake lights",
        why:"Luminous ground-level effects associated with seismic stress fit the glows witnesses saw on the hills.",
        sources:[{label:"Andy Roberts, 'The Berwyn Mountain Incident'", url:"http://www.uk-ufo.org/condign/berwart.htm", strength:"reputable"}] },
      { explanation:"The 'cover-up team' were scientists",
        why:"Six investigators doing door-to-door enquiries were BGS staff, not a body-recovery unit; the radiation and leukaemia-cluster claims were later shown to be unfounded.",
        sources:[{label:"Andy Roberts, 'The Berwyn Mountain Incident'", url:"http://www.uk-ufo.org/condign/berwart.htm", strength:"reputable"}] }
    ],
    redditThread:""
  },
  {
    id:"UK-010", name:"Pentyrch", nation:"Wales",
    region:"near Cardiff · Pentyrch", coords:"51.53, -3.28",
    period:"February 2016",
    phenomena:["UFO / Lights","Entity / Humanoid","Military"],
    tier:"contested", strangeness:75, evidence:28,
    summary:"For one night in February 2016, a village near Cardiff became, in the retelling, the scene of something enormous: a craft the size of a building over the woods, a smaller object thrown from it, military helicopters, explosions, damaged trees. It is a genuinely dramatic story. It is also a thin one, and the tidy official rebuttal is thinner than it first looks.\n\nTwo things are firm. Real military aircraft were over Pentyrch that night, Chinooks included, on a scale that had hundreds of residents phoning the police. And the truly spectacular detail, the pyramid craft, the ejected orbs, being scanned, rests very largely on a single primary witness, Caz Clarke, and reached the public through a book she wrote with investigator Gari Jones. Between those two facts, the ground is soft.\n\nThe MoD's answer has been evasive rather than clean. The activity was attributed to a routine exercise, but researchers point out that the named exercise, Chameleon, appears to have run in the north of England the week before, not in Wales, and later Freedom of Information replies leaned on national-security exemptions. So even the mundane explanation is contested.\n\n<strong>High on strangeness, low on evidence.</strong> It feels huge. On what can actually be verified, it is not yet huge, and keeping those apart is the whole job.",
    cases:[
      {year:"2016", title:"The night of activity", desc:"Reports describe low-flying helicopters, road closures and a huge craft ejecting a smaller object, with claimed physical traces in nearby woodland."},
      {year:"2016", title:"Exercise Chameleon", desc:"The Army and RAF attributed the aircraft activity to a routine training exercise, and the site sits on a natural military corridor between St Athan and the Brecon Beacons."}
    ],
    notes:"The load-bearing testimony is thin and single-sourced, and the location supplies an ordinary explanation for a night of military aircraft. High interest, low current evidence.",
    sources:[
      { label:"The Cardiffian (Cardiff University)", url:"https://cardiffjournalism.co.uk/thecardiffian/2022/01/21/military-are-hiding-the-facts-about-pentyrch-ufo-sighting-says-author/",
        note:"Journalistic account of Caz Clarke's claims and the book.",
        strength:"reputable" },
      { label:"Metabunk", url:"https://www.metabunk.org/threads/the-pentyrch-ufo-encounter.11738/",
        note:"Sceptical analysis weighing the military-activity explanation against the extraordinary claims.",
        strength:"reputable" },
      { label:"Caz Clarke and Gari Jones, 'The Pentyrch Incident'", url:"https://www.cazclarke.com/pentyrchincident/",
        note:"The primary witness's own case and evidence; single-source, treat as the claim rather than confirmation of it.",
        strength:"weak" }
    ],
    prosaic:[
      { explanation:"Real military activity",
        why:"Low-flying aircraft including Chinooks were genuinely over Pentyrch that night, which accounts for the helicopters, the noise and the road closures hundreds of residents reported, though the named exercise, Chameleon, is itself disputed and appears to have run in northern England the week before.",
        sources:[{label:"Metabunk", url:"https://www.metabunk.org/threads/the-pentyrch-ufo-encounter.11738/", strength:"reputable"}] },
      { explanation:"Misidentified operations under stress",
        why:"In darkness and alarm, flares, drones and training kit can read as extraordinary craft.",
        sources:[{label:"Metabunk", url:"https://www.metabunk.org/threads/the-pentyrch-ufo-encounter.11738/", strength:"reputable"}] },
      { explanation:"The spectacle is single-sourced",
        why:"The pyramid craft and ejected orbs trace largely to one witness's account; stress and expectation shape perception.",
        sources:[{label:"The Cardiffian (Cardiff University)", url:"https://cardiffjournalism.co.uk/thecardiffian/2022/01/21/military-are-hiding-the-facts-about-pentyrch-ufo-sighting-says-author/", strength:"reputable"}] }
    ],
    redditThread:""
  }
];
