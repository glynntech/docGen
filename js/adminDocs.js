function docSelectChange(selectObj) {
	
	var docTypeSelect = document.getElementById("id_docSelect").value;

// unhide inputs based on document
	if (docTypeSelect <= 4) {
		document.getElementById("sOne").style.display = "block";
		document.getElementById("sTwo").style.display = "none";
		document.getElementById("buttonVisual").style.display = "block";
	} else if (docTypeSelect >= 5 && docTypeSelect <= 20) {
		document.getElementById("sOne").style.display = "none";
		document.getElementById("sTwo").style.display = "block";		
		document.getElementById("buttonVisual").style.display = "block";
	} else if (docTypeSelect == 999) {
		document.getElementById("sOne").style.display = "none";
		document.getElementById("sTwo").style.display = "none";
		document.getElementById("buttonVisual").style.display = "none";	
	}


// ungrey inputs based on doc type
	// CIVIL
	if (docTypeSelect == 0 || docTypeSelect == 2) { // 0 == new client packet, 2 == rep agreement
		document.getElementById("id_minorCheck").disabled = false;
		document.getElementById("id_defendantName").disabled = false;
		document.getElementById("id_contFee").disabled = false;
		document.getElementById("id_fixedFee").disabled = false;
	} else if (docTypeSelect != 0 && docTypeSelect != 2) {
		document.getElementById("id_minorCheck").disabled = true;
		document.getElementById("id_defendantName").disabled = true;
		document.getElementById("id_contFee").disabled = true;
		document.getElementById("id_fixedFee").disabled = true;
		document.getElementById("id_minorRelationship").disabled = true;
		document.getElementById("id_contFeeAmount").disabled = true;
		document.getElementById("id_fixedFeeAmount").disabled = true;
	}
	
	// CRIMINAL
	if (docTypeSelect == 5) {
		document.getElementById("id_filingCounty").disabled = false;
		document.getElementById("id_filingCourt").disabled = false;
		document.getElementById("id_filingDate").disabled = false;
		document.getElementById("id_attorneyFiling").disabled = false;
		document.getElementById("id_ticketWarrantCheck").disabled = false;
		document.getElementById("id_fixedFeeCrim").disabled = false;
	} else if (docTypeSelect == 6) { // 5 == new client packet, 6 == checklist, 7 == letter of rep, 8 == rep agreement, 9 == brady
		document.getElementById("id_filingCounty").disabled = true;
		document.getElementById("id_filingCourt").disabled = true;
		document.getElementById("id_filingDate").disabled = true;
		document.getElementById("id_attorneyFiling").disabled = true;
		document.getElementById("id_ticketWarrantCheck").disabled = true;
		document.getElementById("id_fixedFeeCrim").disabled = true;
	} else if (docTypeSelect == 7) {
		document.getElementById("id_filingCounty").disabled = true;
		document.getElementById("id_filingCourt").disabled = true;
		document.getElementById("id_filingDate").disabled = false;
		document.getElementById("id_attorneyFiling").disabled = false;
		document.getElementById("id_ticketWarrantCheck").disabled = false;
		document.getElementById("id_fixedFeeCrim").disabled = true;	
	} else if (docTypeSelect == 8) {
		document.getElementById("id_filingCounty").disabled = true;
		document.getElementById("id_filingCourt").disabled = true;
		document.getElementById("id_filingDate").disabled = true;
		document.getElementById("id_attorneyFiling").disabled = true;
		document.getElementById("id_ticketWarrantCheck").disabled = false;
		document.getElementById("id_fixedFeeCrim").disabled = false;	
	} else if (docTypeSelect == 9) {
		document.getElementById("id_filingCounty").disabled = false;
		document.getElementById("id_filingCourt").disabled = false;
		document.getElementById("id_filingDate").disabled = false;
		document.getElementById("id_attorneyFiling").disabled = false;
		document.getElementById("id_ticketWarrantCheck").disabled = false;
		document.getElementById("id_fixedFeeCrim").disabled = true;		
	} else if (docTypeSelect != 5 && docTypeSelect != 6 && docTypeSelect != 7 && docTypeSelect != 8 && docTypeSelect != 9) {
		document.getElementById("id_filingCounty").disabled = true;
		document.getElementById("id_filingCourt").disabled = true;
		document.getElementById("id_filingDate").disabled = true;
		document.getElementById("id_attorneyFiling").disabled = true;
		document.getElementById("id_ticketWarrantCheck").disabled = true;
		document.getElementById("id_fixedFeeCrim").disabled = true;	
	}
}

