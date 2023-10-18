function primaryChange(selectObj) {
	
	var docTypeSelect = document.getElementById("id_docSelect").value;
    var courtType = document.getElementById("id_courtType").value;
	

// unhide inputs based on document
	if (docTypeSelect == "n/a" || courtType == "n/a") {
        document.getElementById("courtroom").style.display = "none";
        document.getElementById("docInspection").style.display = "none";
        document.getElementById("inspectionAddress").style.display = "none";
        document.getElementById("depoAddress").style.display = "none";
        document.getElementById("premInspection").style.display = "none";
        document.getElementById("buttonVisual").style.display = "none";

    } else if (docTypeSelect == "courtAppear"){
        if (courtType == "civil" || courtType == "civilFamily"){
            document.getElementById("courtroom").style.display = "block";
            document.getElementById("docInspection").style.display = "none";
            document.getElementById("inspectionAddress").style.display = "none";
            document.getElementById("depoAddress").style.display = "none";
            document.getElementById("premInspection").style.display = "none";
            document.getElementById("buttonVisual").style.display = "block";
        } else if (courtType == "criminal"){
            document.getElementById("courtroom").style.display = "block";
            document.getElementById("docInspection").style.display = "block";
            document.getElementById("inspectionAddress").style.display = "none";
            document.getElementById("depoAddress").style.display = "none";
            document.getElementById("premInspection").style.display = "none";
            document.getElementById("buttonVisual").style.display = "block";
        }
    
    } else if (docTypeSelect == "docInsp"){
        if (courtType == "civil" || courtType == "civilFamily"){
            document.getElementById("courtroom").style.display = "none";
            document.getElementById("docInspection").style.display = "block";
            document.getElementById("inspectionAddress").style.display = "none";
            document.getElementById("depoAddress").style.display = "none";
            document.getElementById("premInspection").style.display = "none";
            document.getElementById("buttonVisual").style.display = "block";
        } else if (courtType == "criminal"){
            document.getElementById("courtroom").style.display = "none";
            document.getElementById("docInspection").style.display = "none";
            document.getElementById("inspectionAddress").style.display = "none";
            document.getElementById("depoAddress").style.display = "none";
            document.getElementById("premInspection").style.display = "none";
            document.getElementById("buttonVisual").style.display = "none";
            alert ("");
			return;
        }

    } else if (docTypeSelect == "depoAppear"){
        if (courtType == "civil" || courtType == "civilFamily"){
            document.getElementById("courtroom").style.display = "none";
            document.getElementById("docInspection").style.display = "none";
            document.getElementById("inspectionAddress").style.display = "none";
            document.getElementById("depoAddress").style.display = "block";
            document.getElementById("premInspection").style.display = "none";
            document.getElementById("buttonVisual").style.display = "block";
        } else if (courtType == "criminal"){
            document.getElementById("courtroom").style.display = "none";
            document.getElementById("docInspection").style.display = "none";
            document.getElementById("inspectionAddress").style.display = "none";
            document.getElementById("depoAddress").style.display = "none";
            document.getElementById("premInspection").style.display = "none";
            document.getElementById("buttonVisual").style.display = "none";
            alert ("");
			return;
        }

    } else if (docTypeSelect == "premInsp"){
        if (courtType == "civil" || courtType == "civilFamily"){
            document.getElementById("courtroom").style.display = "none";
            document.getElementById("docInspection").style.display = "none";
            document.getElementById("inspectionAddress").style.display = "none";
            document.getElementById("depoAddress").style.display = "none";
            document.getElementById("premInspection").style.display = "block";
            document.getElementById("buttonVisual").style.display = "block";
        } else if (courtType == "criminal"){
            document.getElementById("courtroom").style.display = "none";
            document.getElementById("docInspection").style.display = "none";
            document.getElementById("inspectionAddress").style.display = "none";
            document.getElementById("depoAddress").style.display = "none";
            document.getElementById("premInspection").style.display = "none";
            document.getElementById("buttonVisual").style.display = "none";
            alert ("");
			return;
        }
    }
}


