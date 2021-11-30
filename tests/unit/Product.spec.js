import{ shallowMount } from '@vue/test-utils';
import Product from '../../src/components/Product.vue';

describe('Product.vue', () => {
	test('text "Shipping: Free" should be in the document', () => {
		const wrapper = shallowMount(Product, {
			propsData: {
				premium: true,
			}
		});

		expect(wrapper.text()).toContain('Shipping: Free');
	});

	test('if :hover on the green square, text "Almost sold out!" should be in the document', async () => {
		const wrapper = shallowMount(Product, {
			propsData: {
				premium: true,
			}
		});

		const greenBlock = wrapper.findAll('.color-box').at(0);

		await greenBlock.trigger('mouseover');

		expect(wrapper.text()).toContain('Almost sold out!');
	});

	test('if :hover on the blue square, text "Out of stock" should be in the document', async () => {
		const wrapper = shallowMount(Product, {
			propsData: {
				premium: true,
			}
		});

		const blueBlock = wrapper.findAll('.color-box').at(1);

		await blueBlock.trigger('mouseover');

		expect(wrapper.text()).toContain('Out of stock');
	});
});