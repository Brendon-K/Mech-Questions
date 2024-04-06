let questions;

let questions_promise = $.getJSON('https://raw.githubusercontent.com/Brendon-K/Mech-Questions/main/questions.json', function(data) {
	questions = data;
});

$.when(questions_promise).done(function() {
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
