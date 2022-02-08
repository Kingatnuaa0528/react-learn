import React from "react";
import { mount } from "enzyme";

import ReduxTestComponent from "../../component/test-redux/demo";

let wrapper = null;

beforeAll(() => {
    wrapper = mount(<ReduxTestComponent/>);
})

test("测试点击+号", () => {
    wrapper.find('button').filterWhere((n) => n.text() === '+').simulate('click');
    expect(wrapper.find('p').text()).toEqual('1')
});

test("测试点击-号", () => {
    wrapper.find('button').filterWhere((n) => n.text() === '-').simulate('click');
    expect(wrapper.find('p').text()).toEqual('0')
});