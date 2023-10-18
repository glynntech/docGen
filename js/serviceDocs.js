
function docSelectChange(selectObj) {
	
	var docTypeSelect = document.getElementById("id_docSelect").value;
	var numberDefServed = document.getElementById("id_defendantsServed").value;

// unhide inputs based on document
	if (docTypeSelect == "AccServ") {
		document.getElementById("AcceptanceService").style.display = "block";
		document.getElementById("AffidavitDefault").style.display = "none";
		document.getElementById("AffidavitService").style.display = "none";
		document.getElementById("CertificateService").style.display = "none";
		document.getElementById("buttonVisual").style.display = "block";
	} else if (docTypeSelect == "AffDef") {
		document.getElementById("AcceptanceService").style.display = "none";
		document.getElementById("AffidavitDefault").style.display = "block";
		document.getElementById("AffidavitService").style.display = "none";
		document.getElementById("CertificateService").style.display = "none";
		document.getElementById("buttonVisual").style.display = "block";
	} else if (docTypeSelect == "AffServ") {
		document.getElementById("AcceptanceService").style.display = "none";
		document.getElementById("AffidavitDefault").style.display = "none";
		document.getElementById("AffidavitService").style.display = "block";
		document.getElementById("CertificateService").style.display = "none";
		document.getElementById("buttonVisual").style.display = "block";
	} else if (docTypeSelect == "CertServ") {
		document.getElementById("AcceptanceService").style.display = "none";
		document.getElementById("AffidavitDefault").style.display = "none";
		document.getElementById("AffidavitService").style.display = "none";
		document.getElementById("CertificateService").style.display = "block";
		document.getElementById("buttonVisual").style.display = "block";
	} else if (docTypeSelect == "n/a") {
		document.getElementById("AcceptanceService").style.display = "none";
		document.getElementById("AffidavitDefault").style.display = "none";
		document.getElementById("AffidavitService").style.display = "none";
		document.getElementById("CertificateService").style.display = "none";
		document.getElementById("buttonVisual").style.display = "none";
	}
}


// ungrey out inputs
	// filing court for state
function jurisdictionChange(selectObj) {
	var jurisdiction = document.getElementById("id_jurisdiction").value;

	if (jurisdiction == "state"){
		document.getElementById("id_filingCourt").disabled = false;
	} else if (jurisdiction == "federal"){
		document.getElementById("id_filingCourt").disabled = true;
	}
}

	// plaintiff sex
function plaintiffNumberChange(selectObj) {
	var pNum = document.getElementById("id_plaintiffNumber").value;
	
	if (pNum == 1){
		document.getElementById("id_plaintiffSex").disabled = true;
	} else if (pNum == 0){
		document.getElementById("id_plaintiffSex").disabled = false;
	}
}
	

	// affidavit of service
function defendantsServedChange(selectObj) {

	var numberDefServed = document.getElementById("id_defendantsServed").value;

	if (numberDefServed >= 2) {
		document.getElementById("id_servedDefTwoName").disabled = false;
		document.getElementById("id_servedDefTwoAddress").disabled = false;
		document.getElementById("id_servedDefTwoDate").disabled = false;
		document.getElementById("id_servedDefTwoTime").disabled = false;
		document.getElementById("id_servedDefTwoAMPM").disabled = false;
		if (numberDefServed >= 3) {
			document.getElementById("id_servedDefThreeName").disabled = false;
			document.getElementById("id_servedDefThreeAddress").disabled = false;
			document.getElementById("id_servedDefThreeDate").disabled = false;
			document.getElementById("id_servedDefThreeTime").disabled = false;
			document.getElementById("id_servedDefThreeAMPM").disabled = false;
			if (numberDefServed >= 4) {
				document.getElementById("id_servedDefFourName").disabled = false;
				document.getElementById("id_servedDefFourAddress").disabled = false;
				document.getElementById("id_servedDefFourDate").disabled = false;
				document.getElementById("id_servedDefFourTime").disabled = false;
				document.getElementById("id_servedDefFourAMPM").disabled = false;
			}
		}
	}
	
	if (numberDefServed < 2) {
		document.getElementById("id_servedDefTwoName").disabled = true;
		document.getElementById("id_servedDefTwoAddress").disabled = true;
		document.getElementById("id_servedDefTwoDate").disabled = true;
		document.getElementById("id_servedDefTwoTime").disabled = true;
		document.getElementById("id_servedDefTwoAMPM").disabled = true;
	}
	if (numberDefServed < 3) {
		document.getElementById("id_servedDefThreeName").disabled = true;
		document.getElementById("id_servedDefThreeAddress").disabled = true;
		document.getElementById("id_servedDefThreeDate").disabled = true;
		document.getElementById("id_servedDefThreeTime").disabled = true;
		document.getElementById("id_servedDefThreeAMPM").disabled = true;
	}
	if (numberDefServed < 4) {
		document.getElementById("id_servedDefFourName").disabled = true;
		document.getElementById("id_servedDefFourAddress").disabled = true;
		document.getElementById("id_servedDefFourDate").disabled = true;
		document.getElementById("id_servedDefFourTime").disabled = true;
		document.getElementById("id_servedDefFourAMPM").disabled = true;
	}

}


	// certificate of service