// ****** dynamic select for ADULT REP TO MINOR ******
var adultRepRelationList = new Array(1) 
	adultRepRelationList[1] = ["Daughter","Guardian","Son"];
	adultRepRelationList[0] = ["N/a"];
	

function minorCheckChange(selectObj) {
	var idx = selectObj.selectedIndex;
	var which = selectObj.options[idx].value;
		cList = adultRepRelationList[which];
	var cSelect = document.getElementById("id_minorRelationship");
	var len=cSelect.options.length; 
		while (cSelect.options.length > 0) { 
			cSelect.remove(0); 
			}
	
	var minorBoolean = document.getElementById("id_minorCheck").value;
	// enable the input
		if (minorBoolean == 1) {
			cSelect.disabled = false;
		} else if (minorBoolean == 0) {
			cSelect.disabled = true;	
		}

	var newOption;
		for (var i=0; i<cList.length; i++) { 
			newOption = document.createElement("option"); 
			newOption.value = cList[i];
			newOption.text=cList[i];
				try { 
					cSelect.add(newOption);
					} 
				catch (e) { 
					cSelect.appendChild(newOption); 
					} 
			}
}


// *********** ungrey out secondary inputs ***********
// CIVIL
function clientNumberChange(selectObj) {
	
	var clientNumberValue = document.getElementById("id_clientNumber").value;
	var clientTwoSelect = document.getElementById("id_clientTwoName");
	var clientThreeSelect = document.getElementById("id_clientThreeName");
	var clientFourSelect = document.getElementById("id_clientFourName");

	if (clientNumberValue > 1) {
		clientTwoSelect.disabled = false;
	} else if (clientNumberValue <= 2) {
		clientTwoSelect.disabled = true;	
	}

	if (clientNumberValue > 2) {
		clientThreeSelect.disabled = false;
	} else if (clientNumberValue <= 3) {
		clientThreeSelect.disabled = true;	
	}
		
	if (clientNumberValue > 3) {
		clientFourSelect.disabled = false;
	} else if (clientNumberValue <= 4) {
		clientFourSelect.disabled = true;	
	}
}

function contFeeChange(selectObj) {
	
	var contFeeSelect = document.getElementById("id_contFee").value;
	var contFeeAmountSelect = document.getElementById("id_contFeeAmount");

	if (contFeeSelect == 1) {
		contFeeAmountSelect.disabled = false;
	} else if (contFeeSelect == 0) {
		contFeeAmountSelect.disabled = true;	
	}
}

function fixedFeeChange(selectObj) {
	var fixedFeeSelect = document.getElementById("id_fixedFee").value;
	var fixedFeeAmountSelect = document.getElementById("id_fixedFeeAmount");

	if (fixedFeeSelect == 1) {
		fixedFeeAmountSelect.disabled = false;
	} else if (fixedFeeSelect == 0) {
		fixedFeeAmountSelect.disabled = true;	
	}
}


// CRIMINAL
function ticketOrWarrantChange(selectObj) {
	
	var ticketOrWarrantSelect = document.getElementById("id_ticketWarrantCheck").value;
	var ticketOrWarrantNumbersSelect = document.getElementById("id_ticketWarrantNumbers");

	if (ticketOrWarrantSelect == "ticket" || ticketOrWarrantSelect == "warrant") {
		ticketOrWarrantNumbersSelect.disabled = false;
	} else if (ticketOrWarrantSelect == "n/a") {
		ticketOrWarrantNumbersSelect.disabled = true;	
	}
}