// plaintiff sex
function plaintiffNumberChange(selectObj) {
    var pNum = document.getElementById("id_plaintiffNumber").value;
    if (pNum == 1){document.getElementById("id_plaintiffSex").disabled = true;
    } else if (pNum == 0){document.getElementById("id_plaintiffSex").disabled = false;}
}


// number of docs & objects to be inspected
function docInspectionChange(){
    var numberDocs = document.getElementById("id_docInspection").value;

    if (numberDocs == 0){
        document.getElementById("docObj1").style.display = "none";
        document.getElementById("docObj2").style.display = "none";
        document.getElementById("docObj3").style.display = "none";
        document.getElementById("docObj4").style.display = "none";
        document.getElementById("docObj5").style.display = "none";
        document.getElementById("docObj6").style.display = "none";
        document.getElementById("docObj7").style.display = "none";
        document.getElementById("docObj8").style.display = "none";
        document.getElementById("docObj9").style.display = "none";
        document.getElementById("docObj10").style.display = "none";
    } else if (numberDocs == 1){
        document.getElementById("docObj1").style.display = "block";
        document.getElementById("docObj2").style.display = "none";
        document.getElementById("docObj3").style.display = "none";
        document.getElementById("docObj4").style.display = "none";
        document.getElementById("docObj5").style.display = "none";
        document.getElementById("docObj6").style.display = "none";
        document.getElementById("docObj7").style.display = "none";
        document.getElementById("docObj8").style.display = "none";
        document.getElementById("docObj9").style.display = "none";
        document.getElementById("docObj10").style.display = "none";
    } else if (numberDocs == 2){
        document.getElementById("docObj1").style.display = "block";
        document.getElementById("docObj2").style.display = "block";
        document.getElementById("docObj3").style.display = "none";
        document.getElementById("docObj4").style.display = "none";
        document.getElementById("docObj5").style.display = "none";
        document.getElementById("docObj6").style.display = "none";
        document.getElementById("docObj7").style.display = "none";
        document.getElementById("docObj8").style.display = "none";
        document.getElementById("docObj9").style.display = "none";
        document.getElementById("docObj10").style.display = "none";
    } else if (numberDocs == 3){
        document.getElementById("docObj1").style.display = "block";
        document.getElementById("docObj2").style.display = "block";
        document.getElementById("docObj3").style.display = "block";
        document.getElementById("docObj4").style.display = "none";
        document.getElementById("docObj5").style.display = "none";
        document.getElementById("docObj6").style.display = "none";
        document.getElementById("docObj7").style.display = "none";
        document.getElementById("docObj8").style.display = "none";
        document.getElementById("docObj9").style.display = "none";
        document.getElementById("docObj10").style.display = "none";
    } else if (numberDocs == 4){
        document.getElementById("docObj1").style.display = "block";
        document.getElementById("docObj2").style.display = "block";
        document.getElementById("docObj3").style.display = "block";
        document.getElementById("docObj4").style.display = "block";
        document.getElementById("docObj5").style.display = "none";
        document.getElementById("docObj6").style.display = "none";
        document.getElementById("docObj7").style.display = "none";
        document.getElementById("docObj8").style.display = "none";
        document.getElementById("docObj9").style.display = "none";
        document.getElementById("docObj10").style.display = "none";
    } else if (numberDocs == 5){
        document.getElementById("docObj1").style.display = "block";
        document.getElementById("docObj2").style.display = "block";
        document.getElementById("docObj3").style.display = "block";
        document.getElementById("docObj4").style.display = "block";
        document.getElementById("docObj5").style.display = "block";
        document.getElementById("docObj6").style.display = "none";
        document.getElementById("docObj7").style.display = "none";
        document.getElementById("docObj8").style.display = "none";
        document.getElementById("docObj9").style.display = "none";
        document.getElementById("docObj10").style.display = "none";
    } else if (numberDocs == 6){
        document.getElementById("docObj1").style.display = "block";
        document.getElementById("docObj2").style.display = "block";
        document.getElementById("docObj3").style.display = "block";
        document.getElementById("docObj4").style.display = "block";
        document.getElementById("docObj5").style.display = "block";
        document.getElementById("docObj6").style.display = "block";
        document.getElementById("docObj7").style.display = "none";
        document.getElementById("docObj8").style.display = "none";
        document.getElementById("docObj9").style.display = "none";
        document.getElementById("docObj10").style.display = "none";
    } else if (numberDocs == 7){
        document.getElementById("docObj1").style.display = "block";
        document.getElementById("docObj2").style.display = "block";
        document.getElementById("docObj3").style.display = "block";
        document.getElementById("docObj4").style.display = "block";
        document.getElementById("docObj5").style.display = "block";
        document.getElementById("docObj6").style.display = "block";
        document.getElementById("docObj7").style.display = "block";
        document.getElementById("docObj8").style.display = "none";
        document.getElementById("docObj9").style.display = "none";
        document.getElementById("docObj10").style.display = "none";
    } else if (numberDocs == 8){
        document.getElementById("docObj1").style.display = "block";
        document.getElementById("docObj2").style.display = "block";
        document.getElementById("docObj3").style.display = "block";
        document.getElementById("docObj4").style.display = "block";
        document.getElementById("docObj5").style.display = "block";
        document.getElementById("docObj6").style.display = "block";
        document.getElementById("docObj7").style.display = "block";
        document.getElementById("docObj8").style.display = "block";
        document.getElementById("docObj9").style.display = "none";
        document.getElementById("docObj10").style.display = "none";
    } else if (numberDocs == 9){
        document.getElementById("docObj1").style.display = "block";
        document.getElementById("docObj2").style.display = "block";
        document.getElementById("docObj3").style.display = "block";
        document.getElementById("docObj4").style.display = "block";
        document.getElementById("docObj5").style.display = "block";
        document.getElementById("docObj6").style.display = "block";
        document.getElementById("docObj7").style.display = "block";
        document.getElementById("docObj8").style.display = "block";
        document.getElementById("docObj9").style.display = "block";
        document.getElementById("docObj10").style.display = "none";
    } else if (numberDocs == 10){
        document.getElementById("docObj1").style.display = "block";
        document.getElementById("docObj2").style.display = "block";
        document.getElementById("docObj3").style.display = "block";
        document.getElementById("docObj4").style.display = "block";
        document.getElementById("docObj5").style.display = "block";
        document.getElementById("docObj6").style.display = "block";
        document.getElementById("docObj7").style.display = "block";
        document.getElementById("docObj8").style.display = "block";
        document.getElementById("docObj9").style.display = "block";
        document.getElementById("docObj10").style.display = "block";
    }
}






