var containerElement = document.createElement('div');
        containerElement.style.padding = "0 5% 0 5%";
        containerElement.style.margin = "0 15% 0 15%";
        containerElement.style.border = "2px solid black";
        containerElement.className = "container";

        // Resume Title
        var myH1 = document.createElement('h1');
        myH1.style.textAlign = "center";
        myH1.style.padding = "10px";
        myH1.innerHTML = "Resume";

        // Name
        var myH2 = document.createElement('h2');
        myH2.style.textAlign = "center";
        myH2.style.marginTop = "0px";
        myH2.innerHTML = "Katyayini K";

        // Personal Details Container
        var myDetailsElement = document.createElement('div');
        myDetailsElement.style.display = "flex";
        myDetailsElement.style.flexWrap = "wrap";
        myDetailsElement.style.justifyContent = "center";
        myDetailsElement.style.alignItems = "center";

        var myEmail = document.createElement('p');
        myEmail.style.textAlign = "center";
        myEmail.style.marginTop = "0px";
        myEmail.style.padding= "0 20px 0 20px";
        myEmail.innerHTML = "<b>Email : </b>katyayinik1@gmail.com";

        var myLinkedIn = document.createElement('p');
        myLinkedIn.style.textAlign = "center";
        myLinkedIn.style.marginTop = "0px";
        myLinkedIn.style.padding= "0 20px 0 20px";
        myLinkedIn.innerHTML = "<b>LinkedIn : </b>Katyayini@linkedin";

        var myContact = document.createElement('p');
        myContact.style.textAlign = "center";
        myContact.style.marginTop = "0px";
        myContact.style.padding= "0 20px 0 20px";
        myContact.innerHTML = "<b>Contact : </b>+91 *********9";

        // Objective Title
        var myObjectiveTitle = document.createElement('h3');
        myObjectiveTitle.innerHTML = "Objective : "
        myObjectiveTitle.style.backgroundColor = "gray";
        myObjectiveTitle.style.padding = "8px";
        myObjectiveTitle.style.color = "white";

        // Objective Content
        var myObjective = document.createElement('p');
        myObjective.innerHTML = "Looking for a suitable job role in Software Engineering and Development with ABC Inc. to utilize 2+ years of experience in technology engineering, software design, client support and servicing and server maintenance.";

        // Table Title
        var myTableTitle = document.createElement('h3');
        myTableTitle.innerHTML = "Education Details : ";
        myTableTitle.style.backgroundColor = "gray";
        myTableTitle.style.padding = "8px";
        myTableTitle.style.color = "white";

        // Table
        var myTable = document.createElement('table');
        myTable.style.borderCollapse = "collapse";
        myTable.style.width = "90%";
        myTable.style.margin = "50px auto";

        // Table Row 0
        var myTableHeader = document.createElement('thead');
        
        var myTableRow0 = document.createElement('tr');

        var myTableHeader1 = document.createElement('th');
        myTableHeader1.style.border = "1px solid black";
        myTableHeader1.innerHTML = "Education";

        var myTableHeader2 = document.createElement('th');
        myTableHeader2.style.border = "1px solid black";
        myTableHeader2.innerHTML = "Branch";
        
        var myTableHeader3 = document.createElement('th');
        myTableHeader3.style.border = "1px solid black";
        myTableHeader3.style.padding = "8px";
        myTableHeader3.innerHTML = "Percentage";

        var myTableHeader4 = document.createElement('th');
        myTableHeader4.style.border = "1px solid black";
        myTableHeader4.innerHTML = "Year";

        // Table Row 1
        var myTableData = document.createElement('tdata');
        
        var myTableRow1 = document.createElement('tr');
        myTableRow1.style.textAlign = "center";

        var myTableHeader11 = document.createElement('td');
        myTableHeader11.style.border = "1px solid black";
        myTableHeader11.innerHTML = "M.Tech";

        var myTableHeader21 = document.createElement('td');
        myTableHeader21.style.border = "1px solid black";
        myTableHeader21.style.padding = "8px";
        myTableHeader21.innerHTML = "CSE";
        
        var myTableHeader31 = document.createElement('td');
        myTableHeader31.style.border = "1px solid black";
        myTableHeader31.innerHTML = "86.1%";

        var myTableHeader41 = document.createElement('td');
        myTableHeader41.style.border = "1px solid black";
        myTableHeader41.innerHTML = "2016 - 2018";
        
        // Table Row 2 
        var myTableRow2 = document.createElement('tr');
        myTableRow2.style.textAlign = "center";

        var myTableHeader12 = document.createElement('td');
        myTableHeader12.style.border = "1px solid black";
        myTableHeader12.innerHTML = "B.Tech";

        var myTableHeader22 = document.createElement('td');
        myTableHeader22.style.border = "1px solid black";
        myTableHeader22.innerHTML = "CSE";
        
        var myTableHeader32 = document.createElement('td');
        myTableHeader32.style.border = "1px solid black";
        myTableHeader32.innerHTML = "79.6%";

        var myTableHeader42 = document.createElement('td');
        myTableHeader42.style.border = "1px solid black";
        myTableHeader42.style.padding = "8px";
        myTableHeader42.innerHTML = "2012 - 2016";

        // Table Row 3
        var myTableRow3= document.createElement('tr');
        myTableRow3.style.textAlign = "center";

        var myTableHeader13 = document.createElement('td');
        myTableHeader13.style.border = "1px solid black";
        myTableHeader13.innerHTML = "Inter";

        var myTableHeader23 = document.createElement('td');
        myTableHeader23.style.border = "1px solid black";
        myTableHeader23.innerHTML = "MPC";
        
        var myTableHeader33 = document.createElement('td');
        myTableHeader33.style.border = "1px solid black";
        myTableHeader33.style.padding = "8px";
        myTableHeader33.innerHTML = "78.3%";

        var myTableHeader43 = document.createElement('td');
        myTableHeader43.style.border = "1px solid black";
        myTableHeader43.innerHTML = "2010 - 2012";

        // Table Row 4
        var myTableRow4 = document.createElement('tr');
        myTableRow4.style.textAlign = "center";

        var myTableHeader14 = document.createElement('td');
        myTableHeader14.style.border = "1px solid black";
        myTableHeader14.style.padding = "8px";
        myTableHeader14.innerHTML = "10th";

        var myTableHeader24 = document.createElement('td');
        myTableHeader24.style.border = "1px solid black";
        myTableHeader24.innerHTML = "State Board";
        
        var myTableHeader34 = document.createElement('td');
        myTableHeader34.style.border = "1px solid black";
        myTableHeader34.innerHTML = "92.3%";

        var myTableHeader44 = document.createElement('td');
        myTableHeader44.style.border = "1px solid black";
        myTableHeader44.innerHTML = "2010";

        // Skills Title
        var mySkillsTitle = document.createElement('h3');
        mySkillsTitle.innerHTML = "Technical Skills : ";
        mySkillsTitle.style.backgroundColor = "gray";
        mySkillsTitle.style.padding = "8px";
        mySkillsTitle.style.color = "white";

        // Skills List
        var mySKillsList = document.createElement('ul');
        mySKillsList.style.paddingLeft = "60px";
        
        var skill1 = document.createElement('li');
        skill1.innerHTML = "C & C++";

        var skill2 = document.createElement('li');
        skill2.innerHTML = "HTML5 & CSS3";

        var skill3 = document.createElement('li');
        skill3.innerHTML = "Bootstrap";

        var skill4 = document.createElement('li');
        skill4.innerHTML = "JavaScript";

        var skill5 = document.createElement('li');
        skill5.innerHTML = "React JS";

        var skill6 = document.createElement('li');
        skill6.innerHTML = "Node JS";

        var skill7 = document.createElement('li');
        skill7.innerHTML = "Express JS";

        var skill8 = document.createElement('li');
        skill8.innerHTML = "Mongo DB";

        var skill9 = document.createElement('li');
        skill9.innerHTML = "MySQL";

        var skill10 = document.createElement('li');
        skill10.innerHTML = "GitHub";


        // Appending Childs to Parents
        containerElement.appendChild(myH1);
        containerElement.appendChild(myH2);
        containerElement.appendChild(myDetailsElement);
        myDetailsElement.appendChild(myEmail);
        myDetailsElement.appendChild(myContact);
        myDetailsElement.appendChild(myLinkedIn);
        containerElement.appendChild(myObjectiveTitle);
        containerElement.appendChild(myObjective);
        containerElement.appendChild(myTableTitle);
        // Table
        containerElement.appendChild(myTable);
        myTable.appendChild(myTableHeader);
        // Table Row 0
        myTableHeader.appendChild(myTableRow0);
        myTableRow0.appendChild(myTableHeader1);
        myTableRow0.appendChild(myTableHeader2);
        myTableRow0.appendChild(myTableHeader3);
        myTableRow0.appendChild(myTableHeader4);
        // Table Row 1
        myTable.appendChild(myTableRow1);
        myTableRow1.appendChild(myTableHeader11);
        myTableRow1.appendChild(myTableHeader21);
        myTableRow1.appendChild(myTableHeader31);
        myTableRow1.appendChild(myTableHeader41);
        // Table Row 2
        myTable.appendChild(myTableRow2);
        myTableRow2.appendChild(myTableHeader12);
        myTableRow2.appendChild(myTableHeader22);
        myTableRow2.appendChild(myTableHeader32);
        myTableRow2.appendChild(myTableHeader42);
        // Table Row 3
        myTable.appendChild(myTableRow3);
        myTableRow3.appendChild(myTableHeader13);
        myTableRow3.appendChild(myTableHeader23);
        myTableRow3.appendChild(myTableHeader33);
        myTableRow3.appendChild(myTableHeader43);
        // Table Row 4
        myTable.appendChild(myTableRow4);
        myTableRow4.appendChild(myTableHeader14);
        myTableRow4.appendChild(myTableHeader24);
        myTableRow4.appendChild(myTableHeader34);
        myTableRow4.appendChild(myTableHeader44);
        // Skills
        containerElement.appendChild(mySkillsTitle);
        // Skills List
        containerElement.appendChild(mySKillsList);
        mySKillsList.appendChild(skill1);
        mySKillsList.appendChild(skill2);
        mySKillsList.appendChild(skill3);
        mySKillsList.appendChild(skill4);
        mySKillsList.appendChild(skill5);
        mySKillsList.appendChild(skill6);
        mySKillsList.appendChild(skill7);
        mySKillsList.appendChild(skill8);
        mySKillsList.appendChild(skill9);
        mySKillsList.appendChild(skill10);

document.body.appendChild(containerElement);