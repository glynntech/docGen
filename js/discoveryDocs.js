function primaryChange(selectObj) {
	
	var docTypeSelect = document.getElementById("id_docSelect").value;
	var jurisdiction = document.getElementById("id_jurisdiction").value;
	
	
// unhide inputs based on document
	if (docTypeSelect == "n/a" || jurisdiction == "n/a") {
		document.getElementById("req_2601").style.display = "none";
		document.getElementById("res_2601").style.display = "none";
		document.getElementById("req_2603").style.display = "none";
		document.getElementById("res_2603").style.display = "none";
		document.getElementById("depoNotice").style.display = "none";
		document.getElementById("discReq").style.display = "none";
		document.getElementById("discRes").style.display = "none";
		document.getElementById("FOIA_req").style.display = "none";
		document.getElementById("buttonVisual").style.display = "none";
    } else if (docTypeSelect == "2601_req"){
		document.getElementById("req_2601").style.display = "block";
		document.getElementById("res_2601").style.display = "none";
		document.getElementById("req_2603").style.display = "none";
		document.getElementById("res_2603").style.display = "none";
		document.getElementById("depoNotice").style.display = "none";
		document.getElementById("discReq").style.display = "none";
		document.getElementById("discRes").style.display = "none";
		document.getElementById("FOIA_req").style.display = "none";
		document.getElementById("buttonVisual").style.display = "block";
    } else if (docTypeSelect == "2601_res"){
		document.getElementById("req_2601").style.display = "none";
		document.getElementById("res_2601").style.display = "block";
		document.getElementById("req_2603").style.display = "none";
		document.getElementById("res_2603").style.display = "none";
		document.getElementById("depoNotice").style.display = "none";
		document.getElementById("discReq").style.display = "none";
		document.getElementById("discRes").style.display = "none";
		document.getElementById("FOIA_req").style.display = "none";
		document.getElementById("buttonVisual").style.display = "block";
    } else if (docTypeSelect == "2603_req"){
		document.getElementById("req_2601").style.display = "none";
		document.getElementById("res_2601").style.display = "none";
		document.getElementById("req_2603").style.display = "block";
		document.getElementById("res_2603").style.display = "none";
		document.getElementById("depoNotice").style.display = "none";
		document.getElementById("discReq").style.display = "none";
		document.getElementById("discRes").style.display = "none";
		document.getElementById("FOIA_req").style.display = "none";
		document.getElementById("buttonVisual").style.display = "block";
    } else if (docTypeSelect == "2603_res"){
		document.getElementById("req_2601").style.display = "none";
		document.getElementById("res_2601").style.display = "none";
		document.getElementById("req_2603").style.display = "none";
		document.getElementById("res_2603").style.display = "block";
		document.getElementById("depoNotice").style.display = "none";
		document.getElementById("discReq").style.display = "none";
		document.getElementById("discRes").style.display = "none";
		document.getElementById("FOIA_req").style.display = "none";
		document.getElementById("buttonVisual").style.display = "block";
    } else if (docTypeSelect == "depoNotice"){
		document.getElementById("req_2601").style.display = "none";
		document.getElementById("res_2601").style.display = "none";
		document.getElementById("req_2603").style.display = "none";
		document.getElementById("res_2603").style.display = "none";
		document.getElementById("depoNotice").style.display = "block";
		document.getElementById("discReq").style.display = "none";
		document.getElementById("discRes").style.display = "none";
		document.getElementById("FOIA_req").style.display = "none";
		document.getElementById("buttonVisual").style.display = "block";
    } else if (docTypeSelect == "discReq"){
		document.getElementById("req_2601").style.display = "none";
		document.getElementById("res_2601").style.display = "none";
		document.getElementById("req_2603").style.display = "none";
		document.getElementById("res_2603").style.display = "none";
		document.getElementById("depoNotice").style.display = "none";
		document.getElementById("discReq").style.display = "none";
		document.getElementById("discRes").style.display = "none";
		document.getElementById("FOIA_req").style.display = "none";
		document.getElementById("buttonVisual").style.display = "block";
    } else if (docTypeSelect == "discRes"){
		document.getElementById("req_2601").style.display = "none";
		document.getElementById("res_2601").style.display = "none";
		document.getElementById("req_2603").style.display = "none";
		document.getElementById("res_2603").style.display = "none";
		document.getElementById("depoNotice").style.display = "none";
		document.getElementById("discReq").style.display = "none";
		document.getElementById("discRes").style.display = "block";
		document.getElementById("FOIA_req").style.display = "none";
		document.getElementById("buttonVisual").style.display = "block";
    } else if (docTypeSelect == "FOIA_req"){
		document.getElementById("req_2601").style.display = "none";
		document.getElementById("res_2601").style.display = "none";
		document.getElementById("req_2603").style.display = "none";
		document.getElementById("res_2603").style.display = "none";
		document.getElementById("depoNotice").style.display = "none";
		document.getElementById("discReq").style.display = "none";
		document.getElementById("discRes").style.display = "none";
		document.getElementById("FOIA_req").style.display = "block";
		document.getElementById("buttonVisual").style.display = "block";
    }

    if (docTypeSelect == "2601_req" || docTypeSelect == "2601_res" || docTypeSelect == "2603_req" || docTypeSelect == "2603_res") {
        document.getElementById("id_jurisdiction").value = "federal"
        document.getElementById("id_jurisdiction").disabled = true
    } else if (docTypeSelect != "2601_req" && docTypeSelect != "2601_res" && docTypeSelect != "2603_req" && docTypeSelect != "2603_res") {
        document.getElementById("id_jurisdiction").disabled = false
    }

    // ungrey inputs
	if (jurisdiction == "state"){
		document.getElementById("id_filingCourt").disabled = false;
	} else if (jurisdiction == "federal"){
		document.getElementById("id_filingCourt").disabled = true;
	}


// FOIA request does not need header inputs
	if (docTypeSelect == "FOIA_req"){
		document.getElementById("id_filingCounty").disabled = true;
		document.getElementById("id_caseNumber").disabled = true;
		document.getElementById("id_plaintiffName").disabled = true;
		document.getElementById("id_plaintiffNumber").disabled = true;
		document.getElementById("id_plaintiffSex").disabled = true;
		document.getElementById("id_defendantName").disabled = true;
		document.getElementById("id_defendantNumber").disabled = true;
		if (jurisdiction == "state")
			{document.getElementById("id_filingCourt").disabled = true;}
	} else if (docTypeSelect != "FOIA_req"){
		document.getElementById("id_filingCounty").disabled = false;
		document.getElementById("id_caseNumber").disabled = false;
		document.getElementById("id_plaintiffName").disabled = false;
		document.getElementById("id_plaintiffNumber").disabled = false;
		document.getElementById("id_plaintiffSex").disabled = false;
		document.getElementById("id_defendantName").disabled = false;
		document.getElementById("id_defendantNumber").disabled = false;
		if (jurisdiction == "state")
			{document.getElementById("id_filingCourt").disabled = false;}
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


// depo notice -> number being deposed
function depoNumberChange(){
    var depoNum = document.getElementById("id_numIndivDepo").value;

    if (depoNum >= 2) {document.getElementById("deponent2").style.display = "block";
		if (depoNum >= 3) {document.getElementById("deponent3").style.display = "block";
            if (depoNum >= 4) {document.getElementById("deponent4").style.display = "block";
                if (depoNum >= 5) {document.getElementById("deponent5").style.display = "block";
                    if (depoNum >= 6) {document.getElementById("deponent6").style.display = "block";
                        if (depoNum >= 7) {document.getElementById("deponent7").style.display = "block";
                            if (depoNum >= 8) {document.getElementById("deponent8").style.display = "block";
                                if (depoNum >= 9) {document.getElementById("deponent9").style.display = "block";
                                    if (depoNum >= 10) {document.getElementById("deponent10").style.display = "block";
                                    }
                                }
                            }
                        }
                    }
                }
            }
		}
	}

    if (depoNum < 2) {document.getElementById("deponent2").style.display = "none";}
    if (depoNum < 3) {document.getElementById("deponent3").style.display = "none";}
    if (depoNum < 4) {document.getElementById("deponent4").style.display = "none";}
    if (depoNum < 5) {document.getElementById("deponent5").style.display = "none";}
    if (depoNum < 6) {document.getElementById("deponent6").style.display = "none";}
    if (depoNum < 7) {document.getElementById("deponent7").style.display = "none";}
    if (depoNum < 8) {document.getElementById("deponent8").style.display = "none";}
    if (depoNum < 9) {document.getElementById("deponent9").style.display = "none";}
    if (depoNum < 10) {document.getElementById("deponent10").style.display = "none";}
}







function generate() {
	
	var docTypeSelect = document.getElementById("id_docSelect").value;
	var jurisdiction = document.getElementById("id_jurisdiction").value;

	const C_FIRM_NAME = "Hawkins & Jedziniak, LLC";
	const C_ADDRESS_LINE_1 = "1225 South Church Street";
	const C_ADDRESS_LINE_2 = "Greenville, South Carolina 29605";
	const C_FIRM_PHONE = "(864) 275-8142 (telephone)";
	const C_FIRM_FAX = "(864) 752-0911 (facsimile)";
	const C_ATTORNEY_1_EMAIL = "josh@hjllcsc.com";
	const C_ATTORNEY_2_EMAIL = "helena@hjllcsc.com";
	const C_ATTORNEY_3_EMAIL = "ethan@hjllcsc.com";
	const C_PARALEGAL_NAME = "Candie Edwards";
	const C_CITY_STATE = "Greenville, South Carolina";
	
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


	// ******* grab variables from html elements *******
	var filingCounty = document.getElementById("id_filingCounty").value;
	var filingCourt = document.getElementById("id_filingCourt").value;
	
	var caseNumber = document.getElementById("id_caseNumber").value;
	var filingDate;

	var pName = document.getElementById("id_plaintiffName").value;
		var pNumber = document.getElementById("id_plaintiffNumber").value;
		var pPlural;
			if (pNumber == 1){pPlural = "Plaintiffs";}
			else if (pNumber == 0){pPlural = "Plaintiff";}
		var pSex = document.getElementById("id_plaintiffSex").value;
		var pSex_sentence;
			if (pSex == "n/a" || pNumber == 1){pSex_sentence = "their"}
			else if (pSex == "female"){pSex_sentence = "her"}
			else if (pSex == "male"){pSex_sentence = "his"}
			else if (pSex == "nonbinary"){pSex_sentence = "their"}
	
	var dName = document.getElementById("id_defendantName").value;
		var dNumber = document.getElementById("id_defendantNumber").value;
		var dPlural;
			if (dNumber == 1){dPlural = "Defendants";}
			else if (dNumber == 0){dPlural = "Defendant";}
    
    
    
	// 2601 request
    if (docTypeSelect == "2601_req"){
        var attorneyFiling = document.getElementById("id_attorneyFiling_2601req").value;
	

    // 2601 response
	} else if (docTypeSelect == "2601_res"){
        var attorneyFiling = document.getElementById("id_attorneyFiling_2601res").value;

        var interr_1A = document.getElementById("id_respInterrA_2601").value
            if (interr_1A == "blank"){interr_1A = ""}
			else if (interr_1A == "resp1"){interr_1A = "None known at this time."}

        var interr_2B = document.getElementById("id_respInterrB_2601").value
			if (interr_2B == "blank"){interr_2B = ""}
			else if (interr_2B == "resp1"){interr_2B = "The Plaintiff requests a jury trial."}
			else if (interr_2B == "resp2"){interr_2B = "The Plaintiff requested a jury trial in state court before this action was removed in violation of 28 U.S.C. § 1446."}

		var interr_3C = document.getElementById("id_respInterrC_2601").value
			if (interr_3C == "blank"){interr_3C = ""}
			else if (interr_3C == "resp1"){interr_3C = "The Plaintiff is not a publicly owned company."}

		var interr_4D = document.getElementById("id_respInterrD_2601").value
			if (interr_4D == "blank"){interr_4D = ""}
			else if (interr_4D == "resp1"){interr_4D = "The Plaintiff filed this action in federal court because there is complete diversity among the parties and because there is a federal question related to this action."}
			else if (interr_4D == "resp2"){interr_4D = "The Plaintiff filed this action in state court because there is not complete diversity among the parties and because there is no federal question related to this action. The Defendants removed this action in violation of 28 U.S.C. § 1446."}
			else if (interr_4D == "resp3"){interr_4D = "The Defendants removed this action to Federal Court."}

        var interr_5E = document.getElementById("id_respInterrE_2601").value
			if (interr_5E == "blank"){interr_5E = ""}
			else if (interr_5E == "resp1"){interr_5E = "This matter is not related to any other action filed in this District."}

        var interr_6F = document.getElementById("id_respInterrF_2601").value
			if (interr_6F == "blank"){interr_6F = ""}
			else if (interr_6F == "resp1"){interr_6F = "N/a"}
			
		var interr_7G = document.getElementById("id_respInterrG_2601").value
			if (interr_7G == "blank"){interr_7G = ""}
			else if (interr_7G == "resp1"){interr_7G = "The plaintiff is not aware of any other liable legal entity at this time.  The plaintiff reserves the right to amend this response and to name other individuals or entities in an amended complaint, if necessary."}
    

	// 2603 request
	} else if (docTypeSelect == "2603_req"){
        var attorneyFiling = document.getElementById("id_attorneyFiling_2603req").value;


    // 2601 response
	} else if (docTypeSelect == "2603_res"){
        var attorneyFiling = document.getElementById("id_attorneyFiling_2603res").value;

        var interr_1A = document.getElementById("id_respInterr1_2603").value
            if (interr_1A == "blank"){interr_1A = ""}

        var interr_2B = document.getElementById("id_respInterr2_2603").value
			if (interr_2B == "blank"){interr_2B = ""}

		var interr_3C = document.getElementById("id_respInterr3_2603").value
			if (interr_3C == "blank"){interr_3C = ""}
			else if (interr_3C == "resp1"){interr_3C = "The Plaintiff has not retained an expert to testify at this time."}

		var interr_4D = document.getElementById("id_respInterr4_2603").value
			if (interr_4D == "blank"){interr_4D = ""}

        var interr_5E = document.getElementById("id_respInterr5_2603").value
			if (interr_5E == "blank"){interr_5E = ""}
			else if (interr_5E == "resp1"){interr_5E = "There are no special instructions from the assigned judge at this time.  The court has not yet issued a scheduled order.  The Plaintiff will comply with the deadlines set forth in that scheduling order."}

        var interr_6F = document.getElementById("id_respInterr6_2603").value
			if (interr_6F == "blank"){interr_6F = ""}
			else if (interr_6F == "resp1"){interr_6F = "None at this time."}
			
		var interr_7G = document.getElementById("id_respInterr7_2603").value
			if (interr_7G == "blank"){interr_7G = ""}
			else if (interr_7G == "resp1"){interr_7G = "None at this time.  The Plaintiff will provide any additional information required by the Court."}


	// depo notice
	} else if (docTypeSelect == "depoNotice"){
		var attorneyFiling = document.getElementById("id_attorneyFiling_depoNotice").value;
		filingDate = dateFixUp(document.getElementById("id_filingDate_depoNotice").value);

		var depoBuildingName = document.getElementById("id_buildingName").value;
		var depoAddress1 = document.getElementById("id_buildingAddress1").value;
		var depoAddress2 = document.getElementById("id_buildingAddress2").value;
		var depoAddress3 = document.getElementById("id_buildingAddress3").value;
			var depoLocationArray_full = [depoBuildingName, depoAddress1, depoAddress2, depoAddress3]
			var depoLocationArray_filtered = depoLocationArray_full.filter(Boolean);
			var depoLocationArray = depoLocationArray_filtered.join(", ")
		
		var numDepos = document.getElementById("id_numIndivDepo").value;

		var depo1_name = document.getElementById("id_depo1_name").value;
		var depo1_date = dateFixUp(document.getElementById("id_depo1_date").value);
		var depo1_time = document.getElementById("id_depo1_time").value + " " + document.getElementById("id_depo1_AMPM").value;

		if (numDepos >= 2){
			var depo2_name = document.getElementById("id_depo2_name").value;
			var depo2_date = dateFixUp(document.getElementById("id_depo2_date").value);
			var depo2_time = document.getElementById("id_depo2_time").value + " " + document.getElementById("id_depo2_AMPM").value;
			if (numDepos >= 3){
				var depo3_name = document.getElementById("id_depo3_name").value;
				var depo3_date = dateFixUp(document.getElementById("id_depo3_date").value);
				var depo3_time = document.getElementById("id_depo3_time").value + " " + document.getElementById("id_depo3_AMPM").value;
				if (numDepos >= 4){
					var depo4_name = document.getElementById("id_depo4_name").value;
					var depo4_date = dateFixUp(document.getElementById("id_depo4_date").value);
					var depo4_time = document.getElementById("id_depo4_time").value + " " + document.getElementById("id_depo4_AMPM").value;
					if (numDepos >= 5){
						var depo5_name = document.getElementById("id_depo5_name").value;
						var depo5_date = dateFixUp(document.getElementById("id_depo5_date").value);
						var depo5_time = document.getElementById("id_depo5_time").value + " " + document.getElementById("id_depo5_AMPM").value;
						if (numDepos >= 6){
							var depo6_name = document.getElementById("id_depo6_name").value;
							var depo6_date = dateFixUp(document.getElementById("id_depo6_date").value);
							var depo6_time = document.getElementById("id_depo6_time").value + " " + document.getElementById("id_depo6_AMPM").value;
							if (numDepos >= 7){
								var depo7_name = document.getElementById("id_depo7_name").value;
								var depo7_date = dateFixUp(document.getElementById("id_depo7_date").value);
								var depo7_time = document.getElementById("id_depo7_time").value + " " + document.getElementById("id_depo7_AMPM").value;
								if (numDepos >= 8){
									var depo8_name = document.getElementById("id_depo8_name").value;
									var depo8_date = dateFixUp(document.getElementById("id_depo8_date").value);
									var depo8_time = document.getElementById("id_depo8_time").value + " " + document.getElementById("id_depo8_AMPM").value;
									if (numDepos >= 9){
										var depo9_name = document.getElementById("id_depo9_name").value;
										var depo9_date = dateFixUp(document.getElementById("id_depo9_date").value);
										var depo9_time = document.getElementById("id_depo9_time").value + " " + document.getElementById("id_depo9_AMPM").value;
										if (numDepos >= 10){
											var depo10_name = document.getElementById("id_depo10_name").value;
											var depo10_date = dateFixUp(document.getElementById("id_depo10_date").value);
											var depo10_time = document.getElementById("id_depo10_time").value + " " + document.getElementById("id_depo10_AMPM").value;
										}
									}
								}
							}
						}
					}
				}
			}
		}
		
		var depoNamesArray_full = [depo1_name, depo2_name, depo3_name, depo4_name, depo5_name, depo6_name, depo7_name, depo8_name, depo9_name, depo10_name]
		var depoNamesArray_filtered = depoNamesArray_full.filter(Boolean);
		var depoNamesArray = depoNamesArray_filtered.join(", ")


	// discovery request
	} else if (docTypeSelect == "discReq"){
		var input1 = "Give the names and addresses of persons known to the party or counsel to be witnesses concerning the facts of the case, state whether or not written or recorded statements have been taken from the witnesses, and state who has possession of such statements.\n";
		var input2 = "2. For each person known to each defendant or counsel to be a witness concerning the facts of the case, set forth either a summary sufficient to inform the other party of the important facts known to or observed by such witness, or provide a copy of any written or recorded statements taken from such witnesses.\n";
		var input3 = "3. Set forth a list of photographs, plats, sketches, or other prepared documents in possession of the party or counsel that relate to any claim or the defense of the case.\n";

		var interrogatoriesArray_temp = [input1, input2, input3]
		var interrogatoriesArray = interrogatoriesArray_temp.join("")
		

	// discovery response
	} else if (docTypeSelect == "discRes"){
		var toLine = document.getElementById("id_discRespName").value;
		var interrNum = document.getElementById("id_numSetInterr_resp").value


	// foia request
	} else if (docTypeSelect == "FOIA_req"){
		var custodian_name_noNewLine = document.getElementById("id_custodian_name").value;
		var custodian_name = newLineConcat(document.getElementById("id_custodian_name").value);
		var custodian_title = newLineConcat(document.getElementById("id_custodian_title").value);
		var custodian_orgName = newLineConcat(document.getElementById("id_org_name").value);
		var custodian_orgAdd1 = newLineConcat(document.getElementById("id_org_address1").value);
		var custodian_orgAdd2 = newLineConcat(document.getElementById("id_org_address2").value);
		var custodian_orgAdd3 = newLineConcat(document.getElementById("id_org_address3").value);
			var reqAddressArray_full = [custodian_name, custodian_title, custodian_orgName, custodian_orgAdd1, custodian_orgAdd2, custodian_orgAdd3]
			var reqAddressArray_filtered = reqAddressArray_full.filter(Boolean);
			var reqAddressArray = reqAddressArray_filtered.join("")

		var foia_parties = document.getElementById("id_FOIA_parties").value;
	}


	// misc additional variables
	var sFilingAttorney = "s/" + attorneyFiling

	if (filingDate == null){filingDate = todaysDate_MMMDDYYYY}



	var templateFile;
	var docNameFull;

    if (docTypeSelect == "2601_req"){
    	templateFile = "https://github.com/glynntech/docGen/tree/main/docs/discovery/26.01request.docx";
		docNameFull = "26.01 Request";

    } else if (docTypeSelect == "2601_res"){
    	templateFile = "https://github.com/glynntech/docGen/tree/main/docs/discovery/26.01response.docx";
		docNameFull = "26.01 Response";

    } else if (docTypeSelect == "2603_req"){
    	templateFile = "https://github.com/glynntech/docGen/tree/main/docs/discovery/26.03request.docx";
		docNameFull = "26.03 Request";

    } else if (docTypeSelect == "2603_res"){
    	templateFile = "https://github.com/glynntech/docGen/tree/main/docs/discovery/26.03response.docx";
		docNameFull = "26.03 Response";

    } else if (docTypeSelect == "depoNotice"){
    	templateFile = "https://github.com/glynntech/docGen/tree/main/docs/discovery/depositionNotice_" + jurisdiction + ".docx";
		docNameFull = "Deposition Notice";

    } else if (docTypeSelect == "discReq"){
    	templateFile = "https://github.com/glynntech/docGen/tree/main/docs/discovery/indivRequest_" + jurisdiction + ".docx";
		docNameFull = "Discovery Request";

	} else if (docTypeSelect == "discRes"){
    	templateFile = "https://github.com/glynntech/docGen/tree/main/docs/discovery/depositionResponse_" + jurisdiction + ".docx";
		docNameFull = "Discovery Response";

    } else if (docTypeSelect == "FOIA_req"){
    	templateFile = "https://github.com/glynntech/docGen/tree/main/docs/discovery/FOIARequest_" + jurisdiction + ".docx";
		docNameFull = "FOIA Request";
    }
	
	


	// input checks - ALL
	if (docTypeSelect == "n/a"){
		alert ("Please select a document to produce")
			return;
	} else if (jurisdiction == "n/a"){
		alert ("Please select a jurisdiction to file in")
			return;
	}
	
	if (docTypeSelect != "FOIA_req"){
		if (filingCounty == "n/a"){
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
		} else if (pNumber == 1 && pSex == "n/a"){
			alert ("Please enter the sex of the Plaintiff")
				return;
		} else if (dName == ""){
			alert ("Please enter a name for the defendant(s)")
				return;
		}
	}

	// 26.0_ docs
	if (docTypeSelect == "2601_req" || docTypeSelect == "2601_res" || docTypeSelect == "2603_req" || docTypeSelect == "2603_res"){
		if (attorneyFiling == "n/a"){
			alert ("Please select a filing attorney")
				return;
		}
	}

	// depo notice
	if (docTypeSelect == "depoNotice"){
		if (attorneyFiling == "n/a"){
			alert ("Please select a filing attorney")
				return;
		} else if (depoBuildingName == null && depoAddress1 == null && depoAddress2 == null && depoAddress3 == null){
			alert ("Please enter an address for the deposition")
				return;

		} else if (numDepos >= 1){
			if (depo1_name == null || depo1_date == null || depo1_time == null){
				alert ("Please enter the missing section(s) for deponent #1")
					return;}
		} else if (numDepos >= 2){
			if (depo2_name == null || depo2_date == null || depo2_time == null){
				alert ("Please enter the missing section(s) for deponent #2")
					return;}
		} else if (numDepos >= 3){
			if (depo3_name == null || depo3_date == null || depo3_time == null){
				alert ("Please enter the missing section(s) for deponent #3")
					return;}
		} else if (numDepos >= 4){
			if (depo4_name == null || depo4_date == null || depo4_time == null){
				alert ("Please enter the missing section(s) for deponent #4")
					return;}
		} else if (numDepos >= 5){
			if (depo5_name == null || depo5_date == null || depo5_time == null){
				alert ("Please enter the missing section(s) for deponent #5")
					return;}
		} else if (numDepos >= 6){
			if (depo6_name == null || depo6_date == null || depo6_time == null){
				alert ("Please enter the missing section(s) for deponent #6")
					return;}
		} else if (numDepos >= 7){
			if (depo7_name == null || depo7_date == null || depo7_time == null){
				alert ("Please enter the missing section(s) for deponent #7")
					return;}
		} else if (numDepos >= 8){
			if (depo8_name == null || depo8_date == null || depo8_time == null){
				alert ("Please enter the missing section(s) for deponent #8")
					return;}
		} else if (numDepos >= 9){
			if (depo9_name == null || depo9_date == null || depo9_time == null){
				alert ("Please enter the missing section(s) for deponent #9")
					return;}
		} else if (numDepos >= 10){
			if (depo10_name == null || depo10_date == null || depo10_time == null){
				alert ("Please enter the missing section(s) for deponent #10")
					return;}
		}
	}

	if (docTypeSelect == "discRes"){
		if (toLine == ""){
			alert ("Please enter the party that the discovery response is addressed to")
			return;
		} else if (interrNum == "n/a"){
			alert ("Please select the number set of interrogatories")
			return;
		}
	}

	if (docTypeSelect == "FOIA_req"){
		if (custodian_name == null){
			alert ("Please enter a name for the Custodian of Records")
			return;
		} else if (custodian_orgAdd1 == null && custodian_orgAdd2 == null && custodian_orgAdd3 == null){
			alert ("Please enter an address for the FOIA request")
			return;
		}
	}


	loadFile(templateFile,function(error,content){
		if (error) { throw error };

		var zip = new PizZip(content);
		var doc;
		try {doc=new window.docxtemplater(zip, {paragraphLoop:true, linebreaks:true});} catch(error) {errorHandler(error);}
		
		if (docTypeSelect == "2601_req" || docTypeSelect == "2601_res" || docTypeSelect == "2603_req" || docTypeSelect == "2603_res" || 
			docTypeSelect == "discReq" || docTypeSelect == "discRes" || docTypeSelect == "FOIA_req"){
			doc.setData({
				"county_name_allCaps": filingCounty.toUpperCase(),
				"county_name": filingCounty,
				"court_name_allCaps": filingCourt.toUpperCase(),
				"court_name": filingCourt,
				"case_number": caseNumber.toUpperCase(),
				"plaintiff_name": pName,
				"plaintiff_number": pPlural,
				"plaintiff_sex": pSex_sentence,
				"defendant_name": dName,
				"defendant_number": dPlural,
				
				// 2601 & 2603 docs
				"response_1A": interr_1A,
				"response_2B": interr_2B,
				"response_3C": interr_3C,
				"response_4D": interr_4D,
				"response_5E": interr_5E,
				"response_6F": interr_6F,
				"response_7G": interr_7G,

				// discovery request
				"interrText": interrogatoriesArray,

				// discovery response
				"interrogatories_number": interrNum,
				"to_line": toLine,

				// FOIA request
				"request_address_details": reqAddressArray,
				"custodian_of_records_name": custodian_name_noNewLine,
				"parties_involved": foia_parties,

				"footer_firm_name": C_FIRM_NAME,
				"s_attorney_filing": sFilingAttorney,
				"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,
				"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,
				"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,
				"footer_address_1": C_ADDRESS_LINE_1,
				"footer_address_2": C_ADDRESS_LINE_2,
				"footer_telephone": C_FIRM_PHONE,
				"footer_facsimile": C_FIRM_FAX,
				"footer_attorney_1_email": C_ATTORNEY_1_EMAIL,
				"footer_attorney_2_email": C_ATTORNEY_2_EMAIL,
				"footer_attorney_3_email": C_ATTORNEY_3_EMAIL,
				"footer_city_state": C_CITY_STATE,
				"filing_date": filingDate,
				"footer_paralegal_name": C_PARALEGAL_NAME,
			});

		} else if (docTypeSelect == "depoNotice"){
			if (numDepos == 1){
				doc.setData({
					"county_name_allCaps": filingCounty.toUpperCase(),"case_number": caseNumber.toUpperCase(),"plaintiff_name": pName,"plaintiff_number": pPlural,"plaintiff_sex": pSex_sentence,"defendant_name": dName,"defendant_number": dPlural,"footer_firm_name": C_FIRM_NAME,"s_attorney_filing": sFilingAttorney,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_address_1": C_ADDRESS_LINE_1,"footer_address_2": C_ADDRESS_LINE_2,"footer_telephone": C_FIRM_PHONE,"footer_facsimile": C_FIRM_FAX,"footer_attorney_1_email": C_ATTORNEY_1_EMAIL,"footer_attorney_2_email": C_ATTORNEY_2_EMAIL,"footer_attorney_3_email": C_ATTORNEY_3_EMAIL,"footer_city_state": C_CITY_STATE,"filing_date": filingDate,
					
					"individuals_to_be_deposed": depoNamesArray,
					"deposition_address": depoLocationArray,
					"tbl": [{"deponent_name": depo1_name,"depo_date": depo1_date,"depo_time": depo1_time,}],
				});
			} else if (numDepos == 2){
				doc.setData({
					"county_name_allCaps": filingCounty.toUpperCase(),"case_number": caseNumber.toUpperCase(),"plaintiff_name": pName,"plaintiff_number": pPlural,"plaintiff_sex": pSex_sentence,"defendant_name": dName,"defendant_number": dPlural,"footer_firm_name": C_FIRM_NAME,"s_attorney_filing": sFilingAttorney,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_address_1": C_ADDRESS_LINE_1,"footer_address_2": C_ADDRESS_LINE_2,"footer_telephone": C_FIRM_PHONE,"footer_facsimile": C_FIRM_FAX,"footer_attorney_1_email": C_ATTORNEY_1_EMAIL,"footer_attorney_2_email": C_ATTORNEY_2_EMAIL,"footer_attorney_3_email": C_ATTORNEY_3_EMAIL,"footer_city_state": C_CITY_STATE,"filing_date": filingDate,
					
					"individuals_to_be_deposed": depoNamesArray,
					"deposition_address": depoLocationArray,
					"tbl": [{"deponent_name": depo1_name,"depo_date": depo1_date,"depo_time": depo1_time,},
							{"deponent_name": depo2_name,"depo_date": depo2_date,"depo_time": depo2_time,}],
				});
			} else if (numDepos == 3){
				doc.setData({
					"county_name_allCaps": filingCounty.toUpperCase(),"case_number": caseNumber.toUpperCase(),"plaintiff_name": pName,"plaintiff_number": pPlural,"plaintiff_sex": pSex_sentence,"defendant_name": dName,"defendant_number": dPlural,"footer_firm_name": C_FIRM_NAME,"s_attorney_filing": sFilingAttorney,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_address_1": C_ADDRESS_LINE_1,"footer_address_2": C_ADDRESS_LINE_2,"footer_telephone": C_FIRM_PHONE,"footer_facsimile": C_FIRM_FAX,"footer_attorney_1_email": C_ATTORNEY_1_EMAIL,"footer_attorney_2_email": C_ATTORNEY_2_EMAIL,"footer_attorney_3_email": C_ATTORNEY_3_EMAIL,"footer_city_state": C_CITY_STATE,"filing_date": filingDate,
					
					"individuals_to_be_deposed": depoNamesArray,
					"deposition_address": depoLocationArray,
					"tbl": [{"deponent_name": depo1_name,"depo_date": depo1_date,"depo_time": depo1_time,},
							{"deponent_name": depo2_name,"depo_date": depo2_date,"depo_time": depo2_time,},
							{"deponent_name": depo3_name,"depo_date": depo3_date,"depo_time": depo3_time,}],
				});
			} else if (numDepos == 4){
				doc.setData({
					"county_name_allCaps": filingCounty.toUpperCase(),"case_number": caseNumber.toUpperCase(),"plaintiff_name": pName,"plaintiff_number": pPlural,"plaintiff_sex": pSex_sentence,"defendant_name": dName,"defendant_number": dPlural,"footer_firm_name": C_FIRM_NAME,"s_attorney_filing": sFilingAttorney,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_address_1": C_ADDRESS_LINE_1,"footer_address_2": C_ADDRESS_LINE_2,"footer_telephone": C_FIRM_PHONE,"footer_facsimile": C_FIRM_FAX,"footer_attorney_1_email": C_ATTORNEY_1_EMAIL,"footer_attorney_2_email": C_ATTORNEY_2_EMAIL,"footer_attorney_3_email": C_ATTORNEY_3_EMAIL,"footer_city_state": C_CITY_STATE,"filing_date": filingDate,
					
					"individuals_to_be_deposed": depoNamesArray,
					"deposition_address": depoLocationArray,
					"tbl": [{"deponent_name": depo1_name,"depo_date": depo1_date,"depo_time": depo1_time,},
						{"deponent_name": depo2_name,"depo_date": depo2_date,"depo_time": depo2_time,},
						{"deponent_name": depo3_name,"depo_date": depo3_date,"depo_time": depo3_time,},
						{"deponent_name": depo4_name,"depo_date": depo4_date,"depo_time": depo4_time,}],
				});
			} else if (numDepos == 5){
				doc.setData({
					"county_name_allCaps": filingCounty.toUpperCase(),"case_number": caseNumber.toUpperCase(),"plaintiff_name": pName,"plaintiff_number": pPlural,"plaintiff_sex": pSex_sentence,"defendant_name": dName,"defendant_number": dPlural,"footer_firm_name": C_FIRM_NAME,"s_attorney_filing": sFilingAttorney,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_address_1": C_ADDRESS_LINE_1,"footer_address_2": C_ADDRESS_LINE_2,"footer_telephone": C_FIRM_PHONE,"footer_facsimile": C_FIRM_FAX,"footer_attorney_1_email": C_ATTORNEY_1_EMAIL,"footer_attorney_2_email": C_ATTORNEY_2_EMAIL,"footer_attorney_3_email": C_ATTORNEY_3_EMAIL,"footer_city_state": C_CITY_STATE,"filing_date": filingDate,
					
					"individuals_to_be_deposed": depoNamesArray,
					"deposition_address": depoLocationArray,
					"tbl": [{"deponent_name": depo1_name,"depo_date": depo1_date,"depo_time": depo1_time,},
						{"deponent_name": depo2_name,"depo_date": depo2_date,"depo_time": depo2_time,},
						{"deponent_name": depo3_name,"depo_date": depo3_date,"depo_time": depo3_time,},
						{"deponent_name": depo4_name,"depo_date": depo4_date,"depo_time": depo4_time,},
						{"deponent_name": depo5_name,"depo_date": depo5_date,"depo_time": depo5_time,}],
				});
			} else if (numDepos == 6){
				doc.setData({
					"county_name_allCaps": filingCounty.toUpperCase(),"case_number": caseNumber.toUpperCase(),"plaintiff_name": pName,"plaintiff_number": pPlural,"plaintiff_sex": pSex_sentence,"defendant_name": dName,"defendant_number": dPlural,"footer_firm_name": C_FIRM_NAME,"s_attorney_filing": sFilingAttorney,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_address_1": C_ADDRESS_LINE_1,"footer_address_2": C_ADDRESS_LINE_2,"footer_telephone": C_FIRM_PHONE,"footer_facsimile": C_FIRM_FAX,"footer_attorney_1_email": C_ATTORNEY_1_EMAIL,"footer_attorney_2_email": C_ATTORNEY_2_EMAIL,"footer_attorney_3_email": C_ATTORNEY_3_EMAIL,"footer_city_state": C_CITY_STATE,"filing_date": filingDate,
					
					"individuals_to_be_deposed": depoNamesArray,
					"deposition_address": depoLocationArray,
					"tbl": [{"deponent_name": depo1_name,"depo_date": depo1_date,"depo_time": depo1_time,},
						{"deponent_name": depo2_name,"depo_date": depo2_date,"depo_time": depo2_time,},
						{"deponent_name": depo3_name,"depo_date": depo3_date,"depo_time": depo3_time,},
						{"deponent_name": depo4_name,"depo_date": depo4_date,"depo_time": depo4_time,},
						{"deponent_name": depo5_name,"depo_date": depo5_date,"depo_time": depo5_time,},
						{"deponent_name": depo6_name,"depo_date": depo6_date,"depo_time": depo6_time,}],
				});
			} else if (numDepos == 7){
				doc.setData({
					"county_name_allCaps": filingCounty.toUpperCase(),"case_number": caseNumber.toUpperCase(),"plaintiff_name": pName,"plaintiff_number": pPlural,"plaintiff_sex": pSex_sentence,"defendant_name": dName,"defendant_number": dPlural,"footer_firm_name": C_FIRM_NAME,"s_attorney_filing": sFilingAttorney,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_address_1": C_ADDRESS_LINE_1,"footer_address_2": C_ADDRESS_LINE_2,"footer_telephone": C_FIRM_PHONE,"footer_facsimile": C_FIRM_FAX,"footer_attorney_1_email": C_ATTORNEY_1_EMAIL,"footer_attorney_2_email": C_ATTORNEY_2_EMAIL,"footer_attorney_3_email": C_ATTORNEY_3_EMAIL,"footer_city_state": C_CITY_STATE,"filing_date": filingDate,
					
					"individuals_to_be_deposed": depoNamesArray,
					"deposition_address": depoLocationArray,
					"tbl": [{"deponent_name": depo1_name,"depo_date": depo1_date,"depo_time": depo1_time,},
						{"deponent_name": depo2_name,"depo_date": depo2_date,"depo_time": depo2_time,},
						{"deponent_name": depo3_name,"depo_date": depo3_date,"depo_time": depo3_time,},
						{"deponent_name": depo4_name,"depo_date": depo4_date,"depo_time": depo4_time,},
						{"deponent_name": depo5_name,"depo_date": depo5_date,"depo_time": depo5_time,},
						{"deponent_name": depo6_name,"depo_date": depo6_date,"depo_time": depo6_time,},
						{"deponent_name": depo7_name,"depo_date": depo7_date,"depo_time": depo7_time,}],
				});
			} else if (numDepos == 8){
				doc.setData({
					"county_name_allCaps": filingCounty.toUpperCase(),"case_number": caseNumber.toUpperCase(),"plaintiff_name": pName,"plaintiff_number": pPlural,"plaintiff_sex": pSex_sentence,"defendant_name": dName,"defendant_number": dPlural,"footer_firm_name": C_FIRM_NAME,"s_attorney_filing": sFilingAttorney,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_address_1": C_ADDRESS_LINE_1,"footer_address_2": C_ADDRESS_LINE_2,"footer_telephone": C_FIRM_PHONE,"footer_facsimile": C_FIRM_FAX,"footer_attorney_1_email": C_ATTORNEY_1_EMAIL,"footer_attorney_2_email": C_ATTORNEY_2_EMAIL,"footer_attorney_3_email": C_ATTORNEY_3_EMAIL,"footer_city_state": C_CITY_STATE,"filing_date": filingDate,
					
					"individuals_to_be_deposed": depoNamesArray,
					"deposition_address": depoLocationArray,
					"tbl": [{"deponent_name": depo1_name,"depo_date": depo1_date,"depo_time": depo1_time,},
						{"deponent_name": depo2_name,"depo_date": depo2_date,"depo_time": depo2_time,},
						{"deponent_name": depo3_name,"depo_date": depo3_date,"depo_time": depo3_time,},
						{"deponent_name": depo4_name,"depo_date": depo4_date,"depo_time": depo4_time,},
						{"deponent_name": depo5_name,"depo_date": depo5_date,"depo_time": depo5_time,},
						{"deponent_name": depo6_name,"depo_date": depo6_date,"depo_time": depo6_time,},
						{"deponent_name": depo7_name,"depo_date": depo7_date,"depo_time": depo7_time,},
						{"deponent_name": depo8_name,"depo_date": depo8_date,"depo_time": depo8_time,}],
				});
			} else if (numDepos == 9){
				doc.setData({
					"county_name_allCaps": filingCounty.toUpperCase(),"case_number": caseNumber.toUpperCase(),"plaintiff_name": pName,"plaintiff_number": pPlural,"plaintiff_sex": pSex_sentence,"defendant_name": dName,"defendant_number": dPlural,"footer_firm_name": C_FIRM_NAME,"s_attorney_filing": sFilingAttorney,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_address_1": C_ADDRESS_LINE_1,"footer_address_2": C_ADDRESS_LINE_2,"footer_telephone": C_FIRM_PHONE,"footer_facsimile": C_FIRM_FAX,"footer_attorney_1_email": C_ATTORNEY_1_EMAIL,"footer_attorney_2_email": C_ATTORNEY_2_EMAIL,"footer_attorney_3_email": C_ATTORNEY_3_EMAIL,"footer_city_state": C_CITY_STATE,"filing_date": filingDate,
					
					"individuals_to_be_deposed": depoNamesArray,
					"deposition_address": depoLocationArray,
					"tbl": [{"deponent_name": depo1_name,"depo_date": depo1_date,"depo_time": depo1_time,},
						{"deponent_name": depo2_name,"depo_date": depo2_date,"depo_time": depo2_time,},
						{"deponent_name": depo3_name,"depo_date": depo3_date,"depo_time": depo3_time,},
						{"deponent_name": depo4_name,"depo_date": depo4_date,"depo_time": depo4_time,},
						{"deponent_name": depo5_name,"depo_date": depo5_date,"depo_time": depo5_time,},
						{"deponent_name": depo6_name,"depo_date": depo6_date,"depo_time": depo6_time,},
						{"deponent_name": depo7_name,"depo_date": depo7_date,"depo_time": depo7_time,},
						{"deponent_name": depo8_name,"depo_date": depo8_date,"depo_time": depo8_time,},
						{"deponent_name": depo9_name,"depo_date": depo9_date,"depo_time": depo9_time,}],
				});
			} else if (numDepos == 10){
				doc.setData({
					"county_name_allCaps": filingCounty.toUpperCase(),"case_number": caseNumber.toUpperCase(),"plaintiff_name": pName,"plaintiff_number": pPlural,"plaintiff_sex": pSex_sentence,"defendant_name": dName,"defendant_number": dPlural,"footer_firm_name": C_FIRM_NAME,"s_attorney_filing": sFilingAttorney,"footer_attorney_1_name_bar": C_ATTORNEY_1_NAME_NUMBER,"footer_attorney_2_name_bar": C_ATTORNEY_2_NAME_NUMBER,"footer_attorney_3_name_bar": C_ATTORNEY_3_NAME_NUMBER,"footer_address_1": C_ADDRESS_LINE_1,"footer_address_2": C_ADDRESS_LINE_2,"footer_telephone": C_FIRM_PHONE,"footer_facsimile": C_FIRM_FAX,"footer_attorney_1_email": C_ATTORNEY_1_EMAIL,"footer_attorney_2_email": C_ATTORNEY_2_EMAIL,"footer_attorney_3_email": C_ATTORNEY_3_EMAIL,"footer_city_state": C_CITY_STATE,"filing_date": filingDate,
					
					"individuals_to_be_deposed": depoNamesArray,
					"deposition_address": depoLocationArray,
					"tbl": [{"deponent_name": depo1_name,"depo_date": depo1_date,"depo_time": depo1_time,},
						{"deponent_name": depo2_name,"depo_date": depo2_date,"depo_time": depo2_time,},
						{"deponent_name": depo3_name,"depo_date": depo3_date,"depo_time": depo3_time,},
						{"deponent_name": depo4_name,"depo_date": depo4_date,"depo_time": depo4_time,},
						{"deponent_name": depo5_name,"depo_date": depo5_date,"depo_time": depo5_time,},
						{"deponent_name": depo6_name,"depo_date": depo6_date,"depo_time": depo6_time,},
						{"deponent_name": depo7_name,"depo_date": depo7_date,"depo_time": depo7_time,},
						{"deponent_name": depo8_name,"depo_date": depo8_date,"depo_time": depo8_time,},
						{"deponent_name": depo9_name,"depo_date": depo9_date,"depo_time": depo9_time,},
						{"deponent_name": depo10_name,"depo_date": depo10_date,"depo_time": depo10_time,}],
				});
			}
		}

			
		
		try {doc.render();} catch (error) {errorHandler(error);}
		
		
			var saveName;
			var saveAsPrompt = "Please choose a file name for the " + docNameFull;
	
			var saveAsDefaultInput;
				if (docTypeSelect == "2601_req") {saveAsDefaultInput = pName.concat(' 2601 request.docx');}
				else if (docTypeSelect == "2601_res") {saveAsDefaultInput = pName.concat(' 2601 response.docx');}
				else if (docTypeSelect == "2603_req") {saveAsDefaultInput = pName.concat(' 2603 request.docx');}
				else if (docTypeSelect == "2603_res") {saveAsDefaultInput = pName.concat(' 2603 response.docx');}
				else if (docTypeSelect == "depoNotice") {saveAsDefaultInput = pName.concat(' deposition notice.docx');}
				else if (docTypeSelect == "discReq") {saveAsDefaultInput = pName.concat(' discovery request.docx');}
				else if (docTypeSelect == "discRes") {saveAsDefaultInput = pName.concat(' discovery response.docx');}
				else if (docTypeSelect == "FOIA_req") {saveAsDefaultInput = 'FOIA request.docx';}
			
			
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