function generate() {
	
	var docTypeSelect = document.getElementById("id_docSelect").value;
    var jurisdiction = document.getElementById("id_jurisdiction").value;
	var courtType = document.getElementById("id_courtType").value;


	const C_FIRM_NAME = "Hawkins & Jedziniak, LLC";
	const C_ADDRESS_LINE_1 = "1225 South Church Street";
	const C_ADDRESS_LINE_2 = "Greenville, South Carolina 29605";
    const C_ADDRESS = "1225 South Church Street \nGreenville, South Carolina 29605"
	const C_FIRM_PHONE = "(864) 275-8142 (telephone)";
    const C_FIRM_PHONE_NUMBER_ONLY = "(864) 275-8142";
	const C_FIRM_FAX = "(864) 752-0911 (facsimile)";
	const C_ATTORNEY_1_EMAIL = "josh@hjllcsc.com";
	const C_ATTORNEY_2_EMAIL = "helena@hjllcsc.com";
	const C_PARALEGAL_NAME = "Monica Brody";
	const C_PARALEGAL_EMAIL = "paralegal@hjllcsc.com";
	const C_CITY_STATE = "Greenville, South Carolina";
    const C_CITY = "Greenville";
    const C_STATE = "SC";
    const C_ZIP = "29605";

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
    var filingDate = todaysDate_MMMDDYYYY;


	// ******* grab variables from html elements *******
	var filingCounty = document.getElementById("id_filingCounty").value;
	var filingCourt = document.getElementById("id_filingCourt").value;
        var filingCourt_adjusted;
            if (filingCourt == "In the Court of Common Pleas"){filingCourt_adjusted = "Court of Common Pleas"}
            else if (filingCourt == "In the Court of General Sessions"){filingCourt_adjusted = "Court of General Session"}
            else if (filingCourt == "In the Magistrates Court"){filingCourt_adjusted = "Magistrates Court"}

        var circuitNumber;
            if (filingCounty == "Calhoun" || filingCounty == "Dorchester" || filingCounty ==  "Orangeburg"){circuitNumber = "First";
            } else if (filingCounty == "Aiken" || filingCounty == "Bamberg" || filingCounty ==  "Barnwell"){circuitNumber = "Second";
            } else if (filingCounty == "Clarendon" || filingCounty == "Lee" || filingCounty ==  "Sumter" || filingCounty == "Williamsburg"){circuitNumber = "Third";
            } else if (filingCounty == "Chesterfield" || filingCounty == "Darlington" || filingCounty ==  "Dillon" || filingCounty ==  "Marlboro"){circuitNumber = "Fourth";
            } else if (filingCounty == "Kershaw" || filingCounty == "Richland"){circuitNumber = "Fifth";
            } else if (filingCounty == "Chester" || filingCounty == "Fairfield" || filingCounty ==  "Lancaster"){circuitNumber = "Sixth";
            } else if (filingCounty == "Cherokee" || filingCounty == "Spartanburg"){circuitNumber = "Seventh";
            } else if (filingCounty == "Abbeville" || filingCounty == "Greenwood" || filingCounty ==  "Laurens" || filingCounty ==  "Newberry"){circuitNumber = "Eighth";
            } else if (filingCounty == "Berkeley" || filingCounty == "Charleston"){circuitNumber = "Ninth";
            } else if (filingCounty == "Anderson" || filingCounty == "Oconee"){circuitNumber = "Tenth";
            } else if (filingCounty == "Edgefield" || filingCounty == "Lexington" || filingCounty ==  "McCormick" || filingCounty ==  "Saluda"){circuitNumber = "Eleventh";
            } else if (filingCounty == "Florence" || filingCounty == "Marion"){circuitNumber = "Twelfth";
            } else if (filingCounty == "Greenville" || filingCounty == "Pickens"){circuitNumber = "Thirteenth";
            } else if (filingCounty == "Allendale" || filingCounty == "Beaufort" || filingCounty == "Colleton" || filingCounty == "Hampton" || filingCounty == "Jasper"){circuitNumber = "Fourteenth";
            } else if (filingCounty == "Georgetown" || filingCounty == "Horry"){circuitNumber = "Fiftheenth";
            } else if (filingCounty == "Union" || filingCounty == "York"){circuitNumber = "Sixteenth";}

            
    var attorneyFiling = document.getElementById("id_attorneyFiling").value;

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
    
    var subp_Name = document.getElementById("id_subpName").value;
        var subp_address1 = document.getElementById("id_subpAddress1").value;
        var subp_address2 = document.getElementById("id_subpAddress2").value;
        var subp_address3 = document.getElementById("id_subpAddress3").value;
            var subp_addressArray = [subp_address1, subp_address2, subp_address3]
            var subp_filtered = subp_addressArray.filter(Boolean);
            var subp_addressFull = subp_filtered.join(", ")

    var courtroom_NameNum = document.getElementById("id_courtroomName").value;
        var courtroom_address1 = document.getElementById("id_courtroomAddress1").value;
        var courtroom_address2 = document.getElementById("id_courtroomAddress2").value;
        var courtroom_address3 = document.getElementById("id_courtroomAddress3").value;
            var courtroom_Date = dateFixUp(document.getElementById("id_courtroomDate").value);
            var courtroom_Time = document.getElementById("id_courtroomTime").value;
            var courtroom_AMPM = document.getElementById("id_courtroomAMPM").value;
            var courtroom_TimeAMPM = document.getElementById("id_courtroomTime").value + " " + document.getElementById("id_courtroomAMPM").value;
                var courtroom_addressArray = [courtroom_address1, courtroom_address2, courtroom_address3]
                var courtroom_filtered = courtroom_addressArray.filter(Boolean);
                var courtroom_addressFull = courtroom_filtered.join("\n")
    
    var numberDocs = document.getElementById("id_docInspection").value;
        var docObj1 = document.getElementById("id_docObj1").value;
        var docObj2 = document.getElementById("id_docObj2").value;
        var docObj3 = document.getElementById("id_docObj3").value;
        var docObj4 = document.getElementById("id_docObj4").value;
        var docObj5 = document.getElementById("id_docObj5").value;
        var docObj6 = document.getElementById("id_docObj6").value;
        var docObj7 = document.getElementById("id_docObj7").value;
        var docObj8 = document.getElementById("id_docObj8").value;
        var docObj9 = document.getElementById("id_docObj9").value;
        var docObj10 = document.getElementById("id_docObj10").value;
            var documentArray = [docObj1, docObj2, docObj3, docObj4, docObj5, docObj6, docObj7, docObj8, docObj9, docObj10]
            var document_filtered = documentArray.filter(Boolean);
            var document_list = document_filtered.join(", ")

    var inspection_address1 = document.getElementById("id_inspectionAddress1").value;
    var inspection_address2 = document.getElementById("id_inspectionAddress2").value;
    var inspection_address3 = document.getElementById("id_inspectionAddress3").value;
        var inspection_Date = dateFixUp(document.getElementById("id_inspectionDate").value);
        var inspection_Time = document.getElementById("id_inspectionTime").value;
        var inspection_AMPM = document.getElementById("id_inspectionAMPM").value;
        var inspection_TimeAMPM = document.getElementById("id_inspectionTime").value + " " + document.getElementById("id_inspectionAMPM").value;
            var inspection_addressArray = [inspection_address1, inspection_address2, inspection_address3]
            var inspection_filtered = inspection_addressArray.filter(Boolean);
            var inspection_addressFull = inspection_filtered.join("\n")

    var depo_address1 = document.getElementById("id_depoAddress1").value;
    var depo_address2 = document.getElementById("id_depoAddress2").value;
    var depo_address3 = document.getElementById("id_depoAddress3").value;
        var depo_Date = dateFixUp(document.getElementById("id_depoDate").value);
        var depo_Time = document.getElementById("id_depoTime").value;
        var depo_AMPM = document.getElementById("id_depoAMPM").value;
        var depo_TimeAMPM = document.getElementById("id_depoTime").value + " " + document.getElementById("id_depoAMPM").value;
            var depo_addressArray = [depo_address1, depo_address2, depo_address3]
            var depo_filtered = depo_addressArray.filter(Boolean);
            var depo_addressFull = depo_filtered.join("\n")
            
    var prem_address1 = document.getElementById("id_premisesAddress1").value;
    var prem_address2 = document.getElementById("id_premisesAddress2").value;
    var prem_address3 = document.getElementById("id_premisesAddress3").value;
        var prem_Date = dateFixUp(document.getElementById("id_premInspectDate").value);
        var prem_Time = document.getElementById("id_premInspectTime").value;
        var prem_AMPM = document.getElementById("id_premInspectAMPM").value;
        var prem_TimeAMPM = document.getElementById("id_premInspectTime").value + " " + document.getElementById("id_premInspectAMPM").value;
            var prem_addressArray = [prem_address1, prem_address2, prem_address3]
            var prem_filtered = prem_addressArray.filter(Boolean);
            var prem_addressFull = prem_filtered.join("\n")
        

	// misc additional variables
	var sFilingAttorney = "s/" + attorneyFiling	

    var attorneyFiling_email;
        if (attorneyFiling == "Joshua T. Hawkins"){attorneyFiling_email = "josh@hjllcsc.com"}
        else if (attorneyFiling == "Helena L. Jedziniak"){attorneyFiling_email = "helena@hjllcsc.com"}

    var addressSelect;
    var dateSelect;
    var timeSelect;
    var template;

    if (docTypeSelect == "courtAppear"){
        addressSelect = courtroom_addressFull;
        dateSelect = courtroom_Date;
            if (courtType == "civil"){
                timeSelect = courtroom_TimeAMPM;
                template = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/07/civil-courtAppear.docx";
            } else if (courtType == "civilFamily"){
                timeSelect = courtroom_Time
                template = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/07/civilFamily-courtAppear-" + courtroom_AMPM + ".docx";
            } else if (courtType == "criminal"){
                timeSelect = courtroom_TimeAMPM;
                    if (numberDocs == 0){template = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/07/criminal.docx";}
                    else if (numberDocs > 0){template = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/07/criminal-with-docs.docx";}
            }

    } else if (docTypeSelect == "docInsp"){
        addressSelect = inspection_addressFull;
        dateSelect = inspection_Date;
            if (courtType == "civil"){
                timeSelect = inspection_TimeAMPM;
                template = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/07/civil-docInsp.docx";
            } else if (courtType == "civilFamily"){
                timeSelect = inspection_Time;
                template = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/07/civilFamily-docInsp-" + courtroom_AMPM + ".docx";
            }

    } else if (docTypeSelect == "depoAppear"){
        addressSelect = depo_addressFull;
        dateSelect = depo_Date;
            if (courtType == "civil"){
                timeSelect = depo_TimeAMPM;
                template = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/07/civil-depoAppear.docx";
            } else if (courtType == "civilFamily"){
                timeSelect = depo_Time;
                template = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/07/civilFamily-depoAppear-" + courtroom_AMPM + ".docx";
            }

    } else if (docTypeSelect == "premInsp"){
        addressSelect = prem_addressFull;
        dateSelect = prem_Date;
            if (courtType == "civil"){
                timeSelect = prem_TimeAMPM;
                template = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/07/civil-premInsp.docx";
            } else if (courtType == "civilFamily"){
                timeSelect = prem_Time;
                template = "https://hawkinsandjedziniak.com/wp-content/uploads/2021/07/civilFamily-premInsp-" + courtroom_AMPM + ".docx";
        }
    }


    /* ****************** INPUT CHECKS ****************** */









    /* ****************** DOCUMENT PROCESSING ****************** */

    loadFile(template,function(error,content){
        if (error) { throw error };

        var zip = new PizZip(content);
        var doc;
        try {doc=new window.docxtemplater(zip, {paragraphLoop:true, linebreaks:true});} catch(error) {errorHandler(error);}
        
        doc.setData({
            "county_name_allCaps": filingCounty.toUpperCase(),
            "county_name": filingCounty,
            "court_name_allCaps": filingCourt_adjusted.toUpperCase(),
            "plaintiff_name": pName,
            "plaintiff_number": pPlural,
            "defendant_name": dName,
            "defendant_number": dPlural,
            "court_number": circuitNumber.toUpperCase(),
            "case_number": caseNumber,
            "subpoenaed_name": subp_Name,
            "subpoenaed_address": subp_addressFull,
            "address": addressSelect,
            "courtroom_name": courtroom_NameNum,
            "documents": document_list,
            "date": dateSelect,
            "time": timeSelect,
            "current_date": filingDate,
            "attorney_name_allCaps": attorneyFiling.toUpperCase(),
            "attorney_name": attorneyFiling,
            "firm_name": C_FIRM_NAME,
            "firm_address": C_ADDRESS,
            "firm_phone_number": C_FIRM_PHONE_NUMBER_ONLY,
        });

        try {doc.render();} catch (error) {errorHandler(error);}
    
        var saveName;
        var saveAsPrompt = "Please choose a file name for the Subpoena";
        var saveAsDefaultInput = pName.concat(' subpoena.docx');			
            if (document.getElementById("id_defaultFilename").checked == true) {saveName = saveAsDefaultInput;}
            else if (document.getElementById("id_defaultFilename").checked == false) {saveName = prompt(saveAsPrompt, saveAsDefaultInput);}
        
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

function uncapitalize(s)
{
    return s && s[0].toLowerCase() + s.slice(1);
}