function generate() {
	
	// set constants
	const C_FIRM_NAME = "Hawkins & Jedziniak, LLC";
	const C_ATTORNEY_1_NAME_NUMBER = "Joshua T. Hawkins, S.C. Bar #78470";
	const C_ATTORNEY_2_NAME_NUMBER = "Helena L. Jedziniak, S.C. Bar #100825";
	const C_ADDRESS_LINE_1 = "1225 South Church Street";
	const C_ADDRESS_LINE_2 = "Greenville, South Carolina 29605";
	const C_FIRM_PHONE = "(864) 275-8142 (telephone)"
	const C_FIRM_FAX = "(864) 752-0911 (facsimile)"
	const C_ATTORNEY_1_EMAIL = "josh@hjllcsc.com"
	const C_ATTORNEY_2_EMAIL = "helena@hjllcsc.com"
	const C_CITY_STATE = "Greenville, South Carolina"
	
	
	// set todays date as MMMM DD, YYYY
	var d = new Date();
	var monthWord;
	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	monthWord = months[d.getMonth()];
	
	todaysDate_MMDDYYYY = monthWord + " " + d.getDate() + ", " + d.getFullYear();
	
	
	
	var docTypeSelect = document.getElementById("id_docSelect").value;
	
	// grab variables from html elements - CIVIL
	var minorC = document.getElementById("id_minorCheck").value;
		var minorRelation = document.getElementById("id_minorRelationship").value;
	
	var numberClients = document.getElementById("id_clientNumber").value;
		var client_name_insert_civ;
		var c1 = document.getElementById("id_clientOneName").value;
		var c2 = document.getElementById("id_clientTwoName").value;
		var c3 = document.getElementById("id_clientThreeName").value;
		var c4 = document.getElementById("id_clientFourName").value;
		
			if (minorC == 0){
				if (numberClients == 1) {
					client_name_insert_civ = c1;
				} else if (numberClients == 2) {
					client_name_insert_civ = c1.concat(' and ',c2);
				} else if (numberClients == 3) {
					client_name_insert_civ = c1.concat(', ',c2,', and ',c3);
				} else if (numberClients == 4) {
					client_name_insert_civ = c1.concat(', ',c2,', ',c3,', and ',c4);
				}
			} else if (minorC == 1){
				if (numberClients == 2) {
					client_name_insert_civ = c2;
				} else if (numberClients == 3) {
					client_name_insert_civ = c2.concat(' and ',c3);
				} else if (numberClients == 4) {
					client_name_insert_civ = c2.concat(', ',c3,', and ',c4);
				}
			}
	
	var defName = document.getElementById("id_defendantName").value;

	var cf_question = document.getElementById("id_contFee").value;
		var cf_amount = document.getElementById("id_contFeeAmount").value;
	var ff_question = document.getElementById("id_fixedFee").value;
		var ff_amount = document.getElementById("id_fixedFeeAmount").value;
	
	
	// input check - CIVIL
	if (docTypeSelect == 0 || docTypeSelect == 1 || docTypeSelect == 2 || docTypeSelect == 3 || docTypeSelect == 4) {
		if (c1 == ""){
			alert ("Please enter a name for client #1");
			return;
		} else if (c2 == "" && numberClients >= 2){
			alert ("Please enter a name for client #2");
			return;
		} else if (c3 == "" && numberClients >= 3){
			alert ("Please enter a name for client #3");
			return;
		} else if (c4 == "" && numberClients >= 4){
			alert ("Please enter a name for client #4");
			return;
		}
	}
	
	if (docTypeSelect == 0 || docTypeSelect == 2) {
		if (minorC == 1 && numberClients < 2) {
			alert ("Cases involving minors must have at least 2 client's attached (minor & guardian)");
			return;
		} else if (defName == "") {
			alert ("Please enter a name for the defendant");
			return;
		} else if (cf_question == 1 && (cf_amount == "%" || cf_amount == "")) {
			alert ("Please enter a contingency fee percentage");
			return;
		} else if (ff_question == 1 && (ff_amount == "$" || ff_amount == "")) {
			alert ("Please enter a fixed fee amount");
			return;
		}
	}
	
	
	
	// grab variables from html elements - CRIMINAL
	var filingCounty_Crim = document.getElementById("id_filingCounty").value;
	var filingCourt_Crim = document.getElementById("id_filingCourt").value;
	
	if (docTypeSelect == 5 || docTypeSelect == 7 || docTypeSelect == 9) {
		if (document.getElementById("id_filingDate").value == "") {
			alert ("Please enter the filing date");
			return;
		} else {
			var filingDate_Crim = new Date(document.getElementById("id_filingDate").value);
				// adjust date format of filingDate_Crim
				var filingDate_Crim_Day = filingDate_Crim.getDate();
					var filingDate_Crim_DayStr = filingDate_Crim_Day.toString()
				var filingDate_Crim_Month = months[filingDate_Crim.getMonth()];
					var filingDate_Crim_MonthStr = filingDate_Crim_Month.toString()
				var filingDate_Crim_Year = filingDate_Crim.getFullYear();
					var filingDate_Crim_YearStr = filingDate_Crim_Year.toString()
				
				var filingDate_Crim_Formatted = filingDate_Crim_MonthStr.concat(" ",filingDate_Crim_DayStr,", ",filingDate_Crim_YearStr)
		}
	}
	
	var filingAttorney_Crim = document.getElementById("id_attorneyFiling").value;
	
	var defendantName_Crim = document.getElementById("id_defendantNameCrim").value;
	
	var ticketOrWarrantNumberText		
	var ticketTxt = "Ticket Number: "
	var warrantTxt = "Warrant Number: "
	var ticketOrWarrantCheck = document.getElementById("id_ticketWarrantCheck").value;
		var ticketOrWarrantNumber = document.getElementById("id_ticketWarrantNumbers").value;
			if (ticketOrWarrantCheck = "ticket") {
				ticketOrWarrantNumberText = ticketTxt.concat(ticketOrWarrantNumber)
			} else if (ticketOrWarrantCheck = "warrant") {
				ticketOrWarrantNumberText = warrantTxt.concat(ticketOrWarrantNumber)
			}
	
	var initialFF = document.getElementById("id_fixedFeeCrim").value;
	
	// input check - CRIMINAL
	if (docTypeSelect == 5 || docTypeSelect == 6 || docTypeSelect == 7 || docTypeSelect == 8 || docTypeSelect == 9) {
		if (defendantName_Crim == ""){
			alert ("Please enter a name for the defendant");
			return;
		}
	}
	
	if (docTypeSelect == 5 || docTypeSelect == 7) {
		if (filingAttorney_Crim == "n/a") {
			alert ("Please select the attorney filing the document(s)");
			return;
		} else if (ticketOrWarrantCheck == "n/a") {
			alert ("Please select ticket or warrant");
			return;
		} else if (ticketOrWarrantCheck != "n/a" && ticketOrWarrantNumber == "") {
			alert ("Please enter the ticket or warrant number(s)");
			return;
		}
	}

	if (docTypeSelect == 5 || docTypeSelect == 8) {
		if (ticketOrWarrantCheck == "n/a") {
			alert ("Please select ticket or warrant");
			return;
		} else if (ticketOrWarrantCheck != "n/a" && ticketOrWarrantNumber == "") {
			alert ("Please enter the ticket or warrant number(s)");
			return;
		} else if (initialFF == "$" || initialFF == "") {
			alert ("Please enter the initial fixed fee amount");
			return;
		}
	}
	
	if (docTypeSelect == 5 || docTypeSelect == 9) {
		if (filingCounty_Crim == "n/a") {
			alert ("Please select the filing county for the document(s)");
			return;
		} else if (filingCourt_Crim == "n/a") {
			alert ("Please select the filing court for the document(s)");
			return;
		} else if (filingAttorney_Crim == "n/a") {
			alert ("Please select the attorney filing the document(s)");
			return;
		} else if (ticketOrWarrantCheck == "n/a") {
			alert ("Please select ticket or warrant");
			return;
		} else if (ticketOrWarrantCheck != "n/a" && ticketOrWarrantNumber == "") {
			alert ("Please enter the ticket or warrant number(s)");
			return;
		}
	}

	
	
	
	
	
	// set text strings
	var headerTxtSingle = "I, ";
	var headerTxtMultiple = "We, ";
	
	var header_text;
		if (minorC == 0 && numberClients == 1){
			header_text = headerTxtSingle.concat(client_name_insert_civ, ', have retained Hawkins & Jedziniak, LLC (“attorneys”), to represent me in my claim(s) against ', defName, '. I understand the attorneys have foregone taking other cases that may create a conflict.');
		} else if (minorC == 0 && numberClients >= 2){
			header_text = headerTxtMultiple.concat(client_name_insert_civ, ', have retained Hawkins & Jedziniak, LLC (“attorneys”), to represent us in our claim(s) against ', defName, '. We understand the attorneys have foregone taking other cases that may create a conflict.');
		} else if (minorC == 1 && numberClients == 2 && (minorRelation == "Son" || minorRelation == "Daughter")){
			header_text = headerTxtSingle.concat(client_name_insert_civ, ', have retained Hawkins & Jedziniak, LLC (“attorneys”), to represent me and my ', minorRelation, ', ', c1, ', in our claim(s) against ', defName, '. We understand the attorneys have foregone taking other cases that may create a conflict.');
		} else if (minorC == 1 && numberClients >= 3 && (minorRelation == "Son" || minorRelation == "Daughter")){
			header_text = headerTxtMultiple.concat(client_name_insert_civ, ', have retained Hawkins & Jedziniak, LLC (“attorneys”), to represent us and our ', minorRelation, ', ', c1, ', in our claim(s) against ', defName, '. We understand the attorneys have foregone taking other cases that may create a conflict.');
		} else if (minorC == 1 && numberClients == 2 && minorRelation == "Guardian"){
			header_text = headerTxtSingle.concat(client_name_insert_civ, ', have retained Hawkins & Jedziniak, LLC (“attorneys”), to represent me and ', c1, ', whom I have guardianship over, in our claim(s) against ', defName, '. We understand the attorneys have foregone taking other cases that may create a conflict.');
		} else if (minorC == 1 && numberClients >= 3 && minorRelation == "Guardian"){
			header_text = headerTxtMultiple.concat(client_name_insert_civ, ', have retained Hawkins & Jedziniak, LLC (“attorneys”), to represent us and ', c1, ', whom we have guardianship over, in our claim(s) against ', defName, '. We understand the attorneys have foregone taking other cases that may create a conflict.');
		}

			
	var feeTxtSingle = "I agree to pay the attorneys ";
	var feeTxtMultiple = "We agree to pay the attorneys ";

	var ff_text;
		if (ff_question == 1 && numberClients == 1) {
			ff_text = feeTxtSingle.concat(ff_amount,' at the beginning of my case, and I understand that, Pursuant to Rule 1.5(f) of the Rules of Professional Conduct, the ', ff_amount,' is earned upon receipt and not held in trust. ');
		} else if (ff_question == 1 && numberClients >= 1) {
			ff_text = feeTxtMultiple.concat(ff_amount,' at the beginning of my case, and we understand that, Pursuant to Rule 1.5(f) of the Rules of Professional Conduct, the ', ff_amount,' is earned upon receipt and not held in trust. ');
		} else if (ff_question == 0) {
			ff_text = '';
		}
	
	var cf_text;
		if (cf_question == 1 && numberClients == 1) {
			cf_text = feeTxtSingle.concat(cf_amount,' of all sums recovered through settlement or a verdict before any other sums, costs, or liens are subtracted. ');
		} else if (cf_question == 1 && numberClients >= 2) {
			cf_text = feeTxtMultiple.concat(cf_amount,' of all sums recovered through settlement or a verdict before any other sums, costs, or liens are subtracted. ');
		} else if (cf_question == 0) {
			cf_text = '';
		}
	


			
	// set file location vars
	// ********* CIVIL *********
	var checklistCivilFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/checklist-civil.docx";

	var repAgreeCivilFile;
		if (minorC == 1 && numberClients == 2) {
			repAgreeCivilFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/rep-agree-p2.docx";
		} else if (minorC == 1 && numberClients == 3) {
			repAgreeCivilFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/rep-agree-p3.docx";
		} else if (minorC == 1 && numberClients == 4) {
			repAgreeCivilFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/rep-agree-p4.docx";
		} else if (minorC == 0 && numberClients == 1) {
			repAgreeCivilFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/rep-agree-p1.docx";
		} else if (minorC == 0 && numberClients == 2) {
			repAgreeCivilFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/rep-agree-p2.docx";
		} else if (minorC == 0 && numberClients == 3) {
			repAgreeCivilFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/rep-agree-p3.docx";
		} else if (minorC == 0 && numberClients == 4) {
			repAgreeCivilFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/rep-agree-p4.docx";
		}
	
	var verificationFile;
	var releaseOfCounselFile;
		if (numberClients == 1) {
			verificationFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/verification-p1.docx";
			releaseOfCounselFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/release-of-counsel-p1.docx";
		} else if (numberClients == 2) {
			verificationFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/verification-p2.docx";
			releaseOfCounselFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/release-of-counsel-p2.docx";
		} else if (numberClients == 3) {
			verificationFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/verification-p3.docx";
			releaseOfCounselFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/release-of-counsel-p3.docx";
		} else if (numberClients == 4) {
			verificationFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/verification-p4.docx";
			releaseOfCounselFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/release-of-counsel-p4.docx";
		}
	
	
	// ********* CRIMINAL *********
//		var checklistCriminalFile = 
	var letterOfRepFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/letter-of-rep-criminal.docx";
	var repAgreeCriminalFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/rep-agree-criminal.docx"
	var bradyFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/Rule-5-Brady-motion.docx"
	
	
	
	
	// ************ CIVIL ************
	/* ------------------------------- */
	/* ---------- checklist ---------- */
	/* ------------------------------- */
	if (docTypeSelect == 0 || docTypeSelect == 1) {
		loadFile(checklistCivilFile,function(error,content){
			if (error) { throw error };

			var zip = new PizZip(content);
			var doc;
			try {doc=new window.docxtemplater(zip);} catch(error) {errorHandler(error);}

			doc.setData({
				client_name: client_name_insert_civ
			});
			
			try {doc.render();} catch (error) {errorHandler(error);}
			
			var saveName
			var saveAsPrompt = "Please choose a file name for the client checklist";
			var saveAsDefaultInput = client_name_insert_civ.concat(' checklist.docx');
			
			if (document.getElementById("id_defaultFilename").checked == true) {
				saveName = saveAsDefaultInput;
			} else if (document.getElementById("id_defaultFilename").checked == false) {
				saveName = prompt(saveAsPrompt, saveAsDefaultInput);
			}
			
			var out=doc.getZip().generate({
				type:"blob",
				mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
			})
			saveAs(out,saveName)	
		})
	}
	
	/* ------------------------------- */
	/* -------- rep agreement -------- */
	/* ------------------------------- */
	if (docTypeSelect == 0 || docTypeSelect == 2) {
		loadFile(repAgreeCivilFile,function(error,content){
			if (error) { throw error };

			var zip = new PizZip(content);
			var doc;
			try {doc=new window.docxtemplater(zip);} catch(error) {errorHandler(error);}
			
			doc.setData({
				header_text_tag: header_text,
				fixed_fee_tag: ff_text,
				contingency_fee_tag: cf_text
			});
			
			try {doc.render();} catch (error) {errorHandler(error);}

			var saveName
			var saveAsPrompt = "Please choose a file name for the representation agreement";
			var saveAsDefaultInput = client_name_insert_civ.concat(' representation agreement.docx');
			
			if (document.getElementById("id_defaultFilename").checked == true) {
				saveName = saveAsDefaultInput;
			} else if (document.getElementById("id_defaultFilename").checked == false) {
				saveName = prompt(saveAsPrompt, saveAsDefaultInput);
			}
			
			var out=doc.getZip().generate({
				type:"blob",
				mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
			})
			saveAs(out,saveName)
		})
	}
		
	/* -------------------------------- */
	/* ------ release of counsel ------ */
	/* -------------------------------- */
	if (docTypeSelect == 0 || docTypeSelect == 3) {			
		loadFile(releaseOfCounselFile,function(error,content){
			if (error) { throw error };

			var zip = new PizZip(content);
			var doc;
			try {doc=new window.docxtemplater(zip);} catch(error) {errorHandler(error);}

			doc.setData({
				client_name: client_name_insert_civ,
				client_1: c1,
				client_2: c2,
				client_3: c3,
				client_4: c4
			});
			
			try {doc.render();} catch (error) {errorHandler(error);}

			var saveName
			var saveAsPrompt = "Please choose a file name for the release of counsel";
			var saveAsDefaultInput = client_name_insert_civ.concat(' release of counsel.docx');
			
			if (document.getElementById("id_defaultFilename").checked == true) {
				saveName = saveAsDefaultInput;
			} else if (document.getElementById("id_defaultFilename").checked == false) {
				saveName = prompt(saveAsPrompt, saveAsDefaultInput);
			}
			
			var out=doc.getZip().generate({
				type:"blob",
				mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
			})
			saveAs(out,saveName)
		})
	}

	/* -------------------------------- */
	/* --------- verification --------- */
	/* -------------------------------- */
	if (docTypeSelect == 0 || docTypeSelect == 4) {	
		loadFile(verificationFile,function(error,content){
			if (error) { throw error };
			
			var zip = new PizZip(content);
			var doc;
			try {doc=new window.docxtemplater(zip);} catch(error) {errorHandler(error);}

			doc.setData({
				client_1: c1,
				client_2: c2,
				client_3: c3,
				client_4: c4
			});
			
			try {doc.render();} catch (error) {errorHandler(error);}

			var saveName
			var saveAsPrompt = "Please choose a file name for the verification";
			var saveAsDefaultInput = client_name_insert_civ.concat(' verification.docx');
			
			if (document.getElementById("id_defaultFilename").checked == true) {
				saveName = saveAsDefaultInput;
			} else if (document.getElementById("id_defaultFilename").checked == false) {
				saveName = prompt(saveAsPrompt, saveAsDefaultInput);
			}
			
			var out=doc.getZip().generate({
				type:"blob",
				mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
			})
			saveAs(out,saveName)
		})
	}
	
	// ************ CRIMINAL ************
	/* -------------------------------- */
	/* -------- case checklist -------- */
	/* -------------------------------- */
	/*if (docTypeSelect == 5 || docTypeSelect == 6) {
		loadFile(checklistCriminalFile,function(error,content){
			if (error) { throw error };
			
			var zip = new PizZip(content);
			var doc;
			try {doc=new window.docxtemplater(zip);} catch(error) {errorHandler(error);}

			doc.setData({
				client_name: defendantName_Crim
			});
			
			try {doc.render();} catch (error) {errorHandler(error);}

			var saveName
			var saveAsPrompt = "Please choose a file name for the checklist";
			var saveAsDefaultInput = defendantName_Crim.concat(' checklist.docx');
			
			if (document.getElementById("id_defaultFilename").checked == true) {
				saveName = saveAsDefaultInput;
			} else if (document.getElementById("id_defaultFilename").checked == false) {
				saveName = prompt(saveAsPrompt, saveAsDefaultInput);
			}
			
			var out=doc.getZip().generate({
				type:"blob",
				mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
			})
			saveAs(out,saveName)
		})
	} */


	/* ------------------------------- */
	/* -------- letter of rep -------- */
	/* ------------------------------- */
	if (docTypeSelect == 5 || docTypeSelect == 7) {
		loadFile(letterOfRepFile,function(error,content){
			if (error) { throw error };
			
			var zip = new PizZip(content);
			var doc;
			try {doc=new window.docxtemplater(zip);} catch(error) {errorHandler(error);}

			doc.setData({
				filing_date: filingDate_Crim_Formatted,
				defendant_name: defendantName_Crim,
				ticket_warrant_number: ticketOrWarrantNumberText,
				attorney_filing: filingAttorney_Crim,
			});
			
			try {doc.render();} catch (error) {errorHandler(error);}

			var saveName
			var saveAsPrompt = "Please choose a file name for the letter of representation";
			var saveAsDefaultInput = defendantName_Crim.concat(' letter of rep.docx');
			
			if (document.getElementById("id_defaultFilename").checked == true) {
				saveName = saveAsDefaultInput;
			} else if (document.getElementById("id_defaultFilename").checked == false) {
				saveName = prompt(saveAsPrompt, saveAsDefaultInput);
			}
			
			var out=doc.getZip().generate({
				type:"blob",
				mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
			})
			saveAs(out,saveName)
		})
	}
	
	
	/* ------------------------------- */
	/* -------- rep agreement -------- */
	/* ------------------------------- */
	if (docTypeSelect == 5 || docTypeSelect == 8) {
		loadFile(repAgreeCriminalFile,function(error,content){
			if (error) { throw error };
			
			var zip = new PizZip(content);
			var doc;
			try {doc=new window.docxtemplater(zip);} catch(error) {errorHandler(error);}

			doc.setData({
				defendant_name: defendantName_Crim,
				ticket_warrant_number: ticketOrWarrantNumber,
				fixed_fee_crim: initialFF,
			});
			
			try {doc.render();} catch (error) {errorHandler(error);}

			var saveName
			var saveAsPrompt = "Please choose a file name for the representation agreement";
			var saveAsDefaultInput = defendantName_Crim.concat(' representation agreement.docx');
			
			if (document.getElementById("id_defaultFilename").checked == true) {
				saveName = saveAsDefaultInput;
			} else if (document.getElementById("id_defaultFilename").checked == false) {
				saveName = prompt(saveAsPrompt, saveAsDefaultInput);
			}
			
			var out=doc.getZip().generate({
				type:"blob",
				mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
			})
			saveAs(out,saveName)
		})
	}
	
	
	/* -------------------------------- */
	/* --------- rule 5/Brady --------- */
	/* -------------------------------- */
	if (docTypeSelect == 5 || docTypeSelect == 9) {
		loadFile(bradyFile,function(error,content){
			if (error) { throw error };
			
			var zip = new PizZip(content);
			var doc;
			try {doc=new window.docxtemplater(zip);} catch(error) {errorHandler(error);}

			doc.setData({
				// header
				county_name: filingCounty_Crim.toUpperCase(),
				defendant_name: defendantName_Crim,
				court_name: filingCourt_Crim.toUpperCase(),
				ticket_or_warrant: ticketOrWarrantCheck.toUpperCase(),
				ticket_or_warrant_number: ticketOrWarrantNumber.toUpperCase(),
				
				// body
				
				// footer
				footer_firm_name: C_FIRM_NAME.toUpperCase(),
				footer_attorney_1: C_ATTORNEY_1_NAME_NUMBER,
				footer_attorney_2: C_ATTORNEY_2_NAME_NUMBER,
				footer_address_1: C_ADDRESS_LINE_1,
				footer_address_2: C_ADDRESS_LINE_2,
				footer_telephone: C_FIRM_PHONE,
				footer_facsimile: C_FIRM_FAX,
				footer_attorney_1_email: C_ATTORNEY_1_EMAIL,
				footer_attorney_2_email: C_ATTORNEY_2_EMAIL,
				footer_firm_location: C_CITY_STATE,
				filing_date: filingDate_Crim_Formatted,
			});
			
			try {doc.render();} catch (error) {errorHandler(error);}

			var saveName
			var saveAsPrompt = "Please choose a file name for the rule 5/Brady motion";
			var saveAsDefaultInput = defendantName_Crim.concat(' rule 5 Brady.docx');
			
			if (document.getElementById("id_defaultFilename").checked == true) {
				saveName = saveAsDefaultInput;
			} else if (document.getElementById("id_defaultFilename").checked == false) {
				saveName = prompt(saveAsPrompt, saveAsDefaultInput);
			}
			
			var out=doc.getZip().generate({
				type:"blob",
				mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
			})
			saveAs(out,saveName)
		})
	}
}





// ************ misc functions ************
function loadFile(url,callback){
	PizZipUtils.getBinaryContent(url,callback);
}

// The error object contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
function replaceErrors(key, value) {
	if (value instanceof Error) {
		return Object.getOwnPropertyNames(value).reduce(function(error, key) {
			error[key] = value[key];
			return error;
		}, {});
	}
	return value;
}

function errorHandler(error) {
	console.log(JSON.stringify({error: error}, replaceErrors));

	if (error.properties && error.properties.errors instanceof Array) {
		const errorMessages = error.properties.errors.map(function (error) {
			return error.properties.explanation;
		}).join("\n");
		console.log('errorMessages', errorMessages);
		// errorMessages is a humanly readable message looking like this :
		// 'The tag beginning with "foobar" is unopened'
	}
	throw error;
}


