function primaryChange(selectObj) {
	
	var docTypeSelect = document.getElementById("id_docSelect").value;
	var jurisdiction = document.getElementById("id_jurisdiction").value;
	var includeCert = document.getElementById("id_certificateOfService").value;
	
	
// unhide inputs based on document
	if (jurisdiction == "n/a") {
		document.getElementById("AmendSchOrd_F").style.display = "none";
		document.getElementById("AmendComp_F").style.display = "none";
		document.getElementById("CompelDisc_S").style.display = "none";
		document.getElementById("CompelDisc_F").style.display = "none";
		document.getElementById("CompelMed_F").style.display = "none";
		document.getElementById("DefJudg").style.display = "none";
		document.getElementById("Reconsider_S").style.display = "none";
			if (includeCert == 1 && jurisdiction == "federal") {
				document.getElementById("CertificateService").style.display = "none";
			} else if (jurisdiction == "state" || includeCert == 0) {
				document.getElementById("CertificateService").style.display = "none";
			}
		document.getElementById("buttonVisual").style.display = "none";
	} else if (jurisdiction != "n/a") {
		if (docTypeSelect == "unspecified") {
			document.getElementById("AmendSchOrd_F").style.display = "none";
			document.getElementById("AmendComp_F").style.display = "none";
			document.getElementById("CompelDisc_S").style.display = "none";
			document.getElementById("CompelDisc_F").style.display = "none";
			document.getElementById("CompelMed_F").style.display = "none";
			document.getElementById("DefJudg").style.display = "none";
			document.getElementById("Reconsider_S").style.display = "none";
				if (includeCert == 1 && jurisdiction == "federal") {
					document.getElementById("CertificateService").style.display = "block";
				} else if (jurisdiction == "state" || includeCert == 0) {
					document.getElementById("CertificateService").style.display = "none";
				}
			document.getElementById("buttonVisual").style.display = "block";
			
		} else if (docTypeSelect == "amendSchOrd" && jurisdiction == "state") {
			document.getElementById("AmendSchOrd_F").style.display = "none";
			document.getElementById("AmendComp_F").style.display = "none";
			document.getElementById("CompelDisc_S").style.display = "none";
			document.getElementById("CompelDisc_F").style.display = "none";
			document.getElementById("CompelMed_F").style.display = "none";
			document.getElementById("DefJudg").style.display = "none";
			document.getElementById("Reconsider_S").style.display = "none";
			document.getElementById("CertificateService").style.display = "none";
			document.getElementById("buttonVisual").style.display = "none";
			alert ("A Motion to Amend the Scheduling Order is not applicable to state court. Please choose either federal court, or a different document");
			
		} else if (docTypeSelect == "amendSchOrd" && jurisdiction == "federal") {
			document.getElementById("AmendSchOrd_F").style.display = "block";
			document.getElementById("AmendComp_F").style.display = "none";
			document.getElementById("CompelDisc_S").style.display = "none";
			document.getElementById("CompelDisc_F").style.display = "none";
			document.getElementById("CompelMed_F").style.display = "none";
			document.getElementById("DefJudg").style.display = "none";
			document.getElementById("Reconsider_S").style.display = "none";
				if (includeCert == 1) {
					document.getElementById("CertificateService").style.display = "block";
				} else if (includeCert == 0) {
					document.getElementById("CertificateService").style.display = "none";
				}
			document.getElementById("buttonVisual").style.display = "block";
			
		} else if (docTypeSelect == "amendComp" && jurisdiction == "state") {
			document.getElementById("AmendSchOrd_F").style.display = "none";
			document.getElementById("AmendComp_F").style.display = "none";
			document.getElementById("CompelDisc_S").style.display = "none";
			document.getElementById("CompelDisc_F").style.display = "none";
			document.getElementById("CompelMed_F").style.display = "none";
			document.getElementById("DefJudg").style.display = "none";
			document.getElementById("Reconsider_S").style.display = "none";
			document.getElementById("CertificateService").style.display = "none";
			document.getElementById("buttonVisual").style.display = "block";
			
		} else if (docTypeSelect == "amendComp" && jurisdiction == "federal") {
			document.getElementById("AmendSchOrd_F").style.display = "none";
			document.getElementById("AmendComp_F").style.display = "block";
			document.getElementById("CompelDisc_S").style.display = "none";
			document.getElementById("CompelDisc_F").style.display = "none";
			document.getElementById("CompelMed_F").style.display = "none";
			document.getElementById("DefJudg").style.display = "none";
			document.getElementById("Reconsider_S").style.display = "none";
				if (includeCert == 1) {
					document.getElementById("CertificateService").style.display = "block";
				} else if (includeCert == 0) {
					document.getElementById("CertificateService").style.display = "none";
				}
			document.getElementById("buttonVisual").style.display = "block";
			
		} else if (docTypeSelect == "compelDisc" && jurisdiction == "state") {
			document.getElementById("AmendSchOrd_F").style.display = "none";
			document.getElementById("AmendComp_F").style.display = "none";
			document.getElementById("CompelDisc_S").style.display = "block";
			document.getElementById("CompelDisc_F").style.display = "none";
			document.getElementById("CompelMed_F").style.display = "none";
			document.getElementById("DefJudg").style.display = "none";
			document.getElementById("Reconsider_S").style.display = "none";
			document.getElementById("CertificateService").style.display = "none";
			document.getElementById("buttonVisual").style.display = "block";
			
		} else if (docTypeSelect == "compelDisc" && jurisdiction == "federal") {
			document.getElementById("AmendSchOrd_F").style.display = "none";
			document.getElementById("AmendComp_F").style.display = "none";
			document.getElementById("CompelDisc_S").style.display = "none";
			document.getElementById("CompelDisc_F").style.display = "block";
			document.getElementById("CompelMed_F").style.display = "none";
			document.getElementById("DefJudg").style.display = "none";
			document.getElementById("Reconsider_S").style.display = "none";
				if (includeCert == 1) {
					document.getElementById("CertificateService").style.display = "block";
				} else if (includeCert == 0) {
					document.getElementById("CertificateService").style.display = "none";
				}
			document.getElementById("buttonVisual").style.display = "block";
			
		} else if (docTypeSelect == "compelMed" && jurisdiction == "state") {
			document.getElementById("AmendSchOrd_F").style.display = "none";
			document.getElementById("AmendComp_F").style.display = "none";
			document.getElementById("CompelDisc_S").style.display = "none";
			document.getElementById("CompelDisc_F").style.display = "none";
			document.getElementById("CompelMed_F").style.display = "none";
			document.getElementById("DefJudg").style.display = "none";
			document.getElementById("Reconsider_S").style.display = "none";
			document.getElementById("CertificateService").style.display = "none";
			document.getElementById("buttonVisual").style.display = "block";
			
		} else if (docTypeSelect == "compelMed" && jurisdiction == "federal") {
			document.getElementById("AmendSchOrd_F").style.display = "none";
			document.getElementById("AmendComp_F").style.display = "none";
			document.getElementById("CompelDisc_S").style.display = "none";
			document.getElementById("CompelDisc_F").style.display = "none";
			document.getElementById("CompelMed_F").style.display = "block";
			document.getElementById("DefJudg").style.display = "none";
			document.getElementById("Reconsider_S").style.display = "none";
				if (includeCert == 1) {
					document.getElementById("CertificateService").style.display = "block";
				} else if (includeCert == 0) {
					document.getElementById("CertificateService").style.display = "none";
				}
			document.getElementById("buttonVisual").style.display = "block";
			
		} else if (docTypeSelect == "defualtJudg") {
			document.getElementById("AmendSchOrd_F").style.display = "none";
			document.getElementById("AmendComp_F").style.display = "none";
			document.getElementById("CompelDisc_S").style.display = "none";
			document.getElementById("CompelDisc_F").style.display = "none";
			document.getElementById("CompelMed_F").style.display = "none";
			document.getElementById("DefJudg").style.display = "block";
			document.getElementById("Reconsider_S").style.display = "none";
				if (includeCert == 1) {
					document.getElementById("CertificateService").style.display = "block";
				} else if (includeCert == 0 || jurisdiction == "state") {
					document.getElementById("CertificateService").style.display = "none";
				}
			document.getElementById("buttonVisual").style.display = "block";
			
		} else if (docTypeSelect == "reconsider" && jurisdiction == "state") {
			document.getElementById("AmendSchOrd_F").style.display = "none";
			document.getElementById("AmendComp_F").style.display = "none";
			document.getElementById("CompelDisc_S").style.display = "none";
			document.getElementById("CompelDisc_F").style.display = "none";
			document.getElementById("CompelMed_F").style.display = "none";
			document.getElementById("DefJudg").style.display = "none";
			document.getElementById("Reconsider_S").style.display = "block";
			document.getElementById("CertificateService").style.display = "none";
			document.getElementById("buttonVisual").style.display = "block";
		
		} else if (docTypeSelect == "reconsider" && jurisdiction == "federal") {
			document.getElementById("AmendSchOrd_F").style.display = "none";
			document.getElementById("AmendComp_F").style.display = "none";
			document.getElementById("CompelDisc_S").style.display = "none";
			document.getElementById("CompelDisc_F").style.display = "none";
			document.getElementById("CompelMed_F").style.display = "none";
			document.getElementById("DefJudg").style.display = "none";
			document.getElementById("Reconsider_S").style.display = "none";
			document.getElementById("CertificateService").style.display = "none";
			document.getElementById("buttonVisual").style.display = "none";
			alert ("A Motion to Reconsider is not applicable to federal court. Please choose either state court, or a different document");		
		
		} else if (docTypeSelect == "n/a") {
			document.getElementById("AmendSchOrd_F").style.display = "none";
			document.getElementById("AmendComp_F").style.display = "none";
			document.getElementById("CompelDisc_S").style.display = "none";
			document.getElementById("CompelDisc_F").style.display = "none";
			document.getElementById("CompelMed_F").style.display = "none";
			document.getElementById("DefJudg").style.display = "none";
			document.getElementById("Reconsider_S").style.display = "none";
			document.getElementById("CertificateService").style.display = "none";
			document.getElementById("buttonVisual").style.display = "none";
		}
	}

// ungrey inputs
	if (jurisdiction == "state"){
		document.getElementById("id_certificateOfService").disabled = true;
		document.getElementById("id_filingCourt").disabled = false;
	} else if (jurisdiction == "federal"){
		document.getElementById("id_certificateOfService").disabled = false;
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
	


	// amend schuling order (federal)
function asoF_numberAttorneysConsentingChange(selectObj) {
	var aNum = document.getElementById("id_asoF_numberAttorneysConsenting").value;
	
	if (aNum == 1) {
		document.getElementById("motion_asof1").style.display = "block";
		document.getElementById("motion_asof2").style.display = "none";
		document.getElementById("motion_asof3").style.display = "none";
		document.getElementById("motion_asof4").style.display = "none";
	} else if (aNum == 2) {
		document.getElementById("motion_asof1").style.display = "block";
		document.getElementById("motion_asof2").style.display = "block";
		document.getElementById("motion_asof3").style.display = "none";
		document.getElementById("motion_asof4").style.display = "none";
	} else if (aNum == 3) {
		document.getElementById("motion_asof1").style.display = "block";
		document.getElementById("motion_asof2").style.display = "block";
		document.getElementById("motion_asof3").style.display = "block";
		document.getElementById("motion_asof4").style.display = "none";
	} else if (aNum == 4) {
		document.getElementById("motion_asof1").style.display = "block";
		document.getElementById("motion_asof2").style.display = "block";
		document.getElementById("motion_asof3").style.display = "block";
		document.getElementById("motion_asof4").style.display = "block";
	}
}


	// mediation previously attempted
function prevMedAttemptChange(selectObj) {
	var prevAttempt = document.getElementById("id_cmF_prevMedAttempts").value;

	if (prevAttempt == 1) {
		document.getElementById("id_cmF_dateMedAttempted").disabled = false;
	} else if (prevAttempt == 0) {
			document.getElementById("id_cmF_dateMedAttempted").disabled = true;
	}

}


	// produce affidavit of default
function produceAffDefaultChange(selectObj) {
	var produceAffOfDefault = document.getElementById("id_dj_affDefault").value;

	if (produceAffOfDefault == 1) {
		document.getElementById("id_dj_summonsComplaintFiled").disabled = false;
		document.getElementById("id_dj_summonsComplaintServed").disabled = false;
	} else if (produceAffOfDefault == 0) {
			document.getElementById("id_dj_summonsComplaintFiled").disabled = true;
			document.getElementById("id_dj_summonsComplaintServed").disabled = true;
	}
}




	// certificate of service
function numberPartiesMailedChange(selectObj) {

	var numMailed = document.getElementById("id_numberPartiesMailed").value;

	if (numMailed == 1) {
        document.getElementById("motion_CoS2").style.display = "none";
        document.getElementById("motion_CoS3").style.display = "none";
        document.getElementById("motion_CoS4").style.display = "none";	
	} else if (numMailed == 2) {
        document.getElementById("motion_CoS2").style.display = "block";
        document.getElementById("motion_CoS3").style.display = "none";
        document.getElementById("motion_CoS4").style.display = "none";
	} else if (numMailed == 3) {
        document.getElementById("motion_CoS2").style.display = "block";
        document.getElementById("motion_CoS3").style.display = "block";
        document.getElementById("motion_CoS4").style.display = "none";
	} else if (numMailed == 4) {
        document.getElementById("motion_CoS2").style.display = "block";
        document.getElementById("motion_CoS3").style.display = "block";
        document.getElementById("motion_CoS4").style.display = "block";
	}
}







function generate() {
	
	var docTypeSelect = document.getElementById("id_docSelect").value;
	var jurisdiction = document.getElementById("id_jurisdiction").value;
	var includeCert = document.getElementById("id_certificateOfService").value;

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
	var filingDate = new Date(document.getElementById("id_filingDate").value);
	var footer_filingDate
		if (filingDate == ""){footer_filingDate = todaysDate_MMMDDYYYY}
		else if (filingDate != ""){
			monthWord = months[filingDate.getMonth()];
			footer_filingDate = monthWord + " " + filingDate.getDate() + ", " + filingDate.getFullYear();
		};

		var filingAttorney = document.getElementById("id_attorneyFiling").value;
	var sFilingAttorney
		if (filingAttorney == "Joshua T. Hawkins") {sFilingAttorney = "s/Joshua T. Hawkins"}
		else if (filingAttorney == "Helena L. Jedziniak") {sFilingAttorney = "s/Helena L. Jedziniak"}
		else if (filingAttorney == "Ethan L. Jedziniak") {sFilingAttorney = "s/Ethan L. Jedziniak"}
	
	var caseNumber = document.getElementById("id_caseNumber").value;
	
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
	

	// amend scheduling order federal	
    if (docTypeSelect == "amendSchOrd" && jurisdiction == "federal"){
		var asoFED_thePlaintiffWith_sentence;
			if (pNumber == 1) {asoFED_thePlaintiffWith_sentence = "the Plaintiffs, with"}
			else if (pNumber == 0) {asoFED_thePlaintiffWith_sentence = "the Plaintiff, with"}
		var asoFED_consentOfAllDef_sentence;
			if (dNumber == 1) {asoFED_consentOfAllDef_sentence = "consent of all Defendants"}
			else if (dNumber == 0) {asoFED_consentOfAllDef_sentence = "consent of the Defendant"}
			

        var asoFED_numConsenting = document.getElementById("id_asoF_numberAttorneysConsenting").value;

		// format federal bar number
		var str1 = document.getElementById("id_asoF_attorneyConsentingOne_Bar").value;
		var str2 = document.getElementById("id_asoF_attorneyConsentingTwo_Bar").value;
		var str3 = document.getElementById("id_asoF_attorneyConsentingThree_Bar").value;
		var str4 = document.getElementById("id_asoF_attorneyConsentingFour_Bar").value;
		var fedBar1;
		var fedBar2;
		var fedBar3;
		var fedBar4;

		if (asoFED_numConsenting >= 1 && str1 != null) {
			if (str1.startsWith("#") == true) {fedBar1 = str1}
			else if (str1.startsWith("#") == false) {fedBar1 = "#" + str1}
		}
		if (asoFED_numConsenting >= 2 && str2 != null) {
			if (str2.startsWith("#") == true) {fedBar2 = str2}
			else if (str2.startsWith("#") == false) {fedBar2 = "#" + str2}
		}
		if (asoFED_numConsenting >= 3 && str3 != null) {
			if (str3.startsWith("#") == true) {fedBar3 = str3}
			else if (str3.startsWith("#") == false) {fedBar3 = "#" + str3}
		}
		if (asoFED_numConsenting >= 4 && str4 != null) {
			if (str4.startsWith("#") == true) {fedBar4 = str4}
			else if (str4.startsWith("#") == false) {fedBar4 = "#" + str4}
		}

        var asoFED_name_1 = "s/" + document.getElementById("id_asoF_attorneyConsentingOne_Name").value;
		var asoFED_nameBar_1 = newLineConcat(document.getElementById("id_asoF_attorneyConsentingOne_Name").value + ", Fed. Bar " + fedBar1);
		var asoFED_address1_1 = newLineConcat(document.getElementById("id_asoF_attorneyConsentingOne_Address1").value);
        var asoFED_address2_1 = newLineConcat(document.getElementById("id_asoF_attorneyConsentingOne_Address2").value);
        var asoFED_address3_1 = newLineConcat(document.getElementById("id_asoF_attorneyConsentingOne_Address3").value);
        var asoFED_phone_1 = extraText(document.getElementById("id_asoF_attorneyConsentingOne_Phone").value, " (telephone)\n");
        var asoFED_fax_1 = extraText(document.getElementById("id_asoF_attorneyConsentingOne_Fax").value, " (facsimile)\n");
        var asoFED_web_1 = newLineConcat(document.getElementById("id_asoF_attorneyConsentingOne_Website").value);

        var asoFED_array1_full = [asoFED_nameBar_1, asoFED_address1_1, asoFED_address2_1, asoFED_address3_1, asoFED_phone_1, asoFED_fax_1, asoFED_web_1];
        var asoFED_array1 = asoFED_array1_full.filter(Boolean);
        var asoFED_array1_string = asoFED_array1.join("");


        var asoFED_name_2 = "\ns/" + document.getElementById("id_asoF_attorneyConsentingTwo_Name").value;
        var asoFED_nameBar_2 = newLineConcat(document.getElementById("id_asoF_attorneyConsentingTwo_Name").value + ", Fed. Bar " + fedBar2);
        var asoFED_address1_2 = newLineConcat(document.getElementById("id_asoF_attorneyConsentingTwo_Address1").value);
        var asoFED_address2_2 = newLineConcat(document.getElementById("id_asoF_attorneyConsentingTwo_Address2").value);
        var asoFED_address3_2 = newLineConcat(document.getElementById("id_asoF_attorneyConsentingTwo_Address3").value);
        var asoFED_phone_2 = extraText(document.getElementById("id_asoF_attorneyConsentingTwo_Phone").value, " (telephone)\n");
        var asoFED_fax_2 = extraText(document.getElementById("id_asoF_attorneyConsentingTwo_Fax").value, " (facsimile)\n");
        var asoFED_web_2 = newLineConcat(document.getElementById("id_asoF_attorneyConsentingTwo_Website").value);

        var asoFED_array2_full = [asoFED_nameBar_2, asoFED_address1_2, asoFED_address2_2, asoFED_address3_2, asoFED_phone_2, asoFED_fax_2, asoFED_web_2];
        var asoFED_array2 = asoFED_array2_full.filter(Boolean);
        var asoFED_array2_string = asoFED_array2.join("");


        var asoFED_name_3 = "\ns/" + document.getElementById("id_asoF_attorneyConsentingThree_Name").value;
        var asoFED_nameBar_3 = newLineConcat(document.getElementById("id_asoF_attorneyConsentingThree_Name").value + ", Fed. Bar " + fedBar3);
        var asoFED_address1_3 = newLineConcat(document.getElementById("id_asoF_attorneyConsentingThree_Address1").value);
        var asoFED_address2_3 = newLineConcat(document.getElementById("id_asoF_attorneyConsentingThree_Address2").value);
        var asoFED_address3_3 = newLineConcat(document.getElementById("id_asoF_attorneyConsentingThree_Address3").value);
        var asoFED_phone_3 = extraText(document.getElementById("id_asoF_attorneyConsentingThree_Phone").value, " (telephone)\n");
        var asoFED_fax_3 = extraText(document.getElementById("id_asoF_attorneyConsentingThree_Fax").value, " (facsimile)\n");
        var asoFED_web_3 = newLineConcat(document.getElementById("id_asoF_attorneyConsentingThree_Website").value);

        var asoFED_array3_full = [asoFED_nameBar_3, asoFED_address1_3, asoFED_address2_3, asoFED_address3_3, asoFED_phone_3, asoFED_fax_3, asoFED_web_3];
        var asoFED_array3 = asoFED_array3_full.filter(Boolean);
        var asoFED_array3_string = asoFED_array3.join("");


        var asoFED_name_4 = "\ns/" + document.getElementById("id_asoF_attorneyConsentingFour_Name").value;
        var asoFED_nameBar_4 = newLineConcat(document.getElementById("id_asoF_attorneyConsentingFour_Name").value + ", Fed. Bar " + fedBar4);
        var asoFED_address1_4 = newLineConcat(document.getElementById("id_asoF_attorneyConsentingFour_Address1").value);
        var asoFED_address2_4 = newLineConcat(document.getElementById("id_asoF_attorneyConsentingFour_Address2").value);
        var asoFED_address3_4 = newLineConcat(document.getElementById("id_asoF_attorneyConsentingFour_Address3").value);
        var asoFED_phone_4 = extraText(document.getElementById("id_asoF_attorneyConsentingFour_Phone").value, " (telephone)\n");
        var asoFED_fax_4 = extraText(document.getElementById("id_asoF_attorneyConsentingFour_Fax").value, " (facsimile)\n");
        var asoFED_web_4 = newLineConcat(document.getElementById("id_asoF_attorneyConsentingFour_Website").value);

        var asoFED_array4_full = [asoFED_nameBar_4, asoFED_address1_4, asoFED_address2_4, asoFED_address3_4, asoFED_phone_4, asoFED_fax_4, asoFED_web_4];
        var asoFED_array4 = asoFED_array4_full.filter(Boolean);
        var asoFED_array4_string = asoFED_array4.join("")

	
	// amend complaint state
	} else if (docTypeSelect == "amendComp" && jurisdiction == "state"){
		var acST_toTheDefs_sentence;
			if (pNumber == 1) {acST_toTheDefs_sentence = "to the Defendants"}
			else if (pNumber == 0) {acST_toTheDefs_sentence = "to the Defendant"}

	// amend complaint federal
    } else if (docTypeSelect == "amendComp" && jurisdiction == "federal"){
        var acFED_defConsent = document.getElementById("id_acF_defConsent").value;
		var acFED_defConsent_sentence;
			if (acFED_defConsent == 0){acFED_defConsent_sentence = "does not consent"}
			else if (acFED_defConsent == 1){acFED_defConsent_sentence = "consents"}
    	var acFED_amendReason = document.getElementById("id_acF_amendReason").value;
		

	// compel discovery state
    } else if (docTypeSelect == "compelDisc" && jurisdiction == "state"){
        var cdST_discServed = dateFixUp(document.getElementById("id_cdS_discServed").value);
		var cdST_compellingTheDef_sentence;
		var cdST_thatTheDef_sentence;
			if (pNumber == 0){
				cdST_compellingTheDef_sentence = "compelling the Defendant"
				cdST_thatTheDef_sentence = "that the Defendant"}
			else if (pNumber == 1){
				cdST_compellingTheDef_sentence = "compelling the Defendants"
				cdST_thatTheDef_sentence = "that the Defendants"}

	
	// compel discovery federal
    } else if (docTypeSelect == "compelDisc" && jurisdiction == "federal"){
        var cdFED_interr = document.getElementById("id_cdF_interrogNums").value;
        var cdFED_reqProd = document.getElementById("id_cdF_reqProdNums").value;
		
		var cdFED_orderTheDef_sentence;
		var cdFED_withDefCounsel_sentence;
		if (pNumber == 0){
			cdFED_orderTheDef_sentence = "order the Defendant"
			cdFED_withDefCounsel_sentence = "with the Defendant's counsel"}
		else if (pNumber == 1){
			cdFED_orderTheDef_sentence = "order the Defendants"
			cdFED_withDefCounsel_sentence = "with Defendants' counsel"}

	
	// compel mediation state
	} else if (docTypeSelect == "compelMed" && jurisdiction == "state"){
		var cmST_compellingTheDef_sentence;
		var cmST_orderTheDef_sentence;
		if (pNumber == 0){
			cmST_compellingTheDef_sentence = "compelling the Defendant"
			cmST_orderTheDef_sentence = "order the Defendant"}
		else if (pNumber == 1){
			cmST_compellingTheDef_sentence = "compelling the Defendants"
			cmST_orderTheDef_sentence = "order the Defendants"}


	// compel mediation federal
    } else if (docTypeSelect == "compelMed" && jurisdiction == "federal"){
        var cmFED_judgeName = document.getElementById("id_cmF_judgeName").value
		var cmFED_judgeName_formatted;

		if (cmFED_judgeName.startsWith("Judge") == true) {cmFED_judgeName_formatted = cmFED_judgeName}
		else if (cmFED_judgeName.startsWith("Judge") == false) {cmFED_judgeName_formatted = "Judge " + cmFED_judgeName}

        var cmFED_medAttempted = document.getElementById("id_cmF_prevMedAttempts").value
        var cmFED_dateMedAttempted;
            if (cmFED_medAttempted == 1){cmFED_dateMedAttempted = document.getElementById("id_cmF_dateMedAttempted").value}
            else if (cmFED_medAttempted == 0){cmFED_dateMedAttempted = ""}
	
		var cmFED_prevMed_sentence;
			if (cmFED_medAttempted == 0){cmFED_prevMed_sentence = "In spite of the parties’ efforts, the parties have been unable to conduct a mediation which complies with the terms of the Court’s Conference and Scheduling Order."}
			else if (cmFED_medAttempted == 1){cmFED_prevMed_sentence = "On " + cmFED_dateMedAttempted + ", the parties attempted to mediate this case. In spite of the parties’ efforts, the parties were unable to conduct a mediation which complied with the terms of the Court’s Conference and Scheduling Order."}

			
	// default judgment
    } else if (docTypeSelect == "defualtJudg"){
        var djALL_grounds = document.getElementById("id_dj_groundForDJ").value;
        var djALL_whichDef = document.getElementById("id_dj_whichDef").value;
        var djALL_reqAdmissionFilingDate = new Date(document.getElementById("id_dj_reqAdmissionFiling").value);
        var djALL_produceAffDef = document.getElementById("id_dj_affDefault").value;
            var djALL_summonsComplaintFiled = dateFixUp(document.getElementById("id_dj_summonsComplaintFiled").value);
            var djALL_summonsComplaintServed = dateFixUp(document.getElementById("id_dj_summonsComplaintServed").value);
        
            // additional declarations for default judgment
            var djALL_reqAdmission_45DaysLater = addDays(djALL_reqAdmissionFilingDate, 45);
            var djALL_byTheDef_sentence;
            var djALL_defHaveDone_sentence;
            var djALL_defAreInDefault_sentence;
			var djALL_againstTheDef_sentence;
			var djALL_defForDefaultIsIn_sentence;
			var djALL_againstThoseDef_sentence;
                if (pNumber == 0){
                    djALL_byTheDef_sentence = "by the defendant"
                    djALL_defHaveDone_sentence = "defendant has done"
                    djALL_defAreInDefault_sentence = "defendant is in default"
                    djALL_defForDefaultIsIn_sentence = djALL_whichDef + "is in"
                    djALL_againstTheDef_sentence = "against the defendant"
                    djALL_againstThoseDef_sentence = "against the defendant"
                } else if (pNumber == 1){
                    djALL_byTheDef_sentence = "by the defendants"
                    djALL_defHaveDone_sentence = "defendants have done"
                    djALL_defAreInDefault_sentence = "defendants are in default"
                    djALL_defForDefaultIsIn_sentence = djALL_whichDef + "are in"
                    djALL_againstTheDef_sentence = "against the defendants"
                    djALL_againstThoseDef_sentence = "against those defendants"
                }

	
	// reconsider state
    } else if (docTypeSelect == "reconsider" && jurisdiction == "state"){
        var rST_motionType = document.getElementById("id_rS_motionReconsider").value;
        var rST_hearingDate = dateFixUp(document.getElementById("id_rS_dateHearing").value);
        var rST_orderFormalized = dateFixUp(document.getElementById("id_rS_dateFormalized").value);

		var rST_relatedToTheDef_sentence;
		var rST_thenTheDefCaused_sentence;
		if (pNumber == 0){
			rST_relatedToTheDef_sentence = "related to the Defendant"
			rST_thenTheDefCaused_sentence = "then the Defendant caused"}
		else if (pNumber == 1){
			rST_relatedToTheDef_sentence = "related to the Defendants"
			rST_thenTheDefCaused_sentence = "then the Defendants caused"}
    }



	// certificate of service
    if (includeCert == 1 && jurisdiction == "federal"){
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
    }



	if (jurisdiction == "n/a"){
		alert ("Please select a jurisdiction to file in");
			return;
	} else if (filingCounty == "n/a"){
		alert ("Please select a filing county");
			return;
	} else if (filingCourt == "n/a" && jurisdiction == "state"){
		alert ("Please select a filing court");
			return;
	} else if (caseNumber == ""){
		alert ("Please enter a case number");
			return;
	} else if (pName == ""){
		alert ("Please enter a name for the plaintiff(s)");
			return;
	} else if (dName == ""){
		alert ("Please enter a name for the defendant(s)");
			return;
	}
	
	
	
	// input checks - AMEND SCHEDULING ORDER FEDERAL
	if (docTypeSelect == "amendSchOrd" && jurisdiction == "federal"){
		if (asoFED_numConsenting >= 1){
			if (asoFED_name_1 == "s/"){
				alert ("Please enter the name of the attorney for Defendant #1");
				return;
			} else if (asoFED_address1_1 == null || asoFED_address2_1 == null || asoFED_address3_1 == null){
				alert ("Please enter the address of the attorney for Defendant #1");
				return;
			}

			if (asoFED_numConsenting >= 2){
				if (asoFED_name_2 == "\ns/"){
					alert ("Please enter the name of the attorney for Defendant #2");
					return;
				} else if (asoFED_address1_2 == null || asoFED_address2_2 == null || asoFED_address3_2 == null){
					alert ("Please enter the address of the attorney for Defendant #2");
					return;
				}

				if (asoFED_numConsenting >= 3){
					if (asoFED_name_3 == "\ns/"){
						alert ("Please enter the name of the attorney for Defendant #3");
						return;
					} else if (asoFED_address1_3 == null || asoFED_address2_3 == null || asoFED_address3_3 == null){
						alert ("Please enter the address of the attorney for Defendant #3");
						return;
					}

					if (asoFED_numConsenting >= 4){
						if (asoFED_name_4 == "\ns/"){
							alert ("Please enter the name of the attorney for Defendant #4");
							return;
						} else if (asoFED_address1_4 == null || asoFED_address2_4 == null || asoFED_address3_4 == null){
							alert ("Please enter the address of the attorney for Defendant #4");
							return;
						}
					}
				}
			}
		}
	}
	

	// input checks - AMEND COMPLAINT FEDERAL
	if (docTypeSelect == "amendComp" && jurisdiction == "federal"){
		if (acFED_amendReason == null){
			alert ("Please enter a reason for amending the complaint");
			return;
		}
	}
	
	
	// input checks - COMPEL DISCOVERY STATE
	if (docTypeSelect == "compelDisc" && jurisdiction == "state"){
		if (cdST_discServed == null){
			alert ("Please enter the date that discovery was initially served");
			return;
		}
	}
	
	// input checks - COMPEL DISCOVERY FEDERAL
	if (docTypeSelect == "compelDisc" && jurisdiction == "federal"){
		if (cdFED_interr == null && cdFED_reqProd == null){
			alert ("Please enter at least one interrogatory or request for production number to compel");
			return;
		}
	}
	
	
	// input checks - COMPEL MEDIATION FEDERAL
	if (docTypeSelect == "compelMed" && jurisdiction == "federal"){
		if (cmFED_judgeName == null){
			alert ("Please enter the name of the judge who issued mediation order");
			return;
		} else if (cmFED_medAttempted == 1 && cmFED_dateMedAttempted == null){
			alert ("Please enter the date that mediation was previously attempted");
			return;
		}
	}
	
/*

	// input checks - DEFAULT JUDGMENT ALL
	if (docTypeSelect == "defualtJudg"){
		if (djALL_grounds == null){
			alert ("Please select the grounds for default judgment");
			return;
		} else if (djALL_reqAdmissionFilingDate == null){}
	}
	
	// input checks - RECONSIDER STATE
	if (docTypeSelect == "reconsider" && jurisdiction == "state"){
		if (){
			alert ("");
			return;
		}
	}
	*/
	
	
	// input checks - CERTIFICATE OF SERVICE
	if (includeCert == 1 && jurisdiction == "federal"){
		if (certOS_docsMailed == ""){
			alert ("Please enter the name of the documents being mailed");
			return;
		}
		if (certOS_party1Name == ""){
			alert ("Please enter the name of party #1");
			return;
		}
		if (certOS_party1Address1 == ""){
			alert ("Please enter at least the first line of party #1's address");
			return;
		}
		if (certOS_numberParties >= 2){
			if (certOS_party2Name == ""){
				alert ("Please enter the name of party #2");
				return;
			}
			if (certOS_party2Address1 == ""){
				alert ("Please enter at least the first line of party #2's address");
				return;
			}
			if (certOS_numberParties >= 3){
				if (certOS_party3Name == ""){
					alert ("Please enter the name of party #3");
					return;
				}
				if (certOS_party3Address1 == ""){
					alert ("Please enter at least the first line of party #3's address");
					return;
				}
				if (certOS_numberParties >= 4){
					if (certOS_party4Name == ""){
						alert ("Please enter the name of party #4");
						return;
					}
					if (certOS_party4Address1 == ""){
						alert ("Please enter at least the first line of party #4's address");
						return;
					}
				}
			}
		}
	}
	


	// set file location variable
	var templateFile;

    if (docTypeSelect == "unspecified"){
    	templateFile = "https://hawkinsandjedziniak.com/docs/motions/general_mtn_" + jurisdiction + ".docx"
    } else if (docTypeSelect == "amendSchOrd" && jurisdiction == "federal"){
        templateFile = "https://hawkinsandjedziniak.com/docs/motions/mtn_to_amend_scheduling_order_federal.docx";
    } else if (docTypeSelect == "amendComp"){
    	templateFile = "https://hawkinsandjedziniak.com/docs/motions/mtn_to_amend_the_complaint_" + jurisdiction + ".docx"
    } else if (docTypeSelect == "compelDisc"){
    	templateFile = "https://hawkinsandjedziniak.com/docs/motions/mtn_to_compel_discovery_" + jurisdiction + ".docx"
    } else if (docTypeSelect == "compelMed"){
    	templateFile = "https://hawkinsandjedziniak.com/docs/motions/mtn_to_compel_mediation_" + jurisdiction + ".docx"
    } else if (docTypeSelect == "defualtJudg" && djALL_grounds == "noResponse"){
    	templateFile = "https://hawkinsandjedziniak.com/docs/motions/mtn_for_a_default_judgment_non_responsive_" + jurisdiction + ".docx"
	} else if (docTypeSelect == "defualtJudg" && djALL_grounds == "other"){
    	templateFile = "https://hawkinsandjedziniak.com/docs/motions/mtn_for_a_default_judgment_other_" + jurisdiction + ".docx"
    } else if (docTypeSelect == "reconsider" && jurisdiction == "state"){
    	templateFile = "https://hawkinsandjedziniak.com/docs/motions/mtn_to_reconsider_state.docx"
    }
	
	
	var docNameFull;
	if (docTypeSelect == "unspecified"){docNameFull = "Motion"}
	else if (docTypeSelect == "amendSchOrd"){docNameFull = "Motion to Amend the Scheduling Order"}
	else if (docTypeSelect == "amendComp"){docNameFull = "Motion to Amend the Complaint"}
	else if (docTypeSelect == "compelDisc"){docNameFull = "Motion to Compel Discovery"}
	else if (docTypeSelect == "compelMed"){docNameFull = "Motion to Compel Mediation"}
	else if (docTypeSelect == "defualtJudg"){docNameFull = "Motion for Default Judgment"}
	else if (docTypeSelect == "reconsider"){docNameFull = "Motion to Reconsider"}


	
	loadFile(templateFile,function(error,content){
		if (error) { throw error };

		var zip = new PizZip(content);
		var doc;
		try {doc=new window.docxtemplater(zip, {paragraphLoop:true, linebreaks:true});} catch(error) {errorHandler(error);}
		

		if (docTypeSelect == "unspecified" || docTypeSelect == "amendComp" || docTypeSelect == "compelDisc" || docTypeSelect == "compelMed" || docTypeSelect == "defualtJudg" || docTypeSelect == "reconsider"){
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
				
				// amendComp
				"to_the_Defendants": acST_toTheDefs_sentence,
				"defense_consents": acFED_defConsent_sentence,
				"reason_for_amending_complaint": acFED_amendReason,

				// compelDisc
				"compelling_the_defendant_disc": cdST_compellingTheDef_sentence,
				"discovery_served_date": cdST_discServed,
				"that_the_defendant": cdST_thatTheDef_sentence,
				"order_the_defendants": cdFED_orderTheDef_sentence,
				"with_defendants’_counsel": cdFED_withDefCounsel_sentence,
				"interrogatory_numbers": cdFED_interr,
				"production_numbers": cdFED_reqProd,
				
				// compelMed
				"compelling_the_defendant_comp": cmST_compellingTheDef_sentence,
				"order_the_defendant": cmST_orderTheDef_sentence,
				"judge_name": cmFED_judgeName_formatted,
				"previous_mediation": cmFED_prevMed_sentence,

				// default judgment
				"defendants_for_default": djALL_whichDef,
				"date_45_days_after_filing_date": djALL_reqAdmission_45DaysLater,
				"by_the_defendant": djALL_byTheDef_sentence,
				"defendants_have_done": djALL_defHaveDone_sentence,
				"defendants_are_in_default": djALL_defAreInDefault_sentence,
				"against_the_defendant": djALL_againstTheDef_sentence,
				"defendants_for_default_is_in": djALL_defForDefaultIsIn_sentence,
				"against_those_defendants": djALL_againstThoseDef_sentence,
				
				// reconsider
				"date_of_hearing": rST_hearingDate,
				"motion_reconsidering": rST_motionType,
				"date_order_formalized": rST_orderFormalized,
				"related_to_the_defendant": rST_relatedToTheDef_sentence,
				"then_the_defendant_caused": rST_thenTheDefCaused_sentence,

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
				"filing_date": footer_filingDate,
			});
		
		// amend scheduling order
		} else if (docTypeSelect == "amendSchOrd" && jurisdiction == "federal"){
			if (asoFED_numConsenting == 1){
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

					"the_plaintiffs_with": asoFED_thePlaintiffWith_sentence,
					"consent_of_all_defendants": asoFED_consentOfAllDef_sentence,
					"consentingAttorneys": [
						{   "attorney_name": asoFED_name_1,
							"attorney_details": asoFED_array1_string,},
					],

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
					"filing_date": footer_filingDate,				
				});
			} else if (asoFED_numConsenting == 2){
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
					
					"the_plaintiffs_with": asoFED_thePlaintiffWith_sentence,
					"consent_of_all_defendants": asoFED_consentOfAllDef_sentence,
					"consentingAttorneys": [
						{   "attorney_name": asoFED_name_1,
							"attorney_details": asoFED_array1_string,},
						{   "attorney_name": asoFED_name_2,
							"attorney_details": asoFED_array2_string,},
					],
					
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
					"filing_date": footer_filingDate,				
				});
			} else if (asoFED_numConsenting == 3){
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
					
					"the_plaintiffs_with": asoFED_thePlaintiffWith_sentence,
					"consent_of_all_defendants": asoFED_consentOfAllDef_sentence,
					"consentingAttorneys": [
						{   "attorney_name": asoFED_name_1,
							"attorney_details": asoFED_array1_string,},
						{   "attorney_name": asoFED_name_2,
							"attorney_details": asoFED_array2_string,},
						{   "attorney_name": asoFED_name_3,
							"attorney_details": asoFED_array3_string,},
					],
					
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
					"filing_date": footer_filingDate,				
				});
			} else if (asoFED_numConsenting == 4){
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
					
					"the_plaintiffs_with": asoFED_thePlaintiffWith_sentence,
					"consent_of_all_defendants": asoFED_consentOfAllDef_sentence,
					"consentingAttorneys": [
						{   "attorney_name": asoFED_name_1,
							"attorney_details": asoFED_array1_string,},
						{   "attorney_name": asoFED_name_2,
							"attorney_details": asoFED_array2_string,},
						{   "attorney_name": asoFED_name_3,
							"attorney_details": asoFED_array3_string,},
						{   "attorney_name": asoFED_name_4,
							"attorney_details": asoFED_array4_string,},
					],
					
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
					"filing_date": footer_filingDate,				
				});
			}
		}


		try {doc.render();} catch (error) {errorHandler(error);}
		



		
		var saveName;
		var saveAsPrompt = "Please choose a file name for the " + docNameFull;

		var saveAsDefaultInput;
			if (docTypeSelect == "unspecified") {saveAsDefaultInput = pName.concat(' motion.docx');}
			else if (docTypeSelect == "amendSchOrd") {saveAsDefaultInput = pName.concat(' motion to amend the scheduling order.docx');}
			else if (docTypeSelect == "amendComp") {saveAsDefaultInput = pName.concat(' motion to amend the complaint.docx');}
			else if (docTypeSelect == "compelDisc") {saveAsDefaultInput = pName.concat(' motion to compel discovery.docx');}
			else if (docTypeSelect == "compelMed") {saveAsDefaultInput = pName.concat(' motion to compel mediation.docx');}
			else if (docTypeSelect == "defualtJudg") {saveAsDefaultInput = pName.concat(' motion for default judgment.docx');}
			else if (docTypeSelect == "reconsider") {saveAsDefaultInput = pName.concat(' motion to reconsider.docx');}
		
		
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




	if (includeCert == 1 && jurisdiction == "federal") {
		loadFile("https://hawkinsandjedziniak.com/wp-content/uploads/2021/06/certificate-of-service-federal.docx",function(error,content){
			if (error) { throw error };
	
			var zip = new PizZip(content);
			var doc;
			try {doc=new window.docxtemplater(zip, {paragraphLoop:true, linebreaks:true});} catch(error) {errorHandler(error);}
			
	
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
					"documents_mailed": docNameFull,
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
					"documents_mailed": docNameFull,
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
					"documents_mailed": docNameFull,
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
					"documents_mailed": docNameFull,
					"footer_firm_location": C_CITY_STATE,
					"footer_firm_name": C_FIRM_NAME,
					"footer_paralegal_name": C_PARALEGAL_NAME,
					"current_date": todaysDate_MMMDDYYYY,
					"current_year": d.getFullYear(),
				})
			}
	
			try {doc.render();} catch (error) {errorHandler(error);}
			
	
			var saveName
			var saveAsPrompt
			var saveAsDefaultInput
				saveAsPrompt = "Please choose a file name for the Certificate of Service";
				saveAsDefaultInput = pName.concat(' certificate of service.docx');
			
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
	
	
	if (djALL_produceAffDef == 1 && docTypeSelect == "defualtJudg") {
		loadFile("https://hawkinsandjedziniak.com/wp-content/uploads/2021/05/affidavit-of-default-"+ jurisdiction + ".docx",function(error,content){
			if (error) { throw error };
	
			var zip = new PizZip(content);
			var doc;
			try {doc=new window.docxtemplater(zip, {paragraphLoop:true, linebreaks:true});} catch(error) {errorHandler(error);}
			
	
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
					"which_defendant": djALL_whichDef,
					"attorney_name_affOD": filingAttorney,
					"summons_complaint_filed": djALL_summonsComplaintFiled,
					"summons_complaint_served": djALL_summonsComplaintServed,
				"footer_firm_location": C_CITY_STATE,
				"footer_firm_name": C_FIRM_NAME,
				"footer_paralegal_name": C_PARALEGAL_NAME,
				"current_date": todaysDate_MMMDDYYYY,
				"current_year": d.getFullYear(),
			});
	
			try {doc.render();} catch (error) {errorHandler(error);}
			
	
			var saveName
			var saveAsPrompt
			var saveAsDefaultInput
				saveAsPrompt = "Please choose a file name for the Affidavit of Default";
				saveAsDefaultInput = pName.concat(' affidavit of default.docx');
			
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


