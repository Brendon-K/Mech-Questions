/* This is for running the files locally because CORS policy is a bully
let questions = [
    {
        "topic": "Basics",
        "picture": "round1.svg",
	"section": "30-day",
        "questions": [
            {
                "question": "What is the first thing you need to do when you're fixing a game and you need to open it up?",
                "answer": "Power off the game."
            },
            {
                "question": "What is the first thing you need to do when you clock in for the day?",
                "answer": "Toolbox Meeting"
            },
            {
                "question": "Who do we need to CC when sending an e-mail about ordering parts?",
                "answer": "AM Tech Support, AM Tech Training, AM Regional Tech, GM, AGM"
            },
            {
                "question": "After sending in a PO to a Vendor, what should you do?",
                "answer": "Add a comment on the PO that says you sent it in. That way everyone can see from a glance that it was already sent in and we don't double up on any POs."
            },
            {
                "question": "Where can we find a list of down games?",
                "answer": "At the AM/Redemption POS. Click \"Functions\", then \"Machines\", then swipe your staff card, then select \"Out of Service.\""
            },
            {
                "question": "When should you add a game to R1NK? When should you mark something as Critical?",
                "answer": "Any time we notice an issue with a game, it should be added to R1NK. This includes small things like LEDs that stopped functioning, all the way up to games that are broken or safety risks.<br>You should mark something as \"Critical/Broken\" when the game is on our down games list."
            },
            {
                "question": "What should you do after we get a part delivery?",
                "answer": "Scan the packing slip, find the PO on Kintone, upload the packing slip to the PO, mark the date and quantity of items received, then move the status of the PO forward."
            },
            {
                "question": "What if we get a part delivery, but it doesn't have everything we ordered on the PO?",
                "answer": "Sometimes POs show up in multiple separate boxes. If the packing slip says the items are on backorder, then mark the delivery status as \"Backorder\" on the PO and advance the status. If the packing slip does not mention the missing items at all, it probably will show up in a separate box, so you can fill out the PO with the items we have received, and then save it until we get the rest. (You can add a comment to the PO as well to clarify that we didn't just make a mistake filling everything out.)"
            },
            {
                "question": "What are tech reports and where do we submit them?",
                "answer": "Tech reports are things that corporate wants us to show proof that we finished, and we submit them on Kintone under the FA tab."
            }
        ]
    },
    {
        "topic": "Risk",
        "picture": "risk spot.png",
	"section": "30-day",
        "questions": [
            {
                "question": "How often do we need to do Risk Spot? When is it due?",
                "answer": "Risk Spot is done once a week. It is due before each weekend."
            },
            {
                "question": "What do the different colors mean on the Risk Spot report?",
                "answer": "<ul><li><span style=\"background-color: #ffc000;\">Orange</span>: Critical. Turn off the Swiper and try to fix ASAP. Orange means there is a safety risk, so even if you can not fix the issue immediately, you need to make the area safe. For example, if the safety risk is a damaged part that we don't have extras of, remove the part, cover any holes, and order a replacement.</li><li><span style=\"background-color: #ffff00;\">Yellow</span>: High. Turn off the swiper and add to R1NK. Fix soon.</li><li><span style=\"background-color:#fff;\">White</span>: Add to R1NK, but swiper can stay on.</li>"
            },
            {
                "question": "Can you name the different types of PPE that we use here?",
                "answer": "<ul><li>Eye protection (goggles)</li><li>Head protection (hard hat, bump cap)</li><li>Ear protection (ear plugs)</li><li>Hand protection (work gloves, insulated gloves, cutting gloves, nitrile gloves)</li><li>Masks</li><li>Back Brace</li><li>Knee Pads</li><li>Steel Toe Boots</li></ul>"
            },
            {
                "question": "Can you give an example of when you would use each of the above mentioned PPEs?",
                "answer": "A non-exhaustive list:<ul><li>Eye protection<ul><li>Working with chemicals (to avoid splashing)</li><li>Soldering (molten solder can splash)</li><li>Grinding/Drilling (shards from what you're working on can fly towards your face)</li></ul></li><li>Head protection<ul><li>Working under the lanes</li><li>Working inside a game</li><li>Generally anything where you're in an enclosed space and risk hitting your head</li></ul></li><li>Ear protection<ul><li>Working behind the lanes</li></ul></li><li>Hand protection<ul><li>Work Gloves<ul><li>Working behind the lanes</li><li>Moving games</li><li>Breaking down pallets</li><li>Soldering</li></ul></li><li>Insulated Gloves<ul><li>Metering Voltage</li><li>Installing/Removing a Drop Cable</li><li>Generally any time you're working with electricity.</li></ul></li><li>Cutting Gloves<ul><li>Cutting</li></ul></li><li>Nitrile Gloves<ul><li>Handling chemicals</li><li>Cleaning</li></ul></li></ul></li><li>Masks<ul><li>Sanding</li><li>Soldering</li><li>Handling chemicals</li></ul></li><li>Back Brace<ul><li>Lifting heavy things</li></ul></li><li>Knee Pads<ul><li>Really any situation where you're working on your knees. There are tons.</li></ul></li><li>Steel Toe Boots<ul><li>Always. This is part of the mechanic uniform.</li></ul>.</li></ul><img class=\"answer_img\" src=\"img/ppe.png\" alt=\"PPE Guide for Mechanics\">"
            },
            {
                "question": "How should ladders be stored?",
                "answer": "Ladders should be stored by chaining them against a wall."
            },
            {
                "question": "How could you find information on various chemicals that we use in the store?",
                "answer": "SDS (Safety Data Sheets) binders"
            },
            {
                "question": "Why do items need to be stored below 18 inches from the ceiling?",
                "answer": "To make sure sprinklers can effectively extinguish any fires. Storing items too high can block sprinklers."
            }
        ]
    },
    {
        "topic": "Electricity",
        "picture": "multimeter.jpg",
	"section": "30-day",
        "questions": [
            {
                "question": "What is the difference between AC and DC?",
                "answer": "AC (Alternating Current) flows in two directions, and DC (Direct Current) only flows in one direction. AC is what we provide through wall/drop cable outlets, and DC is what we would generally find inside our game cabinets and other electronics. This is because AC is cheaper to transport over long distances, so that is what gets provided to our building, but we need DC to run the components in our games and other devices due to its nature of only flowing in one direction. So we take the AC from the wall, and each machine will convert it to DC to be able to function.<br><img class=\"answer_img\" src=\"img/ac vs dc.webp\">"
            },
            {
                "question": "How much voltage (and what type) should we expect from a wall/drop cable outlet?",
                "answer": "120VAC"
            },
            {
                "question": "What multimeter setting would you use if you want to check if a switch is good?",
                "answer": "#5 is the best for testing continuity.<br>While #4 and #6 <em>could</em> be used to test continuity, technically those settings are for checking resistance and testing diodes respectively, whereas #5 is explicitly a setting to check continuity."
            },
            {
                "question": "What multimeter setting would you use if you want to check if a wall/drop cable outlet is good?",
                "answer": "#1 is the setting to check AC voltage"
            },
            {
                "question": "What multimeter setting would you use if you want to check if a power supply is outputting the correct voltage?",
                "answer": "#2 checks DC voltage, which is what PSUs output."
            }
        ]
    },
    {
        "topic": "Tools Basic",
        "picture": "driver bits.jpg",
	"section": "30-day",
        "questions": [
            {
                "question": "What can you do to make sure you don't strip the head of a screw?",
                "answer": "Make sure you're using the right size. For example a P2 bit might strip a P3 screw head, or if you're using a metric hex bit for an imperial screw you risk stripping it.<br>You also risk stripping a head if you continue screwing it in after it's already secure, which can easily happen if you are using an electric driver with too much power."
            },
            {
                "question": "What is <span class=\"img_reveal\">this tool</span> used for? What is it called? <img class=\"question_img\" style=\"display: none;\" src=\"img/snap ring pliers.webp\">",
                "answer": "This tool is called \"snap Ring pliers,\" or \"retaining ring pliers,\" and it is used for removing and installing retaining rings <img class=\"answer_img\" style=\"display: block;\" src=\"img/snap ring.jpg\">"
            },
            {
                "question": "What is <span class=\"img_reveal\">this tool</span> used for? What is it called? <img class=\"question_img\" style=\"display: none;\" src=\"img/molex crimp tool.webp\">",
                "answer": "This tool is called a molex crimper, and it is for crimping molex connectors onto wires. <img class=\"answer_img\" style=\"display:block;\" src=\"img/molex female.jpg\">"
            },
            {
                "question": "What is <span class=\"img_reveal\">this tool</span> used for? What is it called? <img class=\"question_img\" style=\"display: none;\" src=\"img/crimper.jpg\">",
                "answer": "This tool is called a crimper, and it is for crimping wire terminals and connectors such as the ones shown in the photo. <img class=\"answer_img\" style=\"display:block;\" src=\"img/wire_connectors.avif\">"
            }
        ]
    },
    {
        "topic": "Networking",
        "picture": "network switch.jpg",
	"section": "30-day",
        "questions": [
            {
                "question": "What is the name of the pictured object?",
                "answer": "Network Switch"
            },
            {
                "question": "What are the different networks we have for our games?",
                "answer": "Konami JP, Konami USA, SEGA, Namco, Taito, and \"Free\"."
            },
            {
                "question": "What color is associated with each of those networks?",
                "answer": "Konami JP: Red, Konami USA: Orange, SEGA: Blue, Namco: Yellow, Taito: Green, Free: White"
            },
            {
                "question": "What should you should check if a game is offline?",
                "answer": "<ul><li>Check if the network cable is plugged in (both sides -- game and network switch)</li><li>Check if the signal light is lit up where the cable is plugged in.</li><li>If no light at all, check if the network switch is powered on.</li><li>Use a network cable tester to see if the network cable is still in good condition.</li><li>Check if the game is currently undergoing maintenance (for certain games like the NESiCAxLive cabinets this is definitely the most likely scenario).</li></ul>"
            }
        ]
    },
    {
        "topic": "Swipers",
        "picture": "swiper.jpg",
	"section": "30-day",
        "questions": [
            {
                "question": "How much voltage do we usually use to power our swipers?",
                "answer": "12V"
            },
            {
                "question": "Why is cable management important when dealing with swiper harnesses?",
                "answer": "If harnesses are not properly secured, then you risk damaging them when closing service doors."
            },
            {
                "question": "What is a non-ticketing report and where can you find it?",
                "answer": "If we have a redemption game with recorded plays, but no ticket payout, we will get an e-mail letting us know. You can find it on the main store e-mail (not the events laptop) and usually it gets sent off once a week. If there is no e-mail to be found, then that means all our games appear to be ticketing properly."
            },
            {
                "question": "What are some things that could be the issue if a game shows up on our non-ticketing report?",
                "answer": "<ul><li>The game settings could be wrong.</li><li>The swiper harness could be damaged.</li><li>The swiper itself could be damaged.</li></ul>"
            },
            {
                "question": "How could you fix each of those issues?",
                "answer": "<ul><li>The game settings could be wrong: <ul><li>(If we have multiple of that cabinet): compare settings with other cabinets that are working and match them.</li><li>(If we only have one of that cabinet): Check Game Directory on Kintone for suggested settings.</li></ul></li><li>The swiper harness could be damaged:<ul><li>Re-do the swiper wiring.</li></ul></li><li>The swiper itself could be damaged:<ul><li>Replace the swiper.</li></ul></li></ul>"
            },
            {
                "question": "Before installing a swiper, what should you record so we can finish the swiper installation?",
                "answer": "The MAC Address on the back of the swiper. We need to update that in back office."
            },
            {
                "question": "After installing a freshly opened swiper (and doing what you need according to the previous question), what else do you need to do so that the swiper can finally be up and running?",
                "answer": "Call intercard and have them open the TFTP server so the swiper can download its reader code."
            },
            {
                "question": "What does it mean when you see <span class=\"img_reveal\">maximum payout</span> on a swiper? <img class=\"question_img\" style=\"display: none;\" src=\"img/max payout small.jpg\" alt=\"1 Unawarded Ticket\">",
                "answer": "Maximum payout puts a temporary hold on the \"unawarded tickets\" that go beyond the \"max points\" setting we have set on back office. Once the \"max points\" is reached, further tickets are put on hold until someone with a staff card swipes them, after which they will go to the customer. This allows us to catch errors with ticketing before they become a problem, because if a game or swiper is ticketing way too much, then we can fix the issue before a customer can take advantage of it. <img class=\"answer_img\" style=\"display: block;\" src=\"img/max points.png\" alt=\"Max Points setting for Angry Birds Coin Pusher on Back Office\">"
            },
            {
                "question": "Do you think it would be okay to swipe on <span class=\"img_reveal\">this swiper</span>? Why or why not? <img class=\"question_img\" style=\"display: none;\" src=\"img/max payout big.jpg\" alt=\"66907 Unawarded Tickets\">",
                "answer": "No. That is way too many tickets and no game should be awarding that many all at once. This is a clear sign that there is something wrong with the ticketing, and we either need to replace the swiper, the harness, or fix the game (some troubleshooting will be required to find the exact cause). As a side note, if this was a video instead of a picture, you would actually see the unawarded tickets still continuously ticking up, which is another sign something is wrong."
            },
            {
                "question": "After you swipe on a maximum payout, what happens to the tickets?",
                "answer": "They go to the last person who played the machine."
            },
            {
                "question": "When should you swipe on a maximum payout? And why?",
                "answer": "Once the game is no longer awarding tickets, if the maximum payout seems like a reasonable number, then you can swipe on a maximum payout. Never swipe when it is still ticking out. Until it is done counting tickets, we can not be sure if it's okay or not."
            }
        ]
    },
    {
        "topic": "Pinsetters",
        "picture": "pinsetters.jpg",
	"section": "30-day",
        "questions": [
            {
                "question": "What is the first thing you should do when you answer a bowling call once you're behind the lanes?",
                "answer": "Hold the reset button to put the sweep down, then switch off the pinsetter."
            },
            {
                "question": "What does \"LOTO\" mean?",
                "answer": "<b>L</b>ock <b>O</b>ut <b>T</b>ag <b>O</b>ut. It means to unplug the power cable from the NEXGEN Controller, and put the plug in a locked container so that nobody can power the machine on while it's being worked on."
            },
            {
                "question": "If you need to get under the table to work on something, what do you need to do before you get under there?",
                "answer": "<ul><li>Put the cheese block down in the lane to make sure no balls can get through.</li><li>Put the sweep down because you don't want it to fall down on you while you're working under it.</li><li>Turn the pinsetter off. LOTO</li><li>Put jack stands under the table.</li></ul>"
            },
            {
                "question": "What does an error 1-10 mean? What are some things that could cause it?",
                "answer": "Errors 1-10 are a pin timeout error, which means that a pin holder was waiting for too long for a pin to load into it. Some things that could cause this error are:<ul><li>A jam on the distributor that is preventing the pins from moving to available pin stations.</li><li>A faulty pin station that isn't releasing its pin to the pin holder.</li><li>A faulty pin holder that isn't opening its arms to hit the release lever.</li><li>The distributor shark isn't switching directions, so all the pins are going into one side.</li><li>There aren't enough pins in the machine to load all available pin stations.</li>"
            },
            {
                "question": "If a lane keeps giving off an error 50-59 in diag, what does that mean?",
                "answer": "Errors 50-59 are a \"Pin not detected in Diagnostics\" error, but more specifically it's when the pinholder goes to check for a pin that should be standing, but can't find it. It could mean that a spotting tong has failed to pick up a pin, or a pin holder dropped a pin early.<br>It is also important to note that these errors will not show up during normal gameplay because the pinsetter can't know which pins <em>should</em> be standing in that case. So it's important to regularly run the lanes through DIAG to be able to catch these errors happening."
            },
            {
                "question": "What is the first thing you should look for if you get a call for a \"J1\" error?",
                "answer": "A pin that is stuck on the table, which would prevent the pin holders from going down or back up properly.<img class=\"answer_img\" src=\"img/j1.jpg\" alt=\"Pins stuck on the table causing a J1 error\">"
            },
            {
                "question": "What part of the pinsetter pertains to error 75? What's a common cause for this error?",
                "answer": "Error 75 means the sweep didn't hit the switch that it should be hitting when it's all the way down. This is often caused by a pin being stuck under the sweep."
            },
            {
                "question": "What does error \"EJ\" stand for? What is a likely cause for this error?",
                "answer": "<b>E</b>levator <b>J</b>am. This could be caused by a pin getting stuck in the elevator, preventing it from moving, or it could be caused by a jam in the distributor that is backed up to the elevator.<br><img class=\"answer_img\" src=\"img/ej.jpg\">"
            },
            {
                "question": "If you go to fix a ball jam, and you need to clear the ball return area behind the lanes, what do you need to do to ensure the accelerator motor stops running so you can safely resolve the issue?",
                "answer": "Turn <b>both</b> pinsetters off. (Also make sure the sweeps are down first.)"
            }
        ]
    },
    {
        "topic": "Cleaning",
        "picture": "round1.svg",
	"section": "30-day",
        "questions": [
            {
                "question": "Where are all the places you could look for cleaning supplies?",
                "answer": "<ul><li>Facilities Room</li><li>CO2 Room</li><li>Launcdry Room</li></ul>"
            }
        ]
    },
    {
        "topic": "Amusement",
        "picture": "geminibig.gif",
	"section": "30-day",
        "questions": [
            {
                "question": "What should you do after fixing a crane?",
                "answer": "Let amusement know that it's ready to be turned back on so they can check the settings and make sure it's good for customers to play. Remember to edit the note on the down games list so it's clear that the ball is in amusement's court. (You can do that by turning the swiper back on then turning it off again with an updated note.)"
            },
            {
                "question": "Before giving out a prize from a UFO8, what should you do first?",
                "answer": "Double check the photo and instructions on the top of the crane. Sometimes customers think they won, but they only did part of what's needed to win a prize."
            },
            {
                "question": "Should you update clickers after handing out crane prizes?",
                "answer": "No. Amusement updates the clickers as they stock the cranes, so we don't need to touch them at all."
            }
        ]
    },
    {
        "topic": "AC Cable",
        "picture": "ac_cable.jpg",
	"section": "60-day",
        "questions": [
            {
                "question": "What kind of current would this cable likely carry?",
                "answer": "AC. While technically it's just wires, and you could run whatever you want through it, you can get an idea of its intended use because of the color coding of the wires. In this case, the White, Green, and Black combo is indicative of an AC cable."
            },
            {
                "question": "How much voltage should we expect if we plugged this into something?",
                "answer": "120VAC because that's how much AC voltage our building supplies."
            },
            {
                "question": "What is the term for the white wire?",
                "answer": "Neutral (N)"
            },
            {
                "question": "What is the term for the black wire?",
                "answer": "Live (L)"
            },
            {
                "question": "What is the term for the green wire?",
                "answer": "Earth Ground <img clas=\"answer_img\" src=\"img/earth ground.png\" alt=\"ISO symbol for Earth Ground\">"
            }
        ]
    },
    {
        "topic": "Transformers",
        "picture": "transformers.jpg",
	"section": "60-day",
        "questions": [
            {
                "question": "What is this part called?",
                "answer": "Transformer"
            },
            {
                "question": "What is the purpose of this part?",
                "answer": "Steps up or steps down voltage (in this case it's being used to step down)"
            },
            {
                "question": "Is the input voltage AC or DC?",
                "answer": "AC. The input is coming pretty much directly from our wall/drop cable, which is 120VAC."
            },
            {
                "question": "Is the output voltage AC or DC?",
                "answer": "AC again. Remember that transformers don't convert voltage. They simply step up or step down voltage. It goes in AC, and comes out AC still."
            },
            {
                "question": "What do the Blue Wires represent? (Input or Output?)",
                "answer": "Output. The transformer is sending 100VAC into the rest of the cabinet."
            },
            {
                "question": "What do the Orange Wires represent? (Input or Output?)",
                "answer": "Input. This is basically directly connected from the wall outlet so that is what we are providing to the transformer."
            },
            {
                "question": "What does \"0V\" mean?",
                "answer": "Neutral"
            },
            {
                "question": "Which wire is missing here from one of our standard 3-wire AC cables? Where would it go?",
                "answer": "The Earth Ground wire is missing. It would generally be attached in some way directly to a metal section of the cabinet so it can divert electricity away safely."
            },
            {
                "question": "If we were to replace a monitor in a game we might have to deal with having two separate cables.\nOne for the game and then another for the new monitor we installed.\nHow could we solve that problem using this component?",
                "answer": "Strip the monitor power cable, then put the Live wire onto the 120V terminal, put the Neutral wire onto the 0V terminal, and then find a spot in the cabinet to attach the Earth Ground wire. Now the monitor should start up as soon as the game gets power, and the whole cabinet still only uses the one outlet.<img class=\"answer_img\" src=\"img/lindbergh wiring.jpg\" alt=\"An example of monitor wiring in a Lindbergh cabinet.\">"
            }
        ]
    },
    {
        "topic": "Power Supplies",
        "picture": "psu.jpg",
	"section": "60-day",
        "questions": [
            {
                "question": "What is this part called?",
                "answer": "PSU (Power Supply Unit)"
            },
            {
                "question": "What is the purpose of this part?",
                "answer": "Converts AC to DC.<br>You might think \"It's a Power Supply so it supplies power,\" but technically we're supplying power <em>to</em> the power supply. The power supply is converting that AC voltage that we supply into DC voltage that the game can utilize."
            },
            {
                "question": "What is the input voltage? (And is that AC or DC?)",
                "answer": "120VAC. This is often coming directly from a ca"
            },
            {
                "question": "What is the output?",
                "answer": "12V, 17A"
            },
            {
                "question": "If we had something that required 12V 10A, could we use this?",
                "answer": "Yes. The game will take the 10A it needs. even though the PSU has 17A available, not all of it necessarily will be supplied when powering whatever it's connected to."
            },
            {
                "question": "If we had something that required 5V 10A, could we use this?",
                "answer": "No. The voltage is wrong, so it will not be able to power the parts that it needs to power."
            },
            {
                "question": "If we had something that required 12V 20A, could we use this?",
                "answer": "No. This power supply is only providing 17A, so it does not provide enough current to be able to operate something that requires 20A."
            },
            {
                "question": "If we plugged something in to the 12V output and we were only getting 10V from it, what should we do?",
                "answer": "We would start by turning up the ADJ dial, which lets us adjust the voltage output of the power supply. If we still weren't able to reach that 12V output after turning up the dial, then the PSU is probably faulty and will need to be replaced."
            },
            {
                "question": "What do the yellow wires represent?",
                "answer": "12V (+V)"
            },
            {
                "question": "What do the thin black wires represent?",
                "answer": "Ground (-V)"
            },
            {
                "question": "What does the thick black wire represent?",
                "answer": "Live (L)"
            },
            {
                "question": "What does the green wire represent?",
                "answer": "Earth Ground"
            },
            {
                "question": "What does the white wire represent?",
                "answer": "Neutral (N)"
            }
        ]
    },
    {
        "topic": "Swiper Harness",
        "picture": "swiper_harness.jpg",
	"section": "60-day",
        "questions": [
            {
                "question": "How much voltage do you need to power a swiper?",
                "answer": "Usually 12V, but Intercard swipers can be powered with 11-24VDC."
            },
            {
                "question": "How much voltage would we usually expect from a coin up line?",
                "answer": "5VDC"
            },
            {
                "question": "We get a new game and we need to wire up the swiper ourselves. \nWe can only find +5VDC and +24VDC. What do we do?",
                "answer": "Hook up 24V to power the swiper and 5V is probably the coin line. Intercard swipers can be powered on up to 24VDC."
            },
            {
                "question": "Can you name the red wire on the harness?",
                "answer": "+12V (Swiper power)<img class=\"answer_img\" src=\"img/swiper power.jpg\" alt=\"\">"
            },
            {
                "question": "Can you name the black wire on the harness?",
                "answer": "Ground for the swiper power<img class=\"answer_img\" src=\"img/swiper ground.jpg\" alt=\"\">"
            },
            {
                "question": "Can you name the purple wire on the harness?",
                "answer": "Coin Signal<img class=\"answer_img\" src=\"img/coin signal.jpg\" alt=\"\">"
            },
            {
                "question": "Can you name the grey wire on the harness?",
                "answer": "Coin Ground<img class=\"answer_img\" src=\"img/coin common.jpg\" alt=\"\">"
            },
            {
                "question": "Can you name the blue wire on the harness?",
                "answer": "Token Monitor (usually referred to as \"prize monitor\" since we use it for monitoring crane payouts, but the swiper harness is labeled \"Token Monitor\")<img class=\"answer_img\" src=\"img/token monitor.jpg\" alt=\"\">"
            },
            {
                "question": "Can you name the yellow wire on the harness?",
                "answer": "Coin Monitor (we have no reason to use this one)<img class=\"answer_img\" src=\"img/coin monitor.jpg\" alt=\"\">"
            },
            {
                "question": "Can you name the white wire on the harness?",
                "answer": "Ticket Enable"
            },
            {
                "question": "Can you name the green wire on the harness?",
                "answer": "Ticket Notch"
            },
            {
                "question": "What is special about the <span class=\"img_reveal\">4-pin connector</span> on the harness?<img class=\"question_img\" style=\"display: none;\" src=\"img/ticket harness.jpg\" alt=\"close-up of a 4-pin molex connector on a swiper harness, AKA a \"Ticket Harness\"\">",
                "answer": "It's called a \"Ticket Harness\", and it's designed to just plug right into a redemption game's ticket dispenser, but if no such connector already exists inside a game, we can still make one ourselves. <img src=\"img/ticket dispenser.webp\">"
            },
            {
                "question": "We get a brand new redemption game. Which wires do we need to hook up to the game?",
                "answer": "The whole ticket harness, Purple, Grey. We need the ticket harness to power the swiper, and to allow the game to be able to pay out tickets. In addition to that, we of course need to hook up the coin lines so the game will coin up when someone swipes their card."
            },
            {
                "question": "We get a brand new photobooth. Which wires do we need to hook up to the game?",
                "answer": "Red, Black, Purple, Grey. Photobooths don't pay out tickets, so the only thing we need to worry about is powering the swiper, and allowing people to coin the game up by swiping."
            },
            {
                "question": "We get a brand new crane. Which wires do we need to hook up to the game?",
                "answer": "Red, Black, Purple, Grey, Blue. Cranes don't pay out tickets, so we don't need the rest of the ticket harness, but we do use the \"token\" monitor wire to track prize payouts. So we need to connect swiper power, coin lines, as well as the token monitor."
            }
        ]
    },
    {
        "topic": "Inputs And Outputs",
        "picture": "inputs_and_outputs.jpg",
	"section": "60-day",
        "questions": [
            {
                "question": "1",
                "answer": "Buttons/Switches ; Input"
            },
            {
                "question": "2",
                "answer": "Monitor ; Output"
            },
            {
                "question": "3",
                "answer": "Solenoids/Coils ; Output"
            },
            {
                "question": "4",
                "answer": "Absolute Rotary Encoder ; Input"
            },
            {
                "question": "5",
                "answer": "Potentiometer ; Input"
            },
            {
                "question": "6",
                "answer": "Addressable LEDs ; Output"
            },
            {
                "question": "7",
                "answer": "Button Light ; Output"
            },
            {
                "question": "8",
                "answer": "Button/Switch ; Input"
            },
            {
                "question": "9",
                "answer": "Speaker ; Output"
            },
            {
                "question": "10",
                "answer": "Motor w/ Gearbox ; Output"
            },
            {
                "question": "11",
                "answer": "Solenoid / Coil ; Output"
            },
            {
                "question": "12",
                "answer": "Motor ; Output"
            },
            {
                "question": "13",
                "answer": "Motor for Force Feedback ; Output"
            }
        ]
    },
    {
        "topic": "Drop Cables",
        "picture": "drop_cables.jpg",
	"section": "60-day",
        "questions": [
            {
                "question": "What does \"L2\" mean?",
                "answer": "Phase 2. More specifically, AC power can be transported across multiple \"phases\" by offsetting the frequency of the AC. The specifics don't matter for us, but in short this lets us use one rail to transport three separate lines of AC, saving us lots of space for providing power to our machines.<img class=\"answer_img\" src=\"img/ac phases.png\" alt=\"Diagram showing three phases of AC\">"
            },
            {
                "question": "Why might that label be important?",
                "answer": "So we can balance out power that we consume across multiple phases on a rail. If we see a lot of \"L2\" drop cables for example, then we can try and look for an L1 or L3 instead (if we have any available)."
            },
            {
                "question": "If you see a colored sticker instead of \"L1,\" \"L2,\" or \"L3,\" what does that mean?",
                "answer": "Black = L1, Red = L2, Blue = L3<img class=\"answer_img\" src=\"img/ac color code.webp\" alt=\"Diagram showing the color code for AC wiring, which corresponds to the colored stickers on drop cables.\">"
            },
            {
                "question": "What if you see multiple colored stickers?",
                "answer": "Multiple breakers, multiple phases in one drop cable"
            },
            {
                "question": "If you're removing a drop cable, what should you do first after you get up the ladder?",
                "answer": "Power it off"
            },
            {
                "question": "What should you always do after installing a drop cable? (After you turned it on)",
                "answer": "Test it with a multimeter"
            },
            {
                "question": "What is the maximum current that we want on a single drop cable?",
                "answer": "20A, but ideally we always stay under 20A closer to the 16A range if possible."
            },
            {
                "question": "If we get a new game and it doesn't show how many Amps it takes, what other value would we see instead?",
                "answer": "Watts (You might also see voltage, but we can always assume voltage is 120V)"
            },
            {
                "question": "Using the other value stated in the answer above, how could we figure out the amps?",
                "answer": "Amps = Watts / Voltage"
            },
            {
                "question": "Let's say we have a drop cable with one free outlet, and it currently has 14 amps worth of games plugged into it.\nWe get a new game that takes 850 watts, can we plug it into that drop cable?",
                "answer": "No.\n14 + (850/120) = 21.08A, but one drop cable should only ever have a maximum of 20A."
            }
        ]
    },
    {
        "topic": "Locks",
        "picture": "locks.jpg",
	"section": "60-day",
        "questions": [
            {
                "question": "Which of these locks are in the correct orientation according to Round1 guidelines?",
                "answer": "A, C, F are all correct."
            },
            {
                "question": "What size sockets would you need for installing/removing a lock?",
                "answer": "22 deep socket for removing the large nut, and a 7/16 inch for the nut that secures the cam. (A 12 works as well for the nut, but can sometimes get stuck due to being very slightly larger.)"
            }
        ]
    },
    {
        "topic": "Tools",
        "picture": "tools.jpg",
	"section": "60-day",
        "questions": [
            {
                "question": "Are there any tools here that you aren't sure what they would be used for?",
                "answer": " "
            }
        ]
    }
]
*/

