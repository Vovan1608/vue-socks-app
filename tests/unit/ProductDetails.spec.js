import{ shallowMount } from '@vue/test-utils';
import ProductDetails from '../../src/components/ProductDetails.vue';

describe('ProductDetails.vue', () => {
	test('ul element should be in the document', () => {
		const wrapper = shallowMount(ProductDetails, {
			propsData: {
				details: ["80% cotton", "20% polyester", "Gender-neutral"],
			}
		});

		expect(wrapper.find("ul").exists()).toBe(true);
	});

	test('text "80% cotton" should be in the document', () => {
		const wrapper = shallowMount(ProductDetails, {
			propsData: {
				details: ["80% cotton", "20% polyester", "Gender-neutral"],
			}
		});

		expect(wrapper.text()).toContain('80% cotton');
	});
});