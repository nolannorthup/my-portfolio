import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "My Portfolio Architecture",
    'href': "https://www.lucidchart.com/documents/view/ecf0b916-7c54-4a29-ae7c-abf44ee3772f",
    'desc': "My Portfolio Architecture on Lucidchart.com",
    'image': {
      'desc': `""`,
      'src': "images/react.jpeg",
      'comment': ""
    }
  },
  {
    'title': "Certified Cloud Technology Professional",
    'href': "AITCPTranscript.pdf",
    'desc': `"A Certified Cloud Technology Professional has obtained
              proven knowledge and capabilities pertaining to the
              identification, positioning, and utilization of modern
              cloud technologies, resources, and associated concepts
              and decision-making criteria."`,
    'image': {
      'desc': "Certified Cloud Technology Professional",
      'src': "images/cloud.jpg",
      'comment': ""
    }
  },
  {
    'title': "Certified Cloud Professional",
    'href': "AITCPTranscript.pdf",
    'desc': `"A Certified Cloud Professional has completed one or more
              specialized certifications or has met minimum CCP
              certification qualifications by demonstrating proficiency
              in cloud computing fundamentals and one additional area."`,
    'image': {
      'desc': "Certified Cloud Professional",
      'src': "images/cloud.jpg",
      'comment': ""
    }
  },
  {
    'title': "SOA Governance Workshop",
    'href': "http://prezi.com/q305dr6tbr0j/?utm_campaign=share&utm_medium=copy",
    'desc': "SOA Governance Workshop Prezi",
    'image': {
      'desc': "Governance",
      'src': "images/gov.jpeg",
      'comment': ""
    }
  },
  {
    'title': "Checklists",
    'href': "http://prezi.com/m-0fp-twytwv/?utm_campaign=share&utm_medium=copy&rc=ex0share",
    'desc': `"Checklist is the most common methodology to run and manage a
              complex system, route issues to specialized resources  and
              reduce human error.  Complex engineered systems such as an
              airplane is based on checklists, whether it is take off,
              landing or in-flight issue resolution the running and
              management of an airplane is based on checklists.
              Human fatigue, knowledge, inexperience, and comprehensive
              analysis are all factors which lead to human error while running
              and managing complex systems, knowing when to escalate issues
              compounds emergency situations.  To further understand how
              checklists have assisted management of complex systems and
              mitigated human error further reading can be done “THE CHECKLIST
              MANIFESTO- HOW TO GET THINGS RIGHT” by Dr. Atul Gawande."`,
    'image': {
      'desc': "Airplane cockpit",
      'src': "images/checklist.jpeg",
      'comment': ""
    }
  },
  {
    'title': "AWS Certified Solutions Architect - Associate",
    'href': "https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2016-12-30&ci=AWS00206559",
    'desc': `"The AWS Certified Solutions Architect – Associate exam
              is intended for individuals with experience designing
              distributed applications and systems on the AWS platform."`,
    'image': {
      'desc': "AWS Certified Solutions Architect - Associate - Badge",
      'src': "images/arch.jpeg",
      'comment': ""
    }
  },
  {
    'title': "AWS Certified SysOps Administrator - Associate",
    'href': "https://www.certmetrics.com/amazon/public/badge.aspx?i=3&t=c&d=2017-01-09&ci=AWS00206559",
    'desc': `"The AWS Certified Solutions Architect – Associate exam
              is intended for individuals with experience designing
              distributed applications and systems on the AWS platform."`,
    'image': {
      'desc': "AWS Certified SysOps Administrator - Associate - Badge",
      'src': "images/ops.jpg",
      'comment': ""
    }
  },
  {
    'title': "AWS Certified Developer - Associate",
    'href': "https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2017-01-17&ci=AWS00206559",
    'desc': `"The AWS Certified Developer – Associate exam validates
              technical expertise in developing and maintaining applications
               on the AWS platform."`,
    'image': {
      'desc': "AWS Certified SysOps Administrator - Associate - Badge",
      'src': "images/dev.jpeg",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'))
