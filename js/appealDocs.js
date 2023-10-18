function primaryChange(selectObj) {
	
	var docTypeSelect = document.getElementById("id_docSelect").value;
	var jurisdiction = document.getElementById("id_jurisdiction").value;
	

// lock in jurisdiction for certain docs
    if (docTypeSelect == "CertOfService") {
        document.getElementById("id_jurisdiction").value = "federal"
        document.getElementById("id_jurisdiction").disabled = true
        jurisdiction = "federal"
    } else if (docTypeSelect == "ProofOfService") {
        document.getElementById("id_jurisdiction").value = "state"
        document.getElementById("id_jurisdiction").disabled = true
        jurisdiction = "state"
    } else if (docTypeSelect == "TranscriptForm") {
        document.getElementById("id_jurisdiction").value = "state"
        document.getElementById("id_jurisdiction").disabled = true
        jurisdiction = "state"
    } else if (docTypeSelect != "CertOfService" && docTypeSelect != "ProofOfService" && docTypeSelect != "TranscriptForm") {
        document.getElementById("id_jurisdiction").disabled = false
    }

	
// unhide inputs based on document
	if (docTypeSelect == "n/a" || jurisdiction == "n/a") {
        document.getElementById("courtJudge").style.display = "none";
        document.getElementById("order").style.display = "none";
        document.getElementById("proceeding").style.display = "none";
        document.getElementById("clerk").style.display = "none";
        document.getElementById("courtReporter").style.display = "none";
        document.getElementById("partiesMailed").style.display = "none";
        document.getElementById("buttonVisual").style.display = "none";

        // ungrey inputs
            document.getElementById("id_attorneyFiling").disabled = false;

            document.getElementById("id_circuitCourtNum").disabled = false;
            document.getElementById("id_courtType").disabled = false;
            document.getElementById("id_judgeFirstName").disabled = false;
            document.getElementById("id_judgeLastName").disabled = false;
            document.getElementById("id_judgeAddress1").disabled = false;
            document.getElementById("id_judgeAddress2").disabled = false;
            document.getElementById("id_judgeAddress3").disabled = false;

            document.getElementById("id_orderIssuedDate").disabled = false;
            document.getElementById("id_orderReceivedDate").disabled = false;
            document.getElementById("id_orderReceivedHow").disabled = false;
            document.getElementById("id_orderFunction").disabled = false;

    } else if (docTypeSelect == "docPacket" && jurisdiction == "state"){
        document.getElementById("courtJudge").style.display = "block";
        document.getElementById("order").style.display = "block";
        document.getElementById("proceeding").style.display = "block";
        document.getElementById("clerk").style.display = "block";
        document.getElementById("courtReporter").style.display = "block";
        document.getElementById("partiesMailed").style.display = "block";
        document.getElementById("buttonVisual").style.display = "block";
        
        // grey inputs
            document.getElementById("id_attorneyFiling").disabled = false;
            
            document.getElementById("id_circuitCourtNum").disabled = true;
            document.getElementById("id_courtType").disabled = false;
            document.getElementById("id_judgeFirstName").disabled = false;
            document.getElementById("id_judgeLastName").disabled = false;
            document.getElementById("id_judgeAddress1").disabled = false;
            document.getElementById("id_judgeAddress2").disabled = false;
            document.getElementById("id_judgeAddress3").disabled = false;

            document.getElementById("id_orderIssuedDate").disabled = false;
            document.getElementById("id_orderReceivedDate").disabled = false;
            document.getElementById("id_orderReceivedHow").disabled = false;
            document.getElementById("id_orderFunction").disabled = true;
        
    } else if (docTypeSelect == "docPacket" && jurisdiction == "federal"){
        document.getElementById("courtJudge").style.display = "block";
        document.getElementById("order").style.display = "block";
        document.getElementById("proceeding").style.display = "none";
        document.getElementById("clerk").style.display = "none";
        document.getElementById("courtReporter").style.display = "none";
        document.getElementById("partiesMailed").style.display = "block";
        document.getElementById("buttonVisual").style.display = "block";

        // grey inputs
            document.getElementById("id_attorneyFiling").disabled = false;
            
            document.getElementById("id_circuitCourtNum").disabled = false;
            document.getElementById("id_courtType").disabled = false;
            document.getElementById("id_judgeFirstName").disabled = false;
            document.getElementById("id_judgeLastName").disabled = false;
            document.getElementById("id_judgeAddress1").disabled = false;
            document.getElementById("id_judgeAddress2").disabled = false;
            document.getElementById("id_judgeAddress3").disabled = false;

            document.getElementById("id_orderIssuedDate").disabled = false;
            document.getElementById("id_orderReceivedDate").disabled = true;
            document.getElementById("id_orderReceivedHow").disabled = true;
            document.getElementById("id_orderFunction").disabled = false;

    } else if (docTypeSelect == "NoticeOfAppeal" & jurisdiction == "state"){
        document.getElementById("courtJudge").style.display = "block";
        document.getElementById("order").style.display = "block";
        document.getElementById("proceeding").style.display = "none";
        document.getElementById("clerk").style.display = "block";
        document.getElementById("courtReporter").style.display = "none";
        document.getElementById("partiesMailed").style.display = "block";
        document.getElementById("buttonVisual").style.display = "block";
        
        // grey inputs
            document.getElementById("id_attorneyFiling").disabled = false;
            
            document.getElementById("id_circuitCourtNum").disabled = true;
            document.getElementById("id_courtType").disabled = false;
            document.getElementById("id_judgeFirstName").disabled = false;
            document.getElementById("id_judgeLastName").disabled = false;
            document.getElementById("id_judgeAddress1").disabled = false;
            document.getElementById("id_judgeAddress2").disabled = false;
            document.getElementById("id_judgeAddress3").disabled = false;

            document.getElementById("id_orderIssuedDate").disabled = false;
            document.getElementById("id_orderReceivedDate").disabled = false;
            document.getElementById("id_orderReceivedHow").disabled = false;
            document.getElementById("id_orderFunction").disabled = true;

    } else if (docTypeSelect == "NoticeOfAppeal" & jurisdiction == "federal"){
        document.getElementById("courtJudge").style.display = "block";
        document.getElementById("order").style.display = "block";
        document.getElementById("proceeding").style.display = "none";
        document.getElementById("clerk").style.display = "none";
        document.getElementById("courtReporter").style.display = "none";
        document.getElementById("partiesMailed").style.display = "none";
        document.getElementById("buttonVisual").style.display = "block";

        // grey inputs
            document.getElementById("id_attorneyFiling").disabled = false;
            
            document.getElementById("id_circuitCourtNum").disabled = false;
            document.getElementById("id_courtType").disabled = true;
            document.getElementById("id_judgeFirstName").disabled = true;
            document.getElementById("id_judgeLastName").disabled = true;
            document.getElementById("id_judgeAddress1").disabled = true;
            document.getElementById("id_judgeAddress2").disabled = true;
            document.getElementById("id_judgeAddress3").disabled = true;

            document.getElementById("id_orderIssuedDate").disabled = false;
            document.getElementById("id_orderReceivedDate").disabled = true;
            document.getElementById("id_orderReceivedHow").disabled = true;
            document.getElementById("id_orderFunction").disabled = false;

    } else if (docTypeSelect == "CertOfService"){
        document.getElementById("courtJudge").style.display = "none";
        document.getElementById("order").style.display = "none";
        document.getElementById("proceeding").style.display = "none";
        document.getElementById("clerk").style.display = "none";
        document.getElementById("courtReporter").style.display = "none";
        document.getElementById("partiesMailed").style.display = "block";
        document.getElementById("buttonVisual").style.display = "block";

        // grey inputs
            document.getElementById("id_attorneyFiling").disabled = true;
            
            document.getElementById("id_circuitCourtNum").disabled = false;
            document.getElementById("id_courtType").disabled = false;
            document.getElementById("id_judgeFirstName").disabled = false;
            document.getElementById("id_judgeLastName").disabled = false;
            document.getElementById("id_judgeAddress1").disabled = false;
            document.getElementById("id_judgeAddress2").disabled = false;
            document.getElementById("id_judgeAddress3").disabled = false;

            document.getElementById("id_orderIssuedDate").disabled = false;
            document.getElementById("id_orderReceivedDate").disabled = false;
            document.getElementById("id_orderReceivedHow").disabled = false;
            document.getElementById("id_orderFunction").disabled = false;
    
    } else if (docTypeSelect == "ProofOfService"){
        document.getElementById("courtJudge").style.display = "block";
        document.getElementById("order").style.display = "none";
        document.getElementById("proceeding").style.display = "none";
        document.getElementById("clerk").style.display = "none";
        document.getElementById("courtReporter").style.display = "none";
        document.getElementById("partiesMailed").style.display = "block";
        document.getElementById("buttonVisual").style.display = "block";

        // grey inputs
            document.getElementById("id_attorneyFiling").disabled = true;
            
            document.getElementById("id_circuitCourtNum").disabled = true;
            document.getElementById("id_courtType").disabled = false;
            document.getElementById("id_judgeFirstName").disabled = false;
            document.getElementById("id_judgeLastName").disabled = false;
            document.getElementById("id_judgeAddress1").disabled = false;
            document.getElementById("id_judgeAddress2").disabled = false;
            document.getElementById("id_judgeAddress3").disabled = false;

            document.getElementById("id_orderIssuedDate").disabled = true;
            document.getElementById("id_orderReceivedDate").disabled = true;
            document.getElementById("id_orderReceivedHow").disabled = true;
            document.getElementById("id_orderFunction").disabled = true;
    
    } else if (docTypeSelect == "TranscriptForm"){
        document.getElementById("courtJudge").style.display = "block";
        document.getElementById("order").style.display = "none";
        document.getElementById("proceeding").style.display = "block";
        document.getElementById("clerk").style.display = "block";
        document.getElementById("courtReporter").style.display = "block";
        document.getElementById("partiesMailed").style.display = "block";
        document.getElementById("buttonVisual").style.display = "block";

        // ungrey inputs
            document.getElementById("id_attorneyFiling").disabled = false;

            document.getElementById("id_circuitCourtNum").disabled = true;
            document.getElementById("id_courtType").disabled = false;
            document.getElementById("id_judgeFirstName").disabled = false;
            document.getElementById("id_judgeLastName").disabled = false;
            document.getElementById("id_judgeAddress1").disabled = true;
            document.getElementById("id_judgeAddress2").disabled = true;
            document.getElementById("id_judgeAddress3").disabled = true;

            document.getElementById("id_orderIssuedDate").disabled = true;
            document.getElementById("id_orderReceivedDate").disabled = true;
            document.getElementById("id_orderReceivedHow").disabled = true;
            document.getElementById("id_orderFunction").disabled = true;
    }





    // grey/ungrey inputs
	if (jurisdiction == "state"){
		document.getElementById("id_filingCourt").disabled = false;
	} else if (jurisdiction == "federal"){
		document.getElementById("id_filingCourt").disabled = true;
	}
}