console.log("pre promise");

//* CORS :(
let questions_promise = $.getJSON('', function() {
	questions = data;
});

$.when(questions_promise).done(function() {
//*/
//$(document).ready(function() {
	console.log("post promise");
	const sections = {};
	for (let i = 0; i < questions.length; ++i) {
		let topic_name = questions[i].topic.split(" ").join("_").toLowerCase();

		// Create Section
		let section_name = questions[i].section;
		if (Object.keys(sections).includes(section_name)) {
			sections[section_name].push(i);
		} else {
			sections[section_name] = [i];
			let section_button = document.createElement("a");
			section_button.classList.add("section_tab", "tab_links", section_name);
			section_button.innerHTML = section_name;
			$(".section.tab").append(section_button);
		}

		// Create Tab
		let tab_button = document.createElement("a");
		let tab_text = document.createElement("span");
		tab_text.className = "tab_text";
		tab_text.innerHTML = questions[i].topic;
		tab_button.classList.add("topic_tab", "tab_links", topic_name, section_name);
		tab_button.append(tab_text);
		//tab_button.innerHTML = questions[i].topic;
		tab_button.style.display = "none";
		$(".topic.tab").append(tab_button);

		// Create Topic Container
		let topic_container = document.createElement("div");
		topic_container.classList.add("topic", "tab_content");
		topic_container.style.display = "none";
		let topic_id = "t_" + topic_name;
		topic_container.setAttribute("id", topic_id);
		$(".content").append(topic_container);
		let topic = document.createElement("h1");
		topic.className = "topic_header";
		topic.innerHTML = questions[i].topic;
		let picture = document.createElement("img");
		picture.src = "img/" + questions[i].picture;
		$("#" + topic_id).append(topic);
		$("#" + topic_id).append(picture);

		// Create container for every question in the topic
		let questions_container = document.createElement("div");
		questions_container.className = "questions";
		questions_container.setAttribute("id", "q_"+topic_id);
		$("#" + topic_id).append(questions_container);
		for (q in questions[i].questions) {
			// Create Question Container
			let question_container = document.createElement("div");
			question_container.className = "question_container";
			let id_name = "q" + q + "_" + topic_name;
			question_container.setAttribute("id", id_name);
			$(questions_container).append(question_container);

			// Create Question
			let question = document.createElement("span");
			question.className = "question";
			question.innerHTML = questions[i].questions[q].question;
			$("#" + id_name).append(question);
			$("#" + id_name).append("<br>");

			// Create Reveal Button
			let reveal_button = document.createElement("button");
			reveal_button.type = "button";
			reveal_button.className = "reveal_button";
			reveal_button.innerHTML = "Reveal Answer";
			$("#" + id_name).append(reveal_button);		

			// Create Answer
			let answer = document.createElement("p");
			answer.className = "answer";
			answer.setAttribute("id", "a" + q + "_" + topic_name);
			answer.innerHTML = questions[i].questions[q].answer;
			answer.style.display = "none";
			$("#" + id_name).append(answer);
		}
	}

	// Reveal Button click event listener
	// Reveals/Hides answers on click
	$(".reveal_button").on("click", function(data) {
		let answer = data.currentTarget.nextSibling;
		if (answer.style.display == "none") {
			answer.style.display = "block";
			data.currentTarget.innerHTML = "Hide Answer";
		} else {
			answer.style.display = "none";
			data.currentTarget.innerHTML = "Reveal Answer";
		}
	});

	// Section Tab Control
	$(".section_tab.tab_links").on("click", function(data) {
		let section = data.currentTarget.classList[2];
		let tab_content, tab_links, topic_tab, current_section_tabs;

		// Get all elements with class="tab_content" and hide them
		tab_content = document.getElementsByClassName("tab_content");
		for (let i = 0; i < tab_content.length; ++i) {
			tab_content[i].style.display = "none";
		}

		// Get all elements with class="tab_links" and remove the class "active"
		tab_links = document.getElementsByClassName("tab_links");
		for (let i = 0; i < tab_links.length; ++i) {
			tab_links[i].className = tab_links[i].className.replace(" active", "");
		}

		// Get all elements with class="topic_tab" and hide them
		topic_tab = document.getElementsByClassName("topic_tab");
		for (let i = 0; i < topic_tab.length; ++i) {
			topic_tab[i].style.display = "none";
		}

		// Get all elements with the current section as class and show them
		current_section_tabs = document.getElementsByClassName(section);
		for (let i = 0; i < current_section_tabs.length; ++i) {
			current_section_tabs[i].style.display = "block"
		}

		// Show the current tab, and add an "active" class to the button that opened the tab
		//document.getElementById(section).style.display = "block";
		data.currentTarget.className += " active";
	});

	// Topic Tab Control
	$(".topic_tab.tab_links").on("click", function(data) {
		let topic = "t_"+data.currentTarget.classList[2];
		// Declare all variables
		let tab_content, tab_links, intro;

		// Hide the intro
		intro = document.getElementById("intro");
		if (intro.style.display == "block") {
			intro.style.display = "none";
		}

		// Get all elements with class="topic tab_content" and hide them
		tab_content = document.getElementsByClassName("topic tab_content");
		for (let i = 0; i < tab_content.length; ++i) {
			tab_content[i].style.display = "none";
		}

		// Get all elements with class="topic_tab tab_links" and remove the class "active"
		tab_links = document.getElementsByClassName("topic_tab tab_links");
		for (let i = 0; i < tab_links.length; ++i) {
			tab_links[i].className = tab_links[i].className.replace(" active", "");
		}

		// Show the current tab, and add an "active" class to the button that opened the tab
		document.getElementById(topic).style.display = "block";
		data.currentTarget.className += " active";
	});

	// Reveal image in question
	$(".img_reveal").on("click", function(data) {
		let img = data.currentTarget.parentElement.getElementsByTagName('img')[0];
		if (img.style.display == "none") {
			img.style.display = "block";
		} else {
			img.style.display = "none";
		}
	});

});
