import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import ExampleWork, { ExampleWorkBubble } from '../js/example-work'

configure({ adapter: new Adapter() });

const myWork = [
  {
    'title': "Work Example",
    'image': {
      'desc': "example screenshot of a project involving chemistry",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title': "Work Example",
    'image': {
      'desc': "example screenshot of a project involving chemistry",
      'src': "images/example2.png",
      'comment': `"“Chemistry” by Surian Soosay is licensed under CC BY 2.0
                  https://www.flickr.com/photos/ssoosay/4097410999"`
    }
  }
];

describe("Example Work component", () => {
  let component = shallow(<ExampleWork work={myWork}/>);

    it("Should be a 'section' element", () => {
      expect(component.type()).toEqual('section');
    });

    it("Should contain as many children as there are work examples", () => {
      expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
    });

});

describe("ExampleWorkBuble component", () => {
  let component = shallow(<ExampleWorkBubble example={myWork[1]}/>);

  let images = component.find("img");

  it("Should contain a single 'img' element", () => {
    expect(images.length).toEqual(1);
  });

  it("Should have the image src set correctly", () => {
      expect(images.getElement().props.src).toEqual(myWork[1].image.src);
  });

});
