import React, {useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import resume_1 from '../pages-markdown/resume.md'



const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 5% 0 20%;
`;

const MainColumn = styled.div`
    flex: 3;
    width: 66%;
    padding: 16px;
    margin-right: 33%;
    @media (max-width: 1068px) {
        margin-right: 5%;
        //width: 100%;
    }
`;

const resume = `
---

# Jonathan Koerber

Seattle, WA 98116
____

>I'm an MSCS student at City U Seattle and work as a teaching assistant, where I apply critical thinking and technical knowledge to provide end-user support to students and faculty. My role involves connecting with individuals to share my technical expertise and enhance their computer skills.

**EDUCATION**
______
**Master of Science, Computer Science**, May 2025(expected)

 City University , Seattle, WA

**Bachelor of Science, Software Development**, May 2020

 Western Governors University, Salt Lake City, UT

**EXPERIENCE**
_______
#### SWE Intern - Part Time,  June 2024 - Present
**Open Stack** Remote                  

> - Collaborated with a small team to implement the OpenAPI specification on the Manila shared file system API.
> - Pushed patches to ensure the Zull CI/CD pipeline ran successfully will all functional and unit tests were passing.
> - Worked with senior developers to ensure 100% validation of API requests increasing the reliability of service

#### Teaching Assistant—Part Time, June 2023- Present
**City University of Seattle**, Seattle, WA

> - Supported up to 60 students each quarter across three classes, enhancing their understanding of technologies such as machine learning, web development, and core computer science topics.
> - Tested and troubleshot technical curricula for data science, Tableau, and Microsoft Power Platform, leading to a 90% reduction in technical issues reported by students.
> - Organized and led Data Science Club and MeetUp SDE Skills events, increasing student participation by 45% and fostering a collaborative learning environment
> - Connected with a diverse student body, delivering hands-on support in graduate and doctoral-level courses.
> - Managed Learning Management System (LMS) and instructional materials for an organized learning environment.

#### Chef Trainer—Full Time, July 2017 - May 2023
**FareStart**, Seattle WA

> - Collaborated with a multifunctional team to improve processes within the production kitchen, contributing to the production of over 5 million meals for emergency shelters during the pandemic.
> - Delivered hands-on training to at-risk populations returning to the workforce.
> - Innovated recipes and streamlined operations to enhance product quality and customer satisfaction, aligning with industry best practices.

#### SKILLS
______
Python3, Pandas, NumPy, JavaScript, MySQL,
Low Code, Git, Gerrit, Linux, Bash, AWS
Project Management, 

#### CERTIFICATIONS
_______
**Project Management Certification**, \t2024 _Google_

**IT Automation with Python**,\t2021 _Google_

**JavaScript Algorithms and Data Structures**, 2021, _FreeCodeCame_

**Scientific Computing with Python**, 2021,_FreeCodeCamp_

#### VOLUNTEER
_____
#### Event Host, Presenter \tJun 2023 - Present
**SDE SKILLS**, Seattle WA
> - Hosted a bi-weekly meetup event, leading the group in solving LeetCode problems.
> - Coordinated with a core group of volunteers and managed venue logistics.
> - Oversaw event announcements, setup, and breakdown.
          

#### Software Developer, Jun 2023 – October 2023
**Virufy**, _Remote_
> - Developed a JavaScript script to automate name-checking against TSDB, significantly improving efficiency in human resources projects.
> - Created a development container to streamline the on-boarding process.
> - Assisted in debugging and troubleshooting a React JavaScript application.


#### Software Engenier \tNov 2020 - Oct 2021
**iSeaTree**, _Remote_
> - Developed a critical location service component, ensuring seamless integration for an enhanced user experience.
> - Swiftly resolved reported bugs by identifying root causes and implementing effective fixes.
> - Proactively upgraded project dependencies to ensure optimal performance and security.
`
console.log(resume_1)
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