// number of parties mailed
function partiesMailedChange(){
    var partiesMailed = document.getElementById("id_partiesMailed").value;

    if (partiesMailed == 0){
        document.getElementById("appeals_partyMailed1").style.display = "none";
        document.getElementById("appeals_partyMailed2").style.display = "none";
        document.getElementById("appeals_partyMailed3").style.display = "none";
        document.getElementById("appeals_partyMailed4").style.display = "none";
    } else if (partiesMailed == 1){
        document.getElementById("appeals_partyMailed1").style.display = "block";
        document.getElementById("appeals_partyMailed2").style.display = "none";
        document.getElementById("appeals_partyMailed3").style.display = "none";
        document.getElementById("appeals_partyMailed4").style.display = "none";
    } else if (partiesMailed == 2){
        document.getElementById("appeals_partyMailed1").style.display = "block";
        document.getElementById("appeals_partyMailed2").style.display = "block";
        document.getElementById("appeals_partyMailed3").style.display = "none";
        document.getElementById("appeals_partyMailed4").style.display = "none";
    } else if (partiesMailed == 3){
        document.getElementById("appeals_partyMailed1").style.display = "block";
        document.getElementById("appeals_partyMailed2").style.display = "block";
        document.getElementById("appeals_partyMailed3").style.display = "block";
        document.getElementById("appeals_partyMailed4").style.display = "none";
    } else if (partiesMailed == 4){
        document.getElementById("appeals_partyMailed1").style.display = "block";
        document.getElementById("appeals_partyMailed2").style.display = "block";
        document.getElementById("appeals_partyMailed3").style.display = "block";
        document.getElementById("appeals_partyMailed4").style.display = "block";
    }
}

function attorneyForRespChange(){
    var p1_attorney = document.getElementById("id_party1_attorney").value;
    var p2_attorney = document.getElementById("id_party2_attorney").value;
    var p3_attorney = document.getElementById("id_party3_attorney").value;
    var p4_attorney = document.getElementById("id_party4_attorney").value;

    if (p1_attorney == 1){
        document.getElementById("id_party1_whichRespondent").disabled = false;
        document.getElementById("id_party1_whichFirm").disabled = false;
    } else if (p1_attorney != 1){
        document.getElementById("id_party1_whichRespondent").disabled = true;
        document.getElementById("id_party1_whichFirm").disabled = true;
    }
    if (p2_attorney == 1){
        document.getElementById("id_party2_whichRespondent").disabled = false;
        document.getElementById("id_party2_whichFirm").disabled = false;
    } else if (p2_attorney != 1){
        document.getElementById("id_party2_whichRespondent").disabled = true;
        document.getElementById("id_party2_whichFirm").disabled = true;
    }
    if (p3_attorney == 1){
        document.getElementById("id_party3_whichRespondent").disabled = false;
        document.getElementById("id_party3_whichFirm").disabled = false;
    } else if (p3_attorney != 1){
        document.getElementById("id_party3_whichRespondent").disabled = true;
        document.getElementById("id_party3_whichFirm").disabled = true;
    }
    if (p4_attorney == 1){
        document.getElementById("id_party4_whichRespondent").disabled = false;
        document.getElementById("id_party4_whichFirm").disabled = false;
    } else if (p4_attorney != 1){
        document.getElementById("id_party4_whichRespondent").disabled = true;
        document.getElementById("id_party4_whichFirm").disabled = true;
    }
}







