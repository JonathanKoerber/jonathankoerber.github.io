import React, {useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";



const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 20% 0 20%;
`;

const MainColumn = styled.div`
    flex: 3;
    width: 66%;
    padding: 16px;
    margin-right: 33%
`;

const resume = `
# JONATHAN KOERBER 


Seattle, WA - (206) 817-9893 - koerberjonathan@cityuniversity.edu

## EDUCATION

### City University of Seattle – Seattle, WA June 2024

_Master of Science in Computer Science_

### Western Governors University – Seattle, WA May 2020

_Bachelor of Science; Software Development_

#### CERTIFICATIONS

* IT Automation with Python-Google 
* Scientific Computing with Python - Free Code Camp
* JavaScript Algorithms and Data Structures - Free Code Camp
* Microsoft MTA-396 Database Foundations 
* CIW Advanced HTML5 and CSS3 Specialist 
* CompTIA Project +
 

#### TECHNICAL SKILLS

* Python3 - Flask Django
* JavaScript - REACT - HTML - CSS
* Rust
* Java 
* SQL - MySQL - PostgreSQL
* CI/CD - Docker
* Salesforce Microsoft 365
* GIT - GitHub

### EXPERIENCE

#### City University – Seattle, WA2023 – Present

_Student Assistant, School of Technology and Computing_

- Work under supervision to help Program Directors, Program managers, Subject Matter Experts (SMEs), and Instructors perform their duties
- Tutor student one-on-one and in small groups helping to mentor students in the class material
- Assist with managing instructional materials and Learning Management System (LMS) shells and resolve technology-related issues students experience in class

#### FareStart – Seattle, WA2017 – 2023

_Cook_

- Mentor junior staff and students in baking methods and application of food science
- Lead the development on new recipes procedures in accordance of industry best practices
- Translate business processes into a Salesforce prototype to demonstrate the value of system
- Create scripts in Python to processes CSV files clean data

#### iSeaTree – Seattle, WA2020 – 2021

_Volunteer Contributor_

- Took on ownership for development of location service component in app
- Responded to reported bug issues, found root cause and implemented fix
- Monitored and upgraded project dependency for Expo, React Native and Cloud Firestore

#### Bezar Studio - Seattle, WA 2019

_Volunteer Web Developer_ (2)

- Owned software development life cycle for a personal portfolio
- Transformed wireframes from client into a prototype, then into a web app`


const Resume = () => {
        // Call the fetch function
        
    return (
      <Wrapper>
        
        <MainColumn>
          <ReactMarkdown >
            {resume}
          </ReactMarkdown>
        </MainColumn>
      </Wrapper>
      
    );
  };
  
  export default Resume;