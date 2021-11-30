import { mount } from "@vue/test-utils";
import App from "../../src/App.vue";

it('renders correctly', () => {
  const wrapper = mount(App)
  expect(wrapper.element).toMatchSnapshot()
});