function numberPartiesMailedChange(selectObj) {

	var numMailed = document.getElementById("id_numberPartiesMailed").value;

	if (numMailed == 1) {
		document.getElementById("service_CoS1").style.display = "block";
		document.getElementById("service_CoS2").style.display = "none";
		document.getElementById("service_CoS3").style.display = "none";
		document.getElementById("service_CoS4").style.display = "none";	
	} else if (numMailed == 2) {
		document.getElementById("service_CoS1").style.display = "block";
		document.getElementById("service_CoS2").style.display = "block";
		document.getElementById("service_CoS3").style.display = "none";
		document.getElementById("service_CoS4").style.display = "none";	
	} else if (numMailed == 3) {
		document.getElementById("service_CoS1").style.display = "block";
		document.getElementById("service_CoS2").style.display = "block";
		document.getElementById("service_CoS3").style.display = "block";
		document.getElementById("service_CoS4").style.display = "none";	
	} else if (numMailed == 4) {
		document.getElementById("service_CoS1").style.display = "block";
		document.getElementById("service_CoS2").style.display = "block";
		document.getElementById("service_CoS3").style.display = "block";
		document.getElementById("service_CoS4").style.display = "block";	
	}
}


function generate() {
	
	// set constants
	const C_FIRM_NAME = "Hawkins & Jedziniak, LLC";
	const C_ADDRESS_LINE_1 = "1225 South Church Street";
	const C_ADDRESS_LINE_2 = "Greenville, South Carolina 29605";
	const C_FIRM_PHONE = "(864) 275-8142 (telephone)";
	const C_FIRM_FAX = "(864) 752-0911 (facsimile)";
	const C_ATTORNEY_1_EMAIL = "josh@hjllcsc.com";
	const C_ATTORNEY_2_EMAIL = "helena@hjllcsc.com";
	const C_PARALEGAL_NAME = "Monica Brody";
	const C_CITY_STATE = "Greenville, South Carolina";
	
	// use correct bar number
	var C_ATTORNEY_1_NAME_NUMBER;
	var C_ATTORNEY_2_NAME_NUMBER;
	
	if (jurisdiction == "state") {
		C_ATTORNEY_1_NAME_NUMBER = "Joshua T. Hawkins, S.C. Bar #78470";
		C_ATTORNEY_2_NAME_NUMBER = "Helena L. Jedziniak, S.C. Bar #100825";
	} else if (jurisdiction == "federal") {
		C_ATTORNEY_1_NAME_NUMBER = "Joshua T. Hawkins, Fed. Bar #11418";
		C_ATTORNEY_2_NAME_NUMBER = "Helena L. Jedziniak, Fed. Bar #12809";	
	}
	
	
	// set todays date as MMMM DD, YYYY
	var d = new Date();
	var monthWord;
	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	monthWord = months[d.getMonth()];
	
	todaysDate_MMMDDYYYY = monthWord + " " + d.getDate() + ", " + d.getFullYear();
	
	
	
	var docTypeSelect = document.getElementById("id_docSelect").value;
	var jurisdiction = document.getElementById("id_jurisdiction").value;
	
	// ******* grab variables from html elements *******
	var filingCounty = document.getElementById("id_filingCounty").value;
	var filingCourt = document.getElementById("id_filingCourt").value;
	var caseNumber = document.getElementById("id_caseNumber").value;
	
	var pName = document.getElementById("id_plaintiffName").value;
		var pNumber = document.getElementById("id_plaintiffNumber").value;
		var pPlural;
			if (pNumber == 1){pPlural = "Plaintiffs";}
			else if (pNumber == 0){pPlural = "Plaintiff";}
		var pSex = document.getElementById("id_plaintiffSex").value;
	
	var dName = document.getElementById("id_defendantName").value;
		var dNumber = document.getElementById("id_defendantNumber").value;
		var dPlural;
			if (dNumber == 1){dPlural = "Defendants";}
			else if (dNumber == 0){dPlural = "Defendant";}
	
	// acceptance of service
	var accOS_attorneyAccepting = document.getElementById("id_attorneyAccepting").value;
	
	// affidavit of default
	var affOD_defendantDefault = document.getElementById("id_defendantInDefault").value;
		if (affOD_defendantDefault == ""){
			affOD_defendantDefault = dName
		}
	var affOD_attorneyProducing = document.getElementById("id_attorneyProducing").value;
	var affOD_summonsFiled = document.getElementById("id_summonsFiledDate").value;
	var affOD_summonsServed = document.getElementById("id_summonsServedDate").value;
	
	// affidavit of service
	var affOS_StarterText = "Further, I served the SUMMONS, COMPLAINT, VERIFICATION, and DISCOVERY REQUESTS on ";
		var affOS_defOneText;
		var affOS_defTwoText;
		var affOS_defThreeText;
		var affOS_defFourText;
	
	var affOS_processServer = document.getElementById("id_processServer").value;
	var affOS_defendantsNumberServed = document.getElementById("id_defendantsServed").value;
		
		var affOS_defOneName = document.getElementById("id_servedDefOneName").value;
			var affOS_defOneAddress = document.getElementById("id_servedDefOneAddress").value;
			var affOS_defOneServedDate = document.getElementById("id_servedDefOneDate").value;
			var affOS_defOneServedTime = document.getElementById("id_servedDefOneTime").value;
			var affOS_defOneServedAMPM = document.getElementById("id_servedDefOneAMPM").value;
				var affOS_defOneText = affOS_StarterText.concat(affOS_defOneName, ' on ', affOS_defOneServedDate, ', at ', affOS_defOneServedTime, ' ', affOS_defOneServedAMPM, ', by personally delivering the same to them at ', affOS_defOneAddress, '.');
			
		var affOS_defTwoName = document.getElementById("id_servedDefTwoName").value;
			var affOS_defTwoAddress = document.getElementById("id_servedDefTwoAddress").value;
			var affOS_defTwoServedDate = document.getElementById("id_servedDefTwoDate").value;
			var affOS_defTwoServedTime = document.getElementById("id_servedDefTwoTime").value;
			var affOS_defTwoServedAMPM = document.getElementById("id_servedDefTwoAMPM").value;
				if (affOS_defendantsNumberServed >= 2) {
					affOS_defTwoText = affOS_StarterText.concat(affOS_defTwoName, ' on ', affOS_defTwoServedDate, ', at ', affOS_defTwoServedTime, ' ', affOS_defTwoServedAMPM, ', by personally delivering the same to them at ', affOS_defTwoAddress, '.');
				} else if (affOS_defendantsNumberServed < 2) {
					affOS_defTwoText = "";
				}

		var affOS_defThreeName = document.getElementById("id_servedDefThreeName").value;
			var affOS_defThreeAddress = document.getElementById("id_servedDefThreeAddress").value;
			var affOS_defThreeServedDate = document.getElementById("id_servedDefThreeDate").value;
			var affOS_defThreeServedTime = document.getElementById("id_servedDefThreeTime").value;
			var affOS_defThreeServedAMPM = document.getElementById("id_servedDefThreeAMPM").value;
				if (affOS_defendantsNumberServed >= 3) {
					affOS_defThreeText = affOS_StarterText.concat(affOS_defThreeName, ' on ', affOS_defThreeServedDate, ', at ', affOS_defThreeServedTime, ' ', affOS_defThreeServedAMPM, ', by personally delivering the same to them at ', affOS_defThreeAddress, '.');
				} else if (affOS_defendantsNumberServed < 3) {
					affOS_defThreeText = "";
				}
		
		var affOS_defFourName = document.getElementById("id_servedDefFourName").value;
			var affOS_defFourAddress = document.getElementById("id_servedDefFourAddress").value;
			var affOS_defFourServedDate = document.getElementById("id_servedDefFourDate").value;
			var affOS_defFourServedTime = document.getElementById("id_servedDefFourTime").value;
			var affOS_defFourServedAMPM = document.getElementById("id_servedDefFourAMPM").value;
				if (affOS_defendantsNumberServed >= 4) {
					affOS_defFourText = affOS_StarterText.concat(affOS_defFourName, ' on ', affOS_defFourServedDate, ', at ', affOS_defFourServedTime, ' ', affOS_defFourServedAMPM, ', by personally delivering the same to them at ', affOS_defFourAddress, '.');
				} else if (affOS_defendantsNumberServed < 4) {
					affOS_defFourText = "";
				}


	// certificate of service
	var certOS_docsMailed = document.getElementById("id_documentsMailed").value;
	var certOS_numberParties = document.getElementById("id_numberPartiesMailed").value;
		
	var certOS_party1Name = newLineConcat(document.getElementById("id_mailedPartyOneName").value);
		var certOS_party1Address1 = newLineConcat(document.getElementById("id_mailedPartyOneAddressOne").value);
		var certOS_party1Address2 = newLineConcat(document.getElementById("id_mailedPartyOneAddressTwo").value);
		var certOS_party1Address3 = newLineConcat(document.getElementById("id_mailedPartyOneAddressThree").value);

		var certOS_array1_full = [certOS_party1Name, certOS_party1Address1, certOS_party1Address2, certOS_party1Address3];
		var certOS_array1 = certOS_array1_full.filter(Boolean);
		var certOS_array1_string = certOS_array1.join("");


	var certOS_party2Name = newLineConcat(document.getElementById("id_mailedPartyTwoName").value);
		var certOS_party2Address1 = newLineConcat(document.getElementById("id_mailedPartyTwoAddressOne").value);
		var certOS_party2Address2 = newLineConcat(document.getElementById("id_mailedPartyTwoAddressTwo").value);
		var certOS_party2Address3 = newLineConcat(document.getElementById("id_mailedPartyTwoAddressThree").value);

		var certOS_array2_full = [certOS_party2Name, certOS_party2Address1, certOS_party2Address2, certOS_party2Address3];
		var certOS_array2 = certOS_array2_full.filter(Boolean);
		var certOS_array2_string = certOS_array2.join("");


	var certOS_party3Name = newLineConcat(document.getElementById("id_mailedPartyThreeName").value);
		var certOS_party3Address1 = newLineConcat(document.getElementById("id_mailedPartyThreeAddressOne").value);
		var certOS_party3Address2 = newLineConcat(document.getElementById("id_mailedPartyThreeAddressTwo").value);
		var certOS_party3Address3 = newLineConcat(document.getElementById("id_mailedPartyThreeAddressThree").value);

		var certOS_array3_full = [certOS_party3Name, certOS_party3Address1, certOS_party3Address2, certOS_party3Address3];
		var certOS_array3 = certOS_array3_full.filter(Boolean);
		var certOS_array3_string = certOS_array3.join("");


	var certOS_party4Name = newLineConcat(document.getElementById("id_mailedPartyFourName").value);
		var certOS_party4Address1 = newLineConcat(document.getElementById("id_mailedPartyFourAddressOne").value);
		var certOS_party4Address2 = newLineConcat(document.getElementById("id_mailedPartyFourAddressTwo").value);
		var certOS_party4Address3 = newLineConcat(document.getElementById("id_mailedPartyFourAddressThree").value);

		var certOS_array4_full = [certOS_party4Name, certOS_party4Address1, certOS_party4Address2, certOS_party4Address3];
		var certOS_array4 = certOS_array4_full.filter(Boolean);
		var certOS_array4_string = certOS_array4.join("");

	

	// input checks - ALL
	if (jurisdiction == "n/a"){
		alert ("Please select a jurisdiction to file in")
			return;
	} else if (filingCounty == "n/a"){
		alert ("Please select a filing county")
			return;
	} else if (filingCourt == "n/a" && jurisdiction == "state"){
		alert ("Please select a filing court")
			return;
	} else if (caseNumber == ""){
		alert ("Please enter a case number")
			return;
	} else if (pName == ""){
		alert ("Please enter a name for the plaintiff(s)")
			return;
	} else if (dName == ""){
		alert ("Please enter a name for the defendant(s)")
			return;
	
	// input checks - ACCEPTANCE OF SERVICE
	} else if (docTypeSelect == "AccServ" && accOS_attorneyAccepting == "n/a"){
		alert ("Please select the attorney who is accepting service")
			return;

	// input checks - AFFIDAVIT OF DEFAULT
	} else if (docTypeSelect == "AffDef" && affOD_attorneyProducing == ""){
		alert ("Please select the attorney who is producing the document")
			return;
	} else if (docTypeSelect == "AffDef" && affOD_summonsFiled == ""){
		alert ("Please enter the date that the summons and complaint were filed")
			return;
	} else if (docTypeSelect == "AffDef" && affOD_summonsServed == ""){
		alert ("Please enter the date that the summons and complaint were served")
			return;

	// input checks - AFFIDAVIT OF SERVICE
	} else if (docTypeSelect == "AffServ" && affOS_processServer == ""){
		alert ("Please enter the name of the process server")
			return;
	} else if (docTypeSelect == "AffServ" && affOS_defOneName == ""){
		alert ("Please enter the name of defendant #1")
			return;
	} else if (docTypeSelect == "AffServ" && affOS_defOneAddress == ""){
		alert ("Please enter the address where defendant #1 was served")
			return;
	} else if (docTypeSelect == "AffServ" && affOS_defOneServedDate == ""){
		alert ("Please enter the date that defendant #1 was served")
			return;
	} else if (docTypeSelect == "AffServ" && affOS_defOneServedTime == ""){
		alert ("Please enter the approximate time that defendant #1 was served")
			return;
	} else if (docTypeSelect == "AffServ" && affOS_defendantsNumberServed >= 2 && affOS_defTwoName == ""){
		alert ("Please enter the name of defendant #2")
			return;
	} else if (docTypeSelect == "AffServ" && affOS_defendantsNumberServed >= 2 && affOS_defTwoAddress == ""){
		alert ("Please enter the address where defendant #2 was served")
			return;
	} else if (docTypeSelect == "AffServ" && affOS_defendantsNumberServed >= 2 && affOS_defTwoServedDate == ""){
		alert ("Please enter the date that defendant #2 was served")
			return;
	} else if (docTypeSelect == "AffServ" && affOS_defendantsNumberServed >= 2 && affOS_defTwoServedTime == ""){
		alert ("Please enter the approximate time that defendant #2 was served")
			return;
	} else if (docTypeSelect == "AffServ" && affOS_defendantsNumberServed >= 3 && affOS_defThreeName == ""){
			alert ("Please enter the name of defendant #3")
				return;
	} else if (docTypeSelect == "AffServ" && affOS_defendantsNumberServed >= 3 && affOS_defThreeAddress == ""){
		alert ("Please enter the address where defendant #3 was served")
			return;
	} else if (docTypeSelect == "AffServ" && affOS_defendantsNumberServed >= 3 && affOS_defThreeServedDate == ""){
		alert ("Please enter the date that defendant #3 was served")
			return;
	} else if (docTypeSelect == "AffServ" && affOS_defendantsNumberServed >= 3 && affOS_defThreeServedTime == ""){
		alert ("Please enter the approximate time that defendant #3 was served")
			return;
	} else if (docTypeSelect == "AffServ" && affOS_defendantsNumberServed >= 4 && affOS_defFourName == ""){
		alert ("Please enter the name of defendant #4")
			return;
	} else if (docTypeSelect == "AffServ" && affOS_defendantsNumberServed >= 4 && affOS_defFourAddress == ""){
		alert ("Please enter the address where defendant #4 was served")
			return;
	} else if (docTypeSelect == "AffServ" && affOS_defendantsNumberServed >= 4 && affOS_defFourServedDate == ""){
		alert ("Please enter the date that defendant #4 was served")
			return;
	} else if (docTypeSelect == "AffServ" && affOS_defendantsNumberServed >= 4 && affOS_defFourServedTime == ""){
		alert ("Please enter the approximate time that defendant #4 was served")
			return;
	
	// input checks - CERTIFICATE OF SERVICE
	} else if (docTypeSelect == "CertServ" && certOS_docsMailed == ""){
		alert ("Please enter the name of the documents being mailed")
			return;
	} else if (docTypeSelect == "CertServ" && certOS_party1Name == ""){
		alert ("Please enter the name of party #1");
			return;
	} else if (docTypeSelect == "CertServ" && certOS_party1Address1 == ""){
		alert ("Please enter at least the first line of party #1's address")
			return;
	} else if (docTypeSelect == "CertServ" && certOS_numberParties >= 2 && certOS_party2Name == ""){
		alert ("Please enter the name of party #2")
			return;
	} else if (docTypeSelect == "CertServ" && certOS_numberParties >= 2 && certOS_party2Address1 == ""){
		alert ("Please enter at least the first line of party #2's address")
			return;
	} else if (docTypeSelect == "CertServ" && certOS_numberParties >= 3 && certOS_party3Name == ""){
		alert ("Please enter the name of party #3");
			return;
	} else if (docTypeSelect == "CertServ" && certOS_numberParties >= 3 && certOS_party3Address1 == ""){
		alert ("Please enter at least the first line of party #3's address")
			return;
	} else if (docTypeSelect == "CertServ" && certOS_numberParties >= 4 && certOS_party4Name == ""){
		alert ("Please enter the name of party #4");
			return;
	} else if (docTypeSelect == "CertServ" && certOS_numberParties >= 4 && certOS_party4Address1 == ""){
		alert ("Please enter at least the first line of party #4's address")
			return;
	} else {
	}


	// set file location variable
	var templateFile;
		if (docTypeSelect == "AccServ" && jurisdiction == "federal"){
			templateFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/acceptance-federal.docx";
		} else if (docTypeSelect == "AccServ" && jurisdiction == "state"){
			templateFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/acceptance-state.docx";
		} else if (docTypeSelect == "AffDef" && jurisdiction == "federal"){
			templateFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/affidavit-of-default-federal.docx";
		} else if (docTypeSelect == "AffDef" && jurisdiction == "state"){
			templateFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/affidavit-of-default-state.docx";
		} else if (docTypeSelect == "AffServ" && jurisdiction == "federal"){
			templateFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/affidavit-of-service-federal.docx";
		} else if (docTypeSelect == "AffServ" && jurisdiction == "state"){
			templateFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/affidavit-of-service-state-new.docx";
		} else if (docTypeSelect == "CertServ" && jurisdiction == "federal"){
			templateFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/06/certificate-of-service-federal.docx";
		} else if (docTypeSelect == "CertServ" && jurisdiction == "state"){
			templateFile = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/06/certificate-of-service-state.docx";
		}
	
	
	
	loadFile(templateFile,function(error,content){
		if (error) { throw error };
		
		var zip = new PizZip(content);
		var insertNewLine = "";
		var doc;
		
		try {doc=new window.docxtemplater(zip, {paragraphLoop:true, linebreaks:true});} catch(error) {errorHandler(error);}
		

		if (docTypeSelect == "AccServ" || docTypeSelect == "AffDef"){
			doc.setData({
				"county_name_allCaps": filingCounty.toUpperCase(),
				"county_name": filingCounty,
				"court_name_allCaps": filingCourt.toUpperCase(),
				"court_name": filingCourt,
				"case_number": caseNumber.toUpperCase(),
				"plaintiff_name": pName,
				"plaintiff_number": pPlural,
				"plaintiff_sex": pSex,
				"defendant_name": dName,
				"defendant_number": dPlural,
					"attorney_name_accOS": accOS_attorneyAccepting,
					"which_defendant": affOD_defendantDefault,
					"attorney_name_affOD": affOD_attorneyProducing,
					"summons_complaint_filed": affOD_summonsFiled,
					"summons_complaint_served": affOD_summonsServed,
					"process_server_name": affOS_processServer,
					"documents_mailed": certOS_docsMailed,
				"footer_firm_location": C_CITY_STATE,
				"footer_firm_name": C_FIRM_NAME,
				"footer_paralegal_name": C_PARALEGAL_NAME,
				"current_date": todaysDate_MMMDDYYYY,
				"current_year": d.getFullYear(),
			});
		

		} else if (docTypeSelect == "AffServ"){
			if (affOS_defendantsNumberServed == 1){
				doc.setData({
					"county_name_allCaps": filingCounty.toUpperCase(),
					"county_name": filingCounty,
					"court_name_allCaps": filingCourt.toUpperCase(),
					"court_name": filingCourt,
					"case_number": caseNumber.toUpperCase(),
					"plaintiff_name": pName,
					"plaintiff_number": pPlural,
					"plaintiff_sex": pSex,
					"defendant_name": dName,
					"defendant_number": dPlural,
					"process_server_name": affOS_processServer,
					"defendantTextLoop": [
						{ "defendant_text": affOS_defOneText, "new_line": insertNewLine },
					],
					"footer_firm_location": C_CITY_STATE,
					"footer_firm_name": C_FIRM_NAME,
					"footer_paralegal_name": C_PARALEGAL_NAME,
					"current_date": todaysDate_MMMDDYYYY,
					"current_year": d.getFullYear(),	
				})
			} else if (affOS_defendantsNumberServed == 2){
				doc.setData({
					"county_name_allCaps": filingCounty.toUpperCase(),
					"county_name": filingCounty,
					"court_name_allCaps": filingCourt.toUpperCase(),
					"court_name": filingCourt,
					"case_number": caseNumber.toUpperCase(),
					"plaintiff_name": pName,
					"plaintiff_number": pPlural,
					"plaintiff_sex": pSex,
					"defendant_name": dName,
					"defendant_number": dPlural,
					"process_server_name": affOS_processServer,
					"defendantTextLoop": [
						{ "defendant_text": affOS_defOneText, "new_line": insertNewLine },
						{ "defendant_text": affOS_defTwoText, "new_line": insertNewLine },
					],
					"footer_firm_location": C_CITY_STATE,
					"footer_firm_name": C_FIRM_NAME,
					"footer_paralegal_name": C_PARALEGAL_NAME,
					"current_date": todaysDate_MMMDDYYYY,
					"current_year": d.getFullYear(),
				})
			} else if (affOS_defendantsNumberServed == 3){
				doc.setData({
					"county_name_allCaps": filingCounty.toUpperCase(),
					"county_name": filingCounty,
					"court_name_allCaps": filingCourt.toUpperCase(),
					"court_name": filingCourt,
					"case_number": caseNumber.toUpperCase(),
					"plaintiff_name": pName,
					"plaintiff_number": pPlural,
					"plaintiff_sex": pSex,
					"defendant_name": dName,
					"defendant_number": dPlural,
					"process_server_name": affOS_processServer,
					"defendantTextLoop": [
						{ "defendant_text": affOS_defOneText, "new_line": insertNewLine },
						{ "defendant_text": affOS_defTwoText, "new_line": insertNewLine },
						{ "defendant_text": affOS_defThreeText, "new_line": insertNewLine },
					],
					"footer_firm_location": C_CITY_STATE,
					"footer_firm_name": C_FIRM_NAME,
					"footer_paralegal_name": C_PARALEGAL_NAME,
					"current_date": todaysDate_MMMDDYYYY,
					"current_year": d.getFullYear(),
				})
			} else if (affOS_defendantsNumberServed == 4){
				doc.setData({
					"county_name_allCaps": filingCounty.toUpperCase(),
					"county_name": filingCounty,
					"court_name_allCaps": filingCourt.toUpperCase(),
					"court_name": filingCourt,
					"case_number": caseNumber.toUpperCase(),
					"plaintiff_name": pName,
					"plaintiff_number": pPlural,
					"plaintiff_sex": pSex,
					"defendant_name": dName,
					"defendant_number": dPlural,
					"process_server_name": affOS_processServer,
					"defendantTextLoop": [
						{ "defendant_text": affOS_defOneText, "new_line": insertNewLine },
						{ "defendant_text": affOS_defTwoText, "new_line": insertNewLine },
						{ "defendant_text": affOS_defThreeText, "new_line": insertNewLine },
						{ "defendant_text": affOS_defFourText, "new_line": insertNewLine },
					],
					"footer_firm_location": C_CITY_STATE,
					"footer_firm_name": C_FIRM_NAME,
					"footer_paralegal_name": C_PARALEGAL_NAME,
					"current_date": todaysDate_MMMDDYYYY,
					"current_year": d.getFullYear(),
				})
			}
		}
	

		if (docTypeSelect == "CertServ"){
			if (certOS_numberParties == 1){
				doc.setData({
					"county_name_allCaps": filingCounty.toUpperCase(),
					"county_name": filingCounty,
					"court_name_allCaps": filingCourt.toUpperCase(),
					"court_name": filingCourt,
					"case_number": caseNumber.toUpperCase(),
					"plaintiff_name": pName,
					"plaintiff_number": pPlural,
					"plaintiff_sex": pSex,
					"defendant_name": dName,
					"defendant_number": dPlural,
					"addressLoop": [
						{	"party_details": certOS_array1_string,},
				],
					"documents_mailed": certOS_docsMailed,
					"footer_firm_location": C_CITY_STATE,
					"footer_firm_name": C_FIRM_NAME,
					"footer_paralegal_name": C_PARALEGAL_NAME,
					"current_date": todaysDate_MMMDDYYYY,
					"current_year": d.getFullYear(),
				})
			} else if (certOS_numberParties == 2){
				doc.setData({
					"county_name_allCaps": filingCounty.toUpperCase(),
					"county_name": filingCounty,
					"court_name_allCaps": filingCourt.toUpperCase(),
					"court_name": filingCourt,
					"case_number": caseNumber.toUpperCase(),
					"plaintiff_name": pName,
					"plaintiff_number": pPlural,
					"plaintiff_sex": pSex,
					"defendant_name": dName,
					"defendant_number": dPlural,
					"addressLoop": [
						{	"party_details": certOS_array1_string,},
						{	"party_details": certOS_array2_string,},
					],
					"documents_mailed": certOS_docsMailed,
					"footer_firm_location": C_CITY_STATE,
					"footer_firm_name": C_FIRM_NAME,
					"footer_paralegal_name": C_PARALEGAL_NAME,
					"current_date": todaysDate_MMMDDYYYY,
					"current_year": d.getFullYear(),
				})
			} else if (certOS_numberParties == 3){
				doc.setData({
					"county_name_allCaps": filingCounty.toUpperCase(),
					"county_name": filingCounty,
					"court_name_allCaps": filingCourt.toUpperCase(),
					"court_name": filingCourt,
					"case_number": caseNumber.toUpperCase(),
					"plaintiff_name": pName,
					"plaintiff_number": pPlural,
					"plaintiff_sex": pSex,
					"defendant_name": dName,
					"defendant_number": dPlural,
					"addressLoop": [
						{	"party_details": certOS_array1_string,},
						{	"party_details": certOS_array2_string,},
						{	"party_details": certOS_array3_string,},
					],
					"documents_mailed": certOS_docsMailed,
					"footer_firm_location": C_CITY_STATE,
					"footer_firm_name": C_FIRM_NAME,
					"footer_paralegal_name": C_PARALEGAL_NAME,
					"current_date": todaysDate_MMMDDYYYY,
					"current_year": d.getFullYear(),
				})
			} else if (certOS_numberParties == 4){
				doc.setData({
					"county_name_allCaps": filingCounty.toUpperCase(),
					"county_name": filingCounty,
					"court_name_allCaps": filingCourt.toUpperCase(),
					"court_name": filingCourt,
					"case_number": caseNumber.toUpperCase(),
					"plaintiff_name": pName,
					"plaintiff_number": pPlural,
					"plaintiff_sex": pSex,
					"defendant_name": dName,
					"defendant_number": dPlural,
					"addressLoop": [
						{	"party_details": certOS_array1_string,},
						{	"party_details": certOS_array2_string,},
						{	"party_details": certOS_array3_string,},
						{	"party_details": certOS_array4_string,},
					],
					"documents_mailed": certOS_docsMailed,
					"footer_firm_location": C_CITY_STATE,
					"footer_firm_name": C_FIRM_NAME,
					"footer_paralegal_name": C_PARALEGAL_NAME,
					"current_date": todaysDate_MMMDDYYYY,
					"current_year": d.getFullYear(),
				})
			}
		}


		try {doc.render();} catch (error) {errorHandler(error);}
		
		
		var saveName
		var saveAsPrompt
		var saveAsDefaultInput
			if (docTypeSelect == "AccServ") {
				saveAsPrompt = "Please choose a file name for the acceptance of service";
				saveAsDefaultInput = pName.concat(' acceptance of service.docx');
			} else if (docTypeSelect == "AffDef") {
				saveAsPrompt = "Please choose a file name for the affidavit of default";
				saveAsDefaultInput = pName.concat(' affidavit of default.docx');
			} else if (docTypeSelect == "AffServ") {
				saveAsPrompt = "Please choose a file name for the affidavit of service";
				saveAsDefaultInput = pName.concat(' affidavit of service.docx');
			} else if (docTypeSelect == "CertServ") {
				saveAsPrompt = "Please choose a file name for the certificate of service";
				saveAsDefaultInput = pName.concat(' certificate of service.docx');
			}
		
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





function loadFile(url,callback){
	PizZipUtils.getBinaryContent(url,callback);
}

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
	}
	throw error;
}


function addDays(date, days) {
    var result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
}


function newLineConcat(string){
    var newString;
    if (Boolean(string) == true){newString = string.concat("\n")};
    return newString;
}


function extraText(value, extra){
    var newValue;
    if (Boolean(value) == true){newValue = value + extra}
    return newValue
}


function dateFixUp(origDate){
	var d = new Date(origDate);
	var newDate;
	var monthWord;
	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	monthWord = months[d.getMonth()];
	
	newDate = monthWord + " " + d.getDate() + ", " + d.getFullYear();
	return newDate
}