function generate() {
	
	var docTypeSelect = document.getElementById("id_docSelect").value;
	var jurisdiction = document.getElementById("id_jurisdiction").value;

    var noaDoc = 0;
    var cosDoc = 0;
    var posDoc = 0;
    var transDoc = 0;
        if (docTypeSelect == "docPacket"){
            noaDoc = 1;
                if (jurisdiction == "state"){
                    posDoc = 1;
                    cosDoc = 0;
                    transDoc = 1;
                } else if (jurisdiction == "federal"){
                    posDoc = 0;
                    cosDoc = 1;
                    transDoc = 0;
                }
        } else if (docTypeSelect == "NoticeOfAppeal"){
            noaDoc = 1;
            cosDoc = 0;
            posDoc = 0;
            transDoc = 0;
        } else if (docTypeSelect == "CertOfService" && jurisdiction == "federal"){
            noaDoc = 0;
            cosDoc = 1;
            posDoc = 0;
            transDoc = 0;
        } else if (docTypeSelect == "ProofOfService" && jurisdiction == "state"){
            noaDoc = 0;
            cosDoc = 0;
            posDoc = 1;
            transDoc = 0;
        } else if (docTypeSelect == "TranscriptForm" && jurisdiction == "state"){
            noaDoc = 0;
            cosDoc = 0;
            posDoc = 0;
            transDoc = 1;
        }        

    // *****************************************
    // ************* Set constants *************
    // *****************************************

	const C_FIRM_NAME = "Hawkins & Jedziniak, LLC";
	const C_ADDRESS_LINE_1 = "1225 South Church Street";
	const C_ADDRESS_LINE_2 = "Greenville, South Carolina 29605";
	const C_FIRM_PHONE = "(864) 275-8142 (telephone)";
    const C_FIRM_PHONE_NUMBER_ONLY = "(864) 275-8142";
	const C_FIRM_FAX = "(864) 752-0911 (facsimile)";
	const C_ATTORNEY_1_EMAIL = "josh@hjllcsc.com";
	const C_ATTORNEY_2_EMAIL = "helena@hjllcsc.com";
	const C_ATTORNEY_3_EMAIL = "ethan@hjllcsc.com";
	const C_PARALEGAL_NAME = "Candie Edwards";
	const C_PARALEGAL_EMAIL = "paralegal@hjllcsc.com";
	const C_CITY_STATE = "Greenville, South Carolina";
    const C_CITY = "Greenville";
    const C_STATE = "SC";
    const C_ZIP = "29605";

	// use correct bar number
	var C_ATTORNEY_1_NAME_NUMBER;
	var C_ATTORNEY_2_NAME_NUMBER;
    var C_ATTORNEY_3_NAME_NUMBER;

	if (jurisdiction == "state") {
		C_ATTORNEY_1_NAME_NUMBER = "Joshua T. Hawkins, S.C. Bar #78470";
		C_ATTORNEY_2_NAME_NUMBER = "Helena L. Jedziniak, S.C. Bar #100825"
		C_ATTORNEY_3_NAME_NUMBER = "Ethan L. Jedziniak, S.C. Bar #105785";
	} else if (jurisdiction == "federal") {
		C_ATTORNEY_1_NAME_NUMBER = "Joshua T. Hawkins, Fed. Bar #11418";
		C_ATTORNEY_2_NAME_NUMBER = "Helena L. Jedziniak, Fed. Bar #12809";	
		C_ATTORNEY_3_NAME_NUMBER = "Ethan L. Jedziniak, Fed. Bar #13926";
	}


	// set todays date as MMMM DD, YYYY
	var d = new Date();
	var monthWord;
	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	monthWord = months[d.getMonth()];
	
	todaysDate_MMMDDYYYY = monthWord + " " + d.getDate() + ", " + d.getFullYear();
    var filingDate = todaysDate_MMMDDYYYY;






	// ******* grab variables from html elements *******
	var filingCounty = document.getElementById("id_filingCounty").value;
	var filingCourt = document.getElementById("id_filingCourt").value;
        var filingCourt_adjusted;
            if (filingCourt == "In the Court of Common Pleas"){filingCourt_adjusted = "Court of Common Pleas"}
            else if (filingCourt == "In the Court of General Sessions"){filingCourt_adjusted = "Court of General Session"}
            else if (filingCourt == "In the Magistrates Court"){filingCourt_adjusted = "Magistrates Court"}

    var attorneyFiling = document.getElementById("id_attorneyFiling").value;

    var circuitCourtNum = document.getElementById("id_circuitCourtNum").value;
    var courtType = document.getElementById("id_courtType").value;
        var judge_fName = document.getElementById("id_judgeFirstName").value;
        var judge_lName = document.getElementById("id_judgeLastName").value;
        var judge_name = judge_fName + " " + judge_lName;
        var judge_theHonorableChambers = "The Honorable " + judge_fName + " " + judge_lName + "’s Chambers";
            var judge_address1 = document.getElementById("id_judgeAddress1").value;
            var judge_address2 = document.getElementById("id_judgeAddress2").value;
            var judge_address3 = document.getElementById("id_judgeAddress3").value;
                var judgeArray_full = [judge_theHonorableChambers, judge_address1, judge_address2, judge_address3]
                var judgeArray_filtered = judgeArray_full.filter(Boolean);
			    var judgeArray = judgeArray_filtered.join("\n")
                judgeArray = extraText(judgeArray, "\n")

	
	var caseNumber = document.getElementById("id_caseNumber").value;
    
    var orderIssued = dateFixUp(document.getElementById("id_orderIssuedDate").value);
    var orderReceived = dateFixUp(document.getElementById("id_orderReceivedDate").value);
        var orderReceivedHow = document.getElementById("id_orderReceivedHow").value;
        var orderFunction = uncapitalize(document.getElementById("id_orderFunction").value);

    var proceedingDate = dateFixUp(document.getElementById("id_proceedingDate").value);
        var opposingCounselName = document.getElementById("id_proceedingOpposingCounsel").value;
        var transcriptExpedited = document.getElementById("id_expeditedTranscript").value;

	var aName = document.getElementById("id_appellantName").value;
		var aNumber = document.getElementById("id_appellantNumber").value;
		var aPlural;
			if (aNumber == 1){aPlural = "Appellants";}
			else if (aNumber == 0){aPlural = "Appellant";}
	var rName = document.getElementById("id_respondentName").value;
		var rNumber = document.getElementById("id_respondentNumber").value;
		var rPlural;
			if (rNumber == 1){rPlural = "Respondents";}
			else if (rNumber == 0){rPlural = "Respondent";}
    
    var clerk_prefix = document.getElementById("id_clerkPrefex").value;
        var clerk_fName = document.getElementById("id_clerkFirstName").value;
        var clerk_lName = document.getElementById("id_clerkLastName").value;
        var clerk_name = clerk_prefix + " " + clerk_fName + " " + clerk_lName;
        var clerkArray = clerk_name + "\nClerk of Court\nSouth Carolina Court of Appeals\n1220 Senate Street\nColumbia, South Carolina 29201\n"

    var courtAdminArray_full = ["South Carolina Court Administration","1220 Senate Street, Suite 200","Columbia, South Carolina 29201"]
    var C_COURT_ADMIN_ARRAY = courtAdminArray_full.join("\n")

    var courtRep_prefix = document.getElementById("id_courtRepPrefex").value;
        var courtRep_fName = document.getElementById("id_courtRepFirstName").value;
        var courtRep_lName = document.getElementById("id_courtRepLastName").value;
        var courtRep_name = courtRep_fName + " " + courtRep_lName;
            var courtRep_address1 = document.getElementById("id_courtRepAddress1").value;
            var courtRep_address2 = document.getElementById("id_courtRepAddress2").value;
            var courtRep_address3 = document.getElementById("id_courtRepAddress3").value;
                var courtRepArray_full = [courtRep_name, courtRep_address1, courtRep_address2, courtRep_address3]
                var courtRepArray_filtered = courtRepArray_full.filter(Boolean);
                var courtRepArray = courtRepArray_filtered.join("\n")


    var numPartiesMailed = document.getElementById("id_partiesMailed").value;

    if (numPartiesMailed == 0){
        party1Array = "";
        var party1_whichRespFull = "";
    
    } else if (numPartiesMailed > 0){
        var party1_name = document.getElementById("id_party1_name").value;
            var party1_attorney = document.getElementById("id_party1_attorney").value;
                var party1_whichResp = document.getElementById("id_party1_whichRespondent").value;
                    if (party1_attorney == 1 && Boolean(party1_whichResp) == true){
                        var party1_whichRespFull = "Attorney for Respondents " + party1_whichResp + "\n\n"
                    } else if (party1_attorney == 0 || Boolean(party1_whichResp) == false){;
                        var party1_whichRespFull = "\n"
                    }
                var party1_firm = document.getElementById("id_party1_whichFirm").value;
            var party1_address1 = document.getElementById("id_party1_address1").value;
            var party1_address2 = document.getElementById("id_party1_address2").value;
            var party1_address3 = document.getElementById("id_party1_address3").value;
                var party1Array_full = [party1_name, party1_firm, party1_address1, party1_address2, party1_address3]
                var party1Array_filtered = party1Array_full.filter(Boolean);
                var party1Array = party1Array_filtered.join("\n")
                party1Array = extraText(party1Array, "\n")

        var party2_name = document.getElementById("id_party2_name").value;
            var party2_attorney = document.getElementById("id_party2_attorney").value;
                var party2_whichResp = document.getElementById("id_party2_whichRespondent").value;
                    if (party2_attorney == 1 && Boolean(party2_whichResp) == true){
                        var party2_whichRespFull = "Attorney for Respondents " + party2_whichResp + "\n\n"
                    } else if (party2_attorney == 0 || Boolean(party2_whichResp) == false){;
                        var party2_whichRespFull = "\n"
                    }
                var party2_firm = document.getElementById("id_party2_whichFirm").value;
            var party2_address1 = document.getElementById("id_party2_address1").value;
            var party2_address2 = document.getElementById("id_party2_address2").value;
            var party2_address3 = document.getElementById("id_party2_address3").value;
                var party2Array_full = [party2_name, party2_firm, party2_address1, party2_address2, party2_address3]
                var party2Array_filtered = party2Array_full.filter(Boolean);
                var party2Array = party2Array_filtered.join("\n")
                party2Array = extraText(party2Array, "\n")

            var party3_name = document.getElementById("id_party3_name").value;
            var party3_attorney = document.getElementById("id_party3_attorney").value;
                var party3_whichResp = document.getElementById("id_party3_whichRespondent").value;
                    if (party3_attorney == 1 && Boolean(party3_whichResp) == true){
                        var party3_whichRespFull = "Attorney for Respondents " + party3_whichResp + "\n\n"
                    } else if (party3_attorney == 0 || Boolean(party3_whichResp) == false){;
                        var party3_whichRespFull = "\n"
                    }
                var party3_firm = document.getElementById("id_party3_whichFirm").value;
            var party3_address1 = document.getElementById("id_party3_address1").value;
            var party3_address2 = document.getElementById("id_party3_address2").value;
            var party3_address3 = document.getElementById("id_party3_address3").value;
                var party3Array_full = [party3_name, party3_firm, party3_address1, party3_address2, party3_address3, ""]
                var party3Array_filtered = party3Array_full.filter(Boolean);
                var party3Array = party3Array_filtered.join("\n")
                party3Array = extraText(party3Array, "\n")


        var party4_name = document.getElementById("id_party4_name").value;
            var party4_attorney = document.getElementById("id_party4_attorney").value;
                var party4_whichResp = document.getElementById("id_party4_whichRespondent").value;
                    if (party4_attorney == 1 && Boolean(party4_whichResp) == true){
                        var party4_whichRespFull = "Attorney for Respondents " + party4_whichResp + "\n\n"
                    } else if (party4_attorney == 0 || Boolean(party4_whichResp) == false){;
                        var party4_whichRespFull = "\n"
                    }
                var party4_firm = document.getElementById("id_party4_whichFirm").value;
            var party4_address1 = document.getElementById("id_party4_address1").value;
            var party4_address2 = document.getElementById("id_party4_address2").value;
            var party4_address3 = document.getElementById("id_party4_address3").value;
                var party4Array_full = [party4_name, party4_firm, party4_address1, party4_address2, party4_address3, ""]
                var party4Array_filtered = party4Array_full.filter(Boolean);
                var party4Array = party4Array_filtered.join("\n")
                party4Array = extraText(party4Array, "\n")
    }

    
	// misc additional variables
	var sFilingAttorney = "s/" + attorneyFiling	
	
    var attorneyFiling_email;
        if (attorneyFiling == "Joshua T. Hawkins"){attorneyFiling_email = "josh@hjllcsc.com"}
        else if (attorneyFiling == "Helena L. Jedziniak"){attorneyFiling_email = "helena@hjllcsc.com"}
        else if (attorneyFiling == "Ethan L. Jedziniak"){attorneyFiling_email = "ethan@hjllcsc.com"}



    var templateNoA_cover = "https://hawkinsandjedziniak.com/docs/appeal/noaStateCoverLetter.docx"
    var templateNoA = "https://hawkinsandjedziniak.com/docs/appeal/noticeOfAppeal" + jurisdiction + ".docx";
    var templateCoS = "https://hawkinsandjedziniak.com/docs/appeal/cosFed.docx";
    var templatePoS = "https://hawkinsandjedziniak.com/docs/appeal/posSt.docx";
    var templateTF_cover = "https://hawkinsandjedziniak.com/docs/appeal/transReqLetter.docx";
    var templateTF; 
        if (courtType == "Circuit" && transcriptExpedited == "0"){
            templateTF = "https://hawkinsandjedziniak.com/docs/appeal/transcriptReqCircuitNotExp.docx";
        } else if (courtType == "Circuit" && transcriptExpedited == "1"){
            templateTF = "https://hawkinsandjedziniak.com/docs/appeal/transcriptReqCircuitExp.docx";
        } else if (courtType == "Family" && transcriptExpedited == "0"){
            templateTF = "https://hawkinsandjedziniak.com/docs/appeal/transcriptReqFamilyNotExp.docx";
        } else if (courtType == "Family" && transcriptExpedited == "1"){
            templateTF = "https://hawkinsandjedziniak.com/docs/appeal/transcriptReqFamilyExp.docx";
        }




    /* ****************** INPUT CHECKS ****************** */

    // general
    
    // notice of appeal
    
    // cos

    // pos

    // transcript form
    if (transDoc == 1){
        if (courtType != "Circuit" && courtType != "Family"){
            alert ("Only Circuit and Family court transcript request forms are supported. If you are requesting a transcript from court proceedings in Municipal, Magistrate, Master-In-Equity, or Probate court, you must contact that court directly.");
			return;
        }

    }








    /* ****************** DOCUMENT PROCESSING ****************** */

    if (noaDoc == 1 && jurisdiction == "state"){
        loadFile(templateNoA_cover,function(error,content){
            if (error) { throw error };

            var zip = new PizZip(content);
            var doc;
            try {doc=new window.docxtemplater(zip, {paragraphLoop:true, linebreaks:true});} catch(error) {errorHandler(error);}
            
            if (numPartiesMailed <= 1){
                doc.setData({
                    "filing_date": filingDate,
                    "clerk_prefix": clerk_prefix,
                    "clerk_first_name": clerk_fName,
                    "clerk_last_name": clerk_lName,
                    "appellant_name": aName,
                    "respondent_name": rName,
                    "case_number": caseNumber,
                    "judge_details": judgeArray,
                    "respondentLoop": [{"respondent_details": party1Array, "which_respondent": party1_whichRespFull}],
                    "court_admin_details": C_COURT_ADMIN_ARRAY,
                    "footer_paralegal_name": C_PARALEGAL_NAME,
                    "footer_paralegal_email": C_PARALEGAL_EMAIL,
                    "footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,
                    "footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,
                    "footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,
                    "footer_firm_name": C_FIRM_NAME,
                });
            } else if (numPartiesMailed == 2){
                doc.setData({
                    "filing_date": filingDate,"clerk_prefix": clerk_prefix,"clerk_first_name": clerk_fName,"clerk_last_name": clerk_lName,"appellant_name": aName,"respondent_name": rName,"case_number": caseNumber,"judge_details": judgeArray,
                    "respondentLoop": [ {"respondent_details": party1Array, "which_respondent": party1_whichRespFull},
                                        {"respondent_details": party2Array, "which_respondent": party2_whichRespFull}],
                    "court_admin_details": C_COURT_ADMIN_ARRAY,"footer_paralegal_name": C_PARALEGAL_NAME,"footer_paralegal_email": C_PARALEGAL_EMAIL,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_firm_name": C_FIRM_NAME,
                });
            } else if (numPartiesMailed == 3){
                doc.setData({
                    "filing_date": filingDate,"clerk_prefix": clerk_prefix,"clerk_first_name": clerk_fName,"clerk_last_name": clerk_lName,"appellant_name": aName,"respondent_name": rName,"case_number": caseNumber,"judge_details": judgeArray,
                    "respondentLoop": [ {"respondent_details": party1Array, "which_respondent": party1_whichRespFull},
                                        {"respondent_details": party2Array, "which_respondent": party2_whichRespFull},
                                        {"respondent_details": party3Array, "which_respondent": party3_whichRespFull}],
                    "court_admin_details": C_COURT_ADMIN_ARRAY,"footer_paralegal_name": C_PARALEGAL_NAME,"footer_paralegal_email": C_PARALEGAL_EMAIL,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_firm_name": C_FIRM_NAME,
                                    });
            } else if (numPartiesMailed == 4){
                doc.setData({
                    "filing_date": filingDate,"clerk_prefix": clerk_prefix,"clerk_first_name": clerk_fName,"clerk_last_name": clerk_lName,"appellant_name": aName,"respondent_name": rName,"case_number": caseNumber,"judge_details": judgeArray,
                    "respondentLoop": [ {"respondent_details": party1Array, "which_respondent": party1_whichRespFull},
                                        {"respondent_details": party2Array, "which_respondent": party2_whichRespFull},
                                        {"respondent_details": party3Array, "which_respondent": party3_whichRespFull},
                                        {"respondent_details": party4Array, "which_respondent": party4_whichRespFull}],
                    "court_admin_details": C_COURT_ADMIN_ARRAY,"footer_paralegal_name": C_PARALEGAL_NAME,"footer_paralegal_email": C_PARALEGAL_EMAIL,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_firm_name": C_FIRM_NAME,
                });
            }

            try {doc.render();} catch (error) {errorHandler(error);}
        
            var saveName;
            var saveAsPrompt = "Please choose a file name for the Notice of Appeal cover letter";
            var saveAsDefaultInput = aName.concat(' notice of appeal cover letter.docx');			
                if (document.getElementById("id_defaultFilename").checked == true) {saveName = saveAsDefaultInput;}
                else if (document.getElementById("id_defaultFilename").checked == false) {saveName = prompt(saveAsPrompt, saveAsDefaultInput);}
            
            var out=doc.getZip().generate({
                type:"blob",
                mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            })
            saveAs(out,saveName)
        })



        loadFile(templateNoA,function(error,content){
            if (error) { throw error };

            var zip = new PizZip(content);
            var doc;
            try {doc=new window.docxtemplater(zip, {paragraphLoop:true, linebreaks:true});} catch(error) {errorHandler(error);}
            
            if (numPartiesMailed <= 1){
                doc.setData({
                    "county_name_allCaps": filingCounty.toUpperCase(), // s, f
                    "court_name": filingCourt_adjusted, // s
                    "judge_name": judge_name, // s
                    "court_type": courtType, // s
                    "appellant_name": aName, // s, f
                    "appellant_number": aPlural, // s, f
                    "respondent_name": rName, // s, f
                    "respondent_number": rPlural, // s, f
                    "case_number": caseNumber.toUpperCase(), // s, f
                    "judge_details": judgeArray, // s
                    "appeal_date": orderIssued, // s, f
                    "notice_received_how": orderReceivedHow, // s
                    "judge_last_name": judge_lName, // s
                    "order_received_date": orderReceived, // s
                    "respondentLoop": [{"respondent_details": party1Array, "which_respondent": party1_whichRespFull}],
                    "court_admin_details": C_COURT_ADMIN_ARRAY, // s
                    "footer_firm_name": C_FIRM_NAME,"s_attorney_filing": sFilingAttorney,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_address_1": C_ADDRESS_LINE_1,"footer_address_2": C_ADDRESS_LINE_2,"footer_telephone": C_FIRM_PHONE,"footer_facsimile": C_FIRM_FAX,"footer_attorney_1_email": C_ATTORNEY_1_EMAIL,"footer_attorney_2_email": C_ATTORNEY_2_EMAIL,"footer_attorney_3_email": C_ATTORNEY_3_EMAIL,"footer_city_state": C_CITY_STATE,"filing_date": filingDate,
                });

            } else if (numPartiesMailed == 2){
                doc.setData({
                    "county_name_allCaps": filingCounty.toUpperCase(),"court_name": filingCourt_adjusted,"judge_name": judge_name,"court_type": courtType,"appellant_name": aName,"appellant_number": aPlural,"respondent_name": rName,"respondent_number": rPlural,"case_number": caseNumber.toUpperCase(),"appeal_date": orderIssued,"notice_received_how": orderReceivedHow,"judge_last_name": judge_lName,"order_received_date": orderReceived,"judge_details": judgeArray,
                    "respondentLoop": [ {"respondent_details": party1Array, "which_respondent": party1_whichRespFull},
                                        {"respondent_details": party2Array, "which_respondent": party2_whichRespFull}],
                    "court_admin_details": C_COURT_ADMIN_ARRAY,"footer_firm_name": C_FIRM_NAME,"s_attorney_filing": sFilingAttorney,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_address_1": C_ADDRESS_LINE_1,"footer_address_2": C_ADDRESS_LINE_2,"footer_telephone": C_FIRM_PHONE,"footer_facsimile": C_FIRM_FAX,"footer_attorney_1_email": C_ATTORNEY_1_EMAIL,"footer_attorney_2_email": C_ATTORNEY_2_EMAIL,"footer_attorney_3_email": C_ATTORNEY_3_EMAIL,"footer_city_state": C_CITY_STATE,"filing_date": filingDate,
                });
    
            } else if (numPartiesMailed == 3){
                doc.setData({
                    "county_name_allCaps": filingCounty.toUpperCase(),"court_name": filingCourt_adjusted,"judge_name": judge_name,"court_type": courtType,"appellant_name": aName,"appellant_number": aPlural,"respondent_name": rName,"respondent_number": rPlural,"case_number": caseNumber.toUpperCase(),"appeal_date": orderIssued,"notice_received_how": orderReceivedHow,"judge_last_name": judge_lName,"order_received_date": orderReceived,"judge_details": judgeArray,
                    "respondentLoop": [ {"respondent_details": party1Array, "which_respondent": party1_whichRespFull},
                                        {"respondent_details": party2Array, "which_respondent": party2_whichRespFull},
                                        {"respondent_details": party3Array, "which_respondent": party3_whichRespFull}],
                    "court_admin_details": C_COURT_ADMIN_ARRAY,"footer_firm_name": C_FIRM_NAME,"s_attorney_filing": sFilingAttorney,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_address_1": C_ADDRESS_LINE_1,"footer_address_2": C_ADDRESS_LINE_2,"footer_telephone": C_FIRM_PHONE,"footer_facsimile": C_FIRM_FAX,"footer_attorney_1_email": C_ATTORNEY_1_EMAIL,"footer_attorney_2_email": C_ATTORNEY_2_EMAIL,"footer_attorney_3_email": C_ATTORNEY_3_EMAIL,"footer_city_state": C_CITY_STATE,"filing_date": filingDate,
                                    });
            } else if (numPartiesMailed == 4){
                doc.setData({
                    "county_name_allCaps": filingCounty.toUpperCase(),"court_name": filingCourt_adjusted,"judge_name": judge_name,"court_type": courtType,"appellant_name": aName,"appellant_number": aPlural,"respondent_name": rName,"respondent_number": rPlural,"case_number": caseNumber.toUpperCase(),"appeal_date": orderIssued,"notice_received_how": orderReceivedHow,"judge_last_name": judge_lName,"order_received_date": orderReceived,"judge_details": judgeArray,
                    "respondentLoop": [ {"respondent_details": party1Array, "which_respondent": party1_whichRespFull},
                                        {"respondent_details": party2Array, "which_respondent": party2_whichRespFull},
                                        {"respondent_details": party3Array, "which_respondent": party3_whichRespFull},
                                        {"respondent_details": party4Array, "which_respondent": party4_whichRespFull}],
                    "court_admin_details": C_COURT_ADMIN_ARRAY,"footer_firm_name": C_FIRM_NAME,"s_attorney_filing": sFilingAttorney,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_address_1": C_ADDRESS_LINE_1,"footer_address_2": C_ADDRESS_LINE_2,"footer_telephone": C_FIRM_PHONE,"footer_facsimile": C_FIRM_FAX,"footer_attorney_1_email": C_ATTORNEY_1_EMAIL,"footer_attorney_2_email": C_ATTORNEY_2_EMAIL,"footer_attorney_3_email": C_ATTORNEY_3_EMAIL,"footer_city_state": C_CITY_STATE,"filing_date": filingDate,
                                    });
            }


            try {doc.render();} catch (error) {errorHandler(error);}
        
            var saveName;
            var saveAsPrompt = "Please choose a file name for the Notice of Appeal";
            var saveAsDefaultInput = aName.concat(' notice of appeal.docx');			
                if (document.getElementById("id_defaultFilename").checked == true) {saveName = saveAsDefaultInput;}
                else if (document.getElementById("id_defaultFilename").checked == false) {saveName = prompt(saveAsPrompt, saveAsDefaultInput);}
            
            var out=doc.getZip().generate({
                type:"blob",
                mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            })
            saveAs(out,saveName)	
        })




    } else if (noaDoc == 1 && jurisdiction == "federal"){
        loadFile(templateNoA,function(error,content){
            if (error) { throw error };

            var zip = new PizZip(content);
            var doc;
            try {doc=new window.docxtemplater(zip, {paragraphLoop:true, linebreaks:true});} catch(error) {errorHandler(error);}
            
                doc.setData({
					"county_name_allCaps": filingCounty.toUpperCase(), // s, f
                    "appellant_name": aName, // s, f
                    "appellant_number": aPlural, // s, f
                    "respondent_name": rName, // s, f
                    "respondent_number": rPlural, // s, f
                    "case_number": caseNumber.toUpperCase(), // s, f
                    "appeal_date": orderIssued, // s, f
                    "court_circuit": circuitCourtNum, // f
                    "order_function": orderFunction, // f
                    "footer_firm_name": C_FIRM_NAME,"s_attorney_filing": sFilingAttorney,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_address_1": C_ADDRESS_LINE_1,"footer_address_2": C_ADDRESS_LINE_2,"footer_telephone": C_FIRM_PHONE,"footer_facsimile": C_FIRM_FAX,"footer_attorney_1_email": C_ATTORNEY_1_EMAIL,"footer_attorney_2_email": C_ATTORNEY_2_EMAIL,"footer_attorney_3_email": C_ATTORNEY_3_EMAIL,"footer_city_state": C_CITY_STATE,"filing_date": filingDate,
                });


            try {doc.render();} catch (error) {errorHandler(error);}
        
            var saveName;
            var saveAsPrompt = "Please choose a file name for the Notice of Appeal";
            var saveAsDefaultInput = aName.concat(' notice of appeal.docx');			
                if (document.getElementById("id_defaultFilename").checked == true) {saveName = saveAsDefaultInput;}
                else if (document.getElementById("id_defaultFilename").checked == false) {saveName = prompt(saveAsPrompt, saveAsDefaultInput);}
            
            var out=doc.getZip().generate({
                type:"blob",
                mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            })
            saveAs(out,saveName)	
        })
    }


    if (cosDoc == 1){
        loadFile(templateCoS,function(error,content){
            if (error) { throw error };

            var zip = new PizZip(content);
            var doc;
            try {doc=new window.docxtemplater(zip, {paragraphLoop:true, linebreaks:true});} catch(error) {errorHandler(error);}
            
            if (numPartiesMailed <= 1){
                doc.setData({
                    "county_name_allCaps": filingCounty.toUpperCase(),
                    "appellant_name": aName,
                    "appellant_number": aPlural,
                    "respondent_name": rName,
                    "respondent_number": rPlural,
                    "case_number": caseNumber.toUpperCase(),
                    "current_date": filingDate,
                    "addressLoop": [{"address_details": party1Array, "which_attorney": party1_whichRespFull}],
                    "footer_firm_name": C_FIRM_NAME,
                    "footer_paralegal_name": C_PARALEGAL_NAME,
                    "footer_firm_location":C_CITY_STATE,
                });
            } else if (numPartiesMailed <= 2){
                doc.setData({
                    "county_name_allCaps": filingCounty.toUpperCase(),"appellant_name": aName,"appellant_number": aPlural,"respondent_name": rName,"respondent_number": rPlural,"case_number": caseNumber.toUpperCase(),"current_date": filingDate,
                    "addressLoop": [{"address_details": party1Array, "which_attorney": party1_whichRespFull},
                                    {"address_details": party2Array, "which_attorney": party2_whichRespFull}],
                    "footer_firm_name": C_FIRM_NAME,"footer_paralegal_name": C_PARALEGAL_NAME,"footer_firm_location":C_CITY_STATE,
                });
            } else if (numPartiesMailed <= 3){
                doc.setData({
                    "county_name_allCaps": filingCounty.toUpperCase(),"appellant_name": aName,"appellant_number": aPlural,"respondent_name": rName,"respondent_number": rPlural,"case_number": caseNumber.toUpperCase(),"current_date": filingDate,
                    "addressLoop": [{"address_details": party1Array, "which_attorney": party1_whichRespFull},
                                    {"address_details": party2Array, "which_attorney": party2_whichRespFull},
                                    {"address_details": party3Array, "which_attorney": party3_whichRespFull}],
                    "footer_firm_name": C_FIRM_NAME,"footer_paralegal_name": C_PARALEGAL_NAME,"footer_firm_location":C_CITY_STATE,
                });
            } else if (numPartiesMailed <= 4){
                doc.setData({
                    "county_name_allCaps": filingCounty.toUpperCase(),"appellant_name": aName,"appellant_number": aPlural,"respondent_name": rName,"respondent_number": rPlural,"case_number": caseNumber.toUpperCase(),"current_date": filingDate,
                    "addressLoop": [{"address_details": party1Array, "which_attorney": party1_whichRespFull},
                                    {"address_details": party2Array, "which_attorney": party2_whichRespFull},
                                    {"address_details": party3Array, "which_attorney": party3_whichRespFull},
                                    {"address_details": party4Array, "which_attorney": party4_whichRespFull}],
                    "footer_firm_name": C_FIRM_NAME,"footer_paralegal_name": C_PARALEGAL_NAME,"footer_firm_location":C_CITY_STATE,
                });
            }

            try {doc.render();} catch (error) {errorHandler(error);}
        
            var saveName;
            var saveAsPrompt = "Please choose a file name for the Certificate of Service";
            var saveAsDefaultInput = aName.concat(' certificate of service.docx');			
                if (document.getElementById("id_defaultFilename").checked == true) {saveName = saveAsDefaultInput;}
                else if (document.getElementById("id_defaultFilename").checked == false) {saveName = prompt(saveAsPrompt, saveAsDefaultInput);}
            
            var out=doc.getZip().generate({
                type:"blob",
                mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            })
            saveAs(out,saveName)	
        })
    }

    
    if (posDoc == 1){
        loadFile(templatePoS,function(error,content){
            if (error) { throw error };

            var zip = new PizZip(content);
            var doc;
            try {doc=new window.docxtemplater(zip, {paragraphLoop:true, linebreaks:true});} catch(error) {errorHandler(error);}
            
            if (numPartiesMailed == 1){
                doc.setData({
                    "county_name_allCaps": filingCounty.toUpperCase(),
                    "court_name": filingCourt_adjusted,
                    "judge_name": judge_name,
                    "court_type": courtType,
                    "case_number": caseNumber.toUpperCase(),
                    "appellant_name": aName,
                    "appellant_number": aPlural,
                    "respondent_name": rName,
                    "respondent_number": rPlural,
                    "current_date": filingDate,
                    "judge_details": judgeArray,
                    "respondentLoop": [{"respondent_details": party1Array, "which_respondent": party1_whichRespFull}],
                    "footer_firm_name": C_FIRM_NAME,"s_attorney_filing": sFilingAttorney,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_address_1": C_ADDRESS_LINE_1,"footer_address_2": C_ADDRESS_LINE_2,"footer_telephone": C_FIRM_PHONE,"footer_facsimile": C_FIRM_FAX,"footer_attorney_1_email": C_ATTORNEY_1_EMAIL,"footer_attorney_2_email": C_ATTORNEY_2_EMAIL,"footer_attorney_3_email": C_ATTORNEY_3_EMAIL,"footer_city_state": C_CITY_STATE,"filing_date": filingDate,
                    "court_admin_details": C_COURT_ADMIN_ARRAY,
                });
            } else if (numPartiesMailed == 2){
                doc.setData({
                    "county_name_allCaps": filingCounty.toUpperCase(),"court_name": filingCourt_adjusted,"judge_name": judge_name,"court_type": courtType,"case_number": caseNumber.toUpperCase(),"appellant_name": aName,"appellant_number": aPlural,"respondent_name": rName,"respondent_number": rPlural,"current_date": filingDate,"judge_details": judgeArray,
                    "respondentLoop": [ {"respondent_details": party1Array, "which_respondent": party1_whichRespFull},
                                        {"respondent_details": party2Array, "which_respondent": party2_whichRespFull}],
                    "footer_firm_name": C_FIRM_NAME,"s_attorney_filing": sFilingAttorney,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_address_1": C_ADDRESS_LINE_1,"footer_address_2": C_ADDRESS_LINE_2,"footer_telephone": C_FIRM_PHONE,"footer_facsimile": C_FIRM_FAX,"footer_attorney_1_email": C_ATTORNEY_1_EMAIL,"footer_attorney_2_email": C_ATTORNEY_2_EMAIL,"footer_attorney_3_email": C_ATTORNEY_3_EMAIL,"footer_city_state": C_CITY_STATE,"filing_date": filingDate,"court_admin_details": C_COURT_ADMIN_ARRAY,
                });
            } else if (numPartiesMailed == 3){
                doc.setData({
                    "county_name_allCaps": filingCounty.toUpperCase(),"court_name": filingCourt_adjusted,"judge_name": judge_name,"court_type": courtType,"case_number": caseNumber.toUpperCase(),"appellant_name": aName,"appellant_number": aPlural,"respondent_name": rName,"respondent_number": rPlural,"current_date": filingDate,"judge_details": judgeArray,
                    "respondentLoop": [ {"respondent_details": party1Array, "which_respondent": party1_whichRespFull},
                                        {"respondent_details": party2Array, "which_respondent": party2_whichRespFull},
                                        {"respondent_details": party3Array, "which_respondent": party3_whichRespFull}],
                    "footer_firm_name": C_FIRM_NAME,"s_attorney_filing": sFilingAttorney,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_address_1": C_ADDRESS_LINE_1,"footer_address_2": C_ADDRESS_LINE_2,"footer_telephone": C_FIRM_PHONE,"footer_facsimile": C_FIRM_FAX,"footer_attorney_1_email": C_ATTORNEY_1_EMAIL,"footer_attorney_2_email": C_ATTORNEY_2_EMAIL,"footer_attorney_3_email": C_ATTORNEY_3_EMAIL,"footer_city_state": C_CITY_STATE,"filing_date": filingDate,"court_admin_details": C_COURT_ADMIN_ARRAY,
                                    });
            } else if (numPartiesMailed == 4){
                doc.setData({
                    "county_name_allCaps": filingCounty.toUpperCase(),"court_name": filingCourt_adjusted,"judge_name": judge_name,"court_type": courtType,"case_number": caseNumber.toUpperCase(),"appellant_name": aName,"appellant_number": aPlural,"respondent_name": rName,"respondent_number": rPlural,"current_date": filingDate,"judge_details": judgeArray,
                    "respondentLoop": [ {"respondent_details": party1Array, "which_respondent": party1_whichRespFull},
                                        {"respondent_details": party2Array, "which_respondent": party2_whichRespFull},
                                        {"respondent_details": party3Array, "which_respondent": party3_whichRespFull},
                                        {"respondent_details": party4Array, "which_respondent": party4_whichRespFull}],
                    "footer_firm_name": C_FIRM_NAME,"s_attorney_filing": sFilingAttorney,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_address_1": C_ADDRESS_LINE_1,"footer_address_2": C_ADDRESS_LINE_2,"footer_telephone": C_FIRM_PHONE,"footer_facsimile": C_FIRM_FAX,"footer_attorney_1_email": C_ATTORNEY_1_EMAIL,"footer_attorney_2_email": C_ATTORNEY_2_EMAIL,"footer_attorney_3_email": C_ATTORNEY_3_EMAIL,"footer_city_state": C_CITY_STATE,"filing_date": filingDate,"court_admin_details": C_COURT_ADMIN_ARRAY,
                                    });
            }

            try {doc.render();} catch (error) {errorHandler(error);}
        
            var saveName;
            var saveAsPrompt = "Please choose a file name for the Proof of Service";
            var saveAsDefaultInput = aName.concat(' proof of service.docx');			
                if (document.getElementById("id_defaultFilename").checked == true) {saveName = saveAsDefaultInput;}
                else if (document.getElementById("id_defaultFilename").checked == false) {saveName = prompt(saveAsPrompt, saveAsDefaultInput);}
            
            var out=doc.getZip().generate({
                type:"blob",
                mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            })
            saveAs(out,saveName)	
        })
    }

    
    if (transDoc == 1 && jurisdiction == "state"){
        loadFile(templateTF_cover,function(error,content){
            if (error) { throw error };

            var zip = new PizZip(content);
            var doc;
            try {doc=new window.docxtemplater(zip, {paragraphLoop:true, linebreaks:true});} catch(error) {errorHandler(error);}
            
            if (numPartiesMailed <= 1){
                doc.setData({
                    "current_date": filingDate,
                    "cr_details": courtRepArray,
                    "appellant_name": aName,
                    "respondent_name": rName,
                    "case_number": caseNumber.toUpperCase(),
                    "cr_prefix": courtRep_prefix,
                    "cr_surname": courtRep_lName,
                    "date_of_proceeding": proceedingDate,
                    "judge_name": judge_name,
                    "court_type": courtType,
                    "county_name": filingCounty,
                    "footer_firm_name": C_FIRM_NAME,"s_attorney_filing": sFilingAttorney,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_address_1": C_ADDRESS_LINE_1,"footer_address_2": C_ADDRESS_LINE_2,"footer_telephone": C_FIRM_PHONE,"footer_facsimile": C_FIRM_FAX,"footer_attorney_1_email": C_ATTORNEY_1_EMAIL,"footer_attorney_2_email": C_ATTORNEY_2_EMAIL,"footer_attorney_3_email": C_ATTORNEY_3_EMAIL,"footer_city_state": C_CITY_STATE,"filing_date": filingDate,
                    "clerk_details": clerkArray,
                    "respondentLoop": [{"respondent_details": party1Array, "which_respondent": party1_whichRespFull}],
                    "court_admin_details": C_COURT_ADMIN_ARRAY,
                });
            } else if (numPartiesMailed == 2){
                doc.setData({
                    "current_date": filingDate,"cr_details": courtRepArray,"appellant_name": aName,"respondent_name": rName,"case_number": caseNumber.toUpperCase(),"cr_prefix": courtRep_prefix,"cr_surname": courtRep_lName,"date_of_proceeding": proceedingDate,"judge_name": judge_name,"court_type": courtType,"count_name": filingCounty,"footer_firm_name": C_FIRM_NAME,"s_attorney_filing": sFilingAttorney,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_address_1": C_ADDRESS_LINE_1,"footer_address_2": C_ADDRESS_LINE_2,"footer_telephone": C_FIRM_PHONE,"footer_facsimile": C_FIRM_FAX,"footer_attorney_1_email": C_ATTORNEY_1_EMAIL,"footer_attorney_2_email": C_ATTORNEY_2_EMAIL,"footer_attorney_3_email": C_ATTORNEY_3_EMAIL,"footer_city_state": C_CITY_STATE,"filing_date": filingDate,"clerk_details": clerkArray,
                    "respondentLoop": [ {"respondent_details": party1Array, "which_respondent": party1_whichRespFull},
                                        {"respondent_details": party2Array, "which_respondent": party2_whichRespFull}],
                    "court_admin_details": C_COURT_ADMIN_ARRAY,
                });
            } else if (numPartiesMailed == 3){
                doc.setData({
                    "current_date": filingDate,"cr_details": courtRepArray,"appellant_name": aName,"respondent_name": rName,"case_number": caseNumber.toUpperCase(),"cr_prefix": courtRep_prefix,"cr_surname": courtRep_lName,"date_of_proceeding": proceedingDate,"judge_name": judge_name,"court_type": courtType,"count_name": filingCounty,"footer_firm_name": C_FIRM_NAME,"s_attorney_filing": sFilingAttorney,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_address_1": C_ADDRESS_LINE_1,"footer_address_2": C_ADDRESS_LINE_2,"footer_telephone": C_FIRM_PHONE,"footer_facsimile": C_FIRM_FAX,"footer_attorney_1_email": C_ATTORNEY_1_EMAIL,"footer_attorney_2_email": C_ATTORNEY_2_EMAIL,"footer_attorney_3_email": C_ATTORNEY_3_EMAIL,"footer_city_state": C_CITY_STATE,"filing_date": filingDate,"clerk_details": clerkArray,
                    "respondentLoop": [ {"respondent_details": party1Array, "which_respondent": party1_whichRespFull},
                                        {"respondent_details": party2Array, "which_respondent": party2_whichRespFull},
                                        {"respondent_details": party3Array, "which_respondent": party3_whichRespFull}],
                    "court_admin_details": C_COURT_ADMIN_ARRAY,
                });
            } else if (numPartiesMailed == 4){
                doc.setData({
                    "current_date": filingDate,"cr_details": courtRepArray,"appellant_name": aName,"respondent_name": rName,"case_number": caseNumber.toUpperCase(),"cr_prefix": courtRep_prefix,"cr_surname": courtRep_lName,"date_of_proceeding": proceedingDate,"judge_name": judge_name,"court_type": courtType,"count_name": filingCounty,"footer_firm_name": C_FIRM_NAME,"s_attorney_filing": sFilingAttorney,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_address_1": C_ADDRESS_LINE_1,"footer_address_2": C_ADDRESS_LINE_2,"footer_telephone": C_FIRM_PHONE,"footer_facsimile": C_FIRM_FAX,"footer_attorney_1_email": C_ATTORNEY_1_EMAIL,"footer_attorney_2_email": C_ATTORNEY_2_EMAIL,"footer_attorney_3_email": C_ATTORNEY_3_EMAIL,"footer_city_state": C_CITY_STATE,"filing_date": filingDate,"clerk_details": clerkArray,
                    "respondentLoop": [ {"respondent_details": party1Array, "which_respondent": party1_whichRespFull},
                                        {"respondent_details": party2Array, "which_respondent": party2_whichRespFull},
                                        {"respondent_details": party3Array, "which_respondent": party3_whichRespFull},
                                        {"respondent_details": party4Array, "which_respondent": party4_whichRespFull}],
                    "court_admin_details": C_COURT_ADMIN_ARRAY,
                });
            }

            try {doc.render();} catch (error) {errorHandler(error);}
        
            var saveName;
            var saveAsPrompt = "Please choose a file name for the Transcript form cover letter";
            var saveAsDefaultInput = aName.concat(' transcript form cover letter.docx');
                if (document.getElementById("id_defaultFilename").checked == true) {saveName = saveAsDefaultInput;}
                else if (document.getElementById("id_defaultFilename").checked == false) {saveName = prompt(saveAsPrompt, saveAsDefaultInput);}
            
            var out=doc.getZip().generate({
                type:"blob",
                mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            })
            saveAs(out,saveName)	
        })


        loadFile(templateTF,function(error,content){
            if (error) { throw error };

            var zip = new PizZip(content);
            var doc;
            try {doc=new window.docxtemplater(zip, {paragraphLoop:true, linebreaks:true});} catch(error) {errorHandler(error);}
            
            doc.setData({
                "attorney_name": attorneyFiling,
                "firm_phone": C_FIRM_PHONE_NUMBER_ONLY,
                "attorney_email": attorneyFiling_email,
                "firm_address": C_ADDRESS_LINE_1,
                "firm_city": C_CITY,
                "state": C_STATE,
                "zip": C_ZIP,
                "case_number": caseNumber,
                "appellant_name": aName,
                "respondent_name": rName,
                "date_of_proceeding": proceedingDate,
                "county_name": filingCounty,
                "judge _name": judge_name, // note that variable in form has a space in it - fix
                "cr_name": courtRep_name,
                "opposing_counsel": opposingCounselName,
                "attorney_filing": sFilingAttorney,
                "current_date": filingDate,
            });


            try {doc.render();} catch (error) {errorHandler(error);}
        
            var saveName;
            var saveAsPrompt = "Please choose a file name for the Transcript form";
            var saveAsDefaultInput = aName.concat(' transcript form.docx');			
                if (document.getElementById("id_defaultFilename").checked == true) {saveName = saveAsDefaultInput;}
                else if (document.getElementById("id_defaultFilename").checked == false) {saveName = prompt(saveAsPrompt, saveAsDefaultInput);}
            
            var out=doc.getZip().generate({
                type:"blob",
                mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            })
            saveAs(out,saveName)	
        })
    }
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

function uncapitalize(s)
{
    return s && s[0].toLowerCase() + s.slice(1);
}