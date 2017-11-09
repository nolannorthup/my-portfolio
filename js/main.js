import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "My Portfolio Architectures",
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
    'href': "AITCP Transcript_110320_20171108.pdf",
    'desc': "Certified Cloud Technology Professional",
    'image': {
      'desc': `"A Certified Cloud Technology Professional has obtained
                proven knowledge and capabilities pertaining to the
                identification, positioning, and utilization of modern
                cloud technologies, resources, and associated concepts
                and decision-making criteria."`,
      'src': "images/cloud.jpg",
      'comment': ""
    }
  },
  {
    'title': "Certified Cloud Professional",
    'href': "AITCP Transcript_110320_20171108.pdf",
    'desc': "Certified Cloud Professional",
    'image': {
      'desc': `"A Certified Cloud Professional has completed one or more
                specialized certifications or has met minimum CCP
                certification qualifications by demonstrating proficiency
                in cloud computing fundamentals and one additional area."`,
      'src': "images/cloud.jpg",
      'comment': ""
    }
  },
  {
    'title': "AWS Certified Solutions Architect - Associate",
    'href': "https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2016-12-30&ci=AWS00206559",
    'desc': "AWS Certified Solutions Architect - Associate - Badge",
    'image': {
      'desc': `"The AWS Certified Solutions Architect – Associate exam
                is intended for individuals with experience designing
                distributed applications and systems on the AWS platform."`,
      'src': "images/arch.jpeg",
      'comment': ""
    }
  },
  {
    'title': "AWS Certified SysOps Administrator - Associate",
    'href': "https://www.certmetrics.com/amazon/public/badge.aspx?i=3&t=c&d=2017-01-09&ci=AWS00206559",
    'desc': "AWS Certified SysOps Administrator - Associate - Badge",
    'image': {
      'desc': `"The AWS Certified SysOps Administrator – Associate
                exam validates technical expertise in deployment, management,
                 and operations on the AWS platform."`,
      'src': "images/ops.jpg",
      'comment': ""
    }
  },
  {
    'title': "AWS Certified Developer - Associate",
    'href': "https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2017-01-17&ci=AWS00206559",
    'desc': "AWS Certified SysOps Administrator - Associate - Badge",
    'image': {
      'desc': `"The AWS Certified Developer – Associate exam validates
                technical expertise in developing and maintaining applications
                 on the AWS platform."`,
      'src': "images/dev.jpeg",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'))
